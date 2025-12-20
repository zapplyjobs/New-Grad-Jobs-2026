# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T22:50:44.609Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T22:49:56.511Z] ========================================
[2025-12-20T22:49:56.513Z] Discord Bot Execution Log
[2025-12-20T22:49:56.513Z] Environment: GitHub Actions
[2025-12-20T22:49:56.513Z] Node Version: v20.19.6
[2025-12-20T22:49:56.513Z] ========================================
[2025-12-20T22:49:56.513Z] Environment Variables Check:
[2025-12-20T22:49:56.513Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T22:49:56.514Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.514Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T22:49:56.514Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T22:49:56.514Z] 
Multi-Channel Configuration:
[2025-12-20T22:49:56.514Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.514Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.514Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.514Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.514Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.514Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.514Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.515Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.515Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T22:49:56.515Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T22:49:56.515Z] 
Data Files Check:
[2025-12-20T22:49:56.515Z] .github/data/new_jobs.json: ✅ Exists (10 items, 50419 bytes)
[2025-12-20T22:49:56.519Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 457935 bytes)
[2025-12-20T22:49:56.519Z] 
========================================
[2025-12-20T22:49:56.519Z] Starting Enhanced Discord Bot...
[2025-12-20T22:49:56.519Z] ========================================
[2025-12-20T22:49:57.079Z] [BOT] ✅ Loaded V2 database: 787 jobs
[2025-12-20T22:49:57.560Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T22:49:57.561Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T22:49:57.561Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T22:49:57.561Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T22:49:57.652Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 59
[2025-12-20T22:49:57.655Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T22:49:57.655Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T22:49:57.655Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T22:49:57.656Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T22:49:57.656Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-20T22:49:57.656Z] [BOT] 📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T22:49:57.661Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-20T22:49:57.662Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2025-12-20T22:49:57.662Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:49:57.666Z] [BOT ERROR] (node:3539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T22:49:57.835Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2025-12-20T22:49:57.835Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-20T22:49:59.668Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
[2025-12-20T22:49:59.668Z] [BOT] ✅ Location: 🌄・mountain-view
[2025-12-20T22:50:01.170Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-20T22:50:01.170Z] [BOT] 💾 BEFORE ARCHIVING: 788 jobs in database
[2025-12-20T22:50:01.171Z] [BOT] ✅ No jobs to archive (all 788 jobs within 7-day window)
[2025-12-20T22:50:01.181Z] [BOT] 💾 Saved posted_jobs.json: 788 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:01.181Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2025-12-20T22:50:01.181Z] [BOT] 💾 BEFORE ARCHIVING: 789 jobs in database
[2025-12-20T22:50:01.182Z] [BOT] ✅ No jobs to archive (all 789 jobs within 7-day window)
[2025-12-20T22:50:01.193Z] [BOT] 💾 Saved posted_jobs.json: 789 active jobs
[2025-12-20T22:50:01.193Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:01.193Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Innovation" @ ORG_cd5b7b9f
   Category: TECH (matched: "software")
[2025-12-20T22:50:01.193Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:50:01.451Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Innovation @ ORG_cd5b7b9f in #💻・tech-jobs
[2025-12-20T22:50:01.451Z] [BOT] ✅ Industry: Software Engineer 1 - Innovation @ ORG_cd5b7b9f
[2025-12-20T22:50:03.230Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Innovation @ ORG_cd5b7b9f in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:50:04.730Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Innovation @ ORG_cd5b7b9f (instance #1)
[2025-12-20T22:50:04.730Z] [BOT] 💾 BEFORE ARCHIVING: 790 jobs in database
[2025-12-20T22:50:04.731Z] [BOT] ✅ No jobs to archive (all 790 jobs within 7-day window)
[2025-12-20T22:50:04.737Z] [BOT] 💾 Saved posted_jobs.json: 790 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:04.738Z] [BOT] 📍 [ROUTING] "NASCAR Cup Track Support Engineer – Entry Level" @ ORG_cdb83ff1
[2025-12-20T22:50:04.738Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:50:04.952Z] [BOT] ✅ Created forum post: 🏢 NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 in #💻・tech-jobs
  ✅ Industry: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1
[2025-12-20T22:50:06.764Z] [BOT] ✅ Created forum post: 🏢 NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:50:08.266Z] [BOT] 💾 Marked as posted: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 (instance #1)
[2025-12-20T22:50:08.266Z] [BOT] 💾 BEFORE ARCHIVING: 791 jobs in database
[2025-12-20T22:50:08.267Z] [BOT] ✅ No jobs to archive (all 791 jobs within 7-day window)
[2025-12-20T22:50:08.274Z] [BOT] 💾 Saved posted_jobs.json: 791 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:08.275Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_316d43c0 Design Systems
[2025-12-20T22:50:08.275Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:50:08.460Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_316d43c0 Design Systems in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_316d43c0 Design Systems
[2025-12-20T22:50:10.225Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_316d43c0 Design Systems in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T22:50:11.727Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_316d43c0 Design Systems (instance #1)
[2025-12-20T22:50:11.727Z] [BOT] 💾 BEFORE ARCHIVING: 792 jobs in database
[2025-12-20T22:50:11.728Z] [BOT] ✅ No jobs to archive (all 792 jobs within 7-day window)
[2025-12-20T22:50:11.734Z] [BOT] 💾 Saved posted_jobs.json: 792 active jobs
[2025-12-20T22:50:11.734Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:11.734Z] [BOT] 📍 [ROUTING] "Math Major Software Developer" @ Auto-Owners Insurance
[2025-12-20T22:50:11.735Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T22:50:11.934Z] [BOT] ✅ Created forum post: 🏢 Math Major Software Developer @ Auto-Owners Insurance in #💻・tech-jobs
[2025-12-20T22:50:11.934Z] [BOT] ✅ Industry: Math Major Software Developer @ Auto-Owners Insurance
[2025-12-20T22:50:13.753Z] [BOT] ✅ Created forum post: 🏢 Math Major Software Developer @ Auto-Owners Insurance in #💻・remote-usa
[2025-12-20T22:50:13.754Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T22:50:15.255Z] [BOT] 💾 Marked as posted: Math Major Software Developer @ Auto-Owners Insurance (instance #1)
[2025-12-20T22:50:15.255Z] [BOT] 💾 BEFORE ARCHIVING: 793 jobs in database
[2025-12-20T22:50:15.256Z] [BOT] ✅ No jobs to archive (all 793 jobs within 7-day window)
[2025-12-20T22:50:15.263Z] [BOT] 💾 Saved posted_jobs.json: 793 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:18.264Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-20T22:50:18.265Z] [BOT] 📍 [ROUTING] "Finance AI/ML Engineer" @ ORG_a5257743 Packard Enterprise
[2025-12-20T22:50:18.265Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-20T22:50:18.469Z] [BOT] ✅ Created forum post: 🏢 Finance AI/ML Engineer @ ORG_a5257743 Packard Enterprise in #🤖・ai-jobs
  ✅ Industry: Finance AI/ML Engineer @ ORG_a5257743 Packard Enterprise
[2025-12-20T22:50:20.377Z] [BOT] ✅ Created forum post: 🏢 Finance AI/ML Engineer @ ORG_a5257743 Packard Enterprise in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-20T22:50:21.878Z] [BOT] 💾 Marked as posted: Finance AI/ML Engineer @ ORG_a5257743 Packard Enterprise (instance #1)
[2025-12-20T22:50:21.878Z] [BOT] 💾 BEFORE ARCHIVING: 794 jobs in database
[2025-12-20T22:50:21.879Z] [BOT] ✅ No jobs to archive (all 794 jobs within 7-day window)
[2025-12-20T22:50:21.886Z] [BOT] 💾 Saved posted_jobs.json: 794 active jobs
[2025-12-20T22:50:21.886Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:21.886Z] [BOT] 📍 [ROUTING] "Senior Data Scientist" @ ORG_3eab285c
   Category: AI (matched: "machine learning")
[2025-12-20T22:50:21.887Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T22:50:21.887Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-20T22:50:22.102Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ ORG_3eab285c in #🤖・ai-jobs
  ✅ Industry: Senior Data Scientist @ ORG_3eab285c
[2025-12-20T22:50:23.803Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ ORG_3eab285c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T22:50:25.303Z] [BOT] 💾 Marked as posted: Senior Data Scientist @ ORG_3eab285c (instance #1)
[2025-12-20T22:50:25.303Z] [BOT] 💾 BEFORE ARCHIVING: 795 jobs in database
[2025-12-20T22:50:25.304Z] [BOT] ✅ No jobs to archive (all 795 jobs within 7-day window)
[2025-12-20T22:50:25.311Z] [BOT] 💾 Saved posted_jobs.json: 795 active jobs
[2025-12-20T22:50:25.311Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:28.311Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-20T22:50:28.312Z] [BOT] 📍 [ROUTING] "Instrument Operator 1 - Surveying" @ ORG_bdc26476
[2025-12-20T22:50:28.312Z] [BOT] Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-20T22:50:28.674Z] [BOT] ✅ Created forum post: 🏢 Instrument Operator 1 - Surveying @ ORG_bdc26476 in #📁・JID_e938df7b
[2025-12-20T22:50:28.674Z] [BOT] ✅ Industry: Instrument Operator 1 - Surveying @ ORG_bdc26476
[2025-12-20T22:50:30.688Z] [BOT] ✅ Created forum post: 🏢 Instrument Operator 1 - Surveying @ ORG_bdc26476 in #💻・remote-usa
[2025-12-20T22:50:30.688Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T22:50:32.189Z] [BOT] 💾 Marked as posted: Instrument Operator 1 - Surveying @ ORG_bdc26476 (instance #1)
[2025-12-20T22:50:32.189Z] [BOT] 💾 BEFORE ARCHIVING: 796 jobs in database
[2025-12-20T22:50:32.190Z] [BOT] ✅ No jobs to archive (all 796 jobs within 7-day window)
[2025-12-20T22:50:32.198Z] [BOT] 💾 Saved posted_jobs.json: 796 active jobs
[2025-12-20T22:50:32.198Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:35.198Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-20T22:50:35.198Z] [BOT] 📍 [ROUTING] "People Insights Analyst" @ ORG_f3f2248d Grumman
[2025-12-20T22:50:35.198Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-20T22:50:35.529Z] [BOT] ✅ Created forum post: 🏢 People Insights Analyst @ ORG_f3f2248d Grumman in #🩺・healthcare-jobs
[2025-12-20T22:50:35.529Z] [BOT] ✅ Industry: People Insights Analyst @ ORG_f3f2248d Grumman
[2025-12-20T22:50:37.224Z] [BOT] ✅ Created forum post: 🏢 People Insights Analyst @ ORG_f3f2248d Grumman in #💻・remote-usa
[2025-12-20T22:50:37.225Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T22:50:38.726Z] [BOT] 💾 Marked as posted: People Insights Analyst @ ORG_f3f2248d Grumman (instance #1)
[2025-12-20T22:50:38.726Z] [BOT] 💾 BEFORE ARCHIVING: 797 jobs in database
[2025-12-20T22:50:38.727Z] [BOT] ✅ No jobs to archive (all 797 jobs within 7-day window)
[2025-12-20T22:50:38.735Z] [BOT] 💾 Saved posted_jobs.json: 797 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T22:50:41.736Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T22:50:41.736Z] [BOT] ⏭️  Skipping duplicate: JID_87f81155 (posted within 7 days)
[2025-12-20T22:50:41.736Z] [BOT] ⏭️  Skipping duplicate: JID_fb4e1c41-engineer_1200240-1 (posted within 7 days)
[2025-12-20T22:50:41.736Z] [BOT] ⏭️  Skipping duplicate: JID_1cf4fc55-innovation_r-76383 (posted within 7 days)
[2025-12-20T22:50:41.736Z] [BOT] ⏭️  Skipping duplicate: JID_d30cfa45-scientist_r-2343767 (posted within 7 days)
[2025-12-20T22:50:41.737Z] [BOT] ⏭️  Skipping duplicate: JID_dbde4e7f-level_r43333 (posted within 7 days)
[2025-12-20T22:50:41.737Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_d3bb614d-i_r52446-1 (posted within 7 days)
[2025-12-20T22:50:41.737Z] [BOT] ⏭️  Skipping duplicate: JID_e8b796c3-developer_r_1008 (posted within 7 days)
[2025-12-20T22:50:41.737Z] [BOT] ⏭️  Skipping duplicate: JID_f21a88e7 (posted within 7 days)
[2025-12-20T22:50:41.737Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_7801efa1-3_r10217558 (posted within 7 days)
[2025-12-20T22:50:41.740Z] [BOT] ✅ Loaded pending queue: 153 total (133 pending, 20 enriched, 0 posted)
[2025-12-20T22:50:41.743Z] [BOT] ✅ Saved pending queue: 153 total (133 pending, 11 enriched, 9 posted)
[2025-12-20T22:50:41.743Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T22:50:41.789Z] [BOT] 📂 Loaded 852 existing routing entries
[2025-12-20T22:50:41.837Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-20T22:50:41.837Z] [BOT] Total entries: 861
   Timestamp: 2025-12-20T22:50:41.832Z
[2025-12-20T22:50:41.837Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T22:50:41.837Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-20T22:50:41.838Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-20T22:50:41.838Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
[2025-12-20T22:50:41.838Z] [BOT] 1. #💻・remote-usa: 6 posts
     2. #💻・tech-jobs: 5 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌄・mountain-view: 1 posts
[2025-12-20T22:50:41.838Z] [BOT] 5. #🌉・san-francisco: 1 posts
[2025-12-20T22:50:41.838Z] [BOT] [STATS] Channel stats saved
[2025-12-20T22:50:43.850Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*