# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T19:36:43.142Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T19:36:18.089Z] ========================================
[2026-01-18T19:36:18.091Z] Discord Bot Execution Log
[2026-01-18T19:36:18.091Z] Environment: GitHub Actions
[2026-01-18T19:36:18.091Z] Node Version: v20.19.6
[2026-01-18T19:36:18.091Z] ========================================
[2026-01-18T19:36:18.091Z] Environment Variables Check:
[2026-01-18T19:36:18.091Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T19:36:18.091Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.091Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T19:36:18.091Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T19:36:18.092Z] 
Multi-Channel Configuration:
[2026-01-18T19:36:18.092Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.092Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.092Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.092Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.092Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.092Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.092Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.092Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.092Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T19:36:18.092Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T19:36:18.092Z] 
Data Files Check:
[2026-01-18T19:36:18.093Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58887 bytes)
[2026-01-18T19:36:18.103Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1468922 bytes)
[2026-01-18T19:36:18.103Z] 
========================================
[2026-01-18T19:36:18.103Z] Starting Enhanced Discord Bot...
[2026-01-18T19:36:18.103Z] ========================================
[2026-01-18T19:36:18.618Z] [BOT] ✅ Loaded V2 database: 2710 jobs
[2026-01-18T19:36:19.181Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T19:36:19.182Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T19:36:19.182Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T19:36:19.299Z] [BOT] ✅ Loaded pending queue: 2839 total (2819 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Quality Engineer - Principal Quality Engineer at Northrop Grumman
[2026-01-18T19:36:19.302Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T19:36:19.302Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T19:36:19.303Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T19:36:19.303Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T19:36:19.304Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T19:36:19.308Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-18T19:36:19.309Z] [BOT] 📍 [ROUTING] "Quality Engineer - Principal Quality Engineer" @ ORG_f3f2248d Grumman
[2026-01-18T19:36:19.309Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T19:36:19.313Z] [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T19:36:19.563Z] [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman',
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
[2026-01-18T19:36:19.563Z] [BOT] ❌ Industry post failed: Quality Engineer - Principal Quality Engineer
⚠️  Channel full error count: 1/5
[2026-01-18T19:36:21.338Z] [BOT] ✅ Created forum post: 🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
[2026-01-18T19:36:21.338Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T19:36:22.839Z] [BOT] 💾 Marked as posted: Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-18T19:36:22.840Z] [BOT] 💾 BEFORE ARCHIVING: 2711 jobs in database
[2026-01-18T19:36:22.841Z] [BOT] ✅ No jobs to archive (all 2711 jobs within 7-day window)
[2026-01-18T19:36:22.867Z] [BOT] 💾 Saved posted_jobs.json: 2711 active jobs
[2026-01-18T19:36:22.868Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T19:36:22.868Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Builder Frameworks" @ ORG_a731a58c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T19:36:23.150Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Builder Frameworks @ ORG_a731a58c in #💻・tech-jobs
[2026-01-18T19:36:23.150Z] [BOT] ✅ Industry: Software Engineer 1 - Builder Frameworks @ ORG_a731a58c
[2026-01-18T19:36:24.744Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Builder Frameworks @ Twitch',
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
[2026-01-18T19:36:24.744Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T19:36:26.246Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Builder Frameworks @ ORG_a731a58c (instance #1)
[2026-01-18T19:36:26.246Z] [BOT] 💾 BEFORE ARCHIVING: 2712 jobs in database
[2026-01-18T19:36:26.248Z] [BOT] ✅ No jobs to archive (all 2712 jobs within 7-day window)
[2026-01-18T19:36:26.264Z] [BOT] 💾 Saved posted_jobs.json: 2712 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T19:36:26.264Z] [BOT] 📍 [ROUTING] "Software Engineer - Level - Space Systems" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-18T19:36:26.264Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T19:36:26.489Z] [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman',
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
[2026-01-18T19:36:26.489Z] [BOT] ❌ Industry post failed: Software Engineer - Level - Space Systems
⚠️  Channel full error count: 1/5
[2026-01-18T19:36:28.104Z] [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman',
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
[2026-01-18T19:36:28.104Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-18T19:36:29.606Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T19:36:29.851Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies',
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
[2026-01-18T19:36:29.851Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Aws
⚠️  Channel full error count: 2/5
[2026-01-18T19:36:31.503Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies',
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
[2026-01-18T19:36:31.503Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T19:36:36.004Z] [BOT] 📌 Posting 3 jobs to #🩺・healthcare-jobs
[2026-01-18T19:36:36.005Z] [BOT] 📍 [ROUTING] "SAP Analyst" @ ORG_6cd9e83c
[2026-01-18T19:36:36.005Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T19:36:36.126Z] [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 SAP Analyst @ Accenture',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-18T19:36:36.126Z] [BOT] ❌ Industry post failed: SAP Analyst
⚠️  Channel full error count: 3/5
[2026-01-18T19:36:37.714Z] [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 SAP Analyst @ Accenture',
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
[2026-01-18T19:36:37.715Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-18T19:36:39.216Z] [BOT] 📍 [ROUTING] "Geospatial Analyst" @ ORG_eae683eb
   Category: HEALTHCARE (matched: "health")
[2026-01-18T19:36:39.216Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T19:36:39.290Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Geospatial Analyst @ Vantor',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-18T19:36:39.290Z] [BOT] ❌ Industry post failed: Geospatial Analyst
⚠️  Channel full error count: 4/5
[2026-01-18T19:36:40.945Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Geospatial Analyst @ Vantor',
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
[2026-01-18T19:36:40.945Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T19:36:42.445Z] [BOT] 📍 [ROUTING] "Associate Game Designer - Technical - Contingent" @ ORG_55030fed
   Category: HEALTHCARE (matched: "medical")
[2026-01-18T19:36:42.445Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T19:36:42.539Z] [BOT ERROR] ❌ Error posting job Associate Game Designer - Technical - Contingent: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Game Designer - Technical - Contingent @ PlayStation',
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
  url: 'https://discord.com/api/v10/channels/CH_5b30ede1/threads'
}
[2026-01-18T19:36:42.539Z] [BOT] ❌ Industry post failed: Associate Game Designer - Technical - Contingent
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🩺・healthcare-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T19:36:42.540Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 13
   Successful: 2
[2026-01-18T19:36:42.540Z] [BOT] Failed: 11
   Skipped: 0
[2026-01-18T19:36:42.540Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-01-18T19:36:42.541Z] [BOT] Top channels:
     1. #💻・remote-usa: 1 posts
     2. #💻・tech-jobs: 1 posts
[2026-01-18T19:36:42.541Z] [BOT] [STATS] Channel stats saved
[2026-01-18T19:36:42.541Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T19:36:42.554Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Quality Engineer - Principal Quality Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Level - Space Systems
- [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Aws
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: SAP Analyst
- [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Geospatial Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Geospatial Analyst
- [BOT ERROR] ❌ Error posting job Geospatial Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Game Designer - Technical - Contingent: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Game Designer - Technical - Contingent
- ❌ CRITICAL: Discord channel #🩺・healthcare-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 2 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*