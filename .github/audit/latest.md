# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T06:26:08.797Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T06:25:37.096Z] ========================================
[2026-01-26T06:25:37.098Z] Discord Bot Execution Log
[2026-01-26T06:25:37.098Z] Environment: GitHub Actions
[2026-01-26T06:25:37.098Z] Node Version: v20.20.0
[2026-01-26T06:25:37.098Z] ========================================
[2026-01-26T06:25:37.098Z] Environment Variables Check:
[2026-01-26T06:25:37.098Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T06:25:37.098Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.098Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T06:25:37.098Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T06:25:37.098Z] 
Multi-Channel Configuration:
[2026-01-26T06:25:37.099Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.099Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.099Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.099Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.099Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.099Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.099Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.099Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.099Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T06:25:37.099Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T06:25:37.099Z] 
Data Files Check:
[2026-01-26T06:25:37.101Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T06:25:37.107Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 535872 bytes)
[2026-01-26T06:25:37.107Z] 
========================================
[2026-01-26T06:25:37.107Z] Starting Enhanced Discord Bot...
[2026-01-26T06:25:37.107Z] ========================================
[2026-01-26T06:25:37.644Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:25:38.170Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T06:25:38.171Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T06:25:38.171Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T06:25:38.292Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T06:25:38.296Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T06:25:38.296Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T06:25:38.296Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T06:25:38.297Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T06:25:38.298Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T06:25:38.298Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T06:25:38.301Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T06:25:38.302Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T06:25:38.302Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:25:38.319Z] [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T06:25:38.914Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T06:25:38.914Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T06:25:38.915Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T06:25:38.915Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:25:38.918Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:25:38.918Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:25:38.919Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:25:38.921Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:25:38.921Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:25:38.921Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:25:38.933Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
[2026-01-26T06:25:38.933Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T06:25:40.435Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-26T06:25:40.435Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:25:40.675Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T06:25:40.675Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T06:25:40.675Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T06:25:40.676Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:25:40.678Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:25:40.679Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:25:40.679Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:25:40.681Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:25:40.681Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:25:40.681Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:25:40.689Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:25:42.189Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T06:25:42.189Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:25:42.477Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T06:25:42.477Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T06:25:42.477Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:25:42.480Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:25:42.480Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:25:42.482Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:25:42.483Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:25:42.493Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
[2026-01-26T06:25:42.493Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T06:25:43.995Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:25:44.351Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T06:25:44.351Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T06:25:44.351Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:25:44.355Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:25:44.355Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:25:44.357Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:25:44.357Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:25:44.358Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:25:44.364Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:25:48.865Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T06:25:48.866Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T06:25:48.866Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:25:49.060Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T06:25:49.060Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T06:25:49.061Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:25:49.065Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:25:49.065Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:25:49.067Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:25:49.067Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:25:49.068Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:25:49.077Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:25:50.579Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T06:25:50.579Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:25:50.741Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T06:25:50.742Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T06:25:50.742Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T06:25:50.742Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:25:50.745Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:25:50.745Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:25:50.747Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:25:50.747Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:25:50.748Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:25:50.756Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:25:52.257Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T06:25:52.257Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:25:52.467Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T06:25:52.467Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T06:25:52.467Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:25:52.470Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:25:52.471Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:25:52.472Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:25:52.472Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:25:52.473Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:25:52.481Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:25:53.982Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T06:25:53.982Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:25:54.269Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T06:25:54.269Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T06:25:54.269Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:25:54.272Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:25:54.272Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:25:54.272Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:25:54.274Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:25:54.274Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:25:54.274Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:25:54.282Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:25:55.784Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-26T06:25:55.784Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:25:56.044Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T06:25:56.044Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T06:25:56.044Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:25:56.048Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:25:56.048Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:25:56.049Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:25:56.049Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:25:56.050Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:25:56.058Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:26:00.559Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T06:26:00.560Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T06:26:00.560Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T06:26:00.747Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T06:26:00.747Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T06:26:00.747Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:26:00.750Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:26:00.750Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:26:00.750Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:26:00.752Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:26:00.752Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:26:00.752Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:26:00.761Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:26:05.264Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T06:26:05.265Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T06:26:05.364Z] [BOT] 📂 Loaded 9251 existing routing entries
[2026-01-26T06:26:05.498Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9261
[2026-01-26T06:26:05.498Z] [BOT] Timestamp: 2026-01-26T06:26:05.446Z
[2026-01-26T06:26:05.498Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T06:26:05.499Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-26T06:26:05.499Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T06:26:05.499Z] [BOT] [STATS] Channel stats saved
[2026-01-26T06:26:07.518Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*