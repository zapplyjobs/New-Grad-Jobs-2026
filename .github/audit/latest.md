# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T18:48:43.915Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T18:47:54.496Z] ========================================
[2026-01-14T18:47:54.498Z] Discord Bot Execution Log
[2026-01-14T18:47:54.498Z] Environment: GitHub Actions
[2026-01-14T18:47:54.499Z] Node Version: v20.19.6
[2026-01-14T18:47:54.499Z] ========================================
[2026-01-14T18:47:54.499Z] Environment Variables Check:
[2026-01-14T18:47:54.499Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T18:47:54.499Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.499Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T18:47:54.499Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T18:47:54.499Z] 
Multi-Channel Configuration:
[2026-01-14T18:47:54.499Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.499Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.499Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.500Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.500Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.500Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.500Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.500Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.500Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T18:47:54.500Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T18:47:54.500Z] 
Data Files Check:
[2026-01-14T18:47:54.501Z] .github/data/new_jobs.json: ✅ Exists (10 items, 45294 bytes)
[2026-01-14T18:47:54.506Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 720524 bytes)
[2026-01-14T18:47:54.506Z] 
========================================
[2026-01-14T18:47:54.506Z] Starting Enhanced Discord Bot...
[2026-01-14T18:47:54.506Z] ========================================
[2026-01-14T18:47:55.048Z] [BOT] ✅ Loaded V2 database: 1353 jobs
[2026-01-14T18:47:55.932Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T18:47:55.932Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T18:47:55.932Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T18:47:56.040Z] [BOT] ✅ Loaded pending queue: 2739 total (2719 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Developer at Cisive
[2026-01-14T18:47:56.042Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T18:47:56.043Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T18:47:56.043Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T18:47:56.044Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T18:47:56.044Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T18:47:56.046Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-14T18:47:56.047Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
[2026-01-14T18:47:56.047Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T18:47:56.064Z] [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T18:47:56.237Z] [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Developer @ Cisive',
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
[2026-01-14T18:47:56.237Z] [BOT] ❌ Industry post failed: Software Developer
⚠️  Channel full error count: 1/5
[2026-01-14T18:47:58.410Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_6468cf88 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T18:47:59.911Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_6468cf88 (instance #1)
[2026-01-14T18:47:59.911Z] [BOT] 💾 BEFORE ARCHIVING: 1354 jobs in database
[2026-01-14T18:47:59.912Z] [BOT] ✅ No jobs to archive (all 1354 jobs within 7-day window)
[2026-01-14T18:47:59.922Z] [BOT] 💾 Saved posted_jobs.json: 1354 active jobs
[2026-01-14T18:47:59.922Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T18:47:59.923Z] [BOT] 📍 [ROUTING] "Founding Engineer" @ ORG_83270310
   Category: TECH (matched: "engineer/engineering")
[2026-01-14T18:47:59.923Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T18:48:00.227Z] [BOT] ✅ Created forum post: 🏢 Founding Engineer @ ORG_83270310 in #💻・tech-jobs
[2026-01-14T18:48:00.227Z] [BOT] ✅ Industry: Founding Engineer @ ORG_83270310
[2026-01-14T18:48:02.034Z] [BOT] ✅ Created forum post: 🏢 Founding Engineer @ ORG_83270310 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T18:48:03.534Z] [BOT] 💾 Marked as posted: Founding Engineer @ ORG_83270310 (instance #1)
[2026-01-14T18:48:03.535Z] [BOT] 💾 BEFORE ARCHIVING: 1355 jobs in database
[2026-01-14T18:48:03.536Z] [BOT] ✅ No jobs to archive (all 1355 jobs within 7-day window)
[2026-01-14T18:48:03.544Z] [BOT] 💾 Saved posted_jobs.json: 1355 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T18:48:03.544Z] [BOT] 📍 [ROUTING] "Front End Software Engineer 1" @ ORG_3cbc87c7 Anomaly
[2026-01-14T18:48:03.544Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T18:48:03.753Z] [BOT] ✅ Created forum post: 🏢 Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly in #💻・tech-jobs
  ✅ Industry: Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly
[2026-01-14T18:48:05.467Z] [BOT] ✅ Created forum post: 🏢 Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly in #🦢・los-angeles
[2026-01-14T18:48:05.468Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-14T18:48:06.969Z] [BOT] 💾 Marked as posted: Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly (instance #1)
[2026-01-14T18:48:06.969Z] [BOT] 💾 BEFORE ARCHIVING: 1356 jobs in database
[2026-01-14T18:48:06.970Z] [BOT] ✅ No jobs to archive (all 1356 jobs within 7-day window)
[2026-01-14T18:48:06.980Z] [BOT] 💾 Saved posted_jobs.json: 1356 active jobs
[2026-01-14T18:48:06.980Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T18:48:09.981Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-14T18:48:09.983Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - Agentic AI" @ ORG_9d38443e of Texas - Austin
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T18:48:09.983Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T18:48:10.361Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Agentic AI @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
[2026-01-14T18:48:10.361Z] [BOT] ✅ Industry: Postdoctoral Fellow - Agentic AI @ ORG_9d38443e of Texas - Austin
[2026-01-14T18:48:12.106Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Agentic AI @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T18:48:13.607Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow - Agentic AI @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-14T18:48:13.607Z] [BOT] 💾 BEFORE ARCHIVING: 1357 jobs in database
[2026-01-14T18:48:13.609Z] [BOT] ✅ No jobs to archive (all 1357 jobs within 7-day window)
[2026-01-14T18:48:13.619Z] [BOT] 💾 Saved posted_jobs.json: 1357 active jobs
[2026-01-14T18:48:13.620Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T18:48:13.620Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_101c5054
[2026-01-14T18:48:13.620Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T18:48:13.926Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career @ ORG_101c5054 in #🤖・ai-jobs
[2026-01-14T18:48:13.926Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_101c5054
[2026-01-14T18:48:15.684Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career @ ORG_101c5054 in #🌄・mountain-view
[2026-01-14T18:48:15.684Z] [BOT] ✅ Location: 🌄・mountain-view
[2026-01-14T18:48:17.185Z] [BOT] 💾 Marked as posted: Software Engineer – Early Career @ ORG_101c5054 (instance #1)
[2026-01-14T18:48:17.185Z] [BOT] 💾 BEFORE ARCHIVING: 1358 jobs in database
[2026-01-14T18:48:17.186Z] [BOT] ✅ No jobs to archive (all 1358 jobs within 7-day window)
[2026-01-14T18:48:17.196Z] [BOT] 💾 Saved posted_jobs.json: 1358 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T18:48:17.197Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Research Scientist - PhD (New York City)" @ spotify
[2026-01-14T18:48:17.197Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T18:48:17.449Z] [BOT] ✅ Created forum post: 🏢 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify in #🤖・ai-jobs
[2026-01-14T18:48:17.450Z] [BOT] ✅ Industry: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify
[2026-01-14T18:48:19.212Z] [BOT] ✅ Created forum post: 🏢 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify in #🗽・new-york
[2026-01-14T18:48:19.212Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T18:48:20.714Z] [BOT] 💾 Marked as posted: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify (instance #1)
[2026-01-14T18:48:20.714Z] [BOT] 💾 BEFORE ARCHIVING: 1359 jobs in database
[2026-01-14T18:48:20.715Z] [BOT] ✅ No jobs to archive (all 1359 jobs within 7-day window)
[2026-01-14T18:48:20.723Z] [BOT] 💾 Saved posted_jobs.json: 1359 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T18:48:20.724Z] [BOT] 📍 [ROUTING] "AI Training Data Acquisition Analyst" @ ORG_a48be88b
[2026-01-14T18:48:20.724Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T18:48:20.724Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T18:48:20.884Z] [BOT ERROR] ❌ Error posting job AI Training Data Acquisition Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Training Data Acquisition Analyst @ McAfee',
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
[2026-01-14T18:48:20.884Z] [BOT] ❌ Industry post failed: AI Training Data Acquisition Analyst
⚠️  Channel full error count: 1/5
[2026-01-14T18:48:22.593Z] [BOT ERROR] ❌ Error posting job AI Training Data Acquisition Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 AI Training Data Acquisition Analyst @ McAfee',
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
[2026-01-14T18:48:22.593Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T18:48:24.095Z] [BOT] 📍 [ROUTING] "（General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd" @ ORG_1bb6fcfb
[2026-01-14T18:48:24.095Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T18:48:24.261Z] [BOT ERROR] ❌ Error posting job （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: "🏢 （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ TikTok",
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
[2026-01-14T18:48:24.261Z] [BOT] ❌ Industry post failed: （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd
⚠️  Channel full error count: 2/5
[2026-01-14T18:48:25.933Z] [BOT ERROR] ❌ Error posting job （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: "🏢 （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ TikTok",
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
[2026-01-14T18:48:25.933Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-14T18:48:30.435Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-14T18:48:30.435Z] [BOT] 📍 [ROUTING] "Data Analyst - GTM Strategy & Operations" @ ORG_8bd7b9fd
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T18:48:30.628Z] [BOT ERROR] ❌ Error posting job Data Analyst - GTM Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst - GTM Strategy & Operations @ Datadog',
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
[2026-01-14T18:48:30.628Z] [BOT] ❌ Industry post failed: Data Analyst - GTM Strategy & Operations
⚠️  Channel full error count: 3/5
[2026-01-14T18:48:32.287Z] [BOT ERROR] ❌ Error posting job Data Analyst - GTM Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Analyst - GTM Strategy & Operations @ Datadog',
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-14T18:48:32.287Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-14T18:48:33.787Z] [BOT] 📍 [ROUTING] "Business Intelligence Engineer" @ Auto-Owners Insurance
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-14T18:48:33.788Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T18:48:33.948Z] [BOT ERROR] ❌ Error posting job Business Intelligence Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Intelligence Engineer @ Auto-Owners Insurance',
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
[2026-01-14T18:48:33.948Z] [BOT] ❌ Industry post failed: Business Intelligence Engineer
⚠️  Channel full error count: 4/5
[2026-01-14T18:48:35.673Z] [BOT ERROR] ❌ Error posting job Business Intelligence Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Intelligence Engineer @ Auto-Owners Insurance',
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
[2026-01-14T18:48:35.673Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-14T18:48:40.175Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-14T18:48:40.175Z] [BOT] ⏭️  Skipping duplicate: JID_679ebc85-developer_jr100117-1 (posted within 7 days)
[2026-01-14T18:48:40.175Z] [BOT] ⏭️  Skipping duplicate: JID_cce8f865-engineering_r_00043444 (posted within 7 days)
[2026-01-14T18:48:40.176Z] [BOT] ⏭️  Skipping duplicate: JID_32ee2752 (posted within 7 days)
[2026-01-14T18:48:40.176Z] [BOT] ⏭️  Skipping duplicate: JID_00c1703f (posted within 7 days)
[2026-01-14T18:48:40.176Z] [BOT] ⏭️  Skipping duplicate: JID_08c8e1a7 (posted within 7 days)
[2026-01-14T18:48:40.176Z] [BOT] ⏭️  Skipping duplicate: JID_f86864d1 (posted within 7 days)
[2026-01-14T18:48:40.294Z] [BOT] ✅ Loaded pending queue: 2739 total (2719 pending, 20 enriched, 0 posted)
[2026-01-14T18:48:40.455Z] [BOT] ✅ Saved pending queue: 2739 total (2719 pending, 14 enriched, 6 posted)
[2026-01-14T18:48:40.455Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T18:48:40.508Z] [BOT] 📂 Loaded 3485 existing routing entries
[2026-01-14T18:48:40.568Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3495
   Timestamp: 2026-01-14T18:48:40.553Z
[2026-01-14T18:48:40.569Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T18:48:40.569Z] [BOT] Total attempts: 20
   Successful: 11
   Failed: 9
   Skipped: 0
[2026-01-14T18:48:40.569Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 7
   Top channels:
[2026-01-14T18:48:40.569Z] [BOT] 1. #🤖・ai-jobs: 3 posts
     2. #💻・remote-usa: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #🦢・los-angeles: 1 posts
     5. #🤠・austin: 1 posts
[2026-01-14T18:48:40.569Z] [BOT] [STATS] Channel stats saved
[2026-01-14T18:48:42.593Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2410) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Developer
- [BOT ERROR] ❌ Error posting job AI Training Data Acquisition Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: AI Training Data Acquisition Analyst
- [BOT ERROR] ❌ Error posting job AI Training Data Acquisition Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd
- [BOT ERROR] ❌ Error posting job （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Analyst - GTM Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Analyst - GTM Strategy & Operations
- [BOT ERROR] ❌ Error posting job Data Analyst - GTM Strategy & Operations: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Business Intelligence Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Intelligence Engineer
- [BOT ERROR] ❌ Error posting job Business Intelligence Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*