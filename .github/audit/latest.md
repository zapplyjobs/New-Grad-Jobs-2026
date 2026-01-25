# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T09:44:11.169Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T09:43:39.974Z] ========================================
[2026-01-25T09:43:39.975Z] Discord Bot Execution Log
[2026-01-25T09:43:39.976Z] Environment: GitHub Actions
[2026-01-25T09:43:39.976Z] Node Version: v20.20.0
[2026-01-25T09:43:39.976Z] ========================================
[2026-01-25T09:43:39.976Z] Environment Variables Check:
[2026-01-25T09:43:39.976Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T09:43:39.976Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.976Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T09:43:39.976Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T09:43:39.976Z] 
Multi-Channel Configuration:
[2026-01-25T09:43:39.976Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.976Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.977Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.977Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.977Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.977Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.977Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.977Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.977Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T09:43:39.977Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T09:43:39.977Z] 
Data Files Check:
[2026-01-25T09:43:39.978Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T09:43:39.983Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 600415 bytes)
[2026-01-25T09:43:39.983Z] 
========================================
[2026-01-25T09:43:39.983Z] Starting Enhanced Discord Bot...
[2026-01-25T09:43:39.983Z] ========================================
[2026-01-25T09:43:40.507Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:43:41.165Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T09:43:41.165Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T09:43:41.166Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T09:43:41.281Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T09:43:41.284Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T09:43:41.285Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T09:43:41.285Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T09:43:41.286Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T09:43:41.286Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T09:43:41.286Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T09:43:41.290Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T09:43:41.290Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T09:43:41.290Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:43:41.291Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:43:41.308Z] [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T09:43:41.577Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T09:43:41.577Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T09:43:41.578Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T09:43:41.578Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:43:41.581Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:43:41.582Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:43:41.584Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:43:41.584Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:43:41.585Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:43:41.598Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:43:41.598Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:43:43.100Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:43:43.101Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:43:43.399Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T09:43:43.399Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T09:43:43.399Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T09:43:43.399Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:43:43.404Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:43:43.404Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:43:43.404Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:43:43.406Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:43:43.406Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:43:43.407Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:43:43.414Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:43:44.915Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T09:43:44.915Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:43:44.916Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:43:45.076Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T09:43:45.076Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T09:43:45.076Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T09:43:45.076Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:43:45.080Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:43:45.080Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:43:45.082Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:43:45.082Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:43:45.083Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:43:45.090Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:43:46.591Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T09:43:46.592Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:43:46.823Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T09:43:46.823Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T09:43:46.824Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T09:43:46.824Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:43:46.827Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:43:46.828Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:43:46.830Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:43:46.830Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:43:46.830Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:43:46.840Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:43:46.840Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:43:51.342Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T09:43:51.342Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T09:43:51.342Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:43:51.343Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:43:51.591Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T09:43:51.591Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T09:43:51.592Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T09:43:51.592Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:43:51.596Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T09:43:51.596Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:43:51.597Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:43:51.599Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:43:51.599Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:43:51.600Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:43:51.609Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:43:51.609Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:43:53.112Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T09:43:53.112Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:43:53.317Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T09:43:53.317Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T09:43:53.318Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:43:53.321Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:43:53.321Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:43:53.324Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:43:53.324Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:43:53.325Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:43:53.333Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:43:53.333Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:43:54.835Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T09:43:54.835Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:43:55.052Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T09:43:55.052Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T09:43:55.053Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:43:55.056Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:43:55.057Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:43:55.059Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:43:55.060Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:43:55.068Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:43:56.570Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T09:43:56.570Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:43:56.570Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:43:56.765Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T09:43:56.765Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T09:43:56.766Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T09:43:56.766Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:43:56.769Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:43:56.769Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:43:56.771Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:43:56.772Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:43:56.772Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:43:56.779Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
[2026-01-25T09:43:56.780Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T09:43:58.281Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T09:43:58.281Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T09:43:58.281Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:43:58.492Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T09:43:58.492Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T09:43:58.492Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T09:43:58.492Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:43:58.496Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:43:58.496Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:43:58.498Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:43:58.499Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:43:58.499Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:43:58.508Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:44:03.010Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T09:44:03.010Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T09:44:03.010Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T09:44:03.011Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T09:44:03.383Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T09:44:03.383Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T09:44:03.384Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T09:44:03.384Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T09:44:03.387Z] [BOT] ✅ Loaded V2 database: 1052 jobs
💾 DISK STATE: 1052 jobs on disk
[2026-01-25T09:44:03.387Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T09:44:03.389Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T09:44:03.389Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T09:44:03.390Z] [BOT] ✅ No jobs to archive (all 1052 jobs within 7-day window)
[2026-01-25T09:44:03.398Z] [BOT] 💾 Saved posted_jobs.json: 1052 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T09:44:07.901Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T09:44:07.902Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T09:44:07.994Z] [BOT] 📂 Loaded 8571 existing routing entries
[2026-01-25T09:44:08.105Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T09:44:08.105Z] [BOT] Total entries: 8581
   Timestamp: 2026-01-25T09:44:08.063Z
[2026-01-25T09:44:08.106Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T09:44:08.106Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T09:44:08.106Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-25T09:44:08.106Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T09:44:10.122Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*