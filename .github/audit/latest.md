# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T07:28:25.043Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T07:27:31.845Z] ========================================
[2026-01-15T07:27:31.847Z] Discord Bot Execution Log
[2026-01-15T07:27:31.847Z] Environment: GitHub Actions
[2026-01-15T07:27:31.847Z] Node Version: v20.19.6
[2026-01-15T07:27:31.847Z] ========================================
[2026-01-15T07:27:31.847Z] Environment Variables Check:
[2026-01-15T07:27:31.847Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T07:27:31.847Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.848Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T07:27:31.848Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T07:27:31.848Z] 
Multi-Channel Configuration:
[2026-01-15T07:27:31.848Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.848Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.848Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.848Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.848Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.848Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.848Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.848Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.849Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T07:27:31.849Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T07:27:31.849Z] 
Data Files Check:
[2026-01-15T07:27:31.849Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57022 bytes)
[2026-01-15T07:27:31.856Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 896764 bytes)
[2026-01-15T07:27:31.856Z] 
========================================
[2026-01-15T07:27:31.856Z] Starting Enhanced Discord Bot...
[2026-01-15T07:27:31.856Z] ========================================
[2026-01-15T07:27:32.383Z] [BOT] ✅ Loaded V2 database: 1679 jobs
[2026-01-15T07:27:33.111Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T07:27:33.112Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T07:27:33.112Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T07:27:33.224Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Associate at University of Maryland - College Park
[2026-01-15T07:27:33.226Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T07:27:33.226Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T07:27:33.226Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T07:27:33.227Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T07:27:33.227Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T07:27:33.232Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T07:27:33.233Z] [BOT] 📍 [ROUTING] "Postdoctoral Associate" @ ORG_9d38443e of Maryland - College Park
[2026-01-15T07:27:33.233Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T07:27:33.250Z] [BOT ERROR] (node:2769) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T07:27:33.502Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Associate @ ORG_9d38443e of Maryland - College Park in #🤖・ai-jobs
[2026-01-15T07:27:33.502Z] [BOT] ✅ Industry: Postdoctoral Associate @ ORG_9d38443e of Maryland - College Park
[2026-01-15T07:27:35.170Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Associate @ ORG_9d38443e of Maryland - College Park in #💻・remote-usa
[2026-01-15T07:27:35.170Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T07:27:36.670Z] [BOT] 💾 Marked as posted: Postdoctoral Associate @ ORG_9d38443e of Maryland - College Park (instance #1)
[2026-01-15T07:27:36.671Z] [BOT] 💾 BEFORE ARCHIVING: 1680 jobs in database
[2026-01-15T07:27:36.672Z] [BOT] ✅ No jobs to archive (all 1680 jobs within 7-day window)
[2026-01-15T07:27:36.688Z] [BOT] 💾 Saved posted_jobs.json: 1680 active jobs
[2026-01-15T07:27:36.688Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:27:36.688Z] [BOT] 📍 [ROUTING] "Part-Time Research Assistant/Programmer - Yanxi Liu" @ ORG_478e100e University
[2026-01-15T07:27:36.688Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:27:36.877Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University in #🤖・ai-jobs
[2026-01-15T07:27:36.878Z] [BOT] ✅ Industry: Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University
[2026-01-15T07:27:38.559Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University in #💻・remote-usa
[2026-01-15T07:27:38.559Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T07:27:40.060Z] [BOT] 💾 Marked as posted: Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University (instance #1)
[2026-01-15T07:27:40.061Z] [BOT] 💾 BEFORE ARCHIVING: 1681 jobs in database
[2026-01-15T07:27:40.062Z] [BOT] ✅ No jobs to archive (all 1681 jobs within 7-day window)
[2026-01-15T07:27:40.072Z] [BOT] 💾 Saved posted_jobs.json: 1681 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:27:40.072Z] [BOT] 📍 [ROUTING] "Senior Software Engineer" @ ORG_c46dc795 Innovation
[2026-01-15T07:27:40.072Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:27:40.308Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_c46dc795 Innovation in #🤖・ai-jobs
[2026-01-15T07:27:40.308Z] [BOT] ✅ Industry: Senior Software Engineer @ ORG_c46dc795 Innovation
[2026-01-15T07:27:41.961Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_c46dc795 Innovation in #🚌・boston
[2026-01-15T07:27:41.961Z] [BOT] ✅ Location: 🚌・boston
[2026-01-15T07:27:43.462Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_c46dc795 Innovation (instance #1)
[2026-01-15T07:27:43.462Z] [BOT] 💾 BEFORE ARCHIVING: 1682 jobs in database
[2026-01-15T07:27:43.464Z] [BOT] ✅ No jobs to archive (all 1682 jobs within 7-day window)
[2026-01-15T07:27:43.477Z] [BOT] 💾 Saved posted_jobs.json: 1682 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:27:43.477Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_58b7c913 & Gamble (P&G)
[2026-01-15T07:27:43.477Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T07:27:43.899Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_58b7c913 & Gamble (P&G) in #🤖・ai-jobs
  ✅ Industry: Data Scientist @ ORG_58b7c913 & Gamble (P&G)
[2026-01-15T07:27:45.559Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_58b7c913 & Gamble (P&G) in #💻・remote-usa
[2026-01-15T07:27:45.559Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T07:27:47.060Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_58b7c913 & Gamble (P&G) (instance #1)
[2026-01-15T07:27:47.060Z] [BOT] 💾 BEFORE ARCHIVING: 1683 jobs in database
[2026-01-15T07:27:47.062Z] [BOT] ✅ No jobs to archive (all 1683 jobs within 7-day window)
[2026-01-15T07:27:47.073Z] [BOT] 💾 Saved posted_jobs.json: 1683 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:27:50.074Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2026-01-15T07:27:50.074Z] [BOT] 📍 [ROUTING] "IT Applications Specialist" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-15T07:27:50.440Z] [BOT] ✅ Created forum post: 🏢 IT Applications Specialist @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: IT Applications Specialist @ ORG_478e100e University
[2026-01-15T07:27:52.136Z] [BOT] ✅ Created forum post: 🏢 IT Applications Specialist @ ORG_478e100e University in #💻・remote-usa
[2026-01-15T07:27:52.136Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T07:27:53.637Z] [BOT] 💾 Marked as posted: IT Applications Specialist @ ORG_478e100e University (instance #1)
[2026-01-15T07:27:53.637Z] [BOT] 💾 BEFORE ARCHIVING: 1684 jobs in database
[2026-01-15T07:27:53.638Z] [BOT] ✅ No jobs to archive (all 1684 jobs within 7-day window)
[2026-01-15T07:27:53.652Z] [BOT] 💾 Saved posted_jobs.json: 1684 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:27:53.653Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment" @ ORG_478e100e University
   Category: HR (matched: "hr")
[2026-01-15T07:27:53.653Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-15T07:27:53.841Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment @ ORG_478e100e Unive in #📁・JID_e938df7b
  ✅ Industry: Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment @ ORG_478e100e University
[2026-01-15T07:27:55.575Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment @ ORG_478e100e Unive in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T07:27:57.077Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment @ ORG_478e100e University (instance #1)
[2026-01-15T07:27:57.077Z] [BOT] 💾 BEFORE ARCHIVING: 1685 jobs in database
[2026-01-15T07:27:57.078Z] [BOT] ✅ No jobs to archive (all 1685 jobs within 7-day window)
[2026-01-15T07:27:57.089Z] [BOT] 💾 Saved posted_jobs.json: 1685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:28:00.090Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-15T07:28:00.090Z] [BOT] 📍 [ROUTING] "Senior Salesforce Marketing Cloud Developer" @ ORG_cb7d16c1 Warrior Project
[2026-01-15T07:28:00.090Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:28:00.554Z] [BOT] ✅ Created forum post: 🏢 Senior Salesforce Marketing Cloud Developer @ ORG_cb7d16c1 Warrior Project in #💻・tech-jobs
  ✅ Industry: Senior Salesforce Marketing Cloud Developer @ ORG_cb7d16c1 Warrior Project
[2026-01-15T07:28:02.267Z] [BOT] ✅ Created forum post: 🏢 Senior Salesforce Marketing Cloud Developer @ ORG_cb7d16c1 Warrior Project in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T07:28:03.768Z] [BOT] 💾 Marked as posted: Senior Salesforce Marketing Cloud Developer @ ORG_cb7d16c1 Warrior Project (instance #1)
[2026-01-15T07:28:03.768Z] [BOT] 💾 BEFORE ARCHIVING: 1686 jobs in database
[2026-01-15T07:28:03.769Z] [BOT] ✅ No jobs to archive (all 1686 jobs within 7-day window)
[2026-01-15T07:28:03.781Z] [BOT] 💾 Saved posted_jobs.json: 1686 active jobs
[2026-01-15T07:28:03.782Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:28:03.782Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins" @ ORG_9d38443e of Texas - Austin
[2026-01-15T07:28:03.782Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:28:04.092Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins in #💻・tech-jobs
[2026-01-15T07:28:04.092Z] [BOT] ✅ Industry: Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins @ ORG_9d38443e of Texas - Austin
[2026-01-15T07:28:06.055Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T07:28:07.556Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-15T07:28:07.557Z] [BOT] 💾 BEFORE ARCHIVING: 1687 jobs in database
[2026-01-15T07:28:07.558Z] [BOT] ✅ No jobs to archive (all 1687 jobs within 7-day window)
[2026-01-15T07:28:07.569Z] [BOT] 💾 Saved posted_jobs.json: 1687 active jobs
[2026-01-15T07:28:07.569Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:28:07.570Z] [BOT] 📍 [ROUTING] "GNC Simulation Engineer 1" @ ORG_68339b13 Space
[2026-01-15T07:28:07.570Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:28:08.937Z] [BOT] ✅ Created forum post: 🏢 GNC Simulation Engineer 1 @ ORG_68339b13 Space in #💻・tech-jobs
[2026-01-15T07:28:08.938Z] [BOT] ✅ Industry: GNC Simulation Engineer 1 @ ORG_68339b13 Space
[2026-01-15T07:28:10.611Z] [BOT] ✅ Created forum post: 🏢 GNC Simulation Engineer 1 @ ORG_68339b13 Space in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-15T07:28:12.112Z] [BOT] 💾 Marked as posted: GNC Simulation Engineer 1 @ ORG_68339b13 Space (instance #1)
[2026-01-15T07:28:12.112Z] [BOT] 💾 BEFORE ARCHIVING: 1688 jobs in database
[2026-01-15T07:28:12.113Z] [BOT] ✅ No jobs to archive (all 1688 jobs within 7-day window)
[2026-01-15T07:28:12.125Z] [BOT] 💾 Saved posted_jobs.json: 1688 active jobs
[2026-01-15T07:28:12.125Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:28:15.125Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-15T07:28:15.126Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_0aa5052d State University (LSU)
   Category: FINANCE (matched: "tax")
[2026-01-15T07:28:15.126Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2026-01-15T07:28:15.386Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💰・finance-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU)
[2026-01-15T07:28:17.189Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:28:18.690Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) (instance #1)
[2026-01-15T07:28:18.691Z] [BOT] 💾 BEFORE ARCHIVING: 1689 jobs in database
[2026-01-15T07:28:18.692Z] [BOT] ✅ No jobs to archive (all 1689 jobs within 7-day window)
[2026-01-15T07:28:18.703Z] [BOT] 💾 Saved posted_jobs.json: 1689 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:28:21.704Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T07:28:21.705Z] [BOT] ⏭️  Skipping duplicate: JID_59bd0186-associate_jr100715 (posted within 7 days)
[2026-01-15T07:28:21.705Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_7dee146b-time_req_0000067530-1 (posted within 7 days)
[2026-01-15T07:28:21.705Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_751a31a1-liu_req_0000069003-1 (posted within 7 days)
[2026-01-15T07:28:21.705Z] [BOT] ⏭️  Skipping duplicate: JID_affb5d98-onto_careers-JID_e01449f5-engineer_r-4963 (posted within 7 days)
[2026-01-15T07:28:21.705Z] [BOT] ⏭️  Skipping duplicate: JID_d501f265-_r000135859-1 (posted within 7 days)
[2026-01-15T07:28:21.705Z] [BOT] ⏭️  Skipping duplicate: JID_00c7b94d-developer_r14110 (posted within 7 days)
[2026-01-15T07:28:21.706Z] [BOT] ⏭️  Skipping duplicate: JID_c3d3f5d4-researcher_r00109651 (posted within 7 days)
[2026-01-15T07:28:21.706Z] [BOT] ⏭️  Skipping duplicate: JID_c1e7d849-basins_r_00034762-1 (posted within 7 days)
[2026-01-15T07:28:21.706Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_ca1c6dd8-experiment_req_0000043392-2 (posted within 7 days)
[2026-01-15T07:28:21.706Z] [BOT] ⏭️  Skipping duplicate: JID_9861af75 (posted within 7 days)
[2026-01-15T07:28:21.818Z] [BOT] ✅ Loaded pending queue: 2728 total (2708 pending, 20 enriched, 0 posted)
[2026-01-15T07:28:21.987Z] [BOT] ✅ Saved pending queue: 2728 total (2708 pending, 10 enriched, 10 posted)
[2026-01-15T07:28:21.988Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T07:28:22.043Z] [BOT] 📂 Loaded 3855 existing routing entries
[2026-01-15T07:28:22.106Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T07:28:22.106Z] [BOT] Total entries: 3865
   Timestamp: 2026-01-15T07:28:22.090Z
[2026-01-15T07:28:22.107Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
   Successful: 20
[2026-01-15T07:28:22.107Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-15T07:28:22.107Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T07:28:22.107Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 10
   Top channels:
[2026-01-15T07:28:22.107Z] [BOT] 1. #💻・remote-usa: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・tech-jobs: 3 posts
     4. #📁・JID_e938df7b: 2 posts
     5. #🚌・boston: 1 posts
[2026-01-15T07:28:22.108Z] [BOT] [STATS] Channel stats saved
[2026-01-15T07:28:24.132Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2769) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*