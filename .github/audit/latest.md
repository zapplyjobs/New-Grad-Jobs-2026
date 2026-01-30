# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T08:17:29.412Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T08:16:55.004Z] ========================================
[2026-01-30T08:16:55.006Z] Discord Bot Execution Log
[2026-01-30T08:16:55.006Z] Environment: GitHub Actions
[2026-01-30T08:16:55.006Z] Node Version: v20.20.0
[2026-01-30T08:16:55.006Z] ========================================
[2026-01-30T08:16:55.006Z] Environment Variables Check:
[2026-01-30T08:16:55.006Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T08:16:55.006Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.006Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T08:16:55.007Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T08:16:55.007Z] 
Multi-Channel Configuration:
[2026-01-30T08:16:55.007Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.007Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.007Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.007Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.007Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.007Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.007Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.007Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.007Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T08:16:55.007Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T08:16:55.007Z] 
Data Files Check:
[2026-01-30T08:16:55.009Z] .github/data/new_jobs.json: ✅ Exists (10 items, 198327 bytes)
[2026-01-30T08:16:55.023Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2105698 bytes)
[2026-01-30T08:16:55.023Z] 
========================================
[2026-01-30T08:16:55.023Z] Starting Enhanced Discord Bot...
[2026-01-30T08:16:55.023Z] ========================================
[2026-01-30T08:16:55.488Z] [BOT] ✅ Loaded V2 database: 319 jobs
[2026-01-30T08:16:56.045Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T08:16:56.046Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T08:16:56.046Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T08:16:56.202Z] [BOT] ✅ Loaded pending queue: 2924 total (2584 pending, 50 enriched, 290 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T08:16:56.203Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T08:16:56.203Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T08:16:56.204Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T08:16:56.205Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T08:16:56.208Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-01-30T08:16:56.208Z] [BOT] 🚫 Skipping blacklisted job: Lead Counsel - Public Sector at datadog
[2026-01-30T08:16:56.208Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, National Technology Partners at brex
🚫 Skipping blacklisted job: Senior Accountant - NYC at datadog
[2026-01-30T08:16:56.209Z] [BOT] 🚫 Skipping blacklisted job: Ad Sales Lead at duolingo
[2026-01-30T08:16:56.209Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, New Subjects at duolingo
[2026-01-30T08:16:56.209Z] [BOT] 🚫 Skipping blacklisted job: Director of Performance Marketing at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Growth at duolingo
🚫 Skipping blacklisted job: Director of Product Management, Learning at duolingo
🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
🚫 Skipping blacklisted job: Product Marketing Manager, Duolingo Chess at duolingo
[2026-01-30T08:16:56.349Z] [BOT] ✅ Loaded pending queue: 2924 total (2584 pending, 50 enriched, 290 posted)
[2026-01-30T08:16:56.514Z] [BOT] ✅ Saved pending queue: 2913 total (2584 pending, 39 enriched, 290 posted)
🗑️ Removed 11 blacklisted jobs from pending queue
📋 After blacklist filter: 36 jobs (11 blacklisted)
[2026-01-30T08:16:56.514Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-30T08:16:56.515Z] [BOT] 📋 After multi-location grouping: 36 unique jobs to post
[2026-01-30T08:16:56.515Z] [BOT] ⏸️ Limiting to 10 jobs this run, 37 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T08:16:56.519Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T08:16:56.519Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (Federal Civilian)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T08:16:56.520Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T08:16:56.535Z] [BOT ERROR] (node:3394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T08:16:56.887Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (Federal Civilian) @ anthropic in #🤖・ai-jobs
[2026-01-30T08:16:56.887Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (Federal Civilian) @ anthropic
[2026-01-30T08:16:56.888Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (Federal Civilian) @ anthropic → category channel (1 total channels)
[2026-01-30T08:16:56.888Z] [BOT] 💾 BEFORE MERGE: 320 jobs in memory (cached)
[2026-01-30T08:16:56.897Z] [BOT] ✅ Loaded V2 database: 319 jobs
[2026-01-30T08:16:56.898Z] [BOT] 💾 DISK STATE: 319 jobs on disk
[2026-01-30T08:16:56.898Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=320
[2026-01-30T08:16:56.899Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:16:56.899Z] [BOT] 💾 AFTER MERGE: 320 jobs (merged disk + memory)
[2026-01-30T08:16:56.899Z] [BOT] ✅ No jobs to archive (all 320 jobs within 7-day window)
[2026-01-30T08:16:56.924Z] [BOT] 💾 Saved posted_jobs.json: 320 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:16:58.425Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (Industries)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T08:16:58.425Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T08:16:58.781Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (Industries) @ anthropic in #🤖・ai-jobs
[2026-01-30T08:16:58.781Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (Industries) @ anthropic
[2026-01-30T08:16:58.782Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (Industries) @ anthropic → category channel (1 total channels)
[2026-01-30T08:16:58.782Z] [BOT] 💾 BEFORE MERGE: 321 jobs in memory (cached)
[2026-01-30T08:16:58.793Z] [BOT] ✅ Loaded V2 database: 320 jobs
💾 DISK STATE: 320 jobs on disk
[2026-01-30T08:16:58.793Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=321
[2026-01-30T08:16:58.794Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:16:58.794Z] [BOT] 💾 AFTER MERGE: 321 jobs (merged disk + memory)
[2026-01-30T08:16:58.794Z] [BOT] ✅ No jobs to archive (all 321 jobs within 7-day window)
[2026-01-30T08:16:58.820Z] [BOT] 💾 Saved posted_jobs.json: 321 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:00.322Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (Startups)" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T08:17:00.518Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (Startups) @ anthropic in #🤖・ai-jobs
[2026-01-30T08:17:00.518Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (Startups) @ anthropic
[2026-01-30T08:17:00.519Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (Startups) @ anthropic → category channel (1 total channels)
[2026-01-30T08:17:00.519Z] [BOT] 💾 BEFORE MERGE: 322 jobs in memory (cached)
[2026-01-30T08:17:00.528Z] [BOT] ✅ Loaded V2 database: 321 jobs
💾 DISK STATE: 321 jobs on disk
[2026-01-30T08:17:00.528Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=322
[2026-01-30T08:17:00.529Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 322 jobs (merged disk + memory)
[2026-01-30T08:17:00.530Z] [BOT] ✅ No jobs to archive (all 322 jobs within 7-day window)
[2026-01-30T08:17:00.553Z] [BOT] 💾 Saved posted_jobs.json: 322 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:02.055Z] [BOT] 📍 [ROUTING] "Startup Partnerships " @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-30T08:17:02.055Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T08:17:02.484Z] [BOT] ✅ Posted message: Startup Partnerships  @ anthropic in #🤖・ai-jobs
[2026-01-30T08:17:02.484Z] [BOT] ✅ Industry: Startup Partnerships  @ anthropic
[2026-01-30T08:17:02.484Z] [BOT] 💾 Added channel posting: Startup Partnerships  @ anthropic → category channel (1 total channels)
[2026-01-30T08:17:02.484Z] [BOT] 💾 BEFORE MERGE: 323 jobs in memory (cached)
[2026-01-30T08:17:02.494Z] [BOT] ✅ Loaded V2 database: 322 jobs
💾 DISK STATE: 322 jobs on disk
[2026-01-30T08:17:02.494Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=323
[2026-01-30T08:17:02.495Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:17:02.495Z] [BOT] 💾 AFTER MERGE: 323 jobs (merged disk + memory)
[2026-01-30T08:17:02.495Z] [BOT] ✅ No jobs to archive (all 323 jobs within 7-day window)
[2026-01-30T08:17:02.519Z] [BOT] 💾 Saved posted_jobs.json: 323 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:07.022Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-30T08:17:07.023Z] [BOT] 📍 [ROUTING] "Startup Account Executive" @ anthropic
   Category: TECH (default)
[2026-01-30T08:17:07.023Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:17:07.435Z] [BOT] ✅ Posted message: Startup Account Executive @ anthropic in #💻・tech-jobs
[2026-01-30T08:17:07.436Z] [BOT] ✅ Industry: Startup Account Executive @ anthropic
[2026-01-30T08:17:07.436Z] [BOT] 💾 Added channel posting: Startup Account Executive @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 324 jobs in memory (cached)
[2026-01-30T08:17:07.449Z] [BOT] ✅ Loaded V2 database: 323 jobs
💾 DISK STATE: 323 jobs on disk
[2026-01-30T08:17:07.449Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=324
[2026-01-30T08:17:07.450Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 324 jobs (merged disk + memory)
[2026-01-30T08:17:07.450Z] [BOT] ✅ No jobs to archive (all 324 jobs within 7-day window)
[2026-01-30T08:17:07.476Z] [BOT] 💾 Saved posted_jobs.json: 324 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:08.977Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Industries" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:17:09.184Z] [BOT] ✅ Posted message: Strategic Account Executive, Industries @ anthropic in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive, Industries @ anthropic
[2026-01-30T08:17:09.184Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Industries @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 325 jobs in memory (cached)
[2026-01-30T08:17:09.194Z] [BOT] ✅ Loaded V2 database: 324 jobs
💾 DISK STATE: 324 jobs on disk
[2026-01-30T08:17:09.194Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=325
[2026-01-30T08:17:09.195Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 325 jobs (merged disk + memory)
[2026-01-30T08:17:09.195Z] [BOT] ✅ No jobs to archive (all 325 jobs within 7-day window)
[2026-01-30T08:17:09.224Z] [BOT] 💾 Saved posted_jobs.json: 325 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:10.725Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Insurance" @ anthropic
[2026-01-30T08:17:10.725Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:17:10.940Z] [BOT] ✅ Posted message: Strategic Account Executive, Insurance @ anthropic in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive, Insurance @ anthropic
[2026-01-30T08:17:10.940Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Insurance @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-30T08:17:10.950Z] [BOT] ✅ Loaded V2 database: 325 jobs
💾 DISK STATE: 325 jobs on disk
[2026-01-30T08:17:10.951Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-30T08:17:10.951Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:17:10.952Z] [BOT] 💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-30T08:17:10.952Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-30T08:17:10.976Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:12.776Z] [BOT] ✅ Posted message: Strategic Account Executive, Insurance @ anthropic in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T08:17:12.777Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Insurance @ anthropic → location channel (2 total channels)
💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-30T08:17:12.789Z] [BOT] ✅ Loaded V2 database: 326 jobs
💾 DISK STATE: 326 jobs on disk
[2026-01-30T08:17:12.789Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-30T08:17:12.789Z] [BOT] 🔀 Deep merged: Strategic Account Executive, Insurance @ anthropic (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T08:17:12.790Z] [BOT] 💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-30T08:17:12.790Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-30T08:17:12.817Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:14.318Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, LATAM Financial Services" @ anthropic
[2026-01-30T08:17:14.318Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:17:14.495Z] [BOT] ✅ Posted message: Strategic Account Executive, LATAM Financial Services @ anthropic in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive, LATAM Financial Services @ anthropic
[2026-01-30T08:17:14.495Z] [BOT] 💾 Added channel posting: Strategic Account Executive, LATAM Financial Services @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 327 jobs in memory (cached)
[2026-01-30T08:17:14.505Z] [BOT] ✅ Loaded V2 database: 326 jobs
💾 DISK STATE: 326 jobs on disk
[2026-01-30T08:17:14.505Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=327
[2026-01-30T08:17:14.506Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 327 jobs (merged disk + memory)
[2026-01-30T08:17:14.506Z] [BOT] ✅ No jobs to archive (all 327 jobs within 7-day window)
[2026-01-30T08:17:14.528Z] [BOT] 💾 Saved posted_jobs.json: 327 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:19.031Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T08:17:19.031Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Asset & Wealth Management" @ anthropic
[2026-01-30T08:17:19.032Z] [BOT] Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T08:17:19.361Z] [BOT] ✅ Posted message: Strategic Account Executive, Asset & Wealth Management @ anthropic in #💰・finance-jobs
[2026-01-30T08:17:19.361Z] [BOT] ✅ Industry: Strategic Account Executive, Asset & Wealth Management @ anthropic
[2026-01-30T08:17:19.361Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Asset & Wealth Management @ anthropic → category channel (1 total channels)
[2026-01-30T08:17:19.361Z] [BOT] 💾 BEFORE MERGE: 328 jobs in memory (cached)
[2026-01-30T08:17:19.371Z] [BOT] ✅ Loaded V2 database: 327 jobs
💾 DISK STATE: 327 jobs on disk
[2026-01-30T08:17:19.371Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=328
[2026-01-30T08:17:19.372Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 328 jobs (merged disk + memory)
[2026-01-30T08:17:19.372Z] [BOT] ✅ No jobs to archive (all 328 jobs within 7-day window)
[2026-01-30T08:17:19.398Z] [BOT] 💾 Saved posted_jobs.json: 328 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:20.900Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Investment Banking & Capital Markets" @ anthropic
[2026-01-30T08:17:20.900Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T08:17:21.083Z] [BOT] ✅ Posted message: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic in #💰・finance-jobs
  ✅ Industry: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic
[2026-01-30T08:17:21.083Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic → category channel (1 total channels)
[2026-01-30T08:17:21.083Z] [BOT] 💾 BEFORE MERGE: 329 jobs in memory (cached)
[2026-01-30T08:17:21.093Z] [BOT] ✅ Loaded V2 database: 328 jobs
💾 DISK STATE: 328 jobs on disk
[2026-01-30T08:17:21.093Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=329
[2026-01-30T08:17:21.094Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 329 jobs (merged disk + memory)
[2026-01-30T08:17:21.094Z] [BOT] ✅ No jobs to archive (all 329 jobs within 7-day window)
[2026-01-30T08:17:21.116Z] [BOT] 💾 Saved posted_jobs.json: 329 active jobs
[2026-01-30T08:17:21.117Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T08:17:25.619Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T08:17:25.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "a6cd7e71280b369b"
[2026-01-30T08:17:25.620Z] [BOT] ⏭️  Skipping duplicate: JID_c8436a0e (posted within 7 days)
[2026-01-30T08:17:25.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "677edbad742d0427"
[2026-01-30T08:17:25.620Z] [BOT] ⏭️  Skipping duplicate: JID_f05e0595 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "ffb55c48b71d94ae"
[2026-01-30T08:17:25.620Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
[2026-01-30T08:17:25.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "647f4ea2091c8cc7"
⏭️  Skipping duplicate: JID_240785c7 (posted within 7 days)
[2026-01-30T08:17:25.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "7a5a0148cb6e9e91"
⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
[2026-01-30T08:17:25.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "46f43076f51727e5"
[2026-01-30T08:17:25.620Z] [BOT] ⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
[2026-01-30T08:17:25.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "d972ca93153806b4"
[2026-01-30T08:17:25.620Z] [BOT] ⏭️  Skipping duplicate: JID_1636537d (posted within 7 days)
[2026-01-30T08:17:25.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b9ba2494d26b0a23"
⏭️  Skipping duplicate: JID_e13d0cd0 (posted within 7 days)
[2026-01-30T08:17:25.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "053f220477fc3721"
[2026-01-30T08:17:25.621Z] [BOT] ⏭️  Skipping duplicate: JID_36106029 (posted within 7 days)
[2026-01-30T08:17:25.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "07d2c3c8d9cec190"
⏭️  Skipping duplicate: JID_dd4e3939 (posted within 7 days)
[2026-01-30T08:17:25.766Z] [BOT] ✅ Loaded pending queue: 2913 total (2584 pending, 39 enriched, 290 posted)
[2026-01-30T08:17:25.942Z] [BOT] ✅ Saved pending queue: 2913 total (2584 pending, 29 enriched, 300 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T08:17:26.054Z] [BOT] 📂 Loaded 10381 existing routing entries
[2026-01-30T08:17:26.155Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10391
   Timestamp: 2026-01-30T08:17:26.118Z
[2026-01-30T08:17:26.156Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 25
   Successful: 11
[2026-01-30T08:17:26.156Z] [BOT] Failed: 0
   Skipped: 14
[2026-01-30T08:17:26.156Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
[2026-01-30T08:17:26.156Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T08:17:26.156Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T08:17:26.157Z] [BOT] 💾 BEFORE MERGE: 329 jobs in memory (cached)
[2026-01-30T08:17:26.167Z] [BOT] ✅ Loaded V2 database: 329 jobs
💾 DISK STATE: 329 jobs on disk
[2026-01-30T08:17:26.167Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=329
[2026-01-30T08:17:26.168Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 329 jobs (merged disk + memory)
[2026-01-30T08:17:26.168Z] [BOT] ✅ No jobs to archive (all 329 jobs within 7-day window)
[2026-01-30T08:17:26.192Z] [BOT] 💾 Saved posted_jobs.json: 329 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-30T08:17:28.214Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3394) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*