# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T23:30:27.192Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T23:29:55.213Z] ========================================
[2026-01-24T23:29:55.215Z] Discord Bot Execution Log
[2026-01-24T23:29:55.215Z] Environment: GitHub Actions
[2026-01-24T23:29:55.215Z] Node Version: v20.20.0
[2026-01-24T23:29:55.215Z] ========================================
[2026-01-24T23:29:55.215Z] Environment Variables Check:
[2026-01-24T23:29:55.215Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T23:29:55.215Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.215Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T23:29:55.215Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T23:29:55.216Z] 
Multi-Channel Configuration:
[2026-01-24T23:29:55.216Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.216Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.216Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.216Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.216Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.216Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.216Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.216Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.216Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T23:29:55.216Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T23:29:55.216Z] 
Data Files Check:
[2026-01-24T23:29:55.217Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-24T23:29:55.222Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 652160 bytes)
[2026-01-24T23:29:55.222Z] 
========================================
[2026-01-24T23:29:55.222Z] Starting Enhanced Discord Bot...
[2026-01-24T23:29:55.222Z] ========================================
[2026-01-24T23:29:55.748Z] [BOT] ✅ Loaded V2 database: 1147 jobs
[2026-01-24T23:29:56.568Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T23:29:56.569Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T23:29:56.569Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T23:29:56.689Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-24T23:29:56.693Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-24T23:29:56.693Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, National Technology Partners  at brex
[2026-01-24T23:29:56.693Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Notebooks at datadog
[2026-01-24T23:29:56.791Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-24T23:29:56.960Z] [BOT] ✅ Saved pending queue: 2852 total (2804 pending, 48 enriched, 0 posted)
[2026-01-24T23:29:56.960Z] [BOT] 🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 48 jobs (2 blacklisted)
[2026-01-24T23:29:56.961Z] [BOT] 📋 After data quality filter: 48 jobs (0 invalid)
[2026-01-24T23:29:56.962Z] [BOT] 📋 After multi-location grouping: 47 unique jobs to post
[2026-01-24T23:29:56.962Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-24T23:29:56.962Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T23:29:56.965Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-24T23:29:56.966Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T23:29:56.966Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:29:56.984Z] [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T23:29:57.357Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-24T23:29:57.358Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T23:29:57.358Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-24T23:29:57.359Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:29:57.360Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T23:29:57.365Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-24T23:29:57.365Z] [BOT] ✅ Archiving complete: 2 archived, 1145 active
[2026-01-24T23:29:57.376Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T23:29:58.879Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:29:59.091Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-24T23:29:59.091Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-24T23:29:59.091Z] [BOT] 💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T23:29:59.092Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T23:29:59.100Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T23:30:00.601Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-24T23:30:00.601Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:30:00.871Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-24T23:30:00.872Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-24T23:30:00.872Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-24T23:30:00.872Z] [BOT] 💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T23:30:00.873Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T23:30:00.881Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
[2026-01-24T23:30:00.881Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:30:02.383Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:30:02.545Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-24T23:30:02.546Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T23:30:02.546Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T23:30:02.554Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
[2026-01-24T23:30:02.554Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:30:07.056Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-24T23:30:07.056Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-24T23:30:07.056Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:30:07.749Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-24T23:30:07.749Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T23:30:07.749Z] [BOT] 💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T23:30:07.750Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T23:30:07.760Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
[2026-01-24T23:30:07.760Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:30:09.261Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T23:30:09.261Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:30:09.620Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-24T23:30:09.620Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-24T23:30:09.621Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T23:30:09.622Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T23:30:09.633Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T23:30:11.134Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-24T23:30:11.135Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:30:11.341Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-24T23:30:11.341Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-24T23:30:11.342Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T23:30:11.342Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T23:30:11.351Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
[2026-01-24T23:30:11.351Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:30:12.852Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T23:30:12.852Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:30:13.048Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-24T23:30:13.048Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-24T23:30:13.048Z] [BOT] 💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T23:30:13.049Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T23:30:13.058Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
[2026-01-24T23:30:13.058Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:30:14.560Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-24T23:30:14.560Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:30:14.791Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-24T23:30:14.792Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-24T23:30:14.792Z] [BOT] 💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T23:30:14.793Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T23:30:14.802Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T23:30:19.304Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-24T23:30:19.305Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-24T23:30:19.305Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-24T23:30:19.590Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-24T23:30:19.591Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-24T23:30:19.591Z] [BOT] 💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-24T23:30:19.591Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-24T23:30:19.602Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T23:30:24.105Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T23:30:24.107Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T23:30:24.197Z] [BOT] 📂 Loaded 8271 existing routing entries
[2026-01-24T23:30:24.313Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T23:30:24.313Z] [BOT] Total entries: 8281
   Timestamp: 2026-01-24T23:30:24.276Z
[2026-01-24T23:30:24.313Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
   Successful: 10
   Failed: 0
   Skipped: 2
[2026-01-24T23:30:24.314Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-24T23:30:26.333Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*