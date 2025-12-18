# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T19:34:45.988Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T19:33:59.672Z] ========================================
[2025-12-18T19:33:59.674Z] Discord Bot Execution Log
[2025-12-18T19:33:59.674Z] Environment: GitHub Actions
[2025-12-18T19:33:59.674Z] Node Version: v20.19.6
[2025-12-18T19:33:59.674Z] ========================================
[2025-12-18T19:33:59.674Z] Environment Variables Check:
[2025-12-18T19:33:59.674Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T19:33:59.674Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.674Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T19:33:59.674Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T19:33:59.675Z] 
Multi-Channel Configuration:
[2025-12-18T19:33:59.675Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.675Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.675Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.675Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.675Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.675Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.675Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.675Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.675Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T19:33:59.675Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T19:33:59.675Z] 
Data Files Check:
[2025-12-18T19:33:59.676Z] .github/data/new_jobs.json: ✅ Exists (10 items, 27340 bytes)
[2025-12-18T19:33:59.678Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 291333 bytes)
[2025-12-18T19:33:59.678Z] 
========================================
[2025-12-18T19:33:59.678Z] Starting Enhanced Discord Bot...
[2025-12-18T19:33:59.678Z] ========================================
[2025-12-18T19:34:00.212Z] [BOT] ✅ Loaded V2 database: 475 jobs
[2025-12-18T19:34:00.869Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T19:34:00.869Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T19:34:00.870Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T19:34:00.870Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T19:34:00.922Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T19:34:00.975Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 106
[2025-12-18T19:34:00.977Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T19:34:00.977Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T19:34:00.977Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T19:34:00.978Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-18T19:34:00.978Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T19:34:00.982Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-18T19:34:00.983Z] [BOT] 📍 [ROUTING] "Associate Conversational AI Designer" @ ORG_15872237
[2025-12-18T19:34:00.983Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T19:34:01.000Z] [BOT ERROR] (node:2680) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T19:34:01.189Z] [BOT] ✅ Created forum post: 🏢 Associate Conversational AI Designer @ ORG_15872237 in #🤖・ai-jobs
[2025-12-18T19:34:01.189Z] [BOT] ✅ Industry: Associate Conversational AI Designer @ ORG_15872237
[2025-12-18T19:34:02.871Z] [BOT] ✅ Created forum post: 🏢 Associate Conversational AI Designer @ ORG_15872237 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:34:04.372Z] [BOT] 💾 Marked as posted: Associate Conversational AI Designer @ ORG_15872237 (instance #1)
[2025-12-18T19:34:04.372Z] [BOT] 💾 BEFORE ARCHIVING: 476 jobs in database
[2025-12-18T19:34:04.373Z] [BOT] ✅ No jobs to archive (all 476 jobs within 7-day window)
[2025-12-18T19:34:04.382Z] [BOT] 💾 Saved posted_jobs.json: 476 active jobs
[2025-12-18T19:34:04.383Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:07.383Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-18T19:34:07.383Z] [BOT] 📍 [ROUTING] "Senior Data Scientist" @ ORG_dc7620eb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T19:34:07.383Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T19:34:07.698Z] [BOT] ✅ Created forum post: 🔴 Senior Data Scientist @ ORG_dc7620eb in #📈・JID_fb739488
[2025-12-18T19:34:07.698Z] [BOT] ✅ Industry: Senior Data Scientist @ ORG_dc7620eb
[2025-12-18T19:34:09.199Z] [BOT] 💾 Marked as posted: Senior Data Scientist @ ORG_dc7620eb (instance #1)
[2025-12-18T19:34:09.199Z] [BOT] 💾 BEFORE ARCHIVING: 477 jobs in database
[2025-12-18T19:34:09.200Z] [BOT] ✅ No jobs to archive (all 477 jobs within 7-day window)
[2025-12-18T19:34:09.204Z] [BOT] 💾 Saved posted_jobs.json: 477 active jobs
[2025-12-18T19:34:09.205Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:09.205Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_5f7f16bb Engineering
[2025-12-18T19:34:09.206Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T19:34:09.824Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_5f7f16bb Engineering in #📈・JID_fb739488
  ✅ Industry: Data Analyst 1 @ ORG_5f7f16bb Engineering
[2025-12-18T19:34:11.515Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_5f7f16bb Engineering in #🦢・los-angeles
[2025-12-18T19:34:11.515Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-18T19:34:13.016Z] [BOT] 💾 Marked as posted: Data Analyst 1 @ ORG_5f7f16bb Engineering (instance #1)
[2025-12-18T19:34:13.016Z] [BOT] 💾 BEFORE ARCHIVING: 478 jobs in database
[2025-12-18T19:34:13.017Z] [BOT] ✅ No jobs to archive (all 478 jobs within 7-day window)
[2025-12-18T19:34:13.022Z] [BOT] 💾 Saved posted_jobs.json: 478 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:16.023Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-18T19:34:16.024Z] [BOT] 📍 [ROUTING] "Associate Product Engineer" @ ORG_b85bc5d0 Brands
[2025-12-18T19:34:16.024Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:34:16.267Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_b85bc5d0 Brands in #💻・tech-jobs
[2025-12-18T19:34:16.267Z] [BOT] ✅ Industry: Associate Product Engineer @ ORG_b85bc5d0 Brands
[2025-12-18T19:34:18.049Z] [BOT] ✅ Created forum post: 🏢 Associate Product Engineer @ ORG_b85bc5d0 Brands in #🚌・boston
[2025-12-18T19:34:18.050Z] [BOT] ✅ Location: 🚌・boston
[2025-12-18T19:34:19.550Z] [BOT] 💾 Marked as posted: Associate Product Engineer @ ORG_b85bc5d0 Brands (instance #1)
[2025-12-18T19:34:19.550Z] [BOT] 💾 BEFORE ARCHIVING: 479 jobs in database
[2025-12-18T19:34:19.551Z] [BOT] ✅ No jobs to archive (all 479 jobs within 7-day window)
[2025-12-18T19:34:19.555Z] [BOT] 💾 Saved posted_jobs.json: 479 active jobs
[2025-12-18T19:34:19.555Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:19.555Z] [BOT] 💾 Marked as posted: Associate Product Engineer - Product Engineering @ ORG_b85bc5d0 Brands (instance #1)
[2025-12-18T19:34:19.555Z] [BOT] 💾 BEFORE ARCHIVING: 480 jobs in database
[2025-12-18T19:34:19.556Z] [BOT] ✅ No jobs to archive (all 480 jobs within 7-day window)
[2025-12-18T19:34:19.561Z] [BOT] 💾 Saved posted_jobs.json: 480 active jobs
[2025-12-18T19:34:19.561Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:19.561Z] [BOT] 📍 [ROUTING] "Japanese Speaker - AI Trainer" @ ORG_4ee447c5 Technologies
   Category: TECH (matched: "machine learning")
[2025-12-18T19:34:19.561Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:34:19.758Z] [BOT] ✅ Created forum post: 🏢 Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies in #💻・tech-jobs
[2025-12-18T19:34:19.758Z] [BOT] ✅ Industry: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies
[2025-12-18T19:34:21.459Z] [BOT] ✅ Created forum post: 🏢 Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies in #💻・remote-usa
[2025-12-18T19:34:21.460Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T19:34:22.960Z] [BOT] 💾 Marked as posted: Japanese Speaker - AI Trainer @ ORG_4ee447c5 Technologies (instance #1)
[2025-12-18T19:34:22.961Z] [BOT] 💾 BEFORE ARCHIVING: 481 jobs in database
[2025-12-18T19:34:22.961Z] [BOT] ✅ No jobs to archive (all 481 jobs within 7-day window)
[2025-12-18T19:34:22.965Z] [BOT] 💾 Saved posted_jobs.json: 481 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:22.966Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_f30b244b
[2025-12-18T19:34:22.966Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:34:23.166Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_f30b244b in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_f30b244b
[2025-12-18T19:34:24.833Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_f30b244b in #💻・remote-usa
[2025-12-18T19:34:24.833Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T19:34:26.334Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_f30b244b (instance #1)
[2025-12-18T19:34:26.334Z] [BOT] 💾 BEFORE ARCHIVING: 482 jobs in database
[2025-12-18T19:34:26.334Z] [BOT] ✅ No jobs to archive (all 482 jobs within 7-day window)
[2025-12-18T19:34:26.340Z] [BOT] 💾 Saved posted_jobs.json: 482 active jobs
[2025-12-18T19:34:26.340Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:26.340Z] [BOT] 📍 [ROUTING] "Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned)" @ ORG_08c9a13c
[2025-12-18T19:34:26.340Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:34:26.885Z] [BOT] ✅ Created forum post: 🏢 Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_2936dbe3 in #💻・tech-jobs
  ✅ Industry: Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_08c9a13c
[2025-12-18T19:34:28.710Z] [BOT] ✅ Created forum post: 🏢 Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_2936dbe3 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T19:34:30.210Z] [BOT] 💾 Marked as posted: Large Model Optimization Engineer Graduate - PICO Perception - 2026 Start (to be cleaned) @ ORG_08c9a13c (instance #1)
[2025-12-18T19:34:30.211Z] [BOT] 💾 BEFORE ARCHIVING: 483 jobs in database
[2025-12-18T19:34:30.211Z] [BOT] ✅ No jobs to archive (all 483 jobs within 7-day window)
[2025-12-18T19:34:30.218Z] [BOT] 💾 Saved posted_jobs.json: 483 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:30.218Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Fusion" @ ORG_dc7620eb
   Category: TECH (matched: "software")
[2025-12-18T19:34:30.218Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:34:30.404Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb in #💻・tech-jobs
[2025-12-18T19:34:30.404Z] [BOT] ✅ Industry: Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb
[2025-12-18T19:34:32.128Z] [BOT] ✅ Created forum post: 🔴 Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb in #🦢・los-angeles
[2025-12-18T19:34:32.128Z] [BOT] ✅ Location: 🦢・los-angeles
[2025-12-18T19:34:33.629Z] [BOT] 💾 Marked as posted: Advanced Degree Software Engineer - Fusion @ ORG_dc7620eb (instance #1)
[2025-12-18T19:34:33.630Z] [BOT] 💾 BEFORE ARCHIVING: 484 jobs in database
[2025-12-18T19:34:33.630Z] [BOT] ✅ No jobs to archive (all 484 jobs within 7-day window)
[2025-12-18T19:34:33.636Z] [BOT] 💾 Saved posted_jobs.json: 484 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:36.637Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-18T19:34:36.638Z] [BOT] 📍 [ROUTING] "Minor League Affiliate Technology Coordinator" @ ORG_2bc58fcc League Baseball
[2025-12-18T19:34:36.638Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-18T19:34:36.846Z] [BOT] ✅ Created forum post: 🏢 Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball in #📣・marketing-jobs
[2025-12-18T19:34:36.847Z] [BOT] ✅ Industry: Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball
[2025-12-18T19:34:38.600Z] [BOT] ✅ Created forum post: 🏢 Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:34:40.100Z] [BOT] 💾 Marked as posted: Minor League Affiliate Technology Coordinator @ ORG_2bc58fcc League Baseball (instance #1)
[2025-12-18T19:34:40.100Z] [BOT] 💾 BEFORE ARCHIVING: 485 jobs in database
[2025-12-18T19:34:40.101Z] [BOT] ✅ No jobs to archive (all 485 jobs within 7-day window)
[2025-12-18T19:34:40.106Z] [BOT] 💾 Saved posted_jobs.json: 485 active jobs
[2025-12-18T19:34:40.106Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:34:43.107Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-18T19:34:43.107Z] [BOT] ⏭️  Skipping duplicate: JID_91bfed3a (posted within 7 days)
[2025-12-18T19:34:43.107Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-313247 (posted within 7 days)
[2025-12-18T19:34:43.107Z] [BOT] ⏭️  Skipping duplicate: JID_0c057f97 (posted within 7 days)
[2025-12-18T19:34:43.108Z] [BOT] ⏭️  Skipping duplicate: JID_abdc7bea (posted within 7 days)
[2025-12-18T19:34:43.108Z] [BOT] ⏭️  Skipping duplicate: JID_85bf06af (posted within 7 days)
⏭️  Skipping duplicate: JID_5b77bff1 (posted within 7 days)
[2025-12-18T19:34:43.108Z] [BOT] ⏭️  Skipping duplicate: JID_105b504b (posted within 7 days)
[2025-12-18T19:34:43.108Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_c36d4464-detail (posted within 7 days)
[2025-12-18T19:34:43.108Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-311889 (posted within 7 days)
[2025-12-18T19:34:43.111Z] [BOT] ✅ Loaded pending queue: 496 total (476 pending, 20 enriched, 0 posted)
[2025-12-18T19:34:43.118Z] [BOT] ✅ Saved pending queue: 496 total (476 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2025-12-18T19:34:43.119Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-18T19:34:43.160Z] [BOT] 📂 Loaded 460 existing routing entries
[2025-12-18T19:34:43.200Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-18T19:34:43.201Z] [BOT] Total entries: 469
   Timestamp: 2025-12-18T19:34:43.198Z
[2025-12-18T19:34:43.201Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T19:34:43.201Z] [BOT] Total attempts: 17
   Successful: 17
   Failed: 0
   Skipped: 0
[2025-12-18T19:34:43.201Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-18T19:34:43.202Z] [BOT] Last cleanup: Never
   Total posts: 17
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2025-12-18T19:34:43.202Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #📈・JID_fb739488: 2 posts
     4. #🦢・los-angeles: 2 posts
     5. #🤖・ai-jobs: 1 posts
[2025-12-18T19:34:43.202Z] [BOT] [STATS] Channel stats saved
[2025-12-18T19:34:45.214Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2680) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*