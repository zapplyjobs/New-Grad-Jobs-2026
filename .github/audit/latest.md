# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T04:42:25.529Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T04:41:57.103Z] ========================================
[2026-01-19T04:41:57.105Z] Discord Bot Execution Log
[2026-01-19T04:41:57.105Z] Environment: GitHub Actions
[2026-01-19T04:41:57.105Z] Node Version: v20.19.6
[2026-01-19T04:41:57.105Z] ========================================
[2026-01-19T04:41:57.106Z] Environment Variables Check:
[2026-01-19T04:41:57.106Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T04:41:57.106Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.106Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T04:41:57.106Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T04:41:57.106Z] 
Multi-Channel Configuration:
[2026-01-19T04:41:57.106Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.106Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.106Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.106Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.106Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.106Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.107Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.107Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.107Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T04:41:57.107Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T04:41:57.107Z] 
Data Files Check:
[2026-01-19T04:41:57.108Z] .github/data/new_jobs.json: ✅ Exists (10 items, 53327 bytes)
[2026-01-19T04:41:57.117Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1539429 bytes)
[2026-01-19T04:41:57.117Z] 
========================================
[2026-01-19T04:41:57.117Z] Starting Enhanced Discord Bot...
[2026-01-19T04:41:57.117Z] ========================================
[2026-01-19T04:41:57.647Z] [BOT] ✅ Loaded V2 database: 2838 jobs
[2026-01-19T04:41:58.459Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T04:41:58.460Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T04:41:58.460Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T04:41:58.592Z] [BOT] ✅ Loaded pending queue: 2837 total (2817 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst - Merchant Data Platform at Visa
[2026-01-19T04:41:58.598Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T04:41:58.599Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T04:41:58.599Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T04:41:58.600Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T04:41:58.600Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T04:41:58.605Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-19T04:41:58.605Z] [BOT] 📍 [ROUTING] "Analyst - Merchant Data Platform" @ ORG_a725bda1
[2026-01-19T04:41:58.606Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:41:58.610Z] [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T04:41:58.793Z] [BOT] ✅ Created forum post: 🏢 Analyst - Merchant Data Platform @ ORG_a725bda1 in #💻・tech-jobs
[2026-01-19T04:41:58.793Z] [BOT] ✅ Industry: Analyst - Merchant Data Platform @ ORG_a725bda1
[2026-01-19T04:42:02.002Z] [BOT] ✅ Created forum post: 🏢 Analyst - Merchant Data Platform @ ORG_a725bda1 in #🌉・san-francisco
[2026-01-19T04:42:02.002Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T04:42:03.504Z] [BOT] 💾 Marked as posted: Analyst - Merchant Data Platform @ ORG_a725bda1 (instance #1)
[2026-01-19T04:42:03.505Z] [BOT] 💾 BEFORE ARCHIVING: 2839 jobs in database
[2026-01-19T04:42:03.507Z] [BOT] ✅ No jobs to archive (all 2839 jobs within 7-day window)
[2026-01-19T04:42:03.528Z] [BOT] 💾 Saved posted_jobs.json: 2839 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T04:42:03.529Z] [BOT] 📍 [ROUTING] "Verification and Field Application Engineer – New Grad" @ ORG_1302e562
[2026-01-19T04:42:03.529Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:42:03.909Z] [BOT] ✅ Created forum post: 🏢 Verification and Field Application Engineer – New Grad @ ORG_1302e562 in #💻・tech-jobs
  ✅ Industry: Verification and Field Application Engineer – New Grad @ ORG_1302e562
[2026-01-19T04:42:05.624Z] [BOT] ✅ Created forum post: 🏢 Verification and Field Application Engineer – New Grad @ ORG_1302e562 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T04:42:07.126Z] [BOT] 💾 Marked as posted: Verification and Field Application Engineer – New Grad @ ORG_1302e562 (instance #1)
[2026-01-19T04:42:07.127Z] [BOT] 💾 BEFORE ARCHIVING: 2840 jobs in database
[2026-01-19T04:42:07.129Z] [BOT] ✅ No jobs to archive (all 2840 jobs within 7-day window)
[2026-01-19T04:42:07.155Z] [BOT] 💾 Saved posted_jobs.json: 2840 active jobs
[2026-01-19T04:42:07.155Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T04:42:07.156Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2026-01-19T04:42:07.156Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:42:07.493Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-19T04:42:07.493Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2026-01-19T04:42:09.312Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-19T04:42:10.813Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-19T04:42:10.813Z] [BOT] 💾 BEFORE ARCHIVING: 2841 jobs in database
[2026-01-19T04:42:10.815Z] [BOT] ✅ No jobs to archive (all 2841 jobs within 7-day window)
[2026-01-19T04:42:10.835Z] [BOT] 💾 Saved posted_jobs.json: 2841 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T04:42:10.836Z] [BOT] 📍 [ROUTING] "Tech Lead – Software Engineering" @ ORG_feb5566a Health
[2026-01-19T04:42:10.836Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:42:11.001Z] [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Tech Lead – Software Engineering @ ORG_feb5566a Health',
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
[2026-01-19T04:42:11.001Z] [BOT] ❌ Industry post failed: Tech Lead – Software Engineering
⚠️  Channel full error count: 1/5
[2026-01-19T04:42:12.652Z] [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Tech Lead – Software Engineering @ ORG_feb5566a Health',
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
[2026-01-19T04:42:12.653Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T04:42:14.153Z] [BOT] 📍 [ROUTING] "Analyst 1 – Labor Analytics - Corporate - Las Vegas" @ ORG_742553d6 Entertainment
[2026-01-19T04:42:14.153Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:42:14.336Z] [BOT ERROR] ❌ Error posting job Analyst 1 – Labor Analytics - Corporate - Las Vegas: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment',
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
[2026-01-19T04:42:14.336Z] [BOT] ❌ Industry post failed: Analyst 1 – Labor Analytics - Corporate - Las Vegas
⚠️  Channel full error count: 2/5
[2026-01-19T04:42:16.006Z] [BOT ERROR] ❌ Error posting job Analyst 1 – Labor Analytics - Corporate - Las Vegas: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Analyst 1 – Labor Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment',
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
[2026-01-19T04:42:16.007Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T04:42:17.508Z] [BOT] 📍 [ROUTING] "2026 Fulltime - Data Management Analyst I" @ ORG_75f04b84
[2026-01-19T04:42:17.508Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:42:17.629Z] [BOT ERROR] ❌ Error posting job 2026 Fulltime - Data Management Analyst I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 2026 Fulltime - Data Management Analyst I @ RTX',
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
[2026-01-19T04:42:17.630Z] [BOT] ❌ Industry post failed: 2026 Fulltime - Data Management Analyst I
⚠️  Channel full error count: 3/5
[2026-01-19T04:42:19.270Z] [BOT ERROR] ❌ Error posting job 2026 Fulltime - Data Management Analyst I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 2026 Fulltime - Data Management Analyst I @ RTX',
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
[2026-01-19T04:42:19.271Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T04:42:20.771Z] [BOT] 📍 [ROUTING] "Nuclear Analysis Technician - Engineering Techs - Physics Techs" @ ORG_41a6741einghouse Electric Company
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:42:20.900Z] [BOT ERROR] ❌ Error posting job Nuclear Analysis Technician - Engineering Techs - Physics Techs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company',
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
[2026-01-19T04:42:20.900Z] [BOT] ❌ Industry post failed: Nuclear Analysis Technician - Engineering Techs - Physics Techs
⚠️  Channel full error count: 4/5
[2026-01-19T04:42:22.530Z] [BOT ERROR] ❌ Error posting job Nuclear Analysis Technician - Engineering Techs - Physics Techs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Nuclear Analysis Technician - Engineering Techs - Physics Techs @ ORG_41a6741einghouse Electric Company',
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
[2026-01-19T04:42:22.530Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T04:42:24.030Z] [BOT] 📍 [ROUTING] "2026 Full-time - Software Engineer I - Onsite/CO" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T04:42:24.185Z] [BOT ERROR] ❌ Error posting job 2026 Full-time - Software Engineer I - Onsite/CO: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 2026 Full-time - Software Engineer I - Onsite/CO @ RTX',
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
[2026-01-19T04:42:24.185Z] [BOT] ❌ Industry post failed: 2026 Full-time - Software Engineer I - Onsite/CO
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-19T04:42:24.186Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 15
[2026-01-19T04:42:24.186Z] [BOT] Successful: 6
   Failed: 9
   Skipped: 0
[2026-01-19T04:42:24.186Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T04:42:24.186Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
[2026-01-19T04:42:24.186Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #🌉・san-francisco: 1 posts
     3. #💻・remote-usa: 1 posts
     4. #🌄・mountain-view: 1 posts
[2026-01-19T04:42:24.186Z] [BOT] [STATS] Channel stats saved
[2026-01-19T04:42:24.187Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_6fa01047.json
[2026-01-19T04:42:24.199Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Tech Lead – Software Engineering
- [BOT ERROR] ❌ Error posting job Tech Lead – Software Engineering: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Analyst 1 – Labor Analytics - Corporate - Las Vegas: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Analyst 1 – Labor Analytics - Corporate - Las Vegas
- [BOT ERROR] ❌ Error posting job Analyst 1 – Labor Analytics - Corporate - Las Vegas: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job 2026 Fulltime - Data Management Analyst I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: 2026 Fulltime - Data Management Analyst I
- [BOT ERROR] ❌ Error posting job 2026 Fulltime - Data Management Analyst I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Nuclear Analysis Technician - Engineering Techs - Physics Techs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Nuclear Analysis Technician - Engineering Techs - Physics Techs
- [BOT ERROR] ❌ Error posting job Nuclear Analysis Technician - Engineering Techs - Physics Techs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job 2026 Full-time - Software Engineer I - Onsite/CO: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: 2026 Full-time - Software Engineer I - Onsite/CO
- ❌ CRITICAL: Discord channel #💻・tech-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*