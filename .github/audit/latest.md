# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T13:26:59.293Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T13:26:26.107Z] ========================================
[2026-01-25T13:26:26.109Z] Discord Bot Execution Log
[2026-01-25T13:26:26.109Z] Environment: GitHub Actions
[2026-01-25T13:26:26.109Z] Node Version: v20.20.0
[2026-01-25T13:26:26.109Z] ========================================
[2026-01-25T13:26:26.109Z] Environment Variables Check:
[2026-01-25T13:26:26.109Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T13:26:26.109Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.109Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T13:26:26.109Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T13:26:26.109Z] 
Multi-Channel Configuration:
[2026-01-25T13:26:26.110Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.110Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.110Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.110Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.110Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.110Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.110Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.110Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.110Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T13:26:26.110Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T13:26:26.110Z] 
Data Files Check:
[2026-01-25T13:26:26.111Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T13:26:26.116Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T13:26:26.116Z] 
========================================
[2026-01-25T13:26:26.116Z] Starting Enhanced Discord Bot...
[2026-01-25T13:26:26.116Z] ========================================
[2026-01-25T13:26:26.641Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:26:27.381Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T13:26:27.381Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T13:26:27.381Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T13:26:27.497Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T13:26:27.501Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T13:26:27.502Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T13:26:27.502Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T13:26:27.503Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T13:26:27.503Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T13:26:27.503Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T13:26:27.506Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T13:26:27.507Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T13:26:27.507Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:26:27.508Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:27.525Z] [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T13:26:28.033Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T13:26:28.034Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T13:26:28.035Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:28.038Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:26:28.038Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:28.039Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:28.041Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:28.041Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:28.042Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:28.055Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T13:26:28.055Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:29.558Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T13:26:29.558Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:26:29.558Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:29.766Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T13:26:29.766Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T13:26:29.766Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T13:26:29.767Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:29.770Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:26:29.770Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:29.770Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:29.772Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:29.772Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:29.773Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:29.781Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T13:26:29.781Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:31.282Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T13:26:31.282Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:26:31.282Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:31.508Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T13:26:31.508Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T13:26:31.509Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T13:26:31.509Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:31.512Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:26:31.512Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:31.513Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:31.515Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:31.515Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:31.516Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:31.523Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:33.025Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:26:33.025Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:34.656Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T13:26:34.656Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T13:26:34.657Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:34.660Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:34.660Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:34.662Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:34.662Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:34.663Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:34.672Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:39.174Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T13:26:39.175Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T13:26:39.175Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:26:39.175Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:39.366Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T13:26:39.367Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T13:26:39.367Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T13:26:39.367Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:39.372Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:39.372Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:39.375Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:39.375Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:39.376Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:39.385Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:40.887Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T13:26:40.887Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:26:40.887Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:41.176Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T13:26:41.176Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T13:26:41.176Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:41.180Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:41.180Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:41.183Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:41.183Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:41.184Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:41.192Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:42.693Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T13:26:42.693Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:43.010Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T13:26:43.010Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:43.014Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:43.014Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:43.016Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:43.017Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:43.017Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:43.026Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:44.527Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T13:26:44.528Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:26:44.528Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:44.786Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T13:26:44.786Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T13:26:44.786Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:44.789Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:44.790Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:44.792Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:44.792Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:44.792Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:44.799Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T13:26:44.800Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:46.301Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T13:26:46.301Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:26:46.302Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:46.475Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T13:26:46.475Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T13:26:46.476Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T13:26:46.476Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:46.479Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:46.480Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:46.482Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:46.482Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:46.483Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:46.491Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T13:26:46.491Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:50.993Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T13:26:50.993Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T13:26:50.993Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T13:26:50.993Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:26:51.290Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T13:26:51.290Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T13:26:51.290Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T13:26:51.290Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:26:51.294Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:26:51.294Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:26:51.296Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:26:51.296Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:26:51.297Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:26:51.304Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:26:55.806Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T13:26:55.808Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T13:26:55.902Z] [BOT] 📂 Loaded 8701 existing routing entries
[2026-01-25T13:26:56.013Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T13:26:56.013Z] [BOT] Total entries: 8711
   Timestamp: 2026-01-25T13:26:55.971Z
[2026-01-25T13:26:56.013Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T13:26:56.014Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T13:26:56.014Z] [BOT] [STATS] Channel stats saved
[2026-01-25T13:26:58.031Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*