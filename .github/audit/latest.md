# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T08:29:03.325Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T08:28:14.151Z] ========================================
[2026-01-15T08:28:14.153Z] Discord Bot Execution Log
[2026-01-15T08:28:14.153Z] Environment: GitHub Actions
[2026-01-15T08:28:14.153Z] Node Version: v20.19.6
[2026-01-15T08:28:14.153Z] ========================================
[2026-01-15T08:28:14.153Z] Environment Variables Check:
[2026-01-15T08:28:14.153Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T08:28:14.153Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.153Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T08:28:14.153Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T08:28:14.153Z] 
Multi-Channel Configuration:
[2026-01-15T08:28:14.154Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.154Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.154Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.154Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.154Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.154Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.154Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.154Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.154Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T08:28:14.154Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T08:28:14.154Z] 
Data Files Check:
[2026-01-15T08:28:14.155Z] .github/data/new_jobs.json: ✅ Exists (10 items, 9036 bytes)
[2026-01-15T08:28:14.162Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 920698 bytes)
[2026-01-15T08:28:14.162Z] 
========================================
[2026-01-15T08:28:14.162Z] Starting Enhanced Discord Bot...
[2026-01-15T08:28:14.162Z] ========================================
[2026-01-15T08:28:14.670Z] [BOT] ✅ Loaded V2 database: 1720 jobs
[2026-01-15T08:28:15.337Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T08:28:15.337Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T08:28:15.337Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T08:28:15.452Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems at ByteDance
[2026-01-15T08:28:15.455Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T08:28:15.456Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T08:28:15.456Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T08:28:15.456Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-15T08:28:15.457Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-15T08:28:15.457Z] [BOT] - Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T08:28:15.459Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-15T08:28:15.460Z] [BOT] 📍 [ROUTING] "Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems" @ ORG_08c9a13c
[2026-01-15T08:28:15.460Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T08:28:15.460Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:28:15.477Z] [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T08:28:15.685Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems @ ORG_f8740713 in #🤖・ai-jobs
[2026-01-15T08:28:15.686Z] [BOT] ✅ Industry: Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c
[2026-01-15T08:28:17.490Z] [BOT] ✅ Created forum post: 🏢 Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems @ ORG_f8740713 in #🌉・san-francisco
[2026-01-15T08:28:17.490Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:28:18.991Z] [BOT] 💾 Marked as posted: Software Engineer in Machine Learning Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c (instance #1)
[2026-01-15T08:28:18.992Z] [BOT] 💾 BEFORE ARCHIVING: 1721 jobs in database
[2026-01-15T08:28:18.993Z] [BOT] ✅ No jobs to archive (all 1721 jobs within 7-day window)
[2026-01-15T08:28:19.009Z] [BOT] 💾 Saved posted_jobs.json: 1721 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:19.009Z] [BOT] 📍 [ROUTING] "Software Engineer – New grad" @ ORG_7729bbc1inue
[2026-01-15T08:28:19.010Z] [BOT] Category: AI (matched: "machine learning")
[2026-01-15T08:28:19.010Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:28:19.257Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New grad @ ORG_7729bbc1inue in #🤖・ai-jobs
  ✅ Industry: Software Engineer – New grad @ ORG_7729bbc1inue
[2026-01-15T08:28:21.031Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New grad @ ORG_7729bbc1inue in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:28:22.531Z] [BOT] 💾 Marked as posted: Software Engineer – New grad @ ORG_7729bbc1inue (instance #1)
[2026-01-15T08:28:22.531Z] [BOT] 💾 BEFORE ARCHIVING: 1722 jobs in database
[2026-01-15T08:28:22.532Z] [BOT] ✅ No jobs to archive (all 1722 jobs within 7-day window)
[2026-01-15T08:28:22.543Z] [BOT] 💾 Saved posted_jobs.json: 1722 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:22.544Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI" @ ORG_08c9a13c
[2026-01-15T08:28:22.544Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:28:22.788Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-15T08:28:22.788Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c
[2026-01-15T08:28:24.558Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:28:26.059Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c (instance #1)
[2026-01-15T08:28:26.060Z] [BOT] 💾 BEFORE ARCHIVING: 1723 jobs in database
[2026-01-15T08:28:26.061Z] [BOT] ✅ No jobs to archive (all 1723 jobs within 7-day window)
[2026-01-15T08:28:26.075Z] [BOT] 💾 Saved posted_jobs.json: 1723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:26.075Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c (instance #1)
[2026-01-15T08:28:26.076Z] [BOT] 💾 BEFORE ARCHIVING: 1724 jobs in database
[2026-01-15T08:28:26.077Z] [BOT] ✅ No jobs to archive (all 1724 jobs within 7-day window)
[2026-01-15T08:28:26.089Z] [BOT] 💾 Saved posted_jobs.json: 1724 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:26.090Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP" @ ORG_08c9a13c
[2026-01-15T08:28:26.090Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:28:26.385Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c
[2026-01-15T08:28:28.066Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T08:28:29.566Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c (instance #1)
[2026-01-15T08:28:29.566Z] [BOT] 💾 BEFORE ARCHIVING: 1725 jobs in database
[2026-01-15T08:28:29.567Z] [BOT] ✅ No jobs to archive (all 1725 jobs within 7-day window)
[2026-01-15T08:28:29.579Z] [BOT] 💾 Saved posted_jobs.json: 1725 active jobs
[2026-01-15T08:28:29.579Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:29.580Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd" @ ORG_08c9a13c
[2026-01-15T08:28:29.580Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:28:29.786Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-15T08:28:29.786Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c
[2026-01-15T08:28:31.476Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🌧️・seattle
[2026-01-15T08:28:31.477Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-15T08:28:32.978Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c (instance #1)
[2026-01-15T08:28:32.978Z] [BOT] 💾 BEFORE ARCHIVING: 1726 jobs in database
[2026-01-15T08:28:32.979Z] [BOT] ✅ No jobs to archive (all 1726 jobs within 7-day window)
[2026-01-15T08:28:32.990Z] [BOT] 💾 Saved posted_jobs.json: 1726 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:32.992Z] [BOT] 📍 [ROUTING] "Software Engineer - Agents" @ ORG_af294da6 AI
[2026-01-15T08:28:32.992Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T08:28:33.205Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Agents @ ORG_af294da6 AI in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Agents @ ORG_af294da6 AI
[2026-01-15T08:28:34.973Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Agents @ ORG_af294da6 AI in #🗽・new-york
[2026-01-15T08:28:34.973Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T08:28:36.475Z] [BOT] 💾 Marked as posted: Software Engineer - Agents @ ORG_af294da6 AI (instance #1)
[2026-01-15T08:28:36.475Z] [BOT] 💾 BEFORE ARCHIVING: 1727 jobs in database
[2026-01-15T08:28:36.476Z] [BOT] ✅ No jobs to archive (all 1727 jobs within 7-day window)
[2026-01-15T08:28:36.488Z] [BOT] 💾 Saved posted_jobs.json: 1727 active jobs
[2026-01-15T08:28:36.489Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:39.490Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-15T08:28:39.490Z] [BOT] 📍 [ROUTING] "Efficient ML Graduate - AI Platform - PhD" @ ORG_08c9a13c
[2026-01-15T08:28:39.491Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:28:39.740Z] [BOT] ✅ Created forum post: 🏢 Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T08:28:39.740Z] [BOT] ✅ Industry: Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c
[2026-01-15T08:28:41.444Z] [BOT] ✅ Created forum post: 🏢 Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T08:28:41.444Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:28:42.946Z] [BOT] 💾 Marked as posted: Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c (instance #1)
[2026-01-15T08:28:42.947Z] [BOT] 💾 BEFORE ARCHIVING: 1728 jobs in database
[2026-01-15T08:28:42.948Z] [BOT] ✅ No jobs to archive (all 1728 jobs within 7-day window)
[2026-01-15T08:28:42.958Z] [BOT] 💾 Saved posted_jobs.json: 1728 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:42.959Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Arch - Data Ecosystem" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-15T08:28:42.959Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:28:43.226Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb
[2026-01-15T08:28:44.928Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T08:28:46.430Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:28:46.431Z] [BOT] 💾 BEFORE ARCHIVING: 1729 jobs in database
[2026-01-15T08:28:46.432Z] [BOT] ✅ No jobs to archive (all 1729 jobs within 7-day window)
[2026-01-15T08:28:46.444Z] [BOT] 💾 Saved posted_jobs.json: 1729 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:46.444Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start" @ ORG_08c9a13c
[2026-01-15T08:28:46.445Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T08:28:46.665Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-15T08:28:46.665Z] [BOT] ✅ Industry: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c
[2026-01-15T08:28:48.482Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-15T08:28:48.482Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T08:28:49.984Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-15T08:28:49.985Z] [BOT] 💾 BEFORE ARCHIVING: 1730 jobs in database
[2026-01-15T08:28:49.986Z] [BOT] ✅ No jobs to archive (all 1730 jobs within 7-day window)
[2026-01-15T08:28:50.001Z] [BOT] 💾 Saved posted_jobs.json: 1730 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:53.002Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-15T08:28:53.003Z] [BOT] 📍 [ROUTING] "Data Analyst Graduate - 2026 Start”," @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-15T08:28:53.003Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T08:28:53.244Z] [BOT] ✅ Created forum post: 🏢 Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb in #📈・JID_fb739488
[2026-01-15T08:28:53.244Z] [BOT] ✅ Industry: Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb
[2026-01-15T08:28:55.106Z] [BOT] ✅ Created forum post: 🏢 Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T08:28:56.606Z] [BOT] 💾 Marked as posted: Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb (instance #1)
[2026-01-15T08:28:56.607Z] [BOT] 💾 BEFORE ARCHIVING: 1731 jobs in database
[2026-01-15T08:28:56.608Z] [BOT] ✅ No jobs to archive (all 1731 jobs within 7-day window)
[2026-01-15T08:28:56.621Z] [BOT] 💾 Saved posted_jobs.json: 1731 active jobs
[2026-01-15T08:28:56.621Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T08:28:59.623Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T08:28:59.623Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_64109984-detail (posted within 7 days)
[2026-01-15T08:28:59.623Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_07ad25af-detail (posted within 7 days)
[2026-01-15T08:28:59.624Z] [BOT] ⏭️  Skipping duplicate: JID_1f4dccac (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_8e21a019 (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_f3f673d1 (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_44577216-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_f785b07f-detail (posted within 7 days)
[2026-01-15T08:28:59.624Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2d5eb380-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_852fbee9-detail (posted within 7 days)
[2026-01-15T08:28:59.624Z] [BOT] ⏭️  Skipping duplicate: JID_a6e4719b (posted within 7 days)
[2026-01-15T08:28:59.754Z] [BOT] ✅ Loaded pending queue: 2725 total (2705 pending, 20 enriched, 0 posted)
[2026-01-15T08:28:59.909Z] [BOT] ✅ Saved pending queue: 2725 total (2705 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-15T08:28:59.909Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-15T08:28:59.964Z] [BOT] 📂 Loaded 3895 existing routing entries
[2026-01-15T08:29:00.027Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3905
   Timestamp: 2026-01-15T08:29:00.011Z
[2026-01-15T08:29:00.027Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
   Total attempts: 20
[2026-01-15T08:29:00.027Z] [BOT] Successful: 20
   Failed: 0
[2026-01-15T08:29:00.027Z] [BOT] Skipped: 0
[2026-01-15T08:29:00.028Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T08:29:00.028Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-01-15T08:29:00.028Z] [BOT] 1. #🤖・ai-jobs: 6 posts
     2. #🌉・san-francisco: 6 posts
     3. #🌧️・seattle: 3 posts
     4. #💻・tech-jobs: 3 posts
     5. #🗽・new-york: 1 posts
[2026-01-15T08:29:00.028Z] [BOT] [STATS] Channel stats saved
[2026-01-15T08:29:02.053Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*