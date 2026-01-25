# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T01:53:01.328Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T01:52:28.288Z] ========================================
[2026-01-25T01:52:28.290Z] Discord Bot Execution Log
[2026-01-25T01:52:28.290Z] Environment: GitHub Actions
[2026-01-25T01:52:28.290Z] Node Version: v20.20.0
[2026-01-25T01:52:28.290Z] ========================================
[2026-01-25T01:52:28.290Z] Environment Variables Check:
[2026-01-25T01:52:28.291Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T01:52:28.291Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.291Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T01:52:28.291Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T01:52:28.291Z] 
Multi-Channel Configuration:
[2026-01-25T01:52:28.291Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.291Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.291Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.291Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.291Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.291Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.292Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.292Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.292Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T01:52:28.292Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T01:52:28.292Z] 
Data Files Check:
[2026-01-25T01:52:28.293Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T01:52:28.298Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 648989 bytes)
[2026-01-25T01:52:28.298Z] 
========================================
[2026-01-25T01:52:28.298Z] Starting Enhanced Discord Bot...
[2026-01-25T01:52:28.298Z] ========================================
[2026-01-25T01:52:28.859Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T01:52:29.784Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T01:52:29.785Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T01:52:29.785Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T01:52:29.905Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-25T01:52:29.908Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T01:52:29.913Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T01:52:29.913Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T01:52:29.913Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T01:52:29.915Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T01:52:29.915Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T01:52:29.915Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T01:52:29.921Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T01:52:29.921Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T01:52:29.922Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T01:52:29.922Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:29.945Z] [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T01:52:30.279Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T01:52:30.280Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T01:52:30.280Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:30.284Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T01:52:30.284Z] [BOT] 💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:30.286Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:30.287Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:30.299Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-25T01:52:30.299Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:31.802Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T01:52:31.802Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:31.978Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T01:52:31.978Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T01:52:31.978Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:31.982Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:31.983Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:31.984Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:31.993Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:33.495Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T01:52:33.495Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:33.705Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T01:52:33.705Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T01:52:33.706Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T01:52:33.706Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:33.709Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:33.711Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:33.712Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:33.720Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:35.221Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T01:52:35.221Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T01:52:35.222Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:35.436Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T01:52:35.436Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T01:52:35.437Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T01:52:35.437Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:35.440Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:35.441Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:35.442Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:35.450Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:39.953Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T01:52:39.953Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T01:52:39.953Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T01:52:39.954Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:40.390Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T01:52:40.391Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:40.396Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:40.398Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:40.398Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:40.409Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:41.911Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T01:52:41.911Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:42.824Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T01:52:42.825Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T01:52:42.825Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:42.829Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:42.830Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:42.831Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:42.845Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:44.346Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T01:52:44.346Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T01:52:44.346Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:45.115Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T01:52:45.115Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T01:52:45.116Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:45.119Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:45.121Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:45.121Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:45.131Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:46.633Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T01:52:46.633Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T01:52:46.633Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:46.891Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T01:52:46.891Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T01:52:46.891Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T01:52:46.891Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:46.895Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:46.896Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:46.897Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:46.907Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:48.408Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T01:52:48.408Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:48.638Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T01:52:48.638Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T01:52:48.638Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T01:52:48.638Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:48.642Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T01:52:48.642Z] [BOT] 💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:48.643Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:48.644Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:48.660Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:53.161Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T01:52:53.162Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T01:52:53.162Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T01:52:53.162Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:52:53.420Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T01:52:53.421Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T01:52:53.421Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:52:53.424Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T01:52:53.424Z] [BOT] 💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:52:53.425Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:52:53.426Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:52:53.435Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-25T01:52:53.435Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T01:52:57.936Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T01:52:57.938Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T01:52:58.028Z] [BOT] 📂 Loaded 8301 existing routing entries
[2026-01-25T01:52:58.146Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T01:52:58.147Z] [BOT] Total entries: 8311
   Timestamp: 2026-01-25T01:52:58.107Z
[2026-01-25T01:52:58.147Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T01:52:58.147Z] [BOT] Total attempts: 10
   Successful: 10
[2026-01-25T01:52:58.147Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-25T01:52:58.147Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T01:52:58.147Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T01:52:58.148Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T01:52:58.148Z] [BOT] [STATS] Channel stats saved
[2026-01-25T01:53:00.164Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2464) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*