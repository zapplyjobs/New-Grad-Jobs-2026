/**
 * Discord Job Posting Module
 * Handles all Discord embed building and forum posting operations
 */

const {
  EmbedBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  ChannelType
} = require('discord.js');
const fs = require('fs');
const path = require('path');
const { discordApiCall } = require('../utils/error-handler');
const { formatPostedDate, cleanJobDescription } = require('../utils/job-formatters');
const { generateJobId } = require('../../job-fetcher/utils');

// Load company data for tier detection
const companies = JSON.parse(fs.readFileSync(path.join(__dirname, '../../job-fetcher', 'companies.json'), 'utf8'));

/**
 * Generate tags for a job based on title, description, and company
 * @param {Object} job - Job object
 * @returns {Array<string>} Array of tag strings
 */
function generateTags(job) {
  const tags = [];
  const title = job.job_title.toLowerCase();
  const description = (job.job_description || '').toLowerCase();
  const company = job.employer_name;

  // Skip experience level tags entirely - they're redundant in role-specific channels
  // (Internships channel = all internships, New-Grad channel = all new-grad, etc.)

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

  // Technology/skill tags (limit to most relevant - check title first, then description)
  const techStack = {
    // High-priority keywords (title match preferred)
    'machine learning': 'ML', 'ai': 'AI', 'data science': 'DataScience',
    'ios': 'iOS', 'android': 'Android', 'mobile': 'Mobile',
    'frontend': 'Frontend', 'backend': 'Backend', 'fullstack': 'FullStack',
    'devops': 'DevOps', 'security': 'Security', 'blockchain': 'Blockchain',
    // Cloud platforms (only if in title or primary description)
    'aws': 'AWS', 'azure': 'Azure', 'gcp': 'GCP'
  };

  // Only match tags from title (more accurate than description)
  for (const [keyword, tag] of Object.entries(techStack)) {
    if (title.includes(keyword)) {
      tags.push(tag);
    }
  }

  // Limit to max 5 tags total to avoid clutter
  if (tags.length > 5) {
    tags.length = 5;
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

/**
 * Build Discord embed for a job posting
 * @param {Object} job - Job object
 * @param {Object} options - Optional metadata { channelName, channelJobNumber }
 * @returns {EmbedBuilder} Discord embed
 */
function buildJobEmbed(job, options = {}) {
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

  // Determine posted date display (show both Discord and Company dates if significantly different)
  const now = new Date();
  const companyDate = job.job_posted_at_datetime_utc ? new Date(job.job_posted_at_datetime_utc) : null;
  const daysDifference = companyDate ? Math.floor((now - companyDate) / (1000 * 60 * 60 * 24)) : 0;

  let postedValue;
  if (daysDifference > 7 && companyDate) {
    // Show both dates when >7 days apart (helps users understand job freshness)
    const discordDateStr = now.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    const companyDateStr = companyDate.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    postedValue = `Discord: ${discordDateStr}\nCompany: ${companyDateStr}`;
  } else {
    // Show single date if recent or no company date
    postedValue = formatPostedDate(job.job_posted_at_datetime_utc);
  }

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
      { name: '💰 Posted', value: postedValue, inline: true }
    );

  // Add tags field with hashtag formatting
  if (tags.length > 0) {
    embed.addFields({
      name: '🏷️ Tags',
      value: tags.map(tag => `#${tag}`).join(' '),
      inline: false
    });
  }

  // Add footer with job number only (no redundant date - already in Posted field)
  if (options.channelName && options.channelJobNumber) {
    embed.setFooter({
      text: `Job #${options.channelJobNumber} in #${options.channelName}`
    });
  }

  // Description field removed for cleaner, more concise job posts

  return embed;
}

/**
 * Build action row with apply button and subscription toggle
 * @param {Object} job - Job object
 * @returns {ActionRowBuilder} Discord action row
 */
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

/**
 * Get emoji for job based on category (NEW for text messages)
 * @param {Object} job - Job object
 * @returns {string} Emoji character
 */
function getJobEmoji(job) {
  const title = job.job_title.toLowerCase();
  const description = (job.job_description || '').toLowerCase();

  // AI/ML jobs
  if (title.includes('machine learning') || title.includes('ml engineer') ||
      title.includes('ai') || title.includes('deep learning')) {
    return '🤖';
  }

  // Data Science jobs
  if (title.includes('data scientist') || title.includes('data engineer') ||
      title.includes('data analyst') || title.includes('analytics')) {
    return '📊';
  }

  // Security jobs
  if (title.includes('security') || title.includes('infosec')) {
    return '🔒';
  }

  // Product jobs
  if (title.includes('product manager') || title.includes('pm ')) {
    return '📱';
  }

  // Default for software/tech jobs
  return '🏢';
}

/**
 * Format location string for text message (NEW for text messages)
 * @param {Object} job - Job object
 * @returns {string} Formatted location
 */
function formatLocation(job) {
  if (job._multipleLocations && job._multipleLocations.length > 1) {
    return job._multipleLocations.map(loc => loc.charAt(0).toUpperCase() + loc.slice(1)).join(', ');
  }

  if (job.job_city && job.job_city.toLowerCase() === 'remote') {
    return 'Remote';
  }

  const city = job.job_city || 'Not specified';
  const state = job.job_state || '';

  return state ? `${city}, ${state}` : city;
}

/**
 * Build text message content for job posting (NEW for text messages)
 * @param {Object} job - Job object
 * @returns {string} Formatted message text
 */
function buildJobMessage(job) {
  const emoji = getJobEmoji(job);
  const location = formatLocation(job);
  const postedDate = formatPostedDate(job.job_posted_at_datetime_utc);
  const tags = generateTags(job).map(t => `#${t}`).join(' ');

  // Clean and truncate description
  const description = job.job_description || '';
  const cleanedDescription = cleanJobDescription(description, job.description_format || 'unknown');
  const preview = cleanedDescription.substring(0, 200);
  const hasMore = cleanedDescription.length > 200;

  // Build message
  const message = [
    `${emoji} **${job.job_title}** @ **${job.employer_name}**`,
    '',
    `📍 ${location} | 💰 ${postedDate}`,
    `🏷️ ${tags}`,
    '',
    preview + (hasMore ? '...' : ''),
    hasMore ? '... Read More' : '',
    '',
    `🔗 [Apply Now](${job.job_apply_link})`
  ].filter(line => line !== '').join('\n');

  return message;
}

/**
 * Post a job to a Discord text channel (NEW for text messages)
 * @param {Object} job - Job object from API
 * @param {Object} channel - Discord channel object
 * @param {Object} options - Optional metadata { channelJobNumber }
 * @returns {Promise<Object>} Result object with success status and message ID
 */
async function postJobToChannel(job, channel, options = {}) {
  return discordApiCall(
    async () => {
      const jobId = generateJobId(job);

      // Build embed with channel info if provided
      const embedOptions = {
        channelName: channel.name,
        channelJobNumber: options.channelJobNumber
      };
      const embed = buildJobEmbed(job, embedOptions);
      const actionRow = buildActionRow(job);

      // Build message data (embed only, no text content)
      const messageData = {
        embeds: [embed]
      };

      // Only add components if actionRow has buttons
      if (actionRow.components.length > 0) {
        messageData.components = [actionRow];
      }

      // Post to text channel
      const message = await channel.send(messageData);

      console.log(`✅ Posted message: ${job.job_title} @ ${job.employer_name} in #${channel.name}`);

      return {
        success: true,
        messageId: message.id,
        channelId: channel.id,
        message: message
      };
    },
    `Post job ${job.job_title} @ ${job.employer_name}`
  ).catch(error => {
    console.error(`❌ Error posting job ${job.job_title}:`, error);
    return { success: false, error };
  });
}

/**
 * Post a job to a Discord forum channel with retry logic
 * @param {Object} job - Job object
 * @param {Channel} channel - Discord channel
 * @returns {Promise<{success: boolean, thread?: Object, message?: Object, error?: Error}>}
 */
async function postJobToForum(job, channel) {
  // Wrap Discord API call in retry logic
  return discordApiCall(
    async () => {
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
          autoArchiveDuration: 1440, // Archive after 1 day of inactivity (was 4320/3 days - hitting Discord's 1000 active thread limit)
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
    },
    `Post job ${job.job_title} @ ${job.employer_name}`
  ).catch(error => {
    console.error(`❌ Error posting job ${job.job_title}:`, error);
    return { success: false, error };
  });
}

module.exports = {
  generateTags,
  buildJobEmbed,
  buildActionRow,
  postJobToForum,
  // NEW for text messages
  getJobEmoji,
  formatLocation,
  buildJobMessage,
  postJobToChannel
};
