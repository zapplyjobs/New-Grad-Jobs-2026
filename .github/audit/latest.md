# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T05:50:23.740Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T05:49:46.352Z] ========================================
[2026-01-21T05:49:46.354Z] Discord Bot Execution Log
[2026-01-21T05:49:46.354Z] Environment: GitHub Actions
[2026-01-21T05:49:46.354Z] Node Version: v20.19.6
[2026-01-21T05:49:46.354Z] ========================================
[2026-01-21T05:49:46.354Z] Environment Variables Check:
[2026-01-21T05:49:46.354Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T05:49:46.355Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.355Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T05:49:46.355Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T05:49:46.355Z] 
Multi-Channel Configuration:
[2026-01-21T05:49:46.355Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.355Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.355Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.355Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.355Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.355Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.355Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.355Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.356Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T05:49:46.356Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T05:49:46.356Z] 
Data Files Check:
[2026-01-21T05:49:46.357Z] .github/data/new_jobs.json: ✅ Exists (10 items, 84305 bytes)
[2026-01-21T05:49:46.368Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1763495 bytes)
[2026-01-21T05:49:46.368Z] 
========================================
[2026-01-21T05:49:46.368Z] Starting Enhanced Discord Bot...
[2026-01-21T05:49:46.368Z] ========================================
[2026-01-21T05:49:46.906Z] [BOT] ✅ Loaded V2 database: 3105 jobs
[2026-01-21T05:49:47.669Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T05:49:47.669Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T05:49:47.670Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T05:49:47.783Z] [BOT] ✅ Loaded pending queue: 2747 total (2727 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer - Backend at Cambridge Mobile Telematics
[2026-01-21T05:49:47.788Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T05:49:47.788Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T05:49:47.789Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T05:49:47.790Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-21T05:49:47.790Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Staff Software Engineer @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
[2026-01-21T05:49:47.790Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T05:49:47.793Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-21T05:49:47.794Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ ORG_086eec07 Mobile Telematics
[2026-01-21T05:49:47.794Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:49:47.811Z] [BOT ERROR] (node:2673) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T05:49:48.043Z] [BOT] ✅ Posted message: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics in #tech-jobs
  ✅ Industry: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics
[2026-01-21T05:49:48.044Z] [BOT] 💾 Added channel posting: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics → category channel (1 total channels)
[2026-01-21T05:49:48.044Z] [BOT] 💾 BEFORE ARCHIVING: 3106 jobs in database
[2026-01-21T05:49:48.047Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T05:49:48.051Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T05:49:48.051Z] [BOT] ✅ Archiving complete: 10 archived, 3096 active
[2026-01-21T05:49:48.072Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
[2026-01-21T05:49:48.073Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:49.575Z] [BOT] 💾 Marked as posted: Software Engineer - Backend @ ORG_086eec07 Mobile Telematics (instance #1)
[2026-01-21T05:49:49.575Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-21T05:49:49.578Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-21T05:49:49.596Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:49.596Z] [BOT] 📍 [ROUTING] "Product Lead, Consumer" @ anthropic
[2026-01-21T05:49:49.596Z] [BOT] Category: TECH (matched: "product")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:49:49.934Z] [BOT] ✅ Posted message: Product Lead, Consumer @ anthropic in #tech-jobs
[2026-01-21T05:49:49.934Z] [BOT] ✅ Industry: Product Lead, Consumer @ anthropic
[2026-01-21T05:49:49.935Z] [BOT] 💾 Added channel posting: Product Lead, Consumer @ anthropic → category channel (1 total channels)
[2026-01-21T05:49:49.935Z] [BOT] 💾 BEFORE ARCHIVING: 3098 jobs in database
[2026-01-21T05:49:49.937Z] [BOT] ✅ No jobs to archive (all 3098 jobs within 7-day window)
[2026-01-21T05:49:49.957Z] [BOT] 💾 Saved posted_jobs.json: 3098 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:51.458Z] [BOT] 💾 Marked as posted: Product Lead, Consumer @ anthropic (instance #1)
[2026-01-21T05:49:51.458Z] [BOT] 💾 BEFORE ARCHIVING: 3099 jobs in database
[2026-01-21T05:49:51.460Z] [BOT] ✅ No jobs to archive (all 3099 jobs within 7-day window)
[2026-01-21T05:49:51.481Z] [BOT] 💾 Saved posted_jobs.json: 3099 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:51.481Z] [BOT] 📍 [ROUTING] "Staff Software Engineer" @ datadog
[2026-01-21T05:49:51.481Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:49:51.694Z] [BOT] ✅ Posted message: Staff Software Engineer @ datadog in #tech-jobs
[2026-01-21T05:49:51.694Z] [BOT] ✅ Industry: Staff Software Engineer @ datadog
[2026-01-21T05:49:51.694Z] [BOT] 💾 Added channel posting: Staff Software Engineer @ datadog → category channel (1 total channels)
[2026-01-21T05:49:51.695Z] [BOT] 💾 BEFORE ARCHIVING: 3100 jobs in database
[2026-01-21T05:49:51.697Z] [BOT] ✅ No jobs to archive (all 3100 jobs within 7-day window)
[2026-01-21T05:49:51.716Z] [BOT] 💾 Saved posted_jobs.json: 3100 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:53.400Z] [BOT] ✅ Posted message: Staff Software Engineer @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T05:49:53.401Z] [BOT] 💾 Added channel posting: Staff Software Engineer @ datadog → location channel (2 total channels)
[2026-01-21T05:49:53.401Z] [BOT] 💾 BEFORE ARCHIVING: 3100 jobs in database
[2026-01-21T05:49:53.403Z] [BOT] ✅ No jobs to archive (all 3100 jobs within 7-day window)
[2026-01-21T05:49:53.420Z] [BOT] 💾 Saved posted_jobs.json: 3100 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:54.922Z] [BOT] 💾 Marked as posted: Staff Software Engineer @ datadog (instance #1)
💾 BEFORE ARCHIVING: 3101 jobs in database
[2026-01-21T05:49:54.924Z] [BOT] ✅ No jobs to archive (all 3101 jobs within 7-day window)
[2026-01-21T05:49:54.944Z] [BOT] 💾 Saved posted_jobs.json: 3101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:54.944Z] [BOT] 💾 Marked as posted: Staff Software Engineer - ML Observability @ datadog (instance #1)
[2026-01-21T05:49:54.944Z] [BOT] 💾 BEFORE ARCHIVING: 3102 jobs in database
[2026-01-21T05:49:54.946Z] [BOT] ✅ No jobs to archive (all 3102 jobs within 7-day window)
[2026-01-21T05:49:54.963Z] [BOT] 💾 Saved posted_jobs.json: 3102 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:54.963Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Frontend @ datadog (instance #1)
[2026-01-21T05:49:54.964Z] [BOT] 💾 BEFORE ARCHIVING: 3103 jobs in database
[2026-01-21T05:49:54.965Z] [BOT] ✅ No jobs to archive (all 3103 jobs within 7-day window)
[2026-01-21T05:49:54.984Z] [BOT] 💾 Saved posted_jobs.json: 3103 active jobs
[2026-01-21T05:49:54.984Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Senior Software Engineer" @ ORG_dc7620eb
[2026-01-21T05:49:54.984Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:49:55.183Z] [BOT] ✅ Posted message: Senior Software Engineer @ ORG_dc7620eb in #tech-jobs
  ✅ Industry: Senior Software Engineer @ ORG_dc7620eb
[2026-01-21T05:49:55.184Z] [BOT] 💾 Added channel posting: Senior Software Engineer @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-21T05:49:55.184Z] [BOT] 💾 BEFORE ARCHIVING: 3104 jobs in database
[2026-01-21T05:49:55.186Z] [BOT] ✅ No jobs to archive (all 3104 jobs within 7-day window)
[2026-01-21T05:49:55.203Z] [BOT] 💾 Saved posted_jobs.json: 3104 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:56.703Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_dc7620eb (instance #1)
[2026-01-21T05:49:56.704Z] [BOT] 💾 BEFORE ARCHIVING: 3105 jobs in database
[2026-01-21T05:49:56.706Z] [BOT] ✅ No jobs to archive (all 3105 jobs within 7-day window)
[2026-01-21T05:49:56.727Z] [BOT] 💾 Saved posted_jobs.json: 3105 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:56.728Z] [BOT] 📍 [ROUTING] "Analyst – Analytics" @ ORG_db84132b Group
[2026-01-21T05:49:56.728Z] [BOT] Category: TECH (matched: "analytics")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:49:57.033Z] [BOT] ✅ Posted message: Analyst – Analytics @ ORG_db84132b Group in #tech-jobs
  ✅ Industry: Analyst – Analytics @ ORG_db84132b Group
[2026-01-21T05:49:57.034Z] [BOT] 💾 Added channel posting: Analyst – Analytics @ ORG_db84132b Group → category channel (1 total channels)
[2026-01-21T05:49:57.034Z] [BOT] 💾 BEFORE ARCHIVING: 3106 jobs in database
[2026-01-21T05:49:57.036Z] [BOT] ✅ No jobs to archive (all 3106 jobs within 7-day window)
[2026-01-21T05:49:57.055Z] [BOT] 💾 Saved posted_jobs.json: 3106 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:58.558Z] [BOT] 💾 Marked as posted: Analyst – Analytics @ ORG_db84132b Group (instance #1)
[2026-01-21T05:49:58.558Z] [BOT] 💾 BEFORE ARCHIVING: 3107 jobs in database
[2026-01-21T05:49:58.560Z] [BOT] ✅ No jobs to archive (all 3107 jobs within 7-day window)
[2026-01-21T05:49:58.581Z] [BOT] 💾 Saved posted_jobs.json: 3107 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:49:58.581Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
[2026-01-21T05:49:58.581Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T05:49:58.808Z] [BOT] ✅ Posted message: Helix Data Creator @ ORG_1f5be668 in #tech-jobs
  ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2026-01-21T05:49:58.809Z] [BOT] 💾 Added channel posting: Helix Data Creator @ ORG_1f5be668 → category channel (1 total channels)
[2026-01-21T05:49:58.809Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-21T05:49:58.811Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-21T05:49:58.830Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:00.331Z] [BOT] 💾 Marked as posted: Helix Data Creator @ ORG_1f5be668 (instance #1)
[2026-01-21T05:50:00.331Z] [BOT] 💾 BEFORE ARCHIVING: 3109 jobs in database
[2026-01-21T05:50:00.333Z] [BOT] ✅ No jobs to archive (all 3109 jobs within 7-day window)
[2026-01-21T05:50:00.352Z] [BOT] 💾 Saved posted_jobs.json: 3109 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:00.352Z] [BOT] 📍 [ROUTING] "Mining Application Specialist" @ ORG_85937e82 Inc.
   Category: TECH (default)
[2026-01-21T05:50:00.352Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T05:50:00.622Z] [BOT] ✅ Posted message: Mining Application Specialist @ ORG_85937e82 Inc. in #tech-jobs
  ✅ Industry: Mining Application Specialist @ ORG_85937e82 Inc.
[2026-01-21T05:50:00.623Z] [BOT] 💾 Added channel posting: Mining Application Specialist @ ORG_85937e82 Inc. → category channel (1 total channels)
[2026-01-21T05:50:00.623Z] [BOT] 💾 BEFORE ARCHIVING: 3110 jobs in database
[2026-01-21T05:50:00.625Z] [BOT] ✅ No jobs to archive (all 3110 jobs within 7-day window)
[2026-01-21T05:50:00.643Z] [BOT] 💾 Saved posted_jobs.json: 3110 active jobs
[2026-01-21T05:50:00.644Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:02.501Z] [BOT] ✅ Posted message: Mining Application Specialist @ ORG_85937e82 Inc. in #JID_ead674af
[2026-01-21T05:50:02.501Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T05:50:02.501Z] [BOT] 💾 Added channel posting: Mining Application Specialist @ ORG_85937e82 Inc. → location channel (2 total channels)
[2026-01-21T05:50:02.501Z] [BOT] 💾 BEFORE ARCHIVING: 3110 jobs in database
[2026-01-21T05:50:02.503Z] [BOT] ✅ No jobs to archive (all 3110 jobs within 7-day window)
[2026-01-21T05:50:02.522Z] [BOT] 💾 Saved posted_jobs.json: 3110 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:04.023Z] [BOT] 💾 Marked as posted: Mining Application Specialist @ ORG_85937e82 Inc. (instance #1)
[2026-01-21T05:50:04.023Z] [BOT] 💾 BEFORE ARCHIVING: 3111 jobs in database
[2026-01-21T05:50:04.025Z] [BOT] ✅ No jobs to archive (all 3111 jobs within 7-day window)
[2026-01-21T05:50:04.043Z] [BOT] 💾 Saved posted_jobs.json: 3111 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:07.043Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T05:50:07.044Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer" @ ORG_c7bac469
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T05:50:07.410Z] [BOT] ✅ Posted message: Machine Learning Engineer @ ORG_c7bac469 in #ai-jobs
  ✅ Industry: Machine Learning Engineer @ ORG_c7bac469
[2026-01-21T05:50:07.411Z] [BOT] 💾 Added channel posting: Machine Learning Engineer @ ORG_c7bac469 → category channel (1 total channels)
[2026-01-21T05:50:07.411Z] [BOT] 💾 BEFORE ARCHIVING: 3112 jobs in database
[2026-01-21T05:50:07.413Z] [BOT] ✅ No jobs to archive (all 3112 jobs within 7-day window)
[2026-01-21T05:50:07.432Z] [BOT] 💾 Saved posted_jobs.json: 3112 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:08.935Z] [BOT] 💾 Marked as posted: Machine Learning Engineer @ ORG_c7bac469 (instance #1)
[2026-01-21T05:50:08.935Z] [BOT] 💾 BEFORE ARCHIVING: 3113 jobs in database
[2026-01-21T05:50:08.937Z] [BOT] ✅ No jobs to archive (all 3113 jobs within 7-day window)
[2026-01-21T05:50:08.955Z] [BOT] 💾 Saved posted_jobs.json: 3113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:08.955Z] [BOT] 📍 [ROUTING] "GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering" @ ORG_36b77757
[2026-01-21T05:50:08.956Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T05:50:09.263Z] [BOT] ✅ Posted message: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757 in #ai-jobs
  ✅ Industry: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757
[2026-01-21T05:50:09.264Z] [BOT] 💾 Added channel posting: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757 → category channel (1 total channels)
[2026-01-21T05:50:09.264Z] [BOT] 💾 BEFORE ARCHIVING: 3114 jobs in database
[2026-01-21T05:50:09.266Z] [BOT] ✅ No jobs to archive (all 3114 jobs within 7-day window)
[2026-01-21T05:50:09.285Z] [BOT] 💾 Saved posted_jobs.json: 3114 active jobs
[2026-01-21T05:50:09.285Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:10.787Z] [BOT] 💾 Marked as posted: GPU Kernel Development Engineer - Multiple Levels Available - Graphics Software Engineering @ ORG_36b77757 (instance #1)
[2026-01-21T05:50:10.787Z] [BOT] 💾 BEFORE ARCHIVING: 3115 jobs in database
[2026-01-21T05:50:10.789Z] [BOT] ✅ No jobs to archive (all 3115 jobs within 7-day window)
[2026-01-21T05:50:10.810Z] [BOT] 💾 Saved posted_jobs.json: 3115 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:13.810Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T05:50:13.810Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_eead3632
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T05:50:14.144Z] [BOT] ✅ Posted message: Software Engineer @ ORG_eead3632 in #JID_fb739488
  ✅ Industry: Software Engineer @ ORG_eead3632
[2026-01-21T05:50:14.145Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_eead3632 → category channel (1 total channels)
[2026-01-21T05:50:14.145Z] [BOT] 💾 BEFORE ARCHIVING: 3116 jobs in database
[2026-01-21T05:50:14.147Z] [BOT] ✅ No jobs to archive (all 3116 jobs within 7-day window)
[2026-01-21T05:50:14.166Z] [BOT] 💾 Saved posted_jobs.json: 3116 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:15.915Z] [BOT] ✅ Posted message: Software Engineer @ ORG_eead3632 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T05:50:15.916Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_eead3632 → location channel (2 total channels)
[2026-01-21T05:50:15.916Z] [BOT] 💾 BEFORE ARCHIVING: 3116 jobs in database
[2026-01-21T05:50:15.918Z] [BOT] ✅ No jobs to archive (all 3116 jobs within 7-day window)
[2026-01-21T05:50:15.939Z] [BOT] 💾 Saved posted_jobs.json: 3116 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:17.439Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_eead3632 (instance #1)
[2026-01-21T05:50:17.440Z] [BOT] 💾 BEFORE ARCHIVING: 3117 jobs in database
[2026-01-21T05:50:17.441Z] [BOT] ✅ No jobs to archive (all 3117 jobs within 7-day window)
[2026-01-21T05:50:17.460Z] [BOT] 💾 Saved posted_jobs.json: 3117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T05:50:20.460Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T05:50:20.461Z] [BOT] ⏭️  Skipping duplicate: JID_1fe599b8 (posted within 7 days)
[2026-01-21T05:50:20.461Z] [BOT] ⏭️  Skipping duplicate: JID_e7aa0831 (posted within 7 days)
[2026-01-21T05:50:20.461Z] [BOT] ⏭️  Skipping duplicate: JID_882f1da4 (posted within 7 days)
[2026-01-21T05:50:20.461Z] [BOT] ⏭️  Skipping duplicate: JID_66fc9bc9 (posted within 7 days)
[2026-01-21T05:50:20.462Z] [BOT] ⏭️  Skipping duplicate: JID_a669bb44 (posted within 7 days)
[2026-01-21T05:50:20.462Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-320808 (posted within 7 days)
⏭️  Skipping duplicate: JID_d512e010-analytics_jr27759-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_19e9684f (posted within 7 days)
⏭️  Skipping duplicate: JID_cce64a94-career_r0000341182 (posted within 7 days)
[2026-01-21T05:50:20.462Z] [BOT] ⏭️  Skipping duplicate: JID_8475a274 (posted within 7 days)
[2026-01-21T05:50:20.571Z] [BOT] ✅ Loaded pending queue: 2747 total (2727 pending, 20 enriched, 0 posted)
[2026-01-21T05:50:20.767Z] [BOT] ✅ Saved pending queue: 2747 total (2727 pending, 10 enriched, 10 posted)
[2026-01-21T05:50:20.767Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T05:50:20.831Z] [BOT] 📂 Loaded 5675 existing routing entries
[2026-01-21T05:50:20.907Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T05:50:20.907Z] [BOT] Total entries: 5685
   Timestamp: 2026-01-21T05:50:20.882Z
[2026-01-21T05:50:20.908Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T05:50:20.908Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T05:50:20.908Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
[2026-01-21T05:50:20.908Z] [BOT] Top channels:
     1. #tech-jobs: 7 posts
     2. #JID_ead674af: 2 posts
     3. #ai-jobs: 2 posts
     4. #JID_98d4f0de: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T05:50:20.908Z] [BOT] [STATS] Channel stats saved
[2026-01-21T05:50:22.935Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2673) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*