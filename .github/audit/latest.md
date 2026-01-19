# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T04:15:08.041Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T04:14:49.775Z] ========================================
[2026-01-19T04:14:49.777Z] Discord Bot Execution Log
[2026-01-19T04:14:49.777Z] Environment: GitHub Actions
[2026-01-19T04:14:49.777Z] Node Version: v20.19.6
[2026-01-19T04:14:49.777Z] ========================================
[2026-01-19T04:14:49.777Z] Environment Variables Check:
[2026-01-19T04:14:49.777Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T04:14:49.777Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.777Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T04:14:49.778Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T04:14:49.778Z] 
Multi-Channel Configuration:
[2026-01-19T04:14:49.778Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.778Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.778Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.778Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.778Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.778Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.778Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.778Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.778Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T04:14:49.778Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T04:14:49.779Z] 
Data Files Check:
[2026-01-19T04:14:49.779Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76384 bytes)
[2026-01-19T04:14:49.790Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1542735 bytes)
[2026-01-19T04:14:49.790Z] 
========================================
[2026-01-19T04:14:49.790Z] Starting Enhanced Discord Bot...
[2026-01-19T04:14:49.790Z] ========================================
[2026-01-19T04:14:50.312Z] [BOT] ✅ Loaded V2 database: 2843 jobs
[2026-01-19T04:14:51.016Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T04:14:51.016Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T04:14:51.016Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T04:14:51.133Z] [BOT] ✅ Loaded pending queue: 2836 total (2816 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineering Manager, Salesforce at brex
[2026-01-19T04:14:51.137Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T04:14:51.137Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T04:14:51.137Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T04:14:51.138Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-19T04:14:51.138Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-19T04:14:51.139Z] [BOT] - Engineering Manager, Salesforce @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T04:14:51.143Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-19T04:14:51.143Z] [BOT] 📍 [ROUTING] "Engineering Manager, Salesforce" @ brex
[2026-01-19T04:14:51.144Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:14:51.148Z] [BOT ERROR] (node:2573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T04:14:51.354Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Salesforce @ brex in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Salesforce @ brex
[2026-01-19T04:14:52.967Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Salesforce: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T04:14:52.967Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T04:14:54.467Z] [BOT] 💾 Marked as posted: Engineering Manager, Salesforce @ brex (instance #1)
[2026-01-19T04:14:54.467Z] [BOT] 💾 BEFORE ARCHIVING: 2844 jobs in database
[2026-01-19T04:14:54.469Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T04:14:54.474Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
✅ Archiving complete: 7 archived, 2837 active
[2026-01-19T04:14:54.495Z] [BOT] 💾 Saved posted_jobs.json: 2837 active jobs
[2026-01-19T04:14:54.495Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T04:14:54.495Z] [BOT] 💾 Marked as posted: Engineering Manager, Salesforce @ brex (instance #1)
[2026-01-19T04:14:54.496Z] [BOT] 💾 BEFORE ARCHIVING: 2838 jobs in database
[2026-01-19T04:14:54.498Z] [BOT] ✅ No jobs to archive (all 2838 jobs within 7-day window)
[2026-01-19T04:14:54.518Z] [BOT] 💾 Saved posted_jobs.json: 2838 active jobs
[2026-01-19T04:14:54.518Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T04:14:54.518Z] [BOT] 📍 [ROUTING] "Analyst - Merchant Data Platform" @ ORG_a725bda1
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:14:54.620Z] [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T04:14:54.620Z] [BOT] ❌ Industry post failed: Analyst - Merchant Data Platform
⚠️  Channel full error count: 1/5
[2026-01-19T04:14:56.210Z] [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T04:14:56.210Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T04:14:57.712Z] [BOT] 📍 [ROUTING] "Verification and Field Application Engineer – New Grad" @ ORG_1302e562
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:14:57.835Z] [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T04:14:57.835Z] [BOT] ❌ Industry post failed: Verification and Field Application Engineer – New Grad
⚠️  Channel full error count: 2/5
[2026-01-19T04:14:59.436Z] [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T04:14:59.436Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T04:15:00.937Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2026-01-19T04:15:00.937Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:15:01.032Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T04:15:01.033Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 3/5
[2026-01-19T04:15:02.613Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_f2feb41c/threads'
}
[2026-01-19T04:15:02.613Z] [BOT] ⚠️ Location post failed: 🌄・mountain-view
[2026-01-19T04:15:04.114Z] [BOT] 📍 [ROUTING] "Tech Lead – Software Engineering" @ ORG_feb5566a Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:15:04.194Z] [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Tech Lead – Software Engineering @ ORG_feb5566a Health',
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
[2026-01-19T04:15:04.195Z] [BOT] ❌ Industry post failed: Tech Lead – Software Engineering
⚠️  Channel full error count: 4/5
[2026-01-19T04:15:05.813Z] [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Tech Lead – Software Engineering @ ORG_feb5566a Health',
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
[2026-01-19T04:15:05.813Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T04:15:07.315Z] [BOT] 📍 [ROUTING] "Analyst 1 – Labor Analytics - Corporate - Las Vegas" @ ORG_742553d6 Entertainment
   Category: TECH (matched: "analytics")
[2026-01-19T04:15:07.315Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:15:07.403Z] [BOT ERROR] ❌ Error posting job Analyst 1 – Labor Analytics - Corporate - Las Vegas: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment',
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
[2026-01-19T04:15:07.404Z] [BOT] ❌ Industry post failed: Analyst 1 – Labor Analytics - Corporate - Las Vegas
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T04:15:07.404Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 11
[2026-01-19T04:15:07.404Z] [BOT] Successful: 1
   Failed: 10
   Skipped: 0
[2026-01-19T04:15:07.405Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-19T04:15:07.405Z] [BOT] 1. #💻・tech-jobs: 1 posts
[2026-01-19T04:15:07.405Z] [BOT] [STATS] Channel stats saved
[2026-01-19T04:15:07.405Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T04:15:07.418Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Engineering Manager, Salesforce: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Analyst - Merchant Data Platform
- [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Verification and Field Application Engineer – New Grad
- [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Tech Lead – Software Engineering
- [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Analyst 1 – Labor Analytics - Corporate - Las Vegas: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Analyst 1 – Labor Analytics - Corporate - Las Vegas
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*