/**
 * USAJobs API Fetcher
 *
 * Fetches federal government jobs from the official USAJobs API
 * Filters for entry-level positions suitable for new graduates
 *
 * API: https://developer.usajobs.gov/
 * TOS: Designed for job boards to promote federal employment
 */

const axios = require('axios');

/**
 * Fetch jobs from USAJobs API
 * @param {Object} options - Configuration options
 * @param {number} options.maxPages - Maximum pages to fetch (default: 4 = ~1000 jobs)
 * @param {number} options.resultsPerPage - Results per page (default: 250, max: 500)
 * @returns {Promise<Array>} Array of job objects
 */
async function fetchUSAJobs(options = {}) {
    const {
        maxPages = 4,
        resultsPerPage = 250
    } = options;

    const API_KEY = process.env.USAJOBS_API_KEY;
    const USER_EMAIL = process.env.USAJOBS_EMAIL;

    if (!API_KEY || !USER_EMAIL) {
        console.error('❌ USAJobs: Missing USAJOBS_API_KEY or USAJOBS_EMAIL environment variables');
        return [];
    }

    console.log('\n📡 USAJobs API - Fetching federal jobs...');
    console.log(`   Max pages: ${maxPages}, Results per page: ${resultsPerPage}`);

    const allJobs = [];

    // Entry-level search queries targeting new graduates
    const searchQueries = [
        // Recent graduate programs
        { keyword: 'recent graduate', hiringPath: 'graduates' },
        { keyword: 'pathways', hiringPath: 'students' },

        // Entry-level technical roles
        { keyword: 'software engineer', payGrade: '5,7,9' },
        { keyword: 'data analyst', payGrade: '5,7,9' },
        { keyword: 'cybersecurity', payGrade: '5,7,9' },

        // General entry-level
        { keyword: 'entry level', payGrade: '5,7' },
        { keyword: 'junior', payGrade: '5,7' }
    ];

    for (const query of searchQueries) {
        try {
            console.log(`\n🔍 Searching: "${query.keyword}" (hiring path: ${query.hiringPath || 'any'})`);

            for (let page = 1; page <= maxPages; page++) {
                const params = {
                    Keyword: query.keyword,
                    ResultsPerPage: resultsPerPage,
                    Page: page,
                    DatePosted: 60, // Last 60 days
                    Fields: 'min' // Minimal fields for faster response
                };

                // Add optional filters
                if (query.hiringPath) {
                    params.HiringPath = query.hiringPath;
                }
                if (query.payGrade) {
                    params.JobGradeCode = query.payGrade;
                }

                const response = await axios.get('https://data.usajobs.gov/api/search', {
                    params,
                    headers: {
                        'Host': 'data.usajobs.gov',
                        'User-Agent': USER_EMAIL,
                        'Authorization-Key': API_KEY
                    }
                });

                const searchResult = response.data?.SearchResult;
                if (!searchResult || !searchResult.SearchResultItems) {
                    console.log(`   Page ${page}: No results`);
                    break;
                }

                const items = searchResult.SearchResultItems;
                console.log(`   Page ${page}: ${items.length} jobs found`);

                // Transform jobs to standard format
                const jobs = items
                    .map(item => transformUSAJob(item.MatchedObjectDescriptor))
                    .filter(job => job !== null);

                allJobs.push(...jobs);

                // Check if we've reached the end
                const totalPages = searchResult.UserArea?.NumberOfPages || 1;
                if (page >= totalPages || items.length < resultsPerPage) {
                    console.log(`   Reached end at page ${page}`);
                    break;
                }

                // Rate limiting: 1 second delay between requests
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

        } catch (error) {
            if (error.response?.status === 429) {
                console.error(`   ⚠️ Rate limited - skipping remaining queries`);
                break;
            }
            console.error(`   ❌ Error fetching "${query.keyword}":`, error.message);
        }
    }

    // Deduplicate by PositionID
    const uniqueJobs = deduplicateJobs(allJobs);

    console.log(`\n✅ USAJobs: ${uniqueJobs.length} unique federal jobs fetched`);
    return uniqueJobs;
}

/**
 * Transform USAJobs API response to standard job format
 * @param {Object} descriptor - MatchedObjectDescriptor from API
 * @returns {Object|null} Normalized job object or null if invalid
 */
function transformUSAJob(descriptor) {
    try {
        if (!descriptor || !descriptor.PositionID) {
            return null;
        }

        // Extract location (prefer first location)
        const location = descriptor.PositionLocation?.[0];
        const locationName = location ?
            `${location.CityName || ''}, ${location.LocationName || ''}`.trim().replace(/^,\s*/, '') :
            'Remote';

        // Extract apply URL
        const applyUrl = descriptor.ApplyURI?.[0] ||
                        descriptor.PositionURI ||
                        `https://www.usajobs.gov/job/${descriptor.PositionID}`;

        // Extract salary info
        const remuneration = descriptor.PositionRemuneration?.[0];
        const salaryMin = remuneration?.MinimumRange || null;
        const salaryMax = remuneration?.MaximumRange || null;

        // Extract grade level
        const jobGrade = descriptor.JobGrade?.[0]?.Code || 'Not specified';

        return {
            // Standard fields for compatibility with existing system
            title: descriptor.PositionTitle,
            company_name: descriptor.OrganizationName || 'US Government',
            location: locationName,
            url: applyUrl,
            posted_at: descriptor.PublicationStartDate || new Date().toISOString(),
            description: null, // USAJobs doesn't include full description in search results

            // USAJobs specific fields
            position_id: descriptor.PositionID,
            job_grade: jobGrade,
            salary_min: salaryMin,
            salary_max: salaryMax,
            close_date: descriptor.ApplicationCloseDate,
            department: descriptor.DepartmentName,

            // Source tracking
            source: 'usajobs',
            source_type: 'api'
        };
    } catch (error) {
        console.error('Error transforming USAJob:', error.message);
        return null;
    }
}

/**
 * Deduplicate jobs by PositionID
 * @param {Array} jobs - Array of job objects
 * @returns {Array} Deduplicated array
 */
function deduplicateJobs(jobs) {
    const seen = new Set();
    return jobs.filter(job => {
        if (seen.has(job.position_id)) {
            return false;
        }
        seen.add(job.position_id);
        return true;
    });
}

module.exports = {
    fetchUSAJobs
};
