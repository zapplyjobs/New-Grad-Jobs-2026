# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T07:43:16.526Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T07:42:46.598Z] ========================================
[2026-01-25T07:42:46.600Z] Discord Bot Execution Log
[2026-01-25T07:42:46.600Z] Environment: GitHub Actions
[2026-01-25T07:42:46.600Z] Node Version: v20.20.0
[2026-01-25T07:42:46.600Z] ========================================
[2026-01-25T07:42:46.600Z] Environment Variables Check:
[2026-01-25T07:42:46.600Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T07:42:46.600Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.600Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T07:42:46.601Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T07:42:46.601Z] 
Multi-Channel Configuration:
[2026-01-25T07:42:46.601Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.601Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.601Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.601Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.601Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.601Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.601Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.601Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.601Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T07:42:46.601Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T07:42:46.601Z] 
Data Files Check:
[2026-01-25T07:42:46.603Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T07:42:46.607Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 615221 bytes)
[2026-01-25T07:42:46.607Z] 
========================================
[2026-01-25T07:42:46.607Z] Starting Enhanced Discord Bot...
[2026-01-25T07:42:46.607Z] ========================================
[2026-01-25T07:42:47.155Z] [BOT] ✅ Loaded V2 database: 1080 jobs
[2026-01-25T07:42:47.584Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T07:42:47.585Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T07:42:47.585Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T07:42:47.704Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T07:42:47.708Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T07:42:47.708Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T07:42:47.708Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T07:42:47.709Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T07:42:47.710Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T07:42:47.710Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-25T07:42:47.710Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T07:42:47.713Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T07:42:47.714Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T07:42:47.714Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:42:47.714Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:42:47.732Z] [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T07:42:47.987Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T07:42:47.987Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T07:42:47.988Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T07:42:47.988Z] [BOT] 💾 BEFORE MERGE: 1080 jobs in memory
[2026-01-25T07:42:47.992Z] [BOT] ✅ Loaded V2 database: 1080 jobs
[2026-01-25T07:42:47.992Z] [BOT] 💾 DISK STATE: 1080 jobs on disk
[2026-01-25T07:42:47.992Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1080
[2026-01-25T07:42:47.995Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:42:47.995Z] [BOT] 💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-25T07:42:47.996Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-25T07:42:48.001Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
[2026-01-25T07:42:48.001Z] [BOT] ✅ Archiving complete: 8 archived, 1072 active
[2026-01-25T07:42:48.008Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:42:49.511Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T07:42:49.512Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:42:49.512Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:42:49.705Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T07:42:49.705Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T07:42:49.706Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T07:42:49.706Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:42:49.709Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:42:49.709Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:42:49.711Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:42:49.711Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:42:49.712Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:42:49.719Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:42:51.221Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:42:51.221Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:42:51.332Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T07:42:51.332Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T07:42:51.333Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T07:42:51.333Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:42:51.337Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:42:51.337Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:42:51.338Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:42:51.340Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:42:51.340Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:42:51.341Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:42:51.349Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T07:42:51.349Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:42:52.851Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-25T07:42:52.851Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T07:42:52.851Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:42:53.026Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T07:42:53.026Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T07:42:53.026Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:42:53.030Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:42:53.030Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:42:53.032Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:42:53.032Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:42:53.033Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:42:53.042Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:42:57.544Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T07:42:57.545Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T07:42:57.545Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:42:57.546Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:42:57.678Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T07:42:57.679Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T07:42:57.679Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:42:57.683Z] [BOT] ✅ Loaded V2 database: 1072 jobs
[2026-01-25T07:42:57.684Z] [BOT] 💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:42:57.684Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:42:57.687Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:42:57.687Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:42:57.687Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:42:57.697Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T07:42:57.697Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:42:59.199Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T07:42:59.199Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:42:59.200Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:42:59.372Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T07:42:59.373Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T07:42:59.373Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:42:59.376Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:42:59.376Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:42:59.379Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:42:59.379Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:42:59.380Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:42:59.388Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-25T07:42:59.389Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T07:43:00.890Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T07:43:00.890Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:43:00.891Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:43:01.065Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T07:43:01.065Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T07:43:01.065Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T07:43:01.065Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:43:01.069Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:43:01.069Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:43:01.072Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:43:01.072Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:43:01.072Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:43:01.081Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:43:02.583Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T07:43:02.583Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:43:02.583Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:43:02.849Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T07:43:02.850Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T07:43:02.850Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:43:02.853Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:43:02.854Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:43:02.856Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:43:02.856Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:43:02.857Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:43:02.864Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:43:04.366Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T07:43:04.366Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T07:43:04.366Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:43:04.494Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T07:43:04.495Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:43:04.499Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:43:04.499Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:43:04.501Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:43:04.502Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:43:04.502Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:43:04.510Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:43:09.012Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T07:43:09.013Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T07:43:09.013Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T07:43:09.014Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T07:43:09.180Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T07:43:09.180Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T07:43:09.180Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T07:43:09.180Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory
[2026-01-25T07:43:09.184Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-25T07:43:09.184Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1072
[2026-01-25T07:43:09.186Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T07:43:09.186Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-25T07:43:09.187Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-25T07:43:09.194Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T07:43:13.695Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T07:43:13.697Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T07:43:13.791Z] [BOT] 📂 Loaded 8491 existing routing entries
[2026-01-25T07:43:13.899Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T07:43:13.900Z] [BOT] Total entries: 8501
   Timestamp: 2026-01-25T07:43:13.859Z
[2026-01-25T07:43:13.900Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T07:43:13.900Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-25T07:43:13.901Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T07:43:13.901Z] [BOT] [STATS] Channel stats saved
[2026-01-25T07:43:15.918Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2543) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*