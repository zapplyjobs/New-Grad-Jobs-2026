# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T01:14:52.868Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T01:14:23.989Z] ========================================
[2026-01-17T01:14:23.991Z] Discord Bot Execution Log
[2026-01-17T01:14:23.991Z] Environment: GitHub Actions
[2026-01-17T01:14:23.992Z] Node Version: v20.19.6
[2026-01-17T01:14:23.992Z] ========================================
[2026-01-17T01:14:23.992Z] Environment Variables Check:
[2026-01-17T01:14:23.992Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T01:14:23.992Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.992Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T01:14:23.992Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T01:14:23.992Z] 
Multi-Channel Configuration:
[2026-01-17T01:14:23.992Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.992Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.992Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.993Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.993Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.993Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.993Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.993Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.993Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T01:14:23.993Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T01:14:23.993Z] 
Data Files Check:
[2026-01-17T01:14:23.994Z] .github/data/new_jobs.json: ✅ Exists (10 items, 37041 bytes)
[2026-01-17T01:14:24.003Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1208606 bytes)
[2026-01-17T01:14:24.003Z] 
========================================
[2026-01-17T01:14:24.003Z] Starting Enhanced Discord Bot...
[2026-01-17T01:14:24.003Z] ========================================
[2026-01-17T01:14:24.526Z] [BOT] ✅ Loaded V2 database: 2228 jobs
[2026-01-17T01:14:25.195Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T01:14:25.196Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T01:14:25.196Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T01:14:25.310Z] [BOT] ✅ Loaded pending queue: 2805 total (2785 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Entry Level Business/Data Analyst at 360 IT Professionals
[2026-01-17T01:14:25.314Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T01:14:25.315Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T01:14:25.315Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T01:14:25.316Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-17T01:14:25.316Z] [BOT] (6 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T01:14:25.316Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san diego, san francisco, flower mound, dallas, new york
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T01:14:25.321Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T01:14:25.321Z] [BOT] 📍 [ROUTING] "Entry Level Business/Data Analyst" @ 360 IT Professionals
[2026-01-17T01:14:25.321Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T01:14:25.339Z] [BOT ERROR] (node:2948) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T01:14:25.532Z] [BOT] ✅ Created forum post: 🏢 Entry Level Business/Data Analyst @ 360 IT Professionals in #📈・JID_fb739488
  ✅ Industry: Entry Level Business/Data Analyst @ 360 IT Professionals
[2026-01-17T01:14:27.288Z] [BOT] ✅ Created forum post: 🏢 Entry Level Business/Data Analyst @ 360 IT Professionals in #🌉・san-francisco
[2026-01-17T01:14:27.289Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T01:14:28.790Z] [BOT] 💾 Marked as posted: Entry Level Business/Data Analyst @ 360 IT Professionals (instance #1)
[2026-01-17T01:14:28.790Z] [BOT] 💾 BEFORE ARCHIVING: 2229 jobs in database
[2026-01-17T01:14:28.792Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-17T01:14:28.800Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-17T01:14:28.800Z] [BOT] ✅ Archiving complete: 10 archived, 2219 active
[2026-01-17T01:14:28.821Z] [BOT] 💾 Saved posted_jobs.json: 2219 active jobs
[2026-01-17T01:14:28.821Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T01:14:31.822Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-17T01:14:31.822Z] [BOT] 📍 [ROUTING] "Geospatial Analyst 1" @ ORG_52575429 Consulting
[2026-01-17T01:14:31.823Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T01:14:32.119Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst 1 @ ORG_52575429 Consulting in #📣・marketing-jobs
[2026-01-17T01:14:32.119Z] [BOT] ✅ Industry: Geospatial Analyst 1 @ ORG_52575429 Consulting
[2026-01-17T01:14:33.791Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Geospatial Analyst 1 @ ORG_52575429 Consulting',
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
[2026-01-17T01:14:33.791Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T01:14:35.292Z] [BOT] 💾 Marked as posted: Geospatial Analyst 1 @ ORG_52575429 Consulting (instance #1)
[2026-01-17T01:14:35.292Z] [BOT] 💾 BEFORE ARCHIVING: 2220 jobs in database
[2026-01-17T01:14:35.295Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (11 total in archive)
[2026-01-17T01:14:35.295Z] [BOT] ✅ Archiving complete: 1 archived, 2219 active
[2026-01-17T01:14:35.316Z] [BOT] 💾 Saved posted_jobs.json: 2219 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T01:14:38.317Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-17T01:14:38.318Z] [BOT] 📍 [ROUTING] "Hiring Recent graduated students for full time jobs" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:14:38.503Z] [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies',
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
[2026-01-17T01:14:38.503Z] [BOT] ❌ Industry post failed: Hiring Recent graduated students for full time jobs
⚠️  Channel full error count: 1/5
[2026-01-17T01:14:40.132Z] [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies',
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
[2026-01-17T01:14:40.132Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T01:14:41.634Z] [BOT] 📍 [ROUTING] "Hiring Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:14:41.759Z] [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_717e47bc/threads'
}
[2026-01-17T01:14:41.760Z] [BOT] ❌ Industry post failed: Hiring Software Engineer
⚠️  Channel full error count: 2/5
[2026-01-17T01:14:43.401Z] [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T01:14:43.401Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T01:14:44.902Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:14:45.042Z] [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T01:14:45.042Z] [BOT] ❌ Industry post failed: Hiring Entry Level Software Engineer
⚠️  Channel full error count: 3/5
[2026-01-17T01:14:46.665Z] [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T01:14:46.665Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-17T01:14:48.166Z] [BOT] 📍 [ROUTING] "Training & Placement on Informatica/ Microstrategy" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
[2026-01-17T01:14:48.166Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:14:48.372Z] [BOT ERROR] ❌ Error posting job Training & Placement on Informatica/ Microstrategy: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T01:14:48.372Z] [BOT] ❌ Industry post failed: Training & Placement on Informatica/ Microstrategy
⚠️  Channel full error count: 4/5
[2026-01-17T01:14:50.044Z] [BOT ERROR] ❌ Error posting job Training & Placement on Informatica/ Microstrategy: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T01:14:50.044Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T01:14:51.545Z] [BOT] 📍 [ROUTING] "Software Engineer Position" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2026-01-17T01:14:51.545Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T01:14:51.684Z] [BOT ERROR] ❌ Error posting job Software Engineer Position: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T01:14:51.684Z] [BOT] ❌ Industry post failed: Software Engineer Position
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
[2026-01-17T01:14:51.684Z] [BOT] ❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T01:14:51.685Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T01:14:51.685Z] [BOT] Total attempts: 13
   Successful: 3
   Failed: 10
   Skipped: 0
[2026-01-17T01:14:51.685Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T01:14:51.685Z] [BOT] Last cleanup: Never
   Total posts: 3
   Channels used: 3
   Top channels:
[2026-01-17T01:14:51.686Z] [BOT] 1. #📈・JID_fb739488: 1 posts
     2. #🌉・san-francisco: 1 posts
     3. #📣・marketing-jobs: 1 posts
[2026-01-17T01:14:51.686Z] [BOT] [STATS] Channel stats saved
[2026-01-17T01:14:51.686Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T01:14:51.699Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2948) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Hiring Recent graduated students for full time jobs
- [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Hiring Software Engineer
- [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Hiring Entry Level Software Engineer
- [BOT ERROR] ❌ Error posting job Hiring Entry Level Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Training & Placement on Informatica/ Microstrategy: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Training & Placement on Informatica/ Microstrategy
- [BOT ERROR] ❌ Error posting job Training & Placement on Informatica/ Microstrategy: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Position: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Position
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- [BOT] ❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*