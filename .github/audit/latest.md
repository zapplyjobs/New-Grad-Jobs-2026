# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T15:21:16.775Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T15:20:45.108Z] ========================================
[2026-01-26T15:20:45.110Z] Discord Bot Execution Log
[2026-01-26T15:20:45.110Z] Environment: GitHub Actions
[2026-01-26T15:20:45.111Z] Node Version: v20.20.0
[2026-01-26T15:20:45.111Z] ========================================
[2026-01-26T15:20:45.111Z] Environment Variables Check:
[2026-01-26T15:20:45.111Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T15:20:45.111Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.111Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T15:20:45.111Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T15:20:45.111Z] 
Multi-Channel Configuration:
[2026-01-26T15:20:45.111Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.111Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.112Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.112Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.112Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.112Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.112Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.112Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.112Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T15:20:45.112Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T15:20:45.112Z] 
Data Files Check:
[2026-01-26T15:20:45.113Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T15:20:45.117Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 495143 bytes)
[2026-01-26T15:20:45.117Z] 
========================================
[2026-01-26T15:20:45.117Z] Starting Enhanced Discord Bot...
[2026-01-26T15:20:45.117Z] ========================================
[2026-01-26T15:20:45.653Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T15:20:46.145Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T15:20:46.145Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T15:20:46.145Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T15:20:46.268Z] [BOT] ✅ Loaded pending queue: 2860 total (2810 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T15:20:46.271Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T15:20:46.272Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T15:20:46.272Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T15:20:46.273Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T15:20:46.273Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T15:20:46.273Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-26T15:20:46.273Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T15:20:46.276Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T15:20:46.277Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T15:20:46.277Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:20:46.294Z] [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T15:20:46.870Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T15:20:46.870Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T15:20:46.871Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:20:46.873Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T15:20:46.874Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:20:46.874Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:20:46.876Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:20:46.876Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:20:46.877Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T15:20:46.884Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-26T15:20:46.884Z] [BOT] ✅ Archiving complete: 1 archived, 860 active
[2026-01-26T15:20:46.893Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:20:46.893Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:20:48.396Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T15:20:48.396Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:20:48.598Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T15:20:48.598Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:20:48.601Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:20:48.601Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:20:48.603Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:20:48.603Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:20:48.604Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:20:48.610Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:20:48.610Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:20:50.111Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:20:50.366Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T15:20:50.366Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T15:20:50.366Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:20:50.369Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:20:50.369Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:20:50.371Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:20:50.371Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:20:50.377Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:20:50.378Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:20:51.878Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:20:52.021Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T15:20:52.022Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:20:52.025Z] [BOT] ✅ Loaded V2 database: 860 jobs
[2026-01-26T15:20:52.025Z] [BOT] 💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:20:52.025Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:20:52.027Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:20:52.027Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:20:52.033Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:20:52.034Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:20:56.535Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T15:20:56.536Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T15:20:56.536Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:20:56.909Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T15:20:56.910Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:20:56.913Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:20:56.915Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:20:56.917Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:20:56.917Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:20:56.917Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:20:56.925Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:20:56.925Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:20:58.427Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T15:20:58.427Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:20:58.864Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T15:20:58.864Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T15:20:58.864Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:20:58.867Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:20:58.867Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:20:58.869Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:20:58.869Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:20:58.870Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:20:58.877Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:20:58.878Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:21:00.378Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T15:21:00.378Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:21:00.778Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T15:21:00.779Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:21:00.782Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:21:00.782Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:21:00.784Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:21:00.784Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:21:00.791Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:21:00.791Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:21:02.292Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T15:21:02.292Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:21:02.615Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T15:21:02.615Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T15:21:02.615Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:21:02.618Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:21:02.619Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:21:02.620Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:21:02.621Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:21:02.627Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:21:02.628Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:21:04.128Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T15:21:04.128Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:21:04.266Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T15:21:04.266Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T15:21:04.267Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:21:04.270Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:21:04.270Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:21:04.271Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:21:04.272Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:21:04.272Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:21:04.278Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:21:04.278Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:21:08.780Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T15:21:08.781Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T15:21:08.781Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T15:21:09.167Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T15:21:09.168Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T15:21:09.168Z] [BOT] 💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:21:09.171Z] [BOT] ✅ Loaded V2 database: 860 jobs
[2026-01-26T15:21:09.171Z] [BOT] 💾 DISK STATE: 860 jobs on disk
[2026-01-26T15:21:09.171Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=860
[2026-01-26T15:21:09.173Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:21:09.173Z] [BOT] 💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:21:09.173Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:21:09.182Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:21:09.182Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:21:13.685Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T15:21:13.686Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T15:21:13.795Z] [BOT] 📂 Loaded 9531 existing routing entries
[2026-01-26T15:21:13.917Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T15:21:13.917Z] [BOT] Total entries: 9541
   Timestamp: 2026-01-26T15:21:13.870Z
[2026-01-26T15:21:13.918Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T15:21:13.918Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T15:21:13.918Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-26T15:21:13.918Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T15:21:13.919Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 860 jobs in memory (cached)
[2026-01-26T15:21:13.929Z] [BOT] ✅ Loaded V2 database: 860 jobs
💾 DISK STATE: 860 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=860
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 860 jobs (merged disk + memory)
[2026-01-26T15:21:13.929Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2026-01-26T15:21:13.936Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2026-01-26T15:21:13.936Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-26T15:21:15.954Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*