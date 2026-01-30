# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T16:18:41.599Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T16:18:04.709Z] ========================================
[2026-01-30T16:18:04.711Z] Discord Bot Execution Log
[2026-01-30T16:18:04.711Z] Environment: GitHub Actions
[2026-01-30T16:18:04.711Z] Node Version: v20.20.0
[2026-01-30T16:18:04.711Z] ========================================
[2026-01-30T16:18:04.711Z] Environment Variables Check:
[2026-01-30T16:18:04.711Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T16:18:04.711Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.711Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T16:18:04.712Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T16:18:04.712Z] 
Multi-Channel Configuration:
[2026-01-30T16:18:04.712Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.712Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.712Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.712Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.712Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.712Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.712Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.712Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.712Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T16:18:04.712Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T16:18:04.713Z] 
Data Files Check:
[2026-01-30T16:18:04.713Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T16:18:04.731Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3395356 bytes)
[2026-01-30T16:18:04.731Z] 
========================================
[2026-01-30T16:18:04.731Z] Starting Enhanced Discord Bot...
[2026-01-30T16:18:04.731Z] ========================================
[2026-01-30T16:18:05.270Z] [BOT] ✅ Loaded V2 database: 527 jobs
[2026-01-30T16:18:05.935Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T16:18:05.935Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T16:18:05.935Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T16:18:06.059Z] [BOT] ✅ Loaded pending queue: 2920 total (2372 pending, 50 enriched, 498 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T16:18:06.059Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T16:18:06.059Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T16:18:06.059Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T16:18:06.060Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T16:18:06.060Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T16:18:06.061Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T16:18:06.061Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T16:18:06.066Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T16:18:06.066Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech) at reddit
[2026-01-30T16:18:06.067Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
🚫 Skipping blacklisted job: Senior Manager, Large Customer Sales (Pharma) at reddit
🚫 Skipping blacklisted job: Senior Growth Marketing Manager, Builders at airtable
🚫 Skipping blacklisted job: Communications Manager at verkada
🚫 Skipping blacklisted job: National Channel Sales Manager, Convergint (East) at verkada
[2026-01-30T16:18:06.172Z] [BOT] ✅ Loaded pending queue: 2920 total (2372 pending, 50 enriched, 498 posted)
[2026-01-30T16:18:06.363Z] [BOT] ✅ Saved pending queue: 2914 total (2372 pending, 44 enriched, 498 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-30T16:18:06.363Z] [BOT] 📋 After blacklist filter: 30 jobs (6 blacklisted)
[2026-01-30T16:18:06.364Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-30T16:18:06.364Z] [BOT] 📋 After multi-location grouping: 29 unique jobs to post
[2026-01-30T16:18:06.364Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T16:18:06.368Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-30T16:18:06.369Z] [BOT] 📍 [ROUTING] "Sales Development Representative - Summer 2026 Graduates (Spanish Speaking)" @ datadog
[2026-01-30T16:18:06.369Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:18:06.386Z] [BOT ERROR] (node:2887) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T16:18:06.777Z] [BOT] ✅ Posted message: Sales Development Representative - Summer 2026 Graduates (Spanish Speaking) @ datadog in #💻・tech-jobs
[2026-01-30T16:18:06.777Z] [BOT] ✅ Industry: Sales Development Representative - Summer 2026 Graduates (Spanish Speaking) @ datadog
[2026-01-30T16:18:06.778Z] [BOT] 💾 Added channel posting: Sales Development Representative - Summer 2026 Graduates (Spanish Speaking) @ datadog → category channel (1 total channels)
[2026-01-30T16:18:06.778Z] [BOT] 💾 BEFORE MERGE: 528 jobs in memory (cached)
[2026-01-30T16:18:06.790Z] [BOT] ✅ Loaded V2 database: 527 jobs
💾 DISK STATE: 527 jobs on disk
[2026-01-30T16:18:06.791Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=528
[2026-01-30T16:18:06.792Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:18:06.792Z] [BOT] 💾 AFTER MERGE: 528 jobs (merged disk + memory)
[2026-01-30T16:18:06.793Z] [BOT] ✅ No jobs to archive (all 528 jobs within 7-day window)
[2026-01-30T16:18:06.828Z] [BOT] 💾 Saved posted_jobs.json: 528 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:08.331Z] [BOT] 📍 [ROUTING] "Sales Engineer (Customer Success - Spanish Speaking)" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:18:08.547Z] [BOT] ✅ Posted message: Sales Engineer (Customer Success - Spanish Speaking) @ datadog in #💻・tech-jobs
  ✅ Industry: Sales Engineer (Customer Success - Spanish Speaking) @ datadog
[2026-01-30T16:18:08.547Z] [BOT] 💾 Added channel posting: Sales Engineer (Customer Success - Spanish Speaking) @ datadog → category channel (1 total channels)
[2026-01-30T16:18:08.547Z] [BOT] 💾 BEFORE MERGE: 529 jobs in memory (cached)
[2026-01-30T16:18:08.561Z] [BOT] ✅ Loaded V2 database: 528 jobs
[2026-01-30T16:18:08.561Z] [BOT] 💾 DISK STATE: 528 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=529
[2026-01-30T16:18:08.562Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:18:08.562Z] [BOT] 💾 AFTER MERGE: 529 jobs (merged disk + memory)
[2026-01-30T16:18:08.563Z] [BOT] ✅ No jobs to archive (all 529 jobs within 7-day window)
[2026-01-30T16:18:08.596Z] [BOT] 💾 Saved posted_jobs.json: 529 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:10.498Z] [BOT] ✅ Posted message: Sales Engineer (Customer Success - Spanish Speaking) @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T16:18:10.498Z] [BOT] 💾 Added channel posting: Sales Engineer (Customer Success - Spanish Speaking) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 529 jobs in memory (cached)
[2026-01-30T16:18:10.510Z] [BOT] ✅ Loaded V2 database: 529 jobs
💾 DISK STATE: 529 jobs on disk
[2026-01-30T16:18:10.511Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=529
[2026-01-30T16:18:10.512Z] [BOT] 🔀 Deep merged: Sales Engineer (Customer Success - Spanish Speaking) @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T16:18:10.512Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 529 jobs (merged disk + memory)
[2026-01-30T16:18:10.512Z] [BOT] ✅ No jobs to archive (all 529 jobs within 7-day window)
[2026-01-30T16:18:10.546Z] [BOT] 💾 Saved posted_jobs.json: 529 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:12.048Z] [BOT] 📍 [ROUTING] "Technical Content Writer" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:18:12.531Z] [BOT] ✅ Posted message: Technical Content Writer @ datadog in #💻・tech-jobs
  ✅ Industry: Technical Content Writer @ datadog
[2026-01-30T16:18:12.531Z] [BOT] 💾 Added channel posting: Technical Content Writer @ datadog → category channel (1 total channels)
[2026-01-30T16:18:12.532Z] [BOT] 💾 BEFORE MERGE: 530 jobs in memory (cached)
[2026-01-30T16:18:12.542Z] [BOT] ✅ Loaded V2 database: 529 jobs
💾 DISK STATE: 529 jobs on disk
[2026-01-30T16:18:12.542Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=530
[2026-01-30T16:18:12.543Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:18:12.543Z] [BOT] 💾 AFTER MERGE: 530 jobs (merged disk + memory)
[2026-01-30T16:18:12.544Z] [BOT] ✅ No jobs to archive (all 530 jobs within 7-day window)
[2026-01-30T16:18:12.578Z] [BOT] 💾 Saved posted_jobs.json: 530 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:14.300Z] [BOT] ✅ Posted message: Technical Content Writer @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T16:18:14.300Z] [BOT] 💾 Added channel posting: Technical Content Writer @ datadog → location channel (2 total channels)
[2026-01-30T16:18:14.301Z] [BOT] 💾 BEFORE MERGE: 530 jobs in memory (cached)
[2026-01-30T16:18:14.318Z] [BOT] ✅ Loaded V2 database: 530 jobs
💾 DISK STATE: 530 jobs on disk
[2026-01-30T16:18:14.318Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=530
[2026-01-30T16:18:14.320Z] [BOT] 🔀 Deep merged: Technical Content Writer @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T16:18:14.320Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 530 jobs (merged disk + memory)
[2026-01-30T16:18:14.320Z] [BOT] ✅ No jobs to archive (all 530 jobs within 7-day window)
[2026-01-30T16:18:14.356Z] [BOT] 💾 Saved posted_jobs.json: 530 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:15.858Z] [BOT] 📍 [ROUTING] "Technical Escalations Engineer 3 (Internal Developer Portal) - US-East" @ datadog
   Category: TECH (matched: "software")
[2026-01-30T16:18:15.858Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:18:16.096Z] [BOT] ✅ Posted message: Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog in #💻・tech-jobs
[2026-01-30T16:18:16.097Z] [BOT] ✅ Industry: Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog
[2026-01-30T16:18:16.097Z] [BOT] 💾 Added channel posting: Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog → category channel (1 total channels)
[2026-01-30T16:18:16.097Z] [BOT] 💾 BEFORE MERGE: 531 jobs in memory (cached)
[2026-01-30T16:18:16.108Z] [BOT] ✅ Loaded V2 database: 530 jobs
💾 DISK STATE: 530 jobs on disk
[2026-01-30T16:18:16.108Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=531
[2026-01-30T16:18:16.110Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 531 jobs (merged disk + memory)
[2026-01-30T16:18:16.110Z] [BOT] ✅ No jobs to archive (all 531 jobs within 7-day window)
[2026-01-30T16:18:16.147Z] [BOT] 💾 Saved posted_jobs.json: 531 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:17.900Z] [BOT] ✅ Posted message: Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T16:18:17.901Z] [BOT] 💾 Added channel posting: Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 531 jobs in memory (cached)
[2026-01-30T16:18:17.916Z] [BOT] ✅ Loaded V2 database: 531 jobs
💾 DISK STATE: 531 jobs on disk
[2026-01-30T16:18:17.916Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=531
[2026-01-30T16:18:17.917Z] [BOT] 🔀 Deep merged: Technical Escalations Engineer 3 (Internal Developer Portal) - US-East @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T16:18:17.917Z] [BOT] 💾 AFTER MERGE: 531 jobs (merged disk + memory)
[2026-01-30T16:18:17.918Z] [BOT] ✅ No jobs to archive (all 531 jobs within 7-day window)
[2026-01-30T16:18:17.951Z] [BOT] 💾 Saved posted_jobs.json: 531 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:19.454Z] [BOT] 📍 [ROUTING] "Technical Support Engineer 2, Premier - Denver" @ datadog
[2026-01-30T16:18:19.454Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:18:19.637Z] [BOT] ✅ Posted message: Technical Support Engineer 2, Premier - Denver @ datadog in #💻・tech-jobs
[2026-01-30T16:18:19.638Z] [BOT] ✅ Industry: Technical Support Engineer 2, Premier - Denver @ datadog
[2026-01-30T16:18:19.638Z] [BOT] 💾 Added channel posting: Technical Support Engineer 2, Premier - Denver @ datadog → category channel (1 total channels)
[2026-01-30T16:18:19.638Z] [BOT] 💾 BEFORE MERGE: 532 jobs in memory (cached)
[2026-01-30T16:18:19.648Z] [BOT] ✅ Loaded V2 database: 531 jobs
💾 DISK STATE: 531 jobs on disk
[2026-01-30T16:18:19.648Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=532
[2026-01-30T16:18:19.650Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:18:19.650Z] [BOT] 💾 AFTER MERGE: 532 jobs (merged disk + memory)
[2026-01-30T16:18:19.650Z] [BOT] ✅ No jobs to archive (all 532 jobs within 7-day window)
[2026-01-30T16:18:19.683Z] [BOT] 💾 Saved posted_jobs.json: 532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:21.186Z] [BOT] 📍 [ROUTING] "Entry Level Developer - Contract" @ ORG_97f70c9d
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:18:21.494Z] [BOT] ✅ Posted message: Entry Level Developer - Contract @ ORG_97f70c9d in #💻・tech-jobs
[2026-01-30T16:18:21.494Z] [BOT] ✅ Industry: Entry Level Developer - Contract @ ORG_97f70c9d
[2026-01-30T16:18:21.495Z] [BOT] 💾 Added channel posting: Entry Level Developer - Contract @ ORG_97f70c9d → category channel (1 total channels)
[2026-01-30T16:18:21.495Z] [BOT] 💾 BEFORE MERGE: 533 jobs in memory (cached)
[2026-01-30T16:18:21.507Z] [BOT] ✅ Loaded V2 database: 532 jobs
💾 DISK STATE: 532 jobs on disk
[2026-01-30T16:18:21.507Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=533
[2026-01-30T16:18:21.508Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:18:21.508Z] [BOT] 💾 AFTER MERGE: 533 jobs (merged disk + memory)
[2026-01-30T16:18:21.509Z] [BOT] ✅ No jobs to archive (all 533 jobs within 7-day window)
[2026-01-30T16:18:21.542Z] [BOT] 💾 Saved posted_jobs.json: 533 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:23.271Z] [BOT] ✅ Posted message: Entry Level Developer - Contract @ ORG_97f70c9d in #🏠・JID_ead674af
[2026-01-30T16:18:23.271Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T16:18:23.271Z] [BOT] 💾 Added channel posting: Entry Level Developer - Contract @ ORG_97f70c9d → location channel (2 total channels)
💾 BEFORE MERGE: 533 jobs in memory (cached)
[2026-01-30T16:18:23.281Z] [BOT] ✅ Loaded V2 database: 533 jobs
💾 DISK STATE: 533 jobs on disk
[2026-01-30T16:18:23.281Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=533
[2026-01-30T16:18:23.283Z] [BOT] 🔀 Deep merged: Entry Level Developer - Contract @ ORG_97f70c9d (disk: 1 channels → merged: 2 channels)
[2026-01-30T16:18:23.283Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 533 jobs (merged disk + memory)
[2026-01-30T16:18:23.283Z] [BOT] ✅ No jobs to archive (all 533 jobs within 7-day window)
[2026-01-30T16:18:23.315Z] [BOT] 💾 Saved posted_jobs.json: 533 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:24.817Z] [BOT] 📍 [ROUTING] "Research Professional" @ ORG_9d38443e of Chicago
[2026-01-30T16:18:24.817Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:18:25.042Z] [BOT] ✅ Posted message: Research Professional @ ORG_9d38443e of Chicago in #💻・tech-jobs
[2026-01-30T16:18:25.042Z] [BOT] ✅ Industry: Research Professional @ ORG_9d38443e of Chicago
[2026-01-30T16:18:25.042Z] [BOT] 💾 Added channel posting: Research Professional @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-30T16:18:25.042Z] [BOT] 💾 BEFORE MERGE: 534 jobs in memory (cached)
[2026-01-30T16:18:25.054Z] [BOT] ✅ Loaded V2 database: 533 jobs
💾 DISK STATE: 533 jobs on disk
[2026-01-30T16:18:25.054Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=534
[2026-01-30T16:18:25.055Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:18:25.055Z] [BOT] 💾 AFTER MERGE: 534 jobs (merged disk + memory)
[2026-01-30T16:18:25.055Z] [BOT] ✅ No jobs to archive (all 534 jobs within 7-day window)
[2026-01-30T16:18:25.087Z] [BOT] 💾 Saved posted_jobs.json: 534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:29.590Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T16:18:29.591Z] [BOT] 📍 [ROUTING] "Master's University Grad Machine Learning Engineer 2026 - USA" @ ORG_78dfd4d7
   Category: AI (matched: "machine learning")
[2026-01-30T16:18:29.591Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T16:18:29.937Z] [BOT] ✅ Posted message: Master's University Grad Machine Learning Engineer 2026 - USA @ ORG_78dfd4d7 in #🤖・ai-jobs
  ✅ Industry: Master's University Grad Machine Learning Engineer 2026 - USA @ ORG_78dfd4d7
[2026-01-30T16:18:29.937Z] [BOT] 💾 Added channel posting: Master's University Grad Machine Learning Engineer 2026 - USA @ ORG_78dfd4d7 → category channel (1 total channels)
[2026-01-30T16:18:29.937Z] [BOT] 💾 BEFORE MERGE: 535 jobs in memory (cached)
[2026-01-30T16:18:29.950Z] [BOT] ✅ Loaded V2 database: 534 jobs
💾 DISK STATE: 534 jobs on disk
[2026-01-30T16:18:29.950Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=535
[2026-01-30T16:18:29.951Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:18:29.951Z] [BOT] 💾 AFTER MERGE: 535 jobs (merged disk + memory)
[2026-01-30T16:18:29.952Z] [BOT] ✅ No jobs to archive (all 535 jobs within 7-day window)
[2026-01-30T16:18:29.984Z] [BOT] 💾 Saved posted_jobs.json: 535 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:31.486Z] [BOT] 📍 [ROUTING] "Data Engineer 1 - Databricks - Aws" @ ORG_b344d80e Travelers Companies
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T16:18:31.486Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T16:18:31.695Z] [BOT] ✅ Posted message: Data Engineer 1 - Databricks - Aws @ ORG_b344d80e Travelers Companies in #🤖・ai-jobs
  ✅ Industry: Data Engineer 1 - Databricks - Aws @ ORG_b344d80e Travelers Companies
[2026-01-30T16:18:31.695Z] [BOT] 💾 Added channel posting: Data Engineer 1 - Databricks - Aws @ ORG_b344d80e Travelers Companies → category channel (1 total channels)
💾 BEFORE MERGE: 536 jobs in memory (cached)
[2026-01-30T16:18:31.707Z] [BOT] ✅ Loaded V2 database: 535 jobs
💾 DISK STATE: 535 jobs on disk
[2026-01-30T16:18:31.708Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=536
[2026-01-30T16:18:31.709Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:18:31.709Z] [BOT] 💾 AFTER MERGE: 536 jobs (merged disk + memory)
[2026-01-30T16:18:31.709Z] [BOT] ✅ No jobs to archive (all 536 jobs within 7-day window)
[2026-01-30T16:18:31.748Z] [BOT] 💾 Saved posted_jobs.json: 536 active jobs
[2026-01-30T16:18:31.752Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:33.250Z] [BOT] 📍 [ROUTING] "Software Engineer - AI & Full Stack Development" @ ORG_fb8c4aa0
[2026-01-30T16:18:33.250Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T16:18:33.453Z] [BOT] ✅ Posted message: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0 in #🤖・ai-jobs
[2026-01-30T16:18:33.453Z] [BOT] ✅ Industry: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0
[2026-01-30T16:18:33.454Z] [BOT] 💾 Added channel posting: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0 → category channel (1 total channels)
💾 BEFORE MERGE: 537 jobs in memory (cached)
[2026-01-30T16:18:33.464Z] [BOT] ✅ Loaded V2 database: 536 jobs
💾 DISK STATE: 536 jobs on disk
[2026-01-30T16:18:33.465Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=537
[2026-01-30T16:18:33.466Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 537 jobs (merged disk + memory)
[2026-01-30T16:18:33.467Z] [BOT] ✅ No jobs to archive (all 537 jobs within 7-day window)
[2026-01-30T16:18:33.500Z] [BOT] 💾 Saved posted_jobs.json: 537 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:38.002Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T16:18:38.003Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ef51376c..." not found, but found as SHA256 "68023a5dc1fa2bf1"
⏭️  Skipping duplicate: JID_ef51376c (posted within 7 days)
[2026-01-30T16:18:38.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e664e933..." not found, but found as SHA256 "25c80bc0c4655f79"
⏭️  Skipping duplicate: JID_e664e933 (posted within 7 days)
[2026-01-30T16:18:38.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea2b096f..." not found, but found as SHA256 "28094dea45227c69"
⏭️  Skipping duplicate: JID_ea2b096f (posted within 7 days)
[2026-01-30T16:18:38.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_efbb1d2e..." not found, but found as SHA256 "69db6d2b0374e1eb"
[2026-01-30T16:18:38.004Z] [BOT] ⏭️  Skipping duplicate: JID_efbb1d2e (posted within 7 days)
[2026-01-30T16:18:38.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_37f7437b..." not found, but found as SHA256 "693bf1cde49fcad9"
[2026-01-30T16:18:38.004Z] [BOT] ⏭️  Skipping duplicate: JID_37f7437b (posted within 7 days)
[2026-01-30T16:18:38.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_315d8d31..." not found, but found as SHA256 "b9302d58b8d0dbc2"
⏭️  Skipping duplicate: JID_d926bd0d-contract_jr-0774 (posted within 7 days)
[2026-01-30T16:18:38.004Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d7050281..." not found, but found as SHA256 "a544560a9dd5e9fb"
⏭️  Skipping duplicate: JID_d7050281 (posted within 7 days)
[2026-01-30T16:18:38.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77f74e98..." not found, but found as SHA256 "b733181d6d03de14"
⏭️  Skipping duplicate: JID_0f62880e-_r-48789 (posted within 7 days)
[2026-01-30T16:18:38.005Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "7b1ef4eafa034420"
⏭️  Skipping duplicate: JID_32cb8765-professional_jr32503 (posted within 7 days)
[2026-01-30T16:18:38.006Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_81cb1f10..." not found, but found as SHA256 "791ddd74ae79f335"
[2026-01-30T16:18:38.006Z] [BOT] ⏭️  Skipping duplicate: JID_8e905f16-development_2531265-2 (posted within 7 days)
[2026-01-30T16:18:38.114Z] [BOT] ✅ Loaded pending queue: 2914 total (2372 pending, 44 enriched, 498 posted)
[2026-01-30T16:18:38.296Z] [BOT] ✅ Saved pending queue: 2914 total (2372 pending, 34 enriched, 508 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T16:18:38.297Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T16:18:38.382Z] [BOT] 📂 Loaded 10589 existing routing entries
[2026-01-30T16:18:38.525Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T16:18:38.525Z] [BOT] New entries: 10
   Total entries: 10599
   Timestamp: 2026-01-30T16:18:38.466Z
[2026-01-30T16:18:38.526Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 34
   Successful: 14
   Failed: 0
[2026-01-30T16:18:38.526Z] [BOT] Skipped: 20
[2026-01-30T16:18:38.526Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T16:18:38.526Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
[2026-01-30T16:18:38.526Z] [BOT] 2. #🗽・JID_98d4f0de: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-30T16:18:38.526Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 537 jobs in memory (cached)
[2026-01-30T16:18:38.537Z] [BOT] ✅ Loaded V2 database: 537 jobs
💾 DISK STATE: 537 jobs on disk
[2026-01-30T16:18:38.537Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=537
[2026-01-30T16:18:38.539Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:18:38.539Z] [BOT] 💾 AFTER MERGE: 537 jobs (merged disk + memory)
[2026-01-30T16:18:38.539Z] [BOT] ✅ No jobs to archive (all 537 jobs within 7-day window)
[2026-01-30T16:18:38.574Z] [BOT] 💾 Saved posted_jobs.json: 537 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:18:38.574Z] [BOT] ✅ Database saved successfully
[2026-01-30T16:18:40.603Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2887) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*