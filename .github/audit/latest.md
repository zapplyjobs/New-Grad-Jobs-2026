# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T08:33:19.093Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T08:32:48.184Z] ========================================
[2026-01-30T08:32:48.186Z] Discord Bot Execution Log
[2026-01-30T08:32:48.186Z] Environment: GitHub Actions
[2026-01-30T08:32:48.186Z] Node Version: v20.20.0
[2026-01-30T08:32:48.186Z] ========================================
[2026-01-30T08:32:48.186Z] Environment Variables Check:
[2026-01-30T08:32:48.186Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T08:32:48.187Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T08:32:48.187Z] 
Multi-Channel Configuration:
[2026-01-30T08:32:48.187Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.187Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T08:32:48.188Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T08:32:48.188Z] 
Data Files Check:
[2026-01-30T08:32:48.189Z] .github/data/new_jobs.json: ✅ Exists (10 items, 191575 bytes)
[2026-01-30T08:32:48.203Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2190394 bytes)
[2026-01-30T08:32:48.203Z] 
========================================
[2026-01-30T08:32:48.203Z] Starting Enhanced Discord Bot...
[2026-01-30T08:32:48.203Z] ========================================
[2026-01-30T08:32:48.730Z] [BOT] ✅ Loaded V2 database: 329 jobs
[2026-01-30T08:32:49.254Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T08:32:49.255Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T08:32:49.255Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T08:32:49.372Z] [BOT] ✅ Loaded pending queue: 2923 total (2573 pending, 50 enriched, 300 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T08:32:49.372Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T08:32:49.377Z] [BOT] 📬 Found 47 new jobs (3 already posted)...
[2026-01-30T08:32:49.377Z] [BOT] 🚫 Skipping blacklisted job: Senior Account Executive at duolingo
[2026-01-30T08:32:49.377Z] [BOT] 🚫 Skipping blacklisted job: Senior AI Engineering Manager at duolingo
[2026-01-30T08:32:49.377Z] [BOT] 🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior Community Manager at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Senior iOS Engineer, Application Stability & Performance at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Ads at duolingo
[2026-01-30T08:32:49.378Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Learning at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
🚫 Skipping blacklisted job: Senior Product Manager, Math at duolingo
[2026-01-30T08:32:49.378Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager, Monetization at duolingo
🚫 Skipping blacklisted job: Senior Site Reliability Engineer at duolingo
🚫 Skipping blacklisted job: Staff Android Engineer, Client Architecture at duolingo
🚫 Skipping blacklisted job: Staff Data Scientist, Financial Forecasting at duolingo
🚫 Skipping blacklisted job: Staff iOS Engineer, App Builds at duolingo
🚫 Skipping blacklisted job: Staff Product Designer at duolingo
[2026-01-30T08:32:49.378Z] [BOT] 🚫 Skipping blacklisted job: Manager Consumer Business Development, TV Partnerships at spotify
🚫 Skipping blacklisted job: Senior Sales Engineer - Majors Northeast at datadog
[2026-01-30T08:32:49.378Z] [BOT] 🚫 Skipping blacklisted job: Senior Sales Engineer at datadog
[2026-01-30T08:32:49.489Z] [BOT] ✅ Loaded pending queue: 2923 total (2573 pending, 50 enriched, 300 posted)
[2026-01-30T08:32:49.688Z] [BOT] ✅ Saved pending queue: 2904 total (2573 pending, 31 enriched, 300 posted)
🗑️ Removed 19 blacklisted jobs from pending queue
📋 After blacklist filter: 28 jobs (19 blacklisted)
[2026-01-30T08:32:49.688Z] [BOT] 📋 After data quality filter: 28 jobs (0 invalid)
[2026-01-30T08:32:49.689Z] [BOT] 📋 After multi-location grouping: 28 unique jobs to post
⏸️ Limiting to 10 jobs this run, 37 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T08:32:49.693Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T08:32:49.694Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Retail & Commercial Banking" @ anthropic
[2026-01-30T08:32:49.694Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:32:49.719Z] [BOT ERROR] (node:2564) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T08:32:49.856Z] [BOT] ✅ Posted message: Strategic Account Executive, Retail & Commercial Banking @ anthropic in #💻・tech-jobs
[2026-01-30T08:32:49.856Z] [BOT] ✅ Industry: Strategic Account Executive, Retail & Commercial Banking @ anthropic
[2026-01-30T08:32:49.857Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Retail & Commercial Banking @ anthropic → category channel (1 total channels)
[2026-01-30T08:32:49.857Z] [BOT] 💾 BEFORE MERGE: 330 jobs in memory (cached)
[2026-01-30T08:32:49.864Z] [BOT] ✅ Loaded V2 database: 329 jobs
💾 DISK STATE: 329 jobs on disk
[2026-01-30T08:32:49.864Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=330
[2026-01-30T08:32:49.865Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:32:49.866Z] [BOT] 💾 AFTER MERGE: 330 jobs (merged disk + memory)
[2026-01-30T08:32:49.866Z] [BOT] ✅ No jobs to archive (all 330 jobs within 7-day window)
[2026-01-30T08:32:49.891Z] [BOT] 💾 Saved posted_jobs.json: 330 active jobs
[2026-01-30T08:32:49.891Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T08:32:51.393Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Startups" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:32:51.606Z] [BOT] ✅ Posted message: Strategic Account Executive, Startups @ anthropic in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive, Startups @ anthropic
[2026-01-30T08:32:51.606Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Startups @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 331 jobs in memory (cached)
[2026-01-30T08:32:51.615Z] [BOT] ✅ Loaded V2 database: 330 jobs
[2026-01-30T08:32:51.615Z] [BOT] 💾 DISK STATE: 330 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=331
[2026-01-30T08:32:51.616Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:32:51.616Z] [BOT] 💾 AFTER MERGE: 331 jobs (merged disk + memory)
[2026-01-30T08:32:51.616Z] [BOT] ✅ No jobs to archive (all 331 jobs within 7-day window)
[2026-01-30T08:32:51.640Z] [BOT] 💾 Saved posted_jobs.json: 331 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:32:53.141Z] [BOT] 📍 [ROUTING] "Support Operations Specialist, Learning & Education" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:32:53.269Z] [BOT] ✅ Posted message: Support Operations Specialist, Learning & Education @ anthropic in #💻・tech-jobs
[2026-01-30T08:32:53.269Z] [BOT] ✅ Industry: Support Operations Specialist, Learning & Education @ anthropic
[2026-01-30T08:32:53.269Z] [BOT] 💾 Added channel posting: Support Operations Specialist, Learning & Education @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 332 jobs in memory (cached)
[2026-01-30T08:32:53.277Z] [BOT] ✅ Loaded V2 database: 331 jobs
💾 DISK STATE: 331 jobs on disk
[2026-01-30T08:32:53.277Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=332
[2026-01-30T08:32:53.278Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:32:53.278Z] [BOT] 💾 AFTER MERGE: 332 jobs (merged disk + memory)
[2026-01-30T08:32:53.278Z] [BOT] ✅ No jobs to archive (all 332 jobs within 7-day window)
[2026-01-30T08:32:53.300Z] [BOT] 💾 Saved posted_jobs.json: 332 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:32:57.802Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-01-30T08:32:57.803Z] [BOT] 📍 [ROUTING] "Support Operations Analyst" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T08:32:57.976Z] [BOT] ✅ Posted message: Support Operations Analyst @ anthropic in #💰・finance-jobs
  ✅ Industry: Support Operations Analyst @ anthropic
[2026-01-30T08:32:57.976Z] [BOT] 💾 Added channel posting: Support Operations Analyst @ anthropic → category channel (1 total channels)
[2026-01-30T08:32:57.976Z] [BOT] 💾 BEFORE MERGE: 333 jobs in memory (cached)
[2026-01-30T08:32:57.987Z] [BOT] ✅ Loaded V2 database: 332 jobs
💾 DISK STATE: 332 jobs on disk
[2026-01-30T08:32:57.987Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=333
[2026-01-30T08:32:57.988Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:32:57.988Z] [BOT] 💾 AFTER MERGE: 333 jobs (merged disk + memory)
[2026-01-30T08:32:57.989Z] [BOT] ✅ No jobs to archive (all 333 jobs within 7-day window)
[2026-01-30T08:32:58.014Z] [BOT] 💾 Saved posted_jobs.json: 333 active jobs
[2026-01-30T08:32:58.014Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T08:32:59.516Z] [BOT] 📍 [ROUTING] "Support Operations Specialist, Content & Knowledge Management" @ anthropic
[2026-01-30T08:32:59.516Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T08:32:59.633Z] [BOT] ✅ Posted message: Support Operations Specialist, Content & Knowledge Management @ anthropic in #💰・finance-jobs
[2026-01-30T08:32:59.633Z] [BOT] ✅ Industry: Support Operations Specialist, Content & Knowledge Management @ anthropic
[2026-01-30T08:32:59.633Z] [BOT] 💾 Added channel posting: Support Operations Specialist, Content & Knowledge Management @ anthropic → category channel (1 total channels)
[2026-01-30T08:32:59.633Z] [BOT] 💾 BEFORE MERGE: 334 jobs in memory (cached)
[2026-01-30T08:32:59.640Z] [BOT] ✅ Loaded V2 database: 333 jobs
[2026-01-30T08:32:59.640Z] [BOT] 💾 DISK STATE: 333 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=334
[2026-01-30T08:32:59.641Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:32:59.641Z] [BOT] 💾 AFTER MERGE: 334 jobs (merged disk + memory)
[2026-01-30T08:32:59.642Z] [BOT] ✅ No jobs to archive (all 334 jobs within 7-day window)
[2026-01-30T08:32:59.669Z] [BOT] 💾 Saved posted_jobs.json: 334 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:33:01.171Z] [BOT] 📍 [ROUTING] "Technical Accounting" @ anthropic
[2026-01-30T08:33:01.172Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T08:33:01.306Z] [BOT] ✅ Posted message: Technical Accounting @ anthropic in #💰・finance-jobs
  ✅ Industry: Technical Accounting @ anthropic
[2026-01-30T08:33:01.306Z] [BOT] 💾 Added channel posting: Technical Accounting @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 335 jobs in memory (cached)
[2026-01-30T08:33:01.313Z] [BOT] ✅ Loaded V2 database: 334 jobs
[2026-01-30T08:33:01.314Z] [BOT] 💾 DISK STATE: 334 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=335
[2026-01-30T08:33:01.315Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:33:01.315Z] [BOT] 💾 AFTER MERGE: 335 jobs (merged disk + memory)
[2026-01-30T08:33:01.315Z] [BOT] ✅ No jobs to archive (all 335 jobs within 7-day window)
[2026-01-30T08:33:01.338Z] [BOT] 💾 Saved posted_jobs.json: 335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:33:05.839Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T08:33:05.840Z] [BOT] 📍 [ROUTING] "Technical CBRN-E  Threat Investigator " @ anthropic
[2026-01-30T08:33:05.840Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T08:33:06.233Z] [BOT] ✅ Posted message: Technical CBRN-E  Threat Investigator  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Technical CBRN-E  Threat Investigator  @ anthropic
[2026-01-30T08:33:06.234Z] [BOT] 💾 Added channel posting: Technical CBRN-E  Threat Investigator  @ anthropic → category channel (1 total channels)
[2026-01-30T08:33:06.234Z] [BOT] 💾 BEFORE MERGE: 336 jobs in memory (cached)
[2026-01-30T08:33:06.241Z] [BOT] ✅ Loaded V2 database: 335 jobs
💾 DISK STATE: 335 jobs on disk
[2026-01-30T08:33:06.242Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=336
[2026-01-30T08:33:06.243Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 336 jobs (merged disk + memory)
[2026-01-30T08:33:06.243Z] [BOT] ✅ No jobs to archive (all 336 jobs within 7-day window)
[2026-01-30T08:33:06.268Z] [BOT] 💾 Saved posted_jobs.json: 336 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:33:07.769Z] [BOT] 📍 [ROUTING] "Technical Cyber Threat Investigator " @ anthropic
[2026-01-30T08:33:07.769Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T08:33:07.939Z] [BOT] ✅ Posted message: Technical Cyber Threat Investigator  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Technical Cyber Threat Investigator  @ anthropic
[2026-01-30T08:33:07.939Z] [BOT] 💾 Added channel posting: Technical Cyber Threat Investigator  @ anthropic → category channel (1 total channels)
[2026-01-30T08:33:07.939Z] [BOT] 💾 BEFORE MERGE: 337 jobs in memory (cached)
[2026-01-30T08:33:07.945Z] [BOT] ✅ Loaded V2 database: 336 jobs
💾 DISK STATE: 336 jobs on disk
[2026-01-30T08:33:07.946Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=337
[2026-01-30T08:33:07.946Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:33:07.946Z] [BOT] 💾 AFTER MERGE: 337 jobs (merged disk + memory)
[2026-01-30T08:33:07.947Z] [BOT] ✅ No jobs to archive (all 337 jobs within 7-day window)
[2026-01-30T08:33:07.968Z] [BOT] 💾 Saved posted_jobs.json: 337 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:33:09.469Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Specialized" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T08:33:09.595Z] [BOT] ✅ Posted message: Technical Recruiter, Specialized @ anthropic in #🤖・ai-jobs
  ✅ Industry: Technical Recruiter, Specialized @ anthropic
[2026-01-30T08:33:09.595Z] [BOT] 💾 Added channel posting: Technical Recruiter, Specialized @ anthropic → category channel (1 total channels)
[2026-01-30T08:33:09.595Z] [BOT] 💾 BEFORE MERGE: 338 jobs in memory (cached)
[2026-01-30T08:33:09.603Z] [BOT] ✅ Loaded V2 database: 337 jobs
[2026-01-30T08:33:09.603Z] [BOT] 💾 DISK STATE: 337 jobs on disk
[2026-01-30T08:33:09.603Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=338
[2026-01-30T08:33:09.604Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 338 jobs (merged disk + memory)
[2026-01-30T08:33:09.604Z] [BOT] ✅ No jobs to archive (all 338 jobs within 7-day window)
[2026-01-30T08:33:09.628Z] [BOT] 💾 Saved posted_jobs.json: 338 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:33:11.130Z] [BOT] 📍 [ROUTING] "Technical Scaled Abuse Threat Investigator" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T08:33:11.130Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-30T08:33:11.332Z] [BOT] ✅ Posted message: Technical Scaled Abuse Threat Investigator @ anthropic in #🤖・ai-jobs
  ✅ Industry: Technical Scaled Abuse Threat Investigator @ anthropic
[2026-01-30T08:33:11.332Z] [BOT] 💾 Added channel posting: Technical Scaled Abuse Threat Investigator @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 339 jobs in memory (cached)
[2026-01-30T08:33:11.339Z] [BOT] ✅ Loaded V2 database: 338 jobs
💾 DISK STATE: 338 jobs on disk
[2026-01-30T08:33:11.339Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=339
[2026-01-30T08:33:11.340Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 339 jobs (merged disk + memory)
[2026-01-30T08:33:11.341Z] [BOT] ✅ No jobs to archive (all 339 jobs within 7-day window)
[2026-01-30T08:33:11.361Z] [BOT] 💾 Saved posted_jobs.json: 339 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:33:15.863Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T08:33:15.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "958016b35ec161e5"
⏭️  Skipping duplicate: JID_53e922ae (posted within 7 days)
[2026-01-30T08:33:15.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "e16d0f6aeb3a798b"
⏭️  Skipping duplicate: JID_efbb0ec7 (posted within 7 days)
[2026-01-30T08:33:15.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "b98b615e9aa0b1fe"
⏭️  Skipping duplicate: JID_557288c8 (posted within 7 days)
[2026-01-30T08:33:15.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8d277e652b817236"
[2026-01-30T08:33:15.864Z] [BOT] ⏭️  Skipping duplicate: JID_8236f91c (posted within 7 days)
[2026-01-30T08:33:15.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "28758fd7f6bd1a4c"
⏭️  Skipping duplicate: JID_becd8390 (posted within 7 days)
[2026-01-30T08:33:15.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "076392afab92b394"
[2026-01-30T08:33:15.864Z] [BOT] ⏭️  Skipping duplicate: JID_b09edb4f (posted within 7 days)
[2026-01-30T08:33:15.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "cff210616fe1e9fa"
⏭️  Skipping duplicate: JID_4d6b4f74 (posted within 7 days)
[2026-01-30T08:33:15.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "bb43e49575ff4809"
⏭️  Skipping duplicate: JID_55616ea4 (posted within 7 days)
[2026-01-30T08:33:15.865Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "284a526a847da489"
⏭️  Skipping duplicate: JID_9b25512e (posted within 7 days)
[2026-01-30T08:33:15.865Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "a3eae847feb5057f"
⏭️  Skipping duplicate: JID_5f76228e (posted within 7 days)
[2026-01-30T08:33:15.970Z] [BOT] ✅ Loaded pending queue: 2904 total (2573 pending, 31 enriched, 300 posted)
[2026-01-30T08:33:16.157Z] [BOT] ✅ Saved pending queue: 2904 total (2573 pending, 21 enriched, 310 posted)
[2026-01-30T08:33:16.157Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T08:33:16.238Z] [BOT] 📂 Loaded 10391 existing routing entries
[2026-01-30T08:33:16.356Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T08:33:16.356Z] [BOT] Total entries: 10401
   Timestamp: 2026-01-30T08:33:16.313Z
[2026-01-30T08:33:16.357Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T08:33:16.357Z] [BOT] Total attempts: 32
   Successful: 10
   Failed: 0
   Skipped: 22
[2026-01-30T08:33:16.357Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T08:33:16.357Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 4 posts
[2026-01-30T08:33:16.357Z] [BOT] 2. #💻・tech-jobs: 3 posts
     3. #💰・finance-jobs: 3 posts
[2026-01-30T08:33:16.357Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T08:33:16.358Z] [BOT] 💾 BEFORE MERGE: 339 jobs in memory (cached)
[2026-01-30T08:33:16.365Z] [BOT] ✅ Loaded V2 database: 339 jobs
[2026-01-30T08:33:16.365Z] [BOT] 💾 DISK STATE: 339 jobs on disk
[2026-01-30T08:33:16.365Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=339
[2026-01-30T08:33:16.366Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:33:16.366Z] [BOT] 💾 AFTER MERGE: 339 jobs (merged disk + memory)
[2026-01-30T08:33:16.367Z] [BOT] ✅ No jobs to archive (all 339 jobs within 7-day window)
[2026-01-30T08:33:16.389Z] [BOT] 💾 Saved posted_jobs.json: 339 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:33:16.389Z] [BOT] ✅ Database saved successfully
[2026-01-30T08:33:18.419Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2564) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*