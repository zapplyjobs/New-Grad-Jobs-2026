# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T05:31:53.531Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T05:31:22.647Z] ========================================
[2026-01-25T05:31:22.648Z] Discord Bot Execution Log
[2026-01-25T05:31:22.648Z] Environment: GitHub Actions
[2026-01-25T05:31:22.649Z] Node Version: v20.20.0
[2026-01-25T05:31:22.649Z] ========================================
[2026-01-25T05:31:22.649Z] Environment Variables Check:
[2026-01-25T05:31:22.649Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T05:31:22.649Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.649Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T05:31:22.649Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T05:31:22.649Z] 
Multi-Channel Configuration:
[2026-01-25T05:31:22.649Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.649Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.649Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.649Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.650Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.650Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.650Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.650Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.650Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T05:31:22.650Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T05:31:22.650Z] 
Data Files Check:
[2026-01-25T05:31:22.651Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T05:31:22.656Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 634380 bytes)
[2026-01-25T05:31:22.656Z] 
========================================
[2026-01-25T05:31:22.656Z] Starting Enhanced Discord Bot...
[2026-01-25T05:31:22.656Z] ========================================
[2026-01-25T05:31:23.194Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T05:31:23.596Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T05:31:23.597Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T05:31:23.597Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T05:31:23.756Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T05:31:23.764Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T05:31:23.764Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T05:31:23.764Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T05:31:23.765Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-25T05:31:23.766Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T05:31:23.770Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T05:31:23.771Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T05:31:23.771Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:31:23.772Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:23.790Z] [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T05:31:24.049Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T05:31:24.049Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T05:31:24.050Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T05:31:24.050Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory
[2026-01-25T05:31:24.054Z] [BOT] ✅ Loaded V2 database: 1113 jobs
[2026-01-25T05:31:24.054Z] [BOT] 💾 DISK STATE: 1113 jobs on disk
[2026-01-25T05:31:24.054Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1113
[2026-01-25T05:31:24.057Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:31:24.057Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-25T05:31:24.058Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T05:31:24.065Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-25T05:31:24.065Z] [BOT] ✅ Archiving complete: 9 archived, 1104 active
[2026-01-25T05:31:24.075Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
[2026-01-25T05:31:24.075Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:25.577Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T05:31:25.577Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:31:25.577Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:25.860Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T05:31:25.860Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T05:31:25.861Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:31:25.864Z] [BOT] ✅ Loaded V2 database: 1104 jobs
[2026-01-25T05:31:25.864Z] [BOT] 💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:31:25.864Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:31:25.866Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:31:25.867Z] [BOT] 💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:31:25.867Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-25T05:31:25.875Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:27.375Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:31:27.376Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:27.528Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T05:31:27.529Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T05:31:27.529Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T05:31:27.529Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:31:27.533Z] [BOT] ✅ Loaded V2 database: 1104 jobs
[2026-01-25T05:31:27.533Z] [BOT] 💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:31:27.534Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:31:27.536Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:31:27.536Z] [BOT] 💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:31:27.537Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-25T05:31:27.544Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
[2026-01-25T05:31:27.544Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:29.045Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T05:31:29.045Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T05:31:29.045Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:29.329Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T05:31:29.329Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T05:31:29.329Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T05:31:29.329Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:31:29.333Z] [BOT] ✅ Loaded V2 database: 1104 jobs
[2026-01-25T05:31:29.333Z] [BOT] 💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:31:29.333Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:31:29.335Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:31:29.335Z] [BOT] 💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:31:29.336Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-25T05:31:29.345Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
[2026-01-25T05:31:29.345Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:33.847Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T05:31:33.848Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T05:31:33.848Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:31:33.848Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:34.257Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T05:31:34.257Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T05:31:34.257Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T05:31:34.257Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:31:34.262Z] [BOT] ✅ Loaded V2 database: 1104 jobs
[2026-01-25T05:31:34.262Z] [BOT] 💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:31:34.262Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:31:34.265Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:31:34.265Z] [BOT] 💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:31:34.266Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-25T05:31:34.276Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:35.778Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T05:31:35.778Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:31:35.778Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:35.969Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T05:31:35.970Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T05:31:35.970Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:31:35.973Z] [BOT] ✅ Loaded V2 database: 1104 jobs
💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:31:35.973Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:31:35.976Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:31:35.977Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-25T05:31:35.986Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
[2026-01-25T05:31:35.986Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:37.486Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T05:31:37.487Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:31:37.487Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:37.611Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T05:31:37.611Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T05:31:37.612Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T05:31:37.612Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:31:37.616Z] [BOT] ✅ Loaded V2 database: 1104 jobs
[2026-01-25T05:31:37.616Z] [BOT] 💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:31:37.616Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:31:37.618Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:31:37.618Z] [BOT] 💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:31:37.619Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-25T05:31:37.628Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
[2026-01-25T05:31:37.628Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:39.128Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T05:31:39.129Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:31:39.129Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:39.268Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T05:31:39.268Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T05:31:39.268Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T05:31:39.268Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:31:39.272Z] [BOT] ✅ Loaded V2 database: 1104 jobs
[2026-01-25T05:31:39.272Z] [BOT] 💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:31:39.274Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:31:39.276Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:31:39.276Z] [BOT] 💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:31:39.276Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-25T05:31:39.284Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
[2026-01-25T05:31:39.284Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:40.785Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T05:31:40.786Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T05:31:40.786Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:41.278Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T05:31:41.278Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T05:31:41.279Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T05:31:41.279Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:31:41.282Z] [BOT] ✅ Loaded V2 database: 1104 jobs
[2026-01-25T05:31:41.282Z] [BOT] 💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:31:41.283Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:31:41.285Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:31:41.286Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-25T05:31:41.293Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:45.794Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T05:31:45.795Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T05:31:45.795Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T05:31:45.796Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T05:31:46.169Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T05:31:46.169Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T05:31:46.169Z] [BOT] 💾 BEFORE MERGE: 1104 jobs in memory
[2026-01-25T05:31:46.173Z] [BOT] ✅ Loaded V2 database: 1104 jobs
💾 DISK STATE: 1104 jobs on disk
[2026-01-25T05:31:46.173Z] [BOT] 💾 DEBUG: About to iterate memory jobs - this.data.jobs.length = 1104
[2026-01-25T05:31:46.176Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T05:31:46.176Z] [BOT] 💾 AFTER MERGE: 1104 jobs (merged disk + memory)
[2026-01-25T05:31:46.177Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-25T05:31:46.186Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
[2026-01-25T05:31:46.186Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T05:31:50.689Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T05:31:50.690Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T05:31:50.782Z] [BOT] 📂 Loaded 8401 existing routing entries
[2026-01-25T05:31:50.892Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T05:31:50.892Z] [BOT] Total entries: 8411
   Timestamp: 2026-01-25T05:31:50.850Z
[2026-01-25T05:31:50.892Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T05:31:50.892Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T05:31:50.893Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T05:31:50.893Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T05:31:50.893Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T05:31:50.893Z] [BOT] [STATS] Channel stats saved
[2026-01-25T05:31:52.911Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*