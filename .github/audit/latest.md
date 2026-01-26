# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T09:35:29.317Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T09:34:58.312Z] ========================================
[2026-01-26T09:34:58.314Z] Discord Bot Execution Log
[2026-01-26T09:34:58.314Z] Environment: GitHub Actions
[2026-01-26T09:34:58.314Z] Node Version: v20.20.0
[2026-01-26T09:34:58.314Z] ========================================
[2026-01-26T09:34:58.314Z] Environment Variables Check:
[2026-01-26T09:34:58.314Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T09:34:58.314Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.314Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T09:34:58.314Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T09:34:58.315Z] 
Multi-Channel Configuration:
[2026-01-26T09:34:58.315Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.315Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.315Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.315Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.315Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.315Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.315Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.315Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.315Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T09:34:58.315Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T09:34:58.315Z] 
Data Files Check:
[2026-01-26T09:34:58.316Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T09:34:58.320Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 503911 bytes)
[2026-01-26T09:34:58.320Z] 
========================================
[2026-01-26T09:34:58.320Z] Starting Enhanced Discord Bot...
[2026-01-26T09:34:58.320Z] ========================================
[2026-01-26T09:34:58.854Z] [BOT] ✅ Loaded V2 database: 877 jobs
[2026-01-26T09:34:59.360Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T09:34:59.360Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T09:34:59.360Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T09:34:59.479Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T09:34:59.482Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T09:34:59.483Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T09:34:59.483Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T09:34:59.484Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T09:34:59.484Z] [BOT] (2 grouped as same job with different locations)
[2026-01-26T09:34:59.484Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T09:34:59.484Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T09:34:59.488Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T09:34:59.488Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T09:34:59.488Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:34:59.505Z] [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T09:34:59.885Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T09:34:59.885Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T09:34:59.885Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T09:34:59.886Z] [BOT] 💾 BEFORE MERGE: 877 jobs in memory
[2026-01-26T09:34:59.888Z] [BOT] ✅ Loaded V2 database: 877 jobs
[2026-01-26T09:34:59.889Z] [BOT] 💾 DISK STATE: 877 jobs on disk
[2026-01-26T09:34:59.889Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=877
[2026-01-26T09:34:59.891Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:34:59.891Z] [BOT] 💾 AFTER MERGE: 877 jobs (merged disk + memory)
[2026-01-26T09:34:59.892Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T09:34:59.897Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-26T09:34:59.897Z] [BOT] ✅ Archiving complete: 9 archived, 868 active
[2026-01-26T09:34:59.903Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:01.406Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-26T09:35:01.406Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:35:01.585Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T09:35:01.586Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:35:01.589Z] [BOT] ✅ Loaded V2 database: 868 jobs
💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:35:01.589Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:35:01.590Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:35:01.591Z] [BOT] 💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:35:01.591Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-26T09:35:01.597Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:03.099Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T09:35:03.099Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:35:03.456Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T09:35:03.456Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T09:35:03.456Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:35:03.459Z] [BOT] ✅ Loaded V2 database: 868 jobs
💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:35:03.459Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:35:03.460Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:35:03.460Z] [BOT] 💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:35:03.461Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-26T09:35:03.467Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:04.968Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T09:35:04.968Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T09:35:05.138Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T09:35:05.138Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T09:35:05.138Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:35:05.141Z] [BOT] ✅ Loaded V2 database: 868 jobs
💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:35:05.141Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:35:05.143Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:35:05.143Z] [BOT] 💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:35:05.144Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-26T09:35:05.150Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:09.651Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T09:35:09.652Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T09:35:09.652Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:35:10.093Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T09:35:10.094Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T09:35:10.094Z] [BOT] 💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:35:10.098Z] [BOT] ✅ Loaded V2 database: 868 jobs
[2026-01-26T09:35:10.098Z] [BOT] 💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:35:10.098Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:35:10.100Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:35:10.100Z] [BOT] 💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:35:10.100Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-26T09:35:10.108Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
[2026-01-26T09:35:10.108Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:11.609Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T09:35:11.609Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:35:11.802Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T09:35:11.802Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T09:35:11.802Z] [BOT] 💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:35:11.805Z] [BOT] ✅ Loaded V2 database: 868 jobs
💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:35:11.805Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:35:11.807Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:35:11.808Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-26T09:35:11.814Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
[2026-01-26T09:35:11.814Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:13.314Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T09:35:13.314Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:35:13.598Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T09:35:13.598Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T09:35:13.598Z] [BOT] 💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:35:13.602Z] [BOT] ✅ Loaded V2 database: 868 jobs
💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:35:13.602Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:35:13.604Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:35:13.604Z] [BOT] 💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:35:13.605Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-26T09:35:13.611Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
[2026-01-26T09:35:13.611Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:15.113Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-26T09:35:15.113Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T09:35:15.113Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:35:15.268Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T09:35:15.268Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T09:35:15.268Z] [BOT] 💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:35:15.271Z] [BOT] ✅ Loaded V2 database: 868 jobs
💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:35:15.271Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:35:15.274Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:35:15.274Z] [BOT] 💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:35:15.274Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-26T09:35:15.280Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:16.781Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T09:35:16.782Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T09:35:17.065Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T09:35:17.065Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T09:35:17.066Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:35:17.068Z] [BOT] ✅ Loaded V2 database: 868 jobs
[2026-01-26T09:35:17.068Z] [BOT] 💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:35:17.069Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:35:17.070Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T09:35:17.070Z] [BOT] 💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:35:17.071Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-26T09:35:17.077Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
[2026-01-26T09:35:17.077Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:21.579Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T09:35:21.580Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T09:35:21.580Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T09:35:21.788Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T09:35:21.788Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T09:35:21.789Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T09:35:21.789Z] [BOT] 💾 BEFORE MERGE: 868 jobs in memory
[2026-01-26T09:35:21.792Z] [BOT] ✅ Loaded V2 database: 868 jobs
💾 DISK STATE: 868 jobs on disk
[2026-01-26T09:35:21.792Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=868
[2026-01-26T09:35:21.793Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 868 jobs (merged disk + memory)
[2026-01-26T09:35:21.794Z] [BOT] ✅ No jobs to archive (all 868 jobs within 7-day window)
[2026-01-26T09:35:21.801Z] [BOT] 💾 Saved posted_jobs.json: 868 active jobs
[2026-01-26T09:35:21.801Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T09:35:26.303Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T09:35:26.304Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T09:35:26.401Z] [BOT] 📂 Loaded 9351 existing routing entries
[2026-01-26T09:35:26.523Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9361
[2026-01-26T09:35:26.523Z] [BOT] Timestamp: 2026-01-26T09:35:26.475Z
[2026-01-26T09:35:26.523Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T09:35:26.523Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T09:35:26.524Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T09:35:26.524Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-26T09:35:26.524Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T09:35:26.524Z] [BOT] [STATS] Channel stats saved
[2026-01-26T09:35:28.543Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*