# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T19:23:46.725Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T19:23:06.315Z] ========================================
[2025-12-21T19:23:06.317Z] Discord Bot Execution Log
[2025-12-21T19:23:06.317Z] Environment: GitHub Actions
[2025-12-21T19:23:06.317Z] Node Version: v20.19.6
[2025-12-21T19:23:06.317Z] ========================================
[2025-12-21T19:23:06.317Z] Environment Variables Check:
[2025-12-21T19:23:06.317Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T19:23:06.317Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.317Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T19:23:06.318Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T19:23:06.318Z] 
Multi-Channel Configuration:
[2025-12-21T19:23:06.318Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.318Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.318Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.318Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.318Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.318Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.318Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.318Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.318Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T19:23:06.318Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T19:23:06.319Z] 
Data Files Check:
[2025-12-21T19:23:06.319Z] .github/data/new_jobs.json: ✅ Exists (10 items, 37677 bytes)
[2025-12-21T19:23:06.323Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 499017 bytes)
[2025-12-21T19:23:06.323Z] 
========================================
[2025-12-21T19:23:06.323Z] Starting Enhanced Discord Bot...
[2025-12-21T19:23:06.323Z] ========================================
[2025-12-21T19:23:06.834Z] [BOT] ✅ Loaded V2 database: 852 jobs
[2025-12-21T19:23:07.684Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T19:23:07.684Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T19:23:07.685Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T19:23:07.685Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T19:23:07.792Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 139
[2025-12-21T19:23:07.794Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T19:23:07.794Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T19:23:07.794Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T19:23:07.794Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T19:23:07.795Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-21T19:23:07.795Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T19:23:07.797Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-21T19:23:07.798Z] [BOT] 📍 [ROUTING] "Full-Stack Java / Spring Boot Developer" @ ORG_5e4eb7c5 Bank
[2025-12-21T19:23:07.798Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:23:07.802Z] [BOT ERROR] (node:2976) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T19:23:08.229Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Java / Spring Boot Developer @ ORG_5e4eb7c5 Bank in #💻・tech-jobs
[2025-12-21T19:23:08.229Z] [BOT] ✅ Industry: Full-Stack Java / Spring Boot Developer @ ORG_5e4eb7c5 Bank
[2025-12-21T19:23:09.954Z] [BOT] ✅ Created forum post: 🏢 Full-Stack Java / Spring Boot Developer @ ORG_5e4eb7c5 Bank in #💻・remote-usa
[2025-12-21T19:23:09.954Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T19:23:11.454Z] [BOT] 💾 Marked as posted: Full-Stack Java / Spring Boot Developer @ ORG_5e4eb7c5 Bank (instance #1)
[2025-12-21T19:23:11.454Z] [BOT] 💾 BEFORE ARCHIVING: 853 jobs in database
[2025-12-21T19:23:11.455Z] [BOT] ✅ No jobs to archive (all 853 jobs within 7-day window)
[2025-12-21T19:23:11.466Z] [BOT] 💾 Saved posted_jobs.json: 853 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:23:11.466Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Baseball Enterprise" @ ORG_2bc58fcc League Baseball
[2025-12-21T19:23:11.466Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:23:11.627Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
[2025-12-21T19:23:11.628Z] [BOT] ✅ Industry: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball
[2025-12-21T19:23:13.433Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:23:14.934Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball (instance #1)
[2025-12-21T19:23:14.934Z] [BOT] 💾 BEFORE ARCHIVING: 854 jobs in database
[2025-12-21T19:23:14.935Z] [BOT] ✅ No jobs to archive (all 854 jobs within 7-day window)
[2025-12-21T19:23:14.940Z] [BOT] 💾 Saved posted_jobs.json: 854 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:23:14.941Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_f3e93c9b Automation
[2025-12-21T19:23:14.941Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T19:23:15.206Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_f3e93c9b Automation in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_f3e93c9b Automation
[2025-12-21T19:23:16.934Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_f3e93c9b Automation in #💻・remote-usa
[2025-12-21T19:23:16.934Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-21T19:23:18.435Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_f3e93c9b Automation (instance #1)
[2025-12-21T19:23:18.435Z] [BOT] 💾 BEFORE ARCHIVING: 855 jobs in database
[2025-12-21T19:23:18.436Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2025-12-21T19:23:18.443Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:23:21.444Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-21T19:23:21.446Z] [BOT] 📍 [ROUTING] "Associate C++ Engineer" @ ORG_0f5d983d Trading Company
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-21T19:23:21.446Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T19:23:21.914Z] [BOT] ✅ Created forum post: 🏢 Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🤖・ai-jobs
  ✅ Industry: Associate C++ Engineer @ ORG_0f5d983d Trading Company
[2025-12-21T19:23:23.674Z] [BOT] ✅ Created forum post: 🏢 Associate C++ Engineer @ ORG_0f5d983d Trading Company in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-21T19:23:25.175Z] [BOT] 💾 Marked as posted: Associate C++ Engineer @ ORG_0f5d983d Trading Company (instance #1)
[2025-12-21T19:23:25.175Z] [BOT] 💾 BEFORE ARCHIVING: 856 jobs in database
[2025-12-21T19:23:25.176Z] [BOT] ✅ No jobs to archive (all 856 jobs within 7-day window)
[2025-12-21T19:23:25.183Z] [BOT] 💾 Saved posted_jobs.json: 856 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T19:23:25.184Z] [BOT] 💾 Marked as posted: Associate C++ Engineer @ ORG_0f5d983d Trading Company (instance #1)
[2025-12-21T19:23:25.184Z] [BOT] 💾 BEFORE ARCHIVING: 857 jobs in database
[2025-12-21T19:23:25.184Z] [BOT] ✅ No jobs to archive (all 857 jobs within 7-day window)
[2025-12-21T19:23:25.192Z] [BOT] 💾 Saved posted_jobs.json: 857 active jobs
[2025-12-21T19:23:25.192Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:23:28.193Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2025-12-21T19:23:28.194Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_eead3632
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-21T19:23:28.194Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T19:23:28.695Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_eead3632 in #📈・JID_fb739488
[2025-12-21T19:23:28.695Z] [BOT] ✅ Industry: Software Engineer @ ORG_eead3632
[2025-12-21T19:23:30.475Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_eead3632 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:23:31.976Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_eead3632 (instance #1)
[2025-12-21T19:23:31.976Z] [BOT] 💾 BEFORE ARCHIVING: 858 jobs in database
[2025-12-21T19:23:31.977Z] [BOT] ✅ No jobs to archive (all 858 jobs within 7-day window)
[2025-12-21T19:23:31.985Z] [BOT] 💾 Saved posted_jobs.json: 858 active jobs
[2025-12-21T19:23:31.985Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:23:31.985Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_125f1a35
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-21T19:23:31.985Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T19:23:32.233Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_125f1a35 in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_125f1a35
[2025-12-21T19:23:33.995Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_125f1a35 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:23:35.496Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_125f1a35 (instance #1)
[2025-12-21T19:23:35.497Z] [BOT] 💾 BEFORE ARCHIVING: 859 jobs in database
[2025-12-21T19:23:35.497Z] [BOT] ✅ No jobs to archive (all 859 jobs within 7-day window)
[2025-12-21T19:23:35.505Z] [BOT] 💾 Saved posted_jobs.json: 859 active jobs
[2025-12-21T19:23:35.505Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:23:35.505Z] [BOT] 📍 [ROUTING] "Analytics Associate 1" @ ORG_75e49207 Analytics
[2025-12-21T19:23:35.505Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-21T19:23:35.505Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T19:23:35.768Z] [BOT] ✅ Created forum post: 🏢 Analytics Associate 1 @ ORG_75e49207 Analytics in #📈・JID_fb739488
  ✅ Industry: Analytics Associate 1 @ ORG_75e49207 Analytics
[2025-12-21T19:23:37.644Z] [BOT] ✅ Created forum post: 🏢 Analytics Associate 1 @ ORG_75e49207 Analytics in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T19:23:39.145Z] [BOT] 💾 Marked as posted: Analytics Associate 1 @ ORG_75e49207 Analytics (instance #1)
[2025-12-21T19:23:39.145Z] [BOT] 💾 BEFORE ARCHIVING: 860 jobs in database
[2025-12-21T19:23:39.146Z] [BOT] ✅ No jobs to archive (all 860 jobs within 7-day window)
[2025-12-21T19:23:39.154Z] [BOT] 💾 Saved posted_jobs.json: 860 active jobs
[2025-12-21T19:23:39.154Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:23:39.154Z] [BOT] 📍 [ROUTING] "Data Engineer 1" @ ORG_441f2234
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-21T19:23:39.154Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T19:23:39.298Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_441f2234 in #📈・JID_fb739488
  ✅ Industry: Data Engineer 1 @ ORG_441f2234
[2025-12-21T19:23:40.800Z] [BOT] 💾 Marked as posted: Data Engineer 1 @ ORG_441f2234 (instance #1)
[2025-12-21T19:23:40.800Z] [BOT] 💾 BEFORE ARCHIVING: 861 jobs in database
[2025-12-21T19:23:40.801Z] [BOT] ✅ No jobs to archive (all 861 jobs within 7-day window)
[2025-12-21T19:23:40.807Z] [BOT] 💾 Saved posted_jobs.json: 861 active jobs
[2025-12-21T19:23:40.807Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T19:23:43.808Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-21T19:23:43.808Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_96a7b48c-developer_2025-0029473 (posted within 7 days)
[2025-12-21T19:23:43.808Z] [BOT] ⏭️  Skipping duplicate: JID_bd9d186b (posted within 7 days)
[2025-12-21T19:23:43.808Z] [BOT] ⏭️  Skipping duplicate: JID_8475a274 (posted within 7 days)
[2025-12-21T19:23:43.808Z] [BOT] ⏭️  Skipping duplicate: JID_8cccf6a0-analyst_r3520 (posted within 7 days)
[2025-12-21T19:23:43.809Z] [BOT] ⏭️  Skipping duplicate: JID_c2d21f32 (posted within 7 days)
[2025-12-21T19:23:43.809Z] [BOT] ⏭️  Skipping duplicate: JID_719d2daf-external_rockwell_automation-JID_19f3d6e5-level_r25-8544 (posted within 7 days)
[2025-12-21T19:23:43.809Z] [BOT] ⏭️  Skipping duplicate: JID_96301371 (posted within 7 days)
[2025-12-21T19:23:43.809Z] [BOT] ⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_b2cedefb-i_1624135 (posted within 7 days)
[2025-12-21T19:23:43.810Z] [BOT] ✅ Loaded pending queue: 62 total (42 pending, 20 enriched, 0 posted)
[2025-12-21T19:23:43.812Z] [BOT] ✅ Saved pending queue: 62 total (42 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T19:23:43.853Z] [BOT] 📂 Loaded 940 existing routing entries
[2025-12-21T19:23:43.902Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 948
   Timestamp: 2025-12-21T19:23:43.895Z
[2025-12-21T19:23:43.902Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T19:23:43.903Z] [BOT] Total attempts: 16
   Successful: 15
   Failed: 0
   Skipped: 1
[2025-12-21T19:23:43.903Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-21T19:23:43.903Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #💻・remote-usa: 6 posts
     2. #📈・JID_fb739488: 4 posts
     3. #💻・tech-jobs: 3 posts
[2025-12-21T19:23:43.903Z] [BOT] 4. #🤖・ai-jobs: 1 posts
     5. #🌆・chicago: 1 posts
[2025-12-21T19:23:43.903Z] [BOT] [STATS] Channel stats saved
[2025-12-21T19:23:45.915Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2976) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*