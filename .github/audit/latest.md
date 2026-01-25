# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T15:56:09.604Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T15:55:37.300Z] ========================================
[2026-01-25T15:55:37.302Z] Discord Bot Execution Log
[2026-01-25T15:55:37.302Z] Environment: GitHub Actions
[2026-01-25T15:55:37.302Z] Node Version: v20.20.0
[2026-01-25T15:55:37.302Z] ========================================
[2026-01-25T15:55:37.302Z] Environment Variables Check:
[2026-01-25T15:55:37.303Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T15:55:37.303Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.303Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T15:55:37.303Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T15:55:37.303Z] 
Multi-Channel Configuration:
[2026-01-25T15:55:37.303Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.303Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.303Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.303Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.303Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.304Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.304Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.304Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.304Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T15:55:37.304Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T15:55:37.304Z] 
Data Files Check:
[2026-01-25T15:55:37.305Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T15:55:37.309Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 596921 bytes)
[2026-01-25T15:55:37.309Z] 
========================================
[2026-01-25T15:55:37.309Z] Starting Enhanced Discord Bot...
[2026-01-25T15:55:37.310Z] ========================================
[2026-01-25T15:55:37.835Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T15:55:38.695Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T15:55:38.696Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T15:55:38.696Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T15:55:38.816Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T15:55:38.820Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T15:55:38.820Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T15:55:38.820Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T15:55:38.821Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T15:55:38.822Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T15:55:38.822Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T15:55:38.825Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T15:55:38.826Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T15:55:38.826Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:55:38.826Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:55:38.843Z] [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T15:55:39.249Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T15:55:39.250Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T15:55:39.250Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:55:39.254Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T15:55:39.254Z] [BOT] 💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:55:39.254Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:55:39.257Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:55:39.257Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:55:39.257Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:55:39.269Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:55:40.771Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T15:55:40.771Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:55:40.771Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:55:41.020Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T15:55:41.020Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T15:55:41.020Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T15:55:41.020Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:55:41.024Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:55:41.024Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:55:41.027Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:55:41.027Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:55:41.037Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:55:41.037Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:55:42.537Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T15:55:42.538Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:55:42.538Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:55:43.761Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T15:55:43.761Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T15:55:43.761Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T15:55:43.761Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:55:43.764Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T15:55:43.765Z] [BOT] 💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:55:43.765Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:55:43.767Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:55:43.767Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:55:43.768Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:55:43.775Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:55:43.775Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:55:45.275Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T15:55:45.275Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T15:55:45.276Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:55:45.515Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T15:55:45.515Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T15:55:45.516Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T15:55:45.516Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:55:45.519Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T15:55:45.519Z] [BOT] 💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:55:45.519Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:55:45.521Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:55:45.521Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:55:45.522Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:55:45.531Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:55:45.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:55:50.033Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T15:55:50.034Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T15:55:50.034Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:55:50.034Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:55:50.188Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T15:55:50.188Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T15:55:50.189Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T15:55:50.189Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:55:50.193Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:55:50.193Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:55:50.196Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:55:50.196Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:55:50.197Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:55:50.205Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:55:50.206Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:55:51.706Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T15:55:51.706Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:55:51.706Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:55:51.908Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T15:55:51.909Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:55:51.912Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:55:51.912Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:55:51.915Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:55:51.915Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:55:51.916Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:55:51.924Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:55:51.924Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:55:53.426Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T15:55:53.426Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:55:53.613Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T15:55:53.613Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T15:55:53.614Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:55:53.617Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:55:53.617Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:55:53.620Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:55:53.620Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:55:53.629Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
[2026-01-25T15:55:53.629Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T15:55:55.130Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T15:55:55.130Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T15:55:55.130Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:55:55.291Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T15:55:55.292Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T15:55:55.292Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:55:55.295Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T15:55:55.295Z] [BOT] 💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:55:55.295Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:55:55.298Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:55:55.298Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:55:55.298Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:55:55.305Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:55:56.805Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T15:55:56.805Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:55:57.016Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T15:55:57.016Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T15:55:57.017Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T15:55:57.017Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:55:57.020Z] [BOT] ✅ Loaded V2 database: 1045 jobs
[2026-01-25T15:55:57.020Z] [BOT] 💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:55:57.021Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:55:57.023Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:55:57.023Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:55:57.024Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:55:57.032Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:56:01.535Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T15:56:01.535Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T15:56:01.535Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T15:56:01.535Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T15:56:02.063Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T15:56:02.064Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T15:56:02.064Z] [BOT] 💾 BEFORE MERGE: 1045 jobs in memory
[2026-01-25T15:56:02.067Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-25T15:56:02.067Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1045
[2026-01-25T15:56:02.069Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T15:56:02.069Z] [BOT] 💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-25T15:56:02.070Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-25T15:56:02.077Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T15:56:06.580Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T15:56:06.581Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T15:56:06.674Z] [BOT] 📂 Loaded 8801 existing routing entries
[2026-01-25T15:56:06.783Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8811
   Timestamp: 2026-01-25T15:56:06.743Z
[2026-01-25T15:56:06.784Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T15:56:06.784Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T15:56:06.784Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T15:56:06.785Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T15:56:08.801Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2479) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*