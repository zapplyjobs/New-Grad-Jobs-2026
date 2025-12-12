# Discord Bot Execution Audit
**Timestamp:** 2025-12-12T04:44:23.973Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-12T04:43:48.563Z] ========================================
[2025-12-12T04:43:48.565Z] Discord Bot Execution Log
[2025-12-12T04:43:48.565Z] Environment: GitHub Actions
[2025-12-12T04:43:48.565Z] Node Version: v20.19.6
[2025-12-12T04:43:48.565Z] ========================================
[2025-12-12T04:43:48.565Z] Environment Variables Check:
[2025-12-12T04:43:48.565Z] DISCORD_TOKEN: ✅ Set
[2025-12-12T04:43:48.565Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.566Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-12T04:43:48.566Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-12T04:43:48.566Z] 
Multi-Channel Configuration:
[2025-12-12T04:43:48.566Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.566Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.566Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.566Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.566Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.566Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.566Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.566Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.566Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-12T04:43:48.567Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-12T04:43:48.567Z] 
Data Files Check:
[2025-12-12T04:43:48.567Z] .github/data/new_jobs.json: ✅ Exists (10 items, 103590 bytes)
[2025-12-12T04:43:48.568Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 17417 bytes)
[2025-12-12T04:43:48.568Z] 
========================================
[2025-12-12T04:43:48.568Z] Starting Enhanced Discord Bot...
[2025-12-12T04:43:48.568Z] ========================================
[2025-12-12T04:43:49.134Z] [BOT] ✅ Loaded V2 database: 27 jobs
[2025-12-12T04:43:49.803Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-12T04:43:49.803Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-12T04:43:49.803Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-12T04:43:49.804Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-12T04:43:49.910Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 136
[2025-12-12T04:43:49.910Z] [BOT] ⏭️  Skipping duplicate: JID_f9bb03c4-1_r-266543-1 (posted within 7 days)
[2025-12-12T04:43:49.910Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - 1 at Mastercard
[2025-12-12T04:43:49.910Z] [BOT] ⏭️  Skipping duplicate: JID_80832c91-2026_r0054979-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2025-12-12T04:43:49.911Z] [BOT] ⏭️  Skipping duplicate: JID_54b586ca (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2025-12-12T04:43:49.911Z] [BOT] 📬 Found 7 new jobs (3 already posted)...
[2025-12-12T04:43:49.912Z] [BOT] 📋 After blacklist filter: 7 jobs (0 blacklisted)
📋 After data quality filter: 7 jobs (0 invalid)
[2025-12-12T04:43:49.912Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2025-12-12T04:43:49.912Z] [BOT] 📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-12T04:43:49.914Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-12T04:43:49.914Z] [BOT] 📍 [ROUTING] "Junior Full Stack Developer" @ ORG_2b03a7ca
[2025-12-12T04:43:49.915Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:43:49.919Z] [BOT ERROR] (node:2676) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-12T04:43:50.134Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Developer @ ORG_2b03a7ca in #💻・tech-jobs
[2025-12-12T04:43:50.134Z] [BOT] ✅ Industry: Junior Full Stack Developer @ ORG_2b03a7ca
[2025-12-12T04:43:51.850Z] [BOT] ✅ Created forum post: 🏢 Junior Full Stack Developer @ ORG_2b03a7ca in #💻・remote-usa
[2025-12-12T04:43:51.850Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-12T04:43:53.350Z] [BOT] 💾 Marked as posted: Junior Full Stack Developer @ ORG_2b03a7ca (instance #1)
[2025-12-12T04:43:53.350Z] [BOT] 💾 BEFORE ARCHIVING: 28 jobs in database
[2025-12-12T04:43:53.350Z] [BOT] ✅ No jobs to archive (all 28 jobs within 7-day window)
[2025-12-12T04:43:53.376Z] [BOT] 💾 Saved posted_jobs.json: 28 active jobs
[2025-12-12T04:43:53.377Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Junior Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
[2025-12-12T04:43:53.377Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:43:53.582Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2025-12-12T04:43:53.582Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2025-12-12T04:43:55.268Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-12T04:43:56.768Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2025-12-12T04:43:56.769Z] [BOT] 💾 BEFORE ARCHIVING: 29 jobs in database
✅ No jobs to archive (all 29 jobs within 7-day window)
[2025-12-12T04:43:56.770Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:43:56.770Z] [BOT] 📍 [ROUTING] "Full-Stack Developer, Junior" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2025-12-12T04:43:56.770Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:43:56.959Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer, Junior @ ORG_39417f32 Allen in #💻・tech-jobs
[2025-12-12T04:43:56.959Z] [BOT] ✅ Industry: Full-Stack Developer, Junior @ ORG_39417f32 Allen
[2025-12-12T04:43:58.697Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Developer, Junior @ ORG_39417f32 Allen in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:44:00.198Z] [BOT] 💾 Marked as posted: Full-Stack Developer, Junior @ ORG_39417f32 Allen (instance #1)
[2025-12-12T04:44:00.198Z] [BOT] 💾 BEFORE ARCHIVING: 30 jobs in database
✅ No jobs to archive (all 30 jobs within 7-day window)
[2025-12-12T04:44:00.200Z] [BOT] 💾 Saved posted_jobs.json: 30 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:44:00.200Z] [BOT] 📍 [ROUTING] "Korean Bilingual Software Test Engineer (Entry Level)" @ ORG_d5c1b124 Solutions
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:44:00.753Z] [BOT] ✅ Created forum post: 🏢 Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions in #💻・tech-jobs
[2025-12-12T04:44:00.753Z] [BOT] ✅ Industry: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions
[2025-12-12T04:44:02.459Z] [BOT] ✅ Created forum post: 🏢 Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions in #🤠・austin
[2025-12-12T04:44:02.460Z] [BOT] ✅ Location: 🤠・austin
[2025-12-12T04:44:03.961Z] [BOT] 💾 Marked as posted: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions (instance #1)
[2025-12-12T04:44:03.961Z] [BOT] 💾 BEFORE ARCHIVING: 31 jobs in database
✅ No jobs to archive (all 31 jobs within 7-day window)
[2025-12-12T04:44:03.962Z] [BOT] 💾 Saved posted_jobs.json: 31 active jobs
[2025-12-12T04:44:03.963Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Associate Software Quality Engineer I" @ ORG_df6ef51e
   Category: TECH (matched: "software")
[2025-12-12T04:44:03.963Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:44:04.345Z] [BOT] ✅ Created forum post: 🏢 Associate Software Quality Engineer I @ ORG_df6ef51e in #💻・tech-jobs
  ✅ Industry: Associate Software Quality Engineer I @ ORG_df6ef51e
[2025-12-12T04:44:06.092Z] [BOT] ✅ Created forum post: 🏢 Associate Software Quality Engineer I @ ORG_df6ef51e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-12T04:44:07.593Z] [BOT] 💾 Marked as posted: Associate Software Quality Engineer I @ ORG_df6ef51e (instance #1)
[2025-12-12T04:44:07.593Z] [BOT] 💾 BEFORE ARCHIVING: 32 jobs in database
✅ No jobs to archive (all 32 jobs within 7-day window)
[2025-12-12T04:44:07.595Z] [BOT] 💾 Saved posted_jobs.json: 32 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:44:07.595Z] [BOT] 📍 [ROUTING] "Associate Cloud Engineer" @ ORG_591935b1 Storage
   Category: TECH (matched: "DevOps/SRE")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-12T04:44:07.832Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Engineer @ ORG_591935b1 Storage in #💻・tech-jobs
[2025-12-12T04:44:07.832Z] [BOT] ✅ Industry: Associate Cloud Engineer @ ORG_591935b1 Storage
[2025-12-12T04:44:09.535Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Engineer @ ORG_591935b1 Storage in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-12T04:44:11.036Z] [BOT] 💾 Marked as posted: Associate Cloud Engineer @ ORG_591935b1 Storage (instance #1)
[2025-12-12T04:44:11.036Z] [BOT] 💾 BEFORE ARCHIVING: 33 jobs in database
✅ No jobs to archive (all 33 jobs within 7-day window)
[2025-12-12T04:44:11.038Z] [BOT] 💾 Saved posted_jobs.json: 33 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-12T04:44:14.039Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-12T04:44:14.039Z] [BOT] 📍 [ROUTING] "Biostatistician/AI Data Scientist 1" @ ORG_a96b217e
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-12T04:44:14.410Z] [BOT] ✅ Created forum post: 🏢 Biostatistician/AI Data Scientist 1 @ ORG_a96b217e in #🤖・ai-jobs
  ✅ Industry: Biostatistician/AI Data Scientist 1 @ ORG_a96b217e
[2025-12-12T04:44:16.093Z] [BOT] ✅ Created forum post: 🏢 Biostatistician/AI Data Scientist 1 @ ORG_a96b217e in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-12T04:44:17.594Z] [BOT] 💾 Marked as posted: Biostatistician/AI Data Scientist 1 @ ORG_a96b217e (instance #1)
[2025-12-12T04:44:17.594Z] [BOT] 💾 BEFORE ARCHIVING: 34 jobs in database
✅ No jobs to archive (all 34 jobs within 7-day window)
[2025-12-12T04:44:17.596Z] [BOT] 💾 Saved posted_jobs.json: 34 active jobs
[2025-12-12T04:44:17.596Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-12T04:44:20.597Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2025-12-12T04:44:20.597Z] [BOT] ⏭️  Skipping duplicate: JID_66641ac6 (posted within 7 days)
⏭️  Skipping duplicate: JID_1938a0bd (posted within 7 days)
[2025-12-12T04:44:20.597Z] [BOT] ⏭️  Skipping duplicate: JID_3a244b89-bah_jobs-JID_eae44490-junior_r0230620 (posted within 7 days)
⏭️  Skipping duplicate: JID_9fba6108-ao7167525_jr101482 (posted within 7 days)
⏭️  Skipping duplicate: JID_9573866e-i_r8298-1 (posted within 7 days)
[2025-12-12T04:44:20.597Z] [BOT] ⏭️  Skipping duplicate: JID_a4d142a8 (posted within 7 days)
⏭️  Skipping duplicate: JID_b29f0920-i_34595-1 (posted within 7 days)
[2025-12-12T04:44:20.601Z] [BOT] ✅ Loaded pending queue: 372 total (362 pending, 10 enriched, 0 posted)
[2025-12-12T04:44:20.608Z] [BOT] ✅ Saved pending queue: 372 total (341 pending, 3 enriched, 28 posted)
[2025-12-12T04:44:20.608Z] [BOT] 📋 Updated queue: marked 28 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-12T04:44:20.644Z] [BOT] 📂 Loaded 24 existing routing entries
[2025-12-12T04:44:20.680Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
   Total entries: 31
   Timestamp: 2025-12-12T04:44:20.680Z
[2025-12-12T04:44:22.690Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2676) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*