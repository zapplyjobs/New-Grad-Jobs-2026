# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T23:05:16.054Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T23:04:22.335Z] ========================================
[2025-12-18T23:04:22.337Z] Discord Bot Execution Log
[2025-12-18T23:04:22.337Z] Environment: GitHub Actions
[2025-12-18T23:04:22.337Z] Node Version: v20.19.6
[2025-12-18T23:04:22.337Z] ========================================
[2025-12-18T23:04:22.337Z] Environment Variables Check:
[2025-12-18T23:04:22.337Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T23:04:22.337Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.337Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T23:04:22.338Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T23:04:22.338Z] 
Multi-Channel Configuration:
[2025-12-18T23:04:22.338Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.338Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.338Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.338Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.338Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.338Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.338Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.338Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.338Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T23:04:22.338Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T23:04:22.339Z] 
Data Files Check:
[2025-12-18T23:04:22.339Z] .github/data/new_jobs.json: ✅ Exists (10 items, 49656 bytes)
[2025-12-18T23:04:22.342Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 377091 bytes)
[2025-12-18T23:04:22.342Z] 
========================================
[2025-12-18T23:04:22.342Z] Starting Enhanced Discord Bot...
[2025-12-18T23:04:22.342Z] ========================================
[2025-12-18T23:04:22.857Z] [BOT] ✅ Loaded V2 database: 625 jobs
[2025-12-18T23:04:23.368Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T23:04:23.369Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T23:04:23.369Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T23:04:23.372Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T23:04:23.419Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T23:04:23.471Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T23:04:23.473Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T23:04:23.473Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T23:04:23.473Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T23:04:23.474Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T23:04:23.474Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T23:04:23.479Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-18T23:04:23.480Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_352dd990
[2025-12-18T23:04:23.480Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T23:04:23.497Z] [BOT ERROR] (node:2914) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T23:04:23.959Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_352dd990 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_352dd990
[2025-12-18T23:04:25.651Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_352dd990 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T23:04:27.150Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_352dd990 (instance #1)
[2025-12-18T23:04:27.151Z] [BOT] 💾 BEFORE ARCHIVING: 626 jobs in database
[2025-12-18T23:04:27.151Z] [BOT] ✅ No jobs to archive (all 626 jobs within 7-day window)
[2025-12-18T23:04:27.161Z] [BOT] 💾 Saved posted_jobs.json: 626 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T23:04:27.162Z] [BOT] 📍 [ROUTING] "Environmental Technician/Engineer – Entry Level - Air Quality Focus" @ ORG_c0e17070
[2025-12-18T23:04:27.162Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T23:04:27.296Z] [BOT] ✅ Created forum post: 🏢 Environmental Technician/Engineer – Entry Level - Air Quality Focus @ ORG_c0e17070 in #💻・tech-jobs
[2025-12-18T23:04:27.296Z] [BOT] ✅ Industry: Environmental Technician/Engineer – Entry Level - Air Quality Focus @ ORG_c0e17070
[2025-12-18T23:04:28.942Z] [BOT] ✅ Created forum post: 🏢 Environmental Technician/Engineer – Entry Level - Air Quality Focus @ ORG_c0e17070 in #💻・remote-usa
[2025-12-18T23:04:28.942Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T23:04:30.443Z] [BOT] 💾 Marked as posted: Environmental Technician/Engineer – Entry Level - Air Quality Focus @ ORG_c0e17070 (instance #1)
[2025-12-18T23:04:30.443Z] [BOT] 💾 BEFORE ARCHIVING: 627 jobs in database
[2025-12-18T23:04:30.443Z] [BOT] ✅ No jobs to archive (all 627 jobs within 7-day window)
[2025-12-18T23:04:30.450Z] [BOT] 💾 Saved posted_jobs.json: 627 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T23:04:30.450Z] [BOT] 📍 [ROUTING] "Applications Development Engineer - Bbp" @ ORG_fb8c4aa0 Corporation
[2025-12-18T23:04:30.450Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T23:04:30.613Z] [BOT] ✅ Created forum post: 🏢 Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation in #💻・tech-jobs
  ✅ Industry: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation
[2025-12-18T23:04:32.322Z] [BOT] ✅ Created forum post: 🏢 Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation in #🦢・los-angeles
[2025-12-18T23:04:32.323Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-18T23:04:33.823Z] [BOT] 💾 Marked as posted: Applications Development Engineer - Bbp @ ORG_fb8c4aa0 Corporation (instance #1)
[2025-12-18T23:04:33.823Z] [BOT] 💾 BEFORE ARCHIVING: 628 jobs in database
[2025-12-18T23:04:33.823Z] [BOT] ✅ No jobs to archive (all 628 jobs within 7-day window)
[2025-12-18T23:04:33.830Z] [BOT] 💾 Saved posted_jobs.json: 628 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T23:04:36.831Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-18T23:04:36.832Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Multiple Teams" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T23:04:36.832Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T23:04:37.176Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-18T23:04:37.177Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb
[2025-12-18T23:04:38.965Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-18T23:04:40.466Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb (instance #1)
[2025-12-18T23:04:40.466Z] [BOT] 💾 BEFORE ARCHIVING: 629 jobs in database
[2025-12-18T23:04:40.467Z] [BOT] ✅ No jobs to archive (all 629 jobs within 7-day window)
[2025-12-18T23:04:40.474Z] [BOT] 💾 Saved posted_jobs.json: 629 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T23:04:40.474Z] [BOT] 📍 [ROUTING] "AI Trainer for Thermodynamics - Freelance - Remote" @ ORG_ef39485b
[2025-12-18T23:04:40.474Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T23:04:40.733Z] [BOT] ✅ Created forum post: 🏢 AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b in #🤖・ai-jobs
  ✅ Industry: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b
[2025-12-18T23:04:42.444Z] [BOT] ✅ Created forum post: 🏢 AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T23:04:43.946Z] [BOT] 💾 Marked as posted: AI Trainer for Thermodynamics - Freelance - Remote @ ORG_ef39485b (instance #1)
[2025-12-18T23:04:43.946Z] [BOT] 💾 BEFORE ARCHIVING: 630 jobs in database
[2025-12-18T23:04:43.946Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2025-12-18T23:04:43.952Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T23:04:46.952Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-18T23:04:46.953Z] [BOT] 📍 [ROUTING] "Data Operations Associate" @ ORG_73571e71
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T23:04:46.953Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T23:04:47.131Z] [BOT] ✅ Created forum post: 🏢 Data Operations Associate @ ORG_73571e71 in #📈・JID_fb739488
  ✅ Industry: Data Operations Associate @ ORG_73571e71
[2025-12-18T23:04:48.899Z] [BOT] ✅ Created forum post: 🏢 Data Operations Associate @ ORG_73571e71 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-18T23:04:50.400Z] [BOT] 💾 Marked as posted: Data Operations Associate @ ORG_73571e71 (instance #1)
[2025-12-18T23:04:50.400Z] [BOT] 💾 BEFORE ARCHIVING: 631 jobs in database
[2025-12-18T23:04:50.401Z] [BOT] ✅ No jobs to archive (all 631 jobs within 7-day window)
[2025-12-18T23:04:50.406Z] [BOT] 💾 Saved posted_jobs.json: 631 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T23:04:50.407Z] [BOT] 📍 [ROUTING] "Data Science Graduate - Advertisement Team - PhD" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-18T23:04:50.407Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T23:04:50.407Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T23:04:50.566Z] [BOT] ✅ Created forum post: 🏢 Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb
[2025-12-18T23:04:52.385Z] [BOT] ✅ Created forum post: 🏢 Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T23:04:53.885Z] [BOT] 💾 Marked as posted: Data Science Graduate - Advertisement Team - PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-18T23:04:53.885Z] [BOT] 💾 BEFORE ARCHIVING: 632 jobs in database
[2025-12-18T23:04:53.886Z] [BOT] ✅ No jobs to archive (all 632 jobs within 7-day window)
[2025-12-18T23:04:53.892Z] [BOT] 💾 Saved posted_jobs.json: 632 active jobs
[2025-12-18T23:04:53.892Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T23:04:56.893Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2025-12-18T23:04:56.893Z] [BOT] 📍 [ROUTING] "Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe" @ ORG_31ce6e79 Turbines
   Category: HEALTHCARE (matched: "medical")
[2025-12-18T23:04:56.894Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-18T23:04:57.225Z] [BOT] ✅ Created forum post: 🏢 Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines in #🩺・healthcare-jobs
  ✅ Industry: Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines
[2025-12-18T23:04:58.942Z] [BOT] ✅ Created forum post: 🏢 Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-18T23:05:00.443Z] [BOT] 💾 Marked as posted: Solutions.Platforms.Engineered – Entry Level Rotation Program - Spe @ ORG_31ce6e79 Turbines (instance #1)
[2025-12-18T23:05:00.443Z] [BOT] 💾 BEFORE ARCHIVING: 633 jobs in database
[2025-12-18T23:05:00.443Z] [BOT] ✅ No jobs to archive (all 633 jobs within 7-day window)
[2025-12-18T23:05:00.450Z] [BOT] 💾 Saved posted_jobs.json: 633 active jobs
[2025-12-18T23:05:00.450Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T23:05:00.450Z] [BOT] 📍 [ROUTING] "Predoctoral Scholar" @ ORG_9d38443e of Chicago
[2025-12-18T23:05:00.450Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-18T23:05:00.686Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Scholar @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
  ✅ Industry: Predoctoral Scholar @ ORG_9d38443e of Chicago
[2025-12-18T23:05:02.461Z] [BOT] ✅ Created forum post: 🏢 Predoctoral Scholar @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-18T23:05:03.962Z] [BOT] 💾 Marked as posted: Predoctoral Scholar @ ORG_9d38443e of Chicago (instance #1)
[2025-12-18T23:05:03.962Z] [BOT] 💾 BEFORE ARCHIVING: 634 jobs in database
[2025-12-18T23:05:03.963Z] [BOT] ✅ No jobs to archive (all 634 jobs within 7-day window)
[2025-12-18T23:05:03.969Z] [BOT] 💾 Saved posted_jobs.json: 634 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T23:05:06.969Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-18T23:05:06.969Z] [BOT] 📍 [ROUTING] "Implementation Analyst" @ ORG_53b59486 Financial Software
[2025-12-18T23:05:06.970Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-18T23:05:07.195Z] [BOT] ✅ Created forum post: 🏢 Implementation Analyst @ ORG_53b59486 Financial Software  in #💰・finance-jobs
  ✅ Industry: Implementation Analyst @ ORG_53b59486 Financial Software
[2025-12-18T23:05:08.855Z] [BOT] ✅ Created forum post: 🏢 Implementation Analyst @ ORG_53b59486 Financial Software  in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T23:05:10.356Z] [BOT] 💾 Marked as posted: Implementation Analyst @ ORG_53b59486 Financial Software  (instance #1)
[2025-12-18T23:05:10.356Z] [BOT] 💾 BEFORE ARCHIVING: 635 jobs in database
[2025-12-18T23:05:10.357Z] [BOT] ✅ No jobs to archive (all 635 jobs within 7-day window)
[2025-12-18T23:05:10.363Z] [BOT] 💾 Saved posted_jobs.json: 635 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T23:05:13.363Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T23:05:13.364Z] [BOT] ⏭️  Skipping duplicate: JID_9f81c82f (posted within 7 days)
[2025-12-18T23:05:13.364Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_b59c9b42 (posted within 7 days)
[2025-12-18T23:05:13.364Z] [BOT] ⏭️  Skipping duplicate: JID_cc398c47 (posted within 7 days)
[2025-12-18T23:05:13.364Z] [BOT] ⏭️  Skipping duplicate: JID_10eefdf5 (posted within 7 days)
[2025-12-18T23:05:13.364Z] [BOT] ⏭️  Skipping duplicate: JID_c699d302-program_r0000316308 (posted within 7 days)
⏭️  Skipping duplicate: JID_8891c1fd-_r-101828 (posted within 7 days)
[2025-12-18T23:05:13.364Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a50ea67b (posted within 7 days)
[2025-12-18T23:05:13.364Z] [BOT] ⏭️  Skipping duplicate: JID_12411879-2026_r170 (posted within 7 days)
[2025-12-18T23:05:13.364Z] [BOT] ⏭️  Skipping duplicate: JID_67b76248-bbp_2531350 (posted within 7 days)
[2025-12-18T23:05:13.365Z] [BOT] ⏭️  Skipping duplicate: JID_14105d80-scholar_jr31330 (posted within 7 days)
[2025-12-18T23:05:13.367Z] [BOT] ✅ Loaded pending queue: 347 total (327 pending, 20 enriched, 0 posted)
[2025-12-18T23:05:13.373Z] [BOT] ✅ Saved pending queue: 347 total (327 pending, 10 enriched, 10 posted)
[2025-12-18T23:05:13.373Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T23:05:13.414Z] [BOT] 📂 Loaded 605 existing routing entries
[2025-12-18T23:05:13.459Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 615
   Timestamp: 2025-12-18T23:05:13.453Z
📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 11
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #💻・remote-usa: 3 posts
     3. #🗽・new-york: 2 posts
     4. #🦢・los-angeles: 2 posts
     5. #🤖・ai-jobs: 2 posts
[STATS] Channel stats saved
[2025-12-18T23:05:15.471Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2914) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*