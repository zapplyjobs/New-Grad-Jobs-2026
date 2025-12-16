# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T04:44:08.201Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T04:43:20.902Z] ========================================
[2025-12-16T04:43:20.904Z] Discord Bot Execution Log
[2025-12-16T04:43:20.904Z] Environment: GitHub Actions
[2025-12-16T04:43:20.904Z] Node Version: v20.19.6
[2025-12-16T04:43:20.904Z] ========================================
[2025-12-16T04:43:20.904Z] Environment Variables Check:
[2025-12-16T04:43:20.904Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T04:43:20.904Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T04:43:20.905Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T04:43:20.905Z] 
Multi-Channel Configuration:
[2025-12-16T04:43:20.905Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T04:43:20.905Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T04:43:20.906Z] 
Data Files Check:
[2025-12-16T04:43:20.906Z] .github/data/new_jobs.json: ✅ Exists (10 items, 40279 bytes)
[2025-12-16T04:43:20.907Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 147649 bytes)
[2025-12-16T04:43:20.907Z] 
========================================
[2025-12-16T04:43:20.907Z] Starting Enhanced Discord Bot...
[2025-12-16T04:43:20.907Z] ========================================
[2025-12-16T04:43:21.422Z] [BOT] ✅ Loaded V2 database: 235 jobs
[2025-12-16T04:43:21.906Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T04:43:21.907Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T04:43:21.907Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T04:43:21.907Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T04:43:21.966Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T04:43:22.031Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T04:43:22.033Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T04:43:22.033Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T04:43:22.033Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T04:43:22.034Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T04:43:22.034Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T04:43:22.038Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-16T04:43:22.039Z] [BOT] 📍 [ROUTING] "Associate Data Scientist / Data Scientist 1" @ ORG_71783ccc Biotechnologies
[2025-12-16T04:43:22.039Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T04:43:22.056Z] [BOT ERROR] (node:2837) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T04:43:22.335Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist / Data Scientist 1 @ ORG_71783ccc Biotechnologies in #🤖・ai-jobs
[2025-12-16T04:43:22.336Z] [BOT] ✅ Industry: Associate Data Scientist / Data Scientist 1 @ ORG_71783ccc Biotechnologies
[2025-12-16T04:43:23.958Z] [BOT] ✅ Created forum post: 🏢 Associate Data Scientist / Data Scientist 1 @ ORG_71783ccc Biotechnologies in #🏙️・san-bruno
[2025-12-16T04:43:23.958Z] [BOT] ✅ Location: 🏙️・san-bruno
[2025-12-16T04:43:25.460Z] [BOT] 💾 Marked as posted: Associate Data Scientist / Data Scientist 1 @ ORG_71783ccc Biotechnologies (instance #1)
[2025-12-16T04:43:25.460Z] [BOT] 💾 BEFORE ARCHIVING: 236 jobs in database
[2025-12-16T04:43:25.460Z] [BOT] ✅ No jobs to archive (all 236 jobs within 7-day window)
[2025-12-16T04:43:25.467Z] [BOT] 💾 Saved posted_jobs.json: 236 active jobs
[2025-12-16T04:43:25.467Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:43:25.467Z] [BOT] 📍 [ROUTING] "University Graduate - Applied Science" @ ORG_72fd3ae0
[2025-12-16T04:43:25.468Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T04:43:25.808Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Applied Science @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate - Applied Science @ ORG_72fd3ae0
[2025-12-16T04:43:27.506Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Applied Science @ ORG_72fd3ae0 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T04:43:29.006Z] [BOT] 💾 Marked as posted: University Graduate - Applied Science @ ORG_72fd3ae0 (instance #1)
[2025-12-16T04:43:29.006Z] [BOT] 💾 BEFORE ARCHIVING: 237 jobs in database
[2025-12-16T04:43:29.006Z] [BOT] ✅ No jobs to archive (all 237 jobs within 7-day window)
[2025-12-16T04:43:29.009Z] [BOT] 💾 Saved posted_jobs.json: 237 active jobs
[2025-12-16T04:43:29.009Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:43:29.009Z] [BOT] 📍 [ROUTING] "Artificial Intelligence" @ ORG_9d38443e of Miami
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T04:43:29.010Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T04:43:29.166Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence @ ORG_9d38443e of Miami in #🤖・ai-jobs
[2025-12-16T04:43:29.166Z] [BOT] ✅ Industry: Artificial Intelligence @ ORG_9d38443e of Miami
[2025-12-16T04:43:30.796Z] [BOT] ✅ Created forum post: 🏢 Artificial Intelligence @ ORG_9d38443e of Miami in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:43:32.296Z] [BOT] 💾 Marked as posted: Artificial Intelligence @ ORG_9d38443e of Miami (instance #1)
[2025-12-16T04:43:32.296Z] [BOT] 💾 BEFORE ARCHIVING: 238 jobs in database
✅ No jobs to archive (all 238 jobs within 7-day window)
[2025-12-16T04:43:32.301Z] [BOT] 💾 Saved posted_jobs.json: 238 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:43:32.302Z] [BOT] 📍 [ROUTING] "Assistant Professor - Data Science" @ ORG_4b95ce62 A&M University - Corpus Christi
[2025-12-16T04:43:32.302Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T04:43:32.432Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi
[2025-12-16T04:43:34.103Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-16T04:43:35.604Z] [BOT] 💾 Marked as posted: Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi (instance #1)
[2025-12-16T04:43:35.604Z] [BOT] 💾 BEFORE ARCHIVING: 239 jobs in database
[2025-12-16T04:43:35.604Z] [BOT] ✅ No jobs to archive (all 239 jobs within 7-day window)
[2025-12-16T04:43:35.607Z] [BOT] 💾 Saved posted_jobs.json: 239 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:43:38.608Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-16T04:43:38.609Z] [BOT] 📍 [ROUTING] "Data Technician" @ ORG_9d38443e of Oklahoma
[2025-12-16T04:43:38.609Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:43:38.764Z] [BOT] ✅ Created forum post: 🏢 Data Technician @ ORG_9d38443e of Oklahoma in #💻・tech-jobs
  ✅ Industry: Data Technician @ ORG_9d38443e of Oklahoma
[2025-12-16T04:43:40.443Z] [BOT] ✅ Created forum post: 🏢 Data Technician @ ORG_9d38443e of Oklahoma in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:43:41.943Z] [BOT] 💾 Marked as posted: Data Technician @ ORG_9d38443e of Oklahoma (instance #1)
[2025-12-16T04:43:41.943Z] [BOT] 💾 BEFORE ARCHIVING: 240 jobs in database
[2025-12-16T04:43:41.943Z] [BOT] ✅ No jobs to archive (all 240 jobs within 7-day window)
[2025-12-16T04:43:41.949Z] [BOT] 💾 Saved posted_jobs.json: 240 active jobs
[2025-12-16T04:43:41.949Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:43:41.950Z] [BOT] 📍 [ROUTING] "Analyst Advanced Analytics" @ ORG_ae835968 media
[2025-12-16T04:43:41.950Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:43:42.149Z] [BOT] ✅ Created forum post: 🏢 Analyst Advanced Analytics @ ORG_ae835968 media in #💻・tech-jobs
  ✅ Industry: Analyst Advanced Analytics @ ORG_ae835968 media
[2025-12-16T04:43:43.866Z] [BOT] ✅ Created forum post: 🏢 Analyst Advanced Analytics @ ORG_ae835968 media in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-16T04:43:45.367Z] [BOT] 💾 Marked as posted: Analyst Advanced Analytics @ ORG_ae835968 media (instance #1)
[2025-12-16T04:43:45.367Z] [BOT] 💾 BEFORE ARCHIVING: 241 jobs in database
[2025-12-16T04:43:45.368Z] [BOT] ✅ No jobs to archive (all 241 jobs within 7-day window)
[2025-12-16T04:43:45.370Z] [BOT] 💾 Saved posted_jobs.json: 241 active jobs
[2025-12-16T04:43:45.371Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:43:45.371Z] [BOT] 📍 [ROUTING] "Pipeline Engineer" @ ORG_97c44ec5 Studios
   Category: TECH (matched: "engineer/engineering")
[2025-12-16T04:43:45.371Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:43:45.489Z] [BOT] ✅ Created forum post: 🏢 Pipeline Engineer @ ORG_97c44ec5 Studios in #💻・tech-jobs
[2025-12-16T04:43:45.490Z] [BOT] ✅ Industry: Pipeline Engineer @ ORG_97c44ec5 Studios
[2025-12-16T04:43:47.467Z] [BOT] ✅ Created forum post: 🏢 Pipeline Engineer @ ORG_97c44ec5 Studios in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:43:48.968Z] [BOT] 💾 Marked as posted: Pipeline Engineer @ ORG_97c44ec5 Studios (instance #1)
[2025-12-16T04:43:48.969Z] [BOT] 💾 BEFORE ARCHIVING: 242 jobs in database
[2025-12-16T04:43:48.969Z] [BOT] ✅ No jobs to archive (all 242 jobs within 7-day window)
[2025-12-16T04:43:48.972Z] [BOT] 💾 Saved posted_jobs.json: 242 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:43:48.972Z] [BOT] 📍 [ROUTING] "Application Engineer - IT Racks and Cabinets" @ ORG_9b9b6e44
   Category: TECH (matched: "engineer/engineering")
[2025-12-16T04:43:48.972Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:43:49.344Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44 in #💻・tech-jobs
  ✅ Industry: Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44
[2025-12-16T04:43:50.987Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:43:52.488Z] [BOT] 💾 Marked as posted: Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44 (instance #1)
[2025-12-16T04:43:52.488Z] [BOT] 💾 BEFORE ARCHIVING: 243 jobs in database
[2025-12-16T04:43:52.488Z] [BOT] ✅ No jobs to archive (all 243 jobs within 7-day window)
[2025-12-16T04:43:52.492Z] [BOT] 💾 Saved posted_jobs.json: 243 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:43:52.492Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Entry Level" @ ORG_c910d474 Dynamics Mission Systems
[2025-12-16T04:43:52.492Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:43:52.666Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2025-12-16T04:43:52.666Z] [BOT] ✅ Industry: Software Engineer 1 - Entry Level @ ORG_c910d474 Dynamics Mission Systems
[2025-12-16T04:43:54.492Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Entry Level @ ORG_c910d474 Dynamics Mission Systems in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-16T04:43:55.993Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Entry Level @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2025-12-16T04:43:55.993Z] [BOT] 💾 BEFORE ARCHIVING: 244 jobs in database
[2025-12-16T04:43:55.993Z] [BOT] ✅ No jobs to archive (all 244 jobs within 7-day window)
[2025-12-16T04:43:55.997Z] [BOT] 💾 Saved posted_jobs.json: 244 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:43:58.998Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-16T04:43:58.998Z] [BOT] 📍 [ROUTING] "Integration Analyst 1" @ 7-Eleven
[2025-12-16T04:43:58.998Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-16T04:43:59.303Z] [BOT] ✅ Created forum post: 🏢 Integration Analyst 1 @ 7-Eleven in #💰・finance-jobs
[2025-12-16T04:43:59.303Z] [BOT] ✅ Industry: Integration Analyst 1 @ 7-Eleven
[2025-12-16T04:44:01.020Z] [BOT] ✅ Created forum post: 🏢 Integration Analyst 1 @ 7-Eleven in #🤠・austin
[2025-12-16T04:44:01.020Z] [BOT] ✅ Location: 🤠・austin
[2025-12-16T04:44:02.521Z] [BOT] 💾 Marked as posted: Integration Analyst 1 @ 7-Eleven (instance #1)
[2025-12-16T04:44:02.522Z] [BOT] 💾 BEFORE ARCHIVING: 245 jobs in database
[2025-12-16T04:44:02.522Z] [BOT] ✅ No jobs to archive (all 245 jobs within 7-day window)
[2025-12-16T04:44:02.525Z] [BOT] 💾 Saved posted_jobs.json: 245 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:44:05.526Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T04:44:05.526Z] [BOT] ⏭️  Skipping duplicate: JID_b29499e1 (posted within 7 days)
[2025-12-16T04:44:05.526Z] [BOT] ⏭️  Skipping duplicate: JID_32a308ed (posted within 7 days)
[2025-12-16T04:44:05.526Z] [BOT] ⏭️  Skipping duplicate: JID_3dd82faa-analytics_r0016043 (posted within 7 days)
[2025-12-16T04:44:05.526Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ae2d465b-science_r160136 (posted within 7 days)
[2025-12-16T04:44:05.526Z] [BOT] ⏭️  Skipping duplicate: JID_ec6df4bc (posted within 7 days)
⏭️  Skipping duplicate: JID_b99e2b7b (posted within 7 days)
[2025-12-16T04:44:05.527Z] [BOT] ⏭️  Skipping duplicate: JID_12e13baa-_r100092114 (posted within 7 days)
[2025-12-16T04:44:05.527Z] [BOT] ⏭️  Skipping duplicate: JID_44d9a2f6-i_r25_0000009211 (posted within 7 days)
[2025-12-16T04:44:05.527Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_95243951-science_r-088833-1 (posted within 7 days)
[2025-12-16T04:44:05.527Z] [BOT] ⏭️  Skipping duplicate: JID_3f76dbbd (posted within 7 days)
[2025-12-16T04:44:05.531Z] [BOT] ✅ Loaded pending queue: 643 total (623 pending, 20 enriched, 0 posted)
[2025-12-16T04:44:05.540Z] [BOT] ✅ Saved pending queue: 643 total (623 pending, 10 enriched, 10 posted)
[2025-12-16T04:44:05.540Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T04:44:05.580Z] [BOT] 📂 Loaded 228 existing routing entries
[2025-12-16T04:44:05.618Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-16T04:44:05.618Z] [BOT] Total entries: 238
   Timestamp: 2025-12-16T04:44:05.617Z
[2025-12-16T04:44:05.619Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T04:44:05.619Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T04:44:07.631Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2837) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*