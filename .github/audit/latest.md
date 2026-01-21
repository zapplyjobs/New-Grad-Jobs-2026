# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T12:17:11.002Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T12:16:23.348Z] ========================================
[2026-01-21T12:16:23.350Z] Discord Bot Execution Log
[2026-01-21T12:16:23.350Z] Environment: GitHub Actions
[2026-01-21T12:16:23.350Z] Node Version: v20.19.6
[2026-01-21T12:16:23.350Z] ========================================
[2026-01-21T12:16:23.350Z] Environment Variables Check:
[2026-01-21T12:16:23.350Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T12:16:23.350Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.350Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T12:16:23.350Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T12:16:23.350Z] 
Multi-Channel Configuration:
[2026-01-21T12:16:23.350Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.350Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.351Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.351Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.351Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.351Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.351Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.351Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.351Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T12:16:23.351Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T12:16:23.351Z] 
Data Files Check:
[2026-01-21T12:16:23.352Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-21T12:16:23.366Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1948905 bytes)
[2026-01-21T12:16:23.366Z] 
========================================
[2026-01-21T12:16:23.366Z] Starting Enhanced Discord Bot...
[2026-01-21T12:16:23.366Z] ========================================
[2026-01-21T12:16:23.821Z] [BOT] ✅ Loaded V2 database: 3399 jobs
[2026-01-21T12:16:24.693Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T12:16:24.694Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T12:16:24.694Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T12:16:24.843Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-21T12:16:24.845Z] [BOT] [BOT] 🔍 Sample enriched job: GTM Partner Enablement at anthropic
[2026-01-21T12:16:24.848Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T12:16:24.849Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T12:16:24.849Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T12:16:24.850Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-21T12:16:24.850Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Customer Success Manager @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-21T12:16:24.850Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T12:16:24.854Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T12:16:24.854Z] [BOT] 📍 [ROUTING] "GTM Partner Enablement" @ anthropic
[2026-01-21T12:16:24.854Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T12:16:24.858Z] [BOT ERROR] (node:2794) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T12:16:25.225Z] [BOT] ✅ Posted message: GTM Partner Enablement @ anthropic in #tech-jobs
[2026-01-21T12:16:25.226Z] [BOT] ✅ Industry: GTM Partner Enablement @ anthropic
[2026-01-21T12:16:25.226Z] [BOT] 💾 Added channel posting: GTM Partner Enablement @ anthropic → category channel (1 total channels)
[2026-01-21T12:16:25.227Z] [BOT] 💾 BEFORE ARCHIVING: 3400 jobs in database
[2026-01-21T12:16:25.229Z] [BOT] ✅ No jobs to archive (all 3400 jobs within 7-day window)
[2026-01-21T12:16:25.254Z] [BOT] 💾 Saved posted_jobs.json: 3400 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:26.755Z] [BOT] 💾 Marked as posted: GTM Partner Enablement @ anthropic (instance #1)
[2026-01-21T12:16:26.756Z] [BOT] 💾 BEFORE ARCHIVING: 3401 jobs in database
[2026-01-21T12:16:26.758Z] [BOT] ✅ No jobs to archive (all 3401 jobs within 7-day window)
[2026-01-21T12:16:26.778Z] [BOT] 💾 Saved posted_jobs.json: 3401 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:26.779Z] [BOT] 📍 [ROUTING] "Quantum Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T12:16:27.231Z] [BOT] ✅ Posted message: Quantum Software Engineer @ ORG_c7bac469 in #tech-jobs
[2026-01-21T12:16:27.231Z] [BOT] ✅ Industry: Quantum Software Engineer @ ORG_c7bac469
[2026-01-21T12:16:27.232Z] [BOT] 💾 Added channel posting: Quantum Software Engineer @ ORG_c7bac469 → category channel (1 total channels)
[2026-01-21T12:16:27.232Z] [BOT] 💾 BEFORE ARCHIVING: 3402 jobs in database
[2026-01-21T12:16:27.234Z] [BOT] ✅ No jobs to archive (all 3402 jobs within 7-day window)
[2026-01-21T12:16:27.256Z] [BOT] 💾 Saved posted_jobs.json: 3402 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:28.756Z] [BOT] 💾 Marked as posted: Quantum Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-21T12:16:28.757Z] [BOT] 💾 BEFORE ARCHIVING: 3403 jobs in database
[2026-01-21T12:16:28.759Z] [BOT] ✅ No jobs to archive (all 3403 jobs within 7-day window)
[2026-01-21T12:16:28.781Z] [BOT] 💾 Saved posted_jobs.json: 3403 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:28.782Z] [BOT] 📍 [ROUTING] "Customer Solution Architect Team Lead (AMER)" @ supabase
   Category: TECH (default)
[2026-01-21T12:16:28.782Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T12:16:29.186Z] [BOT] ✅ Posted message: Customer Solution Architect Team Lead (AMER) @ supabase in #tech-jobs
[2026-01-21T12:16:29.186Z] [BOT] ✅ Industry: Customer Solution Architect Team Lead (AMER) @ supabase
[2026-01-21T12:16:29.187Z] [BOT] 💾 Added channel posting: Customer Solution Architect Team Lead (AMER) @ supabase → category channel (1 total channels)
[2026-01-21T12:16:29.187Z] [BOT] 💾 BEFORE ARCHIVING: 3404 jobs in database
[2026-01-21T12:16:29.189Z] [BOT] ✅ No jobs to archive (all 3404 jobs within 7-day window)
[2026-01-21T12:16:29.210Z] [BOT] 💾 Saved posted_jobs.json: 3404 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:30.713Z] [BOT] 💾 Marked as posted: Customer Solution Architect Team Lead (AMER) @ supabase (instance #1)
[2026-01-21T12:16:30.713Z] [BOT] 💾 BEFORE ARCHIVING: 3405 jobs in database
[2026-01-21T12:16:30.715Z] [BOT] ✅ No jobs to archive (all 3405 jobs within 7-day window)
[2026-01-21T12:16:30.735Z] [BOT] 💾 Saved posted_jobs.json: 3405 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:30.735Z] [BOT] 📍 [ROUTING] "Junior Full Stack Developer" @ ORG_2b03a7ca
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T12:16:31.001Z] [BOT] ✅ Posted message: Junior Full Stack Developer @ ORG_2b03a7ca in #tech-jobs
[2026-01-21T12:16:31.001Z] [BOT] ✅ Industry: Junior Full Stack Developer @ ORG_2b03a7ca
[2026-01-21T12:16:31.002Z] [BOT] 💾 Added channel posting: Junior Full Stack Developer @ ORG_2b03a7ca → category channel (1 total channels)
[2026-01-21T12:16:31.002Z] [BOT] 💾 BEFORE ARCHIVING: 3406 jobs in database
[2026-01-21T12:16:31.004Z] [BOT] ✅ No jobs to archive (all 3406 jobs within 7-day window)
[2026-01-21T12:16:31.024Z] [BOT] 💾 Saved posted_jobs.json: 3406 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:34.077Z] [BOT] ✅ Posted message: Junior Full Stack Developer @ ORG_2b03a7ca in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T12:16:34.078Z] [BOT] 💾 Added channel posting: Junior Full Stack Developer @ ORG_2b03a7ca → location channel (2 total channels)
[2026-01-21T12:16:34.078Z] [BOT] 💾 BEFORE ARCHIVING: 3406 jobs in database
[2026-01-21T12:16:34.080Z] [BOT] ✅ No jobs to archive (all 3406 jobs within 7-day window)
[2026-01-21T12:16:34.103Z] [BOT] 💾 Saved posted_jobs.json: 3406 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:35.604Z] [BOT] 💾 Marked as posted: Junior Full Stack Developer @ ORG_2b03a7ca (instance #1)
[2026-01-21T12:16:35.604Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-21T12:16:35.606Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-21T12:16:35.627Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:35.628Z] [BOT] 📍 [ROUTING] "Full-Stack Developer, Junior" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2026-01-21T12:16:35.628Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T12:16:35.919Z] [BOT] ✅ Posted message: Full-Stack Developer, Junior @ ORG_39417f32 Allen in #tech-jobs
[2026-01-21T12:16:35.919Z] [BOT] ✅ Industry: Full-Stack Developer, Junior @ ORG_39417f32 Allen
[2026-01-21T12:16:35.920Z] [BOT] 💾 Added channel posting: Full-Stack Developer, Junior @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-21T12:16:35.920Z] [BOT] 💾 BEFORE ARCHIVING: 3408 jobs in database
[2026-01-21T12:16:35.922Z] [BOT] ✅ No jobs to archive (all 3408 jobs within 7-day window)
[2026-01-21T12:16:35.944Z] [BOT] 💾 Saved posted_jobs.json: 3408 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:37.709Z] [BOT] ✅ Posted message: Full-Stack Developer, Junior @ ORG_39417f32 Allen in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T12:16:37.710Z] [BOT] 💾 Added channel posting: Full-Stack Developer, Junior @ ORG_39417f32 Allen → location channel (2 total channels)
[2026-01-21T12:16:37.710Z] [BOT] 💾 BEFORE ARCHIVING: 3408 jobs in database
[2026-01-21T12:16:37.712Z] [BOT] ✅ No jobs to archive (all 3408 jobs within 7-day window)
[2026-01-21T12:16:37.732Z] [BOT] 💾 Saved posted_jobs.json: 3408 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:39.233Z] [BOT] 💾 Marked as posted: Full-Stack Developer, Junior @ ORG_39417f32 Allen (instance #1)
[2026-01-21T12:16:39.233Z] [BOT] 💾 BEFORE ARCHIVING: 3409 jobs in database
[2026-01-21T12:16:39.236Z] [BOT] ✅ No jobs to archive (all 3409 jobs within 7-day window)
[2026-01-21T12:16:39.256Z] [BOT] 💾 Saved posted_jobs.json: 3409 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:39.257Z] [BOT] 📍 [ROUTING] "Korean Bilingual Software Test Engineer (Entry Level)" @ ORG_d5c1b124 Solutions
   Category: TECH (matched: "software")
[2026-01-21T12:16:39.257Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T12:16:41.244Z] [BOT] ✅ Posted message: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions in #tech-jobs
  ✅ Industry: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions
[2026-01-21T12:16:41.246Z] [BOT] 💾 Added channel posting: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions → category channel (1 total channels)
[2026-01-21T12:16:41.246Z] [BOT] 💾 BEFORE ARCHIVING: 3410 jobs in database
[2026-01-21T12:16:41.248Z] [BOT] ✅ No jobs to archive (all 3410 jobs within 7-day window)
[2026-01-21T12:16:41.269Z] [BOT] 💾 Saved posted_jobs.json: 3410 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:42.770Z] [BOT] 💾 Marked as posted: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions (instance #1)
[2026-01-21T12:16:42.771Z] [BOT] 💾 BEFORE ARCHIVING: 3411 jobs in database
[2026-01-21T12:16:42.773Z] [BOT] ✅ No jobs to archive (all 3411 jobs within 7-day window)
[2026-01-21T12:16:42.794Z] [BOT] 💾 Saved posted_jobs.json: 3411 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:45.795Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T12:16:45.795Z] [BOT] 📍 [ROUTING] "Research Scientist - Generalist Embodied Agent Research" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T12:16:46.141Z] [BOT] ✅ Posted message: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456
[2026-01-21T12:16:46.141Z] [BOT] 💾 Added channel posting: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T12:16:46.142Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-21T12:16:46.143Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-21T12:16:46.164Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:47.666Z] [BOT] 💾 Marked as posted: Research Scientist - Generalist Embodied Agent Research @ ORG_0890f456 (instance #1)
[2026-01-21T12:16:47.666Z] [BOT] 💾 BEFORE ARCHIVING: 3413 jobs in database
[2026-01-21T12:16:47.668Z] [BOT] ✅ No jobs to archive (all 3413 jobs within 7-day window)
[2026-01-21T12:16:47.688Z] [BOT] 💾 Saved posted_jobs.json: 3413 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:47.688Z] [BOT] 📍 [ROUTING] "GM, AI Foundation" @ spotify
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T12:16:48.003Z] [BOT] ✅ Posted message: GM, AI Foundation @ spotify in #ai-jobs
[2026-01-21T12:16:48.003Z] [BOT] ✅ Industry: GM, AI Foundation @ spotify
[2026-01-21T12:16:48.004Z] [BOT] 💾 Added channel posting: GM, AI Foundation @ spotify → category channel (1 total channels)
[2026-01-21T12:16:48.004Z] [BOT] 💾 BEFORE ARCHIVING: 3414 jobs in database
[2026-01-21T12:16:48.006Z] [BOT] ✅ No jobs to archive (all 3414 jobs within 7-day window)
[2026-01-21T12:16:48.026Z] [BOT] 💾 Saved posted_jobs.json: 3414 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:49.765Z] [BOT] ✅ Posted message: GM, AI Foundation @ spotify in #JID_98d4f0de
[2026-01-21T12:16:49.765Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T12:16:49.765Z] [BOT] 💾 Added channel posting: GM, AI Foundation @ spotify → location channel (2 total channels)
[2026-01-21T12:16:49.765Z] [BOT] 💾 BEFORE ARCHIVING: 3414 jobs in database
[2026-01-21T12:16:49.767Z] [BOT] ✅ No jobs to archive (all 3414 jobs within 7-day window)
[2026-01-21T12:16:49.788Z] [BOT] 💾 Saved posted_jobs.json: 3414 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:51.290Z] [BOT] 💾 Marked as posted: GM, AI Foundation @ spotify (instance #1)
[2026-01-21T12:16:51.290Z] [BOT] 💾 BEFORE ARCHIVING: 3415 jobs in database
[2026-01-21T12:16:51.292Z] [BOT] ✅ No jobs to archive (all 3415 jobs within 7-day window)
[2026-01-21T12:16:51.312Z] [BOT] 💾 Saved posted_jobs.json: 3415 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:54.313Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T12:16:54.313Z] [BOT] 📍 [ROUTING] "Graduate Data Scientist" @ ORG_742553d6 Entertainment
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T12:16:54.552Z] [BOT] ✅ Posted message: Graduate Data Scientist @ ORG_742553d6 Entertainment in #JID_fb739488
[2026-01-21T12:16:54.552Z] [BOT] ✅ Industry: Graduate Data Scientist @ ORG_742553d6 Entertainment
[2026-01-21T12:16:54.553Z] [BOT] 💾 Added channel posting: Graduate Data Scientist @ ORG_742553d6 Entertainment → category channel (1 total channels)
[2026-01-21T12:16:54.553Z] [BOT] 💾 BEFORE ARCHIVING: 3416 jobs in database
[2026-01-21T12:16:54.555Z] [BOT] ✅ No jobs to archive (all 3416 jobs within 7-day window)
[2026-01-21T12:16:54.576Z] [BOT] 💾 Saved posted_jobs.json: 3416 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:56.259Z] [BOT] ✅ Posted message: Graduate Data Scientist @ ORG_742553d6 Entertainment in #JID_ead674af
[2026-01-21T12:16:56.259Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T12:16:56.259Z] [BOT] 💾 Added channel posting: Graduate Data Scientist @ ORG_742553d6 Entertainment → location channel (2 total channels)
[2026-01-21T12:16:56.260Z] [BOT] 💾 BEFORE ARCHIVING: 3416 jobs in database
[2026-01-21T12:16:56.262Z] [BOT] ✅ No jobs to archive (all 3416 jobs within 7-day window)
[2026-01-21T12:16:56.284Z] [BOT] 💾 Saved posted_jobs.json: 3416 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:16:57.786Z] [BOT] 💾 Marked as posted: Graduate Data Scientist @ ORG_742553d6 Entertainment (instance #1)
[2026-01-21T12:16:57.787Z] [BOT] 💾 BEFORE ARCHIVING: 3417 jobs in database
[2026-01-21T12:16:57.789Z] [BOT] ✅ No jobs to archive (all 3417 jobs within 7-day window)
[2026-01-21T12:16:57.810Z] [BOT] 💾 Saved posted_jobs.json: 3417 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:17:00.811Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T12:17:00.811Z] [BOT] 📍 [ROUTING] "Enterprise Customer Success Manager" @ brex
[2026-01-21T12:17:00.811Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T12:17:01.054Z] [BOT] ✅ Posted message: Enterprise Customer Success Manager @ brex in #finance-jobs
  ✅ Industry: Enterprise Customer Success Manager @ brex
[2026-01-21T12:17:01.055Z] [BOT] 💾 Added channel posting: Enterprise Customer Success Manager @ brex → category channel (1 total channels)
[2026-01-21T12:17:01.055Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-21T12:17:01.057Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-21T12:17:01.079Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:17:02.807Z] [BOT] ✅ Posted message: Enterprise Customer Success Manager @ brex in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T12:17:02.808Z] [BOT] 💾 Added channel posting: Enterprise Customer Success Manager @ brex → location channel (2 total channels)
[2026-01-21T12:17:02.808Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-21T12:17:02.810Z] [BOT] ✅ No jobs to archive (all 3418 jobs within 7-day window)
[2026-01-21T12:17:02.832Z] [BOT] 💾 Saved posted_jobs.json: 3418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:17:04.333Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-21T12:17:04.333Z] [BOT] 💾 BEFORE ARCHIVING: 3419 jobs in database
[2026-01-21T12:17:04.335Z] [BOT] ✅ No jobs to archive (all 3419 jobs within 7-day window)
[2026-01-21T12:17:04.357Z] [BOT] 💾 Saved posted_jobs.json: 3419 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:17:04.357Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-21T12:17:04.357Z] [BOT] 💾 BEFORE ARCHIVING: 3420 jobs in database
[2026-01-21T12:17:04.359Z] [BOT] ✅ No jobs to archive (all 3420 jobs within 7-day window)
[2026-01-21T12:17:04.381Z] [BOT] 💾 Saved posted_jobs.json: 3420 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:17:04.381Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-21T12:17:04.381Z] [BOT] 💾 BEFORE ARCHIVING: 3421 jobs in database
[2026-01-21T12:17:04.383Z] [BOT] ✅ No jobs to archive (all 3421 jobs within 7-day window)
[2026-01-21T12:17:04.403Z] [BOT] 💾 Saved posted_jobs.json: 3421 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:17:04.403Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager @ brex (instance #1)
[2026-01-21T12:17:04.403Z] [BOT] 💾 BEFORE ARCHIVING: 3422 jobs in database
[2026-01-21T12:17:04.405Z] [BOT] ✅ No jobs to archive (all 3422 jobs within 7-day window)
[2026-01-21T12:17:04.425Z] [BOT] 💾 Saved posted_jobs.json: 3422 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T12:17:07.425Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T12:17:07.426Z] [BOT] ⏭️  Skipping duplicate: JID_4fd6c10c (posted within 7 days)
[2026-01-21T12:17:07.426Z] [BOT] ⏭️  Skipping duplicate: JID_1fa6454f-2026_jr2009294 (posted within 7 days)
[2026-01-21T12:17:07.427Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-73987 (posted within 7 days)
[2026-01-21T12:17:07.427Z] [BOT] ⏭️  Skipping duplicate: JID_3cc30985 (posted within 7 days)
[2026-01-21T12:17:07.427Z] [BOT] ⏭️  Skipping duplicate: JID_b8d16eff (posted within 7 days)
[2026-01-21T12:17:07.427Z] [BOT] ⏭️  Skipping duplicate: JID_a9cdfa5a (posted within 7 days)
[2026-01-21T12:17:07.427Z] [BOT] ⏭️  Skipping duplicate: JID_4d632599 (posted within 7 days)
[2026-01-21T12:17:07.428Z] [BOT] ⏭️  Skipping duplicate: JID_66641ac6 (posted within 7 days)
[2026-01-21T12:17:07.428Z] [BOT] ⏭️  Skipping duplicate: JID_3a244b89-bah_jobs-JID_eae44490-junior_r0230620 (posted within 7 days)
[2026-01-21T12:17:07.428Z] [BOT] ⏭️  Skipping duplicate: JID_9fba6108-ao7167525_jr101482 (posted within 7 days)
[2026-01-21T12:17:07.570Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-21T12:17:07.743Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T12:17:07.825Z] [BOT] 📂 Loaded 5875 existing routing entries
[2026-01-21T12:17:07.898Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5885
   Timestamp: 2026-01-21T12:17:07.877Z
[2026-01-21T12:17:07.898Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 15
[2026-01-21T12:17:07.898Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T12:17:07.899Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 6
   Top channels:
[2026-01-21T12:17:07.899Z] [BOT] 1. #tech-jobs: 6 posts
     2. #JID_ead674af: 4 posts
     3. #ai-jobs: 2 posts
     4. #JID_98d4f0de: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T12:17:07.899Z] [BOT] [STATS] Channel stats saved
[2026-01-21T12:17:09.917Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2794) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*