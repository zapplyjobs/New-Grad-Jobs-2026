# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T10:31:59.053Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T10:31:26.740Z] ========================================
[2026-01-26T10:31:26.742Z] Discord Bot Execution Log
[2026-01-26T10:31:26.742Z] Environment: GitHub Actions
[2026-01-26T10:31:26.742Z] Node Version: v20.20.0
[2026-01-26T10:31:26.742Z] ========================================
[2026-01-26T10:31:26.742Z] Environment Variables Check:
[2026-01-26T10:31:26.742Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T10:31:26.742Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.742Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T10:31:26.742Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T10:31:26.742Z] 
Multi-Channel Configuration:
[2026-01-26T10:31:26.743Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.743Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.743Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.743Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.743Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.743Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.743Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.743Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.743Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T10:31:26.743Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T10:31:26.743Z] 
Data Files Check:
[2026-01-26T10:31:26.744Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T10:31:26.748Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 497243 bytes)
[2026-01-26T10:31:26.748Z] 
========================================
[2026-01-26T10:31:26.748Z] Starting Enhanced Discord Bot...
[2026-01-26T10:31:26.748Z] ========================================
[2026-01-26T10:31:27.285Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T10:31:27.878Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T10:31:27.879Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T10:31:27.879Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T10:31:27.999Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T10:31:28.002Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T10:31:28.003Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T10:31:28.003Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T10:31:28.004Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T10:31:28.004Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T10:31:28.004Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T10:31:28.008Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T10:31:28.008Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T10:31:28.008Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T10:31:28.025Z] [BOT ERROR] (node:2502) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T10:31:28.293Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T10:31:28.293Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T10:31:28.293Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T10:31:28.294Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:28.296Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T10:31:28.297Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:28.297Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:28.299Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:31:28.299Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:28.300Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:28.311Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:29.814Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T10:31:30.223Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T10:31:30.223Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T10:31:30.223Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:30.226Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T10:31:30.227Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:30.227Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:30.228Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:31:30.228Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:30.229Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:30.235Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:31.736Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T10:31:31.912Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T10:31:31.912Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T10:31:31.912Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:31.915Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:31.915Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:31.917Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:31:31.917Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:31.918Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:31.924Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:33.425Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T10:31:33.771Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T10:31:33.771Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T10:31:33.771Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:33.774Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:33.775Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:33.776Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:31:33.776Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:33.777Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:33.783Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:38.286Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T10:31:38.286Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T10:31:38.286Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:31:38.616Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T10:31:38.617Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T10:31:38.617Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:38.620Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:38.621Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:38.623Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:31:38.623Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:38.624Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:38.632Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:40.134Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T10:31:40.134Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:31:40.333Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T10:31:40.333Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T10:31:40.333Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:40.336Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:40.336Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:40.338Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:40.339Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:40.347Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:41.848Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T10:31:41.849Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:31:42.227Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T10:31:42.227Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T10:31:42.227Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:42.230Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:42.230Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:42.232Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:31:42.232Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:42.233Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:42.240Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:43.742Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T10:31:43.742Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:31:44.029Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T10:31:44.029Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T10:31:44.030Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:44.032Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:44.033Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:44.034Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:31:44.034Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:44.035Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:44.042Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T10:31:44.042Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:45.543Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T10:31:45.543Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T10:31:46.006Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T10:31:46.006Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T10:31:46.006Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:46.009Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:46.009Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:46.011Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:46.011Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:46.018Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:50.520Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T10:31:50.520Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T10:31:50.520Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T10:31:51.008Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T10:31:51.008Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T10:31:51.008Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T10:31:51.008Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T10:31:51.011Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T10:31:51.011Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T10:31:51.011Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T10:31:51.013Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T10:31:51.013Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T10:31:51.014Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T10:31:51.022Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
[2026-01-26T10:31:51.022Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T10:31:55.524Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T10:31:55.526Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T10:31:55.624Z] [BOT] 📂 Loaded 9381 existing routing entries
[2026-01-26T10:31:55.746Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T10:31:55.746Z] [BOT] Total entries: 9391
   Timestamp: 2026-01-26T10:31:55.699Z
[2026-01-26T10:31:55.747Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T10:31:55.747Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T10:31:55.747Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-26T10:31:55.747Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-26T10:31:55.747Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-26T10:31:55.748Z] [BOT] [STATS] Channel stats saved
[2026-01-26T10:31:57.765Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2502) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*