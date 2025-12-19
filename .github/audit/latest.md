# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T21:04:53.291Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 2
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T21:04:00.189Z] ========================================
[2025-12-19T21:04:00.191Z] Discord Bot Execution Log
[2025-12-19T21:04:00.191Z] Environment: GitHub Actions
[2025-12-19T21:04:00.191Z] Node Version: v20.19.6
[2025-12-19T21:04:00.191Z] ========================================
[2025-12-19T21:04:00.191Z] Environment Variables Check:
[2025-12-19T21:04:00.191Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T21:04:00.192Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T21:04:00.192Z] 
Multi-Channel Configuration:
[2025-12-19T21:04:00.192Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T21:04:00.192Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T21:04:00.192Z] 
Data Files Check:
[2025-12-19T21:04:00.193Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66071 bytes)
[2025-12-19T21:04:00.196Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 345025 bytes)
[2025-12-19T21:04:00.196Z] 
========================================
[2025-12-19T21:04:00.196Z] Starting Enhanced Discord Bot...
[2025-12-19T21:04:00.196Z] ========================================
[2025-12-19T21:04:00.661Z] [BOT] ✅ Loaded V2 database: 579 jobs
[2025-12-19T21:04:01.855Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T21:04:01.855Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T21:04:01.855Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T21:04:01.856Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T21:04:01.906Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T21:04:01.954Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T21:04:01.956Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T21:04:01.956Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T21:04:01.957Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T21:04:01.957Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-19T21:04:01.958Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T21:04:01.962Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2025-12-19T21:04:01.963Z] [BOT] 📍 [ROUTING] "Entry Level Business/Data Analyst" @ 360 IT Professionals
[2025-12-19T21:04:01.963Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T21:04:01.979Z] [BOT ERROR] (node:2378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T21:04:02.240Z] [BOT] ✅ Created forum post: 🏢 Entry Level Business/Data Analyst @ 360 IT Professionals in #📈・JID_fb739488
[2025-12-19T21:04:02.240Z] [BOT] ✅ Industry: Entry Level Business/Data Analyst @ 360 IT Professionals
[2025-12-19T21:04:04.082Z] [BOT] ✅ Created forum post: 🏢 Entry Level Business/Data Analyst @ 360 IT Professionals in #🌉・san-francisco
[2025-12-19T21:04:04.083Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T21:04:05.583Z] [BOT] 💾 Marked as posted: Entry Level Business/Data Analyst @ 360 IT Professionals (instance #1)
[2025-12-19T21:04:05.584Z] [BOT] 💾 BEFORE ARCHIVING: 580 jobs in database
[2025-12-19T21:04:05.584Z] [BOT] ✅ No jobs to archive (all 580 jobs within 7-day window)
[2025-12-19T21:04:05.597Z] [BOT] 💾 Saved posted_jobs.json: 580 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:04:05.597Z] [BOT] 📍 [ROUTING] "PPM Data Scientist/Statistician 1 - WA" @ ORG_52575429 Consulting
[2025-12-19T21:04:05.597Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T21:04:05.798Z] [BOT] ✅ Created forum post: 🏢 PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting in #📈・JID_fb739488
  ✅ Industry: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting
[2025-12-19T21:04:07.873Z] [BOT] ✅ Created forum post: 🏢 PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-19T21:04:09.375Z] [BOT] 💾 Marked as posted: PPM Data Scientist/Statistician 1 - WA @ ORG_52575429 Consulting (instance #1)
💾 BEFORE ARCHIVING: 581 jobs in database
[2025-12-19T21:04:09.375Z] [BOT] ✅ No jobs to archive (all 581 jobs within 7-day window)
[2025-12-19T21:04:09.882Z] [BOT] 💾 Saved posted_jobs.json: 581 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:04:09.883Z] [BOT] 📍 [ROUTING] "Data Engineer - Regulatory - Starlink" @ ORG_afd623b1
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-19T21:04:09.883Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T21:04:10.136Z] [BOT] ✅ Created forum post: 🚀 Data Engineer - Regulatory - Starlink @ ORG_afd623b1 in #📈・JID_fb739488
  ✅ Industry: Data Engineer - Regulatory - Starlink @ ORG_afd623b1
[2025-12-19T21:04:12.028Z] [BOT] ✅ Created forum post: 🚀 Data Engineer - Regulatory - Starlink @ ORG_afd623b1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T21:04:13.529Z] [BOT] 💾 Marked as posted: Data Engineer - Regulatory - Starlink @ ORG_afd623b1 (instance #1)
💾 BEFORE ARCHIVING: 582 jobs in database
[2025-12-19T21:04:13.530Z] [BOT] ✅ No jobs to archive (all 582 jobs within 7-day window)
[2025-12-19T21:04:13.536Z] [BOT] 💾 Saved posted_jobs.json: 582 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:04:13.537Z] [BOT] 📍 [ROUTING] "Data Analyst" @ 360 IT Professionals
[2025-12-19T21:04:13.537Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T21:04:13.861Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ 360 IT Professionals in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ 360 IT Professionals
[2025-12-19T21:04:15.619Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ 360 IT Professionals in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T21:04:17.120Z] [BOT] 💾 Marked as posted: Data Analyst @ 360 IT Professionals (instance #1)
[2025-12-19T21:04:17.120Z] [BOT] 💾 BEFORE ARCHIVING: 583 jobs in database
[2025-12-19T21:04:17.120Z] [BOT] ✅ No jobs to archive (all 583 jobs within 7-day window)
[2025-12-19T21:04:17.126Z] [BOT] 💾 Saved posted_jobs.json: 583 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:04:20.127Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-19T21:04:20.128Z] [BOT] 📍 [ROUTING] "ITSM Database Administrator 1" @ ORG_52575429 Consulting
[2025-12-19T21:04:20.128Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:04:20.621Z] [BOT] ✅ Created forum post: 🏢 ITSM Database Administrator 1 @ ORG_52575429 Consulting in #💻・tech-jobs
  ✅ Industry: ITSM Database Administrator 1 @ ORG_52575429 Consulting
[2025-12-19T21:04:22.590Z] [BOT] ✅ Created forum post: 🏢 ITSM Database Administrator 1 @ ORG_52575429 Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T21:04:24.091Z] [BOT] 💾 Marked as posted: ITSM Database Administrator 1 @ ORG_52575429 Consulting (instance #1)
💾 BEFORE ARCHIVING: 584 jobs in database
[2025-12-19T21:04:24.091Z] [BOT] ✅ No jobs to archive (all 584 jobs within 7-day window)
[2025-12-19T21:04:24.097Z] [BOT] 💾 Saved posted_jobs.json: 584 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:04:24.098Z] [BOT] 📍 [ROUTING] "Data Security Analyst - Cisco Certified - Linux" @ 360 IT Professionals
   Category: TECH (matched: "data")
[2025-12-19T21:04:24.098Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:04:24.272Z] [BOT] ✅ Created forum post: 🏢 Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals in #💻・tech-jobs
[2025-12-19T21:04:24.272Z] [BOT] ✅ Industry: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals
[2025-12-19T21:04:26.003Z] [BOT] ✅ Created forum post: 🏢 Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals in #🌉・san-francisco
[2025-12-19T21:04:26.003Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T21:04:27.504Z] [BOT] 💾 Marked as posted: Data Security Analyst - Cisco Certified - Linux @ 360 IT Professionals (instance #1)
💾 BEFORE ARCHIVING: 585 jobs in database
[2025-12-19T21:04:27.505Z] [BOT] ✅ No jobs to archive (all 585 jobs within 7-day window)
[2025-12-19T21:04:27.511Z] [BOT] 💾 Saved posted_jobs.json: 585 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:04:27.511Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:04:27.695Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-19T21:04:27.695Z] [BOT] ✅ Industry: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c
[2025-12-19T21:04:29.421Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c in #🌧️・seattle
[2025-12-19T21:04:29.421Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-19T21:04:30.921Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Iaas AI Infra - 2026 Start PhD @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 586 jobs in database
[2025-12-19T21:04:30.922Z] [BOT] ✅ No jobs to archive (all 586 jobs within 7-day window)
[2025-12-19T21:04:30.928Z] [BOT] 💾 Saved posted_jobs.json: 586 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:04:30.928Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:04:31.185Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c
[2025-12-19T21:04:33.152Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T21:04:34.653Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c (instance #1)
[2025-12-19T21:04:34.653Z] [BOT] 💾 BEFORE ARCHIVING: 587 jobs in database
[2025-12-19T21:04:34.653Z] [BOT] ✅ No jobs to archive (all 587 jobs within 7-day window)
[2025-12-19T21:04:34.659Z] [BOT] 💾 Saved posted_jobs.json: 587 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:04:37.660Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-19T21:04:37.660Z] [BOT] 📍 [ROUTING] "Analyst 2 - Technical Analysis" @ ORG_52575429 Consulting
[2025-12-19T21:04:37.660Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-19T21:04:37.888Z] [BOT] ✅ Created forum post: 🏢 Analyst 2 - Technical Analysis @ ORG_52575429 Consulting in #💲・sales-jobs
  ✅ Industry: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting
[2025-12-19T21:04:39.607Z] [BOT] ✅ Created forum post: 🏢 Analyst 2 - Technical Analysis @ ORG_52575429 Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T21:04:41.108Z] [BOT] 💾 Marked as posted: Analyst 2 - Technical Analysis @ ORG_52575429 Consulting (instance #1)
💾 BEFORE ARCHIVING: 588 jobs in database
[2025-12-19T21:04:41.109Z] [BOT] ✅ No jobs to archive (all 588 jobs within 7-day window)
[2025-12-19T21:04:41.116Z] [BOT] 💾 Saved posted_jobs.json: 588 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:04:44.117Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-19T21:04:44.117Z] [BOT] 📍 [ROUTING] "Geospatial Analyst 2" @ ORG_52575429 Consulting
[2025-12-19T21:04:44.118Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-19T21:04:44.271Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst 2: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Geospatial Analyst 2 @ ORG_52575429 Consulting',
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
[2025-12-19T21:04:44.271Z] [BOT] ❌ Industry post failed: Geospatial Analyst 2
⚠️  Channel full error count: 1/5
[2025-12-19T21:04:45.923Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst 2: DiscordAPIError[160006]: Maximum number of active threads reached
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
      name: '🏢 Geospatial Analyst 2 @ ORG_52575429 Consulting',
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
[2025-12-19T21:04:45.923Z] [BOT] ⚠️ Location post failed: 💻・remote-usa
[2025-12-19T21:04:50.424Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 1
[2025-12-19T21:04:50.424Z] [BOT] ⏭️  Skipping duplicate: JID_731e0868 (posted within 7 days)
[2025-12-19T21:04:50.424Z] [BOT] ⏭️  Skipping duplicate: JID_3a6ee283 (posted within 7 days)
[2025-12-19T21:04:50.424Z] [BOT] ⏭️  Skipping duplicate: JID_033a2d3b (posted within 7 days)
⏭️  Skipping duplicate: JID_dbd659e7 (posted within 7 days)
[2025-12-19T21:04:50.425Z] [BOT] ⏭️  Skipping duplicate: JID_46e0260f (posted within 7 days)
[2025-12-19T21:04:50.425Z] [BOT] ⏭️  Skipping duplicate: JID_147cd798 (posted within 7 days)
[2025-12-19T21:04:50.425Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2afd3302-detail (posted within 7 days)
[2025-12-19T21:04:50.425Z] [BOT] ⏭️  Skipping duplicate: JID_84048b2c (posted within 7 days)
[2025-12-19T21:04:50.425Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a56de89c-detail (posted within 7 days)
[2025-12-19T21:04:50.428Z] [BOT] ✅ Loaded pending queue: 336 total (316 pending, 20 enriched, 0 posted)
[2025-12-19T21:04:50.433Z] [BOT] ✅ Saved pending queue: 336 total (316 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2025-12-19T21:04:50.433Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-19T21:04:50.480Z] [BOT] 📂 Loaded 660 existing routing entries
[2025-12-19T21:04:50.527Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 670
[2025-12-19T21:04:50.527Z] [BOT] Timestamp: 2025-12-19T21:04:50.524Z
[2025-12-19T21:04:50.528Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
   Total attempts: 20
[2025-12-19T21:04:50.528Z] [BOT] Successful: 18
   Failed: 2
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 6
[2025-12-19T21:04:50.528Z] [BOT] Top channels:
     1. #📈・JID_fb739488: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・tech-jobs: 4 posts
     4. #💻・remote-usa: 3 posts
     5. #🌧️・seattle: 2 posts
[2025-12-19T21:04:50.528Z] [BOT] [STATS] Channel stats saved
[2025-12-19T21:04:52.536Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Geospatial Analyst 2: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Geospatial Analyst 2
- [BOT ERROR] ❌ Error posting job Geospatial Analyst 2: DiscordAPIError[160006]: Maximum number of active threads reached
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*