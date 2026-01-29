# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T15:38:23.411Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T15:37:46.516Z] ========================================
[2026-01-29T15:37:46.518Z] Discord Bot Execution Log
[2026-01-29T15:37:46.518Z] Environment: GitHub Actions
[2026-01-29T15:37:46.518Z] Node Version: v20.20.0
[2026-01-29T15:37:46.518Z] ========================================
[2026-01-29T15:37:46.518Z] Environment Variables Check:
[2026-01-29T15:37:46.518Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T15:37:46.518Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.518Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T15:37:46.518Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T15:37:46.518Z] 
Multi-Channel Configuration:
[2026-01-29T15:37:46.519Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.519Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.519Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.519Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.519Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.519Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.519Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.519Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.519Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T15:37:46.519Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T15:37:46.519Z] 
Data Files Check:
[2026-01-29T15:37:46.520Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T15:37:46.520Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68271 bytes)
[2026-01-29T15:37:46.520Z] 
========================================
[2026-01-29T15:37:46.520Z] Starting Enhanced Discord Bot...
[2026-01-29T15:37:46.521Z] ========================================
[2026-01-29T15:37:47.066Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:37:47.959Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-29T15:37:47.959Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T15:37:47.959Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T15:37:48.077Z] [BOT] ✅ Loaded pending queue: 3053 total (3003 pending, 50 enriched, 0 posted)
[2026-01-29T15:37:48.077Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T15:37:48.079Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T15:37:48.080Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2026-01-29T15:37:48.080Z] [BOT] 📋 After data quality filter: 50 jobs (0 invalid)
[2026-01-29T15:37:48.081Z] [BOT] 📋 After multi-location grouping: 48 unique jobs to post
[2026-01-29T15:37:48.081Z] [BOT] (2 grouped as same job with different locations)
[2026-01-29T15:37:48.082Z] [BOT] 📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T15:37:48.086Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T15:37:48.086Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T15:37:48.086Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:37:48.102Z] [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T15:37:48.365Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
  ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T15:37:48.366Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T15:37:48.366Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:37:48.367Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:37:48.367Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:37:48.367Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:37:48.367Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:37:48.367Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:37:48.370Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:37:48.370Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:37:50.205Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T15:37:50.205Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
[2026-01-29T15:37:50.205Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:37:50.206Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:37:50.206Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:37:50.206Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:37:50.206Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:37:50.209Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:37:50.209Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:37:51.710Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
[2026-01-29T15:37:51.710Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:37:52.034Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
[2026-01-29T15:37:52.034Z] [BOT] ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
[2026-01-29T15:37:52.035Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:37:52.035Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:37:52.035Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:37:52.035Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:37:52.035Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:37:52.037Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:37:52.037Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:37:53.749Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T15:37:53.749Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:37:53.750Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:37:53.750Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:37:53.750Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:37:53.752Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:37:53.752Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:37:55.253Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:37:55.447Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T15:37:55.447Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:37:55.448Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T15:37:55.448Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:37:55.450Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T15:37:56.951Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T15:37:56.951Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:37:57.143Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
  ✅ Industry: Analyst – People Analytics @ ORG_03419b97
[2026-01-29T15:37:57.143Z] [BOT] 💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:37:57.144Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:37:57.144Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:37:57.144Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:37:57.144Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:37:57.146Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T15:37:58.648Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:37:58.923Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
[2026-01-29T15:37:58.923Z] [BOT] ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:37:58.923Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:37:58.924Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:37:58.924Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:37:58.926Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T15:38:00.426Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T15:38:00.581Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
[2026-01-29T15:38:00.581Z] [BOT] ✅ Industry: Software Developer @ ORG_39417f32 Allen
💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-29T15:38:00.581Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:38:00.582Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:38:00.582Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:38:00.582Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:38:00.582Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:38:00.584Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T15:38:05.086Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T15:38:05.086Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
[2026-01-29T15:38:05.086Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T15:38:05.407Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T15:38:05.408Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
[2026-01-29T15:38:05.408Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:38:05.408Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:38:05.408Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:38:05.409Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:38:05.409Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:38:05.411Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:38:05.411Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:38:07.093Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
[2026-01-29T15:38:07.093Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:38:07.094Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:38:07.094Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:38:07.094Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:38:07.094Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:38:07.096Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T15:38:08.597Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
[2026-01-29T15:38:08.597Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T15:38:09.075Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
[2026-01-29T15:38:09.075Z] [BOT] ✅ Industry: Software Integration Engineer @ Q-CTRL
💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:38:09.076Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:38:09.076Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:38:09.076Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:38:09.076Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:38:09.079Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:38:09.079Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:38:10.579Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
[2026-01-29T15:38:10.580Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T15:38:10.743Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
[2026-01-29T15:38:10.743Z] [BOT] ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T15:38:10.743Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:38:10.744Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:38:10.744Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:38:10.744Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T15:38:10.744Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:38:10.744Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:38:10.746Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:38:10.746Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:38:15.248Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T15:38:15.248Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
[2026-01-29T15:38:15.248Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T15:38:15.528Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
[2026-01-29T15:38:15.528Z] [BOT] ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:38:15.529Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T15:38:15.529Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:38:15.529Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:38:15.529Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:38:15.531Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:38:15.531Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T15:38:20.033Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T15:38:20.034Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T15:38:20.135Z] [BOT] 📂 Loaded 10081 existing routing entries
[2026-01-29T15:38:20.266Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T15:38:20.266Z] [BOT] Total entries: 10091
   Timestamp: 2026-01-29T15:38:20.209Z
[2026-01-29T15:38:20.267Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 13
[2026-01-29T15:38:20.267Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-29T15:38:20.267Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-29T15:38:20.267Z] [BOT] Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-29T15:38:20.267Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-29T15:38:20.268Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T15:38:20.268Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T15:38:20.268Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T15:38:20.269Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T15:38:20.271Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T15:38:20.271Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T15:38:22.291Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*