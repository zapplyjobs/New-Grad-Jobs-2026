# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T05:27:33.243Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T05:26:44.791Z] ========================================
[2026-01-17T05:26:44.793Z] Discord Bot Execution Log
[2026-01-17T05:26:44.793Z] Environment: GitHub Actions
[2026-01-17T05:26:44.793Z] Node Version: v20.19.6
[2026-01-17T05:26:44.793Z] ========================================
[2026-01-17T05:26:44.793Z] Environment Variables Check:
[2026-01-17T05:26:44.793Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T05:26:44.793Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.793Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T05:26:44.794Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T05:26:44.794Z] 
Multi-Channel Configuration:
[2026-01-17T05:26:44.794Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.794Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.794Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.794Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.794Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.794Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.794Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.794Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.794Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T05:26:44.794Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T05:26:44.795Z] 
Data Files Check:
[2026-01-17T05:26:44.795Z] .github/data/new_jobs.json: ✅ Exists (10 items, 7349 bytes)
[2026-01-17T05:26:44.803Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1229247 bytes)
[2026-01-17T05:26:44.803Z] 
========================================
[2026-01-17T05:26:44.803Z] Starting Enhanced Discord Bot...
[2026-01-17T05:26:44.803Z] ========================================
[2026-01-17T05:26:45.335Z] [BOT] ✅ Loaded V2 database: 2269 jobs
[2026-01-17T05:26:46.091Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T05:26:46.091Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T05:26:46.091Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T05:26:46.210Z] [BOT] ✅ Loaded pending queue: 2882 total (2862 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Machine Learning Engineer - Multiple Teams at TikTok
[2026-01-17T05:26:46.213Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T05:26:46.213Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T05:26:46.213Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T05:26:46.214Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-17T05:26:46.214Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T05:26:46.214Z] [BOT] - Graduate Engineer - AI Safety @ TikTok: san jose, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T05:26:46.218Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-17T05:26:46.219Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Multiple Teams" @ ORG_1bb6fcfb
[2026-01-17T05:26:46.219Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:26:46.236Z] [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T05:26:46.641Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T05:26:46.642Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb
[2026-01-17T05:26:48.283Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:26:48.283Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:26:49.783Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:26:49.783Z] [BOT] 💾 BEFORE ARCHIVING: 2270 jobs in database
[2026-01-17T05:26:49.785Z] [BOT] ✅ No jobs to archive (all 2270 jobs within 7-day window)
[2026-01-17T05:26:49.803Z] [BOT] 💾 Saved posted_jobs.json: 2270 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:26:49.803Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - Search Ads Technology @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:26:49.804Z] [BOT] 💾 BEFORE ARCHIVING: 2271 jobs in database
[2026-01-17T05:26:49.805Z] [BOT] ✅ No jobs to archive (all 2271 jobs within 7-day window)
[2026-01-17T05:26:49.818Z] [BOT] 💾 Saved posted_jobs.json: 2271 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:26:49.819Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Ads Targeting" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:26:50.087Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T05:26:50.087Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb
[2026-01-17T05:26:51.735Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb in #🌉・san-francisco
[2026-01-17T05:26:51.736Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T05:26:53.237Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Ads Targeting @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:26:53.237Z] [BOT] 💾 BEFORE ARCHIVING: 2272 jobs in database
[2026-01-17T05:26:53.238Z] [BOT] ✅ No jobs to archive (all 2272 jobs within 7-day window)
[2026-01-17T05:26:53.252Z] [BOT] 💾 Saved posted_jobs.json: 2272 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:26:53.253Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate Local Services - PhD" @ ORG_1bb6fcfb
[2026-01-17T05:26:53.253Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T05:26:53.464Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate Local Services - PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-17T05:26:53.464Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate Local Services - PhD @ ORG_1bb6fcfb
[2026-01-17T05:26:55.111Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate Local Services - PhD @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:26:56.612Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate Local Services - PhD @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:26:56.612Z] [BOT] 💾 BEFORE ARCHIVING: 2273 jobs in database
[2026-01-17T05:26:56.614Z] [BOT] ✅ No jobs to archive (all 2273 jobs within 7-day window)
[2026-01-17T05:26:56.631Z] [BOT] 💾 Saved posted_jobs.json: 2273 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:26:59.632Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-17T05:26:59.633Z] [BOT] 📍 [ROUTING] "Software Design Assurance Engineer 1 - Engineering - Design Assurance" @ ORG_a06522bc Scientific
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T05:26:59.839Z] [BOT] ✅ Created forum post: 🏢 Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific in #💻・tech-jobs
  ✅ Industry: Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific
[2026-01-17T05:27:01.554Z] [BOT] ✅ Created forum post: 🏢 Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-17T05:27:03.056Z] [BOT] 💾 Marked as posted: Software Design Assurance Engineer 1 - Engineering - Design Assurance @ ORG_a06522bc Scientific (instance #1)
[2026-01-17T05:27:03.057Z] [BOT] 💾 BEFORE ARCHIVING: 2274 jobs in database
[2026-01-17T05:27:03.058Z] [BOT] ✅ No jobs to archive (all 2274 jobs within 7-day window)
[2026-01-17T05:27:03.074Z] [BOT] 💾 Saved posted_jobs.json: 2274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:27:03.074Z] [BOT] 📍 [ROUTING] "Graduate Engineer - AI Safety" @ ORG_1bb6fcfb
[2026-01-17T05:27:03.074Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T05:27:03.304Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - AI Safety @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Engineer - AI Safety @ ORG_1bb6fcfb
[2026-01-17T05:27:04.934Z] [BOT] ✅ Created forum post: 🏢 Graduate Engineer - AI Safety @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:27:06.435Z] [BOT] 💾 Marked as posted: Graduate Engineer - AI Safety @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:27:06.436Z] [BOT] 💾 BEFORE ARCHIVING: 2275 jobs in database
[2026-01-17T05:27:06.437Z] [BOT] ✅ No jobs to archive (all 2275 jobs within 7-day window)
[2026-01-17T05:27:06.451Z] [BOT] 💾 Saved posted_jobs.json: 2275 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:27:06.451Z] [BOT] 💾 Marked as posted: Graduate Engineer @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:27:06.452Z] [BOT] 💾 BEFORE ARCHIVING: 2276 jobs in database
[2026-01-17T05:27:06.453Z] [BOT] ✅ No jobs to archive (all 2276 jobs within 7-day window)
[2026-01-17T05:27:06.468Z] [BOT] 💾 Saved posted_jobs.json: 2276 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:27:06.469Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Global E-commerce Content Recommendation" @ ORG_1bb6fcfb
[2026-01-17T05:27:06.469Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T05:27:06.867Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb
[2026-01-17T05:27:08.515Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T05:27:10.017Z] [BOT] 💾 Marked as posted: Graduate Research Scientist - Global E-commerce Content Recommendation @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:27:10.017Z] [BOT] 💾 BEFORE ARCHIVING: 2277 jobs in database
[2026-01-17T05:27:10.019Z] [BOT] ✅ No jobs to archive (all 2277 jobs within 7-day window)
[2026-01-17T05:27:10.032Z] [BOT] 💾 Saved posted_jobs.json: 2277 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:27:10.032Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Compute Platform - Database Acceleration" @ ORG_1bb6fcfb
[2026-01-17T05:27:10.032Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T05:27:10.182Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb
[2026-01-17T05:27:11.925Z] [BOT] ✅ Created forum post: 🏢 Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:27:13.426Z] [BOT] 💾 Marked as posted: Research Scientist Graduate - Compute Platform - Database Acceleration @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:27:13.426Z] [BOT] 💾 BEFORE ARCHIVING: 2278 jobs in database
[2026-01-17T05:27:13.428Z] [BOT] ✅ No jobs to archive (all 2278 jobs within 7-day window)
[2026-01-17T05:27:13.445Z] [BOT] 💾 Saved posted_jobs.json: 2278 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:27:16.447Z] [BOT] 📌 Posting 3 jobs to #📈・JID_fb739488
[2026-01-17T05:27:16.447Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - E-commerce" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T05:27:16.447Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T05:27:16.651Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb
[2026-01-17T05:27:18.337Z] [BOT] ✅ Created forum post: 🏢 Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:27:19.837Z] [BOT] 💾 Marked as posted: Data Engineer Graduate - E-commerce @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:27:19.838Z] [BOT] 💾 BEFORE ARCHIVING: 2279 jobs in database
[2026-01-17T05:27:19.839Z] [BOT] ✅ No jobs to archive (all 2279 jobs within 7-day window)
[2026-01-17T05:27:19.853Z] [BOT] 💾 Saved posted_jobs.json: 2279 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T05:27:19.853Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-17T05:27:19.854Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T05:27:20.344Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD @ ORG_1bb6fcfb
[2026-01-17T05:27:22.068Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:27:23.569Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Tiktok-Product-Data Science - 2026 Start','PhD @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:27:23.569Z] [BOT] 💾 BEFORE ARCHIVING: 2280 jobs in database
[2026-01-17T05:27:23.570Z] [BOT] ✅ No jobs to archive (all 2280 jobs within 7-day window)
[2026-01-17T05:27:23.584Z] [BOT] 💾 Saved posted_jobs.json: 2280 active jobs
[2026-01-17T05:27:23.584Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T05:27:23.584Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-17T05:27:23.877Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science @ ORG_1bb6fcfb in #📈・JID_fb739488
[2026-01-17T05:27:23.877Z] [BOT] ✅ Industry: Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science @ ORG_1bb6fcfb
[2026-01-17T05:27:25.602Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T05:27:27.103Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science @ ORG_1bb6fcfb (instance #1)
[2026-01-17T05:27:27.103Z] [BOT] 💾 BEFORE ARCHIVING: 2281 jobs in database
[2026-01-17T05:27:27.104Z] [BOT] ✅ No jobs to archive (all 2281 jobs within 7-day window)
[2026-01-17T05:27:27.119Z] [BOT] 💾 Saved posted_jobs.json: 2281 active jobs
[2026-01-17T05:27:27.119Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T05:27:30.120Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T05:27:30.121Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a1cbb331 (posted within 7 days)
[2026-01-17T05:27:30.121Z] [BOT] ⏭️  Skipping duplicate: JID_3c5fadf7 (posted within 7 days)
[2026-01-17T05:27:30.121Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_45bfe2e6 (posted within 7 days)
[2026-01-17T05:27:30.121Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ee347799 (posted within 7 days)
[2026-01-17T05:27:30.121Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_16a94eef (posted within 7 days)
[2026-01-17T05:27:30.121Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_841e3d8c (posted within 7 days)
[2026-01-17T05:27:30.122Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6748210c (posted within 7 days)
[2026-01-17T05:27:30.122Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_d2aba9e9 (posted within 7 days)
[2026-01-17T05:27:30.122Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a59e7fc5 (posted within 7 days)
[2026-01-17T05:27:30.122Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_73de1a4f (posted within 7 days)
[2026-01-17T05:27:30.230Z] [BOT] ✅ Loaded pending queue: 2882 total (2862 pending, 20 enriched, 0 posted)
[2026-01-17T05:27:30.418Z] [BOT] ✅ Saved pending queue: 2882 total (2862 pending, 10 enriched, 10 posted)
[2026-01-17T05:27:30.418Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-17T05:27:30.476Z] [BOT] 📂 Loaded 4485 existing routing entries
[2026-01-17T05:27:30.544Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4495
   Timestamp: 2026-01-17T05:27:30.524Z
[2026-01-17T05:27:30.545Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
[2026-01-17T05:27:30.545Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-17T05:27:30.545Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
     1. #🌉・san-francisco: 8 posts
     2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #📈・JID_fb739488: 3 posts
[2026-01-17T05:27:30.545Z] [BOT] 5. #🚌・boston: 1 posts
[2026-01-17T05:27:30.545Z] [BOT] [STATS] Channel stats saved
[2026-01-17T05:27:32.570Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*