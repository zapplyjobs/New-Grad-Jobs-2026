# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T09:54:22.050Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T09:53:49.736Z] ========================================
[2026-01-26T09:53:49.738Z] Discord Bot Execution Log
[2026-01-26T09:53:49.738Z] Environment: GitHub Actions
[2026-01-26T09:53:49.738Z] Node Version: v20.20.0
[2026-01-26T09:53:49.738Z] ========================================
[2026-01-26T09:53:49.739Z] Environment Variables Check:
[2026-01-26T09:53:49.739Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T09:53:49.739Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.739Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T09:53:49.739Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T09:53:49.739Z] 
Multi-Channel Configuration:
[2026-01-26T09:53:49.739Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.739Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.739Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.739Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.739Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.740Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.740Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.740Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.740Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T09:53:49.740Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T09:53:49.740Z] 
Data Files Check:
[2026-01-26T09:53:49.741Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T09:53:49.745Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 499684 bytes)
[2026-01-26T09:53:49.745Z] 
========================================
[2026-01-26T09:53:49.745Z] Starting Enhanced Discord Bot...
[2026-01-26T09:53:49.745Z] ========================================
[2026-01-26T09:53:50.256Z] [BOT] ✅ Loaded V2 database: 868 jobs
[2026-01-26T09:53:50.874Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T09:53:50.875Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T09:53:50.875Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T09:53:50.992Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T09:53:50.996Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T09:53:50.996Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T09:53:50.996Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T09:53:50.997Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T09:53:50.997Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T09:53:50.998Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T09:53:51.001Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T09:53:51.001Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T09:53:51.002Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:53:51.018Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T09:53:51.223Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T09:53:51.223Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T09:53:51.224Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T09:53:51.224Z] [BOT] 💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:53:51.227Z] [BOT] ✅ Loaded V2 database: 868 jobs
[2026-01-26T09:53:51.227Z] [BOT] 💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:53:51.227Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:53:51.229Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:53:51.229Z] [BOT] 💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:53:51.230Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T09:53:51.235Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-26T09:53:51.235Z] [BOT] ✅ Archiving complete: 3 archived, 865 active
[2026-01-26T09:53:51.243Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:53:52.746Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-26T09:53:52.746Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:53:52.992Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T09:53:52.992Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T09:53:52.992Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T09:53:52.992Z] [BOT] 💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T09:53:52.995Z] [BOT] ✅ Loaded V2 database: 865 jobs
[2026-01-26T09:53:52.995Z] [BOT] 💾 DISK STATE: 865 jobs on disk
[2026-01-26T09:53:52.995Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T09:53:52.996Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:53:52.997Z] [BOT] 💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T09:53:52.997Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-26T09:53:53.004Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-26T09:53:53.004Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:53:54.504Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T09:53:54.504Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:53:54.698Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T09:53:54.698Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T09:53:54.698Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T09:53:54.701Z] [BOT] ✅ Loaded V2 database: 865 jobs
💾 DISK STATE: 865 jobs on disk
[2026-01-26T09:53:54.701Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T09:53:54.703Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:53:54.703Z] [BOT] 💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T09:53:54.703Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-26T09:53:54.709Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-26T09:53:54.710Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:53:56.211Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T09:53:56.211Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:53:56.465Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T09:53:56.466Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T09:53:56.466Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T09:53:56.469Z] [BOT] ✅ Loaded V2 database: 865 jobs
💾 DISK STATE: 865 jobs on disk
[2026-01-26T09:53:56.469Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T09:53:56.471Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T09:53:56.471Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-26T09:53:56.477Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-26T09:53:56.477Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:54:00.980Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T09:54:00.980Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T09:54:00.980Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:54:01.351Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T09:54:01.351Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T09:54:01.354Z] [BOT] ✅ Loaded V2 database: 865 jobs
[2026-01-26T09:54:01.354Z] [BOT] 💾 DISK STATE: 865 jobs on disk
[2026-01-26T09:54:01.355Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T09:54:01.357Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:54:01.357Z] [BOT] 💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T09:54:01.358Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-26T09:54:01.365Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-26T09:54:01.365Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:54:02.867Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T09:54:02.867Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:54:03.062Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T09:54:03.062Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T09:54:03.062Z] [BOT] 💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T09:54:03.065Z] [BOT] ✅ Loaded V2 database: 865 jobs
[2026-01-26T09:54:03.065Z] [BOT] 💾 DISK STATE: 865 jobs on disk
[2026-01-26T09:54:03.066Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T09:54:03.067Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T09:54:03.068Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-26T09:54:03.075Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-26T09:54:03.075Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:54:04.576Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T09:54:04.577Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:54:04.842Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T09:54:04.842Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T09:54:04.842Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T09:54:04.845Z] [BOT] ✅ Loaded V2 database: 865 jobs
💾 DISK STATE: 865 jobs on disk
[2026-01-26T09:54:04.845Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T09:54:04.847Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:54:04.847Z] [BOT] 💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T09:54:04.847Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-26T09:54:04.854Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-26T09:54:04.854Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:54:06.356Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-26T09:54:06.356Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:54:06.514Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T09:54:06.514Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T09:54:06.517Z] [BOT] ✅ Loaded V2 database: 865 jobs
[2026-01-26T09:54:06.517Z] [BOT] 💾 DISK STATE: 865 jobs on disk
[2026-01-26T09:54:06.517Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T09:54:06.519Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T09:54:06.519Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-26T09:54:06.526Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-26T09:54:06.526Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:54:08.027Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T09:54:08.027Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:54:08.237Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T09:54:08.237Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T09:54:08.237Z] [BOT] 💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T09:54:08.240Z] [BOT] ✅ Loaded V2 database: 865 jobs
[2026-01-26T09:54:08.240Z] [BOT] 💾 DISK STATE: 865 jobs on disk
[2026-01-26T09:54:08.240Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T09:54:08.242Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:54:08.242Z] [BOT] 💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T09:54:08.243Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-26T09:54:08.249Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-26T09:54:08.249Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:54:12.750Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T09:54:12.751Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T09:54:14.435Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T09:54:14.436Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T09:54:14.436Z] [BOT] 💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T09:54:14.439Z] [BOT] ✅ Loaded V2 database: 865 jobs
💾 DISK STATE: 865 jobs on disk
[2026-01-26T09:54:14.439Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T09:54:14.440Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T09:54:14.441Z] [BOT] ✅ No jobs to archive (all 865 jobs within 7-day window)
[2026-01-26T09:54:14.449Z] [BOT] 💾 Saved posted_jobs.json: 865 active jobs
[2026-01-26T09:54:14.449Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:54:18.952Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T09:54:18.953Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T09:54:19.058Z] [BOT] 📂 Loaded 9361 existing routing entries
[2026-01-26T09:54:19.173Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T09:54:19.173Z] [BOT] Total entries: 9371
   Timestamp: 2026-01-26T09:54:19.128Z
[2026-01-26T09:54:19.174Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T09:54:19.174Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T09:54:19.174Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T09:54:19.174Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T09:54:19.174Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T09:54:19.174Z] [BOT] [STATS] Channel stats saved
[2026-01-26T09:54:21.191Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*