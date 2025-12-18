# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T20:25:30.653Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T20:24:29.310Z] ========================================
[2025-12-18T20:24:29.312Z] Discord Bot Execution Log
[2025-12-18T20:24:29.312Z] Environment: GitHub Actions
[2025-12-18T20:24:29.313Z] Node Version: v20.19.6
[2025-12-18T20:24:29.313Z] ========================================
[2025-12-18T20:24:29.313Z] Environment Variables Check:
[2025-12-18T20:24:29.313Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T20:24:29.313Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.313Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T20:24:29.313Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T20:24:29.313Z] 
Multi-Channel Configuration:
[2025-12-18T20:24:29.313Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.313Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.313Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.314Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.314Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.314Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.314Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.314Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.314Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T20:24:29.314Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T20:24:29.314Z] 
Data Files Check:
[2025-12-18T20:24:29.315Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44949 bytes)
[2025-12-18T20:24:29.317Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 308564 bytes)
[2025-12-18T20:24:29.317Z] 
========================================
[2025-12-18T20:24:29.317Z] Starting Enhanced Discord Bot...
[2025-12-18T20:24:29.317Z] ========================================
[2025-12-18T20:24:29.860Z] [BOT] ✅ Loaded V2 database: 505 jobs
[2025-12-18T20:24:30.473Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T20:24:30.473Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T20:24:30.473Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T20:24:30.474Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T20:24:30.522Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T20:24:30.574Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T20:24:30.576Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T20:24:30.577Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T20:24:30.577Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T20:24:30.578Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T20:24:30.578Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T20:24:30.582Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-18T20:24:30.583Z] [BOT] 📍 [ROUTING] "Java DevSecOps Software Engineer" @ Trace3
[2025-12-18T20:24:30.583Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:24:30.600Z] [BOT ERROR] (node:3150) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T20:24:31.167Z] [BOT] ✅ Created forum post: 🏢 Java DevSecOps Software Engineer @ Trace3 in #💻・tech-jobs
  ✅ Industry: Java DevSecOps Software Engineer @ Trace3
[2025-12-18T20:24:32.859Z] [BOT] ✅ Created forum post: 🏢 Java DevSecOps Software Engineer @ Trace3 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T20:24:34.360Z] [BOT] 💾 Marked as posted: Java DevSecOps Software Engineer @ Trace3 (instance #1)
[2025-12-18T20:24:34.360Z] [BOT] 💾 BEFORE ARCHIVING: 506 jobs in database
[2025-12-18T20:24:34.361Z] [BOT] ✅ No jobs to archive (all 506 jobs within 7-day window)
[2025-12-18T20:24:34.370Z] [BOT] 💾 Saved posted_jobs.json: 506 active jobs
[2025-12-18T20:24:34.370Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:24:34.371Z] [BOT] 📍 [ROUTING] "Developer Fellow" @ ORG_d3baafac
   Category: TECH (matched: "software")
[2025-12-18T20:24:34.371Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:24:34.575Z] [BOT] ✅ Created forum post: 🏢 Developer Fellow @ ORG_d3baafac in #💻・tech-jobs
[2025-12-18T20:24:34.576Z] [BOT] ✅ Industry: Developer Fellow @ ORG_d3baafac
[2025-12-18T20:24:36.273Z] [BOT] ✅ Created forum post: 🏢 Developer Fellow @ ORG_d3baafac in #🌉・san-francisco
[2025-12-18T20:24:36.274Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-18T20:24:37.774Z] [BOT] 💾 Marked as posted: Developer Fellow @ ORG_d3baafac (instance #1)
[2025-12-18T20:24:37.774Z] [BOT] 💾 BEFORE ARCHIVING: 507 jobs in database
[2025-12-18T20:24:37.774Z] [BOT] ✅ No jobs to archive (all 507 jobs within 7-day window)
[2025-12-18T20:24:37.779Z] [BOT] 💾 Saved posted_jobs.json: 507 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:24:37.780Z] [BOT] 📍 [ROUTING] "Analyst – Developer - Financial Systems" @ ORG_86a62f4a
[2025-12-18T20:24:37.780Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:24:37.974Z] [BOT] ✅ Created forum post: 🏢 Analyst – Developer - Financial Systems @ ORG_86a62f4a in #💻・tech-jobs
  ✅ Industry: Analyst – Developer - Financial Systems @ ORG_86a62f4a
[2025-12-18T20:24:39.816Z] [BOT] ✅ Created forum post: 🏢 Analyst – Developer - Financial Systems @ ORG_86a62f4a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:24:41.317Z] [BOT] 💾 Marked as posted: Analyst – Developer - Financial Systems @ ORG_86a62f4a (instance #1)
[2025-12-18T20:24:41.318Z] [BOT] 💾 BEFORE ARCHIVING: 508 jobs in database
[2025-12-18T20:24:41.318Z] [BOT] ✅ No jobs to archive (all 508 jobs within 7-day window)
[2025-12-18T20:24:41.324Z] [BOT] 💾 Saved posted_jobs.json: 508 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:24:41.325Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Oracle Health and Analytics" @ ORG_dc7620eb
[2025-12-18T20:24:41.325Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:24:41.501Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb
[2025-12-18T20:24:43.407Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-18T20:24:44.908Z] [BOT] 💾 Marked as posted: Advanced Degree Software Engineer - Oracle Health and Analytics @ ORG_dc7620eb (instance #1)
[2025-12-18T20:24:44.908Z] [BOT] 💾 BEFORE ARCHIVING: 509 jobs in database
[2025-12-18T20:24:44.909Z] [BOT] ✅ No jobs to archive (all 509 jobs within 7-day window)
[2025-12-18T20:24:44.914Z] [BOT] 💾 Saved posted_jobs.json: 509 active jobs
[2025-12-18T20:24:44.915Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:24:44.915Z] [BOT] 📍 [ROUTING] "Database Engineer 0" @ ORG_8b09cf05
[2025-12-18T20:24:44.915Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:24:45.198Z] [BOT] ✅ Created forum post: 🏢 Database Engineer 0 @ ORG_8b09cf05 in #💻・tech-jobs
[2025-12-18T20:24:45.198Z] [BOT] ✅ Industry: Database Engineer 0 @ ORG_8b09cf05
[2025-12-18T20:24:46.922Z] [BOT] ✅ Created forum post: 🏢 Database Engineer 0 @ ORG_8b09cf05 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:24:48.423Z] [BOT] 💾 Marked as posted: Database Engineer 0 @ ORG_8b09cf05 (instance #1)
[2025-12-18T20:24:48.423Z] [BOT] 💾 BEFORE ARCHIVING: 510 jobs in database
[2025-12-18T20:24:48.424Z] [BOT] ✅ No jobs to archive (all 510 jobs within 7-day window)
[2025-12-18T20:24:48.429Z] [BOT] 💾 Saved posted_jobs.json: 510 active jobs
[2025-12-18T20:24:48.429Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:24:51.430Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-18T20:24:51.430Z] [BOT] 📍 [ROUTING] "Material Handler" @ ORG_10a0c5f8 General Brigham
   Category: MARKETING (matched: "growth")
[2025-12-18T20:24:51.430Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-18T20:24:51.683Z] [BOT] ✅ Created forum post: 🏢 Material Handler @ ORG_10a0c5f8 General Brigham in #📣・marketing-jobs
[2025-12-18T20:24:51.683Z] [BOT] ✅ Industry: Material Handler @ ORG_10a0c5f8 General Brigham
[2025-12-18T20:24:54.796Z] [BOT] ✅ Created forum post: 🏢 Material Handler @ ORG_10a0c5f8 General Brigham in #🚌・boston
[2025-12-18T20:24:54.796Z] [BOT] ✅ Location: 🚌・boston
[2025-12-18T20:24:56.297Z] [BOT] 💾 Marked as posted: Material Handler @ ORG_10a0c5f8 General Brigham (instance #1)
[2025-12-18T20:24:56.297Z] [BOT] 💾 BEFORE ARCHIVING: 511 jobs in database
[2025-12-18T20:24:56.297Z] [BOT] ✅ No jobs to archive (all 511 jobs within 7-day window)
[2025-12-18T20:24:56.303Z] [BOT] 💾 Saved posted_jobs.json: 511 active jobs
[2025-12-18T20:24:56.303Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:24:59.304Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-18T20:24:59.304Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_a867f63f National Laboratory
[2025-12-18T20:24:59.304Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T20:24:59.862Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2025-12-18T20:24:59.862Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_a867f63f National Laboratory
[2025-12-18T20:25:01.604Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_a867f63f National Laboratory in #🌆・chicago
[2025-12-18T20:25:01.604Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-18T20:25:03.106Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-18T20:25:03.106Z] [BOT] 💾 BEFORE ARCHIVING: 512 jobs in database
[2025-12-18T20:25:03.106Z] [BOT] ✅ No jobs to archive (all 512 jobs within 7-day window)
[2025-12-18T20:25:03.117Z] [BOT] 💾 Saved posted_jobs.json: 512 active jobs
[2025-12-18T20:25:03.117Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:25:06.117Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-18T20:25:06.118Z] [BOT] 📍 [ROUTING] "Medical Assistant Resident Sleep and Respiratory Clinic" @ ORG_d8c0e00cin Healthcare
   Category: HEALTHCARE (matched: "healthcare")
[2025-12-18T20:25:06.118Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-18T20:25:06.612Z] [BOT] ✅ Created forum post: 🏢 Medical Assistant Resident Sleep and Respiratory Clinic @ ORG_d8c0e00cin Healthcare in #🩺・healthcare-jobs
[2025-12-18T20:25:06.612Z] [BOT] ✅ Industry: Medical Assistant Resident Sleep and Respiratory Clinic @ ORG_d8c0e00cin Healthcare
[2025-12-18T20:25:09.972Z] [BOT] ✅ Created forum post: 🏢 Medical Assistant Resident Sleep and Respiratory Clinic @ ORG_d8c0e00cin Healthcare in #💻・remote-usa
[2025-12-18T20:25:09.973Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T20:25:11.472Z] [BOT] 💾 Marked as posted: Medical Assistant Resident Sleep and Respiratory Clinic @ ORG_d8c0e00cin Healthcare (instance #1)
[2025-12-18T20:25:11.472Z] [BOT] 💾 BEFORE ARCHIVING: 513 jobs in database
[2025-12-18T20:25:11.473Z] [BOT] ✅ No jobs to archive (all 513 jobs within 7-day window)
[2025-12-18T20:25:11.478Z] [BOT] 💾 Saved posted_jobs.json: 513 active jobs
[2025-12-18T20:25:11.478Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:25:14.479Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-18T20:25:14.479Z] [BOT] 📍 [ROUTING] "Clinical Data Analyst - Same Day Surgery/Observation Coder" @ ORG_b344d80e University of Chicago Medicine
[2025-12-18T20:25:14.480Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2025-12-18T20:25:14.682Z] [BOT] ✅ Created forum post: 🏢 Clinical Data Analyst - Same Day Surgery/Observation Coder @ ORG_b344d80e University of Chicago Medicine in #📈・JID_fb739488
  ✅ Industry: Clinical Data Analyst - Same Day Surgery/Observation Coder @ ORG_b344d80e University of Chicago Medicine
[2025-12-18T20:25:16.454Z] [BOT] ✅ Created forum post: 🏢 Clinical Data Analyst - Same Day Surgery/Observation Coder @ ORG_b344d80e University of Chicago Medicine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-18T20:25:17.955Z] [BOT] 💾 Marked as posted: Clinical Data Analyst - Same Day Surgery/Observation Coder @ ORG_b344d80e University of Chicago Medicine (instance #1)
[2025-12-18T20:25:17.955Z] [BOT] 💾 BEFORE ARCHIVING: 514 jobs in database
[2025-12-18T20:25:17.956Z] [BOT] ✅ No jobs to archive (all 514 jobs within 7-day window)
[2025-12-18T20:25:17.962Z] [BOT] 💾 Saved posted_jobs.json: 514 active jobs
[2025-12-18T20:25:17.962Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:25:20.963Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-18T20:25:20.963Z] [BOT] 📍 [ROUTING] "Business Systems Analyst" @ ORG_f4034e7e & Dunlop
   Category: FINANCE (matched: "finance")
[2025-12-18T20:25:20.964Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2025-12-18T20:25:21.244Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst @ ORG_f4034e7e & Dunlop in #💰・finance-jobs
  ✅ Industry: Business Systems Analyst @ ORG_f4034e7e & Dunlop
[2025-12-18T20:25:23.282Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst @ ORG_f4034e7e & Dunlop in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-18T20:25:24.783Z] [BOT] 💾 Marked as posted: Business Systems Analyst @ ORG_f4034e7e & Dunlop (instance #1)
[2025-12-18T20:25:24.784Z] [BOT] 💾 BEFORE ARCHIVING: 515 jobs in database
[2025-12-18T20:25:24.784Z] [BOT] ✅ No jobs to archive (all 515 jobs within 7-day window)
[2025-12-18T20:25:24.790Z] [BOT] 💾 Saved posted_jobs.json: 515 active jobs
[2025-12-18T20:25:24.790Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:25:27.791Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T20:25:27.791Z] [BOT] ⏭️  Skipping duplicate: JID_b096e5ab (posted within 7 days)
[2025-12-18T20:25:27.791Z] [BOT] ⏭️  Skipping duplicate: JID_1d0abbb2-handler_rq4039209 (posted within 7 days)
[2025-12-18T20:25:27.791Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_47300327-operations_421270 (posted within 7 days)
[2025-12-18T20:25:27.791Z] [BOT] ⏭️  Skipping duplicate: JID_df77182b-cx_1-job-2025268 (posted within 7 days)
[2025-12-18T20:25:27.792Z] [BOT] ⏭️  Skipping duplicate: JID_b7d1ee16-resident_r145681-1 (posted within 7 days)
[2025-12-18T20:25:27.792Z] [BOT] ⏭️  Skipping duplicate: JID_d761c3b9-blackrock_professional-JID_c09acdb8-strategies_r250492 (posted within 7 days)
[2025-12-18T20:25:27.792Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-311345 (posted within 7 days)
[2025-12-18T20:25:27.792Z] [BOT] ⏭️  Skipping duplicate: JID_1194cdc2 (posted within 7 days)
[2025-12-18T20:25:27.792Z] [BOT] ⏭️  Skipping duplicate: JID_a08866a2 (posted within 7 days)
[2025-12-18T20:25:27.792Z] [BOT] ⏭️  Skipping duplicate: JID_7fc9f7d3-analyst_req-1701 (posted within 7 days)
[2025-12-18T20:25:27.796Z] [BOT] ✅ Loaded pending queue: 467 total (447 pending, 20 enriched, 0 posted)
[2025-12-18T20:25:27.804Z] [BOT] ✅ Saved pending queue: 467 total (447 pending, 10 enriched, 10 posted)
[2025-12-18T20:25:27.804Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T20:25:27.847Z] [BOT] 📂 Loaded 489 existing routing entries
[2025-12-18T20:25:27.892Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-18T20:25:27.892Z] [BOT] Total entries: 499
   Timestamp: 2025-12-18T20:25:27.890Z
[2025-12-18T20:25:27.893Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
   Total attempts: 20
[2025-12-18T20:25:27.893Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T20:25:27.893Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 11
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 3 posts
     3. #🌉・san-francisco: 2 posts
     4. #🚌・boston: 2 posts
     5. #🌆・chicago: 2 posts
[2025-12-18T20:25:27.894Z] [BOT] [STATS] Channel stats saved
[2025-12-18T20:25:29.904Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3150) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*