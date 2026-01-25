# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T10:31:04.348Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T10:30:34.058Z] ========================================
[2026-01-25T10:30:34.060Z] Discord Bot Execution Log
[2026-01-25T10:30:34.061Z] Environment: GitHub Actions
[2026-01-25T10:30:34.061Z] Node Version: v20.20.0
[2026-01-25T10:30:34.061Z] ========================================
[2026-01-25T10:30:34.061Z] Environment Variables Check:
[2026-01-25T10:30:34.061Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T10:30:34.061Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.061Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T10:30:34.061Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T10:30:34.061Z] 
Multi-Channel Configuration:
[2026-01-25T10:30:34.061Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.062Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.062Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.062Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.062Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.062Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.062Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.062Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.062Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T10:30:34.062Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T10:30:34.062Z] 
Data Files Check:
[2026-01-25T10:30:34.063Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T10:30:34.068Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T10:30:34.068Z] 
========================================
[2026-01-25T10:30:34.068Z] Starting Enhanced Discord Bot...
[2026-01-25T10:30:34.068Z] ========================================
[2026-01-25T10:30:34.606Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:30:35.085Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T10:30:35.085Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T10:30:35.085Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T10:30:35.222Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T10:30:35.226Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T10:30:35.226Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T10:30:35.226Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T10:30:35.227Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T10:30:35.228Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T10:30:35.228Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T10:30:35.228Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T10:30:35.231Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T10:30:35.232Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T10:30:35.232Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:30:35.233Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:35.249Z] [BOT ERROR] (node:2550) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T10:30:35.400Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T10:30:35.400Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T10:30:35.401Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T10:30:35.401Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:35.408Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:30:35.408Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:35.408Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:35.412Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:30:35.412Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:35.414Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:35.432Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:30:36.934Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:30:36.934Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:37.108Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T10:30:37.108Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T10:30:37.109Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T10:30:37.109Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:37.112Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:30:37.112Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:37.113Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:37.115Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:30:37.115Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:37.115Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:37.124Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:30:38.625Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T10:30:38.625Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:30:38.625Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:38.829Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T10:30:38.829Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T10:30:38.830Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:38.833Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:30:38.833Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:38.834Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:38.836Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:30:38.836Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:38.837Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:38.844Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:30:40.345Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:30:40.345Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:40.509Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T10:30:40.509Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T10:30:40.509Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:40.513Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:40.513Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:40.515Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:30:40.515Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:40.516Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:40.526Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:30:45.029Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T10:30:45.030Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T10:30:45.030Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:30:45.030Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:45.226Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T10:30:45.226Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T10:30:45.226Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T10:30:45.227Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:45.231Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:30:45.231Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:45.231Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:45.234Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:30:45.234Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:45.235Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:45.244Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T10:30:45.245Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T10:30:46.746Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T10:30:46.746Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:30:46.747Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:47.034Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T10:30:47.034Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T10:30:47.036Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:47.040Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:47.040Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:47.043Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:47.044Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:47.052Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T10:30:47.053Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T10:30:48.555Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T10:30:48.556Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:48.730Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T10:30:48.731Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T10:30:48.731Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:48.735Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:48.735Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:48.737Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:48.738Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:48.746Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T10:30:48.747Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T10:30:50.248Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T10:30:50.249Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:50.433Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T10:30:50.434Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T10:30:50.434Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:50.437Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:50.438Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:50.440Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:50.440Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:50.448Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:30:51.949Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T10:30:51.949Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:30:51.950Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:52.226Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T10:30:52.226Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T10:30:52.227Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T10:30:52.227Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:52.230Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:52.231Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:52.233Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:30:52.233Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:52.234Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:52.242Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T10:30:52.242Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T10:30:56.744Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T10:30:56.744Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T10:30:56.744Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T10:30:56.744Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:30:56.992Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T10:30:56.993Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T10:30:56.993Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T10:30:56.993Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:30:56.996Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:30:56.997Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:30:56.999Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:30:56.999Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:30:56.999Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:30:57.007Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:31:01.509Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T10:31:01.511Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T10:31:01.604Z] [BOT] 📂 Loaded 8601 existing routing entries
[2026-01-25T10:31:01.712Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T10:31:01.713Z] [BOT] Total entries: 8611
   Timestamp: 2026-01-25T10:31:01.672Z
[2026-01-25T10:31:01.713Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T10:31:01.713Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T10:31:01.713Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T10:31:01.713Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T10:31:01.714Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T10:31:01.714Z] [BOT] [STATS] Channel stats saved
[2026-01-25T10:31:03.733Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2550) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*