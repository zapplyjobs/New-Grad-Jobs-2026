# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T07:08:49.535Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T07:08:02.130Z] ========================================
[2025-12-16T07:08:02.132Z] Discord Bot Execution Log
[2025-12-16T07:08:02.132Z] Environment: GitHub Actions
[2025-12-16T07:08:02.132Z] Node Version: v20.19.6
[2025-12-16T07:08:02.132Z] ========================================
[2025-12-16T07:08:02.132Z] Environment Variables Check:
[2025-12-16T07:08:02.132Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T07:08:02.132Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.132Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T07:08:02.133Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T07:08:02.133Z] 
Multi-Channel Configuration:
[2025-12-16T07:08:02.133Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.133Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.133Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.133Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.133Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.133Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.133Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.133Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.133Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T07:08:02.133Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T07:08:02.133Z] 
Data Files Check:
[2025-12-16T07:08:02.134Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7072 bytes)
[2025-12-16T07:08:02.135Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 211484 bytes)
[2025-12-16T07:08:02.135Z] 
========================================
[2025-12-16T07:08:02.135Z] Starting Enhanced Discord Bot...
[2025-12-16T07:08:02.135Z] ========================================
[2025-12-16T07:08:02.681Z] [BOT] ✅ Loaded V2 database: 335 jobs
[2025-12-16T07:08:03.407Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T07:08:03.408Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T07:08:03.408Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T07:08:03.408Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T07:08:03.464Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T07:08:03.540Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T07:08:03.542Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T07:08:03.542Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T07:08:03.542Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T07:08:03.543Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-16T07:08:03.543Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T07:08:03.545Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-16T07:08:03.546Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer Graduate - Ads Interface and Platform" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2025-12-16T07:08:03.546Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:08:03.563Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T07:08:05.127Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb
[2025-12-16T07:08:06.840Z] [BOT] ✅ Created forum post: 🏢 Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:08:08.342Z] [BOT] 💾 Marked as posted: Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:08:08.342Z] [BOT] 💾 BEFORE ARCHIVING: 336 jobs in database
[2025-12-16T07:08:08.342Z] [BOT] ✅ No jobs to archive (all 336 jobs within 7-day window)
[2025-12-16T07:08:08.346Z] [BOT] 💾 Saved posted_jobs.json: 336 active jobs
[2025-12-16T07:08:08.346Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:08.347Z] [BOT] 📍 [ROUTING] "Efficient ML Graduate - AI Platform - PhD" @ ORG_08c9a13c
[2025-12-16T07:08:08.347Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:08:08.668Z] [BOT] ✅ Created forum post: 🏢 Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c
[2025-12-16T07:08:10.785Z] [BOT] ✅ Created forum post: 🏢 Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:08:12.286Z] [BOT] 💾 Marked as posted: Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c (instance #1)
[2025-12-16T07:08:12.286Z] [BOT] 💾 BEFORE ARCHIVING: 337 jobs in database
[2025-12-16T07:08:12.286Z] [BOT] ✅ No jobs to archive (all 337 jobs within 7-day window)
[2025-12-16T07:08:12.290Z] [BOT] 💾 Saved posted_jobs.json: 337 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:12.291Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Arch - Data Ecosystem" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:08:12.479Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb
[2025-12-16T07:08:14.173Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:08:15.674Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:08:15.674Z] [BOT] 💾 BEFORE ARCHIVING: 338 jobs in database
[2025-12-16T07:08:15.674Z] [BOT] ✅ No jobs to archive (all 338 jobs within 7-day window)
[2025-12-16T07:08:15.678Z] [BOT] 💾 Saved posted_jobs.json: 338 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:15.679Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Interface and Platform - 2026 Start" @ ORG_1bb6fcfb
[2025-12-16T07:08:15.679Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:08:15.850Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Interface and Platform - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-16T07:08:15.851Z] [BOT] ✅ Industry: Software Engineer Graduate - Ads Interface and Platform - 2026 Start @ ORG_1bb6fcfb
[2025-12-16T07:08:17.732Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Interface and Platform - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:08:19.232Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Ads Interface and Platform - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:08:19.233Z] [BOT] 💾 BEFORE ARCHIVING: 339 jobs in database
[2025-12-16T07:08:19.233Z] [BOT] ✅ No jobs to archive (all 339 jobs within 7-day window)
[2025-12-16T07:08:19.237Z] [BOT] 💾 Saved posted_jobs.json: 339 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:19.237Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start" @ ORG_08c9a13c
[2025-12-16T07:08:19.237Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T07:08:19.457Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-16T07:08:19.457Z] [BOT] ✅ Industry: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c
[2025-12-16T07:08:21.454Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:08:22.955Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c (instance #1)
[2025-12-16T07:08:22.956Z] [BOT] 💾 BEFORE ARCHIVING: 340 jobs in database
[2025-12-16T07:08:22.956Z] [BOT] ✅ No jobs to archive (all 340 jobs within 7-day window)
[2025-12-16T07:08:22.960Z] [BOT] 💾 Saved posted_jobs.json: 340 active jobs
[2025-12-16T07:08:22.960Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:25.961Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-16T07:08:25.961Z] [BOT] 📍 [ROUTING] "Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:08:26.297Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems @ ORG_f8740713 in #🤖・ai-jobs
  ✅ Industry: Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c
[2025-12-16T07:08:27.980Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems @ ORG_f8740713 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:08:29.481Z] [BOT] 💾 Marked as posted: Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2025-12-16T07:08:29.481Z] [BOT] 💾 BEFORE ARCHIVING: 341 jobs in database
[2025-12-16T07:08:29.481Z] [BOT] ✅ No jobs to archive (all 341 jobs within 7-day window)
[2025-12-16T07:08:29.485Z] [BOT] 💾 Saved posted_jobs.json: 341 active jobs
[2025-12-16T07:08:29.485Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:29.485Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Recommendations - Usds" @ ORG_1bb6fcfb
[2025-12-16T07:08:29.486Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:08:29.706Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Recommendations - Usds @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer - Recommendations - Usds @ ORG_1bb6fcfb
[2025-12-16T07:08:31.578Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Recommendations - Usds @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:08:33.078Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - Recommendations - Usds @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:08:33.079Z] [BOT] 💾 BEFORE ARCHIVING: 342 jobs in database
[2025-12-16T07:08:33.079Z] [BOT] ✅ No jobs to archive (all 342 jobs within 7-day window)
[2025-12-16T07:08:33.083Z] [BOT] 💾 Saved posted_jobs.json: 342 active jobs
[2025-12-16T07:08:33.083Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:33.084Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T07:08:33.084Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T07:08:33.328Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c in #🤖・ai-jobs
[2025-12-16T07:08:33.328Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c
[2025-12-16T07:08:35.004Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-16T07:08:36.505Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c (instance #1)
[2025-12-16T07:08:36.505Z] [BOT] 💾 BEFORE ARCHIVING: 343 jobs in database
[2025-12-16T07:08:36.505Z] [BOT] ✅ No jobs to archive (all 343 jobs within 7-day window)
[2025-12-16T07:08:36.509Z] [BOT] 💾 Saved posted_jobs.json: 343 active jobs
[2025-12-16T07:08:36.509Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:36.509Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c (instance #1)
[2025-12-16T07:08:36.509Z] [BOT] 💾 BEFORE ARCHIVING: 344 jobs in database
[2025-12-16T07:08:36.510Z] [BOT] ✅ No jobs to archive (all 344 jobs within 7-day window)
[2025-12-16T07:08:36.513Z] [BOT] 💾 Saved posted_jobs.json: 344 active jobs
[2025-12-16T07:08:36.513Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:39.514Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T07:08:39.515Z] [BOT] 📍 [ROUTING] "Data Analyst Graduate - 2026 Start”," @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-16T07:08:39.515Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T07:08:39.871Z] [BOT] ✅ Created forum post: 🏢 Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb
[2025-12-16T07:08:41.688Z] [BOT] ✅ Created forum post: 🏢 Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-16T07:08:43.189Z] [BOT] 💾 Marked as posted: Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb (instance #1)
[2025-12-16T07:08:43.189Z] [BOT] 💾 BEFORE ARCHIVING: 345 jobs in database
[2025-12-16T07:08:43.190Z] [BOT] ✅ No jobs to archive (all 345 jobs within 7-day window)
[2025-12-16T07:08:43.194Z] [BOT] 💾 Saved posted_jobs.json: 345 active jobs
[2025-12-16T07:08:43.194Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T07:08:46.195Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-16T07:08:46.195Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7f933fd7 (posted within 7 days)
[2025-12-16T07:08:46.195Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_64109984-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_07ad25af-detail (posted within 7 days)
[2025-12-16T07:08:46.195Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7fb3bb0d (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_8e21a019 (posted within 7 days)
[2025-12-16T07:08:46.195Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f3f673d1 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_3ac14728 (posted within 7 days)
[2025-12-16T07:08:46.196Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_44577216-detail (posted within 7 days)
[2025-12-16T07:08:46.196Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_f785b07f-detail (posted within 7 days)
[2025-12-16T07:08:46.199Z] [BOT] ✅ Loaded pending queue: 543 total (523 pending, 20 enriched, 0 posted)
[2025-12-16T07:08:46.206Z] [BOT] ✅ Saved pending queue: 543 total (523 pending, 11 enriched, 9 posted)
[2025-12-16T07:08:46.207Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-16T07:08:46.246Z] [BOT] 📂 Loaded 324 existing routing entries
[2025-12-16T07:08:46.284Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 333
   Timestamp: 2025-12-16T07:08:46.283Z
[2025-12-16T07:08:46.285Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
   Total attempts: 18
[2025-12-16T07:08:46.285Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-16T07:08:48.295Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*