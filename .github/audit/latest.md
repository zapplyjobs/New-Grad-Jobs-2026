# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T21:01:40.389Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T21:00:45.221Z] ========================================
[2026-01-13T21:00:45.222Z] Discord Bot Execution Log
[2026-01-13T21:00:45.222Z] Environment: GitHub Actions
[2026-01-13T21:00:45.223Z] Node Version: v20.19.6
[2026-01-13T21:00:45.223Z] ========================================
[2026-01-13T21:00:45.223Z] Environment Variables Check:
[2026-01-13T21:00:45.223Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T21:00:45.223Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.223Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T21:00:45.223Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T21:00:45.223Z] 
Multi-Channel Configuration:
[2026-01-13T21:00:45.223Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.223Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.223Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.224Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.224Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.224Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.224Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.224Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.224Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T21:00:45.224Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T21:00:45.224Z] 
Data Files Check:
[2026-01-13T21:00:45.225Z] .github/data/new_jobs.json: ✅ Exists (10 items, 79354 bytes)
[2026-01-13T21:00:45.228Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 515658 bytes)
[2026-01-13T21:00:45.228Z] 
========================================
[2026-01-13T21:00:45.228Z] Starting Enhanced Discord Bot...
[2026-01-13T21:00:45.228Z] ========================================
[2026-01-13T21:00:45.739Z] [BOT] ✅ Loaded V2 database: 976 jobs
[2026-01-13T21:00:46.629Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T21:00:46.629Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T21:00:46.630Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T21:00:46.736Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Business Systems Analyst  at anthropic
[2026-01-13T21:00:46.739Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T21:00:46.739Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T21:00:46.739Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T21:00:46.740Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T21:00:46.740Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T21:00:46.745Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-13T21:00:46.745Z] [BOT] 📍 [ROUTING] "Business Systems Analyst " @ anthropic
[2026-01-13T21:00:46.746Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T21:00:46.750Z] [BOT ERROR] (node:2821) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T21:00:47.684Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst  @ anthropic in #📈・JID_fb739488
[2026-01-13T21:00:47.684Z] [BOT] ✅ Industry: Business Systems Analyst  @ anthropic
[2026-01-13T21:00:49.700Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T21:00:51.201Z] [BOT] 💾 Marked as posted: Business Systems Analyst  @ anthropic (instance #1)
[2026-01-13T21:00:51.201Z] [BOT] 💾 BEFORE ARCHIVING: 977 jobs in database
[2026-01-13T21:00:51.202Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T21:00:51.207Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T21:00:51.207Z] [BOT] ✅ Archiving complete: 1 archived, 976 active
[2026-01-13T21:00:51.214Z] [BOT] 💾 Saved posted_jobs.json: 976 active jobs
[2026-01-13T21:00:51.215Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:00:51.215Z] [BOT] 📍 [ROUTING] "Data Engineer 3" @ ORG_3eab285c
[2026-01-13T21:00:51.215Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T21:00:51.577Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 3 @ ORG_3eab285c in #📈・JID_fb739488
[2026-01-13T21:00:51.577Z] [BOT] ✅ Industry: Data Engineer 3 @ ORG_3eab285c
[2026-01-13T21:00:53.371Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 3 @ ORG_3eab285c in #☀️・sunnyvale
[2026-01-13T21:00:53.371Z] [BOT] ✅ Location: ☀️・sunnyvale
[2026-01-13T21:00:54.872Z] [BOT] 💾 Marked as posted: Data Engineer 3 @ ORG_3eab285c (instance #1)
[2026-01-13T21:00:54.872Z] [BOT] 💾 BEFORE ARCHIVING: 977 jobs in database
[2026-01-13T21:00:54.873Z] [BOT] ✅ No jobs to archive (all 977 jobs within 7-day window)
[2026-01-13T21:00:54.880Z] [BOT] 💾 Saved posted_jobs.json: 977 active jobs
[2026-01-13T21:00:54.880Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:00:54.881Z] [BOT] 📍 [ROUTING] "Data Engineer 1" @ ORG_7854eeec
[2026-01-13T21:00:54.881Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T21:00:55.249Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_7854eeec in #📈・JID_fb739488
[2026-01-13T21:00:55.249Z] [BOT] ✅ Industry: Data Engineer 1 @ ORG_7854eeec
[2026-01-13T21:00:57.037Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 @ ORG_7854eeec in #🤠・austin
[2026-01-13T21:00:57.038Z] [BOT] ✅ Location: 🤠・austin
[2026-01-13T21:00:58.539Z] [BOT] 💾 Marked as posted: Data Engineer 1 @ ORG_7854eeec (instance #1)
[2026-01-13T21:00:58.539Z] [BOT] 💾 BEFORE ARCHIVING: 978 jobs in database
[2026-01-13T21:00:58.540Z] [BOT] ✅ No jobs to archive (all 978 jobs within 7-day window)
[2026-01-13T21:00:58.547Z] [BOT] 💾 Saved posted_jobs.json: 978 active jobs
[2026-01-13T21:00:58.548Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:01:01.548Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T21:01:01.549Z] [BOT] 📍 [ROUTING] "Research Scientist New College Grad - ML Systems" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T21:01:01.549Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T21:01:02.063Z] [BOT] ✅ Created forum post: 🏢 Research Scientist New College Grad - ML Systems @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-13T21:01:02.063Z] [BOT] ✅ Industry: Research Scientist New College Grad - ML Systems @ ORG_0890f456
[2026-01-13T21:01:03.793Z] [BOT] ✅ Created forum post: 🏢 Research Scientist New College Grad - ML Systems @ ORG_0890f456 in #🌧️・seattle
[2026-01-13T21:01:03.794Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-13T21:01:05.295Z] [BOT] 💾 Marked as posted: Research Scientist New College Grad - ML Systems @ ORG_0890f456 (instance #1)
[2026-01-13T21:01:05.295Z] [BOT] 💾 BEFORE ARCHIVING: 979 jobs in database
[2026-01-13T21:01:05.296Z] [BOT] ✅ No jobs to archive (all 979 jobs within 7-day window)
[2026-01-13T21:01:05.304Z] [BOT] 💾 Saved posted_jobs.json: 979 active jobs
[2026-01-13T21:01:05.304Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:01:05.305Z] [BOT] 📍 [ROUTING] "Research Associate - Lti - School of Computer Science" @ ORG_15a5b314 Mellon University
[2026-01-13T21:01:05.305Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-13T21:01:05.513Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University in #🤖・ai-jobs
  ✅ Industry: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University
[2026-01-13T21:01:07.375Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:01:08.875Z] [BOT] 💾 Marked as posted: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University (instance #1)
[2026-01-13T21:01:08.876Z] [BOT] 💾 BEFORE ARCHIVING: 980 jobs in database
[2026-01-13T21:01:08.876Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-13T21:01:08.884Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
[2026-01-13T21:01:08.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:01:08.885Z] [BOT] 📍 [ROUTING] "Data Annotation - QC and Crawling - Thai" @ ORG_68dd70b6 Ai
[2026-01-13T21:01:08.885Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T21:01:09.464Z] [BOT] ✅ Created forum post: 🏢 Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai in #🤖・ai-jobs
  ✅ Industry: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai
[2026-01-13T21:01:11.257Z] [BOT] ✅ Created forum post: 🏢 Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai in #🌉・san-francisco
[2026-01-13T21:01:11.257Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T21:01:12.758Z] [BOT] 💾 Marked as posted: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai (instance #1)
[2026-01-13T21:01:12.759Z] [BOT] 💾 BEFORE ARCHIVING: 981 jobs in database
[2026-01-13T21:01:12.759Z] [BOT] ✅ No jobs to archive (all 981 jobs within 7-day window)
[2026-01-13T21:01:12.767Z] [BOT] 💾 Saved posted_jobs.json: 981 active jobs
[2026-01-13T21:01:12.767Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:01:15.768Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T21:01:15.769Z] [BOT] 📍 [ROUTING] "Research Associate - College of Engineering - Electrical and Computer Engineering" @ ORG_15a5b314 Mellon University
   Category: TECH (matched: "engineer/engineering")
[2026-01-13T21:01:15.769Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:01:16.098Z] [BOT] ✅ Created forum post: 🏢 Research Associate - College of Engineering - Electrical and Computer Engineering @ ORG_15a5b314 Mell in #💻・tech-jobs
  ✅ Industry: Research Associate - College of Engineering - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University
[2026-01-13T21:01:17.823Z] [BOT] ✅ Created forum post: 🏢 Research Associate - College of Engineering - Electrical and Computer Engineering @ ORG_15a5b314 Mell in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:01:19.325Z] [BOT] 💾 Marked as posted: Research Associate - College of Engineering - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University (instance #1)
[2026-01-13T21:01:19.325Z] [BOT] 💾 BEFORE ARCHIVING: 982 jobs in database
[2026-01-13T21:01:19.326Z] [BOT] ✅ No jobs to archive (all 982 jobs within 7-day window)
[2026-01-13T21:01:19.334Z] [BOT] 💾 Saved posted_jobs.json: 982 active jobs
[2026-01-13T21:01:19.334Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:01:19.334Z] [BOT] 📍 [ROUTING] "Data Insight Analyst - Principal Data Insight Analyst" @ ORG_f3f2248d Grumman
[2026-01-13T21:01:19.334Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:01:19.594Z] [BOT] ✅ Created forum post: 🏢 Data Insight Analyst - Principal Data Insight Analyst @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Data Insight Analyst - Principal Data Insight Analyst @ ORG_f3f2248d Grumman
[2026-01-13T21:01:21.349Z] [BOT] ✅ Created forum post: 🏢 Data Insight Analyst - Principal Data Insight Analyst @ ORG_f3f2248d Grumman in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T21:01:22.849Z] [BOT] 💾 Marked as posted: Data Insight Analyst - Principal Data Insight Analyst @ ORG_f3f2248d Grumman (instance #1)
[2026-01-13T21:01:22.849Z] [BOT] 💾 BEFORE ARCHIVING: 983 jobs in database
[2026-01-13T21:01:22.850Z] [BOT] ✅ No jobs to archive (all 983 jobs within 7-day window)
[2026-01-13T21:01:22.858Z] [BOT] 💾 Saved posted_jobs.json: 983 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:01:22.858Z] [BOT] 📍 [ROUTING] "Field Geologist" @ ORG_3c8e259b
[2026-01-13T21:01:22.858Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:01:23.707Z] [BOT] ✅ Created forum post: 🏢 Field Geologist @ ORG_3c8e259b in #💻・tech-jobs
  ✅ Industry: Field Geologist @ ORG_3c8e259b
[2026-01-13T21:01:25.512Z] [BOT] ✅ Created forum post: 🏢 Field Geologist @ ORG_3c8e259b in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T21:01:27.013Z] [BOT] 💾 Marked as posted: Field Geologist @ ORG_3c8e259b (instance #1)
[2026-01-13T21:01:27.014Z] [BOT] 💾 BEFORE ARCHIVING: 984 jobs in database
[2026-01-13T21:01:27.014Z] [BOT] ✅ No jobs to archive (all 984 jobs within 7-day window)
[2026-01-13T21:01:27.022Z] [BOT] 💾 Saved posted_jobs.json: 984 active jobs
[2026-01-13T21:01:27.022Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:01:30.023Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-13T21:01:30.024Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Industries" @ anthropic
[2026-01-13T21:01:30.024Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T21:01:30.296Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Industries @ anthropic in #💲・sales-jobs
[2026-01-13T21:01:30.296Z] [BOT] ✅ Industry: Strategic Account Executive, Industries @ anthropic
[2026-01-13T21:01:32.100Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Industries @ anthropic in #🌉・san-francisco
[2026-01-13T21:01:32.100Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T21:01:33.600Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Industries @ anthropic (instance #1)
[2026-01-13T21:01:33.600Z] [BOT] 💾 BEFORE ARCHIVING: 985 jobs in database
[2026-01-13T21:01:33.601Z] [BOT] ✅ No jobs to archive (all 985 jobs within 7-day window)
[2026-01-13T21:01:33.609Z] [BOT] 💾 Saved posted_jobs.json: 985 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:01:36.609Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T21:01:36.609Z] [BOT] ⏭️  Skipping duplicate: JID_e7a0cae8 (posted within 7 days)
[2026-01-13T21:01:36.610Z] [BOT] ⏭️  Skipping duplicate: JID_c78ce377-2026_jr2010161 (posted within 7 days)
[2026-01-13T21:01:36.610Z] [BOT] ⏭️  Skipping duplicate: JID_0b882a9a-engineering_2023997 (posted within 7 days)
[2026-01-13T21:01:36.610Z] [BOT] ⏭️  Skipping duplicate: JID_bb869606-iii_r-2350035 (posted within 7 days)
[2026-01-13T21:01:36.610Z] [BOT] ⏭️  Skipping duplicate: JID_0a4dd6f9 (posted within 7 days)
[2026-01-13T21:01:36.610Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_cf0b966f-analyst_r10213256 (posted within 7 days)
[2026-01-13T21:01:36.610Z] [BOT] ⏭️  Skipping duplicate: JID_6d1d25a4-i_r0114228 (posted within 7 days)
[2026-01-13T21:01:36.610Z] [BOT] ⏭️  Skipping duplicate: JID_26d26452-science_2023968 (posted within 7 days)
[2026-01-13T21:01:36.610Z] [BOT] ⏭️  Skipping duplicate: JID_646bc27b-cx_1-job-36628 (posted within 7 days)
[2026-01-13T21:01:36.611Z] [BOT] ⏭️  Skipping duplicate: JID_8b73a10f (posted within 7 days)
[2026-01-13T21:01:36.728Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-13T21:01:36.891Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
[2026-01-13T21:01:36.891Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T21:01:36.943Z] [BOT] 📂 Loaded 3125 existing routing entries
[2026-01-13T21:01:37.000Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-13T21:01:37.000Z] [BOT] New entries: 10
   Total entries: 3135
   Timestamp: 2026-01-13T21:01:36.987Z
[2026-01-13T21:01:37.001Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 20
   Successful: 20
[2026-01-13T21:01:37.001Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-13T21:01:37.001Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 11
   Top channels:
[2026-01-13T21:01:37.001Z] [BOT] 1. #📈・JID_fb739488: 3 posts
     2. #🌉・san-francisco: 3 posts
     3. #🤖・ai-jobs: 3 posts
[2026-01-13T21:01:37.002Z] [BOT] 4. #💻・tech-jobs: 3 posts
     5. #💻・remote-usa: 2 posts
[2026-01-13T21:01:37.002Z] [BOT] [STATS] Channel stats saved
[2026-01-13T21:01:39.025Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2821) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*