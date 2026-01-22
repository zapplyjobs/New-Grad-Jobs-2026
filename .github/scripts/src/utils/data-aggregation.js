#!/usr/bin/env node

/**
 * Data Aggregation Utilities
 *
 * Eliminates duplicate sorting/grouping patterns found in 6+ scripts:
 * - analyze-failures.js (sort by length, slice top 10)
 * - analyze-job-statistics.js (company distribution, top 20)
 * - daily-stats.js (repo sorting, stargazer filtering)
 * - weekly-summary.js (activity sorting)
 * - loader.js (filter and slice to 10 results)
 */

/**
 * Sort array and limit to top N results
 * @param {Array} array - Array to sort
 * @param {Function} sortFn - Sort comparison function
 * @param {number} limit - Max results to return
 * @returns {Array} - Sorted and limited array
 */
function sortAndLimit(array, sortFn, limit) {
  return array.sort(sortFn).slice(0, limit);
}

/**
 * Group array by key function
 * @param {Array} array - Array to group
 * @param {Function} keyFn - Function that returns grouping key for each item
 * @returns {Object} - Object with keys as groups, values as arrays of items
 *
 * Example:
 *   groupBy([{name: 'Alice', age: 25}, {name: 'Bob', age: 25}], item => item.age)
 *   => { 25: [{name: 'Alice', age: 25}, {name: 'Bob', age: 25}] }
 */
function groupBy(array, keyFn) {
  const groups = {};

  for (const item of array) {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
  }

  return groups;
}

/**
 * Get top N items from array based on sort function
 * @param {Array} array - Array to process
 * @param {number} n - Number of items to return
 * @param {Function} sortFn - Sort comparison function (default: descending numeric)
 * @returns {Array} - Top N items
 */
function topN(array, n, sortFn = (a, b) => b - a) {
  return sortAndLimit(array, sortFn, n);
}

/**
 * Group jobs by company and count
 * @param {Array} jobs - Array of job objects
 * @param {string} companyField - Field name for company (default: 'company')
 * @returns {Object} - { companyName: [job1, job2, ...], ... }
 */
function aggregateByCompany(jobs, companyField = 'company') {
  return groupBy(jobs, job => job[companyField] || 'Unknown');
}

/**
 * Count occurrences of values
 * @param {Array} array - Array of items
 * @param {Function} keyFn - Function to extract key (default: identity)
 * @returns {Object} - { key: count, ... }
 *
 * Example:
 *   countBy(['a', 'b', 'a', 'c', 'a']) => { a: 3, b: 1, c: 1 }
 */
function countBy(array, keyFn = item => item) {
  const counts = {};

  for (const item of array) {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
  }

  return counts;
}

/**
 * Get top N keys by count
 * @param {Object} countObj - Object with counts (from countBy)
 * @param {number} n - Number of top items to return
 * @returns {Array} - Array of [key, count] tuples, sorted descending
 *
 * Example:
 *   topCounts({ a: 3, b: 1, c: 5 }, 2) => [['c', 5], ['a', 3]]
 */
function topCounts(countObj, n) {
  return Object.entries(countObj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
}

/**
 * Get distribution of values (counts + percentages)
 * @param {Array} array - Array of items
 * @param {Function} keyFn - Function to extract key
 * @returns {Array} - Array of { key, count, percentage } objects, sorted descending
 */
function distribution(array, keyFn = item => item) {
  const counts = countBy(array, keyFn);
  const total = array.length;

  return Object.entries(counts)
    .map(([key, count]) => ({
      key,
      count,
      percentage: ((count / total) * 100).toFixed(1) + '%'
    }))
    .sort((a, b) => b.count - a.count);
}

/**
 * Filter array by multiple conditions
 * @param {Array} array - Array to filter
 * @param {Object} conditions - Object with field: value pairs
 * @returns {Array} - Filtered array
 *
 * Example:
 *   filterBy([{name: 'Alice', age: 25}, {name: 'Bob', age: 30}], { age: 25 })
 *   => [{name: 'Alice', age: 25}]
 */
function filterBy(array, conditions) {
  return array.filter(item => {
    for (const [field, value] of Object.entries(conditions)) {
      if (item[field] !== value) {
        return false;
      }
    }
    return true;
  });
}

/**
 * Calculate percentile of numeric array
 * @param {Array} array - Array of numbers
 * @param {number} percentile - Percentile to calculate (0-1, e.g., 0.50 for median)
 * @returns {number} - Percentile value
 */
function percentile(array, percentile) {
  if (array.length === 0) return 0;

  const sorted = [...array].sort((a, b) => a - b);
  const index = Math.ceil(sorted.length * percentile) - 1;
  return sorted[Math.max(0, index)];
}

/**
 * Calculate basic statistics for numeric array
 * @param {Array} array - Array of numbers
 * @returns {Object} - { min, max, avg, median, count }
 */
function stats(array) {
  if (array.length === 0) {
    return { min: 0, max: 0, avg: 0, median: 0, count: 0 };
  }

  const sorted = [...array].sort((a, b) => a - b);
  const sum = array.reduce((acc, val) => acc + val, 0);

  return {
    min: sorted[0],
    max: sorted[sorted.length - 1],
    avg: sum / array.length,
    median: percentile(array, 0.50),
    count: array.length
  };
}

/**
 * Deduplicate array by key function
 * @param {Array} array - Array to deduplicate
 * @param {Function} keyFn - Function to extract unique key
 * @returns {Array} - Deduplicated array (keeps first occurrence)
 */
function uniqueBy(array, keyFn) {
  const seen = new Set();
  const result = [];

  for (const item of array) {
    const key = keyFn(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }

  return result;
}

module.exports = {
  sortAndLimit,
  groupBy,
  topN,
  aggregateByCompany,
  countBy,
  topCounts,
  distribution,
  filterBy,
  percentile,
  stats,
  uniqueBy
};
