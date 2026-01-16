# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T04:21:41.190Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T04:21:19.570Z] ========================================
[2026-01-16T04:21:19.571Z] Discord Bot Execution Log
[2026-01-16T04:21:19.572Z] Environment: GitHub Actions
[2026-01-16T04:21:19.572Z] Node Version: v20.19.6
[2026-01-16T04:21:19.572Z] ========================================
[2026-01-16T04:21:19.572Z] Environment Variables Check:
[2026-01-16T04:21:19.572Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T04:21:19.572Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.572Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T04:21:19.572Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T04:21:19.572Z] 
Multi-Channel Configuration:
[2026-01-16T04:21:19.572Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.573Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.573Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.573Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.573Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.573Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.573Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.573Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.573Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T04:21:19.573Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T04:21:19.573Z] 
Data Files Check:
[2026-01-16T04:21:19.574Z] .github/data/new_jobs.json: ✅ Exists (10 items, 24550 bytes)
[2026-01-16T04:21:19.581Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1028133 bytes)
[2026-01-16T04:21:19.581Z] 
========================================
[2026-01-16T04:21:19.581Z] Starting Enhanced Discord Bot...
[2026-01-16T04:21:19.581Z] ========================================
[2026-01-16T04:21:20.115Z] [BOT] ✅ Loaded V2 database: 1913 jobs
[2026-01-16T04:21:20.728Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T04:21:20.728Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T04:21:20.728Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T04:21:20.863Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer I at Fanatics
[2026-01-16T04:21:20.866Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T04:21:20.867Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T04:21:20.867Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T04:21:20.868Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-16T04:21:20.868Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T04:21:20.870Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-16T04:21:20.871Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_b18a8c08
[2026-01-16T04:21:20.872Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:21:20.889Z] [BOT ERROR] (node:2660) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T04:21:21.038Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_b18a8c08 in #💻・tech-jobs
[2026-01-16T04:21:21.038Z] [BOT] ✅ Industry: Software Engineer I @ ORG_b18a8c08
[2026-01-16T04:21:22.710Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_b18a8c08 in #💻・remote-usa
[2026-01-16T04:21:22.710Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T04:21:24.211Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_b18a8c08 (instance #1)
[2026-01-16T04:21:24.211Z] [BOT] 💾 BEFORE ARCHIVING: 1914 jobs in database
[2026-01-16T04:21:24.213Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T04:21:24.218Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
✅ Archiving complete: 5 archived, 1909 active
[2026-01-16T04:21:24.231Z] [BOT] 💾 Saved posted_jobs.json: 1909 active jobs
[2026-01-16T04:21:24.231Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T04:21:24.232Z] [BOT] 📍 [ROUTING] "Campus Graduate - Software Engineer II - Technology" @ ORG_0baaf6f2 Express
[2026-01-16T04:21:24.232Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:21:24.424Z] [BOT] ✅ Created forum post: 🏢 Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express in #💻・tech-jobs
[2026-01-16T04:21:24.425Z] [BOT] ✅ Industry: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express
[2026-01-16T04:21:26.075Z] [BOT ERROR] ❌ Error posting job Campus Graduate - Software Engineer II - Technology: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express',
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
[2026-01-16T04:21:26.075Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-16T04:21:27.576Z] [BOT] 💾 Marked as posted: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express (instance #1)
[2026-01-16T04:21:27.576Z] [BOT] 💾 BEFORE ARCHIVING: 1910 jobs in database
[2026-01-16T04:21:27.578Z] [BOT] ✅ No jobs to archive (all 1910 jobs within 7-day window)
[2026-01-16T04:21:27.594Z] [BOT] 💾 Saved posted_jobs.json: 1910 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T04:21:27.595Z] [BOT] 📍 [ROUTING] "Associate Embedded Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-16T04:21:27.595Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:21:27.729Z] [BOT ERROR] ❌ Error posting job Associate Embedded Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Embedded Software Engineer @ ORG_f3f2248d Grumman',
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
[2026-01-16T04:21:27.730Z] [BOT] ❌ Industry post failed: Associate Embedded Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-16T04:21:29.340Z] [BOT ERROR] ❌ Error posting job Associate Embedded Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Embedded Software Engineer @ ORG_f3f2248d Grumman',
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
[2026-01-16T04:21:29.340Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T04:21:30.843Z] [BOT] 📍 [ROUTING] "Software Engineer 0" @ ORG_438280e0 Engineering
[2026-01-16T04:21:30.843Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:21:30.922Z] [BOT ERROR] ❌ Error posting job Software Engineer 0: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 0 @ ORG_438280e0 Engineering',
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
[2026-01-16T04:21:30.922Z] [BOT] ❌ Industry post failed: Software Engineer 0
⚠️  Channel full error count: 2/5
[2026-01-16T04:21:32.507Z] [BOT ERROR] ❌ Error posting job Software Engineer 0: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 0 @ ORG_438280e0 Engineering',
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
[2026-01-16T04:21:32.507Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T04:21:34.009Z] [BOT] 📍 [ROUTING] "University Grad - Product Engineer - 2026" @ ORG_b7d7c983 Labs
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:21:34.120Z] [BOT ERROR] ❌ Error posting job University Grad - Product Engineer - 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs',
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
[2026-01-16T04:21:34.120Z] [BOT] ❌ Industry post failed: University Grad - Product Engineer - 2026
⚠️  Channel full error count: 3/5
[2026-01-16T04:21:35.714Z] [BOT ERROR] ❌ Error posting job University Grad - Product Engineer - 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 University Grad - Product Engineer - 2026 @ ORG_b7d7c983 Labs',
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
[2026-01-16T04:21:35.714Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T04:21:37.215Z] [BOT] 📍 [ROUTING] "Fullstack Software Engineer" @ ORG_60cbfc1e Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:21:37.290Z] [BOT ERROR] ❌ Error posting job Fullstack Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Fullstack Software Engineer @ ORG_60cbfc1e Health',
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
[2026-01-16T04:21:37.291Z] [BOT] ❌ Industry post failed: Fullstack Software Engineer
⚠️  Channel full error count: 4/5
[2026-01-16T04:21:38.904Z] [BOT ERROR] ❌ Error posting job Fullstack Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Fullstack Software Engineer @ ORG_60cbfc1e Health',
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
[2026-01-16T04:21:38.904Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-16T04:21:40.405Z] [BOT] 📍 [ROUTING] "Design Engineer" @ ORG_60cbfc1e Health
   Category: TECH (matched: "engineer/engineering")
[2026-01-16T04:21:40.406Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T04:21:40.501Z] [BOT ERROR] ❌ Error posting job Design Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Design Engineer @ ORG_60cbfc1e Health',
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
[2026-01-16T04:21:40.501Z] [BOT] ❌ Industry post failed: Design Engineer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-16T04:21:40.502Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T04:21:40.502Z] [BOT] Total attempts: 13
   Successful: 3
   Failed: 10
   Skipped: 0
[2026-01-16T04:21:40.503Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T04:21:40.503Z] [BOT] Last cleanup: Never
   Total posts: 3
   Channels used: 2
   Top channels:
[2026-01-16T04:21:40.503Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #💻・remote-usa: 1 posts
[2026-01-16T04:21:40.503Z] [BOT] [STATS] Channel stats saved
[2026-01-16T04:21:40.503Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_2dc10745.json
[2026-01-16T04:21:40.516Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2660) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Campus Graduate - Software Engineer II - Technology: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Embedded Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Embedded Software Engineer
- [BOT ERROR] ❌ Error posting job Associate Embedded Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 0: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 0
- [BOT ERROR] ❌ Error posting job Software Engineer 0: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job University Grad - Product Engineer - 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: University Grad - Product Engineer - 2026
- [BOT ERROR] ❌ Error posting job University Grad - Product Engineer - 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Fullstack Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Fullstack Software Engineer
- [BOT ERROR] ❌ Error posting job Fullstack Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Design Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Design Engineer
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*