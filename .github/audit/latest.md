# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T22:08:36.742Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T22:07:42.907Z] ========================================
[2026-01-13T22:07:42.909Z] Discord Bot Execution Log
[2026-01-13T22:07:42.909Z] Environment: GitHub Actions
[2026-01-13T22:07:42.909Z] Node Version: v20.19.6
[2026-01-13T22:07:42.909Z] ========================================
[2026-01-13T22:07:42.909Z] Environment Variables Check:
[2026-01-13T22:07:42.909Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T22:07:42.909Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.909Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T22:07:42.909Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T22:07:42.910Z] 
Multi-Channel Configuration:
[2026-01-13T22:07:42.910Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.910Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.910Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.910Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.910Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.910Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.910Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.910Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.910Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T22:07:42.910Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T22:07:42.910Z] 
Data Files Check:
[2026-01-13T22:07:42.911Z] .github/data/new_jobs.json: ✅ Exists (10 items, 107495 bytes)
[2026-01-13T22:07:42.915Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 538635 bytes)
[2026-01-13T22:07:42.915Z] 
========================================
[2026-01-13T22:07:42.915Z] Starting Enhanced Discord Bot...
[2026-01-13T22:07:42.915Z] ========================================
[2026-01-13T22:07:43.435Z] [BOT] ✅ Loaded V2 database: 1015 jobs
[2026-01-13T22:07:43.875Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T22:07:43.875Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T22:07:43.875Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T22:07:43.985Z] [BOT] ✅ Loaded pending queue: 2723 total (2703 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Growth Marketing Manager at brex
[2026-01-13T22:07:43.988Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T22:07:43.988Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T22:07:43.988Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T22:07:43.989Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-13T22:07:43.989Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Growth Marketing Manager @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T22:07:43.989Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T22:07:43.994Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-13T22:07:43.994Z] [BOT] 📍 [ROUTING] "Senior Growth Marketing Manager" @ brex
[2026-01-13T22:07:43.994Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T22:07:43.999Z] [BOT ERROR] (node:3378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T22:07:44.232Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Marketing Manager @ brex in #📣・marketing-jobs
  ✅ Industry: Senior Growth Marketing Manager @ brex
[2026-01-13T22:07:45.910Z] [BOT] ✅ Created forum post: 🏢 Senior Growth Marketing Manager @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-13T22:07:47.411Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager @ brex (instance #1)
[2026-01-13T22:07:47.411Z] [BOT] 💾 BEFORE ARCHIVING: 1016 jobs in database
[2026-01-13T22:07:47.412Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-13T22:07:47.417Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-13T22:07:47.417Z] [BOT] ✅ Archiving complete: 1 archived, 1015 active
[2026-01-13T22:07:47.426Z] [BOT] 💾 Saved posted_jobs.json: 1015 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:07:47.427Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager @ brex (instance #1)
💾 BEFORE ARCHIVING: 1016 jobs in database
[2026-01-13T22:07:47.428Z] [BOT] ✅ No jobs to archive (all 1016 jobs within 7-day window)
[2026-01-13T22:07:47.434Z] [BOT] 💾 Saved posted_jobs.json: 1016 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:07:47.434Z] [BOT] 💾 Marked as posted: Senior Growth Marketing Manager @ brex (instance #1)
💾 BEFORE ARCHIVING: 1017 jobs in database
[2026-01-13T22:07:47.435Z] [BOT] ✅ No jobs to archive (all 1017 jobs within 7-day window)
[2026-01-13T22:07:47.442Z] [BOT] 💾 Saved posted_jobs.json: 1017 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:07:47.443Z] [BOT] 📍 [ROUTING] "Director, People Business Partners" @ discord
[2026-01-13T22:07:47.443Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-13T22:07:47.615Z] [BOT] ✅ Created forum post: 🏢 Director, People Business Partners @ discord in #📣・marketing-jobs
[2026-01-13T22:07:47.615Z] [BOT] ✅ Industry: Director, People Business Partners @ discord
[2026-01-13T22:07:49.510Z] [BOT] ✅ Created forum post: 🏢 Director, People Business Partners @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:07:51.011Z] [BOT] 💾 Marked as posted: Director, People Business Partners @ discord (instance #1)
[2026-01-13T22:07:51.011Z] [BOT] 💾 BEFORE ARCHIVING: 1018 jobs in database
[2026-01-13T22:07:51.012Z] [BOT] ✅ No jobs to archive (all 1018 jobs within 7-day window)
[2026-01-13T22:07:51.019Z] [BOT] 💾 Saved posted_jobs.json: 1018 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:07:54.020Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-13T22:07:54.021Z] [BOT] 📍 [ROUTING] "Senior Manager, Treasury Operations" @ anthropic
[2026-01-13T22:07:54.021Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T22:07:54.444Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Treasury Operations @ anthropic in #💰・finance-jobs
  ✅ Industry: Senior Manager, Treasury Operations @ anthropic
[2026-01-13T22:07:56.185Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Treasury Operations @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:07:57.686Z] [BOT] 💾 Marked as posted: Senior Manager, Treasury Operations @ anthropic (instance #1)
[2026-01-13T22:07:57.687Z] [BOT] 💾 BEFORE ARCHIVING: 1019 jobs in database
[2026-01-13T22:07:57.687Z] [BOT] ✅ No jobs to archive (all 1019 jobs within 7-day window)
[2026-01-13T22:07:57.695Z] [BOT] 💾 Saved posted_jobs.json: 1019 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:07:57.696Z] [BOT] 📍 [ROUTING] "Senior Financial Analyst" @ discord
[2026-01-13T22:07:57.696Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-13T22:07:57.877Z] [BOT] ✅ Created forum post: 🏢 Senior Financial Analyst @ discord in #💰・finance-jobs
  ✅ Industry: Senior Financial Analyst @ discord
[2026-01-13T22:07:59.581Z] [BOT] ✅ Created forum post: 🏢 Senior Financial Analyst @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:08:01.081Z] [BOT] 💾 Marked as posted: Senior Financial Analyst @ discord (instance #1)
[2026-01-13T22:08:01.081Z] [BOT] 💾 BEFORE ARCHIVING: 1020 jobs in database
[2026-01-13T22:08:01.083Z] [BOT] ✅ No jobs to archive (all 1020 jobs within 7-day window)
[2026-01-13T22:08:01.091Z] [BOT] 💾 Saved posted_jobs.json: 1020 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:08:04.091Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-13T22:08:04.092Z] [BOT] 📍 [ROUTING] "Senior Product Manager, Commerce" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-13T22:08:04.092Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-13T22:08:04.259Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Commerce @ discord in #📈・JID_fb739488
  ✅ Industry: Senior Product Manager, Commerce @ discord
[2026-01-13T22:08:06.107Z] [BOT] ✅ Created forum post: 🏢 Senior Product Manager, Commerce @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:08:07.608Z] [BOT] 💾 Marked as posted: Senior Product Manager, Commerce @ discord (instance #1)
[2026-01-13T22:08:07.608Z] [BOT] 💾 BEFORE ARCHIVING: 1021 jobs in database
[2026-01-13T22:08:07.609Z] [BOT] ✅ No jobs to archive (all 1021 jobs within 7-day window)
[2026-01-13T22:08:07.618Z] [BOT] 💾 Saved posted_jobs.json: 1021 active jobs
[2026-01-13T22:08:07.618Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:08:10.618Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-13T22:08:10.619Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer in Test" @ ORG_7a38ef37 Corporation
[2026-01-13T22:08:10.619Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:08:10.955Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation in #💻・tech-jobs
  ✅ Industry: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation
[2026-01-13T22:08:12.678Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-13T22:08:14.178Z] [BOT] 💾 Marked as posted: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation (instance #1)
[2026-01-13T22:08:14.179Z] [BOT] 💾 BEFORE ARCHIVING: 1022 jobs in database
[2026-01-13T22:08:14.179Z] [BOT] ✅ No jobs to archive (all 1022 jobs within 7-day window)
[2026-01-13T22:08:14.188Z] [BOT] 💾 Saved posted_jobs.json: 1022 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:08:14.188Z] [BOT] 📍 [ROUTING] "Junior Embedded Software Engineer (cleared)" @ ORG_c910d474 Dynamics Mission Systems
[2026-01-13T22:08:14.189Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:08:15.829Z] [BOT] ✅ Created forum post: 🏢 Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems
[2026-01-13T22:08:17.533Z] [BOT] ✅ Created forum post: 🏢 Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-13T22:08:19.033Z] [BOT] 💾 Marked as posted: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-13T22:08:19.033Z] [BOT] 💾 BEFORE ARCHIVING: 1023 jobs in database
[2026-01-13T22:08:19.034Z] [BOT] ✅ No jobs to archive (all 1023 jobs within 7-day window)
[2026-01-13T22:08:19.043Z] [BOT] 💾 Saved posted_jobs.json: 1023 active jobs
[2026-01-13T22:08:19.043Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T22:08:19.043Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_c4313919 Schwab
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:08:20.050Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c4313919 Schwab in #💻・tech-jobs
[2026-01-13T22:08:20.051Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_c4313919 Schwab
[2026-01-13T22:08:21.755Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_c4313919 Schwab in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:08:23.256Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_c4313919 Schwab (instance #1)
[2026-01-13T22:08:23.256Z] [BOT] 💾 BEFORE ARCHIVING: 1024 jobs in database
[2026-01-13T22:08:23.257Z] [BOT] ✅ No jobs to archive (all 1024 jobs within 7-day window)
[2026-01-13T22:08:23.265Z] [BOT] 💾 Saved posted_jobs.json: 1024 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:08:23.265Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_2c6b11e0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:08:23.525Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_2c6b11e0 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_2c6b11e0
[2026-01-13T22:08:25.236Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I @ ORG_2c6b11e0 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-13T22:08:26.736Z] [BOT] 💾 Marked as posted: Software Engineer I @ ORG_2c6b11e0 (instance #1)
[2026-01-13T22:08:26.737Z] [BOT] 💾 BEFORE ARCHIVING: 1025 jobs in database
[2026-01-13T22:08:26.738Z] [BOT] ✅ No jobs to archive (all 1025 jobs within 7-day window)
[2026-01-13T22:08:26.745Z] [BOT] 💾 Saved posted_jobs.json: 1025 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:08:26.746Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_fa57efea
   Category: TECH (matched: "software")
[2026-01-13T22:08:26.746Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T22:08:27.443Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad @ ORG_fa57efea in #💻・tech-jobs
  ✅ Industry: Software Engineer - New Grad @ ORG_fa57efea
[2026-01-13T22:08:29.103Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - New Grad @ ORG_fa57efea in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-13T22:08:30.604Z] [BOT] 💾 Marked as posted: Software Engineer - New Grad @ ORG_fa57efea (instance #1)
[2026-01-13T22:08:30.604Z] [BOT] 💾 BEFORE ARCHIVING: 1026 jobs in database
[2026-01-13T22:08:30.605Z] [BOT] ✅ No jobs to archive (all 1026 jobs within 7-day window)
[2026-01-13T22:08:30.613Z] [BOT] 💾 Saved posted_jobs.json: 1026 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T22:08:33.614Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T22:08:33.614Z] [BOT] ⏭️  Skipping duplicate: JID_f7ba943f (posted within 7 days)
[2026-01-13T22:08:33.614Z] [BOT] ⏭️  Skipping duplicate: JID_3ade1c4e (posted within 7 days)
[2026-01-13T22:08:33.614Z] [BOT] ⏭️  Skipping duplicate: JID_9dceecac (posted within 7 days)
[2026-01-13T22:08:33.614Z] [BOT] ⏭️  Skipping duplicate: JID_a2a62cb6 (posted within 7 days)
[2026-01-13T22:08:33.615Z] [BOT] ⏭️  Skipping duplicate: JID_b6ce3b8d (posted within 7 days)
[2026-01-13T22:08:33.615Z] [BOT] ⏭️  Skipping duplicate: JID_27a18fcb-_req-2025-14278 (posted within 7 days)
[2026-01-13T22:08:33.615Z] [BOT] ⏭️  Skipping duplicate: JID_35f672d1 (posted within 7 days)
[2026-01-13T22:08:33.615Z] [BOT] ⏭️  Skipping duplicate: JID_da537281 (posted within 7 days)
[2026-01-13T22:08:33.615Z] [BOT] ⏭️  Skipping duplicate: JID_e4a1c099 (posted within 7 days)
[2026-01-13T22:08:33.615Z] [BOT] ⏭️  Skipping duplicate: JID_285e805e (posted within 7 days)
[2026-01-13T22:08:33.739Z] [BOT] ✅ Loaded pending queue: 2723 total (2703 pending, 20 enriched, 0 posted)
[2026-01-13T22:08:33.910Z] [BOT] ✅ Saved pending queue: 2723 total (2703 pending, 10 enriched, 10 posted)
[2026-01-13T22:08:33.910Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T22:08:33.963Z] [BOT] 📂 Loaded 3165 existing routing entries
[2026-01-13T22:08:34.022Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T22:08:34.022Z] [BOT] Total entries: 3175
   Timestamp: 2026-01-13T22:08:34.009Z
[2026-01-13T22:08:34.023Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
[2026-01-13T22:08:34.023Z] [BOT] Skipped: 0
[2026-01-13T22:08:34.023Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-13T22:08:34.023Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
[2026-01-13T22:08:34.023Z] [BOT] 1. #🌉・san-francisco: 5 posts
     2. #💻・tech-jobs: 5 posts
     3. #📣・marketing-jobs: 2 posts
     4. #💰・finance-jobs: 2 posts
     5. #🚌・boston: 2 posts
[2026-01-13T22:08:34.023Z] [BOT] [STATS] Channel stats saved
[2026-01-13T22:08:36.048Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*