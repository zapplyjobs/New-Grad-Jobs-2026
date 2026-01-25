# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T19:19:52.340Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T19:19:20.991Z] ========================================
[2026-01-25T19:19:20.993Z] Discord Bot Execution Log
[2026-01-25T19:19:20.993Z] Environment: GitHub Actions
[2026-01-25T19:19:20.993Z] Node Version: v20.20.0
[2026-01-25T19:19:20.993Z] ========================================
[2026-01-25T19:19:20.993Z] Environment Variables Check:
[2026-01-25T19:19:20.993Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T19:19:20.993Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.993Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T19:19:20.993Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T19:19:20.993Z] 
Multi-Channel Configuration:
[2026-01-25T19:19:20.994Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.994Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.994Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.994Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.994Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.994Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.994Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.994Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.994Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T19:19:20.994Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T19:19:20.994Z] 
Data Files Check:
[2026-01-25T19:19:20.995Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T19:19:21.000Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594004 bytes)
[2026-01-25T19:19:21.000Z] 
========================================
[2026-01-25T19:19:21.000Z] Starting Enhanced Discord Bot...
[2026-01-25T19:19:21.000Z] ========================================
[2026-01-25T19:19:21.533Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:19:21.924Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T19:19:21.924Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T19:19:21.924Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T19:19:22.045Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T19:19:22.048Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T19:19:22.048Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T19:19:22.049Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T19:19:22.050Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T19:19:22.050Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T19:19:22.050Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-25T19:19:22.050Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T19:19:22.055Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T19:19:22.055Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:19:22.055Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:19:22.072Z] [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T19:19:22.353Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T19:19:22.354Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:19:22.354Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T19:19:22.354Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:22.358Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:19:22.358Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:22.358Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:22.361Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:19:22.361Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:22.361Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:22.374Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:23.875Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:19:24.196Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T19:19:24.196Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T19:19:24.196Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:24.199Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:24.199Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:24.201Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:19:24.202Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:24.202Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:24.211Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T19:19:24.211Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:25.711Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T19:19:25.711Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:19:25.888Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T19:19:25.888Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T19:19:25.889Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T19:19:25.889Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:25.892Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:25.892Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:25.894Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:25.895Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:25.902Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:27.404Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:19:27.718Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T19:19:27.718Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T19:19:27.718Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:27.722Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:27.722Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:27.724Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:19:27.724Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:27.725Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:27.732Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:32.233Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T19:19:32.234Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T19:19:32.234Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:19:32.570Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T19:19:32.571Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T19:19:32.571Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:32.575Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:32.576Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:32.578Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:19:32.578Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:32.579Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:32.588Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T19:19:32.588Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:34.089Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:19:34.089Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:19:34.474Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T19:19:34.475Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T19:19:34.475Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:34.478Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:19:34.478Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:34.478Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:34.480Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:19:34.481Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:34.481Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:34.490Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:35.992Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:19:35.992Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:19:36.279Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T19:19:36.279Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T19:19:36.279Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:36.283Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:36.283Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:36.285Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:19:36.286Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:36.286Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:36.295Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:37.795Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T19:19:37.796Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:19:38.117Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T19:19:38.117Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T19:19:38.117Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:38.120Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:38.121Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:38.123Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:19:38.123Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:38.124Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:38.131Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:39.633Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T19:19:39.633Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:19:39.834Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T19:19:39.835Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T19:19:39.835Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:39.838Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:19:39.838Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:39.838Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:39.841Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:19:39.841Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:39.841Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:39.852Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:44.354Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T19:19:44.354Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-25T19:19:44.354Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T19:19:44.668Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T19:19:44.668Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T19:19:44.669Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T19:19:44.669Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:19:44.672Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:19:44.672Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:19:44.672Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:19:44.674Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:19:44.674Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:19:44.675Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:19:44.682Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T19:19:44.682Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:19:49.186Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T19:19:49.187Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T19:19:49.283Z] [BOT] 📂 Loaded 8941 existing routing entries
[2026-01-25T19:19:49.395Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T19:19:49.395Z] [BOT] Total entries: 8951
   Timestamp: 2026-01-25T19:19:49.353Z
[2026-01-25T19:19:49.395Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T19:19:49.395Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T19:19:49.396Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T19:19:49.396Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T19:19:49.396Z] [BOT] [STATS] Channel stats saved
[2026-01-25T19:19:51.414Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*