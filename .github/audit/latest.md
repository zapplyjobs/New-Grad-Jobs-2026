# Discord Bot Execution Audit
**Timestamp:** 2026-01-27T21:14:12.061Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-27T21:13:40.081Z] ========================================
[2026-01-27T21:13:40.083Z] Discord Bot Execution Log
[2026-01-27T21:13:40.083Z] Environment: GitHub Actions
[2026-01-27T21:13:40.083Z] Node Version: v20.20.0
[2026-01-27T21:13:40.083Z] ========================================
[2026-01-27T21:13:40.084Z] Environment Variables Check:
[2026-01-27T21:13:40.084Z] DISCORD_TOKEN: ✅ Set
[2026-01-27T21:13:40.084Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.084Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-27T21:13:40.084Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-27T21:13:40.084Z] 
Multi-Channel Configuration:
[2026-01-27T21:13:40.084Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.084Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.084Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.084Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.085Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.085Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.085Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.085Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.085Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-27T21:13:40.085Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-27T21:13:40.085Z] 
Data Files Check:
[2026-01-27T21:13:40.086Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-27T21:13:40.089Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 364062 bytes)
[2026-01-27T21:13:40.089Z] 
========================================
[2026-01-27T21:13:40.089Z] Starting Enhanced Discord Bot...
[2026-01-27T21:13:40.089Z] ========================================
[2026-01-27T21:13:40.630Z] [BOT] ✅ Loaded V2 database: 630 jobs
[2026-01-27T21:13:41.544Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-27T21:13:41.545Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-27T21:13:41.545Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-27T21:13:41.663Z] [BOT] ✅ Loaded pending queue: 2941 total (2891 pending, 50 enriched, 0 posted)
[2026-01-27T21:13:41.664Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-27T21:13:41.667Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-27T21:13:41.668Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-27T21:13:41.668Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-27T21:13:41.669Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-27T21:13:41.669Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-27T21:13:41.669Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-27T21:13:41.673Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-27T21:13:41.673Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T21:13:41.673Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T21:13:41.690Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-27T21:13:41.974Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-27T21:13:41.974Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T21:13:41.975Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-27T21:13:41.975Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-27T21:13:41.977Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-27T21:13:41.977Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-27T21:13:41.979Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:13:41.979Z] [BOT] 💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-27T21:13:41.980Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-27T21:13:41.986Z] [BOT] 📦 Archived 88 jobs to 2026-01.json (88 total in archive)
[2026-01-27T21:13:41.986Z] [BOT] ✅ Archiving complete: 88 archived, 542 active
[2026-01-27T21:13:41.992Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
[2026-01-27T21:13:41.993Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T21:13:43.496Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-27T21:13:43.496Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T21:13:43.822Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-27T21:13:43.822Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-27T21:13:43.822Z] [BOT] 💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:13:43.824Z] [BOT] ✅ Loaded V2 database: 542 jobs
[2026-01-27T21:13:43.824Z] [BOT] 💾 DISK STATE: 542 jobs on disk
[2026-01-27T21:13:43.825Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:13:43.826Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:13:43.826Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:13:43.826Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:13:43.830Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T21:13:45.332Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-27T21:13:45.332Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T21:13:45.530Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-27T21:13:45.530Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-27T21:13:45.530Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:13:45.532Z] [BOT] ✅ Loaded V2 database: 542 jobs
[2026-01-27T21:13:45.532Z] [BOT] 💾 DISK STATE: 542 jobs on disk
[2026-01-27T21:13:45.532Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:13:45.533Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:13:45.534Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:13:45.534Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:13:45.539Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T21:13:47.040Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T21:13:47.546Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-27T21:13:47.546Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:13:47.548Z] [BOT] ✅ Loaded V2 database: 542 jobs
💾 DISK STATE: 542 jobs on disk
[2026-01-27T21:13:47.548Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:13:47.549Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:13:47.550Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:13:47.555Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T21:13:52.057Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-27T21:13:52.058Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-27T21:13:52.058Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T21:13:52.372Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-27T21:13:52.373Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-27T21:13:52.373Z] [BOT] 💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:13:52.375Z] [BOT] ✅ Loaded V2 database: 542 jobs
💾 DISK STATE: 542 jobs on disk
[2026-01-27T21:13:52.376Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:13:52.377Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:13:52.377Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:13:52.378Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:13:52.383Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
[2026-01-27T21:13:52.383Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T21:13:53.885Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-27T21:13:53.885Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T21:13:54.207Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-27T21:13:54.207Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T21:13:54.207Z] [BOT] 💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:13:54.209Z] [BOT] ✅ Loaded V2 database: 542 jobs
💾 DISK STATE: 542 jobs on disk
[2026-01-27T21:13:54.209Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:13:54.210Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:13:54.210Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:13:54.211Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:13:54.215Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T21:13:55.717Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-27T21:13:55.717Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T21:13:55.931Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-27T21:13:55.931Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T21:13:55.932Z] [BOT] 💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:13:55.934Z] [BOT] ✅ Loaded V2 database: 542 jobs
[2026-01-27T21:13:55.934Z] [BOT] 💾 DISK STATE: 542 jobs on disk
[2026-01-27T21:13:55.934Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:13:55.936Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:13:55.936Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:13:55.936Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:13:55.942Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
[2026-01-27T21:13:55.942Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T21:13:57.443Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-27T21:13:57.444Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T21:13:57.626Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-27T21:13:57.626Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-27T21:13:57.626Z] [BOT] 💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:13:57.628Z] [BOT] ✅ Loaded V2 database: 542 jobs
[2026-01-27T21:13:57.628Z] [BOT] 💾 DISK STATE: 542 jobs on disk
[2026-01-27T21:13:57.628Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:13:57.629Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:13:57.629Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:13:57.630Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:13:57.635Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T21:13:59.136Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-27T21:13:59.136Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T21:13:59.319Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-27T21:13:59.320Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-27T21:13:59.320Z] [BOT] 💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:13:59.321Z] [BOT] ✅ Loaded V2 database: 542 jobs
[2026-01-27T21:13:59.322Z] [BOT] 💾 DISK STATE: 542 jobs on disk
[2026-01-27T21:13:59.322Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:13:59.323Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:13:59.323Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:13:59.323Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:13:59.329Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
[2026-01-27T21:13:59.329Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T21:14:03.831Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-27T21:14:03.832Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-27T21:14:03.832Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-27T21:14:04.052Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-27T21:14:04.053Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-27T21:14:04.053Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-27T21:14:04.053Z] [BOT] 💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:14:04.055Z] [BOT] ✅ Loaded V2 database: 542 jobs
[2026-01-27T21:14:04.055Z] [BOT] 💾 DISK STATE: 542 jobs on disk
[2026-01-27T21:14:04.055Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:14:04.056Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:14:04.056Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:14:04.056Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:14:04.061Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
[2026-01-27T21:14:04.061Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T21:14:08.563Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-27T21:14:08.565Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-27T21:14:08.669Z] [BOT] 📂 Loaded 9671 existing routing entries
[2026-01-27T21:14:08.790Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-27T21:14:08.790Z] [BOT] Total entries: 9681
   Timestamp: 2026-01-27T21:14:08.743Z
[2026-01-27T21:14:08.791Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_b2dc3916.jsonl
[2026-01-27T21:14:08.791Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-27T21:14:08.791Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-27T21:14:08.791Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-27T21:14:08.791Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-27T21:14:08.792Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 542 jobs in memory (cached)
[2026-01-27T21:14:08.797Z] [BOT] ✅ Loaded V2 database: 542 jobs
💾 DISK STATE: 542 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=542
[2026-01-27T21:14:08.799Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T21:14:08.799Z] [BOT] 💾 AFTER MERGE: 542 jobs (merged disk + memory)
[2026-01-27T21:14:08.800Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-27T21:14:08.808Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T21:14:08.808Z] [BOT] ✅ Database saved successfully
[2026-01-27T21:14:10.825Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*