# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T20:38:57.380Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 6
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T20:38:12.445Z] ========================================
[2025-12-19T20:38:12.447Z] Discord Bot Execution Log
[2025-12-19T20:38:12.447Z] Environment: GitHub Actions
[2025-12-19T20:38:12.447Z] Node Version: v20.19.6
[2025-12-19T20:38:12.447Z] ========================================
[2025-12-19T20:38:12.447Z] Environment Variables Check:
[2025-12-19T20:38:12.447Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T20:38:12.447Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.447Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T20:38:12.448Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T20:38:12.448Z] 
Multi-Channel Configuration:
[2025-12-19T20:38:12.448Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.448Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.448Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.448Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.448Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.448Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.448Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.448Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.448Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T20:38:12.448Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T20:38:12.448Z] 
Data Files Check:
[2025-12-19T20:38:12.449Z] .github/data/new_jobs.json: ✅ Exists (10 items, 16964 bytes)
[2025-12-19T20:38:12.451Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 335446 bytes)
[2025-12-19T20:38:12.451Z] 
========================================
[2025-12-19T20:38:12.451Z] Starting Enhanced Discord Bot...
[2025-12-19T20:38:12.451Z] ========================================
[2025-12-19T20:38:12.976Z] [BOT] ✅ Loaded V2 database: 562 jobs
[2025-12-19T20:38:13.655Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T20:38:13.655Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T20:38:13.655Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T20:38:13.658Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T20:38:13.702Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T20:38:13.747Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T20:38:13.750Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T20:38:13.750Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T20:38:13.750Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T20:38:13.751Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-19T20:38:13.751Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ByteDance: seattle, san jose
   - Graduate Software Engineer - Cloud Native Infrastructure @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
[2025-12-19T20:38:13.751Z] [BOT] 📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T20:38:13.755Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-19T20:38:13.756Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal" @ ORG_1bb6fcfb
[2025-12-19T20:38:13.756Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T20:38:13.773Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T20:38:14.323Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-19T20:38:14.323Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal @ ORG_1bb6fcfb
[2025-12-19T20:38:16.033Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-19T20:38:16.034Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-19T20:38:17.535Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Supply Chain & Logistics - CV/Multimodal @ ORG_1bb6fcfb (instance #1)
[2025-12-19T20:38:17.535Z] [BOT] 💾 BEFORE ARCHIVING: 563 jobs in database
[2025-12-19T20:38:17.536Z] [BOT] ✅ No jobs to archive (all 563 jobs within 7-day window)
[2025-12-19T20:38:17.550Z] [BOT] 💾 Saved posted_jobs.json: 563 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:38:20.550Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-19T20:38:20.551Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Aerosols and hydroclimate risk" @ ORG_9d38443e of Texas - Austin
[2025-12-19T20:38:20.551Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-19T20:38:21.005Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin in #📁・JID_e938df7b
[2025-12-19T20:38:21.005Z] [BOT] ✅ Industry: Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin
[2025-12-19T20:38:22.744Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T20:38:24.245Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Aerosols and hydroclimate risk @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-19T20:38:24.246Z] [BOT] 💾 BEFORE ARCHIVING: 564 jobs in database
[2025-12-19T20:38:24.246Z] [BOT] ✅ No jobs to archive (all 564 jobs within 7-day window)
[2025-12-19T20:38:24.252Z] [BOT] 💾 Saved posted_jobs.json: 564 active jobs
[2025-12-19T20:38:24.252Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:38:27.252Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-19T20:38:27.254Z] [BOT] 📍 [ROUTING] "Hydrogeologist" @ ORG_a7c3f52e
   Category: TECH (default)
[2025-12-19T20:38:27.254Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:38:27.558Z] [BOT] ✅ Created forum post: 🏢 Hydrogeologist @ ORG_a7c3f52e in #💻・tech-jobs
  ✅ Industry: Hydrogeologist @ ORG_a7c3f52e
[2025-12-19T20:38:29.388Z] [BOT] ✅ Created forum post: 🏢 Hydrogeologist @ ORG_a7c3f52e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T20:38:30.890Z] [BOT] 💾 Marked as posted: Hydrogeologist @ ORG_a7c3f52e (instance #1)
[2025-12-19T20:38:30.890Z] [BOT] 💾 BEFORE ARCHIVING: 565 jobs in database
[2025-12-19T20:38:30.891Z] [BOT] ✅ No jobs to archive (all 565 jobs within 7-day window)
[2025-12-19T20:38:30.897Z] [BOT] 💾 Saved posted_jobs.json: 565 active jobs
[2025-12-19T20:38:30.897Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:38:30.897Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS" @ ORG_08c9a13c
[2025-12-19T20:38:30.897Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:38:31.212Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c
[2025-12-19T20:38:32.977Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-19T20:38:34.479Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c (instance #1)
[2025-12-19T20:38:34.479Z] [BOT] 💾 BEFORE ARCHIVING: 566 jobs in database
[2025-12-19T20:38:34.480Z] [BOT] ✅ No jobs to archive (all 566 jobs within 7-day window)
[2025-12-19T20:38:34.485Z] [BOT] 💾 Saved posted_jobs.json: 566 active jobs
[2025-12-19T20:38:34.485Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:38:34.486Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Cloud Native Infrastructure - 2026 Start','BS/MS @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 567 jobs in database
[2025-12-19T20:38:34.486Z] [BOT] ✅ No jobs to archive (all 567 jobs within 7-day window)
[2025-12-19T20:38:34.491Z] [BOT] 💾 Saved posted_jobs.json: 567 active jobs
[2025-12-19T20:38:34.492Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:38:34.492Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Cloud Native Infrastructure" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:38:34.714Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c
[2025-12-19T20:38:36.472Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-19T20:38:37.973Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c (instance #1)
[2025-12-19T20:38:37.973Z] [BOT] 💾 BEFORE ARCHIVING: 568 jobs in database
[2025-12-19T20:38:37.974Z] [BOT] ✅ No jobs to archive (all 568 jobs within 7-day window)
[2025-12-19T20:38:37.979Z] [BOT] 💾 Saved posted_jobs.json: 568 active jobs
[2025-12-19T20:38:37.979Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:38:37.979Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Cloud Native Infrastructure @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 569 jobs in database
[2025-12-19T20:38:37.980Z] [BOT] ✅ No jobs to archive (all 569 jobs within 7-day window)
[2025-12-19T20:38:37.984Z] [BOT] 💾 Saved posted_jobs.json: 569 active jobs
[2025-12-19T20:38:37.984Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer Graduate - AI Platform - 2026 Start" @ ORG_08c9a13c
[2025-12-19T20:38:37.984Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:38:38.129Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Platform - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ByteDance',
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
[2025-12-19T20:38:38.130Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Platform - 2026 Start
⚠️  Channel full error count: 1/5
[2025-12-19T20:38:39.800Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Platform - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ByteDance',
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
[2025-12-19T20:38:39.801Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T20:38:41.302Z] [BOT] 📍 [ROUTING] "SAS Programmer" @ ORG_6675b3b7 Information System
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:38:41.488Z] [BOT ERROR] ❌ Error posting job SAS Programmer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 SAS Programmer @ ORG_6675b3b7 Information System',
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
[2025-12-19T20:38:41.488Z] [BOT] ❌ Industry post failed: SAS Programmer
⚠️  Channel full error count: 2/5
[2025-12-19T20:38:43.170Z] [BOT ERROR] ❌ Error posting job SAS Programmer: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 SAS Programmer @ ORG_6675b3b7 Information System',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2025-12-19T20:38:43.170Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2025-12-19T20:38:47.672Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-19T20:38:47.673Z] [BOT] 📍 [ROUTING] "Engineer – Network Observability Platform and Automation" @ ORG_42be1f53 Realty
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-19T20:38:47.674Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T20:38:47.866Z] [BOT ERROR] ❌ Error posting job Engineer – Network Observability Platform and Automation: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Engineer – Network Observability Platform and Automation @ ORG_42be1f53 Realty',
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
[2025-12-19T20:38:47.866Z] [BOT] ❌ Industry post failed: Engineer – Network Observability Platform and Automation
⚠️  Channel full error count: 3/5
[2025-12-19T20:38:49.505Z] [BOT ERROR] ❌ Error posting job Engineer – Network Observability Platform and Automation: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Engineer – Network Observability Platform and Automation @ ORG_42be1f53 Realty',
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
  url: 'https://discord.com/api/v10/channels/CH_9ce1b282/threads'
}
[2025-12-19T20:38:49.505Z] [BOT] ⚠️ Location post failed: 🚌・boston
[2025-12-19T20:38:54.008Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 3
[2025-12-19T20:38:54.008Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_84fd8cbc (posted within 7 days)
[2025-12-19T20:38:54.008Z] [BOT] ⏭️  Skipping duplicate: JID_eff0e686-risk_r_00041495 (posted within 7 days)
⏭️  Skipping duplicate: JID_c75afa22-cx_1-job-1001997 (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_59828f46-detail (posted within 7 days)
[2025-12-19T20:38:54.008Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_dd5b89ca-detail (posted within 7 days)
[2025-12-19T20:38:54.011Z] [BOT] ✅ Loaded pending queue: 353 total (333 pending, 20 enriched, 0 posted)
[2025-12-19T20:38:54.017Z] [BOT] ✅ Saved pending queue: 353 total (333 pending, 15 enriched, 5 posted)
[2025-12-19T20:38:54.017Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T20:38:54.059Z] [BOT] 📂 Loaded 643 existing routing entries
[2025-12-19T20:38:54.103Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2025-12-19T20:38:54.103Z] [BOT] Total entries: 651
   Timestamp: 2025-12-19T20:38:54.100Z
[2025-12-19T20:38:54.104Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
[2025-12-19T20:38:54.104Z] [BOT] Total attempts: 16
   Successful: 10
   Failed: 6
   Skipped: 0
[2025-12-19T20:38:54.104Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-19T20:38:54.104Z] [BOT] Last cleanup: Never
[2025-12-19T20:38:54.104Z] [BOT] Total posts: 10
   Channels used: 6
   Top channels:
     1. #🌧️・seattle: 3 posts
     2. #💻・tech-jobs: 3 posts
     3. #🤖・ai-jobs: 1 posts
     4. #📁・JID_e938df7b: 1 posts
     5. #🤠・austin: 1 posts
[2025-12-19T20:38:54.104Z] [BOT] [STATS] Channel stats saved
[2025-12-19T20:38:56.117Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Platform - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Platform - 2026 Start
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Platform - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job SAS Programmer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: SAS Programmer
- [BOT ERROR] ❌ Error posting job SAS Programmer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineer – Network Observability Platform and Automation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineer – Network Observability Platform and Automation
- [BOT ERROR] ❌ Error posting job Engineer – Network Observability Platform and Automation: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*