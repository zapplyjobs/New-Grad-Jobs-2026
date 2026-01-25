# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T04:29:45.470Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T04:29:14.884Z] ========================================
[2026-01-25T04:29:14.886Z] Discord Bot Execution Log
[2026-01-25T04:29:14.886Z] Environment: GitHub Actions
[2026-01-25T04:29:14.886Z] Node Version: v20.20.0
[2026-01-25T04:29:14.886Z] ========================================
[2026-01-25T04:29:14.886Z] Environment Variables Check:
[2026-01-25T04:29:14.886Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T04:29:14.886Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.887Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T04:29:14.887Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T04:29:14.887Z] 
Multi-Channel Configuration:
[2026-01-25T04:29:14.887Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.887Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.887Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.887Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.887Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.887Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.887Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.887Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.887Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T04:29:14.888Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T04:29:14.888Z] 
Data Files Check:
[2026-01-25T04:29:14.889Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T04:29:14.894Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 639900 bytes)
[2026-01-25T04:29:14.894Z] 
========================================
[2026-01-25T04:29:14.894Z] Starting Enhanced Discord Bot...
[2026-01-25T04:29:14.894Z] ========================================
[2026-01-25T04:29:15.451Z] [BOT] ✅ Loaded V2 database: 1124 jobs
[2026-01-25T04:29:16.107Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T04:29:16.107Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T04:29:16.108Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T04:29:16.230Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-25T04:29:16.231Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T04:29:16.236Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T04:29:16.236Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T04:29:16.236Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T04:29:16.238Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T04:29:16.238Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T04:29:16.238Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T04:29:16.242Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T04:29:16.242Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T04:29:16.242Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:29:16.243Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:16.260Z] [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T04:29:16.548Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T04:29:16.548Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T04:29:16.549Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T04:29:16.549Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:29:16.553Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:29:16.556Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:29:16.556Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:29:16.557Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T04:29:16.563Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-25T04:29:16.563Z] [BOT] ✅ Archiving complete: 7 archived, 1117 active
[2026-01-25T04:29:16.573Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:18.076Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:29:18.077Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:18.223Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T04:29:18.224Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T04:29:18.224Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:29:18.227Z] [BOT] ✅ Loaded V2 database: 1117 jobs
💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:29:18.230Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:29:18.230Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:29:18.231Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-25T04:29:18.239Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:19.740Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:29:19.741Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:19.885Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T04:29:19.886Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T04:29:19.886Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T04:29:19.886Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:29:19.890Z] [BOT] ✅ Loaded V2 database: 1117 jobs
[2026-01-25T04:29:19.890Z] [BOT] 💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:29:19.892Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:29:19.893Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:29:19.893Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-25T04:29:19.902Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
[2026-01-25T04:29:19.902Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:21.404Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:29:21.405Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:21.913Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T04:29:21.914Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T04:29:21.914Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T04:29:21.914Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:29:21.918Z] [BOT] ✅ Loaded V2 database: 1117 jobs
💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:29:21.920Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:29:21.920Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:29:21.921Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-25T04:29:21.931Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:26.434Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T04:29:26.435Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T04:29:26.435Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:29:26.436Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:26.684Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T04:29:26.684Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T04:29:26.685Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T04:29:26.685Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:29:26.690Z] [BOT] ✅ Loaded V2 database: 1117 jobs
💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:29:26.693Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:29:26.693Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:29:26.694Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-25T04:29:26.704Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:28.206Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T04:29:28.206Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:29:28.207Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:28.314Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T04:29:28.315Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T04:29:28.315Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T04:29:28.315Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:29:28.319Z] [BOT] ✅ Loaded V2 database: 1117 jobs
💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:29:28.322Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:29:28.322Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:29:28.323Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-25T04:29:28.332Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:29.834Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T04:29:29.835Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:29:29.835Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:29.976Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T04:29:29.976Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T04:29:29.977Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T04:29:29.977Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:29:29.980Z] [BOT] ✅ Loaded V2 database: 1117 jobs
💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:29:29.983Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:29:29.984Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-25T04:29:29.992Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:31.492Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T04:29:31.492Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:29:31.492Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:31.640Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T04:29:31.641Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T04:29:31.641Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T04:29:31.641Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:29:31.645Z] [BOT] ✅ Loaded V2 database: 1117 jobs
💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:29:31.648Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:29:31.648Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:29:31.649Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-25T04:29:31.658Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:33.159Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T04:29:33.159Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:29:33.159Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:33.364Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T04:29:33.365Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T04:29:33.365Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:29:33.368Z] [BOT] ✅ Loaded V2 database: 1117 jobs
💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:29:33.371Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:29:33.371Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:29:33.372Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-25T04:29:33.382Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:37.884Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T04:29:37.884Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T04:29:37.884Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T04:29:37.885Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:29:38.115Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T04:29:38.116Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T04:29:38.116Z] [BOT] 💾 BEFORE MERGE: 1117 jobs in memory
[2026-01-25T04:29:38.119Z] [BOT] ✅ Loaded V2 database: 1117 jobs
[2026-01-25T04:29:38.120Z] [BOT] 💾 DISK STATE: 1117 jobs on disk
[2026-01-25T04:29:38.122Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T04:29:38.122Z] [BOT] 💾 AFTER MERGE: 1117 jobs (merged disk + memory)
[2026-01-25T04:29:38.123Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-25T04:29:38.132Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
[2026-01-25T04:29:38.132Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:29:42.634Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T04:29:42.636Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T04:29:42.729Z] [BOT] 📂 Loaded 8361 existing routing entries
[2026-01-25T04:29:42.849Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T04:29:42.849Z] [BOT] Total entries: 8371
   Timestamp: 2026-01-25T04:29:42.809Z
[2026-01-25T04:29:42.850Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T04:29:42.850Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T04:29:42.850Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
[2026-01-25T04:29:42.850Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T04:29:42.851Z] [BOT] [STATS] Channel stats saved
[2026-01-25T04:29:44.870Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*