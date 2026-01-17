# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T23:28:30.950Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T23:27:34.994Z] ========================================
[2026-01-17T23:27:34.996Z] Discord Bot Execution Log
[2026-01-17T23:27:34.996Z] Environment: GitHub Actions
[2026-01-17T23:27:34.996Z] Node Version: v20.19.6
[2026-01-17T23:27:34.996Z] ========================================
[2026-01-17T23:27:34.996Z] Environment Variables Check:
[2026-01-17T23:27:34.996Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T23:27:34.996Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.996Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T23:27:34.997Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T23:27:34.997Z] 
Multi-Channel Configuration:
[2026-01-17T23:27:34.997Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.997Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.997Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.997Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.997Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.997Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.997Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.997Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.997Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T23:27:34.997Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T23:27:34.997Z] 
Data Files Check:
[2026-01-17T23:27:34.998Z] .github/data/new_jobs.json: ✅ Exists (10 items, 29256 bytes)
[2026-01-17T23:27:35.007Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1348754 bytes)
[2026-01-17T23:27:35.008Z] 
========================================
[2026-01-17T23:27:35.008Z] Starting Enhanced Discord Bot...
[2026-01-17T23:27:35.008Z] ========================================
[2026-01-17T23:27:35.554Z] [BOT] ✅ Loaded V2 database: 2491 jobs
[2026-01-17T23:27:36.417Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T23:27:36.418Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T23:27:36.418Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T23:27:36.537Z] [BOT] ✅ Loaded pending queue: 2882 total (2862 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst 1 - Data Warehouse at Frost
[2026-01-17T23:27:36.541Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T23:27:36.541Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-17T23:27:36.542Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-17T23:27:36.542Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-17T23:27:36.639Z] [BOT] ✅ Loaded pending queue: 2882 total (2862 pending, 20 enriched, 0 posted)
[2026-01-17T23:27:36.812Z] [BOT] ✅ Saved pending queue: 2877 total (2862 pending, 15 enriched, 0 posted)
[2026-01-17T23:27:36.813Z] [BOT] 🗑️ Removed 5 blacklisted jobs from pending queue
📋 After blacklist filter: 15 jobs (5 blacklisted)
📋 After data quality filter: 15 jobs (0 invalid)
[2026-01-17T23:27:36.813Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-17T23:27:36.813Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T23:27:36.819Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-17T23:27:36.819Z] [BOT] 📍 [ROUTING] "Data Analyst 1 - Data Warehouse" @ ORG_17636dd6
[2026-01-17T23:27:36.820Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T23:27:36.837Z] [BOT ERROR] (node:2892) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T23:27:37.089Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 - Data Warehouse @ ORG_17636dd6 in #📈・JID_fb739488
  ✅ Industry: Data Analyst 1 - Data Warehouse @ ORG_17636dd6
[2026-01-17T23:27:38.782Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 - Data Warehouse @ ORG_17636dd6 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-17T23:27:40.283Z] [BOT] 💾 Marked as posted: Data Analyst 1 - Data Warehouse @ ORG_17636dd6 (instance #1)
[2026-01-17T23:27:40.284Z] [BOT] 💾 BEFORE ARCHIVING: 2492 jobs in database
[2026-01-17T23:27:40.286Z] [BOT] ✅ No jobs to archive (all 2492 jobs within 7-day window)
[2026-01-17T23:27:40.309Z] [BOT] 💾 Saved posted_jobs.json: 2492 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:27:43.310Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-17T23:27:43.310Z] [BOT] 📍 [ROUTING] "Imaging Analyst" @ ORG_66279f04 National Financial
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T23:27:43.528Z] [BOT] ✅ Created forum post: 🏢 Imaging Analyst @ ORG_66279f04 National Financial in #💻・tech-jobs
  ✅ Industry: Imaging Analyst @ ORG_66279f04 National Financial
[2026-01-17T23:27:45.410Z] [BOT] ✅ Created forum post: 🏢 Imaging Analyst @ ORG_66279f04 National Financial in #💻・remote-usa
[2026-01-17T23:27:45.410Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T23:27:46.912Z] [BOT] 💾 Marked as posted: Imaging Analyst @ ORG_66279f04 National Financial (instance #1)
[2026-01-17T23:27:46.912Z] [BOT] 💾 BEFORE ARCHIVING: 2493 jobs in database
[2026-01-17T23:27:46.914Z] [BOT] ✅ No jobs to archive (all 2493 jobs within 7-day window)
[2026-01-17T23:27:46.932Z] [BOT] 💾 Saved posted_jobs.json: 2493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:27:46.932Z] [BOT] 📍 [ROUTING] "Member of Technical Staff - Security Engineering" @ xAI
[2026-01-17T23:27:46.933Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T23:27:47.125Z] [BOT] ✅ Created forum post: 🏢 Member of Technical Staff - Security Engineering @ xAI in #💻・tech-jobs
[2026-01-17T23:27:47.126Z] [BOT] ✅ Industry: Member of Technical Staff - Security Engineering @ xAI
[2026-01-17T23:27:48.832Z] [BOT] ✅ Created forum post: 🏢 Member of Technical Staff - Security Engineering @ xAI in #🌉・san-francisco
[2026-01-17T23:27:48.833Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T23:27:50.334Z] [BOT] 💾 Marked as posted: Member of Technical Staff - Security Engineering @ xAI (instance #1)
[2026-01-17T23:27:50.334Z] [BOT] 💾 BEFORE ARCHIVING: 2494 jobs in database
[2026-01-17T23:27:50.336Z] [BOT] ✅ No jobs to archive (all 2494 jobs within 7-day window)
[2026-01-17T23:27:50.352Z] [BOT] 💾 Saved posted_jobs.json: 2494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:27:50.352Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ ORG_e3033671 Freight Lines
[2026-01-17T23:27:50.352Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T23:27:50.768Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_e3033671 Freight Lines in #💻・tech-jobs
  ✅ Industry: Entry Level Software Developer @ ORG_e3033671 Freight Lines
[2026-01-17T23:27:52.690Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_e3033671 Freight Lines in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T23:27:54.192Z] [BOT] 💾 Marked as posted: Entry Level Software Developer @ ORG_e3033671 Freight Lines (instance #1)
[2026-01-17T23:27:54.192Z] [BOT] 💾 BEFORE ARCHIVING: 2495 jobs in database
[2026-01-17T23:27:54.194Z] [BOT] ✅ No jobs to archive (all 2495 jobs within 7-day window)
[2026-01-17T23:27:54.209Z] [BOT] 💾 Saved posted_jobs.json: 2495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:27:54.210Z] [BOT] 📍 [ROUTING] "Personal Property Pricing Specialist" @ ORG_56d3dff7
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T23:27:54.389Z] [BOT] ✅ Created forum post: 🏢 Personal Property Pricing Specialist @ ORG_56d3dff7 in #💻・tech-jobs
  ✅ Industry: Personal Property Pricing Specialist @ ORG_56d3dff7
[2026-01-17T23:27:56.079Z] [BOT] ✅ Created forum post: 🏢 Personal Property Pricing Specialist @ ORG_56d3dff7 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-17T23:27:57.581Z] [BOT] 💾 Marked as posted: Personal Property Pricing Specialist @ ORG_56d3dff7 (instance #1)
[2026-01-17T23:27:57.581Z] [BOT] 💾 BEFORE ARCHIVING: 2496 jobs in database
[2026-01-17T23:27:57.583Z] [BOT] ✅ No jobs to archive (all 2496 jobs within 7-day window)
[2026-01-17T23:27:57.598Z] [BOT] 💾 Saved posted_jobs.json: 2496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:27:57.599Z] [BOT] 📍 [ROUTING] "Research Engineer – PhD New College Grad - Architecture" @ ORG_0890f456
   Category: TECH (matched: "engineer/engineering")
[2026-01-17T23:27:57.599Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T23:27:57.811Z] [BOT] ✅ Created forum post: 🏢 Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456
[2026-01-17T23:27:59.645Z] [BOT] ✅ Created forum post: 🏢 Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-17T23:28:01.147Z] [BOT] 💾 Marked as posted: Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456 (instance #1)
[2026-01-17T23:28:01.147Z] [BOT] 💾 BEFORE ARCHIVING: 2497 jobs in database
[2026-01-17T23:28:01.149Z] [BOT] ✅ No jobs to archive (all 2497 jobs within 7-day window)
[2026-01-17T23:28:01.165Z] [BOT] 💾 Saved posted_jobs.json: 2497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:28:01.165Z] [BOT] 📍 [ROUTING] "2026 Polymer Characterization and Thermal Analysis Research Associate" @ ORG_b344d80e Aerospace Corporation
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T23:28:02.722Z] [BOT] ✅ Created forum post: 🏢 2026 Polymer Characterization and Thermal Analysis Research Associate @ ORG_b344d80e Aerospace Corporation in #💻・tech-jobs
  ✅ Industry: 2026 Polymer Characterization and Thermal Analysis Research Associate @ ORG_b344d80e Aerospace Corporation
[2026-01-17T23:28:04.517Z] [BOT] ✅ Created forum post: 🏢 2026 Polymer Characterization and Thermal Analysis Research Associate @ ORG_b344d80e Aerospace Corporation in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-17T23:28:06.017Z] [BOT] 💾 Marked as posted: 2026 Polymer Characterization and Thermal Analysis Research Associate @ ORG_b344d80e Aerospace Corporation (instance #1)
[2026-01-17T23:28:06.017Z] [BOT] 💾 BEFORE ARCHIVING: 2498 jobs in database
[2026-01-17T23:28:06.019Z] [BOT] ✅ No jobs to archive (all 2498 jobs within 7-day window)
[2026-01-17T23:28:06.035Z] [BOT] 💾 Saved posted_jobs.json: 2498 active jobs
[2026-01-17T23:28:06.036Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T23:28:09.037Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-17T23:28:09.037Z] [BOT] 📍 [ROUTING] "GIS Specialist" @ ORG_1f147d8a
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T23:28:09.267Z] [BOT] ✅ Created forum post: 🏢 GIS Specialist @ ORG_1f147d8a in #📣・marketing-jobs
[2026-01-17T23:28:09.268Z] [BOT] ✅ Industry: GIS Specialist @ ORG_1f147d8a
[2026-01-17T23:28:12.247Z] [BOT] ✅ Created forum post: 🏢 GIS Specialist @ ORG_1f147d8a in #💻・remote-usa
[2026-01-17T23:28:12.247Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T23:28:13.748Z] [BOT] 💾 Marked as posted: GIS Specialist @ ORG_1f147d8a (instance #1)
[2026-01-17T23:28:13.749Z] [BOT] 💾 BEFORE ARCHIVING: 2499 jobs in database
[2026-01-17T23:28:13.750Z] [BOT] ✅ No jobs to archive (all 2499 jobs within 7-day window)
[2026-01-17T23:28:13.767Z] [BOT] 💾 Saved posted_jobs.json: 2499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:28:13.768Z] [BOT] 📍 [ROUTING] "Design & Technical Graduate" @ ORG_9e04a5f8 Group
[2026-01-17T23:28:13.768Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-17T23:28:14.010Z] [BOT] ✅ Created forum post: 🏢 Design & Technical Graduate @ ORG_9e04a5f8 Group in #📣・marketing-jobs
[2026-01-17T23:28:14.011Z] [BOT] ✅ Industry: Design & Technical Graduate @ ORG_9e04a5f8 Group
[2026-01-17T23:28:15.773Z] [BOT] ✅ Created forum post: 🏢 Design & Technical Graduate @ ORG_9e04a5f8 Group in #💻・remote-usa
[2026-01-17T23:28:15.773Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T23:28:17.274Z] [BOT] 💾 Marked as posted: Design & Technical Graduate @ ORG_9e04a5f8 Group (instance #1)
[2026-01-17T23:28:17.275Z] [BOT] 💾 BEFORE ARCHIVING: 2500 jobs in database
[2026-01-17T23:28:17.276Z] [BOT] ✅ No jobs to archive (all 2500 jobs within 7-day window)
[2026-01-17T23:28:17.292Z] [BOT] 💾 Saved posted_jobs.json: 2500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:28:20.292Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T23:28:20.293Z] [BOT] 📍 [ROUTING] "Tax Director" @ brex
   Category: SALES (matched: "sales")
[2026-01-17T23:28:20.293Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T23:28:20.802Z] [BOT] ✅ Created forum post: 🏢 Tax Director @ brex in #💲・sales-jobs
  ✅ Industry: Tax Director @ brex
[2026-01-17T23:28:22.736Z] [BOT] ✅ Created forum post: 🏢 Tax Director @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T23:28:24.237Z] [BOT] 💾 Marked as posted: Tax Director @ brex (instance #1)
[2026-01-17T23:28:24.237Z] [BOT] 💾 BEFORE ARCHIVING: 2501 jobs in database
[2026-01-17T23:28:24.239Z] [BOT] ✅ No jobs to archive (all 2501 jobs within 7-day window)
[2026-01-17T23:28:24.254Z] [BOT] 💾 Saved posted_jobs.json: 2501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T23:28:27.255Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T23:28:27.256Z] [BOT] ⏭️  Skipping duplicate: JID_5e6ec601-warehouse_r252200 (posted within 7 days)
[2026-01-17T23:28:27.256Z] [BOT] ⏭️  Skipping duplicate: JID_d39d7b94 (posted within 7 days)
[2026-01-17T23:28:27.256Z] [BOT] ⏭️  Skipping duplicate: JID_5a36305b (posted within 7 days)
[2026-01-17T23:28:27.256Z] [BOT] ⏭️  Skipping duplicate: JID_7c7eb10d (posted within 7 days)
[2026-01-17T23:28:27.256Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
[2026-01-17T23:28:27.256Z] [BOT] ⏭️  Skipping duplicate: JID_6c657feb (posted within 7 days)
[2026-01-17T23:28:27.257Z] [BOT] ⏭️  Skipping duplicate: JID_62eab69f-cx_1-job-2908 (posted within 7 days)
[2026-01-17T23:28:27.257Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
[2026-01-17T23:28:27.257Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
[2026-01-17T23:28:27.257Z] [BOT] ⏭️  Skipping duplicate: JID_65ddcafe (posted within 7 days)
[2026-01-17T23:28:27.374Z] [BOT] ✅ Loaded pending queue: 2877 total (2862 pending, 15 enriched, 0 posted)
[2026-01-17T23:28:27.562Z] [BOT] ✅ Saved pending queue: 2877 total (2862 pending, 5 enriched, 10 posted)
[2026-01-17T23:28:27.563Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T23:28:27.622Z] [BOT] 📂 Loaded 4665 existing routing entries
[2026-01-17T23:28:27.693Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-17T23:28:27.693Z] [BOT] Total entries: 4675
   Timestamp: 2026-01-17T23:28:27.672Z
[2026-01-17T23:28:27.694Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T23:28:27.694Z] [BOT] Total attempts: 25
   Successful: 20
   Failed: 0
   Skipped: 5
[2026-01-17T23:28:27.694Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-17T23:28:27.694Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
[2026-01-17T23:28:27.695Z] [BOT] Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 5 posts
     3. #🤠・austin: 2 posts
     4. #📣・marketing-jobs: 2 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-17T23:28:27.695Z] [BOT] [STATS] Channel stats saved
[2026-01-17T23:28:29.723Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2892) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*