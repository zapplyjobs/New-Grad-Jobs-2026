# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T12:50:00.354Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T12:49:23.795Z] ========================================
[2026-01-29T12:49:23.797Z] Discord Bot Execution Log
[2026-01-29T12:49:23.797Z] Environment: GitHub Actions
[2026-01-29T12:49:23.797Z] Node Version: v20.20.0
[2026-01-29T12:49:23.797Z] ========================================
[2026-01-29T12:49:23.797Z] Environment Variables Check:
[2026-01-29T12:49:23.797Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T12:49:23.797Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.797Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T12:49:23.798Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T12:49:23.798Z] 
Multi-Channel Configuration:
[2026-01-29T12:49:23.798Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.798Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.798Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.798Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.798Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.798Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.798Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.798Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.798Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T12:49:23.798Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T12:49:23.799Z] 
Data Files Check:
[2026-01-29T12:49:23.799Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T12:49:23.800Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T12:49:23.800Z] 
========================================
[2026-01-29T12:49:23.800Z] Starting Enhanced Discord Bot...
[2026-01-29T12:49:23.800Z] ========================================
[2026-01-29T12:49:24.353Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:24.909Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T12:49:24.910Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T12:49:24.910Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T12:49:25.050Z] [BOT] ✅ Loaded pending queue: 3049 total (2999 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T12:49:25.052Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T12:49:25.052Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T12:49:25.053Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T12:49:25.054Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T12:49:25.054Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
[2026-01-29T12:49:25.054Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T12:49:25.058Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T12:49:25.058Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T12:49:25.059Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:49:25.075Z] [BOT ERROR] (node:2484) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T12:49:25.324Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T12:49:25.325Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T12:49:25.325Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T12:49:25.325Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:25.326Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:25.326Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:25.326Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:49:25.327Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:25.335Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:49:25.335Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:27.006Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T12:49:27.006Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:27.006Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:27.007Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:27.007Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T12:49:27.007Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:27.010Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:28.511Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
[2026-01-29T12:49:28.511Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:49:28.682Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T12:49:28.682Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:28.683Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:28.683Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:28.683Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:28.685Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:30.320Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T12:49:30.321Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:30.321Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:30.322Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:30.322Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:30.324Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:49:30.324Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:31.826Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-29T12:49:31.826Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:49:32.114Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T12:49:32.115Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:32.115Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:32.115Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:32.116Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:32.117Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:33.619Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T12:49:33.619Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:49:33.805Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T12:49:33.806Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:33.807Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:33.807Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:33.807Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:49:33.807Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:33.809Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:35.311Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
[2026-01-29T12:49:35.311Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:49:35.476Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T12:49:35.476Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:35.477Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:35.477Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:35.477Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:49:35.477Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:35.479Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:49:35.479Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:36.981Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
[2026-01-29T12:49:36.981Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:49:37.287Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T12:49:37.288Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:37.289Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:37.289Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:37.289Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:49:37.289Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:37.291Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:41.794Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T12:49:41.794Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
[2026-01-29T12:49:41.794Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T12:49:42.106Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T12:49:42.107Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:42.107Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:42.107Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:42.107Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:49:42.108Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:42.110Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:43.881Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T12:49:43.881Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:43.882Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:43.882Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:43.882Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T12:49:43.882Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:43.885Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:49:43.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:45.386Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T12:49:45.387Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T12:49:45.637Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
[2026-01-29T12:49:45.637Z] [BOT] ✅ Industry: Software Integration Engineer @ Q-CTRL
💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:45.638Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:45.638Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:45.638Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:49:45.638Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:45.640Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:47.142Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-29T12:49:47.142Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T12:49:47.758Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T12:49:47.758Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:47.759Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:49:47.759Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:47.759Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:49:47.759Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:47.761Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:49:47.761Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:52.263Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T12:49:52.264Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T12:49:52.264Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T12:49:52.767Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T12:49:52.767Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:52.768Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T12:49:52.768Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:49:52.768Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:52.770Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:49:52.770Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:49:57.272Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T12:49:57.274Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T12:49:57.387Z] [BOT] 📂 Loaded 10011 existing routing entries
[2026-01-29T12:49:57.515Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T12:49:57.516Z] [BOT] Total entries: 10021
   Timestamp: 2026-01-29T12:49:57.465Z
[2026-01-29T12:49:57.516Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T12:49:57.516Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T12:49:57.517Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T12:49:57.517Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-29T12:49:57.517Z] [BOT] 5. #💰・finance-jobs: 1 posts
[2026-01-29T12:49:57.517Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:49:57.523Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:49:57.527Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:49:57.527Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T12:49:59.550Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2484) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*