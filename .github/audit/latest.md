# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T03:47:27.349Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T03:47:07.848Z] ========================================
[2026-01-19T03:47:07.850Z] Discord Bot Execution Log
[2026-01-19T03:47:07.850Z] Environment: GitHub Actions
[2026-01-19T03:47:07.850Z] Node Version: v20.19.6
[2026-01-19T03:47:07.850Z] ========================================
[2026-01-19T03:47:07.850Z] Environment Variables Check:
[2026-01-19T03:47:07.850Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T03:47:07.850Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.850Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T03:47:07.851Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T03:47:07.851Z] 
Multi-Channel Configuration:
[2026-01-19T03:47:07.851Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.851Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.851Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.851Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.851Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.851Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.851Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.851Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.851Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T03:47:07.851Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T03:47:07.851Z] 
Data Files Check:
[2026-01-19T03:47:07.852Z] .github/data/new_jobs.json: ✅ Exists (10 items, 110669 bytes)
[2026-01-19T03:47:07.864Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1541389 bytes)
[2026-01-19T03:47:07.864Z] 
========================================
[2026-01-19T03:47:07.864Z] Starting Enhanced Discord Bot...
[2026-01-19T03:47:07.864Z] ========================================
[2026-01-19T03:47:08.326Z] [BOT] ✅ Loaded V2 database: 2840 jobs
[2026-01-19T03:47:09.073Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T03:47:09.074Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T03:47:09.074Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T03:47:09.234Z] [BOT] ✅ Loaded pending queue: 2836 total (2816 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineering Manager, GTM Engineering  at brex
[2026-01-19T03:47:09.237Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T03:47:09.238Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T03:47:09.238Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T03:47:09.239Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
   (3 grouped as same job with different locations)
[2026-01-19T03:47:09.239Z] [BOT] 📍 2 jobs with multiple locations:
   - Engineering Manager, GTM Engineering  @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states
   - Engineering Manager, Salesforce @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T03:47:09.243Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-19T03:47:09.244Z] [BOT] 📍 [ROUTING] "Engineering Manager, GTM Engineering " @ brex
   Category: TECH (matched: "engineer/engineering")
[2026-01-19T03:47:09.244Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:47:09.248Z] [BOT ERROR] (node:2895) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T03:47:09.508Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, GTM Engineering  @ brex in #💻・tech-jobs
[2026-01-19T03:47:09.508Z] [BOT] ✅ Industry: Engineering Manager, GTM Engineering  @ brex
[2026-01-19T03:47:11.298Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, GTM Engineering  @ brex in #🌉・san-francisco
[2026-01-19T03:47:11.298Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T03:47:12.799Z] [BOT] 💾 Marked as posted: Engineering Manager, GTM Engineering  @ brex (instance #1)
[2026-01-19T03:47:12.799Z] [BOT] 💾 BEFORE ARCHIVING: 2841 jobs in database
[2026-01-19T03:47:12.802Z] [BOT] ✅ No jobs to archive (all 2841 jobs within 7-day window)
[2026-01-19T03:47:12.822Z] [BOT] 💾 Saved posted_jobs.json: 2841 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T03:47:12.823Z] [BOT] 💾 Marked as posted: Engineering Manager, GTM Engineering  @ brex (instance #1)
[2026-01-19T03:47:12.823Z] [BOT] 💾 BEFORE ARCHIVING: 2842 jobs in database
[2026-01-19T03:47:12.825Z] [BOT] ✅ No jobs to archive (all 2842 jobs within 7-day window)
[2026-01-19T03:47:12.842Z] [BOT] 💾 Saved posted_jobs.json: 2842 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T03:47:12.843Z] [BOT] 💾 Marked as posted: Engineering Manager, GTM Engineering  @ brex (instance #1)
[2026-01-19T03:47:12.843Z] [BOT] 💾 BEFORE ARCHIVING: 2843 jobs in database
[2026-01-19T03:47:12.845Z] [BOT] ✅ No jobs to archive (all 2843 jobs within 7-day window)
[2026-01-19T03:47:12.865Z] [BOT] 💾 Saved posted_jobs.json: 2843 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T03:47:12.865Z] [BOT] 📍 [ROUTING] "Engineering Manager, Salesforce" @ brex
   Category: TECH (matched: "engineer/engineering")
[2026-01-19T03:47:12.865Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:47:13.041Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Salesforce: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T03:47:13.042Z] [BOT] ❌ Industry post failed: Engineering Manager, Salesforce
⚠️  Channel full error count: 1/5
[2026-01-19T03:47:14.672Z] [BOT ERROR] ❌ Error posting job Engineering Manager, Salesforce: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T03:47:14.672Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T03:47:16.174Z] [BOT] 📍 [ROUTING] "Analyst - Merchant Data Platform" @ ORG_a725bda1
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:47:16.296Z] [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T03:47:16.296Z] [BOT] ❌ Industry post failed: Analyst - Merchant Data Platform
⚠️  Channel full error count: 2/5
[2026-01-19T03:47:17.927Z] [BOT ERROR] ❌ Error posting job Analyst - Merchant Data Platform: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T03:47:17.928Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T03:47:19.429Z] [BOT] 📍 [ROUTING] "Verification and Field Application Engineer – New Grad" @ ORG_1302e562
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:47:19.573Z] [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T03:47:19.573Z] [BOT] ❌ Industry post failed: Verification and Field Application Engineer – New Grad
⚠️  Channel full error count: 3/5
[2026-01-19T03:47:21.224Z] [BOT ERROR] ❌ Error posting job Verification and Field Application Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T03:47:21.224Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T03:47:22.726Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-19T03:47:22.726Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:47:22.910Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T03:47:22.911Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 4/5
[2026-01-19T03:47:24.535Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T03:47:24.535Z] [BOT] ⚠️ Location post failed: 🌄・mountain-view
[2026-01-19T03:47:26.037Z] [BOT] 📍 [ROUTING] "Tech Lead – Software Engineering" @ ORG_feb5566a Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T03:47:26.224Z] [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T03:47:26.225Z] [BOT] ❌ Industry post failed: Tech Lead – Software Engineering
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T03:47:26.225Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T03:47:26.225Z] [BOT] Total attempts: 11
   Successful: 2
   Failed: 9
   Skipped: 0
[2026-01-19T03:47:26.226Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-19T03:47:26.226Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-19T03:47:26.226Z] [BOT] [STATS] Channel stats saved
[2026-01-19T03:47:26.226Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T03:47:26.236Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2895) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
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
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Tech Lead – Software Engineering
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*