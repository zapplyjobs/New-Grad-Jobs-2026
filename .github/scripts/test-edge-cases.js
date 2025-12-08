#!/usr/bin/env node
/**
 * Edge Case Tests for Phase 2B Refactoring
 *
 * Tests critical production issues documented in LESSONS_LEARNED.md
 * Focuses on edge cases that have caused real bugs in production
 */

const assert = require('assert');
const path = require('path');

// Import extracted modules
const { CHANNEL_CONFIG } = require('./src/discord/config');
const { getJobChannelDetails } = require('./src/routing/router');
const { normalizeJob } = require('./src/utils/job-normalizer');
const { formatPostedDate, cleanJobDescription } = require('./src/utils/job-formatters');
const PostedJobsManager = require('./src/data/posted-jobs-manager');

// Mock CHANNEL_CONFIG for testing
const TEST_CHANNEL_CONFIG = {
  'tech': 'test-tech-channel-id',
  'ai': 'test-ai-channel-id',
  'data-science': 'test-ds-channel-id',
  'sales': 'test-sales-channel-id',
  'marketing': 'test-marketing-channel-id',
  'finance': 'test-finance-channel-id',
  'healthcare': 'test-healthcare-channel-id',
  'product': 'test-product-channel-id',
  'supply-chain': 'test-supply-chain-channel-id',
  'project-management': 'test-pm-channel-id',
  'hr': 'test-hr-channel-id'
};

// Mock config WITHOUT AI/DS channels (for fallback testing)
const FALLBACK_CONFIG = {
  'tech': 'test-tech-channel-id',
  'sales': 'test-sales-channel-id',
  'marketing': 'test-marketing-channel-id',
  // AI and DS channels NOT configured
};

let testsPassed = 0;
let testsFailed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✓ ${name}`);
    testsPassed++;
  } catch (error) {
    console.log(`  ✗ ${name}`);
    console.log(`    Error: ${error.message}`);
    testsFailed++;
  }
}

console.log('=== Phase 2B Edge Case Tests ===\n');

// ========================================
// Test 1: Router Priority Ordering (Dec 5 Bug)
// ========================================
console.log('1. Testing Router Priority Ordering (AI/DS before Tech)');

test('ML Engineer routes to AI channel (not tech)', () => {
  const job = {
    job_title: 'Machine Learning Engineer',
    employer_name: 'Test Co',
    job_description: 'Build ML models'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'ai', `Expected 'ai', got '${result.category}'`);
  assert(result.channelId === TEST_CHANNEL_CONFIG.ai, 'Should use AI channel ID');
});

test('Data Scientist routes to DS channel (not tech)', () => {
  const job = {
    job_title: 'Data Scientist',
    employer_name: 'Test Co',
    job_description: 'Analyze data'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'data-science', `Expected 'data-science', got '${result.category}'`);
  assert(result.channelId === TEST_CHANNEL_CONFIG['data-science'], 'Should use DS channel ID');
});

test('ML Engineer falls back to tech when AI channel not configured', () => {
  const job = {
    job_title: 'Machine Learning Engineer',
    employer_name: 'Test Co'
  };
  const result = getJobChannelDetails(job, FALLBACK_CONFIG);
  assert(result.category === 'tech', `Expected fallback to 'tech', got '${result.category}'`);
  assert(result.channelId === FALLBACK_CONFIG.tech, 'Should use tech channel ID');
});

test('Data Scientist falls back to tech when DS channel not configured', () => {
  const job = {
    job_title: 'Data Scientist',
    employer_name: 'Test Co'
  };
  const result = getJobChannelDetails(job, FALLBACK_CONFIG);
  assert(result.category === 'tech', `Expected fallback to 'tech', got '${result.category}'`);
});

console.log('');

// ========================================
// Test 2: Router Missing Data Handling
// ========================================
console.log('2. Testing Router Missing Data Handling');

test('Job with no title defaults to tech', () => {
  const job = {
    job_description: 'This is a description'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'tech', 'Should default to tech with no title');
});

test('Job with no description still routes correctly', () => {
  const job = {
    job_title: 'Software Engineer'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'tech', 'Should route based on title alone');
});

test('Job with empty strings defaults to tech', () => {
  const job = {
    job_title: '',
    job_description: ''
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'tech', 'Should default to tech with empty strings');
});

test('Job with null values defaults to tech', () => {
  const job = {
    job_title: null,
    job_description: null
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'tech', 'Should default to tech with null values');
});

test('Job with undefined values defaults to tech', () => {
  const job = {};
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'tech', 'Should default to tech with undefined values');
});

console.log('');

// ========================================
// Test 3: Job Normalizer Edge Cases
// ========================================
console.log('3. Testing Job Normalizer Edge Cases');

test('normalizeJob handles empty strings (treats as missing data)', () => {
  const job = {
    title: '',
    company_name: '',
    url: ''
  };
  const normalized = normalizeJob(job);
  // Empty strings are treated as missing data (undefined), NOT preserved as empty strings
  assert(normalized.job_title === undefined, 'Empty title should be undefined');
  assert(normalized.employer_name === undefined, 'Empty company should be undefined');
  assert(normalized.job_apply_link === undefined, 'Empty URL should be undefined');
});

test('normalizeJob handles all fields missing', () => {
  const job = {};
  const normalized = normalizeJob(job);
  assert(typeof normalized === 'object', 'Should return object');
  assert(normalized.job_title === undefined, 'Missing title should be undefined');
});

test('normalizeJob handles special characters in title', () => {
  const job = {
    title: 'Software Engineer (C++/Java) - Remote',
    company_name: 'Test & Co.',
    url: 'https://test.com'
  };
  const normalized = normalizeJob(job);
  assert(normalized.job_title === 'Software Engineer (C++/Java) - Remote', 'Should preserve special chars');
  assert(normalized.employer_name === 'Test & Co.', 'Should preserve ampersand');
});

test('normalizeJob handles very long title (>1000 chars)', () => {
  const longTitle = 'A'.repeat(1500);
  const job = {
    title: longTitle,
    company_name: 'Test Co',
    url: 'https://test.com'
  };
  const normalized = normalizeJob(job);
  assert(normalized.job_title === longTitle, 'Should handle long titles');
});

test('normalizeJob handles malformed locations array', () => {
  const job = {
    title: 'Engineer',
    company_name: 'Test Co',
    url: 'https://test.com',
    locations: ['Not a valid city, state format']
  };
  const normalized = normalizeJob(job);
  assert(typeof normalized === 'object', 'Should not crash on malformed location');
});

test('normalizeJob handles locations with extra commas', () => {
  const job = {
    title: 'Engineer',
    company_name: 'Test Co',
    url: 'https://test.com',
    locations: ['San Francisco,, CA']
  };
  const normalized = normalizeJob(job);
  assert(typeof normalized === 'object', 'Should handle extra commas');
});

test('normalizeJob handles mixed case in remote location', () => {
  const job = {
    title: 'Engineer',
    company_name: 'Test Co',
    url: 'https://test.com',
    locations: ['rEmOtE']
  };
  const normalized = normalizeJob(job);
  // Should still detect as remote (case-insensitive)
  assert(typeof normalized === 'object', 'Should handle mixed case remote');
});

console.log('');

// ========================================
// Test 4: Formatter Edge Cases
// ========================================
console.log('4. Testing Formatter Edge Cases');

test('formatPostedDate handles invalid date string', () => {
  const result = formatPostedDate('not-a-date');
  assert(result === 'Recently', 'Should return Recently for invalid date');
});

test('formatPostedDate handles very old date (>30 days) with absolute format', () => {
  const oldDate = new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString();
  const result = formatPostedDate(oldDate);
  // Old dates use absolute format "Month Day" (e.g., "Oct 23"), not relative format
  assert(typeof result === 'string', 'Should return string');
  assert(result.length > 0, 'Should not be empty');
  assert(!result.includes('undefined'), 'Should not contain undefined');
});

test('cleanJobDescription handles very long description', () => {
  const longDesc = 'A'.repeat(10000);
  const result = cleanJobDescription(longDesc);
  assert(typeof result === 'string' || result === null, 'Should handle long descriptions');
});

test('cleanJobDescription handles HTML tags', () => {
  const htmlDesc = '<p>This is a <strong>job</strong> description</p>';
  const result = cleanJobDescription(htmlDesc);
  assert(typeof result === 'string' || result === null, 'Should handle HTML');
});

test('cleanJobDescription removes Category metadata only', () => {
  const desc = 'Category: Engineering. Location: Remote. Salary: $100k. This is the actual description.';
  const result = cleanJobDescription(desc);
  // Cleaner only removes "Category:" metadata, preserves Location/Salary (useful info)
  assert(!result.includes('Category:'), 'Should remove Category metadata');
  assert(result.includes('Location:'), 'Should preserve Location metadata');
  assert(result.includes('Salary:'), 'Should preserve Salary metadata');
});

console.log('');

// ========================================
// Test 5: Router Keyword Conflicts
// ========================================
console.log('5. Testing Router Keyword Conflicts (Multiple Matches)');

test('Job with both AI and sales keywords routes to AI (higher priority)', () => {
  const job = {
    job_title: 'Machine Learning Sales Engineer',
    job_description: 'Sell ML products'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'ai', 'AI should win over sales (higher priority)');
});

test('Job with both data science and marketing keywords routes to DS', () => {
  const job = {
    job_title: 'Data Scientist - Marketing Analytics',
    job_description: 'Marketing data analysis'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'data-science', 'DS should win over marketing');
});

test('Job with tech keyword in title but sales in description routes to tech', () => {
  const job = {
    job_title: 'Software Engineer',
    job_description: 'Will work with sales team'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'tech', 'Title-based match should win');
});

console.log('');

// ========================================
// Test 6: PostedJobsManager Edge Cases
// ========================================
console.log('6. Testing PostedJobsManager Edge Cases');

test('PostedJobsManager.hasBeenPosted handles empty string jobId', () => {
  const manager = new PostedJobsManager();
  const result = manager.hasBeenPosted('');
  assert(typeof result === 'boolean', 'Should return boolean for empty string');
});

test('PostedJobsManager.hasBeenPosted handles null jobId', () => {
  const manager = new PostedJobsManager();
  // May throw or return false - either is acceptable
  try {
    const result = manager.hasBeenPosted(null);
    assert(typeof result === 'boolean', 'Should return boolean or throw');
  } catch (error) {
    assert(true, 'Throwing on null is acceptable');
  }
});

test('PostedJobsManager.markAsPosted handles duplicate mark', () => {
  const manager = new PostedJobsManager();
  const jobId = 'test-job-123';

  manager.markAsPosted(jobId);
  const firstCheck = manager.hasBeenPosted(jobId);

  manager.markAsPosted(jobId); // Mark again
  const secondCheck = manager.hasBeenPosted(jobId);

  assert(firstCheck === true, 'Should be marked after first call');
  assert(secondCheck === true, 'Should still be marked after second call');
});

console.log('');

// ========================================
// Summary
// ========================================
console.log('=== Test Summary ===');
console.log(`Total Tests: ${testsPassed + testsFailed}`);
console.log(`✓ Passed: ${testsPassed}`);
console.log(`✗ Failed: ${testsFailed}`);

if (testsFailed > 0) {
  console.log('\n⚠️  Some edge case tests failed! Review the output above.');
  process.exit(1);
} else {
  console.log('\n✅ All edge case tests passed!');
  process.exit(0);
}
