# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T22:41:44.539Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T22:41:21.734Z] ========================================
[2026-01-16T22:41:21.736Z] Discord Bot Execution Log
[2026-01-16T22:41:21.736Z] Environment: GitHub Actions
[2026-01-16T22:41:21.736Z] Node Version: v20.19.6
[2026-01-16T22:41:21.736Z] ========================================
[2026-01-16T22:41:21.736Z] Environment Variables Check:
[2026-01-16T22:41:21.736Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T22:41:21.736Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.736Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T22:41:21.736Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T22:41:21.736Z] 
Multi-Channel Configuration:
[2026-01-16T22:41:21.736Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.737Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.737Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.737Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.737Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.737Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.737Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.737Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.737Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T22:41:21.737Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T22:41:21.737Z] 
Data Files Check:
[2026-01-16T22:41:21.738Z] .github/data/new_jobs.json: ✅ Exists (10 items, 16514 bytes)
[2026-01-16T22:41:21.746Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1180583 bytes)
[2026-01-16T22:41:21.746Z] 
========================================
[2026-01-16T22:41:21.746Z] Starting Enhanced Discord Bot...
[2026-01-16T22:41:21.746Z] ========================================
[2026-01-16T22:41:22.315Z] [BOT] ✅ Loaded V2 database: 2175 jobs
[2026-01-16T22:41:22.740Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T22:41:22.740Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T22:41:22.740Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T22:41:22.862Z] [BOT] ✅ Loaded pending queue: 2783 total (2763 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) at ByteDance
[2026-01-16T22:41:22.866Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T22:41:22.866Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T22:41:22.866Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T22:41:22.867Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-01-16T22:41:22.867Z] [BOT] (8 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-16T22:41:22.867Z] [BOT] - Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies: dallas, chesterfield
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: chesterfield, san francisco, san diego, dayton, new york, dallas
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T22:41:22.872Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-16T22:41:22.872Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS)" @ ORG_08c9a13c
[2026-01-16T22:41:22.872Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T22:41:22.889Z] [BOT ERROR] (node:2414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T22:41:23.079Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c
[2026-01-16T22:41:26.187Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T22:41:27.688Z] [BOT] 💾 Marked as posted: Software Engineer Graduate (Applied Machine Learning - MLDev) - 2026 Start (BS/MS) @ ORG_08c9a13c (instance #1)
[2026-01-16T22:41:27.688Z] [BOT] 💾 BEFORE ARCHIVING: 2176 jobs in database
[2026-01-16T22:41:27.690Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T22:41:27.692Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-16T22:41:27.692Z] [BOT] ✅ Archiving complete: 2 archived, 2174 active
[2026-01-16T22:41:27.706Z] [BOT] 💾 Saved posted_jobs.json: 2174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:41:30.707Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-01-16T22:41:30.707Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:41:30.847Z] [BOT ERROR] ❌ Error posting job Java Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Java Developer @ ORG_9af9eef3 Technologies',
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
[2026-01-16T22:41:30.847Z] [BOT] ❌ Industry post failed: Java Developer
⚠️  Channel full error count: 1/5
[2026-01-16T22:41:32.457Z] [BOT ERROR] ❌ Error posting job Java Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Java Developer @ ORG_9af9eef3 Technologies',
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
[2026-01-16T22:41:32.458Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T22:41:33.959Z] [BOT] 📍 [ROUTING] "Java Informatica MicroStrategy Training" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:41:34.059Z] [BOT ERROR] ❌ Error posting job Java Informatica MicroStrategy Training: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies',
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
[2026-01-16T22:41:34.060Z] [BOT] ❌ Industry post failed: Java Informatica MicroStrategy Training
⚠️  Channel full error count: 2/5
[2026-01-16T22:41:35.717Z] [BOT ERROR] ❌ Error posting job Java Informatica MicroStrategy Training: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies',
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
[2026-01-16T22:41:35.717Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T22:41:37.219Z] [BOT] 📍 [ROUTING] "Hiring for OPT/H4EAD/GC" @ ORG_9af9eef3 Technologies
[2026-01-16T22:41:37.219Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:41:37.378Z] [BOT ERROR] ❌ Error posting job Hiring for OPT/H4EAD/GC: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies',
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
[2026-01-16T22:41:37.378Z] [BOT] ❌ Industry post failed: Hiring for OPT/H4EAD/GC
⚠️  Channel full error count: 3/5
[2026-01-16T22:41:38.996Z] [BOT ERROR] ❌ Error posting job Hiring for OPT/H4EAD/GC: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hiring for OPT/H4EAD/GC @ ORG_9af9eef3 Technologies',
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
[2026-01-16T22:41:38.996Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T22:41:40.497Z] [BOT] 📍 [ROUTING] "Software Engineer openings for OPT/GC/EAD" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:41:40.656Z] [BOT ERROR] ❌ Error posting job Software Engineer openings for OPT/GC/EAD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies',
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
[2026-01-16T22:41:40.656Z] [BOT] ❌ Industry post failed: Software Engineer openings for OPT/GC/EAD
⚠️  Channel full error count: 4/5
[2026-01-16T22:41:42.270Z] [BOT ERROR] ❌ Error posting job Software Engineer openings for OPT/GC/EAD: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer openings for OPT/GC/EAD @ ORG_9af9eef3 Technologies',
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
[2026-01-16T22:41:42.271Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T22:41:43.772Z] [BOT] 📍 [ROUTING] "Training and Placement on Java Informatica Fullstack" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:41:43.899Z] [BOT ERROR] ❌ Error posting job Training and Placement on Java Informatica Fullstack: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Training and Placement on Java Informatica Fullstack @ ORG_9af9eef3 Technologies',
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
[2026-01-16T22:41:43.899Z] [BOT] ❌ Industry post failed: Training and Placement on Java Informatica Fullstack
⚠️  Channel full error count: 5/5
[2026-01-16T22:41:43.900Z] [BOT] ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-16T22:41:43.900Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T22:41:43.900Z] [BOT] Total attempts: 11
   Successful: 2
   Failed: 9
   Skipped: 0
[2026-01-16T22:41:43.901Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T22:41:43.901Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-16T22:41:43.901Z] [BOT] [STATS] Channel stats saved
[2026-01-16T22:41:43.901Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_2dc10745.json
[2026-01-16T22:41:43.914Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Java Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Java Developer
- [BOT ERROR] ❌ Error posting job Java Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Java Informatica MicroStrategy Training: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Java Informatica MicroStrategy Training
- [BOT ERROR] ❌ Error posting job Java Informatica MicroStrategy Training: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Hiring for OPT/H4EAD/GC: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Hiring for OPT/H4EAD/GC
- [BOT ERROR] ❌ Error posting job Hiring for OPT/H4EAD/GC: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer openings for OPT/GC/EAD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer openings for OPT/GC/EAD
- [BOT ERROR] ❌ Error posting job Software Engineer openings for OPT/GC/EAD: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Training and Placement on Java Informatica Fullstack: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Training and Placement on Java Informatica Fullstack
- [BOT] ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 9 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*