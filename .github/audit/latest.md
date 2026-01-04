# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T17:25:11.769Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T17:24:28.166Z] ========================================
[2026-01-04T17:24:28.168Z] Discord Bot Execution Log
[2026-01-04T17:24:28.168Z] Environment: GitHub Actions
[2026-01-04T17:24:28.168Z] Node Version: v20.19.6
[2026-01-04T17:24:28.168Z] ========================================
[2026-01-04T17:24:28.168Z] Environment Variables Check:
[2026-01-04T17:24:28.168Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T17:24:28.169Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T17:24:28.169Z] 
Multi-Channel Configuration:
[2026-01-04T17:24:28.169Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.169Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T17:24:28.170Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T17:24:28.170Z] 
Data Files Check:
[2026-01-04T17:24:28.170Z] .github/data/new_jobs.json: ✅ Exists (10 items, 56610 bytes)
[2026-01-04T17:24:28.175Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 624066 bytes)
[2026-01-04T17:24:28.175Z] 
========================================
[2026-01-04T17:24:28.175Z] Starting Enhanced Discord Bot...
[2026-01-04T17:24:28.175Z] ========================================
[2026-01-04T17:24:28.693Z] [BOT] ✅ Loaded V2 database: 1238 jobs
[2026-01-04T17:24:29.335Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T17:24:29.336Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T17:24:29.336Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T17:24:29.337Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T17:24:29.404Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T17:24:29.492Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T17:24:29.495Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T17:24:29.495Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2026-01-04T17:24:29.497Z] [BOT] ✅ Loaded pending queue: 54 total (34 pending, 20 enriched, 0 posted)
[2026-01-04T17:24:29.498Z] [BOT] ✅ Saved pending queue: 53 total (34 pending, 19 enriched, 0 posted)
[2026-01-04T17:24:29.499Z] [BOT] 🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 9 jobs (1 blacklisted)
[2026-01-04T17:24:29.499Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2026-01-04T17:24:29.499Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-04T17:24:29.500Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T17:24:29.504Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-04T17:24:29.505Z] [BOT] 📍 [ROUTING] "Android Sales Expert" @ 2020 Companies
[2026-01-04T17:24:29.505Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:24:29.510Z] [BOT ERROR] (node:3194) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T17:24:29.709Z] [BOT] ✅ Created forum post: 🏢 Android Sales Expert @ 2020 Companies in #💻・tech-jobs
  ✅ Industry: Android Sales Expert @ 2020 Companies
[2026-01-04T17:24:31.698Z] [BOT] ✅ Created forum post: 🏢 Android Sales Expert @ 2020 Companies in #🌉・san-francisco
[2026-01-04T17:24:31.698Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T17:24:33.199Z] [BOT] 💾 Marked as posted: Android Sales Expert @ 2020 Companies (instance #1)
[2026-01-04T17:24:33.199Z] [BOT] 💾 BEFORE ARCHIVING: 1239 jobs in database
[2026-01-04T17:24:33.200Z] [BOT] ✅ No jobs to archive (all 1239 jobs within 7-day window)
[2026-01-04T17:24:33.211Z] [BOT] 💾 Saved posted_jobs.json: 1239 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:24:33.211Z] [BOT] 📍 [ROUTING] "Applied Scientist 1 - Amazon" @ ORG_49d2dc07
[2026-01-04T17:24:33.212Z] [BOT] Category: TECH (default)
[2026-01-04T17:24:33.212Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:24:33.428Z] [BOT] ✅ Created forum post: 📦 Applied Scientist 1 - Amazon @ ORG_49d2dc07 in #💻・tech-jobs
[2026-01-04T17:24:33.428Z] [BOT] ✅ Industry: Applied Scientist 1 - Amazon @ ORG_49d2dc07
[2026-01-04T17:24:35.110Z] [BOT] ✅ Created forum post: 📦 Applied Scientist 1 - Amazon @ ORG_49d2dc07 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T17:24:36.611Z] [BOT] 💾 Marked as posted: Applied Scientist 1 - Amazon @ ORG_49d2dc07 (instance #1)
[2026-01-04T17:24:36.611Z] [BOT] 💾 BEFORE ARCHIVING: 1240 jobs in database
[2026-01-04T17:24:36.612Z] [BOT] ✅ No jobs to archive (all 1240 jobs within 7-day window)
[2026-01-04T17:24:36.619Z] [BOT] 💾 Saved posted_jobs.json: 1240 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:24:36.620Z] [BOT] 📍 [ROUTING] "Rotational Engineer - Central Technology" @ Activision-Blizzard
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T17:24:36.620Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:24:36.882Z] [BOT] ✅ Created forum post: 🏢 Rotational Engineer - Central Technology @ Activision-Blizzard in #💻・tech-jobs
  ✅ Industry: Rotational Engineer - Central Technology @ Activision-Blizzard
[2026-01-04T17:24:38.630Z] [BOT] ✅ Created forum post: 🏢 Rotational Engineer - Central Technology @ Activision-Blizzard in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T17:24:40.131Z] [BOT] 💾 Marked as posted: Rotational Engineer - Central Technology @ Activision-Blizzard (instance #1)
[2026-01-04T17:24:40.131Z] [BOT] 💾 BEFORE ARCHIVING: 1241 jobs in database
[2026-01-04T17:24:40.132Z] [BOT] ✅ No jobs to archive (all 1241 jobs within 7-day window)
[2026-01-04T17:24:40.140Z] [BOT] 💾 Saved posted_jobs.json: 1241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:24:40.140Z] [BOT] 📍 [ROUTING] "Data Integration Analyst 1" @ ORG_1ce21df7 Solutions
[2026-01-04T17:24:40.140Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:24:40.356Z] [BOT] ✅ Created forum post: 🏢 Data Integration Analyst 1 @ ORG_1ce21df7 Solutions in #💻・tech-jobs
[2026-01-04T17:24:40.356Z] [BOT] ✅ Industry: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions
[2026-01-04T17:24:42.088Z] [BOT] ✅ Created forum post: 🏢 Data Integration Analyst 1 @ ORG_1ce21df7 Solutions in #💻・remote-usa
[2026-01-04T17:24:42.088Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T17:24:43.589Z] [BOT] 💾 Marked as posted: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions (instance #1)
[2026-01-04T17:24:43.590Z] [BOT] 💾 BEFORE ARCHIVING: 1242 jobs in database
[2026-01-04T17:24:43.590Z] [BOT] ✅ No jobs to archive (all 1242 jobs within 7-day window)
[2026-01-04T17:24:43.598Z] [BOT] 💾 Saved posted_jobs.json: 1242 active jobs
[2026-01-04T17:24:43.598Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T17:24:43.598Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2026-01-04T17:24:43.598Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:24:43.797Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2026-01-04T17:24:43.797Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2026-01-04T17:24:45.550Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T17:24:47.051Z] [BOT] 💾 Marked as posted: Software Development Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-04T17:24:47.051Z] [BOT] 💾 BEFORE ARCHIVING: 1243 jobs in database
[2026-01-04T17:24:47.052Z] [BOT] ✅ No jobs to archive (all 1243 jobs within 7-day window)
[2026-01-04T17:24:47.061Z] [BOT] 💾 Saved posted_jobs.json: 1243 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:24:50.062Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-04T17:24:50.064Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
[2026-01-04T17:24:50.064Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T17:24:50.406Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-04T17:24:52.117Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-04T17:24:53.617Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-04T17:24:53.617Z] [BOT] 💾 BEFORE ARCHIVING: 1244 jobs in database
[2026-01-04T17:24:53.618Z] [BOT] ✅ No jobs to archive (all 1244 jobs within 7-day window)
[2026-01-04T17:24:53.627Z] [BOT] 💾 Saved posted_jobs.json: 1244 active jobs
[2026-01-04T17:24:53.627Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T17:24:53.628Z] [BOT] 📍 [ROUTING] "University Graduate - Machine Learning Engineer" @ ORG_72fd3ae0
[2026-01-04T17:24:53.628Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T17:24:53.834Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-04T17:24:55.538Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T17:24:57.038Z] [BOT] 💾 Marked as posted: University Graduate - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-04T17:24:57.039Z] [BOT] 💾 BEFORE ARCHIVING: 1245 jobs in database
[2026-01-04T17:24:57.040Z] [BOT] ✅ No jobs to archive (all 1245 jobs within 7-day window)
[2026-01-04T17:24:57.048Z] [BOT] 💾 Saved posted_jobs.json: 1245 active jobs
[2026-01-04T17:24:57.049Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T17:24:57.049Z] [BOT] 📍 [ROUTING] "Data Science Engineer - New College Grad-Master's/PhD" @ ORG_0c79a9c2 Materials
   Category: AI (matched: "machine learning")
[2026-01-04T17:24:57.049Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-04T17:24:57.359Z] [BOT] ✅ Created forum post: 🏢 Data Science Engineer - New College Grad-Master's/PhD @ ORG_0c79a9c2 Materials in #🤖・ai-jobs
[2026-01-04T17:24:57.359Z] [BOT] ✅ Industry: Data Science Engineer - New College Grad-Master's/PhD @ ORG_0c79a9c2 Materials
[2026-01-04T17:24:59.054Z] [BOT] ✅ Created forum post: 🏢 Data Science Engineer - New College Grad-Master's/PhD @ ORG_0c79a9c2 Materials in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-04T17:25:00.554Z] [BOT] 💾 Marked as posted: Data Science Engineer - New College Grad-Master's/PhD @ ORG_0c79a9c2 Materials (instance #1)
[2026-01-04T17:25:00.554Z] [BOT] 💾 BEFORE ARCHIVING: 1246 jobs in database
[2026-01-04T17:25:00.555Z] [BOT] ✅ No jobs to archive (all 1246 jobs within 7-day window)
[2026-01-04T17:25:00.564Z] [BOT] 💾 Saved posted_jobs.json: 1246 active jobs
[2026-01-04T17:25:00.564Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-04T17:25:03.565Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-04T17:25:03.565Z] [BOT] 📍 [ROUTING] "R&D Graduate Software Developer-Harwell Science Campus" @ ORG_8410dea2 Technologies
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-04T17:25:03.565Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T17:25:03.821Z] [BOT] ✅ Created forum post: 🏢 R&D Graduate Software Developer-Harwell Science Campus @ ORG_8410dea2 Technologies in #📈・JID_fb739488
  ✅ Industry: R&D Graduate Software Developer-Harwell Science Campus @ ORG_8410dea2 Technologies
[2026-01-04T17:25:05.323Z] [BOT] 💾 Marked as posted: R&D Graduate Software Developer-Harwell Science Campus @ ORG_8410dea2 Technologies (instance #1)
[2026-01-04T17:25:05.323Z] [BOT] 💾 BEFORE ARCHIVING: 1247 jobs in database
[2026-01-04T17:25:05.324Z] [BOT] ✅ No jobs to archive (all 1247 jobs within 7-day window)
[2026-01-04T17:25:05.333Z] [BOT] 💾 Saved posted_jobs.json: 1247 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:25:08.334Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-04T17:25:08.335Z] [BOT] ⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_5605df93-expert_req_096762-1 (posted within 7 days)
[2026-01-04T17:25:08.335Z] [BOT] ⏭️  Skipping duplicate: JID_eae91a50 (posted within 7 days)
[2026-01-04T17:25:08.335Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r158869 (posted within 7 days)
[2026-01-04T17:25:08.335Z] [BOT] ⏭️  Skipping duplicate: JID_78e3784c-technology_r026155 (posted within 7 days)
[2026-01-04T17:25:08.336Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160648 (posted within 7 days)
⏭️  Skipping duplicate: JID_7ad1bb4d-agilent_student_careers-JID_34dfb693-campus_4034599 (posted within 7 days)
[2026-01-04T17:25:08.336Z] [BOT] ⏭️  Skipping duplicate: JID_9ecd388f-allied_external-JID_c23c0330-_r-010442 (posted within 7 days)
[2026-01-04T17:25:08.336Z] [BOT] ⏭️  Skipping duplicate: JID_d864ec9b-_r2519402 (posted within 7 days)
[2026-01-04T17:25:08.336Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_098be064-engineer_r160351-1 (posted within 7 days)
[2026-01-04T17:25:08.337Z] [BOT] ✅ Loaded pending queue: 53 total (34 pending, 19 enriched, 0 posted)
[2026-01-04T17:25:08.339Z] [BOT] ✅ Saved pending queue: 53 total (34 pending, 10 enriched, 9 posted)
[2026-01-04T17:25:08.339Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T17:25:08.387Z] [BOT] 📂 Loaded 2153 existing routing entries
[2026-01-04T17:25:08.442Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2026-01-04T17:25:08.442Z] [BOT] Total entries: 2162
   Timestamp: 2026-01-04T17:25:08.431Z
[2026-01-04T17:25:08.443Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T17:25:08.443Z] [BOT] Total attempts: 18
   Successful: 17
   Failed: 0
   Skipped: 1
[2026-01-04T17:25:08.443Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T17:25:08.443Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 6
   Top channels:
[2026-01-04T17:25:08.443Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🌉・san-francisco: 5 posts
     3. #🤖・ai-jobs: 3 posts
     4. #💻・remote-usa: 2 posts
     5. #🌧️・seattle: 1 posts
[2026-01-04T17:25:08.443Z] [BOT] [STATS] Channel stats saved
[2026-01-04T17:25:10.454Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3194) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*