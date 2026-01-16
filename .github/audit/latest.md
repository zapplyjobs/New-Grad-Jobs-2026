# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T21:53:24.394Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T21:52:49.904Z] ========================================
[2026-01-16T21:52:49.906Z] Discord Bot Execution Log
[2026-01-16T21:52:49.906Z] Environment: GitHub Actions
[2026-01-16T21:52:49.906Z] Node Version: v20.19.6
[2026-01-16T21:52:49.906Z] ========================================
[2026-01-16T21:52:49.906Z] Environment Variables Check:
[2026-01-16T21:52:49.906Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T21:52:49.906Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.906Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T21:52:49.907Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T21:52:49.907Z] 
Multi-Channel Configuration:
[2026-01-16T21:52:49.907Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.907Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.907Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.907Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.907Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.907Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.907Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.907Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.907Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T21:52:49.907Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T21:52:49.907Z] 
Data Files Check:
[2026-01-16T21:52:49.908Z] .github/data/new_jobs.json: ✅ Exists (10 items, 13880 bytes)
[2026-01-16T21:52:49.916Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1159643 bytes)
[2026-01-16T21:52:49.916Z] 
========================================
[2026-01-16T21:52:49.916Z] Starting Enhanced Discord Bot...
[2026-01-16T21:52:49.916Z] ========================================
[2026-01-16T21:52:50.443Z] [BOT] ✅ Loaded V2 database: 2139 jobs
[2026-01-16T21:52:51.254Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T21:52:51.254Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T21:52:51.254Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T21:52:51.368Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manufacturing Software Engineer, Test Program Applications & Automation at GlobalFoundries
[2026-01-16T21:52:51.371Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T21:52:51.371Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T21:52:51.372Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T21:52:51.372Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T21:52:51.373Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T21:52:51.373Z] [BOT] - Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T21:52:51.377Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-16T21:52:51.377Z] [BOT] 📍 [ROUTING] "Manufacturing Software Engineer, Test Program Applications & Automation" @ ORG_67830c77
[2026-01-16T21:52:51.377Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:52:51.395Z] [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T21:52:51.600Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Software Engineer, Test Program Applications & Automation @ ORG_67830c77 in #💻・tech-jobs
  ✅ Industry: Manufacturing Software Engineer, Test Program Applications & Automation @ ORG_67830c77
[2026-01-16T21:52:53.474Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Software Engineer, Test Program Applications & Automation @ ORG_67830c77 in #💻・remote-usa
[2026-01-16T21:52:53.474Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T21:52:54.975Z] [BOT] 💾 Marked as posted: Manufacturing Software Engineer, Test Program Applications & Automation @ ORG_67830c77 (instance #1)
[2026-01-16T21:52:54.976Z] [BOT] 💾 BEFORE ARCHIVING: 2140 jobs in database
[2026-01-16T21:52:54.977Z] [BOT] ✅ No jobs to archive (all 2140 jobs within 7-day window)
[2026-01-16T21:52:54.995Z] [BOT] 💾 Saved posted_jobs.json: 2140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:52:54.995Z] [BOT] 📍 [ROUTING] "Junior Software Developer" @ qode.world
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:52:55.206Z] [BOT] ✅ Created forum post: 🏢 Junior Software Developer @ qode.world in #💻・tech-jobs
[2026-01-16T21:52:55.207Z] [BOT] ✅ Industry: Junior Software Developer @ qode.world
[2026-01-16T21:52:57.024Z] [BOT] ✅ Created forum post: 🏢 Junior Software Developer @ qode.world in #💻・remote-usa
[2026-01-16T21:52:57.025Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T21:52:58.525Z] [BOT] 💾 Marked as posted: Junior Software Developer @ qode.world (instance #1)
[2026-01-16T21:52:58.526Z] [BOT] 💾 BEFORE ARCHIVING: 2141 jobs in database
[2026-01-16T21:52:58.527Z] [BOT] ✅ No jobs to archive (all 2141 jobs within 7-day window)
[2026-01-16T21:52:58.540Z] [BOT] 💾 Saved posted_jobs.json: 2141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:52:58.541Z] [BOT] 📍 [ROUTING] "Junior Computational Linguist" @ ORG_56d3e805
[2026-01-16T21:52:58.541Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:52:58.833Z] [BOT] ✅ Created forum post: 🏢 Junior Computational Linguist @ ORG_56d3e805 in #💻・tech-jobs
  ✅ Industry: Junior Computational Linguist @ ORG_56d3e805
[2026-01-16T21:53:00.335Z] [BOT] 💾 Marked as posted: Junior Computational Linguist @ ORG_56d3e805 (instance #1)
[2026-01-16T21:53:00.335Z] [BOT] 💾 BEFORE ARCHIVING: 2142 jobs in database
[2026-01-16T21:53:00.337Z] [BOT] ✅ No jobs to archive (all 2142 jobs within 7-day window)
[2026-01-16T21:53:00.352Z] [BOT] 💾 Saved posted_jobs.json: 2142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:53:00.353Z] [BOT] 📍 [ROUTING] "SAS Programmer" @ ORG_6675b3b7 Information System
   Category: TECH (matched: "software")
[2026-01-16T21:53:00.353Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T21:53:00.558Z] [BOT] ✅ Created forum post: 🏢 SAS Programmer @ ORG_6675b3b7 Information System in #💻・tech-jobs
  ✅ Industry: SAS Programmer @ ORG_6675b3b7 Information System
[2026-01-16T21:53:02.260Z] [BOT] ✅ Created forum post: 🏢 SAS Programmer @ ORG_6675b3b7 Information System in #🌆・chicago
[2026-01-16T21:53:02.261Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-16T21:53:03.762Z] [BOT] 💾 Marked as posted: SAS Programmer @ ORG_6675b3b7 Information System (instance #1)
[2026-01-16T21:53:03.762Z] [BOT] 💾 BEFORE ARCHIVING: 2143 jobs in database
[2026-01-16T21:53:03.764Z] [BOT] ✅ No jobs to archive (all 2143 jobs within 7-day window)
[2026-01-16T21:53:03.778Z] [BOT] 💾 Saved posted_jobs.json: 2143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:53:06.780Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-16T21:53:06.780Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T21:53:06.781Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:53:07.330Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c
[2026-01-16T21:53:09.016Z] [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ByteDance',
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
[2026-01-16T21:53:09.016Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T21:53:10.518Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c (instance #1)
[2026-01-16T21:53:10.518Z] [BOT] 💾 BEFORE ARCHIVING: 2144 jobs in database
[2026-01-16T21:53:10.519Z] [BOT] ✅ No jobs to archive (all 2144 jobs within 7-day window)
[2026-01-16T21:53:10.535Z] [BOT] 💾 Saved posted_jobs.json: 2144 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T21:53:10.536Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - E-Commerce Governance - BS/MS" @ ORG_08c9a13c
[2026-01-16T21:53:10.536Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:53:11.762Z] [BOT ERROR] ❌ Error posting job Machine Learning Graduate - E-Commerce Governance - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Graduate - E-Commerce Governance - BS/MS @ ByteDance',
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
[2026-01-16T21:53:11.762Z] [BOT] ❌ Industry post failed: Machine Learning Graduate - E-Commerce Governance - BS/MS
⚠️  Channel full error count: 1/5
[2026-01-16T21:53:13.458Z] [BOT ERROR] ❌ Error posting job Machine Learning Graduate - E-Commerce Governance - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Graduate - E-Commerce Governance - BS/MS @ ByteDance',
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
[2026-01-16T21:53:13.458Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-16T21:53:14.960Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - Ecommerce Recommendation - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-16T21:53:14.960Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:53:15.093Z] [BOT ERROR] ❌ Error posting job Machine Learning Graduate - Ecommerce Recommendation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance',
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
[2026-01-16T21:53:15.093Z] [BOT] ❌ Industry post failed: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start
⚠️  Channel full error count: 2/5
[2026-01-16T21:53:16.704Z] [BOT ERROR] ❌ Error posting job Machine Learning Graduate - Ecommerce Recommendation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Graduate - Ecommerce Recommendation - 2026 Start @ ByteDance',
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
[2026-01-16T21:53:16.704Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-16T21:53:18.206Z] [BOT] 📍 [ROUTING] "Data Analyst - Product & Marketing" @ ORG_b344d80e League
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T21:53:18.206Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-16T21:53:18.378Z] [BOT ERROR] ❌ Error posting job Data Analyst - Product & Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst - Product & Marketing @ ORG_b344d80e League',
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
[2026-01-16T21:53:18.378Z] [BOT] ❌ Industry post failed: Data Analyst - Product & Marketing
⚠️  Channel full error count: 3/5
[2026-01-16T21:53:19.880Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T21:53:19.880Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T21:53:20.001Z] [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Engineer - Machine Learning Engineer - Local Services Search @ TikTok',
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
[2026-01-16T21:53:20.002Z] [BOT] ❌ Industry post failed: Graduate Engineer - Machine Learning Engineer - Local Services Search
⚠️  Channel full error count: 4/5
[2026-01-16T21:53:21.625Z] [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Engineer - Machine Learning Engineer - Local Services Search @ TikTok',
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
[2026-01-16T21:53:21.625Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T21:53:23.127Z] [BOT] 📍 [ROUTING] "Computer Science Postdoctoral Fellow" @ ORG_0baaf6f2 University
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T21:53:23.251Z] [BOT ERROR] ❌ Error posting job Computer Science Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Computer Science Postdoctoral Fellow @ ORG_0baaf6f2 University',
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
[2026-01-16T21:53:23.252Z] [BOT] ❌ Industry post failed: Computer Science Postdoctoral Fellow
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-16T21:53:23.253Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 17
   Successful: 8
[2026-01-16T21:53:23.253Z] [BOT] Failed: 9
   Skipped: 0
[2026-01-16T21:53:23.253Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 4
   Top channels:
[2026-01-16T21:53:23.253Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 2 posts
     3. #🌆・chicago: 1 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-16T21:53:23.253Z] [BOT] [STATS] Channel stats saved
[2026-01-16T21:53:23.254Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_2dc10745.json
[2026-01-16T21:53:23.267Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Graduate - E-Commerce Governance - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Graduate - E-Commerce Governance - BS/MS
- [BOT ERROR] ❌ Error posting job Machine Learning Graduate - E-Commerce Governance - BS/MS: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Graduate - Ecommerce Recommendation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Graduate - Ecommerce Recommendation - 2026 Start
- [BOT ERROR] ❌ Error posting job Machine Learning Graduate - Ecommerce Recommendation - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Analyst - Product & Marketing: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst - Product & Marketing
- [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Engineer - Machine Learning Engineer - Local Services Search
- [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning Engineer - Local Services Search: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Computer Science Postdoctoral Fellow: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Computer Science Postdoctoral Fellow
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*