# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T04:46:37.366Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T04:46:06.215Z] ========================================
[2026-01-26T04:46:06.217Z] Discord Bot Execution Log
[2026-01-26T04:46:06.217Z] Environment: GitHub Actions
[2026-01-26T04:46:06.217Z] Node Version: v20.20.0
[2026-01-26T04:46:06.217Z] ========================================
[2026-01-26T04:46:06.217Z] Environment Variables Check:
[2026-01-26T04:46:06.217Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T04:46:06.217Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.217Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T04:46:06.218Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T04:46:06.218Z] 
Multi-Channel Configuration:
[2026-01-26T04:46:06.218Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.218Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.218Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.218Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.218Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.218Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.218Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.218Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.218Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T04:46:06.218Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T04:46:06.219Z] 
Data Files Check:
[2026-01-26T04:46:06.220Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T04:46:06.224Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 547949 bytes)
[2026-01-26T04:46:06.224Z] 
========================================
[2026-01-26T04:46:06.224Z] Starting Enhanced Discord Bot...
[2026-01-26T04:46:06.224Z] ========================================
[2026-01-26T04:46:06.756Z] [BOT] ✅ Loaded V2 database: 957 jobs
[2026-01-26T04:46:07.359Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T04:46:07.360Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T04:46:07.360Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T04:46:07.479Z] [BOT] ✅ Loaded pending queue: 2857 total (2807 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T04:46:07.483Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T04:46:07.484Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T04:46:07.484Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T04:46:07.485Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T04:46:07.486Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
[2026-01-26T04:46:07.486Z] [BOT] - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T04:46:07.489Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T04:46:07.490Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T04:46:07.490Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T04:46:07.506Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T04:46:07.769Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T04:46:07.769Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T04:46:07.770Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T04:46:07.770Z] [BOT] 💾 BEFORE MERGE: 957 jobs in memory
[2026-01-26T04:46:07.774Z] [BOT] ✅ Loaded V2 database: 957 jobs
[2026-01-26T04:46:07.774Z] [BOT] 💾 DISK STATE: 957 jobs on disk
[2026-01-26T04:46:07.774Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=957
[2026-01-26T04:46:07.776Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:46:07.776Z] [BOT] 💾 AFTER MERGE: 957 jobs (merged disk + memory)
[2026-01-26T04:46:07.777Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T04:46:07.784Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-26T04:46:07.784Z] [BOT] ✅ Archiving complete: 2 archived, 955 active
[2026-01-26T04:46:07.792Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:09.295Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2026-01-26T04:46:09.295Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T04:46:09.514Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-26T04:46:09.514Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T04:46:09.514Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T04:46:09.517Z] [BOT] ✅ Loaded V2 database: 955 jobs
[2026-01-26T04:46:09.517Z] [BOT] 💾 DISK STATE: 955 jobs on disk
[2026-01-26T04:46:09.518Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T04:46:09.519Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:46:09.519Z] [BOT] 💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T04:46:09.520Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-26T04:46:09.528Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:11.029Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T04:46:11.222Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T04:46:11.222Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T04:46:11.222Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T04:46:11.225Z] [BOT] ✅ Loaded V2 database: 955 jobs
💾 DISK STATE: 955 jobs on disk
[2026-01-26T04:46:11.225Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T04:46:11.227Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:46:11.227Z] [BOT] 💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T04:46:11.228Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-26T04:46:11.235Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:12.736Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-26T04:46:12.736Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T04:46:12.996Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T04:46:12.996Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T04:46:12.997Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-26T04:46:12.997Z] [BOT] 💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T04:46:13.000Z] [BOT] ✅ Loaded V2 database: 955 jobs
💾 DISK STATE: 955 jobs on disk
[2026-01-26T04:46:13.000Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T04:46:13.002Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:46:13.002Z] [BOT] 💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T04:46:13.002Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-26T04:46:13.010Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:17.511Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T04:46:17.512Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T04:46:17.512Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:46:17.807Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T04:46:17.807Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T04:46:17.807Z] [BOT] 💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T04:46:17.812Z] [BOT] ✅ Loaded V2 database: 955 jobs
💾 DISK STATE: 955 jobs on disk
[2026-01-26T04:46:17.812Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T04:46:17.814Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:46:17.814Z] [BOT] 💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T04:46:17.815Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-26T04:46:17.824Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
[2026-01-26T04:46:17.824Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:19.326Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T04:46:19.326Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:46:19.518Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T04:46:19.518Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T04:46:19.519Z] [BOT] 💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T04:46:19.522Z] [BOT] ✅ Loaded V2 database: 955 jobs
💾 DISK STATE: 955 jobs on disk
[2026-01-26T04:46:19.522Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T04:46:19.524Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:46:19.524Z] [BOT] 💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T04:46:19.524Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-26T04:46:19.532Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:21.034Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-26T04:46:21.035Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:46:21.223Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-26T04:46:21.223Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T04:46:21.223Z] [BOT] 💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T04:46:21.226Z] [BOT] ✅ Loaded V2 database: 955 jobs
[2026-01-26T04:46:21.227Z] [BOT] 💾 DISK STATE: 955 jobs on disk
[2026-01-26T04:46:21.227Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T04:46:21.229Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:46:21.229Z] [BOT] 💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T04:46:21.229Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-26T04:46:21.238Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:22.740Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T04:46:22.740Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T04:46:22.740Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:46:23.000Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-26T04:46:23.000Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T04:46:23.001Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T04:46:23.001Z] [BOT] 💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T04:46:23.004Z] [BOT] ✅ Loaded V2 database: 955 jobs
💾 DISK STATE: 955 jobs on disk
[2026-01-26T04:46:23.004Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T04:46:23.006Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:46:23.006Z] [BOT] 💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T04:46:23.007Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-26T04:46:23.013Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:24.515Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T04:46:24.516Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T04:46:24.736Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T04:46:24.736Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T04:46:24.736Z] [BOT] 💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T04:46:24.740Z] [BOT] ✅ Loaded V2 database: 955 jobs
💾 DISK STATE: 955 jobs on disk
[2026-01-26T04:46:24.740Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T04:46:24.742Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T04:46:24.743Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-26T04:46:24.751Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:29.253Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T04:46:29.254Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-26T04:46:29.254Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T04:46:29.460Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T04:46:29.461Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 955 jobs in memory
[2026-01-26T04:46:29.464Z] [BOT] ✅ Loaded V2 database: 955 jobs
💾 DISK STATE: 955 jobs on disk
[2026-01-26T04:46:29.464Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=955
[2026-01-26T04:46:29.466Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T04:46:29.466Z] [BOT] 💾 AFTER MERGE: 955 jobs (merged disk + memory)
[2026-01-26T04:46:29.468Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-26T04:46:29.477Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
[2026-01-26T04:46:29.477Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T04:46:33.979Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T04:46:33.981Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T04:46:34.078Z] [BOT] 📂 Loaded 9201 existing routing entries
[2026-01-26T04:46:34.202Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T04:46:34.202Z] [BOT] Total entries: 9211
   Timestamp: 2026-01-26T04:46:34.157Z
[2026-01-26T04:46:34.202Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
   Total attempts: 10
   Successful: 10
   Failed: 0
[2026-01-26T04:46:34.202Z] [BOT] Skipped: 0
[2026-01-26T04:46:34.203Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T04:46:34.203Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-26T04:46:34.203Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T04:46:34.203Z] [BOT] [STATS] Channel stats saved
[2026-01-26T04:46:36.220Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*