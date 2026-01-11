# Discord Bot Execution Audit
**Timestamp:** 2026-01-11T08:43:32.891Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-11T08:43:21.564Z] ========================================
[2026-01-11T08:43:21.566Z] Discord Bot Execution Log
[2026-01-11T08:43:21.566Z] Environment: GitHub Actions
[2026-01-11T08:43:21.566Z] Node Version: v20.19.6
[2026-01-11T08:43:21.566Z] ========================================
[2026-01-11T08:43:21.566Z] Environment Variables Check:
[2026-01-11T08:43:21.566Z] DISCORD_TOKEN: ✅ Set
[2026-01-11T08:43:21.566Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.566Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-11T08:43:21.567Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-11T08:43:21.567Z] 
Multi-Channel Configuration:
[2026-01-11T08:43:21.567Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.567Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.567Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.567Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.567Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.567Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.567Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.567Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.567Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-11T08:43:21.567Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-11T08:43:21.567Z] 
Data Files Check:
[2026-01-11T08:43:21.568Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114182 bytes)
[2026-01-11T08:43:21.571Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 394771 bytes)
[2026-01-11T08:43:21.571Z] 
========================================
[2026-01-11T08:43:21.571Z] Starting Enhanced Discord Bot...
[2026-01-11T08:43:21.571Z] ========================================
[2026-01-11T08:43:22.095Z] [BOT] ✅ Loaded V2 database: 724 jobs
[2026-01-11T08:43:23.062Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-11T08:43:23.063Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-11T08:43:23.063Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-11T08:43:23.073Z] [BOT] ✅ Loaded pending queue: 254 total (234 pending, 20 enriched, 0 posted)
[2026-01-11T08:43:23.073Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Microsoft
[2026-01-11T08:43:23.074Z] [BOT] ⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
[2026-01-11T08:43:23.074Z] [BOT] ⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
[2026-01-11T08:43:23.074Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-11T08:43:23.075Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
[2026-01-11T08:43:23.075Z] [BOT] ⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
[2026-01-11T08:43:23.075Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
[2026-01-11T08:43:23.075Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer - Multiple Levels Available at Allstate Insurance Company
⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
[2026-01-11T08:43:23.075Z] [BOT] ⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-11T08:43:23.075Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-11T08:43:23.075Z] [BOT] ⏭️  Skipping duplicate: JID_74f162ca-_r-48003-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 2 - Multiple Teams at The Travelers Companies
[2026-01-11T08:43:23.076Z] [BOT] ⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
[2026-01-11T08:43:23.076Z] [BOT] ⏭️ Skipping already posted: Full Stack Software Engineer - Starshield at SpaceX
[2026-01-11T08:43:23.076Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate - Environmental Engineering - Geology / Scientist at ERM
[2026-01-11T08:43:23.076Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
[2026-01-11T08:43:23.076Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-11T08:43:23.076Z] [BOT] ⏭️  Skipping duplicate: JID_fa4b2a4c-_r10228-1 (posted within 7 days)
⏭️ Skipping already posted: Analyst Geospatial - GIS at Invenergy
[2026-01-11T08:43:23.076Z] [BOT] ⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
⏭️  Skipping duplicate: JID_73fc7f0e (posted within 7 days)
[2026-01-11T08:43:23.076Z] [BOT] ⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
⏭️  Skipping duplicate: JID_2ea70d65-mathematics_r138207 (posted within 7 days)
⏭️ Skipping already posted: Postdoctoral Research Associate - Mathematics at Northeastern University
[2026-01-11T08:43:23.076Z] [BOT] ⏭️  Skipping duplicate: JID_e3eae60c (posted within 7 days)
⏭️ Skipping already posted: ROLE_9041ccc4 at NV5 Global
[2026-01-11T08:43:23.076Z] [BOT] ⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
[2026-01-11T08:43:23.076Z] [BOT] ⏭️ Skipping already posted: ROLE_a044eb04 at Westinghouse Electric Company
⏭️  Skipping duplicate: JID_777c5169 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Clay
📬 Found 1 new jobs (19 already posted)...
[2026-01-11T08:43:23.077Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-11T08:43:23.077Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-11T08:43:23.078Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-11T08:43:23.080Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
[2026-01-11T08:43:23.080Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-11T08:43:23.085Z] [BOT ERROR] (node:3083) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-11T08:43:23.419Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-01-11T08:43:25.136Z] [BOT] ✅ Created forum post: 🟦 Software Engineer @ ORG_c7bac469 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2026-01-11T08:43:26.637Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-11T08:43:26.637Z] [BOT] 💾 BEFORE ARCHIVING: 725 jobs in database
[2026-01-11T08:43:26.638Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-11T08:43:26.643Z] [BOT] 📦 Archived 34 jobs to 2026-01.json (34 total in archive)
[2026-01-11T08:43:26.643Z] [BOT] ✅ Archiving complete: 34 archived, 691 active
[2026-01-11T08:43:26.649Z] [BOT] 💾 Saved posted_jobs.json: 691 active jobs
[2026-01-11T08:43:26.649Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-11T08:43:29.650Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-11T08:43:29.650Z] [BOT] ⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
[2026-01-11T08:43:29.662Z] [BOT] ✅ Loaded pending queue: 254 total (234 pending, 20 enriched, 0 posted)
[2026-01-11T08:43:29.675Z] [BOT] ✅ Saved pending queue: 254 total (234 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-11T08:43:29.728Z] [BOT] 📂 Loaded 2540 existing routing entries
[2026-01-11T08:43:29.787Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2541
[2026-01-11T08:43:29.787Z] [BOT] Timestamp: 2026-01-11T08:43:29.777Z
[2026-01-11T08:43:29.788Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1d8ebaf0.jsonl
[2026-01-11T08:43:29.788Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-11T08:43:29.788Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-11T08:43:29.788Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🖥️・redmond: 1 posts
[2026-01-11T08:43:29.788Z] [BOT] [STATS] Channel stats saved
[2026-01-11T08:43:31.802Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3083) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*