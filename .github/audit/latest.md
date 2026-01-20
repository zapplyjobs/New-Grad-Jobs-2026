# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T21:55:36.036Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T21:54:53.767Z] ========================================
[2026-01-20T21:54:53.768Z] Discord Bot Execution Log
[2026-01-20T21:54:53.769Z] Environment: GitHub Actions
[2026-01-20T21:54:53.769Z] Node Version: v20.19.6
[2026-01-20T21:54:53.769Z] ========================================
[2026-01-20T21:54:53.769Z] Environment Variables Check:
[2026-01-20T21:54:53.769Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T21:54:53.769Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.769Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T21:54:53.769Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T21:54:53.769Z] 
Multi-Channel Configuration:
[2026-01-20T21:54:53.769Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.770Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.770Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.770Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.770Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.770Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.770Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.770Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.770Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T21:54:53.770Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T21:54:53.770Z] 
Data Files Check:
[2026-01-20T21:54:53.771Z] .github/data/new_jobs.json: ✅ Exists (10 items, 181455 bytes)
[2026-01-20T21:54:53.783Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1665342 bytes)
[2026-01-20T21:54:53.783Z] 
========================================
[2026-01-20T21:54:53.783Z] Starting Enhanced Discord Bot...
[2026-01-20T21:54:53.783Z] ========================================
[2026-01-20T21:54:54.306Z] [BOT] ✅ Loaded V2 database: 2974 jobs
[2026-01-20T21:54:54.984Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T21:54:54.985Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T21:54:54.985Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T21:54:55.101Z] [BOT] ✅ Loaded pending queue: 2762 total (2742 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Director, Global Sales Enablement at reddit
[2026-01-20T21:54:55.104Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T21:54:55.104Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T21:54:55.105Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T21:54:55.106Z] [BOT] 📋 After multi-location grouping: 11 unique jobs to post
[2026-01-20T21:54:55.106Z] [BOT] (9 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Director, Global Sales Enablement @ reddit: new york, san francisco
   - Senior Software Engineer, Android Test Engineering @ reddit: new york, chicago, san francisco, los angeles
   - Technical Consultant @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states
[2026-01-20T21:54:55.106Z] [BOT] - Associate Technical Consultant @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T21:54:55.109Z] [BOT] 📌 Posting 5 jobs to #ai-jobs
[2026-01-20T21:54:55.110Z] [BOT] 📍 [ROUTING] "Director, Global Sales Enablement" @ reddit
[2026-01-20T21:54:55.110Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:54:55.114Z] [BOT ERROR] (node:2608) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T21:54:55.506Z] [BOT] ✅ Posted message: Director, Global Sales Enablement @ reddit in #ai-jobs
[2026-01-20T21:54:55.506Z] [BOT] ✅ Industry: Director, Global Sales Enablement @ reddit
[2026-01-20T21:54:55.507Z] [BOT] 💾 Added channel posting: Director, Global Sales Enablement @ reddit → category channel (1 total channels)
[2026-01-20T21:54:55.507Z] [BOT] 💾 BEFORE ARCHIVING: 2975 jobs in database
[2026-01-20T21:54:55.509Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T21:54:55.514Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-20T21:54:55.514Z] [BOT] ✅ Archiving complete: 11 archived, 2964 active
[2026-01-20T21:54:55.536Z] [BOT] 💾 Saved posted_jobs.json: 2964 active jobs
[2026-01-20T21:54:55.536Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:54:57.243Z] [BOT] ✅ Posted message: Director, Global Sales Enablement @ reddit in #JID_98d4f0de
[2026-01-20T21:54:57.243Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T21:54:57.243Z] [BOT] 💾 Added channel posting: Director, Global Sales Enablement @ reddit → location channel (2 total channels)
[2026-01-20T21:54:57.244Z] [BOT] 💾 BEFORE ARCHIVING: 2964 jobs in database
[2026-01-20T21:54:57.245Z] [BOT] ✅ No jobs to archive (all 2964 jobs within 7-day window)
[2026-01-20T21:54:57.262Z] [BOT] 💾 Saved posted_jobs.json: 2964 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:54:58.764Z] [BOT] 💾 Marked as posted: Director, Global Sales Enablement @ reddit (instance #1)
[2026-01-20T21:54:58.764Z] [BOT] 💾 BEFORE ARCHIVING: 2965 jobs in database
[2026-01-20T21:54:58.766Z] [BOT] ✅ No jobs to archive (all 2965 jobs within 7-day window)
[2026-01-20T21:54:58.786Z] [BOT] 💾 Saved posted_jobs.json: 2965 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:54:58.786Z] [BOT] 💾 Marked as posted: Director, Global Sales Enablement @ reddit (instance #1)
[2026-01-20T21:54:58.787Z] [BOT] 💾 BEFORE ARCHIVING: 2966 jobs in database
[2026-01-20T21:54:58.788Z] [BOT] ✅ No jobs to archive (all 2966 jobs within 7-day window)
[2026-01-20T21:54:58.808Z] [BOT] 💾 Saved posted_jobs.json: 2966 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:54:58.808Z] [BOT] 📍 [ROUTING] "Senior Client Account Manager, Large Customer Sales (Gaming & Tech)" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-20T21:54:58.808Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-20T21:54:59.034Z] [BOT] ✅ Posted message: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit in #ai-jobs
  ✅ Industry: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit
[2026-01-20T21:54:59.035Z] [BOT] 💾 Added channel posting: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit → category channel (1 total channels)
[2026-01-20T21:54:59.035Z] [BOT] 💾 BEFORE ARCHIVING: 2967 jobs in database
[2026-01-20T21:54:59.037Z] [BOT] ✅ No jobs to archive (all 2967 jobs within 7-day window)
[2026-01-20T21:54:59.057Z] [BOT] 💾 Saved posted_jobs.json: 2967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:00.795Z] [BOT] ✅ Posted message: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit in #JID_98d4f0de
[2026-01-20T21:55:00.795Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T21:55:00.795Z] [BOT] 💾 Added channel posting: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit → location channel (2 total channels)
[2026-01-20T21:55:00.796Z] [BOT] 💾 BEFORE ARCHIVING: 2967 jobs in database
[2026-01-20T21:55:00.797Z] [BOT] ✅ No jobs to archive (all 2967 jobs within 7-day window)
[2026-01-20T21:55:00.814Z] [BOT] 💾 Saved posted_jobs.json: 2967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:02.315Z] [BOT] 💾 Marked as posted: Senior Client Account Manager, Large Customer Sales (Gaming & Tech) @ reddit (instance #1)
[2026-01-20T21:55:02.316Z] [BOT] 💾 BEFORE ARCHIVING: 2968 jobs in database
[2026-01-20T21:55:02.317Z] [BOT] ✅ No jobs to archive (all 2968 jobs within 7-day window)
[2026-01-20T21:55:02.334Z] [BOT] 💾 Saved posted_jobs.json: 2968 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:02.334Z] [BOT] 📍 [ROUTING] "Senior IT Support Engineer, Snoo Operations & Support (SOS)" @ reddit
[2026-01-20T21:55:02.335Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T21:55:02.663Z] [BOT] ✅ Posted message: Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit in #ai-jobs
  ✅ Industry: Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit
[2026-01-20T21:55:02.664Z] [BOT] 💾 Added channel posting: Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit → category channel (1 total channels)
[2026-01-20T21:55:02.664Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-20T21:55:02.665Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-20T21:55:02.684Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:04.185Z] [BOT] 💾 Marked as posted: Senior IT Support Engineer, Snoo Operations & Support (SOS) @ reddit (instance #1)
[2026-01-20T21:55:04.186Z] [BOT] 💾 BEFORE ARCHIVING: 2970 jobs in database
[2026-01-20T21:55:04.188Z] [BOT] ✅ No jobs to archive (all 2970 jobs within 7-day window)
[2026-01-20T21:55:04.213Z] [BOT] 💾 Saved posted_jobs.json: 2970 active jobs
[2026-01-20T21:55:04.213Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:04.213Z] [BOT] 📍 [ROUTING] "Senior Software Engineer, Android Test Engineering" @ reddit
[2026-01-20T21:55:04.213Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T21:55:04.411Z] [BOT] ✅ Posted message: Senior Software Engineer, Android Test Engineering @ reddit in #ai-jobs
  ✅ Industry: Senior Software Engineer, Android Test Engineering @ reddit
[2026-01-20T21:55:04.412Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Android Test Engineering @ reddit → category channel (1 total channels)
[2026-01-20T21:55:04.412Z] [BOT] 💾 BEFORE ARCHIVING: 2971 jobs in database
[2026-01-20T21:55:04.414Z] [BOT] ✅ No jobs to archive (all 2971 jobs within 7-day window)
[2026-01-20T21:55:04.432Z] [BOT] 💾 Saved posted_jobs.json: 2971 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:06.190Z] [BOT] ✅ Posted message: Senior Software Engineer, Android Test Engineering @ reddit in #JID_98d4f0de
[2026-01-20T21:55:06.190Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T21:55:06.191Z] [BOT] 💾 Added channel posting: Senior Software Engineer, Android Test Engineering @ reddit → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2971 jobs in database
[2026-01-20T21:55:06.193Z] [BOT] ✅ No jobs to archive (all 2971 jobs within 7-day window)
[2026-01-20T21:55:06.213Z] [BOT] 💾 Saved posted_jobs.json: 2971 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:07.714Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
[2026-01-20T21:55:07.715Z] [BOT] 💾 BEFORE ARCHIVING: 2972 jobs in database
[2026-01-20T21:55:07.717Z] [BOT] ✅ No jobs to archive (all 2972 jobs within 7-day window)
[2026-01-20T21:55:07.735Z] [BOT] 💾 Saved posted_jobs.json: 2972 active jobs
[2026-01-20T21:55:07.735Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:07.735Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
💾 BEFORE ARCHIVING: 2973 jobs in database
[2026-01-20T21:55:07.737Z] [BOT] ✅ No jobs to archive (all 2973 jobs within 7-day window)
[2026-01-20T21:55:07.754Z] [BOT] 💾 Saved posted_jobs.json: 2973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:07.754Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
[2026-01-20T21:55:07.754Z] [BOT] 💾 BEFORE ARCHIVING: 2974 jobs in database
[2026-01-20T21:55:07.756Z] [BOT] ✅ No jobs to archive (all 2974 jobs within 7-day window)
[2026-01-20T21:55:07.773Z] [BOT] 💾 Saved posted_jobs.json: 2974 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:07.773Z] [BOT] 💾 Marked as posted: Senior Software Engineer, Android Test Engineering @ reddit (instance #1)
[2026-01-20T21:55:07.774Z] [BOT] 💾 BEFORE ARCHIVING: 2975 jobs in database
[2026-01-20T21:55:07.775Z] [BOT] ✅ No jobs to archive (all 2975 jobs within 7-day window)
[2026-01-20T21:55:07.791Z] [BOT] 💾 Saved posted_jobs.json: 2975 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:07.792Z] [BOT] 📍 [ROUTING] "Technical Support Manager " @ reddit
[2026-01-20T21:55:07.792Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T21:55:08.006Z] [BOT] ✅ Posted message: Technical Support Manager  @ reddit in #ai-jobs
  ✅ Industry: Technical Support Manager  @ reddit
[2026-01-20T21:55:08.007Z] [BOT] 💾 Added channel posting: Technical Support Manager  @ reddit → category channel (1 total channels)
[2026-01-20T21:55:08.007Z] [BOT] 💾 BEFORE ARCHIVING: 2976 jobs in database
[2026-01-20T21:55:08.009Z] [BOT] ✅ No jobs to archive (all 2976 jobs within 7-day window)
[2026-01-20T21:55:08.027Z] [BOT] 💾 Saved posted_jobs.json: 2976 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:09.529Z] [BOT] 💾 Marked as posted: Technical Support Manager  @ reddit (instance #1)
[2026-01-20T21:55:09.529Z] [BOT] 💾 BEFORE ARCHIVING: 2977 jobs in database
[2026-01-20T21:55:09.531Z] [BOT] ✅ No jobs to archive (all 2977 jobs within 7-day window)
[2026-01-20T21:55:09.547Z] [BOT] 💾 Saved posted_jobs.json: 2977 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:12.548Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-20T21:55:12.549Z] [BOT] 📍 [ROUTING] "Product Manager, Claude Code (Enterprise)" @ anthropic
[2026-01-20T21:55:12.549Z] [BOT] Category: TECH (matched: "product")
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:55:12.834Z] [BOT] ✅ Posted message: Product Manager, Claude Code (Enterprise) @ anthropic in #tech-jobs
  ✅ Industry: Product Manager, Claude Code (Enterprise) @ anthropic
[2026-01-20T21:55:12.834Z] [BOT] 💾 Added channel posting: Product Manager, Claude Code (Enterprise) @ anthropic → category channel (1 total channels)
[2026-01-20T21:55:12.834Z] [BOT] 💾 BEFORE ARCHIVING: 2978 jobs in database
[2026-01-20T21:55:12.836Z] [BOT] ✅ No jobs to archive (all 2978 jobs within 7-day window)
[2026-01-20T21:55:12.854Z] [BOT] 💾 Saved posted_jobs.json: 2978 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:14.356Z] [BOT] 💾 Marked as posted: Product Manager, Claude Code (Enterprise) @ anthropic (instance #1)
[2026-01-20T21:55:14.356Z] [BOT] 💾 BEFORE ARCHIVING: 2979 jobs in database
[2026-01-20T21:55:14.358Z] [BOT] ✅ No jobs to archive (all 2979 jobs within 7-day window)
[2026-01-20T21:55:14.377Z] [BOT] 💾 Saved posted_jobs.json: 2979 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:14.377Z] [BOT] 📍 [ROUTING] "Software Engineer 3" @ ORG_3eab285c
[2026-01-20T21:55:14.377Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T21:55:14.557Z] [BOT] ✅ Posted message: Software Engineer 3 @ ORG_3eab285c in #tech-jobs
  ✅ Industry: Software Engineer 3 @ ORG_3eab285c
[2026-01-20T21:55:14.558Z] [BOT] 💾 Added channel posting: Software Engineer 3 @ ORG_3eab285c → category channel (1 total channels)
[2026-01-20T21:55:14.558Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-20T21:55:14.560Z] [BOT] ✅ No jobs to archive (all 2980 jobs within 7-day window)
[2026-01-20T21:55:14.579Z] [BOT] 💾 Saved posted_jobs.json: 2980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:16.081Z] [BOT] 💾 Marked as posted: Software Engineer 3 @ ORG_3eab285c (instance #1)
[2026-01-20T21:55:16.081Z] [BOT] 💾 BEFORE ARCHIVING: 2981 jobs in database
[2026-01-20T21:55:16.083Z] [BOT] ✅ No jobs to archive (all 2981 jobs within 7-day window)
[2026-01-20T21:55:16.102Z] [BOT] 💾 Saved posted_jobs.json: 2981 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:19.103Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T21:55:19.103Z] [BOT] 📍 [ROUTING] "Data Processing Technician" @ ORG_39417f32 Allen
[2026-01-20T21:55:19.103Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1462...4531)
[2026-01-20T21:55:19.103Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T21:55:19.336Z] [BOT] ✅ Posted message: Data Processing Technician @ ORG_39417f32 Allen in #JID_fb739488
  ✅ Industry: Data Processing Technician @ ORG_39417f32 Allen
[2026-01-20T21:55:19.336Z] [BOT] 💾 Added channel posting: Data Processing Technician @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-20T21:55:19.336Z] [BOT] 💾 BEFORE ARCHIVING: 2982 jobs in database
[2026-01-20T21:55:19.338Z] [BOT] ✅ No jobs to archive (all 2982 jobs within 7-day window)
[2026-01-20T21:55:19.355Z] [BOT] 💾 Saved posted_jobs.json: 2982 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:20.857Z] [BOT] 💾 Marked as posted: Data Processing Technician @ ORG_39417f32 Allen (instance #1)
[2026-01-20T21:55:20.857Z] [BOT] 💾 BEFORE ARCHIVING: 2983 jobs in database
[2026-01-20T21:55:20.859Z] [BOT] ✅ No jobs to archive (all 2983 jobs within 7-day window)
[2026-01-20T21:55:20.875Z] [BOT] 💾 Saved posted_jobs.json: 2983 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:23.875Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-20T21:55:23.876Z] [BOT] 📍 [ROUTING] "Technical Consultant" @ brex
[2026-01-20T21:55:23.876Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T21:55:24.196Z] [BOT] ✅ Posted message: Technical Consultant @ brex in #finance-jobs
[2026-01-20T21:55:24.196Z] [BOT] ✅ Industry: Technical Consultant @ brex
[2026-01-20T21:55:24.197Z] [BOT] 💾 Added channel posting: Technical Consultant @ brex → category channel (1 total channels)
[2026-01-20T21:55:24.197Z] [BOT] 💾 BEFORE ARCHIVING: 2984 jobs in database
[2026-01-20T21:55:24.198Z] [BOT] ✅ No jobs to archive (all 2984 jobs within 7-day window)
[2026-01-20T21:55:24.215Z] [BOT] 💾 Saved posted_jobs.json: 2984 active jobs
[2026-01-20T21:55:24.215Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:25.717Z] [BOT] 💾 Marked as posted: Technical Consultant @ brex (instance #1)
[2026-01-20T21:55:25.717Z] [BOT] 💾 BEFORE ARCHIVING: 2985 jobs in database
[2026-01-20T21:55:25.719Z] [BOT] ✅ No jobs to archive (all 2985 jobs within 7-day window)
[2026-01-20T21:55:25.737Z] [BOT] 💾 Saved posted_jobs.json: 2985 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:25.737Z] [BOT] 💾 Marked as posted: Technical Consultant @ brex (instance #1)
[2026-01-20T21:55:25.737Z] [BOT] 💾 BEFORE ARCHIVING: 2986 jobs in database
[2026-01-20T21:55:25.739Z] [BOT] ✅ No jobs to archive (all 2986 jobs within 7-day window)
[2026-01-20T21:55:25.756Z] [BOT] 💾 Saved posted_jobs.json: 2986 active jobs
[2026-01-20T21:55:25.756Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:25.756Z] [BOT] 💾 Marked as posted: Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 2987 jobs in database
[2026-01-20T21:55:25.758Z] [BOT] ✅ No jobs to archive (all 2987 jobs within 7-day window)
[2026-01-20T21:55:25.775Z] [BOT] 💾 Saved posted_jobs.json: 2987 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:25.775Z] [BOT] 💾 Marked as posted: Technical Consultant @ brex (instance #1)
[2026-01-20T21:55:25.775Z] [BOT] 💾 BEFORE ARCHIVING: 2988 jobs in database
[2026-01-20T21:55:25.777Z] [BOT] ✅ No jobs to archive (all 2988 jobs within 7-day window)
[2026-01-20T21:55:25.793Z] [BOT] 💾 Saved posted_jobs.json: 2988 active jobs
[2026-01-20T21:55:25.793Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:25.793Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: finance-jobs (1462...4023)
[2026-01-20T21:55:26.033Z] [BOT] ✅ Posted message: Associate Technical Consultant @ brex in #finance-jobs
  ✅ Industry: Associate Technical Consultant @ brex
[2026-01-20T21:55:26.034Z] [BOT] 💾 Added channel posting: Associate Technical Consultant @ brex → category channel (1 total channels)
[2026-01-20T21:55:26.034Z] [BOT] 💾 BEFORE ARCHIVING: 2989 jobs in database
[2026-01-20T21:55:26.036Z] [BOT] ✅ No jobs to archive (all 2989 jobs within 7-day window)
[2026-01-20T21:55:26.052Z] [BOT] 💾 Saved posted_jobs.json: 2989 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:27.820Z] [BOT] ✅ Posted message: Associate Technical Consultant @ brex in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T21:55:27.820Z] [BOT] 💾 Added channel posting: Associate Technical Consultant @ brex → location channel (2 total channels)
[2026-01-20T21:55:27.821Z] [BOT] 💾 BEFORE ARCHIVING: 2989 jobs in database
[2026-01-20T21:55:27.822Z] [BOT] ✅ No jobs to archive (all 2989 jobs within 7-day window)
[2026-01-20T21:55:27.839Z] [BOT] 💾 Saved posted_jobs.json: 2989 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:29.340Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
[2026-01-20T21:55:29.340Z] [BOT] 💾 BEFORE ARCHIVING: 2990 jobs in database
[2026-01-20T21:55:29.342Z] [BOT] ✅ No jobs to archive (all 2990 jobs within 7-day window)
[2026-01-20T21:55:29.361Z] [BOT] 💾 Saved posted_jobs.json: 2990 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:29.361Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
[2026-01-20T21:55:29.361Z] [BOT] 💾 BEFORE ARCHIVING: 2991 jobs in database
[2026-01-20T21:55:29.363Z] [BOT] ✅ No jobs to archive (all 2991 jobs within 7-day window)
[2026-01-20T21:55:29.379Z] [BOT] 💾 Saved posted_jobs.json: 2991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:29.379Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
[2026-01-20T21:55:29.380Z] [BOT] 💾 BEFORE ARCHIVING: 2992 jobs in database
[2026-01-20T21:55:29.381Z] [BOT] ✅ No jobs to archive (all 2992 jobs within 7-day window)
[2026-01-20T21:55:29.399Z] [BOT] 💾 Saved posted_jobs.json: 2992 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T21:55:32.400Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T21:55:32.401Z] [BOT] ⏭️  Skipping duplicate: JID_595a8cc0 (posted within 7 days)
[2026-01-20T21:55:32.401Z] [BOT] ⏭️  Skipping duplicate: JID_c3efc08f (posted within 7 days)
[2026-01-20T21:55:32.401Z] [BOT] ⏭️  Skipping duplicate: JID_406a35ec (posted within 7 days)
[2026-01-20T21:55:32.401Z] [BOT] ⏭️  Skipping duplicate: JID_ebfd7f8f (posted within 7 days)
[2026-01-20T21:55:32.402Z] [BOT] ⏭️  Skipping duplicate: JID_66854faa (posted within 7 days)
[2026-01-20T21:55:32.402Z] [BOT] ⏭️  Skipping duplicate: JID_35c57ace (posted within 7 days)
[2026-01-20T21:55:32.402Z] [BOT] ⏭️  Skipping duplicate: JID_3a39db73-iii_r-2347075 (posted within 7 days)
[2026-01-20T21:55:32.402Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_5851cc87-technician_r0231593 (posted within 7 days)
[2026-01-20T21:55:32.402Z] [BOT] ⏭️  Skipping duplicate: JID_027996fc (posted within 7 days)
⏭️  Skipping duplicate: JID_b2d91260 (posted within 7 days)
[2026-01-20T21:55:32.504Z] [BOT] ✅ Loaded pending queue: 2762 total (2742 pending, 20 enriched, 0 posted)
[2026-01-20T21:55:32.682Z] [BOT] ✅ Saved pending queue: 2762 total (2742 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T21:55:32.746Z] [BOT] 📂 Loaded 5512 existing routing entries
[2026-01-20T21:55:32.819Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5522
   Timestamp: 2026-01-20T21:55:32.796Z
[2026-01-20T21:55:32.820Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
[2026-01-20T21:55:32.820Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-20T21:55:32.820Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 6
   Top channels:
[2026-01-20T21:55:32.821Z] [BOT] 1. #ai-jobs: 5 posts
     2. #JID_98d4f0de: 3 posts
     3. #tech-jobs: 2 posts
     4. #finance-jobs: 2 posts
     5. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-20T21:55:34.846Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2608) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*