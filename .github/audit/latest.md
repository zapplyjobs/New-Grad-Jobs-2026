# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T22:30:57.263Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T22:30:17.980Z] ========================================
[2026-01-20T22:30:17.982Z] Discord Bot Execution Log
[2026-01-20T22:30:17.982Z] Environment: GitHub Actions
[2026-01-20T22:30:17.983Z] Node Version: v20.19.6
[2026-01-20T22:30:17.983Z] ========================================
[2026-01-20T22:30:17.983Z] Environment Variables Check:
[2026-01-20T22:30:17.983Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T22:30:17.983Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.983Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T22:30:17.983Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T22:30:17.983Z] 
Multi-Channel Configuration:
[2026-01-20T22:30:17.983Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.983Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.984Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.984Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.984Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.984Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.984Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.984Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.984Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T22:30:17.984Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T22:30:17.984Z] 
Data Files Check:
[2026-01-20T22:30:17.985Z] .github/data/new_jobs.json: ✅ Exists (10 items, 113698 bytes)
[2026-01-20T22:30:17.996Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1675189 bytes)
[2026-01-20T22:30:17.996Z] 
========================================
[2026-01-20T22:30:17.996Z] Starting Enhanced Discord Bot...
[2026-01-20T22:30:17.996Z] ========================================
[2026-01-20T22:30:18.522Z] [BOT] ✅ Loaded V2 database: 2992 jobs
[2026-01-20T22:30:19.459Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T22:30:19.460Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T22:30:19.460Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T22:30:19.575Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Accounting Intern at coinbase
[2026-01-20T22:30:19.579Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T22:30:19.579Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T22:30:19.580Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T22:30:19.581Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-20T22:30:19.581Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-01-20T22:30:19.581Z] [BOT] - Account Development Representative Intern @ samsara: phoenix, arizona, atlanta
   - Account Development Representative (New Grad) @ samsara: atlanta, phoenix, arizona
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T22:30:19.581Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T22:30:19.585Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-20T22:30:19.586Z] [BOT] 📍 [ROUTING] "Accounting Intern" @ coinbase
[2026-01-20T22:30:19.586Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T22:30:19.590Z] [BOT ERROR] (node:2982) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T22:30:20.006Z] [BOT] ✅ Posted message: Accounting Intern @ coinbase in #ai-jobs
  ✅ Industry: Accounting Intern @ coinbase
[2026-01-20T22:30:20.007Z] [BOT] 💾 Added channel posting: Accounting Intern @ coinbase → category channel (1 total channels)
[2026-01-20T22:30:20.007Z] [BOT] 💾 BEFORE ARCHIVING: 2993 jobs in database
[2026-01-20T22:30:20.010Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T22:30:20.014Z] [BOT] 📦 Archived 24 jobs to 2026-01.json (24 total in archive)
[2026-01-20T22:30:20.015Z] [BOT] ✅ Archiving complete: 24 archived, 2969 active
[2026-01-20T22:30:20.031Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:21.750Z] [BOT] ✅ Posted message: Accounting Intern @ coinbase in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T22:30:21.750Z] [BOT] 💾 Added channel posting: Accounting Intern @ coinbase → location channel (2 total channels)
[2026-01-20T22:30:21.750Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-20T22:30:21.752Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-20T22:30:21.770Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
[2026-01-20T22:30:21.770Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:23.272Z] [BOT] 💾 Marked as posted: Accounting Intern @ coinbase (instance #1)
[2026-01-20T22:30:23.272Z] [BOT] 💾 BEFORE ARCHIVING: 2970 jobs in database
[2026-01-20T22:30:23.274Z] [BOT] ✅ No jobs to archive (all 2970 jobs within 7-day window)
[2026-01-20T22:30:23.294Z] [BOT] 💾 Saved posted_jobs.json: 2970 active jobs
[2026-01-20T22:30:23.295Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:23.295Z] [BOT] 📍 [ROUTING] "Associate C++ Engineer" @ ORG_0f5d983d Trading Company
[2026-01-20T22:30:23.295Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T22:30:23.479Z] [BOT] ✅ Posted message: Associate C++ Engineer @ ORG_0f5d983d Trading Company in #ai-jobs
[2026-01-20T22:30:23.479Z] [BOT] ✅ Industry: Associate C++ Engineer @ ORG_0f5d983d Trading Company
[2026-01-20T22:30:23.479Z] [BOT] 💾 Added channel posting: Associate C++ Engineer @ ORG_0f5d983d Trading Company → category channel (1 total channels)
[2026-01-20T22:30:23.480Z] [BOT] 💾 BEFORE ARCHIVING: 2971 jobs in database
[2026-01-20T22:30:23.481Z] [BOT] ✅ No jobs to archive (all 2971 jobs within 7-day window)
[2026-01-20T22:30:23.500Z] [BOT] 💾 Saved posted_jobs.json: 2971 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:25.002Z] [BOT] 💾 Marked as posted: Associate C++ Engineer @ ORG_0f5d983d Trading Company (instance #1)
[2026-01-20T22:30:25.002Z] [BOT] 💾 BEFORE ARCHIVING: 2972 jobs in database
[2026-01-20T22:30:25.004Z] [BOT] ✅ No jobs to archive (all 2972 jobs within 7-day window)
[2026-01-20T22:30:25.024Z] [BOT] 💾 Saved posted_jobs.json: 2972 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:28.025Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-20T22:30:28.026Z] [BOT] 📍 [ROUTING] "Director's Fellowship Postdoctoral Researcher" @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-20T22:30:28.026Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:30:28.345Z] [BOT] ✅ Posted message: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #tech-jobs
[2026-01-20T22:30:28.345Z] [BOT] ✅ Industry: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2026-01-20T22:30:28.346Z] [BOT] 💾 Added channel posting: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory → category channel (1 total channels)
[2026-01-20T22:30:28.346Z] [BOT] 💾 BEFORE ARCHIVING: 2973 jobs in database
[2026-01-20T22:30:28.348Z] [BOT] ✅ No jobs to archive (all 2973 jobs within 7-day window)
[2026-01-20T22:30:28.368Z] [BOT] 💾 Saved posted_jobs.json: 2973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:30.093Z] [BOT] ✅ Posted message: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #JID_ead674af
[2026-01-20T22:30:30.093Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T22:30:30.094Z] [BOT] 💾 Added channel posting: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory → location channel (2 total channels)
[2026-01-20T22:30:30.094Z] [BOT] 💾 BEFORE ARCHIVING: 2973 jobs in database
[2026-01-20T22:30:30.096Z] [BOT] ✅ No jobs to archive (all 2973 jobs within 7-day window)
[2026-01-20T22:30:30.115Z] [BOT] 💾 Saved posted_jobs.json: 2973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:31.617Z] [BOT] 💾 Marked as posted: Director's Fellowship Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory (instance #1)
[2026-01-20T22:30:31.617Z] [BOT] 💾 BEFORE ARCHIVING: 2974 jobs in database
[2026-01-20T22:30:31.619Z] [BOT] ✅ No jobs to archive (all 2974 jobs within 7-day window)
[2026-01-20T22:30:31.636Z] [BOT] 💾 Saved posted_jobs.json: 2974 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:31.637Z] [BOT] 📍 [ROUTING] "Java City – Hhs - AM Food Service Worker - Western Carolina University" @ ORG_e93b6c76
[2026-01-20T22:30:31.637Z] [BOT] Category: TECH (matched: "programming")
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:30:31.866Z] [BOT] ✅ Posted message: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 in #tech-jobs
  ✅ Industry: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76
[2026-01-20T22:30:31.867Z] [BOT] 💾 Added channel posting: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 → category channel (1 total channels)
[2026-01-20T22:30:31.867Z] [BOT] 💾 BEFORE ARCHIVING: 2975 jobs in database
[2026-01-20T22:30:31.869Z] [BOT] ✅ No jobs to archive (all 2975 jobs within 7-day window)
[2026-01-20T22:30:31.886Z] [BOT] 💾 Saved posted_jobs.json: 2975 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:33.702Z] [BOT] ✅ Posted message: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 in #JID_ead674af
[2026-01-20T22:30:33.703Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T22:30:33.703Z] [BOT] 💾 Added channel posting: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2975 jobs in database
[2026-01-20T22:30:33.705Z] [BOT] ✅ No jobs to archive (all 2975 jobs within 7-day window)
[2026-01-20T22:30:33.723Z] [BOT] 💾 Saved posted_jobs.json: 2975 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:35.225Z] [BOT] 💾 Marked as posted: Java City – Hhs - AM Food Service Worker - Western Carolina University @ ORG_e93b6c76 (instance #1)
[2026-01-20T22:30:35.225Z] [BOT] 💾 BEFORE ARCHIVING: 2976 jobs in database
[2026-01-20T22:30:35.227Z] [BOT] ✅ No jobs to archive (all 2976 jobs within 7-day window)
[2026-01-20T22:30:35.244Z] [BOT] 💾 Saved posted_jobs.json: 2976 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:35.245Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
   Category: TECH (matched: "software")
[2026-01-20T22:30:35.245Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T22:30:35.460Z] [BOT] ✅ Posted message: Early Career Software Engineer @ ORG_2b147ca6 Health in #tech-jobs
  ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2026-01-20T22:30:35.461Z] [BOT] 💾 Added channel posting: Early Career Software Engineer @ ORG_2b147ca6 Health → category channel (1 total channels)
[2026-01-20T22:30:35.461Z] [BOT] 💾 BEFORE ARCHIVING: 2977 jobs in database
[2026-01-20T22:30:35.463Z] [BOT] ✅ No jobs to archive (all 2977 jobs within 7-day window)
[2026-01-20T22:30:35.480Z] [BOT] 💾 Saved posted_jobs.json: 2977 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:36.982Z] [BOT] 💾 Marked as posted: Early Career Software Engineer @ ORG_2b147ca6 Health (instance #1)
[2026-01-20T22:30:36.982Z] [BOT] 💾 BEFORE ARCHIVING: 2978 jobs in database
[2026-01-20T22:30:36.983Z] [BOT] ✅ No jobs to archive (all 2978 jobs within 7-day window)
[2026-01-20T22:30:37.002Z] [BOT] 💾 Saved posted_jobs.json: 2978 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:37.002Z] [BOT] 📍 [ROUTING] "Associate Software Engineer – College Grad 2026" @ ORG_06fec48a Health
[2026-01-20T22:30:37.003Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:30:37.156Z] [BOT] ✅ Posted message: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health in #tech-jobs
[2026-01-20T22:30:37.156Z] [BOT] ✅ Industry: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health
[2026-01-20T22:30:37.157Z] [BOT] 💾 Added channel posting: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health → category channel (1 total channels)
[2026-01-20T22:30:37.157Z] [BOT] 💾 BEFORE ARCHIVING: 2979 jobs in database
[2026-01-20T22:30:37.159Z] [BOT] ✅ No jobs to archive (all 2979 jobs within 7-day window)
[2026-01-20T22:30:37.175Z] [BOT] 💾 Saved posted_jobs.json: 2979 active jobs
[2026-01-20T22:30:37.176Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:38.679Z] [BOT] 💾 Marked as posted: Associate Software Engineer – College Grad 2026 @ ORG_06fec48a Health (instance #1)
[2026-01-20T22:30:38.679Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-20T22:30:38.680Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-20T22:30:38.699Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:38.700Z] [BOT] 📍 [ROUTING] "Software Engineering AMTS – College Grad" @ ORG_33a7935d
   Category: TECH (matched: "software")
[2026-01-20T22:30:38.700Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T22:30:39.089Z] [BOT] ✅ Posted message: Software Engineering AMTS – College Grad @ ORG_33a7935d in #tech-jobs
  ✅ Industry: Software Engineering AMTS – College Grad @ ORG_33a7935d
[2026-01-20T22:30:39.090Z] [BOT] 💾 Added channel posting: Software Engineering AMTS – College Grad @ ORG_33a7935d → category channel (1 total channels)
[2026-01-20T22:30:39.090Z] [BOT] 💾 BEFORE ARCHIVING: 2981 jobs in database
[2026-01-20T22:30:39.092Z] [BOT] ✅ No jobs to archive (all 2981 jobs within 7-day window)
[2026-01-20T22:30:39.112Z] [BOT] 💾 Saved posted_jobs.json: 2981 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:40.821Z] [BOT] ✅ Posted message: Software Engineering AMTS – College Grad @ ORG_33a7935d in #JID_ead674af
[2026-01-20T22:30:40.822Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T22:30:40.822Z] [BOT] 💾 Added channel posting: Software Engineering AMTS – College Grad @ ORG_33a7935d → location channel (2 total channels)
[2026-01-20T22:30:40.822Z] [BOT] 💾 BEFORE ARCHIVING: 2981 jobs in database
[2026-01-20T22:30:40.824Z] [BOT] ✅ No jobs to archive (all 2981 jobs within 7-day window)
[2026-01-20T22:30:40.842Z] [BOT] 💾 Saved posted_jobs.json: 2981 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:42.344Z] [BOT] 💾 Marked as posted: Software Engineering AMTS – College Grad @ ORG_33a7935d (instance #1)
[2026-01-20T22:30:42.344Z] [BOT] 💾 BEFORE ARCHIVING: 2982 jobs in database
[2026-01-20T22:30:42.346Z] [BOT] ✅ No jobs to archive (all 2982 jobs within 7-day window)
[2026-01-20T22:30:42.367Z] [BOT] 💾 Saved posted_jobs.json: 2982 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:42.367Z] [BOT] 📍 [ROUTING] "Account Development Representative Intern" @ samsara
[2026-01-20T22:30:42.368Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:30:42.615Z] [BOT] ✅ Posted message: Account Development Representative Intern @ samsara in #tech-jobs
  ✅ Industry: Account Development Representative Intern @ samsara
[2026-01-20T22:30:42.616Z] [BOT] 💾 Added channel posting: Account Development Representative Intern @ samsara → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2983 jobs in database
[2026-01-20T22:30:42.618Z] [BOT] ✅ No jobs to archive (all 2983 jobs within 7-day window)
[2026-01-20T22:30:42.635Z] [BOT] 💾 Saved posted_jobs.json: 2983 active jobs
[2026-01-20T22:30:42.635Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:44.138Z] [BOT] 💾 Marked as posted: Account Development Representative Intern @ samsara (instance #1)
[2026-01-20T22:30:44.138Z] [BOT] 💾 BEFORE ARCHIVING: 2984 jobs in database
[2026-01-20T22:30:44.140Z] [BOT] ✅ No jobs to archive (all 2984 jobs within 7-day window)
[2026-01-20T22:30:44.157Z] [BOT] 💾 Saved posted_jobs.json: 2984 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:44.157Z] [BOT] 💾 Marked as posted: Account Development Representative Intern  @ samsara (instance #1)
[2026-01-20T22:30:44.157Z] [BOT] 💾 BEFORE ARCHIVING: 2985 jobs in database
[2026-01-20T22:30:44.159Z] [BOT] ✅ No jobs to archive (all 2985 jobs within 7-day window)
[2026-01-20T22:30:44.175Z] [BOT] 💾 Saved posted_jobs.json: 2985 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:44.176Z] [BOT] 📍 [ROUTING] "Account Development Representative (New Grad)" @ samsara
[2026-01-20T22:30:44.176Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:30:44.374Z] [BOT] ✅ Posted message: Account Development Representative (New Grad) @ samsara in #tech-jobs
[2026-01-20T22:30:44.374Z] [BOT] ✅ Industry: Account Development Representative (New Grad) @ samsara
[2026-01-20T22:30:44.374Z] [BOT] 💾 Added channel posting: Account Development Representative (New Grad) @ samsara → category channel (1 total channels)
[2026-01-20T22:30:44.374Z] [BOT] 💾 BEFORE ARCHIVING: 2986 jobs in database
[2026-01-20T22:30:44.376Z] [BOT] ✅ No jobs to archive (all 2986 jobs within 7-day window)
[2026-01-20T22:30:44.392Z] [BOT] 💾 Saved posted_jobs.json: 2986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:45.894Z] [BOT] 💾 Marked as posted: Account Development Representative (New Grad) @ samsara (instance #1)
[2026-01-20T22:30:45.894Z] [BOT] 💾 BEFORE ARCHIVING: 2987 jobs in database
[2026-01-20T22:30:45.896Z] [BOT] ✅ No jobs to archive (all 2987 jobs within 7-day window)
[2026-01-20T22:30:45.914Z] [BOT] 💾 Saved posted_jobs.json: 2987 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:45.914Z] [BOT] 💾 Marked as posted: Account Development Representative (New Grad)  @ samsara (instance #1)
[2026-01-20T22:30:45.915Z] [BOT] 💾 BEFORE ARCHIVING: 2988 jobs in database
[2026-01-20T22:30:45.916Z] [BOT] ✅ No jobs to archive (all 2988 jobs within 7-day window)
[2026-01-20T22:30:45.932Z] [BOT] 💾 Saved posted_jobs.json: 2988 active jobs
[2026-01-20T22:30:45.932Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:48.933Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-20T22:30:48.933Z] [BOT] 📍 [ROUTING] "Global Enterprise Account Executive" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-20T22:30:48.933Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-20T22:30:49.216Z] [BOT] ✅ Posted message: Global Enterprise Account Executive @ verkada in #finance-jobs
  ✅ Industry: Global Enterprise Account Executive @ verkada
[2026-01-20T22:30:49.217Z] [BOT] 💾 Added channel posting: Global Enterprise Account Executive @ verkada → category channel (1 total channels)
[2026-01-20T22:30:49.217Z] [BOT] 💾 BEFORE ARCHIVING: 2989 jobs in database
[2026-01-20T22:30:49.219Z] [BOT] ✅ No jobs to archive (all 2989 jobs within 7-day window)
[2026-01-20T22:30:49.236Z] [BOT] 💾 Saved posted_jobs.json: 2989 active jobs
[2026-01-20T22:30:49.236Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:50.738Z] [BOT] 💾 Marked as posted: Global Enterprise Account Executive @ verkada (instance #1)
[2026-01-20T22:30:50.738Z] [BOT] 💾 BEFORE ARCHIVING: 2990 jobs in database
[2026-01-20T22:30:50.740Z] [BOT] ✅ No jobs to archive (all 2990 jobs within 7-day window)
[2026-01-20T22:30:50.758Z] [BOT] 💾 Saved posted_jobs.json: 2990 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:30:53.759Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T22:30:53.759Z] [BOT] ⏭️  Skipping duplicate: JID_1a00b3ad (posted within 7 days)
[2026-01-20T22:30:53.760Z] [BOT] ⏭️  Skipping duplicate: JID_f1cb696e-researcher_r14061 (posted within 7 days)
[2026-01-20T22:30:53.760Z] [BOT] ⏭️  Skipping duplicate: JID_3cfbf2c4 (posted within 7 days)
[2026-01-20T22:30:53.760Z] [BOT] ⏭️  Skipping duplicate: JID_273b1230 (posted within 7 days)
[2026-01-20T22:30:53.760Z] [BOT] ⏭️  Skipping duplicate: JID_b9af3f81 (posted within 7 days)
[2026-01-20T22:30:53.760Z] [BOT] ⏭️  Skipping duplicate: JID_7689d913 (posted within 7 days)
[2026-01-20T22:30:53.761Z] [BOT] ⏭️  Skipping duplicate: JID_edadfe67-external_career_site-JID_ba958958-_jr322433-1 (posted within 7 days)
[2026-01-20T22:30:53.761Z] [BOT] ⏭️  Skipping duplicate: JID_b2bcdce2 (posted within 7 days)
[2026-01-20T22:30:53.761Z] [BOT] ⏭️  Skipping duplicate: JID_a7c57fc0 (posted within 7 days)
[2026-01-20T22:30:53.761Z] [BOT] ⏭️  Skipping duplicate: JID_1b0a9383 (posted within 7 days)
[2026-01-20T22:30:53.866Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[2026-01-20T22:30:54.053Z] [BOT] ✅ Saved pending queue: 2761 total (2741 pending, 10 enriched, 10 posted)
[2026-01-20T22:30:54.053Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T22:30:54.115Z] [BOT] 📂 Loaded 5522 existing routing entries
[2026-01-20T22:30:54.188Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-20T22:30:54.189Z] [BOT] Total entries: 5532
   Timestamp: 2026-01-20T22:30:54.165Z
[2026-01-20T22:30:54.189Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T22:30:54.189Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-20T22:30:54.190Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T22:30:54.190Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
[2026-01-20T22:30:54.190Z] [BOT] 1. #tech-jobs: 7 posts
     2. #JID_ead674af: 3 posts
     3. #ai-jobs: 2 posts
     4. #JID_98d4f0de: 1 posts
[2026-01-20T22:30:54.190Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-20T22:30:54.190Z] [BOT] [STATS] Channel stats saved
[2026-01-20T22:30:56.216Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2982) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*