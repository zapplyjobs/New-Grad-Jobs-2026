# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T05:08:01.671Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T05:07:30.311Z] ========================================
[2026-01-25T05:07:30.313Z] Discord Bot Execution Log
[2026-01-25T05:07:30.313Z] Environment: GitHub Actions
[2026-01-25T05:07:30.313Z] Node Version: v20.20.0
[2026-01-25T05:07:30.313Z] ========================================
[2026-01-25T05:07:30.313Z] Environment Variables Check:
[2026-01-25T05:07:30.313Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T05:07:30.314Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T05:07:30.314Z] 
Multi-Channel Configuration:
[2026-01-25T05:07:30.314Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.314Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T05:07:30.315Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T05:07:30.315Z] 
Data Files Check:
[2026-01-25T05:07:30.316Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T05:07:30.321Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 634380 bytes)
[2026-01-25T05:07:30.321Z] 
========================================
[2026-01-25T05:07:30.321Z] Starting Enhanced Discord Bot...
[2026-01-25T05:07:30.321Z] ========================================
[2026-01-25T05:07:30.869Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T05:07:31.568Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T05:07:31.569Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T05:07:31.569Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T05:07:31.687Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T05:07:31.691Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T05:07:31.692Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T05:07:31.692Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T05:07:31.693Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T05:07:31.693Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T05:07:31.693Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T05:07:31.697Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T05:07:31.697Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T05:07:31.697Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:07:31.698Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:31.715Z] [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T05:07:32.037Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T05:07:32.037Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T05:07:32.038Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:32.042Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T05:07:32.042Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:32.042Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:32.045Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:07:32.045Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:32.046Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:32.059Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:33.562Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:07:33.562Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:33.757Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T05:07:33.757Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T05:07:33.758Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T05:07:33.758Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:33.761Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:33.762Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:33.764Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:33.765Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:33.773Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
[2026-01-25T05:07:33.774Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:35.273Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T05:07:35.273Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:07:35.274Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:35.499Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T05:07:35.500Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T05:07:35.500Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:35.503Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:35.504Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:35.506Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:07:35.506Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:35.507Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:35.515Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:37.016Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T05:07:37.016Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:07:37.016Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:37.212Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T05:07:37.213Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T05:07:37.213Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:37.216Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T05:07:37.216Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:37.216Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:37.218Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:07:37.218Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:37.219Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:37.228Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
[2026-01-25T05:07:37.228Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:41.730Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T05:07:41.730Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T05:07:41.730Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:07:41.731Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:42.097Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T05:07:42.097Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T05:07:42.098Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T05:07:42.098Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:42.102Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:42.103Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:42.106Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:07:42.106Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:42.106Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:42.117Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:43.619Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T05:07:43.619Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:07:43.620Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:43.799Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T05:07:43.800Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T05:07:43.800Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T05:07:43.800Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:43.803Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T05:07:43.804Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:43.804Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:43.806Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:07:43.806Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:43.807Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:43.816Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
[2026-01-25T05:07:43.817Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:45.319Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T05:07:45.319Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:07:45.319Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:45.540Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T05:07:45.540Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T05:07:45.541Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T05:07:45.541Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:45.544Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:45.544Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:45.547Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:07:45.547Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:45.547Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:45.555Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:47.056Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T05:07:47.056Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:07:47.056Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:47.386Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T05:07:47.387Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T05:07:47.387Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T05:07:47.387Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:47.390Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T05:07:47.391Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:47.391Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:47.393Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:07:47.394Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:47.394Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:47.403Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:48.905Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T05:07:48.905Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:07:48.905Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:49.114Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T05:07:49.114Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T05:07:49.115Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T05:07:49.115Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:49.119Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T05:07:49.119Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:49.119Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:49.121Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:07:49.121Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:49.122Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:49.131Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
[2026-01-25T05:07:49.131Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:53.632Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T05:07:53.633Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T05:07:53.633Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T05:07:53.633Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:07:53.917Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T05:07:53.917Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T05:07:53.918Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T05:07:53.918Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:07:53.921Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:07:53.922Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:07:53.924Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:07:53.924Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:07:53.924Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T05:07:53.932Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:07:58.434Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T05:07:58.436Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T05:07:58.537Z] [BOT] 📂 Loaded 8391 existing routing entries
[2026-01-25T05:07:58.641Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T05:07:58.642Z] [BOT] Total entries: 8401
   Timestamp: 2026-01-25T05:07:58.599Z
[2026-01-25T05:07:58.642Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T05:07:58.642Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T05:07:58.642Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T05:07:58.642Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T05:07:58.643Z] [BOT] [STATS] Channel stats saved
[2026-01-25T05:08:00.661Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*