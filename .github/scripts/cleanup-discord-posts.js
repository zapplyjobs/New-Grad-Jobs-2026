#!/usr/bin/env node

/**
 * Discord Channel Cleanup Script (FIXED VERSION)
 * Deletes job posts from specified Discord channels
 *
 * FIXES:
 * 1. Fetches ALL archived threads (not just 100)
 * 2. Adds monitoring for thread counts before/after
 * 3. Better logging for debugging
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
  hr: process.env.DISCORD_HR_CHANNEL_ID,
  ai: process.env.DISCORD_AI_CHANNEL_ID,
  'data-science': process.env.DISCORD_DS_CHANNEL_ID
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
 * @returns {Object} Cleanup statistics
 */
async function cleanupChannel(channel, timeFilter = {}) {
  console.log(`\n🔍 Scanning channel: ${channel.name} (${channel.id})`);

  let deletedCount = 0;
  let scannedCount = 0;
  let skippedCount = 0;

  try {
    // Fetch active threads
    const threads = await channel.threads.fetchActive();
    const allThreads = threads.threads;
    const initialActiveCount = allThreads.size;

    console.log(`📊 Initial scan: ${initialActiveCount} active threads`);

    // Fetch ALL archived threads (paginate through all pages)
    let hasMore = true;
    let fetchedArchived = 0;
    let lastThreadId = null;

    console.log('🔄 Fetching archived threads...');
    while (hasMore) {
      const options = { limit: 100 };
      if (lastThreadId) {
        options.before = lastThreadId;
      }

      const archivedThreads = await channel.threads.fetchArchived(options);
      archivedThreads.threads.forEach((thread, id) => {
        allThreads.set(id, thread);
        lastThreadId = id;
      });

      fetchedArchived += archivedThreads.threads.size;
      hasMore = archivedThreads.hasMore;

      if (archivedThreads.threads.size > 0) {
        console.log(`   📦 Fetched ${archivedThreads.threads.size} archived threads (total: ${fetchedArchived})`);
      }

      // Discord rate limiting: wait between pagination requests
      if (hasMore) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    console.log(`📋 Total threads in channel: ${allThreads.size} (${initialActiveCount} active + ${fetchedArchived} archived)`);
    console.log('');

    // Process threads
    for (const [threadId, thread] of allThreads) {
      scannedCount++;

      // Check if thread is within time range
      // For "newer than" mode (HOURS_AGO): delete if created AFTER cutoff
      if (timeFilter.newerThan && thread.createdTimestamp < timeFilter.newerThan.getTime()) {
        skippedCount++;
        continue;
      }

      // For "older than" mode (OLDER_THAN_HOURS): delete if created BEFORE cutoff
      if (timeFilter.olderThan && thread.createdTimestamp > timeFilter.olderThan.getTime()) {
        skippedCount++;
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

  console.log('');
  console.log(`📊 Channel summary:`);
  console.log(`   Total threads: ${scannedCount}`);
  console.log(`   Skipped (too new): ${skippedCount}`);
  console.log(`   Deleted: ${deletedCount}`);
  console.log(`   Remaining: ${scannedCount - deletedCount}`);

  return {
    scanned: scannedCount,
    deleted: deletedCount,
    skipped: skippedCount,
    remaining: scannedCount - deletedCount
  };
}

/**
 * Main cleanup function
 */
async function cleanup() {
  console.log('🚀 Discord Channel Cleanup Script (FIXED VERSION)');
  console.log('==================================\n');

  if (!DISCORD_TOKEN) {
    console.error('❌ Error: DISCORD_TOKEN is required');
    process.exit(1);
  }

  if (!DISCORD_GUILD_ID) {
    console.log('⚠️  DISCORD_GUILD_ID not set - will auto-detect from bot guilds');
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

  // Auto-detect guild if not specified
  let guild;
  if (DISCORD_GUILD_ID) {
    guild = await client.guilds.fetch(DISCORD_GUILD_ID);
  } else {
    console.log('🔍 Auto-detecting guild (bot is in 1 guild(s))');
    const guilds = await client.guilds.fetch();
    if (guilds.size === 0) {
      console.error('❌ Error: Bot is not in any guilds');
      process.exit(1);
    }
    guild = guilds.first();
  }

  console.log(`📍 Guild: ${guild.name} (${guild.id})\n`);

  // Clean each channel
  let totalDeleted = 0;
  let totalScanned = 0;
  let totalRemaining = 0;
  const channelStats = [];

  for (const { name, id } of channelsToClean) {
    try {
      const channel = await guild.channels.fetch(id);
      if (!channel) {
        console.log(`⚠️  Channel ${id} not found, skipping`);
        continue;
      }

      const stats = await cleanupChannel(channel, timeFilter);
      totalDeleted += stats.deleted;
      totalScanned += stats.scanned;
      totalRemaining += stats.remaining;

      channelStats.push({
        name: channel.name,
        ...stats
      });

    } catch (error) {
      console.error(`❌ Error processing channel ${id}: ${error.message}`);
    }
  }

  // Summary
  console.log('\n==================================');
  console.log('📊 CLEANUP SUMMARY');
  console.log('==================================');
  console.log(`Channels processed: ${channelsToClean.length}`);
  console.log(`Total threads scanned: ${totalScanned}`);
  console.log(`Total threads deleted: ${totalDeleted}`);
  console.log(`Total threads remaining: ${totalRemaining}`);
  if (DRY_RUN) {
    console.log('🔍 DRY RUN: No actual deletions were made');
  }
  console.log('');
  console.log('📊 PER-CHANNEL BREAKDOWN:');
  channelStats.forEach(stat => {
    console.log(`   ${stat.name}: ${stat.remaining} remaining (deleted ${stat.deleted} of ${stat.scanned})`);
  });
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
