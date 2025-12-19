# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T19:22:44.007Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T19:22:06.546Z] ========================================
[2025-12-19T19:22:06.548Z] Discord Bot Execution Log
[2025-12-19T19:22:06.548Z] Environment: GitHub Actions
[2025-12-19T19:22:06.548Z] Node Version: v20.19.6
[2025-12-19T19:22:06.548Z] ========================================
[2025-12-19T19:22:06.548Z] Environment Variables Check:
[2025-12-19T19:22:06.548Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T19:22:06.548Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.548Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T19:22:06.549Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T19:22:06.549Z] 
Multi-Channel Configuration:
[2025-12-19T19:22:06.549Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.549Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.549Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.549Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.549Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.549Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.549Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.549Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.549Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T19:22:06.549Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T19:22:06.550Z] 
Data Files Check:
[2025-12-19T19:22:06.550Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51111 bytes)
[2025-12-19T19:22:06.553Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 315521 bytes)
[2025-12-19T19:22:06.553Z] 
========================================
[2025-12-19T19:22:06.553Z] Starting Enhanced Discord Bot...
[2025-12-19T19:22:06.553Z] ========================================
[2025-12-19T19:22:07.075Z] [BOT] ✅ Loaded V2 database: 530 jobs
[2025-12-19T19:22:07.789Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T19:22:07.790Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T19:22:07.790Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T19:22:07.790Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T19:22:07.836Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T19:22:07.883Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T19:22:07.885Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T19:22:07.885Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T19:22:07.886Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T19:22:07.886Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-19T19:22:07.887Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank: nyc, morrisville
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T19:22:07.889Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2025-12-19T19:22:07.891Z] [BOT] 📍 [ROUTING] "GE Vernova Advanced Research 2026 Edison Rotational Program" @ ORG_e8760198 Vernova
[2025-12-19T19:22:07.891Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T19:22:07.908Z] [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T19:22:08.096Z] [BOT ERROR] ❌ Error posting job GE Vernova Advanced Research 2026 Edison Rotational Program: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova',
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
[2025-12-19T19:22:08.096Z] [BOT] ❌ Industry post failed: GE Vernova Advanced Research 2026 Edison Rotational Program
⚠️  Channel full error count: 1/5
[2025-12-19T19:22:09.815Z] [BOT] ✅ Created forum post: 🏢 GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-19T19:22:11.315Z] [BOT] 💾 Marked as posted: GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova (instance #1)
[2025-12-19T19:22:11.315Z] [BOT] 💾 BEFORE ARCHIVING: 531 jobs in database
[2025-12-19T19:22:11.316Z] [BOT] ✅ No jobs to archive (all 531 jobs within 7-day window)
[2025-12-19T19:22:11.325Z] [BOT] 💾 Saved posted_jobs.json: 531 active jobs
[2025-12-19T19:22:11.325Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:22:11.326Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2025-12-19T19:22:11.326Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T19:22:11.587Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
[2025-12-19T19:22:11.587Z] [BOT] ✅ Industry: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin
[2025-12-19T19:22:13.394Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2025-12-19T19:22:13.394Z] [BOT] ✅ Location: 🤠・austin
[2025-12-19T19:22:14.894Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-19T19:22:14.895Z] [BOT] 💾 BEFORE ARCHIVING: 532 jobs in database
[2025-12-19T19:22:14.895Z] [BOT] ✅ No jobs to archive (all 532 jobs within 7-day window)
[2025-12-19T19:22:14.900Z] [BOT] 💾 Saved posted_jobs.json: 532 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T19:22:14.900Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_8f6fe0d8 Devices
[2025-12-19T19:22:14.900Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-19T19:22:15.176Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_8f6fe0d8 Devices in #🤖・ai-jobs
[2025-12-19T19:22:15.176Z] [BOT] ✅ Industry: Machine Learning Engineer @ ORG_8f6fe0d8 Devices
[2025-12-19T19:22:18.799Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_8f6fe0d8 Devices in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-19T19:22:20.300Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ ORG_8f6fe0d8 Devices (instance #1)
[2025-12-19T19:22:20.300Z] [BOT] 💾 BEFORE ARCHIVING: 533 jobs in database
[2025-12-19T19:22:20.301Z] [BOT] ✅ No jobs to archive (all 533 jobs within 7-day window)
[2025-12-19T19:22:20.307Z] [BOT] 💾 Saved posted_jobs.json: 533 active jobs
[2025-12-19T19:22:20.307Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:22:20.308Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - 2026 Start" @ ORG_08c9a13c
[2025-12-19T19:22:20.308Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T19:22:21.161Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c
[2025-12-19T19:22:22.998Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T19:22:24.499Z] [BOT] 💾 Marked as posted: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-19T19:22:24.499Z] [BOT] 💾 BEFORE ARCHIVING: 534 jobs in database
[2025-12-19T19:22:24.500Z] [BOT] ✅ No jobs to archive (all 534 jobs within 7-day window)
[2025-12-19T19:22:24.509Z] [BOT] 💾 Saved posted_jobs.json: 534 active jobs
[2025-12-19T19:22:24.509Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:22:24.510Z] [BOT] 📍 [ROUTING] "Support Engineer" @ ORG_c67ce9a6
[2025-12-19T19:22:24.510Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T19:22:26.426Z] [BOT ERROR] ❌ Error posting job Support Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Support Engineer @ Zuma',
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
[2025-12-19T19:22:26.426Z] [BOT] ❌ Industry post failed: Support Engineer
⚠️  Channel full error count: 1/5
[2025-12-19T19:22:28.081Z] [BOT ERROR] ❌ Error posting job Support Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Support Engineer @ Zuma',
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
[2025-12-19T19:22:28.081Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T19:22:29.583Z] [BOT] 📍 [ROUTING] "Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development" @ ORG_8f6fe0d8 Devices
   Category: AI (matched: "machine learning")
[2025-12-19T19:22:29.583Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T19:22:29.739Z] [BOT ERROR] ❌ Error posting job Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Mode',
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
[2025-12-19T19:22:29.739Z] [BOT] ❌ Industry post failed: Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development
⚠️  Channel full error count: 2/5
[2025-12-19T19:22:31.388Z] [BOT ERROR] ❌ Error posting job Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Mode',
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
  url: 'https://discord.com/api/v10/channels/CH_9ce1b282/threads'
}
[2025-12-19T19:22:31.388Z] [BOT] ⚠️ Location post failed: 🚌・boston
[2025-12-19T19:22:35.890Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-19T19:22:35.891Z] [BOT] 📍 [ROUTING] "Product Applications Engineer" @ ORG_8f6fe0d8 Devices
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:22:36.133Z] [BOT ERROR] ❌ Error posting job Product Applications Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Applications Engineer @ ORG_8f6fe0d8 Devices',
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
[2025-12-19T19:22:36.133Z] [BOT] ❌ Industry post failed: Product Applications Engineer
⚠️  Channel full error count: 3/5
[2025-12-19T19:22:37.805Z] [BOT ERROR] ❌ Error posting job Product Applications Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Product Applications Engineer @ ORG_8f6fe0d8 Devices',
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
[2025-12-19T19:22:37.806Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T19:22:39.307Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Applications" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:22:39.463Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Applications: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - AI Applications @ ByteDance',
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
[2025-12-19T19:22:39.464Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Applications
⚠️  Channel full error count: 4/5
[2025-12-19T19:22:41.117Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Applications: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - AI Applications @ ByteDance',
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
[2025-12-19T19:22:41.117Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2025-12-19T19:22:42.617Z] [BOT] 📍 [ROUTING] "Deutsche Bank Graduate Programme - Technology - Data and Innovation" @ ORG_3d114b3a Bank
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:22:42.771Z] [BOT ERROR] ❌ Error posting job Deutsche Bank Graduate Programme - Technology - Data and Innovation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank',
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
[2025-12-19T19:22:42.771Z] [BOT] ❌ Industry post failed: Deutsche Bank Graduate Programme - Technology - Data and Innovation
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2025-12-19T19:22:42.772Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
[2025-12-19T19:22:42.772Z] [BOT] Total attempts: 17
   Successful: 7
   Failed: 10
   Skipped: 0
[2025-12-19T19:22:42.772Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-19T19:22:42.772Z] [BOT] Last cleanup: Never
   Total posts: 7
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 3 posts
     2. #🗽・new-york: 1 posts
     3. #🤠・austin: 1 posts
     4. #🚌・boston: 1 posts
     5. #🌉・san-francisco: 1 posts
[2025-12-19T19:22:42.772Z] [BOT] [STATS] Channel stats saved
[2025-12-19T19:22:42.773Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_41b776ee.json
[2025-12-19T19:22:42.781Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job GE Vernova Advanced Research 2026 Edison Rotational Program: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: GE Vernova Advanced Research 2026 Edison Rotational Program
- [BOT ERROR] ❌ Error posting job Support Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Support Engineer
- [BOT ERROR] ❌ Error posting job Support Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development
- [BOT ERROR] ❌ Error posting job Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Product Applications Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Product Applications Engineer
- [BOT ERROR] ❌ Error posting job Product Applications Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Applications: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - AI Applications
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - AI Applications: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Deutsche Bank Graduate Programme - Technology - Data and Innovation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Deutsche Bank Graduate Programme - Technology - Data and Innovation
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*