# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T22:44:17.209Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T22:43:38.545Z] ========================================
[2026-01-20T22:43:38.547Z] Discord Bot Execution Log
[2026-01-20T22:43:38.547Z] Environment: GitHub Actions
[2026-01-20T22:43:38.547Z] Node Version: v20.19.6
[2026-01-20T22:43:38.547Z] ========================================
[2026-01-20T22:43:38.547Z] Environment Variables Check:
[2026-01-20T22:43:38.548Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T22:43:38.548Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.548Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T22:43:38.548Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T22:43:38.548Z] 
Multi-Channel Configuration:
[2026-01-20T22:43:38.548Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.548Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.548Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.548Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.548Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.548Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.549Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.549Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.549Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T22:43:38.549Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T22:43:38.549Z] 
Data Files Check:
[2026-01-20T22:43:38.550Z] .github/data/new_jobs.json: ✅ Exists (10 items, 106875 bytes)
[2026-01-20T22:43:38.562Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1675353 bytes)
[2026-01-20T22:43:38.562Z] 
========================================
[2026-01-20T22:43:38.562Z] Starting Enhanced Discord Bot...
[2026-01-20T22:43:38.562Z] ========================================
[2026-01-20T22:43:39.091Z] [BOT] ✅ Loaded V2 database: 2990 jobs
[2026-01-20T22:43:39.848Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T22:43:39.849Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T22:43:39.849Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T22:43:39.962Z] [BOT] ✅ Loaded pending queue: 2755 total (2735 pending, 20 enriched, 0 posted)
[2026-01-20T22:43:39.963Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Content Engineer at vercel
[2026-01-20T22:43:39.968Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T22:43:39.968Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T22:43:39.969Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T22:43:39.970Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-20T22:43:39.970Z] [BOT] (11 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Account Executive, Commercial @ samsara: boston, denver, los angeles, atlanta, columbus, seattle, san diego, salt lake, phoenix, arizona, portland
   - Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara: austin, chicago, dallas
[2026-01-20T22:43:39.970Z] [BOT] ⏸️ Limiting to 10 jobs this run, 11 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T22:43:39.973Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-20T22:43:39.974Z] [BOT] 📍 [ROUTING] "Content Engineer" @ vercel
[2026-01-20T22:43:39.974Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:43:39.978Z] [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T22:43:40.446Z] [BOT] ✅ Posted message: Content Engineer @ vercel in #tech-jobs
  ✅ Industry: Content Engineer @ vercel
[2026-01-20T22:43:40.448Z] [BOT] 💾 Added channel posting: Content Engineer @ vercel → category channel (1 total channels)
[2026-01-20T22:43:40.448Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-20T22:43:40.450Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T22:43:40.455Z] [BOT] 📦 Archived 13 jobs to 2026-01.json (13 total in archive)
[2026-01-20T22:43:40.455Z] [BOT] ✅ Archiving complete: 13 archived, 2978 active
[2026-01-20T22:43:40.474Z] [BOT] 💾 Saved posted_jobs.json: 2978 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:41.977Z] [BOT] 💾 Marked as posted: Content Engineer @ vercel (instance #1)
[2026-01-20T22:43:41.978Z] [BOT] 💾 BEFORE ARCHIVING: 2979 jobs in database
[2026-01-20T22:43:41.979Z] [BOT] ✅ No jobs to archive (all 2979 jobs within 7-day window)
[2026-01-20T22:43:41.997Z] [BOT] 💾 Saved posted_jobs.json: 2979 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:41.997Z] [BOT] 📍 [ROUTING] "Materials Lab Technician" @ ORG_2fa25ffb
[2026-01-20T22:43:41.997Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:43:42.441Z] [BOT] ✅ Posted message: Materials Lab Technician @ ORG_2fa25ffb in #tech-jobs
  ✅ Industry: Materials Lab Technician @ ORG_2fa25ffb
[2026-01-20T22:43:42.441Z] [BOT] 💾 Added channel posting: Materials Lab Technician @ ORG_2fa25ffb → category channel (1 total channels)
[2026-01-20T22:43:42.441Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-20T22:43:42.443Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-20T22:43:42.463Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:43.965Z] [BOT] 💾 Marked as posted: Materials Lab Technician @ ORG_2fa25ffb (instance #1)
[2026-01-20T22:43:43.965Z] [BOT] 💾 BEFORE ARCHIVING: 2981 jobs in database
[2026-01-20T22:43:43.967Z] [BOT] ✅ No jobs to archive (all 2981 jobs within 7-day window)
[2026-01-20T22:43:43.986Z] [BOT] 💾 Saved posted_jobs.json: 2981 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:43.986Z] [BOT] 📍 [ROUTING] "Associate Software Support - Java" @ DuCharme, McMillen & Associates
[2026-01-20T22:43:43.986Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:43:44.258Z] [BOT] ✅ Posted message: Associate Software Support - Java @ DuCharme, McMillen & Associates in #tech-jobs
[2026-01-20T22:43:44.258Z] [BOT] ✅ Industry: Associate Software Support - Java @ DuCharme, McMillen & Associates
[2026-01-20T22:43:44.259Z] [BOT] 💾 Added channel posting: Associate Software Support - Java @ DuCharme, McMillen & Associates → category channel (1 total channels)
[2026-01-20T22:43:44.259Z] [BOT] 💾 BEFORE ARCHIVING: 2982 jobs in database
[2026-01-20T22:43:44.261Z] [BOT] ✅ No jobs to archive (all 2982 jobs within 7-day window)
[2026-01-20T22:43:44.281Z] [BOT] 💾 Saved posted_jobs.json: 2982 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:46.115Z] [BOT] ✅ Posted message: Associate Software Support - Java @ DuCharme, McMillen & Associates in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T22:43:46.116Z] [BOT] 💾 Added channel posting: Associate Software Support - Java @ DuCharme, McMillen & Associates → location channel (2 total channels)
[2026-01-20T22:43:46.117Z] [BOT] 💾 BEFORE ARCHIVING: 2982 jobs in database
[2026-01-20T22:43:46.118Z] [BOT] ✅ No jobs to archive (all 2982 jobs within 7-day window)
[2026-01-20T22:43:46.135Z] [BOT] 💾 Saved posted_jobs.json: 2982 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:47.636Z] [BOT] 💾 Marked as posted: Associate Software Support - Java @ DuCharme, McMillen & Associates (instance #1)
[2026-01-20T22:43:47.636Z] [BOT] 💾 BEFORE ARCHIVING: 2983 jobs in database
[2026-01-20T22:43:47.638Z] [BOT] ✅ No jobs to archive (all 2983 jobs within 7-day window)
[2026-01-20T22:43:47.654Z] [BOT] 💾 Saved posted_jobs.json: 2983 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:47.654Z] [BOT] 📍 [ROUTING] "Software Engineer: Platform Services" @ supabase
[2026-01-20T22:43:47.654Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:43:47.946Z] [BOT] ✅ Posted message: Software Engineer: Platform Services @ supabase in #tech-jobs
[2026-01-20T22:43:47.946Z] [BOT] ✅ Industry: Software Engineer: Platform Services @ supabase
[2026-01-20T22:43:47.947Z] [BOT] 💾 Added channel posting: Software Engineer: Platform Services @ supabase → category channel (1 total channels)
[2026-01-20T22:43:47.947Z] [BOT] 💾 BEFORE ARCHIVING: 2984 jobs in database
[2026-01-20T22:43:47.949Z] [BOT] ✅ No jobs to archive (all 2984 jobs within 7-day window)
[2026-01-20T22:43:47.965Z] [BOT] 💾 Saved posted_jobs.json: 2984 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:49.468Z] [BOT] 💾 Marked as posted: Software Engineer: Platform Services @ supabase (instance #1)
[2026-01-20T22:43:49.468Z] [BOT] 💾 BEFORE ARCHIVING: 2985 jobs in database
[2026-01-20T22:43:49.470Z] [BOT] ✅ No jobs to archive (all 2985 jobs within 7-day window)
[2026-01-20T22:43:49.491Z] [BOT] 💾 Saved posted_jobs.json: 2985 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:49.492Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
[2026-01-20T22:43:49.492Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:43:50.086Z] [BOT] ✅ Posted message: Account Executive, Commercial @ samsara in #tech-jobs
  ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-20T22:43:50.087Z] [BOT] 💾 Added channel posting: Account Executive, Commercial @ samsara → category channel (1 total channels)
[2026-01-20T22:43:50.087Z] [BOT] 💾 BEFORE ARCHIVING: 2986 jobs in database
[2026-01-20T22:43:50.089Z] [BOT] ✅ No jobs to archive (all 2986 jobs within 7-day window)
[2026-01-20T22:43:50.107Z] [BOT] 💾 Saved posted_jobs.json: 2986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.609Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-20T22:43:51.609Z] [BOT] 💾 BEFORE ARCHIVING: 2987 jobs in database
[2026-01-20T22:43:51.611Z] [BOT] ✅ No jobs to archive (all 2987 jobs within 7-day window)
[2026-01-20T22:43:51.630Z] [BOT] 💾 Saved posted_jobs.json: 2987 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.630Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-20T22:43:51.630Z] [BOT] 💾 BEFORE ARCHIVING: 2988 jobs in database
[2026-01-20T22:43:51.632Z] [BOT] ✅ No jobs to archive (all 2988 jobs within 7-day window)
[2026-01-20T22:43:51.649Z] [BOT] 💾 Saved posted_jobs.json: 2988 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.649Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-20T22:43:51.649Z] [BOT] 💾 BEFORE ARCHIVING: 2989 jobs in database
[2026-01-20T22:43:51.651Z] [BOT] ✅ No jobs to archive (all 2989 jobs within 7-day window)
[2026-01-20T22:43:51.668Z] [BOT] 💾 Saved posted_jobs.json: 2989 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.668Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-20T22:43:51.668Z] [BOT] 💾 BEFORE ARCHIVING: 2990 jobs in database
[2026-01-20T22:43:51.670Z] [BOT] ✅ No jobs to archive (all 2990 jobs within 7-day window)
[2026-01-20T22:43:51.686Z] [BOT] 💾 Saved posted_jobs.json: 2990 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.686Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-20T22:43:51.686Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-20T22:43:51.688Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-20T22:43:51.704Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.705Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-20T22:43:51.705Z] [BOT] 💾 BEFORE ARCHIVING: 2992 jobs in database
[2026-01-20T22:43:51.706Z] [BOT] ✅ No jobs to archive (all 2992 jobs within 7-day window)
[2026-01-20T22:43:51.724Z] [BOT] 💾 Saved posted_jobs.json: 2992 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.724Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-20T22:43:51.724Z] [BOT] 💾 BEFORE ARCHIVING: 2993 jobs in database
[2026-01-20T22:43:51.726Z] [BOT] ✅ No jobs to archive (all 2993 jobs within 7-day window)
[2026-01-20T22:43:51.742Z] [BOT] 💾 Saved posted_jobs.json: 2993 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.743Z] [BOT] 💾 Marked as posted: Account Executive, Commercial @ samsara (instance #1)
[2026-01-20T22:43:51.743Z] [BOT] 💾 BEFORE ARCHIVING: 2994 jobs in database
[2026-01-20T22:43:51.745Z] [BOT] ✅ No jobs to archive (all 2994 jobs within 7-day window)
[2026-01-20T22:43:51.763Z] [BOT] 💾 Saved posted_jobs.json: 2994 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.763Z] [BOT] 💾 Marked as posted: Account Executive, Commercial - (Phoenix, AR) @ samsara (instance #1)
[2026-01-20T22:43:51.764Z] [BOT] 💾 BEFORE ARCHIVING: 2995 jobs in database
[2026-01-20T22:43:51.765Z] [BOT] ✅ No jobs to archive (all 2995 jobs within 7-day window)
[2026-01-20T22:43:51.782Z] [BOT] 💾 Saved posted_jobs.json: 2995 active jobs
[2026-01-20T22:43:51.782Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:51.782Z] [BOT] 💾 Marked as posted: Account Executive, Commercial - (Portland, OR) @ samsara (instance #1)
💾 BEFORE ARCHIVING: 2996 jobs in database
[2026-01-20T22:43:51.783Z] [BOT] ✅ No jobs to archive (all 2996 jobs within 7-day window)
[2026-01-20T22:43:51.801Z] [BOT] 💾 Saved posted_jobs.json: 2996 active jobs
[2026-01-20T22:43:51.802Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:54.803Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-20T22:43:54.804Z] [BOT] 📍 [ROUTING] "Regulatory Operations Specialist" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T22:43:55.262Z] [BOT] ✅ Posted message: Regulatory Operations Specialist @ spotify in #ai-jobs
[2026-01-20T22:43:55.262Z] [BOT] ✅ Industry: Regulatory Operations Specialist @ spotify
[2026-01-20T22:43:55.263Z] [BOT] 💾 Added channel posting: Regulatory Operations Specialist @ spotify → category channel (1 total channels)
[2026-01-20T22:43:55.263Z] [BOT] 💾 BEFORE ARCHIVING: 2997 jobs in database
[2026-01-20T22:43:55.265Z] [BOT] ✅ No jobs to archive (all 2997 jobs within 7-day window)
[2026-01-20T22:43:55.281Z] [BOT] 💾 Saved posted_jobs.json: 2997 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:57.019Z] [BOT] ✅ Posted message: Regulatory Operations Specialist @ spotify in #JID_98d4f0de
[2026-01-20T22:43:57.019Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T22:43:57.019Z] [BOT] 💾 Added channel posting: Regulatory Operations Specialist @ spotify → location channel (2 total channels)
[2026-01-20T22:43:57.019Z] [BOT] 💾 BEFORE ARCHIVING: 2997 jobs in database
[2026-01-20T22:43:57.021Z] [BOT] ✅ No jobs to archive (all 2997 jobs within 7-day window)
[2026-01-20T22:43:57.039Z] [BOT] 💾 Saved posted_jobs.json: 2997 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:58.540Z] [BOT] 💾 Marked as posted: Regulatory Operations Specialist @ spotify (instance #1)
[2026-01-20T22:43:58.540Z] [BOT] 💾 BEFORE ARCHIVING: 2998 jobs in database
[2026-01-20T22:43:58.542Z] [BOT] ✅ No jobs to archive (all 2998 jobs within 7-day window)
[2026-01-20T22:43:58.562Z] [BOT] 💾 Saved posted_jobs.json: 2998 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:43:58.563Z] [BOT] 📍 [ROUTING] "Automotive Mobile ADAS Technician" @ ORG_b344d80e Boyd Group
[2026-01-20T22:43:58.563Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T22:43:58.815Z] [BOT] ✅ Posted message: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group in #ai-jobs
[2026-01-20T22:43:58.816Z] [BOT] ✅ Industry: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group
[2026-01-20T22:43:58.816Z] [BOT] 💾 Added channel posting: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group → category channel (1 total channels)
[2026-01-20T22:43:58.816Z] [BOT] 💾 BEFORE ARCHIVING: 2999 jobs in database
[2026-01-20T22:43:58.818Z] [BOT] ✅ No jobs to archive (all 2999 jobs within 7-day window)
[2026-01-20T22:43:58.835Z] [BOT] 💾 Saved posted_jobs.json: 2999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:00.583Z] [BOT] ✅ Posted message: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group in #JID_ead674af
[2026-01-20T22:44:00.584Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T22:44:00.584Z] [BOT] 💾 Added channel posting: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group → location channel (2 total channels)
[2026-01-20T22:44:00.584Z] [BOT] 💾 BEFORE ARCHIVING: 2999 jobs in database
[2026-01-20T22:44:00.586Z] [BOT] ✅ No jobs to archive (all 2999 jobs within 7-day window)
[2026-01-20T22:44:00.605Z] [BOT] 💾 Saved posted_jobs.json: 2999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:02.107Z] [BOT] 💾 Marked as posted: Automotive Mobile ADAS Technician @ ORG_b344d80e Boyd Group (instance #1)
[2026-01-20T22:44:02.107Z] [BOT] 💾 BEFORE ARCHIVING: 3000 jobs in database
[2026-01-20T22:44:02.109Z] [BOT] ✅ No jobs to archive (all 3000 jobs within 7-day window)
[2026-01-20T22:44:02.126Z] [BOT] 💾 Saved posted_jobs.json: 3000 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:02.127Z] [BOT] 📍 [ROUTING] "Entry/Mid Software Developer" @ ORG_1954b120
   Category: AI (matched: "machine learning")
[2026-01-20T22:44:02.127Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T22:44:02.361Z] [BOT] ✅ Posted message: Entry/Mid Software Developer @ ORG_1954b120 in #ai-jobs
  ✅ Industry: Entry/Mid Software Developer @ ORG_1954b120
[2026-01-20T22:44:02.362Z] [BOT] 💾 Added channel posting: Entry/Mid Software Developer @ ORG_1954b120 → category channel (1 total channels)
[2026-01-20T22:44:02.362Z] [BOT] 💾 BEFORE ARCHIVING: 3001 jobs in database
[2026-01-20T22:44:02.364Z] [BOT] ✅ No jobs to archive (all 3001 jobs within 7-day window)
[2026-01-20T22:44:02.381Z] [BOT] 💾 Saved posted_jobs.json: 3001 active jobs
[2026-01-20T22:44:02.382Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:04.127Z] [BOT] ✅ Posted message: Entry/Mid Software Developer @ ORG_1954b120 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T22:44:04.127Z] [BOT] 💾 Added channel posting: Entry/Mid Software Developer @ ORG_1954b120 → location channel (2 total channels)
[2026-01-20T22:44:04.128Z] [BOT] 💾 BEFORE ARCHIVING: 3001 jobs in database
[2026-01-20T22:44:04.129Z] [BOT] ✅ No jobs to archive (all 3001 jobs within 7-day window)
[2026-01-20T22:44:04.145Z] [BOT] 💾 Saved posted_jobs.json: 3001 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:05.647Z] [BOT] 💾 Marked as posted: Entry/Mid Software Developer @ ORG_1954b120 (instance #1)
[2026-01-20T22:44:05.647Z] [BOT] 💾 BEFORE ARCHIVING: 3002 jobs in database
[2026-01-20T22:44:05.649Z] [BOT] ✅ No jobs to archive (all 3002 jobs within 7-day window)
[2026-01-20T22:44:05.667Z] [BOT] 💾 Saved posted_jobs.json: 3002 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:08.668Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T22:44:08.668Z] [BOT] 📍 [ROUTING] "Core Enterprise Account Executive EST/CST - Remote - Austin, TX" @ samsara
   Category: DATA-SCIENCE (matched: "analytics")
[2026-01-20T22:44:08.669Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-20T22:44:09.027Z] [BOT] ✅ Posted message: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara in #JID_fb739488
  ✅ Industry: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara
[2026-01-20T22:44:09.028Z] [BOT] 💾 Added channel posting: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara → category channel (1 total channels)
[2026-01-20T22:44:09.028Z] [BOT] 💾 BEFORE ARCHIVING: 3003 jobs in database
[2026-01-20T22:44:09.030Z] [BOT] ✅ No jobs to archive (all 3003 jobs within 7-day window)
[2026-01-20T22:44:09.047Z] [BOT] 💾 Saved posted_jobs.json: 3003 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:10.549Z] [BOT] 💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara (instance #1)
[2026-01-20T22:44:10.549Z] [BOT] 💾 BEFORE ARCHIVING: 3004 jobs in database
[2026-01-20T22:44:10.551Z] [BOT] ✅ No jobs to archive (all 3004 jobs within 7-day window)
[2026-01-20T22:44:10.570Z] [BOT] 💾 Saved posted_jobs.json: 3004 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:10.570Z] [BOT] 💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Chicago, IL @ samsara (instance #1)
[2026-01-20T22:44:10.570Z] [BOT] 💾 BEFORE ARCHIVING: 3005 jobs in database
[2026-01-20T22:44:10.572Z] [BOT] ✅ No jobs to archive (all 3005 jobs within 7-day window)
[2026-01-20T22:44:10.589Z] [BOT] 💾 Saved posted_jobs.json: 3005 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:10.589Z] [BOT] 💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Dallas, TX @ samsara (instance #1)
[2026-01-20T22:44:10.589Z] [BOT] 💾 BEFORE ARCHIVING: 3006 jobs in database
[2026-01-20T22:44:10.591Z] [BOT] ✅ No jobs to archive (all 3006 jobs within 7-day window)
[2026-01-20T22:44:10.610Z] [BOT] 💾 Saved posted_jobs.json: 3006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:44:13.611Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-20T22:44:13.612Z] [BOT] ⏭️  Skipping duplicate: JID_101c6abb (posted within 7 days)
[2026-01-20T22:44:13.612Z] [BOT] ⏭️  Skipping duplicate: JID_2ad527aa (posted within 7 days)
[2026-01-20T22:44:13.612Z] [BOT] ⏭️  Skipping duplicate: JID_a53de753-technician_r055451 (posted within 7 days)
[2026-01-20T22:44:13.612Z] [BOT] ⏭️  Skipping duplicate: JID_6dabd0c4 (posted within 7 days)
[2026-01-20T22:44:13.612Z] [BOT] ⏭️  Skipping duplicate: JID_7f95c4dc-_req293 (posted within 7 days)
[2026-01-20T22:44:13.613Z] [BOT] ⏭️  Skipping duplicate: JID_44ba7e80-developer_320762 (posted within 7 days)
⏭️  Skipping duplicate: JID_3b55c255 (posted within 7 days)
[2026-01-20T22:44:13.613Z] [BOT] ⏭️  Skipping duplicate: JID_9d63bb2f (posted within 7 days)
[2026-01-20T22:44:13.613Z] [BOT] ⏭️  Skipping duplicate: JID_e437aa26 (posted within 7 days)
[2026-01-20T22:44:13.715Z] [BOT] ✅ Loaded pending queue: 2755 total (2735 pending, 20 enriched, 0 posted)
[2026-01-20T22:44:13.900Z] [BOT] ✅ Saved pending queue: 2755 total (2735 pending, 11 enriched, 9 posted)
[2026-01-20T22:44:13.901Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T22:44:13.963Z] [BOT] 📂 Loaded 5532 existing routing entries
[2026-01-20T22:44:14.038Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 5541
   Timestamp: 2026-01-20T22:44:14.014Z
[2026-01-20T22:44:14.039Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 13
[2026-01-20T22:44:14.039Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-20T22:44:14.039Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-20T22:44:14.039Z] [BOT] Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-20T22:44:14.039Z] [BOT] 1. #tech-jobs: 5 posts
     2. #JID_ead674af: 3 posts
     3. #ai-jobs: 3 posts
     4. #JID_98d4f0de: 1 posts
[2026-01-20T22:44:14.039Z] [BOT] 5. #JID_fb739488: 1 posts
[2026-01-20T22:44:14.039Z] [BOT] [STATS] Channel stats saved
[2026-01-20T22:44:16.064Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*