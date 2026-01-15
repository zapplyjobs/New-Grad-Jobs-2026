# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T14:57:03.358Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T14:56:47.327Z] ========================================
[2026-01-15T14:56:47.329Z] Discord Bot Execution Log
[2026-01-15T14:56:47.329Z] Environment: GitHub Actions
[2026-01-15T14:56:47.329Z] Node Version: v20.19.6
[2026-01-15T14:56:47.329Z] ========================================
[2026-01-15T14:56:47.329Z] Environment Variables Check:
[2026-01-15T14:56:47.329Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T14:56:47.329Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.329Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T14:56:47.329Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T14:56:47.329Z] 
Multi-Channel Configuration:
[2026-01-15T14:56:47.329Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.330Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.330Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.330Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.330Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.330Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.330Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.330Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.330Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T14:56:47.330Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T14:56:47.330Z] 
Data Files Check:
[2026-01-15T14:56:47.330Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7574 bytes)
[2026-01-15T14:56:47.337Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 940359 bytes)
[2026-01-15T14:56:47.337Z] 
========================================
[2026-01-15T14:56:47.337Z] Starting Enhanced Discord Bot...
[2026-01-15T14:56:47.337Z] ========================================
[2026-01-15T14:56:47.859Z] [BOT] ✅ Loaded V2 database: 1757 jobs
[2026-01-15T14:56:48.597Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T14:56:48.597Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T14:56:48.597Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T14:56:48.712Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS at TikTok
[2026-01-15T14:56:48.714Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T14:56:48.715Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T14:56:48.715Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T14:56:48.716Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T14:56:48.716Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-15T14:56:48.716Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T14:56:48.720Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-15T14:56:48.721Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS" @ ORG_1bb6fcfb
[2026-01-15T14:56:48.721Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T14:56:48.738Z] [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T14:56:48.865Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ TikTok',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-15T14:56:48.865Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS
⚠️  Channel full error count: 1/5
[2026-01-15T14:56:50.514Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ TikTok',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-15T14:56:50.514Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T14:56:52.015Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate Online Architecture-2026 Start - PhD" @ ORG_1bb6fcfb
[2026-01-15T14:56:52.016Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T14:56:52.163Z] [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Research Engineer Graduate Online Architecture-2026 Start - PhD @ TikTok',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-15T14:56:52.163Z] [BOT] ❌ Industry post failed: Research Engineer Graduate Online Architecture-2026 Start - PhD
⚠️  Channel full error count: 2/5
[2026-01-15T14:56:53.813Z] [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Research Engineer Graduate Online Architecture-2026 Start - PhD @ TikTok',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-15T14:56:53.813Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-15T14:56:55.313Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer - Global CRM Platform" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T14:56:55.457Z] [BOT ERROR] ❌ Error posting job Frontend Software Engineer - Global CRM Platform: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Frontend Software Engineer - Global CRM Platform @ TikTok',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-15T14:56:55.457Z] [BOT] ❌ Industry post failed: Frontend Software Engineer - Global CRM Platform
⚠️  Channel full error count: 3/5
[2026-01-15T14:56:57.207Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer - Global CRM Platform @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T14:56:58.709Z] [BOT] 💾 Marked as posted: Frontend Software Engineer - Global CRM Platform @ ORG_1bb6fcfb (instance #1)
[2026-01-15T14:56:58.709Z] [BOT] 💾 BEFORE ARCHIVING: 1758 jobs in database
[2026-01-15T14:56:58.711Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T14:56:58.714Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-15T14:56:58.714Z] [BOT] ✅ Archiving complete: 3 archived, 1755 active
[2026-01-15T14:56:58.728Z] [BOT] 💾 Saved posted_jobs.json: 1755 active jobs
[2026-01-15T14:56:58.728Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T14:56:58.729Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Global SRE - 2026 Start" @ ORG_1bb6fcfb
[2026-01-15T14:56:58.729Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T14:56:58.907Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer Graduate - Global SRE - 2026 Start @ TikTok',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-15T14:56:58.908Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Global SRE - 2026 Start
⚠️  Channel full error count: 4/5
[2026-01-15T14:57:00.598Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:935:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer Graduate - Global SRE - 2026 Start @ TikTok',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-15T14:57:00.598Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T14:57:02.099Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate User Growth - 2026 Start - BS/MS" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T14:57:02.237Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate User Growth - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1364:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:866:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer Graduate User Growth - 2026 Start - BS/MS @ TikTok',
      auto_archive_duration: 1440,
      rate_limit_per_user: undefined,
      applied_tags: undefined,
      message: [Object]
    }
  },
  rawError: { message: 'Maximum number of active threads reached', code: 160006 },
  code: 160006,
  status: 400,
  method: 'POST',
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-15T14:57:02.238Z] [BOT] ❌ Industry post failed: Software Engineer Graduate User Growth - 2026 Start - BS/MS
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T14:57:02.238Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T14:57:02.238Z] [BOT] Total attempts: 9
   Successful: 1
   Failed: 8
   Skipped: 0
[2026-01-15T14:57:02.239Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T14:57:02.239Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
     1. #🌉・san-francisco: 1 posts
[2026-01-15T14:57:02.239Z] [BOT] [STATS] Channel stats saved
[2026-01-15T14:57:02.239Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T14:57:02.253Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2368) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineer Graduate Online Architecture-2026 Start - PhD
- [BOT ERROR] ❌ Error posting job Research Engineer Graduate Online Architecture-2026 Start - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Frontend Software Engineer - Global CRM Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Frontend Software Engineer - Global CRM Platform
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Global SRE - 2026 Start
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global SRE - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate User Growth - 2026 Start - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate User Growth - 2026 Start - BS/MS
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*