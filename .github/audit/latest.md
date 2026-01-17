# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T00:45:45.201Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T00:45:09.995Z] ========================================
[2026-01-17T00:45:09.997Z] Discord Bot Execution Log
[2026-01-17T00:45:09.997Z] Environment: GitHub Actions
[2026-01-17T00:45:09.997Z] Node Version: v20.19.6
[2026-01-17T00:45:09.997Z] ========================================
[2026-01-17T00:45:09.997Z] Environment Variables Check:
[2026-01-17T00:45:09.997Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T00:45:09.997Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.997Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T00:45:09.997Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T00:45:09.997Z] 
Multi-Channel Configuration:
[2026-01-17T00:45:09.998Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.998Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.998Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.998Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.998Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.998Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.998Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.998Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.998Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T00:45:09.998Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T00:45:09.998Z] 
Data Files Check:
[2026-01-17T00:45:09.999Z] .github/data/new_jobs.json: ✅ Exists (10 items, 38789 bytes)
[2026-01-17T00:45:10.007Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1210726 bytes)
[2026-01-17T00:45:10.008Z] 
========================================
[2026-01-17T00:45:10.008Z] Starting Enhanced Discord Bot...
[2026-01-17T00:45:10.008Z] ========================================
[2026-01-17T00:45:10.552Z] [BOT] ✅ Loaded V2 database: 2232 jobs
[2026-01-17T00:45:11.246Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T00:45:11.247Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T00:45:11.247Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T00:45:11.362Z] [BOT] ✅ Loaded pending queue: 2791 total (2771 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Entry Level Controls & Software Test Engineer at Solar Turbines
[2026-01-17T00:45:11.365Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T00:45:11.365Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T00:45:11.365Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T00:45:11.366Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-17T00:45:11.366Z] [BOT] (6 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T00:45:11.366Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san diego, san francisco, flower mound, dallas, new york
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T00:45:11.371Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-17T00:45:11.372Z] [BOT] 📍 [ROUTING] "Entry Level Controls & Software Test Engineer" @ ORG_31ce6e79 Turbines
[2026-01-17T00:45:11.372Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T00:45:11.389Z] [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T00:45:11.552Z] [BOT] ✅ Created forum post: 🏢 Entry Level Controls & Software Test Engineer @ ORG_31ce6e79 Turbines in #💻・tech-jobs
  ✅ Industry: Entry Level Controls & Software Test Engineer @ ORG_31ce6e79 Turbines
[2026-01-17T00:45:13.335Z] [BOT] ✅ Created forum post: 🏢 Entry Level Controls & Software Test Engineer @ ORG_31ce6e79 Turbines in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T00:45:14.836Z] [BOT] 💾 Marked as posted: Entry Level Controls & Software Test Engineer @ ORG_31ce6e79 Turbines (instance #1)
[2026-01-17T00:45:14.836Z] [BOT] 💾 BEFORE ARCHIVING: 2233 jobs in database
[2026-01-17T00:45:14.839Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-17T00:45:14.842Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-17T00:45:14.842Z] [BOT] ✅ Archiving complete: 5 archived, 2228 active
[2026-01-17T00:45:14.862Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T00:45:14.862Z] [BOT] 📍 [ROUTING] "Junior AI-Assisted Software Engineer" @ ORG_0115175c
[2026-01-17T00:45:14.862Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T00:45:15.187Z] [BOT] ✅ Created forum post: 🏢 Junior AI-Assisted Software Engineer @ ORG_0115175c in #💻・tech-jobs
[2026-01-17T00:45:15.187Z] [BOT] ✅ Industry: Junior AI-Assisted Software Engineer @ ORG_0115175c
[2026-01-17T00:45:16.964Z] [BOT] ✅ Created forum post: 🏢 Junior AI-Assisted Software Engineer @ ORG_0115175c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T00:45:18.465Z] [BOT] 💾 Marked as posted: Junior AI-Assisted Software Engineer @ ORG_0115175c (instance #1)
[2026-01-17T00:45:18.465Z] [BOT] 💾 BEFORE ARCHIVING: 2229 jobs in database
[2026-01-17T00:45:18.468Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (6 total in archive)
[2026-01-17T00:45:18.468Z] [BOT] ✅ Archiving complete: 1 archived, 2228 active
[2026-01-17T00:45:18.482Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T00:45:18.482Z] [BOT] 📍 [ROUTING] "Programmer Analyst-.Net Programmer - US Citizen" @ 360 IT Professionals
[2026-01-17T00:45:18.482Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T00:45:18.828Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals in #💻・tech-jobs
  ✅ Industry: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals
[2026-01-17T00:45:20.633Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T00:45:22.134Z] [BOT] 💾 Marked as posted: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals (instance #1)
[2026-01-17T00:45:22.134Z] [BOT] 💾 BEFORE ARCHIVING: 2229 jobs in database
[2026-01-17T00:45:22.137Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (7 total in archive)
[2026-01-17T00:45:22.137Z] [BOT] ✅ Archiving complete: 1 archived, 2228 active
[2026-01-17T00:45:22.154Z] [BOT] 💾 Saved posted_jobs.json: 2228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T00:45:22.155Z] [BOT] 📍 [ROUTING] "Hiring Recent graduated students for full time jobs" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
[2026-01-17T00:45:22.155Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T00:45:22.286Z] [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T00:45:22.286Z] [BOT] ❌ Industry post failed: Hiring Recent graduated students for full time jobs
⚠️  Channel full error count: 1/5
[2026-01-17T00:45:23.912Z] [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T00:45:23.912Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-17T00:45:25.413Z] [BOT] 📍 [ROUTING] "Hiring Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T00:45:25.535Z] [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T00:45:25.535Z] [BOT] ❌ Industry post failed: Hiring Software Engineer
⚠️  Channel full error count: 2/5
[2026-01-17T00:45:27.145Z] [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T00:45:27.145Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T00:45:31.646Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T00:45:31.646Z] [BOT] 📍 [ROUTING] "Entry Level Business/Data Analyst" @ 360 IT Professionals
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T00:45:31.829Z] [BOT ERROR] ❌ Error posting job Entry Level Business/Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry Level Business/Data Analyst @ 360 IT Professionals',
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
[2026-01-17T00:45:31.829Z] [BOT] ❌ Industry post failed: Entry Level Business/Data Analyst
⚠️  Channel full error count: 3/5
[2026-01-17T00:45:33.441Z] [BOT ERROR] ❌ Error posting job Entry Level Business/Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry Level Business/Data Analyst @ 360 IT Professionals',
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
[2026-01-17T00:45:33.442Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T00:45:37.943Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-17T00:45:37.943Z] [BOT] 📍 [ROUTING] "Geospatial Analyst 1" @ ORG_52575429 Consulting
   Category: MARKETING (matched: "growth")
[2026-01-17T00:45:37.943Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T00:45:38.076Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-17T00:45:38.076Z] [BOT] ❌ Industry post failed: Geospatial Analyst 1
⚠️  Channel full error count: 4/5
[2026-01-17T00:45:39.735Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-17T00:45:39.735Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T00:45:44.237Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T00:45:44.237Z] [BOT] 📍 [ROUTING] "Salesforce OBIEE ETL Training and Placement" @ ORG_9af9eef3 Technologies
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T00:45:44.383Z] [BOT ERROR] ❌ Error posting job Salesforce OBIEE ETL Training and Placement: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies',
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
[2026-01-17T00:45:44.384Z] [BOT] ❌ Industry post failed: Salesforce OBIEE ETL Training and Placement
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T00:45:44.384Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T00:45:44.385Z] [BOT] Total attempts: 15
   Successful: 6
   Failed: 9
   Skipped: 0
[2026-01-17T00:45:44.385Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T00:45:44.385Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
[2026-01-17T00:45:44.385Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #🦢・los-angeles: 1 posts
     3. #💻・remote-usa: 1 posts
     4. #🌉・san-francisco: 1 posts
[2026-01-17T00:45:44.385Z] [BOT] [STATS] Channel stats saved
[2026-01-17T00:45:44.386Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T00:45:44.398Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Hiring Recent graduated students for full time jobs
- [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Hiring Software Engineer
- [BOT ERROR] ❌ Error posting job Hiring Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Entry Level Business/Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Entry Level Business/Data Analyst
- [BOT ERROR] ❌ Error posting job Entry Level Business/Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Geospatial Analyst 1
- [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Salesforce OBIEE ETL Training and Placement: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Salesforce OBIEE ETL Training and Placement
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*