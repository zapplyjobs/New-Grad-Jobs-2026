# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T16:33:06.677Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T16:32:35.524Z] ========================================
[2026-01-26T16:32:35.526Z] Discord Bot Execution Log
[2026-01-26T16:32:35.526Z] Environment: GitHub Actions
[2026-01-26T16:32:35.526Z] Node Version: v20.20.0
[2026-01-26T16:32:35.526Z] ========================================
[2026-01-26T16:32:35.526Z] Environment Variables Check:
[2026-01-26T16:32:35.526Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T16:32:35.526Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.526Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T16:32:35.526Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T16:32:35.526Z] 
Multi-Channel Configuration:
[2026-01-26T16:32:35.527Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.527Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.527Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.527Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.527Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.527Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.527Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.527Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.527Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T16:32:35.527Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T16:32:35.527Z] 
Data Files Check:
[2026-01-26T16:32:35.528Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T16:32:35.532Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 493981 bytes)
[2026-01-26T16:32:35.532Z] 
========================================
[2026-01-26T16:32:35.532Z] Starting Enhanced Discord Bot...
[2026-01-26T16:32:35.532Z] ========================================
[2026-01-26T16:32:36.057Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:32:36.750Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T16:32:36.751Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T16:32:36.751Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T16:32:36.872Z] [BOT] ✅ Loaded pending queue: 2869 total (2819 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T16:32:36.875Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T16:32:36.875Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T16:32:36.876Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T16:32:36.877Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T16:32:36.877Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T16:32:36.877Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-26T16:32:36.877Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T16:32:36.881Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T16:32:36.882Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T16:32:36.882Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:32:36.899Z] [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T16:32:37.186Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T16:32:37.186Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T16:32:37.187Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T16:32:37.187Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:37.190Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:32:37.191Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:37.191Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:37.193Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:32:37.193Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:37.193Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:37.207Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:32:37.207Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:32:38.709Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-26T16:32:38.710Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:32:39.005Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T16:32:39.005Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T16:32:39.005Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:39.008Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:32:39.008Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:39.008Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:39.010Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:39.011Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:39.018Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:32:40.517Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T16:32:40.518Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:32:40.668Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T16:32:40.668Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T16:32:40.668Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T16:32:40.669Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:40.671Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:32:40.671Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:40.672Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:40.673Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:32:40.673Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:40.674Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:40.680Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:32:42.181Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T16:32:42.181Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T16:32:42.340Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T16:32:42.340Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T16:32:42.340Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:42.343Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:32:42.343Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:42.343Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:42.345Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:32:42.345Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:42.346Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:42.352Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:32:46.854Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T16:32:46.855Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T16:32:46.855Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:32:47.143Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T16:32:47.143Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T16:32:47.143Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T16:32:47.143Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:47.147Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:32:47.147Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:47.147Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:47.149Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:32:47.150Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:47.150Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:47.158Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:32:48.659Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T16:32:48.659Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:32:49.398Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T16:32:49.398Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T16:32:49.398Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T16:32:49.398Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:49.403Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:32:49.403Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:49.403Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:49.406Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:32:49.406Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:49.406Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:49.414Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:32:49.414Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:32:50.916Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T16:32:50.916Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:32:51.168Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T16:32:51.168Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T16:32:51.168Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T16:32:51.168Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:51.171Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:51.171Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:51.174Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:32:51.174Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:51.174Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:51.181Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:32:51.181Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:32:52.682Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T16:32:52.683Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:32:52.825Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T16:32:52.825Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T16:32:52.825Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:52.828Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:52.828Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:52.831Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:32:52.831Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:52.831Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:52.837Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:32:54.338Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T16:32:54.338Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T16:32:54.495Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T16:32:54.496Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T16:32:54.496Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:54.499Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:32:54.499Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:54.499Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:54.500Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:54.501Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:54.508Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T16:32:59.009Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T16:32:59.009Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T16:32:59.010Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T16:32:59.198Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T16:32:59.199Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:32:59.201Z] [BOT] ✅ Loaded V2 database: 859 jobs
[2026-01-26T16:32:59.201Z] [BOT] 💾 DISK STATE: 859 jobs on disk
[2026-01-26T16:32:59.201Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:32:59.203Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:32:59.203Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:32:59.203Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:32:59.210Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:32:59.210Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T16:33:03.713Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T16:33:03.715Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T16:33:03.819Z] [BOT] 📂 Loaded 9571 existing routing entries
[2026-01-26T16:33:03.938Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T16:33:03.939Z] [BOT] Total entries: 9581
   Timestamp: 2026-01-26T16:33:03.893Z
[2026-01-26T16:33:03.939Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
[2026-01-26T16:33:03.939Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T16:33:03.939Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T16:33:03.939Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-26T16:33:03.939Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-26T16:33:03.940Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-26T16:33:03.940Z] [BOT] 💾 BEFORE MERGE: 859 jobs in memory (cached)
[2026-01-26T16:33:03.947Z] [BOT] ✅ Loaded V2 database: 859 jobs
💾 DISK STATE: 859 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=859
[2026-01-26T16:33:03.949Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T16:33:03.950Z] [BOT] 💾 AFTER MERGE: 859 jobs (merged disk + memory)
[2026-01-26T16:33:03.950Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2026-01-26T16:33:03.956Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2026-01-26T16:33:03.957Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-26T16:33:05.975Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*