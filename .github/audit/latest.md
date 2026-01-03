# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T15:50:32.970Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T15:49:38.339Z] ========================================
[2026-01-03T15:49:38.341Z] Discord Bot Execution Log
[2026-01-03T15:49:38.341Z] Environment: GitHub Actions
[2026-01-03T15:49:38.341Z] Node Version: v20.19.6
[2026-01-03T15:49:38.341Z] ========================================
[2026-01-03T15:49:38.341Z] Environment Variables Check:
[2026-01-03T15:49:38.341Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T15:49:38.341Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.341Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T15:49:38.342Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T15:49:38.342Z] 
Multi-Channel Configuration:
[2026-01-03T15:49:38.342Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.342Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.342Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.342Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.342Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.342Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.342Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.342Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.342Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T15:49:38.342Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T15:49:38.343Z] 
Data Files Check:
[2026-01-03T15:49:38.344Z] .github/data/new_jobs.json: ✅ Exists (10 items, 196763 bytes)
[2026-01-03T15:49:38.346Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 302462 bytes)
[2026-01-03T15:49:38.347Z] 
========================================
[2026-01-03T15:49:38.347Z] Starting Enhanced Discord Bot...
[2026-01-03T15:49:38.347Z] ========================================
[2026-01-03T15:49:38.880Z] [BOT] ✅ Loaded V2 database: 583 jobs
[2026-01-03T15:49:39.602Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T15:49:39.602Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T15:49:39.603Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T15:49:39.607Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T15:49:39.676Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T15:49:39.767Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T15:49:39.770Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T15:49:39.770Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T15:49:39.771Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T15:49:39.771Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T15:49:39.771Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T15:49:39.776Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T15:49:39.776Z] [BOT] 📍 [ROUTING] "Senior Solutions Consultant" @ airtable
[2026-01-03T15:49:39.777Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:49:39.781Z] [BOT ERROR] (node:2312) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T15:49:39.997Z] [BOT] ✅ Created forum post: 🏢 Senior Solutions Consultant @ airtable in #💲・sales-jobs
  ✅ Industry: Senior Solutions Consultant @ airtable
[2026-01-03T15:49:41.722Z] [BOT] ✅ Created forum post: 🏢 Senior Solutions Consultant @ airtable in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T15:49:43.221Z] [BOT] 💾 Marked as posted: Senior Solutions Consultant @ airtable (instance #1)
[2026-01-03T15:49:43.222Z] [BOT] 💾 BEFORE ARCHIVING: 584 jobs in database
[2026-01-03T15:49:43.222Z] [BOT] ✅ No jobs to archive (all 584 jobs within 7-day window)
[2026-01-03T15:49:43.232Z] [BOT] 💾 Saved posted_jobs.json: 584 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:49:43.233Z] [BOT] 📍 [ROUTING] "Solutions Consultant" @ airtable
[2026-01-03T15:49:43.233Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T15:49:43.577Z] [BOT] ✅ Created forum post: 🏢 Solutions Consultant @ airtable in #💲・sales-jobs
[2026-01-03T15:49:43.577Z] [BOT] ✅ Industry: Solutions Consultant @ airtable
[2026-01-03T15:49:45.404Z] [BOT] ✅ Created forum post: 🏢 Solutions Consultant @ airtable in #🤠・austin
[2026-01-03T15:49:45.404Z] [BOT] ✅ Location: 🤠・austin
[2026-01-03T15:49:46.904Z] [BOT] 💾 Marked as posted: Solutions Consultant @ airtable (instance #1)
[2026-01-03T15:49:46.904Z] [BOT] 💾 BEFORE ARCHIVING: 585 jobs in database
[2026-01-03T15:49:46.905Z] [BOT] ✅ No jobs to archive (all 585 jobs within 7-day window)
[2026-01-03T15:49:46.909Z] [BOT] 💾 Saved posted_jobs.json: 585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:49:49.909Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-03T15:49:49.909Z] [BOT] 📍 [ROUTING] "Software Engineer, Android" @ airtable
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T15:49:50.704Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Android @ airtable in #💻・tech-jobs
[2026-01-03T15:49:50.704Z] [BOT] ✅ Industry: Software Engineer, Android @ airtable
[2026-01-03T15:49:52.432Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Android @ airtable in #🌉・san-francisco
[2026-01-03T15:49:52.433Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T15:49:53.933Z] [BOT] 💾 Marked as posted: Software Engineer, Android @ airtable (instance #1)
[2026-01-03T15:49:53.933Z] [BOT] 💾 BEFORE ARCHIVING: 586 jobs in database
[2026-01-03T15:49:53.934Z] [BOT] ✅ No jobs to archive (all 586 jobs within 7-day window)
[2026-01-03T15:49:53.939Z] [BOT] 💾 Saved posted_jobs.json: 586 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:49:53.939Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (2-8 YOE)" @ airtable
   Category: TECH (matched: "software")
[2026-01-03T15:49:53.940Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T15:49:54.465Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Infrastructure (2-8 YOE) @ airtable in #💻・tech-jobs
[2026-01-03T15:49:54.466Z] [BOT] ✅ Industry: Software Engineer, Infrastructure (2-8 YOE) @ airtable
[2026-01-03T15:49:56.277Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Infrastructure (2-8 YOE) @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:49:57.779Z] [BOT] 💾 Marked as posted: Software Engineer, Infrastructure (2-8 YOE) @ airtable (instance #1)
[2026-01-03T15:49:57.779Z] [BOT] 💾 BEFORE ARCHIVING: 587 jobs in database
[2026-01-03T15:49:57.779Z] [BOT] ✅ No jobs to archive (all 587 jobs within 7-day window)
[2026-01-03T15:49:57.785Z] [BOT] 💾 Saved posted_jobs.json: 587 active jobs
[2026-01-03T15:49:57.785Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:49:57.786Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (8+ YOE)" @ airtable
[2026-01-03T15:49:57.786Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T15:49:58.425Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Infrastructure (8+ YOE) @ airtable in #💻・tech-jobs
  ✅ Industry: Software Engineer, Infrastructure (8+ YOE) @ airtable
[2026-01-03T15:50:00.337Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Infrastructure (8+ YOE) @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:50:01.837Z] [BOT] 💾 Marked as posted: Software Engineer, Infrastructure (8+ YOE) @ airtable (instance #1)
[2026-01-03T15:50:01.837Z] [BOT] 💾 BEFORE ARCHIVING: 588 jobs in database
[2026-01-03T15:50:01.838Z] [BOT] ✅ No jobs to archive (all 588 jobs within 7-day window)
[2026-01-03T15:50:01.844Z] [BOT] 💾 Saved posted_jobs.json: 588 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:50:01.844Z] [BOT] 📍 [ROUTING] "Web Developer" @ airtable
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T15:50:02.125Z] [BOT] ✅ Created forum post: 🏢 Web Developer @ airtable in #💻・tech-jobs
  ✅ Industry: Web Developer @ airtable
[2026-01-03T15:50:03.978Z] [BOT] ✅ Created forum post: 🏢 Web Developer @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:50:05.479Z] [BOT] 💾 Marked as posted: Web Developer @ airtable (instance #1)
[2026-01-03T15:50:05.479Z] [BOT] 💾 BEFORE ARCHIVING: 589 jobs in database
[2026-01-03T15:50:05.479Z] [BOT] ✅ No jobs to archive (all 589 jobs within 7-day window)
[2026-01-03T15:50:05.484Z] [BOT] 💾 Saved posted_jobs.json: 589 active jobs
[2026-01-03T15:50:05.485Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:50:08.485Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-03T15:50:08.485Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Backend (2-8 YOE)" @ airtable
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-03T15:50:08.485Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T15:50:09.373Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Backend (2-8 YOE) @ airtable in #📈・JID_fb739488
[2026-01-03T15:50:09.373Z] [BOT] ✅ Industry: Software Engineer, Product Backend (2-8 YOE) @ airtable
[2026-01-03T15:50:11.244Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Backend (2-8 YOE) @ airtable in #🌉・san-francisco
[2026-01-03T15:50:11.244Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T15:50:12.744Z] [BOT] 💾 Marked as posted: Software Engineer, Product Backend (2-8 YOE) @ airtable (instance #1)
[2026-01-03T15:50:12.744Z] [BOT] 💾 BEFORE ARCHIVING: 590 jobs in database
[2026-01-03T15:50:12.745Z] [BOT] ✅ No jobs to archive (all 590 jobs within 7-day window)
[2026-01-03T15:50:12.751Z] [BOT] 💾 Saved posted_jobs.json: 590 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:50:12.751Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Backend (8+ YOE)" @ airtable
[2026-01-03T15:50:12.751Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T15:50:12.955Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Backend (8+ YOE) @ airtable in #📈・JID_fb739488
  ✅ Industry: Software Engineer, Product Backend (8+ YOE) @ airtable
[2026-01-03T15:50:14.832Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Backend (8+ YOE) @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:50:16.332Z] [BOT] 💾 Marked as posted: Software Engineer, Product Backend (8+ YOE) @ airtable (instance #1)
[2026-01-03T15:50:16.332Z] [BOT] 💾 BEFORE ARCHIVING: 591 jobs in database
[2026-01-03T15:50:16.333Z] [BOT] ✅ No jobs to archive (all 591 jobs within 7-day window)
[2026-01-03T15:50:16.338Z] [BOT] 💾 Saved posted_jobs.json: 591 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T15:50:16.339Z] [BOT] 📍 [ROUTING] "Software Engineer, Product Frontend (2-8 YOE)" @ airtable
[2026-01-03T15:50:16.339Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T15:50:16.643Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Frontend (2-8 YOE) @ airtable in #📈・JID_fb739488
  ✅ Industry: Software Engineer, Product Frontend (2-8 YOE) @ airtable
[2026-01-03T15:50:18.440Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Product Frontend (2-8 YOE) @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:50:19.942Z] [BOT] 💾 Marked as posted: Software Engineer, Product Frontend (2-8 YOE) @ airtable (instance #1)
[2026-01-03T15:50:19.942Z] [BOT] 💾 BEFORE ARCHIVING: 592 jobs in database
[2026-01-03T15:50:19.942Z] [BOT] ✅ No jobs to archive (all 592 jobs within 7-day window)
[2026-01-03T15:50:19.948Z] [BOT] 💾 Saved posted_jobs.json: 592 active jobs
[2026-01-03T15:50:19.948Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:50:22.949Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-03T15:50:22.950Z] [BOT] 📍 [ROUTING] "Technical Sourcer (Contract)" @ airtable
[2026-01-03T15:50:22.950Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-03T15:50:23.253Z] [BOT] ✅ Created forum post: 🏢 Technical Sourcer (Contract) @ airtable in #🩺・healthcare-jobs
  ✅ Industry: Technical Sourcer (Contract) @ airtable
[2026-01-03T15:50:24.979Z] [BOT] ✅ Created forum post: 🏢 Technical Sourcer (Contract) @ airtable in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T15:50:26.480Z] [BOT] 💾 Marked as posted: Technical Sourcer (Contract) @ airtable (instance #1)
[2026-01-03T15:50:26.480Z] [BOT] 💾 BEFORE ARCHIVING: 593 jobs in database
[2026-01-03T15:50:26.480Z] [BOT] ✅ No jobs to archive (all 593 jobs within 7-day window)
[2026-01-03T15:50:26.486Z] [BOT] 💾 Saved posted_jobs.json: 593 active jobs
[2026-01-03T15:50:26.486Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T15:50:29.486Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T15:50:29.486Z] [BOT] ⏭️  Skipping duplicate: JID_c3b16c3e (posted within 7 days)
[2026-01-03T15:50:29.486Z] [BOT] ⏭️  Skipping duplicate: JID_7382d413 (posted within 7 days)
[2026-01-03T15:50:29.486Z] [BOT] ⏭️  Skipping duplicate: JID_36d204f3 (posted within 7 days)
[2026-01-03T15:50:29.486Z] [BOT] ⏭️  Skipping duplicate: JID_f67c90ef (posted within 7 days)
⏭️  Skipping duplicate: JID_c16b5fb8 (posted within 7 days)
[2026-01-03T15:50:29.487Z] [BOT] ⏭️  Skipping duplicate: JID_ebbf5c6f (posted within 7 days)
⏭️  Skipping duplicate: JID_5a3cb3c9 (posted within 7 days)
⏭️  Skipping duplicate: JID_6ffb7799 (posted within 7 days)
⏭️  Skipping duplicate: JID_e81b6402 (posted within 7 days)
⏭️  Skipping duplicate: JID_82ab6fe8 (posted within 7 days)
[2026-01-03T15:50:29.548Z] [BOT] ✅ Loaded pending queue: 706 total (686 pending, 20 enriched, 0 posted)
[2026-01-03T15:50:29.614Z] [BOT] ✅ Saved pending queue: 706 total (686 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T15:50:29.614Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T15:50:29.659Z] [BOT] 📂 Loaded 1557 existing routing entries
[2026-01-03T15:50:29.708Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1567
   Timestamp: 2026-01-03T15:50:29.701Z
[2026-01-03T15:50:29.709Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 20
[2026-01-03T15:50:29.709Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-03T15:50:29.709Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T15:50:29.709Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
[2026-01-03T15:50:29.709Z] [BOT] 1. #🌉・san-francisco: 8 posts
     2. #💻・tech-jobs: 4 posts
     3. #📈・JID_fb739488: 3 posts
[2026-01-03T15:50:29.709Z] [BOT] 4. #💲・sales-jobs: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-03T15:50:29.709Z] [BOT] [STATS] Channel stats saved
[2026-01-03T15:50:31.725Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2312) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*