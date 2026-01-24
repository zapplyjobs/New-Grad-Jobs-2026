# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T22:58:33.061Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T22:58:01.056Z] ========================================
[2026-01-24T22:58:01.058Z] Discord Bot Execution Log
[2026-01-24T22:58:01.058Z] Environment: GitHub Actions
[2026-01-24T22:58:01.058Z] Node Version: v20.20.0
[2026-01-24T22:58:01.058Z] ========================================
[2026-01-24T22:58:01.058Z] Environment Variables Check:
[2026-01-24T22:58:01.058Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T22:58:01.058Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T22:58:01.059Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T22:58:01.059Z] 
Multi-Channel Configuration:
[2026-01-24T22:58:01.059Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T22:58:01.059Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T22:58:01.059Z] 
Data Files Check:
[2026-01-24T22:58:01.061Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-24T22:58:01.066Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 653166 bytes)
[2026-01-24T22:58:01.066Z] 
========================================
[2026-01-24T22:58:01.066Z] Starting Enhanced Discord Bot...
[2026-01-24T22:58:01.066Z] ========================================
[2026-01-24T22:58:01.596Z] [BOT] ✅ Loaded V2 database: 1149 jobs
[2026-01-24T22:58:02.195Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T22:58:02.196Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T22:58:02.196Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T22:58:02.369Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-24T22:58:02.371Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-24T22:58:02.375Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-24T22:58:02.375Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Platform  at airtable
[2026-01-24T22:58:02.375Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI Product at airtable
[2026-01-24T22:58:02.376Z] [BOT] 🚫 Skipping blacklisted job: Benefits Customer Onboarding Manager at gusto
[2026-01-24T22:58:02.520Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-24T22:58:02.708Z] [BOT] ✅ Saved pending queue: 2851 total (2804 pending, 47 enriched, 0 posted)
[2026-01-24T22:58:02.709Z] [BOT] 🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 47 jobs (3 blacklisted)
[2026-01-24T22:58:02.709Z] [BOT] 📋 After data quality filter: 47 jobs (0 invalid)
[2026-01-24T22:58:02.710Z] [BOT] 📋 After multi-location grouping: 46 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-24T22:58:02.710Z] [BOT] 📍 1 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T22:58:02.714Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-24T22:58:02.715Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:58:02.733Z] [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T22:58:02.934Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-24T22:58:02.935Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T22:58:02.935Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-24T22:58:02.935Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:58:02.937Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T22:58:02.941Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-24T22:58:02.942Z] [BOT] ✅ Archiving complete: 2 archived, 1147 active
[2026-01-24T22:58:02.953Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:04.457Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-24T22:58:04.457Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:58:04.802Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-24T22:58:04.802Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-24T22:58:04.803Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-24T22:58:04.803Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:58:04.804Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:58:04.812Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:06.314Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:58:06.825Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-24T22:58:06.825Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-24T22:58:06.825Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:58:06.826Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:58:06.835Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:08.337Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-24T22:58:08.337Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:58:08.515Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-24T22:58:08.515Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-24T22:58:08.515Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:58:08.516Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:58:08.525Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:13.025Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-24T22:58:13.026Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T22:58:13.026Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:58:13.306Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T22:58:13.306Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-24T22:58:13.307Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T22:58:13.307Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:58:13.308Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:58:13.319Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:14.821Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-24T22:58:14.822Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:58:14.992Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-24T22:58:14.992Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-24T22:58:14.993Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-24T22:58:14.993Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:58:14.994Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:58:15.007Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:16.508Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T22:58:16.508Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:58:16.912Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-24T22:58:16.913Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-24T22:58:16.913Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:58:16.914Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:58:16.923Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:18.424Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-24T22:58:18.424Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:58:18.658Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-24T22:58:18.658Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-24T22:58:18.659Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-24T22:58:18.659Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:58:18.660Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:58:18.669Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:20.171Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:58:20.440Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-24T22:58:20.441Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-24T22:58:20.441Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:58:20.442Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:58:20.453Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:24.954Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-24T22:58:24.955Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-24T22:58:24.955Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-24T22:58:25.180Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-24T22:58:25.180Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-24T22:58:25.180Z] [BOT] 💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-24T22:58:25.181Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-24T22:58:25.191Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:58:29.693Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T22:58:29.695Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T22:58:29.808Z] [BOT] 📂 Loaded 8251 existing routing entries
[2026-01-24T22:58:29.937Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8261
[2026-01-24T22:58:29.937Z] [BOT] Timestamp: 2026-01-24T22:58:29.903Z
[2026-01-24T22:58:29.938Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T22:58:29.938Z] [BOT] Total attempts: 13
   Successful: 10
   Failed: 0
   Skipped: 3
[2026-01-24T22:58:29.938Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-24T22:58:29.938Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-24T22:58:29.939Z] [BOT] [STATS] Channel stats saved
[2026-01-24T22:58:31.957Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*