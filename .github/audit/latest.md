# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T10:18:41.225Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T10:18:01.132Z] ========================================
[2026-01-21T10:18:01.134Z] Discord Bot Execution Log
[2026-01-21T10:18:01.134Z] Environment: GitHub Actions
[2026-01-21T10:18:01.134Z] Node Version: v20.19.6
[2026-01-21T10:18:01.134Z] ========================================
[2026-01-21T10:18:01.134Z] Environment Variables Check:
[2026-01-21T10:18:01.134Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T10:18:01.134Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.134Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T10:18:01.134Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T10:18:01.135Z] 
Multi-Channel Configuration:
[2026-01-21T10:18:01.135Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.135Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.135Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.135Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.135Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.135Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.135Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.135Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.135Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T10:18:01.135Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T10:18:01.135Z] 
Data Files Check:
[2026-01-21T10:18:01.136Z] .github/data/new_jobs.json: ✅ Exists (10 items, 109910 bytes)
[2026-01-21T10:18:01.148Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1869935 bytes)
[2026-01-21T10:18:01.149Z] 
========================================
[2026-01-21T10:18:01.149Z] Starting Enhanced Discord Bot...
[2026-01-21T10:18:01.149Z] ========================================
[2026-01-21T10:18:01.674Z] [BOT] ✅ Loaded V2 database: 3276 jobs
[2026-01-21T10:18:02.401Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T10:18:02.402Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T10:18:02.402Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T10:18:02.518Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Annotation - QC and Crawling - Thai at Boson Ai
[2026-01-21T10:18:02.521Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T10:18:02.522Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T10:18:02.522Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T10:18:02.523Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-21T10:18:02.523Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T10:18:02.527Z] [BOT] 📌 Posting 1 jobs to #ai-jobs
[2026-01-21T10:18:02.528Z] [BOT] 📍 [ROUTING] "Data Annotation - QC and Crawling - Thai" @ ORG_68dd70b6 Ai
[2026-01-21T10:18:02.528Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T10:18:02.545Z] [BOT ERROR] (node:2982) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T10:18:03.491Z] [BOT] ✅ Posted message: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai in #ai-jobs
[2026-01-21T10:18:03.491Z] [BOT] ✅ Industry: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai
[2026-01-21T10:18:03.492Z] [BOT] 💾 Added channel posting: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai → category channel (1 total channels)
[2026-01-21T10:18:03.492Z] [BOT] 💾 BEFORE ARCHIVING: 3277 jobs in database
[2026-01-21T10:18:03.494Z] [BOT] ✅ No jobs to archive (all 3277 jobs within 7-day window)
[2026-01-21T10:18:03.518Z] [BOT] 💾 Saved posted_jobs.json: 3277 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:05.020Z] [BOT] 💾 Marked as posted: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai (instance #1)
[2026-01-21T10:18:05.020Z] [BOT] 💾 BEFORE ARCHIVING: 3278 jobs in database
[2026-01-21T10:18:05.022Z] [BOT] ✅ No jobs to archive (all 3278 jobs within 7-day window)
[2026-01-21T10:18:05.042Z] [BOT] 💾 Saved posted_jobs.json: 3278 active jobs
[2026-01-21T10:18:05.042Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:08.043Z] [BOT] 📌 Posting 6 jobs to #tech-jobs
[2026-01-21T10:18:08.044Z] [BOT] 📍 [ROUTING] "Strategic Program Manager" @ figma
   Category: TECH (matched: "project-management")
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:18:08.202Z] [BOT] ✅ Posted message: Strategic Program Manager @ figma in #tech-jobs
[2026-01-21T10:18:08.202Z] [BOT] ✅ Industry: Strategic Program Manager @ figma
[2026-01-21T10:18:08.203Z] [BOT] 💾 Added channel posting: Strategic Program Manager @ figma → category channel (1 total channels)
[2026-01-21T10:18:08.203Z] [BOT] 💾 BEFORE ARCHIVING: 3279 jobs in database
[2026-01-21T10:18:08.205Z] [BOT] ✅ No jobs to archive (all 3279 jobs within 7-day window)
[2026-01-21T10:18:08.227Z] [BOT] 💾 Saved posted_jobs.json: 3279 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:09.728Z] [BOT] 💾 Marked as posted: Strategic Program Manager @ figma (instance #1)
[2026-01-21T10:18:09.729Z] [BOT] 💾 BEFORE ARCHIVING: 3280 jobs in database
[2026-01-21T10:18:09.731Z] [BOT] ✅ No jobs to archive (all 3280 jobs within 7-day window)
[2026-01-21T10:18:09.752Z] [BOT] 💾 Saved posted_jobs.json: 3280 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:09.752Z] [BOT] 📍 [ROUTING] "Manager, Figma for Education " @ figma
[2026-01-21T10:18:09.752Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:18:09.916Z] [BOT] ✅ Posted message: Manager, Figma for Education  @ figma in #tech-jobs
  ✅ Industry: Manager, Figma for Education  @ figma
[2026-01-21T10:18:09.917Z] [BOT] 💾 Added channel posting: Manager, Figma for Education  @ figma → category channel (1 total channels)
[2026-01-21T10:18:09.917Z] [BOT] 💾 BEFORE ARCHIVING: 3281 jobs in database
[2026-01-21T10:18:09.919Z] [BOT] ✅ No jobs to archive (all 3281 jobs within 7-day window)
[2026-01-21T10:18:09.940Z] [BOT] 💾 Saved posted_jobs.json: 3281 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:11.441Z] [BOT] 💾 Marked as posted: Manager, Figma for Education  @ figma (instance #1)
[2026-01-21T10:18:11.441Z] [BOT] 💾 BEFORE ARCHIVING: 3282 jobs in database
[2026-01-21T10:18:11.444Z] [BOT] ✅ No jobs to archive (all 3282 jobs within 7-day window)
[2026-01-21T10:18:11.466Z] [BOT] 💾 Saved posted_jobs.json: 3282 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:11.467Z] [BOT] 📍 [ROUTING] "Head of Insurance, GTM Sales" @ anthropic
   Category: TECH (default)
[2026-01-21T10:18:11.467Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T10:18:11.669Z] [BOT] ✅ Posted message: Head of Insurance, GTM Sales @ anthropic in #tech-jobs
[2026-01-21T10:18:11.669Z] [BOT] ✅ Industry: Head of Insurance, GTM Sales @ anthropic
[2026-01-21T10:18:11.670Z] [BOT] 💾 Added channel posting: Head of Insurance, GTM Sales @ anthropic → category channel (1 total channels)
[2026-01-21T10:18:11.670Z] [BOT] 💾 BEFORE ARCHIVING: 3283 jobs in database
[2026-01-21T10:18:11.672Z] [BOT] ✅ No jobs to archive (all 3283 jobs within 7-day window)
[2026-01-21T10:18:11.692Z] [BOT] 💾 Saved posted_jobs.json: 3283 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:13.333Z] [BOT] ✅ Posted message: Head of Insurance, GTM Sales @ anthropic in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T10:18:13.334Z] [BOT] 💾 Added channel posting: Head of Insurance, GTM Sales @ anthropic → location channel (2 total channels)
[2026-01-21T10:18:13.334Z] [BOT] 💾 BEFORE ARCHIVING: 3283 jobs in database
[2026-01-21T10:18:13.336Z] [BOT] ✅ No jobs to archive (all 3283 jobs within 7-day window)
[2026-01-21T10:18:13.358Z] [BOT] 💾 Saved posted_jobs.json: 3283 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:14.859Z] [BOT] 💾 Marked as posted: Head of Insurance, GTM Sales @ anthropic (instance #1)
[2026-01-21T10:18:14.859Z] [BOT] 💾 BEFORE ARCHIVING: 3284 jobs in database
[2026-01-21T10:18:14.861Z] [BOT] ✅ No jobs to archive (all 3284 jobs within 7-day window)
[2026-01-21T10:18:14.881Z] [BOT] 💾 Saved posted_jobs.json: 3284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:14.882Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_b1b059ca Systems
   Category: TECH (matched: "software")
[2026-01-21T10:18:14.882Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T10:18:15.062Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_b1b059ca Systems in #tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_b1b059ca Systems
[2026-01-21T10:18:15.062Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_b1b059ca Systems → category channel (1 total channels)
[2026-01-21T10:18:15.062Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-21T10:18:15.064Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-21T10:18:15.084Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:16.739Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_b1b059ca Systems in #JID_98d4f0de
[2026-01-21T10:18:16.740Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T10:18:16.740Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_b1b059ca Systems → location channel (2 total channels)
[2026-01-21T10:18:16.740Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-21T10:18:16.742Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-21T10:18:16.761Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:18.262Z] [BOT] 💾 Marked as posted: Entry Level Software Engineer @ ORG_b1b059ca Systems (instance #1)
[2026-01-21T10:18:18.262Z] [BOT] 💾 BEFORE ARCHIVING: 3286 jobs in database
[2026-01-21T10:18:18.264Z] [BOT] ✅ No jobs to archive (all 3286 jobs within 7-day window)
[2026-01-21T10:18:18.283Z] [BOT] 💾 Saved posted_jobs.json: 3286 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:18.284Z] [BOT] 📍 [ROUTING] "DGX Cloud Performance Engineer" @ ORG_0890f456
[2026-01-21T10:18:18.284Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T10:18:18.428Z] [BOT] ✅ Posted message: DGX Cloud Performance Engineer @ ORG_0890f456 in #tech-jobs
[2026-01-21T10:18:18.429Z] [BOT] ✅ Industry: DGX Cloud Performance Engineer @ ORG_0890f456
[2026-01-21T10:18:18.429Z] [BOT] 💾 Added channel posting: DGX Cloud Performance Engineer @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T10:18:18.429Z] [BOT] 💾 BEFORE ARCHIVING: 3287 jobs in database
[2026-01-21T10:18:18.431Z] [BOT] ✅ No jobs to archive (all 3287 jobs within 7-day window)
[2026-01-21T10:18:18.451Z] [BOT] 💾 Saved posted_jobs.json: 3287 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:19.952Z] [BOT] 💾 Marked as posted: DGX Cloud Performance Engineer @ ORG_0890f456 (instance #1)
[2026-01-21T10:18:19.952Z] [BOT] 💾 BEFORE ARCHIVING: 3288 jobs in database
[2026-01-21T10:18:19.954Z] [BOT] ✅ No jobs to archive (all 3288 jobs within 7-day window)
[2026-01-21T10:18:19.974Z] [BOT] 💾 Saved posted_jobs.json: 3288 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:19.974Z] [BOT] 📍 [ROUTING] "Softare Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "engineer/engineering")
[2026-01-21T10:18:19.974Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T10:18:20.160Z] [BOT] ✅ Posted message: Softare Engineer 1 @ ORG_0bbe3cb1 in #tech-jobs
  ✅ Industry: Softare Engineer 1 @ ORG_0bbe3cb1
[2026-01-21T10:18:20.161Z] [BOT] 💾 Added channel posting: Softare Engineer 1 @ ORG_0bbe3cb1 → category channel (1 total channels)
[2026-01-21T10:18:20.161Z] [BOT] 💾 BEFORE ARCHIVING: 3289 jobs in database
[2026-01-21T10:18:20.163Z] [BOT] ✅ No jobs to archive (all 3289 jobs within 7-day window)
[2026-01-21T10:18:20.182Z] [BOT] 💾 Saved posted_jobs.json: 3289 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:21.683Z] [BOT] 💾 Marked as posted: Softare Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-21T10:18:21.683Z] [BOT] 💾 BEFORE ARCHIVING: 3290 jobs in database
[2026-01-21T10:18:21.685Z] [BOT] ✅ No jobs to archive (all 3290 jobs within 7-day window)
[2026-01-21T10:18:21.707Z] [BOT] 💾 Saved posted_jobs.json: 3290 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:24.708Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T10:18:24.708Z] [BOT] 📍 [ROUTING] "Staff Economist" @ brex
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T10:18:24.963Z] [BOT] ✅ Posted message: Staff Economist @ brex in #finance-jobs
  ✅ Industry: Staff Economist @ brex
[2026-01-21T10:18:24.964Z] [BOT] 💾 Added channel posting: Staff Economist @ brex → category channel (1 total channels)
[2026-01-21T10:18:24.964Z] [BOT] 💾 BEFORE ARCHIVING: 3291 jobs in database
[2026-01-21T10:18:24.967Z] [BOT] ✅ No jobs to archive (all 3291 jobs within 7-day window)
[2026-01-21T10:18:24.986Z] [BOT] 💾 Saved posted_jobs.json: 3291 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:26.488Z] [BOT] 💾 Marked as posted: Staff Economist @ brex (instance #1)
[2026-01-21T10:18:26.488Z] [BOT] 💾 BEFORE ARCHIVING: 3292 jobs in database
[2026-01-21T10:18:26.490Z] [BOT] ✅ No jobs to archive (all 3292 jobs within 7-day window)
[2026-01-21T10:18:26.511Z] [BOT] 💾 Saved posted_jobs.json: 3292 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:29.512Z] [BOT] 📌 Posting 2 jobs to #JID_fb739488
[2026-01-21T10:18:29.512Z] [BOT] 📍 [ROUTING] "Staff Software Engineer - Safety Experience" @ discord
[2026-01-21T10:18:29.513Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T10:18:29.833Z] [BOT] ✅ Posted message: Staff Software Engineer - Safety Experience @ discord in #JID_fb739488
[2026-01-21T10:18:29.833Z] [BOT] ✅ Industry: Staff Software Engineer - Safety Experience @ discord
[2026-01-21T10:18:29.834Z] [BOT] 💾 Added channel posting: Staff Software Engineer - Safety Experience @ discord → category channel (1 total channels)
[2026-01-21T10:18:29.834Z] [BOT] 💾 BEFORE ARCHIVING: 3293 jobs in database
[2026-01-21T10:18:29.836Z] [BOT] ✅ No jobs to archive (all 3293 jobs within 7-day window)
[2026-01-21T10:18:29.856Z] [BOT] 💾 Saved posted_jobs.json: 3293 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:31.359Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Safety Experience @ discord (instance #1)
[2026-01-21T10:18:31.359Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-21T10:18:31.361Z] [BOT] ✅ No jobs to archive (all 3294 jobs within 7-day window)
[2026-01-21T10:18:31.382Z] [BOT] 💾 Saved posted_jobs.json: 3294 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:31.383Z] [BOT] 📍 [ROUTING] "Sales & Pricing Analyst" @ ORG_3aec9bf8
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-21T10:18:31.383Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-21T10:18:31.694Z] [BOT] ✅ Posted message: Sales & Pricing Analyst @ ORG_3aec9bf8 in #JID_fb739488
  ✅ Industry: Sales & Pricing Analyst @ ORG_3aec9bf8
[2026-01-21T10:18:31.694Z] [BOT] 💾 Added channel posting: Sales & Pricing Analyst @ ORG_3aec9bf8 → category channel (1 total channels)
[2026-01-21T10:18:31.694Z] [BOT] 💾 BEFORE ARCHIVING: 3295 jobs in database
[2026-01-21T10:18:31.697Z] [BOT] ✅ No jobs to archive (all 3295 jobs within 7-day window)
[2026-01-21T10:18:31.718Z] [BOT] 💾 Saved posted_jobs.json: 3295 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:33.516Z] [BOT] ✅ Posted message: Sales & Pricing Analyst @ ORG_3aec9bf8 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T10:18:33.516Z] [BOT] 💾 Added channel posting: Sales & Pricing Analyst @ ORG_3aec9bf8 → location channel (2 total channels)
[2026-01-21T10:18:33.516Z] [BOT] 💾 BEFORE ARCHIVING: 3295 jobs in database
[2026-01-21T10:18:33.518Z] [BOT] ✅ No jobs to archive (all 3295 jobs within 7-day window)
[2026-01-21T10:18:33.537Z] [BOT] 💾 Saved posted_jobs.json: 3295 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:35.039Z] [BOT] 💾 Marked as posted: Sales & Pricing Analyst @ ORG_3aec9bf8 (instance #1)
[2026-01-21T10:18:35.039Z] [BOT] 💾 BEFORE ARCHIVING: 3296 jobs in database
[2026-01-21T10:18:35.041Z] [BOT] ✅ No jobs to archive (all 3296 jobs within 7-day window)
[2026-01-21T10:18:35.061Z] [BOT] 💾 Saved posted_jobs.json: 3296 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T10:18:38.062Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T10:18:38.063Z] [BOT] ⏭️  Skipping duplicate: JID_8b73a10f (posted within 7 days)
[2026-01-21T10:18:38.063Z] [BOT] ⏭️  Skipping duplicate: JID_8ffa1ccf (posted within 7 days)
[2026-01-21T10:18:38.063Z] [BOT] ⏭️  Skipping duplicate: JID_3ad8d869 (posted within 7 days)
[2026-01-21T10:18:38.063Z] [BOT] ⏭️  Skipping duplicate: JID_44b041dc (posted within 7 days)
[2026-01-21T10:18:38.063Z] [BOT] ⏭️  Skipping duplicate: JID_25c91802 (posted within 7 days)
[2026-01-21T10:18:38.064Z] [BOT] ⏭️  Skipping duplicate: JID_120669dc (posted within 7 days)
[2026-01-21T10:18:38.064Z] [BOT] ⏭️  Skipping duplicate: JID_2a81cca7-analyst_r0013020 (posted within 7 days)
[2026-01-21T10:18:38.064Z] [BOT] ⏭️  Skipping duplicate: JID_b795c300 (posted within 7 days)
⏭️  Skipping duplicate: JID_a4dd9e68-2026_jr2009610 (posted within 7 days)
[2026-01-21T10:18:38.064Z] [BOT] ⏭️  Skipping duplicate: JID_2c981afd (posted within 7 days)
[2026-01-21T10:18:38.169Z] [BOT] ✅ Loaded pending queue: 2749 total (2729 pending, 20 enriched, 0 posted)
[2026-01-21T10:18:38.347Z] [BOT] ✅ Saved pending queue: 2749 total (2729 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-21T10:18:38.347Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T10:18:38.411Z] [BOT] 📂 Loaded 5815 existing routing entries
[2026-01-21T10:18:38.505Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T10:18:38.505Z] [BOT] Total entries: 5825
   Timestamp: 2026-01-21T10:18:38.481Z
[2026-01-21T10:18:38.506Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 13
   Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T10:18:38.506Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
[2026-01-21T10:18:38.506Z] [BOT] 1. #tech-jobs: 6 posts
     2. #JID_98d4f0de: 2 posts
     3. #JID_fb739488: 2 posts
     4. #ai-jobs: 1 posts
     5. #finance-jobs: 1 posts
[2026-01-21T10:18:38.506Z] [BOT] [STATS] Channel stats saved
[2026-01-21T10:18:40.532Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2982) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*