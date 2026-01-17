# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T17:39:11.345Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T17:38:47.877Z] ========================================
[2026-01-17T17:38:47.879Z] Discord Bot Execution Log
[2026-01-17T17:38:47.879Z] Environment: GitHub Actions
[2026-01-17T17:38:47.879Z] Node Version: v20.19.6
[2026-01-17T17:38:47.879Z] ========================================
[2026-01-17T17:38:47.879Z] Environment Variables Check:
[2026-01-17T17:38:47.879Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T17:38:47.880Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T17:38:47.880Z] 
Multi-Channel Configuration:
[2026-01-17T17:38:47.880Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T17:38:47.880Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T17:38:47.881Z] 
Data Files Check:
[2026-01-17T17:38:47.882Z] .github/data/new_jobs.json: ✅ Exists (10 items, 94134 bytes)
[2026-01-17T17:38:47.891Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1308240 bytes)
[2026-01-17T17:38:47.891Z] 
========================================
[2026-01-17T17:38:47.891Z] Starting Enhanced Discord Bot...
[2026-01-17T17:38:47.891Z] ========================================
[2026-01-17T17:38:48.439Z] [BOT] ✅ Loaded V2 database: 2418 jobs
[2026-01-17T17:38:49.158Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T17:38:49.158Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T17:38:49.159Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T17:38:49.278Z] [BOT] ✅ Loaded pending queue: 2906 total (2886 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Engineer, Personalization at spotify
[2026-01-17T17:38:49.281Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T17:38:49.281Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T17:38:49.282Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T17:38:49.282Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T17:38:49.283Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Sales Account Executive,  State @ verkada: seattle, wa united states, indianapolis, in united states; minneapolis, mn united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-17T17:38:49.283Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T17:38:49.288Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-17T17:38:49.288Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Personalization" @ spotify
[2026-01-17T17:38:49.288Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T17:38:49.305Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T17:38:49.628Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Personalization @ spotify in #🤖・ai-jobs
[2026-01-17T17:38:49.629Z] [BOT] ✅ Industry: Machine Learning Engineer, Personalization @ spotify
[2026-01-17T17:38:51.264Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer, Personalization @ spotify',
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
[2026-01-17T17:38:51.264Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T17:38:52.766Z] [BOT] 💾 Marked as posted: Machine Learning Engineer, Personalization @ spotify (instance #1)
[2026-01-17T17:38:52.766Z] [BOT] 💾 BEFORE ARCHIVING: 2419 jobs in database
[2026-01-17T17:38:52.768Z] [BOT] ✅ No jobs to archive (all 2419 jobs within 7-day window)
[2026-01-17T17:38:52.787Z] [BOT] 💾 Saved posted_jobs.json: 2419 active jobs
[2026-01-17T17:38:52.787Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T17:38:55.788Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-17T17:38:55.788Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (US time zones)" @ supabase
[2026-01-17T17:38:55.789Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T17:38:56.049Z] [BOT ERROR] ❌ Error posting job Customer Solution Architect (US time zones): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Solution Architect (US time zones) @ supabase',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-17T17:38:56.049Z] [BOT] ❌ Industry post failed: Customer Solution Architect (US time zones)
⚠️  Channel full error count: 1/5
[2026-01-17T17:38:57.551Z] [BOT] 📍 [ROUTING] "Enterprise Sales Account Executive,  State" @ verkada
[2026-01-17T17:38:57.551Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T17:38:57.664Z] [BOT ERROR] ❌ Error posting job Enterprise Sales Account Executive,  State: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Sales Account Executive,  State @ verkada',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-17T17:38:57.665Z] [BOT] ❌ Industry post failed: Enterprise Sales Account Executive,  State
⚠️  Channel full error count: 2/5
[2026-01-17T17:38:59.311Z] [BOT ERROR] ❌ Error posting job Enterprise Sales Account Executive,  State: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Enterprise Sales Account Executive,  State @ verkada',
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
[2026-01-17T17:38:59.311Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T17:39:00.812Z] [BOT] 📍 [ROUTING] "Director, Corporate & Securities Counsel" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T17:39:00.933Z] [BOT ERROR] ❌ Error posting job Director, Corporate & Securities Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director, Corporate & Securities Counsel @ figma',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-17T17:39:00.933Z] [BOT] ❌ Industry post failed: Director, Corporate & Securities Counsel
⚠️  Channel full error count: 3/5
[2026-01-17T17:39:02.592Z] [BOT ERROR] ❌ Error posting job Director, Corporate & Securities Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Director, Corporate & Securities Counsel @ figma',
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
[2026-01-17T17:39:02.592Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T17:39:07.094Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-17T17:39:07.094Z] [BOT] 📍 [ROUTING] "Senior Full-Stack Engineer - Product" @ railway
[2026-01-17T17:39:07.094Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T17:39:07.289Z] [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Full-Stack Engineer - Product @ railway',
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
[2026-01-17T17:39:07.289Z] [BOT] ❌ Industry post failed: Senior Full-Stack Engineer - Product
⚠️  Channel full error count: 4/5
[2026-01-17T17:39:08.943Z] [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Full-Stack Engineer - Product @ railway',
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
[2026-01-17T17:39:08.943Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T17:39:10.444Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ T-Rex Solutions
[2026-01-17T17:39:10.444Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T17:39:10.587Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 @ T-Rex Solutions',
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
[2026-01-17T17:39:10.587Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T17:39:10.588Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T17:39:10.588Z] [BOT] Total attempts: 10
   Successful: 1
   Failed: 9
   Skipped: 0
[2026-01-17T17:39:10.588Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T17:39:10.588Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-17T17:39:10.588Z] [BOT] 1. #🤖・ai-jobs: 1 posts
[2026-01-17T17:39:10.588Z] [BOT] [STATS] Channel stats saved
[2026-01-17T17:39:10.589Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T17:39:10.601Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Solution Architect (US time zones): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Solution Architect (US time zones)
- [BOT ERROR] ❌ Error posting job Enterprise Sales Account Executive,  State: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Enterprise Sales Account Executive,  State
- [BOT ERROR] ❌ Error posting job Enterprise Sales Account Executive,  State: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Director, Corporate & Securities Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Director, Corporate & Securities Counsel
- [BOT ERROR] ❌ Error posting job Director, Corporate & Securities Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Full-Stack Engineer - Product
- [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*