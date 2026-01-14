# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T17:27:35.873Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T17:27:11.787Z] ========================================
[2026-01-14T17:27:11.789Z] Discord Bot Execution Log
[2026-01-14T17:27:11.789Z] Environment: GitHub Actions
[2026-01-14T17:27:11.789Z] Node Version: v20.19.6
[2026-01-14T17:27:11.789Z] ========================================
[2026-01-14T17:27:11.789Z] Environment Variables Check:
[2026-01-14T17:27:11.789Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T17:27:11.789Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.789Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T17:27:11.790Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T17:27:11.790Z] 
Multi-Channel Configuration:
[2026-01-14T17:27:11.790Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.790Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.790Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.790Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.790Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.790Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.790Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.790Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.790Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T17:27:11.790Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T17:27:11.790Z] 
Data Files Check:
[2026-01-14T17:27:11.791Z] .github/data/new_jobs.json: ✅ Exists (10 items, 33982 bytes)
[2026-01-14T17:27:11.797Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 720306 bytes)
[2026-01-14T17:27:11.797Z] 
========================================
[2026-01-14T17:27:11.797Z] Starting Enhanced Discord Bot...
[2026-01-14T17:27:11.797Z] ========================================
[2026-01-14T17:27:12.328Z] [BOT] ✅ Loaded V2 database: 1352 jobs
[2026-01-14T17:27:13.066Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T17:27:13.066Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T17:27:13.067Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T17:27:13.179Z] [BOT] ✅ Loaded pending queue: 2738 total (2718 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineering/Scientist Associate 1 at University of Texas - Austin
[2026-01-14T17:27:13.182Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T17:27:13.182Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2026-01-14T17:27:13.272Z] [BOT] ✅ Loaded pending queue: 2738 total (2718 pending, 20 enriched, 0 posted)
[2026-01-14T17:27:13.429Z] [BOT] ✅ Saved pending queue: 2737 total (2718 pending, 19 enriched, 0 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-14T17:27:13.429Z] [BOT] 📋 After blacklist filter: 19 jobs (1 blacklisted)
📋 After data quality filter: 19 jobs (0 invalid)
[2026-01-14T17:27:13.430Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-14T17:27:13.430Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T17:27:13.435Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T17:27:13.435Z] [BOT] 📍 [ROUTING] "Research Engineering/Scientist Associate 1" @ ORG_9d38443e of Texas - Austin
[2026-01-14T17:27:13.436Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T17:27:13.454Z] [BOT ERROR] (node:2359) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T17:27:13.846Z] [BOT] ✅ Created forum post: 🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin in #📈・JID_fb739488
[2026-01-14T17:27:13.846Z] [BOT] ✅ Industry: Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin
[2026-01-14T17:27:15.518Z] [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-14T17:27:15.519Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-14T17:27:17.020Z] [BOT] 💾 Marked as posted: Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-14T17:27:17.020Z] [BOT] 💾 BEFORE ARCHIVING: 1353 jobs in database
[2026-01-14T17:27:17.021Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T17:27:17.026Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-14T17:27:17.026Z] [BOT] ✅ Archiving complete: 3 archived, 1350 active
[2026-01-14T17:27:17.037Z] [BOT] 💾 Saved posted_jobs.json: 1350 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T17:27:20.037Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-14T17:27:20.037Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T17:27:20.253Z] [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer @ Cisive',
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
[2026-01-14T17:27:20.253Z] [BOT] ❌ Industry post failed: Software Developer
⚠️  Channel full error count: 1/5
[2026-01-14T17:27:21.902Z] [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer @ Cisive',
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-14T17:27:21.903Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T17:27:23.405Z] [BOT] 📍 [ROUTING] "Software Engineer, New Grad, Backend" @ ORG_9cc3a043
[2026-01-14T17:27:23.405Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T17:27:23.563Z] [BOT ERROR] ❌ Error posting job Software Engineer, New Grad, Backend: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, New Grad, Backend @ CLEAR',
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
[2026-01-14T17:27:23.563Z] [BOT] ❌ Industry post failed: Software Engineer, New Grad, Backend
⚠️  Channel full error count: 2/5
[2026-01-14T17:27:25.244Z] [BOT ERROR] ❌ Error posting job Software Engineer, New Grad, Backend: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, New Grad, Backend @ CLEAR',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-14T17:27:25.244Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-14T17:27:26.744Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate - Ads ML Infrastructure - PhD" @ ORG_1bb6fcfb
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T17:27:26.944Z] [BOT ERROR] ❌ Error posting job Research Engineer Graduate - Ads ML Infrastructure - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineer Graduate - Ads ML Infrastructure - PhD @ TikTok',
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
[2026-01-14T17:27:26.944Z] [BOT] ❌ Industry post failed: Research Engineer Graduate - Ads ML Infrastructure - PhD
⚠️  Channel full error count: 3/5
[2026-01-14T17:27:28.569Z] [BOT ERROR] ❌ Error posting job Research Engineer Graduate - Ads ML Infrastructure - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Engineer Graduate - Ads ML Infrastructure - PhD @ TikTok',
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
[2026-01-14T17:27:28.569Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T17:27:30.070Z] [BOT] 📍 [ROUTING] "PhD Applied Scientist - Oracle Health & Analytics" @ ORG_dc7620eb
[2026-01-14T17:27:30.070Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T17:27:30.218Z] [BOT ERROR] ❌ Error posting job PhD Applied Scientist - Oracle Health & Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 PhD Applied Scientist - Oracle Health & Analytics @ Oracle',
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
[2026-01-14T17:27:30.219Z] [BOT] ❌ Industry post failed: PhD Applied Scientist - Oracle Health & Analytics
⚠️  Channel full error count: 4/5
[2026-01-14T17:27:34.720Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2026-01-14T17:27:34.720Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar-Neutrino Physics" @ ORG_478e100e University
[2026-01-14T17:27:34.720Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-14T17:27:34.908Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar-Neutrino Physics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Scholar-Neutrino Physics @ ORG_478e100e University',
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
  url: 'https://discord.com/api/v10/channels/CH_6bf05ed9/threads'
}
[2026-01-14T17:27:34.908Z] [BOT] ❌ Industry post failed: Postdoctoral Scholar-Neutrino Physics
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📁・JID_e938df7b is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-14T17:27:34.909Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 11
   Successful: 1
[2026-01-14T17:27:34.909Z] [BOT] Failed: 9
   Skipped: 1
[2026-01-14T17:27:34.909Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
[2026-01-14T17:27:34.909Z] [BOT] Channels used: 1
   Top channels:
     1. #📈・JID_fb739488: 1 posts
[2026-01-14T17:27:34.909Z] [BOT] [STATS] Channel stats saved
[2026-01-14T17:27:34.909Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_06e0e7ef.json
[2026-01-14T17:27:34.927Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2359) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Research Engineering/Scientist Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Developer
- [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer, New Grad, Backend: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer, New Grad, Backend
- [BOT ERROR] ❌ Error posting job Software Engineer, New Grad, Backend: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Engineer Graduate - Ads ML Infrastructure - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Engineer Graduate - Ads ML Infrastructure - PhD
- [BOT ERROR] ❌ Error posting job Research Engineer Graduate - Ads ML Infrastructure - PhD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job PhD Applied Scientist - Oracle Health & Analytics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: PhD Applied Scientist - Oracle Health & Analytics
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar-Neutrino Physics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Scholar-Neutrino Physics
- ❌ CRITICAL: Discord channel #📁・human-resources-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*