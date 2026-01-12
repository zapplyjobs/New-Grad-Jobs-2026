# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T21:52:50.872Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T21:52:00.893Z] ========================================
[2026-01-12T21:52:00.895Z] Discord Bot Execution Log
[2026-01-12T21:52:00.895Z] Environment: GitHub Actions
[2026-01-12T21:52:00.895Z] Node Version: v20.19.6
[2026-01-12T21:52:00.895Z] ========================================
[2026-01-12T21:52:00.895Z] Environment Variables Check:
[2026-01-12T21:52:00.895Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T21:52:00.895Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.895Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T21:52:00.895Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T21:52:00.895Z] 
Multi-Channel Configuration:
[2026-01-12T21:52:00.896Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.896Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.896Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.896Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.896Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.896Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.896Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.896Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.896Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T21:52:00.896Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T21:52:00.896Z] 
Data Files Check:
[2026-01-12T21:52:00.898Z] .github/data/new_jobs.json: ✅ Exists (10 items, 186257 bytes)
[2026-01-12T21:52:00.900Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 291530 bytes)
[2026-01-12T21:52:00.900Z] 
========================================
[2026-01-12T21:52:00.900Z] Starting Enhanced Discord Bot...
[2026-01-12T21:52:00.900Z] ========================================
[2026-01-12T21:52:01.422Z] [BOT] ✅ Loaded V2 database: 536 jobs
[2026-01-12T21:52:01.906Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T21:52:01.906Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T21:52:01.906Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T21:52:02.015Z] [BOT] ✅ Loaded pending queue: 2653 total (2633 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Accountant II - NYC at datadog
[2026-01-12T21:52:02.017Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T21:52:02.017Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T21:52:02.017Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T21:52:02.018Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-12T21:52:02.018Z] [BOT] (12 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Staff Software Engineer @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
   - Strategic Account Executive @ datadog: remote, san francisco, california, usa, boston, massachusetts, usa, new york, new york, usa, chicago, illinois, usa
⏸️ Limiting to 10 jobs this run, 12 deferred for next run
📤 Posting 8 jobs...
[2026-01-12T21:52:02.018Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T21:52:02.022Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-12T21:52:02.023Z] [BOT] 📍 [ROUTING] "Staff Accountant II - NYC" @ datadog
[2026-01-12T21:52:02.023Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-12T21:52:02.027Z] [BOT ERROR] (node:2345) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T21:52:02.177Z] [BOT] ✅ Created forum post: 🏢 Staff Accountant II - NYC @ datadog in #💰・finance-jobs
[2026-01-12T21:52:02.177Z] [BOT] ✅ Industry: Staff Accountant II - NYC @ datadog
[2026-01-12T21:52:03.963Z] [BOT] ✅ Created forum post: 🏢 Staff Accountant II - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:52:05.464Z] [BOT] 💾 Marked as posted: Staff Accountant II - NYC @ datadog (instance #1)
[2026-01-12T21:52:05.465Z] [BOT] 💾 BEFORE ARCHIVING: 537 jobs in database
[2026-01-12T21:52:05.466Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T21:52:05.470Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-12T21:52:05.471Z] [BOT] ✅ Archiving complete: 1 archived, 536 active
[2026-01-12T21:52:05.475Z] [BOT] 💾 Saved posted_jobs.json: 536 active jobs
[2026-01-12T21:52:05.475Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:08.477Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-12T21:52:08.478Z] [BOT] 📍 [ROUTING] "Staff GenAI Engineer - Application Performance Monitoring (APM)" @ datadog
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-12T21:52:08.478Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T21:52:08.648Z] [BOT] ✅ Created forum post: 🏢 Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #🤖・ai-jobs
  ✅ Industry: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog
[2026-01-12T21:52:10.418Z] [BOT] ✅ Created forum post: 🏢 Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #🗽・new-york
[2026-01-12T21:52:10.418Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:52:11.919Z] [BOT] 💾 Marked as posted: Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog (instance #1)
[2026-01-12T21:52:11.920Z] [BOT] 💾 BEFORE ARCHIVING: 537 jobs in database
[2026-01-12T21:52:11.920Z] [BOT] ✅ No jobs to archive (all 537 jobs within 7-day window)
[2026-01-12T21:52:11.925Z] [BOT] 💾 Saved posted_jobs.json: 537 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:11.926Z] [BOT] 📍 [ROUTING] "Staff Product Designer, Bits AI" @ datadog
[2026-01-12T21:52:11.926Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T21:52:12.213Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer, Bits AI @ datadog in #🤖・ai-jobs
[2026-01-12T21:52:12.213Z] [BOT] ✅ Industry: Staff Product Designer, Bits AI @ datadog
[2026-01-12T21:52:13.879Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer, Bits AI @ datadog in #🗽・new-york
[2026-01-12T21:52:13.879Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:52:15.381Z] [BOT] 💾 Marked as posted: Staff Product Designer, Bits AI @ datadog (instance #1)
[2026-01-12T21:52:15.381Z] [BOT] 💾 BEFORE ARCHIVING: 538 jobs in database
[2026-01-12T21:52:15.381Z] [BOT] ✅ No jobs to archive (all 538 jobs within 7-day window)
[2026-01-12T21:52:15.386Z] [BOT] 💾 Saved posted_jobs.json: 538 active jobs
[2026-01-12T21:52:15.387Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:18.388Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-12T21:52:18.389Z] [BOT] 📍 [ROUTING] "Staff Product Designer, Visual Systems" @ datadog
[2026-01-12T21:52:18.389Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-12T21:52:18.565Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer, Visual Systems @ datadog in #📣・marketing-jobs
[2026-01-12T21:52:18.565Z] [BOT] ✅ Industry: Staff Product Designer, Visual Systems @ datadog
[2026-01-12T21:52:20.459Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer, Visual Systems @ datadog in #🗽・new-york
[2026-01-12T21:52:20.459Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:52:21.960Z] [BOT] 💾 Marked as posted: Staff Product Designer, Visual Systems @ datadog (instance #1)
[2026-01-12T21:52:21.960Z] [BOT] 💾 BEFORE ARCHIVING: 539 jobs in database
[2026-01-12T21:52:21.961Z] [BOT] ✅ No jobs to archive (all 539 jobs within 7-day window)
[2026-01-12T21:52:21.966Z] [BOT] 💾 Saved posted_jobs.json: 539 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:24.967Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-12T21:52:24.967Z] [BOT] 📍 [ROUTING] "Staff Software Engineer" @ datadog
[2026-01-12T21:52:24.967Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T21:52:25.319Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer @ datadog in #💻・tech-jobs
[2026-01-12T21:52:25.319Z] [BOT] ✅ Industry: Staff Software Engineer @ datadog
[2026-01-12T21:52:26.975Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer @ datadog in #🗽・new-york
[2026-01-12T21:52:26.975Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:52:28.476Z] [BOT] 💾 Marked as posted: Staff Software Engineer @ datadog (instance #1)
[2026-01-12T21:52:28.476Z] [BOT] 💾 BEFORE ARCHIVING: 540 jobs in database
[2026-01-12T21:52:28.477Z] [BOT] ✅ No jobs to archive (all 540 jobs within 7-day window)
[2026-01-12T21:52:28.482Z] [BOT] 💾 Saved posted_jobs.json: 540 active jobs
[2026-01-12T21:52:28.482Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:28.482Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Frontend @ datadog (instance #1)
💾 BEFORE ARCHIVING: 541 jobs in database
[2026-01-12T21:52:28.482Z] [BOT] ✅ No jobs to archive (all 541 jobs within 7-day window)
[2026-01-12T21:52:28.487Z] [BOT] 💾 Saved posted_jobs.json: 541 active jobs
[2026-01-12T21:52:28.487Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Staff Software Engineer - Metrics Query @ datadog (instance #1)
[2026-01-12T21:52:28.487Z] [BOT] 💾 BEFORE ARCHIVING: 542 jobs in database
[2026-01-12T21:52:28.487Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2026-01-12T21:52:28.492Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
[2026-01-12T21:52:28.492Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Staff Software Engineer - ML Observability @ datadog (instance #1)
[2026-01-12T21:52:28.492Z] [BOT] 💾 BEFORE ARCHIVING: 543 jobs in database
[2026-01-12T21:52:28.492Z] [BOT] ✅ No jobs to archive (all 543 jobs within 7-day window)
[2026-01-12T21:52:28.497Z] [BOT] 💾 Saved posted_jobs.json: 543 active jobs
[2026-01-12T21:52:28.497Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Staff Software Engineer - Query Experience @ datadog (instance #1)
[2026-01-12T21:52:28.497Z] [BOT] 💾 BEFORE ARCHIVING: 544 jobs in database
[2026-01-12T21:52:28.497Z] [BOT] ✅ No jobs to archive (all 544 jobs within 7-day window)
[2026-01-12T21:52:28.501Z] [BOT] 💾 Saved posted_jobs.json: 544 active jobs
[2026-01-12T21:52:28.501Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:28.501Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Workflow Engine @ datadog (instance #1)
[2026-01-12T21:52:28.501Z] [BOT] 💾 BEFORE ARCHIVING: 545 jobs in database
[2026-01-12T21:52:28.502Z] [BOT] ✅ No jobs to archive (all 545 jobs within 7-day window)
[2026-01-12T21:52:28.506Z] [BOT] 💾 Saved posted_jobs.json: 545 active jobs
[2026-01-12T21:52:28.506Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:31.506Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T21:52:31.507Z] [BOT] 📍 [ROUTING] "Staff Statistics Engineer - Feature Flagging and Experimentation" @ datadog
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-12T21:52:31.507Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T21:52:31.711Z] [BOT] ✅ Created forum post: 🏢 Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog in #📈・JID_fb739488
  ✅ Industry: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog
[2026-01-12T21:52:33.411Z] [BOT] ✅ Created forum post: 🏢 Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:52:34.911Z] [BOT] 💾 Marked as posted: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog (instance #1)
[2026-01-12T21:52:34.911Z] [BOT] 💾 BEFORE ARCHIVING: 546 jobs in database
[2026-01-12T21:52:34.912Z] [BOT] ✅ No jobs to archive (all 546 jobs within 7-day window)
[2026-01-12T21:52:34.916Z] [BOT] 💾 Saved posted_jobs.json: 546 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:37.916Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-12T21:52:37.916Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: SALES (matched: "sales")
[2026-01-12T21:52:37.917Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T21:52:38.093Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive @ datadog in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive @ datadog
[2026-01-12T21:52:39.794Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive @ datadog in #💻・remote-usa
[2026-01-12T21:52:39.794Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-12T21:52:41.296Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-12T21:52:41.296Z] [BOT] 💾 BEFORE ARCHIVING: 547 jobs in database
[2026-01-12T21:52:41.297Z] [BOT] ✅ No jobs to archive (all 547 jobs within 7-day window)
[2026-01-12T21:52:41.301Z] [BOT] 💾 Saved posted_jobs.json: 547 active jobs
[2026-01-12T21:52:41.301Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-12T21:52:41.301Z] [BOT] 💾 BEFORE ARCHIVING: 548 jobs in database
[2026-01-12T21:52:41.302Z] [BOT] ✅ No jobs to archive (all 548 jobs within 7-day window)
[2026-01-12T21:52:41.306Z] [BOT] 💾 Saved posted_jobs.json: 548 active jobs
[2026-01-12T21:52:41.306Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:41.307Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 549 jobs in database
[2026-01-12T21:52:41.307Z] [BOT] ✅ No jobs to archive (all 549 jobs within 7-day window)
[2026-01-12T21:52:41.312Z] [BOT] 💾 Saved posted_jobs.json: 549 active jobs
[2026-01-12T21:52:41.312Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 550 jobs in database
[2026-01-12T21:52:41.312Z] [BOT] ✅ No jobs to archive (all 550 jobs within 7-day window)
[2026-01-12T21:52:41.317Z] [BOT] 💾 Saved posted_jobs.json: 550 active jobs
[2026-01-12T21:52:41.317Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
[2026-01-12T21:52:41.317Z] [BOT] 💾 BEFORE ARCHIVING: 551 jobs in database
[2026-01-12T21:52:41.317Z] [BOT] ✅ No jobs to archive (all 551 jobs within 7-day window)
[2026-01-12T21:52:41.321Z] [BOT] 💾 Saved posted_jobs.json: 551 active jobs
[2026-01-12T21:52:41.322Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 552 jobs in database
[2026-01-12T21:52:41.322Z] [BOT] ✅ No jobs to archive (all 552 jobs within 7-day window)
[2026-01-12T21:52:41.326Z] [BOT] 💾 Saved posted_jobs.json: 552 active jobs
[2026-01-12T21:52:41.326Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 553 jobs in database
[2026-01-12T21:52:41.326Z] [BOT] ✅ No jobs to archive (all 553 jobs within 7-day window)
[2026-01-12T21:52:41.330Z] [BOT] 💾 Saved posted_jobs.json: 553 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:41.330Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 554 jobs in database
[2026-01-12T21:52:41.331Z] [BOT] ✅ No jobs to archive (all 554 jobs within 7-day window)
[2026-01-12T21:52:41.339Z] [BOT] 💾 Saved posted_jobs.json: 554 active jobs
✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Strategic Account Executive (FED)" @ datadog
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T21:52:41.558Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (FED) @ datadog in #💲・sales-jobs
[2026-01-12T21:52:41.558Z] [BOT] ✅ Industry: Strategic Account Executive (FED) @ datadog
[2026-01-12T21:52:43.334Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive (FED) @ datadog in #💻・remote-usa
[2026-01-12T21:52:43.334Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-12T21:52:44.835Z] [BOT] 💾 Marked as posted: Strategic Account Executive (FED) @ datadog (instance #1)
[2026-01-12T21:52:44.835Z] [BOT] 💾 BEFORE ARCHIVING: 555 jobs in database
[2026-01-12T21:52:44.835Z] [BOT] ✅ No jobs to archive (all 555 jobs within 7-day window)
[2026-01-12T21:52:44.840Z] [BOT] 💾 Saved posted_jobs.json: 555 active jobs
[2026-01-12T21:52:44.840Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:52:47.841Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-12T21:52:47.841Z] [BOT] ⏭️  Skipping duplicate: JID_1f2e8001 (posted within 7 days)
[2026-01-12T21:52:47.841Z] [BOT] ⏭️  Skipping duplicate: JID_d63aa146 (posted within 7 days)
[2026-01-12T21:52:47.841Z] [BOT] ⏭️  Skipping duplicate: JID_fad4bacc (posted within 7 days)
[2026-01-12T21:52:47.841Z] [BOT] ⏭️  Skipping duplicate: JID_17e140fc (posted within 7 days)
⏭️  Skipping duplicate: JID_882f1da4 (posted within 7 days)
[2026-01-12T21:52:47.841Z] [BOT] ⏭️  Skipping duplicate: JID_bda667dc (posted within 7 days)
[2026-01-12T21:52:47.842Z] [BOT] ⏭️  Skipping duplicate: JID_e03342c6 (posted within 7 days)
[2026-01-12T21:52:47.842Z] [BOT] ⏭️  Skipping duplicate: JID_40da89da (posted within 7 days)
[2026-01-12T21:52:47.953Z] [BOT] ✅ Loaded pending queue: 2653 total (2633 pending, 20 enriched, 0 posted)
[2026-01-12T21:52:48.118Z] [BOT] ✅ Saved pending queue: 2653 total (2633 pending, 12 enriched, 8 posted)
[2026-01-12T21:52:48.119Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T21:52:48.169Z] [BOT] 📂 Loaded 2712 existing routing entries
[2026-01-12T21:52:48.223Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 2720
   Timestamp: 2026-01-12T21:52:48.212Z
[2026-01-12T21:52:48.224Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-12T21:52:48.224Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 8
   Top channels:
     1. #🗽・new-york: 6 posts
[2026-01-12T21:52:48.224Z] [BOT] 2. #🤖・ai-jobs: 2 posts
     3. #💲・sales-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-12T21:52:48.224Z] [BOT] [STATS] Channel stats saved
[2026-01-12T21:52:50.249Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2345) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*