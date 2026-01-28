# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T12:22:43.867Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T12:22:12.835Z] ========================================
[2026-01-28T12:22:12.836Z] Discord Bot Execution Log
[2026-01-28T12:22:12.837Z] Environment: GitHub Actions
[2026-01-28T12:22:12.837Z] Node Version: v20.20.0
[2026-01-28T12:22:12.837Z] ========================================
[2026-01-28T12:22:12.837Z] Environment Variables Check:
[2026-01-28T12:22:12.837Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T12:22:12.837Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.837Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T12:22:12.837Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T12:22:12.837Z] 
Multi-Channel Configuration:
[2026-01-28T12:22:12.837Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.837Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.837Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.837Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.837Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.837Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.837Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.837Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.838Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T12:22:12.838Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T12:22:12.838Z] 
Data Files Check:
[2026-01-28T12:22:12.839Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-28T12:22:12.839Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 105952 bytes)
[2026-01-28T12:22:12.840Z] 
========================================
[2026-01-28T12:22:12.840Z] Starting Enhanced Discord Bot...
[2026-01-28T12:22:12.840Z] ========================================
[2026-01-28T12:22:13.301Z] [BOT] ✅ Loaded V2 database: 182 jobs
[2026-01-28T12:22:13.790Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-28T12:22:13.790Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T12:22:13.791Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T12:22:13.950Z] [BOT] ✅ Loaded pending queue: 2989 total (2939 pending, 50 enriched, 0 posted)
[2026-01-28T12:22:13.950Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-28T12:22:13.950Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-28T12:22:13.953Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T12:22:13.954Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-28T12:22:13.954Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-28T12:22:13.955Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-28T12:22:13.955Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-28T12:22:13.955Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T12:22:13.959Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-28T12:22:13.959Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T12:22:13.960Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T12:22:13.975Z] [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T12:22:14.205Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-28T12:22:14.205Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T12:22:14.206Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-28T12:22:14.206Z] [BOT] 💾 BEFORE MERGE: 182 jobs in memory (cached)
[2026-01-28T12:22:14.207Z] [BOT] ✅ Loaded V2 database: 182 jobs
💾 DISK STATE: 182 jobs on disk
[2026-01-28T12:22:14.207Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=182
[2026-01-28T12:22:14.208Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T12:22:14.208Z] [BOT] 💾 AFTER MERGE: 182 jobs (merged disk + memory)
[2026-01-28T12:22:14.208Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T12:22:14.213Z] [BOT] 📦 Archived 48 jobs to 2026-01.json (48 total in archive)
[2026-01-28T12:22:14.213Z] [BOT] ✅ Archiving complete: 48 archived, 134 active
[2026-01-28T12:22:14.216Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
[2026-01-28T12:22:14.216Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:15.718Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T12:22:15.930Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-28T12:22:15.930Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:15.931Z] [BOT] ✅ Loaded V2 database: 134 jobs
💾 DISK STATE: 134 jobs on disk
[2026-01-28T12:22:15.931Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T12:22:15.932Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T12:22:15.932Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:15.934Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:17.435Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-28T12:22:17.435Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T12:22:17.631Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-28T12:22:17.631Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:17.632Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2026-01-28T12:22:17.632Z] [BOT] 💾 DISK STATE: 134 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T12:22:17.633Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T12:22:17.633Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:17.634Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:19.135Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T12:22:19.485Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-28T12:22:19.486Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:19.486Z] [BOT] ✅ Loaded V2 database: 134 jobs
💾 DISK STATE: 134 jobs on disk
[2026-01-28T12:22:19.487Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T12:22:19.487Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T12:22:19.487Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:19.489Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:23.992Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-28T12:22:23.993Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-28T12:22:23.993Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T12:22:24.413Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-28T12:22:24.413Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:24.414Z] [BOT] ✅ Loaded V2 database: 134 jobs
💾 DISK STATE: 134 jobs on disk
[2026-01-28T12:22:24.414Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T12:22:24.415Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T12:22:24.415Z] [BOT] 💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T12:22:24.415Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:24.417Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
[2026-01-28T12:22:24.418Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:25.919Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T12:22:25.919Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T12:22:26.106Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-28T12:22:26.106Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:26.106Z] [BOT] ✅ Loaded V2 database: 134 jobs
💾 DISK STATE: 134 jobs on disk
[2026-01-28T12:22:26.107Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T12:22:26.107Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T12:22:26.107Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:26.109Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:27.610Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-28T12:22:27.610Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T12:22:28.069Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T12:22:28.069Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:28.070Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2026-01-28T12:22:28.071Z] [BOT] 💾 DISK STATE: 134 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T12:22:28.071Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T12:22:28.071Z] [BOT] 💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T12:22:28.071Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:28.073Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:29.573Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-28T12:22:29.574Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T12:22:29.751Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-28T12:22:29.752Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:29.752Z] [BOT] ✅ Loaded V2 database: 134 jobs
💾 DISK STATE: 134 jobs on disk
[2026-01-28T12:22:29.752Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T12:22:29.753Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T12:22:29.753Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:29.755Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:31.256Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T12:22:31.256Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T12:22:31.477Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-28T12:22:31.477Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:31.479Z] [BOT] ✅ Loaded V2 database: 134 jobs
💾 DISK STATE: 134 jobs on disk
[2026-01-28T12:22:31.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T12:22:31.479Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T12:22:31.479Z] [BOT] 💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T12:22:31.479Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:31.481Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:35.983Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T12:22:35.983Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-28T12:22:35.983Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T12:22:36.255Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-28T12:22:36.255Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-28T12:22:36.255Z] [BOT] 💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:36.256Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2026-01-28T12:22:36.256Z] [BOT] 💾 DISK STATE: 134 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=134
[2026-01-28T12:22:36.257Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T12:22:36.257Z] [BOT] 💾 AFTER MERGE: 134 jobs (merged disk + memory)
[2026-01-28T12:22:36.257Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:36.259Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
[2026-01-28T12:22:36.259Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:40.761Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T12:22:40.762Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T12:22:40.879Z] [BOT] 📂 Loaded 9741 existing routing entries
[2026-01-28T12:22:40.991Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9751
[2026-01-28T12:22:40.991Z] [BOT] Timestamp: 2026-01-28T12:22:40.949Z
[2026-01-28T12:22:40.992Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-28T12:22:40.992Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-28T12:22:40.992Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-28T12:22:40.992Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-28T12:22:40.992Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-28T12:22:40.992Z] [BOT] [STATS] Channel stats saved
[2026-01-28T12:22:40.992Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 134 jobs in memory (cached)
[2026-01-28T12:22:40.998Z] [BOT] ✅ Loaded V2 database: 134 jobs
💾 DISK STATE: 134 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=134
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 134 jobs (merged disk + memory)
✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-28T12:22:41.002Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T12:22:41.002Z] [BOT] ✅ Database saved successfully
[2026-01-28T12:22:43.017Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*