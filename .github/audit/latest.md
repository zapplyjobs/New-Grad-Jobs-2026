# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T15:11:18.566Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T15:10:50.106Z] ========================================
[2026-01-13T15:10:50.108Z] Discord Bot Execution Log
[2026-01-13T15:10:50.108Z] Environment: GitHub Actions
[2026-01-13T15:10:50.108Z] Node Version: v20.19.6
[2026-01-13T15:10:50.108Z] ========================================
[2026-01-13T15:10:50.108Z] Environment Variables Check:
[2026-01-13T15:10:50.108Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T15:10:50.108Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.108Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T15:10:50.108Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T15:10:50.108Z] 
Multi-Channel Configuration:
[2026-01-13T15:10:50.109Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.109Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.109Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.109Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.109Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.109Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.109Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.109Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.109Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T15:10:50.109Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T15:10:50.109Z] 
Data Files Check:
[2026-01-13T15:10:50.110Z] .github/data/new_jobs.json: ✅ Exists (10 items, 178754 bytes)
[2026-01-13T15:10:50.114Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 469576 bytes)
[2026-01-13T15:10:50.114Z] 
========================================
[2026-01-13T15:10:50.114Z] Starting Enhanced Discord Bot...
[2026-01-13T15:10:50.114Z] ========================================
[2026-01-13T15:10:50.643Z] [BOT] ✅ Loaded V2 database: 888 jobs
[2026-01-13T15:10:53.258Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T15:10:53.259Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T15:10:53.259Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T15:10:53.364Z] [BOT] ✅ Loaded pending queue: 2711 total (2691 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Executive Assistant, Product Support  at figma
[2026-01-13T15:10:53.367Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T15:10:53.367Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T15:10:53.368Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T15:10:53.368Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-13T15:10:53.369Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Product Designer - DeepSky @ airtable: san francisco, ca;, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T15:10:53.369Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T15:10:53.373Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-13T15:10:53.373Z] [BOT] 📍 [ROUTING] "Executive Assistant, Product Support " @ figma
[2026-01-13T15:10:53.374Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T15:10:53.378Z] [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T15:10:53.619Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Product Support  @ figma in #💲・sales-jobs
  ✅ Industry: Executive Assistant, Product Support  @ figma
[2026-01-13T15:10:55.381Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant, Product Support  @ figma in #🌉・san-francisco
[2026-01-13T15:10:55.381Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T15:10:56.882Z] [BOT] 💾 Marked as posted: Executive Assistant, Product Support  @ figma (instance #1)
[2026-01-13T15:10:56.882Z] [BOT] 💾 BEFORE ARCHIVING: 889 jobs in database
[2026-01-13T15:10:56.883Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T15:10:56.887Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T15:10:56.887Z] [BOT] ✅ Archiving complete: 1 archived, 888 active
[2026-01-13T15:10:56.895Z] [BOT] 💾 Saved posted_jobs.json: 888 active jobs
[2026-01-13T15:10:56.895Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T15:10:56.895Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Accounts" @ airtable
[2026-01-13T15:10:56.895Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T15:10:57.125Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial Accounts @ airtable in #💲・sales-jobs
[2026-01-13T15:10:57.125Z] [BOT] ✅ Industry: Account Executive, Commercial Accounts @ airtable
[2026-01-13T15:10:58.828Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Commercial Accounts @ airtable in #🤠・austin
[2026-01-13T15:10:58.828Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T15:11:00.328Z] [BOT] 💾 Marked as posted: Account Executive, Commercial Accounts @ airtable (instance #1)
[2026-01-13T15:11:00.329Z] [BOT] 💾 BEFORE ARCHIVING: 889 jobs in database
[2026-01-13T15:11:00.329Z] [BOT] ✅ No jobs to archive (all 889 jobs within 7-day window)
[2026-01-13T15:11:00.336Z] [BOT] 💾 Saved posted_jobs.json: 889 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T15:11:00.336Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ airtable
[2026-01-13T15:11:00.336Z] [BOT] Category: SALES (matched: "sales")
[2026-01-13T15:11:00.336Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T15:11:00.487Z] [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Development Representative @ airtable',
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
[2026-01-13T15:11:00.488Z] [BOT] ❌ Industry post failed: Business Development Representative
⚠️  Channel full error count: 1/5
[2026-01-13T15:11:02.231Z] [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Development Representative @ airtable',
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
[2026-01-13T15:11:02.231Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-13T15:11:03.731Z] [BOT] 📍 [ROUTING] "Field Marketing Specialist, West" @ airtable
   Category: SALES (matched: "sales")
[2026-01-13T15:11:03.732Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T15:11:03.916Z] [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Field Marketing Specialist, West @ airtable',
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
[2026-01-13T15:11:03.916Z] [BOT] ❌ Industry post failed: Field Marketing Specialist, West
⚠️  Channel full error count: 2/5
[2026-01-13T15:11:05.623Z] [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Field Marketing Specialist, West @ airtable',
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
[2026-01-13T15:11:05.623Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T15:11:07.125Z] [BOT] 📍 [ROUTING] "Lead Solutions Consultant" @ airtable
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T15:11:07.306Z] [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Lead Solutions Consultant @ airtable',
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
[2026-01-13T15:11:07.306Z] [BOT] ❌ Industry post failed: Lead Solutions Consultant
⚠️  Channel full error count: 3/5
[2026-01-13T15:11:09.074Z] [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Lead Solutions Consultant @ airtable',
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
[2026-01-13T15:11:09.074Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-13T15:11:13.575Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-13T15:11:13.576Z] [BOT] 📍 [ROUTING] "Engineering Manager, AI Platform " @ airtable
[2026-01-13T15:11:13.576Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T15:11:13.748Z] [BOT ERROR] ❌ Error posting job Engineering Manager, AI Platform : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, AI Platform  @ airtable',
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
[2026-01-13T15:11:13.748Z] [BOT] ❌ Industry post failed: Engineering Manager, AI Platform 
⚠️  Channel full error count: 4/5
[2026-01-13T15:11:15.545Z] [BOT ERROR] ❌ Error posting job Engineering Manager, AI Platform : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Manager, AI Platform  @ airtable',
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
[2026-01-13T15:11:15.545Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T15:11:17.045Z] [BOT] 📍 [ROUTING] " People Systems Engineer, Airtable Specialist" @ airtable
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T15:11:17.046Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T15:11:17.233Z] [BOT ERROR] ❌ Error posting job  People Systems Engineer, Airtable Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢  People Systems Engineer, Airtable Specialist @ airtable',
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
[2026-01-13T15:11:17.234Z] [BOT] ❌ Industry post failed:  People Systems Engineer, Airtable Specialist
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-13T15:11:17.234Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T15:11:17.234Z] [BOT] Total attempts: 13
   Successful: 4
   Failed: 9
   Skipped: 0
[2026-01-13T15:11:17.235Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T15:11:17.235Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💲・sales-jobs: 2 posts
[2026-01-13T15:11:17.235Z] [BOT] 2. #🌉・san-francisco: 1 posts
     3. #🤠・austin: 1 posts
[2026-01-13T15:11:17.235Z] [BOT] [STATS] Channel stats saved
[2026-01-13T15:11:17.236Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_1242ab09.json
[2026-01-13T15:11:17.248Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Development Representative
- [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Field Marketing Specialist, West
- [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Lead Solutions Consultant
- [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Manager, AI Platform : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Manager, AI Platform
- [BOT ERROR] ❌ Error posting job Engineering Manager, AI Platform : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job  People Systems Engineer, Airtable Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed:  People Systems Engineer, Airtable Specialist
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*