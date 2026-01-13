# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T20:00:55.379Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T19:59:58.389Z] ========================================
[2026-01-13T19:59:58.391Z] Discord Bot Execution Log
[2026-01-13T19:59:58.391Z] Environment: GitHub Actions
[2026-01-13T19:59:58.391Z] Node Version: v20.19.6
[2026-01-13T19:59:58.391Z] ========================================
[2026-01-13T19:59:58.391Z] Environment Variables Check:
[2026-01-13T19:59:58.391Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T19:59:58.391Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.391Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T19:59:58.392Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T19:59:58.392Z] 
Multi-Channel Configuration:
[2026-01-13T19:59:58.392Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.392Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.392Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.392Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.392Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.392Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.392Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.392Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.392Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T19:59:58.392Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T19:59:58.393Z] 
Data Files Check:
[2026-01-13T19:59:58.393Z] .github/data/new_jobs.json: ✅ Exists (10 items, 63042 bytes)
[2026-01-13T19:59:58.397Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 498549 bytes)
[2026-01-13T19:59:58.397Z] 
========================================
[2026-01-13T19:59:58.397Z] Starting Enhanced Discord Bot...
[2026-01-13T19:59:58.397Z] ========================================
[2026-01-13T19:59:58.917Z] [BOT] ✅ Loaded V2 database: 946 jobs
[2026-01-13T19:59:59.423Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T19:59:59.424Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T19:59:59.424Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T19:59:59.533Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Community Support Specialist at figma
[2026-01-13T19:59:59.534Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T19:59:59.535Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T19:59:59.535Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T19:59:59.536Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T19:59:59.536Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T19:59:59.541Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-13T19:59:59.541Z] [BOT] 📍 [ROUTING] "Community Support Specialist" @ figma
[2026-01-13T19:59:59.541Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T19:59:59.546Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T19:59:59.922Z] [BOT] ✅ Created forum post: 🏢 Community Support Specialist @ figma in #💲・sales-jobs
[2026-01-13T19:59:59.922Z] [BOT] ✅ Industry: Community Support Specialist @ figma
[2026-01-13T20:00:01.694Z] [BOT] ✅ Created forum post: 🏢 Community Support Specialist @ figma in #🌉・san-francisco
[2026-01-13T20:00:01.695Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T20:00:03.195Z] [BOT] 💾 Marked as posted: Community Support Specialist @ figma (instance #1)
[2026-01-13T20:00:03.195Z] [BOT] 💾 BEFORE ARCHIVING: 947 jobs in database
[2026-01-13T20:00:03.196Z] [BOT] ✅ No jobs to archive (all 947 jobs within 7-day window)
[2026-01-13T20:00:03.207Z] [BOT] 💾 Saved posted_jobs.json: 947 active jobs
[2026-01-13T20:00:03.207Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:00:06.208Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-13T20:00:06.208Z] [BOT] 📍 [ROUTING] "Senior Data Scientist" @ ORG_3eab285c
[2026-01-13T20:00:06.208Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-13T20:00:06.748Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ ORG_3eab285c in #🤖・ai-jobs
[2026-01-13T20:00:06.748Z] [BOT] ✅ Industry: Senior Data Scientist @ ORG_3eab285c
[2026-01-13T20:00:08.710Z] [BOT] ✅ Created forum post: 🏢 Senior Data Scientist @ ORG_3eab285c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T20:00:10.212Z] [BOT] 💾 Marked as posted: Senior Data Scientist @ ORG_3eab285c (instance #1)
[2026-01-13T20:00:10.212Z] [BOT] 💾 BEFORE ARCHIVING: 948 jobs in database
[2026-01-13T20:00:10.213Z] [BOT] ✅ No jobs to archive (all 948 jobs within 7-day window)
[2026-01-13T20:00:10.227Z] [BOT] 💾 Saved posted_jobs.json: 948 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:00:10.228Z] [BOT] 📍 [ROUTING] "Analyst 1 - Full Stack" @ ORG_07b9fafa
[2026-01-13T20:00:10.228Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-13T20:00:10.452Z] [BOT] ✅ Created forum post: 💰 Analyst 1 - Full Stack @ ORG_07b9fafa in #🤖・ai-jobs
[2026-01-13T20:00:10.453Z] [BOT] ✅ Industry: Analyst 1 - Full Stack @ ORG_07b9fafa
[2026-01-13T20:00:12.918Z] [BOT] ✅ Created forum post: 💰 Analyst 1 - Full Stack @ ORG_07b9fafa in #🌉・san-francisco
[2026-01-13T20:00:12.918Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T20:00:14.420Z] [BOT] 💾 Marked as posted: Analyst 1 - Full Stack @ ORG_07b9fafa (instance #1)
[2026-01-13T20:00:14.420Z] [BOT] 💾 BEFORE ARCHIVING: 949 jobs in database
[2026-01-13T20:00:14.420Z] [BOT] ✅ No jobs to archive (all 949 jobs within 7-day window)
[2026-01-13T20:00:14.428Z] [BOT] 💾 Saved posted_jobs.json: 949 active jobs
[2026-01-13T20:00:14.428Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:00:17.429Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-13T20:00:17.430Z] [BOT] 📍 [ROUTING] "NASCAR Cup Track Support Engineer – Entry Level" @ ORG_cdb83ff1
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:00:17.683Z] [BOT] ✅ Created forum post: 🏢 NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 in #💻・tech-jobs
[2026-01-13T20:00:17.683Z] [BOT] ✅ Industry: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1
[2026-01-13T20:00:19.709Z] [BOT] ✅ Created forum post: 🏢 NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T20:00:21.210Z] [BOT] 💾 Marked as posted: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 (instance #1)
[2026-01-13T20:00:21.210Z] [BOT] 💾 BEFORE ARCHIVING: 950 jobs in database
[2026-01-13T20:00:21.211Z] [BOT] ✅ No jobs to archive (all 950 jobs within 7-day window)
[2026-01-13T20:00:21.218Z] [BOT] 💾 Saved posted_jobs.json: 950 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:00:21.219Z] [BOT] 📍 [ROUTING] "Math Major Software Developer" @ Auto-Owners Insurance
[2026-01-13T20:00:21.219Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:00:21.721Z] [BOT] ✅ Created forum post: 🏢 Math Major Software Developer @ Auto-Owners Insurance in #💻・tech-jobs
[2026-01-13T20:00:21.721Z] [BOT] ✅ Industry: Math Major Software Developer @ Auto-Owners Insurance
[2026-01-13T20:00:23.466Z] [BOT] ✅ Created forum post: 🏢 Math Major Software Developer @ Auto-Owners Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T20:00:24.967Z] [BOT] 💾 Marked as posted: Math Major Software Developer @ Auto-Owners Insurance (instance #1)
[2026-01-13T20:00:24.967Z] [BOT] 💾 BEFORE ARCHIVING: 951 jobs in database
[2026-01-13T20:00:24.968Z] [BOT] ✅ No jobs to archive (all 951 jobs within 7-day window)
[2026-01-13T20:00:24.976Z] [BOT] 💾 Saved posted_jobs.json: 951 active jobs
[2026-01-13T20:00:24.976Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:00:24.976Z] [BOT] 📍 [ROUTING] "Entry-Level Software Developer" @ ORG_d51736fa
[2026-01-13T20:00:24.976Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:00:25.178Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Developer @ ORG_d51736fa in #💻・tech-jobs
  ✅ Industry: Entry-Level Software Developer @ ORG_d51736fa
[2026-01-13T20:00:26.998Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Developer @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T20:00:28.499Z] [BOT] 💾 Marked as posted: Entry-Level Software Developer @ ORG_d51736fa (instance #1)
[2026-01-13T20:00:28.500Z] [BOT] 💾 BEFORE ARCHIVING: 952 jobs in database
[2026-01-13T20:00:28.500Z] [BOT] ✅ No jobs to archive (all 952 jobs within 7-day window)
[2026-01-13T20:00:28.508Z] [BOT] 💾 Saved posted_jobs.json: 952 active jobs
[2026-01-13T20:00:28.508Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:00:28.508Z] [BOT] 📍 [ROUTING] "Data Operator" @ ORG_2bc58fcc League Baseball
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:00:28.999Z] [BOT] ✅ Created forum post: 🏢 Data Operator @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
[2026-01-13T20:00:28.999Z] [BOT] ✅ Industry: Data Operator @ ORG_2bc58fcc League Baseball
[2026-01-13T20:00:30.781Z] [BOT] ✅ Created forum post: 🏢 Data Operator @ ORG_2bc58fcc League Baseball in #💻・remote-usa
[2026-01-13T20:00:30.781Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T20:00:32.282Z] [BOT] 💾 Marked as posted: Data Operator @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-13T20:00:32.282Z] [BOT] 💾 BEFORE ARCHIVING: 953 jobs in database
[2026-01-13T20:00:32.283Z] [BOT] ✅ No jobs to archive (all 953 jobs within 7-day window)
[2026-01-13T20:00:32.294Z] [BOT] 💾 Saved posted_jobs.json: 953 active jobs
[2026-01-13T20:00:32.297Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 1 - Scm" @ ORG_864269d2 Health System
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T20:00:32.617Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Scm @ ORG_864269d2 Health System in #💻・tech-jobs
[2026-01-13T20:00:32.618Z] [BOT] ✅ Industry: Software Engineer 1 - Scm @ ORG_864269d2 Health System
[2026-01-13T20:00:34.307Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Scm @ ORG_864269d2 Health System in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-13T20:00:35.809Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Scm @ ORG_864269d2 Health System (instance #1)
[2026-01-13T20:00:35.809Z] [BOT] 💾 BEFORE ARCHIVING: 954 jobs in database
[2026-01-13T20:00:35.810Z] [BOT] ✅ No jobs to archive (all 954 jobs within 7-day window)
[2026-01-13T20:00:35.819Z] [BOT] 💾 Saved posted_jobs.json: 954 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T20:00:38.820Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-13T20:00:38.820Z] [BOT] 📍 [ROUTING] "Systems Analyst" @ ORG_56d3e805 Computer
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T20:00:39.045Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_56d3e805 Computer in #📣・marketing-jobs
  ✅ Industry: Systems Analyst @ ORG_56d3e805 Computer
[2026-01-13T20:00:41.236Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_56d3e805 Computer in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T20:00:42.736Z] [BOT] 💾 Marked as posted: Systems Analyst @ ORG_56d3e805 Computer (instance #1)
[2026-01-13T20:00:42.736Z] [BOT] 💾 BEFORE ARCHIVING: 955 jobs in database
[2026-01-13T20:00:42.737Z] [BOT] ✅ No jobs to archive (all 955 jobs within 7-day window)
[2026-01-13T20:00:42.744Z] [BOT] 💾 Saved posted_jobs.json: 955 active jobs
[2026-01-13T20:00:42.744Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:00:45.744Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-13T20:00:45.745Z] [BOT] 📍 [ROUTING] "Right-of-Way Technician - Entry or Level I" @ ORG_fa328622 Power Cooperative
   Category: FINANCE (matched: "tax")
[2026-01-13T20:00:45.745Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T20:00:45.968Z] [BOT] ✅ Created forum post: 🏢 Right-of-Way Technician - Entry or Level I @ ORG_fa328622 Power Cooperative in #💰・finance-jobs
  ✅ Industry: Right-of-Way Technician - Entry or Level I @ ORG_fa328622 Power Cooperative
[2026-01-13T20:00:47.662Z] [BOT] ✅ Created forum post: 🏢 Right-of-Way Technician - Entry or Level I @ ORG_fa328622 Power Cooperative in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T20:00:49.162Z] [BOT] 💾 Marked as posted: Right-of-Way Technician - Entry or Level I @ ORG_fa328622 Power Cooperative (instance #1)
[2026-01-13T20:00:49.163Z] [BOT] 💾 BEFORE ARCHIVING: 956 jobs in database
[2026-01-13T20:00:49.163Z] [BOT] ✅ No jobs to archive (all 956 jobs within 7-day window)
[2026-01-13T20:00:49.171Z] [BOT] 💾 Saved posted_jobs.json: 956 active jobs
[2026-01-13T20:00:49.171Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T20:00:52.172Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T20:00:52.172Z] [BOT] ⏭️  Skipping duplicate: JID_342592d0 (posted within 7 days)
[2026-01-13T20:00:52.172Z] [BOT] ⏭️  Skipping duplicate: JID_d30cfa45-scientist_r-2343767 (posted within 7 days)
[2026-01-13T20:00:52.172Z] [BOT] ⏭️  Skipping duplicate: JID_dbde4e7f-level_r43333 (posted within 7 days)
[2026-01-13T20:00:52.173Z] [BOT] ⏭️  Skipping duplicate: JID_e8b796c3-developer_r_1008 (posted within 7 days)
[2026-01-13T20:00:52.173Z] [BOT] ⏭️  Skipping duplicate: JID_6e06cb04 (posted within 7 days)
[2026-01-13T20:00:52.173Z] [BOT] ⏭️  Skipping duplicate: JID_1e13ef53-_r-00172273 (posted within 7 days)
[2026-01-13T20:00:52.173Z] [BOT] ⏭️  Skipping duplicate: JID_99edcb1e (posted within 7 days)
⏭️  Skipping duplicate: JID_283bdcfc-analyst_r0038516-3 (posted within 7 days)
[2026-01-13T20:00:52.173Z] [BOT] ⏭️  Skipping duplicate: JID_3c900ad2-scm_jr65804 (posted within 7 days)
⏭️  Skipping duplicate: JID_5fb92a4c-i_jr100804 (posted within 7 days)
[2026-01-13T20:00:52.305Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-13T20:00:52.458Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-13T20:00:52.458Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-13T20:00:52.510Z] [BOT] 📂 Loaded 3095 existing routing entries
[2026-01-13T20:00:52.568Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3105
   Timestamp: 2026-01-13T20:00:52.555Z
[2026-01-13T20:00:52.569Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 20
[2026-01-13T20:00:52.569Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #💻・remote-usa: 7 posts
     2. #💻・tech-jobs: 5 posts
     3. #🌉・san-francisco: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #💲・sales-jobs: 1 posts
[2026-01-13T20:00:52.569Z] [BOT] [STATS] Channel stats saved
[2026-01-13T20:00:54.595Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*