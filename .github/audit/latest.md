# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T22:30:46.753Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T22:30:14.788Z] ========================================
[2026-01-25T22:30:14.790Z] Discord Bot Execution Log
[2026-01-25T22:30:14.790Z] Environment: GitHub Actions
[2026-01-25T22:30:14.790Z] Node Version: v20.20.0
[2026-01-25T22:30:14.790Z] ========================================
[2026-01-25T22:30:14.790Z] Environment Variables Check:
[2026-01-25T22:30:14.790Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T22:30:14.791Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.791Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T22:30:14.791Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T22:30:14.791Z] 
Multi-Channel Configuration:
[2026-01-25T22:30:14.791Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.791Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.791Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.791Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.791Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.791Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.791Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.791Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.792Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T22:30:14.792Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T22:30:14.792Z] 
Data Files Check:
[2026-01-25T22:30:14.793Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T22:30:14.797Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 578721 bytes)
[2026-01-25T22:30:14.797Z] 
========================================
[2026-01-25T22:30:14.797Z] Starting Enhanced Discord Bot...
[2026-01-25T22:30:14.797Z] ========================================
[2026-01-25T22:30:15.338Z] [BOT] ✅ Loaded V2 database: 1013 jobs
[2026-01-25T22:30:15.863Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T22:30:15.863Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T22:30:15.863Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T22:30:15.984Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T22:30:15.988Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T22:30:15.988Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T22:30:15.989Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T22:30:15.989Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T22:30:15.990Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T22:30:15.990Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T22:30:15.993Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T22:30:15.994Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T22:30:15.994Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:30:16.011Z] [BOT ERROR] (node:2490) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T22:30:16.289Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T22:30:16.290Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T22:30:16.290Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory
[2026-01-25T22:30:16.294Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-25T22:30:16.294Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1013
[2026-01-25T22:30:16.297Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:30:16.297Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-25T22:30:16.298Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T22:30:16.303Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-25T22:30:16.303Z] [BOT] ✅ Archiving complete: 7 archived, 1006 active
[2026-01-25T22:30:16.313Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
[2026-01-25T22:30:16.313Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:17.815Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:30:18.034Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T22:30:18.035Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T22:30:18.035Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1006 jobs in memory
[2026-01-25T22:30:18.038Z] [BOT] ✅ Loaded V2 database: 1006 jobs
[2026-01-25T22:30:18.038Z] [BOT] 💾 DISK STATE: 1006 jobs on disk
[2026-01-25T22:30:18.038Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1006
[2026-01-25T22:30:18.040Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:30:18.040Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-25T22:30:18.041Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-25T22:30:18.048Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:19.549Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T22:30:19.549Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:30:19.806Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T22:30:19.806Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T22:30:19.806Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T22:30:19.806Z] [BOT] 💾 BEFORE MERGE: 1006 jobs in memory
[2026-01-25T22:30:19.809Z] [BOT] ✅ Loaded V2 database: 1006 jobs
💾 DISK STATE: 1006 jobs on disk
[2026-01-25T22:30:19.810Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1006
[2026-01-25T22:30:19.812Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-25T22:30:19.812Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-25T22:30:19.820Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
[2026-01-25T22:30:19.820Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:21.321Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T22:30:21.321Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T22:30:21.696Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T22:30:21.696Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T22:30:21.696Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1006 jobs in memory
[2026-01-25T22:30:21.699Z] [BOT] ✅ Loaded V2 database: 1006 jobs
💾 DISK STATE: 1006 jobs on disk
[2026-01-25T22:30:21.700Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1006
[2026-01-25T22:30:21.702Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:30:21.702Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-25T22:30:21.702Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-25T22:30:21.710Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:26.211Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T22:30:26.212Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T22:30:26.212Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:30:26.843Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T22:30:26.844Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T22:30:26.844Z] [BOT] 💾 BEFORE MERGE: 1006 jobs in memory
[2026-01-25T22:30:26.848Z] [BOT] ✅ Loaded V2 database: 1006 jobs
[2026-01-25T22:30:26.848Z] [BOT] 💾 DISK STATE: 1006 jobs on disk
[2026-01-25T22:30:26.848Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1006
[2026-01-25T22:30:26.852Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:30:26.852Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-25T22:30:26.852Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-25T22:30:26.861Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:28.363Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T22:30:28.364Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:30:28.536Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T22:30:28.536Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T22:30:28.536Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T22:30:28.536Z] [BOT] 💾 BEFORE MERGE: 1006 jobs in memory
[2026-01-25T22:30:28.540Z] [BOT] ✅ Loaded V2 database: 1006 jobs
💾 DISK STATE: 1006 jobs on disk
[2026-01-25T22:30:28.540Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1006
[2026-01-25T22:30:28.542Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:30:28.542Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-25T22:30:28.543Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-25T22:30:28.552Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
[2026-01-25T22:30:28.552Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:30.053Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T22:30:30.053Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:30:30.270Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T22:30:30.270Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T22:30:30.270Z] [BOT] 💾 BEFORE MERGE: 1006 jobs in memory
[2026-01-25T22:30:30.273Z] [BOT] ✅ Loaded V2 database: 1006 jobs
💾 DISK STATE: 1006 jobs on disk
[2026-01-25T22:30:30.273Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1006
[2026-01-25T22:30:30.275Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:30:30.275Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-25T22:30:30.276Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-25T22:30:30.283Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
[2026-01-25T22:30:30.284Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:31.785Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T22:30:31.785Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:30:32.019Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T22:30:32.019Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T22:30:32.019Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T22:30:32.019Z] [BOT] 💾 BEFORE MERGE: 1006 jobs in memory
[2026-01-25T22:30:32.023Z] [BOT] ✅ Loaded V2 database: 1006 jobs
[2026-01-25T22:30:32.024Z] [BOT] 💾 DISK STATE: 1006 jobs on disk
[2026-01-25T22:30:32.024Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1006
[2026-01-25T22:30:32.026Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:30:32.026Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-25T22:30:32.026Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-25T22:30:32.034Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
[2026-01-25T22:30:32.034Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:33.535Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T22:30:33.535Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T22:30:33.782Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T22:30:33.782Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T22:30:33.782Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T22:30:33.782Z] [BOT] 💾 BEFORE MERGE: 1006 jobs in memory
[2026-01-25T22:30:33.786Z] [BOT] ✅ Loaded V2 database: 1006 jobs
[2026-01-25T22:30:33.786Z] [BOT] 💾 DISK STATE: 1006 jobs on disk
[2026-01-25T22:30:33.786Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1006
[2026-01-25T22:30:33.788Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:30:33.788Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-25T22:30:33.788Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-25T22:30:33.796Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:38.299Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T22:30:38.299Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T22:30:38.299Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T22:30:38.597Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T22:30:38.598Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T22:30:38.598Z] [BOT] 💾 BEFORE MERGE: 1006 jobs in memory
[2026-01-25T22:30:38.601Z] [BOT] ✅ Loaded V2 database: 1006 jobs
💾 DISK STATE: 1006 jobs on disk
[2026-01-25T22:30:38.601Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1006
[2026-01-25T22:30:38.603Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T22:30:38.603Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-25T22:30:38.604Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-25T22:30:38.613Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
[2026-01-25T22:30:38.613Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T22:30:43.116Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T22:30:43.117Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T22:30:43.220Z] [BOT] 📂 Loaded 9071 existing routing entries
[2026-01-25T22:30:43.335Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T22:30:43.335Z] [BOT] Total entries: 9081
   Timestamp: 2026-01-25T22:30:43.291Z
[2026-01-25T22:30:43.336Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T22:30:43.336Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T22:30:43.336Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T22:30:45.356Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2490) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*