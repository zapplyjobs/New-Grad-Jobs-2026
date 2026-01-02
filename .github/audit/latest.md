# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T09:05:46.430Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T09:05:33.573Z] ========================================
[2026-01-02T09:05:33.575Z] Discord Bot Execution Log
[2026-01-02T09:05:33.575Z] Environment: GitHub Actions
[2026-01-02T09:05:33.575Z] Node Version: v20.19.6
[2026-01-02T09:05:33.575Z] ========================================
[2026-01-02T09:05:33.575Z] Environment Variables Check:
[2026-01-02T09:05:33.575Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T09:05:33.575Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.575Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T09:05:33.575Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T09:05:33.575Z] 
Multi-Channel Configuration:
[2026-01-02T09:05:33.575Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.576Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.576Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.576Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.576Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.576Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.576Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.576Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.576Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T09:05:33.576Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T09:05:33.576Z] 
Data Files Check:
[2026-01-02T09:05:33.577Z] .github/data/new_jobs.json: ✅ Exists (1 items, 11146 bytes)
[2026-01-02T09:05:33.577Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 66806 bytes)
[2026-01-02T09:05:33.577Z] 
========================================
[2026-01-02T09:05:33.577Z] Starting Enhanced Discord Bot...
[2026-01-02T09:05:33.577Z] ========================================
[2026-01-02T09:05:34.108Z] [BOT] ✅ Loaded V2 database: 111 jobs
[2026-01-02T09:05:34.908Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T09:05:34.908Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T09:05:34.908Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T09:05:34.908Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T09:05:34.953Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T09:05:34.999Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 48
[2026-01-02T09:05:35.000Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T09:05:35.001Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T09:05:35.002Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T09:05:35.004Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-02T09:05:35.005Z] [BOT] 📍 [ROUTING] "Technology Analyst" @ ORG_6cd9e83c
[2026-01-02T09:05:35.005Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-02T09:05:35.012Z] [BOT ERROR] (node:2371) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T09:05:36.818Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst @ ORG_6cd9e83c in #📣・marketing-jobs
  ✅ Industry: Technology Analyst @ ORG_6cd9e83c
[2026-01-02T09:05:38.611Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst @ ORG_6cd9e83c in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-02T09:05:40.113Z] [BOT] 💾 Marked as posted: Technology Analyst @ ORG_6cd9e83c (instance #1)
[2026-01-02T09:05:40.113Z] [BOT] 💾 BEFORE ARCHIVING: 112 jobs in database
[2026-01-02T09:05:40.114Z] [BOT] ✅ No jobs to archive (all 112 jobs within 7-day window)
[2026-01-02T09:05:40.170Z] [BOT] 💾 Saved posted_jobs.json: 112 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T09:05:43.171Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T09:05:43.171Z] [BOT] ⏭️  Skipping duplicate: JID_59d28a6f (posted within 7 days)
[2026-01-02T09:05:43.172Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T09:05:43.172Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-02T09:05:43.172Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T09:05:43.215Z] [BOT] 📂 Loaded 1183 existing routing entries
[2026-01-02T09:05:43.263Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-02T09:05:43.263Z] [BOT] Total entries: 1184
   Timestamp: 2026-01-02T09:05:43.256Z
[2026-01-02T09:05:43.263Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T09:05:43.264Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T09:05:43.264Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-02T09:05:43.264Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-02T09:05:43.264Z] [BOT] [STATS] Channel stats saved
[2026-01-02T09:05:45.276Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2371) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*