# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T21:50:39.002Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T21:50:26.443Z] ========================================
[2026-01-05T21:50:26.445Z] Discord Bot Execution Log
[2026-01-05T21:50:26.445Z] Environment: GitHub Actions
[2026-01-05T21:50:26.445Z] Node Version: v20.19.6
[2026-01-05T21:50:26.445Z] ========================================
[2026-01-05T21:50:26.445Z] Environment Variables Check:
[2026-01-05T21:50:26.445Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T21:50:26.445Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.445Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T21:50:26.445Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T21:50:26.445Z] 
Multi-Channel Configuration:
[2026-01-05T21:50:26.445Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.446Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.446Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.446Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.446Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.446Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.446Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.446Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.446Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T21:50:26.446Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T21:50:26.446Z] 
Data Files Check:
[2026-01-05T21:50:26.447Z] .github/data/new_jobs.json: ✅ Exists (1 items, 20442 bytes)
[2026-01-05T21:50:26.451Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 670406 bytes)
[2026-01-05T21:50:26.452Z] 
========================================
[2026-01-05T21:50:26.452Z] Starting Enhanced Discord Bot...
[2026-01-05T21:50:26.452Z] ========================================
[2026-01-05T21:50:26.999Z] [BOT] ✅ Loaded V2 database: 1317 jobs
[2026-01-05T21:50:29.756Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T21:50:29.757Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T21:50:29.757Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T21:50:29.760Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-05T21:50:29.760Z] [BOT] [BOT] 📬 Found 1 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineering Manager, Claude Services at anthropic
[2026-01-05T21:50:29.761Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-05T21:50:29.762Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-05T21:50:29.762Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T21:50:29.762Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T21:50:29.762Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T21:50:29.764Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-05T21:50:29.765Z] [BOT] 📍 [ROUTING] "Engineering Manager, Claude Services" @ anthropic
[2026-01-05T21:50:29.766Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T21:50:29.770Z] [BOT ERROR] (node:2356) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T21:50:29.967Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Claude Services @ anthropic in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Claude Services @ anthropic
[2026-01-05T21:50:31.710Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Claude Services @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T21:50:33.212Z] [BOT] 💾 Marked as posted: Engineering Manager, Claude Services @ anthropic (instance #1)
[2026-01-05T21:50:33.212Z] [BOT] 💾 BEFORE ARCHIVING: 1318 jobs in database
[2026-01-05T21:50:33.213Z] [BOT] ✅ No jobs to archive (all 1318 jobs within 7-day window)
[2026-01-05T21:50:33.226Z] [BOT] 💾 Saved posted_jobs.json: 1318 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T21:50:36.226Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T21:50:36.227Z] [BOT] ⏭️  Skipping duplicate: JID_b613c2f8 (posted within 7 days)
[2026-01-05T21:50:36.227Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-05T21:50:36.228Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-05T21:50:36.228Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T21:50:36.282Z] [BOT] 📂 Loaded 2228 existing routing entries
[2026-01-05T21:50:36.341Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2229
   Timestamp: 2026-01-05T21:50:36.329Z
[2026-01-05T21:50:36.341Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T21:50:36.341Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-05T21:50:36.342Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2026-01-05T21:50:38.353Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2356) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*