# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T15:10:38.114Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T15:10:01.823Z] ========================================
[2026-01-29T15:10:01.825Z] Discord Bot Execution Log
[2026-01-29T15:10:01.825Z] Environment: GitHub Actions
[2026-01-29T15:10:01.825Z] Node Version: v20.20.0
[2026-01-29T15:10:01.825Z] ========================================
[2026-01-29T15:10:01.825Z] Environment Variables Check:
[2026-01-29T15:10:01.825Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T15:10:01.825Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.825Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T15:10:01.826Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T15:10:01.826Z] 
Multi-Channel Configuration:
[2026-01-29T15:10:01.826Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.826Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.826Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.826Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.826Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.826Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.826Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.826Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.826Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T15:10:01.826Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T15:10:01.827Z] 
Data Files Check:
[2026-01-29T15:10:01.827Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T15:10:01.828Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T15:10:01.828Z] 
========================================
[2026-01-29T15:10:01.828Z] Starting Enhanced Discord Bot...
[2026-01-29T15:10:01.828Z] ========================================
[2026-01-29T15:10:02.354Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:10:02.950Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T15:10:02.951Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T15:10:02.951Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T15:10:03.076Z] [BOT] ✅ Loaded pending queue: 3052 total (3002 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T15:10:03.079Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T15:10:03.079Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T15:10:03.079Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T15:10:03.080Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T15:10:03.081Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T15:10:03.081Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-29T15:10:03.081Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T15:10:03.085Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T15:10:03.085Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T15:10:03.085Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:10:03.102Z] [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T15:10:03.318Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
  ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T15:10:03.318Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T15:10:03.318Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:03.319Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:10:03.319Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:03.319Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:10:03.320Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:03.326Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:03.326Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:05.014Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T15:10:05.015Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:05.015Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:10:05.015Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:05.016Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:10:05.016Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:05.018Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:05.018Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:06.519Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:10:06.821Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T15:10:06.821Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:06.822Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:10:06.822Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:06.822Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:10:06.822Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:06.824Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:06.824Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:08.760Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T15:10:08.760Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:08.760Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:10:08.761Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:10:08.761Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:08.762Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:08.763Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:10.264Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:10:10.438Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T15:10:10.438Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:10.439Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:10:10.439Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:10.439Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:10.441Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:10.441Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:11.942Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
   Category: TECH (matched: "analytics")
[2026-01-29T15:10:11.942Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:10:12.167Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T15:10:12.168Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
[2026-01-29T15:10:12.168Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:12.168Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:10:12.169Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:12.169Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:12.171Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:12.171Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:13.672Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
[2026-01-29T15:10:13.672Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:10:13.922Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T15:10:13.922Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:13.923Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:10:13.923Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:13.923Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:10:13.923Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:13.925Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:13.925Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:15.426Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2026-01-29T15:10:15.426Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:10:15.602Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T15:10:15.602Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-29T15:10:15.602Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:15.603Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:10:15.603Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:15.603Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:10:15.603Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:15.606Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:15.606Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:20.107Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T15:10:20.107Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T15:10:20.360Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T15:10:20.360Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:20.360Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:10:20.361Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:10:20.361Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:20.363Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:20.363Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:22.071Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T15:10:22.071Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:22.072Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:10:22.072Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:22.072Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:22.075Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:22.075Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:23.575Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
[2026-01-29T15:10:23.575Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T15:10:23.884Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T15:10:23.884Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:23.885Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:23.885Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:10:23.885Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:23.887Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:23.888Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:25.389Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T15:10:25.389Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T15:10:25.567Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T15:10:25.567Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
[2026-01-29T15:10:25.567Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:25.568Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:10:25.568Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:25.568Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:25.571Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:30.072Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T15:10:30.072Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
[2026-01-29T15:10:30.072Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T15:10:30.355Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T15:10:30.355Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:30.356Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:10:30.356Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:10:30.356Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:10:30.356Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:30.358Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:30.359Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:10:34.860Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T15:10:34.861Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T15:10:34.965Z] [BOT] 📂 Loaded 10071 existing routing entries
[2026-01-29T15:10:35.097Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T15:10:35.097Z] [BOT] Total entries: 10081
   Timestamp: 2026-01-29T15:10:35.042Z
[2026-01-29T15:10:35.097Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T15:10:35.098Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
[2026-01-29T15:10:35.098Z] [BOT] Channels used: 5
   Top channels:
[2026-01-29T15:10:35.098Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T15:10:35.098Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:10:35.104Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:10:35.109Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:10:35.109Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T15:10:37.128Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2540) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*