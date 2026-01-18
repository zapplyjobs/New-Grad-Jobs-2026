# Discord Bot Execution Audit
**Timestamp:** 2026-01-18T08:45:34.701Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-18T08:44:55.451Z] ========================================
[2026-01-18T08:44:55.453Z] Discord Bot Execution Log
[2026-01-18T08:44:55.453Z] Environment: GitHub Actions
[2026-01-18T08:44:55.453Z] Node Version: v20.19.6
[2026-01-18T08:44:55.453Z] ========================================
[2026-01-18T08:44:55.453Z] Environment Variables Check:
[2026-01-18T08:44:55.453Z] DISCORD_TOKEN: ✅ Set
[2026-01-18T08:44:55.453Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.453Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-18T08:44:55.453Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-18T08:44:55.453Z] 
Multi-Channel Configuration:
[2026-01-18T08:44:55.453Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.454Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.454Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.454Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.454Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.454Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.454Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.454Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.454Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-18T08:44:55.454Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-18T08:44:55.454Z] 
Data Files Check:
[2026-01-18T08:44:55.455Z] .github/data/new_jobs.json: ✅ Exists (10 items, 79651 bytes)
[2026-01-18T08:44:55.465Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1442321 bytes)
[2026-01-18T08:44:55.465Z] 
========================================
[2026-01-18T08:44:55.465Z] Starting Enhanced Discord Bot...
[2026-01-18T08:44:55.465Z] ========================================
[2026-01-18T08:44:55.990Z] [BOT] ✅ Loaded V2 database: 2662 jobs
[2026-01-18T08:44:56.701Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-18T08:44:56.702Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-18T08:44:56.702Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-18T08:44:56.819Z] [BOT] ✅ Loaded pending queue: 2848 total (2828 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Backend Engineer, Ads Product & Tech at spotify
[2026-01-18T08:44:56.822Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-18T08:44:56.822Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2026-01-18T08:44:56.920Z] [BOT] ✅ Loaded pending queue: 2848 total (2828 pending, 20 enriched, 0 posted)
[2026-01-18T08:44:57.093Z] [BOT] ✅ Saved pending queue: 2847 total (2828 pending, 19 enriched, 0 posted)
[2026-01-18T08:44:57.094Z] [BOT] 🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 19 jobs (1 blacklisted)
[2026-01-18T08:44:57.094Z] [BOT] 📋 After data quality filter: 19 jobs (0 invalid)
[2026-01-18T08:44:57.095Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-18T08:44:57.095Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-18T08:44:57.100Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-18T08:44:57.100Z] [BOT] 📍 [ROUTING] "Backend Engineer, Ads Product & Tech" @ spotify
[2026-01-18T08:44:57.101Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T08:44:57.105Z] [BOT ERROR] (node:3208) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-18T08:44:57.323Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer, Ads Product & Tech @ spotify in #💻・tech-jobs
  ✅ Industry: Backend Engineer, Ads Product & Tech @ spotify
[2026-01-18T08:44:59.204Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer, Ads Product & Tech @ spotify in #🗽・new-york
[2026-01-18T08:44:59.204Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-18T08:45:00.705Z] [BOT] 💾 Marked as posted: Backend Engineer, Ads Product & Tech @ spotify (instance #1)
[2026-01-18T08:45:00.705Z] [BOT] 💾 BEFORE ARCHIVING: 2663 jobs in database
[2026-01-18T08:45:00.707Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-18T08:45:00.712Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-18T08:45:00.712Z] [BOT] ✅ Archiving complete: 1 archived, 2662 active
[2026-01-18T08:45:00.730Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-18T08:45:00.730Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Martech Software Engineer" @ ORG_48e1f12a Properties
   Category: TECH (matched: "software")
[2026-01-18T08:45:00.731Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T08:45:00.933Z] [BOT] ✅ Created forum post: 🏢 Martech Software Engineer @ ORG_48e1f12a Properties in #💻・tech-jobs
[2026-01-18T08:45:00.933Z] [BOT] ✅ Industry: Martech Software Engineer @ ORG_48e1f12a Properties
[2026-01-18T08:45:02.661Z] [BOT] ✅ Created forum post: 🏢 Martech Software Engineer @ ORG_48e1f12a Properties in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-18T08:45:04.161Z] [BOT] 💾 Marked as posted: Martech Software Engineer @ ORG_48e1f12a Properties (instance #1)
[2026-01-18T08:45:04.161Z] [BOT] 💾 BEFORE ARCHIVING: 2663 jobs in database
[2026-01-18T08:45:04.163Z] [BOT] ✅ No jobs to archive (all 2663 jobs within 7-day window)
[2026-01-18T08:45:04.180Z] [BOT] 💾 Saved posted_jobs.json: 2663 active jobs
[2026-01-18T08:45:04.181Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Senior Hardware Reliability Engineer" @ samsara
[2026-01-18T08:45:04.181Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-18T08:45:04.730Z] [BOT] ✅ Created forum post: 🏢 Senior Hardware Reliability Engineer @ samsara in #💻・tech-jobs
  ✅ Industry: Senior Hardware Reliability Engineer @ samsara
[2026-01-18T08:45:06.441Z] [BOT] ✅ Created forum post: 🏢 Senior Hardware Reliability Engineer @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-18T08:45:07.942Z] [BOT] 💾 Marked as posted: Senior Hardware Reliability Engineer @ samsara (instance #1)
[2026-01-18T08:45:07.942Z] [BOT] 💾 BEFORE ARCHIVING: 2664 jobs in database
[2026-01-18T08:45:07.944Z] [BOT] ✅ No jobs to archive (all 2664 jobs within 7-day window)
[2026-01-18T08:45:07.963Z] [BOT] 💾 Saved posted_jobs.json: 2664 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-18T08:45:10.964Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-18T08:45:10.965Z] [BOT] 📍 [ROUTING] "Senior Sales Engineer" @ datadog
[2026-01-18T08:45:10.965Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T08:45:11.147Z] [BOT ERROR] ❌ Error posting job Senior Sales Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Sales Engineer @ datadog',
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
[2026-01-18T08:45:11.148Z] [BOT] ❌ Industry post failed: Senior Sales Engineer
⚠️  Channel full error count: 1/5
[2026-01-18T08:45:12.833Z] [BOT ERROR] ❌ Error posting job Senior Sales Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Sales Engineer @ datadog',
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
[2026-01-18T08:45:12.833Z] [BOT] ⚠️ Location post failed: 🌆・chicago
[2026-01-18T08:45:14.334Z] [BOT] 📍 [ROUTING] "Revenue Systems Solution Architect" @ anthropic
[2026-01-18T08:45:14.335Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-18T08:45:14.489Z] [BOT ERROR] ❌ Error posting job Revenue Systems Solution Architect: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Revenue Systems Solution Architect @ anthropic',
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
[2026-01-18T08:45:14.489Z] [BOT] ❌ Industry post failed: Revenue Systems Solution Architect
⚠️  Channel full error count: 2/5
[2026-01-18T08:45:16.136Z] [BOT ERROR] ❌ Error posting job Revenue Systems Solution Architect: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Revenue Systems Solution Architect @ anthropic',
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
[2026-01-18T08:45:16.136Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T08:45:20.637Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-18T08:45:20.638Z] [BOT] 📍 [ROUTING] "Software Engineer - Spanner Hybrid Search" @ ORG_ce770667
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-18T08:45:20.638Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-18T08:45:20.814Z] [BOT ERROR] ❌ Error posting job Software Engineer - Spanner Hybrid Search: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🟢 Software Engineer - Spanner Hybrid Search @ Google',
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
[2026-01-18T08:45:20.814Z] [BOT] ❌ Industry post failed: Software Engineer - Spanner Hybrid Search
⚠️  Channel full error count: 3/5
[2026-01-18T08:45:22.467Z] [BOT ERROR] ❌ Error posting job Software Engineer - Spanner Hybrid Search: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🟢 Software Engineer - Spanner Hybrid Search @ Google',
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
  url: 'https://discord.com/api/v10/channels/CH_b6c0c805/threads'
}
[2026-01-18T08:45:22.467Z] [BOT] ⚠️ Location post failed: ☀️・sunnyvale
[2026-01-18T08:45:26.969Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-18T08:45:26.969Z] [BOT] 📍 [ROUTING] "Strategic Sourcing Manager" @ discord
[2026-01-18T08:45:26.969Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-18T08:45:27.170Z] [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Strategic Sourcing Manager @ discord',
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
  url: 'https://discord.com/api/v10/channels/CH_61c65c32/threads'
}
[2026-01-18T08:45:27.170Z] [BOT] ❌ Industry post failed: Strategic Sourcing Manager
⚠️  Channel full error count: 4/5
[2026-01-18T08:45:28.808Z] [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Strategic Sourcing Manager @ discord',
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
[2026-01-18T08:45:28.808Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-18T08:45:33.310Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-18T08:45:33.310Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_0a732051
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-18T08:45:33.310Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-18T08:45:33.505Z] [BOT ERROR] ❌ Error posting job Associate Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Data Scientist @ Haleon',
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
[2026-01-18T08:45:33.505Z] [BOT] ❌ Industry post failed: Associate Data Scientist
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #📈・JID_fb739488 is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 6 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-18T08:45:33.506Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e14c6ebd.jsonl
   Total attempts: 16
   Successful: 6
[2026-01-18T08:45:33.506Z] [BOT] Failed: 9
   Skipped: 1
[2026-01-18T08:45:33.506Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-18T08:45:33.506Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
[2026-01-18T08:45:33.506Z] [BOT] 1. #💻・tech-jobs: 3 posts
     2. #🗽・new-york: 1 posts
     3. #💻・remote-usa: 1 posts
     4. #🌉・san-francisco: 1 posts
[2026-01-18T08:45:33.506Z] [BOT] [STATS] Channel stats saved
[2026-01-18T08:45:33.507Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_b8747bd4.json
[2026-01-18T08:45:33.524Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3208) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Sales Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Sales Engineer
- [BOT ERROR] ❌ Error posting job Senior Sales Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Revenue Systems Solution Architect: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Revenue Systems Solution Architect
- [BOT ERROR] ❌ Error posting job Revenue Systems Solution Architect: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer - Spanner Hybrid Search: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer - Spanner Hybrid Search
- [BOT ERROR] ❌ Error posting job Software Engineer - Spanner Hybrid Search: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Strategic Sourcing Manager
- [BOT ERROR] ❌ Error posting job Strategic Sourcing Manager: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Associate Data Scientist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Associate Data Scientist
- ❌ CRITICAL: Discord channel #📈・data-science-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 6 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*