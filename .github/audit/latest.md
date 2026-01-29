# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T14:23:09.884Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T14:22:33.148Z] ========================================
[2026-01-29T14:22:33.150Z] Discord Bot Execution Log
[2026-01-29T14:22:33.150Z] Environment: GitHub Actions
[2026-01-29T14:22:33.150Z] Node Version: v20.20.0
[2026-01-29T14:22:33.150Z] ========================================
[2026-01-29T14:22:33.150Z] Environment Variables Check:
[2026-01-29T14:22:33.150Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T14:22:33.150Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.150Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T14:22:33.150Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T14:22:33.150Z] 
Multi-Channel Configuration:
[2026-01-29T14:22:33.150Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.150Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.150Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.150Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.151Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.151Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.151Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.151Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.151Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T14:22:33.151Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T14:22:33.151Z] 
Data Files Check:
[2026-01-29T14:22:33.151Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T14:22:33.152Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T14:22:33.152Z] 
========================================
[2026-01-29T14:22:33.152Z] Starting Enhanced Discord Bot...
[2026-01-29T14:22:33.152Z] ========================================
[2026-01-29T14:22:33.671Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:34.160Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T14:22:34.160Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T14:22:34.160Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T14:22:34.293Z] [BOT] ✅ Loaded pending queue: 3051 total (3001 pending, 50 enriched, 0 posted)
[2026-01-29T14:22:34.294Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T14:22:34.296Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T14:22:34.296Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T14:22:34.297Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T14:22:34.298Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T14:22:34.298Z] [BOT] (2 grouped as same job with different locations)
[2026-01-29T14:22:34.298Z] [BOT] 📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T14:22:34.302Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T14:22:34.302Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T14:22:34.302Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T14:22:34.320Z] [BOT ERROR] (node:2529) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T14:22:34.512Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T14:22:34.512Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T14:22:34.513Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T14:22:34.513Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:34.514Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:34.514Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:34.514Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T14:22:34.514Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:34.521Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T14:22:34.521Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:36.212Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T14:22:36.212Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:36.213Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:36.213Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:36.214Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T14:22:36.214Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:36.217Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T14:22:36.217Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:37.718Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
[2026-01-29T14:22:37.718Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T14:22:37.887Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T14:22:37.887Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:37.887Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:37.887Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:37.888Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T14:22:37.888Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:37.889Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T14:22:37.889Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:39.530Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T14:22:39.530Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:39.531Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:39.531Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:39.531Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:39.533Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:41.034Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
[2026-01-29T14:22:41.035Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T14:22:41.195Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T14:22:41.195Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:41.196Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:41.196Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:41.196Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:41.197Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:42.698Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T14:22:42.698Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T14:22:42.854Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T14:22:42.854Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:42.855Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:42.855Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:42.855Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T14:22:42.855Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:42.857Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:44.359Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
[2026-01-29T14:22:44.359Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T14:22:44.570Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T14:22:44.571Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:44.571Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T14:22:44.572Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:44.572Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T14:22:44.572Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:44.574Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:46.076Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2026-01-29T14:22:46.076Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T14:22:46.257Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T14:22:46.257Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:46.258Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:46.258Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:46.258Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T14:22:46.258Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:46.260Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T14:22:46.260Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:50.762Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T14:22:50.762Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T14:22:52.432Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T14:22:52.432Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T14:22:52.432Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:52.433Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T14:22:52.433Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:52.433Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T14:22:52.433Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:52.435Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T14:22:52.435Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:54.071Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T14:22:54.071Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:54.072Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:54.072Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:54.072Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T14:22:54.072Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:54.074Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:55.575Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
[2026-01-29T14:22:55.575Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T14:22:55.796Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T14:22:55.796Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:55.797Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:55.797Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:55.797Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T14:22:55.797Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T14:22:55.797Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:55.799Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T14:22:57.300Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T14:22:57.300Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T14:22:57.562Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T14:22:57.562Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:22:57.563Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T14:22:57.563Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:22:57.563Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T14:22:57.563Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T14:22:57.563Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:22:57.566Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T14:23:02.068Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T14:23:02.069Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T14:23:02.069Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T14:23:02.386Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
[2026-01-29T14:23:02.386Z] [BOT] ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:23:02.387Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T14:23:02.387Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T14:23:02.387Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T14:23:02.387Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:23:02.390Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T14:23:02.390Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T14:23:06.890Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T14:23:06.891Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T14:23:07.010Z] [BOT] 📂 Loaded 10051 existing routing entries
[2026-01-29T14:23:07.131Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10061
[2026-01-29T14:23:07.132Z] [BOT] Timestamp: 2026-01-29T14:23:07.090Z
[2026-01-29T14:23:07.132Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T14:23:07.132Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T14:23:07.132Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
[2026-01-29T14:23:07.133Z] [BOT] 4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T14:23:07.133Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T14:23:07.138Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T14:23:07.143Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T14:23:07.143Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T14:23:09.163Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2529) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*