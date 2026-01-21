# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T05:33:17.388Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T05:32:38.030Z] ========================================
[2026-01-21T05:32:38.032Z] Discord Bot Execution Log
[2026-01-21T05:32:38.032Z] Environment: GitHub Actions
[2026-01-21T05:32:38.032Z] Node Version: v20.19.6
[2026-01-21T05:32:38.032Z] ========================================
[2026-01-21T05:32:38.032Z] Environment Variables Check:
[2026-01-21T05:32:38.032Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T05:32:38.032Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.032Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T05:32:38.032Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T05:32:38.033Z] 
Multi-Channel Configuration:
[2026-01-21T05:32:38.033Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.033Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.033Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.033Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.033Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.033Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.033Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.033Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.033Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T05:32:38.033Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T05:32:38.033Z] 
Data Files Check:
[2026-01-21T05:32:38.034Z] .github/data/new_jobs.json: ✅ Exists (10 items, 109508 bytes)
[2026-01-21T05:32:38.047Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1756943 bytes)
[2026-01-21T05:32:38.047Z] 
========================================
[2026-01-21T05:32:38.047Z] Starting Enhanced Discord Bot...
[2026-01-21T05:32:38.047Z] ========================================
[2026-01-21T05:32:38.604Z] [BOT] ✅ Loaded V2 database: 3095 jobs
[2026-01-21T05:32:40.400Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T05:32:40.401Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T05:32:40.401Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T05:32:40.516Z] [BOT] ✅ Loaded pending queue: 2745 total (2725 pending, 20 enriched, 0 posted)
[2026-01-21T05:32:40.516Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Bus Systems Analysis Associate at United Parcel Service (UPS)
[2026-01-21T05:32:40.521Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T05:32:40.522Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T05:32:40.522Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T05:32:40.523Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-21T05:32:40.523Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T05:32:40.527Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T05:32:40.527Z] [BOT] 📍 [ROUTING] "Bus Systems Analysis Associate" @ ORG_ca80fdf7 Parcel Service (UPS)
[2026-01-21T05:32:40.528Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:32:40.532Z] [BOT ERROR] (node:2661) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T05:32:40.833Z] [BOT] ✅ Posted message: Bus Systems Analysis Associate @ ORG_ca80fdf7 Parcel Service (UPS) in #tech-jobs
[2026-01-21T05:32:40.833Z] [BOT] ✅ Industry: Bus Systems Analysis Associate @ ORG_ca80fdf7 Parcel Service (UPS)
[2026-01-21T05:32:40.834Z] [BOT] 💾 Added channel posting: Bus Systems Analysis Associate @ ORG_ca80fdf7 Parcel Service (UPS) → category channel (1 total channels)
[2026-01-21T05:32:40.834Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-21T05:32:40.836Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T05:32:40.841Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 3086 active
[2026-01-21T05:32:40.861Z] [BOT] 💾 Saved posted_jobs.json: 3086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:42.362Z] [BOT] 💾 Marked as posted: Bus Systems Analysis Associate @ ORG_ca80fdf7 Parcel Service (UPS) (instance #1)
[2026-01-21T05:32:42.362Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-21T05:32:42.364Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-21T05:32:42.383Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
[2026-01-21T05:32:42.383Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "GIS Property Technician" @ ORG_bffd0d07 County
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:32:42.749Z] [BOT] ✅ Posted message: GIS Property Technician @ ORG_bffd0d07 County in #tech-jobs
  ✅ Industry: GIS Property Technician @ ORG_bffd0d07 County
[2026-01-21T05:32:42.750Z] [BOT] 💾 Added channel posting: GIS Property Technician @ ORG_bffd0d07 County → category channel (1 total channels)
[2026-01-21T05:32:42.750Z] [BOT] 💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T05:32:42.752Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T05:32:42.774Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:44.529Z] [BOT] ✅ Posted message: GIS Property Technician @ ORG_bffd0d07 County in #JID_ead674af
[2026-01-21T05:32:44.529Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T05:32:44.529Z] [BOT] 💾 Added channel posting: GIS Property Technician @ ORG_bffd0d07 County → location channel (2 total channels)
[2026-01-21T05:32:44.529Z] [BOT] 💾 BEFORE ARCHIVING: 3088 jobs in database
[2026-01-21T05:32:44.531Z] [BOT] ✅ No jobs to archive (all 3088 jobs within 7-day window)
[2026-01-21T05:32:44.553Z] [BOT] 💾 Saved posted_jobs.json: 3088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:46.055Z] [BOT] 💾 Marked as posted: GIS Property Technician @ ORG_bffd0d07 County (instance #1)
[2026-01-21T05:32:46.055Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-21T05:32:46.057Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-21T05:32:46.077Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:46.078Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, LATAM Financial Services" @ anthropic
[2026-01-21T05:32:46.078Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:32:46.397Z] [BOT] ✅ Posted message: Strategic Account Executive, LATAM Financial Services @ anthropic in #tech-jobs
  ✅ Industry: Strategic Account Executive, LATAM Financial Services @ anthropic
[2026-01-21T05:32:46.398Z] [BOT] 💾 Added channel posting: Strategic Account Executive, LATAM Financial Services @ anthropic → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3090 jobs in database
[2026-01-21T05:32:46.400Z] [BOT] ✅ No jobs to archive (all 3090 jobs within 7-day window)
[2026-01-21T05:32:46.417Z] [BOT] 💾 Saved posted_jobs.json: 3090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:47.919Z] [BOT] 💾 Marked as posted: Strategic Account Executive, LATAM Financial Services @ anthropic (instance #1)
[2026-01-21T05:32:47.919Z] [BOT] 💾 BEFORE ARCHIVING: 3091 jobs in database
[2026-01-21T05:32:47.921Z] [BOT] ✅ No jobs to archive (all 3091 jobs within 7-day window)
[2026-01-21T05:32:47.939Z] [BOT] 💾 Saved posted_jobs.json: 3091 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:47.940Z] [BOT] 📍 [ROUTING] "Software Engineer, CDN" @ vercel
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:32:48.366Z] [BOT] ✅ Posted message: Software Engineer, CDN @ vercel in #tech-jobs
[2026-01-21T05:32:48.366Z] [BOT] ✅ Industry: Software Engineer, CDN @ vercel
[2026-01-21T05:32:48.367Z] [BOT] 💾 Added channel posting: Software Engineer, CDN @ vercel → category channel (1 total channels)
[2026-01-21T05:32:48.367Z] [BOT] 💾 BEFORE ARCHIVING: 3092 jobs in database
[2026-01-21T05:32:48.369Z] [BOT] ✅ No jobs to archive (all 3092 jobs within 7-day window)
[2026-01-21T05:32:48.386Z] [BOT] 💾 Saved posted_jobs.json: 3092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:49.888Z] [BOT] 💾 Marked as posted: Software Engineer, CDN @ vercel (instance #1)
[2026-01-21T05:32:49.888Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-21T05:32:49.890Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-21T05:32:49.913Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:49.913Z] [BOT] 📍 [ROUTING] "Sales Enablement Manager " @ figma
   Category: TECH (matched: "product marketing")
[2026-01-21T05:32:49.913Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T05:32:50.213Z] [BOT] ✅ Posted message: Sales Enablement Manager  @ figma in #tech-jobs
  ✅ Industry: Sales Enablement Manager  @ figma
[2026-01-21T05:32:50.213Z] [BOT] 💾 Added channel posting: Sales Enablement Manager  @ figma → category channel (1 total channels)
[2026-01-21T05:32:50.213Z] [BOT] 💾 BEFORE ARCHIVING: 3094 jobs in database
[2026-01-21T05:32:50.216Z] [BOT] ✅ No jobs to archive (all 3094 jobs within 7-day window)
[2026-01-21T05:32:50.237Z] [BOT] 💾 Saved posted_jobs.json: 3094 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:51.739Z] [BOT] 💾 Marked as posted: Sales Enablement Manager  @ figma (instance #1)
[2026-01-21T05:32:51.739Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-21T05:32:51.741Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-21T05:32:51.762Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:54.763Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-21T05:32:54.763Z] [BOT] 📍 [ROUTING] "Data Scientist - Machine Learning and Predictive Analytics" @ ORG_f3f2248d Grumman
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T05:32:54.763Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T05:32:55.526Z] [BOT] ✅ Posted message: Data Scientist - Machine Learning and Predictive Analytics @ ORG_f3f2248d Grumman in #ai-jobs
[2026-01-21T05:32:55.526Z] [BOT] ✅ Industry: Data Scientist - Machine Learning and Predictive Analytics @ ORG_f3f2248d Grumman
[2026-01-21T05:32:55.527Z] [BOT] 💾 Added channel posting: Data Scientist - Machine Learning and Predictive Analytics @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-21T05:32:55.527Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-21T05:32:55.529Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-21T05:32:55.548Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:32:57.050Z] [BOT] 💾 Marked as posted: Data Scientist - Machine Learning and Predictive Analytics @ ORG_f3f2248d Grumman (instance #1)
[2026-01-21T05:32:57.050Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-21T05:32:57.052Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-21T05:32:57.071Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:33:00.072Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T05:33:00.072Z] [BOT] 📍 [ROUTING] "Senior Data Scientist, Analytics" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T05:33:00.072Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T05:33:00.605Z] [BOT] ✅ Posted message: Senior Data Scientist, Analytics @ discord in #JID_fb739488
[2026-01-21T05:33:00.605Z] [BOT] ✅ Industry: Senior Data Scientist, Analytics @ discord
[2026-01-21T05:33:00.606Z] [BOT] 💾 Added channel posting: Senior Data Scientist, Analytics @ discord → category channel (1 total channels)
[2026-01-21T05:33:00.606Z] [BOT] 💾 BEFORE ARCHIVING: 3098 jobs in database
[2026-01-21T05:33:00.608Z] [BOT] ✅ No jobs to archive (all 3098 jobs within 7-day window)
[2026-01-21T05:33:00.627Z] [BOT] 💾 Saved posted_jobs.json: 3098 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:33:02.128Z] [BOT] 💾 Marked as posted: Senior Data Scientist, Analytics @ discord (instance #1)
[2026-01-21T05:33:02.128Z] [BOT] 💾 BEFORE ARCHIVING: 3099 jobs in database
[2026-01-21T05:33:02.130Z] [BOT] ✅ No jobs to archive (all 3099 jobs within 7-day window)
[2026-01-21T05:33:02.149Z] [BOT] 💾 Saved posted_jobs.json: 3099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:33:05.149Z] [BOT] 📌 Posting 3 jobs to #finance-jobs
[2026-01-21T05:33:05.149Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Investment Banking & Capital Markets" @ anthropic
[2026-01-21T05:33:05.149Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T05:33:05.823Z] [BOT] ✅ Posted message: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic in #finance-jobs
  ✅ Industry: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic
[2026-01-21T05:33:05.824Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic → category channel (1 total channels)
[2026-01-21T05:33:05.824Z] [BOT] 💾 BEFORE ARCHIVING: 3100 jobs in database
[2026-01-21T05:33:05.826Z] [BOT] ✅ No jobs to archive (all 3100 jobs within 7-day window)
[2026-01-21T05:33:05.845Z] [BOT] 💾 Saved posted_jobs.json: 3100 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:33:07.346Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Investment Banking & Capital Markets @ anthropic (instance #1)
[2026-01-21T05:33:07.347Z] [BOT] 💾 BEFORE ARCHIVING: 3101 jobs in database
[2026-01-21T05:33:07.349Z] [BOT] ✅ No jobs to archive (all 3101 jobs within 7-day window)
[2026-01-21T05:33:07.368Z] [BOT] 💾 Saved posted_jobs.json: 3101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:33:07.369Z] [BOT] 📍 [ROUTING] "Finance Manager" @ vercel
   Category: FINANCE (matched: "finance")
[2026-01-21T05:33:07.369Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T05:33:07.699Z] [BOT] ✅ Posted message: Finance Manager @ vercel in #finance-jobs
  ✅ Industry: Finance Manager @ vercel
[2026-01-21T05:33:07.700Z] [BOT] 💾 Added channel posting: Finance Manager @ vercel → category channel (1 total channels)
[2026-01-21T05:33:07.700Z] [BOT] 💾 BEFORE ARCHIVING: 3102 jobs in database
[2026-01-21T05:33:07.702Z] [BOT] ✅ No jobs to archive (all 3102 jobs within 7-day window)
[2026-01-21T05:33:07.720Z] [BOT] 💾 Saved posted_jobs.json: 3102 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:33:09.222Z] [BOT] 💾 Marked as posted: Finance Manager @ vercel (instance #1)
💾 BEFORE ARCHIVING: 3103 jobs in database
[2026-01-21T05:33:09.224Z] [BOT] ✅ No jobs to archive (all 3103 jobs within 7-day window)
[2026-01-21T05:33:09.244Z] [BOT] 💾 Saved posted_jobs.json: 3103 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:33:09.244Z] [BOT] 📍 [ROUTING] "Fiber Network Mapping Specialist 4" @ ORG_8d0003a5
[2026-01-21T05:33:09.244Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-21T05:33:09.512Z] [BOT] ✅ Posted message: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 in #finance-jobs
[2026-01-21T05:33:09.512Z] [BOT] ✅ Industry: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5
[2026-01-21T05:33:09.513Z] [BOT] 💾 Added channel posting: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3104 jobs in database
[2026-01-21T05:33:09.515Z] [BOT] ✅ No jobs to archive (all 3104 jobs within 7-day window)
[2026-01-21T05:33:09.538Z] [BOT] 💾 Saved posted_jobs.json: 3104 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:33:11.040Z] [BOT] 💾 Marked as posted: Fiber Network Mapping Specialist 4 @ ORG_8d0003a5 (instance #1)
[2026-01-21T05:33:11.040Z] [BOT] 💾 BEFORE ARCHIVING: 3105 jobs in database
[2026-01-21T05:33:11.042Z] [BOT] ✅ No jobs to archive (all 3105 jobs within 7-day window)
[2026-01-21T05:33:11.062Z] [BOT] 💾 Saved posted_jobs.json: 3105 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:33:14.063Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T05:33:14.064Z] [BOT] ⏭️  Skipping duplicate: JID_666357d8-associate_r25043013 (posted within 7 days)
[2026-01-21T05:33:14.064Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_e2eac5f0-analytics_r10218634 (posted within 7 days)
[2026-01-21T05:33:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_39f486fd-mc_external-JID_04549200-technician_jr21559 (posted within 7 days)
[2026-01-21T05:33:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_f45a8ec3 (posted within 7 days)
[2026-01-21T05:33:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_36106029 (posted within 7 days)
[2026-01-21T05:33:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_dd4e3939 (posted within 7 days)
[2026-01-21T05:33:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_abc00999 (posted within 7 days)
[2026-01-21T05:33:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_fbb3116a (posted within 7 days)
[2026-01-21T05:33:14.065Z] [BOT] ⏭️  Skipping duplicate: JID_7de6684a (posted within 7 days)
[2026-01-21T05:33:14.066Z] [BOT] ⏭️  Skipping duplicate: JID_c7109edb-iv_r0014039 (posted within 7 days)
[2026-01-21T05:33:14.173Z] [BOT] ✅ Loaded pending queue: 2745 total (2725 pending, 20 enriched, 0 posted)
[2026-01-21T05:33:14.348Z] [BOT] ✅ Saved pending queue: 2745 total (2725 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T05:33:14.349Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T05:33:14.431Z] [BOT] 📂 Loaded 5665 existing routing entries
[2026-01-21T05:33:14.506Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T05:33:14.506Z] [BOT] Total entries: 5675
   Timestamp: 2026-01-21T05:33:14.482Z
[2026-01-21T05:33:14.507Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T05:33:14.507Z] [BOT] Total attempts: 11
   Successful: 11
   Failed: 0
   Skipped: 0
[2026-01-21T05:33:14.508Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-21T05:33:14.508Z] [BOT] Total posts: 11
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #finance-jobs: 3 posts
     3. #JID_ead674af: 1 posts
     4. #ai-jobs: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T05:33:14.508Z] [BOT] [STATS] Channel stats saved
[2026-01-21T05:33:16.533Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2661) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*