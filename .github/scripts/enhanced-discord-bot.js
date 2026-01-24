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
const { getJobChannelDetails, isAIRole, isDataScienceRole, isTechRole, isNonTechRole } = require('./src/routing/router');
const { getJobLocationChannel } = require('./src/routing/location');
const { normalizeJob } = require('./src/utils/job-normalizer');
const { formatPostedDate, cleanJobDescription } = require('./src/utils/job-formatters');
const PostedJobsManager = require('./src/data/posted-jobs-manager-v2');
const SubscriptionManager = require('./src/data/subscription-manager');
// NEW: Import posting and filtering utilities
const { postJobToChannel, generateTags, buildJobEmbed, buildActionRow } = require('./src/discord/poster');
const { postJobToForum } = require('./src/discord/forum-poster');
const { filterBlacklisted, filterByDataQuality, filterEnriched, filterUnposted } = require('./src/filters/job-filters');

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

// Import routing logger, posting logger, and jobs exporter for debugging
const RoutingLogger = require('./routing-logger');
const DiscordPostLogger = require('./discord-post-logger');
const JobsDataExporter = require('./jobs-data-exporter');
const ChannelStatsManager = require('./channel-stats');

// Import metrics collector
const { collectDiscordMetrics, collectChannelMetrics } = require('./src/monitoring/metrics-collector');

// Initialize routing logger, posting logger, and jobs exporter
const routingLogger = new RoutingLogger();

// URL validation - prevents Discord API errors from malformed URLs
function isValidUrl(urlString) {
  if (!urlString || typeof urlString !== 'string') return false;
  try {
    const url = new URL(urlString);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

function sanitizeUrl(urlString) {
  if (!urlString || typeof urlString !== 'string') {
    console.warn(`⚠️ Empty/invalid URL, using fallback`);
    return 'https://zapplyjobs.com/jobs';
  }

  try {
    // Encode spaces and other problematic characters that Discord rejects
    const encoded = urlString.replace(/ /g, '%20');
    const url = new URL(encoded);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      throw new Error('Invalid protocol');
    }
    return encoded;
  } catch {
    console.warn(`⚠️ Invalid URL detected, using fallback: ${urlString}`);
    return 'https://zapplyjobs.com/jobs';
  }
}

const postLogger = new DiscordPostLogger();
const jobsExporter = new JobsDataExporter();
const channelStats = new ChannelStatsManager();

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

// NOTE: getJobLocationChannel() is now imported from src/routing/location.js
// Location routing logic extracted to src/routing/location.js (152 lines removed)

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
    // Load from pending_posts.json and filter for enriched jobs ready to post
    const pendingQueue = loadPendingQueue();
    
    // Filter for jobs with status "enriched" (ready to post)
    const enrichedJobs = pendingQueue.filter(item => item.status === 'enriched');
    
    console.log(`[BOT] 📬 Found ${enrichedJobs.length} enriched jobs ready to post from pending queue`);
    
    // Extract job objects and normalize
    jobs = enrichedJobs.map(item => {
      const job = item.job || item;
      return normalizeJob(job);
    });
    
    if (enrichedJobs.length > 0) {
      console.log(`[BOT] 🔍 Sample enriched job: ${jobs[0]?.job_title} at ${jobs[0]?.employer_name}`);
    }
  } catch (error) {
    console.log('ℹ️ No pending queue found or error reading it');
    console.error('🔍 DEBUG - Full error:', error.message);
    console.error('🔍 DEBUG - Error stack:', error.stack);
    client.destroy();
    process.exit(0);
    return;
  }

  if (!jobs.length) {
    console.log('ℹ️ No enriched jobs to post');
    client.destroy();
    process.exit(0);
  }

  // Filter out jobs that have already been posted to Discord
  const unpostedJobs = jobs.filter(job => {
    const jobId = generateJobId(job);
    const hasBeenPosted = postedJobsManager.hasBeenPosted(jobId, job);

    if (hasBeenPosted) {
      console.log(`⏭️ Skipping already posted: ${job.job_title} at ${job.employer_name}`);
      postLogger.logSkip(job, jobId, 'already_posted');
      return false;
    }

    // MIGRATION CHECK: Also check old fallback ID format to prevent re-posting
    // Jobs posted before data format migration may have different IDs
    const fallbackId = generateEnhancedId(job);
    if (fallbackId !== jobId && postedJobsManager.hasBeenPosted(fallbackId, job)) {
      console.log(`⏭️ Skipping already posted (legacy ID): ${job.job_title} at ${job.employer_name}`);
      postLogger.logSkip(job, jobId, 'already_posted_legacy_id');
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

  // Apply blacklist filter using extracted module
  const blacklistResult = filterBlacklisted(unpostedJobs, (job) => {
    const jobId = generateJobId(job);
    console.log(`🚫 Skipping blacklisted job: ${job.job_title} at ${job.employer_name}`);
    postLogger.logSkip(job, jobId, 'blacklisted');
  });
  const filteredJobs = blacklistResult.filtered;

  // Remove blacklisted jobs from pending queue immediately (FIX: prevent queue blocking)
  if (blacklistResult.blacklisted.length > 0) {
    try {
      const blacklistedJobIds = blacklistResult.blacklisted.map(job => generateJobId(job));
      let queue = loadPendingQueue();
      const beforeCount = queue.length;
      queue = queue.filter(item => {
        const itemJobId = generateJobId(item.job);
        return !blacklistedJobIds.includes(itemJobId);
      });
      const removedCount = beforeCount - queue.length;
      if (removedCount > 0) {
        savePendingQueue(queue);
        console.log(`🗑️ Removed ${removedCount} blacklisted jobs from pending queue`);
      }
    } catch (error) {
      console.error('⚠️ Error cleaning blacklisted jobs from queue:', error.message);
    }
  }

  console.log(`📋 After blacklist filter: ${filteredJobs.length} jobs (${blacklistResult.blacklisted.length} blacklisted)`);

  // Apply data quality filter using extracted module
  const qualityResult = filterByDataQuality(filteredJobs, ['job_title', 'employer_name']);
  const validJobs = qualityResult.valid;

  // Log skipped invalid jobs
  qualityResult.invalid.forEach(({ job, missingFields }) => {
    const jobId = generateJobId(job);
    console.log(`⚠️ Skipping malformed job: missing ${missingFields.join(', ')}`);
    postLogger.logSkip(job, jobId, 'invalid_data');
  });

  // Remove invalid jobs from pending queue (FIX: prevent queue blocking)
  if (qualityResult.invalid.length > 0) {
    try {
      const invalidJobIds = qualityResult.invalid.map(({ job }) => generateJobId(job));
      let queue = loadPendingQueue();
      const beforeCount = queue.length;
      queue = queue.filter(item => {
        const itemJobId = generateJobId(item.job);
        return !invalidJobIds.includes(itemJobId);
      });
      const removedCount = beforeCount - queue.length;
      if (removedCount > 0) {
        savePendingQueue(queue);
        console.log(`🗑️ Removed ${removedCount} invalid jobs from pending queue`);
      }
    } catch (error) {
      console.error('⚠️ Error cleaning invalid jobs from queue:', error.message);
    }
  }

  console.log(`📋 After data quality filter: ${validJobs.length} jobs (${qualityResult.invalid.length} invalid)`);

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

        // Check ALL pattern matches for comprehensive logging
        const title = (job.job_title || '').toLowerCase();
        const description = (job.job_description || '').toLowerCase();
        const allMatches = {
          aiMatch: isAIRole(title, description),
          dsMatch: isDataScienceRole(title, description),
          techMatch: isTechRole(title),
          nonTechMatch: isNonTechRole(title)
        };

        // Log routing decision with ALL matches for debugging
        routingLogger.logRouting(
          job,
          routingInfo.category,
          routingInfo.matchedKeyword,
          channelId,
          channel.name,
          null,  // locationInfo - will be added in location post section
          allMatches  // NEW: All pattern matches
        );
        let jobPostedSuccessfully = false;
        let primaryThreadId = null; // Track thread ID for database

        // INDUSTRY POST: Post to industry channel (NEW: text messages with multi-channel tracking)
        const industryStartTime = Date.now();

        // Get channel job number before posting
        const channelJobNumber = postedJobsManager.getChannelJobNumber(channelId);

        const industryResult = await postJobToChannel(job, channel, { channelJobNumber });
        const industryDuration = Date.now() - industryStartTime;

        if (industryResult.success) {
          console.log(`  ✅ Industry: ${job.job_title} @ ${job.employer_name}`);
          jobPostedSuccessfully = true;
          primaryThreadId = industryResult.messageId || null; // Capture message ID (was thread ID)
          channelFullErrorCount = 0; // Reset counter on success
          channelStats.recordPost(channelId, channel.name);

          // NEW: Track posting in multi-channel schema
          postedJobsManager.markAsPostedToChannel(
            job,
            industryResult.messageId,
            industryResult.channelId,
            'category'
          );

          // Log successful post
          postLogger.logSuccess(
            job,
            jobId,
            channelId,
            channel.name,
            industryResult.messageId,
            primaryThreadId,
            industryDuration
          );
        } else {
          console.log(`  ❌ Industry post failed: ${job.job_title}`);

          // Log failed post
          postLogger.logFailure(
            job,
            jobId,
            channelId,
            channel.name,
            industryResult.error || new Error('Unknown posting error')
          );

          // Check if error is "Maximum threads reached" (code 160006)
          if (industryResult.error && industryResult.error.code === 160006) {
            channelFullErrorCount++;
            console.log(`⚠️  Channel full error count: ${channelFullErrorCount}/${CHANNEL_FULL_EXIT_THRESHOLD}`);

            if (channelFullErrorCount >= CHANNEL_FULL_EXIT_THRESHOLD) {
              console.log(`\n❌ CRITICAL: Discord channel #${channel.name} is full (max active threads reached)`);
              console.log(`❌ Exiting early to avoid timeout. ${totalPosted} jobs posted, ${totalFailed + (channelData.jobs.length - channelData.jobs.findIndex(j => j.job === job))} failed.`);
              console.log(`\n💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.`);

              // Save logs before exiting
              postLogger.save();
  
  // Save and display channel stats
  channelStats.logSummary();
  channelStats.save();
              routingLogger.savePlaintext();

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
                const locationStartTime = Date.now();

                // Get channel job number for location channel
                const locationChannelJobNumber = postedJobsManager.getChannelJobNumber(locationChannelId);

                const locationResult = await postJobToChannel(job, locationChannel, { channelJobNumber: locationChannelJobNumber });
                const locationDuration = Date.now() - locationStartTime;

                if (locationResult.success) {
                  console.log(`  ✅ Location: ${locationChannel.name}`);
                  jobPostedSuccessfully = true;
                  channelStats.recordPost(locationChannelId, locationChannel.name);

                  // NEW: Track posting in multi-channel schema
                  postedJobsManager.markAsPostedToChannel(
                    job,
                    locationResult.messageId,
                    locationResult.channelId,
                    'location'
                  );

                  // Log successful location post
                  postLogger.logSuccess(
                    job,
                    jobId,
                    locationChannelId,
                    locationChannel.name,
                    locationResult.messageId,
                    locationResult.thread?.id || null,
                    locationDuration
                  );
                } else {
                  console.log(`  ⚠️ Location post failed: ${locationChannel.name}`);

                  // Log failed location post
                  postLogger.logFailure(
                    job,
                    jobId,
                    locationChannelId,
                    locationChannel.name,
                    locationResult.error || new Error('Unknown posting error')
                  );
                }
              } catch (error) {
                console.error(`  ❌ Location channel error:`, error.message);

                // Log exception during location post
                postLogger.logFailure(
                  job,
                  jobId,
                  locationChannelId,
                  locationChannel.name,
                  error
                );
              }
            }

            // Rate limiting after location post
            await new Promise(resolve => setTimeout(resolve, 1500));
          }
        }

        // Count as posted if at least one post succeeded
        // NOTE: Job tracking is already handled by markAsPostedToChannel() calls above (lines 721, 796)
        // Removing duplicate markAsPosted() call that was creating empty discordPosts records
        if (jobPostedSuccessfully) {
          totalPosted++;
        } else {
          totalFailed++;
        }
      }

      // Longer delay between different channels (3 seconds)
      await new Promise(resolve => setTimeout(resolve, 3000));
    }

    console.log(`\n🎉 Posting complete! Successfully posted: ${totalPosted}, Failed: ${totalFailed}`);

    // Collect Discord bot metrics
    collectDiscordMetrics({
      total_posted: totalPosted,
      total_failed: totalFailed,
      avg_latency_ms: 0, // TODO: Track latency in posting functions
      rate_limit_hits: 0 // TODO: Track rate limit hits
    });

    // Collect per-channel metrics
    for (const [channelId, channelData] of Object.entries(jobsByChannel)) {
      const channel = client.channels.cache.get(channelId);
      if (channel) {
        collectChannelMetrics({
          channel_id: channelId,
          channel_name: channel.name,
          posts_count: channelData.jobs.length,
          thread_count: 0, // TODO: Track active threads
          utilization: 0 // TODO: Calculate utilization
        });
      }
    }
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

  // Save Discord posting logs (always save - critical for debugging)
  postLogger.save();
  
  // Save and display channel stats
  channelStats.logSummary();
  channelStats.save();

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
      case 'jobs': {
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
            value: `📍 ${job.job_city}, ${job.job_state}\n🏷️ ${tags.map(t => `#${t}`).join(' ')}\n[Apply Here](${sanitizeUrl(job.job_apply_link)})`,
            inline: false
          });
        });

        await interaction.reply({ embeds: [jobsEmbed], ephemeral: true });
        break;
      }

      case 'subscribe': {
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
      }

      case 'unsubscribe': {
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
      }

      case 'subscriptions': {
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
// NOTE: postJobToForum() is now imported from src/discord/forum-poster.js
// Forum posting logic extracted (78 lines removed)

// Error handling
client.on('error', error => {
  console.error('Discord client error:', error);
});

process.on('unhandledRejection', error => {
  console.error('Unhandled promise rejection:', error);
});

// Login to Discord
client.login(TOKEN);
