# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T08:56:56.142Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T08:55:55.724Z] ========================================
[2025-12-16T08:55:55.726Z] Discord Bot Execution Log
[2025-12-16T08:55:55.726Z] Environment: GitHub Actions
[2025-12-16T08:55:55.726Z] Node Version: v20.19.6
[2025-12-16T08:55:55.726Z] ========================================
[2025-12-16T08:55:55.726Z] Environment Variables Check:
[2025-12-16T08:55:55.726Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T08:55:55.726Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.727Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T08:55:55.727Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T08:55:55.727Z] 
Multi-Channel Configuration:
[2025-12-16T08:55:55.727Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.727Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.727Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.727Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.727Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.727Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.727Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.727Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.728Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T08:55:55.728Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T08:55:55.728Z] 
Data Files Check:
[2025-12-16T08:55:55.728Z] .github/data/new_jobs.json: ✅ Exists (10 items, 50772 bytes)
[2025-12-16T08:55:55.730Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 249594 bytes)
[2025-12-16T08:55:55.731Z] 
========================================
[2025-12-16T08:55:55.731Z] Starting Enhanced Discord Bot...
[2025-12-16T08:55:55.731Z] ========================================
[2025-12-16T08:55:56.257Z] [BOT] ✅ Loaded V2 database: 405 jobs
[2025-12-16T08:55:56.848Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T08:55:56.848Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T08:55:56.849Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T08:55:56.849Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T08:55:56.903Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T08:55:56.974Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 197
[2025-12-16T08:55:56.976Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T08:55:56.976Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T08:55:56.976Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T08:55:56.977Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T08:55:56.977Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T08:55:56.983Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-16T08:55:56.983Z] [BOT] 📍 [ROUTING] "Outpatient Therapist - PHP - Behavioral Health" @ ORG_64e21aeaint Health
[2025-12-16T08:55:56.983Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-16T08:55:57.000Z] [BOT ERROR] (node:2772) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T08:55:57.163Z] [BOT] ✅ Created forum post: 🏢 Outpatient Therapist - PHP - Behavioral Health @ ORG_64e21aeaint Health in #🩺・healthcare-jobs
[2025-12-16T08:55:57.163Z] [BOT] ✅ Industry: Outpatient Therapist - PHP - Behavioral Health @ ORG_64e21aeaint Health
[2025-12-16T08:55:58.936Z] [BOT] ✅ Created forum post: 🏢 Outpatient Therapist - PHP - Behavioral Health @ ORG_64e21aeaint Health in #💻・remote-usa
[2025-12-16T08:55:58.936Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T08:56:00.436Z] [BOT] 💾 Marked as posted: Outpatient Therapist - PHP - Behavioral Health @ ORG_64e21aeaint Health (instance #1)
[2025-12-16T08:56:00.436Z] [BOT] 💾 BEFORE ARCHIVING: 406 jobs in database
[2025-12-16T08:56:00.436Z] [BOT] ✅ No jobs to archive (all 406 jobs within 7-day window)
[2025-12-16T08:56:00.446Z] [BOT] 💾 Saved posted_jobs.json: 406 active jobs
[2025-12-16T08:56:00.446Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:03.448Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-16T08:56:03.448Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_5464a891 AI
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T08:56:03.448Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T08:56:03.605Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_5464a891 AI in #🤖・ai-jobs
[2025-12-16T08:56:03.606Z] [BOT] ✅ Industry: Machine Learning Engineer @ ORG_5464a891 AI
[2025-12-16T08:56:05.352Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer @ ORG_5464a891 AI in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:56:06.852Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ ORG_5464a891 AI (instance #1)
[2025-12-16T08:56:06.852Z] [BOT] 💾 BEFORE ARCHIVING: 407 jobs in database
[2025-12-16T08:56:06.852Z] [BOT] ✅ No jobs to archive (all 407 jobs within 7-day window)
[2025-12-16T08:56:06.857Z] [BOT] 💾 Saved posted_jobs.json: 407 active jobs
[2025-12-16T08:56:06.857Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:06.857Z] [BOT] 📍 [ROUTING] "Full-Stack Engineer" @ ORG_91268016
   Category: AI (matched: "AI/ML")
[2025-12-16T08:56:06.857Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T08:56:07.230Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Engineer @ ORG_91268016 in #🤖・ai-jobs
[2025-12-16T08:56:07.230Z] [BOT] ✅ Industry: Full-Stack Engineer @ ORG_91268016
[2025-12-16T08:56:08.870Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Engineer @ ORG_91268016 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T08:56:10.371Z] [BOT] 💾 Marked as posted: Full-Stack Engineer @ ORG_91268016 (instance #1)
[2025-12-16T08:56:10.371Z] [BOT] 💾 BEFORE ARCHIVING: 408 jobs in database
[2025-12-16T08:56:10.372Z] [BOT] ✅ No jobs to archive (all 408 jobs within 7-day window)
[2025-12-16T08:56:10.376Z] [BOT] 💾 Saved posted_jobs.json: 408 active jobs
[2025-12-16T08:56:10.376Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:13.377Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-16T08:56:13.377Z] [BOT] 📍 [ROUTING] "Modeling Simulation and Analysis Engineer 2 - Tucson, AZ" @ ORG_75f04b84
   Category: TECH (matched: "engineer/engineering")
[2025-12-16T08:56:13.378Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:56:13.626Z] [BOT] ✅ Created forum post: 🏢 Modeling Simulation and Analysis Engineer 2 - Tucson, AZ @ ORG_75f04b84 in #💻・tech-jobs
[2025-12-16T08:56:13.627Z] [BOT] ✅ Industry: Modeling Simulation and Analysis Engineer 2 - Tucson, AZ @ ORG_75f04b84
[2025-12-16T08:56:15.364Z] [BOT] ✅ Created forum post: 🏢 Modeling Simulation and Analysis Engineer 2 - Tucson, AZ @ ORG_75f04b84 in #💻・remote-usa
[2025-12-16T08:56:15.364Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T08:56:16.864Z] [BOT] 💾 Marked as posted: Modeling Simulation and Analysis Engineer 2 - Tucson, AZ @ ORG_75f04b84 (instance #1)
[2025-12-16T08:56:16.865Z] [BOT] 💾 BEFORE ARCHIVING: 409 jobs in database
[2025-12-16T08:56:16.865Z] [BOT] ✅ No jobs to archive (all 409 jobs within 7-day window)
[2025-12-16T08:56:16.869Z] [BOT] 💾 Saved posted_jobs.json: 409 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:16.870Z] [BOT] 📍 [ROUTING] "GIS Technician" @ ORG_73114028
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T08:56:17.104Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ ORG_73114028 in #💻・tech-jobs
  ✅ Industry: GIS Technician @ ORG_73114028
[2025-12-16T08:56:18.792Z] [BOT] ✅ Created forum post: 🏢 GIS Technician @ ORG_73114028 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T08:56:20.292Z] [BOT] 💾 Marked as posted: GIS Technician @ ORG_73114028 (instance #1)
[2025-12-16T08:56:20.293Z] [BOT] 💾 BEFORE ARCHIVING: 410 jobs in database
[2025-12-16T08:56:20.293Z] [BOT] ✅ No jobs to archive (all 410 jobs within 7-day window)
[2025-12-16T08:56:20.297Z] [BOT] 💾 Saved posted_jobs.json: 410 active jobs
[2025-12-16T08:56:20.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:23.299Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2025-12-16T08:56:23.299Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Ultrafast Total X-ray Scattering" @ ORG_a867f63f National Laboratory
   Category: SUPPLY-CHAIN (matched: "distribution")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2025-12-16T08:56:23.592Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Ultrafast Total X-ray Scattering @ ORG_a867f63f National Laboratory in #🏗️・JID_b7c6683f
  ✅ Industry: Postdoctoral Appointee - Ultrafast Total X-ray Scattering @ ORG_a867f63f National Laboratory
[2025-12-16T08:56:25.415Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Ultrafast Total X-ray Scattering @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T08:56:26.917Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Ultrafast Total X-ray Scattering @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-16T08:56:26.917Z] [BOT] 💾 BEFORE ARCHIVING: 411 jobs in database
[2025-12-16T08:56:26.917Z] [BOT] ✅ No jobs to archive (all 411 jobs within 7-day window)
[2025-12-16T08:56:26.922Z] [BOT] 💾 Saved posted_jobs.json: 411 active jobs
[2025-12-16T08:56:26.922Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:29.922Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-16T08:56:29.923Z] [BOT] 📍 [ROUTING] "Research Professional" @ ORG_9d38443e of Chicago
[2025-12-16T08:56:29.923Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-16T08:56:30.606Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #💰・finance-jobs
  ✅ Industry: Research Professional @ ORG_9d38443e of Chicago
[2025-12-16T08:56:32.555Z] [BOT] ✅ Created forum post: 🏢 Research Professional @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T08:56:34.055Z] [BOT] 💾 Marked as posted: Research Professional @ ORG_9d38443e of Chicago (instance #1)
[2025-12-16T08:56:34.055Z] [BOT] 💾 BEFORE ARCHIVING: 412 jobs in database
[2025-12-16T08:56:34.056Z] [BOT] ✅ No jobs to archive (all 412 jobs within 7-day window)
[2025-12-16T08:56:34.060Z] [BOT] 💾 Saved posted_jobs.json: 412 active jobs
[2025-12-16T08:56:34.060Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:37.061Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-16T08:56:37.062Z] [BOT] 📍 [ROUTING] "Engineering Students Seeking Full-Time Employment" @ ORG_6adce842
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-16T08:56:37.062Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T08:56:37.356Z] [BOT] ✅ Created forum post: 🏢 Engineering Students Seeking Full-Time Employment @ ORG_6adce842 in #📈・JID_fb739488
[2025-12-16T08:56:37.356Z] [BOT] ✅ Industry: Engineering Students Seeking Full-Time Employment @ ORG_6adce842
[2025-12-16T08:56:38.986Z] [BOT] ✅ Created forum post: 🏢 Engineering Students Seeking Full-Time Employment @ ORG_6adce842 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T08:56:40.486Z] [BOT] 💾 Marked as posted: Engineering Students Seeking Full-Time Employment @ ORG_6adce842 (instance #1)
[2025-12-16T08:56:40.487Z] [BOT] 💾 BEFORE ARCHIVING: 413 jobs in database
[2025-12-16T08:56:40.487Z] [BOT] ✅ No jobs to archive (all 413 jobs within 7-day window)
[2025-12-16T08:56:40.491Z] [BOT] 💾 Saved posted_jobs.json: 413 active jobs
[2025-12-16T08:56:40.491Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:40.491Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst 1" @ ORG_d7d2f0ff & Southern Financial Group
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-16T08:56:40.491Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T08:56:40.670Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group in #📈・JID_fb739488
  ✅ Industry: Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group
[2025-12-16T08:56:42.362Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T08:56:43.862Z] [BOT] 💾 Marked as posted: Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group (instance #1)
[2025-12-16T08:56:43.862Z] [BOT] 💾 BEFORE ARCHIVING: 414 jobs in database
[2025-12-16T08:56:43.863Z] [BOT] ✅ No jobs to archive (all 414 jobs within 7-day window)
[2025-12-16T08:56:43.867Z] [BOT] 💾 Saved posted_jobs.json: 414 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:46.867Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-16T08:56:46.867Z] [BOT] 📍 [ROUTING] "Senior Associate - Application Development - Greenville TX" @ L3Harris Technologies
   Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-16T08:56:47.084Z] [BOT] ✅ Created forum post: 🏢 Senior Associate - Application Development - Greenville TX @ L3Harris Technologies in #💲・sales-jobs
[2025-12-16T08:56:47.085Z] [BOT] ✅ Industry: Senior Associate - Application Development - Greenville TX @ L3Harris Technologies
[2025-12-16T08:56:48.869Z] [BOT] ✅ Created forum post: 🏢 Senior Associate - Application Development - Greenville TX @ L3Harris Technologies in #🤠・austin
[2025-12-16T08:56:48.869Z] [BOT] ✅ Location: 🤠・austin
[2025-12-16T08:56:50.369Z] [BOT] 💾 Marked as posted: Senior Associate - Application Development - Greenville TX @ L3Harris Technologies (instance #1)
[2025-12-16T08:56:50.369Z] [BOT] 💾 BEFORE ARCHIVING: 415 jobs in database
[2025-12-16T08:56:50.370Z] [BOT] ✅ No jobs to archive (all 415 jobs within 7-day window)
[2025-12-16T08:56:50.374Z] [BOT] 💾 Saved posted_jobs.json: 415 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T08:56:53.376Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T08:56:53.376Z] [BOT] ⏭️  Skipping duplicate: JID_9f131a57-cx_1-job-307036 (posted within 7 days)
[2025-12-16T08:56:53.376Z] [BOT] ⏭️  Skipping duplicate: JID_502a9755 (posted within 7 days)
[2025-12-16T08:56:53.376Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_1fcb91dd-az_01787168 (posted within 7 days)
⏭️  Skipping duplicate: JID_d92a548b-cx_1-job-19551 (posted within 7 days)
[2025-12-16T08:56:53.376Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_67027ea6-scattering_421245 (posted within 7 days)
[2025-12-16T08:56:53.376Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-professional_jr31456 (posted within 7 days)
[2025-12-16T08:56:53.376Z] [BOT] ⏭️  Skipping duplicate: JID_09ab46bb (posted within 7 days)
[2025-12-16T08:56:53.376Z] [BOT] ⏭️  Skipping duplicate: JID_2bf7ebd0 (posted within 7 days)
[2025-12-16T08:56:53.377Z] [BOT] ⏭️  Skipping duplicate: JID_b04c890f (posted within 7 days)
[2025-12-16T08:56:53.377Z] [BOT] ⏭️  Skipping duplicate: JID_effc6dad (posted within 7 days)
[2025-12-16T08:56:53.380Z] [BOT] ✅ Loaded pending queue: 478 total (458 pending, 20 enriched, 0 posted)
[2025-12-16T08:56:53.388Z] [BOT] ✅ Saved pending queue: 478 total (458 pending, 10 enriched, 10 posted)
[2025-12-16T08:56:53.388Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T08:56:53.426Z] [BOT] 📂 Loaded 390 existing routing entries
[2025-12-16T08:56:53.465Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 400
   Timestamp: 2025-12-16T08:56:53.463Z
[2025-12-16T08:56:53.466Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
   Total attempts: 20
[2025-12-16T08:56:53.466Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T08:56:55.476Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2772) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*