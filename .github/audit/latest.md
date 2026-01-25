# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T03:33:16.637Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T03:32:45.446Z] ========================================
[2026-01-25T03:32:45.448Z] Discord Bot Execution Log
[2026-01-25T03:32:45.448Z] Environment: GitHub Actions
[2026-01-25T03:32:45.448Z] Node Version: v20.20.0
[2026-01-25T03:32:45.448Z] ========================================
[2026-01-25T03:32:45.449Z] Environment Variables Check:
[2026-01-25T03:32:45.449Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T03:32:45.449Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.449Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T03:32:45.449Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T03:32:45.449Z] 
Multi-Channel Configuration:
[2026-01-25T03:32:45.449Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.449Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.449Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.449Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.450Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.450Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.450Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.450Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.450Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T03:32:45.450Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T03:32:45.450Z] 
Data Files Check:
[2026-01-25T03:32:45.451Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T03:32:45.456Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 647701 bytes)
[2026-01-25T03:32:45.456Z] 
========================================
[2026-01-25T03:32:45.456Z] Starting Enhanced Discord Bot...
[2026-01-25T03:32:45.456Z] ========================================
[2026-01-25T03:32:45.978Z] [BOT] ✅ Loaded V2 database: 1139 jobs
[2026-01-25T03:32:46.716Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T03:32:46.716Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T03:32:46.716Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T03:32:46.835Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T03:32:46.839Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T03:32:46.840Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T03:32:46.840Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T03:32:46.841Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T03:32:46.841Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T03:32:46.841Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T03:32:46.845Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T03:32:46.845Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T03:32:46.845Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T03:32:46.846Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:32:46.863Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T03:32:47.257Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T03:32:47.258Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T03:32:47.258Z] [BOT] 💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T03:32:47.262Z] [BOT] ✅ Loaded V2 database: 1139 jobs
💾 DISK STATE: 1139 jobs on disk
[2026-01-25T03:32:47.264Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T03:32:47.265Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T03:32:47.270Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-25T03:32:47.271Z] [BOT] ✅ Archiving complete: 7 archived, 1132 active
[2026-01-25T03:32:47.282Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
[2026-01-25T03:32:47.282Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T03:32:48.784Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T03:32:48.784Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T03:32:48.784Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:32:48.933Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T03:32:48.933Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T03:32:48.934Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T03:32:48.934Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T03:32:48.938Z] [BOT] ✅ Loaded V2 database: 1132 jobs
[2026-01-25T03:32:48.938Z] [BOT] 💾 DISK STATE: 1132 jobs on disk
[2026-01-25T03:32:48.940Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T03:32:48.941Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-25T03:32:48.948Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T03:32:50.448Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T03:32:50.449Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:32:50.625Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T03:32:50.625Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T03:32:50.625Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T03:32:50.629Z] [BOT] ✅ Loaded V2 database: 1132 jobs
[2026-01-25T03:32:50.629Z] [BOT] 💾 DISK STATE: 1132 jobs on disk
[2026-01-25T03:32:50.631Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T03:32:50.631Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-25T03:32:50.639Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
[2026-01-25T03:32:50.639Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T03:32:52.140Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T03:32:52.140Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T03:32:52.140Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:32:52.428Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T03:32:52.429Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T03:32:52.429Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T03:32:52.432Z] [BOT] ✅ Loaded V2 database: 1132 jobs
[2026-01-25T03:32:52.432Z] [BOT] 💾 DISK STATE: 1132 jobs on disk
[2026-01-25T03:32:52.434Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T03:32:52.434Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-25T03:32:52.442Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
[2026-01-25T03:32:52.442Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T03:32:56.945Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T03:32:56.946Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T03:32:56.946Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T03:32:56.946Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:32:57.252Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T03:32:57.252Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T03:32:57.252Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T03:32:57.257Z] [BOT] ✅ Loaded V2 database: 1132 jobs
[2026-01-25T03:32:57.257Z] [BOT] 💾 DISK STATE: 1132 jobs on disk
[2026-01-25T03:32:57.259Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T03:32:57.260Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-25T03:32:57.269Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
[2026-01-25T03:32:57.269Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T03:32:58.770Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T03:32:58.770Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T03:32:58.770Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:32:59.013Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T03:32:59.013Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T03:32:59.013Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T03:32:59.013Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T03:32:59.019Z] [BOT] ✅ Loaded V2 database: 1132 jobs
[2026-01-25T03:32:59.019Z] [BOT] 💾 DISK STATE: 1132 jobs on disk
[2026-01-25T03:32:59.022Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T03:32:59.023Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-25T03:32:59.035Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T03:33:00.536Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T03:33:00.537Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T03:33:00.537Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:33:00.766Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T03:33:00.767Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T03:33:00.767Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T03:33:00.770Z] [BOT] ✅ Loaded V2 database: 1132 jobs
💾 DISK STATE: 1132 jobs on disk
[2026-01-25T03:33:00.772Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T03:33:00.772Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-25T03:33:00.780Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T03:33:02.281Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T03:33:02.281Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T03:33:02.282Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:33:02.504Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T03:33:02.505Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T03:33:02.505Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T03:33:02.508Z] [BOT] ✅ Loaded V2 database: 1132 jobs
[2026-01-25T03:33:02.508Z] [BOT] 💾 DISK STATE: 1132 jobs on disk
[2026-01-25T03:33:02.510Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T03:33:02.511Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-25T03:33:02.519Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T03:33:04.020Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T03:33:04.021Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T03:33:04.021Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:33:04.236Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T03:33:04.236Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T03:33:04.237Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T03:33:04.240Z] [BOT] ✅ Loaded V2 database: 1132 jobs
💾 DISK STATE: 1132 jobs on disk
[2026-01-25T03:33:04.242Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T03:33:04.242Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-25T03:33:04.250Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T03:33:08.751Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T03:33:08.752Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T03:33:08.752Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T03:33:08.752Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T03:33:09.006Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T03:33:09.007Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T03:33:09.007Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T03:33:09.010Z] [BOT] ✅ Loaded V2 database: 1132 jobs
[2026-01-25T03:33:09.010Z] [BOT] 💾 DISK STATE: 1132 jobs on disk
[2026-01-25T03:33:09.012Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T03:33:09.012Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-25T03:33:09.021Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
[2026-01-25T03:33:09.021Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T03:33:13.523Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T03:33:13.524Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T03:33:13.614Z] [BOT] 📂 Loaded 8331 existing routing entries
[2026-01-25T03:33:13.732Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T03:33:13.732Z] [BOT] Total entries: 8341
   Timestamp: 2026-01-25T03:33:13.693Z
[2026-01-25T03:33:13.733Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T03:33:13.733Z] [BOT] Total attempts: 10
[2026-01-25T03:33:13.733Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T03:33:13.734Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T03:33:15.752Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*