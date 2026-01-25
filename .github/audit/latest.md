# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T16:59:35.122Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T16:59:03.524Z] ========================================
[2026-01-25T16:59:03.526Z] Discord Bot Execution Log
[2026-01-25T16:59:03.526Z] Environment: GitHub Actions
[2026-01-25T16:59:03.526Z] Node Version: v20.20.0
[2026-01-25T16:59:03.526Z] ========================================
[2026-01-25T16:59:03.526Z] Environment Variables Check:
[2026-01-25T16:59:03.526Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T16:59:03.526Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.526Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T16:59:03.526Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T16:59:03.526Z] 
Multi-Channel Configuration:
[2026-01-25T16:59:03.527Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.527Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.527Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.527Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.527Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.527Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.527Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.527Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.527Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T16:59:03.527Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T16:59:03.527Z] 
Data Files Check:
[2026-01-25T16:59:03.528Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T16:59:03.533Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 595944 bytes)
[2026-01-25T16:59:03.533Z] 
========================================
[2026-01-25T16:59:03.533Z] Starting Enhanced Discord Bot...
[2026-01-25T16:59:03.533Z] ========================================
[2026-01-25T16:59:03.985Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:59:04.671Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T16:59:04.671Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T16:59:04.672Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T16:59:04.827Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T16:59:04.831Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T16:59:04.831Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T16:59:04.831Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T16:59:04.832Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T16:59:04.832Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T16:59:04.833Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T16:59:04.836Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T16:59:04.836Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T16:59:04.836Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:59:04.837Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:04.853Z] [BOT ERROR] (node:3129) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T16:59:05.140Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T16:59:05.141Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T16:59:05.141Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T16:59:05.143Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:59:05.146Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:59:05.146Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:59:05.149Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:59:05.150Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T16:59:05.156Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-25T16:59:05.156Z] [BOT] ✅ Archiving complete: 1 archived, 1042 active
[2026-01-25T16:59:05.167Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:06.669Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:59:06.669Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:06.902Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T16:59:06.903Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T16:59:06.903Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T16:59:06.907Z] [BOT] ✅ Loaded V2 database: 1042 jobs
[2026-01-25T16:59:06.907Z] [BOT] 💾 DISK STATE: 1042 jobs on disk
[2026-01-25T16:59:06.907Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T16:59:06.909Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:59:06.909Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T16:59:06.910Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-25T16:59:06.917Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:08.417Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:59:08.417Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:08.803Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T16:59:08.803Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T16:59:08.804Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T16:59:08.804Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T16:59:08.808Z] [BOT] ✅ Loaded V2 database: 1042 jobs
💾 DISK STATE: 1042 jobs on disk
[2026-01-25T16:59:08.808Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T16:59:08.810Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:59:08.810Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T16:59:08.811Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-25T16:59:08.818Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:10.319Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:59:10.319Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:10.692Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T16:59:10.692Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T16:59:10.696Z] [BOT] ✅ Loaded V2 database: 1042 jobs
💾 DISK STATE: 1042 jobs on disk
[2026-01-25T16:59:10.696Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T16:59:10.698Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:59:10.698Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T16:59:10.699Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-25T16:59:10.708Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:15.209Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T16:59:15.209Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T16:59:15.209Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:59:15.210Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:15.657Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T16:59:15.657Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T16:59:15.657Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T16:59:15.662Z] [BOT] ✅ Loaded V2 database: 1042 jobs
[2026-01-25T16:59:15.662Z] [BOT] 💾 DISK STATE: 1042 jobs on disk
[2026-01-25T16:59:15.662Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T16:59:15.664Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:59:15.665Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T16:59:15.665Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-25T16:59:15.675Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:17.176Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T16:59:17.177Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:59:17.177Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:17.405Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T16:59:17.405Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T16:59:17.406Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T16:59:17.406Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T16:59:17.409Z] [BOT] ✅ Loaded V2 database: 1042 jobs
💾 DISK STATE: 1042 jobs on disk
[2026-01-25T16:59:17.409Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T16:59:17.411Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:59:17.412Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T16:59:17.412Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-25T16:59:17.421Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:18.922Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:59:18.922Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:19.136Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T16:59:19.136Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T16:59:19.136Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T16:59:19.136Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T16:59:19.140Z] [BOT] ✅ Loaded V2 database: 1042 jobs
[2026-01-25T16:59:19.140Z] [BOT] 💾 DISK STATE: 1042 jobs on disk
[2026-01-25T16:59:19.140Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T16:59:19.142Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:59:19.143Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T16:59:19.143Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-25T16:59:19.152Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:20.653Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:59:20.653Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:20.837Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T16:59:20.837Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T16:59:20.837Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T16:59:20.838Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T16:59:20.841Z] [BOT] ✅ Loaded V2 database: 1042 jobs
💾 DISK STATE: 1042 jobs on disk
[2026-01-25T16:59:20.841Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T16:59:20.843Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T16:59:20.844Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-25T16:59:20.851Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:22.353Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T16:59:22.353Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:59:22.353Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:22.621Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T16:59:22.621Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T16:59:22.622Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T16:59:22.622Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T16:59:22.627Z] [BOT] ✅ Loaded V2 database: 1042 jobs
[2026-01-25T16:59:22.628Z] [BOT] 💾 DISK STATE: 1042 jobs on disk
[2026-01-25T16:59:22.628Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T16:59:22.631Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:59:22.632Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T16:59:22.632Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-25T16:59:22.642Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:27.145Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T16:59:27.145Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T16:59:27.145Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T16:59:27.146Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:59:27.584Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T16:59:27.585Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T16:59:27.585Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T16:59:27.585Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T16:59:27.589Z] [BOT] ✅ Loaded V2 database: 1042 jobs
💾 DISK STATE: 1042 jobs on disk
[2026-01-25T16:59:27.589Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T16:59:27.591Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:59:27.591Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T16:59:27.591Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-25T16:59:27.599Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:59:32.102Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T16:59:32.103Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T16:59:32.208Z] [BOT] 📂 Loaded 8841 existing routing entries
[2026-01-25T16:59:32.312Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8851
   Timestamp: 2026-01-25T16:59:32.277Z
[2026-01-25T16:59:32.313Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-25T16:59:32.313Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-25T16:59:32.313Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T16:59:32.313Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T16:59:32.313Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T16:59:32.313Z] [BOT] [STATS] Channel stats saved
[2026-01-25T16:59:34.325Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3129) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*