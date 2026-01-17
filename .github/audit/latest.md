# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T01:56:21.855Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T01:56:00.151Z] ========================================
[2026-01-17T01:56:00.153Z] Discord Bot Execution Log
[2026-01-17T01:56:00.153Z] Environment: GitHub Actions
[2026-01-17T01:56:00.153Z] Node Version: v20.19.6
[2026-01-17T01:56:00.153Z] ========================================
[2026-01-17T01:56:00.153Z] Environment Variables Check:
[2026-01-17T01:56:00.153Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T01:56:00.153Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T01:56:00.154Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T01:56:00.154Z] 
Multi-Channel Configuration:
[2026-01-17T01:56:00.154Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T01:56:00.154Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T01:56:00.155Z] 
Data Files Check:
[2026-01-17T01:56:00.155Z] .github/data/new_jobs.json: ✅ Exists (10 items, 25998 bytes)
[2026-01-17T01:56:00.164Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1203152 bytes)
[2026-01-17T01:56:00.164Z] 
========================================
[2026-01-17T01:56:00.164Z] Starting Enhanced Discord Bot...
[2026-01-17T01:56:00.164Z] ========================================
[2026-01-17T01:56:00.690Z] [BOT] ✅ Loaded V2 database: 2219 jobs
[2026-01-17T01:56:01.267Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T01:56:01.267Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T01:56:01.267Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T01:56:01.379Z] [BOT] ✅ Loaded pending queue: 2809 total (2789 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Hiring Recent graduated students for full time jobs at AG Technologies
[2026-01-17T01:56:01.382Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T01:56:01.382Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T01:56:01.382Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T01:56:01.383Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-17T01:56:01.383Z] [BOT] (6 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T01:56:01.384Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san diego, san francisco, flower mound, dallas, new york
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T01:56:01.389Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-17T01:56:01.389Z] [BOT] 📍 [ROUTING] "Hiring Recent graduated students for full time jobs" @ ORG_9af9eef3 Technologies
[2026-01-17T01:56:01.389Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:56:01.406Z] [BOT ERROR] (node:2349) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T01:56:01.690Z] [BOT] ✅ Created forum post: 🏢 Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies
[2026-01-17T01:56:03.353Z] [BOT] ✅ Created forum post: 🏢 Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-17T01:56:04.855Z] [BOT] 💾 Marked as posted: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T01:56:04.856Z] [BOT] 💾 BEFORE ARCHIVING: 2220 jobs in database
[2026-01-17T01:56:04.858Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-17T01:56:04.862Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-17T01:56:04.862Z] [BOT] ✅ Archiving complete: 5 archived, 2215 active
[2026-01-17T01:56:04.876Z] [BOT] 💾 Saved posted_jobs.json: 2215 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T01:56:04.876Z] [BOT] 📍 [ROUTING] "Hiring Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:56:05.028Z] [BOT] ✅ Created forum post: 🏢 Hiring Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-01-17T01:56:05.028Z] [BOT] ✅ Industry: Hiring Software Engineer @ ORG_9af9eef3 Technologies
[2026-01-17T01:56:06.626Z] [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hiring Software Engineer @ ORG_9af9eef3 Technologies',
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
[2026-01-17T01:56:06.627Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T01:56:08.128Z] [BOT] 💾 Marked as posted: Hiring Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-17T01:56:08.128Z] [BOT] 💾 BEFORE ARCHIVING: 2216 jobs in database
[2026-01-17T01:56:08.130Z] [BOT] ✅ No jobs to archive (all 2216 jobs within 7-day window)
[2026-01-17T01:56:08.143Z] [BOT] 💾 Saved posted_jobs.json: 2216 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T01:56:08.143Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:56:08.275Z] [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies',
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
[2026-01-17T01:56:08.275Z] [BOT] ❌ Industry post failed: Hiring Entry Level Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-17T01:56:09.888Z] [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies',
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
  url: 'https://discord.com/api/v10/channels/CH_297f020b/threads'
}
[2026-01-17T01:56:09.888Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-17T01:56:11.390Z] [BOT] 📍 [ROUTING] "Training & Placement on Informatica/ Microstrategy" @ ORG_9af9eef3 Technologies
[2026-01-17T01:56:11.391Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:56:11.489Z] [BOT ERROR] ❌ Error posting job Training & Placement on Informatica/ Microstrategy: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies',
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
[2026-01-17T01:56:11.489Z] [BOT] ❌ Industry post failed: Training & Placement on Informatica/ Microstrategy
⚠️  Channel full error count: 2/5
[2026-01-17T01:56:13.065Z] [BOT ERROR] ❌ Error posting job Training & Placement on Informatica/ Microstrategy: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies',
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
[2026-01-17T01:56:13.066Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T01:56:14.567Z] [BOT] 📍 [ROUTING] "Software Engineer Position" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2026-01-17T01:56:14.567Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:56:14.701Z] [BOT ERROR] ❌ Error posting job Software Engineer Position: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Position @ ORG_9af9eef3 Technologies',
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
[2026-01-17T01:56:14.701Z] [BOT] ❌ Industry post failed: Software Engineer Position
⚠️  Channel full error count: 3/5
[2026-01-17T01:56:16.435Z] [BOT ERROR] ❌ Error posting job Software Engineer Position: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Position @ ORG_9af9eef3 Technologies',
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
[2026-01-17T01:56:16.436Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T01:56:17.937Z] [BOT] 📍 [ROUTING] "Software Engineering, Associate" @ ORG_d6d2009d
   Category: TECH (matched: "software")
[2026-01-17T01:56:17.937Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:56:18.029Z] [BOT ERROR] ❌ Error posting job Software Engineering, Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineering, Associate @ Peraton',
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
[2026-01-17T01:56:18.029Z] [BOT] ❌ Industry post failed: Software Engineering, Associate
⚠️  Channel full error count: 4/5
[2026-01-17T01:56:19.631Z] [BOT ERROR] ❌ Error posting job Software Engineering, Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineering, Associate @ Peraton',
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
[2026-01-17T01:56:19.631Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T01:56:21.131Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_0c2b26a5
[2026-01-17T01:56:21.132Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:56:21.227Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer @ Moog',
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
[2026-01-17T01:56:21.227Z] [BOT] ❌ Industry post failed: Associate Software Engineer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T01:56:21.228Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 13
[2026-01-17T01:56:21.228Z] [BOT] Successful: 3
   Failed: 10
   Skipped: 0
[2026-01-17T01:56:21.229Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 2
   Top channels:
[2026-01-17T01:56:21.229Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #🤠・austin: 1 posts
[2026-01-17T01:56:21.229Z] [BOT] [STATS] Channel stats saved
[2026-01-17T01:56:21.229Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T01:56:21.242Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2349) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Hiring Entry Level Software Engineer
- [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Training & Placement on Informatica/ Microstrategy: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Training & Placement on Informatica/ Microstrategy
- [BOT ERROR] ❌ Error posting job Training & Placement on Informatica/ Microstrategy: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Position: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Position
- [BOT ERROR] ❌ Error posting job Software Engineer Position: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineering, Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineering, Associate
- [BOT ERROR] ❌ Error posting job Software Engineering, Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Software Engineer
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*