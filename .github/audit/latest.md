# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T15:43:24.507Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T15:42:53.471Z] ========================================
[2026-01-25T15:42:53.473Z] Discord Bot Execution Log
[2026-01-25T15:42:53.473Z] Environment: GitHub Actions
[2026-01-25T15:42:53.473Z] Node Version: v20.20.0
[2026-01-25T15:42:53.473Z] ========================================
[2026-01-25T15:42:53.474Z] Environment Variables Check:
[2026-01-25T15:42:53.474Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T15:42:53.474Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.474Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T15:42:53.474Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T15:42:53.474Z] 
Multi-Channel Configuration:
[2026-01-25T15:42:53.474Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.474Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.474Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.474Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.475Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.475Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.475Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.475Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.475Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T15:42:53.475Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T15:42:53.475Z] 
Data Files Check:
[2026-01-25T15:42:53.476Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T15:42:53.481Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 597927 bytes)
[2026-01-25T15:42:53.481Z] 
========================================
[2026-01-25T15:42:53.481Z] Starting Enhanced Discord Bot...
[2026-01-25T15:42:53.481Z] ========================================
[2026-01-25T15:42:54.012Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:42:54.608Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T15:42:54.609Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T15:42:54.609Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T15:42:54.727Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T15:42:54.731Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T15:42:54.731Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T15:42:54.731Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T15:42:54.732Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T15:42:54.732Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T15:42:54.732Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T15:42:54.733Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T15:42:54.736Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T15:42:54.736Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T15:42:54.737Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:42:54.737Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:42:54.755Z] [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T15:42:55.165Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T15:42:55.165Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T15:42:55.166Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T15:42:55.166Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:42:55.170Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:42:55.170Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:42:55.170Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:42:55.172Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:42:55.173Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:42:55.174Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T15:42:55.184Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-25T15:42:55.184Z] [BOT] ✅ Archiving complete: 2 archived, 1045 active
[2026-01-25T15:42:55.194Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:42:56.696Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T15:42:56.696Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:42:56.696Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:42:57.025Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T15:42:57.026Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T15:42:57.026Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T15:42:57.026Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:42:57.029Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T15:42:57.030Z] [BOT] 💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:42:57.030Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:42:57.032Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:42:57.032Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:42:57.033Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:42:57.040Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:42:57.040Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:42:58.541Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T15:42:58.541Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:42:58.542Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:42:58.882Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T15:42:58.883Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:42:58.886Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:42:58.886Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:42:58.889Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:42:58.889Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:42:58.889Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:42:58.897Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:43:00.398Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:43:00.399Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:43:00.699Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T15:43:00.699Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T15:43:00.700Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T15:43:00.700Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:43:00.703Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:43:00.703Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:43:00.705Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:43:00.706Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:43:00.706Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:43:00.716Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:43:00.716Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:43:05.216Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T15:43:05.217Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T15:43:05.217Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:43:05.218Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:43:05.455Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T15:43:05.455Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T15:43:05.455Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T15:43:05.455Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:43:05.460Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:43:05.460Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:43:05.463Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:43:05.463Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:43:05.464Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:43:05.473Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:43:06.974Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T15:43:06.974Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:43:06.975Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:43:07.188Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T15:43:07.189Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T15:43:07.189Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:43:07.192Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:43:07.192Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:43:07.195Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:43:07.195Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:43:07.196Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:43:07.205Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:43:07.205Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:43:08.705Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T15:43:08.706Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:43:08.706Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:43:08.958Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T15:43:08.959Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T15:43:08.959Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T15:43:08.959Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:43:08.963Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T15:43:08.963Z] [BOT] 💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:43:08.963Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:43:08.966Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:43:08.966Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:43:08.966Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:43:08.975Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:43:08.975Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:43:10.476Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T15:43:10.477Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:43:10.477Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:43:10.660Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T15:43:10.660Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T15:43:10.661Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T15:43:10.661Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:43:10.664Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T15:43:10.664Z] [BOT] 💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:43:10.664Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:43:10.666Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:43:10.667Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:43:10.667Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:43:10.675Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:43:12.176Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T15:43:12.177Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:43:12.177Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:43:12.334Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T15:43:12.335Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:43:12.339Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:43:12.339Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:43:12.342Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:43:12.342Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:43:12.342Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:43:12.350Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:43:16.852Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T15:43:16.852Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T15:43:16.852Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T15:43:16.853Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:43:17.040Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T15:43:17.041Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T15:43:17.041Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T15:43:17.041Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:43:17.044Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:43:17.045Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:43:17.047Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:43:17.047Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:43:17.047Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:43:17.055Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:43:21.557Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T15:43:21.559Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T15:43:21.653Z] [BOT] 📂 Loaded 8791 existing routing entries
[2026-01-25T15:43:21.763Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T15:43:21.764Z] [BOT] Total entries: 8801
   Timestamp: 2026-01-25T15:43:21.722Z
[2026-01-25T15:43:21.764Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T15:43:21.764Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T15:43:21.764Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-25T15:43:21.765Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T15:43:21.765Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T15:43:21.765Z] [BOT] [STATS] Channel stats saved
[2026-01-25T15:43:23.783Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*