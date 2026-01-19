# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T19:55:17.128Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T19:54:31.622Z] ========================================
[2026-01-19T19:54:31.623Z] Discord Bot Execution Log
[2026-01-19T19:54:31.623Z] Environment: GitHub Actions
[2026-01-19T19:54:31.623Z] Node Version: v20.19.6
[2026-01-19T19:54:31.623Z] ========================================
[2026-01-19T19:54:31.623Z] Environment Variables Check:
[2026-01-19T19:54:31.623Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T19:54:31.624Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T19:54:31.624Z] 
Multi-Channel Configuration:
[2026-01-19T19:54:31.624Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.624Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T19:54:31.625Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T19:54:31.625Z] 
Data Files Check:
[2026-01-19T19:54:31.626Z] .github/data/new_jobs.json: ✅ Exists (10 items, 93231 bytes)
[2026-01-19T19:54:31.637Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1595016 bytes)
[2026-01-19T19:54:31.637Z] 
========================================
[2026-01-19T19:54:31.637Z] Starting Enhanced Discord Bot...
[2026-01-19T19:54:31.637Z] ========================================
[2026-01-19T19:54:32.098Z] [BOT] ✅ Loaded V2 database: 2926 jobs
[2026-01-19T19:54:33.443Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T19:54:33.444Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T19:54:33.444Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T19:54:33.597Z] [BOT] ✅ Loaded pending queue: 2822 total (2802 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Scholar - Interdisciplinary Data Science at University of Nevada Las Vegas (UNLV)
[2026-01-19T19:54:33.601Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T19:54:33.601Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T19:54:33.602Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T19:54:33.602Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T19:54:33.603Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T19:54:33.607Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-19T19:54:33.607Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Interdisciplinary Data Science" @ ORG_9d38443e of Nevada Las Vegas (UNLV)
   Category: AI (matched: "machine learning")
[2026-01-19T19:54:33.607Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T19:54:33.612Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T19:54:33.908Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV) in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV)
[2026-01-19T19:54:35.697Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV) in #💻・remote-usa
[2026-01-19T19:54:35.698Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T19:54:37.200Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV) (instance #1)
[2026-01-19T19:54:37.200Z] [BOT] 💾 BEFORE ARCHIVING: 2927 jobs in database
[2026-01-19T19:54:37.202Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T19:54:37.206Z] [BOT] 📦 Archived 13 jobs to 2026-01.json (13 total in archive)
[2026-01-19T19:54:37.206Z] [BOT] ✅ Archiving complete: 13 archived, 2914 active
[2026-01-19T19:54:37.240Z] [BOT] 💾 Saved posted_jobs.json: 2914 active jobs
[2026-01-19T19:54:37.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T19:54:40.240Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T19:54:40.240Z] [BOT] 📍 [ROUTING] "GIS Technician" @ ORG_d41a2092
[2026-01-19T19:54:40.241Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T19:54:40.607Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ ORG_d41a2092 in #🩺・healthcare-jobs
  ✅ Industry: GIS Technician @ ORG_d41a2092
[2026-01-19T19:54:44.149Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ ORG_d41a2092 in #🦢・los-angeles
[2026-01-19T19:54:44.149Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-19T19:54:45.651Z] [BOT] 💾 Marked as posted: GIS Technician @ ORG_d41a2092 (instance #1)
[2026-01-19T19:54:45.651Z] [BOT] 💾 BEFORE ARCHIVING: 2915 jobs in database
[2026-01-19T19:54:45.653Z] [BOT] ✅ No jobs to archive (all 2915 jobs within 7-day window)
[2026-01-19T19:54:45.673Z] [BOT] 💾 Saved posted_jobs.json: 2915 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:54:48.674Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-19T19:54:48.675Z] [BOT] 📍 [ROUTING] "DevSecOps Software Engineer" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T19:54:48.675Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T19:54:48.952Z] [BOT] ✅ Created forum post: 🏢 DevSecOps Software Engineer @ ORG_b344d80e Boeing Company in #📈・JID_fb739488
  ✅ Industry: DevSecOps Software Engineer @ ORG_b344d80e Boeing Company
[2026-01-19T19:54:50.717Z] [BOT] ✅ Created forum post: 🏢 DevSecOps Software Engineer @ ORG_b344d80e Boeing Company in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-19T19:54:52.219Z] [BOT] 💾 Marked as posted: DevSecOps Software Engineer @ ORG_b344d80e Boeing Company (instance #1)
💾 BEFORE ARCHIVING: 2916 jobs in database
[2026-01-19T19:54:52.221Z] [BOT] ✅ No jobs to archive (all 2916 jobs within 7-day window)
[2026-01-19T19:54:52.239Z] [BOT] 💾 Saved posted_jobs.json: 2916 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:54:52.240Z] [BOT] 📍 [ROUTING] "Head of Product, Core Experiences Platform" @ gusto
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T19:54:52.240Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T19:54:52.444Z] [BOT] ✅ Created forum post: 🏢 Head of Product, Core Experiences Platform @ gusto in #📈・JID_fb739488
[2026-01-19T19:54:52.445Z] [BOT] ✅ Industry: Head of Product, Core Experiences Platform @ gusto
[2026-01-19T19:54:54.361Z] [BOT] ✅ Created forum post: 🏢 Head of Product, Core Experiences Platform @ gusto in #🌉・san-francisco
[2026-01-19T19:54:54.362Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T19:54:55.863Z] [BOT] 💾 Marked as posted: Head of Product, Core Experiences Platform @ gusto (instance #1)
[2026-01-19T19:54:55.863Z] [BOT] 💾 BEFORE ARCHIVING: 2917 jobs in database
[2026-01-19T19:54:55.865Z] [BOT] ✅ No jobs to archive (all 2917 jobs within 7-day window)
[2026-01-19T19:54:55.883Z] [BOT] 💾 Saved posted_jobs.json: 2917 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:54:55.884Z] [BOT] 📍 [ROUTING] "Senior Principal Revenue Analyst" @ gusto
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T19:54:55.884Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T19:54:56.087Z] [BOT] ✅ Created forum post: 🏢 Senior Principal Revenue Analyst @ gusto in #📈・JID_fb739488
  ✅ Industry: Senior Principal Revenue Analyst @ gusto
[2026-01-19T19:54:57.751Z] [BOT ERROR] ❌ Error posting job Senior Principal Revenue Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Principal Revenue Analyst @ gusto',
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
[2026-01-19T19:54:57.751Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T19:54:59.252Z] [BOT] 💾 Marked as posted: Senior Principal Revenue Analyst @ gusto (instance #1)
[2026-01-19T19:54:59.252Z] [BOT] 💾 BEFORE ARCHIVING: 2918 jobs in database
[2026-01-19T19:54:59.254Z] [BOT] ✅ No jobs to archive (all 2918 jobs within 7-day window)
[2026-01-19T19:54:59.271Z] [BOT] 💾 Saved posted_jobs.json: 2918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:55:02.273Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-19T19:55:02.273Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Python - Remote United States" @ ORG_8b92e640 Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:55:02.562Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T19:55:02.562Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Python - Remote United States
⚠️  Channel full error count: 1/5
[2026-01-19T19:55:04.240Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-19T19:55:04.240Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T19:55:05.741Z] [BOT] 📍 [ROUTING] "Database Engineer 1" @ ORG_26f6f1be
   Category: TECH (matched: "data")
[2026-01-19T19:55:05.741Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:55:05.946Z] [BOT ERROR] ❌ Error posting job Database Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T19:55:05.946Z] [BOT] ❌ Industry post failed: Database Engineer 1
⚠️  Channel full error count: 2/5
[2026-01-19T19:55:07.584Z] [BOT ERROR] ❌ Error posting job Database Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-19T19:55:07.584Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T19:55:09.085Z] [BOT] 📍 [ROUTING] "Digital Design Engineer" @ ORG_f2de61aa
   Category: TECH (matched: "engineer/engineering")
[2026-01-19T19:55:09.085Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:55:09.245Z] [BOT ERROR] ❌ Error posting job Digital Design Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Design Engineer @ Rambus',
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
[2026-01-19T19:55:09.245Z] [BOT] ❌ Industry post failed: Digital Design Engineer
⚠️  Channel full error count: 3/5
[2026-01-19T19:55:10.926Z] [BOT ERROR] ❌ Error posting job Digital Design Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Design Engineer @ Rambus',
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
[2026-01-19T19:55:10.926Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T19:55:12.427Z] [BOT] 📍 [ROUTING] "2026 Full-time - Software Engineer 1 - Onsite - CA" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:55:12.566Z] [BOT ERROR] ❌ Error posting job 2026 Full-time - Software Engineer 1 - Onsite - CA: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 2026 Full-time - Software Engineer 1 - Onsite - CA @ RTX',
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
[2026-01-19T19:55:12.567Z] [BOT] ❌ Industry post failed: 2026 Full-time - Software Engineer 1 - Onsite - CA
⚠️  Channel full error count: 4/5
[2026-01-19T19:55:14.224Z] [BOT ERROR] ❌ Error posting job 2026 Full-time - Software Engineer 1 - Onsite - CA: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 2026 Full-time - Software Engineer 1 - Onsite - CA @ RTX',
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
[2026-01-19T19:55:14.224Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T19:55:15.725Z] [BOT] 📍 [ROUTING] "Senior Staff Mobile Platform Engineer, iOS" @ gusto
   Category: TECH (matched: "data engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:55:15.905Z] [BOT ERROR] ❌ Error posting job Senior Staff Mobile Platform Engineer, iOS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Staff Mobile Platform Engineer, iOS @ gusto',
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
[2026-01-19T19:55:15.905Z] [BOT] ❌ Industry post failed: Senior Staff Mobile Platform Engineer, iOS
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T19:55:15.905Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 19
[2026-01-19T19:55:15.906Z] [BOT] Successful: 9
   Failed: 10
   Skipped: 0
[2026-01-19T19:55:15.906Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T19:55:15.906Z] [BOT] Total posts: 9
   Channels used: 6
   Top channels:
     1. #📈・JID_fb739488: 3 posts
     2. #🦢・los-angeles: 2 posts
[2026-01-19T19:55:15.906Z] [BOT] 3. #🤖・ai-jobs: 1 posts
     4. #💻・remote-usa: 1 posts
     5. #🩺・healthcare-jobs: 1 posts
[2026-01-19T19:55:15.906Z] [BOT] [STATS] Channel stats saved
[2026-01-19T19:55:15.906Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T19:55:15.915Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Principal Revenue Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Python - Remote United States
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Database Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Database Engineer 1
- [BOT ERROR] ❌ Error posting job Database Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Digital Design Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Digital Design Engineer
- [BOT ERROR] ❌ Error posting job Digital Design Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job 2026 Full-time - Software Engineer 1 - Onsite - CA: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: 2026 Full-time - Software Engineer 1 - Onsite - CA
- [BOT ERROR] ❌ Error posting job 2026 Full-time - Software Engineer 1 - Onsite - CA: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Staff Mobile Platform Engineer, iOS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Staff Mobile Platform Engineer, iOS
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*