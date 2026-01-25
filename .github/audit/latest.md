# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T09:30:58.138Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T09:30:26.078Z] ========================================
[2026-01-25T09:30:26.080Z] Discord Bot Execution Log
[2026-01-25T09:30:26.080Z] Environment: GitHub Actions
[2026-01-25T09:30:26.080Z] Node Version: v20.20.0
[2026-01-25T09:30:26.080Z] ========================================
[2026-01-25T09:30:26.080Z] Environment Variables Check:
[2026-01-25T09:30:26.080Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T09:30:26.080Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.080Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T09:30:26.081Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T09:30:26.081Z] 
Multi-Channel Configuration:
[2026-01-25T09:30:26.081Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.081Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.081Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.081Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.081Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.081Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.081Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.081Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.081Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T09:30:26.081Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T09:30:26.082Z] 
Data Files Check:
[2026-01-25T09:30:26.083Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T09:30:26.087Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 601408 bytes)
[2026-01-25T09:30:26.087Z] 
========================================
[2026-01-25T09:30:26.087Z] Starting Enhanced Discord Bot...
[2026-01-25T09:30:26.087Z] ========================================
[2026-01-25T09:30:26.615Z] [BOT] ✅ Loaded V2 database: 1054 jobs
[2026-01-25T09:30:27.464Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T09:30:27.464Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T09:30:27.465Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T09:30:27.584Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-25T09:30:27.585Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-25T09:30:27.585Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T09:30:27.589Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T09:30:27.589Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T09:30:27.589Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T09:30:27.590Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T09:30:27.590Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T09:30:27.591Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T09:30:27.594Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T09:30:27.594Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T09:30:27.594Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:30:27.595Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:27.611Z] [BOT ERROR] (node:3080) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T09:30:27.809Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T09:30:27.809Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T09:30:27.810Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T09:30:27.810Z] [BOT] 💾 BEFORE MERGE: 1054 jobs in memory
[2026-01-25T09:30:27.814Z] [BOT] ✅ Loaded V2 database: 1054 jobs
[2026-01-25T09:30:27.814Z] [BOT] 💾 DISK STATE: 1054 jobs on disk
[2026-01-25T09:30:27.814Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1054
[2026-01-25T09:30:27.816Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:30:27.817Z] [BOT] 💾 AFTER MERGE: 1054 jobs (merged disk + memory)
[2026-01-25T09:30:27.818Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T09:30:27.823Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-25T09:30:27.823Z] [BOT] ✅ Archiving complete: 2 archived, 1052 active
[2026-01-25T09:30:27.831Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:29.333Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T09:30:29.333Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:30:29.334Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:29.647Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T09:30:29.647Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T09:30:29.648Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:30:29.651Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:30:29.651Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:30:29.651Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:30:29.653Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:30:29.653Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:30:29.654Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:30:29.661Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:30:29.661Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:31.161Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T09:30:31.161Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:30:31.161Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:31.592Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T09:30:31.593Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T09:30:31.593Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T09:30:31.593Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:30:31.596Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:30:31.597Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:30:31.597Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:30:31.599Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:30:31.600Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:30:31.607Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:33.108Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:30:33.108Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:33.333Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T09:30:33.333Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T09:30:33.335Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:30:33.338Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:30:33.338Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:30:33.338Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:30:33.340Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:30:33.341Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:30:33.350Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:30:33.350Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:37.851Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T09:30:37.851Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T09:30:37.851Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:30:37.852Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:38.100Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T09:30:38.100Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T09:30:38.101Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:30:38.107Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:30:38.107Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:30:38.108Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:30:38.111Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:30:38.112Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:30:38.113Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:30:38.122Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:39.623Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T09:30:39.623Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:30:39.624Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:39.819Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T09:30:39.819Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T09:30:39.819Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:30:39.823Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:30:39.823Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:30:39.823Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:30:39.825Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:30:39.825Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:30:39.826Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:30:39.834Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:30:39.835Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:41.335Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T09:30:41.335Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:30:41.336Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:41.661Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T09:30:41.661Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T09:30:41.661Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T09:30:41.661Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:30:41.665Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:30:41.665Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:30:41.665Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:30:41.668Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:30:41.668Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:30:41.668Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:30:41.676Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:30:41.677Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:43.177Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T09:30:43.178Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:30:43.178Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:43.396Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T09:30:43.396Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T09:30:43.396Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T09:30:43.396Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:30:43.399Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:30:43.400Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:30:43.400Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:30:43.402Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:30:43.402Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:30:43.403Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:30:43.410Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:30:43.410Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:44.911Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T09:30:44.911Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:30:44.911Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:45.132Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T09:30:45.133Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:30:45.136Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:30:45.136Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:30:45.139Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:30:45.139Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:30:45.140Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:30:45.147Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:30:45.148Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:49.649Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T09:30:49.649Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T09:30:49.649Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T09:30:49.650Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:30:50.239Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T09:30:50.239Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T09:30:50.240Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T09:30:50.240Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:30:50.243Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:30:50.243Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:30:50.243Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:30:50.245Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:30:50.246Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:30:50.246Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:30:50.254Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:30:50.254Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:30:54.757Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T09:30:54.759Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T09:30:54.852Z] [BOT] 📂 Loaded 8561 existing routing entries
[2026-01-25T09:30:54.961Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8571
[2026-01-25T09:30:54.962Z] [BOT] Timestamp: 2026-01-25T09:30:54.921Z
[2026-01-25T09:30:54.962Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T09:30:54.962Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T09:30:54.962Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T09:30:54.962Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T09:30:54.962Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T09:30:54.963Z] [BOT] [STATS] Channel stats saved
[2026-01-25T09:30:56.981Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3080) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*