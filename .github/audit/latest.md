# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T00:12:08.962Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 11
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T00:11:27.913Z] ========================================
[2026-01-08T00:11:27.915Z] Discord Bot Execution Log
[2026-01-08T00:11:27.915Z] Environment: GitHub Actions
[2026-01-08T00:11:27.915Z] Node Version: v20.19.6
[2026-01-08T00:11:27.915Z] ========================================
[2026-01-08T00:11:27.915Z] Environment Variables Check:
[2026-01-08T00:11:27.915Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T00:11:27.916Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.916Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T00:11:27.916Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T00:11:27.916Z] 
Multi-Channel Configuration:
[2026-01-08T00:11:27.916Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.916Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.916Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.916Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.916Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.916Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.916Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.916Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.917Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T00:11:27.917Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T00:11:27.917Z] 
Data Files Check:
[2026-01-08T00:11:27.917Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70413 bytes)
[2026-01-08T00:11:27.923Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 736958 bytes)
[2026-01-08T00:11:27.923Z] 
========================================
[2026-01-08T00:11:27.923Z] Starting Enhanced Discord Bot...
[2026-01-08T00:11:27.923Z] ========================================
[2026-01-08T00:11:28.454Z] [BOT] ✅ Loaded V2 database: 1436 jobs
[2026-01-08T00:11:29.480Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T00:11:29.481Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T00:11:29.481Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T00:11:29.488Z] [BOT] ✅ Loaded pending queue: 120 total (100 pending, 20 enriched, 0 posted)
[2026-01-08T00:11:29.488Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-08T00:11:29.489Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-08T00:11:29.489Z] [BOT] ⏭️ Skipping already posted: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-08T00:11:29.490Z] [BOT] ⏭️  Skipping duplicate: JID_7d5ce5e4 (posted within 7 days)
[2026-01-08T00:11:29.490Z] [BOT] ⏭️ Skipping already posted: Senior Software Engineer in Test Prisma Access - AI Automation Engineer at Palo Alto Networks
[2026-01-08T00:11:29.491Z] [BOT] ⏭️  Skipping duplicate: JID_2179aa27 (posted within 7 days)
[2026-01-08T00:11:29.491Z] [BOT] ⏭️ Skipping already posted: Field Application Engineer – New College Graduate - Ncg at Sandisk
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T00:11:29.491Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T00:11:29.491Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-08T00:11:29.492Z] [BOT] ⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T00:11:29.492Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-08T00:11:29.492Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
📬 Found 9 new jobs (11 already posted)...
[2026-01-08T00:11:29.492Z] [BOT] 📋 After blacklist filter: 9 jobs (0 blacklisted)
[2026-01-08T00:11:29.492Z] [BOT] 📋 After data quality filter: 9 jobs (0 invalid)
[2026-01-08T00:11:29.493Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-08T00:11:29.493Z] [BOT] 📤 Posting 9 jobs...
[2026-01-08T00:11:29.493Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T00:11:29.496Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-08T00:11:29.497Z] [BOT] 📍 [ROUTING] "Analyst" @ ORG_47633304
[2026-01-08T00:11:29.497Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T00:11:29.501Z] [BOT ERROR] (node:2875) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T00:11:29.855Z] [BOT] ✅ Created forum post: 🏢 Analyst @ ORG_47633304 in #🤖・ai-jobs
  ✅ Industry: Analyst @ ORG_47633304
[2026-01-08T00:11:31.358Z] [BOT] 💾 Marked as posted: Analyst @ ORG_47633304 (instance #1)
[2026-01-08T00:11:31.358Z] [BOT] 💾 BEFORE ARCHIVING: 1437 jobs in database
[2026-01-08T00:11:31.359Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T00:11:31.364Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-08T00:11:31.364Z] [BOT] ✅ Archiving complete: 2 archived, 1435 active
[2026-01-08T00:11:31.376Z] [BOT] 💾 Saved posted_jobs.json: 1435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:11:31.377Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_bdc26476
[2026-01-08T00:11:31.377Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T00:11:31.560Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_bdc26476 in #🤖・ai-jobs
  ✅ Industry: GIS Analyst 1 @ ORG_bdc26476
[2026-01-08T00:11:33.245Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_bdc26476 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T00:11:34.747Z] [BOT] 💾 Marked as posted: GIS Analyst 1 @ ORG_bdc26476 (instance #1)
[2026-01-08T00:11:34.747Z] [BOT] 💾 BEFORE ARCHIVING: 1436 jobs in database
[2026-01-08T00:11:34.748Z] [BOT] ✅ No jobs to archive (all 1436 jobs within 7-day window)
[2026-01-08T00:11:34.757Z] [BOT] 💾 Saved posted_jobs.json: 1436 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:11:34.758Z] [BOT] 📍 [ROUTING] "Early Career - Gen AI - Data Science Analyst" @ ORG_c5da7c80
[2026-01-08T00:11:34.758Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-08T00:11:34.941Z] [BOT] ✅ Created forum post: 🏢 Early Career - Gen AI - Data Science Analyst @ ORG_c5da7c80 in #🤖・ai-jobs
[2026-01-08T00:11:34.941Z] [BOT] ✅ Industry: Early Career - Gen AI - Data Science Analyst @ ORG_c5da7c80
[2026-01-08T00:11:36.673Z] [BOT] ✅ Created forum post: 🏢 Early Career - Gen AI - Data Science Analyst @ ORG_c5da7c80 in #💻・remote-usa
[2026-01-08T00:11:36.673Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-08T00:11:38.175Z] [BOT] 💾 Marked as posted: Early Career - Gen AI - Data Science Analyst @ ORG_c5da7c80 (instance #1)
[2026-01-08T00:11:38.175Z] [BOT] 💾 BEFORE ARCHIVING: 1437 jobs in database
[2026-01-08T00:11:38.176Z] [BOT] ✅ No jobs to archive (all 1437 jobs within 7-day window)
[2026-01-08T00:11:38.186Z] [BOT] 💾 Saved posted_jobs.json: 1437 active jobs
[2026-01-08T00:11:38.186Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T00:11:41.187Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-08T00:11:41.188Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_297c6f0f
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:11:41.681Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_297c6f0f in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_297c6f0f
[2026-01-08T00:11:43.571Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_297c6f0f in #🌉・san-francisco
[2026-01-08T00:11:43.572Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-08T00:11:45.073Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_297c6f0f (instance #1)
[2026-01-08T00:11:45.073Z] [BOT] 💾 BEFORE ARCHIVING: 1438 jobs in database
[2026-01-08T00:11:45.074Z] [BOT] ✅ No jobs to archive (all 1438 jobs within 7-day window)
[2026-01-08T00:11:45.085Z] [BOT] 💾 Saved posted_jobs.json: 1438 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:11:45.086Z] [BOT] 📍 [ROUTING] "Mydata Reporting Analytics Solutions - Associate" @ ORG_569ec613 Morgan Chase
[2026-01-08T00:11:45.086Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:11:45.535Z] [BOT] ✅ Created forum post: 🏢 Mydata Reporting Analytics Solutions - Associate @ ORG_569ec613 Morgan Chase in #💻・tech-jobs
  ✅ Industry: Mydata Reporting Analytics Solutions - Associate @ ORG_569ec613 Morgan Chase
[2026-01-08T00:11:47.222Z] [BOT] ✅ Created forum post: 🏢 Mydata Reporting Analytics Solutions - Associate @ ORG_569ec613 Morgan Chase in #💻・remote-usa
[2026-01-08T00:11:47.222Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-08T00:11:48.723Z] [BOT] 💾 Marked as posted: Mydata Reporting Analytics Solutions - Associate @ ORG_569ec613 Morgan Chase (instance #1)
[2026-01-08T00:11:48.724Z] [BOT] 💾 BEFORE ARCHIVING: 1439 jobs in database
[2026-01-08T00:11:48.725Z] [BOT] ✅ No jobs to archive (all 1439 jobs within 7-day window)
[2026-01-08T00:11:48.735Z] [BOT] 💾 Saved posted_jobs.json: 1439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:11:48.735Z] [BOT] 📍 [ROUTING] "Intelligent Automation Engineer 1" @ ORG_d3baafac
   Category: TECH (matched: "engineer/engineering")
[2026-01-08T00:11:48.735Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:11:48.998Z] [BOT] ✅ Created forum post: 🏢 Intelligent Automation Engineer 1 @ ORG_d3baafac in #💻・tech-jobs
  ✅ Industry: Intelligent Automation Engineer 1 @ ORG_d3baafac
[2026-01-08T00:11:50.715Z] [BOT] ✅ Created forum post: 🏢 Intelligent Automation Engineer 1 @ ORG_d3baafac in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T00:11:52.217Z] [BOT] 💾 Marked as posted: Intelligent Automation Engineer 1 @ ORG_d3baafac (instance #1)
[2026-01-08T00:11:52.217Z] [BOT] 💾 BEFORE ARCHIVING: 1440 jobs in database
[2026-01-08T00:11:52.218Z] [BOT] ✅ No jobs to archive (all 1440 jobs within 7-day window)
[2026-01-08T00:11:52.227Z] [BOT] 💾 Saved posted_jobs.json: 1440 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:11:52.228Z] [BOT] 📍 [ROUTING] "Software Engineer Support Analyst Graduate" @ ORG_a5257743 Packard Enterprise
[2026-01-08T00:11:52.228Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:11:52.562Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise in #💻・tech-jobs
[2026-01-08T00:11:52.562Z] [BOT] ✅ Industry: Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise
[2026-01-08T00:11:54.428Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-08T00:11:55.929Z] [BOT] 💾 Marked as posted: Software Engineer Support Analyst Graduate @ ORG_a5257743 Packard Enterprise (instance #1)
[2026-01-08T00:11:55.930Z] [BOT] 💾 BEFORE ARCHIVING: 1441 jobs in database
[2026-01-08T00:11:55.931Z] [BOT] ✅ No jobs to archive (all 1441 jobs within 7-day window)
[2026-01-08T00:11:55.940Z] [BOT] 💾 Saved posted_jobs.json: 1441 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:11:55.941Z] [BOT] 📍 [ROUTING] "Full Stack Developer" @ ORG_39417f32 Allen
[2026-01-08T00:11:55.941Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:11:56.224Z] [BOT] ✅ Created forum post: 🏢 Full Stack Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-08T00:11:56.225Z] [BOT] ✅ Industry: Full Stack Developer @ ORG_39417f32 Allen
[2026-01-08T00:11:57.927Z] [BOT] ✅ Created forum post: 🏢 Full Stack Developer @ ORG_39417f32 Allen in #💻・remote-usa
[2026-01-08T00:11:57.928Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-08T00:11:59.428Z] [BOT] 💾 Marked as posted: Full Stack Developer @ ORG_39417f32 Allen (instance #1)
[2026-01-08T00:11:59.428Z] [BOT] 💾 BEFORE ARCHIVING: 1442 jobs in database
[2026-01-08T00:11:59.429Z] [BOT] ✅ No jobs to archive (all 1442 jobs within 7-day window)
[2026-01-08T00:11:59.439Z] [BOT] 💾 Saved posted_jobs.json: 1442 active jobs
[2026-01-08T00:11:59.439Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T00:11:59.439Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_c7bac469
   Category: TECH (matched: "software")
[2026-01-08T00:11:59.439Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:11:59.713Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 1 @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_c7bac469
[2026-01-08T00:12:01.482Z] [BOT] ✅ Created forum post: 🟦 Software Engineer 1 @ ORG_c7bac469 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T00:12:02.983Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_c7bac469 (instance #1)
[2026-01-08T00:12:02.984Z] [BOT] 💾 BEFORE ARCHIVING: 1443 jobs in database
[2026-01-08T00:12:02.985Z] [BOT] ✅ No jobs to archive (all 1443 jobs within 7-day window)
[2026-01-08T00:12:02.996Z] [BOT] 💾 Saved posted_jobs.json: 1443 active jobs
[2026-01-08T00:12:02.996Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T00:12:05.997Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-08T00:12:05.997Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8484 (posted within 7 days)
[2026-01-08T00:12:05.997Z] [BOT] ⏭️  Skipping duplicate: JID_ca3703ca (posted within 7 days)
[2026-01-08T00:12:05.998Z] [BOT] ⏭️  Skipping duplicate: JID_e8ab3cec-i_jr-85444 (posted within 7 days)
⏭️  Skipping duplicate: JID_15ed4184-_jr2505608-1 (posted within 7 days)
[2026-01-08T00:12:05.998Z] [BOT] ⏭️  Skipping duplicate: JID_860e27d6-cx_1001-job-210695999 (posted within 7 days)
[2026-01-08T00:12:05.998Z] [BOT] ⏭️  Skipping duplicate: JID_df77182b-cx_1-job-2025746 (posted within 7 days)
[2026-01-08T00:12:05.998Z] [BOT] ⏭️  Skipping duplicate: JID_b11f9b73-graduate_1198373-1 (posted within 7 days)
[2026-01-08T00:12:05.998Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f34973b5-developer_r0231822 (posted within 7 days)
[2026-01-08T00:12:05.998Z] [BOT] ⏭️  Skipping duplicate: JID_608a2563 (posted within 7 days)
[2026-01-08T00:12:06.004Z] [BOT] ✅ Loaded pending queue: 120 total (100 pending, 20 enriched, 0 posted)
[2026-01-08T00:12:06.013Z] [BOT] ✅ Saved pending queue: 120 total (100 pending, 11 enriched, 9 posted)
[2026-01-08T00:12:06.013Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T00:12:06.071Z] [BOT] 📂 Loaded 2375 existing routing entries
[2026-01-08T00:12:06.132Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2026-01-08T00:12:06.132Z] [BOT] Total entries: 2384
   Timestamp: 2026-01-08T00:12:06.121Z
[2026-01-08T00:12:06.133Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 28
[2026-01-08T00:12:06.133Z] [BOT] Successful: 17
   Failed: 0
   Skipped: 11
[2026-01-08T00:12:06.133Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 5
   Top channels:
[2026-01-08T00:12:06.133Z] [BOT] 1. #💻・remote-usa: 6 posts
[2026-01-08T00:12:06.133Z] [BOT] 2. #💻・tech-jobs: 6 posts
[2026-01-08T00:12:06.133Z] [BOT] 3. #🤖・ai-jobs: 3 posts
     4. #🌉・san-francisco: 1 posts
     5. #☀️・sunnyvale: 1 posts
[2026-01-08T00:12:06.134Z] [BOT] [STATS] Channel stats saved
[2026-01-08T00:12:08.146Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2875) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*