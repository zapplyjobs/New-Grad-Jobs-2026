# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T18:55:44.394Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T18:55:19.359Z] ========================================
[2026-01-30T18:55:19.361Z] Discord Bot Execution Log
[2026-01-30T18:55:19.361Z] Environment: GitHub Actions
[2026-01-30T18:55:19.361Z] Node Version: v20.20.0
[2026-01-30T18:55:19.361Z] ========================================
[2026-01-30T18:55:19.361Z] Environment Variables Check:
[2026-01-30T18:55:19.361Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T18:55:19.361Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.361Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T18:55:19.361Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T18:55:19.361Z] 
Multi-Channel Configuration:
[2026-01-30T18:55:19.361Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.362Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.362Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.362Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.362Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.362Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.362Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.362Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.362Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T18:55:19.362Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T18:55:19.362Z] 
Data Files Check:
[2026-01-30T18:55:19.363Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T18:55:19.388Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3942935 bytes)
[2026-01-30T18:55:19.388Z] 
========================================
[2026-01-30T18:55:19.388Z] Starting Enhanced Discord Bot...
[2026-01-30T18:55:19.388Z] ========================================
[2026-01-30T18:55:19.941Z] [BOT] ✅ Loaded V2 database: 607 jobs
[2026-01-30T18:55:20.480Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T18:55:20.481Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T18:55:20.481Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T18:55:20.602Z] [BOT] ✅ Loaded pending queue: 2927 total (2299 pending, 50 enriched, 578 posted)
[2026-01-30T18:55:20.602Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T18:55:20.603Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T18:55:20.603Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T18:55:20.603Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T18:55:20.604Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T18:55:20.604Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T18:55:20.604Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T18:55:20.604Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T18:55:20.604Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T18:55:20.604Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T18:55:20.605Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-30T18:55:20.605Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T18:55:20.605Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T18:55:20.605Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T18:55:20.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T18:55:20.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T18:55:20.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-30T18:55:20.606Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T18:55:20.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T18:55:20.611Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T18:55:20.611Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-30T18:55:20.612Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-30T18:55:20.612Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-30T18:55:20.612Z] [BOT] (30 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Account Executive, Commercial @ samsara: seattle, san diego, salt lake, los angeles, denver, boston, phoenix, arizona, portland
   - Core Enterprise Account Executive EST/CST - Remote - Dallas, TX @ samsara: dallas, houston, texas
[2026-01-30T18:55:20.613Z] [BOT] - Mid-Market Account Executive - PubSec @ samsara: charleston, salt lake, denver, baltimore, chicago, houston, texas, dallas, san antonio, louisville
   - Select Major Account Executive EST/CST @ samsara: chicago, milwaukee, atlanta, austin, charlotte, columbia, dallas, hartford, houston, texas, jacksonville, miami, nashville, orlando
⏸️ Limiting to 10 jobs this run, 30 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T18:55:20.616Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-30T18:55:20.617Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
[2026-01-30T18:55:20.617Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:55:20.635Z] [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T18:55:20.987Z] [BOT] ✅ Posted message: Account Executive, Commercial @ samsara in #💻・tech-jobs
  ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-30T18:55:20.988Z] [BOT] 💾 Added channel posting: Account Executive, Commercial @ samsara → category channel (1 total channels)
[2026-01-30T18:55:20.988Z] [BOT] 💾 BEFORE MERGE: 608 jobs in memory (cached)
[2026-01-30T18:55:21.002Z] [BOT] ✅ Loaded V2 database: 607 jobs
💾 DISK STATE: 607 jobs on disk
[2026-01-30T18:55:21.002Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=608
[2026-01-30T18:55:21.004Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:55:21.004Z] [BOT] 💾 AFTER MERGE: 608 jobs (merged disk + memory)
[2026-01-30T18:55:21.005Z] [BOT] ✅ No jobs to archive (all 608 jobs within 7-day window)
[2026-01-30T18:55:21.062Z] [BOT] 💾 Saved posted_jobs.json: 608 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:55:22.564Z] [BOT] 📍 [ROUTING] "Mid-Market Account Development Representative - Outbound" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:55:23.007Z] [BOT] ✅ Posted message: Mid-Market Account Development Representative - Outbound @ samsara in #💻・tech-jobs
  ✅ Industry: Mid-Market Account Development Representative - Outbound @ samsara
[2026-01-30T18:55:23.007Z] [BOT] 💾 Added channel posting: Mid-Market Account Development Representative - Outbound @ samsara → category channel (1 total channels)
[2026-01-30T18:55:23.007Z] [BOT] 💾 BEFORE MERGE: 609 jobs in memory (cached)
[2026-01-30T18:55:23.020Z] [BOT] ✅ Loaded V2 database: 608 jobs
[2026-01-30T18:55:23.021Z] [BOT] 💾 DISK STATE: 608 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=609
[2026-01-30T18:55:23.022Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:55:23.022Z] [BOT] 💾 AFTER MERGE: 609 jobs (merged disk + memory)
[2026-01-30T18:55:23.023Z] [BOT] ✅ No jobs to archive (all 609 jobs within 7-day window)
[2026-01-30T18:55:23.062Z] [BOT] 💾 Saved posted_jobs.json: 609 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:55:24.565Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
[2026-01-30T18:55:24.565Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:55:24.773Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
[2026-01-30T18:55:24.773Z] [BOT] ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T18:55:24.774Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
[2026-01-30T18:55:24.774Z] [BOT] 💾 BEFORE MERGE: 610 jobs in memory (cached)
[2026-01-30T18:55:24.785Z] [BOT] ✅ Loaded V2 database: 609 jobs
💾 DISK STATE: 609 jobs on disk
[2026-01-30T18:55:24.786Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=610
[2026-01-30T18:55:24.787Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:55:24.787Z] [BOT] 💾 AFTER MERGE: 610 jobs (merged disk + memory)
[2026-01-30T18:55:24.788Z] [BOT] ✅ No jobs to archive (all 610 jobs within 7-day window)
[2026-01-30T18:55:24.826Z] [BOT] 💾 Saved posted_jobs.json: 610 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:55:26.329Z] [BOT] 📍 [ROUTING] "Public Sector Major Account Executive" @ samsara
[2026-01-30T18:55:26.329Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:55:26.577Z] [BOT] ✅ Posted message: Public Sector Major Account Executive @ samsara in #💻・tech-jobs
[2026-01-30T18:55:26.577Z] [BOT] ✅ Industry: Public Sector Major Account Executive @ samsara
[2026-01-30T18:55:26.578Z] [BOT] 💾 Added channel posting: Public Sector Major Account Executive @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 611 jobs in memory (cached)
[2026-01-30T18:55:26.590Z] [BOT] ✅ Loaded V2 database: 610 jobs
💾 DISK STATE: 610 jobs on disk
[2026-01-30T18:55:26.591Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=611
[2026-01-30T18:55:26.592Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 611 jobs (merged disk + memory)
[2026-01-30T18:55:26.592Z] [BOT] ✅ No jobs to archive (all 611 jobs within 7-day window)
[2026-01-30T18:55:26.635Z] [BOT] 💾 Saved posted_jobs.json: 611 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:55:31.135Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T18:55:31.136Z] [BOT] 📍 [ROUTING] "Core Enterprise Account Executive EST/CST - Remote - Dallas, TX" @ samsara
   Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T18:55:31.420Z] [BOT] ✅ Posted message: Core Enterprise Account Executive EST/CST - Remote - Dallas, TX @ samsara in #📊・JID_fb739488
  ✅ Industry: Core Enterprise Account Executive EST/CST - Remote - Dallas, TX @ samsara
[2026-01-30T18:55:31.420Z] [BOT] 💾 Added channel posting: Core Enterprise Account Executive EST/CST - Remote - Dallas, TX @ samsara → category channel (1 total channels)
[2026-01-30T18:55:31.420Z] [BOT] 💾 BEFORE MERGE: 612 jobs in memory (cached)
[2026-01-30T18:55:31.448Z] [BOT] ✅ Loaded V2 database: 611 jobs
💾 DISK STATE: 611 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=612
[2026-01-30T18:55:31.448Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:55:31.449Z] [BOT] 💾 AFTER MERGE: 612 jobs (merged disk + memory)
[2026-01-30T18:55:31.449Z] [BOT] ✅ No jobs to archive (all 612 jobs within 7-day window)
[2026-01-30T18:55:31.497Z] [BOT] 💾 Saved posted_jobs.json: 612 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:55:36.000Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T18:55:36.001Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST" @ samsara
[2026-01-30T18:55:36.001Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T18:55:36.222Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST @ samsara in #💰・finance-jobs
[2026-01-30T18:55:36.222Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST @ samsara
[2026-01-30T18:55:36.223Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST @ samsara → category channel (1 total channels)
[2026-01-30T18:55:36.223Z] [BOT] 💾 BEFORE MERGE: 613 jobs in memory (cached)
[2026-01-30T18:55:36.235Z] [BOT] ✅ Loaded V2 database: 612 jobs
💾 DISK STATE: 612 jobs on disk
[2026-01-30T18:55:36.235Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=613
[2026-01-30T18:55:36.236Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:55:36.236Z] [BOT] 💾 AFTER MERGE: 613 jobs (merged disk + memory)
[2026-01-30T18:55:36.237Z] [BOT] ✅ No jobs to archive (all 613 jobs within 7-day window)
[2026-01-30T18:55:36.287Z] [BOT] 💾 Saved posted_jobs.json: 613 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:55:40.790Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-30T18:55:40.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ce1872f..." not found, but found as SHA256 "13aa90297f014960"
[2026-01-30T18:55:40.791Z] [BOT] ⏭️  Skipping duplicate: JID_d4b2b209 (posted within 7 days)
[2026-01-30T18:55:40.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "559b7668501d5415"
⏭️  Skipping duplicate: JID_6b35e0a6 (posted within 7 days)
[2026-01-30T18:55:40.792Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "bc33bad98a181941"
⏭️  Skipping duplicate: JID_cd31e500 (posted within 7 days)
[2026-01-30T18:55:40.792Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a2fbe3e..." not found, but found as SHA256 "5e8bd5fa918266e1"
⏭️  Skipping duplicate: JID_b9d40b7a (posted within 7 days)
[2026-01-30T18:55:40.792Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_663f6d8a..." not found, but found as SHA256 "b45936afda504318"
[2026-01-30T18:55:40.792Z] [BOT] ⏭️  Skipping duplicate: JID_b84897e7 (posted within 7 days)
[2026-01-30T18:55:40.792Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e4e0171d..." not found, but found as SHA256 "fb072b1557ac46c9"
⏭️  Skipping duplicate: JID_d0c14d21 (posted within 7 days)
[2026-01-30T18:55:40.899Z] [BOT] ✅ Loaded pending queue: 2927 total (2299 pending, 50 enriched, 578 posted)
[2026-01-30T18:55:41.100Z] [BOT] ✅ Saved pending queue: 2927 total (2299 pending, 44 enriched, 584 posted)
[2026-01-30T18:55:41.100Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T18:55:41.188Z] [BOT] 📂 Loaded 10669 existing routing entries
[2026-01-30T18:55:41.311Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 10675
[2026-01-30T18:55:41.311Z] [BOT] Timestamp: 2026-01-30T18:55:41.268Z
[2026-01-30T18:55:41.312Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T18:55:41.312Z] [BOT] Total attempts: 20
   Successful: 6
   Failed: 0
   Skipped: 14
[2026-01-30T18:55:41.313Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #📊・JID_fb739488: 1 posts
     3. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 613 jobs in memory (cached)
[2026-01-30T18:55:41.326Z] [BOT] ✅ Loaded V2 database: 613 jobs
💾 DISK STATE: 613 jobs on disk
[2026-01-30T18:55:41.326Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=613
[2026-01-30T18:55:41.328Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:55:41.328Z] [BOT] 💾 AFTER MERGE: 613 jobs (merged disk + memory)
[2026-01-30T18:55:41.328Z] [BOT] ✅ No jobs to archive (all 613 jobs within 7-day window)
[2026-01-30T18:55:41.369Z] [BOT] 💾 Saved posted_jobs.json: 613 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:55:41.370Z] [BOT] ✅ Database saved successfully
[2026-01-30T18:55:43.400Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2467) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*