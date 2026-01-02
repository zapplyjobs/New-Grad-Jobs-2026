# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T18:43:40.088Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T18:43:29.120Z] ========================================
[2026-01-02T18:43:29.121Z] Discord Bot Execution Log
[2026-01-02T18:43:29.121Z] Environment: GitHub Actions
[2026-01-02T18:43:29.122Z] Node Version: v20.19.6
[2026-01-02T18:43:29.122Z] ========================================
[2026-01-02T18:43:29.122Z] Environment Variables Check:
[2026-01-02T18:43:29.122Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T18:43:29.122Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.122Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T18:43:29.122Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T18:43:29.122Z] 
Multi-Channel Configuration:
[2026-01-02T18:43:29.122Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.122Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.123Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.123Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.123Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.123Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.123Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.123Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.123Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T18:43:29.123Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T18:43:29.123Z] 
Data Files Check:
[2026-01-02T18:43:29.123Z] .github/data/new_jobs.json: ✅ Exists (1 items, 7285 bytes)
[2026-01-02T18:43:29.124Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 80465 bytes)
[2026-01-02T18:43:29.124Z] 
========================================
[2026-01-02T18:43:29.124Z] Starting Enhanced Discord Bot...
[2026-01-02T18:43:29.124Z] ========================================
[2026-01-02T18:43:29.637Z] [BOT] ✅ Loaded V2 database: 132 jobs
[2026-01-02T18:43:30.335Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T18:43:30.335Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T18:43:30.336Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T18:43:30.336Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T18:43:30.378Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T18:43:30.424Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 47
[2026-01-02T18:43:30.425Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T18:43:30.425Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T18:43:30.425Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T18:43:30.426Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T18:43:30.426Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-02T18:43:30.428Z] [BOT] 📍 [ROUTING] "Assistant or Associate Research Professor" @ ORG_478e100e University
[2026-01-02T18:43:30.429Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-02T18:43:30.446Z] [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T18:43:30.936Z] [BOT] ✅ Created forum post: 🏢 Assistant or Associate Research Professor @ ORG_478e100e University in #🤖・ai-jobs
[2026-01-02T18:43:30.937Z] [BOT] ✅ Industry: Assistant or Associate Research Professor @ ORG_478e100e University
[2026-01-02T18:43:32.929Z] [BOT] ✅ Created forum post: 🏢 Assistant or Associate Research Professor @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T18:43:34.429Z] [BOT] 💾 Marked as posted: Assistant or Associate Research Professor @ ORG_478e100e University (instance #1)
[2026-01-02T18:43:34.430Z] [BOT] 💾 BEFORE ARCHIVING: 133 jobs in database
[2026-01-02T18:43:34.430Z] [BOT] ✅ No jobs to archive (all 133 jobs within 7-day window)
[2026-01-02T18:43:34.436Z] [BOT] 💾 Saved posted_jobs.json: 133 active jobs
[2026-01-02T18:43:34.436Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T18:43:37.437Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T18:43:37.437Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_48d156cc-institute_req_0000073124-2 (posted within 7 days)
[2026-01-02T18:43:37.437Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T18:43:37.438Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-02T18:43:37.438Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T18:43:37.481Z] [BOT] 📂 Loaded 1208 existing routing entries
[2026-01-02T18:43:37.526Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1209
   Timestamp: 2026-01-02T18:43:37.520Z
[2026-01-02T18:43:37.526Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T18:43:37.526Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T18:43:37.527Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-02T18:43:37.527Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-02T18:43:37.527Z] [BOT] 2. #💻・remote-usa: 1 posts
[2026-01-02T18:43:37.527Z] [BOT] [STATS] Channel stats saved
[2026-01-02T18:43:39.536Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*