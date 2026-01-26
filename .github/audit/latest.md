# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T02:51:44.366Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T02:51:12.694Z] ========================================
[2026-01-26T02:51:12.695Z] Discord Bot Execution Log
[2026-01-26T02:51:12.695Z] Environment: GitHub Actions
[2026-01-26T02:51:12.696Z] Node Version: v20.20.0
[2026-01-26T02:51:12.696Z] ========================================
[2026-01-26T02:51:12.696Z] Environment Variables Check:
[2026-01-26T02:51:12.696Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T02:51:12.696Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.696Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T02:51:12.696Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T02:51:12.696Z] 
Multi-Channel Configuration:
[2026-01-26T02:51:12.696Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.697Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.697Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.697Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.697Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.697Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.697Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.697Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.697Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T02:51:12.697Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T02:51:12.697Z] 
Data Files Check:
[2026-01-26T02:51:12.698Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T02:51:12.703Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 553034 bytes)
[2026-01-26T02:51:12.703Z] 
========================================
[2026-01-26T02:51:12.703Z] Starting Enhanced Discord Bot...
[2026-01-26T02:51:12.703Z] ========================================
[2026-01-26T02:51:13.236Z] [BOT] ✅ Loaded V2 database: 967 jobs
[2026-01-26T02:51:13.944Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T02:51:13.945Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T02:51:13.945Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T02:51:14.074Z] [BOT] ✅ Loaded pending queue: 2859 total (2809 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T02:51:14.078Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T02:51:14.079Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T02:51:14.079Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T02:51:14.080Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T02:51:14.081Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T02:51:14.081Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T02:51:14.084Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T02:51:14.085Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T02:51:14.085Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T02:51:14.103Z] [BOT ERROR] (node:2631) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T02:51:14.397Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T02:51:14.397Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T02:51:14.398Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T02:51:14.398Z] [BOT] 💾 BEFORE MERGE: 967 jobs in memory
[2026-01-26T02:51:14.401Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-26T02:51:14.402Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=967
[2026-01-26T02:51:14.404Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T02:51:14.404Z] [BOT] 💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-26T02:51:14.405Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T02:51:14.411Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
[2026-01-26T02:51:14.411Z] [BOT] ✅ Archiving complete: 8 archived, 959 active
[2026-01-26T02:51:14.420Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:15.922Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T02:51:16.103Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T02:51:16.104Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T02:51:16.107Z] [BOT] ✅ Loaded V2 database: 959 jobs
[2026-01-26T02:51:16.107Z] [BOT] 💾 DISK STATE: 959 jobs on disk
[2026-01-26T02:51:16.107Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T02:51:16.109Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T02:51:16.109Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T02:51:16.109Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-26T02:51:16.116Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:17.617Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T02:51:17.617Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T02:51:17.927Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T02:51:17.927Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T02:51:17.928Z] [BOT] 💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T02:51:17.931Z] [BOT] ✅ Loaded V2 database: 959 jobs
[2026-01-26T02:51:17.931Z] [BOT] 💾 DISK STATE: 959 jobs on disk
[2026-01-26T02:51:17.931Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T02:51:17.933Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T02:51:17.933Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T02:51:17.934Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-26T02:51:17.940Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:19.442Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T02:51:19.659Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T02:51:19.660Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T02:51:19.663Z] [BOT] ✅ Loaded V2 database: 959 jobs
💾 DISK STATE: 959 jobs on disk
[2026-01-26T02:51:19.664Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T02:51:19.665Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T02:51:19.665Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T02:51:19.666Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-26T02:51:19.672Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:24.175Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T02:51:24.176Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T02:51:24.176Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T02:51:24.513Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T02:51:24.514Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T02:51:24.514Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T02:51:24.514Z] [BOT] 💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T02:51:24.518Z] [BOT] ✅ Loaded V2 database: 959 jobs
[2026-01-26T02:51:24.518Z] [BOT] 💾 DISK STATE: 959 jobs on disk
[2026-01-26T02:51:24.518Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T02:51:24.520Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T02:51:24.521Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T02:51:24.521Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-26T02:51:24.530Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:26.032Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T02:51:26.032Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T02:51:26.242Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T02:51:26.243Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T02:51:26.243Z] [BOT] 💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T02:51:26.246Z] [BOT] ✅ Loaded V2 database: 959 jobs
💾 DISK STATE: 959 jobs on disk
[2026-01-26T02:51:26.246Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T02:51:26.248Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T02:51:26.248Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T02:51:26.249Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-26T02:51:26.257Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:27.758Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T02:51:27.758Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T02:51:27.994Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T02:51:27.994Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T02:51:27.994Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T02:51:27.995Z] [BOT] 💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T02:51:27.998Z] [BOT] ✅ Loaded V2 database: 959 jobs
💾 DISK STATE: 959 jobs on disk
[2026-01-26T02:51:27.998Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T02:51:28.000Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T02:51:28.001Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-26T02:51:28.010Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:29.511Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-26T02:51:29.512Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T02:51:29.695Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T02:51:29.696Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T02:51:29.696Z] [BOT] 💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T02:51:29.699Z] [BOT] ✅ Loaded V2 database: 959 jobs
[2026-01-26T02:51:29.699Z] [BOT] 💾 DISK STATE: 959 jobs on disk
[2026-01-26T02:51:29.699Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T02:51:29.701Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T02:51:29.701Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T02:51:29.702Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-26T02:51:29.708Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
[2026-01-26T02:51:29.708Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:31.210Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T02:51:31.210Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T02:51:31.485Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T02:51:31.485Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T02:51:31.485Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T02:51:31.489Z] [BOT] ✅ Loaded V2 database: 959 jobs
[2026-01-26T02:51:31.489Z] [BOT] 💾 DISK STATE: 959 jobs on disk
[2026-01-26T02:51:31.489Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T02:51:31.491Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T02:51:31.491Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T02:51:31.492Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-26T02:51:31.499Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:36.001Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T02:51:36.002Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T02:51:36.002Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T02:51:36.193Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T02:51:36.194Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T02:51:36.194Z] [BOT] 💾 BEFORE MERGE: 959 jobs in memory
[2026-01-26T02:51:36.197Z] [BOT] ✅ Loaded V2 database: 959 jobs
💾 DISK STATE: 959 jobs on disk
[2026-01-26T02:51:36.197Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=959
[2026-01-26T02:51:36.199Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T02:51:36.200Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-26T02:51:36.201Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-26T02:51:36.210Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
[2026-01-26T02:51:36.210Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T02:51:40.714Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T02:51:40.715Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T02:51:40.813Z] [BOT] 📂 Loaded 9171 existing routing entries
[2026-01-26T02:51:40.937Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T02:51:40.937Z] [BOT] Total entries: 9181
   Timestamp: 2026-01-26T02:51:40.893Z
[2026-01-26T02:51:40.938Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T02:51:40.938Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T02:51:40.938Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T02:51:40.938Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T02:51:40.939Z] [BOT] [STATS] Channel stats saved
[2026-01-26T02:51:42.957Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2631) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*