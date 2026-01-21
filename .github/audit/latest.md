# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T20:19:25.004Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T20:18:36.486Z] ========================================
[2026-01-21T20:18:36.488Z] Discord Bot Execution Log
[2026-01-21T20:18:36.488Z] Environment: GitHub Actions
[2026-01-21T20:18:36.488Z] Node Version: v20.19.6
[2026-01-21T20:18:36.488Z] ========================================
[2026-01-21T20:18:36.488Z] Environment Variables Check:
[2026-01-21T20:18:36.488Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T20:18:36.488Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T20:18:36.489Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T20:18:36.489Z] 
Multi-Channel Configuration:
[2026-01-21T20:18:36.489Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T20:18:36.489Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T20:18:36.489Z] 
Data Files Check:
[2026-01-21T20:18:36.490Z] .github/data/new_jobs.json: ✅ Exists (10 items, 82548 bytes)
[2026-01-21T20:18:36.507Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2171216 bytes)
[2026-01-21T20:18:36.507Z] 
========================================
[2026-01-21T20:18:36.507Z] Starting Enhanced Discord Bot...
[2026-01-21T20:18:36.507Z] ========================================
[2026-01-21T20:18:36.963Z] [BOT] ✅ Loaded V2 database: 3767 jobs
[2026-01-21T20:18:37.824Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T20:18:37.825Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T20:18:37.825Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T20:18:37.977Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Founding Developer Relations Lead at anthropic
[2026-01-21T20:18:37.981Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T20:18:37.981Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T20:18:37.982Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T20:18:37.982Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T20:18:37.983Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T20:18:37.985Z] [BOT] 📌 Posting 5 jobs to #ai-jobs
[2026-01-21T20:18:37.986Z] [BOT] 📍 [ROUTING] "Founding Developer Relations Lead" @ anthropic
[2026-01-21T20:18:37.986Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T20:18:37.990Z] [BOT ERROR] (node:2635) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T20:18:38.168Z] [BOT] ✅ Posted message: Founding Developer Relations Lead @ anthropic in #ai-jobs
[2026-01-21T20:18:38.169Z] [BOT] ✅ Industry: Founding Developer Relations Lead @ anthropic
[2026-01-21T20:18:38.170Z] [BOT] 💾 Added channel posting: Founding Developer Relations Lead @ anthropic → category channel (1 total channels)
[2026-01-21T20:18:38.170Z] [BOT] 💾 BEFORE ARCHIVING: 3768 jobs in database
[2026-01-21T20:18:38.175Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T20:18:38.179Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T20:18:38.179Z] [BOT] ✅ Archiving complete: 10 archived, 3758 active
[2026-01-21T20:18:38.216Z] [BOT] 💾 Saved posted_jobs.json: 3758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:39.718Z] [BOT] 💾 Marked as posted: Founding Developer Relations Lead @ anthropic (instance #1)
[2026-01-21T20:18:39.718Z] [BOT] 💾 BEFORE ARCHIVING: 3759 jobs in database
[2026-01-21T20:18:39.720Z] [BOT] ✅ No jobs to archive (all 3759 jobs within 7-day window)
[2026-01-21T20:18:39.742Z] [BOT] 💾 Saved posted_jobs.json: 3759 active jobs
[2026-01-21T20:18:39.743Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:39.743Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
[2026-01-21T20:18:39.743Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T20:18:40.007Z] [BOT] ✅ Posted message: Software Engineer @ ORG_c7bac469 in #ai-jobs
  ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-01-21T20:18:40.008Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_c7bac469 → category channel (1 total channels)
[2026-01-21T20:18:40.008Z] [BOT] 💾 BEFORE ARCHIVING: 3760 jobs in database
[2026-01-21T20:18:40.010Z] [BOT] ✅ No jobs to archive (all 3760 jobs within 7-day window)
[2026-01-21T20:18:40.035Z] [BOT] 💾 Saved posted_jobs.json: 3760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:41.536Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-21T20:18:41.536Z] [BOT] 💾 BEFORE ARCHIVING: 3761 jobs in database
[2026-01-21T20:18:41.538Z] [BOT] ✅ No jobs to archive (all 3761 jobs within 7-day window)
[2026-01-21T20:18:41.562Z] [BOT] 💾 Saved posted_jobs.json: 3761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:41.563Z] [BOT] 📍 [ROUTING] "Associate – Investment Analytics and Data - Portfolio Analytics" @ ORG_c9e92d4e Fund Advisors
   Category: AI (matched: "artificial intelligence")
[2026-01-21T20:18:41.563Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T20:18:41.783Z] [BOT] ✅ Posted message: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors in #ai-jobs
  ✅ Industry: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors
[2026-01-21T20:18:41.784Z] [BOT] 💾 Added channel posting: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors → category channel (1 total channels)
[2026-01-21T20:18:41.784Z] [BOT] 💾 BEFORE ARCHIVING: 3762 jobs in database
[2026-01-21T20:18:41.786Z] [BOT] ✅ No jobs to archive (all 3762 jobs within 7-day window)
[2026-01-21T20:18:41.809Z] [BOT] 💾 Saved posted_jobs.json: 3762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:43.501Z] [BOT] ✅ Posted message: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T20:18:43.502Z] [BOT] 💾 Added channel posting: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors → location channel (2 total channels)
[2026-01-21T20:18:43.503Z] [BOT] 💾 BEFORE ARCHIVING: 3762 jobs in database
[2026-01-21T20:18:43.504Z] [BOT] ✅ No jobs to archive (all 3762 jobs within 7-day window)
[2026-01-21T20:18:43.527Z] [BOT] 💾 Saved posted_jobs.json: 3762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:45.027Z] [BOT] 💾 Marked as posted: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors (instance #1)
[2026-01-21T20:18:45.027Z] [BOT] 💾 BEFORE ARCHIVING: 3763 jobs in database
[2026-01-21T20:18:45.029Z] [BOT] ✅ No jobs to archive (all 3763 jobs within 7-day window)
[2026-01-21T20:18:45.051Z] [BOT] 💾 Saved posted_jobs.json: 3763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:45.052Z] [BOT] 📍 [ROUTING] "AI Scientist 1 - Healthcare" @ ORG_9f59c5cf Health Solutions
   Category: AI (matched: "machine learning")
[2026-01-21T20:18:45.052Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T20:18:45.296Z] [BOT] ✅ Posted message: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions in #ai-jobs
  ✅ Industry: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions
[2026-01-21T20:18:45.297Z] [BOT] 💾 Added channel posting: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions → category channel (1 total channels)
[2026-01-21T20:18:45.297Z] [BOT] 💾 BEFORE ARCHIVING: 3764 jobs in database
[2026-01-21T20:18:45.299Z] [BOT] ✅ No jobs to archive (all 3764 jobs within 7-day window)
[2026-01-21T20:18:45.321Z] [BOT] 💾 Saved posted_jobs.json: 3764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:47.061Z] [BOT] ✅ Posted message: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T20:18:47.062Z] [BOT] 💾 Added channel posting: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions → location channel (2 total channels)
[2026-01-21T20:18:47.062Z] [BOT] 💾 BEFORE ARCHIVING: 3764 jobs in database
[2026-01-21T20:18:47.065Z] [BOT] ✅ No jobs to archive (all 3764 jobs within 7-day window)
[2026-01-21T20:18:47.091Z] [BOT] 💾 Saved posted_jobs.json: 3764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:48.591Z] [BOT] 💾 Marked as posted: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions (instance #1)
[2026-01-21T20:18:48.592Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T20:18:48.594Z] [BOT] ✅ No jobs to archive (all 3765 jobs within 7-day window)
[2026-01-21T20:18:48.617Z] [BOT] 💾 Saved posted_jobs.json: 3765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:48.618Z] [BOT] 📍 [ROUTING] "ML Engineer 2" @ ORG_c3f8be8b
[2026-01-21T20:18:48.618Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T20:18:48.837Z] [BOT] ✅ Posted message: ML Engineer 2 @ ORG_c3f8be8b in #ai-jobs
  ✅ Industry: ML Engineer 2 @ ORG_c3f8be8b
[2026-01-21T20:18:48.838Z] [BOT] 💾 Added channel posting: ML Engineer 2 @ ORG_c3f8be8b → category channel (1 total channels)
[2026-01-21T20:18:48.838Z] [BOT] 💾 BEFORE ARCHIVING: 3766 jobs in database
[2026-01-21T20:18:48.841Z] [BOT] ✅ No jobs to archive (all 3766 jobs within 7-day window)
[2026-01-21T20:18:48.867Z] [BOT] 💾 Saved posted_jobs.json: 3766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:50.570Z] [BOT] ✅ Posted message: ML Engineer 2 @ ORG_c3f8be8b in #JID_ead674af
[2026-01-21T20:18:50.571Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T20:18:50.571Z] [BOT] 💾 Added channel posting: ML Engineer 2 @ ORG_c3f8be8b → location channel (2 total channels)
[2026-01-21T20:18:50.571Z] [BOT] 💾 BEFORE ARCHIVING: 3766 jobs in database
[2026-01-21T20:18:50.573Z] [BOT] ✅ No jobs to archive (all 3766 jobs within 7-day window)
[2026-01-21T20:18:50.596Z] [BOT] 💾 Saved posted_jobs.json: 3766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:52.097Z] [BOT] 💾 Marked as posted: ML Engineer 2 @ ORG_c3f8be8b (instance #1)
[2026-01-21T20:18:52.097Z] [BOT] 💾 BEFORE ARCHIVING: 3767 jobs in database
[2026-01-21T20:18:52.099Z] [BOT] ✅ No jobs to archive (all 3767 jobs within 7-day window)
[2026-01-21T20:18:52.124Z] [BOT] 💾 Saved posted_jobs.json: 3767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:55.125Z] [BOT] 📌 Posting 3 jobs to #JID_fb739488
[2026-01-21T20:18:55.126Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer" @ Auto-Owners Insurance
[2026-01-21T20:18:55.126Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T20:18:55.421Z] [BOT] ✅ Posted message: Business Intelligence Developer @ Auto-Owners Insurance in #JID_fb739488
[2026-01-21T20:18:55.421Z] [BOT] ✅ Industry: Business Intelligence Developer @ Auto-Owners Insurance
[2026-01-21T20:18:55.422Z] [BOT] 💾 Added channel posting: Business Intelligence Developer @ Auto-Owners Insurance → category channel (1 total channels)
[2026-01-21T20:18:55.422Z] [BOT] 💾 BEFORE ARCHIVING: 3768 jobs in database
[2026-01-21T20:18:55.424Z] [BOT] ✅ No jobs to archive (all 3768 jobs within 7-day window)
[2026-01-21T20:18:55.447Z] [BOT] 💾 Saved posted_jobs.json: 3768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:57.301Z] [BOT] ✅ Posted message: Business Intelligence Developer @ Auto-Owners Insurance in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T20:18:57.301Z] [BOT] 💾 Added channel posting: Business Intelligence Developer @ Auto-Owners Insurance → location channel (2 total channels)
[2026-01-21T20:18:57.301Z] [BOT] 💾 BEFORE ARCHIVING: 3768 jobs in database
[2026-01-21T20:18:57.304Z] [BOT] ✅ No jobs to archive (all 3768 jobs within 7-day window)
[2026-01-21T20:18:57.329Z] [BOT] 💾 Saved posted_jobs.json: 3768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:58.830Z] [BOT] 💾 Marked as posted: Business Intelligence Developer @ Auto-Owners Insurance (instance #1)
💾 BEFORE ARCHIVING: 3769 jobs in database
[2026-01-21T20:18:58.832Z] [BOT] ✅ No jobs to archive (all 3769 jobs within 7-day window)
[2026-01-21T20:18:58.855Z] [BOT] 💾 Saved posted_jobs.json: 3769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:18:58.855Z] [BOT] 📍 [ROUTING] "Human Performance Data Scientist 1" @ ORG_c910d474 Dynamics Information Technology
[2026-01-21T20:18:58.856Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T20:18:59.144Z] [BOT] ✅ Posted message: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology in #JID_fb739488
  ✅ Industry: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology
[2026-01-21T20:18:59.145Z] [BOT] 💾 Added channel posting: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology → category channel (1 total channels)
[2026-01-21T20:18:59.145Z] [BOT] 💾 BEFORE ARCHIVING: 3770 jobs in database
[2026-01-21T20:18:59.147Z] [BOT] ✅ No jobs to archive (all 3770 jobs within 7-day window)
[2026-01-21T20:18:59.169Z] [BOT] 💾 Saved posted_jobs.json: 3770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:00.671Z] [BOT] 💾 Marked as posted: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology (instance #1)
💾 BEFORE ARCHIVING: 3771 jobs in database
[2026-01-21T20:19:00.673Z] [BOT] ✅ No jobs to archive (all 3771 jobs within 7-day window)
[2026-01-21T20:19:00.697Z] [BOT] 💾 Saved posted_jobs.json: 3771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:00.698Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer 1" @ ORG_d5eef8ad Space
[2026-01-21T20:19:00.698Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T20:19:00.887Z] [BOT] ✅ Posted message: Business Intelligence Developer 1 @ ORG_d5eef8ad Space in #JID_fb739488
  ✅ Industry: Business Intelligence Developer 1 @ ORG_d5eef8ad Space
[2026-01-21T20:19:00.888Z] [BOT] 💾 Added channel posting: Business Intelligence Developer 1 @ ORG_d5eef8ad Space → category channel (1 total channels)
[2026-01-21T20:19:00.888Z] [BOT] 💾 BEFORE ARCHIVING: 3772 jobs in database
[2026-01-21T20:19:00.890Z] [BOT] ✅ No jobs to archive (all 3772 jobs within 7-day window)
[2026-01-21T20:19:00.913Z] [BOT] 💾 Saved posted_jobs.json: 3772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:05.003Z] [BOT] ✅ Posted message: Business Intelligence Developer 1 @ ORG_d5eef8ad Space in #JID_ead674af
[2026-01-21T20:19:05.004Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T20:19:05.004Z] [BOT] 💾 Added channel posting: Business Intelligence Developer 1 @ ORG_d5eef8ad Space → location channel (2 total channels)
[2026-01-21T20:19:05.004Z] [BOT] 💾 BEFORE ARCHIVING: 3772 jobs in database
[2026-01-21T20:19:05.007Z] [BOT] ✅ No jobs to archive (all 3772 jobs within 7-day window)
[2026-01-21T20:19:05.029Z] [BOT] 💾 Saved posted_jobs.json: 3772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:06.531Z] [BOT] 💾 Marked as posted: Business Intelligence Developer 1 @ ORG_d5eef8ad Space (instance #1)
[2026-01-21T20:19:06.531Z] [BOT] 💾 BEFORE ARCHIVING: 3773 jobs in database
[2026-01-21T20:19:06.533Z] [BOT] ✅ No jobs to archive (all 3773 jobs within 7-day window)
[2026-01-21T20:19:06.557Z] [BOT] 💾 Saved posted_jobs.json: 3773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:09.557Z] [BOT] 📌 Posting 1 jobs to #tech-jobs
[2026-01-21T20:19:09.558Z] [BOT] 📍 [ROUTING] "Research Associate - Electrical and Computer Engineering" @ ORG_15a5b314 Mellon University
   Category: TECH (matched: "engineer/engineering")
[2026-01-21T20:19:09.558Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T20:19:09.938Z] [BOT] ✅ Posted message: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #tech-jobs
  ✅ Industry: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University
[2026-01-21T20:19:09.939Z] [BOT] 💾 Added channel posting: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University → category channel (1 total channels)
[2026-01-21T20:19:09.939Z] [BOT] 💾 BEFORE ARCHIVING: 3774 jobs in database
[2026-01-21T20:19:09.941Z] [BOT] ✅ No jobs to archive (all 3774 jobs within 7-day window)
[2026-01-21T20:19:09.963Z] [BOT] 💾 Saved posted_jobs.json: 3774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:11.851Z] [BOT] ✅ Posted message: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T20:19:11.852Z] [BOT] 💾 Added channel posting: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University → location channel (2 total channels)
[2026-01-21T20:19:11.852Z] [BOT] 💾 BEFORE ARCHIVING: 3774 jobs in database
[2026-01-21T20:19:11.854Z] [BOT] ✅ No jobs to archive (all 3774 jobs within 7-day window)
[2026-01-21T20:19:11.879Z] [BOT] 💾 Saved posted_jobs.json: 3774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:13.381Z] [BOT] 💾 Marked as posted: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University (instance #1)
💾 BEFORE ARCHIVING: 3775 jobs in database
[2026-01-21T20:19:13.383Z] [BOT] ✅ No jobs to archive (all 3775 jobs within 7-day window)
[2026-01-21T20:19:13.406Z] [BOT] 💾 Saved posted_jobs.json: 3775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:16.407Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T20:19:16.408Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ anthropic
[2026-01-21T20:19:16.408Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T20:19:16.926Z] [BOT] ✅ Posted message: Business Development Representative @ anthropic in #finance-jobs
  ✅ Industry: Business Development Representative @ anthropic
[2026-01-21T20:19:16.927Z] [BOT] 💾 Added channel posting: Business Development Representative @ anthropic → category channel (1 total channels)
[2026-01-21T20:19:16.927Z] [BOT] 💾 BEFORE ARCHIVING: 3776 jobs in database
[2026-01-21T20:19:16.929Z] [BOT] ✅ No jobs to archive (all 3776 jobs within 7-day window)
[2026-01-21T20:19:16.951Z] [BOT] 💾 Saved posted_jobs.json: 3776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:18.452Z] [BOT] 💾 Marked as posted: Business Development Representative @ anthropic (instance #1)
[2026-01-21T20:19:18.452Z] [BOT] 💾 BEFORE ARCHIVING: 3777 jobs in database
[2026-01-21T20:19:18.454Z] [BOT] ✅ No jobs to archive (all 3777 jobs within 7-day window)
[2026-01-21T20:19:18.478Z] [BOT] 💾 Saved posted_jobs.json: 3777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T20:19:21.478Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T20:19:21.478Z] [BOT] ⏭️  Skipping duplicate: JID_a8d44a7a (posted within 7 days)
[2026-01-21T20:19:21.479Z] [BOT] ⏭️  Skipping duplicate: JID_3872c3b0-developer_r_12154 (posted within 7 days)
[2026-01-21T20:19:21.479Z] [BOT] ⏭️  Skipping duplicate: JID_3b973b7c (posted within 7 days)
[2026-01-21T20:19:21.479Z] [BOT] ⏭️  Skipping duplicate: JID_16bc128a-dfa_careers-JID_51bbdaf5-_2025-8613 (posted within 7 days)
[2026-01-21T20:19:21.479Z] [BOT] ⏭️  Skipping duplicate: JID_18a793b5-_r-5997 (posted within 7 days)
[2026-01-21T20:19:21.480Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_bfd0c3d7-i_rq210954 (posted within 7 days)
[2026-01-21T20:19:21.480Z] [BOT] ⏭️  Skipping duplicate: JID_554da341-ii_r2882-1 (posted within 7 days)
[2026-01-21T20:19:21.480Z] [BOT] ⏭️  Skipping duplicate: JID_6a87daf6-engineering_2022193 (posted within 7 days)
[2026-01-21T20:19:21.480Z] [BOT] ⏭️  Skipping duplicate: JID_154d0a16-sierra_space_external_career_site-JID_756c755e-co_ara-JID_0276b17a-i_r25115-1 (posted within 7 days)
[2026-01-21T20:19:21.480Z] [BOT] ⏭️  Skipping duplicate: JID_4bca4deb (posted within 7 days)
[2026-01-21T20:19:21.624Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[2026-01-21T20:19:21.815Z] [BOT] ✅ Saved pending queue: 2767 total (2747 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T20:19:21.886Z] [BOT] 📂 Loaded 6071 existing routing entries
[2026-01-21T20:19:21.960Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6081
   Timestamp: 2026-01-21T20:19:21.937Z
[2026-01-21T20:19:21.961Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 16
   Successful: 16
[2026-01-21T20:19:21.961Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-21T20:19:21.961Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T20:19:21.961Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 5
   Top channels:
[2026-01-21T20:19:21.961Z] [BOT] 1. #JID_ead674af: 6 posts
     2. #ai-jobs: 5 posts
     3. #JID_fb739488: 3 posts
     4. #tech-jobs: 1 posts
     5. #finance-jobs: 1 posts
[2026-01-21T20:19:21.961Z] [BOT] [STATS] Channel stats saved
[2026-01-21T20:19:23.980Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2635) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*