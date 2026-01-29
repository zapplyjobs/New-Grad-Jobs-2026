# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T07:11:09.087Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T07:10:33.902Z] ========================================
[2026-01-29T07:10:33.903Z] Discord Bot Execution Log
[2026-01-29T07:10:33.903Z] Environment: GitHub Actions
[2026-01-29T07:10:33.904Z] Node Version: v20.20.0
[2026-01-29T07:10:33.904Z] ========================================
[2026-01-29T07:10:33.904Z] Environment Variables Check:
[2026-01-29T07:10:33.904Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T07:10:33.904Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.904Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T07:10:33.904Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T07:10:33.904Z] 
Multi-Channel Configuration:
[2026-01-29T07:10:33.904Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.904Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.904Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.904Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.905Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.905Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.905Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.905Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.905Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T07:10:33.905Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T07:10:33.905Z] 
Data Files Check:
[2026-01-29T07:10:33.906Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T07:10:33.906Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T07:10:33.906Z] 
========================================
[2026-01-29T07:10:33.906Z] Starting Enhanced Discord Bot...
[2026-01-29T07:10:33.906Z] ========================================
[2026-01-29T07:10:34.426Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:10:34.884Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T07:10:34.885Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T07:10:34.885Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T07:10:35.002Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[2026-01-29T07:10:35.002Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T07:10:35.002Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T07:10:35.005Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T07:10:35.005Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T07:10:35.005Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T07:10:35.006Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T07:10:35.007Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T07:10:35.007Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T07:10:35.011Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T07:10:35.011Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T07:10:35.011Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:10:35.027Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T07:10:35.146Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T07:10:35.146Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T07:10:35.146Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T07:10:35.147Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:35.147Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:10:35.147Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:35.147Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:10:35.148Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:35.155Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:10:35.155Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:36.808Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T07:10:36.808Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:36.809Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:36.809Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T07:10:36.809Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:36.812Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:38.313Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
[2026-01-29T07:10:38.314Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:10:38.625Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T07:10:38.625Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:38.626Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:10:38.626Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:38.626Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:10:38.626Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:38.628Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:40.320Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T07:10:40.320Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:40.321Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:10:40.321Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:40.321Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:10:40.321Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:40.323Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:10:40.323Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:41.824Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:10:42.021Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T07:10:42.021Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:42.021Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:10:42.022Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:42.022Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:42.023Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:10:42.024Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:43.525Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T07:10:43.525Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:10:43.686Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T07:10:43.686Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
[2026-01-29T07:10:43.687Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:43.687Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:10:43.687Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:43.687Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:43.689Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:10:43.689Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:45.191Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
[2026-01-29T07:10:45.191Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:10:45.375Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T07:10:45.375Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:45.376Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:10:45.376Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:45.376Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:10:45.376Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:45.378Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:10:45.378Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:46.879Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2026-01-29T07:10:46.880Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T07:10:47.082Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T07:10:47.082Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:47.083Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:10:47.083Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:47.083Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:47.085Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:10:47.085Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:51.588Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T07:10:51.588Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T07:10:51.783Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T07:10:51.784Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:51.784Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:10:51.784Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:51.784Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T07:10:51.785Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:51.786Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:10:51.786Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:53.441Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T07:10:53.442Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
[2026-01-29T07:10:53.442Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:53.442Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:10:53.442Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:53.443Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:53.445Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:54.945Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T07:10:54.946Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T07:10:55.259Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T07:10:55.259Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:55.260Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:10:55.260Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:55.260Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:55.262Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:10:56.764Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T07:10:56.765Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T07:10:56.950Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T07:10:56.950Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:10:56.951Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T07:10:56.951Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:10:56.951Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T07:10:56.951Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:10:56.954Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:10:56.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T07:11:01.456Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T07:11:01.456Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T07:11:01.643Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T07:11:01.643Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:11:01.644Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T07:11:01.644Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T07:11:01.644Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:11:01.646Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T07:11:06.149Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T07:11:06.150Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T07:11:06.257Z] [BOT] 📂 Loaded 9881 existing routing entries
[2026-01-29T07:11:06.386Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T07:11:06.387Z] [BOT] Total entries: 9891
   Timestamp: 2026-01-29T07:11:06.338Z
[2026-01-29T07:11:06.387Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T07:11:06.387Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T07:11:06.388Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
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
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T07:11:06.393Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T07:11:06.397Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T07:11:06.397Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T07:11:08.416Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*