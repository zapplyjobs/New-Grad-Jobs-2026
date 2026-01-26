# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T05:53:40.551Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T05:53:09.247Z] ========================================
[2026-01-26T05:53:09.249Z] Discord Bot Execution Log
[2026-01-26T05:53:09.249Z] Environment: GitHub Actions
[2026-01-26T05:53:09.249Z] Node Version: v20.20.0
[2026-01-26T05:53:09.249Z] ========================================
[2026-01-26T05:53:09.249Z] Environment Variables Check:
[2026-01-26T05:53:09.249Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T05:53:09.249Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.249Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T05:53:09.250Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T05:53:09.250Z] 
Multi-Channel Configuration:
[2026-01-26T05:53:09.250Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.250Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.250Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.250Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.250Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.250Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.250Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.250Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.250Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T05:53:09.250Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T05:53:09.250Z] 
Data Files Check:
[2026-01-26T05:53:09.252Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T05:53:09.256Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 539133 bytes)
[2026-01-26T05:53:09.256Z] 
========================================
[2026-01-26T05:53:09.256Z] Starting Enhanced Discord Bot...
[2026-01-26T05:53:09.256Z] ========================================
[2026-01-26T05:53:09.702Z] [BOT] ✅ Loaded V2 database: 942 jobs
[2026-01-26T05:53:10.476Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-26T05:53:10.476Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T05:53:10.476Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T05:53:10.633Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T05:53:10.636Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T05:53:10.636Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T05:53:10.637Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T05:53:10.638Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T05:53:10.638Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T05:53:10.638Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T05:53:10.641Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T05:53:10.642Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T05:53:10.642Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:53:10.658Z] [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T05:53:10.976Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T05:53:10.976Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T05:53:10.977Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T05:53:10.977Z] [BOT] 💾 BEFORE MERGE: 942 jobs in memory
[2026-01-26T05:53:10.981Z] [BOT] ✅ Loaded V2 database: 942 jobs
[2026-01-26T05:53:10.981Z] [BOT] 💾 DISK STATE: 942 jobs on disk
[2026-01-26T05:53:10.981Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=942
[2026-01-26T05:53:10.983Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:53:10.983Z] [BOT] 💾 AFTER MERGE: 942 jobs (merged disk + memory)
[2026-01-26T05:53:10.984Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T05:53:10.989Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-26T05:53:10.989Z] [BOT] ✅ Archiving complete: 5 archived, 937 active
[2026-01-26T05:53:10.999Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
[2026-01-26T05:53:10.999Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:12.502Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:53:12.665Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T05:53:12.665Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T05:53:12.669Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T05:53:12.669Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T05:53:12.671Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:53:12.671Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T05:53:12.672Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T05:53:12.679Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:14.178Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T05:53:14.178Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:53:14.373Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T05:53:14.373Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T05:53:14.373Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T05:53:14.376Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T05:53:14.377Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T05:53:14.378Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:53:14.378Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T05:53:14.379Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T05:53:14.386Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:15.887Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T05:53:15.887Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:53:16.112Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T05:53:16.112Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T05:53:16.112Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T05:53:16.116Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T05:53:16.116Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T05:53:16.118Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:53:16.118Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T05:53:16.118Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T05:53:16.125Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:20.627Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T05:53:20.628Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T05:53:20.628Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:53:21.042Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T05:53:21.042Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T05:53:21.042Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T05:53:21.043Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T05:53:21.047Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T05:53:21.047Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T05:53:21.049Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:53:21.049Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T05:53:21.050Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T05:53:21.059Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:22.561Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:53:22.750Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T05:53:22.750Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T05:53:22.750Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T05:53:22.753Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T05:53:22.754Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T05:53:22.754Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T05:53:22.755Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:53:22.755Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T05:53:22.756Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T05:53:22.764Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:24.266Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:53:24.501Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T05:53:24.501Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T05:53:24.501Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T05:53:24.501Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T05:53:24.504Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T05:53:24.505Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T05:53:24.506Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:53:24.507Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T05:53:24.507Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T05:53:24.515Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:26.017Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T05:53:26.017Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:53:26.159Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T05:53:26.159Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T05:53:26.159Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T05:53:26.163Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T05:53:26.163Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T05:53:26.165Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:53:26.165Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T05:53:26.166Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T05:53:26.173Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:27.673Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-26T05:53:27.673Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:53:27.902Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T05:53:27.902Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T05:53:27.906Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T05:53:27.906Z] [BOT] 💾 DISK STATE: 937 jobs on disk
[2026-01-26T05:53:27.906Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T05:53:27.908Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:53:27.908Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T05:53:27.909Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T05:53:27.916Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:32.418Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T05:53:32.418Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T05:53:32.418Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T05:53:32.647Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T05:53:32.648Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T05:53:32.651Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T05:53:32.651Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T05:53:32.653Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T05:53:32.653Z] [BOT] ✅ No jobs to archive (all 937 jobs within 7-day window)
[2026-01-26T05:53:32.660Z] [BOT] 💾 Saved posted_jobs.json: 937 active jobs
[2026-01-26T05:53:32.660Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:53:37.163Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T05:53:37.164Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T05:53:37.271Z] [BOT] 📂 Loaded 9231 existing routing entries
[2026-01-26T05:53:37.388Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T05:53:37.388Z] [BOT] Total entries: 9241
   Timestamp: 2026-01-26T05:53:37.351Z
[2026-01-26T05:53:37.389Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
[2026-01-26T05:53:37.389Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T05:53:37.389Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T05:53:37.389Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T05:53:37.389Z] [BOT] [STATS] Channel stats saved
[2026-01-26T05:53:39.405Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2496) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*