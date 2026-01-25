# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T22:12:11.540Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T22:11:39.762Z] ========================================
[2026-01-25T22:11:39.764Z] Discord Bot Execution Log
[2026-01-25T22:11:39.764Z] Environment: GitHub Actions
[2026-01-25T22:11:39.764Z] Node Version: v20.20.0
[2026-01-25T22:11:39.764Z] ========================================
[2026-01-25T22:11:39.764Z] Environment Variables Check:
[2026-01-25T22:11:39.764Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T22:11:39.764Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.764Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T22:11:39.764Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T22:11:39.764Z] 
Multi-Channel Configuration:
[2026-01-25T22:11:39.764Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.765Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.765Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.765Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.765Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.765Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.765Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.765Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.765Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T22:11:39.765Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T22:11:39.765Z] 
Data Files Check:
[2026-01-25T22:11:39.766Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T22:11:39.771Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 578721 bytes)
[2026-01-25T22:11:39.771Z] 
========================================
[2026-01-25T22:11:39.771Z] Starting Enhanced Discord Bot...
[2026-01-25T22:11:39.771Z] ========================================
[2026-01-25T22:11:40.232Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T22:11:40.862Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T22:11:40.862Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T22:11:40.862Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T22:11:41.022Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T22:11:41.025Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T22:11:41.025Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T22:11:41.026Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T22:11:41.027Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T22:11:41.027Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T22:11:41.027Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T22:11:41.030Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T22:11:41.031Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T22:11:41.031Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:11:41.047Z] [BOT ERROR] (node:2571) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T22:11:41.318Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T22:11:41.318Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T22:11:41.319Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T22:11:41.319Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:11:41.323Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:11:41.323Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:11:41.326Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:11:41.326Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:11:41.327Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:11:41.337Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:11:42.839Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:11:43.061Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T22:11:43.062Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T22:11:43.062Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:11:43.065Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T22:11:43.066Z] [BOT] 💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:11:43.066Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:11:43.067Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:11:43.068Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:11:43.068Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:11:43.077Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:11:44.577Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:11:45.125Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T22:11:45.126Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T22:11:45.126Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:11:45.129Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:11:45.129Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:11:45.131Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:11:45.132Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:11:45.139Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:11:46.640Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T22:11:46.640Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:11:46.878Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T22:11:46.879Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T22:11:46.879Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:11:46.882Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:11:46.883Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:11:46.884Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:11:46.884Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:11:46.885Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:11:46.892Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:11:51.393Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T22:11:51.393Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T22:11:51.393Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:11:51.632Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T22:11:51.633Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T22:11:51.633Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:11:51.637Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:11:51.638Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:11:51.640Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:11:51.641Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:11:51.651Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:11:53.152Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:11:53.423Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T22:11:53.423Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T22:11:53.423Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:11:53.427Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:11:53.427Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:11:53.429Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:11:53.429Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:11:53.430Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:11:53.438Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:11:54.939Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T22:11:54.939Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:11:55.199Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T22:11:55.199Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T22:11:55.199Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T22:11:55.199Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:11:55.203Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:11:55.204Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:11:55.206Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:11:55.206Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:11:55.206Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:11:55.215Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:11:56.716Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T22:11:56.716Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T22:11:56.716Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:11:56.937Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T22:11:56.937Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T22:11:56.937Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:11:56.940Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:11:56.941Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:11:56.943Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:11:56.943Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:11:56.950Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:11:58.451Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T22:11:58.451Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:11:58.727Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T22:11:58.727Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T22:11:58.727Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:11:58.731Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:11:58.732Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:11:58.734Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:11:58.734Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:11:58.735Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:11:58.742Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
[2026-01-25T22:11:58.742Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T22:12:03.244Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T22:12:03.244Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T22:12:03.244Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T22:12:03.630Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T22:12:03.631Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T22:12:03.631Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T22:12:03.631Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:12:03.634Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:12:03.634Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:12:03.636Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:12:03.637Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T22:12:03.644Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:12:08.146Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T22:12:08.147Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T22:12:08.258Z] [BOT] 📂 Loaded 9061 existing routing entries
[2026-01-25T22:12:08.367Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9071
[2026-01-25T22:12:08.367Z] [BOT] Timestamp: 2026-01-25T22:12:08.329Z
[2026-01-25T22:12:08.367Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T22:12:08.368Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T22:12:08.368Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T22:12:08.368Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T22:12:08.368Z] [BOT] [STATS] Channel stats saved
[2026-01-25T22:12:10.383Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2571) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*