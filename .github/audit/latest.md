# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T20:43:06.574Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T20:42:11.508Z] ========================================
[2026-01-13T20:42:11.510Z] Discord Bot Execution Log
[2026-01-13T20:42:11.510Z] Environment: GitHub Actions
[2026-01-13T20:42:11.510Z] Node Version: v20.19.6
[2026-01-13T20:42:11.510Z] ========================================
[2026-01-13T20:42:11.510Z] Environment Variables Check:
[2026-01-13T20:42:11.510Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T20:42:11.510Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.510Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T20:42:11.511Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T20:42:11.511Z] 
Multi-Channel Configuration:
[2026-01-13T20:42:11.511Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.511Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.511Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.511Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.511Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.511Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.511Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.511Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.511Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T20:42:11.511Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T20:42:11.512Z] 
Data Files Check:
[2026-01-13T20:42:11.512Z] .github/data/new_jobs.json: ✅ Exists (10 items, 112305 bytes)
[2026-01-13T20:42:11.516Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 510023 bytes)
[2026-01-13T20:42:11.516Z] 
========================================
[2026-01-13T20:42:11.516Z] Starting Enhanced Discord Bot...
[2026-01-13T20:42:11.516Z] ========================================
[2026-01-13T20:42:12.037Z] [BOT] ✅ Loaded V2 database: 966 jobs
[2026-01-13T20:42:12.771Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T20:42:12.772Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T20:42:12.772Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T20:42:12.884Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Data Scientist, Analytics - GTM Ads at discord
[2026-01-13T20:42:12.887Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T20:42:12.887Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T20:42:12.887Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T20:42:12.888Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T20:42:12.888Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T20:42:12.893Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-13T20:42:12.893Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Analytics - GTM Ads" @ discord
[2026-01-13T20:42:12.893Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T20:42:12.898Z] [BOT ERROR] (node:3137) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T20:42:13.449Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics - GTM Ads @ discord in #📈・JID_fb739488
  ✅ Industry: Senior Data Scientist, Analytics - GTM Ads @ discord
[2026-01-13T20:42:15.222Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist, Analytics - GTM Ads @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T20:42:16.722Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Analytics - GTM Ads @ discord (instance #1)
[2026-01-13T20:42:16.722Z] [BOT] 💾 BEFORE ARCHIVING: 967 jobs in database
[2026-01-13T20:42:16.723Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-13T20:42:16.733Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
[2026-01-13T20:42:16.733Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:42:16.734Z] [BOT] 📍 [ROUTING] "Data Scientist, Analytics - Ads Reporting" @ discord
[2026-01-13T20:42:16.734Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T20:42:17.306Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Analytics - Ads Reporting @ discord in #📈・JID_fb739488
[2026-01-13T20:42:17.306Z] [BOT] ✅ Industry: Data Scientist, Analytics - Ads Reporting @ discord
[2026-01-13T20:42:19.034Z] [BOT] ✅ Created forum post: 🏢 Data Scientist, Analytics - Ads Reporting @ discord in #🌉・san-francisco
[2026-01-13T20:42:19.035Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T20:42:20.535Z] [BOT] 💾 Marked as posted: Data Scientist, Analytics - Ads Reporting @ discord (instance #1)
[2026-01-13T20:42:20.535Z] [BOT] 💾 BEFORE ARCHIVING: 968 jobs in database
[2026-01-13T20:42:20.536Z] [BOT] ✅ No jobs to archive (all 968 jobs within 7-day window)
[2026-01-13T20:42:20.542Z] [BOT] 💾 Saved posted_jobs.json: 968 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:42:20.542Z] [BOT] 📍 [ROUTING] "Data Engineer - People Analytics" @ ORG_f3f2248d Grumman
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T20:42:20.543Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T20:42:20.792Z] [BOT] ✅ Created forum post: 🏢 Data Engineer - People Analytics @ ORG_f3f2248d Grumman in #📈・JID_fb739488
[2026-01-13T20:42:20.792Z] [BOT] ✅ Industry: Data Engineer - People Analytics @ ORG_f3f2248d Grumman
[2026-01-13T20:42:22.293Z] [BOT] 💾 Marked as posted: Data Engineer - People Analytics @ ORG_f3f2248d Grumman (instance #1)
[2026-01-13T20:42:22.293Z] [BOT] 💾 BEFORE ARCHIVING: 969 jobs in database
[2026-01-13T20:42:22.294Z] [BOT] ✅ No jobs to archive (all 969 jobs within 7-day window)
[2026-01-13T20:42:22.301Z] [BOT] 💾 Saved posted_jobs.json: 969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:42:25.303Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-13T20:42:25.303Z] [BOT] 📍 [ROUTING] "People Analyst" @ figma
   Category: SALES (matched: "sales")
[2026-01-13T20:42:25.303Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T20:42:25.759Z] [BOT] ✅ Created forum post: 🏢 People Analyst @ figma in #💲・sales-jobs
  ✅ Industry: People Analyst @ figma
[2026-01-13T20:42:27.509Z] [BOT] ✅ Created forum post: 🏢 People Analyst @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T20:42:29.009Z] [BOT] 💾 Marked as posted: People Analyst @ figma (instance #1)
[2026-01-13T20:42:29.009Z] [BOT] 💾 BEFORE ARCHIVING: 970 jobs in database
[2026-01-13T20:42:29.010Z] [BOT] ✅ No jobs to archive (all 970 jobs within 7-day window)
[2026-01-13T20:42:29.018Z] [BOT] 💾 Saved posted_jobs.json: 970 active jobs
[2026-01-13T20:42:29.018Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:42:29.018Z] [BOT] 📍 [ROUTING] "Customer Activation Manager" @ anthropic
[2026-01-13T20:42:29.018Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T20:42:29.267Z] [BOT] ✅ Created forum post: 🏢 Customer Activation Manager @ anthropic in #💲・sales-jobs
[2026-01-13T20:42:29.268Z] [BOT] ✅ Industry: Customer Activation Manager @ anthropic
[2026-01-13T20:42:31.151Z] [BOT] ✅ Created forum post: 🏢 Customer Activation Manager @ anthropic in #🌉・san-francisco
[2026-01-13T20:42:31.151Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T20:42:32.651Z] [BOT] 💾 Marked as posted: Customer Activation Manager @ anthropic (instance #1)
[2026-01-13T20:42:32.652Z] [BOT] 💾 BEFORE ARCHIVING: 971 jobs in database
[2026-01-13T20:42:32.652Z] [BOT] ✅ No jobs to archive (all 971 jobs within 7-day window)
[2026-01-13T20:42:32.661Z] [BOT] 💾 Saved posted_jobs.json: 971 active jobs
[2026-01-13T20:42:32.661Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:42:35.662Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-13T20:42:35.662Z] [BOT] 📍 [ROUTING] "Configuration Management Analyst" @ ORG_35863c7e
[2026-01-13T20:42:35.662Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-13T20:42:36.184Z] [BOT] ✅ Created forum post: 🏢 Configuration Management Analyst @ ORG_35863c7e in #🩺・healthcare-jobs
[2026-01-13T20:42:36.184Z] [BOT] ✅ Industry: Configuration Management Analyst @ ORG_35863c7e
[2026-01-13T20:42:37.885Z] [BOT] ✅ Created forum post: 🏢 Configuration Management Analyst @ ORG_35863c7e in #💻・remote-usa
[2026-01-13T20:42:37.885Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T20:42:39.386Z] [BOT] 💾 Marked as posted: Configuration Management Analyst @ ORG_35863c7e (instance #1)
[2026-01-13T20:42:39.387Z] [BOT] 💾 BEFORE ARCHIVING: 972 jobs in database
[2026-01-13T20:42:39.387Z] [BOT] ✅ No jobs to archive (all 972 jobs within 7-day window)
[2026-01-13T20:42:39.395Z] [BOT] 💾 Saved posted_jobs.json: 972 active jobs
[2026-01-13T20:42:39.395Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:42:42.395Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T20:42:42.395Z] [BOT] 📍 [ROUTING] "Geospatial Technician - 3D Stereo Compilation" @ NV5 Global
[2026-01-13T20:42:42.395Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T20:42:42.758Z] [BOT] ✅ Created forum post: 🏢 Geospatial Technician - 3D Stereo Compilation @ NV5 Global in #📣・marketing-jobs
[2026-01-13T20:42:42.759Z] [BOT] ✅ Industry: Geospatial Technician - 3D Stereo Compilation @ NV5 Global
[2026-01-13T20:42:44.467Z] [BOT] ✅ Created forum post: 🏢 Geospatial Technician - 3D Stereo Compilation @ NV5 Global in #💻・remote-usa
[2026-01-13T20:42:44.467Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T20:42:45.968Z] [BOT] 💾 Marked as posted: Geospatial Technician - 3D Stereo Compilation @ NV5 Global (instance #1)
[2026-01-13T20:42:45.969Z] [BOT] 💾 BEFORE ARCHIVING: 973 jobs in database
[2026-01-13T20:42:45.969Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-13T20:42:45.977Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
[2026-01-13T20:42:45.977Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:42:48.977Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T20:42:48.978Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Java" @ ORG_bdf03daa Fintech Solutions
[2026-01-13T20:42:48.978Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:42:49.202Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions in #💻・tech-jobs
[2026-01-13T20:42:49.203Z] [BOT] ✅ Industry: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions
[2026-01-13T20:42:50.990Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions in #🤠・austin
[2026-01-13T20:42:50.990Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T20:42:52.491Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions (instance #1)
[2026-01-13T20:42:52.491Z] [BOT] 💾 BEFORE ARCHIVING: 974 jobs in database
[2026-01-13T20:42:52.492Z] [BOT] ✅ No jobs to archive (all 974 jobs within 7-day window)
[2026-01-13T20:42:52.500Z] [BOT] 💾 Saved posted_jobs.json: 974 active jobs
[2026-01-13T20:42:52.500Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer I" @ ORG_ec7d56a0 Yonder
[2026-01-13T20:42:52.500Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:42:52.788Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_ec7d56a0 Yonder in #💻・tech-jobs
[2026-01-13T20:42:52.788Z] [BOT] ✅ Industry: Software Engineer I @ ORG_ec7d56a0 Yonder
[2026-01-13T20:42:54.493Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_ec7d56a0 Yonder in #🤠・austin
[2026-01-13T20:42:54.493Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T20:42:55.994Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_ec7d56a0 Yonder (instance #1)
[2026-01-13T20:42:55.994Z] [BOT] 💾 BEFORE ARCHIVING: 975 jobs in database
[2026-01-13T20:42:55.995Z] [BOT] ✅ No jobs to archive (all 975 jobs within 7-day window)
[2026-01-13T20:42:56.003Z] [BOT] 💾 Saved posted_jobs.json: 975 active jobs
[2026-01-13T20:42:56.003Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:42:56.003Z] [BOT] 📍 [ROUTING] "Software Engineer, Languages" @ anthropic
[2026-01-13T20:42:56.003Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:42:56.360Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Languages @ anthropic in #💻・tech-jobs
[2026-01-13T20:42:56.360Z] [BOT] ✅ Industry: Software Engineer, Languages @ anthropic
[2026-01-13T20:42:58.366Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Languages @ anthropic in #🌉・san-francisco
[2026-01-13T20:42:58.366Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T20:42:59.867Z] [BOT] 💾 Marked as posted: Software Engineer, Languages @ anthropic (instance #1)
[2026-01-13T20:42:59.867Z] [BOT] 💾 BEFORE ARCHIVING: 976 jobs in database
[2026-01-13T20:42:59.868Z] [BOT] ✅ No jobs to archive (all 976 jobs within 7-day window)
[2026-01-13T20:42:59.880Z] [BOT] 💾 Saved posted_jobs.json: 976 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:43:02.881Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T20:43:02.881Z] [BOT] ⏭️  Skipping duplicate: JID_68d1a4d6 (posted within 7 days)
[2026-01-13T20:43:02.881Z] [BOT] ⏭️  Skipping duplicate: JID_e3d43b6a (posted within 7 days)
[2026-01-13T20:43:02.882Z] [BOT] ⏭️  Skipping duplicate: JID_21ef7452 (posted within 7 days)
[2026-01-13T20:43:02.882Z] [BOT] ⏭️  Skipping duplicate: JID_e797549b (posted within 7 days)
[2026-01-13T20:43:02.882Z] [BOT] ⏭️  Skipping duplicate: JID_9bce800c-jabil_careers-JID_05133902-analyst_j2428597 (posted within 7 days)
[2026-01-13T20:43:02.882Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_80e71729-analytics_r10217513 (posted within 7 days)
[2026-01-13T20:43:02.882Z] [BOT] ⏭️  Skipping duplicate: JID_34ee3a7a (posted within 7 days)
[2026-01-13T20:43:02.882Z] [BOT] ⏭️  Skipping duplicate: JID_61d16690-_jr104034 (posted within 7 days)
[2026-01-13T20:43:02.882Z] [BOT] ⏭️  Skipping duplicate: JID_76a0c247-i_253496 (posted within 7 days)
[2026-01-13T20:43:02.882Z] [BOT] ⏭️  Skipping duplicate: JID_ffe128ac (posted within 7 days)
[2026-01-13T20:43:02.993Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-13T20:43:03.159Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
[2026-01-13T20:43:03.159Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T20:43:03.213Z] [BOT] 📂 Loaded 3115 existing routing entries
[2026-01-13T20:43:03.270Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3125
   Timestamp: 2026-01-13T20:43:03.257Z
[2026-01-13T20:43:03.270Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T20:43:03.271Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 8
   Top channels:
[2026-01-13T20:43:03.271Z] [BOT] 1. #🌉・san-francisco: 5 posts
     2. #📈・JID_fb739488: 3 posts
     3. #💻・tech-jobs: 3 posts
     4. #💲・sales-jobs: 2 posts
     5. #💻・remote-usa: 2 posts
[2026-01-13T20:43:03.272Z] [BOT] [STATS] Channel stats saved
[2026-01-13T20:43:05.295Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3137) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*