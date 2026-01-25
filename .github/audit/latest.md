# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T19:12:37.167Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T19:12:04.067Z] ========================================
[2026-01-25T19:12:04.069Z] Discord Bot Execution Log
[2026-01-25T19:12:04.069Z] Environment: GitHub Actions
[2026-01-25T19:12:04.069Z] Node Version: v20.20.0
[2026-01-25T19:12:04.069Z] ========================================
[2026-01-25T19:12:04.069Z] Environment Variables Check:
[2026-01-25T19:12:04.069Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T19:12:04.069Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.069Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T19:12:04.070Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T19:12:04.070Z] 
Multi-Channel Configuration:
[2026-01-25T19:12:04.070Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.070Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.070Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.070Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.070Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.070Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.070Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.070Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.070Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T19:12:04.070Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T19:12:04.071Z] 
Data Files Check:
[2026-01-25T19:12:04.072Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T19:12:04.076Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 594004 bytes)
[2026-01-25T19:12:04.076Z] 
========================================
[2026-01-25T19:12:04.076Z] Starting Enhanced Discord Bot...
[2026-01-25T19:12:04.076Z] ========================================
[2026-01-25T19:12:04.602Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:12:05.147Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T19:12:05.147Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T19:12:05.147Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T19:12:05.265Z] [BOT] ✅ Loaded pending queue: 2856 total (2806 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T19:12:05.269Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T19:12:05.269Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T19:12:05.269Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T19:12:05.270Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T19:12:05.271Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T19:12:05.271Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T19:12:05.274Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T19:12:05.275Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:12:05.275Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:12:05.291Z] [BOT ERROR] (node:2557) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T19:12:05.495Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T19:12:05.495Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T19:12:05.496Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:05.499Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:12:05.499Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:05.500Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:05.502Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:12:05.503Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:05.503Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:05.515Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:07.019Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T19:12:07.019Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:12:07.260Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T19:12:07.260Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T19:12:07.261Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:07.264Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:12:07.264Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:07.264Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:07.266Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:12:07.266Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:07.267Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:07.275Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T19:12:07.275Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:08.776Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:12:08.974Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T19:12:08.975Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T19:12:08.975Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T19:12:08.975Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:08.978Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:08.978Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:08.980Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:12:08.981Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:08.981Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:08.989Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:10.490Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T19:12:10.490Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T19:12:12.464Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T19:12:12.465Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T19:12:12.465Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:12.468Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:12.468Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:12.471Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:12.471Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:12.478Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T19:12:12.478Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:16.980Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T19:12:16.980Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T19:12:16.980Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:12:17.210Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T19:12:17.210Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T19:12:17.211Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T19:12:17.211Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:17.215Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:12:17.215Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:17.216Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:17.218Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:12:17.218Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:17.219Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:17.228Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T19:12:17.228Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:18.730Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:12:18.730Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:12:18.936Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T19:12:18.936Z] [BOT] ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T19:12:18.936Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:18.940Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:18.940Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:18.942Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:18.943Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:18.952Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T19:12:18.952Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:20.453Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:12:20.453Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:12:20.663Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T19:12:20.663Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T19:12:20.663Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T19:12:20.664Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:20.667Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:20.667Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:20.670Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:20.670Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:20.679Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:22.181Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T19:12:22.182Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:12:22.440Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T19:12:22.440Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T19:12:22.440Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:22.444Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:22.444Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:22.446Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:12:22.446Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:22.447Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:22.454Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T19:12:22.454Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:23.956Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T19:12:23.956Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T19:12:24.464Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T19:12:24.465Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T19:12:24.465Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:24.468Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:24.468Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:24.471Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:12:24.471Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:24.471Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:24.480Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:28.981Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T19:12:28.982Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T19:12:28.982Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T19:12:29.345Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T19:12:29.345Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T19:12:29.345Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T19:12:29.345Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory
[2026-01-25T19:12:29.349Z] [BOT] ✅ Loaded V2 database: 1039 jobs
[2026-01-25T19:12:29.349Z] [BOT] 💾 DISK STATE: 1039 jobs on disk
[2026-01-25T19:12:29.349Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1039
[2026-01-25T19:12:29.351Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T19:12:29.351Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-25T19:12:29.352Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-25T19:12:29.359Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
[2026-01-25T19:12:29.359Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T19:12:33.862Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T19:12:33.864Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T19:12:33.960Z] [BOT] 📂 Loaded 8931 existing routing entries
[2026-01-25T19:12:34.070Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T19:12:34.071Z] [BOT] Total entries: 8941
   Timestamp: 2026-01-25T19:12:34.029Z
[2026-01-25T19:12:34.071Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T19:12:34.071Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T19:12:34.071Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-25T19:12:34.072Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-25T19:12:34.072Z] [BOT] 3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-25T19:12:36.088Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2557) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*