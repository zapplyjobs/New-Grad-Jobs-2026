# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T01:59:58.667Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T01:59:27.167Z] ========================================
[2026-01-25T01:59:27.169Z] Discord Bot Execution Log
[2026-01-25T01:59:27.169Z] Environment: GitHub Actions
[2026-01-25T01:59:27.169Z] Node Version: v20.20.0
[2026-01-25T01:59:27.170Z] ========================================
[2026-01-25T01:59:27.170Z] Environment Variables Check:
[2026-01-25T01:59:27.170Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T01:59:27.170Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.170Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T01:59:27.170Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T01:59:27.170Z] 
Multi-Channel Configuration:
[2026-01-25T01:59:27.170Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.170Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.171Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.171Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.171Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.171Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.171Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.171Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.171Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T01:59:27.171Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T01:59:27.171Z] 
Data Files Check:
[2026-01-25T01:59:27.172Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T01:59:27.177Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 648989 bytes)
[2026-01-25T01:59:27.177Z] 
========================================
[2026-01-25T01:59:27.177Z] Starting Enhanced Discord Bot...
[2026-01-25T01:59:27.177Z] ========================================
[2026-01-25T01:59:27.716Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T01:59:28.366Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T01:59:28.367Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T01:59:28.367Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T01:59:28.485Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T01:59:28.488Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T01:59:28.489Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T01:59:28.489Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T01:59:28.490Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T01:59:28.490Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T01:59:28.490Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T01:59:28.491Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T01:59:28.494Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T01:59:28.494Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T01:59:28.495Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T01:59:28.495Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:28.512Z] [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T01:59:28.893Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T01:59:28.893Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T01:59:28.894Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T01:59:28.894Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:28.898Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:28.900Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:28.901Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:28.914Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-25T01:59:28.914Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:30.415Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T01:59:30.415Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:30.619Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T01:59:30.619Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T01:59:30.620Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T01:59:30.620Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:30.623Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T01:59:30.623Z] [BOT] 💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:30.625Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:30.625Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:30.634Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:32.134Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T01:59:32.134Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:32.339Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T01:59:32.339Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T01:59:32.340Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T01:59:32.340Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:32.343Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:32.345Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:32.345Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:32.354Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:33.856Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T01:59:33.856Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:34.052Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T01:59:34.052Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T01:59:34.052Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:34.056Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:34.057Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:34.057Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:34.065Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:38.567Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T01:59:38.568Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T01:59:38.568Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T01:59:38.568Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:38.841Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T01:59:38.842Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:38.847Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:38.848Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:38.849Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:38.859Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:40.361Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T01:59:40.361Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T01:59:40.361Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:40.569Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T01:59:40.569Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T01:59:40.570Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T01:59:40.570Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:40.573Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T01:59:40.573Z] [BOT] 💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:40.575Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:40.575Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:40.586Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:42.086Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T01:59:42.087Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T01:59:42.087Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:42.345Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T01:59:42.346Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T01:59:42.346Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:42.349Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:42.351Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:42.351Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:42.360Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:43.860Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T01:59:43.860Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T01:59:43.860Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:44.106Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T01:59:44.106Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T01:59:44.106Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:44.110Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:44.111Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:44.112Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:44.120Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-25T01:59:44.120Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:45.621Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T01:59:45.622Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:45.837Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T01:59:45.837Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T01:59:45.837Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T01:59:45.838Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:45.841Z] [BOT] ✅ Loaded V2 database: 1141 jobs
[2026-01-25T01:59:45.841Z] [BOT] 💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:45.843Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:45.843Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:45.851Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:50.353Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T01:59:50.354Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T01:59:50.354Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T01:59:50.354Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T01:59:50.566Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T01:59:50.567Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T01:59:50.567Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory
[2026-01-25T01:59:50.570Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-25T01:59:50.572Z] [BOT] 💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-25T01:59:50.573Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-25T01:59:50.580Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-25T01:59:50.581Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T01:59:55.082Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T01:59:55.084Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T01:59:55.179Z] [BOT] 📂 Loaded 8311 existing routing entries
[2026-01-25T01:59:55.296Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T01:59:55.296Z] [BOT] Total entries: 8321
   Timestamp: 2026-01-25T01:59:55.257Z
[2026-01-25T01:59:55.296Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T01:59:55.296Z] [BOT] Total attempts: 10
   Successful: 10
[2026-01-25T01:59:55.296Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-25T01:59:55.297Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T01:59:55.297Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-25T01:59:55.297Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-25T01:59:55.297Z] [BOT] [STATS] Channel stats saved
[2026-01-25T01:59:57.314Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*