# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T05:59:45.215Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T05:59:13.525Z] ========================================
[2026-01-25T05:59:13.526Z] Discord Bot Execution Log
[2026-01-25T05:59:13.526Z] Environment: GitHub Actions
[2026-01-25T05:59:13.526Z] Node Version: v20.20.0
[2026-01-25T05:59:13.526Z] ========================================
[2026-01-25T05:59:13.527Z] Environment Variables Check:
[2026-01-25T05:59:13.527Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T05:59:13.527Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.527Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T05:59:13.527Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T05:59:13.527Z] 
Multi-Channel Configuration:
[2026-01-25T05:59:13.527Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.527Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.527Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.527Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.527Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.527Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.527Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.527Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.528Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T05:59:13.528Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T05:59:13.528Z] 
Data Files Check:
[2026-01-25T05:59:13.529Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T05:59:13.534Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 629326 bytes)
[2026-01-25T05:59:13.534Z] 
========================================
[2026-01-25T05:59:13.534Z] Starting Enhanced Discord Bot...
[2026-01-25T05:59:13.534Z] ========================================
[2026-01-25T05:59:13.994Z] [BOT] ✅ Loaded V2 database: 1103 jobs
[2026-01-25T05:59:14.567Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T05:59:14.568Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T05:59:14.568Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T05:59:14.728Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T05:59:14.731Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T05:59:14.731Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T05:59:14.731Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T05:59:14.732Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T05:59:14.732Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T05:59:14.733Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T05:59:14.736Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T05:59:14.736Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T05:59:14.736Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:59:14.737Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:14.753Z] [BOT ERROR] (node:2526) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T05:59:14.958Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T05:59:14.958Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T05:59:14.959Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T05:59:14.959Z] [BOT] 💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:59:14.964Z] [BOT] ✅ Loaded V2 database: 1103 jobs
💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:59:14.964Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1103
[2026-01-25T05:59:14.966Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:59:14.967Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:59:14.968Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T05:59:14.972Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-25T05:59:14.972Z] [BOT] ✅ Archiving complete: 2 archived, 1101 active
[2026-01-25T05:59:14.983Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:16.486Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T05:59:16.486Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:59:16.486Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:16.699Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T05:59:16.700Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T05:59:16.700Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T05:59:16.700Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T05:59:16.705Z] [BOT] ✅ Loaded V2 database: 1101 jobs
[2026-01-25T05:59:16.705Z] [BOT] 💾 DISK STATE: 1101 jobs on disk
[2026-01-25T05:59:16.705Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T05:59:16.707Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:59:16.707Z] [BOT] 💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T05:59:16.708Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-25T05:59:16.716Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:18.216Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T05:59:18.217Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:59:18.217Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:18.641Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T05:59:18.642Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T05:59:18.642Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T05:59:18.642Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T05:59:18.647Z] [BOT] ✅ Loaded V2 database: 1101 jobs
💾 DISK STATE: 1101 jobs on disk
[2026-01-25T05:59:18.647Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T05:59:18.649Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:59:18.649Z] [BOT] 💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T05:59:18.650Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-25T05:59:18.658Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:20.160Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T05:59:20.160Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:59:20.160Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:20.383Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T05:59:20.384Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T05:59:20.384Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T05:59:20.384Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T05:59:20.389Z] [BOT] ✅ Loaded V2 database: 1101 jobs
💾 DISK STATE: 1101 jobs on disk
[2026-01-25T05:59:20.389Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T05:59:20.391Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:59:20.391Z] [BOT] 💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T05:59:20.391Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-25T05:59:20.403Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:24.905Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T05:59:24.906Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T05:59:24.906Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:59:24.906Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:25.298Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T05:59:25.298Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T05:59:25.299Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T05:59:25.299Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T05:59:25.304Z] [BOT] ✅ Loaded V2 database: 1101 jobs
💾 DISK STATE: 1101 jobs on disk
[2026-01-25T05:59:25.305Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T05:59:25.307Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:59:25.307Z] [BOT] 💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T05:59:25.308Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-25T05:59:25.319Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:26.822Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:59:26.822Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:27.038Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T05:59:27.039Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T05:59:27.039Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T05:59:27.044Z] [BOT] ✅ Loaded V2 database: 1101 jobs
💾 DISK STATE: 1101 jobs on disk
[2026-01-25T05:59:27.044Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T05:59:27.046Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:59:27.046Z] [BOT] 💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T05:59:27.047Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-25T05:59:27.056Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:28.558Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:59:28.558Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:28.991Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T05:59:28.992Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T05:59:28.992Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T05:59:28.996Z] [BOT] ✅ Loaded V2 database: 1101 jobs
[2026-01-25T05:59:28.997Z] [BOT] 💾 DISK STATE: 1101 jobs on disk
[2026-01-25T05:59:28.997Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T05:59:28.999Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:59:28.999Z] [BOT] 💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T05:59:29.000Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-25T05:59:29.010Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:30.512Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T05:59:30.512Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:59:30.513Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:30.752Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T05:59:30.752Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T05:59:30.753Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T05:59:30.753Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T05:59:30.757Z] [BOT] ✅ Loaded V2 database: 1101 jobs
💾 DISK STATE: 1101 jobs on disk
[2026-01-25T05:59:30.758Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T05:59:30.760Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:59:30.760Z] [BOT] 💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T05:59:30.760Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-25T05:59:30.769Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:32.270Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:59:32.271Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:32.570Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T05:59:32.570Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T05:59:32.570Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T05:59:32.571Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T05:59:32.575Z] [BOT] ✅ Loaded V2 database: 1101 jobs
[2026-01-25T05:59:32.576Z] [BOT] 💾 DISK STATE: 1101 jobs on disk
[2026-01-25T05:59:32.576Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T05:59:32.578Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:59:32.578Z] [BOT] 💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T05:59:32.579Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-25T05:59:32.587Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
[2026-01-25T05:59:32.587Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:37.090Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T05:59:37.090Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T05:59:37.090Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T05:59:37.091Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:59:37.421Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T05:59:37.422Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T05:59:37.422Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T05:59:37.426Z] [BOT] ✅ Loaded V2 database: 1101 jobs
💾 DISK STATE: 1101 jobs on disk
[2026-01-25T05:59:37.427Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T05:59:37.428Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T05:59:37.429Z] [BOT] ✅ No jobs to archive (all 1101 jobs within 7-day window)
[2026-01-25T05:59:37.438Z] [BOT] 💾 Saved posted_jobs.json: 1101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:59:41.939Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T05:59:41.941Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T05:59:42.045Z] [BOT] 📂 Loaded 8421 existing routing entries
[2026-01-25T05:59:42.148Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8431
   Timestamp: 2026-01-25T05:59:42.114Z
[2026-01-25T05:59:42.149Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-25T05:59:42.149Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-25T05:59:42.149Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T05:59:42.149Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T05:59:42.149Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T05:59:42.149Z] [BOT] [STATS] Channel stats saved
[2026-01-25T05:59:44.163Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2526) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*