# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T20:25:25.925Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T20:25:15.757Z] ========================================
[2026-01-05T20:25:15.759Z] Discord Bot Execution Log
[2026-01-05T20:25:15.759Z] Environment: GitHub Actions
[2026-01-05T20:25:15.760Z] Node Version: v20.19.6
[2026-01-05T20:25:15.760Z] ========================================
[2026-01-05T20:25:15.760Z] Environment Variables Check:
[2026-01-05T20:25:15.760Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T20:25:15.760Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.760Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T20:25:15.760Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T20:25:15.760Z] 
Multi-Channel Configuration:
[2026-01-05T20:25:15.760Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.760Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.761Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.761Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.761Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.761Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.761Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.761Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.761Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T20:25:15.761Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T20:25:15.761Z] 
Data Files Check:
[2026-01-05T20:25:15.762Z] .github/data/new_jobs.json: ✅ Exists (1 items, 19635 bytes)
[2026-01-05T20:25:15.766Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 668349 bytes)
[2026-01-05T20:25:15.766Z] 
========================================
[2026-01-05T20:25:15.766Z] Starting Enhanced Discord Bot...
[2026-01-05T20:25:15.766Z] ========================================
[2026-01-05T20:25:16.305Z] [BOT] ✅ Loaded V2 database: 1313 jobs
[2026-01-05T20:25:16.808Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T20:25:16.809Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T20:25:16.809Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T20:25:16.809Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[BOT] 📬 Found 1 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Security Development Project Specialist at anthropic
[2026-01-05T20:25:16.811Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-05T20:25:16.811Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-05T20:25:16.811Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T20:25:16.811Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T20:25:16.812Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T20:25:16.814Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-05T20:25:16.815Z] [BOT] 📍 [ROUTING] "Security Development Project Specialist" @ anthropic
[2026-01-05T20:25:16.816Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T20:25:16.821Z] [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T20:25:16.954Z] [BOT] ✅ Created forum post: 🏢 Security Development Project Specialist @ anthropic in #💻・tech-jobs
[2026-01-05T20:25:16.954Z] [BOT] ✅ Industry: Security Development Project Specialist @ anthropic
[2026-01-05T20:25:18.644Z] [BOT] ✅ Created forum post: 🏢 Security Development Project Specialist @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T20:25:20.146Z] [BOT] 💾 Marked as posted: Security Development Project Specialist @ anthropic (instance #1)
[2026-01-05T20:25:20.146Z] [BOT] 💾 BEFORE ARCHIVING: 1314 jobs in database
[2026-01-05T20:25:20.147Z] [BOT] ✅ No jobs to archive (all 1314 jobs within 7-day window)
[2026-01-05T20:25:20.160Z] [BOT] 💾 Saved posted_jobs.json: 1314 active jobs
[2026-01-05T20:25:20.160Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T20:25:23.161Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T20:25:23.162Z] [BOT] ⏭️  Skipping duplicate: JID_68413eab (posted within 7 days)
[2026-01-05T20:25:23.162Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-05T20:25:23.163Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-05T20:25:23.163Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T20:25:23.216Z] [BOT] 📂 Loaded 2224 existing routing entries
[2026-01-05T20:25:23.272Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2225
   Timestamp: 2026-01-05T20:25:23.261Z
[2026-01-05T20:25:23.272Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
   Total attempts: 2
   Successful: 2
[2026-01-05T20:25:23.272Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-05T20:25:23.272Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-05T20:25:23.273Z] [BOT] 2. #🌉・san-francisco: 1 posts
[2026-01-05T20:25:23.273Z] [BOT] [STATS] Channel stats saved
[2026-01-05T20:25:25.284Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*