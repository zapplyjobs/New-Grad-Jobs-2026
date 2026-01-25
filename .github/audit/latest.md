# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T17:12:19.487Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T17:11:47.419Z] ========================================
[2026-01-25T17:11:47.421Z] Discord Bot Execution Log
[2026-01-25T17:11:47.421Z] Environment: GitHub Actions
[2026-01-25T17:11:47.421Z] Node Version: v20.20.0
[2026-01-25T17:11:47.421Z] ========================================
[2026-01-25T17:11:47.421Z] Environment Variables Check:
[2026-01-25T17:11:47.421Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T17:11:47.421Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.421Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T17:11:47.422Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T17:11:47.422Z] 
Multi-Channel Configuration:
[2026-01-25T17:11:47.422Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.422Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.422Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.422Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.422Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.422Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.422Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.422Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.422Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T17:11:47.422Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T17:11:47.422Z] 
Data Files Check:
[2026-01-25T17:11:47.424Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T17:11:47.428Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 595461 bytes)
[2026-01-25T17:11:47.428Z] 
========================================
[2026-01-25T17:11:47.428Z] Starting Enhanced Discord Bot...
[2026-01-25T17:11:47.428Z] ========================================
[2026-01-25T17:11:48.005Z] [BOT] ✅ Loaded V2 database: 1042 jobs
[2026-01-25T17:11:48.882Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T17:11:48.882Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T17:11:48.882Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T17:11:49.022Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T17:11:49.026Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T17:11:49.026Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T17:11:49.026Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T17:11:49.027Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T17:11:49.028Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T17:11:49.028Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T17:11:49.031Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T17:11:49.032Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T17:11:49.032Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:11:49.033Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:11:49.050Z] [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T17:11:49.268Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T17:11:49.268Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T17:11:49.269Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T17:11:49.269Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory
[2026-01-25T17:11:49.273Z] [BOT] ✅ Loaded V2 database: 1042 jobs
[2026-01-25T17:11:49.273Z] [BOT] 💾 DISK STATE: 1042 jobs on disk
[2026-01-25T17:11:49.274Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1042
[2026-01-25T17:11:49.276Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:11:49.276Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-25T17:11:49.277Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T17:11:49.279Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-25T17:11:49.280Z] [BOT] ✅ Archiving complete: 3 archived, 1039 active
[2026-01-25T17:11:49.287Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T17:11:49.287Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T17:11:50.789Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:11:50.790Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:11:51.009Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T17:11:51.009Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T17:11:51.010Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T17:11:51.010Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:11:51.013Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:11:51.013Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:11:51.013Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:11:51.015Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:11:51.015Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:11:51.016Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:11:51.024Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:11:52.525Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:11:52.525Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:11:52.929Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T17:11:52.929Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T17:11:52.930Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T17:11:52.930Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:11:52.933Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:11:52.934Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:11:52.936Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:11:52.936Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:11:52.937Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:11:52.944Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:11:54.446Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T17:11:54.446Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T17:11:54.447Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:11:54.750Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T17:11:54.751Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T17:11:54.751Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:11:54.754Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:11:54.755Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:11:54.757Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:11:54.757Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:11:54.757Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:11:54.768Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:11:59.268Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T17:11:59.269Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T17:11:59.269Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:11:59.269Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:11:59.474Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T17:11:59.474Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:11:59.479Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:11:59.479Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:11:59.482Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:11:59.482Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:11:59.483Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:11:59.492Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:12:00.994Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T17:12:00.994Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:12:00.994Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:12:01.194Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T17:12:01.194Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T17:12:01.195Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T17:12:01.195Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:12:01.198Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:12:01.198Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:12:01.198Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:12:01.201Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:12:01.201Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:12:01.202Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:12:01.211Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:12:02.712Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T17:12:02.712Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:12:02.712Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:12:02.888Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T17:12:02.889Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T17:12:02.889Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:12:02.893Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:12:02.893Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:12:02.893Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:12:02.896Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:12:02.896Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:12:02.897Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:12:02.905Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:12:04.407Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T17:12:04.407Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:12:04.408Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:12:04.792Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T17:12:04.792Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T17:12:04.792Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:12:04.796Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:12:04.796Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:12:04.798Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:12:04.799Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:12:04.806Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:12:06.307Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T17:12:06.308Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T17:12:06.308Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:12:07.081Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T17:12:07.082Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T17:12:07.082Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:12:07.086Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:12:07.086Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:12:07.089Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:12:07.090Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:12:07.099Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:12:11.600Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T17:12:11.600Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T17:12:11.601Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T17:12:11.601Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T17:12:11.897Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T17:12:11.898Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T17:12:11.898Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T17:12:11.898Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T17:12:11.901Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T17:12:11.901Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T17:12:11.902Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T17:12:11.903Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T17:12:11.904Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T17:12:11.904Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T17:12:11.916Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T17:12:16.419Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T17:12:16.421Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T17:12:16.518Z] [BOT] 📂 Loaded 8851 existing routing entries
[2026-01-25T17:12:16.629Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T17:12:16.630Z] [BOT] Total entries: 8861
   Timestamp: 2026-01-25T17:12:16.588Z
[2026-01-25T17:12:16.630Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T17:12:16.630Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T17:12:16.630Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-25T17:12:16.630Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T17:12:16.631Z] [BOT] [STATS] Channel stats saved
[2026-01-25T17:12:18.647Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*