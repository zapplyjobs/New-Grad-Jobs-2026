# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T17:04:19.859Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-31T17:04:09.424Z] ========================================
[2025-12-31T17:04:09.426Z] Discord Bot Execution Log
[2025-12-31T17:04:09.426Z] Environment: GitHub Actions
[2025-12-31T17:04:09.426Z] Node Version: v20.19.6
[2025-12-31T17:04:09.426Z] ========================================
[2025-12-31T17:04:09.426Z] Environment Variables Check:
[2025-12-31T17:04:09.426Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T17:04:09.427Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T17:04:09.427Z] 
Multi-Channel Configuration:
[2025-12-31T17:04:09.427Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T17:04:09.427Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T17:04:09.427Z] 
Data Files Check:
[2025-12-31T17:04:09.428Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5570 bytes)
[2025-12-31T17:04:09.428Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 31502 bytes)
[2025-12-31T17:04:09.428Z] 
========================================
[2025-12-31T17:04:09.428Z] Starting Enhanced Discord Bot...
[2025-12-31T17:04:09.428Z] ========================================
[2025-12-31T17:04:09.868Z] [BOT] ✅ Loaded V2 database: 53 jobs
[2025-12-31T17:04:10.390Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T17:04:10.390Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-31T17:04:10.390Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T17:04:10.391Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-31T17:04:10.434Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-31T17:04:10.475Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 33
[2025-12-31T17:04:10.476Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-31T17:04:10.477Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-31T17:04:10.477Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-31T17:04:10.477Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-31T17:04:10.478Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-31T17:04:10.479Z] [BOT] 📍 [ROUTING] "Software Engineer - Geographic Information System" @ ORG_4e8d133e
[2025-12-31T17:04:10.480Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-31T17:04:10.484Z] [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-31T17:04:10.797Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Geographic Information System @ ORG_4e8d133e in #💻・tech-jobs
[2025-12-31T17:04:10.798Z] [BOT] ✅ Industry: Software Engineer - Geographic Information System @ ORG_4e8d133e
[2025-12-31T17:04:12.508Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Geographic Information System @ ORG_4e8d133e in #💻・remote-usa
[2025-12-31T17:04:12.508Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-31T17:04:14.009Z] [BOT] 💾 Marked as posted: Software Engineer - Geographic Information System @ ORG_4e8d133e (instance #1)
[2025-12-31T17:04:14.009Z] [BOT] 💾 BEFORE ARCHIVING: 54 jobs in database
[2025-12-31T17:04:14.009Z] [BOT] ✅ No jobs to archive (all 54 jobs within 7-day window)
[2025-12-31T17:04:14.018Z] [BOT] 💾 Saved posted_jobs.json: 54 active jobs
[2025-12-31T17:04:14.018Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-31T17:04:17.019Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-31T17:04:17.020Z] [BOT] ⏭️  Skipping duplicate: JID_8464d6ab (posted within 7 days)
[2025-12-31T17:04:17.020Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-31T17:04:17.020Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-31T17:04:17.021Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-31T17:04:17.066Z] [BOT] 📂 Loaded 1118 existing routing entries
[2025-12-31T17:04:17.144Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1119
   Timestamp: 2025-12-31T17:04:17.110Z
[2025-12-31T17:04:17.145Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_28858bfe.jsonl
   Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2025-12-31T17:04:17.145Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2025-12-31T17:04:17.145Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-31T17:04:17.146Z] [BOT] [STATS] Channel stats saved
[2025-12-31T17:04:19.153Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*