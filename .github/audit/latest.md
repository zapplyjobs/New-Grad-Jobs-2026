# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T09:08:24.671Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T09:07:53.292Z] ========================================
[2026-01-26T09:07:53.293Z] Discord Bot Execution Log
[2026-01-26T09:07:53.294Z] Environment: GitHub Actions
[2026-01-26T09:07:53.294Z] Node Version: v20.20.0
[2026-01-26T09:07:53.294Z] ========================================
[2026-01-26T09:07:53.294Z] Environment Variables Check:
[2026-01-26T09:07:53.294Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T09:07:53.294Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.294Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T09:07:53.294Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T09:07:53.294Z] 
Multi-Channel Configuration:
[2026-01-26T09:07:53.294Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.294Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.294Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.294Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.294Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.295Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.295Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.295Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.295Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T09:07:53.295Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T09:07:53.295Z] 
Data Files Check:
[2026-01-26T09:07:53.296Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T09:07:53.300Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 511878 bytes)
[2026-01-26T09:07:53.300Z] 
========================================
[2026-01-26T09:07:53.300Z] Starting Enhanced Discord Bot...
[2026-01-26T09:07:53.300Z] ========================================
[2026-01-26T09:07:53.757Z] [BOT] ✅ Loaded V2 database: 893 jobs
[2026-01-26T09:07:54.388Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T09:07:54.388Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T09:07:54.389Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T09:07:54.545Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T09:07:54.548Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T09:07:54.548Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T09:07:54.548Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T09:07:54.549Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-26T09:07:54.550Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T09:07:54.550Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T09:07:54.553Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T09:07:54.553Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T09:07:54.554Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:07:54.570Z] [BOT ERROR] (node:2624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T09:07:54.847Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T09:07:54.847Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T09:07:54.848Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T09:07:54.848Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T09:07:54.851Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T09:07:54.852Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T09:07:54.854Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:07:54.854Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T09:07:54.855Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T09:07:54.858Z] [BOT] 📦 Archived 16 jobs to 2026-01.json (16 total in archive)
[2026-01-26T09:07:54.859Z] [BOT] ✅ Archiving complete: 16 archived, 877 active
[2026-01-26T09:07:54.867Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:07:56.370Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T09:07:56.370Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:07:56.646Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T09:07:56.646Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:07:56.649Z] [BOT] ✅ Loaded V2 database: 877 jobs
[2026-01-26T09:07:56.649Z] [BOT] 💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:07:56.650Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:07:56.651Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:07:56.651Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:07:56.652Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:07:56.658Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:07:58.159Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:07:58.395Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T09:07:58.395Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T09:07:58.395Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:07:58.398Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:07:58.399Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:07:58.400Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:07:58.401Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:07:58.407Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:07:59.909Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T09:07:59.909Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:08:00.156Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T09:08:00.156Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T09:08:00.156Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:08:00.159Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:08:00.160Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:08:00.161Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:08:00.162Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:08:00.168Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:08:04.669Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T09:08:04.669Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T09:08:04.669Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:08:04.967Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T09:08:04.967Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T09:08:04.967Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T09:08:04.967Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:08:04.971Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:08:04.972Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:08:04.973Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:08:04.974Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:08:04.974Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:08:04.982Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:08:06.484Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T09:08:06.484Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:08:06.727Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T09:08:06.727Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T09:08:06.727Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T09:08:06.727Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:08:06.731Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:08:06.731Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:08:06.732Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:08:06.733Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:08:06.733Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:08:06.739Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:08:08.240Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:08:08.554Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T09:08:08.554Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:08:08.558Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:08:08.558Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:08:08.561Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:08:08.561Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:08:08.561Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:08:08.567Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
[2026-01-26T09:08:08.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:08:10.069Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:08:10.240Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T09:08:10.240Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:08:10.243Z] [BOT] ✅ Loaded V2 database: 877 jobs
[2026-01-26T09:08:10.243Z] [BOT] 💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:08:10.244Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:08:10.245Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:08:10.245Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:08:10.246Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:08:10.252Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
[2026-01-26T09:08:10.252Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:08:11.753Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-26T09:08:11.753Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:08:12.011Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T09:08:12.012Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:08:12.015Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:08:12.015Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:08:12.017Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:08:12.018Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:08:12.018Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:08:12.024Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:08:16.526Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T09:08:16.526Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T09:08:16.526Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T09:08:16.893Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T09:08:16.893Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T09:08:16.893Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:08:16.896Z] [BOT] ✅ Loaded V2 database: 877 jobs
[2026-01-26T09:08:16.896Z] [BOT] 💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:08:16.897Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:08:16.898Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:08:16.898Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:08:16.899Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:08:16.905Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
[2026-01-26T09:08:16.905Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:08:21.408Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T09:08:21.409Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T09:08:21.522Z] [BOT] 📂 Loaded 9331 existing routing entries
[2026-01-26T09:08:21.633Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9341
   Timestamp: 2026-01-26T09:08:21.594Z
[2026-01-26T09:08:21.633Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
[2026-01-26T09:08:21.634Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T09:08:21.634Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-26T09:08:21.634Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-26T09:08:21.634Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T09:08:21.634Z] [BOT] [STATS] Channel stats saved
[2026-01-26T09:08:23.648Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*