# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T05:53:08.191Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T05:52:32.759Z] ========================================
[2026-01-29T05:52:32.761Z] Discord Bot Execution Log
[2026-01-29T05:52:32.761Z] Environment: GitHub Actions
[2026-01-29T05:52:32.761Z] Node Version: v20.20.0
[2026-01-29T05:52:32.762Z] ========================================
[2026-01-29T05:52:32.762Z] Environment Variables Check:
[2026-01-29T05:52:32.762Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T05:52:32.762Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.762Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T05:52:32.762Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T05:52:32.762Z] 
Multi-Channel Configuration:
[2026-01-29T05:52:32.762Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.762Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.762Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.763Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.763Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.763Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.763Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.763Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.763Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T05:52:32.763Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T05:52:32.763Z] 
Data Files Check:
[2026-01-29T05:52:32.764Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T05:52:32.764Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T05:52:32.764Z] 
========================================
[2026-01-29T05:52:32.764Z] Starting Enhanced Discord Bot...
[2026-01-29T05:52:32.764Z] ========================================
[2026-01-29T05:52:33.290Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:52:33.783Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T05:52:33.784Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T05:52:33.784Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T05:52:33.903Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[2026-01-29T05:52:33.903Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T05:52:33.905Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T05:52:33.906Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T05:52:33.906Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T05:52:33.907Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T05:52:33.907Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-29T05:52:33.908Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T05:52:33.911Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T05:52:33.912Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T05:52:33.912Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:52:33.928Z] [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T05:52:34.136Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T05:52:34.137Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T05:52:34.137Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T05:52:34.137Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:34.138Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:52:34.138Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:34.138Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:52:34.138Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:34.147Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:34.147Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:35.847Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T05:52:35.848Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:35.848Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:52:35.848Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:35.849Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T05:52:35.849Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:35.851Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:35.851Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:37.352Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:52:37.494Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T05:52:37.495Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:37.495Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:52:37.495Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:37.495Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:52:37.496Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:37.497Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:37.497Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:39.191Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T05:52:39.191Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:39.192Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:52:39.192Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:39.192Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:52:39.192Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:39.194Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:40.696Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:52:40.831Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T05:52:40.832Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:40.833Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:52:40.833Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:40.833Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:52:40.833Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:40.834Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:40.835Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:42.335Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T05:52:42.336Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:52:42.539Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T05:52:42.540Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:42.540Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:52:42.540Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:42.540Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:52:42.541Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:42.543Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:42.543Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:44.045Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
[2026-01-29T05:52:44.045Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:52:44.197Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T05:52:44.198Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
[2026-01-29T05:52:44.198Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:44.198Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:52:44.198Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:44.199Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:44.201Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:44.201Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:45.703Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
[2026-01-29T05:52:45.703Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:52:45.877Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T05:52:45.877Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-29T05:52:45.877Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:45.878Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:52:45.878Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:45.878Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:52:45.878Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:45.880Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:45.880Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:50.383Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T05:52:50.383Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T05:52:50.634Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T05:52:50.634Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:50.635Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:52:50.635Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:52:50.635Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:50.637Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:50.637Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:52.480Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T05:52:52.481Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:52.481Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:52:52.482Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:52.482Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:52.484Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:52.484Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:53.985Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T05:52:53.985Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T05:52:54.177Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T05:52:54.177Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:54.178Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:52:54.178Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:54.178Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T05:52:54.178Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:54.180Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:54.180Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:52:55.681Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T05:52:55.681Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T05:52:55.867Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
[2026-01-29T05:52:55.867Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T05:52:55.867Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:52:55.868Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:52:55.868Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:52:55.868Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:52:55.871Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:52:55.871Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:53:00.373Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T05:53:00.374Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
[2026-01-29T05:53:00.374Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T05:53:00.697Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T05:53:00.697Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:53:00.698Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:53:00.698Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:53:00.698Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:53:00.698Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:53:00.701Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:53:00.701Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:53:05.204Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T05:53:05.205Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T05:53:05.309Z] [BOT] 📂 Loaded 9841 existing routing entries
[2026-01-29T05:53:05.432Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9851
[2026-01-29T05:53:05.433Z] [BOT] Timestamp: 2026-01-29T05:53:05.384Z
[2026-01-29T05:53:05.433Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T05:53:05.433Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T05:53:05.433Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T05:53:05.434Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:53:05.439Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:53:05.442Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:53:05.442Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T05:53:07.462Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*