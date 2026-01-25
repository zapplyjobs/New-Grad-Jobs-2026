# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T04:04:53.930Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T04:04:20.834Z] ========================================
[2026-01-25T04:04:20.836Z] Discord Bot Execution Log
[2026-01-25T04:04:20.836Z] Environment: GitHub Actions
[2026-01-25T04:04:20.836Z] Node Version: v20.20.0
[2026-01-25T04:04:20.836Z] ========================================
[2026-01-25T04:04:20.836Z] Environment Variables Check:
[2026-01-25T04:04:20.836Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T04:04:20.837Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T04:04:20.837Z] 
Multi-Channel Configuration:
[2026-01-25T04:04:20.837Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T04:04:20.837Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T04:04:20.838Z] 
Data Files Check:
[2026-01-25T04:04:20.839Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T04:04:20.844Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 643798 bytes)
[2026-01-25T04:04:20.844Z] 
========================================
[2026-01-25T04:04:20.844Z] Starting Enhanced Discord Bot...
[2026-01-25T04:04:20.844Z] ========================================
[2026-01-25T04:04:21.309Z] [BOT] ✅ Loaded V2 database: 1132 jobs
[2026-01-25T04:04:22.462Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T04:04:22.463Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T04:04:22.463Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T04:04:22.618Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T04:04:22.621Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T04:04:22.622Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T04:04:22.622Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T04:04:22.623Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-25T04:04:22.623Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T04:04:22.627Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T04:04:22.627Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T04:04:22.628Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:04:22.628Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:22.644Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T04:04:22.988Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T04:04:22.989Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T04:04:22.989Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory
[2026-01-25T04:04:22.994Z] [BOT] ✅ Loaded V2 database: 1132 jobs
[2026-01-25T04:04:22.994Z] [BOT] 💾 DISK STATE: 1132 jobs on disk
[2026-01-25T04:04:22.996Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-25T04:04:22.997Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T04:04:23.002Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
[2026-01-25T04:04:23.002Z] [BOT] ✅ Archiving complete: 8 archived, 1124 active
[2026-01-25T04:04:23.011Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:24.514Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T04:04:24.514Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:04:24.514Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:24.721Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T04:04:24.722Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:04:24.726Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:04:24.728Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:04:24.729Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:04:24.738Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:26.238Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:04:26.239Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:26.456Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T04:04:26.457Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T04:04:26.457Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:04:26.461Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:04:26.463Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:04:26.464Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:04:26.473Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:27.974Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T04:04:27.975Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:28.178Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T04:04:28.178Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T04:04:28.178Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:04:28.183Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:04:28.185Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:04:28.186Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:04:28.195Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:32.696Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T04:04:32.696Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T04:04:32.696Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:04:32.697Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:34.659Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T04:04:34.659Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T04:04:34.659Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:04:34.665Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:04:34.668Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:04:34.669Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:04:34.677Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:36.178Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T04:04:36.178Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:04:36.179Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:36.342Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T04:04:36.343Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T04:04:36.343Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:04:36.348Z] [BOT] ✅ Loaded V2 database: 1124 jobs
[2026-01-25T04:04:36.348Z] [BOT] 💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:04:36.351Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:04:36.352Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:04:36.360Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:37.861Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T04:04:37.861Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:04:37.862Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:38.066Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T04:04:38.066Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T04:04:38.067Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T04:04:38.067Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:04:38.075Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:04:38.077Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:04:38.078Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:04:38.087Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:39.587Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T04:04:39.588Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:04:39.588Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:39.974Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T04:04:39.974Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T04:04:39.974Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T04:04:39.974Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:04:39.978Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:04:39.980Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:04:39.981Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:04:39.990Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:41.490Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T04:04:41.490Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T04:04:41.490Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:41.660Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T04:04:41.660Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T04:04:41.660Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T04:04:41.661Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:04:41.665Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:04:41.667Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:04:41.668Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:04:41.679Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:46.180Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T04:04:46.180Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T04:04:46.181Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T04:04:46.181Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T04:04:46.447Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T04:04:46.447Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T04:04:46.448Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T04:04:46.448Z] [BOT] 💾 BEFORE MERGE: 1124 jobs in memory
[2026-01-25T04:04:46.452Z] [BOT] ✅ Loaded V2 database: 1124 jobs
💾 DISK STATE: 1124 jobs on disk
[2026-01-25T04:04:46.454Z] [BOT] 💾 AFTER MERGE: 1124 jobs (merged disk + memory)
[2026-01-25T04:04:46.455Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-25T04:04:46.463Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T04:04:50.966Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T04:04:50.968Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T04:04:51.069Z] [BOT] 📂 Loaded 8341 existing routing entries
[2026-01-25T04:04:51.181Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8351
   Timestamp: 2026-01-25T04:04:51.145Z
[2026-01-25T04:04:51.181Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T04:04:51.181Z] [BOT] Total attempts: 10
[2026-01-25T04:04:51.181Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T04:04:51.182Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T04:04:51.182Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T04:04:51.182Z] [BOT] [STATS] Channel stats saved
[2026-01-25T04:04:53.196Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*