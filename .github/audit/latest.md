# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T06:02:19.227Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T06:01:38.754Z] ========================================
[2026-01-21T06:01:38.756Z] Discord Bot Execution Log
[2026-01-21T06:01:38.756Z] Environment: GitHub Actions
[2026-01-21T06:01:38.756Z] Node Version: v20.19.6
[2026-01-21T06:01:38.756Z] ========================================
[2026-01-21T06:01:38.756Z] Environment Variables Check:
[2026-01-21T06:01:38.756Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T06:01:38.757Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.757Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T06:01:38.757Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T06:01:38.757Z] 
Multi-Channel Configuration:
[2026-01-21T06:01:38.757Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.757Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.757Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.757Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.757Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.757Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.758Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.758Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.758Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T06:01:38.758Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T06:01:38.758Z] 
Data Files Check:
[2026-01-21T06:01:38.758Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51914 bytes)
[2026-01-21T06:01:38.770Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1771016 bytes)
[2026-01-21T06:01:38.770Z] 
========================================
[2026-01-21T06:01:38.770Z] Starting Enhanced Discord Bot...
[2026-01-21T06:01:38.770Z] ========================================
[2026-01-21T06:01:39.312Z] [BOT] ✅ Loaded V2 database: 3117 jobs
[2026-01-21T06:01:40.227Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T06:01:40.228Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T06:01:40.228Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T06:01:40.343Z] [BOT] ✅ Loaded pending queue: 2750 total (2730 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Software Engineer - Baseball Enterprise at Major League Baseball
[2026-01-21T06:01:40.347Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T06:01:40.347Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T06:01:40.347Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T06:01:40.348Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T06:01:40.349Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T06:01:40.352Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-21T06:01:40.352Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Baseball Enterprise" @ ORG_2bc58fcc League Baseball
[2026-01-21T06:01:40.352Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:01:40.369Z] [BOT ERROR] (node:2799) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T06:01:40.565Z] [BOT] ✅ Posted message: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball in #tech-jobs
  ✅ Industry: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball
[2026-01-21T06:01:40.567Z] [BOT] 💾 Added channel posting: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball → category channel (1 total channels)
[2026-01-21T06:01:40.567Z] [BOT] 💾 BEFORE ARCHIVING: 3118 jobs in database
[2026-01-21T06:01:40.569Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T06:01:40.574Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T06:01:40.574Z] [BOT] ✅ Archiving complete: 10 archived, 3108 active
[2026-01-21T06:01:40.597Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:42.271Z] [BOT] ✅ Posted message: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T06:01:42.271Z] [BOT] 💾 Added channel posting: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball → location channel (2 total channels)
[2026-01-21T06:01:42.272Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-21T06:01:42.273Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-21T06:01:42.291Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:43.792Z] [BOT] 💾 Marked as posted: Associate Software Engineer - Baseball Enterprise @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-21T06:01:43.793Z] [BOT] 💾 BEFORE ARCHIVING: 3109 jobs in database
[2026-01-21T06:01:43.795Z] [BOT] ✅ No jobs to archive (all 3109 jobs within 7-day window)
[2026-01-21T06:01:43.815Z] [BOT] 💾 Saved posted_jobs.json: 3109 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:43.815Z] [BOT] 📍 [ROUTING] "AI Generalist - Entry-Level - Freelance AI Trainer Project" @ ORG_4ee447c5 Technologies AI
[2026-01-21T06:01:43.816Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:01:44.027Z] [BOT] ✅ Posted message: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI in #tech-jobs
[2026-01-21T06:01:44.027Z] [BOT] ✅ Industry: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI
[2026-01-21T06:01:44.028Z] [BOT] 💾 Added channel posting: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI → category channel (1 total channels)
[2026-01-21T06:01:44.028Z] [BOT] 💾 BEFORE ARCHIVING: 3110 jobs in database
[2026-01-21T06:01:44.030Z] [BOT] ✅ No jobs to archive (all 3110 jobs within 7-day window)
[2026-01-21T06:01:44.050Z] [BOT] 💾 Saved posted_jobs.json: 3110 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:45.876Z] [BOT] ✅ Posted message: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI in #JID_ead674af
[2026-01-21T06:01:45.876Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T06:01:45.877Z] [BOT] 💾 Added channel posting: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI → location channel (2 total channels)
[2026-01-21T06:01:45.877Z] [BOT] 💾 BEFORE ARCHIVING: 3110 jobs in database
[2026-01-21T06:01:45.879Z] [BOT] ✅ No jobs to archive (all 3110 jobs within 7-day window)
[2026-01-21T06:01:45.898Z] [BOT] 💾 Saved posted_jobs.json: 3110 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:47.399Z] [BOT] 💾 Marked as posted: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI (instance #1)
[2026-01-21T06:01:47.399Z] [BOT] 💾 BEFORE ARCHIVING: 3111 jobs in database
[2026-01-21T06:01:47.401Z] [BOT] ✅ No jobs to archive (all 3111 jobs within 7-day window)
[2026-01-21T06:01:47.419Z] [BOT] 💾 Saved posted_jobs.json: 3111 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:47.419Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_1d45ae99
[2026-01-21T06:01:47.419Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:01:47.599Z] [BOT] ✅ Posted message: Software Developer @ ORG_1d45ae99 in #tech-jobs
  ✅ Industry: Software Developer @ ORG_1d45ae99
[2026-01-21T06:01:47.600Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_1d45ae99 → category channel (1 total channels)
[2026-01-21T06:01:47.600Z] [BOT] 💾 BEFORE ARCHIVING: 3112 jobs in database
[2026-01-21T06:01:47.602Z] [BOT] ✅ No jobs to archive (all 3112 jobs within 7-day window)
[2026-01-21T06:01:47.621Z] [BOT] 💾 Saved posted_jobs.json: 3112 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:49.122Z] [BOT] 💾 Marked as posted: Software Developer @ ORG_1d45ae99 (instance #1)
[2026-01-21T06:01:49.122Z] [BOT] 💾 BEFORE ARCHIVING: 3113 jobs in database
[2026-01-21T06:01:49.125Z] [BOT] ✅ No jobs to archive (all 3113 jobs within 7-day window)
[2026-01-21T06:01:49.146Z] [BOT] 💾 Saved posted_jobs.json: 3113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:49.147Z] [BOT] 📍 [ROUTING] "Transportation Technician 1" @ ORG_aa14f556
[2026-01-21T06:01:49.147Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:01:49.307Z] [BOT] ✅ Posted message: Transportation Technician 1 @ ORG_aa14f556 in #tech-jobs
[2026-01-21T06:01:49.307Z] [BOT] ✅ Industry: Transportation Technician 1 @ ORG_aa14f556
[2026-01-21T06:01:49.308Z] [BOT] 💾 Added channel posting: Transportation Technician 1 @ ORG_aa14f556 → category channel (1 total channels)
[2026-01-21T06:01:49.308Z] [BOT] 💾 BEFORE ARCHIVING: 3114 jobs in database
[2026-01-21T06:01:49.310Z] [BOT] ✅ No jobs to archive (all 3114 jobs within 7-day window)
[2026-01-21T06:01:49.330Z] [BOT] 💾 Saved posted_jobs.json: 3114 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:51.039Z] [BOT] ✅ Posted message: Transportation Technician 1 @ ORG_aa14f556 in #JID_ead674af
[2026-01-21T06:01:51.040Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T06:01:51.040Z] [BOT] 💾 Added channel posting: Transportation Technician 1 @ ORG_aa14f556 → location channel (2 total channels)
[2026-01-21T06:01:51.040Z] [BOT] 💾 BEFORE ARCHIVING: 3114 jobs in database
[2026-01-21T06:01:51.042Z] [BOT] ✅ No jobs to archive (all 3114 jobs within 7-day window)
[2026-01-21T06:01:51.062Z] [BOT] 💾 Saved posted_jobs.json: 3114 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:52.563Z] [BOT] 💾 Marked as posted: Transportation Technician 1 @ ORG_aa14f556 (instance #1)
[2026-01-21T06:01:52.563Z] [BOT] 💾 BEFORE ARCHIVING: 3115 jobs in database
[2026-01-21T06:01:52.565Z] [BOT] ✅ No jobs to archive (all 3115 jobs within 7-day window)
[2026-01-21T06:01:52.585Z] [BOT] 💾 Saved posted_jobs.json: 3115 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:55.586Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T06:01:55.587Z] [BOT] 📍 [ROUTING] "Staff GenAI Engineer - Application Performance Monitoring (APM)" @ datadog
[2026-01-21T06:01:55.587Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T06:01:55.795Z] [BOT] ✅ Posted message: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #ai-jobs
  ✅ Industry: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog
[2026-01-21T06:01:55.796Z] [BOT] 💾 Added channel posting: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog → category channel (1 total channels)
[2026-01-21T06:01:55.796Z] [BOT] 💾 BEFORE ARCHIVING: 3116 jobs in database
[2026-01-21T06:01:55.799Z] [BOT] ✅ No jobs to archive (all 3116 jobs within 7-day window)
[2026-01-21T06:01:55.818Z] [BOT] 💾 Saved posted_jobs.json: 3116 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:57.726Z] [BOT] ✅ Posted message: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #JID_98d4f0de
[2026-01-21T06:01:57.726Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T06:01:57.727Z] [BOT] 💾 Added channel posting: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog → location channel (2 total channels)
[2026-01-21T06:01:57.727Z] [BOT] 💾 BEFORE ARCHIVING: 3116 jobs in database
[2026-01-21T06:01:57.729Z] [BOT] ✅ No jobs to archive (all 3116 jobs within 7-day window)
[2026-01-21T06:01:57.747Z] [BOT] 💾 Saved posted_jobs.json: 3116 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:59.248Z] [BOT] 💾 Marked as posted: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog (instance #1)
[2026-01-21T06:01:59.249Z] [BOT] 💾 BEFORE ARCHIVING: 3117 jobs in database
[2026-01-21T06:01:59.250Z] [BOT] ✅ No jobs to archive (all 3117 jobs within 7-day window)
[2026-01-21T06:01:59.269Z] [BOT] 💾 Saved posted_jobs.json: 3117 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:01:59.270Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Georgia - US" @ ORG_f3ae3598
[2026-01-21T06:01:59.270Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T06:01:59.511Z] [BOT] ✅ Posted message: AI Data Specialist - Georgia - US @ ORG_f3ae3598 in #ai-jobs
  ✅ Industry: AI Data Specialist - Georgia - US @ ORG_f3ae3598
[2026-01-21T06:01:59.512Z] [BOT] 💾 Added channel posting: AI Data Specialist - Georgia - US @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-21T06:01:59.512Z] [BOT] 💾 BEFORE ARCHIVING: 3118 jobs in database
[2026-01-21T06:01:59.514Z] [BOT] ✅ No jobs to archive (all 3118 jobs within 7-day window)
[2026-01-21T06:01:59.531Z] [BOT] 💾 Saved posted_jobs.json: 3118 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:01.032Z] [BOT] 💾 Marked as posted: AI Data Specialist - Georgia - US @ ORG_f3ae3598 (instance #1)
[2026-01-21T06:02:01.033Z] [BOT] 💾 BEFORE ARCHIVING: 3119 jobs in database
[2026-01-21T06:02:01.034Z] [BOT] ✅ No jobs to archive (all 3119 jobs within 7-day window)
[2026-01-21T06:02:01.055Z] [BOT] 💾 Saved posted_jobs.json: 3119 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:01.055Z] [BOT] 📍 [ROUTING] "AI Data Specialist - AI Data Specialist Team" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T06:02:01.055Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T06:02:01.255Z] [BOT] ✅ Posted message: AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598 in #ai-jobs
[2026-01-21T06:02:01.255Z] [BOT] ✅ Industry: AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598
[2026-01-21T06:02:01.256Z] [BOT] 💾 Added channel posting: AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-21T06:02:01.256Z] [BOT] 💾 BEFORE ARCHIVING: 3120 jobs in database
[2026-01-21T06:02:01.258Z] [BOT] ✅ No jobs to archive (all 3120 jobs within 7-day window)
[2026-01-21T06:02:01.276Z] [BOT] 💾 Saved posted_jobs.json: 3120 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:02.777Z] [BOT] 💾 Marked as posted: AI Data Specialist - AI Data Specialist Team @ ORG_f3ae3598 (instance #1)
[2026-01-21T06:02:02.777Z] [BOT] 💾 BEFORE ARCHIVING: 3121 jobs in database
[2026-01-21T06:02:02.779Z] [BOT] ✅ No jobs to archive (all 3121 jobs within 7-day window)
[2026-01-21T06:02:02.799Z] [BOT] 💾 Saved posted_jobs.json: 3121 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:02.799Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Pennsylvania - US" @ ORG_f3ae3598
[2026-01-21T06:02:02.799Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T06:02:03.099Z] [BOT] ✅ Posted message: AI Data Specialist - Pennsylvania - US @ ORG_f3ae3598 in #ai-jobs
  ✅ Industry: AI Data Specialist - Pennsylvania - US @ ORG_f3ae3598
[2026-01-21T06:02:03.100Z] [BOT] 💾 Added channel posting: AI Data Specialist - Pennsylvania - US @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-21T06:02:03.100Z] [BOT] 💾 BEFORE ARCHIVING: 3122 jobs in database
[2026-01-21T06:02:03.102Z] [BOT] ✅ No jobs to archive (all 3122 jobs within 7-day window)
[2026-01-21T06:02:03.123Z] [BOT] 💾 Saved posted_jobs.json: 3122 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:04.624Z] [BOT] 💾 Marked as posted: AI Data Specialist - Pennsylvania - US @ ORG_f3ae3598 (instance #1)
[2026-01-21T06:02:04.624Z] [BOT] 💾 BEFORE ARCHIVING: 3123 jobs in database
[2026-01-21T06:02:04.626Z] [BOT] ✅ No jobs to archive (all 3123 jobs within 7-day window)
[2026-01-21T06:02:04.646Z] [BOT] 💾 Saved posted_jobs.json: 3123 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:07.647Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2026-01-21T06:02:07.648Z] [BOT] 📍 [ROUTING] "Engineering Data Analyst" @ ORG_6593710a Engineers
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-21T06:02:07.648Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T06:02:07.910Z] [BOT] ✅ Posted message: Engineering Data Analyst @ ORG_6593710a Engineers in #JID_fb739488
[2026-01-21T06:02:07.910Z] [BOT] ✅ Industry: Engineering Data Analyst @ ORG_6593710a Engineers
[2026-01-21T06:02:07.911Z] [BOT] 💾 Added channel posting: Engineering Data Analyst @ ORG_6593710a Engineers → category channel (1 total channels)
[2026-01-21T06:02:07.911Z] [BOT] 💾 BEFORE ARCHIVING: 3124 jobs in database
[2026-01-21T06:02:07.913Z] [BOT] ✅ No jobs to archive (all 3124 jobs within 7-day window)
[2026-01-21T06:02:07.933Z] [BOT] 💾 Saved posted_jobs.json: 3124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:09.434Z] [BOT] 💾 Marked as posted: Engineering Data Analyst @ ORG_6593710a Engineers (instance #1)
[2026-01-21T06:02:09.434Z] [BOT] 💾 BEFORE ARCHIVING: 3125 jobs in database
[2026-01-21T06:02:09.437Z] [BOT] ✅ No jobs to archive (all 3125 jobs within 7-day window)
[2026-01-21T06:02:09.458Z] [BOT] 💾 Saved posted_jobs.json: 3125 active jobs
[2026-01-21T06:02:09.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:09.458Z] [BOT] 📍 [ROUTING] "Analytics Associate 1" @ ORG_75e49207 Analytics
[2026-01-21T06:02:09.458Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T06:02:09.613Z] [BOT] ✅ Posted message: Analytics Associate 1 @ ORG_75e49207 Analytics in #JID_fb739488
  ✅ Industry: Analytics Associate 1 @ ORG_75e49207 Analytics
[2026-01-21T06:02:09.614Z] [BOT] 💾 Added channel posting: Analytics Associate 1 @ ORG_75e49207 Analytics → category channel (1 total channels)
[2026-01-21T06:02:09.614Z] [BOT] 💾 BEFORE ARCHIVING: 3126 jobs in database
[2026-01-21T06:02:09.616Z] [BOT] ✅ No jobs to archive (all 3126 jobs within 7-day window)
[2026-01-21T06:02:09.636Z] [BOT] 💾 Saved posted_jobs.json: 3126 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:11.369Z] [BOT] ✅ Posted message: Analytics Associate 1 @ ORG_75e49207 Analytics in #JID_ead674af
[2026-01-21T06:02:11.370Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T06:02:11.370Z] [BOT] 💾 Added channel posting: Analytics Associate 1 @ ORG_75e49207 Analytics → location channel (2 total channels)
[2026-01-21T06:02:11.370Z] [BOT] 💾 BEFORE ARCHIVING: 3126 jobs in database
[2026-01-21T06:02:11.372Z] [BOT] ✅ No jobs to archive (all 3126 jobs within 7-day window)
[2026-01-21T06:02:11.389Z] [BOT] 💾 Saved posted_jobs.json: 3126 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:12.890Z] [BOT] 💾 Marked as posted: Analytics Associate 1 @ ORG_75e49207 Analytics (instance #1)
[2026-01-21T06:02:12.890Z] [BOT] 💾 BEFORE ARCHIVING: 3127 jobs in database
[2026-01-21T06:02:12.892Z] [BOT] ✅ No jobs to archive (all 3127 jobs within 7-day window)
[2026-01-21T06:02:12.911Z] [BOT] 💾 Saved posted_jobs.json: 3127 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:02:15.912Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T06:02:15.913Z] [BOT] ⏭️  Skipping duplicate: JID_c2d21f32 (posted within 7 days)
[2026-01-21T06:02:15.913Z] [BOT] ⏭️  Skipping duplicate: JID_508df824 (posted within 7 days)
[2026-01-21T06:02:15.913Z] [BOT] ⏭️  Skipping duplicate: JID_d63aa146 (posted within 7 days)
[2026-01-21T06:02:15.913Z] [BOT] ⏭️  Skipping duplicate: JID_0dc10f08 (posted within 7 days)
[2026-01-21T06:02:15.913Z] [BOT] ⏭️  Skipping duplicate: JID_47164d09 (posted within 7 days)
[2026-01-21T06:02:15.913Z] [BOT] ⏭️  Skipping duplicate: JID_580649eb-cx_1-job-30513 (posted within 7 days)
[2026-01-21T06:02:15.914Z] [BOT] ⏭️  Skipping duplicate: JID_455f5248 (posted within 7 days)
[2026-01-21T06:02:15.914Z] [BOT] ⏭️  Skipping duplicate: JID_d5c083a5 (posted within 7 days)
[2026-01-21T06:02:15.914Z] [BOT] ⏭️  Skipping duplicate: JID_a7af2c9c (posted within 7 days)
[2026-01-21T06:02:15.914Z] [BOT] ⏭️  Skipping duplicate: JID_96301371 (posted within 7 days)
[2026-01-21T06:02:16.017Z] [BOT] ✅ Loaded pending queue: 2750 total (2730 pending, 20 enriched, 0 posted)
[2026-01-21T06:02:16.199Z] [BOT] ✅ Saved pending queue: 2750 total (2730 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T06:02:16.266Z] [BOT] 📂 Loaded 5685 existing routing entries
[2026-01-21T06:02:16.341Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5695
   Timestamp: 2026-01-21T06:02:16.317Z
[2026-01-21T06:02:16.342Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T06:02:16.342Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-21T06:02:16.342Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-21T06:02:16.342Z] [BOT] 1. #tech-jobs: 4 posts
     2. #JID_ead674af: 4 posts
     3. #ai-jobs: 4 posts
     4. #JID_fb739488: 2 posts
     5. #JID_98d4f0de: 1 posts
[2026-01-21T06:02:16.342Z] [BOT] [STATS] Channel stats saved
[2026-01-21T06:02:18.369Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2799) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*