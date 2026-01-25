# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T15:30:34.997Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T15:30:04.189Z] ========================================
[2026-01-25T15:30:04.191Z] Discord Bot Execution Log
[2026-01-25T15:30:04.191Z] Environment: GitHub Actions
[2026-01-25T15:30:04.191Z] Node Version: v20.20.0
[2026-01-25T15:30:04.191Z] ========================================
[2026-01-25T15:30:04.191Z] Environment Variables Check:
[2026-01-25T15:30:04.191Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T15:30:04.191Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.191Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T15:30:04.192Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T15:30:04.192Z] 
Multi-Channel Configuration:
[2026-01-25T15:30:04.192Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.192Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.192Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.192Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.192Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.192Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.192Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.192Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.192Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T15:30:04.192Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T15:30:04.193Z] 
Data Files Check:
[2026-01-25T15:30:04.194Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T15:30:04.198Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 597927 bytes)
[2026-01-25T15:30:04.198Z] 
========================================
[2026-01-25T15:30:04.198Z] Starting Enhanced Discord Bot...
[2026-01-25T15:30:04.198Z] ========================================
[2026-01-25T15:30:04.722Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:30:05.115Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T15:30:05.115Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T15:30:05.116Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T15:30:05.235Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T15:30:05.239Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T15:30:05.239Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T15:30:05.240Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T15:30:05.241Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T15:30:05.241Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T15:30:05.241Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T15:30:05.241Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T15:30:05.245Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T15:30:05.245Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T15:30:05.245Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:30:05.246Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:05.263Z] [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T15:30:05.457Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T15:30:05.457Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T15:30:05.458Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T15:30:05.458Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:05.463Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:30:05.463Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:05.463Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:05.466Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:30:05.466Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:05.467Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:05.480Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:06.982Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:30:06.982Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:07.188Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T15:30:07.188Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T15:30:07.189Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T15:30:07.189Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:07.192Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:30:07.192Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:07.192Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:07.194Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:30:07.194Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:07.195Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:07.203Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:08.705Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T15:30:08.705Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:30:08.705Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:08.856Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T15:30:08.856Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T15:30:08.857Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T15:30:08.857Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:08.860Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:30:08.860Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:08.860Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:08.862Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:30:08.863Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:08.863Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:08.871Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:10.371Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:30:10.372Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:10.645Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T15:30:10.646Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T15:30:10.646Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:10.649Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:10.649Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:10.651Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:10.652Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:10.662Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:30:10.662Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:15.164Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T15:30:15.164Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T15:30:15.165Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:30:15.165Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:15.385Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T15:30:15.386Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T15:30:15.386Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:15.390Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:15.391Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:15.393Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:30:15.393Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:15.394Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:15.404Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:30:15.404Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:16.906Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T15:30:16.906Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:30:16.906Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:17.061Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T15:30:17.061Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T15:30:17.061Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T15:30:17.062Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:17.067Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:30:17.067Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:17.068Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:17.070Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:30:17.070Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:17.071Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:17.080Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:30:17.080Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:18.580Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T15:30:18.580Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:30:18.580Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:18.752Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T15:30:18.752Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T15:30:18.753Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T15:30:18.753Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:18.756Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:30:18.756Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:18.757Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:18.759Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:30:18.759Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:18.760Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:18.768Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:30:18.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:20.270Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T15:30:20.270Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:30:20.270Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:20.703Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T15:30:20.703Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T15:30:20.703Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:20.706Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:30:20.706Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:20.707Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:20.709Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:30:20.709Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:20.709Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:20.717Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:22.217Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T15:30:22.218Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:22.673Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T15:30:22.673Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T15:30:22.674Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T15:30:22.674Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:22.677Z] [BOT] ✅ Loaded V2 database: 1047 jobs
[2026-01-25T15:30:22.677Z] [BOT] 💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:22.678Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:22.680Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:30:22.680Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:22.681Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:22.689Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
[2026-01-25T15:30:22.689Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:27.191Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T15:30:27.192Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T15:30:27.192Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T15:30:27.192Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:30:27.674Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T15:30:27.674Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T15:30:27.674Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T15:30:27.674Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory
[2026-01-25T15:30:27.678Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-25T15:30:27.678Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1047
[2026-01-25T15:30:27.680Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:30:27.680Z] [BOT] 💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-25T15:30:27.681Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-25T15:30:27.690Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:30:32.193Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T15:30:32.195Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T15:30:32.290Z] [BOT] 📂 Loaded 8781 existing routing entries
[2026-01-25T15:30:32.402Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8791
[2026-01-25T15:30:32.402Z] [BOT] Timestamp: 2026-01-25T15:30:32.360Z
[2026-01-25T15:30:32.402Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T15:30:32.402Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T15:30:32.403Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T15:30:32.403Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T15:30:32.403Z] [BOT] [STATS] Channel stats saved
[2026-01-25T15:30:34.421Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*