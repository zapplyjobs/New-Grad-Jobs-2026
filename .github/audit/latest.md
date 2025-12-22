# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T07:37:50.480Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-22T07:37:39.457Z] ========================================
[2025-12-22T07:37:39.459Z] Discord Bot Execution Log
[2025-12-22T07:37:39.459Z] Environment: GitHub Actions
[2025-12-22T07:37:39.459Z] Node Version: v20.19.6
[2025-12-22T07:37:39.459Z] ========================================
[2025-12-22T07:37:39.459Z] Environment Variables Check:
[2025-12-22T07:37:39.459Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T07:37:39.459Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.459Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T07:37:39.460Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T07:37:39.460Z] 
Multi-Channel Configuration:
[2025-12-22T07:37:39.460Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.460Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.460Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.460Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.460Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.460Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.460Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.460Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.460Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T07:37:39.461Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T07:37:39.461Z] 
Data Files Check:
[2025-12-22T07:37:39.461Z] .github/data/new_jobs.json: ✅ Exists (2 items, 5875 bytes)
[2025-12-22T07:37:39.465Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 534637 bytes)
[2025-12-22T07:37:39.465Z] 
========================================
[2025-12-22T07:37:39.465Z] Starting Enhanced Discord Bot...
[2025-12-22T07:37:39.465Z] ========================================
[2025-12-22T07:37:39.994Z] [BOT] ✅ Loaded V2 database: 913 jobs
[2025-12-22T07:37:40.871Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T07:37:40.872Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T07:37:40.872Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T07:37:40.872Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-22T07:37:40.923Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-22T07:37:40.982Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 168
[2025-12-22T07:37:40.984Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-22T07:37:40.984Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T07:37:40.984Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-22T07:37:40.984Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-22T07:37:40.985Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-22T07:37:40.987Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-22T07:37:40.988Z] [BOT] 📍 [ROUTING] "GIS Specialist" @ ORG_1f147d8a
[2025-12-22T07:37:40.989Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-22T07:37:41.005Z] [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T07:37:41.340Z] [BOT] ✅ Created forum post: 🏢 GIS Specialist @ ORG_1f147d8a in #📣・marketing-jobs
  ✅ Industry: GIS Specialist @ ORG_1f147d8a
[2025-12-22T07:37:43.052Z] [BOT] ✅ Created forum post: 🏢 GIS Specialist @ ORG_1f147d8a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-22T07:37:44.552Z] [BOT] 💾 Marked as posted: GIS Specialist @ ORG_1f147d8a (instance #1)
[2025-12-22T07:37:44.553Z] [BOT] 💾 BEFORE ARCHIVING: 914 jobs in database
[2025-12-22T07:37:44.554Z] [BOT] ✅ No jobs to archive (all 914 jobs within 7-day window)
[2025-12-22T07:37:44.566Z] [BOT] 💾 Saved posted_jobs.json: 914 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T07:37:47.568Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-22T07:37:47.568Z] [BOT] ⏭️  Skipping duplicate: JID_5a36305b (posted within 7 days)
[2025-12-22T07:37:47.569Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-22T07:37:47.569Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-22T07:37:47.612Z] [BOT] 📂 Loaded 998 existing routing entries
[2025-12-22T07:37:47.655Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 999
   Timestamp: 2025-12-22T07:37:47.650Z
[2025-12-22T07:37:47.655Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
   Total attempts: 3
[2025-12-22T07:37:47.656Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-22T07:37:47.656Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2025-12-22T07:37:47.656Z] [BOT] Channels used: 2
   Top channels:
     1. #📣・marketing-jobs: 1 posts
[2025-12-22T07:37:47.656Z] [BOT] 2. #💻・remote-usa: 1 posts
[2025-12-22T07:37:47.656Z] [BOT] [STATS] Channel stats saved
[2025-12-22T07:37:49.665Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*