# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T09:22:07.018Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T09:21:29.636Z] ========================================
[2026-01-29T09:21:29.638Z] Discord Bot Execution Log
[2026-01-29T09:21:29.638Z] Environment: GitHub Actions
[2026-01-29T09:21:29.638Z] Node Version: v20.20.0
[2026-01-29T09:21:29.638Z] ========================================
[2026-01-29T09:21:29.638Z] Environment Variables Check:
[2026-01-29T09:21:29.638Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T09:21:29.638Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.638Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T09:21:29.638Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T09:21:29.638Z] 
Multi-Channel Configuration:
[2026-01-29T09:21:29.638Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.639Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.639Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.639Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.639Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.639Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.639Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.639Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.639Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T09:21:29.639Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T09:21:29.639Z] 
Data Files Check:
[2026-01-29T09:21:29.640Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T09:21:29.640Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T09:21:29.640Z] 
========================================
[2026-01-29T09:21:29.640Z] Starting Enhanced Discord Bot...
[2026-01-29T09:21:29.640Z] ========================================
[2026-01-29T09:21:30.156Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:21:30.558Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T09:21:30.559Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T09:21:30.559Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T09:21:30.676Z] [BOT] ✅ Loaded pending queue: 3040 total (2990 pending, 50 enriched, 0 posted)
[2026-01-29T09:21:30.677Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T09:21:30.679Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T09:21:30.679Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T09:21:30.680Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T09:21:30.681Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T09:21:30.681Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T09:21:30.681Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T09:21:30.685Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T09:21:30.685Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T09:21:30.686Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:21:30.702Z] [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T09:21:30.835Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T09:21:30.836Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T09:21:30.836Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T09:21:30.836Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:30.837Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:21:30.837Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:30.837Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T09:21:30.837Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:21:30.837Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:30.843Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:30.843Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:32.524Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T09:21:32.525Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:32.525Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T09:21:32.525Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:32.526Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T09:21:32.526Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:32.528Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:32.529Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:34.030Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:21:34.286Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T09:21:34.286Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:34.287Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T09:21:34.287Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:21:34.287Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:34.289Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:34.289Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:36.267Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T09:21:36.267Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:36.268Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:21:36.268Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:36.268Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:36.270Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:36.270Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:37.771Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:21:37.977Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T09:21:37.978Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:37.978Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T09:21:37.978Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T09:21:37.978Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:37.980Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:39.482Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T09:21:39.482Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:21:39.599Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T09:21:39.599Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:39.600Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:39.600Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:21:39.600Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:39.602Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:39.602Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:41.104Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:21:42.730Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T09:21:42.730Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:42.731Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:21:42.731Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:42.731Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:21:42.731Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:42.733Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:42.733Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:44.233Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:21:44.442Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T09:21:44.442Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:44.443Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T09:21:44.443Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:44.443Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:44.445Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:44.445Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:48.947Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T09:21:48.948Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
[2026-01-29T09:21:48.948Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T09:21:49.225Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T09:21:49.225Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:49.226Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T09:21:49.226Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:49.226Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:49.229Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:50.895Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T09:21:50.895Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:50.896Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:21:50.896Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:50.896Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:21:50.896Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:50.898Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:50.899Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:52.399Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T09:21:52.399Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T09:21:52.549Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T09:21:52.549Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:52.550Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:21:52.550Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:52.552Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:52.552Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:54.053Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T09:21:54.053Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T09:21:54.322Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
[2026-01-29T09:21:54.323Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:54.323Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:21:54.323Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:54.323Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:21:54.324Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:54.325Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:54.325Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:21:58.826Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T09:21:58.826Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T09:21:58.826Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T09:21:59.584Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
[2026-01-29T09:21:59.585Z] [BOT] ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:21:59.585Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:21:59.585Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:21:59.585Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T09:21:59.586Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:21:59.587Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:21:59.587Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:22:04.088Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T09:22:04.089Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T09:22:04.195Z] [BOT] 📂 Loaded 9941 existing routing entries
[2026-01-29T09:22:04.318Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T09:22:04.318Z] [BOT] Total entries: 9951
   Timestamp: 2026-01-29T09:22:04.270Z
[2026-01-29T09:22:04.318Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 13
[2026-01-29T09:22:04.318Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T09:22:04.319Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-29T09:22:04.319Z] [BOT] 5. #💰・finance-jobs: 1 posts
[2026-01-29T09:22:04.319Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T09:22:04.319Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:22:04.324Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:22:04.328Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:22:04.328Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T09:22:06.347Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*