# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T23:43:27.534Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T23:42:55.985Z] ========================================
[2026-01-25T23:42:55.986Z] Discord Bot Execution Log
[2026-01-25T23:42:55.987Z] Environment: GitHub Actions
[2026-01-25T23:42:55.987Z] Node Version: v20.20.0
[2026-01-25T23:42:55.987Z] ========================================
[2026-01-25T23:42:55.987Z] Environment Variables Check:
[2026-01-25T23:42:55.987Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T23:42:55.987Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.987Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T23:42:55.987Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T23:42:55.987Z] 
Multi-Channel Configuration:
[2026-01-25T23:42:55.987Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.987Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.988Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.988Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.988Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.988Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.988Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.988Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.988Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T23:42:55.988Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T23:42:55.988Z] 
Data Files Check:
[2026-01-25T23:42:55.989Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T23:42:55.993Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 565628 bytes)
[2026-01-25T23:42:55.993Z] 
========================================
[2026-01-25T23:42:55.993Z] Starting Enhanced Discord Bot...
[2026-01-25T23:42:55.994Z] ========================================
[2026-01-25T23:42:56.524Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:42:56.993Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T23:42:56.993Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T23:42:56.994Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T23:42:57.114Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T23:42:57.117Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T23:42:57.117Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T23:42:57.117Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T23:42:57.118Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T23:42:57.119Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T23:42:57.119Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T23:42:57.122Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T23:42:57.122Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T23:42:57.123Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:42:57.140Z] [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T23:42:57.455Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T23:42:57.456Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T23:42:57.456Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T23:42:57.456Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:42:57.460Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:42:57.460Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:42:57.460Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:42:57.462Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:42:57.463Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:42:57.463Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:42:57.474Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:42:58.977Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T23:42:58.978Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:42:59.221Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T23:42:59.221Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T23:42:59.222Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:42:59.225Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:42:59.225Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:42:59.225Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:42:59.227Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:42:59.227Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:42:59.228Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:42:59.235Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:43:00.735Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T23:43:00.736Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:43:01.089Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T23:43:01.089Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T23:43:01.090Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T23:43:01.090Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:43:01.093Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:43:01.093Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:43:01.093Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:43:01.095Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:43:01.095Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:43:01.096Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:43:01.103Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
[2026-01-25T23:43:01.103Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:43:02.604Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T23:43:02.604Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T23:43:03.039Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T23:43:03.039Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T23:43:03.039Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:43:03.043Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:43:03.043Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:43:03.043Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:43:03.045Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:43:03.045Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:43:03.045Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:43:03.052Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
[2026-01-25T23:43:03.052Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:43:07.554Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T23:43:07.555Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T23:43:07.555Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:43:07.843Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T23:43:07.843Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:43:07.847Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:43:07.847Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:43:07.848Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:43:07.850Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:43:07.850Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:43:07.851Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:43:07.860Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:43:09.362Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T23:43:09.362Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:43:09.777Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T23:43:09.778Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T23:43:09.778Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T23:43:09.778Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:43:09.781Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:43:09.781Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:43:09.783Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:43:09.783Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:43:09.784Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:43:09.792Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:43:11.293Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T23:43:11.293Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:43:11.507Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T23:43:11.508Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T23:43:11.508Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:43:11.511Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:43:11.512Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:43:11.514Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:43:11.514Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:43:11.515Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:43:11.523Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
[2026-01-25T23:43:11.523Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:43:13.025Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T23:43:13.025Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T23:43:13.025Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:43:13.347Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T23:43:13.347Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T23:43:13.348Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T23:43:13.348Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:43:13.351Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:43:13.351Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:43:13.351Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:43:13.353Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:43:13.353Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:43:13.354Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:43:13.361Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:43:14.862Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T23:43:14.863Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T23:43:15.083Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T23:43:15.083Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T23:43:15.084Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T23:43:15.084Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:43:15.087Z] [BOT] ✅ Loaded V2 database: 991 jobs
[2026-01-25T23:43:15.087Z] [BOT] 💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:43:15.087Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:43:15.089Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T23:43:15.090Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:43:15.090Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:43:15.098Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
[2026-01-25T23:43:15.098Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T23:43:19.600Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T23:43:19.600Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T23:43:19.601Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T23:43:19.956Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T23:43:19.956Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T23:43:19.957Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory
[2026-01-25T23:43:19.960Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-25T23:43:19.960Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=991
[2026-01-25T23:43:19.962Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-25T23:43:19.963Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-25T23:43:19.970Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T23:43:24.472Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T23:43:24.474Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T23:43:24.570Z] [BOT] 📂 Loaded 9121 existing routing entries
[2026-01-25T23:43:24.682Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9131
[2026-01-25T23:43:24.683Z] [BOT] Timestamp: 2026-01-25T23:43:24.640Z
[2026-01-25T23:43:24.683Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T23:43:24.683Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T23:43:24.683Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T23:43:24.683Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-25T23:43:24.684Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-25T23:43:24.684Z] [BOT] [STATS] Channel stats saved
[2026-01-25T23:43:26.702Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*