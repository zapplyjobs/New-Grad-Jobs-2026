# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T16:16:18.411Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T16:15:46.544Z] ========================================
[2026-01-26T16:15:46.546Z] Discord Bot Execution Log
[2026-01-26T16:15:46.547Z] Environment: GitHub Actions
[2026-01-26T16:15:46.547Z] Node Version: v20.20.0
[2026-01-26T16:15:46.547Z] ========================================
[2026-01-26T16:15:46.547Z] Environment Variables Check:
[2026-01-26T16:15:46.547Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T16:15:46.547Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.547Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T16:15:46.547Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T16:15:46.547Z] 
Multi-Channel Configuration:
[2026-01-26T16:15:46.548Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.548Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.548Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.548Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.548Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.548Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.548Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.548Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.548Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T16:15:46.548Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T16:15:46.548Z] 
Data Files Check:
[2026-01-26T16:15:46.549Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T16:15:46.553Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 493981 bytes)
[2026-01-26T16:15:46.553Z] 
========================================
[2026-01-26T16:15:46.553Z] Starting Enhanced Discord Bot...
[2026-01-26T16:15:46.553Z] ========================================
[2026-01-26T16:15:47.080Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:15:47.519Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T16:15:47.519Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T16:15:47.520Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T16:15:47.646Z] [BOT] ✅ Loaded pending queue: 2868 total (2818 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T16:15:47.649Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T16:15:47.650Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T16:15:47.650Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T16:15:47.651Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T16:15:47.651Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T16:15:47.651Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T16:15:47.652Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T16:15:47.655Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T16:15:47.655Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T16:15:47.656Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:15:47.672Z] [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T16:15:47.918Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T16:15:47.918Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T16:15:47.918Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T16:15:47.919Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:15:47.922Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:15:47.922Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:15:47.922Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:15:47.924Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:15:47.924Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:15:47.925Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:15:47.935Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:15:49.438Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T16:15:49.438Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:15:49.576Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T16:15:49.577Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T16:15:49.577Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:15:49.580Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:15:49.580Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:15:49.580Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:15:49.581Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:15:49.582Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:15:49.590Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:15:49.590Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:15:51.091Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T16:15:51.091Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:15:51.255Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T16:15:51.255Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T16:15:51.255Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:15:51.258Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:15:51.258Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:15:51.258Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:15:51.260Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:15:51.260Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:15:51.261Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:15:51.267Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:15:52.767Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T16:15:52.767Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:15:52.906Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T16:15:52.906Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T16:15:52.907Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:15:52.910Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:15:52.910Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:15:52.910Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:15:52.912Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:15:52.912Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:15:52.912Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:15:52.918Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:15:52.918Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:15:57.421Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T16:15:57.421Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T16:15:57.421Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:15:57.665Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T16:15:57.665Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T16:15:57.665Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:15:57.668Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:15:57.670Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:15:57.671Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:15:57.672Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:15:57.672Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:15:57.680Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:15:57.680Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:15:59.182Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T16:15:59.182Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:15:59.330Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T16:15:59.330Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T16:15:59.330Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:15:59.333Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:15:59.333Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:15:59.335Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:15:59.336Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:15:59.344Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:15:59.344Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:16:00.844Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T16:16:00.845Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:16:01.092Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T16:16:01.092Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T16:16:01.093Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T16:16:01.093Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:16:01.095Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:16:01.096Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:16:01.096Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:16:01.097Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:16:01.097Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:16:01.098Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:16:01.105Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:16:02.605Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T16:16:02.605Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:16:02.865Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T16:16:02.865Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T16:16:02.866Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T16:16:02.866Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:16:02.868Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:16:02.868Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:16:02.869Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:16:02.870Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:16:02.870Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:16:02.870Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:16:02.877Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:16:04.378Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T16:16:04.378Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:16:06.008Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T16:16:06.008Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T16:16:06.008Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:16:06.011Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:16:06.011Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:16:06.011Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:16:06.013Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:16:06.013Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:16:06.020Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:16:10.521Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T16:16:10.522Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T16:16:10.522Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T16:16:10.803Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T16:16:10.803Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T16:16:10.804Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T16:16:10.804Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:16:10.806Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:16:10.807Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:16:10.807Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:16:10.808Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:16:10.809Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:16:10.815Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:16:10.815Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:16:15.317Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T16:16:15.318Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T16:16:15.424Z] [BOT] 📂 Loaded 9561 existing routing entries
[2026-01-26T16:16:15.544Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T16:16:15.544Z] [BOT] Total entries: 9571
   Timestamp: 2026-01-26T16:16:15.496Z
[2026-01-26T16:16:15.545Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T16:16:15.545Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T16:16:15.545Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T16:16:15.545Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T16:16:15.546Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:16:15.554Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:16:15.555Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:16:15.555Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:16:15.556Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:16:15.562Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:16:15.563Z] [BOT] ✅ Database saved successfully
[2026-01-26T16:16:17.579Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*