# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T00:47:47.687Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T00:47:10.955Z] ========================================
[2026-01-29T00:47:10.957Z] Discord Bot Execution Log
[2026-01-29T00:47:10.957Z] Environment: GitHub Actions
[2026-01-29T00:47:10.957Z] Node Version: v20.20.0
[2026-01-29T00:47:10.957Z] ========================================
[2026-01-29T00:47:10.957Z] Environment Variables Check:
[2026-01-29T00:47:10.957Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T00:47:10.957Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.957Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T00:47:10.957Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T00:47:10.958Z] 
Multi-Channel Configuration:
[2026-01-29T00:47:10.958Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.958Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.958Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.958Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.958Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.958Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.958Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.958Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.958Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T00:47:10.958Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T00:47:10.958Z] 
Data Files Check:
[2026-01-29T00:47:10.959Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47196 bytes)
[2026-01-29T00:47:10.960Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 69212 bytes)
[2026-01-29T00:47:10.960Z] 
========================================
[2026-01-29T00:47:10.960Z] Starting Enhanced Discord Bot...
[2026-01-29T00:47:10.960Z] ========================================
[2026-01-29T00:47:11.477Z] [BOT] ✅ Loaded V2 database: 30 jobs
[2026-01-29T00:47:12.376Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T00:47:12.376Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T00:47:12.377Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T00:47:12.498Z] [BOT] ✅ Loaded pending queue: 3028 total (2978 pending, 50 enriched, 0 posted)
[2026-01-29T00:47:12.498Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Audience Activation at FOX
[2026-01-29T00:47:12.500Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T00:47:12.501Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, Chess at duolingo
[2026-01-29T00:47:12.501Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Builder Audience at figma
[2026-01-29T00:47:12.501Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Claude Code at anthropic
[2026-01-29T00:47:12.622Z] [BOT] ✅ Loaded pending queue: 3028 total (2978 pending, 50 enriched, 0 posted)
[2026-01-29T00:47:12.804Z] [BOT] ✅ Saved pending queue: 3025 total (2978 pending, 47 enriched, 0 posted)
[2026-01-29T00:47:12.804Z] [BOT] 🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 47 jobs (3 blacklisted)
[2026-01-29T00:47:12.804Z] [BOT] 📋 After data quality filter: 47 jobs (0 invalid)
[2026-01-29T00:47:12.805Z] [BOT] 📋 After multi-location grouping: 45 unique jobs to post
[2026-01-29T00:47:12.805Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-29T00:47:12.805Z] [BOT] - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T00:47:12.809Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-29T00:47:12.810Z] [BOT] 📍 [ROUTING] "Analyst – Audience Activation" @ ORG_5c1f65ea
[2026-01-29T00:47:12.810Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T00:47:12.826Z] [BOT ERROR] (node:3344) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T00:47:13.056Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #💻・tech-jobs
[2026-01-29T00:47:13.057Z] [BOT] ✅ Industry: Analyst – Audience Activation @ ORG_5c1f65ea
[2026-01-29T00:47:13.057Z] [BOT] 💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → category channel (2 total channels)
[2026-01-29T00:47:13.057Z] [BOT] 💾 BEFORE MERGE: 30 jobs in memory (cached)
[2026-01-29T00:47:13.058Z] [BOT] ✅ Loaded V2 database: 30 jobs
[2026-01-29T00:47:13.058Z] [BOT] 💾 DISK STATE: 30 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=30
[2026-01-29T00:47:13.058Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T00:47:13.058Z] [BOT] 💾 AFTER MERGE: 30 jobs (merged disk + memory)
[2026-01-29T00:47:13.059Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-29T00:47:13.064Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-29T00:47:13.064Z] [BOT] ✅ Archiving complete: 1 archived, 29 active
[2026-01-29T00:47:13.066Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:13.066Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:15.013Z] [BOT] ✅ Posted message: Analyst – Audience Activation @ ORG_5c1f65ea in #🗽・JID_98d4f0de
[2026-01-29T00:47:15.013Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Analyst – Audience Activation @ ORG_5c1f65ea → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:15.014Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:15.014Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T00:47:15.015Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:15.016Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:15.017Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:16.518Z] [BOT] 📍 [ROUTING] "Meteorologist 1" @ ORG_b83ec2d4
   Category: TECH (default)
[2026-01-29T00:47:16.518Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T00:47:16.802Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #💻・tech-jobs
  ✅ Industry: Meteorologist 1 @ ORG_b83ec2d4
[2026-01-29T00:47:16.802Z] [BOT] 💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:16.803Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T00:47:16.803Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T00:47:16.803Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:16.805Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:16.805Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:18.552Z] [BOT] ✅ Posted message: Meteorologist 1 @ ORG_b83ec2d4 in #🗽・JID_98d4f0de
[2026-01-29T00:47:18.552Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Meteorologist 1 @ ORG_b83ec2d4 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:18.552Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T00:47:18.553Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:18.553Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:18.555Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:20.055Z] [BOT] 📍 [ROUTING] "AI Performance and Efficiency Engineer" @ ORG_0890f456
[2026-01-29T00:47:20.056Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T00:47:20.228Z] [BOT] ✅ Posted message: AI Performance and Efficiency Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-29T00:47:20.228Z] [BOT] ✅ Industry: AI Performance and Efficiency Engineer @ ORG_0890f456
💾 Added channel posting: AI Performance and Efficiency Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:20.229Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T00:47:20.229Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:20.229Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T00:47:20.229Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:20.231Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:21.732Z] [BOT] 📍 [ROUTING] "Analyst – People Analytics" @ ORG_03419b97
[2026-01-29T00:47:21.732Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T00:47:21.970Z] [BOT] ✅ Posted message: Analyst – People Analytics @ ORG_03419b97 in #💻・tech-jobs
[2026-01-29T00:47:21.971Z] [BOT] ✅ Industry: Analyst – People Analytics @ ORG_03419b97
💾 Added channel posting: Analyst – People Analytics @ ORG_03419b97 → category channel (1 total channels)
[2026-01-29T00:47:21.971Z] [BOT] 💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:21.971Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T00:47:21.971Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:21.971Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T00:47:21.972Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:21.973Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:21.974Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:23.474Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad Friendly - IOS" @ ORG_56aba366
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T00:47:23.774Z] [BOT] ✅ Posted message: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366
[2026-01-29T00:47:23.774Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad Friendly - IOS @ ORG_56aba366 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:23.775Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T00:47:23.775Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:23.775Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T00:47:23.775Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:23.777Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:25.278Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_39417f32 Allen
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T00:47:25.595Z] [BOT] ✅ Posted message: Software Developer @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Software Developer @ ORG_39417f32 Allen
[2026-01-29T00:47:25.595Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_39417f32 Allen → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:25.596Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T00:47:25.596Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T00:47:25.596Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:25.598Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:30.101Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T00:47:30.101Z] [BOT] 📍 [ROUTING] "Quality and Insights Analyst" @ ORG_a4ae5447
   Category: AI (matched: "machine learning")
[2026-01-29T00:47:30.101Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T00:47:30.295Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🤖・ai-jobs
[2026-01-29T00:47:30.295Z] [BOT] ✅ Industry: Quality and Insights Analyst @ ORG_a4ae5447
💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → category channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:30.296Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T00:47:30.296Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:30.296Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T00:47:30.296Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:30.298Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:30.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:32.018Z] [BOT] ✅ Posted message: Quality and Insights Analyst @ ORG_a4ae5447 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-29T00:47:32.018Z] [BOT] 💾 Added channel posting: Quality and Insights Analyst @ ORG_a4ae5447 → location channel (2 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:32.019Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T00:47:32.019Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:32.019Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T00:47:32.019Z] [BOT] 💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T00:47:32.019Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:32.021Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:32.021Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:33.523Z] [BOT] 📍 [ROUTING] "Software Integration Engineer" @ Q-CTRL
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T00:47:33.523Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T00:47:33.731Z] [BOT] ✅ Posted message: Software Integration Engineer @ Q-CTRL in #🤖・ai-jobs
  ✅ Industry: Software Integration Engineer @ Q-CTRL
[2026-01-29T00:47:33.732Z] [BOT] 💾 Added channel posting: Software Integration Engineer @ Q-CTRL → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:33.732Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T00:47:33.732Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:33.733Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T00:47:33.733Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:33.735Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:33.735Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:35.236Z] [BOT] 📍 [ROUTING] "Solutions Architect, Applied AI (National Security)" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-29T00:47:35.236Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T00:47:35.403Z] [BOT] ✅ Posted message: Solutions Architect, Applied AI (National Security) @ anthropic in #🤖・ai-jobs
  ✅ Industry: Solutions Architect, Applied AI (National Security) @ anthropic
[2026-01-29T00:47:35.403Z] [BOT] 💾 Added channel posting: Solutions Architect, Applied AI (National Security) @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:35.404Z] [BOT] ✅ Loaded V2 database: 29 jobs
[2026-01-29T00:47:35.404Z] [BOT] 💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:35.404Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
[2026-01-29T00:47:35.405Z] [BOT] ✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:35.406Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:35.406Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:39.908Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-29T00:47:39.908Z] [BOT] 📍 [ROUTING] "Consulting Associate – Entry Level - EHS Management Information Systems" @ ORG_d41a2092
   Category: FINANCE (matched: "audit")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T00:47:40.098Z] [BOT] ✅ Posted message: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 in #💰・finance-jobs
  ✅ Industry: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092
[2026-01-29T00:47:40.098Z] [BOT] 💾 Added channel posting: Consulting Associate – Entry Level - EHS Management Information Systems @ ORG_d41a2092 → category channel (1 total channels)
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:40.099Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
[2026-01-29T00:47:40.099Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=29
[2026-01-29T00:47:40.099Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:40.101Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:40.101Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T00:47:44.604Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T00:47:44.605Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T00:47:44.706Z] [BOT] 📂 Loaded 9781 existing routing entries
[2026-01-29T00:47:44.839Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-29T00:47:44.839Z] [BOT] Total entries: 9791
   Timestamp: 2026-01-29T00:47:44.790Z
[2026-01-29T00:47:44.840Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 16
   Successful: 13
[2026-01-29T00:47:44.840Z] [BOT] Failed: 0
   Skipped: 3
[2026-01-29T00:47:44.840Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
[2026-01-29T00:47:44.841Z] [BOT] 4. #🏠・JID_ead674af: 1 posts
     5. #💰・finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-29T00:47:44.841Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 29 jobs in memory (cached)
[2026-01-29T00:47:44.847Z] [BOT] ✅ Loaded V2 database: 29 jobs
💾 DISK STATE: 29 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=29
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 29 jobs (merged disk + memory)
✅ No jobs to archive (all 29 jobs within 7-day window)
[2026-01-29T00:47:44.851Z] [BOT] 💾 Saved posted_jobs.json: 29 active jobs
[2026-01-29T00:47:44.851Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-29T00:47:46.873Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3344) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*