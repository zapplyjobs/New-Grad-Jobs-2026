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
  descriptionLine1: 'Updated job openings for new grads in SWE and other tech roles in the USA.',
  descriptionLine2: '',

  // Note box
  noteType: 'TIP',
  noteText: '🛠 Help us grow! Add new jobs by submitting an issue! View contributing steps [here](CONTRIBUTING-GUIDE.md).',

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
