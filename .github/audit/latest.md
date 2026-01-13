# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T21:42:21.409Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T21:41:27.828Z] ========================================
[2026-01-13T21:41:27.830Z] Discord Bot Execution Log
[2026-01-13T21:41:27.830Z] Environment: GitHub Actions
[2026-01-13T21:41:27.830Z] Node Version: v20.19.6
[2026-01-13T21:41:27.830Z] ========================================
[2026-01-13T21:41:27.830Z] Environment Variables Check:
[2026-01-13T21:41:27.830Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T21:41:27.830Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.831Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T21:41:27.831Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T21:41:27.831Z] 
Multi-Channel Configuration:
[2026-01-13T21:41:27.831Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.831Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.831Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.831Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.831Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.831Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.831Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.831Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.831Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T21:41:27.832Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T21:41:27.832Z] 
Data Files Check:
[2026-01-13T21:41:27.832Z] .github/data/new_jobs.json: ✅ Exists (10 items, 61869 bytes)
[2026-01-13T21:41:27.836Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 526640 bytes)
[2026-01-13T21:41:27.836Z] 
========================================
[2026-01-13T21:41:27.836Z] Starting Enhanced Discord Bot...
[2026-01-13T21:41:27.836Z] ========================================
[2026-01-13T21:41:28.362Z] [BOT] ✅ Loaded V2 database: 995 jobs
[2026-01-13T21:41:29.292Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T21:41:29.292Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T21:41:29.293Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T21:41:29.397Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sales & Pricing Analyst at Nidec
[2026-01-13T21:41:29.399Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T21:41:29.399Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T21:41:29.400Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T21:41:29.400Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-13T21:41:29.401Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-13T21:41:29.401Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T21:41:29.406Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T21:41:29.406Z] [BOT] 📍 [ROUTING] "Sales & Pricing Analyst" @ ORG_3aec9bf8
[2026-01-13T21:41:29.406Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-13T21:41:29.411Z] [BOT ERROR] (node:2976) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T21:41:29.616Z] [BOT] ✅ Created forum post: 🏢 Sales & Pricing Analyst @ ORG_3aec9bf8 in #📈・JID_fb739488
[2026-01-13T21:41:29.616Z] [BOT] ✅ Industry: Sales & Pricing Analyst @ ORG_3aec9bf8
[2026-01-13T21:41:31.602Z] [BOT] ✅ Created forum post: 🏢 Sales & Pricing Analyst @ ORG_3aec9bf8 in #💻・remote-usa
[2026-01-13T21:41:31.602Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-13T21:41:33.103Z] [BOT] 💾 Marked as posted: Sales & Pricing Analyst @ ORG_3aec9bf8 (instance #1)
[2026-01-13T21:41:33.103Z] [BOT] 💾 BEFORE ARCHIVING: 996 jobs in database
[2026-01-13T21:41:33.104Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T21:41:33.109Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T21:41:33.109Z] [BOT] ✅ Archiving complete: 1 archived, 995 active
[2026-01-13T21:41:33.117Z] [BOT] 💾 Saved posted_jobs.json: 995 active jobs
[2026-01-13T21:41:33.117Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:41:36.118Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-13T21:41:36.118Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_b1b059ca Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:41:36.671Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_b1b059ca Systems in #💻・tech-jobs
[2026-01-13T21:41:36.672Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_b1b059ca Systems
[2026-01-13T21:41:38.353Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_b1b059ca Systems in #🗽・new-york
[2026-01-13T21:41:38.354Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T21:41:39.854Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_b1b059ca Systems (instance #1)
[2026-01-13T21:41:39.854Z] [BOT] 💾 BEFORE ARCHIVING: 996 jobs in database
[2026-01-13T21:41:39.855Z] [BOT] ✅ No jobs to archive (all 996 jobs within 7-day window)
[2026-01-13T21:41:39.862Z] [BOT] 💾 Saved posted_jobs.json: 996 active jobs
[2026-01-13T21:41:39.862Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:41:39.863Z] [BOT] 📍 [ROUTING] "DGX Cloud Performance Engineer" @ ORG_0890f456
[2026-01-13T21:41:39.863Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:41:40.186Z] [BOT] ✅ Created forum post: 🏢 DGX Cloud Performance Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-13T21:41:40.186Z] [BOT] ✅ Industry: DGX Cloud Performance Engineer @ ORG_0890f456
[2026-01-13T21:41:41.962Z] [BOT] ✅ Created forum post: 🏢 DGX Cloud Performance Engineer @ ORG_0890f456 in #🌉・san-francisco
[2026-01-13T21:41:41.963Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-13T21:41:43.463Z] [BOT] 💾 Marked as posted: DGX Cloud Performance Engineer @ ORG_0890f456 (instance #1)
[2026-01-13T21:41:43.463Z] [BOT] 💾 BEFORE ARCHIVING: 997 jobs in database
[2026-01-13T21:41:43.464Z] [BOT] ✅ No jobs to archive (all 997 jobs within 7-day window)
[2026-01-13T21:41:43.471Z] [BOT] 💾 Saved posted_jobs.json: 997 active jobs
[2026-01-13T21:41:43.471Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:41:43.472Z] [BOT] 📍 [ROUTING] "Softare Engineer 1" @ ORG_0bbe3cb1
[2026-01-13T21:41:43.472Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:41:43.948Z] [BOT] ✅ Created forum post: 🏢 Softare Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-13T21:41:43.948Z] [BOT] ✅ Industry: Softare Engineer 1 @ ORG_0bbe3cb1
[2026-01-13T21:41:45.628Z] [BOT] ✅ Created forum post: 🏢 Softare Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
[2026-01-13T21:41:45.628Z] [BOT] ✅ Location: 🌄・mountain-view
[2026-01-13T21:41:47.130Z] [BOT] 💾 Marked as posted: Softare Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-13T21:41:47.130Z] [BOT] 💾 BEFORE ARCHIVING: 998 jobs in database
[2026-01-13T21:41:47.130Z] [BOT] ✅ No jobs to archive (all 998 jobs within 7-day window)
[2026-01-13T21:41:47.139Z] [BOT] 💾 Saved posted_jobs.json: 998 active jobs
[2026-01-13T21:41:47.139Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:41:47.139Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
   Category: TECH (matched: "software")
[2026-01-13T21:41:47.139Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:41:47.341Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-13T21:41:47.341Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-13T21:41:49.046Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:41:50.546Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_f7a2cae4 (instance #1)
[2026-01-13T21:41:50.546Z] [BOT] 💾 BEFORE ARCHIVING: 999 jobs in database
[2026-01-13T21:41:50.547Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-13T21:41:50.555Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
[2026-01-13T21:41:50.555Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:41:50.555Z] [BOT] 📍 [ROUTING] "Graduate Engineer" @ Curtiss-Wright Corporation
[2026-01-13T21:41:50.555Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:41:50.852Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ Curtiss-Wright Corporation in #💻・tech-jobs
  ✅ Industry: Graduate Engineer @ Curtiss-Wright Corporation
[2026-01-13T21:41:52.603Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer @ Curtiss-Wright Corporation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:41:54.104Z] [BOT] 💾 Marked as posted: Graduate Engineer @ Curtiss-Wright Corporation (instance #1)
[2026-01-13T21:41:54.104Z] [BOT] 💾 BEFORE ARCHIVING: 1000 jobs in database
[2026-01-13T21:41:54.105Z] [BOT] ✅ No jobs to archive (all 1000 jobs within 7-day window)
[2026-01-13T21:41:54.113Z] [BOT] 💾 Saved posted_jobs.json: 1000 active jobs
[2026-01-13T21:41:54.113Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:41:54.113Z] [BOT] 📍 [ROUTING] "Data Integration Analyst 1" @ ORG_1ce21df7 Solutions
[2026-01-13T21:41:54.113Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:41:54.402Z] [BOT] ✅ Created forum post: 🏢 Data Integration Analyst 1 @ ORG_1ce21df7 Solutions in #💻・tech-jobs
  ✅ Industry: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions
[2026-01-13T21:41:56.152Z] [BOT] ✅ Created forum post: 🏢 Data Integration Analyst 1 @ ORG_1ce21df7 Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:41:57.653Z] [BOT] 💾 Marked as posted: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions (instance #1)
[2026-01-13T21:41:57.653Z] [BOT] 💾 BEFORE ARCHIVING: 1001 jobs in database
[2026-01-13T21:41:57.654Z] [BOT] ✅ No jobs to archive (all 1001 jobs within 7-day window)
[2026-01-13T21:41:57.661Z] [BOT] 💾 Saved posted_jobs.json: 1001 active jobs
[2026-01-13T21:41:57.661Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:41:57.661Z] [BOT] 📍 [ROUTING] "Implementation Integrations Analyst 1" @ ORG_2ec4b129
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T21:41:58.059Z] [BOT] ✅ Created forum post: 🏢 Implementation Integrations Analyst 1 @ ORG_2ec4b129 in #💻・tech-jobs
  ✅ Industry: Implementation Integrations Analyst 1 @ ORG_2ec4b129
[2026-01-13T21:41:59.756Z] [BOT] ✅ Created forum post: 🏢 Implementation Integrations Analyst 1 @ ORG_2ec4b129 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:42:01.257Z] [BOT] 💾 Marked as posted: Implementation Integrations Analyst 1 @ ORG_2ec4b129 (instance #1)
[2026-01-13T21:42:01.257Z] [BOT] 💾 BEFORE ARCHIVING: 1002 jobs in database
[2026-01-13T21:42:01.258Z] [BOT] ✅ No jobs to archive (all 1002 jobs within 7-day window)
[2026-01-13T21:42:01.265Z] [BOT] 💾 Saved posted_jobs.json: 1002 active jobs
[2026-01-13T21:42:01.265Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:42:04.266Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-13T21:42:04.266Z] [BOT] 📍 [ROUTING] "Head of Insurance, GTM Sales" @ anthropic
[2026-01-13T21:42:04.266Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T21:42:04.548Z] [BOT] ✅ Created forum post: 🏢 Head of Insurance, GTM Sales @ anthropic in #💲・sales-jobs
  ✅ Industry: Head of Insurance, GTM Sales @ anthropic
[2026-01-13T21:42:06.516Z] [BOT] ✅ Created forum post: 🏢 Head of Insurance, GTM Sales @ anthropic in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-13T21:42:08.017Z] [BOT] 💾 Marked as posted: Head of Insurance, GTM Sales @ anthropic (instance #1)
[2026-01-13T21:42:08.017Z] [BOT] 💾 BEFORE ARCHIVING: 1003 jobs in database
[2026-01-13T21:42:08.018Z] [BOT] ✅ No jobs to archive (all 1003 jobs within 7-day window)
[2026-01-13T21:42:08.026Z] [BOT] 💾 Saved posted_jobs.json: 1003 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T21:42:11.027Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-13T21:42:11.027Z] [BOT] 📍 [ROUTING] "Data Annotation Specialist" @ ORG_1fbf7080
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-13T21:42:11.027Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-13T21:42:11.434Z] [BOT] ✅ Created forum post: 🏢 Data Annotation Specialist @ ORG_1fbf7080 in #🤖・ai-jobs
  ✅ Industry: Data Annotation Specialist @ ORG_1fbf7080
[2026-01-13T21:42:13.383Z] [BOT] ✅ Created forum post: 🏢 Data Annotation Specialist @ ORG_1fbf7080 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T21:42:14.884Z] [BOT] 💾 Marked as posted: Data Annotation Specialist @ ORG_1fbf7080 (instance #1)
[2026-01-13T21:42:14.885Z] [BOT] 💾 BEFORE ARCHIVING: 1004 jobs in database
[2026-01-13T21:42:14.885Z] [BOT] ✅ No jobs to archive (all 1004 jobs within 7-day window)
[2026-01-13T21:42:14.893Z] [BOT] 💾 Saved posted_jobs.json: 1004 active jobs
[2026-01-13T21:42:14.893Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T21:42:17.894Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T21:42:17.894Z] [BOT] ⏭️  Skipping duplicate: JID_2a81cca7-analyst_r0013020 (posted within 7 days)
[2026-01-13T21:42:17.894Z] [BOT] ⏭️  Skipping duplicate: JID_b795c300 (posted within 7 days)
[2026-01-13T21:42:17.895Z] [BOT] ⏭️  Skipping duplicate: JID_a4dd9e68-2026_jr2009610 (posted within 7 days)
[2026-01-13T21:42:17.895Z] [BOT] ⏭️  Skipping duplicate: JID_2c981afd (posted within 7 days)
[2026-01-13T21:42:17.895Z] [BOT] ⏭️  Skipping duplicate: JID_120669dc (posted within 7 days)
[2026-01-13T21:42:17.895Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_b6cdd7c1-engineer_r0150489 (posted within 7 days)
[2026-01-13T21:42:17.895Z] [BOT] ⏭️  Skipping duplicate: JID_97369b62-cw_external_career_site-JID_8f5e12f0-engineer_jr10597 (posted within 7 days)
[2026-01-13T21:42:17.895Z] [BOT] ⏭️  Skipping duplicate: JID_9ecd388f-allied_external-JID_c23c0330-_r-010442 (posted within 7 days)
[2026-01-13T21:42:17.895Z] [BOT] ⏭️  Skipping duplicate: JID_64f249be (posted within 7 days)
[2026-01-13T21:42:17.895Z] [BOT] ⏭️  Skipping duplicate: JID_bbf756cd (posted within 7 days)
[2026-01-13T21:42:18.009Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-13T21:42:18.176Z] [BOT] ✅ Saved pending queue: 2726 total (2706 pending, 10 enriched, 10 posted)
[2026-01-13T21:42:18.176Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T21:42:18.227Z] [BOT] 📂 Loaded 3145 existing routing entries
[2026-01-13T21:42:18.284Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3155
   Timestamp: 2026-01-13T21:42:18.270Z
[2026-01-13T21:42:18.284Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 20
   Successful: 20
[2026-01-13T21:42:18.284Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-13T21:42:18.285Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 7 posts
[2026-01-13T21:42:18.285Z] [BOT] 2. #💻・remote-usa: 6 posts
     3. #🗽・new-york: 2 posts
     4. #📈・JID_fb739488: 1 posts
[2026-01-13T21:42:18.285Z] [BOT] 5. #🌉・san-francisco: 1 posts
[2026-01-13T21:42:18.285Z] [BOT] [STATS] Channel stats saved
[2026-01-13T21:42:20.311Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2976) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*