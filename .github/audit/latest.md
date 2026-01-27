# Discord Bot Execution Audit
**Timestamp:** 2026-01-27T03:46:16.771Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-27T03:45:45.895Z] ========================================
[2026-01-27T03:45:45.897Z] Discord Bot Execution Log
[2026-01-27T03:45:45.897Z] Environment: GitHub Actions
[2026-01-27T03:45:45.897Z] Node Version: v20.20.0
[2026-01-27T03:45:45.897Z] ========================================
[2026-01-27T03:45:45.897Z] Environment Variables Check:
[2026-01-27T03:45:45.897Z] DISCORD_TOKEN: ✅ Set
[2026-01-27T03:45:45.897Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-27T03:45:45.898Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-27T03:45:45.898Z] 
Multi-Channel Configuration:
[2026-01-27T03:45:45.898Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-27T03:45:45.898Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-27T03:45:45.899Z] 
Data Files Check:
[2026-01-27T03:45:45.900Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-27T03:45:45.903Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 464825 bytes)
[2026-01-27T03:45:45.903Z] 
========================================
[2026-01-27T03:45:45.903Z] Starting Enhanced Discord Bot...
[2026-01-27T03:45:45.903Z] ========================================
[2026-01-27T03:45:46.431Z] [BOT] ✅ Loaded V2 database: 805 jobs
[2026-01-27T03:45:46.920Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-27T03:45:46.920Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-27T03:45:46.920Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-27T03:45:47.038Z] [BOT] ✅ Loaded pending queue: 2917 total (2867 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-27T03:45:47.042Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-27T03:45:47.042Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-27T03:45:47.043Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-27T03:45:47.044Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-27T03:45:47.044Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-27T03:45:47.044Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-27T03:45:47.044Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-27T03:45:47.047Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-27T03:45:47.048Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T03:45:47.048Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T03:45:47.065Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-27T03:45:47.469Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-27T03:45:47.469Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T03:45:47.469Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-27T03:45:47.470Z] [BOT] 💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T03:45:47.472Z] [BOT] ✅ Loaded V2 database: 805 jobs
[2026-01-27T03:45:47.473Z] [BOT] 💾 DISK STATE: 805 jobs on disk
[2026-01-27T03:45:47.473Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T03:45:47.475Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:45:47.475Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T03:45:47.475Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-27T03:45:47.481Z] [BOT] 📦 Archived 34 jobs to 2026-01.json (34 total in archive)
[2026-01-27T03:45:47.481Z] [BOT] ✅ Archiving complete: 34 archived, 771 active
[2026-01-27T03:45:47.488Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T03:45:48.990Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-27T03:45:48.990Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T03:45:49.142Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-27T03:45:49.142Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-27T03:45:49.142Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-27T03:45:49.142Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:45:49.144Z] [BOT] ✅ Loaded V2 database: 771 jobs
[2026-01-27T03:45:49.144Z] [BOT] 💾 DISK STATE: 771 jobs on disk
[2026-01-27T03:45:49.145Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:45:49.146Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:45:49.146Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:45:49.147Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:45:49.153Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T03:45:50.653Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-27T03:45:50.653Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T03:45:50.805Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-27T03:45:50.805Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-27T03:45:50.805Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:45:50.808Z] [BOT] ✅ Loaded V2 database: 771 jobs
💾 DISK STATE: 771 jobs on disk
[2026-01-27T03:45:50.808Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:45:50.809Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:45:50.809Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:45:50.810Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:45:50.816Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T03:45:52.316Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-27T03:45:52.316Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T03:45:52.477Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-27T03:45:52.478Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-27T03:45:52.478Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:45:52.480Z] [BOT] ✅ Loaded V2 database: 771 jobs
💾 DISK STATE: 771 jobs on disk
[2026-01-27T03:45:52.481Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:45:52.482Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:45:52.483Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:45:52.488Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T03:45:56.990Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-27T03:45:56.991Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-27T03:45:56.991Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T03:45:57.173Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-27T03:45:57.173Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-27T03:45:57.174Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:45:57.177Z] [BOT] ✅ Loaded V2 database: 771 jobs
[2026-01-27T03:45:57.177Z] [BOT] 💾 DISK STATE: 771 jobs on disk
[2026-01-27T03:45:57.177Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:45:57.179Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:45:57.179Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:45:57.180Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:45:57.187Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T03:45:58.688Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-27T03:45:58.688Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T03:45:58.901Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-27T03:45:58.902Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T03:45:58.902Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:45:58.905Z] [BOT] ✅ Loaded V2 database: 771 jobs
[2026-01-27T03:45:58.905Z] [BOT] 💾 DISK STATE: 771 jobs on disk
[2026-01-27T03:45:58.905Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:45:58.907Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:45:58.907Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:45:58.908Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:45:58.913Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
[2026-01-27T03:45:58.913Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T03:46:00.415Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-27T03:46:00.415Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T03:46:00.805Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-27T03:46:00.805Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-27T03:46:00.806Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:46:00.809Z] [BOT] ✅ Loaded V2 database: 771 jobs
[2026-01-27T03:46:00.809Z] [BOT] 💾 DISK STATE: 771 jobs on disk
[2026-01-27T03:46:00.809Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:46:00.811Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:46:00.811Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:46:00.811Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:46:00.818Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T03:46:02.319Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-27T03:46:02.319Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T03:46:02.498Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-27T03:46:02.498Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-27T03:46:02.498Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-27T03:46:02.498Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:46:02.501Z] [BOT] ✅ Loaded V2 database: 771 jobs
[2026-01-27T03:46:02.501Z] [BOT] 💾 DISK STATE: 771 jobs on disk
[2026-01-27T03:46:02.501Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:46:02.503Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:46:02.503Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:46:02.503Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:46:02.510Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
[2026-01-27T03:46:02.510Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T03:46:04.012Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-27T03:46:04.012Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T03:46:04.216Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-27T03:46:04.216Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-27T03:46:04.216Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-27T03:46:04.216Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:46:04.219Z] [BOT] ✅ Loaded V2 database: 771 jobs
[2026-01-27T03:46:04.219Z] [BOT] 💾 DISK STATE: 771 jobs on disk
[2026-01-27T03:46:04.219Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:46:04.220Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:46:04.220Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:46:04.221Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:46:04.227Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T03:46:08.730Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-27T03:46:08.730Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-27T03:46:08.730Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-27T03:46:09.028Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-27T03:46:09.028Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-27T03:46:09.028Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-27T03:46:09.029Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:46:09.031Z] [BOT] ✅ Loaded V2 database: 771 jobs
[2026-01-27T03:46:09.031Z] [BOT] 💾 DISK STATE: 771 jobs on disk
[2026-01-27T03:46:09.031Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:46:09.033Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:46:09.033Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:46:09.033Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:46:09.040Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
[2026-01-27T03:46:09.040Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T03:46:13.542Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-27T03:46:13.543Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-27T03:46:13.651Z] [BOT] 📂 Loaded 9611 existing routing entries
[2026-01-27T03:46:13.770Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-27T03:46:13.771Z] [BOT] Total entries: 9621
   Timestamp: 2026-01-27T03:46:13.724Z
[2026-01-27T03:46:13.771Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_b2dc3916.jsonl
   Total attempts: 10
[2026-01-27T03:46:13.771Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-27T03:46:13.771Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-27T03:46:13.772Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-27T03:46:13.772Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-27T03:46:13.772Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T03:46:13.782Z] [BOT] ✅ Loaded V2 database: 771 jobs
💾 DISK STATE: 771 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T03:46:13.783Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T03:46:13.783Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T03:46:13.784Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-27T03:46:13.792Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
[2026-01-27T03:46:13.792Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-27T03:46:15.811Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*