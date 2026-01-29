# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T07:37:12.649Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T07:36:36.796Z] ========================================
[2026-01-29T07:36:36.798Z] Discord Bot Execution Log
[2026-01-29T07:36:36.798Z] Environment: GitHub Actions
[2026-01-29T07:36:36.798Z] Node Version: v20.20.0
[2026-01-29T07:36:36.798Z] ========================================
[2026-01-29T07:36:36.798Z] Environment Variables Check:
[2026-01-29T07:36:36.798Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T07:36:36.798Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.799Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T07:36:36.799Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T07:36:36.799Z] 
Multi-Channel Configuration:
[2026-01-29T07:36:36.799Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.799Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.799Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.799Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.799Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.799Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.799Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.799Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.800Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T07:36:36.800Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T07:36:36.800Z] 
Data Files Check:
[2026-01-29T07:36:36.800Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T07:36:36.801Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T07:36:36.801Z] 
========================================
[2026-01-29T07:36:36.801Z] Starting Enhanced Discord Bot...
[2026-01-29T07:36:36.801Z] ========================================
[2026-01-29T07:36:37.337Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:36:37.729Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T07:36:37.729Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T07:36:37.729Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T07:36:37.855Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T07:36:37.857Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T07:36:37.857Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T07:36:37.858Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T07:36:37.859Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T07:36:37.859Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T07:36:37.859Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T07:36:37.863Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T07:36:37.863Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T07:36:37.863Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:36:37.880Z] [BOT ERROR] (node:2466) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T07:36:38.323Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T07:36:38.323Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T07:36:38.324Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T07:36:38.324Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:38.324Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:36:38.325Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:38.325Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:36:38.325Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:38.332Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:36:38.332Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:40.007Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T07:36:40.007Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:40.008Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:36:40.008Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:40.008Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T07:36:40.008Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:40.011Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:36:40.011Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:41.512Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
[2026-01-29T07:36:41.512Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:36:41.839Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T07:36:41.840Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:41.840Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:36:41.840Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:41.841Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:41.842Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:36:41.842Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:43.545Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T07:36:43.545Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:43.546Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:36:43.546Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:43.546Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:36:43.546Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:43.548Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:36:43.548Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:45.048Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-29T07:36:45.049Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:36:45.276Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T07:36:45.277Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:45.277Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:36:45.277Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:45.277Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:36:45.278Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:45.279Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:36:45.279Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:46.780Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T07:36:46.780Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:36:46.904Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T07:36:46.904Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
[2026-01-29T07:36:46.904Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:46.905Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:36:46.905Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:46.905Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T07:36:46.905Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:36:46.905Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:46.907Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:48.408Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:36:48.687Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T07:36:48.687Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:48.688Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:48.688Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T07:36:48.688Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:48.690Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:36:48.690Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:50.191Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:36:50.345Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T07:36:50.346Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:50.346Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:36:50.346Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:50.346Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:36:50.347Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:50.348Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:36:50.348Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:54.850Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T07:36:54.850Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
[2026-01-29T07:36:54.851Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T07:36:55.611Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T07:36:55.611Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:55.612Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:36:55.612Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:55.612Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:36:55.612Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:55.615Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:36:55.615Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:57.279Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T07:36:57.280Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:57.281Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T07:36:57.281Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:57.283Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:36:57.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:36:58.784Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T07:36:58.784Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T07:36:58.916Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T07:36:58.916Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:36:58.917Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:36:58.917Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:36:58.917Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:36:58.919Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:37:00.421Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T07:37:00.421Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T07:37:00.551Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T07:37:00.552Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:37:00.552Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:37:00.552Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:37:00.553Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:37:00.554Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:37:00.554Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:37:05.056Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T07:37:05.056Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T07:37:05.056Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T07:37:05.234Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T07:37:05.235Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:37:05.235Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:37:05.235Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:37:05.235Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:37:05.235Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:37:05.237Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:37:05.237Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:37:09.740Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T07:37:09.741Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T07:37:09.846Z] [BOT] 📂 Loaded 9891 existing routing entries
[2026-01-29T07:37:09.974Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-29T07:37:09.974Z] [BOT] New entries: 10
   Total entries: 9901
   Timestamp: 2026-01-29T07:37:09.920Z
[2026-01-29T07:37:09.975Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T07:37:09.975Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T07:37:09.975Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T07:37:09.975Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-29T07:37:09.975Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T07:37:09.976Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:37:09.976Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:37:09.976Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:37:09.977Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:37:09.978Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:37:09.978Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T07:37:11.997Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2466) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*