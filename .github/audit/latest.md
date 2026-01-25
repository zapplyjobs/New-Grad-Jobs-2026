# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T17:43:48.510Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T17:43:17.199Z] ========================================
[2026-01-25T17:43:17.201Z] Discord Bot Execution Log
[2026-01-25T17:43:17.201Z] Environment: GitHub Actions
[2026-01-25T17:43:17.201Z] Node Version: v20.20.0
[2026-01-25T17:43:17.201Z] ========================================
[2026-01-25T17:43:17.201Z] Environment Variables Check:
[2026-01-25T17:43:17.201Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T17:43:17.201Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.202Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T17:43:17.202Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T17:43:17.202Z] 
Multi-Channel Configuration:
[2026-01-25T17:43:17.202Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.202Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.202Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.202Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.202Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.202Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.202Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.202Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.202Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T17:43:17.203Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T17:43:17.203Z] 
Data Files Check:
[2026-01-25T17:43:17.204Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T17:43:17.209Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594003 bytes)
[2026-01-25T17:43:17.209Z] 
========================================
[2026-01-25T17:43:17.209Z] Starting Enhanced Discord Bot...
[2026-01-25T17:43:17.209Z] ========================================
[2026-01-25T17:43:17.761Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:43:18.399Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T17:43:18.400Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T17:43:18.400Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T17:43:18.519Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[2026-01-25T17:43:18.521Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T17:43:18.527Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T17:43:18.527Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T17:43:18.528Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T17:43:18.529Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T17:43:18.529Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T17:43:18.530Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T17:43:18.535Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T17:43:18.535Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T17:43:18.536Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:43:18.536Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:18.565Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T17:43:18.892Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T17:43:18.892Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T17:43:18.893Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T17:43:18.893Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:18.896Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:43:18.897Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:18.897Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:18.899Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:43:18.899Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:18.900Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:18.912Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:20.415Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:43:20.415Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:20.580Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T17:43:20.580Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:20.583Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:43:20.583Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:20.584Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:20.586Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:43:20.586Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:20.586Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:20.594Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:22.094Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T17:43:22.095Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:43:22.095Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:22.289Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T17:43:22.290Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T17:43:22.290Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:22.293Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:22.293Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:22.295Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:43:22.295Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:22.296Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:22.303Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:23.804Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:43:23.804Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:24.010Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T17:43:24.011Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T17:43:24.011Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:24.014Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:24.015Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:24.017Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:43:24.017Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:24.017Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:24.027Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:43:24.027Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:28.529Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T17:43:28.530Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T17:43:28.530Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:43:28.530Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:28.880Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T17:43:28.881Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T17:43:28.881Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:28.885Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:43:28.885Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:28.886Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:28.888Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:43:28.888Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:28.889Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:28.899Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:30.401Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T17:43:30.401Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:43:30.401Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:30.732Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T17:43:30.733Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:30.736Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:30.736Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:30.739Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:43:30.739Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:30.739Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:30.748Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:43:30.748Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:32.250Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T17:43:32.250Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:32.488Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T17:43:32.488Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T17:43:32.488Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T17:43:32.489Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:32.492Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:43:32.492Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:32.492Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:32.495Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:43:32.495Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:32.495Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:32.504Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:43:32.504Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:34.006Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T17:43:34.006Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:43:34.006Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:34.210Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T17:43:34.210Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T17:43:34.210Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T17:43:34.211Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:34.214Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:43:34.214Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:34.214Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:34.216Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:43:34.217Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:34.217Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:34.224Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:35.726Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T17:43:35.726Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:43:35.726Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:35.895Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T17:43:35.895Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T17:43:35.895Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T17:43:35.895Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:35.899Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:43:35.899Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:35.899Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:35.901Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:43:35.902Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:35.902Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:35.910Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:43:35.910Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:40.411Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T17:43:40.412Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T17:43:40.412Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T17:43:40.412Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:43:40.914Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T17:43:40.915Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T17:43:40.915Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:43:40.918Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:43:40.918Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:43:40.920Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:43:40.921Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:43:40.929Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:43:40.929Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:43:45.432Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T17:43:45.434Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T17:43:45.526Z] [BOT] 📂 Loaded 8871 existing routing entries
[2026-01-25T17:43:45.637Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T17:43:45.638Z] [BOT] Total entries: 8881
   Timestamp: 2026-01-25T17:43:45.595Z
[2026-01-25T17:43:45.638Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T17:43:45.638Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T17:43:45.639Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T17:43:47.657Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*