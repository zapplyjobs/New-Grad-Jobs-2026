# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T19:34:04.190Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T19:33:19.752Z] ========================================
[2025-12-20T19:33:19.754Z] Discord Bot Execution Log
[2025-12-20T19:33:19.754Z] Environment: GitHub Actions
[2025-12-20T19:33:19.754Z] Node Version: v20.19.6
[2025-12-20T19:33:19.754Z] ========================================
[2025-12-20T19:33:19.754Z] Environment Variables Check:
[2025-12-20T19:33:19.754Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T19:33:19.754Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.754Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T19:33:19.754Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T19:33:19.754Z] 
Multi-Channel Configuration:
[2025-12-20T19:33:19.755Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.755Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.755Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.755Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.755Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.755Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.755Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.755Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.755Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T19:33:19.755Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T19:33:19.755Z] 
Data Files Check:
[2025-12-20T19:33:19.756Z] .github/data/new_jobs.json: ✅ Exists (10 items, 6811 bytes)
[2025-12-20T19:33:19.758Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 386358 bytes)
[2025-12-20T19:33:19.758Z] 
========================================
[2025-12-20T19:33:19.758Z] Starting Enhanced Discord Bot...
[2025-12-20T19:33:19.758Z] ========================================
[2025-12-20T19:33:20.275Z] [BOT] ✅ Loaded V2 database: 657 jobs
[2025-12-20T19:33:20.890Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T19:33:20.891Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T19:33:20.891Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T19:33:20.891Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T19:33:20.938Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T19:33:20.983Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T19:33:20.985Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T19:33:20.985Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T19:33:20.985Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T19:33:20.986Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T19:33:20.986Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T19:33:20.990Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-20T19:33:20.990Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Monetization GenAI" @ ORG_1bb6fcfb
[2025-12-20T19:33:20.991Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T19:33:21.007Z] [BOT ERROR] (node:2312) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T19:33:21.398Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-20T19:33:21.399Z] [BOT] ✅ Industry: Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb
[2025-12-20T19:33:23.254Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:33:24.755Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Monetization GenAI @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:33:24.755Z] [BOT] 💾 BEFORE ARCHIVING: 658 jobs in database
[2025-12-20T19:33:24.755Z] [BOT] ✅ No jobs to archive (all 658 jobs within 7-day window)
[2025-12-20T19:33:24.768Z] [BOT] 💾 Saved posted_jobs.json: 658 active jobs
[2025-12-20T19:33:24.768Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:33:24.768Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - TikTok Recommendation @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 659 jobs in database
[2025-12-20T19:33:24.769Z] [BOT] ✅ No jobs to archive (all 659 jobs within 7-day window)
[2025-12-20T19:33:24.775Z] [BOT] 💾 Saved posted_jobs.json: 659 active jobs
[2025-12-20T19:33:24.775Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:33:24.775Z] [BOT] 📍 [ROUTING] "Graduate Engineer - AI Safety" @ ORG_1bb6fcfb
[2025-12-20T19:33:24.775Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T19:33:25.044Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - AI Safety @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-20T19:33:25.045Z] [BOT] ✅ Industry: Graduate Engineer - AI Safety @ ORG_1bb6fcfb
[2025-12-20T19:33:26.749Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - AI Safety @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:33:28.249Z] [BOT] 💾 Marked as posted: Graduate Engineer - AI Safety @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:33:28.250Z] [BOT] 💾 BEFORE ARCHIVING: 660 jobs in database
[2025-12-20T19:33:28.250Z] [BOT] ✅ No jobs to archive (all 660 jobs within 7-day window)
[2025-12-20T19:33:28.256Z] [BOT] 💾 Saved posted_jobs.json: 660 active jobs
[2025-12-20T19:33:28.257Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:33:31.257Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2025-12-20T19:33:31.258Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T19:33:31.258Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:33:31.639Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb
[2025-12-20T19:33:33.544Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:33:33.544Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:33:35.045Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:33:35.045Z] [BOT] 💾 BEFORE ARCHIVING: 661 jobs in database
[2025-12-20T19:33:35.046Z] [BOT] ✅ No jobs to archive (all 661 jobs within 7-day window)
[2025-12-20T19:33:35.052Z] [BOT] 💾 Saved posted_jobs.json: 661 active jobs
[2025-12-20T19:33:35.052Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:33:35.053Z] [BOT] 📍 [ROUTING] "LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start" @ ORG_1bb6fcfb
[2025-12-20T19:33:35.054Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T19:33:35.222Z] [BOT] ✅ Created forum post: 🏢 LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:33:35.222Z] [BOT] ✅ Industry: LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb
[2025-12-20T19:33:36.855Z] [BOT] ✅ Created forum post: 🏢 LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-20T19:33:36.855Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T19:33:38.356Z] [BOT] 💾 Marked as posted: LLM Research Scientist Graduate - Ecommerce Recommendation - 2025 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:33:38.356Z] [BOT] 💾 BEFORE ARCHIVING: 662 jobs in database
[2025-12-20T19:33:38.357Z] [BOT] ✅ No jobs to archive (all 662 jobs within 7-day window)
[2025-12-20T19:33:38.363Z] [BOT] 💾 Saved posted_jobs.json: 662 active jobs
[2025-12-20T19:33:38.363Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:33:38.363Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Ads Targeting" @ ORG_1bb6fcfb
[2025-12-20T19:33:38.363Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:33:38.517Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb
[2025-12-20T19:33:40.331Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:33:41.832Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:33:41.832Z] [BOT] 💾 BEFORE ARCHIVING: 663 jobs in database
[2025-12-20T19:33:41.833Z] [BOT] ✅ No jobs to archive (all 663 jobs within 7-day window)
[2025-12-20T19:33:41.838Z] [BOT] 💾 Saved posted_jobs.json: 663 active jobs
[2025-12-20T19:33:41.838Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:33:41.839Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Conversational AI - TikTok E-Commerce" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T19:33:41.839Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:33:42.195Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Conversational AI - TikTok E-Commerce @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Conversational AI - TikTok E-Commerce @ ORG_1bb6fcfb
[2025-12-20T19:33:43.834Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Conversational AI - TikTok E-Commerce @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T19:33:45.335Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Conversational AI - TikTok E-Commerce @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:33:45.335Z] [BOT] 💾 BEFORE ARCHIVING: 664 jobs in database
[2025-12-20T19:33:45.336Z] [BOT] ✅ No jobs to archive (all 664 jobs within 7-day window)
[2025-12-20T19:33:45.343Z] [BOT] 💾 Saved posted_jobs.json: 664 active jobs
[2025-12-20T19:33:45.343Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:33:45.343Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Ads Core Global - 2025 Start" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T19:33:45.558Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Ads Core Global - 2025 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-20T19:33:45.558Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Ads Core Global - 2025 Start @ ORG_1bb6fcfb
[2025-12-20T19:33:47.224Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Ads Core Global - 2025 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T19:33:48.725Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Ads Core Global - 2025 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:33:48.725Z] [BOT] 💾 BEFORE ARCHIVING: 665 jobs in database
[2025-12-20T19:33:48.725Z] [BOT] ✅ No jobs to archive (all 665 jobs within 7-day window)
[2025-12-20T19:33:48.732Z] [BOT] 💾 Saved posted_jobs.json: 665 active jobs
[2025-12-20T19:33:48.732Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:33:51.733Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-20T19:33:51.733Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - E-commerce" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T19:33:51.907Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb in #📈・JID_fb739488
[2025-12-20T19:33:51.907Z] [BOT] ✅ Industry: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb
[2025-12-20T19:33:53.535Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:33:53.535Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:33:55.035Z] [BOT] 💾 Marked as posted: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:33:55.035Z] [BOT] 💾 BEFORE ARCHIVING: 666 jobs in database
[2025-12-20T19:33:55.036Z] [BOT] ✅ No jobs to archive (all 666 jobs within 7-day window)
[2025-12-20T19:33:55.043Z] [BOT] 💾 Saved posted_jobs.json: 666 active jobs
[2025-12-20T19:33:55.043Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:33:55.043Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD" @ ORG_1bb6fcfb
[2025-12-20T19:33:55.043Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-20T19:33:55.172Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD @ ORG_1bb6fcfb in #📈・JID_fb739488
[2025-12-20T19:33:55.172Z] [BOT] ✅ Industry: Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD @ ORG_1bb6fcfb
[2025-12-20T19:33:56.980Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-20T19:33:56.980Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-20T19:33:58.481Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD @ ORG_1bb6fcfb (instance #1)
[2025-12-20T19:33:58.481Z] [BOT] 💾 BEFORE ARCHIVING: 667 jobs in database
[2025-12-20T19:33:58.482Z] [BOT] ✅ No jobs to archive (all 667 jobs within 7-day window)
[2025-12-20T19:33:58.488Z] [BOT] 💾 Saved posted_jobs.json: 667 active jobs
[2025-12-20T19:33:58.488Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T19:34:01.489Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T19:34:01.489Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_456c0766 (posted within 7 days)
[2025-12-20T19:34:01.489Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_b6f508de (posted within 7 days)
[2025-12-20T19:34:01.490Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_45bfe2e6 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_ee347799 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_16a94eef (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_8d4ba170 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_841e3d8c (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_f091198e (posted within 7 days)
[2025-12-20T19:34:01.490Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_3df18e6c (posted within 7 days)
[2025-12-20T19:34:01.492Z] [BOT] ✅ Loaded pending queue: 283 total (263 pending, 20 enriched, 0 posted)
[2025-12-20T19:34:01.496Z] [BOT] ✅ Saved pending queue: 283 total (263 pending, 11 enriched, 9 posted)
[2025-12-20T19:34:01.496Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T19:34:01.538Z] [BOT] 📂 Loaded 735 existing routing entries
[2025-12-20T19:34:01.586Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 744
   Timestamp: 2025-12-20T19:34:01.580Z
[2025-12-20T19:34:01.586Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
[2025-12-20T19:34:01.586Z] [BOT] Total attempts: 18
[2025-12-20T19:34:01.586Z] [BOT] Successful: 18
[2025-12-20T19:34:01.586Z] [BOT] Failed: 0
[2025-12-20T19:34:01.586Z] [BOT] Skipped: 0
[2025-12-20T19:34:01.587Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-20T19:34:01.589Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 7 posts
     2. #🤖・ai-jobs: 5 posts
     3. #💻・tech-jobs: 2 posts
     4. #🌧️・seattle: 2 posts
     5. #📈・JID_fb739488: 2 posts
[STATS] Channel stats saved
[2025-12-20T19:34:03.599Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2312) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*