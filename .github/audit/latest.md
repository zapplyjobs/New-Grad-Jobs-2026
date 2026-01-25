# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T23:12:29.524Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T23:11:57.928Z] ========================================
[2026-01-25T23:11:57.930Z] Discord Bot Execution Log
[2026-01-25T23:11:57.930Z] Environment: GitHub Actions
[2026-01-25T23:11:57.930Z] Node Version: v20.20.0
[2026-01-25T23:11:57.931Z] ========================================
[2026-01-25T23:11:57.931Z] Environment Variables Check:
[2026-01-25T23:11:57.931Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T23:11:57.931Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.931Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T23:11:57.931Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T23:11:57.931Z] 
Multi-Channel Configuration:
[2026-01-25T23:11:57.931Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.931Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.931Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.931Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.932Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.932Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.932Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.932Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.932Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T23:11:57.932Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T23:11:57.932Z] 
Data Files Check:
[2026-01-25T23:11:57.933Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T23:11:57.938Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 569756 bytes)
[2026-01-25T23:11:57.938Z] 
========================================
[2026-01-25T23:11:57.938Z] Starting Enhanced Discord Bot...
[2026-01-25T23:11:57.938Z] ========================================
[2026-01-25T23:11:58.449Z] [BOT] ✅ Loaded V2 database: 999 jobs
[2026-01-25T23:11:58.958Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T23:11:58.958Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T23:11:58.958Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T23:11:59.077Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[2026-01-25T23:11:59.079Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T23:11:59.083Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T23:11:59.083Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T23:11:59.083Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T23:11:59.084Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T23:11:59.084Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T23:11:59.085Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T23:11:59.088Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T23:11:59.089Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T23:11:59.089Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:11:59.105Z] [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T23:11:59.722Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T23:11:59.722Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T23:11:59.723Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T23:11:59.723Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:11:59.726Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:11:59.727Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:11:59.729Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:11:59.729Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:11:59.730Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:11:59.741Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
[2026-01-25T23:11:59.742Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:01.243Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:12:01.487Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T23:12:01.488Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T23:12:01.488Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T23:12:01.488Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:12:01.491Z] [BOT] ✅ Loaded V2 database: 999 jobs
[2026-01-25T23:12:01.491Z] [BOT] 💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:12:01.491Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:12:01.493Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:12:01.493Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:12:01.494Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:12:01.502Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:03.003Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:12:03.286Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T23:12:03.286Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T23:12:03.286Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T23:12:03.286Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:12:03.289Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:12:03.290Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:12:03.292Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:12:03.292Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:12:03.299Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
[2026-01-25T23:12:03.299Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:04.801Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:12:04.935Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T23:12:04.936Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:12:04.939Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:12:04.939Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:12:04.941Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:12:04.941Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:12:04.948Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:09.450Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T23:12:09.451Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T23:12:09.451Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:12:09.874Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T23:12:09.874Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T23:12:09.874Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:12:09.879Z] [BOT] ✅ Loaded V2 database: 999 jobs
[2026-01-25T23:12:09.879Z] [BOT] 💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:12:09.879Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:12:09.882Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:12:09.882Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:12:09.882Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:12:09.891Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:11.393Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T23:12:11.393Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:12:11.576Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T23:12:11.576Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T23:12:11.577Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:12:11.580Z] [BOT] ✅ Loaded V2 database: 999 jobs
[2026-01-25T23:12:11.580Z] [BOT] 💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:12:11.580Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:12:11.582Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:12:11.582Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:12:11.583Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:12:11.591Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
[2026-01-25T23:12:11.591Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:13.092Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T23:12:13.092Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:12:13.442Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T23:12:13.442Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T23:12:13.442Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T23:12:13.442Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:12:13.445Z] [BOT] ✅ Loaded V2 database: 999 jobs
[2026-01-25T23:12:13.446Z] [BOT] 💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:12:13.446Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:12:13.448Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:12:13.448Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:12:13.449Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:12:13.457Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
[2026-01-25T23:12:13.457Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:14.959Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T23:12:14.959Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:12:15.383Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T23:12:15.384Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T23:12:15.384Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T23:12:15.384Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:12:15.387Z] [BOT] ✅ Loaded V2 database: 999 jobs
[2026-01-25T23:12:15.387Z] [BOT] 💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:12:15.387Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:12:15.389Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:12:15.390Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:12:15.397Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:16.899Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T23:12:16.899Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:12:17.167Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T23:12:17.167Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T23:12:17.167Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:12:17.171Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:12:17.171Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:12:17.173Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:12:17.173Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:12:17.174Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:12:17.181Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:21.683Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T23:12:21.684Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T23:12:21.684Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T23:12:21.930Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T23:12:21.930Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T23:12:21.931Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:12:21.934Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:12:21.934Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:12:21.936Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:12:21.936Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:12:21.937Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-25T23:12:21.944Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
[2026-01-25T23:12:21.944Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:12:26.447Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T23:12:26.449Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T23:12:26.545Z] [BOT] 📂 Loaded 9101 existing routing entries
[2026-01-25T23:12:26.656Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T23:12:26.656Z] [BOT] Total entries: 9111
   Timestamp: 2026-01-25T23:12:26.614Z
[2026-01-25T23:12:26.657Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T23:12:26.657Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T23:12:26.657Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T23:12:26.657Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T23:12:26.657Z] [BOT] [STATS] Channel stats saved
[2026-01-25T23:12:28.673Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*