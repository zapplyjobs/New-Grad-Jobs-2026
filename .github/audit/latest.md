# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T11:13:51.936Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T11:13:18.359Z] ========================================
[2026-01-21T11:13:18.361Z] Discord Bot Execution Log
[2026-01-21T11:13:18.361Z] Environment: GitHub Actions
[2026-01-21T11:13:18.361Z] Node Version: v20.19.6
[2026-01-21T11:13:18.362Z] ========================================
[2026-01-21T11:13:18.362Z] Environment Variables Check:
[2026-01-21T11:13:18.362Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T11:13:18.362Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.362Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T11:13:18.362Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T11:13:18.362Z] 
Multi-Channel Configuration:
[2026-01-21T11:13:18.362Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.362Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.363Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.363Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.363Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.363Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.363Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.363Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.363Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T11:13:18.363Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T11:13:18.363Z] 
Data Files Check:
[2026-01-21T11:13:18.364Z] .github/data/new_jobs.json: ✅ Exists (10 items, 138948 bytes)
[2026-01-21T11:13:18.376Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1896525 bytes)
[2026-01-21T11:13:18.377Z] 
========================================
[2026-01-21T11:13:18.377Z] Starting Enhanced Discord Bot...
[2026-01-21T11:13:18.377Z] ========================================
[2026-01-21T11:13:18.905Z] [BOT] ✅ Loaded V2 database: 3317 jobs
[2026-01-21T11:13:19.383Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T11:13:19.384Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T11:13:19.384Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T11:13:19.499Z] [BOT] ✅ Loaded pending queue: 2759 total (2739 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Compliance Manager, Customer Trust & Third Party Risk at figma
[2026-01-21T11:13:19.504Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T11:13:19.504Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T11:13:19.504Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T11:13:19.505Z] [BOT] 📋 After multi-location grouping: 18 unique jobs to post
[2026-01-21T11:13:19.505Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Growth Marketing Manager @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-21T11:13:19.505Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T11:13:19.509Z] [BOT] 📌 Posting 5 jobs to #finance-jobs
[2026-01-21T11:13:19.510Z] [BOT] 📍 [ROUTING] "Compliance Manager, Customer Trust & Third Party Risk" @ figma
[2026-01-21T11:13:19.510Z] [BOT] Category: FINANCE (matched: "audit")
   Channel: finance-jobs (1462...4023)
[2026-01-21T11:13:19.527Z] [BOT ERROR] (node:3184) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T11:13:20.285Z] [BOT] ✅ Posted message: Compliance Manager, Customer Trust & Third Party Risk @ figma in #finance-jobs
  ✅ Industry: Compliance Manager, Customer Trust & Third Party Risk @ figma
[2026-01-21T11:13:20.286Z] [BOT] 💾 Added channel posting: Compliance Manager, Customer Trust & Third Party Risk @ figma → category channel (1 total channels)
[2026-01-21T11:13:20.286Z] [BOT] 💾 BEFORE ARCHIVING: 3318 jobs in database
[2026-01-21T11:13:20.289Z] [BOT] ✅ No jobs to archive (all 3318 jobs within 7-day window)
[2026-01-21T11:13:20.316Z] [BOT] 💾 Saved posted_jobs.json: 3318 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:21.818Z] [BOT] 💾 Marked as posted: Compliance Manager, Customer Trust & Third Party Risk @ figma (instance #1)
[2026-01-21T11:13:21.818Z] [BOT] 💾 BEFORE ARCHIVING: 3319 jobs in database
[2026-01-21T11:13:21.821Z] [BOT] ✅ No jobs to archive (all 3319 jobs within 7-day window)
[2026-01-21T11:13:21.840Z] [BOT] 💾 Saved posted_jobs.json: 3319 active jobs
[2026-01-21T11:13:21.840Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:21.840Z] [BOT] 📍 [ROUTING] "Senior Manager, Revenue Transformation" @ figma
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T11:13:22.116Z] [BOT] ✅ Posted message: Senior Manager, Revenue Transformation @ figma in #finance-jobs
[2026-01-21T11:13:22.116Z] [BOT] ✅ Industry: Senior Manager, Revenue Transformation @ figma
[2026-01-21T11:13:22.117Z] [BOT] 💾 Added channel posting: Senior Manager, Revenue Transformation @ figma → category channel (1 total channels)
[2026-01-21T11:13:22.117Z] [BOT] 💾 BEFORE ARCHIVING: 3320 jobs in database
[2026-01-21T11:13:22.119Z] [BOT] ✅ No jobs to archive (all 3320 jobs within 7-day window)
[2026-01-21T11:13:22.141Z] [BOT] 💾 Saved posted_jobs.json: 3320 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:23.642Z] [BOT] 💾 Marked as posted: Senior Manager, Revenue Transformation @ figma (instance #1)
[2026-01-21T11:13:23.643Z] [BOT] 💾 BEFORE ARCHIVING: 3321 jobs in database
[2026-01-21T11:13:23.645Z] [BOT] ✅ No jobs to archive (all 3321 jobs within 7-day window)
[2026-01-21T11:13:23.666Z] [BOT] 💾 Saved posted_jobs.json: 3321 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:23.666Z] [BOT] 📍 [ROUTING] "Director, People Business Partners" @ discord
[2026-01-21T11:13:23.666Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T11:13:23.841Z] [BOT] ✅ Posted message: Director, People Business Partners @ discord in #finance-jobs
[2026-01-21T11:13:23.841Z] [BOT] ✅ Industry: Director, People Business Partners @ discord
[2026-01-21T11:13:23.842Z] [BOT] 💾 Added channel posting: Director, People Business Partners @ discord → category channel (1 total channels)
[2026-01-21T11:13:23.842Z] [BOT] 💾 BEFORE ARCHIVING: 3322 jobs in database
[2026-01-21T11:13:23.844Z] [BOT] ✅ No jobs to archive (all 3322 jobs within 7-day window)
[2026-01-21T11:13:23.865Z] [BOT] 💾 Saved posted_jobs.json: 3322 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:25.366Z] [BOT] 💾 Marked as posted: Director, People Business Partners @ discord (instance #1)
💾 BEFORE ARCHIVING: 3323 jobs in database
[2026-01-21T11:13:25.368Z] [BOT] ✅ No jobs to archive (all 3323 jobs within 7-day window)
[2026-01-21T11:13:25.387Z] [BOT] 💾 Saved posted_jobs.json: 3323 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:25.387Z] [BOT] 📍 [ROUTING] "Senior Financial Analyst" @ discord
[2026-01-21T11:13:25.387Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T11:13:25.543Z] [BOT] ✅ Posted message: Senior Financial Analyst @ discord in #finance-jobs
[2026-01-21T11:13:25.543Z] [BOT] ✅ Industry: Senior Financial Analyst @ discord
[2026-01-21T11:13:25.543Z] [BOT] 💾 Added channel posting: Senior Financial Analyst @ discord → category channel (1 total channels)
[2026-01-21T11:13:25.543Z] [BOT] 💾 BEFORE ARCHIVING: 3324 jobs in database
[2026-01-21T11:13:25.545Z] [BOT] ✅ No jobs to archive (all 3324 jobs within 7-day window)
[2026-01-21T11:13:25.564Z] [BOT] 💾 Saved posted_jobs.json: 3324 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:27.064Z] [BOT] 💾 Marked as posted: Senior Financial Analyst @ discord (instance #1)
[2026-01-21T11:13:27.064Z] [BOT] 💾 BEFORE ARCHIVING: 3325 jobs in database
[2026-01-21T11:13:27.066Z] [BOT] ✅ No jobs to archive (all 3325 jobs within 7-day window)
[2026-01-21T11:13:27.085Z] [BOT] 💾 Saved posted_jobs.json: 3325 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:27.086Z] [BOT] 📍 [ROUTING] "Senior Growth Marketing Manager" @ brex
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T11:13:27.493Z] [BOT] ✅ Posted message: Senior Growth Marketing Manager @ brex in #finance-jobs
  ✅ Industry: Senior Growth Marketing Manager @ brex
[2026-01-21T11:13:27.494Z] [BOT] 💾 Added channel posting: Senior Growth Marketing Manager @ brex → category channel (1 total channels)
[2026-01-21T11:13:27.494Z] [BOT] 💾 BEFORE ARCHIVING: 3326 jobs in database
[2026-01-21T11:13:27.496Z] [BOT] ✅ No jobs to archive (all 3326 jobs within 7-day window)
[2026-01-21T11:13:27.515Z] [BOT] 💾 Saved posted_jobs.json: 3326 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:29.017Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager @ brex (instance #1)
[2026-01-21T11:13:29.017Z] [BOT] 💾 BEFORE ARCHIVING: 3327 jobs in database
[2026-01-21T11:13:29.019Z] [BOT] ✅ No jobs to archive (all 3327 jobs within 7-day window)
[2026-01-21T11:13:29.042Z] [BOT] 💾 Saved posted_jobs.json: 3327 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:29.043Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager @ brex (instance #1)
💾 BEFORE ARCHIVING: 3328 jobs in database
[2026-01-21T11:13:29.045Z] [BOT] ✅ No jobs to archive (all 3328 jobs within 7-day window)
[2026-01-21T11:13:29.067Z] [BOT] 💾 Saved posted_jobs.json: 3328 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:29.067Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager @ brex (instance #1)
[2026-01-21T11:13:29.067Z] [BOT] 💾 BEFORE ARCHIVING: 3329 jobs in database
[2026-01-21T11:13:29.069Z] [BOT] ✅ No jobs to archive (all 3329 jobs within 7-day window)
[2026-01-21T11:13:29.089Z] [BOT] 💾 Saved posted_jobs.json: 3329 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:32.090Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T11:13:32.090Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Commerce" @ discord
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-21T11:13:32.091Z] [BOT] ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-21T11:13:32.315Z] [BOT] ✅ Posted message: Senior Product Manager, Commerce @ discord in #JID_fb739488
[2026-01-21T11:13:32.315Z] [BOT] ✅ Industry: Senior Product Manager, Commerce @ discord
[2026-01-21T11:13:32.316Z] [BOT] 💾 Added channel posting: Senior Product Manager, Commerce @ discord → category channel (1 total channels)
[2026-01-21T11:13:32.316Z] [BOT] 💾 BEFORE ARCHIVING: 3330 jobs in database
[2026-01-21T11:13:32.318Z] [BOT] ✅ No jobs to archive (all 3330 jobs within 7-day window)
[2026-01-21T11:13:32.337Z] [BOT] 💾 Saved posted_jobs.json: 3330 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:33.839Z] [BOT] 💾 Marked as posted: Senior Product Manager, Commerce @ discord (instance #1)
[2026-01-21T11:13:33.839Z] [BOT] 💾 BEFORE ARCHIVING: 3331 jobs in database
[2026-01-21T11:13:33.841Z] [BOT] ✅ No jobs to archive (all 3331 jobs within 7-day window)
[2026-01-21T11:13:33.861Z] [BOT] 💾 Saved posted_jobs.json: 3331 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:36.861Z] [BOT] 📌 Posting 4 jobs to #tech-jobs
[2026-01-21T11:13:36.861Z] [BOT] 📍 [ROUTING] "Product Designer, Claude Code " @ anthropic
[2026-01-21T11:13:36.861Z] [BOT] Category: TECH (default)
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:13:37.075Z] [BOT] ✅ Posted message: Product Designer, Claude Code  @ anthropic in #tech-jobs
[2026-01-21T11:13:37.075Z] [BOT] ✅ Industry: Product Designer, Claude Code  @ anthropic
[2026-01-21T11:13:37.076Z] [BOT] 💾 Added channel posting: Product Designer, Claude Code  @ anthropic → category channel (1 total channels)
[2026-01-21T11:13:37.076Z] [BOT] 💾 BEFORE ARCHIVING: 3332 jobs in database
[2026-01-21T11:13:37.078Z] [BOT] ✅ No jobs to archive (all 3332 jobs within 7-day window)
[2026-01-21T11:13:37.098Z] [BOT] 💾 Saved posted_jobs.json: 3332 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:38.599Z] [BOT] 💾 Marked as posted: Product Designer, Claude Code  @ anthropic (instance #1)
[2026-01-21T11:13:38.599Z] [BOT] 💾 BEFORE ARCHIVING: 3333 jobs in database
[2026-01-21T11:13:38.601Z] [BOT] ✅ No jobs to archive (all 3333 jobs within 7-day window)
[2026-01-21T11:13:38.621Z] [BOT] 💾 Saved posted_jobs.json: 3333 active jobs
[2026-01-21T11:13:38.621Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:38.621Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer in Test" @ ORG_7a38ef37 Corporation
[2026-01-21T11:13:38.621Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:13:38.815Z] [BOT] ✅ Posted message: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation in #tech-jobs
[2026-01-21T11:13:38.815Z] [BOT] ✅ Industry: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation
[2026-01-21T11:13:38.816Z] [BOT] 💾 Added channel posting: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation → category channel (1 total channels)
[2026-01-21T11:13:38.816Z] [BOT] 💾 BEFORE ARCHIVING: 3334 jobs in database
[2026-01-21T11:13:38.817Z] [BOT] ✅ No jobs to archive (all 3334 jobs within 7-day window)
[2026-01-21T11:13:38.837Z] [BOT] 💾 Saved posted_jobs.json: 3334 active jobs
[2026-01-21T11:13:38.837Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:40.338Z] [BOT] 💾 Marked as posted: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation (instance #1)
[2026-01-21T11:13:40.338Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-21T11:13:40.340Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-21T11:13:40.360Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:40.360Z] [BOT] 📍 [ROUTING] "Junior Embedded Software Engineer (cleared)" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:13:40.542Z] [BOT] ✅ Posted message: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #tech-jobs
  ✅ Industry: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems
[2026-01-21T11:13:40.542Z] [BOT] 💾 Added channel posting: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
[2026-01-21T11:13:40.542Z] [BOT] 💾 BEFORE ARCHIVING: 3336 jobs in database
[2026-01-21T11:13:40.544Z] [BOT] ✅ No jobs to archive (all 3336 jobs within 7-day window)
[2026-01-21T11:13:40.563Z] [BOT] 💾 Saved posted_jobs.json: 3336 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:42.064Z] [BOT] 💾 Marked as posted: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-21T11:13:42.064Z] [BOT] 💾 BEFORE ARCHIVING: 3337 jobs in database
[2026-01-21T11:13:42.066Z] [BOT] ✅ No jobs to archive (all 3337 jobs within 7-day window)
[2026-01-21T11:13:42.087Z] [BOT] 💾 Saved posted_jobs.json: 3337 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:42.087Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_c4313919 Schwab
[2026-01-21T11:13:42.087Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T11:13:42.373Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_c4313919 Schwab in #tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_c4313919 Schwab
[2026-01-21T11:13:42.374Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_c4313919 Schwab → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3338 jobs in database
[2026-01-21T11:13:42.376Z] [BOT] ✅ No jobs to archive (all 3338 jobs within 7-day window)
[2026-01-21T11:13:42.395Z] [BOT] 💾 Saved posted_jobs.json: 3338 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:44.093Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_c4313919 Schwab in #JID_ead674af
[2026-01-21T11:13:44.093Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T11:13:44.093Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_c4313919 Schwab → location channel (2 total channels)
[2026-01-21T11:13:44.093Z] [BOT] 💾 BEFORE ARCHIVING: 3338 jobs in database
[2026-01-21T11:13:44.095Z] [BOT] ✅ No jobs to archive (all 3338 jobs within 7-day window)
[2026-01-21T11:13:44.116Z] [BOT] 💾 Saved posted_jobs.json: 3338 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:45.617Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_c4313919 Schwab (instance #1)
[2026-01-21T11:13:45.617Z] [BOT] 💾 BEFORE ARCHIVING: 3339 jobs in database
[2026-01-21T11:13:45.619Z] [BOT] ✅ No jobs to archive (all 3339 jobs within 7-day window)
[2026-01-21T11:13:45.640Z] [BOT] 💾 Saved posted_jobs.json: 3339 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T11:13:48.641Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T11:13:48.642Z] [BOT] ⏭️  Skipping duplicate: JID_000d52dc (posted within 7 days)
[2026-01-21T11:13:48.642Z] [BOT] ⏭️  Skipping duplicate: JID_7ec2eb0c (posted within 7 days)
⏭️  Skipping duplicate: JID_3ade1c4e (posted within 7 days)
⏭️  Skipping duplicate: JID_b6ce3b8d (posted within 7 days)
[2026-01-21T11:13:48.643Z] [BOT] ⏭️  Skipping duplicate: JID_a2a62cb6 (posted within 7 days)
[2026-01-21T11:13:48.643Z] [BOT] ⏭️  Skipping duplicate: JID_8071fa01 (posted within 7 days)
[2026-01-21T11:13:48.643Z] [BOT] ⏭️  Skipping duplicate: JID_f7ba943f (posted within 7 days)
[2026-01-21T11:13:48.643Z] [BOT] ⏭️  Skipping duplicate: JID_27a18fcb-_req-2025-14278 (posted within 7 days)
[2026-01-21T11:13:48.643Z] [BOT] ⏭️  Skipping duplicate: JID_35f672d1 (posted within 7 days)
[2026-01-21T11:13:48.643Z] [BOT] ⏭️  Skipping duplicate: JID_da537281 (posted within 7 days)
[2026-01-21T11:13:48.746Z] [BOT] ✅ Loaded pending queue: 2759 total (2739 pending, 20 enriched, 0 posted)
[2026-01-21T11:13:48.935Z] [BOT] ✅ Saved pending queue: 2759 total (2739 pending, 10 enriched, 10 posted)
[2026-01-21T11:13:48.935Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T11:13:48.997Z] [BOT] 📂 Loaded 5835 existing routing entries
[2026-01-21T11:13:49.074Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 5845
   Timestamp: 2026-01-21T11:13:49.048Z
[2026-01-21T11:13:49.075Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 11
   Successful: 11
[2026-01-21T11:13:49.075Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-21T11:13:49.075Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-21T11:13:49.075Z] [BOT] Total posts: 11
   Channels used: 4
   Top channels:
     1. #finance-jobs: 5 posts
[2026-01-21T11:13:49.075Z] [BOT] 2. #tech-jobs: 4 posts
     3. #JID_fb739488: 1 posts
     4. #JID_ead674af: 1 posts
[2026-01-21T11:13:49.075Z] [BOT] [STATS] Channel stats saved
[2026-01-21T11:13:51.101Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3184) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*