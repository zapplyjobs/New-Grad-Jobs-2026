# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T14:51:37.060Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T14:51:05.063Z] ========================================
[2026-01-26T14:51:05.065Z] Discord Bot Execution Log
[2026-01-26T14:51:05.065Z] Environment: GitHub Actions
[2026-01-26T14:51:05.065Z] Node Version: v20.20.0
[2026-01-26T14:51:05.066Z] ========================================
[2026-01-26T14:51:05.066Z] Environment Variables Check:
[2026-01-26T14:51:05.066Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T14:51:05.066Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.066Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T14:51:05.066Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T14:51:05.066Z] 
Multi-Channel Configuration:
[2026-01-26T14:51:05.066Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.066Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.066Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.067Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.067Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.067Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.067Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.067Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.067Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T14:51:05.067Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T14:51:05.067Z] 
Data Files Check:
[2026-01-26T14:51:05.068Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T14:51:05.072Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 495143 bytes)
[2026-01-26T14:51:05.072Z] 
========================================
[2026-01-26T14:51:05.072Z] Starting Enhanced Discord Bot...
[2026-01-26T14:51:05.072Z] ========================================
[2026-01-26T14:51:05.590Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:51:06.175Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T14:51:06.175Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T14:51:06.175Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T14:51:06.292Z] [BOT] ✅ Loaded pending queue: 2860 total (2810 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T14:51:06.296Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T14:51:06.296Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T14:51:06.297Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T14:51:06.297Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T14:51:06.298Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T14:51:06.298Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T14:51:06.298Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T14:51:06.301Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T14:51:06.302Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T14:51:06.302Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:51:06.318Z] [BOT ERROR] (node:2484) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T14:51:06.487Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T14:51:06.487Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T14:51:06.488Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T14:51:06.488Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:06.491Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:51:06.491Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:51:06.491Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:06.493Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:51:06.493Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:06.494Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:06.504Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:51:06.504Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:08.006Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-26T14:51:08.006Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:51:08.239Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T14:51:08.239Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T14:51:08.240Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T14:51:08.240Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:08.242Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:51:08.243Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:51:08.243Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:08.244Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:51:08.244Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:08.245Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:08.252Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:51:08.252Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:09.753Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:51:09.991Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T14:51:09.992Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T14:51:09.992Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:09.995Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:51:09.995Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:09.997Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:51:09.997Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:09.998Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:10.003Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:51:10.004Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:11.505Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:51:11.773Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T14:51:11.773Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T14:51:11.773Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:11.776Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:51:11.776Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:11.778Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:11.778Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:11.784Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:51:11.784Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:16.286Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T14:51:16.287Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T14:51:16.287Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:51:17.748Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T14:51:17.748Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T14:51:17.748Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:17.751Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:51:17.753Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:17.755Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:51:17.755Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:17.755Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:17.763Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:19.264Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T14:51:19.264Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:51:19.504Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T14:51:19.504Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T14:51:19.504Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:19.507Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:51:19.507Z] [BOT] 💾 DISK STATE: 861 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:19.509Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:51:19.509Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:19.510Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:19.518Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:51:19.518Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:21.019Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T14:51:21.019Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:51:21.170Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T14:51:21.170Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T14:51:21.170Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:21.173Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:51:21.173Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:21.174Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:21.175Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:21.181Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:22.683Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-26T14:51:22.683Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:51:22.830Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T14:51:22.830Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:22.833Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:51:22.833Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:22.835Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:51:22.835Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:22.835Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:22.842Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:51:22.842Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:24.343Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T14:51:24.343Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:51:24.529Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T14:51:24.529Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T14:51:24.530Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T14:51:24.530Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:24.532Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:51:24.533Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:51:24.533Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:24.534Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:51:24.534Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:24.535Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:24.542Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:51:24.542Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:29.043Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T14:51:29.044Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T14:51:29.044Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T14:51:29.356Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T14:51:29.357Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T14:51:29.357Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T14:51:29.357Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:29.360Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:51:29.360Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:29.361Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:51:29.361Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:51:29.362Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:29.369Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:51:33.872Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T14:51:33.873Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T14:51:33.970Z] [BOT] 📂 Loaded 9511 existing routing entries
[2026-01-26T14:51:34.094Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9521
[2026-01-26T14:51:34.094Z] [BOT] Timestamp: 2026-01-26T14:51:34.046Z
[2026-01-26T14:51:34.094Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T14:51:34.095Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T14:51:34.095Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-26T14:51:34.095Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T14:51:34.095Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T14:51:34.104Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T14:51:34.106Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:51:34.107Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:51:34.113Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:51:34.113Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-26T14:51:36.131Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2484) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*