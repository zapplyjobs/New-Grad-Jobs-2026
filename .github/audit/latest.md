# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T00:43:48.533Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-31T00:43:34.301Z] ========================================
[2025-12-31T00:43:34.303Z] Discord Bot Execution Log
[2025-12-31T00:43:34.303Z] Environment: GitHub Actions
[2025-12-31T00:43:34.303Z] Node Version: v20.19.6
[2025-12-31T00:43:34.303Z] ========================================
[2025-12-31T00:43:34.303Z] Environment Variables Check:
[2025-12-31T00:43:34.303Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T00:43:34.303Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.304Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T00:43:34.304Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T00:43:34.304Z] 
Multi-Channel Configuration:
[2025-12-31T00:43:34.304Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.304Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.304Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.304Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.304Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.304Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.304Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.304Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.305Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T00:43:34.305Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T00:43:34.305Z] 
Data Files Check:
[2025-12-31T00:43:34.305Z] .github/data/new_jobs.json: ✅ Exists (2 items, 8361 bytes)
[2025-12-31T00:43:34.305Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 42217 bytes)
[2025-12-31T00:43:34.306Z] 
========================================
[2025-12-31T00:43:34.306Z] Starting Enhanced Discord Bot...
[2025-12-31T00:43:34.306Z] ========================================
[2025-12-31T00:43:34.843Z] [BOT] ✅ Loaded V2 database: 69 jobs
[2025-12-31T00:43:35.479Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T00:43:35.479Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-31T00:43:35.479Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T00:43:35.480Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-31T00:43:35.523Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-31T00:43:35.571Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 40
[2025-12-31T00:43:35.572Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-31T00:43:35.572Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-31T00:43:35.572Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2025-12-31T00:43:35.573Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2025-12-31T00:43:35.573Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-31T00:43:35.574Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-31T00:43:35.575Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_138f8217 Imaging Corporation
[2025-12-31T00:43:35.576Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-31T00:43:35.582Z] [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-31T00:43:36.025Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_138f8217 Imaging Corporation in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_138f8217 Imaging Corporation
[2025-12-31T00:43:37.708Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_138f8217 Imaging Corporation in #💻・remote-usa
[2025-12-31T00:43:37.709Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-31T00:43:39.209Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_138f8217 Imaging Corporation (instance #1)
[2025-12-31T00:43:39.209Z] [BOT] 💾 BEFORE ARCHIVING: 70 jobs in database
[2025-12-31T00:43:39.210Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-31T00:43:39.215Z] [BOT] 📦 Archived 10 jobs to 2025-12.json (10 total in archive)
[2025-12-31T00:43:39.215Z] [BOT] ✅ Archiving complete: 10 archived, 60 active
[2025-12-31T00:43:39.216Z] [BOT] 💾 Saved posted_jobs.json: 60 active jobs
[2025-12-31T00:43:39.216Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-31T00:43:39.217Z] [BOT] 📍 [ROUTING] "Application Software Engineer" @ ORG_afd623b1
[2025-12-31T00:43:39.217Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-31T00:43:39.401Z] [BOT] ✅ Created forum post: 🚀 Application Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
[2025-12-31T00:43:39.402Z] [BOT] ✅ Industry: Application Software Engineer @ ORG_afd623b1
[2025-12-31T00:43:41.177Z] [BOT] ✅ Created forum post: 🚀 Application Software Engineer @ ORG_afd623b1 in #🤠・austin
[2025-12-31T00:43:41.177Z] [BOT] ✅ Location: 🤠・austin
[2025-12-31T00:43:42.679Z] [BOT] 💾 Marked as posted: Application Software Engineer @ ORG_afd623b1 (instance #1)
[2025-12-31T00:43:42.679Z] [BOT] 💾 BEFORE ARCHIVING: 61 jobs in database
✅ No jobs to archive (all 61 jobs within 7-day window)
[2025-12-31T00:43:42.680Z] [BOT] 💾 Saved posted_jobs.json: 61 active jobs
[2025-12-31T00:43:42.680Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-31T00:43:45.682Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-31T00:43:45.682Z] [BOT] ⏭️  Skipping duplicate: JID_58aececc-external_career_site-JID_bd318322-engineer_r0005510 (posted within 7 days)
[2025-12-31T00:43:45.682Z] [BOT] ⏭️  Skipping duplicate: JID_88e70eae (posted within 7 days)
[2025-12-31T00:43:45.683Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-31T00:43:45.683Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2025-12-31T00:43:45.683Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-31T00:43:45.727Z] [BOT] 📂 Loaded 1112 existing routing entries
[2025-12-31T00:43:45.775Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-31T00:43:45.775Z] [BOT] Total entries: 1114
   Timestamp: 2025-12-31T00:43:45.770Z
[2025-12-31T00:43:45.776Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_28858bfe.jsonl
   Total attempts: 4
[2025-12-31T00:43:45.776Z] [BOT] Successful: 4
   Failed: 0
   Skipped: 0
[2025-12-31T00:43:45.776Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-31T00:43:45.776Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2025-12-31T00:43:45.776Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #💻・remote-usa: 1 posts
     3. #🤠・austin: 1 posts
[2025-12-31T00:43:45.776Z] [BOT] [STATS] Channel stats saved
[2025-12-31T00:43:47.789Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*