# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T08:33:14.405Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T08:32:37.213Z] ========================================
[2026-01-29T08:32:37.214Z] Discord Bot Execution Log
[2026-01-29T08:32:37.215Z] Environment: GitHub Actions
[2026-01-29T08:32:37.215Z] Node Version: v20.20.0
[2026-01-29T08:32:37.215Z] ========================================
[2026-01-29T08:32:37.215Z] Environment Variables Check:
[2026-01-29T08:32:37.215Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T08:32:37.215Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T08:32:37.215Z] 
Multi-Channel Configuration:
[2026-01-29T08:32:37.215Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T08:32:37.215Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T08:32:37.216Z] 
Data Files Check:
[2026-01-29T08:32:37.216Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T08:32:37.217Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T08:32:37.217Z] 
========================================
[2026-01-29T08:32:37.217Z] Starting Enhanced Discord Bot...
[2026-01-29T08:32:37.217Z] ========================================
[2026-01-29T08:32:37.664Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:32:38.490Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T08:32:38.491Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T08:32:38.491Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T08:32:38.659Z] [BOT] ✅ Loaded pending queue: 3040 total (2990 pending, 50 enriched, 0 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T08:32:38.661Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T08:32:38.662Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T08:32:38.662Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T08:32:38.663Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T08:32:38.663Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
[2026-01-29T08:32:38.663Z] [BOT] ⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T08:32:38.667Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T08:32:38.667Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T08:32:38.668Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:32:38.683Z] [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T08:32:38.892Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T08:32:38.893Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T08:32:38.893Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T08:32:38.893Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:38.894Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:32:38.894Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:32:38.894Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T08:32:38.894Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:32:38.894Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:38.900Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:32:38.900Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:40.711Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T08:32:40.712Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:40.712Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:32:40.712Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:32:40.713Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T08:32:40.713Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:40.715Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:42.217Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:32:42.529Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T08:32:42.529Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:42.530Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:32:42.530Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T08:32:42.530Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:42.532Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:44.224Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T08:32:44.224Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:44.225Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:32:44.225Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:32:44.225Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:44.227Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:45.728Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
[2026-01-29T08:32:45.729Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:32:45.925Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T08:32:45.925Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:45.926Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:32:45.926Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:32:45.926Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:45.928Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:47.428Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T08:32:47.429Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:32:47.920Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T08:32:47.921Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:47.921Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:32:47.922Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:32:47.922Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:47.924Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:49.426Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
[2026-01-29T08:32:49.426Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:32:49.670Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T08:32:49.671Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:49.671Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:32:49.672Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:32:49.672Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:49.673Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:51.175Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:32:51.363Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T08:32:51.363Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:51.364Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:32:51.364Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:32:51.364Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:51.366Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:55.868Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T08:32:55.868Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T08:32:56.274Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T08:32:56.274Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:56.275Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:32:56.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:32:56.275Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:56.278Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:58.024Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T08:32:58.024Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
[2026-01-29T08:32:58.024Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:58.025Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:32:58.025Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:32:58.025Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:32:58.025Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:58.028Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:32:59.528Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T08:32:59.888Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T08:32:59.888Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:32:59.889Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:32:59.889Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:32:59.889Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:32:59.892Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:32:59.892Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:33:01.392Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T08:33:01.393Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T08:33:01.605Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
[2026-01-29T08:33:01.606Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:33:01.607Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T08:33:01.607Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:33:01.607Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:33:01.609Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:33:06.111Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T08:33:06.111Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T08:33:06.111Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T08:33:06.386Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T08:33:06.386Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:33:06.387Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:33:06.387Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:33:06.387Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:33:06.389Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:33:10.889Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T08:33:10.891Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T08:33:11.009Z] [BOT] 📂 Loaded 9921 existing routing entries
[2026-01-29T08:33:11.124Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9931
   Timestamp: 2026-01-29T08:33:11.082Z
[2026-01-29T08:33:11.125Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T08:33:11.125Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T08:33:11.125Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
[2026-01-29T08:33:11.125Z] [BOT] 4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T08:33:11.125Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T08:33:11.125Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:33:11.131Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:33:11.135Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:33:11.135Z] [BOT] ✅ Database saved successfully
[2026-01-29T08:33:13.149Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*