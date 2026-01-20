# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T07:16:49.327Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T07:16:12.683Z] ========================================
[2026-01-20T07:16:12.685Z] Discord Bot Execution Log
[2026-01-20T07:16:12.685Z] Environment: GitHub Actions
[2026-01-20T07:16:12.685Z] Node Version: v20.19.6
[2026-01-20T07:16:12.685Z] ========================================
[2026-01-20T07:16:12.685Z] Environment Variables Check:
[2026-01-20T07:16:12.685Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T07:16:12.685Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.685Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T07:16:12.686Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T07:16:12.686Z] 
Multi-Channel Configuration:
[2026-01-20T07:16:12.686Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.686Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.686Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.686Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.686Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.686Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.686Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.686Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.686Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T07:16:12.686Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T07:16:12.687Z] 
Data Files Check:
[2026-01-20T07:16:12.688Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163434 bytes)
[2026-01-20T07:16:12.698Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1554953 bytes)
[2026-01-20T07:16:12.698Z] 
========================================
[2026-01-20T07:16:12.698Z] Starting Enhanced Discord Bot...
[2026-01-20T07:16:12.698Z] ========================================
[2026-01-20T07:16:13.223Z] [BOT] ✅ Loaded V2 database: 2805 jobs
[2026-01-20T07:16:13.870Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T07:16:13.871Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T07:16:13.871Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T07:16:13.986Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T07:16:13.990Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T07:16:13.991Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T07:16:13.991Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T07:16:13.992Z] [BOT] 📋 After multi-location grouping: 16 unique jobs to post
[2026-01-20T07:16:13.993Z] [BOT] (4 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Mid Market Account Executive @ datadog: new york, new york, usa, denver, colorado, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T07:16:13.993Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T07:16:13.996Z] [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
[2026-01-20T07:16:13.997Z] [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
[2026-01-20T07:16:13.999Z] [BOT] 📌 Posting 7 jobs to #tech-jobs
[2026-01-20T07:16:13.999Z] [BOT] 📍 [ROUTING] "Manager, Customer Success - Denver" @ datadog
[2026-01-20T07:16:13.999Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:16:14.006Z] [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T07:16:14.208Z] [BOT] ✅ Posted message: Manager, Customer Success - Denver @ datadog in #tech-jobs
[2026-01-20T07:16:14.208Z] [BOT] ✅ Industry: Manager, Customer Success - Denver @ datadog
[2026-01-20T07:16:14.209Z] [BOT] 💾 Added channel posting: Manager, Customer Success - Denver @ datadog → category channel (1 total channels)
[2026-01-20T07:16:14.209Z] [BOT] 💾 BEFORE ARCHIVING: 2806 jobs in database
[2026-01-20T07:16:14.211Z] [BOT] ✅ No jobs to archive (all 2806 jobs within 7-day window)
[2026-01-20T07:16:14.237Z] [BOT] 💾 Saved posted_jobs.json: 2806 active jobs
[2026-01-20T07:16:14.237Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:15.739Z] [BOT] 💾 Marked as posted: Manager, Customer Success - Denver @ datadog (instance #1)
[2026-01-20T07:16:15.739Z] [BOT] 💾 BEFORE ARCHIVING: 2807 jobs in database
[2026-01-20T07:16:15.741Z] [BOT] ✅ No jobs to archive (all 2807 jobs within 7-day window)
[2026-01-20T07:16:15.757Z] [BOT] 💾 Saved posted_jobs.json: 2807 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:15.758Z] [BOT] 💾 Marked as posted: Manager, Customer Success - Denver @ datadog (instance #1)
[2026-01-20T07:16:15.758Z] [BOT] 💾 BEFORE ARCHIVING: 2808 jobs in database
[2026-01-20T07:16:15.759Z] [BOT] ✅ No jobs to archive (all 2808 jobs within 7-day window)
[2026-01-20T07:16:15.779Z] [BOT] 💾 Saved posted_jobs.json: 2808 active jobs
[2026-01-20T07:16:15.779Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:15.779Z] [BOT] 📍 [ROUTING] "Manager I, Developer Advocacy" @ datadog
[2026-01-20T07:16:15.780Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:16:16.144Z] [BOT] ✅ Posted message: Manager I, Developer Advocacy @ datadog in #tech-jobs
[2026-01-20T07:16:16.144Z] [BOT] ✅ Industry: Manager I, Developer Advocacy @ datadog
[2026-01-20T07:16:16.145Z] [BOT] 💾 Added channel posting: Manager I, Developer Advocacy @ datadog → category channel (1 total channels)
[2026-01-20T07:16:16.145Z] [BOT] 💾 BEFORE ARCHIVING: 2809 jobs in database
[2026-01-20T07:16:16.146Z] [BOT] ✅ No jobs to archive (all 2809 jobs within 7-day window)
[2026-01-20T07:16:16.164Z] [BOT] 💾 Saved posted_jobs.json: 2809 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:17.987Z] [BOT] ✅ Posted message: Manager I, Developer Advocacy @ datadog in #JID_98d4f0de
[2026-01-20T07:16:17.988Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T07:16:17.988Z] [BOT] 💾 Added channel posting: Manager I, Developer Advocacy @ datadog → location channel (2 total channels)
[2026-01-20T07:16:17.988Z] [BOT] 💾 BEFORE ARCHIVING: 2809 jobs in database
[2026-01-20T07:16:17.990Z] [BOT] ✅ No jobs to archive (all 2809 jobs within 7-day window)
[2026-01-20T07:16:18.007Z] [BOT] 💾 Saved posted_jobs.json: 2809 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:19.507Z] [BOT] 💾 Marked as posted: Manager I, Developer Advocacy @ datadog (instance #1)
[2026-01-20T07:16:19.507Z] [BOT] 💾 BEFORE ARCHIVING: 2810 jobs in database
[2026-01-20T07:16:19.509Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T07:16:19.510Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-20T07:16:19.510Z] [BOT] ✅ Archiving complete: 1 archived, 2809 active
[2026-01-20T07:16:19.526Z] [BOT] 💾 Saved posted_jobs.json: 2809 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:19.527Z] [BOT] 📍 [ROUTING] "Manager I, Engineering - APM SDK Capabilities" @ datadog
[2026-01-20T07:16:19.527Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:16:19.677Z] [BOT] ✅ Posted message: Manager I, Engineering - APM SDK Capabilities @ datadog in #tech-jobs
[2026-01-20T07:16:19.678Z] [BOT] ✅ Industry: Manager I, Engineering - APM SDK Capabilities @ datadog
[2026-01-20T07:16:19.678Z] [BOT] 💾 Added channel posting: Manager I, Engineering - APM SDK Capabilities @ datadog → category channel (1 total channels)
[2026-01-20T07:16:19.678Z] [BOT] 💾 BEFORE ARCHIVING: 2810 jobs in database
[2026-01-20T07:16:19.680Z] [BOT] ✅ No jobs to archive (all 2810 jobs within 7-day window)
[2026-01-20T07:16:19.696Z] [BOT] 💾 Saved posted_jobs.json: 2810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:21.364Z] [BOT] ✅ Posted message: Manager I, Engineering - APM SDK Capabilities @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:16:21.364Z] [BOT] 💾 Added channel posting: Manager I, Engineering - APM SDK Capabilities @ datadog → location channel (2 total channels)
[2026-01-20T07:16:21.364Z] [BOT] 💾 BEFORE ARCHIVING: 2810 jobs in database
[2026-01-20T07:16:21.366Z] [BOT] ✅ No jobs to archive (all 2810 jobs within 7-day window)
[2026-01-20T07:16:21.382Z] [BOT] 💾 Saved posted_jobs.json: 2810 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:22.883Z] [BOT] 💾 Marked as posted: Manager I, Engineering - APM SDK Capabilities @ datadog (instance #1)
[2026-01-20T07:16:22.883Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-20T07:16:22.885Z] [BOT] ✅ No jobs to archive (all 2811 jobs within 7-day window)
[2026-01-20T07:16:22.905Z] [BOT] 💾 Saved posted_jobs.json: 2811 active jobs
[2026-01-20T07:16:22.905Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:22.905Z] [BOT] 💾 Marked as posted: Manager I, Engineering - Infrastructure Remediation @ datadog (instance #1)
[2026-01-20T07:16:22.906Z] [BOT] 💾 BEFORE ARCHIVING: 2812 jobs in database
[2026-01-20T07:16:22.907Z] [BOT] ✅ No jobs to archive (all 2812 jobs within 7-day window)
[2026-01-20T07:16:22.925Z] [BOT] 💾 Saved posted_jobs.json: 2812 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:22.925Z] [BOT] 💾 Marked as posted: Manager I, Engineering - Language Platform @ datadog (instance #1)
[2026-01-20T07:16:22.925Z] [BOT] 💾 BEFORE ARCHIVING: 2813 jobs in database
[2026-01-20T07:16:22.927Z] [BOT] ✅ No jobs to archive (all 2813 jobs within 7-day window)
[2026-01-20T07:16:22.944Z] [BOT] 💾 Saved posted_jobs.json: 2813 active jobs
[2026-01-20T07:16:22.944Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:22.945Z] [BOT] 📍 [ROUTING] "Manager I, Engineering - Cloud SIEM - Security Data Enrichment" @ datadog
[2026-01-20T07:16:22.945Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:16:23.279Z] [BOT] ✅ Posted message: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog in #tech-jobs
[2026-01-20T07:16:23.279Z] [BOT] ✅ Industry: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog
[2026-01-20T07:16:23.279Z] [BOT] 💾 Added channel posting: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog → category channel (1 total channels)
[2026-01-20T07:16:23.280Z] [BOT] 💾 BEFORE ARCHIVING: 2814 jobs in database
[2026-01-20T07:16:23.281Z] [BOT] ✅ No jobs to archive (all 2814 jobs within 7-day window)
[2026-01-20T07:16:23.298Z] [BOT] 💾 Saved posted_jobs.json: 2814 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:24.946Z] [BOT] ✅ Posted message: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:16:24.946Z] [BOT] 💾 Added channel posting: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog → location channel (2 total channels)
[2026-01-20T07:16:24.947Z] [BOT] 💾 BEFORE ARCHIVING: 2814 jobs in database
[2026-01-20T07:16:24.950Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (2 total in archive)
[2026-01-20T07:16:24.950Z] [BOT] ✅ Archiving complete: 1 archived, 2813 active
[2026-01-20T07:16:24.965Z] [BOT] 💾 Saved posted_jobs.json: 2813 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:26.467Z] [BOT] 💾 Marked as posted: Manager I, Engineering - Cloud SIEM - Security Data Enrichment @ datadog (instance #1)
[2026-01-20T07:16:26.468Z] [BOT] 💾 BEFORE ARCHIVING: 2814 jobs in database
[2026-01-20T07:16:26.469Z] [BOT] ✅ No jobs to archive (all 2814 jobs within 7-day window)
[2026-01-20T07:16:26.487Z] [BOT] 💾 Saved posted_jobs.json: 2814 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:26.488Z] [BOT] 📍 [ROUTING] "Manager, Networking" @ datadog
[2026-01-20T07:16:26.488Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:16:26.628Z] [BOT] ✅ Posted message: Manager, Networking @ datadog in #tech-jobs
  ✅ Industry: Manager, Networking @ datadog
[2026-01-20T07:16:26.628Z] [BOT] 💾 Added channel posting: Manager, Networking @ datadog → category channel (1 total channels)
[2026-01-20T07:16:26.628Z] [BOT] 💾 BEFORE ARCHIVING: 2815 jobs in database
[2026-01-20T07:16:26.630Z] [BOT] ✅ No jobs to archive (all 2815 jobs within 7-day window)
[2026-01-20T07:16:26.648Z] [BOT] 💾 Saved posted_jobs.json: 2815 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:28.295Z] [BOT] ✅ Posted message: Manager, Networking @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:16:28.295Z] [BOT] 💾 Added channel posting: Manager, Networking @ datadog → location channel (2 total channels)
[2026-01-20T07:16:28.296Z] [BOT] 💾 BEFORE ARCHIVING: 2815 jobs in database
[2026-01-20T07:16:28.297Z] [BOT] ✅ No jobs to archive (all 2815 jobs within 7-day window)
[2026-01-20T07:16:28.314Z] [BOT] 💾 Saved posted_jobs.json: 2815 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:29.816Z] [BOT] 💾 Marked as posted: Manager, Networking @ datadog (instance #1)
[2026-01-20T07:16:29.816Z] [BOT] 💾 BEFORE ARCHIVING: 2816 jobs in database
[2026-01-20T07:16:29.818Z] [BOT] ✅ No jobs to archive (all 2816 jobs within 7-day window)
[2026-01-20T07:16:29.835Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:29.835Z] [BOT] 📍 [ROUTING] "Manager, People Analytics Data Platform" @ datadog
   Category: TECH (matched: "data")
[2026-01-20T07:16:29.835Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T07:16:29.974Z] [BOT] ✅ Posted message: Manager, People Analytics Data Platform @ datadog in #tech-jobs
  ✅ Industry: Manager, People Analytics Data Platform @ datadog
[2026-01-20T07:16:29.975Z] [BOT] 💾 Added channel posting: Manager, People Analytics Data Platform @ datadog → category channel (1 total channels)
[2026-01-20T07:16:29.975Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T07:16:29.977Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-20T07:16:29.996Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:31.775Z] [BOT] ✅ Posted message: Manager, People Analytics Data Platform @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:16:31.776Z] [BOT] 💾 Added channel posting: Manager, People Analytics Data Platform @ datadog → location channel (2 total channels)
[2026-01-20T07:16:31.776Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T07:16:31.778Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (3 total in archive)
[2026-01-20T07:16:31.779Z] [BOT] ✅ Archiving complete: 1 archived, 2816 active
[2026-01-20T07:16:31.795Z] [BOT] 💾 Saved posted_jobs.json: 2816 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:33.297Z] [BOT] 💾 Marked as posted: Manager, People Analytics Data Platform @ datadog (instance #1)
[2026-01-20T07:16:33.297Z] [BOT] 💾 BEFORE ARCHIVING: 2817 jobs in database
[2026-01-20T07:16:33.299Z] [BOT] ✅ No jobs to archive (all 2817 jobs within 7-day window)
[2026-01-20T07:16:33.316Z] [BOT] 💾 Saved posted_jobs.json: 2817 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:33.317Z] [BOT] 📍 [ROUTING] "Principal Partner Manager - Cloud Alliances (AWS)" @ datadog
[2026-01-20T07:16:33.317Z] [BOT] Category: TECH (matched: "cloud")
   Channel: tech-jobs (1462...4987)
[2026-01-20T07:16:33.459Z] [BOT] ✅ Posted message: Principal Partner Manager - Cloud Alliances (AWS) @ datadog in #tech-jobs
  ✅ Industry: Principal Partner Manager - Cloud Alliances (AWS) @ datadog
[2026-01-20T07:16:33.459Z] [BOT] 💾 Added channel posting: Principal Partner Manager - Cloud Alliances (AWS) @ datadog → category channel (1 total channels)
[2026-01-20T07:16:33.459Z] [BOT] 💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-20T07:16:33.461Z] [BOT] ✅ No jobs to archive (all 2818 jobs within 7-day window)
[2026-01-20T07:16:33.478Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:35.225Z] [BOT] ✅ Posted message: Principal Partner Manager - Cloud Alliances (AWS) @ datadog in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T07:16:35.226Z] [BOT] 💾 Added channel posting: Principal Partner Manager - Cloud Alliances (AWS) @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2818 jobs in database
[2026-01-20T07:16:35.227Z] [BOT] ✅ No jobs to archive (all 2818 jobs within 7-day window)
[2026-01-20T07:16:35.243Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:36.744Z] [BOT] 💾 Marked as posted: Principal Partner Manager - Cloud Alliances (AWS) @ datadog (instance #1)
[2026-01-20T07:16:36.744Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T07:16:36.746Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T07:16:36.763Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:39.764Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-20T07:16:39.764Z] [BOT] 📍 [ROUTING] "Manager II, Engineering - Bits AI Security Analyst" @ datadog
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T07:16:39.764Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T07:16:39.971Z] [BOT] ✅ Posted message: Manager II, Engineering - Bits AI Security Analyst @ datadog in #ai-jobs
  ✅ Industry: Manager II, Engineering - Bits AI Security Analyst @ datadog
[2026-01-20T07:16:39.972Z] [BOT] 💾 Added channel posting: Manager II, Engineering - Bits AI Security Analyst @ datadog → category channel (1 total channels)
[2026-01-20T07:16:39.972Z] [BOT] 💾 BEFORE ARCHIVING: 2820 jobs in database
[2026-01-20T07:16:39.975Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (4 total in archive)
[2026-01-20T07:16:39.975Z] [BOT] ✅ Archiving complete: 1 archived, 2819 active
[2026-01-20T07:16:39.989Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:41.681Z] [BOT] ✅ Posted message: Manager II, Engineering - Bits AI Security Analyst @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T07:16:41.681Z] [BOT] 💾 Added channel posting: Manager II, Engineering - Bits AI Security Analyst @ datadog → location channel (2 total channels)
[2026-01-20T07:16:41.681Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T07:16:41.684Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (5 total in archive)
[2026-01-20T07:16:41.684Z] [BOT] ✅ Archiving complete: 1 archived, 2818 active
[2026-01-20T07:16:41.700Z] [BOT] 💾 Saved posted_jobs.json: 2818 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:43.201Z] [BOT] 💾 Marked as posted: Manager II, Engineering - Bits AI Security Analyst @ datadog (instance #1)
[2026-01-20T07:16:43.201Z] [BOT] 💾 BEFORE ARCHIVING: 2819 jobs in database
[2026-01-20T07:16:43.203Z] [BOT] ✅ No jobs to archive (all 2819 jobs within 7-day window)
[2026-01-20T07:16:43.220Z] [BOT] 💾 Saved posted_jobs.json: 2819 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T07:16:46.221Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-20T07:16:46.222Z] [BOT] ⏭️  Skipping duplicate: JID_a7ad74f4 (posted within 7 days)
[2026-01-20T07:16:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_3ffc39ad (posted within 7 days)
[2026-01-20T07:16:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_8de85186 (posted within 7 days)
[2026-01-20T07:16:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_582fe66a (posted within 7 days)
[2026-01-20T07:16:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_a336abed (posted within 7 days)
[2026-01-20T07:16:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_ace0ebe9 (posted within 7 days)
[2026-01-20T07:16:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_b286e46f (posted within 7 days)
[2026-01-20T07:16:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_7d7c548c (posted within 7 days)
[2026-01-20T07:16:46.328Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[2026-01-20T07:16:46.518Z] [BOT] ✅ Saved pending queue: 2797 total (2777 pending, 12 enriched, 8 posted)
[2026-01-20T07:16:46.518Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T07:16:46.579Z] [BOT] 📂 Loaded 5344 existing routing entries
[2026-01-20T07:16:46.652Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 5352
   Timestamp: 2026-01-20T07:16:46.629Z
[2026-01-20T07:16:46.652Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T07:16:46.652Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-20T07:16:46.653Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 4
   Top channels:
     1. #tech-jobs: 7 posts
     2. #JID_98d4f0de: 6 posts
     3. #JID_ead674af: 1 posts
[2026-01-20T07:16:46.653Z] [BOT] 4. #ai-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-20T07:16:48.679Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] ⚠️ No channel configured for job: Partner Marketing Manager (Public Sector) - skipping
- [BOT ERROR] ⚠️ No channel configured for job: Inclusion Program Manager - NYC - skipping
- [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*