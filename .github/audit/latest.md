# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T19:26:48.794Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T19:26:13.690Z] ========================================
[2026-01-18T19:26:13.692Z] Discord Bot Execution Log
[2026-01-18T19:26:13.692Z] Environment: GitHub Actions
[2026-01-18T19:26:13.692Z] Node Version: v20.19.6
[2026-01-18T19:26:13.692Z] ========================================
[2026-01-18T19:26:13.692Z] Environment Variables Check:
[2026-01-18T19:26:13.692Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T19:26:13.692Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.692Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T19:26:13.693Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T19:26:13.693Z] 
Multi-Channel Configuration:
[2026-01-18T19:26:13.693Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.693Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.693Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.693Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.693Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.693Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.693Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.693Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.693Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T19:26:13.693Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T19:26:13.693Z] 
Data Files Check:
[2026-01-18T19:26:13.694Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76985 bytes)
[2026-01-18T19:26:13.705Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1466549 bytes)
[2026-01-18T19:26:13.705Z] 
========================================
[2026-01-18T19:26:13.705Z] Starting Enhanced Discord Bot...
[2026-01-18T19:26:13.705Z] ========================================
[2026-01-18T19:26:14.239Z] [BOT] ✅ Loaded V2 database: 2706 jobs
[2026-01-18T19:26:14.692Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T19:26:14.692Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T19:26:14.693Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T19:26:14.809Z] [BOT] ✅ Loaded pending queue: 2840 total (2820 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Security Risk & Compliance, Cloud & Data Center at anthropic
[2026-01-18T19:26:14.813Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T19:26:14.813Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-18T19:26:14.813Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-18T19:26:14.814Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-18T19:26:14.814Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-18T19:26:14.814Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T19:26:14.819Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-18T19:26:14.819Z] [BOT] 📍 [ROUTING] "Security Risk & Compliance, Cloud & Data Center" @ anthropic
[2026-01-18T19:26:14.819Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T19:26:14.819Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T19:26:14.824Z] [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T19:26:14.937Z] [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Security Risk & Compliance, Cloud & Data Center @ anthropic',
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
[2026-01-18T19:26:14.938Z] [BOT] ❌ Industry post failed: Security Risk & Compliance, Cloud & Data Center
⚠️  Channel full error count: 1/5
[2026-01-18T19:26:16.620Z] [BOT] ✅ Created forum post: 🏢 Security Risk & Compliance, Cloud & Data Center @ anthropic in #🌉・san-francisco
[2026-01-18T19:26:16.620Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-18T19:26:18.121Z] [BOT] 💾 Marked as posted: Security Risk & Compliance, Cloud & Data Center @ anthropic (instance #1)
[2026-01-18T19:26:18.121Z] [BOT] 💾 BEFORE ARCHIVING: 2707 jobs in database
[2026-01-18T19:26:18.123Z] [BOT] ✅ No jobs to archive (all 2707 jobs within 7-day window)
[2026-01-18T19:26:18.142Z] [BOT] 💾 Saved posted_jobs.json: 2707 active jobs
[2026-01-18T19:26:18.142Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-18T19:26:18.142Z] [BOT] 📍 [ROUTING] "Software Engineer - Artificial Intelligence" @ ORG_b344d80e Boeing Company
[2026-01-18T19:26:18.142Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T19:26:18.547Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Artificial Intelligence @ ORG_b344d80e Boeing Company in #🤖・ai-jobs
[2026-01-18T19:26:18.548Z] [BOT] ✅ Industry: Software Engineer - Artificial Intelligence @ ORG_b344d80e Boeing Company
[2026-01-18T19:26:20.299Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Artificial Intelligence @ ORG_b344d80e Boeing Company in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-18T19:26:21.800Z] [BOT] 💾 Marked as posted: Software Engineer - Artificial Intelligence @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-18T19:26:21.800Z] [BOT] 💾 BEFORE ARCHIVING: 2708 jobs in database
[2026-01-18T19:26:21.802Z] [BOT] ✅ No jobs to archive (all 2708 jobs within 7-day window)
[2026-01-18T19:26:21.818Z] [BOT] 💾 Saved posted_jobs.json: 2708 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T19:26:21.818Z] [BOT] 📍 [ROUTING] "Early Career Talent - Data Engineer" @ ORG_d7d2f0ff Digital
[2026-01-18T19:26:21.818Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T19:26:21.818Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-18T19:26:21.983Z] [BOT] ✅ Created forum post: 🏢 Early Career Talent - Data Engineer @ ORG_d7d2f0ff Digital in #🤖・ai-jobs
  ✅ Industry: Early Career Talent - Data Engineer @ ORG_d7d2f0ff Digital
[2026-01-18T19:26:23.714Z] [BOT] ✅ Created forum post: 🏢 Early Career Talent - Data Engineer @ ORG_d7d2f0ff Digital in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T19:26:25.215Z] [BOT] 💾 Marked as posted: Early Career Talent - Data Engineer @ ORG_d7d2f0ff Digital (instance #1)
[2026-01-18T19:26:25.215Z] [BOT] 💾 BEFORE ARCHIVING: 2709 jobs in database
[2026-01-18T19:26:25.218Z] [BOT] ✅ No jobs to archive (all 2709 jobs within 7-day window)
[2026-01-18T19:26:25.236Z] [BOT] 💾 Saved posted_jobs.json: 2709 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T19:26:28.237Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-18T19:26:28.238Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_316d43c0 Design Systems
[2026-01-18T19:26:28.238Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T19:26:28.490Z] [BOT] ✅ Created forum post: 🏢 C++ Software Engineer @ ORG_316d43c0 Design Systems in #💻・tech-jobs
[2026-01-18T19:26:28.490Z] [BOT] ✅ Industry: C++ Software Engineer @ ORG_316d43c0 Design Systems
[2026-01-18T19:26:30.229Z] [BOT] ✅ Created forum post: 🏢 C++ Software Engineer @ ORG_316d43c0 Design Systems in #🚌・boston
[2026-01-18T19:26:30.229Z] [BOT] ✅ Location: 🚌・boston
[2026-01-18T19:26:31.730Z] [BOT] 💾 Marked as posted: C++ Software Engineer @ ORG_316d43c0 Design Systems (instance #1)
[2026-01-18T19:26:31.730Z] [BOT] 💾 BEFORE ARCHIVING: 2710 jobs in database
[2026-01-18T19:26:31.732Z] [BOT] ✅ No jobs to archive (all 2710 jobs within 7-day window)
[2026-01-18T19:26:31.751Z] [BOT] 💾 Saved posted_jobs.json: 2710 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T19:26:31.752Z] [BOT] 📍 [ROUTING] "Quality Engineer - Principal Quality Engineer" @ ORG_f3f2248d Grumman
[2026-01-18T19:26:31.752Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T19:26:31.879Z] [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman',
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
[2026-01-18T19:26:31.879Z] [BOT] ❌ Industry post failed: Quality Engineer - Principal Quality Engineer
⚠️  Channel full error count: 1/5
[2026-01-18T19:26:33.489Z] [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman',
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
[2026-01-18T19:26:33.489Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-18T19:26:34.989Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Builder Frameworks" @ ORG_a731a58c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T19:26:35.111Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Builder Frameworks @ Twitch',
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
[2026-01-18T19:26:35.111Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Builder Frameworks
⚠️  Channel full error count: 2/5
[2026-01-18T19:26:36.762Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Builder Frameworks @ Twitch',
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
[2026-01-18T19:26:36.762Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T19:26:38.262Z] [BOT] 📍 [ROUTING] "Software Engineer - Level - Space Systems" @ ORG_f3f2248d Grumman
[2026-01-18T19:26:38.263Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T19:26:38.380Z] [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T19:26:38.381Z] [BOT] ❌ Industry post failed: Software Engineer - Level - Space Systems
⚠️  Channel full error count: 3/5
[2026-01-18T19:26:39.988Z] [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T19:26:39.988Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-18T19:26:44.489Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2026-01-18T19:26:44.489Z] [BOT] 📍 [ROUTING] "SAP Analyst" @ ORG_6cd9e83c
[2026-01-18T19:26:44.489Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T19:26:44.631Z] [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-18T19:26:44.631Z] [BOT] ❌ Industry post failed: SAP Analyst
⚠️  Channel full error count: 4/5
[2026-01-18T19:26:46.357Z] [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_64745ef9/threads'
}
[2026-01-18T19:26:46.358Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-18T19:26:47.858Z] [BOT] 📍 [ROUTING] "Geospatial Analyst" @ ORG_eae683eb
[2026-01-18T19:26:47.858Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-18T19:26:48.002Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Geospatial Analyst @ Vantor',
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
[2026-01-18T19:26:48.003Z] [BOT] ❌ Industry post failed: Geospatial Analyst
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #🩺・healthcare-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T19:26:48.003Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
[2026-01-18T19:26:48.003Z] [BOT] Total attempts: 17
   Successful: 7
   Failed: 10
   Skipped: 0
[2026-01-18T19:26:48.004Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T19:26:48.004Z] [BOT] Last cleanup: Never
   Total posts: 7
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 2 posts
[2026-01-18T19:26:48.004Z] [BOT] 2. #🤖・ai-jobs: 2 posts
     3. #🌧️・seattle: 1 posts
     4. #💻・tech-jobs: 1 posts
     5. #🚌・boston: 1 posts
[2026-01-18T19:26:48.004Z] [BOT] [STATS] Channel stats saved
[2026-01-18T19:26:48.004Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T19:26:48.018Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Security Risk & Compliance, Cloud & Data Center: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Security Risk & Compliance, Cloud & Data Center
- [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Quality Engineer - Principal Quality Engineer
- [BOT ERROR] ❌ Error posting job Quality Engineer - Principal Quality Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Builder Frameworks
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Builder Frameworks: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Level - Space Systems
- [BOT ERROR] ❌ Error posting job Software Engineer - Level - Space Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: SAP Analyst
- [BOT ERROR] ❌ Error posting job SAP Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Geospatial Analyst: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Geospatial Analyst
- ❌ CRITICAL: Discord channel #🩺・healthcare-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 4 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*