# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T16:12:40.082Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T16:12:09.372Z] ========================================
[2026-01-25T16:12:09.374Z] Discord Bot Execution Log
[2026-01-25T16:12:09.374Z] Environment: GitHub Actions
[2026-01-25T16:12:09.374Z] Node Version: v20.20.0
[2026-01-25T16:12:09.374Z] ========================================
[2026-01-25T16:12:09.374Z] Environment Variables Check:
[2026-01-25T16:12:09.374Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T16:12:09.375Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.375Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T16:12:09.375Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T16:12:09.375Z] 
Multi-Channel Configuration:
[2026-01-25T16:12:09.375Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.375Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.375Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.375Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.375Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.375Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.375Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.375Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.376Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T16:12:09.376Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T16:12:09.376Z] 
Data Files Check:
[2026-01-25T16:12:09.377Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T16:12:09.381Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 596921 bytes)
[2026-01-25T16:12:09.381Z] 
========================================
[2026-01-25T16:12:09.381Z] Starting Enhanced Discord Bot...
[2026-01-25T16:12:09.381Z] ========================================
[2026-01-25T16:12:09.914Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T16:12:10.470Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T16:12:10.471Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T16:12:10.471Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T16:12:10.582Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T16:12:10.586Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T16:12:10.586Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T16:12:10.586Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T16:12:10.587Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T16:12:10.587Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T16:12:10.588Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T16:12:10.588Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T16:12:10.591Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T16:12:10.592Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T16:12:10.592Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:12:10.592Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:10.609Z] [BOT ERROR] (node:2501) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T16:12:10.880Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T16:12:10.880Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T16:12:10.881Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T16:12:10.884Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T16:12:10.884Z] [BOT] 💾 DISK STATE: 1045 jobs on disk
[2026-01-25T16:12:10.885Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T16:12:10.887Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:12:10.887Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T16:12:10.888Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T16:12:10.893Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-25T16:12:10.893Z] [BOT] ✅ Archiving complete: 1 archived, 1044 active
[2026-01-25T16:12:10.903Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
[2026-01-25T16:12:10.903Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:12.405Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:12:12.405Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:12.553Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T16:12:12.553Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T16:12:12.553Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T16:12:12.553Z] [BOT] 💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:12:12.557Z] [BOT] ✅ Loaded V2 database: 1044 jobs
[2026-01-25T16:12:12.557Z] [BOT] 💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:12:12.557Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:12:12.559Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:12:12.559Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:12:12.560Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-25T16:12:12.567Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:14.069Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T16:12:14.069Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:12:14.070Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:14.330Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T16:12:14.330Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T16:12:14.331Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:12:14.334Z] [BOT] ✅ Loaded V2 database: 1044 jobs
💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:12:14.334Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:12:14.336Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:12:14.336Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:12:14.337Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-25T16:12:14.344Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:15.845Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T16:12:15.845Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:12:15.845Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:16.109Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T16:12:16.109Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T16:12:16.109Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T16:12:16.110Z] [BOT] 💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:12:16.113Z] [BOT] ✅ Loaded V2 database: 1044 jobs
[2026-01-25T16:12:16.113Z] [BOT] 💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:12:16.113Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:12:16.115Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:12:16.115Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:12:16.116Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-25T16:12:16.126Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:20.630Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T16:12:20.631Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T16:12:20.631Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:12:20.631Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:20.968Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T16:12:20.968Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T16:12:20.968Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T16:12:20.968Z] [BOT] 💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:12:20.972Z] [BOT] ✅ Loaded V2 database: 1044 jobs
[2026-01-25T16:12:20.973Z] [BOT] 💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:12:20.973Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:12:20.975Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:12:20.975Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:12:20.976Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-25T16:12:20.985Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
[2026-01-25T16:12:20.985Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:22.487Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T16:12:22.487Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:12:22.487Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:22.665Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T16:12:22.665Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T16:12:22.666Z] [BOT] 💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:12:22.669Z] [BOT] ✅ Loaded V2 database: 1044 jobs
[2026-01-25T16:12:22.669Z] [BOT] 💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:12:22.669Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:12:22.671Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:12:22.671Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:12:22.672Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-25T16:12:22.680Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:24.182Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T16:12:24.182Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:12:24.182Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:24.403Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T16:12:24.403Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T16:12:24.404Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:12:24.407Z] [BOT] ✅ Loaded V2 database: 1044 jobs
[2026-01-25T16:12:24.408Z] [BOT] 💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:12:24.408Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:12:24.410Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:12:24.410Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:12:24.411Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-25T16:12:24.419Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
[2026-01-25T16:12:24.419Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:25.920Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T16:12:25.920Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:12:25.920Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:26.242Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T16:12:26.243Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:12:26.246Z] [BOT] ✅ Loaded V2 database: 1044 jobs
💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:12:26.247Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:12:26.250Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:12:26.250Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:12:26.250Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-25T16:12:26.257Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:27.758Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T16:12:27.758Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:12:27.759Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:27.950Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T16:12:27.950Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T16:12:27.950Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T16:12:27.950Z] [BOT] 💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:12:27.956Z] [BOT] ✅ Loaded V2 database: 1044 jobs
[2026-01-25T16:12:27.956Z] [BOT] 💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:12:27.956Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:12:27.958Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:12:27.959Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-25T16:12:27.966Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
[2026-01-25T16:12:27.967Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:32.469Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T16:12:32.469Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T16:12:32.469Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T16:12:32.470Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:12:32.728Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T16:12:32.729Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T16:12:32.729Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T16:12:32.729Z] [BOT] 💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:12:32.733Z] [BOT] ✅ Loaded V2 database: 1044 jobs
💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:12:32.733Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:12:32.735Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:12:32.736Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:12:32.737Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-25T16:12:32.745Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
[2026-01-25T16:12:32.745Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:12:37.249Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T16:12:37.250Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T16:12:37.350Z] [BOT] 📂 Loaded 8811 existing routing entries
[2026-01-25T16:12:37.467Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T16:12:37.467Z] [BOT] Total entries: 8821
   Timestamp: 2026-01-25T16:12:37.421Z
[2026-01-25T16:12:37.467Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T16:12:37.467Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T16:12:37.468Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T16:12:37.468Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T16:12:37.468Z] [BOT] [STATS] Channel stats saved
[2026-01-25T16:12:39.486Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2501) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*