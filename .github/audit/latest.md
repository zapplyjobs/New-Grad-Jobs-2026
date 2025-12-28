# Discord Bot Execution Audit
**Timestamp:** 2025-12-28T03:05:13.083Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-28T03:05:02.437Z] ========================================
[2025-12-28T03:05:02.439Z] Discord Bot Execution Log
[2025-12-28T03:05:02.439Z] Environment: GitHub Actions
[2025-12-28T03:05:02.439Z] Node Version: v20.19.6
[2025-12-28T03:05:02.439Z] ========================================
[2025-12-28T03:05:02.439Z] Environment Variables Check:
[2025-12-28T03:05:02.439Z] DISCORD_TOKEN: ✅ Set
[2025-12-28T03:05:02.439Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.439Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-28T03:05:02.439Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-28T03:05:02.439Z] 
Multi-Channel Configuration:
[2025-12-28T03:05:02.439Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.440Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.440Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.440Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.440Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.440Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.440Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.440Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.440Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-28T03:05:02.440Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-28T03:05:02.440Z] 
Data Files Check:
[2025-12-28T03:05:02.441Z] .github/data/new_jobs.json: ✅ Exists (2 items, 4002 bytes)
[2025-12-28T03:05:02.442Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 231736 bytes)
[2025-12-28T03:05:02.442Z] 
========================================
[2025-12-28T03:05:02.442Z] Starting Enhanced Discord Bot...
[2025-12-28T03:05:02.442Z] ========================================
[2025-12-28T03:05:02.971Z] [BOT] ✅ Loaded V2 database: 394 jobs
[2025-12-28T03:05:03.518Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-28T03:05:03.519Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-28T03:05:03.519Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-28T03:05:03.519Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-28T03:05:03.566Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2025-12-28T03:05:03.617Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 74
[2025-12-28T03:05:03.619Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-28T03:05:03.619Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-28T03:05:03.619Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-28T03:05:03.620Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-28T03:05:03.620Z] [BOT] 🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-28T03:05:03.621Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-28T03:05:03.621Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-28T03:05:03.623Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-28T03:05:03.624Z] [BOT] 📍 [ROUTING] "Pharmacy Clerk" @ ORG_af713a59 Healthcare Services
[2025-12-28T03:05:03.624Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-28T03:05:03.641Z] [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-28T03:05:03.853Z] [BOT] ✅ Created forum post: 🏢 Pharmacy Clerk @ ORG_af713a59 Healthcare Services in #🩺・healthcare-jobs
  ✅ Industry: Pharmacy Clerk @ ORG_af713a59 Healthcare Services
[2025-12-28T03:05:05.891Z] [BOT] ✅ Created forum post: 🏢 Pharmacy Clerk @ ORG_af713a59 Healthcare Services in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-28T03:05:07.392Z] [BOT] 💾 Marked as posted: Pharmacy Clerk @ ORG_af713a59 Healthcare Services (instance #1)
[2025-12-28T03:05:07.392Z] [BOT] 💾 BEFORE ARCHIVING: 395 jobs in database
[2025-12-28T03:05:07.393Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-28T03:05:07.406Z] [BOT] 📦 Archived 189 jobs to 2025-12.json (189 total in archive)
[2025-12-28T03:05:07.406Z] [BOT] ✅ Archiving complete: 189 archived, 206 active
[2025-12-28T03:05:07.409Z] [BOT] 💾 Saved posted_jobs.json: 206 active jobs
[2025-12-28T03:05:07.409Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-28T03:05:10.410Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-28T03:05:10.410Z] [BOT] ⏭️  Skipping duplicate: JID_e29bf8cc (posted within 7 days)
[2025-12-28T03:05:10.410Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-28T03:05:10.411Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-28T03:05:10.411Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-28T03:05:10.453Z] [BOT] 📂 Loaded 1085 existing routing entries
[2025-12-28T03:05:10.498Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-28T03:05:10.498Z] [BOT] Total entries: 1086
   Timestamp: 2025-12-28T03:05:10.493Z
[2025-12-28T03:05:10.499Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a1bf548c.jsonl
[2025-12-28T03:05:10.499Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-28T03:05:10.499Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-28T03:05:10.499Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🩺・healthcare-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-28T03:05:10.499Z] [BOT] [STATS] Channel stats saved
[2025-12-28T03:05:12.513Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*