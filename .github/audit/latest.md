# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T15:17:24.944Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T15:16:47.042Z] ========================================
[2026-01-21T15:16:47.044Z] Discord Bot Execution Log
[2026-01-21T15:16:47.044Z] Environment: GitHub Actions
[2026-01-21T15:16:47.044Z] Node Version: v20.19.6
[2026-01-21T15:16:47.044Z] ========================================
[2026-01-21T15:16:47.044Z] Environment Variables Check:
[2026-01-21T15:16:47.044Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T15:16:47.044Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.044Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T15:16:47.044Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T15:16:47.044Z] 
Multi-Channel Configuration:
[2026-01-21T15:16:47.045Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.045Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.045Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.045Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.045Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.045Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.045Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.045Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.045Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T15:16:47.045Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T15:16:47.045Z] 
Data Files Check:
[2026-01-21T15:16:47.047Z] .github/data/new_jobs.json: ✅ Exists (10 items, 146708 bytes)
[2026-01-21T15:16:47.063Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2036670 bytes)
[2026-01-21T15:16:47.063Z] 
========================================
[2026-01-21T15:16:47.063Z] Starting Enhanced Discord Bot...
[2026-01-21T15:16:47.063Z] ========================================
[2026-01-21T15:16:47.676Z] [BOT] ✅ Loaded V2 database: 3541 jobs
[2026-01-21T15:16:48.298Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T15:16:48.299Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T15:16:48.299Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T15:16:48.438Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist - People Analytics at Qualtrics
[2026-01-21T15:16:48.441Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T15:16:48.442Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T15:16:48.442Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T15:16:48.443Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2026-01-21T15:16:48.443Z] [BOT] (11 grouped as same job with different locations)
📍 6 jobs with multiple locations:
   -  Accounting Manager, Legal Entity Controllership @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states, seattle, washington, united states
   - Banking Specialist @ brex: new york, new york, united states, san francisco, california, united states
   - Commercial Account Executive @ brex: new york, new york, united states, seattle, washington, united states, salt lake city, utah, united states, san francisco, california, united states
[2026-01-21T15:16:48.443Z] [BOT] - Compliance Manager (Card & Rewards) @ brex: san francisco, california, united states, salt lake city, utah, united states, new york, new york, united states
   - Engineering Manager, Security Engineering  @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-21T15:16:48.444Z] [BOT] - Enterprise Account Executive @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 11 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T15:16:48.448Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-21T15:16:48.449Z] [BOT] 📍 [ROUTING] "Data Scientist - People Analytics" @ ORG_28d3793c
[2026-01-21T15:16:48.449Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-21T15:16:48.469Z] [BOT ERROR] (node:2414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T15:16:48.681Z] [BOT] ✅ Posted message: Data Scientist - People Analytics @ ORG_28d3793c in #JID_fb739488
  ✅ Industry: Data Scientist - People Analytics @ ORG_28d3793c
[2026-01-21T15:16:48.683Z] [BOT] 💾 Added channel posting: Data Scientist - People Analytics @ ORG_28d3793c → category channel (1 total channels)
[2026-01-21T15:16:48.683Z] [BOT] 💾 BEFORE ARCHIVING: 3542 jobs in database
[2026-01-21T15:16:48.687Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T15:16:48.692Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
✅ Archiving complete: 2 archived, 3540 active
[2026-01-21T15:16:48.729Z] [BOT] 💾 Saved posted_jobs.json: 3540 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:16:50.408Z] [BOT] ✅ Posted message: Data Scientist - People Analytics @ ORG_28d3793c in #JID_ead674af
[2026-01-21T15:16:50.409Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T15:16:50.409Z] [BOT] 💾 Added channel posting: Data Scientist - People Analytics @ ORG_28d3793c → location channel (2 total channels)
[2026-01-21T15:16:50.410Z] [BOT] 💾 BEFORE ARCHIVING: 3540 jobs in database
[2026-01-21T15:16:50.412Z] [BOT] ✅ No jobs to archive (all 3540 jobs within 7-day window)
[2026-01-21T15:16:50.436Z] [BOT] 💾 Saved posted_jobs.json: 3540 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:16:51.937Z] [BOT] 💾 Marked as posted: Data Scientist - People Analytics @ ORG_28d3793c (instance #1)
[2026-01-21T15:16:51.937Z] [BOT] 💾 BEFORE ARCHIVING: 3541 jobs in database
[2026-01-21T15:16:51.940Z] [BOT] ✅ No jobs to archive (all 3541 jobs within 7-day window)
[2026-01-21T15:16:51.967Z] [BOT] 💾 Saved posted_jobs.json: 3541 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:16:54.968Z] [BOT] 📌 Posting 7 jobs to #finance-jobs
[2026-01-21T15:16:54.969Z] [BOT] 📍 [ROUTING] " Accounting Manager, Legal Entity Controllership" @ brex
[2026-01-21T15:16:54.969Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T15:16:55.271Z] [BOT] ✅ Posted message:  Accounting Manager, Legal Entity Controllership @ brex in #finance-jobs
  ✅ Industry:  Accounting Manager, Legal Entity Controllership @ brex
[2026-01-21T15:16:55.272Z] [BOT] 💾 Added channel posting:  Accounting Manager, Legal Entity Controllership @ brex → category channel (1 total channels)
[2026-01-21T15:16:55.272Z] [BOT] 💾 BEFORE ARCHIVING: 3542 jobs in database
[2026-01-21T15:16:55.275Z] [BOT] ✅ No jobs to archive (all 3542 jobs within 7-day window)
[2026-01-21T15:16:55.302Z] [BOT] 💾 Saved posted_jobs.json: 3542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:16:57.015Z] [BOT] ✅ Posted message:  Accounting Manager, Legal Entity Controllership @ brex in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T15:16:57.015Z] [BOT] 💾 Added channel posting:  Accounting Manager, Legal Entity Controllership @ brex → location channel (2 total channels)
[2026-01-21T15:16:57.016Z] [BOT] 💾 BEFORE ARCHIVING: 3542 jobs in database
[2026-01-21T15:16:57.018Z] [BOT] ✅ No jobs to archive (all 3542 jobs within 7-day window)
[2026-01-21T15:16:57.047Z] [BOT] 💾 Saved posted_jobs.json: 3542 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:16:58.549Z] [BOT] 💾 Marked as posted:  Accounting Manager, Legal Entity Controllership @ brex (instance #1)
[2026-01-21T15:16:58.549Z] [BOT] 💾 BEFORE ARCHIVING: 3543 jobs in database
[2026-01-21T15:16:58.552Z] [BOT] ✅ No jobs to archive (all 3543 jobs within 7-day window)
[2026-01-21T15:16:58.581Z] [BOT] 💾 Saved posted_jobs.json: 3543 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:16:58.581Z] [BOT] 💾 Marked as posted: Accounting Manager, Legal Entity Controllership @ brex (instance #1)
[2026-01-21T15:16:58.581Z] [BOT] 💾 BEFORE ARCHIVING: 3544 jobs in database
[2026-01-21T15:16:58.583Z] [BOT] ✅ No jobs to archive (all 3544 jobs within 7-day window)
[2026-01-21T15:16:58.611Z] [BOT] 💾 Saved posted_jobs.json: 3544 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:16:58.611Z] [BOT] 💾 Marked as posted: Accounting Manager, Legal Entity Controllership @ brex (instance #1)
[2026-01-21T15:16:58.611Z] [BOT] 💾 BEFORE ARCHIVING: 3545 jobs in database
[2026-01-21T15:16:58.613Z] [BOT] ✅ No jobs to archive (all 3545 jobs within 7-day window)
[2026-01-21T15:16:58.639Z] [BOT] 💾 Saved posted_jobs.json: 3545 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:16:58.639Z] [BOT] 💾 Marked as posted: Accounting Manager, Legal Entity Controllership @ brex (instance #1)
[2026-01-21T15:16:58.639Z] [BOT] 💾 BEFORE ARCHIVING: 3546 jobs in database
[2026-01-21T15:16:58.642Z] [BOT] ✅ No jobs to archive (all 3546 jobs within 7-day window)
[2026-01-21T15:16:58.666Z] [BOT] 💾 Saved posted_jobs.json: 3546 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:16:58.666Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
[2026-01-21T15:16:58.667Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: finance-jobs (1462...4023)
[2026-01-21T15:16:58.826Z] [BOT] ✅ Posted message: Associate Technical Consultant @ brex in #finance-jobs
  ✅ Industry: Associate Technical Consultant @ brex
[2026-01-21T15:16:58.827Z] [BOT] 💾 Added channel posting: Associate Technical Consultant @ brex → category channel (1 total channels)
[2026-01-21T15:16:58.827Z] [BOT] 💾 BEFORE ARCHIVING: 3547 jobs in database
[2026-01-21T15:16:58.830Z] [BOT] ✅ No jobs to archive (all 3547 jobs within 7-day window)
[2026-01-21T15:16:58.853Z] [BOT] 💾 Saved posted_jobs.json: 3547 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:00.354Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ brex (instance #1)
💾 BEFORE ARCHIVING: 3548 jobs in database
[2026-01-21T15:17:00.357Z] [BOT] ✅ No jobs to archive (all 3548 jobs within 7-day window)
[2026-01-21T15:17:00.381Z] [BOT] 💾 Saved posted_jobs.json: 3548 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:00.381Z] [BOT] 📍 [ROUTING] "Banking Specialist" @ brex
[2026-01-21T15:17:00.381Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T15:17:00.597Z] [BOT] ✅ Posted message: Banking Specialist @ brex in #finance-jobs
  ✅ Industry: Banking Specialist @ brex
[2026-01-21T15:17:00.598Z] [BOT] 💾 Added channel posting: Banking Specialist @ brex → category channel (1 total channels)
[2026-01-21T15:17:00.598Z] [BOT] 💾 BEFORE ARCHIVING: 3549 jobs in database
[2026-01-21T15:17:00.601Z] [BOT] ✅ No jobs to archive (all 3549 jobs within 7-day window)
[2026-01-21T15:17:00.625Z] [BOT] 💾 Saved posted_jobs.json: 3549 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:02.358Z] [BOT] ✅ Posted message: Banking Specialist @ brex in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T15:17:02.358Z] [BOT] 💾 Added channel posting: Banking Specialist @ brex → location channel (2 total channels)
[2026-01-21T15:17:02.358Z] [BOT] 💾 BEFORE ARCHIVING: 3549 jobs in database
[2026-01-21T15:17:02.361Z] [BOT] ✅ No jobs to archive (all 3549 jobs within 7-day window)
[2026-01-21T15:17:02.385Z] [BOT] 💾 Saved posted_jobs.json: 3549 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:03.886Z] [BOT] 💾 Marked as posted: Banking Specialist @ brex (instance #1)
[2026-01-21T15:17:03.887Z] [BOT] 💾 BEFORE ARCHIVING: 3550 jobs in database
[2026-01-21T15:17:03.889Z] [BOT] ✅ No jobs to archive (all 3550 jobs within 7-day window)
[2026-01-21T15:17:03.913Z] [BOT] 💾 Saved posted_jobs.json: 3550 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:03.913Z] [BOT] 💾 Marked as posted: Banking Specialist @ brex (instance #1)
[2026-01-21T15:17:03.913Z] [BOT] 💾 BEFORE ARCHIVING: 3551 jobs in database
[2026-01-21T15:17:03.915Z] [BOT] ✅ No jobs to archive (all 3551 jobs within 7-day window)
[2026-01-21T15:17:03.939Z] [BOT] 💾 Saved posted_jobs.json: 3551 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:03.939Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ brex
[2026-01-21T15:17:03.940Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: finance-jobs (1462...4023)
[2026-01-21T15:17:04.473Z] [BOT] ✅ Posted message: Commercial Account Executive @ brex in #finance-jobs
[2026-01-21T15:17:04.473Z] [BOT] ✅ Industry: Commercial Account Executive @ brex
[2026-01-21T15:17:04.473Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ brex → category channel (1 total channels)
[2026-01-21T15:17:04.473Z] [BOT] 💾 BEFORE ARCHIVING: 3552 jobs in database
[2026-01-21T15:17:04.476Z] [BOT] ✅ No jobs to archive (all 3552 jobs within 7-day window)
[2026-01-21T15:17:04.500Z] [BOT] 💾 Saved posted_jobs.json: 3552 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:06.330Z] [BOT] ✅ Posted message: Commercial Account Executive @ brex in #JID_98d4f0de
[2026-01-21T15:17:06.330Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T15:17:06.330Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ brex → location channel (2 total channels)
[2026-01-21T15:17:06.330Z] [BOT] 💾 BEFORE ARCHIVING: 3552 jobs in database
[2026-01-21T15:17:06.333Z] [BOT] ✅ No jobs to archive (all 3552 jobs within 7-day window)
[2026-01-21T15:17:06.356Z] [BOT] 💾 Saved posted_jobs.json: 3552 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:07.857Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
[2026-01-21T15:17:07.857Z] [BOT] 💾 BEFORE ARCHIVING: 3553 jobs in database
[2026-01-21T15:17:07.859Z] [BOT] ✅ No jobs to archive (all 3553 jobs within 7-day window)
[2026-01-21T15:17:07.883Z] [BOT] 💾 Saved posted_jobs.json: 3553 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:07.883Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-21T15:17:07.885Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-21T15:17:07.909Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:07.909Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
[2026-01-21T15:17:07.909Z] [BOT] 💾 BEFORE ARCHIVING: 3555 jobs in database
[2026-01-21T15:17:07.911Z] [BOT] ✅ No jobs to archive (all 3555 jobs within 7-day window)
[2026-01-21T15:17:07.935Z] [BOT] 💾 Saved posted_jobs.json: 3555 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:07.935Z] [BOT] 💾 Marked as posted: Commercial Account Executive @ brex (instance #1)
💾 BEFORE ARCHIVING: 3556 jobs in database
[2026-01-21T15:17:07.937Z] [BOT] ✅ No jobs to archive (all 3556 jobs within 7-day window)
[2026-01-21T15:17:07.961Z] [BOT] 💾 Saved posted_jobs.json: 3556 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:07.961Z] [BOT] 📍 [ROUTING] "Compliance Manager (Card & Rewards)" @ brex
[2026-01-21T15:17:07.962Z] [BOT] Category: FINANCE (matched: "finance")
[2026-01-21T15:17:07.962Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T15:17:08.165Z] [BOT] ✅ Posted message: Compliance Manager (Card & Rewards) @ brex in #finance-jobs
  ✅ Industry: Compliance Manager (Card & Rewards) @ brex
[2026-01-21T15:17:08.166Z] [BOT] 💾 Added channel posting: Compliance Manager (Card & Rewards) @ brex → category channel (1 total channels)
[2026-01-21T15:17:08.166Z] [BOT] 💾 BEFORE ARCHIVING: 3557 jobs in database
[2026-01-21T15:17:08.168Z] [BOT] ✅ No jobs to archive (all 3557 jobs within 7-day window)
[2026-01-21T15:17:08.192Z] [BOT] 💾 Saved posted_jobs.json: 3557 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:09.693Z] [BOT] 💾 Marked as posted: Compliance Manager (Card & Rewards) @ brex (instance #1)
[2026-01-21T15:17:09.693Z] [BOT] 💾 BEFORE ARCHIVING: 3558 jobs in database
[2026-01-21T15:17:09.696Z] [BOT] ✅ No jobs to archive (all 3558 jobs within 7-day window)
[2026-01-21T15:17:09.719Z] [BOT] 💾 Saved posted_jobs.json: 3558 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:09.720Z] [BOT] 💾 Marked as posted: Compliance Manager (Card & Rewards) @ brex (instance #1)
[2026-01-21T15:17:09.720Z] [BOT] 💾 BEFORE ARCHIVING: 3559 jobs in database
[2026-01-21T15:17:09.722Z] [BOT] ✅ No jobs to archive (all 3559 jobs within 7-day window)
[2026-01-21T15:17:09.746Z] [BOT] 💾 Saved posted_jobs.json: 3559 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:09.746Z] [BOT] 💾 Marked as posted: Compliance Manager (Card & Rewards) @ brex (instance #1)
[2026-01-21T15:17:09.746Z] [BOT] 💾 BEFORE ARCHIVING: 3560 jobs in database
[2026-01-21T15:17:09.748Z] [BOT] ✅ No jobs to archive (all 3560 jobs within 7-day window)
[2026-01-21T15:17:09.771Z] [BOT] 💾 Saved posted_jobs.json: 3560 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:09.772Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ brex
[2026-01-21T15:17:09.772Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: finance-jobs (1462...4023)
[2026-01-21T15:17:10.126Z] [BOT] ✅ Posted message: Enterprise Account Executive @ brex in #finance-jobs
[2026-01-21T15:17:10.127Z] [BOT] ✅ Industry: Enterprise Account Executive @ brex
[2026-01-21T15:17:10.127Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ brex → category channel (1 total channels)
[2026-01-21T15:17:10.127Z] [BOT] 💾 BEFORE ARCHIVING: 3561 jobs in database
[2026-01-21T15:17:10.129Z] [BOT] ✅ No jobs to archive (all 3561 jobs within 7-day window)
[2026-01-21T15:17:10.153Z] [BOT] 💾 Saved posted_jobs.json: 3561 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:11.654Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ brex (instance #1)
[2026-01-21T15:17:11.654Z] [BOT] 💾 BEFORE ARCHIVING: 3562 jobs in database
[2026-01-21T15:17:11.656Z] [BOT] ✅ No jobs to archive (all 3562 jobs within 7-day window)
[2026-01-21T15:17:11.680Z] [BOT] 💾 Saved posted_jobs.json: 3562 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:11.681Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ brex (instance #1)
💾 BEFORE ARCHIVING: 3563 jobs in database
[2026-01-21T15:17:11.683Z] [BOT] ✅ No jobs to archive (all 3563 jobs within 7-day window)
[2026-01-21T15:17:11.706Z] [BOT] 💾 Saved posted_jobs.json: 3563 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:11.707Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant, Financial Saas" @ brex
   Category: FINANCE (matched: "accounting")
[2026-01-21T15:17:11.707Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T15:17:11.943Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant, Financial Saas @ brex in #finance-jobs
  ✅ Industry: Enterprise Implementation Consultant, Financial Saas @ brex
[2026-01-21T15:17:11.943Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant, Financial Saas @ brex → category channel (1 total channels)
[2026-01-21T15:17:11.944Z] [BOT] 💾 BEFORE ARCHIVING: 3564 jobs in database
[2026-01-21T15:17:11.946Z] [BOT] ✅ No jobs to archive (all 3564 jobs within 7-day window)
[2026-01-21T15:17:11.970Z] [BOT] 💾 Saved posted_jobs.json: 3564 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:13.471Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-21T15:17:13.471Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-21T15:17:13.474Z] [BOT] ✅ No jobs to archive (all 3565 jobs within 7-day window)
[2026-01-21T15:17:13.498Z] [BOT] 💾 Saved posted_jobs.json: 3565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:16.499Z] [BOT] 📌 Posting 1 jobs to #tech-jobs
[2026-01-21T15:17:16.499Z] [BOT] 📍 [ROUTING] "Engineering Manager, Security Engineering " @ brex
[2026-01-21T15:17:16.499Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: tech-jobs (1462...4987)
[2026-01-21T15:17:16.914Z] [BOT] ✅ Posted message: Engineering Manager, Security Engineering  @ brex in #tech-jobs
  ✅ Industry: Engineering Manager, Security Engineering  @ brex
[2026-01-21T15:17:16.915Z] [BOT] 💾 Added channel posting: Engineering Manager, Security Engineering  @ brex → category channel (1 total channels)
[2026-01-21T15:17:16.915Z] [BOT] 💾 BEFORE ARCHIVING: 3566 jobs in database
[2026-01-21T15:17:16.917Z] [BOT] ✅ No jobs to archive (all 3566 jobs within 7-day window)
[2026-01-21T15:17:16.941Z] [BOT] 💾 Saved posted_jobs.json: 3566 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:18.442Z] [BOT] 💾 Marked as posted: Engineering Manager, Security Engineering  @ brex (instance #1)
[2026-01-21T15:17:18.442Z] [BOT] 💾 BEFORE ARCHIVING: 3567 jobs in database
[2026-01-21T15:17:18.445Z] [BOT] ✅ No jobs to archive (all 3567 jobs within 7-day window)
[2026-01-21T15:17:18.469Z] [BOT] 💾 Saved posted_jobs.json: 3567 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:18.469Z] [BOT] 💾 Marked as posted: Engineering Manager, Security Engineering  @ brex (instance #1)
[2026-01-21T15:17:18.469Z] [BOT] 💾 BEFORE ARCHIVING: 3568 jobs in database
[2026-01-21T15:17:18.471Z] [BOT] ✅ No jobs to archive (all 3568 jobs within 7-day window)
[2026-01-21T15:17:18.495Z] [BOT] 💾 Saved posted_jobs.json: 3568 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T15:17:21.496Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2026-01-21T15:17:21.497Z] [BOT] ⏭️  Skipping duplicate: JID_ae841d15 (posted within 7 days)
[2026-01-21T15:17:21.497Z] [BOT] ⏭️  Skipping duplicate: JID_20232dd2 (posted within 7 days)
[2026-01-21T15:17:21.497Z] [BOT] ⏭️  Skipping duplicate: JID_994d5763 (posted within 7 days)
[2026-01-21T15:17:21.498Z] [BOT] ⏭️  Skipping duplicate: JID_82e482cb (posted within 7 days)
[2026-01-21T15:17:21.498Z] [BOT] ⏭️  Skipping duplicate: JID_9f3e59d4 (posted within 7 days)
⏭️  Skipping duplicate: JID_6f0569a5 (posted within 7 days)
[2026-01-21T15:17:21.498Z] [BOT] ⏭️  Skipping duplicate: JID_863d50e3 (posted within 7 days)
[2026-01-21T15:17:21.498Z] [BOT] ⏭️  Skipping duplicate: JID_1f9a3a07 (posted within 7 days)
[2026-01-21T15:17:21.498Z] [BOT] ⏭️  Skipping duplicate: JID_d057ef79 (posted within 7 days)
[2026-01-21T15:17:21.633Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[2026-01-21T15:17:21.822Z] [BOT] ✅ Saved pending queue: 2766 total (2746 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T15:17:21.908Z] [BOT] 📂 Loaded 5945 existing routing entries
[2026-01-21T15:17:21.997Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 5954
[2026-01-21T15:17:21.997Z] [BOT] Timestamp: 2026-01-21T15:17:21.974Z
[2026-01-21T15:17:21.998Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 13
[2026-01-21T15:17:21.998Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 0
[2026-01-21T15:17:21.998Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-21T15:17:21.998Z] [BOT] 1. #finance-jobs: 7 posts
     2. #JID_ead674af: 2 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
     5. #tech-jobs: 1 posts
[2026-01-21T15:17:21.998Z] [BOT] [STATS] Channel stats saved
[2026-01-21T15:17:24.029Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2414) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*