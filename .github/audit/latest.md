# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T06:21:06.747Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T06:20:35.045Z] ========================================
[2026-01-28T06:20:35.047Z] Discord Bot Execution Log
[2026-01-28T06:20:35.047Z] Environment: GitHub Actions
[2026-01-28T06:20:35.047Z] Node Version: v20.20.0
[2026-01-28T06:20:35.047Z] ========================================
[2026-01-28T06:20:35.047Z] Environment Variables Check:
[2026-01-28T06:20:35.048Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T06:20:35.048Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.048Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T06:20:35.048Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T06:20:35.048Z] 
Multi-Channel Configuration:
[2026-01-28T06:20:35.048Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.048Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.048Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.048Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.049Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.049Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.049Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.049Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.049Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T06:20:35.049Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T06:20:35.049Z] 
Data Files Check:
[2026-01-28T06:20:35.050Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-28T06:20:35.051Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 153748 bytes)
[2026-01-28T06:20:35.051Z] 
========================================
[2026-01-28T06:20:35.051Z] Starting Enhanced Discord Bot...
[2026-01-28T06:20:35.051Z] ========================================
[2026-01-28T06:20:35.576Z] [BOT] ✅ Loaded V2 database: 264 jobs
[2026-01-28T06:20:36.310Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-28T06:20:36.311Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T06:20:36.311Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T06:20:36.429Z] [BOT] ✅ Loaded pending queue: 2984 total (2934 pending, 50 enriched, 0 posted)
[2026-01-28T06:20:36.429Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-28T06:20:36.432Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T06:20:36.432Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-28T06:20:36.432Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-28T06:20:36.433Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-28T06:20:36.434Z] [BOT] (2 grouped as same job with different locations)
[2026-01-28T06:20:36.434Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T06:20:36.437Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-28T06:20:36.438Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T06:20:36.438Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T06:20:36.454Z] [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T06:20:36.765Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-28T06:20:36.765Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T06:20:36.766Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-28T06:20:36.766Z] [BOT] 💾 BEFORE MERGE: 264 jobs in memory (cached)
[2026-01-28T06:20:36.767Z] [BOT] ✅ Loaded V2 database: 264 jobs
💾 DISK STATE: 264 jobs on disk
[2026-01-28T06:20:36.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=264
[2026-01-28T06:20:36.768Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T06:20:36.768Z] [BOT] 💾 AFTER MERGE: 264 jobs (merged disk + memory)
[2026-01-28T06:20:36.769Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T06:20:36.774Z] [BOT] 📦 Archived 18 jobs to 2026-01.json (18 total in archive)
[2026-01-28T06:20:36.774Z] [BOT] ✅ Archiving complete: 18 archived, 246 active
[2026-01-28T06:20:36.777Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:20:36.777Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T06:20:38.279Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T06:20:38.642Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-28T06:20:38.643Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:20:38.644Z] [BOT] ✅ Loaded V2 database: 246 jobs
[2026-01-28T06:20:38.644Z] [BOT] 💾 DISK STATE: 246 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T06:20:38.644Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T06:20:38.644Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T06:20:38.645Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:20:38.647Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:20:38.647Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T06:20:40.148Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-28T06:20:40.148Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T06:20:40.320Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-28T06:20:40.320Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-28T06:20:40.321Z] [BOT] 💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:20:40.321Z] [BOT] ✅ Loaded V2 database: 246 jobs
[2026-01-28T06:20:40.322Z] [BOT] 💾 DISK STATE: 246 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T06:20:40.322Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T06:20:40.322Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T06:20:40.322Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:20:40.326Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:20:40.326Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T06:20:41.827Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T06:20:42.143Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-28T06:20:42.143Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:20:42.144Z] [BOT] ✅ Loaded V2 database: 246 jobs
💾 DISK STATE: 246 jobs on disk
[2026-01-28T06:20:42.144Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T06:20:42.145Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T06:20:42.145Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T06:20:42.145Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:20:42.148Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:20:42.148Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T06:20:46.649Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-28T06:20:46.650Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-28T06:20:46.650Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T06:20:46.836Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-28T06:20:46.836Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:20:46.837Z] [BOT] ✅ Loaded V2 database: 246 jobs
💾 DISK STATE: 246 jobs on disk
[2026-01-28T06:20:46.838Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T06:20:46.838Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T06:20:46.838Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T06:20:46.838Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:20:46.842Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:20:46.842Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T06:20:48.344Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T06:20:48.344Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T06:20:48.621Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-28T06:20:48.622Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:20:48.623Z] [BOT] ✅ Loaded V2 database: 246 jobs
[2026-01-28T06:20:48.623Z] [BOT] 💾 DISK STATE: 246 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T06:20:48.624Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T06:20:48.624Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T06:20:48.624Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:20:48.627Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T06:20:50.128Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-28T06:20:50.128Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T06:20:50.411Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T06:20:50.412Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:20:50.413Z] [BOT] ✅ Loaded V2 database: 246 jobs
[2026-01-28T06:20:50.413Z] [BOT] 💾 DISK STATE: 246 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T06:20:50.413Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T06:20:50.414Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T06:20:50.414Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:20:50.416Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:20:50.417Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T06:20:51.918Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-28T06:20:51.918Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T06:20:52.183Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-28T06:20:52.183Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:20:52.185Z] [BOT] ✅ Loaded V2 database: 246 jobs
💾 DISK STATE: 246 jobs on disk
[2026-01-28T06:20:52.185Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T06:20:52.185Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T06:20:52.186Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:20:52.189Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:20:52.189Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T06:20:53.691Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-28T06:20:53.691Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T06:20:53.928Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-28T06:20:53.928Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:20:53.929Z] [BOT] ✅ Loaded V2 database: 246 jobs
[2026-01-28T06:20:53.929Z] [BOT] 💾 DISK STATE: 246 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T06:20:53.931Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T06:20:53.931Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T06:20:53.932Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:20:53.934Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:20:53.934Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T06:20:58.437Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T06:20:58.437Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-28T06:20:58.437Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T06:20:58.717Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-28T06:20:58.717Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:20:58.719Z] [BOT] ✅ Loaded V2 database: 246 jobs
💾 DISK STATE: 246 jobs on disk
[2026-01-28T06:20:58.719Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=246
[2026-01-28T06:20:58.719Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T06:20:58.720Z] [BOT] 💾 AFTER MERGE: 246 jobs (merged disk + memory)
[2026-01-28T06:20:58.720Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:20:58.722Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:20:58.723Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T06:21:03.225Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T06:21:03.226Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T06:21:03.325Z] [BOT] 📂 Loaded 9721 existing routing entries
[2026-01-28T06:21:03.446Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-28T06:21:03.446Z] [BOT] Total entries: 9731
   Timestamp: 2026-01-28T06:21:03.398Z
[2026-01-28T06:21:03.447Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
   Total attempts: 10
[2026-01-28T06:21:03.447Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-28T06:21:03.447Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-28T06:21:03.447Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-28T06:21:03.447Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-28T06:21:03.448Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 246 jobs in memory (cached)
[2026-01-28T06:21:03.455Z] [BOT] ✅ Loaded V2 database: 246 jobs
💾 DISK STATE: 246 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=246
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 246 jobs (merged disk + memory)
✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-28T06:21:03.457Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-28T06:21:03.457Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-28T06:21:05.476Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*