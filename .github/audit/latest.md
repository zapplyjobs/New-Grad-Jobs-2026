# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T17:48:59.645Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T17:48:17.377Z] ========================================
[2025-12-21T17:48:17.379Z] Discord Bot Execution Log
[2025-12-21T17:48:17.379Z] Environment: GitHub Actions
[2025-12-21T17:48:17.379Z] Node Version: v20.19.6
[2025-12-21T17:48:17.379Z] ========================================
[2025-12-21T17:48:17.379Z] Environment Variables Check:
[2025-12-21T17:48:17.379Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T17:48:17.380Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.380Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T17:48:17.380Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T17:48:17.380Z] 
Multi-Channel Configuration:
[2025-12-21T17:48:17.380Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.380Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.380Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.380Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.380Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.380Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.380Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.381Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.381Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T17:48:17.381Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T17:48:17.381Z] 
Data Files Check:
[2025-12-21T17:48:17.382Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57940 bytes)
[2025-12-21T17:48:17.385Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 482876 bytes)
[2025-12-21T17:48:17.385Z] 
========================================
[2025-12-21T17:48:17.385Z] Starting Enhanced Discord Bot...
[2025-12-21T17:48:17.385Z] ========================================
[2025-12-21T17:48:18.031Z] [BOT] ✅ Loaded V2 database: 826 jobs
[2025-12-21T17:48:18.509Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T17:48:18.510Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T17:48:18.510Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T17:48:18.511Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T17:48:18.613Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 97
[2025-12-21T17:48:18.615Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T17:48:18.615Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T17:48:18.616Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T17:48:18.616Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T17:48:18.617Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-21T17:48:18.617Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Data Insight Analyst @ ORG_f3f2248d Grumman: virginia, edwards afb
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T17:48:18.621Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-21T17:48:18.622Z] [BOT] 📍 [ROUTING] "Systems Engineer 1" @ ORG_fee50aac
[2025-12-21T17:48:18.622Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T17:48:18.626Z] [BOT ERROR] (node:2622) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T17:48:18.827Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_fee50aac in #🤖・ai-jobs
[2025-12-21T17:48:18.827Z] [BOT] ✅ Industry: Systems Engineer 1 @ ORG_fee50aac
[2025-12-21T17:48:20.575Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_fee50aac in #💻・remote-usa
[2025-12-21T17:48:20.576Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T17:48:22.076Z] [BOT] 💾 Marked as posted: Systems Engineer 1 @ ORG_fee50aac (instance #1)
[2025-12-21T17:48:22.076Z] [BOT] 💾 BEFORE ARCHIVING: 827 jobs in database
[2025-12-21T17:48:22.077Z] [BOT] ✅ No jobs to archive (all 827 jobs within 7-day window)
[2025-12-21T17:48:22.088Z] [BOT] 💾 Saved posted_jobs.json: 827 active jobs
[2025-12-21T17:48:22.088Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T17:48:22.088Z] [BOT] 📍 [ROUTING] "Research Associate - Lti - School of Computer Science" @ ORG_15a5b314 Mellon University
[2025-12-21T17:48:22.088Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2025-12-21T17:48:22.515Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University in #🤖・ai-jobs
[2025-12-21T17:48:22.515Z] [BOT] ✅ Industry: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University
[2025-12-21T17:48:24.217Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University in #💻・remote-usa
[2025-12-21T17:48:24.217Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T17:48:25.718Z] [BOT] 💾 Marked as posted: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University (instance #1)
[2025-12-21T17:48:25.719Z] [BOT] 💾 BEFORE ARCHIVING: 828 jobs in database
[2025-12-21T17:48:25.719Z] [BOT] ✅ No jobs to archive (all 828 jobs within 7-day window)
[2025-12-21T17:48:25.726Z] [BOT] 💾 Saved posted_jobs.json: 828 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T17:48:28.727Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2025-12-21T17:48:28.727Z] [BOT] 📍 [ROUTING] "Data Engineer 3" @ ORG_3eab285c
[2025-12-21T17:48:28.727Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T17:48:28.930Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 3 @ ORG_3eab285c in #📈・JID_fb739488
[2025-12-21T17:48:28.930Z] [BOT] ✅ Industry: Data Engineer 3 @ ORG_3eab285c
[2025-12-21T17:48:30.594Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 3 @ ORG_3eab285c in #☀️・sunnyvale
[2025-12-21T17:48:30.594Z] [BOT] ✅ Location: ☀️・sunnyvale
[2025-12-21T17:48:32.094Z] [BOT] 💾 Marked as posted: Data Engineer 3 @ ORG_3eab285c (instance #1)
[2025-12-21T17:48:32.094Z] [BOT] 💾 BEFORE ARCHIVING: 829 jobs in database
[2025-12-21T17:48:32.095Z] [BOT] ✅ No jobs to archive (all 829 jobs within 7-day window)
[2025-12-21T17:48:32.101Z] [BOT] 💾 Saved posted_jobs.json: 829 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T17:48:32.102Z] [BOT] 📍 [ROUTING] "People Analytics & Technology Associate" @ ORG_d5ad4495
[2025-12-21T17:48:32.102Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T17:48:32.352Z] [BOT] ✅ Created forum post: 🏢 People Analytics & Technology Associate @ ORG_d5ad4495 in #📈・JID_fb739488
[2025-12-21T17:48:32.352Z] [BOT] ✅ Industry: People Analytics & Technology Associate @ ORG_d5ad4495
[2025-12-21T17:48:34.143Z] [BOT] ✅ Created forum post: 🏢 People Analytics & Technology Associate @ ORG_d5ad4495 in #🚌・boston
[2025-12-21T17:48:34.143Z] [BOT] ✅ Location: 🚌・boston
[2025-12-21T17:48:35.644Z] [BOT] 💾 Marked as posted: People Analytics & Technology Associate @ ORG_d5ad4495 (instance #1)
[2025-12-21T17:48:35.645Z] [BOT] 💾 BEFORE ARCHIVING: 830 jobs in database
[2025-12-21T17:48:35.645Z] [BOT] ✅ No jobs to archive (all 830 jobs within 7-day window)
[2025-12-21T17:48:35.651Z] [BOT] 💾 Saved posted_jobs.json: 830 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T17:48:35.651Z] [BOT] 📍 [ROUTING] "Data Engineer 1" @ ORG_7854eeec
[2025-12-21T17:48:35.652Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T17:48:35.853Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_7854eeec in #📈・JID_fb739488
[2025-12-21T17:48:35.854Z] [BOT] ✅ Industry: Data Engineer 1 @ ORG_7854eeec
[2025-12-21T17:48:37.628Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_7854eeec in #🤠・austin
[2025-12-21T17:48:37.629Z] [BOT] ✅ Location: 🤠・austin
[2025-12-21T17:48:39.129Z] [BOT] 💾 Marked as posted: Data Engineer 1 @ ORG_7854eeec (instance #1)
[2025-12-21T17:48:39.129Z] [BOT] 💾 BEFORE ARCHIVING: 831 jobs in database
[2025-12-21T17:48:39.130Z] [BOT] ✅ No jobs to archive (all 831 jobs within 7-day window)
[2025-12-21T17:48:39.136Z] [BOT] 💾 Saved posted_jobs.json: 831 active jobs
[2025-12-21T17:48:39.136Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T17:48:42.137Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-21T17:48:42.137Z] [BOT] 📍 [ROUTING] "People Insights Analyst" @ ORG_f3f2248d Grumman
[2025-12-21T17:48:42.137Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-21T17:48:42.591Z] [BOT] ✅ Created forum post: 🏢 People Insights Analyst @ ORG_f3f2248d Grumman in #🩺・healthcare-jobs
[2025-12-21T17:48:42.591Z] [BOT] ✅ Industry: People Insights Analyst @ ORG_f3f2248d Grumman
[2025-12-21T17:48:44.245Z] [BOT] ✅ Created forum post: 🏢 People Insights Analyst @ ORG_f3f2248d Grumman in #☀️・sunnyvale
[2025-12-21T17:48:44.246Z] [BOT] ✅ Location: ☀️・sunnyvale
[2025-12-21T17:48:45.746Z] [BOT] 💾 Marked as posted: People Insights Analyst @ ORG_f3f2248d Grumman (instance #1)
[2025-12-21T17:48:45.746Z] [BOT] 💾 BEFORE ARCHIVING: 832 jobs in database
[2025-12-21T17:48:45.747Z] [BOT] ✅ No jobs to archive (all 832 jobs within 7-day window)
[2025-12-21T17:48:45.755Z] [BOT] 💾 Saved posted_jobs.json: 832 active jobs
[2025-12-21T17:48:45.755Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T17:48:48.755Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-21T17:48:48.755Z] [BOT] 📍 [ROUTING] "Data Insight Analyst" @ ORG_f3f2248d Grumman
[2025-12-21T17:48:48.755Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T17:48:48.902Z] [BOT] ✅ Created forum post: 🏢 Data Insight Analyst @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2025-12-21T17:48:48.903Z] [BOT] ✅ Industry: Data Insight Analyst @ ORG_f3f2248d Grumman
[2025-12-21T17:48:50.403Z] [BOT] 💾 Marked as posted: Data Insight Analyst @ ORG_f3f2248d Grumman (instance #1)
[2025-12-21T17:48:50.404Z] [BOT] 💾 BEFORE ARCHIVING: 833 jobs in database
[2025-12-21T17:48:50.404Z] [BOT] ✅ No jobs to archive (all 833 jobs within 7-day window)
[2025-12-21T17:48:50.413Z] [BOT] 💾 Saved posted_jobs.json: 833 active jobs
[2025-12-21T17:48:50.413Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T17:48:50.413Z] [BOT] 💾 Marked as posted: Data Insight Analyst - Principal Data Insight Analyst @ ORG_f3f2248d Grumman (instance #1)
💾 BEFORE ARCHIVING: 834 jobs in database
[2025-12-21T17:48:50.414Z] [BOT] ✅ No jobs to archive (all 834 jobs within 7-day window)
[2025-12-21T17:48:50.420Z] [BOT] 💾 Saved posted_jobs.json: 834 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T17:48:50.421Z] [BOT] 📍 [ROUTING] "Programmer Analyst – Associate or Mid-Level" @ ORG_b344d80e Boeing Company
[2025-12-21T17:48:50.421Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T17:48:50.777Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2025-12-21T17:48:50.777Z] [BOT] ✅ Industry: Programmer Analyst – Associate or Mid-Level @ ORG_b344d80e Boeing Company
[2025-12-21T17:48:52.468Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2025-12-21T17:48:52.468Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T17:48:53.969Z] [BOT] 💾 Marked as posted: Programmer Analyst – Associate or Mid-Level @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-21T17:48:53.969Z] [BOT] 💾 BEFORE ARCHIVING: 835 jobs in database
[2025-12-21T17:48:53.970Z] [BOT] ✅ No jobs to archive (all 835 jobs within 7-day window)
[2025-12-21T17:48:53.977Z] [BOT] 💾 Saved posted_jobs.json: 835 active jobs
[2025-12-21T17:48:53.977Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T17:48:56.977Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-21T17:48:56.978Z] [BOT] ⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_9438ab40-i_r2116636 (posted within 7 days)
[2025-12-21T17:48:56.978Z] [BOT] ⏭️  Skipping duplicate: JID_bb869606-iii_r-2350035 (posted within 7 days)
[2025-12-21T17:48:56.978Z] [BOT] ⏭️  Skipping duplicate: JID_458970e2-associate_jr100273 (posted within 7 days)
[2025-12-21T17:48:56.978Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9bd015ce-3_r10214776 (posted within 7 days)
[2025-12-21T17:48:56.978Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_8e786d4b-analyst_r10217444-1 (posted within 7 days)
[2025-12-21T17:48:56.978Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_7aef10de-_jr2025482611-1 (posted within 7 days)
[2025-12-21T17:48:56.979Z] [BOT] ⏭️  Skipping duplicate: JID_6d1d25a4-i_r0114228 (posted within 7 days)
[2025-12-21T17:48:56.979Z] [BOT] ⏭️  Skipping duplicate: JID_26d26452-science_2023968 (posted within 7 days)
[2025-12-21T17:48:56.980Z] [BOT] ✅ Loaded pending queue: 115 total (95 pending, 20 enriched, 0 posted)
[2025-12-21T17:48:56.982Z] [BOT] ✅ Saved pending queue: 115 total (95 pending, 12 enriched, 8 posted)
[2025-12-21T17:48:56.982Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T17:48:57.024Z] [BOT] 📂 Loaded 890 existing routing entries
[2025-12-21T17:48:57.068Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2025-12-21T17:48:57.068Z] [BOT] Total entries: 898
   Timestamp: 2025-12-21T17:48:57.063Z
[2025-12-21T17:48:57.069Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T17:48:57.069Z] [BOT] Total attempts: 16
   Successful: 15
   Failed: 0
   Skipped: 1
[2025-12-21T17:48:57.069Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-21T17:48:57.069Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 8
   Top channels:
     1. #💻・remote-usa: 3 posts
[2025-12-21T17:48:57.069Z] [BOT] 2. #📈・JID_fb739488: 3 posts
     3. #🤖・ai-jobs: 2 posts
     4. #☀️・sunnyvale: 2 posts
     5. #💻・tech-jobs: 2 posts
[2025-12-21T17:48:57.070Z] [BOT] [STATS] Channel stats saved
[2025-12-21T17:48:59.080Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2622) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*