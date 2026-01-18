# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T21:53:19.800Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T21:52:42.335Z] ========================================
[2026-01-18T21:52:42.337Z] Discord Bot Execution Log
[2026-01-18T21:52:42.337Z] Environment: GitHub Actions
[2026-01-18T21:52:42.337Z] Node Version: v20.19.6
[2026-01-18T21:52:42.337Z] ========================================
[2026-01-18T21:52:42.337Z] Environment Variables Check:
[2026-01-18T21:52:42.337Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T21:52:42.337Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.337Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T21:52:42.337Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T21:52:42.338Z] 
Multi-Channel Configuration:
[2026-01-18T21:52:42.338Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.338Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.338Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.338Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.338Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.338Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.338Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.338Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.338Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T21:52:42.338Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T21:52:42.338Z] 
Data Files Check:
[2026-01-18T21:52:42.339Z] .github/data/new_jobs.json: ✅ Exists (10 items, 43704 bytes)
[2026-01-18T21:52:42.349Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1495268 bytes)
[2026-01-18T21:52:42.349Z] 
========================================
[2026-01-18T21:52:42.349Z] Starting Enhanced Discord Bot...
[2026-01-18T21:52:42.349Z] ========================================
[2026-01-18T21:52:42.873Z] [BOT] ✅ Loaded V2 database: 2754 jobs
[2026-01-18T21:52:43.991Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T21:52:43.991Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T21:52:43.991Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T21:52:44.113Z] [BOT] ✅ Loaded pending queue: 2838 total (2818 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Research Scientist - Hsu & Konermann Labs at Arc Institute
[2026-01-18T21:52:44.118Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T21:52:44.119Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-18T21:52:44.212Z] [BOT] ✅ Loaded pending queue: 2838 total (2818 pending, 20 enriched, 0 posted)
[2026-01-18T21:52:44.383Z] [BOT] ✅ Saved pending queue: 2837 total (2818 pending, 19 enriched, 0 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-18T21:52:44.383Z] [BOT] 📋 After blacklist filter: 19 jobs (1 blacklisted)
📋 After data quality filter: 19 jobs (0 invalid)
[2026-01-18T21:52:44.384Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-18T21:52:44.384Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T21:52:44.388Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-18T21:52:44.389Z] [BOT] 📍 [ROUTING] "Machine Learning Research Scientist - Hsu & Konermann Labs" @ ORG_7291b1b6 Institute
[2026-01-18T21:52:44.389Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T21:52:44.406Z] [BOT ERROR] (node:2897) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T21:52:44.509Z] [BOT ERROR] ❌ Error posting job Machine Learning Research Scientist - Hsu & Konermann Labs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute',
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
[2026-01-18T21:52:44.509Z] [BOT] ❌ Industry post failed: Machine Learning Research Scientist - Hsu & Konermann Labs
⚠️  Channel full error count: 1/5
[2026-01-18T21:52:46.216Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute in #🌉・san-francisco
[2026-01-18T21:52:46.216Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T21:52:47.717Z] [BOT] 💾 Marked as posted: Machine Learning Research Scientist - Hsu & Konermann Labs @ ORG_7291b1b6 Institute (instance #1)
[2026-01-18T21:52:47.717Z] [BOT] 💾 BEFORE ARCHIVING: 2755 jobs in database
[2026-01-18T21:52:47.719Z] [BOT] ✅ No jobs to archive (all 2755 jobs within 7-day window)
[2026-01-18T21:52:47.739Z] [BOT] 💾 Saved posted_jobs.json: 2755 active jobs
[2026-01-18T21:52:47.740Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T21:52:50.740Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T21:52:50.741Z] [BOT] 📍 [ROUTING] "Business Data Analyst" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T21:52:51.021Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_9d38443e of Southern California in #📈・JID_fb739488
[2026-01-18T21:52:51.022Z] [BOT] ✅ Industry: Business Data Analyst @ ORG_9d38443e of Southern California
[2026-01-18T21:52:52.524Z] [BOT] 💾 Marked as posted: Business Data Analyst @ ORG_9d38443e of Southern California (instance #1)
[2026-01-18T21:52:52.524Z] [BOT] 💾 BEFORE ARCHIVING: 2756 jobs in database
[2026-01-18T21:52:52.526Z] [BOT] ✅ No jobs to archive (all 2756 jobs within 7-day window)
[2026-01-18T21:52:52.545Z] [BOT] 💾 Saved posted_jobs.json: 2756 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:52:52.546Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Product Analytics" @ ORG_1bb6fcfb
[2026-01-18T21:52:52.546Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T21:52:52.702Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Product Analytics @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist Graduate - Product Analytics @ ORG_1bb6fcfb
[2026-01-18T21:52:54.638Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Product Analytics @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T21:52:56.139Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Product Analytics @ ORG_1bb6fcfb (instance #1)
[2026-01-18T21:52:56.139Z] [BOT] 💾 BEFORE ARCHIVING: 2757 jobs in database
[2026-01-18T21:52:56.141Z] [BOT] ✅ No jobs to archive (all 2757 jobs within 7-day window)
[2026-01-18T21:52:56.160Z] [BOT] 💾 Saved posted_jobs.json: 2757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:52:59.160Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-18T21:52:59.161Z] [BOT] 📍 [ROUTING] "Logistics Coordinator" @ ORG_9e6cd9ac Logistics Services
   Category: SUPPLY-CHAIN (matched: "supply-chain")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-18T21:52:59.381Z] [BOT] ✅ Created forum post: 🏢 Logistics Coordinator @ ORG_9e6cd9ac Logistics Services in #🏗️・JID_b7c6683f
  ✅ Industry: Logistics Coordinator @ ORG_9e6cd9ac Logistics Services
[2026-01-18T21:53:01.173Z] [BOT] ✅ Created forum post: 🏢 Logistics Coordinator @ ORG_9e6cd9ac Logistics Services in #💻・remote-usa
[2026-01-18T21:53:01.173Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-18T21:53:02.672Z] [BOT] 💾 Marked as posted: Logistics Coordinator @ ORG_9e6cd9ac Logistics Services (instance #1)
[2026-01-18T21:53:02.673Z] [BOT] 💾 BEFORE ARCHIVING: 2758 jobs in database
[2026-01-18T21:53:02.675Z] [BOT] ✅ No jobs to archive (all 2758 jobs within 7-day window)
[2026-01-18T21:53:02.693Z] [BOT] 💾 Saved posted_jobs.json: 2758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T21:53:05.693Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-18T21:53:05.694Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Connected Aviation" @ ORG_75f04b84
[2026-01-18T21:53:05.695Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:53:05.821Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Connected Aviation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Connected Aviation @ RTX',
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
[2026-01-18T21:53:05.821Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Connected Aviation
⚠️  Channel full error count: 1/5
[2026-01-18T21:53:07.481Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Connected Aviation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Connected Aviation @ RTX',
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
[2026-01-18T21:53:07.482Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T21:53:08.982Z] [BOT] 📍 [ROUTING] "Platform Enabling Software Engineer" @ ORG_9dbe1a97
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:53:09.073Z] [BOT ERROR] ❌ Error posting job Platform Enabling Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔷 Platform Enabling Software Engineer @ Intel',
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
[2026-01-18T21:53:09.073Z] [BOT] ❌ Industry post failed: Platform Enabling Software Engineer
⚠️  Channel full error count: 2/5
[2026-01-18T21:53:10.677Z] [BOT ERROR] ❌ Error posting job Platform Enabling Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔷 Platform Enabling Software Engineer @ Intel',
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
[2026-01-18T21:53:10.677Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T21:53:12.178Z] [BOT] 📍 [ROUTING] "Clinical Analytics Analyst - IS Analytic Health" @ ORG_0f4848d3ing Health
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:53:12.178Z] [BOT] ⚠️  Multiple matches: techMatch, nonTechMatch (using tech)
[2026-01-18T21:53:12.384Z] [BOT ERROR] ❌ Error posting job Clinical Analytics Analyst - IS Analytic Health: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Clinical Analytics Analyst - IS Analytic Health @ ORG_0f4848d3ing Health',
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
[2026-01-18T21:53:12.384Z] [BOT] ❌ Industry post failed: Clinical Analytics Analyst - IS Analytic Health
⚠️  Channel full error count: 3/5
[2026-01-18T21:53:13.987Z] [BOT ERROR] ❌ Error posting job Clinical Analytics Analyst - IS Analytic Health: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Clinical Analytics Analyst - IS Analytic Health @ ORG_0f4848d3ing Health',
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
[2026-01-18T21:53:13.987Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T21:53:15.488Z] [BOT] 📍 [ROUTING] "IT Data Solutions Developer Associate" @ ORG_810ace5b Health Care
[2026-01-18T21:53:15.488Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:53:15.658Z] [BOT ERROR] ❌ Error posting job IT Data Solutions Developer Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 IT Data Solutions Developer Associate @ ORG_810ace5b Health Care',
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
[2026-01-18T21:53:15.658Z] [BOT] ❌ Industry post failed: IT Data Solutions Developer Associate
⚠️  Channel full error count: 4/5
[2026-01-18T21:53:17.484Z] [BOT ERROR] ❌ Error posting job IT Data Solutions Developer Associate: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 IT Data Solutions Developer Associate @ ORG_810ace5b Health Care',
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
  url: 'https://discord.com/api/v10/channels/CH_f6887b5d/threads'
}
[2026-01-18T21:53:17.484Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-18T21:53:18.985Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer" @ ORG_213985e1
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T21:53:19.120Z] [BOT ERROR] ❌ Error posting job Forward Deployed Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Forward Deployed Engineer @ Postman',
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
[2026-01-18T21:53:19.120Z] [BOT] ❌ Industry post failed: Forward Deployed Engineer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T21:53:19.121Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T21:53:19.121Z] [BOT] Total attempts: 17
   Successful: 6
   Failed: 10
   Skipped: 1
[2026-01-18T21:53:19.121Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-18T21:53:19.121Z] [BOT] Total posts: 6
   Channels used: 4
   Top channels:
     1. #🌉・san-francisco: 2 posts
     2. #📈・JID_fb739488: 2 posts
     3. #🏗️・JID_b7c6683f: 1 posts
     4. #💻・remote-usa: 1 posts
[2026-01-18T21:53:19.121Z] [BOT] [STATS] Channel stats saved
[2026-01-18T21:53:19.122Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T21:53:19.140Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2897) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Machine Learning Research Scientist - Hsu & Konermann Labs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Research Scientist - Hsu & Konermann Labs
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Connected Aviation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Connected Aviation
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Connected Aviation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Platform Enabling Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Platform Enabling Software Engineer
- [BOT ERROR] ❌ Error posting job Platform Enabling Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Clinical Analytics Analyst - IS Analytic Health: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Clinical Analytics Analyst - IS Analytic Health
- [BOT ERROR] ❌ Error posting job Clinical Analytics Analyst - IS Analytic Health: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job IT Data Solutions Developer Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: IT Data Solutions Developer Associate
- [BOT ERROR] ❌ Error posting job IT Data Solutions Developer Associate: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Forward Deployed Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Forward Deployed Engineer
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*