# Discord Bot Execution Audit
**Timestamp:** 2025-12-15T20:04:11.862Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-15T20:03:25.059Z] ========================================
[2025-12-15T20:03:25.061Z] Discord Bot Execution Log
[2025-12-15T20:03:25.061Z] Environment: GitHub Actions
[2025-12-15T20:03:25.061Z] Node Version: v20.19.6
[2025-12-15T20:03:25.061Z] ========================================
[2025-12-15T20:03:25.061Z] Environment Variables Check:
[2025-12-15T20:03:25.061Z] DISCORD_TOKEN: ✅ Set
[2025-12-15T20:03:25.061Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.061Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-15T20:03:25.062Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-15T20:03:25.062Z] 
Multi-Channel Configuration:
[2025-12-15T20:03:25.062Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.062Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.062Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.062Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.062Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.062Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.062Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.062Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.062Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-15T20:03:25.062Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-15T20:03:25.062Z] 
Data Files Check:
[2025-12-15T20:03:25.063Z] .github/data/new_jobs.json: ✅ Exists (10 items, 116549 bytes)
[2025-12-15T20:03:25.064Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 86257 bytes)
[2025-12-15T20:03:25.064Z] 
========================================
[2025-12-15T20:03:25.064Z] Starting Enhanced Discord Bot...
[2025-12-15T20:03:25.064Z] ========================================
[2025-12-15T20:03:25.555Z] [BOT] ✅ Loaded V2 database: 135 jobs
[2025-12-15T20:03:26.552Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-15T20:03:26.552Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-15T20:03:26.552Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-15T20:03:26.553Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-15T20:03:26.659Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 142
[2025-12-15T20:03:26.660Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-15T20:03:26.660Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-15T20:03:26.661Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-15T20:03:26.661Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-15T20:03:26.663Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-15T20:03:26.663Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-15T20:03:26.667Z] [BOT ERROR] (node:2910) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-15T20:03:26.847Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2025-12-15T20:03:28.986Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🌉・san-francisco
[2025-12-15T20:03:28.986Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-15T20:03:30.488Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2025-12-15T20:03:30.488Z] [BOT] 💾 BEFORE ARCHIVING: 136 jobs in database
[2025-12-15T20:03:30.488Z] [BOT] ✅ No jobs to archive (all 136 jobs within 7-day window)
[2025-12-15T20:03:30.493Z] [BOT] 💾 Saved posted_jobs.json: 136 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:03:30.493Z] [BOT] 📍 [ROUTING] "Data Engineer, Junior" @ ORG_39417f32 Allen
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-15T20:03:30.739Z] [BOT] ✅ Created forum post: 🏢 Data Engineer, Junior @ ORG_39417f32 Allen in #🤖・ai-jobs
[2025-12-15T20:03:30.740Z] [BOT] ✅ Industry: Data Engineer, Junior @ ORG_39417f32 Allen
[2025-12-15T20:03:32.442Z] [BOT] ✅ Created forum post: 🏢 Data Engineer, Junior @ ORG_39417f32 Allen in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-15T20:03:33.943Z] [BOT] 💾 Marked as posted: Data Engineer, Junior @ ORG_39417f32 Allen (instance #1)
[2025-12-15T20:03:33.944Z] [BOT] 💾 BEFORE ARCHIVING: 137 jobs in database
[2025-12-15T20:03:33.944Z] [BOT] ✅ No jobs to archive (all 137 jobs within 7-day window)
[2025-12-15T20:03:33.946Z] [BOT] 💾 Saved posted_jobs.json: 137 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:03:36.948Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2025-12-15T20:03:36.948Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a725bda1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:03:37.228Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a725bda1 in #💻・tech-jobs
[2025-12-15T20:03:37.229Z] [BOT] ✅ Industry: Software Engineer @ ORG_a725bda1
[2025-12-15T20:03:39.143Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a725bda1 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-15T20:03:40.644Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a725bda1 (instance #1)
[2025-12-15T20:03:40.644Z] [BOT] 💾 BEFORE ARCHIVING: 138 jobs in database
[2025-12-15T20:03:40.644Z] [BOT] ✅ No jobs to archive (all 138 jobs within 7-day window)
[2025-12-15T20:03:40.647Z] [BOT] 💾 Saved posted_jobs.json: 138 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:03:40.647Z] [BOT] 📍 [ROUTING] "Junior Technical Analyst (AI, Automation & IT Operations)" @ ORG_adfde70b Alliance
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:03:40.923Z] [BOT] ✅ Created forum post: 🏢 Junior Technical Analyst (AI, Automation & IT Operations) @ ORG_adfde70b Alliance in #💻・tech-jobs
  ✅ Industry: Junior Technical Analyst (AI, Automation & IT Operations) @ ORG_adfde70b Alliance
[2025-12-15T20:03:42.634Z] [BOT] ✅ Created forum post: 🏢 Junior Technical Analyst (AI, Automation & IT Operations) @ ORG_adfde70b Alliance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-15T20:03:44.135Z] [BOT] 💾 Marked as posted: Junior Technical Analyst (AI, Automation & IT Operations) @ ORG_adfde70b Alliance (instance #1)
[2025-12-15T20:03:44.136Z] [BOT] 💾 BEFORE ARCHIVING: 139 jobs in database
[2025-12-15T20:03:44.136Z] [BOT] ✅ No jobs to archive (all 139 jobs within 7-day window)
[2025-12-15T20:03:44.138Z] [BOT] 💾 Saved posted_jobs.json: 139 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:03:44.138Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer in Test" @ ORG_7a38ef37 Corporation
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:03:44.412Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation in #💻・tech-jobs
  ✅ Industry: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation
[2025-12-15T20:03:46.120Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation in #🚌・boston
[2025-12-15T20:03:46.121Z] [BOT] ✅ Location: 🚌・boston
[2025-12-15T20:03:47.621Z] [BOT] 💾 Marked as posted: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation (instance #1)
[2025-12-15T20:03:47.622Z] [BOT] 💾 BEFORE ARCHIVING: 140 jobs in database
[2025-12-15T20:03:47.622Z] [BOT] ✅ No jobs to archive (all 140 jobs within 7-day window)
[2025-12-15T20:03:47.624Z] [BOT] 💾 Saved posted_jobs.json: 140 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:03:47.624Z] [BOT] 📍 [ROUTING] "Junior Embedded Software Engineer (cleared)" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:03:47.919Z] [BOT] ✅ Created forum post: 🏢 Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems
[2025-12-15T20:03:49.637Z] [BOT] ✅ Created forum post: 🏢 Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #🚌・boston
[2025-12-15T20:03:49.637Z] [BOT] ✅ Location: 🚌・boston
[2025-12-15T20:03:51.138Z] [BOT] 💾 Marked as posted: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2025-12-15T20:03:51.139Z] [BOT] 💾 BEFORE ARCHIVING: 141 jobs in database
✅ No jobs to archive (all 141 jobs within 7-day window)
[2025-12-15T20:03:51.141Z] [BOT] 💾 Saved posted_jobs.json: 141 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:03:51.141Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_c4313919 Schwab
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:03:51.375Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c4313919 Schwab in #💻・tech-jobs
[2025-12-15T20:03:51.375Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_c4313919 Schwab
[2025-12-15T20:03:53.165Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c4313919 Schwab in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-15T20:03:54.666Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_c4313919 Schwab (instance #1)
[2025-12-15T20:03:54.666Z] [BOT] 💾 BEFORE ARCHIVING: 142 jobs in database
[2025-12-15T20:03:54.666Z] [BOT] ✅ No jobs to archive (all 142 jobs within 7-day window)
[2025-12-15T20:03:54.668Z] [BOT] 💾 Saved posted_jobs.json: 142 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:03:54.668Z] [BOT] 📍 [ROUTING] "Full-Stack Developer, Junior" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:03:54.871Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer, Junior @ ORG_39417f32 Allen in #💻・tech-jobs
[2025-12-15T20:03:54.871Z] [BOT] ✅ Industry: Full-Stack Developer, Junior @ ORG_39417f32 Allen
[2025-12-15T20:03:56.618Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer, Junior @ ORG_39417f32 Allen in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-15T20:03:58.119Z] [BOT] 💾 Marked as posted: Full-Stack Developer, Junior @ ORG_39417f32 Allen (instance #1)
[2025-12-15T20:03:58.119Z] [BOT] 💾 BEFORE ARCHIVING: 143 jobs in database
[2025-12-15T20:03:58.119Z] [BOT] ✅ No jobs to archive (all 143 jobs within 7-day window)
[2025-12-15T20:03:58.122Z] [BOT] 💾 Saved posted_jobs.json: 143 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:03:58.122Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_2c6b11e0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:03:58.528Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_2c6b11e0 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_2c6b11e0
[2025-12-15T20:04:00.548Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_2c6b11e0 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-15T20:04:02.048Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_2c6b11e0 (instance #1)
[2025-12-15T20:04:02.048Z] [BOT] 💾 BEFORE ARCHIVING: 144 jobs in database
[2025-12-15T20:04:02.048Z] [BOT] ✅ No jobs to archive (all 144 jobs within 7-day window)
[2025-12-15T20:04:02.050Z] [BOT] 💾 Saved posted_jobs.json: 144 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:04:02.051Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_fa57efea
[2025-12-15T20:04:02.051Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T20:04:02.419Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad @ ORG_fa57efea in #💻・tech-jobs
[2025-12-15T20:04:02.419Z] [BOT] ✅ Industry: Software Engineer - New Grad @ ORG_fa57efea
[2025-12-15T20:04:04.173Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad @ ORG_fa57efea in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-15T20:04:05.674Z] [BOT] 💾 Marked as posted: Software Engineer - New Grad @ ORG_fa57efea (instance #1)
[2025-12-15T20:04:05.674Z] [BOT] 💾 BEFORE ARCHIVING: 145 jobs in database
[2025-12-15T20:04:05.674Z] [BOT] ✅ No jobs to archive (all 145 jobs within 7-day window)
[2025-12-15T20:04:05.676Z] [BOT] 💾 Saved posted_jobs.json: 145 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T20:04:08.677Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-15T20:04:08.677Z] [BOT] ⏭️  Skipping duplicate: JID_cb506dee (posted within 7 days)
[2025-12-15T20:04:08.677Z] [BOT] ⏭️  Skipping duplicate: JID_4d510499 (posted within 7 days)
⏭️  Skipping duplicate: JID_20b1aab5 (posted within 7 days)
⏭️  Skipping duplicate: JID_27a18fcb-_req-2025-14278 (posted within 7 days)
⏭️  Skipping duplicate: JID_35f672d1 (posted within 7 days)
⏭️  Skipping duplicate: JID_da537281 (posted within 7 days)
⏭️  Skipping duplicate: JID_3a244b89-bah_jobs-JID_14bc5fd8-junior_r0230617 (posted within 7 days)
[2025-12-15T20:04:08.677Z] [BOT] ⏭️  Skipping duplicate: JID_3a244b89-bah_jobs-JID_eae44490-junior_r0230619 (posted within 7 days)
⏭️  Skipping duplicate: JID_e4a1c099 (posted within 7 days)
⏭️  Skipping duplicate: JID_285e805e (posted within 7 days)
[2025-12-15T20:04:08.679Z] [BOT] ✅ Loaded pending queue: 14 total (0 pending, 14 enriched, 0 posted)
[2025-12-15T20:04:08.681Z] [BOT] ✅ Saved pending queue: 14 total (0 pending, 4 enriched, 10 posted)
[2025-12-15T20:04:08.681Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-15T20:04:08.719Z] [BOT] 📂 Loaded 129 existing routing entries
[2025-12-15T20:04:08.755Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 139
   Timestamp: 2025-12-15T20:04:08.754Z
[2025-12-15T20:04:10.764Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2910) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*