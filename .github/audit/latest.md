# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T22:27:16.354Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T22:26:41.145Z] ========================================
[2026-01-17T22:26:41.147Z] Discord Bot Execution Log
[2026-01-17T22:26:41.147Z] Environment: GitHub Actions
[2026-01-17T22:26:41.147Z] Node Version: v20.19.6
[2026-01-17T22:26:41.147Z] ========================================
[2026-01-17T22:26:41.147Z] Environment Variables Check:
[2026-01-17T22:26:41.148Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T22:26:41.148Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.148Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T22:26:41.148Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T22:26:41.148Z] 
Multi-Channel Configuration:
[2026-01-17T22:26:41.148Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.148Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.148Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.148Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.148Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.149Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.149Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.149Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.149Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T22:26:41.149Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T22:26:41.149Z] 
Data Files Check:
[2026-01-17T22:26:41.150Z] .github/data/new_jobs.json: ✅ Exists (10 items, 63836 bytes)
[2026-01-17T22:26:41.158Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1336595 bytes)
[2026-01-17T22:26:41.158Z] 
========================================
[2026-01-17T22:26:41.159Z] Starting Enhanced Discord Bot...
[2026-01-17T22:26:41.159Z] ========================================
[2026-01-17T22:26:41.698Z] [BOT] ✅ Loaded V2 database: 2470 jobs
[2026-01-17T22:26:42.390Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T22:26:42.390Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T22:26:42.390Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T22:26:42.508Z] [BOT] ✅ Loaded pending queue: 2892 total (2872 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Head of Legal Operations at brex
[2026-01-17T22:26:42.511Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T22:26:42.512Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T22:26:42.512Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T22:26:42.513Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-17T22:26:42.513Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T22:26:42.517Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-17T22:26:42.518Z] [BOT] 📍 [ROUTING] "Head of Legal Operations" @ brex
[2026-01-17T22:26:42.518Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T22:26:42.523Z] [BOT ERROR] (node:2623) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T22:26:42.705Z] [BOT] ✅ Created forum post: 🏢 Head of Legal Operations @ brex in #📣・marketing-jobs
[2026-01-17T22:26:42.705Z] [BOT] ✅ Industry: Head of Legal Operations @ brex
[2026-01-17T22:26:44.465Z] [BOT] ✅ Created forum post: 🏢 Head of Legal Operations @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T22:26:45.967Z] [BOT] 💾 Marked as posted: Head of Legal Operations @ brex (instance #1)
[2026-01-17T22:26:45.968Z] [BOT] 💾 BEFORE ARCHIVING: 2471 jobs in database
[2026-01-17T22:26:45.969Z] [BOT] ✅ No jobs to archive (all 2471 jobs within 7-day window)
[2026-01-17T22:26:45.988Z] [BOT] 💾 Saved posted_jobs.json: 2471 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:26:48.990Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T22:26:48.990Z] [BOT] 📍 [ROUTING] "Business Systems & Solutions Specialist" @ ORG_e85ad4b4
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T22:26:49.524Z] [BOT] ✅ Created forum post: 🏢 Business Systems & Solutions Specialist @ ORG_e85ad4b4 in #💲・sales-jobs
[2026-01-17T22:26:49.524Z] [BOT] ✅ Industry: Business Systems & Solutions Specialist @ ORG_e85ad4b4
[2026-01-17T22:26:51.181Z] [BOT] ✅ Created forum post: 🏢 Business Systems & Solutions Specialist @ ORG_e85ad4b4 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T22:26:52.683Z] [BOT] 💾 Marked as posted: Business Systems & Solutions Specialist @ ORG_e85ad4b4 (instance #1)
[2026-01-17T22:26:52.683Z] [BOT] 💾 BEFORE ARCHIVING: 2472 jobs in database
[2026-01-17T22:26:52.685Z] [BOT] ✅ No jobs to archive (all 2472 jobs within 7-day window)
[2026-01-17T22:26:52.702Z] [BOT] 💾 Saved posted_jobs.json: 2472 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:26:55.704Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-17T22:26:55.705Z] [BOT] 📍 [ROUTING] "Associate Product Engineer" @ ORG_1550f0e6 ABLOY
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:26:55.938Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_1550f0e6 ABLOY in #💻・tech-jobs
  ✅ Industry: Associate Product Engineer @ ORG_1550f0e6 ABLOY
[2026-01-17T22:26:57.717Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_1550f0e6 ABLOY in #💻・remote-usa
[2026-01-17T22:26:57.717Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T22:26:59.219Z] [BOT] 💾 Marked as posted: Associate Product Engineer @ ORG_1550f0e6 ABLOY (instance #1)
[2026-01-17T22:26:59.219Z] [BOT] 💾 BEFORE ARCHIVING: 2473 jobs in database
[2026-01-17T22:26:59.221Z] [BOT] ✅ No jobs to archive (all 2473 jobs within 7-day window)
[2026-01-17T22:26:59.238Z] [BOT] 💾 Saved posted_jobs.json: 2473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T22:26:59.239Z] [BOT] 📍 [ROUTING] "Kernel Software Engineer" @ ORG_f89f8538
[2026-01-17T22:26:59.239Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:26:59.361Z] [BOT ERROR] ❌ Error posting job Kernel Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '⚡ Kernel Software Engineer @ Tesla',
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
[2026-01-17T22:26:59.361Z] [BOT] ❌ Industry post failed: Kernel Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-17T22:27:00.960Z] [BOT ERROR] ❌ Error posting job Kernel Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '⚡ Kernel Software Engineer @ Tesla',
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
[2026-01-17T22:27:00.961Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T22:27:02.462Z] [BOT] 📍 [ROUTING] "Alternative Data Management - Analyst" @ iCapital Network
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:27:02.581Z] [BOT ERROR] ❌ Error posting job Alternative Data Management - Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Alternative Data Management - Analyst @ iCapital Network',
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
[2026-01-17T22:27:02.582Z] [BOT] ❌ Industry post failed: Alternative Data Management - Analyst
⚠️  Channel full error count: 2/5
[2026-01-17T22:27:04.195Z] [BOT ERROR] ❌ Error posting job Alternative Data Management - Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Alternative Data Management - Analyst @ iCapital Network',
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
[2026-01-17T22:27:04.195Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T22:27:05.697Z] [BOT] 📍 [ROUTING] "Software Developer - Amts" @ ORG_412b726d Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T22:27:05.807Z] [BOT ERROR] ❌ Error posting job Software Developer - Amts: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer - Amts @ ORG_412b726d Health',
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
[2026-01-17T22:27:05.808Z] [BOT] ❌ Industry post failed: Software Developer - Amts
⚠️  Channel full error count: 3/5
[2026-01-17T22:27:07.443Z] [BOT ERROR] ❌ Error posting job Software Developer - Amts: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer - Amts @ ORG_412b726d Health',
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
  url: 'https://discord.com/api/v10/channels/CH_9ce1b282/threads'
}
[2026-01-17T22:27:07.443Z] [BOT] ⚠️ Location post failed: 🚌・boston
[2026-01-17T22:27:11.945Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-17T22:27:11.945Z] [BOT] 📍 [ROUTING] "Machine Learning Analyst" @ ORG_55640109 Capital
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T22:27:12.187Z] [BOT ERROR] ❌ Error posting job Machine Learning Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Analyst @ ORG_55640109 Capital',
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
[2026-01-17T22:27:12.187Z] [BOT] ❌ Industry post failed: Machine Learning Analyst
⚠️  Channel full error count: 4/5
[2026-01-17T22:27:13.808Z] [BOT ERROR] ❌ Error posting job Machine Learning Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Analyst @ ORG_55640109 Capital',
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
  url: 'https://discord.com/api/v10/channels/CH_9ce1b282/threads'
}
[2026-01-17T22:27:13.808Z] [BOT] ⚠️ Location post failed: 🚌・boston
[2026-01-17T22:27:15.309Z] [BOT] 📍 [ROUTING] "Predoctoral Appointee - Engineer Research Associate" @ ORG_a867f63f National Laboratory
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T22:27:15.309Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T22:27:15.436Z] [BOT ERROR] ❌ Error posting job Predoctoral Appointee - Engineer Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Predoctoral Appointee - Engineer Research Associate @ ORG_a867f63f National Laboratory',
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
[2026-01-17T22:27:15.436Z] [BOT] ❌ Industry post failed: Predoctoral Appointee - Engineer Research Associate
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T22:27:15.437Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 15
[2026-01-17T22:27:15.437Z] [BOT] Successful: 6
   Failed: 9
   Skipped: 0
[2026-01-17T22:27:15.437Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T22:27:15.437Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 6
   Top channels:
     1. #📣・marketing-jobs: 1 posts
[2026-01-17T22:27:15.438Z] [BOT] 2. #🌉・san-francisco: 1 posts
     3. #💲・sales-jobs: 1 posts
     4. #🗽・new-york: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-17T22:27:15.438Z] [BOT] [STATS] Channel stats saved
[2026-01-17T22:27:15.438Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T22:27:15.451Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2623) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Kernel Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Kernel Software Engineer
- [BOT ERROR] ❌ Error posting job Kernel Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Alternative Data Management - Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Alternative Data Management - Analyst
- [BOT ERROR] ❌ Error posting job Alternative Data Management - Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Developer - Amts: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Developer - Amts
- [BOT ERROR] ❌ Error posting job Software Developer - Amts: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Analyst
- [BOT ERROR] ❌ Error posting job Machine Learning Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Predoctoral Appointee - Engineer Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Predoctoral Appointee - Engineer Research Associate
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*