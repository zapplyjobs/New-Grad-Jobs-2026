# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T00:31:50.040Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T00:31:19.503Z] ========================================
[2026-01-26T00:31:19.505Z] Discord Bot Execution Log
[2026-01-26T00:31:19.505Z] Environment: GitHub Actions
[2026-01-26T00:31:19.505Z] Node Version: v20.20.0
[2026-01-26T00:31:19.505Z] ========================================
[2026-01-26T00:31:19.505Z] Environment Variables Check:
[2026-01-26T00:31:19.506Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T00:31:19.506Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.506Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T00:31:19.506Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T00:31:19.506Z] 
Multi-Channel Configuration:
[2026-01-26T00:31:19.506Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.506Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.506Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.506Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.506Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.506Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.506Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.507Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.507Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T00:31:19.507Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T00:31:19.507Z] 
Data Files Check:
[2026-01-26T00:31:19.508Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T00:31:19.512Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 563128 bytes)
[2026-01-26T00:31:19.512Z] 
========================================
[2026-01-26T00:31:19.512Z] Starting Enhanced Discord Bot...
[2026-01-26T00:31:19.513Z] ========================================
[2026-01-26T00:31:20.040Z] [BOT] ✅ Loaded V2 database: 986 jobs
[2026-01-26T00:31:20.746Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T00:31:20.747Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T00:31:20.747Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T00:31:20.867Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T00:31:20.870Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T00:31:20.870Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T00:31:20.871Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T00:31:20.872Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T00:31:20.872Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T00:31:20.872Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-26T00:31:20.872Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T00:31:20.877Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T00:31:20.877Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T00:31:20.877Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T00:31:20.894Z] [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T00:31:21.078Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T00:31:21.078Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T00:31:21.079Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T00:31:21.079Z] [BOT] 💾 BEFORE MERGE: 986 jobs in memory
[2026-01-26T00:31:21.082Z] [BOT] ✅ Loaded V2 database: 986 jobs
[2026-01-26T00:31:21.083Z] [BOT] 💾 DISK STATE: 986 jobs on disk
[2026-01-26T00:31:21.083Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=986
[2026-01-26T00:31:21.085Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:31:21.085Z] [BOT] 💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-26T00:31:21.086Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T00:31:21.092Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-26T00:31:21.092Z] [BOT] ✅ Archiving complete: 6 archived, 980 active
[2026-01-26T00:31:21.100Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:22.603Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T00:31:22.603Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T00:31:22.828Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T00:31:22.829Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T00:31:22.829Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T00:31:22.829Z] [BOT] 💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:31:22.832Z] [BOT] ✅ Loaded V2 database: 980 jobs
[2026-01-26T00:31:22.832Z] [BOT] 💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:31:22.832Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:31:22.834Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:31:22.834Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:31:22.835Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-26T00:31:22.841Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:24.342Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T00:31:24.554Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T00:31:24.555Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T00:31:24.555Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T00:31:24.555Z] [BOT] 💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:31:24.558Z] [BOT] ✅ Loaded V2 database: 980 jobs
💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:31:24.558Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:31:24.560Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:31:24.560Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:31:24.561Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-26T00:31:24.568Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:26.070Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T00:31:26.257Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T00:31:26.258Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T00:31:26.258Z] [BOT] 💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:31:26.261Z] [BOT] ✅ Loaded V2 database: 980 jobs
[2026-01-26T00:31:26.261Z] [BOT] 💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:31:26.261Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:31:26.263Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:31:26.264Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-26T00:31:26.272Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:30.774Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T00:31:30.774Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T00:31:30.774Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:31:31.111Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T00:31:31.112Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T00:31:31.112Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T00:31:31.112Z] [BOT] 💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:31:31.116Z] [BOT] ✅ Loaded V2 database: 980 jobs
[2026-01-26T00:31:31.116Z] [BOT] 💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:31:31.116Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:31:31.119Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:31:31.119Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:31:31.119Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-26T00:31:31.130Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:32.632Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T00:31:32.632Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:31:32.850Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T00:31:32.851Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:31:32.854Z] [BOT] ✅ Loaded V2 database: 980 jobs
💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:31:32.854Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:31:32.856Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:31:32.856Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:31:32.857Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-26T00:31:32.865Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
[2026-01-26T00:31:32.865Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:34.367Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T00:31:34.367Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:31:34.587Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T00:31:34.587Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:31:34.591Z] [BOT] ✅ Loaded V2 database: 980 jobs
💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:31:34.591Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:31:34.594Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:31:34.594Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:31:34.594Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-26T00:31:34.603Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:36.103Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T00:31:36.104Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:31:36.224Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T00:31:36.224Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T00:31:36.224Z] [BOT] 💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:31:36.227Z] [BOT] ✅ Loaded V2 database: 980 jobs
[2026-01-26T00:31:36.228Z] [BOT] 💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:31:36.228Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:31:36.232Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:31:36.232Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:31:36.232Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-26T00:31:36.239Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:37.741Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T00:31:37.741Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T00:31:38.001Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T00:31:38.001Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T00:31:38.001Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T00:31:38.002Z] [BOT] 💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:31:38.005Z] [BOT] ✅ Loaded V2 database: 980 jobs
[2026-01-26T00:31:38.005Z] [BOT] 💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:31:38.005Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:31:38.007Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:31:38.007Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:31:38.008Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-26T00:31:38.014Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
[2026-01-26T00:31:38.014Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:42.516Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T00:31:42.517Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T00:31:42.517Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T00:31:42.708Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T00:31:42.708Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T00:31:42.708Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T00:31:42.708Z] [BOT] 💾 BEFORE MERGE: 980 jobs in memory
[2026-01-26T00:31:42.714Z] [BOT] ✅ Loaded V2 database: 980 jobs
💾 DISK STATE: 980 jobs on disk
[2026-01-26T00:31:42.714Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=980
[2026-01-26T00:31:42.718Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T00:31:42.718Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-26T00:31:42.719Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-26T00:31:42.728Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
[2026-01-26T00:31:42.728Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T00:31:47.229Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T00:31:47.231Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T00:31:47.328Z] [BOT] 📂 Loaded 9141 existing routing entries
[2026-01-26T00:31:47.442Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9151
[2026-01-26T00:31:47.443Z] [BOT] Timestamp: 2026-01-26T00:31:47.400Z
[2026-01-26T00:31:47.443Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T00:31:47.443Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T00:31:47.443Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-26T00:31:47.444Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-26T00:31:49.462Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*