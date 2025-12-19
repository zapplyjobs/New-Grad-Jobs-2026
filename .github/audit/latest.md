# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T22:24:15.061Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 6
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T22:23:19.305Z] ========================================
[2025-12-19T22:23:19.307Z] Discord Bot Execution Log
[2025-12-19T22:23:19.307Z] Environment: GitHub Actions
[2025-12-19T22:23:19.307Z] Node Version: v20.19.6
[2025-12-19T22:23:19.307Z] ========================================
[2025-12-19T22:23:19.307Z] Environment Variables Check:
[2025-12-19T22:23:19.307Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T22:23:19.307Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.308Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T22:23:19.308Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T22:23:19.308Z] 
Multi-Channel Configuration:
[2025-12-19T22:23:19.308Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.308Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.308Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.308Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.308Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.308Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.308Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.308Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.308Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T22:23:19.309Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T22:23:19.309Z] 
Data Files Check:
[2025-12-19T22:23:19.309Z] .github/data/new_jobs.json: ✅ Exists (10 items, 48454 bytes)
[2025-12-19T22:23:19.312Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 364520 bytes)
[2025-12-19T22:23:19.312Z] 
========================================
[2025-12-19T22:23:19.312Z] Starting Enhanced Discord Bot...
[2025-12-19T22:23:19.312Z] ========================================
[2025-12-19T22:23:19.838Z] [BOT] ✅ Loaded V2 database: 616 jobs
[2025-12-19T22:23:20.381Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T22:23:20.381Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T22:23:20.381Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T22:23:20.382Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T22:23:20.430Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T22:23:20.477Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T22:23:20.480Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T22:23:20.480Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T22:23:20.480Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T22:23:20.481Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-19T22:23:20.481Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T22:23:20.486Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-19T22:23:20.486Z] [BOT] 📍 [ROUTING] "Instrumentation and Monitoring Technician" @ ORG_b253f799
[2025-12-19T22:23:20.486Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-19T22:23:20.503Z] [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T22:23:20.615Z] [BOT ERROR] ❌ Error posting job Instrumentation and Monitoring Technician: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2025-12-19T22:23:20.615Z] [BOT] ❌ Industry post failed: Instrumentation and Monitoring Technician
⚠️  Channel full error count: 1/5
[2025-12-19T22:23:22.346Z] [BOT] ✅ Created forum post: 🏢 Instrumentation and Monitoring Technician @ ORG_b253f799 in #🦢・los-angeles
[2025-12-19T22:23:22.346Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-19T22:23:23.849Z] [BOT] 💾 Marked as posted: Instrumentation and Monitoring Technician @ ORG_b253f799 (instance #1)
[2025-12-19T22:23:23.849Z] [BOT] 💾 BEFORE ARCHIVING: 617 jobs in database
[2025-12-19T22:23:23.849Z] [BOT] ✅ No jobs to archive (all 617 jobs within 7-day window)
[2025-12-19T22:23:23.856Z] [BOT] 💾 Saved posted_jobs.json: 617 active jobs
[2025-12-19T22:23:23.856Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:23:26.857Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2025-12-19T22:23:26.857Z] [BOT] 📍 [ROUTING] "Data analyst - Applications L1" @ ORG_6675b3b7 Information System
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-19T22:23:26.857Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T22:23:27.042Z] [BOT] ✅ Created forum post: 🏢 Data analyst - Applications L1 @ ORG_6675b3b7 Information System in #📈・JID_fb739488
[2025-12-19T22:23:27.042Z] [BOT] ✅ Industry: Data analyst - Applications L1 @ ORG_6675b3b7 Information System
[2025-12-19T22:23:28.708Z] [BOT] ✅ Created forum post: 🏢 Data analyst - Applications L1 @ ORG_6675b3b7 Information System in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T22:23:30.208Z] [BOT] 💾 Marked as posted: Data analyst - Applications L1 @ ORG_6675b3b7 Information System (instance #1)
[2025-12-19T22:23:30.208Z] [BOT] 💾 BEFORE ARCHIVING: 618 jobs in database
[2025-12-19T22:23:30.209Z] [BOT] ✅ No jobs to archive (all 618 jobs within 7-day window)
[2025-12-19T22:23:30.215Z] [BOT] 💾 Saved posted_jobs.json: 618 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:23:30.215Z] [BOT] 📍 [ROUTING] ".Net Developer" @ ORG_6675b3b7 Information System
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-19T22:23:30.215Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T22:23:30.407Z] [BOT] ✅ Created forum post: 🏢 .Net Developer @ ORG_6675b3b7 Information System in #📈・JID_fb739488
  ✅ Industry: .Net Developer @ ORG_6675b3b7 Information System
[2025-12-19T22:23:32.056Z] [BOT] ✅ Created forum post: 🏢 .Net Developer @ ORG_6675b3b7 Information System in #💻・remote-usa
[2025-12-19T22:23:32.056Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T22:23:33.556Z] [BOT] 💾 Marked as posted: .Net Developer @ ORG_6675b3b7 Information System (instance #1)
[2025-12-19T22:23:33.556Z] [BOT] 💾 BEFORE ARCHIVING: 619 jobs in database
[2025-12-19T22:23:33.557Z] [BOT] ✅ No jobs to archive (all 619 jobs within 7-day window)
[2025-12-19T22:23:33.562Z] [BOT] 💾 Saved posted_jobs.json: 619 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:23:33.562Z] [BOT] 📍 [ROUTING] "PPM Data Scientist/Statistician 1" @ ORG_52575429 Consulting
[2025-12-19T22:23:33.563Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T22:23:34.037Z] [BOT] ✅ Created forum post: 🏢 PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting in #📈・JID_fb739488
[2025-12-19T22:23:34.038Z] [BOT] ✅ Industry: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting
[2025-12-19T22:23:35.776Z] [BOT] ✅ Created forum post: 🏢 PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting in #💻・remote-usa
[2025-12-19T22:23:35.777Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T22:23:37.278Z] [BOT] 💾 Marked as posted: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting (instance #1)
[2025-12-19T22:23:37.278Z] [BOT] 💾 BEFORE ARCHIVING: 620 jobs in database
[2025-12-19T22:23:37.278Z] [BOT] ✅ No jobs to archive (all 620 jobs within 7-day window)
[2025-12-19T22:23:37.285Z] [BOT] 💾 Saved posted_jobs.json: 620 active jobs
[2025-12-19T22:23:37.285Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:23:37.285Z] [BOT] 📍 [ROUTING] "Entry Level Business/Data Analyst" @ 360 IT Professionals
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T22:23:37.580Z] [BOT] ✅ Created forum post: 🏢 Entry Level Business/Data Analyst @ 360 IT Professionals in #📈・JID_fb739488
  ✅ Industry: Entry Level Business/Data Analyst @ 360 IT Professionals
[2025-12-19T22:23:39.235Z] [BOT] ✅ Created forum post: 🏢 Entry Level Business/Data Analyst @ 360 IT Professionals in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T22:23:40.735Z] [BOT] 💾 Marked as posted: Entry Level Business/Data Analyst @ 360 IT Professionals (instance #1)
[2025-12-19T22:23:40.735Z] [BOT] 💾 BEFORE ARCHIVING: 621 jobs in database
[2025-12-19T22:23:40.736Z] [BOT] ✅ No jobs to archive (all 621 jobs within 7-day window)
[2025-12-19T22:23:40.741Z] [BOT] 💾 Saved posted_jobs.json: 621 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:23:43.742Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-19T22:23:43.743Z] [BOT] 📍 [ROUTING] "Chemical Process Technician" @ ORG_6675b3b7 Information System
[2025-12-19T22:23:43.743Z] [BOT] Category: HR (matched: "workforce")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-19T22:23:43.921Z] [BOT] ✅ Created forum post: 🏢 Chemical Process Technician @ ORG_6675b3b7 Information System in #📁・JID_e938df7b
[2025-12-19T22:23:43.921Z] [BOT] ✅ Industry: Chemical Process Technician @ ORG_6675b3b7 Information System
[2025-12-19T22:23:45.617Z] [BOT] ✅ Created forum post: 🏢 Chemical Process Technician @ ORG_6675b3b7 Information System in #💻・remote-usa
[2025-12-19T22:23:45.617Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T22:23:47.117Z] [BOT] 💾 Marked as posted: Chemical Process Technician @ ORG_6675b3b7 Information System (instance #1)
[2025-12-19T22:23:47.118Z] [BOT] 💾 BEFORE ARCHIVING: 622 jobs in database
[2025-12-19T22:23:47.118Z] [BOT] ✅ No jobs to archive (all 622 jobs within 7-day window)
[2025-12-19T22:23:47.124Z] [BOT] 💾 Saved posted_jobs.json: 622 active jobs
[2025-12-19T22:23:47.124Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:23:50.124Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-19T22:23:50.125Z] [BOT] 📍 [ROUTING] "Programmer Analyst-.Net Programmer - US Citizen" @ 360 IT Professionals
[2025-12-19T22:23:50.125Z] [BOT] Category: TECH (matched: "software")
[2025-12-19T22:23:50.125Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:23:50.321Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals in #💻・tech-jobs
[2025-12-19T22:23:50.321Z] [BOT] ✅ Industry: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals
[2025-12-19T22:23:52.025Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals in #🌉・san-francisco
[2025-12-19T22:23:52.026Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T22:23:53.527Z] [BOT] 💾 Marked as posted: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals (instance #1)
[2025-12-19T22:23:53.527Z] [BOT] 💾 BEFORE ARCHIVING: 623 jobs in database
[2025-12-19T22:23:53.527Z] [BOT] ✅ No jobs to archive (all 623 jobs within 7-day window)
[2025-12-19T22:23:53.534Z] [BOT] 💾 Saved posted_jobs.json: 623 active jobs
[2025-12-19T22:23:53.534Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:23:53.534Z] [BOT] 📍 [ROUTING] "Hiring Recent graduated students for full time jobs" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:23:53.700Z] [BOT] ✅ Created forum post: 🏢 Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies
[2025-12-19T22:23:55.344Z] [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies',
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
[2025-12-19T22:23:55.344Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2025-12-19T22:23:56.844Z] [BOT] 💾 Marked as posted: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T22:23:56.844Z] [BOT] 💾 BEFORE ARCHIVING: 624 jobs in database
[2025-12-19T22:23:56.845Z] [BOT] ✅ No jobs to archive (all 624 jobs within 7-day window)
[2025-12-19T22:23:56.851Z] [BOT] 💾 Saved posted_jobs.json: 624 active jobs
[2025-12-19T22:23:56.851Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:23:59.851Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-19T22:23:59.851Z] [BOT] 📍 [ROUTING] "Geospatial Analyst 1" @ ORG_52575429 Consulting
[2025-12-19T22:23:59.851Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-19T22:23:59.995Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Geospatial Analyst 1 @ ORG_52575429 Consulting',
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
[2025-12-19T22:23:59.995Z] [BOT] ❌ Industry post failed: Geospatial Analyst 1
⚠️  Channel full error count: 1/5
[2025-12-19T22:24:01.637Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Geospatial Analyst 1 @ ORG_52575429 Consulting',
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
[2025-12-19T22:24:01.637Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T22:24:06.139Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-19T22:24:06.139Z] [BOT] 📍 [ROUTING] "Salesforce OBIEE ETL Training and Placement" @ ORG_9af9eef3 Technologies
   Category: SALES (matched: "sales")
[2025-12-19T22:24:06.139Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2025-12-19T22:24:06.262Z] [BOT ERROR] ❌ Error posting job Salesforce OBIEE ETL Training and Placement: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies',
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
[2025-12-19T22:24:06.262Z] [BOT] ❌ Industry post failed: Salesforce OBIEE ETL Training and Placement
⚠️  Channel full error count: 2/5
[2025-12-19T22:24:07.852Z] [BOT ERROR] ❌ Error posting job Salesforce OBIEE ETL Training and Placement: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies',
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
[2025-12-19T22:24:07.852Z] [BOT] ⚠️ Location post failed: 🤠・austin
[2025-12-19T22:24:12.353Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 2
[2025-12-19T22:24:12.354Z] [BOT] ⏭️  Skipping duplicate: JID_bfcb56db-technician_jr100895-1 (posted within 7 days)
[2025-12-19T22:24:12.354Z] [BOT] ⏭️  Skipping duplicate: JID_a5ba30d6 (posted within 7 days)
[2025-12-19T22:24:12.354Z] [BOT] ⏭️  Skipping duplicate: JID_ee7a279e (posted within 7 days)
[2025-12-19T22:24:12.354Z] [BOT] ⏭️  Skipping duplicate: JID_f25f89c0 (posted within 7 days)
[2025-12-19T22:24:12.354Z] [BOT] ⏭️  Skipping duplicate: JID_eaabcec1 (posted within 7 days)
[2025-12-19T22:24:12.354Z] [BOT] ⏭️  Skipping duplicate: JID_26ed61c5 (posted within 7 days)
[2025-12-19T22:24:12.354Z] [BOT] ⏭️  Skipping duplicate: JID_95cdf82d (posted within 7 days)
[2025-12-19T22:24:12.355Z] [BOT] ⏭️  Skipping duplicate: JID_170fea5c (posted within 7 days)
[2025-12-19T22:24:12.357Z] [BOT] ✅ Loaded pending queue: 299 total (279 pending, 20 enriched, 0 posted)
[2025-12-19T22:24:12.362Z] [BOT] ✅ Saved pending queue: 299 total (279 pending, 12 enriched, 8 posted)
[2025-12-19T22:24:12.362Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T22:24:12.403Z] [BOT] 📂 Loaded 697 existing routing entries
[2025-12-19T22:24:12.450Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 707
   Timestamp: 2025-12-19T22:24:12.444Z
📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
   Total attempts: 20
   Successful: 14
   Failed: 6
[2025-12-19T22:24:12.450Z] [BOT] Skipped: 0
[2025-12-19T22:24:12.451Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-19T22:24:12.451Z] [BOT] Last cleanup: Never
[2025-12-19T22:24:12.451Z] [BOT] Total posts: 14
[2025-12-19T22:24:12.451Z] [BOT] Channels used: 6
[2025-12-19T22:24:12.451Z] [BOT] Top channels:
[2025-12-19T22:24:12.451Z] [BOT] 1. #📈・JID_fb739488: 4 posts
[2025-12-19T22:24:12.451Z] [BOT] 2. #💻・remote-usa: 4 posts
[2025-12-19T22:24:12.452Z] [BOT] 3. #🌉・san-francisco: 2 posts
[2025-12-19T22:24:12.452Z] [BOT] 4. #💻・tech-jobs: 2 posts
[2025-12-19T22:24:12.454Z] [BOT] 5. #🦢・los-angeles: 1 posts
[STATS] Channel stats saved
[2025-12-19T22:24:14.463Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2412) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Instrumentation and Monitoring Technician: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Instrumentation and Monitoring Technician
- [BOT ERROR] ❌ Error posting job Hiring Recent graduated students for full time jobs: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Geospatial Analyst 1
- [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT ERROR] ❌ Error posting job Salesforce OBIEE ETL Training and Placement: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Salesforce OBIEE ETL Training and Placement
- [BOT ERROR] ❌ Error posting job Salesforce OBIEE ETL Training and Placement: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*