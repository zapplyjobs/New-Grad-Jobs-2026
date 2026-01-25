/**
 * Discord Verification Module
 *
 * Fetches actual Discord messages and compares with posted_jobs.json
 * to verify posts actually made it to Discord.
 *
 * Used for observability and detecting posting failures.
 */

const { Client, GatewayIntentBits } = require('discord.js');

/**
 * Fetch recent messages from a Discord channel
 * @param {Client} client - Discord client
 * @param {string} channelId - Channel ID
 * @param {number} limit - Number of messages to fetch
 * @returns {Promise<Array>} Array of message objects
 */
async function fetchChannelMessages(client, channelId, limit = 100) {
  try {
    const channel = await client.channels.fetch(channelId);
    const messages = await channel.messages.fetch({ limit });

    return Array.from(messages.values()).map(msg => ({
      id: msg.id,
      createdAt: msg.createdAt.toISOString(),
      createdTimestamp: msg.createdTimestamp,
      title: msg.embeds[0]?.title,
      company: msg.embeds[0]?.fields?.find(f => f.name === '🏢 Company')?.value,
      hasEmbed: msg.embeds && msg.embeds.length > 0
    })).filter(m => m.hasEmbed);
  } catch (error) {
    console.warn(`Warning: Could not fetch messages from channel ${channelId}:`, error.message);
    return [];
  }
}

/**
 * Verify Discord posts against database
 * @param {Object} config - Configuration object
 * @param {string} config.token - Discord bot token
 * @param {Object} config.channels - Channel IDs to check
 * @param {Array} config.postedJobs - Jobs from posted_jobs.json
 * @param {number} config.lookbackHours - How far back to check (default 24)
 * @returns {Promise<Object>} Verification results
 */
async function verifyDiscordPosts(config) {
  const { token, channels, postedJobs, lookbackHours = 24 } = config;

  const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
  });

  await client.login(token);
  await new Promise(resolve => client.once('ready', resolve));

  const results = {
    timestamp: new Date().toISOString(),
    lookbackHours,
    channels: {},
    summary: {
      totalJobsInDb: 0,
      totalJobsInDiscord: 0,
      jobsWithDiscordPosts: 0,
      jobsMissingFromDiscord: 0,
      duplicatesInDiscord: 0
    }
  };

  const cutoffTime = Date.now() - (lookbackHours * 60 * 60 * 1000);

  // Filter jobs to recent ones
  const recentJobs = postedJobs.filter(job => {
    const postedAt = new Date(job.postedToDiscord || 0).getTime();
    return postedAt >= cutoffTime;
  });

  results.summary.totalJobsInDb = recentJobs.length;

  // Fetch messages from each channel
  for (const [channelName, channelId] of Object.entries(channels)) {
    const messages = await fetchChannelMessages(client, channelId, 100);

    const recentMessages = messages.filter(m => m.createdTimestamp >= cutoffTime);

    results.channels[channelName] = {
      channelId,
      messagesFound: recentMessages.length,
      jobs: recentMessages.map(m => ({
        title: m.title,
        company: m.company,
        postedAt: m.createdAt
      }))
    };

    results.summary.totalJobsInDiscord += recentMessages.length;
  }

  // Build map of Discord jobs by channel (for multi-channel verification)
  const discordJobsByChannel = {};
  Object.entries(results.channels).forEach(([channelName, channelData]) => {
    discordJobsByChannel[channelData.channelId] = new Set(
      channelData.jobs.map(job => `${job.title}||${job.company}`)
    );
  });

  // Check for jobs in DB that aren't in Discord (per-channel verification)
  const missingJobs = [];
  const multiChannelIssues = [];

  recentJobs.forEach(job => {
    const key = `${job.title}||${job.company}`;
    const hasDiscordPosts = job.discordPosts && Object.keys(job.discordPosts).length > 0;

    if (hasDiscordPosts) {
      results.summary.jobsWithDiscordPosts++;

      // Verify each channel the job claims to be posted to
      const expectedChannels = Object.keys(job.discordPosts);
      const foundChannels = [];
      const missingChannels = [];

      expectedChannels.forEach(channelId => {
        if (discordJobsByChannel[channelId]?.has(key)) {
          foundChannels.push(channelId);
        } else {
          missingChannels.push(channelId);
        }
      });

      // Multi-channel routing verification
      if (missingChannels.length > 0) {
        multiChannelIssues.push({
          title: job.title,
          company: job.company,
          postedAt: job.postedToDiscord,
          expectedChannels: expectedChannels.length,
          foundChannels: foundChannels.length,
          missingFromChannels: missingChannels
        });
      }
    } else {
      // Job has no discordPosts field - check if it exists in ANY channel
      const foundInAnyChannel = Object.values(discordJobsByChannel).some(
        channelSet => channelSet.has(key)
      );

      if (!foundInAnyChannel) {
        missingJobs.push({
          title: job.title,
          company: job.company,
          postedAt: job.postedToDiscord,
          hasDiscordPostsField: false
        });
      }
    }
  });

  results.summary.jobsMissingFromDiscord = missingJobs.length;
  results.summary.multiChannelIssues = multiChannelIssues.length;
  results.missingJobs = missingJobs;
  results.multiChannelIssues = multiChannelIssues;

  // Check for duplicates in Discord
  const titleCompanyCounts = {};
  Object.values(results.channels).forEach(channel => {
    channel.jobs.forEach(job => {
      const key = `${job.title}||${job.company}`;
      titleCompanyCounts[key] = (titleCompanyCounts[key] || 0) + 1;
    });
  });

  const duplicates = Object.entries(titleCompanyCounts)
    .filter(([_, count]) => count > 1)
    .map(([key, count]) => {
      const [title, company] = key.split('||');
      return { title, company, count };
    });

  results.summary.duplicatesInDiscord = duplicates.length;
  results.duplicates = duplicates;

  await client.destroy();

  return results;
}

module.exports = {
  fetchChannelMessages,
  verifyDiscordPosts
};
