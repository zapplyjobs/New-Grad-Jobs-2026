# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T11:44:51.198Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T11:44:15.770Z] ========================================
[2026-01-21T11:44:15.772Z] Discord Bot Execution Log
[2026-01-21T11:44:15.772Z] Environment: GitHub Actions
[2026-01-21T11:44:15.772Z] Node Version: v20.19.6
[2026-01-21T11:44:15.772Z] ========================================
[2026-01-21T11:44:15.772Z] Environment Variables Check:
[2026-01-21T11:44:15.772Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T11:44:15.772Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.772Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T11:44:15.773Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T11:44:15.773Z] 
Multi-Channel Configuration:
[2026-01-21T11:44:15.773Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.773Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.773Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.773Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.773Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.773Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.773Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.773Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.773Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T11:44:15.773Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T11:44:15.774Z] 
Data Files Check:
[2026-01-21T11:44:15.774Z] .github/data/new_jobs.json: ✅ Exists (10 items, 90924 bytes)
[2026-01-21T11:44:15.787Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1923825 bytes)
[2026-01-21T11:44:15.787Z] 
========================================
[2026-01-21T11:44:15.787Z] Starting Enhanced Discord Bot...
[2026-01-21T11:44:15.787Z] ========================================
[2026-01-21T11:44:16.327Z] [BOT] ✅ Loaded V2 database: 3360 jobs
[2026-01-21T11:44:16.974Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T11:44:16.974Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T11:44:16.975Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T11:44:17.089Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer, Sandboxing (Systems) at anthropic
[2026-01-21T11:44:17.093Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T11:44:17.093Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T11:44:17.093Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T11:44:17.094Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-21T11:44:17.094Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-21T11:44:17.095Z] [BOT] - Senior Security Operations Engineer  @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T11:44:17.098Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-21T11:44:17.099Z] [BOT] 📍 [ROUTING] "Software Engineer, Sandboxing (Systems)" @ anthropic
[2026-01-21T11:44:17.099Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:44:17.103Z] [BOT ERROR] (node:3084) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T11:44:17.321Z] [BOT] ✅ Posted message: Software Engineer, Sandboxing (Systems) @ anthropic in #tech-jobs
[2026-01-21T11:44:17.321Z] [BOT] ✅ Industry: Software Engineer, Sandboxing (Systems) @ anthropic
[2026-01-21T11:44:17.322Z] [BOT] 💾 Added channel posting: Software Engineer, Sandboxing (Systems) @ anthropic → category channel (1 total channels)
[2026-01-21T11:44:17.322Z] [BOT] 💾 BEFORE ARCHIVING: 3361 jobs in database
[2026-01-21T11:44:17.325Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T11:44:17.329Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
[2026-01-21T11:44:17.330Z] [BOT] ✅ Archiving complete: 4 archived, 3357 active
[2026-01-21T11:44:17.354Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:18.855Z] [BOT] 💾 Marked as posted: Software Engineer, Sandboxing (Systems) @ anthropic (instance #1)
[2026-01-21T11:44:18.856Z] [BOT] 💾 BEFORE ARCHIVING: 3358 jobs in database
[2026-01-21T11:44:18.858Z] [BOT] ✅ No jobs to archive (all 3358 jobs within 7-day window)
[2026-01-21T11:44:18.878Z] [BOT] 💾 Saved posted_jobs.json: 3358 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:18.878Z] [BOT] 📍 [ROUTING] "Digital Services Coordinator 1" @ ORG_da52cfea Children's
   Category: TECH (default)
[2026-01-21T11:44:18.878Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T11:44:19.175Z] [BOT] ✅ Posted message: Digital Services Coordinator 1 @ ORG_da52cfea Children's in #tech-jobs
  ✅ Industry: Digital Services Coordinator 1 @ ORG_da52cfea Children's
[2026-01-21T11:44:19.176Z] [BOT] 💾 Added channel posting: Digital Services Coordinator 1 @ ORG_da52cfea Children's → category channel (1 total channels)
[2026-01-21T11:44:19.176Z] [BOT] 💾 BEFORE ARCHIVING: 3359 jobs in database
[2026-01-21T11:44:19.178Z] [BOT] ✅ No jobs to archive (all 3359 jobs within 7-day window)
[2026-01-21T11:44:19.200Z] [BOT] 💾 Saved posted_jobs.json: 3359 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:20.862Z] [BOT] ✅ Posted message: Digital Services Coordinator 1 @ ORG_da52cfea Children's in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T11:44:20.863Z] [BOT] 💾 Added channel posting: Digital Services Coordinator 1 @ ORG_da52cfea Children's → location channel (2 total channels)
[2026-01-21T11:44:20.863Z] [BOT] 💾 BEFORE ARCHIVING: 3359 jobs in database
[2026-01-21T11:44:20.865Z] [BOT] ✅ No jobs to archive (all 3359 jobs within 7-day window)
[2026-01-21T11:44:20.887Z] [BOT] 💾 Saved posted_jobs.json: 3359 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:22.388Z] [BOT] 💾 Marked as posted: Digital Services Coordinator 1 @ ORG_da52cfea Children's (instance #1)
[2026-01-21T11:44:22.388Z] [BOT] 💾 BEFORE ARCHIVING: 3360 jobs in database
[2026-01-21T11:44:22.390Z] [BOT] ✅ No jobs to archive (all 3360 jobs within 7-day window)
[2026-01-21T11:44:22.412Z] [BOT] 💾 Saved posted_jobs.json: 3360 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:22.412Z] [BOT] 📍 [ROUTING] "Cantonese Language Specialist" @ ORG_0f2833f9
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:44:22.860Z] [BOT] ✅ Posted message: Cantonese Language Specialist @ ORG_0f2833f9 in #tech-jobs
[2026-01-21T11:44:22.860Z] [BOT] ✅ Industry: Cantonese Language Specialist @ ORG_0f2833f9
[2026-01-21T11:44:22.861Z] [BOT] 💾 Added channel posting: Cantonese Language Specialist @ ORG_0f2833f9 → category channel (1 total channels)
[2026-01-21T11:44:22.861Z] [BOT] 💾 BEFORE ARCHIVING: 3361 jobs in database
[2026-01-21T11:44:22.863Z] [BOT] ✅ No jobs to archive (all 3361 jobs within 7-day window)
[2026-01-21T11:44:22.882Z] [BOT] 💾 Saved posted_jobs.json: 3361 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:24.633Z] [BOT] ✅ Posted message: Cantonese Language Specialist @ ORG_0f2833f9 in #JID_ead674af
[2026-01-21T11:44:24.634Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T11:44:24.634Z] [BOT] 💾 Added channel posting: Cantonese Language Specialist @ ORG_0f2833f9 → location channel (2 total channels)
[2026-01-21T11:44:24.634Z] [BOT] 💾 BEFORE ARCHIVING: 3361 jobs in database
[2026-01-21T11:44:24.636Z] [BOT] ✅ No jobs to archive (all 3361 jobs within 7-day window)
[2026-01-21T11:44:24.657Z] [BOT] 💾 Saved posted_jobs.json: 3361 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:26.158Z] [BOT] 💾 Marked as posted: Cantonese Language Specialist @ ORG_0f2833f9 (instance #1)
[2026-01-21T11:44:26.158Z] [BOT] 💾 BEFORE ARCHIVING: 3362 jobs in database
[2026-01-21T11:44:26.160Z] [BOT] ✅ No jobs to archive (all 3362 jobs within 7-day window)
[2026-01-21T11:44:26.184Z] [BOT] 💾 Saved posted_jobs.json: 3362 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:26.185Z] [BOT] 📍 [ROUTING] "Senior Security Operations Engineer " @ brex
[2026-01-21T11:44:26.185Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:44:26.402Z] [BOT] ✅ Posted message: Senior Security Operations Engineer  @ brex in #tech-jobs
  ✅ Industry: Senior Security Operations Engineer  @ brex
[2026-01-21T11:44:26.403Z] [BOT] 💾 Added channel posting: Senior Security Operations Engineer  @ brex → category channel (1 total channels)
[2026-01-21T11:44:26.403Z] [BOT] 💾 BEFORE ARCHIVING: 3363 jobs in database
[2026-01-21T11:44:26.405Z] [BOT] ✅ No jobs to archive (all 3363 jobs within 7-day window)
[2026-01-21T11:44:26.426Z] [BOT] 💾 Saved posted_jobs.json: 3363 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:27.927Z] [BOT] 💾 Marked as posted: Senior Security Operations Engineer  @ brex (instance #1)
[2026-01-21T11:44:27.928Z] [BOT] 💾 BEFORE ARCHIVING: 3364 jobs in database
[2026-01-21T11:44:27.930Z] [BOT] ✅ No jobs to archive (all 3364 jobs within 7-day window)
[2026-01-21T11:44:27.952Z] [BOT] 💾 Saved posted_jobs.json: 3364 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:27.952Z] [BOT] 💾 Marked as posted: Senior Security Operations Engineer  @ brex (instance #1)
💾 BEFORE ARCHIVING: 3365 jobs in database
[2026-01-21T11:44:27.955Z] [BOT] ✅ No jobs to archive (all 3365 jobs within 7-day window)
[2026-01-21T11:44:27.975Z] [BOT] 💾 Saved posted_jobs.json: 3365 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:27.976Z] [BOT] 💾 Marked as posted: Senior Security Operations Engineer  @ brex (instance #1)
[2026-01-21T11:44:27.976Z] [BOT] 💾 BEFORE ARCHIVING: 3366 jobs in database
[2026-01-21T11:44:27.978Z] [BOT] ✅ No jobs to archive (all 3366 jobs within 7-day window)
[2026-01-21T11:44:27.997Z] [BOT] 💾 Saved posted_jobs.json: 3366 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:30.999Z] [BOT] 📌 Posting 5 jobs to #ai-jobs
[2026-01-21T11:44:30.999Z] [BOT] 📍 [ROUTING] "Associate C++ Engineer" @ ORG_0f5d983d Trading Company
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T11:44:30.999Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T11:44:31.201Z] [BOT] ✅ Posted message: Associate C++ Engineer @ ORG_0f5d983d Trading Company in #ai-jobs
[2026-01-21T11:44:31.201Z] [BOT] ✅ Industry: Associate C++ Engineer @ ORG_0f5d983d Trading Company
[2026-01-21T11:44:31.202Z] [BOT] 💾 Added channel posting: Associate C++ Engineer @ ORG_0f5d983d Trading Company → category channel (1 total channels)
[2026-01-21T11:44:31.202Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-21T11:44:31.204Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-21T11:44:31.223Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:32.725Z] [BOT] 💾 Marked as posted: Associate C++ Engineer @ ORG_0f5d983d Trading Company (instance #1)
[2026-01-21T11:44:32.725Z] [BOT] 💾 BEFORE ARCHIVING: 3368 jobs in database
[2026-01-21T11:44:32.727Z] [BOT] ✅ No jobs to archive (all 3368 jobs within 7-day window)
[2026-01-21T11:44:32.748Z] [BOT] 💾 Saved posted_jobs.json: 3368 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:32.748Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - AI Driven Precision Oncology" @ ORG_9d38443e of Texas - Austin
[2026-01-21T11:44:32.748Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T11:44:32.957Z] [BOT] ✅ Posted message: Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin in #ai-jobs
  ✅ Industry: Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin
[2026-01-21T11:44:32.957Z] [BOT] 💾 Added channel posting: Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin → category channel (1 total channels)
[2026-01-21T11:44:32.957Z] [BOT] 💾 BEFORE ARCHIVING: 3369 jobs in database
[2026-01-21T11:44:32.959Z] [BOT] ✅ No jobs to archive (all 3369 jobs within 7-day window)
[2026-01-21T11:44:32.980Z] [BOT] 💾 Saved posted_jobs.json: 3369 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:34.481Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow - AI Driven Precision Oncology @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-21T11:44:34.481Z] [BOT] 💾 BEFORE ARCHIVING: 3370 jobs in database
[2026-01-21T11:44:34.483Z] [BOT] ✅ No jobs to archive (all 3370 jobs within 7-day window)
[2026-01-21T11:44:34.503Z] [BOT] 💾 Saved posted_jobs.json: 3370 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:34.503Z] [BOT] 📍 [ROUTING] "Applications Programmer" @ ORG_5132f94c
[2026-01-21T11:44:34.503Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T11:44:34.732Z] [BOT] ✅ Posted message: Applications Programmer @ ORG_5132f94c in #ai-jobs
  ✅ Industry: Applications Programmer @ ORG_5132f94c
[2026-01-21T11:44:34.732Z] [BOT] 💾 Added channel posting: Applications Programmer @ ORG_5132f94c → category channel (1 total channels)
[2026-01-21T11:44:34.732Z] [BOT] 💾 BEFORE ARCHIVING: 3371 jobs in database
[2026-01-21T11:44:34.734Z] [BOT] ✅ No jobs to archive (all 3371 jobs within 7-day window)
[2026-01-21T11:44:34.754Z] [BOT] 💾 Saved posted_jobs.json: 3371 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:36.255Z] [BOT] 💾 Marked as posted: Applications Programmer @ ORG_5132f94c (instance #1)
[2026-01-21T11:44:36.255Z] [BOT] 💾 BEFORE ARCHIVING: 3372 jobs in database
[2026-01-21T11:44:36.257Z] [BOT] ✅ No jobs to archive (all 3372 jobs within 7-day window)
[2026-01-21T11:44:36.279Z] [BOT] 💾 Saved posted_jobs.json: 3372 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:36.279Z] [BOT] 📍 [ROUTING] "Data Scientist 2 - Growth" @ ORG_534e1fbb
[2026-01-21T11:44:36.279Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T11:44:36.640Z] [BOT] ✅ Posted message: Data Scientist 2 - Growth @ ORG_534e1fbb in #ai-jobs
[2026-01-21T11:44:36.640Z] [BOT] ✅ Industry: Data Scientist 2 - Growth @ ORG_534e1fbb
[2026-01-21T11:44:36.641Z] [BOT] 💾 Added channel posting: Data Scientist 2 - Growth @ ORG_534e1fbb → category channel (1 total channels)
[2026-01-21T11:44:36.641Z] [BOT] 💾 BEFORE ARCHIVING: 3373 jobs in database
[2026-01-21T11:44:36.644Z] [BOT] ✅ No jobs to archive (all 3373 jobs within 7-day window)
[2026-01-21T11:44:36.662Z] [BOT] 💾 Saved posted_jobs.json: 3373 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:38.165Z] [BOT] 💾 Marked as posted: Data Scientist 2 - Growth @ ORG_534e1fbb (instance #1)
[2026-01-21T11:44:38.165Z] [BOT] 💾 BEFORE ARCHIVING: 3374 jobs in database
[2026-01-21T11:44:38.167Z] [BOT] ✅ No jobs to archive (all 3374 jobs within 7-day window)
[2026-01-21T11:44:38.189Z] [BOT] 💾 Saved posted_jobs.json: 3374 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:38.189Z] [BOT] 📍 [ROUTING] "Event Planner I - Hosted Events" @ gohighlevel
[2026-01-21T11:44:38.189Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T11:44:38.401Z] [BOT] ✅ Posted message: Event Planner I - Hosted Events @ gohighlevel in #ai-jobs
  ✅ Industry: Event Planner I - Hosted Events @ gohighlevel
[2026-01-21T11:44:38.402Z] [BOT] 💾 Added channel posting: Event Planner I - Hosted Events @ gohighlevel → category channel (1 total channels)
[2026-01-21T11:44:38.402Z] [BOT] 💾 BEFORE ARCHIVING: 3375 jobs in database
[2026-01-21T11:44:38.404Z] [BOT] ✅ No jobs to archive (all 3375 jobs within 7-day window)
[2026-01-21T11:44:38.425Z] [BOT] 💾 Saved posted_jobs.json: 3375 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:39.927Z] [BOT] 💾 Marked as posted: Event Planner I - Hosted Events @ gohighlevel (instance #1)
💾 BEFORE ARCHIVING: 3376 jobs in database
[2026-01-21T11:44:39.929Z] [BOT] ✅ No jobs to archive (all 3376 jobs within 7-day window)
[2026-01-21T11:44:39.951Z] [BOT] 💾 Saved posted_jobs.json: 3376 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:39.952Z] [BOT] 💾 Marked as posted: Event Planner I - Sponsored Events @ gohighlevel (instance #1)
[2026-01-21T11:44:39.952Z] [BOT] 💾 BEFORE ARCHIVING: 3377 jobs in database
[2026-01-21T11:44:39.954Z] [BOT] ✅ No jobs to archive (all 3377 jobs within 7-day window)
[2026-01-21T11:44:39.976Z] [BOT] 💾 Saved posted_jobs.json: 3377 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:42.977Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T11:44:42.977Z] [BOT] 📍 [ROUTING] "Americas Delivery Center Technology Experienced Analyst" @ ORG_cdfa0c05
[2026-01-21T11:44:42.977Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: finance-jobs (1462...4023)
[2026-01-21T11:44:43.311Z] [BOT] ✅ Posted message: Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05 in #finance-jobs
  ✅ Industry: Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05
[2026-01-21T11:44:43.312Z] [BOT] 💾 Added channel posting: Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05 → category channel (1 total channels)
[2026-01-21T11:44:43.312Z] [BOT] 💾 BEFORE ARCHIVING: 3378 jobs in database
[2026-01-21T11:44:43.314Z] [BOT] ✅ No jobs to archive (all 3378 jobs within 7-day window)
[2026-01-21T11:44:43.333Z] [BOT] 💾 Saved posted_jobs.json: 3378 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:44.835Z] [BOT] 💾 Marked as posted: Americas Delivery Center Technology Experienced Analyst @ ORG_cdfa0c05 (instance #1)
[2026-01-21T11:44:44.835Z] [BOT] 💾 BEFORE ARCHIVING: 3379 jobs in database
[2026-01-21T11:44:44.837Z] [BOT] ✅ No jobs to archive (all 3379 jobs within 7-day window)
[2026-01-21T11:44:44.857Z] [BOT] 💾 Saved posted_jobs.json: 3379 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:44:47.858Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T11:44:47.859Z] [BOT] ⏭️  Skipping duplicate: JID_59f7845f (posted within 7 days)
[2026-01-21T11:44:47.860Z] [BOT] ⏭️  Skipping duplicate: JID_0445e805 (posted within 7 days)
[2026-01-21T11:44:47.860Z] [BOT] ⏭️  Skipping duplicate: JID_18690460-oncology_r_00039870-1 (posted within 7 days)
[2026-01-21T11:44:47.860Z] [BOT] ⏭️  Skipping duplicate: JID_b2ef42ea-programmer_r59946 (posted within 7 days)
[2026-01-21T11:44:47.860Z] [BOT] ⏭️  Skipping duplicate: JID_fbc97492-external_career_site-JID_4ebae7a0-i_r0022409 (posted within 7 days)
[2026-01-21T11:44:47.860Z] [BOT] ⏭️  Skipping duplicate: JID_7a3179d1-analyst_jr-259121-1 (posted within 7 days)
[2026-01-21T11:44:47.861Z] [BOT] ⏭️  Skipping duplicate: JID_a9d7df3a (posted within 7 days)
[2026-01-21T11:44:47.861Z] [BOT] ⏭️  Skipping duplicate: JID_2883b741 (posted within 7 days)
[2026-01-21T11:44:47.861Z] [BOT] ⏭️  Skipping duplicate: JID_376daae5 (posted within 7 days)
[2026-01-21T11:44:47.861Z] [BOT] ⏭️  Skipping duplicate: JID_70cd8084 (posted within 7 days)
[2026-01-21T11:44:47.965Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[2026-01-21T11:44:48.156Z] [BOT] ✅ Saved pending queue: 2761 total (2741 pending, 10 enriched, 10 posted)
[2026-01-21T11:44:48.156Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T11:44:48.220Z] [BOT] 📂 Loaded 5855 existing routing entries
[2026-01-21T11:44:48.299Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5865
   Timestamp: 2026-01-21T11:44:48.272Z
[2026-01-21T11:44:48.300Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T11:44:48.300Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-21T11:44:48.300Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #ai-jobs: 5 posts
     2. #tech-jobs: 4 posts
     3. #JID_ead674af: 2 posts
     4. #finance-jobs: 1 posts
[2026-01-21T11:44:48.301Z] [BOT] [STATS] Channel stats saved
[2026-01-21T11:44:50.328Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3084) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*