# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T08:46:52.694Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T08:46:26.368Z] ========================================
[2026-01-13T08:46:26.370Z] Discord Bot Execution Log
[2026-01-13T08:46:26.370Z] Environment: GitHub Actions
[2026-01-13T08:46:26.371Z] Node Version: v20.19.6
[2026-01-13T08:46:26.371Z] ========================================
[2026-01-13T08:46:26.371Z] Environment Variables Check:
[2026-01-13T08:46:26.371Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T08:46:26.371Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.371Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T08:46:26.371Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T08:46:26.371Z] 
Multi-Channel Configuration:
[2026-01-13T08:46:26.371Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.371Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.372Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.372Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.372Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.372Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.372Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.372Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.372Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T08:46:26.372Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T08:46:26.372Z] 
Data Files Check:
[2026-01-13T08:46:26.373Z] .github/data/new_jobs.json: ✅ Exists (10 items, 129356 bytes)
[2026-01-13T08:46:26.376Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 468921 bytes)
[2026-01-13T08:46:26.377Z] 
========================================
[2026-01-13T08:46:26.377Z] Starting Enhanced Discord Bot...
[2026-01-13T08:46:26.377Z] ========================================
[2026-01-13T08:46:26.917Z] [BOT] ✅ Loaded V2 database: 887 jobs
[2026-01-13T08:46:27.881Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T08:46:27.881Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T08:46:27.881Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T08:46:28.012Z] [BOT] ✅ Loaded pending queue: 2701 total (2681 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Software Engineer - Baseball Enterprise at Major League Baseball
[2026-01-13T08:46:28.015Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T08:46:28.015Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T08:46:28.016Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T08:46:28.016Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-13T08:46:28.017Z] [BOT] 📍 1 jobs with multiple locations:
   - Product Designer - DeepSky @ airtable: san francisco, ca;, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T08:46:28.021Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-13T08:46:28.022Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Baseball Enterprise" @ ORG_2bc58fcc League Baseball
[2026-01-13T08:46:28.022Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T08:46:28.026Z] [BOT ERROR] (node:2376) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T08:46:28.294Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball
[2026-01-13T08:46:29.956Z] [BOT ERROR] ❌ Error posting job Associate Software Engineer - Baseball Enterprise: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball',
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
[2026-01-13T08:46:29.956Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-13T08:46:31.457Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-13T08:46:31.457Z] [BOT] 💾 BEFORE ARCHIVING: 888 jobs in database
[2026-01-13T08:46:31.458Z] [BOT] ✅ No jobs to archive (all 888 jobs within 7-day window)
[2026-01-13T08:46:31.469Z] [BOT] 💾 Saved posted_jobs.json: 888 active jobs
[2026-01-13T08:46:31.469Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T08:46:31.469Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
   Category: TECH (matched: "software")
[2026-01-13T08:46:31.469Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T08:46:31.627Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Q2',
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
[2026-01-13T08:46:31.628Z] [BOT] ❌ Industry post failed: Software Engineer
⚠️  Channel full error count: 1/5
[2026-01-13T08:46:33.306Z] [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer @ Q2',
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
[2026-01-13T08:46:33.307Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-13T08:46:37.808Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-13T08:46:37.809Z] [BOT] 📍 [ROUTING] "Analytics Associate 1" @ ORG_75e49207 Analytics
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-13T08:46:37.810Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T08:46:38.017Z] [BOT ERROR] ❌ Error posting job Analytics Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Analytics Associate 1 @ ORG_75e49207 Analytics',
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
[2026-01-13T08:46:38.017Z] [BOT] ❌ Industry post failed: Analytics Associate 1
⚠️  Channel full error count: 2/5
[2026-01-13T08:46:39.765Z] [BOT ERROR] ❌ Error posting job Analytics Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Analytics Associate 1 @ ORG_75e49207 Analytics',
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
[2026-01-13T08:46:39.765Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-13T08:46:41.267Z] [BOT] 📍 [ROUTING] "Data Engineer" @ airtable
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T08:46:41.267Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T08:46:41.427Z] [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer @ airtable',
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
[2026-01-13T08:46:41.427Z] [BOT] ❌ Industry post failed: Data Engineer
⚠️  Channel full error count: 3/5
[2026-01-13T08:46:43.117Z] [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Data Engineer @ airtable',
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
[2026-01-13T08:46:43.118Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T08:46:47.620Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-13T08:46:47.620Z] [BOT] 📍 [ROUTING] "Executive Assistant, Product Support " @ figma
[2026-01-13T08:46:47.620Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T08:46:47.796Z] [BOT ERROR] ❌ Error posting job Executive Assistant, Product Support : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Executive Assistant, Product Support  @ figma',
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
[2026-01-13T08:46:47.796Z] [BOT] ❌ Industry post failed: Executive Assistant, Product Support 
⚠️  Channel full error count: 4/5
[2026-01-13T08:46:49.506Z] [BOT ERROR] ❌ Error posting job Executive Assistant, Product Support : DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Executive Assistant, Product Support  @ figma',
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
[2026-01-13T08:46:49.506Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T08:46:51.007Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Accounts" @ airtable
   Category: SALES (matched: "sales")
[2026-01-13T08:46:51.007Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T08:46:51.307Z] [BOT ERROR] ❌ Error posting job Account Executive, Commercial Accounts: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Account Executive, Commercial Accounts @ airtable',
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
[2026-01-13T08:46:51.307Z] [BOT] ❌ Industry post failed: Account Executive, Commercial Accounts
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-13T08:46:51.308Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T08:46:51.310Z] [BOT] Total attempts: 11
   Successful: 1
   Failed: 10
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
     1. #💻・tech-jobs: 1 posts
[STATS] Channel stats saved
💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_1242ab09.json
[2026-01-13T08:46:51.323Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2376) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Associate Software Engineer - Baseball Enterprise: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer
- [BOT ERROR] ❌ Error posting job Software Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Analytics Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Analytics Associate 1
- [BOT ERROR] ❌ Error posting job Analytics Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data Engineer
- [BOT ERROR] ❌ Error posting job Data Engineer: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Executive Assistant, Product Support : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Executive Assistant, Product Support
- [BOT ERROR] ❌ Error posting job Executive Assistant, Product Support : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Account Executive, Commercial Accounts: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Account Executive, Commercial Accounts
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 1 jobs posted, 7 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*