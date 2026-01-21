# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T14:53:13.520Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T14:52:25.573Z] ========================================
[2026-01-21T14:52:25.575Z] Discord Bot Execution Log
[2026-01-21T14:52:25.575Z] Environment: GitHub Actions
[2026-01-21T14:52:25.575Z] Node Version: v20.19.6
[2026-01-21T14:52:25.575Z] ========================================
[2026-01-21T14:52:25.575Z] Environment Variables Check:
[2026-01-21T14:52:25.575Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T14:52:25.575Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.575Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T14:52:25.576Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T14:52:25.576Z] 
Multi-Channel Configuration:
[2026-01-21T14:52:25.576Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.576Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.576Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.576Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.576Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.576Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.576Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.576Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.576Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T14:52:25.576Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T14:52:25.576Z] 
Data Files Check:
[2026-01-21T14:52:25.577Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51739 bytes)
[2026-01-21T14:52:25.590Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2021398 bytes)
[2026-01-21T14:52:25.590Z] 
========================================
[2026-01-21T14:52:25.590Z] Starting Enhanced Discord Bot...
[2026-01-21T14:52:25.590Z] ========================================
[2026-01-21T14:52:26.127Z] [BOT] ✅ Loaded V2 database: 3518 jobs
[2026-01-21T14:52:26.672Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T14:52:26.672Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T14:52:26.672Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T14:52:26.794Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Dictionary Software Engineer 1 at CACI
[2026-01-21T14:52:26.797Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T14:52:26.797Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T14:52:26.798Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T14:52:26.799Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-21T14:52:26.799Z] [BOT] (6 grouped as same job with different locations)
📍 4 jobs with multiple locations:
[2026-01-21T14:52:26.799Z] [BOT] - Software Engineer I, Frontend @ Twitch: san francisco, irvine
   - Accounting Channel Partnerships Manager @ brex: new york, new york, united states, san francisco, california, united states
   - Account Executive, Mid Market @ brex: salt lake city, utah, united states, san francisco, california, united states
   -  Accounting Manager, Legal Entity Controllership @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T14:52:26.803Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-21T14:52:26.804Z] [BOT] 📍 [ROUTING] "Data Dictionary Software Engineer 1" @ ORG_1954b120
[2026-01-21T14:52:26.804Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T14:52:26.820Z] [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T14:52:27.206Z] [BOT] ✅ Posted message: Data Dictionary Software Engineer 1 @ ORG_1954b120 in #tech-jobs
  ✅ Industry: Data Dictionary Software Engineer 1 @ ORG_1954b120
[2026-01-21T14:52:27.207Z] [BOT] 💾 Added channel posting: Data Dictionary Software Engineer 1 @ ORG_1954b120 → category channel (1 total channels)
[2026-01-21T14:52:27.207Z] [BOT] 💾 BEFORE ARCHIVING: 3519 jobs in database
[2026-01-21T14:52:27.210Z] [BOT] ✅ No jobs to archive (all 3519 jobs within 7-day window)
[2026-01-21T14:52:27.236Z] [BOT] 💾 Saved posted_jobs.json: 3519 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:28.941Z] [BOT] ✅ Posted message: Data Dictionary Software Engineer 1 @ ORG_1954b120 in #JID_ead674af
[2026-01-21T14:52:28.941Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T14:52:28.942Z] [BOT] 💾 Added channel posting: Data Dictionary Software Engineer 1 @ ORG_1954b120 → location channel (2 total channels)
[2026-01-21T14:52:28.942Z] [BOT] 💾 BEFORE ARCHIVING: 3519 jobs in database
[2026-01-21T14:52:28.945Z] [BOT] ✅ No jobs to archive (all 3519 jobs within 7-day window)
[2026-01-21T14:52:28.967Z] [BOT] 💾 Saved posted_jobs.json: 3519 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:30.468Z] [BOT] 💾 Marked as posted: Data Dictionary Software Engineer 1 @ ORG_1954b120 (instance #1)
[2026-01-21T14:52:30.468Z] [BOT] 💾 BEFORE ARCHIVING: 3520 jobs in database
[2026-01-21T14:52:30.470Z] [BOT] ✅ No jobs to archive (all 3520 jobs within 7-day window)
[2026-01-21T14:52:30.493Z] [BOT] 💾 Saved posted_jobs.json: 3520 active jobs
[2026-01-21T14:52:30.493Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:30.493Z] [BOT] 📍 [ROUTING] "Junior Backend Engineer" @ ORG_81885e17
   Category: TECH (matched: "web engineer")
   Channel: tech-jobs (1462...4987)
[2026-01-21T14:52:30.773Z] [BOT] ✅ Posted message: Junior Backend Engineer @ ORG_81885e17 in #tech-jobs
[2026-01-21T14:52:30.773Z] [BOT] ✅ Industry: Junior Backend Engineer @ ORG_81885e17
[2026-01-21T14:52:30.773Z] [BOT] 💾 Added channel posting: Junior Backend Engineer @ ORG_81885e17 → category channel (1 total channels)
[2026-01-21T14:52:30.773Z] [BOT] 💾 BEFORE ARCHIVING: 3521 jobs in database
[2026-01-21T14:52:30.776Z] [BOT] ✅ No jobs to archive (all 3521 jobs within 7-day window)
[2026-01-21T14:52:30.798Z] [BOT] 💾 Saved posted_jobs.json: 3521 active jobs
[2026-01-21T14:52:30.798Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:32.300Z] [BOT] 💾 Marked as posted: Junior Backend Engineer @ ORG_81885e17 (instance #1)
[2026-01-21T14:52:32.300Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-21T14:52:32.302Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-21T14:52:32.323Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:32.323Z] [BOT] 📍 [ROUTING] "Software Engineer I, Frontend" @ ORG_a731a58c
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T14:52:32.554Z] [BOT] ✅ Posted message: Software Engineer I, Frontend @ ORG_a731a58c in #tech-jobs
[2026-01-21T14:52:32.554Z] [BOT] ✅ Industry: Software Engineer I, Frontend @ ORG_a731a58c
[2026-01-21T14:52:32.555Z] [BOT] 💾 Added channel posting: Software Engineer I, Frontend @ ORG_a731a58c → category channel (1 total channels)
[2026-01-21T14:52:32.555Z] [BOT] 💾 BEFORE ARCHIVING: 3523 jobs in database
[2026-01-21T14:52:32.557Z] [BOT] ✅ No jobs to archive (all 3523 jobs within 7-day window)
[2026-01-21T14:52:32.579Z] [BOT] 💾 Saved posted_jobs.json: 3523 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:34.081Z] [BOT] 💾 Marked as posted: Software Engineer I, Frontend @ ORG_a731a58c (instance #1)
💾 BEFORE ARCHIVING: 3524 jobs in database
[2026-01-21T14:52:34.083Z] [BOT] ✅ No jobs to archive (all 3524 jobs within 7-day window)
[2026-01-21T14:52:34.104Z] [BOT] 💾 Saved posted_jobs.json: 3524 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:34.104Z] [BOT] 💾 Marked as posted: Software Engineer I, Frontend @ ORG_a731a58c (instance #1)
[2026-01-21T14:52:34.104Z] [BOT] 💾 BEFORE ARCHIVING: 3525 jobs in database
[2026-01-21T14:52:34.106Z] [BOT] ✅ No jobs to archive (all 3525 jobs within 7-day window)
[2026-01-21T14:52:34.126Z] [BOT] 💾 Saved posted_jobs.json: 3525 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:34.127Z] [BOT] 📍 [ROUTING] "Scientist – Akron Technical Center" @ ORG_907ed49e
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T14:52:34.354Z] [BOT] ✅ Posted message: Scientist – Akron Technical Center @ ORG_907ed49e in #tech-jobs
[2026-01-21T14:52:34.354Z] [BOT] ✅ Industry: Scientist – Akron Technical Center @ ORG_907ed49e
[2026-01-21T14:52:34.355Z] [BOT] 💾 Added channel posting: Scientist – Akron Technical Center @ ORG_907ed49e → category channel (1 total channels)
[2026-01-21T14:52:34.355Z] [BOT] 💾 BEFORE ARCHIVING: 3526 jobs in database
[2026-01-21T14:52:34.357Z] [BOT] ✅ No jobs to archive (all 3526 jobs within 7-day window)
[2026-01-21T14:52:34.377Z] [BOT] 💾 Saved posted_jobs.json: 3526 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:36.035Z] [BOT] ✅ Posted message: Scientist – Akron Technical Center @ ORG_907ed49e in #JID_ead674af
[2026-01-21T14:52:36.035Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T14:52:36.036Z] [BOT] 💾 Added channel posting: Scientist – Akron Technical Center @ ORG_907ed49e → location channel (2 total channels)
[2026-01-21T14:52:36.036Z] [BOT] 💾 BEFORE ARCHIVING: 3526 jobs in database
[2026-01-21T14:52:36.039Z] [BOT] ✅ No jobs to archive (all 3526 jobs within 7-day window)
[2026-01-21T14:52:36.063Z] [BOT] 💾 Saved posted_jobs.json: 3526 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:37.565Z] [BOT] 💾 Marked as posted: Scientist – Akron Technical Center @ ORG_907ed49e (instance #1)
[2026-01-21T14:52:37.565Z] [BOT] 💾 BEFORE ARCHIVING: 3527 jobs in database
[2026-01-21T14:52:37.567Z] [BOT] ✅ No jobs to archive (all 3527 jobs within 7-day window)
[2026-01-21T14:52:37.590Z] [BOT] 💾 Saved posted_jobs.json: 3527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:40.590Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T14:52:40.590Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Physics" @ ORG_f5f75c9b U
[2026-01-21T14:52:40.590Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:52:40.809Z] [BOT] ✅ Posted message: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U
[2026-01-21T14:52:40.810Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U → category channel (1 total channels)
[2026-01-21T14:52:40.810Z] [BOT] 💾 BEFORE ARCHIVING: 3528 jobs in database
[2026-01-21T14:52:40.812Z] [BOT] ✅ No jobs to archive (all 3528 jobs within 7-day window)
[2026-01-21T14:52:40.834Z] [BOT] 💾 Saved posted_jobs.json: 3528 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:42.519Z] [BOT] ✅ Posted message: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T14:52:42.519Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U → location channel (2 total channels)
[2026-01-21T14:52:42.519Z] [BOT] 💾 BEFORE ARCHIVING: 3528 jobs in database
[2026-01-21T14:52:42.521Z] [BOT] ✅ No jobs to archive (all 3528 jobs within 7-day window)
[2026-01-21T14:52:42.542Z] [BOT] 💾 Saved posted_jobs.json: 3528 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:44.042Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate - Physics @ ORG_f5f75c9b U (instance #1)
[2026-01-21T14:52:44.043Z] [BOT] 💾 BEFORE ARCHIVING: 3529 jobs in database
[2026-01-21T14:52:44.045Z] [BOT] ✅ No jobs to archive (all 3529 jobs within 7-day window)
[2026-01-21T14:52:44.065Z] [BOT] 💾 Saved posted_jobs.json: 3529 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:44.065Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ spotify
[2026-01-21T14:52:44.065Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T14:52:44.221Z] [BOT] ✅ Posted message: Machine Learning Engineer @ spotify in #ai-jobs
[2026-01-21T14:52:44.221Z] [BOT] ✅ Industry: Machine Learning Engineer @ spotify
[2026-01-21T14:52:44.222Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ spotify → category channel (1 total channels)
[2026-01-21T14:52:44.222Z] [BOT] 💾 BEFORE ARCHIVING: 3530 jobs in database
[2026-01-21T14:52:44.224Z] [BOT] ✅ No jobs to archive (all 3530 jobs within 7-day window)
[2026-01-21T14:52:44.244Z] [BOT] 💾 Saved posted_jobs.json: 3530 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:45.871Z] [BOT] ✅ Posted message: Machine Learning Engineer @ spotify in #JID_98d4f0de
[2026-01-21T14:52:45.871Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T14:52:45.872Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ spotify → location channel (2 total channels)
[2026-01-21T14:52:45.872Z] [BOT] 💾 BEFORE ARCHIVING: 3530 jobs in database
[2026-01-21T14:52:45.874Z] [BOT] ✅ No jobs to archive (all 3530 jobs within 7-day window)
[2026-01-21T14:52:45.894Z] [BOT] 💾 Saved posted_jobs.json: 3530 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:47.395Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ spotify (instance #1)
[2026-01-21T14:52:47.395Z] [BOT] 💾 BEFORE ARCHIVING: 3531 jobs in database
[2026-01-21T14:52:47.398Z] [BOT] ✅ No jobs to archive (all 3531 jobs within 7-day window)
[2026-01-21T14:52:47.418Z] [BOT] 💾 Saved posted_jobs.json: 3531 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:50.419Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T14:52:50.420Z] [BOT] 📍 [ROUTING] "Junior Business & Technology Analyst" @ ORG_dac437fc Bank
[2026-01-21T14:52:50.420Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
[2026-01-21T14:52:50.624Z] [BOT] ✅ Posted message: Junior Business & Technology Analyst @ ORG_dac437fc Bank in #JID_fb739488
  ✅ Industry: Junior Business & Technology Analyst @ ORG_dac437fc Bank
[2026-01-21T14:52:50.625Z] [BOT] 💾 Added channel posting: Junior Business & Technology Analyst @ ORG_dac437fc Bank → category channel (1 total channels)
[2026-01-21T14:52:50.625Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-21T14:52:50.627Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-21T14:52:50.647Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:52.341Z] [BOT] ✅ Posted message: Junior Business & Technology Analyst @ ORG_dac437fc Bank in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T14:52:52.342Z] [BOT] 💾 Added channel posting: Junior Business & Technology Analyst @ ORG_dac437fc Bank → location channel (2 total channels)
[2026-01-21T14:52:52.342Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-21T14:52:52.344Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-21T14:52:52.365Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:53.865Z] [BOT] 💾 Marked as posted: Junior Business & Technology Analyst @ ORG_dac437fc Bank (instance #1)
[2026-01-21T14:52:53.866Z] [BOT] 💾 BEFORE ARCHIVING: 3533 jobs in database
[2026-01-21T14:52:53.868Z] [BOT] ✅ No jobs to archive (all 3533 jobs within 7-day window)
[2026-01-21T14:52:53.888Z] [BOT] 💾 Saved posted_jobs.json: 3533 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:56.889Z] [BOT] 📌 Posting 3 jobs to #finance-jobs
[2026-01-21T14:52:56.890Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 3" @ ORG_8d0003a5
   Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T14:52:57.147Z] [BOT] ✅ Posted message: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #finance-jobs
  ✅ Industry: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5
[2026-01-21T14:52:57.147Z] [BOT] 💾 Added channel posting: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 → category channel (1 total channels)
[2026-01-21T14:52:57.148Z] [BOT] 💾 BEFORE ARCHIVING: 3534 jobs in database
[2026-01-21T14:52:57.150Z] [BOT] ✅ No jobs to archive (all 3534 jobs within 7-day window)
[2026-01-21T14:52:57.169Z] [BOT] 💾 Saved posted_jobs.json: 3534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:52:58.817Z] [BOT] ✅ Posted message: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T14:52:58.818Z] [BOT] 💾 Added channel posting: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 → location channel (2 total channels)
[2026-01-21T14:52:58.818Z] [BOT] 💾 BEFORE ARCHIVING: 3534 jobs in database
[2026-01-21T14:52:58.820Z] [BOT] ✅ No jobs to archive (all 3534 jobs within 7-day window)
[2026-01-21T14:52:58.841Z] [BOT] 💾 Saved posted_jobs.json: 3534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:00.341Z] [BOT] 💾 Marked as posted: Fiber Network Mapping Specialist 3 @ ORG_8d0003a5 (instance #1)
[2026-01-21T14:53:00.342Z] [BOT] 💾 BEFORE ARCHIVING: 3535 jobs in database
[2026-01-21T14:53:00.344Z] [BOT] ✅ No jobs to archive (all 3535 jobs within 7-day window)
[2026-01-21T14:53:00.365Z] [BOT] 💾 Saved posted_jobs.json: 3535 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:00.365Z] [BOT] 📍 [ROUTING] "Accounting Channel Partnerships Manager" @ brex
[2026-01-21T14:53:00.365Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: finance-jobs (1462...4023)
[2026-01-21T14:53:00.544Z] [BOT] ✅ Posted message: Accounting Channel Partnerships Manager @ brex in #finance-jobs
  ✅ Industry: Accounting Channel Partnerships Manager @ brex
[2026-01-21T14:53:00.545Z] [BOT] 💾 Added channel posting: Accounting Channel Partnerships Manager @ brex → category channel (1 total channels)
[2026-01-21T14:53:00.545Z] [BOT] 💾 BEFORE ARCHIVING: 3536 jobs in database
[2026-01-21T14:53:00.547Z] [BOT] ✅ No jobs to archive (all 3536 jobs within 7-day window)
[2026-01-21T14:53:00.567Z] [BOT] 💾 Saved posted_jobs.json: 3536 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:02.213Z] [BOT] ✅ Posted message: Accounting Channel Partnerships Manager @ brex in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T14:53:02.214Z] [BOT] 💾 Added channel posting: Accounting Channel Partnerships Manager @ brex → location channel (2 total channels)
[2026-01-21T14:53:02.214Z] [BOT] 💾 BEFORE ARCHIVING: 3536 jobs in database
[2026-01-21T14:53:02.216Z] [BOT] ✅ No jobs to archive (all 3536 jobs within 7-day window)
[2026-01-21T14:53:02.236Z] [BOT] 💾 Saved posted_jobs.json: 3536 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:03.738Z] [BOT] 💾 Marked as posted: Accounting Channel Partnerships Manager @ brex (instance #1)
[2026-01-21T14:53:03.738Z] [BOT] 💾 BEFORE ARCHIVING: 3537 jobs in database
[2026-01-21T14:53:03.740Z] [BOT] ✅ No jobs to archive (all 3537 jobs within 7-day window)
[2026-01-21T14:53:03.761Z] [BOT] 💾 Saved posted_jobs.json: 3537 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:03.761Z] [BOT] 💾 Marked as posted: Accounting Channel Partnerships Manager @ brex (instance #1)
[2026-01-21T14:53:03.761Z] [BOT] 💾 BEFORE ARCHIVING: 3538 jobs in database
[2026-01-21T14:53:03.763Z] [BOT] ✅ No jobs to archive (all 3538 jobs within 7-day window)
[2026-01-21T14:53:03.784Z] [BOT] 💾 Saved posted_jobs.json: 3538 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:03.784Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
[2026-01-21T14:53:03.784Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T14:53:04.064Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #finance-jobs
[2026-01-21T14:53:04.065Z] [BOT] ✅ Industry: Account Executive, Mid Market @ brex
[2026-01-21T14:53:04.065Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → category channel (1 total channels)
[2026-01-21T14:53:04.065Z] [BOT] 💾 BEFORE ARCHIVING: 3539 jobs in database
[2026-01-21T14:53:04.067Z] [BOT] ✅ No jobs to archive (all 3539 jobs within 7-day window)
[2026-01-21T14:53:04.087Z] [BOT] 💾 Saved posted_jobs.json: 3539 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:05.724Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T14:53:05.724Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3539 jobs in database
[2026-01-21T14:53:05.727Z] [BOT] ✅ No jobs to archive (all 3539 jobs within 7-day window)
[2026-01-21T14:53:05.747Z] [BOT] 💾 Saved posted_jobs.json: 3539 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:07.249Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market @ brex (instance #1)
[2026-01-21T14:53:07.249Z] [BOT] 💾 BEFORE ARCHIVING: 3540 jobs in database
[2026-01-21T14:53:07.252Z] [BOT] ✅ No jobs to archive (all 3540 jobs within 7-day window)
[2026-01-21T14:53:07.273Z] [BOT] 💾 Saved posted_jobs.json: 3540 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:07.273Z] [BOT] 💾 Marked as posted: Account Executive, Mid Market @ brex (instance #1)
[2026-01-21T14:53:07.273Z] [BOT] 💾 BEFORE ARCHIVING: 3541 jobs in database
[2026-01-21T14:53:07.275Z] [BOT] ✅ No jobs to archive (all 3541 jobs within 7-day window)
[2026-01-21T14:53:07.296Z] [BOT] 💾 Saved posted_jobs.json: 3541 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:53:10.297Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T14:53:10.298Z] [BOT] ⏭️  Skipping duplicate: JID_e7388d16-1_320288 (posted within 7 days)
[2026-01-21T14:53:10.298Z] [BOT] ⏭️  Skipping duplicate: JID_9ff5d674 (posted within 7 days)
[2026-01-21T14:53:10.299Z] [BOT] ⏭️  Skipping duplicate: JID_74713f9b (posted within 7 days)
[2026-01-21T14:53:10.299Z] [BOT] ⏭️  Skipping duplicate: JID_fc72070d-physics_jr91660 (posted within 7 days)
[2026-01-21T14:53:10.299Z] [BOT] ⏭️  Skipping duplicate: JID_51162df5-engineer_jr3704 (posted within 7 days)
[2026-01-21T14:53:10.299Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iii_r0014033 (posted within 7 days)
[2026-01-21T14:53:10.299Z] [BOT] ⏭️  Skipping duplicate: JID_189c953b-onsite_r6616 (posted within 7 days)
[2026-01-21T14:53:10.299Z] [BOT] ⏭️  Skipping duplicate: JID_bf3e2eb6 (posted within 7 days)
[2026-01-21T14:53:10.300Z] [BOT] ⏭️  Skipping duplicate: JID_d7efbcc3 (posted within 7 days)
[2026-01-21T14:53:10.300Z] [BOT] ⏭️  Skipping duplicate: JID_026a52e5 (posted within 7 days)
[2026-01-21T14:53:10.411Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[2026-01-21T14:53:10.587Z] [BOT] ✅ Saved pending queue: 2766 total (2746 pending, 10 enriched, 10 posted)
[2026-01-21T14:53:10.590Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T14:53:10.667Z] [BOT] 📂 Loaded 5935 existing routing entries
[2026-01-21T14:53:10.744Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T14:53:10.745Z] [BOT] Total entries: 5945
   Timestamp: 2026-01-21T14:53:10.719Z
[2026-01-21T14:53:10.745Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T14:53:10.745Z] [BOT] Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-21T14:53:10.745Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T14:53:10.746Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
     1. #JID_ead674af: 5 posts
     2. #tech-jobs: 4 posts
     3. #JID_98d4f0de: 3 posts
     4. #finance-jobs: 3 posts
     5. #ai-jobs: 2 posts
[2026-01-21T14:53:10.746Z] [BOT] [STATS] Channel stats saved
[2026-01-21T14:53:12.771Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*