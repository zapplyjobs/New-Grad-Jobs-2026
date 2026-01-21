# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T15:32:17.613Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 7
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T15:31:50.400Z] ========================================
[2026-01-21T15:31:50.402Z] Discord Bot Execution Log
[2026-01-21T15:31:50.402Z] Environment: GitHub Actions
[2026-01-21T15:31:50.402Z] Node Version: v20.19.6
[2026-01-21T15:31:50.402Z] ========================================
[2026-01-21T15:31:50.402Z] Environment Variables Check:
[2026-01-21T15:31:50.402Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T15:31:50.402Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.402Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T15:31:50.403Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T15:31:50.403Z] 
Multi-Channel Configuration:
[2026-01-21T15:31:50.403Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.403Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.403Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.403Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.403Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.403Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.403Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.403Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.403Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T15:31:50.403Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T15:31:50.403Z] 
Data Files Check:
[2026-01-21T15:31:50.405Z] .github/data/new_jobs.json: ✅ Exists (10 items, 160695 bytes)
[2026-01-21T15:31:50.419Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2050811 bytes)
[2026-01-21T15:31:50.419Z] 
========================================
[2026-01-21T15:31:50.419Z] Starting Enhanced Discord Bot...
[2026-01-21T15:31:50.419Z] ========================================
[2026-01-21T15:31:50.970Z] [BOT] ✅ Loaded V2 database: 3568 jobs
[2026-01-21T15:31:51.631Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T15:31:51.631Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T15:31:51.631Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T15:31:51.757Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Implementation Consultant, Financial Saas at brex
[2026-01-21T15:31:51.761Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T15:31:51.761Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T15:31:51.761Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T15:31:51.762Z] [BOT] 📋 After multi-location grouping: 7 unique jobs to post
[2026-01-21T15:31:51.762Z] [BOT] (13 grouped as same job with different locations)
📍 6 jobs with multiple locations:
   - Enterprise Implementation Consultant, Financial Saas @ brex: new york, new york, united states, seattle, washington, united states, salt lake city, utah, united states
   - Implementation Consultant II @ brex: salt lake city, utah, united states, seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Manager, Recruiting Coordination and Programs @ brex: san francisco, california, united states, new york, new york, united states
   - Mid-Market Customer Success Manager @ brex: san francisco, california, united states, new york, new york, united states, seattle, washington, united states, salt lake city, utah, united states
   - Outbound Sales Development Representative @ brex: seattle, washington, united states, salt lake city, utah, united states, san francisco, california, united states
[2026-01-21T15:31:51.762Z] [BOT] - Product and Regulatory Counsel @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 13 deferred for next run
📤 Posting 7 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T15:31:51.766Z] [BOT] 📌 Posting 4 jobs to #finance-jobs
[2026-01-21T15:31:51.767Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant, Financial Saas" @ brex
[2026-01-21T15:31:51.767Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: finance-jobs (1462...4023)
[2026-01-21T15:31:51.785Z] [BOT ERROR] (node:2404) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T15:31:52.107Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant, Financial Saas @ brex in #finance-jobs
[2026-01-21T15:31:52.107Z] [BOT] ✅ Industry: Enterprise Implementation Consultant, Financial Saas @ brex
[2026-01-21T15:31:52.109Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant, Financial Saas @ brex → category channel (1 total channels)
[2026-01-21T15:31:52.109Z] [BOT] 💾 BEFORE ARCHIVING: 3569 jobs in database
[2026-01-21T15:31:52.112Z] [BOT] ✅ No jobs to archive (all 3569 jobs within 7-day window)
[2026-01-21T15:31:52.142Z] [BOT] 💾 Saved posted_jobs.json: 3569 active jobs
[2026-01-21T15:31:52.142Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T15:31:53.880Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant, Financial Saas @ brex in #JID_98d4f0de
[2026-01-21T15:31:53.880Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T15:31:53.881Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant, Financial Saas @ brex → location channel (2 total channels)
[2026-01-21T15:31:53.881Z] [BOT] 💾 BEFORE ARCHIVING: 3569 jobs in database
[2026-01-21T15:31:53.883Z] [BOT] ✅ No jobs to archive (all 3569 jobs within 7-day window)
[2026-01-21T15:31:53.906Z] [BOT] 💾 Saved posted_jobs.json: 3569 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:31:55.407Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-21T15:31:55.408Z] [BOT] 💾 BEFORE ARCHIVING: 3570 jobs in database
[2026-01-21T15:31:55.410Z] [BOT] ✅ No jobs to archive (all 3570 jobs within 7-day window)
[2026-01-21T15:31:55.434Z] [BOT] 💾 Saved posted_jobs.json: 3570 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:31:55.434Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-21T15:31:55.435Z] [BOT] 💾 BEFORE ARCHIVING: 3571 jobs in database
[2026-01-21T15:31:55.437Z] [BOT] ✅ No jobs to archive (all 3571 jobs within 7-day window)
[2026-01-21T15:31:55.460Z] [BOT] 💾 Saved posted_jobs.json: 3571 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:31:55.461Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
💾 BEFORE ARCHIVING: 3572 jobs in database
[2026-01-21T15:31:55.463Z] [BOT] ✅ No jobs to archive (all 3572 jobs within 7-day window)
[2026-01-21T15:31:55.485Z] [BOT] 💾 Saved posted_jobs.json: 3572 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:31:55.485Z] [BOT] 📍 [ROUTING] "Head of Internal Communications" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-21T15:31:55.486Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T15:31:55.878Z] [BOT] ✅ Posted message: Head of Internal Communications @ brex in #finance-jobs
[2026-01-21T15:31:55.878Z] [BOT] ✅ Industry: Head of Internal Communications @ brex
[2026-01-21T15:31:55.879Z] [BOT] 💾 Added channel posting: Head of Internal Communications @ brex → category channel (1 total channels)
[2026-01-21T15:31:55.879Z] [BOT] 💾 BEFORE ARCHIVING: 3573 jobs in database
[2026-01-21T15:31:55.882Z] [BOT] ✅ No jobs to archive (all 3573 jobs within 7-day window)
[2026-01-21T15:31:55.903Z] [BOT] 💾 Saved posted_jobs.json: 3573 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:31:57.405Z] [BOT] 💾 Marked as posted: Head of Internal Communications @ brex (instance #1)
[2026-01-21T15:31:57.405Z] [BOT] 💾 BEFORE ARCHIVING: 3574 jobs in database
[2026-01-21T15:31:57.407Z] [BOT] ✅ No jobs to archive (all 3574 jobs within 7-day window)
[2026-01-21T15:31:57.430Z] [BOT] 💾 Saved posted_jobs.json: 3574 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:31:57.430Z] [BOT] 📍 [ROUTING] "Implementation Consultant II" @ brex
[2026-01-21T15:31:57.430Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: finance-jobs (1462...4023)
[2026-01-21T15:31:57.594Z] [BOT] ✅ Posted message: Implementation Consultant II @ brex in #finance-jobs
[2026-01-21T15:31:57.594Z] [BOT] ✅ Industry: Implementation Consultant II @ brex
[2026-01-21T15:31:57.595Z] [BOT] 💾 Added channel posting: Implementation Consultant II @ brex → category channel (1 total channels)
[2026-01-21T15:31:57.595Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-21T15:31:57.597Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-21T15:31:57.619Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:31:59.378Z] [BOT] ✅ Posted message: Implementation Consultant II @ brex in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T15:31:59.379Z] [BOT] 💾 Added channel posting: Implementation Consultant II @ brex → location channel (2 total channels)
[2026-01-21T15:31:59.379Z] [BOT] 💾 BEFORE ARCHIVING: 3575 jobs in database
[2026-01-21T15:31:59.381Z] [BOT] ✅ No jobs to archive (all 3575 jobs within 7-day window)
[2026-01-21T15:31:59.403Z] [BOT] 💾 Saved posted_jobs.json: 3575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:00.904Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-21T15:32:00.904Z] [BOT] 💾 BEFORE ARCHIVING: 3576 jobs in database
[2026-01-21T15:32:00.906Z] [BOT] ✅ No jobs to archive (all 3576 jobs within 7-day window)
[2026-01-21T15:32:00.932Z] [BOT] 💾 Saved posted_jobs.json: 3576 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:00.932Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
💾 BEFORE ARCHIVING: 3577 jobs in database
[2026-01-21T15:32:00.935Z] [BOT] ✅ No jobs to archive (all 3577 jobs within 7-day window)
[2026-01-21T15:32:00.959Z] [BOT] 💾 Saved posted_jobs.json: 3577 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:00.959Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-21T15:32:00.959Z] [BOT] 💾 BEFORE ARCHIVING: 3578 jobs in database
[2026-01-21T15:32:00.961Z] [BOT] ✅ No jobs to archive (all 3578 jobs within 7-day window)
[2026-01-21T15:32:00.984Z] [BOT] 💾 Saved posted_jobs.json: 3578 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:00.985Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-21T15:32:00.985Z] [BOT] 💾 BEFORE ARCHIVING: 3579 jobs in database
[2026-01-21T15:32:00.987Z] [BOT] ✅ No jobs to archive (all 3579 jobs within 7-day window)
[2026-01-21T15:32:01.009Z] [BOT] 💾 Saved posted_jobs.json: 3579 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:01.010Z] [BOT] 📍 [ROUTING] "Mid-Market Customer Success Manager" @ brex
[2026-01-21T15:32:01.010Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T15:32:01.190Z] [BOT] ✅ Posted message: Mid-Market Customer Success Manager @ brex in #finance-jobs
  ✅ Industry: Mid-Market Customer Success Manager @ brex
[2026-01-21T15:32:01.191Z] [BOT] 💾 Added channel posting: Mid-Market Customer Success Manager @ brex → category channel (1 total channels)
[2026-01-21T15:32:01.191Z] [BOT] 💾 BEFORE ARCHIVING: 3580 jobs in database
[2026-01-21T15:32:01.194Z] [BOT] ✅ No jobs to archive (all 3580 jobs within 7-day window)
[2026-01-21T15:32:01.215Z] [BOT] 💾 Saved posted_jobs.json: 3580 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:02.717Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-21T15:32:02.717Z] [BOT] 💾 BEFORE ARCHIVING: 3581 jobs in database
[2026-01-21T15:32:02.719Z] [BOT] ✅ No jobs to archive (all 3581 jobs within 7-day window)
[2026-01-21T15:32:02.741Z] [BOT] 💾 Saved posted_jobs.json: 3581 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:02.741Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-21T15:32:02.741Z] [BOT] 💾 BEFORE ARCHIVING: 3582 jobs in database
[2026-01-21T15:32:02.743Z] [BOT] ✅ No jobs to archive (all 3582 jobs within 7-day window)
[2026-01-21T15:32:02.764Z] [BOT] 💾 Saved posted_jobs.json: 3582 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:02.765Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-21T15:32:02.765Z] [BOT] 💾 BEFORE ARCHIVING: 3583 jobs in database
[2026-01-21T15:32:02.767Z] [BOT] ✅ No jobs to archive (all 3583 jobs within 7-day window)
[2026-01-21T15:32:02.788Z] [BOT] 💾 Saved posted_jobs.json: 3583 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:02.789Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-21T15:32:02.789Z] [BOT] 💾 BEFORE ARCHIVING: 3584 jobs in database
[2026-01-21T15:32:02.791Z] [BOT] ✅ No jobs to archive (all 3584 jobs within 7-day window)
[2026-01-21T15:32:02.812Z] [BOT] 💾 Saved posted_jobs.json: 3584 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:05.813Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-21T15:32:05.814Z] [BOT] 📍 [ROUTING] "Manager, Recruiting Coordination and Programs" @ brex
   Category: TECH (default)
[2026-01-21T15:32:05.814Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T15:32:06.025Z] [BOT] ✅ Posted message: Manager, Recruiting Coordination and Programs @ brex in #tech-jobs
[2026-01-21T15:32:06.025Z] [BOT] ✅ Industry: Manager, Recruiting Coordination and Programs @ brex
[2026-01-21T15:32:06.026Z] [BOT] 💾 Added channel posting: Manager, Recruiting Coordination and Programs @ brex → category channel (1 total channels)
[2026-01-21T15:32:06.026Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-21T15:32:06.028Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-21T15:32:06.051Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:07.552Z] [BOT] 💾 Marked as posted: Manager, Recruiting Coordination and Programs @ brex (instance #1)
[2026-01-21T15:32:07.552Z] [BOT] 💾 BEFORE ARCHIVING: 3586 jobs in database
[2026-01-21T15:32:07.554Z] [BOT] ✅ No jobs to archive (all 3586 jobs within 7-day window)
[2026-01-21T15:32:07.576Z] [BOT] 💾 Saved posted_jobs.json: 3586 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:07.576Z] [BOT] 💾 Marked as posted: Manager, Recruiting Coordination and Programs @ brex (instance #1)
[2026-01-21T15:32:07.576Z] [BOT] 💾 BEFORE ARCHIVING: 3587 jobs in database
[2026-01-21T15:32:07.578Z] [BOT] ✅ No jobs to archive (all 3587 jobs within 7-day window)
[2026-01-21T15:32:07.599Z] [BOT] 💾 Saved posted_jobs.json: 3587 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:07.600Z] [BOT] 📍 [ROUTING] "Outbound Sales Development Representative" @ brex
[2026-01-21T15:32:07.600Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T15:32:07.815Z] [BOT] ✅ Posted message: Outbound Sales Development Representative @ brex in #tech-jobs
  ✅ Industry: Outbound Sales Development Representative @ brex
[2026-01-21T15:32:07.816Z] [BOT] 💾 Added channel posting: Outbound Sales Development Representative @ brex → category channel (1 total channels)
[2026-01-21T15:32:07.816Z] [BOT] 💾 BEFORE ARCHIVING: 3588 jobs in database
[2026-01-21T15:32:07.818Z] [BOT] ✅ No jobs to archive (all 3588 jobs within 7-day window)
[2026-01-21T15:32:07.839Z] [BOT] 💾 Saved posted_jobs.json: 3588 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:09.341Z] [BOT] 💾 Marked as posted: Outbound Sales Development Representative @ brex (instance #1)
[2026-01-21T15:32:09.341Z] [BOT] 💾 BEFORE ARCHIVING: 3589 jobs in database
[2026-01-21T15:32:09.343Z] [BOT] ✅ No jobs to archive (all 3589 jobs within 7-day window)
[2026-01-21T15:32:09.365Z] [BOT] 💾 Saved posted_jobs.json: 3589 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:09.365Z] [BOT] 💾 Marked as posted: Outbound Sales Development Representative @ brex (instance #1)
[2026-01-21T15:32:09.365Z] [BOT] 💾 BEFORE ARCHIVING: 3590 jobs in database
[2026-01-21T15:32:09.367Z] [BOT] ✅ No jobs to archive (all 3590 jobs within 7-day window)
[2026-01-21T15:32:09.388Z] [BOT] 💾 Saved posted_jobs.json: 3590 active jobs
[2026-01-21T15:32:09.389Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:09.389Z] [BOT] 💾 Marked as posted: Outbound Sales Development Representative @ brex (instance #1)
[2026-01-21T15:32:09.389Z] [BOT] 💾 BEFORE ARCHIVING: 3591 jobs in database
[2026-01-21T15:32:09.391Z] [BOT] ✅ No jobs to archive (all 3591 jobs within 7-day window)
[2026-01-21T15:32:09.412Z] [BOT] 💾 Saved posted_jobs.json: 3591 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:09.413Z] [BOT] 📍 [ROUTING] "Product and Regulatory Counsel" @ brex
   Category: TECH (default)
[2026-01-21T15:32:09.413Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T15:32:09.847Z] [BOT] ✅ Posted message: Product and Regulatory Counsel @ brex in #tech-jobs
[2026-01-21T15:32:09.847Z] [BOT] ✅ Industry: Product and Regulatory Counsel @ brex
[2026-01-21T15:32:09.848Z] [BOT] 💾 Added channel posting: Product and Regulatory Counsel @ brex → category channel (1 total channels)
[2026-01-21T15:32:09.848Z] [BOT] 💾 BEFORE ARCHIVING: 3592 jobs in database
[2026-01-21T15:32:09.850Z] [BOT] ✅ No jobs to archive (all 3592 jobs within 7-day window)
[2026-01-21T15:32:09.871Z] [BOT] 💾 Saved posted_jobs.json: 3592 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:11.373Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
[2026-01-21T15:32:11.373Z] [BOT] 💾 BEFORE ARCHIVING: 3593 jobs in database
[2026-01-21T15:32:11.376Z] [BOT] ✅ No jobs to archive (all 3593 jobs within 7-day window)
[2026-01-21T15:32:11.397Z] [BOT] 💾 Saved posted_jobs.json: 3593 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:11.397Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
💾 BEFORE ARCHIVING: 3594 jobs in database
[2026-01-21T15:32:11.399Z] [BOT] ✅ No jobs to archive (all 3594 jobs within 7-day window)
[2026-01-21T15:32:11.421Z] [BOT] 💾 Saved posted_jobs.json: 3594 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:11.421Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
[2026-01-21T15:32:11.421Z] [BOT] 💾 BEFORE ARCHIVING: 3595 jobs in database
[2026-01-21T15:32:11.423Z] [BOT] ✅ No jobs to archive (all 3595 jobs within 7-day window)
[2026-01-21T15:32:11.445Z] [BOT] 💾 Saved posted_jobs.json: 3595 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:32:14.446Z] [BOT] 🎉 Posting complete! Successfully posted: 7, Failed: 0
[2026-01-21T15:32:14.447Z] [BOT] ⏭️  Skipping duplicate: JID_7a0083e6 (posted within 7 days)
[2026-01-21T15:32:14.447Z] [BOT] ⏭️  Skipping duplicate: JID_7f254d06 (posted within 7 days)
[2026-01-21T15:32:14.448Z] [BOT] ⏭️  Skipping duplicate: JID_73086167 (posted within 7 days)
[2026-01-21T15:32:14.448Z] [BOT] ⏭️  Skipping duplicate: JID_4921d491 (posted within 7 days)
[2026-01-21T15:32:14.448Z] [BOT] ⏭️  Skipping duplicate: JID_ee0215f5 (posted within 7 days)
[2026-01-21T15:32:14.449Z] [BOT] ⏭️  Skipping duplicate: JID_e5738f10 (posted within 7 days)
⏭️  Skipping duplicate: JID_e75c82d9 (posted within 7 days)
[2026-01-21T15:32:14.566Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[2026-01-21T15:32:14.741Z] [BOT] ✅ Saved pending queue: 2768 total (2748 pending, 13 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T15:32:14.812Z] [BOT] 📂 Loaded 5954 existing routing entries
[2026-01-21T15:32:14.889Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 7
   Total entries: 5961
   Timestamp: 2026-01-21T15:32:14.869Z
[2026-01-21T15:32:14.890Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 9
[2026-01-21T15:32:14.890Z] [BOT] Successful: 9
   Failed: 0
   Skipped: 0
[2026-01-21T15:32:14.890Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
[2026-01-21T15:32:14.890Z] [BOT] Channels used: 4
   Top channels:
     1. #finance-jobs: 4 posts
     2. #tech-jobs: 3 posts
[2026-01-21T15:32:14.890Z] [BOT] 3. #JID_98d4f0de: 1 posts
     4. #JID_ead674af: 1 posts
[2026-01-21T15:32:14.890Z] [BOT] [STATS] Channel stats saved
[2026-01-21T15:32:16.917Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2404) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*