# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T14:36:33.814Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T14:35:57.357Z] ========================================
[2026-01-21T14:35:57.359Z] Discord Bot Execution Log
[2026-01-21T14:35:57.360Z] Environment: GitHub Actions
[2026-01-21T14:35:57.360Z] Node Version: v20.19.6
[2026-01-21T14:35:57.360Z] ========================================
[2026-01-21T14:35:57.360Z] Environment Variables Check:
[2026-01-21T14:35:57.360Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T14:35:57.360Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.360Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T14:35:57.360Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T14:35:57.360Z] 
Multi-Channel Configuration:
[2026-01-21T14:35:57.360Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.360Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.360Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.360Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.361Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.361Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.361Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.361Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.361Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T14:35:57.361Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T14:35:57.361Z] 
Data Files Check:
[2026-01-21T14:35:57.362Z] .github/data/new_jobs.json: ✅ Exists (10 items, 195907 bytes)
[2026-01-21T14:35:57.375Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2008468 bytes)
[2026-01-21T14:35:57.375Z] 
========================================
[2026-01-21T14:35:57.375Z] Starting Enhanced Discord Bot...
[2026-01-21T14:35:57.375Z] ========================================
[2026-01-21T14:35:57.934Z] [BOT] ✅ Loaded V2 database: 3498 jobs
[2026-01-21T14:35:58.889Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T14:35:58.890Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T14:35:58.890Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T14:35:59.009Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior AML Investigations Trainer at coinbase
[2026-01-21T14:35:59.014Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T14:35:59.014Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T14:35:59.014Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T14:35:59.015Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-21T14:35:59.016Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer I, Frontend @ Twitch: san francisco, irvine
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-21T14:35:59.016Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T14:35:59.017Z] [BOT] 📌 Posting 8 jobs to #ai-jobs
[2026-01-21T14:35:59.019Z] [BOT] 📍 [ROUTING] "Senior AML Investigations Trainer" @ coinbase
[2026-01-21T14:35:59.019Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:35:59.036Z] [BOT ERROR] (node:3924) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T14:35:59.244Z] [BOT] ✅ Posted message: Senior AML Investigations Trainer @ coinbase in #ai-jobs
  ✅ Industry: Senior AML Investigations Trainer @ coinbase
[2026-01-21T14:35:59.246Z] [BOT] 💾 Added channel posting: Senior AML Investigations Trainer @ coinbase → category channel (1 total channels)
[2026-01-21T14:35:59.246Z] [BOT] 💾 BEFORE ARCHIVING: 3499 jobs in database
[2026-01-21T14:35:59.249Z] [BOT] ✅ No jobs to archive (all 3499 jobs within 7-day window)
[2026-01-21T14:35:59.277Z] [BOT] 💾 Saved posted_jobs.json: 3499 active jobs
[2026-01-21T14:35:59.277Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:00.779Z] [BOT] 💾 Marked as posted: Senior AML Investigations Trainer @ coinbase (instance #1)
[2026-01-21T14:36:00.780Z] [BOT] 💾 BEFORE ARCHIVING: 3500 jobs in database
[2026-01-21T14:36:00.782Z] [BOT] ✅ No jobs to archive (all 3500 jobs within 7-day window)
[2026-01-21T14:36:00.803Z] [BOT] 💾 Saved posted_jobs.json: 3500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:00.804Z] [BOT] 📍 [ROUTING] "Senior Client Strategist, Coinbase Asset Management (Capital Formation)" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-21T14:36:00.804Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T14:36:00.982Z] [BOT] ✅ Posted message: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase in #ai-jobs
  ✅ Industry: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase
[2026-01-21T14:36:00.983Z] [BOT] 💾 Added channel posting: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase → category channel (1 total channels)
[2026-01-21T14:36:00.983Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-21T14:36:00.986Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-21T14:36:01.009Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:02.738Z] [BOT] ✅ Posted message: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T14:36:02.739Z] [BOT] 💾 Added channel posting: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase → location channel (2 total channels)
[2026-01-21T14:36:02.739Z] [BOT] 💾 BEFORE ARCHIVING: 3501 jobs in database
[2026-01-21T14:36:02.742Z] [BOT] ✅ No jobs to archive (all 3501 jobs within 7-day window)
[2026-01-21T14:36:02.765Z] [BOT] 💾 Saved posted_jobs.json: 3501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:04.267Z] [BOT] 💾 Marked as posted: Senior Client Strategist, Coinbase Asset Management (Capital Formation) @ coinbase (instance #1)
[2026-01-21T14:36:04.267Z] [BOT] 💾 BEFORE ARCHIVING: 3502 jobs in database
[2026-01-21T14:36:04.269Z] [BOT] ✅ No jobs to archive (all 3502 jobs within 7-day window)
[2026-01-21T14:36:04.289Z] [BOT] 💾 Saved posted_jobs.json: 3502 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:04.290Z] [BOT] 📍 [ROUTING] "Supervisor, Customer Success Team" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:36:04.518Z] [BOT] ✅ Posted message: Supervisor, Customer Success Team @ coinbase in #ai-jobs
  ✅ Industry: Supervisor, Customer Success Team @ coinbase
[2026-01-21T14:36:04.519Z] [BOT] 💾 Added channel posting: Supervisor, Customer Success Team @ coinbase → category channel (1 total channels)
[2026-01-21T14:36:04.519Z] [BOT] 💾 BEFORE ARCHIVING: 3503 jobs in database
[2026-01-21T14:36:04.521Z] [BOT] ✅ No jobs to archive (all 3503 jobs within 7-day window)
[2026-01-21T14:36:04.542Z] [BOT] 💾 Saved posted_jobs.json: 3503 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:06.044Z] [BOT] 💾 Marked as posted: Supervisor, Customer Success Team @ coinbase (instance #1)
[2026-01-21T14:36:06.044Z] [BOT] 💾 BEFORE ARCHIVING: 3504 jobs in database
[2026-01-21T14:36:06.046Z] [BOT] ✅ No jobs to archive (all 3504 jobs within 7-day window)
[2026-01-21T14:36:06.067Z] [BOT] 💾 Saved posted_jobs.json: 3504 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:06.067Z] [BOT] 📍 [ROUTING] "Tax Information Reporting Intern" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:36:06.285Z] [BOT] ✅ Posted message: Tax Information Reporting Intern @ coinbase in #ai-jobs
  ✅ Industry: Tax Information Reporting Intern @ coinbase
[2026-01-21T14:36:06.286Z] [BOT] 💾 Added channel posting: Tax Information Reporting Intern @ coinbase → category channel (1 total channels)
[2026-01-21T14:36:06.286Z] [BOT] 💾 BEFORE ARCHIVING: 3505 jobs in database
[2026-01-21T14:36:06.288Z] [BOT] ✅ No jobs to archive (all 3505 jobs within 7-day window)
[2026-01-21T14:36:06.308Z] [BOT] 💾 Saved posted_jobs.json: 3505 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:08.112Z] [BOT] ✅ Posted message: Tax Information Reporting Intern @ coinbase in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T14:36:08.113Z] [BOT] 💾 Added channel posting: Tax Information Reporting Intern @ coinbase → location channel (2 total channels)
[2026-01-21T14:36:08.113Z] [BOT] 💾 BEFORE ARCHIVING: 3505 jobs in database
[2026-01-21T14:36:08.115Z] [BOT] ✅ No jobs to archive (all 3505 jobs within 7-day window)
[2026-01-21T14:36:08.141Z] [BOT] 💾 Saved posted_jobs.json: 3505 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:09.641Z] [BOT] 💾 Marked as posted: Tax Information Reporting Intern @ coinbase (instance #1)
[2026-01-21T14:36:09.642Z] [BOT] 💾 BEFORE ARCHIVING: 3506 jobs in database
[2026-01-21T14:36:09.644Z] [BOT] ✅ No jobs to archive (all 3506 jobs within 7-day window)
[2026-01-21T14:36:09.667Z] [BOT] 💾 Saved posted_jobs.json: 3506 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:09.668Z] [BOT] 📍 [ROUTING] "Tax Operations Intern" @ coinbase
[2026-01-21T14:36:09.668Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:36:09.907Z] [BOT] ✅ Posted message: Tax Operations Intern @ coinbase in #ai-jobs
[2026-01-21T14:36:09.908Z] [BOT] ✅ Industry: Tax Operations Intern @ coinbase
[2026-01-21T14:36:09.908Z] [BOT] 💾 Added channel posting: Tax Operations Intern @ coinbase → category channel (1 total channels)
[2026-01-21T14:36:09.909Z] [BOT] 💾 BEFORE ARCHIVING: 3507 jobs in database
[2026-01-21T14:36:09.911Z] [BOT] ✅ No jobs to archive (all 3507 jobs within 7-day window)
[2026-01-21T14:36:09.933Z] [BOT] 💾 Saved posted_jobs.json: 3507 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:11.619Z] [BOT] ✅ Posted message: Tax Operations Intern @ coinbase in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T14:36:11.619Z] [BOT] 💾 Added channel posting: Tax Operations Intern @ coinbase → location channel (2 total channels)
[2026-01-21T14:36:11.619Z] [BOT] 💾 BEFORE ARCHIVING: 3507 jobs in database
[2026-01-21T14:36:11.622Z] [BOT] ✅ No jobs to archive (all 3507 jobs within 7-day window)
[2026-01-21T14:36:11.642Z] [BOT] 💾 Saved posted_jobs.json: 3507 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:13.143Z] [BOT] 💾 Marked as posted: Tax Operations Intern @ coinbase (instance #1)
[2026-01-21T14:36:13.144Z] [BOT] 💾 BEFORE ARCHIVING: 3508 jobs in database
[2026-01-21T14:36:13.146Z] [BOT] ✅ No jobs to archive (all 3508 jobs within 7-day window)
[2026-01-21T14:36:13.167Z] [BOT] 💾 Saved posted_jobs.json: 3508 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:13.168Z] [BOT] 📍 [ROUTING] "TMS Compliance Analyst III" @ coinbase
[2026-01-21T14:36:13.168Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:36:13.450Z] [BOT] ✅ Posted message: TMS Compliance Analyst III @ coinbase in #ai-jobs
  ✅ Industry: TMS Compliance Analyst III @ coinbase
[2026-01-21T14:36:13.450Z] [BOT] 💾 Added channel posting: TMS Compliance Analyst III @ coinbase → category channel (1 total channels)
[2026-01-21T14:36:13.451Z] [BOT] 💾 BEFORE ARCHIVING: 3509 jobs in database
[2026-01-21T14:36:13.453Z] [BOT] ✅ No jobs to archive (all 3509 jobs within 7-day window)
[2026-01-21T14:36:13.473Z] [BOT] 💾 Saved posted_jobs.json: 3509 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:14.974Z] [BOT] 💾 Marked as posted: TMS Compliance Analyst III @ coinbase (instance #1)
[2026-01-21T14:36:14.974Z] [BOT] 💾 BEFORE ARCHIVING: 3510 jobs in database
[2026-01-21T14:36:14.976Z] [BOT] ✅ No jobs to archive (all 3510 jobs within 7-day window)
[2026-01-21T14:36:14.997Z] [BOT] 💾 Saved posted_jobs.json: 3510 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:14.997Z] [BOT] 📍 [ROUTING] "TMS Quality Compliance Analyst III" @ coinbase
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T14:36:15.193Z] [BOT] ✅ Posted message: TMS Quality Compliance Analyst III @ coinbase in #ai-jobs
[2026-01-21T14:36:15.193Z] [BOT] ✅ Industry: TMS Quality Compliance Analyst III @ coinbase
[2026-01-21T14:36:15.194Z] [BOT] 💾 Added channel posting: TMS Quality Compliance Analyst III @ coinbase → category channel (1 total channels)
[2026-01-21T14:36:15.194Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-21T14:36:15.196Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-21T14:36:15.216Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:16.718Z] [BOT] 💾 Marked as posted: TMS Quality Compliance Analyst III @ coinbase (instance #1)
[2026-01-21T14:36:16.719Z] [BOT] 💾 BEFORE ARCHIVING: 3512 jobs in database
[2026-01-21T14:36:16.721Z] [BOT] ✅ No jobs to archive (all 3512 jobs within 7-day window)
[2026-01-21T14:36:16.741Z] [BOT] 💾 Saved posted_jobs.json: 3512 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:16.741Z] [BOT] 📍 [ROUTING] "User Researcher Intern" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-21T14:36:16.741Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T14:36:16.947Z] [BOT] ✅ Posted message: User Researcher Intern @ coinbase in #ai-jobs
  ✅ Industry: User Researcher Intern @ coinbase
[2026-01-21T14:36:16.948Z] [BOT] 💾 Added channel posting: User Researcher Intern @ coinbase → category channel (1 total channels)
[2026-01-21T14:36:16.948Z] [BOT] 💾 BEFORE ARCHIVING: 3513 jobs in database
[2026-01-21T14:36:16.950Z] [BOT] ✅ No jobs to archive (all 3513 jobs within 7-day window)
[2026-01-21T14:36:16.971Z] [BOT] 💾 Saved posted_jobs.json: 3513 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:18.472Z] [BOT] 💾 Marked as posted: User Researcher Intern @ coinbase (instance #1)
[2026-01-21T14:36:18.472Z] [BOT] 💾 BEFORE ARCHIVING: 3514 jobs in database
[2026-01-21T14:36:18.474Z] [BOT] ✅ No jobs to archive (all 3514 jobs within 7-day window)
[2026-01-21T14:36:18.495Z] [BOT] 💾 Saved posted_jobs.json: 3514 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:21.496Z] [BOT] 📌 Posting 2 jobs to #tech-jobs
[2026-01-21T14:36:21.496Z] [BOT] 📍 [ROUTING] "Market Risk Analytics Associate, Stress Testing and AI Integration" @ ORG_02281b3b Stanley
   Category: TECH (matched: "analytics")
[2026-01-21T14:36:21.496Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T14:36:21.694Z] [BOT] ✅ Posted message: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-21T14:36:21.694Z] [BOT] ✅ Industry: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley
[2026-01-21T14:36:21.695Z] [BOT] 💾 Added channel posting: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley → category channel (1 total channels)
[2026-01-21T14:36:21.695Z] [BOT] 💾 BEFORE ARCHIVING: 3515 jobs in database
[2026-01-21T14:36:21.697Z] [BOT] ✅ No jobs to archive (all 3515 jobs within 7-day window)
[2026-01-21T14:36:21.718Z] [BOT] 💾 Saved posted_jobs.json: 3515 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:23.593Z] [BOT] ✅ Posted message: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-21T14:36:23.593Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T14:36:23.593Z] [BOT] 💾 Added channel posting: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T14:36:23.593Z] [BOT] 💾 BEFORE ARCHIVING: 3515 jobs in database
[2026-01-21T14:36:23.595Z] [BOT] ✅ No jobs to archive (all 3515 jobs within 7-day window)
[2026-01-21T14:36:23.617Z] [BOT] 💾 Saved posted_jobs.json: 3515 active jobs
[2026-01-21T14:36:23.617Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:25.119Z] [BOT] 💾 Marked as posted: Market Risk Analytics Associate, Stress Testing and AI Integration @ ORG_02281b3b Stanley (instance #1)
[2026-01-21T14:36:25.119Z] [BOT] 💾 BEFORE ARCHIVING: 3516 jobs in database
[2026-01-21T14:36:25.121Z] [BOT] ✅ No jobs to archive (all 3516 jobs within 7-day window)
[2026-01-21T14:36:25.142Z] [BOT] 💾 Saved posted_jobs.json: 3516 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:25.142Z] [BOT] 📍 [ROUTING] "Applied Scientist - AI & Robotics (PhD) - Early Career" @ ORG_c910d474 Motors
   Category: TECH (matched: "machine learning")
[2026-01-21T14:36:25.142Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T14:36:25.418Z] [BOT] ✅ Posted message: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors in #tech-jobs
[2026-01-21T14:36:25.418Z] [BOT] ✅ Industry: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors
[2026-01-21T14:36:25.419Z] [BOT] 💾 Added channel posting: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors → category channel (1 total channels)
[2026-01-21T14:36:25.419Z] [BOT] 💾 BEFORE ARCHIVING: 3517 jobs in database
[2026-01-21T14:36:25.421Z] [BOT] ✅ No jobs to archive (all 3517 jobs within 7-day window)
[2026-01-21T14:36:25.445Z] [BOT] 💾 Saved posted_jobs.json: 3517 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:26.946Z] [BOT] 💾 Marked as posted: Applied Scientist - AI & Robotics (PhD) - Early Career @ ORG_c910d474 Motors (instance #1)
💾 BEFORE ARCHIVING: 3518 jobs in database
[2026-01-21T14:36:26.949Z] [BOT] ✅ No jobs to archive (all 3518 jobs within 7-day window)
[2026-01-21T14:36:26.970Z] [BOT] 💾 Saved posted_jobs.json: 3518 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T14:36:29.970Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T14:36:29.971Z] [BOT] ⏭️  Skipping duplicate: JID_be918f08 (posted within 7 days)
[2026-01-21T14:36:29.971Z] [BOT] ⏭️  Skipping duplicate: JID_5c36de74 (posted within 7 days)
[2026-01-21T14:36:29.971Z] [BOT] ⏭️  Skipping duplicate: JID_7bf34ecb (posted within 7 days)
[2026-01-21T14:36:29.972Z] [BOT] ⏭️  Skipping duplicate: JID_1ed2c5a5 (posted within 7 days)
[2026-01-21T14:36:29.972Z] [BOT] ⏭️  Skipping duplicate: JID_111e4b9c (posted within 7 days)
[2026-01-21T14:36:29.972Z] [BOT] ⏭️  Skipping duplicate: JID_75495f4b (posted within 7 days)
⏭️  Skipping duplicate: JID_e4b7e01a (posted within 7 days)
[2026-01-21T14:36:29.972Z] [BOT] ⏭️  Skipping duplicate: JID_d8c1abef (posted within 7 days)
[2026-01-21T14:36:29.972Z] [BOT] ⏭️  Skipping duplicate: JID_6804755e-integration_pt-jr025318 (posted within 7 days)
[2026-01-21T14:36:29.973Z] [BOT] ⏭️  Skipping duplicate: JID_a5ada689-careers_gm-JID_c402ef7f-career_jr-202523975 (posted within 7 days)
[2026-01-21T14:36:30.089Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[2026-01-21T14:36:30.262Z] [BOT] ✅ Saved pending queue: 2767 total (2747 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-21T14:36:30.344Z] [BOT] 📂 Loaded 5925 existing routing entries
[2026-01-21T14:36:30.423Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T14:36:30.424Z] [BOT] Total entries: 5935
   Timestamp: 2026-01-21T14:36:30.398Z
[2026-01-21T14:36:30.424Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T14:36:30.424Z] [BOT] Total attempts: 14
   Successful: 14
   Failed: 0
   Skipped: 0
[2026-01-21T14:36:30.424Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 3
   Top channels:
     1. #ai-jobs: 8 posts
     2. #JID_98d4f0de: 4 posts
     3. #tech-jobs: 2 posts
[2026-01-21T14:36:30.425Z] [BOT] [STATS] Channel stats saved
[2026-01-21T14:36:32.449Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3924) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*