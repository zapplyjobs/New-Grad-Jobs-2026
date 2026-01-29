# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T09:45:50.274Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T09:45:11.969Z] ========================================
[2026-01-29T09:45:11.971Z] Discord Bot Execution Log
[2026-01-29T09:45:11.971Z] Environment: GitHub Actions
[2026-01-29T09:45:11.971Z] Node Version: v20.20.0
[2026-01-29T09:45:11.971Z] ========================================
[2026-01-29T09:45:11.971Z] Environment Variables Check:
[2026-01-29T09:45:11.971Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T09:45:11.972Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.972Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T09:45:11.972Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T09:45:11.972Z] 
Multi-Channel Configuration:
[2026-01-29T09:45:11.972Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.972Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.972Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.972Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.972Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.972Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.972Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.973Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.973Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T09:45:11.973Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T09:45:11.973Z] 
Data Files Check:
[2026-01-29T09:45:11.973Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T09:45:11.974Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T09:45:11.974Z] 
========================================
[2026-01-29T09:45:11.974Z] Starting Enhanced Discord Bot...
[2026-01-29T09:45:11.974Z] ========================================
[2026-01-29T09:45:12.527Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:13.121Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T09:45:13.122Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T09:45:13.122Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T09:45:13.238Z] [BOT] ✅ Loaded pending queue: 3040 total (2990 pending, 50 enriched, 0 posted)
[2026-01-29T09:45:13.238Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T09:45:13.238Z] [BOT] [BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T09:45:13.241Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T09:45:13.241Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T09:45:13.242Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T09:45:13.243Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T09:45:13.243Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
[2026-01-29T09:45:13.243Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T09:45:13.247Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T09:45:13.247Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T09:45:13.247Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:45:13.264Z] [BOT ERROR] (node:2603) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T09:45:15.076Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T09:45:15.076Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T09:45:15.076Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T09:45:15.076Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:15.077Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:15.077Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:15.077Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T09:45:15.078Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:45:15.078Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:15.084Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:15.084Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:16.873Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T09:45:16.873Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:16.874Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:16.874Z] [BOT] 💾 DISK STATE: 29 jobs on disk
[2026-01-29T09:45:16.874Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:16.874Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T09:45:16.874Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:16.876Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:16.876Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:18.378Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
[2026-01-29T09:45:18.378Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:45:18.628Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T09:45:18.628Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
[2026-01-29T09:45:18.628Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:18.629Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:18.629Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:18.629Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T09:45:18.629Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:18.631Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:18.631Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:20.439Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T09:45:20.439Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:20.439Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:20.440Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:20.440Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:45:20.440Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:20.441Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:20.441Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:21.943Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-29T09:45:21.943Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:45:22.138Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T09:45:22.138Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:22.138Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:22.138Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:22.139Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T09:45:22.139Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:22.141Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:22.141Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:23.641Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:45:23.855Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T09:45:23.855Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:23.856Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:23.857Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:23.859Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:23.859Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:25.360Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
[2026-01-29T09:45:25.360Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:45:25.539Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T09:45:25.539Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:25.540Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:25.540Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:25.540Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:45:25.540Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:25.543Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:27.043Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
[2026-01-29T09:45:27.043Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T09:45:27.340Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T09:45:27.340Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:27.341Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T09:45:27.341Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:27.341Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:45:27.342Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:27.343Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:27.343Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:31.846Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T09:45:31.846Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T09:45:32.032Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T09:45:32.032Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:32.033Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:32.033Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:32.033Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:45:32.033Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:32.035Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:33.811Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T09:45:33.812Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:33.812Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:33.812Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:33.813Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:33.815Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:35.316Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
[2026-01-29T09:45:35.316Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T09:45:35.568Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
[2026-01-29T09:45:35.568Z] [BOT] ✅ Industry: Software Integration Engineer @ Q-CTRL
💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:35.569Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:35.569Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:35.569Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T09:45:35.569Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:35.572Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:35.572Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:37.073Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T09:45:37.073Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T09:45:37.461Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
[2026-01-29T09:45:37.461Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:37.462Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:37.462Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:37.462Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:45:37.462Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:37.464Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:37.464Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:41.965Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T09:45:41.966Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T09:45:41.966Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T09:45:42.210Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
[2026-01-29T09:45:42.210Z] [BOT] ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T09:45:42.210Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T09:45:42.211Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T09:45:42.211Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T09:45:42.211Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:42.212Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:42.213Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T09:45:46.714Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T09:45:46.715Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T09:45:46.824Z] [BOT] 📂 Loaded 9951 existing routing entries
[2026-01-29T09:45:46.950Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T09:45:46.950Z] [BOT] Total entries: 9961
   Timestamp: 2026-01-29T09:45:46.900Z
[2026-01-29T09:45:46.951Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T09:45:46.951Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T09:45:46.951Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T09:45:46.952Z] [BOT] Last cleanup: Never
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
[2026-01-29T09:45:46.957Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T09:45:46.961Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T09:45:46.961Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T09:45:48.979Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2603) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*