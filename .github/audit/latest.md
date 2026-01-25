# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T19:02:28.777Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T19:01:57.618Z] ========================================
[2026-01-25T19:01:57.620Z] Discord Bot Execution Log
[2026-01-25T19:01:57.620Z] Environment: GitHub Actions
[2026-01-25T19:01:57.620Z] Node Version: v20.20.0
[2026-01-25T19:01:57.620Z] ========================================
[2026-01-25T19:01:57.620Z] Environment Variables Check:
[2026-01-25T19:01:57.620Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T19:01:57.620Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.620Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T19:01:57.620Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T19:01:57.620Z] 
Multi-Channel Configuration:
[2026-01-25T19:01:57.620Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.620Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.621Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.621Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.621Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.621Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.621Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.621Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.621Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T19:01:57.621Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T19:01:57.621Z] 
Data Files Check:
[2026-01-25T19:01:57.622Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T19:01:57.627Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594004 bytes)
[2026-01-25T19:01:57.627Z] 
========================================
[2026-01-25T19:01:57.627Z] Starting Enhanced Discord Bot...
[2026-01-25T19:01:57.627Z] ========================================
[2026-01-25T19:01:58.095Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:01:58.618Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T19:01:58.618Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T19:01:58.619Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T19:01:58.789Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T19:01:58.794Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T19:01:58.794Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T19:01:58.795Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T19:01:58.796Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T19:01:58.796Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T19:01:58.800Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T19:01:58.800Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:01:58.800Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:01:58.817Z] [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T19:01:59.115Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T19:01:59.115Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:01:59.115Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T19:01:59.116Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:01:59.119Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:01:59.120Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:01:59.122Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:01:59.122Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:01:59.123Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:01:59.135Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:00.638Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:02:00.917Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T19:02:00.917Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T19:02:00.917Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:02:00.921Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:02:00.921Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:02:00.923Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:02:00.924Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:02:00.933Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:02.433Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:02:02.620Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T19:02:02.620Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T19:02:02.621Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:02:02.624Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:02:02.625Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:02:02.627Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:02:02.628Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:02:02.636Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:04.136Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:02:04.337Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T19:02:04.337Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T19:02:04.337Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:02:04.341Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:02:04.341Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:02:04.343Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:02:04.344Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:02:04.351Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:08.853Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T19:02:08.853Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T19:02:08.853Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:02:09.055Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T19:02:09.056Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T19:02:09.056Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:02:09.061Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:02:09.061Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:02:09.063Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:02:09.064Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:02:09.064Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:02:09.073Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:10.575Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:02:10.831Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T19:02:10.831Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T19:02:10.831Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:02:10.835Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:02:10.835Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:02:10.837Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:02:10.837Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:02:10.838Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:02:10.847Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:12.348Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T19:02:12.348Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:02:12.525Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T19:02:12.525Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:02:12.529Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:02:12.529Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:02:12.531Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:02:12.531Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:02:12.532Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:02:12.541Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:14.043Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:02:14.043Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:02:14.328Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T19:02:14.328Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T19:02:14.328Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:02:14.332Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:02:14.332Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:02:14.334Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:02:14.335Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:02:14.342Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:15.844Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:02:15.844Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:02:16.010Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T19:02:16.010Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T19:02:16.010Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T19:02:16.010Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:02:16.014Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:02:16.015Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:02:16.017Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:02:16.017Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:02:16.017Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:02:16.025Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:20.528Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T19:02:20.528Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T19:02:20.528Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T19:02:21.211Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T19:02:21.211Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T19:02:21.211Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T19:02:21.211Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:02:21.215Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:02:21.215Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:02:21.217Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:02:21.217Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:02:21.218Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:02:21.226Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:02:25.728Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T19:02:25.729Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T19:02:25.835Z] [BOT] 📂 Loaded 8921 existing routing entries
[2026-01-25T19:02:25.941Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8931
   Timestamp: 2026-01-25T19:02:25.904Z
[2026-01-25T19:02:25.941Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T19:02:25.941Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T19:02:25.942Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T19:02:25.942Z] [BOT] [STATS] Channel stats saved
[2026-01-25T19:02:27.955Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*