# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T07:39:31.028Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T07:38:46.101Z] ========================================
[2026-01-17T07:38:46.103Z] Discord Bot Execution Log
[2026-01-17T07:38:46.103Z] Environment: GitHub Actions
[2026-01-17T07:38:46.103Z] Node Version: v20.19.6
[2026-01-17T07:38:46.103Z] ========================================
[2026-01-17T07:38:46.103Z] Environment Variables Check:
[2026-01-17T07:38:46.103Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T07:38:46.104Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.104Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T07:38:46.104Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T07:38:46.104Z] 
Multi-Channel Configuration:
[2026-01-17T07:38:46.104Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.104Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.104Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.104Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.104Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.104Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.104Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.104Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.105Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T07:38:46.105Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T07:38:46.105Z] 
Data Files Check:
[2026-01-17T07:38:46.105Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44905 bytes)
[2026-01-17T07:38:46.114Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1260387 bytes)
[2026-01-17T07:38:46.114Z] 
========================================
[2026-01-17T07:38:46.114Z] Starting Enhanced Discord Bot...
[2026-01-17T07:38:46.115Z] ========================================
[2026-01-17T07:38:46.655Z] [BOT] ✅ Loaded V2 database: 2329 jobs
[2026-01-17T07:38:47.499Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T07:38:47.499Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T07:38:47.499Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T07:38:47.624Z] [BOT] ✅ Loaded pending queue: 2883 total (2863 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Large Model System Graduate - Machine Learning Systems at ByteDance
[2026-01-17T07:38:47.629Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T07:38:47.629Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T07:38:47.629Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T07:38:47.630Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-17T07:38:47.630Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-17T07:38:47.630Z] [BOT] - Junior Software Engineer @ mthree: salt lake, united states
   - Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T07:38:47.634Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-17T07:38:47.635Z] [BOT] 📍 [ROUTING] "Software Engineer Large Model System Graduate - Machine Learning Systems" @ ORG_08c9a13c
[2026-01-17T07:38:47.635Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:38:47.653Z] [BOT ERROR] (node:2396) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T07:38:47.923Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c
[2026-01-17T07:38:49.603Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c in #🌧️・seattle
[2026-01-17T07:38:49.604Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-17T07:38:51.104Z] [BOT] 💾 Marked as posted: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2026-01-17T07:38:51.105Z] [BOT] 💾 BEFORE ARCHIVING: 2330 jobs in database
[2026-01-17T07:38:51.107Z] [BOT] ✅ No jobs to archive (all 2330 jobs within 7-day window)
[2026-01-17T07:38:51.125Z] [BOT] 💾 Saved posted_jobs.json: 2330 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:38:51.125Z] [BOT] 📍 [ROUTING] "AI Research Engineer" @ ORG_412b5241 Lab
[2026-01-17T07:38:51.125Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:38:51.356Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer @ ORG_412b5241 Lab  in #🤖・ai-jobs
  ✅ Industry: AI Research Engineer @ ORG_412b5241 Lab
[2026-01-17T07:38:53.062Z] [BOT] ✅ Created forum post: 🏢 AI Research Engineer @ ORG_412b5241 Lab  in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-17T07:38:54.563Z] [BOT] 💾 Marked as posted: AI Research Engineer @ ORG_412b5241 Lab  (instance #1)
💾 BEFORE ARCHIVING: 2331 jobs in database
[2026-01-17T07:38:54.565Z] [BOT] ✅ No jobs to archive (all 2331 jobs within 7-day window)
[2026-01-17T07:38:54.579Z] [BOT] 💾 Saved posted_jobs.json: 2331 active jobs
[2026-01-17T07:38:54.580Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer - IVR" @ ORG_ba13c5a3 Systems
[2026-01-17T07:38:54.580Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T07:38:54.580Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:38:54.770Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - IVR @ ORG_ba13c5a3 Systems in #🤖・ai-jobs
[2026-01-17T07:38:54.770Z] [BOT] ✅ Industry: Software Engineer - IVR @ ORG_ba13c5a3 Systems
[2026-01-17T07:38:56.948Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - IVR @ ORG_ba13c5a3 Systems in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-17T07:38:58.450Z] [BOT] 💾 Marked as posted: Software Engineer - IVR @ ORG_ba13c5a3 Systems (instance #1)
[2026-01-17T07:38:58.451Z] [BOT] 💾 BEFORE ARCHIVING: 2332 jobs in database
[2026-01-17T07:38:58.452Z] [BOT] ✅ No jobs to archive (all 2332 jobs within 7-day window)
[2026-01-17T07:38:58.469Z] [BOT] 💾 Saved posted_jobs.json: 2332 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:38:58.470Z] [BOT] 📍 [ROUTING] "Software Engineer - Full-Stack" @ ORG_e09a2b12
[2026-01-17T07:38:58.470Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T07:38:58.742Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full-Stack @ ORG_e09a2b12 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Full-Stack @ ORG_e09a2b12
[2026-01-17T07:39:00.460Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full-Stack @ ORG_e09a2b12 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T07:39:01.962Z] [BOT] 💾 Marked as posted: Software Engineer - Full-Stack @ ORG_e09a2b12 (instance #1)
[2026-01-17T07:39:01.962Z] [BOT] 💾 BEFORE ARCHIVING: 2333 jobs in database
[2026-01-17T07:39:01.965Z] [BOT] ✅ No jobs to archive (all 2333 jobs within 7-day window)
[2026-01-17T07:39:01.987Z] [BOT] 💾 Saved posted_jobs.json: 2333 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:39:04.989Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-17T07:39:04.990Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Starlink" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:39:05.344Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Starlink @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Full Stack Software Engineer - Starlink @ ORG_afd623b1
[2026-01-17T07:39:07.033Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Starlink @ ORG_afd623b1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T07:39:08.534Z] [BOT] 💾 Marked as posted: Full Stack Software Engineer - Starlink @ ORG_afd623b1 (instance #1)
[2026-01-17T07:39:08.535Z] [BOT] 💾 BEFORE ARCHIVING: 2334 jobs in database
[2026-01-17T07:39:08.536Z] [BOT] ✅ No jobs to archive (all 2334 jobs within 7-day window)
[2026-01-17T07:39:08.550Z] [BOT] 💾 Saved posted_jobs.json: 2334 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:39:08.551Z] [BOT] 📍 [ROUTING] "Technician - Mapping I" @ ORG_6f8a62f0 Hathaway Energy
[2026-01-17T07:39:08.551Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:39:08.819Z] [BOT] ✅ Created forum post: 🏢 Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy in #💻・tech-jobs
[2026-01-17T07:39:08.820Z] [BOT] ✅ Industry: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy
[2026-01-17T07:39:10.577Z] [BOT] ✅ Created forum post: 🏢 Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy in #💻・remote-usa
[2026-01-17T07:39:10.577Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T07:39:12.079Z] [BOT] 💾 Marked as posted: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy (instance #1)
[2026-01-17T07:39:12.079Z] [BOT] 💾 BEFORE ARCHIVING: 2335 jobs in database
[2026-01-17T07:39:12.081Z] [BOT] ✅ No jobs to archive (all 2335 jobs within 7-day window)
[2026-01-17T07:39:12.099Z] [BOT] 💾 Saved posted_jobs.json: 2335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:39:12.099Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_15516c0c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:39:12.672Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_15516c0c in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_15516c0c
[2026-01-17T07:39:14.357Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_15516c0c in #🌉・san-francisco
[2026-01-17T07:39:14.357Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T07:39:15.859Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_15516c0c (instance #1)
[2026-01-17T07:39:15.859Z] [BOT] 💾 BEFORE ARCHIVING: 2336 jobs in database
[2026-01-17T07:39:15.861Z] [BOT] ✅ No jobs to archive (all 2336 jobs within 7-day window)
[2026-01-17T07:39:15.875Z] [BOT] 💾 Saved posted_jobs.json: 2336 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:39:15.875Z] [BOT] 📍 [ROUTING] "Database Administrator" @ ORG_1954b120
   Category: TECH (matched: "data")
[2026-01-17T07:39:15.875Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:39:16.085Z] [BOT] ✅ Created forum post: 🏢 Database Administrator @ ORG_1954b120 in #💻・tech-jobs
  ✅ Industry: Database Administrator @ ORG_1954b120
[2026-01-17T07:39:17.852Z] [BOT] ✅ Created forum post: 🏢 Database Administrator @ ORG_1954b120 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T07:39:19.353Z] [BOT] 💾 Marked as posted: Database Administrator @ ORG_1954b120 (instance #1)
[2026-01-17T07:39:19.353Z] [BOT] 💾 BEFORE ARCHIVING: 2337 jobs in database
[2026-01-17T07:39:19.355Z] [BOT] ✅ No jobs to archive (all 2337 jobs within 7-day window)
[2026-01-17T07:39:19.369Z] [BOT] 💾 Saved posted_jobs.json: 2337 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:39:19.370Z] [BOT] 📍 [ROUTING] "Platform Engineer: Kubernetes" @ supabase
[2026-01-17T07:39:19.370Z] [BOT] Category: TECH (matched: "data engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:39:19.549Z] [BOT] ✅ Created forum post: 🏢 Platform Engineer: Kubernetes @ supabase in #💻・tech-jobs
[2026-01-17T07:39:19.549Z] [BOT] ✅ Industry: Platform Engineer: Kubernetes @ supabase
[2026-01-17T07:39:21.051Z] [BOT] 💾 Marked as posted: Platform Engineer: Kubernetes @ supabase (instance #1)
[2026-01-17T07:39:21.051Z] [BOT] 💾 BEFORE ARCHIVING: 2338 jobs in database
[2026-01-17T07:39:21.053Z] [BOT] ✅ No jobs to archive (all 2338 jobs within 7-day window)
[2026-01-17T07:39:21.068Z] [BOT] 💾 Saved posted_jobs.json: 2338 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:39:21.068Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
[2026-01-17T07:39:21.068Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T07:39:21.267Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ mthree in #💻・tech-jobs
[2026-01-17T07:39:21.267Z] [BOT] ✅ Industry: Junior Software Engineer @ mthree
[2026-01-17T07:39:22.961Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ mthree in #🗽・new-york
[2026-01-17T07:39:22.961Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T07:39:24.463Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ mthree (instance #1)
[2026-01-17T07:39:24.463Z] [BOT] 💾 BEFORE ARCHIVING: 2339 jobs in database
[2026-01-17T07:39:24.465Z] [BOT] ✅ No jobs to archive (all 2339 jobs within 7-day window)
[2026-01-17T07:39:24.479Z] [BOT] 💾 Saved posted_jobs.json: 2339 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:39:24.480Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ mthree (instance #1)
[2026-01-17T07:39:24.480Z] [BOT] 💾 BEFORE ARCHIVING: 2340 jobs in database
[2026-01-17T07:39:24.481Z] [BOT] ✅ No jobs to archive (all 2340 jobs within 7-day window)
[2026-01-17T07:39:24.495Z] [BOT] 💾 Saved posted_jobs.json: 2340 active jobs
[2026-01-17T07:39:24.495Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T07:39:24.495Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ mthree (instance #1)
💾 BEFORE ARCHIVING: 2341 jobs in database
[2026-01-17T07:39:24.496Z] [BOT] ✅ No jobs to archive (all 2341 jobs within 7-day window)
[2026-01-17T07:39:24.510Z] [BOT] 💾 Saved posted_jobs.json: 2341 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T07:39:27.510Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T07:39:27.511Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2a1577a7-detail (posted within 7 days)
[2026-01-17T07:39:27.511Z] [BOT] ⏭️  Skipping duplicate: JID_12dc5c2f (posted within 7 days)
[2026-01-17T07:39:27.511Z] [BOT] ⏭️  Skipping duplicate: JID_b54cc3d5-cx_1-job-10002986 (posted within 7 days)
[2026-01-17T07:39:27.512Z] [BOT] ⏭️  Skipping duplicate: JID_6142e812 (posted within 7 days)
[2026-01-17T07:39:27.512Z] [BOT] ⏭️  Skipping duplicate: JID_bfc8f924 (posted within 7 days)
[2026-01-17T07:39:27.512Z] [BOT] ⏭️  Skipping duplicate: JID_c1e97cac (posted within 7 days)
[2026-01-17T07:39:27.512Z] [BOT] ⏭️  Skipping duplicate: JID_74b9577b-administrator_313862-1 (posted within 7 days)
[2026-01-17T07:39:27.512Z] [BOT] ⏭️  Skipping duplicate: JID_9885820d (posted within 7 days)
[2026-01-17T07:39:27.512Z] [BOT] ⏭️  Skipping duplicate: JID_a0a2a3d6 (posted within 7 days)
[2026-01-17T07:39:27.512Z] [BOT] ⏭️  Skipping duplicate: JID_53fe0c83 (posted within 7 days)
[2026-01-17T07:39:27.623Z] [BOT] ✅ Loaded pending queue: 2883 total (2863 pending, 20 enriched, 0 posted)
[2026-01-17T07:39:27.787Z] [BOT] ✅ Saved pending queue: 2883 total (2863 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-17T07:39:27.788Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-17T07:39:27.851Z] [BOT] 📂 Loaded 4545 existing routing entries
[2026-01-17T07:39:27.926Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-17T07:39:27.926Z] [BOT] Total entries: 4555
   Timestamp: 2026-01-17T07:39:27.908Z
[2026-01-17T07:39:27.927Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T07:39:27.927Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
[2026-01-17T07:39:27.927Z] [BOT] Skipped: 0
[2026-01-17T07:39:27.927Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T07:39:27.928Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・remote-usa: 2 posts
[2026-01-17T07:39:27.928Z] [BOT] 4. #🗽・new-york: 2 posts
     5. #🌧️・seattle: 1 posts
[2026-01-17T07:39:27.928Z] [BOT] [STATS] Channel stats saved
[2026-01-17T07:39:29.949Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2396) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*