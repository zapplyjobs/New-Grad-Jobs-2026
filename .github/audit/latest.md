# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T15:08:01.303Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T15:07:35.502Z] ========================================
[2026-01-17T15:07:35.504Z] Discord Bot Execution Log
[2026-01-17T15:07:35.504Z] Environment: GitHub Actions
[2026-01-17T15:07:35.504Z] Node Version: v20.19.6
[2026-01-17T15:07:35.505Z] ========================================
[2026-01-17T15:07:35.505Z] Environment Variables Check:
[2026-01-17T15:07:35.505Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T15:07:35.505Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.505Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T15:07:35.505Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T15:07:35.505Z] 
Multi-Channel Configuration:
[2026-01-17T15:07:35.505Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.505Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.505Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.505Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.506Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.506Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.506Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.506Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.506Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T15:07:35.506Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T15:07:35.506Z] 
Data Files Check:
[2026-01-17T15:07:35.507Z] .github/data/new_jobs.json: ✅ Exists (10 items, 101275 bytes)
[2026-01-17T15:07:35.516Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1306723 bytes)
[2026-01-17T15:07:35.516Z] 
========================================
[2026-01-17T15:07:35.516Z] Starting Enhanced Discord Bot...
[2026-01-17T15:07:35.516Z] ========================================
[2026-01-17T15:07:36.055Z] [BOT] ✅ Loaded V2 database: 2415 jobs
[2026-01-17T15:07:37.053Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T15:07:37.054Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T15:07:37.054Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T15:07:37.175Z] [BOT] ✅ Loaded pending queue: 2897 total (2877 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Cloud Infrastructure Engineer at nominal
[2026-01-17T15:07:37.178Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T15:07:37.179Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T15:07:37.179Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T15:07:37.180Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T15:07:37.180Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Sales Account Executive,  State @ verkada: seattle, wa united states, indianapolis, in united states; minneapolis, mn united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-17T15:07:37.180Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T15:07:37.184Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-17T15:07:37.185Z] [BOT] 📍 [ROUTING] "Cloud Infrastructure Engineer" @ nominal
[2026-01-17T15:07:37.185Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T15:07:37.185Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T15:07:37.203Z] [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T15:07:38.913Z] [BOT] ✅ Created forum post: 🏢 Cloud Infrastructure Engineer @ nominal in #🤖・ai-jobs
  ✅ Industry: Cloud Infrastructure Engineer @ nominal
[2026-01-17T15:07:40.751Z] [BOT] ✅ Created forum post: 🏢 Cloud Infrastructure Engineer @ nominal in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-17T15:07:42.254Z] [BOT] 💾 Marked as posted: Cloud Infrastructure Engineer @ nominal (instance #1)
[2026-01-17T15:07:42.254Z] [BOT] 💾 BEFORE ARCHIVING: 2416 jobs in database
[2026-01-17T15:07:42.256Z] [BOT] ✅ No jobs to archive (all 2416 jobs within 7-day window)
[2026-01-17T15:07:42.276Z] [BOT] 💾 Saved posted_jobs.json: 2416 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T15:07:42.276Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Personalization" @ spotify
[2026-01-17T15:07:42.276Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T15:07:42.425Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T15:07:42.425Z] [BOT] ❌ Industry post failed: Machine Learning Engineer, Personalization
⚠️  Channel full error count: 1/5
[2026-01-17T15:07:44.054Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T15:07:44.054Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T15:07:45.557Z] [BOT] 📍 [ROUTING] "Deployment Systems Engineer" @ nominal
[2026-01-17T15:07:45.557Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T15:07:45.702Z] [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_36e7e449/threads'
}
[2026-01-17T15:07:45.702Z] [BOT] ❌ Industry post failed: Deployment Systems Engineer
⚠️  Channel full error count: 2/5
[2026-01-17T15:07:47.382Z] [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T15:07:47.382Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T15:07:48.883Z] [BOT] 📍 [ROUTING] "Regulatory Counsel" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-17T15:07:48.883Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T15:07:49.030Z] [BOT ERROR] ❌ Error posting job Regulatory Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_36e7e449/threads'
}
[2026-01-17T15:07:49.031Z] [BOT] ❌ Industry post failed: Regulatory Counsel
⚠️  Channel full error count: 3/5
[2026-01-17T15:07:50.700Z] [BOT ERROR] ❌ Error posting job Regulatory Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T15:07:50.700Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T15:07:55.201Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T15:07:55.202Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (US time zones)" @ supabase
   Category: SALES (matched: "sales")
[2026-01-17T15:07:55.202Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T15:07:55.342Z] [BOT ERROR] ❌ Error posting job Customer Solution Architect (US time zones): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T15:07:55.342Z] [BOT] ❌ Industry post failed: Customer Solution Architect (US time zones)
⚠️  Channel full error count: 4/5
[2026-01-17T15:07:59.845Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-17T15:07:59.845Z] [BOT] 📍 [ROUTING] "Senior Full-Stack Engineer - Product" @ railway
[2026-01-17T15:07:59.845Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T15:08:00.032Z] [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T15:08:00.032Z] [BOT] ❌ Industry post failed: Senior Full-Stack Engineer - Product
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T15:08:00.033Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 10
   Successful: 2
[2026-01-17T15:08:00.033Z] [BOT] Failed: 8
   Skipped: 0
[2026-01-17T15:08:00.033Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-01-17T15:08:00.033Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🤠・austin: 1 posts
[2026-01-17T15:08:00.033Z] [BOT] [STATS] Channel stats saved
[2026-01-17T15:08:00.034Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T15:08:00.047Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer, Personalization
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Deployment Systems Engineer
- [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Regulatory Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Regulatory Counsel
- [BOT ERROR] ❌ Error posting job Regulatory Counsel: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Solution Architect (US time zones): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Solution Architect (US time zones)
- [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Full-Stack Engineer - Product
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*