# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T06:59:18.172Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 7
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T06:58:35.616Z] ========================================
[2026-01-17T06:58:35.618Z] Discord Bot Execution Log
[2026-01-17T06:58:35.618Z] Environment: GitHub Actions
[2026-01-17T06:58:35.618Z] Node Version: v20.19.6
[2026-01-17T06:58:35.618Z] ========================================
[2026-01-17T06:58:35.618Z] Environment Variables Check:
[2026-01-17T06:58:35.618Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T06:58:35.618Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.618Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T06:58:35.618Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T06:58:35.619Z] 
Multi-Channel Configuration:
[2026-01-17T06:58:35.619Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.619Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.619Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.619Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.619Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.619Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.619Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.619Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.619Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T06:58:35.619Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T06:58:35.619Z] 
Data Files Check:
[2026-01-17T06:58:35.620Z] .github/data/new_jobs.json: ✅ Exists (10 items, 12055 bytes)
[2026-01-17T06:58:35.629Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1245725 bytes)
[2026-01-17T06:58:35.629Z] 
========================================
[2026-01-17T06:58:35.629Z] Starting Enhanced Discord Bot...
[2026-01-17T06:58:35.629Z] ========================================
[2026-01-17T06:58:36.154Z] [BOT] ✅ Loaded V2 database: 2301 jobs
[2026-01-17T06:58:36.787Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T06:58:36.788Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T06:58:36.788Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T06:58:36.906Z] [BOT] ✅ Loaded pending queue: 2884 total (2864 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd at ByteDance
[2026-01-17T06:58:36.909Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T06:58:36.909Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T06:58:36.910Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T06:58:36.910Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T06:58:36.911Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T06:58:36.913Z] [BOT] 📌 Posting 10 jobs to #💻・tech-jobs
[2026-01-17T06:58:36.914Z] [BOT] 📍 [ROUTING] "AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd" @ ORG_08c9a13c
[2026-01-17T06:58:36.914Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:58:36.931Z] [BOT ERROR] (node:2555) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T06:58:38.907Z] [BOT] ✅ Created forum post: 🏢 AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-17T06:58:38.908Z] [BOT] ✅ Industry: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c
[2026-01-17T06:58:40.615Z] [BOT] ✅ Created forum post: 🏢 AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-17T06:58:40.615Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T06:58:42.117Z] [BOT] 💾 Marked as posted: AI Vision Research Engineer-Graduate-Pico 2026 Start - Phd @ ORG_08c9a13c (instance #1)
[2026-01-17T06:58:42.117Z] [BOT] 💾 BEFORE ARCHIVING: 2302 jobs in database
[2026-01-17T06:58:42.119Z] [BOT] ✅ No jobs to archive (all 2302 jobs within 7-day window)
[2026-01-17T06:58:42.137Z] [BOT] 💾 Saved posted_jobs.json: 2302 active jobs
[2026-01-17T06:58:42.138Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T06:58:42.138Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Modeling & Simulation" @ ORG_528ee40d
[2026-01-17T06:58:42.138Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:58:42.357Z] [BOT] ✅ Created forum post: 🏢 Junior Software Developer - Modeling & Simulation @ ORG_528ee40d in #💻・tech-jobs
[2026-01-17T06:58:42.357Z] [BOT] ✅ Industry: Junior Software Developer - Modeling & Simulation @ ORG_528ee40d
[2026-01-17T06:58:44.012Z] [BOT] ✅ Created forum post: 🏢 Junior Software Developer - Modeling & Simulation @ ORG_528ee40d in #💻・remote-usa
[2026-01-17T06:58:44.012Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T06:58:45.514Z] [BOT] 💾 Marked as posted: Junior Software Developer - Modeling & Simulation @ ORG_528ee40d (instance #1)
[2026-01-17T06:58:45.514Z] [BOT] 💾 BEFORE ARCHIVING: 2303 jobs in database
[2026-01-17T06:58:45.516Z] [BOT] ✅ No jobs to archive (all 2303 jobs within 7-day window)
[2026-01-17T06:58:45.532Z] [BOT] 💾 Saved posted_jobs.json: 2303 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T06:58:45.533Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Security-US" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-17T06:58:45.533Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:58:45.705Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Security-US @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c
[2026-01-17T06:58:47.395Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Security-US @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T06:58:48.896Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Data Security-US @ ORG_08c9a13c (instance #1)
[2026-01-17T06:58:48.896Z] [BOT] 💾 BEFORE ARCHIVING: 2304 jobs in database
[2026-01-17T06:58:48.898Z] [BOT] ✅ No jobs to archive (all 2304 jobs within 7-day window)
[2026-01-17T06:58:48.915Z] [BOT] 💾 Saved posted_jobs.json: 2304 active jobs
[2026-01-17T06:58:48.915Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T06:58:48.916Z] [BOT] 📍 [ROUTING] "Software Engineer - Frontend" @ ORG_70a5ae4a
[2026-01-17T06:58:48.916Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:58:49.146Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Frontend @ ORG_70a5ae4a in #💻・tech-jobs
[2026-01-17T06:58:49.146Z] [BOT] ✅ Industry: Software Engineer - Frontend @ ORG_70a5ae4a
[2026-01-17T06:58:50.827Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Frontend @ ORG_70a5ae4a in #🗽・new-york
[2026-01-17T06:58:50.827Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T06:58:52.328Z] [BOT] 💾 Marked as posted: Software Engineer - Frontend @ ORG_70a5ae4a (instance #1)
[2026-01-17T06:58:52.329Z] [BOT] 💾 BEFORE ARCHIVING: 2305 jobs in database
[2026-01-17T06:58:52.331Z] [BOT] ✅ No jobs to archive (all 2305 jobs within 7-day window)
[2026-01-17T06:58:52.346Z] [BOT] 💾 Saved posted_jobs.json: 2305 active jobs
[2026-01-17T06:58:52.346Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T06:58:52.347Z] [BOT] 📍 [ROUTING] "3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS)" @ ORG_08c9a13c
[2026-01-17T06:58:52.347Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:58:52.530Z] [BOT] ✅ Created forum post: 🏢 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c
[2026-01-17T06:58:54.170Z] [BOT] ✅ Created forum post: 🏢 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T06:58:55.671Z] [BOT] 💾 Marked as posted: 3D Graphics Software Engineer (PICO Foundation) - 2026 Start (BS/MS) @ ORG_08c9a13c (instance #1)
[2026-01-17T06:58:55.672Z] [BOT] 💾 BEFORE ARCHIVING: 2306 jobs in database
[2026-01-17T06:58:55.673Z] [BOT] ✅ No jobs to archive (all 2306 jobs within 7-day window)
[2026-01-17T06:58:55.686Z] [BOT] 💾 Saved posted_jobs.json: 2306 active jobs
[2026-01-17T06:58:55.686Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T06:58:55.687Z] [BOT] 📍 [ROUTING] "Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-17T06:58:55.687Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:58:55.848Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-17T06:58:55.848Z] [BOT] ✅ Industry: Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb
[2026-01-17T06:58:57.594Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T06:58:59.096Z] [BOT] 💾 Marked as posted: Software Engineer (Ads Measurement Signal Technology) - 2026 Start (BS/MS) @ ORG_1bb6fcfb (instance #1)
[2026-01-17T06:58:59.096Z] [BOT] 💾 BEFORE ARCHIVING: 2307 jobs in database
[2026-01-17T06:58:59.097Z] [BOT] ✅ No jobs to archive (all 2307 jobs within 7-day window)
[2026-01-17T06:58:59.113Z] [BOT] 💾 Saved posted_jobs.json: 2307 active jobs
[2026-01-17T06:58:59.113Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T06:58:59.113Z] [BOT] 📍 [ROUTING] "Software Engineer, Risk and Response - 2026 Start (BS/ MS)" @ ORG_1bb6fcfb
[2026-01-17T06:58:59.113Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:58:59.335Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-17T06:58:59.335Z] [BOT] ✅ Industry: Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ ORG_1bb6fcfb
[2026-01-17T06:59:00.964Z] [BOT ERROR] ❌ Error posting job Software Engineer, Risk and Response - 2026 Start (BS/ MS): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ TikTok',
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
[2026-01-17T06:59:00.964Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T06:59:02.466Z] [BOT] 💾 Marked as posted: Software Engineer, Risk and Response - 2026 Start (BS/ MS) @ ORG_1bb6fcfb (instance #1)
[2026-01-17T06:59:02.466Z] [BOT] 💾 BEFORE ARCHIVING: 2308 jobs in database
[2026-01-17T06:59:02.468Z] [BOT] ✅ No jobs to archive (all 2308 jobs within 7-day window)
[2026-01-17T06:59:02.482Z] [BOT] 💾 Saved posted_jobs.json: 2308 active jobs
[2026-01-17T06:59:02.482Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T06:59:02.483Z] [BOT] 📍 [ROUTING] "Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:59:02.564Z] [BOT ERROR] ❌ Error posting job Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ TikTok',
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
[2026-01-17T06:59:02.564Z] [BOT] ❌ Industry post failed: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS)
⚠️  Channel full error count: 1/5
[2026-01-17T06:59:04.145Z] [BOT ERROR] ❌ Error posting job Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS) @ TikTok',
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
[2026-01-17T06:59:04.146Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T06:59:05.646Z] [BOT] 📍 [ROUTING] "Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-17T06:59:05.647Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:59:05.721Z] [BOT ERROR] ❌ Error posting job Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ TikTok',
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
[2026-01-17T06:59:05.721Z] [BOT] ❌ Industry post failed: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS)
⚠️  Channel full error count: 2/5
[2026-01-17T06:59:07.344Z] [BOT ERROR] ❌ Error posting job Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS) @ TikTok',
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
[2026-01-17T06:59:07.344Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T06:59:08.845Z] [BOT] 📍 [ROUTING] "Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T06:59:08.947Z] [BOT ERROR] ❌ Error posting job Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ TikTok',
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
[2026-01-17T06:59:08.948Z] [BOT] ❌ Industry post failed: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS)
⚠️  Channel full error count: 3/5
[2026-01-17T06:59:10.570Z] [BOT ERROR] ❌ Error posting job Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS) @ TikTok',
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
[2026-01-17T06:59:10.570Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T06:59:15.072Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-17T06:59:15.073Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_dd747b4f-detail (posted within 7 days)
[2026-01-17T06:59:15.073Z] [BOT] ⏭️  Skipping duplicate: JID_0d10e4d3 (posted within 7 days)
[2026-01-17T06:59:15.073Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_40f1569e-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_4545fd68 (posted within 7 days)
[2026-01-17T06:59:15.073Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_852b8909-detail (posted within 7 days)
[2026-01-17T06:59:15.074Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a429130b (posted within 7 days)
[2026-01-17T06:59:15.074Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_654c67bb (posted within 7 days)
[2026-01-17T06:59:15.190Z] [BOT] ✅ Loaded pending queue: 2884 total (2864 pending, 20 enriched, 0 posted)
[2026-01-17T06:59:15.387Z] [BOT] ✅ Saved pending queue: 2884 total (2864 pending, 13 enriched, 7 posted)
[2026-01-17T06:59:15.387Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T06:59:15.444Z] [BOT] 📂 Loaded 4515 existing routing entries
[2026-01-17T06:59:15.509Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-17T06:59:15.509Z] [BOT] New entries: 10
   Total entries: 4525
   Timestamp: 2026-01-17T06:59:15.492Z
[2026-01-17T06:59:15.510Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T06:59:15.510Z] [BOT] Total attempts: 20
   Successful: 13
   Failed: 7
   Skipped: 0
[2026-01-17T06:59:15.510Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・remote-usa: 1 posts
     4. #🗽・new-york: 1 posts
[2026-01-17T06:59:15.511Z] [BOT] [STATS] Channel stats saved
[2026-01-17T06:59:17.537Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2555) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer, Risk and Response - 2026 Start (BS/ MS): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS)
- [BOT ERROR] ❌ Error posting job Software Development, Engineer in Test (Trust and Safety) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS)
- [BOT ERROR] ❌ Error posting job Software Engineer (Monetization Technology - Ads Creative) - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS)
- [BOT ERROR] ❌ Error posting job Backend Software Engineer, Trust and Safety - 2026 Start (BS/MS): DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*