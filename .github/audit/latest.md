# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T08:48:10.122Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T08:47:20.759Z] ========================================
[2026-01-15T08:47:20.761Z] Discord Bot Execution Log
[2026-01-15T08:47:20.761Z] Environment: GitHub Actions
[2026-01-15T08:47:20.761Z] Node Version: v20.19.6
[2026-01-15T08:47:20.762Z] ========================================
[2026-01-15T08:47:20.762Z] Environment Variables Check:
[2026-01-15T08:47:20.762Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T08:47:20.762Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.762Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T08:47:20.762Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T08:47:20.762Z] 
Multi-Channel Configuration:
[2026-01-15T08:47:20.762Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.762Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.762Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.762Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.763Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.763Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.763Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.763Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.763Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T08:47:20.763Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T08:47:20.763Z] 
Data Files Check:
[2026-01-15T08:47:20.763Z] .github/data/new_jobs.json: ✅ Exists (10 items, 12163 bytes)
[2026-01-15T08:47:20.770Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 926681 bytes)
[2026-01-15T08:47:20.770Z] 
========================================
[2026-01-15T08:47:20.771Z] Starting Enhanced Discord Bot...
[2026-01-15T08:47:20.771Z] ========================================
[2026-01-15T08:47:21.315Z] [BOT] ✅ Loaded V2 database: 1731 jobs
[2026-01-15T08:47:21.866Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T08:47:21.867Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T08:47:21.867Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T08:47:21.982Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist - TikTok Ads at TikTok
[2026-01-15T08:47:21.985Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T08:47:21.985Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T08:47:21.985Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T08:47:21.986Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T08:47:21.986Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T08:47:21.991Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T08:47:21.991Z] [BOT] 📍 [ROUTING] "Data Scientist - TikTok Ads" @ ORG_1bb6fcfb
[2026-01-15T08:47:21.992Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T08:47:22.009Z] [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T08:47:22.170Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - TikTok Ads @ ORG_1bb6fcfb in #📈・JID_fb739488
[2026-01-15T08:47:22.170Z] [BOT] ✅ Industry: Data Scientist - TikTok Ads @ ORG_1bb6fcfb
[2026-01-15T08:47:24.059Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - TikTok Ads @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T08:47:24.059Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:47:25.560Z] [BOT] 💾 Marked as posted: Data Scientist - TikTok Ads @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:47:25.561Z] [BOT] 💾 BEFORE ARCHIVING: 1732 jobs in database
[2026-01-15T08:47:25.562Z] [BOT] ✅ No jobs to archive (all 1732 jobs within 7-day window)
[2026-01-15T08:47:25.579Z] [BOT] 💾 Saved posted_jobs.json: 1732 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:47:28.580Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-15T08:47:28.581Z] [BOT] 📍 [ROUTING] "3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd" @ ORG_08c9a13c
   Category: TECH (matched: "engineer/engineering")
[2026-01-15T08:47:28.581Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:47:28.893Z] [BOT] ✅ Created forum post: 🏢 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c
[2026-01-15T08:47:30.589Z] [BOT] ✅ Created forum post: 🏢 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:47:32.090Z] [BOT] 💾 Marked as posted: 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c (instance #1)
[2026-01-15T08:47:32.090Z] [BOT] 💾 BEFORE ARCHIVING: 1733 jobs in database
[2026-01-15T08:47:32.091Z] [BOT] ✅ No jobs to archive (all 1733 jobs within 7-day window)
[2026-01-15T08:47:32.105Z] [BOT] 💾 Saved posted_jobs.json: 1733 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:47:32.107Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS" @ ORG_1bb6fcfb
[2026-01-15T08:47:32.107Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:47:32.475Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T08:47:32.475Z] [BOT] ✅ Industry: Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb
[2026-01-15T08:47:34.229Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:47:35.730Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:47:35.730Z] [BOT] 💾 BEFORE ARCHIVING: 1734 jobs in database
[2026-01-15T08:47:35.731Z] [BOT] ✅ No jobs to archive (all 1734 jobs within 7-day window)
[2026-01-15T08:47:35.743Z] [BOT] 💾 Saved posted_jobs.json: 1734 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:47:35.744Z] [BOT] 📍 [ROUTING] "Model Development Engineer - Global Future Leaders Program 2026" @ ORG_acec4064
[2026-01-15T08:47:35.744Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:47:35.997Z] [BOT] ✅ Created forum post: 🏢 Model Development Engineer - Global Future Leaders Program 2026 @ ORG_acec4064 in #💻・tech-jobs
[2026-01-15T08:47:35.997Z] [BOT] ✅ Industry: Model Development Engineer - Global Future Leaders Program 2026 @ ORG_acec4064
[2026-01-15T08:47:37.690Z] [BOT] ✅ Created forum post: 🏢 Model Development Engineer - Global Future Leaders Program 2026 @ ORG_acec4064 in #💻・remote-usa
[2026-01-15T08:47:37.690Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T08:47:39.191Z] [BOT] 💾 Marked as posted: Model Development Engineer - Global Future Leaders Program 2026 @ ORG_acec4064 (instance #1)
[2026-01-15T08:47:39.191Z] [BOT] 💾 BEFORE ARCHIVING: 1735 jobs in database
[2026-01-15T08:47:39.192Z] [BOT] ✅ No jobs to archive (all 1735 jobs within 7-day window)
[2026-01-15T08:47:39.205Z] [BOT] 💾 Saved posted_jobs.json: 1735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:47:39.206Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Algorithm Engineering" @ ORG_1bb6fcfb
[2026-01-15T08:47:39.206Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:47:39.367Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T08:47:39.367Z] [BOT] ✅ Industry: Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb
[2026-01-15T08:47:41.159Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T08:47:41.159Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:47:42.661Z] [BOT] 💾 Marked as posted: Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:47:42.661Z] [BOT] 💾 BEFORE ARCHIVING: 1736 jobs in database
[2026-01-15T08:47:42.662Z] [BOT] ✅ No jobs to archive (all 1736 jobs within 7-day window)
[2026-01-15T08:47:42.677Z] [BOT] 💾 Saved posted_jobs.json: 1736 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:47:42.678Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - 3D Avatar" @ ORG_08c9a13c
[2026-01-15T08:47:42.679Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:47:42.897Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T08:47:42.897Z] [BOT] ✅ Industry: Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c
[2026-01-15T08:47:44.890Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T08:47:44.890Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:47:46.390Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c (instance #1)
[2026-01-15T08:47:46.391Z] [BOT] 💾 BEFORE ARCHIVING: 1737 jobs in database
[2026-01-15T08:47:46.392Z] [BOT] ✅ No jobs to archive (all 1737 jobs within 7-day window)
[2026-01-15T08:47:46.404Z] [BOT] 💾 Saved posted_jobs.json: 1737 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:47:49.405Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-15T08:47:49.405Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Conversational AI" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-15T08:47:49.405Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:47:49.610Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c
[2026-01-15T08:47:51.483Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:47:52.983Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c (instance #1)
[2026-01-15T08:47:52.983Z] [BOT] 💾 BEFORE ARCHIVING: 1738 jobs in database
[2026-01-15T08:47:52.984Z] [BOT] ✅ No jobs to archive (all 1738 jobs within 7-day window)
[2026-01-15T08:47:52.995Z] [BOT] 💾 Saved posted_jobs.json: 1738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:47:52.995Z] [BOT] 📍 [ROUTING] "University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2026-01-15T08:47:52.995Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:47:53.192Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-15T08:47:53.193Z] [BOT] ✅ Industry: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-15T08:47:54.839Z] [BOT] ✅ Created forum post: 🎨 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:47:56.339Z] [BOT] 💾 Marked as posted: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 (instance #1)
[2026-01-15T08:47:56.339Z] [BOT] 💾 BEFORE ARCHIVING: 1739 jobs in database
[2026-01-15T08:47:56.340Z] [BOT] ✅ No jobs to archive (all 1739 jobs within 7-day window)
[2026-01-15T08:47:56.352Z] [BOT] 💾 Saved posted_jobs.json: 1739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:47:56.353Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:47:56.804Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c
[2026-01-15T08:47:58.797Z] [BOT] ✅ Created forum post: 🏢 Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:48:00.299Z] [BOT] 💾 Marked as posted: Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T08:48:00.299Z] [BOT] 💾 BEFORE ARCHIVING: 1740 jobs in database
[2026-01-15T08:48:00.300Z] [BOT] ✅ No jobs to archive (all 1740 jobs within 7-day window)
[2026-01-15T08:48:00.315Z] [BOT] 💾 Saved posted_jobs.json: 1740 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:48:00.315Z] [BOT] 📍 [ROUTING] "Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-15T08:48:00.315Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:48:00.567Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-15T08:48:00.567Z] [BOT] ✅ Industry: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c
[2026-01-15T08:48:02.332Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:48:03.834Z] [BOT] 💾 Marked as posted: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2026-01-15T08:48:03.834Z] [BOT] 💾 BEFORE ARCHIVING: 1741 jobs in database
[2026-01-15T08:48:03.835Z] [BOT] ✅ No jobs to archive (all 1741 jobs within 7-day window)
[2026-01-15T08:48:03.848Z] [BOT] 💾 Saved posted_jobs.json: 1741 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:48:06.850Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T08:48:06.850Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7a8774a4 (posted within 7 days)
[2026-01-15T08:48:06.850Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5729a83b-detail (posted within 7 days)
[2026-01-15T08:48:06.851Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_510ed91e-detail (posted within 7 days)
[2026-01-15T08:48:06.851Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7939bf4b (posted within 7 days)
⏭️  Skipping duplicate: JID_c2156082-en_us-JID_f9e0abc6 (posted within 7 days)
[2026-01-15T08:48:06.851Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r160690 (posted within 7 days)
[2026-01-15T08:48:06.851Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_2ea2e67a (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_a0f2fa61-detail (posted within 7 days)
[2026-01-15T08:48:06.851Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_0f14ea99-detail (posted within 7 days)
[2026-01-15T08:48:06.851Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5d75fef3-detail (posted within 7 days)
[2026-01-15T08:48:06.961Z] [BOT] ✅ Loaded pending queue: 2726 total (2706 pending, 20 enriched, 0 posted)
[2026-01-15T08:48:07.147Z] [BOT] ✅ Saved pending queue: 2726 total (2706 pending, 10 enriched, 10 posted)
[2026-01-15T08:48:07.147Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T08:48:07.204Z] [BOT] 📂 Loaded 3905 existing routing entries
[2026-01-15T08:48:07.269Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T08:48:07.269Z] [BOT] Total entries: 3915
   Timestamp: 2026-01-15T08:48:07.253Z
[2026-01-15T08:48:07.270Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
   Successful: 20
[2026-01-15T08:48:07.270Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-15T08:48:07.270Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 9 posts
     2. #💻・tech-jobs: 5 posts
[2026-01-15T08:48:07.270Z] [BOT] 3. #🤖・ai-jobs: 4 posts
     4. #📈・JID_fb739488: 1 posts
[2026-01-15T08:48:07.270Z] [BOT] 5. #💻・remote-usa: 1 posts
[2026-01-15T08:48:07.271Z] [BOT] [STATS] Channel stats saved
[2026-01-15T08:48:09.298Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*