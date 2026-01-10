# Discord Bot Execution Audit
**Timestamp:** 2026-01-10T23:51:35.398Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-10T23:51:23.886Z] ========================================
[2026-01-10T23:51:23.888Z] Discord Bot Execution Log
[2026-01-10T23:51:23.888Z] Environment: GitHub Actions
[2026-01-10T23:51:23.888Z] Node Version: v20.19.6
[2026-01-10T23:51:23.888Z] ========================================
[2026-01-10T23:51:23.888Z] Environment Variables Check:
[2026-01-10T23:51:23.888Z] DISCORD_TOKEN: ✅ Set
[2026-01-10T23:51:23.888Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-10T23:51:23.889Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-10T23:51:23.889Z] 
Multi-Channel Configuration:
[2026-01-10T23:51:23.889Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-10T23:51:23.889Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-10T23:51:23.890Z] 
Data Files Check:
[2026-01-10T23:51:23.891Z] .github/data/new_jobs.json: ✅ Exists (10 items, 120731 bytes)
[2026-01-10T23:51:23.896Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 775961 bytes)
[2026-01-10T23:51:23.896Z] 
========================================
[2026-01-10T23:51:23.896Z] Starting Enhanced Discord Bot...
[2026-01-10T23:51:23.897Z] ========================================
[2026-01-10T23:51:24.462Z] [BOT] ✅ Loaded V2 database: 1512 jobs
[2026-01-10T23:51:25.128Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-10T23:51:25.128Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-10T23:51:25.128Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-10T23:51:25.141Z] [BOT] ✅ Loaded pending queue: 251 total (231 pending, 20 enriched, 0 posted)
[2026-01-10T23:51:25.142Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist - Growth Analytics (Performance Marketing) at spotify
[2026-01-10T23:51:25.143Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
[2026-01-10T23:51:25.143Z] [BOT] ⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-10T23:51:25.143Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
[2026-01-10T23:51:25.143Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
[2026-01-10T23:51:25.144Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer - Multiple Levels Available at Allstate Insurance Company
⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
⏭️  Skipping duplicate: JID_74f162ca-_r-48003-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 2 - Multiple Teams at The Travelers Companies
⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
⏭️ Skipping already posted: Full Stack Software Engineer - Starshield at SpaceX
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate - Environmental Engineering - Geology / Scientist at ERM
[2026-01-10T23:51:25.144Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_fa4b2a4c-_r10228-1 (posted within 7 days)
⏭️ Skipping already posted: Analyst Geospatial - GIS at Invenergy
⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-10T23:51:25.145Z] [BOT] ⏭️  Skipping duplicate: JID_73fc7f0e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-10T23:51:25.145Z] [BOT] ⏭️  Skipping duplicate: JID_2ea70d65-mathematics_r138207 (posted within 7 days)
⏭️ Skipping already posted: Postdoctoral Research Associate - Mathematics at Northeastern University
[2026-01-10T23:51:25.145Z] [BOT] ⏭️  Skipping duplicate: JID_e3eae60c (posted within 7 days)
⏭️ Skipping already posted: ROLE_9041ccc4 at NV5 Global
⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a044eb04 at Westinghouse Electric Company
[2026-01-10T23:51:25.145Z] [BOT] ⏭️  Skipping duplicate: JID_777c5169 (posted within 7 days)
[2026-01-10T23:51:25.145Z] [BOT] ⏭️ Skipping already posted: ROLE_f7ffdd20 at Clay
[2026-01-10T23:51:25.145Z] [BOT] ⏭️  Skipping duplicate: JID_73356eb6 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Entry at Jerry
📬 Found 1 new jobs (19 already posted)...
[2026-01-10T23:51:25.145Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-10T23:51:25.146Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-10T23:51:25.147Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-10T23:51:25.149Z] [BOT] 📍 [ROUTING] "Data Scientist - Growth Analytics (Performance Marketing)" @ spotify
[2026-01-10T23:51:25.149Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-10T23:51:25.167Z] [BOT ERROR] (node:3138) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-10T23:51:25.701Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Growth Analytics (Performance Marketing) @ spotify in #🤖・ai-jobs
  ✅ Industry: Data Scientist - Growth Analytics (Performance Marketing) @ spotify
[2026-01-10T23:51:27.458Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Growth Analytics (Performance Marketing) @ spotify in #🗽・new-york
[2026-01-10T23:51:27.458Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-10T23:51:28.958Z] [BOT] 💾 Marked as posted: Data Scientist - Growth Analytics (Performance Marketing) @ spotify (instance #1)
[2026-01-10T23:51:28.958Z] [BOT] 💾 BEFORE ARCHIVING: 1513 jobs in database
[2026-01-10T23:51:28.960Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-10T23:51:28.965Z] [BOT] 📦 Archived 700 jobs to 2026-01.json (700 total in archive)
[2026-01-10T23:51:28.965Z] [BOT] ✅ Archiving complete: 700 archived, 813 active
[2026-01-10T23:51:28.971Z] [BOT] 💾 Saved posted_jobs.json: 813 active jobs
[2026-01-10T23:51:28.972Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T23:51:31.973Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-10T23:51:31.973Z] [BOT] ⏭️  Skipping duplicate: JID_5e295372 (posted within 7 days)
[2026-01-10T23:51:31.983Z] [BOT] ✅ Loaded pending queue: 251 total (231 pending, 20 enriched, 0 posted)
[2026-01-10T23:51:31.999Z] [BOT] ✅ Saved pending queue: 251 total (231 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-10T23:51:31.999Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-10T23:51:32.051Z] [BOT] 📂 Loaded 2538 existing routing entries
[2026-01-10T23:51:32.108Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-10T23:51:32.108Z] [BOT] Total entries: 2539
   Timestamp: 2026-01-10T23:51:32.095Z
[2026-01-10T23:51:32.109Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c5a28238.jsonl
[2026-01-10T23:51:32.109Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-10T23:51:32.109Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-10T23:51:32.109Z] [BOT] [STATS] Channel stats saved
[2026-01-10T23:51:34.125Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3138) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*