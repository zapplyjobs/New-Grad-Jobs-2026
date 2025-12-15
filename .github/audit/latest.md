# Discord Bot Execution Audit
**Timestamp:** 2025-12-15T23:35:54.007Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-15T23:35:29.739Z] ========================================
[2025-12-15T23:35:29.741Z] Discord Bot Execution Log
[2025-12-15T23:35:29.741Z] Environment: GitHub Actions
[2025-12-15T23:35:29.741Z] Node Version: v20.19.6
[2025-12-15T23:35:29.742Z] ========================================
[2025-12-15T23:35:29.742Z] Environment Variables Check:
[2025-12-15T23:35:29.742Z] DISCORD_TOKEN: ✅ Set
[2025-12-15T23:35:29.742Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.742Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-15T23:35:29.742Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-15T23:35:29.742Z] 
Multi-Channel Configuration:
[2025-12-15T23:35:29.742Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.742Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.742Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.743Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.743Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.743Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.743Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.743Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.743Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-15T23:35:29.743Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-15T23:35:29.743Z] 
Data Files Check:
[2025-12-15T23:35:29.744Z] .github/data/new_jobs.json: ✅ Exists (6 items, 86445 bytes)
[2025-12-15T23:35:29.744Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 96001 bytes)
[2025-12-15T23:35:29.745Z] 
========================================
[2025-12-15T23:35:29.745Z] Starting Enhanced Discord Bot...
[2025-12-15T23:35:29.745Z] ========================================
[2025-12-15T23:35:30.307Z] [BOT] ✅ Loaded V2 database: 151 jobs
[2025-12-15T23:35:31.042Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-15T23:35:31.043Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-15T23:35:31.043Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-15T23:35:31.044Z] [BOT] 📦 Exporting 6 jobs to encrypted JSON...
[2025-12-15T23:35:31.151Z] [BOT] ✅ Export complete: Added 0, Skipped 6, Total 154
[2025-12-15T23:35:31.152Z] [BOT] 📬 Found 6 new jobs (0 already posted)...
[2025-12-15T23:35:31.152Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
[2025-12-15T23:35:31.153Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2025-12-15T23:35:31.153Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2025-12-15T23:35:31.153Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-15T23:35:31.153Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-15T23:35:31.155Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-15T23:35:31.155Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - Civil and Environmental Engineering" @ ORG_4ae62bf4 School of Mines
[2025-12-15T23:35:31.156Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T23:35:31.160Z] [BOT ERROR] (node:2656) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-15T23:35:31.477Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Civil and Environmental Engineering @ ORG_4ae62bf4 School of Mines in #💻・tech-jobs
[2025-12-15T23:35:31.477Z] [BOT] ✅ Industry: Postdoctoral Fellow - Civil and Environmental Engineering @ ORG_4ae62bf4 School of Mines
[2025-12-15T23:35:32.979Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow - Civil and Environmental Engineering @ ORG_4ae62bf4 School of Mines (instance #1)
[2025-12-15T23:35:32.980Z] [BOT] 💾 BEFORE ARCHIVING: 152 jobs in database
[2025-12-15T23:35:32.980Z] [BOT] ✅ No jobs to archive (all 152 jobs within 7-day window)
[2025-12-15T23:35:32.985Z] [BOT] 💾 Saved posted_jobs.json: 152 active jobs
[2025-12-15T23:35:32.986Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "EA Sports Academy Software Engineer" @ ORG_a284c4f1 Arts
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T23:35:33.427Z] [BOT] ✅ Created forum post: 🏢 EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts in #💻・tech-jobs
  ✅ Industry: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts
[2025-12-15T23:35:35.227Z] [BOT] ✅ Created forum post: 🏢 EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-15T23:35:36.727Z] [BOT] 💾 Marked as posted: EA Sports Academy Software Engineer @ ORG_a284c4f1 Arts (instance #1)
[2025-12-15T23:35:36.728Z] [BOT] 💾 BEFORE ARCHIVING: 153 jobs in database
✅ No jobs to archive (all 153 jobs within 7-day window)
[2025-12-15T23:35:37.017Z] [BOT] 💾 Saved posted_jobs.json: 153 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T23:35:37.017Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_a7b5855e Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T23:35:37.229Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_a7b5855e Technologies in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_a7b5855e Technologies
[2025-12-15T23:35:38.944Z] [BOT] ✅ Created forum post: 🏢 Junior Software Engineer @ ORG_a7b5855e Technologies in #🤠・austin
[2025-12-15T23:35:38.945Z] [BOT] ✅ Location: 🤠・austin
[2025-12-15T23:35:40.446Z] [BOT] 💾 Marked as posted: Junior Software Engineer @ ORG_a7b5855e Technologies (instance #1)
[2025-12-15T23:35:40.446Z] [BOT] 💾 BEFORE ARCHIVING: 154 jobs in database
[2025-12-15T23:35:40.447Z] [BOT] ✅ No jobs to archive (all 154 jobs within 7-day window)
[2025-12-15T23:35:40.449Z] [BOT] 💾 Saved posted_jobs.json: 154 active jobs
[2025-12-15T23:35:40.449Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer - Windows Servicing and Delivery" @ ORG_c7bac469
[2025-12-15T23:35:40.449Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T23:35:40.719Z] [BOT] ✅ Created forum post: 🟦 Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469
[2025-12-15T23:35:42.843Z] [BOT] ✅ Created forum post: 🟦 Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469 in #🖥️・redmond
  ✅ Location: 🖥️・redmond
[2025-12-15T23:35:44.343Z] [BOT] 💾 Marked as posted: Software Engineer - Windows Servicing and Delivery @ ORG_c7bac469 (instance #1)
[2025-12-15T23:35:44.343Z] [BOT] 💾 BEFORE ARCHIVING: 155 jobs in database
✅ No jobs to archive (all 155 jobs within 7-day window)
[2025-12-15T23:35:44.346Z] [BOT] 💾 Saved posted_jobs.json: 155 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-15T23:35:44.347Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_c7bac469 (instance #1)
[2025-12-15T23:35:44.347Z] [BOT] 💾 BEFORE ARCHIVING: 156 jobs in database
[2025-12-15T23:35:44.347Z] [BOT] ✅ No jobs to archive (all 156 jobs within 7-day window)
[2025-12-15T23:35:44.349Z] [BOT] 💾 Saved posted_jobs.json: 156 active jobs
[2025-12-15T23:35:44.349Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Engineer 2" @ ORG_8b09cf05
[2025-12-15T23:35:44.349Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-15T23:35:44.778Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_8b09cf05 in #💻・tech-jobs
  ✅ Industry: Software Engineer 2 @ ORG_8b09cf05
[2025-12-15T23:35:46.599Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 @ ORG_8b09cf05 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-15T23:35:48.101Z] [BOT] 💾 Marked as posted: Software Engineer 2 @ ORG_8b09cf05 (instance #1)
[2025-12-15T23:35:48.101Z] [BOT] 💾 BEFORE ARCHIVING: 157 jobs in database
✅ No jobs to archive (all 157 jobs within 7-day window)
[2025-12-15T23:35:48.104Z] [BOT] 💾 Saved posted_jobs.json: 157 active jobs
[2025-12-15T23:35:48.104Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-15T23:35:51.105Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-15T23:35:51.105Z] [BOT] ⏭️  Skipping duplicate: JID_dc57e2a8-mines_careers-JID_4757a75d-engineering_jr107955 (posted within 7 days)
[2025-12-15T23:35:51.105Z] [BOT] ⏭️  Skipping duplicate: JID_6e075de9-en_us-JID_ec2660f8 (posted within 7 days)
⏭️  Skipping duplicate: JID_2c156b65 (posted within 7 days)
⏭️  Skipping duplicate: JID_66f5ee0d (posted within 7 days)
⏭️  Skipping duplicate: JID_66a6a2ba (posted within 7 days)
[2025-12-15T23:35:51.106Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2025-12-15T23:35:51.107Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 1 enriched, 5 posted)
[2025-12-15T23:35:51.107Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-15T23:35:51.145Z] [BOT] 📂 Loaded 145 existing routing entries
[2025-12-15T23:35:51.183Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-15T23:35:51.183Z] [BOT] New entries: 5
   Total entries: 150
   Timestamp: 2025-12-15T23:35:51.182Z
[2025-12-15T23:35:53.195Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2656) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*