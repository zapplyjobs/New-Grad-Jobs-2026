# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T02:04:09.038Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T02:03:35.490Z] ========================================
[2026-01-12T02:03:35.492Z] Discord Bot Execution Log
[2026-01-12T02:03:35.492Z] Environment: GitHub Actions
[2026-01-12T02:03:35.492Z] Node Version: v20.19.6
[2026-01-12T02:03:35.492Z] ========================================
[2026-01-12T02:03:35.492Z] Environment Variables Check:
[2026-01-12T02:03:35.492Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T02:03:35.492Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.492Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T02:03:35.492Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T02:03:35.492Z] 
Multi-Channel Configuration:
[2026-01-12T02:03:35.493Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.493Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.493Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.493Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.493Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.493Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.493Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.493Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.493Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T02:03:35.493Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T02:03:35.493Z] 
Data Files Check:
[2026-01-12T02:03:35.494Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76805 bytes)
[2026-01-12T02:03:35.495Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 215108 bytes)
[2026-01-12T02:03:35.496Z] 
========================================
[2026-01-12T02:03:35.496Z] Starting Enhanced Discord Bot...
[2026-01-12T02:03:35.496Z] ========================================
[2026-01-12T02:03:36.030Z] [BOT] ✅ Loaded V2 database: 380 jobs
[2026-01-12T02:03:36.519Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T02:03:36.519Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T02:03:36.519Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T02:03:36.531Z] [BOT] ✅ Loaded pending queue: 263 total (243 pending, 20 enriched, 0 posted)
[2026-01-12T02:03:36.532Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist 1: Network and Contracts at Oscar Health
[2026-01-12T02:03:36.533Z] [BOT] ⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
[2026-01-12T02:03:36.533Z] [BOT] ⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
[2026-01-12T02:03:36.533Z] [BOT] ⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
[2026-01-12T02:03:36.534Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
[2026-01-12T02:03:36.534Z] [BOT] ⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
[2026-01-12T02:03:36.534Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T02:03:36.534Z] [BOT] ⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
[2026-01-12T02:03:36.534Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer - Multiple Levels Available at Allstate Insurance Company
⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-12T02:03:36.534Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-12T02:03:36.535Z] [BOT] ⏭️  Skipping duplicate: JID_74f162ca-_r-48003-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 2 - Multiple Teams at The Travelers Companies
⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
⏭️ Skipping already posted: Full Stack Software Engineer - Starshield at SpaceX
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate - Environmental Engineering - Geology / Scientist at ERM
[2026-01-12T02:03:36.535Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
📬 Found 6 new jobs (14 already posted)...
[2026-01-12T02:03:36.535Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
[2026-01-12T02:03:36.535Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2026-01-12T02:03:36.536Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-12T02:03:36.536Z] [BOT] 📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T02:03:36.538Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T02:03:36.539Z] [BOT] 📍 [ROUTING] "Data Scientist 1: Network and Contracts" @ ORG_ca66a852 Health
[2026-01-12T02:03:36.539Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T02:03:36.544Z] [BOT ERROR] (node:3131) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T02:03:36.791Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health in #📈・JID_fb739488
  ✅ Industry: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health
[2026-01-12T02:03:38.562Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health in #🗽・new-york
[2026-01-12T02:03:38.562Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T02:03:40.061Z] [BOT] 💾 Marked as posted: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health (instance #1)
[2026-01-12T02:03:40.062Z] [BOT] 💾 BEFORE ARCHIVING: 381 jobs in database
[2026-01-12T02:03:40.062Z] [BOT] ✅ No jobs to archive (all 381 jobs within 7-day window)
[2026-01-12T02:03:40.072Z] [BOT] 💾 Saved posted_jobs.json: 381 active jobs
[2026-01-12T02:03:40.072Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T02:03:43.073Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-12T02:03:43.074Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-12T02:03:43.074Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T02:03:43.323Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-12T02:03:43.323Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-12T02:03:45.018Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
[2026-01-12T02:03:45.018Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-12T02:03:46.519Z] [BOT] 💾 Marked as posted: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-12T02:03:46.520Z] [BOT] 💾 BEFORE ARCHIVING: 382 jobs in database
[2026-01-12T02:03:46.520Z] [BOT] ✅ No jobs to archive (all 382 jobs within 7-day window)
[2026-01-12T02:03:46.524Z] [BOT] 💾 Saved posted_jobs.json: 382 active jobs
[2026-01-12T02:03:46.524Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T02:03:46.526Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1 - Early Career" @ ORG_ec7d56a0 Origin
[2026-01-12T02:03:46.526Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T02:03:46.654Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin
[2026-01-12T02:03:48.352Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-12T02:03:49.853Z] [BOT] 💾 Marked as posted: Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin (instance #1)
[2026-01-12T02:03:49.854Z] [BOT] 💾 BEFORE ARCHIVING: 383 jobs in database
[2026-01-12T02:03:49.854Z] [BOT] ✅ No jobs to archive (all 383 jobs within 7-day window)
[2026-01-12T02:03:49.858Z] [BOT] 💾 Saved posted_jobs.json: 383 active jobs
[2026-01-12T02:03:49.858Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T02:03:52.859Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-12T02:03:52.861Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
[2026-01-12T02:03:52.861Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T02:03:53.075Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-12T02:03:53.075Z] [BOT] ✅ Industry: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-12T02:03:54.869Z] [BOT] ✅ Created forum post: 🎨 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🌧️・seattle
[2026-01-12T02:03:54.869Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-12T02:03:56.371Z] [BOT] 💾 Marked as posted: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-12T02:03:56.371Z] [BOT] 💾 BEFORE ARCHIVING: 384 jobs in database
[2026-01-12T02:03:56.371Z] [BOT] ✅ No jobs to archive (all 384 jobs within 7-day window)
[2026-01-12T02:03:56.375Z] [BOT] 💾 Saved posted_jobs.json: 384 active jobs
[2026-01-12T02:03:56.376Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T02:03:56.376Z] [BOT] 📍 [ROUTING] "AI Engineer – New Graduate" @ ORG_33141a27 AI
[2026-01-12T02:03:56.376Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T02:03:56.530Z] [BOT] ✅ Created forum post: 🏢 AI Engineer – New Graduate @ ORG_33141a27 AI in #🤖・ai-jobs
[2026-01-12T02:03:56.530Z] [BOT] ✅ Industry: AI Engineer – New Graduate @ ORG_33141a27 AI
[2026-01-12T02:03:58.277Z] [BOT] ✅ Created forum post: 🏢 AI Engineer – New Graduate @ ORG_33141a27 AI in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T02:03:59.778Z] [BOT] 💾 Marked as posted: AI Engineer – New Graduate @ ORG_33141a27 AI (instance #1)
[2026-01-12T02:03:59.778Z] [BOT] 💾 BEFORE ARCHIVING: 385 jobs in database
[2026-01-12T02:03:59.779Z] [BOT] ✅ No jobs to archive (all 385 jobs within 7-day window)
[2026-01-12T02:03:59.782Z] [BOT] 💾 Saved posted_jobs.json: 385 active jobs
[2026-01-12T02:03:59.782Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T02:03:59.783Z] [BOT] 📍 [ROUTING] "Configuration Analyst 1" @ ORG_81f16575ington Ingalls Industries
[2026-01-12T02:03:59.783Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T02:03:59.958Z] [BOT] ✅ Created forum post: 🏢 Configuration Analyst 1 @ ORG_81f16575ington Ingalls Industries in #🤖・ai-jobs
[2026-01-12T02:03:59.958Z] [BOT] ✅ Industry: Configuration Analyst 1 @ ORG_81f16575ington Ingalls Industries
[2026-01-12T02:04:01.790Z] [BOT] ✅ Created forum post: 🏢 Configuration Analyst 1 @ ORG_81f16575ington Ingalls Industries in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T02:04:03.291Z] [BOT] 💾 Marked as posted: Configuration Analyst 1 @ ORG_81f16575ington Ingalls Industries (instance #1)
[2026-01-12T02:04:03.291Z] [BOT] 💾 BEFORE ARCHIVING: 386 jobs in database
[2026-01-12T02:04:03.291Z] [BOT] ✅ No jobs to archive (all 386 jobs within 7-day window)
[2026-01-12T02:04:03.295Z] [BOT] 💾 Saved posted_jobs.json: 386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T02:04:06.296Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-12T02:04:06.296Z] [BOT] ⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
[2026-01-12T02:04:06.296Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
[2026-01-12T02:04:06.296Z] [BOT] ⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
[2026-01-12T02:04:06.296Z] [BOT] ⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
[2026-01-12T02:04:06.296Z] [BOT] ⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
[2026-01-12T02:04:06.315Z] [BOT] ✅ Loaded pending queue: 263 total (243 pending, 20 enriched, 0 posted)
[2026-01-12T02:04:06.334Z] [BOT] ✅ Saved pending queue: 263 total (243 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-12T02:04:06.334Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-12T02:04:06.392Z] [BOT] 📂 Loaded 2542 existing routing entries
[2026-01-12T02:04:06.448Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 2548
   Timestamp: 2026-01-12T02:04:06.436Z
[2026-01-12T02:04:06.448Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
[2026-01-12T02:04:06.449Z] [BOT] Total attempts: 26
   Successful: 12
   Failed: 0
   Skipped: 14
[2026-01-12T02:04:06.449Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T02:04:06.449Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 7
   Top channels:
     1. #🤖・ai-jobs: 3 posts
     2. #💻・tech-jobs: 2 posts
[2026-01-12T02:04:06.450Z] [BOT] 3. #💻・remote-usa: 2 posts
     4. #🌧️・seattle: 2 posts
     5. #📈・JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-12T02:04:08.464Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3131) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*