# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T08:59:43.394Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T08:59:10.811Z] ========================================
[2026-01-25T08:59:10.813Z] Discord Bot Execution Log
[2026-01-25T08:59:10.813Z] Environment: GitHub Actions
[2026-01-25T08:59:10.813Z] Node Version: v20.20.0
[2026-01-25T08:59:10.813Z] ========================================
[2026-01-25T08:59:10.813Z] Environment Variables Check:
[2026-01-25T08:59:10.813Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T08:59:10.814Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.814Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T08:59:10.814Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T08:59:10.814Z] 
Multi-Channel Configuration:
[2026-01-25T08:59:10.814Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.814Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.814Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.814Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.814Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.814Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.814Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.815Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.815Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T08:59:10.815Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T08:59:10.815Z] 
Data Files Check:
[2026-01-25T08:59:10.816Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T08:59:10.820Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 607493 bytes)
[2026-01-25T08:59:10.820Z] 
========================================
[2026-01-25T08:59:10.820Z] Starting Enhanced Discord Bot...
[2026-01-25T08:59:10.820Z] ========================================
[2026-01-25T08:59:11.354Z] [BOT] ✅ Loaded V2 database: 1065 jobs
[2026-01-25T08:59:11.912Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T08:59:11.912Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T08:59:11.913Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T08:59:12.031Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T08:59:12.035Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T08:59:12.035Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T08:59:12.036Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T08:59:12.037Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T08:59:12.037Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T08:59:12.037Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-25T08:59:12.037Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T08:59:12.041Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T08:59:12.041Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T08:59:12.041Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:59:12.042Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:12.059Z] [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T08:59:12.407Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T08:59:12.408Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T08:59:12.408Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T08:59:12.409Z] [BOT] 💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:59:12.412Z] [BOT] ✅ Loaded V2 database: 1065 jobs
[2026-01-25T08:59:12.413Z] [BOT] 💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:59:12.413Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:59:12.415Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:59:12.415Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:59:12.416Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T08:59:12.422Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-25T08:59:12.422Z] [BOT] ✅ Archiving complete: 6 archived, 1059 active
[2026-01-25T08:59:12.431Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
[2026-01-25T08:59:12.431Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:13.933Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:59:13.933Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:14.121Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T08:59:14.121Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T08:59:14.121Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T08:59:14.125Z] [BOT] ✅ Loaded V2 database: 1059 jobs
💾 DISK STATE: 1059 jobs on disk
[2026-01-25T08:59:14.125Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T08:59:14.127Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T08:59:14.128Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-25T08:59:14.135Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
[2026-01-25T08:59:14.135Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:15.636Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T08:59:15.637Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:59:15.637Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:15.933Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T08:59:15.934Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T08:59:15.934Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T08:59:15.938Z] [BOT] ✅ Loaded V2 database: 1059 jobs
💾 DISK STATE: 1059 jobs on disk
[2026-01-25T08:59:15.938Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T08:59:15.940Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:59:15.940Z] [BOT] 💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T08:59:15.941Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-25T08:59:15.949Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:17.450Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T08:59:17.450Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:59:17.450Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:17.737Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T08:59:17.738Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T08:59:17.738Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T08:59:17.741Z] [BOT] ✅ Loaded V2 database: 1059 jobs
💾 DISK STATE: 1059 jobs on disk
[2026-01-25T08:59:17.742Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T08:59:17.744Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T08:59:17.744Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-25T08:59:17.754Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:22.256Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T08:59:22.256Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T08:59:22.256Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:59:22.257Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:22.837Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T08:59:22.837Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T08:59:22.838Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T08:59:22.838Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T08:59:22.842Z] [BOT] ✅ Loaded V2 database: 1059 jobs
💾 DISK STATE: 1059 jobs on disk
[2026-01-25T08:59:22.842Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T08:59:22.846Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:59:22.846Z] [BOT] 💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T08:59:22.847Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-25T08:59:22.854Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
[2026-01-25T08:59:22.855Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:24.356Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T08:59:24.357Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:59:24.357Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:24.567Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T08:59:24.568Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T08:59:24.568Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T08:59:24.572Z] [BOT] ✅ Loaded V2 database: 1059 jobs
[2026-01-25T08:59:24.572Z] [BOT] 💾 DISK STATE: 1059 jobs on disk
[2026-01-25T08:59:24.572Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T08:59:24.574Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:59:24.574Z] [BOT] 💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T08:59:24.575Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-25T08:59:24.584Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
[2026-01-25T08:59:24.584Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:26.085Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T08:59:26.085Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:59:26.085Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:26.643Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T08:59:26.643Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T08:59:26.643Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T08:59:26.644Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T08:59:26.647Z] [BOT] ✅ Loaded V2 database: 1059 jobs
💾 DISK STATE: 1059 jobs on disk
[2026-01-25T08:59:26.647Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T08:59:26.650Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:59:26.650Z] [BOT] 💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T08:59:26.651Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-25T08:59:26.659Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:28.160Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T08:59:28.160Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:59:28.161Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:28.529Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T08:59:28.529Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T08:59:28.529Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T08:59:28.533Z] [BOT] ✅ Loaded V2 database: 1059 jobs
[2026-01-25T08:59:28.533Z] [BOT] 💾 DISK STATE: 1059 jobs on disk
[2026-01-25T08:59:28.533Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T08:59:28.535Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:59:28.535Z] [BOT] 💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T08:59:28.535Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-25T08:59:28.542Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:30.044Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T08:59:30.044Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:59:30.044Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:30.439Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T08:59:30.439Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T08:59:30.439Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T08:59:30.439Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T08:59:30.443Z] [BOT] ✅ Loaded V2 database: 1059 jobs
💾 DISK STATE: 1059 jobs on disk
[2026-01-25T08:59:30.443Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T08:59:30.445Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:59:30.445Z] [BOT] 💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T08:59:30.446Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-25T08:59:30.454Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:34.955Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T08:59:34.956Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T08:59:34.957Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:59:35.331Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T08:59:35.331Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T08:59:35.332Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T08:59:35.332Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory
[2026-01-25T08:59:35.335Z] [BOT] ✅ Loaded V2 database: 1059 jobs
💾 DISK STATE: 1059 jobs on disk
[2026-01-25T08:59:35.336Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1059
[2026-01-25T08:59:35.338Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:59:35.338Z] [BOT] 💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-25T08:59:35.339Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-25T08:59:35.347Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
[2026-01-25T08:59:35.347Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:59:39.850Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T08:59:39.851Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T08:59:39.944Z] [BOT] 📂 Loaded 8541 existing routing entries
[2026-01-25T08:59:40.065Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T08:59:40.066Z] [BOT] Total entries: 8551
   Timestamp: 2026-01-25T08:59:40.023Z
[2026-01-25T08:59:40.066Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T08:59:40.066Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T08:59:40.067Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T08:59:40.067Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T08:59:40.067Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T08:59:40.067Z] [BOT] [STATS] Channel stats saved
[2026-01-25T08:59:42.083Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2477) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*