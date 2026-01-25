# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T19:41:01.896Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T19:40:28.568Z] ========================================
[2026-01-25T19:40:28.570Z] Discord Bot Execution Log
[2026-01-25T19:40:28.570Z] Environment: GitHub Actions
[2026-01-25T19:40:28.570Z] Node Version: v20.20.0
[2026-01-25T19:40:28.570Z] ========================================
[2026-01-25T19:40:28.570Z] Environment Variables Check:
[2026-01-25T19:40:28.570Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T19:40:28.570Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.570Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T19:40:28.571Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T19:40:28.571Z] 
Multi-Channel Configuration:
[2026-01-25T19:40:28.571Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.571Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.571Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.571Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.571Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.571Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.571Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.571Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.571Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T19:40:28.571Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T19:40:28.571Z] 
Data Files Check:
[2026-01-25T19:40:28.573Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T19:40:28.577Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 593506 bytes)
[2026-01-25T19:40:28.577Z] 
========================================
[2026-01-25T19:40:28.577Z] Starting Enhanced Discord Bot...
[2026-01-25T19:40:28.577Z] ========================================
[2026-01-25T19:40:29.110Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:40:30.108Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T19:40:30.108Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T19:40:30.108Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T19:40:30.229Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T19:40:30.233Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T19:40:30.233Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T19:40:30.233Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T19:40:30.235Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T19:40:30.235Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T19:40:30.235Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T19:40:30.235Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T19:40:30.239Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T19:40:30.239Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:40:30.239Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:40:30.256Z] [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T19:40:30.482Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T19:40:30.482Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:40:30.483Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T19:40:30.483Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:30.487Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:30.487Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:30.490Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:40:30.490Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:30.491Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:30.504Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:40:30.504Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:32.006Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:40:32.363Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T19:40:32.364Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:32.367Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:40:32.367Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:32.367Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:32.369Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:40:32.369Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:32.370Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:32.377Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:33.877Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T19:40:33.878Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:40:34.123Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T19:40:34.123Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T19:40:34.123Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T19:40:34.124Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:34.127Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:34.127Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:34.129Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:40:34.129Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:34.130Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:34.138Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:40:34.138Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:35.639Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:40:35.914Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T19:40:35.914Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:35.918Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:35.918Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:35.920Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:35.921Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:35.928Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:40.428Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T19:40:40.429Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T19:40:40.429Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:40:41.378Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T19:40:41.379Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T19:40:41.379Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:41.383Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:41.383Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:41.386Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:40:41.387Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:41.387Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:41.397Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:42.898Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T19:40:42.898Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:40:43.207Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T19:40:43.208Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T19:40:43.208Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:43.212Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:40:43.212Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:43.212Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:43.214Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:40:43.214Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:43.215Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:43.225Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:44.726Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T19:40:44.726Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:40:45.099Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T19:40:45.099Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T19:40:45.099Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T19:40:45.099Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:45.103Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:45.103Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:45.105Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:40:45.105Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:45.106Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:45.118Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:40:45.118Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:46.620Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T19:40:46.620Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:40:46.990Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T19:40:46.991Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:46.994Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:46.994Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:46.996Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:40:46.997Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:46.997Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:47.006Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:40:47.006Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:48.507Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:40:48.507Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:40:48.794Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T19:40:48.794Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T19:40:48.794Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:48.798Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:48.798Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:48.800Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:40:48.800Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:48.800Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:48.809Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:53.312Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T19:40:53.313Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T19:40:53.313Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T19:40:53.838Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T19:40:53.839Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T19:40:53.839Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:40:53.842Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:40:53.842Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:40:53.845Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:40:53.845Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:40:53.845Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:40:53.853Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:40:53.854Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:40:58.355Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T19:40:58.357Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T19:40:58.458Z] [BOT] 📂 Loaded 8961 existing routing entries
[2026-01-25T19:40:58.563Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8971
[2026-01-25T19:40:58.563Z] [BOT] Timestamp: 2026-01-25T19:40:58.521Z
[2026-01-25T19:40:58.564Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T19:40:58.564Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T19:40:58.564Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T19:40:58.564Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T19:40:58.564Z] [BOT] [STATS] Channel stats saved
[2026-01-25T19:41:00.581Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*