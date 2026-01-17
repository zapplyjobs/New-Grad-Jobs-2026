# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T08:29:18.570Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T08:28:27.773Z] ========================================
[2026-01-17T08:28:27.775Z] Discord Bot Execution Log
[2026-01-17T08:28:27.775Z] Environment: GitHub Actions
[2026-01-17T08:28:27.775Z] Node Version: v20.19.6
[2026-01-17T08:28:27.775Z] ========================================
[2026-01-17T08:28:27.775Z] Environment Variables Check:
[2026-01-17T08:28:27.775Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T08:28:27.776Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.776Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T08:28:27.776Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T08:28:27.776Z] 
Multi-Channel Configuration:
[2026-01-17T08:28:27.776Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.776Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.776Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.776Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.776Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.776Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.776Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.776Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.777Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T08:28:27.777Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T08:28:27.777Z] 
Data Files Check:
[2026-01-17T08:28:27.777Z] .github/data/new_jobs.json: ✅ Exists (10 items, 29890 bytes)
[2026-01-17T08:28:27.787Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1281668 bytes)
[2026-01-17T08:28:27.787Z] 
========================================
[2026-01-17T08:28:27.787Z] Starting Enhanced Discord Bot...
[2026-01-17T08:28:27.787Z] ========================================
[2026-01-17T08:28:28.338Z] [BOT] ✅ Loaded V2 database: 2368 jobs
[2026-01-17T08:28:29.012Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T08:28:29.013Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T08:28:29.013Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T08:28:29.137Z] [BOT] ✅ Loaded pending queue: 2892 total (2872 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer, Applications and Customer Solutions at MemryX
[2026-01-17T08:28:29.140Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T08:28:29.140Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T08:28:29.140Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T08:28:29.141Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-17T08:28:29.142Z] [BOT] (3 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-17T08:28:29.142Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T08:28:29.145Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-17T08:28:29.146Z] [BOT] 📍 [ROUTING] "Software Engineer, Applications and Customer Solutions" @ ORG_cb767a2d
[2026-01-17T08:28:29.146Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:28:29.164Z] [BOT ERROR] (node:2799) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T08:28:29.519Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d in #💻・tech-jobs
  ✅ Industry: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d
[2026-01-17T08:28:31.381Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T08:28:32.882Z] [BOT] 💾 Marked as posted: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d (instance #1)
[2026-01-17T08:28:32.882Z] [BOT] 💾 BEFORE ARCHIVING: 2369 jobs in database
[2026-01-17T08:28:32.884Z] [BOT] ✅ No jobs to archive (all 2369 jobs within 7-day window)
[2026-01-17T08:28:32.903Z] [BOT] 💾 Saved posted_jobs.json: 2369 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:28:32.903Z] [BOT] 📍 [ROUTING] "Software Engineer - Product" @ ORG_4f749de7
[2026-01-17T08:28:32.904Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:28:33.376Z] [BOT] ✅ Created forum post: 🔵 Software Engineer - Product @ ORG_4f749de7 in #💻・tech-jobs
[2026-01-17T08:28:33.376Z] [BOT] ✅ Industry: Software Engineer - Product @ ORG_4f749de7
[2026-01-17T08:28:35.148Z] [BOT] ✅ Created forum post: 🔵 Software Engineer - Product @ ORG_4f749de7 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-17T08:28:36.649Z] [BOT] 💾 Marked as posted: Software Engineer - Product @ ORG_4f749de7 (instance #1)
[2026-01-17T08:28:36.649Z] [BOT] 💾 BEFORE ARCHIVING: 2370 jobs in database
[2026-01-17T08:28:36.651Z] [BOT] ✅ No jobs to archive (all 2370 jobs within 7-day window)
[2026-01-17T08:28:36.665Z] [BOT] 💾 Saved posted_jobs.json: 2370 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:28:36.666Z] [BOT] 📍 [ROUTING] "Application Engineer - Mandarin" @ ORG_655c6ec2
   Category: TECH (matched: "engineer/engineering")
[2026-01-17T08:28:36.666Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:28:36.960Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - Mandarin @ ORG_655c6ec2 in #💻・tech-jobs
  ✅ Industry: Application Engineer - Mandarin @ ORG_655c6ec2
[2026-01-17T08:28:38.863Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - Mandarin @ ORG_655c6ec2 in #💻・remote-usa
[2026-01-17T08:28:38.863Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T08:28:40.364Z] [BOT] 💾 Marked as posted: Application Engineer - Mandarin @ ORG_655c6ec2 (instance #1)
[2026-01-17T08:28:40.364Z] [BOT] 💾 BEFORE ARCHIVING: 2371 jobs in database
[2026-01-17T08:28:40.366Z] [BOT] ✅ No jobs to archive (all 2371 jobs within 7-day window)
[2026-01-17T08:28:40.384Z] [BOT] 💾 Saved posted_jobs.json: 2371 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:28:43.385Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-17T08:28:43.387Z] [BOT] 📍 [ROUTING] "Robot Operator" @ ORG_830213f1 AI
   Category: AI (matched: "machine learning")
[2026-01-17T08:28:43.387Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T08:28:43.660Z] [BOT] ✅ Created forum post: 🏢 Robot Operator @ ORG_830213f1 AI in #🤖・ai-jobs
[2026-01-17T08:28:43.660Z] [BOT] ✅ Industry: Robot Operator @ ORG_830213f1 AI
[2026-01-17T08:28:45.425Z] [BOT] ✅ Created forum post: 🏢 Robot Operator @ ORG_830213f1 AI in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T08:28:46.926Z] [BOT] 💾 Marked as posted: Robot Operator @ ORG_830213f1 AI (instance #1)
[2026-01-17T08:28:46.926Z] [BOT] 💾 BEFORE ARCHIVING: 2372 jobs in database
[2026-01-17T08:28:46.928Z] [BOT] ✅ No jobs to archive (all 2372 jobs within 7-day window)
[2026-01-17T08:28:46.944Z] [BOT] 💾 Saved posted_jobs.json: 2372 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:28:46.945Z] [BOT] 📍 [ROUTING] "Scout Search Quality Rater" @ ORG_066855bc
[2026-01-17T08:28:46.945Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T08:28:47.167Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater @ ORG_066855bc in #🤖・ai-jobs
[2026-01-17T08:28:47.167Z] [BOT] ✅ Industry: Scout Search Quality Rater @ ORG_066855bc
[2026-01-17T08:28:48.956Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater @ ORG_066855bc in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T08:28:50.458Z] [BOT] 💾 Marked as posted: Scout Search Quality Rater @ ORG_066855bc (instance #1)
[2026-01-17T08:28:50.458Z] [BOT] 💾 BEFORE ARCHIVING: 2373 jobs in database
[2026-01-17T08:28:50.459Z] [BOT] ✅ No jobs to archive (all 2373 jobs within 7-day window)
[2026-01-17T08:28:50.475Z] [BOT] 💾 Saved posted_jobs.json: 2373 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:28:50.476Z] [BOT] 📍 [ROUTING] "Scout Search Quality Rater - Spanish - USA" @ ORG_066855bc
[2026-01-17T08:28:50.476Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-17T08:28:50.825Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater - Spanish - USA @ ORG_066855bc in #🤖・ai-jobs
[2026-01-17T08:28:50.825Z] [BOT] ✅ Industry: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc
[2026-01-17T08:28:52.816Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater - Spanish - USA @ ORG_066855bc in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T08:28:54.318Z] [BOT] 💾 Marked as posted: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc (instance #1)
[2026-01-17T08:28:54.318Z] [BOT] 💾 BEFORE ARCHIVING: 2374 jobs in database
[2026-01-17T08:28:54.320Z] [BOT] ✅ No jobs to archive (all 2374 jobs within 7-day window)
[2026-01-17T08:28:54.336Z] [BOT] 💾 Saved posted_jobs.json: 2374 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:28:54.336Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate" @ ORG_08c9a13c
[2026-01-17T08:28:54.336Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T08:28:54.539Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-17T08:28:54.539Z] [BOT] ✅ Industry: Machine Learning Graduate @ ORG_08c9a13c
[2026-01-17T08:28:56.287Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Graduate @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T08:28:57.788Z] [BOT] 💾 Marked as posted: Machine Learning Graduate @ ORG_08c9a13c (instance #1)
[2026-01-17T08:28:57.789Z] [BOT] 💾 BEFORE ARCHIVING: 2375 jobs in database
[2026-01-17T08:28:57.790Z] [BOT] ✅ No jobs to archive (all 2375 jobs within 7-day window)
[2026-01-17T08:28:57.807Z] [BOT] 💾 Saved posted_jobs.json: 2375 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:28:57.807Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Orchestration" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T08:28:58.430Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c
[2026-01-17T08:29:00.116Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T08:29:01.618Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c (instance #1)
[2026-01-17T08:29:01.618Z] [BOT] 💾 BEFORE ARCHIVING: 2376 jobs in database
[2026-01-17T08:29:01.620Z] [BOT] ✅ No jobs to archive (all 2376 jobs within 7-day window)
[2026-01-17T08:29:01.634Z] [BOT] 💾 Saved posted_jobs.json: 2376 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:29:01.635Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Training @ ORG_08c9a13c (instance #1)
[2026-01-17T08:29:01.635Z] [BOT] 💾 BEFORE ARCHIVING: 2377 jobs in database
[2026-01-17T08:29:01.636Z] [BOT] ✅ No jobs to archive (all 2377 jobs within 7-day window)
[2026-01-17T08:29:01.651Z] [BOT] 💾 Saved posted_jobs.json: 2377 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:29:01.652Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Mldev @ ORG_08c9a13c (instance #1)
[2026-01-17T08:29:01.652Z] [BOT] 💾 BEFORE ARCHIVING: 2378 jobs in database
[2026-01-17T08:29:01.653Z] [BOT] ✅ No jobs to archive (all 2378 jobs within 7-day window)
[2026-01-17T08:29:01.669Z] [BOT] 💾 Saved posted_jobs.json: 2378 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:29:01.669Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Applied Machine Learning - Enterprise @ ORG_08c9a13c (instance #1)
[2026-01-17T08:29:01.670Z] [BOT] 💾 BEFORE ARCHIVING: 2379 jobs in database
[2026-01-17T08:29:01.671Z] [BOT] ✅ No jobs to archive (all 2379 jobs within 7-day window)
[2026-01-17T08:29:01.685Z] [BOT] 💾 Saved posted_jobs.json: 2379 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:29:01.685Z] [BOT] 📍 [ROUTING] "Builder – New Grad - Software Engineer" @ ORG_eb020b7a
[2026-01-17T08:29:01.685Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T08:29:02.034Z] [BOT] ✅ Created forum post: 🏢 Builder – New Grad - Software Engineer @ ORG_eb020b7a in #🤖・ai-jobs
[2026-01-17T08:29:02.035Z] [BOT] ✅ Industry: Builder – New Grad - Software Engineer @ ORG_eb020b7a
[2026-01-17T08:29:03.802Z] [BOT] ✅ Created forum post: 🏢 Builder – New Grad - Software Engineer @ ORG_eb020b7a in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T08:29:05.304Z] [BOT] 💾 Marked as posted: Builder – New Grad - Software Engineer @ ORG_eb020b7a (instance #1)
[2026-01-17T08:29:05.304Z] [BOT] 💾 BEFORE ARCHIVING: 2380 jobs in database
[2026-01-17T08:29:05.306Z] [BOT] ✅ No jobs to archive (all 2380 jobs within 7-day window)
[2026-01-17T08:29:05.319Z] [BOT] 💾 Saved posted_jobs.json: 2380 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:29:08.320Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T08:29:08.320Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (USA)" @ supabase
   Category: SALES (matched: "sales")
[2026-01-17T08:29:08.321Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T08:29:08.553Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (USA) @ supabase in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (USA) @ supabase
[2026-01-17T08:29:10.345Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (USA) @ supabase in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T08:29:11.847Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (USA) @ supabase (instance #1)
[2026-01-17T08:29:11.847Z] [BOT] 💾 BEFORE ARCHIVING: 2381 jobs in database
[2026-01-17T08:29:11.849Z] [BOT] ✅ No jobs to archive (all 2381 jobs within 7-day window)
[2026-01-17T08:29:11.864Z] [BOT] 💾 Saved posted_jobs.json: 2381 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:29:14.864Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T08:29:14.864Z] [BOT] ⏭️  Skipping duplicate: JID_a175d828 (posted within 7 days)
[2026-01-17T08:29:14.864Z] [BOT] ⏭️  Skipping duplicate: JID_7b6a3d64 (posted within 7 days)
[2026-01-17T08:29:14.865Z] [BOT] ⏭️  Skipping duplicate: JID_71726d6d (posted within 7 days)
[2026-01-17T08:29:14.865Z] [BOT] ⏭️  Skipping duplicate: JID_047d3e46 (posted within 7 days)
[2026-01-17T08:29:14.865Z] [BOT] ⏭️  Skipping duplicate: JID_68c161a9 (posted within 7 days)
[2026-01-17T08:29:14.865Z] [BOT] ⏭️  Skipping duplicate: JID_e23c41f3 (posted within 7 days)
[2026-01-17T08:29:14.866Z] [BOT] ⏭️  Skipping duplicate: JID_3e4eb060 (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_953d2072-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_db521b2b-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_5ae4949c (posted within 7 days)
[2026-01-17T08:29:14.998Z] [BOT] ✅ Loaded pending queue: 2892 total (2872 pending, 20 enriched, 0 posted)
[2026-01-17T08:29:15.166Z] [BOT] ✅ Saved pending queue: 2892 total (2872 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-17T08:29:15.167Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-17T08:29:15.227Z] [BOT] 📂 Loaded 4575 existing routing entries
[2026-01-17T08:29:15.297Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4585
[2026-01-17T08:29:15.297Z] [BOT] Timestamp: 2026-01-17T08:29:15.277Z
[2026-01-17T08:29:15.298Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T08:29:15.298Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-17T08:29:15.298Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2026-01-17T08:29:15.298Z] [BOT] Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 6 posts
     2. #💻・tech-jobs: 3 posts
     3. #💻・remote-usa: 3 posts
[2026-01-17T08:29:15.298Z] [BOT] 4. #🌧️・seattle: 3 posts
     5. #🌉・san-francisco: 2 posts
[2026-01-17T08:29:15.299Z] [BOT] [STATS] Channel stats saved
[2026-01-17T08:29:17.326Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2799) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*