# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T18:47:43.374Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T18:46:50.030Z] ========================================
[2026-01-13T18:46:50.032Z] Discord Bot Execution Log
[2026-01-13T18:46:50.032Z] Environment: GitHub Actions
[2026-01-13T18:46:50.032Z] Node Version: v20.19.6
[2026-01-13T18:46:50.032Z] ========================================
[2026-01-13T18:46:50.032Z] Environment Variables Check:
[2026-01-13T18:46:50.032Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T18:46:50.032Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.032Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T18:46:50.033Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T18:46:50.033Z] 
Multi-Channel Configuration:
[2026-01-13T18:46:50.033Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.033Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.033Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.033Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.033Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.033Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.033Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.033Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.033Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T18:46:50.033Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T18:46:50.034Z] 
Data Files Check:
[2026-01-13T18:46:50.034Z] .github/data/new_jobs.json: ✅ Exists (10 items, 113444 bytes)
[2026-01-13T18:46:50.038Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 474761 bytes)
[2026-01-13T18:46:50.038Z] 
========================================
[2026-01-13T18:46:50.038Z] Starting Enhanced Discord Bot...
[2026-01-13T18:46:50.038Z] ========================================
[2026-01-13T18:46:50.556Z] [BOT] ✅ Loaded V2 database: 900 jobs
[2026-01-13T18:46:51.532Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T18:46:51.533Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T18:46:51.533Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T18:46:51.642Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Enterprise Marketing Manager at airtable
[2026-01-13T18:46:51.644Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T18:46:51.645Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T18:46:51.645Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T18:46:51.646Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T18:46:51.646Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T18:46:51.650Z] [BOT] 📌 Posting 3 jobs to #📣・marketing-jobs
[2026-01-13T18:46:51.651Z] [BOT] 📍 [ROUTING] "Senior Enterprise Marketing Manager" @ airtable
[2026-01-13T18:46:51.651Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T18:46:51.655Z] [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T18:46:51.817Z] [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Enterprise Marketing Manager @ airtable',
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
[2026-01-13T18:46:51.818Z] [BOT] ❌ Industry post failed: Senior Enterprise Marketing Manager
⚠️  Channel full error count: 1/5
[2026-01-13T18:46:53.546Z] [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Enterprise Marketing Manager @ airtable',
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
[2026-01-13T18:46:53.546Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T18:46:55.045Z] [BOT] 📍 [ROUTING] "Senior Growth Marketing Manager, Builders" @ airtable
[2026-01-13T18:46:55.046Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T18:46:55.267Z] [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Growth Marketing Manager, Builders @ airtable',
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
[2026-01-13T18:46:55.267Z] [BOT] ❌ Industry post failed: Senior Growth Marketing Manager, Builders
⚠️  Channel full error count: 2/5
[2026-01-13T18:46:56.914Z] [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Growth Marketing Manager, Builders @ airtable',
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
[2026-01-13T18:46:56.914Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T18:46:58.416Z] [BOT] 📍 [ROUTING] "GIS Technician" @ NV5 Global
[2026-01-13T18:46:58.416Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T18:46:58.708Z] [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 GIS Technician @ NV5 Global',
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
[2026-01-13T18:46:58.708Z] [BOT] ❌ Industry post failed: GIS Technician
⚠️  Channel full error count: 3/5
[2026-01-13T18:47:00.397Z] [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 GIS Technician @ NV5 Global',
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
[2026-01-13T18:47:00.397Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-13T18:47:04.899Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-13T18:47:04.900Z] [BOT] 📍 [ROUTING] "Technical Sourcer (Contract)" @ airtable
[2026-01-13T18:47:04.900Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-13T18:47:05.084Z] [BOT ERROR] ❌ Error posting job Technical Sourcer (Contract): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Sourcer (Contract) @ airtable',
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
[2026-01-13T18:47:05.084Z] [BOT] ❌ Industry post failed: Technical Sourcer (Contract)
⚠️  Channel full error count: 4/5
[2026-01-13T18:47:06.766Z] [BOT ERROR] ❌ Error posting job Technical Sourcer (Contract): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technical Sourcer (Contract) @ airtable',
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
[2026-01-13T18:47:06.766Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T18:47:11.267Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-13T18:47:11.268Z] [BOT] 📍 [ROUTING] "Web Developer" @ airtable
[2026-01-13T18:47:11.268Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T18:47:11.723Z] [BOT] ✅ Created forum post: 🏢 Web Developer @ airtable in #💻・tech-jobs
[2026-01-13T18:47:11.723Z] [BOT] ✅ Industry: Web Developer @ airtable
[2026-01-13T18:47:13.479Z] [BOT] ✅ Created forum post: 🏢 Web Developer @ airtable in #🌉・san-francisco
[2026-01-13T18:47:13.479Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T18:47:14.980Z] [BOT] 💾 Marked as posted: Web Developer @ airtable (instance #1)
[2026-01-13T18:47:14.980Z] [BOT] 💾 BEFORE ARCHIVING: 901 jobs in database
[2026-01-13T18:47:14.982Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T18:47:14.983Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
[2026-01-13T18:47:14.983Z] [BOT] ✅ Archiving complete: 4 archived, 897 active
[2026-01-13T18:47:14.991Z] [BOT] 💾 Saved posted_jobs.json: 897 active jobs
[2026-01-13T18:47:14.991Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:47:14.991Z] [BOT] 📍 [ROUTING] "Staff Software Engineer - UI and Interactions (Full-Stack)" @ discord
[2026-01-13T18:47:14.991Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T18:47:15.272Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer - UI and Interactions (Full-Stack) @ discord in #💻・tech-jobs
  ✅ Industry: Staff Software Engineer - UI and Interactions (Full-Stack) @ discord
[2026-01-13T18:47:16.940Z] [BOT ERROR] ❌ Error posting job Staff Software Engineer - UI and Interactions (Full-Stack): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Software Engineer - UI and Interactions (Full-Stack) @ discord',
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
[2026-01-13T18:47:16.940Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-13T18:47:18.442Z] [BOT] 💾 Marked as posted: Staff Software Engineer - UI and Interactions (Full-Stack) @ discord (instance #1)
[2026-01-13T18:47:18.442Z] [BOT] 💾 BEFORE ARCHIVING: 898 jobs in database
[2026-01-13T18:47:18.443Z] [BOT] ✅ No jobs to archive (all 898 jobs within 7-day window)
[2026-01-13T18:47:18.450Z] [BOT] 💾 Saved posted_jobs.json: 898 active jobs
[2026-01-13T18:47:18.451Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:47:18.451Z] [BOT] 📍 [ROUTING] "Staff Software Engineer – UI/UX Specialist" @ discord
[2026-01-13T18:47:18.451Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T18:47:18.769Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer – UI/UX Specialist @ discord in #💻・tech-jobs
  ✅ Industry: Staff Software Engineer – UI/UX Specialist @ discord
[2026-01-13T18:47:20.957Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer – UI/UX Specialist @ discord in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T18:47:22.458Z] [BOT] 💾 Marked as posted: Staff Software Engineer – UI/UX Specialist @ discord (instance #1)
[2026-01-13T18:47:22.458Z] [BOT] 💾 BEFORE ARCHIVING: 899 jobs in database
[2026-01-13T18:47:22.459Z] [BOT] ✅ No jobs to archive (all 899 jobs within 7-day window)
[2026-01-13T18:47:22.467Z] [BOT] 💾 Saved posted_jobs.json: 899 active jobs
[2026-01-13T18:47:22.467Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:47:22.467Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T18:47:22.760Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2026-01-13T18:47:24.583Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-13T18:47:26.085Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-13T18:47:26.085Z] [BOT] 💾 BEFORE ARCHIVING: 900 jobs in database
[2026-01-13T18:47:26.086Z] [BOT] ✅ No jobs to archive (all 900 jobs within 7-day window)
[2026-01-13T18:47:26.094Z] [BOT] 💾 Saved posted_jobs.json: 900 active jobs
[2026-01-13T18:47:26.094Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:47:26.094Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer 1 - Mobile" @ ORG_3cfbdbc3
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T18:47:26.692Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3
[2026-01-13T18:47:28.424Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-13T18:47:29.926Z] [BOT] 💾 Marked as posted: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 (instance #1)
[2026-01-13T18:47:29.926Z] [BOT] 💾 BEFORE ARCHIVING: 901 jobs in database
[2026-01-13T18:47:29.927Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-13T18:47:29.934Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
[2026-01-13T18:47:29.934Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:47:32.934Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-13T18:47:32.934Z] [BOT] 📍 [ROUTING] "University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
[2026-01-13T18:47:32.934Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T18:47:33.303Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-13T18:47:33.303Z] [BOT] ✅ Industry: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-13T18:47:35.082Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2026-01-13T18:47:35.082Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T18:47:36.584Z] [BOT] 💾 Marked as posted: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-13T18:47:36.584Z] [BOT] 💾 BEFORE ARCHIVING: 902 jobs in database
[2026-01-13T18:47:36.585Z] [BOT] ✅ No jobs to archive (all 902 jobs within 7-day window)
[2026-01-13T18:47:36.593Z] [BOT] 💾 Saved posted_jobs.json: 902 active jobs
[2026-01-13T18:47:36.593Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T18:47:39.593Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-13T18:47:39.594Z] [BOT] ⏭️  Skipping duplicate: JID_82ab6fe8 (posted within 7 days)
[2026-01-13T18:47:39.595Z] [BOT] ⏭️  Skipping duplicate: JID_8e8f72b7 (posted within 7 days)
⏭️  Skipping duplicate: JID_0594571b (posted within 7 days)
⏭️  Skipping duplicate: JID_c42ff2c9 (posted within 7 days)
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160648 (posted within 7 days)
⏭️  Skipping duplicate: JID_4ac515f0 (posted within 7 days)
[2026-01-13T18:47:39.714Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-13T18:47:39.874Z] [BOT] ✅ Saved pending queue: 2726 total (2706 pending, 14 enriched, 6 posted)
[2026-01-13T18:47:39.874Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T18:47:39.926Z] [BOT] 📂 Loaded 3045 existing routing entries
[2026-01-13T18:47:39.982Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T18:47:39.982Z] [BOT] Total entries: 3055
   Timestamp: 2026-01-13T18:47:39.970Z
[2026-01-13T18:47:39.982Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T18:47:39.983Z] [BOT] Total attempts: 20
   Successful: 11
   Failed: 9
   Skipped: 0
[2026-01-13T18:47:39.983Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 6
   Top channels:
[2026-01-13T18:47:39.983Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🌉・san-francisco: 2 posts
[2026-01-13T18:47:39.983Z] [BOT] 3. #💻・remote-usa: 1 posts
     4. #🌄・mountain-view: 1 posts
     5. #🌧️・seattle: 1 posts
[2026-01-13T18:47:39.983Z] [BOT] [STATS] Channel stats saved
[2026-01-13T18:47:42.007Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Enterprise Marketing Manager
- [BOT ERROR] ❌ Error posting job Senior Enterprise Marketing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Growth Marketing Manager, Builders
- [BOT ERROR] ❌ Error posting job Senior Growth Marketing Manager, Builders: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: GIS Technician
- [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Technical Sourcer (Contract): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Technical Sourcer (Contract)
- [BOT ERROR] ❌ Error posting job Technical Sourcer (Contract): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Staff Software Engineer - UI and Interactions (Full-Stack): DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*