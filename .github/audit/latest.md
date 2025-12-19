# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T22:05:03.039Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 5
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T22:04:13.283Z] ========================================
[2025-12-19T22:04:13.285Z] Discord Bot Execution Log
[2025-12-19T22:04:13.285Z] Environment: GitHub Actions
[2025-12-19T22:04:13.285Z] Node Version: v20.19.6
[2025-12-19T22:04:13.286Z] ========================================
[2025-12-19T22:04:13.286Z] Environment Variables Check:
[2025-12-19T22:04:13.286Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T22:04:13.286Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.286Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T22:04:13.286Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T22:04:13.286Z] 
Multi-Channel Configuration:
[2025-12-19T22:04:13.286Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.286Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.286Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.287Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.287Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.287Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.287Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.287Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.287Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T22:04:13.287Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T22:04:13.287Z] 
Data Files Check:
[2025-12-19T22:04:13.288Z] .github/data/new_jobs.json: ✅ Exists (10 items, 43602 bytes)
[2025-12-19T22:04:13.290Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 360029 bytes)
[2025-12-19T22:04:13.290Z] 
========================================
[2025-12-19T22:04:13.290Z] Starting Enhanced Discord Bot...
[2025-12-19T22:04:13.290Z] ========================================
[2025-12-19T22:04:13.806Z] [BOT] ✅ Loaded V2 database: 608 jobs
[2025-12-19T22:04:15.913Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T22:04:15.913Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T22:04:15.914Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T22:04:15.916Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T22:04:15.960Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T22:04:16.007Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T22:04:16.009Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T22:04:16.009Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T22:04:16.009Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T22:04:16.010Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-19T22:04:16.010Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T22:04:16.015Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-12-19T22:04:16.015Z] [BOT] 📍 [ROUTING] "Test Analyst - Java - Selenium" @ ORG_a3a09e18 Consulting
[2025-12-19T22:04:16.015Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:04:16.032Z] [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T22:04:16.400Z] [BOT] ✅ Created forum post: 🏢 Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting in #💻・tech-jobs
  ✅ Industry: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting
[2025-12-19T22:04:18.179Z] [BOT] ✅ Created forum post: 🏢 Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-19T22:04:19.680Z] [BOT] 💾 Marked as posted: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting (instance #1)
[2025-12-19T22:04:19.681Z] [BOT] 💾 BEFORE ARCHIVING: 609 jobs in database
[2025-12-19T22:04:19.681Z] [BOT] ✅ No jobs to archive (all 609 jobs within 7-day window)
[2025-12-19T22:04:19.693Z] [BOT] 💾 Saved posted_jobs.json: 609 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:04:19.693Z] [BOT] 📍 [ROUTING] "Entry Level Informatica Developer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2025-12-19T22:04:19.693Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:04:19.889Z] [BOT] ✅ Created forum post: 🏢 Entry Level Informatica Developer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2025-12-19T22:04:19.890Z] [BOT] ✅ Industry: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies
[2025-12-19T22:04:21.597Z] [BOT] ✅ Created forum post: 🏢 Entry Level Informatica Developer @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T22:04:23.098Z] [BOT] 💾 Marked as posted: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T22:04:23.099Z] [BOT] 💾 BEFORE ARCHIVING: 610 jobs in database
[2025-12-19T22:04:23.099Z] [BOT] ✅ No jobs to archive (all 610 jobs within 7-day window)
[2025-12-19T22:04:23.105Z] [BOT] 💾 Saved posted_jobs.json: 610 active jobs
[2025-12-19T22:04:23.106Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:04:23.107Z] [BOT] 📍 [ROUTING] "Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force" @ ORG_9af9eef3 Technologies
[2025-12-19T22:04:23.107Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:04:23.401Z] [BOT] ✅ Created forum post: 🏢 Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies
[2025-12-19T22:04:25.134Z] [BOT] ✅ Created forum post: 🏢 Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T22:04:26.635Z] [BOT] 💾 Marked as posted: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T22:04:26.635Z] [BOT] 💾 BEFORE ARCHIVING: 611 jobs in database
[2025-12-19T22:04:26.636Z] [BOT] ✅ No jobs to archive (all 611 jobs within 7-day window)
[2025-12-19T22:04:26.643Z] [BOT] 💾 Saved posted_jobs.json: 611 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:04:26.643Z] [BOT] 📍 [ROUTING] "Frontend Developer - Angular" @ 360 IT Professionals
[2025-12-19T22:04:26.643Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:04:27.139Z] [BOT] ✅ Created forum post: 🏢 Frontend Developer - Angular @ 360 IT Professionals in #💻・tech-jobs
[2025-12-19T22:04:27.139Z] [BOT] ✅ Industry: Frontend Developer - Angular @ 360 IT Professionals
[2025-12-19T22:04:28.818Z] [BOT] ✅ Created forum post: 🏢 Frontend Developer - Angular @ 360 IT Professionals in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-19T22:04:30.319Z] [BOT] 💾 Marked as posted: Frontend Developer - Angular @ 360 IT Professionals (instance #1)
[2025-12-19T22:04:30.319Z] [BOT] 💾 BEFORE ARCHIVING: 612 jobs in database
[2025-12-19T22:04:30.320Z] [BOT] ✅ No jobs to archive (all 612 jobs within 7-day window)
[2025-12-19T22:04:30.326Z] [BOT] 💾 Saved posted_jobs.json: 612 active jobs
[2025-12-19T22:04:30.326Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:04:30.327Z] [BOT] 📍 [ROUTING] "Software Engineer - Software Development - Backend" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:04:30.595Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2025-12-19T22:04:30.596Z] [BOT] ✅ Industry: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies
[2025-12-19T22:04:32.294Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies in #💻・remote-usa
[2025-12-19T22:04:32.294Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T22:04:33.795Z] [BOT] 💾 Marked as posted: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T22:04:33.795Z] [BOT] 💾 BEFORE ARCHIVING: 613 jobs in database
[2025-12-19T22:04:33.796Z] [BOT] ✅ No jobs to archive (all 613 jobs within 7-day window)
[2025-12-19T22:04:33.802Z] [BOT] 💾 Saved posted_jobs.json: 613 active jobs
[2025-12-19T22:04:33.802Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:04:33.803Z] [BOT] 📍 [ROUTING] "Software Engineering AMTS – New Grad" @ ORG_33a7935d
[2025-12-19T22:04:33.803Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:04:34.021Z] [BOT] ✅ Created forum post: ☁️ Software Engineering AMTS – New Grad @ ORG_33a7935d in #💻・tech-jobs
[2025-12-19T22:04:34.021Z] [BOT] ✅ Industry: Software Engineering AMTS – New Grad @ ORG_33a7935d
[2025-12-19T22:04:35.729Z] [BOT] ✅ Created forum post: ☁️ Software Engineering AMTS – New Grad @ ORG_33a7935d in #🌉・san-francisco
[2025-12-19T22:04:35.729Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T22:04:37.230Z] [BOT] 💾 Marked as posted: Software Engineering AMTS – New Grad @ ORG_33a7935d (instance #1)
[2025-12-19T22:04:37.231Z] [BOT] 💾 BEFORE ARCHIVING: 614 jobs in database
[2025-12-19T22:04:37.231Z] [BOT] ✅ No jobs to archive (all 614 jobs within 7-day window)
[2025-12-19T22:04:37.237Z] [BOT] 💾 Saved posted_jobs.json: 614 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:04:37.237Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_6675b3b7 Information System
[2025-12-19T22:04:37.237Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:04:37.459Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_6675b3b7 Information System in #💻・tech-jobs
  ✅ Industry: Java Developer @ ORG_6675b3b7 Information System
[2025-12-19T22:04:39.201Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_6675b3b7 Information System in #💻・remote-usa
[2025-12-19T22:04:39.202Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T22:04:40.702Z] [BOT] 💾 Marked as posted: Java Developer @ ORG_6675b3b7 Information System (instance #1)
[2025-12-19T22:04:40.702Z] [BOT] 💾 BEFORE ARCHIVING: 615 jobs in database
[2025-12-19T22:04:40.703Z] [BOT] ✅ No jobs to archive (all 615 jobs within 7-day window)
[2025-12-19T22:04:40.709Z] [BOT] 💾 Saved posted_jobs.json: 615 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:04:43.709Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-19T22:04:43.709Z] [BOT] 📍 [ROUTING] "PPM Data Scientist/Statistician 1" @ ORG_52575429 Consulting
[2025-12-19T22:04:43.709Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T22:04:43.960Z] [BOT] ✅ Created forum post: 🏢 PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting in #📈・JID_fb739488
  ✅ Industry: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting
[2025-12-19T22:04:45.612Z] [BOT ERROR] ❌ Error posting job PPM Data Scientist/Statistician 1: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting',
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
[2025-12-19T22:04:45.612Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T22:04:47.113Z] [BOT] 💾 Marked as posted: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting (instance #1)
[2025-12-19T22:04:47.113Z] [BOT] 💾 BEFORE ARCHIVING: 616 jobs in database
[2025-12-19T22:04:47.114Z] [BOT] ✅ No jobs to archive (all 616 jobs within 7-day window)
[2025-12-19T22:04:47.120Z] [BOT] 💾 Saved posted_jobs.json: 616 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:04:47.121Z] [BOT] 📍 [ROUTING] "Data analyst - Applications L1" @ ORG_6675b3b7 Information System
[2025-12-19T22:04:47.121Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T22:04:47.264Z] [BOT ERROR] ❌ Error posting job Data analyst - Applications L1: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Data analyst - Applications L1 @ ORG_6675b3b7 Information System',
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
[2025-12-19T22:04:47.264Z] [BOT] ❌ Industry post failed: Data analyst - Applications L1
⚠️  Channel full error count: 1/5
[2025-12-19T22:04:48.919Z] [BOT ERROR] ❌ Error posting job Data analyst - Applications L1: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Data analyst - Applications L1 @ ORG_6675b3b7 Information System',
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
[2025-12-19T22:04:48.919Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T22:04:53.420Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-19T22:04:53.420Z] [BOT] 📍 [ROUTING] "Instrumentation and Monitoring Technician" @ ORG_b253f799
[2025-12-19T22:04:53.420Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-19T22:04:53.638Z] [BOT ERROR] ❌ Error posting job Instrumentation and Monitoring Technician: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:786:32) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Instrumentation and Monitoring Technician @ Viridien',
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
[2025-12-19T22:04:53.638Z] [BOT] ❌ Industry post failed: Instrumentation and Monitoring Technician
⚠️  Channel full error count: 2/5
[2025-12-19T22:04:55.290Z] [BOT ERROR] ❌ Error posting job Instrumentation and Monitoring Technician: DiscordAPIError[160006]: Maximum number of active threads reached
    at handleErrors (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:762:13)
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async SequentialHandler.runRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1163:23)
    at async SequentialHandler.queueRequest (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:994:14)
    at async _REST.request (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/@discordjs/rest/dist/index.js:1307:22)
    at async GuildForumThreadManager.create (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/node_modules/discord.js/src/managers/GuildForumThreadManager.js:67:18)
    at async postJobToForum (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:1284:22)
    at async Client.<anonymous> (/home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/scripts/JID_f05b60e7.js:855:40) {
  requestBody: {
    files: [],
    json: {
      name: '🏢 Instrumentation and Monitoring Technician @ Viridien',
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
[2025-12-19T22:04:55.290Z] [BOT] ⚠️ Location post failed: 🦢・los-angeles
[2025-12-19T22:04:59.792Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2025-12-19T22:04:59.792Z] [BOT] ⏭️  Skipping duplicate: JID_ae9fc2b3 (posted within 7 days)
[2025-12-19T22:04:59.792Z] [BOT] ⏭️  Skipping duplicate: JID_e0f592ba (posted within 7 days)
[2025-12-19T22:04:59.792Z] [BOT] ⏭️  Skipping duplicate: JID_56c9c811 (posted within 7 days)
⏭️  Skipping duplicate: JID_d27506fc (posted within 7 days)
[2025-12-19T22:04:59.792Z] [BOT] ⏭️  Skipping duplicate: JID_6ff36b69 (posted within 7 days)
[2025-12-19T22:04:59.792Z] [BOT] ⏭️  Skipping duplicate: JID_43d67a94 (posted within 7 days)
[2025-12-19T22:04:59.793Z] [BOT] ⏭️  Skipping duplicate: JID_6098fed3-external_career_site-JID_5d8714f1-_jr307625-1 (posted within 7 days)
[2025-12-19T22:04:59.793Z] [BOT] ⏭️  Skipping duplicate: JID_8e1accd4 (posted within 7 days)
[2025-12-19T22:04:59.795Z] [BOT] ✅ Loaded pending queue: 307 total (287 pending, 20 enriched, 0 posted)
[2025-12-19T22:04:59.800Z] [BOT] ✅ Saved pending queue: 307 total (287 pending, 12 enriched, 8 posted)
[2025-12-19T22:04:59.800Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T22:04:59.841Z] [BOT] 📂 Loaded 687 existing routing entries
[2025-12-19T22:04:59.888Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 697
   Timestamp: 2025-12-19T22:04:59.881Z
📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
   Total attempts: 20
   Successful: 15
   Failed: 5
   Skipped: 0
[2025-12-19T22:04:59.888Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-19T22:04:59.888Z] [BOT] Last cleanup: Never
[2025-12-19T22:04:59.888Z] [BOT] Total posts: 15
[2025-12-19T22:04:59.889Z] [BOT] Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🌉・san-francisco: 2 posts
     3. #💻・remote-usa: 2 posts
     4. #🌧️・seattle: 1 posts
     5. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2025-12-19T22:05:01.901Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job PPM Data Scientist/Statistician 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Data analyst - Applications L1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Data analyst - Applications L1
- [BOT ERROR] ❌ Error posting job Data analyst - Applications L1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Instrumentation and Monitoring Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Instrumentation and Monitoring Technician
- [BOT ERROR] ❌ Error posting job Instrumentation and Monitoring Technician: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*