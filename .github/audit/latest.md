# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T00:13:25.583Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T00:12:52.192Z] ========================================
[2026-01-14T00:12:52.194Z] Discord Bot Execution Log
[2026-01-14T00:12:52.194Z] Environment: GitHub Actions
[2026-01-14T00:12:52.194Z] Node Version: v20.19.6
[2026-01-14T00:12:52.194Z] ========================================
[2026-01-14T00:12:52.194Z] Environment Variables Check:
[2026-01-14T00:12:52.194Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T00:12:52.195Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T00:12:52.195Z] 
Multi-Channel Configuration:
[2026-01-14T00:12:52.195Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.195Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T00:12:52.196Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T00:12:52.196Z] 
Data Files Check:
[2026-01-14T00:12:52.197Z] .github/data/new_jobs.json: ✅ Exists (10 items, 226269 bytes)
[2026-01-14T00:12:52.201Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 582586 bytes)
[2026-01-14T00:12:52.201Z] 
========================================
[2026-01-14T00:12:52.201Z] Starting Enhanced Discord Bot...
[2026-01-14T00:12:52.202Z] ========================================
[2026-01-14T00:12:52.721Z] [BOT] ✅ Loaded V2 database: 1091 jobs
[2026-01-14T00:12:53.252Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T00:12:53.252Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T00:12:53.252Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T00:12:53.361Z] [BOT] ✅ Loaded pending queue: 2711 total (2691 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Manager, Transaction Monitoring Compliance at coinbase
[2026-01-14T00:12:53.363Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T00:12:53.364Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T00:12:53.364Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T00:12:53.365Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T00:12:53.365Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T00:12:53.366Z] [BOT] 📌 Posting 10 jobs to #🤖・ai-jobs
[2026-01-14T00:12:53.368Z] [BOT] 📍 [ROUTING] "Associate Manager, Transaction Monitoring Compliance" @ coinbase
[2026-01-14T00:12:53.368Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:12:53.386Z] [BOT ERROR] (node:2665) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T00:12:53.540Z] [BOT] ✅ Created forum post: 🏢 Associate Manager, Transaction Monitoring Compliance @ coinbase in #🤖・ai-jobs
[2026-01-14T00:12:53.540Z] [BOT] ✅ Industry: Associate Manager, Transaction Monitoring Compliance @ coinbase
[2026-01-14T00:12:55.043Z] [BOT] 💾 Marked as posted: Associate Manager, Transaction Monitoring Compliance @ coinbase (instance #1)
[2026-01-14T00:12:55.043Z] [BOT] 💾 BEFORE ARCHIVING: 1092 jobs in database
[2026-01-14T00:12:55.044Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T00:12:55.045Z] [BOT] 📦 Archived 8 jobs to 2026-01.json (8 total in archive)
[2026-01-14T00:12:55.046Z] [BOT] ✅ Archiving complete: 8 archived, 1084 active
[2026-01-14T00:12:55.052Z] [BOT] 💾 Saved posted_jobs.json: 1084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T00:12:55.054Z] [BOT] 📍 [ROUTING] "Concierge, Customer Success Team" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-14T00:12:55.054Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:12:55.228Z] [BOT] ✅ Created forum post: 🏢 Concierge, Customer Success Team @ coinbase in #🤖・ai-jobs
[2026-01-14T00:12:55.228Z] [BOT] ✅ Industry: Concierge, Customer Success Team @ coinbase
[2026-01-14T00:12:56.730Z] [BOT] 💾 Marked as posted: Concierge, Customer Success Team @ coinbase (instance #1)
[2026-01-14T00:12:56.731Z] [BOT] 💾 BEFORE ARCHIVING: 1085 jobs in database
[2026-01-14T00:12:56.732Z] [BOT] ✅ No jobs to archive (all 1085 jobs within 7-day window)
[2026-01-14T00:12:56.739Z] [BOT] 💾 Saved posted_jobs.json: 1085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T00:12:56.739Z] [BOT] 📍 [ROUTING] "Employee & Workplace Experience Intern" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-14T00:12:56.739Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:12:57.068Z] [BOT] ✅ Created forum post: 🏢 Employee & Workplace Experience Intern @ coinbase in #🤖・ai-jobs
[2026-01-14T00:12:57.068Z] [BOT] ✅ Industry: Employee & Workplace Experience Intern @ coinbase
[2026-01-14T00:12:58.778Z] [BOT] ✅ Created forum post: 🏢 Employee & Workplace Experience Intern @ coinbase in #🗽・new-york
[2026-01-14T00:12:58.778Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T00:13:00.280Z] [BOT] 💾 Marked as posted: Employee & Workplace Experience Intern @ coinbase (instance #1)
[2026-01-14T00:13:00.280Z] [BOT] 💾 BEFORE ARCHIVING: 1086 jobs in database
[2026-01-14T00:13:00.281Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-14T00:13:00.288Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T00:13:00.289Z] [BOT] 📍 [ROUTING] "Lead EDD Compliance Analyst" @ coinbase
[2026-01-14T00:13:00.289Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:13:00.451Z] [BOT] ✅ Created forum post: 🏢 Lead EDD Compliance Analyst @ coinbase in #🤖・ai-jobs
  ✅ Industry: Lead EDD Compliance Analyst @ coinbase
[2026-01-14T00:13:01.952Z] [BOT] 💾 Marked as posted: Lead EDD Compliance Analyst @ coinbase (instance #1)
[2026-01-14T00:13:01.953Z] [BOT] 💾 BEFORE ARCHIVING: 1087 jobs in database
[2026-01-14T00:13:01.953Z] [BOT] ✅ No jobs to archive (all 1087 jobs within 7-day window)
[2026-01-14T00:13:01.962Z] [BOT] 💾 Saved posted_jobs.json: 1087 active jobs
[2026-01-14T00:13:01.962Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:13:01.964Z] [BOT] 📍 [ROUTING] "Lead TMS Compliance Analyst " @ coinbase
[2026-01-14T00:13:01.964Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:13:02.140Z] [BOT] ✅ Created forum post: 🏢 Lead TMS Compliance Analyst  @ coinbase in #🤖・ai-jobs
[2026-01-14T00:13:02.140Z] [BOT] ✅ Industry: Lead TMS Compliance Analyst  @ coinbase
[2026-01-14T00:13:03.642Z] [BOT] 💾 Marked as posted: Lead TMS Compliance Analyst  @ coinbase (instance #1)
[2026-01-14T00:13:03.643Z] [BOT] 💾 BEFORE ARCHIVING: 1088 jobs in database
[2026-01-14T00:13:03.644Z] [BOT] ✅ No jobs to archive (all 1088 jobs within 7-day window)
[2026-01-14T00:13:03.652Z] [BOT] 💾 Saved posted_jobs.json: 1088 active jobs
[2026-01-14T00:13:03.652Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:13:03.654Z] [BOT] 📍 [ROUTING] "Lead TMS Quality Compliance Analyst" @ coinbase
[2026-01-14T00:13:03.654Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:13:03.947Z] [BOT] ✅ Created forum post: 🏢 Lead TMS Quality Compliance Analyst @ coinbase in #🤖・ai-jobs
  ✅ Industry: Lead TMS Quality Compliance Analyst @ coinbase
[2026-01-14T00:13:05.449Z] [BOT] 💾 Marked as posted: Lead TMS Quality Compliance Analyst @ coinbase (instance #1)
[2026-01-14T00:13:05.449Z] [BOT] 💾 BEFORE ARCHIVING: 1089 jobs in database
[2026-01-14T00:13:05.450Z] [BOT] ✅ No jobs to archive (all 1089 jobs within 7-day window)
[2026-01-14T00:13:05.458Z] [BOT] 💾 Saved posted_jobs.json: 1089 active jobs
[2026-01-14T00:13:05.459Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:13:05.459Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Intern" @ coinbase
[2026-01-14T00:13:05.459Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T00:13:07.226Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Intern @ coinbase in #🤖・ai-jobs
[2026-01-14T00:13:07.226Z] [BOT] ✅ Industry: Machine Learning Engineer Intern @ coinbase
[2026-01-14T00:13:08.860Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Intern @ coinbase in #🌉・san-francisco
[2026-01-14T00:13:08.860Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T00:13:10.361Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Intern @ coinbase (instance #1)
[2026-01-14T00:13:10.361Z] [BOT] 💾 BEFORE ARCHIVING: 1090 jobs in database
[2026-01-14T00:13:10.362Z] [BOT] ✅ No jobs to archive (all 1090 jobs within 7-day window)
[2026-01-14T00:13:10.369Z] [BOT] 💾 Saved posted_jobs.json: 1090 active jobs
[2026-01-14T00:13:10.370Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:13:10.370Z] [BOT] 📍 [ROUTING] "Marketing Events Intern" @ coinbase
[2026-01-14T00:13:10.370Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:13:10.611Z] [BOT] ✅ Created forum post: 🏢 Marketing Events Intern @ coinbase in #🤖・ai-jobs
[2026-01-14T00:13:10.611Z] [BOT] ✅ Industry: Marketing Events Intern @ coinbase
[2026-01-14T00:13:12.360Z] [BOT] ✅ Created forum post: 🏢 Marketing Events Intern @ coinbase in #🗽・new-york
[2026-01-14T00:13:12.360Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T00:13:13.861Z] [BOT] 💾 Marked as posted: Marketing Events Intern @ coinbase (instance #1)
[2026-01-14T00:13:13.861Z] [BOT] 💾 BEFORE ARCHIVING: 1091 jobs in database
[2026-01-14T00:13:13.862Z] [BOT] ✅ No jobs to archive (all 1091 jobs within 7-day window)
[2026-01-14T00:13:13.870Z] [BOT] 💾 Saved posted_jobs.json: 1091 active jobs
[2026-01-14T00:13:13.870Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:13:13.870Z] [BOT] 📍 [ROUTING] "Policy Intern" @ coinbase
[2026-01-14T00:13:13.870Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:13:14.363Z] [BOT] ✅ Created forum post: 🏢 Policy Intern @ coinbase in #🤖・ai-jobs
[2026-01-14T00:13:14.363Z] [BOT] ✅ Industry: Policy Intern @ coinbase
[2026-01-14T00:13:15.865Z] [BOT] 💾 Marked as posted: Policy Intern @ coinbase (instance #1)
[2026-01-14T00:13:15.865Z] [BOT] 💾 BEFORE ARCHIVING: 1092 jobs in database
[2026-01-14T00:13:15.866Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-14T00:13:15.874Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
[2026-01-14T00:13:15.875Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:13:15.875Z] [BOT] 📍 [ROUTING] "Product Design Intern" @ coinbase
[2026-01-14T00:13:15.875Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T00:13:16.257Z] [BOT] ✅ Created forum post: 🏢 Product Design Intern @ coinbase in #🤖・ai-jobs
[2026-01-14T00:13:16.257Z] [BOT] ✅ Industry: Product Design Intern @ coinbase
[2026-01-14T00:13:18.007Z] [BOT] ✅ Created forum post: 🏢 Product Design Intern @ coinbase in #🌉・san-francisco
[2026-01-14T00:13:18.007Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T00:13:19.509Z] [BOT] 💾 Marked as posted: Product Design Intern @ coinbase (instance #1)
[2026-01-14T00:13:19.509Z] [BOT] 💾 BEFORE ARCHIVING: 1093 jobs in database
[2026-01-14T00:13:19.509Z] [BOT] ✅ No jobs to archive (all 1093 jobs within 7-day window)
[2026-01-14T00:13:19.517Z] [BOT] 💾 Saved posted_jobs.json: 1093 active jobs
[2026-01-14T00:13:19.517Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T00:13:22.518Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T00:13:22.519Z] [BOT] ⏭️  Skipping duplicate: JID_de7dc187 (posted within 7 days)
[2026-01-14T00:13:22.519Z] [BOT] ⏭️  Skipping duplicate: JID_de687c4d (posted within 7 days)
[2026-01-14T00:13:22.519Z] [BOT] ⏭️  Skipping duplicate: JID_b885468f (posted within 7 days)
[2026-01-14T00:13:22.519Z] [BOT] ⏭️  Skipping duplicate: JID_a3af3853 (posted within 7 days)
[2026-01-14T00:13:22.519Z] [BOT] ⏭️  Skipping duplicate: JID_bdfb2c7a (posted within 7 days)
[2026-01-14T00:13:22.519Z] [BOT] ⏭️  Skipping duplicate: JID_5837088b (posted within 7 days)
[2026-01-14T00:13:22.519Z] [BOT] ⏭️  Skipping duplicate: JID_07d75074 (posted within 7 days)
[2026-01-14T00:13:22.519Z] [BOT] ⏭️  Skipping duplicate: JID_6dba5654 (posted within 7 days)
[2026-01-14T00:13:22.520Z] [BOT] ⏭️  Skipping duplicate: JID_4f403c0c (posted within 7 days)
[2026-01-14T00:13:22.520Z] [BOT] ⏭️  Skipping duplicate: JID_0cd4e9de (posted within 7 days)
[2026-01-14T00:13:22.632Z] [BOT] ✅ Loaded pending queue: 2711 total (2691 pending, 20 enriched, 0 posted)
[2026-01-14T00:13:22.795Z] [BOT] ✅ Saved pending queue: 2711 total (2691 pending, 10 enriched, 10 posted)
[2026-01-14T00:13:22.795Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T00:13:22.847Z] [BOT] 📂 Loaded 3245 existing routing entries
[2026-01-14T00:13:22.907Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3255
[2026-01-14T00:13:22.907Z] [BOT] Timestamp: 2026-01-14T00:13:22.892Z
[2026-01-14T00:13:22.907Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 14
[2026-01-14T00:13:22.908Z] [BOT] Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-14T00:13:22.908Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
[2026-01-14T00:13:22.908Z] [BOT] Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 10 posts
     2. #🗽・new-york: 2 posts
     3. #🌉・san-francisco: 2 posts
[2026-01-14T00:13:22.908Z] [BOT] [STATS] Channel stats saved
[2026-01-14T00:13:24.932Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2665) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*