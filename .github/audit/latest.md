# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T20:45:29.888Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T20:44:57.329Z] ========================================
[2026-01-25T20:44:57.331Z] Discord Bot Execution Log
[2026-01-25T20:44:57.331Z] Environment: GitHub Actions
[2026-01-25T20:44:57.331Z] Node Version: v20.20.0
[2026-01-25T20:44:57.331Z] ========================================
[2026-01-25T20:44:57.331Z] Environment Variables Check:
[2026-01-25T20:44:57.331Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T20:44:57.331Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.331Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T20:44:57.332Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T20:44:57.332Z] 
Multi-Channel Configuration:
[2026-01-25T20:44:57.332Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.332Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.332Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.332Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.332Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.332Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.332Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.332Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.332Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T20:44:57.332Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T20:44:57.332Z] 
Data Files Check:
[2026-01-25T20:44:57.334Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T20:44:57.338Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 593005 bytes)
[2026-01-25T20:44:57.338Z] 
========================================
[2026-01-25T20:44:57.338Z] Starting Enhanced Discord Bot...
[2026-01-25T20:44:57.338Z] ========================================
[2026-01-25T20:44:57.875Z] [BOT] ✅ Loaded V2 database: 1037 jobs
[2026-01-25T20:44:58.463Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T20:44:58.463Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T20:44:58.464Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T20:44:58.584Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T20:44:58.587Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T20:44:58.588Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T20:44:58.588Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T20:44:58.589Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T20:44:58.589Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T20:44:58.589Z] [BOT] 📍 2 jobs with multiple locations:
[2026-01-25T20:44:58.590Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T20:44:58.593Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T20:44:58.593Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T20:44:58.594Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:44:58.610Z] [BOT ERROR] (node:2819) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T20:44:59.189Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T20:44:59.190Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T20:44:59.190Z] [BOT] 💾 BEFORE MERGE: 1037 jobs in memory
[2026-01-25T20:44:59.194Z] [BOT] ✅ Loaded V2 database: 1037 jobs
💾 DISK STATE: 1037 jobs on disk
[2026-01-25T20:44:59.194Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1037
[2026-01-25T20:44:59.196Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:44:59.197Z] [BOT] 💾 AFTER MERGE: 1037 jobs (merged disk + memory)
[2026-01-25T20:44:59.197Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T20:44:59.203Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-25T20:44:59.203Z] [BOT] ✅ Archiving complete: 5 archived, 1032 active
[2026-01-25T20:44:59.213Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
[2026-01-25T20:44:59.213Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:00.715Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:45:00.963Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T20:45:00.964Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:45:00.967Z] [BOT] ✅ Loaded V2 database: 1032 jobs
💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:45:00.967Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:45:00.969Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:45:00.969Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:45:00.970Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-25T20:45:00.978Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:02.479Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:45:02.925Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T20:45:02.926Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:45:02.929Z] [BOT] ✅ Loaded V2 database: 1032 jobs
💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:45:02.930Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:45:02.932Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:45:02.932Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:45:02.933Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-25T20:45:02.941Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
[2026-01-25T20:45:02.942Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:04.443Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T20:45:04.443Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:45:04.787Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T20:45:04.787Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T20:45:04.787Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T20:45:04.787Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:45:04.791Z] [BOT] ✅ Loaded V2 database: 1032 jobs
[2026-01-25T20:45:04.791Z] [BOT] 💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:45:04.791Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:45:04.793Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:45:04.793Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:45:04.794Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-25T20:45:04.801Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
[2026-01-25T20:45:04.801Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:09.304Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T20:45:09.304Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T20:45:09.304Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:45:09.550Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T20:45:09.550Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T20:45:09.550Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:45:09.555Z] [BOT] ✅ Loaded V2 database: 1032 jobs
[2026-01-25T20:45:09.555Z] [BOT] 💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:45:09.555Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:45:09.557Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:45:09.558Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:45:09.558Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-25T20:45:09.568Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:11.069Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T20:45:11.070Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:45:11.298Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T20:45:11.299Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T20:45:11.299Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:45:11.302Z] [BOT] ✅ Loaded V2 database: 1032 jobs
[2026-01-25T20:45:11.302Z] [BOT] 💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:45:11.302Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:45:11.304Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:45:11.305Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:45:11.306Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-25T20:45:11.314Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
[2026-01-25T20:45:11.314Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:12.816Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T20:45:12.816Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:45:13.135Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T20:45:13.135Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T20:45:13.135Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T20:45:13.135Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:45:13.139Z] [BOT] ✅ Loaded V2 database: 1032 jobs
[2026-01-25T20:45:13.139Z] [BOT] 💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:45:13.140Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:45:13.142Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:45:13.142Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:45:13.143Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-25T20:45:13.151Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
[2026-01-25T20:45:13.151Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:14.654Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T20:45:14.654Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:45:15.162Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T20:45:15.162Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T20:45:15.162Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:45:15.165Z] [BOT] ✅ Loaded V2 database: 1032 jobs
💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:45:15.166Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:45:15.168Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:45:15.168Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:45:15.169Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-25T20:45:15.176Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:16.678Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T20:45:16.678Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:45:16.911Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T20:45:16.911Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T20:45:16.912Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:45:16.915Z] [BOT] ✅ Loaded V2 database: 1032 jobs
💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:45:16.916Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:45:16.918Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:45:16.918Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:45:16.919Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-25T20:45:16.926Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
[2026-01-25T20:45:16.926Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:21.429Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T20:45:21.429Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T20:45:21.429Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T20:45:21.860Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T20:45:21.860Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T20:45:21.860Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T20:45:21.860Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:45:21.863Z] [BOT] ✅ Loaded V2 database: 1032 jobs
💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:45:21.864Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:45:21.866Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:45:21.866Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:45:21.866Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-25T20:45:21.876Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
[2026-01-25T20:45:21.876Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:45:26.379Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T20:45:26.381Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T20:45:26.477Z] [BOT] 📂 Loaded 9001 existing routing entries
[2026-01-25T20:45:26.592Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T20:45:26.592Z] [BOT] Total entries: 9011
   Timestamp: 2026-01-25T20:45:26.546Z
[2026-01-25T20:45:26.593Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T20:45:26.593Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T20:45:26.593Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T20:45:28.609Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2819) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*