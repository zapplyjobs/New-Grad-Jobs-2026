# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T17:38:35.572Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T17:37:42.082Z] ========================================
[2026-01-04T17:37:42.084Z] Discord Bot Execution Log
[2026-01-04T17:37:42.084Z] Environment: GitHub Actions
[2026-01-04T17:37:42.084Z] Node Version: v20.19.6
[2026-01-04T17:37:42.085Z] ========================================
[2026-01-04T17:37:42.085Z] Environment Variables Check:
[2026-01-04T17:37:42.085Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T17:37:42.085Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.085Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T17:37:42.085Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T17:37:42.085Z] 
Multi-Channel Configuration:
[2026-01-04T17:37:42.085Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.085Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.085Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.085Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.085Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.086Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.086Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.086Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.086Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T17:37:42.086Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T17:37:42.086Z] 
Data Files Check:
[2026-01-04T17:37:42.087Z] .github/data/new_jobs.json: ✅ Exists (10 items, 52514 bytes)
[2026-01-04T17:37:42.091Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 630250 bytes)
[2026-01-04T17:37:42.091Z] 
========================================
[2026-01-04T17:37:42.091Z] Starting Enhanced Discord Bot...
[2026-01-04T17:37:42.091Z] ========================================
[2026-01-04T17:37:42.609Z] [BOT] ✅ Loaded V2 database: 1247 jobs
[2026-01-04T17:37:44.022Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T17:37:44.023Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T17:37:44.023Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T17:37:44.026Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T17:37:44.096Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T17:37:44.184Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T17:37:44.186Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T17:37:44.187Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2026-01-04T17:37:44.188Z] [BOT] ✅ Loaded pending queue: 53 total (33 pending, 20 enriched, 0 posted)
[2026-01-04T17:37:44.190Z] [BOT] ✅ Saved pending queue: 52 total (33 pending, 19 enriched, 0 posted)
[2026-01-04T17:37:44.190Z] [BOT] 🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 9 jobs (1 blacklisted)
[2026-01-04T17:37:44.190Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2026-01-04T17:37:44.191Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-04T17:37:44.191Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T17:37:44.195Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T17:37:44.196Z] [BOT] 📍 [ROUTING] "Data Analysis Coordinator" @ ORG_f43ca867
[2026-01-04T17:37:44.196Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:37:44.200Z] [BOT ERROR] (node:3081) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T17:37:44.419Z] [BOT] ✅ Created forum post: 🏢 Data Analysis Coordinator @ ORG_f43ca867 in #💻・tech-jobs
[2026-01-04T17:37:44.419Z] [BOT] ✅ Industry: Data Analysis Coordinator @ ORG_f43ca867
[2026-01-04T17:37:46.219Z] [BOT] ✅ Created forum post: 🏢 Data Analysis Coordinator @ ORG_f43ca867 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-04T17:37:47.721Z] [BOT] 💾 Marked as posted: Data Analysis Coordinator @ ORG_f43ca867 (instance #1)
[2026-01-04T17:37:47.721Z] [BOT] 💾 BEFORE ARCHIVING: 1248 jobs in database
[2026-01-04T17:37:47.722Z] [BOT] ✅ No jobs to archive (all 1248 jobs within 7-day window)
[2026-01-04T17:37:47.733Z] [BOT] 💾 Saved posted_jobs.json: 1248 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:37:47.734Z] [BOT] 📍 [ROUTING] "IT Data Warehouse Specialist" @ ORG_969850e5 Therapies
[2026-01-04T17:37:47.734Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:37:48.006Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・tech-jobs
  ✅ Industry: IT Data Warehouse Specialist @ ORG_969850e5 Therapies
[2026-01-04T17:37:49.736Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T17:37:51.237Z] [BOT] 💾 Marked as posted: IT Data Warehouse Specialist @ ORG_969850e5 Therapies (instance #1)
[2026-01-04T17:37:51.237Z] [BOT] 💾 BEFORE ARCHIVING: 1249 jobs in database
[2026-01-04T17:37:51.238Z] [BOT] ✅ No jobs to archive (all 1249 jobs within 7-day window)
[2026-01-04T17:37:51.246Z] [BOT] 💾 Saved posted_jobs.json: 1249 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:37:54.246Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-04T17:37:54.246Z] [BOT] 📍 [ROUTING] "Meter Data Analyst 1" @ ORG_48c95877 Energy
[2026-01-04T17:37:54.246Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T17:37:54.585Z] [BOT] ✅ Created forum post: 🏢 Meter Data Analyst 1 @ ORG_48c95877 Energy in #📈・JID_fb739488
[2026-01-04T17:37:54.586Z] [BOT] ✅ Industry: Meter Data Analyst 1 @ ORG_48c95877 Energy
[2026-01-04T17:37:56.450Z] [BOT] ✅ Created forum post: 🏢 Meter Data Analyst 1 @ ORG_48c95877 Energy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T17:37:57.951Z] [BOT] 💾 Marked as posted: Meter Data Analyst 1 @ ORG_48c95877 Energy (instance #1)
[2026-01-04T17:37:57.951Z] [BOT] 💾 BEFORE ARCHIVING: 1250 jobs in database
[2026-01-04T17:37:57.953Z] [BOT] ✅ No jobs to archive (all 1250 jobs within 7-day window)
[2026-01-04T17:37:57.962Z] [BOT] 💾 Saved posted_jobs.json: 1250 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:37:57.962Z] [BOT] 📍 [ROUTING] "Data Engineer 1 - Infra Data & Analytics" @ ORG_0baaf6f2 Express
   Category: DATA-SCIENCE (matched: "data engineering")
[2026-01-04T17:37:57.963Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T17:37:58.566Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Infra Data & Analytics @ ORG_0baaf6f2 Express in #📈・JID_fb739488
  ✅ Industry: Data Engineer 1 - Infra Data & Analytics @ ORG_0baaf6f2 Express
[2026-01-04T17:38:00.376Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Infra Data & Analytics @ ORG_0baaf6f2 Express in #🗽・new-york
[2026-01-04T17:38:00.376Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-04T17:38:01.877Z] [BOT] 💾 Marked as posted: Data Engineer 1 - Infra Data & Analytics @ ORG_0baaf6f2 Express (instance #1)
[2026-01-04T17:38:01.878Z] [BOT] 💾 BEFORE ARCHIVING: 1251 jobs in database
[2026-01-04T17:38:01.878Z] [BOT] ✅ No jobs to archive (all 1251 jobs within 7-day window)
[2026-01-04T17:38:01.888Z] [BOT] 💾 Saved posted_jobs.json: 1251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:38:04.889Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-04T17:38:04.890Z] [BOT] 📍 [ROUTING] "Automation Software Engineer" @ ORG_0c79a9c2 Materials
[2026-01-04T17:38:04.891Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T17:38:05.137Z] [BOT] ✅ Created forum post: 🏢 Automation Software Engineer @ ORG_0c79a9c2 Materials in #🤖・ai-jobs
  ✅ Industry: Automation Software Engineer @ ORG_0c79a9c2 Materials
[2026-01-04T17:38:07.297Z] [BOT] ✅ Created forum post: 🏢 Automation Software Engineer @ ORG_0c79a9c2 Materials in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-04T17:38:08.797Z] [BOT] 💾 Marked as posted: Automation Software Engineer @ ORG_0c79a9c2 Materials (instance #1)
[2026-01-04T17:38:08.797Z] [BOT] 💾 BEFORE ARCHIVING: 1252 jobs in database
[2026-01-04T17:38:08.798Z] [BOT] ✅ No jobs to archive (all 1252 jobs within 7-day window)
[2026-01-04T17:38:08.808Z] [BOT] 💾 Saved posted_jobs.json: 1252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:38:08.809Z] [BOT] 📍 [ROUTING] "Product Line Management Data Science" @ ORG_0c79a9c2 Materials
[2026-01-04T17:38:08.809Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T17:38:09.255Z] [BOT] ✅ Created forum post: 🏢 Product Line Management Data Science @ ORG_0c79a9c2 Materials in #🤖・ai-jobs
  ✅ Industry: Product Line Management Data Science @ ORG_0c79a9c2 Materials
[2026-01-04T17:38:10.948Z] [BOT] ✅ Created forum post: 🏢 Product Line Management Data Science @ ORG_0c79a9c2 Materials in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T17:38:12.448Z] [BOT] 💾 Marked as posted: Product Line Management Data Science @ ORG_0c79a9c2 Materials (instance #1)
[2026-01-04T17:38:12.448Z] [BOT] 💾 BEFORE ARCHIVING: 1253 jobs in database
[2026-01-04T17:38:12.449Z] [BOT] ✅ No jobs to archive (all 1253 jobs within 7-day window)
[2026-01-04T17:38:12.458Z] [BOT] 💾 Saved posted_jobs.json: 1253 active jobs
[2026-01-04T17:38:12.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T17:38:12.458Z] [BOT] 📍 [ROUTING] "Research Scientist" @ ORG_72fd3ae0
[2026-01-04T17:38:12.458Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T17:38:12.672Z] [BOT] ✅ Created forum post: 🎨 Research Scientist @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-04T17:38:12.672Z] [BOT] ✅ Industry: Research Scientist @ ORG_72fd3ae0
[2026-01-04T17:38:14.444Z] [BOT] ✅ Created forum post: 🎨 Research Scientist @ ORG_72fd3ae0 in #🌉・san-francisco
[2026-01-04T17:38:14.445Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T17:38:15.945Z] [BOT] 💾 Marked as posted: Research Scientist @ ORG_72fd3ae0 (instance #1)
[2026-01-04T17:38:15.946Z] [BOT] 💾 BEFORE ARCHIVING: 1254 jobs in database
[2026-01-04T17:38:15.946Z] [BOT] ✅ No jobs to archive (all 1254 jobs within 7-day window)
[2026-01-04T17:38:15.955Z] [BOT] 💾 Saved posted_jobs.json: 1254 active jobs
[2026-01-04T17:38:15.955Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T17:38:18.956Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T17:38:18.957Z] [BOT] 📍 [ROUTING] "ATC Salesforce Analyst - Nashville" @ ORG_6cd9e83c
[2026-01-04T17:38:18.957Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T17:38:19.209Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #💲・sales-jobs
  ✅ Industry: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c
[2026-01-04T17:38:20.981Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T17:38:22.482Z] [BOT] 💾 Marked as posted: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c (instance #1)
[2026-01-04T17:38:22.482Z] [BOT] 💾 BEFORE ARCHIVING: 1255 jobs in database
[2026-01-04T17:38:22.483Z] [BOT] ✅ No jobs to archive (all 1255 jobs within 7-day window)
[2026-01-04T17:38:22.493Z] [BOT] 💾 Saved posted_jobs.json: 1255 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:38:25.493Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-04T17:38:25.493Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
[2026-01-04T17:38:25.493Z] [BOT] Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-04T17:38:25.817Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
[2026-01-04T17:38:25.817Z] [BOT] ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2026-01-04T17:38:27.701Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
[2026-01-04T17:38:27.702Z] [BOT] ✅ Location: 🤠・austin
[2026-01-04T17:38:29.203Z] [BOT] 💾 Marked as posted: GIS Analyst 1 @ ORG_fc33f732 of Amarillo (instance #1)
[2026-01-04T17:38:29.203Z] [BOT] 💾 BEFORE ARCHIVING: 1256 jobs in database
[2026-01-04T17:38:29.204Z] [BOT] ✅ No jobs to archive (all 1256 jobs within 7-day window)
[2026-01-04T17:38:29.213Z] [BOT] 💾 Saved posted_jobs.json: 1256 active jobs
[2026-01-04T17:38:29.213Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T17:38:32.214Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-04T17:38:32.215Z] [BOT] ⏭️  Skipping duplicate: JID_e4b8847e-coordinator_jr7544 (posted within 7 days)
[2026-01-04T17:38:32.215Z] [BOT] ⏭️  Skipping duplicate: JID_dbb558cc-i_jr-9238 (posted within 7 days)
[2026-01-04T17:38:32.215Z] [BOT] ⏭️  Skipping duplicate: JID_d10a2204-_r2519059 (posted within 7 days)
⏭️  Skipping duplicate: JID_57ea17c9-_r2519079-1 (posted within 7 days)
[2026-01-04T17:38:32.215Z] [BOT] ⏭️  Skipping duplicate: JID_fa487e74-naelfy26_r00300075 (posted within 7 days)
[2026-01-04T17:38:32.215Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ca9e8846-scientist_r163076 (posted within 7 days)
[2026-01-04T17:38:32.215Z] [BOT] ⏭️  Skipping duplicate: JID_b4b1b8ec-specialist_r0043523 (posted within 7 days)
⏭️  Skipping duplicate: JID_5088c32b-amarillo_external_career_site-JID_78f98b01-i_jr2267 (posted within 7 days)
[2026-01-04T17:38:32.215Z] [BOT] ⏭️  Skipping duplicate: JID_8600c303 (posted within 7 days)
[2026-01-04T17:38:32.217Z] [BOT] ✅ Loaded pending queue: 52 total (33 pending, 19 enriched, 0 posted)
[2026-01-04T17:38:32.219Z] [BOT] ✅ Saved pending queue: 52 total (33 pending, 10 enriched, 9 posted)
[2026-01-04T17:38:32.219Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T17:38:32.266Z] [BOT] 📂 Loaded 2162 existing routing entries
[2026-01-04T17:38:32.325Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 2171
[2026-01-04T17:38:32.325Z] [BOT] Timestamp: 2026-01-04T17:38:32.311Z
[2026-01-04T17:38:32.326Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 19
   Successful: 18
   Failed: 0
[2026-01-04T17:38:32.326Z] [BOT] Skipped: 1
[2026-01-04T17:38:32.326Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 9
   Top channels:
[2026-01-04T17:38:32.326Z] [BOT] 1. #🤠・austin: 3 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💻・tech-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-04T17:38:32.326Z] [BOT] [STATS] Channel stats saved
[2026-01-04T17:38:34.338Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3081) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*