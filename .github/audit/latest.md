# Discord Bot Execution Audit
**Timestamp:** 2026-01-27T18:21:52.607Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-27T18:21:19.747Z] ========================================
[2026-01-27T18:21:19.749Z] Discord Bot Execution Log
[2026-01-27T18:21:19.749Z] Environment: GitHub Actions
[2026-01-27T18:21:19.749Z] Node Version: v20.20.0
[2026-01-27T18:21:19.750Z] ========================================
[2026-01-27T18:21:19.750Z] Environment Variables Check:
[2026-01-27T18:21:19.750Z] DISCORD_TOKEN: ✅ Set
[2026-01-27T18:21:19.750Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.750Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-27T18:21:19.750Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-27T18:21:19.750Z] 
Multi-Channel Configuration:
[2026-01-27T18:21:19.750Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.750Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.750Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.750Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.750Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.751Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.751Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.751Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.751Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-27T18:21:19.751Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-27T18:21:19.751Z] 
Data Files Check:
[2026-01-27T18:21:19.752Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-27T18:21:19.755Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 364062 bytes)
[2026-01-27T18:21:19.755Z] 
========================================
[2026-01-27T18:21:19.755Z] Starting Enhanced Discord Bot...
[2026-01-27T18:21:19.755Z] ========================================
[2026-01-27T18:21:20.291Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T18:21:21.018Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-27T18:21:21.018Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-27T18:21:21.018Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-27T18:21:21.135Z] [BOT] ✅ Loaded pending queue: 2934 total (2884 pending, 50 enriched, 0 posted)
[2026-01-27T18:21:21.135Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-27T18:21:21.135Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-27T18:21:21.139Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-27T18:21:21.139Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-27T18:21:21.140Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-27T18:21:21.141Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-27T18:21:21.141Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-27T18:21:21.141Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-27T18:21:21.144Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-27T18:21:21.145Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T18:21:21.145Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T18:21:21.162Z] [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-27T18:21:21.575Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-27T18:21:21.575Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T18:21:21.576Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-27T18:21:21.576Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:21.579Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T18:21:21.579Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:21.579Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:21.582Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T18:21:21.582Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:21.582Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:21.591Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:23.093Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T18:21:23.445Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-27T18:21:23.445Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:23.448Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:23.448Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:23.449Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T18:21:23.449Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:23.450Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:23.454Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:24.955Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T18:21:25.280Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-27T18:21:25.280Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:25.282Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:25.283Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:25.284Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:25.284Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:25.289Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:26.791Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T18:21:27.177Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-27T18:21:27.178Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-27T18:21:27.178Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:27.180Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:27.180Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:27.182Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T18:21:27.182Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:27.182Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:27.187Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T18:21:27.187Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:31.688Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-27T18:21:31.689Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-27T18:21:31.689Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T18:21:32.000Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-27T18:21:32.000Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-27T18:21:32.000Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-27T18:21:32.000Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:32.002Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T18:21:32.002Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:32.003Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:32.005Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T18:21:32.005Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:32.006Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:32.012Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T18:21:32.012Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:33.514Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-27T18:21:33.514Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T18:21:33.766Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-27T18:21:33.766Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-27T18:21:33.766Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:33.768Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T18:21:33.769Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:33.769Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:33.770Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T18:21:33.770Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:33.770Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:33.776Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:35.278Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T18:21:35.278Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T18:21:35.575Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-27T18:21:35.575Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T18:21:35.575Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:35.577Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:35.577Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:35.578Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:35.579Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:35.584Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T18:21:35.584Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:37.086Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T18:21:37.086Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T18:21:37.250Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-27T18:21:37.250Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-27T18:21:37.250Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:37.252Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:37.253Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:37.254Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T18:21:37.254Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:37.254Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:37.259Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T18:21:37.259Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:38.761Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T18:21:38.761Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T18:21:39.247Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-27T18:21:39.247Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-27T18:21:39.247Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:39.250Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T18:21:39.250Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:39.250Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:39.251Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T18:21:39.251Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:39.252Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:39.257Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T18:21:39.258Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:43.760Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-27T18:21:43.760Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-27T18:21:43.760Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-27T18:21:44.565Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-27T18:21:44.565Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-27T18:21:44.565Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:44.567Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T18:21:44.567Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T18:21:44.569Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:44.569Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:44.575Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T18:21:44.576Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T18:21:49.078Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-27T18:21:49.079Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-27T18:21:49.181Z] [BOT] 📂 Loaded 9661 existing routing entries
[2026-01-27T18:21:49.301Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-27T18:21:49.302Z] [BOT] Total entries: 9671
   Timestamp: 2026-01-27T18:21:49.256Z
[2026-01-27T18:21:49.302Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_b2dc3916.jsonl
   Total attempts: 10
[2026-01-27T18:21:49.302Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-27T18:21:49.302Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-27T18:21:49.303Z] [BOT] [STATS] Channel stats saved
[2026-01-27T18:21:49.303Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T18:21:49.311Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=630
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T18:21:49.311Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T18:21:49.317Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T18:21:49.317Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-27T18:21:51.335Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*