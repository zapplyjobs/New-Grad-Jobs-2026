# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T16:41:31.925Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T16:40:47.984Z] ========================================
[2026-01-04T16:40:47.986Z] Discord Bot Execution Log
[2026-01-04T16:40:47.986Z] Environment: GitHub Actions
[2026-01-04T16:40:47.986Z] Node Version: v20.19.6
[2026-01-04T16:40:47.986Z] ========================================
[2026-01-04T16:40:47.986Z] Environment Variables Check:
[2026-01-04T16:40:47.986Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T16:40:47.987Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.987Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T16:40:47.987Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T16:40:47.987Z] 
Multi-Channel Configuration:
[2026-01-04T16:40:47.987Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.987Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.987Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.987Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.987Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.987Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.987Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.987Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.988Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T16:40:47.988Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T16:40:47.988Z] 
Data Files Check:
[2026-01-04T16:40:47.989Z] .github/data/new_jobs.json: ✅ Exists (10 items, 103897 bytes)
[2026-01-04T16:40:47.993Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 614296 bytes)
[2026-01-04T16:40:47.993Z] 
========================================
[2026-01-04T16:40:47.993Z] Starting Enhanced Discord Bot...
[2026-01-04T16:40:47.993Z] ========================================
[2026-01-04T16:40:48.522Z] [BOT] ✅ Loaded V2 database: 1220 jobs
[2026-01-04T16:40:49.702Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T16:40:49.702Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T16:40:49.703Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T16:40:49.703Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T16:40:49.773Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T16:40:49.860Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T16:40:49.863Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T16:40:49.863Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T16:40:49.864Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T16:40:49.864Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-04T16:40:49.864Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T16:40:49.868Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-04T16:40:49.869Z] [BOT] 📍 [ROUTING] "Instrumentation Engineer" @ nominal
[2026-01-04T16:40:49.869Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:40:49.887Z] [BOT ERROR] (node:2784) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T16:40:50.087Z] [BOT] ✅ Created forum post: 🏢 Instrumentation Engineer @ nominal in #🤖・ai-jobs
  ✅ Industry: Instrumentation Engineer @ nominal
[2026-01-04T16:40:52.094Z] [BOT] ✅ Created forum post: 🏢 Instrumentation Engineer @ nominal in #🦢・los-angeles
[2026-01-04T16:40:52.094Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-04T16:40:53.596Z] [BOT] 💾 Marked as posted: Instrumentation Engineer @ nominal (instance #1)
[2026-01-04T16:40:53.596Z] [BOT] 💾 BEFORE ARCHIVING: 1221 jobs in database
[2026-01-04T16:40:53.597Z] [BOT] ✅ No jobs to archive (all 1221 jobs within 7-day window)
[2026-01-04T16:40:53.609Z] [BOT] 💾 Saved posted_jobs.json: 1221 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:40:53.610Z] [BOT] 📍 [ROUTING] "Cloud Infrastructure Engineer" @ nominal
[2026-01-04T16:40:53.610Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:40:54.016Z] [BOT] ✅ Created forum post: 🏢 Cloud Infrastructure Engineer @ nominal in #🤖・ai-jobs
[2026-01-04T16:40:54.017Z] [BOT] ✅ Industry: Cloud Infrastructure Engineer @ nominal
[2026-01-04T16:40:55.733Z] [BOT] ✅ Created forum post: 🏢 Cloud Infrastructure Engineer @ nominal in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-04T16:40:57.233Z] [BOT] 💾 Marked as posted: Cloud Infrastructure Engineer @ nominal (instance #1)
💾 BEFORE ARCHIVING: 1222 jobs in database
[2026-01-04T16:40:57.234Z] [BOT] ✅ No jobs to archive (all 1222 jobs within 7-day window)
[2026-01-04T16:40:57.242Z] [BOT] 💾 Saved posted_jobs.json: 1222 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:40:57.242Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Personalization" @ spotify
[2026-01-04T16:40:57.242Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T16:40:57.379Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer, Personalization @ spotify
[2026-01-04T16:40:59.162Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer, Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T16:41:00.662Z] [BOT] 💾 Marked as posted: Machine Learning Engineer, Personalization @ spotify (instance #1)
[2026-01-04T16:41:00.663Z] [BOT] 💾 BEFORE ARCHIVING: 1223 jobs in database
[2026-01-04T16:41:00.664Z] [BOT] ✅ No jobs to archive (all 1223 jobs within 7-day window)
[2026-01-04T16:41:00.675Z] [BOT] 💾 Saved posted_jobs.json: 1223 active jobs
[2026-01-04T16:41:00.675Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:41:00.676Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ nominal
[2026-01-04T16:41:00.676Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:41:00.987Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend @ nominal in #🤖・ai-jobs
[2026-01-04T16:41:00.987Z] [BOT] ✅ Industry: Software Engineer - Backend @ nominal
[2026-01-04T16:41:02.819Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend @ nominal in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-04T16:41:04.320Z] [BOT] 💾 Marked as posted: Software Engineer - Backend @ nominal (instance #1)
[2026-01-04T16:41:04.320Z] [BOT] 💾 BEFORE ARCHIVING: 1224 jobs in database
[2026-01-04T16:41:04.321Z] [BOT] ✅ No jobs to archive (all 1224 jobs within 7-day window)
[2026-01-04T16:41:04.330Z] [BOT] 💾 Saved posted_jobs.json: 1224 active jobs
[2026-01-04T16:41:04.330Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:41:07.330Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-04T16:41:07.331Z] [BOT] 📍 [ROUTING] "Support Engineer (APAC)" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:41:07.617Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (APAC) @ supabase in #💻・tech-jobs
  ✅ Industry: Support Engineer (APAC) @ supabase
[2026-01-04T16:41:09.119Z] [BOT] 💾 Marked as posted: Support Engineer (APAC) @ supabase (instance #1)
[2026-01-04T16:41:09.119Z] [BOT] 💾 BEFORE ARCHIVING: 1225 jobs in database
[2026-01-04T16:41:09.120Z] [BOT] ✅ No jobs to archive (all 1225 jobs within 7-day window)
[2026-01-04T16:41:09.128Z] [BOT] 💾 Saved posted_jobs.json: 1225 active jobs
[2026-01-04T16:41:09.128Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:41:09.128Z] [BOT] 📍 [ROUTING] "Staff Engineer" @ clerk
[2026-01-04T16:41:09.129Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:41:09.258Z] [BOT] ✅ Created forum post: 🏢 Staff Engineer @ clerk in #💻・tech-jobs
[2026-01-04T16:41:09.258Z] [BOT] ✅ Industry: Staff Engineer @ clerk
[2026-01-04T16:41:10.961Z] [BOT] ✅ Created forum post: 🏢 Staff Engineer @ clerk in #🌉・san-francisco
[2026-01-04T16:41:10.961Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T16:41:12.461Z] [BOT] 💾 Marked as posted: Staff Engineer @ clerk (instance #1)
[2026-01-04T16:41:12.462Z] [BOT] 💾 BEFORE ARCHIVING: 1226 jobs in database
[2026-01-04T16:41:12.462Z] [BOT] ✅ No jobs to archive (all 1226 jobs within 7-day window)
[2026-01-04T16:41:12.471Z] [BOT] 💾 Saved posted_jobs.json: 1226 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:41:12.472Z] [BOT] 📍 [ROUTING] "Infra Engineer - Datacenters" @ railway
[2026-01-04T16:41:12.472Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:41:12.687Z] [BOT] ✅ Created forum post: 🏢 Infra Engineer - Datacenters @ railway in #💻・tech-jobs
  ✅ Industry: Infra Engineer - Datacenters @ railway
[2026-01-04T16:41:14.398Z] [BOT] ✅ Created forum post: 🏢 Infra Engineer - Datacenters @ railway in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T16:41:15.898Z] [BOT] 💾 Marked as posted: Infra Engineer - Datacenters @ railway (instance #1)
[2026-01-04T16:41:15.898Z] [BOT] 💾 BEFORE ARCHIVING: 1227 jobs in database
[2026-01-04T16:41:15.899Z] [BOT] ✅ No jobs to archive (all 1227 jobs within 7-day window)
[2026-01-04T16:41:15.909Z] [BOT] 💾 Saved posted_jobs.json: 1227 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:41:15.909Z] [BOT] 📍 [ROUTING] "Support Engineer (AMER)" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T16:41:15.909Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:41:16.257Z] [BOT] ✅ Created forum post: 🏢 Support Engineer (AMER) @ supabase in #💻・tech-jobs
  ✅ Industry: Support Engineer (AMER) @ supabase
[2026-01-04T16:41:17.757Z] [BOT] 💾 Marked as posted: Support Engineer (AMER) @ supabase (instance #1)
💾 BEFORE ARCHIVING: 1228 jobs in database
[2026-01-04T16:41:17.758Z] [BOT] ✅ No jobs to archive (all 1228 jobs within 7-day window)
[2026-01-04T16:41:17.767Z] [BOT] 💾 Saved posted_jobs.json: 1228 active jobs
[2026-01-04T16:41:17.767Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:41:17.767Z] [BOT] 📍 [ROUTING] "Developer Relations" @ railway
[2026-01-04T16:41:17.767Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:41:18.004Z] [BOT] ✅ Created forum post: 🏢 Developer Relations @ railway in #💻・tech-jobs
[2026-01-04T16:41:18.004Z] [BOT] ✅ Industry: Developer Relations @ railway
[2026-01-04T16:41:19.979Z] [BOT] ✅ Created forum post: 🏢 Developer Relations @ railway in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T16:41:21.479Z] [BOT] 💾 Marked as posted: Developer Relations @ railway (instance #1)
[2026-01-04T16:41:21.480Z] [BOT] 💾 BEFORE ARCHIVING: 1229 jobs in database
[2026-01-04T16:41:21.480Z] [BOT] ✅ No jobs to archive (all 1229 jobs within 7-day window)
[2026-01-04T16:41:21.488Z] [BOT] 💾 Saved posted_jobs.json: 1229 active jobs
[2026-01-04T16:41:21.488Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T16:41:24.488Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T16:41:24.489Z] [BOT] 📍 [ROUTING] "Customer Solution Architect (US time zones)" @ supabase
   Category: SALES (matched: "sales")
[2026-01-04T16:41:24.489Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T16:41:24.671Z] [BOT] ✅ Created forum post: 🏢 Customer Solution Architect (US time zones) @ supabase in #💲・sales-jobs
  ✅ Industry: Customer Solution Architect (US time zones) @ supabase
[2026-01-04T16:41:26.172Z] [BOT] 💾 Marked as posted: Customer Solution Architect (US time zones) @ supabase (instance #1)
[2026-01-04T16:41:26.172Z] [BOT] 💾 BEFORE ARCHIVING: 1230 jobs in database
[2026-01-04T16:41:26.173Z] [BOT] ✅ No jobs to archive (all 1230 jobs within 7-day window)
[2026-01-04T16:41:26.182Z] [BOT] 💾 Saved posted_jobs.json: 1230 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:41:29.183Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-04T16:41:29.184Z] [BOT] ⏭️  Skipping duplicate: JID_ced21c5b (posted within 7 days)
[2026-01-04T16:41:29.184Z] [BOT] ⏭️  Skipping duplicate: JID_fc164e2c (posted within 7 days)
[2026-01-04T16:41:29.184Z] [BOT] ⏭️  Skipping duplicate: JID_80bfe1d6 (posted within 7 days)
⏭️  Skipping duplicate: JID_01033c04 (posted within 7 days)
⏭️  Skipping duplicate: JID_7f456e2b (posted within 7 days)
⏭️  Skipping duplicate: JID_44482875 (posted within 7 days)
⏭️  Skipping duplicate: JID_c1ec4745 (posted within 7 days)
[2026-01-04T16:41:29.184Z] [BOT] ⏭️  Skipping duplicate: JID_369707cc (posted within 7 days)
⏭️  Skipping duplicate: JID_9ff8ee50 (posted within 7 days)
[2026-01-04T16:41:29.184Z] [BOT] ⏭️  Skipping duplicate: JID_cd394886 (posted within 7 days)
[2026-01-04T16:41:29.187Z] [BOT] ✅ Loaded pending queue: 70 total (50 pending, 20 enriched, 0 posted)
[2026-01-04T16:41:29.190Z] [BOT] ✅ Saved pending queue: 70 total (50 pending, 10 enriched, 10 posted)
[2026-01-04T16:41:29.190Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T16:41:29.238Z] [BOT] 📂 Loaded 2135 existing routing entries
[2026-01-04T16:41:29.298Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2145
[2026-01-04T16:41:29.299Z] [BOT] Timestamp: 2026-01-04T16:41:29.283Z
[2026-01-04T16:41:29.299Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T16:41:29.299Z] [BOT] Total attempts: 17
   Successful: 17
   Failed: 0
   Skipped: 0
[2026-01-04T16:41:29.300Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
[2026-01-04T16:41:29.300Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🦢・los-angeles: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #🤠・austin: 1 posts
[2026-01-04T16:41:29.300Z] [BOT] [STATS] Channel stats saved
[2026-01-04T16:41:31.312Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2784) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*