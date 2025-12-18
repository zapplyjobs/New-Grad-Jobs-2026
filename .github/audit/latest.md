# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T19:23:29.913Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T19:22:38.821Z] ========================================
[2025-12-18T19:22:38.823Z] Discord Bot Execution Log
[2025-12-18T19:22:38.823Z] Environment: GitHub Actions
[2025-12-18T19:22:38.823Z] Node Version: v20.19.6
[2025-12-18T19:22:38.823Z] ========================================
[2025-12-18T19:22:38.823Z] Environment Variables Check:
[2025-12-18T19:22:38.823Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T19:22:38.823Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.823Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T19:22:38.824Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T19:22:38.824Z] 
Multi-Channel Configuration:
[2025-12-18T19:22:38.824Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.824Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.824Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.824Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.824Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.824Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.824Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.824Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.824Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T19:22:38.824Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T19:22:38.825Z] 
Data Files Check:
[2025-12-18T19:22:38.825Z] .github/data/new_jobs.json: ✅ Exists (10 items, 19529 bytes)
[2025-12-18T19:22:38.827Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 285893 bytes)
[2025-12-18T19:22:38.827Z] 
========================================
[2025-12-18T19:22:38.827Z] Starting Enhanced Discord Bot...
[2025-12-18T19:22:38.827Z] ========================================
[2025-12-18T19:22:39.398Z] [BOT] ✅ Loaded V2 database: 465 jobs
[2025-12-18T19:22:40.429Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T19:22:40.430Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T19:22:40.430Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T19:22:40.430Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T19:22:40.480Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T19:22:40.607Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 106
[2025-12-18T19:22:40.609Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T19:22:40.609Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T19:22:40.610Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T19:22:40.610Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T19:22:40.611Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T19:22:40.613Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-18T19:22:40.614Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - TikTok Product Data Science - BS/MS" @ ORG_1bb6fcfb
[2025-12-18T19:22:40.614Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T19:22:40.631Z] [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T19:22:40.903Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - TikTok Product Data Science - BS/MS @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist Graduate - TikTok Product Data Science - BS/MS @ ORG_1bb6fcfb
[2025-12-18T19:22:42.646Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - TikTok Product Data Science - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T19:22:44.147Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - TikTok Product Data Science - BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-18T19:22:44.147Z] [BOT] 💾 BEFORE ARCHIVING: 466 jobs in database
[2025-12-18T19:22:44.147Z] [BOT] ✅ No jobs to archive (all 466 jobs within 7-day window)
[2025-12-18T19:22:44.161Z] [BOT] 💾 Saved posted_jobs.json: 466 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:22:44.161Z] [BOT] 📍 [ROUTING] "Data Scientist - TikTok Shop AMS Data Science" @ ORG_1bb6fcfb
[2025-12-18T19:22:44.161Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T19:22:45.252Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb in #📈・JID_fb739488
[2025-12-18T19:22:45.252Z] [BOT] ✅ Industry: Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb
[2025-12-18T19:22:47.011Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-18T19:22:48.512Z] [BOT] 💾 Marked as posted: Data Scientist - TikTok Shop AMS Data Science @ ORG_1bb6fcfb (instance #1)
[2025-12-18T19:22:48.512Z] [BOT] 💾 BEFORE ARCHIVING: 467 jobs in database
[2025-12-18T19:22:48.513Z] [BOT] ✅ No jobs to archive (all 467 jobs within 7-day window)
[2025-12-18T19:22:48.517Z] [BOT] 💾 Saved posted_jobs.json: 467 active jobs
[2025-12-18T19:22:48.518Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:22:51.518Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-18T19:22:51.519Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Platform - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2025-12-18T19:22:51.519Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:22:51.776Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c
[2025-12-18T19:22:53.530Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T19:22:55.031Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-18T19:22:55.031Z] [BOT] 💾 BEFORE ARCHIVING: 468 jobs in database
[2025-12-18T19:22:55.032Z] [BOT] ✅ No jobs to archive (all 468 jobs within 7-day window)
[2025-12-18T19:22:55.036Z] [BOT] 💾 Saved posted_jobs.json: 468 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:22:55.037Z] [BOT] 📍 [ROUTING] "Data Structuring Specialist" @ ORG_6a1ef406
[2025-12-18T19:22:55.037Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:22:55.223Z] [BOT] ✅ Created forum post: 🏢 Data Structuring Specialist @ ORG_6a1ef406 in #💻・tech-jobs
  ✅ Industry: Data Structuring Specialist @ ORG_6a1ef406
[2025-12-18T19:22:56.968Z] [BOT] ✅ Created forum post: 🏢 Data Structuring Specialist @ ORG_6a1ef406 in #🌉・san-francisco
[2025-12-18T19:22:56.968Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-18T19:22:58.469Z] [BOT] 💾 Marked as posted: Data Structuring Specialist @ ORG_6a1ef406 (instance #1)
[2025-12-18T19:22:58.470Z] [BOT] 💾 BEFORE ARCHIVING: 469 jobs in database
[2025-12-18T19:22:58.470Z] [BOT] ✅ No jobs to archive (all 469 jobs within 7-day window)
[2025-12-18T19:22:58.476Z] [BOT] 💾 Saved posted_jobs.json: 469 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:22:58.476Z] [BOT] 📍 [ROUTING] "Programmer Analyst" @ ORG_39509385 Systems Integrators
[2025-12-18T19:22:58.476Z] [BOT] Category: TECH (matched: "software")
[2025-12-18T19:22:58.476Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:22:58.780Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst @ ORG_39509385 Systems Integrators in #💻・tech-jobs
[2025-12-18T19:22:58.780Z] [BOT] ✅ Industry: Programmer Analyst @ ORG_39509385 Systems Integrators
[2025-12-18T19:23:00.508Z] [BOT] ✅ Created forum post: 🏢 Programmer Analyst @ ORG_39509385 Systems Integrators in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:23:02.009Z] [BOT] 💾 Marked as posted: Programmer Analyst @ ORG_39509385 Systems Integrators (instance #1)
[2025-12-18T19:23:02.010Z] [BOT] 💾 BEFORE ARCHIVING: 470 jobs in database
[2025-12-18T19:23:02.010Z] [BOT] ✅ No jobs to archive (all 470 jobs within 7-day window)
[2025-12-18T19:23:02.015Z] [BOT] 💾 Saved posted_jobs.json: 470 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:23:02.017Z] [BOT] 📍 [ROUTING] "Perception and Autonomy Engineer" @ ORG_1bff266d
[2025-12-18T19:23:02.017Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:23:02.229Z] [BOT] ✅ Created forum post: 🏢 Perception and Autonomy Engineer @ ORG_1bff266d in #💻・tech-jobs
[2025-12-18T19:23:02.229Z] [BOT] ✅ Industry: Perception and Autonomy Engineer @ ORG_1bff266d
[2025-12-18T19:23:03.969Z] [BOT] ✅ Created forum post: 🏢 Perception and Autonomy Engineer @ ORG_1bff266d in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-18T19:23:05.470Z] [BOT] 💾 Marked as posted: Perception and Autonomy Engineer @ ORG_1bff266d (instance #1)
[2025-12-18T19:23:05.470Z] [BOT] 💾 BEFORE ARCHIVING: 471 jobs in database
[2025-12-18T19:23:05.470Z] [BOT] ✅ No jobs to archive (all 471 jobs within 7-day window)
[2025-12-18T19:23:05.475Z] [BOT] 💾 Saved posted_jobs.json: 471 active jobs
[2025-12-18T19:23:05.475Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:23:05.476Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Productization" @ ORG_acec4064
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:23:05.941Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Productization @ ORG_acec4064 in #💻・tech-jobs
  ✅ Industry: Software Engineer - AI Productization @ ORG_acec4064
[2025-12-18T19:23:08.114Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Productization @ ORG_acec4064 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-18T19:23:09.616Z] [BOT] 💾 Marked as posted: Software Engineer - AI Productization @ ORG_acec4064 (instance #1)
[2025-12-18T19:23:09.616Z] [BOT] 💾 BEFORE ARCHIVING: 472 jobs in database
[2025-12-18T19:23:09.616Z] [BOT] ✅ No jobs to archive (all 472 jobs within 7-day window)
[2025-12-18T19:23:09.621Z] [BOT] 💾 Saved posted_jobs.json: 472 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:23:09.621Z] [BOT] 📍 [ROUTING] "Software Developer - Asset Management - SWE I','Government" @ ORG_d1aff162
   Category: TECH (matched: "software")
[2025-12-18T19:23:09.622Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:23:10.045Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162 in #💻・tech-jobs
  ✅ Industry: Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162
[2025-12-18T19:23:11.905Z] [BOT] ✅ Created forum post: 🏢 Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:23:13.406Z] [BOT] 💾 Marked as posted: Software Developer - Asset Management - SWE I','Government @ ORG_d1aff162 (instance #1)
[2025-12-18T19:23:13.406Z] [BOT] 💾 BEFORE ARCHIVING: 473 jobs in database
[2025-12-18T19:23:13.406Z] [BOT] ✅ No jobs to archive (all 473 jobs within 7-day window)
[2025-12-18T19:23:13.412Z] [BOT] 💾 Saved posted_jobs.json: 473 active jobs
[2025-12-18T19:23:13.412Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:23:16.413Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-18T19:23:16.414Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Monetization GenAI - BS/MS" @ ORG_1bb6fcfb
[2025-12-18T19:23:16.414Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T19:23:16.693Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb
[2025-12-18T19:23:18.409Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T19:23:19.910Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-18T19:23:19.910Z] [BOT] 💾 BEFORE ARCHIVING: 474 jobs in database
[2025-12-18T19:23:19.911Z] [BOT] ✅ No jobs to archive (all 474 jobs within 7-day window)
[2025-12-18T19:23:19.916Z] [BOT] 💾 Saved posted_jobs.json: 474 active jobs
[2025-12-18T19:23:19.917Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:23:19.917Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start','MS" @ ORG_1bb6fcfb
[2025-12-18T19:23:19.917Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T19:23:20.507Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start','MS  in #🤖・ai-jobs
[2025-12-18T19:23:20.507Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start','MS @ ORG_1bb6fcfb
[2025-12-18T19:23:22.215Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start','MS  in #🌉・san-francisco
[2025-12-18T19:23:22.215Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-18T19:23:23.717Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2025 Start','MS @ ORG_1bb6fcfb (instance #1)
[2025-12-18T19:23:23.717Z] [BOT] 💾 BEFORE ARCHIVING: 475 jobs in database
[2025-12-18T19:23:23.717Z] [BOT] ✅ No jobs to archive (all 475 jobs within 7-day window)
[2025-12-18T19:23:23.726Z] [BOT] 💾 Saved posted_jobs.json: 475 active jobs
[2025-12-18T19:23:23.726Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:23:26.726Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T19:23:26.726Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_61376ce9 (posted within 7 days)
[2025-12-18T19:23:26.726Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_80e093bc-detail (posted within 7 days)
[2025-12-18T19:23:26.726Z] [BOT] ⏭️  Skipping duplicate: JID_a842c276 (posted within 7 days)
[2025-12-18T19:23:26.726Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f269e50a (posted within 7 days)
[2025-12-18T19:23:26.727Z] [BOT] ⏭️  Skipping duplicate: JID_afa2d455 (posted within 7 days)
[2025-12-18T19:23:26.727Z] [BOT] ⏭️  Skipping duplicate: JID_557ded04 (posted within 7 days)
[2025-12-18T19:23:26.727Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_11f30fcc (posted within 7 days)
[2025-12-18T19:23:26.727Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_b7172839 (posted within 7 days)
[2025-12-18T19:23:26.727Z] [BOT] ⏭️  Skipping duplicate: JID_c2156082-en_us-JID_6ea61ba3 (posted within 7 days)
[2025-12-18T19:23:26.727Z] [BOT] ⏭️  Skipping duplicate: JID_3cb37a2a-_r-88334 (posted within 7 days)
[2025-12-18T19:23:26.730Z] [BOT] ✅ Loaded pending queue: 506 total (486 pending, 20 enriched, 0 posted)
[2025-12-18T19:23:26.737Z] [BOT] ✅ Saved pending queue: 506 total (486 pending, 10 enriched, 10 posted)
[2025-12-18T19:23:26.737Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T19:23:26.777Z] [BOT] 📂 Loaded 450 existing routing entries
[2025-12-18T19:23:26.817Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2025-12-18T19:23:26.817Z] [BOT] Total entries: 460
   Timestamp: 2025-12-18T19:23:26.815Z
[2025-12-18T19:23:26.818Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T19:23:26.818Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T19:23:26.818Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2025-12-18T19:23:26.818Z] [BOT] Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🌉・san-francisco: 5 posts
     3. #📈・JID_fb739488: 2 posts
[2025-12-18T19:23:26.819Z] [BOT] 4. #💻・remote-usa: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2025-12-18T19:23:26.819Z] [BOT] [STATS] Channel stats saved
[2025-12-18T19:23:28.832Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*