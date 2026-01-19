# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T19:41:07.139Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T19:40:28.374Z] ========================================
[2026-01-19T19:40:28.376Z] Discord Bot Execution Log
[2026-01-19T19:40:28.376Z] Environment: GitHub Actions
[2026-01-19T19:40:28.376Z] Node Version: v20.19.6
[2026-01-19T19:40:28.376Z] ========================================
[2026-01-19T19:40:28.376Z] Environment Variables Check:
[2026-01-19T19:40:28.376Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T19:40:28.376Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.376Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T19:40:28.377Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T19:40:28.377Z] 
Multi-Channel Configuration:
[2026-01-19T19:40:28.377Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.377Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.377Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.377Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.377Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.377Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.377Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.377Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.377Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T19:40:28.377Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T19:40:28.378Z] 
Data Files Check:
[2026-01-19T19:40:28.378Z] .github/data/new_jobs.json: ✅ Exists (10 items, 73548 bytes)
[2026-01-19T19:40:28.389Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1598367 bytes)
[2026-01-19T19:40:28.389Z] 
========================================
[2026-01-19T19:40:28.389Z] Starting Enhanced Discord Bot...
[2026-01-19T19:40:28.389Z] ========================================
[2026-01-19T19:40:28.951Z] [BOT] ✅ Loaded V2 database: 2933 jobs
[2026-01-19T19:40:29.644Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T19:40:29.644Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T19:40:29.644Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T19:40:29.761Z] [BOT] ✅ Loaded pending queue: 2822 total (2802 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Content Technologist at discord
[2026-01-19T19:40:29.766Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T19:40:29.766Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T19:40:29.766Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T19:40:29.767Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T19:40:29.767Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T19:40:29.772Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-19T19:40:29.772Z] [BOT] 📍 [ROUTING] "Content Technologist" @ discord
[2026-01-19T19:40:29.772Z] [BOT] Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T19:40:29.777Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T19:40:30.399Z] [BOT] ✅ Created forum post: 🏢 Content Technologist @ discord in #📣・marketing-jobs
  ✅ Industry: Content Technologist @ discord
[2026-01-19T19:40:32.294Z] [BOT] ✅ Created forum post: 🏢 Content Technologist @ discord in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T19:40:33.795Z] [BOT] 💾 Marked as posted: Content Technologist @ discord (instance #1)
[2026-01-19T19:40:33.795Z] [BOT] 💾 BEFORE ARCHIVING: 2934 jobs in database
[2026-01-19T19:40:33.798Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T19:40:33.803Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-19T19:40:33.803Z] [BOT] ✅ Archiving complete: 10 archived, 2924 active
[2026-01-19T19:40:33.827Z] [BOT] 💾 Saved posted_jobs.json: 2924 active jobs
[2026-01-19T19:40:33.827Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Technician" @ NV5 Global
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T19:40:34.135Z] [BOT] ✅ Created forum post: 🏢 Technician @ NV5 Global in #📣・marketing-jobs
  ✅ Industry: Technician @ NV5 Global
[2026-01-19T19:40:35.859Z] [BOT ERROR] ❌ Error posting job Technician: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Technician @ NV5 Global',
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
[2026-01-19T19:40:35.860Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T19:40:37.361Z] [BOT] 💾 Marked as posted: Technician @ NV5 Global (instance #1)
[2026-01-19T19:40:37.361Z] [BOT] 💾 BEFORE ARCHIVING: 2925 jobs in database
[2026-01-19T19:40:37.363Z] [BOT] ✅ No jobs to archive (all 2925 jobs within 7-day window)
[2026-01-19T19:40:37.379Z] [BOT] 💾 Saved posted_jobs.json: 2925 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:40:40.381Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T19:40:40.382Z] [BOT] 📍 [ROUTING] "Applied AI Engineer, Startups" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-19T19:40:40.382Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T19:40:40.598Z] [BOT] ✅ Created forum post: 🏢 Applied AI Engineer, Startups @ anthropic in #🤖・ai-jobs
  ✅ Industry: Applied AI Engineer, Startups @ anthropic
[2026-01-19T19:40:42.386Z] [BOT] ✅ Created forum post: 🏢 Applied AI Engineer, Startups @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T19:40:43.888Z] [BOT] 💾 Marked as posted: Applied AI Engineer, Startups @ anthropic (instance #1)
[2026-01-19T19:40:43.888Z] [BOT] 💾 BEFORE ARCHIVING: 2926 jobs in database
[2026-01-19T19:40:43.891Z] [BOT] ✅ No jobs to archive (all 2926 jobs within 7-day window)
[2026-01-19T19:40:43.912Z] [BOT] 💾 Saved posted_jobs.json: 2926 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T19:40:43.913Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Interdisciplinary Data Science" @ ORG_9d38443e of Nevada Las Vegas (UNLV)
[2026-01-19T19:40:43.913Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T19:40:44.130Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Interdisciplinary Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV)',
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
[2026-01-19T19:40:44.131Z] [BOT] ❌ Industry post failed: Postdoctoral Scholar - Interdisciplinary Data Science
⚠️  Channel full error count: 1/5
[2026-01-19T19:40:45.767Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Interdisciplinary Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV)',
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
[2026-01-19T19:40:45.767Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T19:40:50.268Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T19:40:50.268Z] [BOT] 📍 [ROUTING] "GIS Technician" @ ORG_d41a2092
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T19:40:50.407Z] [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 GIS Technician @ ERM',
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
[2026-01-19T19:40:50.407Z] [BOT] ❌ Industry post failed: GIS Technician
⚠️  Channel full error count: 2/5
[2026-01-19T19:40:52.052Z] [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 GIS Technician @ ERM',
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
[2026-01-19T19:40:52.053Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T19:40:56.555Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T19:40:56.555Z] [BOT] 📍 [ROUTING] "DevSecOps Software Engineer" @ ORG_b344d80e Boeing Company
[2026-01-19T19:40:56.555Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T19:40:56.716Z] [BOT ERROR] ❌ Error posting job DevSecOps Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 DevSecOps Software Engineer @ ORG_b344d80e Boeing Company',
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
  url: 'https://discord.com/api/v10/channels/CH_0d209940/threads'
}
[2026-01-19T19:40:56.716Z] [BOT] ❌ Industry post failed: DevSecOps Software Engineer
⚠️  Channel full error count: 3/5
[2026-01-19T19:40:58.365Z] [BOT ERROR] ❌ Error posting job DevSecOps Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 DevSecOps Software Engineer @ ORG_b344d80e Boeing Company',
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
[2026-01-19T19:40:58.365Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-19T19:41:02.866Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-19T19:41:02.867Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Python - Remote United States" @ ORG_8b92e640 Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:41:02.997Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Python - Remote United States @ ORG_8b92e640 Systems',
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
[2026-01-19T19:41:02.998Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Python - Remote United States
⚠️  Channel full error count: 4/5
[2026-01-19T19:41:04.641Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Python - Remote United States @ ORG_8b92e640 Systems',
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
[2026-01-19T19:41:04.641Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T19:41:06.142Z] [BOT] 📍 [ROUTING] "Database Engineer 1" @ ORG_26f6f1be
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T19:41:06.274Z] [BOT ERROR] ❌ Error posting job Database Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Database Engineer 1 @ Markon',
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
[2026-01-19T19:41:06.274Z] [BOT] ❌ Industry post failed: Database Engineer 1
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T19:41:06.275Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 15
[2026-01-19T19:41:06.275Z] [BOT] Successful: 5
   Failed: 10
   Skipped: 0
[2026-01-19T19:41:06.275Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T19:41:06.275Z] [BOT] Last cleanup: Never
   Total posts: 5
   Channels used: 4
   Top channels:
[2026-01-19T19:41:06.275Z] [BOT] 1. #📣・marketing-jobs: 2 posts
     2. #💻・remote-usa: 1 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🌉・san-francisco: 1 posts
[2026-01-19T19:41:06.276Z] [BOT] [STATS] Channel stats saved
[2026-01-19T19:41:06.276Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T19:41:06.290Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Interdisciplinary Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Scholar - Interdisciplinary Data Science
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Interdisciplinary Data Science: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: GIS Technician
- [BOT ERROR] ❌ Error posting job GIS Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job DevSecOps Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: DevSecOps Software Engineer
- [BOT ERROR] ❌ Error posting job DevSecOps Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Python - Remote United States
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Python - Remote United States: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Database Engineer 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Database Engineer 1
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*