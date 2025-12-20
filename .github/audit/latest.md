# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T22:25:27.346Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T22:24:43.313Z] ========================================
[2025-12-20T22:24:43.315Z] Discord Bot Execution Log
[2025-12-20T22:24:43.315Z] Environment: GitHub Actions
[2025-12-20T22:24:43.315Z] Node Version: v20.19.6
[2025-12-20T22:24:43.315Z] ========================================
[2025-12-20T22:24:43.315Z] Environment Variables Check:
[2025-12-20T22:24:43.315Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T22:24:43.315Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.315Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T22:24:43.315Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T22:24:43.315Z] 
Multi-Channel Configuration:
[2025-12-20T22:24:43.315Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.316Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.316Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.316Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.316Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.316Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.316Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.316Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.316Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T22:24:43.316Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T22:24:43.316Z] 
Data Files Check:
[2025-12-20T22:24:43.317Z] .github/data/new_jobs.json: ✅ Exists (10 items, 26064 bytes)
[2025-12-20T22:24:43.320Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 446426 bytes)
[2025-12-20T22:24:43.320Z] 
========================================
[2025-12-20T22:24:43.320Z] Starting Enhanced Discord Bot...
[2025-12-20T22:24:43.320Z] ========================================
[2025-12-20T22:24:43.855Z] [BOT] ✅ Loaded V2 database: 767 jobs
[2025-12-20T22:24:44.419Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T22:24:44.420Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T22:24:44.420Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T22:24:44.420Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T22:24:44.465Z] [BOT] 🧹 Cleaned up 6 jobs older than 7 days
[2025-12-20T22:24:44.512Z] [BOT] ✅ Export complete: Added 6, Skipped 4, Total 49
[2025-12-20T22:24:44.514Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T22:24:44.514Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T22:24:44.514Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T22:24:44.515Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-20T22:24:44.515Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer 1 @ Intuit: mountain view, san diego, nyc
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T22:24:44.521Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-20T22:24:44.521Z] [BOT] 📍 [ROUTING] "Linux System Administrator" @ ORG_1ebfbc76 New Horizons
[2025-12-20T22:24:44.521Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:24:44.539Z] [BOT ERROR] (node:3559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T22:24:44.861Z] [BOT] ✅ Created forum post: 🏢 Linux System Administrator @ ORG_1ebfbc76 New Horizons in #💻・tech-jobs
[2025-12-20T22:24:44.861Z] [BOT] ✅ Industry: Linux System Administrator @ ORG_1ebfbc76 New Horizons
[2025-12-20T22:24:46.539Z] [BOT] ✅ Created forum post: 🏢 Linux System Administrator @ ORG_1ebfbc76 New Horizons in #💻・remote-usa
[2025-12-20T22:24:46.540Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T22:24:48.040Z] [BOT] 💾 Marked as posted: Linux System Administrator @ ORG_1ebfbc76 New Horizons (instance #1)
[2025-12-20T22:24:48.040Z] [BOT] 💾 BEFORE ARCHIVING: 768 jobs in database
[2025-12-20T22:24:48.041Z] [BOT] ✅ No jobs to archive (all 768 jobs within 7-day window)
[2025-12-20T22:24:48.052Z] [BOT] 💾 Saved posted_jobs.json: 768 active jobs
[2025-12-20T22:24:48.053Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:24:48.053Z] [BOT] 📍 [ROUTING] "Business Solutions Data Specialist" @ ORG_4da06497 Logistics
[2025-12-20T22:24:48.053Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:24:48.277Z] [BOT] ✅ Created forum post: 🏢 Business Solutions Data Specialist @ ORG_4da06497 Logistics in #💻・tech-jobs
  ✅ Industry: Business Solutions Data Specialist @ ORG_4da06497 Logistics
[2025-12-20T22:24:49.972Z] [BOT] ✅ Created forum post: 🏢 Business Solutions Data Specialist @ ORG_4da06497 Logistics in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-20T22:24:51.473Z] [BOT] 💾 Marked as posted: Business Solutions Data Specialist @ ORG_4da06497 Logistics (instance #1)
[2025-12-20T22:24:51.473Z] [BOT] 💾 BEFORE ARCHIVING: 769 jobs in database
[2025-12-20T22:24:51.474Z] [BOT] ✅ No jobs to archive (all 769 jobs within 7-day window)
[2025-12-20T22:24:51.480Z] [BOT] 💾 Saved posted_jobs.json: 769 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:24:51.480Z] [BOT] 📍 [ROUTING] "Financial Systems Analyst 1" @ ORG_c625ca57 Brisbois
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:24:51.686Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #💻・tech-jobs
  ✅ Industry: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois
[2025-12-20T22:24:53.412Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:24:54.912Z] [BOT] 💾 Marked as posted: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois (instance #1)
[2025-12-20T22:24:54.912Z] [BOT] 💾 BEFORE ARCHIVING: 770 jobs in database
[2025-12-20T22:24:54.913Z] [BOT] ✅ No jobs to archive (all 770 jobs within 7-day window)
[2025-12-20T22:24:54.920Z] [BOT] 💾 Saved posted_jobs.json: 770 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:24:54.921Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
[2025-12-20T22:24:54.921Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:24:55.209Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-20T22:24:56.949Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-20T22:24:58.450Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-20T22:24:58.450Z] [BOT] 💾 BEFORE ARCHIVING: 771 jobs in database
[2025-12-20T22:24:58.451Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2025-12-20T22:24:58.457Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:24:58.458Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
💾 BEFORE ARCHIVING: 772 jobs in database
[2025-12-20T22:24:58.458Z] [BOT] ✅ No jobs to archive (all 772 jobs within 7-day window)
[2025-12-20T22:24:58.466Z] [BOT] 💾 Saved posted_jobs.json: 772 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:24:58.466Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-20T22:24:58.466Z] [BOT] 💾 BEFORE ARCHIVING: 773 jobs in database
[2025-12-20T22:24:58.467Z] [BOT] ✅ No jobs to archive (all 773 jobs within 7-day window)
[2025-12-20T22:24:58.473Z] [BOT] 💾 Saved posted_jobs.json: 773 active jobs
[2025-12-20T22:24:58.473Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:24:58.473Z] [BOT] 📍 [ROUTING] "Softare Engineer 1" @ ORG_0bbe3cb1
[2025-12-20T22:24:58.474Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:24:58.706Z] [BOT] ✅ Created forum post: 🏢 Softare Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Softare Engineer 1 @ ORG_0bbe3cb1
[2025-12-20T22:25:00.382Z] [BOT] ✅ Created forum post: 🏢 Softare Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-20T22:25:01.883Z] [BOT] 💾 Marked as posted: Softare Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-20T22:25:01.884Z] [BOT] 💾 BEFORE ARCHIVING: 774 jobs in database
[2025-12-20T22:25:01.884Z] [BOT] ✅ No jobs to archive (all 774 jobs within 7-day window)
[2025-12-20T22:25:01.891Z] [BOT] 💾 Saved posted_jobs.json: 774 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:25:04.892Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-20T22:25:04.892Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_3442dbaa
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T22:25:04.892Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-20T22:25:05.130Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_3442dbaa in #🤖・ai-jobs
  ✅ Industry: Data Engineer @ ORG_3442dbaa
[2025-12-20T22:25:06.900Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_3442dbaa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:25:08.401Z] [BOT] 💾 Marked as posted: Data Engineer @ ORG_3442dbaa (instance #1)
[2025-12-20T22:25:08.401Z] [BOT] 💾 BEFORE ARCHIVING: 775 jobs in database
[2025-12-20T22:25:08.402Z] [BOT] ✅ No jobs to archive (all 775 jobs within 7-day window)
[2025-12-20T22:25:08.409Z] [BOT] 💾 Saved posted_jobs.json: 775 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:25:11.410Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-20T22:25:11.410Z] [BOT] 📍 [ROUTING] "Cross Asset Market Data Analyst" @ ORG_d9056112inental Exchange
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-20T22:25:11.410Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T22:25:11.665Z] [BOT] ✅ Created forum post: 🏢 Cross Asset Market Data Analyst @ ORG_d9056112inental Exchange in #📈・JID_fb739488
  ✅ Industry: Cross Asset Market Data Analyst @ ORG_d9056112inental Exchange
[2025-12-20T22:25:13.431Z] [BOT] ✅ Created forum post: 🏢 Cross Asset Market Data Analyst @ ORG_d9056112inental Exchange in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-20T22:25:14.931Z] [BOT] 💾 Marked as posted: Cross Asset Market Data Analyst @ ORG_d9056112inental Exchange (instance #1)
[2025-12-20T22:25:14.931Z] [BOT] 💾 BEFORE ARCHIVING: 776 jobs in database
[2025-12-20T22:25:14.932Z] [BOT] ✅ No jobs to archive (all 776 jobs within 7-day window)
[2025-12-20T22:25:14.940Z] [BOT] 💾 Saved posted_jobs.json: 776 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:25:17.941Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-20T22:25:17.941Z] [BOT] 📍 [ROUTING] "Early-Career Water Resources / Modeling Professional" @ ORG_77d789fe Consultants
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-20T22:25:18.189Z] [BOT] ✅ Created forum post: 🏢 Early-Career Water Resources / Modeling Professional @ ORG_77d789fe Consultants in #🩺・healthcare-jobs
  ✅ Industry: Early-Career Water Resources / Modeling Professional @ ORG_77d789fe Consultants
[2025-12-20T22:25:19.973Z] [BOT] ✅ Created forum post: 🏢 Early-Career Water Resources / Modeling Professional @ ORG_77d789fe Consultants in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:25:21.474Z] [BOT] 💾 Marked as posted: Early-Career Water Resources / Modeling Professional @ ORG_77d789fe Consultants (instance #1)
[2025-12-20T22:25:21.474Z] [BOT] 💾 BEFORE ARCHIVING: 777 jobs in database
[2025-12-20T22:25:21.475Z] [BOT] ✅ No jobs to archive (all 777 jobs within 7-day window)
[2025-12-20T22:25:21.483Z] [BOT] 💾 Saved posted_jobs.json: 777 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:25:24.483Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-20T22:25:24.484Z] [BOT] ⏭️  Skipping duplicate: JID_c965d433 (posted within 7 days)
[2025-12-20T22:25:24.484Z] [BOT] ⏭️  Skipping duplicate: JID_26ec5903 (posted within 7 days)
[2025-12-20T22:25:24.484Z] [BOT] ⏭️  Skipping duplicate: JID_79451895 (posted within 7 days)
[2025-12-20T22:25:24.484Z] [BOT] ⏭️  Skipping duplicate: JID_c7404514 (posted within 7 days)
[2025-12-20T22:25:24.484Z] [BOT] ⏭️  Skipping duplicate: JID_1e2d4b7e (posted within 7 days)
⏭️  Skipping duplicate: JID_b05ed6bb (posted within 7 days)
[2025-12-20T22:25:24.484Z] [BOT] ⏭️  Skipping duplicate: JID_2c981afd (posted within 7 days)
⏭️  Skipping duplicate: JID_56e17787 (posted within 7 days)
[2025-12-20T22:25:24.487Z] [BOT] ✅ Loaded pending queue: 173 total (153 pending, 20 enriched, 0 posted)
[2025-12-20T22:25:24.490Z] [BOT] ✅ Saved pending queue: 173 total (153 pending, 12 enriched, 8 posted)
[2025-12-20T22:25:24.490Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T22:25:24.534Z] [BOT] 📂 Loaded 835 existing routing entries
[2025-12-20T22:25:24.585Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 843
   Timestamp: 2025-12-20T22:25:24.578Z
[2025-12-20T22:25:24.585Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T22:25:24.586Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 4 posts
     3. #🌄・mountain-view: 2 posts
     4. #🦢・los-angeles: 1 posts
     5. #🤖・ai-jobs: 1 posts
[STATS] Channel stats saved
[2025-12-20T22:25:26.597Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*