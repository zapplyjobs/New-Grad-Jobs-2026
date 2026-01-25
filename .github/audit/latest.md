# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T14:30:15.905Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T14:29:44.303Z] ========================================
[2026-01-25T14:29:44.305Z] Discord Bot Execution Log
[2026-01-25T14:29:44.305Z] Environment: GitHub Actions
[2026-01-25T14:29:44.305Z] Node Version: v20.20.0
[2026-01-25T14:29:44.305Z] ========================================
[2026-01-25T14:29:44.305Z] Environment Variables Check:
[2026-01-25T14:29:44.305Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T14:29:44.305Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.305Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T14:29:44.305Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T14:29:44.305Z] 
Multi-Channel Configuration:
[2026-01-25T14:29:44.306Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.306Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.306Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.306Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.306Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.306Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.306Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.306Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.306Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T14:29:44.306Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T14:29:44.306Z] 
Data Files Check:
[2026-01-25T14:29:44.307Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T14:29:44.312Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 598938 bytes)
[2026-01-25T14:29:44.312Z] 
========================================
[2026-01-25T14:29:44.312Z] Starting Enhanced Discord Bot...
[2026-01-25T14:29:44.312Z] ========================================
[2026-01-25T14:29:44.838Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:29:45.391Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T14:29:45.391Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T14:29:45.391Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T14:29:45.509Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T14:29:45.513Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T14:29:45.514Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T14:29:45.514Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T14:29:45.515Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T14:29:45.515Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T14:29:45.515Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T14:29:45.516Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T14:29:45.519Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T14:29:45.519Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T14:29:45.520Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:29:45.520Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:29:45.537Z] [BOT ERROR] (node:2609) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T14:29:46.127Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T14:29:46.127Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T14:29:46.127Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T14:29:46.128Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:29:46.131Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:29:46.132Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:29:46.132Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:29:46.134Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:29:46.134Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:29:46.135Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:29:46.148Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:29:46.148Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:29:47.651Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T14:29:47.651Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:29:47.651Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:29:47.855Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T14:29:47.855Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T14:29:47.856Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T14:29:47.856Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:29:47.859Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:29:47.859Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:29:47.859Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:29:47.861Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:29:47.861Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:29:47.862Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:29:47.870Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:29:49.371Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:29:49.371Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:29:49.588Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T14:29:49.588Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T14:29:49.589Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T14:29:49.589Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:29:49.592Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:29:49.592Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:29:49.592Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:29:49.594Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:29:49.595Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:29:49.596Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:29:49.603Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:29:49.603Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:29:51.104Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:29:51.105Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:29:51.491Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T14:29:51.491Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T14:29:51.492Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T14:29:51.492Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:29:51.495Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:29:51.495Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:29:51.497Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:29:51.498Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:29:51.498Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:29:51.508Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:29:51.508Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:29:56.009Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T14:29:56.009Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T14:29:56.009Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:29:56.010Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:29:56.260Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T14:29:56.260Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T14:29:56.260Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T14:29:56.260Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:29:56.265Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:29:56.265Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:29:56.268Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:29:56.268Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:29:56.268Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:29:56.278Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:29:57.780Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T14:29:57.780Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:29:57.780Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:29:58.070Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T14:29:58.070Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T14:29:58.071Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T14:29:58.071Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:29:58.074Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:29:58.074Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:29:58.077Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:29:58.077Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:29:58.078Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:29:58.086Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:29:59.588Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T14:29:59.588Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:29:59.588Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:29:59.751Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T14:29:59.751Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T14:29:59.752Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T14:29:59.752Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:29:59.755Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:29:59.756Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:29:59.758Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:29:59.758Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:29:59.759Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:29:59.767Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:29:59.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:30:01.268Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T14:30:01.269Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:30:01.269Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:30:01.505Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T14:30:01.505Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T14:30:01.505Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:30:01.509Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:30:01.509Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:30:01.509Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:30:01.511Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:30:01.511Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:30:01.512Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:30:01.519Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:30:03.020Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T14:30:03.020Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:30:03.313Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T14:30:03.313Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T14:30:03.313Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T14:30:03.313Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:30:03.317Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:30:03.317Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:30:03.317Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:30:03.320Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:30:03.320Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:30:03.320Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:30:03.329Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:30:03.329Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:30:07.831Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T14:30:07.831Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T14:30:07.831Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T14:30:07.832Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:30:08.076Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T14:30:08.077Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T14:30:08.077Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T14:30:08.077Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:30:08.080Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:30:08.081Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:30:08.083Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:30:08.083Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:30:08.083Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:30:08.091Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:30:08.091Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:30:12.593Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T14:30:12.594Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T14:30:12.689Z] [BOT] 📂 Loaded 8741 existing routing entries
[2026-01-25T14:30:12.799Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T14:30:12.799Z] [BOT] Total entries: 8751
   Timestamp: 2026-01-25T14:30:12.758Z
[2026-01-25T14:30:12.799Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T14:30:12.799Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T14:30:12.800Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
[2026-01-25T14:30:12.800Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T14:30:12.800Z] [BOT] [STATS] Channel stats saved
[2026-01-25T14:30:14.817Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2609) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*