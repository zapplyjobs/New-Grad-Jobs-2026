# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T14:12:13.931Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T14:11:42.274Z] ========================================
[2026-01-25T14:11:42.276Z] Discord Bot Execution Log
[2026-01-25T14:11:42.276Z] Environment: GitHub Actions
[2026-01-25T14:11:42.276Z] Node Version: v20.20.0
[2026-01-25T14:11:42.276Z] ========================================
[2026-01-25T14:11:42.277Z] Environment Variables Check:
[2026-01-25T14:11:42.277Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T14:11:42.277Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.277Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T14:11:42.277Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T14:11:42.277Z] 
Multi-Channel Configuration:
[2026-01-25T14:11:42.277Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.277Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.277Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.277Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.278Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.278Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.278Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.278Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.278Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T14:11:42.278Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T14:11:42.278Z] 
Data Files Check:
[2026-01-25T14:11:42.279Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T14:11:42.284Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 598938 bytes)
[2026-01-25T14:11:42.284Z] 
========================================
[2026-01-25T14:11:42.284Z] Starting Enhanced Discord Bot...
[2026-01-25T14:11:42.284Z] ========================================
[2026-01-25T14:11:42.824Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:11:43.366Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T14:11:43.367Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T14:11:43.367Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T14:11:43.489Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T14:11:43.493Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T14:11:43.493Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T14:11:43.494Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T14:11:43.495Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T14:11:43.495Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T14:11:43.495Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T14:11:43.498Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T14:11:43.499Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T14:11:43.499Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:11:43.500Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:11:43.517Z] [BOT ERROR] (node:2525) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T14:11:43.730Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T14:11:43.730Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T14:11:43.731Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T14:11:43.731Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:11:43.735Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:11:43.735Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:11:43.735Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:11:43.738Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:11:43.738Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:11:43.738Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:11:43.752Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:11:43.752Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:11:45.254Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T14:11:45.254Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:11:45.255Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:11:45.989Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T14:11:45.989Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T14:11:45.989Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T14:11:45.989Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:11:45.993Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:11:45.993Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:11:45.995Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:11:45.995Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:11:45.996Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:11:46.005Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:11:47.505Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:11:47.505Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:11:47.735Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T14:11:47.736Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T14:11:47.736Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:11:47.739Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:11:47.739Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:11:47.741Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:11:47.741Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:11:47.742Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:11:47.750Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:11:49.252Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:11:49.252Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:11:49.616Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T14:11:49.617Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T14:11:49.617Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:11:49.620Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:11:49.621Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:11:49.621Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:11:49.623Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:11:49.623Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:11:49.623Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:11:49.633Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:11:49.633Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:11:54.134Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T14:11:54.134Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T14:11:54.134Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:11:54.135Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:11:54.444Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T14:11:54.444Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T14:11:54.445Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:11:54.449Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:11:54.449Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:11:54.450Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:11:54.452Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:11:54.452Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:11:54.453Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:11:54.462Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:11:55.964Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T14:11:55.965Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:11:55.965Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:11:56.165Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T14:11:56.165Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T14:11:56.165Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T14:11:56.165Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:11:56.171Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:11:56.171Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:11:56.174Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:11:56.174Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:11:56.174Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:11:56.183Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:11:57.685Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T14:11:57.685Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:11:58.060Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T14:11:58.061Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T14:11:58.061Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:11:58.065Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:11:58.065Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:11:58.067Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:11:58.067Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:11:58.068Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:11:58.076Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:11:58.077Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:11:59.577Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T14:11:59.578Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:11:59.578Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:11:59.870Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T14:11:59.871Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T14:11:59.871Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:11:59.874Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:11:59.874Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:11:59.875Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:11:59.877Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:11:59.877Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:11:59.877Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:11:59.886Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:12:01.386Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T14:12:01.386Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:12:01.386Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:12:01.583Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T14:12:01.583Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T14:12:01.583Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T14:12:01.584Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:12:01.587Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:12:01.587Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:12:01.590Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:12:01.590Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:12:01.591Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:12:01.599Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:12:06.102Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T14:12:06.102Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T14:12:06.102Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T14:12:06.102Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:12:06.295Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T14:12:06.296Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T14:12:06.296Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:12:06.299Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:12:06.300Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:12:06.302Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:12:06.302Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:12:06.310Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:12:06.310Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:12:10.812Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T14:12:10.814Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T14:12:10.910Z] [BOT] 📂 Loaded 8731 existing routing entries
[2026-01-25T14:12:11.022Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8741
   Timestamp: 2026-01-25T14:12:10.980Z
[2026-01-25T14:12:11.023Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T14:12:11.023Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T14:12:11.023Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-25T14:12:11.023Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T14:12:11.024Z] [BOT] [STATS] Channel stats saved
[2026-01-25T14:12:13.040Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2525) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*