# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T03:44:45.303Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T03:44:13.764Z] ========================================
[2026-01-28T03:44:13.765Z] Discord Bot Execution Log
[2026-01-28T03:44:13.765Z] Environment: GitHub Actions
[2026-01-28T03:44:13.766Z] Node Version: v20.20.0
[2026-01-28T03:44:13.766Z] ========================================
[2026-01-28T03:44:13.766Z] Environment Variables Check:
[2026-01-28T03:44:13.766Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T03:44:13.766Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.766Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T03:44:13.766Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T03:44:13.766Z] 
Multi-Channel Configuration:
[2026-01-28T03:44:13.766Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.766Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.766Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.766Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.766Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.766Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.766Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.766Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.767Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T03:44:13.767Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T03:44:13.767Z] 
Data Files Check:
[2026-01-28T03:44:13.768Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-28T03:44:13.770Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 189966 bytes)
[2026-01-28T03:44:13.770Z] 
========================================
[2026-01-28T03:44:13.770Z] Starting Enhanced Discord Bot...
[2026-01-28T03:44:13.770Z] ========================================
[2026-01-28T03:44:14.210Z] [BOT] ✅ Loaded V2 database: 326 jobs
[2026-01-28T03:44:15.066Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-28T03:44:15.066Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T03:44:15.066Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T03:44:15.219Z] [BOT] ✅ Loaded pending queue: 2984 total (2934 pending, 50 enriched, 0 posted)
[2026-01-28T03:44:15.220Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-28T03:44:15.222Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T03:44:15.223Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-28T03:44:15.223Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-28T03:44:15.224Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-28T03:44:15.224Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-28T03:44:15.225Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T03:44:15.228Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-28T03:44:15.228Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T03:44:15.228Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T03:44:15.244Z] [BOT ERROR] (node:2591) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T03:44:15.541Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T03:44:15.541Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-28T03:44:15.541Z] [BOT] 💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T03:44:15.542Z] [BOT] ✅ Loaded V2 database: 326 jobs
[2026-01-28T03:44:15.543Z] [BOT] 💾 DISK STATE: 326 jobs on disk
[2026-01-28T03:44:15.543Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T03:44:15.544Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T03:44:15.544Z] [BOT] 💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T03:44:15.544Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T03:44:15.549Z] [BOT] 📦 Archived 14 jobs to 2026-01.json (14 total in archive)
[2026-01-28T03:44:15.549Z] [BOT] ✅ Archiving complete: 14 archived, 312 active
[2026-01-28T03:44:15.553Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:17.056Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-28T03:44:17.056Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T03:44:17.336Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-28T03:44:17.336Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:17.338Z] [BOT] ✅ Loaded V2 database: 312 jobs
[2026-01-28T03:44:17.338Z] [BOT] 💾 DISK STATE: 312 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T03:44:17.338Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T03:44:17.339Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:17.342Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
[2026-01-28T03:44:17.342Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:18.843Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-28T03:44:18.843Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T03:44:19.066Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-28T03:44:19.066Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:19.067Z] [BOT] ✅ Loaded V2 database: 312 jobs
💾 DISK STATE: 312 jobs on disk
[2026-01-28T03:44:19.067Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T03:44:19.068Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T03:44:19.068Z] [BOT] 💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T03:44:19.068Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:19.071Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
[2026-01-28T03:44:19.071Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:20.573Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T03:44:20.770Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-28T03:44:20.770Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:20.771Z] [BOT] ✅ Loaded V2 database: 312 jobs
💾 DISK STATE: 312 jobs on disk
[2026-01-28T03:44:20.771Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T03:44:20.772Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T03:44:20.772Z] [BOT] 💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T03:44:20.773Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:20.775Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:25.277Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-28T03:44:25.278Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-28T03:44:25.278Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T03:44:25.544Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-28T03:44:25.544Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:25.545Z] [BOT] ✅ Loaded V2 database: 312 jobs
[2026-01-28T03:44:25.545Z] [BOT] 💾 DISK STATE: 312 jobs on disk
[2026-01-28T03:44:25.545Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T03:44:25.546Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T03:44:25.546Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:25.550Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:27.052Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-28T03:44:27.052Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T03:44:27.287Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T03:44:27.287Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:27.288Z] [BOT] ✅ Loaded V2 database: 312 jobs
💾 DISK STATE: 312 jobs on disk
[2026-01-28T03:44:27.289Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T03:44:27.289Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T03:44:27.289Z] [BOT] 💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T03:44:27.290Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:27.292Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:28.793Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-28T03:44:28.794Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T03:44:29.021Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T03:44:29.021Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:29.022Z] [BOT] ✅ Loaded V2 database: 312 jobs
💾 DISK STATE: 312 jobs on disk
[2026-01-28T03:44:29.022Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T03:44:29.023Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T03:44:29.023Z] [BOT] 💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T03:44:29.023Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:29.026Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:30.527Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T03:44:30.527Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T03:44:30.823Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-28T03:44:30.823Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:30.824Z] [BOT] ✅ Loaded V2 database: 312 jobs
💾 DISK STATE: 312 jobs on disk
[2026-01-28T03:44:30.825Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T03:44:30.826Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T03:44:30.826Z] [BOT] 💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T03:44:30.826Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:30.830Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:32.330Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-28T03:44:32.331Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T03:44:32.524Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-28T03:44:32.524Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-28T03:44:32.524Z] [BOT] 💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:32.525Z] [BOT] ✅ Loaded V2 database: 312 jobs
💾 DISK STATE: 312 jobs on disk
[2026-01-28T03:44:32.525Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T03:44:32.526Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T03:44:32.526Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:32.530Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:37.032Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T03:44:37.032Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-28T03:44:37.032Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T03:44:37.408Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-28T03:44:37.408Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-28T03:44:37.408Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:37.409Z] [BOT] ✅ Loaded V2 database: 312 jobs
[2026-01-28T03:44:37.409Z] [BOT] 💾 DISK STATE: 312 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T03:44:37.410Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T03:44:37.411Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:37.414Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
[2026-01-28T03:44:37.414Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:41.917Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T03:44:41.918Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T03:44:42.033Z] [BOT] 📂 Loaded 9701 existing routing entries
[2026-01-28T03:44:42.143Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9711
[2026-01-28T03:44:42.143Z] [BOT] Timestamp: 2026-01-28T03:44:42.102Z
[2026-01-28T03:44:42.143Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
[2026-01-28T03:44:42.143Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-28T03:44:42.144Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
[2026-01-28T03:44:42.144Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-28T03:44:42.144Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T03:44:42.151Z] [BOT] ✅ Loaded V2 database: 312 jobs
💾 DISK STATE: 312 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=312
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 312 jobs (merged disk + memory)
✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-28T03:44:42.154Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T03:44:42.154Z] [BOT] ✅ Database saved successfully
[2026-01-28T03:44:44.168Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2591) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*