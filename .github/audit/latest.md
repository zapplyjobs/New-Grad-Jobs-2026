# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T22:51:20.363Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T22:50:48.537Z] ========================================
[2026-01-24T22:50:48.539Z] Discord Bot Execution Log
[2026-01-24T22:50:48.539Z] Environment: GitHub Actions
[2026-01-24T22:50:48.539Z] Node Version: v20.20.0
[2026-01-24T22:50:48.539Z] ========================================
[2026-01-24T22:50:48.539Z] Environment Variables Check:
[2026-01-24T22:50:48.539Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T22:50:48.540Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.540Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T22:50:48.540Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T22:50:48.540Z] 
Multi-Channel Configuration:
[2026-01-24T22:50:48.540Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.540Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.540Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.540Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.540Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.540Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.540Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.541Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.541Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T22:50:48.541Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T22:50:48.541Z] 
Data Files Check:
[2026-01-24T22:50:48.542Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-24T22:50:48.547Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 653166 bytes)
[2026-01-24T22:50:48.547Z] 
========================================
[2026-01-24T22:50:48.547Z] Starting Enhanced Discord Bot...
[2026-01-24T22:50:48.547Z] ========================================
[2026-01-24T22:50:49.126Z] [BOT] ✅ Loaded V2 database: 1149 jobs
[2026-01-24T22:50:49.642Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T22:50:49.643Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T22:50:49.643Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T22:50:49.771Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-24T22:50:49.774Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-24T22:50:49.775Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
[2026-01-24T22:50:49.775Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
[2026-01-24T22:50:49.775Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
🚫 Skipping blacklisted job: Research Engineer, Frontier Red Team (Hardware Lead) at anthropic
[2026-01-24T22:50:49.776Z] [BOT] 🚫 Skipping blacklisted job: Senior Solutions Consultant at airtable
🚫 Skipping blacklisted job: Lead Solutions Consultant at airtable
[2026-01-24T22:50:49.877Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[2026-01-24T22:50:50.070Z] [BOT] ✅ Saved pending queue: 2848 total (2804 pending, 44 enriched, 0 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-24T22:50:50.071Z] [BOT] 📋 After blacklist filter: 44 jobs (6 blacklisted)
📋 After data quality filter: 44 jobs (0 invalid)
[2026-01-24T22:50:50.072Z] [BOT] 📋 After multi-location grouping: 43 unique jobs to post
[2026-01-24T22:50:50.072Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T22:50:50.076Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-24T22:50:50.077Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T22:50:50.077Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:50:50.096Z] [BOT ERROR] (node:2466) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T22:50:50.454Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-24T22:50:50.454Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-24T22:50:50.455Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-24T22:50:50.455Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:50:50.456Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:50:50.472Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:50:51.975Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-24T22:50:51.975Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:50:52.227Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-24T22:50:52.227Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-24T22:50:52.227Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-24T22:50:52.227Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:50:52.228Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:50:52.238Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:50:53.740Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-24T22:50:53.740Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:50:54.045Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-24T22:50:54.045Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-24T22:50:54.046Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-24T22:50:54.046Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:50:54.047Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:50:54.055Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:50:55.556Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-24T22:50:55.556Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T22:50:55.825Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-24T22:50:55.826Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-24T22:50:55.826Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-24T22:50:55.826Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:50:55.827Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:50:55.836Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:51:00.337Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-24T22:51:00.337Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-24T22:51:00.337Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:51:00.531Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T22:51:00.531Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-24T22:51:00.533Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1149 jobs in database
✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:51:00.545Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:51:02.047Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T22:51:02.047Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:51:02.274Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-24T22:51:02.274Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-24T22:51:02.274Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:51:02.276Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:51:02.286Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:51:03.788Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T22:51:03.788Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:51:03.961Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-24T22:51:03.961Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-24T22:51:03.962Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-24T22:51:03.962Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:51:03.963Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:51:03.971Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:51:05.473Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T22:51:05.473Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:51:05.758Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-24T22:51:05.759Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-24T22:51:05.759Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:51:05.760Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:51:05.771Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:51:07.272Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-24T22:51:07.272Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T22:51:07.500Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-24T22:51:07.500Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-24T22:51:07.500Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:51:07.501Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:51:07.511Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:51:12.013Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-24T22:51:12.013Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-24T22:51:12.013Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-24T22:51:12.333Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-24T22:51:12.334Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-24T22:51:12.334Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-24T22:51:12.335Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-24T22:51:12.350Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T22:51:16.853Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T22:51:16.855Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T22:51:16.954Z] [BOT] 📂 Loaded 8241 existing routing entries
[2026-01-24T22:51:17.075Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8251
[2026-01-24T22:51:17.076Z] [BOT] Timestamp: 2026-01-24T22:51:17.038Z
[2026-01-24T22:51:17.076Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T22:51:17.076Z] [BOT] Total attempts: 16
   Successful: 10
   Failed: 0
   Skipped: 6
[2026-01-24T22:51:17.076Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-24T22:51:17.077Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-24T22:51:17.077Z] [BOT] [STATS] Channel stats saved
[2026-01-24T22:51:19.101Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2466) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*