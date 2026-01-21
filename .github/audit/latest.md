# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T13:26:50.836Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T13:26:15.753Z] ========================================
[2026-01-21T13:26:15.755Z] Discord Bot Execution Log
[2026-01-21T13:26:15.755Z] Environment: GitHub Actions
[2026-01-21T13:26:15.755Z] Node Version: v20.19.6
[2026-01-21T13:26:15.755Z] ========================================
[2026-01-21T13:26:15.755Z] Environment Variables Check:
[2026-01-21T13:26:15.755Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T13:26:15.755Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.755Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T13:26:15.755Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T13:26:15.756Z] 
Multi-Channel Configuration:
[2026-01-21T13:26:15.756Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.756Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.756Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.756Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.756Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.756Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.756Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.756Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.756Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T13:26:15.756Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T13:26:15.756Z] 
Data Files Check:
[2026-01-21T13:26:15.757Z] .github/data/new_jobs.json: ✅ Exists (10 items, 159075 bytes)
[2026-01-21T13:26:15.772Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1975972 bytes)
[2026-01-21T13:26:15.772Z] 
========================================
[2026-01-21T13:26:15.772Z] Starting Enhanced Discord Bot...
[2026-01-21T13:26:15.772Z] ========================================
[2026-01-21T13:26:16.246Z] [BOT] ✅ Loaded V2 database: 3442 jobs
[2026-01-21T13:26:16.746Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T13:26:16.747Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T13:26:16.747Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T13:26:16.907Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Software Engineer, Infrastructure  at anthropic
[2026-01-21T13:26:16.912Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T13:26:16.913Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T13:26:16.913Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T13:26:16.914Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T13:26:16.914Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T13:26:16.917Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T13:26:16.918Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Infrastructure " @ anthropic
[2026-01-21T13:26:16.918Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T13:26:16.922Z] [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T13:26:17.233Z] [BOT] ✅ Posted message: Senior Software Engineer, Infrastructure  @ anthropic in #ai-jobs
  ✅ Industry: Senior Software Engineer, Infrastructure  @ anthropic
[2026-01-21T13:26:17.235Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Infrastructure  @ anthropic → category channel (1 total channels)
[2026-01-21T13:26:17.235Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-21T13:26:17.237Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T13:26:17.241Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
[2026-01-21T13:26:17.241Z] [BOT] ✅ Archiving complete: 4 archived, 3439 active
[2026-01-21T13:26:17.265Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:18.766Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Infrastructure  @ anthropic (instance #1)
[2026-01-21T13:26:18.767Z] [BOT] 💾 BEFORE ARCHIVING: 3440 jobs in database
[2026-01-21T13:26:18.769Z] [BOT] ✅ No jobs to archive (all 3440 jobs within 7-day window)
[2026-01-21T13:26:18.790Z] [BOT] 💾 Saved posted_jobs.json: 3440 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:18.790Z] [BOT] 📍 [ROUTING] "Staff+ Software Engineer, Infrastructure" @ anthropic
[2026-01-21T13:26:18.790Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T13:26:19.047Z] [BOT] ✅ Posted message: Staff+ Software Engineer, Infrastructure @ anthropic in #ai-jobs
  ✅ Industry: Staff+ Software Engineer, Infrastructure @ anthropic
[2026-01-21T13:26:19.048Z] [BOT] 💾 Added channel posting: Staff+ Software Engineer, Infrastructure @ anthropic → category channel (1 total channels)
[2026-01-21T13:26:19.048Z] [BOT] 💾 BEFORE ARCHIVING: 3441 jobs in database
[2026-01-21T13:26:19.050Z] [BOT] ✅ No jobs to archive (all 3441 jobs within 7-day window)
[2026-01-21T13:26:19.073Z] [BOT] 💾 Saved posted_jobs.json: 3441 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:20.574Z] [BOT] 💾 Marked as posted: Staff+ Software Engineer, Infrastructure @ anthropic (instance #1)
[2026-01-21T13:26:20.575Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-21T13:26:20.577Z] [BOT] ✅ No jobs to archive (all 3442 jobs within 7-day window)
[2026-01-21T13:26:20.600Z] [BOT] 💾 Saved posted_jobs.json: 3442 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:20.600Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Model Evaluations" @ anthropic
[2026-01-21T13:26:20.600Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, nonTechMatch (using ai)
[2026-01-21T13:26:20.776Z] [BOT] ✅ Posted message: Technical Program Manager, Model Evaluations @ anthropic in #ai-jobs
  ✅ Industry: Technical Program Manager, Model Evaluations @ anthropic
[2026-01-21T13:26:20.777Z] [BOT] 💾 Added channel posting: Technical Program Manager, Model Evaluations @ anthropic → category channel (1 total channels)
[2026-01-21T13:26:20.777Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-21T13:26:20.779Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-21T13:26:20.801Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:22.302Z] [BOT] 💾 Marked as posted: Technical Program Manager, Model Evaluations @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-21T13:26:22.305Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-21T13:26:22.325Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:22.326Z] [BOT] 📍 [ROUTING] "Senior Manager, Large Customer Sales (Pharma)" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-21T13:26:22.326Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T13:26:22.524Z] [BOT] ✅ Posted message: Senior Manager, Large Customer Sales (Pharma) @ reddit in #ai-jobs
[2026-01-21T13:26:22.524Z] [BOT] ✅ Industry: Senior Manager, Large Customer Sales (Pharma) @ reddit
[2026-01-21T13:26:22.525Z] [BOT] 💾 Added channel posting: Senior Manager, Large Customer Sales (Pharma) @ reddit → category channel (1 total channels)
[2026-01-21T13:26:22.526Z] [BOT] 💾 BEFORE ARCHIVING: 3445 jobs in database
[2026-01-21T13:26:22.528Z] [BOT] ✅ No jobs to archive (all 3445 jobs within 7-day window)
[2026-01-21T13:26:22.549Z] [BOT] 💾 Saved posted_jobs.json: 3445 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:24.238Z] [BOT] ✅ Posted message: Senior Manager, Large Customer Sales (Pharma) @ reddit in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T13:26:24.238Z] [BOT] 💾 Added channel posting: Senior Manager, Large Customer Sales (Pharma) @ reddit → location channel (2 total channels)
[2026-01-21T13:26:24.238Z] [BOT] 💾 BEFORE ARCHIVING: 3445 jobs in database
[2026-01-21T13:26:24.241Z] [BOT] ✅ No jobs to archive (all 3445 jobs within 7-day window)
[2026-01-21T13:26:24.262Z] [BOT] 💾 Saved posted_jobs.json: 3445 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:25.763Z] [BOT] 💾 Marked as posted: Senior Manager, Large Customer Sales (Pharma) @ reddit (instance #1)
💾 BEFORE ARCHIVING: 3446 jobs in database
[2026-01-21T13:26:25.766Z] [BOT] ✅ No jobs to archive (all 3446 jobs within 7-day window)
[2026-01-21T13:26:25.791Z] [BOT] 💾 Saved posted_jobs.json: 3446 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:28.793Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T13:26:28.793Z] [BOT] 📍 [ROUTING] "Staff+ Software Engineer, Databases" @ anthropic
   Category: TECH (matched: "software")
[2026-01-21T13:26:28.794Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T13:26:29.086Z] [BOT] ✅ Posted message: Staff+ Software Engineer, Databases @ anthropic in #tech-jobs
  ✅ Industry: Staff+ Software Engineer, Databases @ anthropic
[2026-01-21T13:26:29.087Z] [BOT] 💾 Added channel posting: Staff+ Software Engineer, Databases @ anthropic → category channel (1 total channels)
[2026-01-21T13:26:29.087Z] [BOT] 💾 BEFORE ARCHIVING: 3447 jobs in database
[2026-01-21T13:26:29.089Z] [BOT] ✅ No jobs to archive (all 3447 jobs within 7-day window)
[2026-01-21T13:26:29.114Z] [BOT] 💾 Saved posted_jobs.json: 3447 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:30.616Z] [BOT] 💾 Marked as posted: Staff+ Software Engineer, Databases @ anthropic (instance #1)
[2026-01-21T13:26:30.616Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-21T13:26:30.618Z] [BOT] ✅ No jobs to archive (all 3448 jobs within 7-day window)
[2026-01-21T13:26:30.640Z] [BOT] 💾 Saved posted_jobs.json: 3448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:30.640Z] [BOT] 📍 [ROUTING] "Staff+ Software Engineer, Data Infrastructure" @ anthropic
   Category: TECH (matched: "software")
[2026-01-21T13:26:30.641Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T13:26:30.914Z] [BOT] ✅ Posted message: Staff+ Software Engineer, Data Infrastructure @ anthropic in #tech-jobs
[2026-01-21T13:26:30.915Z] [BOT] ✅ Industry: Staff+ Software Engineer, Data Infrastructure @ anthropic
[2026-01-21T13:26:30.916Z] [BOT] 💾 Added channel posting: Staff+ Software Engineer, Data Infrastructure @ anthropic → category channel (1 total channels)
[2026-01-21T13:26:30.916Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-21T13:26:30.918Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-21T13:26:30.939Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:32.441Z] [BOT] 💾 Marked as posted: Staff+ Software Engineer, Data Infrastructure @ anthropic (instance #1)
[2026-01-21T13:26:32.442Z] [BOT] 💾 BEFORE ARCHIVING: 3450 jobs in database
[2026-01-21T13:26:32.444Z] [BOT] ✅ No jobs to archive (all 3450 jobs within 7-day window)
[2026-01-21T13:26:32.466Z] [BOT] 💾 Saved posted_jobs.json: 3450 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:32.467Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Safeguards" @ anthropic
[2026-01-21T13:26:32.467Z] [BOT] Category: TECH (matched: "project-management")
   Channel: tech-jobs (1462...4987)
[2026-01-21T13:26:32.720Z] [BOT] ✅ Posted message: Technical Program Manager, Safeguards @ anthropic in #tech-jobs
  ✅ Industry: Technical Program Manager, Safeguards @ anthropic
[2026-01-21T13:26:32.721Z] [BOT] 💾 Added channel posting: Technical Program Manager, Safeguards @ anthropic → category channel (1 total channels)
[2026-01-21T13:26:32.721Z] [BOT] 💾 BEFORE ARCHIVING: 3451 jobs in database
[2026-01-21T13:26:32.723Z] [BOT] ✅ No jobs to archive (all 3451 jobs within 7-day window)
[2026-01-21T13:26:32.744Z] [BOT] 💾 Saved posted_jobs.json: 3451 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:34.245Z] [BOT] 💾 Marked as posted: Technical Program Manager, Safeguards @ anthropic (instance #1)
[2026-01-21T13:26:34.245Z] [BOT] 💾 BEFORE ARCHIVING: 3452 jobs in database
[2026-01-21T13:26:34.247Z] [BOT] ✅ No jobs to archive (all 3452 jobs within 7-day window)
[2026-01-21T13:26:34.269Z] [BOT] 💾 Saved posted_jobs.json: 3452 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:34.269Z] [BOT] 📍 [ROUTING] "Nuclear Analysis Technician C / Engineering Technicians" @ ORG_41a6741einghouse Electric Company
   Category: TECH (matched: "engineer/engineering")
[2026-01-21T13:26:34.269Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T13:26:34.528Z] [BOT] ✅ Posted message: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company in #tech-jobs
[2026-01-21T13:26:34.528Z] [BOT] ✅ Industry: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company
[2026-01-21T13:26:34.529Z] [BOT] 💾 Added channel posting: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company → category channel (1 total channels)
[2026-01-21T13:26:34.529Z] [BOT] 💾 BEFORE ARCHIVING: 3453 jobs in database
[2026-01-21T13:26:34.531Z] [BOT] ✅ No jobs to archive (all 3453 jobs within 7-day window)
[2026-01-21T13:26:34.553Z] [BOT] 💾 Saved posted_jobs.json: 3453 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:36.367Z] [BOT] ✅ Posted message: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T13:26:36.367Z] [BOT] 💾 Added channel posting: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company → location channel (2 total channels)
[2026-01-21T13:26:36.367Z] [BOT] 💾 BEFORE ARCHIVING: 3453 jobs in database
[2026-01-21T13:26:36.370Z] [BOT] ✅ No jobs to archive (all 3453 jobs within 7-day window)
[2026-01-21T13:26:36.391Z] [BOT] 💾 Saved posted_jobs.json: 3453 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:37.892Z] [BOT] 💾 Marked as posted: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company (instance #1)
[2026-01-21T13:26:37.892Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-21T13:26:37.895Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-21T13:26:37.920Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:37.920Z] [BOT] 📍 [ROUTING] "Director, Federal Sales" @ figma
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T13:26:38.205Z] [BOT] ✅ Posted message: Director, Federal Sales @ figma in #tech-jobs
[2026-01-21T13:26:38.205Z] [BOT] ✅ Industry: Director, Federal Sales @ figma
[2026-01-21T13:26:38.206Z] [BOT] 💾 Added channel posting: Director, Federal Sales @ figma → category channel (1 total channels)
[2026-01-21T13:26:38.206Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-21T13:26:38.209Z] [BOT] ✅ No jobs to archive (all 3455 jobs within 7-day window)
[2026-01-21T13:26:38.232Z] [BOT] 💾 Saved posted_jobs.json: 3455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:39.734Z] [BOT] 💾 Marked as posted: Director, Federal Sales @ figma (instance #1)
💾 BEFORE ARCHIVING: 3456 jobs in database
[2026-01-21T13:26:39.737Z] [BOT] ✅ No jobs to archive (all 3456 jobs within 7-day window)
[2026-01-21T13:26:39.759Z] [BOT] 💾 Saved posted_jobs.json: 3456 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:42.761Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T13:26:42.761Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend - Healthcare" @ ORG_3acb0a4a
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T13:26:42.964Z] [BOT] ✅ Posted message: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a in #JID_fb739488
[2026-01-21T13:26:42.964Z] [BOT] ✅ Industry: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a
[2026-01-21T13:26:42.965Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a → category channel (1 total channels)
[2026-01-21T13:26:42.965Z] [BOT] 💾 BEFORE ARCHIVING: 3457 jobs in database
[2026-01-21T13:26:42.967Z] [BOT] ✅ No jobs to archive (all 3457 jobs within 7-day window)
[2026-01-21T13:26:42.988Z] [BOT] 💾 Saved posted_jobs.json: 3457 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:44.491Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a (instance #1)
[2026-01-21T13:26:44.491Z] [BOT] 💾 BEFORE ARCHIVING: 3458 jobs in database
[2026-01-21T13:26:44.493Z] [BOT] ✅ No jobs to archive (all 3458 jobs within 7-day window)
[2026-01-21T13:26:44.514Z] [BOT] 💾 Saved posted_jobs.json: 3458 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T13:26:47.515Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T13:26:47.516Z] [BOT] ⏭️  Skipping duplicate: JID_09ee84c1 (posted within 7 days)
[2026-01-21T13:26:47.516Z] [BOT] ⏭️  Skipping duplicate: JID_4a38c3e5 (posted within 7 days)
[2026-01-21T13:26:47.517Z] [BOT] ⏭️  Skipping duplicate: JID_02ba5dd4 (posted within 7 days)
[2026-01-21T13:26:47.517Z] [BOT] ⏭️  Skipping duplicate: JID_80718343 (posted within 7 days)
[2026-01-21T13:26:47.517Z] [BOT] ⏭️  Skipping duplicate: JID_124ec8bf (posted within 7 days)
[2026-01-21T13:26:47.517Z] [BOT] ⏭️  Skipping duplicate: JID_a973aebd (posted within 7 days)
[2026-01-21T13:26:47.518Z] [BOT] ⏭️  Skipping duplicate: JID_b003e995 (posted within 7 days)
[2026-01-21T13:26:47.518Z] [BOT] ⏭️  Skipping duplicate: JID_35ed794f (posted within 7 days)
[2026-01-21T13:26:47.518Z] [BOT] ⏭️  Skipping duplicate: JID_e207b359 (posted within 7 days)
[2026-01-21T13:26:47.518Z] [BOT] ⏭️  Skipping duplicate: JID_99d6db30 (posted within 7 days)
[2026-01-21T13:26:47.675Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-21T13:26:47.858Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T13:26:47.937Z] [BOT] 📂 Loaded 5895 existing routing entries
[2026-01-21T13:26:48.013Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5905
   Timestamp: 2026-01-21T13:26:47.990Z
[2026-01-21T13:26:48.013Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 12
   Successful: 12
[2026-01-21T13:26:48.013Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-21T13:26:48.014Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 1 posts
     4. #JID_ead674af: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T13:26:48.014Z] [BOT] [STATS] Channel stats saved
[2026-01-21T13:26:50.038Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*