#!/usr/bin/env node

/**
 * Forum Channel Posting Utilities
 *
 * Extracted from enhanced-discord-bot.js (lines 1150-1228)
 * Handles posting jobs to Discord forum channels with tags and threading
 */

const { ChannelType } = require('discord.js');
const { generateJobId } = require('../../job-fetcher/utils');
const { buildJobEmbed, buildActionRow, generateTags } = require('./poster');

/**
 * Find company emoji from companies.json
 * @param {string} companyName - Company name to search for
 * @param {Object} companies - Companies data structure
 * @returns {string} - Company emoji or default 🏢
 */
function findCompanyEmoji(companyName, companies) {
  const companyCategories = [
    'faang_plus',
    'unicorn_startups',
    'fintech',
    'gaming',
    'top_tech',
    'enterprise_saas'
  ];

  for (const category of companyCategories) {
    if (companies[category]) {
      const company = companies[category].find(c => c.name === companyName);
      if (company && company.emoji) {
        return company.emoji;
      }
    }
  }

  return '🏢'; // Default emoji
}

/**
 * Post job to forum channel (or regular channel as fallback)
 * @param {Object} job - Job object
 * @param {Object} channel - Discord channel object
 * @param {Object} companies - Companies data for emoji lookup
 * @returns {Object} - { success, thread/message, error }
 */
async function postJobToForum(job, channel, companies) {
  try {
    const jobId = generateJobId(job);
    const embed = buildJobEmbed(job);
    const actionRow = buildActionRow(job);
    const tags = generateTags(job);

    // Find company emoji if available
    const companyEmoji = findCompanyEmoji(job.employer_name, companies);

    // Create forum post title with company emoji
    // Format: [emoji] Job Title @ Company Name
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
        autoArchiveDuration: 1440, // Archive after 1 day of inactivity (was 4320/3 days - hitting Discord's 1000 active thread limit)
        reason: `New job posting: ${job.job_title} at ${job.employer_name}`
      };

      // Add tags if any were found
      if (appliedTags.length > 0) {
        threadOptions.appliedTags = appliedTags;
      }

      const thread = await channel.threads.create(threadOptions);

      console.log(`✅ Created forum post: ${threadName} in #${channel.name}`);
      return { success: true, thread, jobId };
    } else {
      // Fallback for regular text channels (legacy support)
      const message = await channel.send(messageData);
      console.log(`✅ Posted message: ${job.job_title} at ${job.employer_name} in #${channel.name}`);
      return { success: true, message, jobId };
    }
  } catch (error) {
    console.error(`❌ Error posting job ${job.job_title}:`, error);
    return { success: false, error };
  }
}

module.exports = {
  findCompanyEmoji,
  postJobToForum
};
