# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T07:13:32.762Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T07:13:01.869Z] ========================================
[2026-01-25T07:13:01.871Z] Discord Bot Execution Log
[2026-01-25T07:13:01.871Z] Environment: GitHub Actions
[2026-01-25T07:13:01.871Z] Node Version: v20.20.0
[2026-01-25T07:13:01.871Z] ========================================
[2026-01-25T07:13:01.872Z] Environment Variables Check:
[2026-01-25T07:13:01.872Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T07:13:01.872Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.872Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T07:13:01.872Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T07:13:01.872Z] 
Multi-Channel Configuration:
[2026-01-25T07:13:01.872Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.872Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.872Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.872Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.872Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.873Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.873Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.873Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.873Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T07:13:01.873Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T07:13:01.873Z] 
Data Files Check:
[2026-01-25T07:13:01.874Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T07:13:01.879Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 622440 bytes)
[2026-01-25T07:13:01.879Z] 
========================================
[2026-01-25T07:13:01.879Z] Starting Enhanced Discord Bot...
[2026-01-25T07:13:01.879Z] ========================================
[2026-01-25T07:13:02.405Z] [BOT] ✅ Loaded V2 database: 1092 jobs
[2026-01-25T07:13:02.918Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T07:13:02.918Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T07:13:02.919Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T07:13:03.033Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T07:13:03.037Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T07:13:03.038Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T07:13:03.038Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T07:13:03.039Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T07:13:03.039Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T07:13:03.039Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T07:13:03.042Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T07:13:03.043Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T07:13:03.043Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:13:03.044Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:03.060Z] [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T07:13:03.358Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T07:13:03.358Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T07:13:03.359Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T07:13:03.359Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T07:13:03.363Z] [BOT] ✅ Loaded V2 database: 1092 jobs
[2026-01-25T07:13:03.363Z] [BOT] 💾 DISK STATE: 1092 jobs on disk
[2026-01-25T07:13:03.363Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T07:13:03.366Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:03.366Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T07:13:03.367Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T07:13:03.375Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-25T07:13:03.375Z] [BOT] ✅ Archiving complete: 6 archived, 1086 active
[2026-01-25T07:13:03.386Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
[2026-01-25T07:13:03.386Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:04.889Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:13:04.889Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:05.072Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T07:13:05.073Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T07:13:05.073Z] [BOT] 💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:13:05.076Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:13:05.076Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:13:05.077Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:13:05.079Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:05.079Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:13:05.079Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-25T07:13:05.087Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
[2026-01-25T07:13:05.087Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:06.587Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:13:06.588Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:06.770Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T07:13:06.771Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:13:06.774Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:13:06.775Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:13:06.775Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:13:06.777Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:06.777Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:13:06.778Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-25T07:13:06.785Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
[2026-01-25T07:13:06.785Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:08.286Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:13:08.287Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:08.524Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T07:13:08.524Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T07:13:08.525Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T07:13:08.525Z] [BOT] 💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:13:08.528Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:13:08.528Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:13:08.528Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:13:08.530Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:08.531Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:13:08.531Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-25T07:13:08.540Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:13.042Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T07:13:13.043Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T07:13:13.043Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:13:13.043Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:13.293Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T07:13:13.294Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:13:13.298Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:13:13.298Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:13:13.299Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:13:13.301Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:13.302Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:13:13.302Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-25T07:13:13.312Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:14.813Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T07:13:14.813Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:13:14.813Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:15.229Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T07:13:15.230Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T07:13:15.230Z] [BOT] 💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:13:15.233Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:13:15.233Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:13:15.234Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:13:15.236Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:15.236Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:13:15.237Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-25T07:13:15.246Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
[2026-01-25T07:13:15.246Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:16.747Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T07:13:16.747Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:13:16.747Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:16.926Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T07:13:16.926Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T07:13:16.926Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T07:13:16.926Z] [BOT] 💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:13:16.930Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:13:16.930Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:13:16.930Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:13:16.933Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:16.933Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:13:16.934Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-25T07:13:16.942Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:18.444Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T07:13:18.444Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:13:18.444Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:18.625Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T07:13:18.626Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T07:13:18.626Z] [BOT] 💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:13:18.629Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:13:18.629Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:13:18.630Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:13:18.632Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:18.632Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:13:18.633Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-25T07:13:18.640Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:20.141Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T07:13:20.142Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:13:20.142Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:20.386Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T07:13:20.386Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T07:13:20.387Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T07:13:20.387Z] [BOT] 💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:13:20.390Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:13:20.390Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:13:20.391Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:13:20.393Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:20.393Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:13:20.394Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-25T07:13:20.402Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:24.903Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T07:13:24.904Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T07:13:24.904Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T07:13:24.904Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:13:25.205Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T07:13:25.206Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T07:13:25.206Z] [BOT] 💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:13:25.209Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:13:25.209Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:13:25.209Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:13:25.211Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:13:25.211Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:13:25.212Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-25T07:13:25.220Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:13:29.722Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T07:13:29.724Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T07:13:29.817Z] [BOT] 📂 Loaded 8471 existing routing entries
[2026-01-25T07:13:29.927Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T07:13:29.927Z] [BOT] Total entries: 8481
   Timestamp: 2026-01-25T07:13:29.887Z
[2026-01-25T07:13:29.928Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T07:13:29.928Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T07:13:29.928Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T07:13:29.928Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T07:13:31.947Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*