# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T01:13:29.493Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T01:13:21.025Z] ========================================
[2026-01-02T01:13:21.027Z] Discord Bot Execution Log
[2026-01-02T01:13:21.027Z] Environment: GitHub Actions
[2026-01-02T01:13:21.027Z] Node Version: v20.19.6
[2026-01-02T01:13:21.027Z] ========================================
[2026-01-02T01:13:21.027Z] Environment Variables Check:
[2026-01-02T01:13:21.027Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T01:13:21.027Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.027Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T01:13:21.027Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T01:13:21.028Z] 
Multi-Channel Configuration:
[2026-01-02T01:13:21.028Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.028Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.028Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.028Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.028Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.028Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.028Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.028Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.028Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T01:13:21.028Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T01:13:21.028Z] 
Data Files Check:
[2026-01-02T01:13:21.029Z] .github/data/new_jobs.json: ✅ Exists (1 items, 766 bytes)
[2026-01-02T01:13:21.029Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 60829 bytes)
[2026-01-02T01:13:21.029Z] 
========================================
[2026-01-02T01:13:21.029Z] Starting Enhanced Discord Bot...
[2026-01-02T01:13:21.029Z] ========================================
[2026-01-02T01:13:21.553Z] [BOT] ✅ Loaded V2 database: 101 jobs
[2026-01-02T01:13:21.945Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T01:13:21.946Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T01:13:21.946Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T01:13:21.946Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T01:13:21.989Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T01:13:22.038Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 39
[2026-01-02T01:13:22.039Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T01:13:22.039Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T01:13:22.039Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T01:13:22.040Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T01:13:22.040Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T01:13:22.041Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-02T01:13:22.043Z] [BOT] 📍 [ROUTING] "Estimating & Planning Engineer 1 - Future Opening" @ ORG_e9a14aad
[2026-01-02T01:13:22.043Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-02T01:13:22.060Z] [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T01:13:22.223Z] [BOT] ✅ Created forum post: 🏢 Estimating & Planning Engineer 1 - Future Opening @ ORG_e9a14aad in #💻・tech-jobs
  ✅ Industry: Estimating & Planning Engineer 1 - Future Opening @ ORG_e9a14aad
[2026-01-02T01:13:23.726Z] [BOT] 💾 Marked as posted: Estimating & Planning Engineer 1 - Future Opening @ ORG_e9a14aad (instance #1)
[2026-01-02T01:13:23.726Z] [BOT] 💾 BEFORE ARCHIVING: 102 jobs in database
[2026-01-02T01:13:23.726Z] [BOT] ✅ No jobs to archive (all 102 jobs within 7-day window)
[2026-01-02T01:13:23.747Z] [BOT] 💾 Saved posted_jobs.json: 102 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T01:13:26.748Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T01:13:26.748Z] [BOT] ⏭️  Skipping duplicate: JID_0a3edc88 (posted within 7 days)
[2026-01-02T01:13:26.748Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T01:13:26.749Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T01:13:26.793Z] [BOT] 📂 Loaded 1173 existing routing entries
[2026-01-02T01:13:26.839Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-02T01:13:26.839Z] [BOT] New entries: 1
   Total entries: 1174
   Timestamp: 2026-01-02T01:13:26.833Z
[2026-01-02T01:13:26.840Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T01:13:26.840Z] [BOT] Total attempts: 1
   Successful: 1
   Failed: 0
   Skipped: 0
[2026-01-02T01:13:26.840Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-02T01:13:26.840Z] [BOT] 1. #💻・tech-jobs: 1 posts
[2026-01-02T01:13:26.840Z] [BOT] [STATS] Channel stats saved
[2026-01-02T01:13:28.855Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2427) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*