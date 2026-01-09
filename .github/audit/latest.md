# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T08:06:52.821Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 15
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T08:06:29.240Z] ========================================
[2026-01-09T08:06:29.242Z] Discord Bot Execution Log
[2026-01-09T08:06:29.242Z] Environment: GitHub Actions
[2026-01-09T08:06:29.242Z] Node Version: v20.19.6
[2026-01-09T08:06:29.242Z] ========================================
[2026-01-09T08:06:29.242Z] Environment Variables Check:
[2026-01-09T08:06:29.242Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T08:06:29.242Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.242Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T08:06:29.243Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T08:06:29.243Z] 
Multi-Channel Configuration:
[2026-01-09T08:06:29.243Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.243Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.243Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.243Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.243Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.243Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.243Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.243Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.243Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T08:06:29.243Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T08:06:29.243Z] 
Data Files Check:
[2026-01-09T08:06:29.244Z] .github/data/new_jobs.json: ✅ Exists (10 items, 123603 bytes)
[2026-01-09T08:06:29.250Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 771160 bytes)
[2026-01-09T08:06:29.250Z] 
========================================
[2026-01-09T08:06:29.250Z] Starting Enhanced Discord Bot...
[2026-01-09T08:06:29.250Z] ========================================
[2026-01-09T08:06:29.787Z] [BOT] ✅ Loaded V2 database: 1499 jobs
[2026-01-09T08:06:30.355Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T08:06:30.355Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T08:06:30.355Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T08:06:30.367Z] [BOT] ✅ Loaded pending queue: 219 total (199 pending, 20 enriched, 0 posted)
[2026-01-09T08:06:30.367Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer Entry Level at USAA
[2026-01-09T08:06:30.368Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
[2026-01-09T08:06:30.369Z] [BOT] ⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T08:06:30.369Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
[2026-01-09T08:06:30.369Z] [BOT] ⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
[2026-01-09T08:06:30.370Z] [BOT] ⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
[2026-01-09T08:06:30.370Z] [BOT] ⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T08:06:30.370Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
[2026-01-09T08:06:30.370Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T08:06:30.370Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T08:06:30.371Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
[2026-01-09T08:06:30.371Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
[2026-01-09T08:06:30.371Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
[2026-01-09T08:06:30.371Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
[2026-01-09T08:06:30.371Z] [BOT] ⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
[2026-01-09T08:06:30.371Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
📬 Found 5 new jobs (15 already posted)...
[2026-01-09T08:06:30.371Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2026-01-09T08:06:30.371Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-09T08:06:30.372Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-09T08:06:30.372Z] [BOT] ⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T08:06:30.373Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-09T08:06:30.374Z] [BOT] 📍 [ROUTING] "Data Engineer Entry Level" @ ORG_7854eeec
[2026-01-09T08:06:30.375Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-09T08:06:30.379Z] [BOT ERROR] (node:3143) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T08:06:30.687Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Entry Level @ ORG_7854eeec in #📈・JID_fb739488
[2026-01-09T08:06:30.688Z] [BOT] ✅ Industry: Data Engineer Entry Level @ ORG_7854eeec
[2026-01-09T08:06:32.357Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Entry Level @ ORG_7854eeec in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-09T08:06:33.859Z] [BOT] 💾 Marked as posted: Data Engineer Entry Level @ ORG_7854eeec (instance #1)
[2026-01-09T08:06:33.859Z] [BOT] 💾 BEFORE ARCHIVING: 1500 jobs in database
[2026-01-09T08:06:33.861Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T08:06:33.865Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T08:06:33.865Z] [BOT] ✅ Archiving complete: 1 archived, 1499 active
[2026-01-09T08:06:33.879Z] [BOT] 💾 Saved posted_jobs.json: 1499 active jobs
[2026-01-09T08:06:33.879Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T08:06:36.880Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-09T08:06:36.881Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_81f16575ington Ingalls Industries
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-09T08:06:36.881Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-09T08:06:37.082Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_81f16575ington Ingalls Industries in #🤖・ai-jobs
[2026-01-09T08:06:37.082Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_81f16575ington Ingalls Industries
[2026-01-09T08:06:38.774Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_81f16575ington Ingalls Industries in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T08:06:40.275Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_81f16575ington Ingalls Industries (instance #1)
[2026-01-09T08:06:40.275Z] [BOT] 💾 BEFORE ARCHIVING: 1500 jobs in database
[2026-01-09T08:06:40.276Z] [BOT] ✅ No jobs to archive (all 1500 jobs within 7-day window)
[2026-01-09T08:06:40.287Z] [BOT] 💾 Saved posted_jobs.json: 1500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T08:06:40.287Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_81f16575ington Ingalls Industries (instance #1)
[2026-01-09T08:06:40.287Z] [BOT] 💾 BEFORE ARCHIVING: 1501 jobs in database
[2026-01-09T08:06:40.288Z] [BOT] ✅ No jobs to archive (all 1501 jobs within 7-day window)
[2026-01-09T08:06:40.298Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
[2026-01-09T08:06:40.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T08:06:43.298Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-09T08:06:43.300Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Direct College Hire" @ ORG_89135357 Airlines
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T08:06:43.570Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Direct College Hire @ ORG_89135357 Airlines in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Direct College Hire @ ORG_89135357 Airlines
[2026-01-09T08:06:45.308Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer - Direct College Hire @ ORG_89135357 Airlines in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-09T08:06:46.810Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Direct College Hire @ ORG_89135357 Airlines (instance #1)
[2026-01-09T08:06:46.810Z] [BOT] 💾 BEFORE ARCHIVING: 1502 jobs in database
[2026-01-09T08:06:46.811Z] [BOT] ✅ No jobs to archive (all 1502 jobs within 7-day window)
[2026-01-09T08:06:46.821Z] [BOT] 💾 Saved posted_jobs.json: 1502 active jobs
[2026-01-09T08:06:46.821Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T08:06:46.821Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Direct College Hire @ ORG_89135357 Airlines (instance #1)
[2026-01-09T08:06:46.822Z] [BOT] 💾 BEFORE ARCHIVING: 1503 jobs in database
[2026-01-09T08:06:46.823Z] [BOT] ✅ No jobs to archive (all 1503 jobs within 7-day window)
[2026-01-09T08:06:46.832Z] [BOT] 💾 Saved posted_jobs.json: 1503 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T08:06:49.833Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-09T08:06:49.834Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
[2026-01-09T08:06:49.834Z] [BOT] ⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
[2026-01-09T08:06:49.835Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
[2026-01-09T08:06:49.850Z] [BOT] ✅ Loaded pending queue: 219 total (199 pending, 20 enriched, 0 posted)
[2026-01-09T08:06:49.868Z] [BOT] ✅ Saved pending queue: 219 total (199 pending, 17 enriched, 3 posted)
[2026-01-09T08:06:49.868Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T08:06:49.925Z] [BOT] 📂 Loaded 2486 existing routing entries
[2026-01-09T08:06:49.983Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 2489
[2026-01-09T08:06:49.984Z] [BOT] Timestamp: 2026-01-09T08:06:49.972Z
[2026-01-09T08:06:49.984Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 21
   Successful: 6
   Failed: 0
   Skipped: 15
[2026-01-09T08:06:49.984Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-09T08:06:49.985Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 6
   Top channels:
     1. #📈・JID_fb739488: 1 posts
[2026-01-09T08:06:49.985Z] [BOT] 2. #🤠・austin: 1 posts
     3. #🤖・ai-jobs: 1 posts
     4. #💻・remote-usa: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-09T08:06:49.985Z] [BOT] [STATS] Channel stats saved
[2026-01-09T08:06:52.000Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3143) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*