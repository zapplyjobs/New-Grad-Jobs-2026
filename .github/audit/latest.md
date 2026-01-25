# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T23:56:09.299Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T23:55:37.608Z] ========================================
[2026-01-25T23:55:37.610Z] Discord Bot Execution Log
[2026-01-25T23:55:37.610Z] Environment: GitHub Actions
[2026-01-25T23:55:37.610Z] Node Version: v20.20.0
[2026-01-25T23:55:37.610Z] ========================================
[2026-01-25T23:55:37.610Z] Environment Variables Check:
[2026-01-25T23:55:37.610Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T23:55:37.610Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.610Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T23:55:37.610Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T23:55:37.611Z] 
Multi-Channel Configuration:
[2026-01-25T23:55:37.611Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.611Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.611Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.611Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.611Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.611Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.611Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.611Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.611Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T23:55:37.611Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T23:55:37.611Z] 
Data Files Check:
[2026-01-25T23:55:37.612Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T23:55:37.617Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 565628 bytes)
[2026-01-25T23:55:37.617Z] 
========================================
[2026-01-25T23:55:37.617Z] Starting Enhanced Discord Bot...
[2026-01-25T23:55:37.617Z] ========================================
[2026-01-25T23:55:38.139Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:55:38.666Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T23:55:38.667Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T23:55:38.667Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T23:55:38.784Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T23:55:38.787Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T23:55:38.788Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T23:55:38.788Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T23:55:38.789Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T23:55:38.789Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T23:55:38.789Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T23:55:38.789Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T23:55:38.793Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T23:55:38.793Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T23:55:38.793Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:55:38.810Z] [BOT ERROR] (node:2471) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T23:55:39.077Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T23:55:39.077Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T23:55:39.077Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T23:55:39.078Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:55:39.082Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:55:39.082Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:55:39.082Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:55:39.087Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:55:39.087Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:55:39.088Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T23:55:39.096Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-25T23:55:39.096Z] [BOT] ✅ Archiving complete: 5 archived, 986 active
[2026-01-25T23:55:39.106Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:55:40.609Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:55:40.827Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T23:55:40.827Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 986 jobs in memory
[2026-01-25T23:55:40.831Z] [BOT] ✅ Loaded V2 database: 986 jobs
[2026-01-25T23:55:40.831Z] [BOT] 💾 DISK STATE: 986 jobs on disk
[2026-01-25T23:55:40.831Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-25T23:55:40.833Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-25T23:55:40.833Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-25T23:55:40.840Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:55:42.342Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:55:42.596Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T23:55:42.596Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T23:55:42.597Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T23:55:42.597Z] [BOT] 💾 BEFORE MERGE: 986 jobs in memory
[2026-01-25T23:55:42.600Z] [BOT] ✅ Loaded V2 database: 986 jobs
💾 DISK STATE: 986 jobs on disk
[2026-01-25T23:55:42.600Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-25T23:55:42.602Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:55:42.602Z] [BOT] 💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-25T23:55:42.603Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-25T23:55:42.610Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
[2026-01-25T23:55:42.610Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:55:44.110Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T23:55:44.110Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:55:44.292Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T23:55:44.292Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T23:55:44.293Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 986 jobs in memory
[2026-01-25T23:55:44.296Z] [BOT] ✅ Loaded V2 database: 986 jobs
💾 DISK STATE: 986 jobs on disk
[2026-01-25T23:55:44.296Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-25T23:55:44.298Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-25T23:55:44.299Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-25T23:55:44.305Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
[2026-01-25T23:55:44.306Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:55:48.807Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T23:55:48.808Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T23:55:48.808Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:55:49.421Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T23:55:49.421Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T23:55:49.421Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T23:55:49.421Z] [BOT] 💾 BEFORE MERGE: 986 jobs in memory
[2026-01-25T23:55:49.426Z] [BOT] ✅ Loaded V2 database: 986 jobs
💾 DISK STATE: 986 jobs on disk
[2026-01-25T23:55:49.426Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-25T23:55:49.429Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:55:49.429Z] [BOT] 💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-25T23:55:49.430Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-25T23:55:49.438Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:55:50.940Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T23:55:50.940Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:55:51.306Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T23:55:51.306Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T23:55:51.306Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 986 jobs in memory
[2026-01-25T23:55:51.310Z] [BOT] ✅ Loaded V2 database: 986 jobs
💾 DISK STATE: 986 jobs on disk
[2026-01-25T23:55:51.310Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-25T23:55:51.312Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:55:51.313Z] [BOT] 💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-25T23:55:51.313Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-25T23:55:51.322Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
[2026-01-25T23:55:51.323Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:55:52.823Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T23:55:52.824Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:55:53.088Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T23:55:53.088Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T23:55:53.089Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 986 jobs in memory
[2026-01-25T23:55:53.091Z] [BOT] ✅ Loaded V2 database: 986 jobs
[2026-01-25T23:55:53.092Z] [BOT] 💾 DISK STATE: 986 jobs on disk
[2026-01-25T23:55:53.092Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-25T23:55:53.094Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:55:53.094Z] [BOT] 💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-25T23:55:53.095Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-25T23:55:53.103Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
[2026-01-25T23:55:53.104Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:55:54.605Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T23:55:54.605Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:55:54.766Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T23:55:54.766Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T23:55:54.766Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T23:55:54.766Z] [BOT] 💾 BEFORE MERGE: 986 jobs in memory
[2026-01-25T23:55:54.770Z] [BOT] ✅ Loaded V2 database: 986 jobs
[2026-01-25T23:55:54.770Z] [BOT] 💾 DISK STATE: 986 jobs on disk
[2026-01-25T23:55:54.770Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-25T23:55:54.773Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:55:54.773Z] [BOT] 💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-25T23:55:54.774Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-25T23:55:54.781Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
[2026-01-25T23:55:54.781Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:55:56.282Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T23:55:56.283Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:55:56.533Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T23:55:56.533Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T23:55:56.533Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T23:55:56.533Z] [BOT] 💾 BEFORE MERGE: 986 jobs in memory
[2026-01-25T23:55:56.536Z] [BOT] ✅ Loaded V2 database: 986 jobs
[2026-01-25T23:55:56.537Z] [BOT] 💾 DISK STATE: 986 jobs on disk
[2026-01-25T23:55:56.537Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-25T23:55:56.539Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:55:56.539Z] [BOT] 💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-25T23:55:56.540Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-25T23:55:56.547Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:56:01.049Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T23:56:01.050Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T23:56:01.050Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T23:56:01.279Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T23:56:01.279Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T23:56:01.279Z] [BOT] 💾 BEFORE MERGE: 986 jobs in memory
[2026-01-25T23:56:01.283Z] [BOT] ✅ Loaded V2 database: 986 jobs
💾 DISK STATE: 986 jobs on disk
[2026-01-25T23:56:01.283Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-25T23:56:01.285Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:56:01.286Z] [BOT] 💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-25T23:56:01.286Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-25T23:56:01.295Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
[2026-01-25T23:56:01.295Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:56:05.798Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T23:56:05.800Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T23:56:05.898Z] [BOT] 📂 Loaded 9131 existing routing entries
[2026-01-25T23:56:06.019Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T23:56:06.019Z] [BOT] Total entries: 9141
   Timestamp: 2026-01-25T23:56:05.974Z
[2026-01-25T23:56:06.019Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T23:56:06.020Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T23:56:06.020Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T23:56:06.020Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T23:56:06.020Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T23:56:06.020Z] [BOT] [STATS] Channel stats saved
[2026-01-25T23:56:08.040Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2471) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*