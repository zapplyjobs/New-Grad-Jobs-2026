# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T14:17:56.240Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T14:17:25.847Z] ========================================
[2026-01-26T14:17:25.849Z] Discord Bot Execution Log
[2026-01-26T14:17:25.849Z] Environment: GitHub Actions
[2026-01-26T14:17:25.849Z] Node Version: v20.20.0
[2026-01-26T14:17:25.849Z] ========================================
[2026-01-26T14:17:25.849Z] Environment Variables Check:
[2026-01-26T14:17:25.849Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T14:17:25.850Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.850Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T14:17:25.850Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T14:17:25.850Z] 
Multi-Channel Configuration:
[2026-01-26T14:17:25.850Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.850Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.850Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.850Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.850Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.850Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.850Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.850Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.851Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T14:17:25.851Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T14:17:25.851Z] 
Data Files Check:
[2026-01-26T14:17:25.852Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T14:17:25.856Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 495143 bytes)
[2026-01-26T14:17:25.856Z] 
========================================
[2026-01-26T14:17:25.856Z] Starting Enhanced Discord Bot...
[2026-01-26T14:17:25.856Z] ========================================
[2026-01-26T14:17:26.407Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:17:26.881Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T14:17:26.881Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T14:17:26.881Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T14:17:27.010Z] [BOT] ✅ Loaded pending queue: 2860 total (2810 pending, 50 enriched, 0 posted)
[2026-01-26T14:17:27.011Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T14:17:27.015Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T14:17:27.016Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T14:17:27.016Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T14:17:27.017Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T14:17:27.017Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T14:17:27.018Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T14:17:27.021Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T14:17:27.022Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T14:17:27.022Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:17:27.040Z] [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T14:17:27.206Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T14:17:27.207Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T14:17:27.207Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T14:17:27.207Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:27.210Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:17:27.211Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:27.211Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:27.213Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:17:27.213Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:27.214Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:27.228Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:17:27.228Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:28.730Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:17:29.108Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T14:17:29.109Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T14:17:29.109Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:29.112Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:29.112Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:29.113Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:29.114Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:29.121Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:30.623Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:17:30.810Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T14:17:30.810Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T14:17:30.810Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:30.813Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:30.813Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:30.815Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:30.816Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:30.822Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:32.323Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T14:17:32.652Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T14:17:32.652Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T14:17:32.652Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:32.655Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:32.656Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:32.657Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:32.658Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:32.664Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:17:32.664Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:37.166Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T14:17:37.166Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T14:17:37.166Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:17:37.321Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T14:17:37.321Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T14:17:37.321Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:37.324Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:37.326Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:37.328Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:17:37.328Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:37.328Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:37.336Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:17:37.336Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:38.837Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T14:17:38.837Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:17:39.017Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T14:17:39.018Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T14:17:39.018Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:39.020Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:17:39.021Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:39.021Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:39.022Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:17:39.022Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:39.023Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:39.031Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:40.532Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T14:17:40.532Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:17:40.659Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T14:17:40.659Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T14:17:40.660Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:40.663Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:40.663Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:40.665Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:17:40.665Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:40.665Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:40.673Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:42.173Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T14:17:42.173Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:17:42.323Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T14:17:42.323Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T14:17:42.324Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:42.326Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:42.327Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:42.328Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:17:42.328Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:42.329Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:42.336Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:43.838Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T14:17:43.838Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T14:17:44.049Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T14:17:44.049Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T14:17:44.049Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:44.052Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:44.052Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:44.054Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:17:44.054Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:44.054Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:44.061Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:48.563Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T14:17:48.564Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T14:17:48.564Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T14:17:48.749Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T14:17:48.749Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T14:17:48.749Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:48.752Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T14:17:48.752Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:48.754Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:17:48.754Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:48.754Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:48.761Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T14:17:48.761Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:53.262Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T14:17:53.264Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T14:17:53.377Z] [BOT] 📂 Loaded 9491 existing routing entries
[2026-01-26T14:17:53.505Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T14:17:53.506Z] [BOT] Total entries: 9501
   Timestamp: 2026-01-26T14:17:53.457Z
[2026-01-26T14:17:53.506Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T14:17:53.506Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T14:17:53.507Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T14:17:53.507Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T14:17:53.514Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T14:17:53.516Z] [BOT] 💾 DISK STATE: 861 jobs on disk
💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T14:17:53.517Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T14:17:53.517Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T14:17:53.518Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T14:17:53.525Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T14:17:53.525Z] [BOT] ✅ Database saved successfully
[2026-01-26T14:17:55.544Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*