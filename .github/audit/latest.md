# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T13:58:35.187Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T13:58:03.716Z] ========================================
[2026-01-25T13:58:03.718Z] Discord Bot Execution Log
[2026-01-25T13:58:03.718Z] Environment: GitHub Actions
[2026-01-25T13:58:03.718Z] Node Version: v20.20.0
[2026-01-25T13:58:03.718Z] ========================================
[2026-01-25T13:58:03.718Z] Environment Variables Check:
[2026-01-25T13:58:03.718Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T13:58:03.718Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.718Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T13:58:03.718Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T13:58:03.719Z] 
Multi-Channel Configuration:
[2026-01-25T13:58:03.719Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.719Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.719Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.719Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.719Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.719Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.719Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.719Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.719Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T13:58:03.719Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T13:58:03.719Z] 
Data Files Check:
[2026-01-25T13:58:03.720Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T13:58:03.725Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T13:58:03.725Z] 
========================================
[2026-01-25T13:58:03.725Z] Starting Enhanced Discord Bot...
[2026-01-25T13:58:03.725Z] ========================================
[2026-01-25T13:58:04.258Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:58:04.937Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T13:58:04.938Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T13:58:04.938Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T13:58:05.057Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T13:58:05.060Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T13:58:05.060Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T13:58:05.061Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T13:58:05.061Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T13:58:05.062Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T13:58:05.062Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T13:58:05.062Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T13:58:05.065Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T13:58:05.066Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T13:58:05.066Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:58:05.067Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:05.083Z] [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T13:58:05.307Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T13:58:05.308Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T13:58:05.308Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T13:58:05.309Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:58:05.312Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:58:05.312Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:58:05.312Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:58:05.315Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:58:05.315Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:58:05.316Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T13:58:05.326Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-25T13:58:05.326Z] [BOT] ✅ Archiving complete: 1 archived, 1049 active
[2026-01-25T13:58:05.334Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T13:58:05.334Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:06.837Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T13:58:06.837Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:58:06.838Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:07.125Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T13:58:07.125Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T13:58:07.125Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T13:58:07.126Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T13:58:07.129Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T13:58:07.129Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T13:58:07.131Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T13:58:07.132Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T13:58:07.139Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:08.640Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T13:58:08.641Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:58:08.641Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:08.882Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T13:58:08.883Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T13:58:08.886Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T13:58:08.887Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T13:58:08.889Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:58:08.889Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T13:58:08.890Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T13:58:08.897Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:10.398Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:58:10.399Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:10.622Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T13:58:10.622Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T13:58:10.622Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T13:58:10.623Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T13:58:10.626Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T13:58:10.626Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T13:58:10.628Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:58:10.628Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T13:58:10.629Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T13:58:10.639Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:15.141Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T13:58:15.141Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T13:58:15.141Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:58:15.142Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:15.357Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T13:58:15.357Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T13:58:15.358Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T13:58:15.362Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T13:58:15.362Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T13:58:15.365Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:58:15.365Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T13:58:15.366Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T13:58:15.375Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T13:58:15.375Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:16.877Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T13:58:16.877Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:58:16.877Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:17.115Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T13:58:17.115Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T13:58:17.115Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T13:58:17.119Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T13:58:17.119Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T13:58:17.121Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:58:17.121Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T13:58:17.122Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T13:58:17.131Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T13:58:17.131Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:18.633Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T13:58:18.633Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:58:18.633Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:18.922Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T13:58:18.923Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T13:58:18.923Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T13:58:18.927Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T13:58:18.927Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T13:58:18.929Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:58:18.929Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T13:58:18.930Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T13:58:18.939Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T13:58:18.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:20.441Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T13:58:20.441Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:58:20.441Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:20.638Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T13:58:20.638Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T13:58:20.638Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T13:58:20.638Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T13:58:20.641Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T13:58:20.642Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T13:58:20.644Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:58:20.644Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T13:58:20.644Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T13:58:20.652Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:22.154Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T13:58:22.154Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:58:22.155Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:22.367Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T13:58:22.367Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T13:58:22.367Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T13:58:22.371Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T13:58:22.371Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T13:58:22.374Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:58:22.374Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T13:58:22.374Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T13:58:22.382Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T13:58:22.382Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:26.884Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T13:58:26.885Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T13:58:26.885Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T13:58:26.886Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:58:27.070Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T13:58:27.070Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T13:58:27.070Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T13:58:27.070Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T13:58:27.073Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T13:58:27.074Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T13:58:27.076Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:58:27.076Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T13:58:27.076Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T13:58:27.084Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:58:31.586Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T13:58:31.588Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T13:58:31.680Z] [BOT] 📂 Loaded 8721 existing routing entries
[2026-01-25T13:58:31.788Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T13:58:31.788Z] [BOT] Total entries: 8731
   Timestamp: 2026-01-25T13:58:31.749Z
[2026-01-25T13:58:31.789Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T13:58:31.789Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T13:58:31.789Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T13:58:31.789Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T13:58:31.790Z] [BOT] [STATS] Channel stats saved
[2026-01-25T13:58:33.808Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*