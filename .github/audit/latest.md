# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T07:55:40.770Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T07:55:10.708Z] ========================================
[2026-01-25T07:55:10.709Z] Discord Bot Execution Log
[2026-01-25T07:55:10.709Z] Environment: GitHub Actions
[2026-01-25T07:55:10.710Z] Node Version: v20.20.0
[2026-01-25T07:55:10.710Z] ========================================
[2026-01-25T07:55:10.710Z] Environment Variables Check:
[2026-01-25T07:55:10.710Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T07:55:10.710Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.710Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T07:55:10.710Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T07:55:10.710Z] 
Multi-Channel Configuration:
[2026-01-25T07:55:10.710Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.710Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.711Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.711Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.711Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.711Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.711Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.711Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.711Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T07:55:10.711Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T07:55:10.711Z] 
Data Files Check:
[2026-01-25T07:55:10.712Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T07:55:10.717Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 610984 bytes)
[2026-01-25T07:55:10.717Z] 
========================================
[2026-01-25T07:55:10.717Z] Starting Enhanced Discord Bot...
[2026-01-25T07:55:10.717Z] ========================================
[2026-01-25T07:55:11.240Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:55:11.673Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T07:55:11.674Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T07:55:11.674Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T07:55:11.795Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T07:55:11.799Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T07:55:11.800Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T07:55:11.800Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T07:55:11.801Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T07:55:11.801Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T07:55:11.801Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-25T07:55:11.801Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T07:55:11.805Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T07:55:11.805Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T07:55:11.806Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:55:11.807Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:11.824Z] [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T07:55:12.062Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T07:55:12.062Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T07:55:12.063Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T07:55:12.063Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:12.067Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:55:12.067Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:12.067Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:12.070Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:55:12.070Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:12.071Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:12.082Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:13.585Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:55:13.585Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:13.781Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T07:55:13.782Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T07:55:13.782Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T07:55:13.782Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:13.785Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:55:13.785Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:13.786Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:13.788Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:55:13.788Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:13.789Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:13.796Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:15.298Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T07:55:15.298Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:55:15.299Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:15.495Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T07:55:15.495Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T07:55:15.496Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T07:55:15.496Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:15.499Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:55:15.499Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:15.499Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:15.501Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:55:15.502Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:15.502Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:15.509Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:17.011Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:55:17.011Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:17.158Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T07:55:17.158Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T07:55:17.159Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:17.162Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:55:17.162Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:17.163Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:17.165Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:55:17.165Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:17.165Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:17.175Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T07:55:17.176Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:21.678Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T07:55:21.679Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T07:55:21.679Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:55:21.679Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:21.851Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T07:55:21.851Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T07:55:21.852Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T07:55:21.852Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:21.856Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:21.857Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:21.860Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:55:21.860Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:21.860Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:21.871Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:23.373Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T07:55:23.373Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:55:23.373Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:23.510Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T07:55:23.511Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T07:55:23.511Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:23.514Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:23.514Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:23.517Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:55:23.517Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:23.518Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:23.526Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T07:55:23.527Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:25.028Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T07:55:25.029Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:25.204Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T07:55:25.204Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T07:55:25.204Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T07:55:25.204Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:25.208Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:55:25.208Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:25.208Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:25.211Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:55:25.211Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:25.212Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:25.220Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T07:55:25.220Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:26.722Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T07:55:26.722Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:55:26.722Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:26.850Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T07:55:26.851Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:26.854Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:26.854Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:26.856Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:26.857Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:26.864Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:28.366Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T07:55:28.366Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:55:28.366Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:28.483Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T07:55:28.483Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T07:55:28.484Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T07:55:28.484Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:28.487Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:55:28.487Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:28.488Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:28.490Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:55:28.490Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:28.491Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:28.499Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:33.001Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T07:55:33.002Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T07:55:33.002Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T07:55:33.002Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:55:33.356Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T07:55:33.356Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T07:55:33.357Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T07:55:33.357Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:55:33.360Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:55:33.360Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:55:33.360Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:55:33.362Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:55:33.362Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:55:33.363Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:55:33.370Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T07:55:33.370Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:55:37.872Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T07:55:37.874Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T07:55:37.967Z] [BOT] 📂 Loaded 8501 existing routing entries
[2026-01-25T07:55:38.079Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T07:55:38.080Z] [BOT] Total entries: 8511
   Timestamp: 2026-01-25T07:55:38.039Z
[2026-01-25T07:55:38.080Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-25T07:55:38.080Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-25T07:55:38.080Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T07:55:38.081Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T07:55:38.081Z] [BOT] [STATS] Channel stats saved
[2026-01-25T07:55:40.099Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*