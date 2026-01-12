# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T16:27:57.803Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T16:27:46.390Z] ========================================
[2026-01-12T16:27:46.392Z] Discord Bot Execution Log
[2026-01-12T16:27:46.392Z] Environment: GitHub Actions
[2026-01-12T16:27:46.392Z] Node Version: v20.19.6
[2026-01-12T16:27:46.392Z] ========================================
[2026-01-12T16:27:46.392Z] Environment Variables Check:
[2026-01-12T16:27:46.392Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T16:27:46.392Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.393Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T16:27:46.393Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T16:27:46.393Z] 
Multi-Channel Configuration:
[2026-01-12T16:27:46.393Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.393Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.393Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.393Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.393Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.393Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.393Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.393Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.393Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T16:27:46.394Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T16:27:46.394Z] 
Data Files Check:
[2026-01-12T16:27:46.395Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163236 bytes)
[2026-01-12T16:27:46.397Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 227143 bytes)
[2026-01-12T16:27:46.397Z] 
========================================
[2026-01-12T16:27:46.397Z] Starting Enhanced Discord Bot...
[2026-01-12T16:27:46.397Z] ========================================
[2026-01-12T16:27:46.954Z] [BOT] ✅ Loaded V2 database: 399 jobs
[2026-01-12T16:27:47.642Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T16:27:47.643Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T16:27:47.643Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T16:27:47.657Z] [BOT] ✅ Loaded pending queue: 270 total (250 pending, 20 enriched, 0 posted)
[2026-01-12T16:27:47.657Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Expansion Account Executive, Enterprise at brex
[2026-01-12T16:27:47.658Z] [BOT] ⏭️  Skipping duplicate: JID_e8716d5a (posted within 7 days)
[2026-01-12T16:27:47.659Z] [BOT] ⏭️ Skipping already posted: Manager, Commercial Sales Engineering (AMER - East) at datadog
[2026-01-12T16:27:47.659Z] [BOT] ⏭️  Skipping duplicate: JID_d85041c5 (posted within 7 days)
⏭️ Skipping already posted: Internal Communications Senior Manager (Global Sales) at reddit
[2026-01-12T16:27:47.659Z] [BOT] ⏭️  Skipping duplicate: JID_1f192e6d (posted within 7 days)
⏭️ Skipping already posted: Associate Manager, Compliance at coinbase
[2026-01-12T16:27:47.659Z] [BOT] ⏭️  Skipping duplicate: JID_8fc10dad (posted within 7 days)
⏭️ Skipping already posted: Director, Channels - Global Systems Integrators (AMER) at datadog
⏭️  Skipping duplicate: JID_4e8b8312 (posted within 7 days)
⏭️ Skipping already posted: Product Solutions Architect 3 - Synthetics at datadog
[2026-01-12T16:27:47.659Z] [BOT] ⏭️  Skipping duplicate: JID_e13e860d (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Boston) at datadog
⏭️  Skipping duplicate: JID_cc075897 (posted within 7 days)
⏭️ Skipping already posted: Senior Director, Product Design at datadog
[2026-01-12T16:27:47.660Z] [BOT] ⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
[2026-01-12T16:27:47.660Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
[2026-01-12T16:27:47.660Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T16:27:47.660Z] [BOT] ⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
[2026-01-12T16:27:47.660Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
[2026-01-12T16:27:47.660Z] [BOT] ⏭️  Skipping duplicate: JID_bc80fdc0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at PitchBook
📬 Found 3 new jobs (17 already posted)...
[2026-01-12T16:27:47.661Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-12T16:27:47.661Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-12T16:27:47.661Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-12T16:27:47.661Z] [BOT] 📍 1 jobs with multiple locations:
   - Expansion Account Executive, Enterprise @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T16:27:47.664Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-12T16:27:47.665Z] [BOT] 📍 [ROUTING] "Expansion Account Executive, Enterprise" @ brex
[2026-01-12T16:27:47.665Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T16:27:47.670Z] [BOT ERROR] (node:2976) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T16:27:47.962Z] [BOT] ✅ Created forum post: 🏢 Expansion Account Executive, Enterprise @ brex in #💲・sales-jobs
[2026-01-12T16:27:47.963Z] [BOT] ✅ Industry: Expansion Account Executive, Enterprise @ brex
[2026-01-12T16:27:49.854Z] [BOT] ✅ Created forum post: 🏢 Expansion Account Executive, Enterprise @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T16:27:51.355Z] [BOT] 💾 Marked as posted: Expansion Account Executive, Enterprise @ brex (instance #1)
[2026-01-12T16:27:51.355Z] [BOT] 💾 BEFORE ARCHIVING: 400 jobs in database
[2026-01-12T16:27:51.356Z] [BOT] ✅ No jobs to archive (all 400 jobs within 7-day window)
[2026-01-12T16:27:51.363Z] [BOT] 💾 Saved posted_jobs.json: 400 active jobs
[2026-01-12T16:27:51.363Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Expansion Account Executive, Enterprise @ brex (instance #1)
💾 BEFORE ARCHIVING: 401 jobs in database
[2026-01-12T16:27:51.364Z] [BOT] ✅ No jobs to archive (all 401 jobs within 7-day window)
[2026-01-12T16:27:51.367Z] [BOT] 💾 Saved posted_jobs.json: 401 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T16:27:51.367Z] [BOT] 💾 Marked as posted: Expansion Account Executive, Enterprise @ brex (instance #1)
💾 BEFORE ARCHIVING: 402 jobs in database
[2026-01-12T16:27:51.368Z] [BOT] ✅ No jobs to archive (all 402 jobs within 7-day window)
[2026-01-12T16:27:51.371Z] [BOT] 💾 Saved posted_jobs.json: 402 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T16:27:54.373Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T16:27:54.373Z] [BOT] ⏭️  Skipping duplicate: JID_61e5c655 (posted within 7 days)
[2026-01-12T16:27:54.384Z] [BOT] ✅ Loaded pending queue: 270 total (250 pending, 20 enriched, 0 posted)
[2026-01-12T16:27:54.402Z] [BOT] ✅ Saved pending queue: 270 total (250 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T16:27:54.454Z] [BOT] 📂 Loaded 2569 existing routing entries
[2026-01-12T16:27:54.515Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2570
[2026-01-12T16:27:54.515Z] [BOT] Timestamp: 2026-01-12T16:27:54.499Z
[2026-01-12T16:27:54.515Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 19
   Successful: 2
   Failed: 0
   Skipped: 17
[2026-01-12T16:27:54.516Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 1 posts
[2026-01-12T16:27:54.516Z] [BOT] 2. #💻・remote-usa: 1 posts
[2026-01-12T16:27:54.516Z] [BOT] [STATS] Channel stats saved
[2026-01-12T16:27:56.530Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2976) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*