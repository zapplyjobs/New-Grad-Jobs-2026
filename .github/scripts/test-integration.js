#!/usr/bin/env node
/**
 * Integration Test Suite for Phase 2B Refactoring
 *
 * Tests that extracted modules behave identically to original inline code
 * Verifies data flow, function signatures, and edge cases
 */

const assert = require('assert');
const path = require('path');

// Import extracted modules
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG, MULTI_CHANNEL_MODE, LOCATION_MODE_ENABLED } = require('./src/discord/config');
const { getJobChannelDetails } = require('./src/routing/router');
const { normalizeJob } = require('./src/utils/job-normalizer');
const { formatPostedDate, cleanJobDescription } = require('./src/utils/job-formatters');
const PostedJobsManager = require('./src/data/posted-jobs-manager');
const SubscriptionManager = require('./src/data/subscription-manager');

// Mock CHANNEL_CONFIG for testing (environment variables not set in test environment)
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

console.log('=== Phase 2B Integration Tests ===\n');

// ========================================
// Test 1: Config Module
// ========================================
console.log('1. Testing Config Module (src/discord/config.js)');

test('CHANNEL_CONFIG is an object', () => {
  assert(typeof CHANNEL_CONFIG === 'object', 'CHANNEL_CONFIG should be an object');
});

test('CHANNEL_CONFIG has expected keys', () => {
  const expectedKeys = ['tech', 'ai', 'data-science', 'sales', 'marketing',
                        'finance', 'healthcare', 'product', 'supply-chain',
                        'project-management', 'hr'];
  expectedKeys.forEach(key => {
    assert(key in CHANNEL_CONFIG, `CHANNEL_CONFIG should have key: ${key}`);
  });
});

test('LOCATION_CHANNEL_CONFIG is an object', () => {
  assert(typeof LOCATION_CHANNEL_CONFIG === 'object');
});

test('MULTI_CHANNEL_MODE is a boolean', () => {
  assert(typeof MULTI_CHANNEL_MODE === 'boolean');
});

test('LOCATION_MODE_ENABLED is a boolean', () => {
  assert(typeof LOCATION_MODE_ENABLED === 'boolean');
});

console.log('');

// ========================================
// Test 2: Job Normalizer
// ========================================
console.log('2. Testing Job Normalizer (src/utils/job-normalizer.js)');

test('normalizeJob is a function', () => {
  assert(typeof normalizeJob === 'function');
});

test('normalizeJob returns object with job_title from title', () => {
  const job = { title: 'Software Engineer', company_name: 'Test Co', url: 'https://test.com' };
  const normalized = normalizeJob(job);
  assert(normalized.job_title === 'Software Engineer', 'Should convert title to job_title');
});

test('normalizeJob returns object with employer_name from company_name', () => {
  const job = { title: 'Engineer', company_name: 'Test Co', url: 'https://test.com' };
  const normalized = normalizeJob(job);
  assert(normalized.employer_name === 'Test Co', 'Should convert company_name to employer_name');
});

test('normalizeJob converts url to job_apply_link', () => {
  const job = { title: 'Engineer', company_name: 'Test Co', url: 'https://test.com' };
  const normalized = normalizeJob(job);
  assert(normalized.job_apply_link === 'https://test.com', 'Should convert url to job_apply_link');
});

test('normalizeJob handles locations array', () => {
  const job = {
    title: 'Engineer',
    company_name: 'Test Co',
    url: 'https://test.com',
    locations: ['San Francisco, CA']
  };
  const normalized = normalizeJob(job);
  assert(normalized.job_city === 'San Francisco', 'Should parse city from locations');
  assert(normalized.job_state === 'CA', 'Should parse state from locations');
});

test('normalizeJob handles remote locations', () => {
  const job = {
    title: 'Engineer',
    company_name: 'Test Co',
    url: 'https://test.com',
    locations: ['Remote']
  };
  const normalized = normalizeJob(job);
  assert(normalized.job_city === 'Remote', 'Should handle remote city');
  assert(normalized.job_state === 'Remote', 'Should handle remote state');
});

test('normalizeJob preserves legacy format', () => {
  const job = {
    job_title: 'Engineer',
    employer_name: 'Test Co',
    job_apply_link: 'https://test.com'
  };
  const normalized = normalizeJob(job);
  assert(normalized.job_title === 'Engineer', 'Should preserve job_title');
  assert(normalized.employer_name === 'Test Co', 'Should preserve employer_name');
});

console.log('');

// ========================================
// Test 3: Job Formatters
// ========================================
console.log('3. Testing Job Formatters (src/utils/job-formatters.js)');

test('formatPostedDate is a function', () => {
  assert(typeof formatPostedDate === 'function');
});

test('formatPostedDate handles null/undefined', () => {
  assert(formatPostedDate(null) === 'Recently', 'Should return Recently for null');
  assert(formatPostedDate(undefined) === 'Recently', 'Should return Recently for undefined');
  assert(formatPostedDate('') === 'Recently', 'Should return Recently for empty string');
});

test('formatPostedDate formats today', () => {
  const today = new Date().toISOString();
  const result = formatPostedDate(today);
  assert(result === 'Today', 'Should return Today for today\'s date');
});

test('formatPostedDate formats yesterday', () => {
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const result = formatPostedDate(yesterday);
  assert(result === 'Yesterday', 'Should return Yesterday for yesterday\'s date');
});

test('cleanJobDescription is a function', () => {
  assert(typeof cleanJobDescription === 'function');
});

test('cleanJobDescription handles null/undefined', () => {
  assert(cleanJobDescription(null) === null);
  assert(cleanJobDescription(undefined) === null);
  assert(cleanJobDescription('') === null);
});

test('cleanJobDescription removes metadata', () => {
  const desc = 'Category: Engineering. This is a job description.';
  const cleaned = cleanJobDescription(desc);
  assert(!cleaned.includes('Category:'), 'Should remove Category metadata');
});

console.log('');

// ========================================
// Test 4: Router Module
// ========================================
console.log('4. Testing Router Module (src/routing/router.js)');

test('getJobChannelDetails is a function', () => {
  assert(typeof getJobChannelDetails === 'function');
});

test('getJobChannelDetails returns object with expected structure', () => {
  const job = {
    job_title: 'Software Engineer',
    employer_name: 'Test Co',
    job_city: 'San Francisco',
    job_state: 'CA'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(typeof result === 'object', 'Should return object');
  assert('channelId' in result, 'Should have channelId');
  assert('category' in result, 'Should have category');
  assert('matchType' in result, 'Should have matchType');
  assert('priority' in result, 'Should have priority');
});

test('getJobChannelDetails categorizes tech roles', () => {
  const job = {
    job_title: 'Software Engineer',
    employer_name: 'Test Co',
    job_city: 'San Francisco',
    job_state: 'CA'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'tech', 'Software Engineer should be categorized as tech');
});

test('getJobChannelDetails categorizes AI roles', () => {
  const job = {
    job_title: 'Machine Learning Engineer',
    employer_name: 'Test Co',
    job_city: 'San Francisco',
    job_state: 'CA'
  };
  const result = getJobChannelDetails(job, TEST_CHANNEL_CONFIG);
  assert(result.category === 'ai', 'ML Engineer should be categorized as AI');
});

console.log('');

// ========================================
// Test 5: Posted Jobs Manager
// ========================================
console.log('5. Testing Posted Jobs Manager (src/data/posted-jobs-manager.js)');

test('PostedJobsManager is a class', () => {
  assert(typeof PostedJobsManager === 'function');
});

test('PostedJobsManager can be instantiated', () => {
  const manager = new PostedJobsManager();
  assert(manager instanceof PostedJobsManager);
});

test('PostedJobsManager has expected methods', () => {
  const manager = new PostedJobsManager();
  assert(typeof manager.hasBeenPosted === 'function', 'Should have hasBeenPosted method');
  assert(typeof manager.markAsPosted === 'function', 'Should have markAsPosted method');
  assert(typeof manager.loadPostedJobs === 'function', 'Should have loadPostedJobs method');
  assert(typeof manager.savePostedJobs === 'function', 'Should have savePostedJobs method');
});

test('PostedJobsManager.hasBeenPosted accepts jobId', () => {
  const manager = new PostedJobsManager();
  // Should not throw error
  const result = manager.hasBeenPosted('test-job-id');
  assert(typeof result === 'boolean', 'Should return boolean');
});

console.log('');

// ========================================
// Test 6: Subscription Manager
// ========================================
console.log('6. Testing Subscription Manager (src/data/subscription-manager.js)');

test('SubscriptionManager is a class', () => {
  assert(typeof SubscriptionManager === 'function');
});

test('SubscriptionManager can be instantiated', () => {
  const manager = new SubscriptionManager();
  assert(manager instanceof SubscriptionManager);
});

test('SubscriptionManager has expected methods', () => {
  const manager = new SubscriptionManager();
  assert(typeof manager.subscribe === 'function', 'Should have subscribe method');
  assert(typeof manager.unsubscribe === 'function', 'Should have unsubscribe method');
  assert(typeof manager.getUsersForTags === 'function', 'Should have getUsersForTags method');
  assert(typeof manager.getUserSubscriptions === 'function', 'Should have getUserSubscriptions method');
});

test('SubscriptionManager.getUserSubscriptions returns array', () => {
  const manager = new SubscriptionManager();
  const result = manager.getUserSubscriptions('test-user-id');
  assert(Array.isArray(result), 'Should return array');
});

test('SubscriptionManager.getUsersForTags returns array', () => {
  const manager = new SubscriptionManager();
  const result = manager.getUsersForTags(['tech']);
  assert(Array.isArray(result), 'Should return array');
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
  console.log('\n⚠️  Some tests failed! Review the output above.');
  process.exit(1);
} else {
  console.log('\n✅ All tests passed!');
  process.exit(0);
}
