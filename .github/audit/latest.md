# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T07:15:35.368Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T07:14:48.494Z] ========================================
[2026-01-15T07:14:48.496Z] Discord Bot Execution Log
[2026-01-15T07:14:48.496Z] Environment: GitHub Actions
[2026-01-15T07:14:48.496Z] Node Version: v20.19.6
[2026-01-15T07:14:48.496Z] ========================================
[2026-01-15T07:14:48.496Z] Environment Variables Check:
[2026-01-15T07:14:48.496Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T07:14:48.496Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.497Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T07:14:48.497Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T07:14:48.497Z] 
Multi-Channel Configuration:
[2026-01-15T07:14:48.497Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.497Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.497Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.497Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.497Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.497Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.497Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.497Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.498Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T07:14:48.498Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T07:14:48.498Z] 
Data Files Check:
[2026-01-15T07:14:48.498Z] .github/data/new_jobs.json: ✅ Exists (10 items, 48439 bytes)
[2026-01-15T07:14:48.505Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 887993 bytes)
[2026-01-15T07:14:48.505Z] 
========================================
[2026-01-15T07:14:48.505Z] Starting Enhanced Discord Bot...
[2026-01-15T07:14:48.505Z] ========================================
[2026-01-15T07:14:49.041Z] [BOT] ✅ Loaded V2 database: 1667 jobs
[2026-01-15T07:14:49.716Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T07:14:49.716Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T07:14:49.716Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T07:14:49.830Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Quantitative Engineer Analyst at Bank of America
[2026-01-15T07:14:49.833Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T07:14:49.834Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T07:14:49.834Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T07:14:49.835Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-15T07:14:49.835Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-15T07:14:49.835Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T07:14:49.837Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-15T07:14:49.839Z] [BOT] 📍 [ROUTING] "Quantitative Engineer Analyst" @ ORG_676c471b of America
[2026-01-15T07:14:49.839Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:14:49.856Z] [BOT ERROR] (node:3452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T07:14:50.393Z] [BOT] ✅ Created forum post: 🏢 Quantitative Engineer Analyst @ ORG_676c471b of America in #💻・tech-jobs
  ✅ Industry: Quantitative Engineer Analyst @ ORG_676c471b of America
[2026-01-15T07:14:52.148Z] [BOT] ✅ Created forum post: 🏢 Quantitative Engineer Analyst @ ORG_676c471b of America in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T07:14:53.648Z] [BOT] 💾 Marked as posted: Quantitative Engineer Analyst @ ORG_676c471b of America (instance #1)
[2026-01-15T07:14:53.649Z] [BOT] 💾 BEFORE ARCHIVING: 1668 jobs in database
[2026-01-15T07:14:53.650Z] [BOT] ✅ No jobs to archive (all 1668 jobs within 7-day window)
[2026-01-15T07:14:53.666Z] [BOT] 💾 Saved posted_jobs.json: 1668 active jobs
[2026-01-15T07:14:53.666Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:14:53.666Z] [BOT] 📍 [ROUTING] "Software Developer" @ Auto-Owners Insurance
[2026-01-15T07:14:53.667Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:14:53.902Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ Auto-Owners Insurance in #💻・tech-jobs
[2026-01-15T07:14:53.903Z] [BOT] ✅ Industry: Software Developer @ Auto-Owners Insurance
[2026-01-15T07:14:55.807Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ Auto-Owners Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:14:57.309Z] [BOT] 💾 Marked as posted: Software Developer @ Auto-Owners Insurance (instance #1)
💾 BEFORE ARCHIVING: 1669 jobs in database
[2026-01-15T07:14:57.310Z] [BOT] ✅ No jobs to archive (all 1669 jobs within 7-day window)
[2026-01-15T07:14:57.320Z] [BOT] 💾 Saved posted_jobs.json: 1669 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:14:57.321Z] [BOT] 📍 [ROUTING] "Software Engineer/Principal Software Engineer - Aht" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-15T07:14:57.321Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:14:57.505Z] [BOT] ✅ Created forum post: 🏢 Software Engineer/Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer/Principal Software Engineer - Aht @ ORG_f3f2248d Grumman
[2026-01-15T07:14:59.315Z] [BOT] ✅ Created forum post: 🏢 Software Engineer/Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:15:00.816Z] [BOT] 💾 Marked as posted: Software Engineer/Principal Software Engineer - Aht @ ORG_f3f2248d Grumman (instance #1)
[2026-01-15T07:15:00.817Z] [BOT] 💾 BEFORE ARCHIVING: 1670 jobs in database
[2026-01-15T07:15:00.818Z] [BOT] ✅ No jobs to archive (all 1670 jobs within 7-day window)
[2026-01-15T07:15:00.831Z] [BOT] 💾 Saved posted_jobs.json: 1670 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:00.832Z] [BOT] 📍 [ROUTING] "Application Engineer 1" @ ORG_a0a5b7ba Rexnord
[2026-01-15T07:15:00.832Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:15:01.052Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 @ ORG_a0a5b7ba Rexnord in #💻・tech-jobs
  ✅ Industry: Application Engineer 1 @ ORG_a0a5b7ba Rexnord
[2026-01-15T07:15:03.110Z] [BOT] ✅ Created forum post: 🏢 Application Engineer 1 @ ORG_a0a5b7ba Rexnord in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:15:04.611Z] [BOT] 💾 Marked as posted: Application Engineer 1 @ ORG_a0a5b7ba Rexnord (instance #1)
[2026-01-15T07:15:04.612Z] [BOT] 💾 BEFORE ARCHIVING: 1671 jobs in database
[2026-01-15T07:15:04.613Z] [BOT] ✅ No jobs to archive (all 1671 jobs within 7-day window)
[2026-01-15T07:15:04.625Z] [BOT] 💾 Saved posted_jobs.json: 1671 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:04.625Z] [BOT] 📍 [ROUTING] "Software Engineering Graduate" @ ORG_a5257743 Packard Enterprise
[2026-01-15T07:15:04.626Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:15:04.815Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Graduate @ ORG_a5257743 Packard Enterprise in #💻・tech-jobs
  ✅ Industry: Software Engineering Graduate @ ORG_a5257743 Packard Enterprise
[2026-01-15T07:15:06.529Z] [BOT] ✅ Created forum post: 🏢 Software Engineering Graduate @ ORG_a5257743 Packard Enterprise in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T07:15:08.030Z] [BOT] 💾 Marked as posted: Software Engineering Graduate @ ORG_a5257743 Packard Enterprise (instance #1)
[2026-01-15T07:15:08.030Z] [BOT] 💾 BEFORE ARCHIVING: 1672 jobs in database
[2026-01-15T07:15:08.031Z] [BOT] ✅ No jobs to archive (all 1672 jobs within 7-day window)
[2026-01-15T07:15:08.042Z] [BOT] 💾 Saved posted_jobs.json: 1672 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:08.043Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_1954b120
[2026-01-15T07:15:08.043Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T07:15:08.236Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1954b120 in #💻・tech-jobs
[2026-01-15T07:15:08.236Z] [BOT] ✅ Industry: Software Engineer @ ORG_1954b120
[2026-01-15T07:15:09.925Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1954b120 in #🌆・chicago
[2026-01-15T07:15:09.925Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T07:15:11.427Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_1954b120 (instance #1)
[2026-01-15T07:15:11.427Z] [BOT] 💾 BEFORE ARCHIVING: 1673 jobs in database
[2026-01-15T07:15:11.428Z] [BOT] ✅ No jobs to archive (all 1673 jobs within 7-day window)
[2026-01-15T07:15:11.441Z] [BOT] 💾 Saved posted_jobs.json: 1673 active jobs
[2026-01-15T07:15:11.441Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:14.442Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T07:15:14.442Z] [BOT] 📍 [ROUTING] "AI Lab – Junior Machine Learning Engineer - AI Lab - GenAI Modelling" @ ORG_a5257743 Packard (HP)
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T07:15:14.443Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T07:15:14.866Z] [BOT] ✅ Created forum post: 🏢 AI Lab – Junior Machine Learning Engineer - AI Lab - GenAI Modelling @ ORG_a5257743 Packard (HP) in #🤖・ai-jobs
  ✅ Industry: AI Lab – Junior Machine Learning Engineer - AI Lab - GenAI Modelling @ ORG_a5257743 Packard (HP)
[2026-01-15T07:15:16.688Z] [BOT] ✅ Created forum post: 🏢 AI Lab – Junior Machine Learning Engineer - AI Lab - GenAI Modelling @ ORG_a5257743 Packard (HP) in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T07:15:18.189Z] [BOT] 💾 Marked as posted: AI Lab – Junior Machine Learning Engineer - AI Lab - GenAI Modelling @ ORG_a5257743 Packard (HP) (instance #1)
[2026-01-15T07:15:18.190Z] [BOT] 💾 BEFORE ARCHIVING: 1674 jobs in database
[2026-01-15T07:15:18.191Z] [BOT] ✅ No jobs to archive (all 1674 jobs within 7-day window)
[2026-01-15T07:15:18.201Z] [BOT] 💾 Saved posted_jobs.json: 1674 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:18.201Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee" @ ORG_a867f63f National Laboratory
[2026-01-15T07:15:18.201Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T07:15:18.442Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Appointee @ ORG_a867f63f National Laboratory
[2026-01-15T07:15:20.153Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
[2026-01-15T07:15:20.153Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T07:15:21.655Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-15T07:15:21.656Z] [BOT] 💾 BEFORE ARCHIVING: 1675 jobs in database
[2026-01-15T07:15:21.657Z] [BOT] ✅ No jobs to archive (all 1675 jobs within 7-day window)
[2026-01-15T07:15:21.670Z] [BOT] 💾 Saved posted_jobs.json: 1675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:21.671Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Electron Microscopy for Microelectronics @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-15T07:15:21.671Z] [BOT] 💾 BEFORE ARCHIVING: 1676 jobs in database
[2026-01-15T07:15:21.672Z] [BOT] ✅ No jobs to archive (all 1676 jobs within 7-day window)
[2026-01-15T07:15:21.683Z] [BOT] 💾 Saved posted_jobs.json: 1676 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:21.683Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Medium Energy Physics @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-15T07:15:21.683Z] [BOT] 💾 BEFORE ARCHIVING: 1677 jobs in database
[2026-01-15T07:15:21.684Z] [BOT] ✅ No jobs to archive (all 1677 jobs within 7-day window)
[2026-01-15T07:15:21.694Z] [BOT] 💾 Saved posted_jobs.json: 1677 active jobs
[2026-01-15T07:15:21.694Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:21.694Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials" @ ORG_a867f63f National Laboratory
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T07:15:21.694Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T07:15:21.957Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials @ ORG_a867f63f National Lab in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials @ ORG_a867f63f National Laboratory
[2026-01-15T07:15:23.683Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials @ ORG_a867f63f National Lab in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T07:15:25.184Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-15T07:15:25.185Z] [BOT] 💾 BEFORE ARCHIVING: 1678 jobs in database
[2026-01-15T07:15:25.186Z] [BOT] ✅ No jobs to archive (all 1678 jobs within 7-day window)
[2026-01-15T07:15:25.196Z] [BOT] 💾 Saved posted_jobs.json: 1678 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:25.196Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - AI for Coherent X-ray Imaging" @ ORG_a867f63f National Laboratory
[2026-01-15T07:15:25.197Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T07:15:25.197Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T07:15:25.507Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - AI for Coherent X-ray Imaging @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Appointee - AI for Coherent X-ray Imaging @ ORG_a867f63f National Laboratory
[2026-01-15T07:15:27.237Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - AI for Coherent X-ray Imaging @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T07:15:28.738Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - AI for Coherent X-ray Imaging @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-15T07:15:28.738Z] [BOT] 💾 BEFORE ARCHIVING: 1679 jobs in database
[2026-01-15T07:15:28.739Z] [BOT] ✅ No jobs to archive (all 1679 jobs within 7-day window)
[2026-01-15T07:15:28.750Z] [BOT] 💾 Saved posted_jobs.json: 1679 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T07:15:31.750Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T07:15:31.751Z] [BOT] ⏭️  Skipping duplicate: JID_6f712ee7-analyst_25043236 (posted within 7 days)
⏭️  Skipping duplicate: JID_e95d7073-developer_r_1017 (posted within 7 days)
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_01106abd-_r10211293 (posted within 7 days)
[2026-01-15T07:15:31.751Z] [BOT] ⏭️  Skipping duplicate: JID_2304cdc1-i_r25_03408 (posted within 7 days)
[2026-01-15T07:15:31.752Z] [BOT] ⏭️  Skipping duplicate: JID_b5dc7f29-engineer_3151000-2 (posted within 7 days)
[2026-01-15T07:15:31.752Z] [BOT] ⏭️  Skipping duplicate: JID_705febb2-graduate_1192959-1 (posted within 7 days)
[2026-01-15T07:15:31.752Z] [BOT] ⏭️  Skipping duplicate: JID_a77af31a-engineer_315814-2 (posted within 7 days)
[2026-01-15T07:15:31.752Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_08c7c02a-dynamics_421104 (posted within 7 days)
[2026-01-15T07:15:31.752Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_607bd7bd-materials_421205 (posted within 7 days)
[2026-01-15T07:15:31.752Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_c7b98a53-imaging_421292-1 (posted within 7 days)
[2026-01-15T07:15:31.858Z] [BOT] ✅ Loaded pending queue: 2734 total (2714 pending, 20 enriched, 0 posted)
[2026-01-15T07:15:32.024Z] [BOT] ✅ Saved pending queue: 2734 total (2714 pending, 10 enriched, 10 posted)
[2026-01-15T07:15:32.024Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T07:15:32.087Z] [BOT] 📂 Loaded 3845 existing routing entries
[2026-01-15T07:15:32.151Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T07:15:32.151Z] [BOT] Total entries: 3855
   Timestamp: 2026-01-15T07:15:32.134Z
[2026-01-15T07:15:32.151Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T07:15:32.151Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T07:15:32.152Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T07:15:32.152Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
[2026-01-15T07:15:32.152Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🌆・chicago: 5 posts
     3. #💻・remote-usa: 4 posts
     4. #🤖・ai-jobs: 4 posts
     5. #🌉・san-francisco: 1 posts
[2026-01-15T07:15:32.152Z] [BOT] [STATS] Channel stats saved
[2026-01-15T07:15:34.176Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*