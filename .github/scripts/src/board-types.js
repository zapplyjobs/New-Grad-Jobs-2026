/**
 * Board Type Configuration System
 *
 * Defines templates for different job board types (New-Grad, Internships, Remote)
 * Makes the GitHub Discord system portable across repositories
 *
 * Created: 2026-01-22 (Phase 2: Board Templates)
 *
 * Usage:
 *   const { getBoardConfig, BOARD_TYPES } = require('./board-types');
 *   const config = getBoardConfig(BOARD_TYPES.NEW_GRAD);
 */

/**
 * Board type identifiers
 */
const BOARD_TYPES = {
  NEW_GRAD: 'new-grad',
  INTERNSHIPS: 'internships',
  REMOTE: 'remote'
};

/**
 * Board type configuration templates
 *
 * Each board type defines:
 * - name: Display name
 * - description: Purpose of this board
 * - channelMode: 'env' (env vars) | 'discovery' (auto-discover by name)
 * - channelType: 'text' | 'forum'
 * - industryChannels: List of industry/functional channels
 * - locationChannels: List of location-based channels
 * - categoryChannels: Additional category-based channels (optional)
 * - envPrefix: Prefix for environment variables (if channelMode='env')
 */
const BOARD_CONFIGS = {
  [BOARD_TYPES.NEW_GRAD]: {
    name: 'New Grad Jobs 2026',
    description: 'Entry-level positions for new graduates',
    channelMode: 'env',
    channelType: 'text',
    envPrefix: 'DISCORD',

    // Consolidated industry channels (4 channels, 64%+ coverage)
    industryChannels: [
      {
        key: 'tech',
        envVar: 'DISCORD_TECH_CHANNEL_ID',
        coverage: 64,  // Percentage of jobs
        description: 'Software engineering, DevOps, QA'
      },
      {
        key: 'ai',
        envVar: 'DISCORD_AI_CHANNEL_ID',
        coverage: 15,
        description: 'ML, AI, research roles'
      },
      {
        key: 'data-science',
        envVar: 'DISCORD_DS_CHANNEL_ID',
        coverage: 8,
        description: 'Data analysts, scientists, BI'
      },
      {
        key: 'finance',
        envVar: 'DISCORD_FINANCE_CHANNEL_ID',
        coverage: 10,
        description: 'Finance, accounting, quant'
      }
    ],

    // Consolidated location channels (5 channels, 34%+ top region)
    locationChannels: [
      {
        key: 'bay-area',
        envVar: 'DISCORD_BAY_AREA_CHANNEL_ID',
        coverage: 34,
        cities: ['SF', 'Mountain View', 'Sunnyvale', 'San Jose', 'Palo Alto']
      },
      {
        key: 'new-york',
        envVar: 'DISCORD_NY_CHANNEL_ID',
        coverage: 11,
        cities: ['New York']
      },
      {
        key: 'pacific-northwest',
        envVar: 'DISCORD_PNW_CHANNEL_ID',
        coverage: 5,
        cities: ['Seattle', 'Redmond', 'Bellevue']
      },
      {
        key: 'remote-usa',
        envVar: 'DISCORD_REMOTE_USA_CHANNEL_ID',
        coverage: 4.8,
        cities: ['Remote']
      },
      {
        key: 'other-usa',
        envVar: 'DISCORD_OTHER_USA_CHANNEL_ID',
        coverage: 4.7,
        cities: ['Austin', 'Chicago', 'Boston', 'LA', 'Other']
      }
    ],

    categoryChannels: []  // None for new-grad
  },

  [BOARD_TYPES.INTERNSHIPS]: {
    name: 'Internships 2026',
    description: 'Internship positions for students',
    channelMode: 'env',
    channelType: 'forum',
    envPrefix: 'DISCORD',

    // Full industry spread (11 channels)
    industryChannels: [
      {
        key: 'tech',
        envVar: 'DISCORD_TECH_CHANNEL_ID',
        description: 'Software engineering, DevOps, QA'
      },
      {
        key: 'ai',
        envVar: 'DISCORD_AI_CHANNEL_ID',
        description: 'ML, AI, research'
      },
      {
        key: 'data-science',
        envVar: 'DISCORD_DS_CHANNEL_ID',
        description: 'Data science, analytics'
      },
      {
        key: 'sales',
        envVar: 'DISCORD_SALES_CHANNEL_ID',
        description: 'Sales roles'
      },
      {
        key: 'marketing',
        envVar: 'DISCORD_MARKETING_CHANNEL_ID',
        description: 'Marketing positions'
      },
      {
        key: 'finance',
        envVar: 'DISCORD_FINANCE_CHANNEL_ID',
        description: 'Finance, accounting'
      },
      {
        key: 'healthcare',
        envVar: 'DISCORD_HEALTHCARE_CHANNEL_ID',
        description: 'Healthcare tech'
      },
      {
        key: 'product',
        envVar: 'DISCORD_PRODUCT_CHANNEL_ID',
        description: 'Product management'
      },
      {
        key: 'supply-chain',
        envVar: 'DISCORD_SUPPLY_CHANNEL_ID',
        description: 'Supply chain'
      },
      {
        key: 'project-management',
        envVar: 'DISCORD_PM_CHANNEL_ID',
        description: 'Project management'
      },
      {
        key: 'hr',
        envVar: 'DISCORD_HR_CHANNEL_ID',
        description: 'HR positions'
      }
    ],

    // Full location spread (15 channels)
    locationChannels: [
      {
        key: 'remote-usa',
        envVar: 'DISCORD_REMOTE_USA_INT_CHANNEL_ID',
        cities: ['Remote']
      },
      {
        key: 'new-york',
        envVar: 'DISCORD_NY_INT_CHANNEL_ID',
        cities: ['New York']
      },
      {
        key: 'austin',
        envVar: 'DISCORD_AUSTIN_INT_CHANNEL_ID',
        cities: ['Austin']
      },
      {
        key: 'chicago',
        envVar: 'DISCORD_CHICAGO_INT_CHANNEL_ID',
        cities: ['Chicago']
      },
      {
        key: 'seattle',
        envVar: 'DISCORD_SEATTLE_INT_CHANNEL_ID',
        cities: ['Seattle']
      },
      {
        key: 'redmond',
        envVar: 'DISCORD_REDMOND_INT_CHANNEL_ID',
        cities: ['Redmond']
      },
      {
        key: 'mountain-view',
        envVar: 'DISCORD_MV_INT_CHANNEL_ID',
        cities: ['Mountain View']
      },
      {
        key: 'san-francisco',
        envVar: 'DISCORD_SF_INT_CHANNEL_ID',
        cities: ['San Francisco']
      },
      {
        key: 'sunnyvale',
        envVar: 'DISCORD_SUNNYVALE_INT_CHANNEL_ID',
        cities: ['Sunnyvale']
      },
      {
        key: 'san-bruno',
        envVar: 'DISCORD_SAN_BRUNO_INT_CHANNEL_ID',
        cities: ['San Bruno']
      },
      {
        key: 'boston',
        envVar: 'DISCORD_BOSTON_INT_CHANNEL_ID',
        cities: ['Boston']
      },
      {
        key: 'los-angeles',
        envVar: 'DISCORD_LA_INT_CHANNEL_ID',
        cities: ['Los Angeles']
      },
      {
        key: 'dallas',
        envVar: 'DISCORD_DALLAS_INT_CHANNEL_ID',
        cities: ['Dallas']
      },
      {
        key: 'san-diego',
        envVar: 'DISCORD_SAN_DIEGO_INT_CHANNEL_ID',
        cities: ['San Diego']
      },
      {
        key: 'dc-metro',
        envVar: 'DISCORD_DC_INT_CHANNEL_ID',
        cities: ['DC', 'Washington DC']
      }
    ],

    // Category channels (SWE split)
    categoryChannels: [
      {
        key: 'swe',
        envVar: 'DISCORD_SWE_INT_CHANNEL_ID',
        description: 'Software engineering internships'
      }
    ]
  },

  [BOARD_TYPES.REMOTE]: {
    name: 'Remote Jobs 2026',
    description: 'Remote-only positions',
    channelMode: 'discovery',  // Auto-discover channels by name
    channelType: 'text',
    envPrefix: null,  // Not used in discovery mode

    // Functional channels (11 channels, prefixed with 'remote-')
    industryChannels: [
      {
        key: 'tech',
        channelName: 'remote-tech',
        description: 'Software engineering, DevOps, QA'
      },
      {
        key: 'ai',
        channelName: 'remote-ai',
        description: 'ML, AI, Data Science'
      },
      {
        key: 'data-science',
        channelName: 'remote-data-science',
        description: 'Data analysts, scientists'
      },
      {
        key: 'sales',
        channelName: 'remote-sales',
        description: 'Sales roles'
      },
      {
        key: 'marketing',
        channelName: 'remote-marketing',
        description: 'Marketing positions'
      },
      {
        key: 'finance',
        channelName: 'remote-finance',
        description: 'Finance, accounting'
      },
      {
        key: 'healthcare',
        channelName: 'remote-healthcare',
        description: 'Healthcare tech'
      },
      {
        key: 'product',
        channelName: 'remote-product',
        description: 'Product management'
      },
      {
        key: 'supply-chain',
        channelName: 'remote-supply-chain',
        description: 'Supply chain roles'
      },
      {
        key: 'project-management',
        channelName: 'remote-project-management',
        description: 'PM roles'
      },
      {
        key: 'hr',
        channelName: 'remote-hr',
        description: 'HR positions'
      }
    ],

    // Location channels (12 channels, prefixed with 'remote-')
    locationChannels: [
      {
        key: 'usa',
        channelName: 'remote-usa',
        cities: ['Remote', 'USA']
      },
      {
        key: 'new-york',
        channelName: 'remote-new-york',
        cities: ['New York']
      },
      {
        key: 'austin',
        channelName: 'remote-austin',
        cities: ['Austin']
      },
      {
        key: 'chicago',
        channelName: 'remote-chicago',
        cities: ['Chicago']
      },
      {
        key: 'seattle',
        channelName: 'remote-seattle',
        cities: ['Seattle']
      },
      {
        key: 'redmond',
        channelName: 'remote-redmond',
        cities: ['Redmond']
      },
      {
        key: 'mountain-view',
        channelName: 'remote-mountain-view',
        cities: ['Mountain View']
      },
      {
        key: 'san-francisco',
        channelName: 'remote-san-francisco',
        cities: ['San Francisco']
      },
      {
        key: 'sunnyvale',
        channelName: 'remote-sunnyvale',
        cities: ['Sunnyvale']
      },
      {
        key: 'san-bruno',
        channelName: 'remote-san-bruno',
        cities: ['San Bruno']
      },
      {
        key: 'boston',
        channelName: 'remote-boston',
        cities: ['Boston']
      },
      {
        key: 'los-angeles',
        channelName: 'remote-los-angeles',
        cities: ['Los Angeles']
      }
    ],

    categoryChannels: []
  }
};

/**
 * Get board configuration by type
 * @param {string} boardType - One of BOARD_TYPES
 * @returns {Object} Board configuration
 */
function getBoardConfig(boardType) {
  if (!BOARD_CONFIGS[boardType]) {
    throw new Error(`Unknown board type: ${boardType}. Valid types: ${Object.values(BOARD_TYPES).join(', ')}`);
  }
  return BOARD_CONFIGS[boardType];
}

/**
 * Generate legacy-compatible CHANNEL_CONFIG object from board config
 * For backwards compatibility with existing code
 *
 * @param {string} boardType - One of BOARD_TYPES
 * @returns {Object} { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG, CATEGORY_CHANNEL_CONFIG }
 */
function generateLegacyConfig(boardType) {
  const config = getBoardConfig(boardType);

  if (config.channelMode === 'env') {
    // Environment variable mode (New-Grad, Internships)
    const CHANNEL_CONFIG = {};
    const LOCATION_CHANNEL_CONFIG = {};
    const CATEGORY_CHANNEL_CONFIG = {};

    config.industryChannels.forEach(ch => {
      CHANNEL_CONFIG[ch.key] = process.env[ch.envVar];
    });

    config.locationChannels.forEach(ch => {
      LOCATION_CHANNEL_CONFIG[ch.key] = process.env[ch.envVar];
    });

    config.categoryChannels.forEach(ch => {
      CATEGORY_CHANNEL_CONFIG[ch.key] = process.env[ch.envVar];
    });

    return { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG, CATEGORY_CHANNEL_CONFIG };
  } else if (config.channelMode === 'discovery') {
    // Channel name discovery mode (Remote)
    const FUNCTIONAL_CHANNELS = config.industryChannels.map(ch => ch.channelName);
    const LOCATION_CHANNELS = config.locationChannels.map(ch => ch.channelName);

    return {
      FUNCTIONAL_CHANNELS,
      LOCATION_CHANNELS,
      ALL_REQUIRED_CHANNELS: [...FUNCTIONAL_CHANNELS, ...LOCATION_CHANNELS]
    };
  }
}

/**
 * Get documentation for required environment variables
 * @param {string} boardType - One of BOARD_TYPES
 * @returns {Array} List of { envVar, description, example }
 */
function getRequiredEnvVars(boardType) {
  const config = getBoardConfig(boardType);

  if (config.channelMode !== 'env') {
    return []; // No env vars needed for discovery mode
  }

  const envVars = [];

  config.industryChannels.forEach(ch => {
    envVars.push({
      envVar: ch.envVar,
      description: `${ch.description} (${ch.coverage ? ch.coverage + '% coverage' : 'industry routing'})`,
      example: '1234567890123456789'
    });
  });

  config.locationChannels.forEach(ch => {
    envVars.push({
      envVar: ch.envVar,
      description: `${ch.cities.join(', ')} (${ch.coverage ? ch.coverage + '% coverage' : 'location routing'})`,
      example: '1234567890123456789'
    });
  });

  config.categoryChannels.forEach(ch => {
    envVars.push({
      envVar: ch.envVar,
      description: ch.description,
      example: '1234567890123456789'
    });
  });

  return envVars;
}

module.exports = {
  BOARD_TYPES,
  getBoardConfig,
  generateLegacyConfig,
  getRequiredEnvVars
};
