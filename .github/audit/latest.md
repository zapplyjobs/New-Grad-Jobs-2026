# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T03:57:34.899Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 15
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T03:57:14.516Z] ========================================
[2026-01-09T03:57:14.518Z] Discord Bot Execution Log
[2026-01-09T03:57:14.518Z] Environment: GitHub Actions
[2026-01-09T03:57:14.518Z] Node Version: v20.19.6
[2026-01-09T03:57:14.518Z] ========================================
[2026-01-09T03:57:14.518Z] Environment Variables Check:
[2026-01-09T03:57:14.518Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T03:57:14.518Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.518Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T03:57:14.519Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T03:57:14.519Z] 
Multi-Channel Configuration:
[2026-01-09T03:57:14.519Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.519Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.519Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.519Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.519Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.519Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.519Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.519Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.519Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T03:57:14.519Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T03:57:14.519Z] 
Data Files Check:
[2026-01-09T03:57:14.520Z] .github/data/new_jobs.json: ✅ Exists (10 items, 86297 bytes)
[2026-01-09T03:57:14.526Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 770407 bytes)
[2026-01-09T03:57:14.526Z] 
========================================
[2026-01-09T03:57:14.526Z] Starting Enhanced Discord Bot...
[2026-01-09T03:57:14.526Z] ========================================
[2026-01-09T03:57:15.039Z] [BOT] ✅ Loaded V2 database: 1497 jobs
[2026-01-09T03:57:15.536Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T03:57:15.536Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T03:57:15.537Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T03:57:15.544Z] [BOT] ✅ Loaded pending queue: 209 total (189 pending, 20 enriched, 0 posted)
[2026-01-09T03:57:15.544Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-09T03:57:15.545Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Cox
[2026-01-09T03:57:15.546Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
[2026-01-09T03:57:15.546Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T03:57:15.546Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
[2026-01-09T03:57:15.547Z] [BOT] ⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T03:57:15.547Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
[2026-01-09T03:57:15.547Z] [BOT] ⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
[2026-01-09T03:57:15.547Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
[2026-01-09T03:57:15.548Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
[2026-01-09T03:57:15.548Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-09T03:57:15.548Z] [BOT] ⏭️  Skipping duplicate: JID_7b17b840-entry_j00173791 (posted within 7 days)
⏭️ Skipping already posted: Data Processing Specialist - Entry at Equifax
[2026-01-09T03:57:15.548Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-09T03:57:15.548Z] [BOT] ⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-09T03:57:15.548Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
[2026-01-09T03:57:15.548Z] [BOT] ⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
[2026-01-09T03:57:15.548Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-09T03:57:15.548Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
[2026-01-09T03:57:15.549Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
⏭️ Skipping already posted: Atmospheric Scientist – Associate or Mid-Level at The Boeing Company
[2026-01-09T03:57:15.549Z] [BOT] ⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9921d7a0 at Wing
[2026-01-09T03:57:15.549Z] [BOT] ⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
⏭️ Skipping already posted: Data Engineer 1 - Aws - Python at The Travelers Companies
[2026-01-09T03:57:15.549Z] [BOT] 📬 Found 5 new jobs (15 already posted)...
[2026-01-09T03:57:15.549Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2026-01-09T03:57:15.549Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-09T03:57:15.550Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-09T03:57:15.550Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T03:57:15.551Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-09T03:57:15.552Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_bbacffd9
[2026-01-09T03:57:15.552Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T03:57:15.570Z] [BOT ERROR] (node:3469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T03:57:15.781Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・tech-jobs
[2026-01-09T03:57:15.781Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_bbacffd9
[2026-01-09T03:57:17.541Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T03:57:19.043Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_bbacffd9 (instance #1)
[2026-01-09T03:57:19.043Z] [BOT] 💾 BEFORE ARCHIVING: 1498 jobs in database
[2026-01-09T03:57:19.044Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T03:57:19.049Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T03:57:19.049Z] [BOT] ✅ Archiving complete: 1 archived, 1497 active
[2026-01-09T03:57:19.060Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
[2026-01-09T03:57:19.061Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T03:57:19.061Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Service Mesh" @ ORG_0bbe3cb1
[2026-01-09T03:57:19.061Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T03:57:19.200Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Service Mesh @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-09T03:57:19.200Z] [BOT] ✅ Industry: Software Engineer 1 - Service Mesh @ ORG_0bbe3cb1
[2026-01-09T03:57:20.831Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Service Mesh @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-09T03:57:22.333Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Service Mesh @ ORG_0bbe3cb1 (instance #1)
[2026-01-09T03:57:22.333Z] [BOT] 💾 BEFORE ARCHIVING: 1498 jobs in database
[2026-01-09T03:57:22.334Z] [BOT] ✅ No jobs to archive (all 1498 jobs within 7-day window)
[2026-01-09T03:57:22.344Z] [BOT] 💾 Saved posted_jobs.json: 1498 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T03:57:22.344Z] [BOT] 📍 [ROUTING] "Software Engineer - Identity Access Management" @ ORG_7bc88ebb
   Category: TECH (matched: "software")
[2026-01-09T03:57:22.344Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T03:57:22.672Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Identity Access Management @ ORG_7bc88ebb in #💻・tech-jobs
  ✅ Industry: Software Engineer - Identity Access Management @ ORG_7bc88ebb
[2026-01-09T03:57:24.329Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Identity Access Management @ ORG_7bc88ebb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T03:57:25.830Z] [BOT] 💾 Marked as posted: Software Engineer - Identity Access Management @ ORG_7bc88ebb (instance #1)
[2026-01-09T03:57:25.831Z] [BOT] 💾 BEFORE ARCHIVING: 1499 jobs in database
[2026-01-09T03:57:25.832Z] [BOT] ✅ No jobs to archive (all 1499 jobs within 7-day window)
[2026-01-09T03:57:25.842Z] [BOT] 💾 Saved posted_jobs.json: 1499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T03:57:25.844Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_49d2dc07
[2026-01-09T03:57:25.844Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T03:57:25.973Z] [BOT] ✅ Created forum post: 📦 Software Engineer 1 @ ORG_49d2dc07 in #💻・tech-jobs
[2026-01-09T03:57:25.973Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_49d2dc07
[2026-01-09T03:57:27.659Z] [BOT] ✅ Created forum post: 📦 Software Engineer 1 @ ORG_49d2dc07 in #🌧️・seattle
[2026-01-09T03:57:27.659Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-09T03:57:29.160Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_49d2dc07 (instance #1)
[2026-01-09T03:57:29.160Z] [BOT] 💾 BEFORE ARCHIVING: 1500 jobs in database
[2026-01-09T03:57:29.161Z] [BOT] ✅ No jobs to archive (all 1500 jobs within 7-day window)
[2026-01-09T03:57:29.171Z] [BOT] 💾 Saved posted_jobs.json: 1500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T03:57:29.171Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_49d2dc07 (instance #1)
[2026-01-09T03:57:29.171Z] [BOT] 💾 BEFORE ARCHIVING: 1501 jobs in database
[2026-01-09T03:57:29.172Z] [BOT] ✅ No jobs to archive (all 1501 jobs within 7-day window)
[2026-01-09T03:57:29.181Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
[2026-01-09T03:57:29.181Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T03:57:32.181Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-09T03:57:32.182Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202570283 (posted within 7 days)
[2026-01-09T03:57:32.182Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
[2026-01-09T03:57:32.182Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
[2026-01-09T03:57:32.182Z] [BOT] ⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
[2026-01-09T03:57:32.189Z] [BOT] ✅ Loaded pending queue: 209 total (189 pending, 20 enriched, 0 posted)
[2026-01-09T03:57:32.202Z] [BOT] ✅ Saved pending queue: 209 total (189 pending, 16 enriched, 4 posted)
[2026-01-09T03:57:32.203Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T03:57:32.266Z] [BOT] 📂 Loaded 2478 existing routing entries
[2026-01-09T03:57:32.320Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 2482
[2026-01-09T03:57:32.321Z] [BOT] Timestamp: 2026-01-09T03:57:32.309Z
[2026-01-09T03:57:32.321Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T03:57:32.321Z] [BOT] Total attempts: 23
   Successful: 8
   Failed: 0
   Skipped: 15
[2026-01-09T03:57:32.322Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 8
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 1 posts
     3. #🌄・mountain-view: 1 posts
     4. #🌉・san-francisco: 1 posts
     5. #🌧️・seattle: 1 posts
[2026-01-09T03:57:32.322Z] [BOT] [STATS] Channel stats saved
[2026-01-09T03:57:34.336Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*