# Discord Bot Execution Audit
**Timestamp:** 2026-01-10T01:55:57.393Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-10T01:55:40.384Z] ========================================
[2026-01-10T01:55:40.386Z] Discord Bot Execution Log
[2026-01-10T01:55:40.386Z] Environment: GitHub Actions
[2026-01-10T01:55:40.386Z] Node Version: v20.19.6
[2026-01-10T01:55:40.386Z] ========================================
[2026-01-10T01:55:40.386Z] Environment Variables Check:
[2026-01-10T01:55:40.386Z] DISCORD_TOKEN: ✅ Set
[2026-01-10T01:55:40.386Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.386Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-10T01:55:40.386Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-10T01:55:40.386Z] 
Multi-Channel Configuration:
[2026-01-10T01:55:40.386Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.387Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.387Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.387Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.387Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.387Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.387Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.387Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.387Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-10T01:55:40.387Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-10T01:55:40.387Z] 
Data Files Check:
[2026-01-10T01:55:40.388Z] .github/data/new_jobs.json: ✅ Exists (10 items, 124020 bytes)
[2026-01-10T01:55:40.394Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 774274 bytes)
[2026-01-10T01:55:40.394Z] 
========================================
[2026-01-10T01:55:40.394Z] Starting Enhanced Discord Bot...
[2026-01-10T01:55:40.394Z] ========================================
[2026-01-10T01:55:40.924Z] [BOT] ✅ Loaded V2 database: 1510 jobs
[2026-01-10T01:55:41.623Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-10T01:55:41.624Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-10T01:55:41.624Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-10T01:55:41.635Z] [BOT] ✅ Loaded pending queue: 250 total (230 pending, 20 enriched, 0 posted)
[2026-01-10T01:55:41.636Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst - Physician Hospital Organization - Full time(Hybrid) at Holland Hospital
[2026-01-10T01:55:41.637Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
[2026-01-10T01:55:41.637Z] [BOT] ⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-10T01:55:41.637Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
[2026-01-10T01:55:41.638Z] [BOT] ⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-10T01:55:41.638Z] [BOT] ⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
[2026-01-10T01:55:41.638Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer - Multiple Levels Available at Allstate Insurance Company
⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-10T01:55:41.638Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-10T01:55:41.638Z] [BOT] ⏭️  Skipping duplicate: JID_74f162ca-_r-48003-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 2 - Multiple Teams at The Travelers Companies
[2026-01-10T01:55:41.639Z] [BOT] ⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
⏭️ Skipping already posted: Full Stack Software Engineer - Starshield at SpaceX
[2026-01-10T01:55:41.639Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate - Environmental Engineering - Geology / Scientist at ERM
[2026-01-10T01:55:41.639Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-10T01:55:41.639Z] [BOT] ⏭️  Skipping duplicate: JID_fa4b2a4c-_r10228-1 (posted within 7 days)
[2026-01-10T01:55:41.639Z] [BOT] ⏭️ Skipping already posted: Analyst Geospatial - GIS at Invenergy
⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-10T01:55:41.639Z] [BOT] ⏭️  Skipping duplicate: JID_73fc7f0e (posted within 7 days)
[2026-01-10T01:55:41.639Z] [BOT] ⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-10T01:55:41.639Z] [BOT] ⏭️  Skipping duplicate: JID_2ea70d65-mathematics_r138207 (posted within 7 days)
⏭️ Skipping already posted: Postdoctoral Research Associate - Mathematics at Northeastern University
[2026-01-10T01:55:41.639Z] [BOT] ⏭️  Skipping duplicate: JID_e3eae60c (posted within 7 days)
⏭️ Skipping already posted: ROLE_9041ccc4 at NV5 Global
⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
[2026-01-10T01:55:41.640Z] [BOT] ⏭️ Skipping already posted: ROLE_a044eb04 at Westinghouse Electric Company
⏭️  Skipping duplicate: JID_777c5169 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Clay
📬 Found 2 new jobs (18 already posted)...
[2026-01-10T01:55:41.640Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-10T01:55:41.640Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-10T01:55:41.641Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-10T01:55:41.641Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-10T01:55:41.641Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-10T01:55:41.643Z] [BOT] 📍 [ROUTING] "Data Analyst - Physician Hospital Organization - Full time(Hybrid)" @ ORG_153a799b Hospital
[2026-01-10T01:55:41.643Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch, nonTechMatch (using data-science)
[2026-01-10T01:55:41.647Z] [BOT ERROR] (node:3244) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-10T01:55:41.814Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Physician Hospital Organization - Full time(Hybrid) @ ORG_153a799b Hospital in #📈・JID_fb739488
[2026-01-10T01:55:41.814Z] [BOT] ✅ Industry: Data Analyst - Physician Hospital Organization - Full time(Hybrid) @ ORG_153a799b Hospital
[2026-01-10T01:55:43.752Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - Physician Hospital Organization - Full time(Hybrid) @ ORG_153a799b Hospital in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-10T01:55:45.251Z] [BOT] 💾 Marked as posted: Data Analyst - Physician Hospital Organization - Full time(Hybrid) @ ORG_153a799b Hospital (instance #1)
[2026-01-10T01:55:45.252Z] [BOT] 💾 BEFORE ARCHIVING: 1511 jobs in database
[2026-01-10T01:55:45.253Z] [BOT] ✅ No jobs to archive (all 1511 jobs within 7-day window)
[2026-01-10T01:55:45.267Z] [BOT] 💾 Saved posted_jobs.json: 1511 active jobs
[2026-01-10T01:55:45.268Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T01:55:48.267Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-10T01:55:48.268Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Interdisciplinary Data Science" @ ORG_9d38443e of Nevada Las Vegas (UNLV)
[2026-01-10T01:55:48.268Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-10T01:55:48.471Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV) in #🤖・ai-jobs
[2026-01-10T01:55:48.471Z] [BOT] ✅ Industry: Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV)
[2026-01-10T01:55:50.142Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV) in #💻・remote-usa
[2026-01-10T01:55:50.142Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-10T01:55:51.644Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Interdisciplinary Data Science @ ORG_9d38443e of Nevada Las Vegas (UNLV) (instance #1)
[2026-01-10T01:55:51.644Z] [BOT] 💾 BEFORE ARCHIVING: 1512 jobs in database
[2026-01-10T01:55:51.645Z] [BOT] ✅ No jobs to archive (all 1512 jobs within 7-day window)
[2026-01-10T01:55:51.656Z] [BOT] 💾 Saved posted_jobs.json: 1512 active jobs
[2026-01-10T01:55:51.656Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-10T01:55:54.656Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-10T01:55:54.657Z] [BOT] ⏭️  Skipping duplicate: JID_392d240d-hybrid_jr104028 (posted within 7 days)
[2026-01-10T01:55:54.657Z] [BOT] ⏭️  Skipping duplicate: JID_c8d353a9-_r0144891 (posted within 7 days)
[2026-01-10T01:55:54.668Z] [BOT] ✅ Loaded pending queue: 250 total (230 pending, 20 enriched, 0 posted)
[2026-01-10T01:55:54.691Z] [BOT] ✅ Saved pending queue: 250 total (230 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-10T01:55:54.691Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-10T01:55:54.744Z] [BOT] 📂 Loaded 2536 existing routing entries
[2026-01-10T01:55:54.803Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-10T01:55:54.803Z] [BOT] Total entries: 2538
   Timestamp: 2026-01-10T01:55:54.791Z
[2026-01-10T01:55:54.803Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c5a28238.jsonl
[2026-01-10T01:55:54.804Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-10T01:55:54.804Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-10T01:55:54.804Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #📈・JID_fb739488: 1 posts
[2026-01-10T01:55:54.804Z] [BOT] 3. #🤖・ai-jobs: 1 posts
[2026-01-10T01:55:54.804Z] [BOT] [STATS] Channel stats saved
[2026-01-10T01:55:56.818Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3244) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*