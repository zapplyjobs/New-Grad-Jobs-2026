# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T18:29:25.747Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 9
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T18:28:35.347Z] ========================================
[2026-01-16T18:28:35.349Z] Discord Bot Execution Log
[2026-01-16T18:28:35.349Z] Environment: GitHub Actions
[2026-01-16T18:28:35.349Z] Node Version: v20.19.6
[2026-01-16T18:28:35.349Z] ========================================
[2026-01-16T18:28:35.349Z] Environment Variables Check:
[2026-01-16T18:28:35.349Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T18:28:35.349Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.349Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T18:28:35.349Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T18:28:35.349Z] 
Multi-Channel Configuration:
[2026-01-16T18:28:35.349Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.350Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.350Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.350Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.350Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.350Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.350Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.350Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.350Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T18:28:35.350Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T18:28:35.350Z] 
Data Files Check:
[2026-01-16T18:28:35.351Z] .github/data/new_jobs.json: ✅ Exists (10 items, 45231 bytes)
[2026-01-16T18:28:35.359Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1096453 bytes)
[2026-01-16T18:28:35.359Z] 
========================================
[2026-01-16T18:28:35.359Z] Starting Enhanced Discord Bot...
[2026-01-16T18:28:35.359Z] ========================================
[2026-01-16T18:28:35.893Z] [BOT] ✅ Loaded V2 database: 2031 jobs
[2026-01-16T18:28:36.739Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T18:28:36.739Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T18:28:36.740Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T18:28:36.852Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Digital Engineering Rotational Aspire at American Bureau of Shipping
[2026-01-16T18:28:36.855Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T18:28:36.856Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T18:28:36.856Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T18:28:36.857Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T18:28:36.857Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T18:28:36.857Z] [BOT] - Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ Oracle: seattle, nashville
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T18:28:36.861Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-16T18:28:36.862Z] [BOT] 📍 [ROUTING] "Digital Engineering Rotational Aspire" @ ORG_0baaf6f2 Bureau of Shipping
[2026-01-16T18:28:36.862Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:28:36.880Z] [BOT ERROR] (node:2627) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T18:28:37.048Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping',
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
[2026-01-16T18:28:37.048Z] [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
⚠️  Channel full error count: 1/5
[2026-01-16T18:28:38.675Z] [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Digital Engineering Rotational Aspire @ ORG_0baaf6f2 Bureau of Shipping',
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-16T18:28:38.675Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-16T18:28:40.176Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_961a6062
[2026-01-16T18:28:40.176Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:28:40.303Z] [BOT ERROR] ❌ Error posting job Software Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '💳 Software Engineer – New Grad @ Stripe',
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
[2026-01-16T18:28:40.303Z] [BOT] ❌ Industry post failed: Software Engineer – New Grad
⚠️  Channel full error count: 2/5
[2026-01-16T18:28:41.934Z] [BOT ERROR] ❌ Error posting job Software Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '💳 Software Engineer – New Grad @ Stripe',
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
[2026-01-16T18:28:41.934Z] [BOT] ⚠️ Location post failed: 🌧️・seattle
[2026-01-16T18:28:43.436Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
[2026-01-16T18:28:43.436Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:28:43.624Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🚀 Software Engineer @ SpaceX',
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
[2026-01-16T18:28:43.624Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 3/5
[2026-01-16T18:28:45.276Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🚀 Software Engineer @ SpaceX',
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
[2026-01-16T18:28:45.277Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2026-01-16T18:28:46.778Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_973a4a81
   Category: TECH (matched: "software")
[2026-01-16T18:28:46.779Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:28:46.986Z] [BOT] ✅ Created forum post: 🔵 Software Developer @ ORG_973a4a81 in #💻・tech-jobs
[2026-01-16T18:28:46.986Z] [BOT] ✅ Industry: Software Developer @ ORG_973a4a81
[2026-01-16T18:28:48.661Z] [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🔵 Software Developer @ IBM',
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
[2026-01-16T18:28:48.662Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-16T18:28:50.162Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_973a4a81 (instance #1)
[2026-01-16T18:28:50.163Z] [BOT] 💾 BEFORE ARCHIVING: 2032 jobs in database
[2026-01-16T18:28:50.165Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T18:28:50.166Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-16T18:28:50.166Z] [BOT] ✅ Archiving complete: 1 archived, 2031 active
[2026-01-16T18:28:50.181Z] [BOT] 💾 Saved posted_jobs.json: 2031 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:28:50.182Z] [BOT] 📍 [ROUTING] "New Graduate Engineer - Software - Starlink" @ ORG_afd623b1
[2026-01-16T18:28:50.182Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T18:28:50.503Z] [BOT] ✅ Created forum post: 🚀 New Graduate Engineer - Software - Starlink @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-16T18:28:50.503Z] [BOT] ✅ Industry: New Graduate Engineer - Software - Starlink @ ORG_afd623b1
[2026-01-16T18:28:52.199Z] [BOT] ✅ Created forum post: 🚀 New Graduate Engineer - Software - Starlink @ ORG_afd623b1 in #🖥️・redmond
[2026-01-16T18:28:52.199Z] [BOT] ✅ Location: 🖥️・redmond
[2026-01-16T18:28:53.701Z] [BOT] 💾 Marked as posted: New Graduate Engineer - Software - Starlink @ ORG_afd623b1 (instance #1)
[2026-01-16T18:28:53.701Z] [BOT] 💾 BEFORE ARCHIVING: 2032 jobs in database
[2026-01-16T18:28:53.703Z] [BOT] ✅ No jobs to archive (all 2032 jobs within 7-day window)
[2026-01-16T18:28:53.717Z] [BOT] 💾 Saved posted_jobs.json: 2032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:28:56.718Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-16T18:28:56.719Z] [BOT] 📍 [ROUTING] "Software Engineer – University Grad" @ ORG_30b5b45b
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T18:28:56.719Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T18:28:56.884Z] [BOT ERROR] ❌ Error posting job Software Engineer – University Grad: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer – University Grad @ Glean',
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
[2026-01-16T18:28:56.884Z] [BOT] ❌ Industry post failed: Software Engineer – University Grad
⚠️  Channel full error count: 1/5
[2026-01-16T18:28:58.800Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – University Grad @ ORG_30b5b45b in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T18:29:00.302Z] [BOT] 💾 Marked as posted: Software Engineer – University Grad @ ORG_30b5b45b (instance #1)
[2026-01-16T18:29:00.302Z] [BOT] 💾 BEFORE ARCHIVING: 2033 jobs in database
[2026-01-16T18:29:00.303Z] [BOT] ✅ No jobs to archive (all 2033 jobs within 7-day window)
[2026-01-16T18:29:00.318Z] [BOT] 💾 Saved posted_jobs.json: 2033 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:29:00.319Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_7a332bb8
[2026-01-16T18:29:00.319Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T18:29:00.779Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_7a332bb8 in #🤖・ai-jobs
[2026-01-16T18:29:00.779Z] [BOT] ✅ Industry: Software Engineer @ ORG_7a332bb8
[2026-01-16T18:29:02.450Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Ivo',
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
[2026-01-16T18:29:02.451Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-16T18:29:03.952Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_7a332bb8 (instance #1)
[2026-01-16T18:29:03.952Z] [BOT] 💾 BEFORE ARCHIVING: 2034 jobs in database
[2026-01-16T18:29:03.954Z] [BOT] ✅ No jobs to archive (all 2034 jobs within 7-day window)
[2026-01-16T18:29:03.966Z] [BOT] 💾 Saved posted_jobs.json: 2034 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:29:03.966Z] [BOT] 📍 [ROUTING] "AI Trainer for Thermodynamics - Freelance - Remote" @ ORG_ef39485b
   Category: AI (matched: "machine learning")
[2026-01-16T18:29:03.967Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T18:29:04.270Z] [BOT] ✅ Created forum post: 🏢 AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b in #🤖・ai-jobs
[2026-01-16T18:29:04.271Z] [BOT] ✅ Industry: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b
[2026-01-16T18:29:06.004Z] [BOT] ✅ Created forum post: 🏢 AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T18:29:07.506Z] [BOT] 💾 Marked as posted: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b (instance #1)
[2026-01-16T18:29:07.506Z] [BOT] 💾 BEFORE ARCHIVING: 2035 jobs in database
[2026-01-16T18:29:07.507Z] [BOT] ✅ No jobs to archive (all 2035 jobs within 7-day window)
[2026-01-16T18:29:07.521Z] [BOT] 💾 Saved posted_jobs.json: 2035 active jobs
[2026-01-16T18:29:07.521Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T18:29:10.521Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-16T18:29:10.522Z] [BOT] 📍 [ROUTING] "Head of Databases" @ supabase
[2026-01-16T18:29:10.522Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-16T18:29:10.957Z] [BOT] ✅ Created forum post: 🏢 Head of Databases @ supabase in #📣・marketing-jobs
  ✅ Industry: Head of Databases @ supabase
[2026-01-16T18:29:12.459Z] [BOT] 💾 Marked as posted: Head of Databases @ supabase (instance #1)
💾 BEFORE ARCHIVING: 2036 jobs in database
[2026-01-16T18:29:12.461Z] [BOT] ✅ No jobs to archive (all 2036 jobs within 7-day window)
[2026-01-16T18:29:12.474Z] [BOT] 💾 Saved posted_jobs.json: 2036 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:29:15.475Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T18:29:15.475Z] [BOT] 📍 [ROUTING] "Data Operations Associate" @ ORG_73571e71
[2026-01-16T18:29:15.476Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T18:29:15.849Z] [BOT] ✅ Created forum post: 🏢 Data Operations Associate @ ORG_73571e71 in #📈・JID_fb739488
  ✅ Industry: Data Operations Associate @ ORG_73571e71
[2026-01-16T18:29:17.627Z] [BOT] ✅ Created forum post: 🏢 Data Operations Associate @ ORG_73571e71 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T18:29:19.127Z] [BOT] 💾 Marked as posted: Data Operations Associate @ ORG_73571e71 (instance #1)
[2026-01-16T18:29:19.128Z] [BOT] 💾 BEFORE ARCHIVING: 2037 jobs in database
[2026-01-16T18:29:19.129Z] [BOT] ✅ No jobs to archive (all 2037 jobs within 7-day window)
[2026-01-16T18:29:19.146Z] [BOT] 💾 Saved posted_jobs.json: 2037 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T18:29:22.146Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-16T18:29:22.147Z] [BOT] ⏭️  Skipping duplicate: JID_79d429ed (posted within 7 days)
[2026-01-16T18:29:22.147Z] [BOT] ⏭️  Skipping duplicate: JID_ef27b687 (posted within 7 days)
[2026-01-16T18:29:22.148Z] [BOT] ⏭️  Skipping duplicate: JID_1d431543 (posted within 7 days)
⏭️  Skipping duplicate: JID_7e478f71-en_us-careers-jobdetail (posted within 7 days)
[2026-01-16T18:29:22.148Z] [BOT] ⏭️  Skipping duplicate: JID_cc398c47 (posted within 7 days)
⏭️  Skipping duplicate: JID_9add9dac (posted within 7 days)
[2026-01-16T18:29:22.148Z] [BOT] ⏭️  Skipping duplicate: JID_10eefdf5 (posted within 7 days)
[2026-01-16T18:29:22.266Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[2026-01-16T18:29:22.446Z] [BOT] ✅ Saved pending queue: 2777 total (2757 pending, 13 enriched, 7 posted)
[2026-01-16T18:29:22.446Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T18:29:22.503Z] [BOT] 📂 Loaded 4255 existing routing entries
[2026-01-16T18:29:22.569Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4265
   Timestamp: 2026-01-16T18:29:22.551Z
[2026-01-16T18:29:22.570Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T18:29:22.570Z] [BOT] Total attempts: 19
   Successful: 10
   Failed: 9
   Skipped: 0
[2026-01-16T18:29:22.570Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🖥️・redmond: 1 posts
     4. #🌉・san-francisco: 1 posts
     5. #💻・remote-usa: 1 posts
[STATS] Channel stats saved
[2026-01-16T18:29:24.596Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2627) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Digital Engineering Rotational Aspire
- [BOT ERROR] ❌ Error posting job Digital Engineering Rotational Aspire: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – New Grad
- [BOT ERROR] ❌ Error posting job Software Engineer – New Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Developer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer – University Grad: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer – University Grad
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*