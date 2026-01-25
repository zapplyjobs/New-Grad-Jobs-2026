# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T08:13:33.476Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T08:13:03.342Z] ========================================
[2026-01-25T08:13:03.344Z] Discord Bot Execution Log
[2026-01-25T08:13:03.344Z] Environment: GitHub Actions
[2026-01-25T08:13:03.344Z] Node Version: v20.20.0
[2026-01-25T08:13:03.344Z] ========================================
[2026-01-25T08:13:03.344Z] Environment Variables Check:
[2026-01-25T08:13:03.344Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T08:13:03.344Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.345Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T08:13:03.345Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T08:13:03.345Z] 
Multi-Channel Configuration:
[2026-01-25T08:13:03.345Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.345Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.345Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.345Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.345Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.345Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.345Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.345Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.345Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T08:13:03.346Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T08:13:03.346Z] 
Data Files Check:
[2026-01-25T08:13:03.347Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T08:13:03.351Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 610984 bytes)
[2026-01-25T08:13:03.351Z] 
========================================
[2026-01-25T08:13:03.351Z] Starting Enhanced Discord Bot...
[2026-01-25T08:13:03.351Z] ========================================
[2026-01-25T08:13:03.907Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T08:13:04.226Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T08:13:04.226Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T08:13:04.227Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T08:13:04.348Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T08:13:04.352Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T08:13:04.352Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T08:13:04.352Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T08:13:04.354Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T08:13:04.354Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T08:13:04.354Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T08:13:04.357Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T08:13:04.358Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T08:13:04.358Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:13:04.359Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:04.375Z] [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T08:13:04.720Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T08:13:04.720Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T08:13:04.721Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T08:13:04.721Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:04.725Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T08:13:04.725Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:04.725Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:04.727Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:13:04.728Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:04.728Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:04.741Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T08:13:04.742Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:06.243Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T08:13:06.243Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:13:06.244Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:06.389Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T08:13:06.389Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T08:13:06.389Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T08:13:06.389Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:06.393Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T08:13:06.393Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:06.393Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:06.395Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:06.396Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:06.404Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T08:13:06.404Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:07.905Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T08:13:07.905Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:13:07.906Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:08.049Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T08:13:08.049Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T08:13:08.049Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T08:13:08.049Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:08.053Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:08.053Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:08.055Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:13:08.055Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:08.056Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:08.063Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:09.565Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T08:13:09.565Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:13:09.565Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:09.762Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T08:13:09.762Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T08:13:09.763Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:09.766Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:09.766Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:09.768Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:09.769Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:09.778Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T08:13:09.778Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:14.280Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T08:13:14.281Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T08:13:14.281Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:13:14.281Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:14.480Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T08:13:14.480Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T08:13:14.480Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:14.485Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:14.485Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:14.488Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:13:14.488Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:14.489Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:14.498Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T08:13:14.499Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:16.000Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T08:13:16.000Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:16.270Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T08:13:16.270Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:16.274Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:16.274Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:16.277Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:13:16.277Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:16.277Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:16.286Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:17.787Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T08:13:17.787Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:17.937Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T08:13:17.937Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T08:13:17.937Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T08:13:17.938Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:17.941Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:17.942Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:17.944Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:13:17.944Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:17.945Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:17.954Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:19.456Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T08:13:19.457Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:13:19.457Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:19.751Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T08:13:19.752Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T08:13:19.752Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:19.755Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T08:13:19.755Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:19.755Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:19.757Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:13:19.757Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:19.758Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:19.765Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:21.267Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T08:13:21.267Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:21.373Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T08:13:21.373Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T08:13:21.374Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T08:13:21.374Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:21.377Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T08:13:21.377Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:21.378Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:21.380Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:13:21.380Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:21.381Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:21.389Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:25.891Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T08:13:25.891Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T08:13:25.891Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T08:13:25.892Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:13:26.044Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T08:13:26.045Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T08:13:26.045Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:13:26.048Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:13:26.049Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:13:26.051Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:13:26.051Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:13:26.051Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T08:13:26.059Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:13:30.562Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T08:13:30.564Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T08:13:30.656Z] [BOT] 📂 Loaded 8511 existing routing entries
[2026-01-25T08:13:30.763Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8521
[2026-01-25T08:13:30.764Z] [BOT] Timestamp: 2026-01-25T08:13:30.723Z
[2026-01-25T08:13:30.764Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T08:13:30.764Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T08:13:30.764Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T08:13:30.765Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T08:13:30.765Z] [BOT] [STATS] Channel stats saved
[2026-01-25T08:13:32.783Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*