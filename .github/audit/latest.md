# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T17:57:04.810Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 14
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T17:56:28.466Z] ========================================
[2026-01-19T17:56:28.468Z] Discord Bot Execution Log
[2026-01-19T17:56:28.468Z] Environment: GitHub Actions
[2026-01-19T17:56:28.468Z] Node Version: v20.19.6
[2026-01-19T17:56:28.468Z] ========================================
[2026-01-19T17:56:28.468Z] Environment Variables Check:
[2026-01-19T17:56:28.468Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T17:56:28.469Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.469Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T17:56:28.469Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T17:56:28.469Z] 
Multi-Channel Configuration:
[2026-01-19T17:56:28.469Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.469Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.469Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.469Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.469Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.469Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.469Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.470Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.470Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T17:56:28.470Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T17:56:28.470Z] 
Data Files Check:
[2026-01-19T17:56:28.470Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51131 bytes)
[2026-01-19T17:56:28.480Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1610468 bytes)
[2026-01-19T17:56:28.481Z] 
========================================
[2026-01-19T17:56:28.481Z] Starting Enhanced Discord Bot...
[2026-01-19T17:56:28.481Z] ========================================
[2026-01-19T17:56:29.004Z] [BOT] ✅ Loaded V2 database: 2961 jobs
[2026-01-19T17:56:30.009Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T17:56:30.009Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T17:56:30.009Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T17:56:30.127Z] [BOT] ✅ Loaded pending queue: 2817 total (2797 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer at Axle
[2026-01-19T17:56:30.131Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T17:56:30.131Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T17:56:30.131Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T17:56:30.132Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-19T17:56:30.132Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-19T17:56:30.132Z] [BOT] - Data Labeling Specialist - Imagery @ ORG_6c847a27 Power: palo alto, washington
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T17:56:30.136Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-19T17:56:30.136Z] [BOT] 📍 [ROUTING] "Developer" @ ORG_eead3632
[2026-01-19T17:56:30.137Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T17:56:30.141Z] [BOT ERROR] (node:2419) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T17:56:30.322Z] [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T17:56:30.322Z] [BOT] ❌ Industry post failed: Developer
⚠️  Channel full error count: 1/5
[2026-01-19T17:56:32.040Z] [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-19T17:56:32.040Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T17:56:33.540Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_91892627
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-19T17:56:33.540Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T17:56:33.761Z] [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 @ Mobilityware',
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
[2026-01-19T17:56:33.762Z] [BOT] ❌ Industry post failed: Data Analyst 1
⚠️  Channel full error count: 2/5
[2026-01-19T17:56:35.393Z] [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst 1 @ Mobilityware',
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
[2026-01-19T17:56:35.393Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T17:56:39.894Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T17:56:39.896Z] [BOT] 📍 [ROUTING] "Data Labeling Specialist - Imagery" @ ORG_6c847a27 Power
[2026-01-19T17:56:39.896Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T17:56:40.316Z] [BOT] ✅ Created forum post: 🏢 Data Labeling Specialist - Imagery @ ORG_6c847a27 Power in #🤖・ai-jobs
[2026-01-19T17:56:40.316Z] [BOT] ✅ Industry: Data Labeling Specialist - Imagery @ ORG_6c847a27 Power
[2026-01-19T17:56:41.978Z] [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Labeling Specialist - Imagery @ ORG_6c847a27 Power',
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
[2026-01-19T17:56:41.979Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T17:56:43.479Z] [BOT] 💾 Marked as posted: Data Labeling Specialist - Imagery @ ORG_6c847a27 Power (instance #1)
[2026-01-19T17:56:43.480Z] [BOT] 💾 BEFORE ARCHIVING: 2962 jobs in database
[2026-01-19T17:56:43.482Z] [BOT] ✅ No jobs to archive (all 2962 jobs within 7-day window)
[2026-01-19T17:56:43.505Z] [BOT] 💾 Saved posted_jobs.json: 2962 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T17:56:43.505Z] [BOT] 💾 Marked as posted: Data Labeling Specialist - Gdelt @ ORG_6c847a27 Power (instance #1)
[2026-01-19T17:56:43.505Z] [BOT] 💾 BEFORE ARCHIVING: 2963 jobs in database
[2026-01-19T17:56:43.508Z] [BOT] ✅ No jobs to archive (all 2963 jobs within 7-day window)
[2026-01-19T17:56:43.526Z] [BOT] 💾 Saved posted_jobs.json: 2963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T17:56:43.527Z] [BOT] 📍 [ROUTING] "Entry-Level AI Generalist" @ ORG_4ee447c5 Technologies AI
[2026-01-19T17:56:43.527Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T17:56:43.666Z] [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI',
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
[2026-01-19T17:56:43.667Z] [BOT] ❌ Industry post failed: Entry-Level AI Generalist
⚠️  Channel full error count: 1/5
[2026-01-19T17:56:45.327Z] [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI',
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
[2026-01-19T17:56:45.327Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T17:56:49.829Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-19T17:56:49.830Z] [BOT] 📍 [ROUTING] "Associate – Marketing Technologist" @ ORG_66279f04 Investments
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T17:56:50.553Z] [BOT ERROR] ❌ Error posting job Associate – Marketing Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate – Marketing Technologist @ ORG_66279f04 Investments',
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
[2026-01-19T17:56:50.553Z] [BOT] ❌ Industry post failed: Associate – Marketing Technologist
⚠️  Channel full error count: 2/5
[2026-01-19T17:56:52.206Z] [BOT ERROR] ❌ Error posting job Associate – Marketing Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate – Marketing Technologist @ ORG_66279f04 Investments',
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
[2026-01-19T17:56:52.206Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T17:56:53.708Z] [BOT] 📍 [ROUTING] "Digital Analyst" @ ORG_7eb1e1f5
   Category: SALES (matched: "sales")
[2026-01-19T17:56:53.708Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T17:56:53.871Z] [BOT ERROR] ❌ Error posting job Digital Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Analyst @ TelevisaUnivision',
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
[2026-01-19T17:56:53.871Z] [BOT] ❌ Industry post failed: Digital Analyst
⚠️  Channel full error count: 3/5
[2026-01-19T17:56:55.516Z] [BOT ERROR] ❌ Error posting job Digital Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Analyst @ TelevisaUnivision',
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
[2026-01-19T17:56:55.517Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T17:57:00.016Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-19T17:57:00.017Z] [BOT] 📍 [ROUTING] "Software Application Engineer – Entry Level" @ ORG_cdb83ff1
   Category: TECH (matched: "software")
[2026-01-19T17:57:00.017Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T17:57:00.191Z] [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T17:57:00.191Z] [BOT] ❌ Industry post failed: Software Application Engineer – Entry Level
⚠️  Channel full error count: 4/5
[2026-01-19T17:57:01.970Z] [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T17:57:01.970Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T17:57:03.471Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_336a7f11 Medical
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T17:57:03.620Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T17:57:03.620Z] [BOT] ❌ Industry post failed: Associate Software Engineer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T17:57:03.621Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T17:57:03.621Z] [BOT] Total attempts: 15
   Successful: 1
   Failed: 14
   Skipped: 0
[2026-01-19T17:57:03.621Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T17:57:03.621Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-19T17:57:03.621Z] [BOT] [STATS] Channel stats saved
[2026-01-19T17:57:03.621Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T17:57:03.634Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2419) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Developer
- [BOT ERROR] ❌ Error posting job Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst 1
- [BOT ERROR] ❌ Error posting job Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Labeling Specialist - Imagery: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Entry-Level AI Generalist
- [BOT ERROR] ❌ Error posting job Entry-Level AI Generalist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate – Marketing Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate – Marketing Technologist
- [BOT ERROR] ❌ Error posting job Associate – Marketing Technologist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Digital Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Digital Analyst
- [BOT ERROR] ❌ Error posting job Digital Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Application Engineer – Entry Level
- [BOT ERROR] ❌ Error posting job Software Application Engineer – Entry Level: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Software Engineer
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*