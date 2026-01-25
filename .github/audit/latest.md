# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T18:14:09.200Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T18:13:37.427Z] ========================================
[2026-01-25T18:13:37.429Z] Discord Bot Execution Log
[2026-01-25T18:13:37.429Z] Environment: GitHub Actions
[2026-01-25T18:13:37.429Z] Node Version: v20.20.0
[2026-01-25T18:13:37.429Z] ========================================
[2026-01-25T18:13:37.429Z] Environment Variables Check:
[2026-01-25T18:13:37.429Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T18:13:37.429Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.429Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T18:13:37.429Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T18:13:37.429Z] 
Multi-Channel Configuration:
[2026-01-25T18:13:37.429Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.430Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.430Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.430Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.430Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.430Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.430Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.430Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.430Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T18:13:37.430Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T18:13:37.430Z] 
Data Files Check:
[2026-01-25T18:13:37.431Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T18:13:37.436Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594003 bytes)
[2026-01-25T18:13:37.436Z] 
========================================
[2026-01-25T18:13:37.436Z] Starting Enhanced Discord Bot...
[2026-01-25T18:13:37.436Z] ========================================
[2026-01-25T18:13:37.971Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:13:38.609Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T18:13:38.610Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T18:13:38.610Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T18:13:38.734Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T18:13:38.738Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T18:13:38.738Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T18:13:38.739Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T18:13:38.740Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T18:13:38.740Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T18:13:38.740Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T18:13:38.744Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T18:13:38.744Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T18:13:38.745Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:13:38.745Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:13:38.762Z] [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T18:13:38.933Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T18:13:38.933Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T18:13:38.934Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T18:13:38.934Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:13:38.938Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:13:38.938Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:13:38.939Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:13:38.941Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:13:38.941Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:13:38.942Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:13:38.954Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:13:40.456Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:13:40.456Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:13:40.615Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T18:13:40.615Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T18:13:40.616Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:13:40.619Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:13:40.619Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:13:40.619Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:13:40.621Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:13:40.621Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:13:40.622Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:13:40.630Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:13:42.132Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T18:13:42.132Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:13:42.132Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:13:43.319Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T18:13:43.319Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T18:13:43.319Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T18:13:43.319Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:13:43.323Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:13:43.323Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:13:43.325Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:13:43.325Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:13:43.326Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:13:43.333Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:13:44.834Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T18:13:44.834Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:13:45.075Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T18:13:45.075Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T18:13:45.075Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:13:45.079Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:13:45.079Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:13:45.081Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:13:45.081Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:13:45.082Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:13:45.091Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:13:49.593Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T18:13:49.593Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T18:13:49.593Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:13:49.594Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:13:49.855Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T18:13:49.855Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T18:13:49.855Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:13:49.860Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T18:13:49.860Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:13:49.860Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:13:49.863Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:13:49.863Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:13:49.864Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:13:49.873Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:13:51.375Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T18:13:51.375Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:13:51.599Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T18:13:51.599Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T18:13:51.600Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:13:51.605Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:13:51.605Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:13:51.608Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:13:51.609Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:13:51.618Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:13:51.618Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:13:53.119Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T18:13:53.120Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:13:53.444Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T18:13:53.445Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T18:13:53.445Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:13:53.448Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:13:53.449Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:13:53.451Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:13:53.451Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:13:53.452Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:13:53.461Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:13:54.963Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T18:13:54.963Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:13:54.963Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:13:55.071Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T18:13:55.072Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T18:13:55.072Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T18:13:55.072Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:13:55.075Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:13:55.076Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:13:55.078Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:13:55.078Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:13:55.078Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:13:55.086Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:13:56.587Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T18:13:56.588Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T18:13:56.588Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:13:56.758Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T18:13:56.758Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T18:13:56.758Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:13:56.762Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:13:56.762Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:13:56.764Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T18:13:56.764Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:13:56.765Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:13:56.773Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T18:14:01.274Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T18:14:01.275Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T18:14:01.275Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T18:14:01.275Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T18:14:01.803Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T18:14:01.803Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T18:14:01.803Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T18:14:01.807Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T18:14:01.807Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T18:14:01.809Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T18:14:01.810Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T18:14:01.817Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T18:14:01.817Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T18:14:06.319Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T18:14:06.321Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T18:14:06.415Z] [BOT] 📂 Loaded 8891 existing routing entries
[2026-01-25T18:14:06.527Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T18:14:06.527Z] [BOT] Total entries: 8901
   Timestamp: 2026-01-25T18:14:06.486Z
[2026-01-25T18:14:06.528Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T18:14:06.528Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T18:14:06.528Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T18:14:06.528Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T18:14:06.528Z] [BOT] [STATS] Channel stats saved
[2026-01-25T18:14:08.544Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2494) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*