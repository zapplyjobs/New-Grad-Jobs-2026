# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T02:23:29.845Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T02:22:51.936Z] ========================================
[2026-01-29T02:22:51.938Z] Discord Bot Execution Log
[2026-01-29T02:22:51.938Z] Environment: GitHub Actions
[2026-01-29T02:22:51.939Z] Node Version: v20.20.0
[2026-01-29T02:22:51.939Z] ========================================
[2026-01-29T02:22:51.939Z] Environment Variables Check:
[2026-01-29T02:22:51.939Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T02:22:51.939Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.939Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T02:22:51.939Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T02:22:51.939Z] 
Multi-Channel Configuration:
[2026-01-29T02:22:51.939Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.939Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.940Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.940Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.940Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.940Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.940Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.940Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.940Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T02:22:51.940Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T02:22:51.940Z] 
Data Files Check:
[2026-01-29T02:22:51.941Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T02:22:51.941Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T02:22:51.941Z] 
========================================
[2026-01-29T02:22:51.941Z] Starting Enhanced Discord Bot...
[2026-01-29T02:22:51.941Z] ========================================
[2026-01-29T02:22:52.455Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T02:22:52.943Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T02:22:52.943Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T02:22:52.943Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T02:22:53.062Z] [BOT] ✅ Loaded pending queue: 3031 total (2981 pending, 50 enriched, 0 posted)
[2026-01-29T02:22:53.062Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T02:22:53.062Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T02:22:53.065Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T02:22:53.065Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
[2026-01-29T02:22:53.065Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-01-29T02:22:53.184Z] [BOT] ✅ Loaded pending queue: 3031 total (2981 pending, 50 enriched, 0 posted)
[2026-01-29T02:22:53.374Z] [BOT] ✅ Saved pending queue: 3029 total (2981 pending, 48 enriched, 0 posted)
[2026-01-29T02:22:53.375Z] [BOT] 🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 48 jobs (2 blacklisted)
[2026-01-29T02:22:53.375Z] [BOT] 📋 After data quality filter: 48 jobs (0 invalid)
[2026-01-29T02:22:53.376Z] [BOT] 📋 After multi-location grouping: 46 unique jobs to post
[2026-01-29T02:22:53.376Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
[2026-01-29T02:22:53.376Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T02:22:53.380Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T02:22:53.380Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T02:22:53.381Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T02:22:53.398Z] [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T02:22:53.801Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T02:22:53.802Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T02:22:53.802Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:22:53.803Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T02:22:53.803Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:22:53.803Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T02:22:53.803Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T02:22:53.803Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:22:53.812Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:22:53.812Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:22:55.594Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T02:22:55.594Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:22:55.595Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T02:22:55.595Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:22:55.595Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:22:55.598Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:22:55.598Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:22:57.098Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T02:22:57.446Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T02:22:57.446Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:22:57.447Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T02:22:57.447Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:22:57.447Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:22:57.449Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:22:57.449Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:22:59.211Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T02:22:59.212Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:22:59.212Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T02:22:59.212Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:22:59.212Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T02:22:59.212Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:22:59.214Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:00.714Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T02:23:01.000Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T02:23:01.001Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:01.001Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T02:23:01.001Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T02:23:01.001Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:01.003Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:23:01.003Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:02.505Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T02:23:02.505Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T02:23:02.676Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T02:23:02.676Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:02.677Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T02:23:02.677Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:23:02.677Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T02:23:02.677Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:02.679Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:23:02.679Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:04.180Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
[2026-01-29T02:23:04.180Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T02:23:04.405Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T02:23:04.405Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
[2026-01-29T02:23:04.405Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:04.405Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T02:23:04.406Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:23:04.406Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T02:23:04.406Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:04.407Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:23:04.408Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:05.909Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
[2026-01-29T02:23:05.909Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T02:23:06.139Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T02:23:06.139Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T02:23:06.139Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:06.139Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T02:23:06.140Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:23:06.140Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T02:23:06.140Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:06.143Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:23:06.143Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:10.644Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T02:23:10.645Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T02:23:10.929Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T02:23:10.929Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T02:23:10.929Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:10.930Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T02:23:10.930Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:23:10.930Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T02:23:10.930Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T02:23:10.930Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:10.932Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:23:10.932Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:14.043Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T02:23:14.043Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:14.044Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:23:14.044Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:14.046Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:23:14.046Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:15.547Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T02:23:15.547Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T02:23:15.703Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
[2026-01-29T02:23:15.704Z] [BOT] ✅ Industry: Software Integration Engineer @ Q-CTRL
💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
[2026-01-29T02:23:15.704Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:15.704Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T02:23:15.704Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:23:15.705Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T02:23:15.705Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:15.707Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:17.207Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T02:23:17.207Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T02:23:17.487Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T02:23:17.487Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:17.488Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T02:23:17.488Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:23:17.488Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T02:23:17.488Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:17.490Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:23:17.490Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:21.992Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T02:23:21.992Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
[2026-01-29T02:23:21.992Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T02:23:22.292Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T02:23:22.292Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:22.293Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T02:23:22.293Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:23:22.293Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T02:23:22.293Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:22.295Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:23:22.295Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T02:23:26.796Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T02:23:26.798Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T02:23:26.898Z] [BOT] 📂 Loaded 9791 existing routing entries
[2026-01-29T02:23:27.025Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T02:23:27.026Z] [BOT] Total entries: 9801
   Timestamp: 2026-01-29T02:23:26.978Z
[2026-01-29T02:23:27.026Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T02:23:27.026Z] [BOT] Total attempts: 15
   Successful: 13
   Failed: 0
   Skipped: 2
[2026-01-29T02:23:27.026Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-29T02:23:27.026Z] [BOT] Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-29T02:23:27.027Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T02:23:27.027Z] [BOT] [STATS] Channel stats saved
[2026-01-29T02:23:27.027Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T02:23:27.028Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T02:23:27.028Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T02:23:27.034Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T02:23:27.038Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T02:23:27.038Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T02:23:29.062Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*