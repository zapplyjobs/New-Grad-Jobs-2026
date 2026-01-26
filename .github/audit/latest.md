# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T07:59:31.247Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T07:58:59.732Z] ========================================
[2026-01-26T07:58:59.734Z] Discord Bot Execution Log
[2026-01-26T07:58:59.734Z] Environment: GitHub Actions
[2026-01-26T07:58:59.734Z] Node Version: v20.20.0
[2026-01-26T07:58:59.734Z] ========================================
[2026-01-26T07:58:59.734Z] Environment Variables Check:
[2026-01-26T07:58:59.734Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T07:58:59.735Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.735Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T07:58:59.735Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T07:58:59.735Z] 
Multi-Channel Configuration:
[2026-01-26T07:58:59.735Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.735Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.735Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.735Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.735Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.735Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.735Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.736Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.736Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T07:58:59.736Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T07:58:59.736Z] 
Data Files Check:
[2026-01-26T07:58:59.737Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T07:58:59.741Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 522776 bytes)
[2026-01-26T07:58:59.741Z] 
========================================
[2026-01-26T07:58:59.741Z] Starting Enhanced Discord Bot...
[2026-01-26T07:58:59.741Z] ========================================
[2026-01-26T07:59:00.284Z] [BOT] ✅ Loaded V2 database: 914 jobs
[2026-01-26T07:59:00.887Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T07:59:00.888Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T07:59:00.888Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T07:59:01.009Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T07:59:01.012Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T07:59:01.012Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T07:59:01.013Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T07:59:01.014Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T07:59:01.014Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T07:59:01.014Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T07:59:01.017Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T07:59:01.018Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T07:59:01.018Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:59:01.035Z] [BOT ERROR] (node:2472) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T07:59:01.208Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T07:59:01.208Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T07:59:01.209Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T07:59:01.209Z] [BOT] 💾 BEFORE MERGE: 914 jobs in memory
[2026-01-26T07:59:01.212Z] [BOT] ✅ Loaded V2 database: 914 jobs
[2026-01-26T07:59:01.212Z] [BOT] 💾 DISK STATE: 914 jobs on disk
[2026-01-26T07:59:01.212Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=914
[2026-01-26T07:59:01.214Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:59:01.215Z] [BOT] 💾 AFTER MERGE: 914 jobs (merged disk + memory)
[2026-01-26T07:59:01.216Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T07:59:01.221Z] [BOT] 📦 Archived 13 jobs to 2026-01.json (13 total in archive)
[2026-01-26T07:59:01.221Z] [BOT] ✅ Archiving complete: 13 archived, 901 active
[2026-01-26T07:59:01.228Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:02.731Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:59:02.923Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T07:59:02.923Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T07:59:02.923Z] [BOT] 💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T07:59:02.926Z] [BOT] ✅ Loaded V2 database: 901 jobs
💾 DISK STATE: 901 jobs on disk
[2026-01-26T07:59:02.927Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T07:59:02.929Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:59:02.929Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T07:59:02.929Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-26T07:59:02.936Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:04.438Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T07:59:04.438Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:59:04.800Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T07:59:04.800Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T07:59:04.803Z] [BOT] ✅ Loaded V2 database: 901 jobs
💾 DISK STATE: 901 jobs on disk
[2026-01-26T07:59:04.803Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T07:59:04.805Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:59:04.805Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T07:59:04.806Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-26T07:59:04.813Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:06.314Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T07:59:06.315Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:59:06.533Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T07:59:06.533Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T07:59:06.533Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T07:59:06.534Z] [BOT] 💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T07:59:06.537Z] [BOT] ✅ Loaded V2 database: 901 jobs
[2026-01-26T07:59:06.537Z] [BOT] 💾 DISK STATE: 901 jobs on disk
[2026-01-26T07:59:06.537Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T07:59:06.539Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:59:06.539Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T07:59:06.539Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-26T07:59:06.546Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
[2026-01-26T07:59:06.546Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:11.048Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T07:59:11.048Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T07:59:11.049Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:59:11.337Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T07:59:11.337Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T07:59:11.341Z] [BOT] ✅ Loaded V2 database: 901 jobs
[2026-01-26T07:59:11.341Z] [BOT] 💾 DISK STATE: 901 jobs on disk
[2026-01-26T07:59:11.342Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T07:59:11.344Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:59:11.344Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T07:59:11.345Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-26T07:59:11.354Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:12.856Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T07:59:12.856Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:59:13.104Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T07:59:13.105Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T07:59:13.108Z] [BOT] ✅ Loaded V2 database: 901 jobs
💾 DISK STATE: 901 jobs on disk
[2026-01-26T07:59:13.108Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T07:59:13.110Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:59:13.110Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T07:59:13.110Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-26T07:59:13.117Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:14.619Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T07:59:14.619Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:59:14.918Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T07:59:14.918Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T07:59:14.918Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T07:59:14.918Z] [BOT] 💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T07:59:14.921Z] [BOT] ✅ Loaded V2 database: 901 jobs
[2026-01-26T07:59:14.922Z] [BOT] 💾 DISK STATE: 901 jobs on disk
[2026-01-26T07:59:14.922Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T07:59:14.924Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:59:14.924Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T07:59:14.925Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-26T07:59:14.932Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:16.434Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-26T07:59:16.434Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:59:16.619Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T07:59:16.619Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T07:59:16.620Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T07:59:16.622Z] [BOT] ✅ Loaded V2 database: 901 jobs
[2026-01-26T07:59:16.622Z] [BOT] 💾 DISK STATE: 901 jobs on disk
[2026-01-26T07:59:16.623Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T07:59:16.624Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:59:16.624Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T07:59:16.625Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-26T07:59:16.632Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
[2026-01-26T07:59:16.632Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:18.133Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T07:59:18.133Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:59:18.358Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T07:59:18.358Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T07:59:18.358Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T07:59:18.361Z] [BOT] ✅ Loaded V2 database: 901 jobs
💾 DISK STATE: 901 jobs on disk
[2026-01-26T07:59:18.361Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T07:59:18.364Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:59:18.364Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T07:59:18.364Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-26T07:59:18.372Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:22.873Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T07:59:22.873Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T07:59:23.107Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T07:59:23.107Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T07:59:23.107Z] [BOT] 💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T07:59:23.110Z] [BOT] ✅ Loaded V2 database: 901 jobs
[2026-01-26T07:59:23.110Z] [BOT] 💾 DISK STATE: 901 jobs on disk
[2026-01-26T07:59:23.110Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T07:59:23.112Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T07:59:23.113Z] [BOT] ✅ No jobs to archive (all 901 jobs within 7-day window)
[2026-01-26T07:59:23.120Z] [BOT] 💾 Saved posted_jobs.json: 901 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:59:27.622Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T07:59:27.624Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T07:59:27.726Z] [BOT] 📂 Loaded 9301 existing routing entries
[2026-01-26T07:59:27.847Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9311
[2026-01-26T07:59:27.847Z] [BOT] Timestamp: 2026-01-26T07:59:27.803Z
[2026-01-26T07:59:27.847Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T07:59:27.848Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T07:59:27.848Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T07:59:27.848Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T07:59:27.848Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-26T07:59:27.848Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-26T07:59:27.848Z] [BOT] [STATS] Channel stats saved
[2026-01-26T07:59:29.866Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2472) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*