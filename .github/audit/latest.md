# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T09:21:14.105Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T09:20:20.465Z] ========================================
[2026-01-19T09:20:20.467Z] Discord Bot Execution Log
[2026-01-19T09:20:20.467Z] Environment: GitHub Actions
[2026-01-19T09:20:20.467Z] Node Version: v20.19.6
[2026-01-19T09:20:20.467Z] ========================================
[2026-01-19T09:20:20.467Z] Environment Variables Check:
[2026-01-19T09:20:20.467Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T09:20:20.467Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.467Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T09:20:20.467Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T09:20:20.467Z] 
Multi-Channel Configuration:
[2026-01-19T09:20:20.467Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.467Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.467Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.468Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.468Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.468Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.468Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.468Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.468Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T09:20:20.468Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T09:20:20.468Z] 
Data Files Check:
[2026-01-19T09:20:20.469Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140830 bytes)
[2026-01-19T09:20:20.480Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1606199 bytes)
[2026-01-19T09:20:20.480Z] 
========================================
[2026-01-19T09:20:20.480Z] Starting Enhanced Discord Bot...
[2026-01-19T09:20:20.480Z] ========================================
[2026-01-19T09:20:20.935Z] [BOT] ✅ Loaded V2 database: 2954 jobs
[2026-01-19T09:20:21.843Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T09:20:21.843Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T09:20:21.843Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T09:20:22.001Z] [BOT] ✅ Loaded pending queue: 2828 total (2808 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Real Estate Project Manager at anthropic
[2026-01-19T09:20:22.004Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T09:20:22.004Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T09:20:22.004Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T09:20:22.005Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
   (3 grouped as same job with different locations)
[2026-01-19T09:20:22.005Z] [BOT] 📍 1 jobs with multiple locations:
   - Account Executive, E-Commerce  @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T09:20:22.009Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-19T09:20:22.010Z] [BOT] 📍 [ROUTING] "Real Estate Project Manager" @ anthropic
   Category: PROJECT-MANAGEMENT (matched: "project-management")
[2026-01-19T09:20:22.010Z] [BOT] Channel: 📊・JID_9910249a (1391...1276)
[2026-01-19T09:20:22.014Z] [BOT ERROR] (node:2922) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T09:20:22.228Z] [BOT] ✅ Created forum post: 🏢 Real Estate Project Manager @ anthropic in #📊・JID_9910249a
[2026-01-19T09:20:22.228Z] [BOT] ✅ Industry: Real Estate Project Manager @ anthropic
[2026-01-19T09:20:23.999Z] [BOT] ✅ Created forum post: 🏢 Real Estate Project Manager @ anthropic in #🌉・san-francisco
[2026-01-19T09:20:23.999Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T09:20:25.499Z] [BOT] 💾 Marked as posted: Real Estate Project Manager @ anthropic (instance #1)
[2026-01-19T09:20:25.499Z] [BOT] 💾 BEFORE ARCHIVING: 2955 jobs in database
[2026-01-19T09:20:25.501Z] [BOT] ✅ No jobs to archive (all 2955 jobs within 7-day window)
[2026-01-19T09:20:25.522Z] [BOT] 💾 Saved posted_jobs.json: 2955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:20:28.524Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-19T09:20:28.524Z] [BOT] 📍 [ROUTING] "Commercial Counsel, GTM" @ anthropic
[2026-01-19T09:20:28.524Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T09:20:28.915Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, GTM @ anthropic in #💲・sales-jobs
  ✅ Industry: Commercial Counsel, GTM @ anthropic
[2026-01-19T09:20:30.809Z] [BOT] ✅ Created forum post: 🏢 Commercial Counsel, GTM @ anthropic in #🌉・san-francisco
[2026-01-19T09:20:30.810Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T09:20:32.310Z] [BOT] 💾 Marked as posted: Commercial Counsel, GTM @ anthropic (instance #1)
[2026-01-19T09:20:32.310Z] [BOT] 💾 BEFORE ARCHIVING: 2956 jobs in database
[2026-01-19T09:20:32.313Z] [BOT] ✅ No jobs to archive (all 2956 jobs within 7-day window)
[2026-01-19T09:20:32.332Z] [BOT] 💾 Saved posted_jobs.json: 2956 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:20:32.333Z] [BOT] 📍 [ROUTING] "Account Executive, E-Commerce " @ brex
   Category: SALES (matched: "sales")
[2026-01-19T09:20:32.333Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T09:20:32.532Z] [BOT] ✅ Created forum post: 🏢 Account Executive, E-Commerce  @ brex in #💲・sales-jobs
[2026-01-19T09:20:32.532Z] [BOT] ✅ Industry: Account Executive, E-Commerce  @ brex
[2026-01-19T09:20:34.255Z] [BOT] ✅ Created forum post: 🏢 Account Executive, E-Commerce  @ brex in #💻・remote-usa
[2026-01-19T09:20:34.256Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T09:20:35.756Z] [BOT] 💾 Marked as posted: Account Executive, E-Commerce  @ brex (instance #1)
[2026-01-19T09:20:35.756Z] [BOT] 💾 BEFORE ARCHIVING: 2957 jobs in database
[2026-01-19T09:20:35.758Z] [BOT] ✅ No jobs to archive (all 2957 jobs within 7-day window)
[2026-01-19T09:20:35.777Z] [BOT] 💾 Saved posted_jobs.json: 2957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:20:35.777Z] [BOT] 💾 Marked as posted: Account Executive, E-Commerce  @ brex (instance #1)
[2026-01-19T09:20:35.777Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-19T09:20:35.779Z] [BOT] ✅ No jobs to archive (all 2958 jobs within 7-day window)
[2026-01-19T09:20:35.804Z] [BOT] 💾 Saved posted_jobs.json: 2958 active jobs
✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, E-Commerce  @ brex (instance #1)
💾 BEFORE ARCHIVING: 2959 jobs in database
[2026-01-19T09:20:35.805Z] [BOT] ✅ No jobs to archive (all 2959 jobs within 7-day window)
[2026-01-19T09:20:35.823Z] [BOT] 💾 Saved posted_jobs.json: 2959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:20:35.823Z] [BOT] 💾 Marked as posted: Account Executive, E-Commerce  @ brex (instance #1)
[2026-01-19T09:20:35.823Z] [BOT] 💾 BEFORE ARCHIVING: 2960 jobs in database
[2026-01-19T09:20:35.825Z] [BOT] ✅ No jobs to archive (all 2960 jobs within 7-day window)
[2026-01-19T09:20:35.843Z] [BOT] 💾 Saved posted_jobs.json: 2960 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:20:38.844Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-19T09:20:38.845Z] [BOT] 📍 [ROUTING] "Product Counsel, Safety" @ anthropic
[2026-01-19T09:20:38.845Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T09:20:39.227Z] [BOT] ✅ Created forum post: 🏢 Product Counsel, Safety @ anthropic in #🤖・ai-jobs
  ✅ Industry: Product Counsel, Safety @ anthropic
[2026-01-19T09:20:40.945Z] [BOT] ✅ Created forum post: 🏢 Product Counsel, Safety @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T09:20:42.446Z] [BOT] 💾 Marked as posted: Product Counsel, Safety @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 2961 jobs in database
[2026-01-19T09:20:42.448Z] [BOT] ✅ No jobs to archive (all 2961 jobs within 7-day window)
[2026-01-19T09:20:42.465Z] [BOT] 💾 Saved posted_jobs.json: 2961 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:20:42.466Z] [BOT] 📍 [ROUTING] "USA – Tax - Indirect Tax" @ ORG_b54c9975 & Young
   Category: AI (matched: "AI/ML")
[2026-01-19T09:20:42.466Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T09:20:42.830Z] [BOT] ✅ Created forum post: 🏢 USA – Tax - Indirect Tax @ ORG_b54c9975 & Young in #🤖・ai-jobs
  ✅ Industry: USA – Tax - Indirect Tax @ ORG_b54c9975 & Young
[2026-01-19T09:20:44.332Z] [BOT] 💾 Marked as posted: USA – Tax - Indirect Tax @ ORG_b54c9975 & Young (instance #1)
[2026-01-19T09:20:44.332Z] [BOT] 💾 BEFORE ARCHIVING: 2962 jobs in database
[2026-01-19T09:20:44.334Z] [BOT] ✅ No jobs to archive (all 2962 jobs within 7-day window)
[2026-01-19T09:20:44.351Z] [BOT] 💾 Saved posted_jobs.json: 2962 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:20:47.351Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-19T09:20:47.352Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_384b8fa5
[2026-01-19T09:20:47.352Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T09:20:47.755Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_384b8fa5 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_384b8fa5
[2026-01-19T09:20:49.666Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_384b8fa5 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T09:20:51.165Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_384b8fa5 (instance #1)
💾 BEFORE ARCHIVING: 2963 jobs in database
[2026-01-19T09:20:51.168Z] [BOT] ✅ No jobs to archive (all 2963 jobs within 7-day window)
[2026-01-19T09:20:51.186Z] [BOT] 💾 Saved posted_jobs.json: 2963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T09:20:51.186Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Golang" @ ORG_bdf03daa Fintech Solutions
[2026-01-19T09:20:51.186Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T09:20:51.402Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Golang: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Golang @ ORG_bdf03daa Fintech Solutions',
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
[2026-01-19T09:20:51.403Z] [BOT] ❌ Industry post failed: Software Engineer 1 - Golang
⚠️  Channel full error count: 1/5
[2026-01-19T09:20:53.095Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - Golang: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - Golang @ ORG_bdf03daa Fintech Solutions',
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
[2026-01-19T09:20:53.096Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2026-01-19T09:20:54.597Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - US" @ ORG_b6a51c2a Bank
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T09:20:54.735Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - US: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - US @ ORG_b6a51c2a Bank',
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
[2026-01-19T09:20:54.736Z] [BOT] ❌ Industry post failed: Software Engineer 1 - US
⚠️  Channel full error count: 2/5
[2026-01-19T09:20:56.375Z] [BOT ERROR] ❌ Error posting job Software Engineer 1 - US: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Software Engineer 1 - US @ ORG_b6a51c2a Bank',
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
[2026-01-19T09:20:56.375Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2026-01-19T09:20:57.876Z] [BOT] 📍 [ROUTING] "New Graduate Engineer - Software - Starlink" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T09:20:57.995Z] [BOT ERROR] ❌ Error posting job New Graduate Engineer - Software - Starlink: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🚀 New Graduate Engineer - Software - Starlink @ SpaceX',
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
[2026-01-19T09:20:57.995Z] [BOT] ❌ Industry post failed: New Graduate Engineer - Software - Starlink
⚠️  Channel full error count: 3/5
[2026-01-19T09:20:59.617Z] [BOT ERROR] ❌ Error posting job New Graduate Engineer - Software - Starlink: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🚀 New Graduate Engineer - Software - Starlink @ SpaceX',
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
  url: 'https://discord.com/api/v10/channels/CH_d1351d51/threads'
}
[2026-01-19T09:20:59.618Z] [BOT] ⚠️ Location post failed: 🖥️・redmond
[2026-01-19T09:21:04.120Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-19T09:21:04.120Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Enterprise SLED East)" @ verkada
   Category: MARKETING (matched: "marketing")
[2026-01-19T09:21:04.120Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T09:21:04.287Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada',
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
[2026-01-19T09:21:04.287Z] [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
⚠️  Channel full error count: 4/5
[2026-01-19T09:21:05.907Z] [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada',
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
[2026-01-19T09:21:05.907Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-19T09:21:10.409Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 4
[2026-01-19T09:21:10.409Z] [BOT] ⏭️  Skipping duplicate: JID_e4f7b470 (posted within 7 days)
[2026-01-19T09:21:10.409Z] [BOT] ⏭️  Skipping duplicate: JID_b5eff580 (posted within 7 days)
[2026-01-19T09:21:10.410Z] [BOT] ⏭️  Skipping duplicate: JID_1c275a12 (posted within 7 days)
[2026-01-19T09:21:10.410Z] [BOT] ⏭️  Skipping duplicate: JID_a8d325f4 (posted within 7 days)
[2026-01-19T09:21:10.410Z] [BOT] ⏭️  Skipping duplicate: JID_a3cb960f (posted within 7 days)
[2026-01-19T09:21:10.410Z] [BOT] ⏭️  Skipping duplicate: JID_08bb9387 (posted within 7 days)
[2026-01-19T09:21:10.568Z] [BOT] ✅ Loaded pending queue: 2828 total (2808 pending, 20 enriched, 0 posted)
[2026-01-19T09:21:10.743Z] [BOT] ✅ Saved pending queue: 2828 total (2808 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-19T09:21:10.743Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-19T09:21:10.808Z] [BOT] 📂 Loaded 5105 existing routing entries
[2026-01-19T09:21:10.875Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5115
   Timestamp: 2026-01-19T09:21:10.857Z
[2026-01-19T09:21:10.875Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 19
   Successful: 11
[2026-01-19T09:21:10.875Z] [BOT] Failed: 8
   Skipped: 0
[2026-01-19T09:21:10.875Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T09:21:10.875Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 6
   Top channels:
[2026-01-19T09:21:10.876Z] [BOT] 1. #🌉・san-francisco: 3 posts
     2. #💲・sales-jobs: 2 posts
     3. #💻・remote-usa: 2 posts
     4. #🤖・ai-jobs: 2 posts
[2026-01-19T09:21:10.876Z] [BOT] 5. #📊・JID_9910249a: 1 posts
[2026-01-19T09:21:10.876Z] [BOT] [STATS] Channel stats saved
[2026-01-19T09:21:12.892Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2922) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Golang: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - Golang
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - Golang: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - US: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Engineer 1 - US
- [BOT ERROR] ❌ Error posting job Software Engineer 1 - US: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job New Graduate Engineer - Software - Starlink: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: New Graduate Engineer - Software - Starlink
- [BOT ERROR] ❌ Error posting job New Graduate Engineer - Software - Starlink: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Field Marketing Manager (Enterprise SLED East)
- [BOT ERROR] ❌ Error posting job Senior Field Marketing Manager (Enterprise SLED East): DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*