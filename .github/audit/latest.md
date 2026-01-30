# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T05:56:36.141Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T05:56:06.058Z] ========================================
[2026-01-30T05:56:06.060Z] Discord Bot Execution Log
[2026-01-30T05:56:06.060Z] Environment: GitHub Actions
[2026-01-30T05:56:06.060Z] Node Version: v20.20.0
[2026-01-30T05:56:06.060Z] ========================================
[2026-01-30T05:56:06.060Z] Environment Variables Check:
[2026-01-30T05:56:06.060Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T05:56:06.061Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.061Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T05:56:06.061Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T05:56:06.061Z] 
Multi-Channel Configuration:
[2026-01-30T05:56:06.061Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.061Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.061Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.061Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.061Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.061Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.061Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.061Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.062Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T05:56:06.062Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T05:56:06.062Z] 
Data Files Check:
[2026-01-30T05:56:06.063Z] .github/data/new_jobs.json: ✅ Exists (10 items, 186720 bytes)
[2026-01-30T05:56:06.075Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1623696 bytes)
[2026-01-30T05:56:06.075Z] 
========================================
[2026-01-30T05:56:06.075Z] Starting Enhanced Discord Bot...
[2026-01-30T05:56:06.075Z] ========================================
[2026-01-30T05:56:06.628Z] [BOT] ✅ Loaded V2 database: 259 jobs
[2026-01-30T05:56:07.079Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T05:56:07.080Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T05:56:07.080Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T05:56:07.204Z] [BOT] ✅ Loaded pending queue: 2921 total (2641 pending, 50 enriched, 230 posted)
[2026-01-30T05:56:07.204Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T05:56:07.204Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T05:56:07.207Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T05:56:07.211Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-01-30T05:56:07.211Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Startups at anthropic
[2026-01-30T05:56:07.211Z] [BOT] 🚫 Skipping blacklisted job: Segment Marketing Manager, Strategic Accounts at anthropic
🚫 Skipping blacklisted job: Senior Research Scientist, Reward Models at anthropic
[2026-01-30T05:56:07.213Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Continuous Integration  at anthropic
🚫 Skipping blacklisted job: Senior Software Engineer, Infrastructure  at anthropic
🚫 Skipping blacklisted job: Senior+ Software Engineer, Research Tools at anthropic
🚫 Skipping blacklisted job: Senior / Staff Software Engineer - Autonomous Agent Infrastructure at anthropic
🚫 Skipping blacklisted job: Senior/Staff Software Engineer, Inference at anthropic
[2026-01-30T05:56:07.338Z] [BOT] ✅ Loaded pending queue: 2921 total (2641 pending, 50 enriched, 230 posted)
[2026-01-30T05:56:07.532Z] [BOT] ✅ Saved pending queue: 2913 total (2641 pending, 42 enriched, 230 posted)
🗑️ Removed 8 blacklisted jobs from pending queue
[2026-01-30T05:56:07.532Z] [BOT] 📋 After blacklist filter: 40 jobs (8 blacklisted)
📋 After data quality filter: 40 jobs (0 invalid)
[2026-01-30T05:56:07.533Z] [BOT] 📋 After multi-location grouping: 40 unique jobs to post
[2026-01-30T05:56:07.533Z] [BOT] ⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T05:56:07.537Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T05:56:07.537Z] [BOT] 📍 [ROUTING] "Nonprofit Account Executive" @ anthropic
[2026-01-30T05:56:07.538Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:56:07.555Z] [BOT ERROR] (node:2478) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T05:56:07.911Z] [BOT] ✅ Posted message: Nonprofit Account Executive @ anthropic in #💻・tech-jobs
  ✅ Industry: Nonprofit Account Executive @ anthropic
[2026-01-30T05:56:07.912Z] [BOT] 💾 Added channel posting: Nonprofit Account Executive @ anthropic → category channel (1 total channels)
[2026-01-30T05:56:07.912Z] [BOT] 💾 BEFORE MERGE: 260 jobs in memory (cached)
[2026-01-30T05:56:07.918Z] [BOT] ✅ Loaded V2 database: 259 jobs
💾 DISK STATE: 259 jobs on disk
[2026-01-30T05:56:07.918Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=260
[2026-01-30T05:56:07.919Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:56:07.919Z] [BOT] 💾 AFTER MERGE: 260 jobs (merged disk + memory)
[2026-01-30T05:56:07.919Z] [BOT] ✅ No jobs to archive (all 260 jobs within 7-day window)
[2026-01-30T05:56:07.940Z] [BOT] 💾 Saved posted_jobs.json: 260 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:09.703Z] [BOT] ✅ Posted message: Nonprofit Account Executive @ anthropic in #🗽・JID_98d4f0de
[2026-01-30T05:56:09.703Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Nonprofit Account Executive @ anthropic → location channel (2 total channels)
[2026-01-30T05:56:09.703Z] [BOT] 💾 BEFORE MERGE: 260 jobs in memory (cached)
[2026-01-30T05:56:09.708Z] [BOT] ✅ Loaded V2 database: 260 jobs
💾 DISK STATE: 260 jobs on disk
[2026-01-30T05:56:09.709Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=260
[2026-01-30T05:56:09.709Z] [BOT] 🔀 Deep merged: Nonprofit Account Executive @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T05:56:09.709Z] [BOT] 💾 AFTER MERGE: 260 jobs (merged disk + memory)
[2026-01-30T05:56:09.710Z] [BOT] ✅ No jobs to archive (all 260 jobs within 7-day window)
[2026-01-30T05:56:09.728Z] [BOT] 💾 Saved posted_jobs.json: 260 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:11.229Z] [BOT] 📍 [ROUTING] "Performance Engineer, GPU" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:56:11.433Z] [BOT] ✅ Posted message: Performance Engineer, GPU @ anthropic in #💻・tech-jobs
[2026-01-30T05:56:11.433Z] [BOT] ✅ Industry: Performance Engineer, GPU @ anthropic
[2026-01-30T05:56:11.433Z] [BOT] 💾 Added channel posting: Performance Engineer, GPU @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 261 jobs in memory (cached)
[2026-01-30T05:56:11.438Z] [BOT] ✅ Loaded V2 database: 260 jobs
💾 DISK STATE: 260 jobs on disk
[2026-01-30T05:56:11.438Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=261
[2026-01-30T05:56:11.439Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:56:11.439Z] [BOT] 💾 AFTER MERGE: 261 jobs (merged disk + memory)
[2026-01-30T05:56:11.439Z] [BOT] ✅ No jobs to archive (all 261 jobs within 7-day window)
[2026-01-30T05:56:11.457Z] [BOT] 💾 Saved posted_jobs.json: 261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:12.959Z] [BOT] 📍 [ROUTING] "Product Designer, Claude Code " @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T05:56:13.133Z] [BOT] ✅ Posted message: Product Designer, Claude Code  @ anthropic in #💻・tech-jobs
[2026-01-30T05:56:13.133Z] [BOT] ✅ Industry: Product Designer, Claude Code  @ anthropic
[2026-01-30T05:56:13.133Z] [BOT] 💾 Added channel posting: Product Designer, Claude Code  @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 262 jobs in memory (cached)
[2026-01-30T05:56:13.139Z] [BOT] ✅ Loaded V2 database: 261 jobs
💾 DISK STATE: 261 jobs on disk
[2026-01-30T05:56:13.139Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=262
[2026-01-30T05:56:13.140Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:56:13.140Z] [BOT] 💾 AFTER MERGE: 262 jobs (merged disk + memory)
[2026-01-30T05:56:13.140Z] [BOT] ✅ No jobs to archive (all 262 jobs within 7-day window)
[2026-01-30T05:56:13.159Z] [BOT] 💾 Saved posted_jobs.json: 262 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:17.661Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-30T05:56:17.661Z] [BOT] 📍 [ROUTING] "Partner Solutions Architect, Applied AI" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T05:56:17.662Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T05:56:17.867Z] [BOT] ✅ Posted message: Partner Solutions Architect, Applied AI @ anthropic in #🤖・ai-jobs
  ✅ Industry: Partner Solutions Architect, Applied AI @ anthropic
[2026-01-30T05:56:17.867Z] [BOT] 💾 Added channel posting: Partner Solutions Architect, Applied AI @ anthropic → category channel (1 total channels)
[2026-01-30T05:56:17.867Z] [BOT] 💾 BEFORE MERGE: 263 jobs in memory (cached)
[2026-01-30T05:56:17.876Z] [BOT] ✅ Loaded V2 database: 262 jobs
[2026-01-30T05:56:17.876Z] [BOT] 💾 DISK STATE: 262 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=263
[2026-01-30T05:56:17.877Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:56:17.877Z] [BOT] 💾 AFTER MERGE: 263 jobs (merged disk + memory)
[2026-01-30T05:56:17.877Z] [BOT] ✅ No jobs to archive (all 263 jobs within 7-day window)
[2026-01-30T05:56:17.899Z] [BOT] 💾 Saved posted_jobs.json: 263 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:19.401Z] [BOT] 📍 [ROUTING] "Performance Engineer" @ anthropic
[2026-01-30T05:56:19.402Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T05:56:19.574Z] [BOT] ✅ Posted message: Performance Engineer @ anthropic in #🤖・ai-jobs
[2026-01-30T05:56:19.574Z] [BOT] ✅ Industry: Performance Engineer @ anthropic
[2026-01-30T05:56:19.574Z] [BOT] 💾 Added channel posting: Performance Engineer @ anthropic → category channel (1 total channels)
[2026-01-30T05:56:19.574Z] [BOT] 💾 BEFORE MERGE: 264 jobs in memory (cached)
[2026-01-30T05:56:19.580Z] [BOT] ✅ Loaded V2 database: 263 jobs
💾 DISK STATE: 263 jobs on disk
[2026-01-30T05:56:19.580Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=264
[2026-01-30T05:56:19.581Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:56:19.581Z] [BOT] 💾 AFTER MERGE: 264 jobs (merged disk + memory)
[2026-01-30T05:56:19.581Z] [BOT] ✅ No jobs to archive (all 264 jobs within 7-day window)
[2026-01-30T05:56:19.607Z] [BOT] 💾 Saved posted_jobs.json: 264 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:21.108Z] [BOT] 📍 [ROUTING] "Privacy Research Engineer, Safeguards" @ anthropic
[2026-01-30T05:56:21.109Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T05:56:21.271Z] [BOT] ✅ Posted message: Privacy Research Engineer, Safeguards @ anthropic in #🤖・ai-jobs
[2026-01-30T05:56:21.271Z] [BOT] ✅ Industry: Privacy Research Engineer, Safeguards @ anthropic
💾 Added channel posting: Privacy Research Engineer, Safeguards @ anthropic → category channel (1 total channels)
[2026-01-30T05:56:21.272Z] [BOT] 💾 BEFORE MERGE: 265 jobs in memory (cached)
[2026-01-30T05:56:21.280Z] [BOT] ✅ Loaded V2 database: 264 jobs
💾 DISK STATE: 264 jobs on disk
[2026-01-30T05:56:21.281Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=265
[2026-01-30T05:56:21.281Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 265 jobs (merged disk + memory)
[2026-01-30T05:56:21.281Z] [BOT] ✅ No jobs to archive (all 265 jobs within 7-day window)
[2026-01-30T05:56:21.299Z] [BOT] 💾 Saved posted_jobs.json: 265 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:22.801Z] [BOT] 📍 [ROUTING] "Product Counsel, Safety" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T05:56:22.943Z] [BOT] ✅ Posted message: Product Counsel, Safety @ anthropic in #🤖・ai-jobs
  ✅ Industry: Product Counsel, Safety @ anthropic
[2026-01-30T05:56:22.943Z] [BOT] 💾 Added channel posting: Product Counsel, Safety @ anthropic → category channel (1 total channels)
[2026-01-30T05:56:22.943Z] [BOT] 💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-30T05:56:22.949Z] [BOT] ✅ Loaded V2 database: 265 jobs
💾 DISK STATE: 265 jobs on disk
[2026-01-30T05:56:22.949Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-30T05:56:22.949Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-30T05:56:22.950Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-30T05:56:22.967Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:24.468Z] [BOT] 📍 [ROUTING] "Product Designer, Growth " @ anthropic
[2026-01-30T05:56:24.469Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T05:56:24.698Z] [BOT] ✅ Posted message: Product Designer, Growth  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Product Designer, Growth  @ anthropic
[2026-01-30T05:56:24.699Z] [BOT] 💾 Added channel posting: Product Designer, Growth  @ anthropic → category channel (1 total channels)
[2026-01-30T05:56:24.699Z] [BOT] 💾 BEFORE MERGE: 267 jobs in memory (cached)
[2026-01-30T05:56:24.705Z] [BOT] ✅ Loaded V2 database: 266 jobs
💾 DISK STATE: 266 jobs on disk
[2026-01-30T05:56:24.706Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=267
[2026-01-30T05:56:24.707Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 267 jobs (merged disk + memory)
[2026-01-30T05:56:24.707Z] [BOT] ✅ No jobs to archive (all 267 jobs within 7-day window)
[2026-01-30T05:56:24.728Z] [BOT] 💾 Saved posted_jobs.json: 267 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:26.229Z] [BOT] 📍 [ROUTING] "Product Support Specialist" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T05:56:26.458Z] [BOT] ✅ Posted message: Product Support Specialist @ anthropic in #🤖・ai-jobs
[2026-01-30T05:56:26.458Z] [BOT] ✅ Industry: Product Support Specialist @ anthropic
[2026-01-30T05:56:26.458Z] [BOT] 💾 Added channel posting: Product Support Specialist @ anthropic → category channel (1 total channels)
[2026-01-30T05:56:26.458Z] [BOT] 💾 BEFORE MERGE: 268 jobs in memory (cached)
[2026-01-30T05:56:26.466Z] [BOT] ✅ Loaded V2 database: 267 jobs
[2026-01-30T05:56:26.466Z] [BOT] 💾 DISK STATE: 267 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=268
[2026-01-30T05:56:26.467Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:56:26.467Z] [BOT] 💾 AFTER MERGE: 268 jobs (merged disk + memory)
[2026-01-30T05:56:26.467Z] [BOT] ✅ No jobs to archive (all 268 jobs within 7-day window)
[2026-01-30T05:56:26.484Z] [BOT] 💾 Saved posted_jobs.json: 268 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:27.986Z] [BOT] 📍 [ROUTING] "Recruiter, AI Research" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T05:56:27.986Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T05:56:28.169Z] [BOT] ✅ Posted message: Recruiter, AI Research @ anthropic in #🤖・ai-jobs
[2026-01-30T05:56:28.169Z] [BOT] ✅ Industry: Recruiter, AI Research @ anthropic
[2026-01-30T05:56:28.169Z] [BOT] 💾 Added channel posting: Recruiter, AI Research @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 269 jobs in memory (cached)
[2026-01-30T05:56:28.174Z] [BOT] ✅ Loaded V2 database: 268 jobs
💾 DISK STATE: 268 jobs on disk
[2026-01-30T05:56:28.175Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=269
[2026-01-30T05:56:28.175Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:56:28.175Z] [BOT] 💾 AFTER MERGE: 269 jobs (merged disk + memory)
[2026-01-30T05:56:28.176Z] [BOT] ✅ No jobs to archive (all 269 jobs within 7-day window)
[2026-01-30T05:56:28.194Z] [BOT] 💾 Saved posted_jobs.json: 269 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:32.696Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T05:56:32.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5a640b8a3a310c3b"
[2026-01-30T05:56:32.697Z] [BOT] ⏭️  Skipping duplicate: JID_58eb5063 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "fd6a4b52444c892e"
[2026-01-30T05:56:32.697Z] [BOT] ⏭️  Skipping duplicate: JID_d4f45886 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c571bf81a941896c"
⏭️  Skipping duplicate: JID_274d4691 (posted within 7 days)
[2026-01-30T05:56:32.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "05410870516d3aa7"
⏭️  Skipping duplicate: JID_68539aa3 (posted within 7 days)
[2026-01-30T05:56:32.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b13c71b4b3059c9b"
⏭️  Skipping duplicate: JID_b5558b07 (posted within 7 days)
[2026-01-30T05:56:32.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "41e3684ddf739146"
⏭️  Skipping duplicate: JID_1c275a12 (posted within 7 days)
[2026-01-30T05:56:32.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c5baa61829887d13"
⏭️  Skipping duplicate: JID_8071fa01 (posted within 7 days)
[2026-01-30T05:56:32.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "95a8305e2ea4ba78"
⏭️  Skipping duplicate: JID_7e6e2044 (posted within 7 days)
[2026-01-30T05:56:32.697Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b3aea4212ab87403"
⏭️  Skipping duplicate: JID_4e442941 (posted within 7 days)
[2026-01-30T05:56:32.698Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "fe7d43591d0217c0"
⏭️  Skipping duplicate: JID_83451021 (posted within 7 days)
[2026-01-30T05:56:32.805Z] [BOT] ✅ Loaded pending queue: 2913 total (2641 pending, 42 enriched, 230 posted)
[2026-01-30T05:56:32.996Z] [BOT] ✅ Saved pending queue: 2913 total (2641 pending, 32 enriched, 240 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T05:56:32.997Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T05:56:33.080Z] [BOT] 📂 Loaded 10321 existing routing entries
[2026-01-30T05:56:33.220Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T05:56:33.221Z] [BOT] New entries: 10
   Total entries: 10331
   Timestamp: 2026-01-30T05:56:33.178Z
[2026-01-30T05:56:33.221Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 21
[2026-01-30T05:56:33.221Z] [BOT] Successful: 11
   Failed: 0
   Skipped: 10
[2026-01-30T05:56:33.221Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 7 posts
     2. #💻・tech-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T05:56:33.222Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 269 jobs in memory (cached)
[2026-01-30T05:56:33.227Z] [BOT] ✅ Loaded V2 database: 269 jobs
[2026-01-30T05:56:33.227Z] [BOT] 💾 DISK STATE: 269 jobs on disk
[2026-01-30T05:56:33.227Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=269
[2026-01-30T05:56:33.228Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T05:56:33.228Z] [BOT] 💾 AFTER MERGE: 269 jobs (merged disk + memory)
[2026-01-30T05:56:33.228Z] [BOT] ✅ No jobs to archive (all 269 jobs within 7-day window)
[2026-01-30T05:56:33.246Z] [BOT] 💾 Saved posted_jobs.json: 269 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T05:56:33.247Z] [BOT] ✅ Database saved successfully
[2026-01-30T05:56:35.275Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2478) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*