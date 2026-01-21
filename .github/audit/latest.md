# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T10:04:39.019Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T10:04:04.361Z] ========================================
[2026-01-21T10:04:04.363Z] Discord Bot Execution Log
[2026-01-21T10:04:04.363Z] Environment: GitHub Actions
[2026-01-21T10:04:04.363Z] Node Version: v20.19.6
[2026-01-21T10:04:04.363Z] ========================================
[2026-01-21T10:04:04.363Z] Environment Variables Check:
[2026-01-21T10:04:04.363Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T10:04:04.363Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.363Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T10:04:04.363Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T10:04:04.364Z] 
Multi-Channel Configuration:
[2026-01-21T10:04:04.364Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.364Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.364Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.364Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.364Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.364Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.364Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.364Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.364Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T10:04:04.364Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T10:04:04.364Z] 
Data Files Check:
[2026-01-21T10:04:04.365Z] .github/data/new_jobs.json: ✅ Exists (10 items, 77469 bytes)
[2026-01-21T10:04:04.379Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1857061 bytes)
[2026-01-21T10:04:04.379Z] 
========================================
[2026-01-21T10:04:04.379Z] Starting Enhanced Discord Bot...
[2026-01-21T10:04:04.379Z] ========================================
[2026-01-21T10:04:04.913Z] [BOT] ✅ Loaded V2 database: 3256 jobs
[2026-01-21T10:04:05.463Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T10:04:05.463Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T10:04:05.464Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T10:04:05.582Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Account Executive, Commercial Install Base  at vercel
[2026-01-21T10:04:05.586Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T10:04:05.586Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T10:04:05.586Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T10:04:05.587Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T10:04:05.588Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T10:04:05.591Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T10:04:05.591Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Install Base " @ vercel
[2026-01-21T10:04:05.591Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:04:05.595Z] [BOT ERROR] (node:3161) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T10:04:05.788Z] [BOT] ✅ Posted message: Account Executive, Commercial Install Base  @ vercel in #tech-jobs
[2026-01-21T10:04:05.788Z] [BOT] ✅ Industry: Account Executive, Commercial Install Base  @ vercel
[2026-01-21T10:04:05.789Z] [BOT] 💾 Added channel posting: Account Executive, Commercial Install Base  @ vercel → category channel (1 total channels)
[2026-01-21T10:04:05.789Z] [BOT] 💾 BEFORE ARCHIVING: 3257 jobs in database
[2026-01-21T10:04:05.792Z] [BOT] ✅ No jobs to archive (all 3257 jobs within 7-day window)
[2026-01-21T10:04:05.815Z] [BOT] 💾 Saved posted_jobs.json: 3257 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:07.317Z] [BOT] 💾 Marked as posted: Account Executive, Commercial Install Base  @ vercel (instance #1)
[2026-01-21T10:04:07.317Z] [BOT] 💾 BEFORE ARCHIVING: 3258 jobs in database
[2026-01-21T10:04:07.320Z] [BOT] ✅ No jobs to archive (all 3258 jobs within 7-day window)
[2026-01-21T10:04:07.338Z] [BOT] 💾 Saved posted_jobs.json: 3258 active jobs
[2026-01-21T10:04:07.339Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:07.339Z] [BOT] 📍 [ROUTING] "Manager, Customer Support Engineering" @ vercel
[2026-01-21T10:04:07.339Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:04:07.561Z] [BOT] ✅ Posted message: Manager, Customer Support Engineering @ vercel in #tech-jobs
[2026-01-21T10:04:07.561Z] [BOT] ✅ Industry: Manager, Customer Support Engineering @ vercel
[2026-01-21T10:04:07.562Z] [BOT] 💾 Added channel posting: Manager, Customer Support Engineering @ vercel → category channel (1 total channels)
[2026-01-21T10:04:07.562Z] [BOT] 💾 BEFORE ARCHIVING: 3259 jobs in database
[2026-01-21T10:04:07.564Z] [BOT] ✅ No jobs to archive (all 3259 jobs within 7-day window)
[2026-01-21T10:04:07.587Z] [BOT] 💾 Saved posted_jobs.json: 3259 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:09.088Z] [BOT] 💾 Marked as posted: Manager, Customer Support Engineering @ vercel (instance #1)
[2026-01-21T10:04:09.088Z] [BOT] 💾 BEFORE ARCHIVING: 3260 jobs in database
[2026-01-21T10:04:09.090Z] [BOT] ✅ No jobs to archive (all 3260 jobs within 7-day window)
[2026-01-21T10:04:09.111Z] [BOT] 💾 Saved posted_jobs.json: 3260 active jobs
[2026-01-21T10:04:09.111Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:09.111Z] [BOT] 📍 [ROUTING] "Staff Data Platform Engineer" @ vercel
[2026-01-21T10:04:09.111Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:04:09.289Z] [BOT] ✅ Posted message: Staff Data Platform Engineer @ vercel in #tech-jobs
  ✅ Industry: Staff Data Platform Engineer @ vercel
[2026-01-21T10:04:09.290Z] [BOT] 💾 Added channel posting: Staff Data Platform Engineer @ vercel → category channel (1 total channels)
[2026-01-21T10:04:09.290Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-21T10:04:09.293Z] [BOT] ✅ No jobs to archive (all 3261 jobs within 7-day window)
[2026-01-21T10:04:09.313Z] [BOT] 💾 Saved posted_jobs.json: 3261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:10.814Z] [BOT] 💾 Marked as posted: Staff Data Platform Engineer @ vercel (instance #1)
[2026-01-21T10:04:10.814Z] [BOT] 💾 BEFORE ARCHIVING: 3262 jobs in database
[2026-01-21T10:04:10.816Z] [BOT] ✅ No jobs to archive (all 3262 jobs within 7-day window)
[2026-01-21T10:04:10.835Z] [BOT] 💾 Saved posted_jobs.json: 3262 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:10.835Z] [BOT] 📍 [ROUTING] "Data Insight Analyst - Principal Data Insight Analyst" @ ORG_f3f2248d Grumman
[2026-01-21T10:04:10.835Z] [BOT] Category: TECH (matched: "data")
[2026-01-21T10:04:10.836Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T10:04:11.099Z] [BOT] ✅ Posted message: Data Insight Analyst - Principal Data Insight Analyst @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-21T10:04:11.099Z] [BOT] ✅ Industry: Data Insight Analyst - Principal Data Insight Analyst @ ORG_f3f2248d Grumman
[2026-01-21T10:04:11.100Z] [BOT] 💾 Added channel posting: Data Insight Analyst - Principal Data Insight Analyst @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-21T10:04:11.100Z] [BOT] 💾 BEFORE ARCHIVING: 3263 jobs in database
[2026-01-21T10:04:11.102Z] [BOT] ✅ No jobs to archive (all 3263 jobs within 7-day window)
[2026-01-21T10:04:11.122Z] [BOT] 💾 Saved posted_jobs.json: 3263 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:12.624Z] [BOT] 💾 Marked as posted: Data Insight Analyst - Principal Data Insight Analyst @ ORG_f3f2248d Grumman (instance #1)
[2026-01-21T10:04:12.624Z] [BOT] 💾 BEFORE ARCHIVING: 3264 jobs in database
[2026-01-21T10:04:12.626Z] [BOT] ✅ No jobs to archive (all 3264 jobs within 7-day window)
[2026-01-21T10:04:12.645Z] [BOT] 💾 Saved posted_jobs.json: 3264 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:12.645Z] [BOT] 📍 [ROUTING] "Field Geologist" @ ORG_3c8e259b
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:04:12.877Z] [BOT] ✅ Posted message: Field Geologist @ ORG_3c8e259b in #tech-jobs
  ✅ Industry: Field Geologist @ ORG_3c8e259b
[2026-01-21T10:04:12.878Z] [BOT] 💾 Added channel posting: Field Geologist @ ORG_3c8e259b → category channel (1 total channels)
[2026-01-21T10:04:12.878Z] [BOT] 💾 BEFORE ARCHIVING: 3265 jobs in database
[2026-01-21T10:04:12.880Z] [BOT] ✅ No jobs to archive (all 3265 jobs within 7-day window)
[2026-01-21T10:04:12.900Z] [BOT] 💾 Saved posted_jobs.json: 3265 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:14.539Z] [BOT] ✅ Posted message: Field Geologist @ ORG_3c8e259b in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T10:04:14.539Z] [BOT] 💾 Added channel posting: Field Geologist @ ORG_3c8e259b → location channel (2 total channels)
[2026-01-21T10:04:14.540Z] [BOT] 💾 BEFORE ARCHIVING: 3265 jobs in database
[2026-01-21T10:04:14.542Z] [BOT] ✅ No jobs to archive (all 3265 jobs within 7-day window)
[2026-01-21T10:04:14.565Z] [BOT] 💾 Saved posted_jobs.json: 3265 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:16.066Z] [BOT] 💾 Marked as posted: Field Geologist @ ORG_3c8e259b (instance #1)
[2026-01-21T10:04:16.067Z] [BOT] 💾 BEFORE ARCHIVING: 3266 jobs in database
[2026-01-21T10:04:16.069Z] [BOT] ✅ No jobs to archive (all 3266 jobs within 7-day window)
[2026-01-21T10:04:16.090Z] [BOT] 💾 Saved posted_jobs.json: 3266 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:19.091Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T10:04:19.091Z] [BOT] 📍 [ROUTING] "AI Engineer" @ vercel
[2026-01-21T10:04:19.091Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T10:04:19.343Z] [BOT] ✅ Posted message: AI Engineer @ vercel in #ai-jobs
[2026-01-21T10:04:19.344Z] [BOT] ✅ Industry: AI Engineer @ vercel
[2026-01-21T10:04:19.344Z] [BOT] 💾 Added channel posting: AI Engineer @ vercel → category channel (1 total channels)
[2026-01-21T10:04:19.344Z] [BOT] 💾 BEFORE ARCHIVING: 3267 jobs in database
[2026-01-21T10:04:19.346Z] [BOT] ✅ No jobs to archive (all 3267 jobs within 7-day window)
[2026-01-21T10:04:19.367Z] [BOT] 💾 Saved posted_jobs.json: 3267 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:20.869Z] [BOT] 💾 Marked as posted: AI Engineer @ vercel (instance #1)
[2026-01-21T10:04:20.869Z] [BOT] 💾 BEFORE ARCHIVING: 3268 jobs in database
[2026-01-21T10:04:20.871Z] [BOT] ✅ No jobs to archive (all 3268 jobs within 7-day window)
[2026-01-21T10:04:20.891Z] [BOT] 💾 Saved posted_jobs.json: 3268 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:20.891Z] [BOT] 📍 [ROUTING] "Research Scientist New College Grad - ML Systems" @ ORG_0890f456
[2026-01-21T10:04:20.891Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T10:04:21.065Z] [BOT] ✅ Posted message: Research Scientist New College Grad - ML Systems @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Research Scientist New College Grad - ML Systems @ ORG_0890f456
[2026-01-21T10:04:21.066Z] [BOT] 💾 Added channel posting: Research Scientist New College Grad - ML Systems @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T10:04:21.066Z] [BOT] 💾 BEFORE ARCHIVING: 3269 jobs in database
[2026-01-21T10:04:21.068Z] [BOT] ✅ No jobs to archive (all 3269 jobs within 7-day window)
[2026-01-21T10:04:21.090Z] [BOT] 💾 Saved posted_jobs.json: 3269 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:22.591Z] [BOT] 💾 Marked as posted: Research Scientist New College Grad - ML Systems @ ORG_0890f456 (instance #1)
[2026-01-21T10:04:22.591Z] [BOT] 💾 BEFORE ARCHIVING: 3270 jobs in database
[2026-01-21T10:04:22.593Z] [BOT] ✅ No jobs to archive (all 3270 jobs within 7-day window)
[2026-01-21T10:04:22.612Z] [BOT] 💾 Saved posted_jobs.json: 3270 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:22.612Z] [BOT] 📍 [ROUTING] "Research Associate - Lti - School of Computer Science" @ ORG_15a5b314 Mellon University
[2026-01-21T10:04:22.613Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-21T10:04:22.793Z] [BOT] ✅ Posted message: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University in #ai-jobs
[2026-01-21T10:04:22.794Z] [BOT] ✅ Industry: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University
[2026-01-21T10:04:22.794Z] [BOT] 💾 Added channel posting: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University → category channel (1 total channels)
[2026-01-21T10:04:22.794Z] [BOT] 💾 BEFORE ARCHIVING: 3271 jobs in database
[2026-01-21T10:04:22.796Z] [BOT] ✅ No jobs to archive (all 3271 jobs within 7-day window)
[2026-01-21T10:04:22.816Z] [BOT] 💾 Saved posted_jobs.json: 3271 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:24.492Z] [BOT] ✅ Posted message: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University in #JID_ead674af
[2026-01-21T10:04:24.492Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T10:04:24.493Z] [BOT] 💾 Added channel posting: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University → location channel (2 total channels)
[2026-01-21T10:04:24.493Z] [BOT] 💾 BEFORE ARCHIVING: 3271 jobs in database
[2026-01-21T10:04:24.495Z] [BOT] ✅ No jobs to archive (all 3271 jobs within 7-day window)
[2026-01-21T10:04:24.520Z] [BOT] 💾 Saved posted_jobs.json: 3271 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:26.021Z] [BOT] 💾 Marked as posted: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University (instance #1)
[2026-01-21T10:04:26.022Z] [BOT] 💾 BEFORE ARCHIVING: 3272 jobs in database
[2026-01-21T10:04:26.024Z] [BOT] ✅ No jobs to archive (all 3272 jobs within 7-day window)
[2026-01-21T10:04:26.047Z] [BOT] 💾 Saved posted_jobs.json: 3272 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:29.048Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2026-01-21T10:04:29.048Z] [BOT] 📍 [ROUTING] "Data Engineer 3" @ ORG_3eab285c
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T10:04:29.317Z] [BOT] ✅ Posted message: Data Engineer 3 @ ORG_3eab285c in #JID_fb739488
[2026-01-21T10:04:29.318Z] [BOT] ✅ Industry: Data Engineer 3 @ ORG_3eab285c
[2026-01-21T10:04:29.318Z] [BOT] 💾 Added channel posting: Data Engineer 3 @ ORG_3eab285c → category channel (1 total channels)
[2026-01-21T10:04:29.318Z] [BOT] 💾 BEFORE ARCHIVING: 3273 jobs in database
[2026-01-21T10:04:29.321Z] [BOT] ✅ No jobs to archive (all 3273 jobs within 7-day window)
[2026-01-21T10:04:29.341Z] [BOT] 💾 Saved posted_jobs.json: 3273 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:30.843Z] [BOT] 💾 Marked as posted: Data Engineer 3 @ ORG_3eab285c (instance #1)
[2026-01-21T10:04:30.843Z] [BOT] 💾 BEFORE ARCHIVING: 3274 jobs in database
[2026-01-21T10:04:30.845Z] [BOT] ✅ No jobs to archive (all 3274 jobs within 7-day window)
[2026-01-21T10:04:30.864Z] [BOT] 💾 Saved posted_jobs.json: 3274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:30.865Z] [BOT] 📍 [ROUTING] "Data Engineer 1" @ ORG_7854eeec
[2026-01-21T10:04:30.865Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T10:04:31.158Z] [BOT] ✅ Posted message: Data Engineer 1 @ ORG_7854eeec in #JID_fb739488
  ✅ Industry: Data Engineer 1 @ ORG_7854eeec
[2026-01-21T10:04:31.159Z] [BOT] 💾 Added channel posting: Data Engineer 1 @ ORG_7854eeec → category channel (1 total channels)
[2026-01-21T10:04:31.159Z] [BOT] 💾 BEFORE ARCHIVING: 3275 jobs in database
[2026-01-21T10:04:31.161Z] [BOT] ✅ No jobs to archive (all 3275 jobs within 7-day window)
[2026-01-21T10:04:31.180Z] [BOT] 💾 Saved posted_jobs.json: 3275 active jobs
[2026-01-21T10:04:31.181Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:32.682Z] [BOT] 💾 Marked as posted: Data Engineer 1 @ ORG_7854eeec (instance #1)
[2026-01-21T10:04:32.682Z] [BOT] 💾 BEFORE ARCHIVING: 3276 jobs in database
[2026-01-21T10:04:32.684Z] [BOT] ✅ No jobs to archive (all 3276 jobs within 7-day window)
[2026-01-21T10:04:32.702Z] [BOT] 💾 Saved posted_jobs.json: 3276 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:04:35.703Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T10:04:35.704Z] [BOT] ⏭️  Skipping duplicate: JID_32dda557 (posted within 7 days)
[2026-01-21T10:04:35.704Z] [BOT] ⏭️  Skipping duplicate: JID_e8051f69 (posted within 7 days)
[2026-01-21T10:04:35.704Z] [BOT] ⏭️  Skipping duplicate: JID_9d30b256 (posted within 7 days)
[2026-01-21T10:04:35.704Z] [BOT] ⏭️  Skipping duplicate: JID_527413fd (posted within 7 days)
[2026-01-21T10:04:35.704Z] [BOT] ⏭️  Skipping duplicate: JID_c78ce377-2026_jr2010161 (posted within 7 days)
[2026-01-21T10:04:35.705Z] [BOT] ⏭️  Skipping duplicate: JID_bb869606-iii_r-2350035 (posted within 7 days)
[2026-01-21T10:04:35.705Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_cf0b966f-analyst_r10213256 (posted within 7 days)
[2026-01-21T10:04:35.705Z] [BOT] ⏭️  Skipping duplicate: JID_6d1d25a4-i_r0114228 (posted within 7 days)
[2026-01-21T10:04:35.705Z] [BOT] ⏭️  Skipping duplicate: JID_26d26452-science_2023968 (posted within 7 days)
[2026-01-21T10:04:35.705Z] [BOT] ⏭️  Skipping duplicate: JID_646bc27b-cx_1-job-36628 (posted within 7 days)
[2026-01-21T10:04:35.821Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[2026-01-21T10:04:36.003Z] [BOT] ✅ Saved pending queue: 2749 total (2729 pending, 10 enriched, 10 posted)
[2026-01-21T10:04:36.003Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T10:04:36.068Z] [BOT] 📂 Loaded 5805 existing routing entries
[2026-01-21T10:04:36.150Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T10:04:36.150Z] [BOT] Total entries: 5815
   Timestamp: 2026-01-21T10:04:36.123Z
[2026-01-21T10:04:36.150Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T10:04:36.151Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T10:04:36.151Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 3 posts
     3. #JID_fb739488: 2 posts
     4. #JID_98d4f0de: 1 posts
     5. #JID_ead674af: 1 posts
[2026-01-21T10:04:36.151Z] [BOT] [STATS] Channel stats saved
[2026-01-21T10:04:38.177Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3161) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*