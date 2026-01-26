# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T07:34:24.383Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T07:33:52.987Z] ========================================
[2026-01-26T07:33:52.989Z] Discord Bot Execution Log
[2026-01-26T07:33:52.989Z] Environment: GitHub Actions
[2026-01-26T07:33:52.989Z] Node Version: v20.20.0
[2026-01-26T07:33:52.989Z] ========================================
[2026-01-26T07:33:52.989Z] Environment Variables Check:
[2026-01-26T07:33:52.989Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T07:33:52.989Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.989Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T07:33:52.990Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T07:33:52.990Z] 
Multi-Channel Configuration:
[2026-01-26T07:33:52.990Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.990Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.990Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.990Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.990Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.990Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.990Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.990Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.990Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T07:33:52.990Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T07:33:52.991Z] 
Data Files Check:
[2026-01-26T07:33:52.992Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T07:33:52.996Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 526837 bytes)
[2026-01-26T07:33:52.996Z] 
========================================
[2026-01-26T07:33:52.996Z] Starting Enhanced Discord Bot...
[2026-01-26T07:33:52.996Z] ========================================
[2026-01-26T07:33:53.515Z] [BOT] ✅ Loaded V2 database: 922 jobs
[2026-01-26T07:33:54.131Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T07:33:54.132Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T07:33:54.132Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T07:33:54.252Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T07:33:54.255Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T07:33:54.256Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T07:33:54.256Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T07:33:54.257Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T07:33:54.257Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T07:33:54.258Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T07:33:54.258Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T07:33:54.261Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T07:33:54.262Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T07:33:54.262Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:33:54.278Z] [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T07:33:54.478Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T07:33:54.479Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T07:33:54.479Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T07:33:54.479Z] [BOT] 💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:33:54.483Z] [BOT] ✅ Loaded V2 database: 922 jobs
[2026-01-26T07:33:54.483Z] [BOT] 💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:33:54.483Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:33:54.485Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:33:54.485Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:33:54.486Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T07:33:54.493Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-26T07:33:54.493Z] [BOT] ✅ Archiving complete: 1 archived, 921 active
[2026-01-26T07:33:54.504Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:33:56.007Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-26T07:33:56.007Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:33:56.193Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T07:33:56.193Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T07:33:56.193Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T07:33:56.193Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory
[2026-01-26T07:33:56.197Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-26T07:33:56.197Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=921
[2026-01-26T07:33:56.199Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-26T07:33:56.199Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-26T07:33:56.206Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:33:57.707Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T07:33:57.707Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:33:57.932Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T07:33:57.932Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T07:33:57.932Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory
[2026-01-26T07:33:57.935Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-26T07:33:57.936Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=921
[2026-01-26T07:33:57.937Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-26T07:33:57.938Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-26T07:33:57.945Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
[2026-01-26T07:33:57.945Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:33:59.446Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T07:33:59.447Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:33:59.785Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T07:33:59.786Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T07:33:59.786Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T07:33:59.786Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory
[2026-01-26T07:33:59.789Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-26T07:33:59.790Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=921
[2026-01-26T07:33:59.791Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:33:59.791Z] [BOT] 💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-26T07:33:59.792Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-26T07:33:59.798Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:34:04.301Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T07:34:04.301Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T07:34:04.301Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:34:04.689Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T07:34:04.689Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T07:34:04.689Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory
[2026-01-26T07:34:04.694Z] [BOT] ✅ Loaded V2 database: 921 jobs
[2026-01-26T07:34:04.694Z] [BOT] 💾 DISK STATE: 921 jobs on disk
[2026-01-26T07:34:04.694Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=921
[2026-01-26T07:34:04.696Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:34:04.696Z] [BOT] 💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-26T07:34:04.697Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-26T07:34:04.707Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
[2026-01-26T07:34:04.707Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:34:06.209Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T07:34:06.209Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:34:06.355Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T07:34:06.356Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T07:34:06.356Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory
[2026-01-26T07:34:06.359Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-26T07:34:06.359Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=921
[2026-01-26T07:34:06.361Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:34:06.361Z] [BOT] 💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-26T07:34:06.361Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-26T07:34:06.370Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:34:07.870Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T07:34:07.871Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:34:08.096Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T07:34:08.096Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T07:34:08.096Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T07:34:08.096Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory
[2026-01-26T07:34:08.099Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-26T07:34:08.100Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=921
[2026-01-26T07:34:08.102Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:34:08.102Z] [BOT] 💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-26T07:34:08.103Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-26T07:34:08.111Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:34:09.613Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T07:34:09.613Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:34:09.768Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T07:34:09.768Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T07:34:09.768Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory
[2026-01-26T07:34:09.771Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-26T07:34:09.771Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=921
[2026-01-26T07:34:09.773Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-26T07:34:09.774Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-26T07:34:09.780Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:34:11.282Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T07:34:11.282Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:34:11.590Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T07:34:11.590Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T07:34:11.590Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory
[2026-01-26T07:34:11.594Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-26T07:34:11.594Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=921
[2026-01-26T07:34:11.596Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:34:11.596Z] [BOT] 💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-26T07:34:11.597Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-26T07:34:11.604Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:34:16.106Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T07:34:16.107Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T07:34:16.587Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T07:34:16.588Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T07:34:16.588Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory
[2026-01-26T07:34:16.591Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-26T07:34:16.591Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=921
[2026-01-26T07:34:16.593Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-26T07:34:16.594Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-26T07:34:16.604Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
[2026-01-26T07:34:16.604Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:34:21.105Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T07:34:21.107Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T07:34:21.204Z] [BOT] 📂 Loaded 9281 existing routing entries
[2026-01-26T07:34:21.326Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T07:34:21.326Z] [BOT] Total entries: 9291
   Timestamp: 2026-01-26T07:34:21.282Z
[2026-01-26T07:34:21.327Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T07:34:21.327Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T07:34:21.327Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T07:34:21.327Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T07:34:21.327Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T07:34:21.328Z] [BOT] [STATS] Channel stats saved
[2026-01-26T07:34:23.344Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*