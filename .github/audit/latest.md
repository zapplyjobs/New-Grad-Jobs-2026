# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T14:27:16.067Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 7
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T14:26:59.790Z] ========================================
[2026-01-16T14:26:59.792Z] Discord Bot Execution Log
[2026-01-16T14:26:59.792Z] Environment: GitHub Actions
[2026-01-16T14:26:59.792Z] Node Version: v20.19.6
[2026-01-16T14:26:59.792Z] ========================================
[2026-01-16T14:26:59.792Z] Environment Variables Check:
[2026-01-16T14:26:59.793Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T14:26:59.793Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.793Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T14:26:59.793Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T14:26:59.793Z] 
Multi-Channel Configuration:
[2026-01-16T14:26:59.793Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.793Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.793Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.793Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.793Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.793Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.794Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.794Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.794Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T14:26:59.794Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T14:26:59.794Z] 
Data Files Check:
[2026-01-16T14:26:59.794Z] .github/data/new_jobs.json: ✅ Exists (10 items, 38905 bytes)
[2026-01-16T14:26:59.802Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1092085 bytes)
[2026-01-16T14:26:59.802Z] 
========================================
[2026-01-16T14:26:59.802Z] Starting Enhanced Discord Bot...
[2026-01-16T14:26:59.802Z] ========================================
[2026-01-16T14:27:00.327Z] [BOT] ✅ Loaded V2 database: 2024 jobs
[2026-01-16T14:27:01.153Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T14:27:01.154Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T14:27:01.154Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T14:27:01.274Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Frontend Software Engineer – University Graduate 2026 at Verkada
[2026-01-16T14:27:01.277Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T14:27:01.278Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T14:27:01.278Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T14:27:01.279Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T14:27:01.279Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-16T14:27:01.279Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T14:27:01.282Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-16T14:27:01.283Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer – University Graduate 2026" @ ORG_175f350d
[2026-01-16T14:27:01.283Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T14:27:01.300Z] [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T14:27:01.430Z] [BOT ERROR] ❌ Error posting job Frontend Software Engineer – University Graduate 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Frontend Software Engineer – University Graduate 2026 @ Verkada',
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
[2026-01-16T14:27:01.430Z] [BOT] ❌ Industry post failed: Frontend Software Engineer – University Graduate 2026
⚠️  Channel full error count: 1/5
[2026-01-16T14:27:03.144Z] [BOT ERROR] ❌ Error posting job Frontend Software Engineer – University Graduate 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Frontend Software Engineer – University Graduate 2026 @ Verkada',
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
[2026-01-16T14:27:03.144Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-16T14:27:04.645Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry-Level - C++" @ ORG_6c71f4eb Capital
[2026-01-16T14:27:04.645Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T14:27:04.768Z] [BOT ERROR] ❌ Error posting job Software Engineer - Entry-Level - C++: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital',
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
[2026-01-16T14:27:04.768Z] [BOT] ❌ Industry post failed: Software Engineer - Entry-Level - C++
⚠️  Channel full error count: 2/5
[2026-01-16T14:27:06.540Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital in #🌆・chicago
[2026-01-16T14:27:06.541Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-16T14:27:08.042Z] [BOT] 💾 Marked as posted: Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital (instance #1)
[2026-01-16T14:27:08.042Z] [BOT] 💾 BEFORE ARCHIVING: 2025 jobs in database
[2026-01-16T14:27:08.043Z] [BOT] ✅ No jobs to archive (all 2025 jobs within 7-day window)
[2026-01-16T14:27:08.062Z] [BOT] 💾 Saved posted_jobs.json: 2025 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T14:27:08.062Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_964fffee
[2026-01-16T14:27:08.062Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T14:27:08.185Z] [BOT ERROR] ❌ Error posting job Software Engineer - New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - New Grad @ Decagon',
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
[2026-01-16T14:27:08.185Z] [BOT] ❌ Industry post failed: Software Engineer - New Grad
⚠️  Channel full error count: 3/5
[2026-01-16T14:27:09.904Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad @ ORG_964fffee in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T14:27:11.406Z] [BOT] 💾 Marked as posted: Software Engineer - New Grad @ ORG_964fffee (instance #1)
[2026-01-16T14:27:11.406Z] [BOT] 💾 BEFORE ARCHIVING: 2026 jobs in database
[2026-01-16T14:27:11.407Z] [BOT] ✅ No jobs to archive (all 2026 jobs within 7-day window)
[2026-01-16T14:27:11.423Z] [BOT] 💾 Saved posted_jobs.json: 2026 active jobs
[2026-01-16T14:27:11.423Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T14:27:11.425Z] [BOT] 📍 [ROUTING] "Digital Engineering Rotational Aspire" @ ORG_0baaf6f2 Bureau of Shipping
[2026-01-16T14:27:11.425Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T14:27:11.560Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping',
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
[2026-01-16T14:27:11.560Z] [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
⚠️  Channel full error count: 4/5
[2026-01-16T14:27:13.203Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping',
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
[2026-01-16T14:27:13.203Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T14:27:14.705Z] [BOT] 📍 [ROUTING] "Software Engineer – 2026 New Grad" @ ORG_3be2d18e
[2026-01-16T14:27:14.705Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T14:27:14.858Z] [BOT ERROR] ❌ Error posting job Software Engineer – 2026 New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – 2026 New Grad @ WhatNot',
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
[2026-01-16T14:27:14.858Z] [BOT] ❌ Industry post failed: Software Engineer – 2026 New Grad
⚠️  Channel full error count: 5/5
[2026-01-16T14:27:14.858Z] [BOT] ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
[2026-01-16T14:27:14.859Z] [BOT] ❌ Exiting early to avoid timeout. 2 jobs posted, 4 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-16T14:27:14.859Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T14:27:14.859Z] [BOT] Total attempts: 9
   Successful: 2
   Failed: 7
   Skipped: 0
[2026-01-16T14:27:14.860Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T14:27:14.860Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-16T14:27:14.860Z] [BOT] 1. #🌆・chicago: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-16T14:27:14.860Z] [BOT] [STATS] Channel stats saved
[2026-01-16T14:27:14.860Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_2dc10745.json
[2026-01-16T14:27:14.874Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Frontend Software Engineer – University Graduate 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Frontend Software Engineer – University Graduate 2026
- [BOT ERROR] ❌ Error posting job Frontend Software Engineer – University Graduate 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Entry-Level - C++: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Entry-Level - C++
- [BOT ERROR] ❌ Error posting job Software Engineer - New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - New Grad
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer – 2026 New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – 2026 New Grad
- [BOT] ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- [BOT] ❌ Exiting early to avoid timeout. 2 jobs posted, 4 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*