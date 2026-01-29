# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T06:29:48.161Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T06:29:12.735Z] ========================================
[2026-01-29T06:29:12.737Z] Discord Bot Execution Log
[2026-01-29T06:29:12.737Z] Environment: GitHub Actions
[2026-01-29T06:29:12.737Z] Node Version: v20.20.0
[2026-01-29T06:29:12.737Z] ========================================
[2026-01-29T06:29:12.737Z] Environment Variables Check:
[2026-01-29T06:29:12.737Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T06:29:12.737Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.738Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T06:29:12.738Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T06:29:12.738Z] 
Multi-Channel Configuration:
[2026-01-29T06:29:12.738Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.738Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.738Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.738Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.738Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.738Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.738Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.738Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.739Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T06:29:12.739Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T06:29:12.739Z] 
Data Files Check:
[2026-01-29T06:29:12.739Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T06:29:12.740Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T06:29:12.740Z] 
========================================
[2026-01-29T06:29:12.740Z] Starting Enhanced Discord Bot...
[2026-01-29T06:29:12.740Z] ========================================
[2026-01-29T06:29:13.288Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:29:13.822Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T06:29:13.822Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T06:29:13.822Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T06:29:13.945Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[2026-01-29T06:29:13.945Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T06:29:13.945Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T06:29:13.948Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T06:29:13.948Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T06:29:13.948Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T06:29:13.950Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T06:29:13.950Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-29T06:29:13.950Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T06:29:13.954Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T06:29:13.954Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T06:29:13.954Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:29:13.972Z] [BOT ERROR] (node:2529) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T06:29:14.156Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T06:29:14.156Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T06:29:14.157Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T06:29:14.157Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:14.158Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:29:14.158Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:14.158Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:29:14.158Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:14.165Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:14.165Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:15.821Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T06:29:15.822Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:15.822Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:29:15.822Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:15.823Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T06:29:15.823Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:15.826Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:15.826Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:17.326Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:29:17.478Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T06:29:17.478Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:17.479Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:29:17.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:17.479Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:17.481Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:17.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:19.166Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T06:29:19.166Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:19.167Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:29:19.167Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:19.167Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:29:19.167Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:19.169Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:19.169Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:20.670Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:29:20.801Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T06:29:20.802Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:20.802Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:29:20.803Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T06:29:20.803Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:20.804Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:22.306Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T06:29:22.306Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:29:22.499Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T06:29:22.500Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:22.500Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:29:22.501Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:22.501Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:29:22.501Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:22.502Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:22.503Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:24.004Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
[2026-01-29T06:29:24.004Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:29:24.192Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T06:29:24.193Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:24.193Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:29:24.193Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:24.194Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T06:29:24.194Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:24.195Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:24.196Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:25.696Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2026-01-29T06:29:25.696Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T06:29:26.054Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T06:29:26.054Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:26.055Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:29:26.055Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T06:29:26.055Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:26.057Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:26.057Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:30.558Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T06:29:30.559Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T06:29:30.805Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T06:29:30.805Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:30.805Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:29:30.806Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:30.806Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:29:30.806Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:30.807Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:32.521Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T06:29:32.521Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:32.522Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:29:32.522Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:32.522Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:29:32.522Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:32.523Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:32.524Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:34.024Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T06:29:34.024Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T06:29:34.351Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T06:29:34.351Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:34.352Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:29:34.353Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:34.353Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:29:34.353Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:34.355Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:34.355Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:35.856Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-29T06:29:35.856Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T06:29:36.002Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T06:29:36.002Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:36.003Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:29:36.003Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:36.003Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:36.007Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:36.007Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:40.508Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T06:29:40.509Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T06:29:40.723Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T06:29:40.723Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:40.724Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T06:29:40.724Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T06:29:40.724Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:40.726Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:40.726Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T06:29:45.227Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T06:29:45.229Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T06:29:45.330Z] [BOT] 📂 Loaded 9861 existing routing entries
[2026-01-29T06:29:45.457Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T06:29:45.457Z] [BOT] Total entries: 9871
   Timestamp: 2026-01-29T06:29:45.406Z
[2026-01-29T06:29:45.458Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T06:29:45.458Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T06:29:45.458Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T06:29:45.458Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-29T06:29:45.458Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-29T06:29:45.458Z] [BOT] 5. #💰・finance-jobs: 1 posts
[2026-01-29T06:29:45.459Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T06:29:45.459Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T06:29:45.467Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T06:29:45.467Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T06:29:45.467Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T06:29:45.469Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T06:29:45.469Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T06:29:47.489Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2529) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*