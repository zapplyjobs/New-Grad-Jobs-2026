# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T05:49:59.083Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T05:49:27.673Z] ========================================
[2026-01-28T05:49:27.675Z] Discord Bot Execution Log
[2026-01-28T05:49:27.675Z] Environment: GitHub Actions
[2026-01-28T05:49:27.675Z] Node Version: v20.20.0
[2026-01-28T05:49:27.675Z] ========================================
[2026-01-28T05:49:27.675Z] Environment Variables Check:
[2026-01-28T05:49:27.675Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T05:49:27.676Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.676Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T05:49:27.676Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T05:49:27.676Z] 
Multi-Channel Configuration:
[2026-01-28T05:49:27.676Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.676Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.676Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.676Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.676Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.676Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.676Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.676Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.677Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T05:49:27.677Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T05:49:27.677Z] 
Data Files Check:
[2026-01-28T05:49:27.678Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-28T05:49:27.680Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 181837 bytes)
[2026-01-28T05:49:27.680Z] 
========================================
[2026-01-28T05:49:27.680Z] Starting Enhanced Discord Bot...
[2026-01-28T05:49:27.680Z] ========================================
[2026-01-28T05:49:28.197Z] [BOT] ✅ Loaded V2 database: 312 jobs
[2026-01-28T05:49:28.997Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-28T05:49:28.997Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T05:49:28.998Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T05:49:29.114Z] [BOT] ✅ Loaded pending queue: 2986 total (2936 pending, 50 enriched, 0 posted)
[2026-01-28T05:49:29.114Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-28T05:49:29.117Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T05:49:29.117Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-28T05:49:29.118Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-28T05:49:29.119Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-28T05:49:29.119Z] [BOT] (2 grouped as same job with different locations)
[2026-01-28T05:49:29.119Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T05:49:29.123Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-28T05:49:29.123Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T05:49:29.123Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T05:49:29.140Z] [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T05:49:29.304Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-28T05:49:29.304Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T05:49:29.305Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-28T05:49:29.305Z] [BOT] 💾 BEFORE MERGE: 312 jobs in memory (cached)
[2026-01-28T05:49:29.306Z] [BOT] ✅ Loaded V2 database: 312 jobs
[2026-01-28T05:49:29.306Z] [BOT] 💾 DISK STATE: 312 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=312
[2026-01-28T05:49:29.307Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T05:49:29.307Z] [BOT] 💾 AFTER MERGE: 312 jobs (merged disk + memory)
[2026-01-28T05:49:29.308Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T05:49:29.313Z] [BOT] 📦 Archived 46 jobs to 2026-01.json (46 total in archive)
[2026-01-28T05:49:29.313Z] [BOT] ✅ Archiving complete: 46 archived, 266 active
[2026-01-28T05:49:29.316Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
[2026-01-28T05:49:29.316Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:30.819Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-28T05:49:30.819Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T05:49:30.999Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-28T05:49:31.000Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-28T05:49:31.000Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-28T05:49:31.000Z] [BOT] 💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-28T05:49:31.001Z] [BOT] ✅ Loaded V2 database: 266 jobs
💾 DISK STATE: 266 jobs on disk
[2026-01-28T05:49:31.001Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-28T05:49:31.002Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-28T05:49:31.002Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-28T05:49:31.005Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
[2026-01-28T05:49:31.005Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:32.504Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T05:49:32.733Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-28T05:49:32.733Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-28T05:49:32.734Z] [BOT] ✅ Loaded V2 database: 266 jobs
💾 DISK STATE: 266 jobs on disk
[2026-01-28T05:49:32.734Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-28T05:49:32.735Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-28T05:49:32.735Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-28T05:49:32.738Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:34.238Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T05:49:34.613Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-28T05:49:34.613Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-28T05:49:34.614Z] [BOT] ✅ Loaded V2 database: 266 jobs
💾 DISK STATE: 266 jobs on disk
[2026-01-28T05:49:34.615Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-28T05:49:34.615Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T05:49:34.615Z] [BOT] 💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-28T05:49:34.615Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-28T05:49:34.618Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
[2026-01-28T05:49:34.618Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:39.120Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-28T05:49:39.120Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-28T05:49:39.121Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T05:49:39.440Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-28T05:49:39.441Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-28T05:49:39.442Z] [BOT] ✅ Loaded V2 database: 266 jobs
[2026-01-28T05:49:39.442Z] [BOT] 💾 DISK STATE: 266 jobs on disk
[2026-01-28T05:49:39.442Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-28T05:49:39.443Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T05:49:39.443Z] [BOT] 💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-28T05:49:39.443Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-28T05:49:39.447Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
[2026-01-28T05:49:39.447Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:40.949Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-28T05:49:40.949Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T05:49:41.212Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T05:49:41.213Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-28T05:49:41.213Z] [BOT] 💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-28T05:49:41.214Z] [BOT] ✅ Loaded V2 database: 266 jobs
[2026-01-28T05:49:41.214Z] [BOT] 💾 DISK STATE: 266 jobs on disk
[2026-01-28T05:49:41.214Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-28T05:49:41.215Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T05:49:41.215Z] [BOT] 💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-28T05:49:41.215Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-28T05:49:41.218Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
[2026-01-28T05:49:41.218Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:42.719Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-28T05:49:42.719Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T05:49:42.911Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T05:49:42.911Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-28T05:49:42.913Z] [BOT] ✅ Loaded V2 database: 266 jobs
💾 DISK STATE: 266 jobs on disk
[2026-01-28T05:49:42.913Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-28T05:49:42.913Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-28T05:49:42.914Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-28T05:49:42.917Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
[2026-01-28T05:49:42.917Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:44.419Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T05:49:44.419Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T05:49:44.576Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-28T05:49:44.576Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-28T05:49:44.578Z] [BOT] ✅ Loaded V2 database: 266 jobs
[2026-01-28T05:49:44.578Z] [BOT] 💾 DISK STATE: 266 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-28T05:49:44.578Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T05:49:44.579Z] [BOT] 💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-28T05:49:44.579Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-28T05:49:44.582Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
[2026-01-28T05:49:44.583Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:46.084Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-28T05:49:46.084Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T05:49:46.405Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-28T05:49:46.405Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-28T05:49:46.405Z] [BOT] 💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-28T05:49:46.406Z] [BOT] ✅ Loaded V2 database: 266 jobs
[2026-01-28T05:49:46.406Z] [BOT] 💾 DISK STATE: 266 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-28T05:49:46.407Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T05:49:46.407Z] [BOT] 💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-28T05:49:46.407Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-28T05:49:46.411Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
[2026-01-28T05:49:46.411Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:50.913Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T05:49:50.914Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-28T05:49:50.914Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T05:49:51.134Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-28T05:49:51.134Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-28T05:49:51.134Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 266 jobs in memory (cached)
[2026-01-28T05:49:51.136Z] [BOT] ✅ Loaded V2 database: 266 jobs
[2026-01-28T05:49:51.136Z] [BOT] 💾 DISK STATE: 266 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=266
[2026-01-28T05:49:51.136Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T05:49:51.136Z] [BOT] 💾 AFTER MERGE: 266 jobs (merged disk + memory)
[2026-01-28T05:49:51.138Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (47 total in archive)
[2026-01-28T05:49:51.138Z] [BOT] ✅ Archiving complete: 1 archived, 265 active
[2026-01-28T05:49:51.141Z] [BOT] 💾 Saved posted_jobs.json: 265 active jobs
[2026-01-28T05:49:51.141Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T05:49:55.643Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T05:49:55.645Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T05:49:55.749Z] [BOT] 📂 Loaded 9711 existing routing entries
[2026-01-28T05:49:55.868Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9721
[2026-01-28T05:49:55.868Z] [BOT] Timestamp: 2026-01-28T05:49:55.821Z
[2026-01-28T05:49:55.869Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
[2026-01-28T05:49:55.869Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-28T05:49:55.869Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-28T05:49:55.869Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-28T05:49:55.869Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-28T05:49:55.869Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 265 jobs in memory (cached)
[2026-01-28T05:49:55.876Z] [BOT] ✅ Loaded V2 database: 265 jobs
💾 DISK STATE: 265 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=265
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 265 jobs (merged disk + memory)
[2026-01-28T05:49:55.877Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (48 total in archive)
[2026-01-28T05:49:55.877Z] [BOT] ✅ Archiving complete: 1 archived, 264 active
[2026-01-28T05:49:55.880Z] [BOT] 💾 Saved posted_jobs.json: 264 active jobs
[2026-01-28T05:49:55.881Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-28T05:49:57.900Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*