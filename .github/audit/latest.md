# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T00:46:15.443Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T00:45:27.865Z] ========================================
[2026-01-06T00:45:27.867Z] Discord Bot Execution Log
[2026-01-06T00:45:27.867Z] Environment: GitHub Actions
[2026-01-06T00:45:27.867Z] Node Version: v20.19.6
[2026-01-06T00:45:27.867Z] ========================================
[2026-01-06T00:45:27.867Z] Environment Variables Check:
[2026-01-06T00:45:27.867Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T00:45:27.867Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.867Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T00:45:27.868Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T00:45:27.868Z] 
Multi-Channel Configuration:
[2026-01-06T00:45:27.868Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.868Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.868Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.868Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.868Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.868Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.868Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.868Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.868Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T00:45:27.868Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T00:45:27.868Z] 
Data Files Check:
[2026-01-06T00:45:27.869Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64893 bytes)
[2026-01-06T00:45:27.874Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 679762 bytes)
[2026-01-06T00:45:27.874Z] 
========================================
[2026-01-06T00:45:27.874Z] Starting Enhanced Discord Bot...
[2026-01-06T00:45:27.874Z] ========================================
[2026-01-06T00:45:28.320Z] [BOT] ✅ Loaded V2 database: 1335 jobs
[2026-01-06T00:45:29.027Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T00:45:29.028Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T00:45:29.028Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T00:45:29.028Z] [BOT] ✅ Loaded pending queue: 15 total (0 pending, 15 enriched, 0 posted)
[2026-01-06T00:45:29.029Z] [BOT] [BOT] 📬 Found 15 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T00:45:29.031Z] [BOT] ⏭️  Skipping duplicate: JID_f31bd15a (posted within 7 days)
[2026-01-06T00:45:29.031Z] [BOT] ⏭️ Skipping already posted: ROLE_c3066d87 at Tesla
[2026-01-06T00:45:29.031Z] [BOT] 📬 Found 14 new jobs (1 already posted)...
[2026-01-06T00:45:29.031Z] [BOT] 📋 After blacklist filter: 14 jobs (0 blacklisted)
[2026-01-06T00:45:29.031Z] [BOT] 📋 After data quality filter: 14 jobs (0 invalid)
[2026-01-06T00:45:29.032Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-06T00:45:29.032Z] [BOT] ⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T00:45:29.036Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-06T00:45:29.037Z] [BOT] 📍 [ROUTING] "Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics" @ ORG_f5f75c9b U
   Category: AI (matched: "machine learning")
[2026-01-06T00:45:29.037Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-06T00:45:29.041Z] [BOT ERROR] (node:4115) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T00:45:29.420Z] [BOT] ✅ Created forum post: 🏢 Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics @ ORG_f5f75c9b U in #🤖・ai-jobs
[2026-01-06T00:45:29.420Z] [BOT] ✅ Industry: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics @ ORG_f5f75c9b U
[2026-01-06T00:45:31.361Z] [BOT] ✅ Created forum post: 🏢 Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics @ ORG_f5f75c9b U in #💻・remote-usa
[2026-01-06T00:45:31.361Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-06T00:45:32.862Z] [BOT] 💾 Marked as posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics @ ORG_f5f75c9b U (instance #1)
[2026-01-06T00:45:32.862Z] [BOT] 💾 BEFORE ARCHIVING: 1336 jobs in database
[2026-01-06T00:45:32.863Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-06T00:45:32.867Z] [BOT] 📦 Archived 5 jobs to 2025-12.json (5 total in archive)
[2026-01-06T00:45:32.867Z] [BOT] ✅ Archiving complete: 5 archived, 1331 active
[2026-01-06T00:45:32.875Z] [BOT] 💾 Saved posted_jobs.json: 1331 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:45:32.875Z] [BOT] 📍 [ROUTING] "Predoctoral Appointee - Engineer Research Associate" @ ORG_a867f63f National Laboratory
[2026-01-06T00:45:32.875Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-06T00:45:33.181Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Appointee - Engineer Research Associate @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2026-01-06T00:45:33.181Z] [BOT] ✅ Industry: Predoctoral Appointee - Engineer Research Associate @ ORG_a867f63f National Laboratory
[2026-01-06T00:45:34.927Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Appointee - Engineer Research Associate @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-06T00:45:36.429Z] [BOT] 💾 Marked as posted: Predoctoral Appointee - Engineer Research Associate @ ORG_a867f63f National Laboratory (instance #1)
💾 BEFORE ARCHIVING: 1332 jobs in database
[2026-01-06T00:45:36.430Z] [BOT] ✅ No jobs to archive (all 1332 jobs within 7-day window)
[2026-01-06T00:45:36.441Z] [BOT] 💾 Saved posted_jobs.json: 1332 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:45:36.442Z] [BOT] 📍 [ROUTING] "Research Analyst" @ ORG_fe16a941 Lang LaSalle (JLL)
   Category: AI (matched: "artificial intelligence")
[2026-01-06T00:45:36.442Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-06T00:45:36.644Z] [BOT] ✅ Created forum post: 🏢 Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL) in #🤖・ai-jobs
  ✅ Industry: Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-06T00:45:38.464Z] [BOT] ✅ Created forum post: 🏢 Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL) in #🌉・san-francisco
[2026-01-06T00:45:38.464Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-06T00:45:39.965Z] [BOT] 💾 Marked as posted: Research Analyst @ ORG_fe16a941 Lang LaSalle (JLL) (instance #1)
💾 BEFORE ARCHIVING: 1333 jobs in database
[2026-01-06T00:45:39.966Z] [BOT] ✅ No jobs to archive (all 1333 jobs within 7-day window)
[2026-01-06T00:45:39.974Z] [BOT] 💾 Saved posted_jobs.json: 1333 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:45:39.975Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Software Development Engineer" @ ORG_72fd3ae0
[2026-01-06T00:45:39.975Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T00:45:40.392Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Software Development Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: 2026 University Graduate - Software Development Engineer @ ORG_72fd3ae0
[2026-01-06T00:45:42.191Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T00:45:43.692Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Software Development Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-06T00:45:43.692Z] [BOT] 💾 BEFORE ARCHIVING: 1334 jobs in database
[2026-01-06T00:45:43.693Z] [BOT] ✅ No jobs to archive (all 1334 jobs within 7-day window)
[2026-01-06T00:45:43.702Z] [BOT] 💾 Saved posted_jobs.json: 1334 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:45:46.703Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-06T00:45:46.704Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_bbacffd9
   Category: TECH (matched: "software")
[2026-01-06T00:45:46.704Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:45:46.991Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_bbacffd9
[2026-01-06T00:45:48.782Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-06T00:45:50.282Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_bbacffd9 (instance #1)
💾 BEFORE ARCHIVING: 1335 jobs in database
[2026-01-06T00:45:50.283Z] [BOT] ✅ No jobs to archive (all 1335 jobs within 7-day window)
[2026-01-06T00:45:50.291Z] [BOT] 💾 Saved posted_jobs.json: 1335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:45:50.292Z] [BOT] 📍 [ROUTING] "Product Data Management Specialist - Entry or Associate Level" @ ORG_b344d80e Boeing Company
[2026-01-06T00:45:50.292Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:45:50.507Z] [BOT] ✅ Created forum post: 🏢 Product Data Management Specialist - Entry or Associate Level @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Product Data Management Specialist - Entry or Associate Level @ ORG_b344d80e Boeing Company
[2026-01-06T00:45:52.252Z] [BOT] ✅ Created forum post: 🏢 Product Data Management Specialist - Entry or Associate Level @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T00:45:53.753Z] [BOT] 💾 Marked as posted: Product Data Management Specialist - Entry or Associate Level @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-06T00:45:53.754Z] [BOT] 💾 BEFORE ARCHIVING: 1336 jobs in database
[2026-01-06T00:45:53.754Z] [BOT] ✅ No jobs to archive (all 1336 jobs within 7-day window)
[2026-01-06T00:45:53.764Z] [BOT] 💾 Saved posted_jobs.json: 1336 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:45:53.764Z] [BOT] 📍 [ROUTING] "Alternative Data Management - Analyst" @ iCapital Network
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:45:53.929Z] [BOT] ✅ Created forum post: 🏢 Alternative Data Management - Analyst @ iCapital Network in #💻・tech-jobs
[2026-01-06T00:45:53.929Z] [BOT] ✅ Industry: Alternative Data Management - Analyst @ iCapital Network
[2026-01-06T00:45:56.084Z] [BOT] ✅ Created forum post: 🏢 Alternative Data Management - Analyst @ iCapital Network in #💻・remote-usa
[2026-01-06T00:45:56.085Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-06T00:45:57.585Z] [BOT] 💾 Marked as posted: Alternative Data Management - Analyst @ iCapital Network (instance #1)
[2026-01-06T00:45:57.586Z] [BOT] 💾 BEFORE ARCHIVING: 1337 jobs in database
[2026-01-06T00:45:57.587Z] [BOT] ✅ No jobs to archive (all 1337 jobs within 7-day window)
[2026-01-06T00:45:57.596Z] [BOT] 💾 Saved posted_jobs.json: 1337 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:45:57.596Z] [BOT] 📍 [ROUTING] "Web Developer 1 - UI for Arcgis Enterprise" @ ORG_0fb6ee9c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T00:45:57.782Z] [BOT] ✅ Created forum post: 🏢 Web Developer 1 - UI for Arcgis Enterprise @ ORG_0fb6ee9c in #💻・tech-jobs
  ✅ Industry: Web Developer 1 - UI for Arcgis Enterprise @ ORG_0fb6ee9c
[2026-01-06T00:45:59.284Z] [BOT] 💾 Marked as posted: Web Developer 1 - UI for Arcgis Enterprise @ ORG_0fb6ee9c (instance #1)
[2026-01-06T00:45:59.284Z] [BOT] 💾 BEFORE ARCHIVING: 1338 jobs in database
[2026-01-06T00:45:59.285Z] [BOT] ✅ No jobs to archive (all 1338 jobs within 7-day window)
[2026-01-06T00:45:59.293Z] [BOT] 💾 Saved posted_jobs.json: 1338 active jobs
[2026-01-06T00:45:59.293Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T00:46:02.294Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2026-01-06T00:46:02.294Z] [BOT] 📍 [ROUTING] "Quantitative Model Analyst 1" @ ORG_5e4eb7c5 Bank
   Category: HEALTHCARE (matched: "healthcare")
[2026-01-06T00:46:02.294Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-06T00:46:02.695Z] [BOT] ✅ Created forum post: 🏢 Quantitative Model Analyst 1 @ ORG_5e4eb7c5 Bank in #🩺・healthcare-jobs
  ✅ Industry: Quantitative Model Analyst 1 @ ORG_5e4eb7c5 Bank
[2026-01-06T00:46:04.350Z] [BOT] ✅ Created forum post: 🏢 Quantitative Model Analyst 1 @ ORG_5e4eb7c5 Bank in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T00:46:05.850Z] [BOT] 💾 Marked as posted: Quantitative Model Analyst 1 @ ORG_5e4eb7c5 Bank (instance #1)
💾 BEFORE ARCHIVING: 1339 jobs in database
[2026-01-06T00:46:05.851Z] [BOT] ✅ No jobs to archive (all 1339 jobs within 7-day window)
[2026-01-06T00:46:05.860Z] [BOT] 💾 Saved posted_jobs.json: 1339 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:46:05.861Z] [BOT] 📍 [ROUTING] "Associate Air Quality Consultant" @ ORG_43fdb8a4
[2026-01-06T00:46:05.861Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-06T00:46:06.027Z] [BOT] ✅ Created forum post: 🏢 Associate Air Quality Consultant @ ORG_43fdb8a4 in #🩺・healthcare-jobs
  ✅ Industry: Associate Air Quality Consultant @ ORG_43fdb8a4
[2026-01-06T00:46:07.765Z] [BOT] ✅ Created forum post: 🏢 Associate Air Quality Consultant @ ORG_43fdb8a4 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-06T00:46:09.266Z] [BOT] 💾 Marked as posted: Associate Air Quality Consultant @ ORG_43fdb8a4 (instance #1)
[2026-01-06T00:46:09.266Z] [BOT] 💾 BEFORE ARCHIVING: 1340 jobs in database
[2026-01-06T00:46:09.267Z] [BOT] ✅ No jobs to archive (all 1340 jobs within 7-day window)
[2026-01-06T00:46:09.276Z] [BOT] 💾 Saved posted_jobs.json: 1340 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T00:46:12.276Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-06T00:46:12.276Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
[2026-01-06T00:46:12.276Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
[2026-01-06T00:46:12.276Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
[2026-01-06T00:46:12.277Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
[2026-01-06T00:46:12.277Z] [BOT] ⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
[2026-01-06T00:46:12.277Z] [BOT] ⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
[2026-01-06T00:46:12.277Z] [BOT] ⏭️  Skipping duplicate: JID_cbe01bac (posted within 7 days)
[2026-01-06T00:46:12.277Z] [BOT] ⏭️  Skipping duplicate: JID_847c9fea (posted within 7 days)
[2026-01-06T00:46:12.277Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_35faf930-engineer_r160657 (posted within 7 days)
[2026-01-06T00:46:12.278Z] [BOT] ✅ Loaded pending queue: 15 total (0 pending, 15 enriched, 0 posted)
[2026-01-06T00:46:12.279Z] [BOT] ✅ Saved pending queue: 15 total (0 pending, 5 enriched, 10 posted)
[2026-01-06T00:46:12.279Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T00:46:12.341Z] [BOT] 📂 Loaded 2251 existing routing entries
[2026-01-06T00:46:12.396Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2261
[2026-01-06T00:46:12.396Z] [BOT] Timestamp: 2026-01-06T00:46:12.386Z
[2026-01-06T00:46:12.397Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T00:46:12.397Z] [BOT] Total attempts: 20
   Successful: 19
   Failed: 0
   Skipped: 1
[2026-01-06T00:46:12.397Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T00:46:12.397Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 8
   Top channels:
     1. #🤖・ai-jobs: 4 posts
[2026-01-06T00:46:12.397Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #💻・remote-usa: 3 posts
     4. #🌉・san-francisco: 3 posts
[2026-01-06T00:46:12.398Z] [BOT] 5. #🩺・healthcare-jobs: 2 posts
[2026-01-06T00:46:12.398Z] [BOT] [STATS] Channel stats saved
[2026-01-06T00:46:14.408Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4115) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*