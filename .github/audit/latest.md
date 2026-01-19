# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T07:29:22.918Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T07:28:31.366Z] ========================================
[2026-01-19T07:28:31.368Z] Discord Bot Execution Log
[2026-01-19T07:28:31.368Z] Environment: GitHub Actions
[2026-01-19T07:28:31.368Z] Node Version: v20.19.6
[2026-01-19T07:28:31.368Z] ========================================
[2026-01-19T07:28:31.368Z] Environment Variables Check:
[2026-01-19T07:28:31.368Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T07:28:31.368Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.369Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T07:28:31.369Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T07:28:31.369Z] 
Multi-Channel Configuration:
[2026-01-19T07:28:31.369Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.369Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.369Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.369Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.369Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.369Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.369Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.369Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.370Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T07:28:31.370Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T07:28:31.370Z] 
Data Files Check:
[2026-01-19T07:28:31.371Z] .github/data/new_jobs.json: ✅ Exists (10 items, 75302 bytes)
[2026-01-19T07:28:31.381Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1571904 bytes)
[2026-01-19T07:28:31.381Z] 
========================================
[2026-01-19T07:28:31.382Z] Starting Enhanced Discord Bot...
[2026-01-19T07:28:31.382Z] ========================================
[2026-01-19T07:28:31.926Z] [BOT] ✅ Loaded V2 database: 2890 jobs
[2026-01-19T07:28:32.587Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T07:28:32.588Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T07:28:32.588Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T07:28:32.716Z] [BOT] ✅ Loaded pending queue: 2830 total (2810 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Lead, GSIs at anthropic
[2026-01-19T07:28:32.719Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T07:28:32.720Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T07:28:32.720Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T07:28:32.721Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-19T07:28:32.721Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-19T07:28:32.721Z] [BOT] - Lead Counsel - NYC @ datadog: new york, new york, usa, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T07:28:32.726Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-19T07:28:32.726Z] [BOT] 📍 [ROUTING] "Partner Marketing Lead, GSIs" @ anthropic
[2026-01-19T07:28:32.726Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T07:28:32.731Z] [BOT ERROR] (node:2616) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T07:28:32.894Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Lead, GSIs @ anthropic in #💲・sales-jobs
[2026-01-19T07:28:32.894Z] [BOT] ✅ Industry: Partner Marketing Lead, GSIs @ anthropic
[2026-01-19T07:28:34.598Z] [BOT] ✅ Created forum post: 🏢 Partner Marketing Lead, GSIs @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T07:28:36.099Z] [BOT] 💾 Marked as posted: Partner Marketing Lead, GSIs @ anthropic (instance #1)
[2026-01-19T07:28:36.099Z] [BOT] 💾 BEFORE ARCHIVING: 2891 jobs in database
[2026-01-19T07:28:36.101Z] [BOT] ✅ No jobs to archive (all 2891 jobs within 7-day window)
[2026-01-19T07:28:36.129Z] [BOT] 💾 Saved posted_jobs.json: 2891 active jobs
[2026-01-19T07:28:36.129Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-19T07:28:39.129Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-19T07:28:39.130Z] [BOT] 📍 [ROUTING] "Solutions Analyst - Enterprise Asset Management - Eam" @ ORG_4db4f14a Technologies
[2026-01-19T07:28:39.130Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T07:28:39.353Z] [BOT] ✅ Created forum post: 🏢 Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies in #📣・marketing-jobs
[2026-01-19T07:28:39.353Z] [BOT] ✅ Industry: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies
[2026-01-19T07:28:41.180Z] [BOT] ✅ Created forum post: 🏢 Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T07:28:42.681Z] [BOT] 💾 Marked as posted: Solutions Analyst - Enterprise Asset Management - Eam @ ORG_4db4f14a Technologies (instance #1)
[2026-01-19T07:28:42.681Z] [BOT] 💾 BEFORE ARCHIVING: 2892 jobs in database
[2026-01-19T07:28:42.683Z] [BOT] ✅ No jobs to archive (all 2892 jobs within 7-day window)
[2026-01-19T07:28:42.703Z] [BOT] 💾 Saved posted_jobs.json: 2892 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:28:42.705Z] [BOT] 📍 [ROUTING] "Medical Simulation Technician" @ ORG_438a7d59 State University
[2026-01-19T07:28:42.705Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-19T07:28:43.022Z] [BOT] ✅ Created forum post: 🏢 Medical Simulation Technician @ ORG_438a7d59 State University in #📣・marketing-jobs
  ✅ Industry: Medical Simulation Technician @ ORG_438a7d59 State University
[2026-01-19T07:28:44.880Z] [BOT] ✅ Created forum post: 🏢 Medical Simulation Technician @ ORG_438a7d59 State University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T07:28:46.382Z] [BOT] 💾 Marked as posted: Medical Simulation Technician @ ORG_438a7d59 State University (instance #1)
[2026-01-19T07:28:46.382Z] [BOT] 💾 BEFORE ARCHIVING: 2893 jobs in database
[2026-01-19T07:28:46.384Z] [BOT] ✅ No jobs to archive (all 2893 jobs within 7-day window)
[2026-01-19T07:28:46.402Z] [BOT] 💾 Saved posted_jobs.json: 2893 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:28:49.403Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-19T07:28:49.403Z] [BOT] 📍 [ROUTING] "Knowledge Engineer/Scientist - PhD" @ ORG_58b7c913 & Gamble (P&G)
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-19T07:28:49.403Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T07:28:49.625Z] [BOT] ✅ Created forum post: 🏢 Knowledge Engineer/Scientist - PhD @ ORG_58b7c913 & Gamble (P&G) in #🤖・ai-jobs
[2026-01-19T07:28:49.625Z] [BOT] ✅ Industry: Knowledge Engineer/Scientist - PhD @ ORG_58b7c913 & Gamble (P&G)
[2026-01-19T07:28:51.296Z] [BOT] ✅ Created forum post: 🏢 Knowledge Engineer/Scientist - PhD @ ORG_58b7c913 & Gamble (P&G) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T07:28:52.797Z] [BOT] 💾 Marked as posted: Knowledge Engineer/Scientist - PhD @ ORG_58b7c913 & Gamble (P&G) (instance #1)
[2026-01-19T07:28:52.798Z] [BOT] 💾 BEFORE ARCHIVING: 2894 jobs in database
[2026-01-19T07:28:52.800Z] [BOT] ✅ No jobs to archive (all 2894 jobs within 7-day window)
[2026-01-19T07:28:52.816Z] [BOT] 💾 Saved posted_jobs.json: 2894 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:28:52.816Z] [BOT] 📍 [ROUTING] "Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy" @ ORG_ce770667
[2026-01-19T07:28:52.816Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-19T07:28:53.025Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667 in #🤖・ai-jobs
[2026-01-19T07:28:53.025Z] [BOT] ✅ Industry: Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667
[2026-01-19T07:28:54.755Z] [BOT] ✅ Created forum post: 🟢 Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667 in #🌉・san-francisco
[2026-01-19T07:28:54.755Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T07:28:56.257Z] [BOT] 💾 Marked as posted: Software Engineer 3 - Security/Privacy - Google Cloud Security and Privacy @ ORG_ce770667 (instance #1)
[2026-01-19T07:28:56.257Z] [BOT] 💾 BEFORE ARCHIVING: 2895 jobs in database
[2026-01-19T07:28:56.259Z] [BOT] ✅ No jobs to archive (all 2895 jobs within 7-day window)
[2026-01-19T07:28:56.279Z] [BOT] 💾 Saved posted_jobs.json: 2895 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:28:56.279Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar" @ ORG_9d38443e of Miami
[2026-01-19T07:28:56.279Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-19T07:28:56.449Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_9d38443e of Miami in #🤖・ai-jobs
[2026-01-19T07:28:56.449Z] [BOT] ✅ Industry: Postdoctoral Scholar @ ORG_9d38443e of Miami
[2026-01-19T07:28:58.216Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_9d38443e of Miami in #💻・remote-usa
[2026-01-19T07:28:58.216Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-19T07:28:59.717Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar @ ORG_9d38443e of Miami (instance #1)
[2026-01-19T07:28:59.717Z] [BOT] 💾 BEFORE ARCHIVING: 2896 jobs in database
[2026-01-19T07:28:59.719Z] [BOT] ✅ No jobs to archive (all 2896 jobs within 7-day window)
[2026-01-19T07:28:59.737Z] [BOT] 💾 Saved posted_jobs.json: 2896 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:28:59.737Z] [BOT] 📍 [ROUTING] "Manager - BDR" @ gohighlevel
[2026-01-19T07:28:59.737Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-19T07:29:00.053Z] [BOT] ✅ Created forum post: 🏢 Manager - BDR @ gohighlevel in #🤖・ai-jobs
[2026-01-19T07:29:00.053Z] [BOT] ✅ Industry: Manager - BDR @ gohighlevel
[2026-01-19T07:29:01.555Z] [BOT] 💾 Marked as posted: Manager - BDR @ gohighlevel (instance #1)
[2026-01-19T07:29:01.556Z] [BOT] 💾 BEFORE ARCHIVING: 2897 jobs in database
[2026-01-19T07:29:01.558Z] [BOT] ✅ No jobs to archive (all 2897 jobs within 7-day window)
[2026-01-19T07:29:01.576Z] [BOT] 💾 Saved posted_jobs.json: 2897 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:29:04.577Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-19T07:29:04.578Z] [BOT] 📍 [ROUTING] "Software Engineer 2 in Test" @ ORG_56d3dff7
[2026-01-19T07:29:04.578Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T07:29:04.784Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 in Test @ ORG_56d3dff7 in #💻・tech-jobs
[2026-01-19T07:29:04.785Z] [BOT] ✅ Industry: Software Engineer 2 in Test @ ORG_56d3dff7
[2026-01-19T07:29:06.487Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 in Test @ ORG_56d3dff7 in #🚌・boston
[2026-01-19T07:29:06.487Z] [BOT] ✅ Location: 🚌・boston
[2026-01-19T07:29:07.988Z] [BOT] 💾 Marked as posted: Software Engineer 2 in Test @ ORG_56d3dff7 (instance #1)
[2026-01-19T07:29:07.988Z] [BOT] 💾 BEFORE ARCHIVING: 2898 jobs in database
[2026-01-19T07:29:07.990Z] [BOT] ✅ No jobs to archive (all 2898 jobs within 7-day window)
[2026-01-19T07:29:08.009Z] [BOT] 💾 Saved posted_jobs.json: 2898 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:29:08.009Z] [BOT] 📍 [ROUTING] "Software Development Engineer - Amazon Leo - US" @ ORG_49d2dc07
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T07:29:08.229Z] [BOT] ✅ Created forum post: 📦 Software Development Engineer - Amazon Leo - US @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer - Amazon Leo - US @ ORG_49d2dc07
[2026-01-19T07:29:09.731Z] [BOT] 💾 Marked as posted: Software Development Engineer - Amazon Leo - US @ ORG_49d2dc07 (instance #1)
[2026-01-19T07:29:09.731Z] [BOT] 💾 BEFORE ARCHIVING: 2899 jobs in database
[2026-01-19T07:29:09.732Z] [BOT] ✅ No jobs to archive (all 2899 jobs within 7-day window)
[2026-01-19T07:29:09.748Z] [BOT] 💾 Saved posted_jobs.json: 2899 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:29:12.749Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T07:29:12.750Z] [BOT] 📍 [ROUTING] "Entry Level Chemical Engineer/Environmental Engineer/Scientist - Permitting and Compliance Focus" @ ORG_c0e17070
[2026-01-19T07:29:12.750Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T07:29:12.992Z] [BOT] ✅ Created forum post: 🏢 Entry Level Chemical Engineer/Environmental Engineer/Scientist - Permitting and Compliance Focus  in #🩺・healthcare-jobs
  ✅ Industry: Entry Level Chemical Engineer/Environmental Engineer/Scientist - Permitting and Compliance Focus @ ORG_c0e17070
[2026-01-19T07:29:14.714Z] [BOT] ✅ Created forum post: 🏢 Entry Level Chemical Engineer/Environmental Engineer/Scientist - Permitting and Compliance Focus  in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-19T07:29:16.214Z] [BOT] 💾 Marked as posted: Entry Level Chemical Engineer/Environmental Engineer/Scientist - Permitting and Compliance Focus @ ORG_c0e17070 (instance #1)
[2026-01-19T07:29:16.215Z] [BOT] 💾 BEFORE ARCHIVING: 2900 jobs in database
[2026-01-19T07:29:16.216Z] [BOT] ✅ No jobs to archive (all 2900 jobs within 7-day window)
[2026-01-19T07:29:16.236Z] [BOT] 💾 Saved posted_jobs.json: 2900 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T07:29:19.237Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T07:29:19.237Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
[2026-01-19T07:29:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_df4c2a4c (posted within 7 days)
[2026-01-19T07:29:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_e13e4952-phd_r000143097 (posted within 7 days)
[2026-01-19T07:29:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_62eab69f-cx_1-job-2925 (posted within 7 days)
[2026-01-19T07:29:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_2e680245 (posted within 7 days)
[2026-01-19T07:29:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_2b60cefa (posted within 7 days)
[2026-01-19T07:29:19.238Z] [BOT] ⏭️  Skipping duplicate: JID_23226831-scholar_r100087909 (posted within 7 days)
[2026-01-19T07:29:19.239Z] [BOT] ⏭️  Skipping duplicate: JID_6962ce4b-specialist_r142572 (posted within 7 days)
[2026-01-19T07:29:19.239Z] [BOT] ⏭️  Skipping duplicate: JID_ad7950f3-_r-101815 (posted within 7 days)
[2026-01-19T07:29:19.239Z] [BOT] ⏭️  Skipping duplicate: JID_fda7b910 (posted within 7 days)
[2026-01-19T07:29:19.353Z] [BOT] ✅ Loaded pending queue: 2830 total (2810 pending, 20 enriched, 0 posted)
[2026-01-19T07:29:19.530Z] [BOT] ✅ Saved pending queue: 2830 total (2810 pending, 10 enriched, 10 posted)
[2026-01-19T07:29:19.531Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T07:29:19.591Z] [BOT] 📂 Loaded 5045 existing routing entries
[2026-01-19T07:29:19.664Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-19T07:29:19.664Z] [BOT] Total entries: 5055
   Timestamp: 2026-01-19T07:29:19.641Z
[2026-01-19T07:29:19.664Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
[2026-01-19T07:29:19.665Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-19T07:29:19.665Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-19T07:29:19.665Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
     1. #💻・remote-usa: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🌉・san-francisco: 2 posts
[2026-01-19T07:29:19.665Z] [BOT] 4. #📣・marketing-jobs: 2 posts
[2026-01-19T07:29:19.665Z] [BOT] 5. #💻・tech-jobs: 2 posts
[2026-01-19T07:29:19.666Z] [BOT] [STATS] Channel stats saved
[2026-01-19T07:29:21.690Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2616) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*