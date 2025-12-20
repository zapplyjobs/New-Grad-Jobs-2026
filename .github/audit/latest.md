# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T23:26:04.878Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T23:25:16.176Z] ========================================
[2025-12-20T23:25:16.178Z] Discord Bot Execution Log
[2025-12-20T23:25:16.178Z] Environment: GitHub Actions
[2025-12-20T23:25:16.178Z] Node Version: v20.19.6
[2025-12-20T23:25:16.178Z] ========================================
[2025-12-20T23:25:16.178Z] Environment Variables Check:
[2025-12-20T23:25:16.178Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T23:25:16.178Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.178Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T23:25:16.179Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T23:25:16.179Z] 
Multi-Channel Configuration:
[2025-12-20T23:25:16.179Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.179Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.179Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.179Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.179Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.179Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.179Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.179Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.179Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T23:25:16.179Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T23:25:16.180Z] 
Data Files Check:
[2025-12-20T23:25:16.180Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44306 bytes)
[2025-12-20T23:25:16.184Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 470444 bytes)
[2025-12-20T23:25:16.184Z] 
========================================
[2025-12-20T23:25:16.184Z] Starting Enhanced Discord Bot...
[2025-12-20T23:25:16.184Z] ========================================
[2025-12-20T23:25:16.694Z] [BOT] ✅ Loaded V2 database: 807 jobs
[2025-12-20T23:25:17.510Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T23:25:17.510Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T23:25:17.511Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T23:25:17.511Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T23:25:17.605Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 78
[2025-12-20T23:25:17.607Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T23:25:17.607Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T23:25:17.608Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T23:25:17.608Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-20T23:25:17.608Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T23:25:17.612Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-20T23:25:17.613Z] [BOT] 📍 [ROUTING] "Mercury Ignite: Data Engineering Graduate Development Program" @ ORG_6a7367ef Insurance
[2025-12-20T23:25:17.613Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-20T23:25:17.617Z] [BOT ERROR] (node:3809) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T23:25:17.925Z] [BOT] ✅ Created forum post: 🏢 Mercury Ignite: Data Engineering Graduate Development Program @ ORG_6a7367ef Insurance in #🤖・ai-jobs
  ✅ Industry: Mercury Ignite: Data Engineering Graduate Development Program @ ORG_6a7367ef Insurance
[2025-12-20T23:25:19.427Z] [BOT] 💾 Marked as posted: Mercury Ignite: Data Engineering Graduate Development Program @ ORG_6a7367ef Insurance (instance #1)
[2025-12-20T23:25:19.427Z] [BOT] 💾 BEFORE ARCHIVING: 808 jobs in database
[2025-12-20T23:25:19.428Z] [BOT] ✅ No jobs to archive (all 808 jobs within 7-day window)
[2025-12-20T23:25:19.438Z] [BOT] 💾 Saved posted_jobs.json: 808 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:25:19.438Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b4800baa
[2025-12-20T23:25:19.438Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T23:25:19.746Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b4800baa in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_b4800baa
[2025-12-20T23:25:21.862Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_b4800baa in #🌆・chicago
[2025-12-20T23:25:21.862Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-20T23:25:23.364Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b4800baa (instance #1)
[2025-12-20T23:25:23.364Z] [BOT] 💾 BEFORE ARCHIVING: 809 jobs in database
[2025-12-20T23:25:23.364Z] [BOT] ✅ No jobs to archive (all 809 jobs within 7-day window)
[2025-12-20T23:25:23.371Z] [BOT] 💾 Saved posted_jobs.json: 809 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:25:26.371Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-20T23:25:26.372Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2025-12-20T23:25:26.372Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:25:27.078Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2025-12-20T23:25:27.078Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-20T23:25:28.756Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-20T23:25:30.257Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-20T23:25:30.258Z] [BOT] 💾 BEFORE ARCHIVING: 810 jobs in database
[2025-12-20T23:25:30.258Z] [BOT] ✅ No jobs to archive (all 810 jobs within 7-day window)
[2025-12-20T23:25:30.266Z] [BOT] 💾 Saved posted_jobs.json: 810 active jobs
[2025-12-20T23:25:30.267Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:25:30.267Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Database Technologies" @ ORG_dc7620eb
[2025-12-20T23:25:30.267Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:25:30.602Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb
[2025-12-20T23:25:32.521Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T23:25:34.022Z] [BOT] 💾 Marked as posted: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb (instance #1)
[2025-12-20T23:25:34.023Z] [BOT] 💾 BEFORE ARCHIVING: 811 jobs in database
[2025-12-20T23:25:34.023Z] [BOT] ✅ No jobs to archive (all 811 jobs within 7-day window)
[2025-12-20T23:25:34.031Z] [BOT] 💾 Saved posted_jobs.json: 811 active jobs
[2025-12-20T23:25:34.031Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:25:34.031Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a5c5af07
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:25:34.739Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a5c5af07 in #💻・tech-jobs
[2025-12-20T23:25:34.739Z] [BOT] ✅ Industry: Software Engineer @ ORG_a5c5af07
[2025-12-20T23:25:36.539Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a5c5af07 in #🗽・new-york
[2025-12-20T23:25:36.539Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-20T23:25:38.040Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a5c5af07 (instance #1)
[2025-12-20T23:25:38.040Z] [BOT] 💾 BEFORE ARCHIVING: 812 jobs in database
[2025-12-20T23:25:38.041Z] [BOT] ✅ No jobs to archive (all 812 jobs within 7-day window)
[2025-12-20T23:25:38.049Z] [BOT] 💾 Saved posted_jobs.json: 812 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:25:38.049Z] [BOT] 📍 [ROUTING] "Software Engineer - Frontend" @ ORG_dd84425b
[2025-12-20T23:25:38.049Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:25:38.362Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Frontend @ ORG_dd84425b in #💻・tech-jobs
[2025-12-20T23:25:38.362Z] [BOT] ✅ Industry: Software Engineer - Frontend @ ORG_dd84425b
[2025-12-20T23:25:40.167Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Frontend @ ORG_dd84425b in #🌄・mountain-view
[2025-12-20T23:25:40.167Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-12-20T23:25:41.668Z] [BOT] 💾 Marked as posted: Software Engineer - Frontend @ ORG_dd84425b (instance #1)
[2025-12-20T23:25:41.668Z] [BOT] 💾 BEFORE ARCHIVING: 813 jobs in database
[2025-12-20T23:25:41.669Z] [BOT] ✅ No jobs to archive (all 813 jobs within 7-day window)
[2025-12-20T23:25:41.677Z] [BOT] 💾 Saved posted_jobs.json: 813 active jobs
[2025-12-20T23:25:41.677Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:25:41.677Z] [BOT] 📍 [ROUTING] "Genomics Research Programmer Analyst Associate" @ ORG_810ace5b Health Care
[2025-12-20T23:25:41.677Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T23:25:41.925Z] [BOT] ✅ Created forum post: 🏢 Genomics Research Programmer Analyst Associate @ ORG_810ace5b Health Care in #💻・tech-jobs
  ✅ Industry: Genomics Research Programmer Analyst Associate @ ORG_810ace5b Health Care
[2025-12-20T23:25:43.698Z] [BOT] ✅ Created forum post: 🏢 Genomics Research Programmer Analyst Associate @ ORG_810ace5b Health Care in #🌆・chicago
[2025-12-20T23:25:43.698Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-20T23:25:45.200Z] [BOT] 💾 Marked as posted: Genomics Research Programmer Analyst Associate @ ORG_810ace5b Health Care (instance #1)
[2025-12-20T23:25:45.200Z] [BOT] 💾 BEFORE ARCHIVING: 814 jobs in database
[2025-12-20T23:25:45.201Z] [BOT] ✅ No jobs to archive (all 814 jobs within 7-day window)
[2025-12-20T23:25:45.208Z] [BOT] 💾 Saved posted_jobs.json: 814 active jobs
[2025-12-20T23:25:45.208Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T23:25:48.209Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-20T23:25:48.209Z] [BOT] 📍 [ROUTING] "R&D Graduate Software Developer-Harwell Science Campus" @ ORG_8410dea2 Technologies
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-20T23:25:48.209Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T23:25:48.407Z] [BOT] ✅ Created forum post: 🏢 R&D Graduate Software Developer-Harwell Science Campus @ ORG_8410dea2 Technologies in #📈・JID_fb739488
[2025-12-20T23:25:48.407Z] [BOT] ✅ Industry: R&D Graduate Software Developer-Harwell Science Campus @ ORG_8410dea2 Technologies
[2025-12-20T23:25:49.908Z] [BOT] 💾 Marked as posted: R&D Graduate Software Developer-Harwell Science Campus @ ORG_8410dea2 Technologies (instance #1)
[2025-12-20T23:25:49.909Z] [BOT] 💾 BEFORE ARCHIVING: 815 jobs in database
[2025-12-20T23:25:49.909Z] [BOT] ✅ No jobs to archive (all 815 jobs within 7-day window)
[2025-12-20T23:25:49.917Z] [BOT] 💾 Saved posted_jobs.json: 815 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:25:49.917Z] [BOT] 📍 [ROUTING] "Data Engineer - People Analytics" @ ORG_f3f2248d Grumman
[2025-12-20T23:25:49.917Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T23:25:50.526Z] [BOT] ✅ Created forum post: 🏢 Data Engineer - People Analytics @ ORG_f3f2248d Grumman in #📈・JID_fb739488
[2025-12-20T23:25:50.526Z] [BOT] ✅ Industry: Data Engineer - People Analytics @ ORG_f3f2248d Grumman
[2025-12-20T23:25:52.027Z] [BOT] 💾 Marked as posted: Data Engineer - People Analytics @ ORG_f3f2248d Grumman (instance #1)
[2025-12-20T23:25:52.027Z] [BOT] 💾 BEFORE ARCHIVING: 816 jobs in database
[2025-12-20T23:25:52.028Z] [BOT] ✅ No jobs to archive (all 816 jobs within 7-day window)
[2025-12-20T23:25:52.039Z] [BOT] 💾 Saved posted_jobs.json: 816 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:25:55.039Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-20T23:25:55.040Z] [BOT] 📍 [ROUTING] "Configuration Management Analyst" @ ORG_35863c7e
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-20T23:25:55.324Z] [BOT] ✅ Created forum post: 🏢 Configuration Management Analyst @ ORG_35863c7e in #🩺・healthcare-jobs
  ✅ Industry: Configuration Management Analyst @ ORG_35863c7e
[2025-12-20T23:25:57.061Z] [BOT] ✅ Created forum post: 🏢 Configuration Management Analyst @ ORG_35863c7e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T23:25:58.562Z] [BOT] 💾 Marked as posted: Configuration Management Analyst @ ORG_35863c7e (instance #1)
[2025-12-20T23:25:58.563Z] [BOT] 💾 BEFORE ARCHIVING: 817 jobs in database
[2025-12-20T23:25:58.563Z] [BOT] ✅ No jobs to archive (all 817 jobs within 7-day window)
[2025-12-20T23:25:58.571Z] [BOT] 💾 Saved posted_jobs.json: 817 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T23:26:01.572Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-20T23:26:01.572Z] [BOT] ⏭️  Skipping duplicate: JID_de128b37 (posted within 7 days)
[2025-12-20T23:26:01.572Z] [BOT] ⏭️  Skipping duplicate: JID_4c68b8d2 (posted within 7 days)
[2025-12-20T23:26:01.572Z] [BOT] ⏭️  Skipping duplicate: JID_303283d7 (posted within 7 days)
[2025-12-20T23:26:01.572Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-320582 (posted within 7 days)
[2025-12-20T23:26:01.573Z] [BOT] ⏭️  Skipping duplicate: JID_1aca071f-cx_1-job-212337 (posted within 7 days)
[2025-12-20T23:26:01.573Z] [BOT] ⏭️  Skipping duplicate: JID_a5c30104 (posted within 7 days)
[2025-12-20T23:26:01.573Z] [BOT] ⏭️  Skipping duplicate: JID_7ad1bb4d-agilent_student_careers-JID_34dfb693-campus_4034599 (posted within 7 days)
[2025-12-20T23:26:01.573Z] [BOT] ⏭️  Skipping duplicate: JID_62e05fd8-remote_r190559-1 (posted within 7 days)
[2025-12-20T23:26:01.573Z] [BOT] ⏭️  Skipping duplicate: JID_9bce800c-jabil_careers-JID_05133902-analyst_j2428597 (posted within 7 days)
[2025-12-20T23:26:01.573Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_80e71729-analytics_r10217513 (posted within 7 days)
[2025-12-20T23:26:01.575Z] [BOT] ✅ Loaded pending queue: 133 total (113 pending, 20 enriched, 0 posted)
[2025-12-20T23:26:01.577Z] [BOT] ✅ Saved pending queue: 133 total (113 pending, 10 enriched, 10 posted)
[2025-12-20T23:26:01.577Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T23:26:01.619Z] [BOT] 📂 Loaded 871 existing routing entries
[2025-12-20T23:26:01.664Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-20T23:26:01.664Z] [BOT] Total entries: 881
   Timestamp: 2025-12-20T23:26:01.659Z
[2025-12-20T23:26:01.665Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T23:26:01.665Z] [BOT] Total attempts: 17
   Successful: 17
   Failed: 0
   Skipped: 0
[2025-12-20T23:26:01.665Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-20T23:26:01.665Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2025-12-20T23:26:01.665Z] [BOT] 2. #🤖・ai-jobs: 2 posts
     3. #🌆・chicago: 2 posts
     4. #🌄・mountain-view: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2025-12-20T23:26:01.665Z] [BOT] [STATS] Channel stats saved
[2025-12-20T23:26:03.678Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3809) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*