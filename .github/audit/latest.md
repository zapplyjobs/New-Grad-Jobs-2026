# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T03:37:29.239Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T03:36:50.160Z] ========================================
[2026-01-20T03:36:50.162Z] Discord Bot Execution Log
[2026-01-20T03:36:50.162Z] Environment: GitHub Actions
[2026-01-20T03:36:50.162Z] Node Version: v20.19.6
[2026-01-20T03:36:50.162Z] ========================================
[2026-01-20T03:36:50.162Z] Environment Variables Check:
[2026-01-20T03:36:50.162Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T03:36:50.163Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.163Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T03:36:50.163Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T03:36:50.163Z] 
Multi-Channel Configuration:
[2026-01-20T03:36:50.163Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.163Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.163Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.163Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.163Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.163Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.164Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.164Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.164Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T03:36:50.164Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T03:36:50.164Z] 
Data Files Check:
[2026-01-20T03:36:50.165Z] .github/data/new_jobs.json: ✅ Exists (10 items, 118213 bytes)
[2026-01-20T03:36:50.175Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1534726 bytes)
[2026-01-20T03:36:50.175Z] 
========================================
[2026-01-20T03:36:50.175Z] Starting Enhanced Discord Bot...
[2026-01-20T03:36:50.175Z] ========================================
[2026-01-20T03:36:50.730Z] [BOT] ✅ Loaded V2 database: 2793 jobs
[2026-01-20T03:36:51.578Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T03:36:51.578Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T03:36:51.579Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T03:36:51.697Z] [BOT] ✅ Loaded pending queue: 2814 total (2794 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist - Growth Analytics (Performance Marketing) at spotify
[2026-01-20T03:36:51.701Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T03:36:51.701Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T03:36:51.701Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T03:36:51.702Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-20T03:36:51.702Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Expansion Account Executive, Enterprise @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T03:36:51.703Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T03:36:51.706Z] [BOT] 📌 Posting 5 jobs to #ai-jobs
[2026-01-20T03:36:51.706Z] [BOT] 📍 [ROUTING] "Data Scientist - Growth Analytics (Performance Marketing)" @ spotify
[2026-01-20T03:36:51.706Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-20T03:36:51.725Z] [BOT ERROR] (node:2669) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T03:36:52.274Z] [BOT] ✅ Posted message: Data Scientist - Growth Analytics (Performance Marketing) @ spotify in #ai-jobs
  ✅ Industry: Data Scientist - Growth Analytics (Performance Marketing) @ spotify
[2026-01-20T03:36:52.275Z] [BOT] 💾 Added channel posting: Data Scientist - Growth Analytics (Performance Marketing) @ spotify → category channel (1 total channels)
[2026-01-20T03:36:52.276Z] [BOT] 💾 BEFORE ARCHIVING: 2794 jobs in database
[2026-01-20T03:36:52.278Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T03:36:52.283Z] [BOT] 📦 Archived 38 jobs to 2026-01.json (38 total in archive)
[2026-01-20T03:36:52.284Z] [BOT] ✅ Archiving complete: 38 archived, 2756 active
[2026-01-20T03:36:52.303Z] [BOT] 💾 Saved posted_jobs.json: 2756 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:36:54.031Z] [BOT] ✅ Posted message: Data Scientist - Growth Analytics (Performance Marketing) @ spotify in #JID_98d4f0de
[2026-01-20T03:36:54.032Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T03:36:54.032Z] [BOT] 💾 Added channel posting: Data Scientist - Growth Analytics (Performance Marketing) @ spotify → location channel (2 total channels)
[2026-01-20T03:36:54.032Z] [BOT] 💾 BEFORE ARCHIVING: 2756 jobs in database
[2026-01-20T03:36:54.034Z] [BOT] ✅ No jobs to archive (all 2756 jobs within 7-day window)
[2026-01-20T03:36:54.049Z] [BOT] 💾 Saved posted_jobs.json: 2756 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:36:55.550Z] [BOT] 💾 Marked as posted: Data Scientist - Growth Analytics (Performance Marketing) @ spotify (instance #1)
[2026-01-20T03:36:55.550Z] [BOT] 💾 BEFORE ARCHIVING: 2757 jobs in database
[2026-01-20T03:36:55.552Z] [BOT] ✅ No jobs to archive (all 2757 jobs within 7-day window)
[2026-01-20T03:36:55.572Z] [BOT] 💾 Saved posted_jobs.json: 2757 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:36:55.572Z] [BOT] 📍 [ROUTING] "Research Scientist - Personalization" @ spotify
[2026-01-20T03:36:55.572Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-20T03:36:55.850Z] [BOT] ✅ Posted message: Research Scientist - Personalization @ spotify in #ai-jobs
[2026-01-20T03:36:55.850Z] [BOT] ✅ Industry: Research Scientist - Personalization @ spotify
[2026-01-20T03:36:55.851Z] [BOT] 💾 Added channel posting: Research Scientist - Personalization @ spotify → category channel (1 total channels)
[2026-01-20T03:36:55.851Z] [BOT] 💾 BEFORE ARCHIVING: 2758 jobs in database
[2026-01-20T03:36:55.853Z] [BOT] ✅ No jobs to archive (all 2758 jobs within 7-day window)
[2026-01-20T03:36:55.870Z] [BOT] 💾 Saved posted_jobs.json: 2758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:36:58.082Z] [BOT] ✅ Posted message: Research Scientist - Personalization @ spotify in #JID_98d4f0de
[2026-01-20T03:36:58.082Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T03:36:58.083Z] [BOT] 💾 Added channel posting: Research Scientist - Personalization @ spotify → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2758 jobs in database
[2026-01-20T03:36:58.085Z] [BOT] ✅ No jobs to archive (all 2758 jobs within 7-day window)
[2026-01-20T03:36:58.101Z] [BOT] 💾 Saved posted_jobs.json: 2758 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:36:59.602Z] [BOT] 💾 Marked as posted: Research Scientist - Personalization @ spotify (instance #1)
[2026-01-20T03:36:59.602Z] [BOT] 💾 BEFORE ARCHIVING: 2759 jobs in database
[2026-01-20T03:36:59.604Z] [BOT] ✅ No jobs to archive (all 2759 jobs within 7-day window)
[2026-01-20T03:36:59.622Z] [BOT] 💾 Saved posted_jobs.json: 2759 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:36:59.622Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_70014abc
[2026-01-20T03:36:59.622Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T03:36:59.877Z] [BOT] ✅ Posted message: Software Engineer @ ORG_70014abc in #ai-jobs
[2026-01-20T03:36:59.877Z] [BOT] ✅ Industry: Software Engineer @ ORG_70014abc
[2026-01-20T03:36:59.877Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_70014abc → category channel (1 total channels)
[2026-01-20T03:36:59.877Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-20T03:36:59.879Z] [BOT] ✅ No jobs to archive (all 2760 jobs within 7-day window)
[2026-01-20T03:36:59.899Z] [BOT] 💾 Saved posted_jobs.json: 2760 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:01.401Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_70014abc (instance #1)
[2026-01-20T03:37:01.401Z] [BOT] 💾 BEFORE ARCHIVING: 2761 jobs in database
[2026-01-20T03:37:01.404Z] [BOT] ✅ No jobs to archive (all 2761 jobs within 7-day window)
[2026-01-20T03:37:01.423Z] [BOT] 💾 Saved posted_jobs.json: 2761 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:01.424Z] [BOT] 📍 [ROUTING] "Associate Manager, Compliance" @ coinbase
[2026-01-20T03:37:01.424Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-20T03:37:01.626Z] [BOT] ✅ Posted message: Associate Manager, Compliance @ coinbase in #ai-jobs
  ✅ Industry: Associate Manager, Compliance @ coinbase
[2026-01-20T03:37:01.627Z] [BOT] 💾 Added channel posting: Associate Manager, Compliance @ coinbase → category channel (1 total channels)
[2026-01-20T03:37:01.627Z] [BOT] 💾 BEFORE ARCHIVING: 2762 jobs in database
[2026-01-20T03:37:01.629Z] [BOT] ✅ No jobs to archive (all 2762 jobs within 7-day window)
[2026-01-20T03:37:01.648Z] [BOT] 💾 Saved posted_jobs.json: 2762 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:03.150Z] [BOT] 💾 Marked as posted: Associate Manager, Compliance @ coinbase (instance #1)
[2026-01-20T03:37:03.150Z] [BOT] 💾 BEFORE ARCHIVING: 2763 jobs in database
[2026-01-20T03:37:03.152Z] [BOT] ✅ No jobs to archive (all 2763 jobs within 7-day window)
[2026-01-20T03:37:03.168Z] [BOT] 💾 Saved posted_jobs.json: 2763 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:03.169Z] [BOT] 📍 [ROUTING] "Internal Communications Senior Manager (Global Sales)" @ reddit
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T03:37:03.482Z] [BOT] ✅ Posted message: Internal Communications Senior Manager (Global Sales) @ reddit in #ai-jobs
  ✅ Industry: Internal Communications Senior Manager (Global Sales) @ reddit
[2026-01-20T03:37:03.483Z] [BOT] 💾 Added channel posting: Internal Communications Senior Manager (Global Sales) @ reddit → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2764 jobs in database
[2026-01-20T03:37:03.485Z] [BOT] ✅ No jobs to archive (all 2764 jobs within 7-day window)
[2026-01-20T03:37:03.503Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:05.207Z] [BOT] ✅ Posted message: Internal Communications Senior Manager (Global Sales) @ reddit in #JID_98d4f0de
[2026-01-20T03:37:05.207Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T03:37:05.207Z] [BOT] 💾 Added channel posting: Internal Communications Senior Manager (Global Sales) @ reddit → location channel (2 total channels)
[2026-01-20T03:37:05.208Z] [BOT] 💾 BEFORE ARCHIVING: 2764 jobs in database
[2026-01-20T03:37:05.210Z] [BOT] ✅ No jobs to archive (all 2764 jobs within 7-day window)
[2026-01-20T03:37:05.232Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:06.733Z] [BOT] 💾 Marked as posted: Internal Communications Senior Manager (Global Sales) @ reddit (instance #1)
[2026-01-20T03:37:06.733Z] [BOT] 💾 BEFORE ARCHIVING: 2765 jobs in database
[2026-01-20T03:37:06.735Z] [BOT] ✅ No jobs to archive (all 2765 jobs within 7-day window)
[2026-01-20T03:37:06.751Z] [BOT] 💾 Saved posted_jobs.json: 2765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:09.752Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-20T03:37:09.752Z] [BOT] 📍 [ROUTING] "Application Support - Java skills - Associate" @ ORG_cb204781
[2026-01-20T03:37:09.753Z] [BOT] Category: TECH (matched: "programming")
   Channel: tech-jobs (1462...4987)
[2026-01-20T03:37:10.115Z] [BOT] ✅ Posted message: Application Support - Java skills - Associate @ ORG_cb204781 in #tech-jobs
[2026-01-20T03:37:10.116Z] [BOT] ✅ Industry: Application Support - Java skills - Associate @ ORG_cb204781
[2026-01-20T03:37:10.116Z] [BOT] 💾 Added channel posting: Application Support - Java skills - Associate @ ORG_cb204781 → category channel (1 total channels)
[2026-01-20T03:37:10.116Z] [BOT] 💾 BEFORE ARCHIVING: 2766 jobs in database
[2026-01-20T03:37:10.118Z] [BOT] ✅ No jobs to archive (all 2766 jobs within 7-day window)
[2026-01-20T03:37:10.133Z] [BOT] 💾 Saved posted_jobs.json: 2766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:11.635Z] [BOT] 💾 Marked as posted: Application Support - Java skills - Associate @ ORG_cb204781 (instance #1)
[2026-01-20T03:37:11.635Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-20T03:37:11.637Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-20T03:37:11.656Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:11.657Z] [BOT] 📍 [ROUTING] "Product Solutions Architect 3 - Synthetics" @ datadog
[2026-01-20T03:37:11.657Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T03:37:11.866Z] [BOT] ✅ Posted message: Product Solutions Architect 3 - Synthetics @ datadog in #tech-jobs
  ✅ Industry: Product Solutions Architect 3 - Synthetics @ datadog
[2026-01-20T03:37:11.867Z] [BOT] 💾 Added channel posting: Product Solutions Architect 3 - Synthetics @ datadog → category channel (1 total channels)
[2026-01-20T03:37:11.867Z] [BOT] 💾 BEFORE ARCHIVING: 2768 jobs in database
[2026-01-20T03:37:11.869Z] [BOT] ✅ No jobs to archive (all 2768 jobs within 7-day window)
[2026-01-20T03:37:11.885Z] [BOT] 💾 Saved posted_jobs.json: 2768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:13.627Z] [BOT] ✅ Posted message: Product Solutions Architect 3 - Synthetics @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T03:37:13.627Z] [BOT] 💾 Added channel posting: Product Solutions Architect 3 - Synthetics @ datadog → location channel (2 total channels)
[2026-01-20T03:37:13.627Z] [BOT] 💾 BEFORE ARCHIVING: 2768 jobs in database
[2026-01-20T03:37:13.629Z] [BOT] ✅ No jobs to archive (all 2768 jobs within 7-day window)
[2026-01-20T03:37:13.645Z] [BOT] 💾 Saved posted_jobs.json: 2768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:15.146Z] [BOT] 💾 Marked as posted: Product Solutions Architect 3 - Synthetics @ datadog (instance #1)
[2026-01-20T03:37:15.147Z] [BOT] 💾 BEFORE ARCHIVING: 2769 jobs in database
[2026-01-20T03:37:15.149Z] [BOT] ✅ No jobs to archive (all 2769 jobs within 7-day window)
[2026-01-20T03:37:15.168Z] [BOT] 💾 Saved posted_jobs.json: 2769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:15.168Z] [BOT] 📍 [ROUTING] "Senior Director, Product Design" @ datadog
[2026-01-20T03:37:15.168Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T03:37:15.444Z] [BOT] ✅ Posted message: Senior Director, Product Design @ datadog in #tech-jobs
  ✅ Industry: Senior Director, Product Design @ datadog
[2026-01-20T03:37:15.445Z] [BOT] 💾 Added channel posting: Senior Director, Product Design @ datadog → category channel (1 total channels)
[2026-01-20T03:37:15.445Z] [BOT] 💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-20T03:37:15.447Z] [BOT] ✅ No jobs to archive (all 2770 jobs within 7-day window)
[2026-01-20T03:37:15.462Z] [BOT] 💾 Saved posted_jobs.json: 2770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:17.237Z] [BOT] ✅ Posted message: Senior Director, Product Design @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T03:37:17.237Z] [BOT] 💾 Added channel posting: Senior Director, Product Design @ datadog → location channel (2 total channels)
[2026-01-20T03:37:17.237Z] [BOT] 💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-20T03:37:17.239Z] [BOT] ✅ No jobs to archive (all 2770 jobs within 7-day window)
[2026-01-20T03:37:17.257Z] [BOT] 💾 Saved posted_jobs.json: 2770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:18.759Z] [BOT] 💾 Marked as posted: Senior Director, Product Design @ datadog (instance #1)
[2026-01-20T03:37:18.759Z] [BOT] 💾 BEFORE ARCHIVING: 2771 jobs in database
[2026-01-20T03:37:18.761Z] [BOT] ✅ No jobs to archive (all 2771 jobs within 7-day window)
[2026-01-20T03:37:18.779Z] [BOT] 💾 Saved posted_jobs.json: 2771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:18.779Z] [BOT] 📍 [ROUTING] "Sales Development Representative (Boston)" @ datadog
   Category: TECH (default)
[2026-01-20T03:37:18.779Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T03:37:19.268Z] [BOT] ✅ Posted message: Sales Development Representative (Boston) @ datadog in #tech-jobs
[2026-01-20T03:37:19.268Z] [BOT] ✅ Industry: Sales Development Representative (Boston) @ datadog
[2026-01-20T03:37:19.269Z] [BOT] 💾 Added channel posting: Sales Development Representative (Boston) @ datadog → category channel (1 total channels)
[2026-01-20T03:37:19.269Z] [BOT] 💾 BEFORE ARCHIVING: 2772 jobs in database
[2026-01-20T03:37:19.270Z] [BOT] ✅ No jobs to archive (all 2772 jobs within 7-day window)
[2026-01-20T03:37:19.286Z] [BOT] 💾 Saved posted_jobs.json: 2772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:20.788Z] [BOT] 💾 Marked as posted: Sales Development Representative (Boston) @ datadog (instance #1)
[2026-01-20T03:37:20.788Z] [BOT] 💾 BEFORE ARCHIVING: 2773 jobs in database
[2026-01-20T03:37:20.790Z] [BOT] ✅ No jobs to archive (all 2773 jobs within 7-day window)
[2026-01-20T03:37:20.807Z] [BOT] 💾 Saved posted_jobs.json: 2773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:20.807Z] [BOT] 📍 [ROUTING] "Web/Digital Specialist 1" @ ORG_a12a3115
[2026-01-20T03:37:20.807Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: tech-jobs (1462...4987)
[2026-01-20T03:37:21.092Z] [BOT] ✅ Posted message: Web/Digital Specialist 1 @ ORG_a12a3115 in #tech-jobs
  ✅ Industry: Web/Digital Specialist 1 @ ORG_a12a3115
[2026-01-20T03:37:21.092Z] [BOT] 💾 Added channel posting: Web/Digital Specialist 1 @ ORG_a12a3115 → category channel (1 total channels)
[2026-01-20T03:37:21.093Z] [BOT] 💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-20T03:37:21.094Z] [BOT] ✅ No jobs to archive (all 2774 jobs within 7-day window)
[2026-01-20T03:37:21.109Z] [BOT] 💾 Saved posted_jobs.json: 2774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:22.611Z] [BOT] 💾 Marked as posted: Web/Digital Specialist 1 @ ORG_a12a3115 (instance #1)
[2026-01-20T03:37:22.611Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-20T03:37:22.613Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-20T03:37:22.629Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T03:37:25.630Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T03:37:25.631Z] [BOT] ⏭️  Skipping duplicate: JID_5e295372 (posted within 7 days)
[2026-01-20T03:37:25.631Z] [BOT] ⏭️  Skipping duplicate: JID_0b9fd032-cx_1-job-589735 (posted within 7 days)
[2026-01-20T03:37:25.631Z] [BOT] ⏭️  Skipping duplicate: JID_4e8b8312 (posted within 7 days)
[2026-01-20T03:37:25.631Z] [BOT] ⏭️  Skipping duplicate: JID_cc075897 (posted within 7 days)
[2026-01-20T03:37:25.632Z] [BOT] ⏭️  Skipping duplicate: JID_e13e860d (posted within 7 days)
[2026-01-20T03:37:25.632Z] [BOT] ⏭️  Skipping duplicate: JID_b1499239-i_jr107155 (posted within 7 days)
[2026-01-20T03:37:25.632Z] [BOT] ⏭️  Skipping duplicate: JID_5814f844 (posted within 7 days)
[2026-01-20T03:37:25.632Z] [BOT] ⏭️  Skipping duplicate: JID_aac31520 (posted within 7 days)
[2026-01-20T03:37:25.632Z] [BOT] ⏭️  Skipping duplicate: JID_1f192e6d (posted within 7 days)
[2026-01-20T03:37:25.632Z] [BOT] ⏭️  Skipping duplicate: JID_d85041c5 (posted within 7 days)
[2026-01-20T03:37:25.740Z] [BOT] ✅ Loaded pending queue: 2814 total (2794 pending, 20 enriched, 0 posted)
[2026-01-20T03:37:25.934Z] [BOT] ✅ Saved pending queue: 2814 total (2794 pending, 10 enriched, 10 posted)
[2026-01-20T03:37:25.934Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T03:37:25.997Z] [BOT] 📂 Loaded 5245 existing routing entries
[2026-01-20T03:37:26.071Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5255
[2026-01-20T03:37:26.072Z] [BOT] Timestamp: 2026-01-20T03:37:26.048Z
[2026-01-20T03:37:26.072Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T03:37:26.072Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-20T03:37:26.073Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-20T03:37:26.073Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 3
   Top channels:
[2026-01-20T03:37:26.073Z] [BOT] 1. #ai-jobs: 5 posts
     2. #JID_98d4f0de: 5 posts
     3. #tech-jobs: 5 posts
[2026-01-20T03:37:26.073Z] [BOT] [STATS] Channel stats saved
[2026-01-20T03:37:28.098Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2669) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*