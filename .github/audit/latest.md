# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T18:46:11.605Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T18:45:31.205Z] ========================================
[2026-01-17T18:45:31.207Z] Discord Bot Execution Log
[2026-01-17T18:45:31.207Z] Environment: GitHub Actions
[2026-01-17T18:45:31.207Z] Node Version: v20.19.6
[2026-01-17T18:45:31.207Z] ========================================
[2026-01-17T18:45:31.207Z] Environment Variables Check:
[2026-01-17T18:45:31.207Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T18:45:31.207Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.208Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T18:45:31.208Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T18:45:31.208Z] 
Multi-Channel Configuration:
[2026-01-17T18:45:31.208Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.208Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.208Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.208Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.208Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.208Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.208Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.208Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.208Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T18:45:31.209Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T18:45:31.209Z] 
Data Files Check:
[2026-01-17T18:45:31.210Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104460 bytes)
[2026-01-17T18:45:31.218Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1308770 bytes)
[2026-01-17T18:45:31.219Z] 
========================================
[2026-01-17T18:45:31.219Z] Starting Enhanced Discord Bot...
[2026-01-17T18:45:31.219Z] ========================================
[2026-01-17T18:45:31.738Z] [BOT] ✅ Loaded V2 database: 2419 jobs
[2026-01-17T18:45:32.320Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T18:45:32.320Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T18:45:32.320Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T18:45:32.436Z] [BOT] ✅ Loaded pending queue: 2907 total (2887 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Solution Architect (US time zones) at supabase
[2026-01-17T18:45:32.441Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T18:45:32.441Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T18:45:32.441Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T18:45:32.442Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T18:45:32.442Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Sales Account Executive,  State @ verkada: seattle, wa united states, indianapolis, in united states; minneapolis, mn united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-17T18:45:32.443Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T18:45:32.447Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-17T18:45:32.448Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (US time zones)" @ supabase
[2026-01-17T18:45:32.448Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T18:45:32.466Z] [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T18:45:32.865Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect (US time zones) @ supabase in #💲・sales-jobs
[2026-01-17T18:45:32.866Z] [BOT] ✅ Industry: Customer Solution Architect (US time zones) @ supabase
[2026-01-17T18:45:34.368Z] [BOT] 💾 Marked as posted: Customer Solution Architect (US time zones) @ supabase (instance #1)
[2026-01-17T18:45:34.369Z] [BOT] 💾 BEFORE ARCHIVING: 2420 jobs in database
[2026-01-17T18:45:34.370Z] [BOT] ✅ No jobs to archive (all 2420 jobs within 7-day window)
[2026-01-17T18:45:34.389Z] [BOT] 💾 Saved posted_jobs.json: 2420 active jobs
[2026-01-17T18:45:34.389Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:45:34.389Z] [BOT] 📍 [ROUTING] "Enterprise Sales Account Executive,  State" @ verkada
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T18:45:34.567Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Account Executive,  State @ verkada in #💲・sales-jobs
[2026-01-17T18:45:34.567Z] [BOT] ✅ Industry: Enterprise Sales Account Executive,  State @ verkada
[2026-01-17T18:45:36.370Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Account Executive,  State @ verkada in #🌧️・seattle
[2026-01-17T18:45:36.370Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-17T18:45:37.871Z] [BOT] 💾 Marked as posted: Enterprise Sales Account Executive,  State @ verkada (instance #1)
[2026-01-17T18:45:37.871Z] [BOT] 💾 BEFORE ARCHIVING: 2421 jobs in database
[2026-01-17T18:45:37.873Z] [BOT] ✅ No jobs to archive (all 2421 jobs within 7-day window)
[2026-01-17T18:45:37.886Z] [BOT] 💾 Saved posted_jobs.json: 2421 active jobs
[2026-01-17T18:45:37.886Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:45:37.886Z] [BOT] 💾 Marked as posted: Enterprise Sales Account Executive,  State @ verkada (instance #1)
[2026-01-17T18:45:37.886Z] [BOT] 💾 BEFORE ARCHIVING: 2422 jobs in database
[2026-01-17T18:45:37.888Z] [BOT] ✅ No jobs to archive (all 2422 jobs within 7-day window)
[2026-01-17T18:45:37.902Z] [BOT] 💾 Saved posted_jobs.json: 2422 active jobs
[2026-01-17T18:45:37.902Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:45:37.902Z] [BOT] 📍 [ROUTING] "Director, Corporate & Securities Counsel" @ figma
[2026-01-17T18:45:37.902Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T18:45:38.359Z] [BOT] ✅ Created forum post: 🏢 Director, Corporate & Securities Counsel @ figma in #💲・sales-jobs
[2026-01-17T18:45:38.359Z] [BOT] ✅ Industry: Director, Corporate & Securities Counsel @ figma
[2026-01-17T18:45:40.285Z] [BOT] ✅ Created forum post: 🏢 Director, Corporate & Securities Counsel @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T18:45:41.786Z] [BOT] 💾 Marked as posted: Director, Corporate & Securities Counsel @ figma (instance #1)
[2026-01-17T18:45:41.786Z] [BOT] 💾 BEFORE ARCHIVING: 2423 jobs in database
[2026-01-17T18:45:41.788Z] [BOT] ✅ No jobs to archive (all 2423 jobs within 7-day window)
[2026-01-17T18:45:41.806Z] [BOT] 💾 Saved posted_jobs.json: 2423 active jobs
[2026-01-17T18:45:41.806Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:45:44.807Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-17T18:45:44.807Z] [BOT] 📍 [ROUTING] "Senior Full-Stack Engineer - Product" @ railway
[2026-01-17T18:45:44.807Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T18:45:45.165Z] [BOT] ✅ Created forum post: 🏢 Senior Full-Stack Engineer - Product @ railway in #💻・tech-jobs
[2026-01-17T18:45:45.165Z] [BOT] ✅ Industry: Senior Full-Stack Engineer - Product @ railway
[2026-01-17T18:45:46.830Z] [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T18:45:46.830Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T18:45:48.331Z] [BOT] 💾 Marked as posted: Senior Full-Stack Engineer - Product @ railway (instance #1)
[2026-01-17T18:45:48.332Z] [BOT] 💾 BEFORE ARCHIVING: 2424 jobs in database
[2026-01-17T18:45:48.333Z] [BOT] ✅ No jobs to archive (all 2424 jobs within 7-day window)
[2026-01-17T18:45:48.350Z] [BOT] 💾 Saved posted_jobs.json: 2424 active jobs
[2026-01-17T18:45:48.350Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:45:48.350Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ T-Rex Solutions
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T18:45:48.576Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T18:45:48.576Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 1/5
[2026-01-17T18:45:50.237Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T18:45:50.238Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T18:45:51.739Z] [BOT] 📍 [ROUTING] "Associate Manager, Paid Media" @ spotify
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T18:45:51.856Z] [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T18:45:51.857Z] [BOT] ❌ Industry post failed: Associate Manager, Paid Media
⚠️  Channel full error count: 2/5
[2026-01-17T18:45:53.522Z] [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T18:45:53.522Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T18:45:58.024Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-17T18:45:58.024Z] [BOT] 📍 [ROUTING] "Senior Manager, Finance Systems" @ vercel
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-17T18:45:58.200Z] [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T18:45:58.200Z] [BOT] ❌ Industry post failed: Senior Manager, Finance Systems
⚠️  Channel full error count: 3/5
[2026-01-17T18:45:59.814Z] [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_fac6befb/threads'
}
[2026-01-17T18:45:59.814Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T18:46:04.316Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T18:46:04.316Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_8af17c2e
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T18:46:04.450Z] [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist @ Trillium',
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
  url: 'https://discord.com/api/v10/channels/CH_0d209940/threads'
}
[2026-01-17T18:46:04.450Z] [BOT] ❌ Industry post failed: Data Scientist
⚠️  Channel full error count: 4/5
[2026-01-17T18:46:06.096Z] [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist @ Trillium',
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
[2026-01-17T18:46:06.096Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T18:46:10.598Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-17T18:46:10.599Z] [BOT] 📍 [ROUTING] "Business Recruiter" @ figma
   Category: HR (matched: "hr")
[2026-01-17T18:46:10.599Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-17T18:46:10.783Z] [BOT ERROR] ❌ Error posting job Business Recruiter: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Recruiter @ figma',
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
[2026-01-17T18:46:10.784Z] [BOT] ❌ Industry post failed: Business Recruiter
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📁・JID_e938df7b is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T18:46:10.784Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 16
   Successful: 6
[2026-01-17T18:46:10.785Z] [BOT] Failed: 10
   Skipped: 0
[2026-01-17T18:46:10.785Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 4
[2026-01-17T18:46:10.785Z] [BOT] Top channels:
     1. #💲・sales-jobs: 3 posts
     2. #🌧️・seattle: 1 posts
     3. #🌉・san-francisco: 1 posts
[2026-01-17T18:46:10.785Z] [BOT] 4. #💻・tech-jobs: 1 posts
[2026-01-17T18:46:10.785Z] [BOT] [STATS] Channel stats saved
[2026-01-17T18:46:10.785Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T18:46:10.798Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Manager, Paid Media
- [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Manager, Finance Systems
- [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Scientist
- [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Business Recruiter: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Recruiter
- ❌ CRITICAL: Discord channel #📁・human-resources-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*