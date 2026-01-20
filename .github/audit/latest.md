# Discord Bot Execution Audit
**Timestamp:** 2026-01-20T20:37:04.440Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-20T20:36:22.702Z] ========================================
[2026-01-20T20:36:22.704Z] Discord Bot Execution Log
[2026-01-20T20:36:22.704Z] Environment: GitHub Actions
[2026-01-20T20:36:22.704Z] Node Version: v20.19.6
[2026-01-20T20:36:22.704Z] ========================================
[2026-01-20T20:36:22.704Z] Environment Variables Check:
[2026-01-20T20:36:22.704Z] DISCORD_TOKEN: ✅ Set
[2026-01-20T20:36:22.704Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.704Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-20T20:36:22.704Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-20T20:36:22.705Z] 
Multi-Channel Configuration:
[2026-01-20T20:36:22.705Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.705Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.705Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.705Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.705Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.705Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.705Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.705Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.705Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-20T20:36:22.705Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-20T20:36:22.705Z] 
Data Files Check:
[2026-01-20T20:36:22.706Z] .github/data/new_jobs.json: ✅ Exists (10 items, 87637 bytes)
[2026-01-20T20:36:22.717Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1632275 bytes)
[2026-01-20T20:36:22.717Z] 
========================================
[2026-01-20T20:36:22.717Z] Starting Enhanced Discord Bot...
[2026-01-20T20:36:22.717Z] ========================================
[2026-01-20T20:36:23.247Z] [BOT] ✅ Loaded V2 database: 2921 jobs
[2026-01-20T20:36:24.004Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-20T20:36:24.004Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-20T20:36:24.004Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-20T20:36:24.119Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Startup Account Executive at anthropic
[2026-01-20T20:36:24.122Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-20T20:36:24.123Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-20T20:36:24.123Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-20T20:36:24.123Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-20T20:36:24.123Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-20T20:36:24.123Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-20T20:36:24.221Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[2026-01-20T20:36:24.390Z] [BOT] ✅ Saved pending queue: 2759 total (2749 pending, 10 enriched, 0 posted)
🗑️ Removed 10 blacklisted jobs from pending queue
[2026-01-20T20:36:24.390Z] [BOT] 📋 After blacklist filter: 10 jobs (10 blacklisted)
📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-20T20:36:24.391Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-20T20:36:24.391Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-20T20:36:24.394Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-20T20:36:24.395Z] [BOT] 📍 [ROUTING] "Startup Account Executive" @ anthropic
[2026-01-20T20:36:24.395Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:36:24.399Z] [BOT ERROR] (node:2607) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-20T20:36:24.826Z] [BOT] ✅ Posted message: Startup Account Executive @ anthropic in #tech-jobs
[2026-01-20T20:36:24.826Z] [BOT] ✅ Industry: Startup Account Executive @ anthropic
[2026-01-20T20:36:24.827Z] [BOT] 💾 Added channel posting: Startup Account Executive @ anthropic → category channel (1 total channels)
[2026-01-20T20:36:24.827Z] [BOT] 💾 BEFORE ARCHIVING: 2922 jobs in database
[2026-01-20T20:36:24.830Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-20T20:36:24.835Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-20T20:36:24.835Z] [BOT] ✅ Archiving complete: 11 archived, 2911 active
[2026-01-20T20:36:24.852Z] [BOT] 💾 Saved posted_jobs.json: 2911 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:26.354Z] [BOT] 💾 Marked as posted: Startup Account Executive @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 2912 jobs in database
[2026-01-20T20:36:26.356Z] [BOT] ✅ No jobs to archive (all 2912 jobs within 7-day window)
[2026-01-20T20:36:26.372Z] [BOT] 💾 Saved posted_jobs.json: 2912 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:26.373Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Startups" @ anthropic
   Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:36:26.581Z] [BOT] ✅ Posted message: Strategic Account Executive, Startups @ anthropic in #tech-jobs
[2026-01-20T20:36:26.581Z] [BOT] ✅ Industry: Strategic Account Executive, Startups @ anthropic
[2026-01-20T20:36:26.582Z] [BOT] 💾 Added channel posting: Strategic Account Executive, Startups @ anthropic → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2913 jobs in database
[2026-01-20T20:36:26.583Z] [BOT] ✅ No jobs to archive (all 2913 jobs within 7-day window)
[2026-01-20T20:36:26.599Z] [BOT] 💾 Saved posted_jobs.json: 2913 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:28.100Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Startups @ anthropic (instance #1)
[2026-01-20T20:36:28.100Z] [BOT] 💾 BEFORE ARCHIVING: 2914 jobs in database
[2026-01-20T20:36:28.102Z] [BOT] ✅ No jobs to archive (all 2914 jobs within 7-day window)
[2026-01-20T20:36:28.118Z] [BOT] 💾 Saved posted_jobs.json: 2914 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:28.118Z] [BOT] 📍 [ROUTING] "Startup Account Executive" @ vercel
   Category: TECH (default)
[2026-01-20T20:36:28.118Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T20:36:28.461Z] [BOT] ✅ Posted message: Startup Account Executive @ vercel in #tech-jobs
[2026-01-20T20:36:28.462Z] [BOT] ✅ Industry: Startup Account Executive @ vercel
[2026-01-20T20:36:28.462Z] [BOT] 💾 Added channel posting: Startup Account Executive @ vercel → category channel (1 total channels)
[2026-01-20T20:36:28.462Z] [BOT] 💾 BEFORE ARCHIVING: 2915 jobs in database
[2026-01-20T20:36:28.463Z] [BOT] ✅ No jobs to archive (all 2915 jobs within 7-day window)
[2026-01-20T20:36:28.480Z] [BOT] 💾 Saved posted_jobs.json: 2915 active jobs
[2026-01-20T20:36:28.480Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:29.981Z] [BOT] 💾 Marked as posted: Startup Account Executive @ vercel (instance #1)
[2026-01-20T20:36:29.982Z] [BOT] 💾 BEFORE ARCHIVING: 2916 jobs in database
[2026-01-20T20:36:29.983Z] [BOT] ✅ No jobs to archive (all 2916 jobs within 7-day window)
[2026-01-20T20:36:30.001Z] [BOT] 💾 Saved posted_jobs.json: 2916 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:30.002Z] [BOT] 📍 [ROUTING] "Software Engineer II, Frontend Platform " @ brex
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-20T20:36:30.185Z] [BOT] ✅ Posted message: Software Engineer II, Frontend Platform  @ brex in #tech-jobs
[2026-01-20T20:36:30.185Z] [BOT] ✅ Industry: Software Engineer II, Frontend Platform  @ brex
[2026-01-20T20:36:30.185Z] [BOT] 💾 Added channel posting: Software Engineer II, Frontend Platform  @ brex → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2917 jobs in database
[2026-01-20T20:36:30.187Z] [BOT] ✅ No jobs to archive (all 2917 jobs within 7-day window)
[2026-01-20T20:36:30.204Z] [BOT] 💾 Saved posted_jobs.json: 2917 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:32.070Z] [BOT] ✅ Posted message: Software Engineer II, Frontend Platform  @ brex in #JID_98d4f0de
[2026-01-20T20:36:32.070Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-20T20:36:32.071Z] [BOT] 💾 Added channel posting: Software Engineer II, Frontend Platform  @ brex → location channel (2 total channels)
[2026-01-20T20:36:32.071Z] [BOT] 💾 BEFORE ARCHIVING: 2917 jobs in database
[2026-01-20T20:36:32.072Z] [BOT] ✅ No jobs to archive (all 2917 jobs within 7-day window)
[2026-01-20T20:36:32.088Z] [BOT] 💾 Saved posted_jobs.json: 2917 active jobs
[2026-01-20T20:36:32.088Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:33.589Z] [BOT] 💾 Marked as posted: Software Engineer II, Frontend Platform  @ brex (instance #1)
[2026-01-20T20:36:33.589Z] [BOT] 💾 BEFORE ARCHIVING: 2918 jobs in database
[2026-01-20T20:36:33.591Z] [BOT] ✅ No jobs to archive (all 2918 jobs within 7-day window)
[2026-01-20T20:36:33.611Z] [BOT] 💾 Saved posted_jobs.json: 2918 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:33.611Z] [BOT] 📍 [ROUTING] "MDM – Master Data Management - Parts Specialist" @ ORG_cb30a57b
   Category: TECH (matched: "data")
[2026-01-20T20:36:33.611Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-20T20:36:33.807Z] [BOT] ✅ Posted message: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b in #tech-jobs
  ✅ Industry: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b
[2026-01-20T20:36:33.807Z] [BOT] 💾 Added channel posting: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b → category channel (1 total channels)
[2026-01-20T20:36:33.807Z] [BOT] 💾 BEFORE ARCHIVING: 2919 jobs in database
[2026-01-20T20:36:33.809Z] [BOT] ✅ No jobs to archive (all 2919 jobs within 7-day window)
[2026-01-20T20:36:33.827Z] [BOT] 💾 Saved posted_jobs.json: 2919 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:35.547Z] [BOT] ✅ Posted message: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b in #JID_ead674af
[2026-01-20T20:36:35.547Z] [BOT] ✅ Location: JID_ead674af
[2026-01-20T20:36:35.548Z] [BOT] 💾 Added channel posting: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b → location channel (2 total channels)
[2026-01-20T20:36:35.548Z] [BOT] 💾 BEFORE ARCHIVING: 2919 jobs in database
[2026-01-20T20:36:35.550Z] [BOT] ✅ No jobs to archive (all 2919 jobs within 7-day window)
[2026-01-20T20:36:35.566Z] [BOT] 💾 Saved posted_jobs.json: 2919 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:37.068Z] [BOT] 💾 Marked as posted: MDM – Master Data Management - Parts Specialist @ ORG_cb30a57b (instance #1)
[2026-01-20T20:36:37.068Z] [BOT] 💾 BEFORE ARCHIVING: 2920 jobs in database
[2026-01-20T20:36:37.070Z] [BOT] ✅ No jobs to archive (all 2920 jobs within 7-day window)
[2026-01-20T20:36:37.087Z] [BOT] 💾 Saved posted_jobs.json: 2920 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:40.087Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-20T20:36:40.087Z] [BOT] 📍 [ROUTING] "BI Developer" @ ORG_c7953dfe
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-20T20:36:40.087Z] [BOT] Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-20T20:36:40.420Z] [BOT] ✅ Posted message: BI Developer @ ORG_c7953dfe in #JID_fb739488
[2026-01-20T20:36:40.420Z] [BOT] ✅ Industry: BI Developer @ ORG_c7953dfe
[2026-01-20T20:36:40.420Z] [BOT] 💾 Added channel posting: BI Developer @ ORG_c7953dfe → category channel (1 total channels)
[2026-01-20T20:36:40.420Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-20T20:36:40.422Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-20T20:36:40.440Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:42.244Z] [BOT] ✅ Posted message: BI Developer @ ORG_c7953dfe in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T20:36:42.245Z] [BOT] 💾 Added channel posting: BI Developer @ ORG_c7953dfe → location channel (2 total channels)
[2026-01-20T20:36:42.245Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-20T20:36:42.247Z] [BOT] ✅ No jobs to archive (all 2921 jobs within 7-day window)
[2026-01-20T20:36:42.267Z] [BOT] 💾 Saved posted_jobs.json: 2921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:43.768Z] [BOT] 💾 Marked as posted: BI Developer @ ORG_c7953dfe (instance #1)
[2026-01-20T20:36:43.769Z] [BOT] 💾 BEFORE ARCHIVING: 2922 jobs in database
[2026-01-20T20:36:43.770Z] [BOT] ✅ No jobs to archive (all 2922 jobs within 7-day window)
[2026-01-20T20:36:43.787Z] [BOT] 💾 Saved posted_jobs.json: 2922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:46.787Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-20T20:36:46.787Z] [BOT] 📍 [ROUTING] "Senior Contracts Manager, Procurement and AI" @ airtable
[2026-01-20T20:36:46.787Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T20:36:47.051Z] [BOT] ✅ Posted message: Senior Contracts Manager, Procurement and AI @ airtable in #ai-jobs
[2026-01-20T20:36:47.051Z] [BOT] ✅ Industry: Senior Contracts Manager, Procurement and AI @ airtable
[2026-01-20T20:36:47.051Z] [BOT] 💾 Added channel posting: Senior Contracts Manager, Procurement and AI @ airtable → category channel (1 total channels)
[2026-01-20T20:36:47.051Z] [BOT] 💾 BEFORE ARCHIVING: 2923 jobs in database
[2026-01-20T20:36:47.053Z] [BOT] ✅ No jobs to archive (all 2923 jobs within 7-day window)
[2026-01-20T20:36:47.071Z] [BOT] 💾 Saved posted_jobs.json: 2923 active jobs
[2026-01-20T20:36:47.071Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:48.572Z] [BOT] 💾 Marked as posted: Senior Contracts Manager, Procurement and AI @ airtable (instance #1)
[2026-01-20T20:36:48.572Z] [BOT] 💾 BEFORE ARCHIVING: 2924 jobs in database
[2026-01-20T20:36:48.574Z] [BOT] ✅ No jobs to archive (all 2924 jobs within 7-day window)
[2026-01-20T20:36:48.591Z] [BOT] 💾 Saved posted_jobs.json: 2924 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:48.592Z] [BOT] 📍 [ROUTING] "Engineer – MES System" @ ORG_8d6d4f52 Lilly and Company
   Category: AI (matched: "machine learning")
[2026-01-20T20:36:48.592Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T20:36:48.837Z] [BOT] ✅ Posted message: Engineer – MES System @ ORG_8d6d4f52 Lilly and Company in #ai-jobs
  ✅ Industry: Engineer – MES System @ ORG_8d6d4f52 Lilly and Company
[2026-01-20T20:36:48.837Z] [BOT] 💾 Added channel posting: Engineer – MES System @ ORG_8d6d4f52 Lilly and Company → category channel (1 total channels)
[2026-01-20T20:36:48.837Z] [BOT] 💾 BEFORE ARCHIVING: 2925 jobs in database
[2026-01-20T20:36:48.839Z] [BOT] ✅ No jobs to archive (all 2925 jobs within 7-day window)
[2026-01-20T20:36:48.857Z] [BOT] 💾 Saved posted_jobs.json: 2925 active jobs
[2026-01-20T20:36:48.857Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:50.664Z] [BOT] ✅ Posted message: Engineer – MES System @ ORG_8d6d4f52 Lilly and Company in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T20:36:50.664Z] [BOT] 💾 Added channel posting: Engineer – MES System @ ORG_8d6d4f52 Lilly and Company → location channel (2 total channels)
[2026-01-20T20:36:50.664Z] [BOT] 💾 BEFORE ARCHIVING: 2925 jobs in database
[2026-01-20T20:36:50.666Z] [BOT] ✅ No jobs to archive (all 2925 jobs within 7-day window)
[2026-01-20T20:36:50.684Z] [BOT] 💾 Saved posted_jobs.json: 2925 active jobs
[2026-01-20T20:36:50.684Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:52.184Z] [BOT] 💾 Marked as posted: Engineer – MES System @ ORG_8d6d4f52 Lilly and Company (instance #1)
[2026-01-20T20:36:52.184Z] [BOT] 💾 BEFORE ARCHIVING: 2926 jobs in database
[2026-01-20T20:36:52.186Z] [BOT] ✅ No jobs to archive (all 2926 jobs within 7-day window)
[2026-01-20T20:36:52.203Z] [BOT] 💾 Saved posted_jobs.json: 2926 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:52.203Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
[2026-01-20T20:36:52.203Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T20:36:52.423Z] [BOT] ✅ Posted message: Software Engineer - Entry @ ORG_7b717950 in #ai-jobs
[2026-01-20T20:36:52.423Z] [BOT] ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2026-01-20T20:36:52.423Z] [BOT] 💾 Added channel posting: Software Engineer - Entry @ ORG_7b717950 → category channel (1 total channels)
[2026-01-20T20:36:52.423Z] [BOT] 💾 BEFORE ARCHIVING: 2927 jobs in database
[2026-01-20T20:36:52.425Z] [BOT] ✅ No jobs to archive (all 2927 jobs within 7-day window)
[2026-01-20T20:36:52.444Z] [BOT] 💾 Saved posted_jobs.json: 2927 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:53.944Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2026-01-20T20:36:53.945Z] [BOT] 💾 BEFORE ARCHIVING: 2928 jobs in database
[2026-01-20T20:36:53.946Z] [BOT] ✅ No jobs to archive (all 2928 jobs within 7-day window)
[2026-01-20T20:36:53.964Z] [BOT] 💾 Saved posted_jobs.json: 2928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:53.964Z] [BOT] 📍 [ROUTING] "AI Data Specialist - Wisconsin - US" @ ORG_f3ae3598
[2026-01-20T20:36:53.964Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-20T20:36:54.232Z] [BOT] ✅ Posted message: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 in #ai-jobs
[2026-01-20T20:36:54.233Z] [BOT] ✅ Industry: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598
[2026-01-20T20:36:54.233Z] [BOT] 💾 Added channel posting: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2929 jobs in database
[2026-01-20T20:36:54.235Z] [BOT] ✅ No jobs to archive (all 2929 jobs within 7-day window)
[2026-01-20T20:36:54.252Z] [BOT] 💾 Saved posted_jobs.json: 2929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:56.119Z] [BOT] ✅ Posted message: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-20T20:36:56.120Z] [BOT] 💾 Added channel posting: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2929 jobs in database
[2026-01-20T20:36:56.122Z] [BOT] ✅ No jobs to archive (all 2929 jobs within 7-day window)
[2026-01-20T20:36:56.139Z] [BOT] 💾 Saved posted_jobs.json: 2929 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-20T20:36:57.640Z] [BOT] 💾 Marked as posted: AI Data Specialist - Wisconsin - US @ ORG_f3ae3598 (instance #1)
[2026-01-20T20:36:57.641Z] [BOT] 💾 BEFORE ARCHIVING: 2930 jobs in database
[2026-01-20T20:36:57.642Z] [BOT] ✅ No jobs to archive (all 2930 jobs within 7-day window)
[2026-01-20T20:36:57.659Z] [BOT] 💾 Saved posted_jobs.json: 2930 active jobs
[2026-01-20T20:36:57.659Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-20T20:37:00.660Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-20T20:37:00.661Z] [BOT] ⏭️  Skipping duplicate: JID_240785c7 (posted within 7 days)
[2026-01-20T20:37:00.661Z] [BOT] ⏭️  Skipping duplicate: JID_efbb0ec7 (posted within 7 days)
[2026-01-20T20:37:00.661Z] [BOT] ⏭️  Skipping duplicate: JID_1ea2d8a3 (posted within 7 days)
[2026-01-20T20:37:00.661Z] [BOT] ⏭️  Skipping duplicate: JID_17d3945c (posted within 7 days)
[2026-01-20T20:37:00.662Z] [BOT] ⏭️  Skipping duplicate: JID_3f9ff301 (posted within 7 days)
[2026-01-20T20:37:00.662Z] [BOT] ⏭️  Skipping duplicate: JID_a1205612 (posted within 7 days)
[2026-01-20T20:37:00.662Z] [BOT] ⏭️  Skipping duplicate: JID_b66c3f15 (posted within 7 days)
[2026-01-20T20:37:00.662Z] [BOT] ⏭️  Skipping duplicate: JID_64a4852e-system_r-91305-1 (posted within 7 days)
[2026-01-20T20:37:00.662Z] [BOT] ⏭️  Skipping duplicate: JID_a58877c7 (posted within 7 days)
⏭️  Skipping duplicate: JID_ce06c044 (posted within 7 days)
[2026-01-20T20:37:00.763Z] [BOT] ✅ Loaded pending queue: 2759 total (2749 pending, 10 enriched, 0 posted)
[2026-01-20T20:37:00.952Z] [BOT] ✅ Saved pending queue: 2759 total (2749 pending, 0 enriched, 10 posted)
[2026-01-20T20:37:00.952Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-20T20:37:01.013Z] [BOT] 📂 Loaded 5462 existing routing entries
[2026-01-20T20:37:01.086Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5472
   Timestamp: 2026-01-20T20:37:01.063Z
[2026-01-20T20:37:01.087Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_fe0e0e6e.jsonl
   Total attempts: 25
[2026-01-20T20:37:01.087Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 10
[2026-01-20T20:37:01.087Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-20T20:37:01.087Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #JID_ead674af: 4 posts
     3. #ai-jobs: 4 posts
     4. #JID_98d4f0de: 1 posts
     5. #JID_fb739488: 1 posts
[2026-01-20T20:37:01.087Z] [BOT] [STATS] Channel stats saved
[2026-01-20T20:37:03.116Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2607) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*