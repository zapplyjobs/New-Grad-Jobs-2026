# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T05:48:21.258Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T05:47:50.976Z] ========================================
[2026-01-25T05:47:50.978Z] Discord Bot Execution Log
[2026-01-25T05:47:50.978Z] Environment: GitHub Actions
[2026-01-25T05:47:50.978Z] Node Version: v20.20.0
[2026-01-25T05:47:50.979Z] ========================================
[2026-01-25T05:47:50.979Z] Environment Variables Check:
[2026-01-25T05:47:50.979Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T05:47:50.979Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.979Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T05:47:50.979Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T05:47:50.979Z] 
Multi-Channel Configuration:
[2026-01-25T05:47:50.979Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.979Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.979Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.979Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.980Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.980Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.980Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.980Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.980Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T05:47:50.980Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T05:47:50.980Z] 
Data Files Check:
[2026-01-25T05:47:50.981Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T05:47:50.986Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 629905 bytes)
[2026-01-25T05:47:50.986Z] 
========================================
[2026-01-25T05:47:50.986Z] Starting Enhanced Discord Bot...
[2026-01-25T05:47:50.986Z] ========================================
[2026-01-25T05:47:51.512Z] [BOT] ✅ Loaded V2 database: 1104 jobs
[2026-01-25T05:47:52.102Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T05:47:52.102Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T05:47:52.103Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T05:47:52.219Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-25T05:47:52.220Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T05:47:52.224Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T05:47:52.224Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T05:47:52.225Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T05:47:52.225Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T05:47:52.226Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T05:47:52.226Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T05:47:52.229Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T05:47:52.230Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T05:47:52.230Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:47:52.231Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:47:52.247Z] [BOT ERROR] (node:2505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T05:47:52.492Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T05:47:52.493Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T05:47:52.493Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:47:52.497Z] [BOT] ✅ Loaded V2 database: 1104 jobs
[2026-01-25T05:47:52.497Z] [BOT] 💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:47:52.498Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:47:52.500Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:47:52.500Z] [BOT] 💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:47:52.501Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T05:47:52.506Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-25T05:47:52.506Z] [BOT] ✅ Archiving complete: 1 archived, 1103 active
[2026-01-25T05:47:52.516Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
[2026-01-25T05:47:52.516Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:47:54.019Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:47:54.020Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:47:54.273Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T05:47:54.273Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T05:47:54.274Z] [BOT] 💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:47:54.277Z] [BOT] ✅ Loaded V2 database: 1103 jobs
💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:47:54.277Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1103
[2026-01-25T05:47:54.280Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:47:54.280Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:47:54.281Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-25T05:47:54.288Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
[2026-01-25T05:47:54.288Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:47:55.789Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T05:47:55.789Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:47:55.789Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:47:56.038Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T05:47:56.038Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T05:47:56.038Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T05:47:56.038Z] [BOT] 💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:47:56.042Z] [BOT] ✅ Loaded V2 database: 1103 jobs
[2026-01-25T05:47:56.042Z] [BOT] 💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:47:56.042Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1103
[2026-01-25T05:47:56.044Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:47:56.045Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:47:56.045Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-25T05:47:56.053Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
[2026-01-25T05:47:56.053Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:47:57.553Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T05:47:57.553Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:47:57.554Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:47:57.730Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T05:47:57.730Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T05:47:57.731Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:47:57.734Z] [BOT] ✅ Loaded V2 database: 1103 jobs
[2026-01-25T05:47:57.734Z] [BOT] 💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:47:57.735Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1103
[2026-01-25T05:47:57.736Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:47:57.736Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:47:57.737Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-25T05:47:57.746Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
[2026-01-25T05:47:57.746Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:48:02.248Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T05:48:02.248Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T05:48:02.249Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:48:02.249Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:48:02.473Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T05:48:02.473Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T05:48:02.474Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T05:48:02.474Z] [BOT] 💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:48:02.478Z] [BOT] ✅ Loaded V2 database: 1103 jobs
[2026-01-25T05:48:02.478Z] [BOT] 💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:48:02.479Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1103
[2026-01-25T05:48:02.481Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:48:02.481Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:48:02.482Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-25T05:48:02.491Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:48:03.993Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T05:48:03.993Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:48:03.994Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:48:04.177Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T05:48:04.177Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T05:48:04.177Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:48:04.181Z] [BOT] ✅ Loaded V2 database: 1103 jobs
💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:48:04.181Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1103
[2026-01-25T05:48:04.184Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:48:04.184Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:48:04.185Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-25T05:48:04.194Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
[2026-01-25T05:48:04.194Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:48:05.696Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T05:48:05.696Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:48:05.696Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:48:05.885Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T05:48:05.885Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T05:48:05.886Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T05:48:05.886Z] [BOT] 💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:48:05.889Z] [BOT] ✅ Loaded V2 database: 1103 jobs
[2026-01-25T05:48:05.889Z] [BOT] 💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:48:05.890Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1103
[2026-01-25T05:48:05.892Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:48:05.892Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:48:05.893Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-25T05:48:05.900Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
[2026-01-25T05:48:05.900Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:48:07.401Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T05:48:07.401Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:48:07.401Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:48:07.524Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T05:48:07.524Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T05:48:07.525Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T05:48:07.525Z] [BOT] 💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:48:07.528Z] [BOT] ✅ Loaded V2 database: 1103 jobs
💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:48:07.529Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1103
[2026-01-25T05:48:07.531Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:48:07.532Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:48:07.533Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-25T05:48:07.542Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
[2026-01-25T05:48:07.542Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:48:09.042Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T05:48:09.043Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:48:09.043Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:48:09.189Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T05:48:09.189Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T05:48:09.189Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T05:48:09.189Z] [BOT] 💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:48:09.193Z] [BOT] ✅ Loaded V2 database: 1103 jobs
[2026-01-25T05:48:09.193Z] [BOT] 💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:48:09.193Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1103
[2026-01-25T05:48:09.196Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:48:09.196Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-25T05:48:09.205Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
[2026-01-25T05:48:09.205Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:48:13.707Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T05:48:13.707Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T05:48:13.708Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T05:48:13.708Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:48:13.880Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T05:48:13.881Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T05:48:13.881Z] [BOT] 💾 BEFORE MERGE: 1103 jobs in memory
[2026-01-25T05:48:13.884Z] [BOT] ✅ Loaded V2 database: 1103 jobs
💾 DISK STATE: 1103 jobs on disk
[2026-01-25T05:48:13.885Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1103
[2026-01-25T05:48:13.887Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:48:13.887Z] [BOT] 💾 AFTER MERGE: 1103 jobs (merged disk + memory)
[2026-01-25T05:48:13.888Z] [BOT] ✅ No jobs to archive (all 1103 jobs within 7-day window)
[2026-01-25T05:48:13.896Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:48:18.400Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T05:48:18.401Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T05:48:18.493Z] [BOT] 📂 Loaded 8411 existing routing entries
[2026-01-25T05:48:18.611Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T05:48:18.611Z] [BOT] Total entries: 8421
   Timestamp: 2026-01-25T05:48:18.571Z
[2026-01-25T05:48:18.612Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T05:48:18.612Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T05:48:18.612Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T05:48:18.612Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T05:48:18.613Z] [BOT] [STATS] Channel stats saved
[2026-01-25T05:48:20.631Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*