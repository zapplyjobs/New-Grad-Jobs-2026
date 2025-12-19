# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T22:38:49.066Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 1
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T22:37:52.085Z] ========================================
[2025-12-19T22:37:52.087Z] Discord Bot Execution Log
[2025-12-19T22:37:52.087Z] Environment: GitHub Actions
[2025-12-19T22:37:52.087Z] Node Version: v20.19.6
[2025-12-19T22:37:52.088Z] ========================================
[2025-12-19T22:37:52.088Z] Environment Variables Check:
[2025-12-19T22:37:52.088Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T22:37:52.088Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.088Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T22:37:52.088Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T22:37:52.088Z] 
Multi-Channel Configuration:
[2025-12-19T22:37:52.088Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.088Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.088Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.088Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.088Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.089Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.089Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.089Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.089Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T22:37:52.089Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T22:37:52.089Z] 
Data Files Check:
[2025-12-19T22:37:52.089Z] .github/data/new_jobs.json: ✅ Exists (10 items, 24197 bytes)
[2025-12-19T22:37:52.092Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 369016 bytes)
[2025-12-19T22:37:52.092Z] 
========================================
[2025-12-19T22:37:52.092Z] Starting Enhanced Discord Bot...
[2025-12-19T22:37:52.092Z] ========================================
[2025-12-19T22:37:52.598Z] [BOT] ✅ Loaded V2 database: 624 jobs
[2025-12-19T22:37:53.907Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T22:37:53.907Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T22:37:53.908Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T22:37:53.908Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T22:37:53.951Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T22:37:53.996Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T22:37:53.998Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T22:37:53.999Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T22:37:53.999Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T22:37:54.000Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-19T22:37:54.000Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T22:37:54.005Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-19T22:37:54.005Z] [BOT] 📍 [ROUTING] "Geospatial Analyst 1" @ ORG_52575429 Consulting
[2025-12-19T22:37:54.006Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-19T22:37:54.023Z] [BOT ERROR] (node:2304) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T22:37:54.158Z] [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
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
[2025-12-19T22:37:54.158Z] [BOT] ❌ Industry post failed: Geospatial Analyst 1
[2025-12-19T22:37:54.158Z] [BOT] ⚠️  Channel full error count: 1/5
[2025-12-19T22:37:56.832Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst 1 @ ORG_52575429 Consulting in #💻・remote-usa
[2025-12-19T22:37:56.832Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T22:37:58.333Z] [BOT] 💾 Marked as posted: Geospatial Analyst 1 @ ORG_52575429 Consulting (instance #1)
[2025-12-19T22:37:58.334Z] [BOT] 💾 BEFORE ARCHIVING: 625 jobs in database
[2025-12-19T22:37:58.334Z] [BOT] ✅ No jobs to archive (all 625 jobs within 7-day window)
[2025-12-19T22:37:58.533Z] [BOT] 💾 Saved posted_jobs.json: 625 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:38:01.534Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-19T22:38:01.535Z] [BOT] 📍 [ROUTING] "Salesforce OBIEE ETL Training and Placement" @ ORG_9af9eef3 Technologies
   Category: SALES (matched: "sales")
[2025-12-19T22:38:01.535Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2025-12-19T22:38:01.932Z] [BOT] ✅ Created forum post: 🏢 Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies in #💲・sales-jobs
[2025-12-19T22:38:01.933Z] [BOT] ✅ Industry: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies
[2025-12-19T22:38:03.671Z] [BOT] ✅ Created forum post: 🏢 Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T22:38:05.172Z] [BOT] 💾 Marked as posted: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T22:38:05.172Z] [BOT] 💾 BEFORE ARCHIVING: 626 jobs in database
[2025-12-19T22:38:05.173Z] [BOT] ✅ No jobs to archive (all 626 jobs within 7-day window)
[2025-12-19T22:38:05.178Z] [BOT] 💾 Saved posted_jobs.json: 626 active jobs
[2025-12-19T22:38:05.178Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:38:08.178Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-19T22:38:08.179Z] [BOT] 📍 [ROUTING] "Hiring Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:38:08.627Z] [BOT] ✅ Created forum post: 🏢 Hiring Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Software Engineer @ ORG_9af9eef3 Technologies
[2025-12-19T22:38:10.399Z] [BOT] ✅ Created forum post: 🏢 Hiring Software Engineer @ ORG_9af9eef3 Technologies in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-19T22:38:11.900Z] [BOT] 💾 Marked as posted: Hiring Software Engineer @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T22:38:11.900Z] [BOT] 💾 BEFORE ARCHIVING: 627 jobs in database
[2025-12-19T22:38:11.901Z] [BOT] ✅ No jobs to archive (all 627 jobs within 7-day window)
[2025-12-19T22:38:11.907Z] [BOT] 💾 Saved posted_jobs.json: 627 active jobs
[2025-12-19T22:38:11.907Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:38:11.907Z] [BOT] 📍 [ROUTING] "Training & Placement on Informatica/ Microstrategy" @ ORG_9af9eef3 Technologies
[2025-12-19T22:38:11.907Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:38:12.141Z] [BOT] ✅ Created forum post: 🏢 Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2025-12-19T22:38:12.142Z] [BOT] ✅ Industry: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies
[2025-12-19T22:38:14.053Z] [BOT] ✅ Created forum post: 🏢 Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T22:38:15.554Z] [BOT] 💾 Marked as posted: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T22:38:15.554Z] [BOT] 💾 BEFORE ARCHIVING: 628 jobs in database
[2025-12-19T22:38:15.555Z] [BOT] ✅ No jobs to archive (all 628 jobs within 7-day window)
[2025-12-19T22:38:15.561Z] [BOT] 💾 Saved posted_jobs.json: 628 active jobs
[2025-12-19T22:38:15.561Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:38:15.561Z] [BOT] 📍 [ROUTING] "Software Engineer Position" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T22:38:15.746Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Position @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineer Position @ ORG_9af9eef3 Technologies
[2025-12-19T22:38:17.430Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Position @ ORG_9af9eef3 Technologies in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T22:38:18.932Z] [BOT] 💾 Marked as posted: Software Engineer Position @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T22:38:18.932Z] [BOT] 💾 BEFORE ARCHIVING: 629 jobs in database
[2025-12-19T22:38:18.933Z] [BOT] ✅ No jobs to archive (all 629 jobs within 7-day window)
[2025-12-19T22:38:18.938Z] [BOT] 💾 Saved posted_jobs.json: 629 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T22:38:21.939Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-19T22:38:21.940Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Advanced Scanning/Transmission Electron Microscopy - S/Tem" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-19T22:38:22.286Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Advanced Scanning/Transmission Electron Microscopy - S/Tem @ ORG_a867f63f Na in #📁・JID_e938df7b
[2025-12-19T22:38:22.287Z] [BOT] ✅ Industry: Postdoctoral Researcher - Advanced Scanning/Transmission Electron Microscopy - S/Tem @ ORG_a867f63f National Laboratory
[2025-12-19T22:38:24.179Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Advanced Scanning/Transmission Electron Microscopy - S/Tem @ ORG_a867f63f Na in #🌆・chicago
[2025-12-19T22:38:24.179Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-19T22:38:25.680Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Advanced Scanning/Transmission Electron Microscopy - S/Tem @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-19T22:38:25.680Z] [BOT] 💾 BEFORE ARCHIVING: 630 jobs in database
[2025-12-19T22:38:25.681Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2025-12-19T22:38:25.688Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2025-12-19T22:38:25.688Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:38:28.689Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-19T22:38:28.689Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Search Local Services team" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T22:38:28.689Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T22:38:29.068Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb
[2025-12-19T22:38:30.761Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-19T22:38:32.261Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Search Local Services team @ ORG_1bb6fcfb (instance #1)
[2025-12-19T22:38:32.262Z] [BOT] 💾 BEFORE ARCHIVING: 631 jobs in database
[2025-12-19T22:38:32.262Z] [BOT] ✅ No jobs to archive (all 631 jobs within 7-day window)
[2025-12-19T22:38:32.268Z] [BOT] 💾 Saved posted_jobs.json: 631 active jobs
[2025-12-19T22:38:32.268Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:38:32.268Z] [BOT] 📍 [ROUTING] "Graduate Researcher - Applied Machine Learning - Enterprise" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T22:38:32.268Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T22:38:32.571Z] [BOT] ✅ Created forum post: 🏢 Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-19T22:38:32.571Z] [BOT] ✅ Industry: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c
[2025-12-19T22:38:34.273Z] [BOT] ✅ Created forum post: 🏢 Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-19T22:38:34.273Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T22:38:35.774Z] [BOT] 💾 Marked as posted: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c (instance #1)
[2025-12-19T22:38:35.774Z] [BOT] 💾 BEFORE ARCHIVING: 632 jobs in database
[2025-12-19T22:38:35.774Z] [BOT] ✅ No jobs to archive (all 632 jobs within 7-day window)
[2025-12-19T22:38:35.781Z] [BOT] 💾 Saved posted_jobs.json: 632 active jobs
[2025-12-19T22:38:35.781Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:38:35.781Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Orchestration" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T22:38:35.976Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-19T22:38:35.976Z] [BOT] ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c
[2025-12-19T22:38:37.754Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🌉・san-francisco
[2025-12-19T22:38:37.754Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T22:38:39.255Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c (instance #1)
[2025-12-19T22:38:39.255Z] [BOT] 💾 BEFORE ARCHIVING: 633 jobs in database
[2025-12-19T22:38:39.255Z] [BOT] ✅ No jobs to archive (all 633 jobs within 7-day window)
[2025-12-19T22:38:39.261Z] [BOT] 💾 Saved posted_jobs.json: 633 active jobs
[2025-12-19T22:38:39.261Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning" @ ORG_08c9a13c
[2025-12-19T22:38:39.261Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T22:38:39.564Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c
[2025-12-19T22:38:41.269Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T22:38:42.770Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c (instance #1)
[2025-12-19T22:38:42.770Z] [BOT] 💾 BEFORE ARCHIVING: 634 jobs in database
[2025-12-19T22:38:42.770Z] [BOT] ✅ No jobs to archive (all 634 jobs within 7-day window)
[2025-12-19T22:38:42.776Z] [BOT] 💾 Saved posted_jobs.json: 634 active jobs
[2025-12-19T22:38:42.776Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T22:38:45.776Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-19T22:38:45.777Z] [BOT] ⏭️  Skipping duplicate: JID_6aa44917 (posted within 7 days)
[2025-12-19T22:38:45.777Z] [BOT] ⏭️  Skipping duplicate: JID_2aaae98d (posted within 7 days)
[2025-12-19T22:38:45.777Z] [BOT] ⏭️  Skipping duplicate: JID_a9519b8c (posted within 7 days)
[2025-12-19T22:38:45.777Z] [BOT] ⏭️  Skipping duplicate: JID_dd5696c2 (posted within 7 days)
⏭️  Skipping duplicate: JID_90b218d5 (posted within 7 days)
[2025-12-19T22:38:45.777Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_f18c7252-development_420917 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_2e2059fd (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_4b123aa8-detail (posted within 7 days)
[2025-12-19T22:38:45.778Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_4b4ef385-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_f0926b8f-detail (posted within 7 days)
[2025-12-19T22:38:45.780Z] [BOT] ✅ Loaded pending queue: 291 total (271 pending, 20 enriched, 0 posted)
[2025-12-19T22:38:45.784Z] [BOT] ✅ Saved pending queue: 291 total (271 pending, 10 enriched, 10 posted)
[2025-12-19T22:38:45.784Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T22:38:45.827Z] [BOT] 📂 Loaded 707 existing routing entries
[2025-12-19T22:38:45.875Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-19T22:38:45.875Z] [BOT] Total entries: 717
   Timestamp: 2025-12-19T22:38:45.871Z
[2025-12-19T22:38:45.875Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
[2025-12-19T22:38:45.875Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 1
   Skipped: 0
[2025-12-19T22:38:45.876Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
[2025-12-19T22:38:45.876Z] [BOT] Channels used: 10
   Top channels:
     1. #🤖・ai-jobs: 4 posts
     2. #🤠・austin: 3 posts
     3. #💻・tech-jobs: 3 posts
[2025-12-19T22:38:45.876Z] [BOT] 4. #🌉・san-francisco: 3 posts
     5. #💻・remote-usa: 1 posts
[2025-12-19T22:38:45.876Z] [BOT] [STATS] Channel stats saved
[2025-12-19T22:38:47.888Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2304) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
- [BOT ERROR] ❌ Error posting job Geospatial Analyst 1: DiscordAPIError[160006]: Maximum number of active threads reached
- [BOT] ❌ Industry post failed: Geospatial Analyst 1
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*