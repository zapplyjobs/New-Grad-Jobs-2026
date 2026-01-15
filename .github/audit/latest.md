# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T22:54:20.062Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T22:54:00.416Z] ========================================
[2026-01-15T22:54:00.418Z] Discord Bot Execution Log
[2026-01-15T22:54:00.418Z] Environment: GitHub Actions
[2026-01-15T22:54:00.418Z] Node Version: v20.19.6
[2026-01-15T22:54:00.418Z] ========================================
[2026-01-15T22:54:00.418Z] Environment Variables Check:
[2026-01-15T22:54:00.419Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T22:54:00.419Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.419Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T22:54:00.419Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T22:54:00.419Z] 
Multi-Channel Configuration:
[2026-01-15T22:54:00.419Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.419Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.419Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.419Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.419Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.420Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.420Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.420Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.420Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T22:54:00.420Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T22:54:00.420Z] 
Data Files Check:
[2026-01-15T22:54:00.421Z] .github/data/new_jobs.json: ✅ Exists (10 items, 25405 bytes)
[2026-01-15T22:54:00.428Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1001552 bytes)
[2026-01-15T22:54:00.428Z] 
========================================
[2026-01-15T22:54:00.428Z] Starting Enhanced Discord Bot...
[2026-01-15T22:54:00.428Z] ========================================
[2026-01-15T22:54:00.963Z] [BOT] ✅ Loaded V2 database: 1863 jobs
[2026-01-15T22:54:02.106Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T22:54:02.106Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T22:54:02.107Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T22:54:02.217Z] [BOT] ✅ Loaded pending queue: 2753 total (2733 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Software Test Engineer at Insulet
[2026-01-15T22:54:02.222Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T22:54:02.222Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T22:54:02.222Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T22:54:02.223Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-15T22:54:02.223Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-15T22:54:02.223Z] [BOT] - Marketing Science Analyst - February 16th - 2026 Start @ ORG_a7dddf79 Partners: nyc, colorado
   - Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems: pleasanton, columbus
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T22:54:02.227Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T22:54:02.228Z] [BOT] 📍 [ROUTING] "Associate Software Test Engineer" @ ORG_7a38ef37
[2026-01-15T22:54:02.228Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:54:02.244Z] [BOT ERROR] (node:2941) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T22:54:02.456Z] [BOT] ✅ Created forum post: 🏢 Associate Software Test Engineer @ ORG_7a38ef37 in #💻・tech-jobs
  ✅ Industry: Associate Software Test Engineer @ ORG_7a38ef37
[2026-01-15T22:54:04.175Z] [BOT] ✅ Created forum post: 🏢 Associate Software Test Engineer @ ORG_7a38ef37 in #🚌・boston
[2026-01-15T22:54:04.175Z] [BOT] ✅ Location: 🚌・boston
[2026-01-15T22:54:05.675Z] [BOT] 💾 Marked as posted: Associate Software Test Engineer @ ORG_7a38ef37 (instance #1)
[2026-01-15T22:54:05.675Z] [BOT] 💾 BEFORE ARCHIVING: 1864 jobs in database
[2026-01-15T22:54:05.677Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T22:54:05.682Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-15T22:54:05.682Z] [BOT] ✅ Archiving complete: 2 archived, 1862 active
[2026-01-15T22:54:05.695Z] [BOT] 💾 Saved posted_jobs.json: 1862 active jobs
[2026-01-15T22:54:05.695Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:54:05.695Z] [BOT] 📍 [ROUTING] "Junior Software QA Engineer" @ ORG_8697f6f3
   Category: TECH (matched: "software")
[2026-01-15T22:54:05.695Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:54:05.837Z] [BOT ERROR] ❌ Error posting job Junior Software QA Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software QA Engineer @ Logitech',
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
[2026-01-15T22:54:05.838Z] [BOT] ❌ Industry post failed: Junior Software QA Engineer
⚠️  Channel full error count: 1/5
[2026-01-15T22:54:07.602Z] [BOT ERROR] ❌ Error posting job Junior Software QA Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software QA Engineer @ Logitech',
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
[2026-01-15T22:54:07.603Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T22:54:09.102Z] [BOT] 📍 [ROUTING] "Graduate Environmental Engineer" @ ORG_65eedb45
   Category: TECH (matched: "engineer/engineering")
[2026-01-15T22:54:09.102Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:54:09.231Z] [BOT ERROR] ❌ Error posting job Graduate Environmental Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Environmental Engineer @ GHD',
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
[2026-01-15T22:54:09.231Z] [BOT] ❌ Industry post failed: Graduate Environmental Engineer
⚠️  Channel full error count: 2/5
[2026-01-15T22:54:10.916Z] [BOT ERROR] ❌ Error posting job Graduate Environmental Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Environmental Engineer @ GHD',
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
[2026-01-15T22:54:10.916Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-15T22:54:12.417Z] [BOT] 📍 [ROUTING] "Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction" @ ORG_08c9a13c
[2026-01-15T22:54:12.417Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:54:12.566Z] [BOT ERROR] ❌ Error posting job Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ByteDance',
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
[2026-01-15T22:54:12.566Z] [BOT] ❌ Industry post failed: Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction
⚠️  Channel full error count: 3/5
[2026-01-15T22:54:14.228Z] [BOT ERROR] ❌ Error posting job Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction @ ByteDance',
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
[2026-01-15T22:54:14.228Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-15T22:54:15.729Z] [BOT] 📍 [ROUTING] "Jr. Software Engineer" @ ORG_74f80925 & Tango
[2026-01-15T22:54:15.729Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:54:15.844Z] [BOT ERROR] ❌ Error posting job Jr. Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Jr. Software Engineer @ ORG_74f80925 & Tango',
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
[2026-01-15T22:54:15.845Z] [BOT] ❌ Industry post failed: Jr. Software Engineer
⚠️  Channel full error count: 4/5
[2026-01-15T22:54:17.476Z] [BOT ERROR] ❌ Error posting job Jr. Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Jr. Software Engineer @ ORG_74f80925 & Tango',
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
[2026-01-15T22:54:17.476Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-15T22:54:18.976Z] [BOT] 📍 [ROUTING] "Demo Engineer, Software Development" @ ORG_5e875bc9
[2026-01-15T22:54:18.976Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:54:19.116Z] [BOT ERROR] ❌ Error posting job Demo Engineer, Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Demo Engineer, Software Development @ Shopify',
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
[2026-01-15T22:54:19.116Z] [BOT] ❌ Industry post failed: Demo Engineer, Software Development
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
[2026-01-15T22:54:19.116Z] [BOT] ❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-15T22:54:19.117Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T22:54:19.117Z] [BOT] Total attempts: 11
   Successful: 2
   Failed: 9
   Skipped: 0
[2026-01-15T22:54:19.117Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2026-01-15T22:54:19.117Z] [BOT] Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🚌・boston: 1 posts
[2026-01-15T22:54:19.117Z] [BOT] [STATS] Channel stats saved
[2026-01-15T22:54:19.118Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_01edcc50.json
[2026-01-15T22:54:19.130Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2941) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Junior Software QA Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Junior Software QA Engineer
- [BOT ERROR] ❌ Error posting job Junior Software QA Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Environmental Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Environmental Engineer
- [BOT ERROR] ❌ Error posting job Graduate Environmental Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction
- [BOT ERROR] ❌ Error posting job Visual Perception Algorithm Engineer Graduate - Human Body Perception Direction: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Jr. Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Jr. Software Engineer
- [BOT ERROR] ❌ Error posting job Jr. Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Demo Engineer, Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Demo Engineer, Software Development
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- [BOT] ❌ Exiting early to avoid timeout. 1 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*