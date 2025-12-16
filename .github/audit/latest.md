# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T06:04:33.466Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T06:03:40.057Z] ========================================
[2025-12-16T06:03:40.059Z] Discord Bot Execution Log
[2025-12-16T06:03:40.059Z] Environment: GitHub Actions
[2025-12-16T06:03:40.059Z] Node Version: v20.19.6
[2025-12-16T06:03:40.059Z] ========================================
[2025-12-16T06:03:40.059Z] Environment Variables Check:
[2025-12-16T06:03:40.059Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T06:03:40.059Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.059Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T06:03:40.060Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T06:03:40.060Z] 
Multi-Channel Configuration:
[2025-12-16T06:03:40.060Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.060Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.060Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.060Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.060Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.060Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.060Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.060Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.060Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T06:03:40.060Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T06:03:40.060Z] 
Data Files Check:
[2025-12-16T06:03:40.061Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64225 bytes)
[2025-12-16T06:03:40.062Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 187391 bytes)
[2025-12-16T06:03:40.062Z] 
========================================
[2025-12-16T06:03:40.062Z] Starting Enhanced Discord Bot...
[2025-12-16T06:03:40.062Z] ========================================
[2025-12-16T06:03:40.580Z] [BOT] ✅ Loaded V2 database: 295 jobs
[2025-12-16T06:03:41.221Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T06:03:41.221Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T06:03:41.222Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T06:03:41.222Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T06:03:41.281Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T06:03:41.349Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T06:03:41.350Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T06:03:41.351Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T06:03:41.351Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T06:03:41.352Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T06:03:41.352Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T06:03:41.360Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-12-16T06:03:41.360Z] [BOT] 📍 [ROUTING] "Hamer Center for Community Design Support" @ ORG_478e100e University
[2025-12-16T06:03:41.360Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-16T06:03:41.378Z] [BOT ERROR] (node:2624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T06:03:41.611Z] [BOT] ✅ Created forum post: 🏢 Hamer Center for Community Design Support @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Hamer Center for Community Design Support @ ORG_478e100e University
[2025-12-16T06:03:43.305Z] [BOT] ✅ Created forum post: 🏢 Hamer Center for Community Design Support @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T06:03:44.806Z] [BOT] 💾 Marked as posted: Hamer Center for Community Design Support @ ORG_478e100e University (instance #1)
[2025-12-16T06:03:44.806Z] [BOT] 💾 BEFORE ARCHIVING: 296 jobs in database
[2025-12-16T06:03:44.806Z] [BOT] ✅ No jobs to archive (all 296 jobs within 7-day window)
[2025-12-16T06:03:44.814Z] [BOT] 💾 Saved posted_jobs.json: 296 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:03:44.814Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins" @ ORG_9d38443e of Texas - Austin
[2025-12-16T06:03:44.814Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-16T06:03:44.979Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins in #📁・JID_e938df7b
[2025-12-16T06:03:44.979Z] [BOT] ✅ Industry: Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins @ ORG_9d38443e of Texas - Austin
[2025-12-16T06:03:46.755Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T06:03:48.255Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-16T06:03:48.255Z] [BOT] 💾 BEFORE ARCHIVING: 297 jobs in database
[2025-12-16T06:03:48.256Z] [BOT] ✅ No jobs to archive (all 297 jobs within 7-day window)
[2025-12-16T06:03:48.259Z] [BOT] 💾 Saved posted_jobs.json: 297 active jobs
[2025-12-16T06:03:48.259Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:03:51.260Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-16T06:03:51.260Z] [BOT] 📍 [ROUTING] "Part-Time Research Assistant/Programmer - Yanxi Liu" @ ORG_478e100e University
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T06:03:51.260Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:03:51.534Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University in #🤖・ai-jobs
  ✅ Industry: Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University
[2025-12-16T06:03:53.191Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T06:03:54.690Z] [BOT] 💾 Marked as posted: Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University (instance #1)
[2025-12-16T06:03:54.690Z] [BOT] 💾 BEFORE ARCHIVING: 298 jobs in database
[2025-12-16T06:03:54.691Z] [BOT] ✅ No jobs to archive (all 298 jobs within 7-day window)
[2025-12-16T06:03:54.694Z] [BOT] 💾 Saved posted_jobs.json: 298 active jobs
[2025-12-16T06:03:54.694Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:03:54.694Z] [BOT] 📍 [ROUTING] "Senior Software Engineer" @ ORG_c46dc795 Innovation
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T06:03:55.061Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_c46dc795 Innovation in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer @ ORG_c46dc795 Innovation
[2025-12-16T06:03:56.741Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_c46dc795 Innovation in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-16T06:03:58.241Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_c46dc795 Innovation (instance #1)
[2025-12-16T06:03:58.242Z] [BOT] 💾 BEFORE ARCHIVING: 299 jobs in database
[2025-12-16T06:03:58.242Z] [BOT] ✅ No jobs to archive (all 299 jobs within 7-day window)
[2025-12-16T06:03:58.249Z] [BOT] 💾 Saved posted_jobs.json: 299 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T06:03:58.249Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_58b7c913 & Gamble (P&G)
   Category: AI (matched: "machine learning")
[2025-12-16T06:03:58.249Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T06:03:58.372Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_58b7c913 & Gamble (P&G) in #🤖・ai-jobs
  ✅ Industry: Data Scientist @ ORG_58b7c913 & Gamble (P&G)
[2025-12-16T06:04:00.194Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_58b7c913 & Gamble (P&G) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T06:04:01.694Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_58b7c913 & Gamble (P&G) (instance #1)
[2025-12-16T06:04:01.694Z] [BOT] 💾 BEFORE ARCHIVING: 300 jobs in database
[2025-12-16T06:04:01.695Z] [BOT] ✅ No jobs to archive (all 300 jobs within 7-day window)
[2025-12-16T06:04:01.698Z] [BOT] 💾 Saved posted_jobs.json: 300 active jobs
[2025-12-16T06:04:01.698Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:04:01.699Z] [BOT] 📍 [ROUTING] "Data Analyst - AI and Automation Focus" @ ORG_3bc51062 L. Walton School of Medicine
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T06:04:01.985Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - AI and Automation Focus @ ORG_3bc51062 L. Walton School of Medicine in #🤖・ai-jobs
[2025-12-16T06:04:01.985Z] [BOT] ✅ Industry: Data Analyst - AI and Automation Focus @ ORG_3bc51062 L. Walton School of Medicine
[2025-12-16T06:04:03.667Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - AI and Automation Focus @ ORG_3bc51062 L. Walton School of Medicine in #💻・remote-usa
[2025-12-16T06:04:03.667Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T06:04:05.167Z] [BOT] 💾 Marked as posted: Data Analyst - AI and Automation Focus @ ORG_3bc51062 L. Walton School of Medicine (instance #1)
[2025-12-16T06:04:05.167Z] [BOT] 💾 BEFORE ARCHIVING: 301 jobs in database
[2025-12-16T06:04:05.168Z] [BOT] ✅ No jobs to archive (all 301 jobs within 7-day window)
[2025-12-16T06:04:05.172Z] [BOT] 💾 Saved posted_jobs.json: 301 active jobs
[2025-12-16T06:04:05.172Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:04:08.172Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-16T06:04:08.172Z] [BOT] 📍 [ROUTING] "Research Associate" @ ORG_478e100e University
   Category: HEALTHCARE (matched: "health")
[2025-12-16T06:04:08.172Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-16T06:04:08.421Z] [BOT] ✅ Created forum post: 🏢 Research Associate @ ORG_478e100e University in #🩺・healthcare-jobs
  ✅ Industry: Research Associate @ ORG_478e100e University
[2025-12-16T06:04:10.071Z] [BOT] ✅ Created forum post: 🏢 Research Associate @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T06:04:11.572Z] [BOT] 💾 Marked as posted: Research Associate @ ORG_478e100e University (instance #1)
[2025-12-16T06:04:11.572Z] [BOT] 💾 BEFORE ARCHIVING: 302 jobs in database
[2025-12-16T06:04:11.572Z] [BOT] ✅ No jobs to archive (all 302 jobs within 7-day window)
[2025-12-16T06:04:11.577Z] [BOT] 💾 Saved posted_jobs.json: 302 active jobs
[2025-12-16T06:04:11.577Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:04:14.577Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-16T06:04:14.578Z] [BOT] 📍 [ROUTING] "Senior Salesforce Marketing Cloud Developer" @ ORG_cb7d16c1 Warrior Project
[2025-12-16T06:04:14.578Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:04:14.765Z] [BOT] ✅ Created forum post: 🏢 Senior Salesforce Marketing Cloud Developer @ ORG_cb7d16c1 Warrior Project in #💻・tech-jobs
[2025-12-16T06:04:14.766Z] [BOT] ✅ Industry: Senior Salesforce Marketing Cloud Developer @ ORG_cb7d16c1 Warrior Project
[2025-12-16T06:04:16.442Z] [BOT] ✅ Created forum post: 🏢 Senior Salesforce Marketing Cloud Developer @ ORG_cb7d16c1 Warrior Project in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T06:04:17.942Z] [BOT] 💾 Marked as posted: Senior Salesforce Marketing Cloud Developer @ ORG_cb7d16c1 Warrior Project (instance #1)
[2025-12-16T06:04:17.942Z] [BOT] 💾 BEFORE ARCHIVING: 303 jobs in database
[2025-12-16T06:04:17.942Z] [BOT] ✅ No jobs to archive (all 303 jobs within 7-day window)
[2025-12-16T06:04:17.946Z] [BOT] 💾 Saved posted_jobs.json: 303 active jobs
[2025-12-16T06:04:17.946Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:04:17.947Z] [BOT] 📍 [ROUTING] "Engineering Technician 1" @ ORG_4566b88e
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T06:04:18.154Z] [BOT] ✅ Created forum post: 🏢 Engineering Technician 1 @ ORG_4566b88e in #💻・tech-jobs
  ✅ Industry: Engineering Technician 1 @ ORG_4566b88e
[2025-12-16T06:04:19.881Z] [BOT] ✅ Created forum post: 🏢 Engineering Technician 1 @ ORG_4566b88e in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T06:04:21.381Z] [BOT] 💾 Marked as posted: Engineering Technician 1 @ ORG_4566b88e (instance #1)
[2025-12-16T06:04:21.382Z] [BOT] 💾 BEFORE ARCHIVING: 304 jobs in database
[2025-12-16T06:04:21.382Z] [BOT] ✅ No jobs to archive (all 304 jobs within 7-day window)
[2025-12-16T06:04:21.386Z] [BOT] 💾 Saved posted_jobs.json: 304 active jobs
[2025-12-16T06:04:21.386Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:04:24.386Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-16T06:04:24.386Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_0aa5052d State University (LSU)
[2025-12-16T06:04:24.386Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-16T06:04:24.583Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💰・finance-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU)
[2025-12-16T06:04:26.258Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T06:04:27.758Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_0aa5052d State University (LSU) (instance #1)
[2025-12-16T06:04:27.759Z] [BOT] 💾 BEFORE ARCHIVING: 305 jobs in database
✅ No jobs to archive (all 305 jobs within 7-day window)
[2025-12-16T06:04:27.763Z] [BOT] 💾 Saved posted_jobs.json: 305 active jobs
[2025-12-16T06:04:27.763Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T06:04:30.763Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T06:04:30.763Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_c691313b-support_req_0000068837-1 (posted within 7 days)
[2025-12-16T06:04:30.763Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_751a31a1-liu_req_0000069003-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_affb5d98-onto_careers-JID_e01449f5-engineer_r-4963 (posted within 7 days)
[2025-12-16T06:04:30.763Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_53a85d3c-associate_req_0000072097-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_d501f265-_r000135859-1 (posted within 7 days)
[2025-12-16T06:04:30.764Z] [BOT] ⏭️  Skipping duplicate: JID_4b91a557-art_and_wellness-JID_f4fb4359-focus_jr1904 (posted within 7 days)
⏭️  Skipping duplicate: JID_00c7b94d-developer_r14110 (posted within 7 days)
⏭️  Skipping duplicate: JID_c3d3f5d4-researcher_r00109651 (posted within 7 days)
[2025-12-16T06:04:30.764Z] [BOT] ⏭️  Skipping duplicate: JID_28121f68-borgwarner_careers-JID_4614606f-i_r2025-3419-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_c1e7d849-basins_r_00034762-1 (posted within 7 days)
[2025-12-16T06:04:30.768Z] [BOT] ✅ Loaded pending queue: 583 total (563 pending, 20 enriched, 0 posted)
[2025-12-16T06:04:30.777Z] [BOT] ✅ Saved pending queue: 583 total (563 pending, 10 enriched, 10 posted)
[2025-12-16T06:04:30.777Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T06:04:30.817Z] [BOT] 📂 Loaded 284 existing routing entries
[2025-12-16T06:04:30.856Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 294
   Timestamp: 2025-12-16T06:04:30.854Z
[2025-12-16T06:04:30.856Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T06:04:30.856Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T06:04:32.868Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*