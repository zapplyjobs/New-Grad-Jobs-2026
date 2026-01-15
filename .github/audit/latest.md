# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T09:00:08.979Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T08:59:19.405Z] ========================================
[2026-01-15T08:59:19.407Z] Discord Bot Execution Log
[2026-01-15T08:59:19.407Z] Environment: GitHub Actions
[2026-01-15T08:59:19.407Z] Node Version: v20.19.6
[2026-01-15T08:59:19.407Z] ========================================
[2026-01-15T08:59:19.407Z] Environment Variables Check:
[2026-01-15T08:59:19.407Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T08:59:19.407Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T08:59:19.408Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T08:59:19.408Z] 
Multi-Channel Configuration:
[2026-01-15T08:59:19.408Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T08:59:19.408Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T08:59:19.409Z] 
Data Files Check:
[2026-01-15T08:59:19.409Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8523 bytes)
[2026-01-15T08:59:19.416Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 932328 bytes)
[2026-01-15T08:59:19.416Z] 
========================================
[2026-01-15T08:59:19.416Z] Starting Enhanced Discord Bot...
[2026-01-15T08:59:19.416Z] ========================================
[2026-01-15T08:59:19.931Z] [BOT] ✅ Loaded V2 database: 1741 jobs
[2026-01-15T08:59:20.826Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T08:59:20.827Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T08:59:20.827Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T08:59:20.935Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd at ByteDance
[2026-01-15T08:59:20.939Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T08:59:20.939Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T08:59:20.939Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T08:59:20.940Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-15T08:59:20.940Z] [BOT] (3 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T08:59:20.942Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-15T08:59:20.943Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd" @ ORG_08c9a13c
[2026-01-15T08:59:20.943Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T08:59:20.943Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:59:20.960Z] [BOT ERROR] (node:2369) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T08:59:21.172Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c
[2026-01-15T08:59:22.929Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T08:59:22.929Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:59:24.430Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c (instance #1)
[2026-01-15T08:59:24.430Z] [BOT] 💾 BEFORE ARCHIVING: 1742 jobs in database
[2026-01-15T08:59:24.432Z] [BOT] ✅ No jobs to archive (all 1742 jobs within 7-day window)
[2026-01-15T08:59:24.444Z] [BOT] 💾 Saved posted_jobs.json: 1742 active jobs
[2026-01-15T08:59:24.444Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:24.445Z] [BOT] 📍 [ROUTING] "General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds" @ ORG_1bb6fcfb
[2026-01-15T08:59:24.445Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T08:59:24.445Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:59:24.731Z] [BOT] ✅ Created forum post: 🏢 General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb
[2026-01-15T08:59:26.539Z] [BOT] ✅ Created forum post: 🏢 General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T08:59:26.539Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:59:28.039Z] [BOT] 💾 Marked as posted: General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:59:28.040Z] [BOT] 💾 BEFORE ARCHIVING: 1743 jobs in database
[2026-01-15T08:59:28.041Z] [BOT] ✅ No jobs to archive (all 1743 jobs within 7-day window)
[2026-01-15T08:59:28.051Z] [BOT] 💾 Saved posted_jobs.json: 1743 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:28.051Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety" @ ORG_1bb6fcfb
[2026-01-15T08:59:28.051Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:59:28.242Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-15T08:59:28.242Z] [BOT] ✅ Industry: Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb
[2026-01-15T08:59:29.926Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:59:31.428Z] [BOT] 💾 Marked as posted: Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:59:31.429Z] [BOT] 💾 BEFORE ARCHIVING: 1744 jobs in database
[2026-01-15T08:59:31.429Z] [BOT] ✅ No jobs to archive (all 1744 jobs within 7-day window)
[2026-01-15T08:59:31.443Z] [BOT] 💾 Saved posted_jobs.json: 1744 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:31.444Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - 2026 Start and BS/MS" @ ORG_1bb6fcfb
[2026-01-15T08:59:31.445Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:59:31.688Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - 2026 Start and BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-15T08:59:31.688Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - 2026 Start and BS/MS @ ORG_1bb6fcfb
[2026-01-15T08:59:33.431Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - 2026 Start and BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:59:34.931Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - 2026 Start and BS/MS @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:59:34.932Z] [BOT] 💾 BEFORE ARCHIVING: 1745 jobs in database
[2026-01-15T08:59:34.933Z] [BOT] ✅ No jobs to archive (all 1745 jobs within 7-day window)
[2026-01-15T08:59:34.944Z] [BOT] 💾 Saved posted_jobs.json: 1745 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:34.945Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Multiple Teams" @ ORG_08c9a13c
[2026-01-15T08:59:34.945Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:59:35.132Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-15T08:59:35.132Z] [BOT] ✅ Industry: Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c
[2026-01-15T08:59:36.996Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:59:38.498Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c (instance #1)
[2026-01-15T08:59:38.498Z] [BOT] 💾 BEFORE ARCHIVING: 1746 jobs in database
[2026-01-15T08:59:38.499Z] [BOT] ✅ No jobs to archive (all 1746 jobs within 7-day window)
[2026-01-15T08:59:38.511Z] [BOT] 💾 Saved posted_jobs.json: 1746 active jobs
[2026-01-15T08:59:38.511Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:38.512Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-15T08:59:38.512Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:59:38.781Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c
[2026-01-15T08:59:40.491Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T08:59:41.993Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c (instance #1)
[2026-01-15T08:59:41.993Z] [BOT] 💾 BEFORE ARCHIVING: 1747 jobs in database
[2026-01-15T08:59:41.994Z] [BOT] ✅ No jobs to archive (all 1747 jobs within 7-day window)
[2026-01-15T08:59:42.005Z] [BOT] 💾 Saved posted_jobs.json: 1747 active jobs
[2026-01-15T08:59:42.005Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:45.005Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-15T08:59:45.007Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Data Arch - E-commerce" @ ORG_1bb6fcfb
[2026-01-15T08:59:45.007Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:59:45.350Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T08:59:45.350Z] [BOT] ✅ Industry: Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb
[2026-01-15T08:59:47.159Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-15T08:59:47.159Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:59:48.661Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:59:48.661Z] [BOT] 💾 BEFORE ARCHIVING: 1748 jobs in database
[2026-01-15T08:59:48.662Z] [BOT] ✅ No jobs to archive (all 1748 jobs within 7-day window)
[2026-01-15T08:59:48.674Z] [BOT] 💾 Saved posted_jobs.json: 1748 active jobs
[2026-01-15T08:59:48.674Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:48.675Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Monetization Technology - Brand Ads" @ ORG_1bb6fcfb
[2026-01-15T08:59:48.675Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:59:48.972Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Monetization Technology - Brand Ads @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Monetization Technology - Brand Ads @ ORG_1bb6fcfb
[2026-01-15T08:59:50.730Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Monetization Technology - Brand Ads @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:59:52.232Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Monetization Technology - Brand Ads @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:59:52.232Z] [BOT] 💾 BEFORE ARCHIVING: 1749 jobs in database
[2026-01-15T08:59:52.233Z] [BOT] ✅ No jobs to archive (all 1749 jobs within 7-day window)
[2026-01-15T08:59:52.249Z] [BOT] 💾 Saved posted_jobs.json: 1749 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:52.249Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:59:52.249Z] [BOT] 💾 BEFORE ARCHIVING: 1750 jobs in database
[2026-01-15T08:59:52.250Z] [BOT] ✅ No jobs to archive (all 1750 jobs within 7-day window)
[2026-01-15T08:59:52.262Z] [BOT] 💾 Saved posted_jobs.json: 1750 active jobs
[2026-01-15T08:59:52.262Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:52.262Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Infrastructure" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:59:52.574Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb
[2026-01-15T08:59:54.291Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:59:55.793Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:59:55.793Z] [BOT] 💾 BEFORE ARCHIVING: 1751 jobs in database
[2026-01-15T08:59:55.794Z] [BOT] ✅ No jobs to archive (all 1751 jobs within 7-day window)
[2026-01-15T08:59:55.806Z] [BOT] 💾 Saved posted_jobs.json: 1751 active jobs
[2026-01-15T08:59:55.806Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:55.806Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:59:55.806Z] [BOT] 💾 BEFORE ARCHIVING: 1752 jobs in database
[2026-01-15T08:59:55.807Z] [BOT] ✅ No jobs to archive (all 1752 jobs within 7-day window)
[2026-01-15T08:59:55.818Z] [BOT] 💾 Saved posted_jobs.json: 1752 active jobs
[2026-01-15T08:59:55.818Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:55.818Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Quality and Efficiency Technology @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 1753 jobs in database
[2026-01-15T08:59:55.819Z] [BOT] ✅ No jobs to archive (all 1753 jobs within 7-day window)
[2026-01-15T08:59:55.829Z] [BOT] 💾 Saved posted_jobs.json: 1753 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:59:58.830Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T08:59:58.831Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_9b9b6e44
[2026-01-15T08:59:58.831Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T08:59:59.049Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_9b9b6e44 in #📈・JID_fb739488
[2026-01-15T08:59:59.049Z] [BOT] ✅ Industry: Data Scientist @ ORG_9b9b6e44
[2026-01-15T09:00:00.914Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_9b9b6e44 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T09:00:02.415Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_9b9b6e44 (instance #1)
[2026-01-15T09:00:02.416Z] [BOT] 💾 BEFORE ARCHIVING: 1754 jobs in database
[2026-01-15T09:00:02.417Z] [BOT] ✅ No jobs to archive (all 1754 jobs within 7-day window)
[2026-01-15T09:00:02.427Z] [BOT] 💾 Saved posted_jobs.json: 1754 active jobs
[2026-01-15T09:00:02.427Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T09:00:05.428Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T09:00:05.429Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_60bfff58-detail (posted within 7 days)
[2026-01-15T09:00:05.429Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_28a73263 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_db738cdb (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_f3f3de34 (posted within 7 days)
[2026-01-15T09:00:05.429Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_0f9148c7 (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_e4fe2110-detail (posted within 7 days)
[2026-01-15T09:00:05.429Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_5a914fb8 (posted within 7 days)
[2026-01-15T09:00:05.429Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9f3fa3cd-detail (posted within 7 days)
[2026-01-15T09:00:05.429Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_05de1f41 (posted within 7 days)
[2026-01-15T09:00:05.430Z] [BOT] ⏭️  Skipping duplicate: JID_1dc6c858 (posted within 7 days)
[2026-01-15T09:00:05.541Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-15T09:00:05.713Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T09:00:05.713Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T09:00:05.768Z] [BOT] 📂 Loaded 3915 existing routing entries
[2026-01-15T09:00:05.830Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-15T09:00:05.830Z] [BOT] New entries: 10
   Total entries: 3925
   Timestamp: 2026-01-15T09:00:05.814Z
[2026-01-15T09:00:05.831Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T09:00:05.831Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T09:00:05.831Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T09:00:05.831Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-01-15T09:00:05.831Z] [BOT] 1. #🌉・san-francisco: 8 posts
     2. #🤖・ai-jobs: 6 posts
     3. #💻・tech-jobs: 3 posts
     4. #🌧️・seattle: 1 posts
     5. #📈・JID_fb739488: 1 posts
[2026-01-15T09:00:05.831Z] [BOT] [STATS] Channel stats saved
[2026-01-15T09:00:07.856Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2369) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*