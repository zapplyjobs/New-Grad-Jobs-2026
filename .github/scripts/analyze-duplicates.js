const fs = require('fs');

const jobs = JSON.parse(fs.readFileSync('./.github/data/new_jobs.json', 'utf8'));

// Simulate the new deduplication logic
const seenTitleCompanyLocation = new Set();
const duplicates = [];
const kept = [];

jobs.forEach((job, idx) => {
  // Apply same normalization as discord bot
  const title = (job.job_title || '')
    .replace(/\s+-\s+[^-]+$/, '') // Strip team name suffix
    .toLowerCase()
    .trim()
    .replace(/\s+/g, ' ')
    .replace(/[^\w\s-]/g, '');
  const company = (job.employer_name || '').toLowerCase().trim();
  const location = (job.job_city || '').toLowerCase().trim();

  const key = `${title}|${company}|${location}`;

  if (seenTitleCompanyLocation.has(key)) {
    duplicates.push({
      idx,
      job_title: job.job_title,
      employer_name: job.employer_name,
      job_city: job.job_city,
      id: job.id
    });
  } else {
    seenTitleCompanyLocation.add(key);
    kept.push(job);
  }
});

console.log('=== DEDUPLICATION TEST RESULTS ===\n');
console.log(`Total jobs: ${jobs.length}`);
console.log(`Jobs to post: ${kept.length} (unique)`);
console.log(`Jobs skipped: ${duplicates.length} (duplicates)\n`);

console.log('Top 10 duplicates that would be skipped:\n');
duplicates.slice(0, 10).forEach((d, i) => {
  console.log(`${i+1}. "${d.job_title}" @ ${d.employer_name}, ${d.job_city}`);
});
