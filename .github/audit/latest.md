# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T11:54:48.239Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T11:54:16.518Z] ========================================
[2026-01-25T11:54:16.519Z] Discord Bot Execution Log
[2026-01-25T11:54:16.519Z] Environment: GitHub Actions
[2026-01-25T11:54:16.519Z] Node Version: v20.20.0
[2026-01-25T11:54:16.519Z] ========================================
[2026-01-25T11:54:16.519Z] Environment Variables Check:
[2026-01-25T11:54:16.519Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T11:54:16.520Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T11:54:16.520Z] 
Multi-Channel Configuration:
[2026-01-25T11:54:16.520Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T11:54:16.520Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T11:54:16.520Z] 
Data Files Check:
[2026-01-25T11:54:16.522Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T11:54:16.526Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T11:54:16.526Z] 
========================================
[2026-01-25T11:54:16.526Z] Starting Enhanced Discord Bot...
[2026-01-25T11:54:16.526Z] ========================================
[2026-01-25T11:54:16.977Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:54:17.680Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T11:54:17.681Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T11:54:17.681Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T11:54:17.833Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T11:54:17.836Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T11:54:17.837Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T11:54:17.837Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T11:54:17.838Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-25T11:54:17.838Z] [BOT] 📍 2 jobs with multiple locations:
[2026-01-25T11:54:17.838Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T11:54:17.842Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T11:54:17.842Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T11:54:17.842Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:54:17.843Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:17.859Z] [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T11:54:18.259Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T11:54:18.260Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T11:54:18.260Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:18.264Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:54:18.264Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:18.265Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:18.267Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:54:18.267Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:18.268Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:18.279Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:19.781Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:54:19.781Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:20.099Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T11:54:20.100Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T11:54:20.100Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T11:54:20.100Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:20.104Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:54:20.104Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:20.104Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:20.106Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:20.106Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:20.115Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:21.616Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T11:54:21.616Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:54:21.616Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:21.831Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T11:54:21.832Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T11:54:21.832Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T11:54:21.832Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:21.836Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:21.836Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:21.838Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:21.839Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:21.846Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:23.347Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:54:23.347Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:23.566Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T11:54:23.567Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T11:54:23.567Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:23.571Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:23.571Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:23.573Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:54:23.573Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:23.573Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:23.582Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:28.085Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T11:54:28.086Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T11:54:28.086Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:54:28.086Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:28.442Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T11:54:28.442Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T11:54:28.442Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T11:54:28.442Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:28.447Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:28.447Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:28.449Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:54:28.449Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:28.450Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:28.459Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:29.961Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T11:54:29.961Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:54:29.962Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:30.218Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T11:54:30.219Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T11:54:30.219Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T11:54:30.219Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:30.225Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:54:30.225Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:30.225Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:30.227Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:54:30.227Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:30.228Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:30.237Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:31.737Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T11:54:31.737Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:54:31.737Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:31.980Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T11:54:31.980Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T11:54:31.980Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:31.984Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:31.984Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:31.986Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:54:31.986Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:31.987Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:31.996Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:33.496Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T11:54:33.497Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:33.862Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T11:54:33.862Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T11:54:33.863Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:33.866Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:33.867Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:33.870Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:54:33.870Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:33.870Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:33.877Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:35.378Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T11:54:35.378Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:54:35.379Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:35.630Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T11:54:35.630Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T11:54:35.630Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T11:54:35.630Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:35.634Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:54:35.634Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:35.634Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:35.636Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:35.637Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:35.644Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:40.144Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T11:54:40.145Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T11:54:40.145Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T11:54:40.145Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:54:40.421Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T11:54:40.421Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T11:54:40.421Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:54:40.425Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:54:40.426Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:54:40.428Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:54:40.429Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:54:40.437Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:54:44.939Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T11:54:44.941Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T11:54:45.041Z] [BOT] 📂 Loaded 8661 existing routing entries
[2026-01-25T11:54:45.154Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8671
   Timestamp: 2026-01-25T11:54:45.119Z
[2026-01-25T11:54:45.155Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T11:54:45.155Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T11:54:45.155Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T11:54:45.155Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T11:54:45.155Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T11:54:45.155Z] [BOT] [STATS] Channel stats saved
[2026-01-25T11:54:47.169Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2447) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*