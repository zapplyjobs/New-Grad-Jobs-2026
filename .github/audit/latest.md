# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T18:50:27.217Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T18:49:55.136Z] ========================================
[2026-01-25T18:49:55.137Z] Discord Bot Execution Log
[2026-01-25T18:49:55.138Z] Environment: GitHub Actions
[2026-01-25T18:49:55.138Z] Node Version: v20.20.0
[2026-01-25T18:49:55.138Z] ========================================
[2026-01-25T18:49:55.138Z] Environment Variables Check:
[2026-01-25T18:49:55.138Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T18:49:55.138Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.138Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T18:49:55.138Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T18:49:55.138Z] 
Multi-Channel Configuration:
[2026-01-25T18:49:55.138Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.139Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.139Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.139Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.139Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.139Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.139Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.139Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.139Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T18:49:55.139Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T18:49:55.139Z] 
Data Files Check:
[2026-01-25T18:49:55.140Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T18:49:55.145Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594004 bytes)
[2026-01-25T18:49:55.145Z] 
========================================
[2026-01-25T18:49:55.145Z] Starting Enhanced Discord Bot...
[2026-01-25T18:49:55.145Z] ========================================
[2026-01-25T18:49:55.684Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:49:57.097Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T18:49:57.098Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T18:49:57.098Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T18:49:57.218Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T18:49:57.222Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T18:49:57.222Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T18:49:57.223Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T18:49:57.224Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T18:49:57.224Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T18:49:57.224Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T18:49:57.224Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T18:49:57.227Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T18:49:57.228Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T18:49:57.228Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:49:57.245Z] [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T18:49:57.462Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T18:49:57.462Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T18:49:57.463Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T18:49:57.463Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:49:57.467Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:49:57.467Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:49:57.467Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:49:57.470Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:49:57.470Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:49:57.470Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:49:57.484Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:49:57.484Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:49:58.986Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T18:49:58.986Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:49:59.176Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T18:49:59.177Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T18:49:59.177Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:49:59.180Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:49:59.180Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:49:59.181Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:49:59.183Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:49:59.183Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:49:59.184Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:49:59.192Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:50:00.694Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T18:50:00.694Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:50:00.863Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T18:50:00.864Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T18:50:00.864Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:50:00.867Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:50:00.867Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:50:00.867Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:50:00.870Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:50:00.870Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:50:00.870Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:50:00.877Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:50:02.379Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:50:02.759Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T18:50:02.759Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:50:02.763Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:50:02.763Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:50:02.765Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:50:02.765Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:50:02.773Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:50:07.275Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T18:50:07.275Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T18:50:07.275Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:50:07.724Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T18:50:07.724Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T18:50:07.725Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:50:07.729Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:50:07.730Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:50:07.732Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:50:07.732Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:50:07.733Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:50:07.742Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:50:07.742Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:50:09.245Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T18:50:09.245Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:50:09.516Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T18:50:09.517Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T18:50:09.517Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:50:09.520Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:50:09.520Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:50:09.520Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:50:09.522Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:50:09.522Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:50:09.523Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:50:09.532Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:50:11.033Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T18:50:11.033Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:50:11.223Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T18:50:11.223Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T18:50:11.223Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:50:11.226Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:50:11.227Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:50:11.229Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:50:11.229Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:50:11.230Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:50:11.238Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:50:12.740Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T18:50:12.740Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:50:13.153Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T18:50:13.153Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T18:50:13.154Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T18:50:13.154Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:50:13.157Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:50:13.157Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:50:13.157Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:50:13.159Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:50:13.160Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:50:13.160Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:50:13.167Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:50:14.669Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T18:50:14.669Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:50:14.874Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T18:50:14.874Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T18:50:14.875Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T18:50:14.875Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:50:14.878Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:50:14.878Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:50:14.879Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:50:14.881Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:50:14.881Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:50:14.882Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:50:14.889Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:50:14.890Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:50:19.392Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T18:50:19.392Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T18:50:19.392Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T18:50:19.592Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T18:50:19.592Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T18:50:19.592Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T18:50:19.592Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:50:19.596Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:50:19.596Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:50:19.596Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:50:19.598Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:50:19.598Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:50:19.598Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:50:19.606Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:50:19.607Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:50:24.109Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T18:50:24.111Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T18:50:24.206Z] [BOT] 📂 Loaded 8911 existing routing entries
[2026-01-25T18:50:24.319Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8921
[2026-01-25T18:50:24.319Z] [BOT] Timestamp: 2026-01-25T18:50:24.276Z
[2026-01-25T18:50:24.320Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T18:50:24.320Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T18:50:24.320Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T18:50:24.320Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T18:50:24.320Z] [BOT] [STATS] Channel stats saved
[2026-01-25T18:50:26.338Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*