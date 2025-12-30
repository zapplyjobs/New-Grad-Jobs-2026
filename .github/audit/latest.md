# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T23:35:25.979Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-30T23:35:15.700Z] ========================================
[2025-12-30T23:35:15.701Z] Discord Bot Execution Log
[2025-12-30T23:35:15.701Z] Environment: GitHub Actions
[2025-12-30T23:35:15.702Z] Node Version: v20.19.6
[2025-12-30T23:35:15.702Z] ========================================
[2025-12-30T23:35:15.702Z] Environment Variables Check:
[2025-12-30T23:35:15.702Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T23:35:15.702Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.702Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T23:35:15.702Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T23:35:15.702Z] 
Multi-Channel Configuration:
[2025-12-30T23:35:15.702Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.702Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.702Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.703Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.703Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.703Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.703Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.703Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.703Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T23:35:15.703Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T23:35:15.703Z] 
Data Files Check:
[2025-12-30T23:35:15.703Z] .github/data/new_jobs.json: ✅ Exists (1 items, 7225 bytes)
[2025-12-30T23:35:15.704Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 42916 bytes)
[2025-12-30T23:35:15.704Z] 
========================================
[2025-12-30T23:35:15.704Z] Starting Enhanced Discord Bot...
[2025-12-30T23:35:15.704Z] ========================================
[2025-12-30T23:35:16.224Z] [BOT] ✅ Loaded V2 database: 70 jobs
[2025-12-30T23:35:16.691Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-30T23:35:16.692Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T23:35:16.692Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T23:35:16.692Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-30T23:35:16.780Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 41
[2025-12-30T23:35:16.781Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-30T23:35:16.782Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-30T23:35:16.782Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-30T23:35:16.782Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-30T23:35:16.783Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-30T23:35:16.783Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-30T23:35:16.785Z] [BOT] 📍 [ROUTING] "Entry/Mid Software Developer" @ ORG_1954b120
[2025-12-30T23:35:16.785Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-30T23:35:16.791Z] [BOT ERROR] (node:2472) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-30T23:35:17.036Z] [BOT] ✅ Created forum post: 🏢 Entry/Mid Software Developer @ ORG_1954b120 in #🤖・ai-jobs
  ✅ Industry: Entry/Mid Software Developer @ ORG_1954b120
[2025-12-30T23:35:18.786Z] [BOT] ✅ Created forum post: 🏢 Entry/Mid Software Developer @ ORG_1954b120 in #💻・remote-usa
[2025-12-30T23:35:18.786Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-30T23:35:20.287Z] [BOT] 💾 Marked as posted: Entry/Mid Software Developer @ ORG_1954b120 (instance #1)
[2025-12-30T23:35:20.288Z] [BOT] 💾 BEFORE ARCHIVING: 71 jobs in database
[2025-12-30T23:35:20.288Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-30T23:35:20.294Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2025-12-30T23:35:20.294Z] [BOT] ✅ Archiving complete: 2 archived, 69 active
[2025-12-30T23:35:20.296Z] [BOT] 💾 Saved posted_jobs.json: 69 active jobs
[2025-12-30T23:35:20.296Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T23:35:23.297Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-30T23:35:23.298Z] [BOT] ⏭️  Skipping duplicate: JID_44ba7e80-developer_320762 (posted within 7 days)
[2025-12-30T23:35:23.298Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-30T23:35:23.298Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-30T23:35:23.299Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-30T23:35:23.340Z] [BOT] 📂 Loaded 1110 existing routing entries
[2025-12-30T23:35:23.384Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1111
[2025-12-30T23:35:23.384Z] [BOT] Timestamp: 2025-12-30T23:35:23.379Z
[2025-12-30T23:35:23.384Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c55b425b.jsonl
   Total attempts: 2
   Successful: 2
[2025-12-30T23:35:23.385Z] [BOT] Failed: 0
   Skipped: 0
[2025-12-30T23:35:23.385Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2025-12-30T23:35:23.385Z] [BOT] Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-30T23:35:23.385Z] [BOT] [STATS] Channel stats saved
[2025-12-30T23:35:25.395Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2472) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*