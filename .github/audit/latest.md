# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T17:39:49.505Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T17:39:31.029Z] ========================================
[2026-01-18T17:39:31.031Z] Discord Bot Execution Log
[2026-01-18T17:39:31.031Z] Environment: GitHub Actions
[2026-01-18T17:39:31.031Z] Node Version: v20.19.6
[2026-01-18T17:39:31.031Z] ========================================
[2026-01-18T17:39:31.032Z] Environment Variables Check:
[2026-01-18T17:39:31.032Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T17:39:31.032Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.032Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T17:39:31.032Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T17:39:31.032Z] 
Multi-Channel Configuration:
[2026-01-18T17:39:31.032Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.032Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.032Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.032Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.032Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.032Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.033Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.033Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.033Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T17:39:31.033Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T17:39:31.033Z] 
Data Files Check:
[2026-01-18T17:39:31.034Z] .github/data/new_jobs.json: ✅ Exists (10 items, 74238 bytes)
[2026-01-18T17:39:31.045Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1463303 bytes)
[2026-01-18T17:39:31.045Z] 
========================================
[2026-01-18T17:39:31.045Z] Starting Enhanced Discord Bot...
[2026-01-18T17:39:31.045Z] ========================================
[2026-01-18T17:39:31.570Z] [BOT] ✅ Loaded V2 database: 2701 jobs
[2026-01-18T17:39:32.385Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T17:39:32.385Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T17:39:32.385Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T17:39:32.502Z] [BOT] ✅ Loaded pending queue: 2842 total (2822 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-18T17:39:32.507Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T17:39:32.507Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T17:39:32.508Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T17:39:32.508Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T17:39:32.509Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T17:39:32.509Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T17:39:32.513Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T17:39:32.513Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Federal / State)" @ verkada
[2026-01-18T17:39:32.514Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T17:39:32.518Z] [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T17:39:32.619Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Federal / State) @ verkada',
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-18T17:39:32.619Z] [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Federal / State)
⚠️  Channel full error count: 1/5
[2026-01-18T17:39:34.223Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Federal / State) @ verkada',
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
[2026-01-18T17:39:34.223Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T17:39:38.724Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-18T17:39:38.724Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_297c6f0f
   Category: TECH (matched: "software")
[2026-01-18T17:39:38.725Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:39:38.852Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 @ Ticketmaster',
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
[2026-01-18T17:39:38.852Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 2/5
[2026-01-18T17:39:40.461Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 @ Ticketmaster',
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
[2026-01-18T17:39:40.461Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T17:39:41.963Z] [BOT] 📍 [ROUTING] "Software Engineer Support Analyst Graduate" @ ORG_a5257743 Packard Enterprise
[2026-01-18T17:39:41.963Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:39:42.077Z] [BOT ERROR] ❌ Error posting job Software Engineer Support Analyst Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise',
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
[2026-01-18T17:39:42.077Z] [BOT] ❌ Industry post failed: Software Engineer Support Analyst Graduate
⚠️  Channel full error count: 3/5
[2026-01-18T17:39:44.001Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-18T17:39:45.503Z] [BOT] 💾 Marked as posted: Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise (instance #1)
[2026-01-18T17:39:45.504Z] [BOT] 💾 BEFORE ARCHIVING: 2702 jobs in database
[2026-01-18T17:39:45.506Z] [BOT] ✅ No jobs to archive (all 2702 jobs within 7-day window)
[2026-01-18T17:39:45.526Z] [BOT] 💾 Saved posted_jobs.json: 2702 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T17:39:45.527Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_c7bac469
[2026-01-18T17:39:45.527Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:39:45.621Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🟦 Software Engineer 1 @ Microsoft',
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
[2026-01-18T17:39:45.622Z] [BOT] ❌ Industry post failed: Software Engineer 1
⚠️  Channel full error count: 4/5
[2026-01-18T17:39:47.236Z] [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🟦 Software Engineer 1 @ Microsoft',
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
[2026-01-18T17:39:47.236Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T17:39:48.738Z] [BOT] 📍 [ROUTING] "Principal Engineer" @ ORG_cdfeb1f5
[2026-01-18T17:39:48.738Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T17:39:48.887Z] [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Principal Engineer @ Amgen',
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
[2026-01-18T17:39:48.887Z] [BOT] ❌ Industry post failed: Principal Engineer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T17:39:48.888Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T17:39:48.888Z] [BOT] Total attempts: 9
   Successful: 1
   Failed: 8
   Skipped: 0
[2026-01-18T17:39:48.889Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-18T17:39:48.889Z] [BOT] 1. #☀️・sunnyvale: 1 posts
[2026-01-18T17:39:48.889Z] [BOT] [STATS] Channel stats saved
[2026-01-18T17:39:48.889Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T17:39:48.903Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Federal / State)
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Federal / State): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Support Analyst Graduate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Support Analyst Graduate
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1
- [BOT ERROR] ❌ Error posting job Software Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Principal Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Principal Engineer
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*