# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T14:56:45.462Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T14:56:13.444Z] ========================================
[2026-01-25T14:56:13.446Z] Discord Bot Execution Log
[2026-01-25T14:56:13.446Z] Environment: GitHub Actions
[2026-01-25T14:56:13.446Z] Node Version: v20.20.0
[2026-01-25T14:56:13.446Z] ========================================
[2026-01-25T14:56:13.446Z] Environment Variables Check:
[2026-01-25T14:56:13.446Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T14:56:13.446Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.446Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T14:56:13.447Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T14:56:13.447Z] 
Multi-Channel Configuration:
[2026-01-25T14:56:13.447Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.447Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.447Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.447Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.447Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.447Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.447Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.447Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.447Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T14:56:13.447Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T14:56:13.447Z] 
Data Files Check:
[2026-01-25T14:56:13.449Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T14:56:13.453Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 598938 bytes)
[2026-01-25T14:56:13.453Z] 
========================================
[2026-01-25T14:56:13.453Z] Starting Enhanced Discord Bot...
[2026-01-25T14:56:13.453Z] ========================================
[2026-01-25T14:56:13.983Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:56:14.479Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T14:56:14.480Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T14:56:14.480Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T14:56:14.598Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T14:56:14.602Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T14:56:14.602Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T14:56:14.602Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T14:56:14.603Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T14:56:14.603Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T14:56:14.604Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T14:56:14.604Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T14:56:14.607Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T14:56:14.608Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T14:56:14.608Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:56:14.608Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:14.625Z] [BOT ERROR] (node:2466) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T14:56:14.930Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T14:56:14.930Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T14:56:14.930Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T14:56:14.931Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:14.934Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:56:14.934Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:14.935Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:14.937Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:14.937Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:14.938Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:14.950Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:16.452Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T14:56:16.452Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:56:16.452Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:16.834Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T14:56:16.834Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T14:56:16.835Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T14:56:16.835Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:16.838Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:56:16.838Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:16.838Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:16.840Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:16.840Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:16.841Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:16.849Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:18.349Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T14:56:18.349Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:56:18.349Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:18.543Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T14:56:18.543Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T14:56:18.544Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:18.547Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:18.547Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:18.549Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:18.550Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:18.550Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:18.557Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:20.058Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:56:20.058Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:20.260Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T14:56:20.261Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T14:56:20.261Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T14:56:20.261Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:20.264Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:20.265Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:20.267Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:20.267Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:20.267Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:20.276Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:56:20.276Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:24.778Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T14:56:24.779Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T14:56:24.779Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:56:24.779Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:25.015Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T14:56:25.015Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T14:56:25.015Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T14:56:25.016Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:25.020Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:25.020Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:25.023Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:25.023Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:25.023Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:25.032Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:26.534Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T14:56:26.534Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:56:26.535Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:27.483Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T14:56:27.483Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T14:56:27.483Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T14:56:27.483Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:27.487Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:27.487Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:27.489Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:27.489Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:27.490Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:27.498Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:56:27.498Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:28.999Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T14:56:28.999Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:29.213Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T14:56:29.213Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T14:56:29.213Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T14:56:29.213Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:29.217Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:56:29.217Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:29.217Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:29.219Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:29.219Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:29.220Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:29.228Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:30.729Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T14:56:30.729Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:56:30.729Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:30.949Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T14:56:30.949Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T14:56:30.949Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:30.952Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:30.953Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:30.955Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:30.955Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:30.956Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:30.963Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:32.465Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T14:56:32.465Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:56:32.465Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:32.731Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T14:56:32.731Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T14:56:32.731Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T14:56:32.731Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:32.735Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:32.735Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:32.738Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:32.738Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:32.739Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:32.746Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:37.248Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T14:56:37.249Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T14:56:37.249Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T14:56:37.249Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:56:37.468Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T14:56:37.468Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T14:56:37.468Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T14:56:37.468Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:56:37.471Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:56:37.472Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:56:37.474Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:56:37.474Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:56:37.474Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:56:37.482Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:56:41.984Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T14:56:41.986Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T14:56:42.078Z] [BOT] 📂 Loaded 8761 existing routing entries
[2026-01-25T14:56:42.188Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8771
[2026-01-25T14:56:42.188Z] [BOT] Timestamp: 2026-01-25T14:56:42.147Z
[2026-01-25T14:56:42.188Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-25T14:56:42.189Z] [BOT] Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T14:56:42.189Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T14:56:42.189Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T14:56:42.189Z] [BOT] [STATS] Channel stats saved
[2026-01-25T14:56:44.205Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2466) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*