# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T20:08:18.087Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T20:07:32.362Z] ========================================
[2026-01-18T20:07:32.364Z] Discord Bot Execution Log
[2026-01-18T20:07:32.364Z] Environment: GitHub Actions
[2026-01-18T20:07:32.364Z] Node Version: v20.19.6
[2026-01-18T20:07:32.364Z] ========================================
[2026-01-18T20:07:32.364Z] Environment Variables Check:
[2026-01-18T20:07:32.364Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T20:07:32.364Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.364Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T20:07:32.364Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T20:07:32.364Z] 
Multi-Channel Configuration:
[2026-01-18T20:07:32.365Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.365Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.365Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.365Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.365Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.365Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.365Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.365Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.365Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T20:07:32.365Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T20:07:32.365Z] 
Data Files Check:
[2026-01-18T20:07:32.366Z] .github/data/new_jobs.json: ✅ Exists (10 items, 74770 bytes)
[2026-01-18T20:07:32.377Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1470211 bytes)
[2026-01-18T20:07:32.377Z] 
========================================
[2026-01-18T20:07:32.377Z] Starting Enhanced Discord Bot...
[2026-01-18T20:07:32.377Z] ========================================
[2026-01-18T20:07:32.904Z] [BOT] ✅ Loaded V2 database: 2712 jobs
[2026-01-18T20:07:33.669Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T20:07:33.669Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T20:07:33.669Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T20:07:33.787Z] [BOT] ✅ Loaded pending queue: 2839 total (2819 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: SAP Analyst at Accenture
[2026-01-18T20:07:33.791Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T20:07:33.791Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T20:07:33.791Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T20:07:33.792Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T20:07:33.792Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T20:07:33.797Z] [BOT] 📌 Posting 3 jobs to #🩺・healthcare-jobs
[2026-01-18T20:07:33.797Z] [BOT] 📍 [ROUTING] "SAP Analyst" @ ORG_6cd9e83c
[2026-01-18T20:07:33.797Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T20:07:33.802Z] [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T20:07:33.962Z] [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T20:07:33.962Z] [BOT] ❌ Industry post failed: SAP Analyst
⚠️  Channel full error count: 1/5
[2026-01-18T20:07:35.888Z] [BOT] ✅ Created forum post: 🏢 SAP Analyst @ ORG_6cd9e83c in #🗽・new-york
[2026-01-18T20:07:35.888Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T20:07:37.388Z] [BOT] 💾 Marked as posted: SAP Analyst @ ORG_6cd9e83c (instance #1)
[2026-01-18T20:07:37.389Z] [BOT] 💾 BEFORE ARCHIVING: 2713 jobs in database
[2026-01-18T20:07:37.390Z] [BOT] ✅ No jobs to archive (all 2713 jobs within 7-day window)
[2026-01-18T20:07:37.415Z] [BOT] 💾 Saved posted_jobs.json: 2713 active jobs
[2026-01-18T20:07:37.416Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Geospatial Analyst" @ ORG_eae683eb
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T20:07:37.626Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst @ ORG_eae683eb in #🩺・healthcare-jobs
[2026-01-18T20:07:37.626Z] [BOT] ✅ Industry: Geospatial Analyst @ ORG_eae683eb
[2026-01-18T20:07:39.403Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst @ ORG_eae683eb in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T20:07:40.903Z] [BOT] 💾 Marked as posted: Geospatial Analyst @ ORG_eae683eb (instance #1)
[2026-01-18T20:07:40.903Z] [BOT] 💾 BEFORE ARCHIVING: 2714 jobs in database
[2026-01-18T20:07:40.905Z] [BOT] ✅ No jobs to archive (all 2714 jobs within 7-day window)
[2026-01-18T20:07:40.920Z] [BOT] 💾 Saved posted_jobs.json: 2714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T20:07:40.921Z] [BOT] 📍 [ROUTING] "Associate Game Designer - Technical - Contingent" @ ORG_55030fed
[2026-01-18T20:07:40.921Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T20:07:41.220Z] [BOT] ✅ Created forum post: 🏢 Associate Game Designer - Technical - Contingent @ ORG_55030fed in #🩺・healthcare-jobs
  ✅ Industry: Associate Game Designer - Technical - Contingent @ ORG_55030fed
[2026-01-18T20:07:42.948Z] [BOT] ✅ Created forum post: 🏢 Associate Game Designer - Technical - Contingent @ ORG_55030fed in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-18T20:07:44.449Z] [BOT] 💾 Marked as posted: Associate Game Designer - Technical - Contingent @ ORG_55030fed (instance #1)
[2026-01-18T20:07:44.449Z] [BOT] 💾 BEFORE ARCHIVING: 2715 jobs in database
[2026-01-18T20:07:44.451Z] [BOT] ✅ No jobs to archive (all 2715 jobs within 7-day window)
[2026-01-18T20:07:44.470Z] [BOT] 💾 Saved posted_jobs.json: 2715 active jobs
[2026-01-18T20:07:44.471Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T20:07:47.472Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T20:07:47.472Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_360a4ee5
[2026-01-18T20:07:47.472Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T20:07:47.472Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T20:07:47.730Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_360a4ee5 in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_360a4ee5
[2026-01-18T20:07:49.446Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_360a4ee5 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-18T20:07:50.948Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_360a4ee5 (instance #1)
[2026-01-18T20:07:50.948Z] [BOT] 💾 BEFORE ARCHIVING: 2716 jobs in database
[2026-01-18T20:07:50.950Z] [BOT] ✅ No jobs to archive (all 2716 jobs within 7-day window)
[2026-01-18T20:07:50.968Z] [BOT] 💾 Saved posted_jobs.json: 2716 active jobs
[2026-01-18T20:07:50.968Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T20:07:50.968Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ ORG_49005fd1
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T20:07:51.184Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ ORG_49005fd1 in #📈・JID_fb739488
  ✅ Industry: Associate Technical Consultant @ ORG_49005fd1
[2026-01-18T20:07:52.820Z] [BOT ERROR] ❌ Error posting job Associate Technical Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Technical Consultant @ Appian',
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
[2026-01-18T20:07:52.821Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T20:07:54.322Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ ORG_49005fd1 (instance #1)
[2026-01-18T20:07:54.322Z] [BOT] 💾 BEFORE ARCHIVING: 2717 jobs in database
[2026-01-18T20:07:54.324Z] [BOT] ✅ No jobs to archive (all 2717 jobs within 7-day window)
[2026-01-18T20:07:54.340Z] [BOT] 💾 Saved posted_jobs.json: 2717 active jobs
[2026-01-18T20:07:54.340Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T20:07:57.340Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-18T20:07:57.340Z] [BOT] 📍 [ROUTING] "Software Engineer - Level - Space Systems" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-18T20:07:57.340Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T20:07:57.520Z] [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T20:07:57.521Z] [BOT] ❌ Industry post failed: Software Engineer - Level - Space Systems
⚠️  Channel full error count: 1/5
[2026-01-18T20:07:59.190Z] [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T20:07:59.190Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-18T20:08:00.690Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws" @ ORG_b344d80e Travelers Companies
[2026-01-18T20:08:00.691Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T20:08:00.819Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T20:08:00.819Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Aws
⚠️  Channel full error count: 2/5
[2026-01-18T20:08:02.450Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T20:08:02.451Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T20:08:06.952Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-18T20:08:06.952Z] [BOT] 📍 [ROUTING] "AI/ML Engineer" @ ORG_e4e67255
[2026-01-18T20:08:06.953Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T20:08:07.125Z] [BOT ERROR] ❌ Error posting job AI/ML Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI/ML Engineer @ Alation',
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
[2026-01-18T20:08:07.125Z] [BOT] ❌ Industry post failed: AI/ML Engineer
⚠️  Channel full error count: 3/5
[2026-01-18T20:08:08.802Z] [BOT ERROR] ❌ Error posting job AI/ML Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI/ML Engineer @ Alation',
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
[2026-01-18T20:08:08.802Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-18T20:08:10.304Z] [BOT] 📍 [ROUTING] "Research Analyst - Pnw" @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-18T20:08:10.304Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T20:08:10.458Z] [BOT ERROR] ❌ Error posting job Research Analyst - Pnw: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL)',
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
[2026-01-18T20:08:10.458Z] [BOT] ❌ Industry post failed: Research Analyst - Pnw
⚠️  Channel full error count: 4/5
[2026-01-18T20:08:12.179Z] [BOT ERROR] ❌ Error posting job Research Analyst - Pnw: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL)',
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
  url: 'https://discord.com/api/v10/channels/CH_2d7b9bbd/threads'
}
[2026-01-18T20:08:12.179Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-18T20:08:16.681Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-18T20:08:16.681Z] [BOT] 📍 [ROUTING] "Customer Trust Lead" @ anthropic
[2026-01-18T20:08:16.681Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T20:08:16.851Z] [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Customer Trust Lead @ anthropic',
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
  url: 'https://discord.com/api/v10/channels/CH_0a8e6a27/threads'
}
[2026-01-18T20:08:16.851Z] [BOT] ❌ Industry post failed: Customer Trust Lead
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T20:08:16.852Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T20:08:16.852Z] [BOT] Total attempts: 19
   Successful: 8
   Failed: 11
   Skipped: 0
[2026-01-18T20:08:16.852Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T20:08:16.852Z] [BOT] Last cleanup: Never
   Total posts: 8
   Channels used: 5
   Top channels:
     1. #🗽・new-york: 2 posts
     2. #🩺・healthcare-jobs: 2 posts
     3. #📈・JID_fb739488: 2 posts
     4. #💻・remote-usa: 1 posts
[2026-01-18T20:08:16.853Z] [BOT] 5. #🦢・los-angeles: 1 posts
[2026-01-18T20:08:16.853Z] [BOT] [STATS] Channel stats saved
[2026-01-18T20:08:16.853Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T20:08:16.866Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: SAP Analyst
- [BOT ERROR] ❌ Error posting job Associate Technical Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Level - Space Systems
- [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Aws
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Aws: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job AI/ML Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: AI/ML Engineer
- [BOT ERROR] ❌ Error posting job AI/ML Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Analyst - Pnw: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Analyst - Pnw
- [BOT ERROR] ❌ Error posting job Research Analyst - Pnw: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Customer Trust Lead: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Customer Trust Lead
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 5 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*