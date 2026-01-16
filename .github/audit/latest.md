# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T20:09:17.780Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T20:08:27.984Z] ========================================
[2026-01-16T20:08:27.986Z] Discord Bot Execution Log
[2026-01-16T20:08:27.986Z] Environment: GitHub Actions
[2026-01-16T20:08:27.986Z] Node Version: v20.19.6
[2026-01-16T20:08:27.986Z] ========================================
[2026-01-16T20:08:27.986Z] Environment Variables Check:
[2026-01-16T20:08:27.986Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T20:08:27.986Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.986Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T20:08:27.986Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T20:08:27.986Z] 
Multi-Channel Configuration:
[2026-01-16T20:08:27.987Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.987Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.987Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.987Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.987Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.987Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.987Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.987Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.987Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T20:08:27.987Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T20:08:27.987Z] 
Data Files Check:
[2026-01-16T20:08:27.988Z] .github/data/new_jobs.json: ✅ Exists (10 items, 27950 bytes)
[2026-01-16T20:08:27.996Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1124579 bytes)
[2026-01-16T20:08:27.996Z] 
========================================
[2026-01-16T20:08:27.996Z] Starting Enhanced Discord Bot...
[2026-01-16T20:08:27.996Z] ========================================
[2026-01-16T20:08:28.536Z] [BOT] ✅ Loaded V2 database: 2079 jobs
[2026-01-16T20:08:29.254Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T20:08:29.255Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T20:08:29.255Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T20:08:29.370Z] [BOT] ✅ Loaded pending queue: 2773 total (2753 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering at University of Texas - Austin
[2026-01-16T20:08:29.372Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T20:08:29.372Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T20:08:29.373Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T20:08:29.373Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-16T20:08:29.373Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-16T20:08:29.374Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T20:08:29.377Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-16T20:08:29.378Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering" @ ORG_9d38443e of Texas - Austin
[2026-01-16T20:08:29.378Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:08:29.396Z] [BOT ERROR] (node:3796) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T20:08:29.667Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering @ ORG_d32a5041 in #💻・tech-jobs
  ✅ Industry: Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering @ ORG_9d38443e of Texas - Austin
[2026-01-16T20:08:31.739Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering @ ORG_d32a5041 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T20:08:33.240Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-16T20:08:33.240Z] [BOT] 💾 BEFORE ARCHIVING: 2080 jobs in database
[2026-01-16T20:08:33.242Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T20:08:33.248Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-16T20:08:33.248Z] [BOT] ✅ Archiving complete: 1 archived, 2079 active
[2026-01-16T20:08:33.262Z] [BOT] 💾 Saved posted_jobs.json: 2079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:08:33.262Z] [BOT] 📍 [ROUTING] "Associate Value Engineer (Industrial Engineering & AI Applications)" @ ORG_5c4c8ca4
   Category: TECH (matched: "machine learning")
[2026-01-16T20:08:33.262Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:08:33.475Z] [BOT] ✅ Created forum post: 🏢 Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4 in #💻・tech-jobs
[2026-01-16T20:08:33.475Z] [BOT] ✅ Industry: Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4
[2026-01-16T20:08:35.330Z] [BOT] ✅ Created forum post: 🏢 Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T20:08:36.831Z] [BOT] 💾 Marked as posted: Associate Value Engineer (Industrial Engineering & AI Applications) @ ORG_5c4c8ca4 (instance #1)
[2026-01-16T20:08:36.831Z] [BOT] 💾 BEFORE ARCHIVING: 2080 jobs in database
[2026-01-16T20:08:36.833Z] [BOT] ✅ No jobs to archive (all 2080 jobs within 7-day window)
[2026-01-16T20:08:36.845Z] [BOT] 💾 Saved posted_jobs.json: 2080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:08:36.845Z] [BOT] 📍 [ROUTING] "Associate Value Engineer (AI for Supply Chain)" @ ORG_5c4c8ca4
[2026-01-16T20:08:36.845Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:08:37.063Z] [BOT] ✅ Created forum post: 🏢 Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4 in #💻・tech-jobs
[2026-01-16T20:08:37.064Z] [BOT] ✅ Industry: Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4
[2026-01-16T20:08:38.843Z] [BOT] ✅ Created forum post: 🏢 Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-16T20:08:40.345Z] [BOT] 💾 Marked as posted: Associate Value Engineer (AI for Supply Chain) @ ORG_5c4c8ca4 (instance #1)
[2026-01-16T20:08:40.345Z] [BOT] 💾 BEFORE ARCHIVING: 2081 jobs in database
[2026-01-16T20:08:40.347Z] [BOT] ✅ No jobs to archive (all 2081 jobs within 7-day window)
[2026-01-16T20:08:40.363Z] [BOT] 💾 Saved posted_jobs.json: 2081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:08:40.364Z] [BOT] 📍 [ROUTING] "Associate, Software Engineer" @ ORG_b1e645a8
[2026-01-16T20:08:40.364Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:08:40.585Z] [BOT] ✅ Created forum post: 🏢 Associate, Software Engineer @ ORG_b1e645a8 in #💻・tech-jobs
[2026-01-16T20:08:40.585Z] [BOT] ✅ Industry: Associate, Software Engineer @ ORG_b1e645a8
[2026-01-16T20:08:42.446Z] [BOT] ✅ Created forum post: 🏢 Associate, Software Engineer @ ORG_b1e645a8 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T20:08:43.947Z] [BOT] 💾 Marked as posted: Associate, Software Engineer @ ORG_b1e645a8 (instance #1)
[2026-01-16T20:08:43.947Z] [BOT] 💾 BEFORE ARCHIVING: 2082 jobs in database
[2026-01-16T20:08:43.948Z] [BOT] ✅ No jobs to archive (all 2082 jobs within 7-day window)
[2026-01-16T20:08:43.964Z] [BOT] 💾 Saved posted_jobs.json: 2082 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:08:43.964Z] [BOT] 📍 [ROUTING] "Software Engineer - Identity" @ ORG_7bc88ebb
[2026-01-16T20:08:43.964Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:08:44.214Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Identity @ ORG_7bc88ebb in #💻・tech-jobs
[2026-01-16T20:08:44.214Z] [BOT] ✅ Industry: Software Engineer - Identity @ ORG_7bc88ebb
[2026-01-16T20:08:45.958Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Identity @ ORG_7bc88ebb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T20:08:47.458Z] [BOT] 💾 Marked as posted: Software Engineer - Identity @ ORG_7bc88ebb (instance #1)
[2026-01-16T20:08:47.458Z] [BOT] 💾 BEFORE ARCHIVING: 2083 jobs in database
[2026-01-16T20:08:47.460Z] [BOT] ✅ No jobs to archive (all 2083 jobs within 7-day window)
[2026-01-16T20:08:47.474Z] [BOT] 💾 Saved posted_jobs.json: 2083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:08:47.475Z] [BOT] 📍 [ROUTING] "AI System Engineer" @ ORG_0890f456
[2026-01-16T20:08:47.475Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:08:47.773Z] [BOT] ✅ Created forum post: 🏢 AI System Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI System Engineer @ ORG_0890f456
[2026-01-16T20:08:49.490Z] [BOT] ✅ Created forum post: 🏢 AI System Engineer @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T20:08:50.990Z] [BOT] 💾 Marked as posted: AI System Engineer @ ORG_0890f456 (instance #1)
[2026-01-16T20:08:50.990Z] [BOT] 💾 BEFORE ARCHIVING: 2084 jobs in database
[2026-01-16T20:08:50.992Z] [BOT] ✅ No jobs to archive (all 2084 jobs within 7-day window)
[2026-01-16T20:08:51.006Z] [BOT] 💾 Saved posted_jobs.json: 2084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:08:51.007Z] [BOT] 📍 [ROUTING] "Seismology Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
   Category: TECH (default)
[2026-01-16T20:08:51.007Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:08:51.259Z] [BOT] ✅ Created forum post: 🏢 Seismology Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
  ✅ Industry: Seismology Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin
[2026-01-16T20:08:52.989Z] [BOT] ✅ Created forum post: 🏢 Seismology Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T20:08:54.489Z] [BOT] 💾 Marked as posted: Seismology Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-16T20:08:54.490Z] [BOT] 💾 BEFORE ARCHIVING: 2085 jobs in database
[2026-01-16T20:08:54.491Z] [BOT] ✅ No jobs to archive (all 2085 jobs within 7-day window)
[2026-01-16T20:08:54.504Z] [BOT] 💾 Saved posted_jobs.json: 2085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:08:57.505Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T20:08:57.505Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered)" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T20:08:57.964Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb
[2026-01-16T20:08:59.619Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T20:09:01.120Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb (instance #1)
[2026-01-16T20:09:01.120Z] [BOT] 💾 BEFORE ARCHIVING: 2086 jobs in database
[2026-01-16T20:09:01.122Z] [BOT] ✅ No jobs to archive (all 2086 jobs within 7-day window)
[2026-01-16T20:09:01.136Z] [BOT] 💾 Saved posted_jobs.json: 2086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:09:04.136Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T20:09:04.137Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T20:09:04.470Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb
[2026-01-16T20:09:06.310Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-16T20:09:07.811Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-16T20:09:07.812Z] [BOT] 💾 BEFORE ARCHIVING: 2087 jobs in database
[2026-01-16T20:09:07.813Z] [BOT] ✅ No jobs to archive (all 2087 jobs within 7-day window)
[2026-01-16T20:09:07.831Z] [BOT] 💾 Saved posted_jobs.json: 2087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:09:07.831Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
[2026-01-16T20:09:07.831Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T20:09:08.079Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-16T20:09:09.945Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-16T20:09:11.446Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-16T20:09:11.446Z] [BOT] 💾 BEFORE ARCHIVING: 2088 jobs in database
[2026-01-16T20:09:11.448Z] [BOT] ✅ No jobs to archive (all 2088 jobs within 7-day window)
[2026-01-16T20:09:11.462Z] [BOT] 💾 Saved posted_jobs.json: 2088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:09:11.462Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Software Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-16T20:09:11.463Z] [BOT] 💾 BEFORE ARCHIVING: 2089 jobs in database
[2026-01-16T20:09:11.464Z] [BOT] ✅ No jobs to archive (all 2089 jobs within 7-day window)
[2026-01-16T20:09:11.478Z] [BOT] 💾 Saved posted_jobs.json: 2089 active jobs
[2026-01-16T20:09:11.478Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T20:09:14.479Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T20:09:14.480Z] [BOT] ⏭️  Skipping duplicate: JID_f2005ce5-engineering_r_00018034 (posted within 7 days)
[2026-01-16T20:09:14.480Z] [BOT] ⏭️  Skipping duplicate: JID_14691329 (posted within 7 days)
[2026-01-16T20:09:14.480Z] [BOT] ⏭️  Skipping duplicate: JID_52ecca7b (posted within 7 days)
[2026-01-16T20:09:14.481Z] [BOT] ⏭️  Skipping duplicate: JID_9af22df3 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_0946fb2d (posted within 7 days)
[2026-01-16T20:09:14.481Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_991f3f20 (posted within 7 days)
[2026-01-16T20:09:14.481Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r158682 (posted within 7 days)
[2026-01-16T20:09:14.481Z] [BOT] ⏭️  Skipping duplicate: JID_45123982 (posted within 7 days)
[2026-01-16T20:09:14.481Z] [BOT] ⏭️  Skipping duplicate: JID_ec909e8f-2025_jr2001318 (posted within 7 days)
⏭️  Skipping duplicate: JID_c8cdc7f0-fellow_r_00028107 (posted within 7 days)
[2026-01-16T20:09:14.608Z] [BOT] ✅ Loaded pending queue: 2773 total (2753 pending, 20 enriched, 0 posted)
[2026-01-16T20:09:14.776Z] [BOT] ✅ Saved pending queue: 2773 total (2753 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-16T20:09:14.776Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-16T20:09:14.838Z] [BOT] 📂 Loaded 4315 existing routing entries
[2026-01-16T20:09:14.904Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T20:09:14.905Z] [BOT] Total entries: 4325
   Timestamp: 2026-01-16T20:09:14.886Z
[2026-01-16T20:09:14.911Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🌉・san-francisco: 4 posts
     3. #🤠・austin: 3 posts
     4. #🗽・new-york: 2 posts
     5. #🤖・ai-jobs: 2 posts
[STATS] Channel stats saved
[2026-01-16T20:09:16.928Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3796) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*