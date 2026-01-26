# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T21:16:59.026Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T21:16:27.441Z] ========================================
[2026-01-26T21:16:27.442Z] Discord Bot Execution Log
[2026-01-26T21:16:27.443Z] Environment: GitHub Actions
[2026-01-26T21:16:27.443Z] Node Version: v20.20.0
[2026-01-26T21:16:27.443Z] ========================================
[2026-01-26T21:16:27.443Z] Environment Variables Check:
[2026-01-26T21:16:27.443Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T21:16:27.443Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.443Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T21:16:27.443Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T21:16:27.443Z] 
Multi-Channel Configuration:
[2026-01-26T21:16:27.443Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.444Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.444Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.444Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.444Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.444Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.444Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.444Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.444Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T21:16:27.444Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T21:16:27.444Z] 
Data Files Check:
[2026-01-26T21:16:27.445Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T21:16:27.449Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 491965 bytes)
[2026-01-26T21:16:27.449Z] 
========================================
[2026-01-26T21:16:27.449Z] Starting Enhanced Discord Bot...
[2026-01-26T21:16:27.449Z] ========================================
[2026-01-26T21:16:27.965Z] [BOT] ✅ Loaded V2 database: 855 jobs
[2026-01-26T21:16:28.783Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T21:16:28.784Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T21:16:28.784Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T21:16:28.901Z] [BOT] ✅ Loaded pending queue: 2872 total (2822 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T21:16:28.904Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T21:16:28.905Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T21:16:28.905Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T21:16:28.906Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T21:16:28.907Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T21:16:28.907Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T21:16:28.907Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T21:16:28.910Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T21:16:28.911Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T21:16:28.911Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T21:16:28.928Z] [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T21:16:29.368Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T21:16:29.368Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T21:16:29.369Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T21:16:29.369Z] [BOT] 💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-26T21:16:29.372Z] [BOT] ✅ Loaded V2 database: 855 jobs
[2026-01-26T21:16:29.372Z] [BOT] 💾 DISK STATE: 855 jobs on disk
[2026-01-26T21:16:29.372Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-26T21:16:29.374Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T21:16:29.374Z] [BOT] 💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-26T21:16:29.375Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T21:16:29.388Z] [BOT] 📦 Archived 39 jobs to 2026-01.json (39 total in archive)
[2026-01-26T21:16:29.388Z] [BOT] ✅ Archiving complete: 39 archived, 816 active
[2026-01-26T21:16:29.394Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:30.897Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-26T21:16:30.897Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T21:16:31.060Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T21:16:31.060Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T21:16:31.060Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T21:16:31.060Z] [BOT] 💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:31.063Z] [BOT] ✅ Loaded V2 database: 816 jobs
[2026-01-26T21:16:31.063Z] [BOT] 💾 DISK STATE: 816 jobs on disk
[2026-01-26T21:16:31.063Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-26T21:16:31.065Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T21:16:31.065Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:31.065Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:31.072Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:32.572Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T21:16:32.873Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T21:16:32.873Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T21:16:32.873Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:32.876Z] [BOT] ✅ Loaded V2 database: 816 jobs
[2026-01-26T21:16:32.876Z] [BOT] 💾 DISK STATE: 816 jobs on disk
[2026-01-26T21:16:32.876Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-26T21:16:32.878Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T21:16:32.878Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:32.878Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:32.884Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
[2026-01-26T21:16:32.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:34.385Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T21:16:34.385Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T21:16:34.799Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T21:16:34.799Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:34.802Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
[2026-01-26T21:16:34.802Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-26T21:16:34.804Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:34.805Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:34.811Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:39.312Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T21:16:39.313Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T21:16:39.313Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T21:16:39.518Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T21:16:39.518Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T21:16:39.518Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T21:16:39.518Z] [BOT] 💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:39.522Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
[2026-01-26T21:16:39.522Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-26T21:16:39.524Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T21:16:39.524Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:39.525Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:39.533Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:41.035Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T21:16:41.035Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T21:16:41.228Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T21:16:41.229Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T21:16:41.229Z] [BOT] 💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:41.232Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
[2026-01-26T21:16:41.232Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-26T21:16:41.234Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T21:16:41.234Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:41.234Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:41.240Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
[2026-01-26T21:16:41.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:42.741Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T21:16:42.741Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T21:16:42.940Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T21:16:42.940Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T21:16:42.940Z] [BOT] 💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:42.944Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
[2026-01-26T21:16:42.944Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-26T21:16:42.947Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T21:16:42.947Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:42.947Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:42.953Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
[2026-01-26T21:16:42.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:44.454Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-26T21:16:44.454Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T21:16:44.727Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T21:16:44.727Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T21:16:44.728Z] [BOT] 💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:44.731Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
[2026-01-26T21:16:44.731Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-26T21:16:44.733Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T21:16:44.733Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:44.733Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:44.740Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:46.241Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T21:16:46.242Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T21:16:46.650Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T21:16:46.651Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T21:16:46.651Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:46.653Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
[2026-01-26T21:16:46.654Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-26T21:16:46.655Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T21:16:46.655Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:46.656Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:46.662Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
[2026-01-26T21:16:46.662Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:51.166Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T21:16:51.166Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T21:16:51.166Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T21:16:51.388Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T21:16:51.389Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T21:16:51.389Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:51.393Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
[2026-01-26T21:16:51.394Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=816
[2026-01-26T21:16:51.396Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T21:16:51.396Z] [BOT] 💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:51.397Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:51.407Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
[2026-01-26T21:16:51.407Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:55.909Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T21:16:55.911Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T21:16:56.020Z] [BOT] 📂 Loaded 9591 existing routing entries
[2026-01-26T21:16:56.140Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T21:16:56.141Z] [BOT] Total entries: 9601
   Timestamp: 2026-01-26T21:16:56.094Z
[2026-01-26T21:16:56.141Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T21:16:56.141Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T21:16:56.141Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T21:16:56.142Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T21:16:56.142Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-26T21:16:56.142Z] [BOT] 💾 BEFORE MERGE: 816 jobs in memory (cached)
[2026-01-26T21:16:56.151Z] [BOT] ✅ Loaded V2 database: 816 jobs
💾 DISK STATE: 816 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=816
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 816 jobs (merged disk + memory)
[2026-01-26T21:16:56.152Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2026-01-26T21:16:56.158Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T21:16:56.158Z] [BOT] ✅ Database saved successfully
[2026-01-26T21:16:58.176Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*