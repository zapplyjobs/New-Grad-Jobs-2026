# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T07:12:20.757Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T07:11:48.808Z] ========================================
[2026-01-30T07:11:48.809Z] Discord Bot Execution Log
[2026-01-30T07:11:48.809Z] Environment: GitHub Actions
[2026-01-30T07:11:48.810Z] Node Version: v20.20.0
[2026-01-30T07:11:48.810Z] ========================================
[2026-01-30T07:11:48.810Z] Environment Variables Check:
[2026-01-30T07:11:48.810Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T07:11:48.810Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.810Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T07:11:48.810Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T07:11:48.810Z] 
Multi-Channel Configuration:
[2026-01-30T07:11:48.810Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.810Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.811Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.811Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.811Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.811Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.811Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.811Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.811Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T07:11:48.811Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T07:11:48.811Z] 
Data Files Check:
[2026-01-30T07:11:48.812Z] .github/data/new_jobs.json: ✅ Exists (10 items, 195849 bytes)
[2026-01-30T07:11:48.824Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1872787 bytes)
[2026-01-30T07:11:48.824Z] 
========================================
[2026-01-30T07:11:48.824Z] Starting Enhanced Discord Bot...
[2026-01-30T07:11:48.824Z] ========================================
[2026-01-30T07:11:49.359Z] [BOT] ✅ Loaded V2 database: 289 jobs
[2026-01-30T07:11:49.874Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T07:11:49.875Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T07:11:49.875Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T07:11:49.996Z] [BOT] ✅ Loaded pending queue: 2921 total (2611 pending, 50 enriched, 260 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T07:11:49.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T07:11:49.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T07:11:50.001Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T07:11:50.001Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T07:11:50.002Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-01-30T07:11:50.003Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Claude Developer Platform (Full Stack) at anthropic
[2026-01-30T07:11:50.003Z] [BOT] 🚫 Skipping blacklisted job: Staff+ Software Engineer, Databases at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Data Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff+ Software Engineer, Infrastructure at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer, Platform at anthropic
[2026-01-30T07:11:50.108Z] [BOT] ✅ Loaded pending queue: 2921 total (2611 pending, 50 enriched, 260 posted)
[2026-01-30T07:11:50.277Z] [BOT] ✅ Saved pending queue: 2916 total (2611 pending, 45 enriched, 260 posted)
🗑️ Removed 5 blacklisted jobs from pending queue
[2026-01-30T07:11:50.278Z] [BOT] 📋 After blacklist filter: 42 jobs (5 blacklisted)
📋 After data quality filter: 42 jobs (0 invalid)
[2026-01-30T07:11:50.279Z] [BOT] 📋 After multi-location grouping: 42 unique jobs to post
[2026-01-30T07:11:50.279Z] [BOT] ⏸️ Limiting to 10 jobs this run, 37 deferred for next run
[2026-01-30T07:11:50.279Z] [BOT] 📤 Posting 10 jobs...
[2026-01-30T07:11:50.279Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T07:11:50.283Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-30T07:11:50.283Z] [BOT] 📍 [ROUTING] "Research Engineer, Universes" @ anthropic
[2026-01-30T07:11:50.283Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T07:11:50.301Z] [BOT ERROR] (node:2577) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T07:11:50.431Z] [BOT] ✅ Posted message: Research Engineer, Universes @ anthropic in #🤖・ai-jobs
[2026-01-30T07:11:50.431Z] [BOT] ✅ Industry: Research Engineer, Universes @ anthropic
[2026-01-30T07:11:50.432Z] [BOT] 💾 Added channel posting: Research Engineer, Universes @ anthropic → category channel (1 total channels)
[2026-01-30T07:11:50.432Z] [BOT] 💾 BEFORE MERGE: 290 jobs in memory (cached)
[2026-01-30T07:11:50.440Z] [BOT] ✅ Loaded V2 database: 289 jobs
💾 DISK STATE: 289 jobs on disk
[2026-01-30T07:11:50.440Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=290
[2026-01-30T07:11:50.441Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:11:50.441Z] [BOT] 💾 AFTER MERGE: 290 jobs (merged disk + memory)
[2026-01-30T07:11:50.441Z] [BOT] ✅ No jobs to archive (all 290 jobs within 7-day window)
[2026-01-30T07:11:50.465Z] [BOT] 💾 Saved posted_jobs.json: 290 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:11:51.968Z] [BOT] 📍 [ROUTING] "Research Scientist, Interpretability" @ anthropic
[2026-01-30T07:11:51.968Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T07:11:52.092Z] [BOT] ✅ Posted message: Research Scientist, Interpretability @ anthropic in #🤖・ai-jobs
[2026-01-30T07:11:52.092Z] [BOT] ✅ Industry: Research Scientist, Interpretability @ anthropic
[2026-01-30T07:11:52.092Z] [BOT] 💾 Added channel posting: Research Scientist, Interpretability @ anthropic → category channel (1 total channels)
[2026-01-30T07:11:52.092Z] [BOT] 💾 BEFORE MERGE: 291 jobs in memory (cached)
[2026-01-30T07:11:52.099Z] [BOT] ✅ Loaded V2 database: 290 jobs
[2026-01-30T07:11:52.099Z] [BOT] 💾 DISK STATE: 290 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=291
[2026-01-30T07:11:52.100Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:11:52.100Z] [BOT] 💾 AFTER MERGE: 291 jobs (merged disk + memory)
[2026-01-30T07:11:52.100Z] [BOT] ✅ No jobs to archive (all 291 jobs within 7-day window)
[2026-01-30T07:11:52.121Z] [BOT] 💾 Saved posted_jobs.json: 291 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:11:53.623Z] [BOT] 📍 [ROUTING] "Research Scientist, Societal Impacts" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T07:11:53.623Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-30T07:11:53.850Z] [BOT] ✅ Posted message: Research Scientist, Societal Impacts @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Scientist, Societal Impacts @ anthropic
[2026-01-30T07:11:53.850Z] [BOT] 💾 Added channel posting: Research Scientist, Societal Impacts @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 292 jobs in memory (cached)
[2026-01-30T07:11:53.857Z] [BOT] ✅ Loaded V2 database: 291 jobs
💾 DISK STATE: 291 jobs on disk
[2026-01-30T07:11:53.857Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=292
[2026-01-30T07:11:53.858Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 292 jobs (merged disk + memory)
[2026-01-30T07:11:53.858Z] [BOT] ✅ No jobs to archive (all 292 jobs within 7-day window)
[2026-01-30T07:11:53.876Z] [BOT] 💾 Saved posted_jobs.json: 292 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:11:55.378Z] [BOT] 📍 [ROUTING] "Security GRC Specialist, Public Sector" @ anthropic
[2026-01-30T07:11:55.378Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T07:11:55.551Z] [BOT] ✅ Posted message: Security GRC Specialist, Public Sector @ anthropic in #🤖・ai-jobs
[2026-01-30T07:11:55.551Z] [BOT] ✅ Industry: Security GRC Specialist, Public Sector @ anthropic
[2026-01-30T07:11:55.551Z] [BOT] 💾 Added channel posting: Security GRC Specialist, Public Sector @ anthropic → category channel (1 total channels)
[2026-01-30T07:11:55.552Z] [BOT] 💾 BEFORE MERGE: 293 jobs in memory (cached)
[2026-01-30T07:11:55.558Z] [BOT] ✅ Loaded V2 database: 292 jobs
💾 DISK STATE: 292 jobs on disk
[2026-01-30T07:11:55.558Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=293
[2026-01-30T07:11:55.559Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 293 jobs (merged disk + memory)
[2026-01-30T07:11:55.559Z] [BOT] ✅ No jobs to archive (all 293 jobs within 7-day window)
[2026-01-30T07:11:55.578Z] [BOT] 💾 Saved posted_jobs.json: 293 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:11:57.080Z] [BOT] 📍 [ROUTING] "Security Risk & Compliance, Cloud & Data Centers" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T07:11:57.279Z] [BOT] ✅ Posted message: Security Risk & Compliance, Cloud & Data Centers @ anthropic in #🤖・ai-jobs
  ✅ Industry: Security Risk & Compliance, Cloud & Data Centers @ anthropic
[2026-01-30T07:11:57.280Z] [BOT] 💾 Added channel posting: Security Risk & Compliance, Cloud & Data Centers @ anthropic → category channel (1 total channels)
[2026-01-30T07:11:57.280Z] [BOT] 💾 BEFORE MERGE: 294 jobs in memory (cached)
[2026-01-30T07:11:57.286Z] [BOT] ✅ Loaded V2 database: 293 jobs
💾 DISK STATE: 293 jobs on disk
[2026-01-30T07:11:57.286Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=294
[2026-01-30T07:11:57.287Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:11:57.287Z] [BOT] 💾 AFTER MERGE: 294 jobs (merged disk + memory)
[2026-01-30T07:11:57.287Z] [BOT] ✅ No jobs to archive (all 294 jobs within 7-day window)
[2026-01-30T07:11:57.305Z] [BOT] 💾 Saved posted_jobs.json: 294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:12:01.807Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T07:12:01.808Z] [BOT] 📍 [ROUTING] "Revenue Accounting" @ anthropic
[2026-01-30T07:12:01.808Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T07:12:02.174Z] [BOT] ✅ Posted message: Revenue Accounting @ anthropic in #💰・finance-jobs
[2026-01-30T07:12:02.174Z] [BOT] ✅ Industry: Revenue Accounting @ anthropic
[2026-01-30T07:12:02.174Z] [BOT] 💾 Added channel posting: Revenue Accounting @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 295 jobs in memory (cached)
[2026-01-30T07:12:02.184Z] [BOT] ✅ Loaded V2 database: 294 jobs
[2026-01-30T07:12:02.184Z] [BOT] 💾 DISK STATE: 294 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=295
[2026-01-30T07:12:02.185Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:12:02.185Z] [BOT] 💾 AFTER MERGE: 295 jobs (merged disk + memory)
[2026-01-30T07:12:02.185Z] [BOT] ✅ No jobs to archive (all 295 jobs within 7-day window)
[2026-01-30T07:12:02.210Z] [BOT] 💾 Saved posted_jobs.json: 295 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:12:03.711Z] [BOT] 📍 [ROUTING] "Revenue Systems Solution Architect" @ anthropic
[2026-01-30T07:12:03.712Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T07:12:03.858Z] [BOT] ✅ Posted message: Revenue Systems Solution Architect @ anthropic in #💰・finance-jobs
[2026-01-30T07:12:03.858Z] [BOT] ✅ Industry: Revenue Systems Solution Architect @ anthropic
[2026-01-30T07:12:03.858Z] [BOT] 💾 Added channel posting: Revenue Systems Solution Architect @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 296 jobs in memory (cached)
[2026-01-30T07:12:03.865Z] [BOT] ✅ Loaded V2 database: 295 jobs
💾 DISK STATE: 295 jobs on disk
[2026-01-30T07:12:03.865Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=296
[2026-01-30T07:12:03.866Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 296 jobs (merged disk + memory)
[2026-01-30T07:12:03.866Z] [BOT] ✅ No jobs to archive (all 296 jobs within 7-day window)
[2026-01-30T07:12:03.890Z] [BOT] 💾 Saved posted_jobs.json: 296 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:12:08.392Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T07:12:08.393Z] [BOT] 📍 [ROUTING] "Salesforce Administrator" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:12:08.792Z] [BOT] ✅ Posted message: Salesforce Administrator @ anthropic in #💻・tech-jobs
  ✅ Industry: Salesforce Administrator @ anthropic
[2026-01-30T07:12:08.792Z] [BOT] 💾 Added channel posting: Salesforce Administrator @ anthropic → category channel (1 total channels)
[2026-01-30T07:12:08.792Z] [BOT] 💾 BEFORE MERGE: 297 jobs in memory (cached)
[2026-01-30T07:12:08.798Z] [BOT] ✅ Loaded V2 database: 296 jobs
💾 DISK STATE: 296 jobs on disk
[2026-01-30T07:12:08.798Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=297
[2026-01-30T07:12:08.799Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 297 jobs (merged disk + memory)
[2026-01-30T07:12:08.800Z] [BOT] ✅ No jobs to archive (all 297 jobs within 7-day window)
[2026-01-30T07:12:08.820Z] [BOT] 💾 Saved posted_jobs.json: 297 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:12:10.322Z] [BOT] 📍 [ROUTING] "Security Development Project Specialist" @ anthropic
   Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:12:11.112Z] [BOT] ✅ Posted message: Security Development Project Specialist @ anthropic in #💻・tech-jobs
  ✅ Industry: Security Development Project Specialist @ anthropic
[2026-01-30T07:12:11.112Z] [BOT] 💾 Added channel posting: Security Development Project Specialist @ anthropic → category channel (1 total channels)
[2026-01-30T07:12:11.112Z] [BOT] 💾 BEFORE MERGE: 298 jobs in memory (cached)
[2026-01-30T07:12:11.121Z] [BOT] ✅ Loaded V2 database: 297 jobs
[2026-01-30T07:12:11.121Z] [BOT] 💾 DISK STATE: 297 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=298
[2026-01-30T07:12:11.122Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:12:11.122Z] [BOT] 💾 AFTER MERGE: 298 jobs (merged disk + memory)
[2026-01-30T07:12:11.122Z] [BOT] ✅ No jobs to archive (all 298 jobs within 7-day window)
[2026-01-30T07:12:11.144Z] [BOT] 💾 Saved posted_jobs.json: 298 active jobs
[2026-01-30T07:12:11.144Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T07:12:12.646Z] [BOT] 📍 [ROUTING] "Security Engineer, Detection & Response" @ anthropic
[2026-01-30T07:12:12.646Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T07:12:12.917Z] [BOT] ✅ Posted message: Security Engineer, Detection & Response @ anthropic in #💻・tech-jobs
[2026-01-30T07:12:12.918Z] [BOT] ✅ Industry: Security Engineer, Detection & Response @ anthropic
[2026-01-30T07:12:12.918Z] [BOT] 💾 Added channel posting: Security Engineer, Detection & Response @ anthropic → category channel (1 total channels)
[2026-01-30T07:12:12.918Z] [BOT] 💾 BEFORE MERGE: 299 jobs in memory (cached)
[2026-01-30T07:12:12.925Z] [BOT] ✅ Loaded V2 database: 298 jobs
💾 DISK STATE: 298 jobs on disk
[2026-01-30T07:12:12.925Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=299
[2026-01-30T07:12:12.926Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:12:12.926Z] [BOT] 💾 AFTER MERGE: 299 jobs (merged disk + memory)
[2026-01-30T07:12:12.926Z] [BOT] ✅ No jobs to archive (all 299 jobs within 7-day window)
[2026-01-30T07:12:12.945Z] [BOT] 💾 Saved posted_jobs.json: 299 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:12:17.449Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T07:12:17.449Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "da77145a42557323"
⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
[2026-01-30T07:12:17.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "89417b9de780efdc"
⏭️  Skipping duplicate: JID_15566316 (posted within 7 days)
[2026-01-30T07:12:17.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "7f8ff408df45e862"
⏭️  Skipping duplicate: JID_afefa6f3 (posted within 7 days)
[2026-01-30T07:12:17.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "f4f1b9747d6ab867"
⏭️  Skipping duplicate: JID_fb667c9c (posted within 7 days)
[2026-01-30T07:12:17.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8eb27e24dc28d39d"
⏭️  Skipping duplicate: JID_1fe49bb0 (posted within 7 days)
[2026-01-30T07:12:17.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "fab7d67cd083f061"
⏭️  Skipping duplicate: JID_bb39dd9d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "03acadb1d15e2927"
⏭️  Skipping duplicate: JID_68413eab (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b8032906f1679747"
⏭️  Skipping duplicate: JID_9c0c7605 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "aa53d77d5a39cc7c"
⏭️  Skipping duplicate: JID_16d85b73 (posted within 7 days)
[2026-01-30T07:12:17.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8d475ad93d2c410e"
⏭️  Skipping duplicate: JID_010358d4 (posted within 7 days)
[2026-01-30T07:12:17.562Z] [BOT] ✅ Loaded pending queue: 2916 total (2611 pending, 45 enriched, 260 posted)
[2026-01-30T07:12:17.750Z] [BOT] ✅ Saved pending queue: 2916 total (2611 pending, 35 enriched, 270 posted)
[2026-01-30T07:12:17.750Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T07:12:17.833Z] [BOT] 📂 Loaded 10351 existing routing entries
[2026-01-30T07:12:17.951Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10361
   Timestamp: 2026-01-30T07:12:17.909Z
[2026-01-30T07:12:17.951Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T07:12:17.951Z] [BOT] Total attempts: 18
   Successful: 10
   Failed: 0
   Skipped: 8
[2026-01-30T07:12:17.951Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T07:12:17.952Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-30T07:12:17.952Z] [BOT] 2. #💻・tech-jobs: 3 posts
     3. #💰・finance-jobs: 2 posts
[2026-01-30T07:12:17.952Z] [BOT] [STATS] Channel stats saved
[2026-01-30T07:12:17.952Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 299 jobs in memory (cached)
[2026-01-30T07:12:17.958Z] [BOT] ✅ Loaded V2 database: 299 jobs
💾 DISK STATE: 299 jobs on disk
[2026-01-30T07:12:17.959Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=299
[2026-01-30T07:12:17.960Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T07:12:17.960Z] [BOT] 💾 AFTER MERGE: 299 jobs (merged disk + memory)
✅ No jobs to archive (all 299 jobs within 7-day window)
[2026-01-30T07:12:17.980Z] [BOT] 💾 Saved posted_jobs.json: 299 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T07:12:17.980Z] [BOT] ✅ Database saved successfully
[2026-01-30T07:12:20.011Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2577) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*