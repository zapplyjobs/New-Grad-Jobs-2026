# Discord Bot Execution Audit
**Timestamp:** 2026-01-26T07:18:30.808Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-26T07:17:59.411Z] ========================================
[2026-01-26T07:17:59.413Z] Discord Bot Execution Log
[2026-01-26T07:17:59.413Z] Environment: GitHub Actions
[2026-01-26T07:17:59.413Z] Node Version: v20.20.0
[2026-01-26T07:17:59.413Z] ========================================
[2026-01-26T07:17:59.413Z] Environment Variables Check:
[2026-01-26T07:17:59.413Z] DISCORD_TOKEN: ✅ Set
[2026-01-26T07:17:59.414Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.414Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-26T07:17:59.414Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-26T07:17:59.414Z] 
Multi-Channel Configuration:
[2026-01-26T07:17:59.414Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.414Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.414Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.414Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.414Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.414Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.414Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.415Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.415Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-26T07:17:59.415Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-26T07:17:59.415Z] 
Data Files Check:
[2026-01-26T07:17:59.416Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132966 bytes)
[2026-01-26T07:17:59.420Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 530328 bytes)
[2026-01-26T07:17:59.420Z] 
========================================
[2026-01-26T07:17:59.420Z] Starting Enhanced Discord Bot...
[2026-01-26T07:17:59.420Z] ========================================
[2026-01-26T07:17:59.958Z] [BOT] ✅ Loaded V2 database: 928 jobs
[2026-01-26T07:18:00.537Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-26T07:18:00.538Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-26T07:18:00.538Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-26T07:18:00.658Z] [BOT] ✅ Loaded pending queue: 2858 total (2808 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 at Sony Interactive Entertainment
[2026-01-26T07:18:00.661Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-26T07:18:00.661Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-26T07:18:00.662Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-26T07:18:00.663Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-26T07:18:00.663Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-26T07:18:00.663Z] [BOT] - Software Engineer - Entry @ Jerry: palo alto, boston
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-26T07:18:00.666Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-26T07:18:00.667Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T07:18:00.667Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:18:00.684Z] [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-26T07:18:00.907Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment in #💻・tech-jobs
[2026-01-26T07:18:00.907Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment
[2026-01-26T07:18:00.907Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_32b661b3 Interactive Entertainment → category channel (1 total channels)
[2026-01-26T07:18:00.908Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory
[2026-01-26T07:18:00.911Z] [BOT] ✅ Loaded V2 database: 928 jobs
[2026-01-26T07:18:00.911Z] [BOT] 💾 DISK STATE: 928 jobs on disk
[2026-01-26T07:18:00.911Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=928
[2026-01-26T07:18:00.913Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:00.914Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-26T07:18:00.914Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-26T07:18:00.921Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-26T07:18:00.921Z] [BOT] ✅ Archiving complete: 6 archived, 922 active
[2026-01-26T07:18:00.931Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
[2026-01-26T07:18:00.931Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:02.433Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Engineering" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:18:02.611Z] [BOT] ✅ Posted message: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1
[2026-01-26T07:18:02.611Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Data Engineering @ ORG_0bbe3cb1 → category channel (1 total channels)
💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:18:02.614Z] [BOT] ✅ Loaded V2 database: 922 jobs
💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:18:02.614Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:18:02.616Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:02.616Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:18:02.617Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-26T07:18:02.623Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:04.124Z] [BOT] 📍 [ROUTING] "Head of Azure Partnership" @ anthropic
   Category: TECH (matched: "cloud")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:18:04.363Z] [BOT] ✅ Posted message: Head of Azure Partnership @ anthropic in #💻・tech-jobs
[2026-01-26T07:18:04.363Z] [BOT] ✅ Industry: Head of Azure Partnership @ anthropic
[2026-01-26T07:18:04.363Z] [BOT] 💾 Added channel posting: Head of Azure Partnership @ anthropic → category channel (1 total channels)
[2026-01-26T07:18:04.363Z] [BOT] 💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:18:04.366Z] [BOT] ✅ Loaded V2 database: 922 jobs
[2026-01-26T07:18:04.366Z] [BOT] 💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:18:04.366Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:18:04.368Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:04.368Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:18:04.369Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-26T07:18:04.375Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:05.877Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Platform" @ ORG_b21b93a4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-26T07:18:06.051Z] [BOT] ✅ Posted message: Software Engineer - Loans Platform @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-26T07:18:06.051Z] [BOT] ✅ Industry: Software Engineer - Loans Platform @ ORG_b21b93a4
[2026-01-26T07:18:06.051Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Platform @ ORG_b21b93a4 → category channel (1 total channels)
💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:18:06.054Z] [BOT] ✅ Loaded V2 database: 922 jobs
💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:18:06.055Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:18:06.056Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:06.056Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:18:06.057Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-26T07:18:06.063Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:10.566Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-26T07:18:10.566Z] [BOT] 📍 [ROUTING] "AI ML Engineer - RTL Power Optimization" @ ORG_0890f456
[2026-01-26T07:18:10.566Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:18:10.956Z] [BOT] ✅ Posted message: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-26T07:18:10.957Z] [BOT] ✅ Industry: AI ML Engineer - RTL Power Optimization @ ORG_0890f456
[2026-01-26T07:18:10.957Z] [BOT] 💾 Added channel posting: AI ML Engineer - RTL Power Optimization @ ORG_0890f456 → category channel (1 total channels)
[2026-01-26T07:18:10.957Z] [BOT] 💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:18:10.961Z] [BOT] ✅ Loaded V2 database: 922 jobs
[2026-01-26T07:18:10.961Z] [BOT] 💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:18:10.961Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:18:10.963Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:10.963Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:18:10.964Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-26T07:18:10.973Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:12.474Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - AI" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T07:18:12.474Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:18:12.665Z] [BOT] ✅ Posted message: Graduate Software Engineer - AI @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - AI @ ORG_f2f6a018
[2026-01-26T07:18:12.665Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - AI @ ORG_f2f6a018 → category channel (1 total channels)
[2026-01-26T07:18:12.665Z] [BOT] 💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:18:12.668Z] [BOT] ✅ Loaded V2 database: 922 jobs
💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:18:12.668Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:18:12.670Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:12.670Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:18:12.671Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-26T07:18:12.678Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
[2026-01-26T07:18:12.679Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:14.179Z] [BOT] 📍 [ROUTING] "2026 New Grad - Software Engineer - Full-Stack" @ ORG_f2f6a018
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T07:18:14.179Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:18:14.615Z] [BOT] ✅ Posted message: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 in #🤖・ai-jobs
  ✅ Industry: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018
[2026-01-26T07:18:14.616Z] [BOT] 💾 Added channel posting: 2026 New Grad - Software Engineer - Full-Stack @ ORG_f2f6a018 → category channel (1 total channels)
💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:18:14.619Z] [BOT] ✅ Loaded V2 database: 922 jobs
💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:18:14.619Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:18:14.621Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:14.622Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:18:14.622Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-26T07:18:14.631Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:16.132Z] [BOT] 📍 [ROUTING] "AI / Automation & Governance Owner" @ gusto
[2026-01-26T07:18:16.132Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:18:16.314Z] [BOT] ✅ Posted message: AI / Automation & Governance Owner @ gusto in #🤖・ai-jobs
  ✅ Industry: AI / Automation & Governance Owner @ gusto
[2026-01-26T07:18:16.314Z] [BOT] 💾 Added channel posting: AI / Automation & Governance Owner @ gusto → category channel (1 total channels)
[2026-01-26T07:18:16.314Z] [BOT] 💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:18:16.317Z] [BOT] ✅ Loaded V2 database: 922 jobs
💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:18:16.318Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:18:16.320Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:16.320Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:18:16.320Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-26T07:18:16.327Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
[2026-01-26T07:18:16.327Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:17.827Z] [BOT] 📍 [ROUTING] "Developer Campaign Marketer, Claude Code" @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-26T07:18:17.828Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-26T07:18:18.044Z] [BOT] ✅ Posted message: Developer Campaign Marketer, Claude Code @ anthropic in #🤖・ai-jobs
  ✅ Industry: Developer Campaign Marketer, Claude Code @ anthropic
[2026-01-26T07:18:18.045Z] [BOT] 💾 Added channel posting: Developer Campaign Marketer, Claude Code @ anthropic → category channel (1 total channels)
[2026-01-26T07:18:18.045Z] [BOT] 💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:18:18.048Z] [BOT] ✅ Loaded V2 database: 922 jobs
💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:18:18.048Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:18:18.050Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:18.050Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:18:18.051Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-26T07:18:18.058Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
[2026-01-26T07:18:18.058Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:22.559Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-26T07:18:22.560Z] [BOT] 📍 [ROUTING] "GTM Strategy & Operations, Commercial" @ anthropic
[2026-01-26T07:18:22.560Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-26T07:18:22.842Z] [BOT] ✅ Posted message: GTM Strategy & Operations, Commercial @ anthropic in #💰・finance-jobs
  ✅ Industry: GTM Strategy & Operations, Commercial @ anthropic
[2026-01-26T07:18:22.843Z] [BOT] 💾 Added channel posting: GTM Strategy & Operations, Commercial @ anthropic → category channel (1 total channels)
[2026-01-26T07:18:22.843Z] [BOT] 💾 BEFORE MERGE: 922 jobs in memory
[2026-01-26T07:18:22.846Z] [BOT] ✅ Loaded V2 database: 922 jobs
💾 DISK STATE: 922 jobs on disk
[2026-01-26T07:18:22.846Z] [BOT] 💾 DEBUG: About to iterate memory jobs - Array.isArray=true, length=922
[2026-01-26T07:18:22.848Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-26T07:18:22.848Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-26T07:18:22.849Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-26T07:18:22.859Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
[2026-01-26T07:18:22.859Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-26T07:18:27.361Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-26T07:18:27.362Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-26T07:18:27.459Z] [BOT] 📂 Loaded 9271 existing routing entries
[2026-01-26T07:18:27.583Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-26T07:18:27.583Z] [BOT] Total entries: 9281
   Timestamp: 2026-01-26T07:18:27.538Z
[2026-01-26T07:18:27.583Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_f6b96cca.jsonl
[2026-01-26T07:18:27.584Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2026-01-26T07:18:27.584Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-26T07:18:27.584Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-26T07:18:27.584Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-26T07:18:27.585Z] [BOT] [STATS] Channel stats saved
[2026-01-26T07:18:29.602Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*