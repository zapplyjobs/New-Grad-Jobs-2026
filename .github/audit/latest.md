# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T23:30:57.990Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T23:30:26.926Z] ========================================
[2026-01-25T23:30:26.928Z] Discord Bot Execution Log
[2026-01-25T23:30:26.928Z] Environment: GitHub Actions
[2026-01-25T23:30:26.928Z] Node Version: v20.20.0
[2026-01-25T23:30:26.928Z] ========================================
[2026-01-25T23:30:26.928Z] Environment Variables Check:
[2026-01-25T23:30:26.928Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T23:30:26.928Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T23:30:26.929Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T23:30:26.929Z] 
Multi-Channel Configuration:
[2026-01-25T23:30:26.929Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T23:30:26.929Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T23:30:26.930Z] 
Data Files Check:
[2026-01-25T23:30:26.931Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T23:30:26.935Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 569756 bytes)
[2026-01-25T23:30:26.935Z] 
========================================
[2026-01-25T23:30:26.935Z] Starting Enhanced Discord Bot...
[2026-01-25T23:30:26.935Z] ========================================
[2026-01-25T23:30:27.458Z] [BOT] ✅ Loaded V2 database: 999 jobs
[2026-01-25T23:30:28.106Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T23:30:28.107Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T23:30:28.107Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T23:30:28.225Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T23:30:28.229Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T23:30:28.229Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T23:30:28.229Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T23:30:28.230Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T23:30:28.231Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T23:30:28.231Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T23:30:28.231Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T23:30:28.234Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T23:30:28.235Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T23:30:28.235Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:30:28.252Z] [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T23:30:28.422Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T23:30:28.423Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T23:30:28.423Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T23:30:28.423Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory
[2026-01-25T23:30:28.427Z] [BOT] ✅ Loaded V2 database: 999 jobs
💾 DISK STATE: 999 jobs on disk
[2026-01-25T23:30:28.427Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=999
[2026-01-25T23:30:28.430Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:30:28.431Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-25T23:30:28.431Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T23:30:28.437Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
[2026-01-25T23:30:28.437Z] [BOT] ✅ Archiving complete: 8 archived, 991 active
[2026-01-25T23:30:28.446Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
[2026-01-25T23:30:28.446Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:29.948Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:30:30.194Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T23:30:30.194Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T23:30:30.194Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:30:30.198Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:30:30.198Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:30:30.200Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:30:30.200Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:30:30.201Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:30:30.207Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:31.708Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:30:31.882Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T23:30:31.882Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T23:30:31.883Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:30:31.886Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:30:31.886Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:30:31.886Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:30:31.888Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:30:31.888Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:30:31.889Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:30:31.896Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
[2026-01-25T23:30:31.896Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:33.397Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T23:30:33.397Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:30:33.614Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T23:30:33.614Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T23:30:33.614Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:30:33.617Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:30:33.618Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:30:33.619Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:30:33.620Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:30:33.620Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:30:33.627Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:38.129Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T23:30:38.130Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T23:30:38.130Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:30:38.507Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T23:30:38.507Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T23:30:38.507Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:30:38.512Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:30:38.512Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:30:38.515Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:30:38.515Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:30:38.515Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:30:38.527Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:40.028Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T23:30:40.029Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:30:40.249Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T23:30:40.250Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:30:40.253Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:30:40.253Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:30:40.255Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:30:40.255Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:30:40.256Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:30:40.264Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:41.765Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T23:30:41.766Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:30:42.022Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T23:30:42.023Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T23:30:42.023Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:30:42.026Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:30:42.027Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:30:42.029Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:30:42.029Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:30:42.030Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:30:42.038Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
[2026-01-25T23:30:42.038Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:43.539Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T23:30:43.539Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:30:43.959Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T23:30:43.959Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T23:30:43.959Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T23:30:43.960Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:30:43.963Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:30:43.963Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:30:43.963Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:30:43.965Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:30:43.965Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:30:43.966Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:30:43.972Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:45.474Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T23:30:45.475Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:30:45.621Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T23:30:45.621Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T23:30:45.621Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:30:45.625Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:30:45.625Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:30:45.627Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:30:45.628Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:30:45.628Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:30:45.636Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
[2026-01-25T23:30:45.636Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:50.138Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T23:30:50.138Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T23:30:50.138Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T23:30:50.361Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T23:30:50.362Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T23:30:50.362Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:30:50.365Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:30:50.365Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:30:50.367Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:30:50.368Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:30:50.375Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
[2026-01-25T23:30:50.375Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:30:54.877Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T23:30:54.879Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T23:30:54.973Z] [BOT] 📂 Loaded 9111 existing routing entries
[2026-01-25T23:30:55.085Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9121
   Timestamp: 2026-01-25T23:30:55.043Z
[2026-01-25T23:30:55.086Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-25T23:30:55.086Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-25T23:30:55.086Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T23:30:55.086Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-25T23:30:55.087Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-25T23:30:55.087Z] [BOT] [STATS] Channel stats saved
[2026-01-25T23:30:57.105Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*