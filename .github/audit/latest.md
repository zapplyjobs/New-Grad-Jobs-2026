# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T03:25:02.367Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T03:24:09.307Z] ========================================
[2026-01-15T03:24:09.309Z] Discord Bot Execution Log
[2026-01-15T03:24:09.309Z] Environment: GitHub Actions
[2026-01-15T03:24:09.309Z] Node Version: v20.19.6
[2026-01-15T03:24:09.309Z] ========================================
[2026-01-15T03:24:09.309Z] Environment Variables Check:
[2026-01-15T03:24:09.309Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T03:24:09.310Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.310Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T03:24:09.310Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T03:24:09.310Z] 
Multi-Channel Configuration:
[2026-01-15T03:24:09.310Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.310Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.310Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.310Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.310Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.310Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.310Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.310Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.311Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T03:24:09.311Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T03:24:09.311Z] 
Data Files Check:
[2026-01-15T03:24:09.311Z] .github/data/new_jobs.json: ✅ Exists (10 items, 44351 bytes)
[2026-01-15T03:24:09.318Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 820889 bytes)
[2026-01-15T03:24:09.318Z] 
========================================
[2026-01-15T03:24:09.318Z] Starting Enhanced Discord Bot...
[2026-01-15T03:24:09.318Z] ========================================
[2026-01-15T03:24:09.882Z] [BOT] ✅ Loaded V2 database: 1547 jobs
[2026-01-15T03:24:10.587Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T03:24:10.587Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T03:24:10.588Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T03:24:10.699Z] [BOT] ✅ Loaded pending queue: 2723 total (2703 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Collection Operator 2 at ALTEN Technology
[2026-01-15T03:24:10.702Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T03:24:10.703Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T03:24:10.703Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T03:24:10.704Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T03:24:10.704Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T03:24:10.708Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T03:24:10.708Z] [BOT] 📍 [ROUTING] "Data Collection Operator 2" @ ORG_9ad28ad4 Technology
[2026-01-15T03:24:10.709Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T03:24:10.725Z] [BOT ERROR] (node:2371) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T03:24:10.959Z] [BOT] ✅ Created forum post: 🏢 Data Collection Operator 2 @ ORG_9ad28ad4 Technology in #💻・tech-jobs
[2026-01-15T03:24:10.959Z] [BOT] ✅ Industry: Data Collection Operator 2 @ ORG_9ad28ad4 Technology
[2026-01-15T03:24:12.702Z] [BOT] ✅ Created forum post: 🏢 Data Collection Operator 2 @ ORG_9ad28ad4 Technology in #🌉・san-francisco
[2026-01-15T03:24:12.702Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T03:24:14.202Z] [BOT] 💾 Marked as posted: Data Collection Operator 2 @ ORG_9ad28ad4 Technology (instance #1)
[2026-01-15T03:24:14.202Z] [BOT] 💾 BEFORE ARCHIVING: 1548 jobs in database
[2026-01-15T03:24:14.203Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T03:24:14.206Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-15T03:24:14.206Z] [BOT] ✅ Archiving complete: 1 archived, 1547 active
[2026-01-15T03:24:14.216Z] [BOT] 💾 Saved posted_jobs.json: 1547 active jobs
[2026-01-15T03:24:14.216Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:14.216Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_56d3dff7
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T03:24:14.580Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_56d3dff7 in #💻・tech-jobs
[2026-01-15T03:24:14.580Z] [BOT] ✅ Industry: Software Engineer @ ORG_56d3dff7
[2026-01-15T03:24:16.359Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_56d3dff7 in #💻・remote-usa
[2026-01-15T03:24:16.359Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T03:24:17.860Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_56d3dff7 (instance #1)
💾 BEFORE ARCHIVING: 1548 jobs in database
[2026-01-15T03:24:17.861Z] [BOT] ✅ No jobs to archive (all 1548 jobs within 7-day window)
[2026-01-15T03:24:17.871Z] [BOT] 💾 Saved posted_jobs.json: 1548 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:17.871Z] [BOT] 📍 [ROUTING] "Entry Level - C Software Developer" @ mthree
[2026-01-15T03:24:17.871Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T03:24:18.114Z] [BOT] ✅ Created forum post: 🏢 Entry Level - C Software Developer @ mthree in #💻・tech-jobs
  ✅ Industry: Entry Level - C Software Developer @ mthree
[2026-01-15T03:24:19.816Z] [BOT] ✅ Created forum post: 🏢 Entry Level - C Software Developer @ mthree in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T03:24:21.317Z] [BOT] 💾 Marked as posted: Entry Level - C Software Developer @ mthree (instance #1)
[2026-01-15T03:24:21.317Z] [BOT] 💾 BEFORE ARCHIVING: 1549 jobs in database
[2026-01-15T03:24:21.318Z] [BOT] ✅ No jobs to archive (all 1549 jobs within 7-day window)
[2026-01-15T03:24:21.330Z] [BOT] 💾 Saved posted_jobs.json: 1549 active jobs
[2026-01-15T03:24:21.330Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:21.331Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_fee50aac
[2026-01-15T03:24:21.331Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T03:24:22.028Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_fee50aac in #💻・tech-jobs
[2026-01-15T03:24:22.028Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_fee50aac
[2026-01-15T03:24:23.775Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_fee50aac in #💻・remote-usa
[2026-01-15T03:24:23.775Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T03:24:25.277Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_fee50aac (instance #1)
[2026-01-15T03:24:25.277Z] [BOT] 💾 BEFORE ARCHIVING: 1550 jobs in database
[2026-01-15T03:24:25.278Z] [BOT] ✅ No jobs to archive (all 1550 jobs within 7-day window)
[2026-01-15T03:24:25.289Z] [BOT] 💾 Saved posted_jobs.json: 1550 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:25.289Z] [BOT] 📍 [ROUTING] "Junior Software Engineer - DST" @ ORG_3aea8160
[2026-01-15T03:24:25.290Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T03:24:25.498Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer - DST @ ORG_3aea8160 in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer - DST @ ORG_3aea8160
[2026-01-15T03:24:27.214Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer - DST @ ORG_3aea8160 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T03:24:28.715Z] [BOT] 💾 Marked as posted: Junior Software Engineer - DST @ ORG_3aea8160 (instance #1)
💾 BEFORE ARCHIVING: 1551 jobs in database
[2026-01-15T03:24:28.716Z] [BOT] ✅ No jobs to archive (all 1551 jobs within 7-day window)
[2026-01-15T03:24:28.729Z] [BOT] 💾 Saved posted_jobs.json: 1551 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:28.729Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1" @ ORG_b3910ba4 financial
[2026-01-15T03:24:28.730Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T03:24:29.005Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_b3910ba4 financial in #💻・tech-jobs
[2026-01-15T03:24:29.005Z] [BOT] ✅ Industry: Software Development Engineer 1 @ ORG_b3910ba4 financial
[2026-01-15T03:24:30.835Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_b3910ba4 financial in #🤠・austin
[2026-01-15T03:24:30.835Z] [BOT] ✅ Location: 🤠・austin
[2026-01-15T03:24:32.337Z] [BOT] 💾 Marked as posted: Software Development Engineer 1 @ ORG_b3910ba4 financial (instance #1)
[2026-01-15T03:24:32.337Z] [BOT] 💾 BEFORE ARCHIVING: 1552 jobs in database
[2026-01-15T03:24:32.338Z] [BOT] ✅ No jobs to archive (all 1552 jobs within 7-day window)
[2026-01-15T03:24:32.348Z] [BOT] 💾 Saved posted_jobs.json: 1552 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:32.348Z] [BOT] 📍 [ROUTING] "Graduate Developer Programme" @ ORG_966cc52a Securities
   Category: TECH (matched: "software")
[2026-01-15T03:24:32.348Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T03:24:32.548Z] [BOT] ✅ Created forum post: 🏢 Graduate Developer Programme @ ORG_966cc52a Securities in #💻・tech-jobs
[2026-01-15T03:24:32.548Z] [BOT] ✅ Industry: Graduate Developer Programme @ ORG_966cc52a Securities
[2026-01-15T03:24:34.271Z] [BOT] ✅ Created forum post: 🏢 Graduate Developer Programme @ ORG_966cc52a Securities in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T03:24:35.772Z] [BOT] 💾 Marked as posted: Graduate Developer Programme @ ORG_966cc52a Securities (instance #1)
[2026-01-15T03:24:35.772Z] [BOT] 💾 BEFORE ARCHIVING: 1553 jobs in database
[2026-01-15T03:24:35.773Z] [BOT] ✅ No jobs to archive (all 1553 jobs within 7-day window)
[2026-01-15T03:24:35.785Z] [BOT] 💾 Saved posted_jobs.json: 1553 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:38.785Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T03:24:38.785Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-15T03:24:38.785Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T03:24:39.170Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #📣・marketing-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-15T03:24:40.932Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T03:24:42.433Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory (instance #1)
[2026-01-15T03:24:42.433Z] [BOT] 💾 BEFORE ARCHIVING: 1554 jobs in database
[2026-01-15T03:24:42.434Z] [BOT] ✅ No jobs to archive (all 1554 jobs within 7-day window)
[2026-01-15T03:24:42.447Z] [BOT] 💾 Saved posted_jobs.json: 1554 active jobs
[2026-01-15T03:24:42.447Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:45.448Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-15T03:24:45.448Z] [BOT] 📍 [ROUTING] "Data Scientist / Machine Learning Engineer" @ ORG_478e100e University
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T03:24:45.727Z] [BOT] ✅ Created forum post: 🏢 Data Scientist / Machine Learning Engineer @ ORG_478e100e University in #🤖・ai-jobs
  ✅ Industry: Data Scientist / Machine Learning Engineer @ ORG_478e100e University
[2026-01-15T03:24:47.599Z] [BOT] ✅ Created forum post: 🏢 Data Scientist / Machine Learning Engineer @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T03:24:49.100Z] [BOT] 💾 Marked as posted: Data Scientist / Machine Learning Engineer @ ORG_478e100e University (instance #1)
[2026-01-15T03:24:49.100Z] [BOT] 💾 BEFORE ARCHIVING: 1555 jobs in database
[2026-01-15T03:24:49.101Z] [BOT] ✅ No jobs to archive (all 1555 jobs within 7-day window)
[2026-01-15T03:24:49.114Z] [BOT] 💾 Saved posted_jobs.json: 1555 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:52.115Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-15T03:24:52.115Z] [BOT] 📍 [ROUTING] "Director of Partnerships, North America" @ vercel
[2026-01-15T03:24:52.115Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T03:24:52.381Z] [BOT] ✅ Created forum post: 🏢 Director of Partnerships, North America @ vercel in #💲・sales-jobs
  ✅ Industry: Director of Partnerships, North America @ vercel
[2026-01-15T03:24:54.143Z] [BOT] ✅ Created forum post: 🏢 Director of Partnerships, North America @ vercel in #🌉・san-francisco
[2026-01-15T03:24:54.143Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T03:24:55.644Z] [BOT] 💾 Marked as posted: Director of Partnerships, North America @ vercel (instance #1)
[2026-01-15T03:24:55.644Z] [BOT] 💾 BEFORE ARCHIVING: 1556 jobs in database
[2026-01-15T03:24:55.645Z] [BOT] ✅ No jobs to archive (all 1556 jobs within 7-day window)
[2026-01-15T03:24:55.661Z] [BOT] 💾 Saved posted_jobs.json: 1556 active jobs
[2026-01-15T03:24:55.662Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T03:24:58.662Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T03:24:58.663Z] [BOT] ⏭️  Skipping duplicate: JID_115de03e (posted within 7 days)
[2026-01-15T03:24:58.663Z] [BOT] ⏭️  Skipping duplicate: JID_3c6b4448-valorization_r13974-1 (posted within 7 days)
[2026-01-15T03:24:58.663Z] [BOT] ⏭️  Skipping duplicate: JID_62eab69f-cx_1-job-2708 (posted within 7 days)
[2026-01-15T03:24:58.663Z] [BOT] ⏭️  Skipping duplicate: JID_2043beef (posted within 7 days)
[2026-01-15T03:24:58.664Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_43cf2c69-engineer_req_0000072889-2 (posted within 7 days)
[2026-01-15T03:24:58.664Z] [BOT] ⏭️  Skipping duplicate: JID_3a7bd095-kbr_careers-JID_aa0e9bca-engineer_r2115179 (posted within 7 days)
[2026-01-15T03:24:58.664Z] [BOT] ⏭️  Skipping duplicate: JID_1a203fbb (posted within 7 days)
[2026-01-15T03:24:58.664Z] [BOT] ⏭️  Skipping duplicate: JID_4a59af79-cx_1-job-1309 (posted within 7 days)
[2026-01-15T03:24:58.664Z] [BOT] ⏭️  Skipping duplicate: JID_329e3b16 (posted within 7 days)
[2026-01-15T03:24:58.664Z] [BOT] ⏭️  Skipping duplicate: JID_180b7712 (posted within 7 days)
[2026-01-15T03:24:58.785Z] [BOT] ✅ Loaded pending queue: 2723 total (2703 pending, 20 enriched, 0 posted)
[2026-01-15T03:24:58.953Z] [BOT] ✅ Saved pending queue: 2723 total (2703 pending, 10 enriched, 10 posted)
[2026-01-15T03:24:58.953Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T03:24:59.009Z] [BOT] 📂 Loaded 3725 existing routing entries
[2026-01-15T03:24:59.073Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T03:24:59.073Z] [BOT] Total entries: 3735
   Timestamp: 2026-01-15T03:24:59.056Z
[2026-01-15T03:24:59.074Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
[2026-01-15T03:24:59.074Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T03:24:59.074Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T03:24:59.074Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 7 posts
[2026-01-15T03:24:59.074Z] [BOT] 2. #💻・remote-usa: 5 posts
     3. #🌉・san-francisco: 2 posts
     4. #🤠・austin: 2 posts
     5. #🌆・chicago: 1 posts
[2026-01-15T03:24:59.075Z] [BOT] [STATS] Channel stats saved
[2026-01-15T03:25:01.098Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2371) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*