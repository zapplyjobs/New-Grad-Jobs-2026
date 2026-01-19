# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T05:31:13.357Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T05:30:20.395Z] ========================================
[2026-01-19T05:30:20.397Z] Discord Bot Execution Log
[2026-01-19T05:30:20.397Z] Environment: GitHub Actions
[2026-01-19T05:30:20.397Z] Node Version: v20.19.6
[2026-01-19T05:30:20.397Z] ========================================
[2026-01-19T05:30:20.397Z] Environment Variables Check:
[2026-01-19T05:30:20.397Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T05:30:20.397Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.397Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T05:30:20.398Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T05:30:20.398Z] 
Multi-Channel Configuration:
[2026-01-19T05:30:20.398Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.398Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.398Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.398Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.398Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.398Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.398Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.398Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.398Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T05:30:20.398Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T05:30:20.398Z] 
Data Files Check:
[2026-01-19T05:30:20.399Z] .github/data/new_jobs.json: ✅ Exists (10 items, 65695 bytes)
[2026-01-19T05:30:20.409Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1547527 bytes)
[2026-01-19T05:30:20.409Z] 
========================================
[2026-01-19T05:30:20.409Z] Starting Enhanced Discord Bot...
[2026-01-19T05:30:20.409Z] ========================================
[2026-01-19T05:30:20.949Z] [BOT] ✅ Loaded V2 database: 2851 jobs
[2026-01-19T05:30:21.666Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T05:30:21.667Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T05:30:21.667Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T05:30:21.786Z] [BOT] ✅ Loaded pending queue: 2836 total (2816 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate – Software Engineer at Morgan Stanley
[2026-01-19T05:30:21.789Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T05:30:21.789Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T05:30:21.790Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T05:30:21.790Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-19T05:30:21.791Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-19T05:30:21.791Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T05:30:21.797Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-19T05:30:21.797Z] [BOT] 📍 [ROUTING] "Associate – Software Engineer" @ ORG_02281b3b Stanley
[2026-01-19T05:30:21.797Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:30:21.801Z] [BOT ERROR] (node:3295) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T05:30:22.127Z] [BOT] ✅ Created forum post: 🏢 Associate – Software Engineer @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-19T05:30:22.127Z] [BOT] ✅ Industry: Associate – Software Engineer @ ORG_02281b3b Stanley
[2026-01-19T05:30:23.761Z] [BOT] ✅ Created forum post: 🏢 Associate – Software Engineer @ ORG_02281b3b Stanley in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-19T05:30:25.262Z] [BOT] 💾 Marked as posted: Associate – Software Engineer @ ORG_02281b3b Stanley (instance #1)
[2026-01-19T05:30:25.262Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-19T05:30:25.264Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-19T05:30:25.285Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
[2026-01-19T05:30:25.285Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T05:30:25.286Z] [BOT] 📍 [ROUTING] "Associate Field Application Engineer" @ ORG_dafc2905
[2026-01-19T05:30:25.286Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:30:25.445Z] [BOT] ✅ Created forum post: 🏢 Associate Field Application Engineer @ ORG_dafc2905 in #💻・tech-jobs
[2026-01-19T05:30:25.446Z] [BOT] ✅ Industry: Associate Field Application Engineer @ ORG_dafc2905
[2026-01-19T05:30:27.237Z] [BOT] ✅ Created forum post: 🏢 Associate Field Application Engineer @ ORG_dafc2905 in #🤠・austin
[2026-01-19T05:30:27.237Z] [BOT] ✅ Location: 🤠・austin
[2026-01-19T05:30:28.737Z] [BOT] 💾 Marked as posted: Associate Field Application Engineer @ ORG_dafc2905 (instance #1)
[2026-01-19T05:30:28.737Z] [BOT] 💾 BEFORE ARCHIVING: 2853 jobs in database
[2026-01-19T05:30:28.739Z] [BOT] ✅ No jobs to archive (all 2853 jobs within 7-day window)
[2026-01-19T05:30:28.754Z] [BOT] 💾 Saved posted_jobs.json: 2853 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:30:28.755Z] [BOT] 📍 [ROUTING] "Fellow" @ ORG_ea93d6a2 for Humanity
   Category: TECH (default)
[2026-01-19T05:30:28.755Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:30:28.995Z] [BOT] ✅ Created forum post: 🏢 Fellow @ ORG_ea93d6a2 for Humanity in #💻・tech-jobs
  ✅ Industry: Fellow @ ORG_ea93d6a2 for Humanity
[2026-01-19T05:30:30.822Z] [BOT] ✅ Created forum post: 🏢 Fellow @ ORG_ea93d6a2 for Humanity in #🌉・san-francisco
[2026-01-19T05:30:30.822Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T05:30:32.323Z] [BOT] 💾 Marked as posted: Fellow @ ORG_ea93d6a2 for Humanity (instance #1)
[2026-01-19T05:30:32.323Z] [BOT] 💾 BEFORE ARCHIVING: 2854 jobs in database
[2026-01-19T05:30:32.325Z] [BOT] ✅ No jobs to archive (all 2854 jobs within 7-day window)
[2026-01-19T05:30:32.345Z] [BOT] 💾 Saved posted_jobs.json: 2854 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:30:32.346Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_c910d474 Dynamics Information Technology
[2026-01-19T05:30:32.346Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T05:30:32.762Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2026-01-19T05:30:32.762Z] [BOT] ✅ Industry: Java Developer @ ORG_c910d474 Dynamics Information Technology
[2026-01-19T05:30:34.430Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
[2026-01-19T05:30:34.430Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T05:30:35.931Z] [BOT] 💾 Marked as posted: Java Developer @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-19T05:30:35.931Z] [BOT] 💾 BEFORE ARCHIVING: 2855 jobs in database
[2026-01-19T05:30:35.934Z] [BOT] ✅ No jobs to archive (all 2855 jobs within 7-day window)
[2026-01-19T05:30:35.954Z] [BOT] 💾 Saved posted_jobs.json: 2855 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:30:38.955Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-19T05:30:38.956Z] [BOT] 📍 [ROUTING] "Senior Data Engineer" @ ORG_b21b93a4
   Category: DATA-SCIENCE (matched: "data engineering")
[2026-01-19T05:30:38.956Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T05:30:39.171Z] [BOT] ✅ Created forum post: 🏢 Senior Data Engineer @ ORG_b21b93a4 in #📈・JID_fb739488
  ✅ Industry: Senior Data Engineer @ ORG_b21b93a4
[2026-01-19T05:30:40.673Z] [BOT] 💾 Marked as posted: Senior Data Engineer @ ORG_b21b93a4 (instance #1)
[2026-01-19T05:30:40.673Z] [BOT] 💾 BEFORE ARCHIVING: 2856 jobs in database
[2026-01-19T05:30:40.675Z] [BOT] ✅ No jobs to archive (all 2856 jobs within 7-day window)
[2026-01-19T05:30:40.691Z] [BOT] 💾 Saved posted_jobs.json: 2856 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:30:40.691Z] [BOT] 📍 [ROUTING] "Data Analyst - Systems Analysis - Electrical Engineer/Scientist Support" @ ORG_1954b120
[2026-01-19T05:30:40.691Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T05:30:41.021Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Systems Analysis - Electrical Engineer/Scientist Support @ ORG_1954b120 in #📈・JID_fb739488
[2026-01-19T05:30:41.021Z] [BOT] ✅ Industry: Data Analyst - Systems Analysis - Electrical Engineer/Scientist Support @ ORG_1954b120
[2026-01-19T05:30:42.701Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Systems Analysis - Electrical Engineer/Scientist Support @ ORG_1954b120 in #🦢・los-angeles
[2026-01-19T05:30:42.701Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-19T05:30:44.202Z] [BOT] 💾 Marked as posted: Data Analyst - Systems Analysis - Electrical Engineer/Scientist Support @ ORG_1954b120 (instance #1)
[2026-01-19T05:30:44.202Z] [BOT] 💾 BEFORE ARCHIVING: 2857 jobs in database
[2026-01-19T05:30:44.204Z] [BOT] ✅ No jobs to archive (all 2857 jobs within 7-day window)
[2026-01-19T05:30:44.221Z] [BOT] 💾 Saved posted_jobs.json: 2857 active jobs
[2026-01-19T05:30:44.221Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T05:30:47.223Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2026-01-19T05:30:47.223Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher - Pier - Integrated Food-Energy-Water Systems" @ ORG_2380d607 View A&M University
   Category: HEALTHCARE (matched: "health")
[2026-01-19T05:30:47.223Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T05:30:47.447Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Pier - Integrated Food-Energy-Water Systems @ ORG_2380d607 View A&M Universi in #🩺・healthcare-jobs
  ✅ Industry: Postdoctoral Researcher - Pier - Integrated Food-Energy-Water Systems @ ORG_2380d607 View A&M University
[2026-01-19T05:30:49.123Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher - Pier - Integrated Food-Energy-Water Systems @ ORG_2380d607 View A&M Universi in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-19T05:30:50.626Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher - Pier - Integrated Food-Energy-Water Systems @ ORG_2380d607 View A&M University (instance #1)
[2026-01-19T05:30:50.626Z] [BOT] 💾 BEFORE ARCHIVING: 2858 jobs in database
[2026-01-19T05:30:50.628Z] [BOT] ✅ No jobs to archive (all 2858 jobs within 7-day window)
[2026-01-19T05:30:50.645Z] [BOT] 💾 Saved posted_jobs.json: 2858 active jobs
[2026-01-19T05:30:50.645Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T05:30:50.646Z] [BOT] 📍 [ROUTING] "Atmospheric Scientist – Associate or Mid-Level" @ ORG_b344d80e Boeing Company
[2026-01-19T05:30:50.646Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T05:30:50.961Z] [BOT] ✅ Created forum post: 🏢 Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #🩺・healthcare-jobs
  ✅ Industry: Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company
[2026-01-19T05:30:52.738Z] [BOT] ✅ Created forum post: 🏢 Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T05:30:54.240Z] [BOT] 💾 Marked as posted: Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-19T05:30:54.240Z] [BOT] 💾 BEFORE ARCHIVING: 2859 jobs in database
[2026-01-19T05:30:54.242Z] [BOT] ✅ No jobs to archive (all 2859 jobs within 7-day window)
[2026-01-19T05:30:54.258Z] [BOT] 💾 Saved posted_jobs.json: 2859 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:30:57.259Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-19T05:30:57.260Z] [BOT] 📍 [ROUTING] "Manager, Account Executive - Enterprise Sales (Industries)" @ anthropic
[2026-01-19T05:30:57.260Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T05:30:57.408Z] [BOT] ✅ Created forum post: 🏢 Manager, Account Executive - Enterprise Sales (Industries) @ anthropic in #💲・sales-jobs
  ✅ Industry: Manager, Account Executive - Enterprise Sales (Industries) @ anthropic
[2026-01-19T05:30:59.111Z] [BOT] ✅ Created forum post: 🏢 Manager, Account Executive - Enterprise Sales (Industries) @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T05:31:00.613Z] [BOT] 💾 Marked as posted: Manager, Account Executive - Enterprise Sales (Industries) @ anthropic (instance #1)
[2026-01-19T05:31:00.613Z] [BOT] 💾 BEFORE ARCHIVING: 2860 jobs in database
[2026-01-19T05:31:00.614Z] [BOT] ✅ No jobs to archive (all 2860 jobs within 7-day window)
[2026-01-19T05:31:00.630Z] [BOT] 💾 Saved posted_jobs.json: 2860 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T05:31:03.632Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-19T05:31:03.632Z] [BOT] 📍 [ROUTING] "Data Engineer 1 - Aws - Python" @ ORG_b344d80e Travelers Companies
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T05:31:03.632Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T05:31:03.907Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies in #🤖・ai-jobs
  ✅ Industry: Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies
[2026-01-19T05:31:05.745Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T05:31:07.246Z] [BOT] 💾 Marked as posted: Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-19T05:31:07.247Z] [BOT] 💾 BEFORE ARCHIVING: 2861 jobs in database
[2026-01-19T05:31:07.248Z] [BOT] ✅ No jobs to archive (all 2861 jobs within 7-day window)
[2026-01-19T05:31:07.267Z] [BOT] 💾 Saved posted_jobs.json: 2861 active jobs
[2026-01-19T05:31:07.267Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T05:31:10.268Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T05:31:10.269Z] [BOT] ⏭️  Skipping duplicate: JID_cbfee1f8-engineer_jr019008 (posted within 7 days)
[2026-01-19T05:31:10.269Z] [BOT] ⏭️  Skipping duplicate: JID_f4ce48f6 (posted within 7 days)
[2026-01-19T05:31:10.269Z] [BOT] ⏭️  Skipping duplicate: JID_e477e119-external_career_page-JID_c113cd89-engineer_jr00021516 (posted within 7 days)
[2026-01-19T05:31:10.269Z] [BOT] ⏭️  Skipping duplicate: JID_1edae76c-_321185 (posted within 7 days)
[2026-01-19T05:31:10.269Z] [BOT] ⏭️  Skipping duplicate: JID_36ac1042 (posted within 7 days)
[2026-01-19T05:31:10.270Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-pvamu_external-JID_bd1d23c8-_r-089880-1 (posted within 7 days)
[2026-01-19T05:31:10.270Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
[2026-01-19T05:31:10.270Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
[2026-01-19T05:31:10.270Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
[2026-01-19T05:31:10.270Z] [BOT] ⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
[2026-01-19T05:31:10.386Z] [BOT] ✅ Loaded pending queue: 2836 total (2816 pending, 20 enriched, 0 posted)
[2026-01-19T05:31:10.565Z] [BOT] ✅ Saved pending queue: 2836 total (2816 pending, 10 enriched, 10 posted)
[2026-01-19T05:31:10.566Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T05:31:10.625Z] [BOT] 📂 Loaded 4995 existing routing entries
[2026-01-19T05:31:10.699Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5005
[2026-01-19T05:31:10.700Z] [BOT] Timestamp: 2026-01-19T05:31:10.677Z
[2026-01-19T05:31:10.700Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T05:31:10.700Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-19T05:31:10.701Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T05:31:10.701Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 10
   Top channels:
     1. #💻・tech-jobs: 4 posts
[2026-01-19T05:31:10.701Z] [BOT] 2. #💻・remote-usa: 3 posts
     3. #🤠・austin: 2 posts
     4. #🌉・san-francisco: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-19T05:31:10.702Z] [BOT] [STATS] Channel stats saved
[2026-01-19T05:31:12.726Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3295) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*