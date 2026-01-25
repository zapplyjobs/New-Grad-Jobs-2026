# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T12:32:35.373Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T12:32:03.638Z] ========================================
[2026-01-25T12:32:03.640Z] Discord Bot Execution Log
[2026-01-25T12:32:03.640Z] Environment: GitHub Actions
[2026-01-25T12:32:03.640Z] Node Version: v20.20.0
[2026-01-25T12:32:03.640Z] ========================================
[2026-01-25T12:32:03.640Z] Environment Variables Check:
[2026-01-25T12:32:03.640Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T12:32:03.640Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.641Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T12:32:03.641Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T12:32:03.641Z] 
Multi-Channel Configuration:
[2026-01-25T12:32:03.641Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.641Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.641Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.641Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.641Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.641Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.641Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.641Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.642Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T12:32:03.642Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T12:32:03.642Z] 
Data Files Check:
[2026-01-25T12:32:03.643Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T12:32:03.647Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T12:32:03.647Z] 
========================================
[2026-01-25T12:32:03.647Z] Starting Enhanced Discord Bot...
[2026-01-25T12:32:03.647Z] ========================================
[2026-01-25T12:32:04.167Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:32:04.859Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T12:32:04.859Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T12:32:04.859Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T12:32:04.976Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T12:32:04.979Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T12:32:04.979Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T12:32:04.980Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T12:32:04.980Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T12:32:04.981Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T12:32:04.981Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T12:32:04.984Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T12:32:04.985Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T12:32:04.985Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:32:04.986Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:05.002Z] [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T12:32:05.241Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T12:32:05.241Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T12:32:05.242Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T12:32:05.242Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:05.246Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:32:05.246Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:05.246Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:05.248Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:32:05.248Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:05.249Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:05.261Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:06.764Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T12:32:06.764Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:32:06.764Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:06.950Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T12:32:06.950Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T12:32:06.951Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:06.954Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:06.954Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:06.956Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:06.957Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:06.965Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:32:06.965Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:08.466Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T12:32:08.466Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:32:08.467Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:08.669Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T12:32:08.669Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T12:32:08.670Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T12:32:08.670Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:08.673Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:32:08.673Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:08.673Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:08.675Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:32:08.675Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:08.676Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:08.684Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:10.186Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:32:10.186Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:10.415Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T12:32:10.415Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T12:32:10.415Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:10.419Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:10.419Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:10.421Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:10.422Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:10.432Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:32:10.432Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:14.934Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T12:32:14.934Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T12:32:14.934Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:32:14.935Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:15.348Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T12:32:15.349Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T12:32:15.349Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:15.353Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:32:15.353Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:15.353Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:15.356Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:32:15.356Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:15.357Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:15.366Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:32:15.366Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:16.868Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T12:32:16.868Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:32:16.868Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:17.032Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T12:32:17.032Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T12:32:17.032Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T12:32:17.032Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:17.036Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:17.036Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:17.038Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:32:17.038Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:17.039Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:17.048Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:32:17.048Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:18.550Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T12:32:18.550Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:18.796Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T12:32:18.796Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T12:32:18.796Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:18.800Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:18.800Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:18.802Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:18.803Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:18.812Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:32:18.812Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:20.312Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T12:32:20.312Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:32:20.312Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:20.530Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T12:32:20.531Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:20.534Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:20.534Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:20.536Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:32:20.536Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:20.537Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:20.544Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:32:20.544Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:22.046Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T12:32:22.046Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:22.332Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T12:32:22.333Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T12:32:22.333Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T12:32:22.333Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:22.337Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:32:22.337Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:22.337Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:22.339Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:32:22.340Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:22.340Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:22.348Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:32:22.348Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:26.850Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T12:32:26.851Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T12:32:26.851Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T12:32:26.851Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:32:27.486Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T12:32:27.487Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T12:32:27.487Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:32:27.490Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:32:27.490Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:32:27.492Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:32:27.492Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:32:27.493Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:32:27.500Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:32:32.002Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T12:32:32.004Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T12:32:32.098Z] [BOT] 📂 Loaded 8681 existing routing entries
[2026-01-25T12:32:32.207Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T12:32:32.207Z] [BOT] Total entries: 8691
   Timestamp: 2026-01-25T12:32:32.166Z
[2026-01-25T12:32:32.207Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T12:32:32.207Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T12:32:32.207Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T12:32:32.208Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T12:32:32.208Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T12:32:32.208Z] [BOT] [STATS] Channel stats saved
[2026-01-25T12:32:34.225Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*