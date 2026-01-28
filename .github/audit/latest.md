# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T02:57:39.664Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T02:57:08.330Z] ========================================
[2026-01-28T02:57:08.331Z] Discord Bot Execution Log
[2026-01-28T02:57:08.332Z] Environment: GitHub Actions
[2026-01-28T02:57:08.332Z] Node Version: v20.20.0
[2026-01-28T02:57:08.332Z] ========================================
[2026-01-28T02:57:08.332Z] Environment Variables Check:
[2026-01-28T02:57:08.332Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T02:57:08.332Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.332Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T02:57:08.332Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T02:57:08.332Z] 
Multi-Channel Configuration:
[2026-01-28T02:57:08.332Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.333Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.333Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.333Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.333Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.333Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.333Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.333Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.333Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T02:57:08.333Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T02:57:08.333Z] 
Data Files Check:
[2026-01-28T02:57:08.334Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-28T02:57:08.336Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 225531 bytes)
[2026-01-28T02:57:08.336Z] 
========================================
[2026-01-28T02:57:08.336Z] Starting Enhanced Discord Bot...
[2026-01-28T02:57:08.336Z] ========================================
[2026-01-28T02:57:08.847Z] [BOT] ✅ Loaded V2 database: 387 jobs
[2026-01-28T02:57:09.665Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-28T02:57:09.665Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T02:57:09.666Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T02:57:09.783Z] [BOT] ✅ Loaded pending queue: 2983 total (2933 pending, 50 enriched, 0 posted)
[2026-01-28T02:57:09.783Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-28T02:57:09.786Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T02:57:09.787Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-28T02:57:09.787Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-28T02:57:09.788Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-28T02:57:09.788Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-28T02:57:09.789Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T02:57:09.792Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-28T02:57:09.793Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T02:57:09.793Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T02:57:09.809Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T02:57:09.977Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-28T02:57:09.977Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T02:57:09.977Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-28T02:57:09.978Z] [BOT] 💾 BEFORE MERGE: 387 jobs in memory (cached)
[2026-01-28T02:57:09.979Z] [BOT] ✅ Loaded V2 database: 387 jobs
💾 DISK STATE: 387 jobs on disk
[2026-01-28T02:57:09.979Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=387
[2026-01-28T02:57:09.980Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T02:57:09.980Z] [BOT] 💾 AFTER MERGE: 387 jobs (merged disk + memory)
[2026-01-28T02:57:09.981Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T02:57:09.986Z] [BOT] 📦 Archived 61 jobs to 2026-01.json (61 total in archive)
[2026-01-28T02:57:09.987Z] [BOT] ✅ Archiving complete: 61 archived, 326 active
[2026-01-28T02:57:09.991Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-28T02:57:09.991Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:11.494Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T02:57:11.703Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-28T02:57:11.703Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:11.704Z] [BOT] ✅ Loaded V2 database: 326 jobs
💾 DISK STATE: 326 jobs on disk
[2026-01-28T02:57:11.705Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:11.705Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:11.706Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:11.709Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-28T02:57:11.709Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:13.210Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T02:57:13.526Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-28T02:57:13.526Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:13.528Z] [BOT] ✅ Loaded V2 database: 326 jobs
💾 DISK STATE: 326 jobs on disk
[2026-01-28T02:57:13.528Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:13.529Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T02:57:13.529Z] [BOT] 💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:13.529Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:13.532Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-28T02:57:13.532Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:15.032Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-28T02:57:15.032Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T02:57:15.214Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-28T02:57:15.214Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-28T02:57:15.214Z] [BOT] 💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:15.215Z] [BOT] ✅ Loaded V2 database: 326 jobs
💾 DISK STATE: 326 jobs on disk
[2026-01-28T02:57:15.215Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:15.216Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:15.216Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:15.219Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:19.721Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-28T02:57:19.722Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T02:57:19.722Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T02:57:19.989Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-28T02:57:19.990Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-28T02:57:19.990Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:19.991Z] [BOT] ✅ Loaded V2 database: 326 jobs
[2026-01-28T02:57:19.991Z] [BOT] 💾 DISK STATE: 326 jobs on disk
[2026-01-28T02:57:19.991Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:19.992Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T02:57:19.992Z] [BOT] 💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:19.993Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:19.997Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-28T02:57:19.997Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:21.498Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T02:57:21.499Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T02:57:21.803Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T02:57:21.803Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-28T02:57:21.803Z] [BOT] 💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:21.804Z] [BOT] ✅ Loaded V2 database: 326 jobs
[2026-01-28T02:57:21.804Z] [BOT] 💾 DISK STATE: 326 jobs on disk
[2026-01-28T02:57:21.804Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:21.805Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:21.806Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:21.810Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-28T02:57:21.810Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:23.311Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-28T02:57:23.311Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T02:57:23.515Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-28T02:57:23.515Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:23.517Z] [BOT] ✅ Loaded V2 database: 326 jobs
💾 DISK STATE: 326 jobs on disk
[2026-01-28T02:57:23.517Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:23.518Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:23.518Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:23.521Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-28T02:57:23.521Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:25.023Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-28T02:57:25.023Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T02:57:25.315Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-28T02:57:25.316Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-28T02:57:25.316Z] [BOT] 💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:25.317Z] [BOT] ✅ Loaded V2 database: 326 jobs
[2026-01-28T02:57:25.317Z] [BOT] 💾 DISK STATE: 326 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:25.318Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T02:57:25.318Z] [BOT] 💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:25.318Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:25.322Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-28T02:57:25.322Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:26.824Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T02:57:26.824Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T02:57:27.033Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-28T02:57:27.034Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:27.035Z] [BOT] ✅ Loaded V2 database: 326 jobs
💾 DISK STATE: 326 jobs on disk
[2026-01-28T02:57:27.035Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:27.036Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:27.036Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:27.040Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:31.542Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T02:57:31.542Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T02:57:31.815Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-28T02:57:31.815Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-28T02:57:31.815Z] [BOT] 💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:31.817Z] [BOT] ✅ Loaded V2 database: 326 jobs
💾 DISK STATE: 326 jobs on disk
[2026-01-28T02:57:31.817Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:31.818Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T02:57:31.818Z] [BOT] 💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:31.818Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:31.823Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-28T02:57:31.823Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T02:57:36.325Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T02:57:36.326Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T02:57:36.429Z] [BOT] 📂 Loaded 9691 existing routing entries
[2026-01-28T02:57:36.557Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-28T02:57:36.557Z] [BOT] Total entries: 9701
   Timestamp: 2026-01-28T02:57:36.503Z
[2026-01-28T02:57:36.557Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
[2026-01-28T02:57:36.557Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-28T02:57:36.557Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-28T02:57:36.558Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-28T02:57:36.558Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-28T02:57:36.558Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-28T02:57:36.558Z] [BOT] 💾 BEFORE MERGE: 326 jobs in memory (cached)
[2026-01-28T02:57:36.559Z] [BOT] ✅ Loaded V2 database: 326 jobs
[2026-01-28T02:57:36.559Z] [BOT] 💾 DISK STATE: 326 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=326
[2026-01-28T02:57:36.560Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T02:57:36.560Z] [BOT] 💾 AFTER MERGE: 326 jobs (merged disk + memory)
[2026-01-28T02:57:36.561Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-28T02:57:36.564Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-28T02:57:36.564Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-28T02:57:38.583Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*