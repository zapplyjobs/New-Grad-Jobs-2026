# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T11:15:34.066Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T11:15:02.682Z] ========================================
[2026-01-25T11:15:02.684Z] Discord Bot Execution Log
[2026-01-25T11:15:02.684Z] Environment: GitHub Actions
[2026-01-25T11:15:02.684Z] Node Version: v20.20.0
[2026-01-25T11:15:02.684Z] ========================================
[2026-01-25T11:15:02.684Z] Environment Variables Check:
[2026-01-25T11:15:02.685Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T11:15:02.685Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.685Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T11:15:02.685Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T11:15:02.685Z] 
Multi-Channel Configuration:
[2026-01-25T11:15:02.685Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.685Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.685Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.685Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.685Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.685Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.686Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.686Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.686Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T11:15:02.686Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T11:15:02.686Z] 
Data Files Check:
[2026-01-25T11:15:02.687Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T11:15:02.692Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T11:15:02.692Z] 
========================================
[2026-01-25T11:15:02.692Z] Starting Enhanced Discord Bot...
[2026-01-25T11:15:02.692Z] ========================================
[2026-01-25T11:15:03.210Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:15:04.046Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T11:15:04.047Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T11:15:04.047Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T11:15:04.166Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T11:15:04.170Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T11:15:04.170Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T11:15:04.171Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T11:15:04.171Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T11:15:04.172Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T11:15:04.172Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T11:15:04.172Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T11:15:04.175Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T11:15:04.176Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T11:15:04.176Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:15:04.177Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:04.193Z] [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T11:15:04.504Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T11:15:04.504Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T11:15:04.504Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T11:15:04.505Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:04.508Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:15:04.509Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:04.509Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:04.511Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:04.511Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:04.512Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:04.524Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:06.026Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T11:15:06.027Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:15:06.027Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:06.259Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T11:15:06.260Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T11:15:06.260Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:06.263Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:06.263Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:06.265Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:06.265Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:06.266Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:06.274Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:07.776Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T11:15:07.776Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:15:07.776Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:07.991Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T11:15:07.991Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T11:15:07.992Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T11:15:07.992Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:07.995Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:07.995Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:07.997Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:07.997Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:07.998Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:08.006Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:09.508Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T11:15:09.508Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:15:09.508Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:09.736Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T11:15:09.737Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T11:15:09.737Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T11:15:09.737Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:09.741Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:15:09.741Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:09.741Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:09.743Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:09.743Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:09.743Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:09.753Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:15:09.753Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:14.255Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T11:15:14.256Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T11:15:14.256Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:15:14.256Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:14.734Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T11:15:14.734Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T11:15:14.734Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T11:15:14.735Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:14.739Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:14.739Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:14.742Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:14.742Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:14.743Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:14.752Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:16.254Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T11:15:16.254Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:15:16.254Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:16.461Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T11:15:16.461Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T11:15:16.461Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T11:15:16.462Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:16.467Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:15:16.467Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:16.467Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:16.470Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:16.470Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:16.471Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:16.479Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:17.981Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T11:15:17.981Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:18.124Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T11:15:18.124Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T11:15:18.124Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:18.128Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:18.128Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:18.131Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:18.131Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:18.131Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:18.140Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:15:18.140Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:19.642Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T11:15:19.642Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:15:19.642Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:19.852Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T11:15:19.852Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T11:15:19.853Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:19.856Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:15:19.856Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:19.856Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:19.858Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:19.858Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:19.859Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:19.866Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:21.368Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T11:15:21.368Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:15:21.368Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:21.614Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T11:15:21.615Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T11:15:21.615Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T11:15:21.615Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:21.619Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:21.619Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:21.621Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:21.621Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:21.622Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:21.630Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:26.133Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T11:15:26.133Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T11:15:26.134Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T11:15:26.134Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:15:26.390Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T11:15:26.391Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T11:15:26.391Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T11:15:26.391Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:15:26.394Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:15:26.395Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:15:26.396Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:15:26.397Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:15:26.397Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:15:26.405Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:15:30.906Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T11:15:30.907Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T11:15:31.001Z] [BOT] 📂 Loaded 8631 existing routing entries
[2026-01-25T11:15:31.110Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8641
[2026-01-25T11:15:31.111Z] [BOT] Timestamp: 2026-01-25T11:15:31.070Z
[2026-01-25T11:15:31.111Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-25T11:15:31.111Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-25T11:15:31.111Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T11:15:31.111Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T11:15:31.111Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T11:15:31.112Z] [BOT] [STATS] Channel stats saved
[2026-01-25T11:15:33.130Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2534) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*