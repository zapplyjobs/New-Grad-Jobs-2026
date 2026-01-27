# Discord Bot Execution Audit
**Timestamp:** 2026-01-27T12:22:01.670Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-27T12:21:29.967Z] ========================================
[2026-01-27T12:21:29.969Z] Discord Bot Execution Log
[2026-01-27T12:21:29.969Z] Environment: GitHub Actions
[2026-01-27T12:21:29.969Z] Node Version: v20.20.0
[2026-01-27T12:21:29.969Z] ========================================
[2026-01-27T12:21:29.969Z] Environment Variables Check:
[2026-01-27T12:21:29.969Z] DISCORD_TOKEN: ✅ Set
[2026-01-27T12:21:29.969Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.969Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-27T12:21:29.970Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-27T12:21:29.970Z] 
Multi-Channel Configuration:
[2026-01-27T12:21:29.970Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.970Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.970Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.970Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.970Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.970Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.970Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.970Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.970Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-27T12:21:29.970Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-27T12:21:29.970Z] 
Data Files Check:
[2026-01-27T12:21:29.972Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-27T12:21:29.975Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 384588 bytes)
[2026-01-27T12:21:29.975Z] 
========================================
[2026-01-27T12:21:29.975Z] Starting Enhanced Discord Bot...
[2026-01-27T12:21:29.975Z] ========================================
[2026-01-27T12:21:30.496Z] [BOT] ✅ Loaded V2 database: 666 jobs
[2026-01-27T12:21:31.056Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-27T12:21:31.056Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-27T12:21:31.057Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-27T12:21:31.179Z] [BOT] ✅ Loaded pending queue: 2920 total (2870 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-27T12:21:31.182Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-27T12:21:31.183Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-27T12:21:31.183Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-27T12:21:31.184Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-27T12:21:31.185Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-27T12:21:31.185Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-27T12:21:31.188Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-27T12:21:31.189Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T12:21:31.189Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T12:21:31.205Z] [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-27T12:21:31.398Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-27T12:21:31.398Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T12:21:31.398Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-27T12:21:31.399Z] [BOT] 💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T12:21:31.401Z] [BOT] ✅ Loaded V2 database: 666 jobs
[2026-01-27T12:21:31.401Z] [BOT] 💾 DISK STATE: 666 jobs on disk
[2026-01-27T12:21:31.401Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T12:21:31.403Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T12:21:31.403Z] [BOT] 💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T12:21:31.403Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-27T12:21:31.409Z] [BOT] 📦 Archived 30 jobs to 2026-01.json (30 total in archive)
[2026-01-27T12:21:31.409Z] [BOT] ✅ Archiving complete: 30 archived, 636 active
[2026-01-27T12:21:31.416Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-27T12:21:31.417Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:32.918Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-27T12:21:32.919Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T12:21:33.246Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-27T12:21:33.246Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-27T12:21:33.247Z] [BOT] 💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:33.249Z] [BOT] ✅ Loaded V2 database: 636 jobs
💾 DISK STATE: 636 jobs on disk
[2026-01-27T12:21:33.249Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T12:21:33.250Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T12:21:33.251Z] [BOT] 💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:33.251Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:33.256Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-27T12:21:33.256Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:34.757Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-27T12:21:34.757Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T12:21:34.953Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-27T12:21:34.953Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-27T12:21:34.953Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-27T12:21:34.953Z] [BOT] 💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:34.955Z] [BOT] ✅ Loaded V2 database: 636 jobs
[2026-01-27T12:21:34.955Z] [BOT] 💾 DISK STATE: 636 jobs on disk
[2026-01-27T12:21:34.955Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T12:21:34.956Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T12:21:34.956Z] [BOT] 💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:34.957Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:34.962Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:36.462Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-27T12:21:36.463Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T12:21:36.661Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-27T12:21:36.661Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:36.664Z] [BOT] ✅ Loaded V2 database: 636 jobs
💾 DISK STATE: 636 jobs on disk
[2026-01-27T12:21:36.664Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T12:21:36.665Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:36.666Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:36.671Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:41.172Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-27T12:21:41.172Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-27T12:21:41.173Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T12:21:41.601Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-27T12:21:41.601Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-27T12:21:41.601Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:41.604Z] [BOT] ✅ Loaded V2 database: 636 jobs
[2026-01-27T12:21:41.604Z] [BOT] 💾 DISK STATE: 636 jobs on disk
[2026-01-27T12:21:41.604Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T12:21:41.606Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T12:21:41.606Z] [BOT] 💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:41.607Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:41.613Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-27T12:21:41.613Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:43.115Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T12:21:43.115Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T12:21:43.426Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-27T12:21:43.426Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:43.429Z] [BOT] ✅ Loaded V2 database: 636 jobs
💾 DISK STATE: 636 jobs on disk
[2026-01-27T12:21:43.429Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T12:21:43.431Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:43.431Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:43.437Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-27T12:21:43.437Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:44.938Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-27T12:21:44.938Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T12:21:45.206Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-27T12:21:45.207Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-27T12:21:45.207Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:45.209Z] [BOT] ✅ Loaded V2 database: 636 jobs
[2026-01-27T12:21:45.209Z] [BOT] 💾 DISK STATE: 636 jobs on disk
[2026-01-27T12:21:45.209Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T12:21:45.211Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T12:21:45.211Z] [BOT] 💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:45.211Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:45.217Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:46.718Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-27T12:21:46.718Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T12:21:46.946Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-27T12:21:46.946Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:46.948Z] [BOT] ✅ Loaded V2 database: 636 jobs
💾 DISK STATE: 636 jobs on disk
[2026-01-27T12:21:46.949Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T12:21:46.950Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:46.950Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:46.955Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-27T12:21:46.955Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:48.456Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T12:21:48.456Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T12:21:48.905Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-27T12:21:48.905Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-27T12:21:48.905Z] [BOT] 💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:48.907Z] [BOT] ✅ Loaded V2 database: 636 jobs
💾 DISK STATE: 636 jobs on disk
[2026-01-27T12:21:48.907Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T12:21:48.909Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T12:21:48.909Z] [BOT] 💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:48.909Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:48.915Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-27T12:21:48.915Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:53.418Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-27T12:21:53.419Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-27T12:21:53.419Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-27T12:21:53.674Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-27T12:21:53.674Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-27T12:21:53.675Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:53.677Z] [BOT] ✅ Loaded V2 database: 636 jobs
[2026-01-27T12:21:53.677Z] [BOT] 💾 DISK STATE: 636 jobs on disk
[2026-01-27T12:21:53.677Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=636
[2026-01-27T12:21:53.678Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T12:21:53.678Z] [BOT] 💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:53.679Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:53.685Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-27T12:21:53.685Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T12:21:58.187Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-27T12:21:58.188Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-27T12:21:58.295Z] [BOT] 📂 Loaded 9641 existing routing entries
[2026-01-27T12:21:58.419Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-27T12:21:58.419Z] [BOT] Total entries: 9651
   Timestamp: 2026-01-27T12:21:58.370Z
[2026-01-27T12:21:58.419Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_b2dc3916.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
[2026-01-27T12:21:58.419Z] [BOT] Skipped: 0
[2026-01-27T12:21:58.420Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-27T12:21:58.420Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-27T12:21:58.420Z] [BOT] [STATS] Channel stats saved
[2026-01-27T12:21:58.420Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 636 jobs in memory (cached)
[2026-01-27T12:21:58.429Z] [BOT] ✅ Loaded V2 database: 636 jobs
💾 DISK STATE: 636 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=636
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 636 jobs (merged disk + memory)
[2026-01-27T12:21:58.429Z] [BOT] ✅ No jobs to archive (all 636 jobs within 7-day window)
[2026-01-27T12:21:58.437Z] [BOT] 💾 Saved posted_jobs.json: 636 active jobs
[2026-01-27T12:21:58.437Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-27T12:22:00.456Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*