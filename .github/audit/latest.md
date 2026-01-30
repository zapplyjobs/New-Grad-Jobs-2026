# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T23:32:16.793Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T23:31:36.084Z] ========================================
[2026-01-30T23:31:36.086Z] Discord Bot Execution Log
[2026-01-30T23:31:36.086Z] Environment: GitHub Actions
[2026-01-30T23:31:36.086Z] Node Version: v20.20.0
[2026-01-30T23:31:36.086Z] ========================================
[2026-01-30T23:31:36.086Z] Environment Variables Check:
[2026-01-30T23:31:36.086Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T23:31:36.086Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.086Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T23:31:36.087Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T23:31:36.087Z] 
Multi-Channel Configuration:
[2026-01-30T23:31:36.087Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.087Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.087Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.087Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.087Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.087Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.087Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.087Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.087Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T23:31:36.087Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T23:31:36.088Z] 
Data Files Check:
[2026-01-30T23:31:36.089Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T23:31:36.116Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5086015 bytes)
[2026-01-30T23:31:36.116Z] 
========================================
[2026-01-30T23:31:36.116Z] Starting Enhanced Discord Bot...
[2026-01-30T23:31:36.116Z] ========================================
[2026-01-30T23:31:36.658Z] [BOT] ✅ Loaded V2 database: 768 jobs
[2026-01-30T23:31:37.280Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T23:31:37.281Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T23:31:37.281Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T23:31:37.393Z] [BOT] ✅ Loaded pending queue: 2939 total (2150 pending, 50 enriched, 739 posted)
[2026-01-30T23:31:37.394Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T23:31:37.395Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T23:31:37.395Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T23:31:37.395Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T23:31:37.395Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T23:31:37.395Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T23:31:37.395Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T23:31:37.396Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T23:31:37.396Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-30T23:31:37.396Z] [BOT] ⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T23:31:37.396Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T23:31:37.396Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T23:31:37.396Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-30T23:31:37.397Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T23:31:37.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T23:31:37.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T23:31:37.397Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T23:31:37.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T23:31:37.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T23:31:37.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-01-30T23:31:37.398Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T23:31:37.405Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T23:31:37.406Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, HR Experiences at gusto
[2026-01-30T23:31:37.406Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Marketing Manager, Payroll GTM at gusto
🚫 Skipping blacklisted job: Government Affairs Lead (Small Business Healthcare, Benefits, and HR Policy) at gusto
[2026-01-30T23:31:37.511Z] [BOT] ✅ Loaded pending queue: 2939 total (2150 pending, 50 enriched, 739 posted)
[2026-01-30T23:31:37.692Z] [BOT] ✅ Saved pending queue: 2936 total (2150 pending, 47 enriched, 739 posted)
[2026-01-30T23:31:37.692Z] [BOT] 🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-30T23:31:37.692Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-30T23:31:37.693Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-30T23:31:37.693Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-30T23:31:37.693Z] [BOT] - Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights @ AbbVie: san bruno, waukegan, cambridge
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T23:31:37.696Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-30T23:31:37.697Z] [BOT] 📍 [ROUTING] "Business Recruiter" @ figma
[2026-01-30T23:31:37.697Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:31:37.714Z] [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T23:31:38.289Z] [BOT] ✅ Posted message: Business Recruiter @ figma in #💻・tech-jobs
[2026-01-30T23:31:38.290Z] [BOT] ✅ Industry: Business Recruiter @ figma
[2026-01-30T23:31:38.290Z] [BOT] 💾 Added channel posting: Business Recruiter @ figma → category channel (1 total channels)
[2026-01-30T23:31:38.291Z] [BOT] 💾 BEFORE MERGE: 769 jobs in memory (cached)
[2026-01-30T23:31:38.305Z] [BOT] ✅ Loaded V2 database: 768 jobs
💾 DISK STATE: 768 jobs on disk
[2026-01-30T23:31:38.306Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=769
[2026-01-30T23:31:38.308Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:31:38.308Z] [BOT] 💾 AFTER MERGE: 769 jobs (merged disk + memory)
[2026-01-30T23:31:38.308Z] [BOT] ✅ No jobs to archive (all 769 jobs within 7-day window)
[2026-01-30T23:31:38.407Z] [BOT] 💾 Saved posted_jobs.json: 769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:39.910Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – 2026 New Grad" @ ORG_17b1b281 Fantasy
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:31:40.125Z] [BOT] ✅ Posted message: Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy
[2026-01-30T23:31:40.126Z] [BOT] 💾 Added channel posting: Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy → category channel (1 total channels)
💾 BEFORE MERGE: 770 jobs in memory (cached)
[2026-01-30T23:31:40.141Z] [BOT] ✅ Loaded V2 database: 769 jobs
💾 DISK STATE: 769 jobs on disk
[2026-01-30T23:31:40.141Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=770
[2026-01-30T23:31:40.143Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 770 jobs (merged disk + memory)
[2026-01-30T23:31:40.143Z] [BOT] ✅ No jobs to archive (all 770 jobs within 7-day window)
[2026-01-30T23:31:40.195Z] [BOT] 💾 Saved posted_jobs.json: 770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:42.044Z] [BOT] ✅ Posted message: Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T23:31:42.045Z] [BOT] 💾 Added channel posting: Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy → location channel (2 total channels)
[2026-01-30T23:31:42.045Z] [BOT] 💾 BEFORE MERGE: 770 jobs in memory (cached)
[2026-01-30T23:31:42.060Z] [BOT] ✅ Loaded V2 database: 770 jobs
💾 DISK STATE: 770 jobs on disk
[2026-01-30T23:31:42.060Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=770
[2026-01-30T23:31:42.062Z] [BOT] 🔀 Deep merged: Associate Software Engineer – 2026 New Grad @ ORG_17b1b281 Fantasy (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T23:31:42.062Z] [BOT] 💾 AFTER MERGE: 770 jobs (merged disk + memory)
[2026-01-30T23:31:42.063Z] [BOT] ✅ No jobs to archive (all 770 jobs within 7-day window)
[2026-01-30T23:31:42.113Z] [BOT] 💾 Saved posted_jobs.json: 770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:43.614Z] [BOT] 📍 [ROUTING] "Application Support - Java skills - Associate" @ ORG_cb204781
[2026-01-30T23:31:43.614Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:31:43.898Z] [BOT] ✅ Posted message: Application Support - Java skills - Associate @ ORG_cb204781 in #💻・tech-jobs
[2026-01-30T23:31:43.898Z] [BOT] ✅ Industry: Application Support - Java skills - Associate @ ORG_cb204781
[2026-01-30T23:31:43.898Z] [BOT] 💾 Added channel posting: Application Support - Java skills - Associate @ ORG_cb204781 → category channel (1 total channels)
[2026-01-30T23:31:43.898Z] [BOT] 💾 BEFORE MERGE: 771 jobs in memory (cached)
[2026-01-30T23:31:43.913Z] [BOT] ✅ Loaded V2 database: 770 jobs
💾 DISK STATE: 770 jobs on disk
[2026-01-30T23:31:43.913Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=771
[2026-01-30T23:31:43.915Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:31:43.915Z] [BOT] 💾 AFTER MERGE: 771 jobs (merged disk + memory)
[2026-01-30T23:31:43.916Z] [BOT] ✅ No jobs to archive (all 771 jobs within 7-day window)
[2026-01-30T23:31:43.965Z] [BOT] 💾 Saved posted_jobs.json: 771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:45.467Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1 - Early Career" @ ORG_ec7d56a0 Origin
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T23:31:45.658Z] [BOT] ✅ Posted message: Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin in #💻・tech-jobs
[2026-01-30T23:31:45.659Z] [BOT] ✅ Industry: Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin
[2026-01-30T23:31:45.659Z] [BOT] 💾 Added channel posting: Software Development Engineer 1 - Early Career @ ORG_ec7d56a0 Origin → category channel (1 total channels)
[2026-01-30T23:31:45.659Z] [BOT] 💾 BEFORE MERGE: 772 jobs in memory (cached)
[2026-01-30T23:31:45.681Z] [BOT] ✅ Loaded V2 database: 771 jobs
💾 DISK STATE: 771 jobs on disk
[2026-01-30T23:31:45.681Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=772
[2026-01-30T23:31:45.684Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:31:45.684Z] [BOT] 💾 AFTER MERGE: 772 jobs (merged disk + memory)
[2026-01-30T23:31:45.684Z] [BOT] ✅ No jobs to archive (all 772 jobs within 7-day window)
[2026-01-30T23:31:45.742Z] [BOT] 💾 Saved posted_jobs.json: 772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:50.244Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-30T23:31:50.245Z] [BOT] 📍 [ROUTING] "Legal Counsel, Audiobook Licensing" @ spotify
[2026-01-30T23:31:50.245Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T23:31:50.543Z] [BOT] ✅ Posted message: Legal Counsel, Audiobook Licensing @ spotify in #🤖・ai-jobs
  ✅ Industry: Legal Counsel, Audiobook Licensing @ spotify
[2026-01-30T23:31:50.544Z] [BOT] 💾 Added channel posting: Legal Counsel, Audiobook Licensing @ spotify → category channel (1 total channels)
[2026-01-30T23:31:50.544Z] [BOT] 💾 BEFORE MERGE: 773 jobs in memory (cached)
[2026-01-30T23:31:50.559Z] [BOT] ✅ Loaded V2 database: 772 jobs
💾 DISK STATE: 772 jobs on disk
[2026-01-30T23:31:50.560Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=773
[2026-01-30T23:31:50.562Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 773 jobs (merged disk + memory)
[2026-01-30T23:31:50.563Z] [BOT] ✅ No jobs to archive (all 773 jobs within 7-day window)
[2026-01-30T23:31:50.620Z] [BOT] 💾 Saved posted_jobs.json: 773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:52.330Z] [BOT] ✅ Posted message: Legal Counsel, Audiobook Licensing @ spotify in #🗽・JID_98d4f0de
[2026-01-30T23:31:52.330Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T23:31:52.330Z] [BOT] 💾 Added channel posting: Legal Counsel, Audiobook Licensing @ spotify → location channel (2 total channels)
💾 BEFORE MERGE: 773 jobs in memory (cached)
[2026-01-30T23:31:52.345Z] [BOT] ✅ Loaded V2 database: 773 jobs
💾 DISK STATE: 773 jobs on disk
[2026-01-30T23:31:52.345Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=773
[2026-01-30T23:31:52.347Z] [BOT] 🔀 Deep merged: Legal Counsel, Audiobook Licensing @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T23:31:52.347Z] [BOT] 💾 AFTER MERGE: 773 jobs (merged disk + memory)
[2026-01-30T23:31:52.348Z] [BOT] ✅ No jobs to archive (all 773 jobs within 7-day window)
[2026-01-30T23:31:52.397Z] [BOT] 💾 Saved posted_jobs.json: 773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:53.899Z] [BOT] 📍 [ROUTING] "Account Executive - Backstage" @ spotify
[2026-01-30T23:31:53.899Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T23:31:54.165Z] [BOT] ✅ Posted message: Account Executive - Backstage @ spotify in #🤖・ai-jobs
  ✅ Industry: Account Executive - Backstage @ spotify
[2026-01-30T23:31:54.165Z] [BOT] 💾 Added channel posting: Account Executive - Backstage @ spotify → category channel (1 total channels)
[2026-01-30T23:31:54.165Z] [BOT] 💾 BEFORE MERGE: 774 jobs in memory (cached)
[2026-01-30T23:31:54.180Z] [BOT] ✅ Loaded V2 database: 773 jobs
[2026-01-30T23:31:54.180Z] [BOT] 💾 DISK STATE: 773 jobs on disk
[2026-01-30T23:31:54.181Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=774
[2026-01-30T23:31:54.182Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 774 jobs (merged disk + memory)
[2026-01-30T23:31:54.183Z] [BOT] ✅ No jobs to archive (all 774 jobs within 7-day window)
[2026-01-30T23:31:54.233Z] [BOT] 💾 Saved posted_jobs.json: 774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:55.939Z] [BOT] ✅ Posted message: Account Executive - Backstage @ spotify in #🗽・JID_98d4f0de
[2026-01-30T23:31:55.939Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T23:31:55.939Z] [BOT] 💾 Added channel posting: Account Executive - Backstage @ spotify → location channel (2 total channels)
💾 BEFORE MERGE: 774 jobs in memory (cached)
[2026-01-30T23:31:55.955Z] [BOT] ✅ Loaded V2 database: 774 jobs
💾 DISK STATE: 774 jobs on disk
[2026-01-30T23:31:55.955Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=774
[2026-01-30T23:31:55.957Z] [BOT] 🔀 Deep merged: Account Executive - Backstage @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T23:31:55.957Z] [BOT] 💾 AFTER MERGE: 774 jobs (merged disk + memory)
[2026-01-30T23:31:55.957Z] [BOT] ✅ No jobs to archive (all 774 jobs within 7-day window)
[2026-01-30T23:31:56.007Z] [BOT] 💾 Saved posted_jobs.json: 774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:57.509Z] [BOT] 📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_7a291dc3
[2026-01-30T23:31:57.509Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T23:31:57.744Z] [BOT] ✅ Posted message: Associate Machine Learning Engineer @ ORG_7a291dc3 in #🤖・ai-jobs
  ✅ Industry: Associate Machine Learning Engineer @ ORG_7a291dc3
[2026-01-30T23:31:57.744Z] [BOT] 💾 Added channel posting: Associate Machine Learning Engineer @ ORG_7a291dc3 → category channel (1 total channels)
[2026-01-30T23:31:57.744Z] [BOT] 💾 BEFORE MERGE: 775 jobs in memory (cached)
[2026-01-30T23:31:57.760Z] [BOT] ✅ Loaded V2 database: 774 jobs
💾 DISK STATE: 774 jobs on disk
[2026-01-30T23:31:57.760Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=775
[2026-01-30T23:31:57.762Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:31:57.762Z] [BOT] 💾 AFTER MERGE: 775 jobs (merged disk + memory)
[2026-01-30T23:31:57.763Z] [BOT] ✅ No jobs to archive (all 775 jobs within 7-day window)
[2026-01-30T23:31:57.813Z] [BOT] 💾 Saved posted_jobs.json: 775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:31:59.315Z] [BOT] 📍 [ROUTING] "2026 University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2026-01-30T23:31:59.315Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T23:31:59.598Z] [BOT] ✅ Posted message: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-30T23:31:59.599Z] [BOT] ✅ Industry: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-30T23:31:59.599Z] [BOT] 💾 Added channel posting: 2026 University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
💾 BEFORE MERGE: 776 jobs in memory (cached)
[2026-01-30T23:31:59.614Z] [BOT] ✅ Loaded V2 database: 775 jobs
💾 DISK STATE: 775 jobs on disk
[2026-01-30T23:31:59.615Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=776
[2026-01-30T23:31:59.617Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:31:59.617Z] [BOT] 💾 AFTER MERGE: 776 jobs (merged disk + memory)
[2026-01-30T23:31:59.617Z] [BOT] ✅ No jobs to archive (all 776 jobs within 7-day window)
[2026-01-30T23:31:59.666Z] [BOT] 💾 Saved posted_jobs.json: 776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:32:01.168Z] [BOT] 📍 [ROUTING] "AI Engineer – New Graduate" @ ORG_33141a27 AI
[2026-01-30T23:32:01.169Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T23:32:01.620Z] [BOT] ✅ Posted message: AI Engineer – New Graduate @ ORG_33141a27 AI in #🤖・ai-jobs
[2026-01-30T23:32:01.620Z] [BOT] ✅ Industry: AI Engineer – New Graduate @ ORG_33141a27 AI
[2026-01-30T23:32:01.621Z] [BOT] 💾 Added channel posting: AI Engineer – New Graduate @ ORG_33141a27 AI → category channel (1 total channels)
💾 BEFORE MERGE: 777 jobs in memory (cached)
[2026-01-30T23:32:01.635Z] [BOT] ✅ Loaded V2 database: 776 jobs
💾 DISK STATE: 776 jobs on disk
[2026-01-30T23:32:01.636Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=777
[2026-01-30T23:32:01.637Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:32:01.637Z] [BOT] 💾 AFTER MERGE: 777 jobs (merged disk + memory)
[2026-01-30T23:32:01.638Z] [BOT] ✅ No jobs to archive (all 777 jobs within 7-day window)
[2026-01-30T23:32:01.688Z] [BOT] 💾 Saved posted_jobs.json: 777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:32:06.189Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T23:32:06.190Z] [BOT] 📍 [ROUTING] "Data Scientist 1: Network and Contracts" @ ORG_ca66a852 Health
[2026-01-30T23:32:06.190Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T23:32:06.555Z] [BOT] ✅ Posted message: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health in #📊・JID_fb739488
  ✅ Industry: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health
[2026-01-30T23:32:06.555Z] [BOT] 💾 Added channel posting: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health → category channel (1 total channels)
[2026-01-30T23:32:06.555Z] [BOT] 💾 BEFORE MERGE: 778 jobs in memory (cached)
[2026-01-30T23:32:06.570Z] [BOT] ✅ Loaded V2 database: 777 jobs
💾 DISK STATE: 777 jobs on disk
[2026-01-30T23:32:06.570Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=778
[2026-01-30T23:32:06.572Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 778 jobs (merged disk + memory)
[2026-01-30T23:32:06.573Z] [BOT] ✅ No jobs to archive (all 778 jobs within 7-day window)
[2026-01-30T23:32:06.623Z] [BOT] 💾 Saved posted_jobs.json: 778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:32:08.459Z] [BOT] ✅ Posted message: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T23:32:08.459Z] [BOT] 💾 Added channel posting: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health → location channel (2 total channels)
[2026-01-30T23:32:08.459Z] [BOT] 💾 BEFORE MERGE: 778 jobs in memory (cached)
[2026-01-30T23:32:08.475Z] [BOT] ✅ Loaded V2 database: 778 jobs
💾 DISK STATE: 778 jobs on disk
[2026-01-30T23:32:08.475Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=778
[2026-01-30T23:32:08.477Z] [BOT] 🔀 Deep merged: Data Scientist 1: Network and Contracts @ ORG_ca66a852 Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 778 jobs (merged disk + memory)
[2026-01-30T23:32:08.478Z] [BOT] ✅ No jobs to archive (all 778 jobs within 7-day window)
[2026-01-30T23:32:08.527Z] [BOT] 💾 Saved posted_jobs.json: 778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:32:13.029Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T23:32:13.030Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_16a7244e..." not found, but found as SHA256 "bc7c4c5f64f2b4a8"
⏭️  Skipping duplicate: JID_a08aa26f (posted within 7 days)
[2026-01-30T23:32:13.030Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_46200cd2..." not found, but found as SHA256 "4bb201ba96551b6a"
⏭️  Skipping duplicate: JID_c186e786 (posted within 7 days)
[2026-01-30T23:32:13.030Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0eb23a37..." not found, but found as SHA256 "dd02f010041afb88"
⏭️  Skipping duplicate: JID_4b93d4f9 (posted within 7 days)
[2026-01-30T23:32:13.031Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_771e110d..." not found, but found as SHA256 "8b3df2b0ba595dbc"
⏭️  Skipping duplicate: JID_458aaa8e (posted within 7 days)
[2026-01-30T23:32:13.031Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4a1165d7..." not found, but found as SHA256 "83dd07671295efb7"
⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_863afa71..." not found, but found as SHA256 "16a872da8e3ea057"
⏭️  Skipping duplicate: JID_863afa71 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6ce28f39..." not found, but found as SHA256 "2ad6a509dbdc4ea1"
⏭️  Skipping duplicate: JID_160d6d87 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2780275f..." not found, but found as SHA256 "0e651078d22e4946"
⏭️  Skipping duplicate: JID_cee4f149-_r58467 (posted within 7 days)
[2026-01-30T23:32:13.031Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "5b8c89ca9d82a370"
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_8f908b75-scientist_r160656 (posted within 7 days)
[2026-01-30T23:32:13.032Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f2e0a6a2..." not found, but found as SHA256 "24acf8eabb3e3cc5"
⏭️  Skipping duplicate: JID_b87a4832 (posted within 7 days)
[2026-01-30T23:32:13.141Z] [BOT] ✅ Loaded pending queue: 2936 total (2150 pending, 47 enriched, 739 posted)
[2026-01-30T23:32:13.320Z] [BOT] ✅ Saved pending queue: 2936 total (2150 pending, 37 enriched, 749 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T23:32:13.403Z] [BOT] 📂 Loaded 10830 existing routing entries
[2026-01-30T23:32:13.547Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T23:32:13.547Z] [BOT] New entries: 10
   Total entries: 10840
   Timestamp: 2026-01-30T23:32:13.483Z
[2026-01-30T23:32:13.548Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T23:32:13.548Z] [BOT] Total attempts: 31
   Successful: 14
   Failed: 0
   Skipped: 17
[2026-01-30T23:32:13.548Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-30T23:32:13.548Z] [BOT] 2. #💻・tech-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 3 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-30T23:32:13.549Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T23:32:13.549Z] [BOT] 💾 BEFORE MERGE: 778 jobs in memory (cached)
[2026-01-30T23:32:13.565Z] [BOT] ✅ Loaded V2 database: 778 jobs
💾 DISK STATE: 778 jobs on disk
[2026-01-30T23:32:13.565Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=778
[2026-01-30T23:32:13.567Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T23:32:13.567Z] [BOT] 💾 AFTER MERGE: 778 jobs (merged disk + memory)
[2026-01-30T23:32:13.568Z] [BOT] ✅ No jobs to archive (all 778 jobs within 7-day window)
[2026-01-30T23:32:13.617Z] [BOT] 💾 Saved posted_jobs.json: 778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T23:32:13.618Z] [BOT] ✅ Database saved successfully
[2026-01-30T23:32:15.646Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*