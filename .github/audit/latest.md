# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T09:18:57.629Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T09:18:26.756Z] ========================================
[2026-01-26T09:18:26.758Z] Discord Bot Execution Log
[2026-01-26T09:18:26.758Z] Environment: GitHub Actions
[2026-01-26T09:18:26.758Z] Node Version: v20.20.0
[2026-01-26T09:18:26.758Z] ========================================
[2026-01-26T09:18:26.758Z] Environment Variables Check:
[2026-01-26T09:18:26.758Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T09:18:26.758Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.758Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T09:18:26.759Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T09:18:26.759Z] 
Multi-Channel Configuration:
[2026-01-26T09:18:26.759Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.759Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.759Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.759Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.759Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.759Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.759Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.759Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.759Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T09:18:26.759Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T09:18:26.759Z] 
Data Files Check:
[2026-01-26T09:18:26.761Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T09:18:26.764Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 503911 bytes)
[2026-01-26T09:18:26.765Z] 
========================================
[2026-01-26T09:18:26.765Z] Starting Enhanced Discord Bot...
[2026-01-26T09:18:26.765Z] ========================================
[2026-01-26T09:18:27.294Z] [BOT] ✅ Loaded V2 database: 877 jobs
[2026-01-26T09:18:28.135Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T09:18:28.136Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T09:18:28.136Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T09:18:28.255Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[2026-01-26T09:18:28.257Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T09:18:28.260Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T09:18:28.261Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T09:18:28.261Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T09:18:28.262Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T09:18:28.262Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T09:18:28.263Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T09:18:28.266Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T09:18:28.267Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T09:18:28.267Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:18:28.284Z] [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T09:18:28.725Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T09:18:28.726Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T09:18:28.726Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:28.729Z] [BOT] ✅ Loaded V2 database: 877 jobs
[2026-01-26T09:18:28.729Z] [BOT] 💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:28.729Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:28.732Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:18:28.732Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:28.732Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:28.747Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
[2026-01-26T09:18:28.747Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:30.250Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:18:30.412Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T09:18:30.413Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T09:18:30.413Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T09:18:30.413Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:30.416Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:30.416Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:30.417Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:18:30.417Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:30.418Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:30.425Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:31.926Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T09:18:31.926Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:18:32.176Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T09:18:32.176Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T09:18:32.177Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:32.179Z] [BOT] ✅ Loaded V2 database: 877 jobs
[2026-01-26T09:18:32.180Z] [BOT] 💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:32.180Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:32.181Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:18:32.181Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:32.182Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:32.188Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:33.690Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T09:18:33.690Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:18:33.927Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T09:18:33.927Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T09:18:33.927Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T09:18:33.927Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:33.930Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:33.930Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:33.932Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:18:33.932Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:33.933Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:33.939Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
[2026-01-26T09:18:33.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:38.440Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T09:18:38.441Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T09:18:38.441Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:18:38.763Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T09:18:38.763Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T09:18:38.763Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T09:18:38.763Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:38.766Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:38.767Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:38.769Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:18:38.770Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:38.770Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:38.778Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:40.279Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T09:18:40.279Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:18:40.518Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T09:18:40.519Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T09:18:40.519Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T09:18:40.519Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:40.524Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:40.524Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:40.527Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:18:40.527Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:40.527Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:40.539Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:42.041Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T09:18:42.041Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:18:42.218Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T09:18:42.218Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T09:18:42.218Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:42.221Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:42.221Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:42.223Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:42.223Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:42.230Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
[2026-01-26T09:18:42.230Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:43.731Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T09:18:43.731Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:18:43.908Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T09:18:43.909Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T09:18:43.909Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:43.912Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:43.912Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:43.913Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:43.914Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:43.920Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:45.422Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T09:18:45.422Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:18:45.566Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T09:18:45.566Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:45.569Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:45.569Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:45.571Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:45.571Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:45.577Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
[2026-01-26T09:18:45.577Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:50.079Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T09:18:50.080Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T09:18:50.080Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T09:18:50.251Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T09:18:50.252Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T09:18:50.252Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:18:50.255Z] [BOT] ✅ Loaded V2 database: 877 jobs
💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:18:50.255Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:18:50.256Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:18:50.257Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2026-01-26T09:18:50.263Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:18:54.765Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T09:18:54.767Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T09:18:54.866Z] [BOT] 📂 Loaded 9341 existing routing entries
[2026-01-26T09:18:54.989Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T09:18:54.990Z] [BOT] Total entries: 9351
   Timestamp: 2026-01-26T09:18:54.943Z
[2026-01-26T09:18:54.990Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T09:18:54.990Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T09:18:54.991Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T09:18:54.991Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T09:18:54.991Z] [BOT] [STATS] Channel stats saved
[2026-01-26T09:18:57.010Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*