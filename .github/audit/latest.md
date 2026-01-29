# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T06:39:58.893Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T06:39:23.013Z] ========================================
[2026-01-29T06:39:23.015Z] Discord Bot Execution Log
[2026-01-29T06:39:23.015Z] Environment: GitHub Actions
[2026-01-29T06:39:23.015Z] Node Version: v20.20.0
[2026-01-29T06:39:23.015Z] ========================================
[2026-01-29T06:39:23.015Z] Environment Variables Check:
[2026-01-29T06:39:23.015Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T06:39:23.015Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.015Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T06:39:23.015Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T06:39:23.015Z] 
Multi-Channel Configuration:
[2026-01-29T06:39:23.015Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.016Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.016Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.016Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.016Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.016Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.016Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.016Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.016Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T06:39:23.016Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T06:39:23.016Z] 
Data Files Check:
[2026-01-29T06:39:23.017Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T06:39:23.017Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T06:39:23.018Z] 
========================================
[2026-01-29T06:39:23.018Z] Starting Enhanced Discord Bot...
[2026-01-29T06:39:23.018Z] ========================================
[2026-01-29T06:39:23.554Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:39:24.058Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T06:39:24.058Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T06:39:24.058Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T06:39:24.184Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T06:39:24.185Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T06:39:24.186Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T06:39:24.186Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T06:39:24.187Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T06:39:24.187Z] [BOT] (2 grouped as same job with different locations)
[2026-01-29T06:39:24.188Z] [BOT] 📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-29T06:39:24.188Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T06:39:24.191Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T06:39:24.192Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T06:39:24.192Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:39:24.209Z] [BOT ERROR] (node:2576) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T06:39:24.582Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T06:39:24.583Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T06:39:24.583Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T06:39:24.583Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:24.584Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:39:24.584Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:39:24.584Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:39:24.585Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:24.591Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:24.591Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:26.616Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T06:39:26.617Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:26.617Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:39:26.617Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:39:26.618Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T06:39:26.618Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:26.621Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:28.122Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
[2026-01-29T06:39:28.122Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:39:28.306Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T06:39:28.306Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:28.307Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:39:28.307Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:39:28.307Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:39:28.307Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:28.309Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:28.309Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:30.074Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T06:39:30.074Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:30.074Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:39:30.075Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:30.076Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:30.077Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:31.577Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-29T06:39:31.577Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:39:31.748Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T06:39:31.749Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:31.749Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:39:31.749Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:39:31.749Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:39:31.750Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:31.751Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:33.253Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T06:39:33.253Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:39:33.586Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T06:39:33.586Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:33.587Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:39:33.587Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T06:39:33.587Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:33.589Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:33.589Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:35.090Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:39:35.305Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T06:39:35.305Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:35.306Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:39:35.306Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T06:39:35.306Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:35.308Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:35.308Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:36.809Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
[2026-01-29T06:39:36.809Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:39:36.948Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T06:39:36.948Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:36.949Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:39:36.949Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:39:36.949Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:39:36.949Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:36.951Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:41.453Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T06:39:41.453Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T06:39:41.754Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T06:39:41.754Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:41.754Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:39:41.754Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:39:41.755Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:41.757Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:41.757Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:43.480Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T06:39:43.480Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:43.481Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:39:43.481Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:39:43.481Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:39:43.481Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:43.484Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:43.484Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:44.984Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T06:39:44.985Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T06:39:45.127Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T06:39:45.127Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:45.128Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:39:45.128Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:45.131Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:45.131Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:46.632Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T06:39:46.632Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T06:39:46.821Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T06:39:46.821Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:46.822Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:39:46.822Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:39:46.822Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:39:46.822Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:46.824Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:46.824Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:51.325Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T06:39:51.325Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T06:39:51.325Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T06:39:51.481Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T06:39:51.481Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:51.482Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:39:51.482Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:51.484Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:51.484Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:39:55.986Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T06:39:55.987Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T06:39:56.094Z] [BOT] 📂 Loaded 9871 existing routing entries
[2026-01-29T06:39:56.218Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T06:39:56.218Z] [BOT] Total entries: 9881
   Timestamp: 2026-01-29T06:39:56.170Z
[2026-01-29T06:39:56.219Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T06:39:56.219Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T06:39:56.220Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
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
[2026-01-29T06:39:56.220Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:39:56.225Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:39:56.229Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:39:56.229Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T06:39:58.248Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2576) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*