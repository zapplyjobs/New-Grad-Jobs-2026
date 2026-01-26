# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T10:15:06.676Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T10:14:35.586Z] ========================================
[2026-01-26T10:14:35.588Z] Discord Bot Execution Log
[2026-01-26T10:14:35.588Z] Environment: GitHub Actions
[2026-01-26T10:14:35.588Z] Node Version: v20.20.0
[2026-01-26T10:14:35.588Z] ========================================
[2026-01-26T10:14:35.588Z] Environment Variables Check:
[2026-01-26T10:14:35.588Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T10:14:35.588Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T10:14:35.589Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T10:14:35.589Z] 
Multi-Channel Configuration:
[2026-01-26T10:14:35.589Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T10:14:35.589Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T10:14:35.590Z] 
Data Files Check:
[2026-01-26T10:14:35.591Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T10:14:35.594Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 497888 bytes)
[2026-01-26T10:14:35.594Z] 
========================================
[2026-01-26T10:14:35.594Z] Starting Enhanced Discord Bot...
[2026-01-26T10:14:35.594Z] ========================================
[2026-01-26T10:14:36.132Z] [BOT] ✅ Loaded V2 database: 865 jobs
[2026-01-26T10:14:36.777Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T10:14:36.778Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T10:14:36.778Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T10:14:36.895Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[2026-01-26T10:14:36.896Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T10:14:36.900Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T10:14:36.900Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T10:14:36.900Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T10:14:36.901Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T10:14:36.901Z] [BOT] (2 grouped as same job with different locations)
[2026-01-26T10:14:36.902Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T10:14:36.905Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T10:14:36.905Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T10:14:36.906Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T10:14:36.922Z] [BOT ERROR] (node:2563) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T10:14:37.069Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T10:14:37.069Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T10:14:37.069Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T10:14:37.070Z] [BOT] 💾 BEFORE MERGE: 865 jobs in memory
[2026-01-26T10:14:37.072Z] [BOT] ✅ Loaded V2 database: 865 jobs
[2026-01-26T10:14:37.073Z] [BOT] 💾 DISK STATE: 865 jobs on disk
[2026-01-26T10:14:37.073Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=865
[2026-01-26T10:14:37.075Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:14:37.075Z] [BOT] 💾 AFTER MERGE: 865 jobs (merged disk + memory)
[2026-01-26T10:14:37.076Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T10:14:37.081Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-26T10:14:37.081Z] [BOT] ✅ Archiving complete: 1 archived, 864 active
[2026-01-26T10:14:37.090Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T10:14:37.090Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T10:14:38.593Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T10:14:38.767Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T10:14:38.768Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:14:38.771Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:14:38.771Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:14:38.772Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:14:38.772Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:14:38.773Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:14:38.779Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:14:40.281Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T10:14:40.493Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T10:14:40.493Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T10:14:40.493Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:14:40.496Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T10:14:40.496Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:14:40.496Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:14:40.497Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:14:40.498Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:14:40.498Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:14:40.504Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T10:14:40.504Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T10:14:42.006Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T10:14:42.006Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T10:14:42.233Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T10:14:42.233Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:14:42.236Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:14:42.236Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:14:42.238Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:14:42.239Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:14:42.244Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T10:14:42.245Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T10:14:46.747Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T10:14:46.748Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T10:14:46.748Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:14:47.000Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T10:14:47.000Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T10:14:47.000Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:14:47.003Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:14:47.004Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:14:47.006Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:14:47.006Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:14:47.007Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:14:47.014Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T10:14:47.014Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T10:14:48.515Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T10:14:48.515Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:14:48.755Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T10:14:48.755Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:14:48.758Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:14:48.758Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:14:48.760Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:14:48.761Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:14:48.768Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T10:14:48.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T10:14:50.270Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T10:14:50.270Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:14:50.434Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T10:14:50.434Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T10:14:50.435Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T10:14:50.435Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:14:50.438Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T10:14:50.438Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:14:50.438Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:14:50.439Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:14:50.439Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:14:50.440Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:14:50.447Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:14:51.948Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T10:14:51.949Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T10:14:51.949Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:14:52.157Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T10:14:52.157Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T10:14:52.157Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T10:14:52.158Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:14:52.160Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T10:14:52.160Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:14:52.161Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:14:52.162Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:14:52.162Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:14:52.163Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:14:52.170Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:14:53.672Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T10:14:53.672Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:14:53.813Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T10:14:53.814Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T10:14:53.814Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T10:14:53.814Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:14:53.817Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T10:14:53.817Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:14:53.817Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:14:53.818Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:14:53.819Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:14:53.819Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:14:53.825Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:14:58.327Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T10:14:58.327Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T10:14:58.327Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T10:14:58.682Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T10:14:58.682Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T10:14:58.683Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:14:58.685Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:14:58.686Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:14:58.687Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:14:58.688Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:14:58.694Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:15:03.196Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T10:15:03.197Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T10:15:03.301Z] [BOT] 📂 Loaded 9371 existing routing entries
[2026-01-26T10:15:03.420Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T10:15:03.420Z] [BOT] Total entries: 9381
   Timestamp: 2026-01-26T10:15:03.375Z
[2026-01-26T10:15:03.421Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T10:15:03.421Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T10:15:03.421Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-26T10:15:03.421Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T10:15:03.422Z] [BOT] [STATS] Channel stats saved
[2026-01-26T10:15:05.440Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2563) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*