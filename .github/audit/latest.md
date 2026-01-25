# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T06:31:57.330Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T06:31:26.602Z] ========================================
[2026-01-25T06:31:26.603Z] Discord Bot Execution Log
[2026-01-25T06:31:26.604Z] Environment: GitHub Actions
[2026-01-25T06:31:26.604Z] Node Version: v20.20.0
[2026-01-25T06:31:26.604Z] ========================================
[2026-01-25T06:31:26.604Z] Environment Variables Check:
[2026-01-25T06:31:26.604Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T06:31:26.604Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.604Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T06:31:26.604Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T06:31:26.604Z] 
Multi-Channel Configuration:
[2026-01-25T06:31:26.604Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.605Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.605Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.605Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.605Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.605Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.605Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.605Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.605Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T06:31:26.605Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T06:31:26.605Z] 
Data Files Check:
[2026-01-25T06:31:26.606Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T06:31:26.611Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 628196 bytes)
[2026-01-25T06:31:26.611Z] 
========================================
[2026-01-25T06:31:26.611Z] Starting Enhanced Discord Bot...
[2026-01-25T06:31:26.611Z] ========================================
[2026-01-25T06:31:27.167Z] [BOT] ✅ Loaded V2 database: 1101 jobs
[2026-01-25T06:31:27.567Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T06:31:27.568Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T06:31:27.568Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T06:31:27.688Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T06:31:27.692Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T06:31:27.692Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T06:31:27.692Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T06:31:27.693Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T06:31:27.694Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T06:31:27.694Z] [BOT] 📍 2 jobs with multiple locations:
[2026-01-25T06:31:27.694Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T06:31:27.697Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T06:31:27.698Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T06:31:27.698Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T06:31:27.699Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:27.715Z] [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T06:31:28.021Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T06:31:28.022Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T06:31:28.022Z] [BOT] 💾 BEFORE MERGE: 1101 jobs in memory
[2026-01-25T06:31:28.026Z] [BOT] ✅ Loaded V2 database: 1101 jobs
[2026-01-25T06:31:28.026Z] [BOT] 💾 DISK STATE: 1101 jobs on disk
[2026-01-25T06:31:28.027Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1101
[2026-01-25T06:31:28.029Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:28.029Z] [BOT] 💾 AFTER MERGE: 1101 jobs (merged disk + memory)
[2026-01-25T06:31:28.030Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T06:31:28.037Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-25T06:31:28.038Z] [BOT] ✅ Archiving complete: 2 archived, 1099 active
[2026-01-25T06:31:28.047Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:29.550Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T06:31:29.550Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:29.851Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T06:31:29.852Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T06:31:29.852Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:31:29.855Z] [BOT] ✅ Loaded V2 database: 1099 jobs
[2026-01-25T06:31:29.855Z] [BOT] 💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:31:29.856Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:31:29.858Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:29.858Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:31:29.858Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-25T06:31:29.866Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:31.367Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T06:31:31.367Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:31.627Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T06:31:31.627Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T06:31:31.628Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T06:31:31.628Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:31:31.631Z] [BOT] ✅ Loaded V2 database: 1099 jobs
💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:31:31.631Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:31:31.634Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:31.634Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:31:31.635Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-25T06:31:31.642Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
[2026-01-25T06:31:31.642Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:33.143Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T06:31:33.143Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T06:31:33.143Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:33.349Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T06:31:33.350Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T06:31:33.350Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:31:33.353Z] [BOT] ✅ Loaded V2 database: 1099 jobs
💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:31:33.353Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:31:33.355Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:33.355Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:31:33.356Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-25T06:31:33.366Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
[2026-01-25T06:31:33.366Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:37.868Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T06:31:37.869Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T06:31:37.869Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:31:37.869Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:38.136Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T06:31:38.137Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T06:31:38.137Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:31:38.142Z] [BOT] ✅ Loaded V2 database: 1099 jobs
💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:31:38.142Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:31:38.145Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:38.145Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:31:38.145Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-25T06:31:38.155Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
[2026-01-25T06:31:38.156Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:39.657Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T06:31:39.658Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:31:39.658Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:39.900Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T06:31:39.900Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T06:31:39.900Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:31:39.904Z] [BOT] ✅ Loaded V2 database: 1099 jobs
💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:31:39.904Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:31:39.906Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:39.906Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:31:39.907Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-25T06:31:39.916Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:41.417Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T06:31:41.417Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:31:41.418Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:41.562Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T06:31:41.562Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T06:31:41.562Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T06:31:41.562Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:31:41.566Z] [BOT] ✅ Loaded V2 database: 1099 jobs
[2026-01-25T06:31:41.566Z] [BOT] 💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:31:41.567Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:31:41.569Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:41.569Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:31:41.570Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-25T06:31:41.579Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
[2026-01-25T06:31:41.580Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:43.080Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T06:31:43.080Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:31:43.080Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:43.268Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T06:31:43.269Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T06:31:43.269Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:31:43.272Z] [BOT] ✅ Loaded V2 database: 1099 jobs
💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:31:43.273Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:31:43.275Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:43.275Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:31:43.276Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-25T06:31:43.283Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
[2026-01-25T06:31:43.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:44.785Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T06:31:44.785Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:31:44.785Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:44.935Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T06:31:44.935Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T06:31:44.936Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T06:31:44.936Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:31:44.939Z] [BOT] ✅ Loaded V2 database: 1099 jobs
[2026-01-25T06:31:44.940Z] [BOT] 💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:31:44.940Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:31:44.942Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:44.942Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:31:44.944Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-25T06:31:44.952Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:49.454Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T06:31:49.454Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T06:31:49.454Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T06:31:49.455Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:31:49.665Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T06:31:49.666Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T06:31:49.666Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:31:49.669Z] [BOT] ✅ Loaded V2 database: 1099 jobs
💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:31:49.670Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:31:49.672Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:31:49.672Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:31:49.672Z] [BOT] ✅ No jobs to archive (all 1099 jobs within 7-day window)
[2026-01-25T06:31:49.681Z] [BOT] 💾 Saved posted_jobs.json: 1099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:31:54.184Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T06:31:54.186Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T06:31:54.281Z] [BOT] 📂 Loaded 8451 existing routing entries
[2026-01-25T06:31:54.392Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T06:31:54.392Z] [BOT] Total entries: 8461
   Timestamp: 2026-01-25T06:31:54.351Z
[2026-01-25T06:31:54.392Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T06:31:54.393Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T06:31:54.393Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T06:31:54.393Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T06:31:54.393Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T06:31:54.393Z] [BOT] [STATS] Channel stats saved
[2026-01-25T06:31:56.410Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*