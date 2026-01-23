/**
 * Discord Channel Configuration
 *
 * Centralized channel ID configuration for multi-channel routing
 * Loaded from environment variables for security
 *
 * UPDATED 2026-01-22: Migrated to board types system
 * - Uses src/board-types.js for portable configuration
 * - Board type: NEW_GRAD (consolidated channels)
 * - Channel type: TEXT channels (no forum thread limit)
 * - Channel consolidation based on actual job distribution data (2,841 jobs analyzed)
 *
 * UPDATED 2026-01-19: Switched from FORUM channels to TEXT channels
 * - Forum threads had 1,000 active thread limit per server
 * - Text messages have no limit
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

const { BOARD_TYPES, generateLegacyConfig } = require('../board-types');

// Generate channel configuration from board type template
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG, CATEGORY_CHANNEL_CONFIG } = generateLegacyConfig(BOARD_TYPES.NEW_GRAD);

// Legacy single channel support
const LEGACY_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

// Check if multi-channel mode is enabled
const MULTI_CHANNEL_MODE = Object.values(CHANNEL_CONFIG).some(id => id && id.trim() !== '');
const LOCATION_MODE_ENABLED = Object.values(LOCATION_CHANNEL_CONFIG).some(id => id && id.trim() !== '');

module.exports = {
  CHANNEL_CONFIG,
  LOCATION_CHANNEL_CONFIG,
  CATEGORY_CHANNEL_CONFIG,
  LEGACY_CHANNEL_ID,
  MULTI_CHANNEL_MODE,
  LOCATION_MODE_ENABLED
};
