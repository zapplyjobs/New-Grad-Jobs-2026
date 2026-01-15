# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T22:28:05.808Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T22:27:15.495Z] ========================================
[2026-01-15T22:27:15.497Z] Discord Bot Execution Log
[2026-01-15T22:27:15.497Z] Environment: GitHub Actions
[2026-01-15T22:27:15.497Z] Node Version: v20.19.6
[2026-01-15T22:27:15.497Z] ========================================
[2026-01-15T22:27:15.497Z] Environment Variables Check:
[2026-01-15T22:27:15.497Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T22:27:15.498Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.498Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T22:27:15.498Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T22:27:15.498Z] 
Multi-Channel Configuration:
[2026-01-15T22:27:15.498Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.498Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.498Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.498Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.498Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.498Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.498Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.498Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.499Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T22:27:15.499Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T22:27:15.499Z] 
Data Files Check:
[2026-01-15T22:27:15.499Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58284 bytes)
[2026-01-15T22:27:15.506Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 990094 bytes)
[2026-01-15T22:27:15.507Z] 
========================================
[2026-01-15T22:27:15.507Z] Starting Enhanced Discord Bot...
[2026-01-15T22:27:15.507Z] ========================================
[2026-01-15T22:27:16.046Z] [BOT] ✅ Loaded V2 database: 1844 jobs
[2026-01-15T22:27:16.689Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T22:27:16.689Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T22:27:16.689Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T22:27:16.800Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer I at Kroll
[2026-01-15T22:27:16.802Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T22:27:16.803Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T22:27:16.803Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T22:27:16.804Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-15T22:27:16.804Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-15T22:27:16.804Z] [BOT] - Software Engineer – New Grad - Forward Deployed AI @ Promise: oakland, washington
   - Software Engineer – Forward Deployed AI (New Grad) @ Promise: oakland, washington
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-15T22:27:16.804Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T22:27:16.808Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T22:27:16.809Z] [BOT] 📍 [ROUTING] "Data Engineer I" @ ORG_5d46ba90
[2026-01-15T22:27:16.809Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T22:27:16.826Z] [BOT ERROR] (node:2995) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T22:27:17.029Z] [BOT] ✅ Created forum post: 🏢 Data Engineer I @ ORG_5d46ba90 in #📈・JID_fb739488
  ✅ Industry: Data Engineer I @ ORG_5d46ba90
[2026-01-15T22:27:18.530Z] [BOT] 💾 Marked as posted: Data Engineer I @ ORG_5d46ba90 (instance #1)
[2026-01-15T22:27:18.530Z] [BOT] 💾 BEFORE ARCHIVING: 1845 jobs in database
[2026-01-15T22:27:18.532Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T22:27:18.533Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-15T22:27:18.533Z] [BOT] ✅ Archiving complete: 3 archived, 1842 active
[2026-01-15T22:27:18.545Z] [BOT] 💾 Saved posted_jobs.json: 1842 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:18.545Z] [BOT] 📍 [ROUTING] "Data Analyst I Bioinformatician Rheumatology" @ ORG_10a0c5f8 General Brigham
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-15T22:27:18.546Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T22:27:18.778Z] [BOT] ✅ Created forum post: 🏢 Data Analyst I Bioinformatician Rheumatology @ ORG_10a0c5f8 General Brigham in #📈・JID_fb739488
[2026-01-15T22:27:18.779Z] [BOT] ✅ Industry: Data Analyst I Bioinformatician Rheumatology @ ORG_10a0c5f8 General Brigham
[2026-01-15T22:27:20.686Z] [BOT] ✅ Created forum post: 🏢 Data Analyst I Bioinformatician Rheumatology @ ORG_10a0c5f8 General Brigham in #🚌・boston
[2026-01-15T22:27:20.686Z] [BOT] ✅ Location: 🚌・boston
[2026-01-15T22:27:22.187Z] [BOT] 💾 Marked as posted: Data Analyst I Bioinformatician Rheumatology @ ORG_10a0c5f8 General Brigham (instance #1)
[2026-01-15T22:27:22.187Z] [BOT] 💾 BEFORE ARCHIVING: 1843 jobs in database
[2026-01-15T22:27:22.189Z] [BOT] ✅ No jobs to archive (all 1843 jobs within 7-day window)
[2026-01-15T22:27:22.200Z] [BOT] 💾 Saved posted_jobs.json: 1843 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:25.200Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T22:27:25.202Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_a867f63f National Laboratory
[2026-01-15T22:27:25.202Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T22:27:25.558Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2026-01-15T22:27:25.558Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_a867f63f National Laboratory
[2026-01-15T22:27:27.299Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T22:27:28.801Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-15T22:27:28.801Z] [BOT] 💾 BEFORE ARCHIVING: 1844 jobs in database
[2026-01-15T22:27:28.803Z] [BOT] ✅ No jobs to archive (all 1844 jobs within 7-day window)
[2026-01-15T22:27:28.818Z] [BOT] 💾 Saved posted_jobs.json: 1844 active jobs
[2026-01-15T22:27:28.818Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:28.819Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Forward Deployed AI" @ ORG_1eec97a0
[2026-01-15T22:27:28.819Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T22:27:29.092Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0 in #🤖・ai-jobs
[2026-01-15T22:27:29.092Z] [BOT] ✅ Industry: Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0
[2026-01-15T22:27:30.806Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T22:27:32.307Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0 (instance #1)
[2026-01-15T22:27:32.308Z] [BOT] 💾 BEFORE ARCHIVING: 1845 jobs in database
[2026-01-15T22:27:32.309Z] [BOT] ✅ No jobs to archive (all 1845 jobs within 7-day window)
[2026-01-15T22:27:32.323Z] [BOT] 💾 Saved posted_jobs.json: 1845 active jobs
[2026-01-15T22:27:32.323Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:32.323Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0 (instance #1)
[2026-01-15T22:27:32.323Z] [BOT] 💾 BEFORE ARCHIVING: 1846 jobs in database
[2026-01-15T22:27:32.324Z] [BOT] ✅ No jobs to archive (all 1846 jobs within 7-day window)
[2026-01-15T22:27:32.336Z] [BOT] 💾 Saved posted_jobs.json: 1846 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:32.336Z] [BOT] 📍 [ROUTING] "Software Engineer – Forward Deployed AI (New Grad)" @ ORG_1eec97a0
[2026-01-15T22:27:32.336Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T22:27:32.550Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0 in #🤖・ai-jobs
  ✅ Industry: Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0
[2026-01-15T22:27:34.356Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T22:27:35.858Z] [BOT] 💾 Marked as posted: Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0 (instance #1)
[2026-01-15T22:27:35.859Z] [BOT] 💾 BEFORE ARCHIVING: 1847 jobs in database
[2026-01-15T22:27:35.860Z] [BOT] ✅ No jobs to archive (all 1847 jobs within 7-day window)
[2026-01-15T22:27:35.871Z] [BOT] 💾 Saved posted_jobs.json: 1847 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:35.872Z] [BOT] 💾 Marked as posted: Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0 (instance #1)
[2026-01-15T22:27:35.872Z] [BOT] 💾 BEFORE ARCHIVING: 1848 jobs in database
[2026-01-15T22:27:35.873Z] [BOT] ✅ No jobs to archive (all 1848 jobs within 7-day window)
[2026-01-15T22:27:35.885Z] [BOT] 💾 Saved posted_jobs.json: 1848 active jobs
[2026-01-15T22:27:35.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:38.885Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T22:27:38.886Z] [BOT] 📍 [ROUTING] "Database Engineer 0" @ ORG_8b09cf05
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:27:39.445Z] [BOT] ✅ Created forum post: 🏢 Database Engineer 0 @ ORG_8b09cf05 in #💻・tech-jobs
  ✅ Industry: Database Engineer 0 @ ORG_8b09cf05
[2026-01-15T22:27:41.305Z] [BOT] ✅ Created forum post: 🏢 Database Engineer 0 @ ORG_8b09cf05 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T22:27:42.805Z] [BOT] 💾 Marked as posted: Database Engineer 0 @ ORG_8b09cf05 (instance #1)
[2026-01-15T22:27:42.806Z] [BOT] 💾 BEFORE ARCHIVING: 1849 jobs in database
[2026-01-15T22:27:42.807Z] [BOT] ✅ No jobs to archive (all 1849 jobs within 7-day window)
[2026-01-15T22:27:42.818Z] [BOT] 💾 Saved posted_jobs.json: 1849 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:42.819Z] [BOT] 📍 [ROUTING] "Software Engineer I - C++ and Payments Systems" @ ORG_66279f04 National Information Services
[2026-01-15T22:27:42.819Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:27:43.340Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - C++ and Payments Systems @ ORG_66279f04 National Information Services in #💻・tech-jobs
  ✅ Industry: Software Engineer I - C++ and Payments Systems @ ORG_66279f04 National Information Services
[2026-01-15T22:27:45.226Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - C++ and Payments Systems @ ORG_66279f04 National Information Services in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T22:27:46.727Z] [BOT] 💾 Marked as posted: Software Engineer I - C++ and Payments Systems @ ORG_66279f04 National Information Services (instance #1)
💾 BEFORE ARCHIVING: 1850 jobs in database
[2026-01-15T22:27:46.728Z] [BOT] ✅ No jobs to archive (all 1850 jobs within 7-day window)
[2026-01-15T22:27:46.742Z] [BOT] 💾 Saved posted_jobs.json: 1850 active jobs
[2026-01-15T22:27:46.742Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:46.742Z] [BOT] 📍 [ROUTING] "Junior Full Stack Software Engineer" @ ORG_b891e1e7 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:27:46.958Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies in #💻・tech-jobs
  ✅ Industry: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies
[2026-01-15T22:27:49.044Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T22:27:50.544Z] [BOT] 💾 Marked as posted: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies (instance #1)
[2026-01-15T22:27:50.544Z] [BOT] 💾 BEFORE ARCHIVING: 1851 jobs in database
[2026-01-15T22:27:50.545Z] [BOT] ✅ No jobs to archive (all 1851 jobs within 7-day window)
[2026-01-15T22:27:50.559Z] [BOT] 💾 Saved posted_jobs.json: 1851 active jobs
[2026-01-15T22:27:50.560Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:50.560Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI)" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T22:27:50.765Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb
[2026-01-15T22:27:52.563Z] [BOT] ✅ Created forum post: 🔴 Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T22:27:54.064Z] [BOT] 💾 Marked as posted: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb (instance #1)
[2026-01-15T22:27:54.064Z] [BOT] 💾 BEFORE ARCHIVING: 1852 jobs in database
[2026-01-15T22:27:54.066Z] [BOT] ✅ No jobs to archive (all 1852 jobs within 7-day window)
[2026-01-15T22:27:54.078Z] [BOT] 💾 Saved posted_jobs.json: 1852 active jobs
[2026-01-15T22:27:54.078Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T22:27:57.079Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-15T22:27:57.080Z] [BOT] 📍 [ROUTING] "Customer Solution Architect Team Lead (EMEA)" @ supabase
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T22:27:57.602Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect Team Lead (EMEA) @ supabase in #💲・sales-jobs
  ✅ Industry: Customer Solution Architect Team Lead (EMEA) @ supabase
[2026-01-15T22:27:59.103Z] [BOT] 💾 Marked as posted: Customer Solution Architect Team Lead (EMEA) @ supabase (instance #1)
[2026-01-15T22:27:59.103Z] [BOT] 💾 BEFORE ARCHIVING: 1853 jobs in database
[2026-01-15T22:27:59.105Z] [BOT] ✅ No jobs to archive (all 1853 jobs within 7-day window)
[2026-01-15T22:27:59.117Z] [BOT] 💾 Saved posted_jobs.json: 1853 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T22:28:02.117Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T22:28:02.118Z] [BOT] ⏭️  Skipping duplicate: JID_a01ad792-cx_1-job-21012997 (posted within 7 days)
[2026-01-15T22:28:02.118Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_47300327-operations_421270 (posted within 7 days)
[2026-01-15T22:28:02.118Z] [BOT] ⏭️  Skipping duplicate: JID_b38dfe84 (posted within 7 days)
[2026-01-15T22:28:02.118Z] [BOT] ⏭️  Skipping duplicate: JID_a08866a2 (posted within 7 days)
[2026-01-15T22:28:02.118Z] [BOT] ⏭️  Skipping duplicate: JID_992aeaa6-_jr0300399 (posted within 7 days)
[2026-01-15T22:28:02.118Z] [BOT] ⏭️  Skipping duplicate: JID_7cb5fafe (posted within 7 days)
[2026-01-15T22:28:02.119Z] [BOT] ⏭️  Skipping duplicate: JID_2910a3c9-radiance_external-JID_ebfdace6-engineer_hr101852 (posted within 7 days)
⏭️  Skipping duplicate: JID_344c9af2 (posted within 7 days)
[2026-01-15T22:28:02.119Z] [BOT] ⏭️  Skipping duplicate: JID_6fd8f3b4 (posted within 7 days)
[2026-01-15T22:28:02.119Z] [BOT] ⏭️  Skipping duplicate: JID_5350139e-rheumatology_rq4038981 (posted within 7 days)
[2026-01-15T22:28:02.237Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[2026-01-15T22:28:02.410Z] [BOT] ✅ Saved pending queue: 2761 total (2741 pending, 10 enriched, 10 posted)
[2026-01-15T22:28:02.410Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T22:28:02.466Z] [BOT] 📂 Loaded 4035 existing routing entries
[2026-01-15T22:28:02.529Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4045
[2026-01-15T22:28:02.530Z] [BOT] Timestamp: 2026-01-15T22:28:02.512Z
📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 18
[2026-01-15T22:28:02.530Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-15T22:28:02.530Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T22:28:02.530Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
[2026-01-15T22:28:02.531Z] [BOT] 1. #💻・tech-jobs: 4 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🌉・san-francisco: 3 posts
     4. #💻・remote-usa: 3 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-15T22:28:02.531Z] [BOT] [STATS] Channel stats saved
[2026-01-15T22:28:04.553Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2995) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*