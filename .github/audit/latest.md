# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T15:12:34.383Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T15:12:01.176Z] ========================================
[2026-01-25T15:12:01.177Z] Discord Bot Execution Log
[2026-01-25T15:12:01.178Z] Environment: GitHub Actions
[2026-01-25T15:12:01.178Z] Node Version: v20.20.0
[2026-01-25T15:12:01.178Z] ========================================
[2026-01-25T15:12:01.178Z] Environment Variables Check:
[2026-01-25T15:12:01.178Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T15:12:01.178Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.178Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T15:12:01.178Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T15:12:01.178Z] 
Multi-Channel Configuration:
[2026-01-25T15:12:01.178Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.178Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.178Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.179Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.179Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.179Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.179Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.179Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.179Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T15:12:01.179Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T15:12:01.179Z] 
Data Files Check:
[2026-01-25T15:12:01.180Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T15:12:01.185Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 598938 bytes)
[2026-01-25T15:12:01.185Z] 
========================================
[2026-01-25T15:12:01.185Z] Starting Enhanced Discord Bot...
[2026-01-25T15:12:01.185Z] ========================================
[2026-01-25T15:12:01.730Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T15:12:03.539Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T15:12:03.540Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T15:12:03.540Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T15:12:03.657Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T15:12:03.661Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T15:12:03.661Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T15:12:03.662Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T15:12:03.663Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T15:12:03.663Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T15:12:03.663Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-25T15:12:03.663Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T15:12:03.666Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T15:12:03.667Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T15:12:03.667Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:12:03.668Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:03.684Z] [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T15:12:03.862Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T15:12:03.862Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T15:12:03.862Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T15:12:03.863Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T15:12:03.866Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T15:12:03.866Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T15:12:03.867Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T15:12:03.869Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:12:03.869Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T15:12:03.870Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T15:12:03.876Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-25T15:12:03.876Z] [BOT] ✅ Archiving complete: 2 archived, 1047 active
[2026-01-25T15:12:03.884Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:12:03.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:05.387Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:12:05.388Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:05.653Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T15:12:05.654Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T15:12:05.654Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:12:05.657Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:12:05.657Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:12:05.657Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:12:05.659Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:12:05.659Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:12:05.660Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:12:05.667Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:07.169Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:12:07.170Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:07.336Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T15:12:07.336Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T15:12:07.336Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:12:07.340Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:12:07.340Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:12:07.340Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:12:07.342Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:12:07.342Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:12:07.343Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:12:07.350Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:08.852Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:12:08.852Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:10.021Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T15:12:10.021Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T15:12:10.022Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T15:12:10.022Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:12:10.025Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:12:10.025Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:12:10.027Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:12:10.027Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:12:10.028Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:12:10.038Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:12:10.038Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:14.541Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T15:12:14.541Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T15:12:14.541Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:12:14.542Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:14.878Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T15:12:14.878Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T15:12:14.878Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:12:14.883Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:12:14.883Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:12:14.883Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:12:14.885Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:12:14.885Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:12:14.886Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:12:14.895Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:12:14.895Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:16.398Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T15:12:16.398Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:12:16.398Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:16.752Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T15:12:16.752Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T15:12:16.752Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T15:12:16.753Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:12:16.756Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:12:16.756Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:12:16.758Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:12:16.758Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:12:16.759Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:12:16.768Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:12:16.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:18.269Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T15:12:18.269Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:12:18.270Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:18.500Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T15:12:18.500Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T15:12:18.501Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T15:12:18.501Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:12:18.504Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:12:18.505Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:12:18.507Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:12:18.507Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:12:18.508Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:12:18.516Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:20.016Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T15:12:20.017Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:12:20.017Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:20.263Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T15:12:20.263Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T15:12:20.264Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:12:20.267Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:12:20.267Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:12:20.269Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:12:20.269Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:12:20.270Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:12:20.277Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:21.778Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T15:12:21.778Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:12:21.779Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:21.950Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T15:12:21.950Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T15:12:21.950Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:12:21.954Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:12:21.954Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:12:21.956Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:12:21.957Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:12:21.965Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:12:21.966Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:26.468Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T15:12:26.468Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T15:12:26.468Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T15:12:26.469Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:12:26.721Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T15:12:26.722Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:12:26.725Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:12:26.725Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:12:26.727Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:12:26.728Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:12:26.736Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:12:26.736Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:12:31.239Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T15:12:31.240Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T15:12:31.334Z] [BOT] 📂 Loaded 8771 existing routing entries
[2026-01-25T15:12:31.444Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8781
   Timestamp: 2026-01-25T15:12:31.404Z
[2026-01-25T15:12:31.445Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T15:12:31.445Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T15:12:31.445Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T15:12:31.446Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T15:12:31.446Z] [BOT] [STATS] Channel stats saved
[2026-01-25T15:12:33.462Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*