# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T10:52:14.250Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T10:51:38.345Z] ========================================
[2026-01-29T10:51:38.347Z] Discord Bot Execution Log
[2026-01-29T10:51:38.347Z] Environment: GitHub Actions
[2026-01-29T10:51:38.347Z] Node Version: v20.20.0
[2026-01-29T10:51:38.347Z] ========================================
[2026-01-29T10:51:38.347Z] Environment Variables Check:
[2026-01-29T10:51:38.347Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T10:51:38.347Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.347Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T10:51:38.347Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T10:51:38.347Z] 
Multi-Channel Configuration:
[2026-01-29T10:51:38.347Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.348Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.348Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.348Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.348Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.348Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.348Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.348Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.348Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T10:51:38.348Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T10:51:38.348Z] 
Data Files Check:
[2026-01-29T10:51:38.349Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T10:51:38.349Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T10:51:38.349Z] 
========================================
[2026-01-29T10:51:38.350Z] Starting Enhanced Discord Bot...
[2026-01-29T10:51:38.350Z] ========================================
[2026-01-29T10:51:38.855Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:51:39.262Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T10:51:39.263Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T10:51:39.263Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T10:51:39.379Z] [BOT] ✅ Loaded pending queue: 3047 total (2997 pending, 50 enriched, 0 posted)
[2026-01-29T10:51:39.380Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T10:51:39.382Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T10:51:39.382Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T10:51:39.383Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T10:51:39.384Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T10:51:39.384Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T10:51:39.384Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T10:51:39.388Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T10:51:39.388Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T10:51:39.388Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:51:39.404Z] [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T10:51:39.714Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
  ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T10:51:39.714Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T10:51:39.715Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:39.715Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:51:39.715Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:51:39.715Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:51:39.716Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:39.722Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:51:39.722Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:41.436Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T10:51:41.436Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:41.437Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:51:41.437Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:51:41.437Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T10:51:41.437Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:41.440Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:51:41.440Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:42.942Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:51:43.312Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T10:51:43.312Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:43.312Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:51:43.312Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:51:43.313Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:43.314Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:51:43.314Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:45.110Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T10:51:45.110Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:45.111Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:51:45.111Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:45.113Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:51:45.113Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:46.614Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-29T10:51:46.615Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:51:46.798Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T10:51:46.798Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
[2026-01-29T10:51:46.798Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:46.798Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:51:46.798Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:51:46.799Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:51:46.799Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:46.800Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:48.302Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T10:51:48.302Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:51:48.477Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T10:51:48.477Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:48.478Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:51:48.478Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:51:48.478Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:48.480Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:51:48.480Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:49.982Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
[2026-01-29T10:51:49.982Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:51:50.237Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T10:51:50.237Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
[2026-01-29T10:51:50.238Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:50.238Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:51:50.239Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:50.241Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:51:50.241Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:51.741Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
[2026-01-29T10:51:51.742Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T10:51:51.980Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T10:51:51.980Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:51.981Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:51:51.981Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:51:51.981Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:51:51.981Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:51.983Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:56.485Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T10:51:56.485Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
[2026-01-29T10:51:56.485Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T10:51:56.723Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T10:51:56.723Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:56.723Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:51:56.723Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:51:56.724Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:51:56.724Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:56.726Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:51:56.726Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:58.440Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T10:51:58.440Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:51:58.441Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:51:58.441Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:51:58.441Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:51:58.441Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:51:58.444Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T10:51:59.945Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T10:51:59.945Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T10:52:00.194Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T10:52:00.195Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:52:00.195Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:52:00.195Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:52:00.195Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:52:00.198Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T10:52:01.700Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T10:52:01.700Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T10:52:01.872Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T10:52:01.873Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:52:01.873Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T10:52:01.873Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:52:01.874Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:52:01.876Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:52:01.876Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:52:06.378Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T10:52:06.378Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T10:52:06.378Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T10:52:06.659Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T10:52:06.659Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:52:06.660Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T10:52:06.660Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T10:52:06.660Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T10:52:06.660Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:52:06.663Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:52:06.663Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T10:52:11.165Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T10:52:11.166Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T10:52:11.266Z] [BOT] 📂 Loaded 9981 existing routing entries
[2026-01-29T10:52:11.396Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T10:52:11.396Z] [BOT] Total entries: 9991
   Timestamp: 2026-01-29T10:52:11.338Z
[2026-01-29T10:52:11.397Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T10:52:11.397Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T10:52:11.397Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-29T10:52:11.397Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T10:52:11.397Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T10:52:11.397Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T10:52:11.398Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T10:52:11.401Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T10:52:11.401Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T10:52:13.421Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*