# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T23:12:35.040Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T23:12:03.229Z] ========================================
[2026-01-24T23:12:03.231Z] Discord Bot Execution Log
[2026-01-24T23:12:03.231Z] Environment: GitHub Actions
[2026-01-24T23:12:03.231Z] Node Version: v20.20.0
[2026-01-24T23:12:03.231Z] ========================================
[2026-01-24T23:12:03.231Z] Environment Variables Check:
[2026-01-24T23:12:03.231Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T23:12:03.231Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.231Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T23:12:03.232Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T23:12:03.232Z] 
Multi-Channel Configuration:
[2026-01-24T23:12:03.232Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.232Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.232Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.232Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.232Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.232Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.232Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.232Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.232Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T23:12:03.232Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T23:12:03.233Z] 
Data Files Check:
[2026-01-24T23:12:03.234Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-24T23:12:03.238Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 652160 bytes)
[2026-01-24T23:12:03.238Z] 
========================================
[2026-01-24T23:12:03.238Z] Starting Enhanced Discord Bot...
[2026-01-24T23:12:03.238Z] ========================================
[2026-01-24T23:12:03.761Z] [BOT] ✅ Loaded V2 database: 1147 jobs
[2026-01-24T23:12:04.491Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T23:12:04.492Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T23:12:04.492Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T23:12:04.613Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-24T23:12:04.616Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-24T23:12:04.617Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Revenue Platform at anthropic
[2026-01-24T23:12:04.617Z] [BOT] 🚫 Skipping blacklisted job: Senior Business Development Manager at brex
[2026-01-24T23:12:04.725Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-24T23:12:04.915Z] [BOT] ✅ Saved pending queue: 2852 total (2804 pending, 48 enriched, 0 posted)
[2026-01-24T23:12:04.915Z] [BOT] 🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 48 jobs (2 blacklisted)
[2026-01-24T23:12:04.915Z] [BOT] 📋 After data quality filter: 48 jobs (0 invalid)
[2026-01-24T23:12:04.916Z] [BOT] 📋 After multi-location grouping: 47 unique jobs to post
[2026-01-24T23:12:04.916Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-24T23:12:04.916Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T23:12:04.920Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-24T23:12:04.921Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T23:12:04.921Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:12:04.939Z] [BOT ERROR] (node:2562) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T23:12:05.286Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-24T23:12:05.286Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T23:12:05.287Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-24T23:12:05.287Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:05.288Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:05.308Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
[2026-01-24T23:12:05.308Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:06.811Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-24T23:12:06.811Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:12:07.041Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-24T23:12:07.041Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-24T23:12:07.042Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:07.043Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:07.051Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
[2026-01-24T23:12:07.052Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:08.552Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:12:08.769Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-24T23:12:08.770Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-24T23:12:08.770Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:08.771Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:08.779Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:10.281Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:12:10.453Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-24T23:12:10.453Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-24T23:12:10.453Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-24T23:12:10.453Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:10.454Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:10.462Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
[2026-01-24T23:12:10.462Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:14.964Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-24T23:12:14.964Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-24T23:12:14.964Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:12:15.284Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T23:12:15.284Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-24T23:12:15.285Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T23:12:15.285Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:15.286Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:15.297Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
[2026-01-24T23:12:15.297Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:16.799Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-24T23:12:16.799Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:12:17.114Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-24T23:12:17.115Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-24T23:12:17.115Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:17.116Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:17.125Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:18.627Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T23:12:18.627Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:12:18.795Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-24T23:12:18.796Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-24T23:12:18.796Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:18.797Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:18.805Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
[2026-01-24T23:12:18.805Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:20.307Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-24T23:12:20.307Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:12:20.539Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-24T23:12:20.540Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-24T23:12:20.540Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:20.541Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:20.549Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:22.051Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-24T23:12:22.051Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:12:22.234Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-24T23:12:22.235Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:22.236Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:22.245Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
[2026-01-24T23:12:22.245Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:26.746Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-24T23:12:26.746Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-24T23:12:26.747Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-24T23:12:27.041Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-24T23:12:27.042Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-24T23:12:27.042Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-24T23:12:27.042Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T23:12:27.043Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T23:12:27.052Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
[2026-01-24T23:12:27.052Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:12:31.555Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T23:12:31.556Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T23:12:31.655Z] [BOT] 📂 Loaded 8261 existing routing entries
[2026-01-24T23:12:31.768Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T23:12:31.768Z] [BOT] Total entries: 8271
   Timestamp: 2026-01-24T23:12:31.733Z
[2026-01-24T23:12:31.769Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T23:12:31.769Z] [BOT] Total attempts: 12
   Successful: 10
   Failed: 0
   Skipped: 2
[2026-01-24T23:12:31.769Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T23:12:31.769Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-24T23:12:31.769Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-24T23:12:31.769Z] [BOT] [STATS] Channel stats saved
[2026-01-24T23:12:33.791Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2562) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*