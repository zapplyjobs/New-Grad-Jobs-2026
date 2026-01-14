# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T06:08:19.486Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T06:07:29.203Z] ========================================
[2026-01-14T06:07:29.205Z] Discord Bot Execution Log
[2026-01-14T06:07:29.205Z] Environment: GitHub Actions
[2026-01-14T06:07:29.205Z] Node Version: v20.19.6
[2026-01-14T06:07:29.205Z] ========================================
[2026-01-14T06:07:29.205Z] Environment Variables Check:
[2026-01-14T06:07:29.205Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T06:07:29.205Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.205Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T06:07:29.205Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T06:07:29.206Z] 
Multi-Channel Configuration:
[2026-01-14T06:07:29.206Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.206Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.206Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.206Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.206Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.206Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.206Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.206Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.206Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T06:07:29.206Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T06:07:29.206Z] 
Data Files Check:
[2026-01-14T06:07:29.207Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59944 bytes)
[2026-01-14T06:07:29.212Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 657277 bytes)
[2026-01-14T06:07:29.212Z] 
========================================
[2026-01-14T06:07:29.212Z] Starting Enhanced Discord Bot...
[2026-01-14T06:07:29.212Z] ========================================
[2026-01-14T06:07:29.747Z] [BOT] ✅ Loaded V2 database: 1245 jobs
[2026-01-14T06:07:30.304Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T06:07:30.304Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T06:07:30.305Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T06:07:30.416Z] [BOT] ✅ Loaded pending queue: 2736 total (2716 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Business Data Steward - Consumer and Small Business Banking at Truist Bank
[2026-01-14T06:07:30.419Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T06:07:30.419Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T06:07:30.419Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T06:07:30.420Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T06:07:30.420Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T06:07:30.425Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-14T06:07:30.426Z] [BOT] 📍 [ROUTING] "Business Data Steward - Consumer and Small Business Banking" @ ORG_b93825c5 Bank
[2026-01-14T06:07:30.426Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:07:30.444Z] [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T06:07:30.723Z] [BOT] ✅ Created forum post: 🏢 Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #💻・tech-jobs
  ✅ Industry: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank
[2026-01-14T06:07:32.481Z] [BOT] ✅ Created forum post: 🏢 Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #🌉・san-francisco
[2026-01-14T06:07:32.481Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T06:07:33.982Z] [BOT] 💾 Marked as posted: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank (instance #1)
[2026-01-14T06:07:33.982Z] [BOT] 💾 BEFORE ARCHIVING: 1246 jobs in database
[2026-01-14T06:07:33.983Z] [BOT] ✅ No jobs to archive (all 1246 jobs within 7-day window)
[2026-01-14T06:07:33.992Z] [BOT] 💾 Saved posted_jobs.json: 1246 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:07:33.993Z] [BOT] 📍 [ROUTING] "Software Engineer - Robotics" @ ORG_3db79629 Robotics
[2026-01-14T06:07:33.993Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:07:34.170Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Robotics @ ORG_3db79629 Robotics in #💻・tech-jobs
[2026-01-14T06:07:34.170Z] [BOT] ✅ Industry: Software Engineer - Robotics @ ORG_3db79629 Robotics
[2026-01-14T06:07:35.838Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Robotics @ ORG_3db79629 Robotics in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T06:07:37.339Z] [BOT] 💾 Marked as posted: Software Engineer - Robotics @ ORG_3db79629 Robotics (instance #1)
[2026-01-14T06:07:37.340Z] [BOT] 💾 BEFORE ARCHIVING: 1247 jobs in database
[2026-01-14T06:07:37.341Z] [BOT] ✅ No jobs to archive (all 1247 jobs within 7-day window)
[2026-01-14T06:07:37.349Z] [BOT] 💾 Saved posted_jobs.json: 1247 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:07:37.349Z] [BOT] 📍 [ROUTING] "Engineering Support 1" @ ORG_93e4a7ef Water
[2026-01-14T06:07:37.349Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:07:37.491Z] [BOT] ✅ Created forum post: 🏢 Engineering Support 1 @ ORG_93e4a7ef Water in #💻・tech-jobs
  ✅ Industry: Engineering Support 1 @ ORG_93e4a7ef Water
[2026-01-14T06:07:39.181Z] [BOT] ✅ Created forum post: 🏢 Engineering Support 1 @ ORG_93e4a7ef Water in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T06:07:40.682Z] [BOT] 💾 Marked as posted: Engineering Support 1 @ ORG_93e4a7ef Water (instance #1)
[2026-01-14T06:07:40.682Z] [BOT] 💾 BEFORE ARCHIVING: 1248 jobs in database
[2026-01-14T06:07:40.683Z] [BOT] ✅ No jobs to archive (all 1248 jobs within 7-day window)
[2026-01-14T06:07:40.692Z] [BOT] 💾 Saved posted_jobs.json: 1248 active jobs
[2026-01-14T06:07:40.692Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:07:40.693Z] [BOT] 📍 [ROUTING] "Analyst 1" @ ORG_742553d6 Entertainment
[2026-01-14T06:07:40.693Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:07:40.883Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 @ ORG_742553d6 Entertainment in #💻・tech-jobs
[2026-01-14T06:07:40.883Z] [BOT] ✅ Industry: Analyst 1 @ ORG_742553d6 Entertainment
[2026-01-14T06:07:42.583Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 @ ORG_742553d6 Entertainment in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T06:07:44.084Z] [BOT] 💾 Marked as posted: Analyst 1 @ ORG_742553d6 Entertainment (instance #1)
[2026-01-14T06:07:44.084Z] [BOT] 💾 BEFORE ARCHIVING: 1249 jobs in database
[2026-01-14T06:07:44.085Z] [BOT] ✅ No jobs to archive (all 1249 jobs within 7-day window)
[2026-01-14T06:07:44.094Z] [BOT] 💾 Saved posted_jobs.json: 1249 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:07:44.095Z] [BOT] 📍 [ROUTING] "Entry Level Graphics Software Developer" @ ORG_d51736fa
[2026-01-14T06:07:44.095Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T06:07:44.305Z] [BOT] ✅ Created forum post: 🏢 Entry Level Graphics Software Developer @ ORG_d51736fa in #💻・tech-jobs
  ✅ Industry: Entry Level Graphics Software Developer @ ORG_d51736fa
[2026-01-14T06:07:46.007Z] [BOT] ✅ Created forum post: 🏢 Entry Level Graphics Software Developer @ ORG_d51736fa in #💻・remote-usa
[2026-01-14T06:07:46.007Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T06:07:47.508Z] [BOT] 💾 Marked as posted: Entry Level Graphics Software Developer @ ORG_d51736fa (instance #1)
[2026-01-14T06:07:47.508Z] [BOT] 💾 BEFORE ARCHIVING: 1250 jobs in database
[2026-01-14T06:07:47.509Z] [BOT] ✅ No jobs to archive (all 1250 jobs within 7-day window)
[2026-01-14T06:07:47.518Z] [BOT] 💾 Saved posted_jobs.json: 1250 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:07:50.518Z] [BOT] 📌 Posting 1 jobs to #🏗️・JID_b7c6683f
[2026-01-14T06:07:50.518Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Energy Systems" @ ORG_a867f63f National Laboratory
[2026-01-14T06:07:50.519Z] [BOT] Category: SUPPLY-CHAIN (matched: "distribution")
   Channel: 🏗️・JID_b7c6683f (1391...9058)
[2026-01-14T06:07:50.710Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory in #🏗️・JID_b7c6683f
[2026-01-14T06:07:50.710Z] [BOT] ✅ Industry: Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory
[2026-01-14T06:07:52.387Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory in #🌆・chicago
[2026-01-14T06:07:52.387Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-14T06:07:53.888Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-14T06:07:53.889Z] [BOT] 💾 BEFORE ARCHIVING: 1251 jobs in database
[2026-01-14T06:07:53.889Z] [BOT] ✅ No jobs to archive (all 1251 jobs within 7-day window)
[2026-01-14T06:07:53.899Z] [BOT] 💾 Saved posted_jobs.json: 1251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:07:56.899Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-14T06:07:56.899Z] [BOT] 📍 [ROUTING] "Lederman Fellow" @ ORG_af10f363
[2026-01-14T06:07:56.899Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-14T06:07:57.119Z] [BOT] ✅ Created forum post: 🏢 Lederman Fellow @ ORG_af10f363 in #🩺・healthcare-jobs
[2026-01-14T06:07:57.119Z] [BOT] ✅ Industry: Lederman Fellow @ ORG_af10f363
[2026-01-14T06:07:58.838Z] [BOT] ✅ Created forum post: 🏢 Lederman Fellow @ ORG_af10f363 in #🌆・chicago
[2026-01-14T06:07:58.838Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-14T06:08:00.338Z] [BOT] 💾 Marked as posted: Lederman Fellow @ ORG_af10f363 (instance #1)
[2026-01-14T06:08:00.338Z] [BOT] 💾 BEFORE ARCHIVING: 1252 jobs in database
[2026-01-14T06:08:00.340Z] [BOT] ✅ No jobs to archive (all 1252 jobs within 7-day window)
[2026-01-14T06:08:00.350Z] [BOT] 💾 Saved posted_jobs.json: 1252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:08:03.351Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T06:08:03.351Z] [BOT] 📍 [ROUTING] "Automation Software Engineer" @ ORG_0c79a9c2 Materials
[2026-01-14T06:08:03.351Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T06:08:03.542Z] [BOT] ✅ Created forum post: 🏢 Automation Software Engineer @ ORG_0c79a9c2 Materials in #🤖・ai-jobs
[2026-01-14T06:08:03.542Z] [BOT] ✅ Industry: Automation Software Engineer @ ORG_0c79a9c2 Materials
[2026-01-14T06:08:05.205Z] [BOT] ✅ Created forum post: 🏢 Automation Software Engineer @ ORG_0c79a9c2 Materials in #🤠・austin
[2026-01-14T06:08:05.205Z] [BOT] ✅ Location: 🤠・austin
[2026-01-14T06:08:06.706Z] [BOT] 💾 Marked as posted: Automation Software Engineer @ ORG_0c79a9c2 Materials (instance #1)
[2026-01-14T06:08:06.706Z] [BOT] 💾 BEFORE ARCHIVING: 1253 jobs in database
[2026-01-14T06:08:06.707Z] [BOT] ✅ No jobs to archive (all 1253 jobs within 7-day window)
[2026-01-14T06:08:06.718Z] [BOT] 💾 Saved posted_jobs.json: 1253 active jobs
[2026-01-14T06:08:06.718Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:08:06.718Z] [BOT] 📍 [ROUTING] "Software Engineer - Simulators" @ ORG_cdec6f53
   Category: AI (matched: "machine learning")
[2026-01-14T06:08:06.718Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T06:08:06.886Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Simulators @ ORG_cdec6f53 in #🤖・ai-jobs
[2026-01-14T06:08:06.886Z] [BOT] ✅ Industry: Software Engineer - Simulators @ ORG_cdec6f53
[2026-01-14T06:08:08.531Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Simulators @ ORG_cdec6f53 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-14T06:08:10.031Z] [BOT] 💾 Marked as posted: Software Engineer - Simulators @ ORG_cdec6f53 (instance #1)
[2026-01-14T06:08:10.031Z] [BOT] 💾 BEFORE ARCHIVING: 1254 jobs in database
[2026-01-14T06:08:10.032Z] [BOT] ✅ No jobs to archive (all 1254 jobs within 7-day window)
[2026-01-14T06:08:10.042Z] [BOT] 💾 Saved posted_jobs.json: 1254 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T06:08:10.042Z] [BOT] 📍 [ROUTING] "Senior – Data Scientist" @ ORG_3eab285c
   Category: AI (matched: "machine learning")
[2026-01-14T06:08:10.042Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T06:08:10.214Z] [BOT] ✅ Created forum post: 🏢 Senior – Data Scientist @ ORG_3eab285c in #🤖・ai-jobs
[2026-01-14T06:08:10.214Z] [BOT] ✅ Industry: Senior – Data Scientist @ ORG_3eab285c
[2026-01-14T06:08:11.923Z] [BOT] ✅ Created forum post: 🏢 Senior – Data Scientist @ ORG_3eab285c in #💻・remote-usa
[2026-01-14T06:08:11.923Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T06:08:13.424Z] [BOT] 💾 Marked as posted: Senior – Data Scientist @ ORG_3eab285c (instance #1)
[2026-01-14T06:08:13.424Z] [BOT] 💾 BEFORE ARCHIVING: 1255 jobs in database
[2026-01-14T06:08:13.425Z] [BOT] ✅ No jobs to archive (all 1255 jobs within 7-day window)
[2026-01-14T06:08:13.434Z] [BOT] 💾 Saved posted_jobs.json: 1255 active jobs
[2026-01-14T06:08:13.434Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T06:08:16.434Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T06:08:16.434Z] [BOT] ⏭️  Skipping duplicate: JID_3b882cd7-banking_r0107465 (posted within 7 days)
[2026-01-14T06:08:16.434Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_683bf26d-systems_420958 (posted within 7 days)
[2026-01-14T06:08:16.434Z] [BOT] ⏭️  Skipping duplicate: JID_fe4e7ae2 (posted within 7 days)
[2026-01-14T06:08:16.434Z] [BOT] ⏭️  Skipping duplicate: JID_4f4623b8-i_10015998-1 (posted within 7 days)
[2026-01-14T06:08:16.434Z] [BOT] ⏭️  Skipping duplicate: JID_cd33f33b-fellow_r_008876 (posted within 7 days)
[2026-01-14T06:08:16.435Z] [BOT] ⏭️  Skipping duplicate: JID_d10a2204-_r2519059 (posted within 7 days)
⏭️  Skipping duplicate: JID_a7af662d (posted within 7 days)
⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-76888 (posted within 7 days)
⏭️  Skipping duplicate: JID_d30cfa45-scientist_r-2367375-1 (posted within 7 days)
[2026-01-14T06:08:16.435Z] [BOT] ⏭️  Skipping duplicate: JID_389ffced-developer_r-00171511 (posted within 7 days)
[2026-01-14T06:08:16.552Z] [BOT] ✅ Loaded pending queue: 2736 total (2716 pending, 20 enriched, 0 posted)
[2026-01-14T06:08:16.713Z] [BOT] ✅ Saved pending queue: 2736 total (2716 pending, 10 enriched, 10 posted)
[2026-01-14T06:08:16.714Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T06:08:16.766Z] [BOT] 📂 Loaded 3365 existing routing entries
[2026-01-14T06:08:16.827Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3375
   Timestamp: 2026-01-14T06:08:16.812Z
[2026-01-14T06:08:16.827Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T06:08:16.827Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T06:08:16.828Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T06:08:16.828Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-14T06:08:16.828Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🌉・san-francisco: 2 posts
     5. #🌆・chicago: 2 posts
[2026-01-14T06:08:16.828Z] [BOT] [STATS] Channel stats saved
[2026-01-14T06:08:18.851Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*