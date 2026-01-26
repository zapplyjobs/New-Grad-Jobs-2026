# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T11:14:05.053Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T11:13:33.780Z] ========================================
[2026-01-26T11:13:33.782Z] Discord Bot Execution Log
[2026-01-26T11:13:33.782Z] Environment: GitHub Actions
[2026-01-26T11:13:33.782Z] Node Version: v20.20.0
[2026-01-26T11:13:33.782Z] ========================================
[2026-01-26T11:13:33.782Z] Environment Variables Check:
[2026-01-26T11:13:33.782Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T11:13:33.782Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.782Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T11:13:33.782Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T11:13:33.782Z] 
Multi-Channel Configuration:
[2026-01-26T11:13:33.783Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.783Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.783Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.783Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.783Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.783Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.783Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.783Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.783Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T11:13:33.783Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T11:13:33.783Z] 
Data Files Check:
[2026-01-26T11:13:33.784Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T11:13:33.788Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 497243 bytes)
[2026-01-26T11:13:33.788Z] 
========================================
[2026-01-26T11:13:33.788Z] Starting Enhanced Discord Bot...
[2026-01-26T11:13:33.788Z] ========================================
[2026-01-26T11:13:34.312Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:13:34.815Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T11:13:34.816Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T11:13:34.816Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T11:13:34.935Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T11:13:34.938Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T11:13:34.939Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T11:13:34.939Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T11:13:34.940Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T11:13:34.940Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T11:13:34.940Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T11:13:34.941Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T11:13:34.944Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T11:13:34.945Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T11:13:34.945Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:13:34.961Z] [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T11:13:35.213Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T11:13:35.214Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T11:13:35.214Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:35.217Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:13:35.217Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:13:35.217Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:35.219Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:13:35.219Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:35.220Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:35.237Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:13:36.738Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:13:36.926Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T11:13:36.926Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T11:13:36.926Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T11:13:36.926Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:36.929Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:13:36.929Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:13:36.929Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:36.931Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:13:36.931Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:36.931Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:36.939Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:13:36.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:13:38.441Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T11:13:38.441Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:13:38.669Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T11:13:38.669Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T11:13:38.669Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:38.672Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:13:38.672Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:13:38.672Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:38.674Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:13:38.674Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:38.675Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:38.681Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:13:40.181Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T11:13:40.182Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:13:40.389Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T11:13:40.389Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T11:13:40.389Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T11:13:40.389Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:40.392Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:13:40.392Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:13:40.393Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:40.394Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:13:40.394Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:40.395Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:40.401Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:13:44.903Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T11:13:44.904Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T11:13:44.904Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:13:45.291Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T11:13:45.291Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T11:13:45.291Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T11:13:45.292Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:45.295Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:13:45.296Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:13:45.296Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:45.298Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:13:45.298Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:45.298Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:45.306Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:13:46.809Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T11:13:46.809Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:13:47.043Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T11:13:47.043Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T11:13:47.043Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:47.046Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:13:47.046Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:47.048Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:47.048Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:47.056Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:13:47.056Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:13:48.558Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T11:13:48.558Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:13:48.743Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T11:13:48.743Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T11:13:48.743Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:48.746Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:13:48.747Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:48.748Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:48.749Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:48.756Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:13:48.756Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:13:50.256Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T11:13:50.256Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:13:50.532Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T11:13:50.532Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T11:13:50.532Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T11:13:50.532Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:50.535Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:13:50.535Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:13:50.535Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:50.537Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:13:50.537Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:50.537Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:50.544Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:13:50.544Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:13:52.044Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T11:13:52.045Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:13:52.296Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T11:13:52.296Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T11:13:52.296Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:52.299Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:13:52.299Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:52.301Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:13:52.301Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:52.302Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:52.309Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T11:13:52.309Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T11:13:56.811Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T11:13:56.812Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T11:13:56.812Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T11:13:57.008Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T11:13:57.008Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T11:13:57.008Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:13:57.011Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:13:57.011Z] [BOT] 💾 DISK STATE: 864 jobs on disk
💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:13:57.013Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:13:57.013Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:13:57.014Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:13:57.020Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:14:01.522Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T11:14:01.524Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T11:14:01.623Z] [BOT] 📂 Loaded 9411 existing routing entries
[2026-01-26T11:14:01.748Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T11:14:01.748Z] [BOT] Total entries: 9421
   Timestamp: 2026-01-26T11:14:01.701Z
[2026-01-26T11:14:01.749Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T11:14:01.749Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T11:14:01.749Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-26T11:14:03.768Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2546) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*