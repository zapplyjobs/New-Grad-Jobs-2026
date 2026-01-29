# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T04:20:25.801Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T04:19:49.857Z] ========================================
[2026-01-29T04:19:49.859Z] Discord Bot Execution Log
[2026-01-29T04:19:49.859Z] Environment: GitHub Actions
[2026-01-29T04:19:49.859Z] Node Version: v20.20.0
[2026-01-29T04:19:49.859Z] ========================================
[2026-01-29T04:19:49.859Z] Environment Variables Check:
[2026-01-29T04:19:49.859Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T04:19:49.860Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.860Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T04:19:49.860Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T04:19:49.860Z] 
Multi-Channel Configuration:
[2026-01-29T04:19:49.860Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.860Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.860Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.860Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.860Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.860Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.860Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.861Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.861Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T04:19:49.861Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T04:19:49.861Z] 
Data Files Check:
[2026-01-29T04:19:49.862Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T04:19:49.862Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T04:19:49.862Z] 
========================================
[2026-01-29T04:19:49.862Z] Starting Enhanced Discord Bot...
[2026-01-29T04:19:49.862Z] ========================================
[2026-01-29T04:19:50.398Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:19:50.892Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T04:19:50.892Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T04:19:50.893Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T04:19:51.023Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T04:19:51.026Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T04:19:51.026Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T04:19:51.027Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T04:19:51.028Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T04:19:51.028Z] [BOT] (2 grouped as same job with different locations)
[2026-01-29T04:19:51.028Z] [BOT] 📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T04:19:51.034Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T04:19:51.034Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T04:19:51.034Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:19:51.062Z] [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T04:19:51.267Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T04:19:51.267Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T04:19:51.267Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T04:19:51.267Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:19:51.268Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:19:51.268Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:19:51.269Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:19:51.269Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:19:51.276Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:19:51.276Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:19:52.990Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T04:19:52.991Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:19:52.991Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:19:52.991Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:19:52.992Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T04:19:52.992Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:19:52.994Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:19:52.994Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:19:54.495Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
[2026-01-29T04:19:54.495Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:19:54.713Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T04:19:54.713Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:19:54.714Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:19:54.714Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:19:54.714Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:19:54.716Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:19:54.716Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:19:56.463Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T04:19:56.463Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:19:56.464Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:19:56.464Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:19:56.464Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:19:56.466Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:19:56.466Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:19:57.967Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:19:58.148Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T04:19:58.149Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:19:58.149Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:19:58.150Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:19:58.150Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:19:58.150Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:19:58.152Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:19:58.152Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:19:59.653Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T04:19:59.654Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:19:59.854Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T04:19:59.855Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:19:59.855Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:19:59.856Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:19:59.856Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:19:59.856Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:19:59.858Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:19:59.858Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:20:01.360Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:20:01.582Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T04:20:01.583Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:20:01.583Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:20:01.583Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:20:01.584Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:20:01.584Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:20:01.585Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:20:01.585Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:20:03.086Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:20:03.275Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T04:20:03.275Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:20:03.276Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:20:03.276Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:20:03.277Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:20:03.278Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:20:03.279Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:20:07.781Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T04:20:07.781Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T04:20:08.085Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T04:20:08.085Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:20:08.086Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:20:08.086Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T04:20:08.086Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:20:08.089Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:20:08.089Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:20:09.976Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T04:20:09.976Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:20:09.977Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:20:09.977Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:20:09.977Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:20:09.977Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:20:09.980Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:20:09.980Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:20:11.481Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
[2026-01-29T04:20:11.481Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T04:20:11.677Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T04:20:11.677Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:20:11.678Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:20:11.678Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:20:11.678Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:20:11.679Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:20:11.681Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:20:11.681Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:20:13.182Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T04:20:13.182Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T04:20:13.409Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T04:20:13.409Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
[2026-01-29T04:20:13.409Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:20:13.410Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:20:13.410Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:20:13.410Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:20:13.410Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:20:13.412Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:20:13.412Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:20:17.914Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T04:20:17.914Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T04:20:17.914Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T04:20:18.227Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
[2026-01-29T04:20:18.228Z] [BOT] ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:20:18.228Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:20:18.228Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:20:18.229Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:20:18.229Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:20:18.230Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:20:18.231Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:20:22.732Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T04:20:22.733Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T04:20:22.840Z] [BOT] 📂 Loaded 9811 existing routing entries
[2026-01-29T04:20:22.961Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T04:20:22.961Z] [BOT] Total entries: 9821
   Timestamp: 2026-01-29T04:20:22.914Z
[2026-01-29T04:20:22.962Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T04:20:22.962Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T04:20:22.962Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T04:20:22.962Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-29T04:20:22.962Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T04:20:22.963Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:20:22.968Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:20:22.972Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:20:22.972Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T04:20:24.991Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*