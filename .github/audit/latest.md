# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T09:56:02.276Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T09:55:30.642Z] ========================================
[2026-01-25T09:55:30.644Z] Discord Bot Execution Log
[2026-01-25T09:55:30.644Z] Environment: GitHub Actions
[2026-01-25T09:55:30.644Z] Node Version: v20.20.0
[2026-01-25T09:55:30.644Z] ========================================
[2026-01-25T09:55:30.644Z] Environment Variables Check:
[2026-01-25T09:55:30.644Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T09:55:30.644Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T09:55:30.645Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T09:55:30.645Z] 
Multi-Channel Configuration:
[2026-01-25T09:55:30.645Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T09:55:30.645Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T09:55:30.646Z] 
Data Files Check:
[2026-01-25T09:55:30.647Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T09:55:30.651Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 600415 bytes)
[2026-01-25T09:55:30.651Z] 
========================================
[2026-01-25T09:55:30.651Z] Starting Enhanced Discord Bot...
[2026-01-25T09:55:30.651Z] ========================================
[2026-01-25T09:55:31.195Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:55:31.790Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T09:55:31.791Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T09:55:31.791Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T09:55:31.908Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T09:55:31.912Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T09:55:31.912Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T09:55:31.912Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T09:55:31.913Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T09:55:31.914Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T09:55:31.914Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T09:55:31.914Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T09:55:31.917Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T09:55:31.918Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T09:55:31.918Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:55:31.919Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:31.936Z] [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T09:55:32.161Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T09:55:32.162Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T09:55:32.162Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T09:55:32.163Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:32.166Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:55:32.166Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:32.167Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:32.169Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:32.169Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:32.170Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:32.182Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:33.683Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T09:55:33.684Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:55:33.684Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:33.870Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T09:55:33.870Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T09:55:33.870Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T09:55:33.871Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:33.874Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:55:33.874Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:33.874Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:33.876Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:33.876Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:33.877Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:33.885Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:55:33.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:35.386Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T09:55:35.386Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:55:35.386Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:35.673Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T09:55:35.673Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T09:55:35.673Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T09:55:35.673Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:35.677Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:35.677Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:35.680Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:35.680Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:35.681Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:35.688Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:37.189Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:55:37.189Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:37.626Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T09:55:37.627Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T09:55:37.627Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T09:55:37.627Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:37.631Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:37.631Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:37.633Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:37.633Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:37.633Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:37.642Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:42.145Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T09:55:42.146Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T09:55:42.146Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:55:42.146Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:42.373Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T09:55:42.374Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T09:55:42.374Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:42.378Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:42.379Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:42.381Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:42.382Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:42.382Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:42.392Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:55:42.392Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:43.893Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T09:55:43.893Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:55:43.893Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:44.112Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T09:55:44.112Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T09:55:44.113Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:44.116Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:55:44.116Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:44.116Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:44.119Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:44.119Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:44.120Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:44.129Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:45.629Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T09:55:45.630Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:45.805Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T09:55:45.806Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T09:55:45.806Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T09:55:45.806Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:45.809Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:45.810Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:45.812Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:45.812Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:45.813Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:45.821Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:47.323Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T09:55:47.323Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:55:47.323Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:47.531Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T09:55:47.531Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T09:55:47.532Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T09:55:47.532Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:47.535Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:55:47.535Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:47.536Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:47.538Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:47.538Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:47.538Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:47.546Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:49.047Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T09:55:49.048Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:55:49.048Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:49.289Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T09:55:49.290Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T09:55:49.290Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T09:55:49.290Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:49.294Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:49.294Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:49.296Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:49.296Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:49.297Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:49.305Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:53.807Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T09:55:53.807Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T09:55:53.808Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T09:55:53.808Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:55:54.164Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T09:55:54.164Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T09:55:54.165Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T09:55:54.165Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:55:54.168Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:55:54.168Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:55:54.170Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:55:54.170Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:55:54.171Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:55:54.179Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:55:58.681Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T09:55:58.682Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T09:55:58.776Z] [BOT] 📂 Loaded 8581 existing routing entries
[2026-01-25T09:55:58.886Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T09:55:58.887Z] [BOT] Total entries: 8591
   Timestamp: 2026-01-25T09:55:58.845Z
[2026-01-25T09:55:58.887Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T09:55:58.887Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T09:55:58.887Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T09:55:58.887Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T09:55:58.888Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T09:55:58.888Z] [BOT] [STATS] Channel stats saved
[2026-01-25T09:56:00.905Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*