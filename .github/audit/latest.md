# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T23:15:46.769Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T23:15:08.752Z] ========================================
[2026-01-30T23:15:08.754Z] Discord Bot Execution Log
[2026-01-30T23:15:08.754Z] Environment: GitHub Actions
[2026-01-30T23:15:08.754Z] Node Version: v20.20.0
[2026-01-30T23:15:08.754Z] ========================================
[2026-01-30T23:15:08.754Z] Environment Variables Check:
[2026-01-30T23:15:08.754Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T23:15:08.754Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.754Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T23:15:08.754Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T23:15:08.754Z] 
Multi-Channel Configuration:
[2026-01-30T23:15:08.754Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.755Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.755Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.755Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.755Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.755Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.755Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.755Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.755Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T23:15:08.755Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T23:15:08.755Z] 
Data Files Check:
[2026-01-30T23:15:08.756Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T23:15:08.784Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5042439 bytes)
[2026-01-30T23:15:08.784Z] 
========================================
[2026-01-30T23:15:08.784Z] Starting Enhanced Discord Bot...
[2026-01-30T23:15:08.784Z] ========================================
[2026-01-30T23:15:09.351Z] [BOT] ✅ Loaded V2 database: 758 jobs
[2026-01-30T23:15:10.550Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T23:15:10.551Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T23:15:10.551Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T23:15:10.671Z] [BOT] ✅ Loaded pending queue: 2939 total (2160 pending, 50 enriched, 729 posted)
[2026-01-30T23:15:10.671Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T23:15:10.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T23:15:10.672Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T23:15:10.672Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T23:15:10.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T23:15:10.673Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T23:15:10.673Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T23:15:10.673Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T23:15:10.673Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T23:15:10.674Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T23:15:10.674Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T23:15:10.674Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T23:15:10.674Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-30T23:15:10.674Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T23:15:10.674Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T23:15:10.675Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T23:15:10.675Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T23:15:10.675Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-30T23:15:10.675Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T23:15:10.675Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T23:15:10.675Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-01-30T23:15:10.676Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T23:15:10.681Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T23:15:10.681Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Associate - Mathematics at Northeastern University
[2026-01-30T23:15:10.681Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar - Interdisciplinary Data Science at University of Nevada Las Vegas (UNLV)
🚫 Skipping blacklisted job: People Technology Delivery Manager at gusto
[2026-01-30T23:15:10.843Z] [BOT] ✅ Loaded pending queue: 2939 total (2160 pending, 50 enriched, 729 posted)
[2026-01-30T23:15:11.028Z] [BOT] ✅ Saved pending queue: 2936 total (2160 pending, 47 enriched, 729 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
[2026-01-30T23:15:11.028Z] [BOT] 📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-30T23:15:11.028Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-30T23:15:11.029Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-30T23:15:11.029Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-30T23:15:11.029Z] [BOT] - Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ AbbVie: san bruno, waukegan, cambridge
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T23:15:11.033Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T23:15:11.034Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Tampa, FL" @ samsara
[2026-01-30T23:15:11.034Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T23:15:11.051Z] [BOT ERROR] (node:3262) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T23:15:11.292Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Tampa, FL @ samsara in #💰・finance-jobs
[2026-01-30T23:15:11.292Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Tampa, FL @ samsara
[2026-01-30T23:15:11.293Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Tampa, FL @ samsara → category channel (1 total channels)
[2026-01-30T23:15:11.293Z] [BOT] 💾 BEFORE MERGE: 759 jobs in memory (cached)
[2026-01-30T23:15:11.310Z] [BOT] ✅ Loaded V2 database: 758 jobs
💾 DISK STATE: 758 jobs on disk
[2026-01-30T23:15:11.310Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=759
[2026-01-30T23:15:11.312Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:11.312Z] [BOT] 💾 AFTER MERGE: 759 jobs (merged disk + memory)
[2026-01-30T23:15:11.313Z] [BOT] ✅ No jobs to archive (all 759 jobs within 7-day window)
[2026-01-30T23:15:11.374Z] [BOT] 💾 Saved posted_jobs.json: 759 active jobs
[2026-01-30T23:15:11.374Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:12.877Z] [BOT] 📍 [ROUTING] "Future Opportunities: Early Career Sales Talent" @ gusto
   Category: FINANCE (matched: "accounting")
[2026-01-30T23:15:12.877Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T23:15:13.048Z] [BOT] ✅ Posted message: Future Opportunities: Early Career Sales Talent @ gusto in #💰・finance-jobs
[2026-01-30T23:15:13.049Z] [BOT] ✅ Industry: Future Opportunities: Early Career Sales Talent @ gusto
[2026-01-30T23:15:13.049Z] [BOT] 💾 Added channel posting: Future Opportunities: Early Career Sales Talent @ gusto → category channel (1 total channels)
[2026-01-30T23:15:13.049Z] [BOT] 💾 BEFORE MERGE: 760 jobs in memory (cached)
[2026-01-30T23:15:13.064Z] [BOT] ✅ Loaded V2 database: 759 jobs
[2026-01-30T23:15:13.064Z] [BOT] 💾 DISK STATE: 759 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=760
[2026-01-30T23:15:13.066Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:13.066Z] [BOT] 💾 AFTER MERGE: 760 jobs (merged disk + memory)
[2026-01-30T23:15:13.067Z] [BOT] ✅ No jobs to archive (all 760 jobs within 7-day window)
[2026-01-30T23:15:13.117Z] [BOT] 💾 Saved posted_jobs.json: 760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:17.619Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T23:15:17.619Z] [BOT] 📍 [ROUTING] "Machine Learning Analyst" @ ORG_55640109 Capital
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T23:15:17.620Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T23:15:17.904Z] [BOT] ✅ Posted message: Machine Learning Analyst @ ORG_55640109 Capital in #🤖・ai-jobs
[2026-01-30T23:15:17.905Z] [BOT] ✅ Industry: Machine Learning Analyst @ ORG_55640109 Capital
[2026-01-30T23:15:17.905Z] [BOT] 💾 Added channel posting: Machine Learning Analyst @ ORG_55640109 Capital → category channel (1 total channels)
💾 BEFORE MERGE: 761 jobs in memory (cached)
[2026-01-30T23:15:17.920Z] [BOT] ✅ Loaded V2 database: 760 jobs
💾 DISK STATE: 760 jobs on disk
[2026-01-30T23:15:17.920Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=761
[2026-01-30T23:15:17.922Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:17.922Z] [BOT] 💾 AFTER MERGE: 761 jobs (merged disk + memory)
[2026-01-30T23:15:17.922Z] [BOT] ✅ No jobs to archive (all 761 jobs within 7-day window)
[2026-01-30T23:15:17.972Z] [BOT] 💾 Saved posted_jobs.json: 761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:19.474Z] [BOT] 📍 [ROUTING] "Associate – Platforms & Technology" @ ORG_3824a9f4 Worldwide
[2026-01-30T23:15:19.474Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T23:15:19.648Z] [BOT] ✅ Posted message: Associate – Platforms & Technology @ ORG_3824a9f4 Worldwide in #🤖・ai-jobs
[2026-01-30T23:15:19.648Z] [BOT] ✅ Industry: Associate – Platforms & Technology @ ORG_3824a9f4 Worldwide
[2026-01-30T23:15:19.649Z] [BOT] 💾 Added channel posting: Associate – Platforms & Technology @ ORG_3824a9f4 Worldwide → category channel (1 total channels)
💾 BEFORE MERGE: 762 jobs in memory (cached)
[2026-01-30T23:15:19.678Z] [BOT] ✅ Loaded V2 database: 761 jobs
[2026-01-30T23:15:19.678Z] [BOT] 💾 DISK STATE: 761 jobs on disk
[2026-01-30T23:15:19.680Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=762
[2026-01-30T23:15:19.681Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:19.681Z] [BOT] 💾 AFTER MERGE: 762 jobs (merged disk + memory)
[2026-01-30T23:15:19.682Z] [BOT] ✅ No jobs to archive (all 762 jobs within 7-day window)
[2026-01-30T23:15:19.740Z] [BOT] 💾 Saved posted_jobs.json: 762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:21.241Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model - Generative AI" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T23:15:21.241Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T23:15:21.389Z] [BOT] ✅ Posted message: Research Scientist Graduate - Foundation Model - Generative AI @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist Graduate - Foundation Model - Generative AI @ ORG_08c9a13c
[2026-01-30T23:15:21.389Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Foundation Model - Generative AI @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-30T23:15:21.390Z] [BOT] 💾 BEFORE MERGE: 763 jobs in memory (cached)
[2026-01-30T23:15:21.405Z] [BOT] ✅ Loaded V2 database: 762 jobs
💾 DISK STATE: 762 jobs on disk
[2026-01-30T23:15:21.405Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=763
[2026-01-30T23:15:21.407Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:21.407Z] [BOT] 💾 AFTER MERGE: 763 jobs (merged disk + memory)
[2026-01-30T23:15:21.408Z] [BOT] ✅ No jobs to archive (all 763 jobs within 7-day window)
[2026-01-30T23:15:21.464Z] [BOT] 💾 Saved posted_jobs.json: 763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:25.967Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-30T23:15:25.968Z] [BOT] 📍 [ROUTING] "Candidate Experience Coordinator (12-month Contract)" @ brex
   Category: TECH (default)
[2026-01-30T23:15:25.968Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:15:26.334Z] [BOT] ✅ Posted message: Candidate Experience Coordinator (12-month Contract) @ brex in #💻・tech-jobs
  ✅ Industry: Candidate Experience Coordinator (12-month Contract) @ brex
[2026-01-30T23:15:26.334Z] [BOT] 💾 Added channel posting: Candidate Experience Coordinator (12-month Contract) @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 764 jobs in memory (cached)
[2026-01-30T23:15:26.350Z] [BOT] ✅ Loaded V2 database: 763 jobs
💾 DISK STATE: 763 jobs on disk
[2026-01-30T23:15:26.350Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=764
[2026-01-30T23:15:26.352Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:26.352Z] [BOT] 💾 AFTER MERGE: 764 jobs (merged disk + memory)
[2026-01-30T23:15:26.353Z] [BOT] ✅ No jobs to archive (all 764 jobs within 7-day window)
[2026-01-30T23:15:26.409Z] [BOT] 💾 Saved posted_jobs.json: 764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:27.911Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - 2026 Start" @ ORG_7bc88ebb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:15:28.122Z] [BOT] ✅ Posted message: Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb in #💻・tech-jobs
[2026-01-30T23:15:28.122Z] [BOT] ✅ Industry: Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb
[2026-01-30T23:15:28.122Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - 2026 Start @ ORG_7bc88ebb → category channel (1 total channels)
💾 BEFORE MERGE: 765 jobs in memory (cached)
[2026-01-30T23:15:28.138Z] [BOT] ✅ Loaded V2 database: 764 jobs
💾 DISK STATE: 764 jobs on disk
[2026-01-30T23:15:28.138Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=765
[2026-01-30T23:15:28.140Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:28.140Z] [BOT] 💾 AFTER MERGE: 765 jobs (merged disk + memory)
[2026-01-30T23:15:28.141Z] [BOT] ✅ No jobs to archive (all 765 jobs within 7-day window)
[2026-01-30T23:15:28.189Z] [BOT] 💾 Saved posted_jobs.json: 765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:29.691Z] [BOT] 📍 [ROUTING] "Software Engineer - Full Stack" @ ORG_0baaf6f2 Express
[2026-01-30T23:15:29.691Z] [BOT] Category: TECH (matched: "software")
[2026-01-30T23:15:29.691Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:15:29.930Z] [BOT] ✅ Posted message: Software Engineer - Full Stack @ ORG_0baaf6f2 Express in #💻・tech-jobs
  ✅ Industry: Software Engineer - Full Stack @ ORG_0baaf6f2 Express
[2026-01-30T23:15:29.930Z] [BOT] 💾 Added channel posting: Software Engineer - Full Stack @ ORG_0baaf6f2 Express → category channel (1 total channels)
💾 BEFORE MERGE: 766 jobs in memory (cached)
[2026-01-30T23:15:29.945Z] [BOT] ✅ Loaded V2 database: 765 jobs
💾 DISK STATE: 765 jobs on disk
[2026-01-30T23:15:29.946Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=766
[2026-01-30T23:15:29.947Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:29.948Z] [BOT] 💾 AFTER MERGE: 766 jobs (merged disk + memory)
[2026-01-30T23:15:29.948Z] [BOT] ✅ No jobs to archive (all 766 jobs within 7-day window)
[2026-01-30T23:15:29.998Z] [BOT] 💾 Saved posted_jobs.json: 766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:31.500Z] [BOT] 📍 [ROUTING] "Applications Analyst Associate" @ ORG_37856574 Health
[2026-01-30T23:15:31.501Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:15:31.688Z] [BOT] ✅ Posted message: Applications Analyst Associate @ ORG_37856574 Health in #💻・tech-jobs
[2026-01-30T23:15:31.689Z] [BOT] ✅ Industry: Applications Analyst Associate @ ORG_37856574 Health
[2026-01-30T23:15:31.689Z] [BOT] 💾 Added channel posting: Applications Analyst Associate @ ORG_37856574 Health → category channel (1 total channels)
[2026-01-30T23:15:31.689Z] [BOT] 💾 BEFORE MERGE: 767 jobs in memory (cached)
[2026-01-30T23:15:31.704Z] [BOT] ✅ Loaded V2 database: 766 jobs
💾 DISK STATE: 766 jobs on disk
[2026-01-30T23:15:31.704Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=767
[2026-01-30T23:15:31.706Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:31.706Z] [BOT] 💾 AFTER MERGE: 767 jobs (merged disk + memory)
[2026-01-30T23:15:31.707Z] [BOT] ✅ No jobs to archive (all 767 jobs within 7-day window)
[2026-01-30T23:15:31.755Z] [BOT] 💾 Saved posted_jobs.json: 767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:36.256Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T23:15:36.258Z] [BOT] 📍 [ROUTING] "Technology Analyst Program" @ ORG_a5457c49
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T23:15:36.512Z] [BOT] ✅ Posted message: Technology Analyst Program @ ORG_a5457c49 in #📊・JID_fb739488
  ✅ Industry: Technology Analyst Program @ ORG_a5457c49
[2026-01-30T23:15:36.512Z] [BOT] 💾 Added channel posting: Technology Analyst Program @ ORG_a5457c49 → category channel (1 total channels)
[2026-01-30T23:15:36.512Z] [BOT] 💾 BEFORE MERGE: 768 jobs in memory (cached)
[2026-01-30T23:15:36.527Z] [BOT] ✅ Loaded V2 database: 767 jobs
💾 DISK STATE: 767 jobs on disk
[2026-01-30T23:15:36.528Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=768
[2026-01-30T23:15:36.529Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 768 jobs (merged disk + memory)
[2026-01-30T23:15:36.530Z] [BOT] ✅ No jobs to archive (all 768 jobs within 7-day window)
[2026-01-30T23:15:36.580Z] [BOT] 💾 Saved posted_jobs.json: 768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:38.467Z] [BOT] ✅ Posted message: Technology Analyst Program @ ORG_a5457c49 in #🗽・JID_98d4f0de
[2026-01-30T23:15:38.467Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T23:15:38.467Z] [BOT] 💾 Added channel posting: Technology Analyst Program @ ORG_a5457c49 → location channel (2 total channels)
[2026-01-30T23:15:38.467Z] [BOT] 💾 BEFORE MERGE: 768 jobs in memory (cached)
[2026-01-30T23:15:38.482Z] [BOT] ✅ Loaded V2 database: 768 jobs
💾 DISK STATE: 768 jobs on disk
[2026-01-30T23:15:38.482Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=768
[2026-01-30T23:15:38.484Z] [BOT] 🔀 Deep merged: Technology Analyst Program @ ORG_a5457c49 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T23:15:38.484Z] [BOT] 💾 AFTER MERGE: 768 jobs (merged disk + memory)
[2026-01-30T23:15:38.485Z] [BOT] ✅ No jobs to archive (all 768 jobs within 7-day window)
[2026-01-30T23:15:38.534Z] [BOT] 💾 Saved posted_jobs.json: 768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:43.036Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T23:15:43.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eafe9357..." not found, but found as SHA256 "2f54df63b7b9f17f"
[2026-01-30T23:15:43.038Z] [BOT] ⏭️  Skipping duplicate: JID_f536e006 (posted within 7 days)
[2026-01-30T23:15:43.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3523fec6..." not found, but found as SHA256 "bf37f48ae7697a6d"
⏭️  Skipping duplicate: JID_1e38ba0d (posted within 7 days)
[2026-01-30T23:15:43.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1f2e2955..." not found, but found as SHA256 "3adc428b09046513"
⏭️  Skipping duplicate: JID_1f2e2955 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5dd0e99c..." not found, but found as SHA256 "32865b0c6ae53053"
⏭️  Skipping duplicate: JID_58a7eb64-_r-10385188 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_246c8249-..." not found, but found as SHA256 "abc504f1287871fe"
⏭️  Skipping duplicate: JID_3b2cbde5 (posted within 7 days)
[2026-01-30T23:15:43.039Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10278ded..." not found, but found as SHA256 "3616c12b89f1e77f"
[2026-01-30T23:15:43.039Z] [BOT] ⏭️  Skipping duplicate: JID_dd7bf2d2 (posted within 7 days)
[2026-01-30T23:15:43.040Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b440c250..." not found, but found as SHA256 "d580349f4f0c4f63"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_8b85d47c-detail (posted within 7 days)
[2026-01-30T23:15:43.040Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b1583194..." not found, but found as SHA256 "45853d5f41716df2"
⏭️  Skipping duplicate: JID_b1583194 (posted within 7 days)
[2026-01-30T23:15:43.040Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a9e90755..." not found, but found as SHA256 "d63a7f3907d49925"
⏭️  Skipping duplicate: JID_0c2d9b4d-vcuhealth_careers-JID_fb0b3453-associate_r40772-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b09b532d..." not found, but found as SHA256 "b510b7ffa0192f5a"
⏭️  Skipping duplicate: JID_d24f1bed (posted within 7 days)
[2026-01-30T23:15:43.160Z] [BOT] ✅ Loaded pending queue: 2936 total (2160 pending, 47 enriched, 729 posted)
[2026-01-30T23:15:43.344Z] [BOT] ✅ Saved pending queue: 2936 total (2160 pending, 37 enriched, 739 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T23:15:43.345Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T23:15:43.428Z] [BOT] 📂 Loaded 10820 existing routing entries
[2026-01-30T23:15:43.553Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T23:15:43.553Z] [BOT] Total entries: 10830
   Timestamp: 2026-01-30T23:15:43.508Z
[2026-01-30T23:15:43.559Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 28
   Successful: 11
   Failed: 0
   Skipped: 17
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💰・finance-jobs: 2 posts
     4. #📊・JID_fb739488: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 768 jobs in memory (cached)
[2026-01-30T23:15:43.584Z] [BOT] ✅ Loaded V2 database: 768 jobs
💾 DISK STATE: 768 jobs on disk
[2026-01-30T23:15:43.584Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=768
[2026-01-30T23:15:43.587Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:15:43.587Z] [BOT] 💾 AFTER MERGE: 768 jobs (merged disk + memory)
[2026-01-30T23:15:43.588Z] [BOT] ✅ No jobs to archive (all 768 jobs within 7-day window)
[2026-01-30T23:15:43.635Z] [BOT] 💾 Saved posted_jobs.json: 768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:15:43.635Z] [BOT] ✅ Database saved successfully
[2026-01-30T23:15:45.665Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3262) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*