# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T09:12:42.401Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T09:12:10.606Z] ========================================
[2026-01-25T09:12:10.607Z] Discord Bot Execution Log
[2026-01-25T09:12:10.607Z] Environment: GitHub Actions
[2026-01-25T09:12:10.608Z] Node Version: v20.20.0
[2026-01-25T09:12:10.608Z] ========================================
[2026-01-25T09:12:10.608Z] Environment Variables Check:
[2026-01-25T09:12:10.608Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T09:12:10.608Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.608Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T09:12:10.608Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T09:12:10.608Z] 
Multi-Channel Configuration:
[2026-01-25T09:12:10.608Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.608Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.608Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.608Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.608Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.608Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.609Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.609Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.609Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T09:12:10.609Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T09:12:10.609Z] 
Data Files Check:
[2026-01-25T09:12:10.610Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T09:12:10.615Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 604036 bytes)
[2026-01-25T09:12:10.615Z] 
========================================
[2026-01-25T09:12:10.615Z] Starting Enhanced Discord Bot...
[2026-01-25T09:12:10.615Z] ========================================
[2026-01-25T09:12:11.128Z] [BOT] ✅ Loaded V2 database: 1059 jobs
[2026-01-25T09:12:11.651Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T09:12:11.652Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T09:12:11.652Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T09:12:11.781Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-25T09:12:11.781Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T09:12:11.786Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T09:12:11.787Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T09:12:11.787Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T09:12:11.788Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T09:12:11.788Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T09:12:11.789Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T09:12:11.792Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T09:12:11.793Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T09:12:11.793Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:12:11.793Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:11.810Z] [BOT ERROR] (node:2526) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T09:12:12.141Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T09:12:12.141Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T09:12:12.142Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T09:12:12.142Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T09:12:12.146Z] [BOT] ✅ Loaded V2 database: 1059 jobs
[2026-01-25T09:12:12.146Z] [BOT] 💾 DISK STATE: 1059 jobs on disk
[2026-01-25T09:12:12.146Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T09:12:12.149Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:12:12.149Z] [BOT] 💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T09:12:12.150Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T09:12:12.155Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-25T09:12:12.156Z] [BOT] ✅ Archiving complete: 5 archived, 1054 active
[2026-01-25T09:12:12.167Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:13.670Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T09:12:13.670Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:12:13.670Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:13.903Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T09:12:13.904Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T09:12:13.904Z] [BOT] 💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:12:13.908Z] [BOT] ✅ Loaded V2 database: 1054 jobs
💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:12:13.908Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:12:13.910Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:12:13.910Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:12:13.911Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-25T09:12:13.918Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
[2026-01-25T09:12:13.918Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:15.418Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:12:15.419Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:15.766Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T09:12:15.766Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T09:12:15.766Z] [BOT] 💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:12:15.770Z] [BOT] ✅ Loaded V2 database: 1054 jobs
💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:12:15.770Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:12:15.772Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:12:15.772Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:12:15.773Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-25T09:12:15.781Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:17.282Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:12:17.283Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:17.446Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T09:12:17.446Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T09:12:17.447Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T09:12:17.447Z] [BOT] 💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:12:17.450Z] [BOT] ✅ Loaded V2 database: 1054 jobs
💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:12:17.450Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:12:17.452Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:12:17.452Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:12:17.453Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-25T09:12:17.463Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:21.966Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T09:12:21.966Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T09:12:21.966Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:12:21.967Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:23.503Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T09:12:23.504Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T09:12:23.504Z] [BOT] 💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:12:23.508Z] [BOT] ✅ Loaded V2 database: 1054 jobs
💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:12:23.509Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:12:23.512Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:12:23.512Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:12:23.512Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-25T09:12:23.521Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:25.022Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T09:12:25.022Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:12:25.023Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:25.145Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T09:12:25.145Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T09:12:25.146Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T09:12:25.146Z] [BOT] 💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:12:25.150Z] [BOT] ✅ Loaded V2 database: 1054 jobs
💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:12:25.150Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:12:25.152Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:12:25.153Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:12:25.154Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-25T09:12:25.162Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:26.663Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T09:12:26.663Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:12:26.663Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:26.871Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T09:12:26.871Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T09:12:26.871Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T09:12:26.872Z] [BOT] 💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:12:26.876Z] [BOT] ✅ Loaded V2 database: 1054 jobs
[2026-01-25T09:12:26.876Z] [BOT] 💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:12:26.876Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:12:26.879Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:12:26.879Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:12:26.879Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-25T09:12:26.889Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:28.390Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T09:12:28.391Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:12:28.391Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:28.527Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T09:12:28.528Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:12:28.531Z] [BOT] ✅ Loaded V2 database: 1054 jobs
💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:12:28.532Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:12:28.533Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:12:28.534Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-25T09:12:28.541Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:30.042Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T09:12:30.042Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:12:30.043Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:30.262Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T09:12:30.263Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T09:12:30.263Z] [BOT] 💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:12:30.267Z] [BOT] ✅ Loaded V2 database: 1054 jobs
[2026-01-25T09:12:30.267Z] [BOT] 💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:12:30.268Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:12:30.270Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:12:30.270Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:12:30.271Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-25T09:12:30.279Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
[2026-01-25T09:12:30.279Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:34.781Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T09:12:34.781Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T09:12:34.781Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T09:12:34.782Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:12:34.939Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T09:12:34.939Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T09:12:34.939Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T09:12:34.939Z] [BOT] 💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:12:34.943Z] [BOT] ✅ Loaded V2 database: 1054 jobs
💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:12:34.943Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:12:34.945Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:12:34.945Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:12:34.946Z] [BOT] ✅ No jobs to archive (all 1054 jobs within 7-day window)
[2026-01-25T09:12:34.954Z] [BOT] 💾 Saved posted_jobs.json: 1054 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:12:39.456Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T09:12:39.457Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T09:12:39.557Z] [BOT] 📂 Loaded 8551 existing routing entries
[2026-01-25T09:12:39.665Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8561
[2026-01-25T09:12:39.666Z] [BOT] Timestamp: 2026-01-25T09:12:39.633Z
[2026-01-25T09:12:39.666Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T09:12:39.666Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T09:12:39.666Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T09:12:39.666Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T09:12:39.667Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T09:12:39.667Z] [BOT] [STATS] Channel stats saved
[2026-01-25T09:12:41.685Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2526) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*