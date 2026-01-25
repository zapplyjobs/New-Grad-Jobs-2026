# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T12:54:45.380Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T12:54:13.833Z] ========================================
[2026-01-25T12:54:13.835Z] Discord Bot Execution Log
[2026-01-25T12:54:13.835Z] Environment: GitHub Actions
[2026-01-25T12:54:13.835Z] Node Version: v20.20.0
[2026-01-25T12:54:13.836Z] ========================================
[2026-01-25T12:54:13.836Z] Environment Variables Check:
[2026-01-25T12:54:13.836Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T12:54:13.836Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.836Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T12:54:13.836Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T12:54:13.836Z] 
Multi-Channel Configuration:
[2026-01-25T12:54:13.836Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.836Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.836Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.837Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.837Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.837Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.837Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.837Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.837Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T12:54:13.837Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T12:54:13.837Z] 
Data Files Check:
[2026-01-25T12:54:13.838Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T12:54:13.842Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T12:54:13.843Z] 
========================================
[2026-01-25T12:54:13.843Z] Starting Enhanced Discord Bot...
[2026-01-25T12:54:13.843Z] ========================================
[2026-01-25T12:54:14.363Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:54:14.911Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T12:54:14.911Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T12:54:14.912Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T12:54:15.030Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T12:54:15.034Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T12:54:15.035Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T12:54:15.035Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T12:54:15.036Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T12:54:15.036Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T12:54:15.036Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T12:54:15.036Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T12:54:15.040Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T12:54:15.040Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T12:54:15.040Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:54:15.041Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:15.058Z] [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T12:54:15.281Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T12:54:15.281Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T12:54:15.282Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T12:54:15.282Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:15.286Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:54:15.286Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:15.286Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:15.289Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:15.289Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:15.289Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:15.302Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:16.805Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T12:54:16.805Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:54:16.805Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:17.093Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T12:54:17.093Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T12:54:17.093Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:17.096Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:54:17.097Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:17.097Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:17.099Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:17.099Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:17.100Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:17.108Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:18.609Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T12:54:18.609Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:54:18.610Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:18.858Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T12:54:18.858Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T12:54:18.858Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T12:54:18.859Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:18.862Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:18.862Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:18.864Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:18.864Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:18.865Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:18.873Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:20.373Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:54:20.374Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:20.667Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T12:54:20.668Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T12:54:20.668Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:20.671Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:20.671Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:20.673Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:20.673Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:20.674Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:20.684Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:25.185Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T12:54:25.186Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T12:54:25.186Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:54:25.187Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:25.397Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T12:54:25.397Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T12:54:25.398Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T12:54:25.398Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:25.402Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:25.402Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:25.405Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:25.405Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:25.405Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:25.415Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:26.917Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T12:54:26.917Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:54:26.917Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:27.248Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T12:54:27.249Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T12:54:27.249Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:27.252Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:27.253Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:27.255Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:27.255Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:27.256Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:27.265Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:28.765Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T12:54:28.766Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:29.019Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T12:54:29.019Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T12:54:29.020Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:29.023Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:29.023Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:29.026Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:29.026Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:29.027Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:29.037Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:54:29.037Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:30.539Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T12:54:30.539Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:30.820Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T12:54:30.820Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T12:54:30.820Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:30.824Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:30.824Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:30.826Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:30.826Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:30.827Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:30.834Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:32.336Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T12:54:32.336Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:54:32.336Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:32.581Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T12:54:32.581Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T12:54:32.582Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T12:54:32.582Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:32.585Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:32.586Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:32.588Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:32.588Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:32.589Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:32.597Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:54:32.597Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:37.099Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T12:54:37.100Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T12:54:37.100Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T12:54:37.100Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:54:37.323Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T12:54:37.323Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T12:54:37.323Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:54:37.326Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:54:37.327Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:54:37.327Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:54:37.329Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:54:37.329Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:54:37.329Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:54:37.337Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:54:41.840Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T12:54:41.842Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T12:54:41.934Z] [BOT] 📂 Loaded 8691 existing routing entries
[2026-01-25T12:54:42.044Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8701
[2026-01-25T12:54:42.044Z] [BOT] Timestamp: 2026-01-25T12:54:42.004Z
[2026-01-25T12:54:42.045Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T12:54:42.045Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T12:54:42.045Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T12:54:42.045Z] [BOT] Last cleanup: Never
[2026-01-25T12:54:42.045Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T12:54:42.045Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T12:54:42.046Z] [BOT] [STATS] Channel stats saved
[2026-01-25T12:54:44.064Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*