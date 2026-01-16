# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T13:34:39.347Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 11
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T13:34:03.367Z] ========================================
[2026-01-16T13:34:03.368Z] Discord Bot Execution Log
[2026-01-16T13:34:03.369Z] Environment: GitHub Actions
[2026-01-16T13:34:03.369Z] Node Version: v20.19.6
[2026-01-16T13:34:03.369Z] ========================================
[2026-01-16T13:34:03.369Z] Environment Variables Check:
[2026-01-16T13:34:03.369Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T13:34:03.369Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.369Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T13:34:03.369Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T13:34:03.369Z] 
Multi-Channel Configuration:
[2026-01-16T13:34:03.369Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.369Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.369Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.369Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.370Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.370Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.370Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.370Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.370Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T13:34:03.370Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T13:34:03.370Z] 
Data Files Check:
[2026-01-16T13:34:03.370Z] .github/data/new_jobs.json: ✅ Exists (10 items, 23338 bytes)
[2026-01-16T13:34:03.378Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1090322 bytes)
[2026-01-16T13:34:03.378Z] 
========================================
[2026-01-16T13:34:03.378Z] Starting Enhanced Discord Bot...
[2026-01-16T13:34:03.378Z] ========================================
[2026-01-16T13:34:03.908Z] [BOT] ✅ Loaded V2 database: 2021 jobs
[2026-01-16T13:34:04.637Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T13:34:04.637Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T13:34:04.638Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T13:34:04.746Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Infrastructure Engineer at Epic
[2026-01-16T13:34:04.749Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T13:34:04.750Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T13:34:04.750Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T13:34:04.750Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T13:34:04.751Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-16T13:34:04.751Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T13:34:04.753Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T13:34:04.755Z] [BOT] 📍 [ROUTING] "Infrastructure Engineer" @ ORG_a93d3898
[2026-01-16T13:34:04.755Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T13:34:04.772Z] [BOT ERROR] (node:3140) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T13:34:04.948Z] [BOT ERROR] ❌ Error posting job Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Infrastructure Engineer @ Epic',
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
[2026-01-16T13:34:04.948Z] [BOT] ❌ Industry post failed: Infrastructure Engineer
⚠️  Channel full error count: 1/5
[2026-01-16T13:34:06.650Z] [BOT] ✅ Created forum post: 🏢 Infrastructure Engineer @ ORG_a93d3898 in #💻・remote-usa
[2026-01-16T13:34:06.650Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T13:34:08.152Z] [BOT] 💾 Marked as posted: Infrastructure Engineer @ ORG_a93d3898 (instance #1)
[2026-01-16T13:34:08.152Z] [BOT] 💾 BEFORE ARCHIVING: 2022 jobs in database
[2026-01-16T13:34:08.154Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T13:34:08.159Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-16T13:34:08.159Z] [BOT] ✅ Archiving complete: 1 archived, 2021 active
[2026-01-16T13:34:08.173Z] [BOT] 💾 Saved posted_jobs.json: 2021 active jobs
[2026-01-16T13:34:08.174Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T13:34:08.174Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_b6b226b3 Health
[2026-01-16T13:34:08.174Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T13:34:08.301Z] [BOT ERROR] ❌ Error posting job Associate Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Developer @ ORG_b6b226b3 Health',
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
[2026-01-16T13:34:08.301Z] [BOT] ❌ Industry post failed: Associate Software Developer
⚠️  Channel full error count: 2/5
[2026-01-16T13:34:09.980Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_b6b226b3 Health in #💻・remote-usa
[2026-01-16T13:34:09.980Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T13:34:11.481Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_b6b226b3 Health (instance #1)
[2026-01-16T13:34:11.482Z] [BOT] 💾 BEFORE ARCHIVING: 2022 jobs in database
[2026-01-16T13:34:11.485Z] [BOT] ✅ No jobs to archive (all 2022 jobs within 7-day window)
[2026-01-16T13:34:11.496Z] [BOT] 💾 Saved posted_jobs.json: 2022 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T13:34:11.497Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_2e4aaf05 Space Storage
[2026-01-16T13:34:11.497Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T13:34:11.750Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_2e4aaf05 Space Storage in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_2e4aaf05 Space Storage
[2026-01-16T13:34:13.426Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_2e4aaf05 Space Storage in #💻・remote-usa
[2026-01-16T13:34:13.426Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T13:34:14.927Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_2e4aaf05 Space Storage (instance #1)
[2026-01-16T13:34:14.927Z] [BOT] 💾 BEFORE ARCHIVING: 2023 jobs in database
[2026-01-16T13:34:14.929Z] [BOT] ✅ No jobs to archive (all 2023 jobs within 7-day window)
[2026-01-16T13:34:14.942Z] [BOT] 💾 Saved posted_jobs.json: 2023 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T13:34:14.943Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_b074f340
[2026-01-16T13:34:14.943Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T13:34:16.004Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_b074f340 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_b074f340
[2026-01-16T13:34:17.683Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_b074f340 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T13:34:19.184Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_b074f340 (instance #1)
[2026-01-16T13:34:19.185Z] [BOT] 💾 BEFORE ARCHIVING: 2024 jobs in database
[2026-01-16T13:34:19.186Z] [BOT] ✅ No jobs to archive (all 2024 jobs within 7-day window)
[2026-01-16T13:34:19.201Z] [BOT] 💾 Saved posted_jobs.json: 2024 active jobs
[2026-01-16T13:34:19.201Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T13:34:19.201Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer – University Graduate 2026" @ ORG_175f350d
   Category: TECH (matched: "software")
[2026-01-16T13:34:19.202Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T13:34:19.338Z] [BOT ERROR] ❌ Error posting job Frontend Software Engineer – University Graduate 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Frontend Software Engineer – University Graduate 2026 @ Verkada',
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
[2026-01-16T13:34:19.339Z] [BOT] ❌ Industry post failed: Frontend Software Engineer – University Graduate 2026
⚠️  Channel full error count: 1/5
[2026-01-16T13:34:21.005Z] [BOT ERROR] ❌ Error posting job Frontend Software Engineer – University Graduate 2026: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Frontend Software Engineer – University Graduate 2026 @ Verkada',
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
[2026-01-16T13:34:21.005Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-16T13:34:22.507Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry-Level - C++" @ ORG_6c71f4eb Capital
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T13:34:22.619Z] [BOT ERROR] ❌ Error posting job Software Engineer - Entry-Level - C++: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital',
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
[2026-01-16T13:34:22.619Z] [BOT] ❌ Industry post failed: Software Engineer - Entry-Level - C++
⚠️  Channel full error count: 2/5
[2026-01-16T13:34:24.296Z] [BOT ERROR] ❌ Error posting job Software Engineer - Entry-Level - C++: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - Entry-Level - C++ @ ORG_6c71f4eb Capital',
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
[2026-01-16T13:34:24.296Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-16T13:34:25.797Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_964fffee
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T13:34:25.930Z] [BOT ERROR] ❌ Error posting job Software Engineer - New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - New Grad @ Decagon',
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
[2026-01-16T13:34:25.930Z] [BOT] ❌ Industry post failed: Software Engineer - New Grad
⚠️  Channel full error count: 3/5
[2026-01-16T13:34:27.538Z] [BOT ERROR] ❌ Error posting job Software Engineer - New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer - New Grad @ Decagon',
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
[2026-01-16T13:34:27.538Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T13:34:32.040Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T13:34:32.040Z] [BOT] 📍 [ROUTING] "Junior Data Analyst" @ ORG_eb5350fc
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T13:34:32.210Z] [BOT ERROR] ❌ Error posting job Junior Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Data Analyst @ CSC',
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
[2026-01-16T13:34:32.210Z] [BOT] ❌ Industry post failed: Junior Data Analyst
⚠️  Channel full error count: 4/5
[2026-01-16T13:34:33.858Z] [BOT ERROR] ❌ Error posting job Junior Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Junior Data Analyst @ CSC',
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
[2026-01-16T13:34:33.858Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T13:34:38.360Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T13:34:38.360Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_b26219beina
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T13:34:38.360Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T13:34:38.520Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer @ ORG_b26219beina',
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
[2026-01-16T13:34:38.520Z] [BOT] ❌ Industry post failed: Machine Learning Engineer
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-16T13:34:38.521Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 17
[2026-01-16T13:34:38.521Z] [BOT] Successful: 6
   Failed: 11
   Skipped: 0
[2026-01-16T13:34:38.521Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T13:34:38.521Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 2
   Top channels:
     1. #💻・remote-usa: 4 posts
     2. #💻・tech-jobs: 2 posts
[2026-01-16T13:34:38.521Z] [BOT] [STATS] Channel stats saved
[2026-01-16T13:34:38.522Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_2dc10745.json
[2026-01-16T13:34:38.534Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3140) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Infrastructure Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Infrastructure Engineer
- [BOT ERROR] ❌ Error posting job Associate Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Software Developer
- [BOT ERROR] ❌ Error posting job Frontend Software Engineer – University Graduate 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Frontend Software Engineer – University Graduate 2026
- [BOT ERROR] ❌ Error posting job Frontend Software Engineer – University Graduate 2026: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Entry-Level - C++: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Entry-Level - C++
- [BOT ERROR] ❌ Error posting job Software Engineer - Entry-Level - C++: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - New Grad
- [BOT ERROR] ❌ Error posting job Software Engineer - New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Junior Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Junior Data Analyst
- [BOT ERROR] ❌ Error posting job Junior Data Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*