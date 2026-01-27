# Discord Bot Execution Audit
**Timestamp:** 2026-01-27T06:19:59.145Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-27T06:19:29.158Z] ========================================
[2026-01-27T06:19:29.160Z] Discord Bot Execution Log
[2026-01-27T06:19:29.160Z] Environment: GitHub Actions
[2026-01-27T06:19:29.160Z] Node Version: v20.20.0
[2026-01-27T06:19:29.160Z] ========================================
[2026-01-27T06:19:29.160Z] Environment Variables Check:
[2026-01-27T06:19:29.160Z] DISCORD_TOKEN: ✅ Set
[2026-01-27T06:19:29.160Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.160Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-27T06:19:29.161Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-27T06:19:29.161Z] 
Multi-Channel Configuration:
[2026-01-27T06:19:29.161Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.161Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.161Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.161Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.161Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.161Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.161Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.161Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.161Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-27T06:19:29.161Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-27T06:19:29.161Z] 
Data Files Check:
[2026-01-27T06:19:29.162Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-27T06:19:29.166Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 445110 bytes)
[2026-01-27T06:19:29.166Z] 
========================================
[2026-01-27T06:19:29.166Z] Starting Enhanced Discord Bot...
[2026-01-27T06:19:29.166Z] ========================================
[2026-01-27T06:19:29.688Z] [BOT] ✅ Loaded V2 database: 771 jobs
[2026-01-27T06:19:30.229Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-27T06:19:30.230Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-27T06:19:30.230Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-27T06:19:30.351Z] [BOT] ✅ Loaded pending queue: 2916 total (2866 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-27T06:19:30.353Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-27T06:19:30.354Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-27T06:19:30.354Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-27T06:19:30.355Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-27T06:19:30.355Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-27T06:19:30.356Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-27T06:19:30.359Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-27T06:19:30.359Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T06:19:30.360Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T06:19:30.376Z] [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-27T06:19:30.591Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-27T06:19:30.591Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T06:19:30.592Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-27T06:19:30.592Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-27T06:19:30.594Z] [BOT] ✅ Loaded V2 database: 771 jobs
[2026-01-27T06:19:30.594Z] [BOT] 💾 DISK STATE: 771 jobs on disk
[2026-01-27T06:19:30.595Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-27T06:19:30.596Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T06:19:30.596Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-27T06:19:30.597Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-27T06:19:30.603Z] [BOT] 📦 Archived 88 jobs to 2026-01.json (88 total in archive)
[2026-01-27T06:19:30.603Z] [BOT] ✅ Archiving complete: 88 archived, 683 active
[2026-01-27T06:19:30.609Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:32.112Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T06:19:32.217Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-27T06:19:32.217Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-27T06:19:32.217Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-27T06:19:32.218Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:32.220Z] [BOT] ✅ Loaded V2 database: 683 jobs
💾 DISK STATE: 683 jobs on disk
[2026-01-27T06:19:32.220Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T06:19:32.221Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T06:19:32.221Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T06:19:32.222Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:32.227Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:33.729Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-27T06:19:33.729Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T06:19:33.950Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-27T06:19:33.951Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-27T06:19:33.951Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-27T06:19:33.951Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:33.953Z] [BOT] ✅ Loaded V2 database: 683 jobs
[2026-01-27T06:19:33.953Z] [BOT] 💾 DISK STATE: 683 jobs on disk
[2026-01-27T06:19:33.953Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T06:19:33.954Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T06:19:33.955Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T06:19:33.955Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:33.960Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:35.462Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-27T06:19:35.462Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T06:19:35.566Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-27T06:19:35.566Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-27T06:19:35.566Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:35.568Z] [BOT] ✅ Loaded V2 database: 683 jobs
💾 DISK STATE: 683 jobs on disk
[2026-01-27T06:19:35.569Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T06:19:35.570Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T06:19:35.571Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:35.575Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
[2026-01-27T06:19:35.575Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:40.077Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-27T06:19:40.078Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-27T06:19:40.078Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T06:19:40.366Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-27T06:19:40.367Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-27T06:19:40.367Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:40.369Z] [BOT] ✅ Loaded V2 database: 683 jobs
[2026-01-27T06:19:40.369Z] [BOT] 💾 DISK STATE: 683 jobs on disk
[2026-01-27T06:19:40.371Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T06:19:40.372Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T06:19:40.372Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T06:19:40.373Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:40.381Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
[2026-01-27T06:19:40.381Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:41.883Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T06:19:41.883Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T06:19:42.023Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-27T06:19:42.023Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T06:19:42.023Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:42.026Z] [BOT] ✅ Loaded V2 database: 683 jobs
[2026-01-27T06:19:42.026Z] [BOT] 💾 DISK STATE: 683 jobs on disk
[2026-01-27T06:19:42.026Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T06:19:42.028Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T06:19:42.028Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T06:19:42.028Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:42.034Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
[2026-01-27T06:19:42.035Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:43.535Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T06:19:43.535Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T06:19:43.683Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-27T06:19:43.683Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T06:19:43.683Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:43.685Z] [BOT] ✅ Loaded V2 database: 683 jobs
💾 DISK STATE: 683 jobs on disk
[2026-01-27T06:19:43.686Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T06:19:43.687Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T06:19:43.687Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T06:19:43.688Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:43.694Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
[2026-01-27T06:19:43.694Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:45.195Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-27T06:19:45.195Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T06:19:45.408Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-27T06:19:45.408Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-27T06:19:45.408Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-27T06:19:45.408Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:45.410Z] [BOT] ✅ Loaded V2 database: 683 jobs
[2026-01-27T06:19:45.410Z] [BOT] 💾 DISK STATE: 683 jobs on disk
[2026-01-27T06:19:45.410Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T06:19:45.412Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T06:19:45.412Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T06:19:45.412Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:45.418Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:46.918Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-27T06:19:46.918Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T06:19:47.039Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-27T06:19:47.039Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-27T06:19:47.039Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-27T06:19:47.039Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:47.041Z] [BOT] ✅ Loaded V2 database: 683 jobs
[2026-01-27T06:19:47.041Z] [BOT] 💾 DISK STATE: 683 jobs on disk
[2026-01-27T06:19:47.041Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T06:19:47.043Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T06:19:47.043Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T06:19:47.043Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:47.048Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:51.550Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-27T06:19:51.551Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-27T06:19:51.551Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-27T06:19:51.771Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-27T06:19:51.771Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-27T06:19:51.771Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-27T06:19:51.772Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:51.774Z] [BOT] ✅ Loaded V2 database: 683 jobs
[2026-01-27T06:19:51.774Z] [BOT] 💾 DISK STATE: 683 jobs on disk
[2026-01-27T06:19:51.774Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T06:19:51.776Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T06:19:51.776Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T06:19:51.777Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:51.783Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
[2026-01-27T06:19:51.783Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:56.285Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-27T06:19:56.287Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-27T06:19:56.391Z] [BOT] 📂 Loaded 9621 existing routing entries
[2026-01-27T06:19:56.509Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-27T06:19:56.509Z] [BOT] Total entries: 9631
   Timestamp: 2026-01-27T06:19:56.463Z
[2026-01-27T06:19:56.510Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_b2dc3916.jsonl
[2026-01-27T06:19:56.510Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-27T06:19:56.510Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-27T06:19:56.511Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T06:19:56.520Z] [BOT] ✅ Loaded V2 database: 683 jobs
💾 DISK STATE: 683 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=683
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 683 jobs (merged disk + memory)
✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-27T06:19:56.526Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T06:19:56.526Z] [BOT] ✅ Database saved successfully
[2026-01-27T06:19:58.543Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*