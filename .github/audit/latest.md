# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T19:48:50.259Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T19:48:07.199Z] ========================================
[2025-12-20T19:48:07.201Z] Discord Bot Execution Log
[2025-12-20T19:48:07.201Z] Environment: GitHub Actions
[2025-12-20T19:48:07.201Z] Node Version: v20.19.6
[2025-12-20T19:48:07.201Z] ========================================
[2025-12-20T19:48:07.201Z] Environment Variables Check:
[2025-12-20T19:48:07.201Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T19:48:07.201Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.201Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T19:48:07.201Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T19:48:07.201Z] 
Multi-Channel Configuration:
[2025-12-20T19:48:07.201Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.202Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.202Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.202Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.202Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.202Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.202Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.202Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.202Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T19:48:07.202Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T19:48:07.202Z] 
Data Files Check:
[2025-12-20T19:48:07.203Z] .github/data/new_jobs.json: ✅ Exists (10 items, 6957 bytes)
[2025-12-20T19:48:07.205Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 391334 bytes)
[2025-12-20T19:48:07.205Z] 
========================================
[2025-12-20T19:48:07.205Z] Starting Enhanced Discord Bot...
[2025-12-20T19:48:07.205Z] ========================================
[2025-12-20T19:48:07.721Z] [BOT] ✅ Loaded V2 database: 667 jobs
[2025-12-20T19:48:08.795Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T19:48:08.795Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T19:48:08.796Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T19:48:08.796Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T19:48:08.845Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T19:48:08.891Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T19:48:08.893Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T19:48:08.894Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T19:48:08.894Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T19:48:08.895Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T19:48:08.895Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Machine Learning Engineer Graduate - 2025 Start @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T19:48:08.899Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-20T19:48:08.900Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
[2025-12-20T19:48:08.900Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T19:48:08.917Z] [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T19:48:09.106Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-20T19:48:09.107Z] [BOT] ✅ Industry: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb
[2025-12-20T19:48:11.120Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T19:48:12.621Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:12.621Z] [BOT] 💾 BEFORE ARCHIVING: 668 jobs in database
[2025-12-20T19:48:12.622Z] [BOT] ✅ No jobs to archive (all 668 jobs within 7-day window)
[2025-12-20T19:48:12.628Z] [BOT] 💾 Saved posted_jobs.json: 668 active jobs
[2025-12-20T19:48:12.628Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:48:12.629Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Compute Platform - Database Acceleration" @ ORG_1bb6fcfb
   Category: TECH (matched: "data")
[2025-12-20T19:48:12.629Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T19:48:12.860Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-20T19:48:12.860Z] [BOT] ✅ Industry: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb
[2025-12-20T19:48:14.515Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:48:14.515Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:48:16.016Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:16.016Z] [BOT] 💾 BEFORE ARCHIVING: 669 jobs in database
[2025-12-20T19:48:16.016Z] [BOT] ✅ No jobs to archive (all 669 jobs within 7-day window)
[2025-12-20T19:48:16.022Z] [BOT] 💾 Saved posted_jobs.json: 669 active jobs
[2025-12-20T19:48:16.022Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:48:19.023Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2025-12-20T19:48:19.025Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate Local Services - PhD" @ ORG_1bb6fcfb
[2025-12-20T19:48:19.025Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:48:19.441Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate Local Services - PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:48:19.441Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate Local Services - PhD @ ORG_1bb6fcfb
[2025-12-20T19:48:21.222Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate Local Services - PhD @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:48:21.222Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:48:22.722Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate Local Services - PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:22.723Z] [BOT] 💾 BEFORE ARCHIVING: 670 jobs in database
[2025-12-20T19:48:22.723Z] [BOT] ✅ No jobs to archive (all 670 jobs within 7-day window)
[2025-12-20T19:48:22.730Z] [BOT] 💾 Saved posted_jobs.json: 670 active jobs
[2025-12-20T19:48:22.731Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:48:22.731Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Ecommerce Business Growth - MS/PhD" @ ORG_1bb6fcfb
[2025-12-20T19:48:22.731Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:48:23.117Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Ecommerce Business Growth - MS/PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Ecommerce Business Growth - MS/PhD @ ORG_1bb6fcfb
[2025-12-20T19:48:24.931Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Ecommerce Business Growth - MS/PhD @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T19:48:26.432Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Ecommerce Business Growth - MS/PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:26.432Z] [BOT] 💾 BEFORE ARCHIVING: 671 jobs in database
[2025-12-20T19:48:26.433Z] [BOT] ✅ No jobs to archive (all 671 jobs within 7-day window)
[2025-12-20T19:48:26.439Z] [BOT] 💾 Saved posted_jobs.json: 671 active jobs
[2025-12-20T19:48:26.439Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:48:26.439Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics" @ ORG_1bb6fcfb
[2025-12-20T19:48:26.439Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:48:26.666Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_1bb6fcfb
[2025-12-20T19:48:28.480Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T19:48:29.981Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:29.981Z] [BOT] 💾 BEFORE ARCHIVING: 672 jobs in database
[2025-12-20T19:48:29.981Z] [BOT] ✅ No jobs to archive (all 672 jobs within 7-day window)
[2025-12-20T19:48:29.988Z] [BOT] 💾 Saved posted_jobs.json: 672 active jobs
[2025-12-20T19:48:29.988Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:48:29.988Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - 2025 Start" @ ORG_1bb6fcfb
[2025-12-20T19:48:29.988Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:48:30.254Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - 2025 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - 2025 Start @ ORG_1bb6fcfb
[2025-12-20T19:48:32.177Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - 2025 Start @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T19:48:33.678Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - 2025 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:33.678Z] [BOT] 💾 BEFORE ARCHIVING: 673 jobs in database
[2025-12-20T19:48:33.679Z] [BOT] ✅ No jobs to archive (all 673 jobs within 7-day window)
[2025-12-20T19:48:33.685Z] [BOT] 💾 Saved posted_jobs.json: 673 active jobs
[2025-12-20T19:48:33.685Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:48:33.685Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - General Hire @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:33.685Z] [BOT] 💾 BEFORE ARCHIVING: 674 jobs in database
[2025-12-20T19:48:33.685Z] [BOT] ✅ No jobs to archive (all 674 jobs within 7-day window)
[2025-12-20T19:48:33.691Z] [BOT] 💾 Saved posted_jobs.json: 674 active jobs
[2025-12-20T19:48:33.691Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control" @ ORG_1bb6fcfb
[2025-12-20T19:48:33.691Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T19:48:33.691Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:48:33.855Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control @ ORG_1bb6fcfb
[2025-12-20T19:48:35.528Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T19:48:37.029Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Risk Control @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:37.030Z] [BOT] 💾 BEFORE ARCHIVING: 675 jobs in database
[2025-12-20T19:48:37.030Z] [BOT] ✅ No jobs to archive (all 675 jobs within 7-day window)
[2025-12-20T19:48:37.036Z] [BOT] 💾 Saved posted_jobs.json: 675 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T19:48:37.036Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Recommendations - Usds" @ ORG_1bb6fcfb
[2025-12-20T19:48:37.036Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:48:37.216Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Recommendations - Usds @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Recommendations - Usds @ ORG_1bb6fcfb
[2025-12-20T19:48:39.114Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Recommendations - Usds @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:48:39.114Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:48:40.615Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Recommendations - Usds @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:40.615Z] [BOT] 💾 BEFORE ARCHIVING: 676 jobs in database
[2025-12-20T19:48:40.616Z] [BOT] ✅ No jobs to archive (all 676 jobs within 7-day window)
[2025-12-20T19:48:40.622Z] [BOT] 💾 Saved posted_jobs.json: 676 active jobs
[2025-12-20T19:48:40.622Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:48:40.623Z] [BOT] 📍 [ROUTING] "LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start" @ ORG_1bb6fcfb
[2025-12-20T19:48:40.623Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T19:48:41.110Z] [BOT] ✅ Created forum post: 🏢 LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb
[2025-12-20T19:48:42.768Z] [BOT] ✅ Created forum post: 🏢 LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T19:48:44.269Z] [BOT] 💾 Marked as posted: LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:48:44.269Z] [BOT] 💾 BEFORE ARCHIVING: 677 jobs in database
[2025-12-20T19:48:44.270Z] [BOT] ✅ No jobs to archive (all 677 jobs within 7-day window)
[2025-12-20T19:48:44.276Z] [BOT] 💾 Saved posted_jobs.json: 677 active jobs
[2025-12-20T19:48:44.276Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:48:47.277Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T19:48:47.277Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6748210c (posted within 7 days)
[2025-12-20T19:48:47.278Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_d2aba9e9 (posted within 7 days)
[2025-12-20T19:48:47.278Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6571e34d (posted within 7 days)
[2025-12-20T19:48:47.278Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_061f8026 (posted within 7 days)
[2025-12-20T19:48:47.278Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_73de1a4f (posted within 7 days)
[2025-12-20T19:48:47.278Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ae6e404d (posted within 7 days)
[2025-12-20T19:48:47.278Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_076296a5 (posted within 7 days)
[2025-12-20T19:48:47.278Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_42545346 (posted within 7 days)
[2025-12-20T19:48:47.278Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6587c286 (posted within 7 days)
[2025-12-20T19:48:47.280Z] [BOT] ✅ Loaded pending queue: 273 total (253 pending, 20 enriched, 0 posted)
[2025-12-20T19:48:47.284Z] [BOT] ✅ Saved pending queue: 273 total (253 pending, 11 enriched, 9 posted)
[2025-12-20T19:48:47.284Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T19:48:47.329Z] [BOT] 📂 Loaded 744 existing routing entries
[2025-12-20T19:48:47.375Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-20T19:48:47.375Z] [BOT] Total entries: 753
   Timestamp: 2025-12-20T19:48:47.371Z
[2025-12-20T19:48:47.375Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T19:48:47.375Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-20T19:48:47.376Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-20T19:48:47.376Z] [BOT] Total posts: 18
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 7 posts
     2. #🌧️・seattle: 6 posts
     3. #🌉・san-francisco: 3 posts
     4. #💻・tech-jobs: 2 posts
[2025-12-20T19:48:47.376Z] [BOT] [STATS] Channel stats saved
[2025-12-20T19:48:49.388Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*