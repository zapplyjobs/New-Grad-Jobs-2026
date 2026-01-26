# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T12:17:54.537Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T12:17:23.148Z] ========================================
[2026-01-26T12:17:23.150Z] Discord Bot Execution Log
[2026-01-26T12:17:23.150Z] Environment: GitHub Actions
[2026-01-26T12:17:23.150Z] Node Version: v20.20.0
[2026-01-26T12:17:23.150Z] ========================================
[2026-01-26T12:17:23.150Z] Environment Variables Check:
[2026-01-26T12:17:23.150Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T12:17:23.151Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.151Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T12:17:23.151Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T12:17:23.151Z] 
Multi-Channel Configuration:
[2026-01-26T12:17:23.151Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.151Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.151Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.151Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.151Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.151Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.151Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.151Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.152Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T12:17:23.152Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T12:17:23.152Z] 
Data Files Check:
[2026-01-26T12:17:23.153Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T12:17:23.157Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 495656 bytes)
[2026-01-26T12:17:23.157Z] 
========================================
[2026-01-26T12:17:23.157Z] Starting Enhanced Discord Bot...
[2026-01-26T12:17:23.157Z] ========================================
[2026-01-26T12:17:23.679Z] [BOT] ✅ Loaded V2 database: 862 jobs
[2026-01-26T12:17:24.229Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T12:17:24.230Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T12:17:24.230Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T12:17:24.350Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T12:17:24.354Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T12:17:24.354Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T12:17:24.354Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T12:17:24.355Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T12:17:24.356Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T12:17:24.356Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T12:17:24.359Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T12:17:24.360Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T12:17:24.360Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:17:24.376Z] [BOT ERROR] (node:2492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T12:17:24.621Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T12:17:24.621Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T12:17:24.621Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T12:17:24.622Z] [BOT] 💾 BEFORE MERGE: 862 jobs in memory
[2026-01-26T12:17:24.625Z] [BOT] ✅ Loaded V2 database: 862 jobs
💾 DISK STATE: 862 jobs on disk
[2026-01-26T12:17:24.625Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=862
[2026-01-26T12:17:24.627Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:24.627Z] [BOT] 💾 AFTER MERGE: 862 jobs (merged disk + memory)
[2026-01-26T12:17:24.628Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T12:17:24.636Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-26T12:17:24.636Z] [BOT] ✅ Archiving complete: 1 archived, 861 active
[2026-01-26T12:17:24.647Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:17:24.647Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:26.150Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:17:26.385Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T12:17:26.385Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T12:17:26.385Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:17:26.388Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:17:26.389Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:17:26.390Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:26.390Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:17:26.391Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:17:26.397Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:27.898Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T12:17:27.898Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:17:28.341Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T12:17:28.341Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T12:17:28.341Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T12:17:28.341Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:17:28.344Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:17:28.344Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:17:28.344Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:17:28.346Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:28.346Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:17:28.347Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:17:28.353Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:29.854Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T12:17:30.137Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T12:17:30.138Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:17:30.141Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:17:30.141Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:17:30.143Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:30.143Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:17:30.143Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:17:30.149Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:17:30.150Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:34.651Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T12:17:34.652Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T12:17:34.652Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:17:35.024Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T12:17:35.024Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T12:17:35.025Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:17:35.028Z] [BOT] ✅ Loaded V2 database: 861 jobs
💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:17:35.030Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:17:35.032Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:35.032Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:17:35.032Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:17:35.040Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:36.541Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T12:17:36.541Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:17:36.845Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T12:17:36.845Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T12:17:36.845Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T12:17:36.845Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:17:36.848Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:17:36.848Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:17:36.849Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:17:36.850Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:36.850Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:17:36.851Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:17:36.859Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:17:36.859Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:38.360Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-26T12:17:38.360Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:17:38.530Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T12:17:38.530Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T12:17:38.531Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T12:17:38.531Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:17:38.534Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:17:38.534Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:17:38.534Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:17:38.536Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:38.536Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:17:38.536Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:17:38.543Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:17:38.543Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:40.044Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T12:17:40.045Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:17:40.224Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T12:17:40.224Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T12:17:40.224Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:17:40.227Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:17:40.227Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:17:40.227Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:17:40.228Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:40.229Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:17:40.229Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:17:40.236Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:17:40.236Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:41.737Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T12:17:41.737Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T12:17:42.153Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T12:17:42.154Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T12:17:42.154Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T12:17:42.154Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:17:42.157Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:17:42.157Z] [BOT] 💾 DISK STATE: 861 jobs on disk
[2026-01-26T12:17:42.157Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:17:42.159Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:42.159Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:17:42.159Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:17:42.165Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:46.667Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T12:17:46.668Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T12:17:46.668Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T12:17:46.844Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T12:17:46.844Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T12:17:46.844Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T12:17:46.845Z] [BOT] 💾 BEFORE MERGE: 861 jobs in memory
[2026-01-26T12:17:46.848Z] [BOT] ✅ Loaded V2 database: 861 jobs
[2026-01-26T12:17:46.848Z] [BOT] 💾 DISK STATE: 861 jobs on disk
💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=861
[2026-01-26T12:17:46.850Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T12:17:46.850Z] [BOT] 💾 AFTER MERGE: 861 jobs (merged disk + memory)
[2026-01-26T12:17:46.850Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2026-01-26T12:17:46.857Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2026-01-26T12:17:46.857Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T12:17:51.359Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T12:17:51.360Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T12:17:51.469Z] [BOT] 📂 Loaded 9451 existing routing entries
[2026-01-26T12:17:51.589Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T12:17:51.589Z] [BOT] Total entries: 9461
   Timestamp: 2026-01-26T12:17:51.543Z
[2026-01-26T12:17:51.589Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
[2026-01-26T12:17:51.589Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T12:17:51.590Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T12:17:51.590Z] [BOT] [STATS] Channel stats saved
[2026-01-26T12:17:53.609Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*