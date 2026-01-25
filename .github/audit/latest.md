# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T17:56:08.050Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T17:55:35.659Z] ========================================
[2026-01-25T17:55:35.661Z] Discord Bot Execution Log
[2026-01-25T17:55:35.661Z] Environment: GitHub Actions
[2026-01-25T17:55:35.661Z] Node Version: v20.20.0
[2026-01-25T17:55:35.661Z] ========================================
[2026-01-25T17:55:35.662Z] Environment Variables Check:
[2026-01-25T17:55:35.662Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T17:55:35.662Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.662Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T17:55:35.662Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T17:55:35.662Z] 
Multi-Channel Configuration:
[2026-01-25T17:55:35.662Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.662Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.662Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.662Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.663Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.663Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.663Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.663Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.663Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T17:55:35.663Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T17:55:35.663Z] 
Data Files Check:
[2026-01-25T17:55:35.664Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T17:55:35.669Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594003 bytes)
[2026-01-25T17:55:35.669Z] 
========================================
[2026-01-25T17:55:35.669Z] Starting Enhanced Discord Bot...
[2026-01-25T17:55:35.669Z] ========================================
[2026-01-25T17:55:36.219Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:36.577Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T17:55:36.578Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T17:55:36.578Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T17:55:36.697Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T17:55:36.701Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T17:55:36.701Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T17:55:36.701Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T17:55:36.703Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T17:55:36.703Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T17:55:36.703Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T17:55:36.703Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T17:55:36.707Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T17:55:36.707Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T17:55:36.707Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:55:36.708Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:55:36.725Z] [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T17:55:37.036Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T17:55:37.036Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T17:55:37.037Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T17:55:37.037Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:55:37.040Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:37.041Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:55:37.041Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:55:37.043Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:55:37.043Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:55:37.044Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:55:37.056Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:55:38.558Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:55:38.558Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:55:38.901Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T17:55:38.902Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T17:55:38.902Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T17:55:38.902Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:55:38.905Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:38.906Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:55:38.906Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:55:38.908Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:55:38.908Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:55:38.909Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:55:38.916Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:55:38.916Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:55:40.417Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:55:40.417Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:55:40.625Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T17:55:40.626Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:55:40.629Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:40.629Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:55:40.630Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:55:40.632Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:55:40.632Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:55:40.640Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:55:40.640Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:55:42.141Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T17:55:42.141Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:55:42.141Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:55:43.012Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T17:55:43.013Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T17:55:43.013Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T17:55:43.013Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:55:43.016Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:43.016Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:55:43.017Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:55:43.018Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:55:43.019Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:55:43.019Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:55:43.029Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:55:43.029Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:55:47.530Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T17:55:47.530Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T17:55:47.531Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:55:47.531Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:55:47.811Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T17:55:47.811Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T17:55:47.812Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:55:47.816Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:47.816Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:55:47.816Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:55:47.819Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:55:47.819Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:55:47.820Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:55:47.829Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:55:49.330Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T17:55:49.331Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:55:49.331Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:55:50.383Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T17:55:50.384Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T17:55:50.384Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T17:55:50.384Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:55:50.387Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:50.387Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:55:50.388Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:55:50.390Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:55:50.390Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:55:50.391Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:55:50.400Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:55:51.901Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T17:55:51.901Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:55:51.901Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:55:52.085Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T17:55:52.085Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T17:55:52.085Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:55:52.089Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:52.089Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:55:52.089Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:55:52.091Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:55:52.092Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:55:52.092Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:55:52.105Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:55:53.607Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T17:55:53.607Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:55:53.607Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:55:54.058Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T17:55:54.058Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T17:55:54.059Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T17:55:54.059Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:55:54.062Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:54.062Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:55:54.063Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:55:54.065Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:55:54.065Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:55:54.065Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:55:54.072Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:55:55.573Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T17:55:55.573Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:55:55.574Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:55:55.801Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T17:55:55.801Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T17:55:55.801Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T17:55:55.801Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:55:55.805Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:55:55.805Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:55:55.805Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:55:55.807Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:55:55.808Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:55:55.808Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:55:55.816Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:55:55.816Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:56:00.318Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T17:56:00.319Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T17:56:00.319Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T17:56:00.319Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:56:00.539Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T17:56:00.539Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T17:56:00.539Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T17:56:00.539Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:56:00.542Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:56:00.542Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:56:00.543Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:56:00.545Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:56:00.545Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:56:00.545Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:56:00.553Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:56:00.553Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:56:05.055Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T17:56:05.057Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T17:56:05.151Z] [BOT] 📂 Loaded 8881 existing routing entries
[2026-01-25T17:56:05.261Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T17:56:05.262Z] [BOT] Total entries: 8891
   Timestamp: 2026-01-25T17:56:05.220Z
[2026-01-25T17:56:05.262Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T17:56:05.262Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T17:56:05.262Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T17:56:05.262Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T17:56:05.262Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T17:56:05.263Z] [BOT] [STATS] Channel stats saved
[2026-01-25T17:56:07.279Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*