# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T06:11:44.466Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T06:10:58.303Z] ========================================
[2026-01-15T06:10:58.305Z] Discord Bot Execution Log
[2026-01-15T06:10:58.305Z] Environment: GitHub Actions
[2026-01-15T06:10:58.305Z] Node Version: v20.19.6
[2026-01-15T06:10:58.305Z] ========================================
[2026-01-15T06:10:58.305Z] Environment Variables Check:
[2026-01-15T06:10:58.305Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T06:10:58.305Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.305Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T06:10:58.306Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T06:10:58.306Z] 
Multi-Channel Configuration:
[2026-01-15T06:10:58.306Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.306Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.306Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.306Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.306Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.306Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.306Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.306Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.306Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T06:10:58.306Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T06:10:58.306Z] 
Data Files Check:
[2026-01-15T06:10:58.307Z] .github/data/new_jobs.json: ✅ Exists (10 items, 43378 bytes)
[2026-01-15T06:10:58.314Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 864455 bytes)
[2026-01-15T06:10:58.314Z] 
========================================
[2026-01-15T06:10:58.314Z] Starting Enhanced Discord Bot...
[2026-01-15T06:10:58.314Z] ========================================
[2026-01-15T06:10:58.767Z] [BOT] ✅ Loaded V2 database: 1626 jobs
[2026-01-15T06:10:59.430Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T06:10:59.431Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T06:10:59.431Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T06:10:59.573Z] [BOT] ✅ Loaded pending queue: 2722 total (2702 pending, 20 enriched, 0 posted)
[2026-01-15T06:10:59.575Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Investments Operational Support Analyst - Document/Data Management at Pacific Life
[2026-01-15T06:10:59.577Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T06:10:59.577Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T06:10:59.578Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T06:10:59.578Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T06:10:59.579Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-15T06:10:59.579Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T06:10:59.581Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T06:10:59.582Z] [BOT] 📍 [ROUTING] "Investments Operational Support Analyst - Document/Data Management" @ ORG_fa3fca02 Life
   Category: TECH (matched: "data")
[2026-01-15T06:10:59.582Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:10:59.598Z] [BOT ERROR] (node:3053) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T06:10:59.842Z] [BOT] ✅ Created forum post: 🏢 Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life in #💻・tech-jobs
[2026-01-15T06:10:59.842Z] [BOT] ✅ Industry: Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life
[2026-01-15T06:11:01.616Z] [BOT] ✅ Created forum post: 🏢 Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life in #🦢・los-angeles
[2026-01-15T06:11:01.616Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-15T06:11:03.116Z] [BOT] 💾 Marked as posted: Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life (instance #1)
[2026-01-15T06:11:03.117Z] [BOT] 💾 BEFORE ARCHIVING: 1627 jobs in database
[2026-01-15T06:11:03.118Z] [BOT] ✅ No jobs to archive (all 1627 jobs within 7-day window)
[2026-01-15T06:11:03.135Z] [BOT] 💾 Saved posted_jobs.json: 1627 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:03.136Z] [BOT] 📍 [ROUTING] "Software Engineer - Inference AI/ML" @ ORG_ba7c5cf0
[2026-01-15T06:11:03.136Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:11:03.514Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Inference AI/ML @ ORG_ba7c5cf0 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Inference AI/ML @ ORG_ba7c5cf0
[2026-01-15T06:11:05.241Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Inference AI/ML @ ORG_ba7c5cf0 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T06:11:06.742Z] [BOT] 💾 Marked as posted: Software Engineer - Inference AI/ML @ ORG_ba7c5cf0 (instance #1)
[2026-01-15T06:11:06.742Z] [BOT] 💾 BEFORE ARCHIVING: 1628 jobs in database
[2026-01-15T06:11:06.743Z] [BOT] ✅ No jobs to archive (all 1628 jobs within 7-day window)
[2026-01-15T06:11:06.753Z] [BOT] 💾 Saved posted_jobs.json: 1628 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:06.753Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_3db7c958
   Category: TECH (matched: "software")
[2026-01-15T06:11:06.753Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:11:06.934Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_3db7c958 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_3db7c958
[2026-01-15T06:11:08.614Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_3db7c958 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T06:11:10.115Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_3db7c958 (instance #1)
[2026-01-15T06:11:10.115Z] [BOT] 💾 BEFORE ARCHIVING: 1629 jobs in database
[2026-01-15T06:11:10.117Z] [BOT] ✅ No jobs to archive (all 1629 jobs within 7-day window)
[2026-01-15T06:11:10.128Z] [BOT] 💾 Saved posted_jobs.json: 1629 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:10.129Z] [BOT] 📍 [ROUTING] "Cloud Platform Engineer I" @ ORG_e3124992
   Category: TECH (matched: "data engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:11:10.342Z] [BOT] ✅ Created forum post: 🏢 Cloud Platform Engineer I @ ORG_e3124992 in #💻・tech-jobs
  ✅ Industry: Cloud Platform Engineer I @ ORG_e3124992
[2026-01-15T06:11:12.102Z] [BOT] ✅ Created forum post: 🏢 Cloud Platform Engineer I @ ORG_e3124992 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-15T06:11:13.602Z] [BOT] 💾 Marked as posted: Cloud Platform Engineer I @ ORG_e3124992 (instance #1)
[2026-01-15T06:11:13.602Z] [BOT] 💾 BEFORE ARCHIVING: 1630 jobs in database
[2026-01-15T06:11:13.604Z] [BOT] ✅ No jobs to archive (all 1630 jobs within 7-day window)
[2026-01-15T06:11:13.614Z] [BOT] 💾 Saved posted_jobs.json: 1630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:13.615Z] [BOT] 📍 [ROUTING] "2026] Software Engineer – Early Career - Security" @ ORG_0acab0cf
   Category: TECH (matched: "software")
[2026-01-15T06:11:13.615Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:11:13.833Z] [BOT] ✅ Created forum post: 🟩 2026] Software Engineer – Early Career - Security @ ORG_0acab0cf in #💻・tech-jobs
  ✅ Industry: 2026] Software Engineer – Early Career - Security @ ORG_0acab0cf
[2026-01-15T06:11:15.949Z] [BOT] ✅ Created forum post: 🟩 2026] Software Engineer – Early Career - Security @ ORG_0acab0cf in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-15T06:11:17.451Z] [BOT] 💾 Marked as posted: 2026] Software Engineer – Early Career - Security @ ORG_0acab0cf (instance #1)
[2026-01-15T06:11:17.451Z] [BOT] 💾 BEFORE ARCHIVING: 1631 jobs in database
[2026-01-15T06:11:17.453Z] [BOT] ✅ No jobs to archive (all 1631 jobs within 7-day window)
[2026-01-15T06:11:17.465Z] [BOT] 💾 Saved posted_jobs.json: 1631 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:17.466Z] [BOT] 📍 [ROUTING] "Software Engineer I C#" @ McDonald's
   Category: TECH (matched: "software")
[2026-01-15T06:11:17.466Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:11:17.672Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I C# @ McDonald's in #💻・tech-jobs
  ✅ Industry: Software Engineer I C# @ McDonald's
[2026-01-15T06:11:19.418Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I C# @ McDonald's in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T06:11:20.918Z] [BOT] 💾 Marked as posted: Software Engineer I C# @ McDonald's (instance #1)
[2026-01-15T06:11:20.918Z] [BOT] 💾 BEFORE ARCHIVING: 1632 jobs in database
[2026-01-15T06:11:20.919Z] [BOT] ✅ No jobs to archive (all 1632 jobs within 7-day window)
[2026-01-15T06:11:20.931Z] [BOT] 💾 Saved posted_jobs.json: 1632 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:20.931Z] [BOT] 📍 [ROUTING] "Data Governance Specialist" @ ORG_3442dbaa
   Category: TECH (matched: "data")
[2026-01-15T06:11:20.931Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:11:21.130Z] [BOT] ✅ Created forum post: 🏢 Data Governance Specialist @ ORG_3442dbaa in #💻・tech-jobs
  ✅ Industry: Data Governance Specialist @ ORG_3442dbaa
[2026-01-15T06:11:22.889Z] [BOT] ✅ Created forum post: 🏢 Data Governance Specialist @ ORG_3442dbaa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T06:11:24.389Z] [BOT] 💾 Marked as posted: Data Governance Specialist @ ORG_3442dbaa (instance #1)
[2026-01-15T06:11:24.389Z] [BOT] 💾 BEFORE ARCHIVING: 1633 jobs in database
[2026-01-15T06:11:24.390Z] [BOT] ✅ No jobs to archive (all 1633 jobs within 7-day window)
[2026-01-15T06:11:24.400Z] [BOT] 💾 Saved posted_jobs.json: 1633 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:27.401Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T06:11:27.402Z] [BOT] 📍 [ROUTING] "Data Scientist – Early Career - Research - PhD" @ ORG_ce770667
[2026-01-15T06:11:27.402Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T06:11:27.692Z] [BOT] ✅ Created forum post: 🟢 Data Scientist – Early Career - Research - PhD @ ORG_ce770667 in #🤖・ai-jobs
  ✅ Industry: Data Scientist – Early Career - Research - PhD @ ORG_ce770667
[2026-01-15T06:11:29.419Z] [BOT] ✅ Created forum post: 🟢 Data Scientist – Early Career - Research - PhD @ ORG_ce770667 in #🗽・new-york
[2026-01-15T06:11:29.419Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T06:11:30.920Z] [BOT] 💾 Marked as posted: Data Scientist – Early Career - Research - PhD @ ORG_ce770667 (instance #1)
[2026-01-15T06:11:30.920Z] [BOT] 💾 BEFORE ARCHIVING: 1634 jobs in database
[2026-01-15T06:11:30.921Z] [BOT] ✅ No jobs to archive (all 1634 jobs within 7-day window)
[2026-01-15T06:11:30.931Z] [BOT] 💾 Saved posted_jobs.json: 1634 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:30.931Z] [BOT] 📍 [ROUTING] "Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence" @ ORG_569ec613 Morgan Chase
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T06:11:30.931Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T06:11:31.123Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence  in #🤖・ai-jobs
  ✅ Industry: Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence @ ORG_569ec613 Morgan Chase
[2026-01-15T06:11:32.894Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence  in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T06:11:34.394Z] [BOT] 💾 Marked as posted: Machine Learning Scientist - Natural Language Processing - Machine Learning Center of Excellence @ ORG_569ec613 Morgan Chase (instance #1)
💾 BEFORE ARCHIVING: 1635 jobs in database
[2026-01-15T06:11:34.395Z] [BOT] ✅ No jobs to archive (all 1635 jobs within 7-day window)
[2026-01-15T06:11:34.410Z] [BOT] 💾 Saved posted_jobs.json: 1635 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:34.410Z] [BOT] 📍 [ROUTING] "Engineering Scientist Associate" @ ORG_9d38443e of Texas - Austin
   Category: AI (matched: "artificial intelligence")
[2026-01-15T06:11:34.410Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T06:11:34.622Z] [BOT] ✅ Created forum post: 🏢 Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin
[2026-01-15T06:11:36.418Z] [BOT] ✅ Created forum post: 🏢 Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T06:11:37.919Z] [BOT] 💾 Marked as posted: Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-15T06:11:37.919Z] [BOT] 💾 BEFORE ARCHIVING: 1636 jobs in database
[2026-01-15T06:11:37.920Z] [BOT] ✅ No jobs to archive (all 1636 jobs within 7-day window)
[2026-01-15T06:11:37.931Z] [BOT] 💾 Saved posted_jobs.json: 1636 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:11:40.932Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T06:11:40.933Z] [BOT] ⏭️  Skipping duplicate: JID_d93d97a0-management_r15681-1 (posted within 7 days)
[2026-01-15T06:11:40.933Z] [BOT] ⏭️  Skipping duplicate: JID_6bb08f4f-CH_81c7aa05 (posted within 7 days)
[2026-01-15T06:11:40.933Z] [BOT] ⏭️  Skipping duplicate: JID_b4bb08df (posted within 7 days)
[2026-01-15T06:11:40.933Z] [BOT] ⏭️  Skipping duplicate: JID_8f10638f (posted within 7 days)
[2026-01-15T06:11:40.933Z] [BOT] ⏭️  Skipping duplicate: JID_8f975526 (posted within 7 days)
[2026-01-15T06:11:40.933Z] [BOT] ⏭️  Skipping duplicate: JID_860e27d6-cx_1001-job-210680850 (posted within 7 days)
[2026-01-15T06:11:40.934Z] [BOT] ⏭️  Skipping duplicate: JID_fe8f3af9 (posted within 7 days)
[2026-01-15T06:11:40.934Z] [BOT] ⏭️  Skipping duplicate: JID_b6916539 (posted within 7 days)
⏭️  Skipping duplicate: JID_6e3dc935 (posted within 7 days)
[2026-01-15T06:11:40.934Z] [BOT] ⏭️  Skipping duplicate: JID_eae6d47c-application_r_00042538 (posted within 7 days)
[2026-01-15T06:11:41.075Z] [BOT] ✅ Loaded pending queue: 2722 total (2702 pending, 20 enriched, 0 posted)
[2026-01-15T06:11:41.241Z] [BOT] ✅ Saved pending queue: 2722 total (2702 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T06:11:41.242Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T06:11:41.304Z] [BOT] 📂 Loaded 3805 existing routing entries
[2026-01-15T06:11:41.361Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3815
   Timestamp: 2026-01-15T06:11:41.349Z
[2026-01-15T06:11:41.363Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
[2026-01-15T06:11:41.363Z] [BOT] Skipped: 0
[2026-01-15T06:11:41.363Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🦢・los-angeles: 2 posts
[2026-01-15T06:11:41.363Z] [BOT] 4. #🌧️・seattle: 2 posts
     5. #💻・remote-usa: 2 posts
[2026-01-15T06:11:41.363Z] [BOT] [STATS] Channel stats saved
[2026-01-15T06:11:43.379Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3053) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*