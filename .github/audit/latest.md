# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T11:08:27.628Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T11:07:56.473Z] ========================================
[2026-01-25T11:07:56.475Z] Discord Bot Execution Log
[2026-01-25T11:07:56.475Z] Environment: GitHub Actions
[2026-01-25T11:07:56.476Z] Node Version: v20.20.0
[2026-01-25T11:07:56.476Z] ========================================
[2026-01-25T11:07:56.476Z] Environment Variables Check:
[2026-01-25T11:07:56.476Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T11:07:56.476Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.476Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T11:07:56.476Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T11:07:56.476Z] 
Multi-Channel Configuration:
[2026-01-25T11:07:56.476Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.477Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.477Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.477Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.477Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.477Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.477Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.477Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.477Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T11:07:56.477Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T11:07:56.477Z] 
Data Files Check:
[2026-01-25T11:07:56.478Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T11:07:56.483Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T11:07:56.483Z] 
========================================
[2026-01-25T11:07:56.483Z] Starting Enhanced Discord Bot...
[2026-01-25T11:07:56.483Z] ========================================
[2026-01-25T11:07:57.002Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:07:57.699Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T11:07:57.699Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T11:07:57.700Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T11:07:57.816Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-25T11:07:57.816Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-25T11:07:57.817Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T11:07:57.821Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T11:07:57.821Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T11:07:57.822Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T11:07:57.823Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T11:07:57.823Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T11:07:57.823Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T11:07:57.827Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T11:07:57.827Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T11:07:57.827Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:07:57.828Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:07:57.844Z] [BOT ERROR] (node:2563) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T11:07:58.083Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T11:07:58.084Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T11:07:58.084Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:07:58.088Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:07:58.088Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:07:58.088Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:07:58.090Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:07:58.090Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:07:58.091Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:07:58.102Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:07:59.604Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:07:59.604Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:07:59.765Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T11:07:59.766Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T11:07:59.766Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T11:07:59.766Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:07:59.769Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:07:59.770Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:07:59.772Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:07:59.772Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:07:59.772Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:07:59.780Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:08:01.281Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T11:08:01.281Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:08:01.281Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:08:01.462Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T11:08:01.462Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T11:08:01.462Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T11:08:01.462Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:08:01.465Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:08:01.466Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:08:01.466Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:08:01.468Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:08:01.468Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:08:01.469Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:08:01.476Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:08:01.476Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:08:02.977Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:08:02.978Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:08:03.198Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T11:08:03.198Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T11:08:03.198Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:08:03.202Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:08:03.202Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:08:03.202Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:08:03.204Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:08:03.204Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:08:03.205Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:08:03.214Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:08:03.214Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:08:07.716Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T11:08:07.717Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T11:08:07.717Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:08:07.717Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:08:07.988Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T11:08:07.988Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T11:08:07.989Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:08:07.993Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:08:07.993Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:08:07.996Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:08:07.996Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:08:07.996Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:08:08.006Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:08:08.006Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:08:09.508Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T11:08:09.508Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:08:09.508Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:08:09.708Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T11:08:09.709Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T11:08:09.709Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:08:09.712Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:08:09.712Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:08:09.712Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:08:09.715Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:08:09.715Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:08:09.715Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:08:09.724Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:08:09.724Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:08:11.225Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T11:08:11.225Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:08:11.225Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:08:11.434Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T11:08:11.435Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T11:08:11.435Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:08:11.438Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:08:11.439Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:08:11.441Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:08:11.441Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:08:11.442Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:08:11.450Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:08:11.450Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:08:12.951Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T11:08:12.951Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:08:12.951Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:08:13.272Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T11:08:13.272Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T11:08:13.272Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:08:13.276Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:08:13.276Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:08:13.278Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:08:13.278Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:08:13.279Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:08:13.286Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:08:13.286Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:08:14.787Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T11:08:14.787Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:08:14.787Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:08:14.926Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T11:08:14.926Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T11:08:14.926Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T11:08:14.926Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:08:14.930Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:08:14.930Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:08:14.930Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:08:14.932Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:08:14.933Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:08:14.933Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:08:14.941Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:08:14.941Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:08:19.443Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T11:08:19.444Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T11:08:19.444Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T11:08:19.444Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:08:19.831Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T11:08:19.832Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T11:08:19.832Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:08:19.835Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:08:19.835Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:08:19.837Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:08:19.838Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:08:19.845Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:08:24.348Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T11:08:24.350Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T11:08:24.442Z] [BOT] 📂 Loaded 8621 existing routing entries
[2026-01-25T11:08:24.551Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T11:08:24.551Z] [BOT] Total entries: 8631
   Timestamp: 2026-01-25T11:08:24.510Z
[2026-01-25T11:08:24.551Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T11:08:24.552Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T11:08:24.552Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T11:08:26.569Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2563) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*