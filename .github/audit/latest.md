# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T18:53:34.013Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T18:52:54.624Z] ========================================
[2026-01-21T18:52:54.626Z] Discord Bot Execution Log
[2026-01-21T18:52:54.626Z] Environment: GitHub Actions
[2026-01-21T18:52:54.626Z] Node Version: v20.19.6
[2026-01-21T18:52:54.626Z] ========================================
[2026-01-21T18:52:54.626Z] Environment Variables Check:
[2026-01-21T18:52:54.626Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T18:52:54.626Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.627Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T18:52:54.627Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T18:52:54.627Z] 
Multi-Channel Configuration:
[2026-01-21T18:52:54.627Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.627Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.627Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.627Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.627Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.627Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.627Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.627Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.627Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T18:52:54.628Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T18:52:54.628Z] 
Data Files Check:
[2026-01-21T18:52:54.629Z] .github/data/new_jobs.json: ✅ Exists (10 items, 96489 bytes)
[2026-01-21T18:52:54.643Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2140689 bytes)
[2026-01-21T18:52:54.643Z] 
========================================
[2026-01-21T18:52:54.643Z] Starting Enhanced Discord Bot...
[2026-01-21T18:52:54.643Z] ========================================
[2026-01-21T18:52:55.232Z] [BOT] ✅ Loaded V2 database: 3726 jobs
[2026-01-21T18:52:55.880Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T18:52:55.880Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T18:52:55.880Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T18:52:56.000Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Developer 1 at Oracle
[2026-01-21T18:52:56.005Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T18:52:56.005Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T18:52:56.006Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T18:52:56.007Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T18:52:56.007Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T18:52:56.011Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T18:52:56.011Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
[2026-01-21T18:52:56.012Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:52:56.029Z] [BOT ERROR] (node:2881) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T18:52:56.404Z] [BOT] ✅ Posted message: Software Developer 1 @ ORG_dc7620eb in #tech-jobs
[2026-01-21T18:52:56.405Z] [BOT] ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2026-01-21T18:52:56.406Z] [BOT] 💾 Added channel posting: Software Developer 1 @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-21T18:52:56.406Z] [BOT] 💾 BEFORE ARCHIVING: 3727 jobs in database
[2026-01-21T18:52:56.409Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T18:52:56.415Z] [BOT] 📦 Archived 15 jobs to 2026-01.json (15 total in archive)
[2026-01-21T18:52:56.415Z] [BOT] ✅ Archiving complete: 15 archived, 3712 active
[2026-01-21T18:52:56.439Z] [BOT] 💾 Saved posted_jobs.json: 3712 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:52:57.942Z] [BOT] 💾 Marked as posted: Software Developer 1 @ ORG_dc7620eb (instance #1)
[2026-01-21T18:52:57.942Z] [BOT] 💾 BEFORE ARCHIVING: 3713 jobs in database
[2026-01-21T18:52:57.945Z] [BOT] ✅ No jobs to archive (all 3713 jobs within 7-day window)
[2026-01-21T18:52:57.966Z] [BOT] 💾 Saved posted_jobs.json: 3713 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:52:57.967Z] [BOT] 📍 [ROUTING] "Vercel Development Representative, Majors" @ vercel
[2026-01-21T18:52:57.967Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:52:58.281Z] [BOT] ✅ Posted message: Vercel Development Representative, Majors @ vercel in #tech-jobs
[2026-01-21T18:52:58.282Z] [BOT] ✅ Industry: Vercel Development Representative, Majors @ vercel
[2026-01-21T18:52:58.282Z] [BOT] 💾 Added channel posting: Vercel Development Representative, Majors @ vercel → category channel (1 total channels)
[2026-01-21T18:52:58.283Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T18:52:58.285Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T18:52:58.309Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:52:59.811Z] [BOT] 💾 Marked as posted: Vercel Development Representative, Majors @ vercel (instance #1)
[2026-01-21T18:52:59.811Z] [BOT] 💾 BEFORE ARCHIVING: 3715 jobs in database
[2026-01-21T18:52:59.813Z] [BOT] ✅ No jobs to archive (all 3715 jobs within 7-day window)
[2026-01-21T18:52:59.838Z] [BOT] 💾 Saved posted_jobs.json: 3715 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:52:59.838Z] [BOT] 📍 [ROUTING] "Principal Mission Assurance Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "engineer/engineering")
[2026-01-21T18:52:59.838Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T18:53:00.007Z] [BOT] ✅ Posted message: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman
[2026-01-21T18:53:00.007Z] [BOT] 💾 Added channel posting: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-21T18:53:00.008Z] [BOT] 💾 BEFORE ARCHIVING: 3716 jobs in database
[2026-01-21T18:53:00.010Z] [BOT] ✅ No jobs to archive (all 3716 jobs within 7-day window)
[2026-01-21T18:53:00.033Z] [BOT] 💾 Saved posted_jobs.json: 3716 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:01.854Z] [BOT] ✅ Posted message: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T18:53:01.855Z] [BOT] 💾 Added channel posting: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T18:53:01.856Z] [BOT] 💾 BEFORE ARCHIVING: 3716 jobs in database
[2026-01-21T18:53:01.858Z] [BOT] ✅ No jobs to archive (all 3716 jobs within 7-day window)
[2026-01-21T18:53:01.879Z] [BOT] 💾 Saved posted_jobs.json: 3716 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:03.381Z] [BOT] 💾 Marked as posted: Principal Mission Assurance Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-21T18:53:03.381Z] [BOT] 💾 BEFORE ARCHIVING: 3717 jobs in database
[2026-01-21T18:53:03.383Z] [BOT] ✅ No jobs to archive (all 3717 jobs within 7-day window)
[2026-01-21T18:53:03.405Z] [BOT] 💾 Saved posted_jobs.json: 3717 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:03.405Z] [BOT] 📍 [ROUTING] "Metering Specialist 1" @ ORG_b4d76491
[2026-01-21T18:53:03.405Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:53:03.733Z] [BOT] ✅ Posted message: Metering Specialist 1 @ ORG_b4d76491 in #tech-jobs
[2026-01-21T18:53:03.733Z] [BOT] ✅ Industry: Metering Specialist 1 @ ORG_b4d76491
[2026-01-21T18:53:03.734Z] [BOT] 💾 Added channel posting: Metering Specialist 1 @ ORG_b4d76491 → category channel (1 total channels)
[2026-01-21T18:53:03.734Z] [BOT] 💾 BEFORE ARCHIVING: 3718 jobs in database
[2026-01-21T18:53:03.736Z] [BOT] ✅ No jobs to archive (all 3718 jobs within 7-day window)
[2026-01-21T18:53:03.758Z] [BOT] 💾 Saved posted_jobs.json: 3718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:05.496Z] [BOT] ✅ Posted message: Metering Specialist 1 @ ORG_b4d76491 in #JID_ead674af
[2026-01-21T18:53:05.496Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T18:53:05.497Z] [BOT] 💾 Added channel posting: Metering Specialist 1 @ ORG_b4d76491 → location channel (2 total channels)
[2026-01-21T18:53:05.497Z] [BOT] 💾 BEFORE ARCHIVING: 3718 jobs in database
[2026-01-21T18:53:05.499Z] [BOT] ✅ No jobs to archive (all 3718 jobs within 7-day window)
[2026-01-21T18:53:05.526Z] [BOT] 💾 Saved posted_jobs.json: 3718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:07.027Z] [BOT] 💾 Marked as posted: Metering Specialist 1 @ ORG_b4d76491 (instance #1)
[2026-01-21T18:53:07.028Z] [BOT] 💾 BEFORE ARCHIVING: 3719 jobs in database
[2026-01-21T18:53:07.030Z] [BOT] ✅ No jobs to archive (all 3719 jobs within 7-day window)
[2026-01-21T18:53:07.054Z] [BOT] 💾 Saved posted_jobs.json: 3719 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:07.054Z] [BOT] 📍 [ROUTING] "Business Data Steward - Consumer and Small Business Banking" @ ORG_b93825c5 Bank
[2026-01-21T18:53:07.055Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T18:53:07.383Z] [BOT] ✅ Posted message: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #tech-jobs
[2026-01-21T18:53:07.384Z] [BOT] ✅ Industry: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank
[2026-01-21T18:53:07.384Z] [BOT] 💾 Added channel posting: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank → category channel (1 total channels)
[2026-01-21T18:53:07.385Z] [BOT] 💾 BEFORE ARCHIVING: 3720 jobs in database
[2026-01-21T18:53:07.387Z] [BOT] ✅ No jobs to archive (all 3720 jobs within 7-day window)
[2026-01-21T18:53:07.414Z] [BOT] 💾 Saved posted_jobs.json: 3720 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:08.916Z] [BOT] 💾 Marked as posted: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank (instance #1)
[2026-01-21T18:53:08.916Z] [BOT] 💾 BEFORE ARCHIVING: 3721 jobs in database
[2026-01-21T18:53:08.919Z] [BOT] ✅ No jobs to archive (all 3721 jobs within 7-day window)
[2026-01-21T18:53:08.942Z] [BOT] 💾 Saved posted_jobs.json: 3721 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:11.943Z] [BOT] 📌 Posting 2 jobs to #finance-jobs
[2026-01-21T18:53:11.944Z] [BOT] 📍 [ROUTING] "Manager, Global Accounts Receivable" @ discord
[2026-01-21T18:53:11.944Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T18:53:12.406Z] [BOT] ✅ Posted message: Manager, Global Accounts Receivable @ discord in #finance-jobs
[2026-01-21T18:53:12.406Z] [BOT] ✅ Industry: Manager, Global Accounts Receivable @ discord
[2026-01-21T18:53:12.407Z] [BOT] 💾 Added channel posting: Manager, Global Accounts Receivable @ discord → category channel (1 total channels)
[2026-01-21T18:53:12.407Z] [BOT] 💾 BEFORE ARCHIVING: 3722 jobs in database
[2026-01-21T18:53:12.410Z] [BOT] ✅ No jobs to archive (all 3722 jobs within 7-day window)
[2026-01-21T18:53:12.434Z] [BOT] 💾 Saved posted_jobs.json: 3722 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:13.936Z] [BOT] 💾 Marked as posted: Manager, Global Accounts Receivable @ discord (instance #1)
[2026-01-21T18:53:13.936Z] [BOT] 💾 BEFORE ARCHIVING: 3723 jobs in database
[2026-01-21T18:53:13.938Z] [BOT] ✅ No jobs to archive (all 3723 jobs within 7-day window)
[2026-01-21T18:53:13.961Z] [BOT] 💾 Saved posted_jobs.json: 3723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:13.962Z] [BOT] 📍 [ROUTING] "Senior Financial Reporting and Technical Accountant" @ discord
[2026-01-21T18:53:13.962Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T18:53:14.253Z] [BOT] ✅ Posted message: Senior Financial Reporting and Technical Accountant @ discord in #finance-jobs
[2026-01-21T18:53:14.253Z] [BOT] ✅ Industry: Senior Financial Reporting and Technical Accountant @ discord
[2026-01-21T18:53:14.253Z] [BOT] 💾 Added channel posting: Senior Financial Reporting and Technical Accountant @ discord → category channel (1 total channels)
[2026-01-21T18:53:14.253Z] [BOT] 💾 BEFORE ARCHIVING: 3724 jobs in database
[2026-01-21T18:53:14.256Z] [BOT] ✅ No jobs to archive (all 3724 jobs within 7-day window)
[2026-01-21T18:53:14.282Z] [BOT] 💾 Saved posted_jobs.json: 3724 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:15.784Z] [BOT] 💾 Marked as posted: Senior Financial Reporting and Technical Accountant @ discord (instance #1)
[2026-01-21T18:53:15.784Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T18:53:15.786Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T18:53:15.809Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:18.810Z] [BOT] 📌 Posting 3 jobs to #ai-jobs
[2026-01-21T18:53:18.810Z] [BOT] 📍 [ROUTING] "Director of Sales, Emerging & Scaled (New Business)" @ spotify
[2026-01-21T18:53:18.811Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1462...9217)
[2026-01-21T18:53:19.046Z] [BOT] ✅ Posted message: Director of Sales, Emerging & Scaled (New Business) @ spotify in #ai-jobs
[2026-01-21T18:53:19.046Z] [BOT] ✅ Industry: Director of Sales, Emerging & Scaled (New Business) @ spotify
[2026-01-21T18:53:19.047Z] [BOT] 💾 Added channel posting: Director of Sales, Emerging & Scaled (New Business) @ spotify → category channel (1 total channels)
[2026-01-21T18:53:19.047Z] [BOT] 💾 BEFORE ARCHIVING: 3726 jobs in database
[2026-01-21T18:53:19.049Z] [BOT] ✅ No jobs to archive (all 3726 jobs within 7-day window)
[2026-01-21T18:53:19.072Z] [BOT] 💾 Saved posted_jobs.json: 3726 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:20.756Z] [BOT] ✅ Posted message: Director of Sales, Emerging & Scaled (New Business) @ spotify in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T18:53:20.757Z] [BOT] 💾 Added channel posting: Director of Sales, Emerging & Scaled (New Business) @ spotify → location channel (2 total channels)
[2026-01-21T18:53:20.757Z] [BOT] 💾 BEFORE ARCHIVING: 3726 jobs in database
[2026-01-21T18:53:20.759Z] [BOT] ✅ No jobs to archive (all 3726 jobs within 7-day window)
[2026-01-21T18:53:20.783Z] [BOT] 💾 Saved posted_jobs.json: 3726 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:22.286Z] [BOT] 💾 Marked as posted: Director of Sales, Emerging & Scaled (New Business) @ spotify (instance #1)
[2026-01-21T18:53:22.286Z] [BOT] 💾 BEFORE ARCHIVING: 3727 jobs in database
[2026-01-21T18:53:22.288Z] [BOT] ✅ No jobs to archive (all 3727 jobs within 7-day window)
[2026-01-21T18:53:22.309Z] [BOT] 💾 Saved posted_jobs.json: 3727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:22.310Z] [BOT] 📍 [ROUTING] "Enterprise Support Engineer, AMER" @ retool
   Category: AI (matched: "AI specialization")
[2026-01-21T18:53:22.310Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T18:53:22.557Z] [BOT] ✅ Posted message: Enterprise Support Engineer, AMER @ retool in #ai-jobs
  ✅ Industry: Enterprise Support Engineer, AMER @ retool
[2026-01-21T18:53:22.558Z] [BOT] 💾 Added channel posting: Enterprise Support Engineer, AMER @ retool → category channel (1 total channels)
[2026-01-21T18:53:22.558Z] [BOT] 💾 BEFORE ARCHIVING: 3728 jobs in database
[2026-01-21T18:53:22.560Z] [BOT] ✅ No jobs to archive (all 3728 jobs within 7-day window)
[2026-01-21T18:53:22.586Z] [BOT] 💾 Saved posted_jobs.json: 3728 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:24.297Z] [BOT] ✅ Posted message: Enterprise Support Engineer, AMER @ retool in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T18:53:24.298Z] [BOT] 💾 Added channel posting: Enterprise Support Engineer, AMER @ retool → location channel (2 total channels)
[2026-01-21T18:53:24.298Z] [BOT] 💾 BEFORE ARCHIVING: 3728 jobs in database
[2026-01-21T18:53:24.301Z] [BOT] ✅ No jobs to archive (all 3728 jobs within 7-day window)
[2026-01-21T18:53:24.324Z] [BOT] 💾 Saved posted_jobs.json: 3728 active jobs
[2026-01-21T18:53:24.324Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:25.825Z] [BOT] 💾 Marked as posted: Enterprise Support Engineer, AMER @ retool (instance #1)
[2026-01-21T18:53:25.825Z] [BOT] 💾 BEFORE ARCHIVING: 3729 jobs in database
[2026-01-21T18:53:25.828Z] [BOT] ✅ No jobs to archive (all 3729 jobs within 7-day window)
[2026-01-21T18:53:25.849Z] [BOT] 💾 Saved posted_jobs.json: 3729 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:25.850Z] [BOT] 📍 [ROUTING] "UX Researcher" @ retool
[2026-01-21T18:53:25.850Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: ai-jobs (1462...9217)
[2026-01-21T18:53:26.147Z] [BOT] ✅ Posted message: UX Researcher @ retool in #ai-jobs
  ✅ Industry: UX Researcher @ retool
[2026-01-21T18:53:26.148Z] [BOT] 💾 Added channel posting: UX Researcher @ retool → category channel (1 total channels)
[2026-01-21T18:53:26.149Z] [BOT] 💾 BEFORE ARCHIVING: 3730 jobs in database
[2026-01-21T18:53:26.151Z] [BOT] ✅ No jobs to archive (all 3730 jobs within 7-day window)
[2026-01-21T18:53:26.175Z] [BOT] 💾 Saved posted_jobs.json: 3730 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:27.676Z] [BOT] 💾 Marked as posted: UX Researcher @ retool (instance #1)
[2026-01-21T18:53:27.676Z] [BOT] 💾 BEFORE ARCHIVING: 3731 jobs in database
[2026-01-21T18:53:27.678Z] [BOT] ✅ No jobs to archive (all 3731 jobs within 7-day window)
[2026-01-21T18:53:27.701Z] [BOT] 💾 Saved posted_jobs.json: 3731 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T18:53:30.701Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T18:53:30.702Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-315615 (posted within 7 days)
[2026-01-21T18:53:30.703Z] [BOT] ⏭️  Skipping duplicate: JID_325a066b (posted within 7 days)
[2026-01-21T18:53:30.703Z] [BOT] ⏭️  Skipping duplicate: JID_2c430fc0 (posted within 7 days)
[2026-01-21T18:53:30.703Z] [BOT] ⏭️  Skipping duplicate: JID_74470633 (posted within 7 days)
[2026-01-21T18:53:30.703Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_62b698da-16584_r10216305 (posted within 7 days)
[2026-01-21T18:53:30.703Z] [BOT] ⏭️  Skipping duplicate: JID_9a45918c (posted within 7 days)
[2026-01-21T18:53:30.703Z] [BOT] ⏭️  Skipping duplicate: JID_4936a540 (posted within 7 days)
[2026-01-21T18:53:30.704Z] [BOT] ⏭️  Skipping duplicate: JID_46f18007 (posted within 7 days)
[2026-01-21T18:53:30.704Z] [BOT] ⏭️  Skipping duplicate: JID_34a0370d (posted within 7 days)
[2026-01-21T18:53:30.704Z] [BOT] ⏭️  Skipping duplicate: JID_3b882cd7-banking_r0107465 (posted within 7 days)
[2026-01-21T18:53:30.814Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[2026-01-21T18:53:30.995Z] [BOT] ✅ Saved pending queue: 2767 total (2747 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T18:53:30.996Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T18:53:31.061Z] [BOT] 📂 Loaded 6021 existing routing entries
[2026-01-21T18:53:31.139Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T18:53:31.140Z] [BOT] Total entries: 6031
   Timestamp: 2026-01-21T18:53:31.114Z
[2026-01-21T18:53:31.140Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 14
[2026-01-21T18:53:31.141Z] [BOT] Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T18:53:31.141Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 3 posts
     3. #JID_ead674af: 2 posts
     4. #finance-jobs: 2 posts
     5. #JID_98d4f0de: 2 posts
[2026-01-21T18:53:31.141Z] [BOT] [STATS] Channel stats saved
[2026-01-21T18:53:33.164Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2881) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*