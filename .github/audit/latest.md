# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T15:46:16.406Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T15:45:36.672Z] ========================================
[2026-01-31T15:45:36.674Z] Discord Bot Execution Log
[2026-01-31T15:45:36.674Z] Environment: GitHub Actions
[2026-01-31T15:45:36.675Z] Node Version: v20.20.0
[2026-01-31T15:45:36.675Z] ========================================
[2026-01-31T15:45:36.675Z] Environment Variables Check:
[2026-01-31T15:45:36.675Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T15:45:36.675Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.675Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T15:45:36.675Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T15:45:36.675Z] 
Multi-Channel Configuration:
[2026-01-31T15:45:36.675Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.675Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.676Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.676Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.676Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.676Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.676Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.676Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.676Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T15:45:36.676Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T15:45:36.676Z] 
Data Files Check:
[2026-01-31T15:45:36.677Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T15:45:36.712Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7541123 bytes)
[2026-01-31T15:45:36.712Z] 
========================================
[2026-01-31T15:45:36.712Z] Starting Enhanced Discord Bot...
[2026-01-31T15:45:36.712Z] ========================================
[2026-01-31T15:45:37.262Z] [BOT] ✅ Loaded V2 database: 1226 jobs
[2026-01-31T15:45:37.805Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T15:45:37.806Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T15:45:37.806Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T15:45:37.921Z] [BOT] ✅ Loaded pending queue: 2944 total (1697 pending, 50 enriched, 1197 posted)
[2026-01-31T15:45:37.922Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T15:45:37.923Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T15:45:37.923Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T15:45:37.923Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T15:45:37.923Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T15:45:37.924Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T15:45:37.924Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T15:45:37.924Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T15:45:37.924Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T15:45:37.925Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
[2026-01-31T15:45:37.925Z] [BOT] ⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T15:45:37.925Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T15:45:37.925Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T15:45:37.925Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T15:45:37.926Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T15:45:37.926Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T15:45:37.926Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T15:45:37.926Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T15:45:37.926Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T15:45:37.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T15:45:37.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T15:45:37.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T15:45:37.927Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
[2026-01-31T15:45:37.931Z] [BOT] ⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development at Citi
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T15:45:37.938Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T15:45:37.938Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Sites at figma
[2026-01-31T15:45:37.939Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, CMS at figma
🚫 Skipping blacklisted job: Product Manager, Growth at figma
🚫 Skipping blacklisted job: Director, Design - Communication Tools at figma
🚫 Skipping blacklisted job: Manager, Software Engineering - Expressive AI at figma
[2026-01-31T15:45:37.939Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Collaboration Tools at figma
🚫 Skipping blacklisted job: Sales Onboarding Program Manager at figma
🚫 Skipping blacklisted job: Demo Strategy & Effectiveness Manager  at figma
[2026-01-31T15:45:38.048Z] [BOT] ✅ Loaded pending queue: 2944 total (1697 pending, 50 enriched, 1197 posted)
[2026-01-31T15:45:38.256Z] [BOT] ✅ Saved pending queue: 2936 total (1697 pending, 42 enriched, 1197 posted)
🗑️ Removed 8 blacklisted jobs from pending queue
[2026-01-31T15:45:38.257Z] [BOT] 📋 After blacklist filter: 21 jobs (8 blacklisted)
📋 After data quality filter: 21 jobs (0 invalid)
[2026-01-31T15:45:38.257Z] [BOT] 📋 After multi-location grouping: 21 unique jobs to post
[2026-01-31T15:45:38.257Z] [BOT] ⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T15:45:38.259Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T15:45:38.260Z] [BOT] 📍 [ROUTING] "AI Data Specialist - AI Data Specialist Team" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
[2026-01-31T15:45:38.260Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:45:38.286Z] [BOT ERROR] (node:2561) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T15:45:38.671Z] [BOT] ✅ Posted message: AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598 in #🤖・ai-jobs
  ✅ Industry: AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598
[2026-01-31T15:45:38.672Z] [BOT] 💾 Added channel posting: AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-31T15:45:38.673Z] [BOT] 💾 BEFORE MERGE: 1227 jobs in memory (cached)
[2026-01-31T15:45:38.696Z] [BOT] ✅ Loaded V2 database: 1226 jobs
💾 DISK STATE: 1226 jobs on disk
[2026-01-31T15:45:38.697Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1227
[2026-01-31T15:45:38.700Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:45:38.700Z] [BOT] 💾 AFTER MERGE: 1227 jobs (merged disk + memory)
[2026-01-31T15:45:38.701Z] [BOT] ✅ No jobs to archive (all 1227 jobs within 7-day window)
[2026-01-31T15:45:38.783Z] [BOT] 💾 Saved posted_jobs.json: 1227 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:45:40.286Z] [BOT] 📍 [ROUTING] "Software Engineer Data/AI/Intelligent Systems 1" @ ORG_aa669b28
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T15:45:40.286Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:45:40.580Z] [BOT] ✅ Posted message: Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 in #🤖・ai-jobs
[2026-01-31T15:45:40.581Z] [BOT] ✅ Industry: Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28
[2026-01-31T15:45:40.581Z] [BOT] 💾 Added channel posting: Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 → category channel (1 total channels)
[2026-01-31T15:45:40.581Z] [BOT] 💾 BEFORE MERGE: 1228 jobs in memory (cached)
[2026-01-31T15:45:40.603Z] [BOT] ✅ Loaded V2 database: 1227 jobs
💾 DISK STATE: 1227 jobs on disk
[2026-01-31T15:45:40.603Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1228
[2026-01-31T15:45:40.606Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1228 jobs (merged disk + memory)
[2026-01-31T15:45:40.607Z] [BOT] ✅ No jobs to archive (all 1228 jobs within 7-day window)
[2026-01-31T15:45:40.677Z] [BOT] 💾 Saved posted_jobs.json: 1228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:45:42.409Z] [BOT] ✅ Posted message: Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 in #🗽・JID_98d4f0de
[2026-01-31T15:45:42.409Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T15:45:42.409Z] [BOT] 💾 Added channel posting: Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 → location channel (2 total channels)
💾 BEFORE MERGE: 1228 jobs in memory (cached)
[2026-01-31T15:45:42.431Z] [BOT] ✅ Loaded V2 database: 1228 jobs
💾 DISK STATE: 1228 jobs on disk
[2026-01-31T15:45:42.431Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1228
[2026-01-31T15:45:42.434Z] [BOT] 🔀 Deep merged: Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T15:45:42.434Z] [BOT] 💾 AFTER MERGE: 1228 jobs (merged disk + memory)
[2026-01-31T15:45:42.435Z] [BOT] ✅ No jobs to archive (all 1228 jobs within 7-day window)
[2026-01-31T15:45:42.505Z] [BOT] 💾 Saved posted_jobs.json: 1228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:45:44.008Z] [BOT] 📍 [ROUTING] "AI Product Engineer – New Grad" @ ORG_a528a4d5
[2026-01-31T15:45:44.008Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:45:44.309Z] [BOT] ✅ Posted message: AI Product Engineer – New Grad @ ORG_a528a4d5 in #🤖・ai-jobs
[2026-01-31T15:45:44.309Z] [BOT] ✅ Industry: AI Product Engineer – New Grad @ ORG_a528a4d5
[2026-01-31T15:45:44.310Z] [BOT] 💾 Added channel posting: AI Product Engineer – New Grad @ ORG_a528a4d5 → category channel (1 total channels)
[2026-01-31T15:45:44.310Z] [BOT] 💾 BEFORE MERGE: 1229 jobs in memory (cached)
[2026-01-31T15:45:44.332Z] [BOT] ✅ Loaded V2 database: 1228 jobs
💾 DISK STATE: 1228 jobs on disk
[2026-01-31T15:45:44.333Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1229
[2026-01-31T15:45:44.335Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:45:44.336Z] [BOT] 💾 AFTER MERGE: 1229 jobs (merged disk + memory)
[2026-01-31T15:45:44.336Z] [BOT] ✅ No jobs to archive (all 1229 jobs within 7-day window)
[2026-01-31T15:45:44.407Z] [BOT] 💾 Saved posted_jobs.json: 1229 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:45:45.909Z] [BOT] 📍 [ROUTING] "Software Engineer Security & Automation 1" @ ORG_aa669b28
[2026-01-31T15:45:45.910Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T15:45:46.252Z] [BOT] ✅ Posted message: Software Engineer Security & Automation 1 @ ORG_aa669b28 in #🤖・ai-jobs
[2026-01-31T15:45:46.252Z] [BOT] ✅ Industry: Software Engineer Security & Automation 1 @ ORG_aa669b28
[2026-01-31T15:45:46.253Z] [BOT] 💾 Added channel posting: Software Engineer Security & Automation 1 @ ORG_aa669b28 → category channel (1 total channels)
[2026-01-31T15:45:46.253Z] [BOT] 💾 BEFORE MERGE: 1230 jobs in memory (cached)
[2026-01-31T15:45:46.275Z] [BOT] ✅ Loaded V2 database: 1229 jobs
💾 DISK STATE: 1229 jobs on disk
[2026-01-31T15:45:46.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1230
[2026-01-31T15:45:46.277Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:45:46.278Z] [BOT] 💾 AFTER MERGE: 1230 jobs (merged disk + memory)
[2026-01-31T15:45:46.278Z] [BOT] ✅ No jobs to archive (all 1230 jobs within 7-day window)
[2026-01-31T15:45:46.345Z] [BOT] 💾 Saved posted_jobs.json: 1230 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:45:47.848Z] [BOT] 📍 [ROUTING] "Global Head of Sales Operations & Strategy" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T15:45:47.848Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-31T15:45:48.294Z] [BOT] ✅ Posted message: Global Head of Sales Operations & Strategy @ spotify in #🤖・ai-jobs
  ✅ Industry: Global Head of Sales Operations & Strategy @ spotify
[2026-01-31T15:45:48.295Z] [BOT] 💾 Added channel posting: Global Head of Sales Operations & Strategy @ spotify → category channel (1 total channels)
[2026-01-31T15:45:48.295Z] [BOT] 💾 BEFORE MERGE: 1231 jobs in memory (cached)
[2026-01-31T15:45:48.317Z] [BOT] ✅ Loaded V2 database: 1230 jobs
💾 DISK STATE: 1230 jobs on disk
[2026-01-31T15:45:48.317Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1231
[2026-01-31T15:45:48.320Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1231 jobs (merged disk + memory)
[2026-01-31T15:45:48.321Z] [BOT] ✅ No jobs to archive (all 1231 jobs within 7-day window)
[2026-01-31T15:45:48.397Z] [BOT] 💾 Saved posted_jobs.json: 1231 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:45:50.104Z] [BOT] ✅ Posted message: Global Head of Sales Operations & Strategy @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T15:45:50.104Z] [BOT] 💾 Added channel posting: Global Head of Sales Operations & Strategy @ spotify → location channel (2 total channels)
💾 BEFORE MERGE: 1231 jobs in memory (cached)
[2026-01-31T15:45:50.126Z] [BOT] ✅ Loaded V2 database: 1231 jobs
💾 DISK STATE: 1231 jobs on disk
[2026-01-31T15:45:50.127Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1231
[2026-01-31T15:45:50.129Z] [BOT] 🔀 Deep merged: Global Head of Sales Operations & Strategy @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1231 jobs (merged disk + memory)
[2026-01-31T15:45:50.130Z] [BOT] ✅ No jobs to archive (all 1231 jobs within 7-day window)
[2026-01-31T15:45:50.197Z] [BOT] 💾 Saved posted_jobs.json: 1231 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:45:54.700Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-31T15:45:54.702Z] [BOT] 📍 [ROUTING] "Game Developer" @ ORG_d75f5e50
[2026-01-31T15:45:54.702Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:45:54.889Z] [BOT] ✅ Posted message: Game Developer @ ORG_d75f5e50 in #💻・tech-jobs
[2026-01-31T15:45:54.889Z] [BOT] ✅ Industry: Game Developer @ ORG_d75f5e50
[2026-01-31T15:45:54.889Z] [BOT] 💾 Added channel posting: Game Developer @ ORG_d75f5e50 → category channel (1 total channels)
[2026-01-31T15:45:54.889Z] [BOT] 💾 BEFORE MERGE: 1232 jobs in memory (cached)
[2026-01-31T15:45:54.911Z] [BOT] ✅ Loaded V2 database: 1231 jobs
💾 DISK STATE: 1231 jobs on disk
[2026-01-31T15:45:54.911Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1232
[2026-01-31T15:45:54.914Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1232 jobs (merged disk + memory)
[2026-01-31T15:45:54.915Z] [BOT] ✅ No jobs to archive (all 1232 jobs within 7-day window)
[2026-01-31T15:45:55.002Z] [BOT] 💾 Saved posted_jobs.json: 1232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:45:56.787Z] [BOT] ✅ Posted message: Game Developer @ ORG_d75f5e50 in #🏠・JID_ead674af
[2026-01-31T15:45:56.788Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T15:45:56.788Z] [BOT] 💾 Added channel posting: Game Developer @ ORG_d75f5e50 → location channel (2 total channels)
💾 BEFORE MERGE: 1232 jobs in memory (cached)
[2026-01-31T15:45:56.810Z] [BOT] ✅ Loaded V2 database: 1232 jobs
💾 DISK STATE: 1232 jobs on disk
[2026-01-31T15:45:56.810Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1232
[2026-01-31T15:45:56.813Z] [BOT] 🔀 Deep merged: Game Developer @ ORG_d75f5e50 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T15:45:56.813Z] [BOT] 💾 AFTER MERGE: 1232 jobs (merged disk + memory)
[2026-01-31T15:45:56.814Z] [BOT] ✅ No jobs to archive (all 1232 jobs within 7-day window)
[2026-01-31T15:45:56.893Z] [BOT] 💾 Saved posted_jobs.json: 1232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:45:58.394Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer" @ ORG_6bda74c9 Health
[2026-01-31T15:45:58.394Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:45:58.719Z] [BOT] ✅ Posted message: Associate Software Development Engineer @ ORG_6bda74c9 Health in #💻・tech-jobs
  ✅ Industry: Associate Software Development Engineer @ ORG_6bda74c9 Health
[2026-01-31T15:45:58.719Z] [BOT] 💾 Added channel posting: Associate Software Development Engineer @ ORG_6bda74c9 Health → category channel (1 total channels)
[2026-01-31T15:45:58.719Z] [BOT] 💾 BEFORE MERGE: 1233 jobs in memory (cached)
[2026-01-31T15:45:58.741Z] [BOT] ✅ Loaded V2 database: 1232 jobs
💾 DISK STATE: 1232 jobs on disk
[2026-01-31T15:45:58.742Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1233
[2026-01-31T15:45:58.744Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:45:58.745Z] [BOT] 💾 AFTER MERGE: 1233 jobs (merged disk + memory)
[2026-01-31T15:45:58.745Z] [BOT] ✅ No jobs to archive (all 1233 jobs within 7-day window)
[2026-01-31T15:45:58.821Z] [BOT] 💾 Saved posted_jobs.json: 1233 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:46:00.323Z] [BOT] 📍 [ROUTING] "Software Engineer, Distributed Systems" @ figma
[2026-01-31T15:46:00.323Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:46:00.533Z] [BOT] ✅ Posted message: Software Engineer, Distributed Systems @ figma in #💻・tech-jobs
[2026-01-31T15:46:00.533Z] [BOT] ✅ Industry: Software Engineer, Distributed Systems @ figma
[2026-01-31T15:46:00.533Z] [BOT] 💾 Added channel posting: Software Engineer, Distributed Systems @ figma → category channel (1 total channels)
[2026-01-31T15:46:00.533Z] [BOT] 💾 BEFORE MERGE: 1234 jobs in memory (cached)
[2026-01-31T15:46:00.555Z] [BOT] ✅ Loaded V2 database: 1233 jobs
💾 DISK STATE: 1233 jobs on disk
[2026-01-31T15:46:00.556Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1234
[2026-01-31T15:46:00.558Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1234 jobs (merged disk + memory)
[2026-01-31T15:46:00.559Z] [BOT] ✅ No jobs to archive (all 1234 jobs within 7-day window)
[2026-01-31T15:46:00.637Z] [BOT] 💾 Saved posted_jobs.json: 1234 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:46:02.139Z] [BOT] 📍 [ROUTING] "Configuration and Data Management Specialist - Configuration and Data Management Specialist" @ ORG_bf9a1fe7
[2026-01-31T15:46:02.139Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T15:46:02.421Z] [BOT] ✅ Posted message: Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_bf9a1fe7 in #💻・tech-jobs
  ✅ Industry: Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_bf9a1fe7
[2026-01-31T15:46:02.422Z] [BOT] 💾 Added channel posting: Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_bf9a1fe7 → category channel (1 total channels)
💾 BEFORE MERGE: 1235 jobs in memory (cached)
[2026-01-31T15:46:02.443Z] [BOT] ✅ Loaded V2 database: 1234 jobs
💾 DISK STATE: 1234 jobs on disk
[2026-01-31T15:46:02.443Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1235
[2026-01-31T15:46:02.446Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:46:02.446Z] [BOT] 💾 AFTER MERGE: 1235 jobs (merged disk + memory)
[2026-01-31T15:46:02.447Z] [BOT] ✅ No jobs to archive (all 1235 jobs within 7-day window)
[2026-01-31T15:46:02.522Z] [BOT] 💾 Saved posted_jobs.json: 1235 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:46:07.024Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T15:46:07.025Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_9a42d40a Innovation (i3)
[2026-01-31T15:46:07.025Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T15:46:07.698Z] [BOT] ✅ Posted message: Data Analyst @ ORG_9a42d40a Innovation (i3) in #📊・JID_fb739488
[2026-01-31T15:46:07.698Z] [BOT] ✅ Industry: Data Analyst @ ORG_9a42d40a Innovation (i3)
[2026-01-31T15:46:07.698Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_9a42d40a Innovation (i3) → category channel (1 total channels)
💾 BEFORE MERGE: 1236 jobs in memory (cached)
[2026-01-31T15:46:07.720Z] [BOT] ✅ Loaded V2 database: 1235 jobs
💾 DISK STATE: 1235 jobs on disk
[2026-01-31T15:46:07.720Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1236
[2026-01-31T15:46:07.723Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1236 jobs (merged disk + memory)
[2026-01-31T15:46:07.724Z] [BOT] ✅ No jobs to archive (all 1236 jobs within 7-day window)
[2026-01-31T15:46:07.821Z] [BOT] 💾 Saved posted_jobs.json: 1236 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:46:12.317Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T15:46:12.318Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1ed24924..." not found, but found as SHA256 "0959bb144b9514bd"
[2026-01-31T15:46:12.318Z] [BOT] ⏭️  Skipping duplicate: JID_47164d09 (posted within 7 days)
[2026-01-31T15:46:12.319Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_33df5a48..." not found, but found as SHA256 "69b16a8f6a1a3668"
⏭️  Skipping duplicate: JID_33df5a48 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_1cddb216..." not found, but found as SHA256 "2ef9ca16bc02332a"
⏭️  Skipping duplicate: JID_1cddb216 (posted within 7 days)
[2026-01-31T15:46:12.319Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2ab0d0f8..." not found, but found as SHA256 "09a2db0313143373"
[2026-01-31T15:46:12.319Z] [BOT] ⏭️  Skipping duplicate: JID_78990e76 (posted within 7 days)
[2026-01-31T15:46:12.320Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_69cf824b..." not found, but found as SHA256 "645773d83906c282"
⏭️  Skipping duplicate: JID_b2951129-cvs_health_careers-JID_2e1f2451-engineer_r0745817-1 (posted within 7 days)
[2026-01-31T15:46:12.320Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_210d081e..." not found, but found as SHA256 "eb521b6fa3b6e8f6"
⏭️  Skipping duplicate: JID_3a85e31d (posted within 7 days)
[2026-01-31T15:46:12.320Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_44a4fe5f..." not found, but found as SHA256 "2f2ec3fbca54b2d8"
⏭️  Skipping duplicate: JID_44a4fe5f (posted within 7 days)
[2026-01-31T15:46:12.320Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_76485c31..." not found, but found as SHA256 "40fea00a8ae42aeb"
[2026-01-31T15:46:12.320Z] [BOT] ⏭️  Skipping duplicate: JID_76485c31 (posted within 7 days)
[2026-01-31T15:46:12.320Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f3a4d234..." not found, but found as SHA256 "4c0f499cb2ee204b"
[2026-01-31T15:46:12.321Z] [BOT] ⏭️  Skipping duplicate: JID_f3a4d234 (posted within 7 days)
[2026-01-31T15:46:12.321Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_136fb9b5..." not found, but found as SHA256 "e610e21d9f832f62"
[2026-01-31T15:46:12.321Z] [BOT] ⏭️  Skipping duplicate: JID_06424e64 (posted within 7 days)
[2026-01-31T15:46:12.437Z] [BOT] ✅ Loaded pending queue: 2936 total (1697 pending, 42 enriched, 1197 posted)
[2026-01-31T15:46:12.615Z] [BOT] ✅ Saved pending queue: 2936 total (1697 pending, 32 enriched, 1207 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T15:46:12.615Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T15:46:12.702Z] [BOT] 📂 Loaded 11288 existing routing entries
[2026-01-31T15:46:12.830Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11298
   Timestamp: 2026-01-31T15:46:12.785Z
[2026-01-31T15:46:12.831Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T15:46:12.831Z] [BOT] Total attempts: 42
   Successful: 13
   Failed: 0
   Skipped: 29
[2026-01-31T15:46:12.832Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T15:46:12.832Z] [BOT] 💾 BEFORE MERGE: 1236 jobs in memory (cached)
[2026-01-31T15:46:12.874Z] [BOT] ✅ Loaded V2 database: 1236 jobs
💾 DISK STATE: 1236 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1236
[2026-01-31T15:46:12.876Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T15:46:12.876Z] [BOT] 💾 AFTER MERGE: 1236 jobs (merged disk + memory)
[2026-01-31T15:46:12.877Z] [BOT] ✅ No jobs to archive (all 1236 jobs within 7-day window)
[2026-01-31T15:46:12.951Z] [BOT] 💾 Saved posted_jobs.json: 1236 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T15:46:12.951Z] [BOT] ✅ Database saved successfully
[2026-01-31T15:46:14.982Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2561) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*