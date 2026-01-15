# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T05:32:08.583Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T05:31:23.886Z] ========================================
[2026-01-15T05:31:23.888Z] Discord Bot Execution Log
[2026-01-15T05:31:23.888Z] Environment: GitHub Actions
[2026-01-15T05:31:23.888Z] Node Version: v20.19.6
[2026-01-15T05:31:23.888Z] ========================================
[2026-01-15T05:31:23.889Z] Environment Variables Check:
[2026-01-15T05:31:23.889Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T05:31:23.889Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.889Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T05:31:23.889Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T05:31:23.889Z] 
Multi-Channel Configuration:
[2026-01-15T05:31:23.889Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.889Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.889Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.889Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.889Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.890Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.890Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.890Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.890Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T05:31:23.890Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T05:31:23.890Z] 
Data Files Check:
[2026-01-15T05:31:23.891Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51000 bytes)
[2026-01-15T05:31:23.897Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 852515 bytes)
[2026-01-15T05:31:23.897Z] 
========================================
[2026-01-15T05:31:23.897Z] Starting Enhanced Discord Bot...
[2026-01-15T05:31:23.897Z] ========================================
[2026-01-15T05:31:24.417Z] [BOT] ✅ Loaded V2 database: 1606 jobs
[2026-01-15T05:31:24.923Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T05:31:24.924Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T05:31:24.924Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T05:31:25.034Z] [BOT] ✅ Loaded pending queue: 2721 total (2701 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Multigres Deployment Engineer at supabase
[2026-01-15T05:31:25.037Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T05:31:25.037Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T05:31:25.038Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T05:31:25.038Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T05:31:25.039Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T05:31:25.043Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-15T05:31:25.044Z] [BOT] 📍 [ROUTING] "Multigres Deployment Engineer" @ supabase
[2026-01-15T05:31:25.044Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:31:25.061Z] [BOT ERROR] (node:3180) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T05:31:25.407Z] [BOT] ✅ Created forum post: 🏢 Multigres Deployment Engineer @ supabase in #💻・tech-jobs
[2026-01-15T05:31:25.408Z] [BOT] ✅ Industry: Multigres Deployment Engineer @ supabase
[2026-01-15T05:31:26.909Z] [BOT] 💾 Marked as posted: Multigres Deployment Engineer @ supabase (instance #1)
[2026-01-15T05:31:26.909Z] [BOT] 💾 BEFORE ARCHIVING: 1607 jobs in database
[2026-01-15T05:31:26.911Z] [BOT] ✅ No jobs to archive (all 1607 jobs within 7-day window)
[2026-01-15T05:31:26.926Z] [BOT] 💾 Saved posted_jobs.json: 1607 active jobs
[2026-01-15T05:31:26.926Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:31:26.927Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:31:27.048Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c
[2026-01-15T05:31:28.780Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T05:31:30.282Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c (instance #1)
[2026-01-15T05:31:30.282Z] [BOT] 💾 BEFORE ARCHIVING: 1608 jobs in database
[2026-01-15T05:31:30.283Z] [BOT] ✅ No jobs to archive (all 1608 jobs within 7-day window)
[2026-01-15T05:31:30.292Z] [BOT] 💾 Saved posted_jobs.json: 1608 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:31:30.292Z] [BOT] 📍 [ROUTING] "Graduate Engineer" @ ORG_65eedb45
   Category: TECH (matched: "engineer/engineering")
[2026-01-15T05:31:30.293Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:31:30.740Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ ORG_65eedb45 in #💻・tech-jobs
[2026-01-15T05:31:30.740Z] [BOT] ✅ Industry: Graduate Engineer @ ORG_65eedb45
[2026-01-15T05:31:32.613Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ ORG_65eedb45 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T05:31:34.114Z] [BOT] 💾 Marked as posted: Graduate Engineer @ ORG_65eedb45 (instance #1)
[2026-01-15T05:31:34.114Z] [BOT] 💾 BEFORE ARCHIVING: 1609 jobs in database
[2026-01-15T05:31:34.116Z] [BOT] ✅ No jobs to archive (all 1609 jobs within 7-day window)
[2026-01-15T05:31:34.127Z] [BOT] 💾 Saved posted_jobs.json: 1609 active jobs
[2026-01-15T05:31:34.127Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:31:34.128Z] [BOT] 📍 [ROUTING] "Data Technician" @ ORG_9d38443e of Oklahoma
[2026-01-15T05:31:34.128Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:31:34.275Z] [BOT] ✅ Created forum post: 🏢 Data Technician @ ORG_9d38443e of Oklahoma in #💻・tech-jobs
  ✅ Industry: Data Technician @ ORG_9d38443e of Oklahoma
[2026-01-15T05:31:36.165Z] [BOT] ✅ Created forum post: 🏢 Data Technician @ ORG_9d38443e of Oklahoma in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T05:31:37.666Z] [BOT] 💾 Marked as posted: Data Technician @ ORG_9d38443e of Oklahoma (instance #1)
[2026-01-15T05:31:37.666Z] [BOT] 💾 BEFORE ARCHIVING: 1610 jobs in database
[2026-01-15T05:31:37.668Z] [BOT] ✅ No jobs to archive (all 1610 jobs within 7-day window)
[2026-01-15T05:31:37.678Z] [BOT] 💾 Saved posted_jobs.json: 1610 active jobs
[2026-01-15T05:31:37.679Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:31:37.679Z] [BOT] 📍 [ROUTING] "FinOps Engineer" @ supabase
[2026-01-15T05:31:37.679Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:31:37.963Z] [BOT] ✅ Created forum post: 🏢 FinOps Engineer @ supabase in #💻・tech-jobs
[2026-01-15T05:31:37.963Z] [BOT] ✅ Industry: FinOps Engineer @ supabase
[2026-01-15T05:31:39.465Z] [BOT] 💾 Marked as posted: FinOps Engineer @ supabase (instance #1)
[2026-01-15T05:31:39.466Z] [BOT] 💾 BEFORE ARCHIVING: 1611 jobs in database
[2026-01-15T05:31:39.467Z] [BOT] ✅ No jobs to archive (all 1611 jobs within 7-day window)
[2026-01-15T05:31:39.477Z] [BOT] 💾 Saved posted_jobs.json: 1611 active jobs
[2026-01-15T05:31:39.477Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:31:39.477Z] [BOT] 📍 [ROUTING] "Analyst Advanced Analytics" @ ORG_ae835968 media
[2026-01-15T05:31:39.478Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:31:39.665Z] [BOT] ✅ Created forum post: 🏢 Analyst Advanced Analytics @ ORG_ae835968 media in #💻・tech-jobs
[2026-01-15T05:31:39.665Z] [BOT] ✅ Industry: Analyst Advanced Analytics @ ORG_ae835968 media
[2026-01-15T05:31:41.324Z] [BOT] ✅ Created forum post: 🏢 Analyst Advanced Analytics @ ORG_ae835968 media in #🗽・new-york
[2026-01-15T05:31:41.324Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T05:31:42.825Z] [BOT] 💾 Marked as posted: Analyst Advanced Analytics @ ORG_ae835968 media (instance #1)
[2026-01-15T05:31:42.825Z] [BOT] 💾 BEFORE ARCHIVING: 1612 jobs in database
[2026-01-15T05:31:42.826Z] [BOT] ✅ No jobs to archive (all 1612 jobs within 7-day window)
[2026-01-15T05:31:42.836Z] [BOT] 💾 Saved posted_jobs.json: 1612 active jobs
[2026-01-15T05:31:42.836Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:31:45.837Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-15T05:31:45.837Z] [BOT] 📍 [ROUTING] "Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T05:31:46.144Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-15T05:31:46.145Z] [BOT] ✅ Industry: Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c
[2026-01-15T05:31:47.801Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T05:31:47.802Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T05:31:49.302Z] [BOT] 💾 Marked as posted: Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T05:31:49.303Z] [BOT] 💾 BEFORE ARCHIVING: 1613 jobs in database
[2026-01-15T05:31:49.304Z] [BOT] ✅ No jobs to archive (all 1613 jobs within 7-day window)
[2026-01-15T05:31:49.316Z] [BOT] 💾 Saved posted_jobs.json: 1613 active jobs
[2026-01-15T05:31:49.316Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:31:49.316Z] [BOT] 📍 [ROUTING] "Senior Machine Learning Engineer" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T05:31:49.316Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T05:31:49.467Z] [BOT] ✅ Created forum post: 🏢 Senior Machine Learning Engineer @ spotify in #🤖・ai-jobs
[2026-01-15T05:31:49.468Z] [BOT] ✅ Industry: Senior Machine Learning Engineer @ spotify
[2026-01-15T05:31:51.239Z] [BOT] ✅ Created forum post: 🏢 Senior Machine Learning Engineer @ spotify in #🗽・new-york
[2026-01-15T05:31:51.239Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T05:31:52.740Z] [BOT] 💾 Marked as posted: Senior Machine Learning Engineer @ spotify (instance #1)
[2026-01-15T05:31:52.740Z] [BOT] 💾 BEFORE ARCHIVING: 1614 jobs in database
[2026-01-15T05:31:52.741Z] [BOT] ✅ No jobs to archive (all 1614 jobs within 7-day window)
[2026-01-15T05:31:52.752Z] [BOT] 💾 Saved posted_jobs.json: 1614 active jobs
[2026-01-15T05:31:52.752Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:31:55.753Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T05:31:55.753Z] [BOT] 📍 [ROUTING] "Data Science - Analyst" @ ORG_9d38443e of Chicago
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-15T05:31:55.753Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T05:31:55.964Z] [BOT] ✅ Created forum post: 🏢 Data Science - Analyst @ ORG_9d38443e of Chicago in #📈・JID_fb739488
[2026-01-15T05:31:55.964Z] [BOT] ✅ Industry: Data Science - Analyst @ ORG_9d38443e of Chicago
[2026-01-15T05:31:57.635Z] [BOT] ✅ Created forum post: 🏢 Data Science - Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
[2026-01-15T05:31:57.635Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T05:31:59.136Z] [BOT] 💾 Marked as posted: Data Science - Analyst @ ORG_9d38443e of Chicago (instance #1)
💾 BEFORE ARCHIVING: 1615 jobs in database
[2026-01-15T05:31:59.137Z] [BOT] ✅ No jobs to archive (all 1615 jobs within 7-day window)
[2026-01-15T05:31:59.149Z] [BOT] 💾 Saved posted_jobs.json: 1615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:31:59.149Z] [BOT] 📍 [ROUTING] "PhD Student" @ ORG_6adce842
[2026-01-15T05:31:59.150Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T05:31:59.318Z] [BOT] ✅ Created forum post: 🏢 PhD Student @ ORG_6adce842 in #📈・JID_fb739488
[2026-01-15T05:31:59.318Z] [BOT] ✅ Industry: PhD Student @ ORG_6adce842
[2026-01-15T05:32:01.027Z] [BOT] ✅ Created forum post: 🏢 PhD Student @ ORG_6adce842 in #🌆・chicago
[2026-01-15T05:32:01.027Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T05:32:02.529Z] [BOT] 💾 Marked as posted: PhD Student @ ORG_6adce842 (instance #1)
[2026-01-15T05:32:02.529Z] [BOT] 💾 BEFORE ARCHIVING: 1616 jobs in database
[2026-01-15T05:32:02.530Z] [BOT] ✅ No jobs to archive (all 1616 jobs within 7-day window)
[2026-01-15T05:32:02.541Z] [BOT] 💾 Saved posted_jobs.json: 1616 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:32:05.543Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T05:32:05.543Z] [BOT] ⏭️  Skipping duplicate: JID_a30c7e21 (posted within 7 days)
[2026-01-15T05:32:05.543Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_62c14f0e-detail (posted within 7 days)
[2026-01-15T05:32:05.543Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_540a906f-detail (posted within 7 days)
[2026-01-15T05:32:05.543Z] [BOT] ⏭️  Skipping duplicate: JID_2e32a8fc (posted within 7 days)
[2026-01-15T05:32:05.543Z] [BOT] ⏭️  Skipping duplicate: JID_81c3a1fa-analyst_jr31922-1 (posted within 7 days)
[2026-01-15T05:32:05.544Z] [BOT] ⏭️  Skipping duplicate: JID_1260679d (posted within 7 days)
[2026-01-15T05:32:05.544Z] [BOT] ⏭️  Skipping duplicate: JID_c6bfa644 (posted within 7 days)
[2026-01-15T05:32:05.544Z] [BOT] ⏭️  Skipping duplicate: JID_32a308ed (posted within 7 days)
⏭️  Skipping duplicate: JID_50e12d0e (posted within 7 days)
[2026-01-15T05:32:05.544Z] [BOT] ⏭️  Skipping duplicate: JID_3dd82faa-analytics_r0016043 (posted within 7 days)
[2026-01-15T05:32:05.661Z] [BOT] ✅ Loaded pending queue: 2721 total (2701 pending, 20 enriched, 0 posted)
[2026-01-15T05:32:05.825Z] [BOT] ✅ Saved pending queue: 2721 total (2701 pending, 10 enriched, 10 posted)
[2026-01-15T05:32:05.825Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T05:32:05.882Z] [BOT] 📂 Loaded 3785 existing routing entries
[2026-01-15T05:32:05.945Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T05:32:05.945Z] [BOT] Total entries: 3795
   Timestamp: 2026-01-15T05:32:05.929Z
[2026-01-15T05:32:05.945Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T05:32:05.945Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-15T05:32:05.946Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 8
[2026-01-15T05:32:05.946Z] [BOT] Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🌉・san-francisco: 2 posts
[2026-01-15T05:32:05.946Z] [BOT] 3. #🗽・new-york: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-15T05:32:05.946Z] [BOT] [STATS] Channel stats saved
[2026-01-15T05:32:07.971Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3180) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*