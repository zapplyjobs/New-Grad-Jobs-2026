# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T10:53:05.023Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T10:52:23.762Z] ========================================
[2026-01-21T10:52:23.764Z] Discord Bot Execution Log
[2026-01-21T10:52:23.764Z] Environment: GitHub Actions
[2026-01-21T10:52:23.764Z] Node Version: v20.19.6
[2026-01-21T10:52:23.764Z] ========================================
[2026-01-21T10:52:23.764Z] Environment Variables Check:
[2026-01-21T10:52:23.764Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T10:52:23.764Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.764Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T10:52:23.765Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T10:52:23.765Z] 
Multi-Channel Configuration:
[2026-01-21T10:52:23.765Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.765Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.765Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.765Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.765Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.765Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.765Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.765Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.765Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T10:52:23.765Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T10:52:23.765Z] 
Data Files Check:
[2026-01-21T10:52:23.766Z] .github/data/new_jobs.json: ✅ Exists (10 items, 45037 bytes)
[2026-01-21T10:52:23.778Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1882289 bytes)
[2026-01-21T10:52:23.778Z] 
========================================
[2026-01-21T10:52:23.778Z] Starting Enhanced Discord Bot...
[2026-01-21T10:52:23.778Z] ========================================
[2026-01-21T10:52:24.344Z] [BOT] ✅ Loaded V2 database: 3296 jobs
[2026-01-21T10:52:25.075Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T10:52:25.075Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T10:52:25.075Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T10:52:25.190Z] [BOT] ✅ Loaded pending queue: 2755 total (2735 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Entry Level Software Engineer at Amentum
[2026-01-21T10:52:25.194Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T10:52:25.195Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T10:52:25.195Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T10:52:25.196Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-21T10:52:25.196Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-21T10:52:25.196Z] [BOT] - Senior Growth Marketing Manager @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T10:52:25.198Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T10:52:25.199Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
[2026-01-21T10:52:25.199Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:52:25.216Z] [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T10:52:25.409Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_f7a2cae4 in #tech-jobs
[2026-01-21T10:52:25.409Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-21T10:52:25.410Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_f7a2cae4 → category channel (1 total channels)
[2026-01-21T10:52:25.410Z] [BOT] 💾 BEFORE ARCHIVING: 3297 jobs in database
[2026-01-21T10:52:25.413Z] [BOT] ✅ No jobs to archive (all 3297 jobs within 7-day window)
[2026-01-21T10:52:25.438Z] [BOT] 💾 Saved posted_jobs.json: 3297 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:27.077Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_f7a2cae4 in #JID_ead674af
[2026-01-21T10:52:27.078Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T10:52:27.078Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_f7a2cae4 → location channel (2 total channels)
[2026-01-21T10:52:27.078Z] [BOT] 💾 BEFORE ARCHIVING: 3297 jobs in database
[2026-01-21T10:52:27.082Z] [BOT] ✅ No jobs to archive (all 3297 jobs within 7-day window)
[2026-01-21T10:52:27.115Z] [BOT] 💾 Saved posted_jobs.json: 3297 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:28.617Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_f7a2cae4 (instance #1)
[2026-01-21T10:52:28.617Z] [BOT] 💾 BEFORE ARCHIVING: 3298 jobs in database
[2026-01-21T10:52:28.619Z] [BOT] ✅ No jobs to archive (all 3298 jobs within 7-day window)
[2026-01-21T10:52:28.641Z] [BOT] 💾 Saved posted_jobs.json: 3298 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:28.642Z] [BOT] 📍 [ROUTING] "Data Integration Analyst 1" @ ORG_1ce21df7 Solutions
[2026-01-21T10:52:28.642Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:52:28.804Z] [BOT] ✅ Posted message: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions in #tech-jobs
[2026-01-21T10:52:28.804Z] [BOT] ✅ Industry: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions
[2026-01-21T10:52:28.805Z] [BOT] 💾 Added channel posting: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions → category channel (1 total channels)
[2026-01-21T10:52:28.805Z] [BOT] 💾 BEFORE ARCHIVING: 3299 jobs in database
[2026-01-21T10:52:28.807Z] [BOT] ✅ No jobs to archive (all 3299 jobs within 7-day window)
[2026-01-21T10:52:28.828Z] [BOT] 💾 Saved posted_jobs.json: 3299 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:30.490Z] [BOT] ✅ Posted message: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions in #JID_ead674af
[2026-01-21T10:52:30.490Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T10:52:30.490Z] [BOT] 💾 Added channel posting: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions → location channel (2 total channels)
[2026-01-21T10:52:30.491Z] [BOT] 💾 BEFORE ARCHIVING: 3299 jobs in database
[2026-01-21T10:52:30.493Z] [BOT] ✅ No jobs to archive (all 3299 jobs within 7-day window)
[2026-01-21T10:52:30.513Z] [BOT] 💾 Saved posted_jobs.json: 3299 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:32.016Z] [BOT] 💾 Marked as posted: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions (instance #1)
[2026-01-21T10:52:32.016Z] [BOT] 💾 BEFORE ARCHIVING: 3300 jobs in database
[2026-01-21T10:52:32.018Z] [BOT] ✅ No jobs to archive (all 3300 jobs within 7-day window)
[2026-01-21T10:52:32.037Z] [BOT] 💾 Saved posted_jobs.json: 3300 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:32.037Z] [BOT] 📍 [ROUTING] "EA Sports Academy Software Engineer" @ ORG_a284c4f1 Arts
[2026-01-21T10:52:32.038Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:52:32.307Z] [BOT] ✅ Posted message: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts in #tech-jobs
  ✅ Industry: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts
[2026-01-21T10:52:32.308Z] [BOT] 💾 Added channel posting: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts → category channel (1 total channels)
[2026-01-21T10:52:32.308Z] [BOT] 💾 BEFORE ARCHIVING: 3301 jobs in database
[2026-01-21T10:52:32.310Z] [BOT] ✅ No jobs to archive (all 3301 jobs within 7-day window)
[2026-01-21T10:52:32.329Z] [BOT] 💾 Saved posted_jobs.json: 3301 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:33.992Z] [BOT] ✅ Posted message: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts in #JID_ead674af
[2026-01-21T10:52:33.993Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T10:52:33.993Z] [BOT] 💾 Added channel posting: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts → location channel (2 total channels)
[2026-01-21T10:52:33.993Z] [BOT] 💾 BEFORE ARCHIVING: 3301 jobs in database
[2026-01-21T10:52:33.996Z] [BOT] ✅ No jobs to archive (all 3301 jobs within 7-day window)
[2026-01-21T10:52:34.019Z] [BOT] 💾 Saved posted_jobs.json: 3301 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:35.521Z] [BOT] 💾 Marked as posted: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts (instance #1)
[2026-01-21T10:52:35.521Z] [BOT] 💾 BEFORE ARCHIVING: 3302 jobs in database
[2026-01-21T10:52:35.524Z] [BOT] ✅ No jobs to archive (all 3302 jobs within 7-day window)
[2026-01-21T10:52:35.546Z] [BOT] 💾 Saved posted_jobs.json: 3302 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:35.546Z] [BOT] 📍 [ROUTING] "Backend Engineer - AI" @ ORG_dec20a22ing
[2026-01-21T10:52:35.547Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:52:35.745Z] [BOT] ✅ Posted message: Backend Engineer - AI @ ORG_dec20a22ing in #tech-jobs
[2026-01-21T10:52:35.745Z] [BOT] ✅ Industry: Backend Engineer - AI @ ORG_dec20a22ing
[2026-01-21T10:52:35.746Z] [BOT] 💾 Added channel posting: Backend Engineer - AI @ ORG_dec20a22ing → category channel (1 total channels)
[2026-01-21T10:52:35.746Z] [BOT] 💾 BEFORE ARCHIVING: 3303 jobs in database
[2026-01-21T10:52:35.748Z] [BOT] ✅ No jobs to archive (all 3303 jobs within 7-day window)
[2026-01-21T10:52:35.769Z] [BOT] 💾 Saved posted_jobs.json: 3303 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:37.271Z] [BOT] 💾 Marked as posted: Backend Engineer - AI @ ORG_dec20a22ing (instance #1)
[2026-01-21T10:52:37.272Z] [BOT] 💾 BEFORE ARCHIVING: 3304 jobs in database
[2026-01-21T10:52:37.274Z] [BOT] ✅ No jobs to archive (all 3304 jobs within 7-day window)
[2026-01-21T10:52:37.295Z] [BOT] 💾 Saved posted_jobs.json: 3304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:37.295Z] [BOT] 📍 [ROUTING] "Software Engineer - Windows Servicing and Delivery" @ ORG_c7bac469
   Category: TECH (matched: "software")
[2026-01-21T10:52:37.295Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T10:52:37.427Z] [BOT] ✅ Posted message: Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469 in #tech-jobs
  ✅ Industry: Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469
[2026-01-21T10:52:37.428Z] [BOT] 💾 Added channel posting: Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469 → category channel (1 total channels)
[2026-01-21T10:52:37.428Z] [BOT] 💾 BEFORE ARCHIVING: 3305 jobs in database
[2026-01-21T10:52:37.430Z] [BOT] ✅ No jobs to archive (all 3305 jobs within 7-day window)
[2026-01-21T10:52:37.450Z] [BOT] 💾 Saved posted_jobs.json: 3305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:38.951Z] [BOT] 💾 Marked as posted: Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469 (instance #1)
[2026-01-21T10:52:38.951Z] [BOT] 💾 BEFORE ARCHIVING: 3306 jobs in database
[2026-01-21T10:52:38.953Z] [BOT] ✅ No jobs to archive (all 3306 jobs within 7-day window)
[2026-01-21T10:52:38.973Z] [BOT] 💾 Saved posted_jobs.json: 3306 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:38.973Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2026-01-21T10:52:38.973Z] [BOT] 💾 BEFORE ARCHIVING: 3307 jobs in database
[2026-01-21T10:52:38.975Z] [BOT] ✅ No jobs to archive (all 3307 jobs within 7-day window)
[2026-01-21T10:52:38.994Z] [BOT] 💾 Saved posted_jobs.json: 3307 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:41.995Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T10:52:41.996Z] [BOT] 📍 [ROUTING] "Data Annotation Specialist" @ ORG_1fbf7080
[2026-01-21T10:52:41.996Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T10:52:42.340Z] [BOT] ✅ Posted message: Data Annotation Specialist @ ORG_1fbf7080 in #ai-jobs
[2026-01-21T10:52:42.340Z] [BOT] ✅ Industry: Data Annotation Specialist @ ORG_1fbf7080
[2026-01-21T10:52:42.341Z] [BOT] 💾 Added channel posting: Data Annotation Specialist @ ORG_1fbf7080 → category channel (1 total channels)
[2026-01-21T10:52:42.341Z] [BOT] 💾 BEFORE ARCHIVING: 3308 jobs in database
[2026-01-21T10:52:42.343Z] [BOT] ✅ No jobs to archive (all 3308 jobs within 7-day window)
[2026-01-21T10:52:42.362Z] [BOT] 💾 Saved posted_jobs.json: 3308 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:44.013Z] [BOT] ✅ Posted message: Data Annotation Specialist @ ORG_1fbf7080 in #JID_ead674af
[2026-01-21T10:52:44.014Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T10:52:44.014Z] [BOT] 💾 Added channel posting: Data Annotation Specialist @ ORG_1fbf7080 → location channel (2 total channels)
[2026-01-21T10:52:44.014Z] [BOT] 💾 BEFORE ARCHIVING: 3308 jobs in database
[2026-01-21T10:52:44.016Z] [BOT] ✅ No jobs to archive (all 3308 jobs within 7-day window)
[2026-01-21T10:52:44.036Z] [BOT] 💾 Saved posted_jobs.json: 3308 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:45.537Z] [BOT] 💾 Marked as posted: Data Annotation Specialist @ ORG_1fbf7080 (instance #1)
[2026-01-21T10:52:45.538Z] [BOT] 💾 BEFORE ARCHIVING: 3309 jobs in database
[2026-01-21T10:52:45.539Z] [BOT] ✅ No jobs to archive (all 3309 jobs within 7-day window)
[2026-01-21T10:52:45.559Z] [BOT] 💾 Saved posted_jobs.json: 3309 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:45.560Z] [BOT] 📍 [ROUTING] "Research Scientist - AI-Mediated Reality and Interaction Research" @ ORG_0890f456
[2026-01-21T10:52:45.560Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T10:52:45.733Z] [BOT] ✅ Posted message: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 in #ai-jobs
[2026-01-21T10:52:45.733Z] [BOT] ✅ Industry: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456
[2026-01-21T10:52:45.733Z] [BOT] 💾 Added channel posting: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T10:52:45.734Z] [BOT] 💾 BEFORE ARCHIVING: 3310 jobs in database
[2026-01-21T10:52:45.736Z] [BOT] ✅ No jobs to archive (all 3310 jobs within 7-day window)
[2026-01-21T10:52:45.756Z] [BOT] 💾 Saved posted_jobs.json: 3310 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:47.258Z] [BOT] 💾 Marked as posted: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 (instance #1)
[2026-01-21T10:52:47.259Z] [BOT] 💾 BEFORE ARCHIVING: 3311 jobs in database
[2026-01-21T10:52:47.261Z] [BOT] ✅ No jobs to archive (all 3311 jobs within 7-day window)
[2026-01-21T10:52:47.281Z] [BOT] 💾 Saved posted_jobs.json: 3311 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:47.281Z] [BOT] 📍 [ROUTING] "Software Engineer 2" @ ORG_8b09cf05
[2026-01-21T10:52:47.281Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T10:52:47.281Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T10:52:47.434Z] [BOT] ✅ Posted message: Software Engineer 2 @ ORG_8b09cf05 in #ai-jobs
  ✅ Industry: Software Engineer 2 @ ORG_8b09cf05
[2026-01-21T10:52:47.435Z] [BOT] 💾 Added channel posting: Software Engineer 2 @ ORG_8b09cf05 → category channel (1 total channels)
[2026-01-21T10:52:47.435Z] [BOT] 💾 BEFORE ARCHIVING: 3312 jobs in database
[2026-01-21T10:52:47.437Z] [BOT] ✅ No jobs to archive (all 3312 jobs within 7-day window)
[2026-01-21T10:52:47.458Z] [BOT] 💾 Saved posted_jobs.json: 3312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:49.197Z] [BOT] ✅ Posted message: Software Engineer 2 @ ORG_8b09cf05 in #JID_ead674af
[2026-01-21T10:52:49.197Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T10:52:49.197Z] [BOT] 💾 Added channel posting: Software Engineer 2 @ ORG_8b09cf05 → location channel (2 total channels)
[2026-01-21T10:52:49.197Z] [BOT] 💾 BEFORE ARCHIVING: 3312 jobs in database
[2026-01-21T10:52:49.200Z] [BOT] ✅ No jobs to archive (all 3312 jobs within 7-day window)
[2026-01-21T10:52:49.221Z] [BOT] 💾 Saved posted_jobs.json: 3312 active jobs
[2026-01-21T10:52:49.221Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:50.722Z] [BOT] 💾 Marked as posted: Software Engineer 2 @ ORG_8b09cf05 (instance #1)
[2026-01-21T10:52:50.722Z] [BOT] 💾 BEFORE ARCHIVING: 3313 jobs in database
[2026-01-21T10:52:50.724Z] [BOT] ✅ No jobs to archive (all 3313 jobs within 7-day window)
[2026-01-21T10:52:50.744Z] [BOT] 💾 Saved posted_jobs.json: 3313 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:50.745Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Personalization" @ spotify
   Category: AI (matched: "machine learning")
[2026-01-21T10:52:50.745Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T10:52:50.987Z] [BOT] ✅ Posted message: Machine Learning Engineer, Personalization @ spotify in #ai-jobs
  ✅ Industry: Machine Learning Engineer, Personalization @ spotify
[2026-01-21T10:52:50.988Z] [BOT] 💾 Added channel posting: Machine Learning Engineer, Personalization @ spotify → category channel (1 total channels)
[2026-01-21T10:52:50.988Z] [BOT] 💾 BEFORE ARCHIVING: 3314 jobs in database
[2026-01-21T10:52:50.990Z] [BOT] ✅ No jobs to archive (all 3314 jobs within 7-day window)
[2026-01-21T10:52:51.010Z] [BOT] 💾 Saved posted_jobs.json: 3314 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:52.650Z] [BOT] ✅ Posted message: Machine Learning Engineer, Personalization @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T10:52:52.651Z] [BOT] 💾 Added channel posting: Machine Learning Engineer, Personalization @ spotify → location channel (2 total channels)
[2026-01-21T10:52:52.651Z] [BOT] 💾 BEFORE ARCHIVING: 3314 jobs in database
[2026-01-21T10:52:52.653Z] [BOT] ✅ No jobs to archive (all 3314 jobs within 7-day window)
[2026-01-21T10:52:52.671Z] [BOT] 💾 Saved posted_jobs.json: 3314 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:54.173Z] [BOT] 💾 Marked as posted: Machine Learning Engineer, Personalization @ spotify (instance #1)
[2026-01-21T10:52:54.173Z] [BOT] 💾 BEFORE ARCHIVING: 3315 jobs in database
[2026-01-21T10:52:54.175Z] [BOT] ✅ No jobs to archive (all 3315 jobs within 7-day window)
[2026-01-21T10:52:54.196Z] [BOT] 💾 Saved posted_jobs.json: 3315 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:57.196Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T10:52:57.196Z] [BOT] 📍 [ROUTING] "Regulatory Data Analyst 1" @ ORG_a151ceb1 Financial
[2026-01-21T10:52:57.196Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T10:52:57.351Z] [BOT] ✅ Posted message: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  in #JID_fb739488
[2026-01-21T10:52:57.352Z] [BOT] ✅ Industry: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial
[2026-01-21T10:52:57.352Z] [BOT] 💾 Added channel posting: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  → category channel (1 total channels)
[2026-01-21T10:52:57.352Z] [BOT] 💾 BEFORE ARCHIVING: 3316 jobs in database
[2026-01-21T10:52:57.354Z] [BOT] ✅ No jobs to archive (all 3316 jobs within 7-day window)
[2026-01-21T10:52:57.373Z] [BOT] 💾 Saved posted_jobs.json: 3316 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:52:58.875Z] [BOT] 💾 Marked as posted: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  (instance #1)
[2026-01-21T10:52:58.875Z] [BOT] 💾 BEFORE ARCHIVING: 3317 jobs in database
[2026-01-21T10:52:58.877Z] [BOT] ✅ No jobs to archive (all 3317 jobs within 7-day window)
[2026-01-21T10:52:58.897Z] [BOT] 💾 Saved posted_jobs.json: 3317 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:53:01.897Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T10:53:01.898Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_b6cdd7c1-engineer_r0150489 (posted within 7 days)
[2026-01-21T10:53:01.898Z] [BOT] ⏭️  Skipping duplicate: JID_9ecd388f-allied_external-JID_c23c0330-_r-010442 (posted within 7 days)
[2026-01-21T10:53:01.898Z] [BOT] ⏭️  Skipping duplicate: JID_64f249be (posted within 7 days)
[2026-01-21T10:53:01.899Z] [BOT] ⏭️  Skipping duplicate: JID_64861b63-first_financial_bank-JID_96b813c1-i_jr102396 (posted within 7 days)
⏭️  Skipping duplicate: JID_23c6ec66-2026_jr2009485 (posted within 7 days)
[2026-01-21T10:53:01.899Z] [BOT] ⏭️  Skipping duplicate: JID_6e075de9-en_us-JID_ec2660f8 (posted within 7 days)
⏭️  Skipping duplicate: JID_35f7e58c (posted within 7 days)
⏭️  Skipping duplicate: JID_66f5ee0d (posted within 7 days)
⏭️  Skipping duplicate: JID_cbe31eb0 (posted within 7 days)
[2026-01-21T10:53:01.900Z] [BOT] ⏭️  Skipping duplicate: JID_f10069af (posted within 7 days)
[2026-01-21T10:53:02.002Z] [BOT] ✅ Loaded pending queue: 2755 total (2735 pending, 20 enriched, 0 posted)
[2026-01-21T10:53:02.194Z] [BOT] ✅ Saved pending queue: 2755 total (2735 pending, 10 enriched, 10 posted)
[2026-01-21T10:53:02.195Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T10:53:02.259Z] [BOT] 📂 Loaded 5825 existing routing entries
[2026-01-21T10:53:02.336Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T10:53:02.336Z] [BOT] Total entries: 5835
   Timestamp: 2026-01-21T10:53:02.311Z
[2026-01-21T10:53:02.337Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T10:53:02.337Z] [BOT] Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-21T10:53:02.337Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T10:53:02.338Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 5
   Top channels:
[2026-01-21T10:53:02.338Z] [BOT] 1. #tech-jobs: 5 posts
     2. #JID_ead674af: 5 posts
     3. #ai-jobs: 4 posts
     4. #JID_98d4f0de: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-21T10:53:02.338Z] [BOT] [STATS] Channel stats saved
[2026-01-21T10:53:04.365Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*