# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T11:41:48.614Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T11:41:18.449Z] ========================================
[2026-01-25T11:41:18.451Z] Discord Bot Execution Log
[2026-01-25T11:41:18.451Z] Environment: GitHub Actions
[2026-01-25T11:41:18.451Z] Node Version: v20.20.0
[2026-01-25T11:41:18.451Z] ========================================
[2026-01-25T11:41:18.451Z] Environment Variables Check:
[2026-01-25T11:41:18.451Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T11:41:18.452Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.452Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T11:41:18.452Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T11:41:18.452Z] 
Multi-Channel Configuration:
[2026-01-25T11:41:18.452Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.452Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.452Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.452Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.452Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.452Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.452Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.452Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.453Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T11:41:18.453Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T11:41:18.453Z] 
Data Files Check:
[2026-01-25T11:41:18.454Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T11:41:18.458Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T11:41:18.458Z] 
========================================
[2026-01-25T11:41:18.458Z] Starting Enhanced Discord Bot...
[2026-01-25T11:41:18.459Z] ========================================
[2026-01-25T11:41:18.973Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:41:19.365Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T11:41:19.365Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T11:41:19.366Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T11:41:19.482Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-25T11:41:19.484Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T11:41:19.488Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T11:41:19.488Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T11:41:19.488Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T11:41:19.489Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T11:41:19.489Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T11:41:19.490Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T11:41:19.493Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T11:41:19.493Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T11:41:19.494Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:41:19.494Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:19.510Z] [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T11:41:19.679Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T11:41:19.679Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T11:41:19.680Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T11:41:19.680Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:19.684Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:41:19.684Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:19.684Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:19.687Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:41:19.687Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:19.687Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:19.699Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:21.202Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:41:21.202Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:21.437Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T11:41:21.438Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T11:41:21.438Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T11:41:21.438Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:21.441Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:41:21.441Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:21.442Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:21.444Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:41:21.444Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:21.444Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:21.453Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:41:21.453Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:22.955Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T11:41:22.955Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:41:22.955Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:23.223Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T11:41:23.223Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T11:41:23.224Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:23.227Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:41:23.227Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:23.227Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:23.229Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:41:23.229Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:23.230Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:23.237Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:24.739Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T11:41:24.739Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T11:41:24.739Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:24.878Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T11:41:24.879Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T11:41:24.879Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:24.882Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:24.883Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:24.884Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:41:24.885Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:24.885Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:24.894Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:29.397Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T11:41:29.398Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T11:41:29.398Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:41:29.398Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:29.710Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T11:41:29.710Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T11:41:29.711Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T11:41:29.711Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:29.715Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:41:29.715Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:29.716Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:29.718Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:41:29.718Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:29.719Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:29.728Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:41:29.728Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:31.230Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T11:41:31.230Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:41:31.230Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:31.332Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T11:41:31.333Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T11:41:31.333Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T11:41:31.333Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:31.336Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:31.337Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:31.339Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:41:31.339Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:31.340Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:31.348Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:32.850Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T11:41:32.850Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:33.004Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T11:41:33.004Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T11:41:33.005Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:33.008Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:33.009Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:33.011Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:33.011Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:33.020Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:34.521Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T11:41:34.521Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:41:34.521Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:34.750Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T11:41:34.751Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T11:41:34.751Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:34.754Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:34.754Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:34.756Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:41:34.756Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:34.757Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:34.764Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:36.265Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T11:41:36.265Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T11:41:36.265Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:36.532Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T11:41:36.533Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T11:41:36.533Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T11:41:36.533Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:36.537Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:36.537Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:36.539Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:41:36.539Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:36.540Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:36.548Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:41:36.548Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:41.050Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T11:41:41.051Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T11:41:41.051Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T11:41:41.262Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T11:41:41.263Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T11:41:41.263Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T11:41:41.266Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T11:41:41.266Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T11:41:41.266Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T11:41:41.268Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T11:41:41.268Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T11:41:41.269Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T11:41:41.277Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T11:41:41.277Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T11:41:45.780Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T11:41:45.781Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T11:41:45.872Z] [BOT] 📂 Loaded 8651 existing routing entries
[2026-01-25T11:41:45.981Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T11:41:45.982Z] [BOT] Total entries: 8661
   Timestamp: 2026-01-25T11:41:45.940Z
[2026-01-25T11:41:45.982Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T11:41:45.982Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T11:41:45.983Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T11:41:45.983Z] [BOT] [STATS] Channel stats saved
[2026-01-25T11:41:48.001Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*