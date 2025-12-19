# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T20:04:42.747Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 6
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T20:03:51.641Z] ========================================
[2025-12-19T20:03:51.643Z] Discord Bot Execution Log
[2025-12-19T20:03:51.643Z] Environment: GitHub Actions
[2025-12-19T20:03:51.643Z] Node Version: v20.19.6
[2025-12-19T20:03:51.643Z] ========================================
[2025-12-19T20:03:51.643Z] Environment Variables Check:
[2025-12-19T20:03:51.643Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T20:03:51.644Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.644Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T20:03:51.644Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T20:03:51.644Z] 
Multi-Channel Configuration:
[2025-12-19T20:03:51.644Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.644Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.644Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.644Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.644Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.644Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.644Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.644Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.645Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T20:03:51.645Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T20:03:51.645Z] 
Data Files Check:
[2025-12-19T20:03:51.645Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44345 bytes)
[2025-12-19T20:03:51.648Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 326108 bytes)
[2025-12-19T20:03:51.648Z] 
========================================
[2025-12-19T20:03:51.648Z] Starting Enhanced Discord Bot...
[2025-12-19T20:03:51.648Z] ========================================
[2025-12-19T20:03:52.179Z] [BOT] ✅ Loaded V2 database: 547 jobs
[2025-12-19T20:03:53.294Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T20:03:53.294Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T20:03:53.294Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T20:03:53.295Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T20:03:53.339Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T20:03:53.385Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T20:03:53.387Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T20:03:53.388Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T20:03:53.388Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T20:03:53.389Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-19T20:03:53.389Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T20:03:53.393Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-19T20:03:53.394Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_2e37d88c
[2025-12-19T20:03:53.394Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T20:03:53.411Z] [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T20:03:53.802Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_2e37d88c in #🤖・ai-jobs
[2025-12-19T20:03:53.802Z] [BOT] ✅ Industry: Software Engineer @ ORG_2e37d88c
[2025-12-19T20:03:55.671Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_2e37d88c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T20:03:57.171Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_2e37d88c (instance #1)
[2025-12-19T20:03:57.171Z] [BOT] 💾 BEFORE ARCHIVING: 548 jobs in database
[2025-12-19T20:03:57.172Z] [BOT] ✅ No jobs to archive (all 548 jobs within 7-day window)
[2025-12-19T20:03:57.178Z] [BOT] 💾 Saved posted_jobs.json: 548 active jobs
[2025-12-19T20:03:57.178Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:03:57.178Z] [BOT] 📍 [ROUTING] "Postdoctoral Associate" @ ORG_9d38443e of Miami
[2025-12-19T20:03:57.178Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T20:03:57.399Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Associate @ ORG_9d38443e of Miami in #🤖・ai-jobs
[2025-12-19T20:03:57.399Z] [BOT] ✅ Industry: Postdoctoral Associate @ ORG_9d38443e of Miami
[2025-12-19T20:03:59.182Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Associate @ ORG_9d38443e of Miami in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T20:04:00.684Z] [BOT] 💾 Marked as posted: Postdoctoral Associate @ ORG_9d38443e of Miami (instance #1)
[2025-12-19T20:04:00.684Z] [BOT] 💾 BEFORE ARCHIVING: 549 jobs in database
[2025-12-19T20:04:00.684Z] [BOT] ✅ No jobs to archive (all 549 jobs within 7-day window)
[2025-12-19T20:04:00.690Z] [BOT] 💾 Saved posted_jobs.json: 549 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:04:00.691Z] [BOT] 📍 [ROUTING] "Software Engineer - E" @ ORG_fb8c4aa0 Corporation
[2025-12-19T20:04:00.691Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T20:04:00.923Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - E @ ORG_fb8c4aa0 Corporation in #🤖・ai-jobs
  ✅ Industry: Software Engineer - E @ ORG_fb8c4aa0 Corporation
[2025-12-19T20:04:02.663Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - E @ ORG_fb8c4aa0 Corporation in #💻・remote-usa
[2025-12-19T20:04:02.663Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T20:04:04.164Z] [BOT] 💾 Marked as posted: Software Engineer - E @ ORG_fb8c4aa0 Corporation (instance #1)
[2025-12-19T20:04:04.164Z] [BOT] 💾 BEFORE ARCHIVING: 550 jobs in database
[2025-12-19T20:04:04.165Z] [BOT] ✅ No jobs to archive (all 550 jobs within 7-day window)
[2025-12-19T20:04:04.171Z] [BOT] 💾 Saved posted_jobs.json: 550 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:04:04.173Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_64dba1b4
[2025-12-19T20:04:04.173Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T20:04:04.348Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_64dba1b4 in #🤖・ai-jobs
[2025-12-19T20:04:04.348Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_64dba1b4
[2025-12-19T20:04:06.151Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_64dba1b4 in #🚌・boston
[2025-12-19T20:04:06.151Z] [BOT] ✅ Location: 🚌・boston
[2025-12-19T20:04:07.652Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate @ ORG_64dba1b4 (instance #1)
[2025-12-19T20:04:07.652Z] [BOT] 💾 BEFORE ARCHIVING: 551 jobs in database
[2025-12-19T20:04:07.652Z] [BOT] ✅ No jobs to archive (all 551 jobs within 7-day window)
[2025-12-19T20:04:07.658Z] [BOT] 💾 Saved posted_jobs.json: 551 active jobs
[2025-12-19T20:04:07.658Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:04:07.659Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2025-12-19T20:04:07.660Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T20:04:07.833Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin
[2025-12-19T20:04:11.282Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T20:04:12.782Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-19T20:04:12.782Z] [BOT] 💾 BEFORE ARCHIVING: 552 jobs in database
[2025-12-19T20:04:12.783Z] [BOT] ✅ No jobs to archive (all 552 jobs within 7-day window)
[2025-12-19T20:04:12.790Z] [BOT] 💾 Saved posted_jobs.json: 552 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T20:04:12.790Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-19T20:04:12.790Z] [BOT] 💾 BEFORE ARCHIVING: 553 jobs in database
[2025-12-19T20:04:12.791Z] [BOT] ✅ No jobs to archive (all 553 jobs within 7-day window)
[2025-12-19T20:04:12.796Z] [BOT] 💾 Saved posted_jobs.json: 553 active jobs
[2025-12-19T20:04:12.796Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:04:15.796Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-19T20:04:15.797Z] [BOT] 📍 [ROUTING] "Principal Engineer" @ ORG_b344d80e Swift Group
   Category: TECH (matched: "engineer/engineering")
[2025-12-19T20:04:15.797Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:04:16.015Z] [BOT] ✅ Created forum post: 🏢 Principal Engineer @ ORG_b344d80e Swift Group in #💻・tech-jobs
  ✅ Industry: Principal Engineer @ ORG_b344d80e Swift Group
[2025-12-19T20:04:17.716Z] [BOT] ✅ Created forum post: 🏢 Principal Engineer @ ORG_b344d80e Swift Group in #💻・remote-usa
[2025-12-19T20:04:17.716Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T20:04:19.216Z] [BOT] 💾 Marked as posted: Principal Engineer @ ORG_b344d80e Swift Group (instance #1)
[2025-12-19T20:04:19.217Z] [BOT] 💾 BEFORE ARCHIVING: 554 jobs in database
[2025-12-19T20:04:19.217Z] [BOT] ✅ No jobs to archive (all 554 jobs within 7-day window)
[2025-12-19T20:04:19.222Z] [BOT] 💾 Saved posted_jobs.json: 554 active jobs
[2025-12-19T20:04:19.222Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T20:04:19.222Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Department of Physics - Wissel Research Group" @ ORG_478e100e University
[2025-12-19T20:04:19.223Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T20:04:19.366Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Department of Physics - Wissel Research Group: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University',
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
[2025-12-19T20:04:19.366Z] [BOT] ❌ Industry post failed: Postdoctoral Scholar - Department of Physics - Wissel Research Group
⚠️  Channel full error count: 1/5
[2025-12-19T20:04:21.069Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Department of Physics - Wissel Research Group: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University',
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
[2025-12-19T20:04:21.070Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T20:04:25.572Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-19T20:04:25.572Z] [BOT] 📍 [ROUTING] "Sales Data Analyst 1" @ ORG_c46dc795 Innovation
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-19T20:04:25.572Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T20:04:25.740Z] [BOT ERROR] ❌ Error posting job Sales Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Sales Data Analyst 1 @ ORG_c46dc795 Innovation',
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
[2025-12-19T20:04:25.741Z] [BOT] ❌ Industry post failed: Sales Data Analyst 1
⚠️  Channel full error count: 2/5
[2025-12-19T20:04:29.174Z] [BOT ERROR] ❌ Error posting job Sales Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Sales Data Analyst 1 @ ORG_c46dc795 Innovation',
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
[2025-12-19T20:04:29.174Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2025-12-19T20:04:33.676Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-19T20:04:33.676Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar" @ ORG_478e100e University
   Category: HEALTHCARE (matched: "medical")
[2025-12-19T20:04:33.676Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-19T20:04:33.823Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Postdoctoral Scholar @ ORG_478e100e University',
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
[2025-12-19T20:04:33.823Z] [BOT] ❌ Industry post failed: Postdoctoral Scholar
⚠️  Channel full error count: 3/5
[2025-12-19T20:04:35.505Z] [BOT ERROR] ❌ Error posting job Postdoctoral Scholar: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Postdoctoral Scholar @ ORG_478e100e University',
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
[2025-12-19T20:04:35.505Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T20:04:40.008Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 3
[2025-12-19T20:04:40.008Z] [BOT] ⏭️  Skipping duplicate: JID_a41f4434-cx_1001-job-2016 (posted within 7 days)
[2025-12-19T20:04:40.008Z] [BOT] ⏭️  Skipping duplicate: JID_81710c0b (posted within 7 days)
⏭️  Skipping duplicate: JID_bf9f09c4-associate_r100089997 (posted within 7 days)
[2025-12-19T20:04:40.008Z] [BOT] ⏭️  Skipping duplicate: JID_a7cac1a6-_2320007 (posted within 7 days)
[2025-12-19T20:04:40.009Z] [BOT] ⏭️  Skipping duplicate: JID_c1126351-associate_r132402 (posted within 7 days)
[2025-12-19T20:04:40.009Z] [BOT] ⏭️  Skipping duplicate: JID_aa2f7139-fellow_r_00019055-2 (posted within 7 days)
[2025-12-19T20:04:40.011Z] [BOT] ✅ Loaded pending queue: 368 total (348 pending, 20 enriched, 0 posted)
[2025-12-19T20:04:40.016Z] [BOT] ✅ Saved pending queue: 368 total (348 pending, 14 enriched, 6 posted)
[2025-12-19T20:04:40.017Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T20:04:40.057Z] [BOT] 📂 Loaded 624 existing routing entries
[2025-12-19T20:04:40.101Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-19T20:04:40.101Z] [BOT] Total entries: 633
   Timestamp: 2025-12-19T20:04:40.097Z
[2025-12-19T20:04:40.101Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
[2025-12-19T20:04:40.101Z] [BOT] Total attempts: 18
   Successful: 12
   Failed: 6
   Skipped: 0
[2025-12-19T20:04:40.102Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-19T20:04:40.102Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
[2025-12-19T20:04:40.102Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・remote-usa: 4 posts
     3. #🚌・boston: 1 posts
     4. #🤠・austin: 1 posts
     5. #💻・tech-jobs: 1 posts
[2025-12-19T20:04:40.102Z] [BOT] [STATS] Channel stats saved
[2025-12-19T20:04:42.113Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Department of Physics - Wissel Research Group: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Scholar - Department of Physics - Wissel Research Group
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar - Department of Physics - Wissel Research Group: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Sales Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Sales Data Analyst 1
- [BOT ERROR] ❌ Error posting job Sales Data Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Postdoctoral Scholar
- [BOT ERROR] ❌ Error posting job Postdoctoral Scholar: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*