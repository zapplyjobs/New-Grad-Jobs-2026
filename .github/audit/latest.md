# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T04:12:23.478Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T04:11:51.996Z] ========================================
[2026-01-25T04:11:51.997Z] Discord Bot Execution Log
[2026-01-25T04:11:51.997Z] Environment: GitHub Actions
[2026-01-25T04:11:51.998Z] Node Version: v20.20.0
[2026-01-25T04:11:51.998Z] ========================================
[2026-01-25T04:11:51.998Z] Environment Variables Check:
[2026-01-25T04:11:51.998Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T04:11:51.998Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.998Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T04:11:51.998Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T04:11:51.998Z] 
Multi-Channel Configuration:
[2026-01-25T04:11:51.998Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.998Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.999Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.999Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.999Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.999Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.999Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.999Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.999Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T04:11:51.999Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T04:11:51.999Z] 
Data Files Check:
[2026-01-25T04:11:52.000Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T04:11:52.005Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 639900 bytes)
[2026-01-25T04:11:52.005Z] 
========================================
[2026-01-25T04:11:52.005Z] Starting Enhanced Discord Bot...
[2026-01-25T04:11:52.005Z] ========================================
[2026-01-25T04:11:52.524Z] [BOT] ✅ Loaded V2 database: 1124 jobs
[2026-01-25T04:11:52.985Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T04:11:52.985Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T04:11:52.985Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T04:11:53.106Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T04:11:53.109Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T04:11:53.110Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T04:11:53.110Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T04:11:53.111Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T04:11:53.111Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T04:11:53.111Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T04:11:53.115Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T04:11:53.115Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T04:11:53.115Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:11:53.116Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:11:53.134Z] [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T04:11:53.433Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T04:11:53.433Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T04:11:53.434Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T04:11:53.434Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:11:53.438Z] [BOT] ✅ Loaded V2 database: 1124 jobs
[2026-01-25T04:11:53.438Z] [BOT] 💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:11:53.441Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:11:53.441Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:11:53.453Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-25T04:11:53.454Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:11:54.956Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:11:54.957Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:11:55.419Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T04:11:55.420Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T04:11:55.420Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:11:55.423Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:11:55.425Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:11:55.426Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:11:55.435Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:11:56.936Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T04:11:56.936Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:11:56.936Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:11:57.106Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T04:11:57.106Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T04:11:57.106Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T04:11:57.107Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:11:57.110Z] [BOT] ✅ Loaded V2 database: 1124 jobs
[2026-01-25T04:11:57.110Z] [BOT] 💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:11:57.112Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:11:57.113Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:11:57.122Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-25T04:11:57.122Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:11:58.623Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T04:11:58.623Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:11:58.624Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:11:58.919Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T04:11:58.919Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T04:11:58.919Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T04:11:58.920Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:11:58.923Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:11:58.925Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:11:58.925Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:11:58.935Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-25T04:11:58.936Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:12:03.437Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T04:12:03.438Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T04:12:03.438Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:12:03.438Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:12:03.665Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T04:12:03.666Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T04:12:03.666Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:12:03.670Z] [BOT] ✅ Loaded V2 database: 1124 jobs
[2026-01-25T04:12:03.670Z] [BOT] 💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:12:03.673Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:12:03.674Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:12:03.684Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-25T04:12:03.684Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:12:05.186Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T04:12:05.186Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:12:05.186Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:12:05.384Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T04:12:05.384Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T04:12:05.384Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:12:05.387Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:12:05.390Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:12:05.391Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:12:05.400Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-25T04:12:05.400Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:12:06.902Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T04:12:06.902Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:12:06.902Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:12:07.107Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T04:12:07.107Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T04:12:07.107Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:12:07.111Z] [BOT] ✅ Loaded V2 database: 1124 jobs
[2026-01-25T04:12:07.111Z] [BOT] 💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:12:07.113Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:12:07.114Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:12:07.122Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-25T04:12:07.123Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:12:08.623Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T04:12:08.624Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:12:08.624Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:12:08.778Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T04:12:08.778Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T04:12:08.779Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:12:08.782Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:12:08.786Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:12:08.787Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:12:08.796Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-25T04:12:08.796Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:12:10.297Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T04:12:10.297Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:12:10.644Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T04:12:10.644Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T04:12:10.644Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T04:12:10.644Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:12:10.648Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:12:10.650Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:12:10.651Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:12:10.660Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-25T04:12:10.660Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:12:15.161Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T04:12:15.162Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T04:12:15.162Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T04:12:15.163Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:12:15.451Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T04:12:15.451Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T04:12:15.451Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:12:15.455Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:12:15.457Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:12:15.457Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:12:15.466Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
[2026-01-25T04:12:15.466Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T04:12:19.968Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T04:12:19.970Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T04:12:20.069Z] [BOT] 📂 Loaded 8351 existing routing entries
[2026-01-25T04:12:20.169Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8361
[2026-01-25T04:12:20.169Z] [BOT] Timestamp: 2026-01-25T04:12:20.129Z
[2026-01-25T04:12:20.169Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T04:12:20.169Z] [BOT] Total attempts: 10
   Successful: 10
[2026-01-25T04:12:20.169Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-25T04:12:20.170Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T04:12:20.170Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T04:12:20.170Z] [BOT] [STATS] Channel stats saved
[2026-01-25T04:12:22.188Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*