# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T08:31:28.013Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T08:30:57.366Z] ========================================
[2026-01-25T08:30:57.367Z] Discord Bot Execution Log
[2026-01-25T08:30:57.367Z] Environment: GitHub Actions
[2026-01-25T08:30:57.367Z] Node Version: v20.20.0
[2026-01-25T08:30:57.367Z] ========================================
[2026-01-25T08:30:57.368Z] Environment Variables Check:
[2026-01-25T08:30:57.368Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T08:30:57.368Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T08:30:57.368Z] 
Multi-Channel Configuration:
[2026-01-25T08:30:57.368Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T08:30:57.368Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T08:30:57.369Z] 
Data Files Check:
[2026-01-25T08:30:57.370Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T08:30:57.374Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 610984 bytes)
[2026-01-25T08:30:57.374Z] 
========================================
[2026-01-25T08:30:57.374Z] Starting Enhanced Discord Bot...
[2026-01-25T08:30:57.374Z] ========================================
[2026-01-25T08:30:57.819Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T08:30:58.327Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T08:30:58.327Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T08:30:58.328Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T08:30:58.480Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T08:30:58.483Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T08:30:58.484Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T08:30:58.484Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T08:30:58.485Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T08:30:58.485Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T08:30:58.485Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T08:30:58.488Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T08:30:58.489Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T08:30:58.489Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:30:58.490Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:30:58.506Z] [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T08:30:58.725Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T08:30:58.726Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T08:30:58.726Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T08:30:58.727Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T08:30:58.731Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T08:30:58.731Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T08:30:58.733Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:30:58.733Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T08:30:58.734Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T08:30:58.739Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-25T08:30:58.739Z] [BOT] ✅ Archiving complete: 5 archived, 1067 active
[2026-01-25T08:30:58.749Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
[2026-01-25T08:30:58.749Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:00.252Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T08:31:00.252Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:31:00.252Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:31:00.517Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T08:31:00.518Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T08:31:00.518Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T08:31:00.518Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:31:00.522Z] [BOT] ✅ Loaded V2 database: 1067 jobs
💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:31:00.522Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:31:00.524Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:31:00.525Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-25T08:31:00.532Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:02.032Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T08:31:02.033Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:31:02.033Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:31:02.191Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T08:31:02.191Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T08:31:02.192Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T08:31:02.192Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:31:02.195Z] [BOT] ✅ Loaded V2 database: 1067 jobs
💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:31:02.196Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:31:02.198Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:31:02.198Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:31:02.198Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-25T08:31:02.206Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:03.706Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T08:31:03.706Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T08:31:03.707Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:31:03.896Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T08:31:03.896Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T08:31:03.897Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T08:31:03.897Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:31:03.900Z] [BOT] ✅ Loaded V2 database: 1067 jobs
[2026-01-25T08:31:03.900Z] [BOT] 💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:31:03.901Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:31:03.903Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:31:03.903Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:31:03.903Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-25T08:31:03.912Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:08.414Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T08:31:08.415Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T08:31:08.415Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:31:08.415Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:31:08.733Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T08:31:08.734Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T08:31:08.734Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:31:08.739Z] [BOT] ✅ Loaded V2 database: 1067 jobs
💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:31:08.739Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:31:08.741Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:31:08.742Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:31:08.742Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-25T08:31:08.751Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:10.253Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T08:31:10.253Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:31:10.253Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:31:10.380Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T08:31:10.381Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T08:31:10.381Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:31:10.384Z] [BOT] ✅ Loaded V2 database: 1067 jobs
💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:31:10.385Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:31:10.387Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:31:10.387Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:31:10.388Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-25T08:31:10.396Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:11.898Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T08:31:11.898Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:31:11.898Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:31:12.113Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T08:31:12.114Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T08:31:12.114Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T08:31:12.114Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:31:12.118Z] [BOT] ✅ Loaded V2 database: 1067 jobs
💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:31:12.118Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:31:12.120Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:31:12.120Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:31:12.121Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-25T08:31:12.129Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:13.631Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T08:31:13.631Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:31:13.632Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:31:13.792Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T08:31:13.792Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T08:31:13.793Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:31:13.797Z] [BOT] ✅ Loaded V2 database: 1067 jobs
[2026-01-25T08:31:13.797Z] [BOT] 💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:31:13.797Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:31:13.799Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:31:13.799Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:31:13.800Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-25T08:31:13.807Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:15.309Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T08:31:15.309Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T08:31:15.310Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:31:15.712Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T08:31:15.712Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T08:31:15.713Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T08:31:15.713Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:31:15.717Z] [BOT] ✅ Loaded V2 database: 1067 jobs
💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:31:15.717Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:31:15.719Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:31:15.719Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:31:15.720Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-25T08:31:15.727Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:20.230Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T08:31:20.231Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T08:31:20.231Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T08:31:20.231Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T08:31:20.405Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T08:31:20.405Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T08:31:20.405Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T08:31:20.405Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory
[2026-01-25T08:31:20.409Z] [BOT] ✅ Loaded V2 database: 1067 jobs
💾 DISK STATE: 1067 jobs on disk
[2026-01-25T08:31:20.409Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1067
[2026-01-25T08:31:20.411Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T08:31:20.411Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-25T08:31:20.412Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-25T08:31:20.419Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
[2026-01-25T08:31:20.419Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T08:31:24.922Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T08:31:24.923Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T08:31:25.025Z] [BOT] 📂 Loaded 8521 existing routing entries
[2026-01-25T08:31:25.125Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8531
[2026-01-25T08:31:25.125Z] [BOT] Timestamp: 2026-01-25T08:31:25.091Z
[2026-01-25T08:31:25.125Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T08:31:25.125Z] [BOT] Total attempts: 10
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
[2026-01-25T08:31:25.126Z] [BOT] [STATS] Channel stats saved
[2026-01-25T08:31:27.138Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*