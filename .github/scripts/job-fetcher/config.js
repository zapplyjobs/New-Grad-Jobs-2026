/**
 * New-Grad-Jobs-2026 Configuration
 *
 * Purpose: Per-repo customization for shared job board library
 * Version: 1.0 (2026-02-12)
 *
 * Template Variables:
 * - {totalCompanies} - Replaced with unique company count
 * - {currentJobs} - Replaced with active job count
 */

module.exports = {
  // Schema version
  version: 1,

  // Image configuration
  repoPrefix: 'ngj',
  headingImageAlt: 'New Grad Jobs 2026',

  // Branding text
  title: 'New Grad Jobs 2026',
  tagline: 'Updated job openings for new grads in SWE and other tech roles | 2026',

  // Description paragraphs
  descriptionLine1: 'Welcome to an actively maintained collection of software engineering, tech, and IT jobs for new grads, data analysts, scientists, and entry-level software developers',
  descriptionLine2: '',  // New-Grad doesn't have second line

  // Note box
  noteType: 'NOTE',
  noteText: 'This repo tracks roles in the United States and remote positions across tech giants and fast-growing startups.',

  // Section headers
  jobsSectionHeader: 'Fresh Software Jobs 2026',

  // Feature flags
  features: {
    internships: false,     // Internship section not used (no companyPrograms data)
    moreResources: true     // Show links to other job board repos
  },

  // Job categorization
  defaultCategory: 'other'
};
