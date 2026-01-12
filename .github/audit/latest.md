# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T02:58:09.134Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T02:57:52.491Z] ========================================
[2026-01-12T02:57:52.493Z] Discord Bot Execution Log
[2026-01-12T02:57:52.493Z] Environment: GitHub Actions
[2026-01-12T02:57:52.493Z] Node Version: v20.19.6
[2026-01-12T02:57:52.493Z] ========================================
[2026-01-12T02:57:52.493Z] Environment Variables Check:
[2026-01-12T02:57:52.493Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T02:57:52.493Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.493Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T02:57:52.493Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T02:57:52.494Z] 
Multi-Channel Configuration:
[2026-01-12T02:57:52.494Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.494Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.494Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.494Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.494Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.494Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.494Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.494Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.494Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T02:57:52.494Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T02:57:52.494Z] 
Data Files Check:
[2026-01-12T02:57:52.495Z] .github/data/new_jobs.json: ✅ Exists (10 items, 62524 bytes)
[2026-01-12T02:57:52.497Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 219125 bytes)
[2026-01-12T02:57:52.497Z] 
========================================
[2026-01-12T02:57:52.497Z] Starting Enhanced Discord Bot...
[2026-01-12T02:57:52.497Z] ========================================
[2026-01-12T02:57:53.023Z] [BOT] ✅ Loaded V2 database: 386 jobs
[2026-01-12T02:57:53.471Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T02:57:53.471Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T02:57:53.471Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T02:57:53.483Z] [BOT] ✅ Loaded pending queue: 266 total (246 pending, 20 enriched, 0 posted)
[2026-01-12T02:57:53.483Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partial Hospitalization Program - PHP - Therapist at Lifepoint Health
[2026-01-12T02:57:53.485Z] [BOT] ⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
[2026-01-12T02:57:53.485Z] [BOT] ⏭️ Skipping already posted: Data Scientist 1: ROLE_e67deec4 at Oscar Health
[2026-01-12T02:57:53.485Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_530e45ae-ut_r10218884 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer / Software Engineer at Northrop Grumman
[2026-01-12T02:57:53.485Z] [BOT] ⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
⏭️ Skipping already posted: Software Development Engineer 1 - Early Career at Blue Origin
[2026-01-12T02:57:53.485Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Research Scientist/Engineer at Adobe
⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
⏭️ Skipping already posted: AI Engineer – New Graduate at Distyl AI
⏭️  Skipping duplicate: JID_d4234c59 (posted within 7 days)
⏭️ Skipping already posted: Applied Safety Research Engineer, Safeguards at anthropic
[2026-01-12T02:57:53.486Z] [BOT] ⏭️  Skipping duplicate: JID_33d25482 (posted within 7 days)
⏭️ Skipping already posted: Configuration Analyst 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
[2026-01-12T02:57:53.486Z] [BOT] ⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
[2026-01-12T02:57:53.486Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-12T02:57:53.486Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-12T02:57:53.486Z] [BOT] ⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer - Multiple Levels Available at Allstate Insurance Company
[2026-01-12T02:57:53.486Z] [BOT] ⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-12T02:57:53.487Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
⏭️  Skipping duplicate: JID_74f162ca-_r-48003-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 2 - Multiple Teams at The Travelers Companies
[2026-01-12T02:57:53.487Z] [BOT] ⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
⏭️ Skipping already posted: Full Stack Software Engineer - Starshield at SpaceX
📬 Found 2 new jobs (18 already posted)...
[2026-01-12T02:57:53.487Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-12T02:57:53.487Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-12T02:57:53.487Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-12T02:57:53.488Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T02:57:53.490Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-12T02:57:53.491Z] [BOT] 📍 [ROUTING] "Partial Hospitalization Program - PHP - Therapist" @ ORG_64e21aeaint Health
   Category: HEALTHCARE (matched: "healthcare")
[2026-01-12T02:57:53.491Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-12T02:57:53.508Z] [BOT ERROR] (node:3084) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T02:57:53.794Z] [BOT] ✅ Created forum post: 🏢 Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health in #🩺・healthcare-jobs
  ✅ Industry: Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health
[2026-01-12T02:57:55.473Z] [BOT] ✅ Created forum post: 🏢 Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-12T02:57:56.974Z] [BOT] 💾 Marked as posted: Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health (instance #1)
[2026-01-12T02:57:56.974Z] [BOT] 💾 BEFORE ARCHIVING: 387 jobs in database
[2026-01-12T02:57:56.975Z] [BOT] ✅ No jobs to archive (all 387 jobs within 7-day window)
[2026-01-12T02:57:56.983Z] [BOT] 💾 Saved posted_jobs.json: 387 active jobs
[2026-01-12T02:57:56.983Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T02:57:59.983Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-12T02:57:59.984Z] [BOT] 📍 [ROUTING] "Systems/Software Engineer 1" @ ORG_a5257743 Packard Enterprise
[2026-01-12T02:57:59.984Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T02:58:00.139Z] [BOT] ✅ Created forum post: 🏢 Systems/Software Engineer 1 @ ORG_a5257743 Packard Enterprise in #💻・tech-jobs
[2026-01-12T02:58:00.139Z] [BOT] ✅ Industry: Systems/Software Engineer 1 @ ORG_a5257743 Packard Enterprise
[2026-01-12T02:58:01.871Z] [BOT] ✅ Created forum post: 🏢 Systems/Software Engineer 1 @ ORG_a5257743 Packard Enterprise in #🌉・san-francisco
[2026-01-12T02:58:01.871Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-12T02:58:03.372Z] [BOT] 💾 Marked as posted: Systems/Software Engineer 1 @ ORG_a5257743 Packard Enterprise (instance #1)
[2026-01-12T02:58:03.372Z] [BOT] 💾 BEFORE ARCHIVING: 388 jobs in database
[2026-01-12T02:58:03.372Z] [BOT] ✅ No jobs to archive (all 388 jobs within 7-day window)
[2026-01-12T02:58:03.377Z] [BOT] 💾 Saved posted_jobs.json: 388 active jobs
[2026-01-12T02:58:03.377Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T02:58:06.378Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-12T02:58:06.378Z] [BOT] ⏭️  Skipping duplicate: JID_9f131a57-cx_1-job-309521 (posted within 7 days)
[2026-01-12T02:58:06.378Z] [BOT] ⏭️  Skipping duplicate: JID_60f42868-i_1199912-1 (posted within 7 days)
[2026-01-12T02:58:06.391Z] [BOT] ✅ Loaded pending queue: 266 total (246 pending, 20 enriched, 0 posted)
[2026-01-12T02:58:06.408Z] [BOT] ✅ Saved pending queue: 266 total (246 pending, 18 enriched, 2 posted)
[2026-01-12T02:58:06.408Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T02:58:06.470Z] [BOT] 📂 Loaded 2548 existing routing entries
[2026-01-12T02:58:06.525Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-12T02:58:06.525Z] [BOT] Total entries: 2550
   Timestamp: 2026-01-12T02:58:06.514Z
[2026-01-12T02:58:06.526Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-12T02:58:06.526Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T02:58:06.526Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #🩺・healthcare-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-12T02:58:06.527Z] [BOT] 4. #🌉・san-francisco: 1 posts
[2026-01-12T02:58:06.527Z] [BOT] [STATS] Channel stats saved
[2026-01-12T02:58:08.541Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3084) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*