/**
 * JSearch API Configuration
 *
 * ⚠️ TEMPLATE CUSTOMIZATION REQUIRED ⚠️
 *
 * This file contains JSearch API settings that MUST be customized
 * when cloning this template to a new job board repository.
 *
 * Quick Setup Checklist:
 * [ ] Set MAX_REQUESTS_PER_DAY based on your JSearch API tier
 * [ ] Customize SEARCH_QUERIES for your repo's focus
 * [ ] Adjust DEFAULT_PARAMS.employment_types (FULLTIME vs PARTTIME vs CONTRACT)
 * [ ] Test API quota limits before production use
 *
 * See: .github/scripts/docs/CONFIGURATION_MANAGEMENT.md for detailed guide
 */

module.exports = {
  // ============================================================================
  // 🌐 API ENDPOINT - DO NOT MODIFY
  // ============================================================================
  BASE_URL: 'https://jsearch.p.rapidapi.com/search',

  // ============================================================================
  // ⚡ RATE LIMITING - CUSTOMIZE FOR YOUR API TIER
  // ============================================================================

  /**
   * Maximum JSearch API requests per day
   *
   * JSearch API Tiers:
   * - Free: 100 requests/day
   * - Basic: 1,000 requests/day ($50/month)
   * - Pro: 5,000 requests/day ($200/month)
   *
   * IMPORTANT: Set this based on your actual API plan to avoid rate limits
   * Current: 90 requests/day allocated for New-Grad-Jobs-2026
   */
  MAX_REQUESTS_PER_DAY: 90,

  /**
   * Number of pages to fetch per request
   * Each page contains ~10 jobs
   *
   * Recommendations:
   * - Free tier (100 req/day): 1-2 pages to stay within quota
   * - Basic tier (1000 req/day): 5-9 pages for better coverage
   * - Pro tier (5000 req/day): 9-10 pages for maximum coverage
   * Current: 1 page per request (10 jobs) = 900 jobs/day potential
   */
  NUM_PAGES: 1,

  // ============================================================================
  // 🔍 SEARCH QUERIES - CUSTOMIZE FOR YOUR REPO FOCUS
  // ============================================================================

  /**
   * Query templates for job searches
   *
   * These queries are rotated through using (current_hour % queries.length)
   * to distribute API usage across different search terms.
   *
   * CUSTOMIZE FOR YOUR REPO TYPE:
   *
   * New-Grad-Jobs: Include "new grad", "entry level", "junior"
   * Internships: Include "internship", "summer intern", "co-op"
   * Remote-Jobs: Include "remote", "hybrid", "anywhere"
   *
   * Remove queries that don't match your target audience.
   */
  SEARCH_QUERIES: [
    // New grad specific (HIGHEST PRIORITY - most relevant)
    'new grad software engineer',
    'entry level software engineer',
    'junior software engineer',
    'graduate software engineer',

    // Entry-level variants
    'entry level developer',
    'junior developer',
    'associate software engineer',
    'entry level full stack developer',

    // Core entry-level engineering
    'entry level frontend developer',
    'entry level backend developer',
    'junior frontend developer',
    'junior backend developer',

    // Specialized entry-level roles
    'entry level data scientist',
    'junior data engineer',
    'entry level machine learning engineer',
    'junior devops engineer',

    // General (filtered by job_requirements parameter)
    'software engineer',
    'software developer',
    'full stack developer',
    'frontend developer',
    'backend developer'
  ],

  // ============================================================================
  // ⚙️ API REQUEST PARAMETERS - CUSTOMIZE FOR YOUR NEEDS
  // ============================================================================

  DEFAULT_PARAMS: {
    page: '1',
    num_pages: '1',

    /**
     * How far back to search for jobs
     * Options: '3 days', 'week', 'month'
     */
    date_posted: 'month',

    /**
     * Employment type filter
     *
     * CUSTOMIZE FOR YOUR REPO TYPE:
     *
     * New-Grad-Jobs: 'FULLTIME' (entry-level full-time roles)
     * Internships: 'PARTTIME,INTERN' (part-time and internships)
     * Remote-Jobs: 'FULLTIME,PARTTIME,CONTRACT' (all types)
     */
    employment_types: 'FULLTIME',

    /**
     * Experience level requirements
     *
     * FIXED: Removed 'more_than_3_years_experience' which was causing senior jobs
     * to be fetched and then filtered out (wasting quota)
     *
     * Current: Entry-level only (under 3 years or no experience required)
     */
    job_requirements: 'under_3_years_experience,no_experience'
  },

  // ============================================================================
  // 🔄 RETRY SETTINGS - OVERRIDE IN SHARED CONFIG IF NEEDED
  // ============================================================================

  /**
   * Retry configuration for failed API requests
   *
   * Note: These can be overridden by shared/config/api-limits.js
   * Prefer modifying shared config for consistency across repos
   */
  RETRY_CONFIG: {
    maxRetries: 3,
    retryDelay: 1000,      // milliseconds
    backoffMultiplier: 2
  },

  // ============================================================================
  // ⏱️ REQUEST TIMEOUT - DO NOT MODIFY UNLESS YOU EXPERIENCE ISSUES
  // ============================================================================
  REQUEST_TIMEOUT: 30000   // 30 seconds
};
