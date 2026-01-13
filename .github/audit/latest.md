# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T23:38:39.728Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T23:37:39.689Z] ========================================
[2026-01-13T23:37:39.691Z] Discord Bot Execution Log
[2026-01-13T23:37:39.691Z] Environment: GitHub Actions
[2026-01-13T23:37:39.691Z] Node Version: v20.19.6
[2026-01-13T23:37:39.691Z] ========================================
[2026-01-13T23:37:39.691Z] Environment Variables Check:
[2026-01-13T23:37:39.691Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T23:37:39.691Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.691Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T23:37:39.691Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T23:37:39.691Z] 
Multi-Channel Configuration:
[2026-01-13T23:37:39.692Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.692Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.692Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.692Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.692Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.692Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.692Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.692Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.692Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T23:37:39.692Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T23:37:39.692Z] 
Data Files Check:
[2026-01-13T23:37:39.693Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152422 bytes)
[2026-01-13T23:37:39.697Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 576570 bytes)
[2026-01-13T23:37:39.698Z] 
========================================
[2026-01-13T23:37:39.698Z] Starting Enhanced Discord Bot...
[2026-01-13T23:37:39.698Z] ========================================
[2026-01-13T23:37:40.214Z] [BOT] ✅ Loaded V2 database: 1079 jobs
[2026-01-13T23:37:40.991Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T23:37:40.992Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T23:37:40.992Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T23:37:41.101Z] [BOT] ✅ Loaded pending queue: 2710 total (2690 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Nuclear Analysis Technician C / Engineering Technicians at Westinghouse Electric Company
[2026-01-13T23:37:41.103Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T23:37:41.103Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T23:37:41.103Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T23:37:41.104Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T23:37:41.104Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T23:37:41.108Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-13T23:37:41.109Z] [BOT] 📍 [ROUTING] "Nuclear Analysis Technician C / Engineering Technicians" @ ORG_41a6741einghouse Electric Company
[2026-01-13T23:37:41.109Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:37:41.126Z] [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T23:37:41.308Z] [BOT] ✅ Created forum post: 🏢 Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
[2026-01-13T23:37:41.308Z] [BOT] ✅ Industry: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company
[2026-01-13T23:37:43.347Z] [BOT] ✅ Created forum post: 🏢 Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company in #💻・remote-usa
[2026-01-13T23:37:43.347Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T23:37:44.848Z] [BOT] 💾 Marked as posted: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-13T23:37:44.848Z] [BOT] 💾 BEFORE ARCHIVING: 1080 jobs in database
[2026-01-13T23:37:44.849Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-13T23:37:44.864Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
[2026-01-13T23:37:44.864Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:37:44.864Z] [BOT] 📍 [ROUTING] "Staff+ Software Engineer, Data Infrastructure" @ anthropic
[2026-01-13T23:37:44.865Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:37:45.135Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Data Infrastructure @ anthropic in #💻・tech-jobs
[2026-01-13T23:37:45.136Z] [BOT] ✅ Industry: Staff+ Software Engineer, Data Infrastructure @ anthropic
[2026-01-13T23:37:46.872Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Data Infrastructure @ anthropic in #🌉・san-francisco
[2026-01-13T23:37:46.872Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T23:37:48.372Z] [BOT] 💾 Marked as posted: Staff+ Software Engineer, Data Infrastructure @ anthropic (instance #1)
[2026-01-13T23:37:48.373Z] [BOT] 💾 BEFORE ARCHIVING: 1081 jobs in database
[2026-01-13T23:37:48.373Z] [BOT] ✅ No jobs to archive (all 1081 jobs within 7-day window)
[2026-01-13T23:37:48.382Z] [BOT] 💾 Saved posted_jobs.json: 1081 active jobs
[2026-01-13T23:37:48.382Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:37:48.382Z] [BOT] 📍 [ROUTING] "Staff+ Software Engineer, Databases" @ anthropic
[2026-01-13T23:37:48.382Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T23:37:48.621Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Databases @ anthropic in #💻・tech-jobs
  ✅ Industry: Staff+ Software Engineer, Databases @ anthropic
[2026-01-13T23:37:50.299Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Databases @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:37:51.800Z] [BOT] 💾 Marked as posted: Staff+ Software Engineer, Databases @ anthropic (instance #1)
[2026-01-13T23:37:51.801Z] [BOT] 💾 BEFORE ARCHIVING: 1082 jobs in database
[2026-01-13T23:37:51.802Z] [BOT] ✅ No jobs to archive (all 1082 jobs within 7-day window)
[2026-01-13T23:37:51.810Z] [BOT] 💾 Saved posted_jobs.json: 1082 active jobs
[2026-01-13T23:37:51.810Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:37:54.810Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T23:37:54.812Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend - Healthcare" @ ORG_3acb0a4a
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T23:37:54.812Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-13T23:37:55.114Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a in #📈・JID_fb739488
[2026-01-13T23:37:55.115Z] [BOT] ✅ Industry: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a
[2026-01-13T23:37:56.851Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-13T23:37:58.352Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a (instance #1)
[2026-01-13T23:37:58.353Z] [BOT] 💾 BEFORE ARCHIVING: 1083 jobs in database
[2026-01-13T23:37:58.354Z] [BOT] ✅ No jobs to archive (all 1083 jobs within 7-day window)
[2026-01-13T23:37:58.362Z] [BOT] 💾 Saved posted_jobs.json: 1083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:38:01.364Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-13T23:38:01.364Z] [BOT] 📍 [ROUTING] "Staff+ Software Engineer, Infrastructure" @ anthropic
[2026-01-13T23:38:01.364Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T23:38:01.588Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Infrastructure @ anthropic in #🤖・ai-jobs
  ✅ Industry: Staff+ Software Engineer, Infrastructure @ anthropic
[2026-01-13T23:38:03.270Z] [BOT] ✅ Created forum post: 🏢 Staff+ Software Engineer, Infrastructure @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:38:04.771Z] [BOT] 💾 Marked as posted: Staff+ Software Engineer, Infrastructure @ anthropic (instance #1)
[2026-01-13T23:38:04.771Z] [BOT] 💾 BEFORE ARCHIVING: 1084 jobs in database
[2026-01-13T23:38:04.772Z] [BOT] ✅ No jobs to archive (all 1084 jobs within 7-day window)
[2026-01-13T23:38:04.780Z] [BOT] 💾 Saved posted_jobs.json: 1084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:38:04.781Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Infrastructure " @ anthropic
[2026-01-13T23:38:04.781Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T23:38:05.008Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Infrastructure  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer, Infrastructure  @ anthropic
[2026-01-13T23:38:08.153Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Infrastructure  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:38:09.653Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Infrastructure  @ anthropic (instance #1)
[2026-01-13T23:38:09.653Z] [BOT] 💾 BEFORE ARCHIVING: 1085 jobs in database
[2026-01-13T23:38:09.654Z] [BOT] ✅ No jobs to archive (all 1085 jobs within 7-day window)
[2026-01-13T23:38:09.663Z] [BOT] 💾 Saved posted_jobs.json: 1085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T23:38:09.663Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Model Evaluations" @ anthropic
[2026-01-13T23:38:09.663Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T23:38:09.663Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, nonTechMatch (using ai)
[2026-01-13T23:38:09.909Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Model Evaluations @ anthropic in #🤖・ai-jobs
  ✅ Industry: Technical Program Manager, Model Evaluations @ anthropic
[2026-01-13T23:38:11.969Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Model Evaluations @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T23:38:13.470Z] [BOT] 💾 Marked as posted: Technical Program Manager, Model Evaluations @ anthropic (instance #1)
[2026-01-13T23:38:13.471Z] [BOT] 💾 BEFORE ARCHIVING: 1086 jobs in database
[2026-01-13T23:38:13.472Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-13T23:38:13.481Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
[2026-01-13T23:38:13.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:38:16.482Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-13T23:38:16.482Z] [BOT] 📍 [ROUTING] "Director, Federal Sales" @ figma
[2026-01-13T23:38:16.483Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T23:38:16.730Z] [BOT] ✅ Created forum post: 🏢 Director, Federal Sales @ figma in #💲・sales-jobs
[2026-01-13T23:38:16.730Z] [BOT] ✅ Industry: Director, Federal Sales @ figma
[2026-01-13T23:38:18.426Z] [BOT] ✅ Created forum post: 🏢 Director, Federal Sales @ figma in #🌉・san-francisco
[2026-01-13T23:38:18.426Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T23:38:19.927Z] [BOT] 💾 Marked as posted: Director, Federal Sales @ figma (instance #1)
[2026-01-13T23:38:19.928Z] [BOT] 💾 BEFORE ARCHIVING: 1087 jobs in database
[2026-01-13T23:38:19.929Z] [BOT] ✅ No jobs to archive (all 1087 jobs within 7-day window)
[2026-01-13T23:38:19.938Z] [BOT] 💾 Saved posted_jobs.json: 1087 active jobs
[2026-01-13T23:38:19.938Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:38:22.940Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-13T23:38:22.940Z] [BOT] 📍 [ROUTING] "Senior Director, Internal Audit" @ discord
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T23:38:23.173Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Internal Audit @ discord in #💰・finance-jobs
  ✅ Industry: Senior Director, Internal Audit @ discord
[2026-01-13T23:38:24.905Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Internal Audit @ discord in #🌉・san-francisco
[2026-01-13T23:38:24.905Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T23:38:26.406Z] [BOT] 💾 Marked as posted: Senior Director, Internal Audit @ discord (instance #1)
[2026-01-13T23:38:26.406Z] [BOT] 💾 BEFORE ARCHIVING: 1088 jobs in database
[2026-01-13T23:38:26.407Z] [BOT] ✅ No jobs to archive (all 1088 jobs within 7-day window)
[2026-01-13T23:38:26.424Z] [BOT] 💾 Saved posted_jobs.json: 1088 active jobs
[2026-01-13T23:38:26.424Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:38:29.426Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-13T23:38:29.426Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Safeguards" @ anthropic
[2026-01-13T23:38:29.426Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-13T23:38:29.983Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Safeguards @ anthropic in #📊・JID_9910249a
[2026-01-13T23:38:29.983Z] [BOT] ✅ Industry: Technical Program Manager, Safeguards @ anthropic
[2026-01-13T23:38:31.664Z] [BOT] ✅ Created forum post: 🏢 Technical Program Manager, Safeguards @ anthropic in #🌉・san-francisco
[2026-01-13T23:38:31.664Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T23:38:33.166Z] [BOT] 💾 Marked as posted: Technical Program Manager, Safeguards @ anthropic (instance #1)
[2026-01-13T23:38:33.166Z] [BOT] 💾 BEFORE ARCHIVING: 1089 jobs in database
[2026-01-13T23:38:33.167Z] [BOT] ✅ No jobs to archive (all 1089 jobs within 7-day window)
[2026-01-13T23:38:33.176Z] [BOT] 💾 Saved posted_jobs.json: 1089 active jobs
[2026-01-13T23:38:33.176Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T23:38:36.177Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T23:38:36.178Z] [BOT] ⏭️  Skipping duplicate: JID_b003e995 (posted within 7 days)
[2026-01-13T23:38:36.178Z] [BOT] ⏭️  Skipping duplicate: JID_35ed794f (posted within 7 days)
[2026-01-13T23:38:36.178Z] [BOT] ⏭️  Skipping duplicate: JID_80718343 (posted within 7 days)
[2026-01-13T23:38:36.178Z] [BOT] ⏭️  Skipping duplicate: JID_09ee84c1 (posted within 7 days)
[2026-01-13T23:38:36.178Z] [BOT] ⏭️  Skipping duplicate: JID_e207b359 (posted within 7 days)
⏭️  Skipping duplicate: JID_33a6531d (posted within 7 days)
[2026-01-13T23:38:36.178Z] [BOT] ⏭️  Skipping duplicate: JID_a973aebd (posted within 7 days)
[2026-01-13T23:38:36.179Z] [BOT] ⏭️  Skipping duplicate: JID_124ec8bf (posted within 7 days)
[2026-01-13T23:38:36.179Z] [BOT] ⏭️  Skipping duplicate: JID_02ba5dd4 (posted within 7 days)
[2026-01-13T23:38:36.179Z] [BOT] ⏭️  Skipping duplicate: JID_4a38c3e5 (posted within 7 days)
[2026-01-13T23:38:36.302Z] [BOT] ✅ Loaded pending queue: 2710 total (2690 pending, 20 enriched, 0 posted)
[2026-01-13T23:38:36.471Z] [BOT] ✅ Saved pending queue: 2710 total (2690 pending, 10 enriched, 10 posted)
[2026-01-13T23:38:36.471Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T23:38:36.525Z] [BOT] 📂 Loaded 3225 existing routing entries
[2026-01-13T23:38:36.584Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3235
[2026-01-13T23:38:36.584Z] [BOT] Timestamp: 2026-01-13T23:38:36.571Z
[2026-01-13T23:38:36.585Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
[2026-01-13T23:38:36.585Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-13T23:38:36.585Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #💻・tech-jobs: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #💻・remote-usa: 1 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-13T23:38:36.586Z] [BOT] [STATS] Channel stats saved
[2026-01-13T23:38:38.610Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2395) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*