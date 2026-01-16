# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T22:29:54.683Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T22:28:58.244Z] ========================================
[2026-01-16T22:28:58.246Z] Discord Bot Execution Log
[2026-01-16T22:28:58.246Z] Environment: GitHub Actions
[2026-01-16T22:28:58.246Z] Node Version: v20.19.6
[2026-01-16T22:28:58.246Z] ========================================
[2026-01-16T22:28:58.246Z] Environment Variables Check:
[2026-01-16T22:28:58.246Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T22:28:58.246Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.246Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T22:28:58.246Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T22:28:58.246Z] 
Multi-Channel Configuration:
[2026-01-16T22:28:58.246Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.247Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.247Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.247Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.247Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.247Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.247Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.247Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.247Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T22:28:58.247Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T22:28:58.247Z] 
Data Files Check:
[2026-01-16T22:28:58.248Z] .github/data/new_jobs.json: ✅ Exists (10 items, 37478 bytes)
[2026-01-16T22:28:58.256Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1168845 bytes)
[2026-01-16T22:28:58.256Z] 
========================================
[2026-01-16T22:28:58.256Z] Starting Enhanced Discord Bot...
[2026-01-16T22:28:58.256Z] ========================================
[2026-01-16T22:28:58.774Z] [BOT] ✅ Loaded V2 database: 2155 jobs
[2026-01-16T22:28:59.910Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T22:28:59.910Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T22:28:59.911Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T22:29:00.022Z] [BOT] ✅ Loaded pending queue: 2783 total (2763 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst at 360 IT Professionals
[2026-01-16T22:29:00.024Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T22:29:00.024Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T22:29:00.025Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T22:29:00.025Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-16T22:29:00.026Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T22:29:00.030Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T22:29:00.030Z] [BOT] 📍 [ROUTING] "Data Analyst" @ 360 IT Professionals
[2026-01-16T22:29:00.030Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T22:29:00.047Z] [BOT ERROR] (node:3495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T22:29:00.285Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ 360 IT Professionals in #📈・JID_fb739488
[2026-01-16T22:29:00.285Z] [BOT] ✅ Industry: Data Analyst @ 360 IT Professionals
[2026-01-16T22:29:01.995Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ 360 IT Professionals in #🌉・san-francisco
[2026-01-16T22:29:01.996Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-16T22:29:03.496Z] [BOT] 💾 Marked as posted: Data Analyst @ 360 IT Professionals (instance #1)
[2026-01-16T22:29:03.496Z] [BOT] 💾 BEFORE ARCHIVING: 2156 jobs in database
[2026-01-16T22:29:03.498Z] [BOT] ✅ No jobs to archive (all 2156 jobs within 7-day window)
[2026-01-16T22:29:03.510Z] [BOT] 💾 Saved posted_jobs.json: 2156 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:29:06.510Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-16T22:29:06.510Z] [BOT] 📍 [ROUTING] "Salesforce BA" @ 360 IT Professionals
[2026-01-16T22:29:06.511Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-16T22:29:06.901Z] [BOT] ✅ Created forum post: 🏢 Salesforce BA @ 360 IT Professionals in #🩺・healthcare-jobs
[2026-01-16T22:29:06.901Z] [BOT] ✅ Industry: Salesforce BA @ 360 IT Professionals
[2026-01-16T22:29:08.650Z] [BOT] ✅ Created forum post: 🏢 Salesforce BA @ 360 IT Professionals in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T22:29:10.149Z] [BOT] 💾 Marked as posted: Salesforce BA @ 360 IT Professionals (instance #1)
[2026-01-16T22:29:10.150Z] [BOT] 💾 BEFORE ARCHIVING: 2157 jobs in database
[2026-01-16T22:29:10.151Z] [BOT] ✅ No jobs to archive (all 2157 jobs within 7-day window)
[2026-01-16T22:29:10.167Z] [BOT] 💾 Saved posted_jobs.json: 2157 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:29:13.168Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-16T22:29:13.169Z] [BOT] 📍 [ROUTING] "Geospatial Analyst 2" @ ORG_52575429 Consulting
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-16T22:29:13.417Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst 2 @ ORG_52575429 Consulting in #📣・marketing-jobs
  ✅ Industry: Geospatial Analyst 2 @ ORG_52575429 Consulting
[2026-01-16T22:29:15.269Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst 2 @ ORG_52575429 Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T22:29:16.769Z] [BOT] 💾 Marked as posted: Geospatial Analyst 2 @ ORG_52575429 Consulting (instance #1)
[2026-01-16T22:29:16.769Z] [BOT] 💾 BEFORE ARCHIVING: 2158 jobs in database
[2026-01-16T22:29:16.771Z] [BOT] ✅ No jobs to archive (all 2158 jobs within 7-day window)
[2026-01-16T22:29:16.785Z] [BOT] 💾 Saved posted_jobs.json: 2158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:29:19.786Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-16T22:29:19.787Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_4c57d8f0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:29:20.185Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career @ ORG_4c57d8f0 in #💻・tech-jobs
[2026-01-16T22:29:20.185Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_4c57d8f0
[2026-01-16T22:29:22.030Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career @ ORG_4c57d8f0 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-16T22:29:23.530Z] [BOT] 💾 Marked as posted: Software Engineer – Early Career @ ORG_4c57d8f0 (instance #1)
[2026-01-16T22:29:23.530Z] [BOT] 💾 BEFORE ARCHIVING: 2159 jobs in database
[2026-01-16T22:29:23.532Z] [BOT] ✅ No jobs to archive (all 2159 jobs within 7-day window)
[2026-01-16T22:29:23.546Z] [BOT] 💾 Saved posted_jobs.json: 2159 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:29:23.546Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-16T22:29:23.546Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:29:23.763Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c
[2026-01-16T22:29:25.462Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T22:29:26.963Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - AI Infra Compute - 2026 Start-PhD @ ORG_08c9a13c (instance #1)
[2026-01-16T22:29:26.963Z] [BOT] 💾 BEFORE ARCHIVING: 2160 jobs in database
[2026-01-16T22:29:26.964Z] [BOT] ✅ No jobs to archive (all 2160 jobs within 7-day window)
[2026-01-16T22:29:26.979Z] [BOT] 💾 Saved posted_jobs.json: 2160 active jobs
[2026-01-16T22:29:26.979Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 1" @ ORG_efa0389a Hotels
   Category: TECH (matched: "software")
[2026-01-16T22:29:26.979Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:29:27.162Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_efa0389a Hotels in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_efa0389a Hotels
[2026-01-16T22:29:28.859Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_efa0389a Hotels in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T22:29:30.360Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_efa0389a Hotels (instance #1)
[2026-01-16T22:29:30.360Z] [BOT] 💾 BEFORE ARCHIVING: 2161 jobs in database
[2026-01-16T22:29:30.361Z] [BOT] ✅ No jobs to archive (all 2161 jobs within 7-day window)
[2026-01-16T22:29:30.377Z] [BOT] 💾 Saved posted_jobs.json: 2161 active jobs
[2026-01-16T22:29:30.377Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer I" @ ORG_8004e881
   Category: TECH (matched: "software")
[2026-01-16T22:29:30.378Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:29:30.922Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_8004e881 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_8004e881
[2026-01-16T22:29:32.646Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_8004e881 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T22:29:34.147Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_8004e881 (instance #1)
[2026-01-16T22:29:34.148Z] [BOT] 💾 BEFORE ARCHIVING: 2162 jobs in database
[2026-01-16T22:29:34.149Z] [BOT] ✅ No jobs to archive (all 2162 jobs within 7-day window)
[2026-01-16T22:29:34.163Z] [BOT] 💾 Saved posted_jobs.json: 2162 active jobs
[2026-01-16T22:29:34.163Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T22:29:34.163Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T22:29:34.405Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2026-01-16T22:29:36.209Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T22:29:37.710Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-16T22:29:37.711Z] [BOT] 💾 BEFORE ARCHIVING: 2163 jobs in database
[2026-01-16T22:29:37.712Z] [BOT] ✅ No jobs to archive (all 2163 jobs within 7-day window)
[2026-01-16T22:29:37.725Z] [BOT] 💾 Saved posted_jobs.json: 2163 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:29:40.725Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T22:29:40.726Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Applied Machine Learning - Mldev" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T22:29:40.726Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T22:29:41.146Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c
[2026-01-16T22:29:43.108Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T22:29:44.608Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Applied Machine Learning - Mldev @ ORG_08c9a13c (instance #1)
[2026-01-16T22:29:44.608Z] [BOT] 💾 BEFORE ARCHIVING: 2164 jobs in database
[2026-01-16T22:29:44.610Z] [BOT] ✅ No jobs to archive (all 2164 jobs within 7-day window)
[2026-01-16T22:29:44.626Z] [BOT] 💾 Saved posted_jobs.json: 2164 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:29:44.627Z] [BOT] 📍 [ROUTING] "Sales Development Representative" @ nominal
[2026-01-16T22:29:44.627Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T22:29:44.951Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative @ nominal in #🤖・ai-jobs
[2026-01-16T22:29:44.951Z] [BOT] ✅ Industry: Sales Development Representative @ nominal
[2026-01-16T22:29:46.662Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative @ nominal in #🤠・austin
[2026-01-16T22:29:46.662Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T22:29:48.162Z] [BOT] 💾 Marked as posted: Sales Development Representative @ nominal (instance #1)
[2026-01-16T22:29:48.162Z] [BOT] 💾 BEFORE ARCHIVING: 2165 jobs in database
[2026-01-16T22:29:48.164Z] [BOT] ✅ No jobs to archive (all 2165 jobs within 7-day window)
[2026-01-16T22:29:48.177Z] [BOT] 💾 Saved posted_jobs.json: 2165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T22:29:51.178Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T22:29:51.178Z] [BOT] ⏭️  Skipping duplicate: JID_84048b2c (posted within 7 days)
[2026-01-16T22:29:51.178Z] [BOT] ⏭️  Skipping duplicate: JID_ca6171f1 (posted within 7 days)
[2026-01-16T22:29:51.179Z] [BOT] ⏭️  Skipping duplicate: JID_73d69676 (posted within 7 days)
[2026-01-16T22:29:51.179Z] [BOT] ⏭️  Skipping duplicate: JID_00302ae8 (posted within 7 days)
[2026-01-16T22:29:51.179Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a56de89c-detail (posted within 7 days)
[2026-01-16T22:29:51.179Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_7860474a-detail (posted within 7 days)
[2026-01-16T22:29:51.179Z] [BOT] ⏭️  Skipping duplicate: JID_fe7b93db (posted within 7 days)
[2026-01-16T22:29:51.179Z] [BOT] ⏭️  Skipping duplicate: JID_3337dfd1-1_r20319 (posted within 7 days)
[2026-01-16T22:29:51.179Z] [BOT] ⏭️  Skipping duplicate: JID_a83753c7-i_10125661 (posted within 7 days)
[2026-01-16T22:29:51.180Z] [BOT] ⏭️  Skipping duplicate: JID_f64103af (posted within 7 days)
[2026-01-16T22:29:51.290Z] [BOT] ✅ Loaded pending queue: 2783 total (2763 pending, 20 enriched, 0 posted)
[2026-01-16T22:29:51.446Z] [BOT] ✅ Saved pending queue: 2783 total (2763 pending, 10 enriched, 10 posted)
[2026-01-16T22:29:51.446Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T22:29:51.503Z] [BOT] 📂 Loaded 4385 existing routing entries
[2026-01-16T22:29:51.571Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T22:29:51.572Z] [BOT] Total entries: 4395
   Timestamp: 2026-01-16T22:29:51.552Z
[2026-01-16T22:29:51.572Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 20
[2026-01-16T22:29:51.572Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-16T22:29:51.573Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-16T22:29:51.573Z] [BOT] Total posts: 20
   Channels used: 10
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-16T22:29:51.573Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #🌉・san-francisco: 3 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-16T22:29:51.573Z] [BOT] [STATS] Channel stats saved
[2026-01-16T22:29:53.598Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*