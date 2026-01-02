# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T00:44:59.047Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T00:44:20.768Z] ========================================
[2026-01-02T00:44:20.770Z] Discord Bot Execution Log
[2026-01-02T00:44:20.770Z] Environment: GitHub Actions
[2026-01-02T00:44:20.770Z] Node Version: v20.19.6
[2026-01-02T00:44:20.770Z] ========================================
[2026-01-02T00:44:20.770Z] Environment Variables Check:
[2026-01-02T00:44:20.771Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T00:44:20.771Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.771Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T00:44:20.771Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T00:44:20.771Z] 
Multi-Channel Configuration:
[2026-01-02T00:44:20.771Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.771Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.771Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.771Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.771Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.771Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.772Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.772Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.772Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T00:44:20.772Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T00:44:20.772Z] 
Data Files Check:
[2026-01-02T00:44:20.772Z] .github/data/new_jobs.json: ✅ Exists (7 items, 33300 bytes)
[2026-01-02T00:44:20.773Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 56453 bytes)
[2026-01-02T00:44:20.773Z] 
========================================
[2026-01-02T00:44:20.773Z] Starting Enhanced Discord Bot...
[2026-01-02T00:44:20.773Z] ========================================
[2026-01-02T00:44:21.293Z] [BOT] ✅ Loaded V2 database: 94 jobs
[2026-01-02T00:44:21.726Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T00:44:21.726Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T00:44:21.727Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T00:44:21.727Z] [BOT] 📦 Exporting 7 jobs to encrypted JSON...
[2026-01-02T00:44:21.769Z] [BOT] 🧹 Cleaned up 6 jobs older than 7 days
[2026-01-02T00:44:21.818Z] [BOT] ✅ Export complete: Added 6, Skipped 1, Total 44
[2026-01-02T00:44:21.820Z] [BOT] 📬 Found 7 new jobs (0 already posted)...
[2026-01-02T00:44:21.820Z] [BOT] 📋 After blacklist filter: 7 jobs (0 blacklisted)
[2026-01-02T00:44:21.820Z] [BOT] 📋 After data quality filter: 7 jobs (0 invalid)
[2026-01-02T00:44:21.821Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-02T00:44:21.821Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T00:44:21.826Z] [BOT] 📌 Posting 3 jobs to #🩺・healthcare-jobs
[2026-01-02T00:44:21.827Z] [BOT] 📍 [ROUTING] "Therapist - PHP/IOP" @ ORG_6a97f77a Behavioral Health
   Category: HEALTHCARE (matched: "healthcare")
[2026-01-02T00:44:21.827Z] [BOT] Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-02T00:44:21.831Z] [BOT ERROR] (node:2908) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T00:44:22.119Z] [BOT] ✅ Created forum post: 🏢 Therapist - PHP/IOP @ ORG_6a97f77a Behavioral Health in #🩺・healthcare-jobs
  ✅ Industry: Therapist - PHP/IOP @ ORG_6a97f77a Behavioral Health
[2026-01-02T00:44:23.840Z] [BOT] ✅ Created forum post: 🏢 Therapist - PHP/IOP @ ORG_6a97f77a Behavioral Health in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T00:44:25.342Z] [BOT] 💾 Marked as posted: Therapist - PHP/IOP @ ORG_6a97f77a Behavioral Health (instance #1)
[2026-01-02T00:44:25.342Z] [BOT] 💾 BEFORE ARCHIVING: 95 jobs in database
[2026-01-02T00:44:25.342Z] [BOT] ✅ No jobs to archive (all 95 jobs within 7-day window)
[2026-01-02T00:44:25.349Z] [BOT] 💾 Saved posted_jobs.json: 95 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T00:44:25.349Z] [BOT] 📍 [ROUTING] "Research Technician" @ ORG_540647baing
[2026-01-02T00:44:25.349Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-02T00:44:25.764Z] [BOT] ✅ Created forum post: 🏢 Research Technician @ ORG_540647baing in #🩺・healthcare-jobs
[2026-01-02T00:44:25.765Z] [BOT] ✅ Industry: Research Technician @ ORG_540647baing
[2026-01-02T00:44:28.932Z] [BOT] ✅ Created forum post: 🏢 Research Technician @ ORG_540647baing in #🗽・new-york
[2026-01-02T00:44:28.932Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-02T00:44:30.432Z] [BOT] 💾 Marked as posted: Research Technician @ ORG_540647baing (instance #1)
[2026-01-02T00:44:30.433Z] [BOT] 💾 BEFORE ARCHIVING: 96 jobs in database
[2026-01-02T00:44:30.433Z] [BOT] ✅ No jobs to archive (all 96 jobs within 7-day window)
[2026-01-02T00:44:30.435Z] [BOT] 💾 Saved posted_jobs.json: 96 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T00:44:30.435Z] [BOT] 📍 [ROUTING] "Business Systems Analyst - International" @ ORG_7dcce8d0ine
[2026-01-02T00:44:30.436Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-02T00:44:30.571Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - International @ ORG_7dcce8d0ine in #🩺・healthcare-jobs
  ✅ Industry: Business Systems Analyst - International @ ORG_7dcce8d0ine
[2026-01-02T00:44:32.285Z] [BOT] ✅ Created forum post: 🏢 Business Systems Analyst - International @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-02T00:44:33.786Z] [BOT] 💾 Marked as posted: Business Systems Analyst - International @ ORG_7dcce8d0ine (instance #1)
[2026-01-02T00:44:33.786Z] [BOT] 💾 BEFORE ARCHIVING: 97 jobs in database
✅ No jobs to archive (all 97 jobs within 7-day window)
[2026-01-02T00:44:33.788Z] [BOT] 💾 Saved posted_jobs.json: 97 active jobs
[2026-01-02T00:44:33.788Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T00:44:36.788Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-02T00:44:36.789Z] [BOT] 📍 [ROUTING] "Search Quality Rater" @ ORG_066855bc
   Category: TECH (default)
[2026-01-02T00:44:36.789Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-02T00:44:36.959Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_066855bc in #💻・tech-jobs
  ✅ Industry: Search Quality Rater @ ORG_066855bc
[2026-01-02T00:44:38.807Z] [BOT] ✅ Created forum post: 🏢 Search Quality Rater @ ORG_066855bc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T00:44:40.308Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_066855bc (instance #1)
[2026-01-02T00:44:40.309Z] [BOT] 💾 BEFORE ARCHIVING: 98 jobs in database
✅ No jobs to archive (all 98 jobs within 7-day window)
[2026-01-02T00:44:40.311Z] [BOT] 💾 Saved posted_jobs.json: 98 active jobs
[2026-01-02T00:44:40.311Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T00:44:40.311Z] [BOT] 💾 Marked as posted: Search Quality Rater @ ORG_066855bc (instance #1)
[2026-01-02T00:44:40.311Z] [BOT] 💾 BEFORE ARCHIVING: 99 jobs in database
[2026-01-02T00:44:40.311Z] [BOT] ✅ No jobs to archive (all 99 jobs within 7-day window)
[2026-01-02T00:44:40.313Z] [BOT] 💾 Saved posted_jobs.json: 99 active jobs
[2026-01-02T00:44:40.313Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T00:44:43.314Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-02T00:44:43.314Z] [BOT] 📍 [ROUTING] "Associate – Player Personnel" @ ORG_2bc58fcc League Baseball
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-02T00:44:43.671Z] [BOT] ✅ Created forum post: 🏢 Associate – Player Personnel @ ORG_2bc58fcc League Baseball in #📣・marketing-jobs
[2026-01-02T00:44:43.671Z] [BOT] ✅ Industry: Associate – Player Personnel @ ORG_2bc58fcc League Baseball
[2026-01-02T00:44:45.434Z] [BOT] ✅ Created forum post: 🏢 Associate – Player Personnel @ ORG_2bc58fcc League Baseball in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-02T00:44:46.935Z] [BOT] 💾 Marked as posted: Associate – Player Personnel @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-02T00:44:46.935Z] [BOT] 💾 BEFORE ARCHIVING: 100 jobs in database
✅ No jobs to archive (all 100 jobs within 7-day window)
[2026-01-02T00:44:46.937Z] [BOT] 💾 Saved posted_jobs.json: 100 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T00:44:49.938Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-02T00:44:49.938Z] [BOT] 📍 [ROUTING] "Scout Search Quality Rater" @ ORG_066855bc
[2026-01-02T00:44:49.938Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-02T00:44:50.176Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater @ ORG_066855bc in #🤖・ai-jobs
  ✅ Industry: Scout Search Quality Rater @ ORG_066855bc
[2026-01-02T00:44:51.874Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater @ ORG_066855bc in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-02T00:44:53.374Z] [BOT] 💾 Marked as posted: Scout Search Quality Rater @ ORG_066855bc (instance #1)
[2026-01-02T00:44:53.375Z] [BOT] 💾 BEFORE ARCHIVING: 101 jobs in database
✅ No jobs to archive (all 101 jobs within 7-day window)
[2026-01-02T00:44:53.377Z] [BOT] 💾 Saved posted_jobs.json: 101 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T00:44:56.378Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-02T00:44:56.378Z] [BOT] ⏭️  Skipping duplicate: JID_60b963d2-iop_r5836 (posted within 7 days)
[2026-01-02T00:44:56.378Z] [BOT] ⏭️  Skipping duplicate: JID_0940be93-rater_r0007198 (posted within 7 days)
[2026-01-02T00:44:56.378Z] [BOT] ⏭️  Skipping duplicate: JID_567357a6-personnel_r1385 (posted within 7 days)
[2026-01-02T00:44:56.378Z] [BOT] ⏭️  Skipping duplicate: JID_5a465ac4 (posted within 7 days)
[2026-01-02T00:44:56.378Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r259571-1 (posted within 7 days)
⏭️  Skipping duplicate: JID_68c161a9 (posted within 7 days)
[2026-01-02T00:44:56.379Z] [BOT] ✅ Loaded pending queue: 7 total (0 pending, 7 enriched, 0 posted)
[2026-01-02T00:44:56.380Z] [BOT] ✅ Saved pending queue: 7 total (0 pending, 1 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2026-01-02T00:44:56.380Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-02T00:44:56.423Z] [BOT] 📂 Loaded 1167 existing routing entries
[2026-01-02T00:44:56.470Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2026-01-02T00:44:56.470Z] [BOT] Total entries: 1173
   Timestamp: 2026-01-02T00:44:56.464Z
[2026-01-02T00:44:56.471Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T00:44:56.471Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-02T00:44:56.471Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 8
   Top channels:
[2026-01-02T00:44:56.471Z] [BOT] 1. #🩺・healthcare-jobs: 3 posts
     2. #💻・remote-usa: 2 posts
     3. #🗽・new-york: 2 posts
     4. #🌆・chicago: 1 posts
     5. #💻・tech-jobs: 1 posts
[2026-01-02T00:44:56.472Z] [BOT] [STATS] Channel stats saved
[2026-01-02T00:44:58.484Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2908) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*