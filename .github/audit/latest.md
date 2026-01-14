# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T02:52:10.325Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T02:51:28.847Z] ========================================
[2026-01-14T02:51:28.849Z] Discord Bot Execution Log
[2026-01-14T02:51:28.850Z] Environment: GitHub Actions
[2026-01-14T02:51:28.850Z] Node Version: v20.19.6
[2026-01-14T02:51:28.850Z] ========================================
[2026-01-14T02:51:28.850Z] Environment Variables Check:
[2026-01-14T02:51:28.850Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T02:51:28.850Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.850Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T02:51:28.850Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T02:51:28.850Z] 
Multi-Channel Configuration:
[2026-01-14T02:51:28.850Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.850Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.851Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.851Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.851Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.851Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.851Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.851Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.851Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T02:51:28.851Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T02:51:28.851Z] 
Data Files Check:
[2026-01-14T02:51:28.852Z] .github/data/new_jobs.json: ✅ Exists (10 items, 158465 bytes)
[2026-01-14T02:51:28.857Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 596583 bytes)
[2026-01-14T02:51:28.857Z] 
========================================
[2026-01-14T02:51:28.857Z] Starting Enhanced Discord Bot...
[2026-01-14T02:51:28.857Z] ========================================
[2026-01-14T02:51:29.407Z] [BOT] ✅ Loaded V2 database: 1122 jobs
[2026-01-14T02:51:29.882Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T02:51:29.883Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T02:51:29.883Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T02:51:29.991Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-14T02:51:29.992Z] [BOT] [BOT] 🔍 Sample enriched job: Director, Mid Market Sales at brex
[2026-01-14T02:51:29.995Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T02:51:29.995Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T02:51:29.995Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T02:51:29.996Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-14T02:51:29.996Z] [BOT] (12 grouped as same job with different locations)
📍 7 jobs with multiple locations:
   - Director, Mid Market Sales @ brex: salt lake city, utah, united states, san francisco, california, united states
[2026-01-14T02:51:29.997Z] [BOT] - Engineering Manager, Security Engineering  @ brex: san francisco, california, united states, new york, new york, united states
   - Enterprise Account Executive @ brex: new york, new york, united states, san francisco, california, united states
   - Enterprise Implementation Consultant, Financial Saas @ brex: new york, new york, united states, salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states
   - Implementation Consultant II @ brex: seattle, washington, united states, san francisco, california, united states, salt lake city, utah, united states, new york, new york, united states
   - Manager, Recruiting Coordination and Programs @ brex: san francisco, california, united states, new york, new york, united states
   - Manager, Sales Development @ brex: san francisco, california, united states, seattle, washington, united states, salt lake city, utah, united states
⏸️ Limiting to 10 jobs this run, 12 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T02:51:30.002Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-14T02:51:30.002Z] [BOT] 📍 [ROUTING] "Director, Mid Market Sales" @ brex
[2026-01-14T02:51:30.002Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:51:30.020Z] [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T02:51:30.196Z] [BOT] ✅ Created forum post: 🏢 Director, Mid Market Sales @ brex in #💲・sales-jobs
[2026-01-14T02:51:30.196Z] [BOT] ✅ Industry: Director, Mid Market Sales @ brex
[2026-01-14T02:51:32.028Z] [BOT] ✅ Created forum post: 🏢 Director, Mid Market Sales @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T02:51:33.528Z] [BOT] 💾 Marked as posted: Director, Mid Market Sales @ brex (instance #1)
[2026-01-14T02:51:33.529Z] [BOT] 💾 BEFORE ARCHIVING: 1123 jobs in database
[2026-01-14T02:51:33.530Z] [BOT] ✅ No jobs to archive (all 1123 jobs within 7-day window)
[2026-01-14T02:51:33.542Z] [BOT] 💾 Saved posted_jobs.json: 1123 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:33.542Z] [BOT] 💾 Marked as posted: Director, Mid Market Sales @ brex (instance #1)
[2026-01-14T02:51:33.542Z] [BOT] 💾 BEFORE ARCHIVING: 1124 jobs in database
[2026-01-14T02:51:33.543Z] [BOT] ✅ No jobs to archive (all 1124 jobs within 7-day window)
[2026-01-14T02:51:33.553Z] [BOT] 💾 Saved posted_jobs.json: 1124 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:33.553Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ brex
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:51:33.910Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ brex in #💲・sales-jobs
[2026-01-14T02:51:33.911Z] [BOT] ✅ Industry: Enterprise Account Executive @ brex
[2026-01-14T02:51:35.573Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T02:51:37.074Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ brex (instance #1)
[2026-01-14T02:51:37.074Z] [BOT] 💾 BEFORE ARCHIVING: 1125 jobs in database
[2026-01-14T02:51:37.075Z] [BOT] ✅ No jobs to archive (all 1125 jobs within 7-day window)
[2026-01-14T02:51:37.083Z] [BOT] 💾 Saved posted_jobs.json: 1125 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:37.083Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ brex (instance #1)
[2026-01-14T02:51:37.083Z] [BOT] 💾 BEFORE ARCHIVING: 1126 jobs in database
[2026-01-14T02:51:37.084Z] [BOT] ✅ No jobs to archive (all 1126 jobs within 7-day window)
[2026-01-14T02:51:37.091Z] [BOT] 💾 Saved posted_jobs.json: 1126 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:37.091Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant, Financial Saas" @ brex
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:51:37.363Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant, Financial Saas @ brex in #💲・sales-jobs
[2026-01-14T02:51:37.363Z] [BOT] ✅ Industry: Enterprise Implementation Consultant, Financial Saas @ brex
[2026-01-14T02:51:39.189Z] [BOT] ✅ Created forum post: 🏢 Enterprise Implementation Consultant, Financial Saas @ brex in #🗽・new-york
[2026-01-14T02:51:39.189Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T02:51:40.689Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-14T02:51:40.689Z] [BOT] 💾 BEFORE ARCHIVING: 1127 jobs in database
[2026-01-14T02:51:40.690Z] [BOT] ✅ No jobs to archive (all 1127 jobs within 7-day window)
[2026-01-14T02:51:40.704Z] [BOT] 💾 Saved posted_jobs.json: 1127 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:40.704Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-14T02:51:40.704Z] [BOT] 💾 BEFORE ARCHIVING: 1128 jobs in database
[2026-01-14T02:51:40.705Z] [BOT] ✅ No jobs to archive (all 1128 jobs within 7-day window)
[2026-01-14T02:51:40.714Z] [BOT] 💾 Saved posted_jobs.json: 1128 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:40.714Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-14T02:51:40.714Z] [BOT] 💾 BEFORE ARCHIVING: 1129 jobs in database
[2026-01-14T02:51:40.715Z] [BOT] ✅ No jobs to archive (all 1129 jobs within 7-day window)
[2026-01-14T02:51:40.722Z] [BOT] 💾 Saved posted_jobs.json: 1129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:40.723Z] [BOT] 💾 Marked as posted: Enterprise Implementation Consultant, Financial Saas @ brex (instance #1)
[2026-01-14T02:51:40.723Z] [BOT] 💾 BEFORE ARCHIVING: 1130 jobs in database
[2026-01-14T02:51:40.724Z] [BOT] ✅ No jobs to archive (all 1130 jobs within 7-day window)
[2026-01-14T02:51:40.732Z] [BOT] 💾 Saved posted_jobs.json: 1130 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:40.732Z] [BOT] 📍 [ROUTING] "Implementation Consultant II" @ brex
[2026-01-14T02:51:40.732Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:51:40.877Z] [BOT] ✅ Created forum post: 🏢 Implementation Consultant II @ brex in #💲・sales-jobs
[2026-01-14T02:51:40.877Z] [BOT] ✅ Industry: Implementation Consultant II @ brex
[2026-01-14T02:51:42.584Z] [BOT] ✅ Created forum post: 🏢 Implementation Consultant II @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-14T02:51:44.085Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-14T02:51:44.085Z] [BOT] 💾 BEFORE ARCHIVING: 1131 jobs in database
[2026-01-14T02:51:44.086Z] [BOT] ✅ No jobs to archive (all 1131 jobs within 7-day window)
[2026-01-14T02:51:44.094Z] [BOT] 💾 Saved posted_jobs.json: 1131 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:44.095Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-14T02:51:44.095Z] [BOT] 💾 BEFORE ARCHIVING: 1132 jobs in database
[2026-01-14T02:51:44.095Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-14T02:51:44.103Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:44.103Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-14T02:51:44.104Z] [BOT] 💾 BEFORE ARCHIVING: 1133 jobs in database
[2026-01-14T02:51:44.104Z] [BOT] ✅ No jobs to archive (all 1133 jobs within 7-day window)
[2026-01-14T02:51:44.112Z] [BOT] 💾 Saved posted_jobs.json: 1133 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:44.112Z] [BOT] 💾 Marked as posted: Implementation Consultant II @ brex (instance #1)
[2026-01-14T02:51:44.112Z] [BOT] 💾 BEFORE ARCHIVING: 1134 jobs in database
[2026-01-14T02:51:44.113Z] [BOT] ✅ No jobs to archive (all 1134 jobs within 7-day window)
[2026-01-14T02:51:44.121Z] [BOT] 💾 Saved posted_jobs.json: 1134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:44.121Z] [BOT] 📍 [ROUTING] "Manager, Sales Development" @ brex
[2026-01-14T02:51:44.121Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T02:51:44.318Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development @ brex in #💲・sales-jobs
[2026-01-14T02:51:44.318Z] [BOT] ✅ Industry: Manager, Sales Development @ brex
[2026-01-14T02:51:45.990Z] [BOT] ✅ Created forum post: 🏢 Manager, Sales Development @ brex in #🌉・san-francisco
[2026-01-14T02:51:45.990Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T02:51:47.491Z] [BOT] 💾 Marked as posted: Manager, Sales Development @ brex (instance #1)
[2026-01-14T02:51:47.491Z] [BOT] 💾 BEFORE ARCHIVING: 1135 jobs in database
[2026-01-14T02:51:47.492Z] [BOT] ✅ No jobs to archive (all 1135 jobs within 7-day window)
[2026-01-14T02:51:47.499Z] [BOT] 💾 Saved posted_jobs.json: 1135 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:47.499Z] [BOT] 💾 Marked as posted: Manager, Sales Development @ brex (instance #1)
[2026-01-14T02:51:47.500Z] [BOT] 💾 BEFORE ARCHIVING: 1136 jobs in database
[2026-01-14T02:51:47.501Z] [BOT] ✅ No jobs to archive (all 1136 jobs within 7-day window)
[2026-01-14T02:51:47.508Z] [BOT] 💾 Saved posted_jobs.json: 1136 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:47.508Z] [BOT] 💾 Marked as posted: Manager, Sales Development @ brex (instance #1)
[2026-01-14T02:51:47.508Z] [BOT] 💾 BEFORE ARCHIVING: 1137 jobs in database
[2026-01-14T02:51:47.509Z] [BOT] ✅ No jobs to archive (all 1137 jobs within 7-day window)
[2026-01-14T02:51:47.517Z] [BOT] 💾 Saved posted_jobs.json: 1137 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:50.518Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-14T02:51:50.519Z] [BOT] 📍 [ROUTING] "Engineering Manager, Security Engineering " @ brex
[2026-01-14T02:51:50.519Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T02:51:50.920Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Security Engineering  @ brex in #💻・tech-jobs
[2026-01-14T02:51:50.920Z] [BOT] ✅ Industry: Engineering Manager, Security Engineering  @ brex
[2026-01-14T02:51:52.679Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Security Engineering  @ brex in #🌉・san-francisco
[2026-01-14T02:51:52.680Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T02:51:54.181Z] [BOT] 💾 Marked as posted: Engineering Manager, Security Engineering  @ brex (instance #1)
[2026-01-14T02:51:54.181Z] [BOT] 💾 BEFORE ARCHIVING: 1138 jobs in database
[2026-01-14T02:51:54.182Z] [BOT] ✅ No jobs to archive (all 1138 jobs within 7-day window)
[2026-01-14T02:51:54.189Z] [BOT] 💾 Saved posted_jobs.json: 1138 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:54.190Z] [BOT] 💾 Marked as posted: Engineering Manager, Security Engineering  @ brex (instance #1)
💾 BEFORE ARCHIVING: 1139 jobs in database
[2026-01-14T02:51:54.190Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-14T02:51:54.198Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:51:57.198Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2026-01-14T02:51:57.199Z] [BOT] 📍 [ROUTING] "Head of Internal Communications" @ brex
   Category: MARKETING (matched: "growth")
[2026-01-14T02:51:57.199Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T02:51:57.392Z] [BOT] ✅ Created forum post: 🏢 Head of Internal Communications @ brex in #📣・marketing-jobs
  ✅ Industry: Head of Internal Communications @ brex
[2026-01-14T02:51:59.148Z] [BOT] ✅ Created forum post: 🏢 Head of Internal Communications @ brex in #🌉・san-francisco
[2026-01-14T02:51:59.148Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T02:52:00.649Z] [BOT] 💾 Marked as posted: Head of Internal Communications @ brex (instance #1)
[2026-01-14T02:52:00.649Z] [BOT] 💾 BEFORE ARCHIVING: 1140 jobs in database
[2026-01-14T02:52:00.650Z] [BOT] ✅ No jobs to archive (all 1140 jobs within 7-day window)
[2026-01-14T02:52:00.659Z] [BOT] 💾 Saved posted_jobs.json: 1140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:52:00.660Z] [BOT] 📍 [ROUTING] "Manager, Recruiting Coordination and Programs" @ brex
[2026-01-14T02:52:00.660Z] [BOT] Category: MARKETING (matched: "growth")
[2026-01-14T02:52:00.660Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T02:52:00.962Z] [BOT] ✅ Created forum post: 🏢 Manager, Recruiting Coordination and Programs @ brex in #📣・marketing-jobs
[2026-01-14T02:52:00.963Z] [BOT] ✅ Industry: Manager, Recruiting Coordination and Programs @ brex
[2026-01-14T02:52:02.666Z] [BOT] ✅ Created forum post: 🏢 Manager, Recruiting Coordination and Programs @ brex in #🌉・san-francisco
[2026-01-14T02:52:02.666Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T02:52:04.166Z] [BOT] 💾 Marked as posted: Manager, Recruiting Coordination and Programs @ brex (instance #1)
[2026-01-14T02:52:04.166Z] [BOT] 💾 BEFORE ARCHIVING: 1141 jobs in database
[2026-01-14T02:52:04.167Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-14T02:52:04.178Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
[2026-01-14T02:52:04.178Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T02:52:04.178Z] [BOT] 💾 Marked as posted: Manager, Recruiting Coordination and Programs @ brex (instance #1)
[2026-01-14T02:52:04.179Z] [BOT] 💾 BEFORE ARCHIVING: 1142 jobs in database
[2026-01-14T02:52:04.179Z] [BOT] ✅ No jobs to archive (all 1142 jobs within 7-day window)
[2026-01-14T02:52:04.188Z] [BOT] 💾 Saved posted_jobs.json: 1142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T02:52:07.189Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-14T02:52:07.189Z] [BOT] ⏭️  Skipping duplicate: JID_3c4789a6 (posted within 7 days)
[2026-01-14T02:52:07.190Z] [BOT] ⏭️  Skipping duplicate: JID_863d50e3 (posted within 7 days)
[2026-01-14T02:52:07.190Z] [BOT] ⏭️  Skipping duplicate: JID_628e7251 (posted within 7 days)
[2026-01-14T02:52:07.190Z] [BOT] ⏭️  Skipping duplicate: JID_7a0083e6 (posted within 7 days)
⏭️  Skipping duplicate: JID_7f254d06 (posted within 7 days)
[2026-01-14T02:52:07.190Z] [BOT] ⏭️  Skipping duplicate: JID_37b4ae12 (posted within 7 days)
[2026-01-14T02:52:07.190Z] [BOT] ⏭️  Skipping duplicate: JID_4921d491 (posted within 7 days)
[2026-01-14T02:52:07.190Z] [BOT] ⏭️  Skipping duplicate: JID_2b5a5b0e (posted within 7 days)
[2026-01-14T02:52:07.314Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[2026-01-14T02:52:07.478Z] [BOT] ✅ Saved pending queue: 2731 total (2711 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-14T02:52:07.478Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T02:52:07.536Z] [BOT] 📂 Loaded 3284 existing routing entries
[2026-01-14T02:52:07.599Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 3292
   Timestamp: 2026-01-14T02:52:07.583Z
[2026-01-14T02:52:07.599Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-14T02:52:07.600Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 6
   Top channels:
[2026-01-14T02:52:07.600Z] [BOT] 1. #💲・sales-jobs: 5 posts
     2. #🌉・san-francisco: 5 posts
     3. #🗽・new-york: 2 posts
[2026-01-14T02:52:07.600Z] [BOT] 4. #📣・marketing-jobs: 2 posts
     5. #🌧️・seattle: 1 posts
[2026-01-14T02:52:07.600Z] [BOT] [STATS] Channel stats saved
[2026-01-14T02:52:09.626Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*