# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T11:10:13.001Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T11:09:36.267Z] ========================================
[2026-01-29T11:09:36.269Z] Discord Bot Execution Log
[2026-01-29T11:09:36.269Z] Environment: GitHub Actions
[2026-01-29T11:09:36.269Z] Node Version: v20.20.0
[2026-01-29T11:09:36.269Z] ========================================
[2026-01-29T11:09:36.269Z] Environment Variables Check:
[2026-01-29T11:09:36.269Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T11:09:36.270Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.270Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T11:09:36.270Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T11:09:36.270Z] 
Multi-Channel Configuration:
[2026-01-29T11:09:36.270Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.270Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.270Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.270Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.270Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.270Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.270Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.271Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.271Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T11:09:36.271Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T11:09:36.271Z] 
Data Files Check:
[2026-01-29T11:09:36.272Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T11:09:36.272Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T11:09:36.272Z] 
========================================
[2026-01-29T11:09:36.272Z] Starting Enhanced Discord Bot...
[2026-01-29T11:09:36.272Z] ========================================
[2026-01-29T11:09:36.778Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T11:09:37.474Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T11:09:37.475Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T11:09:37.475Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T11:09:37.616Z] [BOT] ✅ Loaded pending queue: 3048 total (2998 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T11:09:37.618Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T11:09:37.619Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T11:09:37.619Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T11:09:37.620Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T11:09:37.620Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T11:09:37.620Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T11:09:37.624Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T11:09:37.625Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T11:09:37.625Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T11:09:37.642Z] [BOT ERROR] (node:2558) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T11:09:37.879Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T11:09:37.879Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T11:09:37.879Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T11:09:37.879Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:37.880Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T11:09:37.880Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:09:37.880Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T11:09:37.881Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:37.887Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:09:37.887Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:39.716Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T11:09:39.717Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:39.717Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T11:09:39.717Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:09:39.717Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T11:09:39.718Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:39.720Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:09:39.721Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:41.221Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
[2026-01-29T11:09:41.221Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T11:09:41.394Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T11:09:41.394Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T11:09:41.394Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:41.394Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T11:09:41.395Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:09:41.395Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:41.396Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:43.199Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T11:09:43.200Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:43.201Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T11:09:43.201Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:43.202Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:09:43.202Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:44.703Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
[2026-01-29T11:09:44.703Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T11:09:44.900Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T11:09:44.900Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:44.901Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T11:09:44.901Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:09:44.901Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T11:09:44.901Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:44.903Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:46.404Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
   Category: TECH (matched: "analytics")
[2026-01-29T11:09:46.404Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T11:09:46.569Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T11:09:46.569Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
[2026-01-29T11:09:46.569Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:46.570Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:09:46.570Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T11:09:46.570Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:46.572Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:09:46.572Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:48.073Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
[2026-01-29T11:09:48.073Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T11:09:48.258Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T11:09:48.258Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
[2026-01-29T11:09:48.258Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:48.259Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T11:09:48.259Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:09:48.259Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T11:09:48.260Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:48.261Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:09:48.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:49.763Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2026-01-29T11:09:49.763Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T11:09:50.157Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T11:09:50.157Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:50.158Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T11:09:50.158Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T11:09:50.158Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:50.160Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:09:50.160Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:54.661Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T11:09:54.662Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T11:09:55.052Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T11:09:55.052Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
[2026-01-29T11:09:55.052Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:55.052Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T11:09:55.053Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:09:55.053Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T11:09:55.053Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:55.055Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:09:55.055Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:56.773Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T11:09:56.773Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-29T11:09:56.773Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:56.773Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T11:09:56.774Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:09:56.774Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T11:09:56.774Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:56.776Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:09:56.776Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:58.277Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
[2026-01-29T11:09:58.278Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T11:09:58.493Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
[2026-01-29T11:09:58.494Z] [BOT] ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T11:09:58.494Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:09:58.494Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T11:09:58.494Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:09:58.495Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T11:09:58.495Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:09:58.497Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:09:58.497Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:09:59.998Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T11:09:59.999Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T11:10:00.167Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
[2026-01-29T11:10:00.167Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
[2026-01-29T11:10:00.167Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:10:00.168Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T11:10:00.168Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:10:00.168Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T11:10:00.168Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:10:00.170Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:10:00.170Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:10:04.672Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T11:10:04.672Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T11:10:04.672Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T11:10:05.003Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T11:10:05.004Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:10:05.004Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T11:10:05.004Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T11:10:05.005Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:10:05.006Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:10:05.006Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T11:10:09.508Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T11:10:09.509Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T11:10:09.614Z] [BOT] 📂 Loaded 9991 existing routing entries
[2026-01-29T11:10:09.737Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T11:10:09.737Z] [BOT] Total entries: 10001
   Timestamp: 2026-01-29T11:10:09.688Z
[2026-01-29T11:10:09.737Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T11:10:09.737Z] [BOT] Total attempts: 13
[2026-01-29T11:10:09.738Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T11:10:09.738Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T11:10:09.738Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-29T11:10:09.738Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T11:10:09.743Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T11:10:09.747Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T11:10:09.747Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T11:10:11.766Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2558) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*