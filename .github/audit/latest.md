# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T19:29:57.306Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T19:29:25.687Z] ========================================
[2026-01-25T19:29:25.689Z] Discord Bot Execution Log
[2026-01-25T19:29:25.689Z] Environment: GitHub Actions
[2026-01-25T19:29:25.690Z] Node Version: v20.20.0
[2026-01-25T19:29:25.690Z] ========================================
[2026-01-25T19:29:25.690Z] Environment Variables Check:
[2026-01-25T19:29:25.690Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T19:29:25.690Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.690Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T19:29:25.690Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T19:29:25.690Z] 
Multi-Channel Configuration:
[2026-01-25T19:29:25.690Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.690Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.691Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.691Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.691Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.691Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.691Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.691Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.691Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T19:29:25.691Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T19:29:25.691Z] 
Data Files Check:
[2026-01-25T19:29:25.692Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T19:29:25.697Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594003 bytes)
[2026-01-25T19:29:25.697Z] 
========================================
[2026-01-25T19:29:25.697Z] Starting Enhanced Discord Bot...
[2026-01-25T19:29:25.697Z] ========================================
[2026-01-25T19:29:26.219Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:29:26.893Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T19:29:26.894Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T19:29:26.894Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T19:29:27.011Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T19:29:27.014Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T19:29:27.014Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T19:29:27.015Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T19:29:27.016Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-25T19:29:27.016Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T19:29:27.016Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T19:29:27.020Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T19:29:27.021Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:29:27.021Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:29:27.038Z] [BOT ERROR] (node:2489) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T19:29:27.261Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:29:27.262Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T19:29:27.262Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:29:27.265Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:29:27.266Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:29:27.266Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:29:27.268Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:29:27.268Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:29:27.269Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T19:29:27.274Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-25T19:29:27.274Z] [BOT] ✅ Archiving complete: 1 archived, 1038 active
[2026-01-25T19:29:27.283Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:28.786Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:29:29.107Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T19:29:29.107Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T19:29:29.107Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T19:29:29.108Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:29:29.111Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:29:29.111Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:29:29.113Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:29:29.113Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:29:29.114Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:29:29.121Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:29:29.121Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:30.622Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T19:29:30.622Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:29:30.982Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T19:29:30.982Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T19:29:30.982Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T19:29:30.982Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:29:30.986Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:29:30.986Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:29:30.988Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:29:30.988Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:29:30.989Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:29:30.996Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:32.497Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:29:32.740Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T19:29:32.740Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T19:29:32.740Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:29:32.744Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:29:32.744Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:29:32.746Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:29:32.747Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:29:32.753Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:37.255Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T19:29:37.256Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T19:29:37.256Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:29:37.665Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T19:29:37.665Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T19:29:37.665Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:29:37.670Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:29:37.670Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:29:37.670Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:29:37.673Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:29:37.673Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:29:37.673Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:29:37.683Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:29:37.683Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:39.184Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T19:29:39.185Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:29:39.418Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T19:29:39.418Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T19:29:39.418Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:29:39.421Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:29:39.422Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:29:39.424Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:29:39.424Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:29:39.425Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:29:39.434Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:40.935Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T19:29:40.936Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:29:41.216Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T19:29:41.216Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T19:29:41.216Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T19:29:41.216Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:29:41.220Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:29:41.220Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:29:41.220Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:29:41.223Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:29:41.223Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:29:41.232Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:29:41.232Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:42.734Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T19:29:42.735Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:29:42.947Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T19:29:42.947Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T19:29:42.948Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:29:42.951Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:29:42.951Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:29:42.951Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:29:42.953Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:29:42.953Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:29:42.954Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:29:42.961Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:29:42.961Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:44.463Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T19:29:44.463Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:29:44.694Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T19:29:44.694Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T19:29:44.695Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:29:44.698Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:29:44.698Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:29:44.701Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:29:44.701Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:29:44.701Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:29:44.709Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:29:44.709Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:49.211Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T19:29:49.212Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T19:29:49.212Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T19:29:49.484Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T19:29:49.484Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T19:29:49.484Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T19:29:49.484Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T19:29:49.488Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T19:29:49.488Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T19:29:49.488Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T19:29:49.490Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:29:49.490Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T19:29:49.491Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T19:29:49.498Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T19:29:49.498Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:29:53.999Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T19:29:54.001Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T19:29:54.094Z] [BOT] 📂 Loaded 8951 existing routing entries
[2026-01-25T19:29:54.205Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T19:29:54.205Z] [BOT] Total entries: 8961
   Timestamp: 2026-01-25T19:29:54.163Z
[2026-01-25T19:29:54.205Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T19:29:54.205Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T19:29:54.206Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-25T19:29:54.206Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T19:29:54.206Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T19:29:54.206Z] [BOT] [STATS] Channel stats saved
[2026-01-25T19:29:56.225Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2489) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*