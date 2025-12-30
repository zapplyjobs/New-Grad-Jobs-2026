# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T11:35:26.910Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-30T11:35:16.256Z] ========================================
[2025-12-30T11:35:16.258Z] Discord Bot Execution Log
[2025-12-30T11:35:16.258Z] Environment: GitHub Actions
[2025-12-30T11:35:16.258Z] Node Version: v20.19.6
[2025-12-30T11:35:16.258Z] ========================================
[2025-12-30T11:35:16.258Z] Environment Variables Check:
[2025-12-30T11:35:16.258Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T11:35:16.258Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.258Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T11:35:16.258Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T11:35:16.258Z] 
Multi-Channel Configuration:
[2025-12-30T11:35:16.259Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.259Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.259Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.259Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.259Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.259Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.259Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.259Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.259Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T11:35:16.259Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T11:35:16.259Z] 
Data Files Check:
[2025-12-30T11:35:16.260Z] .github/data/new_jobs.json: ✅ Exists (1 items, 10475 bytes)
[2025-12-30T11:35:16.260Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 43209 bytes)
[2025-12-30T11:35:16.260Z] 
========================================
[2025-12-30T11:35:16.260Z] Starting Enhanced Discord Bot...
[2025-12-30T11:35:16.260Z] ========================================
[2025-12-30T11:35:16.775Z] [BOT] ✅ Loaded V2 database: 71 jobs
[2025-12-30T11:35:17.259Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-30T11:35:17.259Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T11:35:17.260Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T11:35:17.260Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-30T11:35:17.306Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-30T11:35:17.357Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 52
[2025-12-30T11:35:17.358Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-30T11:35:17.358Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-30T11:35:17.358Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-30T11:35:17.359Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-30T11:35:17.359Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-30T11:35:17.360Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-30T11:35:17.361Z] [BOT] 📍 [ROUTING] "Data Scientist - People Analytics" @ ORG_28d3793c
[2025-12-30T11:35:17.361Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-30T11:35:17.366Z] [BOT ERROR] (node:2375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-30T11:35:17.587Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - People Analytics @ ORG_28d3793c in #📈・JID_fb739488
[2025-12-30T11:35:17.587Z] [BOT] ✅ Industry: Data Scientist - People Analytics @ ORG_28d3793c
[2025-12-30T11:35:19.566Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - People Analytics @ ORG_28d3793c in #💻・remote-usa
[2025-12-30T11:35:19.566Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-30T11:35:21.067Z] [BOT] 💾 Marked as posted: Data Scientist - People Analytics @ ORG_28d3793c (instance #1)
[2025-12-30T11:35:21.067Z] [BOT] 💾 BEFORE ARCHIVING: 72 jobs in database
[2025-12-30T11:35:21.067Z] [BOT] ✅ No jobs to archive (all 72 jobs within 7-day window)
[2025-12-30T11:35:21.081Z] [BOT] 💾 Saved posted_jobs.json: 72 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-30T11:35:24.082Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-30T11:35:24.082Z] [BOT] ⏭️  Skipping duplicate: JID_ae841d15 (posted within 7 days)
[2025-12-30T11:35:24.083Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-30T11:35:24.083Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-30T11:35:24.084Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-30T11:35:24.129Z] [BOT] 📂 Loaded 1106 existing routing entries
[2025-12-30T11:35:24.173Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-30T11:35:24.173Z] [BOT] Total entries: 1107
   Timestamp: 2025-12-30T11:35:24.168Z
[2025-12-30T11:35:24.173Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c55b425b.jsonl
[2025-12-30T11:35:24.174Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2025-12-30T11:35:24.174Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-30T11:35:24.174Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2025-12-30T11:35:24.174Z] [BOT] 1. #📈・JID_fb739488: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-30T11:35:24.174Z] [BOT] [STATS] Channel stats saved
[2025-12-30T11:35:26.184Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*