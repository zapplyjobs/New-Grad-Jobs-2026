# Discord Bot Execution Audit
**Timestamp:** 2026-01-27T15:21:06.005Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-27T15:20:34.900Z] ========================================
[2026-01-27T15:20:34.902Z] Discord Bot Execution Log
[2026-01-27T15:20:34.902Z] Environment: GitHub Actions
[2026-01-27T15:20:34.902Z] Node Version: v20.20.0
[2026-01-27T15:20:34.902Z] ========================================
[2026-01-27T15:20:34.902Z] Environment Variables Check:
[2026-01-27T15:20:34.902Z] DISCORD_TOKEN: ✅ Set
[2026-01-27T15:20:34.902Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.902Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-27T15:20:34.902Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-27T15:20:34.902Z] 
Multi-Channel Configuration:
[2026-01-27T15:20:34.902Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.903Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.903Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.903Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.903Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.903Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.903Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.903Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.903Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-27T15:20:34.903Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-27T15:20:34.903Z] 
Data Files Check:
[2026-01-27T15:20:34.904Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-27T15:20:34.907Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 367566 bytes)
[2026-01-27T15:20:34.908Z] 
========================================
[2026-01-27T15:20:34.908Z] Starting Enhanced Discord Bot...
[2026-01-27T15:20:34.908Z] ========================================
[2026-01-27T15:20:35.438Z] [BOT] ✅ Loaded V2 database: 636 jobs
[2026-01-27T15:20:36.048Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-27T15:20:36.049Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-27T15:20:36.049Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-27T15:20:36.177Z] [BOT] ✅ Loaded pending queue: 2922 total (2872 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-27T15:20:36.180Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-27T15:20:36.180Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-27T15:20:36.181Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-27T15:20:36.182Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-27T15:20:36.182Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-27T15:20:36.182Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-27T15:20:36.182Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-27T15:20:36.186Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-27T15:20:36.186Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T15:20:36.187Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T15:20:36.203Z] [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-27T15:20:36.356Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T15:20:36.356Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-27T15:20:36.357Z] [BOT] 💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T15:20:36.359Z] [BOT] ✅ Loaded V2 database: 636 jobs
[2026-01-27T15:20:36.359Z] [BOT] 💾 DISK STATE: 636 jobs on disk
[2026-01-27T15:20:36.359Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T15:20:36.361Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T15:20:36.361Z] [BOT] 💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T15:20:36.362Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-27T15:20:36.367Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-27T15:20:36.367Z] [BOT] ✅ Archiving complete: 6 archived, 630 active
[2026-01-27T15:20:36.375Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T15:20:36.375Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T15:20:37.877Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T15:20:38.074Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-27T15:20:38.074Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:20:38.077Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:20:38.077Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:20:38.078Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T15:20:38.078Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:20:38.079Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:20:38.083Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T15:20:39.584Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T15:20:39.739Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-27T15:20:39.740Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:20:39.742Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:20:39.742Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:20:39.743Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T15:20:39.744Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:20:39.745Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:20:39.749Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T15:20:41.250Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T15:20:41.697Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-27T15:20:41.698Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-27T15:20:41.698Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:20:41.700Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T15:20:41.700Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:20:41.700Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:20:41.701Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T15:20:41.701Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:20:41.702Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:20:41.707Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T15:20:46.209Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-27T15:20:46.210Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-27T15:20:46.210Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T15:20:46.523Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-27T15:20:46.523Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-27T15:20:46.524Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:20:46.526Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T15:20:46.526Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:20:46.526Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:20:46.528Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T15:20:46.529Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:20:46.529Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:20:46.534Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T15:20:46.534Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T15:20:48.036Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T15:20:48.036Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T15:20:48.231Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-27T15:20:48.231Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T15:20:48.231Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:20:48.234Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T15:20:48.234Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:20:48.234Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:20:48.235Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T15:20:48.235Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:20:48.236Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:20:48.241Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T15:20:48.241Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T15:20:49.743Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-27T15:20:49.743Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T15:20:49.957Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-27T15:20:49.957Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T15:20:49.957Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:20:49.960Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:20:49.960Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:20:49.961Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T15:20:49.961Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:20:49.961Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:20:49.967Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T15:20:51.469Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-27T15:20:51.469Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T15:20:51.675Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-27T15:20:51.675Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-27T15:20:51.675Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:20:51.678Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:20:51.678Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:20:51.679Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:20:51.680Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:20:51.685Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T15:20:51.685Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T15:20:53.186Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T15:20:53.187Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T15:20:53.421Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-27T15:20:53.421Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-27T15:20:53.421Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:20:53.424Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T15:20:53.424Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:20:53.424Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:20:53.425Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T15:20:53.425Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:20:53.426Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:20:53.432Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T15:20:53.432Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T15:20:57.933Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-27T15:20:57.934Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-27T15:20:57.934Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-27T15:20:58.211Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-27T15:20:58.211Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-27T15:20:58.212Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:20:58.214Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T15:20:58.214Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:20:58.214Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:20:58.215Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T15:20:58.216Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:20:58.216Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:20:58.222Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T15:20:58.222Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T15:21:02.724Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-27T15:21:02.725Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-27T15:21:02.831Z] [BOT] 📂 Loaded 9651 existing routing entries
[2026-01-27T15:21:02.961Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-27T15:21:02.961Z] [BOT] New entries: 10
   Total entries: 9661
   Timestamp: 2026-01-27T15:21:02.907Z
[2026-01-27T15:21:02.962Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_b2dc3916.jsonl
[2026-01-27T15:21:02.962Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-27T15:21:02.962Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-27T15:21:02.962Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-27T15:21:02.962Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-27T15:21:02.962Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T15:21:02.965Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T15:21:02.965Z] [BOT] 💾 DISK STATE: 630 jobs on disk
[2026-01-27T15:21:02.965Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T15:21:02.967Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T15:21:02.967Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-27T15:21:02.972Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
[2026-01-27T15:21:02.972Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-27T15:21:04.992Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*