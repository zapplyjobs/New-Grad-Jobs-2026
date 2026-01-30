# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T06:22:37.274Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T06:22:05.897Z] ========================================
[2026-01-30T06:22:05.898Z] Discord Bot Execution Log
[2026-01-30T06:22:05.898Z] Environment: GitHub Actions
[2026-01-30T06:22:05.898Z] Node Version: v20.20.0
[2026-01-30T06:22:05.899Z] ========================================
[2026-01-30T06:22:05.899Z] Environment Variables Check:
[2026-01-30T06:22:05.899Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T06:22:05.899Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T06:22:05.899Z] 
Multi-Channel Configuration:
[2026-01-30T06:22:05.899Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T06:22:05.899Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T06:22:05.900Z] 
Data Files Check:
[2026-01-30T06:22:05.901Z] .github/data/new_jobs.json: ✅ Exists (10 items, 198963 bytes)
[2026-01-30T06:22:05.911Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1704014 bytes)
[2026-01-30T06:22:05.911Z] 
========================================
[2026-01-30T06:22:05.911Z] Starting Enhanced Discord Bot...
[2026-01-30T06:22:05.911Z] ========================================
[2026-01-30T06:22:06.431Z] [BOT] ✅ Loaded V2 database: 269 jobs
[2026-01-30T06:22:06.857Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T06:22:06.858Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T06:22:06.858Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T06:22:06.974Z] [BOT] ✅ Loaded pending queue: 2921 total (2631 pending, 50 enriched, 240 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T06:22:06.975Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T06:22:06.975Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T06:22:06.975Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T06:22:06.976Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T06:22:06.980Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-01-30T06:22:06.980Z] [BOT] 📋 After blacklist filter: 48 jobs (0 blacklisted)
[2026-01-30T06:22:06.981Z] [BOT] 📋 After data quality filter: 48 jobs (0 invalid)
[2026-01-30T06:22:06.981Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-30T06:22:06.981Z] [BOT] ⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T06:22:06.985Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T06:22:06.985Z] [BOT] 📍 [ROUTING] "Recruiter, Applied AI" @ anthropic
[2026-01-30T06:22:06.986Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T06:22:07.002Z] [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T06:22:07.349Z] [BOT] ✅ Posted message: Recruiter, Applied AI @ anthropic in #💻・tech-jobs
[2026-01-30T06:22:07.349Z] [BOT] ✅ Industry: Recruiter, Applied AI @ anthropic
[2026-01-30T06:22:07.349Z] [BOT] 💾 Added channel posting: Recruiter, Applied AI @ anthropic → category channel (1 total channels)
[2026-01-30T06:22:07.350Z] [BOT] 💾 BEFORE MERGE: 270 jobs in memory (cached)
[2026-01-30T06:22:07.356Z] [BOT] ✅ Loaded V2 database: 269 jobs
[2026-01-30T06:22:07.356Z] [BOT] 💾 DISK STATE: 269 jobs on disk
[2026-01-30T06:22:07.356Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=270
[2026-01-30T06:22:07.357Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:22:07.357Z] [BOT] 💾 AFTER MERGE: 270 jobs (merged disk + memory)
[2026-01-30T06:22:07.357Z] [BOT] ✅ No jobs to archive (all 270 jobs within 7-day window)
[2026-01-30T06:22:07.379Z] [BOT] 💾 Saved posted_jobs.json: 270 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:08.881Z] [BOT] 📍 [ROUTING] "Recruiter, Technical" @ anthropic
   Category: TECH (default)
[2026-01-30T06:22:08.881Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T06:22:09.308Z] [BOT] ✅ Posted message: Recruiter, Technical @ anthropic in #💻・tech-jobs
[2026-01-30T06:22:09.308Z] [BOT] ✅ Industry: Recruiter, Technical @ anthropic
[2026-01-30T06:22:09.309Z] [BOT] 💾 Added channel posting: Recruiter, Technical @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 271 jobs in memory (cached)
[2026-01-30T06:22:09.314Z] [BOT] ✅ Loaded V2 database: 270 jobs
💾 DISK STATE: 270 jobs on disk
[2026-01-30T06:22:09.314Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=271
[2026-01-30T06:22:09.315Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:22:09.315Z] [BOT] 💾 AFTER MERGE: 271 jobs (merged disk + memory)
[2026-01-30T06:22:09.315Z] [BOT] ✅ No jobs to archive (all 271 jobs within 7-day window)
[2026-01-30T06:22:09.340Z] [BOT] 💾 Saved posted_jobs.json: 271 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:10.840Z] [BOT] 📍 [ROUTING] "Recruiting Systems Analyst" @ anthropic
   Category: TECH (default)
[2026-01-30T06:22:10.840Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T06:22:11.068Z] [BOT] ✅ Posted message: Recruiting Systems Analyst @ anthropic in #💻・tech-jobs
[2026-01-30T06:22:11.068Z] [BOT] ✅ Industry: Recruiting Systems Analyst @ anthropic
[2026-01-30T06:22:11.068Z] [BOT] 💾 Added channel posting: Recruiting Systems Analyst @ anthropic → category channel (1 total channels)
[2026-01-30T06:22:11.068Z] [BOT] 💾 BEFORE MERGE: 272 jobs in memory (cached)
[2026-01-30T06:22:11.074Z] [BOT] ✅ Loaded V2 database: 271 jobs
💾 DISK STATE: 271 jobs on disk
[2026-01-30T06:22:11.074Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=272
[2026-01-30T06:22:11.074Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:22:11.074Z] [BOT] 💾 AFTER MERGE: 272 jobs (merged disk + memory)
[2026-01-30T06:22:11.075Z] [BOT] ✅ No jobs to archive (all 272 jobs within 7-day window)
[2026-01-30T06:22:11.092Z] [BOT] 💾 Saved posted_jobs.json: 272 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:12.593Z] [BOT] 📍 [ROUTING] "Research Engineer, Data Ingestion" @ anthropic
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T06:22:12.761Z] [BOT] ✅ Posted message: Research Engineer, Data Ingestion @ anthropic in #💻・tech-jobs
[2026-01-30T06:22:12.761Z] [BOT] ✅ Industry: Research Engineer, Data Ingestion @ anthropic
[2026-01-30T06:22:12.761Z] [BOT] 💾 Added channel posting: Research Engineer, Data Ingestion @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 273 jobs in memory (cached)
[2026-01-30T06:22:12.767Z] [BOT] ✅ Loaded V2 database: 272 jobs
💾 DISK STATE: 272 jobs on disk
[2026-01-30T06:22:12.768Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=273
[2026-01-30T06:22:12.768Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:22:12.768Z] [BOT] 💾 AFTER MERGE: 273 jobs (merged disk + memory)
[2026-01-30T06:22:12.768Z] [BOT] ✅ No jobs to archive (all 273 jobs within 7-day window)
[2026-01-30T06:22:12.786Z] [BOT] 💾 Saved posted_jobs.json: 273 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:14.288Z] [BOT] 📍 [ROUTING] "Research Engineer, Discovery" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T06:22:14.595Z] [BOT] ✅ Posted message: Research Engineer, Discovery @ anthropic in #💻・tech-jobs
  ✅ Industry: Research Engineer, Discovery @ anthropic
[2026-01-30T06:22:14.595Z] [BOT] 💾 Added channel posting: Research Engineer, Discovery @ anthropic → category channel (1 total channels)
[2026-01-30T06:22:14.595Z] [BOT] 💾 BEFORE MERGE: 274 jobs in memory (cached)
[2026-01-30T06:22:14.601Z] [BOT] ✅ Loaded V2 database: 273 jobs
💾 DISK STATE: 273 jobs on disk
[2026-01-30T06:22:14.601Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=274
[2026-01-30T06:22:14.602Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 274 jobs (merged disk + memory)
[2026-01-30T06:22:14.602Z] [BOT] ✅ No jobs to archive (all 274 jobs within 7-day window)
[2026-01-30T06:22:14.619Z] [BOT] 💾 Saved posted_jobs.json: 274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:19.120Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T06:22:19.121Z] [BOT] 📍 [ROUTING] "Recruiting Data Engineering & Analytics" @ anthropic
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T06:22:19.121Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T06:22:19.455Z] [BOT] ✅ Posted message: Recruiting Data Engineering & Analytics @ anthropic in #📊・JID_fb739488
  ✅ Industry: Recruiting Data Engineering & Analytics @ anthropic
[2026-01-30T06:22:19.455Z] [BOT] 💾 Added channel posting: Recruiting Data Engineering & Analytics @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 275 jobs in memory (cached)
[2026-01-30T06:22:19.470Z] [BOT] ✅ Loaded V2 database: 274 jobs
[2026-01-30T06:22:19.470Z] [BOT] 💾 DISK STATE: 274 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=275
[2026-01-30T06:22:19.472Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 275 jobs (merged disk + memory)
[2026-01-30T06:22:19.472Z] [BOT] ✅ No jobs to archive (all 275 jobs within 7-day window)
[2026-01-30T06:22:19.503Z] [BOT] 💾 Saved posted_jobs.json: 275 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:24.006Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T06:22:24.007Z] [BOT] 📍 [ROUTING] "Research Engineer,  Frontier Red Team (Autonomy)" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T06:22:24.007Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:22:24.414Z] [BOT] ✅ Posted message: Research Engineer,  Frontier Red Team (Autonomy) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer,  Frontier Red Team (Autonomy) @ anthropic
[2026-01-30T06:22:24.414Z] [BOT] 💾 Added channel posting: Research Engineer,  Frontier Red Team (Autonomy) @ anthropic → category channel (1 total channels)
[2026-01-30T06:22:24.414Z] [BOT] 💾 BEFORE MERGE: 276 jobs in memory (cached)
[2026-01-30T06:22:24.420Z] [BOT] ✅ Loaded V2 database: 275 jobs
💾 DISK STATE: 275 jobs on disk
[2026-01-30T06:22:24.420Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=276
[2026-01-30T06:22:24.421Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 276 jobs (merged disk + memory)
[2026-01-30T06:22:24.422Z] [BOT] ✅ No jobs to archive (all 276 jobs within 7-day window)
[2026-01-30T06:22:24.444Z] [BOT] 💾 Saved posted_jobs.json: 276 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:25.947Z] [BOT] 📍 [ROUTING] "Research Engineer, Interpretability" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T06:22:25.947Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:22:26.098Z] [BOT] ✅ Posted message: Research Engineer, Interpretability @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Interpretability @ anthropic
[2026-01-30T06:22:26.098Z] [BOT] 💾 Added channel posting: Research Engineer, Interpretability @ anthropic → category channel (1 total channels)
[2026-01-30T06:22:26.098Z] [BOT] 💾 BEFORE MERGE: 277 jobs in memory (cached)
[2026-01-30T06:22:26.104Z] [BOT] ✅ Loaded V2 database: 276 jobs
💾 DISK STATE: 276 jobs on disk
[2026-01-30T06:22:26.104Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=277
[2026-01-30T06:22:26.105Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:22:26.105Z] [BOT] 💾 AFTER MERGE: 277 jobs (merged disk + memory)
[2026-01-30T06:22:26.105Z] [BOT] ✅ No jobs to archive (all 277 jobs within 7-day window)
[2026-01-30T06:22:26.124Z] [BOT] 💾 Saved posted_jobs.json: 277 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:27.625Z] [BOT] 📍 [ROUTING] "Research Engineer, Machine Learning (Reinforcement Learning) " @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T06:22:27.625Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:22:27.785Z] [BOT] ✅ Posted message: Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic
[2026-01-30T06:22:27.785Z] [BOT] 💾 Added channel posting: Research Engineer, Machine Learning (Reinforcement Learning)  @ anthropic → category channel (1 total channels)
[2026-01-30T06:22:27.785Z] [BOT] 💾 BEFORE MERGE: 278 jobs in memory (cached)
[2026-01-30T06:22:27.793Z] [BOT] ✅ Loaded V2 database: 277 jobs
💾 DISK STATE: 277 jobs on disk
[2026-01-30T06:22:27.793Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=278
[2026-01-30T06:22:27.794Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 278 jobs (merged disk + memory)
[2026-01-30T06:22:27.794Z] [BOT] ✅ No jobs to archive (all 278 jobs within 7-day window)
[2026-01-30T06:22:27.814Z] [BOT] 💾 Saved posted_jobs.json: 278 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:29.316Z] [BOT] 📍 [ROUTING] "Research Engineer, Model Evaluations" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T06:22:29.317Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:22:29.549Z] [BOT] ✅ Posted message: Research Engineer, Model Evaluations @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Model Evaluations @ anthropic
[2026-01-30T06:22:29.549Z] [BOT] 💾 Added channel posting: Research Engineer, Model Evaluations @ anthropic → category channel (1 total channels)
[2026-01-30T06:22:29.549Z] [BOT] 💾 BEFORE MERGE: 279 jobs in memory (cached)
[2026-01-30T06:22:29.555Z] [BOT] ✅ Loaded V2 database: 278 jobs
💾 DISK STATE: 278 jobs on disk
[2026-01-30T06:22:29.555Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=279
[2026-01-30T06:22:29.556Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:22:29.556Z] [BOT] 💾 AFTER MERGE: 279 jobs (merged disk + memory)
[2026-01-30T06:22:29.556Z] [BOT] ✅ No jobs to archive (all 279 jobs within 7-day window)
[2026-01-30T06:22:29.573Z] [BOT] 💾 Saved posted_jobs.json: 279 active jobs
[2026-01-30T06:22:29.573Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:34.075Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T06:22:34.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "674426e73f42c521"
⏭️  Skipping duplicate: JID_6f02cdd5 (posted within 7 days)
[2026-01-30T06:22:34.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "942e2d4cbbfdade1"
⏭️  Skipping duplicate: JID_b44da150 (posted within 7 days)
[2026-01-30T06:22:34.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c3ce575848ce9be1"
⏭️  Skipping duplicate: JID_27b17d0e (posted within 7 days)
[2026-01-30T06:22:34.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "96fb3f235e25ab95"
⏭️  Skipping duplicate: JID_da200308 (posted within 7 days)
[2026-01-30T06:22:34.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "d690e049036fe029"
⏭️  Skipping duplicate: JID_3a2e117d (posted within 7 days)
[2026-01-30T06:22:34.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "7f70eb76110012c7"
⏭️  Skipping duplicate: JID_9237e4ff (posted within 7 days)
[2026-01-30T06:22:34.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "a98af28118bad889"
[2026-01-30T06:22:34.077Z] [BOT] ⏭️  Skipping duplicate: JID_d4364adb (posted within 7 days)
[2026-01-30T06:22:34.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "6f7e6c7489500210"
⏭️  Skipping duplicate: JID_73606e35 (posted within 7 days)
[2026-01-30T06:22:34.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8a7eebe6b76f78cb"
⏭️  Skipping duplicate: JID_d2212a19 (posted within 7 days)
[2026-01-30T06:22:34.078Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "9465bd78e7a47238"
[2026-01-30T06:22:34.078Z] [BOT] ⏭️  Skipping duplicate: JID_c0cecaa1 (posted within 7 days)
[2026-01-30T06:22:34.192Z] [BOT] ✅ Loaded pending queue: 2921 total (2631 pending, 50 enriched, 240 posted)
[2026-01-30T06:22:34.371Z] [BOT] ✅ Saved pending queue: 2921 total (2631 pending, 40 enriched, 250 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T06:22:34.371Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T06:22:34.471Z] [BOT] 📂 Loaded 10331 existing routing entries
[2026-01-30T06:22:34.580Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10341
   Timestamp: 2026-01-30T06:22:34.537Z
[2026-01-30T06:22:34.581Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T06:22:34.581Z] [BOT] Total attempts: 12
   Successful: 10
   Failed: 0
   Skipped: 2
[2026-01-30T06:22:34.581Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
[2026-01-30T06:22:34.581Z] [BOT] Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #📊・JID_fb739488: 1 posts
[2026-01-30T06:22:34.582Z] [BOT] [STATS] Channel stats saved
[2026-01-30T06:22:34.582Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 279 jobs in memory (cached)
[2026-01-30T06:22:34.588Z] [BOT] ✅ Loaded V2 database: 279 jobs
💾 DISK STATE: 279 jobs on disk
[2026-01-30T06:22:34.588Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=279
[2026-01-30T06:22:34.589Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:22:34.589Z] [BOT] 💾 AFTER MERGE: 279 jobs (merged disk + memory)
[2026-01-30T06:22:34.590Z] [BOT] ✅ No jobs to archive (all 279 jobs within 7-day window)
[2026-01-30T06:22:34.608Z] [BOT] 💾 Saved posted_jobs.json: 279 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:22:34.609Z] [BOT] ✅ Database saved successfully
[2026-01-30T06:22:36.631Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*