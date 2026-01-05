# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T19:24:57.290Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T19:24:39.141Z] ========================================
[2026-01-05T19:24:39.142Z] Discord Bot Execution Log
[2026-01-05T19:24:39.143Z] Environment: GitHub Actions
[2026-01-05T19:24:39.143Z] Node Version: v20.19.6
[2026-01-05T19:24:39.143Z] ========================================
[2026-01-05T19:24:39.143Z] Environment Variables Check:
[2026-01-05T19:24:39.143Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T19:24:39.143Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.143Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T19:24:39.143Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T19:24:39.143Z] 
Multi-Channel Configuration:
[2026-01-05T19:24:39.143Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.144Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.144Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.144Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.144Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.144Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.144Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.144Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.144Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T19:24:39.144Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T19:24:39.144Z] 
Data Files Check:
[2026-01-05T19:24:39.145Z] .github/data/new_jobs.json: ✅ Exists (2 items, 11558 bytes)
[2026-01-05T19:24:39.150Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 667223 bytes)
[2026-01-05T19:24:39.150Z] 
========================================
[2026-01-05T19:24:39.150Z] Starting Enhanced Discord Bot...
[2026-01-05T19:24:39.150Z] ========================================
[2026-01-05T19:24:39.678Z] [BOT] ✅ Loaded V2 database: 1311 jobs
[2026-01-05T19:24:40.788Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T19:24:40.789Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T19:24:40.789Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T19:24:40.789Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[BOT] 📬 Found 2 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-01-05T19:24:40.791Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-05T19:24:40.791Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-05T19:24:40.791Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-05T19:24:40.792Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-05T19:24:40.792Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T19:24:40.793Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-05T19:24:40.794Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Machine Learning (Safety)" @ discord
[2026-01-05T19:24:40.794Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-05T19:24:40.799Z] [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T19:24:41.186Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Machine Learning (Safety) @ discord in #🤖・ai-jobs
[2026-01-05T19:24:41.186Z] [BOT] ✅ Industry: Staff Software Engineer, Machine Learning (Safety) @ discord
[2026-01-05T19:24:42.912Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Machine Learning (Safety) @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-05T19:24:44.413Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Machine Learning (Safety) @ discord (instance #1)
[2026-01-05T19:24:44.413Z] [BOT] 💾 BEFORE ARCHIVING: 1312 jobs in database
[2026-01-05T19:24:44.414Z] [BOT] ✅ No jobs to archive (all 1312 jobs within 7-day window)
[2026-01-05T19:24:44.424Z] [BOT] 💾 Saved posted_jobs.json: 1312 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T19:24:47.426Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-05T19:24:47.426Z] [BOT] 📍 [ROUTING] "Software Integration Engineer, Factory Firmware" @ ORG_f89f8538
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T19:24:47.754Z] [BOT] ✅ Created forum post: ⚡ Software Integration Engineer, Factory Firmware @ ORG_f89f8538 in #💻・tech-jobs
[2026-01-05T19:24:47.754Z] [BOT] ✅ Industry: Software Integration Engineer, Factory Firmware @ ORG_f89f8538
[2026-01-05T19:24:49.532Z] [BOT] ✅ Created forum post: ⚡ Software Integration Engineer, Factory Firmware @ ORG_f89f8538 in #🌉・san-francisco
[2026-01-05T19:24:49.533Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-05T19:24:51.033Z] [BOT] 💾 Marked as posted: Software Integration Engineer, Factory Firmware @ ORG_f89f8538 (instance #1)
[2026-01-05T19:24:51.034Z] [BOT] 💾 BEFORE ARCHIVING: 1313 jobs in database
[2026-01-05T19:24:51.035Z] [BOT] ✅ No jobs to archive (all 1313 jobs within 7-day window)
[2026-01-05T19:24:51.045Z] [BOT] 💾 Saved posted_jobs.json: 1313 active jobs
[2026-01-05T19:24:51.046Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T19:24:54.046Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-05T19:24:54.046Z] [BOT] ⏭️  Skipping duplicate: JID_557f71a6 (posted within 7 days)
[2026-01-05T19:24:54.047Z] [BOT] ⏭️  Skipping duplicate: JID_30bcdf18 (posted within 7 days)
[2026-01-05T19:24:54.047Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-05T19:24:54.047Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-05T19:24:54.048Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T19:24:54.100Z] [BOT] 📂 Loaded 2222 existing routing entries
[2026-01-05T19:24:54.162Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-05T19:24:54.162Z] [BOT] Total entries: 2224
   Timestamp: 2026-01-05T19:24:54.146Z
[2026-01-05T19:24:54.162Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T19:24:54.162Z] [BOT] Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-05T19:24:54.163Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T19:24:54.163Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #🌉・san-francisco: 2 posts
[2026-01-05T19:24:54.163Z] [BOT] 2. #🤖・ai-jobs: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-05T19:24:54.163Z] [BOT] [STATS] Channel stats saved
[2026-01-05T19:24:56.175Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2385) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*