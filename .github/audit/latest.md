# Discord Bot Execution Audit
**Timestamp:** 2026-01-28T18:24:21.643Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-28T18:23:48.294Z] ========================================
[2026-01-28T18:23:48.296Z] Discord Bot Execution Log
[2026-01-28T18:23:48.296Z] Environment: GitHub Actions
[2026-01-28T18:23:48.296Z] Node Version: v20.20.0
[2026-01-28T18:23:48.296Z] ========================================
[2026-01-28T18:23:48.296Z] Environment Variables Check:
[2026-01-28T18:23:48.296Z] DISCORD_TOKEN: ✅ Set
[2026-01-28T18:23:48.296Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.296Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-28T18:23:48.297Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-28T18:23:48.297Z] 
Multi-Channel Configuration:
[2026-01-28T18:23:48.297Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.297Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.297Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.297Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.297Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.297Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.297Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.297Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.297Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-28T18:23:48.297Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-28T18:23:48.298Z] 
Data Files Check:
[2026-01-28T18:23:48.299Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-28T18:23:48.299Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 52673 bytes)
[2026-01-28T18:23:48.299Z] 
========================================
[2026-01-28T18:23:48.299Z] Starting Enhanced Discord Bot...
[2026-01-28T18:23:48.299Z] ========================================
[2026-01-28T18:23:48.804Z] [BOT] ✅ Loaded V2 database: 88 jobs
[2026-01-28T18:23:49.429Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-28T18:23:49.430Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-28T18:23:49.430Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-28T18:23:49.552Z] [BOT] ✅ Loaded pending queue: 2994 total (2944 pending, 50 enriched, 0 posted)
[2026-01-28T18:23:49.553Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-28T18:23:49.553Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-28T18:23:49.555Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-28T18:23:49.555Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Applied AI - Natural Language & Conversational Interfaces at datadog
[2026-01-28T18:23:49.556Z] [BOT] 🚫 Skipping blacklisted job: Workforce Management Capacity & Analytics Team Lead at gusto
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-01-28T18:23:49.556Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-01-28T18:23:49.556Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Manager, Corporate Development & Ventures at coinbase
🚫 Skipping blacklisted job: Internal Mobility Program Manager at anthropic
[2026-01-28T18:23:49.556Z] [BOT] 🚫 Skipping blacklisted job: Director, Accounting Operations at anthropic
[2026-01-28T18:23:49.556Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer – Fabric at datadog
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
[2026-01-28T18:23:49.556Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Manager, Customer Success at anthropic
🚫 Skipping blacklisted job: Manager of Solutions Architecture, Applied AI (Public Sector) at anthropic
[2026-01-28T18:23:49.557Z] [BOT] 🚫 Skipping blacklisted job: Manager of Associate Solutions Architecture, Applied AI  at anthropic
🚫 Skipping blacklisted job: Principal Threat Intelligence Lead at anthropic
🚫 Skipping blacklisted job: Data Science Manager, Safety at discord
🚫 Skipping blacklisted job: Senior Staff Software Engineer, Payments and Risk at gusto
🚫 Skipping blacklisted job: Sales Strategy and Operations Division Lead at verkada
🚫 Skipping blacklisted job: Postdoctoral Researcher at Prairie View A&M University
[2026-01-28T18:23:49.662Z] [BOT] ✅ Loaded pending queue: 2994 total (2944 pending, 50 enriched, 0 posted)
[2026-01-28T18:23:49.831Z] [BOT] ✅ Saved pending queue: 2974 total (2944 pending, 30 enriched, 0 posted)
🗑️ Removed 20 blacklisted jobs from pending queue
[2026-01-28T18:23:49.831Z] [BOT] 📋 After blacklist filter: 30 jobs (20 blacklisted)
[2026-01-28T18:23:49.831Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-28T18:23:49.832Z] [BOT] 📋 After multi-location grouping: 30 unique jobs to post
[2026-01-28T18:23:49.832Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-28T18:23:49.836Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-28T18:23:49.836Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T18:23:49.836Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T18:23:49.854Z] [BOT ERROR] (node:3100) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-28T18:23:50.255Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-28T18:23:50.255Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-28T18:23:50.256Z] [BOT] 💾 BEFORE MERGE: 88 jobs in memory (cached)
[2026-01-28T18:23:50.256Z] [BOT] ✅ Loaded V2 database: 88 jobs
[2026-01-28T18:23:50.256Z] [BOT] 💾 DISK STATE: 88 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=88
[2026-01-28T18:23:50.257Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T18:23:50.257Z] [BOT] 💾 AFTER MERGE: 88 jobs (merged disk + memory)
[2026-01-28T18:23:50.257Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-28T18:23:50.260Z] [BOT] 📦 Archived 26 jobs to 2026-01.json (26 total in archive)
[2026-01-28T18:23:50.260Z] [BOT] ✅ Archiving complete: 26 archived, 62 active
[2026-01-28T18:23:50.261Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2026-01-28T18:23:50.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T18:23:51.763Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T18:23:52.103Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-28T18:23:52.103Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:23:52.104Z] [BOT] ✅ Loaded V2 database: 62 jobs
[2026-01-28T18:23:52.104Z] [BOT] 💾 DISK STATE: 62 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:23:52.104Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T18:23:52.104Z] [BOT] 💾 AFTER MERGE: 62 jobs (merged disk + memory)
[2026-01-28T18:23:52.104Z] [BOT] ✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:23:52.106Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T18:23:53.607Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-28T18:23:53.607Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T18:23:54.172Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-28T18:23:54.172Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:23:54.172Z] [BOT] ✅ Loaded V2 database: 62 jobs
💾 DISK STATE: 62 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:23:54.172Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 62 jobs (merged disk + memory)
[2026-01-28T18:23:54.173Z] [BOT] ✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:23:54.174Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2026-01-28T18:23:54.174Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T18:23:55.675Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-28T18:23:55.676Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-28T18:23:55.846Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-28T18:23:55.846Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-28T18:23:55.846Z] [BOT] 💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:23:55.847Z] [BOT] ✅ Loaded V2 database: 62 jobs
💾 DISK STATE: 62 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:23:55.847Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 62 jobs (merged disk + memory)
[2026-01-28T18:23:55.847Z] [BOT] ✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:23:55.848Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2026-01-28T18:23:55.848Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T18:24:00.350Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-28T18:24:00.351Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-28T18:24:00.351Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T18:24:00.697Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-28T18:24:00.697Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:24:00.698Z] [BOT] ✅ Loaded V2 database: 62 jobs
💾 DISK STATE: 62 jobs on disk
[2026-01-28T18:24:00.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:24:00.698Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T18:24:00.698Z] [BOT] 💾 AFTER MERGE: 62 jobs (merged disk + memory)
✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:24:00.699Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T18:24:02.202Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-28T18:24:02.202Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T18:24:02.703Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-28T18:24:02.704Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:24:02.704Z] [BOT] ✅ Loaded V2 database: 62 jobs
[2026-01-28T18:24:02.704Z] [BOT] 💾 DISK STATE: 62 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:24:02.704Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T18:24:02.704Z] [BOT] 💾 AFTER MERGE: 62 jobs (merged disk + memory)
[2026-01-28T18:24:02.704Z] [BOT] ✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:24:02.706Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2026-01-28T18:24:02.706Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T18:24:04.207Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-28T18:24:04.207Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T18:24:04.415Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-28T18:24:04.415Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:24:04.415Z] [BOT] ✅ Loaded V2 database: 62 jobs
💾 DISK STATE: 62 jobs on disk
[2026-01-28T18:24:04.415Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:24:04.416Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 62 jobs (merged disk + memory)
✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:24:04.417Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T18:24:05.918Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-28T18:24:05.918Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T18:24:07.548Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-28T18:24:07.548Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:24:07.548Z] [BOT] ✅ Loaded V2 database: 62 jobs
💾 DISK STATE: 62 jobs on disk
[2026-01-28T18:24:07.548Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:24:07.548Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T18:24:07.549Z] [BOT] 💾 AFTER MERGE: 62 jobs (merged disk + memory)
✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:24:07.551Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2026-01-28T18:24:07.551Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T18:24:09.052Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-28T18:24:09.052Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-28T18:24:09.333Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-28T18:24:09.333Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:24:09.333Z] [BOT] ✅ Loaded V2 database: 62 jobs
[2026-01-28T18:24:09.333Z] [BOT] 💾 DISK STATE: 62 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:24:09.334Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T18:24:09.334Z] [BOT] 💾 AFTER MERGE: 62 jobs (merged disk + memory)
✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:24:09.336Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-28T18:24:13.837Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-28T18:24:13.838Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-28T18:24:13.838Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-28T18:24:14.174Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-28T18:24:14.174Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-28T18:24:14.174Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-28T18:24:14.174Z] [BOT] 💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:24:14.175Z] [BOT] ✅ Loaded V2 database: 62 jobs
[2026-01-28T18:24:14.175Z] [BOT] 💾 DISK STATE: 62 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:24:14.175Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T18:24:14.175Z] [BOT] 💾 AFTER MERGE: 62 jobs (merged disk + memory)
✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:24:14.177Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2026-01-28T18:24:14.177Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-28T18:24:18.680Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-28T18:24:18.681Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-28T18:24:18.784Z] [BOT] 📂 Loaded 9761 existing routing entries
[2026-01-28T18:24:18.912Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-28T18:24:18.912Z] [BOT] Total entries: 9771
   Timestamp: 2026-01-28T18:24:18.865Z
[2026-01-28T18:24:18.913Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fb2c9de9.jsonl
[2026-01-28T18:24:18.913Z] [BOT] Total attempts: 30
   Successful: 10
   Failed: 0
   Skipped: 20
[2026-01-28T18:24:18.913Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-28T18:24:18.913Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 62 jobs in memory (cached)
[2026-01-28T18:24:18.918Z] [BOT] ✅ Loaded V2 database: 62 jobs
[2026-01-28T18:24:18.918Z] [BOT] 💾 DISK STATE: 62 jobs on disk
[2026-01-28T18:24:18.918Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=62
[2026-01-28T18:24:18.919Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-28T18:24:18.919Z] [BOT] 💾 AFTER MERGE: 62 jobs (merged disk + memory)
[2026-01-28T18:24:18.919Z] [BOT] ✅ No jobs to archive (all 62 jobs within 7-day window)
[2026-01-28T18:24:18.922Z] [BOT] 💾 Saved posted_jobs.json: 62 active jobs
[2026-01-28T18:24:18.923Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-28T18:24:20.943Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3100) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*