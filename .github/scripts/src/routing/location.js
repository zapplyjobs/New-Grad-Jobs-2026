/**
 * Location-based Job Routing Module
 * Determines which location-specific Discord channel a job should be posted to
 */

const { LOCATION_CHANNEL_CONFIG } = require('../discord/config');

/**
 * Determine which location channel a job should go to
 * @param {Object} job - Job object with location data
 * @returns {string|null} Channel ID or null if no location match
 */
function getJobLocationChannel(job) {
  const city = (job.job_city || '').toLowerCase().trim();
  const state = (job.job_state || '').toLowerCase().trim();
  const title = (job.job_title || '').toLowerCase();
  const description = (job.job_description || '').toLowerCase();
  const combined = `${title} ${description} ${city} ${state}`;

  // Metro area city matching (comprehensive)
  const cityMatches = {
    // San Francisco Bay Area
    'san francisco': 'san-francisco',
    'oakland': 'san-francisco',
    'berkeley': 'san-francisco',
    'san jose': 'san-francisco',
    'palo alto': 'san-francisco',
    'fremont': 'san-francisco',
    'hayward': 'san-francisco',
    'richmond': 'san-francisco',
    'daly city': 'san-francisco',
    'alameda': 'san-francisco',
    'cupertino': 'san-francisco',
    'santa clara': 'san-francisco',
    'mountain view': 'mountain-view',
    'sunnyvale': 'sunnyvale',
    'san bruno': 'san-bruno',

    // NYC Metro Area
    'new york': 'new-york',
    'manhattan': 'new-york',
    'brooklyn': 'new-york',
    'queens': 'new-york',
    'bronx': 'new-york',
    'staten island': 'new-york',
    'jersey city': 'new-york',
    'newark': 'new-york',
    'hoboken': 'new-york',
    'white plains': 'new-york',
    'yonkers': 'new-york',

    // Seattle Metro Area
    'seattle': 'seattle',
    'bellevue': 'seattle',
    'tacoma': 'seattle',
    'everett': 'seattle',
    'renton': 'seattle',
    'kent': 'seattle',
    'redmond': 'redmond',

    // Austin Metro Area
    'austin': 'austin',
    'round rock': 'austin',
    'cedar park': 'austin',
    'georgetown': 'austin',
    'pflugerville': 'austin',

    // Chicago Metro Area
    'chicago': 'chicago',
    'naperville': 'chicago',
    'aurora': 'chicago',
    'joliet': 'chicago',
    'evanston': 'chicago',
    'schaumburg': 'chicago',

    // Boston Metro Area
    'boston': 'boston',
    'cambridge': 'boston',
    'somerville': 'boston',
    'brookline': 'boston',
    'quincy': 'boston',
    'newton': 'boston',
    'waltham': 'boston',
    'revere': 'boston',
    'medford': 'boston',

    // Los Angeles Metro Area
    'los angeles': 'los-angeles',
    'santa monica': 'los-angeles',
    'pasadena': 'los-angeles',
    'long beach': 'los-angeles',
    'glendale': 'los-angeles',
    'irvine': 'los-angeles',
    'anaheim': 'los-angeles',
    'burbank': 'los-angeles',
    'torrance': 'los-angeles'
  };

  // City abbreviations
  const cityAbbreviations = {
    'sf': 'san-francisco',
    'nyc': 'new-york'
  };

  // 1. Check exact city matches first (most reliable)
  for (const [searchCity, channelKey] of Object.entries(cityMatches)) {
    if (city.includes(searchCity)) {
      return LOCATION_CHANNEL_CONFIG[channelKey];
    }
  }

  // 2. Check abbreviations
  for (const [abbr, channelKey] of Object.entries(cityAbbreviations)) {
    if (city === abbr || city.split(/\s+/).includes(abbr)) {
      return LOCATION_CHANNEL_CONFIG[channelKey];
    }
  }

  // 3. Check title + description for city names
  for (const [searchCity, channelKey] of Object.entries(cityMatches)) {
    if (combined.includes(searchCity)) {
      return LOCATION_CHANNEL_CONFIG[channelKey];
    }
  }

  // 4. State-based fallback (for ALL jobs, not just remote)
  // If we have a state but no specific city match, map to the main city in that state
  if (state) {
    if (state === 'ca' || state === 'california') {
      // CA jobs without specific city go to LA (most CA jobs not in Bay Area)
      // Bay Area cities already caught by city matching above
      return LOCATION_CHANNEL_CONFIG['los-angeles'];
    }
    if (state === 'ma' || state === 'massachusetts') {
      return LOCATION_CHANNEL_CONFIG['boston'];
    }
    if (state === 'ny' || state === 'new york') {
      return LOCATION_CHANNEL_CONFIG['new-york'];
    }
    if (state === 'tx' || state === 'texas') {
      return LOCATION_CHANNEL_CONFIG['austin'];
    }
    if (state === 'wa' || state === 'washington') {
      // Check if Redmond is specifically mentioned
      if (combined.includes('redmond')) {
        return LOCATION_CHANNEL_CONFIG['redmond'];
      }
      return LOCATION_CHANNEL_CONFIG['seattle'];
    }
    if (state === 'il' || state === 'illinois') {
      return LOCATION_CHANNEL_CONFIG['chicago'];
    }
  }

  // 5. Remote USA fallback (only if no state/city match)
  if (/\b(remote|work from home|wfh|distributed|anywhere)\b/.test(combined) &&
      /\b(usa|united states|u\.s\.|us only|us-based|us remote)\b/.test(combined)) {
    return LOCATION_CHANNEL_CONFIG['remote-usa'];
  }

  // 6. Default fallback: US jobs without specific location channels → remote-usa
  // This ensures jobs from Phoenix, Denver, Miami, etc. still get posted somewhere
  // Only apply to confirmed US states to avoid posting Canadian/international jobs
  const usStates = ['al', 'ak', 'az', 'ar', 'ca', 'co', 'ct', 'de', 'fl', 'ga', 'hi', 'id', 'il', 'in', 'ia', 'ks', 'ky', 'la', 'me', 'md', 'ma', 'mi', 'mn', 'ms', 'mo', 'mt', 'ne', 'nv', 'nh', 'nj', 'nm', 'ny', 'nc', 'nd', 'oh', 'ok', 'or', 'pa', 'ri', 'sc', 'sd', 'tn', 'tx', 'ut', 'vt', 'va', 'wa', 'wv', 'wi', 'wy', 'dc',
    'alabama', 'alaska', 'arizona', 'arkansas', 'california', 'colorado', 'connecticut', 'delaware', 'florida', 'georgia', 'hawaii', 'idaho', 'illinois', 'indiana', 'iowa', 'kansas', 'kentucky', 'louisiana', 'maine', 'maryland', 'massachusetts', 'michigan', 'minnesota', 'mississippi', 'missouri', 'montana', 'nebraska', 'nevada', 'new hampshire', 'new jersey', 'new mexico', 'new york', 'north carolina', 'north dakota', 'ohio', 'oklahoma', 'oregon', 'pennsylvania', 'rhode island', 'south carolina', 'south dakota', 'tennessee', 'texas', 'utah', 'vermont', 'virginia', 'washington', 'west virginia', 'wisconsin', 'wyoming', 'district of columbia'];

  if (state && usStates.includes(state)) {
    return LOCATION_CHANNEL_CONFIG['remote-usa'];
  }

  // No location data at all - skip location channels
  return null;
}

module.exports = {
  getJobLocationChannel
};
