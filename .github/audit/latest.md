# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T18:53:53.537Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T18:53:19.006Z] ========================================
[2026-01-31T18:53:19.007Z] Discord Bot Execution Log
[2026-01-31T18:53:19.007Z] Environment: GitHub Actions
[2026-01-31T18:53:19.008Z] Node Version: v20.20.0
[2026-01-31T18:53:19.008Z] ========================================
[2026-01-31T18:53:19.008Z] Environment Variables Check:
[2026-01-31T18:53:19.008Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T18:53:19.008Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.008Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T18:53:19.008Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T18:53:19.008Z] 
Multi-Channel Configuration:
[2026-01-31T18:53:19.008Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.008Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.008Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.009Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.009Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.009Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.009Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.009Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.009Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T18:53:19.009Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T18:53:19.009Z] 
Data Files Check:
[2026-01-31T18:53:19.010Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T18:53:19.047Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8098737 bytes)
[2026-01-31T18:53:19.047Z] 
========================================
[2026-01-31T18:53:19.047Z] Starting Enhanced Discord Bot...
[2026-01-31T18:53:19.047Z] ========================================
[2026-01-31T18:53:19.606Z] [BOT] ✅ Loaded V2 database: 1337 jobs
[2026-01-31T18:53:20.175Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T18:53:20.175Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T18:53:20.176Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T18:53:20.294Z] [BOT] ✅ Loaded pending queue: 2945 total (1578 pending, 50 enriched, 1317 posted)
[2026-01-31T18:53:20.295Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T18:53:20.295Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T18:53:20.296Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T18:53:20.296Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T18:53:20.296Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T18:53:20.296Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T18:53:20.297Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T18:53:20.297Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T18:53:20.297Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T18:53:20.298Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T18:53:20.298Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T18:53:20.298Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T18:53:20.298Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T18:53:20.299Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T18:53:20.299Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T18:53:20.299Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-31T18:53:20.299Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T18:53:20.299Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T18:53:20.299Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T18:53:20.300Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T18:53:20.300Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T18:53:20.300Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T18:53:20.300Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T18:53:20.300Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T18:53:20.301Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T18:53:20.301Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T18:53:20.301Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T18:53:20.310Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T18:53:20.310Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar - Experimental Ultrahigh Energy Neutrino - PUEO Experiment at PennState University
[2026-01-31T18:53:20.310Z] [BOT] 🚫 Skipping blacklisted job: Senior Scientist - Autonomous Mobility & Delivery at Uber
[2026-01-31T18:53:20.428Z] [BOT] ✅ Loaded pending queue: 2945 total (1578 pending, 50 enriched, 1317 posted)
[2026-01-31T18:53:20.639Z] [BOT] ✅ Saved pending queue: 2943 total (1578 pending, 48 enriched, 1317 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T18:53:20.639Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T18:53:20.639Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T18:53:20.640Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-31T18:53:20.640Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T18:53:20.640Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T18:53:20.644Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T18:53:20.645Z] [BOT] 📍 [ROUTING] "Product Designer" @ railway
[2026-01-31T18:53:20.645Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:53:20.662Z] [BOT ERROR] (node:2868) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T18:53:21.148Z] [BOT] ✅ Posted message: Product Designer @ railway in #💻・tech-jobs
[2026-01-31T18:53:21.148Z] [BOT] ✅ Industry: Product Designer @ railway
[2026-01-31T18:53:21.149Z] [BOT] 💾 Added channel posting: Product Designer @ railway → category channel (1 total channels)
[2026-01-31T18:53:21.150Z] [BOT] 💾 BEFORE MERGE: 1338 jobs in memory (cached)
[2026-01-31T18:53:21.173Z] [BOT] ✅ Loaded V2 database: 1337 jobs
💾 DISK STATE: 1337 jobs on disk
[2026-01-31T18:53:21.174Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1338
[2026-01-31T18:53:21.177Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:21.177Z] [BOT] 💾 AFTER MERGE: 1338 jobs (merged disk + memory)
[2026-01-31T18:53:21.180Z] [BOT] ✅ No jobs to archive (all 1338 jobs within 7-day window)
[2026-01-31T18:53:21.270Z] [BOT] 💾 Saved posted_jobs.json: 1338 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:23.069Z] [BOT] ✅ Posted message: Product Designer @ railway in #🏠・JID_ead674af
[2026-01-31T18:53:23.069Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T18:53:23.069Z] [BOT] 💾 Added channel posting: Product Designer @ railway → location channel (2 total channels)
[2026-01-31T18:53:23.069Z] [BOT] 💾 BEFORE MERGE: 1338 jobs in memory (cached)
[2026-01-31T18:53:23.092Z] [BOT] ✅ Loaded V2 database: 1338 jobs
💾 DISK STATE: 1338 jobs on disk
[2026-01-31T18:53:23.093Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1338
[2026-01-31T18:53:23.095Z] [BOT] 🔀 Deep merged: Product Designer @ railway (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1338 jobs (merged disk + memory)
[2026-01-31T18:53:23.098Z] [BOT] ✅ No jobs to archive (all 1338 jobs within 7-day window)
[2026-01-31T18:53:23.184Z] [BOT] 💾 Saved posted_jobs.json: 1338 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:24.686Z] [BOT] 📍 [ROUTING] "Product Engineer" @ 3M
[2026-01-31T18:53:24.686Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:53:24.821Z] [BOT] ✅ Posted message: Product Engineer @ 3M in #💻・tech-jobs
[2026-01-31T18:53:24.821Z] [BOT] ✅ Industry: Product Engineer @ 3M
[2026-01-31T18:53:24.821Z] [BOT] 💾 Added channel posting: Product Engineer @ 3M → category channel (1 total channels)
[2026-01-31T18:53:24.822Z] [BOT] 💾 BEFORE MERGE: 1339 jobs in memory (cached)
[2026-01-31T18:53:24.845Z] [BOT] ✅ Loaded V2 database: 1338 jobs
💾 DISK STATE: 1338 jobs on disk
[2026-01-31T18:53:24.845Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1339
[2026-01-31T18:53:24.848Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:24.848Z] [BOT] 💾 AFTER MERGE: 1339 jobs (merged disk + memory)
[2026-01-31T18:53:24.849Z] [BOT] ✅ No jobs to archive (all 1339 jobs within 7-day window)
[2026-01-31T18:53:24.934Z] [BOT] 💾 Saved posted_jobs.json: 1339 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:26.436Z] [BOT] 📍 [ROUTING] "Postgres Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T18:53:26.437Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:53:26.646Z] [BOT] ✅ Posted message: Postgres Engineer @ supabase in #💻・tech-jobs
[2026-01-31T18:53:26.646Z] [BOT] ✅ Industry: Postgres Engineer @ supabase
[2026-01-31T18:53:26.647Z] [BOT] 💾 Added channel posting: Postgres Engineer @ supabase → category channel (1 total channels)
[2026-01-31T18:53:26.647Z] [BOT] 💾 BEFORE MERGE: 1340 jobs in memory (cached)
[2026-01-31T18:53:26.670Z] [BOT] ✅ Loaded V2 database: 1339 jobs
💾 DISK STATE: 1339 jobs on disk
[2026-01-31T18:53:26.670Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1340
[2026-01-31T18:53:26.673Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:26.674Z] [BOT] 💾 AFTER MERGE: 1340 jobs (merged disk + memory)
[2026-01-31T18:53:26.676Z] [BOT] ✅ No jobs to archive (all 1340 jobs within 7-day window)
[2026-01-31T18:53:26.763Z] [BOT] 💾 Saved posted_jobs.json: 1340 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:28.265Z] [BOT] 📍 [ROUTING] "Junior Image Scientist" @ ORG_fee50aac
[2026-01-31T18:53:28.265Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:53:28.454Z] [BOT] ✅ Posted message: Junior Image Scientist @ ORG_fee50aac in #💻・tech-jobs
[2026-01-31T18:53:28.454Z] [BOT] ✅ Industry: Junior Image Scientist @ ORG_fee50aac
[2026-01-31T18:53:28.454Z] [BOT] 💾 Added channel posting: Junior Image Scientist @ ORG_fee50aac → category channel (1 total channels)
[2026-01-31T18:53:28.454Z] [BOT] 💾 BEFORE MERGE: 1341 jobs in memory (cached)
[2026-01-31T18:53:28.479Z] [BOT] ✅ Loaded V2 database: 1340 jobs
💾 DISK STATE: 1340 jobs on disk
[2026-01-31T18:53:28.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1341
[2026-01-31T18:53:28.482Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:28.482Z] [BOT] 💾 AFTER MERGE: 1341 jobs (merged disk + memory)
[2026-01-31T18:53:28.485Z] [BOT] ✅ No jobs to archive (all 1341 jobs within 7-day window)
[2026-01-31T18:53:28.560Z] [BOT] 💾 Saved posted_jobs.json: 1341 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:30.062Z] [BOT] 📍 [ROUTING] "Software Developer - TS/SCI Polygraph" @ ORG_c910d474 Dynamics Information Technology
[2026-01-31T18:53:30.062Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:53:30.339Z] [BOT] ✅ Posted message: Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2026-01-31T18:53:30.339Z] [BOT] ✅ Industry: Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology
[2026-01-31T18:53:30.340Z] [BOT] 💾 Added channel posting: Software Developer - TS/SCI Polygraph @ ORG_c910d474 Dynamics Information Technology → category channel (1 total channels)
[2026-01-31T18:53:30.340Z] [BOT] 💾 BEFORE MERGE: 1342 jobs in memory (cached)
[2026-01-31T18:53:30.363Z] [BOT] ✅ Loaded V2 database: 1341 jobs
💾 DISK STATE: 1341 jobs on disk
[2026-01-31T18:53:30.363Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1342
[2026-01-31T18:53:30.366Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:30.366Z] [BOT] 💾 AFTER MERGE: 1342 jobs (merged disk + memory)
[2026-01-31T18:53:30.367Z] [BOT] ✅ No jobs to archive (all 1342 jobs within 7-day window)
[2026-01-31T18:53:30.453Z] [BOT] 💾 Saved posted_jobs.json: 1342 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:31.956Z] [BOT] 📍 [ROUTING] "On-Site Application Engineer - I-Park" @ ORG_e13d59a1 Group
[2026-01-31T18:53:31.956Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:53:32.093Z] [BOT] ✅ Posted message: On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group in #💻・tech-jobs
[2026-01-31T18:53:32.093Z] [BOT] ✅ Industry: On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group
[2026-01-31T18:53:32.094Z] [BOT] 💾 Added channel posting: On-Site Application Engineer - I-Park @ ORG_e13d59a1 Group → category channel (1 total channels)
💾 BEFORE MERGE: 1343 jobs in memory (cached)
[2026-01-31T18:53:32.117Z] [BOT] ✅ Loaded V2 database: 1342 jobs
💾 DISK STATE: 1342 jobs on disk
[2026-01-31T18:53:32.117Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1343
[2026-01-31T18:53:32.119Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:32.120Z] [BOT] 💾 AFTER MERGE: 1343 jobs (merged disk + memory)
[2026-01-31T18:53:32.122Z] [BOT] ✅ No jobs to archive (all 1343 jobs within 7-day window)
[2026-01-31T18:53:32.201Z] [BOT] 💾 Saved posted_jobs.json: 1343 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:36.702Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T18:53:36.703Z] [BOT] 📍 [ROUTING] "Junior Web Developer" @ ORG_726232d3
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T18:53:36.703Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T18:53:37.078Z] [BOT] ✅ Posted message: Junior Web Developer @ ORG_726232d3 in #🤖・ai-jobs
  ✅ Industry: Junior Web Developer @ ORG_726232d3
[2026-01-31T18:53:37.079Z] [BOT] 💾 Added channel posting: Junior Web Developer @ ORG_726232d3 → category channel (1 total channels)
[2026-01-31T18:53:37.079Z] [BOT] 💾 BEFORE MERGE: 1344 jobs in memory (cached)
[2026-01-31T18:53:37.102Z] [BOT] ✅ Loaded V2 database: 1343 jobs
💾 DISK STATE: 1343 jobs on disk
[2026-01-31T18:53:37.102Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1344
[2026-01-31T18:53:37.105Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:37.105Z] [BOT] 💾 AFTER MERGE: 1344 jobs (merged disk + memory)
[2026-01-31T18:53:37.107Z] [BOT] ✅ No jobs to archive (all 1344 jobs within 7-day window)
[2026-01-31T18:53:37.193Z] [BOT] 💾 Saved posted_jobs.json: 1344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:38.695Z] [BOT] 📍 [ROUTING] "React Developer" @ ORG_726232d3
[2026-01-31T18:53:38.695Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T18:53:38.880Z] [BOT] ✅ Posted message: React Developer @ ORG_726232d3 in #🤖・ai-jobs
[2026-01-31T18:53:38.880Z] [BOT] ✅ Industry: React Developer @ ORG_726232d3
[2026-01-31T18:53:38.880Z] [BOT] 💾 Added channel posting: React Developer @ ORG_726232d3 → category channel (1 total channels)
[2026-01-31T18:53:38.880Z] [BOT] 💾 BEFORE MERGE: 1345 jobs in memory (cached)
[2026-01-31T18:53:38.903Z] [BOT] ✅ Loaded V2 database: 1344 jobs
💾 DISK STATE: 1344 jobs on disk
[2026-01-31T18:53:38.904Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1345
[2026-01-31T18:53:38.906Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:38.908Z] [BOT] 💾 AFTER MERGE: 1345 jobs (merged disk + memory)
[2026-01-31T18:53:38.909Z] [BOT] ✅ No jobs to archive (all 1345 jobs within 7-day window)
[2026-01-31T18:53:38.982Z] [BOT] 💾 Saved posted_jobs.json: 1345 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:40.485Z] [BOT] 📍 [ROUTING] "Junior React Developer" @ ORG_726232d3
[2026-01-31T18:53:40.485Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T18:53:40.682Z] [BOT] ✅ Posted message: Junior React Developer @ ORG_726232d3 in #🤖・ai-jobs
  ✅ Industry: Junior React Developer @ ORG_726232d3
[2026-01-31T18:53:40.682Z] [BOT] 💾 Added channel posting: Junior React Developer @ ORG_726232d3 → category channel (1 total channels)
[2026-01-31T18:53:40.682Z] [BOT] 💾 BEFORE MERGE: 1346 jobs in memory (cached)
[2026-01-31T18:53:40.705Z] [BOT] ✅ Loaded V2 database: 1345 jobs
💾 DISK STATE: 1345 jobs on disk
[2026-01-31T18:53:40.705Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1346
[2026-01-31T18:53:40.708Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1346 jobs (merged disk + memory)
[2026-01-31T18:53:40.710Z] [BOT] ✅ No jobs to archive (all 1346 jobs within 7-day window)
[2026-01-31T18:53:40.793Z] [BOT] 💾 Saved posted_jobs.json: 1346 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:45.295Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T18:53:45.296Z] [BOT] 📍 [ROUTING] "Special Executions Group Analyst / Data Analytics Analyst" @ ORG_e97ba691 Technology Partners
[2026-01-31T18:53:45.296Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T18:53:45.509Z] [BOT] ✅ Posted message: Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners in #📊・JID_fb739488
[2026-01-31T18:53:45.509Z] [BOT] ✅ Industry: Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners
[2026-01-31T18:53:45.509Z] [BOT] 💾 Added channel posting: Special Executions Group Analyst / Data Analytics Analyst @ ORG_e97ba691 Technology Partners → category channel (1 total channels)
[2026-01-31T18:53:45.509Z] [BOT] 💾 BEFORE MERGE: 1347 jobs in memory (cached)
[2026-01-31T18:53:45.532Z] [BOT] ✅ Loaded V2 database: 1346 jobs
💾 DISK STATE: 1346 jobs on disk
[2026-01-31T18:53:45.533Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1347
[2026-01-31T18:53:45.535Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:45.537Z] [BOT] 💾 AFTER MERGE: 1347 jobs (merged disk + memory)
[2026-01-31T18:53:45.537Z] [BOT] ✅ No jobs to archive (all 1347 jobs within 7-day window)
[2026-01-31T18:53:45.635Z] [BOT] 💾 Saved posted_jobs.json: 1347 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:50.134Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T18:53:50.135Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a03de4c6..." not found, but found as SHA256 "6ccbd88c6ceac3c6"
⏭️  Skipping duplicate: JID_fe2e9e63 (posted within 7 days)
[2026-01-31T18:53:50.135Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a2bcadb..." not found, but found as SHA256 "6ca5ec04ce766cf9"
[2026-01-31T18:53:50.135Z] [BOT] ⏭️  Skipping duplicate: JID_c55e1fc7-engineer_r01158471 (posted within 7 days)
[2026-01-31T18:53:50.135Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_824e18d9..." not found, but found as SHA256 "a9d4b05648927bb4"
[2026-01-31T18:53:50.136Z] [BOT] ⏭️  Skipping duplicate: JID_f199842a (posted within 7 days)
[2026-01-31T18:53:50.136Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_415cf56e..." not found, but found as SHA256 "d1d21c0cf76bcc24"
[2026-01-31T18:53:50.136Z] [BOT] ⏭️  Skipping duplicate: JID_16958348 (posted within 7 days)
[2026-01-31T18:53:50.136Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4507ee82..." not found, but found as SHA256 "77cb45e377ddea54"
[2026-01-31T18:53:50.137Z] [BOT] ⏭️  Skipping duplicate: JID_6de9817d (posted within 7 days)
[2026-01-31T18:53:50.137Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_773adc08..." not found, but found as SHA256 "bf6442385d7f16d0"
[2026-01-31T18:53:50.137Z] [BOT] ⏭️  Skipping duplicate: JID_7a9ea97e (posted within 7 days)
[2026-01-31T18:53:50.137Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_72fd56cc-..." not found, but found as SHA256 "9980cce0634ec090"
⏭️  Skipping duplicate: JID_24b2ac9b (posted within 7 days)
[2026-01-31T18:53:50.138Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3b6de877-kbr_careers-jo..." not found, but found as SHA256 "720bdd13b82643bd"
⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_0d3a11ce-scientist_r2098927 (posted within 7 days)
[2026-01-31T18:53:50.138Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e873d38-external_care..." not found, but found as SHA256 "ac2dc1add3848c61"
[2026-01-31T18:53:50.138Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_4fdd0ddb-polygraph_rq207428 (posted within 7 days)
[2026-01-31T18:53:50.139Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6531b102..." not found, but found as SHA256 "a9bc8281253fffc0"
[2026-01-31T18:53:50.139Z] [BOT] ⏭️  Skipping duplicate: JID_a825cb18-park_r_00091560 (posted within 7 days)
[2026-01-31T18:53:50.247Z] [BOT] ✅ Loaded pending queue: 2943 total (1578 pending, 48 enriched, 1317 posted)
[2026-01-31T18:53:50.428Z] [BOT] ✅ Saved pending queue: 2943 total (1578 pending, 38 enriched, 1327 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T18:53:50.429Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T18:53:50.513Z] [BOT] 📂 Loaded 11408 existing routing entries
[2026-01-31T18:53:50.661Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T18:53:50.661Z] [BOT] New entries: 10
   Total entries: 11418
   Timestamp: 2026-01-31T18:53:50.615Z
[2026-01-31T18:53:50.662Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T18:53:50.662Z] [BOT] Total attempts: 27
   Successful: 11
   Failed: 0
   Skipped: 16
[2026-01-31T18:53:50.662Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
[2026-01-31T18:53:50.662Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🏠・JID_ead674af: 1 posts
[2026-01-31T18:53:50.662Z] [BOT] 4. #📊・JID_fb739488: 1 posts
[2026-01-31T18:53:50.662Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T18:53:50.662Z] [BOT] 💾 BEFORE MERGE: 1347 jobs in memory (cached)
[2026-01-31T18:53:50.689Z] [BOT] ✅ Loaded V2 database: 1347 jobs
💾 DISK STATE: 1347 jobs on disk
[2026-01-31T18:53:50.689Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1347
[2026-01-31T18:53:50.692Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:53:50.692Z] [BOT] 💾 AFTER MERGE: 1347 jobs (merged disk + memory)
[2026-01-31T18:53:50.693Z] [BOT] ✅ No jobs to archive (all 1347 jobs within 7-day window)
[2026-01-31T18:53:50.768Z] [BOT] 💾 Saved posted_jobs.json: 1347 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:53:50.769Z] [BOT] ✅ Database saved successfully
[2026-01-31T18:53:52.800Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2868) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*