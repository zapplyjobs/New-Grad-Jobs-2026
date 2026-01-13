# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T11:39:39.278Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 10
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T11:39:07.784Z] ========================================
[2026-01-13T11:39:07.786Z] Discord Bot Execution Log
[2026-01-13T11:39:07.787Z] Environment: GitHub Actions
[2026-01-13T11:39:07.787Z] Node Version: v20.19.6
[2026-01-13T11:39:07.787Z] ========================================
[2026-01-13T11:39:07.787Z] Environment Variables Check:
[2026-01-13T11:39:07.787Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T11:39:07.787Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.787Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T11:39:07.787Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T11:39:07.787Z] 
Multi-Channel Configuration:
[2026-01-13T11:39:07.787Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.787Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.787Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.788Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.788Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.788Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.788Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.788Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.788Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T11:39:07.788Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T11:39:07.788Z] 
Data Files Check:
[2026-01-13T11:39:07.789Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149783 bytes)
[2026-01-13T11:39:07.792Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 469412 bytes)
[2026-01-13T11:39:07.792Z] 
========================================
[2026-01-13T11:39:07.792Z] Starting Enhanced Discord Bot...
[2026-01-13T11:39:07.792Z] ========================================
[2026-01-13T11:39:08.324Z] [BOT] ✅ Loaded V2 database: 888 jobs
[2026-01-13T11:39:08.772Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T11:39:08.772Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T11:39:08.772Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T11:39:08.877Z] [BOT] ✅ Loaded pending queue: 2704 total (2684 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analytics Associate 1 at BlueLabs Analytics
[2026-01-13T11:39:08.880Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T11:39:08.881Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T11:39:08.881Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T11:39:08.882Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-13T11:39:08.882Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Product Designer - DeepSky @ airtable: san francisco, ca;, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T11:39:08.882Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T11:39:08.886Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-13T11:39:08.887Z] [BOT] 📍 [ROUTING] "Analytics Associate 1" @ ORG_75e49207 Analytics
[2026-01-13T11:39:08.887Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T11:39:08.891Z] [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T11:39:08.994Z] [BOT ERROR] ❌ Error posting job Analytics Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-13T11:39:08.994Z] [BOT] ❌ Industry post failed: Analytics Associate 1
⚠️  Channel full error count: 1/5
[2026-01-13T11:39:10.725Z] [BOT] ✅ Created forum post: 🏢 Analytics Associate 1 @ ORG_75e49207 Analytics in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T11:39:12.226Z] [BOT] 💾 Marked as posted: Analytics Associate 1 @ ORG_75e49207 Analytics (instance #1)
[2026-01-13T11:39:12.227Z] [BOT] 💾 BEFORE ARCHIVING: 889 jobs in database
[2026-01-13T11:39:12.228Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T11:39:12.233Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
✅ Archiving complete: 3 archived, 886 active
[2026-01-13T11:39:12.242Z] [BOT] 💾 Saved posted_jobs.json: 886 active jobs
[2026-01-13T11:39:12.242Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T11:39:12.242Z] [BOT] 📍 [ROUTING] "Data Engineer" @ airtable
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T11:39:12.515Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ airtable in #📈・JID_fb739488
[2026-01-13T11:39:12.515Z] [BOT] ✅ Industry: Data Engineer @ airtable
[2026-01-13T11:39:14.177Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T11:39:15.677Z] [BOT] 💾 Marked as posted: Data Engineer @ airtable (instance #1)
[2026-01-13T11:39:15.677Z] [BOT] 💾 BEFORE ARCHIVING: 887 jobs in database
[2026-01-13T11:39:15.678Z] [BOT] ✅ No jobs to archive (all 887 jobs within 7-day window)
[2026-01-13T11:39:15.683Z] [BOT] 💾 Saved posted_jobs.json: 887 active jobs
[2026-01-13T11:39:15.684Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T11:39:18.684Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-13T11:39:18.684Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T11:39:18.994Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ Q2
[2026-01-13T11:39:20.678Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T11:39:22.178Z] [BOT] 💾 Marked as posted: Software Engineer @ Q2 (instance #1)
[2026-01-13T11:39:22.178Z] [BOT] 💾 BEFORE ARCHIVING: 888 jobs in database
[2026-01-13T11:39:22.179Z] [BOT] ✅ No jobs to archive (all 888 jobs within 7-day window)
[2026-01-13T11:39:22.186Z] [BOT] 💾 Saved posted_jobs.json: 888 active jobs
[2026-01-13T11:39:22.186Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T11:39:25.187Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-13T11:39:25.187Z] [BOT] 📍 [ROUTING] "Executive Assistant, Product Support " @ figma
   Category: SALES (matched: "sales")
[2026-01-13T11:39:25.188Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T11:39:25.334Z] [BOT ERROR] ❌ Error posting job Executive Assistant, Product Support : DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-13T11:39:25.334Z] [BOT] ❌ Industry post failed: Executive Assistant, Product Support 
⚠️  Channel full error count: 1/5
[2026-01-13T11:39:26.951Z] [BOT ERROR] ❌ Error posting job Executive Assistant, Product Support : DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-13T11:39:26.951Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T11:39:28.451Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Accounts" @ airtable
   Category: SALES (matched: "sales")
[2026-01-13T11:39:28.451Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T11:39:28.636Z] [BOT ERROR] ❌ Error posting job Account Executive, Commercial Accounts: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2026-01-13T11:39:28.636Z] [BOT] ❌ Industry post failed: Account Executive, Commercial Accounts
⚠️  Channel full error count: 2/5
[2026-01-13T11:39:30.280Z] [BOT ERROR] ❌ Error posting job Account Executive, Commercial Accounts: DiscordAPIError[160006]: Maximum number of active threads reached
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
  url: 'https://discord.com/api/v10/channels/CH_c4049df6/threads'
}
[2026-01-13T11:39:30.280Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-13T11:39:31.780Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ airtable
   Category: SALES (matched: "sales")
[2026-01-13T11:39:31.780Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T11:39:31.918Z] [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Development Representative @ airtable',
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
[2026-01-13T11:39:31.919Z] [BOT] ❌ Industry post failed: Business Development Representative
⚠️  Channel full error count: 3/5
[2026-01-13T11:39:33.549Z] [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Business Development Representative @ airtable',
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
[2026-01-13T11:39:33.549Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-13T11:39:35.049Z] [BOT] 📍 [ROUTING] "Field Marketing Specialist, West" @ airtable
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T11:39:35.205Z] [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Field Marketing Specialist, West @ airtable',
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
[2026-01-13T11:39:35.205Z] [BOT] ❌ Industry post failed: Field Marketing Specialist, West
⚠️  Channel full error count: 4/5
[2026-01-13T11:39:36.834Z] [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Field Marketing Specialist, West @ airtable',
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
[2026-01-13T11:39:36.834Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-13T11:39:38.336Z] [BOT] 📍 [ROUTING] "Lead Solutions Consultant" @ airtable
[2026-01-13T11:39:38.336Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T11:39:38.528Z] [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Lead Solutions Consultant @ airtable',
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
[2026-01-13T11:39:38.528Z] [BOT] ❌ Industry post failed: Lead Solutions Consultant
⚠️  Channel full error count: 5/5
❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
💡 ACTION REQUIRED: Archive old threads in Discord channel to make room for new posts.
[2026-01-13T11:39:38.529Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T11:39:38.529Z] [BOT] Total attempts: 15
   Successful: 5
   Failed: 10
   Skipped: 0
[2026-01-13T11:39:38.529Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T11:39:38.529Z] [BOT] Last cleanup: Never
   Total posts: 5
   Channels used: 5
   Top channels:
     1. #💻・remote-usa: 1 posts
     2. #📈・JID_fb739488: 1 posts
[2026-01-13T11:39:38.529Z] [BOT] 3. #🌉・san-francisco: 1 posts
     4. #💻・tech-jobs: 1 posts
     5. #🤠・austin: 1 posts
[2026-01-13T11:39:38.530Z] [BOT] [STATS] Channel stats saved
[2026-01-13T11:39:38.530Z] [BOT] 💾 Plaintext routing log saved (local only): /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.local/logs/JID_1242ab09.json
[2026-01-13T11:39:38.542Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Analytics Associate 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Analytics Associate 1
- [BOT ERROR] ❌ Error posting job Executive Assistant, Product Support : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Executive Assistant, Product Support
- [BOT ERROR] ❌ Error posting job Executive Assistant, Product Support : DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Account Executive, Commercial Accounts: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Account Executive, Commercial Accounts
- [BOT ERROR] ❌ Error posting job Account Executive, Commercial Accounts: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Business Development Representative
- [BOT ERROR] ❌ Error posting job Business Development Representative: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Field Marketing Specialist, West
- [BOT ERROR] ❌ Error posting job Field Marketing Specialist, West: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Lead Solutions Consultant: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Lead Solutions Consultant
- ❌ CRITICAL: Discord channel #💲・sales-jobs is full (max active threads reached)
- ❌ Exiting early to avoid timeout. 3 jobs posted, 5 failed.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*