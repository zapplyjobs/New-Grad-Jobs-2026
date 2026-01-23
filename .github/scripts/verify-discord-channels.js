#!/usr/bin/env node

/**
 * Discord Channel Health Check Script
 *
 * Verifies that all expected Discord channels exist and are functioning correctly.
 * Checks recent message activity to ensure jobs are being posted.
 *
 * Usage:
 *   node .github/scripts/verify-discord-channels.js
 *
 * Environment Variables:
 *   - DISCORD_TOKEN: Discord bot token
 *   - DISCORD_GUILD_ID: Discord server ID
 *   - Board-specific channel IDs (from board-types.js)
 *
 * Output:
 *   - Console report of channel health
 *   - Exit code 0 if all checks pass, 1 if critical issues found
 */

const { Client, GatewayIntentBits } = require('discord.js');
const { getBoardConfig, BOARD_TYPES } = require('./src/board-types');

// Configuration
const TOKEN = process.env.DISCORD_TOKEN;
const GUILD_ID = process.env.DISCORD_GUILD_ID;
const BOARD_TYPE = process.env.BOARD_TYPE || BOARD_TYPES.NEW_GRAD;

// Health check thresholds
const HOURS_TO_CHECK = 24;
const MIN_MESSAGES_WARNING = 1;  // Warn if channel has less than 1 message in 24h
const MIN_MESSAGES_CRITICAL = 0;  // Critical if channel has 0 messages in 24h

/**
 * Get expected channel IDs from environment variables
 */
function getExpectedChannels() {
  const boardConfig = getBoardConfig(BOARD_TYPE);
  const channels = [];

  if (boardConfig.channelMode === 'env') {
    // Load from environment variables
    boardConfig.industryChannels.forEach(ch => {
      const channelId = process.env[ch.envVar];
      if (channelId) {
        channels.push({
          id: channelId,
          name: ch.key,
          type: 'industry',
          envVar: ch.envVar,
          description: ch.description
        });
      }
    });

    boardConfig.locationChannels.forEach(ch => {
      const channelId = process.env[ch.envVar];
      if (channelId) {
        channels.push({
          id: channelId,
          name: ch.key,
          type: 'location',
          envVar: ch.envVar,
          description: ch.cities.join(', ')
        });
      }
    });

    boardConfig.categoryChannels.forEach(ch => {
      const channelId = process.env[ch.envVar];
      if (channelId) {
        channels.push({
          id: channelId,
          name: ch.key,
          type: 'category',
          envVar: ch.envVar,
          description: ch.description
        });
      }
    });
  }

  return channels;
}

/**
 * Check if channel exists and is accessible
 */
async function verifyChannelExists(client, channelInfo) {
  try {
    const channel = await client.channels.fetch(channelInfo.id);
    return {
      ...channelInfo,
      exists: true,
      channelType: channel.type,
      accessible: true,
      discordName: channel.name
    };
  } catch (error) {
    return {
      ...channelInfo,
      exists: false,
      accessible: false,
      error: error.message
    };
  }
}

/**
 * Get recent message count for a channel
 */
async function getRecentMessageCount(client, channelId, hours = 24) {
  try {
    const channel = await client.channels.fetch(channelId);
    if (!channel || !channel.isTextBased()) {
      return { count: 0, error: 'Not a text channel' };
    }

    const cutoffTime = Date.now() - (hours * 60 * 60 * 1000);
    let messageCount = 0;
    let lastMessageId = null;
    let hasMore = true;

    // Fetch messages in batches (Discord API limit: 100 per request)
    while (hasMore && messageCount < 1000) {  // Cap at 1000 to avoid rate limits
      const options = { limit: 100 };
      if (lastMessageId) {
        options.before = lastMessageId;
      }

      const messages = await channel.messages.fetch(options);
      if (messages.size === 0) {
        hasMore = false;
        break;
      }

      for (const message of messages.values()) {
        if (message.createdTimestamp >= cutoffTime) {
          messageCount++;
        } else {
          hasMore = false;
          break;
        }
      }

      lastMessageId = messages.last()?.id;
      if (messages.size < 100) {
        hasMore = false;
      }
    }

    return { count: messageCount, error: null };
  } catch (error) {
    return { count: 0, error: error.message };
  }
}

/**
 * Generate health report
 */
function generateReport(results, messageStats) {
  console.log('\n' + '='.repeat(80));
  console.log('Discord Channel Health Check Report');
  console.log('Board Type:', BOARD_TYPE);
  console.log('Generated:', new Date().toISOString());
  console.log('='.repeat(80) + '\n');

  // Summary statistics
  const totalExpected = results.length;
  const totalFound = results.filter(r => r.exists).length;
  const totalMissing = totalExpected - totalFound;
  const totalWithActivity = messageStats.filter(s => s.count > 0).length;
  const totalInactive = messageStats.filter(s => s.count === 0 && !s.error).length;

  console.log('📊 Summary:');
  console.log(`  Expected Channels: ${totalExpected}`);
  console.log(`  Found & Accessible: ${totalFound}`);
  console.log(`  Missing: ${totalMissing}`);
  console.log(`  Active (${HOURS_TO_CHECK}h): ${totalWithActivity}`);
  console.log(`  Inactive: ${totalInactive}`);
  console.log('');

  // Missing channels (CRITICAL)
  const missingChannels = results.filter(r => !r.exists);
  if (missingChannels.length > 0) {
    console.log('🚨 CRITICAL: Missing Channels');
    missingChannels.forEach(ch => {
      console.log(`  ❌ ${ch.name} (${ch.type})`);
      console.log(`     Env Var: ${ch.envVar}`);
      console.log(`     ID: ${ch.id}`);
      console.log(`     Error: ${ch.error}`);
      console.log('');
    });
  }

  // Inactive channels (WARNING)
  const inactiveChannels = messageStats.filter(s => s.count === 0 && !s.error);
  if (inactiveChannels.length > 0) {
    console.log(`⚠️  WARNING: Channels with No Activity (${HOURS_TO_CHECK}h)`);
    inactiveChannels.forEach(stat => {
      const channel = results.find(r => r.id === stat.channelId);
      console.log(`  ⚡ ${channel?.name || stat.channelId} (${channel?.type || 'unknown'})`);
      console.log(`     Discord Name: ${channel?.discordName || 'N/A'}`);
      console.log(`     Messages: ${stat.count}`);
      console.log('');
    });
  }

  // Active channels (SUCCESS)
  const activeChannels = messageStats.filter(s => s.count > 0);
  if (activeChannels.length > 0) {
    console.log(`✅ Active Channels (${HOURS_TO_CHECK}h)`);

    // Sort by message count descending
    activeChannels.sort((a, b) => b.count - a.count);

    activeChannels.forEach(stat => {
      const channel = results.find(r => r.id === stat.channelId);
      const indicator = stat.count >= MIN_MESSAGES_WARNING ? '✓' : '⚠';
      console.log(`  ${indicator} ${channel?.name || stat.channelId} (${channel?.type || 'unknown'})`);
      console.log(`     Discord Name: ${channel?.discordName || 'N/A'}`);
      console.log(`     Messages: ${stat.count}`);
    });
    console.log('');
  }

  // Channel errors
  const errors = messageStats.filter(s => s.error);
  if (errors.length > 0) {
    console.log('⚠️  Errors During Message Count:');
    errors.forEach(stat => {
      const channel = results.find(r => r.id === stat.channelId);
      console.log(`  ⚠ ${channel?.name || stat.channelId}`);
      console.log(`     Error: ${stat.error}`);
    });
    console.log('');
  }

  // Overall health status
  console.log('='.repeat(80));
  if (missingChannels.length > 0) {
    console.log('❌ HEALTH CHECK FAILED: Missing channels detected');
    return 1;
  } else if (totalInactive > totalExpected * 0.5) {
    console.log('⚠️  HEALTH CHECK WARNING: >50% of channels inactive');
    return 0;  // Don't fail, just warn
  } else {
    console.log('✅ HEALTH CHECK PASSED: All channels operational');
    return 0;
  }
}

/**
 * Main execution
 */
async function main() {
  // Validate required environment variables
  if (!TOKEN) {
    console.error('❌ ERROR: DISCORD_TOKEN environment variable not set');
    process.exit(1);
  }

  if (!GUILD_ID) {
    console.error('❌ ERROR: DISCORD_GUILD_ID environment variable not set');
    process.exit(1);
  }

  console.log('🔍 Starting Discord Channel Health Check...');
  console.log(`   Board Type: ${BOARD_TYPE}`);
  console.log(`   Guild ID: ${GUILD_ID}`);
  console.log('');

  // Get expected channels
  const expectedChannels = getExpectedChannels();
  if (expectedChannels.length === 0) {
    console.error('❌ ERROR: No expected channels found. Check environment variables.');
    process.exit(1);
  }

  console.log(`📋 Expected Channels: ${expectedChannels.length}`);
  console.log('');

  // Initialize Discord client
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages
    ]
  });

  try {
    // Login to Discord
    console.log('🔐 Logging in to Discord...');
    await client.login(TOKEN);
    console.log('✅ Connected to Discord');
    console.log('');

    // Verify each channel exists
    console.log('🔍 Verifying channels...');
    const verificationResults = await Promise.all(
      expectedChannels.map(ch => verifyChannelExists(client, ch))
    );
    console.log('✅ Channel verification complete');
    console.log('');

    // Get message counts for existing channels
    console.log(`📊 Checking message activity (last ${HOURS_TO_CHECK}h)...`);
    const existingChannels = verificationResults.filter(r => r.exists);
    const messageStats = await Promise.all(
      existingChannels.map(async ch => {
        const stats = await getRecentMessageCount(client, ch.id, HOURS_TO_CHECK);
        return {
          channelId: ch.id,
          count: stats.count,
          error: stats.error
        };
      })
    );
    console.log('✅ Message activity check complete');
    console.log('');

    // Generate and display report
    const exitCode = generateReport(verificationResults, messageStats);

    // Cleanup
    await client.destroy();
    process.exit(exitCode);

  } catch (error) {
    console.error('❌ ERROR:', error.message);
    console.error(error.stack);
    await client.destroy();
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { main, getExpectedChannels, verifyChannelExists, getRecentMessageCount };
