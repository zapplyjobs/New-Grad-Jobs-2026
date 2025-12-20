# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T23:05:06.266Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T23:04:12.830Z] ========================================
[2025-12-20T23:04:12.832Z] Discord Bot Execution Log
[2025-12-20T23:04:12.832Z] Environment: GitHub Actions
[2025-12-20T23:04:12.832Z] Node Version: v20.19.6
[2025-12-20T23:04:12.832Z] ========================================
[2025-12-20T23:04:12.832Z] Environment Variables Check:
[2025-12-20T23:04:12.832Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T23:04:12.833Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.833Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T23:04:12.833Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T23:04:12.833Z] 
Multi-Channel Configuration:
[2025-12-20T23:04:12.833Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.833Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.833Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.833Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.833Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.833Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.833Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.833Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.834Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T23:04:12.834Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T23:04:12.834Z] 
Data Files Check:
[2025-12-20T23:04:12.834Z] .github/data/new_jobs.json: ✅ Exists (10 items, 40692 bytes)
[2025-12-20T23:04:12.838Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 464216 bytes)
[2025-12-20T23:04:12.838Z] 
========================================
[2025-12-20T23:04:12.838Z] Starting Enhanced Discord Bot...
[2025-12-20T23:04:12.838Z] ========================================
[2025-12-20T23:04:13.364Z] [BOT] ✅ Loaded V2 database: 797 jobs
[2025-12-20T23:04:14.178Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T23:04:14.178Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T23:04:14.178Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T23:04:14.181Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T23:04:14.272Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 69
[2025-12-20T23:04:14.275Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T23:04:14.275Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T23:04:14.275Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T23:04:14.276Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-20T23:04:14.276Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T23:04:14.281Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-20T23:04:14.281Z] [BOT] 📍 [ROUTING] "Analyst 1 - Full Stack" @ ORG_07b9fafa
[2025-12-20T23:04:14.281Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T23:04:14.281Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2025-12-20T23:04:14.286Z] [BOT ERROR] (node:2834) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T23:04:14.731Z] [BOT] ✅ Created forum post: 💰 Analyst 1 - Full Stack @ ORG_07b9fafa in #🤖・ai-jobs
[2025-12-20T23:04:14.731Z] [BOT] ✅ Industry: Analyst 1 - Full Stack @ ORG_07b9fafa
[2025-12-20T23:04:16.486Z] [BOT] ✅ Created forum post: 💰 Analyst 1 - Full Stack @ ORG_07b9fafa in #🌉・san-francisco
[2025-12-20T23:04:16.486Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T23:04:17.987Z] [BOT] 💾 Marked as posted: Analyst 1 - Full Stack @ ORG_07b9fafa (instance #1)
[2025-12-20T23:04:17.987Z] [BOT] 💾 BEFORE ARCHIVING: 798 jobs in database
[2025-12-20T23:04:17.988Z] [BOT] ✅ No jobs to archive (all 798 jobs within 7-day window)
[2025-12-20T23:04:18.003Z] [BOT] 💾 Saved posted_jobs.json: 798 active jobs
[2025-12-20T23:04:18.003Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:04:18.003Z] [BOT] 📍 [ROUTING] "Senior Associate Software Engineer - B2B Commerce" @ ORG_c279b06b
[2025-12-20T23:04:18.003Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T23:04:18.163Z] [BOT] ✅ Created forum post: 🏢 Senior Associate Software Engineer - B2B Commerce @ ORG_c279b06b in #🤖・ai-jobs
[2025-12-20T23:04:18.163Z] [BOT] ✅ Industry: Senior Associate Software Engineer - B2B Commerce @ ORG_c279b06b
[2025-12-20T23:04:19.932Z] [BOT] ✅ Created forum post: 🏢 Senior Associate Software Engineer - B2B Commerce @ ORG_c279b06b in #🌉・san-francisco
[2025-12-20T23:04:19.932Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T23:04:21.431Z] [BOT] 💾 Marked as posted: Senior Associate Software Engineer - B2B Commerce @ ORG_c279b06b (instance #1)
[2025-12-20T23:04:21.431Z] [BOT] 💾 BEFORE ARCHIVING: 799 jobs in database
[2025-12-20T23:04:21.432Z] [BOT] ✅ No jobs to archive (all 799 jobs within 7-day window)
[2025-12-20T23:04:21.440Z] [BOT] 💾 Saved posted_jobs.json: 799 active jobs
[2025-12-20T23:04:21.440Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:04:24.441Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-20T23:04:24.444Z] [BOT] 📍 [ROUTING] "Vie – Research Associate - m/f/d" @ ORG_29dc8914
[2025-12-20T23:04:24.444Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:04:24.858Z] [BOT] ✅ Created forum post: 🏢 Vie – Research Associate - m/f/d @ ORG_29dc8914 in #💻・tech-jobs
[2025-12-20T23:04:24.858Z] [BOT] ✅ Industry: Vie – Research Associate - m/f/d @ ORG_29dc8914
[2025-12-20T23:04:26.557Z] [BOT] ✅ Created forum post: 🏢 Vie – Research Associate - m/f/d @ ORG_29dc8914 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-20T23:04:28.057Z] [BOT] 💾 Marked as posted: Vie – Research Associate - m/f/d @ ORG_29dc8914 (instance #1)
[2025-12-20T23:04:28.057Z] [BOT] 💾 BEFORE ARCHIVING: 800 jobs in database
[2025-12-20T23:04:28.058Z] [BOT] ✅ No jobs to archive (all 800 jobs within 7-day window)
[2025-12-20T23:04:28.065Z] [BOT] 💾 Saved posted_jobs.json: 800 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:04:28.066Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer-DevSecOps" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
[2025-12-20T23:04:28.066Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:04:28.303Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer-DevSecOps @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2025-12-20T23:04:28.303Z] [BOT] ✅ Industry: Entry Level Software Engineer-DevSecOps @ ORG_b344d80e Boeing Company
[2025-12-20T23:04:30.058Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer-DevSecOps @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T23:04:31.559Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer-DevSecOps @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-20T23:04:31.559Z] [BOT] 💾 BEFORE ARCHIVING: 801 jobs in database
[2025-12-20T23:04:31.560Z] [BOT] ✅ No jobs to archive (all 801 jobs within 7-day window)
[2025-12-20T23:04:31.569Z] [BOT] 💾 Saved posted_jobs.json: 801 active jobs
[2025-12-20T23:04:31.569Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:04:31.569Z] [BOT] 📍 [ROUTING] "Entry-Level Software Developer" @ ORG_d51736fa
[2025-12-20T23:04:31.569Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:04:31.792Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Developer @ ORG_d51736fa in #💻・tech-jobs
  ✅ Industry: Entry-Level Software Developer @ ORG_d51736fa
[2025-12-20T23:04:33.469Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Developer @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T23:04:34.969Z] [BOT] 💾 Marked as posted: Entry-Level Software Developer @ ORG_d51736fa (instance #1)
[2025-12-20T23:04:34.969Z] [BOT] 💾 BEFORE ARCHIVING: 802 jobs in database
[2025-12-20T23:04:34.970Z] [BOT] ✅ No jobs to archive (all 802 jobs within 7-day window)
[2025-12-20T23:04:34.978Z] [BOT] 💾 Saved posted_jobs.json: 802 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:04:34.979Z] [BOT] 📍 [ROUTING] "Data Operator" @ ORG_2bc58fcc League Baseball
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:04:35.110Z] [BOT] ✅ Created forum post: 🏢 Data Operator @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
  ✅ Industry: Data Operator @ ORG_2bc58fcc League Baseball
[2025-12-20T23:04:36.877Z] [BOT] ✅ Created forum post: 🏢 Data Operator @ ORG_2bc58fcc League Baseball in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T23:04:38.378Z] [BOT] 💾 Marked as posted: Data Operator @ ORG_2bc58fcc League Baseball (instance #1)
[2025-12-20T23:04:38.378Z] [BOT] 💾 BEFORE ARCHIVING: 803 jobs in database
[2025-12-20T23:04:38.379Z] [BOT] ✅ No jobs to archive (all 803 jobs within 7-day window)
[2025-12-20T23:04:38.388Z] [BOT] 💾 Saved posted_jobs.json: 803 active jobs
[2025-12-20T23:04:38.388Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:04:38.388Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Scm" @ ORG_864269d2 Health System
[2025-12-20T23:04:38.388Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:04:38.590Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Scm @ ORG_864269d2 Health System in #💻・tech-jobs
[2025-12-20T23:04:38.590Z] [BOT] ✅ Industry: Software Engineer 1 - Scm @ ORG_864269d2 Health System
[2025-12-20T23:04:40.445Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Scm @ ORG_864269d2 Health System in #🌧️・seattle
[2025-12-20T23:04:40.445Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T23:04:41.946Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Scm @ ORG_864269d2 Health System (instance #1)
[2025-12-20T23:04:41.946Z] [BOT] 💾 BEFORE ARCHIVING: 804 jobs in database
[2025-12-20T23:04:41.947Z] [BOT] ✅ No jobs to archive (all 804 jobs within 7-day window)
[2025-12-20T23:04:41.955Z] [BOT] 💾 Saved posted_jobs.json: 804 active jobs
[2025-12-20T23:04:41.955Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:04:44.954Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-20T23:04:44.955Z] [BOT] 📍 [ROUTING] "Shopfront Analyst - Contractor Role" @ ORG_b870b780 Electronics
[2025-12-20T23:04:44.955Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-20T23:04:45.283Z] [BOT] ✅ Created forum post: 🏢 Shopfront Analyst - Contractor Role @ ORG_b870b780 Electronics in #📈・JID_fb739488
[2025-12-20T23:04:45.283Z] [BOT] ✅ Industry: Shopfront Analyst - Contractor Role @ ORG_b870b780 Electronics
[2025-12-20T23:04:46.950Z] [BOT] ✅ Created forum post: 🏢 Shopfront Analyst - Contractor Role @ ORG_b870b780 Electronics in #💻・remote-usa
[2025-12-20T23:04:46.950Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T23:04:48.450Z] [BOT] 💾 Marked as posted: Shopfront Analyst - Contractor Role @ ORG_b870b780 Electronics (instance #1)
[2025-12-20T23:04:48.450Z] [BOT] 💾 BEFORE ARCHIVING: 805 jobs in database
[2025-12-20T23:04:48.451Z] [BOT] ✅ No jobs to archive (all 805 jobs within 7-day window)
[2025-12-20T23:04:48.460Z] [BOT] 💾 Saved posted_jobs.json: 805 active jobs
[2025-12-20T23:04:48.460Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:04:48.460Z] [BOT] 📍 [ROUTING] "IT Data Analyst 1" @ ORG_ad5ea6aa
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T23:04:48.614Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst 1 @ ORG_ad5ea6aa in #📈・JID_fb739488
[2025-12-20T23:04:48.614Z] [BOT] ✅ Industry: IT Data Analyst 1 @ ORG_ad5ea6aa
[2025-12-20T23:04:50.263Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst 1 @ ORG_ad5ea6aa in #🤠・austin
[2025-12-20T23:04:50.263Z] [BOT] ✅ Location: 🤠・austin
[2025-12-20T23:04:51.763Z] [BOT] 💾 Marked as posted: IT Data Analyst 1 @ ORG_ad5ea6aa (instance #1)
[2025-12-20T23:04:51.763Z] [BOT] 💾 BEFORE ARCHIVING: 806 jobs in database
[2025-12-20T23:04:51.764Z] [BOT] ✅ No jobs to archive (all 806 jobs within 7-day window)
[2025-12-20T23:04:51.777Z] [BOT] 💾 Saved posted_jobs.json: 806 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:04:54.777Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-20T23:04:54.777Z] [BOT] 📍 [ROUTING] "Systems Analyst" @ ORG_56d3e805 Computer
   Category: MARKETING (matched: "growth")
[2025-12-20T23:04:54.777Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-20T23:04:57.419Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_56d3e805 Computer in #📣・marketing-jobs
  ✅ Industry: Systems Analyst @ ORG_56d3e805 Computer
[2025-12-20T23:04:59.091Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_56d3e805 Computer in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T23:05:00.591Z] [BOT] 💾 Marked as posted: Systems Analyst @ ORG_56d3e805 Computer (instance #1)
[2025-12-20T23:05:00.592Z] [BOT] 💾 BEFORE ARCHIVING: 807 jobs in database
[2025-12-20T23:05:00.593Z] [BOT] ✅ No jobs to archive (all 807 jobs within 7-day window)
[2025-12-20T23:05:00.601Z] [BOT] 💾 Saved posted_jobs.json: 807 active jobs
[2025-12-20T23:05:00.601Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:05:03.602Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-20T23:05:03.602Z] [BOT] ⏭️  Skipping duplicate: JID_6e06cb04 (posted within 7 days)
[2025-12-20T23:05:03.603Z] [BOT] ⏭️  Skipping duplicate: JID_0c1f72ff-_r10082121 (posted within 7 days)
[2025-12-20T23:05:03.603Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ffec05f8-devsecops_jr2025488890-1 (posted within 7 days)
[2025-12-20T23:05:03.603Z] [BOT] ⏭️  Skipping duplicate: JID_1e35b707-external_careers-JID_6c691c3b-commerce_jr0140543 (posted within 7 days)
[2025-12-20T23:05:03.603Z] [BOT] ⏭️  Skipping duplicate: JID_96ce2871 (posted within 7 days)
[2025-12-20T23:05:03.603Z] [BOT] ⏭️  Skipping duplicate: JID_1e13ef53-_r-00172273 (posted within 7 days)
[2025-12-20T23:05:03.603Z] [BOT] ⏭️  Skipping duplicate: JID_99edcb1e (posted within 7 days)
⏭️  Skipping duplicate: JID_283bdcfc-analyst_r0038516-3 (posted within 7 days)
[2025-12-20T23:05:03.604Z] [BOT] ⏭️  Skipping duplicate: JID_3c900ad2-scm_jr65804 (posted within 7 days)
[2025-12-20T23:05:03.604Z] [BOT] ⏭️  Skipping duplicate: JID_3f5a1932-analyst_jr2176-1 (posted within 7 days)
[2025-12-20T23:05:03.606Z] [BOT] ✅ Loaded pending queue: 143 total (123 pending, 20 enriched, 0 posted)
[2025-12-20T23:05:03.609Z] [BOT] ✅ Saved pending queue: 143 total (123 pending, 10 enriched, 10 posted)
[2025-12-20T23:05:03.609Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T23:05:03.652Z] [BOT] 📂 Loaded 861 existing routing entries
[2025-12-20T23:05:03.697Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-20T23:05:03.697Z] [BOT] New entries: 10
   Total entries: 871
   Timestamp: 2025-12-20T23:05:03.692Z
[2025-12-20T23:05:03.697Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T23:05:03.697Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-20T23:05:03.698Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-20T23:05:03.698Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
[2025-12-20T23:05:03.698Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 5 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌉・san-francisco: 2 posts
[2025-12-20T23:05:03.698Z] [BOT] 5. #📈・JID_fb739488: 2 posts
[2025-12-20T23:05:03.698Z] [BOT] [STATS] Channel stats saved
[2025-12-20T23:05:05.711Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2834) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*