# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T10:12:34.251Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T10:12:02.549Z] ========================================
[2026-01-25T10:12:02.551Z] Discord Bot Execution Log
[2026-01-25T10:12:02.551Z] Environment: GitHub Actions
[2026-01-25T10:12:02.551Z] Node Version: v20.20.0
[2026-01-25T10:12:02.551Z] ========================================
[2026-01-25T10:12:02.551Z] Environment Variables Check:
[2026-01-25T10:12:02.551Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T10:12:02.551Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.551Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T10:12:02.552Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T10:12:02.552Z] 
Multi-Channel Configuration:
[2026-01-25T10:12:02.552Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.552Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.552Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.552Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.552Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.552Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.552Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.552Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.552Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T10:12:02.552Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T10:12:02.553Z] 
Data Files Check:
[2026-01-25T10:12:02.554Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T10:12:02.558Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 600415 bytes)
[2026-01-25T10:12:02.558Z] 
========================================
[2026-01-25T10:12:02.558Z] Starting Enhanced Discord Bot...
[2026-01-25T10:12:02.558Z] ========================================
[2026-01-25T10:12:03.074Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T10:12:04.139Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T10:12:04.139Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T10:12:04.140Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T10:12:04.260Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T10:12:04.264Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T10:12:04.265Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T10:12:04.265Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T10:12:04.266Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T10:12:04.267Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T10:12:04.267Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T10:12:04.271Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T10:12:04.272Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T10:12:04.272Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:12:04.273Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:04.296Z] [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T10:12:04.518Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T10:12:04.518Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T10:12:04.519Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T10:12:04.519Z] [BOT] 💾 BEFORE MERGE: 1052 jobs in memory
[2026-01-25T10:12:04.522Z] [BOT] ✅ Loaded V2 database: 1052 jobs
[2026-01-25T10:12:04.523Z] [BOT] 💾 DISK STATE: 1052 jobs on disk
[2026-01-25T10:12:04.523Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1052
[2026-01-25T10:12:04.525Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:12:04.525Z] [BOT] 💾 AFTER MERGE: 1052 jobs (merged disk + memory)
[2026-01-25T10:12:04.526Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T10:12:04.531Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-25T10:12:04.531Z] [BOT] ✅ Archiving complete: 2 archived, 1050 active
[2026-01-25T10:12:04.542Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T10:12:04.542Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:06.045Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T10:12:06.045Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:12:06.046Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:06.412Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T10:12:06.412Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T10:12:06.413Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:12:06.416Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:12:06.416Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:12:06.418Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:12:06.418Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:12:06.419Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:12:06.426Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:07.928Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:12:07.928Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:08.121Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T10:12:08.122Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T10:12:08.122Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T10:12:08.122Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:12:08.125Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:12:08.126Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:12:08.128Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:12:08.128Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:12:08.129Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:12:08.136Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:09.636Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T10:12:09.637Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:10.024Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T10:12:10.025Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T10:12:10.025Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:12:10.028Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:12:10.028Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:12:10.030Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:12:10.031Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:12:10.040Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:14.542Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T10:12:14.542Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T10:12:14.542Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:12:14.543Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:14.806Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T10:12:14.807Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T10:12:14.807Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:12:14.811Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:12:14.811Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:12:14.812Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:12:14.814Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:12:14.814Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:12:14.815Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:12:14.824Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T10:12:14.824Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:16.327Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T10:12:16.327Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:12:16.327Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:16.540Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T10:12:16.540Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T10:12:16.541Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:12:16.544Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:12:16.544Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:12:16.546Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:12:16.547Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:12:16.547Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:12:16.556Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:18.058Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T10:12:18.058Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:12:18.059Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:18.241Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T10:12:18.241Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T10:12:18.242Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T10:12:18.242Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:12:18.245Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:12:18.245Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:12:18.245Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:12:18.248Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:12:18.248Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:12:18.248Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:12:18.257Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T10:12:18.257Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:19.758Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T10:12:19.759Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:12:19.759Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:20.050Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T10:12:20.051Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T10:12:20.051Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:12:20.054Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:12:20.054Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:12:20.057Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:12:20.057Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:12:20.057Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:12:20.064Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:21.566Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T10:12:21.566Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T10:12:21.567Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:21.764Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T10:12:21.764Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:12:21.768Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T10:12:21.768Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:12:21.768Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:12:21.771Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:12:21.771Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:12:21.771Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:12:21.779Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:26.282Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T10:12:26.282Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T10:12:26.282Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T10:12:26.283Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T10:12:26.642Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T10:12:26.642Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T10:12:26.642Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T10:12:26.642Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T10:12:26.646Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T10:12:26.646Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T10:12:26.648Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T10:12:26.648Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T10:12:26.648Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T10:12:26.656Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T10:12:31.158Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T10:12:31.160Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T10:12:31.254Z] [BOT] 📂 Loaded 8591 existing routing entries
[2026-01-25T10:12:31.364Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T10:12:31.364Z] [BOT] Total entries: 8601
   Timestamp: 2026-01-25T10:12:31.323Z
[2026-01-25T10:12:31.365Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-25T10:12:31.365Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-25T10:12:31.365Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T10:12:31.366Z] [BOT] [STATS] Channel stats saved
[2026-01-25T10:12:33.383Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2537) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*