/**
 * Discord Channel Configuration
 *
 * Centralized channel ID configuration for multi-channel routing
 * Loaded from environment variables for security
 *
 * UPDATED 2026-01-19: Switched from FORUM channels to TEXT channels
 * - Forum threads had 1,000 active thread limit per server
 * - Text messages have no limit
 * - Channel consolidation based on actual job distribution data (2,841 jobs analyzed)
 *
 * Channel IDs (TEXT channels with -jobs suffix):
 * - tech-jobs: 1462988605306834987
 * - ai-jobs: 1462988662168879217
 * - data-science-jobs: 1462988721828794531
 * - finance-jobs: 1462988755156734023
 * - bay-area-jobs: 1462988811263934464
 * - new-york-jobs: 1462988831530680422
 * - pacific-northwest-jobs: 1462989279817891900
 * - remote-usa-jobs: 1462989305181114450
 * - other-usa-jobs: 1462989324071997504
 */

// Industry channel configuration (4 channels - consolidated from 6)
// Removed: #product (71 jobs, 2.5%), #project-management (19 jobs, 0.7%) - merged into #tech
const CHANNEL_CONFIG = {
  'tech': process.env.DISCORD_TECH_CHANNEL_ID,           // 1,822 jobs (64%)
  'ai': process.env.DISCORD_AI_CHANNEL_ID,               // 419 jobs (15%)
  'data-science': process.env.DISCORD_DS_CHANNEL_ID,     // 232 jobs (8%)
  'finance': process.env.DISCORD_FINANCE_CHANNEL_ID      // 278 jobs (10%)
};

// Location channel configuration (5 channels - consolidated from 7)
// Removed: #austin (62 jobs, 2.2%), #chicago (83 jobs, 2.9%) - merged into #other-usa
const LOCATION_CHANNEL_CONFIG = {
  'bay-area': process.env.DISCORD_BAY_AREA_CHANNEL_ID,         // 972 jobs (34%) - SF, Mountain View, Sunnyvale, San Jose, Palo Alto
  'new-york': process.env.DISCORD_NY_CHANNEL_ID,               // 314 jobs (11%)
  'pacific-northwest': process.env.DISCORD_PNW_CHANNEL_ID,     // 147 jobs (5%) - Seattle, Redmond, Bellevue
  'remote-usa': process.env.DISCORD_REMOTE_USA_CHANNEL_ID,     // 136 jobs (4.8%)
  'other-usa': process.env.DISCORD_OTHER_USA_CHANNEL_ID        // 134 jobs (4.7%) - Austin, Chicago, Boston, LA, etc.
};

// Legacy single channel support
const LEGACY_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

// Check if multi-channel mode is enabled
const MULTI_CHANNEL_MODE = Object.values(CHANNEL_CONFIG).some(id => id && id.trim() !== '');
const LOCATION_MODE_ENABLED = Object.values(LOCATION_CHANNEL_CONFIG).some(id => id && id.trim() !== '');

module.exports = {
  CHANNEL_CONFIG,
  LOCATION_CHANNEL_CONFIG,
  LEGACY_CHANNEL_ID,
  MULTI_CHANNEL_MODE,
  LOCATION_MODE_ENABLED
};
