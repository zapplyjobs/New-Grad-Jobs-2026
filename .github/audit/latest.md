# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T16:31:21.825Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T16:30:49.461Z] ========================================
[2026-01-25T16:30:49.463Z] Discord Bot Execution Log
[2026-01-25T16:30:49.463Z] Environment: GitHub Actions
[2026-01-25T16:30:49.463Z] Node Version: v20.20.0
[2026-01-25T16:30:49.463Z] ========================================
[2026-01-25T16:30:49.463Z] Environment Variables Check:
[2026-01-25T16:30:49.463Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T16:30:49.463Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.463Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T16:30:49.463Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T16:30:49.463Z] 
Multi-Channel Configuration:
[2026-01-25T16:30:49.463Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.463Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.463Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.463Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.464Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.464Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.464Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.464Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.464Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T16:30:49.464Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T16:30:49.464Z] 
Data Files Check:
[2026-01-25T16:30:49.465Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T16:30:49.470Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 596449 bytes)
[2026-01-25T16:30:49.470Z] 
========================================
[2026-01-25T16:30:49.470Z] Starting Enhanced Discord Bot...
[2026-01-25T16:30:49.470Z] ========================================
[2026-01-25T16:30:49.921Z] [BOT] ✅ Loaded V2 database: 1044 jobs
[2026-01-25T16:30:50.578Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T16:30:50.578Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T16:30:50.579Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T16:30:50.735Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T16:30:50.738Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T16:30:50.739Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T16:30:50.739Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T16:30:50.740Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-25T16:30:50.740Z] [BOT] 📍 2 jobs with multiple locations:
[2026-01-25T16:30:50.740Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T16:30:50.743Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T16:30:50.744Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
   Category: TECH (matched: "software")
[2026-01-25T16:30:50.744Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:30:50.745Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:30:50.760Z] [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T16:30:51.177Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T16:30:51.177Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T16:30:51.178Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T16:30:51.178Z] [BOT] 💾 BEFORE MERGE: 1044 jobs in memory
[2026-01-25T16:30:51.182Z] [BOT] ✅ Loaded V2 database: 1044 jobs
[2026-01-25T16:30:51.182Z] [BOT] 💾 DISK STATE: 1044 jobs on disk
[2026-01-25T16:30:51.182Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1044
[2026-01-25T16:30:51.184Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:30:51.185Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-25T16:30:51.186Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T16:30:51.189Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
✅ Archiving complete: 1 archived, 1043 active
[2026-01-25T16:30:51.198Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
[2026-01-25T16:30:51.198Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:30:52.701Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T16:30:52.701Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:30:52.702Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:30:52.906Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T16:30:52.907Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T16:30:52.907Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T16:30:52.907Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:30:52.911Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:30:52.911Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:30:52.913Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:30:52.913Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:30:52.913Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:30:52.921Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:30:54.422Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T16:30:54.422Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:30:54.422Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:30:55.081Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T16:30:55.081Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T16:30:55.082Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:30:55.085Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:30:55.085Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:30:55.085Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:30:55.087Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:30:55.088Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:30:55.096Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:30:56.597Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:30:56.597Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:30:56.935Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T16:30:56.936Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T16:30:56.936Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:30:56.939Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:30:56.939Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:30:56.940Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:30:56.942Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:30:56.942Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:30:56.942Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:30:56.952Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:31:01.452Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T16:31:01.453Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T16:31:01.453Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:31:01.454Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:31:01.843Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T16:31:01.843Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T16:31:01.843Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T16:31:01.844Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:31:01.848Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:31:01.849Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:31:01.851Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:31:01.851Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:31:01.852Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:31:01.861Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:31:03.363Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T16:31:03.363Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:31:03.363Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:31:03.775Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T16:31:03.775Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T16:31:03.775Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T16:31:03.775Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:31:03.779Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:31:03.779Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:31:03.781Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:31:03.781Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:31:03.782Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:31:03.790Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:31:05.291Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:31:05.292Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:31:05.565Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T16:31:05.565Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T16:31:05.566Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:31:05.569Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:31:05.569Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:31:05.570Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:31:05.572Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:31:05.572Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:31:05.573Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:31:05.581Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
[2026-01-25T16:31:05.581Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:31:07.083Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T16:31:07.083Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:31:07.083Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:31:07.335Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T16:31:07.335Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T16:31:07.336Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T16:31:07.336Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:31:07.340Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:31:07.340Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:31:07.340Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:31:07.342Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:31:07.342Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:31:07.343Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:31:07.350Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:31:08.852Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:31:08.852Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:31:09.079Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T16:31:09.080Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T16:31:09.080Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T16:31:09.080Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:31:09.086Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:31:09.086Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:31:09.086Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:31:09.089Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:31:09.089Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:31:09.097Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:31:13.600Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T16:31:13.600Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T16:31:13.600Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T16:31:13.600Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:31:13.952Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T16:31:13.953Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T16:31:13.953Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T16:31:13.953Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:31:13.956Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:31:13.957Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:31:13.957Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:31:13.959Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:31:13.959Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:31:13.959Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:31:13.967Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:31:18.469Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T16:31:18.470Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T16:31:18.574Z] [BOT] 📂 Loaded 8821 existing routing entries
[2026-01-25T16:31:18.678Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8831
[2026-01-25T16:31:18.679Z] [BOT] Timestamp: 2026-01-25T16:31:18.643Z
[2026-01-25T16:31:18.679Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T16:31:18.679Z] [BOT] Successful: 10
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
[2026-01-25T16:31:20.692Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*