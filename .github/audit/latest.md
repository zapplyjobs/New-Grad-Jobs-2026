# Discord Bot Execution Audit
**Timestamp:** 2025-12-21T18:55:52.495Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-21T18:55:11.414Z] ========================================
[2025-12-21T18:55:11.416Z] Discord Bot Execution Log
[2025-12-21T18:55:11.416Z] Environment: GitHub Actions
[2025-12-21T18:55:11.416Z] Node Version: v20.19.6
[2025-12-21T18:55:11.416Z] ========================================
[2025-12-21T18:55:11.416Z] Environment Variables Check:
[2025-12-21T18:55:11.416Z] DISCORD_TOKEN: ✅ Set
[2025-12-21T18:55:11.416Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.416Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-21T18:55:11.416Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-21T18:55:11.416Z] 
Multi-Channel Configuration:
[2025-12-21T18:55:11.417Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.417Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.417Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.417Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.417Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.417Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.417Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.417Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.417Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-21T18:55:11.417Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-21T18:55:11.417Z] 
Data Files Check:
[2025-12-21T18:55:11.418Z] .github/data/new_jobs.json: ✅ Exists (10 items, 33809 bytes)
[2025-12-21T18:55:11.421Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 493090 bytes)
[2025-12-21T18:55:11.421Z] 
========================================
[2025-12-21T18:55:11.421Z] Starting Enhanced Discord Bot...
[2025-12-21T18:55:11.421Z] ========================================
[2025-12-21T18:55:11.949Z] [BOT] ✅ Loaded V2 database: 842 jobs
[2025-12-21T18:55:12.686Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-21T18:55:12.686Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-21T18:55:12.687Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-21T18:55:12.687Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-21T18:55:12.740Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-21T18:55:12.794Z] [BOT] ✅ Export complete: Added 1, Skipped 9, Total 122
[2025-12-21T18:55:12.797Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-21T18:55:12.797Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-21T18:55:12.797Z] [BOT] 📋 After blacklist filter: 9 jobs (1 blacklisted)
[2025-12-21T18:55:12.797Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2025-12-21T18:55:12.798Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2025-12-21T18:55:12.798Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Associate Machine Learning Engineer @ PitchBook: nyc, seattle
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-21T18:55:12.803Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-21T18:55:12.803Z] [BOT] 📍 [ROUTING] "Financial Systems Analyst 1" @ ORG_c625ca57 Brisbois
[2025-12-21T18:55:12.804Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:55:12.820Z] [BOT ERROR] (node:4110) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-21T18:55:13.331Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #💻・tech-jobs
  ✅ Industry: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois
[2025-12-21T18:55:15.025Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:55:16.526Z] [BOT] 💾 Marked as posted: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois (instance #1)
[2025-12-21T18:55:16.526Z] [BOT] 💾 BEFORE ARCHIVING: 843 jobs in database
[2025-12-21T18:55:16.527Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-21T18:55:16.532Z] [BOT] 📦 Archived 8 jobs to 2025-12.json (8 total in archive)
[2025-12-21T18:55:16.532Z] [BOT] ✅ Archiving complete: 8 archived, 835 active
[2025-12-21T18:55:16.540Z] [BOT] 💾 Saved posted_jobs.json: 835 active jobs
[2025-12-21T18:55:16.540Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:55:16.540Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ ORG_086eec07 Mobile Telematics
[2025-12-21T18:55:16.540Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-21T18:55:16.839Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend @ ORG_086eec07 Mobile Telematics in #💻・tech-jobs
  ✅ Industry: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics
[2025-12-21T18:55:18.519Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend @ ORG_086eec07 Mobile Telematics in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-21T18:55:20.020Z] [BOT] 💾 Marked as posted: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics (instance #1)
[2025-12-21T18:55:20.021Z] [BOT] 💾 BEFORE ARCHIVING: 836 jobs in database
[2025-12-21T18:55:20.021Z] [BOT] ✅ No jobs to archive (all 836 jobs within 7-day window)
[2025-12-21T18:55:20.027Z] [BOT] 💾 Saved posted_jobs.json: 836 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:55:23.028Z] [BOT] 📌 Posting 4 jobs to #📈・JID_fb739488
[2025-12-21T18:55:23.029Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_8a6cccbe
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-21T18:55:23.030Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T18:55:23.302Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_8a6cccbe in #📈・JID_fb739488
  ✅ Industry: Data Analyst 1 @ ORG_8a6cccbe
[2025-12-21T18:55:25.002Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_8a6cccbe in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-21T18:55:26.503Z] [BOT] 💾 Marked as posted: Data Analyst 1 @ ORG_8a6cccbe (instance #1)
[2025-12-21T18:55:26.503Z] [BOT] 💾 BEFORE ARCHIVING: 837 jobs in database
[2025-12-21T18:55:26.504Z] [BOT] ✅ No jobs to archive (all 837 jobs within 7-day window)
[2025-12-21T18:55:26.512Z] [BOT] 💾 Saved posted_jobs.json: 837 active jobs
[2025-12-21T18:55:26.512Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:55:26.512Z] [BOT] 📍 [ROUTING] "Lifespan Brain Institute Data Analyst" @ Children's Hospital of Philadelphia
[2025-12-21T18:55:26.512Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T18:55:26.964Z] [BOT] ✅ Created forum post: 🏢 Lifespan Brain Institute Data Analyst @ Children's Hospital of Philadelphia in #📈・JID_fb739488
  ✅ Industry: Lifespan Brain Institute Data Analyst @ Children's Hospital of Philadelphia
[2025-12-21T18:55:28.467Z] [BOT] 💾 Marked as posted: Lifespan Brain Institute Data Analyst @ Children's Hospital of Philadelphia (instance #1)
[2025-12-21T18:55:28.467Z] [BOT] 💾 BEFORE ARCHIVING: 838 jobs in database
[2025-12-21T18:55:28.467Z] [BOT] ✅ No jobs to archive (all 838 jobs within 7-day window)
[2025-12-21T18:55:28.475Z] [BOT] 💾 Saved posted_jobs.json: 838 active jobs
[2025-12-21T18:55:28.475Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:55:28.475Z] [BOT] 📍 [ROUTING] "Associate Data Analyst - Mobility" @ ORG_e82c1600 Global
[2025-12-21T18:55:28.475Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T18:55:28.712Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst - Mobility @ ORG_e82c1600 Global  in #📈・JID_fb739488
  ✅ Industry: Associate Data Analyst - Mobility @ ORG_e82c1600 Global
[2025-12-21T18:55:30.215Z] [BOT] 💾 Marked as posted: Associate Data Analyst - Mobility @ ORG_e82c1600 Global  (instance #1)
[2025-12-21T18:55:30.215Z] [BOT] 💾 BEFORE ARCHIVING: 839 jobs in database
[2025-12-21T18:55:30.216Z] [BOT] ✅ No jobs to archive (all 839 jobs within 7-day window)
[2025-12-21T18:55:30.223Z] [BOT] 💾 Saved posted_jobs.json: 839 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:55:30.224Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_8de41b07
[2025-12-21T18:55:30.224Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-21T18:55:30.441Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_8de41b07 in #📈・JID_fb739488
  ✅ Industry: Data Engineer @ ORG_8de41b07
[2025-12-21T18:55:34.352Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_8de41b07 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-21T18:55:35.852Z] [BOT] 💾 Marked as posted: Data Engineer @ ORG_8de41b07 (instance #1)
[2025-12-21T18:55:35.852Z] [BOT] 💾 BEFORE ARCHIVING: 840 jobs in database
[2025-12-21T18:55:35.853Z] [BOT] ✅ No jobs to archive (all 840 jobs within 7-day window)
[2025-12-21T18:55:35.860Z] [BOT] 💾 Saved posted_jobs.json: 840 active jobs
[2025-12-21T18:55:35.860Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:55:38.861Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-21T18:55:38.861Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_7a291dc3
   Category: AI (matched: "machine learning")
[2025-12-21T18:55:38.861Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-21T18:55:38.861Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-21T18:55:39.120Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_7a291dc3 in #🤖・ai-jobs
  ✅ Industry: Associate Machine Learning Engineer @ ORG_7a291dc3
[2025-12-21T18:55:40.905Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_7a291dc3 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-21T18:55:42.405Z] [BOT] 💾 Marked as posted: Associate Machine Learning Engineer @ ORG_7a291dc3 (instance #1)
[2025-12-21T18:55:42.405Z] [BOT] 💾 BEFORE ARCHIVING: 841 jobs in database
[2025-12-21T18:55:42.406Z] [BOT] ✅ No jobs to archive (all 841 jobs within 7-day window)
[2025-12-21T18:55:42.413Z] [BOT] 💾 Saved posted_jobs.json: 841 active jobs
[2025-12-21T18:55:42.413Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-21T18:55:42.413Z] [BOT] 💾 Marked as posted: Associate Machine Learning Engineer @ ORG_7a291dc3 (instance #1)
[2025-12-21T18:55:42.414Z] [BOT] 💾 BEFORE ARCHIVING: 842 jobs in database
[2025-12-21T18:55:42.414Z] [BOT] ✅ No jobs to archive (all 842 jobs within 7-day window)
[2025-12-21T18:55:42.421Z] [BOT] 💾 Saved posted_jobs.json: 842 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:55:42.421Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_c7bac469
[2025-12-21T18:55:42.422Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-21T18:55:42.764Z] [BOT] ✅ Created forum post: 🟦 Machine Learning Engineer @ ORG_c7bac469 in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer @ ORG_c7bac469
[2025-12-21T18:55:44.645Z] [BOT] ✅ Created forum post: 🟦 Machine Learning Engineer @ ORG_c7bac469 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-12-21T18:55:46.146Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ ORG_c7bac469 (instance #1)
[2025-12-21T18:55:46.146Z] [BOT] 💾 BEFORE ARCHIVING: 843 jobs in database
[2025-12-21T18:55:46.147Z] [BOT] ✅ No jobs to archive (all 843 jobs within 7-day window)
[2025-12-21T18:55:46.154Z] [BOT] 💾 Saved posted_jobs.json: 843 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-21T18:55:49.155Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-21T18:55:49.156Z] [BOT] ⏭️  Skipping duplicate: JID_1d6a1afb (posted within 7 days)
[2025-12-21T18:55:49.156Z] [BOT] ⏭️  Skipping duplicate: JID_b8c8ec0f (posted within 7 days)
[2025-12-21T18:55:49.156Z] [BOT] ⏭️  Skipping duplicate: JID_cb521219-analyst_1020123 (posted within 7 days)
⏭️  Skipping duplicate: JID_1fe599b8 (posted within 7 days)
[2025-12-21T18:55:49.156Z] [BOT] ⏭️  Skipping duplicate: JID_fa62ea1b-spgi_careers-JID_47cf0e16-analyst_322809-1 (posted within 7 days)
[2025-12-21T18:55:49.157Z] [BOT] ⏭️  Skipping duplicate: JID_7e7783f7 (posted within 7 days)
⏭️  Skipping duplicate: JID_66fc9bc9 (posted within 7 days)
⏭️  Skipping duplicate: JID_f55fa13e (posted within 7 days)
[2025-12-21T18:55:49.158Z] [BOT] ✅ Loaded pending queue: 80 total (60 pending, 20 enriched, 0 posted)
[2025-12-21T18:55:49.159Z] [BOT] ✅ Saved pending queue: 80 total (60 pending, 12 enriched, 8 posted)
[2025-12-21T18:55:49.160Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-21T18:55:49.202Z] [BOT] 📂 Loaded 923 existing routing entries
[2025-12-21T18:55:49.247Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2025-12-21T18:55:49.247Z] [BOT] Total entries: 931
   Timestamp: 2025-12-21T18:55:49.241Z
[2025-12-21T18:55:49.247Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e38d000c.jsonl
[2025-12-21T18:55:49.247Z] [BOT] Total attempts: 15
   Successful: 14
   Failed: 0
   Skipped: 1
[2025-12-21T18:55:49.248Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 8
   Top channels:
[2025-12-21T18:55:49.248Z] [BOT] 1. #📈・JID_fb739488: 4 posts
     2. #💻・tech-jobs: 2 posts
     3. #💻・remote-usa: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #🚌・boston: 1 posts
[2025-12-21T18:55:49.248Z] [BOT] [STATS] Channel stats saved
[2025-12-21T18:55:51.260Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4110) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*