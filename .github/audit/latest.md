# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T04:29:30.207Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T04:28:53.731Z] ========================================
[2026-01-17T04:28:53.733Z] Discord Bot Execution Log
[2026-01-17T04:28:53.733Z] Environment: GitHub Actions
[2026-01-17T04:28:53.733Z] Node Version: v20.19.6
[2026-01-17T04:28:53.733Z] ========================================
[2026-01-17T04:28:53.733Z] Environment Variables Check:
[2026-01-17T04:28:53.733Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T04:28:53.733Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.733Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T04:28:53.734Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T04:28:53.734Z] 
Multi-Channel Configuration:
[2026-01-17T04:28:53.734Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.734Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.734Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.734Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.734Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.734Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.734Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.734Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.734Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T04:28:53.734Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T04:28:53.734Z] 
Data Files Check:
[2026-01-17T04:28:53.735Z] .github/data/new_jobs.json: ✅ Exists (10 items, 9942 bytes)
[2026-01-17T04:28:53.745Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1214927 bytes)
[2026-01-17T04:28:53.746Z] 
========================================
[2026-01-17T04:28:53.746Z] Starting Enhanced Discord Bot...
[2026-01-17T04:28:53.746Z] ========================================
[2026-01-17T04:28:54.298Z] [BOT] ✅ Loaded V2 database: 2242 jobs
[2026-01-17T04:28:54.871Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T04:28:54.872Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T04:28:54.872Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T04:28:54.992Z] [BOT] ✅ Loaded pending queue: 2882 total (2862 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Value Engineer (AI-Driven Data Science & Analytics) at Celonis
[2026-01-17T04:28:54.995Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T04:28:54.995Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T04:28:54.995Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T04:28:54.996Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-17T04:28:54.996Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T04:28:54.997Z] [BOT] - Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T04:28:54.998Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T04:28:54.999Z] [BOT] 📍 [ROUTING] "Associate Value Engineer (AI-Driven Data Science & Analytics)" @ ORG_5c4c8ca4
[2026-01-17T04:28:55.000Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T04:28:55.000Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T04:28:55.017Z] [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T04:28:55.229Z] [BOT] ✅ Created forum post: 🏢 Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4 in #📈・JID_fb739488
[2026-01-17T04:28:55.229Z] [BOT] ✅ Industry: Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4
[2026-01-17T04:28:57.082Z] [BOT] ✅ Created forum post: 🏢 Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4 in #🗽・new-york
[2026-01-17T04:28:57.083Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T04:28:58.584Z] [BOT] 💾 Marked as posted: Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4 (instance #1)
[2026-01-17T04:28:58.584Z] [BOT] 💾 BEFORE ARCHIVING: 2243 jobs in database
[2026-01-17T04:28:58.586Z] [BOT] ✅ No jobs to archive (all 2243 jobs within 7-day window)
[2026-01-17T04:28:58.605Z] [BOT] 💾 Saved posted_jobs.json: 2243 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:29:01.606Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-17T04:29:01.607Z] [BOT] 📍 [ROUTING] "Associate Engineer, Software" @ ORG_1c0f1132 Carribean Group
[2026-01-17T04:29:01.607Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T04:29:01.830Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer, Software @ ORG_1c0f1132 Carribean Group in #💻・tech-jobs
[2026-01-17T04:29:01.830Z] [BOT] ✅ Industry: Associate Engineer, Software @ ORG_1c0f1132 Carribean Group
[2026-01-17T04:29:04.130Z] [BOT] ✅ Created forum post: 🏢 Associate Engineer, Software @ ORG_1c0f1132 Carribean Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T04:29:05.631Z] [BOT] 💾 Marked as posted: Associate Engineer, Software @ ORG_1c0f1132 Carribean Group (instance #1)
[2026-01-17T04:29:05.631Z] [BOT] 💾 BEFORE ARCHIVING: 2244 jobs in database
[2026-01-17T04:29:05.633Z] [BOT] ✅ No jobs to archive (all 2244 jobs within 7-day window)
[2026-01-17T04:29:05.650Z] [BOT] 💾 Saved posted_jobs.json: 2244 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:29:05.651Z] [BOT] 📍 [ROUTING] "Junior Full Stack Software Engineer" @ ORG_b891e1e7 Technologies
[2026-01-17T04:29:05.651Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T04:29:05.817Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies in #💻・tech-jobs
  ✅ Industry: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies
[2026-01-17T04:29:07.490Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T04:29:08.992Z] [BOT] 💾 Marked as posted: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies (instance #1)
[2026-01-17T04:29:08.992Z] [BOT] 💾 BEFORE ARCHIVING: 2245 jobs in database
[2026-01-17T04:29:08.993Z] [BOT] ✅ No jobs to archive (all 2245 jobs within 7-day window)
[2026-01-17T04:29:09.009Z] [BOT] 💾 Saved posted_jobs.json: 2245 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:29:09.010Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer" @ ORG_dc7620eb
[2026-01-17T04:29:09.010Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T04:29:10.075Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer @ ORG_dc7620eb
[2026-01-17T04:29:11.686Z] [BOT ERROR] ❌ Error posting job Undergrad Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔴 Undergrad Software Engineer @ Oracle',
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
[2026-01-17T04:29:11.687Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T04:29:13.188Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer @ ORG_dc7620eb (instance #1)
[2026-01-17T04:29:13.188Z] [BOT] 💾 BEFORE ARCHIVING: 2246 jobs in database
[2026-01-17T04:29:13.190Z] [BOT] ✅ No jobs to archive (all 2246 jobs within 7-day window)
[2026-01-17T04:29:13.203Z] [BOT] 💾 Saved posted_jobs.json: 2246 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T04:29:13.204Z] [BOT] 📍 [ROUTING] "Forward Deployed Software Engineer I" @ ORG_76725f91
[2026-01-17T04:29:13.204Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T04:29:13.338Z] [BOT ERROR] ❌ Error posting job Forward Deployed Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Forward Deployed Software Engineer I @ Maxar',
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
[2026-01-17T04:29:13.338Z] [BOT] ❌ Industry post failed: Forward Deployed Software Engineer I
⚠️  Channel full error count: 1/5
[2026-01-17T04:29:15.004Z] [BOT ERROR] ❌ Error posting job Forward Deployed Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Forward Deployed Software Engineer I @ Maxar',
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
[2026-01-17T04:29:15.005Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T04:29:19.507Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-17T04:29:19.507Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Orchestration" @ ORG_08c9a13c
[2026-01-17T04:29:19.508Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:29:19.684Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Applied Machine Learning - Orchestration: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ByteDance',
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
[2026-01-17T04:29:19.685Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Applied Machine Learning - Orchestration
⚠️  Channel full error count: 2/5
[2026-01-17T04:29:21.290Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Applied Machine Learning - Orchestration: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ByteDance',
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
[2026-01-17T04:29:21.290Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T04:29:22.791Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning" @ ORG_08c9a13c
[2026-01-17T04:29:22.792Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:29:22.917Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Applied Machine Learning: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Applied Machine Learning @ ByteDance',
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
[2026-01-17T04:29:22.917Z] [BOT] ❌ Industry post failed: Software Engineer Graduate - Applied Machine Learning
⚠️  Channel full error count: 3/5
[2026-01-17T04:29:24.556Z] [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Applied Machine Learning: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer Graduate - Applied Machine Learning @ ByteDance',
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
[2026-01-17T04:29:24.556Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T04:29:26.058Z] [BOT] 📍 [ROUTING] "Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start" @ ORG_1bb6fcfb
[2026-01-17T04:29:26.058Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:29:26.173Z] [BOT ERROR] ❌ Error posting job Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ TikTok',
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
[2026-01-17T04:29:26.173Z] [BOT] ❌ Industry post failed: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start
⚠️  Channel full error count: 4/5
[2026-01-17T04:29:27.813Z] [BOT ERROR] ❌ Error posting job Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ TikTok',
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
[2026-01-17T04:29:27.813Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T04:29:29.314Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-17T04:29:29.314Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T04:29:29.435Z] [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ TikTok',
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
[2026-01-17T04:29:29.436Z] [BOT] ❌ Industry post failed: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-17T04:29:29.436Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T04:29:29.436Z] [BOT] Total attempts: 17
   Successful: 7
   Failed: 10
   Skipped: 0
[2026-01-17T04:29:29.437Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-17T04:29:29.437Z] [BOT] Total posts: 7
   Channels used: 4
   Top channels:
[2026-01-17T04:29:29.437Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #💻・remote-usa: 2 posts
     3. #📈・JID_fb739488: 1 posts
     4. #🗽・new-york: 1 posts
[2026-01-17T04:29:29.437Z] [BOT] [STATS] Channel stats saved
[2026-01-17T04:29:29.437Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_49f2ade9.json
[2026-01-17T04:29:29.452Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Undergrad Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Forward Deployed Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Forward Deployed Software Engineer I
- [BOT ERROR] ❌ Error posting job Forward Deployed Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Applied Machine Learning - Orchestration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Applied Machine Learning - Orchestration
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Applied Machine Learning - Orchestration: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Applied Machine Learning: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer Graduate - Applied Machine Learning
- [BOT ERROR] ❌ Error posting job Software Engineer Graduate - Applied Machine Learning: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start
- [BOT ERROR] ❌ Error posting job Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation
- ❌ CRITICAL: Discord channel #🤖・ai-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*