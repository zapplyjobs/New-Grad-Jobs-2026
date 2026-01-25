# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T13:38:54.947Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T13:38:23.656Z] ========================================
[2026-01-25T13:38:23.658Z] Discord Bot Execution Log
[2026-01-25T13:38:23.658Z] Environment: GitHub Actions
[2026-01-25T13:38:23.658Z] Node Version: v20.20.0
[2026-01-25T13:38:23.658Z] ========================================
[2026-01-25T13:38:23.658Z] Environment Variables Check:
[2026-01-25T13:38:23.658Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T13:38:23.659Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.659Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T13:38:23.659Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T13:38:23.659Z] 
Multi-Channel Configuration:
[2026-01-25T13:38:23.659Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.659Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.659Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.659Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.659Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.659Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.659Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.660Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.660Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T13:38:23.660Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T13:38:23.660Z] 
Data Files Check:
[2026-01-25T13:38:23.661Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T13:38:23.665Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T13:38:23.665Z] 
========================================
[2026-01-25T13:38:23.665Z] Starting Enhanced Discord Bot...
[2026-01-25T13:38:23.666Z] ========================================
[2026-01-25T13:38:24.184Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:38:24.664Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T13:38:24.664Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T13:38:24.665Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T13:38:24.782Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T13:38:24.786Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T13:38:24.786Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T13:38:24.786Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T13:38:24.787Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T13:38:24.788Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T13:38:24.788Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T13:38:24.791Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T13:38:24.792Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T13:38:24.792Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:38:24.793Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:24.809Z] [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T13:38:25.057Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T13:38:25.057Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T13:38:25.058Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T13:38:25.058Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:25.061Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:38:25.062Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:25.062Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:25.064Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:25.064Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:25.065Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:25.079Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:26.582Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T13:38:26.582Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:38:26.582Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:26.698Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T13:38:26.698Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T13:38:26.699Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T13:38:26.699Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:26.703Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:38:26.703Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:26.704Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:26.706Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:26.706Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:26.707Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:26.715Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T13:38:26.715Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:28.217Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T13:38:28.217Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:38:28.217Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:28.437Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T13:38:28.437Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T13:38:28.438Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T13:38:28.438Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:28.441Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:28.442Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:28.444Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:28.444Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:28.444Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:28.452Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:29.953Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T13:38:29.953Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:30.154Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T13:38:30.154Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T13:38:30.155Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T13:38:30.155Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:30.158Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:30.158Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:30.160Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:30.160Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:30.161Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:30.171Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:34.672Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T13:38:34.673Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T13:38:34.673Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:38:34.674Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:34.828Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T13:38:34.828Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T13:38:34.828Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:34.833Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:38:34.833Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:34.833Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:34.836Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:34.836Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:34.837Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:34.846Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:36.349Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T13:38:36.349Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:38:36.349Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:36.592Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T13:38:36.593Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T13:38:36.593Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:36.596Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:36.597Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:36.599Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:36.599Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:36.600Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:36.608Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T13:38:36.609Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:38.110Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T13:38:38.110Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:38:38.111Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:38.241Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T13:38:38.241Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T13:38:38.242Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:38.245Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:38:38.245Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:38.246Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:38.248Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:38.248Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:38.249Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:38.257Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T13:38:38.257Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:39.760Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T13:38:39.760Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:38:39.760Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:39.967Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T13:38:39.967Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T13:38:39.968Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T13:38:39.968Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:39.971Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:38:39.971Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:39.971Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:39.973Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:39.973Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:39.974Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:39.981Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:41.483Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T13:38:41.483Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T13:38:41.484Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:41.687Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T13:38:41.687Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T13:38:41.688Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T13:38:41.688Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:41.691Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:41.692Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:41.694Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:41.694Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:41.695Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:41.703Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T13:38:41.703Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:46.204Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T13:38:46.205Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T13:38:46.205Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T13:38:46.205Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T13:38:47.579Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T13:38:47.580Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T13:38:47.580Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T13:38:47.583Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T13:38:47.583Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T13:38:47.584Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T13:38:47.586Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T13:38:47.586Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T13:38:47.586Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T13:38:47.594Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T13:38:52.096Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T13:38:52.098Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T13:38:52.193Z] [BOT] 📂 Loaded 8711 existing routing entries
[2026-01-25T13:38:52.305Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T13:38:52.305Z] [BOT] Total entries: 8721
   Timestamp: 2026-01-25T13:38:52.263Z
[2026-01-25T13:38:52.305Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T13:38:52.306Z] [BOT] Total attempts: 10
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
[STATS] Channel stats saved
[2026-01-25T13:38:54.323Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*