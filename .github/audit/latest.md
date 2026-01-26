# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T03:33:29.993Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T03:32:59.215Z] ========================================
[2026-01-26T03:32:59.216Z] Discord Bot Execution Log
[2026-01-26T03:32:59.217Z] Environment: GitHub Actions
[2026-01-26T03:32:59.217Z] Node Version: v20.20.0
[2026-01-26T03:32:59.217Z] ========================================
[2026-01-26T03:32:59.217Z] Environment Variables Check:
[2026-01-26T03:32:59.217Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T03:32:59.217Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.217Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T03:32:59.217Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T03:32:59.217Z] 
Multi-Channel Configuration:
[2026-01-26T03:32:59.217Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.217Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.217Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.217Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.217Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.218Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.218Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.218Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.218Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T03:32:59.218Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T03:32:59.218Z] 
Data Files Check:
[2026-01-26T03:32:59.219Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T03:32:59.223Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 548952 bytes)
[2026-01-26T03:32:59.223Z] 
========================================
[2026-01-26T03:32:59.223Z] Starting Enhanced Discord Bot...
[2026-01-26T03:32:59.223Z] ========================================
[2026-01-26T03:32:59.677Z] [BOT] ✅ Loaded V2 database: 959 jobs
[2026-01-26T03:33:00.127Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T03:33:00.128Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T03:33:00.128Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T03:33:00.284Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T03:33:00.287Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T03:33:00.287Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T03:33:00.288Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T03:33:00.288Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T03:33:00.289Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T03:33:00.289Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T03:33:00.289Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T03:33:00.292Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T03:33:00.293Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T03:33:00.293Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T03:33:00.308Z] [BOT ERROR] (node:2636) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T03:33:00.602Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T03:33:00.602Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T03:33:00.603Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T03:33:00.603Z] [BOT] 💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T03:33:00.607Z] [BOT] ✅ Loaded V2 database: 959 jobs
[2026-01-26T03:33:00.607Z] [BOT] 💾 DISK STATE: 959 jobs on disk
[2026-01-26T03:33:00.608Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T03:33:00.609Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T03:33:00.610Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T03:33:00.611Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T03:33:00.616Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-26T03:33:00.616Z] [BOT] ✅ Archiving complete: 2 archived, 957 active
[2026-01-26T03:33:00.623Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:02.125Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T03:33:02.125Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T03:33:02.369Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T03:33:02.369Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T03:33:02.369Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T03:33:02.373Z] [BOT] ✅ Loaded V2 database: 957 jobs
[2026-01-26T03:33:02.373Z] [BOT] 💾 DISK STATE: 957 jobs on disk
[2026-01-26T03:33:02.373Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T03:33:02.375Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T03:33:02.375Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T03:33:02.375Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T03:33:02.382Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:03.882Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T03:33:04.207Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T03:33:04.207Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T03:33:04.211Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T03:33:04.211Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T03:33:04.213Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T03:33:04.213Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T03:33:04.220Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:05.721Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T03:33:05.868Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T03:33:05.868Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T03:33:05.869Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T03:33:05.872Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T03:33:05.872Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T03:33:05.874Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T03:33:05.874Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T03:33:05.875Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T03:33:05.882Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:10.383Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T03:33:10.384Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T03:33:10.384Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T03:33:10.595Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T03:33:10.595Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T03:33:10.598Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T03:33:10.599Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T03:33:10.601Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T03:33:10.601Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T03:33:10.602Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T03:33:10.610Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:12.111Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T03:33:12.111Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T03:33:12.434Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T03:33:12.435Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T03:33:12.435Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T03:33:12.439Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T03:33:12.439Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T03:33:12.441Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T03:33:12.441Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T03:33:12.441Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T03:33:12.449Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
[2026-01-26T03:33:12.449Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:13.949Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T03:33:13.949Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T03:33:14.135Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T03:33:14.135Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T03:33:14.136Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T03:33:14.136Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T03:33:14.140Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T03:33:14.140Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T03:33:14.142Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T03:33:14.142Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T03:33:14.143Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T03:33:14.150Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:15.650Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T03:33:15.650Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T03:33:15.829Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T03:33:15.829Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T03:33:15.829Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T03:33:15.833Z] [BOT] ✅ Loaded V2 database: 957 jobs
[2026-01-26T03:33:15.833Z] [BOT] 💾 DISK STATE: 957 jobs on disk
[2026-01-26T03:33:15.833Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T03:33:15.835Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T03:33:15.835Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T03:33:15.842Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:17.343Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T03:33:17.343Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T03:33:17.544Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T03:33:17.544Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T03:33:17.548Z] [BOT] ✅ Loaded V2 database: 957 jobs
💾 DISK STATE: 957 jobs on disk
[2026-01-26T03:33:17.548Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T03:33:17.550Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T03:33:17.550Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T03:33:17.551Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T03:33:17.559Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:22.061Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T03:33:22.062Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T03:33:22.062Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T03:33:22.413Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T03:33:22.413Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T03:33:22.413Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T03:33:22.413Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T03:33:22.419Z] [BOT] ✅ Loaded V2 database: 957 jobs
[2026-01-26T03:33:22.420Z] [BOT] 💾 DISK STATE: 957 jobs on disk
[2026-01-26T03:33:22.420Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T03:33:22.423Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T03:33:22.423Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T03:33:22.424Z] [BOT] ✅ No jobs to archive (all 957 jobs within 7-day window)
[2026-01-26T03:33:22.434Z] [BOT] 💾 Saved posted_jobs.json: 957 active jobs
[2026-01-26T03:33:22.434Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T03:33:26.936Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T03:33:26.937Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T03:33:27.050Z] [BOT] 📂 Loaded 9181 existing routing entries
[2026-01-26T03:33:27.159Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9191
[2026-01-26T03:33:27.159Z] [BOT] Timestamp: 2026-01-26T03:33:27.119Z
[2026-01-26T03:33:27.159Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
[2026-01-26T03:33:27.159Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T03:33:27.159Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-26T03:33:27.160Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T03:33:27.160Z] [BOT] [STATS] Channel stats saved
[2026-01-26T03:33:29.174Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2636) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*