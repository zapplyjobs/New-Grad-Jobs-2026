/**
 * Domain Configuration
 *
 * ⚠️ TEMPLATE CUSTOMIZATION REQUIRED ⚠️
 *
 * This file contains repo-specific business logic that MUST be customized
 * when cloning this template to a new job board repository.
 *
 * Quick Setup Checklist:
 * [ ] Update README_CUTOFF_DAYS for your target audience
 * [ ] Update DATABASE_RETENTION_DAYS based on job lifespan
 * [ ] Customize LOCATION_FILTERS.ALLOWED_COUNTRIES for your region
 * [ ] Adjust PROCESSING_LIMITS.MAX_JOBS_PER_RUN for your Discord limits
 * [ ] Remove/adjust HEALTHCARE_FILTER_KEYWORDS based on your focus
 *
 * See: .github/scripts/docs/CONFIGURATION_MANAGEMENT.md for detailed guide
 */

const jobCategories = require('../job-fetcher/job_categories.json');

module.exports = {
  // ============================================================================
  // ⚙️ DATA RETENTION - CUSTOMIZE FOR YOUR REPO
  // ============================================================================

  /**
   * Jobs shown in README.md
   * Recommendations: New-Grad=7, Internships=14, Remote=7
   */
  README_CUTOFF_DAYS: 7,

  /**
   * Jobs kept in database (older jobs are archived)
   * Recommendations: New-Grad=14, Internships=30, Remote=14
   */
  DATABASE_RETENTION_DAYS: 14,

  // ============================================================================
  // 📍 LOCATION FILTERS - CUSTOMIZE FOR YOUR REGION
  // ============================================================================

  LOCATION_FILTERS: {
    /**
     * Allowed countries for job postings
     * - US-only: ['us', 'usa', 'united states']
     * - International: Add country codes (e.g., 'uk', 'ca', 'de')
     * - Global: Empty array [] to allow all countries
     */
    ALLOWED_COUNTRIES: ['us', 'usa', 'united states'],

    /**
     * Keywords that indicate remote work
     * Jobs matching these keywords are allowed regardless of location
     */
    REMOTE_KEYWORDS: ['remote', 'hybrid', 'nationwide', 'anywhere']
  },

  // ============================================================================
  // 🎯 EXPERIENCE LEVEL FILTERS - CUSTOMIZE FOR YOUR AUDIENCE
  // ============================================================================

  EXPERIENCE_LEVELS: {
    ENTRY_LEVEL_KEYWORDS: [
      'entry level', 'junior', 'new grad', 'graduate',
      'associate', 'intern', 'recent graduate'
    ],
    MID_LEVEL_KEYWORDS: [
      'mid-level', 'mid level', 'intermediate', 'experienced'
    ],
    SENIOR_LEVEL_KEYWORDS: [
      'senior', 'staff', 'principal', 'lead', 'architect'
    ]
  },

  // ============================================================================
  // ⚡ PROCESSING LIMITS - CUSTOMIZE FOR YOUR RATE LIMITS
  // ============================================================================

  PROCESSING_LIMITS: {
    /**
     * Maximum jobs to send to Discord per run
     * Discord limit: 30 messages/minute per bot
     * Adjust based on your workflow frequency
     */
    MAX_JOBS_PER_RUN: 20,

    /**
     * Maximum jobs to display in README (null = no limit)
     */
    MAX_JOBS_IN_README: null,

    /**
     * Batch size for job enrichment operations
     */
    BATCH_SIZE: 50,

    /**
     * Jobs fetched simultaneously for descriptions
     */
    DESCRIPTION_BATCH_SIZE: 10,

    /**
     * Delay between API requests (milliseconds)
     * Increase if you hit rate limits
     */
    DELAY_BETWEEN_REQUESTS: 1000
  },

  // ============================================================================
  // 💾 DATA PERSISTENCE - CUSTOMIZE FOR YOUR NEEDS
  // ============================================================================

  PERSISTENCE_CONFIG: {
    /**
     * How long to keep assigned dates for jobs without original dates
     */
    JOB_DATES_RETENTION_DAYS: 60,

    /**
     * How long to keep jobs in seen_jobs.json
     */
    SEEN_JOBS_RETENTION_DAYS: 7,

    /**
     * How long to keep jobs in pending queue
     */
    QUEUE_RETENTION_DAYS: 14,

    /**
     * Safety limit for seen_jobs.json file size
     */
    MAX_SEEN_JOBS_ENTRIES: 10000
  },

  // ============================================================================
  // 🏥 INDUSTRY-SPECIFIC FILTERS - CUSTOMIZE FOR YOUR FOCUS
  // ============================================================================

  /**
   * Healthcare job filtering
   *
   * For TECH-ONLY boards: Keep this list to filter out healthcare roles
   * For GENERAL boards: Remove or empty this array
   * For HEALTHCARE boards: Remove and add healthcare-specific keywords
   *
   * Current: Filters out nursing and medical roles for tech-focused board
   */
  HEALTHCARE_FILTER_KEYWORDS: [
    // Nursing roles
    'nurse', 'nursing', 'rn ', 'registered nurse', 'lpn', 'cna',
    'nurse practitioner', 'nurse anesthetist', 'nurse midwife',
    'nursing assistant', 'patient care technician', 'patient care associate',

    // Medical/healthcare roles
    'medical assistant', 'physician assistant', 'pa ', 'medical technologist',
    'radiologic technologist', 'sonographer', 'ultrasound', 'phlebotomist',
    'physical therapist', 'occupational therapist', 'speech therapist',
    'respiratory therapist', 'dialysis', 'pharmacist', 'clinical',

    // Healthcare support
    'healthcare', 'patient care', 'clinical', 'hospital', 'medical center',
    ' Rehab aide', 'nurse extern', 'nurse intern', 'nursing internship',

    // Medical specialties
    'cardiovascular', 'orthopedic', 'pediatric nurse', 'oncology',
    'labor and delivery', 'mother/baby', 'nicu', 'icu', 'emergency department',

    // Related medical terms
    'scrub', 'sterile processing', 'surgical tech', 'med-surg',
    'telemetry', 'med-surg', 'stepdown', 'acute care'
  ],

  /**
   * Tech role exceptions
   *
   * Jobs matching these keywords are allowed even if they contain
   * healthcare filter keywords (e.g., "Software Engineer at Hospital")
   */
  TECH_ROLE_EXCEPTIONS: [
    'software', 'developer', 'engineer', 'data scientist',
    'data analyst', 'product manager', 'devops', 'sre'
  ],

  // ============================================================================
  // 📋 REFERENCE CONFIGURATION (DO NOT MODIFY)
  // ============================================================================

  /**
   * Job categories reference
   * Links to existing job_categories.json for consistency
   */
  JOB_CATEGORIES: jobCategories
};
