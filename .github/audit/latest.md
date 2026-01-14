# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T03:37:00.345Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T03:36:25.036Z] ========================================
[2026-01-14T03:36:25.038Z] Discord Bot Execution Log
[2026-01-14T03:36:25.038Z] Environment: GitHub Actions
[2026-01-14T03:36:25.038Z] Node Version: v20.19.6
[2026-01-14T03:36:25.038Z] ========================================
[2026-01-14T03:36:25.038Z] Environment Variables Check:
[2026-01-14T03:36:25.038Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T03:36:25.038Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.038Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T03:36:25.039Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T03:36:25.039Z] 
Multi-Channel Configuration:
[2026-01-14T03:36:25.039Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.039Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.039Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.039Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.039Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.039Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.039Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.039Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.039Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T03:36:25.039Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T03:36:25.039Z] 
Data Files Check:
[2026-01-14T03:36:25.041Z] .github/data/new_jobs.json: ✅ Exists (10 items, 162846 bytes)
[2026-01-14T03:36:25.045Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 605550 bytes)
[2026-01-14T03:36:25.045Z] 
========================================
[2026-01-14T03:36:25.045Z] Starting Enhanced Discord Bot...
[2026-01-14T03:36:25.045Z] ========================================
[2026-01-14T03:36:25.562Z] [BOT] ✅ Loaded V2 database: 1142 jobs
[2026-01-14T03:36:26.163Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T03:36:26.163Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-14T03:36:26.164Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T03:36:26.272Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Mid-Market Customer Success Manager at brex
[2026-01-14T03:36:26.274Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T03:36:26.274Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T03:36:26.275Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T03:36:26.275Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-14T03:36:26.275Z] [BOT] (14 grouped as same job with different locations)
📍 6 jobs with multiple locations:
   - Mid-Market Customer Success Manager @ brex: san francisco, california, united states, salt lake city, utah, united states, seattle, washington, united states, new york, new york, united states
   - Outbound Sales Development Representative @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states
   - Product and Regulatory Counsel @ brex: salt lake city, utah, united states, new york, new york, united states, san francisco, california, united states, seattle, washington, united states
   - Sales Manager, Startups @ brex: new york, new york, united states, san francisco, california, united states
   - Senior Accountant @ brex: san francisco, california, united states, new york, new york, united states, salt lake city, utah, united states, seattle, washington, united states
[2026-01-14T03:36:26.276Z] [BOT] - Senior Application Security Engineer @ brex: san francisco, california, united states, new york, new york, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 14 deferred for next run
[2026-01-14T03:36:26.276Z] [BOT] 📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T03:36:26.280Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-14T03:36:26.280Z] [BOT] 📍 [ROUTING] "Mid-Market Customer Success Manager" @ brex
[2026-01-14T03:36:26.280Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T03:36:26.298Z] [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T03:36:26.500Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Customer Success Manager @ brex in #💲・sales-jobs
  ✅ Industry: Mid-Market Customer Success Manager @ brex
[2026-01-14T03:36:28.270Z] [BOT] ✅ Created forum post: 🏢 Mid-Market Customer Success Manager @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T03:36:29.770Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-14T03:36:29.770Z] [BOT] 💾 BEFORE ARCHIVING: 1143 jobs in database
[2026-01-14T03:36:29.772Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T03:36:29.777Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T03:36:29.777Z] [BOT] ✅ Archiving complete: 1 archived, 1142 active
[2026-01-14T03:36:29.786Z] [BOT] 💾 Saved posted_jobs.json: 1142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:29.786Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-14T03:36:29.786Z] [BOT] 💾 BEFORE ARCHIVING: 1143 jobs in database
[2026-01-14T03:36:29.787Z] [BOT] ✅ No jobs to archive (all 1143 jobs within 7-day window)
[2026-01-14T03:36:29.794Z] [BOT] 💾 Saved posted_jobs.json: 1143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:29.794Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-14T03:36:29.794Z] [BOT] 💾 BEFORE ARCHIVING: 1144 jobs in database
[2026-01-14T03:36:29.795Z] [BOT] ✅ No jobs to archive (all 1144 jobs within 7-day window)
[2026-01-14T03:36:29.802Z] [BOT] 💾 Saved posted_jobs.json: 1144 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:29.802Z] [BOT] 💾 Marked as posted: Mid-Market Customer Success Manager @ brex (instance #1)
[2026-01-14T03:36:29.802Z] [BOT] 💾 BEFORE ARCHIVING: 1145 jobs in database
[2026-01-14T03:36:29.803Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-14T03:36:29.810Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:29.811Z] [BOT] 📍 [ROUTING] "Outbound Sales Development Representative" @ brex
   Category: SALES (matched: "sales")
[2026-01-14T03:36:29.811Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T03:36:30.101Z] [BOT] ✅ Created forum post: 🏢 Outbound Sales Development Representative @ brex in #💲・sales-jobs
[2026-01-14T03:36:30.101Z] [BOT] ✅ Industry: Outbound Sales Development Representative @ brex
[2026-01-14T03:36:31.830Z] [BOT] ✅ Created forum post: 🏢 Outbound Sales Development Representative @ brex in #💻・remote-usa
[2026-01-14T03:36:31.830Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T03:36:33.331Z] [BOT] 💾 Marked as posted: Outbound Sales Development Representative @ brex (instance #1)
[2026-01-14T03:36:33.331Z] [BOT] 💾 BEFORE ARCHIVING: 1146 jobs in database
[2026-01-14T03:36:33.332Z] [BOT] ✅ No jobs to archive (all 1146 jobs within 7-day window)
[2026-01-14T03:36:33.339Z] [BOT] 💾 Saved posted_jobs.json: 1146 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:33.340Z] [BOT] 💾 Marked as posted: Outbound Sales Development Representative @ brex (instance #1)
💾 BEFORE ARCHIVING: 1147 jobs in database
[2026-01-14T03:36:33.340Z] [BOT] ✅ No jobs to archive (all 1147 jobs within 7-day window)
[2026-01-14T03:36:33.347Z] [BOT] 💾 Saved posted_jobs.json: 1147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:33.347Z] [BOT] 💾 Marked as posted: Outbound Sales Development Representative @ brex (instance #1)
💾 BEFORE ARCHIVING: 1148 jobs in database
[2026-01-14T03:36:33.348Z] [BOT] ✅ No jobs to archive (all 1148 jobs within 7-day window)
[2026-01-14T03:36:33.356Z] [BOT] 💾 Saved posted_jobs.json: 1148 active jobs
[2026-01-14T03:36:33.356Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:33.357Z] [BOT] 📍 [ROUTING] "Product and Regulatory Counsel" @ brex
[2026-01-14T03:36:33.357Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T03:36:33.631Z] [BOT] ✅ Created forum post: 🏢 Product and Regulatory Counsel @ brex in #💲・sales-jobs
  ✅ Industry: Product and Regulatory Counsel @ brex
[2026-01-14T03:36:35.399Z] [BOT] ✅ Created forum post: 🏢 Product and Regulatory Counsel @ brex in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T03:36:36.900Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
[2026-01-14T03:36:36.900Z] [BOT] 💾 BEFORE ARCHIVING: 1149 jobs in database
[2026-01-14T03:36:36.901Z] [BOT] ✅ No jobs to archive (all 1149 jobs within 7-day window)
[2026-01-14T03:36:36.910Z] [BOT] 💾 Saved posted_jobs.json: 1149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:36.910Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
[2026-01-14T03:36:36.910Z] [BOT] 💾 BEFORE ARCHIVING: 1150 jobs in database
[2026-01-14T03:36:36.911Z] [BOT] ✅ No jobs to archive (all 1150 jobs within 7-day window)
[2026-01-14T03:36:36.919Z] [BOT] 💾 Saved posted_jobs.json: 1150 active jobs
[2026-01-14T03:36:36.919Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:36.919Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
[2026-01-14T03:36:36.919Z] [BOT] 💾 BEFORE ARCHIVING: 1151 jobs in database
[2026-01-14T03:36:36.920Z] [BOT] ✅ No jobs to archive (all 1151 jobs within 7-day window)
[2026-01-14T03:36:36.927Z] [BOT] 💾 Saved posted_jobs.json: 1151 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:36.927Z] [BOT] 💾 Marked as posted: Product and Regulatory Counsel @ brex (instance #1)
💾 BEFORE ARCHIVING: 1152 jobs in database
[2026-01-14T03:36:36.928Z] [BOT] ✅ No jobs to archive (all 1152 jobs within 7-day window)
[2026-01-14T03:36:36.935Z] [BOT] 💾 Saved posted_jobs.json: 1152 active jobs
[2026-01-14T03:36:36.935Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:36.935Z] [BOT] 📍 [ROUTING] "Sales Manager, Startups" @ brex
[2026-01-14T03:36:36.936Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T03:36:37.257Z] [BOT] ✅ Created forum post: 🏢 Sales Manager, Startups @ brex in #💲・sales-jobs
  ✅ Industry: Sales Manager, Startups @ brex
[2026-01-14T03:36:39.009Z] [BOT] ✅ Created forum post: 🏢 Sales Manager, Startups @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T03:36:40.510Z] [BOT] 💾 Marked as posted: Sales Manager, Startups @ brex (instance #1)
[2026-01-14T03:36:40.511Z] [BOT] 💾 BEFORE ARCHIVING: 1153 jobs in database
[2026-01-14T03:36:40.512Z] [BOT] ✅ No jobs to archive (all 1153 jobs within 7-day window)
[2026-01-14T03:36:40.520Z] [BOT] 💾 Saved posted_jobs.json: 1153 active jobs
[2026-01-14T03:36:40.520Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:40.520Z] [BOT] 💾 Marked as posted: Sales Manager, Startups @ brex (instance #1)
💾 BEFORE ARCHIVING: 1154 jobs in database
[2026-01-14T03:36:40.521Z] [BOT] ✅ No jobs to archive (all 1154 jobs within 7-day window)
[2026-01-14T03:36:40.529Z] [BOT] 💾 Saved posted_jobs.json: 1154 active jobs
[2026-01-14T03:36:40.529Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:43.529Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-14T03:36:43.530Z] [BOT] 📍 [ROUTING] "Senior Accountant" @ brex
[2026-01-14T03:36:43.530Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-14T03:36:43.883Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant @ brex in #💰・finance-jobs
[2026-01-14T03:36:43.883Z] [BOT] ✅ Industry: Senior Accountant @ brex
[2026-01-14T03:36:45.586Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant @ brex in #🌉・san-francisco
[2026-01-14T03:36:45.586Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T03:36:47.087Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
[2026-01-14T03:36:47.087Z] [BOT] 💾 BEFORE ARCHIVING: 1155 jobs in database
[2026-01-14T03:36:47.088Z] [BOT] ✅ No jobs to archive (all 1155 jobs within 7-day window)
[2026-01-14T03:36:47.095Z] [BOT] 💾 Saved posted_jobs.json: 1155 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:47.095Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
[2026-01-14T03:36:47.096Z] [BOT] 💾 BEFORE ARCHIVING: 1156 jobs in database
[2026-01-14T03:36:47.096Z] [BOT] ✅ No jobs to archive (all 1156 jobs within 7-day window)
[2026-01-14T03:36:47.104Z] [BOT] 💾 Saved posted_jobs.json: 1156 active jobs
[2026-01-14T03:36:47.104Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Accountant @ brex (instance #1)
[2026-01-14T03:36:47.104Z] [BOT] 💾 BEFORE ARCHIVING: 1157 jobs in database
[2026-01-14T03:36:47.105Z] [BOT] ✅ No jobs to archive (all 1157 jobs within 7-day window)
[2026-01-14T03:36:47.112Z] [BOT] 💾 Saved posted_jobs.json: 1157 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:47.112Z] [BOT] 💾 Marked as posted: Senior Accountant @ brex (instance #1)
💾 BEFORE ARCHIVING: 1158 jobs in database
[2026-01-14T03:36:47.113Z] [BOT] ✅ No jobs to archive (all 1158 jobs within 7-day window)
[2026-01-14T03:36:47.120Z] [BOT] 💾 Saved posted_jobs.json: 1158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:50.121Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-14T03:36:50.121Z] [BOT] 📍 [ROUTING] "Senior Application Security Engineer" @ brex
[2026-01-14T03:36:50.121Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T03:36:50.354Z] [BOT] ✅ Created forum post: 🏢 Senior Application Security Engineer @ brex in #💻・tech-jobs
[2026-01-14T03:36:50.354Z] [BOT] ✅ Industry: Senior Application Security Engineer @ brex
[2026-01-14T03:36:52.101Z] [BOT] ✅ Created forum post: 🏢 Senior Application Security Engineer @ brex in #🌉・san-francisco
[2026-01-14T03:36:52.102Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T03:36:53.603Z] [BOT] 💾 Marked as posted: Senior Application Security Engineer @ brex (instance #1)
[2026-01-14T03:36:53.603Z] [BOT] 💾 BEFORE ARCHIVING: 1159 jobs in database
[2026-01-14T03:36:53.604Z] [BOT] ✅ No jobs to archive (all 1159 jobs within 7-day window)
[2026-01-14T03:36:53.611Z] [BOT] 💾 Saved posted_jobs.json: 1159 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:53.611Z] [BOT] 💾 Marked as posted: Senior Application Security Engineer @ brex (instance #1)
[2026-01-14T03:36:53.611Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-14T03:36:53.612Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-14T03:36:53.621Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-14T03:36:53.621Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Application Security Engineer @ brex (instance #1)
[2026-01-14T03:36:53.621Z] [BOT] 💾 BEFORE ARCHIVING: 1161 jobs in database
[2026-01-14T03:36:53.622Z] [BOT] ✅ No jobs to archive (all 1161 jobs within 7-day window)
[2026-01-14T03:36:53.630Z] [BOT] 💾 Saved posted_jobs.json: 1161 active jobs
[2026-01-14T03:36:53.630Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T03:36:56.631Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-14T03:36:56.631Z] [BOT] ⏭️  Skipping duplicate: JID_ee0215f5 (posted within 7 days)
[2026-01-14T03:36:56.631Z] [BOT] ⏭️  Skipping duplicate: JID_e717def7 (posted within 7 days)
[2026-01-14T03:36:56.631Z] [BOT] ⏭️  Skipping duplicate: JID_2d09099b (posted within 7 days)
[2026-01-14T03:36:56.631Z] [BOT] ⏭️  Skipping duplicate: JID_b9303855 (posted within 7 days)
⏭️  Skipping duplicate: JID_dce3753c (posted within 7 days)
[2026-01-14T03:36:56.632Z] [BOT] ⏭️  Skipping duplicate: JID_3835fba6 (posted within 7 days)
[2026-01-14T03:36:56.747Z] [BOT] ✅ Loaded pending queue: 2733 total (2713 pending, 20 enriched, 0 posted)
[2026-01-14T03:36:56.918Z] [BOT] ✅ Saved pending queue: 2733 total (2713 pending, 14 enriched, 6 posted)
[2026-01-14T03:36:56.918Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T03:36:56.971Z] [BOT] 📂 Loaded 3292 existing routing entries
[2026-01-14T03:36:57.030Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 3298
   Timestamp: 2026-01-14T03:36:57.016Z
[2026-01-14T03:36:57.031Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T03:36:57.031Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-14T03:36:57.031Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T03:36:57.031Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 6
   Top channels:
     1. #💲・sales-jobs: 4 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・remote-usa: 1 posts
     4. #🗽・new-york: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-14T03:36:57.031Z] [BOT] [STATS] Channel stats saved
[2026-01-14T03:36:59.058Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*