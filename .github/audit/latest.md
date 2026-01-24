# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T23:55:30.193Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T23:54:58.500Z] ========================================
[2026-01-24T23:54:58.502Z] Discord Bot Execution Log
[2026-01-24T23:54:58.502Z] Environment: GitHub Actions
[2026-01-24T23:54:58.502Z] Node Version: v20.20.0
[2026-01-24T23:54:58.502Z] ========================================
[2026-01-24T23:54:58.502Z] Environment Variables Check:
[2026-01-24T23:54:58.502Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T23:54:58.502Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.502Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T23:54:58.503Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T23:54:58.503Z] 
Multi-Channel Configuration:
[2026-01-24T23:54:58.503Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.503Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.503Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.503Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.503Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.503Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.503Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.503Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.503Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T23:54:58.503Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T23:54:58.504Z] 
Data Files Check:
[2026-01-24T23:54:58.505Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-24T23:54:58.509Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 648989 bytes)
[2026-01-24T23:54:58.509Z] 
========================================
[2026-01-24T23:54:58.510Z] Starting Enhanced Discord Bot...
[2026-01-24T23:54:58.510Z] ========================================
[2026-01-24T23:54:59.028Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-24T23:54:59.467Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T23:54:59.468Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T23:54:59.468Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T23:54:59.586Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-24T23:54:59.589Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-24T23:54:59.590Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-24T23:54:59.590Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-24T23:54:59.591Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-24T23:54:59.591Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-24T23:54:59.591Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-24T23:54:59.592Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T23:54:59.595Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-24T23:54:59.595Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T23:54:59.595Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:54:59.612Z] [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T23:54:59.784Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-24T23:54:59.784Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T23:54:59.785Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-24T23:54:59.785Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:54:59.786Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:54:59.800Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-24T23:54:59.800Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:01.302Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:55:01.819Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-24T23:55:01.819Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-24T23:55:01.819Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:55:01.820Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:55:01.829Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-24T23:55:01.829Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:03.329Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-24T23:55:03.329Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:55:03.590Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-24T23:55:03.590Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-24T23:55:03.590Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-24T23:55:03.590Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:55:03.591Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:55:03.599Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:05.100Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T23:55:05.261Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-24T23:55:05.261Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:55:05.262Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:55:05.270Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-24T23:55:05.270Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:09.772Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-24T23:55:09.773Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T23:55:09.773Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:55:10.004Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-24T23:55:10.004Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T23:55:10.005Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:55:10.006Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:55:10.017Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-24T23:55:10.017Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:11.519Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-24T23:55:11.519Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:55:11.658Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-24T23:55:11.659Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-24T23:55:11.659Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:55:11.660Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:55:11.669Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-24T23:55:11.669Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:13.169Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-24T23:55:13.170Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:55:14.084Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-24T23:55:14.084Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-24T23:55:14.084Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-24T23:55:14.085Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:55:14.085Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:55:14.094Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-24T23:55:14.094Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:15.595Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-24T23:55:15.596Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:55:15.933Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-24T23:55:15.933Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-24T23:55:15.933Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-24T23:55:15.933Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:55:15.934Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:55:15.943Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-24T23:55:15.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:17.444Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-24T23:55:17.444Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T23:55:17.714Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-24T23:55:17.714Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-24T23:55:17.714Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-24T23:55:17.715Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:55:17.715Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:55:17.725Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-24T23:55:17.725Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:22.226Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-24T23:55:22.227Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-24T23:55:22.227Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-24T23:55:22.524Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-24T23:55:22.524Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-24T23:55:22.524Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-24T23:55:22.525Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-24T23:55:22.525Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-24T23:55:22.534Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-24T23:55:22.534Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T23:55:27.036Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T23:55:27.038Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T23:55:27.136Z] [BOT] 📂 Loaded 8291 existing routing entries
[2026-01-24T23:55:27.245Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T23:55:27.245Z] [BOT] Total entries: 8301
   Timestamp: 2026-01-24T23:55:27.206Z
[2026-01-24T23:55:27.245Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T23:55:27.245Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-24T23:55:27.246Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T23:55:27.246Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-24T23:55:27.246Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-24T23:55:27.246Z] [BOT] [STATS] Channel stats saved
[2026-01-24T23:55:29.267Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*