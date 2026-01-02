# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T08:04:45.923Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T08:04:35.504Z] ========================================
[2026-01-02T08:04:35.506Z] Discord Bot Execution Log
[2026-01-02T08:04:35.506Z] Environment: GitHub Actions
[2026-01-02T08:04:35.506Z] Node Version: v20.19.6
[2026-01-02T08:04:35.506Z] ========================================
[2026-01-02T08:04:35.506Z] Environment Variables Check:
[2026-01-02T08:04:35.506Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T08:04:35.507Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.507Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T08:04:35.507Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T08:04:35.507Z] 
Multi-Channel Configuration:
[2026-01-02T08:04:35.507Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.507Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.507Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.507Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.507Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.507Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.507Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.507Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.508Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T08:04:35.508Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T08:04:35.508Z] 
Data Files Check:
[2026-01-02T08:04:35.508Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6675 bytes)
[2026-01-02T08:04:35.509Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 66162 bytes)
[2026-01-02T08:04:35.509Z] 
========================================
[2026-01-02T08:04:35.509Z] Starting Enhanced Discord Bot...
[2026-01-02T08:04:35.509Z] ========================================
[2026-01-02T08:04:36.014Z] [BOT] ✅ Loaded V2 database: 110 jobs
[2026-01-02T08:04:36.544Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T08:04:36.544Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T08:04:36.544Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T08:04:36.545Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T08:04:36.587Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T08:04:36.632Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 48
[2026-01-02T08:04:36.633Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T08:04:36.633Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T08:04:36.633Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T08:04:36.633Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T08:04:36.634Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T08:04:36.634Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-02T08:04:36.637Z] [BOT] 📍 [ROUTING] "Market Intelligence Analyst" @ ORG_3812004b Capital Group
[2026-01-02T08:04:36.637Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-02T08:04:36.656Z] [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T08:04:37.041Z] [BOT] ✅ Created forum post: 🏢 Market Intelligence Analyst @ ORG_3812004b Capital Group in #📈・JID_fb739488
[2026-01-02T08:04:37.041Z] [BOT] ✅ Industry: Market Intelligence Analyst @ ORG_3812004b Capital Group
[2026-01-02T08:04:38.692Z] [BOT] ✅ Created forum post: 🏢 Market Intelligence Analyst @ ORG_3812004b Capital Group in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-02T08:04:40.192Z] [BOT] 💾 Marked as posted: Market Intelligence Analyst @ ORG_3812004b Capital Group (instance #1)
[2026-01-02T08:04:40.193Z] [BOT] 💾 BEFORE ARCHIVING: 111 jobs in database
[2026-01-02T08:04:40.193Z] [BOT] ✅ No jobs to archive (all 111 jobs within 7-day window)
[2026-01-02T08:04:40.199Z] [BOT] 💾 Saved posted_jobs.json: 111 active jobs
[2026-01-02T08:04:40.199Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T08:04:43.199Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T08:04:43.199Z] [BOT] ⏭️  Skipping duplicate: JID_61cd291d-analyst_hr-19578-1 (posted within 7 days)
[2026-01-02T08:04:43.200Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T08:04:43.200Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-02T08:04:43.200Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T08:04:43.245Z] [BOT] 📂 Loaded 1182 existing routing entries
[2026-01-02T08:04:43.290Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1183
   Timestamp: 2026-01-02T08:04:43.285Z
[2026-01-02T08:04:43.291Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T08:04:43.291Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T08:04:43.291Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-02T08:04:43.291Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-02T08:04:43.291Z] [BOT] 1. #📈・JID_fb739488: 1 posts
     2. #🦢・los-angeles: 1 posts
[2026-01-02T08:04:43.292Z] [BOT] [STATS] Channel stats saved
[2026-01-02T08:04:45.301Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*