# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T20:49:17.188Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T20:48:32.002Z] ========================================
[2025-12-20T20:48:32.004Z] Discord Bot Execution Log
[2025-12-20T20:48:32.004Z] Environment: GitHub Actions
[2025-12-20T20:48:32.004Z] Node Version: v20.19.6
[2025-12-20T20:48:32.004Z] ========================================
[2025-12-20T20:48:32.004Z] Environment Variables Check:
[2025-12-20T20:48:32.004Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T20:48:32.004Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.004Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T20:48:32.004Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T20:48:32.004Z] 
Multi-Channel Configuration:
[2025-12-20T20:48:32.004Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.005Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.005Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.005Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.005Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.005Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.005Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.005Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.005Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T20:48:32.005Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T20:48:32.005Z] 
Data Files Check:
[2025-12-20T20:48:32.006Z] .github/data/new_jobs.json: ✅ Exists (10 items, 40184 bytes)
[2025-12-20T20:48:32.009Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 412670 bytes)
[2025-12-20T20:48:32.009Z] 
========================================
[2025-12-20T20:48:32.009Z] Starting Enhanced Discord Bot...
[2025-12-20T20:48:32.009Z] ========================================
[2025-12-20T20:48:32.530Z] [BOT] ✅ Loaded V2 database: 707 jobs
[2025-12-20T20:48:33.150Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T20:48:33.150Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T20:48:33.150Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T20:48:33.154Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T20:48:33.197Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T20:48:33.241Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T20:48:33.243Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T20:48:33.244Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T20:48:33.244Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T20:48:33.244Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-20T20:48:33.245Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T20:48:33.249Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-20T20:48:33.249Z] [BOT] 📍 [ROUTING] "Graduate Leadership Program - Data Analytics" @ ORG_b2822ace
[2025-12-20T20:48:33.250Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:48:33.267Z] [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T20:48:33.789Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - Data Analytics @ ORG_b2822ace in #💻・tech-jobs
[2025-12-20T20:48:33.789Z] [BOT] ✅ Industry: Graduate Leadership Program - Data Analytics @ ORG_b2822ace
[2025-12-20T20:48:35.590Z] [BOT] ✅ Created forum post: 🏢 Graduate Leadership Program - Data Analytics @ ORG_b2822ace in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-20T20:48:37.091Z] [BOT] 💾 Marked as posted: Graduate Leadership Program - Data Analytics @ ORG_b2822ace (instance #1)
[2025-12-20T20:48:37.091Z] [BOT] 💾 BEFORE ARCHIVING: 708 jobs in database
[2025-12-20T20:48:37.092Z] [BOT] ✅ No jobs to archive (all 708 jobs within 7-day window)
[2025-12-20T20:48:37.102Z] [BOT] 💾 Saved posted_jobs.json: 708 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T20:48:37.102Z] [BOT] 📍 [ROUTING] "Graduate C++ Software Engineer" @ ORG_2de802b0 Vinci
[2025-12-20T20:48:37.102Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:48:37.411Z] [BOT] ✅ Created forum post: 🏢 Graduate C++ Software Engineer @ ORG_2de802b0 Vinci in #💻・tech-jobs
[2025-12-20T20:48:37.411Z] [BOT] ✅ Industry: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci
[2025-12-20T20:48:39.053Z] [BOT] ✅ Created forum post: 🏢 Graduate C++ Software Engineer @ ORG_2de802b0 Vinci in #💻・remote-usa
[2025-12-20T20:48:39.053Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T20:48:40.554Z] [BOT] 💾 Marked as posted: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci (instance #1)
[2025-12-20T20:48:40.554Z] [BOT] 💾 BEFORE ARCHIVING: 709 jobs in database
[2025-12-20T20:48:40.554Z] [BOT] ✅ No jobs to archive (all 709 jobs within 7-day window)
[2025-12-20T20:48:40.560Z] [BOT] 💾 Saved posted_jobs.json: 709 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T20:48:40.560Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Starlink" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2025-12-20T20:48:40.561Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:48:40.893Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Starlink @ ORG_afd623b1 in #💻・tech-jobs
[2025-12-20T20:48:40.893Z] [BOT] ✅ Industry: Full Stack Software Engineer - Starlink @ ORG_afd623b1
[2025-12-20T20:48:42.545Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Starlink @ ORG_afd623b1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-20T20:48:44.045Z] [BOT] 💾 Marked as posted: Full Stack Software Engineer - Starlink @ ORG_afd623b1 (instance #1)
[2025-12-20T20:48:44.046Z] [BOT] 💾 BEFORE ARCHIVING: 710 jobs in database
[2025-12-20T20:48:44.046Z] [BOT] ✅ No jobs to archive (all 710 jobs within 7-day window)
[2025-12-20T20:48:44.053Z] [BOT] 💾 Saved posted_jobs.json: 710 active jobs
[2025-12-20T20:48:44.053Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:48:44.054Z] [BOT] 📍 [ROUTING] "Technician - Mapping I" @ ORG_6f8a62f0 Hathaway Energy
[2025-12-20T20:48:44.054Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:48:44.286Z] [BOT] ✅ Created forum post: 🏢 Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy in #💻・tech-jobs
  ✅ Industry: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy
[2025-12-20T20:48:46.165Z] [BOT] ✅ Created forum post: 🏢 Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T20:48:47.667Z] [BOT] 💾 Marked as posted: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy (instance #1)
[2025-12-20T20:48:47.667Z] [BOT] 💾 BEFORE ARCHIVING: 711 jobs in database
[2025-12-20T20:48:47.668Z] [BOT] ✅ No jobs to archive (all 711 jobs within 7-day window)
[2025-12-20T20:48:47.673Z] [BOT] 💾 Saved posted_jobs.json: 711 active jobs
[2025-12-20T20:48:47.673Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:48:47.674Z] [BOT] 📍 [ROUTING] "Full-Stack Engineer" @ ORG_b6502dec
[2025-12-20T20:48:47.674Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:48:47.977Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Engineer @ ORG_b6502dec in #💻・tech-jobs
  ✅ Industry: Full-Stack Engineer @ ORG_b6502dec
[2025-12-20T20:48:49.709Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Engineer @ ORG_b6502dec in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T20:48:51.209Z] [BOT] 💾 Marked as posted: Full-Stack Engineer @ ORG_b6502dec (instance #1)
[2025-12-20T20:48:51.209Z] [BOT] 💾 BEFORE ARCHIVING: 712 jobs in database
[2025-12-20T20:48:51.210Z] [BOT] ✅ No jobs to archive (all 712 jobs within 7-day window)
[2025-12-20T20:48:51.217Z] [BOT] 💾 Saved posted_jobs.json: 712 active jobs
[2025-12-20T20:48:51.217Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:48:51.217Z] [BOT] 📍 [ROUTING] "Database Administrator" @ ORG_1954b120
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T20:48:51.370Z] [BOT] ✅ Created forum post: 🏢 Database Administrator @ ORG_1954b120 in #💻・tech-jobs
  ✅ Industry: Database Administrator @ ORG_1954b120
[2025-12-20T20:48:53.154Z] [BOT] ✅ Created forum post: 🏢 Database Administrator @ ORG_1954b120 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T20:48:54.655Z] [BOT] 💾 Marked as posted: Database Administrator @ ORG_1954b120 (instance #1)
[2025-12-20T20:48:54.656Z] [BOT] 💾 BEFORE ARCHIVING: 713 jobs in database
[2025-12-20T20:48:54.656Z] [BOT] ✅ No jobs to archive (all 713 jobs within 7-day window)
[2025-12-20T20:48:54.662Z] [BOT] 💾 Saved posted_jobs.json: 713 active jobs
[2025-12-20T20:48:54.662Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:48:57.663Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-20T20:48:57.663Z] [BOT] 📍 [ROUTING] "Software Engineer Large Model System Graduate - Machine Learning Systems" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:48:57.936Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-20T20:48:57.937Z] [BOT] ✅ Industry: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c
[2025-12-20T20:48:59.762Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c in #🌧️・seattle
[2025-12-20T20:48:59.762Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T20:49:01.264Z] [BOT] 💾 Marked as posted: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2025-12-20T20:49:01.264Z] [BOT] 💾 BEFORE ARCHIVING: 714 jobs in database
[2025-12-20T20:49:01.264Z] [BOT] ✅ No jobs to archive (all 714 jobs within 7-day window)
[2025-12-20T20:49:01.271Z] [BOT] 💾 Saved posted_jobs.json: 714 active jobs
[2025-12-20T20:49:01.271Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:49:01.271Z] [BOT] 📍 [ROUTING] "Operations Associate - Data Collection" @ ORG_8b628335
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T20:49:01.271Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:49:01.402Z] [BOT] ✅ Created forum post: 🏢 Operations Associate - Data Collection @ ORG_8b628335 in #🤖・ai-jobs
[2025-12-20T20:49:01.402Z] [BOT] ✅ Industry: Operations Associate - Data Collection @ ORG_8b628335
[2025-12-20T20:49:03.099Z] [BOT] ✅ Created forum post: 🏢 Operations Associate - Data Collection @ ORG_8b628335 in #🌄・mountain-view
[2025-12-20T20:49:03.099Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-12-20T20:49:04.600Z] [BOT] 💾 Marked as posted: Operations Associate - Data Collection @ ORG_8b628335 (instance #1)
[2025-12-20T20:49:04.600Z] [BOT] 💾 BEFORE ARCHIVING: 715 jobs in database
[2025-12-20T20:49:04.601Z] [BOT] ✅ No jobs to archive (all 715 jobs within 7-day window)
[2025-12-20T20:49:04.608Z] [BOT] 💾 Saved posted_jobs.json: 715 active jobs
[2025-12-20T20:49:04.608Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:49:04.608Z] [BOT] 📍 [ROUTING] "AI Research Engineer" @ ORG_412b5241 Lab
[2025-12-20T20:49:04.608Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:49:04.934Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer @ ORG_412b5241 Lab  in #🤖・ai-jobs
[2025-12-20T20:49:04.934Z] [BOT] ✅ Industry: AI Research Engineer @ ORG_412b5241 Lab
[2025-12-20T20:49:06.623Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer @ ORG_412b5241 Lab  in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-20T20:49:08.123Z] [BOT] 💾 Marked as posted: AI Research Engineer @ ORG_412b5241 Lab  (instance #1)
[2025-12-20T20:49:08.123Z] [BOT] 💾 BEFORE ARCHIVING: 716 jobs in database
[2025-12-20T20:49:08.124Z] [BOT] ✅ No jobs to archive (all 716 jobs within 7-day window)
[2025-12-20T20:49:08.130Z] [BOT] 💾 Saved posted_jobs.json: 716 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T20:49:08.131Z] [BOT] 📍 [ROUTING] "Software Engineer - IVR" @ ORG_ba13c5a3 Systems
[2025-12-20T20:49:08.131Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T20:49:08.265Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - IVR @ ORG_ba13c5a3 Systems in #🤖・ai-jobs
  ✅ Industry: Software Engineer - IVR @ ORG_ba13c5a3 Systems
[2025-12-20T20:49:09.958Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - IVR @ ORG_ba13c5a3 Systems in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-20T20:49:11.458Z] [BOT] 💾 Marked as posted: Software Engineer - IVR @ ORG_ba13c5a3 Systems (instance #1)
[2025-12-20T20:49:11.458Z] [BOT] 💾 BEFORE ARCHIVING: 717 jobs in database
[2025-12-20T20:49:11.459Z] [BOT] ✅ No jobs to archive (all 717 jobs within 7-day window)
[2025-12-20T20:49:11.464Z] [BOT] 💾 Saved posted_jobs.json: 717 active jobs
[2025-12-20T20:49:11.465Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T20:49:14.466Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-20T20:49:14.467Z] [BOT] ⏭️  Skipping duplicate: JID_f443cdc6 (posted within 7 days)
[2025-12-20T20:49:14.467Z] [BOT] ⏭️  Skipping duplicate: JID_085b4a59 (posted within 7 days)
[2025-12-20T20:49:14.467Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2a1577a7-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_12dc5c2f (posted within 7 days)
[2025-12-20T20:49:14.467Z] [BOT] ⏭️  Skipping duplicate: JID_b54cc3d5-cx_1-job-10002986 (posted within 7 days)
[2025-12-20T20:49:14.467Z] [BOT] ⏭️  Skipping duplicate: JID_d3dd2685 (posted within 7 days)
[2025-12-20T20:49:14.467Z] [BOT] ⏭️  Skipping duplicate: JID_beff3af8 (posted within 7 days)
[2025-12-20T20:49:14.467Z] [BOT] ⏭️  Skipping duplicate: JID_bfc8f924 (posted within 7 days)
[2025-12-20T20:49:14.467Z] [BOT] ⏭️  Skipping duplicate: JID_c1e97cac (posted within 7 days)
[2025-12-20T20:49:14.467Z] [BOT] ⏭️  Skipping duplicate: JID_74b9577b-administrator_313862-1 (posted within 7 days)
[2025-12-20T20:49:14.470Z] [BOT] ✅ Loaded pending queue: 233 total (213 pending, 20 enriched, 0 posted)
[2025-12-20T20:49:14.473Z] [BOT] ✅ Saved pending queue: 233 total (213 pending, 10 enriched, 10 posted)
[2025-12-20T20:49:14.473Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T20:49:14.516Z] [BOT] 📂 Loaded 782 existing routing entries
[2025-12-20T20:49:14.562Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 792
   Timestamp: 2025-12-20T20:49:14.557Z
[2025-12-20T20:49:14.562Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T20:49:14.563Z] [BOT] Total attempts: 20
[2025-12-20T20:49:14.563Z] [BOT] Successful: 20
[2025-12-20T20:49:14.563Z] [BOT] Failed: 0
[2025-12-20T20:49:14.563Z] [BOT] Skipped: 0
[2025-12-20T20:49:14.563Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-20T20:49:14.566Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・remote-usa: 3 posts
     4. #🌄・mountain-view: 2 posts
     5. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2025-12-20T20:49:16.573Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*