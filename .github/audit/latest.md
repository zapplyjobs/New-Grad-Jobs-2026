# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T20:57:03.456Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T20:56:32.135Z] ========================================
[2026-01-25T20:56:32.137Z] Discord Bot Execution Log
[2026-01-25T20:56:32.137Z] Environment: GitHub Actions
[2026-01-25T20:56:32.137Z] Node Version: v20.20.0
[2026-01-25T20:56:32.137Z] ========================================
[2026-01-25T20:56:32.137Z] Environment Variables Check:
[2026-01-25T20:56:32.137Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T20:56:32.137Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.137Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T20:56:32.138Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T20:56:32.138Z] 
Multi-Channel Configuration:
[2026-01-25T20:56:32.138Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.138Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.138Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.138Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.138Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.138Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.138Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.138Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.138Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T20:56:32.138Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T20:56:32.138Z] 
Data Files Check:
[2026-01-25T20:56:32.140Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T20:56:32.144Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 590364 bytes)
[2026-01-25T20:56:32.144Z] 
========================================
[2026-01-25T20:56:32.144Z] Starting Enhanced Discord Bot...
[2026-01-25T20:56:32.144Z] ========================================
[2026-01-25T20:56:32.688Z] [BOT] ✅ Loaded V2 database: 1032 jobs
[2026-01-25T20:56:33.163Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T20:56:33.164Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T20:56:33.164Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T20:56:33.286Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T20:56:33.290Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T20:56:33.290Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T20:56:33.290Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T20:56:33.291Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T20:56:33.292Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T20:56:33.292Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T20:56:33.292Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T20:56:33.295Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T20:56:33.296Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T20:56:33.296Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:56:33.313Z] [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T20:56:33.484Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T20:56:33.484Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T20:56:33.484Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T20:56:33.485Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory
[2026-01-25T20:56:33.489Z] [BOT] ✅ Loaded V2 database: 1032 jobs
[2026-01-25T20:56:33.489Z] [BOT] 💾 DISK STATE: 1032 jobs on disk
[2026-01-25T20:56:33.489Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1032
[2026-01-25T20:56:33.492Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:56:33.492Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-25T20:56:33.493Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T20:56:33.498Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-25T20:56:33.498Z] [BOT] ✅ Archiving complete: 6 archived, 1026 active
[2026-01-25T20:56:33.508Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:56:35.011Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T20:56:35.011Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:56:35.168Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T20:56:35.168Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T20:56:35.172Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T20:56:35.172Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T20:56:35.174Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:56:35.174Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T20:56:35.175Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T20:56:35.182Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:56:36.684Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:56:36.828Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T20:56:36.828Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T20:56:36.828Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T20:56:36.831Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T20:56:36.832Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T20:56:36.834Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:56:36.834Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T20:56:36.835Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T20:56:36.847Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:56:38.348Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T20:56:38.348Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:56:38.627Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T20:56:38.627Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T20:56:38.627Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T20:56:38.631Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T20:56:38.631Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T20:56:38.633Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:56:38.633Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T20:56:38.633Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T20:56:38.641Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:56:43.142Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T20:56:43.143Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T20:56:43.143Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:56:43.737Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T20:56:43.738Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T20:56:43.738Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T20:56:43.742Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T20:56:43.742Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T20:56:43.746Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:56:43.746Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T20:56:43.747Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T20:56:43.756Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:56:45.256Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T20:56:45.257Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:56:45.585Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T20:56:45.586Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T20:56:45.586Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T20:56:45.586Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T20:56:45.589Z] [BOT] ✅ Loaded V2 database: 1026 jobs
[2026-01-25T20:56:45.590Z] [BOT] 💾 DISK STATE: 1026 jobs on disk
[2026-01-25T20:56:45.590Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T20:56:45.592Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:56:45.592Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T20:56:45.593Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T20:56:45.602Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:56:47.104Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T20:56:47.104Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:56:47.506Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T20:56:47.506Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T20:56:47.506Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T20:56:47.510Z] [BOT] ✅ Loaded V2 database: 1026 jobs
[2026-01-25T20:56:47.510Z] [BOT] 💾 DISK STATE: 1026 jobs on disk
[2026-01-25T20:56:47.510Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T20:56:47.513Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:56:47.513Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T20:56:47.514Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T20:56:47.522Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
[2026-01-25T20:56:47.522Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:56:49.023Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T20:56:49.023Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:56:49.331Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T20:56:49.332Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T20:56:49.332Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T20:56:49.335Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T20:56:49.335Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T20:56:49.337Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:56:49.337Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T20:56:49.338Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T20:56:49.345Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:56:50.845Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T20:56:50.846Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:56:51.099Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T20:56:51.099Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T20:56:51.099Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T20:56:51.102Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T20:56:51.103Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T20:56:51.105Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:56:51.105Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T20:56:51.105Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T20:56:51.114Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:56:55.617Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T20:56:55.618Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T20:56:55.618Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T20:56:55.854Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T20:56:55.854Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T20:56:55.854Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T20:56:55.854Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T20:56:55.858Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T20:56:55.859Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T20:56:55.860Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T20:56:55.861Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T20:56:55.869Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:57:00.371Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T20:57:00.373Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T20:57:00.474Z] [BOT] 📂 Loaded 9011 existing routing entries
[2026-01-25T20:57:00.598Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T20:57:00.598Z] [BOT] Total entries: 9021
   Timestamp: 2026-01-25T20:57:00.554Z
[2026-01-25T20:57:00.599Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T20:57:00.599Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T20:57:00.599Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T20:57:00.599Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T20:57:00.600Z] [BOT] [STATS] Channel stats saved
[2026-01-25T20:57:02.620Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2473) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*