# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T14:48:14.972Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T14:47:43.267Z] ========================================
[2026-01-31T14:47:43.268Z] Discord Bot Execution Log
[2026-01-31T14:47:43.268Z] Environment: GitHub Actions
[2026-01-31T14:47:43.268Z] Node Version: v20.20.0
[2026-01-31T14:47:43.269Z] ========================================
[2026-01-31T14:47:43.269Z] Environment Variables Check:
[2026-01-31T14:47:43.269Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T14:47:43.269Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T14:47:43.269Z] 
Multi-Channel Configuration:
[2026-01-31T14:47:43.269Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T14:47:43.269Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T14:47:43.270Z] 
Data Files Check:
[2026-01-31T14:47:43.271Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T14:47:43.313Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7332107 bytes)
[2026-01-31T14:47:43.313Z] 
========================================
[2026-01-31T14:47:43.313Z] Starting Enhanced Discord Bot...
[2026-01-31T14:47:43.313Z] ========================================
[2026-01-31T14:47:43.814Z] [BOT] ✅ Loaded V2 database: 1186 jobs
[2026-01-31T14:47:44.274Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T14:47:44.275Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T14:47:44.275Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T14:47:44.441Z] [BOT] ✅ Loaded pending queue: 2947 total (1740 pending, 50 enriched, 1157 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T14:47:44.441Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T14:47:44.442Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T14:47:44.442Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T14:47:44.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T14:47:44.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T14:47:44.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T14:47:44.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T14:47:44.444Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T14:47:44.444Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T14:47:44.444Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T14:47:44.444Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T14:47:44.444Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T14:47:44.444Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T14:47:44.445Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T14:47:44.445Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T14:47:44.445Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T14:47:44.445Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T14:47:44.445Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
[2026-01-31T14:47:44.445Z] [BOT] ⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T14:47:44.445Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
[2026-01-31T14:47:44.445Z] [BOT] ⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T14:47:44.446Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
[2026-01-31T14:47:44.446Z] [BOT] ⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
[2026-01-31T14:47:44.446Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
[2026-01-31T14:47:44.446Z] [BOT] ⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
[2026-01-31T14:47:44.446Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
[2026-01-31T14:47:44.446Z] [BOT] ⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
[2026-01-31T14:47:44.446Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
[2026-01-31T14:47:44.447Z] [BOT] ⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
[2026-01-31T14:47:44.447Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T14:47:44.452Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T14:47:44.452Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Cosmology - Spherex Galaxy Clusters at Argonne National Laboratory
[2026-01-31T14:47:44.608Z] [BOT] ✅ Loaded pending queue: 2947 total (1740 pending, 50 enriched, 1157 posted)
[2026-01-31T14:47:44.786Z] [BOT] ✅ Saved pending queue: 2946 total (1740 pending, 49 enriched, 1157 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 28 jobs (1 blacklisted)
[2026-01-31T14:47:44.786Z] [BOT] 📋 After data quality filter: 28 jobs (0 invalid)
[2026-01-31T14:47:44.787Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
[2026-01-31T14:47:44.787Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - AI Data Specialist @ RWS: arizona, illinois, tennessee
⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T14:47:44.791Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T14:47:44.791Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_b1b059ca Systems
[2026-01-31T14:47:44.792Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:47:44.808Z] [BOT ERROR] (node:3310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T14:47:45.198Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_b1b059ca Systems in #💻・tech-jobs
[2026-01-31T14:47:45.198Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_b1b059ca Systems
[2026-01-31T14:47:45.199Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_b1b059ca Systems → category channel (1 total channels)
[2026-01-31T14:47:45.199Z] [BOT] 💾 BEFORE MERGE: 1187 jobs in memory (cached)
[2026-01-31T14:47:45.231Z] [BOT] ✅ Loaded V2 database: 1186 jobs
💾 DISK STATE: 1186 jobs on disk
[2026-01-31T14:47:45.231Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1187
[2026-01-31T14:47:45.234Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:47:45.234Z] [BOT] 💾 AFTER MERGE: 1187 jobs (merged disk + memory)
[2026-01-31T14:47:45.235Z] [BOT] ✅ No jobs to archive (all 1187 jobs within 7-day window)
[2026-01-31T14:47:45.322Z] [BOT] 💾 Saved posted_jobs.json: 1187 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:47:46.825Z] [BOT] 📍 [ROUTING] "Brand Designer" @ nominal
   Category: TECH (default)
[2026-01-31T14:47:46.825Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:47:47.133Z] [BOT] ✅ Posted message: Brand Designer @ nominal in #💻・tech-jobs
[2026-01-31T14:47:47.133Z] [BOT] ✅ Industry: Brand Designer @ nominal
[2026-01-31T14:47:47.134Z] [BOT] 💾 Added channel posting: Brand Designer @ nominal → category channel (1 total channels)
[2026-01-31T14:47:47.134Z] [BOT] 💾 BEFORE MERGE: 1188 jobs in memory (cached)
[2026-01-31T14:47:47.165Z] [BOT] ✅ Loaded V2 database: 1187 jobs
💾 DISK STATE: 1187 jobs on disk
[2026-01-31T14:47:47.166Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1188
[2026-01-31T14:47:47.169Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:47:47.169Z] [BOT] 💾 AFTER MERGE: 1188 jobs (merged disk + memory)
[2026-01-31T14:47:47.169Z] [BOT] ✅ No jobs to archive (all 1188 jobs within 7-day window)
[2026-01-31T14:47:47.246Z] [BOT] 💾 Saved posted_jobs.json: 1188 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:47:48.747Z] [BOT] 📍 [ROUTING] "Sustaining Product Engineer" @ ORG_dd730736
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T14:47:48.747Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:47:49.079Z] [BOT] ✅ Posted message: Sustaining Product Engineer @ ORG_dd730736 in #💻・tech-jobs
[2026-01-31T14:47:49.079Z] [BOT] ✅ Industry: Sustaining Product Engineer @ ORG_dd730736
[2026-01-31T14:47:49.079Z] [BOT] 💾 Added channel posting: Sustaining Product Engineer @ ORG_dd730736 → category channel (1 total channels)
[2026-01-31T14:47:49.079Z] [BOT] 💾 BEFORE MERGE: 1189 jobs in memory (cached)
[2026-01-31T14:47:49.110Z] [BOT] ✅ Loaded V2 database: 1188 jobs
💾 DISK STATE: 1188 jobs on disk
[2026-01-31T14:47:49.111Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1189
[2026-01-31T14:47:49.113Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1189 jobs (merged disk + memory)
[2026-01-31T14:47:49.114Z] [BOT] ✅ No jobs to archive (all 1189 jobs within 7-day window)
[2026-01-31T14:47:49.192Z] [BOT] 💾 Saved posted_jobs.json: 1189 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:47:50.693Z] [BOT] 📍 [ROUTING] "Developer Productivity Engineer" @ supabase
[2026-01-31T14:47:50.694Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:47:50.867Z] [BOT] ✅ Posted message: Developer Productivity Engineer @ supabase in #💻・tech-jobs
[2026-01-31T14:47:50.867Z] [BOT] ✅ Industry: Developer Productivity Engineer @ supabase
[2026-01-31T14:47:50.868Z] [BOT] 💾 Added channel posting: Developer Productivity Engineer @ supabase → category channel (1 total channels)
💾 BEFORE MERGE: 1190 jobs in memory (cached)
[2026-01-31T14:47:50.899Z] [BOT] ✅ Loaded V2 database: 1189 jobs
💾 DISK STATE: 1189 jobs on disk
[2026-01-31T14:47:50.900Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1190
[2026-01-31T14:47:50.902Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:47:50.902Z] [BOT] 💾 AFTER MERGE: 1190 jobs (merged disk + memory)
[2026-01-31T14:47:50.903Z] [BOT] ✅ No jobs to archive (all 1190 jobs within 7-day window)
[2026-01-31T14:47:50.984Z] [BOT] 💾 Saved posted_jobs.json: 1190 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:47:52.485Z] [BOT] 📍 [ROUTING] "Operations Research Analyst-Foundational" @ ORG_fee50aac
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:47:52.639Z] [BOT] ✅ Posted message: Operations Research Analyst-Foundational @ ORG_fee50aac in #💻・tech-jobs
  ✅ Industry: Operations Research Analyst-Foundational @ ORG_fee50aac
[2026-01-31T14:47:52.640Z] [BOT] 💾 Added channel posting: Operations Research Analyst-Foundational @ ORG_fee50aac → category channel (1 total channels)
[2026-01-31T14:47:52.640Z] [BOT] 💾 BEFORE MERGE: 1191 jobs in memory (cached)
[2026-01-31T14:47:52.673Z] [BOT] ✅ Loaded V2 database: 1190 jobs
💾 DISK STATE: 1190 jobs on disk
[2026-01-31T14:47:52.673Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1191
[2026-01-31T14:47:52.676Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:47:52.676Z] [BOT] 💾 AFTER MERGE: 1191 jobs (merged disk + memory)
[2026-01-31T14:47:52.677Z] [BOT] ✅ No jobs to archive (all 1191 jobs within 7-day window)
[2026-01-31T14:47:52.754Z] [BOT] 💾 Saved posted_jobs.json: 1191 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:47:54.256Z] [BOT] 📍 [ROUTING] "Seismic Imaging Analyst" @ ORG_b253f799
[2026-01-31T14:47:54.256Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:47:54.416Z] [BOT] ✅ Posted message: Seismic Imaging Analyst @ ORG_b253f799 in #💻・tech-jobs
  ✅ Industry: Seismic Imaging Analyst @ ORG_b253f799
[2026-01-31T14:47:54.417Z] [BOT] 💾 Added channel posting: Seismic Imaging Analyst @ ORG_b253f799 → category channel (1 total channels)
[2026-01-31T14:47:54.417Z] [BOT] 💾 BEFORE MERGE: 1192 jobs in memory (cached)
[2026-01-31T14:47:54.448Z] [BOT] ✅ Loaded V2 database: 1191 jobs
💾 DISK STATE: 1191 jobs on disk
[2026-01-31T14:47:54.448Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1192
[2026-01-31T14:47:54.450Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1192 jobs (merged disk + memory)
[2026-01-31T14:47:54.451Z] [BOT] ✅ No jobs to archive (all 1192 jobs within 7-day window)
[2026-01-31T14:47:54.526Z] [BOT] 💾 Saved posted_jobs.json: 1192 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:47:59.027Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-31T14:47:59.028Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist in Code Generation" @ ORG_08c9a13c
[2026-01-31T14:47:59.028Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T14:47:59.348Z] [BOT] ✅ Posted message: Graduate Research Scientist in Code Generation @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T14:47:59.348Z] [BOT] ✅ Industry: Graduate Research Scientist in Code Generation @ ORG_08c9a13c
[2026-01-31T14:47:59.349Z] [BOT] 💾 Added channel posting: Graduate Research Scientist in Code Generation @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T14:47:59.349Z] [BOT] 💾 BEFORE MERGE: 1193 jobs in memory (cached)
[2026-01-31T14:47:59.381Z] [BOT] ✅ Loaded V2 database: 1192 jobs
💾 DISK STATE: 1192 jobs on disk
[2026-01-31T14:47:59.381Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1193
[2026-01-31T14:47:59.383Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1193 jobs (merged disk + memory)
[2026-01-31T14:47:59.384Z] [BOT] ✅ No jobs to archive (all 1193 jobs within 7-day window)
[2026-01-31T14:47:59.475Z] [BOT] 💾 Saved posted_jobs.json: 1193 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:48:00.975Z] [BOT] 📍 [ROUTING] "AI Engineer" @ ORG_a06522bc Consulting Group
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T14:48:00.976Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T14:48:01.222Z] [BOT] ✅ Posted message: AI Engineer @ ORG_a06522bc Consulting Group in #🤖・ai-jobs
  ✅ Industry: AI Engineer @ ORG_a06522bc Consulting Group
[2026-01-31T14:48:01.223Z] [BOT] 💾 Added channel posting: AI Engineer @ ORG_a06522bc Consulting Group → category channel (1 total channels)
💾 BEFORE MERGE: 1194 jobs in memory (cached)
[2026-01-31T14:48:01.254Z] [BOT] ✅ Loaded V2 database: 1193 jobs
💾 DISK STATE: 1193 jobs on disk
[2026-01-31T14:48:01.254Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1194
[2026-01-31T14:48:01.256Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1194 jobs (merged disk + memory)
[2026-01-31T14:48:01.257Z] [BOT] ✅ No jobs to archive (all 1194 jobs within 7-day window)
[2026-01-31T14:48:01.332Z] [BOT] 💾 Saved posted_jobs.json: 1194 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:48:02.833Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer/Scientist - Multi Modality" @ ORG_8bee3a8d Labs
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T14:48:02.833Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T14:48:03.028Z] [BOT] ✅ Posted message: Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs
[2026-01-31T14:48:03.028Z] [BOT] 💾 Added channel posting: Machine Learning Engineer/Scientist - Multi Modality @ ORG_8bee3a8d Labs → category channel (1 total channels)
💾 BEFORE MERGE: 1195 jobs in memory (cached)
[2026-01-31T14:48:03.060Z] [BOT] ✅ Loaded V2 database: 1194 jobs
💾 DISK STATE: 1194 jobs on disk
[2026-01-31T14:48:03.060Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1195
[2026-01-31T14:48:03.062Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1195 jobs (merged disk + memory)
[2026-01-31T14:48:03.063Z] [BOT] ✅ No jobs to archive (all 1195 jobs within 7-day window)
[2026-01-31T14:48:03.139Z] [BOT] 💾 Saved posted_jobs.json: 1195 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:48:04.640Z] [BOT] 📍 [ROUTING] "Research Associate in Theoretical and Computational Condensed Matter Physics" @ ORG_13e36faa Lab
[2026-01-31T14:48:04.640Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T14:48:04.800Z] [BOT] ✅ Posted message: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab in #🤖・ai-jobs
[2026-01-31T14:48:04.800Z] [BOT] ✅ Industry: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab
[2026-01-31T14:48:04.801Z] [BOT] 💾 Added channel posting: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab → category channel (1 total channels)
💾 BEFORE MERGE: 1196 jobs in memory (cached)
[2026-01-31T14:48:04.832Z] [BOT] ✅ Loaded V2 database: 1195 jobs
💾 DISK STATE: 1195 jobs on disk
[2026-01-31T14:48:04.833Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1196
[2026-01-31T14:48:04.835Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:48:04.835Z] [BOT] 💾 AFTER MERGE: 1196 jobs (merged disk + memory)
[2026-01-31T14:48:04.836Z] [BOT] ✅ No jobs to archive (all 1196 jobs within 7-day window)
[2026-01-31T14:48:04.911Z] [BOT] 💾 Saved posted_jobs.json: 1196 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:48:06.786Z] [BOT] ✅ Posted message: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab in #🗽・JID_98d4f0de
[2026-01-31T14:48:06.786Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T14:48:06.787Z] [BOT] 💾 Added channel posting: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab → location channel (2 total channels)
💾 BEFORE MERGE: 1196 jobs in memory (cached)
[2026-01-31T14:48:06.819Z] [BOT] ✅ Loaded V2 database: 1196 jobs
💾 DISK STATE: 1196 jobs on disk
[2026-01-31T14:48:06.819Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1196
[2026-01-31T14:48:06.822Z] [BOT] 🔀 Deep merged: Research Associate in Theoretical and Computational Condensed Matter Physics @ ORG_13e36faa Lab (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1196 jobs (merged disk + memory)
[2026-01-31T14:48:06.822Z] [BOT] ✅ No jobs to archive (all 1196 jobs within 7-day window)
[2026-01-31T14:48:06.909Z] [BOT] 💾 Saved posted_jobs.json: 1196 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:48:11.410Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T14:48:11.411Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_42553b2f..." not found, but found as SHA256 "97b62531115cf6ff"
[2026-01-31T14:48:11.411Z] [BOT] ⏭️  Skipping duplicate: JID_0af813db (posted within 7 days)
[2026-01-31T14:48:11.411Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b7f61f4..." not found, but found as SHA256 "d1fa7657b9c04af3"
⏭️  Skipping duplicate: JID_748bd25e (posted within 7 days)
[2026-01-31T14:48:11.412Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_43e3654f..." not found, but found as SHA256 "d9f5d77115259dd5"
[2026-01-31T14:48:11.412Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a4f688c9-detail (posted within 7 days)
[2026-01-31T14:48:11.412Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f928417b..." not found, but found as SHA256 "7d87cb4825d9f37b"
⏭️  Skipping duplicate: JID_f928417b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1feddfa..." not found, but found as SHA256 "59b0abf5f2145d79"
⏭️  Skipping duplicate: JID_322dc1e3-cx_4001-job-38504 (posted within 7 days)
[2026-01-31T14:48:11.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9ff236d8-..." not found, but found as SHA256 "32a6f41ae061ef2f"
⏭️  Skipping duplicate: JID_b2a1fd23 (posted within 7 days)
[2026-01-31T14:48:11.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d000f0a5-..." not found, but found as SHA256 "937c60a837a228a0"
[2026-01-31T14:48:11.413Z] [BOT] ⏭️  Skipping duplicate: JID_b04f1d2e (posted within 7 days)
[2026-01-31T14:48:11.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3b6de877-kbr_careers-jo..." not found, but found as SHA256 "7159a776e79df03f"
[2026-01-31T14:48:11.413Z] [BOT] ⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_89d20214-foundational_r2114720 (posted within 7 days)
[2026-01-31T14:48:11.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_60e5b5d6..." not found, but found as SHA256 "52199891b4ba399e"
⏭️  Skipping duplicate: JID_d941c973-physics_jr102043 (posted within 7 days)
[2026-01-31T14:48:11.414Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1046ba4e..." not found, but found as SHA256 "d83fcb13f085478f"
[2026-01-31T14:48:11.414Z] [BOT] ⏭️  Skipping duplicate: JID_c7ee204c-analyst_jr101070-2 (posted within 7 days)
[2026-01-31T14:48:11.560Z] [BOT] ✅ Loaded pending queue: 2946 total (1740 pending, 49 enriched, 1157 posted)
[2026-01-31T14:48:11.753Z] [BOT] ✅ Saved pending queue: 2946 total (1740 pending, 39 enriched, 1167 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T14:48:11.851Z] [BOT] 📂 Loaded 11248 existing routing entries
[2026-01-31T14:48:11.975Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11258
[2026-01-31T14:48:11.975Z] [BOT] Timestamp: 2026-01-31T14:48:11.936Z
[2026-01-31T14:48:11.976Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T14:48:11.976Z] [BOT] Total attempts: 33
   Successful: 11
   Failed: 0
   Skipped: 22
[2026-01-31T14:48:11.976Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T14:48:11.976Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 3
   Top channels:
[2026-01-31T14:48:11.976Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 1 posts
[2026-01-31T14:48:11.976Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T14:48:11.976Z] [BOT] 💾 BEFORE MERGE: 1196 jobs in memory (cached)
[2026-01-31T14:48:12.011Z] [BOT] ✅ Loaded V2 database: 1196 jobs
💾 DISK STATE: 1196 jobs on disk
[2026-01-31T14:48:12.011Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1196
[2026-01-31T14:48:12.014Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:48:12.014Z] [BOT] 💾 AFTER MERGE: 1196 jobs (merged disk + memory)
[2026-01-31T14:48:12.015Z] [BOT] ✅ No jobs to archive (all 1196 jobs within 7-day window)
[2026-01-31T14:48:12.112Z] [BOT] 💾 Saved posted_jobs.json: 1196 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T14:48:14.133Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*