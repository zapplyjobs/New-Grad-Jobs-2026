/**
 * Y Combinator Company Discovery
 *
 * Fetches all YC companies and detects which ATS platform they use.
 * Expands our company lists from 26 to 500+ companies.
 */

const https = require('https');

/**
 * Fetch JSON from URL
 */
function fetchJSON(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    resolve(JSON.parse(data));
                } catch (e) {
                    reject(new Error(`Failed to parse JSON: ${e.message}`));
                }
            });
        }).on('error', reject);
    });
}

/**
 * Test if a company uses a specific ATS platform
 */
async function testATS(company, platform) {
    const endpoints = {
        greenhouse: `https://boards-api.greenhouse.io/v1/boards/${company.slug}/jobs`,
        lever: `https://api.lever.co/v0/postings/${company.slug}?mode=json`,
        ashby: `https://api.ashbyhq.com/posting-api/job-board/${company.slug}`
    };

    const url = endpoints[platform];
    if (!url) return false;

    return new Promise((resolve) => {
        https.get(url, (res) => {
            // 200 = has jobs, 404 = no jobs but platform exists
            // Other codes = platform not used
            resolve(res.statusCode === 200 || res.statusCode === 404);
        }).on('error', () => resolve(false));
    });
}

/**
 * Detect which ATS platform a company uses
 */
async function detectATS(company) {
    const platforms = ['greenhouse', 'lever', 'ashby'];

    for (const platform of platforms) {
        const uses = await testATS(company, platform);
        if (uses) return platform;
    }

    return null;
}

/**
 * Discover YC companies and their ATS platforms
 */
async function discoverYCCompanies(options = {}) {
    const {
        maxCompanies = 100,
        onlyUSA = true,
        delayMs = 1000
    } = options;

    console.log('\n🔍 Y Combinator Company Discovery');
    console.log('═'.repeat(50));

    // Fetch all YC companies
    console.log('📡 Fetching YC companies from API...');
    const companies = await fetchJSON('https://yc-oss.github.io/api/companies/all.json');
    console.log(`✅ Found ${companies.length} total YC companies`);

    // Filter to US companies if requested
    let filtered = companies;
    if (onlyUSA) {
        filtered = companies.filter(c => {
            const allLocs = (c.all_locations || '').toLowerCase();
            const regions = (c.regions || []).join(' ').toLowerCase();
            const combined = allLocs + ' ' + regions;

            return combined.includes('united states') ||
                   combined.includes('usa') ||
                   combined.includes('u.s.') ||
                   combined.includes('san francisco') ||
                   combined.includes('new york') ||
                   combined.includes('austin') ||
                   combined.includes('seattle') ||
                   combined.includes('boston') ||
                   combined.includes('chicago') ||
                   combined.includes('los angeles');
        });
        console.log(`✅ Filtered to ${filtered.length} US companies`);
    }

    // Limit number to test
    const toTest = filtered.slice(0, maxCompanies);
    console.log(`\n🧪 Testing ${toTest.length} companies for ATS platforms...\n`);

    const discovered = {
        greenhouse: [],
        lever: [],
        ashby: []
    };

    let tested = 0;
    for (const company of toTest) {
        tested++;

        // Create slug from company name if not provided
        const slug = company.slug ||
                    company.name.toLowerCase()
                        .replace(/[^a-z0-9]+/g, '-')
                        .replace(/^-|-$/g, '');

        const ats = await detectATS({ ...company, slug });

        if (ats) {
            discovered[ats].push({
                slug,
                name: company.name,
                batch: company.batch,
                website: company.website
            });
            console.log(`✅ [${tested}/${toTest.length}] ${company.name} → ${ats.toUpperCase()}`);
        } else {
            console.log(`⊘  [${tested}/${toTest.length}] ${company.name} → No ATS detected`);
        }

        // Rate limiting
        if (tested < toTest.length) {
            await new Promise(resolve => setTimeout(resolve, delayMs));
        }
    }

    console.log('\n' + '═'.repeat(50));
    console.log('📊 Discovery Summary:');
    console.log(`   Greenhouse: ${discovered.greenhouse.length} companies`);
    console.log(`   Lever: ${discovered.lever.length} companies`);
    console.log(`   Ashby: ${discovered.ashby.length} companies`);
    console.log(`   Total: ${discovered.greenhouse.length + discovered.lever.length + discovered.ashby.length} companies`);
    console.log('═'.repeat(50) + '\n');

    return discovered;
}

module.exports = {
    discoverYCCompanies,
    detectATS,
    fetchJSON
};
