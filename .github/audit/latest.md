# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T12:59:18.718Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T12:58:41.177Z] ========================================
[2026-01-29T12:58:41.179Z] Discord Bot Execution Log
[2026-01-29T12:58:41.179Z] Environment: GitHub Actions
[2026-01-29T12:58:41.179Z] Node Version: v20.20.0
[2026-01-29T12:58:41.179Z] ========================================
[2026-01-29T12:58:41.179Z] Environment Variables Check:
[2026-01-29T12:58:41.179Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T12:58:41.179Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.179Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T12:58:41.180Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T12:58:41.180Z] 
Multi-Channel Configuration:
[2026-01-29T12:58:41.180Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.180Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.180Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.180Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.180Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.180Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.180Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.180Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.180Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T12:58:41.180Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T12:58:41.180Z] 
Data Files Check:
[2026-01-29T12:58:41.181Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T12:58:41.182Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T12:58:41.182Z] 
========================================
[2026-01-29T12:58:41.182Z] Starting Enhanced Discord Bot...
[2026-01-29T12:58:41.182Z] ========================================
[2026-01-29T12:58:41.697Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:58:42.315Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T12:58:42.315Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T12:58:42.315Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T12:58:42.450Z] [BOT] ✅ Loaded pending queue: 3049 total (2999 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T12:58:42.453Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T12:58:42.453Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T12:58:42.454Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T12:58:42.455Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T12:58:42.455Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
[2026-01-29T12:58:42.455Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T12:58:42.459Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T12:58:42.460Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T12:58:42.460Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:58:42.476Z] [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T12:58:42.680Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
  ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T12:58:42.680Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T12:58:42.681Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:58:42.681Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T12:58:42.681Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:58:42.681Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:58:42.682Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:58:42.688Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:58:42.688Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:58:45.862Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T12:58:45.862Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:58:45.863Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:58:45.864Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:58:45.867Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:58:47.368Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:58:47.582Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T12:58:47.582Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:58:47.583Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:58:47.583Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:58:47.583Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:58:47.583Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:58:47.585Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:58:49.287Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T12:58:49.288Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:58:49.288Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:58:49.288Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T12:58:49.289Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:58:49.290Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:58:49.290Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:58:50.791Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-29T12:58:50.791Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:58:51.041Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T12:58:51.042Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:58:51.042Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:58:51.042Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:58:51.042Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:58:51.044Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:58:52.546Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T12:58:52.546Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:58:52.856Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T12:58:52.857Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:58:52.857Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T12:58:52.857Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:58:52.858Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:58:52.859Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:58:52.859Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:58:54.361Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
[2026-01-29T12:58:54.362Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:58:54.784Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T12:58:54.784Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:58:54.785Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T12:58:54.785Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:58:54.785Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:58:54.787Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:58:54.787Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:58:56.289Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2026-01-29T12:58:56.289Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T12:58:56.620Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T12:58:56.620Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:58:56.620Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:58:56.620Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:58:56.621Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:58:56.621Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:58:56.622Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:59:01.124Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T12:59:01.125Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T12:59:01.403Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T12:59:01.403Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:59:01.404Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T12:59:01.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:59:01.404Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:59:01.407Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:59:03.103Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T12:59:03.104Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:59:03.104Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T12:59:03.104Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:59:03.105Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T12:59:03.105Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:59:03.107Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:59:03.107Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:59:04.609Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T12:59:04.609Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T12:59:04.837Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T12:59:04.837Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:59:04.838Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T12:59:04.838Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:59:04.838Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:59:04.841Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T12:59:04.841Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T12:59:06.343Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T12:59:06.343Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T12:59:06.512Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T12:59:06.512Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:59:06.512Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T12:59:06.513Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:59:06.513Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:59:06.513Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:59:06.515Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:59:11.018Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T12:59:11.018Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T12:59:11.018Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T12:59:11.286Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T12:59:11.286Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:59:11.287Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T12:59:11.287Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T12:59:11.287Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T12:59:11.287Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:59:11.290Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:59:15.791Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T12:59:15.792Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T12:59:15.908Z] [BOT] 📂 Loaded 10021 existing routing entries
[2026-01-29T12:59:16.030Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T12:59:16.031Z] [BOT] Total entries: 10031
   Timestamp: 2026-01-29T12:59:15.989Z
[2026-01-29T12:59:16.031Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T12:59:16.032Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-29T12:59:16.032Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T12:59:16.032Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T12:59:16.037Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T12:59:16.041Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T12:59:16.041Z] [BOT] ✅ Database saved successfully
[2026-01-29T12:59:18.063Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*