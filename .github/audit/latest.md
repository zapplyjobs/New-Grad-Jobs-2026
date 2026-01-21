# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T09:16:11.469Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T09:15:27.341Z] ========================================
[2026-01-21T09:15:27.343Z] Discord Bot Execution Log
[2026-01-21T09:15:27.343Z] Environment: GitHub Actions
[2026-01-21T09:15:27.343Z] Node Version: v20.19.6
[2026-01-21T09:15:27.343Z] ========================================
[2026-01-21T09:15:27.343Z] Environment Variables Check:
[2026-01-21T09:15:27.343Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T09:15:27.343Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.343Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T09:15:27.343Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T09:15:27.343Z] 
Multi-Channel Configuration:
[2026-01-21T09:15:27.343Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.343Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.344Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.344Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.344Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.344Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.344Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.344Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.344Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T09:15:27.344Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T09:15:27.344Z] 
Data Files Check:
[2026-01-21T09:15:27.345Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76953 bytes)
[2026-01-21T09:15:27.358Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1820327 bytes)
[2026-01-21T09:15:27.358Z] 
========================================
[2026-01-21T09:15:27.358Z] Starting Enhanced Discord Bot...
[2026-01-21T09:15:27.358Z] ========================================
[2026-01-21T09:15:27.904Z] [BOT] ✅ Loaded V2 database: 3197 jobs
[2026-01-21T09:15:28.690Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T09:15:28.691Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T09:15:28.691Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T09:15:28.805Z] [BOT] ✅ Loaded pending queue: 2745 total (2725 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Data Scientist at Walmart
[2026-01-21T09:15:28.809Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T09:15:28.810Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T09:15:28.810Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T09:15:28.811Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T09:15:28.811Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T09:15:28.815Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T09:15:28.815Z] [BOT] 📍 [ROUTING] "Senior Data Scientist" @ ORG_3eab285c
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T09:15:28.815Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T09:15:28.832Z] [BOT ERROR] (node:2449) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T09:15:29.051Z] [BOT] ✅ Posted message: Senior Data Scientist @ ORG_3eab285c in #ai-jobs
  ✅ Industry: Senior Data Scientist @ ORG_3eab285c
[2026-01-21T09:15:29.052Z] [BOT] 💾 Added channel posting: Senior Data Scientist @ ORG_3eab285c → category channel (1 total channels)
[2026-01-21T09:15:29.052Z] [BOT] 💾 BEFORE ARCHIVING: 3198 jobs in database
[2026-01-21T09:15:29.054Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T09:15:29.060Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-21T09:15:29.060Z] [BOT] ✅ Archiving complete: 1 archived, 3197 active
[2026-01-21T09:15:29.087Z] [BOT] 💾 Saved posted_jobs.json: 3197 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:30.755Z] [BOT] ✅ Posted message: Senior Data Scientist @ ORG_3eab285c in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T09:15:30.756Z] [BOT] 💾 Added channel posting: Senior Data Scientist @ ORG_3eab285c → location channel (2 total channels)
[2026-01-21T09:15:30.756Z] [BOT] 💾 BEFORE ARCHIVING: 3197 jobs in database
[2026-01-21T09:15:30.758Z] [BOT] ✅ No jobs to archive (all 3197 jobs within 7-day window)
[2026-01-21T09:15:30.776Z] [BOT] 💾 Saved posted_jobs.json: 3197 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:32.278Z] [BOT] 💾 Marked as posted: Senior Data Scientist @ ORG_3eab285c (instance #1)
[2026-01-21T09:15:32.278Z] [BOT] 💾 BEFORE ARCHIVING: 3198 jobs in database
[2026-01-21T09:15:32.280Z] [BOT] ✅ No jobs to archive (all 3198 jobs within 7-day window)
[2026-01-21T09:15:32.301Z] [BOT] 💾 Saved posted_jobs.json: 3198 active jobs
[2026-01-21T09:15:32.301Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:32.301Z] [BOT] 📍 [ROUTING] "Analyst 1 - Full Stack" @ ORG_07b9fafa
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-21T09:15:32.507Z] [BOT] ✅ Posted message: Analyst 1 - Full Stack @ ORG_07b9fafa in #ai-jobs
  ✅ Industry: Analyst 1 - Full Stack @ ORG_07b9fafa
[2026-01-21T09:15:32.508Z] [BOT] 💾 Added channel posting: Analyst 1 - Full Stack @ ORG_07b9fafa → category channel (1 total channels)
[2026-01-21T09:15:32.508Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-21T09:15:32.510Z] [BOT] ✅ No jobs to archive (all 3199 jobs within 7-day window)
[2026-01-21T09:15:32.531Z] [BOT] 💾 Saved posted_jobs.json: 3199 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:34.033Z] [BOT] 💾 Marked as posted: Analyst 1 - Full Stack @ ORG_07b9fafa (instance #1)
[2026-01-21T09:15:34.033Z] [BOT] 💾 BEFORE ARCHIVING: 3200 jobs in database
[2026-01-21T09:15:34.035Z] [BOT] ✅ No jobs to archive (all 3200 jobs within 7-day window)
[2026-01-21T09:15:34.055Z] [BOT] 💾 Saved posted_jobs.json: 3200 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:37.057Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-21T09:15:37.058Z] [BOT] 📍 [ROUTING] "NASCAR Cup Track Support Engineer – Entry Level" @ ORG_cdb83ff1
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:15:37.311Z] [BOT] ✅ Posted message: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 in #tech-jobs
  ✅ Industry: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1
[2026-01-21T09:15:37.312Z] [BOT] 💾 Added channel posting: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 → category channel (1 total channels)
[2026-01-21T09:15:37.312Z] [BOT] 💾 BEFORE ARCHIVING: 3201 jobs in database
[2026-01-21T09:15:37.314Z] [BOT] ✅ No jobs to archive (all 3201 jobs within 7-day window)
[2026-01-21T09:15:37.337Z] [BOT] 💾 Saved posted_jobs.json: 3201 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:39.119Z] [BOT] ✅ Posted message: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 in #JID_ead674af
[2026-01-21T09:15:39.119Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T09:15:39.120Z] [BOT] 💾 Added channel posting: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 → location channel (2 total channels)
[2026-01-21T09:15:39.120Z] [BOT] 💾 BEFORE ARCHIVING: 3201 jobs in database
[2026-01-21T09:15:39.123Z] [BOT] ✅ No jobs to archive (all 3201 jobs within 7-day window)
[2026-01-21T09:15:39.145Z] [BOT] 💾 Saved posted_jobs.json: 3201 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:40.648Z] [BOT] 💾 Marked as posted: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 (instance #1)
[2026-01-21T09:15:40.648Z] [BOT] 💾 BEFORE ARCHIVING: 3202 jobs in database
[2026-01-21T09:15:40.650Z] [BOT] ✅ No jobs to archive (all 3202 jobs within 7-day window)
[2026-01-21T09:15:40.671Z] [BOT] 💾 Saved posted_jobs.json: 3202 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:40.671Z] [BOT] 📍 [ROUTING] "Math Major Software Developer" @ Auto-Owners Insurance
   Category: TECH (matched: "software")
[2026-01-21T09:15:40.671Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T09:15:40.994Z] [BOT] ✅ Posted message: Math Major Software Developer @ Auto-Owners Insurance in #tech-jobs
  ✅ Industry: Math Major Software Developer @ Auto-Owners Insurance
[2026-01-21T09:15:40.995Z] [BOT] 💾 Added channel posting: Math Major Software Developer @ Auto-Owners Insurance → category channel (1 total channels)
[2026-01-21T09:15:40.995Z] [BOT] 💾 BEFORE ARCHIVING: 3203 jobs in database
[2026-01-21T09:15:40.997Z] [BOT] ✅ No jobs to archive (all 3203 jobs within 7-day window)
[2026-01-21T09:15:41.018Z] [BOT] 💾 Saved posted_jobs.json: 3203 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:42.783Z] [BOT] ✅ Posted message: Math Major Software Developer @ Auto-Owners Insurance in #JID_ead674af
[2026-01-21T09:15:42.783Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T09:15:42.783Z] [BOT] 💾 Added channel posting: Math Major Software Developer @ Auto-Owners Insurance → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3203 jobs in database
[2026-01-21T09:15:42.785Z] [BOT] ✅ No jobs to archive (all 3203 jobs within 7-day window)
[2026-01-21T09:15:42.806Z] [BOT] 💾 Saved posted_jobs.json: 3203 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:44.308Z] [BOT] 💾 Marked as posted: Math Major Software Developer @ Auto-Owners Insurance (instance #1)
[2026-01-21T09:15:44.308Z] [BOT] 💾 BEFORE ARCHIVING: 3204 jobs in database
[2026-01-21T09:15:44.310Z] [BOT] ✅ No jobs to archive (all 3204 jobs within 7-day window)
[2026-01-21T09:15:44.329Z] [BOT] 💾 Saved posted_jobs.json: 3204 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:44.329Z] [BOT] 📍 [ROUTING] "Entry-Level Software Developer" @ ORG_d51736fa
[2026-01-21T09:15:44.329Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:15:44.487Z] [BOT] ✅ Posted message: Entry-Level Software Developer @ ORG_d51736fa in #tech-jobs
  ✅ Industry: Entry-Level Software Developer @ ORG_d51736fa
[2026-01-21T09:15:44.488Z] [BOT] 💾 Added channel posting: Entry-Level Software Developer @ ORG_d51736fa → category channel (1 total channels)
[2026-01-21T09:15:44.488Z] [BOT] 💾 BEFORE ARCHIVING: 3205 jobs in database
[2026-01-21T09:15:44.490Z] [BOT] ✅ No jobs to archive (all 3205 jobs within 7-day window)
[2026-01-21T09:15:44.508Z] [BOT] 💾 Saved posted_jobs.json: 3205 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:46.156Z] [BOT] ✅ Posted message: Entry-Level Software Developer @ ORG_d51736fa in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T09:15:46.156Z] [BOT] 💾 Added channel posting: Entry-Level Software Developer @ ORG_d51736fa → location channel (2 total channels)
[2026-01-21T09:15:46.156Z] [BOT] 💾 BEFORE ARCHIVING: 3205 jobs in database
[2026-01-21T09:15:46.158Z] [BOT] ✅ No jobs to archive (all 3205 jobs within 7-day window)
[2026-01-21T09:15:46.178Z] [BOT] 💾 Saved posted_jobs.json: 3205 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:47.680Z] [BOT] 💾 Marked as posted: Entry-Level Software Developer @ ORG_d51736fa (instance #1)
[2026-01-21T09:15:47.680Z] [BOT] 💾 BEFORE ARCHIVING: 3206 jobs in database
[2026-01-21T09:15:47.682Z] [BOT] ✅ No jobs to archive (all 3206 jobs within 7-day window)
[2026-01-21T09:15:47.701Z] [BOT] 💾 Saved posted_jobs.json: 3206 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:47.701Z] [BOT] 📍 [ROUTING] "Data Operator" @ ORG_2bc58fcc League Baseball
   Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:15:48.062Z] [BOT] ✅ Posted message: Data Operator @ ORG_2bc58fcc League Baseball in #tech-jobs
[2026-01-21T09:15:48.062Z] [BOT] ✅ Industry: Data Operator @ ORG_2bc58fcc League Baseball
[2026-01-21T09:15:48.062Z] [BOT] 💾 Added channel posting: Data Operator @ ORG_2bc58fcc League Baseball → category channel (1 total channels)
[2026-01-21T09:15:48.062Z] [BOT] 💾 BEFORE ARCHIVING: 3207 jobs in database
[2026-01-21T09:15:48.064Z] [BOT] ✅ No jobs to archive (all 3207 jobs within 7-day window)
[2026-01-21T09:15:48.084Z] [BOT] 💾 Saved posted_jobs.json: 3207 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:49.741Z] [BOT] ✅ Posted message: Data Operator @ ORG_2bc58fcc League Baseball in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T09:15:49.741Z] [BOT] 💾 Added channel posting: Data Operator @ ORG_2bc58fcc League Baseball → location channel (2 total channels)
[2026-01-21T09:15:49.741Z] [BOT] 💾 BEFORE ARCHIVING: 3207 jobs in database
[2026-01-21T09:15:49.743Z] [BOT] ✅ No jobs to archive (all 3207 jobs within 7-day window)
[2026-01-21T09:15:49.763Z] [BOT] 💾 Saved posted_jobs.json: 3207 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:51.265Z] [BOT] 💾 Marked as posted: Data Operator @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-21T09:15:51.265Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-21T09:15:51.268Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-21T09:15:51.286Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:51.287Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Scm" @ ORG_864269d2 Health System
[2026-01-21T09:15:51.287Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:15:51.475Z] [BOT] ✅ Posted message: Software Engineer 1 - Scm @ ORG_864269d2 Health System in #tech-jobs
[2026-01-21T09:15:51.475Z] [BOT] ✅ Industry: Software Engineer 1 - Scm @ ORG_864269d2 Health System
[2026-01-21T09:15:51.476Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Scm @ ORG_864269d2 Health System → category channel (1 total channels)
[2026-01-21T09:15:51.476Z] [BOT] 💾 BEFORE ARCHIVING: 3209 jobs in database
[2026-01-21T09:15:51.478Z] [BOT] ✅ No jobs to archive (all 3209 jobs within 7-day window)
[2026-01-21T09:15:51.498Z] [BOT] 💾 Saved posted_jobs.json: 3209 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:53.000Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Scm @ ORG_864269d2 Health System (instance #1)
[2026-01-21T09:15:53.000Z] [BOT] 💾 BEFORE ARCHIVING: 3210 jobs in database
[2026-01-21T09:15:53.003Z] [BOT] ✅ No jobs to archive (all 3210 jobs within 7-day window)
[2026-01-21T09:15:53.022Z] [BOT] 💾 Saved posted_jobs.json: 3210 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:53.023Z] [BOT] 📍 [ROUTING] "User Experience Researcher" @ anthropic
[2026-01-21T09:15:53.023Z] [BOT] Category: TECH (matched: "pm")
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:15:53.217Z] [BOT] ✅ Posted message: User Experience Researcher @ anthropic in #tech-jobs
  ✅ Industry: User Experience Researcher @ anthropic
[2026-01-21T09:15:53.218Z] [BOT] 💾 Added channel posting: User Experience Researcher @ anthropic → category channel (1 total channels)
[2026-01-21T09:15:53.218Z] [BOT] 💾 BEFORE ARCHIVING: 3211 jobs in database
[2026-01-21T09:15:53.220Z] [BOT] ✅ No jobs to archive (all 3211 jobs within 7-day window)
[2026-01-21T09:15:53.241Z] [BOT] 💾 Saved posted_jobs.json: 3211 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:54.743Z] [BOT] 💾 Marked as posted: User Experience Researcher @ anthropic (instance #1)
[2026-01-21T09:15:54.743Z] [BOT] 💾 BEFORE ARCHIVING: 3212 jobs in database
[2026-01-21T09:15:54.745Z] [BOT] ✅ No jobs to archive (all 3212 jobs within 7-day window)
[2026-01-21T09:15:54.766Z] [BOT] 💾 Saved posted_jobs.json: 3212 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:54.766Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (SLED)" @ datadog
[2026-01-21T09:15:54.767Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T09:15:54.956Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #tech-jobs
  ✅ Industry: Strategic Account Executive (SLED) @ datadog
[2026-01-21T09:15:54.957Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → category channel (1 total channels)
[2026-01-21T09:15:54.957Z] [BOT] 💾 BEFORE ARCHIVING: 3213 jobs in database
[2026-01-21T09:15:54.959Z] [BOT] ✅ No jobs to archive (all 3213 jobs within 7-day window)
[2026-01-21T09:15:54.977Z] [BOT] 💾 Saved posted_jobs.json: 3213 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:56.710Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T09:15:56.711Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → location channel (2 total channels)
[2026-01-21T09:15:56.711Z] [BOT] 💾 BEFORE ARCHIVING: 3213 jobs in database
[2026-01-21T09:15:56.713Z] [BOT] ✅ No jobs to archive (all 3213 jobs within 7-day window)
[2026-01-21T09:15:56.732Z] [BOT] 💾 Saved posted_jobs.json: 3213 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:15:58.233Z] [BOT] 💾 Marked as posted: Strategic Account Executive (SLED) @ datadog (instance #1)
[2026-01-21T09:15:58.233Z] [BOT] 💾 BEFORE ARCHIVING: 3214 jobs in database
[2026-01-21T09:15:58.235Z] [BOT] ✅ No jobs to archive (all 3214 jobs within 7-day window)
[2026-01-21T09:15:58.254Z] [BOT] 💾 Saved posted_jobs.json: 3214 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:16:01.255Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T09:16:01.255Z] [BOT] 📍 [ROUTING] "Systems Analyst" @ ORG_56d3e805 Computer
   Category: FINANCE (matched: "investment")
   Channel: finance-jobs (1462...4023)
[2026-01-21T09:16:01.839Z] [BOT] ✅ Posted message: Systems Analyst @ ORG_56d3e805 Computer in #finance-jobs
  ✅ Industry: Systems Analyst @ ORG_56d3e805 Computer
[2026-01-21T09:16:01.840Z] [BOT] 💾 Added channel posting: Systems Analyst @ ORG_56d3e805 Computer → category channel (1 total channels)
[2026-01-21T09:16:01.840Z] [BOT] 💾 BEFORE ARCHIVING: 3215 jobs in database
[2026-01-21T09:16:01.842Z] [BOT] ✅ No jobs to archive (all 3215 jobs within 7-day window)
[2026-01-21T09:16:01.862Z] [BOT] 💾 Saved posted_jobs.json: 3215 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:16:03.550Z] [BOT] ✅ Posted message: Systems Analyst @ ORG_56d3e805 Computer in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T09:16:03.550Z] [BOT] 💾 Added channel posting: Systems Analyst @ ORG_56d3e805 Computer → location channel (2 total channels)
[2026-01-21T09:16:03.551Z] [BOT] 💾 BEFORE ARCHIVING: 3215 jobs in database
[2026-01-21T09:16:03.553Z] [BOT] ✅ No jobs to archive (all 3215 jobs within 7-day window)
[2026-01-21T09:16:03.571Z] [BOT] 💾 Saved posted_jobs.json: 3215 active jobs
[2026-01-21T09:16:03.572Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T09:16:05.074Z] [BOT] 💾 Marked as posted: Systems Analyst @ ORG_56d3e805 Computer (instance #1)
[2026-01-21T09:16:05.074Z] [BOT] 💾 BEFORE ARCHIVING: 3216 jobs in database
[2026-01-21T09:16:05.076Z] [BOT] ✅ No jobs to archive (all 3216 jobs within 7-day window)
[2026-01-21T09:16:05.096Z] [BOT] 💾 Saved posted_jobs.json: 3216 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T09:16:08.097Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T09:16:08.098Z] [BOT] ⏭️  Skipping duplicate: JID_d30cfa45-scientist_r-2343767 (posted within 7 days)
[2026-01-21T09:16:08.098Z] [BOT] ⏭️  Skipping duplicate: JID_dbde4e7f-level_r43333 (posted within 7 days)
⏭️  Skipping duplicate: JID_e8b796c3-developer_r_1008 (posted within 7 days)
⏭️  Skipping duplicate: JID_6e06cb04 (posted within 7 days)
⏭️  Skipping duplicate: JID_1e13ef53-_r-00172273 (posted within 7 days)
[2026-01-21T09:16:08.099Z] [BOT] ⏭️  Skipping duplicate: JID_99edcb1e (posted within 7 days)
[2026-01-21T09:16:08.099Z] [BOT] ⏭️  Skipping duplicate: JID_283bdcfc-analyst_r0038516-3 (posted within 7 days)
[2026-01-21T09:16:08.099Z] [BOT] ⏭️  Skipping duplicate: JID_3c900ad2-scm_jr65804 (posted within 7 days)
[2026-01-21T09:16:08.099Z] [BOT] ⏭️  Skipping duplicate: JID_cff6d925 (posted within 7 days)
[2026-01-21T09:16:08.099Z] [BOT] ⏭️  Skipping duplicate: JID_5a2e3f0d (posted within 7 days)
[2026-01-21T09:16:08.205Z] [BOT] ✅ Loaded pending queue: 2745 total (2725 pending, 20 enriched, 0 posted)
[2026-01-21T09:16:08.390Z] [BOT] ✅ Saved pending queue: 2745 total (2725 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T09:16:08.458Z] [BOT] 📂 Loaded 5775 existing routing entries
[2026-01-21T09:16:08.534Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5785
   Timestamp: 2026-01-21T09:16:08.510Z
[2026-01-21T09:16:08.535Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T09:16:08.535Z] [BOT] Total attempts: 17
   Successful: 17
   Failed: 0
   Skipped: 0
[2026-01-21T09:16:08.535Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 4
   Top channels:
[2026-01-21T09:16:08.535Z] [BOT] 1. #JID_ead674af: 7 posts
     2. #tech-jobs: 7 posts
     3. #ai-jobs: 2 posts
     4. #finance-jobs: 1 posts
[2026-01-21T09:16:08.535Z] [BOT] [STATS] Channel stats saved
[2026-01-21T09:16:10.561Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2449) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*