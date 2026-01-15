# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T09:28:50.985Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T09:28:32.918Z] ========================================
[2026-01-15T09:28:32.920Z] Discord Bot Execution Log
[2026-01-15T09:28:32.920Z] Environment: GitHub Actions
[2026-01-15T09:28:32.920Z] Node Version: v20.19.6
[2026-01-15T09:28:32.920Z] ========================================
[2026-01-15T09:28:32.920Z] Environment Variables Check:
[2026-01-15T09:28:32.920Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T09:28:32.920Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.920Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T09:28:32.921Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T09:28:32.921Z] 
Multi-Channel Configuration:
[2026-01-15T09:28:32.921Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.921Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.921Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.921Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.921Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.921Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.921Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.921Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.921Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T09:28:32.921Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T09:28:32.922Z] 
Data Files Check:
[2026-01-15T09:28:32.922Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7461 bytes)
[2026-01-15T09:28:32.929Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 939009 bytes)
[2026-01-15T09:28:32.929Z] 
========================================
[2026-01-15T09:28:32.929Z] Starting Enhanced Discord Bot...
[2026-01-15T09:28:32.929Z] ========================================
[2026-01-15T09:28:33.458Z] [BOT] ✅ Loaded V2 database: 1754 jobs
[2026-01-15T09:28:33.898Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T09:28:33.899Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T09:28:33.899Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T09:28:34.008Z] [BOT] ✅ Loaded pending queue: 2723 total (2703 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science at TikTok
[2026-01-15T09:28:34.011Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T09:28:34.011Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T09:28:34.012Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T09:28:34.012Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T09:28:34.013Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-15T09:28:34.013Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T09:28:34.015Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-01-15T09:28:34.016Z] [BOT] 📍 [ROUTING] "Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science" @ ORG_1bb6fcfb
[2026-01-15T09:28:34.016Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T09:28:34.033Z] [BOT ERROR] (node:2394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T09:28:34.186Z] [BOT] ✅ Created forum post: 🏢 Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Mas in #💻・tech-jobs
[2026-01-15T09:28:34.186Z] [BOT] ✅ Industry: Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science @ ORG_1bb6fcfb
[2026-01-15T09:28:35.860Z] [BOT] ✅ Created forum post: 🏢 Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Mas in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T09:28:37.361Z] [BOT] 💾 Marked as posted: Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science @ ORG_1bb6fcfb (instance #1)
[2026-01-15T09:28:37.362Z] [BOT] 💾 BEFORE ARCHIVING: 1755 jobs in database
[2026-01-15T09:28:37.363Z] [BOT] ✅ No jobs to archive (all 1755 jobs within 7-day window)
[2026-01-15T09:28:37.380Z] [BOT] 💾 Saved posted_jobs.json: 1755 active jobs
[2026-01-15T09:28:37.380Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T09:28:37.380Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Arch - AI/ML Infrastructure" @ ORG_1bb6fcfb
[2026-01-15T09:28:37.381Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T09:28:37.456Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Arch - AI/ML Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Data Arch - AI/ML Infrastructure @ TikTok',
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
[2026-01-15T09:28:37.456Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Data Arch - AI/ML Infrastructure
⚠️  Channel full error count: 1/5
[2026-01-15T09:28:39.039Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Arch - AI/ML Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Data Arch - AI/ML Infrastructure @ TikTok',
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
[2026-01-15T09:28:39.040Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T09:28:40.541Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Data Arch - Shorttext Rec" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T09:28:40.628Z] [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Data Arch - Shorttext Rec: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Software Engineer - Data Arch - Shorttext Rec @ TikTok',
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
[2026-01-15T09:28:40.628Z] [BOT] ❌ Industry post failed: Graduate Software Engineer - Data Arch - Shorttext Rec
⚠️  Channel full error count: 2/5
[2026-01-15T09:28:42.232Z] [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Data Arch - Shorttext Rec: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Software Engineer - Data Arch - Shorttext Rec @ TikTok',
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
[2026-01-15T09:28:42.232Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T09:28:43.734Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Global CRM - 2026 Start','BS/MS" @ ORG_1bb6fcfb
[2026-01-15T09:28:43.734Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T09:28:43.828Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global CRM - 2026 Start','BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: "🏢 Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ TikTok",
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
[2026-01-15T09:28:43.829Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Global CRM - 2026 Start','BS/MS
⚠️  Channel full error count: 3/5
[2026-01-15T09:28:45.449Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global CRM - 2026 Start','BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: "🏢 Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ TikTok",
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
[2026-01-15T09:28:45.449Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T09:28:46.951Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Experimentation and Evaluation" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T09:28:47.062Z] [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Experimentation and Evaluation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Software Engineer - Experimentation and Evaluation @ TikTok',
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
[2026-01-15T09:28:47.062Z] [BOT] ❌ Industry post failed: Graduate Software Engineer - Experimentation and Evaluation
⚠️  Channel full error count: 4/5
[2026-01-15T09:28:48.672Z] [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Experimentation and Evaluation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Software Engineer - Experimentation and Evaluation @ TikTok',
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
[2026-01-15T09:28:48.673Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T09:28:50.174Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-15T09:28:50.174Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T09:28:50.331Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-15T09:28:50.331Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS
[2026-01-15T09:28:50.332Z] [BOT] ⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
[2026-01-15T09:28:50.332Z] [BOT] ❌ Exiting early to avoid timeout. 1 jobs posted, 8 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T09:28:50.332Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T09:28:50.333Z] [BOT] Total attempts: 11
   Successful: 2
   Failed: 9
   Skipped: 0
[2026-01-15T09:28:50.333Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T09:28:50.333Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-15T09:28:50.333Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-15T09:28:50.333Z] [BOT] [STATS] Channel stats saved
[2026-01-15T09:28:50.333Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T09:28:50.345Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Arch - AI/ML Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Data Arch - AI/ML Infrastructure
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Data Arch - AI/ML Infrastructure: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Data Arch - Shorttext Rec: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Software Engineer - Data Arch - Shorttext Rec
- [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Data Arch - Shorttext Rec: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global CRM - 2026 Start','BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Global CRM - 2026 Start','BS/MS
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Global CRM - 2026 Start','BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Experimentation and Evaluation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Software Engineer - Experimentation and Evaluation
- [BOT ERROR] ❌ Error posting job Graduate Software Engineer - Experimentation and Evaluation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- [BOT] ❌ Exiting early to avoid timeout. 1 jobs posted, 8 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*