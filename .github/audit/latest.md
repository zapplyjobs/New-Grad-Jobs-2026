# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T04:53:33.819Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T04:53:02.949Z] ========================================
[2026-01-25T04:53:02.951Z] Discord Bot Execution Log
[2026-01-25T04:53:02.951Z] Environment: GitHub Actions
[2026-01-25T04:53:02.951Z] Node Version: v20.20.0
[2026-01-25T04:53:02.951Z] ========================================
[2026-01-25T04:53:02.951Z] Environment Variables Check:
[2026-01-25T04:53:02.951Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T04:53:02.951Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.951Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T04:53:02.951Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T04:53:02.951Z] 
Multi-Channel Configuration:
[2026-01-25T04:53:02.952Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.952Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.952Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.952Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.952Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.952Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.952Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.952Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.952Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T04:53:02.952Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T04:53:02.952Z] 
Data Files Check:
[2026-01-25T04:53:02.953Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T04:53:02.958Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 636593 bytes)
[2026-01-25T04:53:02.958Z] 
========================================
[2026-01-25T04:53:02.958Z] Starting Enhanced Discord Bot...
[2026-01-25T04:53:02.958Z] ========================================
[2026-01-25T04:53:03.481Z] [BOT] ✅ Loaded V2 database: 1117 jobs
[2026-01-25T04:53:04.216Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T04:53:04.217Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T04:53:04.217Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T04:53:04.338Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T04:53:04.342Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T04:53:04.342Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T04:53:04.342Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T04:53:04.344Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T04:53:04.344Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T04:53:04.344Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T04:53:04.347Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T04:53:04.348Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T04:53:04.348Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:53:04.349Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:04.366Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T04:53:04.642Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T04:53:04.643Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T04:53:04.643Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:53:04.647Z] [BOT] ✅ Loaded V2 database: 1117 jobs
[2026-01-25T04:53:04.647Z] [BOT] 💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:53:04.648Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1117
[2026-01-25T04:53:04.650Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:53:04.650Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:53:04.652Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T04:53:04.657Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
[2026-01-25T04:53:04.657Z] [BOT] ✅ Archiving complete: 4 archived, 1113 active
[2026-01-25T04:53:04.668Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:06.170Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:53:06.171Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:06.371Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T04:53:06.372Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T04:53:06.375Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T04:53:06.376Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T04:53:06.378Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:53:06.378Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T04:53:06.379Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T04:53:06.386Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:07.886Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:53:07.887Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:08.113Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T04:53:08.114Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T04:53:08.117Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T04:53:08.117Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T04:53:08.119Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T04:53:08.120Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T04:53:08.128Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:09.629Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:53:09.630Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:09.777Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T04:53:09.778Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T04:53:09.778Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T04:53:09.781Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T04:53:09.782Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T04:53:09.783Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:53:09.784Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T04:53:09.784Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T04:53:09.794Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
[2026-01-25T04:53:09.794Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:14.295Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T04:53:14.295Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T04:53:14.295Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:53:14.296Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:14.618Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T04:53:14.618Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T04:53:14.619Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T04:53:14.619Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T04:53:14.623Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T04:53:14.623Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T04:53:14.624Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T04:53:14.626Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:53:14.627Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T04:53:14.627Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T04:53:14.637Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:16.139Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T04:53:16.139Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:53:16.139Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:16.288Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T04:53:16.288Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T04:53:16.289Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T04:53:16.292Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T04:53:16.292Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T04:53:16.294Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T04:53:16.296Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T04:53:16.304Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
[2026-01-25T04:53:16.304Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:17.805Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T04:53:17.805Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:53:17.806Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:18.029Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T04:53:18.029Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T04:53:18.030Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T04:53:18.030Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T04:53:18.033Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-25T04:53:18.034Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T04:53:18.036Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:53:18.036Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T04:53:18.037Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T04:53:18.045Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:19.546Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T04:53:19.546Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:53:19.546Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:19.693Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T04:53:19.693Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T04:53:19.694Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T04:53:19.694Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T04:53:19.697Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T04:53:19.697Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T04:53:19.697Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T04:53:19.700Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T04:53:19.700Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T04:53:19.708Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
[2026-01-25T04:53:19.708Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:21.210Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T04:53:21.210Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:53:21.210Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:21.388Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T04:53:21.388Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T04:53:21.389Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T04:53:21.389Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T04:53:21.393Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T04:53:21.393Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T04:53:21.393Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T04:53:21.396Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T04:53:21.397Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T04:53:21.405Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:25.907Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T04:53:25.908Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T04:53:25.908Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T04:53:25.908Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:53:26.145Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T04:53:26.145Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T04:53:26.145Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T04:53:26.145Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T04:53:26.149Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T04:53:26.149Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T04:53:26.149Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T04:53:26.151Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:53:26.151Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T04:53:26.151Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-25T04:53:26.159Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
[2026-01-25T04:53:26.160Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:53:30.662Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T04:53:30.664Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T04:53:30.755Z] [BOT] 📂 Loaded 8381 existing routing entries
[2026-01-25T04:53:30.862Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T04:53:30.862Z] [BOT] Total entries: 8391
   Timestamp: 2026-01-25T04:53:30.823Z
[2026-01-25T04:53:30.863Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T04:53:30.863Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T04:53:30.863Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T04:53:30.863Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T04:53:30.863Z] [BOT] [STATS] Channel stats saved
[2026-01-25T04:53:32.882Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*