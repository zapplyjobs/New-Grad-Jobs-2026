# Discord Bot Execution Audit
**Timestamp:** 2026-01-17T08:08:21.331Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-17T08:07:34.888Z] ========================================
[2026-01-17T08:07:34.890Z] Discord Bot Execution Log
[2026-01-17T08:07:34.890Z] Environment: GitHub Actions
[2026-01-17T08:07:34.890Z] Node Version: v20.19.6
[2026-01-17T08:07:34.890Z] ========================================
[2026-01-17T08:07:34.890Z] Environment Variables Check:
[2026-01-17T08:07:34.890Z] DISCORD_TOKEN: ✅ Set
[2026-01-17T08:07:34.890Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.890Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-17T08:07:34.890Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-17T08:07:34.890Z] 
Multi-Channel Configuration:
[2026-01-17T08:07:34.890Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.891Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.891Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.891Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.891Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.891Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.891Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.891Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.891Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-17T08:07:34.891Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-17T08:07:34.891Z] 
Data Files Check:
[2026-01-17T08:07:34.892Z] .github/data/new_jobs.json: ✅ Exists (10 items, 49062 bytes)
[2026-01-17T08:07:34.900Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1271692 bytes)
[2026-01-17T08:07:34.900Z] 
========================================
[2026-01-17T08:07:34.901Z] Starting Enhanced Discord Bot...
[2026-01-17T08:07:34.901Z] ========================================
[2026-01-17T08:07:35.410Z] [BOT] ✅ Loaded V2 database: 2350 jobs
[2026-01-17T08:07:35.976Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-17T08:07:35.977Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-17T08:07:35.977Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-17T08:07:36.094Z] [BOT] ✅ Loaded pending queue: 2887 total (2867 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Forward-Deployed Test Engineer at Ranger
[2026-01-17T08:07:36.097Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-17T08:07:36.097Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-17T08:07:36.097Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-17T08:07:36.098Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-01-17T08:07:36.098Z] [BOT] (8 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-17T08:07:36.098Z] [BOT] - Software Engineer – New Grad - Infrastructure @ Palantir: new york, seattle, washington, palo alto, denver
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-17T08:07:36.102Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-17T08:07:36.103Z] [BOT] 📍 [ROUTING] "Forward-Deployed Test Engineer" @ ORG_e6cd637f
[2026-01-17T08:07:36.103Z] [BOT] Category: TECH (matched: "QA engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:07:36.120Z] [BOT ERROR] (node:3061) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-17T08:07:36.373Z] [BOT] ✅ Created forum post: 🏢 Forward-Deployed Test Engineer @ ORG_e6cd637f in #💻・tech-jobs
  ✅ Industry: Forward-Deployed Test Engineer @ ORG_e6cd637f
[2026-01-17T08:07:38.100Z] [BOT] ✅ Created forum post: 🏢 Forward-Deployed Test Engineer @ ORG_e6cd637f in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-17T08:07:39.601Z] [BOT] 💾 Marked as posted: Forward-Deployed Test Engineer @ ORG_e6cd637f (instance #1)
[2026-01-17T08:07:39.601Z] [BOT] 💾 BEFORE ARCHIVING: 2351 jobs in database
[2026-01-17T08:07:39.603Z] [BOT] ✅ No jobs to archive (all 2351 jobs within 7-day window)
[2026-01-17T08:07:39.625Z] [BOT] 💾 Saved posted_jobs.json: 2351 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:07:39.626Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_313e7c50
[2026-01-17T08:07:39.626Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:07:39.848Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_313e7c50 in #💻・tech-jobs
[2026-01-17T08:07:39.848Z] [BOT] ✅ Industry: Software Developer @ ORG_313e7c50
[2026-01-17T08:07:41.493Z] [BOT] ✅ Created forum post: 🏢 Software Developer @ ORG_313e7c50 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-17T08:07:42.994Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_313e7c50 (instance #1)
[2026-01-17T08:07:42.994Z] [BOT] 💾 BEFORE ARCHIVING: 2352 jobs in database
[2026-01-17T08:07:42.996Z] [BOT] ✅ No jobs to archive (all 2352 jobs within 7-day window)
[2026-01-17T08:07:43.011Z] [BOT] 💾 Saved posted_jobs.json: 2352 active jobs
[2026-01-17T08:07:43.011Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer - Fullstack" @ ORG_c7bac469
[2026-01-17T08:07:43.011Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:07:43.189Z] [BOT] ✅ Created forum post: 🟦 Software Engineer - Fullstack @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Fullstack @ ORG_c7bac469
[2026-01-17T08:07:44.877Z] [BOT] ✅ Created forum post: 🟦 Software Engineer - Fullstack @ ORG_c7bac469 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2026-01-17T08:07:46.378Z] [BOT] 💾 Marked as posted: Software Engineer - Fullstack @ ORG_c7bac469 (instance #1)
[2026-01-17T08:07:46.378Z] [BOT] 💾 BEFORE ARCHIVING: 2353 jobs in database
[2026-01-17T08:07:46.380Z] [BOT] ✅ No jobs to archive (all 2353 jobs within 7-day window)
[2026-01-17T08:07:46.396Z] [BOT] 💾 Saved posted_jobs.json: 2353 active jobs
[2026-01-17T08:07:46.396Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:07:46.397Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_f4398599
[2026-01-17T08:07:46.397Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:07:46.525Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_f4398599 in #💻・tech-jobs
[2026-01-17T08:07:46.525Z] [BOT] ✅ Industry: Software Engineer @ ORG_f4398599
[2026-01-17T08:07:48.299Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_f4398599 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-17T08:07:49.799Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_f4398599 (instance #1)
[2026-01-17T08:07:49.800Z] [BOT] 💾 BEFORE ARCHIVING: 2354 jobs in database
[2026-01-17T08:07:49.802Z] [BOT] ✅ No jobs to archive (all 2354 jobs within 7-day window)
[2026-01-17T08:07:49.818Z] [BOT] 💾 Saved posted_jobs.json: 2354 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:07:49.819Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_a3b50c47 Street
[2026-01-17T08:07:49.819Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:07:50.019Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_a3b50c47 Street in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_a3b50c47 Street
[2026-01-17T08:07:51.691Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_a3b50c47 Street in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-17T08:07:53.191Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_a3b50c47 Street (instance #1)
[2026-01-17T08:07:53.192Z] [BOT] 💾 BEFORE ARCHIVING: 2355 jobs in database
[2026-01-17T08:07:53.193Z] [BOT] ✅ No jobs to archive (all 2355 jobs within 7-day window)
[2026-01-17T08:07:53.207Z] [BOT] 💾 Saved posted_jobs.json: 2355 active jobs
[2026-01-17T08:07:53.207Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:07:53.208Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_86554b90
[2026-01-17T08:07:53.208Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:07:53.351Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_86554b90 in #💻・tech-jobs
[2026-01-17T08:07:53.351Z] [BOT] ✅ Industry: Application Engineer @ ORG_86554b90
[2026-01-17T08:07:55.372Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_86554b90 in #🗽・new-york
[2026-01-17T08:07:55.372Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T08:07:56.874Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_86554b90 (instance #1)
[2026-01-17T08:07:56.874Z] [BOT] 💾 BEFORE ARCHIVING: 2356 jobs in database
[2026-01-17T08:07:56.876Z] [BOT] ✅ No jobs to archive (all 2356 jobs within 7-day window)
[2026-01-17T08:07:56.891Z] [BOT] 💾 Saved posted_jobs.json: 2356 active jobs
[2026-01-17T08:07:56.891Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:07:56.891Z] [BOT] 📍 [ROUTING] "Forward Deployed Software Engineer New Grad" @ ORG_c7ce2489 Health
[2026-01-17T08:07:56.891Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:07:57.046Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health in #💻・tech-jobs
[2026-01-17T08:07:57.046Z] [BOT] ✅ Industry: Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health
[2026-01-17T08:07:58.770Z] [BOT] ✅ Created forum post: 🏢 Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health in #🌉・san-francisco
[2026-01-17T08:07:58.770Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-17T08:08:00.270Z] [BOT] 💾 Marked as posted: Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health (instance #1)
[2026-01-17T08:08:00.270Z] [BOT] 💾 BEFORE ARCHIVING: 2357 jobs in database
[2026-01-17T08:08:00.272Z] [BOT] ✅ No jobs to archive (all 2357 jobs within 7-day window)
[2026-01-17T08:08:00.287Z] [BOT] 💾 Saved posted_jobs.json: 2357 active jobs
[2026-01-17T08:08:00.287Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:00.288Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Infrastructure" @ ORG_f56b7436
[2026-01-17T08:08:00.288Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-17T08:08:00.659Z] [BOT] ✅ Created forum post: 👁️ Software Engineer – New Grad - Infrastructure @ ORG_f56b7436 in #💻・tech-jobs
[2026-01-17T08:08:00.659Z] [BOT] ✅ Industry: Software Engineer – New Grad - Infrastructure @ ORG_f56b7436
[2026-01-17T08:08:02.407Z] [BOT] ✅ Created forum post: 👁️ Software Engineer – New Grad - Infrastructure @ ORG_f56b7436 in #🗽・new-york
[2026-01-17T08:08:02.407Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-17T08:08:03.907Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Infrastructure @ ORG_f56b7436 (instance #1)
[2026-01-17T08:08:03.907Z] [BOT] 💾 BEFORE ARCHIVING: 2358 jobs in database
[2026-01-17T08:08:03.909Z] [BOT] ✅ No jobs to archive (all 2358 jobs within 7-day window)
[2026-01-17T08:08:03.923Z] [BOT] 💾 Saved posted_jobs.json: 2358 active jobs
[2026-01-17T08:08:03.923Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:03.923Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 (instance #1)
[2026-01-17T08:08:03.923Z] [BOT] 💾 BEFORE ARCHIVING: 2359 jobs in database
[2026-01-17T08:08:03.925Z] [BOT] ✅ No jobs to archive (all 2359 jobs within 7-day window)
[2026-01-17T08:08:03.940Z] [BOT] 💾 Saved posted_jobs.json: 2359 active jobs
[2026-01-17T08:08:03.940Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:03.940Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 (instance #1)
[2026-01-17T08:08:03.940Z] [BOT] 💾 BEFORE ARCHIVING: 2360 jobs in database
[2026-01-17T08:08:03.941Z] [BOT] ✅ No jobs to archive (all 2360 jobs within 7-day window)
[2026-01-17T08:08:03.954Z] [BOT] 💾 Saved posted_jobs.json: 2360 active jobs
[2026-01-17T08:08:03.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:03.954Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Defense @ ORG_f56b7436 (instance #1)
💾 BEFORE ARCHIVING: 2361 jobs in database
[2026-01-17T08:08:03.956Z] [BOT] ✅ No jobs to archive (all 2361 jobs within 7-day window)
[2026-01-17T08:08:03.969Z] [BOT] 💾 Saved posted_jobs.json: 2361 active jobs
[2026-01-17T08:08:03.969Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:03.969Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Defense @ ORG_f56b7436 (instance #1)
💾 BEFORE ARCHIVING: 2362 jobs in database
[2026-01-17T08:08:03.970Z] [BOT] ✅ No jobs to archive (all 2362 jobs within 7-day window)
[2026-01-17T08:08:03.985Z] [BOT] 💾 Saved posted_jobs.json: 2362 active jobs
[2026-01-17T08:08:03.986Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:03.986Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad - Defense @ ORG_f56b7436 (instance #1)
💾 BEFORE ARCHIVING: 2363 jobs in database
[2026-01-17T08:08:03.987Z] [BOT] ✅ No jobs to archive (all 2363 jobs within 7-day window)
[2026-01-17T08:08:03.999Z] [BOT] 💾 Saved posted_jobs.json: 2363 active jobs
[2026-01-17T08:08:03.999Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:04.000Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_f56b7436 (instance #1)
[2026-01-17T08:08:04.000Z] [BOT] 💾 BEFORE ARCHIVING: 2364 jobs in database
[2026-01-17T08:08:04.001Z] [BOT] ✅ No jobs to archive (all 2364 jobs within 7-day window)
[2026-01-17T08:08:04.015Z] [BOT] 💾 Saved posted_jobs.json: 2364 active jobs
[2026-01-17T08:08:04.015Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:04.015Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_f56b7436 (instance #1)
💾 BEFORE ARCHIVING: 2365 jobs in database
[2026-01-17T08:08:04.016Z] [BOT] ✅ No jobs to archive (all 2365 jobs within 7-day window)
[2026-01-17T08:08:04.030Z] [BOT] 💾 Saved posted_jobs.json: 2365 active jobs
[2026-01-17T08:08:04.030Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:04.030Z] [BOT] 💾 Marked as posted: Software Engineer – New Grad @ ORG_f56b7436 (instance #1)
💾 BEFORE ARCHIVING: 2366 jobs in database
[2026-01-17T08:08:04.032Z] [BOT] ✅ No jobs to archive (all 2366 jobs within 7-day window)
[2026-01-17T08:08:04.044Z] [BOT] 💾 Saved posted_jobs.json: 2366 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:07.045Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-17T08:08:07.046Z] [BOT] 📍 [ROUTING] "Partner Solutions Architect" @ supabase
[2026-01-17T08:08:07.046Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-17T08:08:07.291Z] [BOT] ✅ Created forum post: 🏢 Partner Solutions Architect @ supabase in #💲・sales-jobs
[2026-01-17T08:08:07.292Z] [BOT] ✅ Industry: Partner Solutions Architect @ supabase
[2026-01-17T08:08:08.793Z] [BOT] 💾 Marked as posted: Partner Solutions Architect @ supabase (instance #1)
[2026-01-17T08:08:08.793Z] [BOT] 💾 BEFORE ARCHIVING: 2367 jobs in database
[2026-01-17T08:08:08.795Z] [BOT] ✅ No jobs to archive (all 2367 jobs within 7-day window)
[2026-01-17T08:08:08.809Z] [BOT] 💾 Saved posted_jobs.json: 2367 active jobs
[2026-01-17T08:08:08.809Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:11.810Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-17T08:08:11.810Z] [BOT] 📍 [ROUTING] "Assistant Professor of Computing and Information Science - Machine Learning" @ ORG_9d38443e of Maine System
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-17T08:08:11.993Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine in #🤖・ai-jobs
[2026-01-17T08:08:11.993Z] [BOT] ✅ Industry: Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine System
[2026-01-17T08:08:13.745Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine in #💻・remote-usa
[2026-01-17T08:08:13.745Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-17T08:08:15.246Z] [BOT] 💾 Marked as posted: Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine System (instance #1)
[2026-01-17T08:08:15.246Z] [BOT] 💾 BEFORE ARCHIVING: 2368 jobs in database
[2026-01-17T08:08:15.247Z] [BOT] ✅ No jobs to archive (all 2368 jobs within 7-day window)
[2026-01-17T08:08:15.261Z] [BOT] 💾 Saved posted_jobs.json: 2368 active jobs
[2026-01-17T08:08:15.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-17T08:08:18.262Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-17T08:08:18.263Z] [BOT] ⏭️  Skipping duplicate: JID_465f1a25 (posted within 7 days)
[2026-01-17T08:08:18.263Z] [BOT] ⏭️  Skipping duplicate: JID_6bdc77c1 (posted within 7 days)
[2026-01-17T08:08:18.263Z] [BOT] ⏭️  Skipping duplicate: JID_ec15ff8a (posted within 7 days)
[2026-01-17T08:08:18.263Z] [BOT] ⏭️  Skipping duplicate: JID_0d126207 (posted within 7 days)
[2026-01-17T08:08:18.263Z] [BOT] ⏭️  Skipping duplicate: JID_7beef9bb-cx_1-job-725 (posted within 7 days)
[2026-01-17T08:08:18.263Z] [BOT] ⏭️  Skipping duplicate: JID_90a61d75-cx_1-job-28752 (posted within 7 days)
[2026-01-17T08:08:18.263Z] [BOT] ⏭️  Skipping duplicate: JID_d4c3ca28-i_r-774355-1 (posted within 7 days)
[2026-01-17T08:08:18.264Z] [BOT] ⏭️  Skipping duplicate: JID_cb308957-engineer_jr_1042522 (posted within 7 days)
⏭️  Skipping duplicate: JID_50485840 (posted within 7 days)
[2026-01-17T08:08:18.264Z] [BOT] ⏭️  Skipping duplicate: JID_8241ed95 (posted within 7 days)
[2026-01-17T08:08:18.383Z] [BOT] ✅ Loaded pending queue: 2887 total (2867 pending, 20 enriched, 0 posted)
[2026-01-17T08:08:18.558Z] [BOT] ✅ Saved pending queue: 2887 total (2867 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-17T08:08:18.558Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-17T08:08:18.616Z] [BOT] 📂 Loaded 4565 existing routing entries
[2026-01-17T08:08:18.683Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 4575
   Timestamp: 2026-01-17T08:08:18.664Z
[2026-01-17T08:08:18.684Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a4acdb16.jsonl
   Total attempts: 19
[2026-01-17T08:08:18.684Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-17T08:08:18.684Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 9
   Top channels:
[2026-01-17T08:08:18.684Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #🗽・new-york: 3 posts
     3. #🌉・san-francisco: 2 posts
     4. #🌆・chicago: 1 posts
     5. #🖥️・redmond: 1 posts
[2026-01-17T08:08:18.684Z] [BOT] [STATS] Channel stats saved
[2026-01-17T08:08:20.706Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3061) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*