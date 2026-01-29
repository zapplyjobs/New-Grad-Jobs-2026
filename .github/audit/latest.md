# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T08:54:08.647Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T08:53:31.001Z] ========================================
[2026-01-29T08:53:31.003Z] Discord Bot Execution Log
[2026-01-29T08:53:31.003Z] Environment: GitHub Actions
[2026-01-29T08:53:31.003Z] Node Version: v20.20.0
[2026-01-29T08:53:31.003Z] ========================================
[2026-01-29T08:53:31.003Z] Environment Variables Check:
[2026-01-29T08:53:31.003Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T08:53:31.003Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.003Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T08:53:31.004Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T08:53:31.004Z] 
Multi-Channel Configuration:
[2026-01-29T08:53:31.004Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.004Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.004Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.004Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.004Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.004Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.004Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.004Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.004Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T08:53:31.004Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T08:53:31.005Z] 
Data Files Check:
[2026-01-29T08:53:31.005Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T08:53:31.006Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T08:53:31.006Z] 
========================================
[2026-01-29T08:53:31.006Z] Starting Enhanced Discord Bot...
[2026-01-29T08:53:31.006Z] ========================================
[2026-01-29T08:53:31.519Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:53:31.967Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T08:53:31.968Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T08:53:31.968Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T08:53:32.101Z] [BOT] ✅ Loaded pending queue: 3040 total (2990 pending, 50 enriched, 0 posted)
[2026-01-29T08:53:32.105Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T08:53:32.106Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T08:53:32.106Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T08:53:32.106Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T08:53:32.107Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T08:53:32.108Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T08:53:32.108Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T08:53:32.111Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T08:53:32.112Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T08:53:32.112Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:53:32.129Z] [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T08:53:32.394Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
  ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T08:53:32.395Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T08:53:32.395Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:32.395Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:53:32.396Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:32.396Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T08:53:32.396Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:53:32.396Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:32.402Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:53:32.402Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:34.274Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T08:53:34.274Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:34.275Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:53:34.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:34.275Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T08:53:34.275Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:34.278Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:35.779Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
[2026-01-29T08:53:35.779Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:53:36.351Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T08:53:36.351Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:36.351Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:53:36.351Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:36.352Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:53:36.352Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:36.353Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:53:36.354Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:39.282Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T08:53:39.282Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:39.283Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:53:39.283Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:39.285Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:40.787Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-29T08:53:40.787Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:53:40.963Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T08:53:40.964Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:40.964Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:53:40.964Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:40.965Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:53:40.965Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:40.966Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:53:40.967Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:42.468Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T08:53:42.468Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:53:42.634Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T08:53:42.634Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:42.635Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:53:42.635Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:42.635Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T08:53:42.635Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:42.637Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:53:42.637Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:44.138Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
[2026-01-29T08:53:44.138Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:53:44.318Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T08:53:44.318Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:44.319Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:53:44.319Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:44.319Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:44.321Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:53:44.321Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:45.823Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T08:53:46.010Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T08:53:46.010Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:46.011Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:53:46.011Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:46.011Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:53:46.011Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:46.013Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:50.515Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T08:53:50.515Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T08:53:50.853Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T08:53:50.853Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:50.854Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:53:50.854Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:50.855Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:53:50.855Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:50.857Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:53:50.857Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:52.739Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T08:53:52.739Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:52.740Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:53:52.740Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:52.740Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:53:52.740Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:52.744Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:54.246Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T08:53:54.246Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T08:53:54.501Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T08:53:54.501Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:54.502Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T08:53:54.502Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:54.502Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:54.504Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T08:53:56.006Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-29T08:53:56.006Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T08:53:56.267Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T08:53:56.267Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:53:56.268Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:53:56.268Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:53:56.268Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:53:56.270Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:53:56.270Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:54:00.772Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T08:54:00.772Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T08:54:00.772Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T08:54:00.986Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T08:54:00.986Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:54:00.987Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:54:00.987Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T08:54:00.987Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T08:54:00.987Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:54:00.989Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:54:00.989Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T08:54:05.491Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T08:54:05.492Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T08:54:05.599Z] [BOT] 📂 Loaded 9931 existing routing entries
[2026-01-29T08:54:05.725Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T08:54:05.725Z] [BOT] Total entries: 9941
   Timestamp: 2026-01-29T08:54:05.675Z
[2026-01-29T08:54:05.726Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 13
[2026-01-29T08:54:05.726Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T08:54:05.726Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-29T08:54:05.726Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-29T08:54:05.726Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T08:54:05.727Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T08:54:05.731Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T08:54:05.732Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T08:54:05.736Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T08:54:05.736Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T08:54:07.755Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2483) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*