# Discord Bot Execution Audit
**Timestamp:** 2026-01-27T09:21:01.083Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-27T09:20:29.239Z] ========================================
[2026-01-27T09:20:29.241Z] Discord Bot Execution Log
[2026-01-27T09:20:29.241Z] Environment: GitHub Actions
[2026-01-27T09:20:29.241Z] Node Version: v20.20.0
[2026-01-27T09:20:29.241Z] ========================================
[2026-01-27T09:20:29.241Z] Environment Variables Check:
[2026-01-27T09:20:29.241Z] DISCORD_TOKEN: ✅ Set
[2026-01-27T09:20:29.241Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.241Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-27T09:20:29.241Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-27T09:20:29.241Z] 
Multi-Channel Configuration:
[2026-01-27T09:20:29.241Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.242Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.242Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.242Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.242Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.242Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.242Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.242Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.242Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-27T09:20:29.242Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-27T09:20:29.242Z] 
Data Files Check:
[2026-01-27T09:20:29.243Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-27T09:20:29.246Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 394206 bytes)
[2026-01-27T09:20:29.246Z] 
========================================
[2026-01-27T09:20:29.246Z] Starting Enhanced Discord Bot...
[2026-01-27T09:20:29.246Z] ========================================
[2026-01-27T09:20:29.749Z] [BOT] ✅ Loaded V2 database: 683 jobs
[2026-01-27T09:20:30.343Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-27T09:20:30.343Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-27T09:20:30.343Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-27T09:20:30.462Z] [BOT] ✅ Loaded pending queue: 2916 total (2866 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-27T09:20:30.464Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-27T09:20:30.465Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-27T09:20:30.466Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-27T09:20:30.466Z] [BOT] (2 grouped as same job with different locations)
[2026-01-27T09:20:30.467Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-27T09:20:30.470Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-27T09:20:30.471Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T09:20:30.471Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T09:20:30.487Z] [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-27T09:20:31.050Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-27T09:20:31.050Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-27T09:20:31.050Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-27T09:20:31.051Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-27T09:20:31.053Z] [BOT] ✅ Loaded V2 database: 683 jobs
[2026-01-27T09:20:31.053Z] [BOT] 💾 DISK STATE: 683 jobs on disk
[2026-01-27T09:20:31.053Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-27T09:20:31.055Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T09:20:31.055Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-27T09:20:31.056Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-27T09:20:31.061Z] [BOT] 📦 Archived 17 jobs to 2026-01.json (17 total in archive)
[2026-01-27T09:20:31.062Z] [BOT] ✅ Archiving complete: 17 archived, 666 active
[2026-01-27T09:20:31.068Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
[2026-01-27T09:20:31.069Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:32.571Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T09:20:32.870Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-27T09:20:32.870Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-27T09:20:32.870Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:32.873Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
[2026-01-27T09:20:32.873Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T09:20:32.874Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T09:20:32.874Z] [BOT] 💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:32.875Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:32.880Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:34.380Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-27T09:20:34.381Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T09:20:34.604Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-27T09:20:34.604Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-27T09:20:34.604Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-27T09:20:34.604Z] [BOT] 💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:34.606Z] [BOT] ✅ Loaded V2 database: 666 jobs
[2026-01-27T09:20:34.607Z] [BOT] 💾 DISK STATE: 666 jobs on disk
[2026-01-27T09:20:34.607Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T09:20:34.608Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T09:20:34.608Z] [BOT] 💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:34.609Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:34.613Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:36.115Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-27T09:20:36.115Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-27T09:20:36.309Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-27T09:20:36.309Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-27T09:20:36.309Z] [BOT] 💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:36.311Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
[2026-01-27T09:20:36.311Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T09:20:36.313Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T09:20:36.313Z] [BOT] 💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:36.313Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:36.318Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:40.820Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-27T09:20:40.821Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-27T09:20:40.821Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T09:20:41.110Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-27T09:20:41.110Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-27T09:20:41.110Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:41.113Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
[2026-01-27T09:20:41.113Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T09:20:41.115Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T09:20:41.115Z] [BOT] 💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:41.116Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:41.122Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
[2026-01-27T09:20:41.122Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:42.624Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-27T09:20:42.624Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T09:20:42.839Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-27T09:20:42.839Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:42.841Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
[2026-01-27T09:20:42.841Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T09:20:42.843Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:42.843Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:42.849Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:44.351Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-27T09:20:44.351Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T09:20:44.703Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-27T09:20:44.703Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-27T09:20:44.704Z] [BOT] 💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:44.706Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
[2026-01-27T09:20:44.706Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T09:20:44.708Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:44.708Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:44.714Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:46.215Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-27T09:20:46.215Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T09:20:46.460Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-27T09:20:46.460Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-27T09:20:46.460Z] [BOT] 💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:46.462Z] [BOT] ✅ Loaded V2 database: 666 jobs
[2026-01-27T09:20:46.462Z] [BOT] 💾 DISK STATE: 666 jobs on disk
[2026-01-27T09:20:46.462Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T09:20:46.464Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:46.464Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:46.469Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
[2026-01-27T09:20:46.469Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:47.971Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-27T09:20:47.971Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-27T09:20:48.313Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-27T09:20:48.314Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-27T09:20:48.314Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-27T09:20:48.314Z] [BOT] 💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:48.316Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
[2026-01-27T09:20:48.316Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T09:20:48.318Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-27T09:20:48.318Z] [BOT] 💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:48.318Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:48.324Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:52.826Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-27T09:20:52.827Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-27T09:20:52.827Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-27T09:20:53.085Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-27T09:20:53.086Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-27T09:20:53.086Z] [BOT] 💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:53.088Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
[2026-01-27T09:20:53.088Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=666
[2026-01-27T09:20:53.091Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:53.091Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:53.097Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
[2026-01-27T09:20:53.097Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-27T09:20:57.600Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-27T09:20:57.601Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-27T09:20:57.703Z] [BOT] 📂 Loaded 9631 existing routing entries
[2026-01-27T09:20:57.822Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-27T09:20:57.822Z] [BOT] Total entries: 9641
   Timestamp: 2026-01-27T09:20:57.776Z
[2026-01-27T09:20:57.822Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_b2dc3916.jsonl
[2026-01-27T09:20:57.823Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-27T09:20:57.823Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-27T09:20:57.823Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-27T09:20:57.823Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-27T09:20:57.823Z] [BOT] [STATS] Channel stats saved
[2026-01-27T09:20:57.824Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 666 jobs in memory (cached)
[2026-01-27T09:20:57.833Z] [BOT] ✅ Loaded V2 database: 666 jobs
💾 DISK STATE: 666 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=666
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 666 jobs (merged disk + memory)
[2026-01-27T09:20:57.834Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2026-01-27T09:20:57.842Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
[2026-01-27T09:20:57.842Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-27T09:20:59.861Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*