# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T06:29:35.827Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T06:28:39.415Z] ========================================
[2026-01-19T06:28:39.417Z] Discord Bot Execution Log
[2026-01-19T06:28:39.417Z] Environment: GitHub Actions
[2026-01-19T06:28:39.417Z] Node Version: v20.19.6
[2026-01-19T06:28:39.417Z] ========================================
[2026-01-19T06:28:39.417Z] Environment Variables Check:
[2026-01-19T06:28:39.417Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T06:28:39.418Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.418Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T06:28:39.418Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T06:28:39.418Z] 
Multi-Channel Configuration:
[2026-01-19T06:28:39.418Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.418Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.418Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.418Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.418Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.418Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.418Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.419Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.419Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T06:28:39.419Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T06:28:39.419Z] 
Data Files Check:
[2026-01-19T06:28:39.420Z] .github/data/new_jobs.json: ✅ Exists (10 items, 68296 bytes)
[2026-01-19T06:28:39.430Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1558905 bytes)
[2026-01-19T06:28:39.430Z] 
========================================
[2026-01-19T06:28:39.430Z] Starting Enhanced Discord Bot...
[2026-01-19T06:28:39.430Z] ========================================
[2026-01-19T06:28:39.951Z] [BOT] ✅ Loaded V2 database: 2868 jobs
[2026-01-19T06:28:40.533Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T06:28:40.534Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T06:28:40.534Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T06:28:40.667Z] [BOT] ✅ Loaded pending queue: 2833 total (2813 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Advanced Practice Provider - Aprn or PA - Medical Informatics at Kettering Health
[2026-01-19T06:28:40.670Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T06:28:40.670Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T06:28:40.670Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T06:28:40.671Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T06:28:40.671Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T06:28:40.676Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T06:28:40.676Z] [BOT] 📍 [ROUTING] "Advanced Practice Provider - Aprn or PA - Medical Informatics" @ ORG_0f4848d3ing Health
[2026-01-19T06:28:40.676Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T06:28:40.694Z] [BOT ERROR] (node:2444) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T06:28:40.761Z] [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T06:28:40.761Z] [BOT] ❌ Industry post failed: Advanced Practice Provider - Aprn or PA - Medical Informatics
⚠️  Channel full error count: 1/5
[2026-01-19T06:28:42.427Z] [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T06:28:42.427Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T06:28:46.929Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T06:28:46.930Z] [BOT] 📍 [ROUTING] "Bilingual Material Handling Automation Specialist - Korean & English" @ ORG_b870b780 Electronics
   Category: MARKETING (matched: "brand")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T06:28:47.128Z] [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T06:28:47.128Z] [BOT] ❌ Industry post failed: Bilingual Material Handling Automation Specialist - Korean & English
⚠️  Channel full error count: 2/5
[2026-01-19T06:28:50.555Z] [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_7bf909b6/threads'
}
[2026-01-19T06:28:50.556Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T06:28:55.057Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-19T06:28:55.058Z] [BOT] 📍 [ROUTING] "Database Analyst 1" @ ORG_66279f04 National Information Services
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T06:28:55.058Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T06:28:55.184Z] [BOT ERROR] ❌ Error posting job Database Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Database Analyst 1 @ ORG_66279f04 National Information Services',
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
[2026-01-19T06:28:55.184Z] [BOT] ❌ Industry post failed: Database Analyst 1
⚠️  Channel full error count: 3/5
[2026-01-19T06:28:56.772Z] [BOT ERROR] ❌ Error posting job Database Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Database Analyst 1 @ ORG_66279f04 National Information Services',
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
[2026-01-19T06:28:56.773Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T06:28:58.274Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_0c79a9c2 Materials
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-19T06:28:58.274Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T06:28:58.423Z] [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist @ ORG_0c79a9c2 Materials',
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
[2026-01-19T06:28:58.424Z] [BOT] ❌ Industry post failed: Data Scientist
⚠️  Channel full error count: 4/5
[2026-01-19T06:29:00.062Z] [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Scientist @ ORG_0c79a9c2 Materials',
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
[2026-01-19T06:29:00.063Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T06:29:04.564Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T06:29:04.564Z] [BOT] 📍 [ROUTING] "Software Engineer - AI & Full Stack Development" @ ORG_fb8c4aa0
[2026-01-19T06:29:04.564Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T06:29:05.055Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0
[2026-01-19T06:29:06.638Z] [BOT ERROR] ❌ Error posting job Software Engineer - AI & Full Stack Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - AI & Full Stack Development @ KLA',
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
[2026-01-19T06:29:06.639Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T06:29:08.140Z] [BOT] 💾 Marked as posted: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0 (instance #1)
[2026-01-19T06:29:08.140Z] [BOT] 💾 BEFORE ARCHIVING: 2869 jobs in database
[2026-01-19T06:29:08.143Z] [BOT] ✅ No jobs to archive (all 2869 jobs within 7-day window)
[2026-01-19T06:29:08.169Z] [BOT] 💾 Saved posted_jobs.json: 2869 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Corporate Counsel, M&A" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T06:29:08.343Z] [BOT] ✅ Created forum post: 🏢 Corporate Counsel, M&A @ anthropic in #🤖・ai-jobs
[2026-01-19T06:29:08.343Z] [BOT] ✅ Industry: Corporate Counsel, M&A @ anthropic
[2026-01-19T06:29:10.000Z] [BOT] ✅ Created forum post: 🏢 Corporate Counsel, M&A @ anthropic in #🌉・san-francisco
[2026-01-19T06:29:10.001Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T06:29:11.501Z] [BOT] 💾 Marked as posted: Corporate Counsel, M&A @ anthropic (instance #1)
[2026-01-19T06:29:11.502Z] [BOT] 💾 BEFORE ARCHIVING: 2870 jobs in database
[2026-01-19T06:29:11.503Z] [BOT] ✅ No jobs to archive (all 2870 jobs within 7-day window)
[2026-01-19T06:29:11.522Z] [BOT] 💾 Saved posted_jobs.json: 2870 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T06:29:14.523Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-19T06:29:14.523Z] [BOT] 📍 [ROUTING] "Data Processing Specialist - Entry" @ ORG_3d434656
   Category: TECH (matched: "data")
[2026-01-19T06:29:14.523Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T06:29:14.722Z] [BOT] ✅ Created forum post: 🏢 Data Processing Specialist - Entry @ ORG_3d434656 in #💻・tech-jobs
[2026-01-19T06:29:14.722Z] [BOT] ✅ Industry: Data Processing Specialist - Entry @ ORG_3d434656
[2026-01-19T06:29:16.326Z] [BOT ERROR] ❌ Error posting job Data Processing Specialist - Entry: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-19T06:29:16.326Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T06:29:17.827Z] [BOT] 💾 Marked as posted: Data Processing Specialist - Entry @ ORG_3d434656 (instance #1)
[2026-01-19T06:29:17.827Z] [BOT] 💾 BEFORE ARCHIVING: 2871 jobs in database
[2026-01-19T06:29:17.829Z] [BOT] ✅ No jobs to archive (all 2871 jobs within 7-day window)
[2026-01-19T06:29:17.848Z] [BOT] 💾 Saved posted_jobs.json: 2871 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T06:29:17.849Z] [BOT] 📍 [ROUTING] "Engineering Associate - Application Development" @ ORG_332e04b7 Fargo
[2026-01-19T06:29:17.849Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T06:29:18.004Z] [BOT] ✅ Created forum post: 🏢 Engineering Associate - Application Development @ ORG_332e04b7 Fargo in #💻・tech-jobs
  ✅ Industry: Engineering Associate - Application Development @ ORG_332e04b7 Fargo
[2026-01-19T06:29:19.806Z] [BOT] ✅ Created forum post: 🏢 Engineering Associate - Application Development @ ORG_332e04b7 Fargo in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-19T06:29:21.307Z] [BOT] 💾 Marked as posted: Engineering Associate - Application Development @ ORG_332e04b7 Fargo (instance #1)
[2026-01-19T06:29:21.307Z] [BOT] 💾 BEFORE ARCHIVING: 2872 jobs in database
[2026-01-19T06:29:21.310Z] [BOT] ✅ No jobs to archive (all 2872 jobs within 7-day window)
[2026-01-19T06:29:21.328Z] [BOT] 💾 Saved posted_jobs.json: 2872 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T06:29:21.328Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Active TS/SCI with Poly Required" @ ORG_c910d474 Dynamics Information Technology
[2026-01-19T06:29:21.328Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T06:29:23.215Z] [BOT] ✅ Created forum post: 🏢 Junior Software Developer - Active TS/SCI with Poly Required @ ORG_c910d474 Dynamics Information Techn in #💻・tech-jobs
  ✅ Industry: Junior Software Developer - Active TS/SCI with Poly Required @ ORG_c910d474 Dynamics Information Technology
[2026-01-19T06:29:24.926Z] [BOT] ✅ Created forum post: 🏢 Junior Software Developer - Active TS/SCI with Poly Required @ ORG_c910d474 Dynamics Information Techn in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T06:29:26.427Z] [BOT] 💾 Marked as posted: Junior Software Developer - Active TS/SCI with Poly Required @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-19T06:29:26.428Z] [BOT] 💾 BEFORE ARCHIVING: 2873 jobs in database
[2026-01-19T06:29:26.429Z] [BOT] ✅ No jobs to archive (all 2873 jobs within 7-day window)
[2026-01-19T06:29:26.447Z] [BOT] 💾 Saved posted_jobs.json: 2873 active jobs
[2026-01-19T06:29:26.447Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T06:29:26.447Z] [BOT] 📍 [ROUTING] "Newgrad Generalist Engineer" @ ORG_37e12d0f
[2026-01-19T06:29:26.448Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T06:29:26.605Z] [BOT] ✅ Created forum post: 🏢 Newgrad Generalist Engineer @ ORG_37e12d0f in #💻・tech-jobs
[2026-01-19T06:29:26.605Z] [BOT] ✅ Industry: Newgrad Generalist Engineer @ ORG_37e12d0f
[2026-01-19T06:29:28.214Z] [BOT ERROR] ❌ Error posting job Newgrad Generalist Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Newgrad Generalist Engineer @ Pylon',
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
[2026-01-19T06:29:28.214Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-19T06:29:29.715Z] [BOT] 💾 Marked as posted: Newgrad Generalist Engineer @ ORG_37e12d0f (instance #1)
[2026-01-19T06:29:29.715Z] [BOT] 💾 BEFORE ARCHIVING: 2874 jobs in database
[2026-01-19T06:29:29.717Z] [BOT] ✅ No jobs to archive (all 2874 jobs within 7-day window)
[2026-01-19T06:29:29.733Z] [BOT] 💾 Saved posted_jobs.json: 2874 active jobs
[2026-01-19T06:29:29.733Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T06:29:32.734Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-19T06:29:32.735Z] [BOT] ⏭️  Skipping duplicate: JID_72c29929-development_2531265-3 (posted within 7 days)
[2026-01-19T06:29:32.735Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
[2026-01-19T06:29:32.735Z] [BOT] ⏭️  Skipping duplicate: JID_7b17b840-entry_j00173791 (posted within 7 days)
[2026-01-19T06:29:32.736Z] [BOT] ⏭️  Skipping duplicate: JID_05204fe0-modernization_r-515575 (posted within 7 days)
[2026-01-19T06:29:32.736Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_5c876df6-_rq212931 (posted within 7 days)
[2026-01-19T06:29:32.736Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
[2026-01-19T06:29:32.852Z] [BOT] ✅ Loaded pending queue: 2833 total (2813 pending, 20 enriched, 0 posted)
[2026-01-19T06:29:33.021Z] [BOT] ✅ Saved pending queue: 2833 total (2813 pending, 14 enriched, 6 posted)
[2026-01-19T06:29:33.021Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T06:29:33.081Z] [BOT] 📂 Loaded 5015 existing routing entries
[2026-01-19T06:29:33.153Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-19T06:29:33.153Z] [BOT] Total entries: 5025
   Timestamp: 2026-01-19T06:29:33.131Z
[2026-01-19T06:29:33.154Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 20
   Successful: 9
   Failed: 11
   Skipped: 0
[2026-01-19T06:29:33.154Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 5
   Top channels:
[2026-01-19T06:29:33.154Z] [BOT] 1. #💻・tech-jobs: 4 posts
[2026-01-19T06:29:33.154Z] [BOT] 2. #🤖・ai-jobs: 2 posts
     3. #🌉・san-francisco: 1 posts
     4. #🤠・austin: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-19T06:29:33.155Z] [BOT] [STATS] Channel stats saved
[2026-01-19T06:29:35.179Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2444) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Advanced Practice Provider - Aprn or PA - Medical Informatics
- [BOT ERROR] ❌ Error posting job Advanced Practice Provider - Aprn or PA - Medical Informatics: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Bilingual Material Handling Automation Specialist - Korean & English
- [BOT ERROR] ❌ Error posting job Bilingual Material Handling Automation Specialist - Korean & English: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Database Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Database Analyst 1
- [BOT ERROR] ❌ Error posting job Database Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Scientist
- [BOT ERROR] ❌ Error posting job Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - AI & Full Stack Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Processing Specialist - Entry: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Newgrad Generalist Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*