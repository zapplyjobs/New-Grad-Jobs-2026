# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T21:55:31.604Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T21:55:01.099Z] ========================================
[2026-01-25T21:55:01.101Z] Discord Bot Execution Log
[2026-01-25T21:55:01.101Z] Environment: GitHub Actions
[2026-01-25T21:55:01.101Z] Node Version: v20.20.0
[2026-01-25T21:55:01.101Z] ========================================
[2026-01-25T21:55:01.101Z] Environment Variables Check:
[2026-01-25T21:55:01.102Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T21:55:01.102Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.102Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T21:55:01.102Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T21:55:01.102Z] 
Multi-Channel Configuration:
[2026-01-25T21:55:01.102Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.102Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.102Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.102Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.102Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.102Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.103Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.103Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.103Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T21:55:01.103Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T21:55:01.103Z] 
Data Files Check:
[2026-01-25T21:55:01.104Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T21:55:01.108Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 578721 bytes)
[2026-01-25T21:55:01.108Z] 
========================================
[2026-01-25T21:55:01.108Z] Starting Enhanced Discord Bot...
[2026-01-25T21:55:01.109Z] ========================================
[2026-01-25T21:55:01.652Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T21:55:02.031Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T21:55:02.032Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T21:55:02.032Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T21:55:02.149Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T21:55:02.153Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T21:55:02.153Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T21:55:02.153Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T21:55:02.154Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T21:55:02.155Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T21:55:02.155Z] [BOT] 📍 2 jobs with multiple locations:
[2026-01-25T21:55:02.155Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T21:55:02.158Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T21:55:02.159Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T21:55:02.159Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:55:02.176Z] [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T21:55:02.480Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T21:55:02.481Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T21:55:02.481Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T21:55:02.481Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:02.485Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T21:55:02.485Z] [BOT] 💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:02.485Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:02.488Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:55:02.488Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:02.489Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:02.501Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
[2026-01-25T21:55:02.501Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:04.003Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T21:55:04.003Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:55:04.125Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T21:55:04.125Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T21:55:04.125Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T21:55:04.125Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:04.129Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T21:55:04.129Z] [BOT] 💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:04.129Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:04.131Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:55:04.131Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:04.132Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:04.139Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
[2026-01-25T21:55:04.139Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:05.640Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:55:05.889Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T21:55:05.890Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T21:55:05.890Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:05.896Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:05.896Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:05.899Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:55:05.899Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:05.899Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:05.907Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:07.408Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T21:55:07.408Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T21:55:07.660Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T21:55:07.660Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T21:55:07.660Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:07.663Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:07.664Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:07.666Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:07.666Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:07.673Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:12.174Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T21:55:12.175Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T21:55:12.175Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:55:12.385Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T21:55:12.385Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T21:55:12.385Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T21:55:12.385Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:12.389Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T21:55:12.390Z] [BOT] 💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:12.390Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:12.392Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:55:12.392Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:12.393Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:12.402Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
[2026-01-25T21:55:12.402Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:13.904Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T21:55:13.904Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:55:14.072Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T21:55:14.072Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T21:55:14.072Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T21:55:14.072Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:14.075Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T21:55:14.075Z] [BOT] 💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:14.075Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:14.078Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:55:14.078Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:14.078Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:14.087Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:15.589Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T21:55:15.589Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:55:15.763Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T21:55:15.763Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T21:55:15.763Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T21:55:15.763Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:15.766Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T21:55:15.767Z] [BOT] 💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:15.767Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:15.769Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:55:15.769Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:15.770Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:15.778Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
[2026-01-25T21:55:15.778Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:17.279Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T21:55:17.279Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:55:17.479Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T21:55:17.479Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T21:55:17.479Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:17.482Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T21:55:17.482Z] [BOT] 💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:17.483Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:17.485Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:55:17.485Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:17.486Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:17.492Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
[2026-01-25T21:55:17.492Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:18.993Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T21:55:18.993Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T21:55:19.323Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T21:55:19.323Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T21:55:19.324Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T21:55:19.324Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:19.327Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:19.327Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:19.330Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:55:19.330Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:19.330Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:19.338Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
[2026-01-25T21:55:19.338Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:23.840Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T21:55:23.840Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T21:55:23.841Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T21:55:24.268Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T21:55:24.268Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T21:55:24.268Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T21:55:24.268Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T21:55:24.271Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T21:55:24.272Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T21:55:24.274Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T21:55:24.274Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T21:55:24.274Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-25T21:55:24.281Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T21:55:28.785Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T21:55:28.786Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T21:55:28.884Z] [BOT] 📂 Loaded 9051 existing routing entries
[2026-01-25T21:55:28.996Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T21:55:28.996Z] [BOT] Total entries: 9061
   Timestamp: 2026-01-25T21:55:28.954Z
[2026-01-25T21:55:28.996Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T21:55:28.997Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T21:55:28.997Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-25T21:55:28.997Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T21:55:28.997Z] [BOT] [STATS] Channel stats saved
[2026-01-25T21:55:31.014Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*