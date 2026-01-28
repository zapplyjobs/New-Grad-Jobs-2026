# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T15:22:02.306Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T15:21:31.094Z] ========================================
[2026-01-28T15:21:31.096Z] Discord Bot Execution Log
[2026-01-28T15:21:31.096Z] Environment: GitHub Actions
[2026-01-28T15:21:31.096Z] Node Version: v20.20.0
[2026-01-28T15:21:31.096Z] ========================================
[2026-01-28T15:21:31.096Z] Environment Variables Check:
[2026-01-28T15:21:31.097Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T15:21:31.097Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.097Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T15:21:31.097Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T15:21:31.097Z] 
Multi-Channel Configuration:
[2026-01-28T15:21:31.097Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.097Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.097Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.097Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.097Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.097Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.097Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.098Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.098Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T15:21:31.098Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T15:21:31.098Z] 
Data Files Check:
[2026-01-28T15:21:31.099Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-28T15:21:31.100Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 79060 bytes)
[2026-01-28T15:21:31.100Z] 
========================================
[2026-01-28T15:21:31.100Z] Starting Enhanced Discord Bot...
[2026-01-28T15:21:31.100Z] ========================================
[2026-01-28T15:21:31.626Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2026-01-28T15:21:32.087Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-28T15:21:32.087Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T15:21:32.087Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T15:21:32.209Z] [BOT] ✅ Loaded pending queue: 2991 total (2941 pending, 50 enriched, 0 posted)
[2026-01-28T15:21:32.209Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-28T15:21:32.212Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T15:21:32.212Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-28T15:21:32.212Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-28T15:21:32.213Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-28T15:21:32.213Z] [BOT] (2 grouped as same job with different locations)
[2026-01-28T15:21:32.214Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T15:21:32.217Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-28T15:21:32.218Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T15:21:32.218Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T15:21:32.235Z] [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T15:21:32.486Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-28T15:21:32.487Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T15:21:32.487Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-28T15:21:32.487Z] [BOT] 💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T15:21:32.488Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2026-01-28T15:21:32.488Z] [BOT] 💾 DISK STATE: 134 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T15:21:32.489Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T15:21:32.489Z] [BOT] 💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T15:21:32.490Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T15:21:32.495Z] [BOT] 📦 Archived 46 jobs to 2026-01.json (46 total in archive)
[2026-01-28T15:21:32.495Z] [BOT] ✅ Archiving complete: 46 archived, 88 active
[2026-01-28T15:21:32.497Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
[2026-01-28T15:21:32.497Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:34.000Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T15:21:34.214Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-28T15:21:34.214Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:34.215Z] [BOT] ✅ Loaded V2 database: 88 jobs
💾 DISK STATE: 88 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:34.215Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T15:21:34.215Z] [BOT] 💾 AFTER MERGE: 88 jobs (merged disk + memory)
[2026-01-28T15:21:34.216Z] [BOT] ✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:34.217Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:35.718Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-28T15:21:35.719Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T15:21:35.976Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-28T15:21:35.976Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:35.976Z] [BOT] ✅ Loaded V2 database: 88 jobs
[2026-01-28T15:21:35.976Z] [BOT] 💾 DISK STATE: 88 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:35.977Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T15:21:35.977Z] [BOT] 💾 AFTER MERGE: 88 jobs (merged disk + memory)
[2026-01-28T15:21:35.977Z] [BOT] ✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:35.978Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
[2026-01-28T15:21:35.978Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:37.478Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-28T15:21:37.478Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T15:21:37.677Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-28T15:21:37.677Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:37.677Z] [BOT] ✅ Loaded V2 database: 88 jobs
[2026-01-28T15:21:37.678Z] [BOT] 💾 DISK STATE: 88 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:37.678Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 88 jobs (merged disk + memory)
[2026-01-28T15:21:37.678Z] [BOT] ✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:37.680Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:42.182Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-28T15:21:42.182Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-28T15:21:42.182Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T15:21:42.400Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-28T15:21:42.401Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:42.401Z] [BOT] ✅ Loaded V2 database: 88 jobs
💾 DISK STATE: 88 jobs on disk
[2026-01-28T15:21:42.401Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:42.402Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 88 jobs (merged disk + memory)
[2026-01-28T15:21:42.402Z] [BOT] ✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:42.404Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
[2026-01-28T15:21:42.404Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:43.905Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T15:21:43.905Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T15:21:44.154Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T15:21:44.154Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:44.155Z] [BOT] ✅ Loaded V2 database: 88 jobs
[2026-01-28T15:21:44.155Z] [BOT] 💾 DISK STATE: 88 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:44.155Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T15:21:44.155Z] [BOT] 💾 AFTER MERGE: 88 jobs (merged disk + memory)
✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:44.157Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
[2026-01-28T15:21:44.157Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:45.659Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-28T15:21:45.659Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T15:21:45.869Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T15:21:45.869Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:45.870Z] [BOT] ✅ Loaded V2 database: 88 jobs
[2026-01-28T15:21:45.870Z] [BOT] 💾 DISK STATE: 88 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:45.871Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T15:21:45.871Z] [BOT] 💾 AFTER MERGE: 88 jobs (merged disk + memory)
[2026-01-28T15:21:45.871Z] [BOT] ✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:45.873Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:47.374Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-28T15:21:47.374Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T15:21:47.559Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-28T15:21:47.559Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:47.559Z] [BOT] ✅ Loaded V2 database: 88 jobs
💾 DISK STATE: 88 jobs on disk
[2026-01-28T15:21:47.560Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:47.560Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 88 jobs (merged disk + memory)
[2026-01-28T15:21:47.560Z] [BOT] ✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:47.561Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
[2026-01-28T15:21:47.562Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:49.063Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T15:21:49.063Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T15:21:49.252Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-28T15:21:49.252Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:49.253Z] [BOT] ✅ Loaded V2 database: 88 jobs
[2026-01-28T15:21:49.253Z] [BOT] 💾 DISK STATE: 88 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:49.254Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 88 jobs (merged disk + memory)
✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:49.256Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:53.758Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T15:21:53.758Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-28T15:21:53.758Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T15:21:54.091Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-28T15:21:54.092Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-28T15:21:54.092Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:54.093Z] [BOT] ✅ Loaded V2 database: 88 jobs
[2026-01-28T15:21:54.093Z] [BOT] 💾 DISK STATE: 88 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:54.093Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T15:21:54.093Z] [BOT] 💾 AFTER MERGE: 88 jobs (merged disk + memory)
[2026-01-28T15:21:54.094Z] [BOT] ✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:54.095Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
[2026-01-28T15:21:54.095Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T15:21:58.598Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T15:21:58.599Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T15:21:58.705Z] [BOT] 📂 Loaded 9751 existing routing entries
[2026-01-28T15:21:58.829Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-28T15:21:58.829Z] [BOT] Total entries: 9761
   Timestamp: 2026-01-28T15:21:58.781Z
[2026-01-28T15:21:58.830Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
[2026-01-28T15:21:58.830Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-28T15:21:58.830Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-28T15:21:58.830Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-28T15:21:58.830Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-28T15:21:58.830Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T15:21:58.831Z] [BOT] ✅ Loaded V2 database: 88 jobs
💾 DISK STATE: 88 jobs on disk
[2026-01-28T15:21:58.831Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T15:21:58.836Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 88 jobs (merged disk + memory)
✅ No jobs to archive (all 88 jobs within 7-day window)
[2026-01-28T15:21:58.839Z] [BOT] 💾 Saved posted_jobs.json: 88 active jobs
[2026-01-28T15:21:58.839Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-28T15:22:00.856Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*