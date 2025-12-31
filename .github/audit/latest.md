# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T11:34:57.101Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-31T11:34:46.768Z] ========================================
[2025-12-31T11:34:46.769Z] Discord Bot Execution Log
[2025-12-31T11:34:46.770Z] Environment: GitHub Actions
[2025-12-31T11:34:46.770Z] Node Version: v20.19.6
[2025-12-31T11:34:46.770Z] ========================================
[2025-12-31T11:34:46.770Z] Environment Variables Check:
[2025-12-31T11:34:46.770Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T11:34:46.770Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.770Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T11:34:46.770Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T11:34:46.770Z] 
Multi-Channel Configuration:
[2025-12-31T11:34:46.770Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.770Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.771Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.771Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.771Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.771Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.771Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.771Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.771Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T11:34:46.771Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T11:34:46.771Z] 
Data Files Check:
[2025-12-31T11:34:46.771Z] .github/data/new_jobs.json: ✅ Exists (1 items, 7287 bytes)
[2025-12-31T11:34:46.772Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 31387 bytes)
[2025-12-31T11:34:46.772Z] 
========================================
[2025-12-31T11:34:46.772Z] Starting Enhanced Discord Bot...
[2025-12-31T11:34:46.772Z] ========================================
[2025-12-31T11:34:47.298Z] [BOT] ✅ Loaded V2 database: 53 jobs
[2025-12-31T11:34:48.013Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T11:34:48.013Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-31T11:34:48.013Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T11:34:48.013Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-31T11:34:48.055Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-31T11:34:48.099Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 33
[2025-12-31T11:34:48.100Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-31T11:34:48.100Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-31T11:34:48.100Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-31T11:34:48.101Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-31T11:34:48.101Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-31T11:34:48.101Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-31T11:34:48.104Z] [BOT] 📍 [ROUTING] "Research Associate - Accelerator Physics" @ ORG_13e36faa Lab
[2025-12-31T11:34:48.104Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2025-12-31T11:34:48.108Z] [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-31T11:34:48.239Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Accelerator Physics @ ORG_13e36faa Lab in #🤖・ai-jobs
  ✅ Industry: Research Associate - Accelerator Physics @ ORG_13e36faa Lab
[2025-12-31T11:34:49.888Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Accelerator Physics @ ORG_13e36faa Lab in #🗽・new-york
[2025-12-31T11:34:49.888Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-31T11:34:51.389Z] [BOT] 💾 Marked as posted: Research Associate - Accelerator Physics @ ORG_13e36faa Lab (instance #1)
[2025-12-31T11:34:51.390Z] [BOT] 💾 BEFORE ARCHIVING: 54 jobs in database
[2025-12-31T11:34:51.390Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-31T11:34:51.395Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
✅ Archiving complete: 1 archived, 53 active
[2025-12-31T11:34:51.396Z] [BOT] 💾 Saved posted_jobs.json: 53 active jobs
[2025-12-31T11:34:51.397Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-31T11:34:54.398Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-31T11:34:54.398Z] [BOT] ⏭️  Skipping duplicate: JID_23325421-physics_jr102182 (posted within 7 days)
[2025-12-31T11:34:54.398Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-31T11:34:54.399Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-31T11:34:54.440Z] [BOT] 📂 Loaded 1116 existing routing entries
[2025-12-31T11:34:54.484Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1117
   Timestamp: 2025-12-31T11:34:54.479Z
[2025-12-31T11:34:54.485Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_28858bfe.jsonl
   Total attempts: 2
   Successful: 2
[2025-12-31T11:34:54.485Z] [BOT] Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-31T11:34:54.485Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2025-12-31T11:34:54.485Z] [BOT] [STATS] Channel stats saved
[2025-12-31T11:34:56.494Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*