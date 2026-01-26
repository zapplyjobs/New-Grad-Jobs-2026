# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T14:33:10.006Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T14:32:38.350Z] ========================================
[2026-01-26T14:32:38.352Z] Discord Bot Execution Log
[2026-01-26T14:32:38.353Z] Environment: GitHub Actions
[2026-01-26T14:32:38.353Z] Node Version: v20.20.0
[2026-01-26T14:32:38.353Z] ========================================
[2026-01-26T14:32:38.353Z] Environment Variables Check:
[2026-01-26T14:32:38.353Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T14:32:38.353Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.353Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T14:32:38.353Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T14:32:38.353Z] 
Multi-Channel Configuration:
[2026-01-26T14:32:38.353Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.353Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.354Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.354Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.354Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.354Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.354Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.354Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.354Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T14:32:38.354Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T14:32:38.354Z] 
Data Files Check:
[2026-01-26T14:32:38.355Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T14:32:38.359Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 495143 bytes)
[2026-01-26T14:32:38.359Z] 
========================================
[2026-01-26T14:32:38.359Z] Starting Enhanced Discord Bot...
[2026-01-26T14:32:38.359Z] ========================================
[2026-01-26T14:32:38.890Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:32:39.396Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T14:32:39.396Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T14:32:39.396Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T14:32:39.519Z] [BOT] ✅ Loaded pending queue: 2860 total (2810 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T14:32:39.522Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T14:32:39.523Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T14:32:39.523Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T14:32:39.524Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T14:32:39.524Z] [BOT] (2 grouped as same job with different locations)
[2026-01-26T14:32:39.524Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T14:32:39.525Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T14:32:39.528Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T14:32:39.528Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T14:32:39.529Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:32:39.546Z] [BOT ERROR] (node:2489) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T14:32:39.726Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T14:32:39.727Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T14:32:39.727Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T14:32:39.727Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:32:39.731Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:32:39.731Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:32:39.731Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:32:39.733Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:32:39.733Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:32:39.734Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:32:39.745Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:32:41.246Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:32:41.528Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T14:32:41.528Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T14:32:41.528Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:32:41.531Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:32:41.531Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:32:41.531Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:32:41.533Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:32:41.533Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:32:41.534Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:32:41.541Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:32:41.541Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:32:43.042Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:32:43.271Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T14:32:43.272Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T14:32:43.272Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:32:43.275Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:32:43.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:32:43.277Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:32:43.277Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:32:43.277Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:32:43.284Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:32:44.785Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T14:32:44.785Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:32:45.144Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T14:32:45.144Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T14:32:45.144Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:32:45.148Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:32:45.148Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:32:45.150Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:32:45.150Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:32:45.150Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:32:45.156Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:32:45.156Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:32:49.657Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T14:32:49.658Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T14:32:49.658Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:32:50.044Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T14:32:50.044Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T14:32:50.044Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:32:50.048Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:32:50.048Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:32:50.050Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:32:50.051Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:32:50.059Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:32:50.059Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:32:51.560Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T14:32:51.560Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:32:51.845Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T14:32:51.845Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T14:32:51.845Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T14:32:51.846Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:32:51.849Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:32:51.849Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:32:51.849Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:32:51.851Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:32:51.851Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:32:51.851Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:32:51.859Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:32:51.859Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:32:53.360Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T14:32:53.360Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:32:53.537Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T14:32:53.537Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T14:32:53.537Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:32:53.540Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:32:53.540Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:32:53.541Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:32:53.543Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:32:53.543Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:32:53.543Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:32:53.550Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:32:55.051Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T14:32:55.051Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:32:55.424Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T14:32:55.424Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:32:55.427Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:32:55.428Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:32:55.430Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:32:55.431Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:32:55.431Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:32:55.437Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:32:55.437Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:32:56.938Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T14:32:56.938Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:32:57.178Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T14:32:57.178Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T14:32:57.178Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:32:57.181Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:32:57.181Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:32:57.182Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:32:57.183Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:32:57.183Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:32:57.183Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:32:57.190Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:32:57.190Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:33:01.694Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T14:33:01.694Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T14:33:01.695Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T14:33:01.901Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T14:33:01.902Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T14:33:01.902Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T14:33:01.902Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:33:01.905Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:33:01.905Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:33:01.907Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:33:01.907Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:33:01.907Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:33:01.915Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:33:06.418Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T14:33:06.419Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T14:33:06.527Z] [BOT] 📂 Loaded 9501 existing routing entries
[2026-01-26T14:33:06.650Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9511
[2026-01-26T14:33:06.650Z] [BOT] Timestamp: 2026-01-26T14:33:06.602Z
[2026-01-26T14:33:06.651Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T14:33:06.651Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
[2026-01-26T14:33:06.651Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T14:33:06.652Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-26T14:33:06.652Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:33:06.661Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=861
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:33:06.662Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:33:06.669Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:33:06.669Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-26T14:33:08.688Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2489) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*