# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T21:27:04.887Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T21:26:25.381Z] ========================================
[2026-01-17T21:26:25.383Z] Discord Bot Execution Log
[2026-01-17T21:26:25.383Z] Environment: GitHub Actions
[2026-01-17T21:26:25.383Z] Node Version: v20.19.6
[2026-01-17T21:26:25.384Z] ========================================
[2026-01-17T21:26:25.384Z] Environment Variables Check:
[2026-01-17T21:26:25.384Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T21:26:25.384Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.384Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T21:26:25.384Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T21:26:25.384Z] 
Multi-Channel Configuration:
[2026-01-17T21:26:25.384Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.384Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.385Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.385Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.385Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.385Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.385Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.385Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.385Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T21:26:25.385Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T21:26:25.385Z] 
Data Files Check:
[2026-01-17T21:26:25.386Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57097 bytes)
[2026-01-17T21:26:25.395Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1328804 bytes)
[2026-01-17T21:26:25.395Z] 
========================================
[2026-01-17T21:26:25.395Z] Starting Enhanced Discord Bot...
[2026-01-17T21:26:25.395Z] ========================================
[2026-01-17T21:26:25.964Z] [BOT] ✅ Loaded V2 database: 2457 jobs
[2026-01-17T21:26:26.384Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T21:26:26.385Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T21:26:26.385Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T21:26:26.505Z] [BOT] ✅ Loaded pending queue: 2898 total (2878 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: CPM Data Processor 1 at State of Montana
[2026-01-17T21:26:26.508Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T21:26:26.508Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T21:26:26.509Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T21:26:26.509Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T21:26:26.510Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T21:26:26.515Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-17T21:26:26.515Z] [BOT] 📍 [ROUTING] "CPM Data Processor 1" @ ORG_a3b50c47 of Montana
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:26:26.520Z] [BOT ERROR] (node:2630) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T21:26:26.717Z] [BOT] ✅ Created forum post: 🏢 CPM Data Processor 1 @ ORG_a3b50c47 of Montana in #💻・tech-jobs
  ✅ Industry: CPM Data Processor 1 @ ORG_a3b50c47 of Montana
[2026-01-17T21:26:28.221Z] [BOT] 💾 Marked as posted: CPM Data Processor 1 @ ORG_a3b50c47 of Montana (instance #1)
[2026-01-17T21:26:28.221Z] [BOT] 💾 BEFORE ARCHIVING: 2458 jobs in database
[2026-01-17T21:26:28.223Z] [BOT] ✅ No jobs to archive (all 2458 jobs within 7-day window)
[2026-01-17T21:26:28.244Z] [BOT] 💾 Saved posted_jobs.json: 2458 active jobs
[2026-01-17T21:26:28.244Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T21:26:28.244Z] [BOT] 📍 [ROUTING] "Systems Engineer 1" @ ORG_75f04b84
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:26:28.408Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
[2026-01-17T21:26:28.408Z] [BOT] ✅ Industry: Systems Engineer 1 @ ORG_75f04b84
[2026-01-17T21:26:30.156Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_75f04b84 in #💻・remote-usa
[2026-01-17T21:26:30.157Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T21:26:31.658Z] [BOT] 💾 Marked as posted: Systems Engineer 1 @ ORG_75f04b84 (instance #1)
[2026-01-17T21:26:31.659Z] [BOT] 💾 BEFORE ARCHIVING: 2459 jobs in database
[2026-01-17T21:26:31.660Z] [BOT] ✅ No jobs to archive (all 2459 jobs within 7-day window)
[2026-01-17T21:26:31.674Z] [BOT] 💾 Saved posted_jobs.json: 2459 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:26:31.674Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_75f04b84
[2026-01-17T21:26:31.675Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:26:31.827Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_75f04b84 in #💻・tech-jobs
[2026-01-17T21:26:31.827Z] [BOT] ✅ Industry: Software Engineer 2 @ ORG_75f04b84
[2026-01-17T21:26:33.564Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_75f04b84 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-17T21:26:35.066Z] [BOT] 💾 Marked as posted: Software Engineer 2 @ ORG_75f04b84 (instance #1)
[2026-01-17T21:26:35.066Z] [BOT] 💾 BEFORE ARCHIVING: 2460 jobs in database
[2026-01-17T21:26:35.068Z] [BOT] ✅ No jobs to archive (all 2460 jobs within 7-day window)
[2026-01-17T21:26:35.085Z] [BOT] 💾 Saved posted_jobs.json: 2460 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:26:35.086Z] [BOT] 📍 [ROUTING] "Custom Application Engineer" @ ORG_cb844c98 Technologies
   Category: TECH (matched: "engineer/engineering")
[2026-01-17T21:26:35.086Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:26:35.277Z] [BOT] ✅ Created forum post: 🏢 Custom Application Engineer @ ORG_cb844c98 Technologies in #💻・tech-jobs
[2026-01-17T21:26:35.277Z] [BOT] ✅ Industry: Custom Application Engineer @ ORG_cb844c98 Technologies
[2026-01-17T21:26:36.981Z] [BOT] ✅ Created forum post: 🏢 Custom Application Engineer @ ORG_cb844c98 Technologies in #💻・remote-usa
[2026-01-17T21:26:36.981Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T21:26:38.482Z] [BOT] 💾 Marked as posted: Custom Application Engineer @ ORG_cb844c98 Technologies (instance #1)
[2026-01-17T21:26:38.483Z] [BOT] 💾 BEFORE ARCHIVING: 2461 jobs in database
[2026-01-17T21:26:38.485Z] [BOT] ✅ No jobs to archive (all 2461 jobs within 7-day window)
[2026-01-17T21:26:38.503Z] [BOT] 💾 Saved posted_jobs.json: 2461 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:26:38.504Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training" @ ORG_08c9a13c
[2026-01-17T21:26:38.504Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:26:38.799Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-17T21:26:38.799Z] [BOT] ✅ Industry: Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training @ ORG_08c9a13c
[2026-01-17T21:26:40.393Z] [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training @ ByteDance',
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
[2026-01-17T21:26:40.393Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T21:26:41.894Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training @ ORG_08c9a13c (instance #1)
[2026-01-17T21:26:41.895Z] [BOT] 💾 BEFORE ARCHIVING: 2462 jobs in database
[2026-01-17T21:26:41.897Z] [BOT] ✅ No jobs to archive (all 2462 jobs within 7-day window)
[2026-01-17T21:26:41.913Z] [BOT] 💾 Saved posted_jobs.json: 2462 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T21:26:41.914Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Diagnostics" @ ORG_d1289e5a P Moore
[2026-01-17T21:26:41.914Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T21:26:42.041Z] [BOT ERROR] ❌ Error posting job Graduate Engineer - Diagnostics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Engineer - Diagnostics @ ORG_d1289e5a P Moore',
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
[2026-01-17T21:26:42.041Z] [BOT] ❌ Industry post failed: Graduate Engineer - Diagnostics
⚠️  Channel full error count: 1/5
[2026-01-17T21:26:43.636Z] [BOT ERROR] ❌ Error posting job Graduate Engineer - Diagnostics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Engineer - Diagnostics @ ORG_d1289e5a P Moore',
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
[2026-01-17T21:26:43.636Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-17T21:26:48.138Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T21:26:48.139Z] [BOT] 📍 [ROUTING] "Data Analyst - Regulatory Data and Systems" @ ORG_676c471b of Montreal
[2026-01-17T21:26:48.139Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T21:26:48.397Z] [BOT ERROR] ❌ Error posting job Data Analyst - Regulatory Data and Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst - Regulatory Data and Systems @ ORG_676c471b of Montreal',
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
[2026-01-17T21:26:48.397Z] [BOT] ❌ Industry post failed: Data Analyst - Regulatory Data and Systems
⚠️  Channel full error count: 2/5
[2026-01-17T21:26:50.139Z] [BOT ERROR] ❌ Error posting job Data Analyst - Regulatory Data and Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst - Regulatory Data and Systems @ ORG_676c471b of Montreal',
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
[2026-01-17T21:26:50.140Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-17T21:26:54.641Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-17T21:26:54.642Z] [BOT] 📍 [ROUTING] "Senior Research Specialist 1" @ ORG_03272755inceton University
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T21:26:54.760Z] [BOT ERROR] ❌ Error posting job Senior Research Specialist 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Research Specialist 1 @ ORG_03272755inceton University',
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
[2026-01-17T21:26:54.760Z] [BOT] ❌ Industry post failed: Senior Research Specialist 1
⚠️  Channel full error count: 3/5
[2026-01-17T21:26:56.372Z] [BOT ERROR] ❌ Error posting job Senior Research Specialist 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Research Specialist 1 @ ORG_03272755inceton University',
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
[2026-01-17T21:26:56.373Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T21:26:57.874Z] [BOT] 📍 [ROUTING] "Faculty Fellow" @ ORG_54f9eaef International Group (SIG)
[2026-01-17T21:26:57.874Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T21:26:57.954Z] [BOT ERROR] ❌ Error posting job Faculty Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Faculty Fellow @ ORG_54f9eaef International Group (SIG)',
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
[2026-01-17T21:26:57.954Z] [BOT] ❌ Industry post failed: Faculty Fellow
⚠️  Channel full error count: 4/5
[2026-01-17T21:26:59.556Z] [BOT ERROR] ❌ Error posting job Faculty Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Faculty Fellow @ ORG_54f9eaef International Group (SIG)',
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
[2026-01-17T21:26:59.556Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T21:27:04.058Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-17T21:27:04.058Z] [BOT] 📍 [ROUTING] "Head of Legal Operations" @ brex
[2026-01-17T21:27:04.058Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T21:27:04.233Z] [BOT ERROR] ❌ Error posting job Head of Legal Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Head of Legal Operations @ brex',
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-17T21:27:04.234Z] [BOT] ❌ Industry post failed: Head of Legal Operations
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📣・marketing-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T21:27:04.234Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 18
   Successful: 8
[2026-01-17T21:27:04.235Z] [BOT] Failed: 10
   Skipped: 0
[2026-01-17T21:27:04.235Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T21:27:04.235Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 3
   Top channels:
[2026-01-17T21:27:04.235Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 2 posts
     3. #🚌・boston: 1 posts
[2026-01-17T21:27:04.235Z] [BOT] [STATS] Channel stats saved
[2026-01-17T21:27:04.235Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T21:27:04.249Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2630) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Engineer - Diagnostics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Engineer - Diagnostics
- [BOT ERROR] ❌ Error posting job Graduate Engineer - Diagnostics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Analyst - Regulatory Data and Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst - Regulatory Data and Systems
- [BOT ERROR] ❌ Error posting job Data Analyst - Regulatory Data and Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Research Specialist 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Research Specialist 1
- [BOT ERROR] ❌ Error posting job Senior Research Specialist 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Faculty Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Faculty Fellow
- [BOT ERROR] ❌ Error posting job Faculty Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Head of Legal Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Head of Legal Operations
- ❌ CRITICAL: Discord channel #📣・marketing-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*