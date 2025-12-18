# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T19:51:06.981Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T19:50:12.806Z] ========================================
[2025-12-18T19:50:12.808Z] Discord Bot Execution Log
[2025-12-18T19:50:12.808Z] Environment: GitHub Actions
[2025-12-18T19:50:12.808Z] Node Version: v20.19.6
[2025-12-18T19:50:12.808Z] ========================================
[2025-12-18T19:50:12.808Z] Environment Variables Check:
[2025-12-18T19:50:12.808Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T19:50:12.808Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.808Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T19:50:12.808Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T19:50:12.808Z] 
Multi-Channel Configuration:
[2025-12-18T19:50:12.808Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.809Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.809Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.809Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.809Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.809Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.809Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.809Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.809Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T19:50:12.809Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T19:50:12.809Z] 
Data Files Check:
[2025-12-18T19:50:12.810Z] .github/data/new_jobs.json: ✅ Exists (10 items, 34075 bytes)
[2025-12-18T19:50:12.812Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 296855 bytes)
[2025-12-18T19:50:12.812Z] 
========================================
[2025-12-18T19:50:12.812Z] Starting Enhanced Discord Bot...
[2025-12-18T19:50:12.812Z] ========================================
[2025-12-18T19:50:13.337Z] [BOT] ✅ Loaded V2 database: 485 jobs
[2025-12-18T19:50:14.174Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T19:50:14.174Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T19:50:14.174Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T19:50:14.175Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T19:50:14.225Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T19:50:14.276Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 106
[2025-12-18T19:50:14.279Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T19:50:14.279Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T19:50:14.279Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T19:50:14.280Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T19:50:14.280Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T19:50:14.285Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-18T19:50:14.286Z] [BOT] 📍 [ROUTING] "Senior Associate Systems Engineer" @ ORG_d6d2009d
[2025-12-18T19:50:14.286Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:50:14.303Z] [BOT ERROR] (node:3505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T19:50:14.703Z] [BOT] ✅ Created forum post: 🏢 Senior Associate Systems Engineer @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Senior Associate Systems Engineer @ ORG_d6d2009d
[2025-12-18T19:50:16.394Z] [BOT] ✅ Created forum post: 🏢 Senior Associate Systems Engineer @ ORG_d6d2009d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:50:17.894Z] [BOT] 💾 Marked as posted: Senior Associate Systems Engineer @ ORG_d6d2009d (instance #1)
[2025-12-18T19:50:17.894Z] [BOT] 💾 BEFORE ARCHIVING: 486 jobs in database
[2025-12-18T19:50:17.895Z] [BOT] ✅ No jobs to archive (all 486 jobs within 7-day window)
[2025-12-18T19:50:17.903Z] [BOT] 💾 Saved posted_jobs.json: 486 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:50:17.904Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_64dba1b4
[2025-12-18T19:50:17.904Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:50:18.111Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_64dba1b4 in #💻・tech-jobs
[2025-12-18T19:50:18.112Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_64dba1b4
[2025-12-18T19:50:19.792Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate @ ORG_64dba1b4 in #🚌・boston
[2025-12-18T19:50:19.793Z] [BOT] ✅ Location: 🚌・boston
[2025-12-18T19:50:21.292Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate @ ORG_64dba1b4 (instance #1)
[2025-12-18T19:50:21.293Z] [BOT] 💾 BEFORE ARCHIVING: 487 jobs in database
[2025-12-18T19:50:21.293Z] [BOT] ✅ No jobs to archive (all 487 jobs within 7-day window)
[2025-12-18T19:50:21.298Z] [BOT] 💾 Saved posted_jobs.json: 487 active jobs
[2025-12-18T19:50:21.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:50:21.298Z] [BOT] 📍 [ROUTING] "Leadership Program - Software Engineering - July 2026" @ ORG_ac67699e
[2025-12-18T19:50:21.298Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:50:21.589Z] [BOT] ✅ Created forum post: 🏢 Leadership Program - Software Engineering - July 2026 @ ORG_ac67699e in #💻・tech-jobs
  ✅ Industry: Leadership Program - Software Engineering - July 2026 @ ORG_ac67699e
[2025-12-18T19:50:23.333Z] [BOT] ✅ Created forum post: 🏢 Leadership Program - Software Engineering - July 2026 @ ORG_ac67699e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:50:24.834Z] [BOT] 💾 Marked as posted: Leadership Program - Software Engineering - July 2026 @ ORG_ac67699e (instance #1)
[2025-12-18T19:50:24.834Z] [BOT] 💾 BEFORE ARCHIVING: 488 jobs in database
[2025-12-18T19:50:24.835Z] [BOT] ✅ No jobs to archive (all 488 jobs within 7-day window)
[2025-12-18T19:50:24.840Z] [BOT] 💾 Saved posted_jobs.json: 488 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:50:24.841Z] [BOT] 📍 [ROUTING] "Analyst 1 – Hospitality Analytics - Corporate - Las Vegas" @ ORG_742553d6 Entertainment
[2025-12-18T19:50:24.841Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:50:25.104Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 – Hospitality Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment in #💻・tech-jobs
[2025-12-18T19:50:25.104Z] [BOT] ✅ Industry: Analyst 1 – Hospitality Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment
[2025-12-18T19:50:28.094Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 – Hospitality Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:50:29.595Z] [BOT] 💾 Marked as posted: Analyst 1 – Hospitality Analytics - Corporate - Las Vegas @ ORG_742553d6 Entertainment (instance #1)
[2025-12-18T19:50:29.595Z] [BOT] 💾 BEFORE ARCHIVING: 489 jobs in database
[2025-12-18T19:50:29.595Z] [BOT] ✅ No jobs to archive (all 489 jobs within 7-day window)
[2025-12-18T19:50:29.600Z] [BOT] 💾 Saved posted_jobs.json: 489 active jobs
[2025-12-18T19:50:29.600Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:50:29.601Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
[2025-12-18T19:50:29.601Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:50:30.343Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #💻・tech-jobs
[2025-12-18T19:50:30.343Z] [BOT] ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2025-12-18T19:50:32.037Z] [BOT] ✅ Created forum post: 🔴 Software Developer 1 @ ORG_dc7620eb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-18T19:50:33.538Z] [BOT] 💾 Marked as posted: Software Developer 1 @ ORG_dc7620eb (instance #1)
[2025-12-18T19:50:33.538Z] [BOT] 💾 BEFORE ARCHIVING: 490 jobs in database
[2025-12-18T19:50:33.539Z] [BOT] ✅ No jobs to archive (all 490 jobs within 7-day window)
[2025-12-18T19:50:33.545Z] [BOT] 💾 Saved posted_jobs.json: 490 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:50:33.545Z] [BOT] 📍 [ROUTING] "Software Engineer - Database Technologies" @ ORG_dc7620eb
[2025-12-18T19:50:33.545Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:50:33.810Z] [BOT] ✅ Created forum post: 🔴 Software Engineer - Database Technologies @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Software Engineer - Database Technologies @ ORG_dc7620eb
[2025-12-18T19:50:35.595Z] [BOT] ✅ Created forum post: 🔴 Software Engineer - Database Technologies @ ORG_dc7620eb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T19:50:37.096Z] [BOT] 💾 Marked as posted: Software Engineer - Database Technologies @ ORG_dc7620eb (instance #1)
[2025-12-18T19:50:37.096Z] [BOT] 💾 BEFORE ARCHIVING: 491 jobs in database
[2025-12-18T19:50:37.096Z] [BOT] ✅ No jobs to archive (all 491 jobs within 7-day window)
[2025-12-18T19:50:37.102Z] [BOT] 💾 Saved posted_jobs.json: 491 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:50:40.102Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-18T19:50:40.103Z] [BOT] 📍 [ROUTING] "Analyst – Domestic Scouting" @ ORG_2bc58fcc League Baseball
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-18T19:50:40.628Z] [BOT] ✅ Created forum post: 🏢 Analyst – Domestic Scouting @ ORG_2bc58fcc League Baseball in #🩺・healthcare-jobs
  ✅ Industry: Analyst – Domestic Scouting @ ORG_2bc58fcc League Baseball
[2025-12-18T19:50:42.368Z] [BOT] ✅ Created forum post: 🏢 Analyst – Domestic Scouting @ ORG_2bc58fcc League Baseball in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:50:43.868Z] [BOT] 💾 Marked as posted: Analyst – Domestic Scouting @ ORG_2bc58fcc League Baseball (instance #1)
[2025-12-18T19:50:43.868Z] [BOT] 💾 BEFORE ARCHIVING: 492 jobs in database
[2025-12-18T19:50:43.868Z] [BOT] ✅ No jobs to archive (all 492 jobs within 7-day window)
[2025-12-18T19:50:43.874Z] [BOT] 💾 Saved posted_jobs.json: 492 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:50:46.874Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-18T19:50:46.875Z] [BOT] 📍 [ROUTING] "Geotypical Production Analyst 1" @ ORG_397501d7 Technology
   Category: AI (matched: "machine learning")
[2025-12-18T19:50:46.875Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T19:50:47.258Z] [BOT] ✅ Created forum post: 🏢 Geotypical Production Analyst 1 @ ORG_397501d7 Technology in #🤖・ai-jobs
  ✅ Industry: Geotypical Production Analyst 1 @ ORG_397501d7 Technology
[2025-12-18T19:50:48.976Z] [BOT] ✅ Created forum post: 🏢 Geotypical Production Analyst 1 @ ORG_397501d7 Technology in #🏙️・san-bruno
  ✅ Location: 🏙️・san-bruno
[2025-12-18T19:50:50.476Z] [BOT] 💾 Marked as posted: Geotypical Production Analyst 1 @ ORG_397501d7 Technology (instance #1)
[2025-12-18T19:50:50.477Z] [BOT] 💾 BEFORE ARCHIVING: 493 jobs in database
[2025-12-18T19:50:50.477Z] [BOT] ✅ No jobs to archive (all 493 jobs within 7-day window)
[2025-12-18T19:50:50.482Z] [BOT] 💾 Saved posted_jobs.json: 493 active jobs
[2025-12-18T19:50:50.482Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:50:50.482Z] [BOT] 📍 [ROUTING] "Data Conversion Specialist 1" @ ORG_2ec4b129
   Category: AI (matched: "machine learning")
[2025-12-18T19:50:50.482Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T19:50:50.771Z] [BOT] ✅ Created forum post: 🏢 Data Conversion Specialist 1 @ ORG_2ec4b129 in #🤖・ai-jobs
  ✅ Industry: Data Conversion Specialist 1 @ ORG_2ec4b129
[2025-12-18T19:50:52.479Z] [BOT] ✅ Created forum post: 🏢 Data Conversion Specialist 1 @ ORG_2ec4b129 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:50:53.980Z] [BOT] 💾 Marked as posted: Data Conversion Specialist 1 @ ORG_2ec4b129 (instance #1)
💾 BEFORE ARCHIVING: 494 jobs in database
[2025-12-18T19:50:53.981Z] [BOT] ✅ No jobs to archive (all 494 jobs within 7-day window)
[2025-12-18T19:50:53.986Z] [BOT] 💾 Saved posted_jobs.json: 494 active jobs
[2025-12-18T19:50:53.986Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:50:56.987Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-18T19:50:56.987Z] [BOT] 📍 [ROUTING] "Instrument Operator 1 - Surveying" @ ORG_bdc26476
[2025-12-18T19:50:56.987Z] [BOT] Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-18T19:50:57.413Z] [BOT] ✅ Created forum post: 🏢 Instrument Operator 1 - Surveying @ ORG_bdc26476 in #📁・JID_e938df7b
[2025-12-18T19:50:57.413Z] [BOT] ✅ Industry: Instrument Operator 1 - Surveying @ ORG_bdc26476
[2025-12-18T19:50:59.316Z] [BOT] ✅ Created forum post: 🏢 Instrument Operator 1 - Surveying @ ORG_bdc26476 in #💻・remote-usa
[2025-12-18T19:50:59.316Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T19:51:00.817Z] [BOT] 💾 Marked as posted: Instrument Operator 1 - Surveying @ ORG_bdc26476 (instance #1)
[2025-12-18T19:51:00.818Z] [BOT] 💾 BEFORE ARCHIVING: 495 jobs in database
[2025-12-18T19:51:00.818Z] [BOT] ✅ No jobs to archive (all 495 jobs within 7-day window)
[2025-12-18T19:51:00.823Z] [BOT] 💾 Saved posted_jobs.json: 495 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:51:03.824Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T19:51:03.824Z] [BOT] ⏭️  Skipping duplicate: JID_ba4ad378 (posted within 7 days)
[2025-12-18T19:51:03.824Z] [BOT] ⏭️  Skipping duplicate: JID_272deec7 (posted within 7 days)
⏭️  Skipping duplicate: JID_c1126351-associate_r136622-1 (posted within 7 days)
[2025-12-18T19:51:03.824Z] [BOT] ⏭️  Skipping duplicate: JID_75b8d7d2 (posted within 7 days)
[2025-12-18T19:51:03.824Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-74872 (posted within 7 days)
⏭️  Skipping duplicate: JID_2fb7f596 (posted within 7 days)
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-309552 (posted within 7 days)
[2025-12-18T19:51:03.824Z] [BOT] ⏭️  Skipping duplicate: JID_4f0e26ca (posted within 7 days)
[2025-12-18T19:51:03.825Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-312181 (posted within 7 days)
⏭️  Skipping duplicate: JID_bba0bf0e (posted within 7 days)
[2025-12-18T19:51:03.828Z] [BOT] ✅ Loaded pending queue: 487 total (467 pending, 20 enriched, 0 posted)
[2025-12-18T19:51:03.835Z] [BOT] ✅ Saved pending queue: 487 total (467 pending, 10 enriched, 10 posted)
[2025-12-18T19:51:03.835Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T19:51:03.876Z] [BOT] 📂 Loaded 469 existing routing entries
[2025-12-18T19:51:03.917Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 479
   Timestamp: 2025-12-18T19:51:03.915Z
[2025-12-18T19:51:03.918Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T19:51:03.918Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T19:51:03.918Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-18T19:51:03.918Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2025-12-18T19:51:03.918Z] [BOT] 2. #💻・remote-usa: 6 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🚌・boston: 1 posts
     5. #🌧️・seattle: 1 posts
[2025-12-18T19:51:03.919Z] [BOT] [STATS] Channel stats saved
[2025-12-18T19:51:05.930Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3505) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*