# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T19:06:07.553Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T19:05:29.604Z] ========================================
[2026-01-20T19:05:29.606Z] Discord Bot Execution Log
[2026-01-20T19:05:29.606Z] Environment: GitHub Actions
[2026-01-20T19:05:29.607Z] Node Version: v20.19.6
[2026-01-20T19:05:29.607Z] ========================================
[2026-01-20T19:05:29.607Z] Environment Variables Check:
[2026-01-20T19:05:29.607Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T19:05:29.607Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.607Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T19:05:29.607Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T19:05:29.607Z] 
Multi-Channel Configuration:
[2026-01-20T19:05:29.607Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.607Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.608Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.608Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.608Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.608Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.608Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.608Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.608Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T19:05:29.608Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T19:05:29.608Z] 
Data Files Check:
[2026-01-20T19:05:29.609Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152637 bytes)
[2026-01-20T19:05:29.620Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1635582 bytes)
[2026-01-20T19:05:29.620Z] 
========================================
[2026-01-20T19:05:29.620Z] Starting Enhanced Discord Bot...
[2026-01-20T19:05:29.620Z] ========================================
[2026-01-20T19:05:30.147Z] [BOT] ✅ Loaded V2 database: 2937 jobs
[2026-01-20T19:05:30.629Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T19:05:30.629Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T19:05:30.630Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T19:05:30.750Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Partner Marketing Manager (Public Sector) at datadog
[2026-01-20T19:05:30.753Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T19:05:30.754Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T19:05:30.754Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T19:05:30.755Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-20T19:05:30.755Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Product Manager, Math @ duolingo: new york, seattle
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T19:05:30.755Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T19:05:30.759Z] [BOT] 📌 Posting 10 jobs to #tech-jobs
[2026-01-20T19:05:30.760Z] [BOT] 📍 [ROUTING] "Partner Marketing Manager (Public Sector)" @ datadog
[2026-01-20T19:05:30.760Z] [BOT] Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:30.764Z] [BOT ERROR] (node:2384) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T19:05:30.908Z] [BOT] ✅ Posted message: Partner Marketing Manager (Public Sector) @ datadog in #tech-jobs
[2026-01-20T19:05:30.908Z] [BOT] ✅ Industry: Partner Marketing Manager (Public Sector) @ datadog
[2026-01-20T19:05:30.909Z] [BOT] 💾 Added channel posting: Partner Marketing Manager (Public Sector) @ datadog → category channel (1 total channels)
[2026-01-20T19:05:30.909Z] [BOT] 💾 BEFORE ARCHIVING: 2938 jobs in database
[2026-01-20T19:05:30.911Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T19:05:30.916Z] [BOT] 📦 Archived 32 jobs to 2026-01.json (32 total in archive)
[2026-01-20T19:05:30.916Z] [BOT] ✅ Archiving complete: 32 archived, 2906 active
[2026-01-20T19:05:30.934Z] [BOT] 💾 Saved posted_jobs.json: 2906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:32.588Z] [BOT] ✅ Posted message: Partner Marketing Manager (Public Sector) @ datadog in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T19:05:32.589Z] [BOT] 💾 Added channel posting: Partner Marketing Manager (Public Sector) @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2906 jobs in database
[2026-01-20T19:05:32.591Z] [BOT] ✅ No jobs to archive (all 2906 jobs within 7-day window)
[2026-01-20T19:05:32.607Z] [BOT] 💾 Saved posted_jobs.json: 2906 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:34.108Z] [BOT] 💾 Marked as posted: Partner Marketing Manager (Public Sector) @ datadog (instance #1)
[2026-01-20T19:05:34.108Z] [BOT] 💾 BEFORE ARCHIVING: 2907 jobs in database
[2026-01-20T19:05:34.110Z] [BOT] ✅ No jobs to archive (all 2907 jobs within 7-day window)
[2026-01-20T19:05:34.128Z] [BOT] 💾 Saved posted_jobs.json: 2907 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:34.129Z] [BOT] 📍 [ROUTING] "Inclusion Program Manager - NYC" @ datadog
   Category: TECH (matched: "project-management")
[2026-01-20T19:05:34.129Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:34.298Z] [BOT] ✅ Posted message: Inclusion Program Manager - NYC @ datadog in #tech-jobs
  ✅ Industry: Inclusion Program Manager - NYC @ datadog
[2026-01-20T19:05:34.299Z] [BOT] 💾 Added channel posting: Inclusion Program Manager - NYC @ datadog → category channel (1 total channels)
[2026-01-20T19:05:34.299Z] [BOT] 💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-20T19:05:34.301Z] [BOT] ✅ No jobs to archive (all 2908 jobs within 7-day window)
[2026-01-20T19:05:34.319Z] [BOT] 💾 Saved posted_jobs.json: 2908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:36.041Z] [BOT] ✅ Posted message: Inclusion Program Manager - NYC @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T19:05:36.042Z] [BOT] 💾 Added channel posting: Inclusion Program Manager - NYC @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2908 jobs in database
[2026-01-20T19:05:36.044Z] [BOT] ✅ No jobs to archive (all 2908 jobs within 7-day window)
[2026-01-20T19:05:36.064Z] [BOT] 💾 Saved posted_jobs.json: 2908 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:37.566Z] [BOT] 💾 Marked as posted: Inclusion Program Manager - NYC @ datadog (instance #1)
[2026-01-20T19:05:37.566Z] [BOT] 💾 BEFORE ARCHIVING: 2909 jobs in database
[2026-01-20T19:05:37.568Z] [BOT] ✅ No jobs to archive (all 2909 jobs within 7-day window)
[2026-01-20T19:05:37.585Z] [BOT] 💾 Saved posted_jobs.json: 2909 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:37.586Z] [BOT] 📍 [ROUTING] "Product Marketing Manager - Log Management" @ datadog
   Category: TECH (matched: "product marketing")
[2026-01-20T19:05:37.586Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:37.855Z] [BOT] ✅ Posted message: Product Marketing Manager - Log Management @ datadog in #tech-jobs
  ✅ Industry: Product Marketing Manager - Log Management @ datadog
[2026-01-20T19:05:37.855Z] [BOT] 💾 Added channel posting: Product Marketing Manager - Log Management @ datadog → category channel (1 total channels)
[2026-01-20T19:05:37.856Z] [BOT] 💾 BEFORE ARCHIVING: 2910 jobs in database
[2026-01-20T19:05:37.857Z] [BOT] ✅ No jobs to archive (all 2910 jobs within 7-day window)
[2026-01-20T19:05:37.873Z] [BOT] 💾 Saved posted_jobs.json: 2910 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:39.518Z] [BOT] ✅ Posted message: Product Marketing Manager - Log Management @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T19:05:39.518Z] [BOT] 💾 Added channel posting: Product Marketing Manager - Log Management @ datadog → location channel (2 total channels)
[2026-01-20T19:05:39.518Z] [BOT] 💾 BEFORE ARCHIVING: 2910 jobs in database
[2026-01-20T19:05:39.520Z] [BOT] ✅ No jobs to archive (all 2910 jobs within 7-day window)
[2026-01-20T19:05:39.540Z] [BOT] 💾 Saved posted_jobs.json: 2910 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:41.040Z] [BOT] 💾 Marked as posted: Product Marketing Manager - Log Management @ datadog (instance #1)
[2026-01-20T19:05:41.041Z] [BOT] 💾 BEFORE ARCHIVING: 2911 jobs in database
[2026-01-20T19:05:41.042Z] [BOT] ✅ No jobs to archive (all 2911 jobs within 7-day window)
[2026-01-20T19:05:41.062Z] [BOT] 💾 Saved posted_jobs.json: 2911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:41.063Z] [BOT] 📍 [ROUTING] "Product Manager II - Incident Management" @ datadog
[2026-01-20T19:05:41.063Z] [BOT] Category: TECH (matched: "product")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:41.218Z] [BOT] ✅ Posted message: Product Manager II - Incident Management @ datadog in #tech-jobs
[2026-01-20T19:05:41.219Z] [BOT] ✅ Industry: Product Manager II - Incident Management @ datadog
[2026-01-20T19:05:41.219Z] [BOT] 💾 Added channel posting: Product Manager II - Incident Management @ datadog → category channel (1 total channels)
[2026-01-20T19:05:41.220Z] [BOT] 💾 BEFORE ARCHIVING: 2912 jobs in database
[2026-01-20T19:05:41.221Z] [BOT] ✅ No jobs to archive (all 2912 jobs within 7-day window)
[2026-01-20T19:05:41.238Z] [BOT] 💾 Saved posted_jobs.json: 2912 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:42.913Z] [BOT] ✅ Posted message: Product Manager II - Incident Management @ datadog in #JID_98d4f0de
[2026-01-20T19:05:42.913Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T19:05:42.914Z] [BOT] 💾 Added channel posting: Product Manager II - Incident Management @ datadog → location channel (2 total channels)
[2026-01-20T19:05:42.914Z] [BOT] 💾 BEFORE ARCHIVING: 2912 jobs in database
[2026-01-20T19:05:42.916Z] [BOT] ✅ No jobs to archive (all 2912 jobs within 7-day window)
[2026-01-20T19:05:42.933Z] [BOT] 💾 Saved posted_jobs.json: 2912 active jobs
[2026-01-20T19:05:42.933Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:44.434Z] [BOT] 💾 Marked as posted: Product Manager II - Incident Management @ datadog (instance #1)
[2026-01-20T19:05:44.434Z] [BOT] 💾 BEFORE ARCHIVING: 2913 jobs in database
[2026-01-20T19:05:44.436Z] [BOT] ✅ No jobs to archive (all 2913 jobs within 7-day window)
[2026-01-20T19:05:44.454Z] [BOT] 💾 Saved posted_jobs.json: 2913 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:44.454Z] [BOT] 💾 Marked as posted: Product Manager II - Software Delivery Suite @ datadog (instance #1)
[2026-01-20T19:05:44.454Z] [BOT] 💾 BEFORE ARCHIVING: 2914 jobs in database
[2026-01-20T19:05:44.455Z] [BOT] ✅ No jobs to archive (all 2914 jobs within 7-day window)
[2026-01-20T19:05:44.473Z] [BOT] 💾 Saved posted_jobs.json: 2914 active jobs
[2026-01-20T19:05:44.473Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:44.473Z] [BOT] 📍 [ROUTING] "Senior Technical Program Manager, Knowledge Systems" @ datadog
[2026-01-20T19:05:44.473Z] [BOT] Category: TECH (matched: "project-management")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:44.626Z] [BOT] ✅ Posted message: Senior Technical Program Manager, Knowledge Systems @ datadog in #tech-jobs
[2026-01-20T19:05:44.626Z] [BOT] ✅ Industry: Senior Technical Program Manager, Knowledge Systems @ datadog
[2026-01-20T19:05:44.627Z] [BOT] 💾 Added channel posting: Senior Technical Program Manager, Knowledge Systems @ datadog → category channel (1 total channels)
[2026-01-20T19:05:44.627Z] [BOT] 💾 BEFORE ARCHIVING: 2915 jobs in database
[2026-01-20T19:05:44.629Z] [BOT] ✅ No jobs to archive (all 2915 jobs within 7-day window)
[2026-01-20T19:05:44.645Z] [BOT] 💾 Saved posted_jobs.json: 2915 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:46.146Z] [BOT] 💾 Marked as posted: Senior Technical Program Manager, Knowledge Systems @ datadog (instance #1)
[2026-01-20T19:05:46.146Z] [BOT] 💾 BEFORE ARCHIVING: 2916 jobs in database
[2026-01-20T19:05:46.148Z] [BOT] ✅ No jobs to archive (all 2916 jobs within 7-day window)
[2026-01-20T19:05:46.166Z] [BOT] 💾 Saved posted_jobs.json: 2916 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:46.166Z] [BOT] 📍 [ROUTING] "Staff Product Manager, Growth & SEO" @ discord
[2026-01-20T19:05:46.166Z] [BOT] Category: TECH (matched: "product")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:46.292Z] [BOT] ✅ Posted message: Staff Product Manager, Growth & SEO @ discord in #tech-jobs
[2026-01-20T19:05:46.292Z] [BOT] ✅ Industry: Staff Product Manager, Growth & SEO @ discord
[2026-01-20T19:05:46.293Z] [BOT] 💾 Added channel posting: Staff Product Manager, Growth & SEO @ discord → category channel (1 total channels)
[2026-01-20T19:05:46.293Z] [BOT] 💾 BEFORE ARCHIVING: 2917 jobs in database
[2026-01-20T19:05:46.295Z] [BOT] ✅ No jobs to archive (all 2917 jobs within 7-day window)
[2026-01-20T19:05:46.311Z] [BOT] 💾 Saved posted_jobs.json: 2917 active jobs
[2026-01-20T19:05:46.311Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:47.812Z] [BOT] 💾 Marked as posted: Staff Product Manager, Growth & SEO @ discord (instance #1)
💾 BEFORE ARCHIVING: 2918 jobs in database
[2026-01-20T19:05:47.813Z] [BOT] ✅ No jobs to archive (all 2918 jobs within 7-day window)
[2026-01-20T19:05:47.831Z] [BOT] 💾 Saved posted_jobs.json: 2918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:47.831Z] [BOT] 📍 [ROUTING] "Designer Advocate - Figma Weave (New York, United States)" @ figma
   Category: TECH (matched: "pm")
[2026-01-20T19:05:47.831Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:48.044Z] [BOT] ✅ Posted message: Designer Advocate - Figma Weave (New York, United States) @ figma in #tech-jobs
  ✅ Industry: Designer Advocate - Figma Weave (New York, United States) @ figma
[2026-01-20T19:05:48.045Z] [BOT] 💾 Added channel posting: Designer Advocate - Figma Weave (New York, United States) @ figma → category channel (1 total channels)
[2026-01-20T19:05:48.045Z] [BOT] 💾 BEFORE ARCHIVING: 2919 jobs in database
[2026-01-20T19:05:48.047Z] [BOT] ✅ No jobs to archive (all 2919 jobs within 7-day window)
[2026-01-20T19:05:48.066Z] [BOT] 💾 Saved posted_jobs.json: 2919 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:49.759Z] [BOT] ✅ Posted message: Designer Advocate - Figma Weave (New York, United States) @ figma in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T19:05:49.760Z] [BOT] 💾 Added channel posting: Designer Advocate - Figma Weave (New York, United States) @ figma → location channel (2 total channels)
[2026-01-20T19:05:49.760Z] [BOT] 💾 BEFORE ARCHIVING: 2919 jobs in database
[2026-01-20T19:05:49.762Z] [BOT] ✅ No jobs to archive (all 2919 jobs within 7-day window)
[2026-01-20T19:05:49.778Z] [BOT] 💾 Saved posted_jobs.json: 2919 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:51.280Z] [BOT] 💾 Marked as posted: Designer Advocate - Figma Weave (New York, United States) @ figma (instance #1)
[2026-01-20T19:05:51.280Z] [BOT] 💾 BEFORE ARCHIVING: 2920 jobs in database
[2026-01-20T19:05:51.282Z] [BOT] ✅ No jobs to archive (all 2920 jobs within 7-day window)
[2026-01-20T19:05:51.300Z] [BOT] 💾 Saved posted_jobs.json: 2920 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:51.300Z] [BOT] 📍 [ROUTING] "Product Marketing Manager, Duolingo Chess" @ duolingo
   Category: TECH (matched: "product marketing")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:51.469Z] [BOT] ✅ Posted message: Product Marketing Manager, Duolingo Chess @ duolingo in #tech-jobs
  ✅ Industry: Product Marketing Manager, Duolingo Chess @ duolingo
[2026-01-20T19:05:51.470Z] [BOT] 💾 Added channel posting: Product Marketing Manager, Duolingo Chess @ duolingo → category channel (1 total channels)
[2026-01-20T19:05:51.470Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-20T19:05:51.472Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-20T19:05:51.490Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:53.141Z] [BOT] ✅ Posted message: Product Marketing Manager, Duolingo Chess @ duolingo in #JID_98d4f0de
[2026-01-20T19:05:53.141Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T19:05:53.141Z] [BOT] 💾 Added channel posting: Product Marketing Manager, Duolingo Chess @ duolingo → location channel (2 total channels)
[2026-01-20T19:05:53.141Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-20T19:05:53.143Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-20T19:05:53.158Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:54.660Z] [BOT] 💾 Marked as posted: Product Marketing Manager, Duolingo Chess @ duolingo (instance #1)
[2026-01-20T19:05:54.660Z] [BOT] 💾 BEFORE ARCHIVING: 2922 jobs in database
[2026-01-20T19:05:54.662Z] [BOT] ✅ No jobs to archive (all 2922 jobs within 7-day window)
[2026-01-20T19:05:54.679Z] [BOT] 💾 Saved posted_jobs.json: 2922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:54.679Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Ads" @ duolingo
[2026-01-20T19:05:54.679Z] [BOT] Category: TECH (matched: "product")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:54.822Z] [BOT] ✅ Posted message: Senior Product Manager, Ads @ duolingo in #tech-jobs
[2026-01-20T19:05:54.822Z] [BOT] ✅ Industry: Senior Product Manager, Ads @ duolingo
[2026-01-20T19:05:54.823Z] [BOT] 💾 Added channel posting: Senior Product Manager, Ads @ duolingo → category channel (1 total channels)
[2026-01-20T19:05:54.823Z] [BOT] 💾 BEFORE ARCHIVING: 2923 jobs in database
[2026-01-20T19:05:54.824Z] [BOT] ✅ No jobs to archive (all 2923 jobs within 7-day window)
[2026-01-20T19:05:54.841Z] [BOT] 💾 Saved posted_jobs.json: 2923 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:56.555Z] [BOT] ✅ Posted message: Senior Product Manager, Ads @ duolingo in #JID_98d4f0de
[2026-01-20T19:05:56.555Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T19:05:56.555Z] [BOT] 💾 Added channel posting: Senior Product Manager, Ads @ duolingo → location channel (2 total channels)
[2026-01-20T19:05:56.555Z] [BOT] 💾 BEFORE ARCHIVING: 2923 jobs in database
[2026-01-20T19:05:56.557Z] [BOT] ✅ No jobs to archive (all 2923 jobs within 7-day window)
[2026-01-20T19:05:56.573Z] [BOT] 💾 Saved posted_jobs.json: 2923 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:58.075Z] [BOT] 💾 Marked as posted: Senior Product Manager, Ads @ duolingo (instance #1)
[2026-01-20T19:05:58.075Z] [BOT] 💾 BEFORE ARCHIVING: 2924 jobs in database
[2026-01-20T19:05:58.077Z] [BOT] ✅ No jobs to archive (all 2924 jobs within 7-day window)
[2026-01-20T19:05:58.094Z] [BOT] 💾 Saved posted_jobs.json: 2924 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:58.094Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Math" @ duolingo
[2026-01-20T19:05:58.094Z] [BOT] Category: TECH (matched: "product")
   Channel: tech-jobs (1462...4987)
[2026-01-20T19:05:58.231Z] [BOT] ✅ Posted message: Senior Product Manager, Math @ duolingo in #tech-jobs
[2026-01-20T19:05:58.231Z] [BOT] ✅ Industry: Senior Product Manager, Math @ duolingo
[2026-01-20T19:05:58.232Z] [BOT] 💾 Added channel posting: Senior Product Manager, Math @ duolingo → category channel (1 total channels)
[2026-01-20T19:05:58.232Z] [BOT] 💾 BEFORE ARCHIVING: 2925 jobs in database
[2026-01-20T19:05:58.233Z] [BOT] ✅ No jobs to archive (all 2925 jobs within 7-day window)
[2026-01-20T19:05:58.250Z] [BOT] 💾 Saved posted_jobs.json: 2925 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:05:59.894Z] [BOT] ✅ Posted message: Senior Product Manager, Math @ duolingo in #JID_98d4f0de
[2026-01-20T19:05:59.894Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T19:05:59.894Z] [BOT] 💾 Added channel posting: Senior Product Manager, Math @ duolingo → location channel (2 total channels)
[2026-01-20T19:05:59.894Z] [BOT] 💾 BEFORE ARCHIVING: 2925 jobs in database
[2026-01-20T19:05:59.896Z] [BOT] ✅ No jobs to archive (all 2925 jobs within 7-day window)
[2026-01-20T19:05:59.914Z] [BOT] 💾 Saved posted_jobs.json: 2925 active jobs
[2026-01-20T19:05:59.914Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T19:06:01.416Z] [BOT] 💾 Marked as posted: Senior Product Manager, Math @ duolingo (instance #1)
[2026-01-20T19:06:01.416Z] [BOT] 💾 BEFORE ARCHIVING: 2926 jobs in database
[2026-01-20T19:06:01.418Z] [BOT] ✅ No jobs to archive (all 2926 jobs within 7-day window)
[2026-01-20T19:06:01.435Z] [BOT] 💾 Saved posted_jobs.json: 2926 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:06:01.436Z] [BOT] 💾 Marked as posted: Senior Product Manager, Math @ duolingo (instance #1)
💾 BEFORE ARCHIVING: 2927 jobs in database
[2026-01-20T19:06:01.437Z] [BOT] ✅ No jobs to archive (all 2927 jobs within 7-day window)
[2026-01-20T19:06:01.454Z] [BOT] 💾 Saved posted_jobs.json: 2927 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T19:06:04.454Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T19:06:04.455Z] [BOT] ⏭️  Skipping duplicate: JID_10893c2a (posted within 7 days)
[2026-01-20T19:06:04.455Z] [BOT] ⏭️  Skipping duplicate: JID_f519db33 (posted within 7 days)
⏭️  Skipping duplicate: JID_8a6e32f3 (posted within 7 days)
[2026-01-20T19:06:04.456Z] [BOT] ⏭️  Skipping duplicate: JID_15c89ab7 (posted within 7 days)
⏭️  Skipping duplicate: JID_f63d02e6 (posted within 7 days)
⏭️  Skipping duplicate: JID_90fbb5bf (posted within 7 days)
[2026-01-20T19:06:04.456Z] [BOT] ⏭️  Skipping duplicate: JID_02c50a26 (posted within 7 days)
[2026-01-20T19:06:04.456Z] [BOT] ⏭️  Skipping duplicate: JID_0f51fd8b (posted within 7 days)
[2026-01-20T19:06:04.456Z] [BOT] ⏭️  Skipping duplicate: JID_cff2e5a7 (posted within 7 days)
[2026-01-20T19:06:04.457Z] [BOT] ⏭️  Skipping duplicate: JID_00abb0d2 (posted within 7 days)
[2026-01-20T19:06:04.558Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[2026-01-20T19:06:04.743Z] [BOT] ✅ Saved pending queue: 2771 total (2751 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T19:06:04.808Z] [BOT] 📂 Loaded 5433 existing routing entries
[2026-01-20T19:06:04.881Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5443
   Timestamp: 2026-01-20T19:06:04.858Z
[2026-01-20T19:06:04.881Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 18
[2026-01-20T19:06:04.881Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 0
[2026-01-20T19:06:04.882Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T19:06:04.882Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 3
   Top channels:
     1. #tech-jobs: 10 posts
[2026-01-20T19:06:04.882Z] [BOT] 2. #JID_98d4f0de: 7 posts
     3. #JID_ead674af: 1 posts
[2026-01-20T19:06:04.882Z] [BOT] [STATS] Channel stats saved
[2026-01-20T19:06:06.908Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2384) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*