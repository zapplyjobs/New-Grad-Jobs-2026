# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T20:32:13.609Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T20:31:18.130Z] ========================================
[2026-01-16T20:31:18.132Z] Discord Bot Execution Log
[2026-01-16T20:31:18.132Z] Environment: GitHub Actions
[2026-01-16T20:31:18.132Z] Node Version: v20.19.6
[2026-01-16T20:31:18.132Z] ========================================
[2026-01-16T20:31:18.132Z] Environment Variables Check:
[2026-01-16T20:31:18.132Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T20:31:18.132Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.132Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T20:31:18.133Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T20:31:18.133Z] 
Multi-Channel Configuration:
[2026-01-16T20:31:18.133Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.133Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.133Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.133Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.133Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.133Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.133Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.133Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.133Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T20:31:18.133Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T20:31:18.133Z] 
Data Files Check:
[2026-01-16T20:31:18.134Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58544 bytes)
[2026-01-16T20:31:18.142Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1130936 bytes)
[2026-01-16T20:31:18.142Z] 
========================================
[2026-01-16T20:31:18.142Z] Starting Enhanced Discord Bot...
[2026-01-16T20:31:18.142Z] ========================================
[2026-01-16T20:31:18.658Z] [BOT] ✅ Loaded V2 database: 2089 jobs
[2026-01-16T20:31:19.317Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T20:31:19.317Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T20:31:19.317Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T20:31:19.427Z] [BOT] ✅ Loaded pending queue: 2778 total (2758 pending, 20 enriched, 0 posted)
[2026-01-16T20:31:19.429Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Associate at University of Miami
[2026-01-16T20:31:19.432Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T20:31:19.432Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T20:31:19.433Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T20:31:19.433Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-16T20:31:19.433Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-16T20:31:19.434Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T20:31:19.438Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-16T20:31:19.438Z] [BOT] 📍 [ROUTING] "Postdoctoral Associate" @ ORG_9d38443e of Miami
[2026-01-16T20:31:19.438Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T20:31:19.455Z] [BOT ERROR] (node:4007) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T20:31:19.691Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Associate @ ORG_9d38443e of Miami in #🤖・ai-jobs
[2026-01-16T20:31:19.692Z] [BOT] ✅ Industry: Postdoctoral Associate @ ORG_9d38443e of Miami
[2026-01-16T20:31:21.770Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Associate @ ORG_9d38443e of Miami in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T20:31:23.270Z] [BOT] 💾 Marked as posted: Postdoctoral Associate @ ORG_9d38443e of Miami (instance #1)
[2026-01-16T20:31:23.270Z] [BOT] 💾 BEFORE ARCHIVING: 2090 jobs in database
[2026-01-16T20:31:23.272Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T20:31:23.277Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-16T20:31:23.277Z] [BOT] ✅ Archiving complete: 1 archived, 2089 active
[2026-01-16T20:31:23.291Z] [BOT] 💾 Saved posted_jobs.json: 2089 active jobs
[2026-01-16T20:31:23.291Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T20:31:23.292Z] [BOT] 📍 [ROUTING] "Software Engineer - E" @ ORG_fb8c4aa0 Corporation
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T20:31:23.292Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T20:31:23.625Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - E @ ORG_fb8c4aa0 Corporation in #🤖・ai-jobs
[2026-01-16T20:31:23.626Z] [BOT] ✅ Industry: Software Engineer - E @ ORG_fb8c4aa0 Corporation
[2026-01-16T20:31:25.437Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - E @ ORG_fb8c4aa0 Corporation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T20:31:26.936Z] [BOT] 💾 Marked as posted: Software Engineer - E @ ORG_fb8c4aa0 Corporation (instance #1)
[2026-01-16T20:31:26.936Z] [BOT] 💾 BEFORE ARCHIVING: 2090 jobs in database
[2026-01-16T20:31:26.938Z] [BOT] ✅ No jobs to archive (all 2090 jobs within 7-day window)
[2026-01-16T20:31:26.950Z] [BOT] 💾 Saved posted_jobs.json: 2090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:31:26.950Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_64dba1b4
   Category: AI (matched: "machine learning")
[2026-01-16T20:31:26.950Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T20:31:27.218Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_64dba1b4 in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_64dba1b4
[2026-01-16T20:31:29.195Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_64dba1b4 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-16T20:31:30.697Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate @ ORG_64dba1b4 (instance #1)
[2026-01-16T20:31:30.697Z] [BOT] 💾 BEFORE ARCHIVING: 2091 jobs in database
[2026-01-16T20:31:30.698Z] [BOT] ✅ No jobs to archive (all 2091 jobs within 7-day window)
[2026-01-16T20:31:30.714Z] [BOT] 💾 Saved posted_jobs.json: 2091 active jobs
[2026-01-16T20:31:30.714Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T20:31:30.716Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2026-01-16T20:31:30.716Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-16T20:31:31.133Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
[2026-01-16T20:31:31.133Z] [BOT] ✅ Industry: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin
[2026-01-16T20:31:34.622Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2026-01-16T20:31:34.622Z] [BOT] ✅ Location: 🤠・austin
[2026-01-16T20:31:36.124Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-16T20:31:36.124Z] [BOT] 💾 BEFORE ARCHIVING: 2092 jobs in database
[2026-01-16T20:31:36.125Z] [BOT] ✅ No jobs to archive (all 2092 jobs within 7-day window)
[2026-01-16T20:31:36.139Z] [BOT] 💾 Saved posted_jobs.json: 2092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:31:36.139Z] [BOT] 📍 [ROUTING] "Physics Department - Postdoctoral Scholar - Ligo" @ ORG_478e100e University
[2026-01-16T20:31:36.140Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-16T20:31:36.348Z] [BOT] ✅ Created forum post: 🏢 Physics Department - Postdoctoral Scholar - Ligo @ ORG_478e100e University in #🤖・ai-jobs
[2026-01-16T20:31:36.349Z] [BOT] ✅ Industry: Physics Department - Postdoctoral Scholar - Ligo @ ORG_478e100e University
[2026-01-16T20:31:38.213Z] [BOT] ✅ Created forum post: 🏢 Physics Department - Postdoctoral Scholar - Ligo @ ORG_478e100e University in #💻・remote-usa
[2026-01-16T20:31:38.213Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T20:31:39.714Z] [BOT] 💾 Marked as posted: Physics Department - Postdoctoral Scholar - Ligo @ ORG_478e100e University (instance #1)
[2026-01-16T20:31:39.714Z] [BOT] 💾 BEFORE ARCHIVING: 2093 jobs in database
[2026-01-16T20:31:39.716Z] [BOT] ✅ No jobs to archive (all 2093 jobs within 7-day window)
[2026-01-16T20:31:39.729Z] [BOT] 💾 Saved posted_jobs.json: 2093 active jobs
[2026-01-16T20:31:39.729Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T20:31:39.729Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_c3f8be8b
[2026-01-16T20:31:39.729Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T20:31:40.063Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_c3f8be8b in #🤖・ai-jobs
[2026-01-16T20:31:40.063Z] [BOT] ✅ Industry: Application Engineer @ ORG_c3f8be8b
[2026-01-16T20:31:41.960Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_c3f8be8b in #💻・remote-usa
[2026-01-16T20:31:41.960Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T20:31:43.462Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_c3f8be8b (instance #1)
[2026-01-16T20:31:43.462Z] [BOT] 💾 BEFORE ARCHIVING: 2094 jobs in database
[2026-01-16T20:31:43.463Z] [BOT] ✅ No jobs to archive (all 2094 jobs within 7-day window)
[2026-01-16T20:31:43.477Z] [BOT] 💾 Saved posted_jobs.json: 2094 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:31:43.477Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Fellow" @ ORG_64dba1b4
[2026-01-16T20:31:43.478Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-16T20:31:43.762Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Fellow @ ORG_64dba1b4 in #🤖・ai-jobs
[2026-01-16T20:31:43.762Z] [BOT] ✅ Industry: Postdoctoral Research Fellow @ ORG_64dba1b4
[2026-01-16T20:31:45.522Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Fellow @ ORG_64dba1b4 in #🚌・boston
[2026-01-16T20:31:45.522Z] [BOT] ✅ Location: 🚌・boston
[2026-01-16T20:31:47.023Z] [BOT] 💾 Marked as posted: Postdoctoral Research Fellow @ ORG_64dba1b4 (instance #1)
[2026-01-16T20:31:47.023Z] [BOT] 💾 BEFORE ARCHIVING: 2095 jobs in database
[2026-01-16T20:31:47.025Z] [BOT] ✅ No jobs to archive (all 2095 jobs within 7-day window)
[2026-01-16T20:31:47.038Z] [BOT] 💾 Saved posted_jobs.json: 2095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T20:31:50.039Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-16T20:31:50.039Z] [BOT] 📍 [ROUTING] "Sales Data Analyst 1" @ ORG_c46dc795 Innovation
[2026-01-16T20:31:50.039Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-16T20:31:50.520Z] [BOT] ✅ Created forum post: 🏢 Sales Data Analyst 1 @ ORG_c46dc795 Innovation in #📈・JID_fb739488
[2026-01-16T20:31:50.520Z] [BOT] ✅ Industry: Sales Data Analyst 1 @ ORG_c46dc795 Innovation
[2026-01-16T20:31:52.247Z] [BOT] ✅ Created forum post: 🏢 Sales Data Analyst 1 @ ORG_c46dc795 Innovation in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-16T20:31:53.748Z] [BOT] 💾 Marked as posted: Sales Data Analyst 1 @ ORG_c46dc795 Innovation (instance #1)
[2026-01-16T20:31:53.748Z] [BOT] 💾 BEFORE ARCHIVING: 2096 jobs in database
[2026-01-16T20:31:53.750Z] [BOT] ✅ No jobs to archive (all 2096 jobs within 7-day window)
[2026-01-16T20:31:53.762Z] [BOT] 💾 Saved posted_jobs.json: 2096 active jobs
[2026-01-16T20:31:53.762Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T20:31:56.763Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-16T20:31:56.763Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Department of Physics - Wissel Research Group" @ ORG_478e100e University
   Category: TECH (default)
[2026-01-16T20:31:56.763Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T20:31:57.408Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University in #💻・tech-jobs
  ✅ Industry: Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University
[2026-01-16T20:31:59.111Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T20:32:00.612Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Department of Physics - Wissel Research Group @ ORG_478e100e University (instance #1)
[2026-01-16T20:32:00.613Z] [BOT] 💾 BEFORE ARCHIVING: 2097 jobs in database
[2026-01-16T20:32:00.614Z] [BOT] ✅ No jobs to archive (all 2097 jobs within 7-day window)
[2026-01-16T20:32:00.630Z] [BOT] 💾 Saved posted_jobs.json: 2097 active jobs
[2026-01-16T20:32:00.630Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T20:32:03.631Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-16T20:32:03.631Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar" @ ORG_478e100e University
[2026-01-16T20:32:03.631Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-16T20:32:03.997Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_478e100e University in #🩺・healthcare-jobs
  ✅ Industry: Postdoctoral Scholar @ ORG_478e100e University
[2026-01-16T20:32:05.694Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T20:32:07.195Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar @ ORG_478e100e University (instance #1)
[2026-01-16T20:32:07.195Z] [BOT] 💾 BEFORE ARCHIVING: 2098 jobs in database
[2026-01-16T20:32:07.196Z] [BOT] ✅ No jobs to archive (all 2098 jobs within 7-day window)
[2026-01-16T20:32:07.211Z] [BOT] 💾 Saved posted_jobs.json: 2098 active jobs
[2026-01-16T20:32:07.211Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T20:32:10.212Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T20:32:10.212Z] [BOT] ⏭️  Skipping duplicate: JID_bf9f09c4-associate_r100089997 (posted within 7 days)
[2026-01-16T20:32:10.213Z] [BOT] ⏭️  Skipping duplicate: JID_a7cac1a6-_2320007 (posted within 7 days)
[2026-01-16T20:32:10.213Z] [BOT] ⏭️  Skipping duplicate: JID_affb5d98-onto_careers-JID_2c92c356-1_r-4671 (posted within 7 days)
[2026-01-16T20:32:10.213Z] [BOT] ⏭️  Skipping duplicate: JID_c1126351-associate_r132402 (posted within 7 days)
[2026-01-16T20:32:10.213Z] [BOT] ⏭️  Skipping duplicate: JID_aa2f7139-fellow_r_00019055-2 (posted within 7 days)
[2026-01-16T20:32:10.213Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_9afec196-group_req_0000045022-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_40a990de-scholar_req_0000053661 (posted within 7 days)
[2026-01-16T20:32:10.213Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_a8e5e11b-ligo_req_0000062439-1 (posted within 7 days)
[2026-01-16T20:32:10.214Z] [BOT] ⏭️  Skipping duplicate: JID_fff21582-engineer_r2700 (posted within 7 days)
[2026-01-16T20:32:10.214Z] [BOT] ⏭️  Skipping duplicate: JID_c1126351-fellow_r115210-1 (posted within 7 days)
[2026-01-16T20:32:10.321Z] [BOT] ✅ Loaded pending queue: 2778 total (2758 pending, 20 enriched, 0 posted)
[2026-01-16T20:32:10.494Z] [BOT] ✅ Saved pending queue: 2778 total (2758 pending, 10 enriched, 10 posted)
[2026-01-16T20:32:10.494Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T20:32:10.551Z] [BOT] 📂 Loaded 4325 existing routing entries
[2026-01-16T20:32:10.619Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4335
   Timestamp: 2026-01-16T20:32:10.599Z
[2026-01-16T20:32:10.620Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
   Total attempts: 20
[2026-01-16T20:32:10.620Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-16T20:32:10.620Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T20:32:10.620Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 7 posts
[2026-01-16T20:32:10.620Z] [BOT] 2. #💻・remote-usa: 6 posts
     3. #🚌・boston: 2 posts
     4. #🤠・austin: 1 posts
[2026-01-16T20:32:10.620Z] [BOT] 5. #📈・JID_fb739488: 1 posts
[2026-01-16T20:32:10.621Z] [BOT] [STATS] Channel stats saved
[2026-01-16T20:32:12.646Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4007) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*