# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T22:57:08.601Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T22:56:37.115Z] ========================================
[2026-01-25T22:56:37.117Z] Discord Bot Execution Log
[2026-01-25T22:56:37.117Z] Environment: GitHub Actions
[2026-01-25T22:56:37.117Z] Node Version: v20.20.0
[2026-01-25T22:56:37.117Z] ========================================
[2026-01-25T22:56:37.117Z] Environment Variables Check:
[2026-01-25T22:56:37.117Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T22:56:37.117Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.117Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T22:56:37.118Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T22:56:37.118Z] 
Multi-Channel Configuration:
[2026-01-25T22:56:37.118Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.118Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.118Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.118Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.118Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.118Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.118Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.118Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.118Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T22:56:37.118Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T22:56:37.118Z] 
Data Files Check:
[2026-01-25T22:56:37.119Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T22:56:37.124Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 571947 bytes)
[2026-01-25T22:56:37.124Z] 
========================================
[2026-01-25T22:56:37.124Z] Starting Enhanced Discord Bot...
[2026-01-25T22:56:37.124Z] ========================================
[2026-01-25T22:56:37.607Z] [BOT] ✅ Loaded V2 database: 1003 jobs
[2026-01-25T22:56:38.117Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T22:56:38.118Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T22:56:38.118Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T22:56:38.282Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T22:56:38.285Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T22:56:38.286Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T22:56:38.286Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T22:56:38.287Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T22:56:38.287Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T22:56:38.287Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T22:56:38.291Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T22:56:38.291Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T22:56:38.291Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:56:38.308Z] [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T22:56:38.741Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T22:56:38.742Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T22:56:38.743Z] [BOT] 💾 BEFORE MERGE: 1003 jobs in memory
[2026-01-25T22:56:38.746Z] [BOT] ✅ Loaded V2 database: 1003 jobs
💾 DISK STATE: 1003 jobs on disk
[2026-01-25T22:56:38.747Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1003
[2026-01-25T22:56:38.750Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1003 jobs (merged disk + memory)
[2026-01-25T22:56:38.751Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T22:56:38.758Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
✅ Archiving complete: 4 archived, 999 active
[2026-01-25T22:56:38.768Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:56:40.270Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T22:56:40.271Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:56:40.560Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T22:56:40.560Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T22:56:40.560Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T22:56:40.560Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T22:56:40.564Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T22:56:40.564Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T22:56:40.566Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T22:56:40.567Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T22:56:40.573Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:56:42.074Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:56:42.286Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T22:56:42.287Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T22:56:42.287Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T22:56:42.290Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T22:56:42.291Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T22:56:42.293Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:56:42.293Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T22:56:42.294Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T22:56:42.301Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:56:43.801Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T22:56:43.802Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:56:44.144Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T22:56:44.144Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T22:56:44.145Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T22:56:44.148Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T22:56:44.148Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T22:56:44.150Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:56:44.150Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T22:56:44.151Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T22:56:44.158Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:56:48.661Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T22:56:48.661Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:56:49.031Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T22:56:49.031Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T22:56:49.031Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T22:56:49.035Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T22:56:49.036Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T22:56:49.038Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:56:49.038Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T22:56:49.039Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T22:56:49.048Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:56:50.550Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T22:56:50.550Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:56:50.724Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T22:56:50.724Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T22:56:50.725Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T22:56:50.725Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T22:56:50.728Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T22:56:50.728Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T22:56:50.730Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:56:50.731Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T22:56:50.731Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T22:56:50.739Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
[2026-01-25T22:56:50.739Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T22:56:52.241Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T22:56:52.241Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:56:52.436Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T22:56:52.436Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T22:56:52.441Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T22:56:52.441Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T22:56:52.443Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:56:52.443Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T22:56:52.444Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T22:56:52.453Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:56:53.955Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T22:56:53.955Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:56:54.314Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T22:56:54.314Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T22:56:54.314Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T22:56:54.318Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T22:56:54.318Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T22:56:54.322Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T22:56:54.322Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T22:56:54.330Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:56:55.832Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:56:56.024Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T22:56:56.025Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T22:56:56.028Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T22:56:56.028Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T22:56:56.030Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T22:56:56.031Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T22:56:56.038Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:57:00.541Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T22:57:00.541Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T22:57:00.541Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T22:57:01.075Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T22:57:01.075Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T22:57:01.075Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T22:57:01.075Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T22:57:01.079Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T22:57:01.079Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T22:57:01.081Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:57:01.081Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T22:57:01.082Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T22:57:01.090Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
[2026-01-25T22:57:01.090Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T22:57:05.591Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T22:57:05.592Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T22:57:05.698Z] [BOT] 📂 Loaded 9091 existing routing entries
[2026-01-25T22:57:05.812Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9101
   Timestamp: 2026-01-25T22:57:05.774Z
[2026-01-25T22:57:05.812Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T22:57:05.813Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T22:57:05.813Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T22:57:05.813Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T22:57:05.813Z] [BOT] [STATS] Channel stats saved
[2026-01-25T22:57:07.824Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*