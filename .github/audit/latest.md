# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T01:53:31.129Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-30T01:53:19.109Z] ========================================
[2025-12-30T01:53:19.111Z] Discord Bot Execution Log
[2025-12-30T01:53:19.111Z] Environment: GitHub Actions
[2025-12-30T01:53:19.111Z] Node Version: v20.19.6
[2025-12-30T01:53:19.111Z] ========================================
[2025-12-30T01:53:19.111Z] Environment Variables Check:
[2025-12-30T01:53:19.111Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T01:53:19.111Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.111Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T01:53:19.112Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T01:53:19.112Z] 
Multi-Channel Configuration:
[2025-12-30T01:53:19.112Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.112Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.112Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.112Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.112Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.112Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.112Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.112Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.112Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T01:53:19.112Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T01:53:19.113Z] 
Data Files Check:
[2025-12-30T01:53:19.113Z] .github/data/new_jobs.json: ✅ Exists (1 items, 3659 bytes)
[2025-12-30T01:53:19.113Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 46582 bytes)
[2025-12-30T01:53:19.113Z] 
========================================
[2025-12-30T01:53:19.113Z] Starting Enhanced Discord Bot...
[2025-12-30T01:53:19.113Z] ========================================
[2025-12-30T01:53:19.626Z] [BOT] ✅ Loaded V2 database: 75 jobs
[2025-12-30T01:53:21.775Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-30T01:53:21.776Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T01:53:21.776Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T01:53:21.776Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-30T01:53:21.870Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 57
[2025-12-30T01:53:21.871Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-30T01:53:21.871Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-30T01:53:21.871Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-30T01:53:21.872Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-30T01:53:21.872Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-30T01:53:21.873Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-30T01:53:21.874Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_4288ade7 Data
[2025-12-30T01:53:21.874Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-30T01:53:21.878Z] [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-30T01:53:22.117Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_4288ade7 Data in #💻・tech-jobs
[2025-12-30T01:53:22.117Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_4288ade7 Data
[2025-12-30T01:53:23.947Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_4288ade7 Data in #💻・remote-usa
[2025-12-30T01:53:23.947Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-30T01:53:25.447Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_4288ade7 Data (instance #1)
[2025-12-30T01:53:25.447Z] [BOT] 💾 BEFORE ARCHIVING: 76 jobs in database
[2025-12-30T01:53:25.448Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-30T01:53:25.457Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2025-12-30T01:53:25.457Z] [BOT] ✅ Archiving complete: 1 archived, 75 active
[2025-12-30T01:53:25.458Z] [BOT] 💾 Saved posted_jobs.json: 75 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-30T01:53:28.459Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-30T01:53:28.459Z] [BOT] ⏭️  Skipping duplicate: JID_44dfe28d (posted within 7 days)
[2025-12-30T01:53:28.460Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-30T01:53:28.460Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-30T01:53:28.460Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
[2025-12-30T01:53:28.460Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-30T01:53:28.502Z] [BOT] 📂 Loaded 1101 existing routing entries
[2025-12-30T01:53:28.547Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1102
[2025-12-30T01:53:28.548Z] [BOT] Timestamp: 2025-12-30T01:53:28.542Z
[2025-12-30T01:53:28.548Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c55b425b.jsonl
   Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2025-12-30T01:53:28.548Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-30T01:53:28.548Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-30T01:53:28.549Z] [BOT] [STATS] Channel stats saved
[2025-12-30T01:53:30.561Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2460) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*