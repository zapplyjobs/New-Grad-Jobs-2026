# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T01:42:39.908Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T01:42:09.297Z] ========================================
[2026-01-26T01:42:09.299Z] Discord Bot Execution Log
[2026-01-26T01:42:09.299Z] Environment: GitHub Actions
[2026-01-26T01:42:09.299Z] Node Version: v20.20.0
[2026-01-26T01:42:09.299Z] ========================================
[2026-01-26T01:42:09.299Z] Environment Variables Check:
[2026-01-26T01:42:09.299Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T01:42:09.300Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.300Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T01:42:09.300Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T01:42:09.300Z] 
Multi-Channel Configuration:
[2026-01-26T01:42:09.300Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.300Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.300Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.300Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.300Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.300Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.301Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.301Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.301Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T01:42:09.301Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T01:42:09.301Z] 
Data Files Check:
[2026-01-26T01:42:09.302Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T01:42:09.307Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 555967 bytes)
[2026-01-26T01:42:09.307Z] 
========================================
[2026-01-26T01:42:09.307Z] Starting Enhanced Discord Bot...
[2026-01-26T01:42:09.307Z] ========================================
[2026-01-26T01:42:09.841Z] [BOT] ✅ Loaded V2 database: 973 jobs
[2026-01-26T01:42:10.375Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T01:42:10.376Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T01:42:10.376Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T01:42:10.495Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T01:42:10.499Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T01:42:10.499Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T01:42:10.499Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T01:42:10.500Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T01:42:10.500Z] [BOT] (2 grouped as same job with different locations)
[2026-01-26T01:42:10.500Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T01:42:10.501Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T01:42:10.504Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T01:42:10.504Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T01:42:10.505Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T01:42:10.522Z] [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T01:42:10.891Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T01:42:10.892Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T01:42:10.892Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory
[2026-01-26T01:42:10.895Z] [BOT] ✅ Loaded V2 database: 973 jobs
💾 DISK STATE: 973 jobs on disk
[2026-01-26T01:42:10.896Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=973
[2026-01-26T01:42:10.898Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T01:42:10.898Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-26T01:42:10.899Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T01:42:10.905Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-26T01:42:10.905Z] [BOT] ✅ Archiving complete: 6 archived, 967 active
[2026-01-26T01:42:10.913Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
[2026-01-26T01:42:10.913Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:12.415Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-26T01:42:12.415Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T01:42:12.589Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T01:42:12.589Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T01:42:12.589Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T01:42:12.589Z] [BOT] 💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T01:42:12.592Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-26T01:42:12.592Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T01:42:12.594Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T01:42:12.594Z] [BOT] 💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T01:42:12.595Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-26T01:42:12.603Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:14.103Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T01:42:14.103Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T01:42:14.494Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T01:42:14.494Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T01:42:14.494Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T01:42:14.497Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-26T01:42:14.497Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T01:42:14.499Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T01:42:14.499Z] [BOT] 💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T01:42:14.500Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-26T01:42:14.506Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:16.008Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T01:42:16.008Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T01:42:16.141Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T01:42:16.142Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T01:42:16.142Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T01:42:16.142Z] [BOT] 💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T01:42:16.145Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-26T01:42:16.145Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T01:42:16.147Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T01:42:16.147Z] [BOT] 💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T01:42:16.148Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-26T01:42:16.154Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:20.657Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T01:42:20.657Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T01:42:20.657Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T01:42:20.859Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T01:42:20.859Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T01:42:20.859Z] [BOT] 💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T01:42:20.863Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-26T01:42:20.864Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T01:42:20.866Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T01:42:20.866Z] [BOT] 💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T01:42:20.867Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-26T01:42:20.876Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:22.377Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T01:42:22.377Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T01:42:22.552Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T01:42:22.552Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T01:42:22.555Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-26T01:42:22.555Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T01:42:22.558Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T01:42:22.558Z] [BOT] 💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T01:42:22.558Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-26T01:42:22.568Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:24.070Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T01:42:24.070Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T01:42:24.436Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T01:42:24.437Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T01:42:24.437Z] [BOT] 💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T01:42:24.440Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-26T01:42:24.440Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T01:42:24.443Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T01:42:24.443Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-26T01:42:24.452Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:25.954Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T01:42:25.955Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T01:42:26.098Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T01:42:26.098Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T01:42:26.098Z] [BOT] 💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T01:42:26.101Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-26T01:42:26.101Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T01:42:26.103Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T01:42:26.104Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-26T01:42:26.111Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:27.613Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T01:42:27.613Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T01:42:27.740Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T01:42:27.740Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T01:42:27.741Z] [BOT] 💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T01:42:27.744Z] [BOT] ✅ Loaded V2 database: 967 jobs
[2026-01-26T01:42:27.744Z] [BOT] 💾 DISK STATE: 967 jobs on disk
[2026-01-26T01:42:27.744Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T01:42:27.746Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T01:42:27.746Z] [BOT] 💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T01:42:27.747Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-26T01:42:27.755Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:32.255Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T01:42:32.256Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T01:42:32.256Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T01:42:32.503Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T01:42:32.503Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T01:42:32.503Z] [BOT] 💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T01:42:32.507Z] [BOT] ✅ Loaded V2 database: 967 jobs
[2026-01-26T01:42:32.507Z] [BOT] 💾 DISK STATE: 967 jobs on disk
[2026-01-26T01:42:32.507Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T01:42:32.510Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T01:42:32.510Z] [BOT] 💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T01:42:32.511Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-26T01:42:32.518Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
[2026-01-26T01:42:32.518Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T01:42:37.021Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T01:42:37.023Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T01:42:37.121Z] [BOT] 📂 Loaded 9161 existing routing entries
[2026-01-26T01:42:37.246Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T01:42:37.246Z] [BOT] Total entries: 9171
   Timestamp: 2026-01-26T01:42:37.201Z
[2026-01-26T01:42:37.247Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T01:42:37.247Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-26T01:42:37.247Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T01:42:37.247Z] [BOT] [STATS] Channel stats saved
[2026-01-26T01:42:39.266Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*