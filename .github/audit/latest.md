# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T11:04:12.350Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-30T11:03:58.464Z] ========================================
[2025-12-30T11:03:58.466Z] Discord Bot Execution Log
[2025-12-30T11:03:58.466Z] Environment: GitHub Actions
[2025-12-30T11:03:58.466Z] Node Version: v20.19.6
[2025-12-30T11:03:58.466Z] ========================================
[2025-12-30T11:03:58.466Z] Environment Variables Check:
[2025-12-30T11:03:58.466Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T11:03:58.466Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.466Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T11:03:58.466Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T11:03:58.467Z] 
Multi-Channel Configuration:
[2025-12-30T11:03:58.467Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.467Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.467Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.467Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.467Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.467Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.467Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.467Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.467Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T11:03:58.467Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T11:03:58.467Z] 
Data Files Check:
[2025-12-30T11:03:58.468Z] .github/data/new_jobs.json: ✅ Exists (2 items, 12455 bytes)
[2025-12-30T11:03:58.468Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 42175 bytes)
[2025-12-30T11:03:58.468Z] 
========================================
[2025-12-30T11:03:58.468Z] Starting Enhanced Discord Bot...
[2025-12-30T11:03:58.468Z] ========================================
[2025-12-30T11:03:58.981Z] [BOT] ✅ Loaded V2 database: 69 jobs
[2025-12-30T11:03:59.568Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-30T11:03:59.569Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T11:03:59.569Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T11:03:59.569Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-30T11:03:59.615Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2025-12-30T11:03:59.664Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 53
[2025-12-30T11:03:59.665Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-30T11:03:59.666Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-30T11:03:59.666Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-30T11:03:59.666Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-30T11:03:59.667Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-30T11:03:59.670Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2025-12-30T11:03:59.671Z] [BOT] 📍 [ROUTING] "Patient Benefit Specialist" @ ORG_af713a59 Healthcare Services
[2025-12-30T11:03:59.671Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-30T11:03:59.688Z] [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-30T11:03:59.838Z] [BOT] ✅ Created forum post: 🏢 Patient Benefit Specialist @ ORG_af713a59 Healthcare Services in #🩺・healthcare-jobs
[2025-12-30T11:03:59.838Z] [BOT] ✅ Industry: Patient Benefit Specialist @ ORG_af713a59 Healthcare Services
[2025-12-30T11:04:01.666Z] [BOT] ✅ Created forum post: 🏢 Patient Benefit Specialist @ ORG_af713a59 Healthcare Services in #💻・remote-usa
[2025-12-30T11:04:01.666Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-30T11:04:03.167Z] [BOT] 💾 Marked as posted: Patient Benefit Specialist @ ORG_af713a59 Healthcare Services (instance #1)
[2025-12-30T11:04:03.167Z] [BOT] 💾 BEFORE ARCHIVING: 70 jobs in database
[2025-12-30T11:04:03.167Z] [BOT] ✅ No jobs to archive (all 70 jobs within 7-day window)
[2025-12-30T11:04:03.182Z] [BOT] 💾 Saved posted_jobs.json: 70 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-30T11:04:03.182Z] [BOT] 📍 [ROUTING] "CT Tech" @ ORG_92adf360 Health
[2025-12-30T11:04:03.182Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-30T11:04:03.474Z] [BOT] ✅ Created forum post: 🏢 CT Tech @ ORG_92adf360 Health in #🩺・healthcare-jobs
[2025-12-30T11:04:03.474Z] [BOT] ✅ Industry: CT Tech @ ORG_92adf360 Health
[2025-12-30T11:04:05.141Z] [BOT] ✅ Created forum post: 🏢 CT Tech @ ORG_92adf360 Health in #💻・remote-usa
[2025-12-30T11:04:05.141Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-30T11:04:06.642Z] [BOT] 💾 Marked as posted: CT Tech @ ORG_92adf360 Health (instance #1)
[2025-12-30T11:04:06.643Z] [BOT] 💾 BEFORE ARCHIVING: 71 jobs in database
✅ No jobs to archive (all 71 jobs within 7-day window)
[2025-12-30T11:04:06.644Z] [BOT] 💾 Saved posted_jobs.json: 71 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-30T11:04:09.645Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-30T11:04:09.645Z] [BOT] ⏭️  Skipping duplicate: JID_2684e68d (posted within 7 days)
[2025-12-30T11:04:09.645Z] [BOT] ⏭️  Skipping duplicate: JID_47a9f09d (posted within 7 days)
[2025-12-30T11:04:09.646Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-30T11:04:09.646Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2025-12-30T11:04:09.646Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-30T11:04:09.691Z] [BOT] 📂 Loaded 1104 existing routing entries
[2025-12-30T11:04:09.738Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-30T11:04:09.738Z] [BOT] Total entries: 1106
   Timestamp: 2025-12-30T11:04:09.732Z
[2025-12-30T11:04:09.738Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c55b425b.jsonl
[2025-12-30T11:04:09.738Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2025-12-30T11:04:09.739Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 2
   Top channels:
     1. #🩺・healthcare-jobs: 2 posts
     2. #💻・remote-usa: 2 posts
[STATS] Channel stats saved
[2025-12-30T11:04:11.751Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*