# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T02:01:35.631Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T02:00:49.184Z] ========================================
[2026-01-14T02:00:49.186Z] Discord Bot Execution Log
[2026-01-14T02:00:49.186Z] Environment: GitHub Actions
[2026-01-14T02:00:49.186Z] Node Version: v20.19.6
[2026-01-14T02:00:49.186Z] ========================================
[2026-01-14T02:00:49.186Z] Environment Variables Check:
[2026-01-14T02:00:49.186Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T02:00:49.186Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T02:00:49.187Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T02:00:49.187Z] 
Multi-Channel Configuration:
[2026-01-14T02:00:49.187Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T02:00:49.187Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T02:00:49.187Z] 
Data Files Check:
[2026-01-14T02:00:49.189Z] .github/data/new_jobs.json: ✅ Exists (10 items, 154395 bytes)
[2026-01-14T02:00:49.193Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 588114 bytes)
[2026-01-14T02:00:49.193Z] 
========================================
[2026-01-14T02:00:49.193Z] Starting Enhanced Discord Bot...
[2026-01-14T02:00:49.193Z] ========================================
[2026-01-14T02:00:49.643Z] [BOT] ✅ Loaded V2 database: 1103 jobs
[2026-01-14T02:00:50.674Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T02:00:50.674Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T02:00:50.675Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T02:00:50.820Z] [BOT] ✅ Loaded pending queue: 2727 total (2707 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist - People Analytics at Qualtrics
[2026-01-14T02:00:50.823Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T02:00:50.823Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T02:00:50.824Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T02:00:50.824Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-14T02:00:50.824Z] [BOT] (11 grouped as same job with different locations)
📍 6 jobs with multiple locations:
   - Account Executive, Mid Market @ brex: salt lake city, utah, united states, san francisco, california, united states
   - Accounting Channel Partnerships Manager @ brex: new york, new york, united states, san francisco, california, united states
   -  Accounting Manager, Legal Entity Controllership @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states, new york, new york, united states
[2026-01-14T02:00:50.825Z] [BOT] - Banking Specialist @ brex: san francisco, california, united states, new york, new york, united states
   - Commercial Account Executive @ brex: seattle, washington, united states, salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
   - Compliance Manager (Card & Rewards) @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 11 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T02:00:50.829Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T02:00:50.830Z] [BOT] 📍 [ROUTING] "Data Scientist - People Analytics" @ ORG_28d3793c
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-14T02:00:50.830Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T02:00:50.847Z] [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T02:00:51.066Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - People Analytics @ ORG_28d3793c in #📈・JID_fb739488
[2026-01-14T02:00:51.066Z] [BOT] ✅ Industry: Data Scientist - People Analytics @ ORG_28d3793c
[2026-01-14T02:00:52.804Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - People Analytics @ ORG_28d3793c in #💻・remote-usa
[2026-01-14T02:00:52.804Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T02:00:54.305Z] [BOT] 💾 Marked as posted: Data Scientist - People Analytics @ ORG_28d3793c (instance #1)
[2026-01-14T02:00:54.305Z] [BOT] 💾 BEFORE ARCHIVING: 1104 jobs in database
[2026-01-14T02:00:54.306Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T02:00:54.309Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T02:00:54.309Z] [BOT] ✅ Archiving complete: 1 archived, 1103 active
[2026-01-14T02:00:54.315Z] [BOT] 💾 Saved posted_jobs.json: 1103 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:00:57.317Z] [BOT] 📌 Posting 6 jobs to #💲・sales-jobs
[2026-01-14T02:00:57.317Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:00:57.707Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market @ brex in #💲・sales-jobs
[2026-01-14T02:00:57.707Z] [BOT] ✅ Industry: Account Executive, Mid Market @ brex
[2026-01-14T02:00:59.419Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Mid Market @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T02:01:00.920Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market @ brex (instance #1)
💾 BEFORE ARCHIVING: 1104 jobs in database
[2026-01-14T02:01:00.921Z] [BOT] ✅ No jobs to archive (all 1104 jobs within 7-day window)
[2026-01-14T02:01:00.931Z] [BOT] 💾 Saved posted_jobs.json: 1104 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:00.932Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market @ brex (instance #1)
[2026-01-14T02:01:00.932Z] [BOT] 💾 BEFORE ARCHIVING: 1105 jobs in database
[2026-01-14T02:01:00.933Z] [BOT] ✅ No jobs to archive (all 1105 jobs within 7-day window)
[2026-01-14T02:01:00.942Z] [BOT] 💾 Saved posted_jobs.json: 1105 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:00.942Z] [BOT] 📍 [ROUTING] "Accounting Channel Partnerships Manager" @ brex
   Category: SALES (matched: "sales")
[2026-01-14T02:01:00.942Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:01:01.130Z] [BOT] ✅ Created forum post: 🏢 Accounting Channel Partnerships Manager @ brex in #💲・sales-jobs
  ✅ Industry: Accounting Channel Partnerships Manager @ brex
[2026-01-14T02:01:03.004Z] [BOT] ✅ Created forum post: 🏢 Accounting Channel Partnerships Manager @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T02:01:04.505Z] [BOT] 💾 Marked as posted: Accounting Channel Partnerships Manager @ brex (instance #1)
[2026-01-14T02:01:04.505Z] [BOT] 💾 BEFORE ARCHIVING: 1106 jobs in database
[2026-01-14T02:01:04.506Z] [BOT] ✅ No jobs to archive (all 1106 jobs within 7-day window)
[2026-01-14T02:01:04.514Z] [BOT] 💾 Saved posted_jobs.json: 1106 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:04.514Z] [BOT] 💾 Marked as posted: Accounting Channel Partnerships Manager @ brex (instance #1)
💾 BEFORE ARCHIVING: 1107 jobs in database
[2026-01-14T02:01:04.515Z] [BOT] ✅ No jobs to archive (all 1107 jobs within 7-day window)
[2026-01-14T02:01:04.522Z] [BOT] 💾 Saved posted_jobs.json: 1107 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:04.522Z] [BOT] 📍 [ROUTING] " Accounting Manager, Legal Entity Controllership" @ brex
[2026-01-14T02:01:04.523Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:01:04.705Z] [BOT] ✅ Created forum post: 🏢  Accounting Manager, Legal Entity Controllership @ brex in #💲・sales-jobs
  ✅ Industry:  Accounting Manager, Legal Entity Controllership @ brex
[2026-01-14T02:01:06.626Z] [BOT] ✅ Created forum post: 🏢  Accounting Manager, Legal Entity Controllership @ brex in #💻・remote-usa
[2026-01-14T02:01:06.627Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T02:01:08.129Z] [BOT] 💾 Marked as posted:  Accounting Manager, Legal Entity Controllership @ brex (instance #1)
💾 BEFORE ARCHIVING: 1108 jobs in database
[2026-01-14T02:01:08.129Z] [BOT] ✅ No jobs to archive (all 1108 jobs within 7-day window)
[2026-01-14T02:01:08.138Z] [BOT] 💾 Saved posted_jobs.json: 1108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:08.138Z] [BOT] 💾 Marked as posted: Accounting Manager, Legal Entity Controllership @ brex (instance #1)
💾 BEFORE ARCHIVING: 1109 jobs in database
[2026-01-14T02:01:08.138Z] [BOT] ✅ No jobs to archive (all 1109 jobs within 7-day window)
[2026-01-14T02:01:08.146Z] [BOT] 💾 Saved posted_jobs.json: 1109 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:08.146Z] [BOT] 💾 Marked as posted: Accounting Manager, Legal Entity Controllership @ brex (instance #1)
[2026-01-14T02:01:08.146Z] [BOT] 💾 BEFORE ARCHIVING: 1110 jobs in database
[2026-01-14T02:01:08.147Z] [BOT] ✅ No jobs to archive (all 1110 jobs within 7-day window)
[2026-01-14T02:01:08.153Z] [BOT] 💾 Saved posted_jobs.json: 1110 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:08.153Z] [BOT] 💾 Marked as posted: Accounting Manager, Legal Entity Controllership @ brex (instance #1)
[2026-01-14T02:01:08.153Z] [BOT] 💾 BEFORE ARCHIVING: 1111 jobs in database
[2026-01-14T02:01:08.154Z] [BOT] ✅ No jobs to archive (all 1111 jobs within 7-day window)
[2026-01-14T02:01:08.161Z] [BOT] 💾 Saved posted_jobs.json: 1111 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:08.161Z] [BOT] 📍 [ROUTING] "Banking Specialist" @ brex
[2026-01-14T02:01:08.162Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:01:08.373Z] [BOT] ✅ Created forum post: 🏢 Banking Specialist @ brex in #💲・sales-jobs
[2026-01-14T02:01:08.373Z] [BOT] ✅ Industry: Banking Specialist @ brex
[2026-01-14T02:01:10.316Z] [BOT] ✅ Created forum post: 🏢 Banking Specialist @ brex in #🌉・san-francisco
[2026-01-14T02:01:10.316Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T02:01:11.816Z] [BOT] 💾 Marked as posted: Banking Specialist @ brex (instance #1)
[2026-01-14T02:01:11.816Z] [BOT] 💾 BEFORE ARCHIVING: 1112 jobs in database
[2026-01-14T02:01:11.817Z] [BOT] ✅ No jobs to archive (all 1112 jobs within 7-day window)
[2026-01-14T02:01:11.825Z] [BOT] 💾 Saved posted_jobs.json: 1112 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:11.825Z] [BOT] 💾 Marked as posted: Banking Specialist @ brex (instance #1)
[2026-01-14T02:01:11.825Z] [BOT] 💾 BEFORE ARCHIVING: 1113 jobs in database
[2026-01-14T02:01:11.826Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-14T02:01:11.833Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:11.833Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ brex
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:01:12.076Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive @ brex in #💲・sales-jobs
  ✅ Industry: Commercial Account Executive @ brex
[2026-01-14T02:01:13.777Z] [BOT] ✅ Created forum post: 🏢 Commercial Account Executive @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-14T02:01:15.278Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
[2026-01-14T02:01:15.278Z] [BOT] 💾 BEFORE ARCHIVING: 1114 jobs in database
[2026-01-14T02:01:15.279Z] [BOT] ✅ No jobs to archive (all 1114 jobs within 7-day window)
[2026-01-14T02:01:15.287Z] [BOT] 💾 Saved posted_jobs.json: 1114 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:15.287Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
[2026-01-14T02:01:15.287Z] [BOT] 💾 BEFORE ARCHIVING: 1115 jobs in database
[2026-01-14T02:01:15.288Z] [BOT] ✅ No jobs to archive (all 1115 jobs within 7-day window)
[2026-01-14T02:01:15.295Z] [BOT] 💾 Saved posted_jobs.json: 1115 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:15.295Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
[2026-01-14T02:01:15.295Z] [BOT] 💾 BEFORE ARCHIVING: 1116 jobs in database
[2026-01-14T02:01:15.296Z] [BOT] ✅ No jobs to archive (all 1116 jobs within 7-day window)
[2026-01-14T02:01:15.303Z] [BOT] 💾 Saved posted_jobs.json: 1116 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:15.303Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
[2026-01-14T02:01:15.303Z] [BOT] 💾 BEFORE ARCHIVING: 1117 jobs in database
[2026-01-14T02:01:15.304Z] [BOT] ✅ No jobs to archive (all 1117 jobs within 7-day window)
[2026-01-14T02:01:15.312Z] [BOT] 💾 Saved posted_jobs.json: 1117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:15.312Z] [BOT] 📍 [ROUTING] "Director, Mid Market Sales" @ brex
   Category: SALES (matched: "sales")
[2026-01-14T02:01:15.312Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:01:15.558Z] [BOT] ✅ Created forum post: 🏢 Director, Mid Market Sales @ brex in #💲・sales-jobs
[2026-01-14T02:01:15.559Z] [BOT] ✅ Industry: Director, Mid Market Sales @ brex
[2026-01-14T02:01:17.248Z] [BOT] ✅ Created forum post: 🏢 Director, Mid Market Sales @ brex in #🗽・new-york
[2026-01-14T02:01:17.248Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T02:01:18.749Z] [BOT] 💾 Marked as posted: Director, Mid Market Sales @ brex (instance #1)
💾 BEFORE ARCHIVING: 1118 jobs in database
[2026-01-14T02:01:18.750Z] [BOT] ✅ No jobs to archive (all 1118 jobs within 7-day window)
[2026-01-14T02:01:18.757Z] [BOT] 💾 Saved posted_jobs.json: 1118 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:21.758Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-14T02:01:21.758Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-14T02:01:22.012Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ brex in #💰・finance-jobs
  ✅ Industry: Associate Technical Consultant @ brex
[2026-01-14T02:01:23.795Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-14T02:01:25.297Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 1119 jobs in database
[2026-01-14T02:01:25.297Z] [BOT] ✅ No jobs to archive (all 1119 jobs within 7-day window)
[2026-01-14T02:01:25.306Z] [BOT] 💾 Saved posted_jobs.json: 1119 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:25.306Z] [BOT] 📍 [ROUTING] "Compliance Manager (Card & Rewards)" @ brex
[2026-01-14T02:01:25.306Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-14T02:01:25.490Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager (Card & Rewards) @ brex in #💰・finance-jobs
  ✅ Industry: Compliance Manager (Card & Rewards) @ brex
[2026-01-14T02:01:27.497Z] [BOT] ✅ Created forum post: 🏢 Compliance Manager (Card & Rewards) @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T02:01:28.998Z] [BOT] 💾 Marked as posted: Compliance Manager (Card & Rewards) @ brex (instance #1)
💾 BEFORE ARCHIVING: 1120 jobs in database
[2026-01-14T02:01:28.999Z] [BOT] ✅ No jobs to archive (all 1120 jobs within 7-day window)
[2026-01-14T02:01:29.009Z] [BOT] 💾 Saved posted_jobs.json: 1120 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:29.009Z] [BOT] 💾 Marked as posted: Compliance Manager (Card & Rewards) @ brex (instance #1)
💾 BEFORE ARCHIVING: 1121 jobs in database
[2026-01-14T02:01:29.010Z] [BOT] ✅ No jobs to archive (all 1121 jobs within 7-day window)
[2026-01-14T02:01:29.018Z] [BOT] 💾 Saved posted_jobs.json: 1121 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:29.018Z] [BOT] 💾 Marked as posted: Compliance Manager (Card & Rewards) @ brex (instance #1)
💾 BEFORE ARCHIVING: 1122 jobs in database
[2026-01-14T02:01:29.019Z] [BOT] ✅ No jobs to archive (all 1122 jobs within 7-day window)
[2026-01-14T02:01:29.027Z] [BOT] 💾 Saved posted_jobs.json: 1122 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:01:32.029Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-14T02:01:32.029Z] [BOT] ⏭️  Skipping duplicate: JID_ae841d15 (posted within 7 days)
[2026-01-14T02:01:32.029Z] [BOT] ⏭️  Skipping duplicate: JID_026a52e5 (posted within 7 days)
[2026-01-14T02:01:32.029Z] [BOT] ⏭️  Skipping duplicate: JID_d7efbcc3 (posted within 7 days)
[2026-01-14T02:01:32.030Z] [BOT] ⏭️  Skipping duplicate: JID_20232dd2 (posted within 7 days)
[2026-01-14T02:01:32.030Z] [BOT] ⏭️  Skipping duplicate: JID_994d5763 (posted within 7 days)
⏭️  Skipping duplicate: JID_2bca827b (posted within 7 days)
[2026-01-14T02:01:32.030Z] [BOT] ⏭️  Skipping duplicate: JID_3db1d404 (posted within 7 days)
⏭️  Skipping duplicate: JID_93136e17 (posted within 7 days)
[2026-01-14T02:01:32.030Z] [BOT] ⏭️  Skipping duplicate: JID_d71bc47c (posted within 7 days)
[2026-01-14T02:01:32.184Z] [BOT] ✅ Loaded pending queue: 2727 total (2707 pending, 20 enriched, 0 posted)
[2026-01-14T02:01:32.344Z] [BOT] ✅ Saved pending queue: 2727 total (2707 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T02:01:32.402Z] [BOT] 📂 Loaded 3275 existing routing entries
[2026-01-14T02:01:32.461Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 3284
   Timestamp: 2026-01-14T02:01:32.448Z
[2026-01-14T02:01:32.461Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T02:01:32.462Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-14T02:01:32.462Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T02:01:32.462Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #💲・sales-jobs: 6 posts
     2. #💻・remote-usa: 4 posts
[2026-01-14T02:01:32.462Z] [BOT] 3. #🗽・new-york: 2 posts
     4. #🌧️・seattle: 2 posts
     5. #💰・finance-jobs: 2 posts
[2026-01-14T02:01:32.462Z] [BOT] [STATS] Channel stats saved
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*