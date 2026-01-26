# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T05:09:51.116Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T05:09:19.370Z] ========================================
[2026-01-26T05:09:19.371Z] Discord Bot Execution Log
[2026-01-26T05:09:19.372Z] Environment: GitHub Actions
[2026-01-26T05:09:19.372Z] Node Version: v20.20.0
[2026-01-26T05:09:19.372Z] ========================================
[2026-01-26T05:09:19.372Z] Environment Variables Check:
[2026-01-26T05:09:19.372Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T05:09:19.372Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.372Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T05:09:19.372Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T05:09:19.372Z] 
Multi-Channel Configuration:
[2026-01-26T05:09:19.372Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.373Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.373Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.373Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.373Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.373Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.373Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.373Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.373Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T05:09:19.373Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T05:09:19.373Z] 
Data Files Check:
[2026-01-26T05:09:19.374Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T05:09:19.379Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 546777 bytes)
[2026-01-26T05:09:19.379Z] 
========================================
[2026-01-26T05:09:19.379Z] Starting Enhanced Discord Bot...
[2026-01-26T05:09:19.379Z] ========================================
[2026-01-26T05:09:19.903Z] [BOT] ✅ Loaded V2 database: 955 jobs
[2026-01-26T05:09:20.495Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T05:09:20.496Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T05:09:20.496Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T05:09:20.609Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T05:09:20.612Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T05:09:20.613Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T05:09:20.613Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T05:09:20.614Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T05:09:20.614Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T05:09:20.614Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-26T05:09:20.615Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T05:09:20.618Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T05:09:20.618Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T05:09:20.618Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:09:20.635Z] [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T05:09:20.840Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T05:09:20.840Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T05:09:20.840Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T05:09:20.841Z] [BOT] 💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T05:09:20.844Z] [BOT] ✅ Loaded V2 database: 955 jobs
[2026-01-26T05:09:20.844Z] [BOT] 💾 DISK STATE: 955 jobs on disk
[2026-01-26T05:09:20.844Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T05:09:20.846Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:09:20.846Z] [BOT] 💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T05:09:20.847Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T05:09:20.857Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-26T05:09:20.857Z] [BOT] ✅ Archiving complete: 6 archived, 949 active
[2026-01-26T05:09:20.867Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-26T05:09:20.867Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:22.367Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:09:22.610Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T05:09:22.611Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:09:22.613Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-26T05:09:22.613Z] [BOT] 💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:09:22.614Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:09:22.615Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:09:22.615Z] [BOT] 💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:09:22.616Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-26T05:09:22.623Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:24.123Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-26T05:09:24.123Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:09:24.295Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T05:09:24.295Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T05:09:24.295Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T05:09:24.295Z] [BOT] 💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:09:24.298Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-26T05:09:24.298Z] [BOT] 💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:09:24.299Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:09:24.300Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:09:24.300Z] [BOT] 💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:09:24.301Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-26T05:09:24.308Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-26T05:09:24.308Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:25.809Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T05:09:25.809Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T05:09:26.136Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T05:09:26.136Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T05:09:26.136Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:09:26.139Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-26T05:09:26.139Z] [BOT] 💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:09:26.139Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:09:26.141Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:09:26.141Z] [BOT] 💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:09:26.142Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-26T05:09:26.148Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:30.650Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T05:09:30.651Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T05:09:30.651Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:09:30.869Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T05:09:30.869Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:09:30.873Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-26T05:09:30.874Z] [BOT] 💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:09:30.874Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:09:30.876Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:09:30.876Z] [BOT] 💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:09:30.877Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-26T05:09:30.885Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-26T05:09:30.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:32.387Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T05:09:32.387Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:09:32.554Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T05:09:32.554Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T05:09:32.554Z] [BOT] 💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:09:32.557Z] [BOT] ✅ Loaded V2 database: 949 jobs
💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:09:32.558Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:09:32.559Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:09:32.560Z] [BOT] 💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:09:32.560Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-26T05:09:32.568Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-26T05:09:32.569Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:34.070Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T05:09:34.070Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:09:34.240Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T05:09:34.240Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T05:09:34.240Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T05:09:34.240Z] [BOT] 💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:09:34.243Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-26T05:09:34.244Z] [BOT] 💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:09:34.244Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:09:34.246Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:09:34.246Z] [BOT] 💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:09:34.247Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-26T05:09:34.255Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-26T05:09:34.255Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:35.755Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T05:09:35.756Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:09:36.720Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T05:09:36.720Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T05:09:36.720Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:09:36.723Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-26T05:09:36.723Z] [BOT] 💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:09:36.723Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:09:36.725Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T05:09:36.725Z] [BOT] 💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:09:36.726Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-26T05:09:36.732Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-26T05:09:36.732Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:38.234Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
[2026-01-26T05:09:38.234Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T05:09:38.523Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-26T05:09:38.523Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T05:09:38.523Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T05:09:38.524Z] [BOT] 💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:09:38.527Z] [BOT] ✅ Loaded V2 database: 949 jobs
[2026-01-26T05:09:38.527Z] [BOT] 💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:09:38.527Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:09:38.529Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:09:38.530Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-26T05:09:38.537Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-26T05:09:38.537Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:43.039Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T05:09:43.039Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T05:09:43.040Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T05:09:43.574Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T05:09:43.574Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T05:09:43.574Z] [BOT] 💾 BEFORE MERGE: 949 jobs in memory
[2026-01-26T05:09:43.577Z] [BOT] ✅ Loaded V2 database: 949 jobs
💾 DISK STATE: 949 jobs on disk
[2026-01-26T05:09:43.578Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=949
[2026-01-26T05:09:43.580Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 949 jobs (merged disk + memory)
[2026-01-26T05:09:43.581Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-26T05:09:43.590Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-26T05:09:43.590Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T05:09:48.092Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T05:09:48.094Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T05:09:48.190Z] [BOT] 📂 Loaded 9211 existing routing entries
[2026-01-26T05:09:48.312Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T05:09:48.312Z] [BOT] Total entries: 9221
   Timestamp: 2026-01-26T05:09:48.268Z
[2026-01-26T05:09:48.313Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T05:09:48.313Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T05:09:48.313Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T05:09:48.313Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T05:09:48.313Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T05:09:48.314Z] [BOT] [STATS] Channel stats saved
[2026-01-26T05:09:50.330Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*