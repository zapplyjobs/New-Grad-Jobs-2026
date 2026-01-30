# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T07:37:34.813Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T07:37:06.127Z] ========================================
[2026-01-30T07:37:06.129Z] Discord Bot Execution Log
[2026-01-30T07:37:06.129Z] Environment: GitHub Actions
[2026-01-30T07:37:06.129Z] Node Version: v20.20.0
[2026-01-30T07:37:06.130Z] ========================================
[2026-01-30T07:37:06.130Z] Environment Variables Check:
[2026-01-30T07:37:06.130Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T07:37:06.130Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.130Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T07:37:06.130Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T07:37:06.130Z] 
Multi-Channel Configuration:
[2026-01-30T07:37:06.130Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.130Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.130Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.131Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.131Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.131Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.131Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.131Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.131Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T07:37:06.131Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T07:37:06.131Z] 
Data Files Check:
[2026-01-30T07:37:06.132Z] .github/data/new_jobs.json: ✅ Exists (10 items, 178258 bytes)
[2026-01-30T07:37:06.145Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1953713 bytes)
[2026-01-30T07:37:06.145Z] 
========================================
[2026-01-30T07:37:06.145Z] Starting Enhanced Discord Bot...
[2026-01-30T07:37:06.145Z] ========================================
[2026-01-30T07:37:06.702Z] [BOT] ✅ Loaded V2 database: 299 jobs
[2026-01-30T07:37:07.386Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T07:37:07.387Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T07:37:07.387Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T07:37:07.506Z] [BOT] ✅ Loaded pending queue: 2923 total (2603 pending, 50 enriched, 270 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T07:37:07.509Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T07:37:07.510Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T07:37:07.511Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-01-30T07:37:07.512Z] [BOT] 🚫 Skipping blacklisted job:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-01-30T07:37:07.512Z] [BOT] 🚫 Skipping blacklisted job: Technical Policy Manager, Cyber Harms  at anthropic
🚫 Skipping blacklisted job: Technical Product Marketing Lead at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Claude Experiences at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Data Center Infrastructure at anthropic
[2026-01-30T07:37:07.512Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Enterprise Readiness at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Inference at anthropic
[2026-01-30T07:37:07.512Z] [BOT] 🚫 Skipping blacklisted job: Technical Program Manager, Launches at anthropic
🚫 Skipping blacklisted job: Technical Program Manager, Model Evaluations at anthropic
[2026-01-30T07:37:07.606Z] [BOT] ✅ Loaded pending queue: 2923 total (2603 pending, 50 enriched, 270 posted)
[2026-01-30T07:37:07.775Z] [BOT] ✅ Saved pending queue: 2914 total (2603 pending, 41 enriched, 270 posted)
🗑️ Removed 9 blacklisted jobs from pending queue
[2026-01-30T07:37:07.776Z] [BOT] 📋 After blacklist filter: 38 jobs (9 blacklisted)
📋 After data quality filter: 38 jobs (0 invalid)
[2026-01-30T07:37:07.777Z] [BOT] 📋 After multi-location grouping: 38 unique jobs to post
[2026-01-30T07:37:07.777Z] [BOT] ⏸️ Limiting to 10 jobs this run, 37 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T07:37:07.780Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-30T07:37:07.781Z] [BOT] 📍 [ROUTING] "SMB Account Executive, Industries" @ anthropic
[2026-01-30T07:37:07.781Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:37:07.798Z] [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T07:37:08.002Z] [BOT] ✅ Posted message: SMB Account Executive, Industries @ anthropic in #💻・tech-jobs
[2026-01-30T07:37:08.002Z] [BOT] ✅ Industry: SMB Account Executive, Industries @ anthropic
[2026-01-30T07:37:08.002Z] [BOT] 💾 Added channel posting: SMB Account Executive, Industries @ anthropic → category channel (1 total channels)
[2026-01-30T07:37:08.003Z] [BOT] 💾 BEFORE MERGE: 300 jobs in memory (cached)
[2026-01-30T07:37:08.010Z] [BOT] ✅ Loaded V2 database: 299 jobs
💾 DISK STATE: 299 jobs on disk
[2026-01-30T07:37:08.011Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=300
[2026-01-30T07:37:08.012Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:37:08.012Z] [BOT] 💾 AFTER MERGE: 300 jobs (merged disk + memory)
[2026-01-30T07:37:08.012Z] [BOT] ✅ No jobs to archive (all 300 jobs within 7-day window)
[2026-01-30T07:37:08.033Z] [BOT] 💾 Saved posted_jobs.json: 300 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:09.534Z] [BOT] 📍 [ROUTING] "Software Engineer, Android" @ anthropic
   Category: TECH (matched: "software")
[2026-01-30T07:37:09.534Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:37:09.691Z] [BOT] ✅ Posted message: Software Engineer, Android @ anthropic in #💻・tech-jobs
[2026-01-30T07:37:09.691Z] [BOT] ✅ Industry: Software Engineer, Android @ anthropic
[2026-01-30T07:37:09.691Z] [BOT] 💾 Added channel posting: Software Engineer, Android @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 301 jobs in memory (cached)
[2026-01-30T07:37:09.698Z] [BOT] ✅ Loaded V2 database: 300 jobs
[2026-01-30T07:37:09.698Z] [BOT] 💾 DISK STATE: 300 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=301
[2026-01-30T07:37:09.699Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:37:09.699Z] [BOT] 💾 AFTER MERGE: 301 jobs (merged disk + memory)
[2026-01-30T07:37:09.699Z] [BOT] ✅ No jobs to archive (all 301 jobs within 7-day window)
[2026-01-30T07:37:09.718Z] [BOT] 💾 Saved posted_jobs.json: 301 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:11.220Z] [BOT] 📍 [ROUTING] "Software Engineer, Business Technology " @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:37:11.534Z] [BOT] ✅ Posted message: Software Engineer, Business Technology  @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Business Technology  @ anthropic
[2026-01-30T07:37:11.534Z] [BOT] 💾 Added channel posting: Software Engineer, Business Technology  @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 302 jobs in memory (cached)
[2026-01-30T07:37:11.540Z] [BOT] ✅ Loaded V2 database: 301 jobs
💾 DISK STATE: 301 jobs on disk
[2026-01-30T07:37:11.541Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=302
[2026-01-30T07:37:11.541Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 302 jobs (merged disk + memory)
[2026-01-30T07:37:11.542Z] [BOT] ✅ No jobs to archive (all 302 jobs within 7-day window)
[2026-01-30T07:37:11.560Z] [BOT] 💾 Saved posted_jobs.json: 302 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:13.062Z] [BOT] 📍 [ROUTING] "Software Engineer, Cybersecurity Products" @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:37:13.273Z] [BOT] ✅ Posted message: Software Engineer, Cybersecurity Products @ anthropic in #💻・tech-jobs
[2026-01-30T07:37:13.274Z] [BOT] ✅ Industry: Software Engineer, Cybersecurity Products @ anthropic
[2026-01-30T07:37:13.274Z] [BOT] 💾 Added channel posting: Software Engineer, Cybersecurity Products @ anthropic → category channel (1 total channels)
[2026-01-30T07:37:13.274Z] [BOT] 💾 BEFORE MERGE: 303 jobs in memory (cached)
[2026-01-30T07:37:13.280Z] [BOT] ✅ Loaded V2 database: 302 jobs
💾 DISK STATE: 302 jobs on disk
[2026-01-30T07:37:13.280Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=303
[2026-01-30T07:37:13.281Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 303 jobs (merged disk + memory)
[2026-01-30T07:37:13.282Z] [BOT] ✅ No jobs to archive (all 303 jobs within 7-day window)
[2026-01-30T07:37:13.301Z] [BOT] 💾 Saved posted_jobs.json: 303 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:14.804Z] [BOT] 📍 [ROUTING] "Software Engineer, Desktop" @ anthropic
   Category: TECH (matched: "software")
[2026-01-30T07:37:14.804Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:37:15.125Z] [BOT] ✅ Posted message: Software Engineer, Desktop @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Desktop @ anthropic
[2026-01-30T07:37:15.126Z] [BOT] 💾 Added channel posting: Software Engineer, Desktop @ anthropic → category channel (1 total channels)
[2026-01-30T07:37:15.126Z] [BOT] 💾 BEFORE MERGE: 304 jobs in memory (cached)
[2026-01-30T07:37:15.132Z] [BOT] ✅ Loaded V2 database: 303 jobs
[2026-01-30T07:37:15.132Z] [BOT] 💾 DISK STATE: 303 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=304
[2026-01-30T07:37:15.133Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:37:15.133Z] [BOT] 💾 AFTER MERGE: 304 jobs (merged disk + memory)
[2026-01-30T07:37:15.133Z] [BOT] ✅ No jobs to archive (all 304 jobs within 7-day window)
[2026-01-30T07:37:15.152Z] [BOT] 💾 Saved posted_jobs.json: 304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:16.653Z] [BOT] 📍 [ROUTING] "Software Engineer, Enterprise Foundations" @ anthropic
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:37:16.827Z] [BOT] ✅ Posted message: Software Engineer, Enterprise Foundations @ anthropic in #💻・tech-jobs
  ✅ Industry: Software Engineer, Enterprise Foundations @ anthropic
[2026-01-30T07:37:16.827Z] [BOT] 💾 Added channel posting: Software Engineer, Enterprise Foundations @ anthropic → category channel (1 total channels)
[2026-01-30T07:37:16.827Z] [BOT] 💾 BEFORE MERGE: 305 jobs in memory (cached)
[2026-01-30T07:37:16.838Z] [BOT] ✅ Loaded V2 database: 304 jobs
💾 DISK STATE: 304 jobs on disk
[2026-01-30T07:37:16.838Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=305
[2026-01-30T07:37:16.839Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:37:16.839Z] [BOT] 💾 AFTER MERGE: 305 jobs (merged disk + memory)
[2026-01-30T07:37:16.839Z] [BOT] ✅ No jobs to archive (all 305 jobs within 7-day window)
[2026-01-30T07:37:16.864Z] [BOT] 💾 Saved posted_jobs.json: 305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:18.366Z] [BOT] 📍 [ROUTING] "Software Engineer, Growth" @ anthropic
[2026-01-30T07:37:18.366Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:37:18.627Z] [BOT] ✅ Posted message: Software Engineer, Growth @ anthropic in #💻・tech-jobs
[2026-01-30T07:37:18.627Z] [BOT] ✅ Industry: Software Engineer, Growth @ anthropic
[2026-01-30T07:37:18.627Z] [BOT] 💾 Added channel posting: Software Engineer, Growth @ anthropic → category channel (1 total channels)
[2026-01-30T07:37:18.628Z] [BOT] 💾 BEFORE MERGE: 306 jobs in memory (cached)
[2026-01-30T07:37:18.637Z] [BOT] ✅ Loaded V2 database: 305 jobs
💾 DISK STATE: 305 jobs on disk
[2026-01-30T07:37:18.638Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=306
[2026-01-30T07:37:18.638Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:37:18.639Z] [BOT] 💾 AFTER MERGE: 306 jobs (merged disk + memory)
[2026-01-30T07:37:18.639Z] [BOT] ✅ No jobs to archive (all 306 jobs within 7-day window)
[2026-01-30T07:37:18.663Z] [BOT] 💾 Saved posted_jobs.json: 306 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:23.165Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T07:37:23.166Z] [BOT] 📍 [ROUTING] "Software Engineer, Accelerator Build Infrastructure" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T07:37:23.166Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T07:37:23.467Z] [BOT] ✅ Posted message: Software Engineer, Accelerator Build Infrastructure @ anthropic in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Accelerator Build Infrastructure @ anthropic
[2026-01-30T07:37:23.468Z] [BOT] 💾 Added channel posting: Software Engineer, Accelerator Build Infrastructure @ anthropic → category channel (1 total channels)
[2026-01-30T07:37:23.468Z] [BOT] 💾 BEFORE MERGE: 307 jobs in memory (cached)
[2026-01-30T07:37:23.474Z] [BOT] ✅ Loaded V2 database: 306 jobs
💾 DISK STATE: 306 jobs on disk
[2026-01-30T07:37:23.474Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=307
[2026-01-30T07:37:23.475Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:37:23.475Z] [BOT] 💾 AFTER MERGE: 307 jobs (merged disk + memory)
[2026-01-30T07:37:23.475Z] [BOT] ✅ No jobs to archive (all 307 jobs within 7-day window)
[2026-01-30T07:37:23.501Z] [BOT] 💾 Saved posted_jobs.json: 307 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:25.003Z] [BOT] 📍 [ROUTING] "Software Engineer, Beneficial Deployments " @ anthropic
[2026-01-30T07:37:25.003Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T07:37:25.220Z] [BOT] ✅ Posted message: Software Engineer, Beneficial Deployments  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Beneficial Deployments  @ anthropic
[2026-01-30T07:37:25.220Z] [BOT] 💾 Added channel posting: Software Engineer, Beneficial Deployments  @ anthropic → category channel (1 total channels)
[2026-01-30T07:37:25.220Z] [BOT] 💾 BEFORE MERGE: 308 jobs in memory (cached)
[2026-01-30T07:37:25.226Z] [BOT] ✅ Loaded V2 database: 307 jobs
💾 DISK STATE: 307 jobs on disk
[2026-01-30T07:37:25.227Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=308
[2026-01-30T07:37:25.227Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 308 jobs (merged disk + memory)
[2026-01-30T07:37:25.228Z] [BOT] ✅ No jobs to archive (all 308 jobs within 7-day window)
[2026-01-30T07:37:25.248Z] [BOT] 💾 Saved posted_jobs.json: 308 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:26.749Z] [BOT] 📍 [ROUTING] "Software Engineer, Claude Code" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-30T07:37:26.749Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T07:37:26.899Z] [BOT] ✅ Posted message: Software Engineer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Claude Code @ anthropic
[2026-01-30T07:37:26.899Z] [BOT] 💾 Added channel posting: Software Engineer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-30T07:37:26.899Z] [BOT] 💾 BEFORE MERGE: 309 jobs in memory (cached)
[2026-01-30T07:37:26.909Z] [BOT] ✅ Loaded V2 database: 308 jobs
💾 DISK STATE: 308 jobs on disk
[2026-01-30T07:37:26.909Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=309
[2026-01-30T07:37:26.910Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 309 jobs (merged disk + memory)
[2026-01-30T07:37:26.910Z] [BOT] ✅ No jobs to archive (all 309 jobs within 7-day window)
[2026-01-30T07:37:26.932Z] [BOT] 💾 Saved posted_jobs.json: 309 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:31.434Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T07:37:31.435Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "65247f255e58e861"
[2026-01-30T07:37:31.435Z] [BOT] ⏭️  Skipping duplicate: JID_b288fb7c (posted within 7 days)
[2026-01-30T07:37:31.435Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "0c7f3536ccaf363a"
⏭️  Skipping duplicate: JID_00920064 (posted within 7 days)
[2026-01-30T07:37:31.435Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "125235fa0abea4a8"
⏭️  Skipping duplicate: JID_18e6eb79 (posted within 7 days)
[2026-01-30T07:37:31.435Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "be111ba6129c4499"
⏭️  Skipping duplicate: JID_691589b6 (posted within 7 days)
[2026-01-30T07:37:31.435Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "72c7bee82e538211"
⏭️  Skipping duplicate: JID_d0f6433e (posted within 7 days)
[2026-01-30T07:37:31.435Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "bc9f8c873b8eeb30"
[2026-01-30T07:37:31.436Z] [BOT] ⏭️  Skipping duplicate: JID_310f7e64 (posted within 7 days)
[2026-01-30T07:37:31.436Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c43756794b7b2d2a"
⏭️  Skipping duplicate: JID_39398126 (posted within 7 days)
[2026-01-30T07:37:31.436Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8ec469206490f432"
⏭️  Skipping duplicate: JID_d04e5201 (posted within 7 days)
[2026-01-30T07:37:31.436Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "61b2797cd8b2d4c2"
⏭️  Skipping duplicate: JID_7b2bffcb (posted within 7 days)
[2026-01-30T07:37:31.436Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "165dd31fcb366e2b"
[2026-01-30T07:37:31.436Z] [BOT] ⏭️  Skipping duplicate: JID_f718e68a (posted within 7 days)
[2026-01-30T07:37:31.540Z] [BOT] ✅ Loaded pending queue: 2914 total (2603 pending, 41 enriched, 270 posted)
[2026-01-30T07:37:31.731Z] [BOT] ✅ Saved pending queue: 2914 total (2603 pending, 31 enriched, 280 posted)
[2026-01-30T07:37:31.731Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T07:37:31.814Z] [BOT] 📂 Loaded 10361 existing routing entries
[2026-01-30T07:37:31.931Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T07:37:31.931Z] [BOT] Total entries: 10371
   Timestamp: 2026-01-30T07:37:31.890Z
[2026-01-30T07:37:31.932Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 22
[2026-01-30T07:37:31.932Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 12
[2026-01-30T07:37:31.932Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
[2026-01-30T07:37:31.932Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-30T07:37:31.932Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 309 jobs in memory (cached)
[2026-01-30T07:37:31.939Z] [BOT] ✅ Loaded V2 database: 309 jobs
💾 DISK STATE: 309 jobs on disk
[2026-01-30T07:37:31.939Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=309
[2026-01-30T07:37:31.940Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 309 jobs (merged disk + memory)
[2026-01-30T07:37:31.940Z] [BOT] ✅ No jobs to archive (all 309 jobs within 7-day window)
[2026-01-30T07:37:31.960Z] [BOT] 💾 Saved posted_jobs.json: 309 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:37:31.960Z] [BOT] ✅ Database saved successfully
[2026-01-30T07:37:33.992Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*