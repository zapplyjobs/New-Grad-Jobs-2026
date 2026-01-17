# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T13:43:54.209Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T13:43:16.300Z] ========================================
[2026-01-17T13:43:16.302Z] Discord Bot Execution Log
[2026-01-17T13:43:16.302Z] Environment: GitHub Actions
[2026-01-17T13:43:16.302Z] Node Version: v20.19.6
[2026-01-17T13:43:16.302Z] ========================================
[2026-01-17T13:43:16.302Z] Environment Variables Check:
[2026-01-17T13:43:16.302Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T13:43:16.302Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.302Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T13:43:16.303Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T13:43:16.303Z] 
Multi-Channel Configuration:
[2026-01-17T13:43:16.303Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.303Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.303Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.303Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.303Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.303Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.303Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.303Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.303Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T13:43:16.303Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T13:43:16.303Z] 
Data Files Check:
[2026-01-17T13:43:16.304Z] .github/data/new_jobs.json: ✅ Exists (10 items, 104615 bytes)
[2026-01-17T13:43:16.313Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1303120 bytes)
[2026-01-17T13:43:16.313Z] 
========================================
[2026-01-17T13:43:16.313Z] Starting Enhanced Discord Bot...
[2026-01-17T13:43:16.313Z] ========================================
[2026-01-17T13:43:16.850Z] [BOT] ✅ Loaded V2 database: 2408 jobs
[2026-01-17T13:43:17.559Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T13:43:17.560Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T13:43:17.560Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T13:43:17.676Z] [BOT] ✅ Loaded pending queue: 2894 total (2874 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Mission Dev at nominal
[2026-01-17T13:43:17.680Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T13:43:17.680Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T13:43:17.681Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T13:43:17.681Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-17T13:43:17.682Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Sales Account Executive,  State @ verkada: seattle, wa united states, indianapolis, in united states; minneapolis, mn united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-17T13:43:17.682Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T13:43:17.686Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-17T13:43:17.686Z] [BOT] 📍 [ROUTING] "Software Engineer - Mission Dev" @ nominal
[2026-01-17T13:43:17.686Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T13:43:17.704Z] [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T13:43:17.854Z] [BOT ERROR] ❌ Error posting job Software Engineer - Mission Dev: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Mission Dev @ nominal',
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
[2026-01-17T13:43:17.854Z] [BOT] ❌ Industry post failed: Software Engineer - Mission Dev
⚠️  Channel full error count: 1/5
[2026-01-17T13:43:19.563Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Mission Dev @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T13:43:21.065Z] [BOT] 💾 Marked as posted: Software Engineer - Mission Dev @ nominal (instance #1)
[2026-01-17T13:43:21.065Z] [BOT] 💾 BEFORE ARCHIVING: 2409 jobs in database
[2026-01-17T13:43:21.067Z] [BOT] ✅ No jobs to archive (all 2409 jobs within 7-day window)
[2026-01-17T13:43:21.089Z] [BOT] 💾 Saved posted_jobs.json: 2409 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T13:43:21.090Z] [BOT] 💾 Marked as posted: Software Engineer - Backend @ nominal (instance #1)
[2026-01-17T13:43:21.090Z] [BOT] 💾 BEFORE ARCHIVING: 2410 jobs in database
[2026-01-17T13:43:21.092Z] [BOT] ✅ No jobs to archive (all 2410 jobs within 7-day window)
[2026-01-17T13:43:21.117Z] [BOT] 💾 Saved posted_jobs.json: 2410 active jobs
[2026-01-17T13:43:21.118Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T13:43:21.118Z] [BOT] 💾 Marked as posted: Software Engineer - Frontend @ nominal (instance #1)
[2026-01-17T13:43:21.118Z] [BOT] 💾 BEFORE ARCHIVING: 2411 jobs in database
[2026-01-17T13:43:21.121Z] [BOT] ✅ No jobs to archive (all 2411 jobs within 7-day window)
[2026-01-17T13:43:21.139Z] [BOT] 💾 Saved posted_jobs.json: 2411 active jobs
[2026-01-17T13:43:21.139Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T13:43:21.140Z] [BOT] 📍 [ROUTING] "Support Engineer (APAC)" @ supabase
[2026-01-17T13:43:21.140Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T13:43:21.428Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (APAC) @ supabase in #💻・tech-jobs
[2026-01-17T13:43:21.428Z] [BOT] ✅ Industry: Support Engineer (APAC) @ supabase
[2026-01-17T13:43:22.929Z] [BOT] 💾 Marked as posted: Support Engineer (APAC) @ supabase (instance #1)
💾 BEFORE ARCHIVING: 2412 jobs in database
[2026-01-17T13:43:22.931Z] [BOT] ✅ No jobs to archive (all 2412 jobs within 7-day window)
[2026-01-17T13:43:22.946Z] [BOT] 💾 Saved posted_jobs.json: 2412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T13:43:22.947Z] [BOT] 📍 [ROUTING] "Support Engineer (AMER)" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-17T13:43:22.947Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T13:43:23.413Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (AMER) @ supabase in #💻・tech-jobs
[2026-01-17T13:43:23.413Z] [BOT] ✅ Industry: Support Engineer (AMER) @ supabase
[2026-01-17T13:43:24.914Z] [BOT] 💾 Marked as posted: Support Engineer (AMER) @ supabase (instance #1)
[2026-01-17T13:43:24.915Z] [BOT] 💾 BEFORE ARCHIVING: 2413 jobs in database
[2026-01-17T13:43:24.916Z] [BOT] ✅ No jobs to archive (all 2413 jobs within 7-day window)
[2026-01-17T13:43:24.931Z] [BOT] 💾 Saved posted_jobs.json: 2413 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T13:43:24.931Z] [BOT] 📍 [ROUTING] "Developer Relations" @ railway
[2026-01-17T13:43:24.931Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T13:43:25.503Z] [BOT] ✅ Created forum post: 🏢 Developer Relations @ railway in #💻・tech-jobs
  ✅ Industry: Developer Relations @ railway
[2026-01-17T13:43:28.258Z] [BOT] ✅ Created forum post: 🏢 Developer Relations @ railway in #💻・remote-usa
[2026-01-17T13:43:28.258Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T13:43:29.759Z] [BOT] 💾 Marked as posted: Developer Relations @ railway (instance #1)
[2026-01-17T13:43:29.759Z] [BOT] 💾 BEFORE ARCHIVING: 2414 jobs in database
[2026-01-17T13:43:29.761Z] [BOT] ✅ No jobs to archive (all 2414 jobs within 7-day window)
[2026-01-17T13:43:29.778Z] [BOT] 💾 Saved posted_jobs.json: 2414 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T13:43:29.779Z] [BOT] 📍 [ROUTING] "Infrastructure Engineer" @ railway
[2026-01-17T13:43:29.779Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T13:43:30.054Z] [BOT] ✅ Created forum post: 🏢 Infrastructure Engineer @ railway in #💻・tech-jobs
[2026-01-17T13:43:30.055Z] [BOT] ✅ Industry: Infrastructure Engineer @ railway
[2026-01-17T13:43:31.737Z] [BOT ERROR] ❌ Error posting job Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Infrastructure Engineer @ railway',
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
[2026-01-17T13:43:31.737Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T13:43:33.239Z] [BOT] 💾 Marked as posted: Infrastructure Engineer @ railway (instance #1)
[2026-01-17T13:43:33.239Z] [BOT] 💾 BEFORE ARCHIVING: 2415 jobs in database
[2026-01-17T13:43:33.240Z] [BOT] ✅ No jobs to archive (all 2415 jobs within 7-day window)
[2026-01-17T13:43:33.256Z] [BOT] 💾 Saved posted_jobs.json: 2415 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T13:43:33.257Z] [BOT] 📍 [ROUTING] "Senior Full-Stack Engineer - Product" @ railway
[2026-01-17T13:43:33.257Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T13:43:33.410Z] [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T13:43:33.410Z] [BOT] ❌ Industry post failed: Senior Full-Stack Engineer - Product
⚠️  Channel full error count: 1/5
[2026-01-17T13:43:35.125Z] [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T13:43:35.125Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T13:43:39.626Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-17T13:43:39.627Z] [BOT] 📍 [ROUTING] "Cloud Infrastructure Engineer" @ nominal
   Category: AI (matched: "artificial intelligence")
[2026-01-17T13:43:39.627Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T13:43:39.853Z] [BOT ERROR] ❌ Error posting job Cloud Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Cloud Infrastructure Engineer @ nominal',
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
[2026-01-17T13:43:39.853Z] [BOT] ❌ Industry post failed: Cloud Infrastructure Engineer
⚠️  Channel full error count: 2/5
[2026-01-17T13:43:41.539Z] [BOT ERROR] ❌ Error posting job Cloud Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Cloud Infrastructure Engineer @ nominal',
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
[2026-01-17T13:43:41.540Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T13:43:43.041Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Personalization" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T13:43:43.041Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T13:43:43.164Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T13:43:43.164Z] [BOT] ❌ Industry post failed: Machine Learning Engineer, Personalization
⚠️  Channel full error count: 3/5
[2026-01-17T13:43:44.840Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T13:43:44.840Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T13:43:46.342Z] [BOT] 📍 [ROUTING] "Deployment Systems Engineer" @ nominal
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T13:43:46.342Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T13:43:46.468Z] [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T13:43:46.468Z] [BOT] ❌ Industry post failed: Deployment Systems Engineer
⚠️  Channel full error count: 4/5
[2026-01-17T13:43:48.266Z] [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T13:43:48.266Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T13:43:52.768Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T13:43:52.768Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (US time zones)" @ supabase
   Category: SALES (matched: "sales")
[2026-01-17T13:43:52.768Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T13:43:52.980Z] [BOT ERROR] ❌ Error posting job Customer Solution Architect (US time zones): DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T13:43:52.980Z] [BOT] ❌ Industry post failed: Customer Solution Architect (US time zones)
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T13:43:52.981Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 17
[2026-01-17T13:43:52.981Z] [BOT] Successful: 6
   Failed: 11
   Skipped: 0
[2026-01-17T13:43:52.981Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
[2026-01-17T13:43:52.982Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #🦢・los-angeles: 1 posts
     3. #💻・remote-usa: 1 posts
[2026-01-17T13:43:52.982Z] [BOT] [STATS] Channel stats saved
[2026-01-17T13:43:52.982Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T13:43:52.995Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer - Mission Dev: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Mission Dev
- [BOT ERROR] ❌ Error posting job Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Full-Stack Engineer - Product
- [BOT ERROR] ❌ Error posting job Senior Full-Stack Engineer - Product: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Cloud Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Cloud Infrastructure Engineer
- [BOT ERROR] ❌ Error posting job Cloud Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer, Personalization
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer, Personalization: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Deployment Systems Engineer
- [BOT ERROR] ❌ Error posting job Deployment Systems Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Solution Architect (US time zones): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Solution Architect (US time zones)
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*