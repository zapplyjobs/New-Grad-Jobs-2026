# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T08:47:39.693Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T08:47:08.903Z] ========================================
[2026-01-25T08:47:08.905Z] Discord Bot Execution Log
[2026-01-25T08:47:08.905Z] Environment: GitHub Actions
[2026-01-25T08:47:08.905Z] Node Version: v20.20.0
[2026-01-25T08:47:08.905Z] ========================================
[2026-01-25T08:47:08.905Z] Environment Variables Check:
[2026-01-25T08:47:08.905Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T08:47:08.905Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.905Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T08:47:08.906Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T08:47:08.906Z] 
Multi-Channel Configuration:
[2026-01-25T08:47:08.906Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.906Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.906Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.906Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.906Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.906Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.906Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.906Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.906Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T08:47:08.906Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T08:47:08.907Z] 
Data Files Check:
[2026-01-25T08:47:08.908Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T08:47:08.912Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 608518 bytes)
[2026-01-25T08:47:08.912Z] 
========================================
[2026-01-25T08:47:08.912Z] Starting Enhanced Discord Bot...
[2026-01-25T08:47:08.912Z] ========================================
[2026-01-25T08:47:09.451Z] [BOT] ✅ Loaded V2 database: 1067 jobs
[2026-01-25T08:47:09.843Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T08:47:09.843Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T08:47:09.844Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T08:47:09.961Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T08:47:09.965Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T08:47:09.965Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T08:47:09.966Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T08:47:09.967Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T08:47:09.967Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T08:47:09.967Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T08:47:09.971Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T08:47:09.971Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T08:47:09.971Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:47:09.972Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:09.988Z] [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T08:47:10.261Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T08:47:10.261Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T08:47:10.262Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T08:47:10.262Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:47:10.266Z] [BOT] ✅ Loaded V2 database: 1067 jobs
[2026-01-25T08:47:10.266Z] [BOT] 💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:47:10.266Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:47:10.269Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:10.269Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:47:10.270Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T08:47:10.276Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-25T08:47:10.277Z] [BOT] ✅ Archiving complete: 2 archived, 1065 active
[2026-01-25T08:47:10.284Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:11.785Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T08:47:11.786Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:47:11.786Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:12.131Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T08:47:12.131Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T08:47:12.132Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T08:47:12.132Z] [BOT] 💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:47:12.135Z] [BOT] ✅ Loaded V2 database: 1065 jobs
[2026-01-25T08:47:12.135Z] [BOT] 💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:47:12.136Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:47:12.138Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:12.138Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:47:12.139Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-25T08:47:12.146Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:13.646Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T08:47:13.646Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:47:13.647Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:13.844Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T08:47:13.844Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T08:47:13.845Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T08:47:13.845Z] [BOT] 💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:47:13.848Z] [BOT] ✅ Loaded V2 database: 1065 jobs
[2026-01-25T08:47:13.848Z] [BOT] 💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:47:13.849Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:47:13.851Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:13.851Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:47:13.852Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-25T08:47:13.859Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
[2026-01-25T08:47:13.859Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:15.361Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T08:47:15.361Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:47:15.361Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:15.541Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T08:47:15.541Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T08:47:15.541Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T08:47:15.541Z] [BOT] 💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:47:15.545Z] [BOT] ✅ Loaded V2 database: 1065 jobs
[2026-01-25T08:47:15.545Z] [BOT] 💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:47:15.545Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:47:15.547Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:15.547Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:47:15.548Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-25T08:47:15.557Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:20.059Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T08:47:20.059Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T08:47:20.059Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:47:20.060Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:20.329Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T08:47:20.329Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T08:47:20.329Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T08:47:20.330Z] [BOT] 💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:47:20.334Z] [BOT] ✅ Loaded V2 database: 1065 jobs
[2026-01-25T08:47:20.334Z] [BOT] 💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:47:20.334Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:47:20.337Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:20.337Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:47:20.338Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-25T08:47:20.349Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
[2026-01-25T08:47:20.349Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:21.850Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T08:47:21.850Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:47:21.850Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:22.081Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T08:47:22.081Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T08:47:22.081Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T08:47:22.082Z] [BOT] 💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:47:22.085Z] [BOT] ✅ Loaded V2 database: 1065 jobs
[2026-01-25T08:47:22.085Z] [BOT] 💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:47:22.085Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:47:22.087Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:22.088Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:47:22.089Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-25T08:47:22.099Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
[2026-01-25T08:47:22.099Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:23.600Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T08:47:23.600Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:47:23.601Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:24.028Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T08:47:24.028Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T08:47:24.028Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T08:47:24.029Z] [BOT] 💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:47:24.032Z] [BOT] ✅ Loaded V2 database: 1065 jobs
💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:47:24.032Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:47:24.035Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:24.035Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:47:24.036Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-25T08:47:24.044Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:25.546Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T08:47:25.546Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:47:25.547Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:25.773Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T08:47:25.773Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T08:47:25.773Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T08:47:25.774Z] [BOT] 💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:47:25.777Z] [BOT] ✅ Loaded V2 database: 1065 jobs
[2026-01-25T08:47:25.777Z] [BOT] 💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:47:25.777Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:47:25.779Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:25.780Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:47:25.780Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-25T08:47:25.788Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:27.288Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T08:47:27.288Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:47:27.289Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:27.482Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T08:47:27.482Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T08:47:27.482Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T08:47:27.483Z] [BOT] 💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:47:27.486Z] [BOT] ✅ Loaded V2 database: 1065 jobs
💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:47:27.486Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:47:27.489Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:27.489Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:47:27.489Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-25T08:47:27.498Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:31.999Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T08:47:31.999Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T08:47:31.999Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T08:47:32.000Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:47:32.366Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T08:47:32.366Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1065 jobs in memory
[2026-01-25T08:47:32.370Z] [BOT] ✅ Loaded V2 database: 1065 jobs
💾 DISK STATE: 1065 jobs on disk
[2026-01-25T08:47:32.370Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1065
[2026-01-25T08:47:32.372Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:47:32.372Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-25T08:47:32.373Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-25T08:47:32.381Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:47:36.884Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T08:47:36.886Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T08:47:36.980Z] [BOT] 📂 Loaded 8531 existing routing entries
[2026-01-25T08:47:37.090Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8541
[2026-01-25T08:47:37.090Z] [BOT] Timestamp: 2026-01-25T08:47:37.049Z
[2026-01-25T08:47:37.091Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T08:47:37.091Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T08:47:37.091Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T08:47:37.091Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T08:47:37.091Z] [BOT] [STATS] Channel stats saved
[2026-01-25T08:47:39.110Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*