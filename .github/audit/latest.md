# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T06:28:40.806Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T06:27:49.045Z] ========================================
[2026-01-15T06:27:49.047Z] Discord Bot Execution Log
[2026-01-15T06:27:49.047Z] Environment: GitHub Actions
[2026-01-15T06:27:49.047Z] Node Version: v20.19.6
[2026-01-15T06:27:49.047Z] ========================================
[2026-01-15T06:27:49.047Z] Environment Variables Check:
[2026-01-15T06:27:49.048Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T06:27:49.048Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.048Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T06:27:49.048Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T06:27:49.048Z] 
Multi-Channel Configuration:
[2026-01-15T06:27:49.048Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.048Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.048Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.048Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.048Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.048Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.049Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.049Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.049Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T06:27:49.049Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T06:27:49.049Z] 
Data Files Check:
[2026-01-15T06:27:49.050Z] .github/data/new_jobs.json: ✅ Exists (10 items, 52333 bytes)
[2026-01-15T06:27:49.056Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 870424 bytes)
[2026-01-15T06:27:49.056Z] 
========================================
[2026-01-15T06:27:49.056Z] Starting Enhanced Discord Bot...
[2026-01-15T06:27:49.056Z] ========================================
[2026-01-15T06:27:49.579Z] [BOT] ✅ Loaded V2 database: 1636 jobs
[2026-01-15T06:27:50.216Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T06:27:50.217Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T06:27:50.217Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T06:27:50.330Z] [BOT] ✅ Loaded pending queue: 2719 total (2699 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer Graduate - Data Platform - Global Live at TikTok
[2026-01-15T06:27:50.332Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T06:27:50.333Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T06:27:50.333Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T06:27:50.334Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T06:27:50.334Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-15T06:27:50.334Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T06:27:50.339Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T06:27:50.340Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - Data Platform - Global Live" @ ORG_1bb6fcfb
[2026-01-15T06:27:50.340Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T06:27:50.357Z] [BOT ERROR] (node:2401) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T06:27:50.532Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb in #📈・JID_fb739488
[2026-01-15T06:27:50.532Z] [BOT] ✅ Industry: Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb
[2026-01-15T06:27:52.239Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T06:27:53.740Z] [BOT] 💾 Marked as posted: Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb (instance #1)
[2026-01-15T06:27:53.740Z] [BOT] 💾 BEFORE ARCHIVING: 1637 jobs in database
[2026-01-15T06:27:53.742Z] [BOT] ✅ No jobs to archive (all 1637 jobs within 7-day window)
[2026-01-15T06:27:53.755Z] [BOT] 💾 Saved posted_jobs.json: 1637 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:27:53.756Z] [BOT] 📍 [ROUTING] "Data Science Manager, Safety" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-15T06:27:53.756Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T06:27:54.052Z] [BOT] ✅ Created forum post: 🏢 Data Science Manager, Safety @ discord in #📈・JID_fb739488
[2026-01-15T06:27:54.052Z] [BOT] ✅ Industry: Data Science Manager, Safety @ discord
[2026-01-15T06:27:55.721Z] [BOT] ✅ Created forum post: 🏢 Data Science Manager, Safety @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T06:27:57.221Z] [BOT] 💾 Marked as posted: Data Science Manager, Safety @ discord (instance #1)
[2026-01-15T06:27:57.222Z] [BOT] 💾 BEFORE ARCHIVING: 1638 jobs in database
[2026-01-15T06:27:57.223Z] [BOT] ✅ No jobs to archive (all 1638 jobs within 7-day window)
[2026-01-15T06:27:57.233Z] [BOT] 💾 Saved posted_jobs.json: 1638 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:28:00.233Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-15T06:28:00.235Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_3495e757 Cap Supply Holdings
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:28:00.532Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_3495e757 Cap Supply Holdings in #💻・tech-jobs
  ✅ Industry: Application Engineer @ ORG_3495e757 Cap Supply Holdings
[2026-01-15T06:28:02.211Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_3495e757 Cap Supply Holdings in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T06:28:03.714Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_3495e757 Cap Supply Holdings (instance #1)
[2026-01-15T06:28:03.714Z] [BOT] 💾 BEFORE ARCHIVING: 1639 jobs in database
[2026-01-15T06:28:03.716Z] [BOT] ✅ No jobs to archive (all 1639 jobs within 7-day window)
[2026-01-15T06:28:03.728Z] [BOT] 💾 Saved posted_jobs.json: 1639 active jobs
[2026-01-15T06:28:03.729Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T06:28:03.729Z] [BOT] 📍 [ROUTING] "Transportation Planner 1" @ ORG_f089eaef Baker International
[2026-01-15T06:28:03.729Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:28:03.948Z] [BOT] ✅ Created forum post: 🏢 Transportation Planner 1 @ ORG_f089eaef Baker International in #💻・tech-jobs
  ✅ Industry: Transportation Planner 1 @ ORG_f089eaef Baker International
[2026-01-15T06:28:05.642Z] [BOT] ✅ Created forum post: 🏢 Transportation Planner 1 @ ORG_f089eaef Baker International in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T06:28:07.143Z] [BOT] 💾 Marked as posted: Transportation Planner 1 @ ORG_f089eaef Baker International (instance #1)
[2026-01-15T06:28:07.144Z] [BOT] 💾 BEFORE ARCHIVING: 1640 jobs in database
[2026-01-15T06:28:07.145Z] [BOT] ✅ No jobs to archive (all 1640 jobs within 7-day window)
[2026-01-15T06:28:07.156Z] [BOT] 💾 Saved posted_jobs.json: 1640 active jobs
[2026-01-15T06:28:07.156Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T06:28:07.156Z] [BOT] 📍 [ROUTING] "Associate Firmware Engineer" @ ORG_9b9b6e44
[2026-01-15T06:28:07.156Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:28:07.427Z] [BOT] ✅ Created forum post: 🏢 Associate Firmware Engineer @ ORG_9b9b6e44 in #💻・tech-jobs
  ✅ Industry: Associate Firmware Engineer @ ORG_9b9b6e44
[2026-01-15T06:28:09.069Z] [BOT] ✅ Created forum post: 🏢 Associate Firmware Engineer @ ORG_9b9b6e44 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T06:28:10.570Z] [BOT] 💾 Marked as posted: Associate Firmware Engineer @ ORG_9b9b6e44 (instance #1)
[2026-01-15T06:28:10.571Z] [BOT] 💾 BEFORE ARCHIVING: 1641 jobs in database
[2026-01-15T06:28:10.572Z] [BOT] ✅ No jobs to archive (all 1641 jobs within 7-day window)
[2026-01-15T06:28:10.583Z] [BOT] 💾 Saved posted_jobs.json: 1641 active jobs
[2026-01-15T06:28:10.583Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T06:28:10.583Z] [BOT] 📍 [ROUTING] "Entry Level Developer - Contract" @ ORG_97f70c9d
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:28:10.855Z] [BOT] ✅ Created forum post: 🏢 Entry Level Developer - Contract @ ORG_97f70c9d in #💻・tech-jobs
  ✅ Industry: Entry Level Developer - Contract @ ORG_97f70c9d
[2026-01-15T06:28:12.739Z] [BOT] ✅ Created forum post: 🏢 Entry Level Developer - Contract @ ORG_97f70c9d in #💻・remote-usa
[2026-01-15T06:28:12.739Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T06:28:14.240Z] [BOT] 💾 Marked as posted: Entry Level Developer - Contract @ ORG_97f70c9d (instance #1)
[2026-01-15T06:28:14.240Z] [BOT] 💾 BEFORE ARCHIVING: 1642 jobs in database
[2026-01-15T06:28:14.241Z] [BOT] ✅ No jobs to archive (all 1642 jobs within 7-day window)
[2026-01-15T06:28:14.253Z] [BOT] 💾 Saved posted_jobs.json: 1642 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:28:14.254Z] [BOT] 📍 [ROUTING] "Customer Success Engineer" @ railway
[2026-01-15T06:28:14.254Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:28:14.404Z] [BOT] ✅ Created forum post: 🏢 Customer Success Engineer @ railway in #💻・tech-jobs
  ✅ Industry: Customer Success Engineer @ railway
[2026-01-15T06:28:16.055Z] [BOT] ✅ Created forum post: 🏢 Customer Success Engineer @ railway in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T06:28:17.556Z] [BOT] 💾 Marked as posted: Customer Success Engineer @ railway (instance #1)
[2026-01-15T06:28:17.557Z] [BOT] 💾 BEFORE ARCHIVING: 1643 jobs in database
[2026-01-15T06:28:17.558Z] [BOT] ✅ No jobs to archive (all 1643 jobs within 7-day window)
[2026-01-15T06:28:17.568Z] [BOT] 💾 Saved posted_jobs.json: 1643 active jobs
[2026-01-15T06:28:17.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T06:28:17.569Z] [BOT] 📍 [ROUTING] "Engineering Manager, Ads Formats" @ discord
[2026-01-15T06:28:17.569Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T06:28:18.020Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Ads Formats @ discord in #💻・tech-jobs
[2026-01-15T06:28:18.020Z] [BOT] ✅ Industry: Engineering Manager, Ads Formats @ discord
[2026-01-15T06:28:19.751Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Ads Formats @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T06:28:21.252Z] [BOT] 💾 Marked as posted: Engineering Manager, Ads Formats @ discord (instance #1)
[2026-01-15T06:28:21.253Z] [BOT] 💾 BEFORE ARCHIVING: 1644 jobs in database
[2026-01-15T06:28:21.254Z] [BOT] ✅ No jobs to archive (all 1644 jobs within 7-day window)
[2026-01-15T06:28:21.264Z] [BOT] 💾 Saved posted_jobs.json: 1644 active jobs
[2026-01-15T06:28:21.264Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T06:28:24.266Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-15T06:28:24.266Z] [BOT] 📍 [ROUTING] "FinOps Analyst" @ ORG_21db5199 International 
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-15T06:28:24.680Z] [BOT] ✅ Created forum post: 🏢 FinOps Analyst @ ORG_21db5199 International  in #📣・marketing-jobs
  ✅ Industry: FinOps Analyst @ ORG_21db5199 International
[2026-01-15T06:28:26.334Z] [BOT] ✅ Created forum post: 🏢 FinOps Analyst @ ORG_21db5199 International  in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T06:28:27.837Z] [BOT] 💾 Marked as posted: FinOps Analyst @ ORG_21db5199 International  (instance #1)
[2026-01-15T06:28:27.837Z] [BOT] 💾 BEFORE ARCHIVING: 1645 jobs in database
[2026-01-15T06:28:27.838Z] [BOT] ✅ No jobs to archive (all 1645 jobs within 7-day window)
[2026-01-15T06:28:27.848Z] [BOT] 💾 Saved posted_jobs.json: 1645 active jobs
[2026-01-15T06:28:27.848Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T06:28:30.849Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-15T06:28:30.849Z] [BOT] 📍 [ROUTING] "Physicist" @ ORG_b891e1e7 Technologies
   Category: HEALTHCARE (matched: "health")
[2026-01-15T06:28:30.849Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-15T06:28:31.184Z] [BOT] ✅ Created forum post: 🏢 Physicist @ ORG_b891e1e7 Technologies in #🩺・healthcare-jobs
[2026-01-15T06:28:31.184Z] [BOT] ✅ Industry: Physicist @ ORG_b891e1e7 Technologies
[2026-01-15T06:28:32.942Z] [BOT] ✅ Created forum post: 🏢 Physicist @ ORG_b891e1e7 Technologies in #💻・remote-usa
[2026-01-15T06:28:32.942Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T06:28:34.443Z] [BOT] 💾 Marked as posted: Physicist @ ORG_b891e1e7 Technologies (instance #1)
[2026-01-15T06:28:34.443Z] [BOT] 💾 BEFORE ARCHIVING: 1646 jobs in database
[2026-01-15T06:28:34.445Z] [BOT] ✅ No jobs to archive (all 1646 jobs within 7-day window)
[2026-01-15T06:28:34.458Z] [BOT] 💾 Saved posted_jobs.json: 1646 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T06:28:37.458Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T06:28:37.459Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_8454199c (posted within 7 days)
[2026-01-15T06:28:37.459Z] [BOT] ⏭️  Skipping duplicate: JID_ec17fa96-orlando_32822-application-engineer_wcjr-028621-1 (posted within 7 days)
[2026-01-15T06:28:37.459Z] [BOT] ⏭️  Skipping duplicate: JID_5000e541-cx_2-job-308745 (posted within 7 days)
[2026-01-15T06:28:37.459Z] [BOT] ⏭️  Skipping duplicate: JID_ca639877 (posted within 7 days)
[2026-01-15T06:28:37.459Z] [BOT] ⏭️  Skipping duplicate: JID_2cd9f2c0-analyst_jr2047-1 (posted within 7 days)
[2026-01-15T06:28:37.459Z] [BOT] ⏭️  Skipping duplicate: JID_397bad24-radiance_external-JID_828405a7-physicist_hr101844 (posted within 7 days)
[2026-01-15T06:28:37.459Z] [BOT] ⏭️  Skipping duplicate: JID_2f15b3ae-contract_jr-0774 (posted within 7 days)
[2026-01-15T06:28:37.459Z] [BOT] ⏭️  Skipping duplicate: JID_8ee8a4bf (posted within 7 days)
[2026-01-15T06:28:37.460Z] [BOT] ⏭️  Skipping duplicate: JID_e7f245fe (posted within 7 days)
[2026-01-15T06:28:37.460Z] [BOT] ⏭️  Skipping duplicate: JID_4aef016a (posted within 7 days)
[2026-01-15T06:28:37.588Z] [BOT] ✅ Loaded pending queue: 2719 total (2699 pending, 20 enriched, 0 posted)
[2026-01-15T06:28:37.750Z] [BOT] ✅ Saved pending queue: 2719 total (2699 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T06:28:37.750Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T06:28:37.805Z] [BOT] 📂 Loaded 3815 existing routing entries
[2026-01-15T06:28:37.867Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T06:28:37.867Z] [BOT] Total entries: 3825
   Timestamp: 2026-01-15T06:28:37.851Z
[2026-01-15T06:28:37.867Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T06:28:37.868Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 6 posts
[2026-01-15T06:28:37.868Z] [BOT] 3. #🌉・san-francisco: 3 posts
     4. #📈・JID_fb739488: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-15T06:28:37.868Z] [BOT] [STATS] Channel stats saved
[2026-01-15T06:28:39.891Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2401) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*