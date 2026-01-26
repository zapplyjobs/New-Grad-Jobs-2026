# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T08:32:51.980Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T08:32:22.011Z] ========================================
[2026-01-26T08:32:22.013Z] Discord Bot Execution Log
[2026-01-26T08:32:22.013Z] Environment: GitHub Actions
[2026-01-26T08:32:22.013Z] Node Version: v20.20.0
[2026-01-26T08:32:22.013Z] ========================================
[2026-01-26T08:32:22.013Z] Environment Variables Check:
[2026-01-26T08:32:22.014Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T08:32:22.014Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.014Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T08:32:22.014Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T08:32:22.014Z] 
Multi-Channel Configuration:
[2026-01-26T08:32:22.014Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.014Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.014Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.014Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.014Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.014Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.015Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.015Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.015Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T08:32:22.015Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T08:32:22.015Z] 
Data Files Check:
[2026-01-26T08:32:22.016Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T08:32:22.020Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 511878 bytes)
[2026-01-26T08:32:22.020Z] 
========================================
[2026-01-26T08:32:22.020Z] Starting Enhanced Discord Bot...
[2026-01-26T08:32:22.020Z] ========================================
[2026-01-26T08:32:22.556Z] [BOT] ✅ Loaded V2 database: 893 jobs
[2026-01-26T08:32:22.994Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T08:32:22.994Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T08:32:22.994Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T08:32:23.114Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T08:32:23.118Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T08:32:23.118Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T08:32:23.118Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T08:32:23.119Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-26T08:32:23.119Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T08:32:23.120Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T08:32:23.120Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T08:32:23.123Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T08:32:23.124Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T08:32:23.124Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T08:32:23.141Z] [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T08:32:23.350Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T08:32:23.350Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T08:32:23.350Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T08:32:23.351Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:23.354Z] [BOT] ✅ Loaded V2 database: 893 jobs
[2026-01-26T08:32:23.354Z] [BOT] 💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:23.354Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:23.356Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:32:23.356Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:23.357Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:23.369Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:24.872Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-26T08:32:24.872Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T08:32:25.124Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T08:32:25.125Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T08:32:25.125Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T08:32:25.125Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:25.128Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:25.128Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:25.130Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:32:25.130Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:25.130Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:25.137Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:26.639Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T08:32:26.854Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T08:32:26.854Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T08:32:26.854Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:26.857Z] [BOT] ✅ Loaded V2 database: 893 jobs
[2026-01-26T08:32:26.858Z] [BOT] 💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:26.858Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:26.859Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:32:26.859Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:26.860Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:26.866Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:28.367Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T08:32:28.493Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T08:32:28.493Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T08:32:28.493Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:28.496Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:28.497Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:28.498Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:32:28.498Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:28.499Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:28.505Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:33.008Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T08:32:33.009Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T08:32:33.009Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:32:33.200Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T08:32:33.200Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T08:32:33.200Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T08:32:33.201Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:33.205Z] [BOT] ✅ Loaded V2 database: 893 jobs
[2026-01-26T08:32:33.205Z] [BOT] 💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:33.205Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:33.207Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:32:33.207Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:33.208Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:33.216Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
[2026-01-26T08:32:33.216Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:34.718Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T08:32:34.719Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:32:34.913Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T08:32:34.913Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T08:32:34.914Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:34.916Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:34.917Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:34.919Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:34.919Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:34.926Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:36.427Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T08:32:36.427Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:32:36.593Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T08:32:36.593Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T08:32:36.594Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:36.597Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:36.597Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:36.600Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:32:36.600Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:36.600Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:36.607Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
[2026-01-26T08:32:36.607Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:38.108Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T08:32:38.108Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:32:38.253Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T08:32:38.253Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T08:32:38.254Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:38.256Z] [BOT] ✅ Loaded V2 database: 893 jobs
[2026-01-26T08:32:38.257Z] [BOT] 💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:38.257Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:38.258Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:32:38.258Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:38.259Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:38.265Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
[2026-01-26T08:32:38.265Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:39.767Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T08:32:39.767Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:32:39.889Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T08:32:39.889Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T08:32:39.890Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:39.893Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:39.893Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:39.895Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:32:39.895Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:39.896Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:39.902Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
[2026-01-26T08:32:39.902Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:44.404Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T08:32:44.405Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T08:32:44.405Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T08:32:44.603Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T08:32:44.603Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T08:32:44.603Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:32:44.606Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:32:44.606Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:32:44.608Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:32:44.608Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:32:44.608Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:32:44.614Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
[2026-01-26T08:32:44.615Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T08:32:49.117Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T08:32:49.118Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T08:32:49.220Z] [BOT] 📂 Loaded 9321 existing routing entries
[2026-01-26T08:32:49.328Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9331
[2026-01-26T08:32:49.328Z] [BOT] Timestamp: 2026-01-26T08:32:49.284Z
[2026-01-26T08:32:49.328Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T08:32:49.329Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T08:32:49.329Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-26T08:32:49.330Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-26T08:32:51.347Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*