# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T07:57:06.047Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T07:56:29.574Z] ========================================
[2026-01-29T07:56:29.576Z] Discord Bot Execution Log
[2026-01-29T07:56:29.576Z] Environment: GitHub Actions
[2026-01-29T07:56:29.576Z] Node Version: v20.20.0
[2026-01-29T07:56:29.576Z] ========================================
[2026-01-29T07:56:29.577Z] Environment Variables Check:
[2026-01-29T07:56:29.577Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T07:56:29.577Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.577Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T07:56:29.577Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T07:56:29.577Z] 
Multi-Channel Configuration:
[2026-01-29T07:56:29.577Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.577Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.577Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.577Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.577Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.577Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.578Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.578Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.578Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T07:56:29.578Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T07:56:29.578Z] 
Data Files Check:
[2026-01-29T07:56:29.578Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T07:56:29.579Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T07:56:29.579Z] 
========================================
[2026-01-29T07:56:29.579Z] Starting Enhanced Discord Bot...
[2026-01-29T07:56:29.579Z] ========================================
[2026-01-29T07:56:30.118Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:30.752Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T07:56:30.752Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T07:56:30.752Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T07:56:30.893Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T07:56:30.895Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T07:56:30.895Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T07:56:30.896Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T07:56:30.897Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T07:56:30.897Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T07:56:30.897Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T07:56:30.901Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T07:56:30.901Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T07:56:30.902Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:56:30.919Z] [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T07:56:31.097Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T07:56:31.098Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T07:56:31.098Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T07:56:31.098Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:31.099Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:31.099Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:31.099Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T07:56:31.099Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:56:31.100Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:31.107Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:56:31.107Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:32.893Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T07:56:32.894Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:32.894Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:32.894Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:32.895Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T07:56:32.895Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:32.898Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:34.398Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
[2026-01-29T07:56:34.399Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:56:34.579Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T07:56:34.579Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:34.579Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:34.579Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:34.580Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:34.582Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:36.432Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T07:56:36.433Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:36.433Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:36.433Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:36.434Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:36.436Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:37.937Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:56:38.165Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T07:56:38.165Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:38.166Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:38.166Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:38.166Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:56:38.166Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:38.168Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:56:38.168Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:39.669Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T07:56:39.669Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:56:39.857Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T07:56:39.857Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:39.858Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:56:39.858Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:39.858Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:39.860Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:41.362Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:56:41.548Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T07:56:41.548Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:41.549Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:41.549Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:41.549Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:41.551Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:56:41.551Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:43.054Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:56:43.263Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T07:56:43.263Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:43.263Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:56:43.264Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:43.264Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:56:43.264Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:43.266Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:56:43.266Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:47.769Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T07:56:47.769Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T07:56:48.013Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T07:56:48.013Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:48.014Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:48.014Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:48.014Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:56:48.014Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:48.017Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:49.698Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T07:56:49.698Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:49.699Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:49.699Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:49.699Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:56:49.699Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:49.702Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:56:49.702Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:51.203Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T07:56:51.204Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T07:56:51.537Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T07:56:51.538Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:51.538Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:51.538Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:51.538Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:56:51.539Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:51.542Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:56:51.542Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:53.044Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T07:56:53.044Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T07:56:53.217Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T07:56:53.217Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:53.218Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:56:53.218Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:53.218Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:53.221Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:56:53.221Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:56:57.723Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T07:56:57.723Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
[2026-01-29T07:56:57.723Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T07:56:57.970Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
[2026-01-29T07:56:57.971Z] [BOT] ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:56:57.971Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:56:57.971Z] [BOT] 💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:56:57.971Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:56:57.972Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T07:56:57.972Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:56:57.975Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:56:57.975Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:57:02.476Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T07:57:02.478Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T07:57:02.582Z] [BOT] 📂 Loaded 9901 existing routing entries
[2026-01-29T07:57:02.720Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T07:57:02.721Z] [BOT] Total entries: 9911
   Timestamp: 2026-01-29T07:57:02.663Z
[2026-01-29T07:57:02.721Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T07:57:02.722Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T07:57:02.722Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-29T07:57:02.722Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T07:57:02.722Z] [BOT] [STATS] Channel stats saved
[2026-01-29T07:57:02.722Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:57:02.730Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:57:02.734Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:57:02.734Z] [BOT] ✅ Database saved successfully
[2026-01-29T07:57:04.754Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*