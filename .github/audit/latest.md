# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T17:59:35.921Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T17:59:04.104Z] ========================================
[2026-01-31T17:59:04.106Z] Discord Bot Execution Log
[2026-01-31T17:59:04.106Z] Environment: GitHub Actions
[2026-01-31T17:59:04.107Z] Node Version: v20.20.0
[2026-01-31T17:59:04.107Z] ========================================
[2026-01-31T17:59:04.107Z] Environment Variables Check:
[2026-01-31T17:59:04.107Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T17:59:04.107Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.107Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T17:59:04.107Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T17:59:04.107Z] 
Multi-Channel Configuration:
[2026-01-31T17:59:04.107Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.107Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.108Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.108Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.108Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.108Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.108Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.108Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.108Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T17:59:04.108Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T17:59:04.108Z] 
Data Files Check:
[2026-01-31T17:59:04.109Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T17:59:04.147Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7976017 bytes)
[2026-01-31T17:59:04.147Z] 
========================================
[2026-01-31T17:59:04.147Z] Starting Enhanced Discord Bot...
[2026-01-31T17:59:04.147Z] ========================================
[2026-01-31T17:59:04.720Z] [BOT] ✅ Loaded V2 database: 1307 jobs
[2026-01-31T17:59:05.156Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T17:59:05.156Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T17:59:05.157Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T17:59:05.276Z] [BOT] ✅ Loaded pending queue: 2945 total (1608 pending, 50 enriched, 1287 posted)
[2026-01-31T17:59:05.276Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:59:05.277Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T17:59:05.277Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T17:59:05.278Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:59:05.278Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T17:59:05.278Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T17:59:05.279Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T17:59:05.279Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T17:59:05.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T17:59:05.280Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T17:59:05.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-31T17:59:05.280Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T17:59:05.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-31T17:59:05.280Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T17:59:05.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T17:59:05.281Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T17:59:05.281Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T17:59:05.281Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T17:59:05.281Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T17:59:05.281Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T17:59:05.281Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T17:59:05.282Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T17:59:05.282Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T17:59:05.292Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T17:59:05.293Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T17:59:05.293Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T17:59:05.294Z] [BOT] 📋 After multi-location grouping: 36 unique jobs to post
[2026-01-31T17:59:05.294Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T17:59:05.297Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T17:59:05.298Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_c910d474 Dynamics Information Technology
[2026-01-31T17:59:05.298Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:59:05.316Z] [BOT ERROR] (node:2939) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T17:59:05.484Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2026-01-31T17:59:05.484Z] [BOT] ✅ Industry: Software Engineer I @ ORG_c910d474 Dynamics Information Technology
[2026-01-31T17:59:05.485Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_c910d474 Dynamics Information Technology → category channel (1 total channels)
[2026-01-31T17:59:05.486Z] [BOT] 💾 BEFORE MERGE: 1308 jobs in memory (cached)
[2026-01-31T17:59:05.518Z] [BOT] ✅ Loaded V2 database: 1307 jobs
💾 DISK STATE: 1307 jobs on disk
[2026-01-31T17:59:05.519Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1308
[2026-01-31T17:59:05.522Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:59:05.522Z] [BOT] 💾 AFTER MERGE: 1308 jobs (merged disk + memory)
[2026-01-31T17:59:05.523Z] [BOT] ✅ No jobs to archive (all 1308 jobs within 7-day window)
[2026-01-31T17:59:05.617Z] [BOT] 💾 Saved posted_jobs.json: 1308 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:07.119Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Security - Starlink" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:59:07.426Z] [BOT] ✅ Posted message: Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-31T17:59:07.426Z] [BOT] ✅ Industry: Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1
[2026-01-31T17:59:07.426Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer - Security - Starlink @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-31T17:59:07.426Z] [BOT] 💾 BEFORE MERGE: 1309 jobs in memory (cached)
[2026-01-31T17:59:07.449Z] [BOT] ✅ Loaded V2 database: 1308 jobs
💾 DISK STATE: 1308 jobs on disk
[2026-01-31T17:59:07.449Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1309
[2026-01-31T17:59:07.452Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:59:07.452Z] [BOT] 💾 AFTER MERGE: 1309 jobs (merged disk + memory)
[2026-01-31T17:59:07.453Z] [BOT] ✅ No jobs to archive (all 1309 jobs within 7-day window)
[2026-01-31T17:59:07.538Z] [BOT] 💾 Saved posted_jobs.json: 1309 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:09.038Z] [BOT] 📍 [ROUTING] "Junior Exercise Software IT Specialist" @ ORG_bd9def69
   Category: TECH (matched: "software")
[2026-01-31T17:59:09.038Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:59:09.309Z] [BOT] ✅ Posted message: Junior Exercise Software IT Specialist @ ORG_bd9def69 in #💻・tech-jobs
[2026-01-31T17:59:09.310Z] [BOT] ✅ Industry: Junior Exercise Software IT Specialist @ ORG_bd9def69
[2026-01-31T17:59:09.310Z] [BOT] 💾 Added channel posting: Junior Exercise Software IT Specialist @ ORG_bd9def69 → category channel (1 total channels)
[2026-01-31T17:59:09.310Z] [BOT] 💾 BEFORE MERGE: 1310 jobs in memory (cached)
[2026-01-31T17:59:09.333Z] [BOT] ✅ Loaded V2 database: 1309 jobs
💾 DISK STATE: 1309 jobs on disk
[2026-01-31T17:59:09.334Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1310
[2026-01-31T17:59:09.337Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:59:09.337Z] [BOT] 💾 AFTER MERGE: 1310 jobs (merged disk + memory)
[2026-01-31T17:59:09.338Z] [BOT] ✅ No jobs to archive (all 1310 jobs within 7-day window)
[2026-01-31T17:59:09.421Z] [BOT] 💾 Saved posted_jobs.json: 1310 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:10.923Z] [BOT] 📍 [ROUTING] "Multigres Deployment Engineer" @ supabase
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T17:59:10.923Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:59:11.128Z] [BOT] ✅ Posted message: Multigres Deployment Engineer @ supabase in #💻・tech-jobs
  ✅ Industry: Multigres Deployment Engineer @ supabase
[2026-01-31T17:59:11.129Z] [BOT] 💾 Added channel posting: Multigres Deployment Engineer @ supabase → category channel (1 total channels)
💾 BEFORE MERGE: 1311 jobs in memory (cached)
[2026-01-31T17:59:11.151Z] [BOT] ✅ Loaded V2 database: 1310 jobs
💾 DISK STATE: 1310 jobs on disk
[2026-01-31T17:59:11.152Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1311
[2026-01-31T17:59:11.154Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1311 jobs (merged disk + memory)
[2026-01-31T17:59:11.155Z] [BOT] ✅ No jobs to archive (all 1311 jobs within 7-day window)
[2026-01-31T17:59:11.238Z] [BOT] 💾 Saved posted_jobs.json: 1311 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:12.740Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:59:12.929Z] [BOT] ✅ Posted message: Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c
[2026-01-31T17:59:12.929Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - 3D/4D Reconstruction/Generation/Relighting @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T17:59:12.929Z] [BOT] 💾 BEFORE MERGE: 1312 jobs in memory (cached)
[2026-01-31T17:59:12.960Z] [BOT] ✅ Loaded V2 database: 1311 jobs
💾 DISK STATE: 1311 jobs on disk
[2026-01-31T17:59:12.960Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1312
[2026-01-31T17:59:12.963Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:59:12.963Z] [BOT] 💾 AFTER MERGE: 1312 jobs (merged disk + memory)
[2026-01-31T17:59:12.964Z] [BOT] ✅ No jobs to archive (all 1312 jobs within 7-day window)
[2026-01-31T17:59:13.046Z] [BOT] 💾 Saved posted_jobs.json: 1312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:14.547Z] [BOT] 📍 [ROUTING] "FinOps Engineer" @ supabase
[2026-01-31T17:59:14.547Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:59:14.717Z] [BOT] ✅ Posted message: FinOps Engineer @ supabase in #💻・tech-jobs
[2026-01-31T17:59:14.717Z] [BOT] ✅ Industry: FinOps Engineer @ supabase
[2026-01-31T17:59:14.718Z] [BOT] 💾 Added channel posting: FinOps Engineer @ supabase → category channel (1 total channels)
[2026-01-31T17:59:14.718Z] [BOT] 💾 BEFORE MERGE: 1313 jobs in memory (cached)
[2026-01-31T17:59:14.740Z] [BOT] ✅ Loaded V2 database: 1312 jobs
💾 DISK STATE: 1312 jobs on disk
[2026-01-31T17:59:14.740Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1313
[2026-01-31T17:59:14.743Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1313 jobs (merged disk + memory)
[2026-01-31T17:59:14.744Z] [BOT] ✅ No jobs to archive (all 1313 jobs within 7-day window)
[2026-01-31T17:59:14.827Z] [BOT] 💾 Saved posted_jobs.json: 1313 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:19.328Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T17:59:19.329Z] [BOT] 📍 [ROUTING] "Software Engineer, ML Infra (Junior & New Grad)" @ ORG_56aba366
   Category: AI (matched: "machine learning")
[2026-01-31T17:59:19.329Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T17:59:19.602Z] [BOT] ✅ Posted message: Software Engineer, ML Infra (Junior & New Grad) @ ORG_56aba366 in #🤖・ai-jobs
  ✅ Industry: Software Engineer, ML Infra (Junior & New Grad) @ ORG_56aba366
[2026-01-31T17:59:19.602Z] [BOT] 💾 Added channel posting: Software Engineer, ML Infra (Junior & New Grad) @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 1314 jobs in memory (cached)
[2026-01-31T17:59:19.626Z] [BOT] ✅ Loaded V2 database: 1313 jobs
💾 DISK STATE: 1313 jobs on disk
[2026-01-31T17:59:19.626Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1314
[2026-01-31T17:59:19.628Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1314 jobs (merged disk + memory)
[2026-01-31T17:59:19.629Z] [BOT] ✅ No jobs to archive (all 1314 jobs within 7-day window)
[2026-01-31T17:59:19.712Z] [BOT] 💾 Saved posted_jobs.json: 1314 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:21.214Z] [BOT] 📍 [ROUTING] "Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start" @ ORG_08c9a13c
[2026-01-31T17:59:21.214Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T17:59:21.376Z] [BOT] ✅ Posted message: Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c
[2026-01-31T17:59:21.377Z] [BOT] 💾 Added channel posting: Research Scientist in Large Language Model - Doubao-PhD Graduates-2025 Start @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1315 jobs in memory (cached)
[2026-01-31T17:59:21.400Z] [BOT] ✅ Loaded V2 database: 1314 jobs
💾 DISK STATE: 1314 jobs on disk
[2026-01-31T17:59:21.400Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1315
[2026-01-31T17:59:21.403Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1315 jobs (merged disk + memory)
[2026-01-31T17:59:21.404Z] [BOT] ✅ No jobs to archive (all 1315 jobs within 7-day window)
[2026-01-31T17:59:21.489Z] [BOT] 💾 Saved posted_jobs.json: 1315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:25.989Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T17:59:25.990Z] [BOT] 📍 [ROUTING] "Data Science - Analyst" @ ORG_9d38443e of Chicago
[2026-01-31T17:59:25.990Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T17:59:26.183Z] [BOT] ✅ Posted message: Data Science - Analyst @ ORG_9d38443e of Chicago in #📊・JID_fb739488
  ✅ Industry: Data Science - Analyst @ ORG_9d38443e of Chicago
[2026-01-31T17:59:26.183Z] [BOT] 💾 Added channel posting: Data Science - Analyst @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-31T17:59:26.184Z] [BOT] 💾 BEFORE MERGE: 1316 jobs in memory (cached)
[2026-01-31T17:59:26.206Z] [BOT] ✅ Loaded V2 database: 1315 jobs
💾 DISK STATE: 1315 jobs on disk
[2026-01-31T17:59:26.207Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1316
[2026-01-31T17:59:26.209Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1316 jobs (merged disk + memory)
[2026-01-31T17:59:26.210Z] [BOT] ✅ No jobs to archive (all 1316 jobs within 7-day window)
[2026-01-31T17:59:26.297Z] [BOT] 💾 Saved posted_jobs.json: 1316 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:27.800Z] [BOT] 📍 [ROUTING] "PhD Student" @ ORG_6adce842
[2026-01-31T17:59:27.800Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T17:59:27.941Z] [BOT] ✅ Posted message: PhD Student @ ORG_6adce842 in #📊・JID_fb739488
[2026-01-31T17:59:27.941Z] [BOT] ✅ Industry: PhD Student @ ORG_6adce842
[2026-01-31T17:59:27.942Z] [BOT] 💾 Added channel posting: PhD Student @ ORG_6adce842 → category channel (1 total channels)
[2026-01-31T17:59:27.942Z] [BOT] 💾 BEFORE MERGE: 1317 jobs in memory (cached)
[2026-01-31T17:59:27.966Z] [BOT] ✅ Loaded V2 database: 1316 jobs
💾 DISK STATE: 1316 jobs on disk
[2026-01-31T17:59:27.966Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1317
[2026-01-31T17:59:27.968Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1317 jobs (merged disk + memory)
[2026-01-31T17:59:27.969Z] [BOT] ✅ No jobs to archive (all 1317 jobs within 7-day window)
[2026-01-31T17:59:28.053Z] [BOT] 💾 Saved posted_jobs.json: 1317 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:32.553Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T17:59:32.554Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e873d38-external_care..." not found, but found as SHA256 "e8a0092ee3e7425b"
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_6edab8dc-i_rq210148-1 (posted within 7 days)
[2026-01-31T17:59:32.554Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_91b6ada9..." not found, but found as SHA256 "37e2601ae51b6991"
[2026-01-31T17:59:32.554Z] [BOT] ⏭️  Skipping duplicate: JID_0f19144d (posted within 7 days)
[2026-01-31T17:59:32.555Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0fa15913..." not found, but found as SHA256 "0b601f47ec6a0c6f"
[2026-01-31T17:59:32.555Z] [BOT] ⏭️  Skipping duplicate: JID_57ea5813 (posted within 7 days)
[2026-01-31T17:59:32.555Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "ff9d6ee3675e0eca"
⏭️  Skipping duplicate: JID_02449eab (posted within 7 days)
[2026-01-31T17:59:32.555Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_35e1cd6d-..." not found, but found as SHA256 "882263bd13e721ab"
⏭️  Skipping duplicate: JID_a30c7e21 (posted within 7 days)
[2026-01-31T17:59:32.556Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eae42fa0..." not found, but found as SHA256 "a7462b8603972a7f"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_62c14f0e-detail (posted within 7 days)
[2026-01-31T17:59:32.556Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_891813d3..." not found, but found as SHA256 "b8879a091357648e"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_540a906f-detail (posted within 7 days)
[2026-01-31T17:59:32.556Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "7483fc6fa26f56aa"
[2026-01-31T17:59:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_81c3a1fa-analyst_jr31922-1 (posted within 7 days)
[2026-01-31T17:59:32.556Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6b109869..." not found, but found as SHA256 "a4e951dce8aa5c2d"
⏭️  Skipping duplicate: JID_1260679d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b903d64b-..." not found, but found as SHA256 "3418a1b1e4817e12"
⏭️  Skipping duplicate: JID_50e12d0e (posted within 7 days)
[2026-01-31T17:59:32.673Z] [BOT] ✅ Loaded pending queue: 2945 total (1608 pending, 50 enriched, 1287 posted)
[2026-01-31T17:59:32.866Z] [BOT] ✅ Saved pending queue: 2945 total (1608 pending, 40 enriched, 1297 posted)
[2026-01-31T17:59:32.866Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T17:59:32.953Z] [BOT] 📂 Loaded 11378 existing routing entries
[2026-01-31T17:59:33.078Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T17:59:33.078Z] [BOT] Total entries: 11388
   Timestamp: 2026-01-31T17:59:33.031Z
[2026-01-31T17:59:33.079Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T17:59:33.079Z] [BOT] Total attempts: 24
   Successful: 10
   Failed: 0
   Skipped: 14
[2026-01-31T17:59:33.079Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 2 posts
     3. #📊・JID_fb739488: 2 posts
[2026-01-31T17:59:33.079Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T17:59:33.079Z] [BOT] 💾 BEFORE MERGE: 1317 jobs in memory (cached)
[2026-01-31T17:59:33.104Z] [BOT] ✅ Loaded V2 database: 1317 jobs
💾 DISK STATE: 1317 jobs on disk
[2026-01-31T17:59:33.104Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1317
[2026-01-31T17:59:33.108Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:59:33.108Z] [BOT] 💾 AFTER MERGE: 1317 jobs (merged disk + memory)
[2026-01-31T17:59:33.109Z] [BOT] ✅ No jobs to archive (all 1317 jobs within 7-day window)
[2026-01-31T17:59:33.184Z] [BOT] 💾 Saved posted_jobs.json: 1317 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:59:33.184Z] [BOT] ✅ Database saved successfully
[2026-01-31T17:59:35.213Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2939) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*