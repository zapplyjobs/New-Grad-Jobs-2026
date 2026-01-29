# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T05:27:03.422Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T05:26:26.634Z] ========================================
[2026-01-29T05:26:26.636Z] Discord Bot Execution Log
[2026-01-29T05:26:26.636Z] Environment: GitHub Actions
[2026-01-29T05:26:26.636Z] Node Version: v20.20.0
[2026-01-29T05:26:26.636Z] ========================================
[2026-01-29T05:26:26.636Z] Environment Variables Check:
[2026-01-29T05:26:26.636Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T05:26:26.636Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.636Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T05:26:26.636Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T05:26:26.636Z] 
Multi-Channel Configuration:
[2026-01-29T05:26:26.636Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.637Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.637Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.637Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.637Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.637Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.637Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.637Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.637Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T05:26:26.637Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T05:26:26.637Z] 
Data Files Check:
[2026-01-29T05:26:26.638Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T05:26:26.638Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T05:26:26.638Z] 
========================================
[2026-01-29T05:26:26.638Z] Starting Enhanced Discord Bot...
[2026-01-29T05:26:26.638Z] ========================================
[2026-01-29T05:26:27.164Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:26:27.871Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T05:26:27.872Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T05:26:27.872Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T05:26:28.009Z] [BOT] ✅ Loaded pending queue: 3039 total (2989 pending, 50 enriched, 0 posted)
[2026-01-29T05:26:28.009Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T05:26:28.011Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T05:26:28.012Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T05:26:28.012Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T05:26:28.013Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-29T05:26:28.013Z] [BOT] 📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T05:26:28.017Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T05:26:28.018Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T05:26:28.018Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:26:28.034Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T05:26:28.275Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
  ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T05:26:28.275Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T05:26:28.276Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:28.276Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:26:28.277Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:28.277Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:26:28.277Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:28.283Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:28.283Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:30.254Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T05:26:30.254Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:30.255Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:26:30.255Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:30.255Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T05:26:30.255Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:26:30.255Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:30.258Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:30.258Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:31.759Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:26:32.010Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T05:26:32.010Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:32.011Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:26:32.011Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:32.011Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:32.013Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:32.013Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:34.172Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T05:26:34.173Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:34.173Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:26:34.173Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:34.174Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:26:34.174Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:34.175Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:34.175Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:35.677Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-29T05:26:35.677Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:26:35.843Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
[2026-01-29T05:26:35.843Z] [BOT] 💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:35.844Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:26:35.844Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:35.844Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:26:35.844Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:35.846Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:37.347Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T05:26:37.348Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:26:37.510Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T05:26:37.510Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:37.511Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:37.511Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T05:26:37.511Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:37.513Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:37.513Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:39.015Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:26:39.229Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T05:26:39.229Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:39.230Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:26:39.230Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:39.230Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:26:39.230Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:39.232Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:39.232Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:40.734Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T05:26:40.920Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T05:26:40.920Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:40.921Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:26:40.921Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:40.921Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:26:40.921Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:40.923Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:45.425Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T05:26:45.426Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
[2026-01-29T05:26:45.426Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T05:26:45.783Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
  ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
[2026-01-29T05:26:45.783Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:45.784Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:26:45.784Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:45.784Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:26:45.784Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:45.787Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:45.787Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:47.478Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T05:26:47.478Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:47.479Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:26:47.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:47.479Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:47.481Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:47.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:48.983Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T05:26:48.983Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T05:26:49.158Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T05:26:49.158Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:49.159Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T05:26:49.159Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:49.159Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T05:26:49.159Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:49.161Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:49.161Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:50.662Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-29T05:26:50.662Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T05:26:50.937Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T05:26:50.937Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:50.938Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:26:50.938Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:50.938Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:50.940Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:50.940Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:26:55.443Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T05:26:55.443Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T05:26:55.443Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T05:26:55.689Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T05:26:55.690Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:26:55.690Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T05:26:55.690Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T05:26:55.690Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T05:26:55.690Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:26:55.693Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:26:55.693Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T05:27:00.194Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T05:27:00.195Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T05:27:00.300Z] [BOT] 📂 Loaded 9831 existing routing entries
[2026-01-29T05:27:00.421Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T05:27:00.421Z] [BOT] Total entries: 9841
   Timestamp: 2026-01-29T05:27:00.374Z
[2026-01-29T05:27:00.422Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
[2026-01-29T05:27:00.422Z] [BOT] Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T05:27:00.422Z] [BOT] [STATS] Channel stats saved
[2026-01-29T05:27:00.422Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T05:27:00.428Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T05:27:00.431Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T05:27:00.431Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T05:27:02.450Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*