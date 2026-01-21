# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T15:51:45.556Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T15:51:05.266Z] ========================================
[2026-01-21T15:51:05.268Z] Discord Bot Execution Log
[2026-01-21T15:51:05.268Z] Environment: GitHub Actions
[2026-01-21T15:51:05.268Z] Node Version: v20.19.6
[2026-01-21T15:51:05.268Z] ========================================
[2026-01-21T15:51:05.268Z] Environment Variables Check:
[2026-01-21T15:51:05.268Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T15:51:05.269Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.269Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T15:51:05.269Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T15:51:05.269Z] 
Multi-Channel Configuration:
[2026-01-21T15:51:05.269Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.269Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.269Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.269Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.269Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.269Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.269Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.270Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.270Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T15:51:05.270Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T15:51:05.270Z] 
Data Files Check:
[2026-01-21T15:51:05.271Z] .github/data/new_jobs.json: ✅ Exists (10 items, 161337 bytes)
[2026-01-21T15:51:05.284Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2064797 bytes)
[2026-01-21T15:51:05.284Z] 
========================================
[2026-01-21T15:51:05.284Z] Starting Enhanced Discord Bot...
[2026-01-21T15:51:05.284Z] ========================================
[2026-01-21T15:51:05.809Z] [BOT] ✅ Loaded V2 database: 3595 jobs
[2026-01-21T15:51:06.711Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T15:51:06.712Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T15:51:06.712Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T15:51:06.833Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product and Regulatory Counsel at brex
[2026-01-21T15:51:06.838Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T15:51:06.838Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T15:51:06.838Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T15:51:06.839Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-21T15:51:06.839Z] [BOT] (10 grouped as same job with different locations)
📍 6 jobs with multiple locations:
   - Sales Manager, Startups @ brex: san francisco, california, united states, new york, new york, united states
   - Senior Accountant @ brex: new york, new york, united states, seattle, washington, united states, salt lake city, utah, united states, san francisco, california, united states
   - Senior Application Security Engineer @ brex: new york, new york, united states, seattle, washington, united states, san francisco, california, united states
[2026-01-21T15:51:06.839Z] [BOT] - Senior Engineering Manager, Acquisition @ brex: san francisco, california, united states, new york, new york, united states, seattle, washington, united states
   - Senior Engineering Manager, Activation @ brex: new york, new york, united states, seattle, washington, united states
   - Senior Engineering Manager, Risk Management @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T15:51:06.843Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T15:51:06.844Z] [BOT] 📍 [ROUTING] "Product and Regulatory Counsel" @ brex
   Category: TECH (default)
[2026-01-21T15:51:06.844Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T15:51:06.861Z] [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T15:51:07.110Z] [BOT] ✅ Posted message: Product and Regulatory Counsel @ brex in #tech-jobs
[2026-01-21T15:51:07.110Z] [BOT] ✅ Industry: Product and Regulatory Counsel @ brex
[2026-01-21T15:51:07.111Z] [BOT] 💾 Added channel posting: Product and Regulatory Counsel @ brex → category channel (1 total channels)
[2026-01-21T15:51:07.111Z] [BOT] 💾 BEFORE ARCHIVING: 3596 jobs in database
[2026-01-21T15:51:07.114Z] [BOT] ✅ No jobs to archive (all 3596 jobs within 7-day window)
[2026-01-21T15:51:07.141Z] [BOT] 💾 Saved posted_jobs.json: 3596 active jobs
[2026-01-21T15:51:07.141Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:08.642Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
[2026-01-21T15:51:08.643Z] [BOT] 💾 BEFORE ARCHIVING: 3597 jobs in database
[2026-01-21T15:51:08.645Z] [BOT] ✅ No jobs to archive (all 3597 jobs within 7-day window)
[2026-01-21T15:51:08.667Z] [BOT] 💾 Saved posted_jobs.json: 3597 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:08.667Z] [BOT] 📍 [ROUTING] "Senior Application Security Engineer" @ brex
[2026-01-21T15:51:08.667Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T15:51:08.957Z] [BOT] ✅ Posted message: Senior Application Security Engineer @ brex in #tech-jobs
[2026-01-21T15:51:08.958Z] [BOT] ✅ Industry: Senior Application Security Engineer @ brex
[2026-01-21T15:51:08.958Z] [BOT] 💾 Added channel posting: Senior Application Security Engineer @ brex → category channel (1 total channels)
[2026-01-21T15:51:08.959Z] [BOT] 💾 BEFORE ARCHIVING: 3598 jobs in database
[2026-01-21T15:51:08.961Z] [BOT] ✅ No jobs to archive (all 3598 jobs within 7-day window)
[2026-01-21T15:51:08.984Z] [BOT] 💾 Saved posted_jobs.json: 3598 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:10.695Z] [BOT] ✅ Posted message: Senior Application Security Engineer @ brex in #JID_98d4f0de
[2026-01-21T15:51:10.695Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T15:51:10.696Z] [BOT] 💾 Added channel posting: Senior Application Security Engineer @ brex → location channel (2 total channels)
[2026-01-21T15:51:10.696Z] [BOT] 💾 BEFORE ARCHIVING: 3598 jobs in database
[2026-01-21T15:51:10.698Z] [BOT] ✅ No jobs to archive (all 3598 jobs within 7-day window)
[2026-01-21T15:51:10.721Z] [BOT] 💾 Saved posted_jobs.json: 3598 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:12.223Z] [BOT] 💾 Marked as posted: Senior Application Security Engineer @ brex (instance #1)
[2026-01-21T15:51:12.223Z] [BOT] 💾 BEFORE ARCHIVING: 3599 jobs in database
[2026-01-21T15:51:12.225Z] [BOT] ✅ No jobs to archive (all 3599 jobs within 7-day window)
[2026-01-21T15:51:12.245Z] [BOT] 💾 Saved posted_jobs.json: 3599 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:12.246Z] [BOT] 💾 Marked as posted: Senior Application Security Engineer @ brex (instance #1)
[2026-01-21T15:51:12.246Z] [BOT] 💾 BEFORE ARCHIVING: 3600 jobs in database
[2026-01-21T15:51:12.248Z] [BOT] ✅ No jobs to archive (all 3600 jobs within 7-day window)
[2026-01-21T15:51:12.268Z] [BOT] 💾 Saved posted_jobs.json: 3600 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:12.269Z] [BOT] 💾 Marked as posted: Senior Application Security Engineer @ brex (instance #1)
[2026-01-21T15:51:12.269Z] [BOT] 💾 BEFORE ARCHIVING: 3601 jobs in database
[2026-01-21T15:51:12.271Z] [BOT] ✅ No jobs to archive (all 3601 jobs within 7-day window)
[2026-01-21T15:51:12.291Z] [BOT] 💾 Saved posted_jobs.json: 3601 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:12.291Z] [BOT] 📍 [ROUTING] "Salesforce Administrator" @ anthropic
[2026-01-21T15:51:12.292Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T15:51:12.655Z] [BOT] ✅ Posted message: Salesforce Administrator @ anthropic in #tech-jobs
  ✅ Industry: Salesforce Administrator @ anthropic
[2026-01-21T15:51:12.656Z] [BOT] 💾 Added channel posting: Salesforce Administrator @ anthropic → category channel (1 total channels)
[2026-01-21T15:51:12.656Z] [BOT] 💾 BEFORE ARCHIVING: 3602 jobs in database
[2026-01-21T15:51:12.658Z] [BOT] ✅ No jobs to archive (all 3602 jobs within 7-day window)
[2026-01-21T15:51:12.679Z] [BOT] 💾 Saved posted_jobs.json: 3602 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:14.180Z] [BOT] 💾 Marked as posted: Salesforce Administrator @ anthropic (instance #1)
[2026-01-21T15:51:14.180Z] [BOT] 💾 BEFORE ARCHIVING: 3603 jobs in database
[2026-01-21T15:51:14.182Z] [BOT] ✅ No jobs to archive (all 3603 jobs within 7-day window)
[2026-01-21T15:51:14.204Z] [BOT] 💾 Saved posted_jobs.json: 3603 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:14.204Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Acquisition" @ brex
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T15:51:14.468Z] [BOT] ✅ Posted message: Senior Engineering Manager, Acquisition @ brex in #tech-jobs
  ✅ Industry: Senior Engineering Manager, Acquisition @ brex
[2026-01-21T15:51:14.469Z] [BOT] 💾 Added channel posting: Senior Engineering Manager, Acquisition @ brex → category channel (1 total channels)
[2026-01-21T15:51:14.469Z] [BOT] 💾 BEFORE ARCHIVING: 3604 jobs in database
[2026-01-21T15:51:14.471Z] [BOT] ✅ No jobs to archive (all 3604 jobs within 7-day window)
[2026-01-21T15:51:14.491Z] [BOT] 💾 Saved posted_jobs.json: 3604 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:15.993Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Acquisition @ brex (instance #1)
[2026-01-21T15:51:15.993Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-21T15:51:15.996Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-21T15:51:16.021Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:16.021Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Acquisition @ brex (instance #1)
[2026-01-21T15:51:16.022Z] [BOT] 💾 BEFORE ARCHIVING: 3606 jobs in database
[2026-01-21T15:51:16.024Z] [BOT] ✅ No jobs to archive (all 3606 jobs within 7-day window)
[2026-01-21T15:51:16.048Z] [BOT] 💾 Saved posted_jobs.json: 3606 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:16.049Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Acquisition @ brex (instance #1)
[2026-01-21T15:51:16.049Z] [BOT] 💾 BEFORE ARCHIVING: 3607 jobs in database
[2026-01-21T15:51:16.051Z] [BOT] ✅ No jobs to archive (all 3607 jobs within 7-day window)
[2026-01-21T15:51:16.074Z] [BOT] 💾 Saved posted_jobs.json: 3607 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:16.074Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Risk Management" @ brex
[2026-01-21T15:51:16.074Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T15:51:16.321Z] [BOT] ✅ Posted message: Senior Engineering Manager, Risk Management @ brex in #tech-jobs
  ✅ Industry: Senior Engineering Manager, Risk Management @ brex
[2026-01-21T15:51:16.322Z] [BOT] 💾 Added channel posting: Senior Engineering Manager, Risk Management @ brex → category channel (1 total channels)
[2026-01-21T15:51:16.322Z] [BOT] 💾 BEFORE ARCHIVING: 3608 jobs in database
[2026-01-21T15:51:16.324Z] [BOT] ✅ No jobs to archive (all 3608 jobs within 7-day window)
[2026-01-21T15:51:16.345Z] [BOT] 💾 Saved posted_jobs.json: 3608 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:18.113Z] [BOT] ✅ Posted message: Senior Engineering Manager, Risk Management @ brex in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T15:51:18.114Z] [BOT] 💾 Added channel posting: Senior Engineering Manager, Risk Management @ brex → location channel (2 total channels)
[2026-01-21T15:51:18.114Z] [BOT] 💾 BEFORE ARCHIVING: 3608 jobs in database
[2026-01-21T15:51:18.116Z] [BOT] ✅ No jobs to archive (all 3608 jobs within 7-day window)
[2026-01-21T15:51:18.137Z] [BOT] 💾 Saved posted_jobs.json: 3608 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:19.638Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Risk Management @ brex (instance #1)
[2026-01-21T15:51:19.639Z] [BOT] 💾 BEFORE ARCHIVING: 3609 jobs in database
[2026-01-21T15:51:19.641Z] [BOT] ✅ No jobs to archive (all 3609 jobs within 7-day window)
[2026-01-21T15:51:19.661Z] [BOT] 💾 Saved posted_jobs.json: 3609 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:19.662Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Risk Management  @ brex (instance #1)
[2026-01-21T15:51:19.662Z] [BOT] 💾 BEFORE ARCHIVING: 3610 jobs in database
[2026-01-21T15:51:19.664Z] [BOT] ✅ No jobs to archive (all 3610 jobs within 7-day window)
[2026-01-21T15:51:19.685Z] [BOT] 💾 Saved posted_jobs.json: 3610 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:22.687Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-21T15:51:22.688Z] [BOT] 📍 [ROUTING] "Sales Manager, Startups" @ brex
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T15:51:22.919Z] [BOT] ✅ Posted message: Sales Manager, Startups @ brex in #finance-jobs
  ✅ Industry: Sales Manager, Startups @ brex
[2026-01-21T15:51:22.919Z] [BOT] 💾 Added channel posting: Sales Manager, Startups @ brex → category channel (1 total channels)
[2026-01-21T15:51:22.920Z] [BOT] 💾 BEFORE ARCHIVING: 3611 jobs in database
[2026-01-21T15:51:22.922Z] [BOT] ✅ No jobs to archive (all 3611 jobs within 7-day window)
[2026-01-21T15:51:22.943Z] [BOT] 💾 Saved posted_jobs.json: 3611 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:24.444Z] [BOT] 💾 Marked as posted: Sales Manager, Startups @ brex (instance #1)
[2026-01-21T15:51:24.444Z] [BOT] 💾 BEFORE ARCHIVING: 3612 jobs in database
[2026-01-21T15:51:24.446Z] [BOT] ✅ No jobs to archive (all 3612 jobs within 7-day window)
[2026-01-21T15:51:24.467Z] [BOT] 💾 Saved posted_jobs.json: 3612 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:24.468Z] [BOT] 💾 Marked as posted: Sales Manager, Startups @ brex (instance #1)
[2026-01-21T15:51:24.468Z] [BOT] 💾 BEFORE ARCHIVING: 3613 jobs in database
[2026-01-21T15:51:24.470Z] [BOT] ✅ No jobs to archive (all 3613 jobs within 7-day window)
[2026-01-21T15:51:24.491Z] [BOT] 💾 Saved posted_jobs.json: 3613 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:24.491Z] [BOT] 📍 [ROUTING] "Senior Accountant" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-21T15:51:24.492Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T15:51:25.010Z] [BOT] ✅ Posted message: Senior Accountant @ brex in #finance-jobs
  ✅ Industry: Senior Accountant @ brex
[2026-01-21T15:51:25.011Z] [BOT] 💾 Added channel posting: Senior Accountant @ brex → category channel (1 total channels)
[2026-01-21T15:51:25.011Z] [BOT] 💾 BEFORE ARCHIVING: 3614 jobs in database
[2026-01-21T15:51:25.013Z] [BOT] ✅ No jobs to archive (all 3614 jobs within 7-day window)
[2026-01-21T15:51:25.034Z] [BOT] 💾 Saved posted_jobs.json: 3614 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:27.006Z] [BOT] ✅ Posted message: Senior Accountant @ brex in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T15:51:27.007Z] [BOT] 💾 Added channel posting: Senior Accountant @ brex → location channel (2 total channels)
[2026-01-21T15:51:27.007Z] [BOT] 💾 BEFORE ARCHIVING: 3614 jobs in database
[2026-01-21T15:51:27.009Z] [BOT] ✅ No jobs to archive (all 3614 jobs within 7-day window)
[2026-01-21T15:51:27.030Z] [BOT] 💾 Saved posted_jobs.json: 3614 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:28.532Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
[2026-01-21T15:51:28.532Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-21T15:51:28.534Z] [BOT] ✅ No jobs to archive (all 3615 jobs within 7-day window)
[2026-01-21T15:51:28.554Z] [BOT] 💾 Saved posted_jobs.json: 3615 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:28.554Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
[2026-01-21T15:51:28.555Z] [BOT] 💾 BEFORE ARCHIVING: 3616 jobs in database
[2026-01-21T15:51:28.556Z] [BOT] ✅ No jobs to archive (all 3616 jobs within 7-day window)
[2026-01-21T15:51:28.577Z] [BOT] 💾 Saved posted_jobs.json: 3616 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:28.577Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
[2026-01-21T15:51:28.577Z] [BOT] 💾 BEFORE ARCHIVING: 3617 jobs in database
[2026-01-21T15:51:28.579Z] [BOT] ✅ No jobs to archive (all 3617 jobs within 7-day window)
[2026-01-21T15:51:28.600Z] [BOT] 💾 Saved posted_jobs.json: 3617 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:28.600Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
[2026-01-21T15:51:28.600Z] [BOT] 💾 BEFORE ARCHIVING: 3618 jobs in database
[2026-01-21T15:51:28.602Z] [BOT] ✅ No jobs to archive (all 3618 jobs within 7-day window)
[2026-01-21T15:51:28.623Z] [BOT] 💾 Saved posted_jobs.json: 3618 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:31.624Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T15:51:31.625Z] [BOT] 📍 [ROUTING] "Threat Collections Engineer" @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T15:51:31.625Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T15:51:31.894Z] [BOT] ✅ Posted message: Threat Collections Engineer @ anthropic in #ai-jobs
  ✅ Industry: Threat Collections Engineer @ anthropic
[2026-01-21T15:51:31.894Z] [BOT] 💾 Added channel posting: Threat Collections Engineer @ anthropic → category channel (1 total channels)
[2026-01-21T15:51:31.894Z] [BOT] 💾 BEFORE ARCHIVING: 3619 jobs in database
[2026-01-21T15:51:31.896Z] [BOT] ✅ No jobs to archive (all 3619 jobs within 7-day window)
[2026-01-21T15:51:31.917Z] [BOT] 💾 Saved posted_jobs.json: 3619 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:33.418Z] [BOT] 💾 Marked as posted: Threat Collections Engineer @ anthropic (instance #1)
[2026-01-21T15:51:33.419Z] [BOT] 💾 BEFORE ARCHIVING: 3620 jobs in database
[2026-01-21T15:51:33.421Z] [BOT] ✅ No jobs to archive (all 3620 jobs within 7-day window)
[2026-01-21T15:51:33.441Z] [BOT] 💾 Saved posted_jobs.json: 3620 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:33.442Z] [BOT] 📍 [ROUTING] "Policy Manager, Harmful Persuasion " @ anthropic
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-21T15:51:33.700Z] [BOT] ✅ Posted message: Policy Manager, Harmful Persuasion  @ anthropic in #ai-jobs
  ✅ Industry: Policy Manager, Harmful Persuasion  @ anthropic
[2026-01-21T15:51:33.701Z] [BOT] 💾 Added channel posting: Policy Manager, Harmful Persuasion  @ anthropic → category channel (1 total channels)
[2026-01-21T15:51:33.701Z] [BOT] 💾 BEFORE ARCHIVING: 3621 jobs in database
[2026-01-21T15:51:33.703Z] [BOT] ✅ No jobs to archive (all 3621 jobs within 7-day window)
[2026-01-21T15:51:33.724Z] [BOT] 💾 Saved posted_jobs.json: 3621 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:35.225Z] [BOT] 💾 Marked as posted: Policy Manager, Harmful Persuasion  @ anthropic (instance #1)
[2026-01-21T15:51:35.225Z] [BOT] 💾 BEFORE ARCHIVING: 3622 jobs in database
[2026-01-21T15:51:35.227Z] [BOT] ✅ No jobs to archive (all 3622 jobs within 7-day window)
[2026-01-21T15:51:35.249Z] [BOT] 💾 Saved posted_jobs.json: 3622 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:35.250Z] [BOT] 📍 [ROUTING] "Senior Engineering Manager, Activation" @ brex
[2026-01-21T15:51:35.250Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T15:51:35.472Z] [BOT] ✅ Posted message: Senior Engineering Manager, Activation @ brex in #ai-jobs
[2026-01-21T15:51:35.472Z] [BOT] ✅ Industry: Senior Engineering Manager, Activation @ brex
[2026-01-21T15:51:35.473Z] [BOT] 💾 Added channel posting: Senior Engineering Manager, Activation @ brex → category channel (1 total channels)
[2026-01-21T15:51:35.473Z] [BOT] 💾 BEFORE ARCHIVING: 3623 jobs in database
[2026-01-21T15:51:35.475Z] [BOT] ✅ No jobs to archive (all 3623 jobs within 7-day window)
[2026-01-21T15:51:35.496Z] [BOT] 💾 Saved posted_jobs.json: 3623 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:37.193Z] [BOT] ✅ Posted message: Senior Engineering Manager, Activation @ brex in #JID_98d4f0de
[2026-01-21T15:51:37.193Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T15:51:37.194Z] [BOT] 💾 Added channel posting: Senior Engineering Manager, Activation @ brex → location channel (2 total channels)
[2026-01-21T15:51:37.194Z] [BOT] 💾 BEFORE ARCHIVING: 3623 jobs in database
[2026-01-21T15:51:37.196Z] [BOT] ✅ No jobs to archive (all 3623 jobs within 7-day window)
[2026-01-21T15:51:37.217Z] [BOT] 💾 Saved posted_jobs.json: 3623 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:38.718Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Activation @ brex (instance #1)
[2026-01-21T15:51:38.718Z] [BOT] 💾 BEFORE ARCHIVING: 3624 jobs in database
[2026-01-21T15:51:38.720Z] [BOT] ✅ No jobs to archive (all 3624 jobs within 7-day window)
[2026-01-21T15:51:38.741Z] [BOT] 💾 Saved posted_jobs.json: 3624 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:38.741Z] [BOT] 💾 Marked as posted: Senior Engineering Manager, Activation @ brex (instance #1)
[2026-01-21T15:51:38.741Z] [BOT] 💾 BEFORE ARCHIVING: 3625 jobs in database
[2026-01-21T15:51:38.743Z] [BOT] ✅ No jobs to archive (all 3625 jobs within 7-day window)
[2026-01-21T15:51:38.764Z] [BOT] 💾 Saved posted_jobs.json: 3625 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:51:41.766Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T15:51:41.767Z] [BOT] ⏭️  Skipping duplicate: JID_2d09099b (posted within 7 days)
[2026-01-21T15:51:41.767Z] [BOT] ⏭️  Skipping duplicate: JID_05fb0e2c (posted within 7 days)
[2026-01-21T15:51:41.767Z] [BOT] ⏭️  Skipping duplicate: JID_c2e1ffd5 (posted within 7 days)
[2026-01-21T15:51:41.767Z] [BOT] ⏭️  Skipping duplicate: JID_fc00f837 (posted within 7 days)
[2026-01-21T15:51:41.768Z] [BOT] ⏭️  Skipping duplicate: JID_968372a6 (posted within 7 days)
[2026-01-21T15:51:41.768Z] [BOT] ⏭️  Skipping duplicate: JID_bb39dd9d (posted within 7 days)
[2026-01-21T15:51:41.768Z] [BOT] ⏭️  Skipping duplicate: JID_c4c354d9 (posted within 7 days)
[2026-01-21T15:51:41.768Z] [BOT] ⏭️  Skipping duplicate: JID_730e937e (posted within 7 days)
[2026-01-21T15:51:41.768Z] [BOT] ⏭️  Skipping duplicate: JID_9952953e (posted within 7 days)
[2026-01-21T15:51:41.768Z] [BOT] ⏭️  Skipping duplicate: JID_ce5b43d8 (posted within 7 days)
[2026-01-21T15:51:41.877Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[2026-01-21T15:51:42.053Z] [BOT] ✅ Saved pending queue: 2770 total (2750 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T15:51:42.053Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T15:51:42.135Z] [BOT] 📂 Loaded 5961 existing routing entries
[2026-01-21T15:51:42.210Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T15:51:42.211Z] [BOT] Total entries: 5971
   Timestamp: 2026-01-21T15:51:42.185Z
[2026-01-21T15:51:42.211Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T15:51:42.211Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T15:51:42.211Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 4
[2026-01-21T15:51:42.212Z] [BOT] Top channels:
     1. #tech-jobs: 5 posts
     2. #JID_98d4f0de: 4 posts
     3. #ai-jobs: 3 posts
     4. #finance-jobs: 2 posts
[2026-01-21T15:51:42.212Z] [BOT] [STATS] Channel stats saved
[2026-01-21T15:51:44.235Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*