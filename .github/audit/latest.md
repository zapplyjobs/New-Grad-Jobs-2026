# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T18:56:57.883Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 8
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T18:56:03.846Z] ========================================
[2026-01-17T18:56:03.848Z] Discord Bot Execution Log
[2026-01-17T18:56:03.848Z] Environment: GitHub Actions
[2026-01-17T18:56:03.848Z] Node Version: v20.19.6
[2026-01-17T18:56:03.848Z] ========================================
[2026-01-17T18:56:03.848Z] Environment Variables Check:
[2026-01-17T18:56:03.848Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T18:56:03.849Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T18:56:03.849Z] 
Multi-Channel Configuration:
[2026-01-17T18:56:03.849Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T18:56:03.849Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T18:56:03.850Z] 
Data Files Check:
[2026-01-17T18:56:03.850Z] .github/data/new_jobs.json: ✅ Exists (10 items, 78073 bytes)
[2026-01-17T18:56:03.859Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1311339 bytes)
[2026-01-17T18:56:03.859Z] 
========================================
[2026-01-17T18:56:03.859Z] Starting Enhanced Discord Bot...
[2026-01-17T18:56:03.859Z] ========================================
[2026-01-17T18:56:04.395Z] [BOT] ✅ Loaded V2 database: 2424 jobs
[2026-01-17T18:56:04.932Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T18:56:04.933Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T18:56:04.933Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T18:56:05.051Z] [BOT] ✅ Loaded pending queue: 2907 total (2887 pending, 20 enriched, 0 posted)
[2026-01-17T18:56:05.051Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Manager, Finance Systems at vercel
[2026-01-17T18:56:05.056Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T18:56:05.056Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T18:56:05.056Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T18:56:05.057Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-17T18:56:05.057Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-17T18:56:05.058Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T18:56:05.062Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-17T18:56:05.062Z] [BOT] 📍 [ROUTING] "Senior Manager, Finance Systems" @ vercel
[2026-01-17T18:56:05.063Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-17T18:56:05.067Z] [BOT ERROR] (node:2370) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T18:56:05.184Z] [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Senior Manager, Finance Systems @ vercel',
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
  url: 'https://discord.com/api/v10/channels/CH_a550ae94/threads'
}
[2026-01-17T18:56:05.184Z] [BOT] ❌ Industry post failed: Senior Manager, Finance Systems
⚠️  Channel full error count: 1/5
[2026-01-17T18:56:06.863Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Finance Systems @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T18:56:08.366Z] [BOT] 💾 Marked as posted: Senior Manager, Finance Systems @ vercel (instance #1)
[2026-01-17T18:56:08.366Z] [BOT] 💾 BEFORE ARCHIVING: 2425 jobs in database
[2026-01-17T18:56:08.368Z] [BOT] ✅ No jobs to archive (all 2425 jobs within 7-day window)
[2026-01-17T18:56:08.388Z] [BOT] 💾 Saved posted_jobs.json: 2425 active jobs
[2026-01-17T18:56:08.388Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:56:11.389Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-17T18:56:11.389Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_8af17c2e
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T18:56:11.389Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T18:56:11.634Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_8af17c2e in #📈・JID_fb739488
[2026-01-17T18:56:11.634Z] [BOT] ✅ Industry: Data Scientist @ ORG_8af17c2e
[2026-01-17T18:56:13.623Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_8af17c2e in #🗽・new-york
[2026-01-17T18:56:13.623Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T18:56:15.124Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_8af17c2e (instance #1)
[2026-01-17T18:56:15.124Z] [BOT] 💾 BEFORE ARCHIVING: 2426 jobs in database
[2026-01-17T18:56:15.126Z] [BOT] ✅ No jobs to archive (all 2426 jobs within 7-day window)
[2026-01-17T18:56:15.144Z] [BOT] 💾 Saved posted_jobs.json: 2426 active jobs
[2026-01-17T18:56:15.144Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:56:15.145Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_3442dbaa
[2026-01-17T18:56:15.145Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T18:56:15.325Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_3442dbaa in #📈・JID_fb739488
  ✅ Industry: Data Engineer @ ORG_3442dbaa
[2026-01-17T18:56:17.299Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_3442dbaa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T18:56:18.801Z] [BOT] 💾 Marked as posted: Data Engineer @ ORG_3442dbaa (instance #1)
[2026-01-17T18:56:18.801Z] [BOT] 💾 BEFORE ARCHIVING: 2427 jobs in database
[2026-01-17T18:56:18.802Z] [BOT] ✅ No jobs to archive (all 2427 jobs within 7-day window)
[2026-01-17T18:56:18.819Z] [BOT] 💾 Saved posted_jobs.json: 2427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T18:56:18.820Z] [BOT] 📍 [ROUTING] "Senior Manager, Commercial Policy" @ discord
[2026-01-17T18:56:18.820Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T18:56:19.035Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Commercial Policy @ discord in #📈・JID_fb739488
[2026-01-17T18:56:19.035Z] [BOT] ✅ Industry: Senior Manager, Commercial Policy @ discord
[2026-01-17T18:56:20.730Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Commercial Policy @ discord in #🌉・san-francisco
[2026-01-17T18:56:20.730Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T18:56:22.232Z] [BOT] 💾 Marked as posted: Senior Manager, Commercial Policy @ discord (instance #1)
[2026-01-17T18:56:22.232Z] [BOT] 💾 BEFORE ARCHIVING: 2428 jobs in database
[2026-01-17T18:56:22.233Z] [BOT] ✅ No jobs to archive (all 2428 jobs within 7-day window)
[2026-01-17T18:56:22.247Z] [BOT] 💾 Saved posted_jobs.json: 2428 active jobs
[2026-01-17T18:56:22.247Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:56:25.248Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-17T18:56:25.248Z] [BOT] 📍 [ROUTING] "Business Recruiter" @ figma
[2026-01-17T18:56:25.249Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-17T18:56:25.614Z] [BOT] ✅ Created forum post: 🏢 Business Recruiter @ figma in #📁・JID_e938df7b
[2026-01-17T18:56:25.614Z] [BOT] ✅ Industry: Business Recruiter @ figma
[2026-01-17T18:56:27.351Z] [BOT] ✅ Created forum post: 🏢 Business Recruiter @ figma in #🌉・san-francisco
[2026-01-17T18:56:27.351Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T18:56:28.852Z] [BOT] 💾 Marked as posted: Business Recruiter @ figma (instance #1)
[2026-01-17T18:56:28.853Z] [BOT] 💾 BEFORE ARCHIVING: 2429 jobs in database
[2026-01-17T18:56:28.854Z] [BOT] ✅ No jobs to archive (all 2429 jobs within 7-day window)
[2026-01-17T18:56:28.870Z] [BOT] 💾 Saved posted_jobs.json: 2429 active jobs
[2026-01-17T18:56:28.870Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:56:31.870Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-17T18:56:31.871Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ T-Rex Solutions
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T18:56:32.058Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ T-Rex Solutions in #💻・tech-jobs
[2026-01-17T18:56:32.058Z] [BOT] ✅ Industry: Software Engineer 1 @ T-Rex Solutions
[2026-01-17T18:56:33.877Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ T-Rex Solutions in #💻・remote-usa
[2026-01-17T18:56:33.878Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T18:56:35.378Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ T-Rex Solutions (instance #1)
[2026-01-17T18:56:35.378Z] [BOT] 💾 BEFORE ARCHIVING: 2430 jobs in database
[2026-01-17T18:56:35.380Z] [BOT] ✅ No jobs to archive (all 2430 jobs within 7-day window)
[2026-01-17T18:56:35.395Z] [BOT] 💾 Saved posted_jobs.json: 2430 active jobs
[2026-01-17T18:56:35.395Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T18:56:35.395Z] [BOT] 📍 [ROUTING] "Associate Manager, Paid Media" @ spotify
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T18:56:35.675Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Paid Media @ spotify in #💻・tech-jobs
[2026-01-17T18:56:35.675Z] [BOT] ✅ Industry: Associate Manager, Paid Media @ spotify
[2026-01-17T18:56:37.331Z] [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Associate Manager, Paid Media @ spotify',
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
[2026-01-17T18:56:37.332Z] [BOT] ⚠️ Location post failed: 🗽・new-york
[2026-01-17T18:56:38.833Z] [BOT] 💾 Marked as posted: Associate Manager, Paid Media @ spotify (instance #1)
[2026-01-17T18:56:38.833Z] [BOT] 💾 BEFORE ARCHIVING: 2431 jobs in database
[2026-01-17T18:56:38.835Z] [BOT] ✅ No jobs to archive (all 2431 jobs within 7-day window)
[2026-01-17T18:56:38.851Z] [BOT] 💾 Saved posted_jobs.json: 2431 active jobs
[2026-01-17T18:56:38.851Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Integration Engineer, Factory Firmware" @ ORG_f89f8538
[2026-01-17T18:56:38.851Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T18:56:39.003Z] [BOT ERROR] ❌ Error posting job Software Integration Engineer, Factory Firmware: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '⚡ Software Integration Engineer, Factory Firmware @ Tesla',
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
[2026-01-17T18:56:39.003Z] [BOT] ❌ Industry post failed: Software Integration Engineer, Factory Firmware
⚠️  Channel full error count: 1/5
[2026-01-17T18:56:40.612Z] [BOT ERROR] ❌ Error posting job Software Integration Engineer, Factory Firmware: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '⚡ Software Integration Engineer, Factory Firmware @ Tesla',
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
[2026-01-17T18:56:40.612Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T18:56:42.113Z] [BOT] 📍 [ROUTING] "Security Development Project Specialist" @ anthropic
   Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T18:56:42.233Z] [BOT ERROR] ❌ Error posting job Security Development Project Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Security Development Project Specialist @ anthropic',
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
[2026-01-17T18:56:42.233Z] [BOT] ❌ Industry post failed: Security Development Project Specialist
⚠️  Channel full error count: 2/5
[2026-01-17T18:56:43.855Z] [BOT ERROR] ❌ Error posting job Security Development Project Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Security Development Project Specialist @ anthropic',
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
[2026-01-17T18:56:43.855Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T18:56:48.357Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-17T18:56:48.357Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Machine Learning (Safety)" @ discord
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T18:56:48.357Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-17T18:56:48.520Z] [BOT ERROR] ❌ Error posting job Staff Software Engineer, Machine Learning (Safety): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Software Engineer, Machine Learning (Safety) @ discord',
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
[2026-01-17T18:56:48.520Z] [BOT] ❌ Industry post failed: Staff Software Engineer, Machine Learning (Safety)
⚠️  Channel full error count: 3/5
[2026-01-17T18:56:50.154Z] [BOT ERROR] ❌ Error posting job Staff Software Engineer, Machine Learning (Safety): DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Staff Software Engineer, Machine Learning (Safety) @ discord',
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
[2026-01-17T18:56:50.155Z] [BOT] ⚠️ Location post failed: 🌉・san-francisco
[2026-01-17T18:56:54.656Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 3
[2026-01-17T18:56:54.656Z] [BOT] ⏭️  Skipping duplicate: JID_0dc89961 (posted within 7 days)
[2026-01-17T18:56:54.656Z] [BOT] ⏭️  Skipping duplicate: JID_614cec6b (posted within 7 days)
[2026-01-17T18:56:54.657Z] [BOT] ⏭️  Skipping duplicate: JID_a08aa26f (posted within 7 days)
[2026-01-17T18:56:54.657Z] [BOT] ⏭️  Skipping duplicate: JID_da01aa07 (posted within 7 days)
[2026-01-17T18:56:54.657Z] [BOT] ⏭️  Skipping duplicate: JID_7ed1d20b (posted within 7 days)
[2026-01-17T18:56:54.657Z] [BOT] ⏭️  Skipping duplicate: JID_79451895 (posted within 7 days)
[2026-01-17T18:56:54.657Z] [BOT] ⏭️  Skipping duplicate: JID_e4526215 (posted within 7 days)
[2026-01-17T18:56:54.775Z] [BOT] ✅ Loaded pending queue: 2907 total (2887 pending, 20 enriched, 0 posted)
[2026-01-17T18:56:54.965Z] [BOT] ✅ Saved pending queue: 2907 total (2887 pending, 13 enriched, 7 posted)
[2026-01-17T18:56:54.965Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T18:56:55.023Z] [BOT] 📂 Loaded 4605 existing routing entries
[2026-01-17T18:56:55.089Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4615
[2026-01-17T18:56:55.090Z] [BOT] Timestamp: 2026-01-17T18:56:55.071Z
[2026-01-17T18:56:55.090Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T18:56:55.090Z] [BOT] Total attempts: 20
   Successful: 12
   Failed: 8
   Skipped: 0
[2026-01-17T18:56:55.090Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T18:56:55.091Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 3 posts
[2026-01-17T18:56:55.091Z] [BOT] 2. #📈・JID_fb739488: 3 posts
     3. #💻・remote-usa: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-17T18:56:55.091Z] [BOT] [STATS] Channel stats saved
[2026-01-17T18:56:57.116Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2370) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Senior Manager, Finance Systems: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Senior Manager, Finance Systems
- [BOT ERROR] ❌ Error posting job Associate Manager, Paid Media: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Software Integration Engineer, Factory Firmware: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Software Integration Engineer, Factory Firmware
- [BOT ERROR] ❌ Error posting job Software Integration Engineer, Factory Firmware: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Security Development Project Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Security Development Project Specialist
- [BOT ERROR] ❌ Error posting job Security Development Project Specialist: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Staff Software Engineer, Machine Learning (Safety): DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Staff Software Engineer, Machine Learning (Safety)
- [BOT ERROR] ❌ Error posting job Staff Software Engineer, Machine Learning (Safety): DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*