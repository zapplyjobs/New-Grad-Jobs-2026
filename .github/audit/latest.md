# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T14:18:21.827Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T14:17:51.221Z] ========================================
[2026-01-21T14:17:51.223Z] Discord Bot Execution Log
[2026-01-21T14:17:51.223Z] Environment: GitHub Actions
[2026-01-21T14:17:51.223Z] Node Version: v20.19.6
[2026-01-21T14:17:51.223Z] ========================================
[2026-01-21T14:17:51.223Z] Environment Variables Check:
[2026-01-21T14:17:51.223Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T14:17:51.223Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.223Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T14:17:51.224Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T14:17:51.224Z] 
Multi-Channel Configuration:
[2026-01-21T14:17:51.224Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.224Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.224Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.224Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.224Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.224Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.224Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.224Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.224Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T14:17:51.224Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T14:17:51.224Z] 
Data Files Check:
[2026-01-21T14:17:51.226Z] .github/data/new_jobs.json: ✅ Exists (10 items, 221706 bytes)
[2026-01-21T14:17:51.240Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1996808 bytes)
[2026-01-21T14:17:51.240Z] 
========================================
[2026-01-21T14:17:51.240Z] Starting Enhanced Discord Bot...
[2026-01-21T14:17:51.240Z] ========================================
[2026-01-21T14:17:51.703Z] [BOT] ✅ Loaded V2 database: 3478 jobs
[2026-01-21T14:17:52.231Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T14:17:52.232Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T14:17:52.232Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T14:17:52.384Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Manager, Large Customer Sales (Tech & Telco) at reddit
[2026-01-21T14:17:52.389Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T14:17:52.390Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T14:17:52.390Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T14:17:52.391Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T14:17:52.391Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T14:17:52.392Z] [BOT] 📌 Posting 10 jobs to #ai-jobs
[2026-01-21T14:17:52.393Z] [BOT] 📍 [ROUTING] "Senior Manager, Large Customer Sales (Tech & Telco)" @ reddit
[2026-01-21T14:17:52.393Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:17:52.397Z] [BOT ERROR] (node:2653) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T14:17:52.641Z] [BOT] ✅ Posted message: Senior Manager, Large Customer Sales (Tech & Telco) @ reddit in #ai-jobs
[2026-01-21T14:17:52.641Z] [BOT] ✅ Industry: Senior Manager, Large Customer Sales (Tech & Telco) @ reddit
[2026-01-21T14:17:52.642Z] [BOT] 💾 Added channel posting: Senior Manager, Large Customer Sales (Tech & Telco) @ reddit → category channel (1 total channels)
[2026-01-21T14:17:52.642Z] [BOT] 💾 BEFORE ARCHIVING: 3479 jobs in database
[2026-01-21T14:17:52.645Z] [BOT] ✅ No jobs to archive (all 3479 jobs within 7-day window)
[2026-01-21T14:17:52.669Z] [BOT] 💾 Saved posted_jobs.json: 3479 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:17:54.379Z] [BOT] ✅ Posted message: Senior Manager, Large Customer Sales (Tech & Telco) @ reddit in #JID_98d4f0de
[2026-01-21T14:17:54.380Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T14:17:54.380Z] [BOT] 💾 Added channel posting: Senior Manager, Large Customer Sales (Tech & Telco) @ reddit → location channel (2 total channels)
[2026-01-21T14:17:54.380Z] [BOT] 💾 BEFORE ARCHIVING: 3479 jobs in database
[2026-01-21T14:17:54.382Z] [BOT] ✅ No jobs to archive (all 3479 jobs within 7-day window)
[2026-01-21T14:17:54.403Z] [BOT] 💾 Saved posted_jobs.json: 3479 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:17:55.905Z] [BOT] 💾 Marked as posted: Senior Manager, Large Customer Sales (Tech & Telco) @ reddit (instance #1)
[2026-01-21T14:17:55.905Z] [BOT] 💾 BEFORE ARCHIVING: 3480 jobs in database
[2026-01-21T14:17:55.908Z] [BOT] ✅ No jobs to archive (all 3480 jobs within 7-day window)
[2026-01-21T14:17:55.931Z] [BOT] 💾 Saved posted_jobs.json: 3480 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:17:55.932Z] [BOT] 📍 [ROUTING] "Associate Manager, Transaction Monitoring Compliance" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-21T14:17:55.932Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T14:17:56.129Z] [BOT] ✅ Posted message: Associate Manager, Transaction Monitoring Compliance @ coinbase in #ai-jobs
[2026-01-21T14:17:56.129Z] [BOT] ✅ Industry: Associate Manager, Transaction Monitoring Compliance @ coinbase
[2026-01-21T14:17:56.129Z] [BOT] 💾 Added channel posting: Associate Manager, Transaction Monitoring Compliance @ coinbase → category channel (1 total channels)
[2026-01-21T14:17:56.130Z] [BOT] 💾 BEFORE ARCHIVING: 3481 jobs in database
[2026-01-21T14:17:56.132Z] [BOT] ✅ No jobs to archive (all 3481 jobs within 7-day window)
[2026-01-21T14:17:56.155Z] [BOT] 💾 Saved posted_jobs.json: 3481 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:17:57.658Z] [BOT] 💾 Marked as posted: Associate Manager, Transaction Monitoring Compliance @ coinbase (instance #1)
[2026-01-21T14:17:57.658Z] [BOT] 💾 BEFORE ARCHIVING: 3482 jobs in database
[2026-01-21T14:17:57.660Z] [BOT] ✅ No jobs to archive (all 3482 jobs within 7-day window)
[2026-01-21T14:17:57.682Z] [BOT] 💾 Saved posted_jobs.json: 3482 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:17:57.682Z] [BOT] 📍 [ROUTING] "Concierge, Customer Success Team" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-21T14:17:57.682Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T14:17:57.857Z] [BOT] ✅ Posted message: Concierge, Customer Success Team @ coinbase in #ai-jobs
[2026-01-21T14:17:57.857Z] [BOT] ✅ Industry: Concierge, Customer Success Team @ coinbase
[2026-01-21T14:17:57.858Z] [BOT] 💾 Added channel posting: Concierge, Customer Success Team @ coinbase → category channel (1 total channels)
[2026-01-21T14:17:57.858Z] [BOT] 💾 BEFORE ARCHIVING: 3483 jobs in database
[2026-01-21T14:17:57.860Z] [BOT] ✅ No jobs to archive (all 3483 jobs within 7-day window)
[2026-01-21T14:17:57.882Z] [BOT] 💾 Saved posted_jobs.json: 3483 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:17:59.384Z] [BOT] 💾 Marked as posted: Concierge, Customer Success Team @ coinbase (instance #1)
💾 BEFORE ARCHIVING: 3484 jobs in database
[2026-01-21T14:17:59.386Z] [BOT] ✅ No jobs to archive (all 3484 jobs within 7-day window)
[2026-01-21T14:17:59.407Z] [BOT] 💾 Saved posted_jobs.json: 3484 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:17:59.408Z] [BOT] 📍 [ROUTING] "Employee & Workplace Experience Intern" @ coinbase
[2026-01-21T14:17:59.408Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:17:59.615Z] [BOT] ✅ Posted message: Employee & Workplace Experience Intern @ coinbase in #ai-jobs
  ✅ Industry: Employee & Workplace Experience Intern @ coinbase
[2026-01-21T14:17:59.616Z] [BOT] 💾 Added channel posting: Employee & Workplace Experience Intern @ coinbase → category channel (1 total channels)
[2026-01-21T14:17:59.616Z] [BOT] 💾 BEFORE ARCHIVING: 3485 jobs in database
[2026-01-21T14:17:59.618Z] [BOT] ✅ No jobs to archive (all 3485 jobs within 7-day window)
[2026-01-21T14:17:59.639Z] [BOT] 💾 Saved posted_jobs.json: 3485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:01.382Z] [BOT] ✅ Posted message: Employee & Workplace Experience Intern @ coinbase in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T14:18:01.383Z] [BOT] 💾 Added channel posting: Employee & Workplace Experience Intern @ coinbase → location channel (2 total channels)
[2026-01-21T14:18:01.383Z] [BOT] 💾 BEFORE ARCHIVING: 3485 jobs in database
[2026-01-21T14:18:01.386Z] [BOT] ✅ No jobs to archive (all 3485 jobs within 7-day window)
[2026-01-21T14:18:01.410Z] [BOT] 💾 Saved posted_jobs.json: 3485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:02.911Z] [BOT] 💾 Marked as posted: Employee & Workplace Experience Intern @ coinbase (instance #1)
[2026-01-21T14:18:02.911Z] [BOT] 💾 BEFORE ARCHIVING: 3486 jobs in database
[2026-01-21T14:18:02.914Z] [BOT] ✅ No jobs to archive (all 3486 jobs within 7-day window)
[2026-01-21T14:18:02.936Z] [BOT] 💾 Saved posted_jobs.json: 3486 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:02.937Z] [BOT] 📍 [ROUTING] "Lead EDD Compliance Analyst" @ coinbase
[2026-01-21T14:18:02.938Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:18:03.292Z] [BOT] ✅ Posted message: Lead EDD Compliance Analyst @ coinbase in #ai-jobs
[2026-01-21T14:18:03.293Z] [BOT] ✅ Industry: Lead EDD Compliance Analyst @ coinbase
[2026-01-21T14:18:03.293Z] [BOT] 💾 Added channel posting: Lead EDD Compliance Analyst @ coinbase → category channel (1 total channels)
[2026-01-21T14:18:03.293Z] [BOT] 💾 BEFORE ARCHIVING: 3487 jobs in database
[2026-01-21T14:18:03.295Z] [BOT] ✅ No jobs to archive (all 3487 jobs within 7-day window)
[2026-01-21T14:18:03.317Z] [BOT] 💾 Saved posted_jobs.json: 3487 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:04.818Z] [BOT] 💾 Marked as posted: Lead EDD Compliance Analyst @ coinbase (instance #1)
[2026-01-21T14:18:04.818Z] [BOT] 💾 BEFORE ARCHIVING: 3488 jobs in database
[2026-01-21T14:18:04.820Z] [BOT] ✅ No jobs to archive (all 3488 jobs within 7-day window)
[2026-01-21T14:18:04.841Z] [BOT] 💾 Saved posted_jobs.json: 3488 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:04.842Z] [BOT] 📍 [ROUTING] "Lead TMS Compliance Analyst " @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-21T14:18:04.842Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T14:18:05.034Z] [BOT] ✅ Posted message: Lead TMS Compliance Analyst  @ coinbase in #ai-jobs
  ✅ Industry: Lead TMS Compliance Analyst  @ coinbase
[2026-01-21T14:18:05.035Z] [BOT] 💾 Added channel posting: Lead TMS Compliance Analyst  @ coinbase → category channel (1 total channels)
[2026-01-21T14:18:05.035Z] [BOT] 💾 BEFORE ARCHIVING: 3489 jobs in database
[2026-01-21T14:18:05.037Z] [BOT] ✅ No jobs to archive (all 3489 jobs within 7-day window)
[2026-01-21T14:18:05.058Z] [BOT] 💾 Saved posted_jobs.json: 3489 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:06.560Z] [BOT] 💾 Marked as posted: Lead TMS Compliance Analyst  @ coinbase (instance #1)
[2026-01-21T14:18:06.561Z] [BOT] 💾 BEFORE ARCHIVING: 3490 jobs in database
[2026-01-21T14:18:06.563Z] [BOT] ✅ No jobs to archive (all 3490 jobs within 7-day window)
[2026-01-21T14:18:06.583Z] [BOT] 💾 Saved posted_jobs.json: 3490 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:06.584Z] [BOT] 📍 [ROUTING] "Lead TMS Quality Compliance Analyst" @ coinbase
[2026-01-21T14:18:06.584Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:18:06.821Z] [BOT] ✅ Posted message: Lead TMS Quality Compliance Analyst @ coinbase in #ai-jobs
  ✅ Industry: Lead TMS Quality Compliance Analyst @ coinbase
[2026-01-21T14:18:06.821Z] [BOT] 💾 Added channel posting: Lead TMS Quality Compliance Analyst @ coinbase → category channel (1 total channels)
[2026-01-21T14:18:06.822Z] [BOT] 💾 BEFORE ARCHIVING: 3491 jobs in database
[2026-01-21T14:18:06.824Z] [BOT] ✅ No jobs to archive (all 3491 jobs within 7-day window)
[2026-01-21T14:18:06.844Z] [BOT] 💾 Saved posted_jobs.json: 3491 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:08.346Z] [BOT] 💾 Marked as posted: Lead TMS Quality Compliance Analyst @ coinbase (instance #1)
[2026-01-21T14:18:08.346Z] [BOT] 💾 BEFORE ARCHIVING: 3492 jobs in database
[2026-01-21T14:18:08.348Z] [BOT] ✅ No jobs to archive (all 3492 jobs within 7-day window)
[2026-01-21T14:18:08.369Z] [BOT] 💾 Saved posted_jobs.json: 3492 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:08.370Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Intern" @ coinbase
[2026-01-21T14:18:08.370Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T14:18:08.592Z] [BOT] ✅ Posted message: Machine Learning Engineer Intern @ coinbase in #ai-jobs
[2026-01-21T14:18:08.592Z] [BOT] ✅ Industry: Machine Learning Engineer Intern @ coinbase
[2026-01-21T14:18:08.593Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Intern @ coinbase → category channel (1 total channels)
[2026-01-21T14:18:08.593Z] [BOT] 💾 BEFORE ARCHIVING: 3493 jobs in database
[2026-01-21T14:18:08.595Z] [BOT] ✅ No jobs to archive (all 3493 jobs within 7-day window)
[2026-01-21T14:18:08.615Z] [BOT] 💾 Saved posted_jobs.json: 3493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:10.117Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Intern @ coinbase (instance #1)
[2026-01-21T14:18:10.117Z] [BOT] 💾 BEFORE ARCHIVING: 3494 jobs in database
[2026-01-21T14:18:10.119Z] [BOT] ✅ No jobs to archive (all 3494 jobs within 7-day window)
[2026-01-21T14:18:10.140Z] [BOT] 💾 Saved posted_jobs.json: 3494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:10.140Z] [BOT] 📍 [ROUTING] "Marketing Events Intern" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:18:10.312Z] [BOT] ✅ Posted message: Marketing Events Intern @ coinbase in #ai-jobs
  ✅ Industry: Marketing Events Intern @ coinbase
[2026-01-21T14:18:10.312Z] [BOT] 💾 Added channel posting: Marketing Events Intern @ coinbase → category channel (1 total channels)
[2026-01-21T14:18:10.312Z] [BOT] 💾 BEFORE ARCHIVING: 3495 jobs in database
[2026-01-21T14:18:10.314Z] [BOT] ✅ No jobs to archive (all 3495 jobs within 7-day window)
[2026-01-21T14:18:10.335Z] [BOT] 💾 Saved posted_jobs.json: 3495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:12.140Z] [BOT] ✅ Posted message: Marketing Events Intern @ coinbase in #JID_98d4f0de
[2026-01-21T14:18:12.140Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T14:18:12.141Z] [BOT] 💾 Added channel posting: Marketing Events Intern @ coinbase → location channel (2 total channels)
[2026-01-21T14:18:12.141Z] [BOT] 💾 BEFORE ARCHIVING: 3495 jobs in database
[2026-01-21T14:18:12.143Z] [BOT] ✅ No jobs to archive (all 3495 jobs within 7-day window)
[2026-01-21T14:18:12.163Z] [BOT] 💾 Saved posted_jobs.json: 3495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:13.665Z] [BOT] 💾 Marked as posted: Marketing Events Intern @ coinbase (instance #1)
[2026-01-21T14:18:13.665Z] [BOT] 💾 BEFORE ARCHIVING: 3496 jobs in database
[2026-01-21T14:18:13.668Z] [BOT] ✅ No jobs to archive (all 3496 jobs within 7-day window)
[2026-01-21T14:18:13.688Z] [BOT] 💾 Saved posted_jobs.json: 3496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:13.689Z] [BOT] 📍 [ROUTING] "Product Design Intern" @ coinbase
[2026-01-21T14:18:13.689Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:18:14.007Z] [BOT] ✅ Posted message: Product Design Intern @ coinbase in #ai-jobs
[2026-01-21T14:18:14.007Z] [BOT] ✅ Industry: Product Design Intern @ coinbase
[2026-01-21T14:18:14.007Z] [BOT] 💾 Added channel posting: Product Design Intern @ coinbase → category channel (1 total channels)
[2026-01-21T14:18:14.007Z] [BOT] 💾 BEFORE ARCHIVING: 3497 jobs in database
[2026-01-21T14:18:14.009Z] [BOT] ✅ No jobs to archive (all 3497 jobs within 7-day window)
[2026-01-21T14:18:14.030Z] [BOT] 💾 Saved posted_jobs.json: 3497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:15.532Z] [BOT] 💾 Marked as posted: Product Design Intern @ coinbase (instance #1)
[2026-01-21T14:18:15.532Z] [BOT] 💾 BEFORE ARCHIVING: 3498 jobs in database
[2026-01-21T14:18:15.534Z] [BOT] ✅ No jobs to archive (all 3498 jobs within 7-day window)
[2026-01-21T14:18:15.555Z] [BOT] 💾 Saved posted_jobs.json: 3498 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:18:18.555Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T14:18:18.556Z] [BOT] ⏭️  Skipping duplicate: JID_679b8d58 (posted within 7 days)
[2026-01-21T14:18:18.556Z] [BOT] ⏭️  Skipping duplicate: JID_de7dc187 (posted within 7 days)
[2026-01-21T14:18:18.557Z] [BOT] ⏭️  Skipping duplicate: JID_de687c4d (posted within 7 days)
[2026-01-21T14:18:18.557Z] [BOT] ⏭️  Skipping duplicate: JID_b885468f (posted within 7 days)
[2026-01-21T14:18:18.557Z] [BOT] ⏭️  Skipping duplicate: JID_a3af3853 (posted within 7 days)
[2026-01-21T14:18:18.557Z] [BOT] ⏭️  Skipping duplicate: JID_bdfb2c7a (posted within 7 days)
[2026-01-21T14:18:18.557Z] [BOT] ⏭️  Skipping duplicate: JID_5837088b (posted within 7 days)
[2026-01-21T14:18:18.558Z] [BOT] ⏭️  Skipping duplicate: JID_07d75074 (posted within 7 days)
[2026-01-21T14:18:18.558Z] [BOT] ⏭️  Skipping duplicate: JID_6dba5654 (posted within 7 days)
[2026-01-21T14:18:18.558Z] [BOT] ⏭️  Skipping duplicate: JID_0cd4e9de (posted within 7 days)
[2026-01-21T14:18:18.709Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-21T14:18:18.874Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T14:18:18.946Z] [BOT] 📂 Loaded 5915 existing routing entries
[2026-01-21T14:18:19.018Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5925
   Timestamp: 2026-01-21T14:18:18.996Z
[2026-01-21T14:18:19.019Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T14:18:19.019Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T14:18:19.019Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T14:18:19.019Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 2
   Top channels:
     1. #ai-jobs: 10 posts
     2. #JID_98d4f0de: 3 posts
[2026-01-21T14:18:19.020Z] [BOT] [STATS] Channel stats saved
[2026-01-21T14:18:21.038Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2653) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*