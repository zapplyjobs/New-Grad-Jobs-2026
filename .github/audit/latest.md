# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T06:53:04.397Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T06:52:33.986Z] ========================================
[2026-01-26T06:52:33.988Z] Discord Bot Execution Log
[2026-01-26T06:52:33.988Z] Environment: GitHub Actions
[2026-01-26T06:52:33.988Z] Node Version: v20.20.0
[2026-01-26T06:52:33.988Z] ========================================
[2026-01-26T06:52:33.988Z] Environment Variables Check:
[2026-01-26T06:52:33.988Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T06:52:33.989Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.989Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T06:52:33.989Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T06:52:33.989Z] 
Multi-Channel Configuration:
[2026-01-26T06:52:33.989Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.989Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.989Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.989Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.989Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.989Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.989Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.989Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.990Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T06:52:33.990Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T06:52:33.990Z] 
Data Files Check:
[2026-01-26T06:52:33.991Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T06:52:33.995Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 535872 bytes)
[2026-01-26T06:52:33.995Z] 
========================================
[2026-01-26T06:52:33.995Z] Starting Enhanced Discord Bot...
[2026-01-26T06:52:33.995Z] ========================================
[2026-01-26T06:52:34.540Z] [BOT] ✅ Loaded V2 database: 937 jobs
[2026-01-26T06:52:35.014Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T06:52:35.015Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T06:52:35.015Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T06:52:35.135Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T06:52:35.138Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T06:52:35.139Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T06:52:35.139Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T06:52:35.140Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T06:52:35.140Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T06:52:35.140Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-26T06:52:35.141Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T06:52:35.144Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T06:52:35.144Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T06:52:35.145Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:52:35.161Z] [BOT ERROR] (node:3048) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T06:52:35.569Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T06:52:35.570Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T06:52:35.570Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T06:52:35.570Z] [BOT] 💾 BEFORE MERGE: 937 jobs in memory
[2026-01-26T06:52:35.573Z] [BOT] ✅ Loaded V2 database: 937 jobs
💾 DISK STATE: 937 jobs on disk
[2026-01-26T06:52:35.574Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=937
[2026-01-26T06:52:35.576Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:52:35.576Z] [BOT] 💾 AFTER MERGE: 937 jobs (merged disk + memory)
[2026-01-26T06:52:35.577Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T06:52:35.582Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-26T06:52:35.583Z] [BOT] ✅ Archiving complete: 9 archived, 928 active
[2026-01-26T06:52:35.590Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
[2026-01-26T06:52:35.590Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T06:52:37.093Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:52:37.329Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T06:52:37.329Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T06:52:37.330Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-26T06:52:37.330Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T06:52:37.333Z] [BOT] ✅ Loaded V2 database: 928 jobs
💾 DISK STATE: 928 jobs on disk
[2026-01-26T06:52:37.333Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T06:52:37.335Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T06:52:37.335Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-26T06:52:37.342Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:52:38.842Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-26T06:52:38.842Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:52:39.016Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T06:52:39.016Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T06:52:39.016Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T06:52:39.019Z] [BOT] ✅ Loaded V2 database: 928 jobs
💾 DISK STATE: 928 jobs on disk
[2026-01-26T06:52:39.019Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T06:52:39.021Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:52:39.021Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T06:52:39.022Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-26T06:52:39.028Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:52:40.530Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-26T06:52:40.530Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T06:52:40.705Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T06:52:40.705Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T06:52:40.705Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T06:52:40.708Z] [BOT] ✅ Loaded V2 database: 928 jobs
💾 DISK STATE: 928 jobs on disk
[2026-01-26T06:52:40.709Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T06:52:40.711Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:52:40.711Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T06:52:40.711Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-26T06:52:40.718Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:52:45.219Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T06:52:45.220Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-26T06:52:45.220Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:52:45.440Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T06:52:45.441Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T06:52:45.441Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T06:52:45.445Z] [BOT] ✅ Loaded V2 database: 928 jobs
[2026-01-26T06:52:45.445Z] [BOT] 💾 DISK STATE: 928 jobs on disk
[2026-01-26T06:52:45.445Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T06:52:45.448Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:52:45.448Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T06:52:45.448Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-26T06:52:45.457Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:52:46.959Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
[2026-01-26T06:52:46.959Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:52:47.091Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T06:52:47.092Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T06:52:47.092Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T06:52:47.092Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T06:52:47.095Z] [BOT] ✅ Loaded V2 database: 928 jobs
[2026-01-26T06:52:47.095Z] [BOT] 💾 DISK STATE: 928 jobs on disk
[2026-01-26T06:52:47.095Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T06:52:47.097Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:52:47.097Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T06:52:47.098Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-26T06:52:47.105Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:52:48.607Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T06:52:48.607Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:52:48.788Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T06:52:48.788Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T06:52:48.788Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T06:52:48.789Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T06:52:48.792Z] [BOT] ✅ Loaded V2 database: 928 jobs
💾 DISK STATE: 928 jobs on disk
[2026-01-26T06:52:48.792Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T06:52:48.794Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T06:52:48.795Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-26T06:52:48.803Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:52:50.304Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-26T06:52:50.305Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:52:50.442Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T06:52:50.442Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T06:52:50.442Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T06:52:50.445Z] [BOT] ✅ Loaded V2 database: 928 jobs
💾 DISK STATE: 928 jobs on disk
[2026-01-26T06:52:50.446Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T06:52:50.447Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:52:50.448Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T06:52:50.448Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-26T06:52:50.455Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:52:51.955Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-26T06:52:51.955Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T06:52:52.163Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T06:52:52.163Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T06:52:52.163Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T06:52:52.166Z] [BOT] ✅ Loaded V2 database: 928 jobs
💾 DISK STATE: 928 jobs on disk
[2026-01-26T06:52:52.167Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T06:52:52.169Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:52:52.169Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T06:52:52.169Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-26T06:52:52.178Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T06:52:56.679Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T06:52:56.680Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T06:52:56.680Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T06:52:56.979Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-26T06:52:56.979Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T06:52:56.979Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T06:52:56.979Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T06:52:56.982Z] [BOT] ✅ Loaded V2 database: 928 jobs
[2026-01-26T06:52:56.982Z] [BOT] 💾 DISK STATE: 928 jobs on disk
[2026-01-26T06:52:56.982Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T06:52:56.984Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T06:52:56.984Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T06:52:56.985Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-26T06:52:56.993Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
[2026-01-26T06:52:56.993Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T06:53:01.495Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T06:53:01.496Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T06:53:01.598Z] [BOT] 📂 Loaded 9261 existing routing entries
[2026-01-26T06:53:01.723Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T06:53:01.724Z] [BOT] Total entries: 9271
   Timestamp: 2026-01-26T06:53:01.678Z
[2026-01-26T06:53:01.724Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T06:53:01.724Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T06:53:01.725Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T06:53:01.725Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T06:53:01.725Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T06:53:01.725Z] [BOT] [STATS] Channel stats saved
[2026-01-26T06:53:03.745Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3048) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*