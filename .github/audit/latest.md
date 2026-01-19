# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T03:05:42.957Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T03:05:18.751Z] ========================================
[2026-01-19T03:05:18.752Z] Discord Bot Execution Log
[2026-01-19T03:05:18.753Z] Environment: GitHub Actions
[2026-01-19T03:05:18.753Z] Node Version: v20.19.6
[2026-01-19T03:05:18.753Z] ========================================
[2026-01-19T03:05:18.753Z] Environment Variables Check:
[2026-01-19T03:05:18.753Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T03:05:18.753Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.753Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T03:05:18.753Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T03:05:18.753Z] 
Multi-Channel Configuration:
[2026-01-19T03:05:18.753Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.754Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.754Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.754Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.754Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.754Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.754Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.754Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.754Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T03:05:18.754Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T03:05:18.754Z] 
Data Files Check:
[2026-01-19T03:05:18.755Z] .github/data/new_jobs.json: ✅ Exists (10 items, 117795 bytes)
[2026-01-19T03:05:18.765Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1541724 bytes)
[2026-01-19T03:05:18.765Z] 
========================================
[2026-01-19T03:05:18.765Z] Starting Enhanced Discord Bot...
[2026-01-19T03:05:18.765Z] ========================================
[2026-01-19T03:05:19.308Z] [BOT] ✅ Loaded V2 database: 2840 jobs
[2026-01-19T03:05:20.017Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T03:05:20.017Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T03:05:20.017Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T03:05:20.137Z] [BOT] ✅ Loaded pending queue: 2836 total (2816 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineering Manager at discord
[2026-01-19T03:05:20.141Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T03:05:20.142Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T03:05:20.142Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T03:05:20.143Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-19T03:05:20.143Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Engineering Manager, GTM Engineering  @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states
   - Engineering Manager, Salesforce @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-19T03:05:20.143Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T03:05:20.148Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T03:05:20.148Z] [BOT] 📍 [ROUTING] "Data Engineering Manager" @ discord
[2026-01-19T03:05:20.148Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T03:05:20.153Z] [BOT ERROR] (node:2582) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T03:05:20.334Z] [BOT] ✅ Created forum post: 🏢 Data Engineering Manager @ discord in #🤖・ai-jobs
[2026-01-19T03:05:20.334Z] [BOT] ✅ Industry: Data Engineering Manager @ discord
[2026-01-19T03:05:21.837Z] [BOT] 💾 Marked as posted: Data Engineering Manager @ discord (instance #1)
[2026-01-19T03:05:21.838Z] [BOT] 💾 BEFORE ARCHIVING: 2841 jobs in database
[2026-01-19T03:05:21.840Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T03:05:21.846Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-19T03:05:21.846Z] [BOT] ✅ Archiving complete: 2 archived, 2839 active
[2026-01-19T03:05:21.863Z] [BOT] 💾 Saved posted_jobs.json: 2839 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T03:05:21.864Z] [BOT] 📍 [ROUTING] "Database Conversion - ETL - Programmer" @ ORG_865b30e2 Information Solutions Cooperative (NISC)
   Category: AI (matched: "AI/ML")
[2026-01-19T03:05:21.864Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T03:05:22.067Z] [BOT] ✅ Created forum post: 🏢 Database Conversion - ETL - Programmer @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #🤖・ai-jobs
  ✅ Industry: Database Conversion - ETL - Programmer @ ORG_865b30e2 Information Solutions Cooperative (NISC)
[2026-01-19T03:05:23.852Z] [BOT] ✅ Created forum post: 🏢 Database Conversion - ETL - Programmer @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #💻・remote-usa
[2026-01-19T03:05:23.852Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T03:05:25.354Z] [BOT] 💾 Marked as posted: Database Conversion - ETL - Programmer @ ORG_865b30e2 Information Solutions Cooperative (NISC) (instance #1)
[2026-01-19T03:05:25.354Z] [BOT] 💾 BEFORE ARCHIVING: 2840 jobs in database
[2026-01-19T03:05:25.357Z] [BOT] ✅ No jobs to archive (all 2840 jobs within 7-day window)
[2026-01-19T03:05:25.373Z] [BOT] 💾 Saved posted_jobs.json: 2840 active jobs
[2026-01-19T03:05:25.373Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T03:05:28.374Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-19T03:05:28.375Z] [BOT] 📍 [ROUTING] "Engineering Manager, GTM Engineering " @ brex
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:05:28.554Z] [BOT ERROR] ❌ Error posting job Engineering Manager, GTM Engineering : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, GTM Engineering  @ brex',
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
[2026-01-19T03:05:28.554Z] [BOT] ❌ Industry post failed: Engineering Manager, GTM Engineering 
⚠️  Channel full error count: 1/5
[2026-01-19T03:05:30.185Z] [BOT ERROR] ❌ Error posting job Engineering Manager, GTM Engineering : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, GTM Engineering  @ brex',
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
[2026-01-19T03:05:30.185Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T03:05:31.686Z] [BOT] 📍 [ROUTING] "Engineering Manager, Salesforce" @ brex
   Category: TECH (matched: "engineer/engineering")
[2026-01-19T03:05:31.687Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:05:31.823Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Salesforce: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, Salesforce @ brex',
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
[2026-01-19T03:05:31.824Z] [BOT] ❌ Industry post failed: Engineering Manager, Salesforce
⚠️  Channel full error count: 2/5
[2026-01-19T03:05:33.442Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Salesforce: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, Salesforce @ brex',
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
[2026-01-19T03:05:33.443Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T03:05:34.944Z] [BOT] 📍 [ROUTING] "Analyst - Merchant Data Platform" @ ORG_a725bda1
[2026-01-19T03:05:34.945Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:05:35.059Z] [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Analyst - Merchant Data Platform @ Visa',
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
[2026-01-19T03:05:35.059Z] [BOT] ❌ Industry post failed: Analyst - Merchant Data Platform
⚠️  Channel full error count: 3/5
[2026-01-19T03:05:36.725Z] [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Analyst - Merchant Data Platform @ Visa',
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
[2026-01-19T03:05:36.725Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T03:05:38.227Z] [BOT] 📍 [ROUTING] "Verification and Field Application Engineer – New Grad" @ ORG_1302e562
[2026-01-19T03:05:38.227Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:05:38.370Z] [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Verification and Field Application Engineer – New Grad @ Ciena',
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
[2026-01-19T03:05:38.370Z] [BOT] ❌ Industry post failed: Verification and Field Application Engineer – New Grad
⚠️  Channel full error count: 4/5
[2026-01-19T03:05:40.028Z] [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Verification and Field Application Engineer – New Grad @ Ciena',
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
[2026-01-19T03:05:40.029Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T03:05:41.529Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:05:42.183Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 @ Intuit',
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
[2026-01-19T03:05:42.183Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T03:05:42.184Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 12
   Successful: 3
[2026-01-19T03:05:42.184Z] [BOT] Failed: 9
   Skipped: 0
[2026-01-19T03:05:42.184Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 3
   Channels used: 2
   Top channels:
[2026-01-19T03:05:42.184Z] [BOT] 1. #🤖・ai-jobs: 2 posts
     2. #💻・remote-usa: 1 posts
[2026-01-19T03:05:42.185Z] [BOT] [STATS] Channel stats saved
[2026-01-19T03:05:42.185Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T03:05:42.198Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2582) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Engineering Manager, GTM Engineering : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, GTM Engineering
- [BOT ERROR] ❌ Error posting job Engineering Manager, GTM Engineering : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Manager, Salesforce: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, Salesforce
- [BOT ERROR] ❌ Error posting job Engineering Manager, Salesforce: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Analyst - Merchant Data Platform
- [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Verification and Field Application Engineer – New Grad
- [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*