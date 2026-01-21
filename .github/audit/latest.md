# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T09:32:19.720Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T09:31:47.629Z] ========================================
[2026-01-21T09:31:47.631Z] Discord Bot Execution Log
[2026-01-21T09:31:47.631Z] Environment: GitHub Actions
[2026-01-21T09:31:47.631Z] Node Version: v20.19.6
[2026-01-21T09:31:47.631Z] ========================================
[2026-01-21T09:31:47.631Z] Environment Variables Check:
[2026-01-21T09:31:47.631Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T09:31:47.631Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.631Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T09:31:47.631Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T09:31:47.631Z] 
Multi-Channel Configuration:
[2026-01-21T09:31:47.632Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.632Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.632Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.632Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.632Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.632Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.632Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.632Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.632Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T09:31:47.632Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T09:31:47.632Z] 
Data Files Check:
[2026-01-21T09:31:47.633Z] .github/data/new_jobs.json: ✅ Exists (10 items, 130984 bytes)
[2026-01-21T09:31:47.645Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1833351 bytes)
[2026-01-21T09:31:47.645Z] 
========================================
[2026-01-21T09:31:47.645Z] Starting Enhanced Discord Bot...
[2026-01-21T09:31:47.645Z] ========================================
[2026-01-21T09:31:48.177Z] [BOT] ✅ Loaded V2 database: 3216 jobs
[2026-01-21T09:31:48.873Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T09:31:48.873Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T09:31:48.874Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T09:31:48.988Z] [BOT] ✅ Loaded pending queue: 2745 total (2725 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Compensation Systems and Infrastructure at anthropic
[2026-01-21T09:31:48.992Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T09:31:48.992Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T09:31:48.992Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T09:31:48.992Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T09:31:48.992Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T09:31:48.993Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-21T09:31:49.096Z] [BOT] ✅ Loaded pending queue: 2745 total (2725 pending, 20 enriched, 0 posted)
[2026-01-21T09:31:49.268Z] [BOT] ✅ Saved pending queue: 2737 total (2725 pending, 12 enriched, 0 posted)
🗑️ Removed 8 blacklisted jobs from pending queue
[2026-01-21T09:31:49.268Z] [BOT] 📋 After blacklist filter: 12 jobs (8 blacklisted)
📋 After data quality filter: 12 jobs (0 invalid)
[2026-01-21T09:31:49.269Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-01-21T09:31:49.269Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T09:31:49.273Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-21T09:31:49.273Z] [BOT] 📍 [ROUTING] "Compensation Systems and Infrastructure" @ anthropic
[2026-01-21T09:31:49.273Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T09:31:49.278Z] [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T09:31:49.551Z] [BOT] ✅ Posted message: Compensation Systems and Infrastructure @ anthropic in #finance-jobs
[2026-01-21T09:31:49.551Z] [BOT] ✅ Industry: Compensation Systems and Infrastructure @ anthropic
[2026-01-21T09:31:49.552Z] [BOT] 💾 Added channel posting: Compensation Systems and Infrastructure @ anthropic → category channel (1 total channels)
[2026-01-21T09:31:49.553Z] [BOT] 💾 BEFORE ARCHIVING: 3217 jobs in database
[2026-01-21T09:31:49.555Z] [BOT] ✅ No jobs to archive (all 3217 jobs within 7-day window)
[2026-01-21T09:31:49.581Z] [BOT] 💾 Saved posted_jobs.json: 3217 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:31:51.082Z] [BOT] 💾 Marked as posted: Compensation Systems and Infrastructure @ anthropic (instance #1)
[2026-01-21T09:31:51.082Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-21T09:31:51.084Z] [BOT] ✅ No jobs to archive (all 3218 jobs within 7-day window)
[2026-01-21T09:31:51.104Z] [BOT] 💾 Saved posted_jobs.json: 3218 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:31:51.104Z] [BOT] 📍 [ROUTING] "Finance Systems, Senior Business Systems Analyst - Finance & Strategy" @ anthropic
   Category: FINANCE (matched: "finance")
[2026-01-21T09:31:51.104Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T09:31:51.271Z] [BOT] ✅ Posted message: Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic in #finance-jobs
  ✅ Industry: Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic
[2026-01-21T09:31:51.272Z] [BOT] 💾 Added channel posting: Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic → category channel (1 total channels)
[2026-01-21T09:31:51.272Z] [BOT] 💾 BEFORE ARCHIVING: 3219 jobs in database
[2026-01-21T09:31:51.274Z] [BOT] ✅ No jobs to archive (all 3219 jobs within 7-day window)
[2026-01-21T09:31:51.293Z] [BOT] 💾 Saved posted_jobs.json: 3219 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:31:52.794Z] [BOT] 💾 Marked as posted: Finance Systems, Senior Business Systems Analyst - Finance & Strategy @ anthropic (instance #1)
[2026-01-21T09:31:52.795Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-21T09:31:52.797Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-21T09:31:52.815Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:31:55.816Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T09:31:55.816Z] [BOT] 📍 [ROUTING] "Data Center Hardware Operations Lead" @ anthropic
[2026-01-21T09:31:55.816Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:31:56.079Z] [BOT] ✅ Posted message: Data Center Hardware Operations Lead @ anthropic in #tech-jobs
  ✅ Industry: Data Center Hardware Operations Lead @ anthropic
[2026-01-21T09:31:56.079Z] [BOT] 💾 Added channel posting: Data Center Hardware Operations Lead @ anthropic → category channel (1 total channels)
[2026-01-21T09:31:56.079Z] [BOT] 💾 BEFORE ARCHIVING: 3221 jobs in database
[2026-01-21T09:31:56.081Z] [BOT] ✅ No jobs to archive (all 3221 jobs within 7-day window)
[2026-01-21T09:31:56.100Z] [BOT] 💾 Saved posted_jobs.json: 3221 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:31:57.602Z] [BOT] 💾 Marked as posted: Data Center Hardware Operations Lead @ anthropic (instance #1)
[2026-01-21T09:31:57.602Z] [BOT] 💾 BEFORE ARCHIVING: 3222 jobs in database
[2026-01-21T09:31:57.605Z] [BOT] ✅ No jobs to archive (all 3222 jobs within 7-day window)
[2026-01-21T09:31:57.628Z] [BOT] 💾 Saved posted_jobs.json: 3222 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:31:57.628Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Database Technologies" @ ORG_dc7620eb
[2026-01-21T09:31:57.629Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:31:57.867Z] [BOT] ✅ Posted message: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb in #tech-jobs
[2026-01-21T09:31:57.867Z] [BOT] ✅ Industry: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb
[2026-01-21T09:31:57.868Z] [BOT] 💾 Added channel posting: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-21T09:31:57.868Z] [BOT] 💾 BEFORE ARCHIVING: 3223 jobs in database
[2026-01-21T09:31:57.870Z] [BOT] ✅ No jobs to archive (all 3223 jobs within 7-day window)
[2026-01-21T09:31:57.892Z] [BOT] 💾 Saved posted_jobs.json: 3223 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:31:59.394Z] [BOT] 💾 Marked as posted: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb (instance #1)
[2026-01-21T09:31:59.394Z] [BOT] 💾 BEFORE ARCHIVING: 3224 jobs in database
[2026-01-21T09:31:59.396Z] [BOT] ✅ No jobs to archive (all 3224 jobs within 7-day window)
[2026-01-21T09:31:59.418Z] [BOT] 💾 Saved posted_jobs.json: 3224 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:31:59.418Z] [BOT] 📍 [ROUTING] "Database Support Engineer (APAC)" @ supabase
[2026-01-21T09:31:59.418Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:31:59.591Z] [BOT] ✅ Posted message: Database Support Engineer (APAC) @ supabase in #tech-jobs
  ✅ Industry: Database Support Engineer (APAC) @ supabase
[2026-01-21T09:31:59.591Z] [BOT] 💾 Added channel posting: Database Support Engineer (APAC) @ supabase → category channel (1 total channels)
[2026-01-21T09:31:59.591Z] [BOT] 💾 BEFORE ARCHIVING: 3225 jobs in database
[2026-01-21T09:31:59.594Z] [BOT] ✅ No jobs to archive (all 3225 jobs within 7-day window)
[2026-01-21T09:31:59.615Z] [BOT] 💾 Saved posted_jobs.json: 3225 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:01.116Z] [BOT] 💾 Marked as posted: Database Support Engineer (APAC) @ supabase (instance #1)
[2026-01-21T09:32:01.116Z] [BOT] 💾 BEFORE ARCHIVING: 3226 jobs in database
[2026-01-21T09:32:01.118Z] [BOT] ✅ No jobs to archive (all 3226 jobs within 7-day window)
[2026-01-21T09:32:01.139Z] [BOT] 💾 Saved posted_jobs.json: 3226 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:01.140Z] [BOT] 📍 [ROUTING] "Database Support Engineer (EMEA)" @ supabase
[2026-01-21T09:32:01.140Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:32:01.545Z] [BOT] ✅ Posted message: Database Support Engineer (EMEA) @ supabase in #tech-jobs
[2026-01-21T09:32:01.545Z] [BOT] ✅ Industry: Database Support Engineer (EMEA) @ supabase
[2026-01-21T09:32:01.545Z] [BOT] 💾 Added channel posting: Database Support Engineer (EMEA) @ supabase → category channel (1 total channels)
[2026-01-21T09:32:01.545Z] [BOT] 💾 BEFORE ARCHIVING: 3227 jobs in database
[2026-01-21T09:32:01.548Z] [BOT] ✅ No jobs to archive (all 3227 jobs within 7-day window)
[2026-01-21T09:32:01.568Z] [BOT] 💾 Saved posted_jobs.json: 3227 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:03.070Z] [BOT] 💾 Marked as posted: Database Support Engineer (EMEA) @ supabase (instance #1)
[2026-01-21T09:32:03.070Z] [BOT] 💾 BEFORE ARCHIVING: 3228 jobs in database
[2026-01-21T09:32:03.072Z] [BOT] ✅ No jobs to archive (all 3228 jobs within 7-day window)
[2026-01-21T09:32:03.091Z] [BOT] 💾 Saved posted_jobs.json: 3228 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:03.091Z] [BOT] 📍 [ROUTING] "Database Support Engineer (AMER)" @ supabase
[2026-01-21T09:32:03.091Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:32:03.312Z] [BOT] ✅ Posted message: Database Support Engineer (AMER) @ supabase in #tech-jobs
  ✅ Industry: Database Support Engineer (AMER) @ supabase
[2026-01-21T09:32:03.313Z] [BOT] 💾 Added channel posting: Database Support Engineer (AMER) @ supabase → category channel (1 total channels)
[2026-01-21T09:32:03.313Z] [BOT] 💾 BEFORE ARCHIVING: 3229 jobs in database
[2026-01-21T09:32:03.315Z] [BOT] ✅ No jobs to archive (all 3229 jobs within 7-day window)
[2026-01-21T09:32:03.335Z] [BOT] 💾 Saved posted_jobs.json: 3229 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:04.837Z] [BOT] 💾 Marked as posted: Database Support Engineer (AMER) @ supabase (instance #1)
[2026-01-21T09:32:04.837Z] [BOT] 💾 BEFORE ARCHIVING: 3230 jobs in database
[2026-01-21T09:32:04.839Z] [BOT] ✅ No jobs to archive (all 3230 jobs within 7-day window)
[2026-01-21T09:32:04.860Z] [BOT] 💾 Saved posted_jobs.json: 3230 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:04.861Z] [BOT] 📍 [ROUTING] "Technical Program Manager, Enterprise Readiness" @ anthropic
[2026-01-21T09:32:04.861Z] [BOT] Category: TECH (matched: "project-management")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:32:05.201Z] [BOT] ✅ Posted message: Technical Program Manager, Enterprise Readiness @ anthropic in #tech-jobs
  ✅ Industry: Technical Program Manager, Enterprise Readiness @ anthropic
[2026-01-21T09:32:05.202Z] [BOT] 💾 Added channel posting: Technical Program Manager, Enterprise Readiness @ anthropic → category channel (1 total channels)
[2026-01-21T09:32:05.202Z] [BOT] 💾 BEFORE ARCHIVING: 3231 jobs in database
[2026-01-21T09:32:05.204Z] [BOT] ✅ No jobs to archive (all 3231 jobs within 7-day window)
[2026-01-21T09:32:05.223Z] [BOT] 💾 Saved posted_jobs.json: 3231 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:06.725Z] [BOT] 💾 Marked as posted: Technical Program Manager, Enterprise Readiness @ anthropic (instance #1)
[2026-01-21T09:32:06.725Z] [BOT] 💾 BEFORE ARCHIVING: 3232 jobs in database
[2026-01-21T09:32:06.727Z] [BOT] ✅ No jobs to archive (all 3232 jobs within 7-day window)
[2026-01-21T09:32:06.748Z] [BOT] 💾 Saved posted_jobs.json: 3232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:09.749Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T09:32:09.749Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b4800baa
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T09:32:09.988Z] [BOT] ✅ Posted message: Software Engineer @ ORG_b4800baa in #ai-jobs
[2026-01-21T09:32:09.988Z] [BOT] ✅ Industry: Software Engineer @ ORG_b4800baa
[2026-01-21T09:32:09.989Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_b4800baa → category channel (1 total channels)
[2026-01-21T09:32:09.989Z] [BOT] 💾 BEFORE ARCHIVING: 3233 jobs in database
[2026-01-21T09:32:09.991Z] [BOT] ✅ No jobs to archive (all 3233 jobs within 7-day window)
[2026-01-21T09:32:10.010Z] [BOT] 💾 Saved posted_jobs.json: 3233 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:11.512Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_b4800baa (instance #1)
[2026-01-21T09:32:11.512Z] [BOT] 💾 BEFORE ARCHIVING: 3234 jobs in database
[2026-01-21T09:32:11.514Z] [BOT] ✅ No jobs to archive (all 3234 jobs within 7-day window)
[2026-01-21T09:32:11.534Z] [BOT] 💾 Saved posted_jobs.json: 3234 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:11.534Z] [BOT] 📍 [ROUTING] "AI Applied Scientist" @ figma
[2026-01-21T09:32:11.534Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T09:32:11.870Z] [BOT] ✅ Posted message: AI Applied Scientist @ figma in #ai-jobs
  ✅ Industry: AI Applied Scientist @ figma
[2026-01-21T09:32:11.871Z] [BOT] 💾 Added channel posting: AI Applied Scientist @ figma → category channel (1 total channels)
[2026-01-21T09:32:11.871Z] [BOT] 💾 BEFORE ARCHIVING: 3235 jobs in database
[2026-01-21T09:32:11.873Z] [BOT] ✅ No jobs to archive (all 3235 jobs within 7-day window)
[2026-01-21T09:32:11.893Z] [BOT] 💾 Saved posted_jobs.json: 3235 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:13.395Z] [BOT] 💾 Marked as posted: AI Applied Scientist @ figma (instance #1)
[2026-01-21T09:32:13.395Z] [BOT] 💾 BEFORE ARCHIVING: 3236 jobs in database
[2026-01-21T09:32:13.397Z] [BOT] ✅ No jobs to archive (all 3236 jobs within 7-day window)
[2026-01-21T09:32:13.418Z] [BOT] 💾 Saved posted_jobs.json: 3236 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:32:16.418Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T09:32:16.418Z] [BOT] ⏭️  Skipping duplicate: JID_9f7e5676 (posted within 7 days)
[2026-01-21T09:32:16.419Z] [BOT] ⏭️  Skipping duplicate: JID_de199501 (posted within 7 days)
⏭️  Skipping duplicate: JID_682e1f65 (posted within 7 days)
[2026-01-21T09:32:16.419Z] [BOT] ⏭️  Skipping duplicate: JID_4c68b8d2 (posted within 7 days)
[2026-01-21T09:32:16.419Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-320582 (posted within 7 days)
[2026-01-21T09:32:16.419Z] [BOT] ⏭️  Skipping duplicate: JID_010025e8 (posted within 7 days)
[2026-01-21T09:32:16.419Z] [BOT] ⏭️  Skipping duplicate: JID_2c984041 (posted within 7 days)
[2026-01-21T09:32:16.420Z] [BOT] ⏭️  Skipping duplicate: JID_eba04086 (posted within 7 days)
[2026-01-21T09:32:16.420Z] [BOT] ⏭️  Skipping duplicate: JID_8634f5d2 (posted within 7 days)
[2026-01-21T09:32:16.420Z] [BOT] ⏭️  Skipping duplicate: JID_7b365bcf (posted within 7 days)
[2026-01-21T09:32:16.521Z] [BOT] ✅ Loaded pending queue: 2737 total (2725 pending, 12 enriched, 0 posted)
[2026-01-21T09:32:16.708Z] [BOT] ✅ Saved pending queue: 2737 total (2725 pending, 2 enriched, 10 posted)
[2026-01-21T09:32:16.708Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T09:32:16.772Z] [BOT] 📂 Loaded 5785 existing routing entries
[2026-01-21T09:32:16.848Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5795
[2026-01-21T09:32:16.848Z] [BOT] Timestamp: 2026-01-21T09:32:16.823Z
[2026-01-21T09:32:16.849Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T09:32:16.849Z] [BOT] Total attempts: 18
   Successful: 10
   Failed: 0
   Skipped: 8
[2026-01-21T09:32:16.849Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-21T09:32:16.849Z] [BOT] 1. #tech-jobs: 6 posts
     2. #finance-jobs: 2 posts
     3. #ai-jobs: 2 posts
[2026-01-21T09:32:16.849Z] [BOT] [STATS] Channel stats saved
[2026-01-21T09:32:18.878Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*