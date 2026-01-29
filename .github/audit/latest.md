# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T03:26:34.116Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T03:25:58.561Z] ========================================
[2026-01-29T03:25:58.562Z] Discord Bot Execution Log
[2026-01-29T03:25:58.562Z] Environment: GitHub Actions
[2026-01-29T03:25:58.562Z] Node Version: v20.20.0
[2026-01-29T03:25:58.562Z] ========================================
[2026-01-29T03:25:58.563Z] Environment Variables Check:
[2026-01-29T03:25:58.563Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T03:25:58.563Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T03:25:58.563Z] 
Multi-Channel Configuration:
[2026-01-29T03:25:58.563Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T03:25:58.563Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T03:25:58.564Z] 
Data Files Check:
[2026-01-29T03:25:58.564Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T03:25:58.565Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T03:25:58.565Z] 
========================================
[2026-01-29T03:25:58.565Z] Starting Enhanced Discord Bot...
[2026-01-29T03:25:58.565Z] ========================================
[2026-01-29T03:25:59.093Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T03:25:59.422Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T03:25:59.423Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T03:25:59.423Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T03:25:59.553Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[2026-01-29T03:25:59.554Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T03:25:59.556Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T03:25:59.556Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-01-29T03:25:59.673Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[2026-01-29T03:25:59.847Z] [BOT] ✅ Saved pending queue: 3038 total (2989 pending, 49 enriched, 0 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-29T03:25:59.847Z] [BOT] 📋 After blacklist filter: 49 jobs (1 blacklisted)
[2026-01-29T03:25:59.848Z] [BOT] 📋 After data quality filter: 49 jobs (0 invalid)
[2026-01-29T03:25:59.849Z] [BOT] 📋 After multi-location grouping: 47 unique jobs to post
[2026-01-29T03:25:59.849Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-29T03:25:59.849Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T03:25:59.853Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T03:25:59.853Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T03:25:59.853Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T03:25:59.871Z] [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T03:26:00.136Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
  ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T03:26:00.137Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T03:26:00.137Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:00.138Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T03:26:00.138Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:00.138Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T03:26:00.138Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:00.145Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:00.145Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:01.785Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T03:26:01.785Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:01.786Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T03:26:01.786Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:01.786Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T03:26:01.786Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:01.789Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:01.789Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:03.289Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
[2026-01-29T03:26:03.289Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T03:26:03.433Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T03:26:03.434Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:03.434Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T03:26:03.434Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:03.434Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T03:26:03.434Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:03.436Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:03.436Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:05.190Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T03:26:05.191Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:05.191Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T03:26:05.191Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:05.191Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T03:26:05.191Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:05.193Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:05.193Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:06.694Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T03:26:06.869Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T03:26:06.869Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:06.870Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T03:26:06.870Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:06.870Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T03:26:06.870Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:06.872Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:08.373Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T03:26:08.374Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T03:26:08.518Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T03:26:08.518Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:08.519Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T03:26:08.519Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:08.519Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:08.521Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:10.023Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T03:26:10.229Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T03:26:10.229Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:10.230Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T03:26:10.230Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:10.230Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T03:26:10.230Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:10.232Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:10.232Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:11.733Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T03:26:11.968Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T03:26:11.968Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:11.968Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T03:26:11.968Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:11.969Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:11.970Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:16.472Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T03:26:16.472Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T03:26:16.796Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T03:26:16.796Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:16.796Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T03:26:16.797Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:16.797Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:16.799Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:16.799Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:18.495Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T03:26:18.496Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:18.496Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T03:26:18.496Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:18.497Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:18.498Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:18.498Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:20.000Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
[2026-01-29T03:26:20.000Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T03:26:20.144Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T03:26:20.145Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:20.145Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:20.146Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T03:26:20.146Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T03:26:20.146Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:20.148Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:20.148Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:21.648Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T03:26:21.648Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T03:26:21.884Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T03:26:21.885Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:21.885Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T03:26:21.885Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:21.885Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T03:26:21.886Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:21.887Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:21.887Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:26.390Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T03:26:26.390Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T03:26:26.390Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T03:26:26.606Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T03:26:26.606Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:26.607Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T03:26:26.607Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T03:26:26.607Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:26.609Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T03:26:26.609Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:31.111Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T03:26:31.112Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T03:26:31.224Z] [BOT] 📂 Loaded 9801 existing routing entries
[2026-01-29T03:26:31.352Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9811
[2026-01-29T03:26:31.353Z] [BOT] Timestamp: 2026-01-29T03:26:31.313Z
[2026-01-29T03:26:31.353Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T03:26:31.353Z] [BOT] Total attempts: 14
   Successful: 13
   Failed: 0
   Skipped: 1
[2026-01-29T03:26:31.353Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
[2026-01-29T03:26:31.353Z] [BOT] Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-29T03:26:31.354Z] [BOT] 5. #💰・finance-jobs: 1 posts
[2026-01-29T03:26:31.354Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T03:26:31.354Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T03:26:31.360Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T03:26:31.365Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T03:26:31.365Z] [BOT] ✅ Database saved successfully
[2026-01-29T03:26:33.390Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*