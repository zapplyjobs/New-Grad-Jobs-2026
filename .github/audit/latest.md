# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T19:53:23.460Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T19:52:46.424Z] ========================================
[2026-01-30T19:52:46.426Z] Discord Bot Execution Log
[2026-01-30T19:52:46.426Z] Environment: GitHub Actions
[2026-01-30T19:52:46.426Z] Node Version: v20.20.0
[2026-01-30T19:52:46.426Z] ========================================
[2026-01-30T19:52:46.426Z] Environment Variables Check:
[2026-01-30T19:52:46.426Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T19:52:46.426Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.426Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T19:52:46.427Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T19:52:46.427Z] 
Multi-Channel Configuration:
[2026-01-30T19:52:46.427Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.427Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.427Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.427Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.427Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.427Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.427Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.427Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.427Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T19:52:46.427Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T19:52:46.427Z] 
Data Files Check:
[2026-01-30T19:52:46.428Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T19:52:46.457Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4080962 bytes)
[2026-01-30T19:52:46.458Z] 
========================================
[2026-01-30T19:52:46.458Z] Starting Enhanced Discord Bot...
[2026-01-30T19:52:46.458Z] ========================================
[2026-01-30T19:52:47.013Z] [BOT] ✅ Loaded V2 database: 622 jobs
[2026-01-30T19:52:47.608Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T19:52:47.609Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T19:52:47.609Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T19:52:47.735Z] [BOT] ✅ Loaded pending queue: 2931 total (2288 pending, 50 enriched, 593 posted)
[2026-01-30T19:52:47.736Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T19:52:47.736Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T19:52:47.737Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T19:52:47.737Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T19:52:47.737Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T19:52:47.737Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T19:52:47.738Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T19:52:47.738Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T19:52:47.738Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T19:52:47.738Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-30T19:52:47.738Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T19:52:47.738Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-30T19:52:47.739Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T19:52:47.739Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-30T19:52:47.740Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T19:52:47.740Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T19:52:47.740Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T19:52:47.740Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T19:52:47.744Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T19:52:47.744Z] [BOT] 🚫 Skipping blacklisted job: USA – Tax - Business Tax Services - Federal Tax Advisory','Fta','Jd/LLM','Staff 2 at Ernst & Young
[2026-01-30T19:52:47.745Z] [BOT] 🚫 Skipping blacklisted job: USA – Tax - Indirect Tax - Technology Staff at Ernst & Young
[2026-01-30T19:52:47.869Z] [BOT] ✅ Loaded pending queue: 2931 total (2288 pending, 50 enriched, 593 posted)
[2026-01-30T19:52:48.037Z] [BOT] ✅ Saved pending queue: 2929 total (2288 pending, 48 enriched, 593 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-30T19:52:48.037Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-30T19:52:48.038Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-30T19:52:48.038Z] [BOT] (24 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Account Executive, Commercial @ samsara: los angeles, denver, boston, phoenix, arizona, portland
   - Mid-Market Account Executive - PubSec @ samsara: baltimore, chicago, houston, texas, charleston, dallas, san antonio, louisville
   - Select Major Account Executive EST/CST - Austin, TX @ samsara: austin, charlotte, columbia, dallas, hartford, houston, texas, jacksonville, miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
[2026-01-30T19:52:48.038Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T19:52:48.042Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T19:52:48.043Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
   Category: TECH (default)
[2026-01-30T19:52:48.043Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T19:52:48.060Z] [BOT ERROR] (node:2526) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T19:52:48.389Z] [BOT] ✅ Posted message: Account Executive, Commercial @ samsara in #💻・tech-jobs
[2026-01-30T19:52:48.390Z] [BOT] ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-30T19:52:48.390Z] [BOT] 💾 Added channel posting: Account Executive, Commercial @ samsara → category channel (1 total channels)
[2026-01-30T19:52:48.390Z] [BOT] 💾 BEFORE MERGE: 623 jobs in memory (cached)
[2026-01-30T19:52:48.405Z] [BOT] ✅ Loaded V2 database: 622 jobs
💾 DISK STATE: 622 jobs on disk
[2026-01-30T19:52:48.405Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=623
[2026-01-30T19:52:48.407Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:52:48.407Z] [BOT] 💾 AFTER MERGE: 623 jobs (merged disk + memory)
[2026-01-30T19:52:48.408Z] [BOT] ✅ No jobs to archive (all 623 jobs within 7-day window)
[2026-01-30T19:52:48.457Z] [BOT] 💾 Saved posted_jobs.json: 623 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:52:49.960Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T19:52:50.169Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
[2026-01-30T19:52:50.169Z] [BOT] ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T19:52:50.169Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 624 jobs in memory (cached)
[2026-01-30T19:52:50.184Z] [BOT] ✅ Loaded V2 database: 623 jobs
💾 DISK STATE: 623 jobs on disk
[2026-01-30T19:52:50.185Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=624
[2026-01-30T19:52:50.186Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:52:50.186Z] [BOT] 💾 AFTER MERGE: 624 jobs (merged disk + memory)
[2026-01-30T19:52:50.186Z] [BOT] ✅ No jobs to archive (all 624 jobs within 7-day window)
[2026-01-30T19:52:50.227Z] [BOT] 💾 Saved posted_jobs.json: 624 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:52:51.730Z] [BOT] 📍 [ROUTING] "University Recruiter" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T19:52:51.920Z] [BOT] ✅ Posted message: University Recruiter @ samsara in #💻・tech-jobs
  ✅ Industry: University Recruiter @ samsara
[2026-01-30T19:52:51.921Z] [BOT] 💾 Added channel posting: University Recruiter @ samsara → category channel (1 total channels)
[2026-01-30T19:52:51.921Z] [BOT] 💾 BEFORE MERGE: 625 jobs in memory (cached)
[2026-01-30T19:52:51.934Z] [BOT] ✅ Loaded V2 database: 624 jobs
💾 DISK STATE: 624 jobs on disk
[2026-01-30T19:52:51.934Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=625
[2026-01-30T19:52:51.936Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:52:51.936Z] [BOT] 💾 AFTER MERGE: 625 jobs (merged disk + memory)
[2026-01-30T19:52:51.936Z] [BOT] ✅ No jobs to archive (all 625 jobs within 7-day window)
[2026-01-30T19:52:51.980Z] [BOT] 💾 Saved posted_jobs.json: 625 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:52:56.482Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-01-30T19:52:56.483Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Austin, TX" @ samsara
[2026-01-30T19:52:56.483Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T19:52:56.681Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Austin, TX @ samsara in #💰・finance-jobs
  ✅ Industry: Select Major Account Executive EST/CST - Austin, TX @ samsara
[2026-01-30T19:52:56.681Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Austin, TX @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 626 jobs in memory (cached)
[2026-01-30T19:52:56.704Z] [BOT] ✅ Loaded V2 database: 625 jobs
💾 DISK STATE: 625 jobs on disk
[2026-01-30T19:52:56.704Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=626
[2026-01-30T19:52:56.706Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:52:56.706Z] [BOT] 💾 AFTER MERGE: 626 jobs (merged disk + memory)
[2026-01-30T19:52:56.706Z] [BOT] ✅ No jobs to archive (all 626 jobs within 7-day window)
[2026-01-30T19:52:56.761Z] [BOT] 💾 Saved posted_jobs.json: 626 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:52:58.262Z] [BOT] 📍 [ROUTING] "Sr Enterprise Renewals Account Executive" @ samsara
[2026-01-30T19:52:58.262Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T19:52:58.466Z] [BOT] ✅ Posted message: Sr Enterprise Renewals Account Executive @ samsara in #💰・finance-jobs
  ✅ Industry: Sr Enterprise Renewals Account Executive @ samsara
[2026-01-30T19:52:58.467Z] [BOT] 💾 Added channel posting: Sr Enterprise Renewals Account Executive @ samsara → category channel (1 total channels)
[2026-01-30T19:52:58.467Z] [BOT] 💾 BEFORE MERGE: 627 jobs in memory (cached)
[2026-01-30T19:52:58.481Z] [BOT] ✅ Loaded V2 database: 626 jobs
💾 DISK STATE: 626 jobs on disk
[2026-01-30T19:52:58.481Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=627
[2026-01-30T19:52:58.483Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 627 jobs (merged disk + memory)
[2026-01-30T19:52:58.483Z] [BOT] ✅ No jobs to archive (all 627 jobs within 7-day window)
[2026-01-30T19:52:58.535Z] [BOT] 💾 Saved posted_jobs.json: 627 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:00.037Z] [BOT] 📍 [ROUTING] "Sr. Sales Operations and Strategy Analyst" @ samsara
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T19:53:00.183Z] [BOT] ✅ Posted message: Sr. Sales Operations and Strategy Analyst @ samsara in #💰・finance-jobs
  ✅ Industry: Sr. Sales Operations and Strategy Analyst @ samsara
[2026-01-30T19:53:00.183Z] [BOT] 💾 Added channel posting: Sr. Sales Operations and Strategy Analyst @ samsara → category channel (1 total channels)
[2026-01-30T19:53:00.183Z] [BOT] 💾 BEFORE MERGE: 628 jobs in memory (cached)
[2026-01-30T19:53:00.198Z] [BOT] ✅ Loaded V2 database: 627 jobs
💾 DISK STATE: 627 jobs on disk
[2026-01-30T19:53:00.198Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=628
[2026-01-30T19:53:00.200Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:53:00.200Z] [BOT] 💾 AFTER MERGE: 628 jobs (merged disk + memory)
[2026-01-30T19:53:00.201Z] [BOT] ✅ No jobs to archive (all 628 jobs within 7-day window)
[2026-01-30T19:53:00.246Z] [BOT] 💾 Saved posted_jobs.json: 628 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:02.003Z] [BOT] ✅ Posted message: Sr. Sales Operations and Strategy Analyst @ samsara in #🏠・JID_ead674af
[2026-01-30T19:53:02.003Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T19:53:02.003Z] [BOT] 💾 Added channel posting: Sr. Sales Operations and Strategy Analyst @ samsara → location channel (2 total channels)
[2026-01-30T19:53:02.004Z] [BOT] 💾 BEFORE MERGE: 628 jobs in memory (cached)
[2026-01-30T19:53:02.018Z] [BOT] ✅ Loaded V2 database: 628 jobs
💾 DISK STATE: 628 jobs on disk
[2026-01-30T19:53:02.018Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=628
[2026-01-30T19:53:02.020Z] [BOT] 🔀 Deep merged: Sr. Sales Operations and Strategy Analyst @ samsara (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T19:53:02.020Z] [BOT] 💾 AFTER MERGE: 628 jobs (merged disk + memory)
[2026-01-30T19:53:02.020Z] [BOT] ✅ No jobs to archive (all 628 jobs within 7-day window)
[2026-01-30T19:53:02.062Z] [BOT] 💾 Saved posted_jobs.json: 628 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:06.564Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-30T19:53:06.565Z] [BOT] 📍 [ROUTING] "Business Data Analyst" @ ORG_625eaf40
[2026-01-30T19:53:06.565Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T19:53:06.565Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T19:53:06.804Z] [BOT] ✅ Posted message: Business Data Analyst @ ORG_625eaf40 in #🤖・ai-jobs
  ✅ Industry: Business Data Analyst @ ORG_625eaf40
[2026-01-30T19:53:06.804Z] [BOT] 💾 Added channel posting: Business Data Analyst @ ORG_625eaf40 → category channel (1 total channels)
[2026-01-30T19:53:06.804Z] [BOT] 💾 BEFORE MERGE: 629 jobs in memory (cached)
[2026-01-30T19:53:06.820Z] [BOT] ✅ Loaded V2 database: 628 jobs
💾 DISK STATE: 628 jobs on disk
[2026-01-30T19:53:06.820Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=629
[2026-01-30T19:53:06.821Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:53:06.821Z] [BOT] 💾 AFTER MERGE: 629 jobs (merged disk + memory)
[2026-01-30T19:53:06.822Z] [BOT] ✅ No jobs to archive (all 629 jobs within 7-day window)
[2026-01-30T19:53:06.867Z] [BOT] 💾 Saved posted_jobs.json: 629 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:08.369Z] [BOT] 📍 [ROUTING] "USA – Service Delivery Center - Business Technology - Associate Analyst" @ ORG_b54c9975 & Young
[2026-01-30T19:53:08.369Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T19:53:08.505Z] [BOT] ✅ Posted message: USA – Service Delivery Center - Business Technology - Associate Analyst @ ORG_b54c9975 & Young in #🤖・ai-jobs
  ✅ Industry: USA – Service Delivery Center - Business Technology - Associate Analyst @ ORG_b54c9975 & Young
[2026-01-30T19:53:08.505Z] [BOT] 💾 Added channel posting: USA – Service Delivery Center - Business Technology - Associate Analyst @ ORG_b54c9975 & Young → category channel (1 total channels)
[2026-01-30T19:53:08.505Z] [BOT] 💾 BEFORE MERGE: 630 jobs in memory (cached)
[2026-01-30T19:53:08.519Z] [BOT] ✅ Loaded V2 database: 629 jobs
💾 DISK STATE: 629 jobs on disk
[2026-01-30T19:53:08.520Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=630
[2026-01-30T19:53:08.521Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 630 jobs (merged disk + memory)
[2026-01-30T19:53:08.522Z] [BOT] ✅ No jobs to archive (all 630 jobs within 7-day window)
[2026-01-30T19:53:08.566Z] [BOT] 💾 Saved posted_jobs.json: 630 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:10.068Z] [BOT] 📍 [ROUTING] "Tax - Multiple Teams" @ ORG_b54c9975 & Young
   Category: AI (matched: "AI/ML")
[2026-01-30T19:53:10.068Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T19:53:10.237Z] [BOT] ✅ Posted message: Tax - Multiple Teams @ ORG_b54c9975 & Young in #🤖・ai-jobs
  ✅ Industry: Tax - Multiple Teams @ ORG_b54c9975 & Young
[2026-01-30T19:53:10.238Z] [BOT] 💾 Added channel posting: Tax - Multiple Teams @ ORG_b54c9975 & Young → category channel (1 total channels)
💾 BEFORE MERGE: 631 jobs in memory (cached)
[2026-01-30T19:53:10.251Z] [BOT] ✅ Loaded V2 database: 630 jobs
💾 DISK STATE: 630 jobs on disk
[2026-01-30T19:53:10.252Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=631
[2026-01-30T19:53:10.253Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:53:10.253Z] [BOT] 💾 AFTER MERGE: 631 jobs (merged disk + memory)
[2026-01-30T19:53:10.254Z] [BOT] ✅ No jobs to archive (all 631 jobs within 7-day window)
[2026-01-30T19:53:10.298Z] [BOT] 💾 Saved posted_jobs.json: 631 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:11.993Z] [BOT] ✅ Posted message: Tax - Multiple Teams @ ORG_b54c9975 & Young in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T19:53:11.994Z] [BOT] 💾 Added channel posting: Tax - Multiple Teams @ ORG_b54c9975 & Young → location channel (2 total channels)
[2026-01-30T19:53:11.994Z] [BOT] 💾 BEFORE MERGE: 631 jobs in memory (cached)
[2026-01-30T19:53:12.008Z] [BOT] ✅ Loaded V2 database: 631 jobs
💾 DISK STATE: 631 jobs on disk
[2026-01-30T19:53:12.008Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=631
[2026-01-30T19:53:12.009Z] [BOT] 🔀 Deep merged: Tax - Multiple Teams @ ORG_b54c9975 & Young (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T19:53:12.009Z] [BOT] 💾 AFTER MERGE: 631 jobs (merged disk + memory)
[2026-01-30T19:53:12.010Z] [BOT] ✅ No jobs to archive (all 631 jobs within 7-day window)
[2026-01-30T19:53:12.053Z] [BOT] 💾 Saved posted_jobs.json: 631 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:13.555Z] [BOT] 📍 [ROUTING] "USA – Tax - Indirect Tax - State Income Tax" @ ORG_b54c9975 & Young
[2026-01-30T19:53:13.555Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T19:53:13.805Z] [BOT] ✅ Posted message: USA – Tax - Indirect Tax - State Income Tax @ ORG_b54c9975 & Young in #🤖・ai-jobs
  ✅ Industry: USA – Tax - Indirect Tax - State Income Tax @ ORG_b54c9975 & Young
[2026-01-30T19:53:13.806Z] [BOT] 💾 Added channel posting: USA – Tax - Indirect Tax - State Income Tax @ ORG_b54c9975 & Young → category channel (1 total channels)
💾 BEFORE MERGE: 632 jobs in memory (cached)
[2026-01-30T19:53:13.820Z] [BOT] ✅ Loaded V2 database: 631 jobs
💾 DISK STATE: 631 jobs on disk
[2026-01-30T19:53:13.820Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=632
[2026-01-30T19:53:13.822Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T19:53:13.822Z] [BOT] 💾 AFTER MERGE: 632 jobs (merged disk + memory)
[2026-01-30T19:53:13.822Z] [BOT] ✅ No jobs to archive (all 632 jobs within 7-day window)
[2026-01-30T19:53:13.866Z] [BOT] 💾 Saved posted_jobs.json: 632 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:15.524Z] [BOT] ✅ Posted message: USA – Tax - Indirect Tax - State Income Tax @ ORG_b54c9975 & Young in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T19:53:15.525Z] [BOT] 💾 Added channel posting: USA – Tax - Indirect Tax - State Income Tax @ ORG_b54c9975 & Young → location channel (2 total channels)
[2026-01-30T19:53:15.525Z] [BOT] 💾 BEFORE MERGE: 632 jobs in memory (cached)
[2026-01-30T19:53:15.539Z] [BOT] ✅ Loaded V2 database: 632 jobs
💾 DISK STATE: 632 jobs on disk
[2026-01-30T19:53:15.539Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=632
[2026-01-30T19:53:15.540Z] [BOT] 🔀 Deep merged: USA – Tax - Indirect Tax - State Income Tax @ ORG_b54c9975 & Young (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T19:53:15.541Z] [BOT] 💾 AFTER MERGE: 632 jobs (merged disk + memory)
[2026-01-30T19:53:15.541Z] [BOT] ✅ No jobs to archive (all 632 jobs within 7-day window)
[2026-01-30T19:53:15.586Z] [BOT] 💾 Saved posted_jobs.json: 632 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:20.088Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T19:53:20.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ce1872f..." not found, but found as SHA256 "6d5f1725af464489"
[2026-01-30T19:53:20.089Z] [BOT] ⏭️  Skipping duplicate: JID_b66e7316 (posted within 7 days)
[2026-01-30T19:53:20.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd557031..." not found, but found as SHA256 "c7ea89357384a34f"
⏭️  Skipping duplicate: JID_c52096fc (posted within 7 days)
[2026-01-30T19:53:20.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0bcaf4cc..." not found, but found as SHA256 "884f57545761a921"
⏭️  Skipping duplicate: JID_b619878e (posted within 7 days)
[2026-01-30T19:53:20.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c156d3d..." not found, but found as SHA256 "eb6bcde684bbd0ba"
⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
[2026-01-30T19:53:20.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c156d3d..." not found, but found as SHA256 "ba0149d360279443"
⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
[2026-01-30T19:53:20.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c156d3d..." not found, but found as SHA256 "f5693d5a0c217cab"
⏭️  Skipping duplicate: JID_6c22f675 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_058a5077..." not found, but found as SHA256 "ed333368683b05d9"
⏭️  Skipping duplicate: JID_2d377cbc (posted within 7 days)
[2026-01-30T19:53:20.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e6b89dae..." not found, but found as SHA256 "8b4b7ab525db08dd"
⏭️  Skipping duplicate: JID_3a6233d2 (posted within 7 days)
[2026-01-30T19:53:20.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c667a3c4..." not found, but found as SHA256 "1fed3bc04e76268f"
⏭️  Skipping duplicate: JID_7160eefa (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d4846738-_bezzafrici-w2s09..." not found, but found as SHA256 "f63bc2ef99e06a98"
⏭️  Skipping duplicate: JID_d4846738-_bezzafrici-w2s09jqtxa (posted within 7 days)
[2026-01-30T19:53:20.205Z] [BOT] ✅ Loaded pending queue: 2929 total (2288 pending, 48 enriched, 593 posted)
[2026-01-30T19:53:20.392Z] [BOT] ✅ Saved pending queue: 2929 total (2288 pending, 38 enriched, 603 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T19:53:20.483Z] [BOT] 📂 Loaded 10684 existing routing entries
[2026-01-30T19:53:20.619Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10694
   Timestamp: 2026-01-30T19:53:20.584Z
[2026-01-30T19:53:20.619Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 29
   Successful: 13
   Failed: 0
   Skipped: 16
[2026-01-30T19:53:20.620Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-30T19:53:20.620Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #💻・tech-jobs: 3 posts
     3. #💰・finance-jobs: 3 posts
     4. #🗽・JID_98d4f0de: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-01-30T19:53:20.620Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 632 jobs in memory (cached)
[2026-01-30T19:53:20.636Z] [BOT] ✅ Loaded V2 database: 632 jobs
💾 DISK STATE: 632 jobs on disk
[2026-01-30T19:53:20.636Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=632
[2026-01-30T19:53:20.637Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 632 jobs (merged disk + memory)
[2026-01-30T19:53:20.638Z] [BOT] ✅ No jobs to archive (all 632 jobs within 7-day window)
[2026-01-30T19:53:20.679Z] [BOT] 💾 Saved posted_jobs.json: 632 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T19:53:20.680Z] [BOT] ✅ Database saved successfully
[2026-01-30T19:53:22.708Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2526) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*