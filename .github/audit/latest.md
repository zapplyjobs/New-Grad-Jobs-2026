# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T13:32:56.735Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T13:32:21.332Z] ========================================
[2026-01-29T13:32:21.334Z] Discord Bot Execution Log
[2026-01-29T13:32:21.334Z] Environment: GitHub Actions
[2026-01-29T13:32:21.334Z] Node Version: v20.20.0
[2026-01-29T13:32:21.334Z] ========================================
[2026-01-29T13:32:21.334Z] Environment Variables Check:
[2026-01-29T13:32:21.334Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T13:32:21.334Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.334Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T13:32:21.335Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T13:32:21.335Z] 
Multi-Channel Configuration:
[2026-01-29T13:32:21.335Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.335Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.335Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.335Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.335Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.335Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.335Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.335Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.335Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T13:32:21.335Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T13:32:21.336Z] 
Data Files Check:
[2026-01-29T13:32:21.336Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T13:32:21.337Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T13:32:21.337Z] 
========================================
[2026-01-29T13:32:21.337Z] Starting Enhanced Discord Bot...
[2026-01-29T13:32:21.337Z] ========================================
[2026-01-29T13:32:21.868Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:32:22.329Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T13:32:22.329Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T13:32:22.329Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T13:32:22.457Z] [BOT] ✅ Loaded pending queue: 3050 total (3000 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T13:32:22.459Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T13:32:22.459Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T13:32:22.459Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T13:32:22.461Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T13:32:22.461Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-29T13:32:22.461Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T13:32:22.465Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T13:32:22.465Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T13:32:22.465Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:32:22.482Z] [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T13:32:22.734Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
  ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T13:32:22.735Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T13:32:22.735Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:22.736Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:32:22.736Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:22.736Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T13:32:22.736Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:22.742Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:22.742Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:24.414Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T13:32:24.414Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:24.415Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:32:24.415Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:24.415Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T13:32:24.415Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:24.418Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:24.418Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:25.919Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
[2026-01-29T13:32:25.919Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:32:26.127Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T13:32:26.127Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:26.128Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:32:26.128Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:26.128Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T13:32:26.128Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:26.130Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:27.768Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T13:32:27.768Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:27.769Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:32:27.769Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:27.769Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:27.771Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:27.771Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:29.272Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
[2026-01-29T13:32:29.272Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:32:29.470Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T13:32:29.470Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:29.470Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:32:29.471Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:29.471Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:29.473Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:29.473Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:30.975Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T13:32:30.975Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:32:31.155Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T13:32:31.155Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:31.156Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:32:31.156Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:31.156Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:31.158Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:32.660Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
[2026-01-29T13:32:32.660Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:32:32.857Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T13:32:32.857Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:32.858Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:32:32.858Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:32.858Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T13:32:32.858Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:32.859Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:32.860Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:34.360Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:32:34.642Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T13:32:34.642Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:34.643Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:32:34.643Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:34.643Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T13:32:34.643Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:34.645Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:34.645Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:39.147Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T13:32:39.147Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T13:32:39.408Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T13:32:39.408Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:39.409Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:32:39.409Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:39.409Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:39.411Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:39.411Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:41.053Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T13:32:41.054Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:41.054Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:32:41.054Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:41.055Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:41.056Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:41.056Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:42.557Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
[2026-01-29T13:32:42.557Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T13:32:42.717Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
[2026-01-29T13:32:42.717Z] [BOT] ✅ Industry: Software Integration Engineer @ Q-CTRL
💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:42.719Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:32:42.719Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:42.719Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T13:32:42.719Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:42.721Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:42.721Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:44.222Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-29T13:32:44.222Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T13:32:44.567Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T13:32:44.568Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:44.568Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:32:44.568Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:44.569Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:44.570Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:44.571Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:49.072Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T13:32:49.073Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
[2026-01-29T13:32:49.073Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T13:32:49.222Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T13:32:49.222Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:49.222Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:32:49.223Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:32:49.223Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T13:32:49.223Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:49.225Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T13:32:53.728Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T13:32:53.729Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T13:32:53.837Z] [BOT] 📂 Loaded 10031 existing routing entries
[2026-01-29T13:32:53.967Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T13:32:53.968Z] [BOT] Total entries: 10041
   Timestamp: 2026-01-29T13:32:53.917Z
[2026-01-29T13:32:53.968Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T13:32:53.968Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T13:32:53.969Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-29T13:32:53.969Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T13:32:53.969Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T13:32:53.969Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:32:53.975Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:32:53.979Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:32:53.979Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T13:32:55.997Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*