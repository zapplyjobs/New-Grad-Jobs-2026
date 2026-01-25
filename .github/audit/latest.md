# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T14:44:24.181Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T14:43:53.242Z] ========================================
[2026-01-25T14:43:53.244Z] Discord Bot Execution Log
[2026-01-25T14:43:53.244Z] Environment: GitHub Actions
[2026-01-25T14:43:53.244Z] Node Version: v20.20.0
[2026-01-25T14:43:53.244Z] ========================================
[2026-01-25T14:43:53.244Z] Environment Variables Check:
[2026-01-25T14:43:53.244Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T14:43:53.244Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.244Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T14:43:53.245Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T14:43:53.245Z] 
Multi-Channel Configuration:
[2026-01-25T14:43:53.245Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.245Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.245Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.245Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.245Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.245Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.245Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.245Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.245Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T14:43:53.245Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T14:43:53.245Z] 
Data Files Check:
[2026-01-25T14:43:53.247Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T14:43:53.251Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 598938 bytes)
[2026-01-25T14:43:53.251Z] 
========================================
[2026-01-25T14:43:53.251Z] Starting Enhanced Discord Bot...
[2026-01-25T14:43:53.251Z] ========================================
[2026-01-25T14:43:53.778Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:43:54.340Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T14:43:54.341Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T14:43:54.341Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T14:43:54.460Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T14:43:54.463Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T14:43:54.464Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T14:43:54.464Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T14:43:54.465Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T14:43:54.465Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T14:43:54.465Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T14:43:54.466Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T14:43:54.469Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T14:43:54.469Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T14:43:54.470Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:43:54.470Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:43:54.487Z] [BOT ERROR] (node:2572) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T14:43:54.731Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T14:43:54.732Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T14:43:54.732Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T14:43:54.733Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:43:54.736Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:43:54.736Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:43:54.737Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:43:54.739Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:43:54.739Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:43:54.740Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:43:54.752Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:43:56.255Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:43:56.255Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:43:56.438Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T14:43:56.438Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T14:43:56.439Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T14:43:56.439Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:43:56.442Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:43:56.442Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:43:56.442Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:43:56.444Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:43:56.445Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:43:56.445Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:43:56.454Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:43:57.956Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T14:43:57.956Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:43:57.956Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:43:58.214Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T14:43:58.214Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T14:43:58.215Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T14:43:58.215Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:43:58.218Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:43:58.218Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:43:58.220Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:43:58.220Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:43:58.221Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:43:58.229Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
[2026-01-25T14:43:58.229Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T14:43:59.729Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
[2026-01-25T14:43:59.729Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T14:43:59.730Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:43:59.875Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T14:43:59.876Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:43:59.879Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:43:59.880Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:43:59.882Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:43:59.882Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:43:59.882Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:43:59.892Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:44:04.393Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T14:44:04.394Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T14:44:04.394Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:44:04.394Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:44:04.661Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T14:44:04.661Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:44:04.666Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:44:04.667Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:44:04.669Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:44:04.670Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:44:04.670Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:44:04.680Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:44:06.182Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T14:44:06.182Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:44:06.183Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:44:07.049Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T14:44:07.050Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T14:44:07.050Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:44:07.053Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:44:07.053Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:44:07.056Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:44:07.056Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:44:07.056Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:44:07.065Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:44:08.567Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T14:44:08.567Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:44:08.567Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:44:08.752Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T14:44:08.753Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:44:08.756Z] [BOT] ✅ Loaded V2 database: 1049 jobs
[2026-01-25T14:44:08.757Z] [BOT] 💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:44:08.757Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:44:08.759Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:44:08.759Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:44:08.760Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:44:08.768Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:44:10.270Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T14:44:10.270Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T14:44:10.270Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:44:10.434Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T14:44:10.435Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T14:44:10.435Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:44:10.438Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:44:10.439Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:44:10.441Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:44:10.441Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:44:10.442Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:44:10.449Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:44:11.949Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T14:44:11.950Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:44:12.090Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T14:44:12.090Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T14:44:12.091Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T14:44:12.091Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:44:12.095Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:44:12.095Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:44:12.097Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:44:12.097Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:44:12.098Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:44:12.106Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:44:16.608Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T14:44:16.609Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T14:44:16.609Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T14:44:16.609Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T14:44:16.793Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T14:44:16.793Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T14:44:16.793Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T14:44:16.793Z] [BOT] 💾 BEFORE MERGE: 1049 jobs in memory
[2026-01-25T14:44:16.797Z] [BOT] ✅ Loaded V2 database: 1049 jobs
💾 DISK STATE: 1049 jobs on disk
[2026-01-25T14:44:16.797Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1049
[2026-01-25T14:44:16.799Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T14:44:16.799Z] [BOT] 💾 AFTER MERGE: 1049 jobs (merged disk + memory)
[2026-01-25T14:44:16.800Z] [BOT] ✅ No jobs to archive (all 1049 jobs within 7-day window)
[2026-01-25T14:44:16.808Z] [BOT] 💾 Saved posted_jobs.json: 1049 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T14:44:21.310Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T14:44:21.312Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T14:44:21.409Z] [BOT] 📂 Loaded 8751 existing routing entries
[2026-01-25T14:44:21.523Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8761
[2026-01-25T14:44:21.524Z] [BOT] Timestamp: 2026-01-25T14:44:21.481Z
[2026-01-25T14:44:21.524Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
   Total attempts: 10
[2026-01-25T14:44:21.524Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T14:44:21.524Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-25T14:44:21.525Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T14:44:21.525Z] [BOT] [STATS] Channel stats saved
[2026-01-25T14:44:23.543Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2572) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*