# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T08:47:43.145Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T08:47:24.566Z] ========================================
[2026-01-14T08:47:24.568Z] Discord Bot Execution Log
[2026-01-14T08:47:24.568Z] Environment: GitHub Actions
[2026-01-14T08:47:24.568Z] Node Version: v20.19.6
[2026-01-14T08:47:24.568Z] ========================================
[2026-01-14T08:47:24.568Z] Environment Variables Check:
[2026-01-14T08:47:24.568Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T08:47:24.568Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.568Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T08:47:24.568Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T08:47:24.568Z] 
Multi-Channel Configuration:
[2026-01-14T08:47:24.568Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.569Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.569Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.569Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.569Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.569Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.569Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.569Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.569Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T08:47:24.569Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T08:47:24.569Z] 
Data Files Check:
[2026-01-14T08:47:24.570Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76908 bytes)
[2026-01-14T08:47:24.575Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 712299 bytes)
[2026-01-14T08:47:24.575Z] 
========================================
[2026-01-14T08:47:24.575Z] Starting Enhanced Discord Bot...
[2026-01-14T08:47:24.575Z] ========================================
[2026-01-14T08:47:25.113Z] [BOT] ✅ Loaded V2 database: 1341 jobs
[2026-01-14T08:47:25.736Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T08:47:25.736Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T08:47:25.736Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T08:47:25.847Z] [BOT] ✅ Loaded pending queue: 2722 total (2702 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Technology - Application Development at Citi
[2026-01-14T08:47:25.850Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T08:47:25.851Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T08:47:25.851Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T08:47:25.852Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T08:47:25.852Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T08:47:25.856Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-14T08:47:25.856Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-14T08:47:25.857Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T08:47:25.874Z] [BOT ERROR] (node:3027) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T08:47:26.034Z] [BOT ERROR] ❌ Error posting job Technology - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technology - Application Development @ Citi',
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
[2026-01-14T08:47:26.035Z] [BOT] ❌ Industry post failed: Technology - Application Development
⚠️  Channel full error count: 1/5
[2026-01-14T08:47:27.674Z] [BOT ERROR] ❌ Error posting job Technology - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technology - Application Development @ Citi',
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
[2026-01-14T08:47:27.674Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T08:47:29.175Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T08:47:29.175Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T08:47:29.339Z] [BOT ERROR] ❌ Error posting job Developer Technology Engineer – New College Grad - Public Sector: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Developer Technology Engineer – New College Grad - Public Sector @ NVIDIA',
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
[2026-01-14T08:47:29.340Z] [BOT] ❌ Industry post failed: Developer Technology Engineer – New College Grad - Public Sector
⚠️  Channel full error count: 2/5
[2026-01-14T08:47:30.960Z] [BOT ERROR] ❌ Error posting job Developer Technology Engineer – New College Grad - Public Sector: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Developer Technology Engineer – New College Grad - Public Sector @ NVIDIA',
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
[2026-01-14T08:47:30.960Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T08:47:32.462Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T08:47:32.570Z] [BOT ERROR] ❌ Error posting job Technology - Application Development - Full Time Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technology - Application Development - Full Time Analyst @ Citi',
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
[2026-01-14T08:47:32.571Z] [BOT] ❌ Industry post failed: Technology - Application Development - Full Time Analyst
⚠️  Channel full error count: 3/5
[2026-01-14T08:47:34.184Z] [BOT ERROR] ❌ Error posting job Technology - Application Development - Full Time Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technology - Application Development - Full Time Analyst @ Citi',
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
[2026-01-14T08:47:34.185Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T08:47:35.686Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-14T08:47:35.687Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T08:47:35.855Z] [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi',
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
[2026-01-14T08:47:35.855Z] [BOT] ❌ Industry post failed: Postdoctoral Research Associate
⚠️  Channel full error count: 4/5
[2026-01-14T08:47:37.565Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T08:47:39.067Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi (instance #1)
[2026-01-14T08:47:39.067Z] [BOT] 💾 BEFORE ARCHIVING: 1342 jobs in database
[2026-01-14T08:47:39.068Z] [BOT] ✅ No jobs to archive (all 1342 jobs within 7-day window)
[2026-01-14T08:47:39.080Z] [BOT] 💾 Saved posted_jobs.json: 1342 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T08:47:42.081Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T08:47:42.082Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: SALES (matched: "sales")
[2026-01-14T08:47:42.082Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T08:47:42.239Z] [BOT ERROR] ❌ Error posting job Manager, GTM Finance: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Manager, GTM Finance @ figma',
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
[2026-01-14T08:47:42.240Z] [BOT] ❌ Industry post failed: Manager, GTM Finance
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 4 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-14T08:47:42.240Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 9
[2026-01-14T08:47:42.240Z] [BOT] Successful: 1
   Failed: 8
   Skipped: 0
[2026-01-14T08:47:42.241Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T08:47:42.241Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-14T08:47:42.241Z] [BOT] 1. #🤠・austin: 1 posts
[2026-01-14T08:47:42.241Z] [BOT] [STATS] Channel stats saved
[2026-01-14T08:47:42.241Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_06e0e7ef.json
[2026-01-14T08:47:42.255Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3027) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Technology - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technology - Application Development
- [BOT ERROR] ❌ Error posting job Technology - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Developer Technology Engineer – New College Grad - Public Sector: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Developer Technology Engineer – New College Grad - Public Sector
- [BOT ERROR] ❌ Error posting job Developer Technology Engineer – New College Grad - Public Sector: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technology - Application Development - Full Time Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technology - Application Development - Full Time Analyst
- [BOT ERROR] ❌ Error posting job Technology - Application Development - Full Time Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Research Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Research Associate
- [BOT ERROR] ❌ Error posting job Manager, GTM Finance: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Manager, GTM Finance
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 4 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*