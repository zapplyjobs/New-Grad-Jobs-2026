# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T05:16:50.997Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T05:16:04.902Z] ========================================
[2026-01-13T05:16:04.904Z] Discord Bot Execution Log
[2026-01-13T05:16:04.904Z] Environment: GitHub Actions
[2026-01-13T05:16:04.904Z] Node Version: v20.19.6
[2026-01-13T05:16:04.904Z] ========================================
[2026-01-13T05:16:04.904Z] Environment Variables Check:
[2026-01-13T05:16:04.904Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T05:16:04.904Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.904Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T05:16:04.905Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T05:16:04.905Z] 
Multi-Channel Configuration:
[2026-01-13T05:16:04.905Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.905Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.905Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.905Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.905Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.905Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.905Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.905Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.905Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T05:16:04.905Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T05:16:04.905Z] 
Data Files Check:
[2026-01-13T05:16:04.906Z] .github/data/new_jobs.json: ✅ Exists (10 items, 118989 bytes)
[2026-01-13T05:16:04.909Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 387798 bytes)
[2026-01-13T05:16:04.909Z] 
========================================
[2026-01-13T05:16:04.909Z] Starting Enhanced Discord Bot...
[2026-01-13T05:16:04.909Z] ========================================
[2026-01-13T05:16:05.437Z] [BOT] ✅ Loaded V2 database: 738 jobs
[2026-01-13T05:16:05.925Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T05:16:05.925Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T05:16:05.926Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T05:16:06.034Z] [BOT] ✅ Loaded pending queue: 2702 total (2682 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Software Engineer, Connected Workflows at samsara
[2026-01-13T05:16:06.036Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T05:16:06.036Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T05:16:06.036Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T05:16:06.037Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-13T05:16:06.037Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T05:16:06.043Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-13T05:16:06.043Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Connected Workflows" @ samsara
[2026-01-13T05:16:06.043Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:16:06.047Z] [BOT ERROR] (node:2672) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T05:16:06.244Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Connected Workflows @ samsara in #💻・tech-jobs
[2026-01-13T05:16:06.244Z] [BOT] ✅ Industry: Senior Software Engineer, Connected Workflows @ samsara
[2026-01-13T05:16:07.931Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer, Connected Workflows @ samsara in #🌉・san-francisco
[2026-01-13T05:16:07.931Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T05:16:09.432Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Connected Workflows @ samsara (instance #1)
[2026-01-13T05:16:09.433Z] [BOT] 💾 BEFORE ARCHIVING: 739 jobs in database
[2026-01-13T05:16:09.433Z] [BOT] ✅ No jobs to archive (all 739 jobs within 7-day window)
[2026-01-13T05:16:09.442Z] [BOT] 💾 Saved posted_jobs.json: 739 active jobs
[2026-01-13T05:16:09.442Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:09.443Z] [BOT] 📍 [ROUTING] "Senior Staff Hardware Systems Engineer" @ samsara
[2026-01-13T05:16:09.443Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:16:09.594Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Hardware Systems Engineer @ samsara in #💻・tech-jobs
[2026-01-13T05:16:09.594Z] [BOT] ✅ Industry: Senior Staff Hardware Systems Engineer @ samsara
[2026-01-13T05:16:11.274Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Hardware Systems Engineer @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T05:16:12.776Z] [BOT] 💾 Marked as posted: Senior Staff Hardware Systems Engineer @ samsara (instance #1)
[2026-01-13T05:16:12.776Z] [BOT] 💾 BEFORE ARCHIVING: 740 jobs in database
[2026-01-13T05:16:12.777Z] [BOT] ✅ No jobs to archive (all 740 jobs within 7-day window)
[2026-01-13T05:16:12.782Z] [BOT] 💾 Saved posted_jobs.json: 740 active jobs
[2026-01-13T05:16:12.782Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:12.782Z] [BOT] 📍 [ROUTING] "Software Engineer II - Mobile Platform" @ samsara
   Category: TECH (matched: "software")
[2026-01-13T05:16:12.782Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:16:12.972Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II - Mobile Platform @ samsara in #💻・tech-jobs
  ✅ Industry: Software Engineer II - Mobile Platform @ samsara
[2026-01-13T05:16:14.662Z] [BOT] ✅ Created forum post: 🏢 Software Engineer II - Mobile Platform @ samsara in #🌉・san-francisco
[2026-01-13T05:16:14.662Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T05:16:16.163Z] [BOT] 💾 Marked as posted: Software Engineer II - Mobile Platform @ samsara (instance #1)
[2026-01-13T05:16:16.163Z] [BOT] 💾 BEFORE ARCHIVING: 741 jobs in database
[2026-01-13T05:16:16.164Z] [BOT] ✅ No jobs to archive (all 741 jobs within 7-day window)
[2026-01-13T05:16:16.171Z] [BOT] 💾 Saved posted_jobs.json: 741 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:16.172Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_4288ade7 Data
[2026-01-13T05:16:16.172Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:16:16.326Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_4288ade7 Data in #💻・tech-jobs
[2026-01-13T05:16:16.326Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_4288ade7 Data
[2026-01-13T05:16:18.159Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_4288ade7 Data in #💻・remote-usa
[2026-01-13T05:16:18.160Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T05:16:19.661Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_4288ade7 Data (instance #1)
[2026-01-13T05:16:19.661Z] [BOT] 💾 BEFORE ARCHIVING: 742 jobs in database
[2026-01-13T05:16:19.662Z] [BOT] ✅ No jobs to archive (all 742 jobs within 7-day window)
[2026-01-13T05:16:19.667Z] [BOT] 💾 Saved posted_jobs.json: 742 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:19.667Z] [BOT] 📍 [ROUTING] "Software Engineer - Distributed Systems - Platform Software" @ ORG_8f1bec75
[2026-01-13T05:16:19.667Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:16:20.306Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 in #💻・tech-jobs
[2026-01-13T05:16:20.306Z] [BOT] ✅ Industry: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75
[2026-01-13T05:16:21.928Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 in #🌉・san-francisco
[2026-01-13T05:16:21.928Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T05:16:23.428Z] [BOT] 💾 Marked as posted: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 (instance #1)
[2026-01-13T05:16:23.429Z] [BOT] 💾 BEFORE ARCHIVING: 743 jobs in database
[2026-01-13T05:16:23.429Z] [BOT] ✅ No jobs to archive (all 743 jobs within 7-day window)
[2026-01-13T05:16:23.436Z] [BOT] 💾 Saved posted_jobs.json: 743 active jobs
[2026-01-13T05:16:23.436Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:23.436Z] [BOT] 📍 [ROUTING] "Software Engineer - Starlink Ground Network" @ ORG_afd623b1
[2026-01-13T05:16:23.436Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:16:23.648Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starlink Ground Network @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Starlink Ground Network @ ORG_afd623b1
[2026-01-13T05:16:25.327Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starlink Ground Network @ ORG_afd623b1 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2026-01-13T05:16:26.829Z] [BOT] 💾 Marked as posted: Software Engineer - Starlink Ground Network @ ORG_afd623b1 (instance #1)
[2026-01-13T05:16:26.829Z] [BOT] 💾 BEFORE ARCHIVING: 744 jobs in database
[2026-01-13T05:16:26.830Z] [BOT] ✅ No jobs to archive (all 744 jobs within 7-day window)
[2026-01-13T05:16:26.836Z] [BOT] 💾 Saved posted_jobs.json: 744 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:26.836Z] [BOT] 📍 [ROUTING] "Environmental Health & Safety Data Management Specialist" @ ORG_f5f75c9b U
[2026-01-13T05:16:26.836Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T05:16:27.067Z] [BOT] ✅ Created forum post: 🏢 Environmental Health & Safety Data Management Specialist @ ORG_f5f75c9b U in #💻・tech-jobs
  ✅ Industry: Environmental Health & Safety Data Management Specialist @ ORG_f5f75c9b U
[2026-01-13T05:16:28.824Z] [BOT] ✅ Created forum post: 🏢 Environmental Health & Safety Data Management Specialist @ ORG_f5f75c9b U in #💻・remote-usa
[2026-01-13T05:16:28.824Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T05:16:30.326Z] [BOT] 💾 Marked as posted: Environmental Health & Safety Data Management Specialist @ ORG_f5f75c9b U (instance #1)
[2026-01-13T05:16:30.326Z] [BOT] 💾 BEFORE ARCHIVING: 745 jobs in database
[2026-01-13T05:16:30.326Z] [BOT] ✅ No jobs to archive (all 745 jobs within 7-day window)
[2026-01-13T05:16:30.333Z] [BOT] 💾 Saved posted_jobs.json: 745 active jobs
[2026-01-13T05:16:30.333Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:33.333Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2026-01-13T05:16:33.334Z] [BOT] 📍 [ROUTING] "Senior Systems EPM" @ samsara
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-13T05:16:33.553Z] [BOT] ✅ Created forum post: 🏢 Senior Systems EPM @ samsara in #📁・JID_e938df7b
  ✅ Industry: Senior Systems EPM @ samsara
[2026-01-13T05:16:35.287Z] [BOT] ✅ Created forum post: 🏢 Senior Systems EPM @ samsara in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T05:16:36.787Z] [BOT] 💾 Marked as posted: Senior Systems EPM @ samsara (instance #1)
[2026-01-13T05:16:36.787Z] [BOT] 💾 BEFORE ARCHIVING: 746 jobs in database
[2026-01-13T05:16:36.788Z] [BOT] ✅ No jobs to archive (all 746 jobs within 7-day window)
[2026-01-13T05:16:36.794Z] [BOT] 💾 Saved posted_jobs.json: 746 active jobs
[2026-01-13T05:16:36.794Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:36.794Z] [BOT] 📍 [ROUTING] "University Recruiter" @ samsara
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-13T05:16:36.978Z] [BOT] ✅ Created forum post: 🏢 University Recruiter @ samsara in #📁・JID_e938df7b
  ✅ Industry: University Recruiter @ samsara
[2026-01-13T05:16:38.478Z] [BOT] 💾 Marked as posted: University Recruiter @ samsara (instance #1)
[2026-01-13T05:16:38.479Z] [BOT] 💾 BEFORE ARCHIVING: 747 jobs in database
[2026-01-13T05:16:38.479Z] [BOT] ✅ No jobs to archive (all 747 jobs within 7-day window)
[2026-01-13T05:16:38.486Z] [BOT] 💾 Saved posted_jobs.json: 747 active jobs
[2026-01-13T05:16:38.486Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:41.487Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-13T05:16:41.487Z] [BOT] 📍 [ROUTING] "Solutions Integration Engineer III" @ samsara
   Category: AI (matched: "AI/ML")
[2026-01-13T05:16:41.487Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T05:16:41.691Z] [BOT] ✅ Created forum post: 🏢 Solutions Integration Engineer III @ samsara in #🤖・ai-jobs
  ✅ Industry: Solutions Integration Engineer III @ samsara
[2026-01-13T05:16:43.485Z] [BOT] ✅ Created forum post: 🏢 Solutions Integration Engineer III @ samsara in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-13T05:16:44.985Z] [BOT] 💾 Marked as posted: Solutions Integration Engineer III @ samsara (instance #1)
[2026-01-13T05:16:44.985Z] [BOT] 💾 BEFORE ARCHIVING: 748 jobs in database
[2026-01-13T05:16:44.986Z] [BOT] ✅ No jobs to archive (all 748 jobs within 7-day window)
[2026-01-13T05:16:44.992Z] [BOT] 💾 Saved posted_jobs.json: 748 active jobs
[2026-01-13T05:16:44.992Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T05:16:47.992Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T05:16:47.992Z] [BOT] ⏭️  Skipping duplicate: JID_30b16819 (posted within 7 days)
[2026-01-13T05:16:47.992Z] [BOT] ⏭️  Skipping duplicate: JID_1fcd150f (posted within 7 days)
[2026-01-13T05:16:47.992Z] [BOT] ⏭️  Skipping duplicate: JID_9cf2a884 (posted within 7 days)
[2026-01-13T05:16:47.993Z] [BOT] ⏭️  Skipping duplicate: JID_f676ed39 (posted within 7 days)
[2026-01-13T05:16:47.993Z] [BOT] ⏭️  Skipping duplicate: JID_a5f1480c (posted within 7 days)
[2026-01-13T05:16:47.993Z] [BOT] ⏭️  Skipping duplicate: JID_6c22f675 (posted within 7 days)
[2026-01-13T05:16:47.993Z] [BOT] ⏭️  Skipping duplicate: JID_44dfe28d (posted within 7 days)
[2026-01-13T05:16:47.993Z] [BOT] ⏭️  Skipping duplicate: JID_ade9d0d9 (posted within 7 days)
[2026-01-13T05:16:47.993Z] [BOT] ⏭️  Skipping duplicate: JID_55a87b9c (posted within 7 days)
[2026-01-13T05:16:47.993Z] [BOT] ⏭️  Skipping duplicate: JID_f16b2bee-_jr91800 (posted within 7 days)
[2026-01-13T05:16:48.107Z] [BOT] ✅ Loaded pending queue: 2702 total (2682 pending, 20 enriched, 0 posted)
[2026-01-13T05:16:48.271Z] [BOT] ✅ Saved pending queue: 2702 total (2682 pending, 10 enriched, 10 posted)
[2026-01-13T05:16:48.271Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T05:16:48.321Z] [BOT] 📂 Loaded 2885 existing routing entries
[2026-01-13T05:16:48.377Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T05:16:48.377Z] [BOT] Total entries: 2895
   Timestamp: 2026-01-13T05:16:48.365Z
[2026-01-13T05:16:48.378Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 19
[2026-01-13T05:16:48.378Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
[2026-01-13T05:16:48.378Z] [BOT] Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🌉・san-francisco: 5 posts
     3. #💻・remote-usa: 2 posts
     4. #📁・JID_e938df7b: 2 posts
     5. #🖥️・redmond: 1 posts
[2026-01-13T05:16:48.378Z] [BOT] [STATS] Channel stats saved
[2026-01-13T05:16:50.403Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2672) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*