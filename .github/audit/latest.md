# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T11:02:16.930Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T11:01:45.659Z] ========================================
[2026-01-26T11:01:45.661Z] Discord Bot Execution Log
[2026-01-26T11:01:45.661Z] Environment: GitHub Actions
[2026-01-26T11:01:45.661Z] Node Version: v20.20.0
[2026-01-26T11:01:45.661Z] ========================================
[2026-01-26T11:01:45.661Z] Environment Variables Check:
[2026-01-26T11:01:45.661Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T11:01:45.661Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.661Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T11:01:45.662Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T11:01:45.662Z] 
Multi-Channel Configuration:
[2026-01-26T11:01:45.662Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.662Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.662Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.662Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.662Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.662Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.662Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.662Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.662Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T11:01:45.662Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T11:01:45.663Z] 
Data Files Check:
[2026-01-26T11:01:45.664Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T11:01:45.667Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 497243 bytes)
[2026-01-26T11:01:45.668Z] 
========================================
[2026-01-26T11:01:45.668Z] Starting Enhanced Discord Bot...
[2026-01-26T11:01:45.668Z] ========================================
[2026-01-26T11:01:46.190Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:01:46.696Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T11:01:46.696Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T11:01:46.696Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T11:01:46.816Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T11:01:46.819Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T11:01:46.820Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T11:01:46.820Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T11:01:46.821Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T11:01:46.821Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T11:01:46.821Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T11:01:46.825Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T11:01:46.825Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T11:01:46.825Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:01:46.842Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T11:01:47.032Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T11:01:47.032Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T11:01:47.033Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T11:01:47.033Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:01:47.036Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:01:47.036Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:01:47.036Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:01:47.038Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:01:47.038Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:01:47.039Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:01:47.051Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:01:48.553Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T11:01:48.554Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:01:48.765Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T11:01:48.765Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T11:01:48.765Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T11:01:48.765Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:01:48.768Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:01:48.768Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:01:48.770Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:01:48.770Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:01:48.777Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:01:50.279Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:01:50.503Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T11:01:50.504Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T11:01:50.504Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T11:01:50.504Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:01:50.507Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:01:50.507Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:01:50.507Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:01:50.508Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:01:50.508Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:01:50.509Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:01:50.515Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:01:50.515Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:01:52.017Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:01:52.228Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T11:01:52.229Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:01:52.232Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:01:52.232Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:01:52.234Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:01:52.234Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:01:52.240Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:01:52.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:01:56.743Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T11:01:56.743Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T11:01:56.743Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:01:57.024Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T11:01:57.024Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T11:01:57.024Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:01:57.028Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:01:57.029Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:01:57.031Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:01:57.031Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:01:57.032Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:01:57.039Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:01:57.039Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:01:58.541Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T11:01:58.541Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:01:58.871Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T11:01:58.872Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T11:01:58.872Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T11:01:58.872Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:01:58.875Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:01:58.875Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:01:58.877Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:01:58.877Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:01:58.877Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:01:58.885Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:01:58.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:02:00.387Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T11:02:00.387Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:02:00.646Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T11:02:00.646Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T11:02:00.646Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T11:02:00.646Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:02:00.649Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:02:00.649Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:02:00.651Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:02:00.651Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:02:00.658Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:02:00.658Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:02:02.160Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-26T11:02:02.160Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:02:02.338Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T11:02:02.339Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T11:02:02.339Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:02:02.342Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:02:02.342Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:02:02.344Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:02:02.344Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:02:02.351Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:02:03.853Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T11:02:03.853Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:02:04.080Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T11:02:04.081Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:02:04.084Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:02:04.084Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:02:04.084Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:02:04.085Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:02:04.086Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:02:04.086Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:02:04.092Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:02:04.092Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:02:08.593Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T11:02:08.594Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T11:02:08.594Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T11:02:08.843Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T11:02:08.843Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T11:02:08.843Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:02:08.847Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:02:08.847Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:02:08.849Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:02:08.850Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:02:08.850Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:02:08.858Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:02:13.361Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T11:02:13.362Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T11:02:13.463Z] [BOT] 📂 Loaded 9401 existing routing entries
[2026-01-26T11:02:13.587Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T11:02:13.587Z] [BOT] Total entries: 9411
   Timestamp: 2026-01-26T11:02:13.541Z
[2026-01-26T11:02:13.587Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T11:02:13.587Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T11:02:13.588Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T11:02:13.588Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T11:02:13.588Z] [BOT] [STATS] Channel stats saved
[2026-01-26T11:02:15.609Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*