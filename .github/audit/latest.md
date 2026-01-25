# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T20:12:53.949Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T20:12:21.371Z] ========================================
[2026-01-25T20:12:21.373Z] Discord Bot Execution Log
[2026-01-25T20:12:21.373Z] Environment: GitHub Actions
[2026-01-25T20:12:21.373Z] Node Version: v20.20.0
[2026-01-25T20:12:21.373Z] ========================================
[2026-01-25T20:12:21.373Z] Environment Variables Check:
[2026-01-25T20:12:21.373Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T20:12:21.374Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.374Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T20:12:21.374Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T20:12:21.374Z] 
Multi-Channel Configuration:
[2026-01-25T20:12:21.374Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.374Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.374Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.374Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.374Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.374Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.375Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.375Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.375Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T20:12:21.375Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T20:12:21.375Z] 
Data Files Check:
[2026-01-25T20:12:21.376Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T20:12:21.381Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 593506 bytes)
[2026-01-25T20:12:21.381Z] 
========================================
[2026-01-25T20:12:21.381Z] Starting Enhanced Discord Bot...
[2026-01-25T20:12:21.381Z] ========================================
[2026-01-25T20:12:21.921Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T20:12:22.523Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-25T20:12:22.524Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T20:12:22.524Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T20:12:22.646Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T20:12:22.650Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T20:12:22.651Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T20:12:22.651Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T20:12:22.652Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T20:12:22.652Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-25T20:12:22.652Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-25T20:12:22.653Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T20:12:22.656Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T20:12:22.656Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T20:12:22.657Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:12:22.674Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T20:12:22.892Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T20:12:22.893Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T20:12:22.893Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T20:12:22.893Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:22.898Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T20:12:22.898Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:22.899Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:22.901Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:22.901Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:22.902Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:22.913Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:24.417Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-25T20:12:24.417Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:12:24.614Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T20:12:24.614Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T20:12:24.614Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T20:12:24.614Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:24.618Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T20:12:24.618Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:24.618Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:24.620Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:24.620Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:24.621Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:24.629Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T20:12:24.629Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:26.131Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T20:12:26.131Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:12:26.323Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T20:12:26.323Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T20:12:26.323Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:26.327Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T20:12:26.327Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:26.327Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:26.330Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:26.330Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:26.331Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:26.338Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:27.840Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T20:12:28.009Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T20:12:28.009Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:28.013Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:28.013Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:28.015Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:28.015Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:28.016Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:28.023Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T20:12:28.023Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:32.526Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T20:12:32.527Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T20:12:32.527Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:12:34.524Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T20:12:34.525Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T20:12:34.525Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T20:12:34.525Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:34.529Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T20:12:34.529Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:34.530Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:34.533Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:34.533Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:34.534Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:34.543Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:36.045Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-25T20:12:36.046Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:12:36.404Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T20:12:36.404Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T20:12:36.404Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T20:12:36.404Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:36.408Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T20:12:36.408Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:36.408Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:36.411Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:36.411Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:36.412Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:36.422Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:37.924Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T20:12:37.924Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:12:38.126Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T20:12:38.126Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T20:12:38.126Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:38.130Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:38.130Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:38.132Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:38.132Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:38.133Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:38.141Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T20:12:38.141Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:39.643Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T20:12:39.643Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:12:39.874Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T20:12:39.874Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T20:12:39.875Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:39.878Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-25T20:12:39.878Z] [BOT] 💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:39.878Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:39.880Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:39.880Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:39.881Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:39.893Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:41.394Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-25T20:12:41.395Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T20:12:41.652Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T20:12:41.652Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T20:12:41.652Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T20:12:41.652Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:41.655Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:41.656Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:41.658Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:41.658Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:41.659Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:41.667Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:46.169Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T20:12:46.169Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T20:12:46.169Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T20:12:46.402Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T20:12:46.403Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T20:12:46.403Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory
[2026-01-25T20:12:46.406Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-25T20:12:46.407Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1038
[2026-01-25T20:12:46.409Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T20:12:46.409Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-25T20:12:46.410Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-25T20:12:46.418Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
[2026-01-25T20:12:46.418Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T20:12:50.922Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T20:12:50.924Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T20:12:51.029Z] [BOT] 📂 Loaded 8981 existing routing entries
[2026-01-25T20:12:51.137Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8991
   Timestamp: 2026-01-25T20:12:51.095Z
[2026-01-25T20:12:51.138Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T20:12:51.138Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T20:12:51.138Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T20:12:51.138Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-25T20:12:51.139Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-25T20:12:51.139Z] [BOT] [STATS] Channel stats saved
[2026-01-25T20:12:53.157Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*