# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T03:14:05.813Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T03:13:23.201Z] ========================================
[2026-02-01T03:13:23.203Z] Discord Bot Execution Log
[2026-02-01T03:13:23.203Z] Environment: GitHub Actions
[2026-02-01T03:13:23.204Z] Node Version: v20.20.0
[2026-02-01T03:13:23.204Z] ========================================
[2026-02-01T03:13:23.204Z] Environment Variables Check:
[2026-02-01T03:13:23.204Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T03:13:23.204Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.204Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T03:13:23.204Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T03:13:23.204Z] 
Multi-Channel Configuration:
[2026-02-01T03:13:23.204Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.204Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.204Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.205Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.205Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.205Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.205Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.205Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.205Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-02-01T03:13:23.205Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T03:13:23.205Z] 
Data Files Check:
[2026-02-01T03:13:23.206Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58391 bytes)
[2026-02-01T03:13:23.252Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8842622 bytes)
[2026-02-01T03:13:23.252Z] 
========================================
[2026-02-01T03:13:23.252Z] Starting Enhanced Discord Bot...
[2026-02-01T03:13:23.252Z] ========================================
[2026-02-01T03:13:23.815Z] [BOT] ✅ Loaded V2 database: 1577 jobs
[2026-02-01T03:13:24.470Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T03:13:24.471Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T03:13:24.471Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T03:13:24.594Z] [BOT] ✅ Loaded pending queue: 2943 total (1326 pending, 50 enriched, 1567 posted)
[2026-02-01T03:13:24.594Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T03:13:24.595Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T03:13:24.595Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T03:13:24.595Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T03:13:24.596Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T03:13:24.596Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T03:13:24.596Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T03:13:24.597Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T03:13:24.597Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T03:13:24.597Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T03:13:24.597Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T03:13:24.598Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T03:13:24.598Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T03:13:24.611Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T03:13:24.612Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar at PennState University
[2026-02-01T03:13:24.717Z] [BOT] ✅ Loaded pending queue: 2943 total (1326 pending, 50 enriched, 1567 posted)
[2026-02-01T03:13:24.916Z] [BOT] ✅ Saved pending queue: 2942 total (1326 pending, 49 enriched, 1567 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-02-01T03:13:24.916Z] [BOT] 📋 After blacklist filter: 41 jobs (1 blacklisted)
📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T03:13:24.917Z] [BOT] 📋 After multi-location grouping: 40 unique jobs to post
[2026-02-01T03:13:24.918Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ByteDance: san jose, seattle
[2026-02-01T03:13:24.918Z] [BOT] ⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T03:13:24.921Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-02-01T03:13:24.922Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start" @ ORG_1bb6fcfb
[2026-02-01T03:13:24.922Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T03:13:24.940Z] [BOT ERROR] (node:3544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T03:13:25.322Z] [BOT] ✅ Posted message: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb in #📊・JID_fb739488
[2026-02-01T03:13:25.322Z] [BOT] ✅ Industry: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb
[2026-02-01T03:13:25.323Z] [BOT] 💾 Added channel posting: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T03:13:25.324Z] [BOT] 💾 BEFORE MERGE: 1578 jobs in memory (cached)
[2026-02-01T03:13:25.363Z] [BOT] ✅ Loaded V2 database: 1577 jobs
💾 DISK STATE: 1577 jobs on disk
[2026-02-01T03:13:25.363Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1578
[2026-02-01T03:13:25.367Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:13:25.367Z] [BOT] 💾 AFTER MERGE: 1578 jobs (merged disk + memory)
[2026-02-01T03:13:25.368Z] [BOT] ✅ No jobs to archive (all 1578 jobs within 7-day window)
[2026-02-01T03:13:25.470Z] [BOT] 💾 Saved posted_jobs.json: 1578 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:26.972Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - Data Warehouse" @ ORG_a258b30f Lending Services
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-02-01T03:13:26.972Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T03:13:27.153Z] [BOT] ✅ Posted message: Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services in #📊・JID_fb739488
[2026-02-01T03:13:27.153Z] [BOT] ✅ Industry: Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services
[2026-02-01T03:13:27.154Z] [BOT] 💾 Added channel posting: Business Systems Analyst - Data Warehouse @ ORG_a258b30f Lending Services → category channel (1 total channels)
[2026-02-01T03:13:27.154Z] [BOT] 💾 BEFORE MERGE: 1579 jobs in memory (cached)
[2026-02-01T03:13:27.185Z] [BOT] ✅ Loaded V2 database: 1578 jobs
💾 DISK STATE: 1578 jobs on disk
[2026-02-01T03:13:27.185Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1579
[2026-02-01T03:13:27.188Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:13:27.188Z] [BOT] 💾 AFTER MERGE: 1579 jobs (merged disk + memory)
[2026-02-01T03:13:27.190Z] [BOT] ✅ No jobs to archive (all 1579 jobs within 7-day window)
[2026-02-01T03:13:27.278Z] [BOT] 💾 Saved posted_jobs.json: 1579 active jobs
[2026-02-01T03:13:27.278Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:28.780Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_f8d13f3b Health
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T03:13:28.780Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T03:13:28.949Z] [BOT] ✅ Posted message: Associate Data Scientist @ ORG_f8d13f3b Health in #📊・JID_fb739488
[2026-02-01T03:13:28.950Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_f8d13f3b Health
[2026-02-01T03:13:28.950Z] [BOT] 💾 Added channel posting: Associate Data Scientist @ ORG_f8d13f3b Health → category channel (1 total channels)
[2026-02-01T03:13:28.950Z] [BOT] 💾 BEFORE MERGE: 1580 jobs in memory (cached)
[2026-02-01T03:13:28.980Z] [BOT] ✅ Loaded V2 database: 1579 jobs
💾 DISK STATE: 1579 jobs on disk
[2026-02-01T03:13:28.981Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1580
[2026-02-01T03:13:28.984Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:13:28.984Z] [BOT] 💾 AFTER MERGE: 1580 jobs (merged disk + memory)
[2026-02-01T03:13:28.985Z] [BOT] ✅ No jobs to archive (all 1580 jobs within 7-day window)
[2026-02-01T03:13:29.104Z] [BOT] 💾 Saved posted_jobs.json: 1580 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:30.981Z] [BOT] ✅ Posted message: Associate Data Scientist @ ORG_f8d13f3b Health in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T03:13:30.982Z] [BOT] 💾 Added channel posting: Associate Data Scientist @ ORG_f8d13f3b Health → location channel (2 total channels)
[2026-02-01T03:13:30.982Z] [BOT] 💾 BEFORE MERGE: 1580 jobs in memory (cached)
[2026-02-01T03:13:31.012Z] [BOT] ✅ Loaded V2 database: 1580 jobs
💾 DISK STATE: 1580 jobs on disk
[2026-02-01T03:13:31.013Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1580
[2026-02-01T03:13:31.016Z] [BOT] 🔀 Deep merged: Associate Data Scientist @ ORG_f8d13f3b Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T03:13:31.016Z] [BOT] 💾 AFTER MERGE: 1580 jobs (merged disk + memory)
[2026-02-01T03:13:31.017Z] [BOT] ✅ No jobs to archive (all 1580 jobs within 7-day window)
[2026-02-01T03:13:31.105Z] [BOT] 💾 Saved posted_jobs.json: 1580 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:35.607Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-01T03:13:35.608Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Clinical Systems (External Apps)" @ ORG_ba2089ca
   Category: TECH (matched: "software")
[2026-02-01T03:13:35.608Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T03:13:35.846Z] [BOT] ✅ Posted message: Associate Software Engineer - Clinical Systems (External Apps) @ ORG_ba2089ca in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Clinical Systems (External Apps) @ ORG_ba2089ca
[2026-02-01T03:13:35.846Z] [BOT] 💾 Added channel posting: Associate Software Engineer - Clinical Systems (External Apps) @ ORG_ba2089ca → category channel (1 total channels)
💾 BEFORE MERGE: 1581 jobs in memory (cached)
[2026-02-01T03:13:35.877Z] [BOT] ✅ Loaded V2 database: 1580 jobs
💾 DISK STATE: 1580 jobs on disk
[2026-02-01T03:13:35.878Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1581
[2026-02-01T03:13:35.881Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:13:35.881Z] [BOT] 💾 AFTER MERGE: 1581 jobs (merged disk + memory)
[2026-02-01T03:13:35.882Z] [BOT] ✅ No jobs to archive (all 1581 jobs within 7-day window)
[2026-02-01T03:13:35.966Z] [BOT] 💾 Saved posted_jobs.json: 1581 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:37.470Z] [BOT] 📍 [ROUTING] "Associate – Entry Level" @ ORG_5f6cd045
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T03:13:37.822Z] [BOT] ✅ Posted message: Associate – Entry Level @ ORG_5f6cd045 in #💻・tech-jobs
  ✅ Industry: Associate – Entry Level @ ORG_5f6cd045
[2026-02-01T03:13:37.823Z] [BOT] 💾 Added channel posting: Associate – Entry Level @ ORG_5f6cd045 → category channel (1 total channels)
[2026-02-01T03:13:37.823Z] [BOT] 💾 BEFORE MERGE: 1582 jobs in memory (cached)
[2026-02-01T03:13:37.856Z] [BOT] ✅ Loaded V2 database: 1581 jobs
💾 DISK STATE: 1581 jobs on disk
[2026-02-01T03:13:37.856Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1582
[2026-02-01T03:13:37.860Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:13:37.860Z] [BOT] 💾 AFTER MERGE: 1582 jobs (merged disk + memory)
[2026-02-01T03:13:37.860Z] [BOT] ✅ No jobs to archive (all 1582 jobs within 7-day window)
[2026-02-01T03:13:37.961Z] [BOT] 💾 Saved posted_jobs.json: 1582 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:39.742Z] [BOT] ✅ Posted message: Associate – Entry Level @ ORG_5f6cd045 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T03:13:39.742Z] [BOT] 💾 Added channel posting: Associate – Entry Level @ ORG_5f6cd045 → location channel (2 total channels)
[2026-02-01T03:13:39.743Z] [BOT] 💾 BEFORE MERGE: 1582 jobs in memory (cached)
[2026-02-01T03:13:39.772Z] [BOT] ✅ Loaded V2 database: 1582 jobs
💾 DISK STATE: 1582 jobs on disk
[2026-02-01T03:13:39.773Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1582
[2026-02-01T03:13:39.776Z] [BOT] 🔀 Deep merged: Associate – Entry Level @ ORG_5f6cd045 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T03:13:39.776Z] [BOT] 💾 AFTER MERGE: 1582 jobs (merged disk + memory)
[2026-02-01T03:13:39.777Z] [BOT] ✅ No jobs to archive (all 1582 jobs within 7-day window)
[2026-02-01T03:13:39.858Z] [BOT] 💾 Saved posted_jobs.json: 1582 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:44.360Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-02-01T03:13:44.362Z] [BOT] 📍 [ROUTING] "Computer Vision Specialist - AI Trainer" @ ORG_4ee447c5 Technologies
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T03:13:44.362Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T03:13:46.241Z] [BOT] ✅ Posted message: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #🤖・ai-jobs
  ✅ Industry: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies
[2026-02-01T03:13:46.242Z] [BOT] 💾 Added channel posting: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies → category channel (1 total channels)
[2026-02-01T03:13:46.242Z] [BOT] 💾 BEFORE MERGE: 1583 jobs in memory (cached)
[2026-02-01T03:13:46.278Z] [BOT] ✅ Loaded V2 database: 1582 jobs
💾 DISK STATE: 1582 jobs on disk
[2026-02-01T03:13:46.278Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1583
[2026-02-01T03:13:46.281Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1583 jobs (merged disk + memory)
[2026-02-01T03:13:46.282Z] [BOT] ✅ No jobs to archive (all 1583 jobs within 7-day window)
[2026-02-01T03:13:46.377Z] [BOT] 💾 Saved posted_jobs.json: 1583 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:48.063Z] [BOT] ✅ Posted message: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T03:13:48.064Z] [BOT] 💾 Added channel posting: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies → location channel (2 total channels)
[2026-02-01T03:13:48.064Z] [BOT] 💾 BEFORE MERGE: 1583 jobs in memory (cached)
[2026-02-01T03:13:48.094Z] [BOT] ✅ Loaded V2 database: 1583 jobs
💾 DISK STATE: 1583 jobs on disk
[2026-02-01T03:13:48.094Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1583
[2026-02-01T03:13:48.097Z] [BOT] 🔀 Deep merged: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T03:13:48.097Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T03:13:48.097Z] [BOT] 💾 AFTER MERGE: 1583 jobs (merged disk + memory)
[2026-02-01T03:13:48.098Z] [BOT] ✅ No jobs to archive (all 1583 jobs within 7-day window)
[2026-02-01T03:13:48.189Z] [BOT] 💾 Saved posted_jobs.json: 1583 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:49.691Z] [BOT] 📍 [ROUTING] "Homography Specialist - AI Trainer" @ ORG_4ee447c5 Technologies
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T03:13:49.691Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T03:13:49.915Z] [BOT] ✅ Posted message: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #🤖・ai-jobs
  ✅ Industry: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies
[2026-02-01T03:13:49.916Z] [BOT] 💾 Added channel posting: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies → category channel (1 total channels)
[2026-02-01T03:13:49.916Z] [BOT] 💾 BEFORE MERGE: 1584 jobs in memory (cached)
[2026-02-01T03:13:49.947Z] [BOT] ✅ Loaded V2 database: 1583 jobs
💾 DISK STATE: 1583 jobs on disk
[2026-02-01T03:13:49.947Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1584
[2026-02-01T03:13:49.950Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:13:49.950Z] [BOT] 💾 AFTER MERGE: 1584 jobs (merged disk + memory)
[2026-02-01T03:13:49.951Z] [BOT] ✅ No jobs to archive (all 1584 jobs within 7-day window)
[2026-02-01T03:13:50.034Z] [BOT] 💾 Saved posted_jobs.json: 1584 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:51.707Z] [BOT] ✅ Posted message: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T03:13:51.708Z] [BOT] 💾 Added channel posting: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies → location channel (2 total channels)
[2026-02-01T03:13:51.708Z] [BOT] 💾 BEFORE MERGE: 1584 jobs in memory (cached)
[2026-02-01T03:13:51.739Z] [BOT] ✅ Loaded V2 database: 1584 jobs
💾 DISK STATE: 1584 jobs on disk
[2026-02-01T03:13:51.739Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1584
[2026-02-01T03:13:51.742Z] [BOT] 🔀 Deep merged: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T03:13:51.742Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1584 jobs (merged disk + memory)
[2026-02-01T03:13:51.743Z] [BOT] ✅ No jobs to archive (all 1584 jobs within 7-day window)
[2026-02-01T03:13:51.830Z] [BOT] 💾 Saved posted_jobs.json: 1584 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:53.332Z] [BOT] 📍 [ROUTING] "Software Engineer, Test & Infrastructure I" @ ORG_ba13c5a3 Systems
[2026-02-01T03:13:53.332Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T03:13:53.512Z] [BOT] ✅ Posted message: Software Engineer, Test & Infrastructure I @ ORG_ba13c5a3 Systems in #🤖・ai-jobs
[2026-02-01T03:13:53.512Z] [BOT] ✅ Industry: Software Engineer, Test & Infrastructure I @ ORG_ba13c5a3 Systems
[2026-02-01T03:13:53.513Z] [BOT] 💾 Added channel posting: Software Engineer, Test & Infrastructure I @ ORG_ba13c5a3 Systems → category channel (1 total channels)
💾 BEFORE MERGE: 1585 jobs in memory (cached)
[2026-02-01T03:13:53.545Z] [BOT] ✅ Loaded V2 database: 1584 jobs
💾 DISK STATE: 1584 jobs on disk
[2026-02-01T03:13:53.545Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1585
[2026-02-01T03:13:53.548Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:13:53.548Z] [BOT] 💾 AFTER MERGE: 1585 jobs (merged disk + memory)
[2026-02-01T03:13:53.549Z] [BOT] ✅ No jobs to archive (all 1585 jobs within 7-day window)
[2026-02-01T03:13:53.631Z] [BOT] 💾 Saved posted_jobs.json: 1585 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:55.134Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - AI Research (PhD)" @ ORG_c910d474 Motors
   Category: AI (matched: "machine learning")
[2026-02-01T03:13:55.134Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T03:13:55.294Z] [BOT] ✅ Posted message: Machine Learning Engineer - AI Research (PhD) @ ORG_c910d474 Motors in #🤖・ai-jobs
[2026-02-01T03:13:55.294Z] [BOT] ✅ Industry: Machine Learning Engineer - AI Research (PhD) @ ORG_c910d474 Motors
[2026-02-01T03:13:55.294Z] [BOT] 💾 Added channel posting: Machine Learning Engineer - AI Research (PhD) @ ORG_c910d474 Motors → category channel (1 total channels)
[2026-02-01T03:13:55.295Z] [BOT] 💾 BEFORE MERGE: 1586 jobs in memory (cached)
[2026-02-01T03:13:55.327Z] [BOT] ✅ Loaded V2 database: 1585 jobs
💾 DISK STATE: 1585 jobs on disk
[2026-02-01T03:13:55.328Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1586
[2026-02-01T03:13:55.331Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:13:55.331Z] [BOT] 💾 AFTER MERGE: 1586 jobs (merged disk + memory)
[2026-02-01T03:13:55.332Z] [BOT] ✅ No jobs to archive (all 1586 jobs within 7-day window)
[2026-02-01T03:13:55.422Z] [BOT] 💾 Saved posted_jobs.json: 1586 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:13:56.923Z] [BOT] 📍 [ROUTING] "Software Engineer - Test & Infrastructure I" @ ORG_ba13c5a3 Systems
[2026-02-01T03:13:56.923Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T03:13:57.286Z] [BOT] ✅ Posted message: Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems
[2026-02-01T03:13:57.286Z] [BOT] 💾 Added channel posting: Software Engineer - Test & Infrastructure I @ ORG_ba13c5a3 Systems → category channel (1 total channels)
[2026-02-01T03:13:57.287Z] [BOT] 💾 BEFORE MERGE: 1587 jobs in memory (cached)
[2026-02-01T03:13:57.316Z] [BOT] ✅ Loaded V2 database: 1586 jobs
💾 DISK STATE: 1586 jobs on disk
[2026-02-01T03:13:57.316Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1587
[2026-02-01T03:13:57.319Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:13:57.319Z] [BOT] 💾 AFTER MERGE: 1587 jobs (merged disk + memory)
[2026-02-01T03:13:57.320Z] [BOT] ✅ No jobs to archive (all 1587 jobs within 7-day window)
[2026-02-01T03:13:57.405Z] [BOT] 💾 Saved posted_jobs.json: 1587 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:14:01.907Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T03:14:01.909Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_57312014..." not found, but found as SHA256 "e7332de26aa0f6c7"
⏭️  Skipping duplicate: JID_6796d1d6-CH_3fcd0c67 (posted within 7 days)
[2026-02-01T03:14:01.909Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d8c94354..." not found, but found as SHA256 "66712381ee01717a"
[2026-02-01T03:14:01.909Z] [BOT] ⏭️  Skipping duplicate: JID_0b2270b4-_jr104015 (posted within 7 days)
[2026-02-01T03:14:01.909Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec81da3-..." not found, but found as SHA256 "a2241e6c9912a989"
[2026-02-01T03:14:01.909Z] [BOT] ⏭️  Skipping duplicate: JID_c50aea90 (posted within 7 days)
[2026-02-01T03:14:01.910Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec81da3-..." not found, but found as SHA256 "69bf648a2c8e17b3"
[2026-02-01T03:14:01.910Z] [BOT] ⏭️  Skipping duplicate: JID_8671b952 (posted within 7 days)
[2026-02-01T03:14:01.910Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2578aa0..." not found, but found as SHA256 "a802b4bb85f94ddb"
[2026-02-01T03:14:01.911Z] [BOT] ⏭️  Skipping duplicate: JID_f0e6f92d (posted within 7 days)
[2026-02-01T03:14:01.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aab2cd8d..." not found, but found as SHA256 "fbe3db8818c65f3a"
[2026-02-01T03:14:01.911Z] [BOT] ⏭️  Skipping duplicate: JID_a5ada689-careers_gm-JID_85d94579-research_jr-202519114 (posted within 7 days)
[2026-02-01T03:14:01.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f40cb123..." not found, but found as SHA256 "be7e17229c98d4fb"
[2026-02-01T03:14:01.911Z] [BOT] ⏭️  Skipping duplicate: JID_86f06dfe (posted within 7 days)
[2026-02-01T03:14:01.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2578aa0..." not found, but found as SHA256 "69ac65f7da74320b"
⏭️  Skipping duplicate: JID_add51d87 (posted within 7 days)
[2026-02-01T03:14:01.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c42aa035-..." not found, but found as SHA256 "20807c3c4a71e0c5"
⏭️  Skipping duplicate: JID_8311e04d (posted within 7 days)
[2026-02-01T03:14:01.912Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_42556291..." not found, but found as SHA256 "e3a61030c2f2cfde"
[2026-02-01T03:14:01.912Z] [BOT] ⏭️  Skipping duplicate: JID_2095ae8c (posted within 7 days)
[2026-02-01T03:14:02.013Z] [BOT] ✅ Loaded pending queue: 2942 total (1326 pending, 49 enriched, 1567 posted)
[2026-02-01T03:14:02.215Z] [BOT] ✅ Saved pending queue: 2942 total (1326 pending, 39 enriched, 1577 posted)
[2026-02-01T03:14:02.215Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T03:14:02.302Z] [BOT] 📂 Loaded 11658 existing routing entries
[2026-02-01T03:14:02.431Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11668
[2026-02-01T03:14:02.431Z] [BOT] Timestamp: 2026-02-01T03:14:02.385Z
[2026-02-01T03:14:02.432Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 23
   Successful: 14
   Failed: 0
   Skipped: 9
[2026-02-01T03:14:02.432Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T03:14:02.432Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
[2026-02-01T03:14:02.432Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #📊・JID_fb739488: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #💻・tech-jobs: 2 posts
[2026-02-01T03:14:02.432Z] [BOT] 5. #🏠・JID_ead674af: 2 posts
[2026-02-01T03:14:02.433Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1587 jobs in memory (cached)
[2026-02-01T03:14:02.465Z] [BOT] ✅ Loaded V2 database: 1587 jobs
💾 DISK STATE: 1587 jobs on disk
[2026-02-01T03:14:02.465Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1587
[2026-02-01T03:14:02.468Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:14:02.468Z] [BOT] 💾 AFTER MERGE: 1587 jobs (merged disk + memory)
[2026-02-01T03:14:02.469Z] [BOT] ✅ No jobs to archive (all 1587 jobs within 7-day window)
[2026-02-01T03:14:02.565Z] [BOT] 💾 Saved posted_jobs.json: 1587 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:14:02.566Z] [BOT] ✅ Database saved successfully
[2026-02-01T03:14:04.603Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*