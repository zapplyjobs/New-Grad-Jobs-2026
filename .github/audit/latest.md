# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T19:39:12.181Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T19:38:20.345Z] ========================================
[2026-01-16T19:38:20.347Z] Discord Bot Execution Log
[2026-01-16T19:38:20.347Z] Environment: GitHub Actions
[2026-01-16T19:38:20.347Z] Node Version: v20.19.6
[2026-01-16T19:38:20.347Z] ========================================
[2026-01-16T19:38:20.347Z] Environment Variables Check:
[2026-01-16T19:38:20.347Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T19:38:20.347Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.347Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T19:38:20.347Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T19:38:20.347Z] 
Multi-Channel Configuration:
[2026-01-16T19:38:20.348Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.348Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.348Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.348Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.348Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.348Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.348Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.348Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.348Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T19:38:20.348Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T19:38:20.348Z] 
Data Files Check:
[2026-01-16T19:38:20.349Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51668 bytes)
[2026-01-16T19:38:20.357Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1112236 bytes)
[2026-01-16T19:38:20.357Z] 
========================================
[2026-01-16T19:38:20.357Z] Starting Enhanced Discord Bot...
[2026-01-16T19:38:20.357Z] ========================================
[2026-01-16T19:38:20.878Z] [BOT] ✅ Loaded V2 database: 2058 jobs
[2026-01-16T19:38:21.713Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T19:38:21.713Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T19:38:21.714Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T19:38:21.830Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Solution Architect (EMEA) at supabase
[2026-01-16T19:38:21.834Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T19:38:21.834Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T19:38:21.834Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T19:38:21.835Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T19:38:21.835Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-16T19:38:21.836Z] [BOT] - Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank: nyc, morrisville
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T19:38:21.840Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-16T19:38:21.840Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (EMEA)" @ supabase
[2026-01-16T19:38:21.840Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-16T19:38:21.858Z] [BOT ERROR] (node:2970) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T19:38:22.106Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect (EMEA) @ supabase in #💲・sales-jobs
[2026-01-16T19:38:22.106Z] [BOT] ✅ Industry: Customer Solution Architect (EMEA) @ supabase
[2026-01-16T19:38:23.608Z] [BOT] 💾 Marked as posted: Customer Solution Architect (EMEA) @ supabase (instance #1)
[2026-01-16T19:38:23.609Z] [BOT] 💾 BEFORE ARCHIVING: 2059 jobs in database
[2026-01-16T19:38:23.610Z] [BOT] ✅ No jobs to archive (all 2059 jobs within 7-day window)
[2026-01-16T19:38:23.627Z] [BOT] 💾 Saved posted_jobs.json: 2059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:38:26.628Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-16T19:38:26.628Z] [BOT] 📍 [ROUTING] "Predoctoral Scholar" @ ORG_9d38443e of Chicago
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-16T19:38:28.453Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Scholar @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
[2026-01-16T19:38:28.453Z] [BOT] ✅ Industry: Predoctoral Scholar @ ORG_9d38443e of Chicago
[2026-01-16T19:38:30.231Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Scholar @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-16T19:38:31.732Z] [BOT] 💾 Marked as posted: Predoctoral Scholar @ ORG_9d38443e of Chicago (instance #1)
[2026-01-16T19:38:31.732Z] [BOT] 💾 BEFORE ARCHIVING: 2060 jobs in database
[2026-01-16T19:38:31.734Z] [BOT] ✅ No jobs to archive (all 2060 jobs within 7-day window)
[2026-01-16T19:38:31.749Z] [BOT] 💾 Saved posted_jobs.json: 2060 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:38:34.750Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-16T19:38:34.751Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:38:35.162Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb
[2026-01-16T19:38:36.933Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T19:38:38.434Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - TikTok Recommendation-Agentic AI - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-16T19:38:38.435Z] [BOT] 💾 BEFORE ARCHIVING: 2061 jobs in database
[2026-01-16T19:38:38.436Z] [BOT] ✅ No jobs to archive (all 2061 jobs within 7-day window)
[2026-01-16T19:38:38.451Z] [BOT] 💾 Saved posted_jobs.json: 2061 active jobs
[2026-01-16T19:38:38.451Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T19:38:38.452Z] [BOT] 📍 [ROUTING] "Software Quality Engineer I" @ ORG_88a78b3d
[2026-01-16T19:38:38.452Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:38:38.778Z] [BOT] ✅ Created forum post: 🏢 Software Quality Engineer I @ ORG_88a78b3d in #💻・tech-jobs
[2026-01-16T19:38:38.778Z] [BOT] ✅ Industry: Software Quality Engineer I @ ORG_88a78b3d
[2026-01-16T19:38:40.735Z] [BOT] ✅ Created forum post: 🏢 Software Quality Engineer I @ ORG_88a78b3d in #🦢・los-angeles
[2026-01-16T19:38:40.735Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-16T19:38:42.235Z] [BOT] 💾 Marked as posted: Software Quality Engineer I @ ORG_88a78b3d (instance #1)
[2026-01-16T19:38:42.236Z] [BOT] 💾 BEFORE ARCHIVING: 2062 jobs in database
[2026-01-16T19:38:42.237Z] [BOT] ✅ No jobs to archive (all 2062 jobs within 7-day window)
[2026-01-16T19:38:42.250Z] [BOT] 💾 Saved posted_jobs.json: 2062 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:38:42.251Z] [BOT] 📍 [ROUTING] "Security Software Engineer I" @ ORG_e9de098c
   Category: TECH (matched: "software")
[2026-01-16T19:38:42.251Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:38:42.528Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer I @ ORG_e9de098c in #💻・tech-jobs
  ✅ Industry: Security Software Engineer I @ ORG_e9de098c
[2026-01-16T19:38:44.273Z] [BOT] ✅ Created forum post: 🏢 Security Software Engineer I @ ORG_e9de098c in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-16T19:38:45.775Z] [BOT] 💾 Marked as posted: Security Software Engineer I @ ORG_e9de098c (instance #1)
[2026-01-16T19:38:45.775Z] [BOT] 💾 BEFORE ARCHIVING: 2063 jobs in database
[2026-01-16T19:38:45.777Z] [BOT] ✅ No jobs to archive (all 2063 jobs within 7-day window)
[2026-01-16T19:38:45.791Z] [BOT] 💾 Saved posted_jobs.json: 2063 active jobs
[2026-01-16T19:38:45.791Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T19:38:45.792Z] [BOT] 📍 [ROUTING] "Software Engineer, TensorRT Specialized Platforms" @ ORG_0890f456
[2026-01-16T19:38:45.792Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:38:45.974Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456
[2026-01-16T19:38:47.663Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T19:38:49.164Z] [BOT] 💾 Marked as posted: Software Engineer, TensorRT Specialized Platforms @ ORG_0890f456 (instance #1)
[2026-01-16T19:38:49.165Z] [BOT] 💾 BEFORE ARCHIVING: 2064 jobs in database
[2026-01-16T19:38:49.166Z] [BOT] ✅ No jobs to archive (all 2064 jobs within 7-day window)
[2026-01-16T19:38:49.179Z] [BOT] 💾 Saved posted_jobs.json: 2064 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:38:49.179Z] [BOT] 📍 [ROUTING] "Cloud Partnerships Manager" @ supabase
[2026-01-16T19:38:49.179Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:38:49.481Z] [BOT] ✅ Created forum post: 🏢 Cloud Partnerships Manager @ supabase in #💻・tech-jobs
  ✅ Industry: Cloud Partnerships Manager @ supabase
[2026-01-16T19:38:50.982Z] [BOT] 💾 Marked as posted: Cloud Partnerships Manager @ supabase (instance #1)
[2026-01-16T19:38:50.982Z] [BOT] 💾 BEFORE ARCHIVING: 2065 jobs in database
[2026-01-16T19:38:50.983Z] [BOT] ✅ No jobs to archive (all 2065 jobs within 7-day window)
[2026-01-16T19:38:50.997Z] [BOT] 💾 Saved posted_jobs.json: 2065 active jobs
[2026-01-16T19:38:50.997Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer (Summer 2026 New Grad)" @ ORG_8f254c21
[2026-01-16T19:38:50.997Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T19:38:51.754Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21 in #💻・tech-jobs
  ✅ Industry: Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21
[2026-01-16T19:38:53.577Z] [BOT] ✅ Created forum post: 🏢 Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-16T19:38:55.077Z] [BOT] 💾 Marked as posted: Software Engineer (Summer 2026 New Grad) @ ORG_8f254c21 (instance #1)
[2026-01-16T19:38:55.078Z] [BOT] 💾 BEFORE ARCHIVING: 2066 jobs in database
[2026-01-16T19:38:55.079Z] [BOT] ✅ No jobs to archive (all 2066 jobs within 7-day window)
[2026-01-16T19:38:55.092Z] [BOT] 💾 Saved posted_jobs.json: 2066 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:38:58.092Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T19:38:58.093Z] [BOT] 📍 [ROUTING] "GE Vernova Advanced Research 2026 Edison Rotational Program" @ ORG_e8760198 Vernova
   Category: AI (matched: "AI specialization")
[2026-01-16T19:38:58.093Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T19:38:58.420Z] [BOT] ✅ Created forum post: 🏢 GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova in #🤖・ai-jobs
  ✅ Industry: GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova
[2026-01-16T19:39:00.348Z] [BOT] ✅ Created forum post: 🏢 GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T19:39:01.848Z] [BOT] 💾 Marked as posted: GE Vernova Advanced Research 2026 Edison Rotational Program @ ORG_e8760198 Vernova (instance #1)
[2026-01-16T19:39:01.849Z] [BOT] 💾 BEFORE ARCHIVING: 2067 jobs in database
[2026-01-16T19:39:01.850Z] [BOT] ✅ No jobs to archive (all 2067 jobs within 7-day window)
[2026-01-16T19:39:01.861Z] [BOT] 💾 Saved posted_jobs.json: 2067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:39:01.862Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2026-01-16T19:39:01.862Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T19:39:02.157Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin
[2026-01-16T19:39:03.886Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T19:39:05.386Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-16T19:39:05.387Z] [BOT] 💾 BEFORE ARCHIVING: 2068 jobs in database
[2026-01-16T19:39:05.388Z] [BOT] ✅ No jobs to archive (all 2068 jobs within 7-day window)
[2026-01-16T19:39:05.400Z] [BOT] 💾 Saved posted_jobs.json: 2068 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T19:39:08.401Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T19:39:08.401Z] [BOT] ⏭️  Skipping duplicate: JID_b067a36b (posted within 7 days)
[2026-01-16T19:39:08.401Z] [BOT] ⏭️  Skipping duplicate: JID_14105d80-scholar_jr31330 (posted within 7 days)
[2026-01-16T19:39:08.401Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_094ad39e (posted within 7 days)
[2026-01-16T19:39:08.402Z] [BOT] ⏭️  Skipping duplicate: JID_839428ba-i_31128083-1 (posted within 7 days)
[2026-01-16T19:39:08.402Z] [BOT] ⏭️  Skipping duplicate: JID_9d0ea3f7 (posted within 7 days)
[2026-01-16T19:39:08.402Z] [BOT] ⏭️  Skipping duplicate: JID_0a112c67-2025_jr2002870 (posted within 7 days)
[2026-01-16T19:39:08.402Z] [BOT] ⏭️  Skipping duplicate: JID_457168e7-only_confidential_executive_recruiting-JID_b73e99e1-program_r5015939-1 (posted within 7 days)
[2026-01-16T19:39:08.402Z] [BOT] ⏭️  Skipping duplicate: JID_f063c34f-fellow_r_00029121 (posted within 7 days)
[2026-01-16T19:39:08.402Z] [BOT] ⏭️  Skipping duplicate: JID_59583867 (posted within 7 days)
[2026-01-16T19:39:08.402Z] [BOT] ⏭️  Skipping duplicate: JID_2e60bc4c (posted within 7 days)
[2026-01-16T19:39:08.514Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[2026-01-16T19:39:08.680Z] [BOT] ✅ Saved pending queue: 2770 total (2750 pending, 10 enriched, 10 posted)
[2026-01-16T19:39:08.681Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T19:39:08.739Z] [BOT] 📂 Loaded 4295 existing routing entries
[2026-01-16T19:39:08.806Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T19:39:08.806Z] [BOT] Total entries: 4305
   Timestamp: 2026-01-16T19:39:08.787Z
[2026-01-16T19:39:08.807Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 18
[2026-01-16T19:39:08.807Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-16T19:39:08.807Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 10
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🌉・san-francisco: 2 posts
     3. #🌄・mountain-view: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #💲・sales-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-16T19:39:10.833Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2970) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*