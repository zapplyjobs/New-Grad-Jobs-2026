# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T17:51:27.671Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T17:50:45.163Z] ========================================
[2026-01-04T17:50:45.165Z] Discord Bot Execution Log
[2026-01-04T17:50:45.165Z] Environment: GitHub Actions
[2026-01-04T17:50:45.165Z] Node Version: v20.19.6
[2026-01-04T17:50:45.165Z] ========================================
[2026-01-04T17:50:45.165Z] Environment Variables Check:
[2026-01-04T17:50:45.165Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T17:50:45.165Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.165Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T17:50:45.165Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T17:50:45.166Z] 
Multi-Channel Configuration:
[2026-01-04T17:50:45.166Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.166Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.166Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.166Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.166Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.166Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.166Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.166Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.166Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T17:50:45.166Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T17:50:45.166Z] 
Data Files Check:
[2026-01-04T17:50:45.167Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47177 bytes)
[2026-01-04T17:50:45.172Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 636273 bytes)
[2026-01-04T17:50:45.172Z] 
========================================
[2026-01-04T17:50:45.172Z] Starting Enhanced Discord Bot...
[2026-01-04T17:50:45.172Z] ========================================
[2026-01-04T17:50:45.720Z] [BOT] ✅ Loaded V2 database: 1256 jobs
[2026-01-04T17:50:46.641Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T17:50:46.641Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T17:50:46.641Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T17:50:46.641Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T17:50:46.714Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-04T17:50:46.804Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-04T17:50:46.807Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T17:50:46.807Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-04T17:50:46.807Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-04T17:50:46.808Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2026-01-04T17:50:46.808Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - University Graduate @ Adobe: seattle, san jose
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T17:50:46.812Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-04T17:50:46.813Z] [BOT] 📍 [ROUTING] "Graduate University Engineer - Machine Learning Engineer" @ ORG_72fd3ae0
[2026-01-04T17:50:46.813Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T17:50:46.831Z] [BOT ERROR] (node:3348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T17:50:47.074Z] [BOT] ✅ Created forum post: 🎨 Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-04T17:50:47.074Z] [BOT] ✅ Industry: Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0
[2026-01-04T17:50:48.871Z] [BOT] ✅ Created forum post: 🎨 Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2026-01-04T17:50:48.871Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T17:50:50.371Z] [BOT] 💾 Marked as posted: Graduate University Engineer - Machine Learning Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-04T17:50:50.371Z] [BOT] 💾 BEFORE ARCHIVING: 1257 jobs in database
[2026-01-04T17:50:50.372Z] [BOT] ✅ No jobs to archive (all 1257 jobs within 7-day window)
[2026-01-04T17:50:50.385Z] [BOT] 💾 Saved posted_jobs.json: 1257 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:50:50.386Z] [BOT] 📍 [ROUTING] "University Graduate" @ ORG_72fd3ae0
[2026-01-04T17:50:50.386Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T17:50:50.386Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-04T17:50:50.809Z] [BOT] ✅ Created forum post: 🎨 University Graduate @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate @ ORG_72fd3ae0
[2026-01-04T17:50:52.537Z] [BOT] ✅ Created forum post: 🎨 University Graduate @ ORG_72fd3ae0 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-04T17:50:54.037Z] [BOT] 💾 Marked as posted: University Graduate @ ORG_72fd3ae0 (instance #1)
💾 BEFORE ARCHIVING: 1258 jobs in database
[2026-01-04T17:50:54.038Z] [BOT] ✅ No jobs to archive (all 1258 jobs within 7-day window)
[2026-01-04T17:50:54.046Z] [BOT] 💾 Saved posted_jobs.json: 1258 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:50:54.046Z] [BOT] 💾 Marked as posted: University Graduate - Applied Science @ ORG_72fd3ae0 (instance #1)
[2026-01-04T17:50:54.046Z] [BOT] 💾 BEFORE ARCHIVING: 1259 jobs in database
[2026-01-04T17:50:54.047Z] [BOT] ✅ No jobs to archive (all 1259 jobs within 7-day window)
[2026-01-04T17:50:54.055Z] [BOT] 💾 Saved posted_jobs.json: 1259 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:50:54.055Z] [BOT] 💾 Marked as posted: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-04T17:50:54.055Z] [BOT] 💾 BEFORE ARCHIVING: 1260 jobs in database
[2026-01-04T17:50:54.056Z] [BOT] ✅ No jobs to archive (all 1260 jobs within 7-day window)
[2026-01-04T17:50:54.064Z] [BOT] 💾 Saved posted_jobs.json: 1260 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:50:54.064Z] [BOT] 💾 Marked as posted: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
💾 BEFORE ARCHIVING: 1261 jobs in database
[2026-01-04T17:50:54.065Z] [BOT] ✅ No jobs to archive (all 1261 jobs within 7-day window)
[2026-01-04T17:50:54.073Z] [BOT] 💾 Saved posted_jobs.json: 1261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:50:57.073Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-04T17:50:57.074Z] [BOT] 📍 [ROUTING] "Data Engineer - Digital Workplace" @ ORG_0baaf6f2 Express
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-04T17:50:57.074Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-04T17:50:57.583Z] [BOT] ✅ Created forum post: 🏢 Data Engineer - Digital Workplace @ ORG_0baaf6f2 Express in #📈・JID_fb739488
  ✅ Industry: Data Engineer - Digital Workplace @ ORG_0baaf6f2 Express
[2026-01-04T17:50:59.297Z] [BOT] ✅ Created forum post: 🏢 Data Engineer - Digital Workplace @ ORG_0baaf6f2 Express in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T17:51:00.797Z] [BOT] 💾 Marked as posted: Data Engineer - Digital Workplace @ ORG_0baaf6f2 Express (instance #1)
[2026-01-04T17:51:00.797Z] [BOT] 💾 BEFORE ARCHIVING: 1262 jobs in database
[2026-01-04T17:51:00.798Z] [BOT] ✅ No jobs to archive (all 1262 jobs within 7-day window)
[2026-01-04T17:51:00.806Z] [BOT] 💾 Saved posted_jobs.json: 1262 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:51:03.808Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-04T17:51:03.810Z] [BOT] 📍 [ROUTING] "Post-Doctoral Scientist - Gc/MS" @ ORG_8410dea2 Technologies
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-04T17:51:04.094Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Scientist - Gc/MS @ ORG_8410dea2 Technologies in #💲・sales-jobs
  ✅ Industry: Post-Doctoral Scientist - Gc/MS @ ORG_8410dea2 Technologies
[2026-01-04T17:51:05.892Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Scientist - Gc/MS @ ORG_8410dea2 Technologies in #🌉・san-francisco
[2026-01-04T17:51:05.892Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-04T17:51:07.392Z] [BOT] 💾 Marked as posted: Post-Doctoral Scientist - Gc/MS @ ORG_8410dea2 Technologies (instance #1)
[2026-01-04T17:51:07.392Z] [BOT] 💾 BEFORE ARCHIVING: 1263 jobs in database
[2026-01-04T17:51:07.393Z] [BOT] ✅ No jobs to archive (all 1263 jobs within 7-day window)
[2026-01-04T17:51:07.404Z] [BOT] 💾 Saved posted_jobs.json: 1263 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:51:10.404Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-04T17:51:10.405Z] [BOT] 📍 [ROUTING] "Product Engineer" @ 3M
   Category: TECH (matched: "engineer/engineering")
[2026-01-04T17:51:10.405Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:51:10.635Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ 3M in #💻・tech-jobs
  ✅ Industry: Product Engineer @ 3M
[2026-01-04T17:51:12.519Z] [BOT] ✅ Created forum post: 🏢 Product Engineer @ 3M in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T17:51:14.019Z] [BOT] 💾 Marked as posted: Product Engineer @ 3M (instance #1)
💾 BEFORE ARCHIVING: 1264 jobs in database
[2026-01-04T17:51:14.020Z] [BOT] ✅ No jobs to archive (all 1264 jobs within 7-day window)
[2026-01-04T17:51:14.033Z] [BOT] 💾 Saved posted_jobs.json: 1264 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:51:14.033Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Technology" @ ORG_0baaf6f2 Express
[2026-01-04T17:51:14.033Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:51:14.471Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Technology @ ORG_0baaf6f2 Express in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express
[2026-01-04T17:51:16.189Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Technology @ ORG_0baaf6f2 Express in #💻・remote-usa
[2026-01-04T17:51:16.189Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-04T17:51:17.689Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Technology @ ORG_0baaf6f2 Express (instance #1)
[2026-01-04T17:51:17.690Z] [BOT] 💾 BEFORE ARCHIVING: 1265 jobs in database
[2026-01-04T17:51:17.691Z] [BOT] ✅ No jobs to archive (all 1265 jobs within 7-day window)
[2026-01-04T17:51:17.700Z] [BOT] 💾 Saved posted_jobs.json: 1265 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:51:17.701Z] [BOT] 📍 [ROUTING] "Campus Graduate - Software Engineer II - Technology" @ ORG_0baaf6f2 Express
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T17:51:17.926Z] [BOT] ✅ Created forum post: 🏢 Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express in #💻・tech-jobs
  ✅ Industry: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express
[2026-01-04T17:51:19.748Z] [BOT] ✅ Created forum post: 🏢 Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-04T17:51:21.248Z] [BOT] 💾 Marked as posted: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express (instance #1)
[2026-01-04T17:51:21.248Z] [BOT] 💾 BEFORE ARCHIVING: 1266 jobs in database
[2026-01-04T17:51:21.250Z] [BOT] ✅ No jobs to archive (all 1266 jobs within 7-day window)
[2026-01-04T17:51:21.260Z] [BOT] 💾 Saved posted_jobs.json: 1266 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T17:51:24.262Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2026-01-04T17:51:24.262Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r160652 (posted within 7 days)
[2026-01-04T17:51:24.263Z] [BOT] ⏭️  Skipping duplicate: JID_92ab954e (posted within 7 days)
[2026-01-04T17:51:24.263Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r161169 (posted within 7 days)
[2026-01-04T17:51:24.263Z] [BOT] ⏭️  Skipping duplicate: JID_7ad1bb4d-agilent_student_careers-JID_659a3a2b-scientist_4028181 (posted within 7 days)
⏭️  Skipping duplicate: JID_c55e1fc7-engineer_r01158471 (posted within 7 days)
[2026-01-04T17:51:24.263Z] [BOT] ⏭️  Skipping duplicate: JID_73f5962b (posted within 7 days)
[2026-01-04T17:51:24.264Z] [BOT] ⏭️  Skipping duplicate: JID_f4c93aa9 (posted within 7 days)
[2026-01-04T17:51:24.265Z] [BOT] ✅ Loaded pending queue: 53 total (33 pending, 20 enriched, 0 posted)
[2026-01-04T17:51:24.266Z] [BOT] ✅ Saved pending queue: 53 total (33 pending, 13 enriched, 7 posted)
[2026-01-04T17:51:24.267Z] [BOT] 📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T17:51:24.318Z] [BOT] 📂 Loaded 2171 existing routing entries
[2026-01-04T17:51:24.377Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
[2026-01-04T17:51:24.378Z] [BOT] Total entries: 2178
   Timestamp: 2026-01-04T17:51:24.366Z
[2026-01-04T17:51:24.378Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 14
   Successful: 14
[2026-01-04T17:51:24.379Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-04T17:51:24.379Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
[2026-01-04T17:51:24.379Z] [BOT] Channels used: 8
   Top channels:
     1. #💻・remote-usa: 3 posts
     2. #💻・tech-jobs: 3 posts
     3. #🤖・ai-jobs: 2 posts
[2026-01-04T17:51:24.379Z] [BOT] 4. #🌉・san-francisco: 2 posts
     5. #🌧️・seattle: 1 posts
[2026-01-04T17:51:24.379Z] [BOT] [STATS] Channel stats saved
[2026-01-04T17:51:26.391Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*