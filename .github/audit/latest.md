# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T06:04:26.020Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T06:03:55.092Z] ========================================
[2026-01-26T06:03:55.094Z] Discord Bot Execution Log
[2026-01-26T06:03:55.094Z] Environment: GitHub Actions
[2026-01-26T06:03:55.094Z] Node Version: v20.20.0
[2026-01-26T06:03:55.094Z] ========================================
[2026-01-26T06:03:55.094Z] Environment Variables Check:
[2026-01-26T06:03:55.094Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T06:03:55.094Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.094Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T06:03:55.094Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T06:03:55.094Z] 
Multi-Channel Configuration:
[2026-01-26T06:03:55.095Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.095Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.095Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.095Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.095Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.095Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.095Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.095Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.095Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T06:03:55.095Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T06:03:55.095Z] 
Data Files Check:
[2026-01-26T06:03:55.096Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T06:03:55.101Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 535872 bytes)
[2026-01-26T06:03:55.101Z] 
========================================
[2026-01-26T06:03:55.101Z] Starting Enhanced Discord Bot...
[2026-01-26T06:03:55.101Z] ========================================
[2026-01-26T06:03:55.624Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:03:56.343Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T06:03:56.344Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T06:03:56.344Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T06:03:56.462Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T06:03:56.465Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T06:03:56.466Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T06:03:56.466Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T06:03:56.467Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T06:03:56.467Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T06:03:56.467Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T06:03:56.470Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T06:03:56.471Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T06:03:56.471Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:03:56.488Z] [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T06:03:56.673Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T06:03:56.674Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T06:03:56.674Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T06:03:56.675Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:03:56.678Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:03:56.678Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:03:56.678Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:03:56.680Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:03:56.681Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:03:56.681Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:03:56.694Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:03:58.196Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T06:03:58.196Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:03:58.414Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T06:03:58.414Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T06:03:58.414Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:03:58.418Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:03:58.418Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:03:58.419Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:03:58.420Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:03:58.428Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
[2026-01-26T06:03:58.428Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T06:03:59.929Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:04:00.069Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T06:04:00.069Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:04:00.073Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:04:00.073Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:04:00.075Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:04:00.075Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:04:00.075Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:04:00.082Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:04:01.583Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:04:01.820Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T06:04:01.821Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:04:01.824Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:04:01.824Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:04:01.826Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:04:01.826Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:04:01.833Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:04:06.335Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T06:04:06.336Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T06:04:06.336Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:04:06.691Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T06:04:06.691Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T06:04:06.691Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:04:06.696Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:04:06.696Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:04:06.698Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:04:06.698Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:04:06.699Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:04:06.707Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:04:08.209Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T06:04:08.209Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:04:08.412Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T06:04:08.412Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T06:04:08.412Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:04:08.415Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:04:08.415Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:04:08.417Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:04:08.418Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:04:08.426Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:04:09.927Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T06:04:09.927Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:04:10.148Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T06:04:10.149Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T06:04:10.149Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T06:04:10.149Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:04:10.152Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:04:10.152Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:04:10.152Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:04:10.154Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:04:10.154Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:04:10.155Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:04:10.163Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:04:11.664Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T06:04:11.664Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:04:11.805Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T06:04:11.805Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T06:04:11.806Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:04:11.809Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:04:11.809Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:04:11.809Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:04:11.810Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:04:11.810Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:04:11.811Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:04:11.819Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:04:13.319Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-26T06:04:13.319Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:04:13.605Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T06:04:13.605Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T06:04:13.606Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:04:13.609Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:04:13.609Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:04:13.609Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:04:13.610Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:04:13.610Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:04:13.611Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:04:13.618Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
[2026-01-26T06:04:13.618Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T06:04:18.120Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T06:04:18.120Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T06:04:18.120Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T06:04:18.423Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T06:04:18.423Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T06:04:18.423Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:04:18.426Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:04:18.426Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:04:18.428Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:04:18.428Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T06:04:18.437Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
[2026-01-26T06:04:18.437Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T06:04:22.939Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T06:04:22.940Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T06:04:23.038Z] [BOT] 📂 Loaded 9241 existing routing entries
[2026-01-26T06:04:23.161Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T06:04:23.161Z] [BOT] Total entries: 9251
   Timestamp: 2026-01-26T06:04:23.115Z
[2026-01-26T06:04:23.161Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T06:04:23.162Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T06:04:23.162Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-26T06:04:25.178Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*