# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T03:23:37.286Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T03:23:19.304Z] ========================================
[2026-01-09T03:23:19.306Z] Discord Bot Execution Log
[2026-01-09T03:23:19.306Z] Environment: GitHub Actions
[2026-01-09T03:23:19.306Z] Node Version: v20.19.6
[2026-01-09T03:23:19.306Z] ========================================
[2026-01-09T03:23:19.306Z] Environment Variables Check:
[2026-01-09T03:23:19.306Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T03:23:19.306Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.306Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T03:23:19.306Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T03:23:19.306Z] 
Multi-Channel Configuration:
[2026-01-09T03:23:19.306Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.307Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.307Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.307Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.307Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.307Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.307Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.307Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.307Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T03:23:19.307Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T03:23:19.307Z] 
Data Files Check:
[2026-01-09T03:23:19.308Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114372 bytes)
[2026-01-09T03:23:19.314Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 768549 bytes)
[2026-01-09T03:23:19.314Z] 
========================================
[2026-01-09T03:23:19.314Z] Starting Enhanced Discord Bot...
[2026-01-09T03:23:19.314Z] ========================================
[2026-01-09T03:23:19.875Z] [BOT] ✅ Loaded V2 database: 1494 jobs
[2026-01-09T03:23:20.716Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T03:23:20.716Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T03:23:20.716Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T03:23:20.723Z] [BOT] ✅ Loaded pending queue: 207 total (187 pending, 20 enriched, 0 posted)
[2026-01-09T03:23:20.723Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T03:23:20.726Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
[2026-01-09T03:23:20.726Z] [BOT] ⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
[2026-01-09T03:23:20.726Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
[2026-01-09T03:23:20.726Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
[2026-01-09T03:23:20.726Z] [BOT] ⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
[2026-01-09T03:23:20.726Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_7b17b840-entry_j00173791 (posted within 7 days)
⏭️ Skipping already posted: Data Processing Specialist - Entry at Equifax
[2026-01-09T03:23:20.727Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
[2026-01-09T03:23:20.727Z] [BOT] ⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
[2026-01-09T03:23:20.727Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
[2026-01-09T03:23:20.727Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
⏭️ Skipping already posted: Atmospheric Scientist – Associate or Mid-Level at The Boeing Company
[2026-01-09T03:23:20.727Z] [BOT] ⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9921d7a0 at Wing
[2026-01-09T03:23:20.727Z] [BOT] ⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
⏭️ Skipping already posted: Data Engineer 1 - Aws - Python at The Travelers Companies
[2026-01-09T03:23:20.728Z] [BOT] ⏭️  Skipping duplicate: JID_d37cac04-_r-48615 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Aws - Node at The Travelers Companies
[2026-01-09T03:23:20.728Z] [BOT] ⏭️  Skipping duplicate: JID_016b7cfb-_r-48474 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - .Net - Node.js','React at The Travelers Companies
[2026-01-09T03:23:20.728Z] [BOT] ⏭️  Skipping duplicate: JID_b3c53ec8 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Direct Issuance at StubHub
[2026-01-09T03:23:20.728Z] [BOT] ⏭️  Skipping duplicate: JID_7cf3eb12 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New College Graduate at Vectra
⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-78241 (posted within 7 days)
⏭️ Skipping already posted: Analyst 1 – Labor Analytics - Corporate - Las Vegas at Caesars Entertainment
📬 Found 3 new jobs (17 already posted)...
📋 After blacklist filter: 3 jobs (0 blacklisted)
📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-09T03:23:20.729Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-09T03:23:20.729Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T03:23:20.731Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-09T03:23:20.733Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Service Mesh" @ ORG_0bbe3cb1
[2026-01-09T03:23:20.733Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T03:23:20.739Z] [BOT ERROR] (node:3510) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T03:23:20.954Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Service Mesh @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-09T03:23:20.954Z] [BOT] ✅ Industry: Software Engineer 1 - Service Mesh @ ORG_0bbe3cb1
[2026-01-09T03:23:22.795Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Service Mesh @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-09T03:23:24.296Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Service Mesh @ ORG_0bbe3cb1 (instance #1)
[2026-01-09T03:23:24.296Z] [BOT] 💾 BEFORE ARCHIVING: 1495 jobs in database
[2026-01-09T03:23:24.297Z] [BOT] ✅ No jobs to archive (all 1495 jobs within 7-day window)
[2026-01-09T03:23:24.312Z] [BOT] 💾 Saved posted_jobs.json: 1495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T03:23:24.314Z] [BOT] 📍 [ROUTING] "Newgrad Generalist Engineer" @ ORG_37e12d0f
[2026-01-09T03:23:24.314Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T03:23:24.467Z] [BOT] ✅ Created forum post: 🏢 Newgrad Generalist Engineer @ ORG_37e12d0f in #💻・tech-jobs
[2026-01-09T03:23:24.468Z] [BOT] ✅ Industry: Newgrad Generalist Engineer @ ORG_37e12d0f
[2026-01-09T03:23:26.350Z] [BOT] ✅ Created forum post: 🏢 Newgrad Generalist Engineer @ ORG_37e12d0f in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T03:23:27.852Z] [BOT] 💾 Marked as posted: Newgrad Generalist Engineer @ ORG_37e12d0f (instance #1)
[2026-01-09T03:23:27.852Z] [BOT] 💾 BEFORE ARCHIVING: 1496 jobs in database
[2026-01-09T03:23:27.854Z] [BOT] ✅ No jobs to archive (all 1496 jobs within 7-day window)
[2026-01-09T03:23:27.865Z] [BOT] 💾 Saved posted_jobs.json: 1496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T03:23:27.865Z] [BOT] 📍 [ROUTING] "Software Developer Associate" @ ORG_c910d474 Dynamics Information Technology
[2026-01-09T03:23:27.865Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T03:23:28.041Z] [BOT] ✅ Created forum post: 🏢 Software Developer Associate @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2026-01-09T03:23:28.042Z] [BOT] ✅ Industry: Software Developer Associate @ ORG_c910d474 Dynamics Information Technology
[2026-01-09T03:23:29.818Z] [BOT] ✅ Created forum post: 🏢 Software Developer Associate @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T03:23:31.320Z] [BOT] 💾 Marked as posted: Software Developer Associate @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-09T03:23:31.320Z] [BOT] 💾 BEFORE ARCHIVING: 1497 jobs in database
[2026-01-09T03:23:31.321Z] [BOT] ✅ No jobs to archive (all 1497 jobs within 7-day window)
[2026-01-09T03:23:31.332Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T03:23:34.333Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-09T03:23:34.334Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
[2026-01-09T03:23:34.334Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
[2026-01-09T03:23:34.334Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
[2026-01-09T03:23:34.344Z] [BOT] ✅ Loaded pending queue: 207 total (187 pending, 20 enriched, 0 posted)
[2026-01-09T03:23:34.365Z] [BOT] ✅ Saved pending queue: 207 total (187 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T03:23:34.422Z] [BOT] 📂 Loaded 2475 existing routing entries
[2026-01-09T03:23:34.481Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 2478
   Timestamp: 2026-01-09T03:23:34.469Z
[2026-01-09T03:23:34.481Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 23
[2026-01-09T03:23:34.482Z] [BOT] Successful: 6
   Failed: 0
   Skipped: 17
[2026-01-09T03:23:34.482Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 6
   Channels used: 4
[2026-01-09T03:23:34.482Z] [BOT] Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #🌄・mountain-view: 1 posts
     3. #🌉・san-francisco: 1 posts
[2026-01-09T03:23:34.482Z] [BOT] 4. #💻・remote-usa: 1 posts
[2026-01-09T03:23:34.482Z] [BOT] [STATS] Channel stats saved
[2026-01-09T03:23:36.498Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3510) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*