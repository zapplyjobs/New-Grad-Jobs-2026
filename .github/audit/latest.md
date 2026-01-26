# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T15:12:20.009Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T15:11:48.365Z] ========================================
[2026-01-26T15:11:48.367Z] Discord Bot Execution Log
[2026-01-26T15:11:48.367Z] Environment: GitHub Actions
[2026-01-26T15:11:48.367Z] Node Version: v20.20.0
[2026-01-26T15:11:48.367Z] ========================================
[2026-01-26T15:11:48.367Z] Environment Variables Check:
[2026-01-26T15:11:48.367Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T15:11:48.368Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.368Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T15:11:48.368Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T15:11:48.368Z] 
Multi-Channel Configuration:
[2026-01-26T15:11:48.368Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.368Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.368Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.368Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.368Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.368Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.369Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.369Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.369Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T15:11:48.369Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T15:11:48.369Z] 
Data Files Check:
[2026-01-26T15:11:48.370Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T15:11:48.374Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 495143 bytes)
[2026-01-26T15:11:48.374Z] 
========================================
[2026-01-26T15:11:48.374Z] Starting Enhanced Discord Bot...
[2026-01-26T15:11:48.374Z] ========================================
[2026-01-26T15:11:48.956Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T15:11:49.694Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T15:11:49.695Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T15:11:49.695Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T15:11:49.825Z] [BOT] ✅ Loaded pending queue: 2860 total (2810 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T15:11:49.831Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T15:11:49.832Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T15:11:49.832Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T15:11:49.833Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T15:11:49.834Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T15:11:49.834Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T15:11:49.839Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T15:11:49.839Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T15:11:49.840Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:11:49.863Z] [BOT ERROR] (node:2603) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T15:11:50.052Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T15:11:50.052Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T15:11:50.052Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T15:11:50.053Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:11:50.055Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T15:11:50.055Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:11:50.056Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:11:50.058Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:11:50.058Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:11:50.058Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:11:50.066Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T15:11:50.066Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:11:51.569Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:11:51.849Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T15:11:51.849Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T15:11:51.849Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:11:51.852Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:11:51.852Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:11:51.854Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:11:51.855Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:11:51.861Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T15:11:51.862Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:11:53.362Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T15:11:53.362Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:11:53.572Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T15:11:53.572Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T15:11:53.572Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T15:11:53.572Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:11:53.575Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:11:53.575Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:11:53.576Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:11:53.577Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:11:53.577Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:11:53.584Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T15:11:55.085Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T15:11:55.281Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T15:11:55.281Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T15:11:55.281Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T15:11:55.281Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:11:55.284Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:11:55.284Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:11:55.286Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:11:55.286Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:11:55.287Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:11:55.293Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T15:11:59.794Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T15:11:59.795Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T15:11:59.795Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:12:00.112Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T15:12:00.112Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T15:12:00.112Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T15:12:00.112Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:12:00.116Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:12:00.116Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:12:00.118Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:12:00.118Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:12:00.119Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:12:00.127Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T15:12:00.128Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:12:01.629Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T15:12:01.629Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:12:01.894Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T15:12:01.894Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T15:12:01.894Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:12:01.897Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T15:12:01.897Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:12:01.897Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:12:01.899Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:12:01.900Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:12:01.907Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T15:12:03.408Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T15:12:03.408Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:12:03.564Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T15:12:03.564Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:12:03.568Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:12:03.568Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:12:03.571Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:12:03.571Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:12:03.571Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:12:03.578Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T15:12:03.578Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:12:05.079Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T15:12:05.080Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:12:05.465Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T15:12:05.465Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T15:12:05.465Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:12:05.468Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:12:05.468Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:12:05.471Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:12:05.471Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:12:05.471Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:12:05.477Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T15:12:05.478Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:12:06.979Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T15:12:06.979Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T15:12:07.195Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T15:12:07.195Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T15:12:07.195Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T15:12:07.195Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:12:07.198Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:12:07.198Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:12:07.199Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:12:07.199Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:12:07.200Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:12:07.207Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T15:12:07.207Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:12:11.708Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T15:12:11.709Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T15:12:11.709Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T15:12:12.035Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T15:12:12.035Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T15:12:12.036Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:12:12.038Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T15:12:12.038Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:12:12.040Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:12:12.041Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:12:12.048Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T15:12:12.048Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T15:12:16.550Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T15:12:16.551Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T15:12:16.649Z] [BOT] 📂 Loaded 9521 existing routing entries
[2026-01-26T15:12:16.774Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T15:12:16.775Z] [BOT] Total entries: 9531
   Timestamp: 2026-01-26T15:12:16.726Z
[2026-01-26T15:12:16.775Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T15:12:16.775Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T15:12:16.776Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T15:12:16.776Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T15:12:16.776Z] [BOT] [STATS] Channel stats saved
[2026-01-26T15:12:16.776Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 861 jobs in memory (cached)
[2026-01-26T15:12:16.786Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=861
[2026-01-26T15:12:16.787Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T15:12:16.787Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T15:12:16.788Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T15:12:16.797Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T15:12:16.797Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-26T15:12:18.818Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2603) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*