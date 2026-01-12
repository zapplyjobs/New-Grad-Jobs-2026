# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T16:58:02.179Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T16:57:51.647Z] ========================================
[2026-01-12T16:57:51.649Z] Discord Bot Execution Log
[2026-01-12T16:57:51.649Z] Environment: GitHub Actions
[2026-01-12T16:57:51.649Z] Node Version: v20.19.6
[2026-01-12T16:57:51.649Z] ========================================
[2026-01-12T16:57:51.649Z] Environment Variables Check:
[2026-01-12T16:57:51.649Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T16:57:51.649Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.649Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T16:57:51.649Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T16:57:51.649Z] 
Multi-Channel Configuration:
[2026-01-12T16:57:51.649Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.650Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.650Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.650Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.650Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.650Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.650Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.650Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.650Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T16:57:51.650Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T16:57:51.650Z] 
Data Files Check:
[2026-01-12T16:57:51.651Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157266 bytes)
[2026-01-12T16:57:51.653Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 227347 bytes)
[2026-01-12T16:57:51.653Z] 
========================================
[2026-01-12T16:57:51.653Z] Starting Enhanced Discord Bot...
[2026-01-12T16:57:51.653Z] ========================================
[2026-01-12T16:57:52.165Z] [BOT] ✅ Loaded V2 database: 400 jobs
[2026-01-12T16:57:52.809Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T16:57:52.810Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T16:57:52.810Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T16:57:52.823Z] [BOT] ✅ Loaded pending queue: 273 total (253 pending, 20 enriched, 0 posted)
[2026-01-12T16:57:52.824Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Account Executive, Embedded Finance at brex
[2026-01-12T16:57:52.825Z] [BOT] ⏭️  Skipping duplicate: JID_13d998db-i_r106463-1 (posted within 7 days)
[2026-01-12T16:57:52.825Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at RELX
[2026-01-12T16:57:52.825Z] [BOT] ⏭️  Skipping duplicate: JID_61e5c655 (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
[2026-01-12T16:57:52.825Z] [BOT] ⏭️  Skipping duplicate: JID_eebc56d7 (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
[2026-01-12T16:57:52.826Z] [BOT] ⏭️  Skipping duplicate: JID_6143f1ff (posted within 7 days)
⏭️ Skipping already posted: Expansion Account Executive, Enterprise at brex
⏭️  Skipping duplicate: JID_e8716d5a (posted within 7 days)
[2026-01-12T16:57:52.826Z] [BOT] ⏭️ Skipping already posted: Manager, Commercial Sales Engineering (AMER - East) at datadog
⏭️  Skipping duplicate: JID_d85041c5 (posted within 7 days)
⏭️ Skipping already posted: Internal Communications Senior Manager (Global Sales) at reddit
⏭️  Skipping duplicate: JID_1f192e6d (posted within 7 days)
⏭️ Skipping already posted: Associate Manager, Compliance at coinbase
⏭️  Skipping duplicate: JID_8fc10dad (posted within 7 days)
[2026-01-12T16:57:52.826Z] [BOT] ⏭️ Skipping already posted: Director, Channels - Global Systems Integrators (AMER) at datadog
⏭️  Skipping duplicate: JID_4e8b8312 (posted within 7 days)
⏭️ Skipping already posted: Product Solutions Architect 3 - Synthetics at datadog
[2026-01-12T16:57:52.826Z] [BOT] ⏭️  Skipping duplicate: JID_e13e860d (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Boston) at datadog
[2026-01-12T16:57:52.826Z] [BOT] ⏭️  Skipping duplicate: JID_cc075897 (posted within 7 days)
⏭️ Skipping already posted: Senior Director, Product Design at datadog
[2026-01-12T16:57:52.826Z] [BOT] ⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
⏭️ Skipping already posted: Web/Digital Specialist 1 at Sabre
⏭️  Skipping duplicate: JID_08b95b67-i_r18423 (posted within 7 days)
⏭️ Skipping already posted: Workday Extend Developer 1 at Iowa State University
[2026-01-12T16:57:52.827Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
⏭️ Skipping already posted: Application Support - Java skills - Associate at HEXAWARE
⏭️  Skipping duplicate: JID_a44e73ca-6078916_13942102 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_385c8ffa-6078908_13942096-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
⏭️ Skipping already posted: Systems/Software Engineer 1 at Hewlett Packard Enterprise
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
📬 Found 2 new jobs (18 already posted)...
[2026-01-12T16:57:52.827Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-12T16:57:52.827Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-12T16:57:52.828Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-12T16:57:52.828Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2026-01-12T16:57:52.828Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T16:57:52.830Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-12T16:57:52.830Z] [BOT] 📍 [ROUTING] "Account Executive, Embedded Finance" @ brex
[2026-01-12T16:57:52.831Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T16:57:52.835Z] [BOT ERROR] (node:2945) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T16:57:53.251Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Embedded Finance @ brex in #💲・sales-jobs
[2026-01-12T16:57:53.251Z] [BOT] ✅ Industry: Account Executive, Embedded Finance @ brex
[2026-01-12T16:57:54.909Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Embedded Finance @ brex in #🌉・san-francisco
[2026-01-12T16:57:54.909Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T16:57:56.409Z] [BOT] 💾 Marked as posted: Account Executive, Embedded Finance @ brex (instance #1)
[2026-01-12T16:57:56.410Z] [BOT] 💾 BEFORE ARCHIVING: 401 jobs in database
[2026-01-12T16:57:56.410Z] [BOT] ✅ No jobs to archive (all 401 jobs within 7-day window)
[2026-01-12T16:57:56.418Z] [BOT] 💾 Saved posted_jobs.json: 401 active jobs
[2026-01-12T16:57:56.418Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T16:57:56.418Z] [BOT] 💾 Marked as posted: Account Executive, Embedded Finance @ brex (instance #1)
💾 BEFORE ARCHIVING: 402 jobs in database
[2026-01-12T16:57:56.419Z] [BOT] ✅ No jobs to archive (all 402 jobs within 7-day window)
[2026-01-12T16:57:56.422Z] [BOT] 💾 Saved posted_jobs.json: 402 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T16:57:59.424Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T16:57:59.424Z] [BOT] ⏭️  Skipping duplicate: JID_d5d07e23 (posted within 7 days)
[2026-01-12T16:57:59.435Z] [BOT] ✅ Loaded pending queue: 273 total (253 pending, 20 enriched, 0 posted)
[2026-01-12T16:57:59.453Z] [BOT] ✅ Saved pending queue: 273 total (253 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-12T16:57:59.453Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T16:57:59.503Z] [BOT] 📂 Loaded 2571 existing routing entries
[2026-01-12T16:57:59.561Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-12T16:57:59.561Z] [BOT] Total entries: 2572
   Timestamp: 2026-01-12T16:57:59.547Z
[2026-01-12T16:57:59.562Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T16:57:59.562Z] [BOT] Total attempts: 20
   Successful: 2
   Failed: 0
   Skipped: 18
[2026-01-12T16:57:59.562Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-01-12T16:57:59.562Z] [BOT] Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-12T16:57:59.562Z] [BOT] [STATS] Channel stats saved
[2026-01-12T16:58:01.578Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2945) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*