# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T22:56:19.445Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T22:55:41.883Z] ========================================
[2026-01-20T22:55:41.885Z] Discord Bot Execution Log
[2026-01-20T22:55:41.885Z] Environment: GitHub Actions
[2026-01-20T22:55:41.885Z] Node Version: v20.19.6
[2026-01-20T22:55:41.885Z] ========================================
[2026-01-20T22:55:41.885Z] Environment Variables Check:
[2026-01-20T22:55:41.885Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T22:55:41.885Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.885Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T22:55:41.886Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T22:55:41.886Z] 
Multi-Channel Configuration:
[2026-01-20T22:55:41.886Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.886Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.886Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.886Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.886Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.886Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.886Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.886Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.886Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T22:55:41.886Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T22:55:41.887Z] 
Data Files Check:
[2026-01-20T22:55:41.888Z] .github/data/new_jobs.json: ✅ Exists (10 items, 170364 bytes)
[2026-01-20T22:55:41.898Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1685168 bytes)
[2026-01-20T22:55:41.898Z] 
========================================
[2026-01-20T22:55:41.898Z] Starting Enhanced Discord Bot...
[2026-01-20T22:55:41.898Z] ========================================
[2026-01-20T22:55:42.462Z] [BOT] ✅ Loaded V2 database: 3006 jobs
[2026-01-20T22:55:43.259Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T22:55:43.259Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T22:55:43.260Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T22:55:43.373Z] [BOT] ✅ Loaded pending queue: 2750 total (2730 pending, 20 enriched, 0 posted)
[2026-01-20T22:55:43.375Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Core Enterprise Account Executive EST/CST - Remote - Houston, TX at samsara
[2026-01-20T22:55:43.379Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T22:55:43.379Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T22:55:43.379Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T22:55:43.380Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-20T22:55:43.380Z] [BOT] (6 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Director, Sales Commissions @ samsara: phoenix, arizona, united states, atlanta, georgia, united states
   - Mid-Market Account Development Representative - Outbound @ samsara: phoenix, atlanta
[2026-01-20T22:55:43.381Z] [BOT] - Select Major Account Executive EST/CST @ samsara: milwaukee, chicago
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T22:55:43.385Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T22:55:43.385Z] [BOT] 📍 [ROUTING] "Core Enterprise Account Executive EST/CST - Remote - Houston, TX" @ samsara
[2026-01-20T22:55:43.386Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: JID_fb739488 (1462...4531)
[2026-01-20T22:55:43.390Z] [BOT ERROR] (node:2415) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T22:55:43.621Z] [BOT] ✅ Posted message: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara in #JID_fb739488
[2026-01-20T22:55:43.621Z] [BOT] ✅ Industry: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara
[2026-01-20T22:55:43.622Z] [BOT] 💾 Added channel posting: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara → category channel (1 total channels)
[2026-01-20T22:55:43.622Z] [BOT] 💾 BEFORE ARCHIVING: 3007 jobs in database
[2026-01-20T22:55:43.625Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T22:55:43.629Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-20T22:55:43.630Z] [BOT] ✅ Archiving complete: 10 archived, 2997 active
[2026-01-20T22:55:43.652Z] [BOT] 💾 Saved posted_jobs.json: 2997 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:45.156Z] [BOT] 💾 Marked as posted: Core Enterprise Account Executive EST/CST - Remote - Houston, TX @ samsara (instance #1)
[2026-01-20T22:55:45.156Z] [BOT] 💾 BEFORE ARCHIVING: 2998 jobs in database
[2026-01-20T22:55:45.158Z] [BOT] ✅ No jobs to archive (all 2998 jobs within 7-day window)
[2026-01-20T22:55:45.175Z] [BOT] 💾 Saved posted_jobs.json: 2998 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:48.175Z] [BOT] 📌 Posting 9 jobs to #tech-jobs
[2026-01-20T22:55:48.175Z] [BOT] 📍 [ROUTING] "Customer Success Associate" @ samsara
[2026-01-20T22:55:48.175Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:55:48.473Z] [BOT] ✅ Posted message: Customer Success Associate @ samsara in #tech-jobs
[2026-01-20T22:55:48.473Z] [BOT] ✅ Industry: Customer Success Associate @ samsara
[2026-01-20T22:55:48.474Z] [BOT] 💾 Added channel posting: Customer Success Associate @ samsara → category channel (1 total channels)
[2026-01-20T22:55:48.474Z] [BOT] 💾 BEFORE ARCHIVING: 2999 jobs in database
[2026-01-20T22:55:48.476Z] [BOT] ✅ No jobs to archive (all 2999 jobs within 7-day window)
[2026-01-20T22:55:48.497Z] [BOT] 💾 Saved posted_jobs.json: 2999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:50.278Z] [BOT] ✅ Posted message: Customer Success Associate @ samsara in #JID_ead674af
[2026-01-20T22:55:50.278Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T22:55:50.279Z] [BOT] 💾 Added channel posting: Customer Success Associate @ samsara → location channel (2 total channels)
[2026-01-20T22:55:50.279Z] [BOT] 💾 BEFORE ARCHIVING: 2999 jobs in database
[2026-01-20T22:55:50.281Z] [BOT] ✅ No jobs to archive (all 2999 jobs within 7-day window)
[2026-01-20T22:55:50.299Z] [BOT] 💾 Saved posted_jobs.json: 2999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:51.801Z] [BOT] 💾 Marked as posted: Customer Success Associate @ samsara (instance #1)
[2026-01-20T22:55:51.801Z] [BOT] 💾 BEFORE ARCHIVING: 3000 jobs in database
[2026-01-20T22:55:51.803Z] [BOT] ✅ No jobs to archive (all 3000 jobs within 7-day window)
[2026-01-20T22:55:51.824Z] [BOT] 💾 Saved posted_jobs.json: 3000 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:51.824Z] [BOT] 📍 [ROUTING] "Director, Sales Commissions" @ samsara
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:55:52.001Z] [BOT] ✅ Posted message: Director, Sales Commissions @ samsara in #tech-jobs
[2026-01-20T22:55:52.001Z] [BOT] ✅ Industry: Director, Sales Commissions @ samsara
[2026-01-20T22:55:52.001Z] [BOT] 💾 Added channel posting: Director, Sales Commissions @ samsara → category channel (1 total channels)
[2026-01-20T22:55:52.002Z] [BOT] 💾 BEFORE ARCHIVING: 3001 jobs in database
[2026-01-20T22:55:52.004Z] [BOT] ✅ No jobs to archive (all 3001 jobs within 7-day window)
[2026-01-20T22:55:52.023Z] [BOT] 💾 Saved posted_jobs.json: 3001 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:53.524Z] [BOT] 💾 Marked as posted: Director, Sales Commissions @ samsara (instance #1)
[2026-01-20T22:55:53.524Z] [BOT] 💾 BEFORE ARCHIVING: 3002 jobs in database
[2026-01-20T22:55:53.526Z] [BOT] ✅ No jobs to archive (all 3002 jobs within 7-day window)
[2026-01-20T22:55:53.545Z] [BOT] 💾 Saved posted_jobs.json: 3002 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:53.545Z] [BOT] 💾 Marked as posted: Director, Sales Commissions @ samsara (instance #1)
[2026-01-20T22:55:53.545Z] [BOT] 💾 BEFORE ARCHIVING: 3003 jobs in database
[2026-01-20T22:55:53.547Z] [BOT] ✅ No jobs to archive (all 3003 jobs within 7-day window)
[2026-01-20T22:55:53.567Z] [BOT] 💾 Saved posted_jobs.json: 3003 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:53.567Z] [BOT] 📍 [ROUTING] "Enterprise Account Development Representative - Outbound" @ samsara
[2026-01-20T22:55:53.567Z] [BOT] Category: TECH (default)
[2026-01-20T22:55:53.567Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T22:55:53.968Z] [BOT] ✅ Posted message: Enterprise Account Development Representative - Outbound @ samsara in #tech-jobs
  ✅ Industry: Enterprise Account Development Representative - Outbound @ samsara
[2026-01-20T22:55:53.969Z] [BOT] 💾 Added channel posting: Enterprise Account Development Representative - Outbound @ samsara → category channel (1 total channels)
[2026-01-20T22:55:53.969Z] [BOT] 💾 BEFORE ARCHIVING: 3004 jobs in database
[2026-01-20T22:55:53.971Z] [BOT] ✅ No jobs to archive (all 3004 jobs within 7-day window)
[2026-01-20T22:55:53.989Z] [BOT] 💾 Saved posted_jobs.json: 3004 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:55.710Z] [BOT] ✅ Posted message: Enterprise Account Development Representative - Outbound @ samsara in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T22:55:55.710Z] [BOT] 💾 Added channel posting: Enterprise Account Development Representative - Outbound @ samsara → location channel (2 total channels)
[2026-01-20T22:55:55.710Z] [BOT] 💾 BEFORE ARCHIVING: 3004 jobs in database
[2026-01-20T22:55:55.712Z] [BOT] ✅ No jobs to archive (all 3004 jobs within 7-day window)
[2026-01-20T22:55:55.730Z] [BOT] 💾 Saved posted_jobs.json: 3004 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:57.231Z] [BOT] 💾 Marked as posted: Enterprise Account Development Representative - Outbound @ samsara (instance #1)
[2026-01-20T22:55:57.231Z] [BOT] 💾 BEFORE ARCHIVING: 3005 jobs in database
[2026-01-20T22:55:57.233Z] [BOT] ✅ No jobs to archive (all 3005 jobs within 7-day window)
[2026-01-20T22:55:57.252Z] [BOT] 💾 Saved posted_jobs.json: 3005 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:57.252Z] [BOT] 📍 [ROUTING] "Enterprise Business Development Representative- Outbound" @ samsara
[2026-01-20T22:55:57.252Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:55:57.683Z] [BOT] ✅ Posted message: Enterprise Business Development Representative- Outbound @ samsara in #tech-jobs
[2026-01-20T22:55:57.683Z] [BOT] ✅ Industry: Enterprise Business Development Representative- Outbound @ samsara
[2026-01-20T22:55:57.684Z] [BOT] 💾 Added channel posting: Enterprise Business Development Representative- Outbound @ samsara → category channel (1 total channels)
[2026-01-20T22:55:57.684Z] [BOT] 💾 BEFORE ARCHIVING: 3006 jobs in database
[2026-01-20T22:55:57.686Z] [BOT] ✅ No jobs to archive (all 3006 jobs within 7-day window)
[2026-01-20T22:55:57.710Z] [BOT] 💾 Saved posted_jobs.json: 3006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:55:59.372Z] [BOT] ✅ Posted message: Enterprise Business Development Representative- Outbound @ samsara in #JID_ead674af
[2026-01-20T22:55:59.372Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T22:55:59.373Z] [BOT] 💾 Added channel posting: Enterprise Business Development Representative- Outbound @ samsara → location channel (2 total channels)
[2026-01-20T22:55:59.373Z] [BOT] 💾 BEFORE ARCHIVING: 3006 jobs in database
[2026-01-20T22:55:59.375Z] [BOT] ✅ No jobs to archive (all 3006 jobs within 7-day window)
[2026-01-20T22:55:59.393Z] [BOT] 💾 Saved posted_jobs.json: 3006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:00.894Z] [BOT] 💾 Marked as posted: Enterprise Business Development Representative- Outbound @ samsara (instance #1)
[2026-01-20T22:56:00.894Z] [BOT] 💾 BEFORE ARCHIVING: 3007 jobs in database
[2026-01-20T22:56:00.896Z] [BOT] ✅ No jobs to archive (all 3007 jobs within 7-day window)
[2026-01-20T22:56:00.915Z] [BOT] 💾 Saved posted_jobs.json: 3007 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:00.916Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant" @ samsara
[2026-01-20T22:56:00.916Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:56:01.088Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant @ samsara in #tech-jobs
[2026-01-20T22:56:01.088Z] [BOT] ✅ Industry: Enterprise Implementation Consultant @ samsara
[2026-01-20T22:56:01.089Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant @ samsara → category channel (1 total channels)
[2026-01-20T22:56:01.089Z] [BOT] 💾 BEFORE ARCHIVING: 3008 jobs in database
[2026-01-20T22:56:01.091Z] [BOT] ✅ No jobs to archive (all 3008 jobs within 7-day window)
[2026-01-20T22:56:01.111Z] [BOT] 💾 Saved posted_jobs.json: 3008 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:02.945Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant @ samsara in #JID_ead674af
[2026-01-20T22:56:02.945Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T22:56:02.946Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant @ samsara → location channel (2 total channels)
[2026-01-20T22:56:02.946Z] [BOT] 💾 BEFORE ARCHIVING: 3008 jobs in database
[2026-01-20T22:56:02.948Z] [BOT] ✅ No jobs to archive (all 3008 jobs within 7-day window)
[2026-01-20T22:56:02.967Z] [BOT] 💾 Saved posted_jobs.json: 3008 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:04.469Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant @ samsara (instance #1)
[2026-01-20T22:56:04.469Z] [BOT] 💾 BEFORE ARCHIVING: 3009 jobs in database
[2026-01-20T22:56:04.471Z] [BOT] ✅ No jobs to archive (all 3009 jobs within 7-day window)
[2026-01-20T22:56:04.491Z] [BOT] 💾 Saved posted_jobs.json: 3009 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:04.491Z] [BOT] 📍 [ROUTING] "Executive Assistant, Go to Market" @ samsara
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:56:04.647Z] [BOT] ✅ Posted message: Executive Assistant, Go to Market @ samsara in #tech-jobs
[2026-01-20T22:56:04.648Z] [BOT] ✅ Industry: Executive Assistant, Go to Market @ samsara
[2026-01-20T22:56:04.648Z] [BOT] 💾 Added channel posting: Executive Assistant, Go to Market @ samsara → category channel (1 total channels)
[2026-01-20T22:56:04.648Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-20T22:56:04.650Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-20T22:56:04.668Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:06.169Z] [BOT] 💾 Marked as posted: Executive Assistant, Go to Market @ samsara (instance #1)
[2026-01-20T22:56:06.169Z] [BOT] 💾 BEFORE ARCHIVING: 3011 jobs in database
[2026-01-20T22:56:06.172Z] [BOT] ✅ No jobs to archive (all 3011 jobs within 7-day window)
[2026-01-20T22:56:06.192Z] [BOT] 💾 Saved posted_jobs.json: 3011 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:06.192Z] [BOT] 📍 [ROUTING] "Hardware Solutions Firmware Engineer" @ samsara
[2026-01-20T22:56:06.192Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:56:06.391Z] [BOT] ✅ Posted message: Hardware Solutions Firmware Engineer @ samsara in #tech-jobs
  ✅ Industry: Hardware Solutions Firmware Engineer @ samsara
[2026-01-20T22:56:06.392Z] [BOT] 💾 Added channel posting: Hardware Solutions Firmware Engineer @ samsara → category channel (1 total channels)
[2026-01-20T22:56:06.392Z] [BOT] 💾 BEFORE ARCHIVING: 3012 jobs in database
[2026-01-20T22:56:06.394Z] [BOT] ✅ No jobs to archive (all 3012 jobs within 7-day window)
[2026-01-20T22:56:06.414Z] [BOT] 💾 Saved posted_jobs.json: 3012 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:07.915Z] [BOT] 💾 Marked as posted: Hardware Solutions Firmware Engineer @ samsara (instance #1)
[2026-01-20T22:56:07.915Z] [BOT] 💾 BEFORE ARCHIVING: 3013 jobs in database
[2026-01-20T22:56:07.917Z] [BOT] ✅ No jobs to archive (all 3013 jobs within 7-day window)
[2026-01-20T22:56:07.935Z] [BOT] 💾 Saved posted_jobs.json: 3013 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:07.936Z] [BOT] 📍 [ROUTING] "Manager Account Development, Relocation to Atlanta" @ samsara
[2026-01-20T22:56:07.936Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:56:08.116Z] [BOT] ✅ Posted message: Manager Account Development, Relocation to Atlanta @ samsara in #tech-jobs
[2026-01-20T22:56:08.116Z] [BOT] ✅ Industry: Manager Account Development, Relocation to Atlanta @ samsara
[2026-01-20T22:56:08.117Z] [BOT] 💾 Added channel posting: Manager Account Development, Relocation to Atlanta @ samsara → category channel (1 total channels)
[2026-01-20T22:56:08.117Z] [BOT] 💾 BEFORE ARCHIVING: 3014 jobs in database
[2026-01-20T22:56:08.119Z] [BOT] ✅ No jobs to archive (all 3014 jobs within 7-day window)
[2026-01-20T22:56:08.137Z] [BOT] 💾 Saved posted_jobs.json: 3014 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:09.809Z] [BOT] ✅ Posted message: Manager Account Development, Relocation to Atlanta @ samsara in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T22:56:09.810Z] [BOT] 💾 Added channel posting: Manager Account Development, Relocation to Atlanta @ samsara → location channel (2 total channels)
[2026-01-20T22:56:09.810Z] [BOT] 💾 BEFORE ARCHIVING: 3014 jobs in database
[2026-01-20T22:56:09.812Z] [BOT] ✅ No jobs to archive (all 3014 jobs within 7-day window)
[2026-01-20T22:56:09.830Z] [BOT] 💾 Saved posted_jobs.json: 3014 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:11.331Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-20T22:56:11.332Z] [BOT] 💾 BEFORE ARCHIVING: 3015 jobs in database
[2026-01-20T22:56:11.333Z] [BOT] ✅ No jobs to archive (all 3015 jobs within 7-day window)
[2026-01-20T22:56:11.351Z] [BOT] 💾 Saved posted_jobs.json: 3015 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:11.352Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-20T22:56:11.352Z] [BOT] 💾 BEFORE ARCHIVING: 3016 jobs in database
[2026-01-20T22:56:11.354Z] [BOT] ✅ No jobs to archive (all 3016 jobs within 7-day window)
[2026-01-20T22:56:11.371Z] [BOT] 💾 Saved posted_jobs.json: 3016 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:11.371Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-20T22:56:11.371Z] [BOT] 💾 BEFORE ARCHIVING: 3017 jobs in database
[2026-01-20T22:56:11.373Z] [BOT] ✅ No jobs to archive (all 3017 jobs within 7-day window)
[2026-01-20T22:56:11.395Z] [BOT] 💾 Saved posted_jobs.json: 3017 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:11.395Z] [BOT] 💾 Marked as posted: Manager Account Development, Relocation to Atlanta @ samsara (instance #1)
[2026-01-20T22:56:11.396Z] [BOT] 💾 BEFORE ARCHIVING: 3018 jobs in database
[2026-01-20T22:56:11.397Z] [BOT] ✅ No jobs to archive (all 3018 jobs within 7-day window)
[2026-01-20T22:56:11.416Z] [BOT] 💾 Saved posted_jobs.json: 3018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:11.416Z] [BOT] 📍 [ROUTING] "Manager II, Shipping and Receiving Logistics" @ samsara
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T22:56:11.585Z] [BOT] ✅ Posted message: Manager II, Shipping and Receiving Logistics @ samsara in #tech-jobs
[2026-01-20T22:56:11.586Z] [BOT] ✅ Industry: Manager II, Shipping and Receiving Logistics @ samsara
[2026-01-20T22:56:11.586Z] [BOT] 💾 Added channel posting: Manager II, Shipping and Receiving Logistics @ samsara → category channel (1 total channels)
[2026-01-20T22:56:11.586Z] [BOT] 💾 BEFORE ARCHIVING: 3019 jobs in database
[2026-01-20T22:56:11.588Z] [BOT] ✅ No jobs to archive (all 3019 jobs within 7-day window)
[2026-01-20T22:56:11.607Z] [BOT] 💾 Saved posted_jobs.json: 3019 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:13.107Z] [BOT] 💾 Marked as posted: Manager II, Shipping and Receiving Logistics @ samsara (instance #1)
[2026-01-20T22:56:13.108Z] [BOT] 💾 BEFORE ARCHIVING: 3020 jobs in database
[2026-01-20T22:56:13.109Z] [BOT] ✅ No jobs to archive (all 3020 jobs within 7-day window)
[2026-01-20T22:56:13.129Z] [BOT] 💾 Saved posted_jobs.json: 3020 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T22:56:16.130Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T22:56:16.131Z] [BOT] ⏭️  Skipping duplicate: JID_4af0c27d (posted within 7 days)
[2026-01-20T22:56:16.131Z] [BOT] ⏭️  Skipping duplicate: JID_49fc1d4b (posted within 7 days)
[2026-01-20T22:56:16.131Z] [BOT] ⏭️  Skipping duplicate: JID_6895993a (posted within 7 days)
[2026-01-20T22:56:16.131Z] [BOT] ⏭️  Skipping duplicate: JID_97f60550 (posted within 7 days)
[2026-01-20T22:56:16.131Z] [BOT] ⏭️  Skipping duplicate: JID_7f77c8d1 (posted within 7 days)
[2026-01-20T22:56:16.131Z] [BOT] ⏭️  Skipping duplicate: JID_ff256bbe (posted within 7 days)
[2026-01-20T22:56:16.132Z] [BOT] ⏭️  Skipping duplicate: JID_26334b8f (posted within 7 days)
[2026-01-20T22:56:16.132Z] [BOT] ⏭️  Skipping duplicate: JID_b46f8a25 (posted within 7 days)
⏭️  Skipping duplicate: JID_388792bf (posted within 7 days)
[2026-01-20T22:56:16.132Z] [BOT] ⏭️  Skipping duplicate: JID_28280aa3 (posted within 7 days)
[2026-01-20T22:56:16.238Z] [BOT] ✅ Loaded pending queue: 2750 total (2730 pending, 20 enriched, 0 posted)
[2026-01-20T22:56:16.413Z] [BOT] ✅ Saved pending queue: 2750 total (2730 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-20T22:56:16.414Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-20T22:56:16.477Z] [BOT] 📂 Loaded 5541 existing routing entries
[2026-01-20T22:56:16.551Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5551
   Timestamp: 2026-01-20T22:56:16.528Z
[2026-01-20T22:56:16.553Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 3
   Top channels:
     1. #tech-jobs: 9 posts
     2. #JID_ead674af: 5 posts
     3. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-20T22:56:18.575Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2415) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*