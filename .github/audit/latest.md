# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T16:54:04.780Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 12
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T16:53:31.953Z] ========================================
[2026-01-17T16:53:31.955Z] Discord Bot Execution Log
[2026-01-17T16:53:31.955Z] Environment: GitHub Actions
[2026-01-17T16:53:31.955Z] Node Version: v20.19.6
[2026-01-17T16:53:31.955Z] ========================================
[2026-01-17T16:53:31.955Z] Environment Variables Check:
[2026-01-17T16:53:31.955Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T16:53:31.955Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.955Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T16:53:31.955Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T16:53:31.956Z] 
Multi-Channel Configuration:
[2026-01-17T16:53:31.956Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.956Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.956Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.956Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.956Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.956Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.956Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.956Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.956Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T16:53:31.956Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T16:53:31.956Z] 
Data Files Check:
[2026-01-17T16:53:31.957Z] .github/data/new_jobs.json: ✅ Exists (10 items, 95380 bytes)
[2026-01-17T16:53:31.967Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1307240 bytes)
[2026-01-17T16:53:31.967Z] 
========================================
[2026-01-17T16:53:31.967Z] Starting Enhanced Discord Bot...
[2026-01-17T16:53:31.967Z] ========================================
[2026-01-17T16:53:32.489Z] [BOT] ✅ Loaded V2 database: 2416 jobs
[2026-01-17T16:53:33.001Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T16:53:33.001Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T16:53:33.002Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T16:53:33.118Z] [BOT] ✅ Loaded pending queue: 2906 total (2886 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Engineer, Personalization at spotify
[2026-01-17T16:53:33.121Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T16:53:33.122Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T16:53:33.122Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T16:53:33.123Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T16:53:33.123Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Sales Account Executive,  State @ verkada: seattle, wa united states, indianapolis, in united states; minneapolis, mn united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-17T16:53:33.123Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T16:53:33.128Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-17T16:53:33.128Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Personalization" @ spotify
   Category: AI (matched: "machine learning")
[2026-01-17T16:53:33.128Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T16:53:33.146Z] [BOT ERROR] (node:2347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T16:53:33.309Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_36e7e449/threads'
}
[2026-01-17T16:53:33.309Z] [BOT] ❌ Industry post failed: Machine Learning Engineer, Personalization
⚠️  Channel full error count: 1/5
[2026-01-17T16:53:34.898Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T16:53:34.898Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T16:53:36.399Z] [BOT] 📍 [ROUTING] "Deployment Systems Engineer" @ nominal
   Category: AI (matched: "artificial intelligence")
[2026-01-17T16:53:36.399Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T16:53:36.626Z] [BOT] ✅ Created forum post: 🏢 Deployment Systems Engineer @ nominal in #🤖・ai-jobs
[2026-01-17T16:53:36.627Z] [BOT] ✅ Industry: Deployment Systems Engineer @ nominal
[2026-01-17T16:53:38.234Z] [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Deployment Systems Engineer @ nominal',
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
[2026-01-17T16:53:38.234Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T16:53:39.735Z] [BOT] 💾 Marked as posted: Deployment Systems Engineer @ nominal (instance #1)
[2026-01-17T16:53:39.736Z] [BOT] 💾 BEFORE ARCHIVING: 2417 jobs in database
[2026-01-17T16:53:39.738Z] [BOT] ✅ No jobs to archive (all 2417 jobs within 7-day window)
[2026-01-17T16:53:39.757Z] [BOT] 💾 Saved posted_jobs.json: 2417 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T16:53:39.758Z] [BOT] 📍 [ROUTING] "Regulatory Counsel" @ anthropic
[2026-01-17T16:53:39.758Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T16:53:39.915Z] [BOT] ✅ Created forum post: 🏢 Regulatory Counsel @ anthropic in #🤖・ai-jobs
  ✅ Industry: Regulatory Counsel @ anthropic
[2026-01-17T16:53:41.501Z] [BOT ERROR] ❌ Error posting job Regulatory Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Regulatory Counsel @ anthropic',
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
[2026-01-17T16:53:41.502Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T16:53:43.003Z] [BOT] 💾 Marked as posted: Regulatory Counsel @ anthropic (instance #1)
[2026-01-17T16:53:43.003Z] [BOT] 💾 BEFORE ARCHIVING: 2418 jobs in database
[2026-01-17T16:53:43.005Z] [BOT] ✅ No jobs to archive (all 2418 jobs within 7-day window)
[2026-01-17T16:53:43.022Z] [BOT] 💾 Saved posted_jobs.json: 2418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T16:53:46.022Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T16:53:46.023Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (US time zones)" @ supabase
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T16:53:46.155Z] [BOT ERROR] ❌ Error posting job Customer Solution Architect (US time zones): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T16:53:46.155Z] [BOT] ❌ Industry post failed: Customer Solution Architect (US time zones)
⚠️  Channel full error count: 1/5
[2026-01-17T16:53:50.657Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-17T16:53:50.657Z] [BOT] 📍 [ROUTING] "Senior Full-Stack Engineer - Product" @ railway
[2026-01-17T16:53:50.657Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T16:53:50.744Z] [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T16:53:50.745Z] [BOT] ❌ Industry post failed: Senior Full-Stack Engineer - Product
⚠️  Channel full error count: 2/5
[2026-01-17T16:53:52.400Z] [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T16:53:52.400Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T16:53:53.900Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ T-Rex Solutions
[2026-01-17T16:53:53.900Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T16:53:54.369Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T16:53:54.370Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 3/5
[2026-01-17T16:53:56.062Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-17T16:53:56.062Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T16:53:57.562Z] [BOT] 📍 [ROUTING] "Associate Manager, Paid Media" @ spotify
[2026-01-17T16:53:57.563Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T16:53:57.817Z] [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Manager, Paid Media @ spotify',
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
[2026-01-17T16:53:57.818Z] [BOT] ❌ Industry post failed: Associate Manager, Paid Media
⚠️  Channel full error count: 4/5
[2026-01-17T16:53:59.470Z] [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Manager, Paid Media @ spotify',
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
[2026-01-17T16:53:59.470Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T16:54:03.972Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-17T16:54:03.972Z] [BOT] 📍 [ROUTING] "Senior Manager, Finance Systems" @ vercel
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-17T16:54:04.094Z] [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Manager, Finance Systems @ vercel',
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
  url: 'https://discord.com/api/v10/channels/CH_a550ae94/threads'
}
[2026-01-17T16:54:04.094Z] [BOT] ❌ Industry post failed: Senior Manager, Finance Systems
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💰・finance-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T16:54:04.095Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T16:54:04.095Z] [BOT] Total attempts: 14
   Successful: 2
   Failed: 12
   Skipped: 0
[2026-01-17T16:54:04.095Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T16:54:04.095Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 1
   Top channels:
     1. #🤖・ai-jobs: 2 posts
[2026-01-17T16:54:04.096Z] [BOT] [STATS] Channel stats saved
[2026-01-17T16:54:04.096Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T16:54:04.109Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2347) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer, Personalization
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Regulatory Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Solution Architect (US time zones): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Solution Architect (US time zones)
- [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Full-Stack Engineer - Product
- [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Manager, Paid Media
- [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Manager, Finance Systems
- ❌ CRITICAL: Discord channel #💰・finance-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*