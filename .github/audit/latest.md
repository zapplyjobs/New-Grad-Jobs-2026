# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T07:31:02.446Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T07:30:32.268Z] ========================================
[2026-01-25T07:30:32.270Z] Discord Bot Execution Log
[2026-01-25T07:30:32.270Z] Environment: GitHub Actions
[2026-01-25T07:30:32.270Z] Node Version: v20.20.0
[2026-01-25T07:30:32.270Z] ========================================
[2026-01-25T07:30:32.270Z] Environment Variables Check:
[2026-01-25T07:30:32.270Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T07:30:32.270Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.271Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T07:30:32.271Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T07:30:32.271Z] 
Multi-Channel Configuration:
[2026-01-25T07:30:32.271Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.271Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.271Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.271Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.271Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.271Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.271Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.271Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.271Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T07:30:32.272Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T07:30:32.272Z] 
Data Files Check:
[2026-01-25T07:30:32.273Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T07:30:32.277Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 618635 bytes)
[2026-01-25T07:30:32.278Z] 
========================================
[2026-01-25T07:30:32.278Z] Starting Enhanced Discord Bot...
[2026-01-25T07:30:32.278Z] ========================================
[2026-01-25T07:30:32.805Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:30:33.128Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T07:30:33.129Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T07:30:33.129Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T07:30:33.247Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T07:30:33.251Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T07:30:33.251Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T07:30:33.252Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T07:30:33.253Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T07:30:33.253Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T07:30:33.253Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T07:30:33.253Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T07:30:33.257Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T07:30:33.257Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T07:30:33.257Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:30:33.258Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:33.274Z] [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T07:30:33.601Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T07:30:33.601Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T07:30:33.601Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T07:30:33.602Z] [BOT] 💾 BEFORE MERGE: 1086 jobs in memory
[2026-01-25T07:30:33.606Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-25T07:30:33.606Z] [BOT] 💾 DISK STATE: 1086 jobs on disk
[2026-01-25T07:30:33.606Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1086
[2026-01-25T07:30:33.608Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:30:33.608Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-25T07:30:33.609Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T07:30:33.615Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-25T07:30:33.615Z] [BOT] ✅ Archiving complete: 6 archived, 1080 active
[2026-01-25T07:30:33.626Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
[2026-01-25T07:30:33.626Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:35.129Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:30:35.129Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:35.240Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T07:30:35.241Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T07:30:35.241Z] [BOT] 💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:30:35.244Z] [BOT] ✅ Loaded V2 database: 1080 jobs
[2026-01-25T07:30:35.244Z] [BOT] 💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:30:35.245Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:30:35.247Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:30:35.247Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-25T07:30:35.255Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:36.755Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:30:36.756Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:36.902Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T07:30:36.903Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T07:30:36.903Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:30:36.907Z] [BOT] ✅ Loaded V2 database: 1080 jobs
[2026-01-25T07:30:36.907Z] [BOT] 💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:30:36.907Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:30:36.909Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:30:36.909Z] [BOT] 💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:30:36.910Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-25T07:30:36.918Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
[2026-01-25T07:30:36.918Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:38.420Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T07:30:38.420Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:30:38.420Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:38.877Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T07:30:38.877Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T07:30:38.877Z] [BOT] 💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:30:38.881Z] [BOT] ✅ Loaded V2 database: 1080 jobs
💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:30:38.881Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:30:38.883Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:30:38.884Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-25T07:30:38.894Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:43.395Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T07:30:43.396Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T07:30:43.396Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:30:43.396Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:43.684Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T07:30:43.685Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T07:30:43.685Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T07:30:43.685Z] [BOT] 💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:30:43.690Z] [BOT] ✅ Loaded V2 database: 1080 jobs
[2026-01-25T07:30:43.690Z] [BOT] 💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:30:43.690Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:30:43.693Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:30:43.693Z] [BOT] 💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:30:43.694Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-25T07:30:43.704Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:45.205Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T07:30:45.205Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:30:45.205Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:45.378Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T07:30:45.378Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T07:30:45.378Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T07:30:45.379Z] [BOT] 💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:30:45.382Z] [BOT] ✅ Loaded V2 database: 1080 jobs
[2026-01-25T07:30:45.382Z] [BOT] 💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:30:45.382Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:30:45.384Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:30:45.385Z] [BOT] 💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:30:45.385Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-25T07:30:45.394Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:46.895Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T07:30:46.895Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:30:46.895Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:47.117Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T07:30:47.117Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T07:30:47.117Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T07:30:47.118Z] [BOT] 💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:30:47.121Z] [BOT] ✅ Loaded V2 database: 1080 jobs
[2026-01-25T07:30:47.121Z] [BOT] 💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:30:47.121Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:30:47.124Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:30:47.124Z] [BOT] 💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:30:47.125Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-25T07:30:47.133Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
[2026-01-25T07:30:47.133Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:48.635Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T07:30:48.636Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:30:48.636Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:48.807Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T07:30:48.808Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T07:30:48.808Z] [BOT] 💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:30:48.811Z] [BOT] ✅ Loaded V2 database: 1080 jobs
[2026-01-25T07:30:48.811Z] [BOT] 💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:30:48.812Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:30:48.814Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:30:48.815Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-25T07:30:48.822Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
[2026-01-25T07:30:48.822Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:50.324Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T07:30:50.324Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:30:50.324Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:50.479Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T07:30:50.480Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:30:50.483Z] [BOT] ✅ Loaded V2 database: 1080 jobs
💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:30:50.484Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:30:50.486Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:30:50.486Z] [BOT] 💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:30:50.487Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-25T07:30:50.495Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:54.997Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T07:30:54.998Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T07:30:54.998Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T07:30:54.999Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:30:55.134Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T07:30:55.135Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T07:30:55.135Z] [BOT] 💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:30:55.138Z] [BOT] ✅ Loaded V2 database: 1080 jobs
💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:30:55.138Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:30:55.141Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:30:55.141Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-25T07:30:55.149Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
[2026-01-25T07:30:55.149Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:30:59.651Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T07:30:59.653Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T07:30:59.745Z] [BOT] 📂 Loaded 8481 existing routing entries
[2026-01-25T07:30:59.853Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T07:30:59.853Z] [BOT] Total entries: 8491
   Timestamp: 2026-01-25T07:30:59.812Z
[2026-01-25T07:30:59.853Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T07:30:59.854Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T07:30:59.854Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-25T07:30:59.854Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-25T07:30:59.854Z] [BOT] [STATS] Channel stats saved
[2026-01-25T07:31:01.873Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*