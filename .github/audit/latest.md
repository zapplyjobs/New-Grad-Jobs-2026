# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T05:59:49.076Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T05:59:23.339Z] ========================================
[2026-01-19T05:59:23.341Z] Discord Bot Execution Log
[2026-01-19T05:59:23.341Z] Environment: GitHub Actions
[2026-01-19T05:59:23.341Z] Node Version: v20.19.6
[2026-01-19T05:59:23.341Z] ========================================
[2026-01-19T05:59:23.341Z] Environment Variables Check:
[2026-01-19T05:59:23.341Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T05:59:23.341Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.341Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T05:59:23.341Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T05:59:23.341Z] 
Multi-Channel Configuration:
[2026-01-19T05:59:23.342Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.342Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.342Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.342Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.342Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.342Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.342Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.342Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.342Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T05:59:23.342Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T05:59:23.342Z] 
Data Files Check:
[2026-01-19T05:59:23.343Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70872 bytes)
[2026-01-19T05:59:23.353Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1558260 bytes)
[2026-01-19T05:59:23.353Z] 
========================================
[2026-01-19T05:59:23.353Z] Starting Enhanced Discord Bot...
[2026-01-19T05:59:23.353Z] ========================================
[2026-01-19T05:59:23.897Z] [BOT] ✅ Loaded V2 database: 2867 jobs
[2026-01-19T05:59:24.746Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T05:59:24.747Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T05:59:24.747Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T05:59:24.867Z] [BOT] ✅ Loaded pending queue: 2833 total (2813 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 - Aws - Node at The Travelers Companies
[2026-01-19T05:59:24.871Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T05:59:24.872Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T05:59:24.872Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T05:59:24.873Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T05:59:24.873Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T05:59:24.877Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-19T05:59:24.878Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws - Node" @ ORG_b344d80e Travelers Companies
[2026-01-19T05:59:24.878Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:59:24.883Z] [BOT ERROR] (node:2623) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T05:59:25.125Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-19T05:59:25.125Z] [BOT] ✅ Industry: Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies
[2026-01-19T05:59:27.068Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T05:59:28.569Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-19T05:59:28.570Z] [BOT] 💾 BEFORE ARCHIVING: 2868 jobs in database
[2026-01-19T05:59:28.572Z] [BOT] ✅ No jobs to archive (all 2868 jobs within 7-day window)
[2026-01-19T05:59:28.593Z] [BOT] 💾 Saved posted_jobs.json: 2868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:59:28.594Z] [BOT] 📍 [ROUTING] "Data Processing Specialist - Entry" @ ORG_3d434656
[2026-01-19T05:59:28.594Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:59:28.723Z] [BOT ERROR] ❌ Error posting job Data Processing Specialist - Entry: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Processing Specialist - Entry @ Equifax',
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
[2026-01-19T05:59:28.723Z] [BOT] ❌ Industry post failed: Data Processing Specialist - Entry
⚠️  Channel full error count: 1/5
[2026-01-19T05:59:30.343Z] [BOT ERROR] ❌ Error posting job Data Processing Specialist - Entry: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Processing Specialist - Entry @ Equifax',
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
[2026-01-19T05:59:30.344Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T05:59:31.844Z] [BOT] 📍 [ROUTING] "Engineering Associate - Application Development" @ ORG_332e04b7 Fargo
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:59:31.975Z] [BOT ERROR] ❌ Error posting job Engineering Associate - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Associate - Application Development @ ORG_332e04b7 Fargo',
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
[2026-01-19T05:59:31.975Z] [BOT] ❌ Industry post failed: Engineering Associate - Application Development
⚠️  Channel full error count: 2/5
[2026-01-19T05:59:33.606Z] [BOT ERROR] ❌ Error posting job Engineering Associate - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineering Associate - Application Development @ ORG_332e04b7 Fargo',
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
[2026-01-19T05:59:33.606Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-19T05:59:35.107Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Active TS/SCI with Poly Required" @ ORG_c910d474 Dynamics Information Technology
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:59:35.229Z] [BOT ERROR] ❌ Error posting job Junior Software Developer - Active TS/SCI with Poly Required: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software Developer - Active TS/SCI with Poly Required @ ORG_c910d474 Dynamics Information Techn',
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
[2026-01-19T05:59:35.229Z] [BOT] ❌ Industry post failed: Junior Software Developer - Active TS/SCI with Poly Required
⚠️  Channel full error count: 3/5
[2026-01-19T05:59:36.875Z] [BOT ERROR] ❌ Error posting job Junior Software Developer - Active TS/SCI with Poly Required: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Software Developer - Active TS/SCI with Poly Required @ ORG_c910d474 Dynamics Information Techn',
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
[2026-01-19T05:59:36.875Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T05:59:41.377Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T05:59:41.378Z] [BOT] 📍 [ROUTING] "Advanced Practice Provider - Aprn or PA - Medical Informatics" @ ORG_0f4848d3ing Health
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T05:59:41.528Z] [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health',
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
[2026-01-19T05:59:41.528Z] [BOT] ❌ Industry post failed: Advanced Practice Provider - Aprn or PA - Medical Informatics
⚠️  Channel full error count: 4/5
[2026-01-19T05:59:43.190Z] [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health',
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
[2026-01-19T05:59:43.190Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T05:59:47.692Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T05:59:47.692Z] [BOT] 📍 [ROUTING] "Bilingual Material Handling Automation Specialist - Korean & English" @ ORG_b870b780 Electronics
[2026-01-19T05:59:47.692Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T05:59:47.831Z] [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Bilingual Material Handling Automation Specialist - Korean & English @ ORG_b870b780 Electronics',
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
[2026-01-19T05:59:47.832Z] [BOT] ❌ Industry post failed: Bilingual Material Handling Automation Specialist - Korean & English
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📣・marketing-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T05:59:47.833Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 11
[2026-01-19T05:59:47.833Z] [BOT] Successful: 2
   Failed: 9
   Skipped: 0
[2026-01-19T05:59:47.833Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2026-01-19T05:59:47.833Z] [BOT] Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-19T05:59:47.833Z] [BOT] [STATS] Channel stats saved
[2026-01-19T05:59:47.833Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T05:59:47.847Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2623) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Data Processing Specialist - Entry: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Processing Specialist - Entry
- [BOT ERROR] ❌ Error posting job Data Processing Specialist - Entry: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineering Associate - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineering Associate - Application Development
- [BOT ERROR] ❌ Error posting job Engineering Associate - Application Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Junior Software Developer - Active TS/SCI with Poly Required: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Junior Software Developer - Active TS/SCI with Poly Required
- [BOT ERROR] ❌ Error posting job Junior Software Developer - Active TS/SCI with Poly Required: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Advanced Practice Provider - Aprn or PA - Medical Informatics
- [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Bilingual Material Handling Automation Specialist - Korean & English
- ❌ CRITICAL: Discord channel #📣・marketing-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*