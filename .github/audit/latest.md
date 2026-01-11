# Discord Bot Execution Audit
**Timestamp:** 2026-01-11T07:38:39.932Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-11T07:38:29.424Z] ========================================
[2026-01-11T07:38:29.426Z] Discord Bot Execution Log
[2026-01-11T07:38:29.426Z] Environment: GitHub Actions
[2026-01-11T07:38:29.426Z] Node Version: v20.19.6
[2026-01-11T07:38:29.426Z] ========================================
[2026-01-11T07:38:29.426Z] Environment Variables Check:
[2026-01-11T07:38:29.426Z] DISCORD_TOKEN: ✅ Set
[2026-01-11T07:38:29.426Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.426Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-11T07:38:29.427Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-11T07:38:29.427Z] 
Multi-Channel Configuration:
[2026-01-11T07:38:29.427Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.427Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.427Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.427Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.427Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.427Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.427Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.427Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.427Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-11T07:38:29.427Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-11T07:38:29.427Z] 
Data Files Check:
[2026-01-11T07:38:29.428Z] .github/data/new_jobs.json: ✅ Exists (10 items, 117844 bytes)
[2026-01-11T07:38:29.432Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 437949 bytes)
[2026-01-11T07:38:29.432Z] 
========================================
[2026-01-11T07:38:29.432Z] Starting Enhanced Discord Bot...
[2026-01-11T07:38:29.432Z] ========================================
[2026-01-11T07:38:29.946Z] [BOT] ✅ Loaded V2 database: 813 jobs
[2026-01-11T07:38:30.626Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-11T07:38:30.626Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-11T07:38:30.626Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-11T07:38:30.638Z] [BOT] ✅ Loaded pending queue: 253 total (233 pending, 20 enriched, 0 posted)
[2026-01-11T07:38:30.639Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - AI Video Agent at OpusClip
[2026-01-11T07:38:30.640Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
[2026-01-11T07:38:30.640Z] [BOT] ⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-11T07:38:30.640Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
[2026-01-11T07:38:30.640Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-11T07:38:30.640Z] [BOT] ⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
[2026-01-11T07:38:30.641Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer - Multiple Levels Available at Allstate Insurance Company
⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-11T07:38:30.641Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
⏭️  Skipping duplicate: JID_74f162ca-_r-48003-1 (posted within 7 days)
[2026-01-11T07:38:30.641Z] [BOT] ⏭️ Skipping already posted: Software Engineer 2 - Multiple Teams at The Travelers Companies
[2026-01-11T07:38:30.641Z] [BOT] ⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
⏭️ Skipping already posted: Full Stack Software Engineer - Starshield at SpaceX
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate - Environmental Engineering - Geology / Scientist at ERM
[2026-01-11T07:38:30.641Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-11T07:38:30.642Z] [BOT] ⏭️  Skipping duplicate: JID_fa4b2a4c-_r10228-1 (posted within 7 days)
⏭️ Skipping already posted: Analyst Geospatial - GIS at Invenergy
⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-11T07:38:30.642Z] [BOT] ⏭️  Skipping duplicate: JID_73fc7f0e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
⏭️  Skipping duplicate: JID_2ea70d65-mathematics_r138207 (posted within 7 days)
[2026-01-11T07:38:30.642Z] [BOT] ⏭️ Skipping already posted: Postdoctoral Research Associate - Mathematics at Northeastern University
⏭️  Skipping duplicate: JID_e3eae60c (posted within 7 days)
⏭️ Skipping already posted: ROLE_9041ccc4 at NV5 Global
[2026-01-11T07:38:30.642Z] [BOT] ⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a044eb04 at Westinghouse Electric Company
⏭️  Skipping duplicate: JID_777c5169 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Clay
[2026-01-11T07:38:30.642Z] [BOT] ⏭️  Skipping duplicate: JID_73356eb6 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Entry at Jerry
📬 Found 1 new jobs (19 already posted)...
[2026-01-11T07:38:30.642Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-11T07:38:30.643Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-11T07:38:30.643Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-11T07:38:30.643Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-11T07:38:30.644Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-11T07:38:30.645Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Video Agent" @ ORG_89070b6e
[2026-01-11T07:38:30.645Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-11T07:38:30.650Z] [BOT ERROR] (node:3082) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-11T07:38:30.910Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Video Agent @ ORG_89070b6e in #💻・tech-jobs
[2026-01-11T07:38:30.911Z] [BOT] ✅ Industry: Software Engineer - AI Video Agent @ ORG_89070b6e
[2026-01-11T07:38:32.640Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Video Agent @ ORG_89070b6e in #🌉・san-francisco
[2026-01-11T07:38:32.640Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-11T07:38:34.140Z] [BOT] 💾 Marked as posted: Software Engineer - AI Video Agent @ ORG_89070b6e (instance #1)
[2026-01-11T07:38:34.140Z] [BOT] 💾 BEFORE ARCHIVING: 814 jobs in database
[2026-01-11T07:38:34.141Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-11T07:38:34.146Z] [BOT] 📦 Archived 90 jobs to 2026-01.json (90 total in archive)
[2026-01-11T07:38:34.146Z] [BOT] ✅ Archiving complete: 90 archived, 724 active
[2026-01-11T07:38:34.152Z] [BOT] 💾 Saved posted_jobs.json: 724 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-11T07:38:37.152Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-11T07:38:37.153Z] [BOT] ⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
[2026-01-11T07:38:37.162Z] [BOT] ✅ Loaded pending queue: 253 total (233 pending, 20 enriched, 0 posted)
[2026-01-11T07:38:37.180Z] [BOT] ✅ Saved pending queue: 253 total (233 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-11T07:38:37.181Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-11T07:38:37.230Z] [BOT] 📂 Loaded 2539 existing routing entries
[2026-01-11T07:38:37.289Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-11T07:38:37.289Z] [BOT] Total entries: 2540
   Timestamp: 2026-01-11T07:38:37.275Z
[2026-01-11T07:38:37.290Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1d8ebaf0.jsonl
   Total attempts: 21
   Successful: 2
[2026-01-11T07:38:37.290Z] [BOT] Failed: 0
   Skipped: 19
[2026-01-11T07:38:37.290Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-11T07:38:37.290Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-11T07:38:37.290Z] [BOT] 2. #🌉・san-francisco: 1 posts
[2026-01-11T07:38:37.290Z] [BOT] [STATS] Channel stats saved
[2026-01-11T07:38:39.305Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3082) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*