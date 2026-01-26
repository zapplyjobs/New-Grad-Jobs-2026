# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T15:37:20.969Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T15:36:50.591Z] ========================================
[2026-01-26T15:36:50.593Z] Discord Bot Execution Log
[2026-01-26T15:36:50.593Z] Environment: GitHub Actions
[2026-01-26T15:36:50.593Z] Node Version: v20.20.0
[2026-01-26T15:36:50.593Z] ========================================
[2026-01-26T15:36:50.593Z] Environment Variables Check:
[2026-01-26T15:36:50.593Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T15:36:50.593Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.593Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T15:36:50.593Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T15:36:50.594Z] 
Multi-Channel Configuration:
[2026-01-26T15:36:50.594Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.594Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.594Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.594Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.594Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.594Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.594Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.594Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.594Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T15:36:50.594Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T15:36:50.594Z] 
Data Files Check:
[2026-01-26T15:36:50.595Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T15:36:50.599Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 494573 bytes)
[2026-01-26T15:36:50.599Z] 
========================================
[2026-01-26T15:36:50.599Z] Starting Enhanced Discord Bot...
[2026-01-26T15:36:50.599Z] ========================================
[2026-01-26T15:36:51.119Z] [BOT] ✅ Loaded V2 database: 860 jobs
[2026-01-26T15:36:51.574Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T15:36:51.574Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T15:36:51.575Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T15:36:51.693Z] [BOT] ✅ Loaded pending queue: 2866 total (2816 pending, 50 enriched, 0 posted)
[2026-01-26T15:36:51.693Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T15:36:51.698Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T15:36:51.698Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T15:36:51.698Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T15:36:51.699Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T15:36:51.699Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T15:36:51.700Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T15:36:51.703Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T15:36:51.704Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T15:36:51.704Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:36:51.720Z] [BOT ERROR] (node:2509) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T15:36:52.045Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T15:36:52.045Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T15:36:52.045Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T15:36:52.046Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:36:52.048Z] [BOT] ✅ Loaded V2 database: 860 jobs
[2026-01-26T15:36:52.048Z] [BOT] 💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:36:52.049Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:36:52.051Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:36:52.051Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:36:52.051Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:36:52.063Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:36:52.063Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:36:53.566Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:36:53.747Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T15:36:53.747Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T15:36:53.747Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:36:53.750Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:36:53.750Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:36:53.752Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:36:53.752Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:36:53.753Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:36:53.760Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T15:36:55.262Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:36:55.491Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T15:36:55.491Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T15:36:55.491Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T15:36:55.491Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:36:55.494Z] [BOT] ✅ Loaded V2 database: 860 jobs
[2026-01-26T15:36:55.494Z] [BOT] 💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:36:55.494Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:36:55.496Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:36:55.496Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:36:55.497Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:36:55.503Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:36:55.503Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:36:57.004Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T15:36:57.005Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:36:57.215Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T15:36:57.215Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T15:36:57.215Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T15:36:57.215Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:36:57.218Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:36:57.219Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:36:57.220Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:36:57.220Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:36:57.221Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:36:57.227Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:36:57.227Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:37:01.729Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T15:37:01.730Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T15:37:01.730Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:37:01.899Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T15:37:01.899Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T15:37:01.899Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:37:01.902Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:37:01.904Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:37:01.906Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:37:01.906Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:37:01.906Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:37:01.914Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:37:01.914Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:37:03.415Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T15:37:03.415Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:37:03.694Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T15:37:03.694Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T15:37:03.695Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:37:03.698Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:37:03.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:37:03.699Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:37:03.700Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:37:03.708Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T15:37:05.210Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T15:37:05.210Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:37:05.353Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T15:37:05.353Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T15:37:05.353Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:37:05.357Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:37:05.357Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:37:05.358Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:37:05.358Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:37:05.359Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:37:05.365Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:37:05.365Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:37:06.866Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T15:37:06.866Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:37:07.109Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T15:37:07.109Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T15:37:07.109Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:37:07.112Z] [BOT] ✅ Loaded V2 database: 860 jobs
[2026-01-26T15:37:07.112Z] [BOT] 💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:37:07.112Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:37:07.114Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:37:07.114Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:37:07.114Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:37:07.121Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:37:07.121Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:37:08.622Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T15:37:08.622Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:37:08.781Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T15:37:08.781Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T15:37:08.782Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T15:37:08.782Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:37:08.785Z] [BOT] ✅ Loaded V2 database: 860 jobs
[2026-01-26T15:37:08.785Z] [BOT] 💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:37:08.785Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:37:08.786Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:37:08.786Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:37:08.787Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:37:08.793Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:37:08.793Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:37:13.295Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T15:37:13.295Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T15:37:13.296Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T15:37:13.516Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T15:37:13.517Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T15:37:13.517Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:37:13.520Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:37:13.520Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:37:13.522Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:37:13.522Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:37:13.528Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T15:37:18.031Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T15:37:18.032Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T15:37:18.132Z] [BOT] 📂 Loaded 9541 existing routing entries
[2026-01-26T15:37:18.256Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T15:37:18.256Z] [BOT] Total entries: 9551
   Timestamp: 2026-01-26T15:37:18.210Z
[2026-01-26T15:37:18.257Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T15:37:18.257Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T15:37:18.257Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T15:37:18.257Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-26T15:37:18.257Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T15:37:18.257Z] [BOT] [STATS] Channel stats saved
[2026-01-26T15:37:18.257Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:37:18.267Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=860
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:37:18.268Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:37:18.274Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:37:18.274Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-26T15:37:20.294Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2509) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*