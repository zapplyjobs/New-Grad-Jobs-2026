# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T23:53:19.760Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T23:52:34.437Z] ========================================
[2026-01-13T23:52:34.439Z] Discord Bot Execution Log
[2026-01-13T23:52:34.439Z] Environment: GitHub Actions
[2026-01-13T23:52:34.439Z] Node Version: v20.19.6
[2026-01-13T23:52:34.440Z] ========================================
[2026-01-13T23:52:34.440Z] Environment Variables Check:
[2026-01-13T23:52:34.440Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T23:52:34.440Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.440Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T23:52:34.440Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T23:52:34.440Z] 
Multi-Channel Configuration:
[2026-01-13T23:52:34.440Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.440Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.441Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.441Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.441Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.441Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.441Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.441Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.441Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T23:52:34.441Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T23:52:34.441Z] 
Data Files Check:
[2026-01-13T23:52:34.443Z] .github/data/new_jobs.json: ✅ Exists (10 items, 207427 bytes)
[2026-01-13T23:52:34.447Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 581883 bytes)
[2026-01-13T23:52:34.447Z] 
========================================
[2026-01-13T23:52:34.447Z] Starting Enhanced Discord Bot...
[2026-01-13T23:52:34.447Z] ========================================
[2026-01-13T23:52:34.980Z] [BOT] ✅ Loaded V2 database: 1089 jobs
[2026-01-13T23:52:35.698Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T23:52:35.698Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T23:52:35.698Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T23:52:35.805Z] [BOT] ✅ Loaded pending queue: 2710 total (2690 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Security Engineer, Detection & Response at anthropic
[2026-01-13T23:52:35.807Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T23:52:35.807Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T23:52:35.807Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T23:52:35.808Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T23:52:35.808Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T23:52:35.813Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-13T23:52:35.813Z] [BOT] 📍 [ROUTING] "Security Engineer, Detection & Response" @ anthropic
[2026-01-13T23:52:35.813Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:52:35.831Z] [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T23:52:36.056Z] [BOT] ✅ Created forum post: 🏢 Security Engineer, Detection & Response @ anthropic in #💻・tech-jobs
[2026-01-13T23:52:36.056Z] [BOT] ✅ Industry: Security Engineer, Detection & Response @ anthropic
[2026-01-13T23:52:37.753Z] [BOT] ✅ Created forum post: 🏢 Security Engineer, Detection & Response @ anthropic in #🌉・san-francisco
[2026-01-13T23:52:37.753Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T23:52:39.253Z] [BOT] 💾 Marked as posted: Security Engineer, Detection & Response @ anthropic (instance #1)
[2026-01-13T23:52:39.253Z] [BOT] 💾 BEFORE ARCHIVING: 1090 jobs in database
[2026-01-13T23:52:39.254Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T23:52:39.259Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
[2026-01-13T23:52:39.260Z] [BOT] ✅ Archiving complete: 8 archived, 1082 active
[2026-01-13T23:52:39.267Z] [BOT] 💾 Saved posted_jobs.json: 1082 active jobs
[2026-01-13T23:52:39.267Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:52:42.267Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-13T23:52:42.268Z] [BOT] 📍 [ROUTING] "Manager, Digital Native Sales" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:52:42.702Z] [BOT] ✅ Created forum post: 🏢 Manager, Digital Native Sales @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager, Digital Native Sales @ anthropic
[2026-01-13T23:52:44.407Z] [BOT] ✅ Created forum post: 🏢 Manager, Digital Native Sales @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:52:45.909Z] [BOT] 💾 Marked as posted: Manager, Digital Native Sales @ anthropic (instance #1)
[2026-01-13T23:52:45.909Z] [BOT] 💾 BEFORE ARCHIVING: 1083 jobs in database
[2026-01-13T23:52:45.910Z] [BOT] ✅ No jobs to archive (all 1083 jobs within 7-day window)
[2026-01-13T23:52:45.919Z] [BOT] 💾 Saved posted_jobs.json: 1083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:52:45.920Z] [BOT] 📍 [ROUTING] "Global Partner Sales Manager, Systems Integrators" @ anthropic
[2026-01-13T23:52:45.920Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:52:46.137Z] [BOT] ✅ Created forum post: 🏢 Global Partner Sales Manager, Systems Integrators @ anthropic in #💲・sales-jobs
  ✅ Industry: Global Partner Sales Manager, Systems Integrators @ anthropic
[2026-01-13T23:52:47.816Z] [BOT] ✅ Created forum post: 🏢 Global Partner Sales Manager, Systems Integrators @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:52:49.317Z] [BOT] 💾 Marked as posted: Global Partner Sales Manager, Systems Integrators @ anthropic (instance #1)
[2026-01-13T23:52:49.317Z] [BOT] 💾 BEFORE ARCHIVING: 1084 jobs in database
[2026-01-13T23:52:49.318Z] [BOT] ✅ No jobs to archive (all 1084 jobs within 7-day window)
[2026-01-13T23:52:49.326Z] [BOT] 💾 Saved posted_jobs.json: 1084 active jobs
[2026-01-13T23:52:49.326Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:52:49.327Z] [BOT] 📍 [ROUTING] "Global Partner Lead, Deloitte" @ anthropic
[2026-01-13T23:52:49.327Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:52:49.523Z] [BOT] ✅ Created forum post: 🏢 Global Partner Lead, Deloitte @ anthropic in #💲・sales-jobs
[2026-01-13T23:52:49.523Z] [BOT] ✅ Industry: Global Partner Lead, Deloitte @ anthropic
[2026-01-13T23:52:51.239Z] [BOT] ✅ Created forum post: 🏢 Global Partner Lead, Deloitte @ anthropic in #🌉・san-francisco
[2026-01-13T23:52:51.240Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T23:52:52.741Z] [BOT] 💾 Marked as posted: Global Partner Lead, Deloitte @ anthropic (instance #1)
[2026-01-13T23:52:52.741Z] [BOT] 💾 BEFORE ARCHIVING: 1085 jobs in database
[2026-01-13T23:52:52.742Z] [BOT] ✅ No jobs to archive (all 1085 jobs within 7-day window)
[2026-01-13T23:52:52.750Z] [BOT] 💾 Saved posted_jobs.json: 1085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:52:52.750Z] [BOT] 📍 [ROUTING] "Global Partner Lead, Accenture" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-13T23:52:52.750Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:52:52.991Z] [BOT] ✅ Created forum post: 🏢 Global Partner Lead, Accenture @ anthropic in #💲・sales-jobs
  ✅ Industry: Global Partner Lead, Accenture @ anthropic
[2026-01-13T23:52:54.798Z] [BOT] ✅ Created forum post: 🏢 Global Partner Lead, Accenture @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:52:56.299Z] [BOT] 💾 Marked as posted: Global Partner Lead, Accenture @ anthropic (instance #1)
[2026-01-13T23:52:56.300Z] [BOT] 💾 BEFORE ARCHIVING: 1086 jobs in database
[2026-01-13T23:52:56.300Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-13T23:52:56.308Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
[2026-01-13T23:52:56.308Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:52:56.308Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ anthropic
[2026-01-13T23:52:56.309Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:52:56.488Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ anthropic in #💲・sales-jobs
[2026-01-13T23:52:56.488Z] [BOT] ✅ Industry: Enterprise Account Executive @ anthropic
[2026-01-13T23:52:58.311Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ anthropic in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T23:52:59.812Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ anthropic (instance #1)
[2026-01-13T23:52:59.813Z] [BOT] 💾 BEFORE ARCHIVING: 1087 jobs in database
[2026-01-13T23:52:59.813Z] [BOT] ✅ No jobs to archive (all 1087 jobs within 7-day window)
[2026-01-13T23:52:59.821Z] [BOT] 💾 Saved posted_jobs.json: 1087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:53:02.823Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-13T23:53:02.823Z] [BOT] 📍 [ROUTING] "Engagement Manager, Applied AI" @ anthropic
[2026-01-13T23:53:02.823Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T23:53:03.106Z] [BOT] ✅ Created forum post: 🏢 Engagement Manager, Applied AI @ anthropic in #🤖・ai-jobs
  ✅ Industry: Engagement Manager, Applied AI @ anthropic
[2026-01-13T23:53:04.842Z] [BOT] ✅ Created forum post: 🏢 Engagement Manager, Applied AI @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:53:06.343Z] [BOT] 💾 Marked as posted: Engagement Manager, Applied AI @ anthropic (instance #1)
[2026-01-13T23:53:06.343Z] [BOT] 💾 BEFORE ARCHIVING: 1088 jobs in database
[2026-01-13T23:53:06.344Z] [BOT] ✅ No jobs to archive (all 1088 jobs within 7-day window)
[2026-01-13T23:53:06.352Z] [BOT] 💾 Saved posted_jobs.json: 1088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:53:06.352Z] [BOT] 📍 [ROUTING] "Associate Manager, EDD Compliance" @ coinbase
[2026-01-13T23:53:06.352Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T23:53:06.740Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, EDD Compliance @ coinbase in #🤖・ai-jobs
  ✅ Industry: Associate Manager, EDD Compliance @ coinbase
[2026-01-13T23:53:08.243Z] [BOT] 💾 Marked as posted: Associate Manager, EDD Compliance @ coinbase (instance #1)
[2026-01-13T23:53:08.243Z] [BOT] 💾 BEFORE ARCHIVING: 1089 jobs in database
[2026-01-13T23:53:08.244Z] [BOT] ✅ No jobs to archive (all 1089 jobs within 7-day window)
[2026-01-13T23:53:08.253Z] [BOT] 💾 Saved posted_jobs.json: 1089 active jobs
[2026-01-13T23:53:08.253Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:53:08.253Z] [BOT] 📍 [ROUTING] "Associate Manager, Quality Compliance" @ coinbase
[2026-01-13T23:53:08.253Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T23:53:08.575Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Quality Compliance @ coinbase in #🤖・ai-jobs
  ✅ Industry: Associate Manager, Quality Compliance @ coinbase
[2026-01-13T23:53:10.077Z] [BOT] 💾 Marked as posted: Associate Manager, Quality Compliance @ coinbase (instance #1)
[2026-01-13T23:53:10.077Z] [BOT] 💾 BEFORE ARCHIVING: 1090 jobs in database
[2026-01-13T23:53:10.078Z] [BOT] ✅ No jobs to archive (all 1090 jobs within 7-day window)
[2026-01-13T23:53:10.086Z] [BOT] 💾 Saved posted_jobs.json: 1090 active jobs
[2026-01-13T23:53:10.086Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:53:10.086Z] [BOT] 📍 [ROUTING] "Associate Manager, Residential Security" @ coinbase
[2026-01-13T23:53:10.086Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T23:53:10.267Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Residential Security @ coinbase in #🤖・ai-jobs
  ✅ Industry: Associate Manager, Residential Security @ coinbase
[2026-01-13T23:53:12.033Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Residential Security @ coinbase in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T23:53:13.534Z] [BOT] 💾 Marked as posted: Associate Manager, Residential Security @ coinbase (instance #1)
[2026-01-13T23:53:13.535Z] [BOT] 💾 BEFORE ARCHIVING: 1091 jobs in database
[2026-01-13T23:53:13.535Z] [BOT] ✅ No jobs to archive (all 1091 jobs within 7-day window)
[2026-01-13T23:53:13.544Z] [BOT] 💾 Saved posted_jobs.json: 1091 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:53:16.544Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T23:53:16.545Z] [BOT] ⏭️  Skipping duplicate: JID_9c0c7605 (posted within 7 days)
[2026-01-13T23:53:16.545Z] [BOT] ⏭️  Skipping duplicate: JID_52ce7fbb (posted within 7 days)
[2026-01-13T23:53:16.545Z] [BOT] ⏭️  Skipping duplicate: JID_827caba2 (posted within 7 days)
⏭️  Skipping duplicate: JID_0e05785c (posted within 7 days)
⏭️  Skipping duplicate: JID_d3893432 (posted within 7 days)
⏭️  Skipping duplicate: JID_2a8c4251 (posted within 7 days)
[2026-01-13T23:53:16.545Z] [BOT] ⏭️  Skipping duplicate: JID_5dac1616 (posted within 7 days)
⏭️  Skipping duplicate: JID_c2eb788e (posted within 7 days)
[2026-01-13T23:53:16.546Z] [BOT] ⏭️  Skipping duplicate: JID_27942dfd (posted within 7 days)
[2026-01-13T23:53:16.546Z] [BOT] ⏭️  Skipping duplicate: JID_664eef40 (posted within 7 days)
[2026-01-13T23:53:16.666Z] [BOT] ✅ Loaded pending queue: 2710 total (2690 pending, 20 enriched, 0 posted)
[2026-01-13T23:53:16.833Z] [BOT] ✅ Saved pending queue: 2710 total (2690 pending, 10 enriched, 10 posted)
[2026-01-13T23:53:16.833Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T23:53:16.887Z] [BOT] 📂 Loaded 3235 existing routing entries
[2026-01-13T23:53:16.947Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3245
[2026-01-13T23:53:16.947Z] [BOT] Timestamp: 2026-01-13T23:53:16.933Z
[2026-01-13T23:53:16.947Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T23:53:16.947Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-13T23:53:16.948Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T23:53:16.948Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
[2026-01-13T23:53:16.948Z] [BOT] 1. #🌉・san-francisco: 6 posts
     2. #💲・sales-jobs: 5 posts
     3. #🤖・ai-jobs: 4 posts
     4. #💻・tech-jobs: 1 posts
     5. #🗽・new-york: 1 posts
[2026-01-13T23:53:16.948Z] [BOT] [STATS] Channel stats saved
[2026-01-13T23:53:18.971Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*