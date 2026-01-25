# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T02:44:18.781Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T02:43:47.277Z] ========================================
[2026-01-25T02:43:47.279Z] Discord Bot Execution Log
[2026-01-25T02:43:47.279Z] Environment: GitHub Actions
[2026-01-25T02:43:47.279Z] Node Version: v20.20.0
[2026-01-25T02:43:47.279Z] ========================================
[2026-01-25T02:43:47.279Z] Environment Variables Check:
[2026-01-25T02:43:47.279Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T02:43:47.279Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.280Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T02:43:47.280Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T02:43:47.280Z] 
Multi-Channel Configuration:
[2026-01-25T02:43:47.280Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.280Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.280Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.280Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.280Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.280Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.280Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.280Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.280Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T02:43:47.281Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T02:43:47.281Z] 
Data Files Check:
[2026-01-25T02:43:47.282Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T02:43:47.287Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 648989 bytes)
[2026-01-25T02:43:47.287Z] 
========================================
[2026-01-25T02:43:47.287Z] Starting Enhanced Discord Bot...
[2026-01-25T02:43:47.287Z] ========================================
[2026-01-25T02:43:47.801Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T02:43:48.697Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T02:43:48.698Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T02:43:48.698Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T02:43:48.813Z] [BOT] ✅ Loaded pending queue: 2853 total (2803 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T02:43:48.818Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T02:43:48.818Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T02:43:48.818Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T02:43:48.819Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T02:43:48.820Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T02:43:48.820Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T02:43:48.823Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T02:43:48.824Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T02:43:48.824Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T02:43:48.825Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:43:48.841Z] [BOT ERROR] (node:2581) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T02:43:49.110Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T02:43:49.110Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T02:43:49.111Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T02:43:49.111Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T02:43:49.115Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T02:43:49.115Z] [BOT] 💾 DISK STATE: 1141 jobs on disk
[2026-01-25T02:43:49.117Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T02:43:49.118Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T02:43:49.123Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-25T02:43:49.123Z] [BOT] ✅ Archiving complete: 2 archived, 1139 active
[2026-01-25T02:43:49.133Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
[2026-01-25T02:43:49.133Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T02:43:50.634Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T02:43:50.634Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T02:43:50.635Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:43:50.829Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T02:43:50.830Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T02:43:50.830Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T02:43:50.833Z] [BOT] ✅ Loaded V2 database: 1139 jobs
[2026-01-25T02:43:50.833Z] [BOT] 💾 DISK STATE: 1139 jobs on disk
[2026-01-25T02:43:50.835Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T02:43:50.836Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-25T02:43:50.843Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T02:43:52.345Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T02:43:52.345Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:43:52.556Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T02:43:52.556Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T02:43:52.556Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T02:43:52.556Z] [BOT] 💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T02:43:52.559Z] [BOT] ✅ Loaded V2 database: 1139 jobs
[2026-01-25T02:43:52.560Z] [BOT] 💾 DISK STATE: 1139 jobs on disk
[2026-01-25T02:43:52.561Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T02:43:52.562Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-25T02:43:52.571Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
[2026-01-25T02:43:52.571Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T02:43:54.073Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T02:43:54.073Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T02:43:54.073Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:43:54.319Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T02:43:54.319Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T02:43:54.319Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T02:43:54.320Z] [BOT] 💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T02:43:54.323Z] [BOT] ✅ Loaded V2 database: 1139 jobs
💾 DISK STATE: 1139 jobs on disk
[2026-01-25T02:43:54.324Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T02:43:54.325Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-25T02:43:54.332Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
[2026-01-25T02:43:54.332Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T02:43:58.835Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T02:43:58.835Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T02:43:58.835Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T02:43:58.836Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:43:59.097Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T02:43:59.098Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T02:43:59.098Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T02:43:59.098Z] [BOT] 💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T02:43:59.102Z] [BOT] ✅ Loaded V2 database: 1139 jobs
💾 DISK STATE: 1139 jobs on disk
[2026-01-25T02:43:59.104Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T02:43:59.105Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-25T02:43:59.114Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
[2026-01-25T02:43:59.115Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T02:44:00.616Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T02:44:00.616Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T02:44:00.616Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:44:00.814Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T02:44:00.814Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T02:44:00.818Z] [BOT] ✅ Loaded V2 database: 1139 jobs
💾 DISK STATE: 1139 jobs on disk
[2026-01-25T02:44:00.819Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T02:44:00.820Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-25T02:44:00.829Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
[2026-01-25T02:44:00.829Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T02:44:02.331Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T02:44:02.331Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T02:44:02.331Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:44:02.546Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T02:44:02.547Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T02:44:02.547Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T02:44:02.551Z] [BOT] ✅ Loaded V2 database: 1139 jobs
💾 DISK STATE: 1139 jobs on disk
[2026-01-25T02:44:02.552Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T02:44:02.553Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-25T02:44:02.561Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
[2026-01-25T02:44:02.561Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T02:44:04.063Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-25T02:44:04.063Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T02:44:04.063Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:44:04.604Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T02:44:04.604Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T02:44:04.605Z] [BOT] 💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T02:44:04.608Z] [BOT] ✅ Loaded V2 database: 1139 jobs
💾 DISK STATE: 1139 jobs on disk
[2026-01-25T02:44:04.611Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T02:44:04.611Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-25T02:44:04.619Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
[2026-01-25T02:44:04.619Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T02:44:06.121Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T02:44:06.121Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T02:44:06.121Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:44:06.268Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T02:44:06.269Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T02:44:06.269Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T02:44:06.269Z] [BOT] 💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T02:44:06.272Z] [BOT] ✅ Loaded V2 database: 1139 jobs
[2026-01-25T02:44:06.273Z] [BOT] 💾 DISK STATE: 1139 jobs on disk
[2026-01-25T02:44:06.274Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T02:44:06.274Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-25T02:44:06.282Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T02:44:10.782Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T02:44:10.783Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T02:44:10.783Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T02:44:10.783Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T02:44:11.027Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T02:44:11.028Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T02:44:11.028Z] [BOT] 💾 BEFORE MERGE: 1139 jobs in memory
[2026-01-25T02:44:11.032Z] [BOT] ✅ Loaded V2 database: 1139 jobs
💾 DISK STATE: 1139 jobs on disk
[2026-01-25T02:44:11.033Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-25T02:44:11.034Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-25T02:44:11.043Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
[2026-01-25T02:44:11.043Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T02:44:15.544Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T02:44:15.545Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T02:44:15.633Z] [BOT] 📂 Loaded 8321 existing routing entries
[2026-01-25T02:44:15.748Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T02:44:15.749Z] [BOT] Total entries: 8331
   Timestamp: 2026-01-25T02:44:15.710Z
[2026-01-25T02:44:15.749Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T02:44:15.749Z] [BOT] Total attempts: 10
[2026-01-25T02:44:15.749Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T02:44:15.749Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T02:44:15.750Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-25T02:44:15.750Z] [BOT] 3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T02:44:17.768Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2581) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*