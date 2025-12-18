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

/**
 * Build Discord embed for a job posting
 * @param {Object} job - Job object
 * @returns {EmbedBuilder} Discord embed
 */
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
          autoArchiveDuration: 4320, // Archive after 3 days of inactivity
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
  postJobToForum
};
