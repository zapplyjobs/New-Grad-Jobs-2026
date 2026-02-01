/**
 * Location-based Job Routing Module
 * Determines which location-specific Discord channel a job should be posted to
 *
 * UPDATED 2026-01-28: Fixed routing to use actual channel keys from board configs
 * Common channels across Internships & New-Grad:
 * - bay-area, new-york, pacific-northwest, remote-usa, other-usa
 * - southern-california (Internships only)
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

  // Metro area city matching - using ACTUAL channel keys from board configs
  const cityMatches = {
    // Bay Area -> bay-area
    'san francisco': 'bay-area',
    'oakland': 'bay-area',
    'berkeley': 'bay-area',
    'san jose': 'bay-area',
    'palo alto': 'bay-area',
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
    'menlo park': 'bay-area',
    'redwood city': 'bay-area',
    'milpitas': 'bay-area',
    'frisco': 'bay-area',

    // NYC Metro Area -> new-york
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
    'long island city': 'new-york',
    'astoria': 'new-york',

    // Seattle/PNW Metro Area -> pacific-northwest
    'seattle': 'pacific-northwest',
    'bellevue': 'pacific-northwest',
    'tacoma': 'pacific-northwest',
    'everett': 'pacific-northwest',
    'renton': 'pacific-northwest',
    'kent': 'pacific-northwest',
    'redmond': 'pacific-northwest',
    'kirkland': 'pacific-northwest',
    'bothell': 'pacific-northwest',
    'vancouver': 'pacific-northwest',

    // SoCal -> southern-california (Internships only, other-usa for New-Grad)
    'los angeles': 'southern-california',
    'santa monica': 'southern-california',
    'pasadena': 'southern-california',
    'long beach': 'southern-california',
    'glendale': 'southern-california',
    'irvine': 'southern-california',
    'anaheim': 'southern-california',
    'burbank': 'southern-california',
    'torrance': 'southern-california',
    'san diego': 'southern-california',
    'chula vista': 'southern-california',
    'oceanside': 'southern-california',
    'escondido': 'southern-california',
    'carlsbad': 'southern-california',
    'el cajon': 'southern-california',
    'la jolla': 'southern-california',
    'culver city': 'southern-california',
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

  // 4. State-based fallback (for ALL jobs, not just remote)
  // If we have a state but no specific city match, map to the main region in that state
  if (state) {
    if (state === 'ca' || state === 'california') {
      // CA jobs without specific city -> southern-california (Internships) or other-usa (New-Grad)
      // Bay Area cities already caught by city matching above
      return LOCATION_CHANNEL_CONFIG['southern-california'] || LOCATION_CHANNEL_CONFIG['other-usa'];
    }
    if (state === 'ny' || state === 'new york') {
      return LOCATION_CHANNEL_CONFIG['new-york'];
    }
    if (state === 'wa' || state === 'washington') {
      return LOCATION_CHANNEL_CONFIG['pacific-northwest'];
    }
    if (state === 'tx' || state === 'texas' ||
        state === 'ma' || state === 'massachusetts' ||
        state === 'il' || state === 'illinois' ||
        state === 'dc' || state === 'district of columbia' ||
        state === 'va' || state === 'virginia' ||
        state === 'md' || state === 'maryland' ||
        state === 'co' || state === 'colorado' ||
        state === 'fl' || state === 'florida' ||
        state === 'ga' || state === 'georgia' ||
        state === 'nc' || state === 'north carolina' ||
        state === 'tn' || state === 'tennessee' ||
        state === 'az' || state === 'arizona' ||
        state === 'ut' || state === 'utah' ||
        state === 'nv' || state === 'nevada' ||
        state === 'or' || state === 'oregon' ||
        state === 'mi' || state === 'michigan' ||
        state === 'oh' || state === 'ohio' ||
        state === 'pa' || state === 'pennsylvania' ||
        state === 'mn' || state === 'minnesota' ||
        state === 'wi' || state === 'wisconsin' ||
        state === 'ct' || state === 'connecticut' ||
        state === 'in' || state === 'indiana' ||
        state === 'ks' || state === 'kansas' ||
        state === 'ky' || state === 'kentucky' ||
        state === 'la' || state === 'louisiana' ||
        state === 'mo' || state === 'missouri' ||
        state === 'nj' || state === 'new jersey' ||
        state === 'ok' || state === 'oklahoma' ||
        state === 'sc' || state === 'south carolina') {
      // All other US states -> other-usa
      return LOCATION_CHANNEL_CONFIG['other-usa'];
    }
  }

  // 5. Remote USA - Check for remote indicators
  // Jobs are considered "Remote USA" if they have remote keywords
  // AND don't have non-US location indicators (like "London" or "Toronto")
  const isRemoteLocation = city.includes('remote') || state.includes('remote');
  const hasStrongRemoteKeyword = /\b(remote|work from home|wfh|distributed|anywhere|location independent)\b/i.test(combined);
  const isUSBased = /\b(usa|united states|u\.s\.|us only|us-based|us remote)\b/i.test(combined);

  // Detect non-US locations (common countries/cities that would indicate non-US remote)
  const hasNonUSLocation = /\b(london|paris|berlin|toronto|vancouver|montreal|sydney|melbourne|tokyo|singapore|hong kong|dubai|mumbai|bangalore)\b/i.test(combined);

  // Remote jobs without explicit non-US locations go to remote-usa
  if ((isRemoteLocation || hasStrongRemoteKeyword) && !hasNonUSLocation) {
    return LOCATION_CHANNEL_CONFIG['remote-usa'];
  }

  // 6. No location match -> return null (will only post to category channel)
  return null;
}

module.exports = {
  getJobLocationChannel
};
