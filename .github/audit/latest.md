# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T11:43:38.644Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T11:43:06.781Z] ========================================
[2026-01-26T11:43:06.783Z] Discord Bot Execution Log
[2026-01-26T11:43:06.783Z] Environment: GitHub Actions
[2026-01-26T11:43:06.783Z] Node Version: v20.20.0
[2026-01-26T11:43:06.783Z] ========================================
[2026-01-26T11:43:06.783Z] Environment Variables Check:
[2026-01-26T11:43:06.783Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T11:43:06.783Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.783Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T11:43:06.783Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T11:43:06.783Z] 
Multi-Channel Configuration:
[2026-01-26T11:43:06.784Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.784Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.784Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.784Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.784Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.784Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.784Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.784Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.784Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T11:43:06.784Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T11:43:06.784Z] 
Data Files Check:
[2026-01-26T11:43:06.786Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T11:43:06.789Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 497243 bytes)
[2026-01-26T11:43:06.790Z] 
========================================
[2026-01-26T11:43:06.790Z] Starting Enhanced Discord Bot...
[2026-01-26T11:43:06.790Z] ========================================
[2026-01-26T11:43:07.334Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:43:07.907Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T11:43:07.907Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T11:43:07.907Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T11:43:08.031Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T11:43:08.034Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T11:43:08.035Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T11:43:08.035Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T11:43:08.036Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T11:43:08.036Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T11:43:08.036Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T11:43:08.040Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T11:43:08.041Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T11:43:08.041Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:43:08.058Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T11:43:08.361Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T11:43:08.361Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T11:43:08.362Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:08.364Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:08.365Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:08.367Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:43:08.367Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:08.367Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:08.379Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:09.882Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:43:10.323Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T11:43:10.323Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T11:43:10.323Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:10.326Z] [BOT] ✅ Loaded V2 database: 864 jobs
[2026-01-26T11:43:10.326Z] [BOT] 💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:10.327Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:10.328Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:43:10.328Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:10.329Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:10.337Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:11.838Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:43:12.098Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T11:43:12.098Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T11:43:12.098Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:12.101Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:12.101Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:12.103Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:43:12.103Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:12.104Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:12.111Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:13.611Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T11:43:13.611Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T11:43:13.940Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T11:43:13.940Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:13.943Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:13.944Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:13.945Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:13.946Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:13.952Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:18.455Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T11:43:18.456Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T11:43:18.456Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:43:18.668Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T11:43:18.668Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T11:43:18.668Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:18.671Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:18.673Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:18.675Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:43:18.675Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:18.676Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:18.684Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:20.185Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T11:43:20.186Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:43:20.396Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T11:43:20.396Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T11:43:20.396Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T11:43:20.397Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:20.399Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:20.400Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:20.401Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:43:20.401Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:20.402Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:20.410Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:21.911Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T11:43:21.911Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:43:22.271Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T11:43:22.271Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T11:43:22.271Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:22.274Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:22.274Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:22.276Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:22.276Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:22.284Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:23.784Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T11:43:23.785Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:43:24.020Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T11:43:24.020Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T11:43:24.020Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:24.023Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:24.024Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:24.025Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:43:24.025Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:24.026Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:24.033Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:25.534Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T11:43:25.535Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T11:43:25.725Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T11:43:25.725Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T11:43:25.725Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:25.728Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:25.728Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:25.730Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T11:43:25.730Z] [BOT] 💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:25.731Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:25.737Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:30.240Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T11:43:30.240Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T11:43:30.240Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T11:43:30.573Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T11:43:30.573Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T11:43:30.573Z] [BOT] 💾 BEFORE MERGE: 864 jobs in memory
[2026-01-26T11:43:30.576Z] [BOT] ✅ Loaded V2 database: 864 jobs
💾 DISK STATE: 864 jobs on disk
[2026-01-26T11:43:30.577Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=864
[2026-01-26T11:43:30.578Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 864 jobs (merged disk + memory)
[2026-01-26T11:43:30.579Z] [BOT] ✅ No jobs to archive (all 864 jobs within 7-day window)
[2026-01-26T11:43:30.587Z] [BOT] 💾 Saved posted_jobs.json: 864 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T11:43:35.089Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T11:43:35.090Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T11:43:35.193Z] [BOT] 📂 Loaded 9431 existing routing entries
[2026-01-26T11:43:35.320Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9441
[2026-01-26T11:43:35.321Z] [BOT] Timestamp: 2026-01-26T11:43:35.274Z
[2026-01-26T11:43:35.321Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T11:43:35.321Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T11:43:35.321Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T11:43:35.322Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T11:43:35.322Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T11:43:35.322Z] [BOT] [STATS] Channel stats saved
[2026-01-26T11:43:37.342Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*