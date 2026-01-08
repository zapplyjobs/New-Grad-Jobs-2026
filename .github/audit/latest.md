# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T01:57:21.807Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 16
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T01:56:53.684Z] ========================================
[2026-01-08T01:56:53.686Z] Discord Bot Execution Log
[2026-01-08T01:56:53.686Z] Environment: GitHub Actions
[2026-01-08T01:56:53.686Z] Node Version: v20.19.6
[2026-01-08T01:56:53.686Z] ========================================
[2026-01-08T01:56:53.686Z] Environment Variables Check:
[2026-01-08T01:56:53.686Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T01:56:53.686Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.687Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T01:56:53.687Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T01:56:53.687Z] 
Multi-Channel Configuration:
[2026-01-08T01:56:53.687Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.687Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.687Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.687Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.687Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.687Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.687Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.687Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.688Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T01:56:53.688Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T01:56:53.688Z] 
Data Files Check:
[2026-01-08T01:56:53.688Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60044 bytes)
[2026-01-08T01:56:53.694Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 753659 bytes)
[2026-01-08T01:56:53.694Z] 
========================================
[2026-01-08T01:56:53.694Z] Starting Enhanced Discord Bot...
[2026-01-08T01:56:53.694Z] ========================================
[2026-01-08T01:56:54.235Z] [BOT] ✅ Loaded V2 database: 1463 jobs
[2026-01-08T01:56:55.637Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T01:56:55.638Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T01:56:55.638Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T01:56:55.645Z] [BOT] ✅ Loaded pending queue: 141 total (121 pending, 20 enriched, 0 posted)
[2026-01-08T01:56:55.646Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Assoc Analyst Technology at Medline
[2026-01-08T01:56:55.647Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
[2026-01-08T01:56:55.648Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Level - Space Systems at Northrop Grumman
[2026-01-08T01:56:55.648Z] [BOT] ⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
⏭️ Skipping already posted: ROLE_06bb8f8e at Amgen
[2026-01-08T01:56:55.648Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
⏭️ Skipping already posted: C++ Software Engineer at Cadence Design Systems
[2026-01-08T01:56:55.648Z] [BOT] ⏭️  Skipping duplicate: JID_805eae31 (posted within 7 days)
⏭️ Skipping already posted: Early Career Talent - Data Engineer at Western Digital
[2026-01-08T01:56:55.648Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
⏭️ Skipping already posted: Quality Engineer - Principal Quality Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e06b3b02 at Accenture
⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
[2026-01-08T01:56:55.649Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Builder Frameworks at Twitch
⏭️  Skipping duplicate: JID_c08a3b17 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Integrations at Pinwheel
[2026-01-08T01:56:55.649Z] [BOT] ⏭️  Skipping duplicate: JID_8bbaf901 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ed4792d at Critical Mass
[2026-01-08T01:56:55.649Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-08T01:56:55.649Z] [BOT] ⏭️  Skipping duplicate: JID_3255e497-i_r-48234 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BCBST
[2026-01-08T01:56:55.649Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ed66d9b6-intelligence_jr2025489368 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Artificial Intelligence at The Boeing Company
[2026-01-08T01:56:55.649Z] [BOT] ⏭️  Skipping duplicate: JID_6730b1ec (posted within 7 days)
[2026-01-08T01:56:55.649Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Yext
[2026-01-08T01:56:55.649Z] [BOT] ⏭️  Skipping duplicate: JID_b1904fca-_r-48456 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Aws at The Travelers Companies
[2026-01-08T01:56:55.649Z] [BOT] ⏭️  Skipping duplicate: JID_744551aa-etsy_careers-JID_e1810102-data_jr5236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Core Data at Etsy
[2026-01-08T01:56:55.649Z] [BOT] ⏭️  Skipping duplicate: JID_dcc70510 (posted within 7 days)
⏭️ Skipping already posted: Associate Game Designer - Technical - Contingent at PlayStation
📬 Found 4 new jobs (16 already posted)...
[2026-01-08T01:56:55.650Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2026-01-08T01:56:55.650Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-01-08T01:56:55.650Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
[2026-01-08T01:56:55.650Z] [BOT] 📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T01:56:55.654Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-08T01:56:55.654Z] [BOT] 📍 [ROUTING] "Assoc Analyst Technology" @ ORG_4aef9434ine
[2026-01-08T01:56:55.654Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-08T01:56:55.659Z] [BOT ERROR] (node:3359) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T01:56:56.305Z] [BOT] ✅ Created forum post: 🏢 Assoc Analyst Technology @ ORG_4aef9434ine in #🩺・healthcare-jobs
  ✅ Industry: Assoc Analyst Technology @ ORG_4aef9434ine
[2026-01-08T01:56:57.806Z] [BOT] 💾 Marked as posted: Assoc Analyst Technology @ ORG_4aef9434ine (instance #1)
[2026-01-08T01:56:57.807Z] [BOT] 💾 BEFORE ARCHIVING: 1464 jobs in database
[2026-01-08T01:56:57.808Z] [BOT] ✅ No jobs to archive (all 1464 jobs within 7-day window)
[2026-01-08T01:56:57.818Z] [BOT] 💾 Saved posted_jobs.json: 1464 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T01:57:00.820Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-08T01:57:00.820Z] [BOT] 📍 [ROUTING] "Software Engineer – Entry Level" @ ORG_c910d474 Dynamics Mission Systems
[2026-01-08T01:57:00.821Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T01:57:01.090Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2026-01-08T01:57:01.090Z] [BOT] ✅ Industry: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems
[2026-01-08T01:57:03.739Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T01:57:05.240Z] [BOT] 💾 Marked as posted: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-08T01:57:05.240Z] [BOT] 💾 BEFORE ARCHIVING: 1465 jobs in database
[2026-01-08T01:57:05.242Z] [BOT] ✅ No jobs to archive (all 1465 jobs within 7-day window)
[2026-01-08T01:57:05.252Z] [BOT] 💾 Saved posted_jobs.json: 1465 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T01:57:05.254Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant - ServiceNow" @ ORG_60d01372
[2026-01-08T01:57:05.254Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T01:57:05.554Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant - ServiceNow @ ORG_60d01372 in #💻・tech-jobs
  ✅ Industry: Associate Technical Consultant - ServiceNow @ ORG_60d01372
[2026-01-08T01:57:07.399Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant - ServiceNow @ ORG_60d01372 in #💻・remote-usa
[2026-01-08T01:57:07.399Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-08T01:57:08.901Z] [BOT] 💾 Marked as posted: Associate Technical Consultant - ServiceNow @ ORG_60d01372 (instance #1)
[2026-01-08T01:57:08.901Z] [BOT] 💾 BEFORE ARCHIVING: 1466 jobs in database
[2026-01-08T01:57:08.902Z] [BOT] ✅ No jobs to archive (all 1466 jobs within 7-day window)
[2026-01-08T01:57:08.912Z] [BOT] 💾 Saved posted_jobs.json: 1466 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T01:57:11.912Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T01:57:11.913Z] [BOT] 📍 [ROUTING] "Research Analyst - Pnw" @ ORG_fe16a941 Lang LaSalle (JLL)
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T01:57:12.161Z] [BOT] ✅ Created forum post: 🏢 Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL) in #🤖・ai-jobs
  ✅ Industry: Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL)
[2026-01-08T01:57:13.908Z] [BOT] ✅ Created forum post: 🏢 Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL) in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-08T01:57:15.408Z] [BOT] 💾 Marked as posted: Research Analyst - Pnw @ ORG_fe16a941 Lang LaSalle (JLL) (instance #1)
[2026-01-08T01:57:15.409Z] [BOT] 💾 BEFORE ARCHIVING: 1467 jobs in database
[2026-01-08T01:57:15.410Z] [BOT] ✅ No jobs to archive (all 1467 jobs within 7-day window)
[2026-01-08T01:57:15.420Z] [BOT] 💾 Saved posted_jobs.json: 1467 active jobs
[2026-01-08T01:57:15.420Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T01:57:18.421Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-08T01:57:18.422Z] [BOT] ⏭️  Skipping duplicate: JID_960dfdf4-technology_r2521966 (posted within 7 days)
[2026-01-08T01:57:18.422Z] [BOT] ⏭️  Skipping duplicate: JID_b6bd5678 (posted within 7 days)
[2026-01-08T01:57:18.422Z] [BOT] ⏭️  Skipping duplicate: JID_cbd01f26-cx_1-job-2025003905 (posted within 7 days)
⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
[2026-01-08T01:57:18.429Z] [BOT] ✅ Loaded pending queue: 141 total (121 pending, 20 enriched, 0 posted)
[2026-01-08T01:57:18.445Z] [BOT] ✅ Saved pending queue: 141 total (121 pending, 16 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T01:57:18.502Z] [BOT] 📂 Loaded 2404 existing routing entries
[2026-01-08T01:57:18.558Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-08T01:57:18.558Z] [BOT] Total entries: 2408
   Timestamp: 2026-01-08T01:57:18.547Z
[2026-01-08T01:57:18.559Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T01:57:18.559Z] [BOT] Total attempts: 23
   Successful: 7
   Failed: 0
   Skipped: 16
[2026-01-08T01:57:18.559Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-08T01:57:18.559Z] [BOT] Last cleanup: Never
   Total posts: 7
   Channels used: 5
   Top channels:
[2026-01-08T01:57:18.559Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #💻・remote-usa: 2 posts
     3. #🩺・healthcare-jobs: 1 posts
     4. #🤖・ai-jobs: 1 posts
     5. #🌧️・seattle: 1 posts
[2026-01-08T01:57:18.560Z] [BOT] [STATS] Channel stats saved
[2026-01-08T01:57:20.573Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3359) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*