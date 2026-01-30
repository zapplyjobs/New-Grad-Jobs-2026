# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T06:40:48.136Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T06:40:20.338Z] ========================================
[2026-01-30T06:40:20.340Z] Discord Bot Execution Log
[2026-01-30T06:40:20.340Z] Environment: GitHub Actions
[2026-01-30T06:40:20.340Z] Node Version: v20.20.0
[2026-01-30T06:40:20.340Z] ========================================
[2026-01-30T06:40:20.341Z] Environment Variables Check:
[2026-01-30T06:40:20.341Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T06:40:20.341Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.341Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T06:40:20.341Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T06:40:20.341Z] 
Multi-Channel Configuration:
[2026-01-30T06:40:20.341Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.341Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.341Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.341Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.342Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.342Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.342Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.342Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.342Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T06:40:20.342Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T06:40:20.342Z] 
Data Files Check:
[2026-01-30T06:40:20.343Z] .github/data/new_jobs.json: ✅ Exists (10 items, 193236 bytes)
[2026-01-30T06:40:20.356Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1789998 bytes)
[2026-01-30T06:40:20.356Z] 
========================================
[2026-01-30T06:40:20.356Z] Starting Enhanced Discord Bot...
[2026-01-30T06:40:20.356Z] ========================================
[2026-01-30T06:40:20.881Z] [BOT] ✅ Loaded V2 database: 279 jobs
[2026-01-30T06:40:21.395Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T06:40:21.395Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T06:40:21.396Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T06:40:21.523Z] [BOT] ✅ Loaded pending queue: 2921 total (2621 pending, 50 enriched, 250 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T06:40:21.523Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T06:40:21.527Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T06:40:21.528Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T06:40:21.528Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-01-30T06:40:21.528Z] [BOT] 🚫 Skipping blacklisted job: Staff Infrastructure Engineer, Pre-training at anthropic
[2026-01-30T06:40:21.529Z] [BOT] 🚫 Skipping blacklisted job: Staff Machine Learning Engineer, Virtual Collaborator at anthropic
🚫 Skipping blacklisted job: Staff Research Engineer, Discovery Team at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Backend) at anthropic
[2026-01-30T06:40:21.648Z] [BOT] ✅ Loaded pending queue: 2921 total (2621 pending, 50 enriched, 250 posted)
[2026-01-30T06:40:21.823Z] [BOT] ✅ Saved pending queue: 2917 total (2621 pending, 46 enriched, 250 posted)
🗑️ Removed 4 blacklisted jobs from pending queue
[2026-01-30T06:40:21.823Z] [BOT] 📋 After blacklist filter: 43 jobs (4 blacklisted)
📋 After data quality filter: 43 jobs (0 invalid)
[2026-01-30T06:40:21.824Z] [BOT] 📋 After multi-location grouping: 43 unique jobs to post
[2026-01-30T06:40:21.825Z] [BOT] ⏸️ Limiting to 10 jobs this run, 37 deferred for next run
📤 Posting 10 jobs...
[2026-01-30T06:40:21.825Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T06:40:21.827Z] [BOT] 📌 Posting 9 jobs to #🤖・ai-jobs
[2026-01-30T06:40:21.828Z] [BOT] 📍 [ROUTING] "Research Engineer, Pre-training" @ anthropic
[2026-01-30T06:40:21.828Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:40:21.846Z] [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T06:40:22.065Z] [BOT] ✅ Posted message: Research Engineer, Pre-training @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Pre-training @ anthropic
[2026-01-30T06:40:22.066Z] [BOT] 💾 Added channel posting: Research Engineer, Pre-training @ anthropic → category channel (1 total channels)
[2026-01-30T06:40:22.066Z] [BOT] 💾 BEFORE MERGE: 280 jobs in memory (cached)
[2026-01-30T06:40:22.074Z] [BOT] ✅ Loaded V2 database: 279 jobs
💾 DISK STATE: 279 jobs on disk
[2026-01-30T06:40:22.074Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=280
[2026-01-30T06:40:22.075Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:40:22.076Z] [BOT] 💾 AFTER MERGE: 280 jobs (merged disk + memory)
[2026-01-30T06:40:22.076Z] [BOT] ✅ No jobs to archive (all 280 jobs within 7-day window)
[2026-01-30T06:40:22.100Z] [BOT] 💾 Saved posted_jobs.json: 280 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:23.603Z] [BOT] 📍 [ROUTING] "Research Engineer, Pretraining Scaling" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T06:40:23.603Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:40:23.874Z] [BOT] ✅ Posted message: Research Engineer, Pretraining Scaling @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Pretraining Scaling @ anthropic
[2026-01-30T06:40:23.874Z] [BOT] 💾 Added channel posting: Research Engineer, Pretraining Scaling @ anthropic → category channel (1 total channels)
[2026-01-30T06:40:23.874Z] [BOT] 💾 BEFORE MERGE: 281 jobs in memory (cached)
[2026-01-30T06:40:23.882Z] [BOT] ✅ Loaded V2 database: 280 jobs
💾 DISK STATE: 280 jobs on disk
[2026-01-30T06:40:23.882Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=281
[2026-01-30T06:40:23.882Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 281 jobs (merged disk + memory)
[2026-01-30T06:40:23.883Z] [BOT] ✅ No jobs to archive (all 281 jobs within 7-day window)
[2026-01-30T06:40:23.902Z] [BOT] 💾 Saved posted_jobs.json: 281 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:25.403Z] [BOT] 📍 [ROUTING] "Research Engineer, Production Model Post Training" @ anthropic
[2026-01-30T06:40:25.404Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:40:25.523Z] [BOT] ✅ Posted message: Research Engineer, Production Model Post Training @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Production Model Post Training @ anthropic
[2026-01-30T06:40:25.523Z] [BOT] 💾 Added channel posting: Research Engineer, Production Model Post Training @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 282 jobs in memory (cached)
[2026-01-30T06:40:25.529Z] [BOT] ✅ Loaded V2 database: 281 jobs
💾 DISK STATE: 281 jobs on disk
[2026-01-30T06:40:25.529Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=282
[2026-01-30T06:40:25.530Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 282 jobs (merged disk + memory)
[2026-01-30T06:40:25.530Z] [BOT] ✅ No jobs to archive (all 282 jobs within 7-day window)
[2026-01-30T06:40:25.547Z] [BOT] 💾 Saved posted_jobs.json: 282 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:27.049Z] [BOT] 📍 [ROUTING] "Research Engineer/Research Scientist, Audio" @ anthropic
   Category: AI (matched: "AI/ML")
[2026-01-30T06:40:27.049Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:40:27.204Z] [BOT] ✅ Posted message: Research Engineer/Research Scientist, Audio @ anthropic in #🤖・ai-jobs
[2026-01-30T06:40:27.205Z] [BOT] ✅ Industry: Research Engineer/Research Scientist, Audio @ anthropic
[2026-01-30T06:40:27.205Z] [BOT] 💾 Added channel posting: Research Engineer/Research Scientist, Audio @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 283 jobs in memory (cached)
[2026-01-30T06:40:27.211Z] [BOT] ✅ Loaded V2 database: 282 jobs
💾 DISK STATE: 282 jobs on disk
[2026-01-30T06:40:27.211Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=283
[2026-01-30T06:40:27.212Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:40:27.212Z] [BOT] 💾 AFTER MERGE: 283 jobs (merged disk + memory)
[2026-01-30T06:40:27.212Z] [BOT] ✅ No jobs to archive (all 283 jobs within 7-day window)
[2026-01-30T06:40:27.230Z] [BOT] 💾 Saved posted_jobs.json: 283 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:28.732Z] [BOT] 📍 [ROUTING] "Research Engineer / Research Scientist, Biology & Life Sciences" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:40:28.957Z] [BOT] ✅ Posted message: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic
[2026-01-30T06:40:28.957Z] [BOT] 💾 Added channel posting: Research Engineer / Research Scientist, Biology & Life Sciences @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 284 jobs in memory (cached)
[2026-01-30T06:40:28.967Z] [BOT] ✅ Loaded V2 database: 283 jobs
💾 DISK STATE: 283 jobs on disk
[2026-01-30T06:40:28.967Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=284
[2026-01-30T06:40:28.967Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:40:28.968Z] [BOT] 💾 AFTER MERGE: 284 jobs (merged disk + memory)
[2026-01-30T06:40:28.968Z] [BOT] ✅ No jobs to archive (all 284 jobs within 7-day window)
[2026-01-30T06:40:28.985Z] [BOT] 💾 Saved posted_jobs.json: 284 active jobs
[2026-01-30T06:40:28.985Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:30.488Z] [BOT] 📍 [ROUTING] "Research Engineer / Research Scientist, Vision" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T06:40:30.488Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:40:30.643Z] [BOT] ✅ Posted message: Research Engineer / Research Scientist, Vision @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer / Research Scientist, Vision @ anthropic
[2026-01-30T06:40:30.643Z] [BOT] 💾 Added channel posting: Research Engineer / Research Scientist, Vision @ anthropic → category channel (1 total channels)
[2026-01-30T06:40:30.643Z] [BOT] 💾 BEFORE MERGE: 285 jobs in memory (cached)
[2026-01-30T06:40:30.653Z] [BOT] ✅ Loaded V2 database: 284 jobs
💾 DISK STATE: 284 jobs on disk
[2026-01-30T06:40:30.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=285
[2026-01-30T06:40:30.654Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 285 jobs (merged disk + memory)
[2026-01-30T06:40:30.654Z] [BOT] ✅ No jobs to archive (all 285 jobs within 7-day window)
[2026-01-30T06:40:30.677Z] [BOT] 💾 Saved posted_jobs.json: 285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:32.180Z] [BOT] 📍 [ROUTING] "Research Engineer, Reward Models Training" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T06:40:32.180Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:40:32.306Z] [BOT] ✅ Posted message: Research Engineer, Reward Models Training @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Reward Models Training @ anthropic
[2026-01-30T06:40:32.306Z] [BOT] 💾 Added channel posting: Research Engineer, Reward Models Training @ anthropic → category channel (1 total channels)
[2026-01-30T06:40:32.306Z] [BOT] 💾 BEFORE MERGE: 286 jobs in memory (cached)
[2026-01-30T06:40:32.312Z] [BOT] ✅ Loaded V2 database: 285 jobs
💾 DISK STATE: 285 jobs on disk
[2026-01-30T06:40:32.312Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=286
[2026-01-30T06:40:32.313Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 286 jobs (merged disk + memory)
[2026-01-30T06:40:32.313Z] [BOT] ✅ No jobs to archive (all 286 jobs within 7-day window)
[2026-01-30T06:40:32.336Z] [BOT] 💾 Saved posted_jobs.json: 286 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:33.838Z] [BOT] 📍 [ROUTING] "Research Engineer / Scientist, Alignment Science" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T06:40:33.838Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:40:34.003Z] [BOT] ✅ Posted message: Research Engineer / Scientist, Alignment Science @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Engineer / Scientist, Alignment Science @ anthropic
[2026-01-30T06:40:34.004Z] [BOT] 💾 Added channel posting: Research Engineer / Scientist, Alignment Science @ anthropic → category channel (1 total channels)
[2026-01-30T06:40:34.004Z] [BOT] 💾 BEFORE MERGE: 287 jobs in memory (cached)
[2026-01-30T06:40:34.011Z] [BOT] ✅ Loaded V2 database: 286 jobs
💾 DISK STATE: 286 jobs on disk
[2026-01-30T06:40:34.011Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=287
[2026-01-30T06:40:34.011Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 287 jobs (merged disk + memory)
[2026-01-30T06:40:34.012Z] [BOT] ✅ No jobs to archive (all 287 jobs within 7-day window)
[2026-01-30T06:40:34.030Z] [BOT] 💾 Saved posted_jobs.json: 287 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:35.533Z] [BOT] 📍 [ROUTING] "Research Engineer / Scientist, Frontier Red Team (Cyber)" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T06:40:35.533Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T06:40:35.645Z] [BOT] ✅ Posted message: Research Engineer / Scientist, Frontier Red Team (Cyber) @ anthropic in #🤖・ai-jobs
[2026-01-30T06:40:35.645Z] [BOT] ✅ Industry: Research Engineer / Scientist, Frontier Red Team (Cyber) @ anthropic
[2026-01-30T06:40:35.646Z] [BOT] 💾 Added channel posting: Research Engineer / Scientist, Frontier Red Team (Cyber) @ anthropic → category channel (1 total channels)
[2026-01-30T06:40:35.646Z] [BOT] 💾 BEFORE MERGE: 288 jobs in memory (cached)
[2026-01-30T06:40:35.653Z] [BOT] ✅ Loaded V2 database: 287 jobs
💾 DISK STATE: 287 jobs on disk
[2026-01-30T06:40:35.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=288
[2026-01-30T06:40:35.654Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T06:40:35.654Z] [BOT] 💾 AFTER MERGE: 288 jobs (merged disk + memory)
[2026-01-30T06:40:35.655Z] [BOT] ✅ No jobs to archive (all 288 jobs within 7-day window)
[2026-01-30T06:40:35.677Z] [BOT] 💾 Saved posted_jobs.json: 288 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:40.178Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-30T06:40:40.179Z] [BOT] 📍 [ROUTING] "Research Engineer, Reward Models Platform" @ anthropic
[2026-01-30T06:40:40.179Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T06:40:40.367Z] [BOT] ✅ Posted message: Research Engineer, Reward Models Platform @ anthropic in #💻・tech-jobs
[2026-01-30T06:40:40.368Z] [BOT] ✅ Industry: Research Engineer, Reward Models Platform @ anthropic
[2026-01-30T06:40:40.368Z] [BOT] 💾 Added channel posting: Research Engineer, Reward Models Platform @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 289 jobs in memory (cached)
[2026-01-30T06:40:40.375Z] [BOT] ✅ Loaded V2 database: 288 jobs
💾 DISK STATE: 288 jobs on disk
[2026-01-30T06:40:40.375Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=289
[2026-01-30T06:40:40.376Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 289 jobs (merged disk + memory)
[2026-01-30T06:40:40.376Z] [BOT] ✅ No jobs to archive (all 289 jobs within 7-day window)
[2026-01-30T06:40:40.395Z] [BOT] 💾 Saved posted_jobs.json: 289 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:44.897Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T06:40:44.898Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "12f59dd48b23600e"
⏭️  Skipping duplicate: JID_f9915154 (posted within 7 days)
[2026-01-30T06:40:44.898Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "7eacfa794bd5e611"
⏭️  Skipping duplicate: JID_da743159 (posted within 7 days)
[2026-01-30T06:40:44.898Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "170e8aa99b9e4dcb"
⏭️  Skipping duplicate: JID_3d74887a (posted within 7 days)
[2026-01-30T06:40:44.898Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-01-30T06:40:44.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "7a711c0d97a9b4dd"
⏭️  Skipping duplicate: JID_19245b78 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "85be46524b61d1d7"
⏭️  Skipping duplicate: JID_86a56bd5 (posted within 7 days)
[2026-01-30T06:40:44.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "6b4889d418262a96"
[2026-01-30T06:40:44.899Z] [BOT] ⏭️  Skipping duplicate: JID_ed8a4c29 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f076b82c6cb0fb6c"
⏭️  Skipping duplicate: JID_aa3e041f (posted within 7 days)
[2026-01-30T06:40:44.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f51ba5b866634910"
⏭️  Skipping duplicate: JID_1dd0224e (posted within 7 days)
[2026-01-30T06:40:44.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "6b243261a4e760b8"
[2026-01-30T06:40:44.899Z] [BOT] ⏭️  Skipping duplicate: JID_491b8479 (posted within 7 days)
[2026-01-30T06:40:45.032Z] [BOT] ✅ Loaded pending queue: 2917 total (2621 pending, 46 enriched, 250 posted)
[2026-01-30T06:40:45.200Z] [BOT] ✅ Saved pending queue: 2917 total (2621 pending, 36 enriched, 260 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T06:40:45.284Z] [BOT] 📂 Loaded 10341 existing routing entries
[2026-01-30T06:40:45.403Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10351
   Timestamp: 2026-01-30T06:40:45.360Z
[2026-01-30T06:40:45.403Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T06:40:45.404Z] [BOT] Total attempts: 17
   Successful: 10
   Failed: 0
   Skipped: 7
[2026-01-30T06:40:45.404Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 9 posts
     2. #💻・tech-jobs: 1 posts
[2026-01-30T06:40:45.404Z] [BOT] [STATS] Channel stats saved
[2026-01-30T06:40:45.404Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 289 jobs in memory (cached)
[2026-01-30T06:40:45.410Z] [BOT] ✅ Loaded V2 database: 289 jobs
[2026-01-30T06:40:45.410Z] [BOT] 💾 DISK STATE: 289 jobs on disk
[2026-01-30T06:40:45.411Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=289
[2026-01-30T06:40:45.411Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 289 jobs (merged disk + memory)
[2026-01-30T06:40:45.412Z] [BOT] ✅ No jobs to archive (all 289 jobs within 7-day window)
[2026-01-30T06:40:45.432Z] [BOT] 💾 Saved posted_jobs.json: 289 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T06:40:45.432Z] [BOT] ✅ Database saved successfully
[2026-01-30T06:40:47.460Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*