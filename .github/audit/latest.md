# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T04:56:48.794Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T04:56:10.316Z] ========================================
[2026-01-29T04:56:10.318Z] Discord Bot Execution Log
[2026-01-29T04:56:10.318Z] Environment: GitHub Actions
[2026-01-29T04:56:10.318Z] Node Version: v20.20.0
[2026-01-29T04:56:10.318Z] ========================================
[2026-01-29T04:56:10.318Z] Environment Variables Check:
[2026-01-29T04:56:10.318Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T04:56:10.318Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.318Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T04:56:10.318Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T04:56:10.318Z] 
Multi-Channel Configuration:
[2026-01-29T04:56:10.318Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.319Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.319Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.319Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.319Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.319Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.319Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.319Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.319Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T04:56:10.319Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T04:56:10.319Z] 
Data Files Check:
[2026-01-29T04:56:10.320Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T04:56:10.320Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T04:56:10.320Z] 
========================================
[2026-01-29T04:56:10.320Z] Starting Enhanced Discord Bot...
[2026-01-29T04:56:10.320Z] ========================================
[2026-01-29T04:56:10.835Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:56:11.347Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T04:56:11.348Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T04:56:11.348Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T04:56:11.465Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[2026-01-29T04:56:11.465Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T04:56:11.468Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T04:56:11.468Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T04:56:11.469Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T04:56:11.470Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T04:56:11.470Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T04:56:11.470Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T04:56:11.474Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T04:56:11.474Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T04:56:11.474Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:56:11.491Z] [BOT ERROR] (node:2492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T04:56:11.739Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T04:56:11.739Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T04:56:11.739Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T04:56:11.739Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:11.740Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:56:11.740Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:11.740Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T04:56:11.740Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:56:11.741Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:11.747Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:56:11.747Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:13.535Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T04:56:13.535Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:13.536Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:56:13.536Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:13.536Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T04:56:13.536Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:13.540Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:15.039Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:56:15.457Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T04:56:15.457Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:15.458Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:56:15.458Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:15.458Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T04:56:15.458Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:15.460Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:56:15.460Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:17.189Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T04:56:17.189Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:17.190Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:56:17.190Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:17.190Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:56:17.190Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:17.192Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:18.693Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:56:18.867Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T04:56:18.867Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:18.867Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:56:18.868Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:18.868Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:56:18.868Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:18.870Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:20.370Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T04:56:20.371Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:56:20.634Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T04:56:20.634Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:20.635Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:56:20.635Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:20.635Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:56:20.635Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:20.637Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:22.139Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
[2026-01-29T04:56:22.139Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:56:22.389Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T04:56:22.389Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:22.390Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:56:22.390Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:22.390Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:22.392Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:56:22.392Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:23.894Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
[2026-01-29T04:56:23.894Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T04:56:24.063Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T04:56:24.064Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:24.064Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:56:24.064Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:24.065Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:24.066Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:28.568Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T04:56:28.568Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T04:56:28.872Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T04:56:28.873Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:28.873Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:56:28.873Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:28.873Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:56:28.874Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:28.876Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:56:28.876Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:30.689Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T04:56:30.690Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:30.690Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T04:56:30.690Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:30.691Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:56:30.691Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:30.693Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:56:30.693Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:32.195Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
[2026-01-29T04:56:32.195Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T04:56:32.489Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T04:56:32.490Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:32.490Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:32.491Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:32.493Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:56:32.493Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:33.995Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-29T04:56:33.995Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T04:56:34.197Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T04:56:34.197Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:34.197Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:56:34.198Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:34.198Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:56:34.198Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:34.206Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:38.708Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T04:56:38.708Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T04:56:38.709Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T04:56:40.686Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
[2026-01-29T04:56:40.686Z] [BOT] ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:40.687Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T04:56:40.687Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:40.687Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T04:56:40.687Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:40.689Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T04:56:40.689Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:45.192Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T04:56:45.193Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T04:56:45.293Z] [BOT] 📂 Loaded 9821 existing routing entries
[2026-01-29T04:56:45.416Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 9831
[2026-01-29T04:56:45.417Z] [BOT] Timestamp: 2026-01-29T04:56:45.367Z
[2026-01-29T04:56:45.417Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T04:56:45.417Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T04:56:45.418Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T04:56:45.418Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-29T04:56:45.418Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T04:56:45.419Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T04:56:45.419Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T04:56:45.425Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T04:56:45.428Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T04:56:45.428Z] [BOT] ✅ Database saved successfully
[2026-01-29T04:56:47.448Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*