# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T09:33:58.215Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T09:33:21.522Z] ========================================
[2026-01-31T09:33:21.524Z] Discord Bot Execution Log
[2026-01-31T09:33:21.524Z] Environment: GitHub Actions
[2026-01-31T09:33:21.524Z] Node Version: v20.20.0
[2026-01-31T09:33:21.524Z] ========================================
[2026-01-31T09:33:21.524Z] Environment Variables Check:
[2026-01-31T09:33:21.524Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T09:33:21.524Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.524Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T09:33:21.525Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T09:33:21.525Z] 
Multi-Channel Configuration:
[2026-01-31T09:33:21.525Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.525Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.525Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.525Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.525Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.525Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.525Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.525Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.525Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T09:33:21.525Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T09:33:21.525Z] 
Data Files Check:
[2026-01-31T09:33:21.526Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T09:33:21.558Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6312115 bytes)
[2026-01-31T09:33:21.558Z] 
========================================
[2026-01-31T09:33:21.558Z] Starting Enhanced Discord Bot...
[2026-01-31T09:33:21.558Z] ========================================
[2026-01-31T09:33:22.117Z] [BOT] ✅ Loaded V2 database: 1008 jobs
[2026-01-31T09:33:22.959Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T09:33:22.960Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T09:33:22.960Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T09:33:23.080Z] [BOT] ✅ Loaded pending queue: 2956 total (1927 pending, 50 enriched, 979 posted)
[2026-01-31T09:33:23.080Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T09:33:23.080Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T09:33:23.081Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T09:33:23.081Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T09:33:23.082Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T09:33:23.082Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T09:33:23.082Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T09:33:23.082Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T09:33:23.082Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T09:33:23.083Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T09:33:23.083Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T09:33:23.083Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T09:33:23.084Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T09:33:23.084Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T09:33:23.084Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T09:33:23.084Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T09:33:23.084Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T09:33:23.085Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-31T09:33:23.085Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T09:33:23.085Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T09:33:23.085Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-31T09:33:23.085Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T09:33:23.085Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-01-31T09:33:23.085Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T09:33:23.086Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T09:33:23.092Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T09:33:23.092Z] [BOT] 🚫 Skipping blacklisted job: Customer Solution Architect Team Lead (AMER) at supabase
[2026-01-31T09:33:23.092Z] [BOT] 🚫 Skipping blacklisted job: Software Developer - 2026 Leadership Development Program - Houston at ION Group
🚫 Skipping blacklisted job: Manager, Product Marketing  at figma
[2026-01-31T09:33:23.218Z] [BOT] ✅ Loaded pending queue: 2956 total (1927 pending, 50 enriched, 979 posted)
[2026-01-31T09:33:23.404Z] [BOT] ✅ Saved pending queue: 2953 total (1927 pending, 47 enriched, 979 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-31T09:33:23.404Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-31T09:33:23.405Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-31T09:33:23.405Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T09:33:23.409Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T09:33:23.410Z] [BOT] 📍 [ROUTING] "Consulting Associate - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
[2026-01-31T09:33:23.410Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T09:33:23.429Z] [BOT ERROR] (node:3126) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T09:33:23.692Z] [BOT] ✅ Posted message: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092
[2026-01-31T09:33:23.692Z] [BOT] 💾 Added channel posting: Consulting Associate - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
[2026-01-31T09:33:23.693Z] [BOT] 💾 BEFORE MERGE: 1009 jobs in memory (cached)
[2026-01-31T09:33:23.714Z] [BOT] ✅ Loaded V2 database: 1008 jobs
💾 DISK STATE: 1008 jobs on disk
[2026-01-31T09:33:23.715Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1009
[2026-01-31T09:33:23.717Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1009 jobs (merged disk + memory)
[2026-01-31T09:33:23.718Z] [BOT] ✅ No jobs to archive (all 1009 jobs within 7-day window)
[2026-01-31T09:33:23.789Z] [BOT] 💾 Saved posted_jobs.json: 1009 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:28.292Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T09:33:28.293Z] [BOT] 📍 [ROUTING] "Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center" @ ORG_f5f75c9b U
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:33:28.703Z] [BOT] ✅ Posted message: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U in #💻・tech-jobs
[2026-01-31T09:33:28.703Z] [BOT] ✅ Industry: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U
[2026-01-31T09:33:28.703Z] [BOT] 💾 Added channel posting: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U → category channel (1 total channels)
[2026-01-31T09:33:28.703Z] [BOT] 💾 BEFORE MERGE: 1010 jobs in memory (cached)
[2026-01-31T09:33:28.723Z] [BOT] ✅ Loaded V2 database: 1009 jobs
💾 DISK STATE: 1009 jobs on disk
[2026-01-31T09:33:28.723Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1010
[2026-01-31T09:33:28.725Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:33:28.726Z] [BOT] 💾 AFTER MERGE: 1010 jobs (merged disk + memory)
[2026-01-31T09:33:28.726Z] [BOT] ✅ No jobs to archive (all 1010 jobs within 7-day window)
[2026-01-31T09:33:28.788Z] [BOT] 💾 Saved posted_jobs.json: 1010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:30.289Z] [BOT] 📍 [ROUTING] "Data Quality Analyst 1" @ ORG_0aa5052d State University (LSU)
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:33:30.622Z] [BOT] ✅ Posted message: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
  ✅ Industry: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU)
[2026-01-31T09:33:30.622Z] [BOT] 💾 Added channel posting: Data Quality Analyst 1 @ ORG_0aa5052d State University (LSU) → category channel (1 total channels)
[2026-01-31T09:33:30.623Z] [BOT] 💾 BEFORE MERGE: 1011 jobs in memory (cached)
[2026-01-31T09:33:30.642Z] [BOT] ✅ Loaded V2 database: 1010 jobs
💾 DISK STATE: 1010 jobs on disk
[2026-01-31T09:33:30.642Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1011
[2026-01-31T09:33:30.645Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:33:30.645Z] [BOT] 💾 AFTER MERGE: 1011 jobs (merged disk + memory)
[2026-01-31T09:33:30.646Z] [BOT] ✅ No jobs to archive (all 1011 jobs within 7-day window)
[2026-01-31T09:33:30.729Z] [BOT] 💾 Saved posted_jobs.json: 1011 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:32.230Z] [BOT] 📍 [ROUTING] "Research Specialist" @ ORG_9d38443e of Chicago
[2026-01-31T09:33:32.231Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:33:32.406Z] [BOT] ✅ Posted message: Research Specialist @ ORG_9d38443e of Chicago in #💻・tech-jobs
[2026-01-31T09:33:32.406Z] [BOT] ✅ Industry: Research Specialist @ ORG_9d38443e of Chicago
[2026-01-31T09:33:32.407Z] [BOT] 💾 Added channel posting: Research Specialist @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-31T09:33:32.407Z] [BOT] 💾 BEFORE MERGE: 1012 jobs in memory (cached)
[2026-01-31T09:33:32.426Z] [BOT] ✅ Loaded V2 database: 1011 jobs
💾 DISK STATE: 1011 jobs on disk
[2026-01-31T09:33:32.426Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1012
[2026-01-31T09:33:32.428Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1012 jobs (merged disk + memory)
[2026-01-31T09:33:32.429Z] [BOT] ✅ No jobs to archive (all 1012 jobs within 7-day window)
[2026-01-31T09:33:32.487Z] [BOT] 💾 Saved posted_jobs.json: 1012 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:33.990Z] [BOT] 📍 [ROUTING] "Integrations Engineer" @ ORG_8851aaa7
[2026-01-31T09:33:33.990Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:33:34.185Z] [BOT] ✅ Posted message: Integrations Engineer @ ORG_8851aaa7 in #💻・tech-jobs
[2026-01-31T09:33:34.185Z] [BOT] ✅ Industry: Integrations Engineer @ ORG_8851aaa7
[2026-01-31T09:33:34.186Z] [BOT] 💾 Added channel posting: Integrations Engineer @ ORG_8851aaa7 → category channel (1 total channels)
[2026-01-31T09:33:34.186Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory (cached)
[2026-01-31T09:33:34.206Z] [BOT] ✅ Loaded V2 database: 1012 jobs
💾 DISK STATE: 1012 jobs on disk
[2026-01-31T09:33:34.206Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1013
[2026-01-31T09:33:34.208Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:33:34.208Z] [BOT] 💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-31T09:33:34.209Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-31T09:33:34.281Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
[2026-01-31T09:33:34.281Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:35.957Z] [BOT] ✅ Posted message: Integrations Engineer @ ORG_8851aaa7 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T09:33:35.958Z] [BOT] 💾 Added channel posting: Integrations Engineer @ ORG_8851aaa7 → location channel (2 total channels)
[2026-01-31T09:33:35.958Z] [BOT] 💾 BEFORE MERGE: 1013 jobs in memory (cached)
[2026-01-31T09:33:35.976Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-31T09:33:35.976Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1013
[2026-01-31T09:33:35.978Z] [BOT] 🔀 Deep merged: Integrations Engineer @ ORG_8851aaa7 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1013 jobs (merged disk + memory)
[2026-01-31T09:33:35.979Z] [BOT] ✅ No jobs to archive (all 1013 jobs within 7-day window)
[2026-01-31T09:33:36.038Z] [BOT] 💾 Saved posted_jobs.json: 1013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:37.541Z] [BOT] 📍 [ROUTING] "Digital Services Coordinator 1" @ ORG_da52cfea Children's
[2026-01-31T09:33:37.541Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:33:37.798Z] [BOT] ✅ Posted message: Digital Services Coordinator 1 @ ORG_da52cfea Children's in #💻・tech-jobs
  ✅ Industry: Digital Services Coordinator 1 @ ORG_da52cfea Children's
[2026-01-31T09:33:37.799Z] [BOT] 💾 Added channel posting: Digital Services Coordinator 1 @ ORG_da52cfea Children's → category channel (1 total channels)
[2026-01-31T09:33:37.799Z] [BOT] 💾 BEFORE MERGE: 1014 jobs in memory (cached)
[2026-01-31T09:33:37.819Z] [BOT] ✅ Loaded V2 database: 1013 jobs
💾 DISK STATE: 1013 jobs on disk
[2026-01-31T09:33:37.819Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1014
[2026-01-31T09:33:37.822Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:33:37.822Z] [BOT] 💾 AFTER MERGE: 1014 jobs (merged disk + memory)
[2026-01-31T09:33:37.822Z] [BOT] ✅ No jobs to archive (all 1014 jobs within 7-day window)
[2026-01-31T09:33:37.882Z] [BOT] 💾 Saved posted_jobs.json: 1014 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:39.384Z] [BOT] 📍 [ROUTING] "Cantonese Language Specialist" @ ORG_0f2833f9
   Category: TECH (default)
[2026-01-31T09:33:39.385Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:33:39.545Z] [BOT] ✅ Posted message: Cantonese Language Specialist @ ORG_0f2833f9 in #💻・tech-jobs
[2026-01-31T09:33:39.545Z] [BOT] ✅ Industry: Cantonese Language Specialist @ ORG_0f2833f9
[2026-01-31T09:33:39.546Z] [BOT] 💾 Added channel posting: Cantonese Language Specialist @ ORG_0f2833f9 → category channel (1 total channels)
[2026-01-31T09:33:39.546Z] [BOT] 💾 BEFORE MERGE: 1015 jobs in memory (cached)
[2026-01-31T09:33:39.566Z] [BOT] ✅ Loaded V2 database: 1014 jobs
[2026-01-31T09:33:39.566Z] [BOT] 💾 DISK STATE: 1014 jobs on disk
[2026-01-31T09:33:39.566Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1015
[2026-01-31T09:33:39.568Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:33:39.568Z] [BOT] 💾 AFTER MERGE: 1015 jobs (merged disk + memory)
[2026-01-31T09:33:39.569Z] [BOT] ✅ No jobs to archive (all 1015 jobs within 7-day window)
[2026-01-31T09:33:39.644Z] [BOT] 💾 Saved posted_jobs.json: 1015 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:41.335Z] [BOT] ✅ Posted message: Cantonese Language Specialist @ ORG_0f2833f9 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T09:33:41.336Z] [BOT] 💾 Added channel posting: Cantonese Language Specialist @ ORG_0f2833f9 → location channel (2 total channels)
[2026-01-31T09:33:41.336Z] [BOT] 💾 BEFORE MERGE: 1015 jobs in memory (cached)
[2026-01-31T09:33:41.355Z] [BOT] ✅ Loaded V2 database: 1015 jobs
💾 DISK STATE: 1015 jobs on disk
[2026-01-31T09:33:41.355Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1015
[2026-01-31T09:33:41.357Z] [BOT] 🔀 Deep merged: Cantonese Language Specialist @ ORG_0f2833f9 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1015 jobs (merged disk + memory)
[2026-01-31T09:33:41.358Z] [BOT] ✅ No jobs to archive (all 1015 jobs within 7-day window)
[2026-01-31T09:33:41.417Z] [BOT] 💾 Saved posted_jobs.json: 1015 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:42.918Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Web Frameworks - Officer" @ ORG_a3b50c47 Street
[2026-01-31T09:33:42.918Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:33:43.233Z] [BOT] ✅ Posted message: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street in #💻・tech-jobs
[2026-01-31T09:33:43.234Z] [BOT] ✅ Industry: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street
[2026-01-31T09:33:43.234Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Web Frameworks - Officer @ ORG_a3b50c47 Street → category channel (1 total channels)
[2026-01-31T09:33:43.234Z] [BOT] 💾 BEFORE MERGE: 1016 jobs in memory (cached)
[2026-01-31T09:33:43.254Z] [BOT] ✅ Loaded V2 database: 1015 jobs
💾 DISK STATE: 1015 jobs on disk
[2026-01-31T09:33:43.255Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1016
[2026-01-31T09:33:43.257Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:33:43.257Z] [BOT] 💾 AFTER MERGE: 1016 jobs (merged disk + memory)
[2026-01-31T09:33:43.257Z] [BOT] ✅ No jobs to archive (all 1016 jobs within 7-day window)
[2026-01-31T09:33:43.317Z] [BOT] 💾 Saved posted_jobs.json: 1016 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:47.820Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T09:33:47.821Z] [BOT] 📍 [ROUTING] "Applications Programmer" @ ORG_5132f94c
   Category: AI (matched: "artificial intelligence")
[2026-01-31T09:33:47.821Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T09:33:48.104Z] [BOT] ✅ Posted message: Applications Programmer @ ORG_5132f94c in #🤖・ai-jobs
  ✅ Industry: Applications Programmer @ ORG_5132f94c
[2026-01-31T09:33:48.105Z] [BOT] 💾 Added channel posting: Applications Programmer @ ORG_5132f94c → category channel (1 total channels)
[2026-01-31T09:33:48.105Z] [BOT] 💾 BEFORE MERGE: 1017 jobs in memory (cached)
[2026-01-31T09:33:48.125Z] [BOT] ✅ Loaded V2 database: 1016 jobs
💾 DISK STATE: 1016 jobs on disk
[2026-01-31T09:33:48.125Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1017
[2026-01-31T09:33:48.127Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:33:48.128Z] [BOT] 💾 AFTER MERGE: 1017 jobs (merged disk + memory)
[2026-01-31T09:33:48.128Z] [BOT] ✅ No jobs to archive (all 1017 jobs within 7-day window)
[2026-01-31T09:33:48.189Z] [BOT] 💾 Saved posted_jobs.json: 1017 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:49.691Z] [BOT] 📍 [ROUTING] "Event Planner I - Hosted Events" @ gohighlevel
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T09:33:49.869Z] [BOT] ✅ Posted message: Event Planner I - Hosted Events @ gohighlevel in #🤖・ai-jobs
  ✅ Industry: Event Planner I - Hosted Events @ gohighlevel
[2026-01-31T09:33:49.869Z] [BOT] 💾 Added channel posting: Event Planner I - Hosted Events @ gohighlevel → category channel (1 total channels)
[2026-01-31T09:33:49.869Z] [BOT] 💾 BEFORE MERGE: 1018 jobs in memory (cached)
[2026-01-31T09:33:49.889Z] [BOT] ✅ Loaded V2 database: 1017 jobs
💾 DISK STATE: 1017 jobs on disk
[2026-01-31T09:33:49.889Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1018
[2026-01-31T09:33:49.891Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:33:49.891Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-31T09:33:49.892Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-31T09:33:49.954Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:54.456Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T09:33:54.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "81d02ee325149cb6"
[2026-01-31T09:33:54.457Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_84208682-_r00025970 (posted within 7 days)
[2026-01-31T09:33:54.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f4ebbc02..." not found, but found as SHA256 "7cddeceeee74879e"
[2026-01-31T09:33:54.457Z] [BOT] ⏭️  Skipping duplicate: JID_22c9c844-center_jr89315-1 (posted within 7 days)
[2026-01-31T09:33:54.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1e8fe95f..." not found, but found as SHA256 "6700d7981a6fb402"
⏭️  Skipping duplicate: JID_a9275996-1_r00111644-1 (posted within 7 days)
[2026-01-31T09:33:54.458Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "f550a577df144730"
[2026-01-31T09:33:54.458Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-specialist_jr31878 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_858e24b9-..." not found, but found as SHA256 "968d3535c82d1ee3"
⏭️  Skipping duplicate: JID_b2ef42ea-programmer_r59946 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_3887977f..." not found, but found as SHA256 "672c5929143072f9"
⏭️  Skipping duplicate: JID_e568aeac (posted within 7 days)
[2026-01-31T09:33:54.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f71592..." not found, but found as SHA256 "e048c26900d0f733"
⏭️  Skipping duplicate: JID_fbc97492-external_career_site-JID_4ebae7a0-i_r0022409 (posted within 7 days)
[2026-01-31T09:33:54.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45bf8801..." not found, but found as SHA256 "8f1d4a5b6f2b69de"
[2026-01-31T09:33:54.459Z] [BOT] ⏭️  Skipping duplicate: JID_a9d7df3a (posted within 7 days)
[2026-01-31T09:33:54.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a479e99b-..." not found, but found as SHA256 "8d8da129e36a9c16"
⏭️  Skipping duplicate: JID_70cd8084 (posted within 7 days)
[2026-01-31T09:33:54.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf07ee..." not found, but found as SHA256 "9d02141f2d870e54"
[2026-01-31T09:33:54.459Z] [BOT] ⏭️  Skipping duplicate: JID_cc999bf9-officer_r-779734-1 (posted within 7 days)
[2026-01-31T09:33:54.579Z] [BOT] ✅ Loaded pending queue: 2953 total (1927 pending, 47 enriched, 979 posted)
[2026-01-31T09:33:54.744Z] [BOT] ✅ Saved pending queue: 2953 total (1927 pending, 37 enriched, 989 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T09:33:54.744Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T09:33:54.830Z] [BOT] 📂 Loaded 11070 existing routing entries
[2026-01-31T09:33:54.952Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T09:33:54.952Z] [BOT] New entries: 10
   Total entries: 11080
   Timestamp: 2026-01-31T09:33:54.908Z
[2026-01-31T09:33:54.953Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T09:33:54.953Z] [BOT] Total attempts: 29
   Successful: 12
   Failed: 0
   Skipped: 17
[2026-01-31T09:33:54.953Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T09:33:54.954Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 2 posts
[2026-01-31T09:33:54.954Z] [BOT] 3. #💰・finance-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-01-31T09:33:54.955Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1018 jobs in memory (cached)
[2026-01-31T09:33:54.974Z] [BOT] ✅ Loaded V2 database: 1018 jobs
💾 DISK STATE: 1018 jobs on disk
[2026-01-31T09:33:54.974Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1018
[2026-01-31T09:33:54.976Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:33:54.977Z] [BOT] 💾 AFTER MERGE: 1018 jobs (merged disk + memory)
[2026-01-31T09:33:54.977Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-31T09:33:55.040Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:33:55.040Z] [BOT] ✅ Database saved successfully
[2026-01-31T09:33:57.076Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3126) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*