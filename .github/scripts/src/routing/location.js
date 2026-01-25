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

  // Metro area city matching (regional consolidation)
  const cityMatches = {
    // Bay Area (consolidated: SF, Mountain View, Sunnyvale, San Bruno, San Jose, Palo Alto, Menlo Park)
    'san francisco': 'bay-area',
    'oakland': 'bay-area',
    'berkeley': 'bay-area',
    'san jose': 'bay-area',
    'palo alto': 'bay-area',
    'menlo park': 'bay-area',
    'fremont': 'bay-area',
    'hayward': 'bay-area',
    'richmond': 'bay-area',
    'daly city': 'bay-area',
    'alameda': 'bay-area',
    'cupertino': 'bay-area',
    'santa clara': 'bay-area',
    'mountain view': 'bay-area',
    'sunnyvale': 'bay-area',
    'san bruno': 'bay-area',

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

    // Pacific Northwest (consolidated: Seattle, Redmond, Bellevue)
    'seattle': 'pacific-northwest',
    'bellevue': 'pacific-northwest',
    'redmond': 'pacific-northwest',
    'tacoma': 'pacific-northwest',
    'everett': 'pacific-northwest',
    'renton': 'pacific-northwest',
    'kent': 'pacific-northwest',

    // Other USA cities (consolidated: Austin, Chicago, Boston, LA, etc.)
    'austin': 'other-usa',
    'round rock': 'other-usa',
    'cedar park': 'other-usa',
    'georgetown': 'other-usa',
    'pflugerville': 'other-usa',
    'chicago': 'other-usa',
    'naperville': 'other-usa',
    'aurora': 'other-usa',
    'joliet': 'other-usa',
    'evanston': 'other-usa',
    'schaumburg': 'other-usa',
    'boston': 'other-usa',
    'cambridge': 'other-usa',
    'somerville': 'other-usa',
    'brookline': 'other-usa',
    'los angeles': 'other-usa',
    'santa monica': 'other-usa',
    'pasadena': 'other-usa',
    'irvine': 'other-usa',
    'denver': 'other-usa',
    'phoenix': 'other-usa',
    'atlanta': 'other-usa',
    'miami': 'other-usa',
    'philadelphia': 'other-usa',
    'portland': 'other-usa'
  };

  // City abbreviations
  const cityAbbreviations = {
    'sf': 'bay-area',
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

  // 4. State-based fallback (BEFORE remote check - specific location takes priority)
  // If we have a state but no specific city match, map to the appropriate regional channel
  if (state) {
    if (state === 'ca' || state === 'california') {
      // CA jobs without specific city → other-usa
      // Bay Area cities already caught by city matching above
      return LOCATION_CHANNEL_CONFIG['other-usa'];
    }
    if (state === 'ma' || state === 'massachusetts') {
      return LOCATION_CHANNEL_CONFIG['other-usa'];
    }
    if (state === 'ny' || state === 'new york') {
      return LOCATION_CHANNEL_CONFIG['new-york'];
    }
    if (state === 'tx' || state === 'texas') {
      return LOCATION_CHANNEL_CONFIG['other-usa'];
    }
    if (state === 'wa' || state === 'washington') {
      return LOCATION_CHANNEL_CONFIG['pacific-northwest'];
    }
    if (state === 'il' || state === 'illinois') {
      return LOCATION_CHANNEL_CONFIG['other-usa'];
    }

  }

  // 5. Remote USA - Only if explicitly remote AND US-based
  // Check for remote indicators in LOCATION fields (job_city, job_state) OR strong remote keywords
  const isRemoteLocation = city.includes('remote') || state.includes('remote');
  const hasStrongRemoteKeyword = /\b(remote|work from home|wfh|distributed|anywhere|location independent)\b/.test(combined);
  const isUSBased = /\b(usa|united states|u\.s\.|us only|us-based|us remote)\b/.test(combined);

  if ((isRemoteLocation || hasStrongRemoteKeyword) && isUSBased) {
    return LOCATION_CHANNEL_CONFIG['remote-usa'];
  }

  // 6. No fallback to other-usa for non-remote US jobs without specific city channels
  // Jobs from Phoenix, Denver, Miami, etc. will ONLY post to their category channel (tech, finance, etc.)
  // This prevents unmatched city jobs from cluttering other-usa channel
  // If a job has no specific location channel match, it returns null and posts only to category channel

  return null;
}

module.exports = {
  getJobLocationChannel
};
