# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T06:35:02.196Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T06:34:28.333Z] ========================================
[2026-01-21T06:34:28.335Z] Discord Bot Execution Log
[2026-01-21T06:34:28.335Z] Environment: GitHub Actions
[2026-01-21T06:34:28.335Z] Node Version: v20.19.6
[2026-01-21T06:34:28.335Z] ========================================
[2026-01-21T06:34:28.335Z] Environment Variables Check:
[2026-01-21T06:34:28.335Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T06:34:28.335Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.335Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T06:34:28.335Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T06:34:28.335Z] 
Multi-Channel Configuration:
[2026-01-21T06:34:28.336Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.336Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.336Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.336Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.336Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.336Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.336Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.336Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.336Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T06:34:28.336Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T06:34:28.336Z] 
Data Files Check:
[2026-01-21T06:34:28.338Z] .github/data/new_jobs.json: ✅ Exists (10 items, 179413 bytes)
[2026-01-21T06:34:28.349Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1783887 bytes)
[2026-01-21T06:34:28.349Z] 
========================================
[2026-01-21T06:34:28.349Z] Starting Enhanced Discord Bot...
[2026-01-21T06:34:28.349Z] ========================================
[2026-01-21T06:34:28.891Z] [BOT] ✅ Loaded V2 database: 3137 jobs
[2026-01-21T06:34:29.488Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T06:34:29.488Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T06:34:29.488Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T06:34:29.603Z] [BOT] ✅ Loaded pending queue: 2746 total (2726 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Paralegal at airtable
[2026-01-21T06:34:29.606Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T06:34:29.607Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T06:34:29.607Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T06:34:29.608Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-21T06:34:29.608Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Product Designer - DeepSky @ airtable: san francisco, ca;, remote
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-21T06:34:29.608Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T06:34:29.612Z] [BOT] 📌 Posting 8 jobs to #tech-jobs
[2026-01-21T06:34:29.612Z] [BOT] 📍 [ROUTING] "Senior Paralegal" @ airtable
[2026-01-21T06:34:29.613Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:34:29.616Z] [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T06:34:29.918Z] [BOT] ✅ Posted message: Senior Paralegal @ airtable in #tech-jobs
[2026-01-21T06:34:29.918Z] [BOT] ✅ Industry: Senior Paralegal @ airtable
[2026-01-21T06:34:29.919Z] [BOT] 💾 Added channel posting: Senior Paralegal @ airtable → category channel (1 total channels)
[2026-01-21T06:34:29.920Z] [BOT] 💾 BEFORE ARCHIVING: 3138 jobs in database
[2026-01-21T06:34:29.923Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T06:34:29.927Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T06:34:29.928Z] [BOT] ✅ Archiving complete: 10 archived, 3128 active
[2026-01-21T06:34:29.964Z] [BOT] 💾 Saved posted_jobs.json: 3128 active jobs
[2026-01-21T06:34:29.964Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:31.465Z] [BOT] 💾 Marked as posted: Senior Paralegal @ airtable (instance #1)
[2026-01-21T06:34:31.466Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-21T06:34:31.467Z] [BOT] ✅ No jobs to archive (all 3129 jobs within 7-day window)
[2026-01-21T06:34:31.486Z] [BOT] 💾 Saved posted_jobs.json: 3129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:31.486Z] [BOT] 📍 [ROUTING] "Staff Software Engineer - UI and Interactions (Full-Stack)" @ discord
[2026-01-21T06:34:31.486Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:34:31.613Z] [BOT] ✅ Posted message: Staff Software Engineer - UI and Interactions (Full-Stack) @ discord in #tech-jobs
[2026-01-21T06:34:31.613Z] [BOT] ✅ Industry: Staff Software Engineer - UI and Interactions (Full-Stack) @ discord
[2026-01-21T06:34:31.614Z] [BOT] 💾 Added channel posting: Staff Software Engineer - UI and Interactions (Full-Stack) @ discord → category channel (1 total channels)
[2026-01-21T06:34:31.614Z] [BOT] 💾 BEFORE ARCHIVING: 3130 jobs in database
[2026-01-21T06:34:31.616Z] [BOT] ✅ No jobs to archive (all 3130 jobs within 7-day window)
[2026-01-21T06:34:31.636Z] [BOT] 💾 Saved posted_jobs.json: 3130 active jobs
[2026-01-21T06:34:31.636Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:33.326Z] [BOT] ✅ Posted message: Staff Software Engineer - UI and Interactions (Full-Stack) @ discord in #JID_ead674af
[2026-01-21T06:34:33.326Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T06:34:33.326Z] [BOT] 💾 Added channel posting: Staff Software Engineer - UI and Interactions (Full-Stack) @ discord → location channel (2 total channels)
[2026-01-21T06:34:33.327Z] [BOT] 💾 BEFORE ARCHIVING: 3130 jobs in database
[2026-01-21T06:34:33.329Z] [BOT] ✅ No jobs to archive (all 3130 jobs within 7-day window)
[2026-01-21T06:34:33.348Z] [BOT] 💾 Saved posted_jobs.json: 3130 active jobs
[2026-01-21T06:34:33.348Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:34.849Z] [BOT] 💾 Marked as posted: Staff Software Engineer - UI and Interactions (Full-Stack) @ discord (instance #1)
[2026-01-21T06:34:34.849Z] [BOT] 💾 BEFORE ARCHIVING: 3131 jobs in database
[2026-01-21T06:34:34.851Z] [BOT] ✅ No jobs to archive (all 3131 jobs within 7-day window)
[2026-01-21T06:34:34.871Z] [BOT] 💾 Saved posted_jobs.json: 3131 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:34.871Z] [BOT] 📍 [ROUTING] "Staff Software Engineer – UI/UX Specialist" @ discord
[2026-01-21T06:34:34.872Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:34:35.140Z] [BOT] ✅ Posted message: Staff Software Engineer – UI/UX Specialist @ discord in #tech-jobs
[2026-01-21T06:34:35.140Z] [BOT] ✅ Industry: Staff Software Engineer – UI/UX Specialist @ discord
[2026-01-21T06:34:35.140Z] [BOT] 💾 Added channel posting: Staff Software Engineer – UI/UX Specialist @ discord → category channel (1 total channels)
[2026-01-21T06:34:35.141Z] [BOT] 💾 BEFORE ARCHIVING: 3132 jobs in database
[2026-01-21T06:34:35.142Z] [BOT] ✅ No jobs to archive (all 3132 jobs within 7-day window)
[2026-01-21T06:34:35.160Z] [BOT] 💾 Saved posted_jobs.json: 3132 active jobs
[2026-01-21T06:34:35.160Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:37.111Z] [BOT] ✅ Posted message: Staff Software Engineer – UI/UX Specialist @ discord in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T06:34:37.112Z] [BOT] 💾 Added channel posting: Staff Software Engineer – UI/UX Specialist @ discord → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3132 jobs in database
[2026-01-21T06:34:37.114Z] [BOT] ✅ No jobs to archive (all 3132 jobs within 7-day window)
[2026-01-21T06:34:37.133Z] [BOT] 💾 Saved posted_jobs.json: 3132 active jobs
[2026-01-21T06:34:37.133Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:38.632Z] [BOT] 💾 Marked as posted: Staff Software Engineer – UI/UX Specialist @ discord (instance #1)
[2026-01-21T06:34:38.633Z] [BOT] 💾 BEFORE ARCHIVING: 3133 jobs in database
[2026-01-21T06:34:38.635Z] [BOT] ✅ No jobs to archive (all 3133 jobs within 7-day window)
[2026-01-21T06:34:38.657Z] [BOT] 💾 Saved posted_jobs.json: 3133 active jobs
[2026-01-21T06:34:38.657Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:38.657Z] [BOT] 📍 [ROUTING] "Software Engineer, Infrastructure (2-8 YOE)" @ airtable
[2026-01-21T06:34:38.657Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:34:38.992Z] [BOT] ✅ Posted message: Software Engineer, Infrastructure (2-8 YOE) @ airtable in #tech-jobs
[2026-01-21T06:34:38.992Z] [BOT] ✅ Industry: Software Engineer, Infrastructure (2-8 YOE) @ airtable
[2026-01-21T06:34:38.992Z] [BOT] 💾 Added channel posting: Software Engineer, Infrastructure (2-8 YOE) @ airtable → category channel (1 total channels)
[2026-01-21T06:34:38.993Z] [BOT] 💾 BEFORE ARCHIVING: 3134 jobs in database
[2026-01-21T06:34:38.994Z] [BOT] ✅ No jobs to archive (all 3134 jobs within 7-day window)
[2026-01-21T06:34:39.014Z] [BOT] 💾 Saved posted_jobs.json: 3134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:40.515Z] [BOT] 💾 Marked as posted: Software Engineer, Infrastructure (2-8 YOE) @ airtable (instance #1)
[2026-01-21T06:34:40.516Z] [BOT] 💾 BEFORE ARCHIVING: 3135 jobs in database
[2026-01-21T06:34:40.518Z] [BOT] ✅ No jobs to archive (all 3135 jobs within 7-day window)
[2026-01-21T06:34:40.537Z] [BOT] 💾 Saved posted_jobs.json: 3135 active jobs
[2026-01-21T06:34:40.537Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:40.538Z] [BOT] 📍 [ROUTING] "Executive Assistant, Product Support " @ figma
[2026-01-21T06:34:40.538Z] [BOT] Category: TECH (matched: "program manager")
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:34:40.826Z] [BOT] ✅ Posted message: Executive Assistant, Product Support  @ figma in #tech-jobs
[2026-01-21T06:34:40.826Z] [BOT] ✅ Industry: Executive Assistant, Product Support  @ figma
[2026-01-21T06:34:40.827Z] [BOT] 💾 Added channel posting: Executive Assistant, Product Support  @ figma → category channel (1 total channels)
[2026-01-21T06:34:40.827Z] [BOT] 💾 BEFORE ARCHIVING: 3136 jobs in database
[2026-01-21T06:34:40.829Z] [BOT] ✅ No jobs to archive (all 3136 jobs within 7-day window)
[2026-01-21T06:34:40.847Z] [BOT] 💾 Saved posted_jobs.json: 3136 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:42.348Z] [BOT] 💾 Marked as posted: Executive Assistant, Product Support  @ figma (instance #1)
💾 BEFORE ARCHIVING: 3137 jobs in database
[2026-01-21T06:34:42.350Z] [BOT] ✅ No jobs to archive (all 3137 jobs within 7-day window)
[2026-01-21T06:34:42.367Z] [BOT] 💾 Saved posted_jobs.json: 3137 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:42.368Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Accounts" @ airtable
[2026-01-21T06:34:42.368Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:34:42.544Z] [BOT] ✅ Posted message: Account Executive, Commercial Accounts @ airtable in #tech-jobs
  ✅ Industry: Account Executive, Commercial Accounts @ airtable
[2026-01-21T06:34:42.544Z] [BOT] 💾 Added channel posting: Account Executive, Commercial Accounts @ airtable → category channel (1 total channels)
[2026-01-21T06:34:42.544Z] [BOT] 💾 BEFORE ARCHIVING: 3138 jobs in database
[2026-01-21T06:34:42.546Z] [BOT] ✅ No jobs to archive (all 3138 jobs within 7-day window)
[2026-01-21T06:34:42.568Z] [BOT] 💾 Saved posted_jobs.json: 3138 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:44.068Z] [BOT] 💾 Marked as posted: Account Executive, Commercial Accounts @ airtable (instance #1)
[2026-01-21T06:34:44.068Z] [BOT] 💾 BEFORE ARCHIVING: 3139 jobs in database
[2026-01-21T06:34:44.070Z] [BOT] ✅ No jobs to archive (all 3139 jobs within 7-day window)
[2026-01-21T06:34:44.087Z] [BOT] 💾 Saved posted_jobs.json: 3139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:44.088Z] [BOT] 📍 [ROUTING] "Business Development Representative" @ airtable
[2026-01-21T06:34:44.088Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:34:44.590Z] [BOT] ✅ Posted message: Business Development Representative @ airtable in #tech-jobs
[2026-01-21T06:34:44.590Z] [BOT] ✅ Industry: Business Development Representative @ airtable
[2026-01-21T06:34:44.591Z] [BOT] 💾 Added channel posting: Business Development Representative @ airtable → category channel (1 total channels)
[2026-01-21T06:34:44.591Z] [BOT] 💾 BEFORE ARCHIVING: 3140 jobs in database
[2026-01-21T06:34:44.592Z] [BOT] ✅ No jobs to archive (all 3140 jobs within 7-day window)
[2026-01-21T06:34:44.612Z] [BOT] 💾 Saved posted_jobs.json: 3140 active jobs
[2026-01-21T06:34:44.613Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:46.113Z] [BOT] 💾 Marked as posted: Business Development Representative @ airtable (instance #1)
[2026-01-21T06:34:46.113Z] [BOT] 💾 BEFORE ARCHIVING: 3141 jobs in database
[2026-01-21T06:34:46.115Z] [BOT] ✅ No jobs to archive (all 3141 jobs within 7-day window)
[2026-01-21T06:34:46.134Z] [BOT] 💾 Saved posted_jobs.json: 3141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:46.134Z] [BOT] 📍 [ROUTING] "Field Marketing Manager, East" @ airtable
[2026-01-21T06:34:46.134Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T06:34:46.282Z] [BOT] ✅ Posted message: Field Marketing Manager, East @ airtable in #tech-jobs
  ✅ Industry: Field Marketing Manager, East @ airtable
[2026-01-21T06:34:46.282Z] [BOT] 💾 Added channel posting: Field Marketing Manager, East @ airtable → category channel (1 total channels)
[2026-01-21T06:34:46.282Z] [BOT] 💾 BEFORE ARCHIVING: 3142 jobs in database
[2026-01-21T06:34:46.284Z] [BOT] ✅ No jobs to archive (all 3142 jobs within 7-day window)
[2026-01-21T06:34:46.301Z] [BOT] 💾 Saved posted_jobs.json: 3142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:47.985Z] [BOT] ✅ Posted message: Field Marketing Manager, East @ airtable in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T06:34:47.986Z] [BOT] 💾 Added channel posting: Field Marketing Manager, East @ airtable → location channel (2 total channels)
[2026-01-21T06:34:47.986Z] [BOT] 💾 BEFORE ARCHIVING: 3142 jobs in database
[2026-01-21T06:34:47.988Z] [BOT] ✅ No jobs to archive (all 3142 jobs within 7-day window)
[2026-01-21T06:34:48.008Z] [BOT] 💾 Saved posted_jobs.json: 3142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:49.508Z] [BOT] 💾 Marked as posted: Field Marketing Manager, East @ airtable (instance #1)
[2026-01-21T06:34:49.508Z] [BOT] 💾 BEFORE ARCHIVING: 3143 jobs in database
[2026-01-21T06:34:49.510Z] [BOT] ✅ No jobs to archive (all 3143 jobs within 7-day window)
[2026-01-21T06:34:49.529Z] [BOT] 💾 Saved posted_jobs.json: 3143 active jobs
[2026-01-21T06:34:49.529Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:52.530Z] [BOT] 📌 Posting 2 jobs to #ai-jobs
[2026-01-21T06:34:52.531Z] [BOT] 📍 [ROUTING] "Product Security Engineer" @ airtable
   Category: AI (matched: "AI/ML")
[2026-01-21T06:34:52.531Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T06:34:52.829Z] [BOT] ✅ Posted message: Product Security Engineer @ airtable in #ai-jobs
  ✅ Industry: Product Security Engineer @ airtable
[2026-01-21T06:34:52.830Z] [BOT] 💾 Added channel posting: Product Security Engineer @ airtable → category channel (1 total channels)
[2026-01-21T06:34:52.830Z] [BOT] 💾 BEFORE ARCHIVING: 3144 jobs in database
[2026-01-21T06:34:52.832Z] [BOT] ✅ No jobs to archive (all 3144 jobs within 7-day window)
[2026-01-21T06:34:52.851Z] [BOT] 💾 Saved posted_jobs.json: 3144 active jobs
[2026-01-21T06:34:52.851Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:54.351Z] [BOT] 💾 Marked as posted: Product Security Engineer @ airtable (instance #1)
[2026-01-21T06:34:54.351Z] [BOT] 💾 BEFORE ARCHIVING: 3145 jobs in database
[2026-01-21T06:34:54.353Z] [BOT] ✅ No jobs to archive (all 3145 jobs within 7-day window)
[2026-01-21T06:34:54.373Z] [BOT] 💾 Saved posted_jobs.json: 3145 active jobs
[2026-01-21T06:34:54.373Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:54.373Z] [BOT] 📍 [ROUTING] "Engineering Manager, AI Platform " @ airtable
[2026-01-21T06:34:54.373Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T06:34:54.610Z] [BOT] ✅ Posted message: Engineering Manager, AI Platform  @ airtable in #ai-jobs
[2026-01-21T06:34:54.610Z] [BOT] ✅ Industry: Engineering Manager, AI Platform  @ airtable
[2026-01-21T06:34:54.610Z] [BOT] 💾 Added channel posting: Engineering Manager, AI Platform  @ airtable → category channel (1 total channels)
[2026-01-21T06:34:54.610Z] [BOT] 💾 BEFORE ARCHIVING: 3146 jobs in database
[2026-01-21T06:34:54.612Z] [BOT] ✅ No jobs to archive (all 3146 jobs within 7-day window)
[2026-01-21T06:34:54.629Z] [BOT] 💾 Saved posted_jobs.json: 3146 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:56.130Z] [BOT] 💾 Marked as posted: Engineering Manager, AI Platform  @ airtable (instance #1)
[2026-01-21T06:34:56.131Z] [BOT] 💾 BEFORE ARCHIVING: 3147 jobs in database
[2026-01-21T06:34:56.132Z] [BOT] ✅ No jobs to archive (all 3147 jobs within 7-day window)
[2026-01-21T06:34:56.152Z] [BOT] 💾 Saved posted_jobs.json: 3147 active jobs
[2026-01-21T06:34:56.152Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T06:34:59.151Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T06:34:59.152Z] [BOT] ⏭️  Skipping duplicate: JID_6045abb3 (posted within 7 days)
[2026-01-21T06:34:59.152Z] [BOT] ⏭️  Skipping duplicate: JID_8e8f72b7 (posted within 7 days)
[2026-01-21T06:34:59.152Z] [BOT] ⏭️  Skipping duplicate: JID_0594571b (posted within 7 days)
[2026-01-21T06:34:59.152Z] [BOT] ⏭️  Skipping duplicate: JID_4bba1742 (posted within 7 days)
[2026-01-21T06:34:59.153Z] [BOT] ⏭️  Skipping duplicate: JID_36d204f3 (posted within 7 days)
⏭️  Skipping duplicate: JID_8ae602e1 (posted within 7 days)
⏭️  Skipping duplicate: JID_2a1eeff5 (posted within 7 days)
[2026-01-21T06:34:59.153Z] [BOT] ⏭️  Skipping duplicate: JID_4a63e2fd (posted within 7 days)
[2026-01-21T06:34:59.153Z] [BOT] ⏭️  Skipping duplicate: JID_676cc112 (posted within 7 days)
[2026-01-21T06:34:59.153Z] [BOT] ⏭️  Skipping duplicate: JID_e3ba22a4 (posted within 7 days)
[2026-01-21T06:34:59.258Z] [BOT] ✅ Loaded pending queue: 2746 total (2726 pending, 20 enriched, 0 posted)
[2026-01-21T06:34:59.438Z] [BOT] ✅ Saved pending queue: 2746 total (2726 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T06:34:59.504Z] [BOT] 📂 Loaded 5705 existing routing entries
[2026-01-21T06:34:59.578Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T06:34:59.578Z] [BOT] Total entries: 5715
   Timestamp: 2026-01-21T06:34:59.554Z
[2026-01-21T06:34:59.578Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T06:34:59.579Z] [BOT] Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T06:34:59.579Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 4
   Top channels:
[2026-01-21T06:34:59.579Z] [BOT] 1. #tech-jobs: 8 posts
     2. #JID_ead674af: 2 posts
     3. #ai-jobs: 2 posts
     4. #JID_98d4f0de: 1 posts
[2026-01-21T06:34:59.579Z] [BOT] [STATS] Channel stats saved
[2026-01-21T06:35:01.605Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2400) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*