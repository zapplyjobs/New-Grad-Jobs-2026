# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T05:33:20.485Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T05:32:49.381Z] ========================================
[2026-01-26T05:32:49.383Z] Discord Bot Execution Log
[2026-01-26T05:32:49.383Z] Environment: GitHub Actions
[2026-01-26T05:32:49.383Z] Node Version: v20.20.0
[2026-01-26T05:32:49.384Z] ========================================
[2026-01-26T05:32:49.384Z] Environment Variables Check:
[2026-01-26T05:32:49.384Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T05:32:49.384Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.384Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T05:32:49.384Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T05:32:49.384Z] 
Multi-Channel Configuration:
[2026-01-26T05:32:49.384Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.384Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.385Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.385Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.385Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.385Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.385Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.385Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.385Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T05:32:49.385Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T05:32:49.385Z] 
Data Files Check:
[2026-01-26T05:32:49.386Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T05:32:49.391Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 543744 bytes)
[2026-01-26T05:32:49.391Z] 
========================================
[2026-01-26T05:32:49.391Z] Starting Enhanced Discord Bot...
[2026-01-26T05:32:49.391Z] ========================================
[2026-01-26T05:32:49.905Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-26T05:32:50.637Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T05:32:50.638Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T05:32:50.638Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T05:32:50.761Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T05:32:50.765Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T05:32:50.765Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T05:32:50.766Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T05:32:50.766Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T05:32:50.767Z] [BOT] (2 grouped as same job with different locations)
[2026-01-26T05:32:50.767Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-26T05:32:50.767Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T05:32:50.770Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T05:32:50.771Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T05:32:50.771Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:32:50.787Z] [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T05:32:51.059Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T05:32:51.059Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T05:32:51.060Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T05:32:51.060Z] [BOT] 💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:32:51.063Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-26T05:32:51.064Z] [BOT] 💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:32:51.064Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:32:51.066Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:32:51.066Z] [BOT] 💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:32:51.067Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T05:32:51.073Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-26T05:32:51.073Z] [BOT] ✅ Archiving complete: 7 archived, 942 active
[2026-01-26T05:32:51.084Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
[2026-01-26T05:32:51.084Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:32:52.585Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:32:52.746Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T05:32:52.746Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T05:32:52.746Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:32:52.749Z] [BOT] ✅ Loaded V2 database: 942 jobs
💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:32:52.749Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:32:52.751Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:32:52.751Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:32:52.752Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-26T05:32:52.759Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
[2026-01-26T05:32:52.759Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:32:54.259Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T05:32:54.259Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:32:54.646Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T05:32:54.646Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T05:32:54.647Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T05:32:54.647Z] [BOT] 💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:32:54.650Z] [BOT] ✅ Loaded V2 database: 942 jobs
[2026-01-26T05:32:54.650Z] [BOT] 💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:32:54.650Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:32:54.651Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:32:54.652Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:32:54.652Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-26T05:32:54.659Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:32:56.160Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:32:56.358Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T05:32:56.359Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:32:56.362Z] [BOT] ✅ Loaded V2 database: 942 jobs
[2026-01-26T05:32:56.362Z] [BOT] 💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:32:56.362Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:32:56.364Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:32:56.364Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:32:56.364Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-26T05:32:56.371Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
[2026-01-26T05:32:56.371Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:33:00.873Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T05:33:00.874Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T05:33:00.874Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:33:01.035Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T05:33:01.036Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:33:01.040Z] [BOT] ✅ Loaded V2 database: 942 jobs
💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:33:01.040Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:33:01.042Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:33:01.043Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:33:01.043Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-26T05:33:01.052Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
[2026-01-26T05:33:01.052Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:33:02.554Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T05:33:02.554Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:33:02.716Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T05:33:02.717Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T05:33:02.717Z] [BOT] 💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:33:02.720Z] [BOT] ✅ Loaded V2 database: 942 jobs
[2026-01-26T05:33:02.720Z] [BOT] 💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:33:02.720Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:33:02.722Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:33:02.722Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:33:02.722Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-26T05:33:02.730Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:33:04.231Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T05:33:04.231Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:33:04.445Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T05:33:04.446Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:33:04.449Z] [BOT] ✅ Loaded V2 database: 942 jobs
💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:33:04.449Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:33:04.452Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:33:04.452Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:33:04.452Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-26T05:33:04.460Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
[2026-01-26T05:33:04.461Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:33:05.961Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T05:33:05.961Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:33:06.265Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T05:33:06.266Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T05:33:06.266Z] [BOT] 💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:33:06.269Z] [BOT] ✅ Loaded V2 database: 942 jobs
💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:33:06.269Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:33:06.271Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:33:06.272Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-26T05:33:06.278Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
[2026-01-26T05:33:06.278Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:33:07.780Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-26T05:33:07.780Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:33:08.075Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T05:33:08.075Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T05:33:08.075Z] [BOT] 💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:33:08.079Z] [BOT] ✅ Loaded V2 database: 942 jobs
💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:33:08.079Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:33:08.081Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:33:08.081Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:33:08.082Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-26T05:33:08.090Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:33:12.592Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T05:33:12.593Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T05:33:12.868Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T05:33:12.869Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T05:33:12.869Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:33:12.873Z] [BOT] ✅ Loaded V2 database: 942 jobs
[2026-01-26T05:33:12.873Z] [BOT] 💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:33:12.873Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:33:12.875Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:33:12.875Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:33:12.876Z] [BOT] ✅ No jobs to archive (all 942 jobs within 7-day window)
[2026-01-26T05:33:12.886Z] [BOT] 💾 Saved posted_jobs.json: 942 active jobs
[2026-01-26T05:33:12.886Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:33:17.388Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T05:33:17.390Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T05:33:17.485Z] [BOT] 📂 Loaded 9221 existing routing entries
[2026-01-26T05:33:17.608Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-26T05:33:17.608Z] [BOT] New entries: 10
   Total entries: 9231
   Timestamp: 2026-01-26T05:33:17.564Z
[2026-01-26T05:33:17.608Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T05:33:17.608Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T05:33:17.609Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T05:33:17.609Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T05:33:17.609Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T05:33:17.609Z] [BOT] [STATS] Channel stats saved
[2026-01-26T05:33:19.628Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*