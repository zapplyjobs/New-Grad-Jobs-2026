# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T13:57:00.502Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T13:56:23.167Z] ========================================
[2026-01-29T13:56:23.169Z] Discord Bot Execution Log
[2026-01-29T13:56:23.169Z] Environment: GitHub Actions
[2026-01-29T13:56:23.169Z] Node Version: v20.20.0
[2026-01-29T13:56:23.169Z] ========================================
[2026-01-29T13:56:23.169Z] Environment Variables Check:
[2026-01-29T13:56:23.169Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T13:56:23.169Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.169Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T13:56:23.170Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T13:56:23.170Z] 
Multi-Channel Configuration:
[2026-01-29T13:56:23.170Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.170Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.170Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.170Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.170Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.170Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.170Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.170Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.170Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T13:56:23.170Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T13:56:23.171Z] 
Data Files Check:
[2026-01-29T13:56:23.171Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T13:56:23.172Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T13:56:23.172Z] 
========================================
[2026-01-29T13:56:23.172Z] Starting Enhanced Discord Bot...
[2026-01-29T13:56:23.172Z] ========================================
[2026-01-29T13:56:23.704Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:56:24.463Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T13:56:24.463Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T13:56:24.464Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T13:56:24.592Z] [BOT] ✅ Loaded pending queue: 3050 total (3000 pending, 50 enriched, 0 posted)
[2026-01-29T13:56:24.592Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T13:56:24.593Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T13:56:24.595Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T13:56:24.595Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T13:56:24.595Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T13:56:24.596Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T13:56:24.597Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-29T13:56:24.597Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T13:56:24.601Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T13:56:24.601Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T13:56:24.601Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:56:24.618Z] [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T13:56:24.839Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T13:56:24.840Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T13:56:24.840Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T13:56:24.840Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:24.841Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:56:24.841Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:24.841Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T13:56:24.842Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:24.848Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:24.848Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:26.572Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T13:56:26.572Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:26.573Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:56:26.573Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:26.573Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T13:56:26.573Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:26.575Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:26.575Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:28.076Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
[2026-01-29T13:56:28.076Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:56:28.361Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T13:56:28.361Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:28.361Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:56:28.362Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:28.362Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:28.364Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:30.227Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T13:56:30.227Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:30.228Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:56:30.228Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:30.230Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:30.230Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:31.732Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:56:31.993Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T13:56:31.993Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:31.994Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:56:31.994Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:31.994Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:31.996Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:33.496Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T13:56:33.496Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:56:33.738Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T13:56:33.738Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:33.738Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:56:33.739Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:33.739Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T13:56:33.739Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:33.741Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:35.242Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
[2026-01-29T13:56:35.242Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:56:35.422Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T13:56:35.422Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:35.423Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:56:35.423Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:35.423Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:35.425Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:35.425Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:36.927Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
[2026-01-29T13:56:36.927Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T13:56:37.282Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T13:56:37.282Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:37.282Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:56:37.282Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:37.283Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T13:56:37.283Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:37.284Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:41.786Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T13:56:41.787Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
[2026-01-29T13:56:41.787Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T13:56:42.165Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T13:56:42.165Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:42.166Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:56:42.166Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:42.166Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:42.168Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:42.168Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:43.869Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T13:56:43.870Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:43.870Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:56:43.871Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T13:56:43.871Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:43.873Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:43.873Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:45.375Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T13:56:45.375Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T13:56:45.721Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T13:56:45.721Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:45.722Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:45.722Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:45.725Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:45.725Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:47.227Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-29T13:56:47.227Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T13:56:47.490Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
[2026-01-29T13:56:47.490Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:47.491Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T13:56:47.491Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:47.491Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T13:56:47.491Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:47.493Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:47.493Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:51.995Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T13:56:51.995Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T13:56:51.995Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T13:56:52.280Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T13:56:52.281Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:52.281Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T13:56:52.281Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T13:56:52.281Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T13:56:52.281Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:52.283Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:52.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T13:56:56.785Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T13:56:56.787Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T13:56:56.894Z] [BOT] 📂 Loaded 10041 existing routing entries
[2026-01-29T13:56:57.020Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T13:56:57.020Z] [BOT] Total entries: 10051
   Timestamp: 2026-01-29T13:56:56.970Z
[2026-01-29T13:56:57.021Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T13:56:57.021Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T13:56:57.021Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-29T13:56:57.022Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T13:56:57.022Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T13:56:57.027Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T13:56:57.031Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T13:56:57.031Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T13:56:59.050Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2498) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*