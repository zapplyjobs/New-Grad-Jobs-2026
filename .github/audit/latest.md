# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T10:31:09.366Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T10:30:33.159Z] ========================================
[2026-01-29T10:30:33.161Z] Discord Bot Execution Log
[2026-01-29T10:30:33.161Z] Environment: GitHub Actions
[2026-01-29T10:30:33.161Z] Node Version: v20.20.0
[2026-01-29T10:30:33.161Z] ========================================
[2026-01-29T10:30:33.161Z] Environment Variables Check:
[2026-01-29T10:30:33.161Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T10:30:33.161Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.161Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T10:30:33.161Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T10:30:33.161Z] 
Multi-Channel Configuration:
[2026-01-29T10:30:33.161Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.162Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.162Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.162Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.162Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.162Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.162Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.162Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.162Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T10:30:33.162Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T10:30:33.162Z] 
Data Files Check:
[2026-01-29T10:30:33.163Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T10:30:33.163Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T10:30:33.163Z] 
========================================
[2026-01-29T10:30:33.163Z] Starting Enhanced Discord Bot...
[2026-01-29T10:30:33.163Z] ========================================
[2026-01-29T10:30:33.708Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:30:34.097Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T10:30:34.097Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T10:30:34.098Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T10:30:34.223Z] [BOT] ✅ Loaded pending queue: 3040 total (2990 pending, 50 enriched, 0 posted)
[2026-01-29T10:30:34.224Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T10:30:34.224Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T10:30:34.226Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T10:30:34.227Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T10:30:34.227Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T10:30:34.228Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T10:30:34.228Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T10:30:34.228Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T10:30:34.232Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T10:30:34.233Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T10:30:34.233Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:30:34.250Z] [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T10:30:34.483Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T10:30:34.483Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T10:30:34.484Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T10:30:34.484Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:34.485Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:30:34.485Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:30:34.485Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T10:30:34.485Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:30:34.486Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:34.492Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:30:34.493Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:36.326Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T10:30:36.327Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:36.327Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:30:36.327Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:30:36.328Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T10:30:36.328Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:36.330Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:37.830Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
[2026-01-29T10:30:37.831Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:30:38.062Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T10:30:38.062Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:38.063Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:30:38.063Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:30:38.063Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:30:38.063Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:38.065Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:30:38.065Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:39.744Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T10:30:39.744Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:39.745Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:39.747Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:30:39.747Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:41.247Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
[2026-01-29T10:30:41.248Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:30:41.544Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T10:30:41.544Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:41.545Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:30:41.545Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:41.555Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:43.057Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T10:30:43.057Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:30:43.290Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T10:30:43.290Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:43.291Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:30:43.291Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:30:43.291Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:43.293Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:30:43.293Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:44.795Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
[2026-01-29T10:30:44.795Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:30:45.103Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T10:30:45.104Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:45.104Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:30:45.105Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:30:45.105Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:45.106Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:30:45.107Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:46.608Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:30:46.954Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T10:30:46.955Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:46.955Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:30:46.956Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T10:30:46.956Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:46.958Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:30:46.958Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:51.459Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T10:30:51.459Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T10:30:51.758Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T10:30:51.759Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:51.759Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:30:51.759Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:30:51.759Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:30:51.760Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:51.763Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:30:51.763Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:53.397Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T10:30:53.397Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:53.398Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:30:53.398Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:30:53.398Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:30:53.399Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:53.401Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:30:53.401Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:54.902Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T10:30:54.902Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T10:30:55.085Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T10:30:55.085Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:55.086Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:30:55.087Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:30:55.087Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:55.089Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T10:30:56.590Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T10:30:56.590Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T10:30:56.857Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T10:30:56.858Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:30:56.858Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:30:56.858Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:30:56.859Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:30:56.861Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:30:56.861Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:31:01.363Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T10:31:01.363Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
[2026-01-29T10:31:01.363Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T10:31:01.656Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
[2026-01-29T10:31:01.656Z] [BOT] ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:31:01.657Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:31:01.657Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:31:01.657Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:31:01.657Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:31:01.660Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:31:01.660Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:31:06.163Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T10:31:06.164Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T10:31:06.279Z] [BOT] 📂 Loaded 9971 existing routing entries
[2026-01-29T10:31:06.408Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9981
[2026-01-29T10:31:06.408Z] [BOT] Timestamp: 2026-01-29T10:31:06.358Z
[2026-01-29T10:31:06.408Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T10:31:06.408Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T10:31:06.409Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-29T10:31:06.409Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T10:31:06.409Z] [BOT] [STATS] Channel stats saved
[2026-01-29T10:31:06.409Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:31:06.414Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:31:06.419Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:31:06.419Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T10:31:08.439Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*