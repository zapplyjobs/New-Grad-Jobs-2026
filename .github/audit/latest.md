# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T00:43:12.832Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T00:42:38.625Z] ========================================
[2025-12-24T00:42:38.627Z] Discord Bot Execution Log
[2025-12-24T00:42:38.627Z] Environment: GitHub Actions
[2025-12-24T00:42:38.627Z] Node Version: v20.19.6
[2025-12-24T00:42:38.627Z] ========================================
[2025-12-24T00:42:38.627Z] Environment Variables Check:
[2025-12-24T00:42:38.627Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T00:42:38.627Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T00:42:38.628Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T00:42:38.628Z] 
Multi-Channel Configuration:
[2025-12-24T00:42:38.628Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T00:42:38.628Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T00:42:38.629Z] 
Data Files Check:
[2025-12-24T00:42:38.629Z] .github/data/new_jobs.json: ✅ Exists (7 items, 36934 bytes)
[2025-12-24T00:42:38.632Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 378319 bytes)
[2025-12-24T00:42:38.632Z] 
========================================
[2025-12-24T00:42:38.632Z] Starting Enhanced Discord Bot...
[2025-12-24T00:42:38.632Z] ========================================
[2025-12-24T00:42:39.150Z] [BOT] ✅ Loaded V2 database: 654 jobs
[2025-12-24T00:42:39.732Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T00:42:39.732Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T00:42:39.732Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T00:42:39.732Z] [BOT] 📦 Exporting 7 jobs to encrypted JSON...
[2025-12-24T00:42:39.785Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-24T00:42:39.844Z] [BOT] ✅ Export complete: Added 1, Skipped 6, Total 154
[2025-12-24T00:42:39.846Z] [BOT] 📬 Found 7 new jobs (0 already posted)...
[2025-12-24T00:42:39.846Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T00:42:39.847Z] [BOT] 📋 After blacklist filter: 6 jobs (1 blacklisted)
[2025-12-24T00:42:39.847Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2025-12-24T00:42:39.847Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2025-12-24T00:42:39.848Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-24T00:42:39.848Z] [BOT] 📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T00:42:39.849Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-24T00:42:39.850Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_bbacffd9
[2025-12-24T00:42:39.850Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-24T00:42:39.856Z] [BOT ERROR] (node:2827) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T00:42:40.022Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・tech-jobs
[2025-12-24T00:42:40.023Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_bbacffd9
[2025-12-24T00:42:41.748Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #🗽・new-york
[2025-12-24T00:42:41.748Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-24T00:42:43.250Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_bbacffd9 (instance #1)
[2025-12-24T00:42:43.250Z] [BOT] 💾 BEFORE ARCHIVING: 655 jobs in database
[2025-12-24T00:42:43.251Z] [BOT] ✅ No jobs to archive (all 655 jobs within 7-day window)
[2025-12-24T00:42:43.260Z] [BOT] 💾 Saved posted_jobs.json: 655 active jobs
[2025-12-24T00:42:43.260Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T00:42:43.261Z] [BOT] 📍 [ROUTING] "Associate Systems Developer" @ ORG_9ee652db Reinsurance Company
[2025-12-24T00:42:43.261Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-24T00:42:43.688Z] [BOT] ✅ Created forum post: 🏢 Associate Systems Developer @ ORG_9ee652db Reinsurance Company in #💻・tech-jobs
  ✅ Industry: Associate Systems Developer @ ORG_9ee652db Reinsurance Company
[2025-12-24T00:42:45.478Z] [BOT] ✅ Created forum post: 🏢 Associate Systems Developer @ ORG_9ee652db Reinsurance Company in #💻・remote-usa
[2025-12-24T00:42:45.478Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-24T00:42:46.980Z] [BOT] 💾 Marked as posted: Associate Systems Developer @ ORG_9ee652db Reinsurance Company (instance #1)
💾 BEFORE ARCHIVING: 656 jobs in database
[2025-12-24T00:42:46.980Z] [BOT] ✅ No jobs to archive (all 656 jobs within 7-day window)
[2025-12-24T00:42:46.986Z] [BOT] 💾 Saved posted_jobs.json: 656 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-24T00:42:46.986Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2025-12-24T00:42:46.986Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-24T00:42:47.176Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
[2025-12-24T00:42:47.177Z] [BOT] ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-24T00:42:48.865Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
[2025-12-24T00:42:48.865Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-24T00:42:50.366Z] [BOT] 💾 Marked as posted: Early Career Software Engineer @ ORG_2b147ca6 Health (instance #1)
[2025-12-24T00:42:50.367Z] [BOT] 💾 BEFORE ARCHIVING: 657 jobs in database
[2025-12-24T00:42:50.367Z] [BOT] ✅ No jobs to archive (all 657 jobs within 7-day window)
[2025-12-24T00:42:50.374Z] [BOT] 💾 Saved posted_jobs.json: 657 active jobs
[2025-12-24T00:42:50.374Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T00:42:53.375Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-24T00:42:53.376Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Operations Engineer - MLOps - Engineer" @ ORG_8f6fe0d8 Devices
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-24T00:42:53.376Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-24T00:42:53.591Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Operations Engineer - MLOps - Engineer @ ORG_8f6fe0d8 Devices in #🤖・ai-jobs
  ✅ Industry: Associate Machine Learning Operations Engineer - MLOps - Engineer @ ORG_8f6fe0d8 Devices
[2025-12-24T00:42:55.259Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Operations Engineer - MLOps - Engineer @ ORG_8f6fe0d8 Devices in #🚌・boston
[2025-12-24T00:42:55.259Z] [BOT] ✅ Location: 🚌・boston
[2025-12-24T00:42:56.760Z] [BOT] 💾 Marked as posted: Associate Machine Learning Operations Engineer - MLOps - Engineer @ ORG_8f6fe0d8 Devices (instance #1)
[2025-12-24T00:42:56.760Z] [BOT] 💾 BEFORE ARCHIVING: 658 jobs in database
[2025-12-24T00:42:56.761Z] [BOT] ✅ No jobs to archive (all 658 jobs within 7-day window)
[2025-12-24T00:42:56.767Z] [BOT] 💾 Saved posted_jobs.json: 658 active jobs
[2025-12-24T00:42:56.767Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T00:42:56.768Z] [BOT] 📍 [ROUTING] "Software Engineer - Simulators" @ ORG_cdec6f53
[2025-12-24T00:42:56.768Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-24T00:42:57.008Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Simulators @ ORG_cdec6f53 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Simulators @ ORG_cdec6f53
[2025-12-24T00:42:58.740Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Simulators @ ORG_cdec6f53 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-24T00:43:00.242Z] [BOT] 💾 Marked as posted: Software Engineer - Simulators @ ORG_cdec6f53 (instance #1)
[2025-12-24T00:43:00.242Z] [BOT] 💾 BEFORE ARCHIVING: 659 jobs in database
[2025-12-24T00:43:00.242Z] [BOT] ✅ No jobs to archive (all 659 jobs within 7-day window)
[2025-12-24T00:43:00.249Z] [BOT] 💾 Saved posted_jobs.json: 659 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-24T00:43:03.250Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-24T00:43:03.251Z] [BOT] 📍 [ROUTING] "Predoctoral Scholar" @ ORG_9d38443e of Chicago
[2025-12-24T00:43:03.251Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-24T00:43:03.635Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Scholar @ ORG_9d38443e of Chicago in #📈・JID_fb739488
[2025-12-24T00:43:03.635Z] [BOT] ✅ Industry: Predoctoral Scholar @ ORG_9d38443e of Chicago
[2025-12-24T00:43:05.409Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Scholar @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-24T00:43:06.910Z] [BOT] 💾 Marked as posted: Predoctoral Scholar @ ORG_9d38443e of Chicago (instance #1)
[2025-12-24T00:43:06.910Z] [BOT] 💾 BEFORE ARCHIVING: 660 jobs in database
[2025-12-24T00:43:06.911Z] [BOT] ✅ No jobs to archive (all 660 jobs within 7-day window)
[2025-12-24T00:43:06.916Z] [BOT] 💾 Saved posted_jobs.json: 660 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-24T00:43:09.917Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2025-12-24T00:43:09.917Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_16c04e6d-i_r202570999-1 (posted within 7 days)
[2025-12-24T00:43:09.917Z] [BOT] ⏭️  Skipping duplicate: JID_e3813a4a-engineer_r258871 (posted within 7 days)
⏭️  Skipping duplicate: JID_a58979e1-scholar_jr32397 (posted within 7 days)
[2025-12-24T00:43:09.917Z] [BOT] ⏭️  Skipping duplicate: JID_b1fa1382-developer_j26065-1 (posted within 7 days)
[2025-12-24T00:43:09.918Z] [BOT] ⏭️  Skipping duplicate: JID_5bd4dded (posted within 7 days)
⏭️  Skipping duplicate: JID_a7af662d (posted within 7 days)
[2025-12-24T00:43:09.918Z] [BOT] ✅ Loaded pending queue: 7 total (0 pending, 7 enriched, 0 posted)
[2025-12-24T00:43:09.919Z] [BOT] ✅ Saved pending queue: 7 total (0 pending, 1 enriched, 6 posted)
[2025-12-24T00:43:09.919Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-24T00:43:09.962Z] [BOT] 📂 Loaded 1047 existing routing entries
[2025-12-24T00:43:10.008Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2025-12-24T00:43:10.008Z] [BOT] Total entries: 1053
   Timestamp: 2025-12-24T00:43:10.002Z
[2025-12-24T00:43:10.009Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T00:43:10.009Z] [BOT] Total attempts: 13
   Successful: 12
   Failed: 0
   Skipped: 1
[2025-12-24T00:43:10.009Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-24T00:43:10.009Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 3 posts
[2025-12-24T00:43:10.009Z] [BOT] 2. #🤖・ai-jobs: 2 posts
     3. #🗽・new-york: 1 posts
     4. #💻・remote-usa: 1 posts
     5. #🌉・san-francisco: 1 posts
[2025-12-24T00:43:10.009Z] [BOT] [STATS] Channel stats saved
[2025-12-24T00:43:12.018Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2827) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*