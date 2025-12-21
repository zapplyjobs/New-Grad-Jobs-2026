# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T19:48:18.498Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T19:47:34.440Z] ========================================
[2025-12-21T19:47:34.442Z] Discord Bot Execution Log
[2025-12-21T19:47:34.442Z] Environment: GitHub Actions
[2025-12-21T19:47:34.442Z] Node Version: v20.19.6
[2025-12-21T19:47:34.442Z] ========================================
[2025-12-21T19:47:34.443Z] Environment Variables Check:
[2025-12-21T19:47:34.443Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T19:47:34.443Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.443Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T19:47:34.443Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T19:47:34.443Z] 
Multi-Channel Configuration:
[2025-12-21T19:47:34.443Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.443Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.443Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.443Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.443Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.443Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.444Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.444Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.444Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T19:47:34.444Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T19:47:34.444Z] 
Data Files Check:
[2025-12-21T19:47:34.444Z] .github/data/new_jobs.json: ✅ Exists (10 items, 26297 bytes)
[2025-12-21T19:47:34.448Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 509324 bytes)
[2025-12-21T19:47:34.448Z] 
========================================
[2025-12-21T19:47:34.448Z] Starting Enhanced Discord Bot...
[2025-12-21T19:47:34.448Z] ========================================
[2025-12-21T19:47:34.969Z] [BOT] ✅ Loaded V2 database: 870 jobs
[2025-12-21T19:47:36.280Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T19:47:36.281Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T19:47:36.281Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T19:47:36.281Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T19:47:36.392Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 154
[2025-12-21T19:47:36.394Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T19:47:36.394Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T19:47:36.395Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T19:47:36.395Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T19:47:36.395Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-21T19:47:36.396Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T19:47:36.400Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-21T19:47:36.400Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_0aa5052d State University (LSU)
[2025-12-21T19:47:36.400Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-21T19:47:36.405Z] [BOT ERROR] (node:2692) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T19:47:36.636Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💰・finance-jobs
[2025-12-21T19:47:36.636Z] [BOT] ✅ Industry: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU)
[2025-12-21T19:47:38.691Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
[2025-12-21T19:47:38.691Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T19:47:40.192Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) (instance #1)
[2025-12-21T19:47:40.192Z] [BOT] 💾 BEFORE ARCHIVING: 871 jobs in database
[2025-12-21T19:47:40.193Z] [BOT] ✅ No jobs to archive (all 871 jobs within 7-day window)
[2025-12-21T19:47:40.207Z] [BOT] 💾 Saved posted_jobs.json: 871 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:47:43.207Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-21T19:47:43.208Z] [BOT] 📍 [ROUTING] "Software Engineer 1/2" @ ORG_2d3c86e5
[2025-12-21T19:47:43.208Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:47:43.490Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1/2 @ ORG_2d3c86e5 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1/2 @ ORG_2d3c86e5
[2025-12-21T19:47:45.190Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1/2 @ ORG_2d3c86e5 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:47:46.692Z] [BOT] 💾 Marked as posted: Software Engineer 1/2 @ ORG_2d3c86e5 (instance #1)
[2025-12-21T19:47:46.692Z] [BOT] 💾 BEFORE ARCHIVING: 872 jobs in database
[2025-12-21T19:47:46.693Z] [BOT] ✅ No jobs to archive (all 872 jobs within 7-day window)
[2025-12-21T19:47:46.701Z] [BOT] 💾 Saved posted_jobs.json: 872 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:47:46.701Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer 1 - Mobile" @ ORG_3cfbdbc3
[2025-12-21T19:47:46.702Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:47:46.927Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3
[2025-12-21T19:47:48.589Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-21T19:47:50.091Z] [BOT] 💾 Marked as posted: Graduate Software Engineer 1 - Mobile @ ORG_3cfbdbc3 (instance #1)
[2025-12-21T19:47:50.091Z] [BOT] 💾 BEFORE ARCHIVING: 873 jobs in database
[2025-12-21T19:47:50.092Z] [BOT] ✅ No jobs to archive (all 873 jobs within 7-day window)
[2025-12-21T19:47:50.100Z] [BOT] 💾 Saved posted_jobs.json: 873 active jobs
[2025-12-21T19:47:50.101Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:47:50.101Z] [BOT] 💾 Marked as posted: Graduate Software Engineer 1 @ ORG_3cfbdbc3 (instance #1)
[2025-12-21T19:47:50.101Z] [BOT] 💾 BEFORE ARCHIVING: 874 jobs in database
[2025-12-21T19:47:50.101Z] [BOT] ✅ No jobs to archive (all 874 jobs within 7-day window)
[2025-12-21T19:47:50.108Z] [BOT] 💾 Saved posted_jobs.json: 874 active jobs
[2025-12-21T19:47:50.108Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:47:50.108Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:47:50.316Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #💻・tech-jobs
  ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2025-12-21T19:47:52.022Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-21T19:47:53.523Z] [BOT] 💾 Marked as posted: Helix Data Creator @ ORG_1f5be668 (instance #1)
[2025-12-21T19:47:53.523Z] [BOT] 💾 BEFORE ARCHIVING: 875 jobs in database
[2025-12-21T19:47:53.524Z] [BOT] ✅ No jobs to archive (all 875 jobs within 7-day window)
[2025-12-21T19:47:53.531Z] [BOT] 💾 Saved posted_jobs.json: 875 active jobs
[2025-12-21T19:47:53.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:47:53.532Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_4893d237 Technologies
[2025-12-21T19:47:53.532Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:47:54.005Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_4893d237 Technologies in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_4893d237 Technologies
[2025-12-21T19:47:55.847Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_4893d237 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:47:57.349Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_4893d237 Technologies (instance #1)
[2025-12-21T19:47:57.349Z] [BOT] 💾 BEFORE ARCHIVING: 876 jobs in database
[2025-12-21T19:47:57.350Z] [BOT] ✅ No jobs to archive (all 876 jobs within 7-day window)
[2025-12-21T19:47:57.357Z] [BOT] 💾 Saved posted_jobs.json: 876 active jobs
[2025-12-21T19:47:57.357Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:47:57.358Z] [BOT] 📍 [ROUTING] "Algorithm and Analysis Software Engineer Scientist Associate" @ ORG_9d38443e of Texas - Austin
[2025-12-21T19:47:57.358Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:47:57.943Z] [BOT] ✅ Created forum post: 🏢 Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
  ✅ Industry: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin
[2025-12-21T19:48:01.099Z] [BOT] ✅ Created forum post: 🏢 Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-21T19:48:02.600Z] [BOT] 💾 Marked as posted: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-21T19:48:02.600Z] [BOT] 💾 BEFORE ARCHIVING: 877 jobs in database
[2025-12-21T19:48:02.601Z] [BOT] ✅ No jobs to archive (all 877 jobs within 7-day window)
[2025-12-21T19:48:02.609Z] [BOT] 💾 Saved posted_jobs.json: 877 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:48:02.609Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Direct Issuance" @ ORG_a10ae009
[2025-12-21T19:48:02.609Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:48:02.953Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Direct Issuance @ ORG_a10ae009 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Direct Issuance @ ORG_a10ae009
[2025-12-21T19:48:04.716Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Direct Issuance @ ORG_a10ae009 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-21T19:48:06.218Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Direct Issuance @ ORG_a10ae009 (instance #1)
[2025-12-21T19:48:06.218Z] [BOT] 💾 BEFORE ARCHIVING: 878 jobs in database
[2025-12-21T19:48:06.219Z] [BOT] ✅ No jobs to archive (all 878 jobs within 7-day window)
[2025-12-21T19:48:06.227Z] [BOT] 💾 Saved posted_jobs.json: 878 active jobs
[2025-12-21T19:48:06.227Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:48:09.227Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-21T19:48:09.227Z] [BOT] 📍 [ROUTING] "GIS Analyst" @ Kimley-Horn
[2025-12-21T19:48:09.228Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-21T19:48:09.454Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst @ Kimley-Horn in #🩺・healthcare-jobs
[2025-12-21T19:48:09.454Z] [BOT] ✅ Industry: GIS Analyst @ Kimley-Horn
[2025-12-21T19:48:11.169Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst @ Kimley-Horn in #🤠・austin
[2025-12-21T19:48:11.169Z] [BOT] ✅ Location: 🤠・austin
[2025-12-21T19:48:12.669Z] [BOT] 💾 Marked as posted: GIS Analyst @ Kimley-Horn (instance #1)
[2025-12-21T19:48:12.670Z] [BOT] 💾 BEFORE ARCHIVING: 879 jobs in database
[2025-12-21T19:48:12.670Z] [BOT] ✅ No jobs to archive (all 879 jobs within 7-day window)
[2025-12-21T19:48:12.679Z] [BOT] 💾 Saved posted_jobs.json: 879 active jobs
[2025-12-21T19:48:12.679Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:48:15.680Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-21T19:48:15.681Z] [BOT] ⏭️  Skipping duplicate: JID_c3d3f5d4-researcher_r00111813 (posted within 7 days)
[2025-12-21T19:48:15.681Z] [BOT] ⏭️  Skipping duplicate: JID_48e15ca4 (posted within 7 days)
[2025-12-21T19:48:15.681Z] [BOT] ⏭️  Skipping duplicate: JID_4ac515f0 (posted within 7 days)
[2025-12-21T19:48:15.681Z] [BOT] ⏭️  Skipping duplicate: JID_1163d0da (posted within 7 days)
[2025-12-21T19:48:15.681Z] [BOT] ⏭️  Skipping duplicate: JID_bc250026 (posted within 7 days)
[2025-12-21T19:48:15.681Z] [BOT] ⏭️  Skipping duplicate: JID_ec4e396f-associate_r_00043737 (posted within 7 days)
[2025-12-21T19:48:15.682Z] [BOT] ⏭️  Skipping duplicate: JID_c9fc21db (posted within 7 days)
⏭️  Skipping duplicate: JID_1fdc5d25 (posted within 7 days)
[2025-12-21T19:48:15.683Z] [BOT] ✅ Loaded pending queue: 44 total (24 pending, 20 enriched, 0 posted)
[2025-12-21T19:48:15.685Z] [BOT] ✅ Saved pending queue: 44 total (24 pending, 12 enriched, 8 posted)
[2025-12-21T19:48:15.685Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T19:48:15.731Z] [BOT] 📂 Loaded 956 existing routing entries
[2025-12-21T19:48:15.782Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2025-12-21T19:48:15.782Z] [BOT] Total entries: 964
   Timestamp: 2025-12-21T19:48:15.777Z
[2025-12-21T19:48:15.782Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T19:48:15.783Z] [BOT] Total attempts: 17
   Successful: 16
   Failed: 0
   Skipped: 1
[2025-12-21T19:48:15.783Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-21T19:48:15.783Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2025-12-21T19:48:15.783Z] [BOT] 2. #💻・remote-usa: 3 posts
     3. #🤠・austin: 2 posts
     4. #💰・finance-jobs: 1 posts
     5. #🌧️・seattle: 1 posts
[2025-12-21T19:48:15.783Z] [BOT] [STATS] Channel stats saved
[2025-12-21T19:48:17.795Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2692) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*