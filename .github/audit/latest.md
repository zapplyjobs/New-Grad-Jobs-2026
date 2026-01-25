# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T12:15:55.001Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T12:15:23.839Z] ========================================
[2026-01-25T12:15:23.841Z] Discord Bot Execution Log
[2026-01-25T12:15:23.841Z] Environment: GitHub Actions
[2026-01-25T12:15:23.841Z] Node Version: v20.20.0
[2026-01-25T12:15:23.841Z] ========================================
[2026-01-25T12:15:23.841Z] Environment Variables Check:
[2026-01-25T12:15:23.841Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T12:15:23.841Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.841Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T12:15:23.841Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T12:15:23.841Z] 
Multi-Channel Configuration:
[2026-01-25T12:15:23.841Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.841Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.842Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.842Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.842Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.842Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.842Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.842Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.842Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T12:15:23.842Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T12:15:23.842Z] 
Data Files Check:
[2026-01-25T12:15:23.843Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T12:15:23.848Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 599443 bytes)
[2026-01-25T12:15:23.848Z] 
========================================
[2026-01-25T12:15:23.848Z] Starting Enhanced Discord Bot...
[2026-01-25T12:15:23.848Z] ========================================
[2026-01-25T12:15:24.364Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:15:24.937Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T12:15:24.937Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T12:15:24.938Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T12:15:25.056Z] [BOT] ✅ Loaded pending queue: 2854 total (2804 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T12:15:25.059Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T12:15:25.060Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T12:15:25.060Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T12:15:25.061Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T12:15:25.061Z] [BOT] (2 grouped as same job with different locations)
[2026-01-25T12:15:25.061Z] [BOT] 📍 2 jobs with multiple locations:
   - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-25T12:15:25.062Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T12:15:25.065Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T12:15:25.065Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T12:15:25.066Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:15:25.066Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:25.083Z] [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T12:15:25.268Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T12:15:25.268Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T12:15:25.269Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T12:15:25.269Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:25.273Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:15:25.273Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:25.273Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:25.276Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:25.276Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:25.276Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:25.289Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:15:25.289Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:26.791Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
[2026-01-25T12:15:26.791Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:15:26.792Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:26.988Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T12:15:26.988Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T12:15:26.989Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-25T12:15:26.989Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:26.992Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:15:26.992Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:26.992Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:26.994Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:26.994Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:26.995Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:27.003Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:28.505Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
[2026-01-25T12:15:28.505Z] [BOT] Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:15:28.506Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:28.710Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
  ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T12:15:28.711Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T12:15:28.711Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:28.714Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:15:28.714Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:28.715Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:28.717Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:28.717Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:28.718Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:28.725Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:15:28.725Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:30.226Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T12:15:30.227Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:30.401Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T12:15:30.401Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T12:15:30.402Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T12:15:30.402Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:30.405Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:30.405Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:30.408Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:30.409Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:30.409Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:30.418Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:34.920Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T12:15:34.921Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-25T12:15:34.921Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:15:34.921Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:35.265Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-25T12:15:35.265Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T12:15:35.265Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T12:15:35.266Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:35.270Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:15:35.270Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:35.270Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:35.273Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:35.273Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:35.273Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:35.284Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:15:35.284Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:36.785Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T12:15:36.785Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:15:36.786Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:37.055Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T12:15:37.056Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T12:15:37.056Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:37.059Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:37.059Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:37.062Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:37.062Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:37.063Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:37.072Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:15:37.072Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:38.573Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-25T12:15:38.573Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:38.905Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T12:15:38.905Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T12:15:38.905Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T12:15:38.906Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:38.909Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:38.909Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:38.912Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:38.912Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:38.913Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:38.921Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:15:38.921Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:40.423Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T12:15:40.423Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:15:40.423Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:40.738Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
[2026-01-25T12:15:40.738Z] [BOT] ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T12:15:40.738Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T12:15:40.738Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:40.741Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:15:40.741Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:40.742Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:40.744Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:40.744Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:40.744Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:40.751Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:15:40.752Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:42.253Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T12:15:42.253Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T12:15:42.253Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:42.494Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T12:15:42.494Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T12:15:42.494Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-25T12:15:42.494Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:42.498Z] [BOT] ✅ Loaded V2 database: 1050 jobs
💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:42.498Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:42.501Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:42.501Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:42.501Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:42.510Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
[2026-01-25T12:15:42.510Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:47.012Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T12:15:47.012Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T12:15:47.012Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T12:15:47.012Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T12:15:47.280Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T12:15:47.281Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T12:15:47.281Z] [BOT] 💾 BEFORE MERGE: 1050 jobs in memory
[2026-01-25T12:15:47.284Z] [BOT] ✅ Loaded V2 database: 1050 jobs
[2026-01-25T12:15:47.284Z] [BOT] 💾 DISK STATE: 1050 jobs on disk
[2026-01-25T12:15:47.285Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1050
[2026-01-25T12:15:47.287Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T12:15:47.287Z] [BOT] 💾 AFTER MERGE: 1050 jobs (merged disk + memory)
[2026-01-25T12:15:47.287Z] [BOT] ✅ No jobs to archive (all 1050 jobs within 7-day window)
[2026-01-25T12:15:47.295Z] [BOT] 💾 Saved posted_jobs.json: 1050 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T12:15:51.797Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T12:15:51.798Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T12:15:51.891Z] [BOT] 📂 Loaded 8671 existing routing entries
[2026-01-25T12:15:52.000Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T12:15:52.000Z] [BOT] Total entries: 8681
   Timestamp: 2026-01-25T12:15:51.959Z
[2026-01-25T12:15:52.001Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T12:15:52.001Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T12:15:52.001Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-25T12:15:52.001Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-25T12:15:52.002Z] [BOT] [STATS] Channel stats saved
[2026-01-25T12:15:54.019Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*