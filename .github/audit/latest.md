# Discord Bot Execution Audit
**Timestamp:** 2026-01-27T00:43:00.838Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-27T00:42:28.786Z] ========================================
[2026-01-27T00:42:28.788Z] Discord Bot Execution Log
[2026-01-27T00:42:28.788Z] Environment: GitHub Actions
[2026-01-27T00:42:28.788Z] Node Version: v20.20.0
[2026-01-27T00:42:28.788Z] ========================================
[2026-01-27T00:42:28.788Z] Environment Variables Check:
[2026-01-27T00:42:28.788Z] DISCORD_TOKEN: ✅ Set
[2026-01-27T00:42:28.788Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.789Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-27T00:42:28.789Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-27T00:42:28.789Z] 
Multi-Channel Configuration:
[2026-01-27T00:42:28.789Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.789Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.789Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.789Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.789Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.789Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.789Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.789Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.789Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-27T00:42:28.790Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-27T00:42:28.790Z] 
Data Files Check:
[2026-01-27T00:42:28.791Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-27T00:42:28.795Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 471262 bytes)
[2026-01-27T00:42:28.795Z] 
========================================
[2026-01-27T00:42:28.795Z] Starting Enhanced Discord Bot...
[2026-01-27T00:42:28.795Z] ========================================
[2026-01-27T00:42:29.316Z] [BOT] ✅ Loaded V2 database: 816 jobs
[2026-01-27T00:42:29.917Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-27T00:42:29.918Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-27T00:42:29.918Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-27T00:42:30.044Z] [BOT] ✅ Loaded pending queue: 2911 total (2861 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-27T00:42:30.046Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-27T00:42:30.047Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-27T00:42:30.047Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-27T00:42:30.048Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-27T00:42:30.048Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-27T00:42:30.048Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-27T00:42:30.052Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-27T00:42:30.052Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
   Category: TECH (matched: "software")
[2026-01-27T00:42:30.052Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T00:42:30.069Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-27T00:42:30.554Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T00:42:30.555Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-27T00:42:30.555Z] [BOT] 💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-27T00:42:30.557Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
[2026-01-27T00:42:30.558Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-27T00:42:30.560Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T00:42:30.560Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-27T00:42:30.561Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-27T00:42:30.566Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-27T00:42:30.566Z] [BOT] ✅ Archiving complete: 11 archived, 805 active
[2026-01-27T00:42:30.574Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
[2026-01-27T00:42:30.574Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:32.076Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-27T00:42:32.077Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T00:42:32.494Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-27T00:42:32.495Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-27T00:42:32.495Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-27T00:42:32.495Z] [BOT] 💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:32.497Z] [BOT] ✅ Loaded V2 database: 805 jobs
[2026-01-27T00:42:32.498Z] [BOT] 💾 DISK STATE: 805 jobs on disk
[2026-01-27T00:42:32.498Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T00:42:32.499Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T00:42:32.499Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:32.500Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:32.506Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:34.007Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-27T00:42:34.007Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T00:42:34.248Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-27T00:42:34.248Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-27T00:42:34.248Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:34.251Z] [BOT] ✅ Loaded V2 database: 805 jobs
💾 DISK STATE: 805 jobs on disk
[2026-01-27T00:42:34.251Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T00:42:34.252Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T00:42:34.253Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:34.253Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:34.260Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:35.761Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-27T00:42:35.761Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T00:42:36.082Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-27T00:42:36.082Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-27T00:42:36.082Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-27T00:42:36.082Z] [BOT] 💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:36.085Z] [BOT] ✅ Loaded V2 database: 805 jobs
💾 DISK STATE: 805 jobs on disk
[2026-01-27T00:42:36.086Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T00:42:36.087Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:36.088Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:36.093Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:40.595Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-27T00:42:40.595Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-27T00:42:40.596Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T00:42:41.030Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-27T00:42:41.031Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-27T00:42:41.031Z] [BOT] 💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:41.034Z] [BOT] ✅ Loaded V2 database: 805 jobs
[2026-01-27T00:42:41.034Z] [BOT] 💾 DISK STATE: 805 jobs on disk
[2026-01-27T00:42:41.035Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T00:42:41.037Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T00:42:41.037Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:41.038Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:41.045Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
[2026-01-27T00:42:41.046Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:42.547Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T00:42:42.547Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T00:42:42.849Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-27T00:42:42.849Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T00:42:42.849Z] [BOT] 💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:42.852Z] [BOT] ✅ Loaded V2 database: 805 jobs
💾 DISK STATE: 805 jobs on disk
[2026-01-27T00:42:42.852Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T00:42:42.854Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T00:42:42.854Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:42.854Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:42.862Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
[2026-01-27T00:42:42.862Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:44.364Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-27T00:42:44.364Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T00:42:44.606Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-27T00:42:44.606Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-27T00:42:44.606Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T00:42:44.607Z] [BOT] 💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:44.609Z] [BOT] ✅ Loaded V2 database: 805 jobs
💾 DISK STATE: 805 jobs on disk
[2026-01-27T00:42:44.610Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T00:42:44.611Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T00:42:44.611Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:44.612Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:44.618Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:46.118Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-27T00:42:46.119Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T00:42:46.304Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-27T00:42:46.304Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-27T00:42:46.304Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-27T00:42:46.304Z] [BOT] 💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:46.307Z] [BOT] ✅ Loaded V2 database: 805 jobs
💾 DISK STATE: 805 jobs on disk
[2026-01-27T00:42:46.308Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T00:42:46.309Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T00:42:46.310Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:46.310Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:46.316Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:47.818Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-27T00:42:47.818Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T00:42:48.027Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-27T00:42:48.027Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-27T00:42:48.028Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:48.030Z] [BOT] ✅ Loaded V2 database: 805 jobs
💾 DISK STATE: 805 jobs on disk
[2026-01-27T00:42:48.030Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T00:42:48.032Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T00:42:48.032Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:48.033Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:48.040Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:52.541Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-27T00:42:52.541Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-27T00:42:52.542Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-27T00:42:52.913Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-27T00:42:52.913Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-27T00:42:52.913Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-27T00:42:52.913Z] [BOT] 💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:52.916Z] [BOT] ✅ Loaded V2 database: 805 jobs
💾 DISK STATE: 805 jobs on disk
[2026-01-27T00:42:52.916Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=805
[2026-01-27T00:42:52.918Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T00:42:52.918Z] [BOT] 💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:52.919Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:52.925Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
[2026-01-27T00:42:52.925Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T00:42:57.426Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-27T00:42:57.428Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-27T00:42:57.532Z] [BOT] 📂 Loaded 9601 existing routing entries
[2026-01-27T00:42:57.651Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-27T00:42:57.651Z] [BOT] Total entries: 9611
   Timestamp: 2026-01-27T00:42:57.605Z
[2026-01-27T00:42:57.652Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_b2dc3916.jsonl
[2026-01-27T00:42:57.652Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-27T00:42:57.652Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-27T00:42:57.652Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-27T00:42:57.652Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-27T00:42:57.653Z] [BOT] 💾 BEFORE MERGE: 805 jobs in memory (cached)
[2026-01-27T00:42:57.662Z] [BOT] ✅ Loaded V2 database: 805 jobs
💾 DISK STATE: 805 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=805
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 805 jobs (merged disk + memory)
[2026-01-27T00:42:57.663Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2026-01-27T00:42:57.672Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
[2026-01-27T00:42:57.672Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-27T00:42:59.688Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*