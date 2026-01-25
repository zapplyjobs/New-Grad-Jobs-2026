# Discord Bot Execution Audit
**Timestamp:** 2026-01-25T16:47:39.769Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-25T16:47:09.079Z] ========================================
[2026-01-25T16:47:09.081Z] Discord Bot Execution Log
[2026-01-25T16:47:09.081Z] Environment: GitHub Actions
[2026-01-25T16:47:09.081Z] Node Version: v20.20.0
[2026-01-25T16:47:09.081Z] ========================================
[2026-01-25T16:47:09.081Z] Environment Variables Check:
[2026-01-25T16:47:09.081Z] DISCORD_TOKEN: ✅ Set
[2026-01-25T16:47:09.081Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-25T16:47:09.082Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-25T16:47:09.082Z] 
Multi-Channel Configuration:
[2026-01-25T16:47:09.082Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-25T16:47:09.082Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-25T16:47:09.083Z] 
Data Files Check:
[2026-01-25T16:47:09.084Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-25T16:47:09.088Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 595944 bytes)
[2026-01-25T16:47:09.088Z] 
========================================
[2026-01-25T16:47:09.088Z] Starting Enhanced Discord Bot...
[2026-01-25T16:47:09.088Z] ========================================
[2026-01-25T16:47:09.627Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:47:10.375Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-25T16:47:10.375Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-25T16:47:10.375Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-25T16:47:10.496Z] [BOT] ✅ Loaded pending queue: 2855 total (2805 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-25T16:47:10.499Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-25T16:47:10.500Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-25T16:47:10.500Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-25T16:47:10.501Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-25T16:47:10.501Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-25T16:47:10.501Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-25T16:47:10.502Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-25T16:47:10.505Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-25T16:47:10.505Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T16:47:10.505Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:47:10.506Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:10.523Z] [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-25T16:47:10.820Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-25T16:47:10.820Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-25T16:47:10.821Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-25T16:47:10.822Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:10.825Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:10.825Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:10.828Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:47:10.828Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:10.829Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:10.843Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:12.346Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:47:12.346Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:12.595Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-25T16:47:12.596Z] [BOT] ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-25T16:47:12.596Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:12.599Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:12.600Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:12.602Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:47:12.602Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:12.603Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:12.611Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
[2026-01-25T16:47:12.611Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:14.112Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
[2026-01-25T16:47:14.112Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:47:14.112Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:14.309Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-25T16:47:14.310Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-25T16:47:14.310Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-25T16:47:14.310Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:14.313Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:47:14.313Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:14.314Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:14.316Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:47:14.316Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:14.317Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:14.324Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:15.825Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-25T16:47:15.826Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:16.161Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-25T16:47:16.161Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-25T16:47:16.161Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-25T16:47:16.161Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:16.165Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:47:16.165Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:16.165Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:16.167Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:47:16.167Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:16.168Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:16.177Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:20.679Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-25T16:47:20.680Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-25T16:47:20.680Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:47:20.680Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:20.932Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-25T16:47:20.932Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-25T16:47:20.932Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:20.937Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:20.937Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:20.940Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:47:20.940Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:20.940Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:20.950Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
[2026-01-25T16:47:20.950Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:22.452Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
[2026-01-25T16:47:22.452Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:47:22.452Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:22.634Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-25T16:47:22.635Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T16:47:22.635Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:22.638Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:22.639Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:22.641Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:47:22.641Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:22.642Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:22.650Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
[2026-01-25T16:47:22.651Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:24.152Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
[2026-01-25T16:47:24.152Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:47:24.152Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:24.275Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
[2026-01-25T16:47:24.275Z] [BOT] ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-25T16:47:24.275Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-25T16:47:24.275Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:24.279Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:47:24.279Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:24.279Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:24.282Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:47:24.282Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:24.283Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:24.291Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:25.792Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-25T16:47:25.792Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:47:25.792Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:25.935Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-25T16:47:25.936Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-25T16:47:25.936Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:25.939Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:25.939Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:25.942Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:25.942Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:25.949Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:27.451Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-25T16:47:27.451Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-25T16:47:27.452Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:27.694Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
[2026-01-25T16:47:27.695Z] [BOT] ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-25T16:47:27.695Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:27.699Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:27.699Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:27.702Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:47:27.702Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:27.702Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:27.711Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:32.213Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-25T16:47:32.213Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-25T16:47:32.214Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-25T16:47:32.214Z] [BOT] ⚠️  DUPLICATE CHECK DISABLED - Clearing queue after race condition fix
[2026-01-25T16:47:32.392Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
[2026-01-25T16:47:32.392Z] [BOT] ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-25T16:47:32.392Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-25T16:47:32.393Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory
[2026-01-25T16:47:32.396Z] [BOT] ✅ Loaded V2 database: 1043 jobs
[2026-01-25T16:47:32.396Z] [BOT] 💾 DISK STATE: 1043 jobs on disk
[2026-01-25T16:47:32.396Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=1043
[2026-01-25T16:47:32.398Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-25T16:47:32.398Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-25T16:47:32.399Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-25T16:47:32.406Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
[2026-01-25T16:47:32.406Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-25T16:47:36.908Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-25T16:47:36.910Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-25T16:47:37.005Z] [BOT] 📂 Loaded 8831 existing routing entries
[2026-01-25T16:47:37.115Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-25T16:47:37.115Z] [BOT] Total entries: 8841
   Timestamp: 2026-01-25T16:47:37.075Z
[2026-01-25T16:47:37.116Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_3eb5f4e5.jsonl
[2026-01-25T16:47:37.116Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-25T16:47:37.116Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-25T16:47:37.116Z] [BOT] 3. #💰・finance-jobs: 1 posts
[2026-01-25T16:47:37.117Z] [BOT] [STATS] Channel stats saved
[2026-01-25T16:47:39.134Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*