# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T12:59:29.070Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T12:58:58.387Z] ========================================
[2026-01-26T12:58:58.389Z] Discord Bot Execution Log
[2026-01-26T12:58:58.389Z] Environment: GitHub Actions
[2026-01-26T12:58:58.389Z] Node Version: v20.20.0
[2026-01-26T12:58:58.389Z] ========================================
[2026-01-26T12:58:58.390Z] Environment Variables Check:
[2026-01-26T12:58:58.390Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T12:58:58.390Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T12:58:58.390Z] 
Multi-Channel Configuration:
[2026-01-26T12:58:58.390Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.390Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T12:58:58.391Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T12:58:58.391Z] 
Data Files Check:
[2026-01-26T12:58:58.392Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T12:58:58.395Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 495143 bytes)
[2026-01-26T12:58:58.396Z] 
========================================
[2026-01-26T12:58:58.396Z] Starting Enhanced Discord Bot...
[2026-01-26T12:58:58.396Z] ========================================
[2026-01-26T12:58:58.916Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:58:59.405Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T12:58:59.405Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T12:58:59.406Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T12:58:59.521Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[2026-01-26T12:58:59.523Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T12:58:59.526Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T12:58:59.527Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T12:58:59.527Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T12:58:59.528Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T12:58:59.528Z] [BOT] (2 grouped as same job with different locations)
[2026-01-26T12:58:59.528Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T12:58:59.532Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T12:58:59.532Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T12:58:59.533Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:58:59.549Z] [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T12:58:59.767Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T12:58:59.767Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T12:58:59.768Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T12:58:59.768Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:58:59.771Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:58:59.771Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:58:59.773Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:58:59.773Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:58:59.774Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:58:59.786Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:01.288Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T12:59:01.288Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:59:01.471Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T12:59:01.471Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T12:59:01.471Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T12:59:01.471Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:59:01.474Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:59:01.474Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:59:01.475Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:59:01.476Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:59:01.476Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:59:01.477Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:59:01.483Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:59:01.483Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:02.985Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:59:03.285Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T12:59:03.286Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T12:59:03.286Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:59:03.289Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:59:03.289Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:59:03.290Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:59:03.291Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:59:03.291Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:59:03.298Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:59:03.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:04.798Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T12:59:04.798Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:59:05.018Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T12:59:05.019Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T12:59:05.019Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:59:05.022Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:59:05.022Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:59:05.024Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:59:05.024Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:59:05.024Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:59:05.031Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:59:05.031Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:09.533Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T12:59:09.533Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T12:59:09.534Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:59:09.903Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T12:59:09.903Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T12:59:09.903Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:59:09.907Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:59:09.908Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:59:09.910Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:59:09.910Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:59:09.911Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:59:09.919Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:11.420Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T12:59:11.420Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:59:11.612Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T12:59:11.613Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T12:59:11.613Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:59:11.616Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:59:11.616Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:59:11.618Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:59:11.618Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:59:11.626Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:59:11.626Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:13.128Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T12:59:13.128Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:59:13.296Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T12:59:13.296Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T12:59:13.297Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:59:13.299Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:59:13.299Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:59:13.299Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:59:13.301Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:59:13.301Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:59:13.302Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:59:13.308Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:59:13.308Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:14.809Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T12:59:14.809Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:59:14.950Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T12:59:14.950Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T12:59:14.950Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:59:14.953Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:59:14.953Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:59:14.953Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:59:14.955Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:59:14.955Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:59:14.955Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:59:14.962Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:59:14.962Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:16.462Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T12:59:16.462Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:59:16.700Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T12:59:16.700Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T12:59:16.700Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T12:59:16.700Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:59:16.703Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:59:16.703Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:59:16.703Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:59:16.705Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:59:16.705Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:59:16.705Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:59:16.711Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:21.213Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T12:59:21.214Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T12:59:21.214Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T12:59:21.433Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T12:59:21.434Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T12:59:21.434Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:59:21.437Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:59:21.437Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:59:21.439Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:59:21.439Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:59:21.439Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:59:21.445Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:59:21.446Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:59:25.948Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T12:59:25.949Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T12:59:26.057Z] [BOT] 📂 Loaded 9471 existing routing entries
[2026-01-26T12:59:26.176Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9481
[2026-01-26T12:59:26.176Z] [BOT] Timestamp: 2026-01-26T12:59:26.130Z
[2026-01-26T12:59:26.176Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
[2026-01-26T12:59:26.176Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T12:59:26.177Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T12:59:26.177Z] [BOT] [STATS] Channel stats saved
[2026-01-26T12:59:28.195Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*