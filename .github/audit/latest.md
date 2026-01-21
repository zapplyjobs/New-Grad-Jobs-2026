# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T09:51:51.508Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T09:51:18.309Z] ========================================
[2026-01-21T09:51:18.311Z] Discord Bot Execution Log
[2026-01-21T09:51:18.311Z] Environment: GitHub Actions
[2026-01-21T09:51:18.311Z] Node Version: v20.19.6
[2026-01-21T09:51:18.311Z] ========================================
[2026-01-21T09:51:18.311Z] Environment Variables Check:
[2026-01-21T09:51:18.311Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T09:51:18.311Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.311Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T09:51:18.312Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T09:51:18.312Z] 
Multi-Channel Configuration:
[2026-01-21T09:51:18.312Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.312Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.312Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.312Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.312Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.312Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.312Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.312Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.312Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T09:51:18.312Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T09:51:18.313Z] 
Data Files Check:
[2026-01-21T09:51:18.313Z] .github/data/new_jobs.json: ✅ Exists (10 items, 90175 bytes)
[2026-01-21T09:51:18.326Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1844873 bytes)
[2026-01-21T09:51:18.326Z] 
========================================
[2026-01-21T09:51:18.326Z] Starting Enhanced Discord Bot...
[2026-01-21T09:51:18.326Z] ========================================
[2026-01-21T09:51:18.855Z] [BOT] ✅ Loaded V2 database: 3236 jobs
[2026-01-21T09:51:19.294Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T09:51:19.295Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T09:51:19.295Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T09:51:19.410Z] [BOT] ✅ Loaded pending queue: 2739 total (2719 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Activation Manager at anthropic
[2026-01-21T09:51:19.413Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T09:51:19.414Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T09:51:19.414Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T09:51:19.546Z] [BOT] ✅ Loaded pending queue: 2739 total (2719 pending, 20 enriched, 0 posted)
[2026-01-21T09:51:19.720Z] [BOT] ✅ Saved pending queue: 2736 total (2719 pending, 17 enriched, 0 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
[2026-01-21T09:51:19.720Z] [BOT] 📋 After blacklist filter: 17 jobs (3 blacklisted)
📋 After data quality filter: 17 jobs (0 invalid)
[2026-01-21T09:51:19.721Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-21T09:51:19.721Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T09:51:19.725Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T09:51:19.726Z] [BOT] 📍 [ROUTING] "Customer Activation Manager" @ anthropic
[2026-01-21T09:51:19.726Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:51:19.730Z] [BOT ERROR] (node:3417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T09:51:20.112Z] [BOT] ✅ Posted message: Customer Activation Manager @ anthropic in #tech-jobs
  ✅ Industry: Customer Activation Manager @ anthropic
[2026-01-21T09:51:20.113Z] [BOT] 💾 Added channel posting: Customer Activation Manager @ anthropic → category channel (1 total channels)
[2026-01-21T09:51:20.113Z] [BOT] 💾 BEFORE ARCHIVING: 3237 jobs in database
[2026-01-21T09:51:20.116Z] [BOT] ✅ No jobs to archive (all 3237 jobs within 7-day window)
[2026-01-21T09:51:20.141Z] [BOT] 💾 Saved posted_jobs.json: 3237 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:21.643Z] [BOT] 💾 Marked as posted: Customer Activation Manager @ anthropic (instance #1)
[2026-01-21T09:51:21.644Z] [BOT] 💾 BEFORE ARCHIVING: 3238 jobs in database
[2026-01-21T09:51:21.646Z] [BOT] ✅ No jobs to archive (all 3238 jobs within 7-day window)
[2026-01-21T09:51:21.665Z] [BOT] 💾 Saved posted_jobs.json: 3238 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:21.666Z] [BOT] 📍 [ROUTING] "Software Engineer, Languages" @ anthropic
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:51:21.780Z] [BOT] ✅ Posted message: Software Engineer, Languages @ anthropic in #tech-jobs
[2026-01-21T09:51:21.780Z] [BOT] ✅ Industry: Software Engineer, Languages @ anthropic
[2026-01-21T09:51:21.780Z] [BOT] 💾 Added channel posting: Software Engineer, Languages @ anthropic → category channel (1 total channels)
[2026-01-21T09:51:21.781Z] [BOT] 💾 BEFORE ARCHIVING: 3239 jobs in database
[2026-01-21T09:51:21.783Z] [BOT] ✅ No jobs to archive (all 3239 jobs within 7-day window)
[2026-01-21T09:51:21.802Z] [BOT] 💾 Saved posted_jobs.json: 3239 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:23.303Z] [BOT] 💾 Marked as posted: Software Engineer, Languages @ anthropic (instance #1)
[2026-01-21T09:51:23.304Z] [BOT] 💾 BEFORE ARCHIVING: 3240 jobs in database
[2026-01-21T09:51:23.306Z] [BOT] ✅ No jobs to archive (all 3240 jobs within 7-day window)
[2026-01-21T09:51:23.324Z] [BOT] 💾 Saved posted_jobs.json: 3240 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:23.324Z] [BOT] 📍 [ROUTING] "Configuration Management Analyst" @ ORG_35863c7e
   Category: TECH (default)
[2026-01-21T09:51:23.324Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T09:51:23.664Z] [BOT] ✅ Posted message: Configuration Management Analyst @ ORG_35863c7e in #tech-jobs
  ✅ Industry: Configuration Management Analyst @ ORG_35863c7e
[2026-01-21T09:51:23.665Z] [BOT] 💾 Added channel posting: Configuration Management Analyst @ ORG_35863c7e → category channel (1 total channels)
[2026-01-21T09:51:23.665Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-21T09:51:23.667Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-21T09:51:23.686Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:25.476Z] [BOT] ✅ Posted message: Configuration Management Analyst @ ORG_35863c7e in #JID_ead674af
[2026-01-21T09:51:25.476Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T09:51:25.476Z] [BOT] 💾 Added channel posting: Configuration Management Analyst @ ORG_35863c7e → location channel (2 total channels)
[2026-01-21T09:51:25.476Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-21T09:51:25.478Z] [BOT] ✅ No jobs to archive (all 3241 jobs within 7-day window)
[2026-01-21T09:51:25.497Z] [BOT] 💾 Saved posted_jobs.json: 3241 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:26.998Z] [BOT] 💾 Marked as posted: Configuration Management Analyst @ ORG_35863c7e (instance #1)
💾 BEFORE ARCHIVING: 3242 jobs in database
[2026-01-21T09:51:27.000Z] [BOT] ✅ No jobs to archive (all 3242 jobs within 7-day window)
[2026-01-21T09:51:27.020Z] [BOT] 💾 Saved posted_jobs.json: 3242 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:27.020Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Java" @ ORG_bdf03daa Fintech Solutions
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:51:27.267Z] [BOT] ✅ Posted message: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions in #tech-jobs
  ✅ Industry: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions
[2026-01-21T09:51:27.268Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions → category channel (1 total channels)
[2026-01-21T09:51:27.268Z] [BOT] 💾 BEFORE ARCHIVING: 3243 jobs in database
[2026-01-21T09:51:27.270Z] [BOT] ✅ No jobs to archive (all 3243 jobs within 7-day window)
[2026-01-21T09:51:27.290Z] [BOT] 💾 Saved posted_jobs.json: 3243 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:28.792Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Java @ ORG_bdf03daa Fintech Solutions (instance #1)
[2026-01-21T09:51:28.792Z] [BOT] 💾 BEFORE ARCHIVING: 3244 jobs in database
[2026-01-21T09:51:28.794Z] [BOT] ✅ No jobs to archive (all 3244 jobs within 7-day window)
[2026-01-21T09:51:28.817Z] [BOT] 💾 Saved posted_jobs.json: 3244 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:28.817Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_ec7d56a0 Yonder
[2026-01-21T09:51:28.817Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:51:29.046Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_ec7d56a0 Yonder in #tech-jobs
  ✅ Industry: Software Engineer I @ ORG_ec7d56a0 Yonder
[2026-01-21T09:51:29.047Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_ec7d56a0 Yonder → category channel (1 total channels)
[2026-01-21T09:51:29.047Z] [BOT] 💾 BEFORE ARCHIVING: 3245 jobs in database
[2026-01-21T09:51:29.049Z] [BOT] ✅ No jobs to archive (all 3245 jobs within 7-day window)
[2026-01-21T09:51:29.072Z] [BOT] 💾 Saved posted_jobs.json: 3245 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:30.574Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_ec7d56a0 Yonder (instance #1)
[2026-01-21T09:51:30.574Z] [BOT] 💾 BEFORE ARCHIVING: 3246 jobs in database
[2026-01-21T09:51:30.576Z] [BOT] ✅ No jobs to archive (all 3246 jobs within 7-day window)
[2026-01-21T09:51:30.596Z] [BOT] 💾 Saved posted_jobs.json: 3246 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:30.597Z] [BOT] 📍 [ROUTING] "Senior Security Software Engineer, Detection and Response" @ discord
[2026-01-21T09:51:30.597Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:51:30.898Z] [BOT] ✅ Posted message: Senior Security Software Engineer, Detection and Response @ discord in #tech-jobs
[2026-01-21T09:51:30.898Z] [BOT] ✅ Industry: Senior Security Software Engineer, Detection and Response @ discord
[2026-01-21T09:51:30.899Z] [BOT] 💾 Added channel posting: Senior Security Software Engineer, Detection and Response @ discord → category channel (1 total channels)
[2026-01-21T09:51:30.899Z] [BOT] 💾 BEFORE ARCHIVING: 3247 jobs in database
[2026-01-21T09:51:30.901Z] [BOT] ✅ No jobs to archive (all 3247 jobs within 7-day window)
[2026-01-21T09:51:30.921Z] [BOT] 💾 Saved posted_jobs.json: 3247 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:32.423Z] [BOT] 💾 Marked as posted: Senior Security Software Engineer, Detection and Response @ discord (instance #1)
💾 BEFORE ARCHIVING: 3248 jobs in database
[2026-01-21T09:51:32.425Z] [BOT] ✅ No jobs to archive (all 3248 jobs within 7-day window)
[2026-01-21T09:51:32.446Z] [BOT] 💾 Saved posted_jobs.json: 3248 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:35.447Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T09:51:35.447Z] [BOT] 📍 [ROUTING] "People Analyst" @ figma
[2026-01-21T09:51:35.448Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T09:51:35.714Z] [BOT] ✅ Posted message: People Analyst @ figma in #finance-jobs
  ✅ Industry: People Analyst @ figma
[2026-01-21T09:51:35.714Z] [BOT] 💾 Added channel posting: People Analyst @ figma → category channel (1 total channels)
[2026-01-21T09:51:35.714Z] [BOT] 💾 BEFORE ARCHIVING: 3249 jobs in database
[2026-01-21T09:51:35.716Z] [BOT] ✅ No jobs to archive (all 3249 jobs within 7-day window)
[2026-01-21T09:51:35.736Z] [BOT] 💾 Saved posted_jobs.json: 3249 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:37.238Z] [BOT] 💾 Marked as posted: People Analyst @ figma (instance #1)
[2026-01-21T09:51:37.239Z] [BOT] 💾 BEFORE ARCHIVING: 3250 jobs in database
[2026-01-21T09:51:37.240Z] [BOT] ✅ No jobs to archive (all 3250 jobs within 7-day window)
[2026-01-21T09:51:37.260Z] [BOT] 💾 Saved posted_jobs.json: 3250 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:40.261Z] [BOT] 📌 Posting 3 jobs to #JID_fb739488
[2026-01-21T09:51:40.261Z] [BOT] 📍 [ROUTING] "Data Engineer - People Analytics" @ ORG_f3f2248d Grumman
[2026-01-21T09:51:40.262Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T09:51:40.430Z] [BOT] ✅ Posted message: Data Engineer - People Analytics @ ORG_f3f2248d Grumman in #JID_fb739488
[2026-01-21T09:51:40.430Z] [BOT] ✅ Industry: Data Engineer - People Analytics @ ORG_f3f2248d Grumman
[2026-01-21T09:51:40.431Z] [BOT] 💾 Added channel posting: Data Engineer - People Analytics @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-21T09:51:40.431Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-21T09:51:40.433Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-21T09:51:40.452Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:41.954Z] [BOT] 💾 Marked as posted: Data Engineer - People Analytics @ ORG_f3f2248d Grumman (instance #1)
[2026-01-21T09:51:41.955Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-21T09:51:41.956Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-21T09:51:41.978Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:41.978Z] [BOT] 📍 [ROUTING] "Engineering Manager, Engagement" @ discord
[2026-01-21T09:51:41.978Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T09:51:42.135Z] [BOT] ✅ Posted message: Engineering Manager, Engagement @ discord in #JID_fb739488
  ✅ Industry: Engineering Manager, Engagement @ discord
[2026-01-21T09:51:42.136Z] [BOT] 💾 Added channel posting: Engineering Manager, Engagement @ discord → category channel (1 total channels)
[2026-01-21T09:51:42.136Z] [BOT] 💾 BEFORE ARCHIVING: 3253 jobs in database
[2026-01-21T09:51:42.138Z] [BOT] ✅ No jobs to archive (all 3253 jobs within 7-day window)
[2026-01-21T09:51:42.159Z] [BOT] 💾 Saved posted_jobs.json: 3253 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:43.660Z] [BOT] 💾 Marked as posted: Engineering Manager, Engagement @ discord (instance #1)
[2026-01-21T09:51:43.661Z] [BOT] 💾 BEFORE ARCHIVING: 3254 jobs in database
[2026-01-21T09:51:43.663Z] [BOT] ✅ No jobs to archive (all 3254 jobs within 7-day window)
[2026-01-21T09:51:43.683Z] [BOT] 💾 Saved posted_jobs.json: 3254 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:43.683Z] [BOT] 📍 [ROUTING] "Business Systems Analyst " @ anthropic
[2026-01-21T09:51:43.684Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
[2026-01-21T09:51:43.875Z] [BOT] ✅ Posted message: Business Systems Analyst  @ anthropic in #JID_fb739488
  ✅ Industry: Business Systems Analyst  @ anthropic
[2026-01-21T09:51:43.875Z] [BOT] 💾 Added channel posting: Business Systems Analyst  @ anthropic → category channel (1 total channels)
[2026-01-21T09:51:43.875Z] [BOT] 💾 BEFORE ARCHIVING: 3255 jobs in database
[2026-01-21T09:51:43.878Z] [BOT] ✅ No jobs to archive (all 3255 jobs within 7-day window)
[2026-01-21T09:51:43.898Z] [BOT] 💾 Saved posted_jobs.json: 3255 active jobs
[2026-01-21T09:51:43.898Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:45.400Z] [BOT] 💾 Marked as posted: Business Systems Analyst  @ anthropic (instance #1)
[2026-01-21T09:51:45.400Z] [BOT] 💾 BEFORE ARCHIVING: 3256 jobs in database
[2026-01-21T09:51:45.402Z] [BOT] ✅ No jobs to archive (all 3256 jobs within 7-day window)
[2026-01-21T09:51:45.422Z] [BOT] 💾 Saved posted_jobs.json: 3256 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:51:48.423Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T09:51:48.424Z] [BOT] ⏭️  Skipping duplicate: JID_e797549b (posted within 7 days)
[2026-01-21T09:51:48.424Z] [BOT] ⏭️  Skipping duplicate: JID_ffe128ac (posted within 7 days)
[2026-01-21T09:51:48.424Z] [BOT] ⏭️  Skipping duplicate: JID_21ef7452 (posted within 7 days)
[2026-01-21T09:51:48.424Z] [BOT] ⏭️  Skipping duplicate: JID_9bce800c-jabil_careers-JID_05133902-analyst_j2428597 (posted within 7 days)
[2026-01-21T09:51:48.424Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_80e71729-analytics_r10217513 (posted within 7 days)
[2026-01-21T09:51:48.425Z] [BOT] ⏭️  Skipping duplicate: JID_61d16690-_jr104034 (posted within 7 days)
[2026-01-21T09:51:48.425Z] [BOT] ⏭️  Skipping duplicate: JID_76a0c247-i_253496 (posted within 7 days)
[2026-01-21T09:51:48.425Z] [BOT] ⏭️  Skipping duplicate: JID_f3f7bbd7 (posted within 7 days)
[2026-01-21T09:51:48.425Z] [BOT] ⏭️  Skipping duplicate: JID_3d2eb61b (posted within 7 days)
[2026-01-21T09:51:48.425Z] [BOT] ⏭️  Skipping duplicate: JID_e7a0cae8 (posted within 7 days)
[2026-01-21T09:51:48.529Z] [BOT] ✅ Loaded pending queue: 2736 total (2719 pending, 17 enriched, 0 posted)
[2026-01-21T09:51:48.705Z] [BOT] ✅ Saved pending queue: 2736 total (2719 pending, 7 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T09:51:48.705Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T09:51:48.768Z] [BOT] 📂 Loaded 5795 existing routing entries
[2026-01-21T09:51:48.844Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5805
[2026-01-21T09:51:48.844Z] [BOT] Timestamp: 2026-01-21T09:51:48.820Z
[2026-01-21T09:51:48.846Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 14
   Successful: 11
   Failed: 0
   Skipped: 3
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #tech-jobs: 6 posts
     2. #JID_fb739488: 3 posts
     3. #JID_ead674af: 1 posts
     4. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-21T09:51:50.874Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*