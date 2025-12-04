#!/usr/bin/env node

/**
 * Discord Channel Cleanup Script
 * Deletes job posts from specified Discord channels
 *
 * Usage:
 *   - Set DELETE_ALL_CHANNELS=true to clean all category channels
 *   - Set specific CHANNEL_IDS (comma-separated) to clean specific channels
 *   - Set HOURS_AGO to delete posts from last N hours (newer posts)
 *   - Set OLDER_THAN_HOURS to delete posts older than N hours (older posts) - e.g., 168 for 7 days
 *   - Set DRY_RUN=true to preview without deleting
 *   - Note: Cannot use both HOURS_AGO and OLDER_THAN_HOURS at the same time
 */

const { Client, GatewayIntentBits } = require('discord.js');

// Configuration from environment variables
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;
const DELETE_ALL_CHANNELS = process.env.DELETE_ALL_CHANNELS === 'true';
const CHANNEL_IDS = process.env.CHANNEL_IDS ? process.env.CHANNEL_IDS.split(',').map(id => id.trim()) : [];
const HOURS_AGO = process.env.HOURS_AGO ? parseInt(process.env.HOURS_AGO) : null;
const OLDER_THAN_HOURS = process.env.OLDER_THAN_HOURS ? parseInt(process.env.OLDER_THAN_HOURS) : null;
const DRY_RUN = process.env.DRY_RUN === 'true';

// Category channel IDs (for DELETE_ALL_CHANNELS mode)
const CATEGORY_CHANNELS = {
  tech: process.env.DISCORD_TECH_CHANNEL_ID,
  sales: process.env.DISCORD_SALES_CHANNEL_ID,
  marketing: process.env.DISCORD_MARKETING_CHANNEL_ID,
  finance: process.env.DISCORD_FINANCE_CHANNEL_ID,
  healthcare: process.env.DISCORD_HEALTHCARE_CHANNEL_ID,
  product: process.env.DISCORD_PRODUCT_CHANNEL_ID,
  'supply-chain': process.env.DISCORD_SUPPLY_CHANNEL_ID,
  'project-management': process.env.DISCORD_PM_CHANNEL_ID,
  hr: process.env.DISCORD_HR_CHANNEL_ID
};

// Create Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

/**
 * Delete messages from a channel
 * @param {Object} channel - Discord channel object
 * @param {Object} timeFilter - Time filtering options
 * @param {Date|null} timeFilter.newerThan - Delete posts newer than this time
 * @param {Date|null} timeFilter.olderThan - Delete posts older than this time
 * @returns {number} Number of messages deleted
 */
async function cleanupChannel(channel, timeFilter = {}) {
  console.log(`\n🔍 Scanning channel: ${channel.name} (${channel.id})`);

  let deletedCount = 0;
  let scannedCount = 0;

  try {
    // Fetch threads (forum posts)
    const threads = await channel.threads.fetchActive();
    const allThreads = threads.threads;

    // Also fetch archived threads if needed
    const olderThan = timeFilter.olderThan;
    if (!olderThan || (Date.now() - olderThan.getTime()) > 7 * 24 * 60 * 60 * 1000) {
      const archivedThreads = await channel.threads.fetchArchived({ limit: 100 });
      archivedThreads.threads.forEach((thread, id) => {
        allThreads.set(id, thread);
      });
    }

    console.log(`📋 Found ${allThreads.size} threads in channel`);

    for (const [threadId, thread] of allThreads) {
      scannedCount++;

      // Check if thread is within time range
      // For "newer than" mode (HOURS_AGO): delete if created AFTER cutoff
      if (timeFilter.newerThan && thread.createdTimestamp < timeFilter.newerThan.getTime()) {
        continue;
      }

      // For "older than" mode (OLDER_THAN_HOURS): delete if created BEFORE cutoff
      if (timeFilter.olderThan && thread.createdTimestamp > timeFilter.olderThan.getTime()) {
        continue;
      }

      const createdDate = new Date(thread.createdTimestamp);
      console.log(`   📌 Thread: "${thread.name}" (created ${createdDate.toLocaleString()})`);

      if (DRY_RUN) {
        console.log(`   🔍 [DRY RUN] Would delete thread`);
        deletedCount++;
      } else {
        try {
          await thread.delete();
          console.log(`   ✅ Deleted thread`);
          deletedCount++;

          // Rate limit: Wait 1 second between deletions
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          console.log(`   ❌ Failed to delete: ${error.message}`);
        }
      }
    }

  } catch (error) {
    console.error(`❌ Error scanning channel: ${error.message}`);
  }

  console.log(`📊 Channel summary: Scanned ${scannedCount}, Deleted ${deletedCount}`);
  return deletedCount;
}

/**
 * Main cleanup function
 */
async function cleanup() {
  console.log('🚀 Discord Channel Cleanup Script');
  console.log('==================================\n');

  if (!DISCORD_TOKEN) {
    console.error("❌ Error: DISCORD_TOKEN is required");
    process.exit(1);
  }

  if (!DISCORD_GUILD_ID) {
    console.log("⚠️  DISCORD_GUILD_ID not set - will auto-detect from bot guilds
");
  }

  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE: No messages will be deleted\n');
  }

  // Determine which channels to clean
  let channelsToClean = [];
  if (DELETE_ALL_CHANNELS) {
    channelsToClean = Object.entries(CATEGORY_CHANNELS)
      .filter(([_, id]) => id)
      .map(([name, id]) => ({ name, id }));
    console.log(`🔄 Cleaning ALL category channels (${channelsToClean.length} channels)\n`);
  } else if (CHANNEL_IDS.length > 0) {
    channelsToClean = CHANNEL_IDS.map(id => ({ name: 'custom', id }));
    console.log(`🔄 Cleaning specific channels: ${CHANNEL_IDS.join(', ')}\n`);
  } else {
    console.error('❌ Error: Either DELETE_ALL_CHANNELS or CHANNEL_IDS must be set');
    process.exit(1);
  }

  // Calculate time filters
  const timeFilter = {};

  if (HOURS_AGO && OLDER_THAN_HOURS) {
    console.error('❌ Error: Cannot use both HOURS_AGO and OLDER_THAN_HOURS at the same time');
    process.exit(1);
  }

  if (HOURS_AGO) {
    timeFilter.newerThan = new Date(Date.now() - (HOURS_AGO * 60 * 60 * 1000));
    console.log(`⏰ Deleting posts from last ${HOURS_AGO} hours (created after ${timeFilter.newerThan.toLocaleString()})\n`);
  } else if (OLDER_THAN_HOURS) {
    timeFilter.olderThan = new Date(Date.now() - (OLDER_THAN_HOURS * 60 * 60 * 1000));
    console.log(`⏰ Deleting posts older than ${OLDER_THAN_HOURS} hours (created before ${timeFilter.olderThan.toLocaleString()})\n`);
  } else {
    console.log(`⏰ Deleting ALL posts (no time limit)\n`);
  }

  // Login to Discord
  console.log('🔐 Logging in to Discord...');
  await client.login(DISCORD_TOKEN);

  // Wait for ready event
  await new Promise(resolve => {
    client.once('ready', () => {
      console.log(`✅ Logged in as ${client.user.tag}\n`);
      resolve();
    });
  });

  // Fetch guild (auto-detect if GUILD_ID not provided)
  let guild;
  if (DISCORD_GUILD_ID) {
    guild = await client.guilds.fetch(DISCORD_GUILD_ID);
  } else {
    // Auto-detect: use first guild bot is member of
    if (client.guilds.cache.size === 0) {
      console.error('❌ Error: Bot is not a member of any guilds');
      process.exit(1);
    }
    guild = client.guilds.cache.first();
    console.log(`🔍 Auto-detected guild (bot is in ${client.guilds.cache.size} guild(s))`);
  }
  console.log(`📍 Guild: ${guild.name} (${guild.id})
`);

  // Clean each channel
  let totalDeleted = 0;
  for (const { name, id } of channelsToClean) {
    try {
      const channel = await guild.channels.fetch(id);
      if (!channel) {
        console.log(`⚠️  Channel ${id} not found, skipping`);
        continue;
      }

      const deleted = await cleanupChannel(channel, timeFilter);
      totalDeleted += deleted;

    } catch (error) {
      console.error(`❌ Error processing channel ${id}: ${error.message}`);
    }
  }

  // Summary
  console.log('\n==================================');
  console.log('📊 CLEANUP SUMMARY');
  console.log('==================================');
  console.log(`Channels processed: ${channelsToClean.length}`);
  console.log(`Total posts deleted: ${totalDeleted}`);
  if (DRY_RUN) {
    console.log('🔍 DRY RUN: No actual deletions were made');
  }
  console.log('==================================\n');

  client.destroy();
  process.exit(0);
}

// Handle errors
process.on('unhandledRejection', error => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run cleanup
cleanup();
