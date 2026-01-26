# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T12:34:18.029Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T12:33:47.602Z] ========================================
[2026-01-26T12:33:47.604Z] Discord Bot Execution Log
[2026-01-26T12:33:47.604Z] Environment: GitHub Actions
[2026-01-26T12:33:47.604Z] Node Version: v20.20.0
[2026-01-26T12:33:47.604Z] ========================================
[2026-01-26T12:33:47.604Z] Environment Variables Check:
[2026-01-26T12:33:47.604Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T12:33:47.604Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.604Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T12:33:47.605Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T12:33:47.605Z] 
Multi-Channel Configuration:
[2026-01-26T12:33:47.605Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.605Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.605Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.605Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.605Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.605Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.605Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.605Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.605Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T12:33:47.605Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T12:33:47.605Z] 
Data Files Check:
[2026-01-26T12:33:47.607Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T12:33:47.610Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 495143 bytes)
[2026-01-26T12:33:47.610Z] 
========================================
[2026-01-26T12:33:47.610Z] Starting Enhanced Discord Bot...
[2026-01-26T12:33:47.610Z] ========================================
[2026-01-26T12:33:48.126Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:33:48.664Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T12:33:48.665Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T12:33:48.665Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T12:33:48.784Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T12:33:48.787Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T12:33:48.788Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T12:33:48.788Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T12:33:48.789Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T12:33:48.789Z] [BOT] (2 grouped as same job with different locations)
[2026-01-26T12:33:48.790Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-26T12:33:48.790Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T12:33:48.793Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T12:33:48.794Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T12:33:48.794Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:33:48.810Z] [BOT ERROR] (node:2482) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T12:33:48.997Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T12:33:48.998Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T12:33:48.998Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:33:49.001Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:33:49.001Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:33:49.003Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:33:49.003Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:33:49.004Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:33:49.015Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:33:49.016Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:33:50.518Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:33:50.714Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T12:33:50.714Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T12:33:50.714Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:33:50.717Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:33:50.717Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:33:50.719Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:33:50.720Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:33:50.727Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:33:52.229Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:33:52.435Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T12:33:52.436Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T12:33:52.436Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T12:33:52.436Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:33:52.439Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:33:52.439Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:33:52.440Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:33:52.441Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:33:52.447Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:33:52.447Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:33:53.949Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T12:33:53.949Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:33:54.120Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T12:33:54.120Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T12:33:54.121Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:33:54.124Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:33:54.124Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:33:54.124Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:33:54.125Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:33:54.125Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:33:54.126Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:33:54.132Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:33:58.634Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T12:33:58.634Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T12:33:58.634Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:33:58.890Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T12:33:58.890Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T12:33:58.890Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:33:58.893Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:33:58.894Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:33:58.896Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:33:58.896Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:33:58.897Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:33:58.905Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:33:58.905Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:34:00.407Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T12:34:00.407Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:34:00.558Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T12:34:00.559Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T12:34:00.559Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:34:00.561Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:34:00.562Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:34:00.563Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:34:00.563Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:34:00.564Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:34:00.572Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:34:00.572Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:34:02.073Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T12:34:02.074Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:34:02.398Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T12:34:02.399Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T12:34:02.399Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:34:02.401Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:34:02.402Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:34:02.403Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:34:02.403Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:34:02.404Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:34:02.410Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:34:02.411Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:34:03.913Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T12:34:03.913Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:34:04.083Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T12:34:04.083Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T12:34:04.083Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:34:04.086Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:34:04.087Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:34:04.088Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:34:04.089Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:34:04.096Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:34:04.096Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:34:05.598Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T12:34:05.598Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:34:05.744Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T12:34:05.744Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T12:34:05.745Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:34:05.747Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:34:05.748Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:34:05.749Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:34:05.750Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:34:05.756Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:34:05.756Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:34:10.258Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T12:34:10.258Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T12:34:10.258Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T12:34:10.615Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T12:34:10.615Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T12:34:10.615Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:34:10.618Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:34:10.619Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:34:10.620Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:34:10.621Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:34:10.628Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:34:15.131Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T12:34:15.132Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T12:34:15.237Z] [BOT] 📂 Loaded 9461 existing routing entries
[2026-01-26T12:34:15.354Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9471
[2026-01-26T12:34:15.355Z] [BOT] Timestamp: 2026-01-26T12:34:15.309Z
[2026-01-26T12:34:15.355Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
[2026-01-26T12:34:15.355Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T12:34:15.355Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T12:34:15.355Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T12:34:15.355Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T12:34:15.356Z] [BOT] [STATS] Channel stats saved
[2026-01-26T12:34:17.375Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2482) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*