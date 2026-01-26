# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T13:57:20.495Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T13:56:49.786Z] ========================================
[2026-01-26T13:56:49.789Z] Discord Bot Execution Log
[2026-01-26T13:56:49.789Z] Environment: GitHub Actions
[2026-01-26T13:56:49.789Z] Node Version: v20.20.0
[2026-01-26T13:56:49.789Z] ========================================
[2026-01-26T13:56:49.789Z] Environment Variables Check:
[2026-01-26T13:56:49.789Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T13:56:49.789Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.789Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T13:56:49.789Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T13:56:49.789Z] 
Multi-Channel Configuration:
[2026-01-26T13:56:49.790Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.790Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.790Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.790Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.790Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.790Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.790Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.790Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.790Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T13:56:49.790Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T13:56:49.790Z] 
Data Files Check:
[2026-01-26T13:56:49.791Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T13:56:49.795Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 495143 bytes)
[2026-01-26T13:56:49.795Z] 
========================================
[2026-01-26T13:56:49.795Z] Starting Enhanced Discord Bot...
[2026-01-26T13:56:49.795Z] ========================================
[2026-01-26T13:56:50.340Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T13:56:50.732Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T13:56:50.733Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T13:56:50.733Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T13:56:50.856Z] [BOT] ✅ Loaded pending queue: 2860 total (2810 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T13:56:50.860Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T13:56:50.861Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T13:56:50.861Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T13:56:50.862Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T13:56:50.862Z] [BOT] (2 grouped as same job with different locations)
[2026-01-26T13:56:50.862Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-26T13:56:50.862Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T13:56:50.866Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T13:56:50.866Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T13:56:50.866Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T13:56:50.883Z] [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T13:56:51.191Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T13:56:51.191Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T13:56:51.192Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:56:51.195Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T13:56:51.195Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:56:51.195Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:56:51.197Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T13:56:51.197Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:56:51.198Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:56:51.208Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T13:56:52.712Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T13:56:52.844Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T13:56:52.844Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T13:56:52.844Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:56:52.847Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T13:56:52.847Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:56:52.847Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:56:52.849Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T13:56:52.849Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:56:52.850Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:56:52.857Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T13:56:54.358Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T13:56:54.525Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T13:56:54.525Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T13:56:54.525Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:56:54.528Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:56:54.528Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:56:54.529Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T13:56:54.530Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:56:54.530Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:56:54.536Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T13:56:56.038Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T13:56:56.407Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T13:56:56.408Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:56:56.411Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:56:56.411Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:56:56.413Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T13:56:56.413Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:56:56.413Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:56:56.419Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T13:57:00.921Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T13:57:00.922Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T13:57:00.922Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T13:57:01.345Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T13:57:01.345Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T13:57:01.345Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:57:01.349Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:57:01.350Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:57:01.352Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T13:57:01.352Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:57:01.353Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:57:01.360Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T13:57:02.861Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T13:57:02.862Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T13:57:03.029Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T13:57:03.029Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T13:57:03.029Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:57:03.032Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:57:03.033Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:57:03.034Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:57:03.035Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:57:03.043Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T13:57:04.544Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T13:57:04.544Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T13:57:04.748Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T13:57:04.749Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:57:04.751Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:57:04.752Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:57:04.753Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T13:57:04.753Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:57:04.754Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:57:04.760Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T13:57:04.761Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T13:57:06.262Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T13:57:06.262Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T13:57:06.529Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T13:57:06.530Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T13:57:06.530Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:57:06.533Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:57:06.533Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:57:06.534Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:57:06.535Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:57:06.542Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T13:57:06.542Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T13:57:08.043Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T13:57:08.043Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T13:57:08.246Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T13:57:08.246Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T13:57:08.246Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:57:08.249Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:57:08.249Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:57:08.251Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:57:08.251Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:57:08.258Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T13:57:08.258Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T13:57:12.761Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T13:57:12.761Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T13:57:13.055Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T13:57:13.056Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T13:57:13.056Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:57:13.059Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T13:57:13.059Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T13:57:13.061Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:57:13.061Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:57:13.068Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T13:57:17.571Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T13:57:17.572Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T13:57:17.677Z] [BOT] 📂 Loaded 9481 existing routing entries
[2026-01-26T13:57:17.803Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9491
[2026-01-26T13:57:17.803Z] [BOT] Timestamp: 2026-01-26T13:57:17.754Z
[2026-01-26T13:57:17.804Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T13:57:17.804Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T13:57:17.804Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-26T13:57:17.804Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-26T13:57:17.804Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-26T13:57:17.805Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-26T13:57:17.805Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T13:57:17.814Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T13:57:17.815Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T13:57:17.822Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T13:57:17.822Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-26T13:57:19.840Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2465) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*