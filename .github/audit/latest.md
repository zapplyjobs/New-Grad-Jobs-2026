# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T16:49:33.837Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 12
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T16:49:02.671Z] ========================================
[2026-01-19T16:49:02.673Z] Discord Bot Execution Log
[2026-01-19T16:49:02.673Z] Environment: GitHub Actions
[2026-01-19T16:49:02.673Z] Node Version: v20.19.6
[2026-01-19T16:49:02.673Z] ========================================
[2026-01-19T16:49:02.673Z] Environment Variables Check:
[2026-01-19T16:49:02.673Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T16:49:02.673Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.673Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T16:49:02.673Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T16:49:02.673Z] 
Multi-Channel Configuration:
[2026-01-19T16:49:02.674Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.674Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.674Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.674Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.674Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.674Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.674Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.674Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.674Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T16:49:02.674Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T16:49:02.674Z] 
Data Files Check:
[2026-01-19T16:49:02.675Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76525 bytes)
[2026-01-19T16:49:02.686Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1611526 bytes)
[2026-01-19T16:49:02.686Z] 
========================================
[2026-01-19T16:49:02.686Z] Starting Enhanced Discord Bot...
[2026-01-19T16:49:02.686Z] ========================================
[2026-01-19T16:49:03.232Z] [BOT] ✅ Loaded V2 database: 2963 jobs
[2026-01-19T16:49:03.732Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T16:49:03.733Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T16:49:03.733Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T16:49:03.851Z] [BOT] ✅ Loaded pending queue: 2817 total (2797 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-19T16:49:03.855Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T16:49:03.855Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T16:49:03.856Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T16:49:03.856Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-19T16:49:03.857Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-19T16:49:03.857Z] [BOT] - Data Labeling Specialist - Imagery @ ORG_6c847a27 Power: palo alto, washington
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T16:49:03.861Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T16:49:03.862Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Enterprise SLED East)" @ verkada
[2026-01-19T16:49:03.862Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T16:49:03.866Z] [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T16:49:04.032Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada',
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
[2026-01-19T16:49:04.032Z] [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
⚠️  Channel full error count: 1/5
[2026-01-19T16:49:05.618Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada',
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
[2026-01-19T16:49:05.618Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T16:49:10.119Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-19T16:49:10.120Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Full Stack and Application Development" @ ORG_aa669b28
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T16:49:10.365Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Full Stack and Application Development @ ORG_aa669b28 in #💻・tech-jobs
[2026-01-19T16:49:10.365Z] [BOT] ✅ Industry: Software Engineer 2 - Full Stack and Application Development @ ORG_aa669b28
[2026-01-19T16:49:11.991Z] [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 2 - Full Stack and Application Development @ Cisco',
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
[2026-01-19T16:49:11.991Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T16:49:13.492Z] [BOT] 💾 Marked as posted: Software Engineer 2 - Full Stack and Application Development @ ORG_aa669b28 (instance #1)
[2026-01-19T16:49:13.493Z] [BOT] 💾 BEFORE ARCHIVING: 2964 jobs in database
[2026-01-19T16:49:13.495Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T16:49:13.498Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-19T16:49:13.498Z] [BOT] ✅ Archiving complete: 1 archived, 2963 active
[2026-01-19T16:49:13.518Z] [BOT] 💾 Saved posted_jobs.json: 2963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T16:49:13.519Z] [BOT] 📍 [ROUTING] "Software Application Engineer – Entry Level" @ ORG_cdb83ff1
   Category: TECH (matched: "software")
[2026-01-19T16:49:13.519Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T16:49:13.640Z] [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Application Engineer – Entry Level @ Oshkosh',
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
[2026-01-19T16:49:13.640Z] [BOT] ❌ Industry post failed: Software Application Engineer – Entry Level
⚠️  Channel full error count: 1/5
[2026-01-19T16:49:15.298Z] [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Application Engineer – Entry Level @ Oshkosh',
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
[2026-01-19T16:49:15.298Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T16:49:16.799Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_336a7f11 Medical
   Category: TECH (matched: "software")
[2026-01-19T16:49:16.799Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T16:49:16.943Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer @ ORG_336a7f11 Medical',
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
[2026-01-19T16:49:16.943Z] [BOT] ❌ Industry post failed: Associate Software Engineer
⚠️  Channel full error count: 2/5
[2026-01-19T16:49:18.550Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer @ ORG_336a7f11 Medical',
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
[2026-01-19T16:49:18.551Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T16:49:20.052Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer-Simulation" @ ORG_b344d80e Boeing Company
[2026-01-19T16:49:20.052Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T16:49:20.589Z] [BOT ERROR] ❌ Error posting job Entry Level Software Engineer-Simulation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry Level Software Engineer-Simulation @ ORG_b344d80e Boeing Company',
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
[2026-01-19T16:49:20.589Z] [BOT] ❌ Industry post failed: Entry Level Software Engineer-Simulation
⚠️  Channel full error count: 3/5
[2026-01-19T16:49:22.200Z] [BOT ERROR] ❌ Error posting job Entry Level Software Engineer-Simulation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry Level Software Engineer-Simulation @ ORG_b344d80e Boeing Company',
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
[2026-01-19T16:49:22.200Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T16:49:26.702Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-19T16:49:26.702Z] [BOT] 📍 [ROUTING] "Senior Technical Recruiter (Temporary)" @ discord
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-19T16:49:26.967Z] [BOT ERROR] ❌ Error posting job Senior Technical Recruiter (Temporary): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Technical Recruiter (Temporary) @ discord',
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
[2026-01-19T16:49:26.968Z] [BOT] ❌ Industry post failed: Senior Technical Recruiter (Temporary)
⚠️  Channel full error count: 4/5
[2026-01-19T16:49:28.563Z] [BOT ERROR] ❌ Error posting job Senior Technical Recruiter (Temporary): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Technical Recruiter (Temporary) @ discord',
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
[2026-01-19T16:49:28.563Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T16:49:33.064Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T16:49:33.064Z] [BOT] 📍 [ROUTING] "Developer" @ ORG_eead3632
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T16:49:33.177Z] [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Developer @ Axle',
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
[2026-01-19T16:49:33.177Z] [BOT] ❌ Industry post failed: Developer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📈・JID_fb739488 is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T16:49:33.178Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 13
   Successful: 1
[2026-01-19T16:49:33.178Z] [BOT] Failed: 12
   Skipped: 0
[2026-01-19T16:49:33.178Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T16:49:33.178Z] [BOT] Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-19T16:49:33.178Z] [BOT] 1. #💻・tech-jobs: 1 posts
[2026-01-19T16:49:33.178Z] [BOT] [STATS] Channel stats saved
[2026-01-19T16:49:33.178Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T16:49:33.192Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 2 - Full Stack and Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Application Engineer – Entry Level
- [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Software Engineer
- [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Entry Level Software Engineer-Simulation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Entry Level Software Engineer-Simulation
- [BOT ERROR] ❌ Error posting job Entry Level Software Engineer-Simulation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Technical Recruiter (Temporary): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Technical Recruiter (Temporary)
- [BOT ERROR] ❌ Error posting job Senior Technical Recruiter (Temporary): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Developer
- ❌ CRITICAL: Discord channel #📈・data-science-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*