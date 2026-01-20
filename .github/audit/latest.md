# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T04:04:05.700Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T04:03:24.402Z] ========================================
[2026-01-20T04:03:24.404Z] Discord Bot Execution Log
[2026-01-20T04:03:24.404Z] Environment: GitHub Actions
[2026-01-20T04:03:24.404Z] Node Version: v20.19.6
[2026-01-20T04:03:24.404Z] ========================================
[2026-01-20T04:03:24.405Z] Environment Variables Check:
[2026-01-20T04:03:24.405Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T04:03:24.405Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.405Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T04:03:24.405Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T04:03:24.405Z] 
Multi-Channel Configuration:
[2026-01-20T04:03:24.405Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.405Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.405Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.405Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.406Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.406Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.406Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.406Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.406Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T04:03:24.406Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T04:03:24.406Z] 
Data Files Check:
[2026-01-20T04:03:24.407Z] .github/data/new_jobs.json: ✅ Exists (10 items, 121131 bytes)
[2026-01-20T04:03:24.418Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1527737 bytes)
[2026-01-20T04:03:24.419Z] 
========================================
[2026-01-20T04:03:24.419Z] Starting Enhanced Discord Bot...
[2026-01-20T04:03:24.419Z] ========================================
[2026-01-20T04:03:24.965Z] [BOT] ✅ Loaded V2 database: 2775 jobs
[2026-01-20T04:03:25.367Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T04:03:25.367Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T04:03:25.367Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T04:03:25.494Z] [BOT] ✅ Loaded pending queue: 2814 total (2794 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager, Commercial Sales Engineering (AMER - East) at datadog
[2026-01-20T04:03:25.498Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T04:03:25.499Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-20T04:03:25.499Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-20T04:03:25.500Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-20T04:03:25.500Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Expansion Account Executive, Enterprise @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-20T04:03:25.500Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T04:03:25.504Z] [BOT] 📌 Posting 3 jobs to #tech-jobs
[2026-01-20T04:03:25.505Z] [BOT] 📍 [ROUTING] "Manager, Commercial Sales Engineering (AMER - East)" @ datadog
[2026-01-20T04:03:25.505Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T04:03:25.510Z] [BOT ERROR] (node:2376) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T04:03:25.683Z] [BOT] ✅ Posted message: Manager, Commercial Sales Engineering (AMER - East) @ datadog in #tech-jobs
[2026-01-20T04:03:25.683Z] [BOT] ✅ Industry: Manager, Commercial Sales Engineering (AMER - East) @ datadog
[2026-01-20T04:03:25.684Z] [BOT] 💾 Added channel posting: Manager, Commercial Sales Engineering (AMER - East) @ datadog → category channel (1 total channels)
[2026-01-20T04:03:25.684Z] [BOT] 💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-20T04:03:25.687Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T04:03:25.692Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-20T04:03:25.692Z] [BOT] ✅ Archiving complete: 12 archived, 2764 active
[2026-01-20T04:03:25.716Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
[2026-01-20T04:03:25.716Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:27.341Z] [BOT] ✅ Posted message: Manager, Commercial Sales Engineering (AMER - East) @ datadog in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T04:03:27.341Z] [BOT] 💾 Added channel posting: Manager, Commercial Sales Engineering (AMER - East) @ datadog → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2764 jobs in database
[2026-01-20T04:03:27.344Z] [BOT] ✅ No jobs to archive (all 2764 jobs within 7-day window)
[2026-01-20T04:03:27.361Z] [BOT] 💾 Saved posted_jobs.json: 2764 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:28.863Z] [BOT] 💾 Marked as posted: Manager, Commercial Sales Engineering (AMER - East) @ datadog (instance #1)
[2026-01-20T04:03:28.863Z] [BOT] 💾 BEFORE ARCHIVING: 2765 jobs in database
[2026-01-20T04:03:28.865Z] [BOT] ✅ No jobs to archive (all 2765 jobs within 7-day window)
[2026-01-20T04:03:28.883Z] [BOT] 💾 Saved posted_jobs.json: 2765 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:28.883Z] [BOT] 📍 [ROUTING] "GIS Technician 1 - Energy" @ ORG_4db4f14a Technologies
[2026-01-20T04:03:28.883Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T04:03:29.160Z] [BOT] ✅ Posted message: GIS Technician 1 - Energy @ ORG_4db4f14a Technologies in #tech-jobs
  ✅ Industry: GIS Technician 1 - Energy @ ORG_4db4f14a Technologies
[2026-01-20T04:03:29.161Z] [BOT] 💾 Added channel posting: GIS Technician 1 - Energy @ ORG_4db4f14a Technologies → category channel (1 total channels)
[2026-01-20T04:03:29.161Z] [BOT] 💾 BEFORE ARCHIVING: 2766 jobs in database
[2026-01-20T04:03:29.163Z] [BOT] ✅ No jobs to archive (all 2766 jobs within 7-day window)
[2026-01-20T04:03:29.181Z] [BOT] 💾 Saved posted_jobs.json: 2766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:30.882Z] [BOT] ✅ Posted message: GIS Technician 1 - Energy @ ORG_4db4f14a Technologies in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T04:03:30.883Z] [BOT] 💾 Added channel posting: GIS Technician 1 - Energy @ ORG_4db4f14a Technologies → location channel (2 total channels)
[2026-01-20T04:03:30.883Z] [BOT] 💾 BEFORE ARCHIVING: 2766 jobs in database
[2026-01-20T04:03:30.885Z] [BOT] ✅ No jobs to archive (all 2766 jobs within 7-day window)
[2026-01-20T04:03:30.904Z] [BOT] 💾 Saved posted_jobs.json: 2766 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:32.406Z] [BOT] 💾 Marked as posted: GIS Technician 1 - Energy @ ORG_4db4f14a Technologies (instance #1)
[2026-01-20T04:03:32.406Z] [BOT] 💾 BEFORE ARCHIVING: 2767 jobs in database
[2026-01-20T04:03:32.408Z] [BOT] ✅ No jobs to archive (all 2767 jobs within 7-day window)
[2026-01-20T04:03:32.426Z] [BOT] 💾 Saved posted_jobs.json: 2767 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:32.427Z] [BOT] 📍 [ROUTING] "Research Engineer, Discovery" @ anthropic
   Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-20T04:03:32.732Z] [BOT] ✅ Posted message: Research Engineer, Discovery @ anthropic in #tech-jobs
  ✅ Industry: Research Engineer, Discovery @ anthropic
[2026-01-20T04:03:32.733Z] [BOT] 💾 Added channel posting: Research Engineer, Discovery @ anthropic → category channel (1 total channels)
[2026-01-20T04:03:32.733Z] [BOT] 💾 BEFORE ARCHIVING: 2768 jobs in database
[2026-01-20T04:03:32.735Z] [BOT] ✅ No jobs to archive (all 2768 jobs within 7-day window)
[2026-01-20T04:03:32.750Z] [BOT] 💾 Saved posted_jobs.json: 2768 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:34.250Z] [BOT] 💾 Marked as posted: Research Engineer, Discovery @ anthropic (instance #1)
[2026-01-20T04:03:34.250Z] [BOT] 💾 BEFORE ARCHIVING: 2769 jobs in database
[2026-01-20T04:03:34.252Z] [BOT] ✅ No jobs to archive (all 2769 jobs within 7-day window)
[2026-01-20T04:03:34.271Z] [BOT] 💾 Saved posted_jobs.json: 2769 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:37.271Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-20T04:03:37.271Z] [BOT] 📍 [ROUTING] "Expansion Account Executive, Enterprise" @ brex
[2026-01-20T04:03:37.272Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-20T04:03:37.545Z] [BOT] ✅ Posted message: Expansion Account Executive, Enterprise @ brex in #finance-jobs
[2026-01-20T04:03:37.545Z] [BOT] ✅ Industry: Expansion Account Executive, Enterprise @ brex
[2026-01-20T04:03:37.546Z] [BOT] 💾 Added channel posting: Expansion Account Executive, Enterprise @ brex → category channel (1 total channels)
[2026-01-20T04:03:37.546Z] [BOT] 💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-20T04:03:37.548Z] [BOT] ✅ No jobs to archive (all 2770 jobs within 7-day window)
[2026-01-20T04:03:37.566Z] [BOT] 💾 Saved posted_jobs.json: 2770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:39.210Z] [BOT] ✅ Posted message: Expansion Account Executive, Enterprise @ brex in #JID_ead674af
[2026-01-20T04:03:39.210Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T04:03:39.211Z] [BOT] 💾 Added channel posting: Expansion Account Executive, Enterprise @ brex → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2770 jobs in database
[2026-01-20T04:03:39.212Z] [BOT] ✅ No jobs to archive (all 2770 jobs within 7-day window)
[2026-01-20T04:03:39.230Z] [BOT] 💾 Saved posted_jobs.json: 2770 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:40.731Z] [BOT] 💾 Marked as posted: Expansion Account Executive, Enterprise @ brex (instance #1)
[2026-01-20T04:03:40.731Z] [BOT] 💾 BEFORE ARCHIVING: 2771 jobs in database
[2026-01-20T04:03:40.733Z] [BOT] ✅ No jobs to archive (all 2771 jobs within 7-day window)
[2026-01-20T04:03:40.752Z] [BOT] 💾 Saved posted_jobs.json: 2771 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:40.752Z] [BOT] 💾 Marked as posted: Expansion Account Executive, Enterprise @ brex (instance #1)
[2026-01-20T04:03:40.753Z] [BOT] 💾 BEFORE ARCHIVING: 2772 jobs in database
[2026-01-20T04:03:40.754Z] [BOT] ✅ No jobs to archive (all 2772 jobs within 7-day window)
[2026-01-20T04:03:40.773Z] [BOT] 💾 Saved posted_jobs.json: 2772 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:40.773Z] [BOT] 💾 Marked as posted: Expansion Account Executive, Enterprise @ brex (instance #1)
[2026-01-20T04:03:40.773Z] [BOT] 💾 BEFORE ARCHIVING: 2773 jobs in database
[2026-01-20T04:03:40.775Z] [BOT] ✅ No jobs to archive (all 2773 jobs within 7-day window)
[2026-01-20T04:03:40.792Z] [BOT] 💾 Saved posted_jobs.json: 2773 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:40.793Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Phoenix" @ verkada
[2026-01-20T04:03:40.793Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: finance-jobs (1462...4023)
[2026-01-20T04:03:41.038Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), Phoenix @ verkada in #finance-jobs
  ✅ Industry: Sales Development Representative (AAE), Phoenix @ verkada
[2026-01-20T04:03:41.039Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), Phoenix @ verkada → category channel (1 total channels)
[2026-01-20T04:03:41.039Z] [BOT] 💾 BEFORE ARCHIVING: 2774 jobs in database
[2026-01-20T04:03:41.041Z] [BOT] ✅ No jobs to archive (all 2774 jobs within 7-day window)
[2026-01-20T04:03:41.059Z] [BOT] 💾 Saved posted_jobs.json: 2774 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:42.561Z] [BOT] 💾 Marked as posted: Sales Development Representative (AAE), Phoenix @ verkada (instance #1)
[2026-01-20T04:03:42.561Z] [BOT] 💾 BEFORE ARCHIVING: 2775 jobs in database
[2026-01-20T04:03:42.562Z] [BOT] ✅ No jobs to archive (all 2775 jobs within 7-day window)
[2026-01-20T04:03:42.579Z] [BOT] 💾 Saved posted_jobs.json: 2775 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:45.580Z] [BOT] 📌 Posting 5 jobs to #ai-jobs
[2026-01-20T04:03:45.581Z] [BOT] 📍 [ROUTING] "Legal Counsel, Audiobook Licensing" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T04:03:45.919Z] [BOT] ✅ Posted message: Legal Counsel, Audiobook Licensing @ spotify in #ai-jobs
  ✅ Industry: Legal Counsel, Audiobook Licensing @ spotify
[2026-01-20T04:03:45.920Z] [BOT] 💾 Added channel posting: Legal Counsel, Audiobook Licensing @ spotify → category channel (1 total channels)
[2026-01-20T04:03:45.920Z] [BOT] 💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-20T04:03:45.922Z] [BOT] ✅ No jobs to archive (all 2776 jobs within 7-day window)
[2026-01-20T04:03:45.940Z] [BOT] 💾 Saved posted_jobs.json: 2776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:47.615Z] [BOT] ✅ Posted message: Legal Counsel, Audiobook Licensing @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-20T04:03:47.615Z] [BOT] 💾 Added channel posting: Legal Counsel, Audiobook Licensing @ spotify → location channel (2 total channels)
[2026-01-20T04:03:47.616Z] [BOT] 💾 BEFORE ARCHIVING: 2776 jobs in database
[2026-01-20T04:03:47.618Z] [BOT] ✅ No jobs to archive (all 2776 jobs within 7-day window)
[2026-01-20T04:03:47.637Z] [BOT] 💾 Saved posted_jobs.json: 2776 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:49.139Z] [BOT] 💾 Marked as posted: Legal Counsel, Audiobook Licensing @ spotify (instance #1)
[2026-01-20T04:03:49.139Z] [BOT] 💾 BEFORE ARCHIVING: 2777 jobs in database
[2026-01-20T04:03:49.141Z] [BOT] ✅ No jobs to archive (all 2777 jobs within 7-day window)
[2026-01-20T04:03:49.156Z] [BOT] 💾 Saved posted_jobs.json: 2777 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:49.157Z] [BOT] 📍 [ROUTING] "Account Executive - Backstage" @ spotify
[2026-01-20T04:03:49.157Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T04:03:49.339Z] [BOT] ✅ Posted message: Account Executive - Backstage @ spotify in #ai-jobs
[2026-01-20T04:03:49.339Z] [BOT] ✅ Industry: Account Executive - Backstage @ spotify
[2026-01-20T04:03:49.340Z] [BOT] 💾 Added channel posting: Account Executive - Backstage @ spotify → category channel (1 total channels)
[2026-01-20T04:03:49.340Z] [BOT] 💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-20T04:03:49.342Z] [BOT] ✅ No jobs to archive (all 2778 jobs within 7-day window)
[2026-01-20T04:03:49.360Z] [BOT] 💾 Saved posted_jobs.json: 2778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:51.065Z] [BOT] ✅ Posted message: Account Executive - Backstage @ spotify in #JID_98d4f0de
[2026-01-20T04:03:51.065Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T04:03:51.066Z] [BOT] 💾 Added channel posting: Account Executive - Backstage @ spotify → location channel (2 total channels)
[2026-01-20T04:03:51.066Z] [BOT] 💾 BEFORE ARCHIVING: 2778 jobs in database
[2026-01-20T04:03:51.068Z] [BOT] ✅ No jobs to archive (all 2778 jobs within 7-day window)
[2026-01-20T04:03:51.085Z] [BOT] 💾 Saved posted_jobs.json: 2778 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:52.586Z] [BOT] 💾 Marked as posted: Account Executive - Backstage @ spotify (instance #1)
[2026-01-20T04:03:52.586Z] [BOT] 💾 BEFORE ARCHIVING: 2779 jobs in database
[2026-01-20T04:03:52.588Z] [BOT] ✅ No jobs to archive (all 2779 jobs within 7-day window)
[2026-01-20T04:03:52.604Z] [BOT] 💾 Saved posted_jobs.json: 2779 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:52.604Z] [BOT] 📍 [ROUTING] "Software Engineer - C++ - Object-Oriented Design/Object-Oriented Programming" @ ORG_fb8c4aa0 Corporation
[2026-01-20T04:03:52.604Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T04:03:52.816Z] [BOT] ✅ Posted message: Software Engineer - C++ - Object-Oriented Design/Object-Oriented Programming @ ORG_fb8c4aa0 Corporation in #ai-jobs
[2026-01-20T04:03:52.816Z] [BOT] ✅ Industry: Software Engineer - C++ - Object-Oriented Design/Object-Oriented Programming @ ORG_fb8c4aa0 Corporation
[2026-01-20T04:03:52.817Z] [BOT] 💾 Added channel posting: Software Engineer - C++ - Object-Oriented Design/Object-Oriented Programming @ ORG_fb8c4aa0 Corporation → category channel (1 total channels)
[2026-01-20T04:03:52.817Z] [BOT] 💾 BEFORE ARCHIVING: 2780 jobs in database
[2026-01-20T04:03:52.819Z] [BOT] ✅ No jobs to archive (all 2780 jobs within 7-day window)
[2026-01-20T04:03:52.837Z] [BOT] 💾 Saved posted_jobs.json: 2780 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:54.338Z] [BOT] 💾 Marked as posted: Software Engineer - C++ - Object-Oriented Design/Object-Oriented Programming @ ORG_fb8c4aa0 Corporation (instance #1)
💾 BEFORE ARCHIVING: 2781 jobs in database
[2026-01-20T04:03:54.340Z] [BOT] ✅ No jobs to archive (all 2781 jobs within 7-day window)
[2026-01-20T04:03:54.356Z] [BOT] 💾 Saved posted_jobs.json: 2781 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:54.356Z] [BOT] 📍 [ROUTING] "Senior Client Partner, Large Customer Sales (Alcohol)" @ reddit
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-20T04:03:54.530Z] [BOT] ✅ Posted message: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit in #ai-jobs
  ✅ Industry: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit
[2026-01-20T04:03:54.530Z] [BOT] 💾 Added channel posting: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit → category channel (1 total channels)
[2026-01-20T04:03:54.530Z] [BOT] 💾 BEFORE ARCHIVING: 2782 jobs in database
[2026-01-20T04:03:54.532Z] [BOT] ✅ No jobs to archive (all 2782 jobs within 7-day window)
[2026-01-20T04:03:54.548Z] [BOT] 💾 Saved posted_jobs.json: 2782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:56.291Z] [BOT] ✅ Posted message: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit in #JID_98d4f0de
[2026-01-20T04:03:56.291Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T04:03:56.292Z] [BOT] 💾 Added channel posting: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit → location channel (2 total channels)
[2026-01-20T04:03:56.292Z] [BOT] 💾 BEFORE ARCHIVING: 2782 jobs in database
[2026-01-20T04:03:56.294Z] [BOT] ✅ No jobs to archive (all 2782 jobs within 7-day window)
[2026-01-20T04:03:56.311Z] [BOT] 💾 Saved posted_jobs.json: 2782 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:57.812Z] [BOT] 💾 Marked as posted: Senior Client Partner, Large Customer Sales (Alcohol) @ reddit (instance #1)
[2026-01-20T04:03:57.812Z] [BOT] 💾 BEFORE ARCHIVING: 2783 jobs in database
[2026-01-20T04:03:57.814Z] [BOT] ✅ No jobs to archive (all 2783 jobs within 7-day window)
[2026-01-20T04:03:57.830Z] [BOT] 💾 Saved posted_jobs.json: 2783 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:57.830Z] [BOT] 📍 [ROUTING] "Engineering Manager, ML Acceleration" @ anthropic
[2026-01-20T04:03:57.830Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T04:03:58.018Z] [BOT] ✅ Posted message: Engineering Manager, ML Acceleration @ anthropic in #ai-jobs
[2026-01-20T04:03:58.018Z] [BOT] ✅ Industry: Engineering Manager, ML Acceleration @ anthropic
[2026-01-20T04:03:58.018Z] [BOT] 💾 Added channel posting: Engineering Manager, ML Acceleration @ anthropic → category channel (1 total channels)
[2026-01-20T04:03:58.018Z] [BOT] 💾 BEFORE ARCHIVING: 2784 jobs in database
[2026-01-20T04:03:58.020Z] [BOT] ✅ No jobs to archive (all 2784 jobs within 7-day window)
[2026-01-20T04:03:58.037Z] [BOT] 💾 Saved posted_jobs.json: 2784 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:03:59.538Z] [BOT] 💾 Marked as posted: Engineering Manager, ML Acceleration @ anthropic (instance #1)
[2026-01-20T04:03:59.539Z] [BOT] 💾 BEFORE ARCHIVING: 2785 jobs in database
[2026-01-20T04:03:59.540Z] [BOT] ✅ No jobs to archive (all 2785 jobs within 7-day window)
[2026-01-20T04:03:59.556Z] [BOT] 💾 Saved posted_jobs.json: 2785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T04:04:02.557Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T04:04:02.557Z] [BOT] ⏭️  Skipping duplicate: JID_e8716d5a (posted within 7 days)
[2026-01-20T04:04:02.558Z] [BOT] ⏭️  Skipping duplicate: JID_61e5c655 (posted within 7 days)
[2026-01-20T04:04:02.558Z] [BOT] ⏭️  Skipping duplicate: JID_514f3f9d (posted within 7 days)
[2026-01-20T04:04:02.558Z] [BOT] ⏭️  Skipping duplicate: JID_4b93d4f9 (posted within 7 days)
[2026-01-20T04:04:02.558Z] [BOT] ⏭️  Skipping duplicate: JID_458aaa8e (posted within 7 days)
[2026-01-20T04:04:02.558Z] [BOT] ⏭️  Skipping duplicate: JID_cb497d96-_2633855 (posted within 7 days)
[2026-01-20T04:04:02.558Z] [BOT] ⏭️  Skipping duplicate: JID_f905c4bf (posted within 7 days)
[2026-01-20T04:04:02.558Z] [BOT] ⏭️  Skipping duplicate: JID_eb8e81ec (posted within 7 days)
[2026-01-20T04:04:02.559Z] [BOT] ⏭️  Skipping duplicate: JID_8721beb5 (posted within 7 days)
[2026-01-20T04:04:02.559Z] [BOT] ⏭️  Skipping duplicate: JID_9237e4ff (posted within 7 days)
[2026-01-20T04:04:02.667Z] [BOT] ✅ Loaded pending queue: 2814 total (2794 pending, 20 enriched, 0 posted)
[2026-01-20T04:04:02.847Z] [BOT] ✅ Saved pending queue: 2814 total (2794 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T04:04:02.909Z] [BOT] 📂 Loaded 5255 existing routing entries
[2026-01-20T04:04:02.982Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5265
   Timestamp: 2026-01-20T04:04:02.960Z
[2026-01-20T04:04:02.984Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 5
   Top channels:
     1. #ai-jobs: 5 posts
     2. #JID_98d4f0de: 4 posts
     3. #tech-jobs: 3 posts
     4. #JID_ead674af: 2 posts
     5. #finance-jobs: 2 posts
[STATS] Channel stats saved
[2026-01-20T04:04:05.006Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2376) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*