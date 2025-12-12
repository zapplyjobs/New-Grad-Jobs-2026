#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const {
  Client,
  GatewayIntentBits,
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  SlashCommandBuilder,
  Collection,
  REST,
  Routes,
  ChannelType
} = require('discord.js');

// Import extracted modules
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG, LEGACY_CHANNEL_ID, MULTI_CHANNEL_MODE, LOCATION_MODE_ENABLED } = require('./src/discord/config');
const { getJobChannelDetails } = require('./src/routing/router');
const { normalizeJob } = require('./src/utils/job-normalizer');
const { formatPostedDate, cleanJobDescription } = require('./src/utils/job-formatters');
const PostedJobsManager = require('./src/data/posted-jobs-manager-v2');
const SubscriptionManager = require('./src/data/subscription-manager');

// Environment variables
const TOKEN = process.env.DISCORD_TOKEN;
const CHANNEL_ID = process.env.DISCORD_CHANNEL_ID; // Legacy single channel support
const CLIENT_ID = process.env.DISCORD_CLIENT_ID;
const GUILD_ID = process.env.DISCORD_GUILD_ID;

// Data paths
const dataDir = path.join(process.cwd(), '.github', 'data');

// Load company data for tier detection
const companies = JSON.parse(fs.readFileSync(path.join(__dirname, 'job-fetcher', 'companies.json'), 'utf8'));

// Import job ID generation for consistency
const { generateJobId, generateEnhancedId } = require('./job-fetcher/utils');
const { loadPendingQueue, savePendingQueue } = require('./job-fetcher/job-processor');

// Import routing logger and jobs exporter for debugging
const RoutingLogger = require('./routing-logger');
const JobsDataExporter = require('./jobs-data-exporter');

// Initialize routing logger and jobs exporter
const routingLogger = new RoutingLogger();
const jobsExporter = new JobsDataExporter();

// Initialize client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages
  ]
});

// Initialize managers (using imported classes)
const subscriptionManager = new SubscriptionManager();

const postedJobsManager = new PostedJobsManager();

// Determine which location channel a job should go to
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

// Enhanced tag generation
function generateTags(job) {
  const tags = [];
  const title = job.job_title.toLowerCase();
  const description = (job.job_description || '').toLowerCase();
  const company = job.employer_name;

  // Experience level tags
  if (title.includes('senior') || title.includes('sr.') || title.includes('staff') || title.includes('principal')) {
    tags.push('Senior');
  } else if (title.includes('junior') || title.includes('jr.') || title.includes('entry') || 
             title.includes('new grad') || title.includes('graduate')) {
    tags.push('EntryLevel');
  } else {
    tags.push('MidLevel');
  }

  // Location tags
  if (description.includes('remote') || title.includes('remote') || 
      (job.job_city && job.job_city.toLowerCase().includes('remote'))) {
    tags.push('Remote');
  }
  
  // Add major city tags
  const majorCities = {
    'san francisco': 'SF', 'sf': 'SF', 'bay area': 'SF',
    'new york': 'NYC', 'nyc': 'NYC', 'manhattan': 'NYC',
    'seattle': 'Seattle', 'bellevue': 'Seattle', 'redmond': 'Seattle',
    'austin': 'Austin', 'los angeles': 'LA', 'la': 'LA',
    'boston': 'Boston', 'chicago': 'Chicago', 'denver': 'Denver'
  };
  
  const cityKey = (job.job_city || '').toLowerCase();
  if (majorCities[cityKey]) {
    tags.push(majorCities[cityKey]);
  }

  // Company tier tags
  if (companies.faang_plus.some(c => c.name === company)) {
    tags.push('FAANG');
  } else if (companies.unicorn_startups.some(c => c.name === company)) {
    tags.push('Unicorn');
  } else if (companies.fintech.some(c => c.name === company)) {
    tags.push('Fintech');
  } else if (companies.gaming.some(c => c.name === company)) {
    tags.push('Gaming');
  }

  // Technology/skill tags
  const techStack = {
    'react': 'React', 'vue': 'Vue', 'angular': 'Angular',
    'node': 'NodeJS', 'python': 'Python', 'java': 'Java',
    'javascript': 'JavaScript', 'typescript': 'TypeScript',
    'aws': 'AWS', 'azure': 'Azure', 'gcp': 'GCP', 'cloud': 'Cloud',
    'kubernetes': 'K8s', 'docker': 'Docker', 'terraform': 'Terraform',
    'machine learning': 'ML', 'ai': 'AI', 'data science': 'DataScience',
    'ios': 'iOS', 'android': 'Android', 'mobile': 'Mobile',
    'frontend': 'Frontend', 'backend': 'Backend', 'fullstack': 'FullStack',
    'devops': 'DevOps', 'security': 'Security', 'blockchain': 'Blockchain'
  };

  const searchText = `${title} ${description}`;
  for (const [keyword, tag] of Object.entries(techStack)) {
    if (searchText.includes(keyword)) {
      tags.push(tag);
    }
  }

  // Role category tags (only if not already added via tech stack)
  if (!tags.includes('DataScience') && (title.includes('data scientist') || title.includes('analyst'))) {
    tags.push('DataScience');
  }
  if (!tags.includes('ML') && (title.includes('machine learning') || title.includes('ml engineer'))) {
    tags.push('ML');
  }
  if (title.includes('product manager') || title.includes('pm ')) {
    tags.push('ProductManager');
  }
  if (title.includes('designer') || title.includes('ux') || title.includes('ui')) {
    tags.push('Design');
  }

  return [...new Set(tags)]; // Remove duplicates
}

// Enhanced embed builder with auto-generated tags
function buildJobEmbed(job) {
  const tags = generateTags(job);
  const company = companies.faang_plus.find(c => c.name === job.employer_name) ||
                  companies.unicorn_startups.find(c => c.name === job.employer_name) ||
                  companies.fintech.find(c => c.name === job.employer_name) ||
                  companies.gaming.find(c => c.name === job.employer_name) ||
                  companies.top_tech.find(c => c.name === job.employer_name) ||
                  companies.enterprise_saas.find(c => c.name === job.employer_name);

  // Build title - only use company emoji if company is found
  // Note: Don't include emoji in title for forum posts as Discord handles it differently
  const title = job.job_title;

  const embed = new EmbedBuilder()
    .setTitle(title)
    .setURL(job.job_apply_link)
    .setColor(0x00A8E8)
    .addFields(
      { name: '🏢 Company', value: job.employer_name || 'Not specified', inline: true },
      {
        name: '📍 Location',
        value: job._multipleLocations && job._multipleLocations.length > 1
          ? job._multipleLocations.map(loc => loc.charAt(0).toUpperCase() + loc.slice(1)).join(', ')
          : (job.job_city && job.job_city.toLowerCase() === 'remote')
            ? 'Remote'
            : `${job.job_city || 'Not specified'}, ${job.job_state || 'Remote'}`,
        inline: true
      },
      { name: '💰 Posted', value: formatPostedDate(job.job_posted_at_datetime_utc), inline: true }
    );

  // Add tags field with hashtag formatting
  if (tags.length > 0) {
    embed.addFields({
      name: '🏷️ Tags',
      value: tags.map(tag => `#${tag}`).join(' '),
      inline: false
    });
  }

  // Add cleaned description preview if available
  const cleanedDescription = cleanJobDescription(job.job_description, job.description_format);
  if (cleanedDescription) {
    embed.addFields({
      name: '📋 Description',
      value: cleanedDescription,
      inline: false
    });
  }

  return embed;
}

// Build action row with apply button and subscription toggle
function buildActionRow(job) {
  const tags = generateTags(job);
  
  const row = new ActionRowBuilder();

  // Only add subscription button if not in GitHub Actions
  if (!process.env.GITHUB_ACTIONS) {
    row.addComponents(
      new ButtonBuilder()
        .setCustomId(`subscribe_${tags[0] || 'general'}`)
        .setLabel('🔔 Get Similar Jobs')
        .setStyle(ButtonStyle.Secondary)
    );
  }
  
  return row;
}

// Slash command definitions
const commands = [
  new SlashCommandBuilder()
    .setName('jobs')
    .setDescription('Search and filter job opportunities')
    .addStringOption(option =>
      option.setName('tags')
        .setDescription('Filter by tags (e.g., Senior,Remote,React)')
        .setRequired(false))
    .addStringOption(option =>
      option.setName('company')
        .setDescription('Filter by company name')
        .setRequired(false))
    .addStringOption(option =>
      option.setName('location')
        .setDescription('Filter by location')
        .setRequired(false)),
  
  new SlashCommandBuilder()
    .setName('subscribe')
    .setDescription('Subscribe to job alerts for specific tags')
    .addStringOption(option =>
      option.setName('tags')
        .setDescription('Tags to subscribe to (e.g., Senior,Remote,React)')
        .setRequired(true)),
  
  new SlashCommandBuilder()
    .setName('unsubscribe')
    .setDescription('Unsubscribe from job alerts')
    .addStringOption(option =>
      option.setName('tags')
        .setDescription('Tags to unsubscribe from (or "all" for everything)')
        .setRequired(true)),
  
  new SlashCommandBuilder()
    .setName('subscriptions')
    .setDescription('View your current job alert subscriptions')
];

// Register slash commands
async function registerCommands() {
  if (!CLIENT_ID || !GUILD_ID) {
    console.log('⚠️ CLIENT_ID or GUILD_ID not set - skipping command registration');
    return;
  }
  
  try {
    const rest = new REST({ version: '10' }).setToken(TOKEN);
    
    console.log('🔄 Registering slash commands...');
    
    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands }
    );
    
    console.log('✅ Slash commands registered successfully');
  } catch (error) {
    console.error('❌ Error registering commands:', error);
  }
}

// Load and filter jobs based on criteria
function loadAndFilterJobs(filters = {}) {
  try {
    const newJobsPath = path.join(dataDir, 'new_jobs.json');
    if (!fs.existsSync(newJobsPath)) {
      return [];
    }

    let jobs = JSON.parse(fs.readFileSync(newJobsPath, 'utf8'));
    // Normalize jobs to handle multiple data formats
    jobs = jobs.map(job => normalizeJob(job));

    // Apply filters
    if (filters.tags) {
      const filterTags = filters.tags.split(',').map(t => t.trim().toLowerCase());
      jobs = jobs.filter(job => {
        const jobTags = generateTags(job).map(t => t.toLowerCase());
        return filterTags.some(tag => jobTags.includes(tag));
      });
    }
    
    if (filters.company) {
      jobs = jobs.filter(job => 
        job.employer_name.toLowerCase().includes(filters.company.toLowerCase())
      );
    }
    
    if (filters.location) {
      jobs = jobs.filter(job => 
        (job.job_city && job.job_city.toLowerCase().includes(filters.location.toLowerCase())) ||
        (job.job_state && job.job_state.toLowerCase().includes(filters.location.toLowerCase()))
      );
    }
    
    return jobs.slice(0, 10); // Limit to 10 results
  } catch (error) {
    console.error('Error loading jobs:', error);
    return [];
  }
}

// Event handlers
client.once('ready', async () => {
  console.log(`✅ Enhanced Discord bot logged in as ${client.user.tag}`);

  // Fetch guild and channels to populate cache
  console.log(`🔍 DEBUG: GUILD_ID = "${GUILD_ID}" (type: ${typeof GUILD_ID})`);
  console.log(`🔍 DEBUG: Bot is member of ${client.guilds.cache.size} guilds`);
  client.guilds.cache.forEach(g => console.log(`   - ${g.name} (${g.id})`));

  if (GUILD_ID) {
    try {
      console.log(`🔍 Attempting to fetch guild: ${GUILD_ID}`);
      const guild = await client.guilds.fetch(GUILD_ID);
      console.log(`✅ Guild found: ${guild.name}`);
      await guild.channels.fetch();
      console.log(`✅ Loaded ${guild.channels.cache.size} channels from guild`);
    } catch (error) {
      console.error(`❌ Failed to fetch guild channels: ${error.message}`);
      console.error(`   Error code: ${error.code}`);
      console.error(`   Full error:`, error);
    }
  } else {
    console.warn(`⚠️ DISCORD_GUILD_ID not set`);
  }

  // Only register commands if running interactively (not in GitHub Actions)
  if (!process.env.GITHUB_ACTIONS) {
    await registerCommands();
  }

  // Load jobs to post
  let jobs = [];
  try {
    const newJobsPath = path.join(dataDir, 'new_jobs.json');
    if (fs.existsSync(newJobsPath)) {
      jobs = JSON.parse(fs.readFileSync(newJobsPath, 'utf8'));
      // Normalize jobs to handle multiple data formats
      jobs = jobs.map(job => normalizeJob(job));
    }
  } catch (error) {
    console.log('ℹ️ No new jobs file found or error reading it');
    console.error('🔍 DEBUG - Full error:', error.message);
    console.error('🔍 DEBUG - Error stack:', error.stack);
    client.destroy();
    process.exit(0);
    return;
  }

  if (!jobs.length) {
    console.log('ℹ️ No new jobs to post');
    client.destroy();
    process.exit(0);
    return;
  }

  // Export all jobs to encrypted JSON for external job boards
  try {
    jobsExporter.exportJobs(jobs);
  } catch (error) {
    console.log('⚠️ Failed to export jobs data:', error.message);
  }

  // Filter out jobs that have already been posted to Discord
  const unpostedJobs = jobs.filter(job => {
    const jobId = generateJobId(job);
    const hasBeenPosted = postedJobsManager.hasBeenPosted(jobId, job);

    if (hasBeenPosted) {
      console.log(`⏭️ Skipping already posted: ${job.job_title} at ${job.employer_name}`);
      return false;
    }

    // MIGRATION CHECK: Also check old fallback ID format to prevent re-posting
    // Jobs posted before data format migration may have different IDs
    const fallbackId = generateEnhancedId(job);
    if (fallbackId !== jobId && postedJobsManager.hasBeenPosted(fallbackId, job)) {
      console.log(`⏭️ Skipping already posted (legacy ID): ${job.job_title} at ${job.employer_name}`);
      return false;
    }

    return true;
  });

  if (!unpostedJobs.length) {
    console.log('ℹ️ No new jobs to post - all jobs have been posted already');
    client.destroy();
    process.exit(0);
    return;
  }

  console.log(`📬 Found ${unpostedJobs.length} new jobs (${jobs.length - unpostedJobs.length} already posted)...`);

  // Hardcoded job filters: Skip specific problematic jobs
  const jobBlacklist = [
    { title: 'agentic ai teacher', company: 'amazon' } // All variations including "- Agi Ds"
  ];

  const filteredJobs = unpostedJobs.filter(job => {
    const titleLower = (job.job_title || '').toLowerCase();
    const companyLower = (job.employer_name || '').toLowerCase();

    // Check if job matches any blacklist entry
    const isBlacklisted = jobBlacklist.some(blacklisted => {
      return titleLower.includes(blacklisted.title) && companyLower.includes(blacklisted.company);
    });

    if (isBlacklisted) {
      console.log(`🚫 Skipping blacklisted job: ${job.job_title} at ${job.employer_name}`);
      return false;
    }

    return true;
  });

  console.log(`📋 After blacklist filter: ${filteredJobs.length} jobs (${unpostedJobs.length - filteredJobs.length} blacklisted)`);

  // Data quality filter: Skip jobs with missing or empty required fields
  const validJobs = filteredJobs.filter(job => {
    const title = (job.job_title || '').trim();
    const company = (job.employer_name || '').trim();

    if (!title || !company) {
      console.log(`⚠️ Skipping malformed job: title="${title}" company="${company}"`);
      return false;
    }

    return true;
  });

  console.log(`📋 After data quality filter: ${validJobs.length} jobs (${filteredJobs.length - validJobs.length} invalid)`);

  // Multi-location grouping: Group jobs by title+company, collect all unique locations
  // Instead of posting the same job 3 times for 3 cities, post once with all locations listed
  // Example: "Software Engineer @ Google" in Boston, Seattle, Austin → 1 post with "Locations: Boston, Seattle, Austin"
  const jobGroupsMap = new Map();

  for (const job of validJobs) {
    // Normalize title and company for grouping
    // Strip team name suffixes (e.g., "- Agi Ds", "- Platform Team") before normalizing
    const title = (job.job_title || '')
      .replace(/\s+-\s+[^-]+$/, '') // Remove team name suffix pattern: " - TeamName"
      .toLowerCase()
      .trim()
      .replace(/\s+/g, ' ')
      .replace(/[^\w\s-]/g, '');
    const company = (job.employer_name || '').toLowerCase().trim();

    const groupKey = `${title}|${company}`;

    // Normalize location to handle variations (e.g., "San Francisco, CA" vs "San Francisco")
    let location = (job.job_city || '').toLowerCase().trim();
    // Remove state abbreviations (", CA", ", NY", etc.)
    location = location.replace(/,\s*[a-z]{2}$/i, '');
    // Remove "city" suffix
    location = location.replace(/\s+city$/i, '');
    // Standardize "Remote" variations (remote, REMOTE, Remote - USA, etc.)
    if (location.includes('remote')) {
      location = 'remote';
    }
    // Trim again after modifications
    location = location.trim();

    if (!jobGroupsMap.has(groupKey)) {
      // First job in this group - use it as the primary job
      jobGroupsMap.set(groupKey, {
        primaryJob: job,
        locations: new Set([location]),
        allJobs: [job] // Track all jobs for deduplication
      });
    } else {
      // Additional location for existing job group
      const group = jobGroupsMap.get(groupKey);
      group.locations.add(location);
      group.allJobs.push(job);
    }
  }

  // Convert grouped jobs to array for posting
  const dedupedJobs = Array.from(jobGroupsMap.values()).map(group => {
    // Attach location array to primary job for Discord formatting
    const jobWithLocations = {
      ...group.primaryJob,
      _multipleLocations: Array.from(group.locations).filter(loc => loc), // Remove empty strings
      _allJobVariants: group.allJobs // Track all variants for deduplication
    };
    return jobWithLocations;
  });

  console.log(`📋 After multi-location grouping: ${dedupedJobs.length} unique jobs to post`);
  if (filteredJobs.length - dedupedJobs.length > 0) {
    console.log(`   (${filteredJobs.length - dedupedJobs.length} grouped as same job with different locations)`);
  }

  // Log multi-location jobs for visibility
  const multiLocationJobs = dedupedJobs.filter(job => job._multipleLocations && job._multipleLocations.length > 1);
  if (multiLocationJobs.length > 0) {
    console.log(`📍 ${multiLocationJobs.length} jobs with multiple locations:`);
    multiLocationJobs.forEach(job => {
      console.log(`   - ${job.job_title} @ ${job.employer_name}: ${job._multipleLocations.join(', ')}`);
    });
  }

  // Limit to 10 jobs per workflow run to prevent channel overflow and timeouts
  const MAX_JOBS_PER_RUN = 10;
  const jobsToPost = dedupedJobs.slice(0, MAX_JOBS_PER_RUN);
  const deferredJobs = unpostedJobs.length - jobsToPost.length;

  if (deferredJobs > 0) {
    console.log(`⏸️ Limiting to ${MAX_JOBS_PER_RUN} jobs this run, ${deferredJobs} deferred for next run`);
  }

  console.log(`📤 Posting ${jobsToPost.length} jobs...`);

  // Check if multi-channel mode is enabled
  if (MULTI_CHANNEL_MODE) {
    console.log('🔀 Multi-channel mode enabled - routing jobs to appropriate forums');

    // Group jobs by channel
    const jobsByChannel = {};
    for (const job of jobsToPost) {
      // Get detailed routing information for debugging
      const routingInfo = getJobChannelDetails(job, CHANNEL_CONFIG);
      const channelId = routingInfo.channelId;

      if (!channelId || channelId.trim() === '') {
        console.warn(`⚠️ No channel configured for job: ${job.job_title} - skipping`);
        continue;
      }

      if (!jobsByChannel[channelId]) {
        jobsByChannel[channelId] = {
          jobs: [],
          category: routingInfo.category,
          channelId: channelId
        };
      }
      jobsByChannel[channelId].jobs.push({
        job,
        routingInfo
      });
    }

    // Post jobs to their respective channels (batch by channel)
    let totalPosted = 0;
    let totalFailed = 0;
    let channelFullErrorCount = 0;
    const CHANNEL_FULL_EXIT_THRESHOLD = 5; // Exit after 5 consecutive "channel full" errors

    for (const [channelId, channelData] of Object.entries(jobsByChannel)) {
      // Use cache instead of API fetch (channels cached when bot logged in)
      const channel = client.channels.cache.get(channelId);
      if (!channel) {
        console.error(`❌ Channel not found in cache: ${channelId}`);
        totalFailed += channelData.jobs.length;
        continue;
      }

      console.log(`\n📌 Posting ${channelData.jobs.length} jobs to #${channel.name}`);

      // Post jobs with rate limiting within each batch
      for (const { job, routingInfo } of channelData.jobs) {
        const jobId = generateJobId(job);

        // Log routing decision for debugging
        routingLogger.logRouting(
          job,
          routingInfo.category,
          routingInfo.matchedKeyword,
          channelId,
          channel.name
        );
        let jobPostedSuccessfully = false;
        let primaryThreadId = null; // Track thread ID for database

        // INDUSTRY POST: Post to industry channel
        const industryResult = await postJobToForum(job, channel);
        if (industryResult.success) {
          console.log(`  ✅ Industry: ${job.job_title} @ ${job.employer_name}`);
          jobPostedSuccessfully = true;
          primaryThreadId = industryResult.thread?.id || null; // Capture thread ID
          channelFullErrorCount = 0; // Reset counter on success
        } else {
          console.log(`  ❌ Industry post failed: ${job.job_title}`);

          // Check if error is "Maximum threads reached" (code 160006)
          if (industryResult.error && industryResult.error.code === 160006) {
            channelFullErrorCount++;
            console.log(`⚠️  Channel full error count: ${channelFullErrorCount}/${CHANNEL_FULL_EXIT_THRESHOLD}`);

            if (channelFullErrorCount >= CHANNEL_FULL_EXIT_THRESHOLD) {
              console.log(`\n❌ CRITICAL: Discord channel #${channel.name} is full (max active threads reached)`);
              console.log(`❌ Exiting early to avoid timeout. ${totalPosted} jobs posted, ${totalFailed + (channelJobs.length - channelJobs.indexOf(job))} failed.`);
              console.log(`\n💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.`);
              client.destroy();
              process.exit(0);
            }
          }
        }

        // Rate limiting between posts
        await new Promise(resolve => setTimeout(resolve, 1500));

        // LOCATION POST: Also post to location channel (if applicable)
        if (LOCATION_MODE_ENABLED) {
          const locationChannelId = getJobLocationChannel(job);

          if (locationChannelId && locationChannelId.trim() !== '') {
            const locationChannel = client.channels.cache.get(locationChannelId);

            if (locationChannel) {
              try {
                const locationResult = await postJobToForum(job, locationChannel);

                if (locationResult.success) {
                  console.log(`  ✅ Location: ${locationChannel.name}`);
                  jobPostedSuccessfully = true;
                } else {
                  console.log(`  ⚠️ Location post failed: ${locationChannel.name}`);
                }
              } catch (error) {
                console.error(`  ❌ Location channel error:`, error.message);
              }
            }

            // Rate limiting after location post
            await new Promise(resolve => setTimeout(resolve, 1500));
          }
        }

        // Mark as posted if at least one post succeeded
        if (jobPostedSuccessfully) {
          postedJobsManager.markAsPosted(jobId, job, primaryThreadId);

          // Also mark all location variants as posted (for multi-location grouping)
          if (job._allJobVariants && job._allJobVariants.length > 1) {
            job._allJobVariants.forEach(variant => {
              const variantId = generateJobId(variant);
              if (variantId !== jobId) {
                postedJobsManager.markAsPosted(variantId, variant, null);
              }
            });
          }

          totalPosted++;
        } else {
          totalFailed++;
        }
      }

      // Longer delay between different channels (3 seconds)
      await new Promise(resolve => setTimeout(resolve, 3000));
    }

    console.log(`\n🎉 Posting complete! Successfully posted: ${totalPosted}, Failed: ${totalFailed}`);
  } else {
    // Legacy single-channel mode
    console.log('📝 Single-channel mode - posting to configured channel');

    // Use cache instead of API fetch
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (!channel) {
      console.error('❌ Channel not found in cache:', CHANNEL_ID);
      client.destroy();
      process.exit(1);
      return;
    }

    for (const job of jobsToPost) {
      try {
        const jobId = generateJobId(job);
        const tags = generateTags(job);
        const embed = buildJobEmbed(job);
        const actionRow = buildActionRow(job);

        // Get users subscribed to these tags (only if not in GitHub Actions)
        let content = '';

        if (!process.env.GITHUB_ACTIONS) {
          const subscribedUsers = subscriptionManager.getUsersForTags(tags);
          if (subscribedUsers.length > 0) {
            content = `🔔 ${subscribedUsers.map(id => `<@${id}>`).join(' ')} - New job matching your subscriptions!`;
          }
        }

        const messageData = {
          content,
          embeds: [embed]
        };

        // Only add components if actionRow has buttons
        if (actionRow.components.length > 0) {
          messageData.components = [actionRow];
        }

        const message = await channel.send(messageData);

        // Mark this job as posted AFTER successful posting
        postedJobsManager.markAsPosted(jobId);
        
        // Also mark all location variants as posted (for multi-location grouping)
        if (job._allJobVariants && job._allJobVariants.length > 1) {
          job._allJobVariants.forEach(variant => {
            const variantId = generateJobId(variant);
            if (variantId !== jobId) {
              postedJobsManager.markAsPosted(variantId);
            }
          });
        }

        console.log(`✅ Posted: ${job.job_title} at ${job.employer_name}`);

        // Small delay to avoid rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (error) {
        console.error(`❌ Error posting job ${job.job_title}:`, error);
      }
    }

    console.log('🎉 All jobs posted successfully!');
  }

  // Update pending queue - mark successfully posted jobs as "posted"
  try {
    // Collect all successfully posted job IDs from both modes
    const successfullyPostedIds = [];

    jobsToPost.forEach(job => {
      const jobId = generateJobId(job);
      // Check if this job was marked as posted
      if (postedJobsManager.hasBeenPosted(jobId, job)) {
        successfullyPostedIds.push(jobId);
      }
    });

    if (successfullyPostedIds.length > 0) {
      let queue = loadPendingQueue();
      const now = new Date().toISOString();
      let updatedCount = 0;

      queue.forEach(item => {
        const itemJobId = generateJobId(item.job);
        if (successfullyPostedIds.includes(itemJobId)) {
          item.status = 'posted';
          item.postedAt = now;
          updatedCount++;
        }
      });

      if (updatedCount > 0) {
        savePendingQueue(queue);
        console.log(`📋 Updated queue: marked ${updatedCount} jobs as posted`);
      }
    }
  } catch (error) {
    console.error('⚠️ Error updating pending queue:', error.message);
    // Don't fail the whole process if queue update fails
  }

  // Clean exit AFTER all async operations complete
  console.log('✅ All posting operations complete, cleaning up...');

  // Save routing logs (encrypted for GitHub Actions, plaintext for local)
  if (process.env.GITHUB_ACTIONS) {
    const password = process.env.LOG_ENCRYPT_PASSWORD;
    if (password) {
      try {
        routingLogger.saveEncrypted(password);
      } catch (error) {
        console.error('❌ Failed to save encrypted routing logs:', error.message);
      }
    } else {
      console.warn('⚠️ LOG_ENCRYPT_PASSWORD not set - routing logs not saved');
    }
  } else {
    // Local development - save plaintext logs
    routingLogger.savePlaintext();
  }

  await new Promise(resolve => setTimeout(resolve, 2000)); // Grace period for final operations
  client.destroy();
  process.exit(0);
});

// Handle slash commands (only if not running in GitHub Actions)
client.on('interactionCreate', async interaction => {
  if (process.env.GITHUB_ACTIONS) return; // Skip interactions in CI
  if (!interaction.isChatInputCommand()) return;

  const { commandName, options, user } = interaction;

  try {
    switch (commandName) {
      case 'jobs':
        const filters = {
          tags: options.getString('tags'),
          company: options.getString('company'),
          location: options.getString('location')
        };
        
        const filteredJobs = loadAndFilterJobs(filters);
        
        if (filteredJobs.length === 0) {
          await interaction.reply({
            content: '❌ No jobs found matching your criteria. Try different filters!',
            ephemeral: true
          });
          return;
        }

        const jobsEmbed = new EmbedBuilder()
          .setTitle('🔍 Job Search Results')
          .setColor(0x00A8E8)
          .setDescription(`Found ${filteredJobs.length} jobs matching your criteria`)
          .setTimestamp();

        filteredJobs.forEach((job, index) => {
          const tags = generateTags(job);
          jobsEmbed.addFields({
            name: `${index + 1}. ${job.job_title} at ${job.employer_name}`,
            value: `📍 ${job.job_city}, ${job.job_state}\n🏷️ ${tags.map(t => `#${t}`).join(' ')}\n[Apply Here](${job.job_apply_link})`,
            inline: false
          });
        });

        await interaction.reply({ embeds: [jobsEmbed], ephemeral: true });
        break;

      case 'subscribe':
        const subscribeTags = options.getString('tags').split(',').map(t => t.trim());
        const subscribed = [];
        
        for (const tag of subscribeTags) {
          if (subscriptionManager.subscribe(user.id, tag)) {
            subscribed.push(tag);
          }
        }

        if (subscribed.length > 0) {
          await interaction.reply({
            content: `✅ Successfully subscribed to: ${subscribed.map(t => `#${t}`).join(', ')}\n🔔 You'll be notified when new jobs with these tags are posted!`,
            ephemeral: true
          });
        } else {
          await interaction.reply({
            content: '❌ You are already subscribed to all specified tags.',
            ephemeral: true
          });
        }
        break;

      case 'unsubscribe':
        const unsubscribeInput = options.getString('tags');
        
        if (unsubscribeInput.toLowerCase() === 'all') {
          delete subscriptionManager.subscriptions[user.id];
          subscriptionManager.saveSubscriptions();
          await interaction.reply({
            content: '✅ Unsubscribed from all job alerts.',
            ephemeral: true
          });
        } else {
          const unsubscribeTags = unsubscribeInput.split(',').map(t => t.trim());
          const unsubscribed = [];
          
          for (const tag of unsubscribeTags) {
            if (subscriptionManager.unsubscribe(user.id, tag)) {
              unsubscribed.push(tag);
            }
          }

          if (unsubscribed.length > 0) {
            await interaction.reply({
              content: `✅ Unsubscribed from: ${unsubscribed.map(t => `#${t}`).join(', ')}`,
              ephemeral: true
            });
          } else {
            await interaction.reply({
              content: '❌ You were not subscribed to any of the specified tags.',
              ephemeral: true
            });
          }
        }
        break;

      case 'subscriptions':
        const userSubs = subscriptionManager.getUserSubscriptions(user.id);
        
        if (userSubs.length === 0) {
          await interaction.reply({
            content: '📭 You have no active job alert subscriptions.\nUse `/subscribe tags:Remote,Senior` to get started!',
            ephemeral: true
          });
        } else {
          await interaction.reply({
            content: `🔔 Your active job alert subscriptions:\n${userSubs.map(t => `#${t}`).join(', ')}\n\nUse \`/unsubscribe\` to modify your subscriptions.`,
            ephemeral: true
          });
        }
        break;
    }
  } catch (error) {
    console.error('Error handling interaction:', error);
    await interaction.reply({
      content: '❌ An error occurred while processing your request.',
      ephemeral: true
    });
  }
});

// Handle button interactions (only if not running in GitHub Actions)
client.on('interactionCreate', async interaction => {
  if (process.env.GITHUB_ACTIONS) return; // Skip interactions in CI
  if (!interaction.isButton()) return;

  const { customId, user } = interaction;

  if (customId.startsWith('subscribe_')) {
    const tag = customId.replace('subscribe_', '');
    
    if (subscriptionManager.subscribe(user.id, tag)) {
      await interaction.reply({
        content: `✅ Subscribed to #${tag} job alerts! You'll be notified when similar jobs are posted.`,
        ephemeral: true
      });
    } else {
      await interaction.reply({
        content: `ℹ️ You're already subscribed to #${tag} alerts.`,
        ephemeral: true
      });
    }
  }
});

// Function to post job to forum channel
async function postJobToForum(job, channel) {
  try {
    const jobId = generateJobId(job);
    const embed = buildJobEmbed(job);
    const actionRow = buildActionRow(job);
    const tags = generateTags(job);

    // Find company emoji if available
    const company = companies.faang_plus.find(c => c.name === job.employer_name) ||
                    companies.unicorn_startups.find(c => c.name === job.employer_name) ||
                    companies.fintech.find(c => c.name === job.employer_name) ||
                    companies.gaming.find(c => c.name === job.employer_name) ||
                    companies.top_tech.find(c => c.name === job.employer_name) ||
                    companies.enterprise_saas.find(c => c.name === job.employer_name);

    // Create forum post title with company emoji if available
    // Format: [emoji] Job Title @ Company Name
    const companyEmoji = company ? company.emoji : '🏢';
    const threadName = `${companyEmoji} ${job.job_title} @ ${job.employer_name}`.substring(0, 100);

    // Build message data
    const messageData = {
      embeds: [embed]
    };

    // Only add components if actionRow has buttons
    if (actionRow.components.length > 0) {
      messageData.components = [actionRow];
    }

    // Check if this is a forum channel
    if (channel.type === ChannelType.GuildForum) {
      // Determine tags for the forum post based on job characteristics
      const appliedTags = [];

      // Try to find matching forum tags (these need to be pre-configured in Discord)
      // Forum channels can have predefined tags that can be applied to posts
      if (channel.availableTags && channel.availableTags.length > 0) {
        // Match job tags with forum tags
        for (const tag of tags) {
          const forumTag = channel.availableTags.find(t =>
            t.name.toLowerCase() === tag.toLowerCase() ||
            t.name.toLowerCase().includes(tag.toLowerCase())
          );
          if (forumTag && appliedTags.length < 5) { // Discord allows max 5 tags
            appliedTags.push(forumTag.id);
          }
        }
      }

      // Create a new forum post
      const threadOptions = {
        name: threadName,
        message: messageData,
        autoArchiveDuration: 10080, // Archive after 7 days of inactivity
        reason: `New job posting: ${job.job_title} at ${job.employer_name}`
      };

      // Add tags if any were found
      if (appliedTags.length > 0) {
        threadOptions.appliedTags = appliedTags;
      }

      const thread = await channel.threads.create(threadOptions);

      console.log(`✅ Created forum post: ${threadName} in #${channel.name}`);
      return { success: true, thread };
    } else {
      // Fallback for regular text channels (legacy support)
      const message = await channel.send(messageData);
      console.log(`✅ Posted message: ${job.job_title} at ${job.employer_name} in #${channel.name}`);
      return { success: true, message };
    }
  } catch (error) {
    console.error(`❌ Error posting job ${job.job_title}:`, error);
    return { success: false, error };
  }
}

// Error handling
client.on('error', error => {
  console.error('Discord client error:', error);
});

process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
});

// Login to Discord
client.login(TOKEN);