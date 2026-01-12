# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T00:48:52.075Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T00:48:41.248Z] ========================================
[2026-01-12T00:48:41.249Z] Discord Bot Execution Log
[2026-01-12T00:48:41.249Z] Environment: GitHub Actions
[2026-01-12T00:48:41.249Z] Node Version: v20.19.6
[2026-01-12T00:48:41.249Z] ========================================
[2026-01-12T00:48:41.249Z] Environment Variables Check:
[2026-01-12T00:48:41.250Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T00:48:41.250Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T00:48:41.250Z] 
Multi-Channel Configuration:
[2026-01-12T00:48:41.250Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T00:48:41.250Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T00:48:41.250Z] 
Data Files Check:
[2026-01-12T00:48:41.252Z] .github/data/new_jobs.json: ✅ Exists (10 items, 123193 bytes)
[2026-01-12T00:48:41.255Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 378271 bytes)
[2026-01-12T00:48:41.255Z] 
========================================
[2026-01-12T00:48:41.255Z] Starting Enhanced Discord Bot...
[2026-01-12T00:48:41.255Z] ========================================
[2026-01-12T00:48:41.730Z] [BOT] ✅ Loaded V2 database: 691 jobs
[2026-01-12T00:48:42.648Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T00:48:42.648Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T00:48:42.649Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T00:48:42.664Z] [BOT] ✅ Loaded pending queue: 255 total (235 pending, 20 enriched, 0 posted)
[2026-01-12T00:48:42.665Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Applied Safety Research Engineer, Safeguards at anthropic
[2026-01-12T00:48:42.666Z] [BOT] ⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
[2026-01-12T00:48:42.666Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
[2026-01-12T00:48:42.666Z] [BOT] ⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
[2026-01-12T00:48:42.666Z] [BOT] ⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
[2026-01-12T00:48:42.666Z] [BOT] ⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-12T00:48:42.667Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T00:48:42.667Z] [BOT] ⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer - Multiple Levels Available at Allstate Insurance Company
[2026-01-12T00:48:42.667Z] [BOT] ⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-12T00:48:42.667Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-12T00:48:42.667Z] [BOT] ⏭️  Skipping duplicate: JID_74f162ca-_r-48003-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 2 - Multiple Teams at The Travelers Companies
⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
⏭️ Skipping already posted: Full Stack Software Engineer - Starshield at SpaceX
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
[2026-01-12T00:48:42.667Z] [BOT] ⏭️ Skipping already posted: Consulting Associate - Environmental Engineering - Geology / Scientist at ERM
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-12T00:48:42.667Z] [BOT] ⏭️  Skipping duplicate: JID_fa4b2a4c-_r10228-1 (posted within 7 days)
⏭️ Skipping already posted: Analyst Geospatial - GIS at Invenergy
[2026-01-12T00:48:42.667Z] [BOT] ⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
[2026-01-12T00:48:42.667Z] [BOT] ⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-12T00:48:42.667Z] [BOT] ⏭️  Skipping duplicate: JID_73fc7f0e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-12T00:48:42.668Z] [BOT] ⏭️  Skipping duplicate: JID_2ea70d65-mathematics_r138207 (posted within 7 days)
⏭️ Skipping already posted: Postdoctoral Research Associate - Mathematics at Northeastern University
[2026-01-12T00:48:42.668Z] [BOT] ⏭️  Skipping duplicate: JID_e3eae60c (posted within 7 days)
⏭️ Skipping already posted: ROLE_9041ccc4 at NV5 Global
⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a044eb04 at Westinghouse Electric Company
📬 Found 1 new jobs (19 already posted)...
[2026-01-12T00:48:42.668Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-12T00:48:42.668Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-12T00:48:42.669Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T00:48:42.669Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-12T00:48:42.672Z] [BOT] 📍 [ROUTING] "Applied Safety Research Engineer, Safeguards" @ anthropic
[2026-01-12T00:48:42.672Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T00:48:42.672Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T00:48:42.677Z] [BOT ERROR] (node:3071) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T00:48:42.847Z] [BOT] ✅ Created forum post: 🏢 Applied Safety Research Engineer, Safeguards @ anthropic in #🤖・ai-jobs
  ✅ Industry: Applied Safety Research Engineer, Safeguards @ anthropic
[2026-01-12T00:48:44.651Z] [BOT] ✅ Created forum post: 🏢 Applied Safety Research Engineer, Safeguards @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T00:48:46.152Z] [BOT] 💾 Marked as posted: Applied Safety Research Engineer, Safeguards @ anthropic (instance #1)
[2026-01-12T00:48:46.152Z] [BOT] 💾 BEFORE ARCHIVING: 692 jobs in database
[2026-01-12T00:48:46.153Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T00:48:46.159Z] [BOT] 📦 Archived 312 jobs to 2026-01.json (312 total in archive)
[2026-01-12T00:48:46.159Z] [BOT] ✅ Archiving complete: 312 archived, 380 active
[2026-01-12T00:48:46.163Z] [BOT] 💾 Saved posted_jobs.json: 380 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T00:48:49.164Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-12T00:48:49.165Z] [BOT] ⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
[2026-01-12T00:48:49.178Z] [BOT] ✅ Loaded pending queue: 255 total (235 pending, 20 enriched, 0 posted)
[2026-01-12T00:48:49.198Z] [BOT] ✅ Saved pending queue: 255 total (235 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T00:48:49.258Z] [BOT] 📂 Loaded 2541 existing routing entries
[2026-01-12T00:48:49.320Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2542
   Timestamp: 2026-01-12T00:48:49.307Z
[2026-01-12T00:48:49.321Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T00:48:49.321Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-12T00:48:49.321Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-12T00:48:49.321Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-12T00:48:49.322Z] [BOT] [STATS] Channel stats saved
[2026-01-12T00:48:51.337Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3071) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*