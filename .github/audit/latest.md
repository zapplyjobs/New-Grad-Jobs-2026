# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T08:15:44.301Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T08:15:12.064Z] ========================================
[2026-01-26T08:15:12.066Z] Discord Bot Execution Log
[2026-01-26T08:15:12.066Z] Environment: GitHub Actions
[2026-01-26T08:15:12.066Z] Node Version: v20.20.0
[2026-01-26T08:15:12.066Z] ========================================
[2026-01-26T08:15:12.066Z] Environment Variables Check:
[2026-01-26T08:15:12.066Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T08:15:12.066Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.066Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T08:15:12.066Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T08:15:12.067Z] 
Multi-Channel Configuration:
[2026-01-26T08:15:12.067Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.067Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.067Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.067Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.067Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.067Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.067Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.067Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.067Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T08:15:12.067Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T08:15:12.067Z] 
Data Files Check:
[2026-01-26T08:15:12.069Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T08:15:12.073Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 515903 bytes)
[2026-01-26T08:15:12.073Z] 
========================================
[2026-01-26T08:15:12.073Z] Starting Enhanced Discord Bot...
[2026-01-26T08:15:12.073Z] ========================================
[2026-01-26T08:15:12.548Z] [BOT] ✅ Loaded V2 database: 901 jobs
[2026-01-26T08:15:13.399Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T08:15:13.400Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T08:15:13.400Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T08:15:13.577Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T08:15:13.580Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T08:15:13.580Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T08:15:13.581Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T08:15:13.582Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T08:15:13.582Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T08:15:13.586Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T08:15:13.587Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
   Category: TECH (matched: "software")
[2026-01-26T08:15:13.587Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T08:15:13.604Z] [BOT ERROR] (node:2608) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T08:15:13.911Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T08:15:13.912Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T08:15:13.912Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T08:15:13.912Z] [BOT] 💾 BEFORE MERGE: 901 jobs in memory
[2026-01-26T08:15:13.916Z] [BOT] ✅ Loaded V2 database: 901 jobs
[2026-01-26T08:15:13.917Z] [BOT] 💾 DISK STATE: 901 jobs on disk
[2026-01-26T08:15:13.917Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=901
[2026-01-26T08:15:13.919Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:15:13.919Z] [BOT] 💾 AFTER MERGE: 901 jobs (merged disk + memory)
[2026-01-26T08:15:13.920Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T08:15:13.925Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
✅ Archiving complete: 8 archived, 893 active
[2026-01-26T08:15:13.933Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:15.436Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T08:15:15.683Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T08:15:15.683Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T08:15:15.683Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:15:15.688Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:15:15.688Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:15:15.690Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:15:15.690Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:15:15.691Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:15:15.698Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:17.198Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T08:15:17.199Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T08:15:17.403Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T08:15:17.403Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T08:15:17.403Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:15:17.406Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:15:17.407Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:15:17.408Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:15:17.408Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:15:17.409Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:15:17.416Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:18.917Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T08:15:19.158Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T08:15:19.158Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T08:15:19.158Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:15:19.162Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:15:19.162Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:15:19.164Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:15:19.164Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:15:19.164Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:15:19.171Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:23.673Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T08:15:23.674Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T08:15:23.674Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:15:23.913Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T08:15:23.913Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T08:15:23.913Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:15:23.918Z] [BOT] ✅ Loaded V2 database: 893 jobs
[2026-01-26T08:15:23.918Z] [BOT] 💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:15:23.919Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:15:23.921Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:15:23.921Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:15:23.922Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:15:23.934Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:25.436Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T08:15:25.437Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:15:25.790Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T08:15:25.791Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T08:15:25.791Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:15:25.794Z] [BOT] ✅ Loaded V2 database: 893 jobs
[2026-01-26T08:15:25.794Z] [BOT] 💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:15:25.794Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:15:25.796Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:15:25.796Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:15:25.797Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:15:25.804Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:27.306Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T08:15:27.306Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:15:27.551Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T08:15:27.552Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:15:27.555Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:15:27.556Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:15:27.559Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T08:15:27.559Z] [BOT] 💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:15:27.559Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:15:27.567Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:29.069Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T08:15:29.069Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:15:29.273Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T08:15:29.274Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T08:15:29.274Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:15:29.277Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:15:29.278Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:15:29.279Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:15:29.280Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:15:29.287Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:30.788Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T08:15:30.788Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T08:15:31.210Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T08:15:31.210Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:15:31.214Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:15:31.214Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:15:31.217Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:15:31.217Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:15:31.224Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:35.726Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T08:15:35.726Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T08:15:35.727Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T08:15:36.313Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T08:15:36.313Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T08:15:36.313Z] [BOT] 💾 BEFORE MERGE: 893 jobs in memory
[2026-01-26T08:15:36.317Z] [BOT] ✅ Loaded V2 database: 893 jobs
💾 DISK STATE: 893 jobs on disk
[2026-01-26T08:15:36.317Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=893
[2026-01-26T08:15:36.319Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 893 jobs (merged disk + memory)
[2026-01-26T08:15:36.319Z] [BOT] ✅ No jobs to archive (all 893 jobs within 7-day window)
[2026-01-26T08:15:36.327Z] [BOT] 💾 Saved posted_jobs.json: 893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T08:15:40.829Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T08:15:40.831Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T08:15:40.961Z] [BOT] 📂 Loaded 9311 existing routing entries
[2026-01-26T08:15:41.088Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9321
   Timestamp: 2026-01-26T08:15:41.044Z
[2026-01-26T08:15:41.088Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
   Successful: 10
[2026-01-26T08:15:41.089Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-26T08:15:41.089Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-26T08:15:41.089Z] [BOT] Channels used: 3
   Top channels:
[2026-01-26T08:15:41.089Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T08:15:41.089Z] [BOT] [STATS] Channel stats saved
[2026-01-26T08:15:43.105Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2608) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*