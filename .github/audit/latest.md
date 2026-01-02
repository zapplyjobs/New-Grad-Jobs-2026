# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T19:33:22.711Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T19:33:12.267Z] ========================================
[2026-01-02T19:33:12.268Z] Discord Bot Execution Log
[2026-01-02T19:33:12.269Z] Environment: GitHub Actions
[2026-01-02T19:33:12.269Z] Node Version: v20.19.6
[2026-01-02T19:33:12.269Z] ========================================
[2026-01-02T19:33:12.269Z] Environment Variables Check:
[2026-01-02T19:33:12.269Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T19:33:12.269Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T19:33:12.269Z] 
Multi-Channel Configuration:
[2026-01-02T19:33:12.269Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.269Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T19:33:12.270Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T19:33:12.270Z] 
Data Files Check:
[2026-01-02T19:33:12.270Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5563 bytes)
[2026-01-02T19:33:12.271Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 81353 bytes)
[2026-01-02T19:33:12.271Z] 
========================================
[2026-01-02T19:33:12.271Z] Starting Enhanced Discord Bot...
[2026-01-02T19:33:12.271Z] ========================================
[2026-01-02T19:33:12.783Z] [BOT] ✅ Loaded V2 database: 133 jobs
[2026-01-02T19:33:13.441Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T19:33:13.442Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T19:33:13.442Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T19:33:13.442Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T19:33:13.485Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T19:33:13.533Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 47
[2026-01-02T19:33:13.533Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T19:33:13.534Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T19:33:13.534Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T19:33:13.534Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T19:33:13.535Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T19:33:13.535Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-02T19:33:13.537Z] [BOT] 📍 [ROUTING] "Assistant Professor" @ ORG_f186449d University
[2026-01-02T19:33:13.537Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-02T19:33:13.554Z] [BOT ERROR] (node:2434) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T19:33:13.716Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_f186449d University in #🤖・ai-jobs
[2026-01-02T19:33:13.716Z] [BOT] ✅ Industry: Assistant Professor @ ORG_f186449d University
[2026-01-02T19:33:15.509Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_f186449d University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T19:33:17.010Z] [BOT] 💾 Marked as posted: Assistant Professor @ ORG_f186449d University (instance #1)
[2026-01-02T19:33:17.010Z] [BOT] 💾 BEFORE ARCHIVING: 134 jobs in database
[2026-01-02T19:33:17.010Z] [BOT] ✅ No jobs to archive (all 134 jobs within 7-day window)
[2026-01-02T19:33:17.016Z] [BOT] 💾 Saved posted_jobs.json: 134 active jobs
[2026-01-02T19:33:17.016Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T19:33:20.017Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T19:33:20.018Z] [BOT] ⏭️  Skipping duplicate: JID_efc4dd0b-professor_jr107320-1 (posted within 7 days)
[2026-01-02T19:33:20.018Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T19:33:20.019Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-02T19:33:20.019Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-02T19:33:20.061Z] [BOT] 📂 Loaded 1209 existing routing entries
[2026-01-02T19:33:20.106Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-02T19:33:20.106Z] [BOT] Total entries: 1210
   Timestamp: 2026-01-02T19:33:20.100Z
[2026-01-02T19:33:20.106Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T19:33:20.107Z] [BOT] Total attempts: 2
[2026-01-02T19:33:20.107Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T19:33:20.107Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-02T19:33:20.107Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-02T19:33:20.107Z] [BOT] [STATS] Channel stats saved
[2026-01-02T19:33:22.118Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2434) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*