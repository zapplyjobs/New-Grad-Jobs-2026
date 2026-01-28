# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T00:40:53.195Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T00:40:22.727Z] ========================================
[2026-01-28T00:40:22.728Z] Discord Bot Execution Log
[2026-01-28T00:40:22.729Z] Environment: GitHub Actions
[2026-01-28T00:40:22.729Z] Node Version: v20.20.0
[2026-01-28T00:40:22.729Z] ========================================
[2026-01-28T00:40:22.729Z] Environment Variables Check:
[2026-01-28T00:40:22.729Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T00:40:22.729Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.729Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T00:40:22.729Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T00:40:22.729Z] 
Multi-Channel Configuration:
[2026-01-28T00:40:22.729Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.729Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.730Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.730Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.730Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.730Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.730Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.730Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.730Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T00:40:22.730Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T00:40:22.730Z] 
Data Files Check:
[2026-01-28T00:40:22.731Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-28T00:40:22.734Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 313232 bytes)
[2026-01-28T00:40:22.734Z] 
========================================
[2026-01-28T00:40:22.734Z] Starting Enhanced Discord Bot...
[2026-01-28T00:40:22.734Z] ========================================
[2026-01-28T00:40:23.268Z] [BOT] ✅ Loaded V2 database: 542 jobs
[2026-01-28T00:40:23.831Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-28T00:40:23.831Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T00:40:23.831Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T00:40:23.947Z] [BOT] ✅ Loaded pending queue: 2975 total (2925 pending, 50 enriched, 0 posted)
[2026-01-28T00:40:23.948Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-28T00:40:23.948Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-28T00:40:23.951Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T00:40:23.952Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-28T00:40:23.952Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-28T00:40:23.953Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-28T00:40:23.953Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-28T00:40:23.953Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T00:40:23.957Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-28T00:40:23.957Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T00:40:23.957Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T00:40:23.974Z] [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T00:40:24.171Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-28T00:40:24.171Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T00:40:24.172Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-28T00:40:24.172Z] [BOT] 💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-28T00:40:24.174Z] [BOT] ✅ Loaded V2 database: 542 jobs
💾 DISK STATE: 542 jobs on disk
[2026-01-28T00:40:24.174Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-28T00:40:24.175Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T00:40:24.175Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-28T00:40:24.176Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T00:40:24.182Z] [BOT] 📦 Archived 155 jobs to 2026-01.json (155 total in archive)
[2026-01-28T00:40:24.182Z] [BOT] ✅ Archiving complete: 155 archived, 387 active
[2026-01-28T00:40:24.187Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-28T00:40:24.187Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:25.688Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T00:40:25.838Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-28T00:40:25.838Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-28T00:40:25.838Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:25.840Z] [BOT] ✅ Loaded V2 database: 387 jobs
[2026-01-28T00:40:25.840Z] [BOT] 💾 DISK STATE: 387 jobs on disk
[2026-01-28T00:40:25.840Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T00:40:25.841Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T00:40:25.841Z] [BOT] 💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T00:40:25.841Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:25.845Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-28T00:40:25.845Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:27.346Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-28T00:40:27.346Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T00:40:27.459Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-28T00:40:27.459Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-28T00:40:27.459Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-28T00:40:27.459Z] [BOT] 💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:27.461Z] [BOT] ✅ Loaded V2 database: 387 jobs
[2026-01-28T00:40:27.461Z] [BOT] 💾 DISK STATE: 387 jobs on disk
[2026-01-28T00:40:27.461Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T00:40:27.462Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T00:40:27.462Z] [BOT] 💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T00:40:27.462Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:27.466Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:28.967Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-28T00:40:28.967Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T00:40:29.240Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-28T00:40:29.240Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-28T00:40:29.240Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:29.242Z] [BOT] ✅ Loaded V2 database: 387 jobs
[2026-01-28T00:40:29.242Z] [BOT] 💾 DISK STATE: 387 jobs on disk
[2026-01-28T00:40:29.242Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T00:40:29.243Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T00:40:29.243Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:29.247Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:33.749Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-28T00:40:33.749Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-28T00:40:33.750Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T00:40:33.932Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-28T00:40:33.932Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-28T00:40:33.932Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:33.933Z] [BOT] ✅ Loaded V2 database: 387 jobs
[2026-01-28T00:40:33.933Z] [BOT] 💾 DISK STATE: 387 jobs on disk
[2026-01-28T00:40:33.934Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T00:40:33.935Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T00:40:33.935Z] [BOT] 💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T00:40:33.936Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:33.939Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-28T00:40:33.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:35.441Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-28T00:40:35.441Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T00:40:35.877Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T00:40:35.877Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-28T00:40:35.878Z] [BOT] 💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:35.879Z] [BOT] ✅ Loaded V2 database: 387 jobs
💾 DISK STATE: 387 jobs on disk
[2026-01-28T00:40:35.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T00:40:35.880Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T00:40:35.880Z] [BOT] 💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T00:40:35.881Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:35.885Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-28T00:40:35.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:37.386Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-28T00:40:37.386Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T00:40:37.517Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T00:40:37.517Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-28T00:40:37.517Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-28T00:40:37.517Z] [BOT] 💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:37.519Z] [BOT] ✅ Loaded V2 database: 387 jobs
💾 DISK STATE: 387 jobs on disk
[2026-01-28T00:40:37.519Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T00:40:37.520Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T00:40:37.520Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:37.524Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-28T00:40:37.525Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:39.026Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-28T00:40:39.026Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T00:40:39.293Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-28T00:40:39.294Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-28T00:40:39.294Z] [BOT] 💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:39.295Z] [BOT] ✅ Loaded V2 database: 387 jobs
[2026-01-28T00:40:39.295Z] [BOT] 💾 DISK STATE: 387 jobs on disk
[2026-01-28T00:40:39.295Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T00:40:39.296Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T00:40:39.296Z] [BOT] 💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T00:40:39.297Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:39.300Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-28T00:40:39.301Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:40.802Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-28T00:40:40.802Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T00:40:41.048Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-28T00:40:41.048Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-28T00:40:41.049Z] [BOT] 💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:41.050Z] [BOT] ✅ Loaded V2 database: 387 jobs
💾 DISK STATE: 387 jobs on disk
[2026-01-28T00:40:41.050Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T00:40:41.051Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T00:40:41.051Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:41.055Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:45.557Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T00:40:45.558Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-28T00:40:45.558Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T00:40:45.778Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-28T00:40:45.779Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-28T00:40:45.779Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:45.780Z] [BOT] ✅ Loaded V2 database: 387 jobs
💾 DISK STATE: 387 jobs on disk
[2026-01-28T00:40:45.780Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T00:40:45.781Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T00:40:45.781Z] [BOT] 💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T00:40:45.782Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:45.785Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-28T00:40:45.785Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T00:40:50.288Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T00:40:50.289Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T00:40:50.394Z] [BOT] 📂 Loaded 9681 existing routing entries
[2026-01-28T00:40:50.514Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-28T00:40:50.514Z] [BOT] Total entries: 9691
   Timestamp: 2026-01-28T00:40:50.467Z
[2026-01-28T00:40:50.514Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-28T00:40:50.515Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-28T00:40:50.515Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T00:40:50.520Z] [BOT] ✅ Loaded V2 database: 387 jobs
[2026-01-28T00:40:50.523Z] [BOT] 💾 DISK STATE: 387 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=387
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 387 jobs (merged disk + memory)
✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-28T00:40:50.528Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-28T00:40:50.528Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-28T00:40:52.546Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*