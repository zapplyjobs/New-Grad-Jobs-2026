#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const INTERNAL_DIR = path.join(process.cwd(), '.github', '.internal', 'link-health');
const BLOCKED_FILE = path.join(INTERNAL_DIR, 'blocked_urls.json');
const PENDING_FILE = path.join(INTERNAL_DIR, 'pending_dead_urls.json');
const REPORT_FILE = path.join(INTERNAL_DIR, 'link_check_report.json');

const TIMEOUT_MS = 12000;
const RETRY_COUNT = 1;
const DEFAULT_CONCURRENCY = 20;
const MAX_BODY_BYTES = 200 * 1024;

const DEAD_KEYWORDS = [
  'page not found',
  'this job is no longer available',
  'this job is no longer accepting applications',
  'this position is no longer available',
  'this posting has been closed',
  'job not found',
  'job has been removed',
  'this role has been closed',
  'job posting has expired',
  'this job has expired',
  'this job has been closed',
  'the page you\'re looking for doesn\'t exist',
];

function detectPlatform(url) {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    if (hostname.includes('greenhouse.io')) return 'greenhouse';
    if (hostname.includes('ashbyhq.com')) return 'ashby';
    if (hostname.includes('lever.co')) return 'lever';
    if (hostname.includes('myworkdayjobs.com') || hostname.includes('myworkdaysite.com')) return 'workday';
    if (hostname.includes('smartrecruiters.com')) return 'smartrecruiters';
    return 'other';
  } catch {
    return 'unknown';
  }
}

function readJsonArray(filePath) {
  try {
    if (!fs.existsSync(filePath)) return [];
    const value = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function writeJson(filePath, value) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(value, null, 2), 'utf8');
}

function httpGet(url) {
  return new Promise((resolve) => {
    let parsed;
    try {
      parsed = new URL(url);
    } catch {
      resolve({ status: 0, body: '', error: 'invalid_url', url });
      return;
    }

    const lib = parsed.protocol === 'https:' ? https : http;
    const req = lib.get(url, {
      timeout: TIMEOUT_MS,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/json,application/xhtml+xml,*/*',
      },
    }, (res) => {
      let body = '';
      let size = 0;

      res.on('data', (chunk) => {
        size += chunk.length;
        if (size <= MAX_BODY_BYTES) body += chunk;
      });

      res.on('end', () => {
        resolve({
          status: res.statusCode || 0,
          headers: res.headers || {},
          body,
          redirectUrl: res.headers?.location || null,
          url,
        });
      });
    });

    req.on('error', (err) => resolve({ status: 0, body: '', error: err.message, url }));
    req.on('timeout', () => {
      req.destroy();
      resolve({ status: 0, body: '', error: 'timeout', url });
    });
  });
}

async function checkGreenhouse(url) {
  try {
    const parsed = new URL(url);
    const parts = parsed.pathname.split('/').filter(Boolean);
    const jobsIdx = parts.indexOf('jobs');
    let company = null;
    let jobId = null;

    if (jobsIdx >= 1) {
      company = parts[jobsIdx - 1];
      jobId = parts[jobsIdx + 1];
    }
    if (!jobId) jobId = parsed.searchParams.get('gh_jid');
    if (!company || !jobId) return null;

    const apiRes = await httpGet(`https://boards-api.greenhouse.io/v1/boards/${company}/jobs/${jobId}`);
    if (apiRes.status === 200) return { dead: false, reason: 'Greenhouse API OK' };
    if (apiRes.status === 404) return { dead: true, reason: 'Greenhouse API 404' };
    return null;
  } catch {
    return null;
  }
}

async function checkGeneric(url) {
  const res = await httpGet(url);
  if (res.status === 404 || res.status === 410) return { dead: true, reason: `HTTP ${res.status}` };
  if (res.status === 403) return { dead: false, reason: 'HTTP 403 (likely bot block)' };
  if (res.status >= 500) return { dead: null, reason: `HTTP ${res.status}` };
  if (res.error) return { dead: null, reason: `Error: ${res.error}` };

  if (res.status === 301 || res.status === 302) {
    const location = res.redirectUrl || '';
    const low = location.toLowerCase();
    if (low.includes('error') || low.includes('not-found') || low.includes('404')) {
      return { dead: true, reason: 'Redirect to error page' };
    }
    if (location) {
      const follow = location.startsWith('http') ? location : new URL(location, url).href;
      const res2 = await httpGet(follow);
      if (res2.status === 404 || res2.status === 410) return { dead: true, reason: `Redirect -> HTTP ${res2.status}` };
      if (res2.status === 403) return { dead: false, reason: 'Redirect -> HTTP 403' };
      if (res2.status >= 500 || res2.error) return { dead: null, reason: `Redirect uncertain` };
      if (res2.status === 200) {
        const body = res2.body.toLowerCase();
        for (const keyword of DEAD_KEYWORDS) {
          if (body.includes(keyword)) return { dead: true, reason: `Content match: "${keyword}"` };
        }
        return { dead: false, reason: 'Redirect target reachable' };
      }
    }
  }

  if (res.status === 200) {
    const body = res.body.toLowerCase();
    for (const keyword of DEAD_KEYWORDS) {
      if (body.includes(keyword)) return { dead: true, reason: `Content match: "${keyword}"` };
    }
    return { dead: false, reason: 'HTTP 200 OK' };
  }

  return { dead: null, reason: `HTTP ${res.status}` };
}

async function checkUrl(url, retries = RETRY_COUNT) {
  const platform = detectPlatform(url);
  let result = null;

  if (platform === 'greenhouse') {
    result = await checkGreenhouse(url);
  }
  if (!result) result = await checkGeneric(url);

  if (result.dead === null && retries > 0) {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return checkUrl(url, retries - 1);
  }

  return { ...result, url, platform };
}

async function runPool(tasks, concurrency) {
  const results = new Array(tasks.length);
  let index = 0;

  async function worker() {
    while (true) {
      const i = index++;
      if (i >= tasks.length) break;
      results[i] = await tasks[i]();
    }
  }

  const workers = Array.from({ length: Math.min(concurrency, tasks.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

function computeState(results, previousBlocked, previousPending, currentUrls) {
  const alive = new Set();
  const dead = new Set();
  const uncertain = new Set();

  for (const result of results) {
    if (result.dead === true) dead.add(result.url);
    else if (result.dead === false) alive.add(result.url);
    else uncertain.add(result.url);
  }

  const nextBlocked = new Set([...previousBlocked].filter((url) => currentUrls.has(url)));
  const nextPending = new Set();

  for (const url of alive) nextBlocked.delete(url);
  for (const url of dead) {
    if (previousPending.has(url) || nextBlocked.has(url)) nextBlocked.add(url);
    else nextPending.add(url);
  }
  for (const url of uncertain) {
    if (previousPending.has(url)) nextPending.add(url);
  }

  return { alive, dead, uncertain, nextBlocked, nextPending };
}

async function filterJobsByLinkHealth(jobs, options = {}) {
  const concurrency = Number(options.concurrency || DEFAULT_CONCURRENCY);

  const uniqueUrls = [...new Set(
    jobs
      .map((job) => job?.job_apply_link)
      .filter((url) => typeof url === 'string' && url.length > 0)
  )];

  if (uniqueUrls.length === 0) {
    return {
      jobs,
      summary: { total_jobs_in: jobs.length, total_jobs_out: jobs.length, unique_urls_checked: 0, blocked_total: 0 },
    };
  }

  const tasks = uniqueUrls.map((url) => () => checkUrl(url));
  const results = await runPool(tasks, concurrency);

  const previousBlocked = new Set(readJsonArray(BLOCKED_FILE));
  const previousPending = new Set(readJsonArray(PENDING_FILE));
  const currentUrls = new Set(uniqueUrls);

  const { alive, dead, uncertain, nextBlocked, nextPending } = computeState(
    results,
    previousBlocked,
    previousPending,
    currentUrls
  );

  const filteredJobs = jobs.filter((job) => !nextBlocked.has(job.job_apply_link));
  const newlyConfirmedBlocked = [...nextBlocked].filter((url) => !previousBlocked.has(url)).length;

  const reportPayload = {
    timestamp: new Date().toISOString(),
    summary: {
      total_jobs_in: jobs.length,
      total_jobs_out: filteredJobs.length,
      unique_urls_checked: uniqueUrls.length,
      alive: alive.size,
      dead: dead.size,
      uncertain: uncertain.size,
      blocked_total: nextBlocked.size,
      blocked_newly_confirmed: newlyConfirmedBlocked,
      pending_first_strike: nextPending.size,
      removed_this_run: jobs.length - filteredJobs.length,
    },
    blocked_urls: [...nextBlocked].sort(),
    pending_dead_urls: [...nextPending].sort(),
    dead_checks: results.filter((r) => r.dead === true),
    uncertain_checks: results.filter((r) => r.dead === null),
  };

  writeJson(BLOCKED_FILE, reportPayload.blocked_urls);
  writeJson(PENDING_FILE, reportPayload.pending_dead_urls);
  writeJson(REPORT_FILE, reportPayload);

  return { jobs: filteredJobs, summary: reportPayload.summary };
}

module.exports = {
  filterJobsByLinkHealth,
  detectPlatform,
};

