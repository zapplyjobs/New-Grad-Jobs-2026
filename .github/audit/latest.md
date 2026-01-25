# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T21:12:02.223Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T21:11:30.480Z] ========================================
[2026-01-25T21:11:30.482Z] Discord Bot Execution Log
[2026-01-25T21:11:30.482Z] Environment: GitHub Actions
[2026-01-25T21:11:30.482Z] Node Version: v20.20.0
[2026-01-25T21:11:30.482Z] ========================================
[2026-01-25T21:11:30.482Z] Environment Variables Check:
[2026-01-25T21:11:30.482Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T21:11:30.483Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T21:11:30.483Z] 
Multi-Channel Configuration:
[2026-01-25T21:11:30.483Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T21:11:30.483Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T21:11:30.483Z] 
Data Files Check:
[2026-01-25T21:11:30.485Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T21:11:30.490Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 586851 bytes)
[2026-01-25T21:11:30.490Z] 
========================================
[2026-01-25T21:11:30.490Z] Starting Enhanced Discord Bot...
[2026-01-25T21:11:30.490Z] ========================================
[2026-01-25T21:11:30.959Z] [BOT] ✅ Loaded V2 database: 1026 jobs
[2026-01-25T21:11:31.808Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T21:11:31.809Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T21:11:31.972Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T21:11:31.976Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T21:11:31.976Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T21:11:31.977Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T21:11:31.978Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T21:11:31.978Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T21:11:31.978Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T21:11:31.981Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T21:11:31.982Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
   Category: TECH (matched: "software")
[2026-01-25T21:11:31.982Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:11:31.998Z] [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T21:11:32.195Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T21:11:32.195Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T21:11:32.196Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T21:11:32.196Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:32.200Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:32.201Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:32.203Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:11:32.203Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:32.204Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:32.216Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:33.719Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:11:33.948Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T21:11:33.949Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:33.953Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:33.953Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:33.955Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:33.956Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:33.964Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:35.465Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:11:35.796Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T21:11:35.796Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T21:11:35.796Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:35.800Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:35.800Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:35.803Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:11:35.803Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:35.804Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:35.811Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:37.313Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:11:37.596Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T21:11:37.596Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:37.600Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:37.601Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:37.603Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:11:37.603Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:37.603Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:37.611Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:42.112Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T21:11:42.112Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T21:11:42.113Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:11:42.519Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T21:11:42.519Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T21:11:42.519Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:42.524Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:42.524Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:42.527Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:11:42.527Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:42.528Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:42.537Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:44.040Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:11:44.310Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T21:11:44.311Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:44.314Z] [BOT] ✅ Loaded V2 database: 1026 jobs
[2026-01-25T21:11:44.315Z] [BOT] 💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:44.315Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:44.317Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:11:44.317Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:44.318Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:44.327Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:45.829Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T21:11:45.829Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:11:46.157Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T21:11:46.157Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:46.161Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:46.161Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:46.164Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:11:46.164Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:46.165Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:46.173Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:47.675Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:11:47.968Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T21:11:47.968Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T21:11:47.969Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:47.972Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:47.973Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:47.975Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:47.976Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:47.983Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:49.485Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T21:11:49.485Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:11:49.658Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T21:11:49.659Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T21:11:49.659Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:49.663Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:49.663Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:49.665Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:11:49.665Z] [BOT] 💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:49.666Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:49.674Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
[2026-01-25T21:11:49.675Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:54.177Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T21:11:54.177Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T21:11:54.178Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T21:11:54.398Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T21:11:54.398Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T21:11:54.398Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T21:11:54.399Z] [BOT] 💾 BEFORE MERGE: 1026 jobs in memory
[2026-01-25T21:11:54.402Z] [BOT] ✅ Loaded V2 database: 1026 jobs
💾 DISK STATE: 1026 jobs on disk
[2026-01-25T21:11:54.402Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1026
[2026-01-25T21:11:54.404Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1026 jobs (merged disk + memory)
[2026-01-25T21:11:54.405Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-25T21:11:54.413Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:11:58.916Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T21:11:58.917Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T21:11:59.027Z] [BOT] 📂 Loaded 9021 existing routing entries
[2026-01-25T21:11:59.136Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9031
[2026-01-25T21:11:59.136Z] [BOT] Timestamp: 2026-01-25T21:11:59.099Z
[2026-01-25T21:11:59.137Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T21:11:59.137Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T21:11:59.137Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-25T21:11:59.137Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T21:11:59.137Z] [BOT] [STATS] Channel stats saved
[2026-01-25T21:12:01.151Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*