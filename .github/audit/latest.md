# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T23:35:26.072Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T23:35:11.458Z] ========================================
[2026-01-02T23:35:11.460Z] Discord Bot Execution Log
[2026-01-02T23:35:11.460Z] Environment: GitHub Actions
[2026-01-02T23:35:11.460Z] Node Version: v20.19.6
[2026-01-02T23:35:11.460Z] ========================================
[2026-01-02T23:35:11.460Z] Environment Variables Check:
[2026-01-02T23:35:11.460Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T23:35:11.460Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.460Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T23:35:11.460Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T23:35:11.460Z] 
Multi-Channel Configuration:
[2026-01-02T23:35:11.461Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.461Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.461Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.461Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.461Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.461Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.461Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.461Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.461Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T23:35:11.461Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T23:35:11.461Z] 
Data Files Check:
[2026-01-02T23:35:11.462Z] .github/data/new_jobs.json: ✅ Exists (2 items, 12693 bytes)
[2026-01-02T23:35:11.462Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 82014 bytes)
[2026-01-02T23:35:11.462Z] 
========================================
[2026-01-02T23:35:11.462Z] Starting Enhanced Discord Bot...
[2026-01-02T23:35:11.462Z] ========================================
[2026-01-02T23:35:11.994Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2026-01-02T23:35:12.676Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T23:35:12.677Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T23:35:12.677Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T23:35:12.677Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-02T23:35:12.720Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T23:35:12.770Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 46
[2026-01-02T23:35:12.771Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-02T23:35:12.771Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-02T23:35:12.771Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-02T23:35:12.772Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-02T23:35:12.772Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T23:35:12.773Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-02T23:35:12.774Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
[2026-01-02T23:35:12.774Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-02T23:35:12.779Z] [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T23:35:13.029Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🤖・ai-jobs
[2026-01-02T23:35:13.029Z] [BOT] ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2026-01-02T23:35:14.801Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-02T23:35:16.300Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2026-01-02T23:35:16.301Z] [BOT] 💾 BEFORE ARCHIVING: 135 jobs in database
[2026-01-02T23:35:16.301Z] [BOT] ✅ No jobs to archive (all 135 jobs within 7-day window)
[2026-01-02T23:35:16.345Z] [BOT] 💾 Saved posted_jobs.json: 135 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T23:35:16.347Z] [BOT] 📍 [ROUTING] "Senior Research Specialist 1" @ ORG_03272755inceton University
[2026-01-02T23:35:16.347Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-02T23:35:16.564Z] [BOT] ✅ Created forum post: 🏢 Senior Research Specialist 1 @ ORG_03272755inceton University in #🤖・ai-jobs
[2026-01-02T23:35:16.564Z] [BOT] ✅ Industry: Senior Research Specialist 1 @ ORG_03272755inceton University
[2026-01-02T23:35:18.260Z] [BOT] ✅ Created forum post: 🏢 Senior Research Specialist 1 @ ORG_03272755inceton University in #💻・remote-usa
[2026-01-02T23:35:18.260Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-02T23:35:19.760Z] [BOT] 💾 Marked as posted: Senior Research Specialist 1 @ ORG_03272755inceton University (instance #1)
[2026-01-02T23:35:19.760Z] [BOT] 💾 BEFORE ARCHIVING: 136 jobs in database
✅ No jobs to archive (all 136 jobs within 7-day window)
[2026-01-02T23:35:19.763Z] [BOT] 💾 Saved posted_jobs.json: 136 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T23:35:22.764Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-02T23:35:22.764Z] [BOT] ⏭️  Skipping duplicate: JID_ab93b39d (posted within 7 days)
[2026-01-02T23:35:22.764Z] [BOT] ⏭️  Skipping duplicate: JID_7871be2b (posted within 7 days)
[2026-01-02T23:35:22.765Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-02T23:35:22.766Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-02T23:35:22.766Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T23:35:22.810Z] [BOT] 📂 Loaded 1210 existing routing entries
[2026-01-02T23:35:22.860Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 1212
[2026-01-02T23:35:22.860Z] [BOT] Timestamp: 2026-01-02T23:35:22.854Z
[2026-01-02T23:35:22.860Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T23:35:22.860Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-02T23:35:22.861Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-02T23:35:22.861Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 2 posts
[2026-01-02T23:35:22.861Z] [BOT] 2. #🌉・san-francisco: 1 posts
     3. #💻・remote-usa: 1 posts
[2026-01-02T23:35:22.861Z] [BOT] [STATS] Channel stats saved
[2026-01-02T23:35:24.875Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2315) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*