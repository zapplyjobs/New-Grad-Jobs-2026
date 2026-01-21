# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T19:18:26.460Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T19:17:47.435Z] ========================================
[2026-01-21T19:17:47.437Z] Discord Bot Execution Log
[2026-01-21T19:17:47.437Z] Environment: GitHub Actions
[2026-01-21T19:17:47.437Z] Node Version: v20.19.6
[2026-01-21T19:17:47.437Z] ========================================
[2026-01-21T19:17:47.437Z] Environment Variables Check:
[2026-01-21T19:17:47.437Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T19:17:47.437Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T19:17:47.438Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T19:17:47.438Z] 
Multi-Channel Configuration:
[2026-01-21T19:17:47.438Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T19:17:47.438Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T19:17:47.439Z] 
Data Files Check:
[2026-01-21T19:17:47.439Z] .github/data/new_jobs.json: ✅ Exists (10 items, 90138 bytes)
[2026-01-21T19:17:47.455Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2144626 bytes)
[2026-01-21T19:17:47.455Z] 
========================================
[2026-01-21T19:17:47.455Z] Starting Enhanced Discord Bot...
[2026-01-21T19:17:47.455Z] ========================================
[2026-01-21T19:17:48.016Z] [BOT] ✅ Loaded V2 database: 3731 jobs
[2026-01-21T19:17:48.529Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T19:17:48.529Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T19:17:48.529Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T19:17:48.657Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Appointee - Energy Systems at Argonne National Laboratory
[2026-01-21T19:17:48.661Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T19:17:48.662Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T19:17:48.662Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T19:17:48.663Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T19:17:48.663Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T19:17:48.667Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-21T19:17:48.667Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Energy Systems" @ ORG_a867f63f National Laboratory
[2026-01-21T19:17:48.667Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:17:48.685Z] [BOT ERROR] (node:2889) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T19:17:50.899Z] [BOT] ✅ Posted message: Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory in #tech-jobs
[2026-01-21T19:17:50.899Z] [BOT] ✅ Industry: Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory
[2026-01-21T19:17:50.900Z] [BOT] 💾 Added channel posting: Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory → category channel (1 total channels)
[2026-01-21T19:17:50.901Z] [BOT] 💾 BEFORE ARCHIVING: 3732 jobs in database
[2026-01-21T19:17:50.904Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T19:17:50.910Z] [BOT] 📦 Archived 15 jobs to 2026-01.json (15 total in archive)
✅ Archiving complete: 15 archived, 3717 active
[2026-01-21T19:17:50.937Z] [BOT] 💾 Saved posted_jobs.json: 3717 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:17:52.439Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Energy Systems @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-21T19:17:52.440Z] [BOT] 💾 BEFORE ARCHIVING: 3718 jobs in database
[2026-01-21T19:17:52.442Z] [BOT] ✅ No jobs to archive (all 3718 jobs within 7-day window)
[2026-01-21T19:17:52.466Z] [BOT] 💾 Saved posted_jobs.json: 3718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:17:52.466Z] [BOT] 📍 [ROUTING] "Engineering Support 1" @ ORG_93e4a7ef Water
[2026-01-21T19:17:52.466Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:17:52.808Z] [BOT] ✅ Posted message: Engineering Support 1 @ ORG_93e4a7ef Water in #tech-jobs
[2026-01-21T19:17:52.808Z] [BOT] ✅ Industry: Engineering Support 1 @ ORG_93e4a7ef Water
[2026-01-21T19:17:52.809Z] [BOT] 💾 Added channel posting: Engineering Support 1 @ ORG_93e4a7ef Water → category channel (1 total channels)
[2026-01-21T19:17:52.809Z] [BOT] 💾 BEFORE ARCHIVING: 3719 jobs in database
[2026-01-21T19:17:52.812Z] [BOT] ✅ No jobs to archive (all 3719 jobs within 7-day window)
[2026-01-21T19:17:52.838Z] [BOT] 💾 Saved posted_jobs.json: 3719 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:17:54.538Z] [BOT] ✅ Posted message: Engineering Support 1 @ ORG_93e4a7ef Water in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T19:17:54.539Z] [BOT] 💾 Added channel posting: Engineering Support 1 @ ORG_93e4a7ef Water → location channel (2 total channels)
[2026-01-21T19:17:54.539Z] [BOT] 💾 BEFORE ARCHIVING: 3719 jobs in database
[2026-01-21T19:17:54.542Z] [BOT] ✅ No jobs to archive (all 3719 jobs within 7-day window)
[2026-01-21T19:17:54.569Z] [BOT] 💾 Saved posted_jobs.json: 3719 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:17:56.071Z] [BOT] 💾 Marked as posted: Engineering Support 1 @ ORG_93e4a7ef Water (instance #1)
[2026-01-21T19:17:56.071Z] [BOT] 💾 BEFORE ARCHIVING: 3720 jobs in database
[2026-01-21T19:17:56.074Z] [BOT] ✅ No jobs to archive (all 3720 jobs within 7-day window)
[2026-01-21T19:17:56.097Z] [BOT] 💾 Saved posted_jobs.json: 3720 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:17:56.097Z] [BOT] 📍 [ROUTING] "Lederman Fellow" @ ORG_af10f363
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:17:56.291Z] [BOT] ✅ Posted message: Lederman Fellow @ ORG_af10f363 in #tech-jobs
  ✅ Industry: Lederman Fellow @ ORG_af10f363
[2026-01-21T19:17:56.292Z] [BOT] 💾 Added channel posting: Lederman Fellow @ ORG_af10f363 → category channel (1 total channels)
[2026-01-21T19:17:56.292Z] [BOT] 💾 BEFORE ARCHIVING: 3721 jobs in database
[2026-01-21T19:17:56.294Z] [BOT] ✅ No jobs to archive (all 3721 jobs within 7-day window)
[2026-01-21T19:17:56.319Z] [BOT] 💾 Saved posted_jobs.json: 3721 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:17:57.821Z] [BOT] 💾 Marked as posted: Lederman Fellow @ ORG_af10f363 (instance #1)
[2026-01-21T19:17:57.822Z] [BOT] 💾 BEFORE ARCHIVING: 3722 jobs in database
[2026-01-21T19:17:57.825Z] [BOT] ✅ No jobs to archive (all 3722 jobs within 7-day window)
[2026-01-21T19:17:57.856Z] [BOT] 💾 Saved posted_jobs.json: 3722 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:17:57.856Z] [BOT] 📍 [ROUTING] "Analyst 1" @ ORG_742553d6 Entertainment
[2026-01-21T19:17:57.856Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:17:58.036Z] [BOT] ✅ Posted message: Analyst 1 @ ORG_742553d6 Entertainment in #tech-jobs
  ✅ Industry: Analyst 1 @ ORG_742553d6 Entertainment
[2026-01-21T19:17:58.038Z] [BOT] 💾 Added channel posting: Analyst 1 @ ORG_742553d6 Entertainment → category channel (1 total channels)
[2026-01-21T19:17:58.038Z] [BOT] 💾 BEFORE ARCHIVING: 3723 jobs in database
[2026-01-21T19:17:58.041Z] [BOT] ✅ No jobs to archive (all 3723 jobs within 7-day window)
[2026-01-21T19:17:58.071Z] [BOT] 💾 Saved posted_jobs.json: 3723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:17:59.723Z] [BOT] ✅ Posted message: Analyst 1 @ ORG_742553d6 Entertainment in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T19:17:59.724Z] [BOT] 💾 Added channel posting: Analyst 1 @ ORG_742553d6 Entertainment → location channel (2 total channels)
[2026-01-21T19:17:59.724Z] [BOT] 💾 BEFORE ARCHIVING: 3723 jobs in database
[2026-01-21T19:17:59.727Z] [BOT] ✅ No jobs to archive (all 3723 jobs within 7-day window)
[2026-01-21T19:17:59.757Z] [BOT] 💾 Saved posted_jobs.json: 3723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:01.259Z] [BOT] 💾 Marked as posted: Analyst 1 @ ORG_742553d6 Entertainment (instance #1)
[2026-01-21T19:18:01.259Z] [BOT] 💾 BEFORE ARCHIVING: 3724 jobs in database
[2026-01-21T19:18:01.262Z] [BOT] ✅ No jobs to archive (all 3724 jobs within 7-day window)
[2026-01-21T19:18:01.287Z] [BOT] 💾 Saved posted_jobs.json: 3724 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:01.288Z] [BOT] 📍 [ROUTING] "Entry Level Graphics Software Developer" @ ORG_d51736fa
   Category: TECH (matched: "software")
[2026-01-21T19:18:01.288Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T19:18:01.534Z] [BOT] ✅ Posted message: Entry Level Graphics Software Developer @ ORG_d51736fa in #tech-jobs
[2026-01-21T19:18:01.535Z] [BOT] ✅ Industry: Entry Level Graphics Software Developer @ ORG_d51736fa
[2026-01-21T19:18:01.536Z] [BOT] 💾 Added channel posting: Entry Level Graphics Software Developer @ ORG_d51736fa → category channel (1 total channels)
[2026-01-21T19:18:01.536Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T19:18:01.538Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T19:18:01.565Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:04.631Z] [BOT] ✅ Posted message: Entry Level Graphics Software Developer @ ORG_d51736fa in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T19:18:04.632Z] [BOT] 💾 Added channel posting: Entry Level Graphics Software Developer @ ORG_d51736fa → location channel (2 total channels)
[2026-01-21T19:18:04.632Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T19:18:04.634Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T19:18:04.658Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:06.161Z] [BOT] 💾 Marked as posted: Entry Level Graphics Software Developer @ ORG_d51736fa (instance #1)
💾 BEFORE ARCHIVING: 3726 jobs in database
[2026-01-21T19:18:06.164Z] [BOT] ✅ No jobs to archive (all 3726 jobs within 7-day window)
[2026-01-21T19:18:06.192Z] [BOT] 💾 Saved posted_jobs.json: 3726 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:06.193Z] [BOT] 📍 [ROUTING] "Security Engineer, Operating Systems" @ anthropic
[2026-01-21T19:18:06.193Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:18:06.400Z] [BOT] ✅ Posted message: Security Engineer, Operating Systems @ anthropic in #tech-jobs
  ✅ Industry: Security Engineer, Operating Systems @ anthropic
[2026-01-21T19:18:06.401Z] [BOT] 💾 Added channel posting: Security Engineer, Operating Systems @ anthropic → category channel (1 total channels)
[2026-01-21T19:18:06.401Z] [BOT] 💾 BEFORE ARCHIVING: 3727 jobs in database
[2026-01-21T19:18:06.404Z] [BOT] ✅ No jobs to archive (all 3727 jobs within 7-day window)
[2026-01-21T19:18:06.430Z] [BOT] 💾 Saved posted_jobs.json: 3727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:07.932Z] [BOT] 💾 Marked as posted: Security Engineer, Operating Systems @ anthropic (instance #1)
[2026-01-21T19:18:07.932Z] [BOT] 💾 BEFORE ARCHIVING: 3728 jobs in database
[2026-01-21T19:18:07.935Z] [BOT] ✅ No jobs to archive (all 3728 jobs within 7-day window)
[2026-01-21T19:18:07.959Z] [BOT] 💾 Saved posted_jobs.json: 3728 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:07.960Z] [BOT] 📍 [ROUTING] "Systems Integrity Security Architect" @ anthropic
[2026-01-21T19:18:07.960Z] [BOT] Category: TECH (matched: "security")
   Channel: tech-jobs (1462...4987)
[2026-01-21T19:18:08.159Z] [BOT] ✅ Posted message: Systems Integrity Security Architect @ anthropic in #tech-jobs
  ✅ Industry: Systems Integrity Security Architect @ anthropic
[2026-01-21T19:18:08.159Z] [BOT] 💾 Added channel posting: Systems Integrity Security Architect @ anthropic → category channel (1 total channels)
[2026-01-21T19:18:08.160Z] [BOT] 💾 BEFORE ARCHIVING: 3729 jobs in database
[2026-01-21T19:18:08.162Z] [BOT] ✅ No jobs to archive (all 3729 jobs within 7-day window)
[2026-01-21T19:18:08.187Z] [BOT] 💾 Saved posted_jobs.json: 3729 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:09.688Z] [BOT] 💾 Marked as posted: Systems Integrity Security Architect @ anthropic (instance #1)
[2026-01-21T19:18:09.689Z] [BOT] 💾 BEFORE ARCHIVING: 3730 jobs in database
[2026-01-21T19:18:09.691Z] [BOT] ✅ No jobs to archive (all 3730 jobs within 7-day window)
[2026-01-21T19:18:09.716Z] [BOT] 💾 Saved posted_jobs.json: 3730 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:12.717Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T19:18:12.717Z] [BOT] 📍 [ROUTING] "Software Engineer - Simulators" @ ORG_cdec6f53
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T19:18:12.718Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T19:18:12.958Z] [BOT] ✅ Posted message: Software Engineer - Simulators @ ORG_cdec6f53 in #ai-jobs
[2026-01-21T19:18:12.958Z] [BOT] ✅ Industry: Software Engineer - Simulators @ ORG_cdec6f53
[2026-01-21T19:18:12.959Z] [BOT] 💾 Added channel posting: Software Engineer - Simulators @ ORG_cdec6f53 → category channel (1 total channels)
[2026-01-21T19:18:12.959Z] [BOT] 💾 BEFORE ARCHIVING: 3731 jobs in database
[2026-01-21T19:18:12.962Z] [BOT] ✅ No jobs to archive (all 3731 jobs within 7-day window)
[2026-01-21T19:18:12.985Z] [BOT] 💾 Saved posted_jobs.json: 3731 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:14.487Z] [BOT] 💾 Marked as posted: Software Engineer - Simulators @ ORG_cdec6f53 (instance #1)
[2026-01-21T19:18:14.487Z] [BOT] 💾 BEFORE ARCHIVING: 3732 jobs in database
[2026-01-21T19:18:14.490Z] [BOT] ✅ No jobs to archive (all 3732 jobs within 7-day window)
[2026-01-21T19:18:14.514Z] [BOT] 💾 Saved posted_jobs.json: 3732 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:14.514Z] [BOT] 📍 [ROUTING] "Senior – Data Scientist" @ ORG_3eab285c
[2026-01-21T19:18:14.514Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-21T19:18:14.962Z] [BOT] ✅ Posted message: Senior – Data Scientist @ ORG_3eab285c in #ai-jobs
[2026-01-21T19:18:14.963Z] [BOT] ✅ Industry: Senior – Data Scientist @ ORG_3eab285c
[2026-01-21T19:18:14.964Z] [BOT] 💾 Added channel posting: Senior – Data Scientist @ ORG_3eab285c → category channel (1 total channels)
[2026-01-21T19:18:14.964Z] [BOT] 💾 BEFORE ARCHIVING: 3733 jobs in database
[2026-01-21T19:18:14.966Z] [BOT] ✅ No jobs to archive (all 3733 jobs within 7-day window)
[2026-01-21T19:18:14.989Z] [BOT] 💾 Saved posted_jobs.json: 3733 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:16.709Z] [BOT] ✅ Posted message: Senior – Data Scientist @ ORG_3eab285c in #JID_ead674af
[2026-01-21T19:18:16.709Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T19:18:16.710Z] [BOT] 💾 Added channel posting: Senior – Data Scientist @ ORG_3eab285c → location channel (2 total channels)
[2026-01-21T19:18:16.710Z] [BOT] 💾 BEFORE ARCHIVING: 3733 jobs in database
[2026-01-21T19:18:16.713Z] [BOT] ✅ No jobs to archive (all 3733 jobs within 7-day window)
[2026-01-21T19:18:16.739Z] [BOT] 💾 Saved posted_jobs.json: 3733 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:18.239Z] [BOT] 💾 Marked as posted: Senior – Data Scientist @ ORG_3eab285c (instance #1)
[2026-01-21T19:18:18.240Z] [BOT] 💾 BEFORE ARCHIVING: 3734 jobs in database
[2026-01-21T19:18:18.242Z] [BOT] ✅ No jobs to archive (all 3734 jobs within 7-day window)
[2026-01-21T19:18:18.271Z] [BOT] 💾 Saved posted_jobs.json: 3734 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:18.271Z] [BOT] 📍 [ROUTING] "Corporate Communications Manager " @ anthropic
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T19:18:18.715Z] [BOT] ✅ Posted message: Corporate Communications Manager  @ anthropic in #ai-jobs
[2026-01-21T19:18:18.715Z] [BOT] ✅ Industry: Corporate Communications Manager  @ anthropic
[2026-01-21T19:18:18.716Z] [BOT] 💾 Added channel posting: Corporate Communications Manager  @ anthropic → category channel (1 total channels)
[2026-01-21T19:18:18.716Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T19:18:18.718Z] [BOT] ✅ No jobs to archive (all 3735 jobs within 7-day window)
[2026-01-21T19:18:18.742Z] [BOT] 💾 Saved posted_jobs.json: 3735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:20.244Z] [BOT] 💾 Marked as posted: Corporate Communications Manager  @ anthropic (instance #1)
[2026-01-21T19:18:20.244Z] [BOT] 💾 BEFORE ARCHIVING: 3736 jobs in database
[2026-01-21T19:18:20.247Z] [BOT] ✅ No jobs to archive (all 3736 jobs within 7-day window)
[2026-01-21T19:18:20.275Z] [BOT] 💾 Saved posted_jobs.json: 3736 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T19:18:23.276Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T19:18:23.277Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_683bf26d-systems_420958 (posted within 7 days)
[2026-01-21T19:18:23.278Z] [BOT] ⏭️  Skipping duplicate: JID_4f4623b8-i_10015998-1 (posted within 7 days)
[2026-01-21T19:18:23.278Z] [BOT] ⏭️  Skipping duplicate: JID_cd33f33b-fellow_r_008876 (posted within 7 days)
[2026-01-21T19:18:23.279Z] [BOT] ⏭️  Skipping duplicate: JID_a7af662d (posted within 7 days)
[2026-01-21T19:18:23.279Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-76888 (posted within 7 days)
[2026-01-21T19:18:23.279Z] [BOT] ⏭️  Skipping duplicate: JID_d30cfa45-scientist_r-2367375-1 (posted within 7 days)
[2026-01-21T19:18:23.279Z] [BOT] ⏭️  Skipping duplicate: JID_389ffced-developer_r-00171511 (posted within 7 days)
[2026-01-21T19:18:23.279Z] [BOT] ⏭️  Skipping duplicate: JID_479f288f (posted within 7 days)
[2026-01-21T19:18:23.280Z] [BOT] ⏭️  Skipping duplicate: JID_9f32d073 (posted within 7 days)
[2026-01-21T19:18:23.280Z] [BOT] ⏭️  Skipping duplicate: JID_1dcfc3bd (posted within 7 days)
[2026-01-21T19:18:23.398Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[2026-01-21T19:18:23.592Z] [BOT] ✅ Saved pending queue: 2761 total (2741 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T19:18:23.592Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T19:18:23.661Z] [BOT] 📂 Loaded 6031 existing routing entries
[2026-01-21T19:18:23.742Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6041
[2026-01-21T19:18:23.743Z] [BOT] Timestamp: 2026-01-21T19:18:23.716Z
[2026-01-21T19:18:23.743Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T19:18:23.744Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 3
   Top channels:
[2026-01-21T19:18:23.744Z] [BOT] 1. #tech-jobs: 7 posts
     2. #JID_ead674af: 4 posts
     3. #ai-jobs: 3 posts
[2026-01-21T19:18:23.744Z] [BOT] [STATS] Channel stats saved
[2026-01-21T19:18:25.772Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2889) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*