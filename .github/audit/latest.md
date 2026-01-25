# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T06:51:50.134Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T06:51:20.175Z] ========================================
[2026-01-25T06:51:20.177Z] Discord Bot Execution Log
[2026-01-25T06:51:20.177Z] Environment: GitHub Actions
[2026-01-25T06:51:20.177Z] Node Version: v20.20.0
[2026-01-25T06:51:20.178Z] ========================================
[2026-01-25T06:51:20.178Z] Environment Variables Check:
[2026-01-25T06:51:20.178Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T06:51:20.178Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.178Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T06:51:20.178Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T06:51:20.178Z] 
Multi-Channel Configuration:
[2026-01-25T06:51:20.178Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.178Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.178Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.179Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.179Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.179Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.179Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.179Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.179Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T06:51:20.179Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T06:51:20.179Z] 
Data Files Check:
[2026-01-25T06:51:20.180Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T06:51:20.185Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 627279 bytes)
[2026-01-25T06:51:20.185Z] 
========================================
[2026-01-25T06:51:20.185Z] Starting Enhanced Discord Bot...
[2026-01-25T06:51:20.185Z] ========================================
[2026-01-25T06:51:20.711Z] [BOT] ✅ Loaded V2 database: 1099 jobs
[2026-01-25T06:51:21.214Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T06:51:21.214Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T06:51:21.214Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T06:51:21.336Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T06:51:21.339Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T06:51:21.340Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T06:51:21.340Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T06:51:21.341Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T06:51:21.341Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T06:51:21.341Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T06:51:21.342Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T06:51:21.345Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T06:51:21.345Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T06:51:21.346Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T06:51:21.346Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:21.363Z] [BOT ERROR] (node:2531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T06:51:21.513Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T06:51:21.514Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T06:51:21.514Z] [BOT] 💾 BEFORE MERGE: 1099 jobs in memory
[2026-01-25T06:51:21.518Z] [BOT] ✅ Loaded V2 database: 1099 jobs
[2026-01-25T06:51:21.518Z] [BOT] 💾 DISK STATE: 1099 jobs on disk
[2026-01-25T06:51:21.518Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1099
[2026-01-25T06:51:21.520Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:51:21.521Z] [BOT] 💾 AFTER MERGE: 1099 jobs (merged disk + memory)
[2026-01-25T06:51:21.522Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T06:51:21.527Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-25T06:51:21.527Z] [BOT] ✅ Archiving complete: 7 archived, 1092 active
[2026-01-25T06:51:21.536Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
[2026-01-25T06:51:21.536Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:23.039Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T06:51:23.039Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:23.192Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T06:51:23.192Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T06:51:23.193Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T06:51:23.193Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T06:51:23.196Z] [BOT] ✅ Loaded V2 database: 1092 jobs
💾 DISK STATE: 1092 jobs on disk
[2026-01-25T06:51:23.196Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T06:51:23.198Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T06:51:23.199Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-25T06:51:23.206Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
[2026-01-25T06:51:23.206Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:24.708Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T06:51:24.709Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:24.932Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T06:51:24.932Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T06:51:24.932Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T06:51:24.933Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T06:51:24.936Z] [BOT] ✅ Loaded V2 database: 1092 jobs
[2026-01-25T06:51:24.936Z] [BOT] 💾 DISK STATE: 1092 jobs on disk
[2026-01-25T06:51:24.937Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T06:51:24.938Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:51:24.938Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T06:51:24.940Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-25T06:51:24.947Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
[2026-01-25T06:51:24.947Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:26.448Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T06:51:26.449Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:26.586Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T06:51:26.586Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T06:51:26.587Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T06:51:26.587Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T06:51:26.590Z] [BOT] ✅ Loaded V2 database: 1092 jobs
[2026-01-25T06:51:26.591Z] [BOT] 💾 DISK STATE: 1092 jobs on disk
[2026-01-25T06:51:26.591Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T06:51:26.593Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:51:26.593Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T06:51:26.593Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-25T06:51:26.603Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:31.106Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T06:51:31.106Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T06:51:31.106Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:51:31.107Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:31.333Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T06:51:31.333Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T06:51:31.334Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T06:51:31.334Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T06:51:31.338Z] [BOT] ✅ Loaded V2 database: 1092 jobs
[2026-01-25T06:51:31.339Z] [BOT] 💾 DISK STATE: 1092 jobs on disk
[2026-01-25T06:51:31.339Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T06:51:31.342Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:51:31.342Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T06:51:31.342Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-25T06:51:31.352Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:32.853Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T06:51:32.853Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:51:32.854Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:33.016Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T06:51:33.016Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T06:51:33.016Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T06:51:33.020Z] [BOT] ✅ Loaded V2 database: 1092 jobs
💾 DISK STATE: 1092 jobs on disk
[2026-01-25T06:51:33.020Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T06:51:33.023Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:51:33.023Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T06:51:33.024Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-25T06:51:33.033Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:34.535Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T06:51:34.535Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:51:34.535Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:34.743Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T06:51:34.743Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T06:51:34.744Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T06:51:34.744Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T06:51:34.747Z] [BOT] ✅ Loaded V2 database: 1092 jobs
[2026-01-25T06:51:34.747Z] [BOT] 💾 DISK STATE: 1092 jobs on disk
[2026-01-25T06:51:34.747Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T06:51:34.749Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:51:34.750Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T06:51:34.750Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-25T06:51:34.758Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:36.259Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T06:51:36.259Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:51:36.259Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:36.393Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T06:51:36.393Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T06:51:36.394Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T06:51:36.394Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T06:51:36.397Z] [BOT] ✅ Loaded V2 database: 1092 jobs
[2026-01-25T06:51:36.397Z] [BOT] 💾 DISK STATE: 1092 jobs on disk
[2026-01-25T06:51:36.398Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T06:51:36.400Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:51:36.400Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T06:51:36.401Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-25T06:51:36.409Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
[2026-01-25T06:51:36.409Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:37.910Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T06:51:37.910Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T06:51:37.911Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:38.057Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T06:51:38.057Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T06:51:38.061Z] [BOT] ✅ Loaded V2 database: 1092 jobs
[2026-01-25T06:51:38.061Z] [BOT] 💾 DISK STATE: 1092 jobs on disk
[2026-01-25T06:51:38.061Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T06:51:38.064Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:51:38.064Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T06:51:38.065Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-25T06:51:38.074Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:42.576Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T06:51:42.576Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T06:51:42.576Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T06:51:42.577Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T06:51:42.766Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T06:51:42.766Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T06:51:42.766Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T06:51:42.766Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory
[2026-01-25T06:51:42.770Z] [BOT] ✅ Loaded V2 database: 1092 jobs
💾 DISK STATE: 1092 jobs on disk
[2026-01-25T06:51:42.770Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1092
[2026-01-25T06:51:42.773Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T06:51:42.773Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-25T06:51:42.774Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-25T06:51:42.782Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T06:51:47.285Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T06:51:47.286Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T06:51:47.380Z] [BOT] 📂 Loaded 8461 existing routing entries
[2026-01-25T06:51:47.497Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T06:51:47.497Z] [BOT] Total entries: 8471
   Timestamp: 2026-01-25T06:51:47.456Z
[2026-01-25T06:51:47.497Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T06:51:47.498Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T06:51:47.498Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T06:51:47.498Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T06:51:47.499Z] [BOT] [STATS] Channel stats saved
[2026-01-25T06:51:49.515Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*