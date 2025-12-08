/**
 * Discord Channel Configuration
 *
 * Centralized channel ID configuration for multi-channel routing
 * Loaded from environment variables for security
 */

// Multi-channel configuration for forum channels
const CHANNEL_CONFIG = {
  'tech': process.env.DISCORD_TECH_CHANNEL_ID,
  'ai': process.env.DISCORD_AI_CHANNEL_ID,
  'data-science': process.env.DISCORD_DS_CHANNEL_ID,
  'sales': process.env.DISCORD_SALES_CHANNEL_ID,
  'marketing': process.env.DISCORD_MARKETING_CHANNEL_ID,
  'finance': process.env.DISCORD_FINANCE_CHANNEL_ID,
  'healthcare': process.env.DISCORD_HEALTHCARE_CHANNEL_ID,
  'product': process.env.DISCORD_PRODUCT_CHANNEL_ID,
  'supply-chain': process.env.DISCORD_SUPPLY_CHANNEL_ID,
  'project-management': process.env.DISCORD_PM_CHANNEL_ID,
  'hr': process.env.DISCORD_HR_CHANNEL_ID
};

// Location-specific channel configuration
const LOCATION_CHANNEL_CONFIG = {
  'remote-usa': process.env.DISCORD_REMOTE_USA_CHANNEL_ID,
  'new-york': process.env.DISCORD_NY_CHANNEL_ID,
  'austin': process.env.DISCORD_AUSTIN_CHANNEL_ID,
  'chicago': process.env.DISCORD_CHICAGO_CHANNEL_ID,
  'seattle': process.env.DISCORD_SEATTLE_CHANNEL_ID,
  'redmond': process.env.DISCORD_REDMOND_CHANNEL_ID,
  'mountain-view': process.env.DISCORD_MV_CHANNEL_ID,
  'san-francisco': process.env.DISCORD_SF_CHANNEL_ID,
  'sunnyvale': process.env.DISCORD_SUNNYVALE_CHANNEL_ID,
  'san-bruno': process.env.DISCORD_SAN_BRUNO_CHANNEL_ID,
  'boston': process.env.DISCORD_BOSTON_CHANNEL_ID,
  'los-angeles': process.env.DISCORD_LA_CHANNEL_ID
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
