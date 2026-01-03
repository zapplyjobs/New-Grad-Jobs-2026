# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T10:51:34.614Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T10:50:54.090Z] ========================================
[2026-01-03T10:50:54.092Z] Discord Bot Execution Log
[2026-01-03T10:50:54.092Z] Environment: GitHub Actions
[2026-01-03T10:50:54.092Z] Node Version: v20.19.6
[2026-01-03T10:50:54.092Z] ========================================
[2026-01-03T10:50:54.092Z] Environment Variables Check:
[2026-01-03T10:50:54.092Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T10:50:54.092Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.092Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T10:50:54.092Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T10:50:54.092Z] 
Multi-Channel Configuration:
[2026-01-03T10:50:54.093Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.093Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.093Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.093Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.093Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.093Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.093Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.093Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.093Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T10:50:54.093Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T10:50:54.093Z] 
Data Files Check:
[2026-01-03T10:50:54.094Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156016 bytes)
[2026-01-03T10:50:54.096Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 210848 bytes)
[2026-01-03T10:50:54.097Z] 
========================================
[2026-01-03T10:50:54.097Z] Starting Enhanced Discord Bot...
[2026-01-03T10:50:54.097Z] ========================================
[2026-01-03T10:50:54.611Z] [BOT] ✅ Loaded V2 database: 393 jobs
[2026-01-03T10:50:55.558Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T10:50:55.558Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T10:50:55.558Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T10:50:55.559Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T10:50:55.629Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T10:50:55.723Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T10:50:55.725Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T10:50:55.725Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T10:50:55.726Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T10:50:55.726Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-03T10:50:55.727Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Enterprise Customer Success Manager - Denver @ datadog: denver, colorado, usa, boston, massachusetts, usa; new york, new york, usa
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T10:50:55.731Z] [BOT] 📌 Posting 5 jobs to #💲・sales-jobs
[2026-01-03T10:50:55.731Z] [BOT] 📍 [ROUTING] "Director, Technical Product Partnerships" @ datadog
[2026-01-03T10:50:55.732Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:50:55.736Z] [BOT ERROR] (node:2348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T10:50:56.026Z] [BOT] ✅ Created forum post: 🏢 Director, Technical Product Partnerships @ datadog in #💲・sales-jobs
[2026-01-03T10:50:56.026Z] [BOT] ✅ Industry: Director, Technical Product Partnerships @ datadog
[2026-01-03T10:50:57.691Z] [BOT] ✅ Created forum post: 🏢 Director, Technical Product Partnerships @ datadog in #🗽・new-york
[2026-01-03T10:50:57.691Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T10:50:59.191Z] [BOT] 💾 Marked as posted: Director, Technical Product Partnerships @ datadog (instance #1)
[2026-01-03T10:50:59.191Z] [BOT] 💾 BEFORE ARCHIVING: 394 jobs in database
[2026-01-03T10:50:59.192Z] [BOT] ✅ No jobs to archive (all 394 jobs within 7-day window)
[2026-01-03T10:50:59.199Z] [BOT] 💾 Saved posted_jobs.json: 394 active jobs
[2026-01-03T10:50:59.199Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:50:59.200Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ datadog
[2026-01-03T10:50:59.200Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:50:59.616Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ datadog in #💲・sales-jobs
[2026-01-03T10:50:59.616Z] [BOT] ✅ Industry: Enterprise Account Executive @ datadog
[2026-01-03T10:51:01.422Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive @ datadog in #🗽・new-york
[2026-01-03T10:51:01.423Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T10:51:02.923Z] [BOT] 💾 Marked as posted: Enterprise Account Executive @ datadog (instance #1)
[2026-01-03T10:51:02.923Z] [BOT] 💾 BEFORE ARCHIVING: 395 jobs in database
[2026-01-03T10:51:02.924Z] [BOT] ✅ No jobs to archive (all 395 jobs within 7-day window)
[2026-01-03T10:51:02.927Z] [BOT] 💾 Saved posted_jobs.json: 395 active jobs
[2026-01-03T10:51:02.927Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:51:02.928Z] [BOT] 📍 [ROUTING] "Enterprise Customer Success Manager - Denver" @ datadog
[2026-01-03T10:51:02.928Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:51:03.158Z] [BOT] ✅ Created forum post: 🏢 Enterprise Customer Success Manager - Denver @ datadog in #💲・sales-jobs
[2026-01-03T10:51:03.158Z] [BOT] ✅ Industry: Enterprise Customer Success Manager - Denver @ datadog
[2026-01-03T10:51:04.660Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager - Denver @ datadog (instance #1)
[2026-01-03T10:51:04.660Z] [BOT] 💾 BEFORE ARCHIVING: 396 jobs in database
[2026-01-03T10:51:04.660Z] [BOT] ✅ No jobs to archive (all 396 jobs within 7-day window)
[2026-01-03T10:51:04.664Z] [BOT] 💾 Saved posted_jobs.json: 396 active jobs
[2026-01-03T10:51:04.664Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:51:04.664Z] [BOT] 💾 Marked as posted: Enterprise Customer Success Manager - East Coast @ datadog (instance #1)
[2026-01-03T10:51:04.664Z] [BOT] 💾 BEFORE ARCHIVING: 397 jobs in database
[2026-01-03T10:51:04.665Z] [BOT] ✅ No jobs to archive (all 397 jobs within 7-day window)
[2026-01-03T10:51:04.667Z] [BOT] 💾 Saved posted_jobs.json: 397 active jobs
[2026-01-03T10:51:04.668Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:51:04.668Z] [BOT] 📍 [ROUTING] "Enterprise Sales Engineer" @ datadog
[2026-01-03T10:51:04.668Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:51:04.989Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Engineer @ datadog in #💲・sales-jobs
[2026-01-03T10:51:04.989Z] [BOT] ✅ Industry: Enterprise Sales Engineer @ datadog
[2026-01-03T10:51:06.728Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Engineer @ datadog in #💻・remote-usa
[2026-01-03T10:51:06.729Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-03T10:51:08.230Z] [BOT] 💾 Marked as posted: Enterprise Sales Engineer @ datadog (instance #1)
[2026-01-03T10:51:08.230Z] [BOT] 💾 BEFORE ARCHIVING: 398 jobs in database
[2026-01-03T10:51:08.230Z] [BOT] ✅ No jobs to archive (all 398 jobs within 7-day window)
[2026-01-03T10:51:08.234Z] [BOT] 💾 Saved posted_jobs.json: 398 active jobs
[2026-01-03T10:51:08.234Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:51:08.234Z] [BOT] 💾 Marked as posted: Enterprise Sales Engineer - South Africa @ datadog (instance #1)
💾 BEFORE ARCHIVING: 399 jobs in database
[2026-01-03T10:51:08.235Z] [BOT] ✅ No jobs to archive (all 399 jobs within 7-day window)
[2026-01-03T10:51:08.238Z] [BOT] 💾 Saved posted_jobs.json: 399 active jobs
[2026-01-03T10:51:08.238Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:51:08.238Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
[2026-01-03T10:51:08.238Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T10:51:08.671Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #💲・sales-jobs
  ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-03T10:51:10.400Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-03T10:51:11.901Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-03T10:51:11.901Z] [BOT] 💾 BEFORE ARCHIVING: 400 jobs in database
[2026-01-03T10:51:11.901Z] [BOT] ✅ No jobs to archive (all 400 jobs within 7-day window)
[2026-01-03T10:51:11.906Z] [BOT] 💾 Saved posted_jobs.json: 400 active jobs
[2026-01-03T10:51:11.906Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T10:51:14.907Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T10:51:14.907Z] [BOT] 📍 [ROUTING] "Employee Relation Specialist - Workplace Investigations" @ datadog
[2026-01-03T10:51:14.908Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T10:51:15.209Z] [BOT] ✅ Created forum post: 🏢 Employee Relation Specialist - Workplace Investigations @ datadog in #📣・marketing-jobs
  ✅ Industry: Employee Relation Specialist - Workplace Investigations @ datadog
[2026-01-03T10:51:16.986Z] [BOT] ✅ Created forum post: 🏢 Employee Relation Specialist - Workplace Investigations @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T10:51:18.486Z] [BOT] 💾 Marked as posted: Employee Relation Specialist - Workplace Investigations @ datadog (instance #1)
[2026-01-03T10:51:18.487Z] [BOT] 💾 BEFORE ARCHIVING: 401 jobs in database
[2026-01-03T10:51:18.487Z] [BOT] ✅ No jobs to archive (all 401 jobs within 7-day window)
[2026-01-03T10:51:18.491Z] [BOT] 💾 Saved posted_jobs.json: 401 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T10:51:21.491Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-03T10:51:21.492Z] [BOT] 📍 [ROUTING] "Engineering Manager, Application Security Platform" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T10:51:21.492Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T10:51:21.699Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Application Security Platform @ datadog in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Application Security Platform @ datadog
[2026-01-03T10:51:23.367Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Application Security Platform @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T10:51:24.869Z] [BOT] 💾 Marked as posted: Engineering Manager, Application Security Platform @ datadog (instance #1)
[2026-01-03T10:51:24.869Z] [BOT] 💾 BEFORE ARCHIVING: 402 jobs in database
[2026-01-03T10:51:24.870Z] [BOT] ✅ No jobs to archive (all 402 jobs within 7-day window)
[2026-01-03T10:51:24.873Z] [BOT] 💾 Saved posted_jobs.json: 402 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T10:51:24.874Z] [BOT] 📍 [ROUTING] "Engineering Manager I - Cyber Threat Intelligence" @ datadog
[2026-01-03T10:51:24.874Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T10:51:25.026Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager I - Cyber Threat Intelligence @ datadog in #💻・tech-jobs
  ✅ Industry: Engineering Manager I - Cyber Threat Intelligence @ datadog
[2026-01-03T10:51:26.720Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager I - Cyber Threat Intelligence @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T10:51:28.221Z] [BOT] 💾 Marked as posted: Engineering Manager I - Cyber Threat Intelligence @ datadog (instance #1)
[2026-01-03T10:51:28.221Z] [BOT] 💾 BEFORE ARCHIVING: 403 jobs in database
[2026-01-03T10:51:28.222Z] [BOT] ✅ No jobs to archive (all 403 jobs within 7-day window)
[2026-01-03T10:51:28.226Z] [BOT] 💾 Saved posted_jobs.json: 403 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T10:51:31.227Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-03T10:51:31.227Z] [BOT] ⏭️  Skipping duplicate: JID_5d6f1e71 (posted within 7 days)
[2026-01-03T10:51:31.227Z] [BOT] ⏭️  Skipping duplicate: JID_5c406f64 (posted within 7 days)
[2026-01-03T10:51:31.227Z] [BOT] ⏭️  Skipping duplicate: JID_54d6023b (posted within 7 days)
⏭️  Skipping duplicate: JID_7e8e9e95 (posted within 7 days)
[2026-01-03T10:51:31.228Z] [BOT] ⏭️  Skipping duplicate: JID_ef2e4acb (posted within 7 days)
[2026-01-03T10:51:31.228Z] [BOT] ⏭️  Skipping duplicate: JID_6da9444c (posted within 7 days)
[2026-01-03T10:51:31.228Z] [BOT] ⏭️  Skipping duplicate: JID_20b447ad (posted within 7 days)
[2026-01-03T10:51:31.228Z] [BOT] ⏭️  Skipping duplicate: JID_85c16ac2 (posted within 7 days)
[2026-01-03T10:51:31.302Z] [BOT] ✅ Loaded pending queue: 895 total (875 pending, 20 enriched, 0 posted)
[2026-01-03T10:51:31.404Z] [BOT] ✅ Saved pending queue: 895 total (875 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T10:51:31.449Z] [BOT] 📂 Loaded 1395 existing routing entries
[2026-01-03T10:51:31.496Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 1403
   Timestamp: 2026-01-03T10:51:31.489Z
[2026-01-03T10:51:31.496Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T10:51:31.496Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-03T10:51:31.497Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-03T10:51:31.497Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-03T10:51:31.497Z] [BOT] 1. #💲・sales-jobs: 5 posts
     2. #🗽・new-york: 5 posts
     3. #💻・remote-usa: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-03T10:51:31.497Z] [BOT] [STATS] Channel stats saved
[2026-01-03T10:51:33.513Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*