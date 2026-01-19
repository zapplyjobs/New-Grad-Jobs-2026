# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T20:11:35.855Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T20:10:53.342Z] ========================================
[2026-01-19T20:10:53.344Z] Discord Bot Execution Log
[2026-01-19T20:10:53.344Z] Environment: GitHub Actions
[2026-01-19T20:10:53.344Z] Node Version: v20.19.6
[2026-01-19T20:10:53.344Z] ========================================
[2026-01-19T20:10:53.344Z] Environment Variables Check:
[2026-01-19T20:10:53.344Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T20:10:53.344Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.344Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T20:10:53.344Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T20:10:53.344Z] 
Multi-Channel Configuration:
[2026-01-19T20:10:53.344Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.345Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.345Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.345Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.345Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.345Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.345Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.345Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.345Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T20:10:53.345Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T20:10:53.345Z] 
Data Files Check:
[2026-01-19T20:10:53.346Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114562 bytes)
[2026-01-19T20:10:53.358Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1592124 bytes)
[2026-01-19T20:10:53.358Z] 
========================================
[2026-01-19T20:10:53.358Z] Starting Enhanced Discord Bot...
[2026-01-19T20:10:53.358Z] ========================================
[2026-01-19T20:10:53.893Z] [BOT] ✅ Loaded V2 database: 2918 jobs
[2026-01-19T20:10:54.404Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T20:10:54.405Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T20:10:54.405Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T20:10:54.523Z] [BOT] ✅ Loaded pending queue: 2822 total (2802 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 - Python - Remote United States at Nextech Systems
[2026-01-19T20:10:54.526Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T20:10:54.527Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T20:10:54.527Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T20:10:54.528Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T20:10:54.528Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T20:10:54.533Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-19T20:10:54.533Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Python - Remote United States" @ ORG_8b92e640 Systems
[2026-01-19T20:10:54.533Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:10:54.537Z] [BOT ERROR] (node:2466) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T20:10:54.707Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Python - Remote United States @ ORG_8b92e640 Systems',
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
[2026-01-19T20:10:54.707Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Python - Remote United States
⚠️  Channel full error count: 1/5
[2026-01-19T20:10:56.742Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Python - Remote United States @ ORG_8b92e640 Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T20:10:58.242Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Python - Remote United States @ ORG_8b92e640 Systems (instance #1)
[2026-01-19T20:10:58.242Z] [BOT] 💾 BEFORE ARCHIVING: 2919 jobs in database
[2026-01-19T20:10:58.244Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T20:10:58.246Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-19T20:10:58.247Z] [BOT] ✅ Archiving complete: 12 archived, 2907 active
[2026-01-19T20:10:58.264Z] [BOT] 💾 Saved posted_jobs.json: 2907 active jobs
[2026-01-19T20:10:58.264Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T20:10:58.264Z] [BOT] 📍 [ROUTING] "Database Engineer 1" @ ORG_26f6f1be
   Category: TECH (matched: "data")
[2026-01-19T20:10:58.264Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:10:58.397Z] [BOT ERROR] ❌ Error posting job Database Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Database Engineer 1 @ Markon',
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
[2026-01-19T20:10:58.397Z] [BOT] ❌ Industry post failed: Database Engineer 1
⚠️  Channel full error count: 2/5
[2026-01-19T20:11:00.148Z] [BOT] ✅ Created forum post: 🏢 Database Engineer 1 @ ORG_26f6f1be in #💻・remote-usa
[2026-01-19T20:11:00.148Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T20:11:01.649Z] [BOT] 💾 Marked as posted: Database Engineer 1 @ ORG_26f6f1be (instance #1)
[2026-01-19T20:11:01.650Z] [BOT] 💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-19T20:11:01.653Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (13 total in archive)
[2026-01-19T20:11:01.653Z] [BOT] ✅ Archiving complete: 1 archived, 2907 active
[2026-01-19T20:11:01.670Z] [BOT] 💾 Saved posted_jobs.json: 2907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:11:01.670Z] [BOT] 📍 [ROUTING] "Digital Design Engineer" @ ORG_f2de61aa
[2026-01-19T20:11:01.670Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:11:02.149Z] [BOT] ✅ Created forum post: 🏢 Digital Design Engineer @ ORG_f2de61aa in #💻・tech-jobs
  ✅ Industry: Digital Design Engineer @ ORG_f2de61aa
[2026-01-19T20:11:03.967Z] [BOT] ✅ Created forum post: 🏢 Digital Design Engineer @ ORG_f2de61aa in #🦢・los-angeles
[2026-01-19T20:11:03.967Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-19T20:11:05.468Z] [BOT] 💾 Marked as posted: Digital Design Engineer @ ORG_f2de61aa (instance #1)
[2026-01-19T20:11:05.468Z] [BOT] 💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-19T20:11:05.470Z] [BOT] ✅ No jobs to archive (all 2908 jobs within 7-day window)
[2026-01-19T20:11:05.490Z] [BOT] 💾 Saved posted_jobs.json: 2908 active jobs
[2026-01-19T20:11:05.490Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T20:11:05.491Z] [BOT] 📍 [ROUTING] "2026 Full-time - Software Engineer 1 - Onsite - CA" @ ORG_75f04b84
[2026-01-19T20:11:05.491Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:11:05.671Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Software Engineer 1 - Onsite - CA @ ORG_75f04b84 in #💻・tech-jobs
[2026-01-19T20:11:05.671Z] [BOT] ✅ Industry: 2026 Full-time - Software Engineer 1 - Onsite - CA @ ORG_75f04b84
[2026-01-19T20:11:07.534Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Software Engineer 1 - Onsite - CA @ ORG_75f04b84 in #🦢・los-angeles
[2026-01-19T20:11:07.534Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-19T20:11:09.035Z] [BOT] 💾 Marked as posted: 2026 Full-time - Software Engineer 1 - Onsite - CA @ ORG_75f04b84 (instance #1)
[2026-01-19T20:11:09.035Z] [BOT] 💾 BEFORE ARCHIVING: 2909 jobs in database
[2026-01-19T20:11:09.039Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (14 total in archive)
✅ Archiving complete: 1 archived, 2908 active
[2026-01-19T20:11:09.059Z] [BOT] 💾 Saved posted_jobs.json: 2908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:11:09.059Z] [BOT] 📍 [ROUTING] "Senior Staff Mobile Platform Engineer, iOS" @ gusto
[2026-01-19T20:11:09.059Z] [BOT] Category: TECH (matched: "data engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:11:09.331Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Mobile Platform Engineer, iOS @ gusto in #💻・tech-jobs
[2026-01-19T20:11:09.331Z] [BOT] ✅ Industry: Senior Staff Mobile Platform Engineer, iOS @ gusto
[2026-01-19T20:11:11.155Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Mobile Platform Engineer, iOS @ gusto in #🌉・san-francisco
[2026-01-19T20:11:11.155Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T20:11:12.655Z] [BOT] 💾 Marked as posted: Senior Staff Mobile Platform Engineer, iOS @ gusto (instance #1)
[2026-01-19T20:11:12.655Z] [BOT] 💾 BEFORE ARCHIVING: 2909 jobs in database
[2026-01-19T20:11:12.659Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (16 total in archive)
[2026-01-19T20:11:12.659Z] [BOT] ✅ Archiving complete: 2 archived, 2907 active
[2026-01-19T20:11:12.676Z] [BOT] 💾 Saved posted_jobs.json: 2907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T20:11:12.677Z] [BOT] 📍 [ROUTING] "Sr Staff Software Engineer, Gusto Pro" @ gusto
[2026-01-19T20:11:12.677Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T20:11:12.797Z] [BOT ERROR] ❌ Error posting job Sr Staff Software Engineer, Gusto Pro: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Sr Staff Software Engineer, Gusto Pro @ gusto',
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
[2026-01-19T20:11:12.798Z] [BOT] ❌ Industry post failed: Sr Staff Software Engineer, Gusto Pro
⚠️  Channel full error count: 1/5
[2026-01-19T20:11:14.444Z] [BOT ERROR] ❌ Error posting job Sr Staff Software Engineer, Gusto Pro: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Sr Staff Software Engineer, Gusto Pro @ gusto',
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
[2026-01-19T20:11:14.444Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:11:18.945Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-19T20:11:18.946Z] [BOT] 📍 [ROUTING] "Workforce Management Program Manager" @ gusto
[2026-01-19T20:11:18.946Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-19T20:11:19.090Z] [BOT ERROR] ❌ Error posting job Workforce Management Program Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Workforce Management Program Manager @ gusto',
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
  url: 'https://discord.com/api/v10/channels/CH_d597ace3/threads'
}
[2026-01-19T20:11:19.090Z] [BOT] ❌ Industry post failed: Workforce Management Program Manager
⚠️  Channel full error count: 2/5
[2026-01-19T20:11:20.764Z] [BOT ERROR] ❌ Error posting job Workforce Management Program Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Workforce Management Program Manager @ gusto',
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
[2026-01-19T20:11:20.764Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:11:25.266Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T20:11:25.266Z] [BOT] 📍 [ROUTING] "Workforce Management Scheduling Team Lead" @ gusto
[2026-01-19T20:11:25.266Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T20:11:25.486Z] [BOT ERROR] ❌ Error posting job Workforce Management Scheduling Team Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Workforce Management Scheduling Team Lead @ gusto',
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
[2026-01-19T20:11:25.487Z] [BOT] ❌ Industry post failed: Workforce Management Scheduling Team Lead
⚠️  Channel full error count: 3/5
[2026-01-19T20:11:27.150Z] [BOT ERROR] ❌ Error posting job Workforce Management Scheduling Team Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Workforce Management Scheduling Team Lead @ gusto',
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
[2026-01-19T20:11:27.150Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T20:11:31.652Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-19T20:11:31.652Z] [BOT] 📍 [ROUTING] "Sales Associate" @ gusto
   Category: SALES (matched: "sales")
[2026-01-19T20:11:31.653Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T20:11:31.797Z] [BOT ERROR] ❌ Error posting job Sales Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Sales Associate @ gusto',
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
[2026-01-19T20:11:31.797Z] [BOT] ❌ Industry post failed: Sales Associate
⚠️  Channel full error count: 4/5
[2026-01-19T20:11:33.457Z] [BOT ERROR] ❌ Error posting job Sales Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Sales Associate @ gusto',
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
[2026-01-19T20:11:33.458Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-19T20:11:34.959Z] [BOT] 📍 [ROUTING] "Senior Manager, Revenue Accounting" @ gusto
   Category: SALES (matched: "sales")
[2026-01-19T20:11:34.959Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T20:11:35.084Z] [BOT ERROR] ❌ Error posting job Senior Manager, Revenue Accounting: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Manager, Revenue Accounting @ gusto',
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
[2026-01-19T20:11:35.084Z] [BOT] ❌ Industry post failed: Senior Manager, Revenue Accounting
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T20:11:35.085Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T20:11:35.085Z] [BOT] Total attempts: 19
   Successful: 8
   Failed: 11
   Skipped: 0
[2026-01-19T20:11:35.085Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #💻・remote-usa: 2 posts
     3. #🦢・los-angeles: 2 posts
     4. #🌉・san-francisco: 1 posts
[2026-01-19T20:11:35.085Z] [BOT] [STATS] Channel stats saved
[2026-01-19T20:11:35.086Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T20:11:35.098Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2466) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Python - Remote United States
- [BOT ERROR] ❌ Error posting job Database Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Database Engineer 1
- [BOT ERROR] ❌ Error posting job Sr Staff Software Engineer, Gusto Pro: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Sr Staff Software Engineer, Gusto Pro
- [BOT ERROR] ❌ Error posting job Sr Staff Software Engineer, Gusto Pro: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Workforce Management Program Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Workforce Management Program Manager
- [BOT ERROR] ❌ Error posting job Workforce Management Program Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Workforce Management Scheduling Team Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Workforce Management Scheduling Team Lead
- [BOT ERROR] ❌ Error posting job Workforce Management Scheduling Team Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Sales Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Sales Associate
- [BOT ERROR] ❌ Error posting job Sales Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Manager, Revenue Accounting: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Manager, Revenue Accounting
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*