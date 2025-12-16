# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T01:40:54.011Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T01:40:00.236Z] ========================================
[2025-12-16T01:40:00.238Z] Discord Bot Execution Log
[2025-12-16T01:40:00.238Z] Environment: GitHub Actions
[2025-12-16T01:40:00.238Z] Node Version: v20.19.6
[2025-12-16T01:40:00.238Z] ========================================
[2025-12-16T01:40:00.239Z] Environment Variables Check:
[2025-12-16T01:40:00.239Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T01:40:00.239Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.239Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T01:40:00.239Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T01:40:00.239Z] 
Multi-Channel Configuration:
[2025-12-16T01:40:00.239Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.239Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.240Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.240Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.240Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.240Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.240Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.240Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.240Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T01:40:00.240Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T01:40:00.240Z] 
Data Files Check:
[2025-12-16T01:40:00.241Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51008 bytes)
[2025-12-16T01:40:00.241Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 105025 bytes)
[2025-12-16T01:40:00.242Z] 
========================================
[2025-12-16T01:40:00.242Z] Starting Enhanced Discord Bot...
[2025-12-16T01:40:00.242Z] ========================================
[2025-12-16T01:40:00.780Z] [BOT] ✅ Loaded V2 database: 165 jobs
[2025-12-16T01:40:02.583Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T01:40:02.583Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T01:40:02.583Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T01:40:02.584Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T01:40:02.705Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 171
[2025-12-16T01:40:02.706Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T01:40:02.706Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T01:40:02.706Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T01:40:02.707Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T01:40:02.707Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T01:40:02.711Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-16T01:40:02.712Z] [BOT] 📍 [ROUTING] "EMR Analyst" @ ORG_c7929267 Regional Health
[2025-12-16T01:40:02.712Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-16T01:40:02.717Z] [BOT ERROR] (node:3669) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T01:40:03.000Z] [BOT] ✅ Created forum post: 🏢 EMR Analyst @ ORG_c7929267 Regional Health in #🩺・healthcare-jobs
  ✅ Industry: EMR Analyst @ ORG_c7929267 Regional Health
[2025-12-16T01:40:04.741Z] [BOT] ✅ Created forum post: 🏢 EMR Analyst @ ORG_c7929267 Regional Health in #🗽・new-york
[2025-12-16T01:40:04.741Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-16T01:40:06.243Z] [BOT] 💾 Marked as posted: EMR Analyst @ ORG_c7929267 Regional Health (instance #1)
[2025-12-16T01:40:06.243Z] [BOT] 💾 BEFORE ARCHIVING: 166 jobs in database
[2025-12-16T01:40:06.243Z] [BOT] ✅ No jobs to archive (all 166 jobs within 7-day window)
[2025-12-16T01:40:06.250Z] [BOT] 💾 Saved posted_jobs.json: 166 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:09.250Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-16T01:40:09.251Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T01:40:09.540Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2025-12-16T01:40:11.366Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・remote-usa
[2025-12-16T01:40:11.366Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T01:40:12.867Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_f7a2cae4 (instance #1)
[2025-12-16T01:40:12.867Z] [BOT] 💾 BEFORE ARCHIVING: 167 jobs in database
✅ No jobs to archive (all 167 jobs within 7-day window)
[2025-12-16T01:40:12.870Z] [BOT] 💾 Saved posted_jobs.json: 167 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:12.870Z] [BOT] 📍 [ROUTING] "Graduate Engineer" @ Curtiss-Wright Corporation
[2025-12-16T01:40:12.870Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T01:40:13.309Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ Curtiss-Wright Corporation in #💻・tech-jobs
  ✅ Industry: Graduate Engineer @ Curtiss-Wright Corporation
[2025-12-16T01:40:15.228Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ Curtiss-Wright Corporation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T01:40:16.729Z] [BOT] 💾 Marked as posted: Graduate Engineer @ Curtiss-Wright Corporation (instance #1)
[2025-12-16T01:40:16.729Z] [BOT] 💾 BEFORE ARCHIVING: 168 jobs in database
✅ No jobs to archive (all 168 jobs within 7-day window)
[2025-12-16T01:40:16.731Z] [BOT] 💾 Saved posted_jobs.json: 168 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:16.732Z] [BOT] 📍 [ROUTING] "Data Integration Analyst 1" @ ORG_1ce21df7 Solutions
[2025-12-16T01:40:16.732Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T01:40:16.909Z] [BOT] ✅ Created forum post: 🏢 Data Integration Analyst 1 @ ORG_1ce21df7 Solutions in #💻・tech-jobs
  ✅ Industry: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions
[2025-12-16T01:40:18.597Z] [BOT] ✅ Created forum post: 🏢 Data Integration Analyst 1 @ ORG_1ce21df7 Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T01:40:20.099Z] [BOT] 💾 Marked as posted: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions (instance #1)
[2025-12-16T01:40:20.099Z] [BOT] 💾 BEFORE ARCHIVING: 169 jobs in database
✅ No jobs to archive (all 169 jobs within 7-day window)
[2025-12-16T01:40:20.102Z] [BOT] 💾 Saved posted_jobs.json: 169 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:20.103Z] [BOT] 📍 [ROUTING] "Engineer - Obsolescence" @ ORG_c910d474 Dynamics
[2025-12-16T01:40:20.103Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T01:40:20.373Z] [BOT] ✅ Created forum post: 🏢 Engineer - Obsolescence @ ORG_c910d474 Dynamics in #💻・tech-jobs
[2025-12-16T01:40:20.373Z] [BOT] ✅ Industry: Engineer - Obsolescence @ ORG_c910d474 Dynamics
[2025-12-16T01:40:22.221Z] [BOT] ✅ Created forum post: 🏢 Engineer - Obsolescence @ ORG_c910d474 Dynamics in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T01:40:23.722Z] [BOT] 💾 Marked as posted: Engineer - Obsolescence @ ORG_c910d474 Dynamics (instance #1)
[2025-12-16T01:40:23.722Z] [BOT] 💾 BEFORE ARCHIVING: 170 jobs in database
[2025-12-16T01:40:23.722Z] [BOT] ✅ No jobs to archive (all 170 jobs within 7-day window)
[2025-12-16T01:40:23.725Z] [BOT] 💾 Saved posted_jobs.json: 170 active jobs
[2025-12-16T01:40:23.725Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:26.726Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-16T01:40:26.727Z] [BOT] 📍 [ROUTING] "Data Annotation Specialist" @ ORG_1fbf7080
[2025-12-16T01:40:26.727Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T01:40:27.059Z] [BOT] ✅ Created forum post: 🏢 Data Annotation Specialist @ ORG_1fbf7080 in #🤖・ai-jobs
[2025-12-16T01:40:27.059Z] [BOT] ✅ Industry: Data Annotation Specialist @ ORG_1fbf7080
[2025-12-16T01:40:28.745Z] [BOT] ✅ Created forum post: 🏢 Data Annotation Specialist @ ORG_1fbf7080 in #💻・remote-usa
[2025-12-16T01:40:28.745Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T01:40:30.246Z] [BOT] 💾 Marked as posted: Data Annotation Specialist @ ORG_1fbf7080 (instance #1)
[2025-12-16T01:40:30.246Z] [BOT] 💾 BEFORE ARCHIVING: 171 jobs in database
[2025-12-16T01:40:30.247Z] [BOT] ✅ No jobs to archive (all 171 jobs within 7-day window)
[2025-12-16T01:40:30.249Z] [BOT] 💾 Saved posted_jobs.json: 171 active jobs
[2025-12-16T01:40:30.249Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:30.249Z] [BOT] 📍 [ROUTING] "Implementation Integrations Analyst 1" @ ORG_2ec4b129
[2025-12-16T01:40:30.249Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T01:40:30.539Z] [BOT] ✅ Created forum post: 🏢 Implementation Integrations Analyst 1 @ ORG_2ec4b129 in #🤖・ai-jobs
[2025-12-16T01:40:30.540Z] [BOT] ✅ Industry: Implementation Integrations Analyst 1 @ ORG_2ec4b129
[2025-12-16T01:40:32.280Z] [BOT] ✅ Created forum post: 🏢 Implementation Integrations Analyst 1 @ ORG_2ec4b129 in #💻・remote-usa
[2025-12-16T01:40:32.280Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T01:40:33.782Z] [BOT] 💾 Marked as posted: Implementation Integrations Analyst 1 @ ORG_2ec4b129 (instance #1)
[2025-12-16T01:40:33.782Z] [BOT] 💾 BEFORE ARCHIVING: 172 jobs in database
[2025-12-16T01:40:33.782Z] [BOT] ✅ No jobs to archive (all 172 jobs within 7-day window)
[2025-12-16T01:40:33.786Z] [BOT] 💾 Saved posted_jobs.json: 172 active jobs
[2025-12-16T01:40:33.786Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:36.787Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2025-12-16T01:40:36.787Z] [BOT] 📍 [ROUTING] "Regulatory Data Analyst 1" @ ORG_a151ceb1 Financial
[2025-12-16T01:40:36.787Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T01:40:37.102Z] [BOT] ✅ Created forum post: 🏢 Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  in #📈・JID_fb739488
[2025-12-16T01:40:37.102Z] [BOT] ✅ Industry: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial
[2025-12-16T01:40:38.876Z] [BOT] ✅ Created forum post: 🏢 Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  in #🤠・austin
[2025-12-16T01:40:38.876Z] [BOT] ✅ Location: 🤠・austin
[2025-12-16T01:40:40.378Z] [BOT] 💾 Marked as posted: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  (instance #1)
[2025-12-16T01:40:40.378Z] [BOT] 💾 BEFORE ARCHIVING: 173 jobs in database
✅ No jobs to archive (all 173 jobs within 7-day window)
[2025-12-16T01:40:40.381Z] [BOT] 💾 Saved posted_jobs.json: 173 active jobs
[2025-12-16T01:40:40.381Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:40.381Z] [BOT] 📍 [ROUTING] "Software Engineer-Developer - Development" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T01:40:40.618Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Developer - Development @ ORG_b344d80e Boeing Company in #📈・JID_fb739488
  ✅ Industry: Software Engineer-Developer - Development @ ORG_b344d80e Boeing Company
[2025-12-16T01:40:42.691Z] [BOT] ✅ Created forum post: 🏢 Software Engineer-Developer - Development @ ORG_b344d80e Boeing Company in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T01:40:44.192Z] [BOT] 💾 Marked as posted: Software Engineer-Developer - Development @ ORG_b344d80e Boeing Company (instance #1)
[2025-12-16T01:40:44.193Z] [BOT] 💾 BEFORE ARCHIVING: 174 jobs in database
[2025-12-16T01:40:44.193Z] [BOT] ✅ No jobs to archive (all 174 jobs within 7-day window)
[2025-12-16T01:40:44.196Z] [BOT] 💾 Saved posted_jobs.json: 174 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:44.196Z] [BOT] 📍 [ROUTING] "Analyst 1 - Data Science" @ ORG_17ed0843 Mutual
[2025-12-16T01:40:44.196Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T01:40:44.583Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 - Data Science @ ORG_17ed0843 Mutual in #📈・JID_fb739488
[2025-12-16T01:40:44.583Z] [BOT] ✅ Industry: Analyst 1 - Data Science @ ORG_17ed0843 Mutual
[2025-12-16T01:40:46.318Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 - Data Science @ ORG_17ed0843 Mutual in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-16T01:40:47.819Z] [BOT] 💾 Marked as posted: Analyst 1 - Data Science @ ORG_17ed0843 Mutual (instance #1)
[2025-12-16T01:40:47.819Z] [BOT] 💾 BEFORE ARCHIVING: 175 jobs in database
✅ No jobs to archive (all 175 jobs within 7-day window)
[2025-12-16T01:40:47.821Z] [BOT] 💾 Saved posted_jobs.json: 175 active jobs
[2025-12-16T01:40:47.821Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T01:40:50.822Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T01:40:50.822Z] [BOT] ⏭️  Skipping duplicate: JID_1d74e721-analyst_req_227863 (posted within 7 days)
[2025-12-16T01:40:50.822Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_b6cdd7c1-engineer_r0150489 (posted within 7 days)
⏭️  Skipping duplicate: JID_97369b62-cw_external_career_site-JID_8f5e12f0-engineer_jr10597 (posted within 7 days)
[2025-12-16T01:40:50.824Z] [BOT] ⏭️  Skipping duplicate: JID_9ecd388f-allied_external-JID_c23c0330-_r-010442 (posted within 7 days)
⏭️  Skipping duplicate: JID_64f249be (posted within 7 days)
⏭️  Skipping duplicate: JID_bbf756cd (posted within 7 days)
⏭️  Skipping duplicate: JID_64861b63-first_financial_bank-JID_96b813c1-i_jr102396 (posted within 7 days)
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_bff3fdc8-_jr2025487408-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_47ed19ae (posted within 7 days)
⏭️  Skipping duplicate: JID_c3fc9096 (posted within 7 days)
[2025-12-16T01:40:50.827Z] [BOT] ✅ Loaded pending queue: 696 total (676 pending, 20 enriched, 0 posted)
[2025-12-16T01:40:50.839Z] [BOT] ✅ Saved pending queue: 696 total (676 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2025-12-16T01:40:50.839Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-16T01:40:50.876Z] [BOT] 📂 Loaded 158 existing routing entries
[2025-12-16T01:40:50.915Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-16T01:40:50.915Z] [BOT] New entries: 10
   Total entries: 168
   Timestamp: 2025-12-16T01:40:50.914Z
[2025-12-16T01:40:50.915Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T01:40:50.916Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T01:40:52.926Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3669) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*