# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T03:21:05.190Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T03:20:17.109Z] ========================================
[2026-01-17T03:20:17.111Z] Discord Bot Execution Log
[2026-01-17T03:20:17.111Z] Environment: GitHub Actions
[2026-01-17T03:20:17.111Z] Node Version: v20.19.6
[2026-01-17T03:20:17.111Z] ========================================
[2026-01-17T03:20:17.111Z] Environment Variables Check:
[2026-01-17T03:20:17.111Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T03:20:17.111Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.111Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T03:20:17.111Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T03:20:17.112Z] 
Multi-Channel Configuration:
[2026-01-17T03:20:17.112Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.112Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.112Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.112Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.112Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.112Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.112Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.112Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.112Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T03:20:17.112Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T03:20:17.112Z] 
Data Files Check:
[2026-01-17T03:20:17.113Z] .github/data/new_jobs.json: ✅ Exists (10 items, 13175 bytes)
[2026-01-17T03:20:17.121Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1208846 bytes)
[2026-01-17T03:20:17.121Z] 
========================================
[2026-01-17T03:20:17.121Z] Starting Enhanced Discord Bot...
[2026-01-17T03:20:17.121Z] ========================================
[2026-01-17T03:20:17.646Z] [BOT] ✅ Loaded V2 database: 2231 jobs
[2026-01-17T03:20:18.077Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T03:20:18.078Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T03:20:18.078Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T03:20:18.188Z] [BOT] ✅ Loaded pending queue: 2816 total (2796 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Graduate Social - 2026 Start at TikTok
[2026-01-17T03:20:18.192Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T03:20:18.192Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T03:20:18.192Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T03:20:18.193Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T03:20:18.193Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-17T03:20:18.193Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T03:20:18.195Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-17T03:20:18.196Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate Social - 2026 Start" @ ORG_1bb6fcfb
[2026-01-17T03:20:18.197Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:20:18.214Z] [BOT ERROR] (node:3271) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T03:20:18.560Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate Social - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-17T03:20:18.560Z] [BOT] ✅ Industry: Software Engineer Graduate Social - 2026 Start @ ORG_1bb6fcfb
[2026-01-17T03:20:20.262Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate Social - 2026 Start @ ORG_1bb6fcfb in #🦢・los-angeles
[2026-01-17T03:20:20.262Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-17T03:20:21.762Z] [BOT] 💾 Marked as posted: Software Engineer Graduate Social - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-17T03:20:21.762Z] [BOT] 💾 BEFORE ARCHIVING: 2232 jobs in database
[2026-01-17T03:20:21.764Z] [BOT] ✅ No jobs to archive (all 2232 jobs within 7-day window)
[2026-01-17T03:20:21.778Z] [BOT] 💾 Saved posted_jobs.json: 2232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:20:21.779Z] [BOT] 📍 [ROUTING] "Product Security Engineer - Security Assurance" @ ORG_1bb6fcfb
[2026-01-17T03:20:21.779Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:20:21.976Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineer - Security Assurance @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-17T03:20:21.976Z] [BOT] ✅ Industry: Product Security Engineer - Security Assurance @ ORG_1bb6fcfb
[2026-01-17T03:20:23.750Z] [BOT] ✅ Created forum post: 🏢 Product Security Engineer - Security Assurance @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T03:20:25.252Z] [BOT] 💾 Marked as posted: Product Security Engineer - Security Assurance @ ORG_1bb6fcfb (instance #1)
[2026-01-17T03:20:25.252Z] [BOT] 💾 BEFORE ARCHIVING: 2233 jobs in database
[2026-01-17T03:20:25.253Z] [BOT] ✅ No jobs to archive (all 2233 jobs within 7-day window)
[2026-01-17T03:20:25.266Z] [BOT] 💾 Saved posted_jobs.json: 2233 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:20:25.266Z] [BOT] 📍 [ROUTING] "SDET, Software Development Engineer in Test" @ ORG_1bb6fcfb
[2026-01-17T03:20:25.266Z] [BOT] Category: TECH (matched: "software")
[2026-01-17T03:20:25.266Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:20:25.953Z] [BOT] ✅ Created forum post: 🏢 SDET, Software Development Engineer in Test @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: SDET, Software Development Engineer in Test @ ORG_1bb6fcfb
[2026-01-17T03:20:27.733Z] [BOT] ✅ Created forum post: 🏢 SDET, Software Development Engineer in Test @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T03:20:29.233Z] [BOT] 💾 Marked as posted: SDET, Software Development Engineer in Test @ ORG_1bb6fcfb (instance #1)
[2026-01-17T03:20:29.233Z] [BOT] 💾 BEFORE ARCHIVING: 2234 jobs in database
[2026-01-17T03:20:29.235Z] [BOT] ✅ No jobs to archive (all 2234 jobs within 7-day window)
[2026-01-17T03:20:29.251Z] [BOT] 💾 Saved posted_jobs.json: 2234 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:20:29.252Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_7f4a1e5b Systems
[2026-01-17T03:20:29.252Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:20:29.545Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_7f4a1e5b Systems in #💻・tech-jobs
[2026-01-17T03:20:29.545Z] [BOT] ✅ Industry: Software Developer @ ORG_7f4a1e5b Systems
[2026-01-17T03:20:31.408Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_7f4a1e5b Systems in #💻・remote-usa
[2026-01-17T03:20:31.408Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T03:20:32.910Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_7f4a1e5b Systems (instance #1)
[2026-01-17T03:20:32.910Z] [BOT] 💾 BEFORE ARCHIVING: 2235 jobs in database
[2026-01-17T03:20:32.912Z] [BOT] ✅ No jobs to archive (all 2235 jobs within 7-day window)
[2026-01-17T03:20:32.927Z] [BOT] 💾 Saved posted_jobs.json: 2235 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:20:32.928Z] [BOT] 📍 [ROUTING] "Embedded Software Engineer" @ ORG_05d2f9ea
[2026-01-17T03:20:32.928Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:20:33.104Z] [BOT] ✅ Created forum post: 🏢 Embedded Software Engineer @ ORG_05d2f9ea in #💻・tech-jobs
  ✅ Industry: Embedded Software Engineer @ ORG_05d2f9ea
[2026-01-17T03:20:34.882Z] [BOT] ✅ Created forum post: 🏢 Embedded Software Engineer @ ORG_05d2f9ea in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T03:20:36.383Z] [BOT] 💾 Marked as posted: Embedded Software Engineer @ ORG_05d2f9ea (instance #1)
[2026-01-17T03:20:36.383Z] [BOT] 💾 BEFORE ARCHIVING: 2236 jobs in database
[2026-01-17T03:20:36.385Z] [BOT] ✅ No jobs to archive (all 2236 jobs within 7-day window)
[2026-01-17T03:20:36.397Z] [BOT] 💾 Saved posted_jobs.json: 2236 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:20:36.398Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_6a4c3a44 Identity
[2026-01-17T03:20:36.398Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:20:36.720Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_6a4c3a44 Identity in #💻・tech-jobs
[2026-01-17T03:20:36.720Z] [BOT] ✅ Industry: Software Engineer I @ ORG_6a4c3a44 Identity
[2026-01-17T03:20:38.340Z] [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer I @ ORG_6a4c3a44 Identity',
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
[2026-01-17T03:20:38.340Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T03:20:39.841Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_6a4c3a44 Identity (instance #1)
[2026-01-17T03:20:39.841Z] [BOT] 💾 BEFORE ARCHIVING: 2237 jobs in database
[2026-01-17T03:20:39.843Z] [BOT] ✅ No jobs to archive (all 2237 jobs within 7-day window)
[2026-01-17T03:20:39.857Z] [BOT] 💾 Saved posted_jobs.json: 2237 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T03:20:39.858Z] [BOT] 📍 [ROUTING] "Associate Engineer, Software" @ ORG_1c0f1132 Carribean Group
   Category: TECH (matched: "software")
[2026-01-17T03:20:39.858Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T03:20:39.990Z] [BOT ERROR] ❌ Error posting job Associate Engineer, Software: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Engineer, Software @ ORG_1c0f1132 Carribean Group',
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
[2026-01-17T03:20:39.990Z] [BOT] ❌ Industry post failed: Associate Engineer, Software
⚠️  Channel full error count: 1/5
[2026-01-17T03:20:41.587Z] [BOT ERROR] ❌ Error posting job Associate Engineer, Software: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Engineer, Software @ ORG_1c0f1132 Carribean Group',
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
[2026-01-17T03:20:41.587Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-17T03:20:46.088Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-17T03:20:46.088Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Search E-Commerce" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T03:20:46.217Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer - Search E-Commerce: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer - Search E-Commerce @ TikTok',
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
[2026-01-17T03:20:46.217Z] [BOT] ❌ Industry post failed: Machine Learning Engineer - Search E-Commerce
⚠️  Channel full error count: 2/5
[2026-01-17T03:20:47.834Z] [BOT ERROR] ❌ Error posting job Machine Learning Engineer - Search E-Commerce: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Machine Learning Engineer - Search E-Commerce @ TikTok',
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
[2026-01-17T03:20:47.834Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T03:20:49.335Z] [BOT] 📍 [ROUTING] "Research Scientist, Robotics Research" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-17T03:20:49.335Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T03:20:49.497Z] [BOT ERROR] ❌ Error posting job Research Scientist, Robotics Research: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist, Robotics Research @ NVIDIA',
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
[2026-01-17T03:20:49.497Z] [BOT] ❌ Industry post failed: Research Scientist, Robotics Research
⚠️  Channel full error count: 3/5
[2026-01-17T03:20:51.202Z] [BOT ERROR] ❌ Error posting job Research Scientist, Robotics Research: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Research Scientist, Robotics Research @ NVIDIA',
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
[2026-01-17T03:20:51.202Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-17T03:20:55.704Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T03:20:55.705Z] [BOT] 📍 [ROUTING] "Associate Value Engineer (AI-Driven Data Science & Analytics)" @ ORG_5c4c8ca4
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T03:20:55.844Z] [BOT ERROR] ❌ Error posting job Associate Value Engineer (AI-Driven Data Science & Analytics): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Value Engineer (AI-Driven Data Science & Analytics) @ Celonis',
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
[2026-01-17T03:20:55.844Z] [BOT] ❌ Industry post failed: Associate Value Engineer (AI-Driven Data Science & Analytics)
⚠️  Channel full error count: 4/5
[2026-01-17T03:20:57.474Z] [BOT ERROR] ❌ Error posting job Associate Value Engineer (AI-Driven Data Science & Analytics): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Value Engineer (AI-Driven Data Science & Analytics) @ Celonis',
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
[2026-01-17T03:20:57.474Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T03:21:01.975Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-17T03:21:01.976Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_5a5607df (posted within 7 days)
[2026-01-17T03:21:01.976Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_14b80afa (posted within 7 days)
[2026-01-17T03:21:01.976Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_59bb1083 (posted within 7 days)
[2026-01-17T03:21:01.976Z] [BOT] ⏭️  Skipping duplicate: JID_4a8fafd8 (posted within 7 days)
[2026-01-17T03:21:01.977Z] [BOT] ⏭️  Skipping duplicate: JID_b02011d1-cx_1-job-25024266 (posted within 7 days)
[2026-01-17T03:21:01.977Z] [BOT] ⏭️  Skipping duplicate: JID_2e9f037a (posted within 7 days)
[2026-01-17T03:21:02.097Z] [BOT] ✅ Loaded pending queue: 2816 total (2796 pending, 20 enriched, 0 posted)
[2026-01-17T03:21:02.267Z] [BOT] ✅ Saved pending queue: 2816 total (2796 pending, 14 enriched, 6 posted)
[2026-01-17T03:21:02.267Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T03:21:02.324Z] [BOT] 📂 Loaded 4465 existing routing entries
[2026-01-17T03:21:02.389Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4475
   Timestamp: 2026-01-17T03:21:02.371Z
[2026-01-17T03:21:02.390Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T03:21:02.390Z] [BOT] Total attempts: 20
   Successful: 11
   Failed: 9
   Skipped: 0
[2026-01-17T03:21:02.390Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
[2026-01-17T03:21:02.390Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 2 posts
     3. #🦢・los-angeles: 1 posts
     4. #🌧️・seattle: 1 posts
     5. #🌉・san-francisco: 1 posts
[2026-01-17T03:21:02.390Z] [BOT] [STATS] Channel stats saved
[2026-01-17T03:21:04.415Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3271) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer I: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Engineer, Software: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Engineer, Software
- [BOT ERROR] ❌ Error posting job Associate Engineer, Software: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer - Search E-Commerce: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Machine Learning Engineer - Search E-Commerce
- [BOT ERROR] ❌ Error posting job Machine Learning Engineer - Search E-Commerce: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Research Scientist, Robotics Research: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Research Scientist, Robotics Research
- [BOT ERROR] ❌ Error posting job Research Scientist, Robotics Research: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Value Engineer (AI-Driven Data Science & Analytics): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Value Engineer (AI-Driven Data Science & Analytics)
- [BOT ERROR] ❌ Error posting job Associate Value Engineer (AI-Driven Data Science & Analytics): DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*