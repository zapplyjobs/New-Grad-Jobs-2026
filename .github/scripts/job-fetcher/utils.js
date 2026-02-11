/**
 * Job Fetcher Utilities - Wrapper for Shared Library
 *
 * MIGRATED TO SHARED SUBMODULE: 2026-02-11
 *
 * This file now acts as a thin wrapper that re-exports from the shared
 * job-board-scripts library. This ensures all repos use the same
 * filtering logic (DRY principle) while maintaining backwards compatibility.
 *
 * Source of Truth: .github/scripts/shared/lib/utils.js
 * Repository: https://github.com/zapplyjobs/job-board-scripts
 *
 * Benefits of shared library:
 * - Single source of truth for all 7 job board repos
 * - Bug fixes apply to all repos with one submodule update
 * - Consistent filtering across New-Grad, Internships, and SEO repos
 *
 * Migration: 2026-02-11
 * - Moved isUSOnlyJob() fix (default to ALLOW empty locations)
 * - Moved getExperienceLevel() fix (default to Entry-Level)
 * - All other utility functions migrated
 */

const fs = require('fs');
const path = require('path');

// Import shared utilities library
const sharedUtils = require('../shared/lib/utils');

// Load local company database for this repo
const companies = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'companies.json'), 'utf8')
);

// Initialize shared library with this repo's company data
sharedUtils.initCompanyDatabase(companies);

// Re-export all shared utilities
// This maintains backwards compatibility - existing imports continue to work
module.exports = {
  ...sharedUtils,

  // Also export companies directly for backwards compatibility
  // (some files may access `utils.companies` directly)
  companies
};
