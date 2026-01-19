# Discord Bot Execution Audit
**Timestamp:** 2026-01-19T22:49:04.916Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-19T22:48:07.966Z] ========================================
[2026-01-19T22:48:07.967Z] Discord Bot Execution Log
[2026-01-19T22:48:07.968Z] Environment: GitHub Actions
[2026-01-19T22:48:07.968Z] Node Version: v20.19.6
[2026-01-19T22:48:07.968Z] ========================================
[2026-01-19T22:48:07.968Z] Environment Variables Check:
[2026-01-19T22:48:07.968Z] DISCORD_TOKEN: ✅ Set
[2026-01-19T22:48:07.968Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.968Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-19T22:48:07.968Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-19T22:48:07.968Z] 
Multi-Channel Configuration:
[2026-01-19T22:48:07.968Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.969Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.969Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.969Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.969Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.969Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.969Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.969Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.969Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-19T22:48:07.969Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-19T22:48:07.969Z] 
Data Files Check:
[2026-01-19T22:48:07.970Z] .github/data/new_jobs.json: ✅ Exists (10 items, 174885 bytes)
[2026-01-19T22:48:07.980Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1553317 bytes)
[2026-01-19T22:48:07.980Z] 
========================================
[2026-01-19T22:48:07.980Z] Starting Enhanced Discord Bot...
[2026-01-19T22:48:07.980Z] ========================================
[2026-01-19T22:48:08.504Z] [BOT] ✅ Loaded V2 database: 2835 jobs
[2026-01-19T22:48:09.554Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-19T22:48:09.554Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-19T22:48:09.554Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-19T22:48:09.670Z] [BOT] ✅ Loaded pending queue: 2811 total (2791 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Head of Sales Compensation at gusto
[2026-01-19T22:48:09.674Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-19T22:48:09.675Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-19T22:48:09.675Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-19T22:48:09.676Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-19T22:48:09.676Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Principal Software Engineer - Pay Group Engineering @ gusto: denver, co;san francisco, ca;new york, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-19T22:48:09.676Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-19T22:48:09.681Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-19T22:48:09.681Z] [BOT] 📍 [ROUTING] "Head of Sales Compensation" @ gusto
[2026-01-19T22:48:09.681Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T22:48:09.686Z] [BOT ERROR] (node:2621) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-19T22:48:10.110Z] [BOT] ✅ Created forum post: 🏢 Head of Sales Compensation @ gusto in #💲・sales-jobs
[2026-01-19T22:48:10.111Z] [BOT] ✅ Industry: Head of Sales Compensation @ gusto
[2026-01-19T22:48:11.848Z] [BOT] ✅ Created forum post: 🏢 Head of Sales Compensation @ gusto in #🌉・san-francisco
[2026-01-19T22:48:11.848Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T22:48:13.349Z] [BOT] 💾 Marked as posted: Head of Sales Compensation @ gusto (instance #1)
[2026-01-19T22:48:13.349Z] [BOT] 💾 BEFORE ARCHIVING: 2836 jobs in database
[2026-01-19T22:48:13.352Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-19T22:48:13.357Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-19T22:48:13.357Z] [BOT] ✅ Archiving complete: 10 archived, 2826 active
[2026-01-19T22:48:13.376Z] [BOT] 💾 Saved posted_jobs.json: 2826 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:13.376Z] [BOT] 📍 [ROUTING] "Head of Sales and GTM Operations" @ gusto
[2026-01-19T22:48:13.377Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T22:48:13.705Z] [BOT] ✅ Created forum post: 🏢 Head of Sales and GTM Operations @ gusto in #💲・sales-jobs
[2026-01-19T22:48:13.705Z] [BOT] ✅ Industry: Head of Sales and GTM Operations @ gusto
[2026-01-19T22:48:15.496Z] [BOT] ✅ Created forum post: 🏢 Head of Sales and GTM Operations @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T22:48:16.997Z] [BOT] 💾 Marked as posted: Head of Sales and GTM Operations @ gusto (instance #1)
[2026-01-19T22:48:16.997Z] [BOT] 💾 BEFORE ARCHIVING: 2827 jobs in database
[2026-01-19T22:48:16.999Z] [BOT] ✅ No jobs to archive (all 2827 jobs within 7-day window)
[2026-01-19T22:48:17.015Z] [BOT] 💾 Saved posted_jobs.json: 2827 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:17.015Z] [BOT] 📍 [ROUTING] "Corporate Tax Manager" @ gusto
[2026-01-19T22:48:17.015Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T22:48:17.305Z] [BOT] ✅ Created forum post: 🏢 Corporate Tax Manager @ gusto in #💲・sales-jobs
[2026-01-19T22:48:17.305Z] [BOT] ✅ Industry: Corporate Tax Manager @ gusto
[2026-01-19T22:48:19.018Z] [BOT] ✅ Created forum post: 🏢 Corporate Tax Manager @ gusto in #🌉・san-francisco
[2026-01-19T22:48:19.019Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T22:48:20.520Z] [BOT] 💾 Marked as posted: Corporate Tax Manager @ gusto (instance #1)
[2026-01-19T22:48:20.521Z] [BOT] 💾 BEFORE ARCHIVING: 2828 jobs in database
[2026-01-19T22:48:20.523Z] [BOT] ✅ No jobs to archive (all 2828 jobs within 7-day window)
[2026-01-19T22:48:20.543Z] [BOT] 💾 Saved posted_jobs.json: 2828 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:20.543Z] [BOT] 📍 [ROUTING] "Process and Controls Financial Manager" @ gusto
[2026-01-19T22:48:20.543Z] [BOT] Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-19T22:48:20.854Z] [BOT] ✅ Created forum post: 🏢 Process and Controls Financial Manager @ gusto in #💲・sales-jobs
  ✅ Industry: Process and Controls Financial Manager @ gusto
[2026-01-19T22:48:22.738Z] [BOT] ✅ Created forum post: 🏢 Process and Controls Financial Manager @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T22:48:24.239Z] [BOT] 💾 Marked as posted: Process and Controls Financial Manager @ gusto (instance #1)
[2026-01-19T22:48:24.239Z] [BOT] 💾 BEFORE ARCHIVING: 2829 jobs in database
[2026-01-19T22:48:24.241Z] [BOT] ✅ No jobs to archive (all 2829 jobs within 7-day window)
[2026-01-19T22:48:24.260Z] [BOT] 💾 Saved posted_jobs.json: 2829 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:27.262Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-19T22:48:27.262Z] [BOT] 📍 [ROUTING] "Staff Software Engineer,  Infrastructure " @ gusto
   Category: TECH (matched: "software")
[2026-01-19T22:48:27.263Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T22:48:27.500Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer,  Infrastructure  @ gusto in #💻・tech-jobs
  ✅ Industry: Staff Software Engineer,  Infrastructure  @ gusto
[2026-01-19T22:48:29.205Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer,  Infrastructure  @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T22:48:30.707Z] [BOT] 💾 Marked as posted: Staff Software Engineer,  Infrastructure  @ gusto (instance #1)
[2026-01-19T22:48:30.707Z] [BOT] 💾 BEFORE ARCHIVING: 2830 jobs in database
[2026-01-19T22:48:30.709Z] [BOT] ✅ No jobs to archive (all 2830 jobs within 7-day window)
[2026-01-19T22:48:30.727Z] [BOT] 💾 Saved posted_jobs.json: 2830 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:30.727Z] [BOT] 📍 [ROUTING] "Team Lead - Sr. Salesforce Developer" @ gusto
[2026-01-19T22:48:30.727Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T22:48:30.911Z] [BOT] ✅ Created forum post: 🏢 Team Lead - Sr. Salesforce Developer @ gusto in #💻・tech-jobs
  ✅ Industry: Team Lead - Sr. Salesforce Developer @ gusto
[2026-01-19T22:48:32.813Z] [BOT] ✅ Created forum post: 🏢 Team Lead - Sr. Salesforce Developer @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T22:48:34.315Z] [BOT] 💾 Marked as posted: Team Lead - Sr. Salesforce Developer @ gusto (instance #1)
[2026-01-19T22:48:34.315Z] [BOT] 💾 BEFORE ARCHIVING: 2831 jobs in database
[2026-01-19T22:48:34.317Z] [BOT] ✅ No jobs to archive (all 2831 jobs within 7-day window)
[2026-01-19T22:48:34.336Z] [BOT] 💾 Saved posted_jobs.json: 2831 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:34.337Z] [BOT] 📍 [ROUTING] "Sr Staff Software Engineer, Entity Management" @ gusto
[2026-01-19T22:48:34.337Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-19T22:48:34.528Z] [BOT] ✅ Created forum post: 🏢 Sr Staff Software Engineer, Entity Management @ gusto in #💻・tech-jobs
  ✅ Industry: Sr Staff Software Engineer, Entity Management @ gusto
[2026-01-19T22:48:36.226Z] [BOT] ✅ Created forum post: 🏢 Sr Staff Software Engineer, Entity Management @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T22:48:37.728Z] [BOT] 💾 Marked as posted: Sr Staff Software Engineer, Entity Management @ gusto (instance #1)
[2026-01-19T22:48:37.729Z] [BOT] 💾 BEFORE ARCHIVING: 2832 jobs in database
[2026-01-19T22:48:37.731Z] [BOT] ✅ No jobs to archive (all 2832 jobs within 7-day window)
[2026-01-19T22:48:37.748Z] [BOT] 💾 Saved posted_jobs.json: 2832 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:40.749Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-19T22:48:40.749Z] [BOT] 📍 [ROUTING] "Head of Revenue Analytics" @ gusto
[2026-01-19T22:48:40.749Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-19T22:48:41.175Z] [BOT] ✅ Created forum post: 🏢 Head of Revenue Analytics @ gusto in #📈・JID_fb739488
[2026-01-19T22:48:41.175Z] [BOT] ✅ Industry: Head of Revenue Analytics @ gusto
[2026-01-19T22:48:43.310Z] [BOT] ✅ Created forum post: 🏢 Head of Revenue Analytics @ gusto in #🌉・san-francisco
[2026-01-19T22:48:43.310Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-19T22:48:44.812Z] [BOT] 💾 Marked as posted: Head of Revenue Analytics @ gusto (instance #1)
[2026-01-19T22:48:44.812Z] [BOT] 💾 BEFORE ARCHIVING: 2833 jobs in database
[2026-01-19T22:48:44.814Z] [BOT] ✅ No jobs to archive (all 2833 jobs within 7-day window)
[2026-01-19T22:48:44.834Z] [BOT] 💾 Saved posted_jobs.json: 2833 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:47.834Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-19T22:48:47.835Z] [BOT] 📍 [ROUTING] "Dedicated Service Advisor" @ gusto
[2026-01-19T22:48:47.835Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-19T22:48:48.121Z] [BOT] ✅ Created forum post: 🏢 Dedicated Service Advisor @ gusto in #🩺・healthcare-jobs
  ✅ Industry: Dedicated Service Advisor @ gusto
[2026-01-19T22:48:50.113Z] [BOT] ✅ Created forum post: 🏢 Dedicated Service Advisor @ gusto in #🌆・chicago
[2026-01-19T22:48:50.113Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-19T22:48:51.614Z] [BOT] 💾 Marked as posted: Dedicated Service Advisor @ gusto (instance #1)
[2026-01-19T22:48:51.615Z] [BOT] 💾 BEFORE ARCHIVING: 2834 jobs in database
[2026-01-19T22:48:51.617Z] [BOT] ✅ No jobs to archive (all 2834 jobs within 7-day window)
[2026-01-19T22:48:51.635Z] [BOT] 💾 Saved posted_jobs.json: 2834 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:54.636Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-19T22:48:54.637Z] [BOT] 📍 [ROUTING] "Principal Software Engineer - Pay Group Engineering" @ gusto
   Category: AI (matched: "machine learning")
[2026-01-19T22:48:54.637Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-19T22:48:54.842Z] [BOT] ✅ Created forum post: 🏢 Principal Software Engineer - Pay Group Engineering @ gusto in #🤖・ai-jobs
[2026-01-19T22:48:54.842Z] [BOT] ✅ Industry: Principal Software Engineer - Pay Group Engineering @ gusto
[2026-01-19T22:48:56.627Z] [BOT] ✅ Created forum post: 🏢 Principal Software Engineer - Pay Group Engineering @ gusto in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-19T22:48:58.128Z] [BOT] 💾 Marked as posted: Principal Software Engineer - Pay Group Engineering @ gusto (instance #1)
[2026-01-19T22:48:58.128Z] [BOT] 💾 BEFORE ARCHIVING: 2835 jobs in database
[2026-01-19T22:48:58.131Z] [BOT] ✅ No jobs to archive (all 2835 jobs within 7-day window)
[2026-01-19T22:48:58.148Z] [BOT] 💾 Saved posted_jobs.json: 2835 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:48:58.148Z] [BOT] 💾 Marked as posted: Principal Software Engineer - Payroll @ gusto (instance #1)
[2026-01-19T22:48:58.149Z] [BOT] 💾 BEFORE ARCHIVING: 2836 jobs in database
[2026-01-19T22:48:58.150Z] [BOT] ✅ No jobs to archive (all 2836 jobs within 7-day window)
[2026-01-19T22:48:58.166Z] [BOT] 💾 Saved posted_jobs.json: 2836 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-19T22:49:01.167Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-19T22:49:01.167Z] [BOT] ⏭️  Skipping duplicate: JID_3b6e0518 (posted within 7 days)
[2026-01-19T22:49:01.167Z] [BOT] ⏭️  Skipping duplicate: JID_25609a46 (posted within 7 days)
[2026-01-19T22:49:01.168Z] [BOT] ⏭️  Skipping duplicate: JID_53c7d17c (posted within 7 days)
[2026-01-19T22:49:01.168Z] [BOT] ⏭️  Skipping duplicate: JID_39085692 (posted within 7 days)
[2026-01-19T22:49:01.168Z] [BOT] ⏭️  Skipping duplicate: JID_a75bb91c (posted within 7 days)
⏭️  Skipping duplicate: JID_8f3fa39e (posted within 7 days)
[2026-01-19T22:49:01.168Z] [BOT] ⏭️  Skipping duplicate: JID_d5f24f3b (posted within 7 days)
[2026-01-19T22:49:01.168Z] [BOT] ⏭️  Skipping duplicate: JID_8cbdeacc (posted within 7 days)
[2026-01-19T22:49:01.168Z] [BOT] ⏭️  Skipping duplicate: JID_3b00c4a9 (posted within 7 days)
[2026-01-19T22:49:01.169Z] [BOT] ⏭️  Skipping duplicate: JID_70829034 (posted within 7 days)
[2026-01-19T22:49:01.280Z] [BOT] ✅ Loaded pending queue: 2811 total (2791 pending, 20 enriched, 0 posted)
[2026-01-19T22:49:01.455Z] [BOT] ✅ Saved pending queue: 2811 total (2791 pending, 10 enriched, 10 posted)
[2026-01-19T22:49:01.455Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-19T22:49:01.515Z] [BOT] 📂 Loaded 5185 existing routing entries
[2026-01-19T22:49:01.588Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5195
   Timestamp: 2026-01-19T22:49:01.565Z
[2026-01-19T22:49:01.589Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6c384b01.jsonl
   Total attempts: 20
[2026-01-19T22:49:01.589Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-19T22:49:01.589Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #💲・sales-jobs: 4 posts
     3. #💻・tech-jobs: 3 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🩺・healthcare-jobs: 1 posts
[2026-01-19T22:49:01.589Z] [BOT] [STATS] Channel stats saved
[2026-01-19T22:49:03.615Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2621) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*